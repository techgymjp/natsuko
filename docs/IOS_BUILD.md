# iOS 版をビルドして App Store に出す手順(Mac での作業)

司令塔(Command Seat)の iOS 版は、Android 版と同じ Capacitor で作っています(`ios/` フォルダ)。
コードの準備はできているので、Mac では「ビルドして App Store Connect にアップロードする」作業だけを行います。

- Bundle ID:`jp.techgym.natsuko`(Android と同じ)
- チーム:Team ID `GNM3VTX9YG`(Xcode の設定に入れてあります)。Apple Developer には**個人で登録**しています(App Store の販売元は個人名になります)
- 対応端末:iPhone(**縦画面固定**)。iPad では iPhone 用の画面で動きます
- アプリ名:日本語の端末では「司令塔」、それ以外では「Command Seat」と表示されます
- 広告:AdMob(iOS 用のアプリと広告ユニット)。バナー、全画面(インタースティシャル)、リワードの 3 種類。起動時に「トラッキングの許可」の確認画面が出ます

> **まだ済んでいないこと**:AdMob の iOS 用のアプリ ID と、バナー・インタースティシャルの広告ユニット ID は入れてあります。リワードの広告ユニット ID がまだ空です(本番のビルドでは、リワード広告が出ません)。ID を受け取ったら Claude Code が `js/ads.js` に入れます。**入れる前に App Store 用のビルド(3 章)を作らないでください。**

---

## 0. ブラウザで先に済ませること(Apple Developer / App Store Connect / AdMob)

1. **Apple Developer**(developer.apple.com)→「Certificates, Identifiers & Profiles」→「Identifiers」→「+」→「App IDs」→「App」
   - Description:`Command Seat`(英数字。記号は使えないことがある)
   - Bundle ID:「Explicit」で `jp.techgym.natsuko`
   - Capabilities:何もチェックしない
2. **App Store Connect**(appstoreconnect.apple.com)→「マイ App」→「+」→「新規 App」
   - プラットフォーム:iOS
   - 名前:`司令塔:歴史の危機で鍛える判断力`(Google Play と同じ。30 文字以内、App Store 全体で重複不可。使えなければ短くする)
   - プライマリ言語:日本語 ／ バンドル ID:1 で登録したもの
   - SKU:`shireito`(あとから変更不可) ／ ユーザアクセス:アクセス制限なし
3. **AdMob**
   - 「アプリを追加」→ **iOS** →「ストアに掲載されていない」で登録する
   - 広告ユニットを 3 つ作る:**バナー**、**インタースティシャル**、**リワード**
   - アプリ ID(`ca-app-pub-…~…`)と広告ユニット ID 3 つ(`ca-app-pub-…/…`)を Claude Code に渡す
   - 「プライバシーとメッセージ」→「欧州の規制」のメッセージに、iOS アプリも対象として追加する

---

## 1. Mac の準備(最初の1回だけ)

1. **Xcode** を App Store からインストールする(数十 GB あるので時間がかかります)。インストール後に一度起動し、追加コンポーネントのインストールを済ませる
2. Xcode の「Settings…」→「Accounts」→「+」で、Apple Developer に登録している Apple ID でサインインする(チームが個人名で表示されれば OK)
3. **Node.js**(LTS 版)を https://nodejs.org/ からインストールする
4. ターミナルでリポジトリを取得する
   ```bash
   cd ~/Desktop   # 置きたい場所(どこでもよい)
   git clone https://github.com/techgymjp/natsuko.git
   cd natsuko
   git checkout claude/sweet-bardeen-3tsevt
   npm ci
   ```
   `git` がないと言われたら、表示に従って「コマンドライン・デベロッパツール」をインストールしてから、もう一度実行します。

2回目以降は、`cd natsuko` のあと `git pull` と `npm ci` で最新にします。

---

## 2. 自分の iPhone で動作確認する(テスト広告)

```bash
npm run ios:sync    # ゲームのファイルを iOS のプロジェクトにコピー(テスト広告)
npm run ios:open    # Xcode で開く
```

