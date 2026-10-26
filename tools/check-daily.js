// 今日の1判断のデータを検査する: node tools/check-daily.js <batch> [<batch> ...]
// js/daily-more/<batch>.js(日本語)と js/en/daily-<batch>.js(英語)を読む
const fs = require('fs'), vm = require('vm'), path = require('path');
const root = path.join(__dirname, '..');
const ctx = { window: {} }; vm.createContext(ctx);
const load = f => vm.runInContext(fs.readFileSync(path.join(root, f), 'utf8'), ctx, { filename: f });
load('js/daily.js'); load('js/en/daily.js');
const base = new Set(ctx.window.DAILY.map(d => d.id));
let bad = 0;
const err = m => { bad++; console.log('NG ' + m); };
for (const b of process.argv.slice(2)) {
  const before = ctx.window.DAILY.length;
  load(`js/daily-more/${b}.js`); load(`js/en/daily-${b}.js`);
  const added = ctx.window.DAILY.slice(before);
  console.log(`${b}: ${added.length}問`);
  for (const d of added) {
    if (base.has(d.id)) err(`${d.id}: id が重複`); base.add(d.id);
    for (const k of ['id', 'year', 'title', 'role', 'roleNote', 'sit', 'hist', 'lesson']) if (!d[k]) err(`${d.id}: ${k} がない`);
    if (!Array.isArray(d.opt) || d.opt.length !== 3) err(`${d.id}: opt は3つ`);
    else {
      if (d.opt.filter(o => o.hist).length !== 1) err(`${d.id}: hist:1 はちょうど1つ`);
      if (!d.opt.some(o => o.q === 3)) err(`${d.id}: q:3 がない`);
      d.opt.forEach((o, i) => { if (!o.l || !o.d || ![0, 1, 2, 3].includes(o.q)) err(`${d.id} opt${i}: 不正`); });
    }
    const e = ctx.window.DAILY_EN[d.id];
    if (!e) { err(`${d.id}: 英語がない`); continue; }
    for (const k of ['year', 'title', 'role', 'roleNote', 'sit', 'hist', 'lesson']) if (!e[k]) err(`${d.id}: 英語の ${k} がない`);
    if (!Array.isArray(e.opt) || e.opt.length !== 3 || e.opt.some(o => !o.l || !o.d)) err(`${d.id}: 英語の opt`);
    const hi = d.opt.findIndex(o => o.hist), best = d.opt.findIndex(o => o.q === 3);
    console.log(`  ${d.id}: 史実=${'ABC'[hi]}(q${d.opt[hi] && d.opt[hi].q}) 最善=${'ABC'[best]}`);
  }
}
console.log(`合計 ${ctx.window.DAILY.length}問`);
console.log(bad ? `NG ${bad}件` : 'OK');
process.exit(bad ? 1 : 0);
