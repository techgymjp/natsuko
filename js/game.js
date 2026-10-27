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
  const ADV = window.ADVISORS, DAILY = window.DAILY;
  // 作戦は易しい順に並べ、1つずつ鍵を開けていく
  const ORDER = [
    'chile', 'tylenol', 'amundsen', 'london',
    'apollo', 'shackleton', 'okehazama', 'kurofune', 'edo', 'armada', 'delaware', 'berlin', 'qf32', 'thaicave',
    'cuba', 'midway', 'tmi', 'britain', 'gemini8', 'hudson'
  ];
  const SC = ORDER.map(id => window.SCENARIOS.find(s => s.id === id)).filter(Boolean);
  const S = window.SND;
  const Ads = window.Ads;
  const t = window.I18N.t;
  const EN = window.I18N.lang === 'en';
  // 「」で囲む(英語では "")
  const q = x => (EN ? `"${x}"` : `「${x}」`);
  // 時刻表示から日付の部分だけ取り出す
  const dayOf = c => (EN ? c.split(',')[0] : c.split(' ')[0]);
  // Android アプリ（Capacitor）で動いているか。Web 版では Capacitor がないので何もしない
  const NATIVE = !!(window.Capacitor && window.Capacitor.isNativePlatform && window.Capacitor.isNativePlatform());
  const plugin = name => (NATIVE && window.Capacitor.Plugins ? window.Capacitor.Plugins[name] : null);

  /* ── 保存 ── */
  const KEY = 'shireito.v1';
  let store = { runs: [], daily: { last: null, streak: 0, results: {} }, name: '', audio: null, unlocked: [] };
  try { const v = JSON.parse(localStorage.getItem(KEY)); if (v) store = Object.assign(store, v); } catch (e) { /* 保存なしで続行 */ }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(store)); } catch (e) { /* 保存できない環境 */ } }

  /* ── 画面切り替え ── */
  let screen = 's-title';
  const BANNER_SCREENS = ['s-hub', 's-ending', 's-review', 's-profile', 's-compare', 's-howto', 's-daily'];
  function show(id) {
    $$('.screen').forEach(s => { s.hidden = s.id !== id; });
    $('#topbar').hidden = id === 's-title';
    screen = id;
    window.scrollTo(0, 0);
    // バナー広告は、判断を下す画面(局面と今日の1判断の出題中)とタイトルでは出さない
    Ads.setBanner(BANNER_SCREENS.includes(id) && !(id === 's-daily' && D && D.running));
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
    const el = h('div', { class: 'timer', id, role: 'timer', 'aria-label': t('timer.aria') });
    el.innerHTML = `<svg viewBox="0 0 92 92" aria-hidden="true"><circle cx="46" cy="46" r="${r}" fill="none" stroke="var(--console-2)" stroke-width="6"/><circle class="arc" cx="46" cy="46" r="${r}" fill="none" stroke="var(--amber)" stroke-width="6" stroke-linecap="round" stroke-dasharray="${c}" stroke-dashoffset="0"/></svg><div class="num"><div><small>${t('timer.left')}</small><span>--</span></div></div>`;
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
  window.I18N.applyStatic();
  syncSoundBtn();
  $('#s-title .ticker').replaceChildren(
    ...SC.slice(0, 5).map(sc => h('div', null, (sc.year.match(/\d{4}/) || [''])[0], h('b', null, sc.title))),
    SC.length > 5 ? h('div', null, '+', h('b', null, t('title.more', { n: SC.length - 5 }))) : null);
  $('#lang-title').addEventListener('click', () => window.I18N.setLang(EN ? 'ja' : 'en'));
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
  $('#brand').addEventListener('click', () => leaveTo(toHub));
  $('#nav-hub').addEventListener('click', () => leaveTo(toHub));
  $('#nav-sound').addEventListener('click', () => {
    S.init();
    S.setMuted(!S.settings.muted);
    persistAudio();
    syncSoundBtn();
  });
  function syncSoundBtn() {
    const b = $('#nav-sound');
    b.textContent = S.settings.muted ? t('nav.sound.off') : t('nav.sound.on');
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
      $('#nav-hub').textContent = t('nav.confirm');
      S.sfx.flag();
      setTimeout(() => { leaveArmed = false; $('#nav-hub').textContent = t('nav.hub'); }, 3000);
      return;
    }
    leaveArmed = false;
    $('#nav-hub').textContent = t('nav.hub');
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

  /* ── 作戦の鍵 ── */
  const cleared = id => store.runs.some(r => r.sc === id);
  // 最初の作戦、前の作戦を終えた作戦、広告で開けた作戦、すでに遊んだ作戦は開いている
  function isUnlocked(i) {
    const sc = SC[i];
    return i === 0 || cleared(SC[i - 1].id) || store.unlocked.includes(sc.id) || cleared(sc.id);
  }
  async function unlockByAd(id, btn) {
    btn.disabled = true;
    const r = await Ads.showRewarded();
    if (r === 'rewarded') {
      if (!store.unlocked.includes(id)) store.unlocked.push(id);
      save();
      S.sfx.success();
      toast(t('lock.opened', { title: SC.find(s => s.id === id).title }));
      goHub();
    } else {
      btn.disabled = false;
      if (r === 'unavailable') toast(t('turn.ad.ng'));
    }
  }

  function goHub() {
    S.play('title');
    const root = $('#hub'); root.innerHTML = '';
    const today = DAILY[dailyIndex()];
    const doneToday = !!store.daily.results[todayKey()];
    root.append(
      h('div', { class: 'hub-head' },
        h('div', null,
          h('div', { class: 'eyebrow' }, store.name ? t('hub.welcome', { name: store.name }) : t('hub.welcome0')),
          h('h2', null, t('hub.h2'))),
        h('div', { class: 'row' },
          h('button', { class: 'btn ghost small', type: 'button', onclick: () => { S.sfx.click(); goHowto(); } }, t('hub.howto')),
          h('button', { class: 'btn ghost small', type: 'button', onclick: () => { S.sfx.click(); goProfile(); } }, t('hub.profile')),
          h('button', { class: 'btn ghost small', type: 'button', onclick: () => { S.sfx.click(); goCompare(); } }, t('hub.compare')),
          h('button', { class: 'btn ghost small', type: 'button', onclick: () => window.I18N.setLang(EN ? 'ja' : 'en') }, t('lang.switch')))),
      h('div', { class: 'hub-grid' },
        h('div', { class: 'cards' }, SC.map((sc, i) => {
          const b = bestOf(sc.id);
          if (!isUnlocked(i)) {
            return h('div', { class: 'sc-card locked' },
              h('span', { class: 'yr' }, t('hub.mission', { n: i + 1 }), ' · ', sc.year),
              h('h3', null, h('span', { class: 'lock', 'aria-hidden': 'true' }), sc.title),
              h('span', { class: 'sub' }, t('lock.label')),
              h('span', { class: 'role' }, t('lock.need', { prev: SC[i - 1].title })),
              Ads.rewardedEnabled ? h('button', { class: 'btn small', type: 'button', onclick: e => { S.sfx.select(); unlockByAd(sc.id, e.currentTarget); } }, t('lock.ad')) : null);
          }
          return h('button', { class: 'sc-card', type: 'button', onclick: () => { S.sfx.select(); withAd(() => startScenario(sc.id)); } },
            h('span', { class: 'yr' }, t('hub.mission', { n: i + 1 }), ' · ', sc.year),
            h('h3', null, sc.title),
            h('span', { class: 'sub' }, sc.sub),
            h('span', { class: 'role' }, t('hub.you', { role: sc.role }), h('br'), h('span', { class: 'muted' }, sc.roleNote)),
            h('span', { class: 'foot' },
              h('span', { class: 'chip' }, t('hub.diff'), h('span', { class: 'pips' }, [1, 2, 3].map(i => h('i', { class: i <= sc.diff ? 'on' : '' })))),
              h('span', { class: 'chip' }, t('hub.time', { s: sc.time })),
              h('span', { class: 'chip' }, t('hub.turns', { n: sc.turns.length })),
              b ? h('span', { class: 'chip amber' }, t('hub.best', { p: b.proc, o: b.out })) : null));
        })),
        h('aside', { class: 'side' },
          h('div', { class: 'panel daily-card' },
            h('div', { class: 'eyebrow' }, t('hub.daily')),
            h('h3', null, today.title),
            h('p', { class: 'muted fs-s' }, `${today.year} / ${today.role}`),
            h('div', { class: 'row' },
              h('div', null, h('div', { class: 'streak' }, String(streakNow())), h('div', { class: 'note' }, t('hub.streak'))),
              h('span', { class: 'spacer', style: 'flex:1' }),
              h('button', { class: 'btn small', type: 'button', onclick: () => { S.sfx.select(); openToday(); } }, doneToday ? t('hub.daily.done') : t('hub.daily.go')))),
          h('div', { class: 'panel' },
            h('h3', null, t('hub.advisors')),
            h('div', { class: 'adv-mini' }, Object.entries(ADV).map(([k, a]) =>
              h('div', null, h('span', { class: `glyph g-${k}` }, a.glyph), h('span', null, h('b', null, a.name), EN ? ` ${a.stance}. ${a.desc}.` : ` ${a.stance}。${a.desc}。`)))),
            h('p', { class: 'note' }, t('hub.advisors.note'))),
          h('div', { class: 'panel' },
            h('h3', null, t('hub.volume')),
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
    return h('div', { class: 'vol' }, row('master', t('vol.master')), row('bgm', t('vol.bgm')), row('sfx', t('vol.sfx')));
  }

  /* ════════════════ 作戦: ブリーフィング ════════════════ */
  let G = null;
  function startScenario(id) {
    const idx = SC.findIndex(s => s.id === id);
    if (idx < 0 || !isUnlocked(idx)) { toast(t('lock.toast')); goHub(); return; }
    const sc = SC[idx];
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
    const startBtn = h('button', { class: 'btn', type: 'button', onclick: () => { S.sfx.stamp(); renderTurn(); } }, t('brief.start'));
    root.append(
      h('div', { class: 'brief-grid' },
        h('div', null,
          h('div', { class: 'eyebrow' }, `${sc.year} — ${sc.place}`),
          h('h1', { class: 'brief-title' }, sc.title),
          h('div', { class: 'brief-sub' }, sc.sub),
          tele,
          h('div', { class: 'row', style: 'margin-top:24px' }, startBtn,
            h('button', { class: 'btn ghost small', type: 'button', onclick: () => { skipTyping = true; } }, t('brief.skip')))),
        h('aside', { class: 'panel dossier' },
          h('div', { class: 'eyebrow' }, t('brief.file')),
          h('dl', { class: 'kv' },
            h('dt', null, t('brief.you')), h('dd', null, sc.role, h('br'), h('span', { class: 'muted' }, sc.roleNote)),
            h('dt', null, t('brief.turns')), h('dd', null, t('brief.turnsN', { n: sc.turns.length })),
            h('dt', null, t('brief.time')), h('dd', null, t('brief.timeN', { s: sc.time }))),
          h('h3', null, t('brief.meters')),
          h('div', { class: 'meters' }, sc.meters.map(m => meterRow(m.n, m.v))),
          h('p', { class: 'note' }, t('brief.note1')),
          h('p', { class: 'note' }, t('brief.note2')))));
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
    const sc = G.sc, tr = sc.turns[G.ti];
    T = { sel: null, inv: false, timeout: false, decided: false };
    skipTyping = false;
    S.play('tension', sc.bgm);
    S.setIntensity(0.12 + G.ti * 0.06);
    let sit = tr.sit;
    (tr.sitIf || []).forEach(c => { if (G.m[c.m] >= c.min) sit = c.t; });

    const root = $('#turn'); root.innerHTML = '';
    const ring = timerRing('ring');
    const reportsEl = h('div', { class: 'reports', 'aria-live': 'polite', onclick: () => { skipTyping = true; } });
    const invBtn = h('button', { class: 'btn ghost small', type: 'button', id: 'inv', disabled: true, onclick: investigate }, t('turn.inv', { s: tr.inv.c }));
    const invNote = h('div', { class: 'inv-note', hidden: true });
    const adBtn = Ads.rewardedEnabled && !G.rewardUsed
      ? h('button', { class: 'btn ghost small', type: 'button', id: 'adtime', disabled: true, onclick: e => watchAdForTime(e.currentTarget) }, t('turn.ad'))
      : null;
    const advEl = h('div', { class: 'advisors' });
    const conf = h('input', { type: 'range', id: 'conf', min: '50', max: '100', step: '5', value: '70' });
    const confVal = h('span', { class: 'conf-val' }, '70%');
    conf.addEventListener('input', () => { confVal.textContent = conf.value + '%'; S.sfx.slide(conf.value - 40); });
    const reason = h('input', { type: 'text', id: 'reason', maxlength: '60', placeholder: t('turn.reason.ph'), autocomplete: 'off' });
    const go = h('button', { class: 'btn', type: 'button', id: 'go', disabled: true, onclick: () => decide(false) }, t('turn.go'));
    const opts = h('div', { class: 'opts', role: 'group', 'aria-label': t('turn.opts') }, tr.opt.map((o, i) =>
      h('button', { class: 'opt', type: 'button', 'aria-pressed': 'false', 'data-i': String(i), onclick: () => pick(i) },
        h('span', { class: 'letter' }, LET[i]),
        h('span', null, h('div', { class: 'ol' }, o.l), h('div', { class: 'od' }, o.d)))));

    root.append(
      h('div', { class: 'panel turn-head' },
        h('div', null,
          h('div', { class: 'eyebrow' }, t('turn.phase', { title: sc.title, i: G.ti + 1, n: sc.turns.length })),
          h('div', { class: 'clock' }, tr.clock),
          h('h2', null, tr.title)),
        h('div', { class: 'meters', id: 'meters' }, sc.meters.map(m => meterRow(m.n, G.m[m.k], m.k))),
        ring),
      h('div', { class: 'turn-body' },
        h('div', { class: 'col' },
          h('div', { class: 'panel sit' }, sit),
          h('div', { class: 'section-label' }, h('span', { class: 'eyebrow' }, t('turn.reports')), h('span', { class: 'row', style: 'gap:8px' }, adBtn, invBtn)),
          reportsEl, invNote),
        h('div', { class: 'col' },
          h('div', { class: 'section-label' }, h('span', { class: 'eyebrow' }, t('turn.advice'))),
          advEl)),
      h('div', { class: 'panel decide' },
        h('div', { class: 'section-label' }, h('span', { class: 'eyebrow' }, t('turn.decide')), h('span', { class: 'kbd' }, t('turn.keys'))),
        opts,
        h('div', { class: 'decide-row' },
          h('div', { class: 'field' }, h('label', { for: 'conf' }, t('turn.conf'), confVal), conf),
          h('div', { class: 'field' }, h('label', { for: 'reason' }, t('turn.reason')), reason),
          go)));
    bindSfx(root);
    show('s-turn');
    ring.update(sc.time, sc.time);

    // 入電と参謀の進言を順に流し、終わったら時計を動かす
    (async () => {
      const myTurn = G.ti;
      for (const r of tr.rep) {
        if (!T || G.ti !== myTurn || screen !== 's-turn') return;
        const body = h('div', { class: 'body' });
        const card = h('article', { class: 'report' }, h('div', { class: 'from' }, h('span', null, 'FROM: ' + r.f), h('span', null, dayOf(tr.clock))), body);
        reportsEl.append(card);
        if (sc.id === 'apollo' && /CAPCOM|宇宙船通信/.test(r.f)) S.sfx.quindar(); else S.sfx.incoming();
        await typeInto(body, r.t, 10);
        if (sc.id === 'apollo' && /CAPCOM|宇宙船通信/.test(r.f)) S.sfx.quindar(true);
        await sleep(skipTyping ? 0 : 160);
      }
      ['c', 'a', 'd'].forEach(k => {
        const [pi, text, cf] = tr.adv[k];
        const a = ADV[k];
        advEl.append(h('article', { class: 'panel adv' },
          h('div', { class: 'adv-top' },
            h('span', { class: `glyph g-${k}` }, a.glyph),
            h('span', { class: 'adv-name' }, a.name, h('small', null, a.stance)),
            h('span', { class: 'adv-rec' }, t('turn.rec'), h('b', null, LET[pi]))),
          h('p', null, text),
          h('div', { class: `confbar g-${k}` }, h('span', null, t('turn.advconf')), h('span', { class: 'bar' }, h('span', { style: `width:${cf}%` })), h('span', null, cf + '%'))));
      });
      S.sfx.radio();
      if (!T || G.ti !== myTurn || screen !== 's-turn') return;
      invBtn.disabled = false;
      if (adBtn) adBtn.disabled = false;
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
    const tr = G.sc.turns[G.ti];
    T.inv = true;
    if (timer) timer.left = Math.max(1, timer.left - tr.inv.c);
    $('#inv').disabled = true;
    $('#inv').textContent = t('turn.inv.done');
    S.sfx.investigate();
    const note = $('#turn .inv-note');
    note.hidden = false;
    note.textContent = '';
    typeInto(note, t('turn.inv.result') + tr.inv.t, 12);
    tr.rep.forEach((r, i) => {
      if (!r.bad) return;
      const card = $$('#turn .report')[i];
      if (!card) return;
      setTimeout(() => { card.classList.add('flagged'); card.append(h('span', { class: 'stampmark' }, t('turn.flag'))); S.sfx.flag(); }, 600);
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
    const sc = G.sc, tr = sc.turns[G.ti];
    const limit = sc.time;
    const left = timer ? timer.left : 0;
    stopTimer();
    let i = T.sel;
    if (isTimeout) {
      const di = tr.opt.findIndex(o => o.def);
      i = di >= 0 ? di : tr.opt.reduce((m, o, k) => (o.q < tr.opt[m].q ? k : m), 0);
    }
    const o = tr.opt[i];
    const success = !isTimeout && Math.random() < o.p;
    const fx = success ? o.fx : (o.fxF || o.fx);
    const before = { ...G.m };
    Object.entries(fx || {}).forEach(([k, v]) => { if (k in G.m) G.m[k] = clamp(G.m[k] + v, 0, 100); });
    G.log.push({
      i, timeout: isTimeout, conf: isTimeout ? null : Number($('#conf').value) / 100,
      reason: isTimeout ? '' : $('#reason').value.trim(), success,
      left: isTimeout ? 0 : left, limit, inv: T.inv,
      q: isTimeout ? 0 : o.q, r: o.r, h: o.h, hadBad: tr.rep.some(r => r.bad),
      flawPick: tr.flaw ? tr.adv[tr.flaw][0] : null
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
    } }, last ? t('v.end') : t('v.next'));
    const ov = h('div', { class: 'overlay', role: 'dialog', 'aria-modal': 'true', 'aria-label': t('v.aria') },
      h('div', { class: 'panel verdict' },
        h('div', { class: 'big-stamp' + (isTimeout ? '' : ' go') }, isTimeout ? t('v.stamp.timeout') : t('v.stamp')),
        h('div', { class: 'eyebrow' }, `${LET[G.log[G.log.length - 1].i]}: ${o.l}`),
        h('div', { class: 'row' }, isTimeout
          ? h('span', { class: 'chip ng' }, t('v.chip.timeout'))
          : h('span', { class: 'chip ' + (success ? 'ok' : 'ng') }, success ? t('v.chip.ok') : t('v.chip.ng'))),
        h('h3', null, isTimeout ? t('v.h.timeout') : (success ? t('v.h.ok') : t('v.h.ng'))),
        h('p', null, isTimeout ? t('v.timeout', { l: o.l }) + o.ng : (success ? o.ok : o.ng)),
        h('div', { class: 'deltas' }, sc.meters.map(m => {
          const d = Math.round(G.m[m.k] - before[m.k]);
          return h('div', { class: 'delta' },
            h('span', null, m.n),
            h('span', { class: 'meter', style: 'grid-template-columns:1fr' }, h('span', { class: 'bar' }, h('span', { class: G.m[m.k] < 30 ? 'low' : G.m[m.k] >= 75 ? 'high' : '', style: `width:${before[m.k]}%`, 'data-to': String(G.m[m.k]) }))),
            h('span', { class: 'd ' + (d > 0 ? 'plus' : d < 0 ? 'minus' : 'zero') }, (d > 0 ? '+' : '') + d));
        })),
        h('p', { class: 'note' }, t('v.note')),
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

  /* ── 広告（Android アプリのときだけ。Web 版では何もしない） ── */
  // トップ(作戦室)に戻るとき、作戦を始めるとき、作戦をやり直すとき、過去問を開くときは毎回、全画面広告を出してから進む
  async function withAd(next, waitMs) {
    if (Ads.interstitialEnabled) await Ads.showInterstitial(waitMs);
    next();
  }
  const toHub = () => withAd(goHub);
  // 1作戦に1回、リワード広告を見ると持ち時間が30秒延びる
  async function watchAdForTime(btn) {
    if (!T || T.decided || G.rewardUsed || !timer) return;
    btn.disabled = true;
    timer.paused = true;
    const r = await Ads.showRewarded();
    if (timer) { timer.last = performance.now(); timer.paused = false; }
    if (r === 'rewarded' && timer && T && !T.decided) {
      G.rewardUsed = true;
      timer.left += 30; timer.limit += 30;
      btn.textContent = t('turn.ad.done');
      S.sfx.success();
      toast(t('turn.ad.toast'));
    } else {
      btn.disabled = false;
      if (r === 'unavailable') toast(t('turn.ad.ng'));
    }
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
    const calibLabel = !dec.length ? 'none' : diff > 0.12 ? 'over' : diff < -0.12 ? 'under' : 'ok';
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
      risk: R.risk, hm: R.hm, c: G.log.map(l => l.timeout ? -1 : l.i), k: G.log.map(l => l.conf), end: end.title, tier: tierIdx
    };
    const ni = SC.indexOf(sc) + 1;
    const nextWasLocked = ni < SC.length && !isUnlocked(ni);
    store.runs.push(G.run);
    const opened = nextWasLocked && isUnlocked(ni) ? SC[ni] : null;
    if (store.runs.length > 60) store.runs = store.runs.slice(-60);
    save();
    S.stopBgm(1.2);
    setTimeout(() => { if (tierIdx === 0) S.sfx.stingGood(); else if (tierIdx === 1) S.sfx.stingMid(); else S.sfx.stingBad(); }, 400);
    setTimeout(() => { if (screen === 's-ending') S.play('review'); }, 4200);
    if (opened) setTimeout(() => S.sfx.reveal(), 2600);
    const root = $('#ending'); root.innerHTML = '';
    root.append(h('div', { class: 'ending' },
      h('div', { class: 'eyebrow' }, t('end.eyebrow', { title: sc.title })),
      h('h1', null, end.title),
      h('p', { class: 'text' }, end.text),
      opened ? h('div', { class: 'panel unlocked' },
        h('span', { class: 'chip amber' }, h('span', { class: 'lock open', 'aria-hidden': 'true' }), t('end.unlocked', { title: opened.title })),
        h('button', { class: 'btn small', type: 'button', onclick: () => { S.sfx.select(); withAd(() => startScenario(opened.id)); } }, t('end.next'))) : null,
      h('div', { class: 'panel', style: 'padding:16px' }, h('div', { class: 'meters' }, sc.meters.map(m => meterRow(m.n, G.m[m.k], m.k)))),
      h('div', { class: 'panel epilogue' }, h('div', { class: 'eyebrow', style: 'margin-bottom:6px' }, t('end.history')), h('p', null, sc.epilogue)),
      shareBar(t('share.end', { title: sc.title, role: sc.role, end: end.title, p: R.proc, o: R.out })),
      h('div', { class: 'row' },
        h('button', { class: 'btn', type: 'button', onclick: () => { S.sfx.reveal(); renderReview(); } }, t('end.review')),
        h('button', { class: 'btn ghost', type: 'button', onclick: () => { S.sfx.click(); withAd(() => startScenario(sc.id)); } }, t('end.retry')))));
    bindSfx(root);
    show('s-ending');
  }

  /* ════════════════ 振り返り ════════════════ */
  function quadrant(proc, out) {
    const gp = proc >= 60, go = out >= 60;
    const k = gp ? (go ? 'gg' : 'gb') : (go ? 'bg' : 'bb');
    return { k, title: t(`q.${k}.t`), text: t(`q.${k}`) };
  }
  function tendencies(R) {
    const out = [];
    if (R.speed < 35) out.push(t('tend.slow'));
    else if (R.speed > 80 && R.info < 60) out.push(t('tend.rush'));
    else if (R.speed > 75) out.push(t('tend.fast'));
    if (R.info >= 85) out.push(t('tend.infoGood'));
    else if (R.info < 50) out.push(t('tend.infoBad'));
    if (R.ai < 50) out.push(t('tend.aiBad'));
    else if (R.ai >= 80) out.push(t('tend.aiGood'));
    if (R.calibLabel === 'over') out.push(t('tend.over', { c: Math.round(R.avgConf * 100), s: Math.round(R.sr * 100) }));
    else if (R.calibLabel === 'under') out.push(t('tend.under', { c: Math.round(R.avgConf * 100), s: Math.round(R.sr * 100) }));
    else if (R.calibLabel === 'ok') out.push(t('tend.cal'));
    if (R.risk > 65) out.push(t('tend.bold'));
    else if (R.risk < 30) out.push(t('tend.careful'));
    if (R.timeouts) out.push(t('tend.timeouts', { n: R.timeouts }));
    return out;
  }
  function radarSvg(series) {
    const keys = ['proc', 'speed', 'info', 'ai', 'calib'];
    const axes = keys.map(k => t('axis.' + k));
    const W = 540, Hh = 300, cx = 270, cy = 155, R = 100;
    const pt = (i, v) => { const a = -Math.PI / 2 + i * 2 * Math.PI / 5; return [cx + Math.cos(a) * R * v / 100, cy + Math.sin(a) * R * v / 100]; };
    let s = `<svg class="radar" viewBox="0 0 ${W} ${Hh}" role="img" aria-label="${t('axis.aria')}">`;
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
    const o = { v: 1, s: run.sc, n: store.name || t('anon'), c: run.c, k: run.k, p: run.proc, o: run.out, e: run.end, t: run.tier };
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
    try { await navigator.clipboard.writeText(text); toast(t('copy.ok')); S.sfx.select(); }
    catch (e) {
      if (fallbackEl) { const r = document.createRange(); r.selectNodeContents(fallbackEl); const sel = getSelection(); sel.removeAllRanges(); sel.addRange(r); }
      toast(t('copy.ng'));
    }
  }

  /* ── シェア ── */
  const SHARE_URL = 'https://techgym.jp/column/claude-code-game-shireito/';
  function shareBar(text) {
    const full = `${text}\n${t('share.tags')}`;
    const enc = encodeURIComponent;
    const textEl = h('div', { class: 'codebox share-text' }, `${full}\n${SHARE_URL}`);
    const link = (label, href) => h('a', { class: 'btn ghost small', href, target: '_blank', rel: 'noopener', onclick: () => S.sfx.select() }, label);
    const nativeShare = plugin('Share');
    if (nativeShare) {
      // アプリでは Android の共有メニューを出す
      return h('div', { class: 'panel share' },
        h('div', { class: 'eyebrow' }, t('share.h')),
        textEl,
        h('div', { class: 'row' },
          h('button', { class: 'btn small', type: 'button', onclick: async () => {
            S.sfx.select();
            try { await nativeShare.share({ title: t('share.app'), text: full, url: SHARE_URL, dialogTitle: t('share.dialog') }); } catch (e) { /* キャンセル */ }
          } }, t('share.native')),
          h('button', { class: 'btn ghost small', type: 'button', onclick: () => copyText(`${full}\n${SHARE_URL}`, textEl) }, t('share.copy'))));
    }
    return h('div', { class: 'panel share' },
      h('div', { class: 'eyebrow' }, t('share.h')),
      textEl,
      h('div', { class: 'row' },
        link(t('share.x'), `https://twitter.com/intent/tweet?text=${enc(full)}&url=${enc(SHARE_URL)}`),
        link(t('share.line'), `https://line.me/R/share?text=${enc(full + '\n' + SHARE_URL)}`),
        link('Facebook', `https://www.facebook.com/sharer/sharer.php?u=${enc(SHARE_URL)}`),
        h('button', { class: 'btn small', type: 'button', onclick: () => copyText(`${full}\n${SHARE_URL}`, textEl) }, t('share.copy'))));
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
        scoreTile(t('rev.proc'), R.proc, t('rev.proc.s')),
        scoreTile(t('rev.out'), R.out, t('rev.out.s', { end: G.end.title })),
        scoreTile(t('rev.calib'), R.calib, t('calib.' + R.calibLabel)),
        scoreTile(t('rev.hist'), `${R.hist}/${sc.turns.length}`, t('rev.hist.s'))),
      h('div', { class: 'review-grid' },
        h('div', { class: 'panel' },
          h('h3', null, t('rev.quad')),
          quadEl(R.proc, R.out, qd),
          h('p', null, h('b', { style: 'color:var(--amber)' }, qd.title), EN ? '. ' : '。', qd.text)),
        h('div', { class: 'panel' },
          h('h3', null, t('rev.radar')),
          h('div', { html: radarSvg([
            { v: { proc: R.proc, speed: R.speed, info: R.info, ai: R.ai, calib: R.calib }, fill: 'rgba(240,170,50,.18)', stroke: 'var(--amber)' },
            ...(avgRun ? [{ v: avgRun, fill: 'none', stroke: 'var(--cool)', dash: true }] : [])]) }),
          h('div', { class: 'legend' }, h('span', null, h('i', { style: 'background:var(--amber)' }), t('rev.now')), avgRun ? h('span', null, h('i', { style: 'background:var(--cool)' }), t('rev.avg')) : null)),
        h('div', { class: 'panel' },
          h('h3', null, t('rev.tend')),
          h('ul', { class: 'tendencies' }, tendencies(R).map(x => h('li', null, x)))),
        h('div', { class: 'panel' },
          h('h3', null, t('rev.lean')),
          spectrum(t('rev.risk'), t('rev.risk.l'), t('rev.risk.r'), R.risk),
          spectrum(t('rev.prio'), t('rev.prio.l'), t('rev.prio.r'), R.hm),
          h('p', { class: 'note' }, t('rev.lean.note')))));

    // 局面ごと
    panels.turns = h('div', { class: 'tcards' }, G.log.map((l, k) => {
      const tr = sc.turns[k], o = tr.opt[l.i];
      const hi = tr.opt.findIndex(x => x.hist);
      const bad = tr.rep.find(r => r.bad);
      return h('article', { class: 'panel tcard' },
        h('div', { class: 'tcard-head' },
          h('h3', null, `${k + 1}. ${tr.title}`),
          h('span', { class: 'row', style: 'gap:6px' },
            l.timeout ? h('span', { class: 'chip ng' }, t('rev.timeout')) : h('span', { class: 'chip ' + (l.success ? 'ok' : 'ng') }, l.success ? t('rev.ok') : t('rev.ng')),
            l.inv ? h('span', { class: 'chip' }, t('rev.inv')) : null)),
        h('div', { class: 'compare2' },
          h('div', null,
            h('span', { class: 'who' }, t('rev.mine')),
            h('span', { class: 'what' }, l.timeout ? t('rev.mine.timeout', { x: `${LET[l.i]}: ${o.l}` }) : `${LET[l.i]}: ${o.l}`),
            h('span', { class: 'muted fs-s' }, t('rev.quality'), qbar(l.q), l.timeout ? '' : t('rev.conf', { c: Math.round(l.conf * 100) })),
            l.reason ? h('span', { class: 'fs-s' }, t('rev.reason', { r: l.reason })) : null),
          h('div', null,
            h('span', { class: 'who' }, t('rev.histpick')),
            h('span', { class: 'what' }, `${LET[hi]}: ${tr.opt[hi].l}`),
            h('span', { class: 'muted fs-s' }, t('rev.quality'), qbar(tr.opt[hi].q)))),
        h('p', null, tr.hist),
        h('div', { class: 'reveal' },
          bad ? h('div', { class: 'item' }, h('b', null, t('rev.bad')), h('span', null, t('rev.bad.t', { f: bad.f, why: bad.why }))) : null,
          tr.flaw ? h('div', { class: 'item' }, h('b', null, t('rev.flaw', { name: ADV[tr.flaw].name })), h('span', null, t('rev.flaw.t', { x: LET[tr.adv[tr.flaw][0]], c: tr.adv[tr.flaw][2] }) + tr.flawWhy, l.i === tr.adv[tr.flaw][0] && !l.timeout ? h('b', { style: 'color:var(--signal);display:block' }, t('rev.followed')) : null)) : h('div', { class: 'item' }, h('b', null, t('rev.noflaw.h')), h('span', null, t('rev.noflaw'))),
          h('div', { class: 'item' }, h('b', null, t('rev.lesson')), h('span', { class: 'lesson' }, tr.lesson))));
    }));

    // もしも年表
    panels.tl = h('div', null,
      h('p', { class: 'muted', style: 'margin-bottom:12px' }, t('tl.note')),
      h('div', { class: 'timeline' },
        h('div', { class: 'tl-head' }, h('span', { class: 'when' }, t('tl.when')), h('span', null, t('tl.hist')), h('span', null, t('tl.mine'))),
        G.log.map((l, k) => {
          const tr = sc.turns[k], o = tr.opt[l.i];
          const same = !!o.hist && !l.timeout;
          return h('div', { class: 'tl-row' },
            h('span', { class: 'when' }, dayOf(tr.clock)),
            h('span', null, tr.histTl),
            h('span', { class: 'mine ' + (same ? 'same' : 'diverge') }, same ? t('tl.same') : (l.timeout ? t('tl.timeout') : '') + (o.tl || o.l)));
        }),
        h('div', { class: 'tl-row' },
          h('span', { class: 'when' }, t('tl.end')),
          h('span', null, sc.epilogue),
          h('span', { class: 'mine diverge' }, `${q(G.end.title)} ${G.end.text}`))));

    // 共有
    const code = encodeRun(G.run);
    const codeEl = h('div', { class: 'codebox', id: 'sharecode' }, code);
    const summary = t('cmp.summary', { title: sc.title, p: R.proc, o: R.out, end: G.end.title });
    const sumEl = h('div', { class: 'codebox' }, summary);
    panels.share = h('div', { class: 'stack', style: 'max-width:720px' },
      h('p', null, t('cmp.intro')),
      codeEl,
      h('div', { class: 'row' },
        h('button', { class: 'btn', type: 'button', onclick: () => copyText(code, codeEl) }, t('cmp.copy')),
        h('button', { class: 'btn ghost', type: 'button', onclick: () => { S.sfx.click(); goCompare(); } }, t('cmp.paste'))),
      h('div', { class: 'eyebrow', style: 'margin-top:12px' }, t('cmp.short')),
      sumEl,
      h('button', { class: 'btn ghost small', type: 'button', style: 'justify-self:start', onclick: () => copyText(summary, sumEl) }, t('share.copy')));

    const tabs = ['sum', 'turns', 'tl', 'share'].map(k => [k, t('tab.' + k)]);
    const tabBar = h('div', { class: 'tabs', role: 'tablist' }, tabs.map(([k, l], i) =>
      h('button', { class: 'tab', type: 'button', role: 'tab', 'aria-selected': String(i === 0), id: 'tab-' + k, onclick: () => selTab(k) }, l)));
    const body = h('div', { id: 'review-body' });
    function selTab(k) {
      $$('#review .tab').forEach(b => b.setAttribute('aria-selected', String(b.id === 'tab-' + k)));
      body.innerHTML = ''; body.append(panels[k]);
      S.sfx.page();
    }
    root.append(
      h('div', { class: 'hub-head' },
        h('div', null, h('div', { class: 'eyebrow' }, t('rev.eyebrow', { title: sc.title })), h('h2', { style: 'font-family:var(--f-display);font-size:clamp(26px,4vw,36px)' }, t('rev.h2'))),
        h('div', { class: 'row' },
          h('button', { class: 'btn ghost small', type: 'button', onclick: () => { S.sfx.click(); withAd(() => startScenario(sc.id)); } }, t('end.retry')),
          h('button', { class: 'btn small', type: 'button', onclick: () => { S.sfx.click(); toHub(); } }, t('nav.hub')))),
      tabBar, body);
    body.append(panels.sum);
    bindSfx(root);
    show('s-review');
  }
  function scoreTile(label, n, sub) {
    return h('div', { class: 'panel score' }, h('span', { class: 'l' }, label), h('span', { class: 'n' }, String(n)), h('span', { class: 's muted' }, sub));
  }
  function qbar(qv) { return h('span', { class: 'qbar', 'aria-label': t('qbar', { q: qv }) }, [1, 2, 3].map(i => h('i', { class: i <= qv ? 'on' : '' }))); }
  function quadEl(proc, out, qd) {
    const cell = k => h('div', { class: 'cell' + (qd.k === k ? ' on' : '') }, h('b', null, t('q.cell.' + k)), t('q.s.' + k));
    const el = h('div', { class: 'quad' },
      h('span', { class: 'ax y', style: 'grid-row:1 / 3' }, t('q.ax.y')),
      cell('bg'), cell('gg'), cell('bb'), cell('gb'),
      h('span', null),
      h('span', { class: 'ax', style: 'grid-column:2 / 4' }, t('q.ax.x')));
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
      h('div', null, h('div', { class: 'eyebrow' }, t('prof.eyebrow')), h('h2', { style: 'font-family:var(--f-display);font-size:clamp(26px,4vw,36px)' }, t('prof.h2'))),
      h('button', { class: 'btn small', type: 'button', onclick: () => { S.sfx.click(); toHub(); } }, t('nav.hub'))));
    if (!runs.length) {
      root.append(h('div', { class: 'panel empty' },
        h('h3', { style: 'font-family:var(--f-display)' }, t('prof.empty.h')),
        h('p', { class: 'muted' }, t('prof.empty')),
        h('button', { class: 'btn', type: 'button', onclick: () => { S.sfx.click(); toHub(); } }, t('prof.choose'))));
      bindSfx(root); show('s-profile'); return;
    }
    const A = Object.fromEntries(['proc', 'out', 'speed', 'info', 'ai', 'calib', 'risk', 'hm'].map(k => [k, Math.round(avg(runs.map(r => r[k])))]));
    const recent = runs.slice(-5);
    const R5 = Object.fromEntries(['proc', 'speed', 'info', 'ai', 'calib'].map(k => [k, Math.round(avg(recent.map(r => r[k])))]));
    const calibLabel = A.calib >= 75 ? 'ok' : '';
    root.append(
      h('div', { class: 'scores' },
        scoreTile(t('prof.runs'), runs.length, t('prof.runs.s', { n: streakNow() })),
        scoreTile(t('prof.proc'), A.proc, t('prof.proc.s')),
        scoreTile(t('prof.out'), A.out, t('prof.out.s')),
        scoreTile(t('rev.calib'), A.calib, t('prof.calib.s'))),
      h('div', { class: 'review-grid' },
        h('div', { class: 'panel' },
          h('h3', null, t('rev.radar')),
          h('div', { html: radarSvg([
            { v: A, fill: 'rgba(240,170,50,.18)', stroke: 'var(--amber)' },
            ...(runs.length >= 3 ? [{ v: R5, fill: 'none', stroke: 'var(--cool)', dash: true }] : [])]) }),
          h('div', { class: 'legend' }, h('span', null, h('i', { style: 'background:var(--amber)' }), t('prof.all')), runs.length >= 3 ? h('span', null, h('i', { style: 'background:var(--cool)' }), t('prof.recent')) : null)),
        h('div', { class: 'panel' },
          h('h3', null, t('rev.tend')),
          h('ul', { class: 'tendencies' }, tendencies({ ...A, calibLabel, avgConf: 0, sr: 0, timeouts: 0 }).filter(Boolean).map(x => h('li', null, x))),
          spectrum(t('rev.risk'), t('rev.risk.l'), t('rev.risk.r'), A.risk),
          spectrum(t('rev.prio'), t('rev.prio.l'), t('rev.prio.r'), A.hm)),
        h('div', { class: 'panel', style: 'grid-column:1 / -1' },
          h('h3', null, t('prof.log')),
          h('div', { class: 'table-wrap' }, h('table', { class: 'cmp' },
            h('thead', null, h('tr', null, t('prof.cols').map(x => h('th', null, x)))),
            h('tbody', null, runs.slice().reverse().slice(0, 20).map(r => {
              const s = SC.find(x => x.id === r.sc);
              const d = new Date(r.at);
              return h('tr', null,
                h('td', { class: 'mono' }, `${d.getMonth() + 1}/${d.getDate()} ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`),
                h('td', null, s ? s.title : r.sc), h('td', null, s && r.tier != null && s.endings[r.tier] ? s.endings[r.tier].title : (r.end || '')),
                ...['proc', 'out', 'speed', 'info', 'ai', 'calib'].map(k => h('td', { class: 'mono' }, String(r[k]))));
            })))))));
    bindSfx(root);
    show('s-profile');
  }

  /* ════════════════ 友人と比べる ════════════════ */
  function goCompare() {
    S.play('title');
    const root = $('#compare'); root.innerHTML = '';
    const ta = h('textarea', { class: 'codein', id: 'codein', placeholder: t('cmpg.ph') });
    const result = h('div', { id: 'cmp-result', class: 'stack', style: 'margin-top:18px' });
    root.append(
      h('div', { class: 'hub-head' },
        h('div', null, h('div', { class: 'eyebrow' }, t('cmpg.eyebrow')), h('h2', { style: 'font-family:var(--f-display);font-size:clamp(26px,4vw,36px)' }, t('cmpg.h2'))),
        h('button', { class: 'btn small', type: 'button', onclick: () => { S.sfx.click(); toHub(); } }, t('nav.hub'))),
      h('div', { class: 'panel', style: 'padding:18px;display:grid;gap:12px;max-width:760px' },
        h('label', { for: 'codein' }, t('cmpg.label')),
        ta,
        h('div', { class: 'row' }, h('button', { class: 'btn', type: 'button', onclick: () => runCompare(ta.value, result) }, t('cmpg.go'))),
        h('p', { class: 'note' }, t('cmpg.note'))),
      result);
    bindSfx(root);
    show('s-compare');
  }
  function runCompare(code, out) {
    out.innerHTML = '';
    const f = decodeRun(code);
    if (!f) { S.sfx.timeout(); out.append(h('div', { class: 'panel', style: 'padding:16px;color:var(--signal)' }, t('cmpg.bad'))); return; }
    S.sfx.reveal();
    const sc = SC.find(s => s.id === f.s);
    const mine = store.runs.filter(r => r.sc === f.s).slice(-1)[0];
    const lab = (tr, i) => i < 0 ? t('cmpg.timeout') : `${LET[i]}: ${tr.opt[i].l}`;
    out.append(
      h('div', { class: 'scores' },
        scoreTile(t('cmpg.fproc', { n: f.n }), f.p, t('cmpg.fs', { o: f.o, e: f.t != null && sc.endings[f.t] ? sc.endings[f.t].title : (f.e || '') })),
        mine ? scoreTile(t('cmpg.mine'), mine.proc, t('cmpg.fs', { o: mine.out, e: mine.tier != null && sc.endings[mine.tier] ? sc.endings[mine.tier].title : mine.end })) : scoreTile(t('cmpg.you'), '—', t('cmpg.notyet')),
        scoreTile(t('cmpg.mission'), sc.title, sc.year),
        scoreTile(t('cmpg.match'), mine ? `${f.c.filter((c, i) => c >= 0 && c === mine.c[i]).length}/${sc.turns.length}` : '—', t('cmpg.match.s'))),
      h('div', { class: 'table-wrap panel' }, h('table', { class: 'cmp' },
        h('thead', null, h('tr', null, h('th', null, t('cmpg.col.turn')), h('th', null, f.n), h('th', null, t('cmpg.you')), h('th', null, t('cmpg.col.hist')))),
        h('tbody', null, sc.turns.map((tr, i) => {
          const fi = f.c[i], mi = mine ? mine.c[i] : null;
          const hi = tr.opt.findIndex(o => o.hist);
          return h('tr', null,
            h('td', null, h('b', null, tr.title), h('br'), h('span', { class: 'muted mono fs-xs' }, tr.clock)),
            h('td', { class: mine && fi === mi ? 'same' : '' }, lab(tr, fi), f.k && f.k[i] ? h('div', { class: 'muted mono fs-xs' }, t('cmpg.conf', { c: Math.round(f.k[i] * 100) })) : null),
            h('td', { class: mine && fi === mi ? 'same' : '' }, mine ? lab(tr, mi) : '—', mine && mine.k[i] ? h('div', { class: 'muted mono fs-xs' }, t('cmpg.conf', { c: Math.round(mine.k[i] * 100) })) : null),
            h('td', null, lab(tr, hi)));
        })))),
      mine ? null : h('button', { class: 'btn', type: 'button', style: 'justify-self:start', onclick: () => { S.sfx.select(); withAd(() => startScenario(sc.id)); } }, t('cmpg.play', { title: sc.title })));
    bindSfx(out);
  }

  /* ════════════════ 今日の1判断 ════════════════ */
  let D = null;
  function goDaily(index, practice) {
    const idx = index != null ? index : dailyIndex();
    const dq = DAILY[idx];
    const key = todayKey();
    const done = store.daily.results[key];
    const root = $('#daily'); root.innerHTML = '';
    if (!practice && done && index == null) { renderDailyResult(DAILY.findIndex(x => x.id === done.id), done, false); return; }
    D = { idx, q: dq, practice: !!practice, sel: null, decided: false, running: true };
    S.play('tension', 'daily');
    S.setIntensity(0.2);
    S.sfx.radio();
    const ring = timerRing('dring');
    const conf = h('input', { type: 'range', id: 'dconf', min: '50', max: '100', step: '5', value: '70' });
    const confVal = h('span', { class: 'conf-val' }, '70%');
    conf.addEventListener('input', () => { confVal.textContent = conf.value + '%'; S.sfx.slide(conf.value - 40); });
    const go = h('button', { class: 'btn', type: 'button', id: 'dgo', disabled: true, onclick: () => dailyDecide(false) }, t('turn.go'));
    const sitEl = h('div', { class: 'panel sit', onclick: () => { skipTyping = true; } });
    root.append(h('div', { class: 'daily-wrap' },
      h('div', { class: 'row', style: 'justify-content:space-between;align-items:start' },
        h('div', null,
          h('div', { class: 'eyebrow' }, practice ? t('daily.practice') : t('daily.eyebrow', { d: key })),
          h('div', { class: 'clock' }, dq.year),
          h('h1', null, dq.title),
          h('p', { class: 'muted' }, t('daily.you', { role: dq.role, note: dq.roleNote }))),
        ring),
      sitEl,
      h('div', { class: 'panel decide', style: 'margin-top:0' },
        h('div', { class: 'opts' }, dq.opt.map((o, i) =>
          h('button', { class: 'opt', type: 'button', 'aria-pressed': 'false', 'data-i': String(i), onclick: () => dailyPick(i) },
            h('span', { class: 'letter' }, LET[i]),
            h('span', null, h('div', { class: 'ol' }, o.l), h('div', { class: 'od' }, o.d))))),
        h('div', { class: 'decide-row', style: 'grid-template-columns:minmax(0,1fr) auto' },
          h('div', { class: 'field' }, h('label', { for: 'dconf' }, t('daily.conf'), confVal), conf),
          go))));
    bindSfx(root);
    show('s-daily');
    ring.update(60, 60);
    skipTyping = false;
    (async () => {
      await typeInto(sitEl, dq.sit, 12);
      if (!D || D.q !== dq || D.decided) return;
      startTimer(60, tm => { ring.update(tm.left, tm.limit); S.setIntensity(tm.left <= 10 ? 1 : 0.25 + 0.6 * (1 - tm.left / tm.limit)); }, () => dailyDecide(true));
    })();
  }
  // 今日の問題は、その日に初めて開くときだけ全画面広告を出す。2回目以降(結果の振り返りなど)は広告なし
  function openToday() {
    const key = todayKey();
    if (store.daily.adSeen === key || store.daily.results[key]) { goDaily(); return; }
    store.daily.adSeen = key;
    save();
    withAd(goDaily, 5000);
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
    const dq = DAILY[idx];
    S.play('review');
    S.sfx.reveal();
    const hi = dq.opt.findIndex(o => o.hist);
    const best = Math.max(...dq.opt.map(o => o.q));
    const bi = dq.opt.findIndex(o => o.q === best);
    const root = $('#daily'); root.innerHTML = '';
    const verdict = res.i < 0 ? t('daily.v.timeout') : res.q === 3 ? t('daily.v.good') : res.q >= 1 ? t('daily.v.mid') : t('daily.v.bad');
    root.append(h('div', { class: 'daily-wrap' },
      h('div', { class: 'eyebrow' }, practice ? t('daily.res.practice') : t('daily.eyebrow', { d: todayKey() })),
      h('h1', null, dq.title),
      h('div', { class: 'row' },
        h('span', { class: 'chip ' + (res.q === 3 ? 'ok' : 'ng') }, verdict),
        practice ? null : h('span', { class: 'chip amber' }, t('daily.streak', { n: streakNow() }))),
      h('div', { class: 'compare2' },
        h('div', null, h('span', { class: 'who' }, t('rev.mine')), h('span', { class: 'what' }, res.i < 0 ? t('daily.none') : `${LET[res.i]}: ${dq.opt[res.i].l}`), h('span', { class: 'muted fs-s' }, t('rev.quality'), qbar(res.q), res.conf ? t('rev.conf', { c: Math.round(res.conf * 100) }) : '')),
        h('div', null, h('span', { class: 'who' }, t('rev.histpick')), h('span', { class: 'what' }, `${LET[hi]}: ${dq.opt[hi].l}`), h('span', { class: 'muted fs-s' }, t('rev.quality'), qbar(dq.opt[hi].q)))),
      hi !== bi ? h('div', { class: 'panel', style: 'padding:14px;border-color:var(--signal)' }, h('b', { style: 'color:var(--signal)' }, t('daily.notbest')), t('daily.best', { x: `${LET[bi]}: ${dq.opt[bi].l}` })) : null,
      h('div', { class: 'panel', style: 'padding:18px;display:grid;gap:10px' },
        h('div', { class: 'eyebrow' }, t('end.history')),
        h('p', null, dq.hist),
        h('p', { class: 'lesson' }, dq.lesson)),
      shareBar(t('share.daily', { title: dq.title, year: dq.year, choice: res.i < 0 ? t('daily.v.timeout') : dq.opt[res.i].l, verdict, streak: practice ? '' : t('share.streak', { n: streakNow() }) })),
      h('div', { class: 'row' },
        h('button', { class: 'btn', type: 'button', onclick: () => { S.sfx.click(); toHub(); } }, t('nav.hub'))),
      h('div', { class: 'eyebrow', style: 'margin-top:12px' }, t('daily.archive')),
      h('div', { class: 'archive' }, DAILY.map((d, i) => h('button', { type: 'button', onclick: () => { S.sfx.select(); withAd(() => goDaily(i, true), 5000); } }, h('span', { class: 'yr' }, d.year), d.title)))));
    bindSfx(root);
    show('s-daily');
  }

  /* ════════════════ 遊び方 ════════════════ */
  function goHowto() {
    S.play('title');
    const root = $('#howto'); root.innerHTML = '';
    root.append(h('div', { class: 'howto' },
      h('div', null, h('div', { class: 'eyebrow' }, t('how.eyebrow')), h('h1', null, t('how.h1'))),
      h('p', null, t('how.lede')),
      h('div', { class: 'principles' }, t('how.p').map(([a, b]) => h('div', { class: 'panel' }, h('b', null, a), h('span', { class: 'fs-m' }, b)))),
      h('div', null, h('h2', null, t('how.flow.h')), h('ol', null, t('how.flow').map(x => h('li', null, x)))),
      h('div', null, h('h2', null, t('how.axes.h')), h('ul', null, t('how.axes').map(([a, b]) => h('li', null, h('b', null, a), ': ' + b)))),
      h('div', null, h('h2', null, t('how.keep.h')), h('ul', null, t('how.keep').map(([a, b]) => h('li', null, h('b', null, a), ': ' + b)))),
      h('p', { class: 'note' }, t('how.note')),
      h('div', { class: 'row' }, h('button', { class: 'btn', type: 'button', onclick: () => { S.sfx.click(); toHub(); } }, t('nav.hub')))));
    bindSfx(root);
    show('s-howto');
  }

  /* ── Android アプリ ── */
  if (window.APP_VERSION && window.APP_VERSION !== 'dev') $('#build-info').textContent = window.APP_VERSION;
  Ads.initDone.then(() => { if (Ads.privacyOptionsRequired) $('#ad-privacy').hidden = false; });
  $('#ad-privacy').addEventListener('click', () => Ads.showPrivacyOptions());
  if (plugin('App')) {
    // 戻るボタン: タイトルと作戦室ではアプリを終了。作戦中は2回押しで中断。それ以外は作戦室へ
    plugin('App').addListener('backButton', () => {
      if (Ads.showing) return;
      if (screen === 's-title' || screen === 's-hub') { plugin('App').exitApp(); return; }
      if (document.querySelector('.overlay')) return;
      leaveTo(toHub);
    });
  }

  // タイトル画面のボタンにも効果音を
  bindSfx($('#s-title'));
})();
