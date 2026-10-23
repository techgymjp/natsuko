/* 司令塔 — 音響エンジン
 * BGMも効果音もすべて Web Audio API でその場で合成する(音声ファイルなし)。
 * BGM はステップシーケンサー(16分音符単位)で鳴らし、トラックの切り替えはクロスフェード。
 */
window.SND = (() => {
  'use strict';
  let ctx = null, master, comp, bgmBus, sfxBus, revB, revS, noiseBuf;
  const settings = { master: 0.8, bgm: 0.55, sfx: 0.8, muted: false };
  let cur = null;
  let pending = null;
  let intensity = 0;
  const LOOK = 0.12;
  const mtof = m => 440 * Math.pow(2, (m - 69) / 12);
  const rnd = a => a[Math.floor(Math.random() * a.length)];

  function impulse(dur, decay) {
    const len = Math.floor(ctx.sampleRate * dur);
    const b = ctx.createBuffer(2, len, ctx.sampleRate);
    for (let c = 0; c < 2; c++) {
      const d = b.getChannelData(c);
      for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, decay);
    }
    return b;
  }
  function makeNoise(sec) {
    const len = Math.floor(ctx.sampleRate * sec);
    const b = ctx.createBuffer(1, len, ctx.sampleRate);
    const d = b.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    return b;
  }

  function init() {
    if (ctx) { if (ctx.state === 'suspended') ctx.resume(); return true; }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return false;
    try { ctx = new AC(); } catch (e) { return false; }
    comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -12; comp.ratio.value = 3.5; comp.attack.value = 0.01; comp.release.value = 0.25;
    master = ctx.createGain(); master.connect(comp); comp.connect(ctx.destination);
    bgmBus = ctx.createGain(); bgmBus.connect(master);
    sfxBus = ctx.createGain(); sfxBus.connect(master);
    const cb = ctx.createConvolver(); cb.buffer = impulse(3.2, 2.4);
    revB = ctx.createGain(); revB.connect(cb); cb.connect(bgmBus);
    const cs = ctx.createConvolver(); cs.buffer = impulse(2.2, 2.6);
    revS = ctx.createGain(); revS.connect(cs); cs.connect(sfxBus);
    noiseBuf = makeNoise(3);
    applyVol();
    setInterval(schedule, 25);
    if (pending) { const p = pending; pending = null; play(p[0], p[1]); }
    return true;
  }
  function applyVol() {
    if (!ctx) return;
    const t = ctx.currentTime;
    master.gain.setTargetAtTime(settings.muted ? 0 : settings.master, t, 0.05);
    bgmBus.gain.setTargetAtTime(settings.bgm * 0.9, t, 0.05);
    sfxBus.gain.setTargetAtTime(settings.sfx, t, 0.05);
  }

  /* ── 声部 ── */
  function voice(o) {
    if (!ctx) return;
    const t = o.t != null ? o.t : ctx.currentTime;
    const d = o.d || 0.2;
    const os = ctx.createOscillator();
    os.type = o.type || 'sine';
    os.frequency.setValueAtTime(o.f, t);
    if (o.fEnd) os.frequency.exponentialRampToValueAtTime(o.fEnd, t + (o.fTime || d));
    if (o.detune) os.detune.value = o.detune;
    let node = os;
    if (o.lp) {
      const f = ctx.createBiquadFilter(); f.type = 'lowpass';
      f.frequency.setValueAtTime(o.lp, t);
      if (o.lpEnd) f.frequency.exponentialRampToValueAtTime(o.lpEnd, t + (o.lpTime || d));
      f.Q.value = o.q || 0.7; node.connect(f); node = f;
    }
    const g = ctx.createGain();
    const a = o.a != null ? o.a : 0.005;
    const peak = Math.max(0.0002, o.g != null ? o.g : 0.2);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(peak, t + a);
    if (o.hold) g.gain.setValueAtTime(peak, t + a + o.hold);
    g.gain.exponentialRampToValueAtTime(0.0001, t + d);
    node.connect(g);
    route(g, o);
    os.start(t); os.stop(t + d + 0.05);
  }
  function noise(o) {
    if (!ctx) return;
    const t = o.t != null ? o.t : ctx.currentTime;
    const d = o.d || 0.2;
    const src = ctx.createBufferSource();
    src.buffer = noiseBuf; src.loop = true;
    if (o.rate) src.playbackRate.value = o.rate;
    let node = src;
    const filt = (type, f, fEnd, q) => {
      const fl = ctx.createBiquadFilter(); fl.type = type;
      fl.frequency.setValueAtTime(f, t);
      if (fEnd) fl.frequency.exponentialRampToValueAtTime(fEnd, t + (o.fTime || d));
      fl.Q.value = q || 0.7; node.connect(fl); node = fl;
    };
    if (o.bp) filt('bandpass', o.bp, o.bpEnd, o.q || 1);
    if (o.lp) filt('lowpass', o.lp, o.lpEnd, o.q);
    if (o.hp) filt('highpass', o.hp, o.hpEnd, 0.7);
    const g = ctx.createGain();
    const a = o.a != null ? o.a : 0.003;
    const peak = Math.max(0.0002, o.g != null ? o.g : 0.2);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(peak, t + a);
    if (o.hold) g.gain.setValueAtTime(peak, t + a + o.hold);
    g.gain.exponentialRampToValueAtTime(0.0001, t + d);
    node.connect(g);
    route(g, o);
    src.start(t, Math.random() * 2); src.stop(t + d + 0.05);
  }
  function route(g, o) {
    if (o.tr) {
      g.connect(o.tr.gain);
      if (o.rev) { const s = ctx.createGain(); s.gain.value = o.rev; g.connect(s); s.connect(o.tr.rev); }
    } else {
      g.connect(sfxBus);
      if (o.rev) { const s = ctx.createGain(); s.gain.value = o.rev; g.connect(s); s.connect(revS); }
    }
  }

  /* ── 楽器 ── */
  function pad(tr, notes, t, d, g, lp) {
    notes.forEach(n => {
      [-7, 7].forEach(dt => voice({ tr, type: 'sawtooth', f: mtof(n), detune: dt, t, d, a: Math.min(1.2, d * 0.35), g: g / notes.length, lp: lp || 900, rev: 0.6 }));
    });
  }
  function bass(tr, n, t, d, g, lp) { voice({ tr, type: 'sawtooth', f: mtof(n), t, d, a: 0.01, g, lp: lp || 420, q: 3 }); voice({ tr, type: 'sine', f: mtof(n), t, d, a: 0.01, g: g * 0.8 }); }
  function pluck(tr, n, t, g, type) { voice({ tr, type: type || 'triangle', f: mtof(n), t, d: 0.7, a: 0.004, g, rev: 0.5 }); }
  function bell(tr, n, t, g) {
    voice({ tr, type: 'sine', f: mtof(n), t, d: 2.6, a: 0.003, g, rev: 0.8 });
    voice({ tr, type: 'sine', f: mtof(n) * 2.76, t, d: 1.0, a: 0.003, g: g * 0.35, rev: 0.8 });
  }
  function timp(tr, t, g, n) {
    const f = mtof(n || 33);
    voice({ tr, type: 'sine', f: f * 1.8, fEnd: f, fTime: 0.08, t, d: 0.9, a: 0.003, g, rev: 0.4 });
    noise({ tr, lp: 300, t, d: 0.18, g: g * 0.5 });
  }
  function hat(tr, t, g) { noise({ tr, hp: 7000, t, d: 0.04, g }); }
  function brass(tr, notes, t, d, g) {
    notes.forEach(n => voice({ tr, type: 'sawtooth', f: mtof(n), t, d, a: 0.04, g: g / notes.length, lp: 500, lpEnd: 2400, lpTime: d * 0.3, rev: 0.5 }));
  }
  function loopNoise(tr, o) {
    const t = ctx.currentTime;
    const src = ctx.createBufferSource(); src.buffer = noiseBuf; src.loop = true;
    const f = ctx.createBiquadFilter(); f.type = o.type || 'bandpass'; f.frequency.value = o.f; f.Q.value = o.q || 1;
    const g = ctx.createGain(); g.gain.value = o.g;
    src.connect(f); f.connect(g); g.connect(tr.gain);
    let lfo = null;
    if (o.lfo) {
      lfo = ctx.createOscillator(); lfo.frequency.value = o.lfo;
      const lg = ctx.createGain(); lg.gain.value = o.depth || o.f * 0.5;
      lfo.connect(lg); lg.connect(f.frequency); lfo.start(t);
      if (o.ampLfo) { const ag = ctx.createGain(); ag.gain.value = o.g * 0.6; lfo.connect(ag); ag.connect(g.gain); }
    }
    src.start(t);
    return { stop(at) { try { src.stop(at); lfo && lfo.stop(at); } catch (e) { /* 停止済み */ } } };
  }
  function drone(tr, n, g, type) {
    const t = ctx.currentTime;
    const o = ctx.createOscillator(); o.type = type || 'sine'; o.frequency.value = mtof(n);
    const gg = ctx.createGain(); gg.gain.value = g;
    o.connect(gg); gg.connect(tr.gain); o.start(t);
    return { stop(at) { try { o.stop(at); } catch (e) { /* 停止済み */ } } };
  }

  /* ── トラック定義 ── */
  const TRACKS = {
    // タイトル・作戦室: 低いドローンに鐘、遠くのレーダー音
    title: {
      tempo: 64,
      setup(tr) { tr.nodes.push(drone(tr, 26, 0.05), drone(tr, 38, 0.015, 'triangle'), loopNoise(tr, { type: 'lowpass', f: 300, g: 0.012, lfo: 0.07, depth: 150 })); },
      step(tr, s, t, sx) {
        const prog = [[50, 53, 57], [46, 50, 53], [43, 46, 50], [45, 49, 52]];
        const bar = Math.floor(s / 16), pos = s % 16, ch = prog[bar % 4];
        if (pos === 0) { pad(tr, ch.map(n => n + 12), t, sx * 16 * 1.1, 0.06, 800); bass(tr, ch[0] - 24, t, sx * 14, 0.07, 260); }
        if (pos === 8) bass(tr, ch[0] - 24, t, sx * 7, 0.04, 220);
        if (pos % 2 === 0 && Math.random() < 0.16) bell(tr, rnd(ch) + 24, t, 0.035);
        if (pos === 0 && bar % 4 === 2) voice({ tr, type: 'sine', f: 1320, t: t + sx * 4, d: 1.6, a: 0.002, g: 0.03, rev: 0.9 });
      }
    },
    // ブリーフィング: 時を刻む音と、抑えたパッド
    brief: {
      tempo: 84,
      setup(tr) { tr.nodes.push(drone(tr, 33, 0.04)); },
      step(tr, s, t, sx) {
        const prog = [[57, 60, 64], [53, 57, 60], [48, 52, 55], [52, 56, 59]];
        const bar = Math.floor(s / 16), pos = s % 16, ch = prog[bar % 4];
        if (pos === 0) pad(tr, ch, t, sx * 16 * 1.05, 0.05, 700);
        if (pos % 4 === 0) { noise({ tr, hp: 5000, t, d: 0.025, g: pos === 0 ? 0.04 : 0.025 }); voice({ tr, type: 'sine', f: pos === 0 ? 1800 : 1500, t, d: 0.03, g: 0.012 }); }
        if (pos === 0 || pos === 6 || pos === 10) bass(tr, ch[0] - 24, t, sx * 3, 0.05, 300);
        if (pos % 2 === 1 && Math.random() < 0.08) pluck(tr, rnd(ch) + 12, t, 0.025, 'sine');
      }
    },
    // 振り返り: 長調の穏やかな進行
    review: {
      tempo: 72,
      setup(tr) { tr.nodes.push(drone(tr, 29, 0.025)); },
      step(tr, s, t, sx) {
        const prog = [[53, 57, 60], [48, 52, 55], [50, 53, 57], [46, 50, 53]];
        const bar = Math.floor(s / 16), pos = s % 16, ch = prog[bar % 4];
        if (pos === 0) { pad(tr, ch, t, sx * 16 * 1.05, 0.045, 1100); bass(tr, ch[0] - 12, t, sx * 15, 0.05, 300); }
        if (pos % 2 === 0) {
          const arp = [ch[0], ch[1], ch[2], ch[0] + 12, ch[2], ch[1], ch[0] + 12, ch[2]];
          pluck(tr, arp[(pos / 2) % 8] + 12, t, 0.03);
        }
        if (pos === 0 && bar % 2 === 0) bell(tr, ch[2] + 24, t, 0.03);
      }
    }
  };

  // 緊張(局面)トラック: 舞台ごとに調・テンポ・音色を変える
  const FLAVORS = {
    cold:  { root: 40, base: 92, prog: [[0, 3, 7], [-4, 0, 3], [-2, 2, 5], [-5, -1, 2]] },
    space: { root: 36, base: 86, prog: [[0, 3, 7], [-4, 0, 3], [-7, -3, 0], [-5, -2, 2]] },
    naval: { root: 38, base: 100, prog: [[0, 3, 7], [1, 5, 8], [-2, 2, 5], [0, 3, 7]] },
    ice:   { root: 35, base: 78, prog: [[0, 3, 7], [-4, 0, 3], [-9, -5, -2], [-5, -1, 2]] },
    mine:  { root: 42, base: 84, prog: [[0, 3, 7], [-2, 2, 5], [-4, 0, 3], [-5, -1, 2]] },
    air:   { root: 45, base: 116, prog: [[0, 3, 7], [-4, 0, 3], [-2, 2, 5], [-1, 3, 6]] },
    daily: { root: 38, base: 96, prog: [[0, 3, 7], [-4, 0, 3], [-2, 2, 5], [-5, -1, 2]] }
  };
  function makeTension(fl) {
    const F = FLAVORS[fl] || FLAVORS.daily;
    return {
      tempo: F.base,
      setup(tr) {
        if (fl === 'space') tr.nodes.push(loopNoise(tr, { type: 'highpass', f: 6000, g: 0.008 }), drone(tr, F.root - 12, 0.04));
        else if (fl === 'naval') tr.nodes.push(loopNoise(tr, { type: 'lowpass', f: 400, g: 0.04, lfo: 0.12, depth: 250, ampLfo: 1 }));
        else if (fl === 'ice') tr.nodes.push(loopNoise(tr, { type: 'bandpass', f: 700, q: 2.5, g: 0.05, lfo: 0.09, depth: 450, ampLfo: 1 }));
        else if (fl === 'mine') tr.nodes.push(loopNoise(tr, { type: 'lowpass', f: 90, q: 2, g: 0.09 }), drone(tr, F.root - 24, 0.04));
        else if (fl === 'air') tr.nodes.push(loopNoise(tr, { type: 'bandpass', f: 1500, q: 0.5, g: 0.02, lfo: 0.2, depth: 600 }));
        else if (fl === 'cold') tr.nodes.push(drone(tr, F.root - 12, 0.035));
        else tr.nodes.push(drone(tr, F.root - 12, 0.03));
      },
      step(tr, s, t, sx) {
        tr.tempo = F.base + 38 * intensity;
        const bar = Math.floor(s / 16), pos = s % 16;
        const rel = F.prog[Math.floor(bar / 2) % 4];
        const r = F.root + rel[0];
        const chord = rel.map(x => F.root + 12 + x);
        if (pos === 0 && bar % 2 === 0) pad(tr, chord, t, sx * 32 * 1.02, 0.04 + 0.02 * intensity, 700 + 900 * intensity);
        if (pos % 2 === 0) {
          const pat = [0, 0, 12, 0, 0, 7, 0, 12];
          bass(tr, r - 12 + pat[(pos / 2) % 8], t, sx * 1.7, 0.06 + 0.04 * intensity, 380 + 600 * intensity);
        }
        if (fl === 'naval') {
          if ([0, 3, 6, 8, 11, 14].includes(pos)) timp(tr, t, pos === 0 || pos === 8 ? 0.16 : 0.08, F.root - 12);
        } else {
          if (pos === 0 || pos === 8) timp(tr, t, 0.13, F.root - 12);
          if (intensity > 0.45 && (pos === 4 || pos === 12)) timp(tr, t, 0.07, F.root - 12);
        }
        if (intensity > 0.25 && pos % 2 === 1) hat(tr, t, 0.012 + 0.025 * intensity);
        if (fl === 'air' && pos % 2 === 0) hat(tr, t, 0.012);
        if (intensity > 0.7 && pos === 0) brass(tr, chord.map(n => n - 12), t, sx * 6, 0.08);
        // 舞台の色づけ
        if (fl === 'cold' && pos % 4 === 2 && Math.random() < 0.18) {
          const n = 2 + Math.floor(Math.random() * 3);
          for (let i = 0; i < n; i++) voice({ tr, type: 'sine', f: 760, t: t + i * 0.11, d: Math.random() < 0.4 ? 0.16 : 0.06, a: 0.003, hold: 0.03, g: 0.02 });
        }
        if (fl === 'space' && pos % 2 === 0) {
          const arp = [0, 7, 12, 15, 19, 15, 12, 7];
          voice({ tr, type: 'sine', f: mtof(F.root + 36 + rel[0] + arp[(pos / 2) % 8]), t, d: 0.35, a: 0.004, g: 0.012, rev: 0.9 });
        }
        if (fl === 'ice' && pos === 6 && Math.random() < 0.5) bell(tr, rnd(chord) + 24, t, 0.03);
        if (fl === 'mine') {
          if (Math.random() < 0.05) voice({ tr, type: 'sine', f: 1400 + Math.random() * 900, fEnd: 700, fTime: 0.08, t, d: 0.14, a: 0.002, g: 0.03, rev: 0.9 });
          if (pos === 12 && bar % 4 === 3) voice({ tr, type: 'square', f: 180, t, d: 0.5, a: 0.002, g: 0.025, lp: 900, rev: 0.7 });
        }
        if (fl === 'daily' && pos % 4 === 2 && Math.random() < 0.3) pluck(tr, rnd(chord) + 12, t, 0.02, 'sine');
      }
    };
  }

  /* ── スケジューラ ── */
  function schedule() {
    if (!ctx || !cur) return;
    const tr = cur;
    if (tr.nextTime < ctx.currentTime - 0.25) tr.nextTime = ctx.currentTime + 0.05; // タブ復帰時の暴走を防ぐ
    while (tr.nextTime < ctx.currentTime + LOOK) {
      const sx = 60 / tr.tempo / 4;
      try { tr.def.step(tr, tr.s, tr.nextTime, sx); } catch (e) { /* 1ステップの失敗で止めない */ }
      tr.s++; tr.nextTime += 60 / tr.tempo / 4;
    }
  }
  function fadeOut(tr, dur) {
    const now = ctx.currentTime;
    [tr.gain, tr.rev].forEach(g => { g.gain.cancelScheduledValues(now); g.gain.setValueAtTime(g.gain.value, now); g.gain.linearRampToValueAtTime(0, now + dur); });
    tr.nodes.forEach(n => n.stop(now + dur + 0.1));
    setTimeout(() => { try { tr.gain.disconnect(); tr.rev.disconnect(); } catch (e) { /* 切断済み */ } }, (dur + 3.5) * 1000);
  }
  function play(name, arg) {
    if (!ctx) { pending = [name, arg]; return; }
    const key = name + ':' + (arg || '');
    if (cur && cur.key === key) return;
    const now = ctx.currentTime;
    if (cur) fadeOut(cur, 1.6);
    const def = name === 'tension' ? makeTension(arg) : TRACKS[name];
    if (!def) { cur = null; return; }
    const tr = { key, def, s: 0, tempo: def.tempo, nextTime: now + 0.15, nodes: [], gain: ctx.createGain(), rev: ctx.createGain() };
    tr.gain.gain.setValueAtTime(0, now); tr.gain.gain.linearRampToValueAtTime(1, now + 1.6);
    tr.rev.gain.setValueAtTime(0, now); tr.rev.gain.linearRampToValueAtTime(1, now + 1.6);
    tr.gain.connect(bgmBus); tr.rev.connect(revB);
    cur = tr;
    def.setup && def.setup(tr);
  }
  function stopBgm(dur) { if (ctx && cur) { fadeOut(cur, dur || 1.5); cur = null; } }

  /* ── 効果音 ── */
  let lastHover = 0, lastKey = 0, lastSlide = 0;
  const now = () => (ctx ? ctx.currentTime : 0);
  const sfx = {
    click() { voice({ type: 'sine', f: 1150, fEnd: 700, d: 0.07, g: 0.12 }); noise({ hp: 4000, d: 0.015, g: 0.04 }); },
    hover() { const n = performance.now(); if (n - lastHover < 60) return; lastHover = n; voice({ type: 'sine', f: 2300, d: 0.03, g: 0.018 }); },
    select() { const t = now(); voice({ type: 'triangle', f: 660, t, d: 0.09, g: 0.1 }); voice({ type: 'triangle', f: 990, t: t + 0.06, d: 0.14, g: 0.09 }); },
    key() { const n = performance.now(); if (n - lastKey < 38) return; lastKey = n; noise({ bp: 2200 + Math.random() * 2600, q: 4, d: 0.02, g: 0.09 }); voice({ type: 'square', f: 90 + Math.random() * 30, d: 0.02, g: 0.012, lp: 600 }); },
    carriage() { const t = now(); noise({ bp: 1200, bpEnd: 3000, q: 2, t, d: 0.18, g: 0.05 }); voice({ type: 'sine', f: 2637, t: t + 0.16, d: 0.6, g: 0.04, rev: 0.3 }); },
    incoming() { const t = now(); [0, 0.13].forEach(dt => voice({ type: 'sine', f: 1046, t: t + dt, d: 0.09, a: 0.003, hold: 0.04, g: 0.07 })); },
    quindar(out) { voice({ type: 'sine', f: out ? 2475 : 2525, d: 0.26, a: 0.003, hold: 0.22, g: 0.05 }); },
    morse(code) {
      let t = now();
      for (const c of (code || '-.-.')) {
        if (c === ' ') { t += 0.18; continue; }
        const d = c === '-' ? 0.18 : 0.06;
        voice({ type: 'sine', f: 760, t, d: d + 0.01, a: 0.003, hold: d - 0.01, g: 0.06 });
        t += d + 0.07;
      }
    },
    radio() { noise({ bp: 1700, q: 0.8, d: 0.35, g: 0.07, a: 0.01 }); voice({ type: 'square', f: 50, d: 0.3, g: 0.01, lp: 300 }); },
    alarm() { const t = now(); for (let i = 0; i < 3; i++) { voice({ type: 'square', f: 554, t: t + i * 0.42, d: 0.2, a: 0.01, hold: 0.15, g: 0.05, lp: 2000 }); voice({ type: 'square', f: 440, t: t + i * 0.42 + 0.21, d: 0.2, a: 0.01, hold: 0.15, g: 0.05, lp: 2000 }); } },
    stamp() { const t = now(); voice({ type: 'sine', f: 150, fEnd: 42, fTime: 0.18, t, d: 0.32, a: 0.002, g: 0.55 }); noise({ lp: 1200, t, d: 0.12, g: 0.35 }); noise({ bp: 400, q: 2, t: t + 0.02, d: 0.4, g: 0.06, rev: 0.5 }); },
    tick(urgent) { const t = now(); noise({ hp: 4500, t, d: 0.022, g: urgent ? 0.12 : 0.05 }); voice({ type: 'sine', f: urgent ? 2000 : 1600, t, d: 0.03, g: urgent ? 0.04 : 0.018 }); },
    heart() { const t = now(); voice({ type: 'sine', f: 62, fEnd: 40, t, d: 0.16, a: 0.004, g: 0.4 }); voice({ type: 'sine', f: 58, fEnd: 38, t: t + 0.2, d: 0.16, a: 0.004, g: 0.28 }); },
    success() { const t = now(); [72, 76, 79, 84].forEach((n, i) => { voice({ type: 'sine', f: mtof(n), t: t + i * 0.09, d: 1.6, a: 0.003, g: 0.07, rev: 0.6 }); voice({ type: 'sine', f: mtof(n) * 2.76, t: t + i * 0.09, d: 0.5, a: 0.003, g: 0.02, rev: 0.6 }); }); },
    fail() { const t = now(); voice({ type: 'sawtooth', f: mtof(43), t, d: 1.4, a: 0.03, g: 0.07, lp: 700, rev: 0.5 }); voice({ type: 'sawtooth', f: mtof(44), t, d: 1.4, a: 0.03, g: 0.06, lp: 700, rev: 0.5 }); voice({ type: 'sine', f: 70, fEnd: 36, t, d: 1.1, a: 0.003, g: 0.4 }); noise({ lp: 250, t, d: 0.3, g: 0.2 }); },
    investigate() { const t = now(); voice({ type: 'sine', f: 320, fEnd: 1500, fTime: 0.45, t, d: 0.5, a: 0.02, g: 0.05 }); voice({ type: 'sine', f: 1568, t: t + 0.48, d: 1.6, a: 0.002, g: 0.07, rev: 0.8 }); voice({ type: 'sine', f: 1568, t: t + 0.98, d: 1.0, a: 0.002, g: 0.025, rev: 0.8 }); },
    flag() { const t = now(); voice({ type: 'square', f: 880, t, d: 0.08, g: 0.04, lp: 2500 }); voice({ type: 'square', f: 659, t: t + 0.09, d: 0.12, g: 0.04, lp: 2500 }); },
    reveal() { const t = now(); [60, 67, 72, 76].forEach((n, i) => voice({ type: 'sine', f: mtof(n), t: t + i * 0.04, d: 2.4, a: 0.01, g: 0.04, rev: 0.9 })); },
    timeout() { const t = now(); voice({ type: 'square', f: 110, t, d: 0.9, a: 0.01, hold: 0.6, g: 0.07, lp: 900 }); voice({ type: 'square', f: 117, t, d: 0.9, a: 0.01, hold: 0.6, g: 0.06, lp: 900 }); },
    up() { voice({ type: 'sine', f: 880, fEnd: 1320, d: 0.14, g: 0.05 }); },
    down() { voice({ type: 'sine', f: 440, fEnd: 280, d: 0.2, g: 0.06 }); },
    whoosh() { noise({ bp: 350, bpEnd: 3200, q: 1.2, d: 0.6, a: 0.2, g: 0.07 }); },
    page() { noise({ bp: 3200, q: 0.6, d: 0.16, a: 0.02, g: 0.05 }); },
    slide(v) { const n = performance.now(); if (n - lastSlide < 45) return; lastSlide = n; voice({ type: 'sine', f: 300 + v * 9, d: 0.04, g: 0.03 }); },
    explosion() { const t = now(); noise({ lp: 1600, lpEnd: 60, fTime: 2.2, t, d: 2.6, a: 0.004, g: 0.6, rev: 0.4 }); voice({ type: 'sine', f: 70, fEnd: 28, t, d: 1.8, a: 0.004, g: 0.5 }); },
    crack() { const t = now(); for (let i = 0; i < 7; i++) noise({ hp: 1200 + Math.random() * 3000, t: t + Math.random() * 0.5, d: 0.03 + Math.random() * 0.05, g: 0.12 }); voice({ type: 'sine', f: 90, fEnd: 40, t, d: 0.6, g: 0.3 }); },
    wind() { noise({ bp: 900, bpEnd: 300, q: 2, d: 2.6, a: 0.8, g: 0.14 }); },
    rumble() { const t = now(); noise({ lp: 140, t, d: 3, a: 0.3, g: 0.6 }); voice({ type: 'sine', f: 42, t, d: 2.6, a: 0.2, g: 0.25 }); for (let i = 0; i < 6; i++) noise({ lp: 900, t: t + 0.6 + Math.random() * 1.8, d: 0.08, g: 0.2 }); },
    engineDown() { const t = now(); voice({ type: 'sawtooth', f: 260, fEnd: 35, fTime: 3, t, d: 3.2, a: 0.01, g: 0.07, lp: 1800, lpEnd: 200, lpTime: 3 }); noise({ hp: 2500, hpEnd: 300, fTime: 3, t, d: 3, g: 0.06 }); noise({ lp: 400, t, d: 0.3, g: 0.5 }); },
    caution() { const t = now(); voice({ type: 'triangle', f: 1318, t, d: 1.4, a: 0.004, g: 0.08, rev: 0.3 }); },
    gong() { const t = now(); [0, 0.004].forEach(dt => voice({ type: 'sine', f: 110 + dt * 1000, t: t + dt, d: 4, a: 0.01, g: 0.12, rev: 0.6 })); voice({ type: 'sine', f: 110 * 2.4, t, d: 2.5, a: 0.01, g: 0.05, rev: 0.6 }); },
    stingGood() { const t = now(); [[53, 57, 60, 65], [55, 59, 62, 67], [60, 64, 67, 72]].forEach((c, i) => c.forEach(n => voice({ type: 'sawtooth', f: mtof(n), t: t + i * 0.55, d: i === 2 ? 3.4 : 0.6, a: 0.06, g: 0.025, lp: 1800, rev: 0.7 }))); [84, 88, 91].forEach((n, i) => voice({ type: 'sine', f: mtof(n), t: t + 1.1 + i * 0.12, d: 2.6, g: 0.04, rev: 0.9 })); },
    stingMid() { const t = now(); [[50, 53, 57], [46, 50, 53, 57]].forEach((c, i) => c.forEach(n => voice({ type: 'sawtooth', f: mtof(n), t: t + i * 0.8, d: i ? 3.2 : 0.9, a: 0.1, g: 0.03, lp: 1200, rev: 0.7 }))); },
    stingBad() { const t = now(); [37, 38, 44, 49].forEach(n => voice({ type: 'sawtooth', f: mtof(n), t, d: 4, a: 0.3, g: 0.03, lp: 600, rev: 0.6 })); for (let i = 0; i < 10; i++) timp(null, t + i * 0.06, 0.05 + i * 0.012, 28); timp(null, t + 0.7, 0.4, 26); }
  };
  // 舞台ごとの幕開けの音
  function intro(kind) {
    if (!ctx) return;
    if (kind === 'cold') { sfx.radio(); setTimeout(() => sfx.morse('-.-. ..- -... .-'), 400); }
    else if (kind === 'space') { sfx.quindar(); setTimeout(() => sfx.radio(), 300); setTimeout(() => sfx.quindar(true), 900); }
    else if (kind === 'naval') { sfx.alarm(); setTimeout(() => sfx.explosion(), 900); }
    else if (kind === 'ice') { sfx.wind(); setTimeout(() => sfx.crack(), 1200); }
    else if (kind === 'mine') { sfx.rumble(); }
    else if (kind === 'air') { sfx.engineDown(); setTimeout(() => sfx.caution(), 700); }
  }

  // 広告の表示中や、別のアプリに切り替えたときは音を止める
  let suspended = false;
  document.addEventListener('visibilitychange', () => {
    if (!ctx) return;
    if (document.hidden) ctx.suspend();
    else if (!suspended) ctx.resume();
  });

  return {
    init, play, stopBgm, intro, sfx,
    suspend() { suspended = true; if (ctx) ctx.suspend(); },
    resume() { suspended = false; if (ctx && !document.hidden) ctx.resume(); },
    get ready() { return !!ctx; },
    setIntensity(x) { intensity = Math.max(0, Math.min(1, x)); },
    setVol(k, v) { settings[k] = v; applyVol(); },
    setMuted(m) { settings.muted = m; applyVol(); },
    get settings() { return settings; }
  };
})();