1. iPhone を USB ケーブルで Mac につなぎ、iPhone で「このコンピュータを信頼」を許可する
2. iPhone の「設定」→「プライバシーとセキュリティ」→「デベロッパモード」をオンにする(再起動を求められます。項目がない場合は、Xcode で一度 iPhone を選ぶと表示されます)
3. Xcode の上部で、実行先に自分の iPhone を選ぶ
4. 左の「App」→「Signing & Capabilities」で、「Automatically manage signing」がオン、Team に自分(個人名)のチームが選ばれていることを確認する
5. ▶(Run)を押すと、iPhone にアプリが入って起動する

確認すること:

- 縦画面の全画面で表示され、上のバーが切り欠き(Dynamic Island)に隠れない
- 起動後、トラッキングの確認画面が出る(日本語の端末では日本語の説明)
- 作戦を 1 つ最後まで遊べる。音が鳴る
- **テスト広告**が出る:作戦室などの画面下のバナー、作戦の開始・やり直し・作戦室に戻るときの全画面広告、鍵のかかった作戦と「広告を見て+30秒」のリワード広告
- 結末の画面の「シェアする」で iOS の共有メニューが出る
- 今日の1判断、英語への切り替えができる

---

## 3. App Store 用にビルドしてアップロードする(本番広告)

```bash
git pull && npm ci
npm run ios:release   # 本番の広告 ID でコピーする(ここが ios:sync と違う)
npm run ios:open
```

1. Xcode の左で「App」→「General」→「Identity」を開き、**Build の番号を前回より大きくする**(初回は 1。アップロードのたびに 2、3…と上げる。同じ番号は二度アップロードできない)。Version は 1.0.0
2. 上部の実行先を「**Any iOS Device (arm64)**」にする
3. メニューの「Product」→「**Archive**」(メニューは画面最上部。全画面表示だと隠れるので、マウスを画面の上端に動かす)
4. 終わると Organizer が開くので、「**Distribute App**」→「**App Store Connect**」→「Upload」で進める(途中の確認は既定のまま「Next」でよい。「Xcode Cloud can automate…」は「Remind Me Later」で閉じてよい)
5. 10〜30 分ほどで、App Store Connect の「TestFlight」タブにビルドが表示される

輸出コンプライアンス(暗号化)の質問は、Info.plist で「独自の暗号化は使っていない」と設定済みなので、聞かれません。

**注意**:`ios:release` でビルドしたアプリは本番の広告が出ます。TestFlight で確認するときも、**本番の広告はタップしない**でください(AdMob のアカウント停止の対象)。Xcode から iPhone に直接入れて試すときは、`npm run ios:sync` でテスト広告に戻してから実行します。

---

## 4. TestFlight で確認し、審査用の画面録画を撮る

1. App Store Connect の「TestFlight」→「内部テスト」でグループを作り、自分を追加する
2. iPhone に「TestFlight」アプリを App Store から入れ、届いた招待から司令塔をインストールする
3. **審査用の画面録画を撮る**(新しいアカウントの初回審査では、ほぼ必ず求められます)
   - iPhone のコントロールセンターに「画面収録」を追加し、録画を始めてから**アプリを起動する**ところから撮る
   - 撮る流れの例(3〜5 分):起動 → トラッキングの確認 → タイトル → 作戦室 → 作戦 1 を最後まで(入電、裏を取る、AI参謀、決裁、結末)→ 振り返り → 今日の1判断 → 鍵のかかった作戦の「広告を見て鍵を開ける」→ 英語への切り替え
   - TestFlight 版は本番広告なので、**広告が出ても閉じるだけでタップしない**
   - ファイルが大きいと返信に添付できない。Finder で右クリック →「選択したビデオファイルをエンコード」→ 720p で小さくするか、Google ドライブの共有リンクを使う

---

## 5. App Store Connect で審査に出す

「配信」タブ(iOS App のバージョン 1.0.0)で入力します。バージョンが「1.0」になっていたら 1.0.0 に直して保存します(ビルドを選べなくなるため)。

