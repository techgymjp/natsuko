// Google AdMob 広告（Android アプリのときだけ動く。Web 版では何もしない）
window.Ads = (() => {
  const UNITS = {
    // Google 公式のテスト用広告ユニット
    test: {
      banner: 'ca-app-pub-3940256099942544/9214589741',
      interstitial: 'ca-app-pub-3940256099942544/1033173712',
      rewarded: 'ca-app-pub-3940256099942544/5224354917',
    },
    // 本番の広告ユニット（AdMob で作成した ID）。空にした種類は Google Play 版では出さない
    production: {
      banner: 'ca-app-pub-6411535997477460/9731211782',
      interstitial: 'ca-app-pub-6411535997477460/3520404531',
      rewarded: 'ca-app-pub-6411535997477460/5954996184',
    },
  };
  const RETRY_MS = 20000;      // 読み込みに失敗したら少し待って再挑戦する
  const cap = window.Capacitor;
  const native = !!(cap && cap.isNativePlatform && cap.isNativePlatform());
  const AdMob = native && cap.Plugins ? cap.Plugins.AdMob : null;
  const testing = window.AD_MODE !== 'production';
  const ids = testing ? UNITS.test : UNITS.production;

  let ready = false;           // 広告をリクエストしてよい状態（初期化と同意確認が済んだ）
  let showing = false;
  let privacyRequired = false; // 「広告の設定」を利用者が開けるようにする必要があるか（EU など）
  const banner = { want: false, created: false, visible: false, busy: false };
  const waiters = {};          // 表示中の広告が閉じたときに呼ぶ処理

  // 広告の種類ごとの読み込み状態
  const slots = {
    inter: { loaded: false, pending: null, load: () => AdMob.prepareInterstitial({ adId: ids.interstitial, isTesting: testing }) },
    reward: { loaded: false, pending: null, load: () => AdMob.prepareRewardVideoAd({ adId: ids.rewarded, isTesting: testing }) },
  };

  // 読み込みを始め、読み込めたら true で resolve する Promise を返す（読み込み中なら同じ Promise）
  function prepare(kind) {
    const s = slots[kind];
    if (!ready) return Promise.resolve(false);
    if (s.loaded) return Promise.resolve(true);
    if (!s.pending) {
      s.pending = s.load()
        .then(() => { s.loaded = true; return true; })
        .catch(() => { setTimeout(() => prepare(kind), RETRY_MS); return false; })
        .finally(() => { s.pending = null; });
    }
    return s.pending;
  }

  // 読み込み済みでなければ、最大 timeout ミリ秒だけ読み込みを待つ
  function ensureLoaded(kind, timeout) {
    if (slots[kind].loaded) return Promise.resolve(true);
    return Promise.race([prepare(kind), new Promise(r => setTimeout(() => r(false), timeout))]);
  }

  function finish(kind, result) {
    showing = false;
    window.SND.resume();
    const w = waiters[kind];
    waiters[kind] = null;
    if (w) w(result);
  }

  async function init() {
    try {
      await AdMob.initialize({ initializeForTesting: testing });
    } catch (e) {
      return;
    }
    // EU・英国などで必要な広告の同意確認（必要な地域でだけフォームが出る）。
    // 確認自体が失敗した場合（AdMob 側でメッセージ未設定など）は、同意不要の地域とみなして続ける
    try {
      let consent = await AdMob.requestConsentInfo();
      if (consent.status === 'REQUIRED' && consent.isConsentFormAvailable) consent = await AdMob.showConsentForm();
      ready = consent.canRequestAds !== false;
      privacyRequired = consent.privacyOptionsRequirementStatus === 'REQUIRED';
    } catch (e) {
      ready = true;
    }
    let rewarded = false;
    AdMob.addListener('interstitialAdDismissed', () => finish('inter'));
    AdMob.addListener('interstitialAdFailedToShow', () => finish('inter'));
    AdMob.addListener('onRewardedVideoAdShowed', () => { rewarded = false; });
    AdMob.addListener('onRewardedVideoAdReward', () => { rewarded = true; });
    AdMob.addListener('onRewardedVideoAdDismissed', () => finish('reward', rewarded));
    AdMob.addListener('onRewardedVideoAdFailedToShow', () => finish('reward', false));
    // バナーの高さぶん、ページの下に余白を空ける（バナーが画面の下端に重なるため）
    AdMob.addListener('bannerAdSizeChanged', size => {
      const hgt = banner.visible && size && size.height ? size.height : 0;
      document.documentElement.style.setProperty('--ad-h', hgt + 'px');
    });
    if (ids.interstitial) prepare('inter');
    if (ids.rewarded) prepare('reward');
    syncBanner();
  }

  // バナーを出すかどうかを画面ごとに切り替える（最後に頼まれた状態に合わせる）
  function setBanner(on) {
    banner.want = !!on;
    syncBanner();
  }
  async function syncBanner() {
    if (!AdMob || !ids.banner || !ready || banner.busy) return;
    if (banner.want === banner.visible) return;
    banner.busy = true;
    try {
      if (banner.want) {
        if (banner.created) await AdMob.resumeBanner();
        else { await AdMob.showBanner({ adId: ids.banner, adSize: 'ADAPTIVE_BANNER', position: 'BOTTOM_CENTER', isTesting: testing }); banner.created = true; }
        banner.visible = true;
      } else {
        await AdMob.hideBanner();
        banner.visible = false;
        document.documentElement.style.setProperty('--ad-h', '0px');
      }
    } catch (e) {
      /* 読み込めなかったときはバナーなしで続ける */
    }
    banner.busy = false;
    if (banner.want !== banner.visible && banner.created) syncBanner();
  }

  // 全画面広告を表示し、閉じられたら resolve する（読み込めていないときは出さずにすぐ resolve）
  function showInterstitial() {
    if (!AdMob || !ids.interstitial || !ready || !slots.inter.loaded || showing) return Promise.resolve();
    showing = true; slots.inter.loaded = false;
    window.SND.suspend();
    return new Promise(resolve => {
      waiters.inter = () => { prepare('inter'); resolve(); };
      AdMob.showInterstitial().catch(() => finish('inter'));
    });
  }

  // リワード広告を表示する。結果は 'rewarded'（最後まで見た）/ 'skipped'（途中で閉じた）/ 'unavailable'（読み込めなかった）
  async function showRewarded() {
    if (!AdMob || !ids.rewarded || showing) return 'unavailable';
    await initDone;
    if (!ready || !(await ensureLoaded('reward', 8000))) return 'unavailable';
    showing = true; slots.reward.loaded = false;
    window.SND.suspend();
    return new Promise(resolve => {
      waiters.reward = ok => { prepare('reward'); resolve(ok ? 'rewarded' : 'skipped'); };
      AdMob.showRewardVideoAd().catch(() => finish('reward', false));
    });
  }

  // 同意した内容をあとから変更するための Google のフォームを開く
  function showPrivacyOptions() {
    if (!AdMob) return Promise.resolve();
    return AdMob.showPrivacyOptionsForm().catch(() => {});
  }

  const initDone = AdMob ? init() : Promise.resolve();

  return {
    get available() { return !!AdMob; },
    get interstitialEnabled() { return !!(AdMob && ids.interstitial); },
    get rewardedEnabled() { return !!(AdMob && ids.rewarded); },
    get showing() { return showing; },
    get privacyOptionsRequired() { return privacyRequired; },
    initDone,
    showInterstitial,
    showRewarded,
    showPrivacyOptions,
    setBanner,
  };
})();
