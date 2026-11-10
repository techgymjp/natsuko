// Android アプリに同梱する Web ファイルを www/ にコピーする
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const out = path.join(root, 'www');
fs.rmSync(out, { recursive: true, force: true });
for (const item of ['index.html', 'css', 'js', 'icon.svg']) {
  const src = path.join(root, item);
  if (fs.existsSync(src)) fs.cpSync(src, path.join(out, item), { recursive: true });
}
// アプリ(Android / iOS)に同梱するときは、Web 版だけの部分(Google Play へのリンクなど)を取り除く。
// iOS の審査では、アプリの中で端末によって隠している機能は「審査中に隠した機能」と見なされるため(Guideline 5.6)、
// アプリには最初から入れない。目印は HTML が <!-- web-only --> … <!-- /web-only -->、JS が // web-only:start … // web-only:end
if (process.env.APP_BUILD === '1') {
  const strip = (rel, re) => {
    const file = path.join(out, rel);
    const before = fs.readFileSync(file, 'utf8');
    const after = before.replace(re, '');
    if (after === before) {
      console.error(`${rel} に web-only の目印が見つかりません`);
      process.exit(1);
    }
    fs.writeFileSync(file, after);
  };
  strip('index.html', /[ \t]*<!-- web-only[\s\S]*?<!-- \/web-only -->\n?/g);
  strip('js/game.js', /[ \t]*\/\/ web-only:start[\s\S]*?\/\/ web-only:end\n?/g);
  strip('js/i18n.js', /[ \t]*\/\/ web-only:start[\s\S]*?\/\/ web-only:end\n?/g);
  // 取り残しがあればビルドを止める(同梱するすべてのファイルを調べる)
  const walk = dir => fs.readdirSync(dir, { withFileTypes: true }).flatMap(e => (e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)]));
  for (const file of walk(out)) {
    if (!/\.(html|js|json)$/.test(file)) continue;
    const text = fs.readFileSync(file, 'utf8');
    if (/play\.google\.com|web-only/.test(text)) {
      console.error(`${path.relative(out, file)} に Web 版だけの部分が残っています`);
      process.exit(1);
    }
  }
}
// Google Play 用のビルドでは本番の広告を使う
const mode = process.env.ADMOB_MODE === 'production' ? 'production' : 'test';
fs.writeFileSync(path.join(out, 'js', 'ads-config.js'), `// ビルド時に生成\nwindow.AD_MODE = '${mode}';\n`);
// タイトル画面に出すバージョン（CI では VERSION_NAME / VERSION_CODE を使う）
const version = process.env.VERSION_CODE
  ? `v${process.env.VERSION_NAME || require('../package.json').version} (build ${process.env.VERSION_CODE})`
  : 'dev';
fs.writeFileSync(path.join(out, 'js', 'build-info.js'), `// ビルド時に生成\nwindow.APP_VERSION = '${version}';\n`);
console.log(`built web assets into www/ (${process.env.APP_BUILD === '1' ? 'app' : 'web'}, ads: ${mode}, version: ${version})`);
