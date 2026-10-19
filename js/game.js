/* 司令塔 — ゲーム進行と画面 */
(() => {
  'use strict';
  const $ = s => document.querySelector(s);
  const $$ = s => [...document.querySelectorAll(s)];
  function h(tag, attrs, ...kids) {
    const e = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs || {})) {
      if (v === false || v == null) continue;
      if (k === 'class') e.className = v;
      else if (k === 'html') e.innerHTML = v;
      else if (k === 'style') e.setAttribute('style', v);
      else if (k.startsWith('on')) e.addEventListener(k.slice(2), v);
      else e.setAttribute(k, v === true ? '' : v);
    }
    for (const k of kids.flat(Infinity)) {
      if (k == null || k === false) continue;
      e.append(k.nodeType ? k : document.createTextNode(String(k)));
    }
    return e;
  }
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const avg = a => a.length ? a.reduce((x, y) => x + y, 0) / a.length : 0;
  const LET = ['A', 'B', 'C'];
  const SC = window.SCENARIOS, ADV = window.ADVISORS, DAILY = window.DAILY;
  const S = window.SND;

  /* ── 保存 ── */
  const KEY = 'shireito.v1';
  let store = { runs: [], daily: { last: null, streak: 0, results: {} }, name: '', audio: null };
  try { const v = JSON.parse(localStorage.getItem(KEY)); if (v) store = Object.assign(store, v); } catch (e) { /* 保存なしで続行 */ }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(store)); } catch (e) { /* 保存できない環境 */ } }

  /* ── 画面切り替え ── */
  let screen = 's-title';
  function show(id) {
    $$('.screen').forEach(s => { s.hidden = s.id !== id; });
    $('#topbar').hidden = id === 's-title';
    screen = id;
    window.scrollTo(0, 0);
  }
  function toast(msg) {
    const t = h('div', { class: 'toast', role: 'status' }, msg);
    document.body.append(t);
    setTimeout(() => t.remove(), 2200);
  }
  function bindSfx(root) {
    root.querySelectorAll('button').forEach(b => {
      if (b.dataset.sfx) return;
      b.dataset.sfx = '1';
      b.addEventListener('pointerenter', () => S.sfx.hover());
    });
  }

  /* ── タイマー(共用) ── */
  let timer = null;
  function startTimer(limit, onTick, onEnd) {
    stopTimer();
    timer = { limit, left: limit, last: performance.now(), sec: Math.ceil(limit), onTick, onEnd, paused: false };
    timer.iv = setInterval(() => {
      const t = timer; if (!t || t.paused) return;
      const n = performance.now();
      t.left -= (n - t.last) / 1000; t.last = n;
      if (t.left <= 0) { t.left = 0; onTick(t); stopTimer(); onEnd(); return; }
      const sec = Math.ceil(t.left);
      if (sec !== t.sec) {
        t.sec = sec;
        const urgent = sec <= 10;
        S.sfx.tick(urgent);
        if (urgent) S.sfx.heart();
      }
      onTick(t);
    }, 100);
  }
  function stopTimer() { if (timer) { clearInterval(timer.iv); timer = null; } }
  function timerRing(id) {
    const r = 40, c = 2 * Math.PI * r;
    const el = h('div', { class: 'timer', id, role: 'timer', 'aria-label': '残り時間' });
    el.innerHTML = `<svg viewBox="0 0 92 92" aria-hidden="true"><circle cx="46" cy="46" r="${r}" fill="none" stroke="var(--console-2)" stroke-width="6"/><circle class="arc" cx="46" cy="46" r="${r}" fill="none" stroke="var(--amber)" stroke-width="6" stroke-linecap="round" stroke-dasharray="${c}" stroke-dashoffset="0"/></svg><div class="num"><div><small>残り</small><span>--</span></div></div>`;
    el.update = (left, limit) => {
      const f = clamp(left / limit, 0, 1);
      const arc = el.querySelector('.arc');
      arc.setAttribute('stroke-dashoffset', String(c * (1 - f)));
      arc.setAttribute('stroke', left <= 10 ? 'var(--signal)' : 'var(--amber)');
      el.querySelector('.num span').textContent = String(Math.ceil(left));
      el.classList.toggle('urgent', left <= 10 && left > 0);
    };
    return el;
  }
  document.addEventListener('visibilitychange', () => {
    if (!timer) return;
    if (document.hidden) timer.paused = true;
    else { timer.paused = false; timer.last = performance.now(); }
  });

  /* ── タイプライター ── */
  let skipTyping = false;
  async function typeInto(node, text, speed) {
    if (reduceMotion || skipTyping) { node.textContent = text; return; }
    node.textContent = '';
    const step = speed || 16;
    for (let i = 0; i < text.length; i++) {
      if (skipTyping) { node.textContent = text; return; }
      node.textContent += text[i];
      if (i % 2 === 0 && text[i] !== ' ') S.sfx.key();
      await sleep(step);
    }
  }

  /* ════════════════ タイトル ════════════════ */
  $('#callsign').value = store.name || '';
  $('#enter').addEventListener('click', () => {
    store.name = $('#callsign').value.trim().slice(0, 16);
    save();
    S.init();
    if (store.audio) { ['master', 'bgm', 'sfx'].forEach(k => S.setVol(k, store.audio[k])); S.setMuted(!!store.audio.muted); }
    syncSoundBtn();
    S.sfx.gong();
    goHub();
  });
  $('#brand').addEventListener('click', () => leaveTo(goHub));
  $('#nav-hub').addEventListener('click', () => leaveTo(goHub));
  $('#nav-sound').addEventListener('click', () => {
    S.init();
    S.setMuted(!S.settings.muted);
    persistAudio();
    syncSoundBtn();
  });
  function syncSoundBtn() {
    const b = $('#nav-sound');
    b.textContent = S.settings.muted ? '音 OFF' : '音 ON';
    b.setAttribute('aria-pressed', String(!S.settings.muted));
  }
  function persistAudio() { const s = S.settings; store.audio = { master: s.master, bgm: s.bgm, sfx: s.sfx, muted: s.muted }; save(); }

  // 作戦の途中で抜けるときは2回押しで確認
  let leaveArmed = false;
  function leaveTo(fn) {
    const inMission = (screen === 's-turn' || screen === 's-brief') && G && !G.done;
    const inDaily = screen === 's-daily' && D && D.running;
    if ((inMission || inDaily) && !leaveArmed) {
      leaveArmed = true;
      $('#nav-hub').textContent = '本当に中断する?';
      S.sfx.flag();
      setTimeout(() => { leaveArmed = false; $('#nav-hub').textContent = '作戦室'; }, 3000);
      return;
    }
    leaveArmed = false;
    $('#nav-hub').textContent = '作戦室';
    stopTimer();
    $$('.overlay').forEach(o => o.remove());
    if (D) D.running = false;
    S.sfx.click();
    fn();
  }

  /* ════════════════ 作戦室 ════════════════ */
  function bestOf(id) {
    const rs = store.runs.filter(r => r.sc === id);
    if (!rs.length) return null;
    return { proc: Math.max(...rs.map(r => r.proc)), out: Math.max(...rs.map(r => r.out)), n: rs.length };
  }
  function todayKey(d) { d = d || new Date(); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`; }
  function dailyIndex() { const d = new Date(); return Math.floor(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / 86400000) % DAILY.length; }
  function streakNow() {
    const dd = store.daily; if (!dd.last) return 0;
    const y = new Date(); y.setDate(y.getDate() - 1);
    return (dd.last === todayKey() || dd.last === todayKey(y)) ? dd.streak : 0;
  }

  function goHub() {
    S.play('title');
    const root = $('#hub'); root.innerHTML = '';
    const today = DAILY[dailyIndex()];
    const doneToday = !!store.daily.results[todayKey()];
    root.append(
      h('div', { class: 'hub-head' },
        h('div', null,
          h('div', { class: 'eyebrow' }, store.name ? `ようこそ、${store.name} 司令` : 'ようこそ、司令'),
          h('h2', null, '作戦を選んでください')),
        h('div', { class: 'row' },
          h('button', { class: 'btn ghost small', type: 'button', onclick: () => { S.sfx.click(); goHowto(); } }, '遊び方'),
          h('button', { class: 'btn ghost small', type: 'button', onclick: () => { S.sfx.click(); goProfile(); } }, '判断プロフィール'),
          h('button', { class: 'btn ghost small', type: 'button', onclick: () => { S.sfx.click(); goCompare(); } }, '友人と比べる'))),
      h('div', { class: 'hub-grid' },
        h('div', { class: 'cards' }, SC.map(sc => {
          const b = bestOf(sc.id);
          return h('button', { class: 'sc-card', type: 'button', onclick: () => { S.sfx.select(); startScenario(sc.id); } },
            h('span', { class: 'yr' }, sc.year),
            h('h3', null, sc.title),
            h('span', { class: 'sub' }, sc.sub),
            h('span', { class: 'role' }, `あなた: ${sc.role}`, h('br'), h('span', { class: 'muted' }, sc.roleNote)),
            h('span', { class: 'foot' },
              h('span', { class: 'chip' }, '難度 ', h('span', { class: 'pips' }, [1, 2, 3].map(i => h('i', { class: i <= sc.diff ? 'on' : '' })))),
              h('span', { class: 'chip' }, `1判断 ${sc.time}秒`),
              h('span', { class: 'chip' }, `${sc.turns.length}局面`),
              b ? h('span', { class: 'chip amber' }, `最高 判断${b.proc}・結果${b.out}`) : null));
        })),
        h('aside', { class: 'side' },
          h('div', { class: 'panel daily-card' },
            h('div', { class: 'eyebrow' }, '今日の1判断'),
            h('h3', null, today.title),
            h('p', { class: 'muted', style: 'font-size:13px' }, `${today.year} / ${today.role}`),
            h('div', { class: 'row' },
              h('div', null, h('div', { class: 'streak' }, String(streakNow())), h('div', { class: 'note' }, '日連続')),
              h('span', { class: 'spacer', style: 'flex:1' }),
              h('button', { class: 'btn small', type: 'button', onclick: () => { S.sfx.select(); goDaily(); } }, doneToday ? '結果と過去問' : '3分で挑む'))),
          h('div', { class: 'panel' },
            h('h3', null, 'AI参謀'),
            h('div', { class: 'adv-mini' }, Object.entries(ADV).map(([k, a]) =>
              h('div', null, h('span', { class: `glyph g-${k}` }, a.glyph), h('span', null, h('b', null, a.name), ` ${a.stance}。${a.desc}。`)))),
            h('p', { class: 'note' }, '3人のうち誰かが、もっともらしい理屈で間違えることがある。誰を、どこまで信じるかもあなたの判断だ。')),
          h('div', { class: 'panel' },
            h('h3', null, '音量'),
            volControls()))));
    bindSfx(root);
    show('s-hub');
  }
  function volControls() {
    const s = S.settings;
    const row = (k, label) => {
      const id = 'vol-' + k;
      const inp = h('input', { type: 'range', id, min: '0', max: '1', step: '0.05', value: String(s[k]) });
      inp.addEventListener('input', () => { S.setVol(k, parseFloat(inp.value)); S.sfx.slide(inp.value * 60); });
      inp.addEventListener('change', persistAudio);
      return [h('label', { for: id }, label), inp];
    };
    return h('div', { class: 'vol' }, row('master', '全体'), row('bgm', 'BGM'), row('sfx', '効果音'));
  }

  /* ════════════════ 作戦: ブリーフィング ════════════════ */
  let G = null;
  function startScenario(id) {
    const sc = SC.find(s => s.id === id);
    G = { sc, ti: 0, m: Object.fromEntries(sc.meters.map(x => [x.k, x.v])), log: [], done: false };
    renderBrief();
  }
  function renderBrief() {
    const sc = G.sc;
    S.play('brief');
    S.sfx.whoosh();
    setTimeout(() => S.intro(sc.intro_sfx), 500);
    const root = $('#brief'); root.innerHTML = '';
    const tele = h('div', { class: 'teletype', 'aria-live': 'polite' });
    const startBtn = h('button', { class: 'btn', type: 'button', onclick: () => { S.sfx.stamp(); renderTurn(); } }, '作戦を開始する');
    root.append(
      h('div', { class: 'brief-grid' },
        h('div', null,
          h('div', { class: 'eyebrow' }, `${sc.year} — ${sc.place}`),
          h('h1', { class: 'brief-title' }, sc.title),
          h('div', { class: 'brief-sub' }, sc.sub),
          tele,
          h('div', { class: 'row', style: 'margin-top:24px' }, startBtn,
            h('button', { class: 'btn ghost small', type: 'button', onclick: () => { skipTyping = true; } }, '文字送りを飛ばす'))),
        h('aside', { class: 'panel dossier' },
          h('div', { class: 'eyebrow' }, '任務ファイル'),
          h('dl', { class: 'kv' },
            h('dt', null, 'あなた'), h('dd', null, sc.role, h('br'), h('span', { class: 'muted' }, sc.roleNote)),
            h('dt', null, '局面'), h('dd', null, `${sc.turns.length}つ`),
            h('dt', null, '持ち時間'), h('dd', null, `1判断あたり${sc.time}秒`)),
          h('h3', null, '見守る指標'),
          h('div', { class: 'meters' }, sc.meters.map(m => meterRow(m.n, m.v))),
          h('p', { class: 'note' }, '入電の中には誤報が混じる。「裏を取る」と真偽を確かめられるが、持ち時間を使う。時間切れになると、決められなかったこと自体が決断になる。'),
          h('p', { class: 'note' }, 'キー操作: 1・2・3で選択 / Iで裏を取る / Enterで決裁'))));
    bindSfx(root);
    show('s-brief');
    skipTyping = false;
    (async () => {
      for (const line of sc.intro) {
        const p = h('p'); tele.append(p);
        await typeInto(p, line, 22);
        S.sfx.carriage();
        await sleep(skipTyping ? 0 : 250);
      }
    })();
  }
  function meterRow(name, v, key) {
    const cls = v < 30 ? 'low' : v >= 75 ? 'high' : '';
    return h('div', { class: 'meter', 'data-k': key || '' },
      h('span', null, name),
      h('span', { class: 'bar' }, h('span', { class: cls, style: `width:${v}%` })),
      h('span', { class: 'val' }, String(Math.round(v))));
  }

  /* ════════════════ 作戦: 局面 ════════════════ */
  let T = null; // 現在の局面の状態
  function renderTurn() {
    const sc = G.sc, t = sc.turns[G.ti];
    T = { sel: null, inv: false, timeout: false, decided: false };
    skipTyping = false;
    S.play('tension', sc.bgm);
    S.setIntensity(0.12 + G.ti * 0.06);
    let sit = t.sit;
    (t.sitIf || []).forEach(c => { if (G.m[c.m] >= c.min) sit = c.t; });

    const root = $('#turn'); root.innerHTML = '';
    const ring = timerRing('ring');
    const reportsEl = h('div', { class: 'reports', 'aria-live': 'polite', onclick: () => { skipTyping = true; } });
    const invBtn = h('button', { class: 'btn ghost small', type: 'button', id: 'inv', disabled: true, onclick: investigate }, `裏を取る(-${t.inv.c}秒)`);
    const invNote = h('div', { class: 'inv-note', hidden: true });
    const advEl = h('div', { class: 'advisors' });
    const conf = h('input', { type: 'range', id: 'conf', min: '50', max: '100', step: '5', value: '70' });
    const confVal = h('span', { class: 'conf-val' }, '70%');
    conf.addEventListener('input', () => { confVal.textContent = conf.value + '%'; S.sfx.slide(conf.value - 40); });
    const reason = h('input', { type: 'text', id: 'reason', maxlength: '60', placeholder: '判断の理由をひとこと(任意)', autocomplete: 'off' });
    const go = h('button', { class: 'btn', type: 'button', id: 'go', disabled: true, onclick: () => decide(false) }, '決裁する');
    const opts = h('div', { class: 'opts', role: 'group', 'aria-label': '選択肢' }, t.opt.map((o, i) =>
      h('button', { class: 'opt', type: 'button', 'aria-pressed': 'false', 'data-i': String(i), onclick: () => pick(i) },
        h('span', { class: 'letter' }, LET[i]),
        h('span', null, h('div', { class: 'ol' }, o.l), h('div', { class: 'od' }, o.d)))));

    root.append(
      h('div', { class: 'panel turn-head' },
        h('div', null,
          h('div', { class: 'eyebrow' }, `${sc.title} — 局面 ${G.ti + 1} / ${sc.turns.length}`),
          h('div', { class: 'clock' }, t.clock),
          h('h2', null, t.title)),
        h('div', { class: 'meters', id: 'meters' }, sc.meters.map(m => meterRow(m.n, G.m[m.k], m.k))),
        ring),
      h('div', { class: 'turn-body' },
        h('div', { class: 'col' },
          h('div', { class: 'panel sit' }, sit),
          h('div', { class: 'section-label' }, h('span', { class: 'eyebrow' }, '入電'), invBtn),
          reportsEl, invNote),
        h('div', { class: 'col' },
          h('div', { class: 'section-label' }, h('span', { class: 'eyebrow' }, 'AI参謀の進言')),
          advEl)),
      h('div', { class: 'panel decide' },
        h('div', { class: 'section-label' }, h('span', { class: 'eyebrow' }, '決裁'), h('span', { class: 'kbd' }, '1・2・3で選択 / Enterで決裁')),
        opts,
        h('div', { class: 'decide-row' },
          h('div', { class: 'field' }, h('label', { for: 'conf' }, 'この判断で狙いどおりになる確信度 ', confVal), conf),
          h('div', { class: 'field' }, h('label', { for: 'reason' }, '理由'), reason),
          go)));
    bindSfx(root);
    show('s-turn');
    ring.update(sc.time, sc.time);

    // 入電と参謀の進言を順に流し、終わったら時計を動かす
    (async () => {
      const myTurn = G.ti;
      for (const r of t.rep) {
        if (!T || G.ti !== myTurn || screen !== 's-turn') return;
        const body = h('div', { class: 'body' });
        const card = h('article', { class: 'report' }, h('div', { class: 'from' }, h('span', null, 'FROM: ' + r.f), h('span', null, t.clock.split(' ')[0])), body);
        reportsEl.append(card);
        if (sc.id === 'apollo' && /CAPCOM|宇宙船通信/.test(r.f)) S.sfx.quindar(); else S.sfx.incoming();
        await typeInto(body, r.t, 10);
        if (sc.id === 'apollo' && /CAPCOM|宇宙船通信/.test(r.f)) S.sfx.quindar(true);
        await sleep(skipTyping ? 0 : 160);
      }
      ['c', 'a', 'd'].forEach(k => {
        const [pi, text, cf] = t.adv[k];
        const a = ADV[k];
        advEl.append(h('article', { class: 'panel adv' },
          h('div', { class: 'adv-top' },
            h('span', { class: `glyph g-${k}` }, a.glyph),
            h('span', { class: 'adv-name' }, a.name, h('small', null, a.stance)),
            h('span', { class: 'adv-rec' }, '推奨 ', h('b', null, LET[pi]))),
          h('p', null, text),
          h('div', { class: `confbar g-${k}` }, h('span', null, '自信度'), h('span', { class: 'bar' }, h('span', { style: `width:${cf}%` })), h('span', null, cf + '%'))));
      });
      S.sfx.radio();
      if (!T || G.ti !== myTurn || screen !== 's-turn') return;
      invBtn.disabled = false;
      startTimer(sc.time, tm => {
        ring.update(tm.left, tm.limit);
        const frac = 1 - tm.left / tm.limit;
        S.setIntensity(tm.left <= 10 ? 1 : 0.2 + 0.6 * frac + G.ti * 0.04);
      }, () => decide(true));
    })();
  }
  function pick(i) {
    if (!T || T.decided) return;
    T.sel = i;
    $$('#turn .opt').forEach(b => b.setAttribute('aria-pressed', String(Number(b.dataset.i) === i)));
    $('#go').disabled = false;
    S.sfx.select();
  }
  function investigate() {
    if (!T || T.inv || T.decided) return;
    const t = G.sc.turns[G.ti];
    T.inv = true;
    if (timer) timer.left = Math.max(1, timer.left - t.inv.c);
    $('#inv').disabled = true;
    $('#inv').textContent = '裏取り済み';
    S.sfx.investigate();
    const note = $('#turn .inv-note');
    note.hidden = false;
    note.textContent = '';
    typeInto(note, '裏取りの結果: ' + t.inv.t, 12);
    t.rep.forEach((r, i) => {
      if (!r.bad) return;
      const card = $$('#turn .report')[i];
      if (!card) return;
      setTimeout(() => { card.classList.add('flagged'); card.append(h('span', { class: 'stampmark' }, '要注意')); S.sfx.flag(); }, 600);
    });
  }
  document.addEventListener('keydown', e => {
    if (e.target.matches('input[type=text], textarea')) {
      if (e.key === 'Enter' && screen === 's-turn' && T && T.sel != null && !T.decided) { e.preventDefault(); decide(false); }
      return;
    }
    if (screen === 's-turn' && T && !T.decided) {
      if (['1', '2', '3'].includes(e.key)) pick(Number(e.key) - 1);
      else if (e.key.toLowerCase() === 'i' && !$('#inv').disabled) investigate();
      else if (e.key === 'Enter' && T.sel != null) { e.preventDefault(); decide(false); }
    } else if (screen === 's-daily' && D && D.running && !D.decided) {
      if (['1', '2', '3'].includes(e.key)) dailyPick(Number(e.key) - 1);
      else if (e.key === 'Enter' && D.sel != null) { e.preventDefault(); dailyDecide(false); }
    }
  });

  function decide(isTimeout) {
    if (!T || T.decided) return;
    if (!isTimeout && T.sel == null) return;
    T.decided = true;
    const sc = G.sc, t = sc.turns[G.ti];
    const limit = sc.time;
    const left = timer ? timer.left : 0;
    stopTimer();
    let i = T.sel;
    if (isTimeout) {
      const di = t.opt.findIndex(o => o.def);
      i = di >= 0 ? di : t.opt.reduce((m, o, k) => (o.q < t.opt[m].q ? k : m), 0);
    }
    const o = t.opt[i];
    const success = !isTimeout && Math.random() < o.p;
    const fx = success ? o.fx : (o.fxF || o.fx);
    const before = { ...G.m };
    Object.entries(fx || {}).forEach(([k, v]) => { if (k in G.m) G.m[k] = clamp(G.m[k] + v, 0, 100); });
    G.log.push({
      i, timeout: isTimeout, conf: isTimeout ? null : Number($('#conf').value) / 100,
      reason: isTimeout ? '' : $('#reason').value.trim(), success,
      left: isTimeout ? 0 : left, limit, inv: T.inv,
      q: isTimeout ? 0 : o.q, r: o.r, h: o.h, hadBad: t.rep.some(r => r.bad),
      flawPick: t.flaw ? t.adv[t.flaw][0] : null
    });
    $$('#turn button, #turn input').forEach(b => { b.disabled = true; });
    if (isTimeout) { S.sfx.timeout(); S.setIntensity(0.3); } else S.sfx.stamp();
    setTimeout(() => showVerdict(o, success, isTimeout, before), isTimeout ? 700 : 450);
  }

  function showVerdict(o, success, isTimeout, before) {
    const sc = G.sc;
    S.setIntensity(0.1);
    const last = G.ti === sc.turns.length - 1;
    const next = h('button', { class: 'btn', type: 'button', onclick: () => {
      S.sfx.click(); ov.remove();
      if (last) { G.done = true; renderEnding(); } else { G.ti++; renderTurn(); }
    } }, last ? '結末を見る' : '次の局面へ');
    const ov = h('div', { class: 'overlay', role: 'dialog', 'aria-modal': 'true', 'aria-label': '決裁の結果' },
      h('div', { class: 'panel verdict' },
        h('div', { class: 'big-stamp' + (isTimeout ? '' : ' go') }, isTimeout ? '時間切れ' : '決裁'),
        h('div', { class: 'eyebrow' }, `${LET[G.log[G.log.length - 1].i]}: ${o.l}`),
        h('div', { class: 'row' }, isTimeout
          ? h('span', { class: 'chip ng' }, '決められないまま時が過ぎた')
          : h('span', { class: 'chip ' + (success ? 'ok' : 'ng') }, success ? '狙いどおりに進んだ' : '裏目に出た')),
        h('h3', null, isTimeout ? '時計の針は待ってくれなかった。' : (success ? '状況は動いた' : '思わぬ方向へ')),
        h('p', null, isTimeout ? `判断が下されないまま、事態は「${o.l}」と同じ方向に流れた。${o.ng}` : (success ? o.ok : o.ng)),
        h('div', { class: 'deltas' }, sc.meters.map(m => {
          const d = Math.round(G.m[m.k] - before[m.k]);
          return h('div', { class: 'delta' },
            h('span', null, m.n),
            h('span', { class: 'meter', style: 'grid-template-columns:1fr' }, h('span', { class: 'bar' }, h('span', { class: G.m[m.k] < 30 ? 'low' : G.m[m.k] >= 75 ? 'high' : '', style: `width:${before[m.k]}%`, 'data-to': String(G.m[m.k]) }))),
            h('span', { class: 'd ' + (d > 0 ? 'plus' : d < 0 ? 'minus' : 'zero') }, (d > 0 ? '+' : '') + d));
        })),
        h('p', { class: 'note' }, '史実でどう判断されたかは、作戦の後の振り返りで明かされる。'),
        h('div', { class: 'row' }, next)));
    document.body.append(ov);
    bindSfx(ov);
    next.focus();
    setTimeout(() => {
      if (isTimeout) S.sfx.fail(); else if (success) S.sfx.success(); else S.sfx.fail();
    }, 200);
    setTimeout(() => {
      let up = 0, down = 0;
      ov.querySelectorAll('[data-to]').forEach(b => { b.style.width = b.dataset.to + '%'; });
      sc.meters.forEach(m => { const d = G.m[m.k] - before[m.k]; if (d > 0) up++; if (d < 0) down++; });
      if (up) setTimeout(() => S.sfx.up(), 300);
      if (down) setTimeout(() => S.sfx.down(), 500);
      // 背後の計器も更新
      $$('#meters .meter').forEach(row => {
        const k = row.dataset.k; const v = G.m[k];
        const bar = row.querySelector('.bar span');
        bar.style.width = v + '%'; bar.className = v < 30 ? 'low' : v >= 75 ? 'high' : '';
        row.querySelector('.val').textContent = String(Math.round(v));
      });
    }, 500);
  }

  /* ════════════════ 結末 ════════════════ */
  function compute(log, sc, m) {
    const out = Math.round(avg(Object.values(m)));
    const proc = Math.round(avg(log.map(l => l.q / 3)) * 100);
    const speed = Math.round(clamp(avg(log.map(l => l.left / l.limit)) * 160, 0, 100));
    const info = Math.round(avg(log.map(l => l.hadBad ? (l.inv ? 1 : (l.q >= 2 ? 0.6 : 0.2)) : (l.inv ? 0.7 : 1))) * 100);
    const fl = log.filter(l => l.flawPick != null);
    const ai = fl.length ? Math.round(avg(fl.map(l => l.timeout ? 0.5 : (l.i === l.flawPick ? 0 : 1))) * 100) : 100;
    const dec = log.filter(l => !l.timeout);
    const avgConf = dec.length ? avg(dec.map(l => l.conf)) : 0.75;
    const sr = dec.length ? avg(dec.map(l => l.success ? 1 : 0)) : 0;
    const diff = avgConf - sr;
    const calib = dec.length ? Math.round(clamp(100 - Math.abs(diff) * 200, 0, 100)) : 0;
    const calibLabel = !dec.length ? '判定なし' : diff > 0.12 ? '自信過剰' : diff < -0.12 ? '控えめすぎ' : 'ほぼ適切';
    const risk = Math.round(avg(log.map(l => l.r)) / 2 * 100);
    const hm = Math.round((avg(log.map(l => l.h)) + 2) / 4 * 100);
    const timeouts = log.filter(l => l.timeout).length;
    const hist = log.filter((l, k) => sc.turns[k].opt[l.i].hist && !l.timeout).length;
    return { out, proc, speed, info, ai, calib, calibLabel, avgConf, sr, risk, hm, timeouts, hist };
  }
  function renderEnding() {
    stopTimer();
    const sc = G.sc;
    const R = compute(G.log, sc, G.m);
    G.R = R;
    const end = sc.endings.find(e => R.out >= e.min) || sc.endings[sc.endings.length - 1];
    G.end = end;
    const tierIdx = sc.endings.indexOf(end);
    G.run = {
      sc: sc.id, at: Date.now(), proc: R.proc, out: R.out, speed: R.speed, info: R.info, ai: R.ai, calib: R.calib,
      risk: R.risk, hm: R.hm, c: G.log.map(l => l.timeout ? -1 : l.i), k: G.log.map(l => l.conf), end: end.title
    };
    store.runs.push(G.run);
    if (store.runs.length > 60) store.runs = store.runs.slice(-60);
    save();
    S.stopBgm(1.2);
    setTimeout(() => { if (tierIdx === 0) S.sfx.stingGood(); else if (tierIdx === 1) S.sfx.stingMid(); else S.sfx.stingBad(); }, 400);
    setTimeout(() => { if (screen === 's-ending') S.play('review'); }, 4200);
    const root = $('#ending'); root.innerHTML = '';
    root.append(h('div', { class: 'ending' },
      h('div', { class: 'eyebrow' }, `${sc.title} — 作戦終了`),
      h('h1', null, end.title),
      h('p', { class: 'text' }, end.text),
      h('div', { class: 'panel', style: 'padding:16px' }, h('div', { class: 'meters' }, sc.meters.map(m => meterRow(m.n, G.m[m.k], m.k)))),
      h('div', { class: 'panel epilogue' }, h('div', { class: 'eyebrow', style: 'margin-bottom:6px' }, '史実では'), h('p', null, sc.epilogue)),
      shareBar(`司令塔「${sc.title}」で${sc.role}として決断した。結末は「${end.title}」。判断の質 ${R.proc} / 結果 ${R.out}`),
      h('div', { class: 'row' },
        h('button', { class: 'btn', type: 'button', onclick: () => { S.sfx.reveal(); renderReview(); } }, '判断を振り返る'),
        h('button', { class: 'btn ghost', type: 'button', onclick: () => { S.sfx.click(); startScenario(sc.id); } }, 'もう一度挑む'))));
    bindSfx(root);
    show('s-ending');
  }

  /* ════════════════ 振り返り ════════════════ */
  function quadrant(proc, out) {
    const gp = proc >= 60, go = out >= 60;
    if (gp && go) return { k: 'gg', title: '実力の勝利', text: '筋の良い判断が、良い結果につながった。' };
    if (gp && !go) return { k: 'gb', title: '良い判断、不運な結果', text: '判断の筋は良かった。結果が悪かったのは運の要素も大きい。この判断の仕方は続けてよい。' };
    if (!gp && go) return { k: 'bg', title: '運に救われた', text: '結果は良かったが、判断の筋は危うかった。結果だけで自分の判断を評価しないこと。同じやり方は、次は裏目に出るかもしれない。' };
    return { k: 'bb', title: '必然の敗北', text: '判断の筋も結果も厳しかった。どの前提が崩れていたのかを、局面ごとに見直してみよう。' };
  }
  function tendencies(R) {
    const out = [];
    if (R.speed < 35) out.push('情報が揃うのを待ちすぎる傾向があります。待っている間にも状況は動きます。');
    else if (R.speed > 80 && R.info < 60) out.push('決断は速いものの、裏取りを省きがちです。誤報が混じっていても気づけません。');
    else if (R.speed > 75) out.push('決断が速く、時間を味方につけています。');
    if (R.info >= 85) out.push('入電の真偽を確かめる習慣が身についています。');
    else if (R.info < 50) out.push('入電を額面どおりに受け取りがちです。一番都合のいい報告ほど疑ってみましょう。');
    if (R.ai < 50) out.push('自信ありげなAI参謀の提案に流されやすい傾向があります。提案の数字ではなく、その数字の前提を確かめましょう。');
    else if (R.ai >= 80) out.push('AI参謀の理屈の穴を見抜けています。');
    if (R.calibLabel === '自信過剰') out.push(`確信度が平均${Math.round(R.avgConf * 100)}%だったのに対し、狙いどおりに進んだのは${Math.round(R.sr * 100)}%。自信過剰の傾向があります。`);
    else if (R.calibLabel === '控えめすぎ') out.push(`確信度(平均${Math.round(R.avgConf * 100)}%)より、実際の成功率(${Math.round(R.sr * 100)}%)の方が高めでした。もう少し自分の判断を信じてよさそうです。`);
    else if (R.calibLabel === 'ほぼ適切') out.push('確信度と実際の結果が釣り合っています。自分の判断の確かさを正しく見積もれています。');
    if (R.risk > 65) out.push('大胆な選択を好みます。勝てる場面では強みですが、失敗の大きさも見積もりましょう。');
    else if (R.risk < 30) out.push('慎重な選択を好みます。守りが固い反面、動くべき時に遅れないよう注意しましょう。');
    if (R.timeouts) out.push(`${R.timeouts}回、時間切れになりました。決めないことも決断の一つです。`);
    return out;
  }
  function radarSvg(series) {
    const axes = ['判断の質', '決断速度', '情報の見極め', 'AI参謀の見極め', '確信度の精度'];
    const keys = ['proc', 'speed', 'info', 'ai', 'calib'];
    const W = 440, Hh = 300, cx = 220, cy = 155, R = 100;
    const pt = (i, v) => { const a = -Math.PI / 2 + i * 2 * Math.PI / 5; return [cx + Math.cos(a) * R * v / 100, cy + Math.sin(a) * R * v / 100]; };
    let s = `<svg class="radar" viewBox="0 0 ${W} ${Hh}" role="img" aria-label="判断の5つの軸">`;
    [25, 50, 75, 100].forEach(v => { s += `<polygon points="${keys.map((_, i) => pt(i, v).join(',')).join(' ')}" fill="none" stroke="var(--rule)" stroke-width="1"/>`; });
    keys.forEach((_, i) => { const [x, y] = pt(i, 100); s += `<line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}" stroke="var(--rule)"/>`; });
    series.forEach(se => {
      const pts = keys.map((k, i) => pt(i, se.v[k]).join(',')).join(' ');
      s += `<polygon points="${pts}" fill="${se.fill}" stroke="${se.stroke}" stroke-width="2" ${se.dash ? 'stroke-dasharray="5 4"' : ''}/>`;
      keys.forEach((k, i) => { const [x, y] = pt(i, se.v[k]); s += `<circle cx="${x}" cy="${y}" r="3" fill="${se.stroke}"/>`; });
    });
    axes.forEach((a, i) => {
      const [x, y] = pt(i, 128);
      const anchor = Math.abs(x - cx) < 10 ? 'middle' : x > cx ? 'start' : 'end';
      const v = series[0] ? series[0].v[keys[i]] : '';
      s += `<text x="${x}" y="${y}" text-anchor="${anchor}" dominant-baseline="middle">${a} <tspan fill="var(--amber)" font-family="IBM Plex Mono, monospace">${v}</tspan></text>`;
    });
    return s + '</svg>';
  }
  function spectrum(label, left, right, v) {
    return h('div', { class: 'spectrum' },
      h('span', null, label),
      h('div', { class: 'track' }, h('i', { style: `left:${clamp(v, 3, 97)}%` })),
      h('div', { class: 'ends' }, h('span', null, left), h('span', null, right)));
  }
  function encodeRun(run) {
    const o = { v: 1, s: run.sc, n: store.name || '名無しの司令', c: run.c, k: run.k, p: run.proc, o: run.out, e: run.end };
    return 'SRT1.' + btoa(unescape(encodeURIComponent(JSON.stringify(o))));
  }
  function decodeRun(code) {
    try {
      const raw = code.trim().replace(/^SRT1\./, '');
      const o = JSON.parse(decodeURIComponent(escape(atob(raw))));
      if (!o || !SC.find(s => s.id === o.s) || !Array.isArray(o.c)) return null;
      return o;
    } catch (e) { return null; }
  }
  async function copyText(text, fallbackEl) {
    try { await navigator.clipboard.writeText(text); toast('コピーしました'); S.sfx.select(); }
    catch (e) {
      if (fallbackEl) { const r = document.createRange(); r.selectNodeContents(fallbackEl); const sel = getSelection(); sel.removeAllRanges(); sel.addRange(r); }
      toast('コピーできませんでした。選択された文字を手動でコピーしてください');
    }
  }

  /* ── シェア ── */
  const SHARE_URL = 'https://techgym.jp/column/claude-code-game-shireito/';
  function shareBar(text) {
    const full = `${text}\n#司令塔 #判断力の筋トレ`;
    const enc = encodeURIComponent;
    const textEl = h('div', { class: 'codebox share-text' }, `${full}\n${SHARE_URL}`);
    const link = (label, href) => h('a', { class: 'btn ghost small', href, target: '_blank', rel: 'noopener', onclick: () => S.sfx.select() }, label);
    return h('div', { class: 'panel share' },
      h('div', { class: 'eyebrow' }, '結果をシェアする'),
      textEl,
      h('div', { class: 'row' },
        link('Xでポスト', `https://twitter.com/intent/tweet?text=${enc(full)}&url=${enc(SHARE_URL)}`),
        link('LINEで送る', `https://line.me/R/share?text=${enc(full + '\n' + SHARE_URL)}`),
        link('Facebook', `https://www.facebook.com/sharer/sharer.php?u=${enc(SHARE_URL)}`),
        h('button', { class: 'btn small', type: 'button', onclick: () => copyText(`${full}\n${SHARE_URL}`, textEl) }, '文章をコピー')));
  }

  function renderReview() {
    const sc = G.sc, R = G.R;
    S.play('review');
    const root = $('#review'); root.innerHTML = '';
    const qd = quadrant(R.proc, R.out);
    const prev = store.runs.filter(r => r !== G.run);
    const avgRun = prev.length ? Object.fromEntries(['proc', 'speed', 'info', 'ai', 'calib'].map(k => [k, Math.round(avg(prev.map(r => r[k])))])) : null;

    const panels = {};
    // 総合
    panels.sum = h('div', null,
      h('div', { class: 'scores' },
        scoreTile('判断の質', R.proc, '結果に関係なく、判断の筋の良さ'),
        scoreTile('結果', R.out, `指標の平均。結末「${G.end.title}」`),
        scoreTile('確信度の精度', R.calib, R.calibLabel),
        scoreTile('史実と同じ判断', `${R.hist}/${sc.turns.length}`, '一致が多いほど良いとは限らない')),
      h('div', { class: 'review-grid' },
        h('div', { class: 'panel' },
          h('h3', null, '判断と結果のマトリクス'),
          quadEl(R.proc, R.out, qd),
          h('p', null, h('b', { style: 'color:var(--amber)' }, qd.title), '。', qd.text)),
        h('div', { class: 'panel' },
          h('h3', null, '判断の5つの軸'),
          h('div', { html: radarSvg([
            { v: { proc: R.proc, speed: R.speed, info: R.info, ai: R.ai, calib: R.calib }, fill: 'rgba(240,170,50,.18)', stroke: 'var(--amber)' },
            ...(avgRun ? [{ v: avgRun, fill: 'none', stroke: 'var(--cool)', dash: true }] : [])]) }),
          h('div', { class: 'legend' }, h('span', null, h('i', { style: 'background:var(--amber)' }), '今回'), avgRun ? h('span', null, h('i', { style: 'background:var(--cool)' }), 'これまでの平均') : null)),
        h('div', { class: 'panel' },
          h('h3', null, 'あなたの判断の癖'),
          h('ul', { class: 'tendencies' }, tendencies(R).map(t => h('li', null, t)))),
        h('div', { class: 'panel' },
          h('h3', null, '判断の向き'),
          spectrum('リスクの取り方', '慎重', '大胆', R.risk),
          spectrum('優先したもの', '任務の達成', '人命と長期', R.hm),
          h('p', { class: 'note' }, 'この2つに良し悪しはない。自分がどちらに傾きやすいかを知っておくための目盛りだ。'))));

    // 局面ごと
    panels.turns = h('div', { class: 'tcards' }, G.log.map((l, k) => {
      const t = sc.turns[k], o = t.opt[l.i];
      const hi = t.opt.findIndex(x => x.hist);
      const bad = t.rep.find(r => r.bad);
      return h('article', { class: 'panel tcard' },
        h('div', { class: 'tcard-head' },
          h('h3', null, `${k + 1}. ${t.title}`),
          h('span', { class: 'row', style: 'gap:6px' },
            l.timeout ? h('span', { class: 'chip ng' }, '時間切れ') : h('span', { class: 'chip ' + (l.success ? 'ok' : 'ng') }, l.success ? '狙いどおり' : '裏目'),
            l.inv ? h('span', { class: 'chip' }, '裏取りした') : null)),
        h('div', { class: 'compare2' },
          h('div', null,
            h('span', { class: 'who' }, 'あなたの判断'),
            h('span', { class: 'what' }, l.timeout ? `時間切れ(${LET[l.i]}: ${o.l} と同じ流れに)` : `${LET[l.i]}: ${o.l}`),
            h('span', { class: 'muted', style: 'font-size:13px' }, '判断の質 ', qbar(l.q), l.timeout ? '' : `  確信度 ${Math.round(l.conf * 100)}%`),
            l.reason ? h('span', { style: 'font-size:13px' }, `理由: 「${l.reason}」`) : null),
          h('div', null,
            h('span', { class: 'who' }, '史実の判断'),
            h('span', { class: 'what' }, `${LET[hi]}: ${t.opt[hi].l}`),
            h('span', { class: 'muted', style: 'font-size:13px' }, '判断の質 ', qbar(t.opt[hi].q)))),
        h('p', null, t.hist),
        h('div', { class: 'reveal' },
          bad ? h('div', { class: 'item' }, h('b', null, '誤報'), h('span', null, `「${bad.f}」の報告: ${bad.why}`)) : null,
          t.flaw ? h('div', { class: 'item' }, h('b', null, `${ADV[t.flaw].name}の穴`), h('span', null, `推奨は${LET[t.adv[t.flaw][0]]}(自信度${t.adv[t.flaw][2]}%)。${t.flawWhy}`, l.i === t.adv[t.flaw][0] && !l.timeout ? h('b', { style: 'color:var(--signal);display:block' }, 'あなたはこの進言に従った。') : null)) : h('div', { class: 'item' }, h('b', null, 'AI参謀'), h('span', null, 'この局面では、参謀の推論に大きな穴はなかった。')),
          h('div', { class: 'item' }, h('b', null, '判断のポイント'), h('span', { class: 'lesson' }, t.lesson))));
    }));

    // もしも年表
    panels.tl = h('div', null,
      h('p', { class: 'muted', style: 'margin-bottom:12px' }, 'あなたが史実と違う道を選んだ局面では、世界線が分かれていく。'),
      h('div', { class: 'timeline' },
        h('div', { class: 'tl-head' }, h('span', { class: 'when' }, '局面'), h('span', null, '史実'), h('span', null, 'あなたの世界線')),
        G.log.map((l, k) => {
          const t = sc.turns[k], o = t.opt[l.i];
          const same = !!o.hist && !l.timeout;
          return h('div', { class: 'tl-row' },
            h('span', { class: 'when' }, t.clock.split(' ')[0]),
            h('span', null, t.histTl),
            h('span', { class: 'mine ' + (same ? 'same' : 'diverge') }, same ? '史実と同じ道' : (l.timeout ? '時間切れ: ' : '') + (o.tl || o.l)));
        }),
        h('div', { class: 'tl-row' },
          h('span', { class: 'when' }, '結末'),
          h('span', null, sc.epilogue),
          h('span', { class: 'mine diverge' }, `「${G.end.title}」 ${G.end.text}`))));

    // 共有
    const code = encodeRun(G.run);
    const codeEl = h('div', { class: 'codebox', id: 'sharecode' }, code);
    const summary = `司令塔「${sc.title}」 判断の質${R.proc} / 結果${R.out} / 結末「${G.end.title}」`;
    const sumEl = h('div', { class: 'codebox' }, summary);
    panels.share = h('div', { class: 'stack', style: 'max-width:720px' },
      h('p', null, '同じ作戦を遊んだ友人と、局面ごとの判断を比べられます。下の対戦コードを送り、友人は「友人と比べる」に貼り付けてください。'),
      codeEl,
      h('div', { class: 'row' },
        h('button', { class: 'btn', type: 'button', onclick: () => copyText(code, codeEl) }, '対戦コードをコピー'),
        h('button', { class: 'btn ghost', type: 'button', onclick: () => { S.sfx.click(); goCompare(); } }, '友人のコードを貼り付ける')),
      h('div', { class: 'eyebrow', style: 'margin-top:12px' }, 'ひとこと共有用'),
      sumEl,
      h('button', { class: 'btn ghost small', type: 'button', style: 'justify-self:start', onclick: () => copyText(summary, sumEl) }, '文章をコピー'));

    const tabs = [['sum', '総合'], ['turns', '局面ごと'], ['tl', 'もしも年表'], ['share', '比べる']];
    const tabBar = h('div', { class: 'tabs', role: 'tablist' }, tabs.map(([k, l], i) =>
      h('button', { class: 'tab', type: 'button', role: 'tab', 'aria-selected': String(i === 0), id: 'tab-' + k, onclick: () => selTab(k) }, l)));
    const body = h('div', { id: 'review-body' });
    function selTab(k) {
      $$('#review .tab').forEach(t => t.setAttribute('aria-selected', String(t.id === 'tab-' + k)));
      body.innerHTML = ''; body.append(panels[k]);
      S.sfx.page();
    }
    root.append(
      h('div', { class: 'hub-head' },
        h('div', null, h('div', { class: 'eyebrow' }, `${sc.title} — 振り返り`), h('h2', { style: 'font-family:var(--f-display);font-size:clamp(26px,4vw,36px)' }, '判断を解剖する')),
        h('div', { class: 'row' },
          h('button', { class: 'btn ghost small', type: 'button', onclick: () => { S.sfx.click(); startScenario(sc.id); } }, 'もう一度挑む'),
          h('button', { class: 'btn small', type: 'button', onclick: () => { S.sfx.click(); goHub(); } }, '作戦室へ'))),
      tabBar, body);
    body.append(panels.sum);
    bindSfx(root);
    show('s-review');
  }
  function scoreTile(label, n, sub) {
    return h('div', { class: 'panel score' }, h('span', { class: 'l' }, label), h('span', { class: 'n' }, String(n)), h('span', { class: 's muted' }, sub));
  }
  function qbar(q) { return h('span', { class: 'qbar', 'aria-label': `3段階中${q}` }, [1, 2, 3].map(i => h('i', { class: i <= q ? 'on' : '' }))); }
  function quadEl(proc, out, qd) {
    const cell = (k, t, s) => h('div', { class: 'cell' + (qd.k === k ? ' on' : '') }, h('b', null, t), s);
    const el = h('div', { class: 'quad' },
      h('span', { class: 'ax y', style: 'grid-row:1 / 3' }, '結果 →'),
      cell('bg', '運に救われた', '判断△ 結果◯'),
      cell('gg', '実力の勝利', '判断◯ 結果◯'),
      cell('bb', '必然の敗北', '判断△ 結果△'),
      cell('gb', '良い判断、不運', '判断◯ 結果△'),
      h('span', null),
      h('span', { class: 'ax', style: 'grid-column:2 / 4' }, '判断の質 →'));
    const dot = h('i', { class: 'dot', style: `left:calc(1.6em + (100% - 1.6em) * ${proc / 100}); bottom:calc(1.6em + (100% - 1.6em) * ${out / 100})`, 'aria-hidden': 'true' });
    el.append(dot);
    return el;
  }

  /* ════════════════ 判断プロフィール ════════════════ */
  function goProfile() {
    S.play('review');
    const root = $('#profile'); root.innerHTML = '';
    const runs = store.runs;
    root.append(h('div', { class: 'hub-head' },
      h('div', null, h('div', { class: 'eyebrow' }, 'これまでの全作戦から'), h('h2', { style: 'font-family:var(--f-display);font-size:clamp(26px,4vw,36px)' }, '判断プロフィール')),
      h('button', { class: 'btn small', type: 'button', onclick: () => { S.sfx.click(); goHub(); } }, '作戦室へ')));
    if (!runs.length) {
      root.append(h('div', { class: 'panel empty' },
        h('h3', { style: 'font-family:var(--f-display)' }, 'まだ記録がありません'),
        h('p', { class: 'muted' }, '作戦を1つ終えると、判断の5つの軸と、あなたの判断の癖がここに積み上がっていきます。'),
        h('button', { class: 'btn', type: 'button', onclick: () => { S.sfx.click(); goHub(); } }, '作戦を選ぶ')));
      bindSfx(root); show('s-profile'); return;
    }
    const A = Object.fromEntries(['proc', 'out', 'speed', 'info', 'ai', 'calib', 'risk', 'hm'].map(k => [k, Math.round(avg(runs.map(r => r[k])))]));
    const recent = runs.slice(-5);
    const R5 = Object.fromEntries(['proc', 'speed', 'info', 'ai', 'calib'].map(k => [k, Math.round(avg(recent.map(r => r[k])))]));
    const calibLabel = A.calib >= 75 ? 'ほぼ適切' : '';
    root.append(
      h('div', { class: 'scores' },
        scoreTile('作戦の回数', runs.length, `今日の1判断の連続 ${streakNow()}日`),
        scoreTile('判断の質(平均)', A.proc, '結果に左右されない筋の良さ'),
        scoreTile('結果(平均)', A.out, '指標の平均'),
        scoreTile('確信度の精度', A.calib, '自信と結果の釣り合い')),
      h('div', { class: 'review-grid' },
        h('div', { class: 'panel' },
          h('h3', null, '判断の5つの軸'),
          h('div', { html: radarSvg([
            { v: A, fill: 'rgba(240,170,50,.18)', stroke: 'var(--amber)' },
            ...(runs.length >= 3 ? [{ v: R5, fill: 'none', stroke: 'var(--cool)', dash: true }] : [])]) }),
          h('div', { class: 'legend' }, h('span', null, h('i', { style: 'background:var(--amber)' }), '全体の平均'), runs.length >= 3 ? h('span', null, h('i', { style: 'background:var(--cool)' }), '直近5回') : null)),
        h('div', { class: 'panel' },
          h('h3', null, 'あなたの判断の癖'),
          h('ul', { class: 'tendencies' }, tendencies({ ...A, calibLabel: calibLabel || (A.calib < 60 ? '要注意' : ''), avgConf: 0, sr: 0, timeouts: 0 }).filter(Boolean).map(t => h('li', null, t))),
          spectrum('リスクの取り方', '慎重', '大胆', A.risk),
          spectrum('優先したもの', '任務の達成', '人命と長期', A.hm)),
        h('div', { class: 'panel', style: 'grid-column:1 / -1' },
          h('h3', null, '作戦の記録'),
          h('div', { class: 'table-wrap' }, h('table', { class: 'cmp' },
            h('thead', null, h('tr', null, ['日時', '作戦', '結末', '判断の質', '結果', '速度', '情報', 'AI', '確信度'].map(x => h('th', null, x)))),
            h('tbody', null, runs.slice().reverse().slice(0, 20).map(r => {
              const s = SC.find(x => x.id === r.sc);
              const d = new Date(r.at);
              return h('tr', null,
                h('td', { class: 'mono' }, `${d.getMonth() + 1}/${d.getDate()} ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`),
                h('td', null, s ? s.title : r.sc), h('td', null, r.end || ''),
                ...['proc', 'out', 'speed', 'info', 'ai', 'calib'].map(k => h('td', { class: 'mono' }, String(r[k]))));
            })))))));
    bindSfx(root);
    show('s-profile');
  }

  /* ════════════════ 友人と比べる ════════════════ */
  function goCompare() {
    S.play('title');
    const root = $('#compare'); root.innerHTML = '';
    const ta = h('textarea', { class: 'codein', id: 'codein', placeholder: 'SRT1. で始まる対戦コードを貼り付け' });
    const result = h('div', { id: 'cmp-result', class: 'stack', style: 'margin-top:18px' });
    root.append(
      h('div', { class: 'hub-head' },
        h('div', null, h('div', { class: 'eyebrow' }, '同じ作戦、別の判断'), h('h2', { style: 'font-family:var(--f-display);font-size:clamp(26px,4vw,36px)' }, '友人と比べる')),
        h('button', { class: 'btn small', type: 'button', onclick: () => { S.sfx.click(); goHub(); } }, '作戦室へ')),
      h('div', { class: 'panel', style: 'padding:18px;display:grid;gap:12px;max-width:760px' },
        h('label', { for: 'codein' }, '友人から届いた対戦コード'),
        ta,
        h('div', { class: 'row' }, h('button', { class: 'btn', type: 'button', onclick: () => runCompare(ta.value, result) }, '比べる')),
        h('p', { class: 'note' }, 'あなたの対戦コードは、作戦の振り返り画面の「比べる」タブにあります。比較には、同じ作戦でのあなたの最新の記録を使います。')),
      result);
    bindSfx(root);
    show('s-compare');
  }
  function runCompare(code, out) {
    out.innerHTML = '';
    const f = decodeRun(code);
    if (!f) { S.sfx.timeout(); out.append(h('div', { class: 'panel', style: 'padding:16px;color:var(--signal)' }, 'コードを読み取れませんでした。「SRT1.」から最後の文字まで、すべて貼り付けてください。')); return; }
    S.sfx.reveal();
    const sc = SC.find(s => s.id === f.s);
    const mine = store.runs.filter(r => r.sc === f.s).slice(-1)[0];
    const lab = (t, i) => i < 0 ? '時間切れ' : `${LET[i]}: ${t.opt[i].l}`;
    out.append(
      h('div', { class: 'scores' },
        scoreTile(`${f.n} 判断の質`, f.p, `結果 ${f.o} / 「${f.e || ''}」`),
        mine ? scoreTile('あなた 判断の質', mine.proc, `結果 ${mine.out} / 「${mine.end}」`) : scoreTile('あなた', '—', 'この作戦をまだ遊んでいません'),
        scoreTile('作戦', sc.title, sc.year),
        scoreTile('一致した判断', mine ? `${f.c.filter((c, i) => c >= 0 && c === mine.c[i]).length}/${sc.turns.length}` : '—', '同じ選択をした局面')),
      h('div', { class: 'table-wrap panel' }, h('table', { class: 'cmp' },
        h('thead', null, h('tr', null, h('th', null, '局面'), h('th', null, f.n), h('th', null, 'あなた'), h('th', null, '史実'))),
        h('tbody', null, sc.turns.map((t, i) => {
          const fi = f.c[i], mi = mine ? mine.c[i] : null;
          const hi = t.opt.findIndex(o => o.hist);
          return h('tr', null,
            h('td', null, h('b', null, t.title), h('br'), h('span', { class: 'muted mono', style: 'font-size:11px' }, t.clock)),
            h('td', { class: mine && fi === mi ? 'same' : '' }, lab(t, fi), f.k && f.k[i] ? h('div', { class: 'muted mono', style: 'font-size:11px' }, `確信度 ${Math.round(f.k[i] * 100)}%`) : null),
            h('td', { class: mine && fi === mi ? 'same' : '' }, mine ? lab(t, mi) : '—', mine && mine.k[i] ? h('div', { class: 'muted mono', style: 'font-size:11px' }, `確信度 ${Math.round(mine.k[i] * 100)}%`) : null),
            h('td', null, lab(t, hi)));
        })))),
      mine ? null : h('button', { class: 'btn', type: 'button', style: 'justify-self:start', onclick: () => { S.sfx.select(); startScenario(sc.id); } }, `「${sc.title}」を遊んで比べる`));
    bindSfx(out);
  }

  /* ════════════════ 今日の1判断 ════════════════ */
  let D = null;
  function goDaily(index, practice) {
    const idx = index != null ? index : dailyIndex();
    const q = DAILY[idx];
    const key = todayKey();
    const done = store.daily.results[key];
    const root = $('#daily'); root.innerHTML = '';
    if (!practice && done && index == null) { renderDailyResult(DAILY.findIndex(x => x.id === done.id), done, false); return; }
    D = { idx, q, practice: !!practice, sel: null, decided: false, running: true };
    S.play('tension', 'daily');
    S.setIntensity(0.2);
    S.sfx.radio();
    const ring = timerRing('dring');
    const conf = h('input', { type: 'range', id: 'dconf', min: '50', max: '100', step: '5', value: '70' });
    const confVal = h('span', { class: 'conf-val' }, '70%');
    conf.addEventListener('input', () => { confVal.textContent = conf.value + '%'; S.sfx.slide(conf.value - 40); });
    const go = h('button', { class: 'btn', type: 'button', id: 'dgo', disabled: true, onclick: () => dailyDecide(false) }, '決裁する');
    const sitEl = h('div', { class: 'panel sit', onclick: () => { skipTyping = true; } });
    root.append(h('div', { class: 'daily-wrap' },
      h('div', { class: 'row', style: 'justify-content:space-between;align-items:start' },
        h('div', null,
          h('div', { class: 'eyebrow' }, practice ? '過去問に挑む' : `今日の1判断 — ${key}`),
          h('div', { class: 'clock' }, q.year),
          h('h1', null, q.title),
          h('p', { class: 'muted' }, `あなた: ${q.role}(${q.roleNote})`)),
        ring),
      sitEl,
      h('div', { class: 'panel decide', style: 'margin-top:0' },
        h('div', { class: 'opts' }, q.opt.map((o, i) =>
          h('button', { class: 'opt', type: 'button', 'aria-pressed': 'false', 'data-i': String(i), onclick: () => dailyPick(i) },
            h('span', { class: 'letter' }, LET[i]),
            h('span', null, h('div', { class: 'ol' }, o.l), h('div', { class: 'od' }, o.d))))),
        h('div', { class: 'decide-row', style: 'grid-template-columns:minmax(0,1fr) auto' },
          h('div', { class: 'field' }, h('label', { for: 'dconf' }, '確信度 ', confVal), conf),
          go))));
    bindSfx(root);
    show('s-daily');
    ring.update(60, 60);
    skipTyping = false;
    (async () => {
      await typeInto(sitEl, q.sit, 12);
      if (!D || D.q !== q || D.decided) return;
      startTimer(60, tm => { ring.update(tm.left, tm.limit); S.setIntensity(tm.left <= 10 ? 1 : 0.25 + 0.6 * (1 - tm.left / tm.limit)); }, () => dailyDecide(true));
    })();
  }
  function dailyPick(i) {
    if (!D || D.decided) return;
    D.sel = i;
    $$('#daily .opt').forEach(b => b.setAttribute('aria-pressed', String(Number(b.dataset.i) === i)));
    $('#dgo').disabled = false;
    S.sfx.select();
  }
  function dailyDecide(isTimeout) {
    if (!D || D.decided) return;
    if (!isTimeout && D.sel == null) return;
    D.decided = true; D.running = false;
    stopTimer();
    const i = isTimeout ? -1 : D.sel;
    const res = { id: D.q.id, i, q: i < 0 ? 0 : D.q.opt[i].q, conf: i < 0 ? null : Number($('#dconf').value) / 100 };
    if (!D.practice) {
      const key = todayKey();
      if (!store.daily.results[key]) {
        const y = new Date(); y.setDate(y.getDate() - 1);
        store.daily.streak = store.daily.last === todayKey(y) ? store.daily.streak + 1 : 1;
        store.daily.last = key;
        store.daily.results[key] = res;
        save();
      }
    }
    if (isTimeout) S.sfx.timeout(); else S.sfx.stamp();
    setTimeout(() => renderDailyResult(D.idx, res, D.practice), 600);
  }
  function renderDailyResult(idx, res, practice) {
    const q = DAILY[idx];
    S.play('review');
    S.sfx.reveal();
    const hi = q.opt.findIndex(o => o.hist);
    const best = Math.max(...q.opt.map(o => o.q));
    const bi = q.opt.findIndex(o => o.q === best);
    const root = $('#daily'); root.innerHTML = '';
    const verdict = res.i < 0 ? '時間切れ' : res.q === 3 ? '筋の良い判断' : res.q >= 1 ? '一理あるが、危うい判断' : '危険な判断';
    root.append(h('div', { class: 'daily-wrap' },
      h('div', { class: 'eyebrow' }, practice ? '過去問の結果' : `今日の1判断 — ${todayKey()}`),
      h('h1', null, q.title),
      h('div', { class: 'row' },
        h('span', { class: 'chip ' + (res.q === 3 ? 'ok' : 'ng') }, verdict),
        practice ? null : h('span', { class: 'chip amber' }, `${streakNow()}日連続`)),
      h('div', { class: 'compare2' },
        h('div', null, h('span', { class: 'who' }, 'あなたの判断'), h('span', { class: 'what' }, res.i < 0 ? '決められなかった' : `${LET[res.i]}: ${q.opt[res.i].l}`), h('span', { class: 'muted', style: 'font-size:13px' }, '判断の質 ', qbar(res.q), res.conf ? `  確信度 ${Math.round(res.conf * 100)}%` : '')),
        h('div', null, h('span', { class: 'who' }, '史実の判断'), h('span', { class: 'what' }, `${LET[hi]}: ${q.opt[hi].l}`), h('span', { class: 'muted', style: 'font-size:13px' }, '判断の質 ', qbar(q.opt[hi].q)))),
      hi !== bi ? h('div', { class: 'panel', style: 'padding:14px;border-color:var(--signal)' }, h('b', { style: 'color:var(--signal)' }, '史実の判断が最善だったとは限らない。'), ` この問題で最も筋が良いのは「${LET[bi]}: ${q.opt[bi].l}」だった。`) : null,
      h('div', { class: 'panel', style: 'padding:18px;display:grid;gap:10px' },
        h('div', { class: 'eyebrow' }, '史実では'),
        h('p', null, q.hist),
        h('p', { class: 'lesson' }, q.lesson)),
      shareBar(`司令塔「今日の1判断」${q.title}(${q.year})。私の判断は「${res.i < 0 ? '時間切れ' : q.opt[res.i].l}」で、${verdict}だった。${practice ? '' : `${streakNow()}日連続挑戦中。`}`),
      h('div', { class: 'row' },
        h('button', { class: 'btn', type: 'button', onclick: () => { S.sfx.click(); goHub(); } }, '作戦室へ')),
      h('div', { class: 'eyebrow', style: 'margin-top:12px' }, '過去問に挑む(連続記録には数えません)'),
      h('div', { class: 'archive' }, DAILY.map((d, i) => h('button', { type: 'button', onclick: () => { S.sfx.select(); goDaily(i, true); } }, h('span', { class: 'yr' }, d.year), d.title)))));
    bindSfx(root);
    show('s-daily');
  }

  /* ════════════════ 遊び方 ════════════════ */
  function goHowto() {
    S.play('title');
    const root = $('#howto'); root.innerHTML = '';
    const pr = [
      ['情報は不完全', '入電には誤報や、誤解を招く報告が混じる。「裏を取る」と真偽が分かるが、持ち時間を使う。'],
      ['時間がない', '1つの判断に制限時間がある。迷っている間も時計は進み、時間切れは「決められなかった」という決断になる。'],
      ['正解がない', 'どの選択肢も何かを犠牲にする。人命か任務か、今か後か。'],
      ['結果と判断は別', '運よく成功しても判断の筋が悪ければ評価は低い。筋の良い判断が不運で失敗することもある。'],
      ['自信を数字にする', '決裁のたびに確信度を入れる。自信過剰か、控えめすぎかが見えてくる。']
    ];
    root.append(h('div', { class: 'howto' },
      h('div', null, h('div', { class: 'eyebrow' }, '遊び方'), h('h1', null, '判断を筋トレする')),
      h('p', null, '司令塔は、歴史上の危機で指揮を執る立場に立ち、限られた時間と不完全な情報の中で決断を下すゲームです。結末だけでなく、判断の筋道そのものを振り返ることで、判断力を鍛えます。'),
      h('div', { class: 'principles' }, pr.map(([t, d]) => h('div', { class: 'panel' }, h('b', null, t), h('span', { style: 'font-size:14px' }, d)))),
      h('div', null, h('h2', null, '1つの作戦の流れ'),
        h('ol', null,
          h('li', null, 'ブリーフィングで状況と、見守る3つの指標を確かめる。'),
          h('li', null, '各局面で入電を読み、必要なら裏を取る。'),
          h('li', null, 'AI参謀3人(慎重派ミネルヴァ、攻撃派アレス、データ至上のラプラス)の進言を聞く。誰かがもっともらしく間違えていることがある。'),
          h('li', null, '選択肢を選び、確信度と理由を入れて決裁する。結果には運の要素がある。'),
          h('li', null, '全局面の後、結末と史実が明かされる。振り返りでは、判断と結果のマトリクス、5つの軸、判断の癖、局面ごとの誤報とAIの穴、もしも年表を確かめる。'))),
      h('div', null, h('h2', null, '5つの軸'),
        h('ul', null,
          h('li', null, h('b', null, '判断の質'), ': 結果に関係なく、その時点の情報で筋の良い判断だったか。'),
          h('li', null, h('b', null, '決断速度'), ': 持ち時間をどれだけ残して決めたか。'),
          h('li', null, h('b', null, '情報の見極め'), ': 誤報が混じる局面で裏を取ったか、だまされずに判断できたか。'),
          h('li', null, h('b', null, 'AI参謀の見極め'), ': 推論に穴のある参謀の進言に流されなかったか。'),
          h('li', null, h('b', null, '確信度の精度'), ': 入れた確信度と、実際に狙いどおりになった割合が釣り合っているか。'))),
      h('div', null, h('h2', null, '続けるための仕組み'),
        h('ul', null,
          h('li', null, h('b', null, '今日の1判断'), ': 日替わりで1問、3分で終わる歴史のジレンマ。連続日数が記録される。'),
          h('li', null, h('b', null, '判断プロフィール'), ': すべての作戦の記録から、あなたの判断の癖を描く。'),
          h('li', null, h('b', null, '友人と比べる'), ': 振り返り画面の対戦コードを送り合うと、同じ局面での判断を並べて比べられる。'))),
      h('p', { class: 'note' }, '記録はこのブラウザの中にだけ保存されます。史実の記述は一般に知られている資料に基づいていますが、ゲームとして状況を単純化しています。史実の判断が常に最善だったわけではありません。'),
      h('div', { class: 'row' }, h('button', { class: 'btn', type: 'button', onclick: () => { S.sfx.click(); goHub(); } }, '作戦室へ'))));
    bindSfx(root);
    show('s-howto');
  }

  // タイトル画面のボタンにも効果音を
  bindSfx($('#s-title'));
})();