| 項目 | 入力内容 |
| --- | --- |
| スクリーンショット | 「Dynamic Island 搭載 iPhone(中型ディスプレイ)」の欄に、`docs/store/ios/6.3inch/` の画像を入れる。日本語版(ja-)と英語版(en-)各 4 枚。このゲームは縦画面なので **1206 × 2622(縦向き)**。6.9 インチ(2868 × 1320)の欄ではなく、こちらに入れる |
| ヘッダ・検索結果 | 「ヘッダと検索結果」タブに `docs/store/ios/appstore-header-3840x1646-ja.png` と `appstore-search-3840x2560-ja.png`(英語は `-en`)。ヘッダを入れたら検索結果の画像も必ず入れる |
| プロモーション用テキスト・概要・キーワード | Google Play 用の文章(`docs/store/listing.md`、`listing-en.txt`)を流用。キーワードの例:`歴史,判断力,シミュレーション,クイズ,戦略,危機管理,意思決定,教育,キューバ危機,アポロ` / `history,decision,simulation,strategy,crisis,quiz,leadership,trivia,judgment,education` |
| サポート URL | https://techgym.jp/ |
| プライバシーポリシー URL(App 情報) | https://techgym.jp/privacy-policy/ (英語は https://techgym.jp/privacy-policy-en/) |
| カテゴリ(App 情報) | ゲーム(サブカテゴリ:シミュレーション、トリビア) |
| コンテンツの配信権(App 情報) | 第三者のコンテンツを含まない →「いいえ」(絵・音・文章はすべて自前。フォントは無料のオープンライセンス) |
| 著作権 | 2026 TECH GYM K.K. |
| 価格 | 無料 |
| ビルド | TestFlight で確認したビルドを選ぶ |
| 年齢制限 | 質問に答える(下記) |
| App のプライバシー | AdMob が収集するデータを申告する(下記) |
| App Review に関する情報 | サインイン不要。連絡先を入力。「メモ」に下の文章を入れ、4 章の画面録画を添付するか共有リンクを書く |

**年齢制限の答え方の目安**

- 漫画やアニメの暴力・リアルな暴力:戦争・事故・災害を**文章で**扱う。流血や残酷な画像はない →「まれ/軽度」
- 恐怖・ホラー:なし(核戦争の危機や事故の緊迫した場面はあるが、恐怖をあおる表現はない)→「なし」または「まれ/軽度」
- 医療・治療の情報:史実の解説として医療の判断に触れる(ワクチン、手洗いなど)→「まれ/軽度」
- ギャンブル、性的表現、アルコール・たばこ・薬物、不適切な言葉:なし
- 結果は「12+」前後になる見込み

**App のプライバシー(AdMob を使うアプリの目安)**
Google の「Apple の App Store のデータ開示要件への準備」(AdMob のヘルプ)に、AdMob が収集するデータの一覧があります。必ずそちらを見て最終確認してください。目安は次のとおりです。

- 収集する:ID(デバイス ID)、使用状況データ(広告データ、製品の操作)、診断(クラッシュデータ、パフォーマンスデータ、その他の診断データ)、位置情報(おおよその場所)
- 目的:サードパーティ広告、アナリティクス
- ユーザーに関連付け:しない
- トラッキングに使用:デバイス ID と広告データは「する」
- アプリ自体は個人情報を集めない(遊んだ記録は端末の中だけに保存)

**App Review への「メモ」の下書き**(初回審査の「Guideline 2.1 - Information Needed」で聞かれる内容を先に書いておく)

```
1. 画面録画:実機(iPhone、最新の iOS)で、アプリの起動から主な機能を操作した録画を添付します(共有リンク:<ここに貼る>)。
2. アプリの目的と対象者:歴史上の危機(キューバ危機、アポロ13号など)で指揮を執る立場に立ち、限られた時間と不完全な情報の中で判断を下す、判断力を鍛えるシミュレーションゲームです。対象は13歳以上の一般の方です。
3. 使い方:ログインやアカウント登録は不要です。作戦を選び、各局面で選択肢を選んで「決裁」を押します。作戦の後に振り返りが表示されます。日替わりの「今日の1判断」もあります。
4. 外部サービス:広告に Google AdMob を使っています。起動時に Google の同意確認(地域による)と App Tracking Transparency の確認を行います。結果のシェアには iOS の共有メニューを使います。サーバーとの通信やアカウントはありません。
5. 地域による違い:欧州など同意が必要な地域では、広告の同意確認の画面が表示されます。それ以外の機能に地域による違いはありません。
6. 規制業種・第三者の素材:規制のある業種には該当しません。絵・音楽・文章はすべて自社で作成したものです(音楽と効果音はアプリ内で合成)。史実の記述は一般に知られた資料に基づいています。
```

