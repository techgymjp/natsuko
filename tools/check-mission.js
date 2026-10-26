// 作戦データの形を検査する: node tools/check-mission.js <id> [<id> ...]
// js/missions/<id>.js(日本語)と js/en/<id>.js(英語)を読み、形と数値の決まりを確かめる
const fs = require('fs'), vm = require('vm'), path = require('path');
const root = path.join(__dirname, '..');
const ctx = { window: { SCENARIOS: [] } }; vm.createContext(ctx);
const load = f => vm.runInContext(fs.readFileSync(path.join(root, f), 'utf8'), ctx, { filename: f });
load('js/scenarios.js');
const ids = process.argv.slice(2);
let bad = 0;
const err = (id, m) => { bad++; console.log(`NG ${id}: ${m}`); };
for (const id of ids) {
  load(`js/missions/${id}.js`);
  load(`js/en/${id}.js`);
  const sc = ctx.window.SCENARIOS.find(s => s.id === id);
  const en = ctx.window.SCENARIOS_EN && ctx.window.SCENARIOS_EN[id];
  if (!sc) { err(id, 'window.SCENARIOS に push されていない'); continue; }
  if (!en) { err(id, 'window.SCENARIOS_EN[id] がない'); continue; }
  for (const k of ['title', 'sub', 'year', 'place', 'role', 'roleNote', 'epilogue']) if (typeof sc[k] !== 'string' || !sc[k]) err(id, `${k} がない`);
  if (!['cold', 'space', 'naval', 'ice', 'mine', 'air'].includes(sc.bgm)) err(id, 'bgm が不正');
  if (sc.intro_sfx !== sc.bgm) err(id, 'intro_sfx は bgm と同じ値にする');
  if (!(sc.time >= 25 && sc.time <= 120)) err(id, 'time は 25〜120');
  if (![1, 2, 3].includes(sc.diff)) err(id, 'diff は 1〜3');
  if (!Array.isArray(sc.meters) || sc.meters.length !== 3) err(id, 'meters は3つ');
  const keys = sc.meters.map(m => m.k);
  if (sc.turns.length !== 5) err(id, '局面は5つ');
  if (sc.endings.length !== 3 || sc.endings[2].min !== 0) err(id, 'endings は3つ、最後の min は 0');
  sc.turns.forEach((t, ti) => {
    const w = `turn${ti + 1}`;
    if (t.rep.length !== 3) err(id, `${w}: rep は3つ`);
    if (t.rep.filter(r => r.bad).length !== 1) err(id, `${w}: bad:1 の rep はちょうど1つ`);
    t.rep.forEach(r => { if (r.bad && !r.why) err(id, `${w}: bad の rep に why がない`); });
    if (!t.inv || !(t.inv.c > 0) || !t.inv.t) err(id, `${w}: inv が不正`);
    if (t.opt.length !== 3) err(id, `${w}: opt は3つ`);
    if (t.opt.filter(o => o.hist).length !== 1) err(id, `${w}: hist:1 はちょうど1つ`);
    if (!t.opt.some(o => o.q === 3)) err(id, `${w}: q:3 の選択肢がない`);
    t.opt.forEach((o, oi) => {
      if (![0, 1, 2, 3].includes(o.q) || ![0, 1, 2].includes(o.r) || ![-2, -1, 0, 1, 2].includes(o.h)) err(id, `${w} opt${oi}: q/r/h が不正`);
      if (!(o.p > 0 && o.p < 1)) err(id, `${w} opt${oi}: p が不正`);
      for (const f of ['fx', 'fxF']) Object.keys(o[f] || {}).forEach(k => { if (!keys.includes(k)) err(id, `${w} opt${oi}: ${f} の ${k} は meters にない`); });
      if (!o.ok || !o.ng) err(id, `${w} opt${oi}: ok/ng がない`);
      if (!o.hist && !o.tl) err(id, `${w} opt${oi}: 史実でない選択肢に tl がない`);
    });
    for (const k of ['c', 'a', 'd']) {
      const a = t.adv[k];
      if (!Array.isArray(a) || a.length !== 3 || !(a[0] >= 0 && a[0] <= 2) || !a[1] || !(a[2] >= 50 && a[2] <= 99)) err(id, `${w}: adv.${k} が不正`);
    }
    if (t.flaw) {
      if (!t.adv[t.flaw]) err(id, `${w}: flaw が不正`);
      else if (t.opt[t.adv[t.flaw][0]].q === 3) err(id, `${w}: 欠陥のある参謀が q:3 の選択肢を推している`);
      if (!t.flawWhy) err(id, `${w}: flawWhy がない`);
    }
    (t.sitIf || []).forEach(c => { if (!keys.includes(c.m)) err(id, `${w}: sitIf の m が不正`); });
    for (const k of ['clock', 'title', 'sit', 'hist', 'lesson', 'histTl']) if (!t[k]) err(id, `${w}: ${k} がない`);
    // 英語の形
    const e = (en.turns || [])[ti];
    if (!e) { err(id, `${w}: 英語がない`); return; }
    if ((e.rep || []).length !== 3 || (e.opt || []).length !== 3) err(id, `${w}: 英語の rep/opt の数`);
    t.rep.forEach((r, ri) => { if (!!r.bad !== !!(e.rep[ri] && e.rep[ri].why)) err(id, `${w}: 英語の why の位置`); });
    t.opt.forEach((o, oi) => { if (!!o.tl !== !!(e.opt[oi] && e.opt[oi].tl)) err(id, `${w}: 英語の tl の位置`); });
    if (!e.adv || !e.adv.c || !e.adv.a || !e.adv.d || !e.inv) err(id, `${w}: 英語の adv/inv`);
    if ((t.sitIf || []).length !== ((e.sitIf || []).length)) err(id, `${w}: 英語の sitIf の数`);
  });
  if ((en.meters || []).length !== 3 || (en.intro || []).length !== sc.intro.length || (en.endings || []).length !== 3) err(id, '英語の meters/intro/endings の数');
  // 史実どおりに進めた場合(すべて成功・すべて失敗)の結末
  const sim = good => {
    const m = Object.fromEntries(sc.meters.map(x => [x.k, x.v]));
    sc.turns.forEach(t => { const o = t.opt.find(x => x.hist); Object.entries((good ? o.fx : (o.fxF || o.fx)) || {}).forEach(([k, v]) => { m[k] = Math.max(0, Math.min(100, m[k] + v)); }); });
    const out = Math.round(Object.values(m).reduce((a, b) => a + b, 0) / 3);
    return `${out}→「${(sc.endings.find(x => out >= x.min) || sc.endings[2]).title}」`;
  };
  console.log(`${id}: 史実の道 すべて成功 ${sim(true)} / すべて裏目 ${sim(false)}`);
}
console.log(bad ? `NG ${bad}件` : 'OK');
process.exit(bad ? 1 : 0);
