/* 司令塔 — 日本語 / 英語の切り替え
 * 言語は保存した選択、なければ端末の言語(日本語以外は英語)で決める。
 * 切り替えるとページを読み込み直す(作戦の途中では切り替えない)。
 */
window.I18N = (() => {
  'use strict';
  const KEY = 'shireito.lang';
  let lang = null;
  try { lang = localStorage.getItem(KEY); } catch (e) { /* 保存なし */ }
  if (lang !== 'ja' && lang !== 'en') lang = /^ja\b/i.test(navigator.language || '') ? 'ja' : 'en';
  document.documentElement.lang = lang;

  // [日本語, 英語]
  const D = {
    // 共通
    'brand.sub': ['COMMAND SEAT', '司令塔'],
    'nav.hub': ['作戦室', 'Ops room'],
    'nav.sound.on': ['音 ON', 'Sound on'],
    'nav.sound.off': ['音 OFF', 'Sound off'],
    'nav.confirm': ['本当に中断する?', 'Really quit?'],
    'lang.switch': ['English', '日本語'],
    'timer.left': ['残り', 'LEFT'],
    'timer.aria': ['残り時間', 'Time left'],
    'copy.ok': ['コピーしました', 'Copied'],
    'copy.ng': ['コピーできませんでした。選択された文字を手動でコピーしてください', 'Could not copy. The text is selected, so copy it by hand.'],
    'qbar': ['3段階中{q}', '{q} of 3'],

    // タイトル(静的な HTML)
    'title.eyebrow': ['判断力を鍛える歴史シミュレーション', 'A history simulation that trains your judgment'],
    'title.h1': ['司令塔', 'Command Seat'],
    'title.lede': ['キューバ危機、アポロ13号、ミッドウェー、南極、地下700m、ハドソン川。歴史に残る危機の中心で、あなたが決める。情報は不完全で、時間はなく、AI参謀は時々もっともらしく間違える。',
      'The Cuban Missile Crisis, Apollo 13, Midway, Antarctica, 700 m underground, the Hudson River. You make the call at the center of history\'s crises. The information is incomplete, time is short, and your AI advisors are sometimes convincingly wrong.'],
    'title.ticker': ['収録された作戦', 'Included missions'],
    'title.callsign': ['あなたのコールサイン(任意)', 'Your call sign (optional)'],
    'title.callsign.ph': ['例: ナツコ', 'e.g. Maverick'],
    'title.enter': ['作戦室に入る', 'Enter the ops room'],
    'title.note': ['音が鳴ります。BGMと効果音はすべてその場で合成しています。', 'This game has sound. All music and effects are synthesized live.'],
    'title.privacy': ['プライバシーポリシー', 'Privacy policy'],
    'title.privacy.url': ['https://techgym.jp/privacy-policy/', 'https://techgym.jp/privacy-policy-en/'],
    'title.adprivacy': ['広告の設定', 'Ad settings'],

    // 作戦室
    'hub.welcome': ['ようこそ、{name} 司令', 'Welcome, Commander {name}'],
    'hub.welcome0': ['ようこそ、司令', 'Welcome, Commander'],
    'hub.h2': ['作戦を選んでください', 'Choose a mission'],
    'hub.howto': ['遊び方', 'How to play'],
    'hub.profile': ['判断プロフィール', 'Judgment profile'],
    'hub.compare': ['友人と比べる', 'Compare with a friend'],
    'hub.you': ['あなた: {role}', 'You: {role}'],
    'hub.diff': ['難度 ', 'Difficulty '],
    'hub.time': ['1判断 {s}秒', '{s} s per decision'],
    'hub.turns': ['{n}局面', '{n} decisions'],
    'hub.best': ['最高 判断{p}・結果{o}', 'Best: judgment {p} / outcome {o}'],
    'hub.daily': ['今日の1判断', 'Today\'s decision'],
    'hub.streak': ['日連続', 'day streak'],
    'hub.daily.done': ['結果と過去問', 'Result and archive'],
    'hub.daily.go': ['3分で挑む', 'Take 3 minutes'],
    'hub.advisors': ['AI参謀', 'AI advisors'],
    'hub.advisors.note': ['3人のうち誰かが、もっともらしい理屈で間違えることがある。誰を、どこまで信じるかもあなたの判断だ。', 'Any one of the three may be wrong for reasons that sound right. Whom to trust, and how far, is your call too.'],
    'hub.volume': ['音量', 'Volume'],
    'vol.master': ['全体', 'Master'],
    'vol.bgm': ['BGM', 'Music'],
    'vol.sfx': ['効果音', 'Effects'],

    // ブリーフィング
    'brief.start': ['作戦を開始する', 'Begin the mission'],
    'brief.skip': ['文字送りを飛ばす', 'Skip the typing'],
    'brief.file': ['任務ファイル', 'Mission file'],
    'brief.you': ['あなた', 'You'],
    'brief.turns': ['局面', 'Decisions'],
    'brief.turnsN': ['{n}つ', '{n}'],
    'brief.time': ['持ち時間', 'Time'],
    'brief.timeN': ['1判断あたり{s}秒', '{s} seconds per decision'],
    'brief.meters': ['見守る指標', 'What you are protecting'],
    'brief.note1': ['入電の中には誤報が混じる。「裏を取る」と真偽を確かめられるが、持ち時間を使う。時間切れになると、決められなかったこと自体が決断になる。', 'Some incoming reports are wrong. "Verify" checks them, but costs time. If the clock runs out, failing to decide becomes your decision.'],
    'brief.note2': ['キー操作: 1・2・3で選択 / Iで裏を取る / Enterで決裁', 'Keys: 1, 2, 3 to choose / I to verify / Enter to decide'],

    // 局面
    'turn.inv': ['裏を取る(-{s}秒)', 'Verify (-{s} s)'],
    'turn.inv.done': ['裏取り済み', 'Verified'],
    'turn.inv.result': ['裏取りの結果: ', 'Verification: '],
    'turn.flag': ['要注意', 'DOUBTFUL'],
    'turn.ad': ['広告を見て+30秒', 'Watch an ad for +30 s'],
    'turn.ad.done': ['+30秒 延長済み', '+30 s added'],
    'turn.ad.toast': ['持ち時間が30秒延びました', '30 seconds added to the clock'],
    'turn.ad.ng': ['いまは広告を読み込めませんでした', 'Could not load an ad right now'],
    'turn.reason.ph': ['判断の理由をひとこと(任意)', 'Your reason in a few words (optional)'],
    'turn.go': ['決裁する', 'Decide'],
    'turn.opts': ['選択肢', 'Options'],
    'turn.phase': ['{title} — 局面 {i} / {n}', '{title} — Decision {i} / {n}'],
    'turn.reports': ['入電', 'Incoming'],
    'turn.advice': ['AI参謀の進言', 'AI advisors'],
    'turn.decide': ['決裁', 'Decision'],
    'turn.keys': ['1・2・3で選択 / Enterで決裁', '1, 2, 3 to choose / Enter to decide'],
    'turn.conf': ['この判断で狙いどおりになる確信度 ', 'Confidence this will work '],
    'turn.reason': ['理由', 'Reason'],
    'turn.rec': ['推奨 ', 'Picks '],
    'turn.advconf': ['自信度', 'Confidence'],

    // 決裁の結果
    'v.end': ['結末を見る', 'See the outcome'],
    'v.next': ['次の局面へ', 'Next decision'],
    'v.aria': ['決裁の結果', 'Result of your decision'],
    'v.stamp.timeout': ['時間切れ', 'TIME UP'],
    'v.stamp': ['決裁', 'DECIDED'],
    'v.chip.timeout': ['決められないまま時が過ぎた', 'Time ran out before you decided'],
    'v.chip.ok': ['狙いどおりに進んだ', 'It worked'],
    'v.chip.ng': ['裏目に出た', 'It backfired'],
    'v.h.timeout': ['時計の針は待ってくれなかった。', 'The clock did not wait.'],
    'v.h.ok': ['状況は動いた', 'Events moved'],
    'v.h.ng': ['思わぬ方向へ', 'Not as planned'],
    'v.timeout': ['判断が下されないまま、事態は「{l}」と同じ方向に流れた。', 'With no decision made, events drifted the same way as "{l}". '],
    'v.note': ['史実でどう判断されたかは、作戦の後の振り返りで明かされる。', 'What really happened is revealed in the review after the mission.'],

    // 結末
    'end.eyebrow': ['{title} — 作戦終了', '{title} — Mission over'],
    'end.history': ['史実では', 'What really happened'],
    'end.review': ['判断を振り返る', 'Review your decisions'],
    'end.retry': ['もう一度挑む', 'Try again'],
    'share.end': ['司令塔「{title}」で{role}として決断した。結末は「{end}」。判断の質 {p} / 結果 {o}', 'I played "{title}" in Command Seat as {role}. Outcome: "{end}". Judgment {p} / Result {o}'],
    'share.daily': ['司令塔「今日の1判断」{title}({year})。私の判断は「{choice}」で、{verdict}だった。{streak}', 'Command Seat, today\'s decision: {title} ({year}). I chose "{choice}": {verdict}. {streak}'],
    'share.streak': ['{n}日連続挑戦中。', '{n}-day streak.'],
    'share.tags': ['#司令塔 #判断力の筋トレ', '#CommandSeat #DecisionMaking'],
    'share.h': ['結果をシェアする', 'Share your result'],
    'share.native': ['シェアする', 'Share'],
    'share.dialog': ['結果をシェア', 'Share your result'],
    'share.app': ['司令塔', 'Command Seat'],
    'share.copy': ['文章をコピー', 'Copy text'],
    'share.x': ['Xでポスト', 'Post on X'],
    'share.line': ['LINEで送る', 'Send on LINE'],

    // 評価
    'calib.none': ['判定なし', 'Not rated'],
    'calib.over': ['自信過剰', 'Overconfident'],
    'calib.under': ['控えめすぎ', 'Underconfident'],
    'calib.ok': ['ほぼ適切', 'Well calibrated'],
    'q.gg.t': ['実力の勝利', 'Earned win'], 'q.gg': ['筋の良い判断が、良い結果につながった。', 'Sound judgment led to a good result.'],
    'q.gb.t': ['良い判断、不運な結果', 'Good call, bad luck'], 'q.gb': ['判断の筋は良かった。結果が悪かったのは運の要素も大きい。この判断の仕方は続けてよい。', 'Your reasoning was sound. Luck played a large part in the bad result. Keep deciding this way.'],
    'q.bg.t': ['運に救われた', 'Saved by luck'], 'q.bg': ['結果は良かったが、判断の筋は危うかった。結果だけで自分の判断を評価しないこと。同じやり方は、次は裏目に出るかもしれない。', 'The result was good, but the reasoning was shaky. Do not judge yourself by results alone. The same approach may backfire next time.'],
    'q.bb.t': ['必然の敗北', 'Predictable loss'], 'q.bb': ['判断の筋も結果も厳しかった。どの前提が崩れていたのかを、局面ごとに見直してみよう。', 'Both the reasoning and the result were poor. Go through each decision and find which assumption failed.'],
    'q.cell.bg': ['運に救われた', 'Saved by luck'], 'q.cell.gg': ['実力の勝利', 'Earned win'], 'q.cell.bb': ['必然の敗北', 'Predictable loss'], 'q.cell.gb': ['良い判断、不運', 'Good call, bad luck'],
    'q.s.bg': ['判断△ 結果◯', 'Judgment − / Result +'], 'q.s.gg': ['判断◯ 結果◯', 'Judgment + / Result +'], 'q.s.bb': ['判断△ 結果△', 'Judgment − / Result −'], 'q.s.gb': ['判断◯ 結果△', 'Judgment + / Result −'],
    'q.ax.y': ['結果 →', 'Result →'], 'q.ax.x': ['判断の質 →', 'Judgment →'],
    'tend.slow': ['情報が揃うのを待ちすぎる傾向があります。待っている間にも状況は動きます。', 'You tend to wait too long for complete information. Events move while you wait.'],
    'tend.rush': ['決断は速いものの、裏取りを省きがちです。誤報が混じっていても気づけません。', 'You decide fast but often skip verification, so false reports slip past you.'],
    'tend.fast': ['決断が速く、時間を味方につけています。', 'You decide quickly and make time work for you.'],
    'tend.infoGood': ['入電の真偽を確かめる習慣が身についています。', 'You have a habit of checking whether reports are true.'],
    'tend.infoBad': ['入電を額面どおりに受け取りがちです。一番都合のいい報告ほど疑ってみましょう。', 'You tend to take reports at face value. Be most suspicious of the report you most want to believe.'],
    'tend.aiBad': ['自信ありげなAI参謀の提案に流されやすい傾向があります。提案の数字ではなく、その数字の前提を確かめましょう。', 'Confident AI advice sways you easily. Check the assumptions behind the numbers, not just the numbers.'],
    'tend.aiGood': ['AI参謀の理屈の穴を見抜けています。', 'You spot the holes in your AI advisors\' reasoning.'],
    'tend.over': ['確信度が平均{c}%だったのに対し、狙いどおりに進んだのは{s}%。自信過剰の傾向があります。', 'Your average confidence was {c}%, but only {s}% of your decisions worked. You tend to be overconfident.'],
    'tend.under': ['確信度(平均{c}%)より、実際の成功率({s}%)の方が高めでした。もう少し自分の判断を信じてよさそうです。', 'Your success rate ({s}%) was higher than your confidence ({c}% on average). You can trust your judgment a little more.'],
    'tend.cal': ['確信度と実際の結果が釣り合っています。自分の判断の確かさを正しく見積もれています。', 'Your confidence matches your results. You judge your own accuracy well.'],
    'tend.bold': ['大胆な選択を好みます。勝てる場面では強みですが、失敗の大きさも見積もりましょう。', 'You prefer bold choices. That is a strength when you can win, but weigh the size of a possible failure too.'],
    'tend.careful': ['慎重な選択を好みます。守りが固い反面、動くべき時に遅れないよう注意しましょう。', 'You prefer cautious choices. Your defense is solid, but do not be late when it is time to move.'],
    'tend.timeouts': ['{n}回、時間切れになりました。決めないことも決断の一つです。', 'You ran out of time {n} time(s). Not deciding is also a decision.'],
    'axis.proc': ['判断の質', 'Judgment'], 'axis.speed': ['決断速度', 'Speed'], 'axis.info': ['情報の見極め', 'Info checks'], 'axis.ai': ['AI参謀の見極め', 'AI scrutiny'], 'axis.calib': ['確信度の精度', 'Calibration'],
    'axis.aria': ['判断の5つの軸', 'Five axes of judgment'],

    // 振り返り
    'rev.proc': ['判断の質', 'Judgment'], 'rev.proc.s': ['結果に関係なく、判断の筋の良さ', 'How sound your reasoning was, whatever the result'],
    'rev.out': ['結果', 'Result'], 'rev.out.s': ['指標の平均。結末「{end}」', 'Average of the meters. Outcome: "{end}"'],
    'rev.calib': ['確信度の精度', 'Calibration'],
    'rev.hist': ['史実と同じ判断', 'Same as history'], 'rev.hist.s': ['一致が多いほど良いとは限らない', 'More matches is not always better'],
    'rev.quad': ['判断と結果のマトリクス', 'Judgment vs. result'],
    'rev.radar': ['判断の5つの軸', 'Five axes of judgment'],
    'rev.now': ['今回', 'This run'], 'rev.avg': ['これまでの平均', 'Your average so far'],
    'rev.tend': ['あなたの判断の癖', 'Your decision habits'],
    'rev.lean': ['判断の向き', 'Your leanings'],
    'rev.risk': ['リスクの取り方', 'Risk'], 'rev.risk.l': ['慎重', 'Cautious'], 'rev.risk.r': ['大胆', 'Bold'],
    'rev.prio': ['優先したもの', 'Priority'], 'rev.prio.l': ['任務の達成', 'The mission'], 'rev.prio.r': ['人命と長期', 'Lives and the long run'],
    'rev.lean.note': ['この2つに良し悪しはない。自分がどちらに傾きやすいかを知っておくための目盛りだ。', 'Neither end is better. These scales show which way you tend to lean.'],
    'rev.timeout': ['時間切れ', 'Time up'], 'rev.ok': ['狙いどおり', 'Worked'], 'rev.ng': ['裏目', 'Backfired'], 'rev.inv': ['裏取りした', 'Verified'],
    'rev.mine': ['あなたの判断', 'Your decision'],
    'rev.mine.timeout': ['時間切れ({x} と同じ流れに)', 'Time up (same course as {x})'],
    'rev.quality': ['判断の質 ', 'Judgment '], 'rev.conf': ['  確信度 {c}%', '  Confidence {c}%'],
    'rev.reason': ['理由: 「{r}」', 'Reason: "{r}"'],
    'rev.histpick': ['史実の判断', 'What history chose'],
    'rev.bad': ['誤報', 'False report'], 'rev.bad.t': ['「{f}」の報告: {why}', 'Report from "{f}": {why}'],
    'rev.flaw': ['{name}の穴', '{name}\'s blind spot'],
    'rev.flaw.t': ['推奨は{x}(自信度{c}%)。', 'Picked {x} ({c}% confident). '],
    'rev.followed': ['あなたはこの進言に従った。', 'You followed this advice.'],
    'rev.noflaw.h': ['AI参謀', 'AI advisors'], 'rev.noflaw': ['この局面では、参謀の推論に大きな穴はなかった。', 'No advisor had a serious flaw in this decision.'],
    'rev.lesson': ['判断のポイント', 'Takeaway'],
    'tl.note': ['あなたが史実と違う道を選んだ局面では、世界線が分かれていく。', 'Where you chose differently from history, the timeline branches.'],
    'tl.when': ['局面', 'When'], 'tl.hist': ['史実', 'History'], 'tl.mine': ['あなたの世界線', 'Your timeline'],
    'tl.same': ['史実と同じ道', 'Same as history'], 'tl.timeout': ['時間切れ: ', 'Time up: '], 'tl.end': ['結末', 'Outcome'],
    'cmp.intro': ['同じ作戦を遊んだ友人と、局面ごとの判断を比べられます。下の対戦コードを送り、友人は「友人と比べる」に貼り付けてください。', 'Compare each decision with a friend who played the same mission. Send them the code below; they paste it into "Compare with a friend".'],
    'cmp.copy': ['対戦コードをコピー', 'Copy the code'], 'cmp.paste': ['友人のコードを貼り付ける', 'Paste a friend\'s code'],
    'cmp.short': ['ひとこと共有用', 'Short summary'],
    'cmp.summary': ['司令塔「{title}」 判断の質{p} / 結果{o} / 結末「{end}」', 'Command Seat "{title}": judgment {p} / result {o} / outcome "{end}"'],
    'tab.sum': ['総合', 'Summary'], 'tab.turns': ['局面ごと', 'Decisions'], 'tab.tl': ['もしも年表', 'What-if timeline'], 'tab.share': ['比べる', 'Compare'],
    'rev.eyebrow': ['{title} — 振り返り', '{title} — Review'], 'rev.h2': ['判断を解剖する', 'Dissecting your decisions'],

    // プロフィール
    'prof.eyebrow': ['これまでの全作戦から', 'From all your missions'], 'prof.h2': ['判断プロフィール', 'Judgment profile'],
    'prof.empty.h': ['まだ記録がありません', 'No records yet'],
    'prof.empty': ['作戦を1つ終えると、判断の5つの軸と、あなたの判断の癖がここに積み上がっていきます。', 'Finish a mission and your five axes of judgment and decision habits will build up here.'],
    'prof.choose': ['作戦を選ぶ', 'Choose a mission'],
    'prof.runs': ['作戦の回数', 'Missions played'], 'prof.runs.s': ['今日の1判断の連続 {n}日', 'Daily streak: {n} days'],
    'prof.proc': ['判断の質(平均)', 'Judgment (avg.)'], 'prof.proc.s': ['結果に左右されない筋の良さ', 'Soundness, independent of results'],
    'prof.out': ['結果(平均)', 'Result (avg.)'], 'prof.out.s': ['指標の平均', 'Average of the meters'],
    'prof.calib.s': ['自信と結果の釣り合い', 'How well confidence matches results'],
    'prof.all': ['全体の平均', 'All-time average'], 'prof.recent': ['直近5回', 'Last 5 runs'],
    'prof.log': ['作戦の記録', 'Mission log'],
    'prof.cols': [['日時', '作戦', '結末', '判断の質', '結果', '速度', '情報', 'AI', '確信度'], ['Date', 'Mission', 'Outcome', 'Judgment', 'Result', 'Speed', 'Info', 'AI', 'Calib.']],

    // 比較
    'cmpg.ph': ['SRT1. で始まる対戦コードを貼り付け', 'Paste a code starting with SRT1.'],
    'cmpg.eyebrow': ['同じ作戦、別の判断', 'Same mission, different calls'], 'cmpg.h2': ['友人と比べる', 'Compare with a friend'],
    'cmpg.label': ['友人から届いた対戦コード', 'Your friend\'s code'], 'cmpg.go': ['比べる', 'Compare'],
    'cmpg.note': ['あなたの対戦コードは、作戦の振り返り画面の「比べる」タブにあります。比較には、同じ作戦でのあなたの最新の記録を使います。', 'Your own code is on the "Compare" tab of the mission review. The comparison uses your latest run of the same mission.'],
    'cmpg.bad': ['コードを読み取れませんでした。「SRT1.」から最後の文字まで、すべて貼り付けてください。', 'Could not read that code. Paste everything from "SRT1." to the last character.'],
    'cmpg.timeout': ['時間切れ', 'Time up'],
    'cmpg.fproc': ['{n} 判断の質', '{n}: judgment'], 'cmpg.fs': ['結果 {o} / 「{e}」', 'Result {o} / "{e}"'],
    'cmpg.mine': ['あなた 判断の質', 'You: judgment'], 'cmpg.you': ['あなた', 'You'], 'cmpg.notyet': ['この作戦をまだ遊んでいません', 'You have not played this mission yet'],
    'cmpg.mission': ['作戦', 'Mission'], 'cmpg.match': ['一致した判断', 'Same choices'], 'cmpg.match.s': ['同じ選択をした局面', 'Decisions where you agreed'],
    'cmpg.col.turn': ['局面', 'Decision'], 'cmpg.col.hist': ['史実', 'History'],
    'cmpg.conf': ['確信度 {c}%', 'Confidence {c}%'],
    'cmpg.play': ['「{title}」を遊んで比べる', 'Play "{title}" to compare'],
    'anon': ['名無しの司令', 'Unnamed commander'],

    // 今日の1判断
    'daily.practice': ['過去問に挑む', 'Archive question'], 'daily.eyebrow': ['今日の1判断 — {d}', 'Today\'s decision — {d}'],
    'daily.you': ['あなた: {role}({note})', 'You: {role} ({note})'],
    'daily.conf': ['確信度 ', 'Confidence '],
    'daily.v.timeout': ['時間切れ', 'time ran out'], 'daily.v.good': ['筋の良い判断', 'a sound call'], 'daily.v.mid': ['一理あるが、危うい判断', 'defensible but risky'], 'daily.v.bad': ['危険な判断', 'a dangerous call'],
    'daily.res.practice': ['過去問の結果', 'Archive result'],
    'daily.streak': ['{n}日連続', '{n}-day streak'],
    'daily.none': ['決められなかった', 'No decision'],
    'daily.notbest': ['史実の判断が最善だったとは限らない。', 'History did not always choose best.'],
    'daily.best': [' この問題で最も筋が良いのは「{x}」だった。', ' The soundest choice here was "{x}".'],
    'daily.archive': ['過去問に挑む(連続記録には数えません)', 'Try an archive question (does not count toward your streak)'],

    // 遊び方
    'how.eyebrow': ['遊び方', 'How to play'], 'how.h1': ['判断を筋トレする', 'Train your judgment like a muscle'],
    'how.lede': ['司令塔は、歴史上の危機で指揮を執る立場に立ち、限られた時間と不完全な情報の中で決断を下すゲームです。結末だけでなく、判断の筋道そのものを振り返ることで、判断力を鍛えます。', 'In Command Seat you take charge in real historical crises and decide with little time and incomplete information. You build judgment by reviewing not just the outcome, but how you reasoned.'],
    'how.p': [[
      ['情報は不完全', '入電には誤報や、誤解を招く報告が混じる。「裏を取る」と真偽が分かるが、持ち時間を使う。'],
      ['時間がない', '1つの判断に制限時間がある。迷っている間も時計は進み、時間切れは「決められなかった」という決断になる。'],
      ['正解がない', 'どの選択肢も何かを犠牲にする。人命か任務か、今か後か。'],
      ['結果と判断は別', '運よく成功しても判断の筋が悪ければ評価は低い。筋の良い判断が不運で失敗することもある。'],
      ['自信を数字にする', '決裁のたびに確信度を入れる。自信過剰か、控えめすぎかが見えてくる。']
    ], [
      ['Information is incomplete', 'Some reports are false or misleading. "Verify" tells you which, but it costs time.'],
      ['Time is short', 'Each decision has a time limit. The clock runs while you hesitate, and running out counts as deciding not to decide.'],
      ['There is no right answer', 'Every option sacrifices something: lives or the mission, now or later.'],
      ['Results are not judgment', 'A lucky success with poor reasoning scores low. Sound reasoning can still fail by bad luck.'],
      ['Put a number on confidence', 'You state your confidence with every decision, and learn whether you are over- or underconfident.']
    ]],
    'how.flow.h': ['1つの作戦の流れ', 'How a mission works'],
    'how.flow': [[
      'ブリーフィングで状況と、見守る3つの指標を確かめる。',
      '各局面で入電を読み、必要なら裏を取る。',
      'AI参謀3人(慎重派ミネルヴァ、攻撃派アレス、データ至上のラプラス)の進言を聞く。誰かがもっともらしく間違えていることがある。',
      '選択肢を選び、確信度と理由を入れて決裁する。結果には運の要素がある。',
      '全局面の後、結末と史実が明かされる。振り返りでは、判断と結果のマトリクス、5つの軸、判断の癖、局面ごとの誤報とAIの穴、もしも年表を確かめる。'
    ], [
      'Read the briefing: the situation and the three meters you must protect.',
      'At each decision, read the incoming reports and verify them if needed.',
      'Hear your three AI advisors: cautious Minerva, aggressive Ares, and data-driven Laplace. One may be convincingly wrong.',
      'Choose an option, set your confidence, add a reason, and decide. Results involve luck.',
      'After the last decision, the outcome and real history are revealed. The review shows the judgment-vs-result matrix, five axes, your habits, each false report and AI flaw, and a what-if timeline.'
    ]],
    'how.axes.h': ['5つの軸', 'The five axes'],
    'how.axes': [[
      ['判断の質', '結果に関係なく、その時点の情報で筋の良い判断だったか。'],
      ['決断速度', '持ち時間をどれだけ残して決めたか。'],
      ['情報の見極め', '誤報が混じる局面で裏を取ったか、だまされずに判断できたか。'],
      ['AI参謀の見極め', '推論に穴のある参謀の進言に流されなかったか。'],
      ['確信度の精度', '入れた確信度と、実際に狙いどおりになった割合が釣り合っているか。']
    ], [
      ['Judgment', 'Whether the call was sound given what you knew, whatever the result.'],
      ['Speed', 'How much time you had left when you decided.'],
      ['Info checks', 'Whether you verified reports when false ones were mixed in, and avoided being fooled.'],
      ['AI scrutiny', 'Whether you resisted advice from an advisor whose reasoning had a hole.'],
      ['Calibration', 'Whether your stated confidence matched how often things worked.']
    ]],
    'how.keep.h': ['続けるための仕組み', 'Keep training'],
    'how.keep': [[
      ['今日の1判断', '日替わりで1問、3分で終わる歴史のジレンマ。連続日数が記録される。'],
      ['判断プロフィール', 'すべての作戦の記録から、あなたの判断の癖を描く。'],
      ['友人と比べる', '振り返り画面の対戦コードを送り合うと、同じ局面での判断を並べて比べられる。']
    ], [
      ['Today\'s decision', 'One historical dilemma a day, done in 3 minutes. Your streak is recorded.'],
      ['Judgment profile', 'Draws your decision habits from all your missions.'],
      ['Compare with a friend', 'Swap the codes from the review screen to see your decisions side by side.']
    ]],
    'how.note': ['記録はこのブラウザの中にだけ保存されます。史実の記述は一般に知られている資料に基づいていますが、ゲームとして状況を単純化しています。史実の判断が常に最善だったわけではありません。', 'Your records are saved only in this browser. The history is based on widely known sources but simplified for the game. History did not always make the best call.']
  };

  function t(key, vars) {
    const e = D[key];
    if (!e) return key;
    let s = e[lang === 'en' ? 1 : 0];
    if (vars && typeof s === 'string') s = s.replace(/\{(\w+)\}/g, (m, k) => (vars[k] != null ? vars[k] : m));
    return s;
  }
  function setLang(l) {
    try { localStorage.setItem(KEY, l); } catch (e) { /* 保存できない環境 */ }
    location.reload();
  }
  // 英語の文章で上書きする(数値や判定は日本語版のデータを使う)
  function mergeText(base, over) {
    if (over == null) return base;
    if (Array.isArray(base)) return base.map((b, i) => mergeText(b, over[i]));
    if (base && typeof base === 'object') {
      const out = { ...base };
      for (const k of Object.keys(base)) if (k in over) out[k] = mergeText(base[k], over[k]);
      return out;
    }
    return typeof over === 'string' ? over : base;
  }
  function localizeScenario(sc, en) {
    if (!en) return sc;
    const out = { ...sc };
    ['title', 'sub', 'year', 'place', 'role', 'roleNote', 'epilogue'].forEach(k => { if (en[k]) out[k] = en[k]; });
    if (en.intro) out.intro = en.intro;
    out.meters = sc.meters.map((m, i) => ({ ...m, n: (en.meters && en.meters[i]) || m.n }));
    out.endings = mergeText(sc.endings, en.endings);
    out.turns = sc.turns.map((t, i) => {
      const e = (en.turns || [])[i]; if (!e) return t;
      const o = { ...t };
      ['clock', 'title', 'sit', 'flawWhy', 'hist', 'lesson', 'histTl'].forEach(k => { if (e[k] != null) o[k] = e[k]; });
      if (t.sitIf && e.sitIf) o.sitIf = t.sitIf.map((c, j) => ({ ...c, t: e.sitIf[j] || c.t }));
      o.rep = mergeText(t.rep, e.rep);
      if (e.inv) o.inv = { ...t.inv, t: e.inv };
      if (e.adv) o.adv = Object.fromEntries(Object.entries(t.adv).map(([k, v]) => [k, [v[0], e.adv[k] || v[1], v[2]]]));
      o.opt = mergeText(t.opt, e.opt);
      return o;
    });
    return out;
  }
  const ADV_EN = {
    c: { stance: 'Cautious', desc: 'Weighs human lives and long-term effects' },
    a: { stance: 'Aggressive', desc: 'Weighs the initiative and getting the mission done' },
    d: { stance: 'Data-driven', desc: 'Finds the optimum from numbers and probabilities' }
  };
  const ADV_NAME_EN = { c: 'Minerva', a: 'Ares', d: 'Laplace' };
  if (lang === 'en') {
    const S = window.SCENARIOS_EN || {};
    window.SCENARIOS = window.SCENARIOS.map(sc => localizeScenario(sc, S[sc.id]));
    const DE = window.DAILY_EN || {};
    window.DAILY = window.DAILY.map(q => (DE[q.id] ? mergeText(q, DE[q.id]) : q));
    Object.keys(window.ADVISORS).forEach(k => { window.ADVISORS[k] = { ...window.ADVISORS[k], name: ADV_NAME_EN[k], ...ADV_EN[k] }; });
  }

  // 静的な HTML(タイトル画面など)に文言を当てる
  function applyStatic() {
    document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => { el.placeholder = t(el.dataset.i18nPh); });
    document.querySelectorAll('[data-i18n-href]').forEach(el => { el.href = t(el.dataset.i18nHref); });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => { el.setAttribute('aria-label', t(el.dataset.i18nAria)); });
  }

  return { get lang() { return lang; }, t, setLang, applyStatic };
})();