英語でも書く場合:

```
1. Screen recording: Attached is a recording on a physical iPhone (latest iOS), from app launch through the main features (shared link: <paste here>).
2. Purpose and audience: A simulation game that trains decision-making. Players take command in historical crises (the Cuban Missile Crisis, Apollo 13, and others) and decide under time pressure with incomplete information. For general audiences aged 13 and up.
3. How to use: No login or account is needed. Choose a mission, pick an option at each decision, and tap "Decide". A review follows each mission. There is also a daily question.
4. External services: Ads are served by Google AdMob. At launch the app shows Google's consent form (in regions that require it) and the App Tracking Transparency prompt. Sharing uses the iOS share sheet. The app has no server or accounts.
5. Regional differences: In regions such as the EU, an ad consent form is shown. Nothing else differs by region.
6. Regulated industries / third-party content: Not a regulated industry. All art, music and text were created by us (music and sound effects are synthesized in the app). Historical content is based on widely known sources.
```

入力が終わったら「審査用に追加」→「審査へ提出」。

---

## 6. 公開後にやること

- AdMob で iOS アプリを App Store のアプリに紐づける(「アプリ」→ iOS の司令塔 →「アプリの設定」)
- App Store からインストールして、起動・同意画面・トラッキングの確認・広告を確認する

---

## 7. 自動化の準備(2回目以降を GitHub Actions に任せる場合)

JET STRIKE(techgymjp/jet-fighter)の `docs/IOS_BUILD.md` の 7 章と同じです。API キーと配布用証明書は Apple Developer のチーム共通なので、JET STRIKE で作ったものをそのまま使えます。このリポジトリの Settings → Secrets and variables → Actions(https://github.com/techgymjp/natsuko/settings/secrets/actions)に、同じ 5 つを登録してください。

| 名前 | 内容 |
| --- | --- |
| `IOS_DIST_CERT_P12_BASE64` | 証明書(.p12)を変換した文字列 |
| `IOS_DIST_CERT_PASSWORD` | .p12 を書き出したときのパスワード |
| `ASC_KEY_ID` | API キーのキー ID |
| `ASC_ISSUER_ID` | Issuer ID |
| `ASC_KEY_P8_BASE64` | API キー(.p8)を変換した文字列 |

登録が終わったら、Claude Code に「iOS の自動アップロードのワークフローを作って」と頼みます。

**注意**:証明書(.p12)、そのパスワード、API キー(.p8)は、チャット・AI へのアップロード・リポジトリへのコミットで**絶対に共有しない**でください。

いまは、push のたびに GitHub Actions(`.github/workflows/ios.yml`)が、署名なしでシミュレーター向けにビルドできるかだけを確かめています。

---

## つまずきやすいところ

| 症状 | 対処 |
| --- | --- |
| アップロードで「同じビルド番号がすでにある」 | General の Build の番号を上げてから Archive し直す |
| Signing でエラー(チームが選べない、証明書がない) | Xcode の Accounts で Apple ID にサインインし直し、Team を選ぶ。「Automatically manage signing」をオンにする |
| 実行先に iPhone が出ない | ケーブルをつなぎ直し、iPhone で「信頼」を許可。デベロッパモードをオンにする |
| 実行先に「iOS 26.x Not Installed」と出る | 「Get」で iOS のシミュレーターと部品をダウンロードする(8 GB ほど。Archive にも必要) |
| ビルドが古いゲームのまま | `npm run ios:sync`(または `ios:release`)を実行し忘れている。`git pull` してから実行し直す |
| アップロードしたビルドが選べない | App Store Connect のバージョンが「1.0」のまま。1.0.0 に直して保存する |
| 「審査用に追加できません」 | 「コンテンツの配信権」と「アプリのプライバシー」のプライバシーポリシー URL を入力する |
| スクリーンショットがアップロードできない | 欄が「中型ディスプレイ(6.3 インチ)」か確かめる。このゲームは縦向きの 1206 × 2622 |
| 本番広告とテスト広告の取り違え | App Store 用は必ず `npm run ios:release`。Xcode から実機で試すときは `npm run ios:sync` に戻す |
| 審査で「Xcode が古い」と言われる | Xcode を最新版に更新してから Archive し直す |
