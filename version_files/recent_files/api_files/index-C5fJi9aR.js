var _c = Object.defineProperty;
var fc = (t, n, s) => n in t ? _c(t, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: s
}) : t[n] = s;
var Jn = (t, n, s) => fc(t, typeof n != "symbol" ? n + "" : n, s);
import {
  j as e,
  r as A,
  R as ae
} from "./react-DjWS3H3h.js";
import {
  r as Ge,
  c as xc
} from "./react-dom-DCoj3sTC.js";
import {
  c as _e,
  a as G,
  b as zn,
  d as si,
  e as ln,
  i as ve,
  f as vc
} from "./@reduxjs-K2ahyHOo.js";
import {
  a as yc
} from "./axios-BdInfei4.js";
import "./yaml-Dy-SgT9h.js";
import "./vite-plugin-node-polyfills-BVIVvkCX.js";
import {
  d as Be
} from "./@ton-CABtnvlX.js";
import {
  u as c,
  a as _,
  s as wc,
  P as jc
} from "./react-redux-BljSBgeC.js";
import {
  c as F
} from "./classnames-D-x1NdaJ.js";
import {
  u as dn,
  a as bc,
  b as Nc,
  c as Gn,
  T as Cc,
  d as Ic
} from "./@tonconnect-C4go9-2N.js";
import {
  u as Ls,
  e as Hs,
  a as qs
} from "./@react-spring-BiYD2lL6.js";
import {
  C as Pc
} from "./centrifuge-B3TpHLNx.js";
import {
  d as Sc
} from "./fflate-DRb3BoOD.js";
import {
  u as te,
  S as Bc,
  a as ie,
  b as na
} from "./react-router-skDq-tWz.js";
import {
  c as on
} from "./chroma-js-CHvE9HB5.js";
import {
  m as Un,
  A as ai
} from "./framer-motion-BggZOsGS.js";
import {
  u as Le,
  T as va,
  i as Tc
} from "./react-i18next-DUbAQzaN.js";
import {
  l as Qt
} from "./react-range-COVt_hlT.js";
import {
  T as ya
} from "./tonweb-BaiZR3hJ.js";
import {
  B as Ec
} from "./react-router-dom-DSUFG-Qy.js";
import {
  i as kc
} from "./i18next-vSwsns86.js";
import "./@ledgerhq-BW4RAlPi.js";
import "./events-bk97flgb.js";
import "./semver-Og4YvWUh.js";
import "./lru-cache-3TXFCret.js";
import "./yallist-Ce8uAuvz.js";
import "./rxjs-D-QMI6lw.js";
import "./scheduler-CzFDRTuY.js";
import "./redux-DITMfSWq.js";
import "./immer-AZmEbvJU.js";
import "./reselect-BeKUwQU7.js";
import "./redux-thunk-ClJT1hhx.js";
import "./symbol.inspect-CD8uWkLQ.js";
import "./jssha-Dj0pk0Xq.js";
import "./tweetnacl-DeYMGiLl.js";
import "./ethjs-unit-bvdJTi0B.js";
import "./number-to-bn-VwIxN61R.js";
import "./strip-hex-prefix-DJeEoz3i.js";
import "./is-hex-prefixed-Chswt-_p.js";
import "./dataloader-7UOpijhF.js";
import "./zod-Dbq4cBMj.js";
import "./use-sync-external-store-BIcyVYYg.js";
import "./tweetnacl-util-B9eApQKV.js";
import "./ua-parser-js-9NRjnSWS.js";
import "./deepmerge-D9PnGD7j.js";
import "./@babel-OEIDM1DX.js";
import "./prop-types-DK12qZJk.js";
import "./history-COziRoqA.js";
import "./resolve-pathname-D6XOvX2q.js";
import "./tiny-invariant-BaFNuDhB.js";
import "./path-to-regexp-Bpkj8jjG.js";
import "./isarray-Dmh8zLWU.js";
import "./hoist-non-react-statics-DQogQWOa.js";
import "./html-parse-stringify-Cy9TkeAK.js";
import "./void-elements-CbcVFbPk.js";
import "./isomorphic-webcrypto-Cp7ugTe2.js";
(function() {
  const n = document.createElement("link").relList;
  if (n && n.supports && n.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) a(i);
  new MutationObserver(i => {
    for (const o of i)
      if (o.type === "childList")
        for (const r of o.addedNodes) r.tagName === "LINK" && r.rel === "modulepreload" && a(r)
  }).observe(document, {
    childList: !0,
    subtree: !0
  });

  function s(i) {
    const o = {};
    return i.integrity && (o.integrity = i.integrity), i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? o.credentials = "include" : i.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o
  }

  function a(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = s(i);
    fetch(i.href, o)
  }
})();
const Dc = "_stars_img_container_1wci0_1",
  Rc = "_stars_img_1wci0_1",
  Mc = "_scalebubble_1wci0_1",
  Uc = "_squads_img_1wci0_17",
  Qc = "_title_container_1wci0_22",
  Oc = "_description_container_1wci0_28",
  Fc = "_description_1wci0_28",
  zc = "_info_layout_1wci0_42",
  Gc = "_info_container_1wci0_52",
  Lc = "_info_row_1wci0_59",
  Hc = "_info_row_content_1wci0_65",
  qc = "_info_row_sale_1wci0_84",
  Yc = "_not_active_1wci0_100",
  Vc = "_selected_1wci0_105",
  Wc = "_row_icon_container_1wci0_110",
  Xc = "_row_icon_1wci0_110",
  Jc = "_row_title_1wci0_133",
  Zc = "_row_amount_1wci0_143",
  Kc = "_row_price_container_1wci0_156",
  $c = "_main_info_channel_users_1wci0_166",
  he = {
    stars_img_container: Dc,
    stars_img: Rc,
    scalebubble: Mc,
    squads_img: Uc,
    title_container: Qc,
    description_container: Oc,
    description: Fc,
    info_layout: zc,
    info_container: Gc,
    info_row: Lc,
    info_row_content: Hc,
    info_row_sale: qc,
    not_active: Yc,
    selected: Vc,
    row_icon_container: Wc,
    row_icon: Xc,
    row_title: Jc,
    row_amount: Zc,
    row_price_container: Kc,
    main_info_channel_users: $c
  },
  xo = Number(window.getComputedStyle(document.body).getPropertyValue("--header-height").replace("px", "")),
  p = {
    idle: "idle",
    pending: "pending",
    fulfilled: "fulfilled",
    rejected: "rejected"
  },
  E = {
    width: 1024,
    height: 1024,
    chunkSize: 750,
    chunkOrder: [6, 7, 11, 10, 9, 5, 1, 2, 3, 4, 8, 12, 16, 15, 14, 13]
  },
  wa = {
    bomb: "Dynamite",
    pumpkin: "Pumpkin",
    pixanos: "Pixanos"
  },
  el = 24 * 60 * 60 * 1e3,
  Bt = "https://t.me/notpixel/app",
  v = {
    addToHomeScreen: "addToHomeScreen",
    addEmoji: "addEmoji",
    adsgram: "adsgram",
    watchAd: "watchAd",
    invite1fren: "invite1fren",
    invite3frens: "invite3frens",
    jettonTask: "jettonTask",
    skinlabTask: "skinlabTask",
    limeTask: "limeTask",
    paint20pixels: "paint20pixels",
    pumpkin: "pumpkin",
    boink2: "boink2",
    joinSquad: "joinSquad",
    earnCoin: "earnCoin",
    earnCoin2: "earnCoin2",
    premium: "premium",
    leagueBonusSilver: "leagueBonusSilver",
    leagueBonusGold: "leagueBonusGold",
    leagueBonusPlatinum: "leagueBonusPlatinum",
    "x:notpixel": "x:notpixel",
    "x:notcoin": "x:notcoin",
    "channel:notpixel_channel": "channel:notpixel_channel",
    "channel:notcoin_pre_release": "channel:notcoin_pre_release",
    "channel:notcoin": "channel:notcoin",
    "channel:GameDevDead": "channel:GameDevDead",
    "channel:zaegd": "channel:zaegd",
    "channel:fakedonalds": "channel:fakedonalds",
    "channel:pushinton": "channel:pushinton",
    "channel:purego": "channel:purego",
    "channel:seinarukiro": "channel:seinarukiro",
    "channel:sscaleton": "channel:sscaleton",
    "channel:waketonup": "channel:waketonup",
    nikolai: "nikolai",
    boostChannelNotPixel: "boostChanNotPixel",
    boostChannelNotCoin: "boostChannelNotCoin",
    makePixelAvatar: "makePixelAvatar",
    pixelInNickname: "pixelInNickname",
    boinkTask: "boinkTask",
    unitsWallet: "unitsWallet",
    starHash: "starHash",
    utgardApp: "utgardApp",
    frogApp: "frogApp",
    tonPoker: "tonPoker",
    flappyBird: "flappyBird",
    hauntedSpace: "hauntedSpace",
    solitaireGame: "solitaireGame",
    tonDurakGame: "tonDurakGame",
    capsGame: "capsGame",
    duckChain: "duckChain",
    trmnl: "trmnl",
    stickerStore: "stickerStore",
    nerdGame: "nerdGame",
    openLeague: "openLeague",
    spendStars: "spendStars",
    checkCaptcha: "checkCaptcha",
    spendTokens: "spendTokens",
    sashaX: "sashaX",
    walletConnection: "walletConnection",
    walletVerification: "walletVerification",
    taskTypeCampaign1_74262: "taskTypeCampaign1_74262",
    taskTypeCampaign1_74264: "taskTypeCampaign1_74264",
    taskTypeCampaign2_74263: "taskTypeCampaign2_74263",
    taskTypeCampaign2_74265: "taskTypeCampaign2_74265",
    taskTypeCampaign4_74434: "taskTypeCampaign4_74434",
    taskTypeCampaign3_74388: "taskTypeCampaign3_74388",
    taskTypeCampaign6_74738: "taskTypeCampaign6_74738",
    taskTypeCampaign5_74739: "taskTypeCampaign5_74739"
  },
  ge = {
    paintReward: "paintReward",
    reChargeSpeed: "reChargeSpeed",
    energyLimit: "energyLimit"
  },
  tl = ["/transaction/user/start", "/repaint/finish", "/transaction/user/complete", "/stars/shop/process", "/mining/status/claim", "/mining/claim", "/mining/status/error", "/repaint/complete", "/stars/shop/reject", "/squads/list/get", "/squads/list/update"],
  Re = {
    my: "my",
    referred: "referred",
    world: "world"
  },
  It = "notgames_bot/squads",
  ii = "https://t.me/notpixel_42",
  Ha = "UQBv3exBKLmQcn2Fm6VlntAInW-je1YP4U59gJxaO62NCyMn",
  $e = {
    userFromPixelInfo: "userFromPixelInfo",
    squadFromData: "squadFromData",
    userFromRating: "userFromRating"
  },
  nl = "7.7",
  je = "unknown",
  Ut = {
    3: "EQAvlWFDxGF2lXm67y4yzC17wYKD9A0guwPkMs1gOsM__NOT",
    4: "EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs",
    5: "EQCvxJy4eG8hyHBFsZ7eePxrRsUQSFE_jpptRAYBmcG_DOGS",
    6: "EQDv-yr41_CZ2urg2gfegVfa44PDPjIK9F-MilEDKDUIhlwZ",
    7: "EQD-cvR0Nz6XAyRBvbhz-abTrRC6sI5tvHvvpeQraV9UAAD7",
    8: "EQB4zZusHsbU2vVTPqjhlokIOoiZhEdCMT703CWEzhTOo__X",
    9: "EQCuPm01HldiduQ55xaBF_1kaW_WAUy5DHey8suqzU_MAJOR"
  },
  sl = {
    friendsForTemplateCreation: 128
  },
  bt = {
    success: "success",
    neutral: "neutral",
    fail: "fail"
  },
  vo = {
    1: {
      templateThreshold: 512,
      templateSize: 32
    },
    2: {
      templateThreshold: 256,
      templateSize: 64
    },
    3: {
      templateThreshold: 128,
      templateSize: 64
    },
    4: {
      templateThreshold: 64,
      templateSize: 128
    },
    5: {
      templateThreshold: 32,
      templateSize: 128
    },
    6: {
      templateThreshold: 16,
      templateSize: 256
    },
    7: {
      templateThreshold: 8,
      templateSize: 256
    },
    8: {
      templateThreshold: 4,
      templateSize: 512
    },
    9: {
      templateThreshold: 2,
      templateSize: 512
    },
    10: {
      templateThreshold: 1,
      templateSize: 1024
    }
  },
  oi = "https://notpx.app/api/v1/",
  al = "https://image.notpx.app/api/v2/image";
let yo;
const il = t => {
    yo = t
  },
  P = yc.create({
    baseURL: oi
  });
P.interceptors.request.use(function(t) {
  var a;
  const s = (a = yo.getState().auth) == null ? void 0 : a.authData;
  return s ? t.headers.Authorization = `initData ${s}` : delete t.headers.Authorization, t
});
P.interceptors.request.use(function(t) {
  return tl.includes(t.url), t
});
P.interceptors.response.use(t => t, t => Promise.reject(t));
const Si = window.Telegram.WebApp.CloudStorage;
let wo = class {
  static warn() {
    console.log("Your telegram is too old")
  }
  static save() {
    this.warn()
  }
  static get() {
    this.warn()
  }
};
window.Telegram.WebApp.isVersionAtLeast("6.9") && (wo = class {
  static save(n, s, a = () => {}) {
    Si.setItem(n, s, a)
  }
  static get(n, s = () => {}) {
    Si.getItem(n, s)
  }
});
const un = wo,
  k = (t, n) => Math.floor(Math.random() * (n - t + 1) + t),
  ol = t => `${t.includes("@")?"":"@"}${t}`,
  Bi = t => t.replace("@", ""),
  Ln = (t, n = 18, s = !0) => t.slice(0, n) + (t.length > n && s ? "..." : ""),
  Tt = t => {
    window.Telegram.WebApp.openLink(t)
  },
  W = t => {
    window.Telegram.WebApp.openTelegramLink(t)
  },
  ri = () => {
    const t = "some_test_local_storage_key";
    try {
      return localStorage.setItem(t, t), localStorage.removeItem(t), !0
    } catch {
      return !1
    }
  },
  Hn = async t => {
    if (navigator.clipboard && window.isSecureContext) try {
      return await navigator.clipboard.writeText(t), Promise.resolve(!0)
    } catch (s) {
      console.log(s)
    }
    const n = document.createElement("textarea");
    n.value = t, n.style.position = "fixed", n.style.left = "-99999px", document.body.prepend(n), n.select();
    try {
      return document.execCommand("copy"), n.remove(), Promise.resolve(!0)
    } catch {
      return n.remove(), Promise.resolve(!1)
    }
  }, kn = t => new Promise(n => setTimeout(n, t)), rl = t => {
    if (!t || !t.x || !t.y || isNaN(t.x) || isNaN(t.y)) return !1;
    const n = Number(t.x),
      s = Number(t.y);
    return !(n < 0 || s < 0 || n >= E.width || s >= E.height)
  }, cl = () => {
    try {
      let t = window.Telegram.WebApp.initDataUnsafe.start_param;
      const n = {
        coords: !1,
        squadId: !1,
        refId: !1,
        showTemplate: !1
      };
      if (!t) return n;
      const s = t.split("_");
      for (let i = 0; i < s.length; i++) {
        let o = s[i],
          r = o[0];
        o = Number(o.substring(1)), !isNaN(o) && (r === "f" ? n.refId = o : r === "s" ? n.squadId = o : r === "x" || r === "y" ? (n.coords || (n.coords = {
          x: 0,
          y: 0
        }), n.coords[r] = o) : r === "t" && (n.showTemplate = !0))
      }
      return rl(n.coords) || (n.coords = !1), n.showTemplate && (n.coords = !1), n
    } catch {
      return {
        coords: !1,
        squad: !1,
        refId: !1,
        showTemplate: !1
      }
    }
  }, rn = t => {
    if (isNaN(t)) return "";
    let n = "";
    return t >= 1e3 ? (n += (t / 1e3).toFixed(1), n += "k") : n += t.toFixed(0), n
  }, ll = t => {
    if (isNaN(t)) return "0 min";
    const n = Math.ceil(t / 3600),
      s = Math.ceil(t % 3600 / 60);
    let a = "";
    return n > 0 ? a += `${n} hour${n!==1?"s":""} ` : a += `${s} min`, a
  }, dl = t => {
    if (isNaN(t)) return "0 min";
    let n = "";
    const s = Math.floor(t / 3600),
      a = Math.floor(t % 3600 / 60);
    return n += s, n += "h ", n += a > 9 ? a : `0${a}`, n += "m", n
  }, jo = t => !0, Ys = t => {
    if (!t) return "";
    if (t.length <= 6) return t;
    const n = t.slice(0, 3),
      s = t.slice(-3);
    return `${n}...${s}`
  }, ul = t => {
    try {
      return Be.Address.parse(t).toString({
        urlSafe: !0,
        bounceable: !0
      })
    } catch {
      return ""
    }
  }, ci = t => {
    try {
      return Be.Address.parse(t).toString({
        urlSafe: !0,
        bounceable: !1
      })
    } catch {
      return ""
    }
  }, et = ["#E46E6E", "#FFD635", "#7EED56", "#00CCC0", "#51E9F4", "#94B3FF", "#E4ABFF", "#FF99AA", "#FFB470", "#FFFFFF", "#BE0039", "#FF9600", "#00CC78", "#009EAA", "#3690EA", "#6A5CFF", "#B44AC0", "#FF3881", "#9C6926", "#898D90", "#6D001A", "#BF4300", "#00A368", "#00756F", "#2450A4", "#493AC1", "#811E9F", "#A00357", "#6D482F", "#000000"], Ti = et[k(0, et.length - 1)], ml = {
    active: Ti,
    id: btoa(Ti),
    latest: ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
    basic: et
  }, bo = _e({
    name: "color",
    initialState: ml,
    reducers: {
      addColor: (t, n) => {
        const s = t.latest.indexOf(n.payload),
          a = t.latest[0];
        s > -1 ? t.latest = [n.payload, ...t.latest.slice(0, s), ...t.latest.slice(s + 1, 10)] : t.latest = [n.payload, ...t.latest.slice(0, 7)], a !== n.payload && un.save("colors", JSON.stringify(t.latest))
      },
      setColors: (t, n) => {
        t.latest = n.payload
      },
      setActiveColor: (t, n) => {
        t.active = n.payload, t.id = btoa(n.payload)
      }
    }
  }), {
    addColor: Al,
    setColors: pl,
    setActiveColor: li
  } = bo.actions, hl = bo.reducer;
class X {
  static async getPrices() {
    return P.get("/image/prices")
  }
  static async getPixelInfo({
    id: n,
    signal: s
  }) {
    return P.get(`/image/get/${n}`, {
      signal: s
    })
  }
  static async getRevShareInfo() {
    return P.get("/users/me/revshare")
  }
  static async getUser() {
    return P.get("/users/me")
  }
  static async getStats() {
    return P.get("/users/stats")
  }
  static async getMoreStats() {
    return P.get("/history/stats")
  }
  static async getVerificatedWallet() {
    return P.get("/wallet/address")
  }
  static async checkCaptcha({
    wallet: n,
    captcha: s
  }) {
    return P.post("/wallet/ton-proof/check-captcha", {
      wallet: n,
      captcha: s
    })
  }
  static async checkHasCaptchaCode() {
    return P.get("/wallet/ton-proof/uncompleted-captcha")
  }
  static async getUserPixels({
    offset: n,
    limit: s
  }) {
    return P.get(`/users/mypixels?offset=${n}&limit=${s}`)
  }
  static async getUserPixelsSold({
    offset: n,
    limit: s
  }) {
    return P.get(`/users/mypixels/sold?offset=${n}&limit=${s}`)
  }
  static async getUserPixelsCount() {
    return P.get("/users/mypixels/count")
  }
  static async getPriceMask({
    price: n
  }) {
    let s = n === null ? "" : `/${n}`;
    return P.get(`/image/mask${s}`, {
      responseType: "arraybuffer",
      decompress: !0
    })
  }
  static async startRepaint({
    pixelId: n,
    newColor: s
  }) {
    return P.post("/repaint/start", {
      pixelId: n,
      newColor: s
    })
  }
  static async getHistory({
    offset: n,
    limit: s
  }) {
    return P.get(`/history/all?offset=${n}&limit=${s}`)
  }
  static async getPixanosRating() {
    return P.get("/ratings/pixanos")
  }
  static async buy({
    type: n,
    qty: s,
    pixanosColor: a
  }) {
    return P.post("/buy/stars", {
      type: n,
      qty: s,
      pixanosColor: a
    })
  }
  static async getProducts() {
    return P.get("/buy/list")
  }
  static async useProduct({
    pixelId: n,
    productId: s,
    color: a
  }) {
    return P.post("/repaint/special", {
      pixelId: n,
      type: s,
      color: a
    })
  }
  static async startTransaction({
    buyerWallet: n
  }) {
    return P.post("/transactions/start", {
      buyerWallet: n
    })
  }
  static async startShopTransaction({
    buyerWallet: n,
    goodId: s,
    daily: a = !1,
    currencyId: i,
    quantity: o,
    activeColor: r
  }) {
    let l = s === 13 ? et[k(0, 29)] : void 0;
    return r && et.includes(r) && (l = r), P.post("/transactions/start", {
      buyerWallet: n,
      goodId: s,
      daily: a,
      currencyId: i,
      quantity: o,
      pixanosColor: l
    })
  }
  static async putUserWallet({
    address: n
  }) {
    return P.put(`/users/wallet/${n}`)
  }
  static async getSquadInfo({
    id: n
  }) {
    return P.get(`/ratings/squads/${n}`)
  }
  static async checkSecret({
    key: n
  }) {
    return P.post("/mining/quest/check/secretWord", {
      secret_word: n
    })
  }
  static async getSecretStats() {
    return P.get("/mining/quest/stats ")
  }
  static async getDailyList() {
    return P.get("/daily/list")
  }
  static async getFirstDaily() {
    return P.get("/daily/free")
  }
  static async getRewards({
    userId: n
  }) {
    return P.get(`/users/rewards/${n}`)
  }
  static async getRewardById({
    rewardId: n
  }) {
    return P.get(`/users/rewards/distribution/${n}`)
  }
  static async claimRewardById({
    userId: n,
    rewardId: s
  }) {
    return P.post("/users/rewards/claim", {
      user_id: n,
      reward_user_id: s
    })
  }
  static async generateTonProofPayload() {
    return P.post("/wallet/ton-proof/generate-payload")
  }
  static async checkTonProof(n, s) {
    const a = {
      address: s.address,
      network: s.chain,
      proof: {
        ...n,
        state_init: s.walletStateInit
      }
    };
    return P.post("/wallet/ton-proof/check-proof", a)
  }
}
const gl = "/assets/icon_stars_new-Dk8ap_HZ.png",
  _l = "data:image/png;base64,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",
  fl = "data:image/png;base64,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",
  xl = "data:image/png;base64,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",
  vl = "data:image/png;base64,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",
  yl = "/assets/icon_anon-B5YvKg3f.png",
  wl = "/assets/icon_cati-mWXfw3xk.png",
  jl = "/assets/icon_x-DBD55XHy.png",
  bl = "/assets/icon_major-BvjI4Z5H.png",
  No = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAADDklEQVR4nO3dsWsTURzA8ZwUHMQudhGyiItWXISCKHYTNIKD4OLiLHQpqAi6OAiijoH+CU4OCtpBcGipg4jgUt0czGiXQpGCcM6p8fe4vtwl1+/3s75c07v78uBe7pKOJElCKvbudFmWrT4ORVHUugNlWf5zzNqkKIb//UNt3hnlMwA4A4AzADgDgDMAOAOAm8Q17UQXGtY2roXjixffNva//Eej58QZAM4A4AwAzgDgDADOAOAMAG6m6u6XL66H48XdN+F1fmr7lOevN8JX3F/fyvr7KVe7h8NXnJytfEiH9Dd3wuO3NH8kXCfob+5Uej9nADgDgDMAOAOAMwA4A4AzALj9fPY80ev8M4lmP/7aDccvzMXX8bnb939sh+NjWCdIvaTSOXUGgDMAOAOAMwA4A4AzADgDgBt1URpe57+6vZB1xFLX+W137mi8TvBlO15nSK0TpO5HWB3spp67GFoncAaAMwA4A4AzADgDgDMAOAOAq/zh9I2zx8Pxuj/P771/EG9/+Wk4nqv3cjnr/ZdOzIbj+fcTxMdvL2cAOAOAMwA4A4AzADgDgDMAuFH3kIefJ3++1Q2P2Iefv8Px1DpAb+VUrWfk3Z3vU/3+uesAVZ8bcAaAMwA4A4AzADgDgDMAOAOAy3tYfQKm/Tq+7vcfN2cAOAOAMwA4A4AzADgDgDMAuKlbB3h082s4nvqevrZv3zRnADgDgDMAOAOAMwA4A4AzALjG1wFyn68/6Nv3zz8Ox8fNGQDOAOAMAM4A4AwAzgDgDACu8e8HuLcyTz/mod6VT+G43w+gsTIAOAOAMwA4A4AzADgDgGv8foDc5+sP+vZNcwaAMwA4A4AzADgDgDMAOAOAG3U/QEp4v8CzS8fCzXN/NzD1fH3bt0/9XsDqIPm7gJXOqTMAnAHAGQCcAcAZAJwBwBkA3H7WAVLCdYKHp+Pfz6d78i1eB1jszoTnbG3wp9IRdAaAMwA4A4AzADgDgDMAOAOAq2MdICVcJ1Cz58QZAM4A4AwAzgDgDADOAOAMQJIkiabT6fwFAeCnZalTAZIAAAAASUVORK5CYII=",
  Co = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAABXdJREFUeJztnV+IVVUUxu9t9N4sshLJlEntLSptnIcgoRF7GANn6MEnBxRCiP48Rr1EPgS9CBHkQ4kRPli9F0PTGElCKYjjH3QEBxFmrg53YJwgU+6E3F4KWuvYXne5z/bc4/f93tY9+5y97+VjrbX3XmffSoUQQgghhBBCCCEoVIseQCztdrvtaV+tVkv9na3v6/1+D8QNh5QdCgAcCgCcJUUPIG90DPTmCGjQA4BDAYBDAYATnQPExti85+Wx4+n2nCHv34seABwKABwKAJzc1wE+3bFD2KeuXBP24YnjufaXem2/6K2D1CkJPQA4FAA4FAA4991egBfvvD/TfPKVqP4XJy4Ju77ratTzvNADgEMBgEMBgFN4DqBjcNE1e7r7vOfhVsyP7c/7e9IDgEMBgEMBgBMdb615tHdvIHUO0EFdvW4vGzjn/aljfuzvRQ8ADgUADgUATvQ6QNnr8FPP+621fW8Iz3t89ADgUADgUADgFL4XkJronCRyv799Yav84Nmfg+0XD/cKO3V9AD0AOBQAOBQAOPd9DqBJPe83UTlF6r0CC3oAcCgAcCgAcLouB7jX5w3kXX6QmfcrYmM+zwcguUIBgEMBgJO8JlBj1QhOPtIXvP/0sS90/57uo/HWDHZbzNfQA4BDAYBDAYDjXgfw1tW/8e4hYT9jPP+jD94KN1DX+7dIu+gcodtjvoYeABwKABwKAJw83gsQto75w4ObhD114Lvg8/Z+/Lmrf50z7DXG580JrPutGr5ui/kaegBwKABwKABw3PHnDmfQiOvf/3hW2Dqm71o5J2y9F/D1iVPB/vfV5Tz/24GTwtY5wfC2F4Sddw5QeI2hgv8bSFxQAOBQAODkngPMNGUMXL4mrLFlX0q7NqKWJo4susa3b+grYb9f2SPsDublwfbJzxOoL3O1b7VuBa/znEAShAIAhwIAJ/k6wKuDzwn75pKlwtY5gKZnt4yxPT+EY257XMXsz6TGvTlA5vmRMd+K8a33BoLXZ3/9Sdjrf6vJ+505AT0AOBQAOBQAOMlzAI3OCSzGxi8Erw+NbhD23EG517Dq1pPCTr1W743xOqZ7OdpcLezXL8/L/lROwByACCgAcCgAcJKfD9DXt1HYY+PnXPc3rl0X9vzvN4T94sFVdzewu8SK8Wt7nxf21M4Vwo6N+XlDDwAOBQAOBQDOPT8jaGhwY/B6Y05/InMGnQNoPnx7TH7wSYcD+wcrxm/esN31vK1qOI2FfmEfWzsRvF/P8yeur/iflv8yb1yX0AOAQwGAQwGAk8kByvafP15i1+pH/ojrv/fxdcI+2pwVth3jJfsXpqLGQw8ADgUADgUATqYeQOcAo0/L/fuXZy4GH/jobZlC6PoAvTdgceaMXAc4Ozkt7OmGnPce2v9m8Hl578drBqb77Ub/4bU/W8HrVoy3agA1rAcgAgoAHAoAHHMvYPuVcE1edTR8//A237t02b2AMDrme+vqY9Fr9V5Sx3gLegBwKABwKABwMjmAjiF6XWDuoaZoL61KZeUNWYff05LvAuZ9LF6t9mC4wchfwlw9skXYs+/8ErzdvR//sDSnG+eDzVPHeAt6AHAoAHAoAHDcNYFP3LTq8OU8vy1fX69UW+oDJ83HZoT91O31wfb1TceF3Tr9krD9NXeSzDx+QZpFx3gLegBwKABwKABwzBwgNibpdYR2LXzuX/XA5uD1TA5Sdw7oG7kuYcX8otfqU0MPAA4FAA4FAE7h8Sjv9xC8Z+1alD3GW9ADgEMBgEMBgFOqeNUJOqfQOYE3pluULeZr6AHAoQDAoQDAKXX8uhPWukLsOoF19m7ZoAcAhwIAhwIAp9TxqxNSn3nEHICUGgoAHAoAnL8BF6DwHlKpItgAAAAASUVORK5CYII=",
  Io = "data:image/png;base64,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",
  Po = "data:image/png;base64,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",
  mn = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACABAMAAAAxEHz4AAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAABhQTFRFR3BM////+8sH4qsEoJDhMJjTe2y0AAAAichSjAAAAAF0Uk5TAEDm2GYAAADISURBVHja7dkxCsJAEIXhdNZeYRDtkxMIQzzB4gVkbCUK7/oOrEZHgq2z8v7mscV+TaqwHWMsa6hNIoKQiOx8CKQHVgCGWl+BaWlAIC8A4DqEHl/+YypyIUCAQCtAL3MEGgVEZGtmmLupqohsfOARSA+IZ2YnVfU5AyilHH1U9VBPhUATgKqOZlavPHs7EUgOeBXZ6JcINAisQwTSA4h/rqq69ysEmgGi8wJGM4tD4J+BGGqLALzOI5AeiE6s8wj8GuAjEmNZuwMoowLyPmOZ5gAAAABJRU5ErkJggg==";
G("main/startTransaction", async ({
  pixelId: t,
  newColor: n,
  buyerWallet: s
}) => (await X.startTransaction({
  pixelId: t,
  newColor: n,
  buyerWallet: s
})).data);
const Nl = {
    show: !1,
    activeProductCardId: 1,
    amount: 1,
    products: {
      1: {
        id: 1,
        name: "Restoring",
        description: "Instantly restore charges for painting.",
        image_url: "https://npx-cdn.fra1.digitaloceanspaces.com/icons/icon_lightning.png",
        price: 32,
        prices: [{
          currency_id: 1,
          currency_name: "XTR",
          price: 32
        }, {
          currency_id: 2,
          currency_name: "TON",
          price: .06
        }, {
          currency_id: 3,
          currency_name: "NOT",
          price: 50
        }, {
          currency_id: 4,
          currency_name: "USDT",
          price: .35
        }, {
          currency_id: 5,
          currency_name: "DOGS",
          price: 600
        }, {
          currency_id: 6,
          currency_name: "ANON",
          price: 100
        }, {
          currency_id: 7,
          currency_name: "CATI",
          price: .8
        }, {
          currency_id: 8,
          currency_name: "X",
          price: 1900
        }, {
          currency_id: 9,
          currency_name: "Major",
          price: .5
        }],
        currency: "XTR",
        isOnePiece: !1
      },
      2: {
        id: 2,
        name: "Dynamite",
        description: "A 5x5 blast. You get pixels.",
        image_url: "https://npx-cdn.fra1.digitaloceanspaces.com/icons/icon_tnt.png",
        price: 64,
        prices: [{
          currency_id: 1,
          currency_name: "XTR",
          price: 64
        }, {
          currency_id: 2,
          currency_name: "TON",
          price: .12
        }, {
          currency_id: 3,
          currency_name: "NOT",
          price: 100
        }, {
          currency_id: 4,
          currency_name: "USDT",
          price: .7
        }, {
          currency_id: 5,
          currency_name: "DOGS",
          price: 1200
        }, {
          currency_id: 6,
          currency_name: "ANON",
          price: 200
        }, {
          currency_id: 7,
          currency_name: "CATI",
          price: 1.6
        }, {
          currency_id: 8,
          currency_name: "X",
          price: 3800
        }, {
          currency_id: 9,
          currency_name: "Major",
          price: 1
        }],
        currency: "XTR",
        isOnePiece: !1
      },
      13: {
        id: 13,
        name: "Pixanos' Snap",
        description: "Discolor ½ of the world. Your name will appear in History. No reward, just fun.",
        image_url: mn,
        price: 99e3,
        prices: [{
          currency_id: 1,
          currency_name: "XTR",
          price: 99e3
        }, {
          currency_id: 2,
          currency_name: "TON",
          price: 210
        }, {
          currency_id: 3,
          currency_name: "NOT",
          price: 15e4
        }, {
          currency_id: 4,
          currency_name: "USDT",
          price: 600
        }, {
          currency_id: 6,
          currency_name: "ANON",
          price: 3e5
        }, {
          currency_id: 7,
          currency_name: "CATI",
          price: 3e3
        }, {
          currency_id: 9,
          currency_name: "Major",
          price: 1200
        }],
        currency: "XTR",
        isOnePiece: !0
      },
      4: {
        id: 4,
        name: "Pipette",
        description: "Copy color from any pixel.",
        image_url: "https://npx-cdn.fra1.cdn.digitaloceanspaces.com/icons/icon_pipette.png",
        price: 256,
        prices: [{
          currency_id: 1,
          currency_name: "XTR",
          price: 256
        }, {
          currency_id: 2,
          currency_name: "TON",
          price: .4
        }, {
          currency_id: 3,
          currency_name: "NOT",
          price: 360
        }, {
          currency_id: 4,
          currency_name: "USDT",
          price: 2.8
        }, {
          currency_id: 5,
          currency_name: "DOGS",
          price: 4800
        }, {
          currency_id: 6,
          currency_name: "ANON",
          price: 720
        }, {
          currency_id: 7,
          currency_name: "CATI",
          price: 5.6
        }, {
          currency_id: 8,
          currency_name: "X",
          price: 16800
        }, {
          currency_id: 9,
          currency_name: "Major",
          price: 3.2
        }],
        currency: "XTR",
        isOnePiece: !0
      },
      5: {
        id: 5,
        name: "Fast mode",
        description: "Paint pixels with a single touch.",
        image_url: "https://npx-cdn.fra1.cdn.digitaloceanspaces.com/icons/icon_fastmode.png",
        price: 128,
        prices: [{
          currency_id: 1,
          currency_name: "XTR",
          price: 1e5
        }, {
          currency_id: 2,
          currency_name: "TON",
          price: 1e5
        }, {
          currency_id: 3,
          currency_name: "NOT",
          price: 1e5
        }, {
          currency_id: 4,
          currency_name: "USDT",
          price: 1e5
        }, {
          currency_id: 5,
          currency_name: "DOGS",
          price: 1e5
        }],
        currency: "XTR",
        isOnePiece: !0
      },
      6: {
        id: 6,
        name: "Paint Can",
        description: "A 3×3 color spot. You get pixels.",
        image_url: "https://npx-cdn.fra1.cdn.digitaloceanspaces.com/icons/icon_paintcan.png",
        price: 32,
        prices: [{
          currency_id: 1,
          currency_name: "XTR",
          price: 32
        }, {
          currency_id: 2,
          currency_name: "TON",
          price: .06
        }, {
          currency_id: 3,
          currency_name: "NOT",
          price: 50
        }, {
          currency_id: 4,
          currency_name: "USDT",
          price: .35
        }, {
          currency_id: 5,
          currency_name: "DOGS",
          price: 600
        }, {
          currency_id: 6,
          currency_name: "ANON",
          price: 100
        }, {
          currency_id: 7,
          currency_name: "CATI",
          price: .8
        }, {
          currency_id: 8,
          currency_name: "X",
          price: 1900
        }, {
          currency_id: 9,
          currency_name: "Major",
          price: .5
        }],
        currency: "XTR",
        isOnePiece: !1
      },
      7: {
        id: 7,
        name: "Pumpkin",
        description: "A 7x7 pumpkin blast! You get pixels. Boo! Boo! Boo! Pumpkin soup canvas.",
        image_url: No,
        price: 16,
        prices: [{
          currency_id: 1,
          currency_name: "XTR",
          price: 16
        }, {
          currency_id: 2,
          currency_name: "TON",
          price: .04
        }, {
          currency_id: 3,
          currency_name: "NOT",
          price: 25
        }, {
          currency_id: 4,
          currency_name: "USDT",
          price: 20
        }, {
          currency_id: 5,
          currency_name: "DOGS",
          price: 250
        }],
        currency: "XTR",
        isOnePiece: !1
      },
      9: {
        id: 9,
        name: "1x pack",
        description: "1 dynamite, 1 paint can, 1 restore",
        image_url: Co,
        price: 96,
        prices: [{
          currency_id: 1,
          currency_name: "XTR",
          price: 192
        }, {
          currency_id: 2,
          currency_name: "TON",
          price: .3
        }, {
          currency_id: 3,
          currency_name: "NOT",
          price: 270
        }, {
          currency_id: 4,
          currency_name: "USDT",
          price: 2.1
        }, {
          currency_id: 5,
          currency_name: "DOGS",
          price: 3600
        }, {
          currency_id: 6,
          currency_name: "ANON",
          price: 540
        }, {
          currency_id: 7,
          currency_name: "CATI",
          price: 4.2
        }, {
          currency_id: 8,
          currency_name: "X",
          price: 12600
        }, {
          currency_id: 9,
          currency_name: "Major",
          price: 2.4
        }],
        currency: "XTR",
        isOnePiece: !0
      },
      10: {
        id: 10,
        name: "2x pack",
        description: "2 dynamite, 2 paint can, 2 restore",
        image_url: Io,
        price: 160,
        prices: [{
          currency_id: 1,
          currency_name: "XTR",
          price: 320
        }, {
          currency_id: 2,
          currency_name: "TON",
          price: .5
        }, {
          currency_id: 3,
          currency_name: "NOT",
          price: 450
        }, {
          currency_id: 4,
          currency_name: "USDT",
          price: 3.5
        }, {
          currency_id: 5,
          currency_name: "DOGS",
          price: 6e3
        }, {
          currency_id: 6,
          currency_name: "ANON",
          price: 900
        }, {
          currency_id: 7,
          currency_name: "CATI",
          price: 7
        }, {
          currency_id: 8,
          currency_name: "X",
          price: 21e3
        }, {
          currency_id: 9,
          currency_name: "Major",
          price: 4
        }],
        currency: "XTR",
        isOnePiece: !0
      },
      11: {
        id: 11,
        name: "3x pack",
        description: "3 dynamite, 3 paint can, 3 restore",
        image_url: Po,
        price: 256,
        prices: [{
          currency_id: 1,
          currency_name: "XTR",
          price: 512
        }, {
          currency_id: 2,
          currency_name: "TON",
          price: .8
        }, {
          currency_id: 3,
          currency_name: "NOT",
          price: 720
        }, {
          currency_id: 4,
          currency_name: "USDT",
          price: 5.6
        }, {
          currency_id: 5,
          currency_name: "DOGS",
          price: 9600
        }, {
          currency_id: 6,
          currency_name: "ANON",
          price: 1440
        }, {
          currency_id: 7,
          currency_name: "CATI",
          price: 11.2
        }, {
          currency_id: 8,
          currency_name: "X",
          price: 33600
        }, {
          currency_id: 9,
          currency_name: "Major",
          price: 6.4
        }],
        currency: "XTR",
        isOnePiece: !0
      }
    },
    available: {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
      9: 0,
      10: 0
    },
    getProductsStatus: p.idle,
    useProductStatus: p.idle,
    order: [1, 2, 6, 13, 4],
    selectedCurrency: 1,
    crypto: [{
      currency_id: 1,
      name: "Stars",
      image: gl
    }, {
      currency_id: 2,
      name: "TON",
      image: _l
    }, {
      currency_id: 3,
      name: "NOT",
      image: fl,
      master: Ut[3]
    }, {
      currency_id: 4,
      name: "USDT",
      image: vl
    }, {
      currency_id: 5,
      name: "DOGS",
      image: xl,
      master: Ut[5]
    }, {
      currency_id: 6,
      name: "ANON",
      image: yl,
      master: Ut[6]
    }, {
      currency_id: 7,
      name: "CATI",
      image: wl,
      master: Ut[7]
    }, {
      currency_id: 8,
      name: "X",
      image: jl,
      master: Ut[8]
    }, {
      currency_id: 9,
      name: "MAJOR",
      image: bl,
      master: Ut[9]
    }],
    limitedGood: null,
    limitedEnd: null,
    showLimitedGoodPopup: !1
  },
  is = G("shop/getProducts", async () => (await X.getProducts()).data),
  os = G("shop/useProduct", async ({
    pixelId: t,
    productId: n,
    color: s
  }) => (await X.useProduct({
    pixelId: t,
    productId: n,
    color: s
  })).data),
  So = _e({
    name: "shop",
    initialState: Nl,
    reducers: {
      setProductCard: (t, n) => {
        t.activeProductCardId = n.payload
      },
      showProductCard: (t, n) => {
        t.show = !0
      },
      hideProductCard: t => {
        t.show = !1
      },
      increaseAmount: t => {
        t.amount += 1
      },
      decreaseAmount: t => {
        t.amount > 1 && (t.amount -= 1)
      },
      setAmount: (t, n) => {
        t.amount = n.payload
      },
      setAvailable: (t, n) => {
        t.available = {
          ...t.available,
          ...n.payload
        }
      },
      addAvailable: (t, n) => {
        t.available[n.payload.product] += n.payload.amount
      },
      subAvailable: (t, n) => {
        t.available[n.payload.product] -= n.payload.amount
      },
      setSelectedCurrency: (t, n) => {
        t.selectedCurrency = n.payload
      },
      setLimitedGoods: (t, n) => {
        t.limitedGood = n.payload.good, t.limitedEnd = n.payload.end
      },
      clearLimitedGoods: t => {
        t.limitedGood = null, t.limitedEnd = null
      },
      showLimitedGoodsPopup: t => {
        t.showLimitedGoodPopup = !0
      },
      hideLimitedGoodsPopup: t => {
        t.showLimitedGoodPopup = !1
      }
    },
    extraReducers: t => {
      t.addCase(is.pending, n => {
        n.getProductsStatus = p.pending
      }).addCase(is.fulfilled, (n, s) => {
        s.payload.goodsAvailable.forEach(a => {
          n.products[a.id] = {
            ...n.products[a.id],
            ...a
          }
        }), n.getProductsStatus = p.fulfilled
      }).addCase(is.rejected, n => {
        n.getProductsStatus = p.rejected
      }).addCase(os.pending, n => {
        n.useProductStatus = p.pending
      }).addCase(os.fulfilled, (n, s) => {
        n.useProductStatus = p.fulfilled
      }).addCase(os.rejected, n => {
        n.useProductStatus = p.rejected
      })
    }
  }),
  {
    setProductCard: ot,
    showProductCard: rt,
    hideProductCard: di,
    increaseAmount: qM,
    decreaseAmount: YM,
    setAmount: sa,
    setAvailable: Cl,
    addAvailable: an,
    subAvailable: aa,
    setSelectedCurrency: Qn,
    setLimitedGoods: VM,
    clearLimitedGoods: WM,
    showLimitedGoodsPopup: Il,
    hideLimitedGoodsPopup: XM
  } = So.actions,
  ia = t => t.shop.crypto,
  Pl = So.reducer,
  oa = {
    getProducts: is,
    useProduct: os
  },
  An = ({
    fontSize: t = 18,
    className: n = "",
    style: s = {}
  }) => e.jsx("span", {
    className: `telegram_icons ${n}`,
    style: {
      fontSize: t,
      ...s
    },
    children: ""
  }),
  Sl = () => {
    const t = c(s => s.shop.selectedCurrency),
      n = c(s => s.shop.crypto).filter(s => s.currency_id === t)[0];
    return t === 1 ? e.jsx("span", {
      style: {
        paddingRight: 4,
        marginBottom: -4
      },
      children: e.jsx(An, {
        fontSize: 14
      })
    }) : e.jsx("img", {
      alt: "image",
      style: {
        width: 16,
        height: 16,
        paddingRight: 6,
        marginBottom: 1
      },
      src: n.image
    })
  },
  Ze = ({
    num: t
  }) => isNaN(t) ? null : new Intl.NumberFormat("ru-RU").format(t),
  Bo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACABAMAAAAxEHz4AAAAIVBMVEVHcEzv7++7trv/sQAAxvb+XTUAieJkY2UaWbc9OGcbGx4WugEBAAAAAXRSTlMAQObYZgAAAM1JREFUeNrt2c0JxSAQBOC0YAu2YAu2YAu2YAu2YAtW+Rh4gUE0Iddh9rLBON9pwfxca8055/WhDOgBCJdSygmZ/zKgDaCewrXWmnPOuDagCpwxDqN67x1rBnQBDmMzh9ERHmMMA5rATrzD6LuwAS0ACymlhM5rrbWGjiA6hw3oAag1HGOMfLDwYWJAF+BwCCGg80DxIBlQBd7DPGwGVIH38LrXgBLwPcwfqwxoAfxAsQufBsmAFsDIGj5BBrSAFUHtXkgNSAD+B2vg6f4Pseby+y+jC6sAAAAASUVORK5CYII=",
  To = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACABAMAAAAxEHz4AAAAFVBMVEVHcEz/3Jr/6ADjygD/AAC5AAAAAAB/sfDAAAAAAXRSTlMAQObYZgAAAJJJREFUeNrt2bEJBCEQQNFrYVqwhWnBFq6F338Jx4IiyIG76ez/iRjMiwyE+Zj9i0MC9QGA7yEAgarAGu6HJiJQHTgnICAgIFAbAHgGrARqAACZmROIiAC4zt573+8TaK01gWLA6O5DyswUqAVcMXoCzGGBCsBqAjGCVYz2D4ZAbWBP4EXA6AQACJQB3LEImO39AJS0GBsvGYIKAAAAAElFTkSuQmCC",
  Eo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAABVQTFRFR3BM/////2U1/z4F3SwBrB4AAAAAkQwbPgAAAAF0Uk5TAEDm2GYAAAEVSURBVHja7dvBDsIgEEVRZbD//8nGQjKlY6aMGMrivuDC14BHxIUmfRBCFss2IQAAAHBfOU2IOi4B8hmSTJzSmR8FaGSsTDIAiO6A38YBksYi8TNgMrgDKboDE7bABcietA+RXNO2sdK2PkBzWkATKE0LAAAAAAAAAAAAAMAl4DkhAAAA6AFsbcxFa+2ZDwAAABfgrGramEpbAAAA/BnQPgMAAMBNAA0AAADc+fw6BgBgMQD/FQMAAAAAAAAAAAAA4AJyk1dN28ZK214ApIx2gdqVR7jUVjoAGtEFikdZgVLbEuncgfM7OKwcLLWtF345A3JcIly+DijpOwNfP8Nc60CprfZ5lW8Bd9kAAHAfgNtKCVksb9I6sf1BNvNjAAAAAElFTkSuQmCC",
  Bl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAAp1JREFUeJzt3bFq21AUh3E7lJrMnbp1LXmDDskDZSx5CtOpZMybdGmgGbOFQKdufoAMwV7cWcfgy0X3Slf3+36bkCIJ8ufcoyMbr1aSJEmSJEmSJKln67lvoHXH4/E45fXW6/Wk/5OLKS+m9hgAOAMA92HuG2hNas3fbC6LXm+/fy96vlxWADgDAGcA4LrvAcY+x8c1f+yaXbqHGMsKAGcA4AwAXHc9QO3n+NTfj+0R4v3XfjdgBYAzAHAGAK67HiDX/u767P7N9nGw/e/b4fzxiblB3E4dX7snsALAGQA4AwDXfQ9wssaGNX/359dg+/P9zfAE29XZ/bvb3+NuMCj97iHFCgBnAOAMANzie4DSn9s/PP8dbL89fCp5+hN+JlCzMgBwBgBu8d8NjD1A7nP/WF+ePg6vl1jTp/7uX4oVAM4AwBkAuMXPAUr78Xp1dv/3ry9Z52ttzY+sAHAGAM4AwC2uB8id/Zd+7u+NFQDOAMAZALjF9QDR2Nl/6rk/yp39t84KAGcA4AwA3OJ7gNri7P9n6AGi1mf/kRUAzgDAGQC45nsAZ/91WQHgDACcAYBrvgeInP2XZQWAMwBwBgBucT1Abb3P/iMrAJwBgDMAcM31AM7+p2UFgDMAcAYArrkeIHL2X5cVAM4AwBkAuOZ7gNpos//ICgBnAOAMANzsPYCz/3lZAeAMAJwBgJu9B4ic/U/LCgBnAOAMAFxzPUBt9Nl/ZAWAMwBwBgCu+R7A2X9dVgA4AwBnAOCa7wHibD/3d/vi8fTZf2QFgDMAcAYArrkeIK7J8fMBq8z3/bl6n/1HVgA4AwBnAOBmX+9yvxdw0hNkSj332wMIxQDAGQC45te73B4hF23Nj6wAcAYAzgBIkiRJkiRJkiR17D/jkLq5vlfVpgAAAABJRU5ErkJggg==",
  Tl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAA39JREFUeJzt3LFrFEEUx/FdUS8RUlwpLNFGIYiFpjJFQCytbNPG1ipa+wdEq2ut06cQLLQRPBvFQkVIGpWAjZDCIhyCa5v3zuxkvL3bmft9P93cXnYn5Jc3b2ePKwoAAAAAAKCi7HoCqanrup7l9cqy7PRvcKbLi6N7BEAcARB3tusJdC205vd6i61ebzQ6avV8k6ICiCMA4giAOLkeIHbNT23NbhsVQBwBEEcAxGX3LKDtvfppr/ld7/WHUAHEEQBxBEBc8vsAbe/Vx67xk57fzz+1noAKII4AiCMA4pLrAaL36h+tR50/tKa3ff7UewIqgDgCII4AiEuuB/CCa/LGb/v+G2/bvf7268bjow+37Liw80v98wVUAHEEQBwBEJd8DxDLr8ljds6ZoV/jQz3GvKECiCMA4giAuPx7ALemh4Tu68d6giLuWcCPNy/dK+ejfn7WqADiCIA4AiAu+x7Ar7mvfv4x4829BTP29/mhfQB//EH/SuN8tlYaDyeHCiCOAIgjAOKy7wG80Jo/tre/XTQeH3u+H9kTpI4KII4AiCMA4uauB4gV/PzAnKMCiCMA4giAOL0eIPLzA7k9349FBRBHAMQRAHFyPYBf059+udb4/tye78eiAogjAOIIgLjseoDbL5bMeGfphDd2ZP37TffKp07mcVpUAHEEQBwBEJddD+Bt/LpnxsvVt6leb+36XTPePZzu9aaNCiCOAIgjAOKy7wFC/L5BUdieoajs8MCt6bvuvr7qtzSxRFABxBEAcQRAHAEQRwDEEQBxBEAcARBHAMQRAHEEQFx2zwJWD/bM+H11taOZ/NvjC+/MeLNYOOGdaaACiCMA4giAuOx6gCf3L5rxw2e2Jxge7ptx1b/U6vWHH5+bsf+ewDvL7n/KTi85VABxBEAcARCXXQ/gba18NuPB0H6Hj983CFkNHB9EnS19VABxBEAcARCXfQ8Q4vcN4r8jqLnHyB0VQBwBEEcAxBEAcQRAHAEQRwDEJb8PMBodmXGvt2jGX9dmOZuwy26fwM8/NVQAcQRAHAEQl1wPUJZleXxc13V9fBzqCWZt4D6DGFrz/e/XNSqAOAIgjgCIS64H8GJ7Am/SfYNJ7+tTW/M9KoA4AiCOAIhLen36H75H8GL3DXK7r49FBRBHAMQRAHFZr1+nEeoJYuW+5ntUAHEEQBwBAAAAEPQXKwzH8ovgV5cAAAAASUVORK5CYII=",
  El = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAABXtJREFUeJztnU+IV1UUx9+INDrgYsLAkfGnBZqgQ4muXCTjIkSFaBNks2qgTUQQE0SbzI2KuhBp509QyxAXImgM6hgKJpGVUWk6+Scd/AU5zmJwnN8IjgtX5zznHg/3Xn+//H4/u/Pe+937hvlyznnn/isKQgghhBBCCCGEoNCSu4PJycnJnO23tLRk/xueZ6Y1+gVIY6EAwKEAwEkeP62Y39o6M6r9ev1+8D5zAh/0AOBQAOBQAOBM9/7A+12vY3510biwew52C3vilyvC/rzvxWB7OifIXXdodrw5ED0AOBQAOBQAOGYOkPu7vm/1HXVFxvzXX/pd3h6Z4erfqhvEvn+jsf4+C3oAcCgAcCgAcNx1gNJ3+KdvyAc2PBCm9V2//dRs4/ku2d+v1vO+uoFmy/q1wfs/X78t7K17PxH2rWv/BH9/+eIlYZ84dFHYy1+eG/z9Z0e/C973Qg8ADgUADgUAjlk31nUAKweonT0p7IE7D4PtX/ivK3jfi64b9F6RdQOdA6SuA1w7v0/YJ4/2C/uDjQeS9qf/Ho4FEBcUADgUADjuOkAsPW+9KW2jbjBcrQl7x6UlSd8ntpaee45jbugBwKEAwKEAwInOARZ+e1fYZyq+39c+PC1sq25g8eXYCnXlj6j2/m/ouo1VF6AHAIcCAIcCACd5HWDD6NvCHhqT4+M9ke3vGhkUdqVzaWSLYXLPGUzdvreuQA8ADgUADgUATikHyL22rrt/lroSzhnK5P2u1zF5fLh/iiefzI8DPwXve9vTDGzaLOx1O09P8eTTQQ8ADgUADgUAzvTYtX+D78p5+N1xIS6aL9rOC7u3mDHFk4+xYv7Y9b9d/Xe90q7slVHtndt/yPW8F3oAcCgAcCgAcEp1AGstnZUTHJh1WNgDdTm+Xy3mu15Q81H7QnnhXl3abVHNF1eP7Bf2jd+GhL3gtc64DhS527egBwCHAgCHAgDnma8L+H7NqLBLawnrxlrCe2nXEsay5P1vXM//uee9TG/yZObMe1XUef69dVnMEaQHAIcCAIcCAOeZ5wCNJvccPx3jvTmChXf8v3bzL2F3VBaLnIAeABwKABwKAJyGrw1MjbU2MPceQaljvubYx6uErXMCayxH5wT0AOBQAOBQAOAkrwMs+OGF4P3ebWfUlfDzZQbDt0fCt62Y3+y1fQsrx9H36QHAoQDAoQDAyT4WoPcS1nUDC73uwEvu/lpVzqC/05sdegBwKABwKABwonOAm0Oy1n5j5YSw9X4Ane16fwCJXldQO+t7H71HUer+Or5SMX7bU79aEnTtn+cGkigoAHAoAHBKOUDq8fKhEWvPH4m1LsDsz9xjKK6/d9R5Bhodo2PHClLHfA09ADgUADgUADilveS9ewbpWn95H8Aweq2gl9z9fX3kuLD1OYf6nEKNPrfQizfme89KpgcAhwIAhwIAp1QH0GfMWDmBXt+v9/61KP/eS9r+dK3/wm4Z87efmi3svtXh+73Lzgm70ecE6v8vPQA4FAA4FAA40fMB9Dl/uWvxmtT9lWv9co5gq4rpml3LjHULifF+92voAcChAMChAMCB2yPIYrhaU1dkDqD3KtZjAXqsQJ9z6MWaj2HFfJ4dTIJQAOBQAOAE40NR+OcH6BjpjYGl8wCc5O5P1/qtukDsHEvvd31HZbGw9d7AGnoAcCgAcCgAcMw6gHd+gKbSudT3RvoMICe5+5sw1gVYMTv1fABvzNfQA4BDAYBDAYDjihdF4a8LVBeNC7u8l28YfRawl9T9WbV+HeN1jE6NN+Zr6AHAoQDAoQDAiYofRVHOCXKfydNsxI7HNxp6AHAoAHAoAHCS5wDoNHvM19ADgEMBgEMBEEIIIYQQQgghhIDwCOGz0zOqwEkRAAAAAElFTkSuQmCC",
  kl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAAw1JREFUeJzt3b9rFEEYxvG7ICYGbASLQCB/gAgp7AKCIGInVkJIl3S2Z2MjloF0tpZX2aWzEIJFuiABu6QKRFKkSBGInBZnPe/JLG9mbmdnn++nm/sxuwkP7/tmudwOBgAAAAAAAAAAAAAAAAAAoA+GpU8gt+l0Op3n/sPhsFe/s4XSJ4CyCIA4AiCu8/0stacvLt5LOv5k8jvp/V2fGagA4giAOAIg7k7bB2y7p0/ePQ0f2PwbLP/8OAnWX3Z/pR3PzAzen7ftmYEKII4AiCMA4pL7TW09/fjycXT/vZ2VpP23T5ai+1ulrzNQAcQRAHEEQJy7fzT1/L719NpmBu9MQAUQRwDEEQBxyTOA7fnqPT33/u9HD4L1p6vTYG1nAmYAuBAAcQRA3NxngIvDb9H9Vjaehw+I9fT1hz+j+9vjMwMgKwIgjgCIa/0zgU0u3n6PPr/16kW4bui5492wxx5/tj097Ml7O49c+49G4W7r+/Gebo9XGhVAHAEQRwDEdW4G8Mo9M9Te072oAOIIgDgCIK76GcBr/Oag4RV193QvKoA4AiCOAIjLPgM8+3rfPPI6WJ1fnQXr043cZ1CXjzdPos+vrq6FD5jPA6SiAogjAOIIgLji1wH6NjP4e/rZ/1/YEiqAOAIgjgCIKz4DeLU9M9TW072oAOIIgDgCIK66GcDLzgznlfV0O9PkRgUQRwDEEQBx2WeAg5fXwXrm+wHMn/Gb16bn9pzt6R+Wj6Kvn/l+gMznQwUQRwDEEQBxxa8D1D4zpPb0wXLuM/KhAogjAOIIgLjiM4DXvGeG2nu6FxVAHAEQRwDEVTcDeNmZYbzf757uRQUQRwDEEQBxyTOA/b762fsG3o2/v+P/6zdvzfcNjN8fIBUVQBwBEEcAxLlnAHtPGnsPIW+P6tvM0HZP994jyKICiCMA4giAuOTrAN4eVNvMUFtP96ICiCMA4giAuFb7zW3YmcFrdmbwqa2ne1EBxBEAcQRAXKf7022kzgxNut7TvagA4giAOAIAAAAAAAAAAAAAAADQM/8ACXZHRjaU+NYAAAAASUVORK5CYII=",
  Dl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAABXVJREFUeJztnTtoVEEUhu9KdBVNEdEiImijIOI7jQlETCGigpWFz0JLFQVjn8pKC1FLbXyhqQIqYqFYiI2PoAbBNBoiATFG8EUEifU5V+ZwmJndu/7/1529O7uT8HP+szNzz60VYMzMzMzEjK/VarVUc6kCs5o9AdJcKABwKABw/is/Kwq/x9fr84LXp6d/ub6/1WoEZgBwKABwKABw2po9AS/JPf7lZhH/fvHON17VCNb8qlYjMAOAQwGAQwGAU/kawPLUWI+fOPpYxOferlbjVwbHt3qNwAwADgUADgUATqV+k/4L7Znacy2Pn7w8IWLt8WcfLso6vv3IZBHC2mvIXRMwA4BDAYBDAYBT+XUAkxuzRTj5RHp256UtIj5TWgcYEXHZ4+U6gHe8dx3Be/4gFmYAcCgAcCgAcFq+Bth6v13E41MbRTza5Bqhv0/Od/3ij/KFYm7RTJgBwKEAwKEAwKlcDRB7754md41gefzQ/E4Z/+xSM3xTmnMjYQYAhwIAhwIAp+E1QOpz/Y+2fxPxxJMXIt73bVlwvLdGuD3k9fg49P8r9fkAZgBwKABwKABwstcAsef6vzy7GLxe7zqmXpkjounTcTXCiptf1Cs+j9/9Y1rE6xe/FvERtRdgnQ9IXRMwA4BDAYBDAYDT8HUA7XGWx1vkrhF6x+S6gMb0+HG13z8lY3P+mc8MMgOAQwGAQwGAk7wG8K71P706GLy++eCeqPnE1wgLRXxt6IGIYz3e+vtzwwwADgUADgUAjrsGSL2fv3zd0uD16tUIaT3+3rPvIt7RtSD4/tQwA4BDAYBDAYBTqgEa3Yu3/fD14PiRK/uD15tdI3g9vmowA4BDAYBDAYDTVvVevM2uEVrd4y2YAcChAMChAMAprQN4e/FaHp+7z17uGmHn+cfB616O9mxK+nnedRt9HwEzADgUADgUADj2eYAW78WrawSrJtCef7xjRfD9p1bJ+en/R33D0+B46/s11rqMxrq3kBkAHAoAHAoAnPj7Av6zXrza8y2P7++T8y36Pgc//9PXPyIeHBkOvl97+J0Hr0S8a9taEesawbq3kBkAHAoAHAoAHLMGMPvo9RgfkLkXb1EsLFKinwNoebzuB3Dg1lYRX9gw6vp+6/7/gYGTIt617WFwvLVuwAwADgUADgUATvQ6QOoaQffitTx+aH5dxpH9+PudHt/ft0bEw2r83ROyxtEMymUG83f+6+dyb6GrWxVJTpgBwKEAwKEAwDFrgOz9+I0awfb4tJTXAcIev/3QkuDnec8Uas/XePsEch2ABKEAwKEAwIleB4itERrdj99CrwPEerzl2d79e+95AAtmAHAoAHAoAHCyPy/AqhFi+/EP/5C/0y1Wq/sE9Fq99vxYj7ew9u+9nm59voYZABwKABwKAJxSDWCfKVP99K39foPRveF+/F6Pt/CemfP+jveOj32/F/YHIAIKABwKAJw27Qn6/nG/B6atESwuTKlz9+qZPdb8Yz3+fffvqPHW98c+G9iCGQAcCgAcCgCc0jqA5TmNrhFiPd7C8ujuNTuD13vHPohY712871YH/43vz70OoGEGAIcCAIcCAMd9HiB/jRDn8d79c+t3/Lm3sl+Bvk9haYc88/i8Q47vHZPv1zVCUfj6B6SGGQAcCgAcCgCcrOvM/8Lb396L9bwD6/kGGt0nUKPH6xphbNzXn0DXPNwLIFmhAMChAMDJfl+AJrWneWuKci9i2Q/AWyOU9ypk2Oi1fS/MAOBQAOBQAOA0fB0gNamffaz7A5Q8Xo93enzu3/VemAHAoQDAoQDAqZQfpcC7LpD63r6qebwFMwA4FAA4FAA4LeVXKYg9j9BqHm/BDAAOBQAOBQDOX/7wrWuOIpDoAAAAAElFTkSuQmCC",
  Rl = "data:image/png;base64,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",
  ko = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACABAMAAAAxEHz4AAAAJFBMVEUAAABHcEz//////wC4uLj/oQCampoA/wAAmf//AP9SUlL/AACcsFD9AAAAAnRSTlP/AOW3MEoAAADGSURBVHja7dlBDcMwDIXhUCgFUxgFUyiFUBiFURiFUhi5vUm2FFlJc97T+y6Vmvi/+pB2TLSF6V0FqAJt4AOD/LaBAnyBOnQtjMEGCvAEfmZDz/AKV5ERBXgCBlc44RFq5A0K8Ac+cMIuogBnwMGCw13EQwcFuAIdPNhCDiUF+AL10Cd6YaAAV8CgXF6yoABfoC6WZDccFOAKdIiBLQ8dFOAK5A/fqMtHAZ7AAUPklg9yVgGeQEbqovGiPlAo8PcBvbkqMPoCnDifKjhoeKsAAAAASUVORK5CYII=",
  Ml = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAABMZJREFUeJzt3b+LVGcUxvGZZNlFXYlEyKi4aQMxmEljkVgEBQXRv0HXQiFtNJ1VOjFlfhjEKJZaKUpMoWglKriKjYUWGlw34EJsRDFM6vNc8549vHfG7JzvpzvcmTv3Lof3nPve997tdAAAAAAAAAAAAAAAAAAAwDjojvoHB4PBoM39dbvdkZ/DOHnvXR8A3i0SIDkSILmh10+v5r+YsDn4wT/24we+PWXi48f2tnNg/yFbT8EIkBwJkBwJkNyE94G2r9ujNV95JfrC5bs2/uOOiX/9YZ+J9fS88x23HoERIDkSIDkSILlGPdMa2H09WfUDg8nXJtYe4OuvDha/f+f6L8XtWvP7/c0m3vhR+fgOHjptYq9H8Cy3HoERIDkSIDkSIDm/Bzj+ZXkPs7dDP/j3yjfF7TovoLyar7wewDPuPQIjQHIkQHIkQHJuDxCl1/lRw+4BtKZ7vPUHbfcIatg9AyNAciRAciRAcm4P8Pth+5Htm8ol6drsJ8XtW95/YOLoeoBbt24Ut58/+7OJtQfQkqo1Wmu61wP8+Vdxc2du7p6Jo+sTPLU9AiNAciRAciRAcuF5gGhP4JmcLfcAXs1X0R7Ao38Or+bX+v7oaO89MAIkRwIkRwIk5xbEtp8LaBxAy1PdtWsEPbU9gNb4PTu+CH2/7XkERoDkSIDkSIDk3GcDo3PNS3i2Tj9f3B6lNbIh2BO0XfO3bf009P1ezx7gke/svYn+Zx+bOLo+gREgORIgORIgObcHqKU1Sa/T1ZMFW6O8++meaE9Q68Klqyb2rvN1nkJ7Bq35+veYu//YxFrzPYwAyZEAyZEAybW+5rzxbKFc19+cmzfxwkLsQtur6V7N1e9Ha7Rnfv6ZifX8vP1533/y9LmJv5ndZmLuBSCEBEiOBEhu6PMAav36dSaenp428cOHj4rfj94/V83r5FMm0rn1Tsded+vcvB6/np/X4+h1vfYIJ85cNnH0/j9rAlFEAiRHAiTX+ppALTnR5/lfvbLvFVxcXCx+3rvO9tbZe/Q5Be0RZjasDe0vOg+xZ+fnJq6t+YoRIDkSIDkSILnGPEB0TZ/Smqlz1/1++YCmpuy7ifW6WnnbPUuoqSbW89P78Xr/Xrn3MoZc8xUjQHIkQHIkQHITtev4la4B1Bo5s6E8t+7VdL1frnPxq1fbuFbtcwvaE3hr/DxtvzeQESA5EiA5EiC5xjxAtOar6Lt1Pd7ce3TNnUdrrPZI0XkD5c0TjBojQHIkQHIkQHJdbx2/PqunvHXsaveOWI3W5/O962btAWZ65bl87VmG/T6EqLfMQzAPgPaQAMmRAMm5PcBPv10p7iC6Js7j1XBvjaFX84f97t0RvFeRHgDtIQGSIwGSc3sA73/4eHQu/8M19n79qpVT9vNOTa920inRFy+ZcHBul4n/b//7txYjQHIkQHIkQHJvey7AxNHnAJSuCVTe8/hRjev+Tc79d6fmqyXM/S+rHoERIDkSIDkSILnw/w1s7KCy5NXOM+jc/sIKuz6h92Ovav8NYzZPwAiQHAmQHAmQXLhetX2/u7Zkas33nH550cSHB/urfl/RA2BZIQGSIwGSG3m9GvaaubYtt5oexQiQHAmQHAkAAAAAAAAAAAAwxv4Fm/jXETIKTbYAAAAASUVORK5CYII=",
  Ul = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAABXFJREFUeJztnU9oXUUUh2+aNBKxjYhULF2UYnAhxkSkYAXdtGnRBA3FRSStFq2oOxHdVAWFLlqpghupsfbf2xUEqdUk3dSFLRQsScDSkkiChmoCSq0hQpombtycc5OZHOe+vNec79udzLy5w8vvzfndmblzswwAAAAAAAAAAAAAAAAAAAAAAAAAVgI1y33B+fn5+eW+ZjmpqalZ9u+wSFZVugNQWRCAcxCAc+rKfYFYzr/dUugKszCMAN5BAM5BAM4p3ANYc/7c3+dEPD06UnSXkrir+ZWytp86L5I6D8EI4BwE4BwE4JxkD1B0zv9t6EJql5IYGxyv6PU/2blTxD+OXhNx6VKx3w8jgHMQgHMQgHPMHmC5c37T3V8Yepdlw9dt9+0652/7qE/EK23uX8MI4BwE4BwE4JyoByh3zrfm+BxHv5VxZ7h6as5PnXuvtj2RjADOQQDOQQDOyeWzonP+rda9wQ40fj0XLI8Ru++vdM7X6O83de6f/QCQBAJwDgJwTnQeoOicr/nrWanBxue+CX9gz9Om9q1U+7N+RfePEcA5CMA5CMA55v0Asbn9dcb2Lt56UMTDnV8F6zcdVX+IzP1vfGSDqT9Fz9VXu6dgBHAOAnAOAnBO4c8G6py+ufZqsP7G0hOm9rVHWLt3f7D+jZ598vOll0VcdIrWFqLa1v81jADOQQDOQQDOKdwD6Jx+sVuWa0/wwNwREY+skjlaE8v5sfoxT3B/8+Om9jXaU2gLoNf/Kw0jgHMQgHMQgHPKfk7g1hNXRHxjT/i+O+YJjv9zRsQvNjyT0Ls8uecWumV/Xn3rWPDzrU++JuJHn3pdxLvulfXL/fx/DEYA5yAA5yAA55TdA2j0WsHW7MoiNRems3RexMe7F6n4H1aPEMv5HW2twc/HyocPfxAs157h0vefiVivLfBcACSBAJyDAJxj9gCp5/jpeYHeoXD9tgNHguWRLYE5j6Dr65yv7+N1Tn9/v8zJVvQ8gObDfdIDlNsTMAI4BwE4BwE4J3o+gE4pU0PyTJ+YJxgZkDm27YCtgzFqZ1eb6g+f2i1i7QFO9w2KWOf8cz8cFnHjtM1GfdzVIWK9FnB5TYuItSfQ/dGeAA8AJhCAcxCAc8we4Ozb20Vsffbu/KzMud27TB/PYfUAOe64KcJfJ+QevrXrw7+RBnXMYf0LyhOcnfnfXcuyLDvY/qWI38nk/gi95xAPACYQgHMQgHOSzwlM9QSbuqQnKJ2U5dojJOd8jfIAeh5gR9tDIp6uk9fXHkBTuzv8aGDtd+Hy+X6V4z+Vv1k8ACSBAJyDAJyTm8jWOUR7ggVyjohTPcGWOnmfWzqp9gN0mZrLkVsLyML7DXr7fxLxjtmbi9RcGH0Ssm7v9Gq5IaL9zMMinuyZNF3PCiOAcxCAcxCAc4p4d7CIrZ5A3/dvqdOx9ATDp2R50/Mngv3TOd9KS0uziHv7I5sYI4xf+1PEf1yfEvHmnvuS2rfCCOAcBOAcBOCcpbwvIDgvoLF6gjXqSJ6xC/IdP1GmHgsWj/1sbC9Ce1tzsHxc3bYPDEjPsGH9PSLWHkDz3hu98g+Hwv2zwgjgHATgHATgHPM8QGy92bp2kKcvUm5jW6GtrTwYAZyDAJyDAJxT+BlB1v0Elabp2KiIO7ZvErHeI5i1hOcBUtH3/Z8feknEB9X+hck7J0S8hD2d4v/DCOAcBOAcBOCcqn6n3VKI5ryZelm/fiZYnkM9NxDzMLG1AM3g5V9E/O6b8vwAnfOt5x6um5b7C/AAIEAAzkEAzrntPUAM63v7rJ6gaCYafg+W65xuBQ8AAgTgHATgnBXvAaxU+7t+NbwvAJJAAM5BAAAAAAAAAAAATvgXtprTE+PHJ9wAAAAASUVORK5CYII=",
  Ql = "data:image/png;base64,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",
  Ol = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAABQxJREFUeJztnUtsTVEUhu/xKCUhEoQgqQ46IaJCgkTMDBQjpuiAYmIiBoQIMRFGEpSBMDUgrorHwCPxSK5oCRMDOpAQkbQRiltcU2td9srO3ufl/7/Z6tk9+9zbv2v9Z5999q5UCCGEEIJIkvcFaBqNRiPva4hJkiSF+47/ZEzeF0DyhQIAhwIAJ/P65Fvjk/GT07qUVGiMfvFqn7dHYAYAhwIAhwIAZ1zaHVg136rx1b5HIl63ZpGz/dsPMh4YeC7ixYsXOY+HYn0e7RH095O1J2AGAIcCAIcCACd6vfGt+brG6xo9d6b8/RevPgVcXXwGBwe92q/vWiFia9wgbU/ADAAOBQAOBQBO6h7At+YPDxerxodieQTLE9ADkFShAMChAMBJ/VmAhR6Lb2try+dCUkI/u7h2K+6zh1CYAcChAMChAMDJ3QP87+MAoZjPVgLHCZgBwKEAwKEAwMndA1hz9jRF8wgLO6Y4j/ve92c9p5AZABwKABwKAJzcPYDGmqdveYSsiT22//P7iPO49gihnoAZABwKABwKAJzMPcCr1+9F3NE+y+v3Y7/LlzbVW/0iXr+m09l+7IRJIq6f+yobXFFzBg1PYMEMAA4FAA4FAE7hxgGs+/yieQBd40PRNXzJ6p0irnfL/9mWSmtQf8wA4FAA4FAA4BTOA2jmzZH3uZ0rNzvbP713WsR6rF6PQ2g+fJTzDYaG/e6ra7XHIj68f+c/WhYDZgBwKABwKABwCu8BNE/unHEe79mzXMTW2LsvusZrli2T/fs+C7AY2vVO/aQ96HzMAOBQAOBQAOCUzgP8vJjvFjy6xmtCxwH08309H2CodsjrfBbMAOBQAOBQAOCUzgPkTerjAF9GRdii/0Tb5H2/7xxADTMAOBQAOBQAOKXzAHosfNqp2Zn2b40DBDN5vPNw7P0FmAHAoQDAoQDAKZ0H0DQ9H991I58LiUTWew8zA4BDAYBDAYBTeg8wsa7HAc7nch1lhRkAHAoAHAoAnNJ5gOaaXyzOntjqPF6r7RCxftdRrweg0e8+cq1gEgQFAA4FAE7pPIBm6oj8CNv3Zdu/rvnVm89S7U97hFBPwAwADgUADgUATuk8gK75WWPV/INHZU2OjX7X0PIEFswA4FAA4FAA4AQXVGtvW3TuPugV8bcWOYdx+me5X8LYH+73Aip3Zc3vv6/XTKIHIB5QAOBQAOCYHsCq8Z/GGRpKwtazb+J23WhwIW5/nly9JGtw63XpAVorcj5D05pHM9yfr3on7udjBgCHAgCHAgCnyQPomt83f4HzBKsiX5DeE2j77lOyQeQaGJsNm+R9+tVLv5zt9eetVlTsuSdRsvG6iK35AcwA4FAA4FAA4JjjAF1vXob1oNa+9SX2ev9po8cBjhyTnuXA3i1B57fWKax0rxVh0icPa0/ADAAOBQAOBQBOkwcIXXNG1xi95o1eD//EycvO83W0z3IeLzq9x2XN79njN46ha75ep1DPB2h0eZ2eGQAdCgAcCgCc6JPstYfw9QQayyPEZub0Kc44FD0OoJ8FxIbvBhInFAA4FAA4mW/C5/segeURcufHiAhjrw+g5wPodxOtr5MegDihAMChAMDJdyPev5D1u4ZJ70r5g+4nYSecMGq3CSC05muYAcChAMChAMApnAdIm9geI6m3uBucXyr773kYs3vuGUTCoADAoQDAgfMAoUT3EIE1PBRmAHAoAHAoAHB+A1OqeOtqU9rHAAAAAElFTkSuQmCC",
  Fl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAABMRJREFUeJztnbtrVEEUxu+V7CIE1BQqimD+AlEhoDZ2goQtbSx8lFoKNgqCgoWgleADETGgrYE1AR+ggqASIVGsLCRgJEYCkagRNsa1E89ZnZNx5r72+37d7L07M5t8nHN25ruzaUIE7Xa7XfQc/iRN0zTL/ldk2TkpPxQAOBQAOJnmlypg5fy01pvXVJIkSZL24jfn9dg1ASMAOBQAOBQAOD1FTyBvfHO+lZOnPrnHm5h4vbyJLXN8Pf/QmoARABwKABwKAJyuXwcIzflv3s7Hn5SDyclJ0W4M7hTt2OsEjADgUADgUADgwK0D6JzfHHkm2l8W8pxNJ/39/aKt5+e7TmHBCAAOBQAOBQBO5jVA2Tx2ZWfzplWirZYFosMIAA4FAA4FAE70GqBqHjvNk6dy/37r1i0xp+M9ftYwAoBDAYBDAYATXAOU3WO3ffcR0d6264DX+33Hi03z/nim/TMCgEMBgEMBgONdAxTtsdP75RZnTsoa4NTZy877dc4dG3vu1b/m7buPov1pVn7+uc9h+/mhMAKAQwGAQwGAE7wOUDWPnVUTDAzsEO3xB9fdAzx21wBlhxEAHAoAHAoAnK5/LiDUY7fUsyjaX+vy0bvhW1//Z1q/sdYZdE0SG0YAcCgAcCgAcDKvAarusdM5XzM7F1YDZJ3jLRgBwKEAwKEAwMl9HaBqHrtVP346rx/zHP/ufffnt/YmYsMIAA4FAA4FAE7mNUCoxy5vT93V8wdFO/Y5gZan0dfDGAojADgUADgUADi5rwO8OHxVtOv71RRy9tjpnFt2D2NjcCjqeIwA4FAA4FAA4HSdJ7Boj10oPCeQ5AoFAA4FAE7uNUB9rdxfb92WGry3Maz/0BxfdQ+jL4wA4FAA4FAA4BS+DqBrgmYSlgNjrwNUzcPo+/sMjADgUADgUADgFF4DLO2Vz96NPnwV1F/oOkDVPIzpiN/97UHZZgQAhwIAhwIAJ/caQOf8svPy0RXn9dGH5T4nUOf8NE3FP4ARABwKABwKAJzC1wE6zuAZzXa86ekP6pVtzvuXhoyaJdC/ELp3MbNvRrTXLaz3Gp8RABwKABwKAJyOGsB3P9kX69w9NEL3Lqycr7/3axgBwKEAwKEAwDHXAdJW3bijJlp6P7yxR37PPp7ccPbWsCYUyNTUe6/7545Ou28YnnFfN4jtYbRyvoYRABwKABwKAByzBmjXW87radLrvG7VBFnTt8Y9P19WtjaoVyaC+iv6vAJGAHAoAHAoAHA6agDre6TeK2gvSp+7/i1hzYWLd5zXtY/ewsrx504fdF5PErenT+f81QvyT9Z8bHRfchgBwKEAwKEAwPH2BOoawaoJOt5v1AjR+SZ/+zfprf39vn+gc363wQgADgUADgUATnCCC103iI3tXwjkgdobqRV7hlAojADgUADgUADgZP4l19ej5ktHjaH8C/M9UuOrUz8PY3Limhrxpmzm7G+IDSMAOBQAOBQAOJVf6Lb2JnypuofR+vw8I4gIKABwKABwuu5hfd8aIG8Po4XlYWxd++7VX+2Q/D0G1gBEQAGAQwGA03U1gEXsGiE2M7V3ot13ST+L6MbK+RpGAHAoAHAoAHDgagCLrM9JzBvWAMQJBQAOBQDOLzFifA2FYHwZAAAAAElFTkSuQmCC",
  zl = "data:image/png;base64,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",
  Gl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAAgFJREFUeJzt3MFNwzAUBuAWIbEEE7AF7MF2zMEI3ODAnSV6Cee4Vd0oSWPn/75blKiN1F/v2Y7TwwEAAAAAAAAAAAAAAAAA6Mlx6xtINwzDcO388Xhc9Td6WPPDaZ8AhBOAcAIQTgDCCUA4AQi3+3WA2jx7a2vP82tUgHACEE4Awj1ufQP3tnHLPbQ2JFEBwglAOAEIt7sxwNR5/9nlP2+zvv/09Ts6fnr/m/V5a1MBwglAOAEIt7sxQKmc9y89D6/1/Nbm/SUVIJwAhBOAcN2PAWY/758471+655f3f+/9ASpAOAEIJwDhuh8DlNae99fW9qe28K3XCVSAcAIQTgDCdfdewA3v05fXjy+Y+bz/zMvn1dOnj+fRcW3dwDoAdyUA4QQgXPfrAGvP+6uKMUVv+wNUgHACEE4AwnU/BigtPY0evl+vnp/b8/0/AJsSgHACEK77McDcefXUZwe99/ySChBOAMIJQLjmxgC1ffJTe+jc9wb21vNLKkA4AQgnAOGa7k9LuDCmKM+Pjqfu4Su13vNLKkA4AQgnAOG66le3mPvewNQ9hr31/JIKEE4AwglAuOaeBSxt656/9X8A1agA4QQgnACEa6ofLaG29n/h+qvnW+vZS1MBwglAOAEIt/t1gKlbAvfe80sqQDgBCCcAAAAAAAAAAAAAAAAAAAAd+QcizKPAfxkTLQAAAABJRU5ErkJggg==",
  Ll = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAAkxJREFUeJzt3cFx1DAUBuBdhhmaoALKoA+6Sx2UwJEDd5rIZTlH2cEY6cmy/++7ZXbi9Sb/vCfJsvd2AwAAAAAAAAAAAK7gfvQJVHs8Ho+jz6HH/X4v/R99qDw46xOAcAIQ7uPsN9zqyb097x+O33P4crOHLCpAOAEIJwDhpo8BZmt7/rse+/Nr6fu//vj119c/fftd+v5bVIBwAhBOAMJNHwOMXtteba1/b88/+vRVgHACEE4Awl1uHWD2vH90z6++/t9SAcIJQDgBCHe6McDR8/7Ven7799h7PBUgnACEE4Bwa2+Qe+JJz2tff/sLnfP+1Xr+aCpAOAEIJwDhll8HmD3vv3rPb6kA4QQgnACEW7o/3W718/7V9/B5PgClBCCcAIRbbh2get7fe69e9bTe8wGYSgDCCUC45dYByq/3f/n+X+dVZevzWQeglACEE4Bwy60DlCt+JlCrXXc4+tpCSwUIJwDhBCDc6cYA09fiO/cXrL6HUAUIJwDhBCDc8mOA6nlyb8s9W89vqQDhBCCcAIRbbj/AaKP3F5y957dUgHACEE4Awi2/DrDX6PsKrtbzWypAOAEIJwDhho8Bep9dO9reef/Ve35LBQgnAOEEINzwMcDsHtg771+951ePqVSAcAIQTgDCnWrO+sze6/2vL5/f/Fzd8/eOUdwXwFQCEE4AwsWNATavDTSqv9fv6GsnKkA4AQgnAOEutyewNbvnbzn6u49bKkA4AQgnAOEutw6w19n28I2mAoQTgHACAAAAAAAAAAAAAHABfwC3/v8vAZpBjAAAAABJRU5ErkJggg==",
  Hl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAAqtJREFUeJzt3bFRxDAQRmHMMNAEMQkZJdAH3dEHHRASEEMTl5iABAsGY6S1Vn7vy47jfAb+2ZUl4Ts7kyRJkiRJkiRJRzb1PoFa8zzPvc8h0jRNoX+j88iDKz8DAGcA4C56n0BrwS0z3N5DGisAnAGAMwBw6ccA5XX+1uvibz315b7+pCqcnl8Xj68e3judyScrAJwBgDMAcOnHANFz4dHWen7vpQwrAJwBgDMAcOnHAKOp7fn/mOf49YBrx7MCwBkAOAMA5xigs97zHFYAOAMAZwDgHANUip7rX9sPUTuGsALAGQA4AwA33Fr7Dz2xfH75gsZ7APee649mBYAzAHAGAK75PEDt+vTRZP95rQBwBgDOAMClXwvofQ+g2uv+6PN3LUBVDACcAYBrPgaIvu6Nnvtvvb7f+tfRekhhBYAzAHAGAC79PEA2W3v61p59erxePI6+h5AVAM4AwBkAuHRjgN5z/5d3N4vH8/xWd8CVeYne9xCyAsAZADgDAJduv1rvff/Rsv1fgRUAzgDAGQC4dPMAq+z5TVkB4AwAnAGAG24eYIf3X35h45gje88vWQHgDACcAYBLPw8QvR5e23JH6/klKwCcAYAzAHDpxgCte2LrPYaj9/ySFQDOAMAZALhU/ShC6z2G0+3T768vv3/nzwHcygoAZwDgDABcunmAWq2v+6N7fm9WADgDAGcA4ML71drn3u3wfuXzyxcU1/1H7/klKwCcAYAzAHDh8wCj98jS0X4eKwCcAYAzAHDD97M/rJ+X37/p+R+ON/zv7CsrAJwBgDMAcIfbD9D6voK1PX/r/gTvD6BdGQA4AwB3uDFAdmWP7/35CFYAOAMAZwDgDj8GyDZ137vnl6wAcAYAzgDAHW4MkKzFpt8/YAWAMwBwBkCSJEmSJAniA8sG9dXtJ5oqAAAAAElFTkSuQmCC",
  ql = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAAtZJREFUeJzt3U1uFDEQhmEaRXATDsANwj24MruwYM8l2DQbNlOJZCz/lCvv++xG0cx0pE/lctvtuT4c7r7vO/saVrqu68r8/o+ZX658BgDOAMA9ZV9Ar+Qhc9hpLY0VAM4AwBkAuHI9QPRqTP35LedC/vnz49fD68/ffyddyf+xAsAZADgDAFe+B8gWx/xqrABwBgDOAMDZA0wW5/2n3fuPrABwBgDOAMDZA3Qanff37gFs7Ykc3VNoBYAzAHAGAM4eYFC1eX9kBYAzAHAGAM4eoGH3vH/2+1usAHAGAM4AwC3vAeK97Ozn4UdVn/dHVgA4AwBnAOCW9wCz179Xm73Pf/b/M7uHsgLAGQA4AwB3/FpAHPJ2nwfQer5/9W2N1S2RFQDOAMAZALjje4Bsu29L7F4qsQLAGQA4AwB33Nr8G/sH4t8f35B8LmCv1jmCrZ7DtQBNZQDgDACc9wEWy36uoMUKAGcA4AwAXPkeYPVZvZ++fpn6eac9V2AFgDMAcAYArlwPsHu9/H7p6wFOn/dHVgA4AwBnAOCm9wCzz7atvifvtHl/ZAWAMwBwBgDuuPsAsUdYfV7Aqz2HL89d768274+sAHAGAM4AwE3vAbLHtGynz/sjKwCcAYAzAHDH3QdoyW4xqs/7IysAnAGAMwBw5XqAKPu8gGrz/sgKAGcA4AwAXPkeoNfqZwmj0Xn/6t9csgLAGQA4AwBXvwcYnPe3fg+gZfW83zOCtJQBgDMAcPV7gIbeef/omH7aen+LFQDOAMAZALh33wNE2efzn8YKAGcA4AwA3HE9wOh5AO9t3/5qVgA4AwBnAOC29wC9e9xGfzdw9b792eci7mYFgDMAcAYAbnsPMDwmhjHfef8YKwCcAYAzAHDHrQWM2v28fvUewgoAZwDgDADccePXG2sFo5/38Lr6mD2bFQDOAMAZALjj7wNUO3evGisAnAGAMwCSJElAfwElasLUXOrQXAAAAABJRU5ErkJggg==",
  Yl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAAxtJREFUeJzt3bFx3DAQRmHTo5GbcKwC3IHVh7tzPc6kQLmbUELFBjXG4QDsgnzvC6XhHaX5Z7EgQHL7srh93/fsc5hp27Yt8/u/Zn658hkAOAMAlzr+3KLsAZKHzG6tLc3sHsEKAGcA4AwA3EP2CfTO8w+Hvz73fFyz9z9v//39t19/g87kPlYAOAMAZwDg0nsAOtcClMoAwBkAuPQeoDYGrrYfoHXev9jpH1gB4AwAnAGAS+8BaLLn/SUrAJwBgDMAcIce4JM9eE1jVu/xq1lt3j/6/2sFgDMAcAYA7tAD9I4pZx/zRxv9/yg/r7ZWUvt+KwCcAYAzAHCuBRRWm/fPZgWAMwBwBgBueA/QOy9dbQ9gr9l/j2sB6mIA4AwA3PLXAcohLvp5ALX7+2cvfZR/7+i1BSsAnAGAMwBww3uAq83zo083ejuFFQDOAMAZALjw/XutPUD2dYDRyv0GrfsLvA6goQwAnAGAC18LuNp1gpraHsMa3xegqQwAnAGAq/YAd8zbp45Z77+/z/z4g8cfT0M/b7X7CqwAcAYAzgDANV8HaL0/fbTod/DsL209QO+8P5oVAM4AwBkAuOYeIHrMP/uevOz1/horAJwBgDMAcNUeIHpMir7OcNhz+PKz6fizzftLVgA4AwBnAODC9wRe7X0CpdXn/SUrAJwBgDMAcMvdF3DD8aNO5S7R+/x7n7tYYwWAMwBwBgCuuweYPUbd8P3//iD4eQGr7fNvZQWAMwBwBgBu+WcFjxa9fr/6u5etAHAGAM4AwHX3ANnr2b167zUcPe/3vgCFMgBwBgDu8tcBWuf9vWP62XoiKwCcAYAzAHCX7wFKZ9u3Xxq9VmAFgDMAcAYAbrkeoPl5AMUewLPt289+FrMVAM4AwBkAuOV6gFLvewPPtm8/+hlJVgA4AwBnAOCm9wDD97knz/tHH1+KfhazFQDOAMAZALjh7wsox8To9fTZ8/7RPU32fgMrAJwBgDMAcM3jz+xnAn0yxvZ83KEHyB5zV2MFgDMAcAYArvvdwbOtvn7farX3JVgB4AwAnAGQJEkC+gAjCBSs2IK1XQAAAABJRU5ErkJggg==",
  Vl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAA9NJREFUeJztnT1y1EAQhS1qy1yCmAAybgDnMLfjHHADMhMQwyWcLLF6sXp7X49GW+/7MnktjaR61X/TM1oeDs75fD7PvgeFZVkW5fzs+dXrv1FOhvsHAZiDAMw5zb4BFdEFtnNvIQsWwBwEYA4CMGd4DKDmsfH37HoXP//6sn2DCS8/f2/+/vbrX+n68Xni86p5fgYWwBwEYA4CMOfu6wB7E32+mveP9vEZWABzEIA5CMAcOQaYncd2k+X9Gd3PW+2HqI6PBTAHAZiDAMw5XB3gaD2Aat7f3dNXnRvJwAKYgwDMQQDmpDFANc/P/v9oHC3vz+iOkbAA5iAAcxCAOWkM0L22rbsHsJvZ8/1qDFU9HwtgDgIwBwGYU64DqMyu9c/O+0c/P/0AUAIBmIMAzCn3A+xd2o8uM46vrgWs5v1H8+EqWABzEIA5CMCcjnUB6z+I6/GXjz+k81VmxzhX/H9rjyEWwBwEYA4CMOciBhid58ZafPf8e8bjp/dhvD9Dx3v59m51nO0ppL7/6vlYAHMQgDkIwJzhawNn+/wUsW4RqT7v7LoDFsAcBGAOAjDnmnUBq+Pu2v+9o/YYRtT3m8UgESyAOQjAHARgzml07X903h9r7SpxrqDK3nUONQbBApiDAMxBAOZc1AFG5/3V2nfmQ9Vv9lyM97wdAzSsLVyPV3y/1W8YZe8PC2AOAjAHAZjT3w/w4fvqMEuDb+iZu+m2XkOdjx9e52j2+XHdABbAHARgDgIwp9wPkBPy3OfPq+PZPYIXeXi4v8jeeX+3z8/AApiDAMxBAOb8b21g6QJVn1rlaJ8b2Dtmyeoi2fthLgA2QQDmIABzTup+9Bndef/odQmz5/sfn9b7FZyftserzqVEsADmIABzEIA5u38v4N5QY5bquoXHh1pPoHp/WABzEIA5CMAc+XsBR5vvj8zee7i+biG8L3Fuhe8GwiYIwBwEYE77/gBqn/rousPoGKS7n2J0TIUFMAcBmIMAzEn7Abp9svxdPHH9fCSLQbr7JUb7/OrzYAHMQQDmIABz5P0BYq19dvtAd56sxgRVVJ9f/R0LYA4CMAcBmFOOAW6ode9aZ8hQfeYN462OY94/O4bCApiDAMxBAOZcs0fQrgv0u/fUyajGIOr7qPr80f0SWABzEIA5CMAc2b93z59X9xzq9qlqf4Dqowf0HzAXAK+DAMxBAObI+wOM3mMoovb8ZYyem9i7rpKBBTAHAZiDAMxJ/VF3DJBdX3WR8XZn+9y9ewqrYAHMQQDmIABzpvujo+fdR/fhKlgAcxCAOQgAAAAAwJB/s3kQcMKqJVwAAAAASUVORK5CYII=",
  Do = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACABAMAAAAxEHz4AAAAD1BMVEVHcEz284nytSDliicgGCcE4LS5AAAAAXRSTlMAQObYZgAAAJ5JREFUeNrt2LsNgDAMRVEKFuAzAYwAA4DE/jNBCmyF/IkEzX113qmsyHITyJGIPAQACKQ1D7or/fTMvFxZAQAqAOlu5hEAQKq7m7I7gNoFAPgY0Al2AgAQAKTbT950d0YAgApAtzQAgBjgT2BLAwBwu7G59CxZAADlgP2JAQBIsg8QgzWAAAB/AbrXAwAURQ8QMoAAAC8BvVQBAOTmBHvqugmDIq+UAAAAAElFTkSuQmCC",
  ui = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAAXNSR0IArs4c6QAAAFRQTFRFICo/9c+d/88A+Ldj/8UB0bqh/78A/7cA/60Ax6uV7bEK/6QA/6AA/5kA/5IA1qASop2exJ40/4UAsIA0eX6JlHpOeWhPV2ByYFZLMzxRGSc+ESE7VlFONgAAAadJREFUeNrt121vgyAUhmGnKFRb6ltbOOf//8/x4Jgm7ZKJZGkWbr80fLiCPVLTIpfL5XK5v8zacTydiN4VJJqmcdSa+X1BfRldfU/JQK09WKTJGO3FqmJOBaJUILPWl4v2PR4JQArgmAQksvZ8vrjwLdY1M/niwWIFdSyIXRnf7TZNSnXdusePj7ruXfP8eFi7B7SvQB0Htq0QTSNdytU58JuEuYl5D9goqdBx0BgPLn2h50BuzKr63XDoDtCLCpfqcAXQtwtE1oKUMJ9uO9x4XRdoFwjuCdQxIBoG7O56nSZj8CgxSwlyQfGIJwK9GQOCIFdB+GSMWkbjUqrvwcWCrgVUAew8GBew+32dNsh5JnDHQCU9F0CK5oBtTw1Q/MweA9dTAy8eJBoG4WogNmGPGMlxcN2j6xQLWluWALd7BFhVsVPeguvJltHv59vNgZ4sy+s1oBjSEVBsQYgqFmRu29LXttbiIE6TENIX9eDQj2ATCdLCGcNcUHi9VhWm3fcHwbBSAJSxIAsxDMVT8yzEPEeAnBZERK9XsZ4QxHr+K5jL5XL/oU+kODawNDIwtAAAAABJRU5ErkJggg==",
  Yt = {
    1: Gl,
    5: Ll,
    10: Hl,
    100: ql,
    500: Yl,
    1e3: Vl,
    default: Do
  },
  Wl = (t, n) => n < 5 ? Yt[1] : n < 10 ? Yt[5] : n < 100 ? Yt[10] : n < 500 ? Yt[100] : n < 1e3 ? Yt[500] : Yt[1e3],
  Vt = {
    1: Bl,
    5: Tl,
    10: El,
    100: kl,
    500: Dl,
    1e3: Rl,
    default: Eo
  },
  Xl = (t, n) => n < 5 ? Vt[1] : n < 10 ? Vt[5] : n < 100 ? Vt[10] : n < 500 ? Vt[100] : n < 1e3 ? Vt[500] : Vt[1e3],
  Jl = () => mn,
  Zl = () => Bo,
  Kl = () => To,
  Wt = {
    1: Ml,
    5: Ul,
    10: Ql,
    100: Ol,
    500: Fl,
    1e3: zl,
    default: ko
  },
  $l = (t, n) => n < 5 ? Wt[1] : n < 10 ? Wt[5] : n < 100 ? Wt[10] : n < 500 ? Wt[100] : n < 1e3 ? Wt[500] : Wt[1e3],
  Ei = {
    9: Co,
    10: Io,
    11: Po
  },
  ja = (t, n) => Ei[t] ? Ei[t] : ui,
  ed = () => ui,
  ba = {
    1: Wl,
    2: Xl,
    13: Jl,
    4: Zl,
    5: Kl,
    6: $l,
    9: ja,
    10: ja,
    11: ja,
    default: ed
  },
  Ro = (t, n) => ba[t] ? ba[t](t, n) : ba.default(),
  td = ({
    item: t,
    active: n,
    amount: s = 1,
    type: a = "sale"
  }) => {
    var d;
    const i = _(),
      o = c(m => m.shop.selectedCurrency),
      r = (d = t.prices.filter(m => m.currency_id === o)[0]) == null ? void 0 : d.price,
      l = [he.info_row];
    return e.jsxs("div", {
      className: l.join(" "),
      onPointerUp: () => {
        n && (i(ot(t.id)), i(rt()))
      },
      children: [e.jsxs("div", {
        className: he.info_row_content,
        children: [e.jsxs("div", {
          children: [e.jsx("div", {
            className: he.row_icon_container,
            children: e.jsx("img", {
              alt: "",
              src: Ro(t.id, s),
              className: he.row_icon
            })
          }), e.jsx("div", {
            className: he.row_title,
            children: e.jsx("span", {
              children: t.name.replace("charges", "").replace("' Snap", "").replace(" Snap", "")
            })
          })]
        }), e.jsxs("div", {
          className: he.row_price_container,
          children: [r && e.jsxs("span", {
            className: he.main_info_channel_users,
            children: [e.jsx(Sl, {}), e.jsx(Ze, {
              num: r
            })]
          }), !r && e.jsx("span", {
            className: he.main_info_channel_users,
            children: "No"
          })]
        })]
      }), a === "sale" && e.jsx("div", {
        className: he.info_row_sale,
        children: "-75%"
      }), a === "limited" && e.jsx("div", {
        style: {
          backgroundColor: "#026e4f",
          color: "white",
          lineHeight: 1
        },
        className: he.info_row_sale,
        children: "Limited"
      }), a === "event" && e.jsx("div", {
        className: he.info_row_sale,
        style: {
          backgroundColor: "#850294",
          color: "white",
          lineHeight: 1
        },
        children: "Event"
      })]
    })
  },
  nd = "_panel_1iadi_1",
  sd = "_item_1iadi_11",
  ad = "_active_1iadi_25",
  Na = {
    panel: nd,
    item: sd,
    active: ad
  },
  id = {
    BASE_URL: "/",
    DEV: !1,
    MODE: "production",
    PROD: !0,
    SSR: !1,
    VITE_ADSGRAM_BLOCK_ID: "4853",
    VITE_API_URL: "https://notpx.app/api/v1/",
    VITE_BOT_URL: "https://t.me/notpixel/app",
    VITE_IMAGE_URL: "https://image.notpx.app/api/v2/image",
    VITE_WALLET_ADDRESS: "UQBv3exBKLmQcn2Fm6VlntAInW-je1YP4U59gJxaO62NCyMn"
  },
  Pn = id,
  od = () => window.location.hostname.split(".").length === 3,
  rd = () => !1,
  Mo = () => window.location.hostname.includes("dev"),
  cd = () => Mo() ? Pn.VITE_ADSGRAM_BLOCK_ID : od() ? "4853" : "4995",
  gt = {
    isDev: rd(),
    devServer: Mo(),
    devUserInitData: Pn.VITE_INIT_DATA || null,
    devWallet: Pn.VITE_DEV_WALLET || null,
    apiBaseUrl: Pn.VITE_API_URL,
    app: {
      disableBetaError: Pn.VITE_DISABLE_BETA_ERROR,
      adsgramBlockId: cd()
    }
  },
  ld = () => window.Telegram.WebApp.isVersionAtLeast("8.0") ? window.Telegram.WebApp.safeAreaInset : {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  dd = () => window.Telegram.WebApp.isVersionAtLeast("8.0") ? window.Telegram.WebApp.contentSafeAreaInset : {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  ud = {
    deviceType: "unknown",
    os: "unknown",
    platform: "unknown",
    fullscreen: window.Telegram.WebApp.isVersionAtLeast("8.0") || gt.isDev,
    safeAreaInset: ld(),
    contentSafeAreaInset: dd()
  },
  Uo = _e({
    name: "device",
    initialState: ud,
    reducers: {
      setDeviceInfo: (t, n) => {
        const {
          deviceType: s,
          os: a,
          platform: i
        } = n.payload;
        t.deviceType = s, t.os = a, t.platform = i
      },
      setFullscreen: (t, n) => {
        t.fullscreen = n.payload
      }
    }
  }),
  {
    setDeviceInfo: md,
    setFullscreen: Ad
  } = Uo.actions,
  ct = t => t.device.platform,
  pd = t => t.device.os,
  Qo = t => t.device.deviceType,
  Et = t => t.device.fullscreen,
  ra = t => t.device.contentSafeAreaInset,
  ca = t => t.device.safeAreaInset,
  hd = Uo.reducer,
  gd = () => {
    const [t, n] = A.useState("Stars"), s = c(ct);
    return e.jsx("div", {
      className: Na.panel,
      children: ["Star Shop"].map(a => e.jsxs("div", {
        className: `${Na.item} ${t===a?Na.active:""}`,
        onPointerUp: () => {
          n(a)
        },
        children: [s === je && e.jsx("h1", {
          children: "TON Shop"
        }), s !== je && e.jsx("h1", {
          children: "Star Shop"
        })]
      }, a))
    })
  },
  _d = "_layout_q8u4d_1",
  fd = "_content_q8u4d_22",
  ki = {
    layout: _d,
    content: fd
  },
  xd = "_header_btihg_1",
  vd = "_header_bottom_container_btihg_14",
  yd = "_header_bottom_btihg_14",
  wd = "_header_placeholder_btihg_39",
  jd = "_header_content_btihg_45",
  bd = "_league_btihg_56",
  Nd = "_bronze_btihg_66",
  Cd = "_silver_btihg_67",
  Id = "_gold_btihg_68",
  Pd = "_platinum_btihg_69",
  Sd = "_diamond_btihg_70",
  Bd = "_logo_link_btihg_72",
  Td = "_logo_btihg_72",
  Qe = {
    header: xd,
    header_bottom_container: vd,
    header_bottom: yd,
    header_placeholder: wd,
    header_content: jd,
    league: bd,
    bronze: Nd,
    silver: Cd,
    gold: Id,
    platinum: Pd,
    diamond: Sd,
    logo_link: Bd,
    logo: Td
  },
  Ed = () => e.jsx("div", {
    className: Qe.header_placeholder
  }),
  Vs = "data:image/png;base64,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",
  kd = "_image_1nx2h_1",
  Di = {
    image: kd
  },
  Dd = () => {
    const t = c(Et);
    return e.jsxs(ae.Fragment, {
      children: [e.jsx("img", {
        alt: "web",
        src: Vs,
        className: Di.image,
        style: {
          position: "absolute",
          top: t ? "0" : "var(--header-height)",
          left: 0,
          zIndex: 100,
          pointerEvents: "none",
          opacity: .6
        }
      }), e.jsx("img", {
        alt: "web",
        src: Vs,
        className: Di.image,
        style: {
          position: "absolute",
          top: t ? "0" : "var(--header-height)",
          transform: "scaleX(-1)",
          right: 0,
          zIndex: 100,
          pointerEvents: "none",
          opacity: .6
        }
      })]
    })
  },
  Rd = {
    initial: {
      scale: .97,
      opacity: 0,
      transformOrigin: "50% 0"
    },
    animate: {
      scale: 1,
      opacity: 1
    },
    transition: {
      type: "spring",
      bounce: 0,
      ease: "easeInOut",
      duration: .5
    }
  },
  ue = ({
    children: t
  }) => {
    const n = c(s => s.main.showMiningDetailsPopup);
    return e.jsxs(Un.div, {
      className: ki.layout,
      style: {
        overflow: n ? "hidden" : ""
      },
      ...Rd,
      children: [e.jsx(Ed, {}), e.jsx("div", {
        className: ki.content,
        children: t
      }), e.jsx(Dd, {})]
    })
  },
  Md = "_layout_13e1w_1",
  Ud = "_container_13e1w_10",
  Qd = "_star_13e1w_14",
  Od = "_move_13e1w_1",
  Zn = {
    layout: Md,
    container: Ud,
    star: Qd,
    move: Od
  },
  Fd = "_link_1fn8i_1",
  zd = "_telegram_icons_1fn8i_13",
  Oo = {
    link: Fd,
    telegram_icons: zd
  },
  I = ({
    children: t,
    className: n = "",
    style: s = {},
    size: a = 12
  }) => t ? e.jsx("span", {
    className: `${Oo.telegram_icons} ${n}`,
    style: {
      fontSize: a,
      ...s
    },
    children: t
  }) : null,
  Gd = A.memo(() => {
    const t = Array.from(Array(30)),
      n = c(ct);
    return e.jsx("div", {
      className: Zn.layout,
      children: e.jsx("div", {
        className: Zn.container,
        children: t.map((s, a) => {
          const i = k(4, 14);
          return n === je ? e.jsx(I, {
            size: i,
            className: Zn.star,
            style: {
              animationDelay: `-${a*300}ms`,
              transform: `translate(${k(-80,-170)*(a%2===1?1:-1)}px, ${k(-100,100)}px)`
            },
            children: ""
          }, a) : e.jsx(An, {
            fontSize: i,
            className: Zn.star,
            style: {
              animationDelay: `-${a*300}ms`,
              transform: `translate(${k(-80,-170)*(a%2===1?1:-1)}px, ${k(-100,100)}px)`
            }
          }, a)
        })
      })
    })
  }, () => !1),
  Ld = "_layout_1nbfl_1",
  Hd = "_button_1nbfl_14",
  Ri = {
    layout: Ld,
    button: Hd
  },
  qd = () => {
    const t = te();
    return e.jsx("div", {
      className: Ri.layout,
      children: e.jsx("div", {
        className: Ri.button,
        onPointerUp: () => t.push("/pay-support"),
        children: "Pay support"
      })
    })
  },
  Yd = "_layout_gx8in_1",
  Vd = "_container_gx8in_5",
  Wd = "_item_gx8in_11",
  Xd = "_active_gx8in_20",
  Jd = "_image_container_gx8in_24",
  Zd = "_image_gx8in_24",
  Kd = "_item_text_container_gx8in_34",
  $d = "_item_text_gx8in_34",
  vt = {
    layout: Yd,
    container: Vd,
    item: Wd,
    active: Xd,
    image_container: Jd,
    image: Zd,
    item_text_container: Kd,
    item_text: $d
  },
  Ws = zn(),
  Xs = zn(),
  Js = zn({
    sortComparer: (t, n) => t.id - n.id
  }),
  mi = zn(),
  Dn = zn(),
  eu = {
    user: null,
    country: null,
    languageCode: "en",
    showRobotPopup: !1,
    verificatedWallet: null,
    verificatedWalletStatus: p.idle,
    checkCaptchaStatus: p.idle,
    hasCaptchaCode: !1,
    hasCaptchaCodeStatus: p.idle,
    pixelsForSale: Ws.getInitialState(),
    pixelsForSaleOffset: 0,
    pixelsForSaleLimit: 10,
    pixelsForSaleTotal: 0,
    totalPrice: 0,
    pixelCoins: 0,
    pixelsSold: Xs.getInitialState(),
    pixelsSoldOffset: 0,
    pixelsSoldLimit: 10,
    pixelsSoldTotal: 0,
    pixelsForSaleFetchStatus: p.idle,
    pixelsSoldFetchStatus: p.idle,
    getUserFetchStatus: p.idle
  },
  rs = G("user/getVerificatedWallet", async () => (await X.getVerificatedWallet()).data),
  cs = G("user/checkCaptcha", async ({
    wallet: t,
    captcha: n
  }) => (await X.checkCaptcha({
    wallet: t,
    captcha: n
  })).data),
  ls = G("user/checkHasCaptchaCode", async () => (await X.checkHasCaptchaCode()).data),
  ds = G("user/getUserPixels", async ({
    offset: t,
    limit: n
  }) => (await X.getUserPixels({
    offset: t,
    limit: n
  })).data),
  us = G("user/getPixelsForSaleTotal", async () => (await X.getUserPixelsCount()).data),
  ms = G("user/getUserPixelsSold", async ({
    offset: t,
    limit: n
  }, s) => (await X.getUserPixelsSold({
    offset: t,
    limit: n
  })).data),
  As = G("user/getUser", async (t, {
    rejectWithValue: n
  }) => {
    try {
      const s = await X.getUser();
      if (s.data.error) return n(s.data.error);
      const a = s.headers.get("cf-ipcountry");
      return {
        data: s.data,
        country: a || null
      }
    } catch (s) {
      return n(s.response.data)
    }
  }),
  Fo = _e({
    name: "user",
    initialState: eu,
    reducers: {
      setLanguageCode: (t, n) => {
        t.languageCode = n.payload
      },
      setPixelsForSaleOffset: (t, n) => {
        t.pixelsForSaleOffset = n.payload.offset
      },
      setPixelsForSaleTotal: (t, n) => {
        t.pixelsForSaleTotal = n.payload
      },
      setShowRobotPopup: (t, n) => {
        t.showRobotPopup = n.payload
      },
      setPixelsForSaleFetchStatus: (t, n) => {
        t.pixelsForSaleFetchStatus = n.payload.status
      },
      removePixelsForSale: t => {
        Ws.removeAll(t.pixelsForSale)
      },
      setPixelsSoldOffset: (t, n) => {
        t.pixelsSoldOffset = n.payload.offset
      },
      setPixelsSoldTotal: (t, n) => {
        t.pixelsSoldTotal = n.payload.total
      },
      setPixelsSoldFetchStatus: (t, n) => {
        t.pixelsSoldFetchStatus = n.payload.status
      },
      removePixelsSold: t => {
        Xs.removeAll(t.pixelsSold)
      },
      addPixelCoins: (t, n) => {
        t.pixelCoins += n.payload
      },
      subtractPixelCoins: (t, n) => {
        t.pixelCoins -= n.payload
      },
      setPixelCoins: (t, n) => {
        t.pixelCoins = Math.floor(n.payload)
      },
      updateUserSquad: (t, n) => {
        t.user !== null && (t.user.squad === null && (t.user.squad = {}), t.user.squad = {
          ...t.user.squad,
          ...n.payload,
          templateX: t.user.squad.templateX,
          templateY: t.user.squad.templateY
        })
      }
    },
    extraReducers: t => {
      t.addCase(ds.pending, n => {
        n.pixelsForSaleFetchStatus = p.pending
      }).addCase(ds.fulfilled, (n, s) => {
        Ws.upsertMany(n.pixelsForSale, s.payload.pixels), n.totalPrice = s.payload.totalPrice, n.pixelsForSaleTotal = s.payload.total, n.pixelsForSaleFetchStatus = p.fulfilled
      }).addCase(ds.rejected, n => {
        n.pixelsForSaleFetchStatus = p.rejected
      }).addCase(rs.pending, n => {
        n.verificatedWalletStatus = p.pending
      }).addCase(rs.fulfilled, (n, s) => {
        n.verificatedWallet = s.payload.wallet_address, n.verificatedWalletStatus = p.fulfilled
      }).addCase(rs.rejected, n => {
        n.verificatedWalletStatus = p.rejected
      }).addCase(ls.pending, n => {
        n.hasCaptchaCodeStatus = p.pending
      }).addCase(ls.fulfilled, (n, s) => {
        n.hasCaptchaCode = s.payload, n.hasCaptchaCodeStatus = p.fulfilled
      }).addCase(ls.rejected, n => {
        n.hasCaptchaCodeStatus = p.rejected
      }).addCase(cs.pending, n => {
        n.checkCaptchaStatus = p.pending
      }).addCase(cs.fulfilled, (n, s) => {
        n.checkCaptchaStatus = p.fulfilled
      }).addCase(cs.rejected, n => {
        n.checkCaptchaStatus = p.rejected
      }).addCase(ms.pending, n => {
        n.pixelsSoldFetchStatus = p.pending
      }).addCase(ms.fulfilled, (n, s) => {
        Xs.upsertMany(n.pixelsSold, s.payload.pixels), n.pixelsSoldTotal = s.payload.total, n.pixelsSoldFetchStatus = p.fulfilled
      }).addCase(ms.rejected, n => {
        n.pixelsSoldFetchStatus = p.rejected
      }).addCase(As.pending, n => {
        n.getUserFetchStatus = p.pending
      }).addCase(As.fulfilled, (n, s) => {
        n.user = {
          ...s.payload.data
        }, n.country = s.payload.country, n.getUserFetchStatus = p.fulfilled
      }).addCase(As.rejected, (n, s) => {
        n.getUserFetchStatus = p.rejected
      }).addCase(us.pending, n => {}).addCase(us.fulfilled, (n, s) => {
        n.pixelsForSaleTotal = s.payload.myPixelsCount
      }).addCase(us.rejected, n => {})
    }
  }),
  {
    setLanguageCode: tu,
    setPixelsForSaleOffset: zo,
    setPixelsForSaleTotal: nu,
    setPixelsForSaleFetchStatus: su,
    removePixelsForSale: au,
    setPixelsSoldOffset: JM,
    setPixelsSoldTotal: ZM,
    setPixelsSoldFetchStatus: KM,
    removePixelsSold: $M,
    setShowRobotPopup: iu,
    addPixelCoins: kt,
    subtractPixelCoins: ou,
    setPixelCoins: Go,
    updateUserSquad: ru
  } = Fo.actions,
  Lo = t => {
    const n = t.user.user;
    return n === null ? null : n.league || null
  },
  cu = t => t.user.userPic,
  He = t => t.user.user,
  lu = Fo.reducer,
  ze = {
    getPixelsForSale: ds,
    getPixelsForSaleTotal: us,
    getPixelsSold: ms,
    getVerificatedWallet: rs,
    checkCaptcha: cs,
    checkHasCaptchaCode: ls,
    getUser: As
  },
  du = () => {
    const t = _(),
      n = c(ia),
      s = c(i => i.shop.selectedCurrency),
      a = c(ct);
    return c(He), A.useEffect(() => {
      a === je && s === 1 && t(Qn(2))
    }, [a]), a !== je ? null : e.jsx("div", {
      className: vt.layout,
      children: e.jsx("div", {
        className: vt.container,
        children: n.map(i => {
          if (i.currency_id === 1) return null;
          const o = s === i.currency_id;
          return e.jsxs("div", {
            className: F(vt.item, o ? vt.active : ""),
            onPointerUp: () => {
              t(Qn(i.currency_id))
            },
            children: [e.jsx("div", {
              className: vt.image_container,
              children: e.jsx("img", {
                alt: "img",
                className: vt.image,
                src: i.image
              })
            }), e.jsx("div", {
              className: vt.item_text_container,
              children: e.jsx("span", {
                className: vt.item_text,
                children: i.name
              })
            })]
          }, i.currency_id)
        })
      })
    })
  },
  uu = "/assets/icon_coin-COCalNMQ.gif",
  mu = "/assets/icon_stars-BmDiRMAW.gif",
  Au = {
    items: []
  },
  Ho = _e({
    name: "toast",
    initialState: Au,
    reducers: {
      addToast: (t, n) => {
        t.items.push(n.payload)
      },
      removeToast: (t, n) => {
        t.items = t.items.filter(s => s.id !== n.payload)
      }
    }
  }),
  {
    addToast: z,
    removeToast: Mi
  } = Ho.actions,
  pu = Ho.reducer,
  hu = () => {
    const t = _(),
      n = c(ct),
      [s, a] = A.useState(1);
    return e.jsx("img", {
      alt: "img",
      className: he.stars_img,
      src: n === je ? uu : mu,
      onPointerUp: () => {
        (n !== je || gt.isDev) && (s >= 7 ? (a(1), t(z({
          id: performance.now(),
          text: "Check every 11th word",
          icon: ""
        }))) : a(s + 1))
      }
    })
  },
  gu = ["#FFD700", "#ffc60a", "#FFDF00"],
  _u = () => {
    _();
    const t = c(i => i.shop.order),
      n = c(i => i.shop.products),
      s = c(i => i.shop.available),
      a = c(ct);
    return A.useEffect(() => {}, []), e.jsxs(ue, {
      children: [e.jsxs("div", {
        className: he.stars_img_container,
        children: [e.jsx(hu, {}), e.jsx(Gd, {
          color: () => gu[k(0, 2)]
        })]
      }), e.jsx(gd, {}), e.jsxs("div", {
        className: he.description_container,
        children: [a !== je && e.jsxs("span", {
          className: he.description,
          children: ["Exclusive offers for brave Pixels. ", e.jsx("br", {}), "We've got something fun", " "]
        }), a === je && e.jsxs("span", {
          className: he.description,
          children: ["Weve got something fun", e.jsx("br", {}), "Buy with tokens, saving ≈30%"]
        })]
      }), e.jsxs("div", {
        className: he.info_layout,
        children: [e.jsx(du, {}), e.jsx("div", {
          className: he.info_container,
          children: t.map(i => {
            if (n.hasOwnProperty(i)) {
              const o = n[i];
              let r = !((i === 4 || i === 5) && s[i] > 0);
              {
                let l = i >= 9 && i <= 11 ? "limited" : "sale";
                return e.jsx(td, {
                  item: o,
                  active: r,
                  type: l
                }, i)
              }
            }
            return null
          })
        }), e.jsx(qd, {})]
      })]
    })
  },
  fu = "_text_layout_1xggq_1",
  xu = "_text_1xggq_1",
  vu = "_button_layout_1xggq_14",
  yu = "_button_layout_placeholder_1xggq_26",
  wu = "_button_1xggq_14",
  xn = {
    text_layout: fu,
    text: xu,
    button_layout: vu,
    button_layout_placeholder: yu,
    button: wu
  },
  qn = "data:image/svg+xml,%3csvg%20height='18'%20viewBox='0%200%2017%2018'%20width='17'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='m.32%208.22c4.81-2.07%208.02-3.43%209.62-4.08%203.48-1.43%204.87-1.96%205.61-2.13.23-.06%201.45.29%201.45%201.18%200%202.58-1.32%208.8-1.87%2011.67-.23%201.22-1.88%201.6-3.74.45-1.47-.91-2.27-1.52-3.68-2.44-1.63-1.05-.58-1.63.35-2.58.25-.25%204.47-4.03%204.55-4.37.01-.04.02-.2-.08-.29-.09-.08-.24-.05-.34-.03-.14.03-2.46%201.54-6.96%204.53-.66.44-1.25.66-1.79.65-.59-.02-1.15-.05-2.56-.6-.94-.37-1.13-1.02-.56-1.96z'%20fill='%23fff'%20fill-rule='evenodd'/%3e%3c/svg%3e",
  ju = () => e.jsxs(ue, {
    children: [e.jsx("div", {
      className: xn.text_layout,
      children: e.jsx("span", {
        className: xn.text,
        children: e.jsx("h1", {
          children: "Probably nothing"
        })
      })
    }), e.jsx("div", {
      className: xn.button_layout_placeholder
    }), e.jsx("div", {
      className: xn.button_layout,
      children: e.jsxs("button", {
        className: xn.button,
        onPointerUp: () => {
          W("https://t.me/notpixel_channel")
        },
        children: [e.jsx("img", {
          alt: "tg_logo",
          src: qn
        }), "Telegram Channel"]
      })
    })]
  }),
  bu = "_content_9ogc8_1",
  Nu = {
    content: bu
  },
  Cu = () => {
    const t = te();
    return e.jsx(ue, {
      children: e.jsxs("div", {
        className: Nu.content,
        children: [e.jsx("h1", {
          children: "Terms of Service"
        }), e.jsx("h2", {
          children: "Legal disclaimer"
        }), e.jsxs("p", {
          children: ["Pease read the entirety of this “legal disclaimer” section carefully. Nothing herein constitutes legal, financial, business or tax advice and you should consult your own legal, financial, tax or other professional advisor(s) before engaging in any activity in connection herewith. Neither not pixel (the company), nor any of the project creations, developments or features in connection with accessing the app or website shall be liable for any kind of direct or indirect damage or loss whatsoever which you may suffer in connection with accessing the app (", e.jsx("a", {
            href: "https://t.me/notpixel",
            target: "_blank",
            children: "https://t.me/notpixel"
          }), "), website (", e.jsx("a", {
            href: "https://notpx.app",
            target: "_blank",
            children: "https://notpx.app"
          }), ") or any other features, innovations, visuals or technologies facilitated through the app or created by the company."]
        }), e.jsx("h2", {
          children: "Preamble"
        }), e.jsx("p", {
          children: "The Terms (as defined below) shall govern the use of Not Pixel (as defined below) and shall constitute a binding contract between the visitors, users, or any person interacting with Not Pixel as a website, an app or a product."
        }), e.jsx("p", {
          children: "By browsing the website or using the app or using the product, You acknowledge having read and understood the Terms and agree to be bound by all terms and conditions and comply with this document and all applicable laws and regulations."
        }), e.jsx("p", {
          children: "The visitors and users consent is given when they navigate the website or app on the following links:"
        }), e.jsxs("p", {
          children: ["THE APP (", e.jsx("a", {
            href: "https://t.me/notpixel",
            target: "_blank",
            children: "https://t.me/notpixel"
          }), "), WEBSITE (", e.jsx("a", {
            href: "https://notpx.app",
            target: "_blank",
            children: "https://notpx.app"
          }), ")"]
        }), e.jsx("p", {
          children: "The Ecosystem Operator reserves the right to apply any changes to the terms and conditions or to the interface of the app or website, additionally, The Ecosystem Operator reserves the right to update the products and services that may be available bearing the name Not Pixel “ a registered Trademark”."
        }), e.jsx("br", {}), e.jsx("p", {
          children: "The Agreement and Terms sheet shall govern the use of Not Pixel, the use of the app and its benefits, the relationship between the product and app and its users, as well as clarify the different layers that Not Pixel has created for the brand awareness and protection, any use of the brand/Trademark “Not Pixel” outside of its purpose is not permitted and shall never occur by Not Pixel and its ecosystem, any use of the Not Pixel Token other than its original utility is not the ecosystem provider’s responsibility."
        }), e.jsx("p", {
          children: "By using the App and browsing through any of its features, products or services, the user acknowledges having read and understood the products as well as this agreement and agrees to be bound by its terms and conditions and comply with the agreement and all applicable laws and regulations."
        }), e.jsx("p", {
          children: "If the Visitor is browsing the app and any of its functions on behalf of a business or other entity, the Visitor represents and warrants that the Visitor has the necessary authority to bind that business or entity to the terms and conditions of this Agreement and that the visitor agrees to this Agreement on behalf of that business or entity."
        }), e.jsx("p", {
          children: "By making use of the App, the visitor acknowledges and agrees that: (1) the visitor is aware of the risks associated with Crypto-assets, including but not limited to cybersecurity risks and regulatory risks, (2) The visitor shall assume all risks related to the use of the App and any Crypto assets transactions, and (3) the Ecosystem operator shall not be liable for any such risks or adverse outcomes."
        }), e.jsx("p", {
          children: "It is understood and presumed that, before purchasing, swapping or exchanging any Not Pixel or any other coin or token through the app, the user has the full understanding that Not Pixel app is not a direct seller of any tokens, and therefore it is considered that the user has fully read, understood and irrevocably accepted the terms and conditions of this Agreement. If any user does not agree with this Agreement in general or in any part, such user should refrain from using the app and any of its features, this Agreement contains important provisions, including an arbitration provision that requires all claims to be resolved by way of legally binding arbitration."
        }), e.jsx("p", {
          children: "The market value of crypto-assets may fluctuate significantly, and there is a substantial risk of economic losses when purchasing, selling or holding digital tokens."
        }), e.jsx("p", {
          children: "If any user does not agree with the terms and conditions of the agreement, the visitor should refrain from using the app or any of its features and functionalities."
        }), e.jsx("h2", {
          children: "Interpretation and Definitions"
        }), e.jsxs("ul", {
          children: [e.jsx("li", {
            children: "“Ecosystem Operator” shall mean the legal entity or entities operating Not Pixel as a digital ecosystem;"
          }), e.jsx("li", {
            children: "“App” Shall mean a mobile, web, and software as a service application and gaming application such as WEB3, accessible through the App on Telegram fully owned by the Ecosystem Operator;"
          }), e.jsx("li", {
            children: "“WEB3” an idea for a new iteration of the World Wide Web which incorporates concepts such as decentralisation, blockchain technologies, and token-based economics;"
          }), e.jsx("li", {
            children: "“Not Pixel” an idea translated into reality, a coin which is not a coin without the backing of those minting, transferring, using and holding the coin, all of which based on communities, a coin solely minted for its utility and holds no promises of security;"
          }), e.jsx("li", {
            children: "“Not Pixel” in addition to the above, Not Pixel is a Trademark, a product and a whole digital ecosystem."
          }), e.jsx("li", {
            children: "“Communities” the mass of real people being actively involved on the App who together create the power of WEB3;"
          }), e.jsx("li", {
            children: "“Tokens” shall mean any digital asset which is based on the cryptographic protocol of a computer network that may be (i) centralised or decentralised, (ii) closed or open-source, and (iii) used as a medium of exchange and/or store of value. Furthermore, a Token/Coin is expressed as a unit; capable of being transferred, stored, and traded on a peer-to-peer basis with or without conditions or limitations;"
          }), e.jsx("li", {
            children: "“User” or “You” Shall mean you, the user of Not Pixel App;"
          }), e.jsx("li", {
            children: "“Wallet” shall mean a combination of a User’s public address and corresponding private key (or mnemonic phrase or keystore file with password) that holds any tokens that are created and/or received on a public blockchain such as TON, which may associate with corresponding transactions related to this address;"
          }), e.jsxs("li", {
            children: ["“Platform” shall mean the Not Pixel App available on (", e.jsx("a", {
              href: "https://t.me/notpixel",
              target: "_blank",
              children: "https://t.me/notpixel"
            }), ")"]
          }), e.jsx("li", {
            children: "“Third Party Providers” Shall mean any third party whose technology is integrated within the Not Pixel App for various purposes;"
          }), e.jsx("li", {
            children: "“Not Pixel App Rules” refers to the all rules, interpretations, announcements, statements, letters of consent and other contents that have been and will be subsequently released by Not Pixel, as well as all regulations, implementation rules, product process descriptions, announcements published on official Not Pixel Social Media, Telegram channel or the App."
          }), e.jsx("li", {
            children: "“Governmental Authority” shall mean any government, any state or other political subdivision thereof, any entity exercising legislative, judicia. Or administrative functions of or pertaining to government, including, without limitations to any government authority, agency, department, board, commission or instrumentality, and any court, tribunal or arbitrator of competent jurisdiction, and any self-regulatory organisation."
          }), e.jsx("li", {
            children: "“GST” shall mean Goods and Services Tax."
          }), e.jsx("li", {
            children: "“Intellectual property” means any and all ownership or proprietary rights, rights of use or any other rights with respect to the domain names, app link or name, patents and patent applications, trade secrets, trademarks and service marks, trademark and service mark registrations and applications (including, but not limited to Not Pixel Trademark), any other trade names, design rights, logos, copyrights, copyright registrations and applications, and any other intellectual or industrial property right in connection or related to Not Pixel App products and features."
          })]
        }), e.jsxs("p", {
          children: [e.jsx("strong", {
            children: "Purpose: "
          }), "You agree that you are clicking to mine Not Pixel and by mining Not Pixel you are doing so for fun, for knowledge and to expand your horizon in the various ecosystems that may offer you tasks for boost. The main purpose is to enable you to join communities, get acquainted with projects and make your own decision by reading and participating. There isn’t and never will be a monetary purpose behind Not Pixel."]
        }), e.jsxs("p", {
          children: [e.jsx("strong", {
            children: "Health:"
          }), " For your own mental, physical and inner stability, it is recommended not to spend excessive screen time, pay attention to what surrounds you, do not cross the street while looking at your device, and do not ignore calls for help for the sake of a game. When exhausted, take a pause, stand up, take a deep breath, have a conversation with a real human. Not Pixel is not responsible for your health and will encourage you to treat others respectfully."]
        }), e.jsxs("p", {
          children: [e.jsx("strong", {
            children: "Mining and Value:"
          }), " Not Pixel is NOT a typical coin, in the sense that it has not been pre-minted, nor has it been planned to be distributed in trenches to certain fraudulent beneficiaries. Not Pixel is unlike any coin, it has no father, no mother, no rich scam backer to rug pool communities. Not Pixel is for the community, minted by you as you click, if any value arises from Not Pixel it is you the Minter and user who has created such value, and it is by your decision as a community of users that such value may change, vanish, accumulate or never exist."]
        }), e.jsxs("p", {
          children: [e.jsx("strong", {
            children: "End of the Mining Process:"
          }), " At the end of the Mining process all Not Pixel Miners if actively using the Not Pixel App and its features are redirected and given instructions on how to successfully receive their $NOTPX at a given time and through a given process. You agree that $NOTPX has never been a promise for leverage or value, nor is it announced or agreed to be a store of value."]
        }), e.jsxs("p", {
          children: [e.jsx("strong", {
            children: "Distribution and Listing:"
          }), " Most coins have a planned distribution, Not Pixel has you. Most coins have scheduled or planned listings, Not Pixel is spontaneous. If you are an exchange, be it Centralised or Decentralised Not Pixel does Not care. You Mint it, you List it. There are NO Team Tokens, No Ghost Tokens, No Investors allocations, No Public round Tokens, No Seed Round Tokens, No Private Round Tokens, No Founders Tokens, There are only Not Pixels and it is for you to decide how to distribute your Not Pixels which are made under your possession by your mining activity and your subsequent active presence within the app and its ecosystem."]
        }), e.jsxs("p", {
          children: [e.jsx("strong", {
            children: "Project purpose:"
          }), " You agree that you are acquiring $NOTPX to participate in Not Pixel and to obtain services on the ecosystem thereon. The Company, the Distributor and their respective affiliates would develop and contribute to the underlying source code for Not Pixel. The Company is acting solely as an arms’ length third party in relation to the $NOTPX distribution and minting, and not in the capacity as a financial advisor or fiduciary of any person with regard to the distribution of $NOTPX."]
        }), e.jsxs("p", {
          children: [e.jsx("strong", {
            children: "Token Documentation:"
          }), " Nothing in the Whitepaper, the App, or the Website constitutes any offer by the Ecosystem Operator or the Not Pixel team to sell any $NOTPX (as defined herein) nor shall it or any part of it nor the fact of its presentation form the basis of, or be relied upon in connection with, any contract or investment decision. Nothing contained in the Whitepaper, the App, or the Website is or may be relied upon as a promise, representation or undertaking as to the future performance of Not Pixel. The agreement between the Ecosystem Operator and you, in relation to any distribution or transfer of $NOTPX, is to be governed only by the separate terms and conditions of such agreement."]
        }), e.jsx("p", {
          children: "The information set out in the Whitepaper, the App and the Website is for community discussion only and is not legally binding. No person is bound to enter into any contract or binding legal commitment in relation to the minting or acquisition of $NOTPX and no digital asset or other form of payment is to be accepted on the basis of the Whitepaper or the Website."
        }), e.jsxs("p", {
          children: [e.jsx("strong", {
            children: "Buying or Selling on Not Pixel App:"
          }), " The App is a product which is made available to you, its functions develop over time and your ability to use it as a decentralised App is the norm. Anything that may be offered on an exchange basis within the App is made available to you by third party providers and has no link to $NOTPX as a token. The App is developed and maintained periodically, the features that may lead you to the possibility of buying, selling or participating in any type of payment agreement are strictly made available to you through licensed third party entities and only after thorough due diligence, KYB (Know your Business) and AML (Anti Money Laundering) procedures."]
        }), e.jsxs("p", {
          children: [e.jsx("strong", {
            children: "APP Requirements:"
          }), " By accessing the App, the user represents and warrants that:"]
        }), e.jsxs("ul", {
          children: [e.jsx("li", {
            children: "As an individual, legal person, or other organization, it has full legal capacity and sufficient authorisations to enter into these Terms;"
          }), e.jsx("li", {
            children: "It has not been previously suspended or removed from using the Services;"
          }), e.jsx("li", {
            children: "The use of the Services will not violate any and all laws and regulations applicable to the User; including but not limited to regulations on AML, anti-corruption, and counter-terrorst financing."
          })]
        }), e.jsxs("p", {
          children: [e.jsx("strong", {
            children: "Prohibited Actions:"
          }), " The user is entitled to use the App only in conformity with the laws of its country of residence and of the country from which it accesses the App."]
        }), e.jsx("p", {
          children: "The unser may solely make legal use of the App, and any illegal or inappropriate use of the App is banned. In particular, the user agrees to browse the App lawfully and without any violation of the Agreement or any applicable law and agree not to do any of the following actions in connection with its use of the APP:"
        }), e.jsxs("ul", {
          children: [e.jsx("li", {
            children: "Access or use the APP in a manner that could interfere with, disrupt, negatively affect, or inhibit anyone from fully enjoying the App, including, but not limited to, defamatory, harassing, threatening, bigoted, hateful, vulgar, obscene, pornographic, or otherwise offensive behaviour or content;"
          }), e.jsx("li", {
            children: "Access or use the APP for any illegal or unauthorised purpose or engage in, encourage, or promote any illegal activity, or any activity that violates these Terms & Conditions or any other terms or policies provided in connection with the APP."
          }), e.jsx("li", {
            children: "Intimidate or harass any person or entity, or falsely state or otherwise misrepresent the User or the User’s affiliation with any person or entity;"
          }), e.jsx("li", {
            children: "damage, disable, overburden, or impair the functionality of the App in any manner;"
          }), e.jsx("li", {
            children: "Distribute or post spam, unsolicited or bulk electronic communications, advertising, solicitations, promotional materials, chain letters, or pyramid schemes;"
          }), e.jsx("li", {
            children: "Upload, post, transmit, distribute, or otherwise made available any material that contains software viruses, malwares, ransomwares or spywares or any other codes, files or programs designed to interrupt, destroy, or limit the functionality of any device of software or hardware, mobile devices or telecommunications equipment or any other technologies that may harm the App or the interests of property of the Users or of the ecosystem operator."
          }), e.jsx("li", {
            children: "export or re-export any applications, code or tools developed by and proprietary to the Ecosystem Operator except as in strict compliance with the export control laws of any relevant jurisdictions and in accordance with posted rules and restrictions;"
          }), e.jsx("li", {
            children: "use any robot, spider, crawler, scraper, or other automated means or interface not provided or authorized by the Ecosystem Operator to access the App or to extract data or information from the App;"
          }), e.jsx("li", {
            children: "commercialize any application, code, or any information or software associated with such application and/or the App without the prior consent of the Ecosystem Operator;"
          }), e.jsx("li", {
            children: "upload, post, transmit, distribute, store, or otherwise make publicly available on the App any personal data of Users, or of any Third-party without the person’s prior explicit consent;"
          }), e.jsx("li", {
            children: "harvest or otherwise collect information or data about Users without their consent or use automated scripts to collect information from or otherwise interact with the App;"
          }), e.jsx("li", {
            children: "upload, post, transmit, distribute, store, or otherwise make available content that, in the sole judgement of the Ecosystem Operator, is objectionable, misleading or which restricts or inhibits any other person from using the App, or which may expose the Ecosystem Operator or its Users to any harm or liability of any type;"
          }), e.jsx("li", {
            children: "upload, post, transmit, distribute, store, or otherwise make available content that would constitute, encourage, or provide instructions for a criminal offence;"
          }), e.jsx("li", {
            children: "Copy, modify, distribute, sell, or lease any part of the App;"
          }), e.jsx("li", {
            children: "Reverse engineer or attempt to extract the source code of the App;"
          }), e.jsx("li", {
            children: "Interfere or attempt to disrupt the App in any way;"
          }), e.jsx("li", {
            children: "Circumvent or attempt to circumvent any filtering, security measures or other features designed to protect the App, or third parties;"
          }), e.jsx("li", {
            children: "Infringe upon or violate the rights of the Ecosystem Operator, the Users or any third party; and"
          }), e.jsx("li", {
            children: "Facilitate or assist another person to do any of the above acts."
          })]
        }), e.jsxs("p", {
          children: [e.jsx("strong", {
            children: "Privacy Policy:"
          }), " This Privacy Policy outlines how Notcoin App and website processes the information We collect about you through our App and when you otherwise interact with us. This Privacy Policy sets out the basis on which any personal data you as a User of the Ape Terminal App and Services (“", e.jsx("strong", {
            children: "User"
          }), "” or “", e.jsx("strong", {
            children: "You"
          }), "”) provide to us, will be used, processed or disclosed by us. By accessing or using the App, its features or other Services (as defined in the Terms of Service for the App, accessible on our App), You accept this Privacy Policy and agree to comply with its terms. Please read the following Privacy Policy carefully to understand our views and practices regarding your personal data and how We will treat it. If You do not consent to the same, please do not access or use the App or the Services."]
        }), e.jsx("p", {
          children: "We reserve the right to amend or modify this Privacy Policy at any time and in response to changes in applicable law or our business practices. Please check frequently to see any updates or changes to our Privacy Policy."
        }), e.jsx("p", {
          children: "What Data does Notcoin App receive:"
        }), e.jsxs("ul", {
          children: [e.jsx("li", {
            children: "Your screen name, username and profile picture(s)"
          }), e.jsx("li", {
            children: "Your messages when you send us something"
          }), e.jsx("li", {
            children: "If you click on links or buttons provided by the App, the App can get your IP address only if the app controls the website to which the link leads."
          })]
        }), e.jsx("p", {
          children: "You hereby acknowledge and accept that if we deem necessary, we are able to collect and otherwise use your data as described above in order to allow you access and use the App or website and in order to allow you to participate on the App or any services or opportunities that may be offered on our Website."
        }), e.jsx("p", {
          children: "We hereby acknowledge that in collecting your data, we are bound by the Data Protection Act. We will protect your personal information and respect your privacy in accordance with best business practices and applicable laws."
        }), e.jsx("p", {
          children: "We will use your data to allow you to participate on the App and to carry out operations relevant to your participation on the App and website. By using the App and Website you acknowledge and accept that employees of the company shall have no access to your personal data except in the case where we are obliged to inform you of changes, new services and promotions that we think you may find interesting. If you do not wish to receive such direct marketing correspondences, you may opt out of the service."
        }), e.jsx("p", {
          children: "Your personal data will not be disclosed to third parties, unless such a disclosure is required by law. We do not share your personal data with any third party service providers."
        }), e.jsxs("p", {
          children: [e.jsx("strong", {
            children: "Safeguarding Personal Data:"
          }), " we will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy."]
        }), e.jsx("p", {
          children: "We do not collect any personal data except for the data reasonably available to the App by you as a Telegram user, and therefore we will not store or transfer your data."
        }), e.jsxs("p", {
          children: [e.jsx("strong", {
            children: "Personal Data:"
          }), " The Ecosystem Provider will not ask you for any personal information for the purpose of the App, NOTCOIN shall never ask you for your identification nor store any personal information, when clicking on a product delivered to you through the App, the product is the property of a third party, and therefore any third party providing their product on the App, such third party’s data collection and compliance is not in anyway connected to the App and therefore such third party will have their own compliance terms and data protection terms."]
        }), e.jsx("p", {
          children: "For more information about our detailed privacy Policy, Please lick on the link:"
        }), e.jsx("p", {
          children: e.jsx("a", {
            onPointerUp: () => {
              t.push("/privacy")
            },
            children: "https://notpx.app/privacy"
          })
        }), e.jsxs("p", {
          children: [e.jsx("strong", {
            children: "Trademarks:"
          }), " This section addresses Intellectual property and trademark questions that Not Pixel is often asked about, and the Ecosystem Operator’s approach to managing IP. For the benefit of the Not Pixel community we elaborate here. There are many types of IP, but for this FAQ, we are focusing on copyright and trademark as they relate to the Not Pixel “brand”. This FAQ does not cover issues related to the Not Pixel code, which is and will remain open-source."]
        }), e.jsx("p", {
          children: "A trademark is a way for a person, company or organisation to be identified as the provider of certain goods and services. Many famous brand names and logos are registered trademarks. This means that when people look at the good or service in question, they instantly recognise who is offering it! Like copyright, a trademark owner has the right to prevent others from using the relevant mark without consent. However, unlike copyright, trademarks indicate the “origin” of a product or service, and needs to be formally registered. The trademark, therefore, helps provide certainty, as a ‘guarantee of origin’."
        }), e.jsx("p", {
          children: "The Not Pixel Ecosystem Operator represents the a vast community of Web3 movement built on Telegram, designed to develop a utility token for the People, by the people. We don’t want Not Pixel community to be misled or taken advantage of by individuals or companies using the Not Pixel brand without permission or accountability. For this reason, we don’t like it when people who don’t care about Not Pixel try to make money off of the name and logo. This damages the brand and so damages our community. When someone does something in an unfair way, such as registering someone else’s brand, this is known as doing so in “bad faith”. When this happens, and if we think there is a risk of the Not Pixel brand being damaged, we ask our Legals to review the situation."
        }), e.jsx("p", {
          children: "This Does not mean people can’t make Not Pixel fan products through online Marketplace, on the contrary, we love it when people use the meme in a fun way, as this is consistent with our values of being a welcoming community, we are about the community and no profit-driven economics, this is why we don’t like people registering the Not Pixel Brand or using the name or logo with a view to making profit for themselves."
        }), e.jsx("p", {
          children: "Why has the Not Pixel Ecosystem Provider registered the word “Not Pixel” and other logos: If someone else registers the trademarks, they may not have the Not Pixel community’s best interests at heart. If someone else owns the logo, they may try to prevent the Not Pixel Community and other fans and frens from using it, too! For that reason, the Ecosystem Operator has chosen to register the trademarks; holding it safe for the Not Pixel community. The reality is that the majority of open-source projects have registered trademarks, which enables them to protect their logo and name for the good of their community. The trademark system is not perfect. It is complex, and cumbersome – much paperwork, such registration deadlines! However, they ultimately protect our community and the Not Pixel name against misuse and exploitation. Trademarks held by the genuine entity, means the logo and name can be better protected from misuse and made available as appropriate under transparent and accessible terms."
        }), e.jsxs("p", {
          children: [e.jsx("strong", {
            children: "References to companies and platforms:"
          }), " The use of any company and/or platform names or trademarks on the App or throughout the App (save for those which relate to the Ecosystem Operator) does not imply any affiliation with, or endorsement by, any third party. Any game, service or third party available on the App is an independent entity and does not in any way transmit any liability towards the Ecosystem Operator."]
        }), e.jsxs("p", {
          children: [e.jsx("strong", {
            children: "Limited Licence:"
          }), " The Ecosystem Operator hereby grants the Users and any third party listed or using Not Pixel as an App, a personal, non-exclusive, non-transferable, non-sublicensable and limited licence, subject to the terms of this Agreement, to access and use Not Pixel App solely for information, transactional, or other approved purposes as permitted by the Ecosystem Operator from time to time. Any other use of the Not Pixel App is expressly prohibited. All other rights in the Not Pixel App are reserved by the Ecosystem operator. The Ecosystem Operator reserves all rights in the Not Pixel App, and the Users and the Service providers agree that this Agreement does not grant any rights in or licences to the Not Pixel App, except for this express, limited licence. The User along with any service provider will not otherwise copy, transmit, distribute, sell, resell, license, decompile, reverse engineer, disassemble, modify, publish, create derivative worlds from, perform, display, incorporate into another Website or App, or any other way exploit any of the content available on the Not Pixel App or any other part of the Not Pixel App or platform or any derivative works thereof, in whole or in part for commercial or non-commercial purposes. Without limiting the foregoing, The User or any Service Provider, will not frame or display the Not Pixel App or landing page platform or any portion thereof as part of any other website or App or any other work of authorship without the prior written permission of the Ecosystem Operator, if any party violates any portion of this Agreement, the Parties access to the App may be terminated pursuant to this Agreement. In addition, the Ecosystem Operator reserves the right to all remedies available at law and in equity for any such violation. The User(s) and the Service Provider(s) may not assign any of their rights, licences, or obligations under this Agreement without the Ecosystem Operator’ prior written consent. Any such attempt at assignment by the Parties shall be void. The Ecosystem Operator may assign its rights, licences, and obligations under this Agreement without limitation and without prior consent."]
        }), e.jsx("p", {
          children: "This Agreement, and any rights and licences granted hereunder, may not be transferred or assigned by the Parties but may be assigned by the Ecosystem Operator without restriction, including without limitation to any of its affiliates or subsidiaries, or to any successor in interest of any business associated with the Not Pixel App Services. Any attempted transfer or assignment in violation hereof shall be null and void."
        }), e.jsxs("p", {
          children: [e.jsx("strong", {
            children: "Intellectual Property Rights:"
          }), " Intellectual property rights and all other proprietary rights in relation to the content available on the App or landing page (including but not limited to software, mobile software, algorithms, codes, audio, video, text, animations, files, photographs designs, graphics, layouts, images, video, information, and their selection and arrangement) (hereinafter: the “App Content”) are the exclusive property of the Ecosystem Operator and its licensors. The Ecosystem Operator or its licensors’ rights to the App Content include rights to: the App; and all designs, layouts, software displayed and technical information associated with the App. All intellectual property rights on the App content not expressly granted herring are reserved to the Ecosystem Operator. All copyright and other proprietary notices shall be retained on all reproductions. And other use of the App content, including without limitation distribution, reproduction, modification, making available, communicating to the public, publicly performing, frame, download, display, or transmission, in whole or in part, without the prior written consent of the Ecosystem Operator is strictly prohibited."]
        }), e.jsx("p", {
          children: "Users and Service Providers may not derive or attempt to derive the source code of all or any portion of the Software or mobile software, permit any third party to derive or attempt to derive such source code, or reverse engineer, decompile, disassemble, or translate the software or any part thereof."
        }), e.jsx("p", {
          children: "The Ecosystem Operator and its licensors own and shall retain all Intellectual property rights and other rights in and to the Software, and any changes, modifications or corrections thereto, subject to open source software used in relation to the App."
        }), e.jsx("p", {
          children: "The Ecosystem Operator, together with its licensors expressly reserve all Intellectual property rights in all text, programs, products, processes, technology, content, source code, object codes, layouts, and other materials, which appear on the App. Access to the App does not confer and shall not be considered as conferring upon anyone any licence under any of our or any third party's intellectual property rights. Any use of the App, including copying or storing it in whole or part, other than for own personal, non-commercial use, is prohibited without the prior consent of the Ecosystem Operator."
        }), e.jsx("p", {
          children: "Not Pixel App and any Services, including their design elements or concepts and any and all underlying Intellectual Property, including, but not limited to any registered trademarks, are the property of the Ecosystem Operator and/or Projects (as applicable), and are protected by copyright, patent, trade secret and other Intellectual Property laws. The Ecosystem Operator and its licensors retain any and all rights, title and interest in and to Not Pixel App and Services (including, without limitation, all Intellectual Property rights), including all copies, modifications, extensions and derivative works thereof. The Participant’s right to use the Not Pixel App and Services is limited to the rights expressly granted in this Agreement. No licences to use any of trademarks or any other Not Pixel brands are to be inferred or assumed pursuant to the use of any Services. All rights not expressly granted to the User are reserved and retained by the Ecosystem Operator, the Service providers and their licensors."
        }), e.jsxs("p", {
          children: [e.jsx("strong", {
            children: "Network Costs:"
          }), " Users may be charged by the network provider for data services or any other third party charges as may arise while using the App, and the Users accept responsibility for such charges. Certain Services provided on the App may apply charges, such charges may be for operational and maintenance and the Users accept such charges as they may arise."]
        }), e.jsxs("p", {
          children: [e.jsx("strong", {
            children: "Downtime:"
          }), " From time to time, the Ecosystem Operator updates or maintains the App, which will result in the App not being available for a certain period of time. The Ecosystem Operator does not warrant that the App operates uninterrupted or error-free. The Ecosystem Operator is not responsible for any damages or losses suffered by the Parties as a result of any failure or interruption of the App or suspension of the parties access to the App. Services on the App are the property of third party providers, the App and the Ecosystem Operator are not responsible for any damage such third party providers may cause in case of downtime. In the event that a technical problem causes outage or errors, the Ecosystem Operator may temporarily suspend access to the Parties until the problem is resolved."]
        }), e.jsxs("p", {
          children: [e.jsx("strong", {
            children: "Third Party Materials:"
          }), " From time to time, the Not Pixel App may contain references or links to third-party materials (including, without limitation, websites or apps) and third-party applications which are not controlled by us. Such information, links, and third-party applications are provided as a convenience to User(s) and Project(s). Such links should not be considered endorsements and such reference does not imply our recommendation, approval, affiliation, or sponsorship of that respective property, product, service, or process. User(s) and Project(s) acknowledge and agree that the Ecosystem Operator is not responsible for any aspect of the information, content, or services contained in any third-party materials or on any third-party sites accessible or linked to the Not Pixel App, including without limitation content, property, goods or services available on the linked sites or services."]
        }), e.jsxs("p", {
          children: [e.jsx("strong", {
            children: "Force Majeure:"
          }), " The Ecosystem Operator shall not be liable for delays, failure in performance or interruption of service which result directly or indirectly from Any cause or condition beyond our reasonable control, including but not limited to, any delay or failure due to any act of God, act of civil or military authorities, act of terrorists, civil disturbance, war, strike or other labour dispute, fire, interruption in telecommunications or Internet services or network provider services, failure of equipment and/or software, other catastrophe or any other occurrence which is beyond the Ecosystem Operator’s reasonable control and shall not affect the validity and enforceability of any remaining provisions. A Cyber security breach in the Not Pixel digital ecosystem shall be also considered a force majeure."]
        }), e.jsxs("p", {
          children: [e.jsx("strong", {
            children: "Indemnification:"
          }), " The user(s) and the Project(s) agree to indemnify and hold the Ecosystem Operator and its subsidiaries and/or affiliates and each of their respective officers, directors, agents, joint venturers, employees and representatives, harmless from any claim or demand (including attorneys’ fees and any fines, fees or penalties imposed by any regulatory authority) arising out of or related to: breach of this Agreement, use of or inability to use the App, violation of the Agreement or any other applicable terms, policies, warnings, warranties, or instructions provided by the Ecosystem Operator in relation to the App, use of Not Pixel and App, violation of any applicable law or any rights of any third party."]
        }), e.jsxs("p", {
          children: [e.jsx("strong", {
            children: "Entire Agreement and Severability:"
          }), " The Terms & Conditions, is subject to any amendments or modifications made by the Ecosystem Operator from time to time and shall constitute the entire agreement between you and the Ecosystem Operator with respect to the use of the App (hereinafter referred to as the “Entire Agreement”), this Document shall not in anyway regulate or form any sort of agreement between the User and any Provider on the App, every Provider shall have their own Terms of Use disconnected from the App and therefore the App is only a platform for such Providers to reach the ultimate number of users ethically, if any provisions of the Terms or in general the entire Agreement is found to be invalid by a court or another competent jurisdiction, that provision only will be limited to the minimum extent necessary, and the remaining provisions will remain in full force and effect."]
        })]
      })
    })
  },
  Iu = "_content_7fuxa_1",
  Pu = {
    content: Iu
  },
  Su = () => e.jsx(ue, {
    children: e.jsxs("div", {
      className: Pu.content,
      children: [e.jsx("h1", {
        children: "Privacy Policy"
      }), e.jsx("p", {
        children: "We respect your privacy and are committed to protecting it through our compliance with this privacy policy (“Policy”). This Policy describes the types of information we may collect from you or that you may provide (“Personal Information”) in the “Not Pixel Bot” mobile application (“Mobile Application” or “Service”) and any of its related products and services, including tg bot (collectively, “Services”), and our practices for collecting, using, maintaining, protecting, and disclosing that Personal Information. It also describes the choices available to you regarding our use of your Personal Information and how you can access and update it."
      }), e.jsx("p", {
        children: "This Policy is a legally binding agreement between you (“User”, “you” or “your”) and Not Pixel LLC (doing business as “Not Pixel”, “we”, “us” or “our”). If you are entering into this Policy on behalf of a business or other legal entity, you represent that you have the authority to bind such an entity to this Policy, in which case the terms “User”, “you” or “your” shall refer to such entity. If you do not have such authority, or if you do not agree with the terms of this Policy, you must not accept this Policy and may not access and use the Mobile Application and Services. By accessing and using the Mobile Application and Services, you acknowledge that you have read, understood, and agree to be bound by the terms of this Policy. This Policy does not apply to the practices of companies that we do not own or control, or to individuals that we do not employ or manage."
      }), e.jsx("h2", {
        children: "Collection of information"
      }), e.jsx("p", {
        children: "When you use the Mobile Application, our servers automatically record information that your device sends. This data may include information such as your device’s IP address and location, device name and version, operating system type and version, language preferences, information you search for in the Mobile Application, access times and dates, and other statistics."
      }), e.jsx("p", {
        children: "Information collected automatically is used only to identify potential cases of abuse and establish statistical information regarding the usage of the Mobile Application and Services. This statistical information is not otherwise aggregated in such a way that would identify any particular User of the system and we do not collect or store any personally identifiable information."
      }), e.jsx("h2", {
        children: "Use and processing of collected information"
      }), e.jsx("p", {
        children: "We act as a data controller and a data processor when handling Personal Information, unless we have entered into a data processing agreement with you in which case you would be the data controller and we would be the data processor."
      }), e.jsx("p", {
        children: "Our role may also differ depending on the specific situation involving Personal Information. We act in the capacity of a data controller when we ask you to submit your Personal Information that is necessary to ensure your access and use of the Mobile Application and Services. In such instances, we are a data controller because we determine the purposes and means of the processing of Personal Information."
      }), e.jsx("p", {
        children: "We act in the capacity of a data processor in situations when you submit Personal Information through the Mobile Application and Services. We do not own, control, or make decisions about the submitted Personal Information, and such Personal Information is processed only in accordance with your instructions. In such instances, the User providing Personal Information acts as a data controller."
      }), e.jsx("p", {
        children: "In order to make the Mobile Application and Services available to you, or to meet a legal obligation, we may need to collect and use certain Personal Information. If you do not provide the information that we request, we may not be able to provide you with the requested products or services. Any of the information we collect from you may be used for the following purposes:"
      }), e.jsxs("ul", {
        children: [e.jsx("li", {
          children: "Improve products and services"
        }), e.jsx("li", {
          children: "Enforce terms and conditions and policies"
        }), e.jsx("li", {
          children: "Protect from abuse and malicious users"
        }), e.jsx("li", {
          children: "Run and operate the Mobile Application and Services"
        })]
      }), e.jsx("p", {
        children: "Processing your Personal Information depends on how you interact with the Mobile Application and Services, where you are located in the world and if one of the following applies: (a) you have given your consent for one or more specific purposes; (b) provision of information is necessary for the performance of this Policy with you and/or for any pre-contractual obligations thereof; (c) processing is necessary for compliance with a legal obligation to which you are subject; (d) processing is related to a task that is carried out in the public interest or in the exercise of official authority vested in us; (e) processing is necessary for the purposes of the legitimate interests pursued by us or by a third party."
      }), e.jsx("p", {
        children: "We rely on user’s consent as a legal base upon which we collect and process your Personal Information."
      }), e.jsx("p", {
        children: "Note that under some legislations we may be allowed to process information until you object to such processing by opting out, without having to rely on consent or any other of the legal bases above. In any case, we will be happy to clarify the specific legal basis that applies to the processing, and in particular whether the provision of Personal Information is a statutory or contractual requirement, or a requirement necessary to enter into a contract."
      }), e.jsx("h2", {
        children: "Disclosure of information"
      }), e.jsx("p", {
        children: "Depending on the requested Services or as necessary to complete any transaction or provide any Service you have requested, we may share your information with our contracted companies, and service providers (collectively, “Service Providers”) we rely upon to assist in the operation of the Mobile Application and Services available to you and whose privacy policies are consistent with ours or who agree to abide by our policies with respect to Personal Information. We will not share any personally identifiable information with third parties and will not share any information with unaffiliated third parties."
      }), e.jsx("p", {
        children: "Service Providers are not authorized to use or disclose your information except as necessary to perform services on our behalf or comply with legal requirements. Service Providers are given the information they need only in order to perform their designated functions, and we do not authorize them to use or disclose any of the provided information for their own marketing or other purposes."
      }), e.jsx("h2", {
        children: "Retention of information"
      }), e.jsx("p", {
        children: "We will retain and use your Personal Information for the period necessary to comply with our legal obligations, to enforce our Policy, resolve disputes, and unless a longer retention period is required or permitted by law."
      }), e.jsx("p", {
        children: "We may use any aggregated data derived from or incorporating your Personal Information after you update or delete it, but not in a manner that would identify you personally. Once the retention period expires, Personal Information shall be deleted. Therefore, the right to access, the right to erasure, the right to rectification, and the right to data portability cannot be enforced after the expiration of the retention period."
      }), e.jsx("h2", {
        children: "Transfer of information"
      }), e.jsx("p", {
        children: "Depending on your location, data transfers may involve transferring and storing your information in a country other than your own. However, this will not include countries outside the European Union and European Economic Area. If any such transfer takes place, you can find out more by checking the relevant sections of this Policy or inquire with us using the information provided in the contact section. Note that we are dedicated to ensuring the security of your personal data, adhering strictly to the guidelines outlined in our privacy notice and conforming to the applicable legal requirements."
      }), e.jsx("h2", {
        children: "Region specific notices"
      }), e.jsx("p", {
        children: "Out of respect for your privacy, we have implemented additional measures to comply with the obligations and rights associated with the collection of Personal Information as dictated by the laws governing the regions of our users."
      }), e.jsx("h2", {
        children: "Disclosures for residents of the EU/EEA and the UK"
      }), e.jsx("p", {
        children: "If you are a resident of the European Union (“EU”), the European Economic Area (“EEA”), or the United Kingdom (“EEA”), you have certain rights in relation to your Personal Information based on the the GDPR and the UK DPA that we comply with as part of our commitment to your privacy. Unless otherwise expressly stated, all terms in this section have the same meaning as defined in the GDPR and the UK DPA."
      }), e.jsxs("p", {
        children: [e.jsx("strong", {
          children: "(a)"
        }), " Right to withdraw consent: You have the right to withdraw consent where you have previously given your consent to the processing of your Personal Information. To the extent that the legal basis for our processing of your Personal Information is consent, you have the right to withdraw that consent at any time. Withdrawal will not affect the lawfulness of processing before the withdrawal."]
      }), e.jsxs("p", {
        children: [e.jsx("strong", {
          children: "(b)"
        }), " Right to access: You have the right to learn if your Personal Information is being processed by us, obtain disclosure regarding certain aspects of the processing, and obtain a copy of your Personal Information undergoing processing."]
      }), e.jsxs("p", {
        children: [e.jsx("strong", {
          children: "(c)"
        }), " Right to rectification: You have the right to verify the accuracy of your information and ask for it to be updated or corrected. You also have the right to request us to complete the Personal Information you believe is incomplete."]
      }), e.jsxs("p", {
        children: [e.jsx("strong", {
          children: "(d)"
        }), " Right to object to the processing: You have the right to object to the processing of your information if the processing is carried out on a legal basis other than consent. Where Personal Information is processed for the public interest, in the exercise of an official authority vested in us, or for the purposes of the legitimate interests pursued by us, you may object to such processing by providing a ground related to your particular situation to justify the objection."]
      }), e.jsxs("p", {
        children: [e.jsx("strong", {
          children: "(e)"
        }), " Right to restrict to the processing: You have the right, under certain circumstances, to restrict the processing of your Personal Information. These circumstances include: the accuracy of your Personal Information is contested by you and we must verify its accuracy; the processing is unlawful, but you oppose the erasure of your Personal Information and request the restriction of its use instead; we no longer need your Personal Information for the purposes of processing, but you require it to establish, exercise or defend your legal claims; you have objected to processing pending the verification of whether our legitimate grounds override your legitimate grounds. Where processing has been restricted, such Personal Information will be marked accordingly and, with the exception of storage, will be processed only with your consent or for the establishment, to exercise or defense of legal claims, for the protection of the rights of another natural, or legal person or for reasons of important public interest."]
      }), e.jsxs("p", {
        children: [e.jsx("strong", {
          children: "(f)"
        }), " Right to delete: You have the right, under certain circumstances, to obtain the erasure of your Personal Information from us. These circumstances include: the Personal Information is no longer necessary in relation to the purposes for which it was collected or otherwise processed; you withdraw consent to consent-based processing; you object to the processing under certain rules of applicable data protection law; the processing is for direct marketing purposes; and the personal data have been unlawfully processed. However, there are exclusions of the right to erasure such as where processing is necessary: for exercising the right of freedom of expression and information; for compliance with a legal obligation; or for the establishment, to exercise or defense of legal claims."]
      }), e.jsxs("p", {
        children: [e.jsx("strong", {
          children: "(g)"
        }), " Right to data portability: You have the right to receive your Personal Information that you have provided to us in a structured, commonly used, and machine-readable format and, if technically feasible, to have it transmitted to another controller without any hindrance from us, provided that such transmission does not adversely affect the rights and freedoms of others."]
      }), e.jsxs("p", {
        children: [e.jsx("strong", {
          children: "(h)"
        }), " Right to complaint: You have the right to complain to a data protection authority about our collection and use of your Personal Information. If you are not satisfied with the outcome of your complaint directly with us, you have the right to lodge a complaint with your local data protection authority. For more information, please contact your local data protection authority in the EU or the EEA. This provision is applicable provided that your Personal Information is processed by automated means and that the processing is based on your consent, on a contract which you are part of, or on pre-contractual obligations thereof."]
      }), e.jsx("h2", {
        children: "Disclosures for residents of the USA"
      }), e.jsx("p", {
        children: "If you are a resident of, you have certain rights and we aim to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Information. This supplemental section, together with other relevant sections of the Policy, provides information about your rights and how to exercise them under the California Consumer Privacy Act and the California Privacy Rights Act (collectively, “CCPA”), the Colorado Privacy Act (“CPA”), the Connecticut Data Privacy Act (“CDPA”), the Delaware Online Privacy and Protection Act (“DOPPA”), the Iowa Consumer Data Protection Act (“ICDPA”), the Maryland Personal Information Protection Act (“PIPA”), the Utah Consumer Privacy Act (“UCPA”), the Virginia Consumer Data Protection Act (“VCDPA”), and and any and all regulations arising therefrom. Unless otherwise expressly stated, all terms in this section have the same meaning as defined in the related state laws."
      }), e.jsx("p", {
        children: "In addition to the rights as explained in this Policy, if you provide Personal Information as defined in the statute to obtain Services for personal, family, or household use, you have the right to submit requests related to your Personal Information once a calendar year. Note that there are circumstances when we may not be able to comply with your request such as when we are not be able to verify your request or we may find that providing a full response conflicts with other legal obligations or regulatory requirements. You will be notified if it’s the case."
      }), e.jsxs("p", {
        children: [e.jsx("strong", {
          children: "(a)"
        }), " Right to know and right to access: You have the right to request certain information we have collected about you. Once we receive and confirm a verifiable request from you, we will disclose to you, to the extent permitted by law:"]
      }), e.jsxs("ul", {
        children: [e.jsx("li", {
          children: "The specific pieces of Personal Information we hold about you."
        }), e.jsx("li", {
          children: "The categories of sources from which Information about you is collected."
        }), e.jsx("li", {
          children: "The purposes for collecting, selling, or sharing your Personal Information."
        })]
      }), e.jsx("p", {
        children: "You have the right to request that the Personal Information to be delivered in a format that is both portable and easily usable, as long as it is technically possible to do so."
      }), e.jsxs("p", {
        children: [e.jsx("strong", {
          children: "(b)"
        }), " Right to correct: You have the right to request that we correct your inaccurate Personal Information taking into account the nature of the Personal Information and the purposes of the processing of the Personal Information."]
      }), e.jsxs("p", {
        children: [e.jsx("strong", {
          children: "(c)"
        }), " Right to delete: You have the right to request deletion of your Personal Information."]
      }), e.jsxs("p", {
        children: [e.jsx("strong", {
          children: "(d)"
        }), " Right to opt-out of the sale and sharing: You have the right to opt-out of the sale of your Personal Information which may include selling, disclosing, or transferring Personal Information to another business or a third party for monetary or other valuable consideration."]
      }), e.jsxs("p", {
        children: [e.jsx("strong", {
          children: "(e)"
        }), " Right to consent to or limit the use of your sensitive personal information: You have the right to consent to the use of your Sensitive Personal information and to direct us to restrict its use and disclosure solely to what is essential for carrying out or delivering the Services in a manner reasonably anticipated by an average user, or for certain business objectives as specified by law. However, we do not use Sensitive Personal Information for any purposes other than those legally permitted or beyond the scope of your consent."]
      }), e.jsxs("p", {
        children: [e.jsx("strong", {
          children: "(f)"
        }), " Right to non-discrimination: You have the right to not be discriminated against in the Services or quality of Services you receive from us for exercising your rights. We may not, and will not, treat you differently because of your data subject request activity, and we may not and will not deny goods or Services to you, charge different rates for goods or Services, provide a different level quality of goods or Services, or suggest that we would treat you differently because of your data subject request activity."]
      }), e.jsx("p", {
        children: "To exercise any of your rights, simply contact us using the details below. After we receive and verify your request, we will process it to the extent possible within our capabilities."
      }), e.jsx("h2", {
        children: "How to exercise your rights"
      }), e.jsx("p", {
        children: "Any requests to exercise your rights can be directed to us through the contact details provided in this document. Please note that we may ask you to verify your identity before responding to such requests. Your request must provide sufficient information that allows us to verify that you are the person you are claiming to be or that you are the authorized representative of such person. If we receive your request from an authorized representative, we may request evidence that you have provided such an authorized representative with power of attorney or that the authorized representative otherwise has valid written authority to submit requests on your behalf."
      }), e.jsx("p", {
        children: "You must include sufficient details to allow us to properly understand the request and respond to it. We cannot respond to your request or provide you with Personal Information unless we first verify your identity or authority to make such a request and confirm that the Personal Information relates to you."
      }), e.jsx("h2", {
        children: "Data analytics"
      }), e.jsx("p", {
        children: "Our Mobile Application and Services may use third-party analytics tools that use cookies, web beacons, or other similar information-gathering technologies to collect standard internet activity and usage information. The information gathered is used to compile statistical reports on User activity such as how often Users visit our Mobile Application and Services, what pages they visit and for how long, etc. We use the information obtained from these analytics tools to monitor the performance and improve our Mobile Application and Services. We do not use third-party analytics tools to track or to collect any personally identifiable information of our Users and we will not associate any information gathered from the statistical reports with any individual User."
      }), e.jsx("h2", {
        children: "Privacy of children"
      }), e.jsx("p", {
        children: "We do not knowingly collect any Personal Information from children under the age of 18. If you are under the age of 18, please do not submit any Personal Information through the Mobile Application and Services. If you have reason to believe that a child under the age of 18 has provided Personal Information to us through the Mobile Application and Services, please contact us to request that we delete that child’s Personal Information from our Services."
      }), e.jsx("p", {
        children: "We encourage parents and legal guardians to monitor their children’s Internet usage and to help enforce this Policy by instructing their children never to provide Personal Information through the Mobile Application and Services without their permission. We also ask that all parents and legal guardians overseeing the care of children take the necessary precautions to ensure that their children are instructed to never give out Personal Information when online without their permission."
      }), e.jsx("h2", {
        children: "Do not sell my personal information"
      }), e.jsx("p", {
        children: "You have the right to choose not to have your Personal Information sold or dislcosed by contacting us. Upon receiving and verifying your request, we will cease the sale and disclosure of your Personal Information. Be aware, however, that opting out of data transfers to our third parties might affect our ability to provide certain Services you have signed up for. We reserve the right to reject opt-out requests in certain situations as permitted by the CCPA, such as when the sale of Personal Information is required for us to fulfill legal or contractual duties."
      }), e.jsx("h2", {
        children: "Social media features"
      }), e.jsx("p", {
        children: "Our Mobile Application and Services may include social media features, such as the Facebook and Twitter buttons, Share This buttons, etc (collectively, “Social Media Features”). These Social Media Features may collect your IP address, what page you are visiting on our Mobile Application and Services, and may set a cookie to enable Social Media Features to function properly. Social Media Features are hosted either by their respective providers or directly on our Mobile Application and Services. Your interactions with these Social Media Features are governed by the privacy policy of their respective providers."
      }), e.jsx("h2", {
        children: "Push notifications"
      }), e.jsx("p", {
        children: "We offer push notifications to which you may voluntarily subscribe at any time. To make sure push notifications reach the correct devices, we rely on a device token unique to your device which is issued by the operating system of your device. While it is possible to access a list of device tokens, they will not reveal your identity, your unique device ID, or your contact information to us. We will maintain the information sent via e-mail in accordance with applicable laws and regulations. If, at any time, you wish to stop receiving push notifications, simply adjust your device settings accordingly."
      }), e.jsx("h2", {
        children: "Links to other resources"
      }), e.jsx("p", {
        children: "The Mobile Application and Services contain links to other resources that are not owned or controlled by us. Please be aware that we are not responsible for the privacy practices of such other resources or third parties. We encourage you to be aware when you leave the Mobile Application and Services and to read the privacy statements of each and every resource that may collect Personal Information."
      }), e.jsx("h2", {
        children: "Information security"
      }), e.jsx("p", {
        children: "No data transmission over the Internet or wireless network can be guaranteed. Therefore, while we strive to protect your Personal Information, you acknowledge that (a) there are security and privacy limitations of the Internet which are beyond our control; (b) the security, integrity, and privacy of any and all information and data exchanged between you and the Mobile Application and Services cannot be guaranteed; and (c) any such information and data may be viewed or tampered with in transit by a third party, despite best efforts."
      }), e.jsx("h2", {
        children: "Data breach"
      }), e.jsx("p", {
        children: "In the event we become aware that the security of the Mobile Application and Services has been compromised or Users’ Personal Information has been disclosed to unrelated third parties as a result of external activity, including, but not limited to, security attacks or fraud, we reserve the right to take reasonably appropriate measures, including, but not limited to, investigation and reporting, as well as notification to and cooperation with law enforcement authorities. In the event of a data breach, we will make reasonable efforts to notify affected individuals if we believe that there is a reasonable risk of harm to the User as a result of the breach or if notice is otherwise required by law. When we do, we will post a notice in the Mobile Application."
      }), e.jsx("h2", {
        children: "Changes and amendments"
      }), e.jsx("p", {
        children: "We reserve the right to modify this Policy or its terms related to the Mobile Application and Services at any time at our discretion. When we do, we will revise the updated date at the bottom of this page, post a notification in the Mobile Application. We may also provide notice to you in other ways at our discretion, such as through the contact information you have provided."
      }), e.jsx("p", {
        children: "An updated version of this Policy will be effective immediately upon the posting of the revised Policy unless otherwise specified. Your continued use of the Mobile Application and Services after the effective date of the revised Policy (or such other act specified at that time) will constitute your consent to those changes. However, we will not, without your consent, use your Personal Information in a manner materially different than what was stated at the time your Personal Information was collected."
      }), e.jsx("h2", {
        children: "Acceptance of this policy"
      }), e.jsx("p", {
        children: "You acknowledge that you have read this Policy and agree to all its terms and conditions. By accessing and using the Mobile Application and Services and submitting your information you agree to be bound by this Policy. If you do not agree to abide by the terms of this Policy, you are not authorized to access or use the Mobile Application and Services."
      }), e.jsx("h2", {
        children: "Contacting us"
      }), e.jsx("p", {
        children: "If you have any other questions, concerns, or complaints regarding this Policy, we encourage you to contact us using the details below:"
      }), e.jsx("p", {
        children: e.jsx("a", {
          href: "mailto:support@notpx.app",
          target: "_blank",
          children: "support@notpx.app"
        })
      }), e.jsx("p", {
        children: "Data protection officer: Plausible. io"
      }), e.jsx("p", {
        children: e.jsx("a", {
          href: "https://plausible.io/contact",
          target: "_blank",
          children: "https://plausible.io/contact"
        })
      }), e.jsx("p", {
        children: "We will attempt to resolve complaints and disputes and make every reasonable effort to honour your wish to exercise your rights as quickly as possible and in any event, within the timescales provided by applicable data protection laws."
      }), e.jsx("p", {
        children: e.jsx("em", {
          children: "– This document was last updated on July 23, 2024"
        })
      }), " "]
    })
  }),
  Bu = "_pixels_amount_ngjsa_1",
  Tu = "_general_info_container_ngjsa_6",
  Eu = "_coin_amount_text_ngjsa_12",
  ku = "_description_container_ngjsa_16",
  Du = "_description_ngjsa_16",
  Kn = {
    pixels_amount: Bu,
    general_info_container: Tu,
    coin_amount_text: Eu,
    description_container: ku,
    description: Du
  },
  Ru = "_logo_container_1i5of_1",
  Mu = {
    logo_container: Ru
  },
  Uu = "_layout_1cvcu_1",
  Qu = "_container_1cvcu_10",
  Ou = "_bubble_1cvcu_16",
  Fu = "_move_1cvcu_1",
  Ca = {
    layout: Uu,
    container: Qu,
    bubble: Ou,
    move: Fu
  },
  zu = A.memo(({
    color: t
  }) => {
    const n = Array.from(Array(200));
    return e.jsx("div", {
      className: Ca.layout,
      children: e.jsx("div", {
        className: Ca.container,
        children: n.map((s, a) => {
          const i = k(1, 8);
          return e.jsx("div", {
            className: Ca.bubble,
            style: {
              width: i,
              height: i,
              animationDelay: `-${a*300}ms`,
              transform: `translate3d(${k(-200,500)}px, ${k(-200,200)}px, ${k(0,33)}px)`,
              background: t()
            }
          }, a)
        })
      })
    })
  }, () => !1),
  Gu = "_container_1aw3i_1",
  Lu = "_logo_1aw3i_9",
  Hu = "_animate_1aw3i_1",
  qu = "_center_1aw3i_18",
  Yu = "_glow_1aw3i_28",
  $n = {
    container: Gu,
    logo: Lu,
    animate: Hu,
    center: qu,
    glow: Yu
  },
  Vu = () => e.jsxs("div", {
    className: $n.container,
    children: [e.jsx("div", {
      className: $n.glow
    }), e.jsx("div", {
      className: $n.logo
    }), e.jsx("div", {
      className: $n.center
    })]
  }),
  Wu = () => e.jsxs("div", {
    className: Mu.logo_container,
    children: [e.jsx(zu, {
      color: () => `hsl(${k(0,360)} , 1000%, 50%)`
    }), e.jsx(Vu, {})]
  }),
  Xu = "_container_13oyr_1",
  Ju = "_button_13oyr_11",
  Zu = "_info_13oyr_32",
  Ct = {
    container: Xu,
    button: Ju,
    info: Zu
  };
class la {
  static async claim() {
    return P.get("/mining/claim")
  }
  static async info() {
    return P.get("/mining/status")
  }
  static async checkBoost({
    key: n
  }) {
    return P.get(`/mining/boost/check/${n}`)
  }
  static async checkTask({
    key: n
  }) {
    let s = n,
      a = "";
    if (n === v["channel:notpixel_channel"] || n === v["channel:notcoin_pre_release"] || n === v["channel:purego"] || n === v["channel:seinarukiro"] || n === v["channel:sscaleton"] || n === v["channel:waketonup"] || n === v["channel:GameDevDead"] || n === v["channel:zaegd"] || n === v["channel:fakedonalds"] || n === v["channel:pushinton"] || n === v["channel:notcoin"]) {
      const i = n.split(":");
      s = i[0], a = `?name=${i[1]}`
    }
    if (n === v["x:notpixel"] || n === v["x:notcoin"]) {
      const i = n.split(":");
      s = i[0], a = `?name=${i[1]}`
    }
    return P.get(`/mining/task/check/${s}${a}`)
  }
}
const ps = G("mining/info", async () => (await la.info()).data),
  hs = G("mining/claim", async () => (await la.claim()).data),
  gs = G("mining/checkTask", async ({
    key: t
  }) => (await la.checkTask({
    key: t
  })).data),
  _s = G("mining/checkBoost", async ({
    key: t
  }) => (await la.checkBoost({
    key: t
  })).data),
  Ku = {
    info: null,
    tasks: {},
    walletVerification: null,
    boosts: {
      [ge.paintReward]: 1,
      [ge.reChargeSpeed]: 1,
      [ge.energyLimit]: 1
    },
    checkError: {},
    toggleAction: {
      [v.invite3frens]: !0,
      [v.makePixelAvatar]: !0,
      [v.boostChannelNotPixel]: !0,
      [v.boostChannelNotCoin]: !0,
      [v.walletVerification]: !0,
      [v["channel:notpixel_channel"]]: !0,
      [v["channel:notcoin_pre_release"]]: !0,
      [v["channel:purego"]]: !0,
      [v["channel:seinarukiro"]]: !0,
      [v["channel:sscaleton"]]: !0,
      [v["channel:waketonup"]]: !0,
      [v["channel:notcoin"]]: !0,
      [v["channel:GameDevDead"]]: !0,
      [v["channel:zaegd"]]: !0,
      [v["channel:fakedonalds"]]: !0,
      [v["channel:pushinton"]]: !0,
      [v["x:notpixel"]]: !0,
      [v["x:notcoin"]]: !0,
      [v.jettonTask]: !0,
      [v.solitaireGame]: !0,
      [v.tonDurakGame]: !0,
      [v.earnCoin]: !0,
      [v.earnCoin2]: !0,
      [v.frogApp]: !0,
      [v.tonPoker]: !0,
      [v.flappyBird]: !0,
      [v.stickerStore]: !0,
      [v.boink2]: !0,
      [v.duckChain]: !0,
      [v.starHash]: !0,
      [v.trmnl]: !0,
      [v.hauntedSpace]: !0,
      [v.capsGame]: !0,
      [v.taskTypeCampaign5_74739]: !0,
      [v.taskTypeCampaign6_74738]: !0
    },
    infoStatus: p.idle,
    claimStatus: p.idle,
    checkStatuses: {},
    activeTab: "tasks",
    charges: 0,
    maxCharges: 0,
    addedCharges: 0,
    reChargeSpeed: 0,
    reChargeTs: Date.now()
  },
  qo = _e({
    name: "mining",
    initialState: Ku,
    reducers: {
      setCheckError: (t, n) => {
        t.checkError[n.payload.key] = n.payload.value
      },
      setActiveTab: (t, n) => {
        t.activeTab = n.payload
      },
      setToggleAction: (t, n) => {
        t.toggleAction[n.payload.action] = n.payload.value
      },
      setAllToggleActions: (t, n) => {
        t.toggleAction = {
          ...t.toggleAction,
          ...n.payload
        }
      },
      setMaxCharges: (t, n) => {
        t.maxCharges = n.payload
      },
      setRechargeSpeed: (t, n) => {
        t.reChargeSpeed = n.payload
      },
      setCharges: (t, n) => {
        t.reChargeTs = Date.now(), t.addedCharges = 0, t.charges = n.payload
      },
      addCharges: (t, n) => {
        t.charges = Math.min(t.charges + n.payload, t.maxCharges)
      },
      addAddedCharges: (t, n) => {
        t.addedCharges += n.payload
      },
      subCharges: t => {
        t.charges === t.maxCharges && (t.addedCharges = 0, t.reChargeTs = Date.now()), t.charges -= 1
      },
      restoreCharges: t => {
        t.charges < t.maxCharges && (t.charges = t.maxCharges)
      },
      setTask: (t, n) => {
        t.tasks[n.payload.task] = n.payload.value
      }
    },
    extraReducers: t => {
      t.addCase(ps.pending, n => {
        n.infoStatus = p.pending
      }).addCase(ps.fulfilled, (n, s) => {
        const a = s.payload,
          i = Math.min(a.fromStart, a.maxMiningTime);
        a.tasks && (n.tasks = {
          ...n.tasks,
          ...a.tasks
        }), n.walletVerification = a.walletVerification, a.boosts && (n.boosts = {
          ...n.boosts,
          ...a.boosts
        }), n.info = {
          ...a,
          coins: a.fromUpdate === 0 ? i * a.speedPerSecond : a.coins,
          initTs: Date.now(),
          coinsFromUpdate: a.fromUpdate * a.speedPerSecond,
          boosts: void 0,
          tasks: void 0,
          charges: void 0,
          maxCharges: void 0,
          reChargeTimer: void 0,
          reChargeSpeed: void 0
        }, n.charges = a.charges, n.maxCharges = a.maxCharges, n.reChargeSpeed = a.reChargeSpeed, n.reChargeTs = Date.now() - (a.reChargeSpeed - a.reChargeTimer % a.reChargeSpeed), n.addedCharges = 0, n.infoStatus = p.fulfilled
      }).addCase(ps.rejected, n => {
        n.infoStatus = p.rejected
      }).addCase(hs.pending, n => {
        n.claimStatus = p.pending
      }).addCase(hs.fulfilled, n => {
        n.claimStatus = p.fulfilled, n.info = {
          ...n.info,
          coins: 0,
          initTs: Date.now(),
          coinsFromUpdate: 0,
          fromStart: 0,
          fromUpdate: 0
        }
      }).addCase(hs.rejected, n => {
        n.claimStatus = p.rejected
      }).addCase(gs.pending, (n, s) => {
        const a = s.meta.arg.key;
        n.checkStatuses[a] = p.pending, n.checkError[a] = !1
      }).addCase(gs.fulfilled, (n, s) => {
        const a = s.meta.arg.key;
        n.checkStatuses[a] = p.fulfilled, n.tasks[a] = s.payload[a], n.checkError[a] = !s.payload[a]
      }).addCase(gs.rejected, (n, s) => {
        const a = s.meta.arg.key;
        n.checkStatuses[a] = p.rejected, n.checkError[a] = !0
      }).addCase(_s.pending, (n, s) => {
        const a = s.meta.arg.key;
        n.checkStatuses[a] = p.pending, n.checkError[a] = !1
      }).addCase(_s.fulfilled, (n, s) => {
        const a = s.meta.arg.key;
        n.checkStatuses[a] = p.fulfilled, s.payload[a] && (n.boosts[a] += 1), n.checkError[a] = !s.payload[a]
      }).addCase(_s.rejected, (n, s) => {
        const a = s.meta.arg.key;
        n.checkStatuses[a] = p.rejected, n.checkError[a] = !0
      })
    }
  }),
  Ia = t => {
    const n = ge.paintReward,
      s = t.main.settings,
      a = s.UpgradeRepaint,
      i = t.mining.boosts[n];
    return i === 1 ? s.RepaintReward : a.levels[i].Boost
  },
  {
    setCheckError: $u,
    setActiveTab: qa,
    setToggleAction: Yo,
    setAllToggleActions: em,
    setMaxCharges: tm,
    setRechargeSpeed: nm,
    setCharges: sm,
    addCharges: Vo,
    addAddedCharges: am,
    subCharges: im,
    restoreCharges: eU,
    setTask: om
  } = qo.actions,
  rm = qo.reducer,
  xe = {
    info: ps,
    claim: hs,
    checkTask: gs,
    checkBoost: _s
  },
  Se = "data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M5%200C2.23858%200%200%202.23858%200%205V27C0%2029.7614%202.23858%2032%205%2032H27C29.7614%2032%2032%2029.7614%2032%2027V5C32%202.23858%2029.7614%200%2027%200H5ZM21.4261%2010.5739H10.5739V21.4261H21.4261V10.5739Z'%20fill='white'/%3e%3c/svg%3e",
  cm = "data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M5%200C2.23858%200%200%202.23858%200%205V27C0%2029.7614%202.23858%2032%205%2032H27C29.7614%2032%2032%2029.7614%2032%2027V5C32%202.23858%2029.7614%200%2027%200H5ZM21.4261%2010.5739H10.5739V21.4261H21.4261V10.5739Z'%20fill='%238794a1'/%3e%3c/svg%3e",
  lm = {
    white: Se,
    gray: cm
  },
  M = ({
    size: t = 11,
    className: n = "",
    style: s = {},
    color: a = "white",
    ...i
  }) => e.jsx("img", {
    alt: "",
    className: n,
    style: {
      width: `${t}px`,
      height: `${t}px`,
      ...s
    },
    src: lm[a],
    ...i
  }),
  dm = ({
    info: t,
    secFromInit: n
  }) => {
    const s = t.coins + t.coinsFromUpdate + n * t.speedPerSecond,
      a = t.coins + Math.max(t.maxMiningTime - (t.fromStart - t.fromUpdate), 0) * t.speedPerSecond;
    let i = 5;
    return t.speedPerSecond > .01 ? i = 2 : t.speedPerSecond > .001 ? i = 3 : t.speedPerSecond > 1e-4 && (i = 4), {
      reward: new Intl.NumberFormat("fr", {
        minimumFractionDigits: i,
        maximumFractionDigits: i
      }).format(Math.min(Number(s), Number(a))).replace(",", ".")
    }
  },
  um = ({
    left: t,
    secFromInit: n,
    setRunParticle: s
  }) => {
    const a = _(),
      i = c(m => m.mining.claimStatus),
      [o, r] = A.useState(!1),
      l = c(m => m.mining.info),
      {
        reward: d
      } = dm({
        info: l,
        secFromInit: n
      });
    return A.useEffect(() => {
      o && setTimeout(() => {
        r(!1)
      }, 2e3)
    }, [o]), t > 0 || l.coins === 0 && l.speedPerSecond === 0 ? null : o ? e.jsx("div", {
      className: Ct.info,
      children: "Something went wrong..."
    }) : i === p.pending ? e.jsx("div", {
      className: Ct.info,
      children: "Claiming..."
    }) : e.jsx(ae.Fragment, {
      children: e.jsxs("button", {
        style: {
          fontFamily: "arial",
          fontSize: 17
        },
        className: Ct.button,
        onPointerUp: async () => {
          var m, h;
          try {
            const g = await a(xe.claim()).unwrap();
            await a(kt(g.claimed)), s(!0), (h = (m = window.Telegram.WebApp) == null ? void 0 : m.HapticFeedback) == null || h.notificationOccurred("success")
          } catch (g) {
            r(!0), console.warn(g)
          }
        },
        children: [e.jsx("span", {
          style: {
            transform: "translate(0px, 1px)"
          },
          children: "Claim"
        }), " ", e.jsx(M, {
          size: 16
        }), " ", e.jsxs("span", {
          style: {
            transform: "translate(0px, 1px)"
          },
          children: [" ", d]
        })]
      })
    })
  },
  mm = ({
    left: t
  }) => {
    const n = c(s => s.mining.info);
    return t <= 0 || n.coins === 0 && n.speedPerSecond === 0 ? null : e.jsxs("div", {
      className: Ct.info,
      children: ["CLAIM IN ", t, " MIN"]
    })
  },
  Am = "_layout_1at34_1",
  pm = "_container_1at34_10",
  hm = "_item_1at34_14",
  Pa = {
    layout: Am,
    container: pm,
    item: hm
  },
  gm = 8,
  _m = 16,
  fm = 500,
  Wo = 800,
  Ui = window.innerWidth,
  Qi = 100,
  xm = () => Array.from(Array(100)).map(() => {
    const t = k(gm, _m),
      n = `hsl(${k(0,360)} , 70%, 50%)`,
      s = k(fm, Wo),
      a = k(-Ui, Ui),
      i = k(-Qi, Qi);
    return {
      size: t,
      color: n,
      speed: s,
      x: a,
      y: i,
      transform: !1,
      opacity: !1
    }
  }),
  Xo = A.memo(({
    runParticle: t,
    setRunParticle: n
  }) => {
    const [s, a] = A.useState(xm()), [i, o] = A.useState(!1);
    return A.useEffect(() => {
      t && setTimeout(() => {
        o(!0), setTimeout(() => {
          n(!1), o(!1)
        }, Wo)
      }, 200)
    }, [t]), e.jsx("div", {
      className: Pa.layout,
      style: {
        visibility: t ? "visible" : "hidden"
      },
      children: e.jsx("div", {
        className: Pa.container,
        children: s.map((r, l) => e.jsx("div", {
          className: Pa.item,
          style: {
            width: r.size,
            height: r.size,
            backgroundColor: r.color,
            transition: t ? `all ${r.speed}ms ease` : "",
            transform: t ? `translate(${r.x}px, ${r.y}px)` : "translate(0px, 0px)",
            opacity: i ? 0 : 1
          }
        }, l))
      })
    })
  }),
  vm = () => {
    const t = c(n => n.mining.info);
    return t.coins === 0 && t.speedPerSecond === 0 ? e.jsx("div", {
      className: Ct.info,
      children: "Paint a pixel to start mining"
    }) : null
  },
  ym = (t, n) => {
    const s = n * 60,
      a = Math.max(s - t, 0);
    return Math.ceil(a / 60)
  },
  wm = () => {
    const t = c(d => d.mining.info),
      [n, s] = A.useState(0),
      a = t.fromStart + n,
      i = c(d => d.main.settings.MinTimeToClaim),
      o = ym(a, i),
      [r, l] = A.useState(!1);
    return A.useEffect(() => {
      let d = null;
      if (t !== null) {
        const m = () => {
          const h = (Date.now() - t.initTs) / 1e3;
          if (h + t.fromStart > t.maxMiningTime) {
            clearInterval(d);
            return
          }
          s(h)
        };
        m(), d = setInterval(m, 100)
      }
      return () => {
        clearInterval(d)
      }
    }, [t]), e.jsxs("div", {
      className: Ct.container,
      children: [e.jsx(Xo, {
        runParticle: r,
        setRunParticle: l
      }), e.jsx(um, {
        secFromInit: n,
        left: o,
        setRunParticle: l
      }), e.jsx(mm, {
        left: o
      }), e.jsx(vm, {})]
    })
  },
  jm = () => e.jsx("div", {
    className: Ct.container,
    children: e.jsx("div", {
      className: Ct.info,
      children: "Loading..."
    })
  }),
  bm = () => c(n => n.mining.infoStatus) !== p.fulfilled ? e.jsx(jm, {}) : e.jsx(wm, {}),
  Nm = () => {
    const t = c(n => n.user.pixelCoins);
    return new Intl.NumberFormat("fr", {
      maximumFractionDigits: 0
    }).format(Math.max(t, 0)).replace(",", ".")
  },
  Cm = "_info_layout_bt2qf_1",
  Im = "_info_container_bt2qf_10",
  Pm = "_category_container_bt2qf_16",
  Sm = "_category_title_bt2qf_22",
  Bm = "_row_container_bt2qf_27",
  Tm = "_info_row_bt2qf_35",
  Em = "_info_row_pending_bt2qf_59",
  km = "_loading_bt2qf_1",
  Dm = "_content_bt2qf_74",
  Rm = "_image_container_bt2qf_83",
  Mm = "_image_bt2qf_83",
  Um = "_row_main_information_bt2qf_103",
  Qm = "_row_title_bt2qf_114",
  Om = "_row_icon_container_bt2qf_120",
  Fm = "_row_icon_bt2qf_120",
  zm = "_row_main_value_bt2qf_130",
  Gm = "_row_prompt_bt2qf_137",
  Lm = "_not_pixel_icon_bt2qf_142",
  Hm = "_row_image_bt2qf_147",
  qm = "_row_reward_count_bt2qf_153",
  Ym = "_row_reward_completed_bt2qf_158",
  Vm = "_priceless_bt2qf_165",
  Wm = "_completed_tasks_container_bt2qf_169",
  Xm = "_completed_task_item_bt2qf_176",
  u = {
    info_layout: Cm,
    info_container: Im,
    category_container: Pm,
    category_title: Sm,
    row_container: Bm,
    info_row: Tm,
    info_row_pending: Em,
    loading: km,
    content: Dm,
    image_container: Rm,
    image: Mm,
    row_main_information: Um,
    row_title: Qm,
    row_icon_container: Om,
    row_icon: Fm,
    row_main_value: zm,
    row_prompt: Gm,
    not_pixel_icon: Lm,
    row_image: Hm,
    row_reward_count: qm,
    row_reward_completed: Ym,
    priceless: Vm,
    completed_tasks_container: Wm,
    completed_task_item: Xm
  },
  q = ({
    children: t,
    boost: n,
    enableCheck: s = !0,
    action: a,
    id: i,
    reward: o,
    ...r
  }) => {
    const l = _(),
      d = [u.info_row],
      m = c(y => y.mining.tasks[n]),
      g = c(y => y.mining.checkStatuses[n]) === p.pending,
      f = c(y => y.mining.checkError[n]),
      j = c(y => y.mining.toggleAction[n]),
      x = A.useRef();
    return n && g && d.push(u.info_row_pending), A.useEffect(() => {
      let y = null;
      return f && setTimeout(() => {
        l($u({
          key: n,
          value: !1
        }))
      }, 4e3), () => {
        clearTimeout(y)
      }
    }, [f]), e.jsx("div", {
      className: u.row_container,
      ref: x,
      id: i,
      style: {
        opacity: m ? .3 : 1
      },
      children: e.jsx("div", {
        className: d.join(" "),
        onPointerUp: () => {
          !n || m || g || f || (a && l(Yo({
            action: n,
            value: !j
          })), a && j || a && !s ? a() : s && l(xe.checkTask({
            key: n,
            reward: o
          })))
        },
        ...r,
        children: t
      })
    })
  },
  Jm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAAXNSR0IArs4c6QAAAGBQTFRFGypAeIX/KTdNXmWDmXv/xG7/0G/+qXb/tnD/3Gv5ZWipjH//g4L/6Gz0OkZc9mnsfnTFV47/2b3lioia5qfuZ4j/oXjhNZD6bYXgsaa7REx1yJr+SVlt8YHyvpXYz4P13SNuwwAAAVZJREFUeNrt11tugzAQheEAhdgmdQ12AHPL/nfZwcQaWvEC40qo8r+ALyfJiCi3WCwWi/2vsuzSIHCcWxsQ1KHB14vzaboumKbcpfVVwaYpCg4Zc1Uwz4tiJccxIFiEAoVgzG+s66uAfS8gpRqIsQX0pDG1y1qtpTwJ5r9AcxRMksejLD+guws3cugT+np3BHTi6t2pYN/vbgTQkytq7RHQbwSSORGv0XEAanvgcfDeWAIJ5tI8bzdOk3tUHAXxTSNYIHgsIbpOKSH63r/I9njwR4sOgjgtICHAlMJrNMad9AVAxNavxpNpSuAQZE4kg0qt17jdKCUVhNaNLCeCSYIHjgu1poL45KGBWfZ87m0cBiqIG9mdAnZdVXkyy9yTBwoH+o3nwQpaSCH8R+A3pmlIkJ0EpWyhrrv9aJ5BpIAJHcTadhz3jmkYpAwOxr+CsVgsFvv7vgHg5COfXLmgNAAAAABJRU5ErkJggg==",
  J = ({
    boost: t
  }) => c(s => s.mining.tasks[t]) ? e.jsx("div", {
    className: u.row_icon_container,
    children: e.jsx(I, {
      size: 20,
      children: ""
    })
  }) : e.jsx("div", {
    className: u.row_icon_container,
    children: e.jsx(I, {
      size: 20,
      children: ""
    })
  }),
  Zm = () => {
    const t = v.premium,
      n = c(a => a.main.settings),
      s = c(a => a.mining.tasks[t]);
    return e.jsx(q, {
      boost: t,
      id: "telegramPremium",
      reward: n.TokensForTelegramPremium,
      children: e.jsxs("div", {
        className: u.content,
        children: [!s && e.jsx("div", {
          className: u.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: Jm,
            className: u.image
          })
        }), e.jsxs("div", {
          className: u.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: u.row_title,
              children: "Telegram Premium"
            })
          }), !s && e.jsxs("div", {
            children: ["Get ", e.jsx(M, {
              className: u.not_pixel_icon
            }), " ", n.TokensForTelegramPremium]
          })]
        }), e.jsx(J, {
          boost: t
        })]
      })
    })
  },
  Jo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAIAAAABc2X6AAABJmlDQ1BBZG9iZSBSR0IgKDE5OTgpAAAoz2NgYDJwdHFyZRJgYMjNKykKcndSiIiMUmA/z8DGwMwABonJxQWOAQE+IHZefl4qAwb4do2BEURf1gWZxUAa4EouKCoB0n+A2CgltTiZgYHRAMjOLi8pAIozzgGyRZKywewNIHZRSJAzkH0EyOZLh7CvgNhJEPYTELsI6Akg+wtIfTqYzcQBNgfClgGxS1IrQPYyOOcXVBZlpmeUKBhaWloqOKbkJ6UqBFcWl6TmFit45iXnFxXkFyWWpKYA1ULcBwaCEIWgENMAarTQZKAyAMUDhPU5EBy+jGJnEGIIkFxaVAZlMjIZE+YjzJgjwcDgv5SBgeUPQsykl4FhgQ4DA/9UhJiaIQODgD4Dw745AMDGT/0ZOjZcAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGh2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDYgNzkuMTY0NjQ4LCAyMDIxLzAxLzEyLTE1OjUyOjI5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjIuMiAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDI0LTA5LTI0VDEwOjM5OjA5KzA0OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyNC0wOS0yNFQxMToyMjo0OCswNDowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyNC0wOS0yNFQxMToyMjo0OCswNDowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MWVkZTI5YTMtOTM2ZS1jNjQxLWJkZDEtNDNmMTA2NTY3ZjMzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjkzNjNmMjgyLWIxOTMtZGY0ZS1hYWEyLWE1OGY3Mjg0Mjk0NSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjkzNjNmMjgyLWIxOTMtZGY0ZS1hYWEyLWE1OGY3Mjg0Mjk0NSI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6OTM2M2YyODItYjE5My1kZjRlLWFhYTItYTU4ZjcyODQyOTQ1IiBzdEV2dDp3aGVuPSIyMDI0LTA5LTI0VDEwOjM5OjA5KzA0OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjIuMiAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmM3ZDdlOWUzLTBhNTEtYzU0ZS1iZTVlLWU2MmY5MzE1ZWMwNyIgc3RFdnQ6d2hlbj0iMjAyNC0wOS0yNFQxMToxNzoyOSswNDowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjIgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoxZWRlMjlhMy05MzZlLWM2NDEtYmRkMS00M2YxMDY1NjdmMzMiIHN0RXZ0OndoZW49IjIwMjQtMDktMjRUMTE6MjI6NDgrMDQ6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi4yIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7U6VMbAAABP0lEQVR42u3asW6DMBSF4TxQp861oWQLmGYpsUkfos/QF2+Prw1RhypbisSPzoCDY93P1wyRcnh67naVA2DAgAEDBgwYMGDAgAEDBgwYMGDA+wN/P/ACDBgwYMCAAQMGDHhv4I/Pr7sBDBjwdsGPXAcwYMCAAQMGzK8lwIABAwYMGDBgwIDvpQmpGaLrL66flCZEP6Z2nNsx6d5pOOToPs8Mcxuur285mvNrwhDbkLowK8fxqujpy2lStLh9PW4CrGqsrHfFnSY/1OIKpsSGs+1C1S7mZLtQ5wtc0gmspyG5Pto+XrQjbivgRfsX2Hp+o3bnmmMe1oNQY332pdXnfAR8PTsC52ylw3LmWCvcWv2tt1Glr11dwcrS5OjXl8KW0icFvBz4LYH5Jx5gwIABAwYMGDBgwIABAwYMGPD/5gdV5YsHhxhyrwAAAABJRU5ErkJggg==",
  Km = () => {
    const t = v["channel:notpixel_channel"],
      n = c(a => a.main.settings),
      s = c(a => a.mining.tasks[t]);
    return e.jsx(q, {
      boost: t,
      action: () => {
        W("https://t.me/notpixel_channel")
      },
      id: "notPixelChannel",
      reward: n.TokensForJoinChannel,
      children: e.jsxs("div", {
        className: u.content,
        children: [!s && e.jsx("div", {
          className: u.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: Jo,
            className: u.image
          })
        }), e.jsxs("div", {
          className: u.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: u.row_title,
              children: "Not Pixel Channel"
            })
          }), !s && e.jsxs("div", {
            children: ["Get ", e.jsx(M, {
              className: u.not_pixel_icon
            }), " ", n.TokensForJoinChannel]
          })]
        }), e.jsx(J, {
          boost: t
        })]
      })
    })
  },
  $m = () => {
    const t = v["x:notpixel"],
      n = c(a => a.main.settings),
      s = c(a => a.mining.tasks[t]);
    return e.jsx(q, {
      boost: t,
      action: () => {
        Tt("https://x.com/notpixelx")
      },
      id: "notPixelX",
      reward: n.TokensForJoinX,
      children: e.jsxs("div", {
        className: u.content,
        children: [!s && e.jsx("div", {
          className: u.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: Jo,
            className: u.image
          })
        }), e.jsxs("div", {
          className: u.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: u.row_title,
              children: "Not Pixel on X.com"
            })
          }), !s && e.jsxs("div", {
            children: ["Get ", e.jsx(M, {
              className: u.not_pixel_icon
            }), " ", n.TokensForJoinX]
          })]
        }), e.jsx(J, {
          boost: t
        })]
      })
    })
  },
  eA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQBAMAAAB8P++eAAAAAXNSR0IArs4c6QAAABhQTFRFHCk/6cGp86xt4I5f1YNQq4VwlU8bUzwyVRbffwAAAJZJREFUeNrt1cENw0AIBdG04BZo4bcwLWwLlGDaj7KKkeVTZFAu3jk/gcSF12r1vKAVbsza4PYpaRk62HaiVegCDmoA8hoEY3ZsV0QVojONcC9DMPvKMdxbIDJDEaMPIkW4T9cEkWd1aNYOsWaI3YP7v+7od+Ge8JpLl4lRg5MmTFaAMwklK8HMpWQ1mEWyX+B6yqtVtTf2acUX1leb/QAAAABJRU5ErkJggg==",
  De = ({
    num: t
  }) => isNaN(t) ? null : new Intl.NumberFormat("en-US").format(t),
  tA = () => {
    const t = te(),
      n = v.invite1fren;
    let s = c(i => i.user.user);
    const a = c(i => i.main.settings);
    return s === null ? null : e.jsx(q, {
      action: () => {
        t.push("/invite-frens")
      },
      boost: n,
      id: "invite1Fren",
      reward: a.TokensForInvite1Fren,
      enableCheck: !1,
      children: e.jsxs("div", {
        className: u.content,
        children: [e.jsx("div", {
          className: u.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: eA,
            className: u.image
          })
        }), e.jsxs("div", {
          className: u.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: u.row_title,
              children: "Invite bonus "
            })
          }), e.jsxs("div", {
            children: ["Up to ", e.jsx(M, {
              className: u.not_pixel_icon
            }), " ", e.jsx(De, {
              num: a.RefRewardCoinsPremium
            }), " for fren"]
          })]
        }), e.jsx("div", {
          className: u.row_icon_container,
          children: e.jsx(I, {
            size: 20,
            children: ""
          })
        })]
      })
    })
  },
  nA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQBAMAAAB8P++eAAAAAXNSR0IArs4c6QAAAB5QTFRFHCk/9fPq//Bh0cq8/9YA/8cA/ZIAqZyM9mYAiF8iNQ3eYAAAALRJREFUeNrt1TGRRTEMQ1FTMAVTMAVBWC0EUQiFUAjbHe/M+5lfvcIpcxs1p5fdbrdujAiehIyKB6FbVDoGYRbhFjgHAwoznIOENCOgY1DEVIB2BgY0Jf6Amog3+Eu+wIA051RVE2jCfyawHKGi6EEbawlPrrnSmjDXIt2L0d3lbei55O5O0qtsw/T06jOjC0fml+vCLbfrw5GZD8vRhFtW2/VgyfGwcn1YtNrsHd4bvd16/QEV+IbgR8VccAAAAABJRU5ErkJggg==",
  sA = () => {
    const t = v.paint20pixels,
      n = c(i => i.main.settings),
      s = c(i => i.mining.info),
      a = c(i => i.mining.tasks[t]);
    return s === null ? null : e.jsx(q, {
      boost: t,
      id: "pain20pixels",
      reward: n.TokensForPaint20Pixels,
      children: e.jsxs("div", {
        className: u.content,
        children: [!a && e.jsx("div", {
          className: u.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: nA,
            className: u.image
          })
        }), e.jsxs("div", {
          className: u.row_main_information,
          children: [e.jsx("div", {
            children: e.jsxs("span", {
              className: u.row_title,
              children: ["Paint pixels • ", Math.min(s.repaintsTotal, 20), "/20", " "]
            })
          }), !a && e.jsxs("div", {
            children: ["Get ", e.jsx(M, {
              className: u.not_pixel_icon
            }), " ", n.TokensForPaint20Pixels]
          })]
        }), e.jsx(J, {
          boost: t
        })]
      })
    })
  },
  aA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQBAMAAAB8P++eAAAAAXNSR0IArs4c6QAAABVQTFRFHCk//PuG/+wo/8gA/5IA9mYAb0QgBXY6pgAAAJ9JREFUeNrt1TGNBEEQQ9GiUBQ+BVMwBVMY/hBOVxptvFJXtv0DRy933W6/lkCrkO5uFqF60h4EuoE1KLq6u9AWhKegHtiCotvuRlvQggTkFYhctkB2WRxDYstvssMhlJ0IDUOJrUOYKtNMjapyBifRbwzagLxuC5pP3oHxx2UDjtQ0bgGOnFJrsPLOGoz/11mCsuw8T2xZX8P7zbfbQX+axVI3GU07RQAAAABJRU5ErkJggg==",
  iA = () => {
    const t = te(),
      n = v.invite3frens;
    let s = c(o => o.user.user);
    const a = c(o => o.main.settings),
      i = c(o => o.mining.tasks[n]);
    return s === null ? null : e.jsx(q, {
      action: () => {
        t.push("/invite-frens")
      },
      boost: n,
      id: "invite3Frens",
      reward: a.TokensForInvite3Frens,
      children: e.jsxs("div", {
        className: u.content,
        children: [!i && e.jsx("div", {
          className: u.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: aA,
            className: u.image
          })
        }), e.jsxs("div", {
          className: u.row_main_information,
          children: [e.jsx("div", {
            children: e.jsxs("span", {
              className: u.row_title,
              children: ["Invite frens • ", Math.min(s.friends, 3), "/3", " "]
            })
          }), !i && e.jsxs("div", {
            children: ["Get ", e.jsx(M, {
              className: u.not_pixel_icon
            }), " ", a.TokensForInvite3Frens]
          })]
        }), e.jsx(J, {
          boost: n
        })]
      })
    })
  },
  oA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQBAMAAAB8P++eAAAAAXNSR0IArs4c6QAAABtQTFRFHCk/8/Dl/+Qy/9sA/8cA/6lU86MA2YQQn1IBegOu8wAAAIlJREFUeNrt1DERA0EMQ1FTCAVTMAVROAqiYAqGnfFFTbpM1tWNf/0aNbJt27a/ig5zEKEwAOXc3SUHINtJghMQHyc5APkNeQ6B8JdluzkYZubdCLwS8LLCFLyuWwLeBZAHUK5lhAvSzmFWEdG0p+QBVFWV5E1B0g6hbFKlzUBRZtmvcN96257eG1BkaXWD691mAAAAAElFTkSuQmCC",
  rA = () => {
    const t = v.joinSquad;
    let n = c(i => i.user.user);
    const s = c(i => i.main.settings),
      a = c(i => i.mining.tasks[t]);
    return n === null ? null : e.jsx(q, {
      boost: t,
      id: "joinSquad",
      reward: s.TokensForJoinSquad,
      children: e.jsxs("div", {
        className: u.content,
        children: [!a && e.jsx("div", {
          className: u.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: oA,
            className: u.image
          })
        }), e.jsxs("div", {
          className: u.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: u.row_title,
              children: "Join Squad"
            })
          }), !a && e.jsxs("div", {
            children: ["Get ", e.jsx(M, {
              className: u.not_pixel_icon
            }), " ", s.TokensForJoinSquad]
          })]
        }), e.jsx(J, {
          boost: t
        })]
      })
    })
  },
  Ai = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQBAMAAAB8P++eAAAAAXNSR0IArs4c6QAAABhQTFRFHCk//9dK/7cA/pYA2n0AvlkAmjEAXjEUlqfz5AAAAKhJREFUeNrt1cFpRFEMQ1G1oBbUglpwC2pBLUz74Q8hmeXA8/JdMMZw9sbtdjvJohNLpBYgB5i0TWYCDA8hC7/iNB7LL6M8gwKAKh1bfF86gy6AcP5hfQYhAKUfyDc0DiEMVMpYpAHhGMKtObGo1FiAMGplqIGxAgPEIz97Bz61KZ7W4IjahchgGY6WoSmuQqcm92D/WoPU8Jk9+OvWYD/6Gt5nerud9AMgnFxPBQmwaAAAAABJRU5ErkJggg==",
  cA = () => {
    var o, r;
    const t = v.leagueBonusSilver,
      n = c(l => l.main.settings),
      s = (r = (o = window.Telegram.WebApp.initDataUnsafe) == null ? void 0 : o.user) == null ? void 0 : r.is_premium,
      a = c(l => l.mining.tasks[t]),
      i = s ? n.TokensForSilverLeaguePremium : n.TokensForSilverLeagueCommon;
    return e.jsx(q, {
      boost: t,
      id: "leagueBonusSilver",
      reward: i,
      children: e.jsxs("div", {
        className: u.content,
        children: [!a && e.jsx("div", {
          className: u.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: Ai,
            className: u.image
          })
        }), e.jsxs("div", {
          className: u.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: u.row_title,
              children: "Silver League Bonus"
            })
          }), !a && e.jsxs("div", {
            children: ["Get ", e.jsx(M, {
              className: u.not_pixel_icon
            }), " ", s ? n.TokensForSilverLeaguePremium : n.TokensForSilverLeagueCommon]
          })]
        }), e.jsx(J, {
          boost: t
        })]
      })
    })
  },
  lA = () => {
    var r, l;
    const t = v.leagueBonusGold,
      n = c(d => d.mining.tasks[v.leagueBonusSilver]),
      s = c(d => d.main.settings),
      a = (l = (r = window.Telegram.WebApp.initDataUnsafe) == null ? void 0 : r.user) == null ? void 0 : l.is_premium,
      i = c(d => d.mining.tasks[t]),
      o = a ? s.TokensForGoldLeaguePremium : s.TokensForGoldLeagueCommon;
    return n ? e.jsx(q, {
      boost: t,
      id: "leagueBonusGold",
      reward: o,
      children: e.jsxs("div", {
        className: u.content,
        children: [!i && e.jsx("div", {
          className: u.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: Ai,
            className: u.image
          })
        }), e.jsxs("div", {
          className: u.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: u.row_title,
              children: "Gold League Bonus"
            })
          }), !i && e.jsxs("div", {
            children: ["Get ", e.jsx(M, {
              className: u.not_pixel_icon
            }), " ", a ? s.TokensForGoldLeaguePremium : s.TokensForGoldLeagueCommon]
          })]
        }), e.jsx(J, {
          boost: t
        })]
      })
    }) : null
  },
  dA = () => {
    var r, l;
    const t = v.leagueBonusPlatinum,
      n = c(d => d.mining.tasks[v.leagueBonusGold]),
      s = c(d => d.main.settings),
      a = (l = (r = window.Telegram.WebApp.initDataUnsafe) == null ? void 0 : r.user) == null ? void 0 : l.is_premium,
      i = c(d => d.mining.tasks[t]),
      o = a ? s.TokensForPlatinumLeaguePremium : s.TokensForPlatinumLeagueCommon;
    return n ? e.jsx(q, {
      boost: t,
      id: "leagueBonusPlatinum",
      reward: o,
      children: e.jsxs("div", {
        className: u.content,
        children: [!i && e.jsx("div", {
          className: u.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: Ai,
            className: u.image
          })
        }), e.jsxs("div", {
          className: u.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: u.row_title,
              children: "Platinum League Bonus"
            })
          }), !i && e.jsxs("div", {
            children: ["Get ", e.jsx(M, {
              className: u.not_pixel_icon
            }), " ", a ? s.TokensForPlatinumLeaguePremium : s.TokensForPlatinumLeagueCommon]
          })]
        }), e.jsx(J, {
          boost: t
        })]
      })
    }) : null
  },
  uA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAIAAAABc2X6AAABJmlDQ1BBZG9iZSBSR0IgKDE5OTgpAAAoz2NgYDJwdHFyZRJgYMjNKykKcndSiIiMUmA/z8DGwMwABonJxQWOAQE+IHZefl4qAwb4do2BEURf1gWZxUAa4EouKCoB0n+A2CgltTiZgYHRAMjOLi8pAIozzgGyRZKywewNIHZRSJAzkH0EyOZLh7CvgNhJEPYTELsI6Akg+wtIfTqYzcQBNgfClgGxS1IrQPYyOOcXVBZlpmeUKBhaWloqOKbkJ6UqBFcWl6TmFit45iXnFxXkFyWWpKYA1ULcBwaCEIWgENMAarTQZKAyAMUDhPU5EBy+jGJnEGIIkFxaVAZlMjIZE+YjzJgjwcDgv5SBgeUPQsykl4FhgQ4DA/9UhJiaIQODgD4Dw745AMDGT/0ZOjZcAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGh2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDYgNzkuMTY0NjQ4LCAyMDIxLzAxLzEyLTE1OjUyOjI5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjIuMiAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDI0LTA5LTI0VDExOjA1OjE0KzA0OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyNC0wOS0yNFQxMToyMjoxMyswNDowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyNC0wOS0yNFQxMToyMjoxMyswNDowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NGU1YjQ1ZGMtMDA0MC0xNTRkLWIzYWMtNDRkNGJjOWU4Y2JlIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOmFjOGM1YWVjLWQ0YjctZGQ0YS05ZTJkLTczNjcwMTRkZjQ4NiIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmFjOGM1YWVjLWQ0YjctZGQ0YS05ZTJkLTczNjcwMTRkZjQ4NiI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YWM4YzVhZWMtZDRiNy1kZDRhLTllMmQtNzM2NzAxNGRmNDg2IiBzdEV2dDp3aGVuPSIyMDI0LTA5LTI0VDExOjA1OjE0KzA0OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjIuMiAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmM1NDNmYzg1LTZhNjMtZTY0MS1iYzMzLTRiNWU5OWM2NDY5MCIgc3RFdnQ6d2hlbj0iMjAyNC0wOS0yNFQxMToxNzozMCswNDowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjIgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo0ZTViNDVkYy0wMDQwLTE1NGQtYjNhYy00NGQ0YmM5ZThjYmUiIHN0RXZ0OndoZW49IjIwMjQtMDktMjRUMTE6MjI6MTMrMDQ6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi4yIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6TN+2hAAAAr0lEQVR42u3auwmAQBAFQAsysgHB3AIEi7AGGz8zMRE8XT94s7z0HTvpsVXddEWlAgYGBgYGBgYGBgYGBgYGBgYGBv49OGVOVBcYGPg8OAXNOM1ZuY4HBi4XnG6eIztcxwMDA78J3tsHGBgYGBgYGBgY+Mvgth/WRCG3b+Yic7vAwKWDo/BR3Ud/LYGBfwbewx9JVBcYGNhRCzAwMDAwMDAwMDAwMDAwMDAwMPDnsgAsAtPYi2unugAAAABJRU5ErkJggg==",
  mA = () => {
    const t = te(),
      n = v.openLeague;
    let s = c(a => a.user.user);
    return c(a => a.main.settings), s === null ? null : e.jsx(q, {
      boost: n,
      enableCheck: !1,
      action: () => t.push("/open-league"),
      id: "openLeague",
      children: e.jsxs("div", {
        className: u.content,
        children: [e.jsx("div", {
          className: u.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: uA,
            className: u.image
          })
        }), e.jsxs("div", {
          className: u.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: u.row_title,
              children: "Open League"
            })
          }), e.jsx("div", {
            children: e.jsx("span", {
              className: u.priceless,
              children: "Priceless"
            })
          })]
        }), e.jsx(J, {
          boost: n
        })]
      })
    })
  },
  es = ({
    text: t
  }) => e.jsx("div", {
    className: u.category_container,
    children: e.jsx("span", {
      className: u.category_title,
      children: t
    })
  }),
  AA = () => {
    const t = v.spendStars,
      n = c(a => a.main.settings),
      s = c(a => a.mining.tasks[t]);
    return e.jsx(q, {
      boost: t,
      id: "spendStars",
      reward: n.TokensForSpendStars,
      children: e.jsxs("div", {
        className: u.content,
        children: [!s && e.jsx("div", {
          className: u.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: ui,
            className: u.image
          })
        }), e.jsxs("div", {
          className: u.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: u.row_title,
              children: "Spend Stars"
            })
          }), !s && e.jsxs("div", {
            children: ["Get ", e.jsx(M, {
              className: u.not_pixel_icon
            }), " ", n.TokensForSpendStars]
          })]
        }), e.jsx(J, {
          boost: t
        })]
      })
    })
  },
  pA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAABiUlEQVR4nO3coU7DUBhH8UJ4ACQKxyRz8+BROB4DO43lMXBT0+MBcASHRE3yBqD7T6Bpz73tFefnmqXNdvLly93ETq6ub346TXZqOsaAkAEhA0IGhAwIGRAyIGRAyICQASEDQgaEDAgZEDIgZEDIgJABIQNCBoTOSj3o8/11qc8wyWp9W+Q5TiBkQMiAULEdmO4fn9D9u+dt77r080pxAiEDQgaEqu3A3Dnjz139+z8Oh1F3z3UudQIhA0IGhIrtwM3dQ+/6bf8y7ycZkO+vFCcQMiBkQKjYDvz+Ov77ep7LSv0e99fz09D7m8oJhAwIGRCq9l146XNhrXNfcgIhA0IGhKrtwDx35U6i58K8P59f69yXnEDIgJABoWo7MNXeSXPtvOQEQgaEDAgt9q8d55cXveux35WXOvclJxAyIGRAqJl/Lhraia3svOQEQgaEDAg1++9tuRNb2XnJCYQMCBkQmu33wLFa3XnJCYQMCBkQMiBkQMiAkAEhA0IGhAwIGRAyIGRAouu6XySITdXe7YNeAAAAAElFTkSuQmCC",
  hA = () => {
    const t = _(),
      n = v.walletVerification,
      s = c(h => h.main.settings),
      [a] = dn(),
      i = c(h => h.mining.tasks[n]),
      o = bc(),
      r = Nc(),
      l = s.TokensForWalletVerification,
      d = c(h => h.mining.infoStatus),
      m = async () => {
        if (i || !o) return;
        const h = await t(xe.checkTask({
          key: n,
          reward: l,
          disableFailPopup: !0
        }));
        if (h.meta.requestStatus === p.fulfilled && h.payload[n]) return;
        if (r) {
          await a.disconnect(), t(z({
            id: performance.now(),
            text: "Wallet disconnected. Click again."
          }));
          return
        }
        a.setConnectRequestParameters({
          state: "loading"
        });
        const g = await X.generateTonProofPayload();
        if (g.status === 200 && g.data && g.data.payload) {
          const f = g.data;
          a.setConnectRequestParameters({
            state: "ready",
            value: {
              tonProof: f.payload
            }
          }), await a.openModal()
        } else t(z({
          id: performance.now(),
          text: "Something went wrong, try again"
        }))
      };
    return A.useEffect(() => {
      var h;
      !o || d !== p.fulfilled || r && (i || (h = r == null ? void 0 : r.connectItems) != null && h.tonProof && !("error" in r.connectItems.tonProof) && X.checkTonProof(r.connectItems.tonProof.proof, r.account).then(g => {
        g.status === 200 && g.data.success ? t(xe.checkTask({
          key: n,
          reward: l
        })) : t(z({
          id: performance.now(),
          text: "Something went wrong. Try later, or try another wallet."
        }))
      }))
    }, [r, o, d, i]), e.jsx(q, {
      boost: n,
      action: m,
      enableCheck: !1,
      reward: l,
      children: e.jsxs("div", {
        className: u.content,
        id: "ton_wallet_connect_task_div",
        children: [!i && e.jsx("div", {
          className: u.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: pA,
            className: u.image
          })
        }), e.jsxs("div", {
          className: u.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: u.row_title,
              children: "Connect TON"
            })
          }), !i && e.jsxs("div", {
            children: ["Get ", e.jsx(M, {
              className: u.not_pixel_icon
            }), " ", l]
          })]
        }), e.jsx(J, {
          boost: n
        })]
      })
    })
  },
  Zo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAIAAAABc2X6AAABJmlDQ1BBZG9iZSBSR0IgKDE5OTgpAAAoz2NgYDJwdHFyZRJgYMjNKykKcndSiIiMUmA/z8DGwMwABonJxQWOAQE+IHZefl4qAwb4do2BEURf1gWZxUAa4EouKCoB0n+A2CgltTiZgYHRAMjOLi8pAIozzgGyRZKywewNIHZRSJAzkH0EyOZLh7CvgNhJEPYTELsI6Akg+wtIfTqYzcQBNgfClgGxS1IrQPYyOOcXVBZlpmeUKBhaWloqOKbkJ6UqBFcWl6TmFit45iXnFxXkFyWWpKYA1ULcBwaCEIWgENMAarTQZKAyAMUDhPU5EBy+jGJnEGIIkFxaVAZlMjIZE+YjzJgjwcDgv5SBgeUPQsykl4FhgQ4DA/9UhJiaIQODgD4Dw745AMDGT/0ZOjZcAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGh2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDYgNzkuMTY0NjQ4LCAyMDIxLzAxLzEyLTE1OjUyOjI5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjIuMiAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDI0LTA5LTI0VDEwOjEzOjA1KzA0OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyNC0wOS0yNFQxMToyMTo0NSswNDowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyNC0wOS0yNFQxMToyMTo0NSswNDowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OWE1ZTFkNmEtMDFkMy01MTRjLWI1ZGQtZjQ1YTZjZmMzYzU3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjNlNWY4MjgyLTc1NjEtMDQ0Zi1hMWM1LTYzN2ViZmQyYjcxNSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjNlNWY4MjgyLTc1NjEtMDQ0Zi1hMWM1LTYzN2ViZmQyYjcxNSI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6M2U1ZjgyODItNzU2MS0wNDRmLWExYzUtNjM3ZWJmZDJiNzE1IiBzdEV2dDp3aGVuPSIyMDI0LTA5LTI0VDEwOjEzOjA1KzA0OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjIuMiAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjUwMjg3MDBiLTJkNWItMGU0OS05MmYyLWM0Y2U0OWE4ODAwNiIgc3RFdnQ6d2hlbj0iMjAyNC0wOS0yNFQxMToxNzoyNSswNDowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjIgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo5YTVlMWQ2YS0wMWQzLTUxNGMtYjVkZC1mNDVhNmNmYzNjNTciIHN0RXZ0OndoZW49IjIwMjQtMDktMjRUMTE6MjE6NDUrMDQ6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi4yIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5KGBqWAAAAxElEQVR42u3aywmDQBQFUAtylQYE9ykgYBHWkMZ1J7OJPHyO8XMedzXI4NlcGMemffWPSgMMDAwMDAwMDAwMDAwMDAxcIVMxwMDA1wBPgQEGBj4XuMQM43dJZB0YGPhc4Mw6MDDwceBfhRSBHVNgwMDA0YNB5gNAvQMGMDDw2st178+SDLjcBxgYeH9wplQyz+fxwMDAW4oqA963wICBgaOXY7UHGBh4O7gskn8FGBjYz6XAwMDAwMDAwMDAwMDAwMC3zAwlcvXsnlyGdQAAAABJRU5ErkJggg==",
  gA = () => {
    const t = v["channel:notcoin"],
      n = c(a => a.main.settings),
      s = c(a => a.mining.tasks[t]);
    return e.jsx(q, {
      boost: t,
      action: () => {
        W("https://t.me/notcoin")
      },
      id: "notCoinChannel",
      reward: n.TokensForJoinChannel,
      children: e.jsxs("div", {
        className: u.content,
        children: [!s && e.jsx("div", {
          className: u.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: Zo,
            className: u.image
          })
        }), e.jsxs("div", {
          className: u.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: u.row_title,
              children: "Notcoin community"
            })
          }), !s && e.jsxs("div", {
            children: ["Get ", e.jsx(M, {
              className: u.not_pixel_icon
            }), " ", n.TokensForJoinChannel]
          })]
        }), e.jsx(J, {
          boost: t
        })]
      })
    })
  },
  _A = () => {
    const t = v["x:notcoin"],
      n = c(a => a.main.settings),
      s = c(a => a.mining.tasks[t]);
    return e.jsx(q, {
      boost: t,
      action: () => {
        Tt("https://x.com/thenotcoin")
      },
      id: "notCoinX",
      reward: n.TokensForJoinX,
      children: e.jsxs("div", {
        className: u.content,
        children: [!s && e.jsx("div", {
          className: u.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: Zo,
            className: u.image
          })
        }), e.jsxs("div", {
          className: u.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: u.row_title,
              children: "Notcoin on X.com"
            })
          }), !s && e.jsxs("div", {
            children: ["Get ", e.jsx(M, {
              className: u.not_pixel_icon
            }), " ", n.TokensForJoinX]
          })]
        }), e.jsx(J, {
          boost: t
        })]
      })
    })
  },
  Ko = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAACTElEQVR4nO2cvUrDUBiGv7QdVJwcHcTBjvYeegOuTiJaRBA3BwuioqC0UtHB4uDgpXgPOppBHBydRB0kkZPktLHUmvblmE95nyUY22N8+nDy0xCvXKmGQkamQHUYFAhCgSAUCEKBIBQIQoEgFAhCgSAUCEKBIBQIQoEgFAhCgSAUCEKBIBQIQoEgFAhCgSAll4O/vb7I08OdBB/vv/G/9KVQGpPp2XkZn5h0M76TURPylmcwf99shyucFmjlNQ7ir54LoYgnIl6yjH4O408xWoY/rOt9X5gaK+iOJanXLbQ9px8i50AQCgShQBAKBKFAEAoEcXoYMwrHl3NDvau17Oe6vSwQRF2BlsfnwWXNTA1XqitYIIiaAk/acVFZy2uu+NGpmuR8gzILBPkzAk156Xlv+5pz4L8g9znw9CLb3Jf+vZY9sLBAHDV74X5V9VZpX9NY9aOLp3nvgYUF4uRe4Nam37l8/92xoC3vqOZHl+o1lGdhgSBqz4UlVd7hmp45rxcWCKKyQFve3rqO891BsEAQVQXWN/wvX6xrLs/CAkEoEIQCQSgQhAJBKBDE6WGMuTvU3JtX3/cyvf58N4wOY4rm8CUQKSbrvWRdMYiXi2fZxktvhyucFmhurXW58Vmwt/i6QtWTi+5vb6Jleyfs1FZIlbfUissrV6o5b2kXzoEgKp+dZUu8qsdzYq2przwLCwRR/fQ2W6LG8iwsEET1JX3N5VlYIAgFglAgCAWCUCAIBYJQIAgFglAgCAWCUCAIBYJQIAgFglAggoh8Ap/jkinpc8FdAAAAAElFTkSuQmCC",
  fA = () => {
    const t = c(i => i.user.user),
      n = v.boostChannelNotPixel,
      s = c(i => i.main.settings),
      a = c(i => i.mining.tasks[n]);
    return !t || !t.isPremium ? null : e.jsx(q, {
      action: () => {
        W("https://t.me/boost/notpixel_channel")
      },
      boost: n,
      id: "notPixelBoostChannel",
      reward: s.TokensForBoostChannelNotPixel,
      children: e.jsxs("div", {
        className: u.content,
        children: [!a && e.jsx("div", {
          className: u.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: Ko,
            className: u.image
          })
        }), e.jsxs("div", {
          className: u.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: u.row_title,
              children: "Boost Not Pixel Channel "
            })
          }), !a && e.jsxs("div", {
            children: ["Get ", e.jsx(M, {
              className: u.not_pixel_icon
            }), " ", 64]
          })]
        }), e.jsx(J, {
          boost: n
        })]
      })
    })
  },
  xA = "data:image/png;base64,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",
  vA = () => {
    const t = v.makePixelAvatar,
      n = c(a => a.main.settings),
      s = c(a => a.mining.tasks[t]);
    return e.jsx(q, {
      action: () => {
        W("https://t.me/notpixime_bot")
      },
      boost: t,
      reward: n.TokensForMakePixelAvatar,
      children: e.jsxs("div", {
        className: u.content,
        children: [!s && e.jsx("div", {
          className: u.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: xA,
            className: u.image
          })
        }), e.jsxs("div", {
          className: u.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: u.row_title,
              children: "Pixelize your photo"
            })
          }), !s && e.jsxs("div", {
            children: ["Get ", e.jsx(M, {
              className: u.not_pixel_icon
            }), " ", 64]
          })]
        }), e.jsx(J, {
          boost: t
        })]
      })
    })
  },
  yA = () => {
    const t = c(i => i.user.user),
      n = v.boostChannelNotCoin,
      s = c(i => i.main.settings),
      a = c(i => i.mining.tasks[n]);
    return !t || !t.isPremium ? null : e.jsx(q, {
      action: () => {
        W("https://t.me/boost/notcoin")
      },
      boost: n,
      id: "notCoinBoostChannel",
      reward: s.TokensForBoostChannelNotPixel,
      children: e.jsxs("div", {
        className: u.content,
        children: [!a && e.jsx("div", {
          className: u.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: Ko,
            className: u.image
          })
        }), e.jsxs("div", {
          className: u.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: u.row_title,
              children: "Boost Notcoin Channel "
            })
          }), !a && e.jsxs("div", {
            children: ["Get ", e.jsx(M, {
              className: u.not_pixel_icon
            }), " ", 64]
          })]
        }), e.jsx(J, {
          boost: n
        })]
      })
    })
  },
  wA = "_blocker_wufj5_1",
  jA = "_popup_wufj5_11",
  Oi = {
    blocker: wA,
    popup: jA
  },
  Lt = ({
    show: t,
    setShow: n,
    children: s
  }) => {
    const [a, i] = A.useState(!1), [o, r] = Ls(() => ({
      from: {
        transform: "translateY(100%)"
      },
      config: {
        duration: 300,
        easing: Hs.easeOutCubic
      }
    })), [l, d] = Ls(() => ({
      from: {
        opacity: 0
      },
      config: {
        duration: 300,
        easing: Hs.easeOutCubic
      }
    }));
    return A.useEffect(() => {
      t ? (i(!0), r.start({
        transform: "translateY(0%)"
      }), d.start({
        opacity: 1
      })) : t === !1 && (r.start({
        transform: "translateY(100%)",
        onResolve: () => i(!1)
      }), d.start({
        opacity: 0
      }))
    }, [t]), a ? Ge.createPortal(e.jsxs(ae.Fragment, {
      children: [e.jsx(qs.div, {
        className: Oi.blocker,
        style: {
          ...l
        },
        onPointerUp: m => {
          m.stopPropagation(), n(!1)
        },
        onTouchMove: m => {
          m.stopPropagation()
        },
        onPointerMove: m => {
          m.stopPropagation()
        }
      }), e.jsx(qs.div, {
        className: Oi.popup,
        style: {
          ...o
        },
        onPointerUp: m => {
          m.stopPropagation()
        },
        onTouchMove: m => {
          m.stopPropagation()
        },
        onPointerMove: m => {
          m.stopPropagation()
        },
        children: s
      })]
    }), document.body) : null
  },
  bA = "/assets/adsgram-D63qdz_D.png",
  ft = () => window.plausible,
  NA = () => window.Adsgram.init({
    blockId: gt.app.adsgramBlockId,
    debug: gt.isDev,
    debugBannerType: "FullscreenMedia"
  }),
  CA = 31 * 1e3,
  IA = k(0, 100),
  PA = IA <= 100;
let Fi = !1;
const zi = () => {
    const t = localStorage.getItem("adsgramNextView") || Date.now();
    return Math.max(Math.ceil((t - Date.now()) / 1e3), 0)
  },
  SA = () => {
    c(He);
    const t = _(),
      n = NA(),
      s = c(Qo),
      a = v.adsgram,
      i = v.watchAd;
    c(j => j.mining.tasks[a]);
    const o = c(j => j.mining.tasks[i]),
      r = c(j => j.user.country),
      l = ft(),
      [d, m] = A.useState(zi()),
      [h, g] = A.useState(Fi),
      f = 16;
    return A.useEffect(() => {
      const j = setInterval(() => {
        m(zi())
      }, 1e3);
      return () => {
        clearInterval(j)
      }
    }, []), !PA || h || s !== "mobile" || o === !1 ? null : e.jsxs(q, {
      enableCheck: !1,
      action: () => {
        d === 0 && n.show().then(j => {
          t(kt(f)), t(z({
            id: performance.now(),
            text: "16 PX earned!",
            icon: ""
          })), localStorage.setItem("adsgramNextView", `${Date.now()+CA}`), l("task_adsgram1", {
            props: {
              country: r,
              result: !0
            }
          })
        }).catch(j => {
          t(z({
            id: performance.now(),
            text: "Something went wrong."
          })), g(!0), Fi = !0, l("task_adsgram1", {
            props: {
              country: r,
              result: !1
            }
          })
        })
      },
      boost: a,
      reward: f,
      children: [e.jsx("div", {
        style: {
          width: 100,
          height: 20,
          transform: "rotate(45deg)",
          position: "absolute",
          right: -25,
          top: 10,
          lineHeight: 1,
          backgroundColor: "#850294",
          pointerEvents: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        },
        children: " repeat"
      }), e.jsxs("div", {
        className: u.content,
        children: [e.jsx("div", {
          className: u.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: bA,
            className: u.image
          })
        }), e.jsxs("div", {
          className: u.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: u.row_title,
              children: "View ADS and get PX!"
            })
          }), d === 0 && e.jsxs("div", {
            children: ["Get ", e.jsx(M, {
              className: u.not_pixel_icon
            }), " ", f, " for each AD"]
          }), d !== 0 && e.jsx("div", {
            children: `Wait ${d} sec`
          })]
        }), e.jsx(J, {
          boost: a
        })]
      })]
    })
  },
  BA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAABZElEQVR4nO3cza2CQBRA4cHYiHtLsBCKsAGDS4kNWARd4soECUTkDNxZnG/3Fs57nNzBv8mrTudLn7TawXSMASEDQgaEDAgZEDIgZEDIgJABIQNCBoQMCBkQMiBkQMiAkAEhA0IGhAwIHSN/+fN+zbbW7fHKttY/wiYwZ7wt1lsq5Hvh8cXWdb16ra7rvn7eexLD74EkXo7HU6H3wLmLb5pm9jFt206uM57EvfgsDIVO4JypKSuVEwgZEDIgZEDIgJABIQNCBoSKeyHd978/26iqape/ZQknEDIgVOR74Y/hVl2ytSM4gZABoaK3cKnbdsgJhAwIFbeFS3qRvIQTCBkQMiBkQMiAkAEhA0IGhEID5joQFHWwKJUwgfTiI+OlqAOWaaMTpRHHfMMmMPfFRp2R9l8/QT4LQwaEDAgZEDIgZEDIgJABIQNCBoQMCBkQMiBkQMiAkAEhA0IGhAwIGZBIKb0B7eY0Ujl2RcIAAAAASUVORK5CYII=",
  TA = () => {
    const t = _(),
      n = c(Et),
      s = v.addToHomeScreen,
      a = c(o => o.mining.tasks[s]),
      i = 128;
    return n ? e.jsx(q, {
      action: () => {
        window.Telegram.WebApp.checkHomeScreenStatus(o => {
          o === {
            unsupported: "unsupported",
            unknown: "unknown",
            added: "added",
            missed: "missed"
          }.added ? (t(xe.checkTask({
            key: s,
            reward: i
          })), t(z({
            id: performance.now(),
            text: o
          }))) : window.Telegram.WebApp.addToHomeScreen()
        })
      },
      enableCheck: !1,
      boost: s,
      reward: 128,
      children: e.jsxs("div", {
        className: u.content,
        children: [!a && e.jsx("div", {
          className: u.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: BA,
            className: u.image
          })
        }), e.jsxs("div", {
          className: u.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: u.row_title,
              children: "Add Not Pixel to Home screen"
            })
          }), !a && e.jsxs("div", {
            children: ["Get ", e.jsx(M, {
              className: u.not_pixel_icon
            }), " ", 128]
          })]
        }), e.jsx(J, {
          boost: s
        })]
      })
    }) : null
  },
  EA = "data:image/gif;base64,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",
  kA = () => {
    const t = _(),
      n = c(Et),
      s = v.addEmoji,
      a = 256,
      i = c(r => r.mining.tasks[s]),
      o = c(r => r.user.user);
    return !o || !o.isPremium || !n ? null : e.jsx(q, {
      action: () => {
        window.Telegram.WebApp.requestEmojiStatusAccess(r => {
          r ? window.Telegram.WebApp.setEmojiStatus("5447461825023072674", {}, l => {
            l ? (t(xe.checkTask({
              key: s,
              reward: a
            })), t(z({
              id: performance.now(),
              text: "Emoji set"
            }))) : t(z({
              id: performance.now(),
              text: l
            }))
          }) : t(z({
            id: performance.now(),
            text: "No access"
          }))
        })
      },
      enableCheck: !1,
      boost: s,
      reward: a,
      children: e.jsxs("div", {
        className: u.content,
        children: [!i && e.jsx("div", {
          className: u.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: EA,
            className: u.image
          })
        }), e.jsxs("div", {
          className: u.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: u.row_title,
              children: "Add emoji to status"
            })
          }), !i && e.jsxs("div", {
            children: ["Get ", e.jsx(M, {
              className: u.not_pixel_icon
            }), " ", a]
          })]
        }), e.jsx(J, {
          boost: s
        })]
      })
    })
  },
  DA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAADmklEQVR4nO2cz2oTURSHT5OAEUSsgqBQaAl0EbKQLkXBZiMibrrwCXwCFy58ABcufII+gxsp4kYFpcviorgQSgoFC4JFpGAXJpFzM2dycnpnksxx7h3C+SDcOzN3Qubr7/7JZOjSWufOEIzC1EydDhOoxAQqMYFKTKASE6jEBCoxgUpMoBITqMQEKjGBSkygEhOoxAQqMYFKTKASE6jEBCoxgUpMoBITqKRRlQ/y8/sB/D45nqnt5as34NrNVumfaRaiCpTS3teWZjqve3LszquCyCgCuTgubX0wKr/VxnXfNp3TTd4jpsTgAkkeSeBiQMiiOr6uv2ON7o8KfI/YEoNOIlweieHIpFEd5f1IpGFJMvE4vtesY2cZBBXI5UEibB5IHpdI4B8nBsEE+i5QJjALnzDax1MYQ2IwgTJ9ReEyfRJDU5l14CzwFPJ6o14HGPZdHVMYckIJIvB/dC2aROS4OUp0H9bZrLxwArXdl0vzzdyS3v7nYIvsynVhn5A88fJY6EV2JW4moDQS9/TBarrft1acBp0TamaOmkAprb25Am0A2N5ccdtPnn1yZZ7ErLUkSSx7TCxdoEwAv2AUR9KIrx+OJo4jr94eulJ+PwaRWGxXdJFelNKf0scB/dbDNVfHC9x+efdcGy5t781IeK1Wg8FgkJYbj1qpSEjEYVvZ7mOjnrbpDoalTyZBujCmDCVJeT5xHJQij6NIrO9ltLv3t5+2g51e6ZNItDEQ5ZFYFOIumEGpBZLB4Nt57UIQTGA7mRjkNpZ44fK4D0rstLbY7stOz3XfsgmawM7uaVrfv30prVMSIUOOPMa7vg+St1ALaZS32rw43rF7ek4iZMjJSq+EJy/U17loY6CTmSTSJ5LDE0hjp69NaHkQS+DBrzNoXWmOE8lETksg7+5VIJhAl7KkG6M8lIhIkZ0LyxOJ9JE3iWAKIeBvJEETKCVCkkbwiCwCyn+8tQzPX49WiQt5N4YkQjIO5oosyIutDSdxYW9npV2UzcxSpIZ6M9y1RL0bw9MIIpFFOTz749IXYhENVbihOjFhFBz7OCRv4deBPqbNvnnEWgdW9vG2rLWeb38seVDlnzWzFsxyDRhTHlT9d+F57rrEerio9DvS8zw4WYTYzwjaP95RYs9IKzGBSkygEhOoxAQqMYFKTKASE6jEBCoxgUpMoBITqMQEKjGBSkygEhOoxAQqMYFKTKASE6jEBCoxgRoA4B95qZ/x3prlhgAAAABJRU5ErkJggg==",
  RA = () => {
    const t = v.unitsWallet;
    return c(n => n.mining.tasks[t]), c(n => n.user.country), null
  },
  MA = k(0, 100),
  UA = MA <= 10,
  QA = () => {
    const t = v.skinlabTask,
      n = c(s => s.mining.tasks[t]);
    return c(s => s.user.country), !UA && !n && !gt.isDev, null
  },
  OA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAACyklEQVR4nO2cT0iTYRzH361ZyRRqFcxDgoaQFV2SoCVERBBdFC/ZIejQxUs3L96Vrtmx6DwjJCQqpA4NZuHAP4FDREYWZixd6DbMZZvwe/YeLDef9X3/Hb6fy3ds75732WdfePb+Yb6Wc50lg/w3fqrDoEAQCgShQBAKBKFAEAoEoUAQCgShQBAKBKFAEAoEoUAQCgShQBAKBKFAEAoEoUAQCgShQBAKBAl4dWL1wSOSkd4ByXdP+tULPp+b0/oHNhDEM3cmhJpOSV7ve1R1u1KxKDk62CO5/bvgwOwqwwaCuNbA5rOdkpduDVgy3uuH9yQ31r5ZMp4ubCCIYw08f+2OZPuV207szvgQHZT8kozbuh82EMT2Bl7sui/ZcuGG/Z9mDz4+fyBPLn2K2TI+Gwhi+5HI7PhTyeDRsGQuo1bJ1o6blu5nI/1ZMjU1LnkgcFDSruaZsIEgtjdwazMnmf3xVbLxxEnJdGpGsrCZlTzefEbycOMxrXFTiVeS+fX0rufN5i1OvrToE1SHDQRx/Ejk6t0hre2Kf7Ylw20dkrNvHkv6A3Va75uPj4Iz1YMNBHG8gYfqGyQjmsfAKwsJyf2aZ5KMPcMmWCNsIIjjZ6TNVTmXWZFsCDVZMu7S9FtLxqkVNhDEtWsiiTF15nnfVVnzGkg+m7FiWjXDBoK4flVuYkQ1sOKqXKr+IyEZGyk/cudqHRsI4noDzVU5n/kuGQyFd71eqtDA5TnzTLO714nZQBDP3JkwOTYsqXusvL62bPOM9GADQTx3b0w8qhp4uXxPjP+v34HJ91H1wOeN754NBPFcAwu/yqvyT3WmuWioVXh1cUpt4JHmmbCBIJ7/35jTkW7J+YkXrs9lL9hAEP5zEQgbCEKBIBQIQoEgFAhCgSAUCEKBIBQIQoEgFAhCgSAUCEKBIBQIQoEgFAhCgSAUCEKBIBSIYBjGDiltmN/9syZ+AAAAAElFTkSuQmCC",
  FA = () => {
    const t = v.spendTokens,
      n = c(a => a.mining.tasks[t]),
      s = 512;
    return e.jsx(q, {
      boost: t,
      reward: s,
      children: e.jsxs("div", {
        className: u.content,
        children: [!n && e.jsx("div", {
          className: u.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: OA,
            className: u.image
          })
        }), e.jsxs("div", {
          className: u.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: u.row_title,
              children: "Spend Crypto"
            })
          }), !n && e.jsxs("div", {
            children: ["Get ", e.jsx(M, {
              className: u.not_pixel_icon
            }), " ", s]
          })]
        }), e.jsx(J, {
          boost: t
        })]
      })
    })
  },
  zA = "data:image/png;base64,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",
  GA = k(0, 100),
  LA = GA <= 100,
  HA = () => {
    const t = v.frogApp,
      n = c(i => i.mining.tasks[t]),
      s = 512,
      a = ft();
    return !LA && !n ? null : e.jsx(q, {
      boost: t,
      action: () => {
        W("https://t.me/frogfarmbot/frogfarm?startapp=291096007"), a("task_frogApp")
      },
      reward: s,
      children: e.jsxs("div", {
        className: u.content,
        children: [!n && e.jsx("div", {
          className: u.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: zA,
            className: u.image
          })
        }), e.jsxs("div", {
          className: u.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: u.row_title,
              children: "Join the Frog team now!"
            })
          }), !n && e.jsxs("div", {
            children: ["Get ", e.jsx(M, {
              className: u.not_pixel_icon
            }), " ", s]
          })]
        }), e.jsx(J, {
          boost: t
        })]
      })
    })
  },
  $o = "data:image/png;base64,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",
  qA = k(0, 30),
  YA = qA <= 100,
  VA = () => {
    const t = v.earnCoin,
      n = c(i => i.mining.tasks[t]),
      s = 512,
      a = ft();
    return !YA && !n ? null : e.jsx(q, {
      boost: t,
      action: () => {
        W("https://t.me/earn/join"), a("task_earncoin")
      },
      reward: s,
      children: e.jsxs("div", {
        className: u.content,
        children: [!n && e.jsx("div", {
          className: u.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: $o,
            className: u.image
          })
        }), e.jsxs("div", {
          className: u.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: u.row_title,
              children: "Hold to Earn"
            })
          }), !n && e.jsxs("div", {
            children: ["Get ", e.jsx(M, {
              className: u.not_pixel_icon
            }), " ", s]
          })]
        }), e.jsx(J, {
          boost: t
        })]
      })
    })
  },
  WA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABWVBMVEUNDADYuQD/2gD10QCVgAAZFgB8agD71wAfGwBsXQDaugBxYQDApQCgiQBFPAAYFQDHqgCZgwCNeQA2LwBOQwAYFgAQDgEaFwOXgQD+2QAUEgLpyDj51jxlVxZmWABNQxDgwDZaTQAWFAKAbh3mxje0myroyDgrJgi1nCv82ABeUAAtKAiQinBYWFKxlwCymAD31DuYe2g9PTZ4aADoxgCUfyI2LwpYNx35dCmuUx1dUADhwjb5pjLbZiT4cylFJQpZTAASEAH5gSzzcShqWwD20gBBOA35zzvafyjwcCfAWx86IAiTfgDOsABYTBPKrTBMQhDXuACMeADJrTDuzDktJwDGqgqSfSLDpy5+bR2ahADsygAqJABgUxXLrgDryQChiyZjVQDbvCEnIgDBpi7+2QghHQCpkijCpi4ZFgOOeyEPDgF0ZBqHdB+IdR94aBtUSBIYFQP///9938y/AAAAAWJLR0RyNg4NWAAAAAd0SU1FB+gMDhUDH68kltAAAAHHSURBVFjD7dXpMwJhAMfxp4cSkbuk7SAkVCi6I3Shg0qhUzpZ1f//hp0m26Zpl5n1LLPfV+0+v/nMNG2zAPDx8f3bBAI4tLGx8XGhED0oEk1MDLsvFk9OTk0RsESCFpyenpkZdS6VEujsLDpwbm5+nm6zsADh4iKXQQCWliBcXuYKKJPJ5V93KysKBXpwdVWpxD5TqahLCNVqtKBGgw2k1fYv19YgRAmur/cYnW5jo/d5c5P6pVGCW1s9pHtfr9/eJq+6GQw7O+hA8qfY3SVP9/aMRvLKZDKbuQDu75OnBweHh+SVxWK1cgEkOjo6PgbAZrPbHQ5y63QyeHBYA12uwT+e223/yOPxek9OutvTU5Sgz0flzs7sfZ2fE5uLC78fHQhAIEAlg8FQKBwmuMvLqyticX0diaADo9FYjArG44Pbm5vbWzRgIoENLZmkvlAhTKV+H7y7w0aWTveDtBwLYCaD0XR/310+PDw+chPsvaggzGa5CuZyAOTzhQIDDhFYLJZKjB4ZZODTE4TlMirw+ZkerFSqVYYcC2CtRsfV64wxVsBGYxTWbH4LYwUE4OXl9RXH3z7D8Var3e50fkCxBPLx8f253gHh8OgNxI6rkgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNC0xMi0xNFQyMTowMzozMSswMzowMP/7ShMAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjQtMTItMTRUMjE6MDM6MzErMDM6MDCOpvKvAAAAAElFTkSuQmCC",
  XA = k(0, 100),
  JA = XA <= 100,
  ZA = () => {
    const t = v.duckChain,
      n = c(i => i.mining.tasks[t]),
      s = 512,
      a = ft();
    return !JA && !n ? null : e.jsx(q, {
      boost: t,
      action: () => {
        W("https://t.me/DuckChain_bot/quack?startapp=dab7ZIxC"), a("task_duckChain")
      },
      reward: s,
      children: e.jsxs("div", {
        className: u.content,
        children: [!n && e.jsx("div", {
          className: u.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: WA,
            className: u.image
          })
        }), e.jsxs("div", {
          className: u.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: u.row_title,
              children: "Join $DUCK for Airdrop"
            })
          }), !n && e.jsxs("div", {
            children: ["Get ", e.jsx(M, {
              className: u.not_pixel_icon
            }), " ", s]
          })]
        }), e.jsx(J, {
          boost: t
        })]
      })
    })
  },
  KA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAEtUlEQVR4nO2czW8UZRzHv8906e4qxRrcksqLEYInTWqw7bIFfCnUoyeMCv8A9GI8yEET76YcOKiJejChCRENiVdh9SJl20RT2pMhaAqtRIyREAO77e485pmZ7vuyzH6nM67+Pk0DM93nmef5zPM88zy/mR31+fSs1lqjG1FKIR6PUyUvFArotP7m+Fa3yjMEUXYmD5PWokvwP0cEkohAEhFIIgJJRCCJCCQRgSQikEQEkohAEhFIIgJJLBOS6VaCKDuTh0kb4+JpGvl8gUgPJBLm+J1Xgo3nsfFEsgsH0Xq5PNh4HouMgSQikEQEkohAEhFIIgJJRCCJCCQRgSSxqAuglIZSFrS2zdIArdYGZtmltWpICydFdOv5CASaCttYXJjD4vwsbv++grt3/8LqWgG27UpsxtHjJ5BJT5SXX8oCzky9j3zhb4yMvoJ05rDXocKVGYFAG+emP8bC/GV/qYzcGjSKxQJurdzANxe+wC/Xf8ZbxycB1bMhpW5F6GNgbuY73/KaUm6pbjdevDqD3JVs0MVtCy3QbzxtbvbShnQy5eSd9YT6gYvIxMKMpxnXifhm7Ni1B9oTv3ovj9t/LFd9RuOR5BY8ntrmbmuvikUbSzevVeWmkRoYRElXunYstsl3HZh4pqm/+uxsjjoFiUTC50Hdf9fP2fLNazj94buVHQrYP3YEr78x6W27+8+f+wS5Hy6Wtw1vn5rCwBPb64/QcV06IfSLSENjN2exavqitKrtVFVTF+dTDac72lsSMpEmCb0FWnUNxm2RqjyYt55K12KGAuX81OUXdIHbEKpAU+mZXBalUtHdhoIulTB64Ii37fbYvXufbZ+ZVrj642X09W/1FiMaltWD4eGXQu3WoQo0y7Xz0x+5yzaPnbv24J1TUzVj3UPlBY3sxQu1O5WF4RderFypQkDGQBIRSPLvENi9D0eEO5E2Q1PuyiXYpcoYqO0Sln/7tW3aVGoQ8cSj1fNoh7W1VS8jAD0WRkZe/i9fRIB0Zrxm342l6/j6y0/bTl+OHjuJsbGJuomKwv17ee9/4U9hEMlKxK4PiuKhqu6uQlSrcGEk8iAXEZ7QW2B9MMFpWcpdA6/vMTvqu7Q79jVrZw2L6+AL/QCor7t2Es46c/o9FIv5cjhrIDWIQ4df8xZlbjkWfppB9tvaSXJ//1Zs3tLfMEmujlTHYr04MflBaBIDeD7Q7/N52rmHcWtlqbKnZGObE5KqVNpZntVx586fzu+D2L7zaSSTyZbj5EZAj4H+Wq/CyOh43b5gamv0pzMTocpDFBeR9P5xPDeU8arc2NX8dL7qzw7tO4QDB18NpIx+CP+unLLw5rFJ7N79DOZmv0dsU2/DRyxzz1I1P7fO1+wtC72xOPr6HsOTO57C0L6DGHo+7fw97Baozn41Tx0yn88TqbVzTai/Yb5+p601yjwd7wwf8USSKT5NxE8mtJoYN+/e1djlQGy0yESaRASSiEASEUgiAklEIIkIJBGBJCKQJPTnA4Mn2rfPhfp8YCP8943Z9Az0+wP579t28Q1heX9gMIhAEhFIIgJJRCCJCCQRgSQikEQEkohAEhFIIgJJRCAJ9f7AqN/fFzVKKfwDdAJ/2SCF1eEAAAAASUVORK5CYII=",
  $A = k(0, 100),
  ep = $A <= 100,
  tp = () => {
    const t = v.trmnl,
      n = c(i => i.mining.tasks[t]),
      s = 512,
      a = ft();
    return !ep && !n ? null : e.jsx(q, {
      boost: t,
      action: () => {
        W("https://t.me/terminalgame_bot/terminalgame?startapp=notpixel&startApp=notpixel"), a("task_trmnl")
      },
      reward: s,
      children: e.jsxs("div", {
        className: u.content,
        children: [!n && e.jsx("div", {
          className: u.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: KA,
            className: u.image
          })
        }), e.jsxs("div", {
          className: u.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: u.row_title,
              children: "Play Coinflip and get $TRMNL"
            })
          }), !n && e.jsxs("div", {
            children: ["Get ", e.jsx(M, {
              className: u.not_pixel_icon
            }), " ", s]
          })]
        }), e.jsx(J, {
          boost: t
        })]
      })
    })
  },
  np = "data:image/png;base64,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",
  sp = k(0, 100),
  ap = sp <= 100,
  ip = () => {
    const t = v.starHash,
      n = c(r => r.mining.tasks[t]),
      s = 512,
      a = ft(),
      o = c(r => r.user.languageCode) === "ru" ? "Майни токены, получай награды!" : "Mine tokens, get rewards!";
    return !ap && !n ? null : e.jsx(q, {
      boost: t,
      action: () => {
        W("https://t.me/starshash_bot/starshash"), a("task_starHash")
      },
      reward: s,
      children: e.jsxs("div", {
        className: u.content,
        children: [!n && e.jsx("div", {
          className: u.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: np,
            className: u.image
          })
        }), e.jsxs("div", {
          className: u.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: u.row_title,
              children: o
            })
          }), !n && e.jsxs("div", {
            children: ["Get ", e.jsx(M, {
              className: u.not_pixel_icon
            }), " ", s]
          })]
        }), e.jsx(J, {
          boost: t
        })]
      })
    })
  },
  op = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAApBJREFUeJztmj9OG0EUxr8xyxW4gStKhGjQKgUHSME5Io4ScQ4L+QAUFl0UUbqiS0mRFimJbYrEyAzelTffvPd2V9+vsxnPn9++92Z22YR/XH37s4E4mPuLKgFAguT9N/cXVUqSxzGJnsDQkUASCSSRQBIJJJFAEgkkkUASCSSRQJLq10v0FIaNIpBEAkkkkEQCSSSQRAJJJJCk8hpoUcddq08Pa7O+XVYVKc96fKUwiXkK51ffMp3axl7UE5OxXSPQU57XeKYCo2tfjsV83FboHX1e45oJ7Fv0bSk9L5dVRkWfx/gmAvsafVtKzs98pdHRt8VqHtX6Z9kOHz6/vyal+y/Fop6gnvNSTQ/SbRPcFe3Vrp6vP1xgln4XqwFgKvDk9Oig76PalcBU4Gy6/+XX/PuodiUoLjCvP3nNaapB3u1KbCAAkC7vbN6RLl2sS1JKHixTuOQkS1J6Xm6P9He5fkp4Xq7ePp+cHu2tT6XbWWCWwuhwhrPGch79LVQDQQJJJJAkZBPZ0lbs843Bsg+GMIF/C3vz/jWbboBp+xOTQ/uwJCSFu9yTNrXty0E9JALzlGu7/ZtNN6iXaPw7GlLV6ywYfhn3pWhb2uYRWc/Xe+vc83L1oR+Ls2i4wK7sRtX1U2pt65HmgxO4S9sOa/X0JWfQApvwkgcA1csPn5vupnEOGb/Lb79/eV8jz29tz4GjikBveRiTwAh5GIvAKHnwFJgvslSfkfIAIJ19/W26i1iIa8JbHjwi0GtREfLglcKWizu/XYXJg+fDhMhFWjKKXTgSCSSRQBIJJJFAEgkkkUASCSSRQBIJJJFAEgkkkUASCSSRQBIJJEkAYP1/kbHyeHOc3t7OkcRuPN4cJwB4Bc3bAcUjskiMAAAAAElFTkSuQmCC",
  rp = k(0, 100),
  cp = rp <= 100,
  lp = () => {
    const t = v.stickerStore,
      n = c(i => i.mining.tasks[t]),
      s = 1024,
      a = ft();
    return !cp && !n ? null : e.jsx(q, {
      boost: t,
      action: () => {
        W("https://t.me/sticker_bot?startapp"), a("task_stickerStore")
      },
      reward: s,
      children: e.jsxs("div", {
        className: u.content,
        children: [!n && e.jsx("div", {
          className: u.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: op,
            className: u.image
          })
        }), e.jsxs("div", {
          className: u.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: u.row_title,
              children: "Sticker Store: Pudgy Penguins, BAYC and others"
            })
          }), !n && e.jsxs("div", {
            children: ["Get ", e.jsx(M, {
              className: u.not_pixel_icon
            }), " ", s]
          })]
        }), e.jsx(J, {
          boost: t
        })]
      })
    })
  },
  dp = {
    AZ: !0,
    AM: !0,
    BY: !0,
    KZ: !0,
    KG: !0,
    MD: !0,
    RU: !0,
    TJ: !0,
    TM: !0,
    UZ: !0,
    UA: !0
  },
  up = () => {
    const t = c(j => j.user.country),
      n = t ? t.toUpperCase() : "NULL",
      s = dp[n] ? 1 : 2,
      o = s === 1 ? 74738 : 74739,
      r = v.taskTypeCampaign6_74738,
      l = v.taskTypeCampaign5_74739,
      d = s === 1 ? r : l,
      m = c(j => j.mining.tasks[r]),
      h = c(j => j.mining.tasks[l]),
      g = m || h,
      f = 1024;
    return t ? e.jsx(q, {
      action: () => {
        W(`https://t.me/community_bot/join?startapp=id_${o}`)
      },
      boost: d,
      reward: f,
      children: e.jsxs("div", {
        className: u.content,
        children: [!g && e.jsx("div", {
          className: u.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: DA,
            className: u.image
          })
        }), e.jsxs("div", {
          className: u.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: u.row_title,
              children: "The Open Friends"
            })
          }), !g && e.jsxs("div", {
            children: ["Get ", e.jsx(M, {
              className: u.not_pixel_icon
            }), " ", f]
          })]
        }), e.jsx(J, {
          boost: d
        })]
      })
    }) : null
  },
  mp = "/assets/task_boinkers-DM7UoyVq.png",
  Ap = () => {
    const t = v.boink2,
      n = c(a => a.mining.tasks[t]),
      s = ft();
    return e.jsx(q, {
      action: () => {
        W("https://t.me/boinker_bot/boinkapp?startapp=campNotPixelDec"), s("task_boink_dec")
      },
      boost: t,
      reward: 512,
      children: e.jsxs("div", {
        className: u.content,
        children: [!n && e.jsx("div", {
          className: u.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: mp,
            className: u.image
          })
        }), e.jsxs("div", {
          className: u.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: u.row_title,
              children: "Boinkers: Spin the Slot 10 Times"
            })
          }), !n && e.jsxs("div", {
            children: ["Get ", e.jsx(M, {
              className: u.not_pixel_icon
            }), " ", 512]
          })]
        }), e.jsx(J, {
          boost: t
        })]
      })
    })
  },
  pp = "/assets/task_cryptotravel-S1j0pk50.jpg",
  hp = () => {
    const t = v["channel:purego"],
      n = c(a => a.mining.tasks[t]),
      s = 256;
    return e.jsx(q, {
      action: () => {
        W("https://t.me/purego")
      },
      boost: t,
      reward: s,
      children: e.jsxs("div", {
        className: u.content,
        children: [!n && e.jsx("div", {
          className: u.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: pp,
            className: u.image
          })
        }), e.jsxs("div", {
          className: u.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: u.row_title,
              children: "Crypto Travel"
            })
          }), !n && e.jsxs("div", {
            children: ["Get ", e.jsx(M, {
              className: u.not_pixel_icon
            }), " ", s]
          })]
        }), e.jsx(J, {
          boost: t
        })]
      })
    })
  },
  gp = "/assets/task_seinar-DKi6qDse.png",
  _p = () => {
    const t = v["channel:seinarukiro"],
      n = c(a => a.mining.tasks[t]),
      s = 256;
    return e.jsx(q, {
      action: () => {
        W("https://t.me/seinarukiro")
      },
      boost: t,
      reward: s,
      children: e.jsxs("div", {
        className: u.content,
        children: [!n && e.jsx("div", {
          className: u.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: gp,
            className: u.image
          })
        }), e.jsxs("div", {
          className: u.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: u.row_title,
              children: "ꜱᴇɪɴᴀʀᴜᴋɪʀᴏ"
            })
          }), !n && e.jsxs("div", {
            children: ["Get ", e.jsx(M, {
              className: u.not_pixel_icon
            }), " ", s]
          })]
        }), e.jsx(J, {
          boost: t
        })]
      })
    })
  },
  fp = "/assets/task_scale-DZDk4Npm.jpg",
  xp = () => {
    const t = v["channel:sscaleton"],
      n = c(a => a.mining.tasks[t]),
      s = 256;
    return e.jsx(q, {
      action: () => {
        W("https://t.me/sscaleton")
      },
      boost: t,
      reward: s,
      children: e.jsxs("div", {
        className: u.content,
        children: [!n && e.jsx("div", {
          className: u.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: fp,
            className: u.image
          })
        }), e.jsxs("div", {
          className: u.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: u.row_title,
              children: "Scale"
            })
          }), !n && e.jsxs("div", {
            children: ["Get ", e.jsx(M, {
              className: u.not_pixel_icon
            }), " ", s]
          })]
        }), e.jsx(J, {
          boost: t
        })]
      })
    })
  },
  vp = "/assets/task_wakeup-DUWjoCuC.jpg",
  yp = () => {
    const t = v["channel:waketonup"],
      n = c(a => a.mining.tasks[t]),
      s = 256;
    return e.jsx(q, {
      action: () => {
        W("https://t.me/waketonup")
      },
      boost: t,
      reward: s,
      children: e.jsxs("div", {
        className: u.content,
        children: [!n && e.jsx("div", {
          className: u.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: vp,
            className: u.image
          })
        }), e.jsxs("div", {
          className: u.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: u.row_title,
              children: "Wakeup!"
            })
          }), !n && e.jsxs("div", {
            children: ["Get ", e.jsx(M, {
              className: u.not_pixel_icon
            }), " ", s]
          })]
        }), e.jsx(J, {
          boost: t
        })]
      })
    })
  },
  wp = () => {
    const t = v.earnCoin2,
      n = c(i => i.mining.tasks[t]),
      s = 512,
      a = ft();
    return e.jsx(q, {
      boost: t,
      action: () => {
        W("https://t.me/community_bot/join?startapp=id_74747"), a("task_earncoin2")
      },
      reward: s,
      children: e.jsxs("div", {
        className: u.content,
        children: [!n && e.jsx("div", {
          className: u.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: $o,
            className: u.image
          })
        }), e.jsxs("div", {
          className: u.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: u.row_title,
              children: "Earn Early, dude"
            })
          }), !n && e.jsxs("div", {
            children: ["Get ", e.jsx(M, {
              className: u.not_pixel_icon
            }), " ", s]
          })]
        }), e.jsx(J, {
          boost: t
        })]
      })
    })
  },
  jp = () => e.jsxs("div", {
    className: u.info_container,
    children: [e.jsx(SA, {}), e.jsx(wp, {}), e.jsx(Ap, {}), e.jsx(up, {}), e.jsx(lp, {}), e.jsx(ip, {}), e.jsx(ZA, {}), e.jsx(tp, {}), e.jsx(HA, {}), e.jsx(VA, {}), e.jsx(QA, {}), e.jsx(RA, {}), e.jsx(tA, {}), e.jsx(es, {
      text: "Frens and supporters"
    }), e.jsx(hp, {}), e.jsx(_p, {}), e.jsx(xp, {}), e.jsx(yp, {}), e.jsx(es, {
      text: "Quick start"
    }), e.jsx(sA, {}), e.jsx(iA, {}), e.jsx(rA, {}), e.jsx(es, {
      text: "Special"
    }), e.jsx(hA, {}), e.jsx(TA, {}), e.jsx(kA, {}), e.jsx(vA, {}), e.jsx(yA, {}), e.jsx(fA, {}), e.jsx(Zm, {}), e.jsx(cA, {}), e.jsx(lA, {}), e.jsx(dA, {}), e.jsx(AA, {}), e.jsx(FA, {}), e.jsx(es, {
      text: "Browser"
    }), e.jsx(Km, {}), e.jsx($m, {}), e.jsx(gA, {}), e.jsx(_A, {}), e.jsx(mA, {}), e.jsx("div", {
      style: {
        height: 30
      }
    })]
  }),
  bp = () => {
    const t = _(),
      [n, s] = A.useState(!1);
    return A.useEffect(() => {
      function a(i) {
        i.ctrlKey && i.altKey && i.keyCode === 67 && (async () => {
          try {
            await Hn(window.Telegram.WebApp.initData), await t(z({
              id: performance.now(),
              text: "Copied!"
            }))
          } catch {
            await t(z({
              id: performance.now(),
              text: "Can't copy!"
            }))
          }
          s(!0)
        })()
      }
      return window.addEventListener("keydown", a), () => {
        window.removeEventListener("keydown", a)
      }
    }, []), n ? e.jsx("div", {
      style: {
        overflowWrap: "break-word",
        userSelect: "text"
      },
      children: window.Telegram.WebApp.initData
    }) : null
  },
  Np = () => {
    const t = _(),
      n = c(a => a.user.pixelsForSaleOffset),
      s = c(a => a.user.pixelsForSaleLimit);
    return A.useEffect(() => {
      t(ze.getPixelsForSale({
        offset: n,
        limit: s
      }))
    }, [n, s, t]), null
  },
  Cp = "_container_7jsmf_1",
  Ip = "_row_7jsmf_6",
  Pp = "_cell1_7jsmf_26",
  Sp = "_cell2_7jsmf_30",
  Bp = "_cell3_7jsmf_36",
  Tp = "_icon_arrow_7jsmf_40",
  Ep = "_header_7jsmf_47",
  kp = "_data_7jsmf_57",
  Dp = "_title_7jsmf_63",
  Rp = "_pixelColor_7jsmf_68",
  Mp = "_pixelCoords_7jsmf_77",
  Up = "_pixelPriceValue_7jsmf_83",
  Qp = "_pixelPriceDescription_7jsmf_91",
  Op = "_pixelState_7jsmf_95",
  Fp = "_pixelDate_7jsmf_100",
  zp = "_paginationContainer_7jsmf_107",
  Gp = "_loadMoreButton_7jsmf_114",
  Lp = "_noPixelsContainer_7jsmf_136",
  Hp = "_noPixelsText_7jsmf_143",
  qp = "_pixelsForSaleCountText_7jsmf_149",
  Yp = "_skeleton_container_7jsmf_153",
  Vp = "_skeleton_header_7jsmf_157",
  Wp = "_skeleton_row_7jsmf_166",
  re = {
    container: Cp,
    row: Ip,
    cell1: Pp,
    cell2: Sp,
    cell3: Bp,
    icon_arrow: Tp,
    header: Ep,
    data: kp,
    title: Dp,
    pixelColor: Rp,
    pixelCoords: Mp,
    pixelPriceValue: Up,
    pixelPriceDescription: Qp,
    pixelState: Op,
    pixelDate: Fp,
    paginationContainer: zp,
    loadMoreButton: Gp,
    noPixelsContainer: Lp,
    noPixelsText: Hp,
    pixelsForSaleCountText: qp,
    skeleton_container: Yp,
    skeleton_header: Vp,
    skeleton_row: Wp
  },
  pi = Ws.getSelectors(t => t.user.pixelsForSale);
Xs.getSelectors(t => t.user.pixelsSold);
const hi = Js.getSelectors(t => t.daily.list);
mi.getSelectors(t => t.reward.list);
const er = Dn.getSelectors(t => t.tournament.approvedTemplatesList),
  Xp = () => {
    const t = c(s => s.user.pixelsForSaleFetchStatus);
    return c(pi.selectTotal) === 0 && t === p.fulfilled ? e.jsx("div", {
      className: re.noPixelsContainer,
      children: e.jsx("span", {
        className: re.noPixelsText,
        children: "You don't have Pixels..."
      })
    }) : null
  },
  tr = t => e.jsx("div", {
    className: `${re.cell1}`,
    children: t.children
  }),
  nr = t => e.jsx("div", {
    className: `${re.cell2}`,
    children: t.children
  }),
  sr = t => e.jsx("div", {
    className: `${re.cell3}`,
    children: t.children
  }),
  Jp = () => e.jsxs("div", {
    className: `${re.row} ${re.header}`,
    children: [e.jsx(tr, {
      children: e.jsx("span", {
        className: re.title,
        children: "Pixel"
      })
    }), e.jsx(nr, {
      children: e.jsx("span", {
        className: re.title,
        children: "Value"
      })
    }), e.jsx(sr, {
      children: e.jsx("span", {
        className: re.title,
        children: "Status"
      })
    })]
  }),
  Zp = t => e.jsxs("div", {
    className: re.container,
    children: [e.jsx(Jp, {}), e.jsx("div", {
      className: re.data,
      children: t.children
    })]
  }),
  Kp = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  qe = t => {
    const n = new Date().getFullYear(),
      s = t.getFullYear(),
      a = s === n ? "" : s,
      i = t.getMonth(),
      o = t.getDate(),
      r = t.getHours(),
      l = t.getMinutes();
    return `${o<10?0:""}${o} ${[Kp[i]]} ${a} at ${r<10?0:""}${r}:${l<10?0:""}${l}`
  },
  $p = ({
    date: t
  }) => e.jsx("div", {
    className: re.pixelDate,
    children: qe(new Date(t))
  }),
  eh = ({
    coords: t
  }) => e.jsxs("div", {
    className: re.pixelCoords,
    children: [t.x, ", ", t.y]
  }),
  th = ({
    color: t
  }) => e.jsx("div", {
    className: re.pixelColor,
    style: {
      backgroundColor: t
    }
  }),
  nh = "_main_canvas_1cgxj_1",
  sh = {
    main_canvas: nh
  },
  Zs = t => ({
    x: (t - 1) % E.width,
    y: Math.floor((t - 1) / E.height)
  }),
  _t = ({
    x: t,
    y: n
  }) => t + n * E.width + 1,
  On = ({
    x: t,
    y: n,
    width: s,
    blockSize: a = 4
  }) => (t + n * s) * a,
  Sa = ({
    index: t,
    width: n,
    blockSize: s = 4
  }) => {
    const a = Math.floor(t / s);
    return {
      x: a % n,
      y: Math.floor(a / n)
    }
  },
  Ot = t => {
    const n = parseInt(t.replace("#", ""), 16),
      s = n >> 16 & 255,
      a = n >> 8 & 255,
      i = n & 255;
    return {
      r: s,
      g: a,
      b: i
    }
  },
  cn = (t, n, s) => ("#" + (1 << 24 | t << 16 | n << 8 | s).toString(16).slice(1)).toUpperCase(),
  Pt = t => !(t.x < 0 || t.y < 0 || t.x > E.width - 1 || t.y > E.height - 1),
  fs = G("canvas/repaint", async ({
    pixelId: t,
    newColor: n
  }) => (await X.startRepaint({
    pixelId: t,
    newColor: n
  })).data);
let nn = null;
const Ya = G("canvas/getPixelInfo", async ({
    id: t
  }) => (nn !== null && (nn.abort(), nn = null), nn = new AbortController, (await X.getPixelInfo({
    id: t,
    signal: nn.signal
  })).data)),
  xs = G("canvas/getPrices", async () => (await X.getPrices()).data),
  vs = G("canvas/getPriceMask", async ({
    price: t
  }) => {
    const n = await X.getPriceMask({
        price: t
      }),
      s = new Uint8Array(n.data);
    return b.mask.draw({
      arr: s
    }), {
      result: !0
    }
  }),
  ah = () => ri() ? localStorage.getItem("enableAnimations") ? localStorage.getItem("enableAnimations") === "true" : (localStorage.setItem("enableAnimations", "true"), !0) : !0,
  ih = {
    coords: null,
    animations: ah(),
    stats: null,
    pixelInfo: null,
    getPixelInfoFetchStatus: p.idle,
    repaintFetchStatus: p.idle,
    prices: [],
    selectedPrice: null,
    priceMaskFetching: !1
  },
  ar = _e({
    name: "canvas",
    initialState: ih,
    reducers: {
      setCoords: (t, n) => {
        Pt(n.payload) && (t.coords = n.payload)
      },
      setSelectedPrice: (t, n) => {
        t.selectedPrice = n.payload
      },
      setPriceMask: (t, n) => {
        t.priceMask = n.payload
      },
      enableAnimations: t => {
        localStorage.setItem("enableAnimations", "true"), t.animations = !0
      },
      disableAnimations: t => {
        localStorage.setItem("enableAnimations", "false"), t.animations = !1
      },
      updatePixelInfo: (t, n) => {
        t.pixelInfo = {
          ...t.pixelInfo,
          ...n.payload.changes
        }
      },
      addPaintCoords: (t, n) => {
        Pt(n.payload) && (t.stats = _t(n.payload) ^ 3201282)
      }
    },
    extraReducers: t => {
      t.addCase(Ya.pending, n => {
        n.getPixelInfoFetchStatus = p.pending
      }).addCase(Ya.fulfilled, (n, s) => {
        n.pixelInfo = s.payload, n.getPixelInfoFetchStatus = p.fulfilled, nn = null
      }).addCase(xs.pending, n => {}).addCase(xs.fulfilled, (n, s) => {
        n.prices = s.payload.prices
      }).addCase(xs.rejected, n => {}).addCase(vs.pending, n => {
        n.priceMaskFetching = !0
      }).addCase(vs.fulfilled, n => {
        n.priceMaskFetching = !1
      }).addCase(vs.rejected, n => {
        n.priceMaskFetching = !1
      }).addCase(fs.pending, n => {
        n.repaintFetchStatus = p.pending
      }).addCase(fs.fulfilled, n => {
        n.repaintFetchStatus = p.fulfilled
      }).addCase(fs.rejected, n => {
        n.repaintFetchStatus = p.rejected
      })
    }
  }),
  {
    setCoords: Gt,
    enableAnimations: oh,
    disableAnimations: rh,
    addPaintCoords: ch,
    setPriceMask: tU,
    setSelectedPrice: lh,
    updatePixelInfo: nU
  } = ar.actions,
  dh = ar.reducer,
  da = {
    getPixelInfo: Ya,
    getPriceMask: vs,
    getPrices: xs,
    repaint: fs
  };
class uh {
  constructor({
    viewport: n
  }) {
    this.viewport = n, this.pixiViewport = n.viewport, this.pixel = null, this.line = null, this.hexColor = "#42a6ff", this.color = `0x${this.hexColor.replaceAll("#","")}`
  }
  draw({
    x: n,
    y: s
  }) {
    Pt({
      x: n,
      y: s
    }) && (this.destroy(), this.drawLine({
      x: n,
      y: s
    }), this.drawPixel({
      x: n,
      y: s
    }))
  }
  destroy() {
    this.destroyPixel(), this.destroyLine()
  }
  drawPixel({
    x: n,
    y: s
  }) {
    this.pixel = new PIXI.Graphics, this.pixel.lineStyle(.21, this.color), this.pixel.drawRect(n - .1, s - .1, 1.2, 1.2), this.pixel.zIndex = 10, this.pixiViewport.addChild(this.pixel)
  }
  drawLine({
    x: n,
    y: s
  }) {
    this.line = new PIXI.Graphics, this.line.setTransform(.5, .5), this.line.lineStyle(.2, this.color), this.line.moveTo(-.5, s).lineTo(n - .5, s), this.line.moveTo(n, -.5).lineTo(n, s - .5), this.line.moveTo(E.width - .5, s).lineTo(n + .5, s), this.line.moveTo(n, E.width - .5).lineTo(n, s + .5), this.line.zIndex = 10, this.pixiViewport.addChild(this.line)
  }
  destroyPixel() {
    this.pixel !== null && (this.pixel.destroy(), this.pixel = null)
  }
  destroyLine() {
    this.line !== null && (this.line.destroy(), this.line = null)
  }
  hide() {
    this.line !== null && this.pixel !== null && (this.line.alpha = 0, this.pixel.alpha = 0)
  }
  show() {
    this.line !== null && this.pixel !== null && (this.line.alpha = 1, this.pixel.alpha = 1)
  }
}
const Oe = {
    idle: "idle",
    start: "start",
    finish: "finish"
  },
  mh = {
    command: Oe.idle,
    counter: 0
  },
  ir = _e({
    name: "progress",
    initialState: mh,
    reducers: {
      setProgressCommand: (t, n) => {
        t.command = n.payload.command, t.counter = t.counter + 1
      }
    }
  }),
  {
    setProgressCommand: ht
  } = ir.actions,
  Ah = ir.reducer,
  ph = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAElBMVEVHcEz/////96f/uQD/WQDnERFRxRXOAAAAAXRSTlMAQObYZgAAAKRJREFUeNrt1MENgzAQRNEVUEBqmKUA5DF3C7sApJj+W4kQKcCjHLP//m6jsSiKoiiKon9uKjpZbYZIPEEkM6ESQCW8hQto2r7ExwnwkH2YzHhikUk+h8mSHuLCBBIO3K3j5O0HEgAfJz1XOAGOk0Y2eKVJJB2eFdKvnnbShFpl3clTIWRtVSJGdmYWhdR8ceubQuZiLCa1mDWTe8UzR1EURT/0AVQMHG7ZD4ErAAAAAElFTkSuQmCC",
  hh = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAD1BMVEVHcEz/96f/uQD/WQDnERHKPBirAAAAAXRSTlMAQObYZgAAANhJREFUeNrt1cFthTAQhGHyoIFZN/A8SwHEQwGI0H9N0dNKOa+V634Hbr/QyLK8lFJKKaXMOucTXasvA1OJBoCpJArLB18Ink9eUZhL2WSNhPnE1KMxnckENhB0ZBMQwa/0EkNouWKgoyFYLukwtIGQTcCOHklu/jdgf2ve2aNvAPrE/q3DAbDn92+D6jAYCXBJEUkXGkxK3xVyQELLJpvORwPcH2rJWSXSSZ3UNZV4b4ok40Xuuru5jmyykvtzk++fSDLIY7k/nzz651e+TBhHPTGllFL+5xfUYCDCcZqQBQAAAABJRU5ErkJggg==",
  gh = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAD1BMVEVHcEz/96f/uQD/WQDnERHKPBirAAAAAXRSTlMAQObYZgAAAQRJREFUeNrt1sFxxCAMheEXewtAJAUY4QIwcgGJof+aQtiZ3b2tdMlJ3/0fATrYcM4555zZBjMCsNg62oCfMDLSJwQcAUiWZPhMRNGUTAHf1mRr0FkeSS3Q+XgkOVGARqIXm/YaT6YJU9Te4ynAPCbAPCaaljIlxZM1JusLrJUG02ZuNVmKaeFIQ6SJAU1yH5NUM6aLX5MAhcYH/eGkTiRXGiIPuoMtOQsP6V7pEj7rHDCbrEqqiJwXTcwFbzU5s9S5ljhPp0n6JQdRoigiqIS3zo51H8kXZ5EMCFTWkexNWoZeJZLe0wa9hSITZRisXHrvMNlxk2L+9LUCq1vxnwbnnPtnvyvQK1qRfQjwAAAAAElFTkSuQmCC",
  _h = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAD1BMVEVHcEz/96f/uQD/WQDnERHKPBirAAAAAXRSTlMAQObYZgAAAYJJREFUeNrt1tGN2zAQhOGJ5QIyvBQg7roA3a4KcEL2X1O0MpDY8IEikbdA3/uPEWXCEE6n0+n0n7lg2LcZm2kZSdK+NY8knAH8umGTv3cmMWMaBXsTzri640J2JheGpEZG3IVPgDuOTfwrofQ/2MOHrOiQX5JlcITJMzk0sktom5wvjn4ahrEk8ytz+6p85fhlDZ4+N5KBmTQPz2SyEV3d3kcOXlux/DbSLGJG3pJWEYpkvvo8KHCVzMRnFkWTCPPzsZPajKNEXs6duWAsScd/S1cR5cOeSkdi4nwwIWPyA22T6ZoZkknIVLSVLZG90RpNQJu7riYb9VqMHcnVXbzIZitEjREtR4l5qLW6iBtJUbRM7iWKzLS6iKlnMjVnivvq7kby5qam7kJqO1lrUf8k+cN3CzwTDV7vgJU/yWoLMBmOTLefkcRDFkUfi5Vb3QpZ0MnI5LWWrOh1IVVIKrpNIm4ijpFEUWu9Y4Dc4+5gxA1AGUvu+xXFsHJ+zZ5Op3/zG2ZWUn+tdqomAAAAAElFTkSuQmCC",
  fh = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAD1BMVEVHcEz/96f/uQD/WQDnERHKPBirAAAAAXRSTlMAQObYZgAAAnBJREFUeNrtl12y2jAMhV2SBVSiC4iPuoDEJwu4c8P+11TLLoROr0P80ocO3/AzAX+RLNlmCG/evHnzD7lM/Yr1K7E7zLBob36DyOSKdSkehgznEQ8zWOpTNFyAORSSnUgsExIw1cs0nVMmAOZlu8h1PqcoMuEime8nWim/AeSsEuUPpn6F7FdwNPHZX7KhortnrxXJRMkKqqYpfNOvBWDeayyI6opjITaUZDJlA0WBAYasOhFTIy3WwTWKJRAgy4Uctl00VoUkAIqjL9oOf4KZBNqLbkZxFFF5B3uQgzBaY3xszJSq2dzuS6qKuhFGtwD/oK2EJd6VNV9tYWMimSQcKFqmDjIURjLWuusAfJEWzEhAFFyfe6WSSV8pAVEWgYrCjcLt05X2HhhcqTv4AaTQLBsFpcSY/1IUc6vIgCu2zw8i/oitdiaJboBPzYUjy7XVS0RRGLnfQ1SjRuF8sO8V3L/f6pKTg/4nZKJcHwoEmaOFCUf2ESMTnCkcR5E9SjACRq5t5eJGfDpTSwVJtpVPeM2eGi2igB1FYVFE62/rYENRcKCMrImJqB+DbhflaFsSGVe83YNI1uG0lY3poSguHg2Fn02FRUFVRONDsQOFBkcUPl4EiMVqz56rJdRRkoFT3j+as+e60BWRopSeECI6N2fP23ZlqklVhVw3tI/YbNxuC0lXoiu1i+OGlpKiiN2UTCK4K5/hEL8fCKvbxg2sMbxiy4kQd4zpRzjDszJ8nFK2KFozI8M5RlcsubKGk4iokVGuc+hQSCZYj2K8jQTPK1GZC0V2KLA19CprXaUe6yRWho6WQi/L9f3X7M1/zC/mbn/kN4xkqQAAAABJRU5ErkJggg==",
  xh = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAElBMVEVHcEz/96f/uQD/WQDnERFAMiwoKjrVAAAAAXRSTlMAQObYZgAAArpJREFUeNrt10F2mzAQBmDV4H1H5ADMrx4Aa9Q9CXif9xLuf5VqJHCTgGJot/4XXvjxSYw0kp/NI4888khK1R0n4V9nkQOkfm4T6Q8QtiZmPEKIWiXmQIh0Gu+OEJ2mApZZpd9DrDkB8/6McldUFGM80JqU07iPtAC0GBgms49YQIthItpBTjQHYNpJeDFMGnucNNIdJr4td0reMiayFvqZib1PUuGIBqAU197p64rIwokHFmK77aYR6W8kCo3HhTgZetrqgCHk/kUWv4dZqWH6uVnIeNs+dCLX6T0ZJENt6WRpGHCmCtcwjYsp7+a8pIAEc56GaXodlldry72VyaDkGokZrpN4Jivm22nYvl8jiTFmmsKbB9CWiHAiEse/keF7UtkbMeeZxIUDWepKhFhrCUpyppgB4intnHyBtYRTXp/fOr7mnMgEsiCytXwlRi7UkOWFZKTEsyXN0+r+rH0kBLg81s28vszk57rPRrZMbN2nsaYpHblC09RxOLDFalUSsei2VowtWTjzMefX8xuDCGzXYOl8+UKmd8TQpTGbWROtxmqR0hVITFgR6JKp2EvOrwCKJ6ZS0m8M1JYvPQAuHCKVEuk3vi2jRLoVcSKhIGoAdkVOgIgUSOUBWhXjAVecZfAA26Zfl1Iky0W8EnBdoRSRTLrPlWgKpMqEqflcieZXkXifUXf7zmbiCtWLvAgAAtwiCOCktomIDI0HiMnOZl4PAvoCCeNFJD3DeQ4LOBEQ2e36oxiHRsRHkpb1okQkDChd/jpYeHYirI+CZfnpMPVQ7MvRw3kIciiTF/Ntaum103LyZIHNvWSyxIl/uk9qT/SBVL25nxclJr+ZiNmTH/k2yyTsJU605ZiazuwjOrgSD7eTnPJhrmuB7CWQfm663cSpOEbC3wOk+Ehq583RXJrHX9NH/jt/AL3WmbEKtmBpAAAAAElFTkSuQmCC",
  vh = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAFVBMVEVHcEz/uQD/WQDnERFAMiyACgUZDg0R26nsAAAAAXRSTlMAQObYZgAAAthJREFUeNrt18GO2jAQBuBZzHJmTMU5Hrecsx5xb3etnNGi3AFF8/6PUNsJywJ2Sa4VvxBSJH+ZxB6TAM8888x/mFk1nVjoQ9OrUD2WqPNIHk/gTGAC0dMnAKup5AVvyjj7mMQy6mvGlKtGEA3gqLpM4mMSyxBZGJ23QJaKiKBPNY7oWSB17IUZLscRpJAKZohYJpflNthHE+FI0g/cnFD3dMS9kBaDKGIGwvyYrCVU6JrjmVB+GNWXFlt3Xuben8TgRgxaGnZesY1ecO19E0gjRy1yRO2yfab42xz/SCTktOn8EdHmN5y6IYtIGvH+DyIaLLVW6l+D+qf3v6GLJHy9y0ljiQzLN5BYRgIREURdIskEFAYfAOJ1pUJiSqs5i0AMUSoCEkQk4XPUUIhB3EgnIpEsAGAg/mhrKJYR8U1PDhBNlwgRFKJcJF7CwAi6BhYSD/wpSxRZgDcTSCwjANEcIF1mA2aVM1QFojfSXciigbkECWCWEOOouioTjizzRvxvkQOkeJgfgoSODGIFiq4JMCC+4WYYfyapmm9OGALqptFUbQJZfydNJMlIIsD3k0yoFwJfOQxVwIspNA3h7QokL4EckWyOOLzpJjn0RORE+T5TVNgYIi8rrPMtY5aQD64Y8oSq0g/oCiYRRcUdAy5PHNVQCmVJ9xHJlCoL74ksTLmXzntm3hXIZ4FY5rpAOHfR3vv3YpVXtpAl3paIypbvUhnIZ58l80hsgTDXKjvJ3tGuROJXxnxQYTFfs0RR/0Av3D1v67s3lhkZRE2/SqTdc8h1EzG7gGyBtG17RyxzG4zO30sbc092AK0jgDK6JspuK/hn2vbm4Tuzn0vIJNOcyg4HbHaPyd4sARxRRI7rLTzOq0FQlUorbke+kyNqW6enlLK8G0viydkhMsBIkk7OTDSWGB0F7PbOjiVkt+emG02CmEjs7msDBTwtn1xNJQrr51/gZ67yF2l/ou0eQckjAAAAAElFTkSuQmCC",
  yh = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAElBMVEVHcEz/WQDnERFAMiyACgUZDg3ZC39iAAAAAXRSTlMAQObYZgAAA7xJREFUeNrtmE2TozYQhhUDd0vZ3FEDdw0Nd1bGdy+y/v9fSbfEEAKiAqmtrdqqeS+iGD3qD3X32BZf+tKXtpL/AynFKf1xXx7hLKL+QcRJ5E8jZqE4qWpBzGlEXEZQXFYmEtJKXFSu75ctd+VlBM9u9MvTfyZPS774AvvTWbxJKcsZcf25miFEEeJQOMTXWUTOHiFqJbJDDBbHomdalogd0Rm+YpEfIoKReyArbIl2hByXwGLl2xBCwg5giEi2aTk6a7mD74yoR1geaGvhI2JSdRcRkCSowlJ770y6Xm+AyzNoMgIPAF6cQ3PQPrdPpDAWWDgvTof8pfR5mMMOSLWPCzrJKpN9FBH2g89/eOwsLTgF5J42MyOtQksEydkad0gCRC15v1Z9oPAjIN8O71CVjDSIvZSNb6VCbAOihjSiQ4lYYESrxutYMSwYDoywmg6eiB6g79gh18VrKo+KnjdRBISQLDvk3xA07F0qPxHVYx/idnw8eD9fkyj6jQEkLiLkliYOnQ1bI/P0wuGLfV8YTYgMoki+c9jouoA4XVmoMSJ6hdyqBWneHC/PihHGx8TP9tHKkh3jVlgEJtNMKKhazUmI/Y5TDE9LFUZgXu6TDPBoQcr5sCJevmcwNQKdJYKQbpVTF5Ef6QYo+hZYiJ0dl7ehnStCUozDd+yQdf7zGOCULk3EnjtkKF7r+CLS6STiuEzGetjMhODYpBl87WJBYrZvc9BSjc+JSdiP9IwRj2bDkJ4UpaxHTJjpPff+1pCtn76FcXygEVt574V3JhEkJ7NOISKGkkLQAiAhJ1UQ0edQI75OfyZw2NNmApOEVO6VKKUZPECwlYprNgGm/HIA4HSYwIboc3ECTPM4/SzdW1xv6QMyni0/IjLSouIkCVY/GExZ0bJqw5a8lqQYHr/Aj4OxrLnOAWCF3Obh1iaR+OeKe8ZPwKdn7FBQ9U6OWBN8+MvZOvwn41gWpPF22MdujAyI93xrHdQjbZKtnN8iHiLNJEsXxysjODvWqj0icqNn5M7N1gWk8RDCr7QsE8gQwkfUJSMuzNLeA7cypJFxyEHK0BUFek+948yNE8h6WkghmbEANQ/4wnvXM0IGlk8Bw94vQnjWh0r3c6VrCty/7ZjFKYJbZH2MQ1M4IaxUjSdliAa7PUIzZFVvL4+EADSIZBFRYDeIHfLvV4zkFDgj846Ts8IT8lrOPKWQ7iBCTn0fMau3hPxMobkI5AOai99COJmXkXWY4ylmHFdOjlc9ywm/ql+BMPMb/ajxN8we1xzBMA0/AAAAAElFTkSuQmCC",
  wh = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkAgMAAAANjH3HAAAADFBMVEVHcEznERFAMiyACgVxtGBQAAAAAXRSTlMAQObYZgAAAodJREFUeNrt1TFqG0EUBuA/GgTGeJnG6d0EzDZxs53N6ggq8phmQVdYkjYgBR8gV1ATMGlyhQGfYVATcoZp1I15mZ0dzay16ygkkCo/KoQ+3lvtm5ld/M/vpvoDqTGRJXxuJ0A08Lmekh9BNhO03eKQy5MyjntZbjDMDKcz+3xC/kXOMEyxQs58KBXpkbxBl9fUZpEI+aJ7WaJoosTxfvNyvq2oiR2zyG0nc3qXO25SbahR2lBsd4GU2dZ42dMKOxzH/6qZ1oLwLOcPeKK1ZmZB+kiumBm1Fz4W1F4EOzCeywaSHSBtiXH6NuVoM4oW2HVyT+rZCoSRkfbyiQ6DeLUAKmqLpsTOCwqiZZT3gCElXQkGjI5SLCAsQESPXgBB7Zyo6QXXQTQQWjW+ZhWXpoTwYoPcBVkDeKvDpYiUDaeupo9yT4wuSSrVCTvB7OXsOojwre2eNMKImF0+sobWvQi2Xm1evTvF9knpvsEHfsxrJJk1c6xv6oIWQ5GuXw5Dej7YlKGgF6LFnFTaOILj/p91UhDpgwD4isMdtDLLxn+iSKImS+iPgRiVZZbE+G5P6yQ5cr+yYMZEmIcimiFZ1A4xVZCUBzmUokPT9oIUXx0WjppjEQ6GAEkqSQ55qYlSxxyjopAa3YYXQ2Gi+J6vo1B3slcoiBqo4TNHOIQjNydSyKM21IahsrsMYqJ0vZdBandZEBE47VEvlQYg7a3/rlAPpK0Wsd7QCinCS9G33gkmLjMZOlTQI7MrRRth0+3cKG3N9rxo0qz5IMYKByTRIglb+EiHUXoRUYS1mM59ltMvI/Gi3LxcoxGiJ+REh1P/6srFIY7J/bqnxDgXvYipC6Wi6ci/eqn+BJYAHRseeKj2AAAAAElFTkSuQmCC",
  jh = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkAgMAAAANjH3HAAAADFBMVEVHcExiV01AMiyACgVW8W35AAAAAXRSTlMAQObYZgAAAipJREFUeNrt0jGK20AUBuA/EoaVWFDl3o1CrGpvIB/BRd7EeBuVwU2uMGy6NKmUeiAY7NlDWNk75A5hq4lrw2Tk0egh24GQLIGE/cFYw8e8mfck/MeJ8ZS5usLTpPk5TdAnwq/lT291jX81k99tVsEnWeI0Ei43yEkixC3BGVN1VjPIPDuRbmdOi7LBpYzodSu5xDAZchIfAdSzEymbmoScOBneIzZls6alBKDVsNYhw5ZWbbVCDmsdAK11FjoYSFxoDeAAnzAxJ0h334YyAXJ6Z14C1iQVhqlJoL6T1owWgEJOVZgqEcn67rPb89aJHJPw37MX7WT/QfkSBJ/IiSok7IMEEB9YXhAJBaD0Tdu2BKDAgk6+Eqm+2nIowvS3XrUSd/JIt6HfqdAKN6Ybu33U90FSrSXQSWLd0gwkHFpBa3RRWoNFoNj0Ejnh5pApcAZSNp/ixi83LAmRLB/ofZBIBpkSVVlCM1wUjNzvLAWRdCIuSL2Sx8POJNJavkp7MYgbJhbEB8QG4KS1CJIfH/JFkO3KC/YkYwBj0QnPNDqWjWqSZ6J3TVu9b52nXVjDEgFpJ8kCR1n3e0IXtfCy7c6JKv5GpTV8bvllwa9k1t4AhRf7XXQycqLgkrYyv7Z7Ftr5sptWYPcbrmYbhChYEySiNyyAKXnu61svYfAcfW+bpLokqbZI5v7MCibrgfv2r8hJInGaXPi/6kymy4vCAyrUmaReUoXn/MX8AOTf3EjQ8IXZAAAAAElFTkSuQmCC",
  bh = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkAgMAAAANjH3HAAAACVBMVEVHcExiV01AMiwfKIGrAAAAAXRSTlMAQObYZgAAAUlJREFUeNrt1TGKFEEUBuCvHwzMdOxuJGKyy7inmCNsMNU0Rh0aeoTCExjYi2Fj5IW8icgEixo+aLpgMZT50r/+ggrqPVdX/7UYqm2HMtm2K2MrcQZP1vZuIcpmC0oFgrTAj63OskePtVhI4SWikoLDew13ZXIPAaq5VGA+hQpiJD4pZQQKFegGiFLOwBlAPEKcujOITL5V6BhAl8kCcFsJ0gTwE6GzLfw+aTmSDhV6YC9FmeCIIJB+wQX0e6k7d1BBj0weNRxOpL4C8A44TAQcrby+EJA64OOztQfAYC0AN5OG3aihayZG0jxJH0hllL5LPYAFi0CM8IYUwN0Ib0l9FXCxtgAPFbKTQsP84qmyz481WrkH5tMrKzcVFEg77CaEP6w9A58h9VC1XpiJtictX1pH8squapnAV2y2YyA0NDp6LXHdhv/qL+6eN5hJ+KKhAAAAAElFTkSuQmCC",
  Nh = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkAgMAAAANjH3HAAAACVBMVEVHcExiV01AMiwfKIGrAAAAAXRSTlMAQObYZgAAAQBJREFUeNrtlUEKwjAQRX8DlcaVCwWXXRjxGLmExWWOMniCLsR1jyp2kGCT31pEcNG3avMyTWYyoVhY+DekJsKgAqhjFHjiBCn9WOlpZECKbqHLGaPfZDGYZephgo0A2bWtB2wvRQPdOag5xGK2ADrZoUHPJi6g6d+wQ54WZayWcnpFFqIPb0bpBgYDI3lj1H9eLZk4fiNMXN/eAgu5gdHiZ5guHbpAzTptPGbqGR1HprgLIisgsjXExPqd1CSoWYPBTTVl7uwq2Ya1ovV8H7NxgQjjhwPgOVlh51cGZCg8gD01FbkZX+OEGjolbiaAoakc6TGXwkxBzGi+svx1R3kAWDoiQG5YEtEAAAAASUVORK5CYII=",
  Ch = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkAgMAAAANjH3HAAAACVBMVEVHcExiV01AMiwfKIGrAAAAAXRSTlMAQObYZgAAAP5JREFUeNrtlU1qwzAQRp8FLlJWXTTQpRZVyTF0iZosdZShJ/AidO2jFoKJ8M9HcUPIxm9l62kYj2aE2dl5DhaFcHiQTtEAkIwlBtBmGVlY4gEY1owDMBnDJhOZ4jqD1dwhQ7Bb7kj6Klz5qIfZA4Md6bjyWhNkAC4cWaenhWllJ8bIxsaHmQGGmWFmTJoojVc9xKFwpsT35K2okAuKnofhhuXSeTSH5eApEzdMnNiSzlReoPLmhKnnd7qZSjUHFNr4v8yPukqhU2MVsv6OzaQihMvzBXRNwVT/2sIKTQbepfHiZtxNMmnqFtnCgmAs5VO2uTVlGml0vdj+1/0nv3CcIl47CPeHAAAAAElFTkSuQmCC";
let Ih = class {
  constructor({
    app: n,
    viewport: s,
    mainImage: a
  }) {
    this.app = n, this.pixiViewport = s.viewport, this.mainImage = a, this.size = 5, this.bombs = [ph, hh, gh, _h, fh, xh, vh, yh, wh, jh, bh, Nh, Ch], this.textureArray = [];
    for (let i = 0; i < 13; i++) {
      let o = PIXI.Texture.from(this.bombs[i]);
      o.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST, this.textureArray.push(o)
    }
  }
  async boomWithDebounce({
    x: n,
    y: s
  }) {
    await kn(k(50, 3e3)), this.boom({
      x: n,
      y: s
    })
  }
  boom({
    x: n,
    y: s
  }) {
    const a = new PIXI.AnimatedSprite(this.textureArray);
    a.loop = !1, a.animationSpeed = .17, a.zIndex = 2, a.x = n, a.y = s, a.scale.set(k(1, 2) === 1 ? 1 : -1, 1), a.anchor.set(.48, .55), this.pixiViewport.addChild(a), a.play(), a.onComplete = () => {
      this.pixiViewport.removeChild(a)
    }
  }
};
const Ph = "_order_panel_dvy5p_1",
  Sh = "_content_dvy5p_13",
  Bh = "_fast_mode_blocker_dvy5p_26",
  Th = "_info_dvy5p_39",
  Eh = "_active_color_dvy5p_48",
  kh = "_pixel_info_container_dvy5p_58",
  Dh = "_pixel_info_color_dvy5p_66",
  Rh = "_pixel_info_text_dvy5p_72",
  Mh = "_info_button_dvy5p_78",
  Uh = "_info_button_active_dvy5p_95",
  Qh = "_price_value_dvy5p_99",
  Oh = "_pixel_locked_text_dvy5p_105",
  Fh = "_pixel_locked_text_painted_dvy5p_116",
  zh = "_pixel_locked_animation_dvy5p_138",
  Gh = "_button_dvy5p_144",
  Lh = "_button_text_dvy5p_168",
  Hh = "_flash_mode_button_text_dvy5p_181",
  qh = "_not_pixel_icon_dvy5p_192",
  Yh = "_tg_logo_dvy5p_196",
  Vh = "_image_dvy5p_201",
  Wh = "_inner_wrapper_button_dvy5p_206",
  le = {
    order_panel: Ph,
    content: Sh,
    fast_mode_blocker: Bh,
    info: Th,
    active_color: Eh,
    pixel_info_container: kh,
    pixel_info_color: Dh,
    pixel_info_text: Rh,
    info_button: Mh,
    info_button_active: Uh,
    price_value: Qh,
    pixel_locked_text: Oh,
    pixel_locked_text_painted: Fh,
    pixel_locked_animation: zh,
    button: Gh,
    button_text: Lh,
    flash_mode_button_text: Hh,
    not_pixel_icon: qh,
    tg_logo: Yh,
    image: Vh,
    inner_wrapper_button: Wh
  },
  Xh = "_panel_1mia4_1",
  Jh = "_item_1mia4_15",
  Zh = "_active_1mia4_24",
  Va = {
    panel: Xh,
    item: Jh,
    active: Zh
  },
  pn = ({
    children: t,
    className: n = "",
    style: s = {}
  }) => e.jsx("div", {
    className: `${Va.panel} ${n}`,
    style: {
      ...s
    },
    children: t
  }),
  Fe = ({
    active: t,
    setActive: n,
    children: s
  }) => e.jsx("div", {
    className: `${Va.item} ${t?Va.active:""}`,
    onPointerUp: () => {
      n()
    },
    children: s
  }),
  or = t => t ? t.friends >= sl.friendsForTemplateCreation || t.isContractor : !1,
  nt = {
    create: "create",
    main: "main",
    result: "result"
  },
  Kh = () => {
    const t = _(),
      n = c(o => o.tournament.activeTab),
      s = c(He),
      a = or(s),
      i = c(o => o.tournament.myTemplate);
    return e.jsxs(pn, {
      children: [a && i && e.jsx(Fe, {
        active: n === nt.create,
        setActive: () => t(Ba(nt.create)),
        children: "My template"
      }), e.jsx(Fe, {
        active: n === nt.main,
        setActive: () => t(Ba(nt.main)),
        children: "Tournament"
      }), e.jsx(Fe, {
        active: n === nt.result,
        setActive: () => t(Ba(nt.result)),
        children: "My results"
      })]
    })
  };
let vn = null;
class Ye {
  static async uploadTemplate({
    blob: n,
    posX: s,
    posY: a
  }) {
    const i = {
      "Content-Type": "application/octet-stream"
    };
    return s && s !== "" && (i.posX = s), a && a !== "" && (i.posY = a), P.post("/image/template/upload", n, {
      headers: i
    })
  }
  static async uploadTournamentTemplate({
    blob: n,
    posX: s,
    posY: a
  }) {
    return P.post("/tournament/template/upload", n, {
      headers: {
        "Content-Type": "application/octet-stream",
        posX: s,
        posY: a
      }
    })
  }
  static async getReferredTemplate() {
    return P.get("/image/template/my")
  }
  static async getTemplateById({
    id: n
  }) {
    return vn !== null && (vn.abort(), vn = null), vn = new AbortController, P.get(`/image/template/${n}`, {
      signal: vn.signal
    })
  }
  static async getTournamentTemplateById({
    id: n
  }) {
    return P.get(`/tournament/template/${n}`)
  }
  static async getSelectedTemplate() {
    return P.get("/tournament/template/subscribe/my")
  }
  static async getTemplatesList({
    limit: n,
    offset: s
  }) {
    return P.get(`/image/template/list?limit=${n}&offset=${s}`)
  }
  static async getApprovedTemplatesList({
    limit: n,
    offset: s
  }) {
    return P.get(`/tournament/template/list?limit=${n}&offset=${s}`)
  }
  static async getRandomTemplates() {
    return P.get("/tournament/template/list/random?limit=16")
  }
  static async subscribeToTemplate({
    id: n
  }) {
    return P.put(`/image/template/subscribe/${n}`)
  }
  static async subscribeToTournamentTemplate({
    id: n
  }) {
    return P.put(`/tournament/template/subscribe/${n}`)
  }
  static async getAvailableSizes({
    userId: n
  }) {
    return P.get(`/image/template/sizes/${n}`)
  }
}
class rr {
  static async getPeriods() {
    return P.get("/tournament/periods")
  }
  static async getResults() {
    return P.get("/tournament/user/results")
  }
}
const ys = G("tournament/getPeriods", async () => (await rr.getPeriods()).data),
  ws = G("tournament/getResults", async () => (await rr.getResults()).data),
  js = G("tournament/getMyTemplate", async ({
    id: t
  }) => (await Ye.getTournamentTemplateById({
    id: t
  })).data),
  bs = G("tournament/getSelectedTemplate", async () => (await Ye.getSelectedTemplate()).data),
  Ns = G("tournament/getApprovedTemplatesList", async ({
    offset: t,
    limit: n
  }) => (await Ye.getApprovedTemplatesList({
    offset: t,
    limit: n
  })).data),
  Cs = G("tournament/getRandomTemplatesList", async () => (await Ye.getRandomTemplates()).data),
  Is = G("tournament/selectTemplate", async ({
    id: t
  }) => (await Ye.subscribeToTournamentTemplate({
    id: t
  })).data),
  $h = {
    activeTab: nt.main,
    showTournamentDetailsPopup: !1,
    showRoundRewardsPopup: !1,
    activeTournamentTemplate: null,
    myTemplate: null,
    selectedTemplate: null,
    periods: null,
    activePeriod: null,
    results: null,
    showTemplateInfoPopup: !1,
    templateDataInfoPopup: null,
    approvedTemplatesList: Dn.getInitialState(),
    approvedTemplatesListStatus: p.idle,
    approvedTemplatesListOffset: 0,
    approvedTemplatesListLimit: 16,
    approvedTemplatesListTotal: 0,
    selectTemplateStatus: p.idle,
    randomTemplatesListStatus: p.idle,
    periodsStatus: p.idle,
    resultsStatus: p.idle,
    selectedTemplateStatus: p.idle
  },
  yn = "?time=1502",
  cr = _e({
    name: "tournament",
    initialState: $h,
    reducers: {
      setActiveTournamentTab: (t, n) => {
        t.activeTab = n.payload
      },
      changeTemplateCoordsIfNeeded: (t, n) => {
        t.myTemplate && t.myTemplate.id === n.payload.templateId && (t.myTemplate = {
          ...t.myTemplate,
          x: n.payload.x,
          y: n.payload.y
        }), t.selectedTemplate && t.selectedTemplate.id === n.payload.templateId && (t.selectedTemplate = {
          ...t.selectedTemplate,
          x: n.payload.x,
          y: n.payload.y
        })
      },
      setActiveTournamentTemplate: (t, n) => {
        t.activeTournamentTemplate = n.payload
      },
      hideTournamentTemplates: t => {
        t.activeTournamentTemplate = null
      },
      setShowTournamentDetailsPopup: (t, n) => {
        t.showTournamentDetailsPopup = n.payload
      },
      setShowRoundRewardsPopup: (t, n) => {
        t.showRoundRewardsPopup = n.payload
      },
      setMyTournamentTemplate: (t, n) => {
        t.myTemplate = n.payload
      },
      clearApprovedTemplateList: t => {
        t.approvedTemplatesList = Dn.getInitialState(), t.approvedTemplatesListOffset = 0
      },
      showTournamentTemplateInfoPopup: (t, n) => {
        t.showTemplateInfoPopup = !0, t.templateDataInfoPopup = n.payload
      },
      closeTournamentTemplateInfoPopup: t => {
        t.showTemplateInfoPopup = !1, t.templateDataInfoPopup = null
      },
      setSelectedTemplate: (t, n) => {
        try {
          localStorage.setItem("selectedTemplate", JSON.stringify(n.payload))
        } catch {}
        t.selectedTemplate = n.payload
      }
    },
    extraReducers: t => {
      t.addCase(js.pending, n => {}).addCase(js.fulfilled, (n, s) => {
        s.payload.id && (n.myTemplate = {
          ...s.payload,
          type: Re.my,
          url: `${s.payload.url}${yn}`
        })
      }).addCase(js.rejected, (n, s) => {}).addCase(ys.pending, n => {
        n.periodsStatus = p.pending
      }).addCase(ys.fulfilled, (n, s) => {
        n.periodsStatus = p.fulfilled, n.periods = s.payload.allPeriods, n.activePeriod = s.payload.activePeriod
      }).addCase(ys.rejected, (n, s) => {
        n.periodsStatus = p.rejected
      }).addCase(ws.pending, n => {
        n.resultsStatus = p.pending
      }).addCase(ws.fulfilled, (n, s) => {
        n.resultsStatus = p.fulfilled, n.results = s.payload.rounds.sort((a, i) => i.round_id - a.round_id)
      }).addCase(ws.rejected, (n, s) => {
        n.resultsStatus = p.rejected
      }).addCase(bs.pending, n => {
        n.selectedTemplateStatus = p.pending
      }).addCase(bs.fulfilled, (n, s) => {
        s.payload.id && (n.selectedTemplate = {
          ...s.payload,
          imageSize: s.payload.size || s.payload.imageSize,
          type: Re.referred,
          url: `${s.payload.url}${yn}`
        }), n.selectedTemplateStatus = p.fulfilled
      }).addCase(bs.rejected, (n, s) => {
        n.selectedTemplateStatus = p.rejected
      }).addCase(Ns.pending, n => {
        n.approvedTemplatesListStatus = p.pending
      }).addCase(Ns.fulfilled, (n, s) => {
        s.payload && s.payload.list && (Dn.addMany(n.approvedTemplatesList, s.payload.list.map(a => ({
          ...a,
          url: `${a.url}${yn}`
        }))), n.approvedTemplatesListOffset += 16, n.approvedTemplatesListTotal = Math.max(s.payload.total, n.approvedTemplatesListTotal)), n.approvedTemplatesListStatus = p.fulfilled
      }).addCase(Ns.rejected, (n, s) => {
        n.approvedTemplatesListStatus = p.rejected
      }).addCase(Cs.pending, n => {
        n.randomTemplatesListStatus = p.pending
      }).addCase(Cs.fulfilled, (n, s) => {
        s.payload && s.payload.list && Dn.setAll(n.approvedTemplatesList, s.payload.list.map(a => ({
          ...a,
          url: `${a.url}${yn}`
        }))), n.randomTemplatesListStatus = p.fulfilled
      }).addCase(Cs.rejected, (n, s) => {
        n.randomTemplatesListStatus = p.rejected
      }).addCase(Is.pending, n => {
        n.selectTemplateStatus = p.pending
      }).addCase(Is.fulfilled, (n, s) => {
        s.payload.id && (n.selectedTemplate = {
          ...s.payload,
          type: Re.referred,
          url: `${s.payload.url}${yn}`
        }), n.selectTemplateStatus = p.fulfilled
      }).addCase(Is.rejected, (n, s) => {
        n.selectTemplateStatus = p.rejected
      })
    }
  }),
  {
    setActiveTournamentTab: Ba,
    setActiveTournamentTemplate: eg,
    hideTournamentTemplates: tg,
    setShowTournamentDetailsPopup: lr,
    setShowRoundRewardsPopup: dr,
    changeTemplateCoordsIfNeeded: ur,
    setMyTournamentTemplate: aU,
    clearApprovedTemplateList: mr,
    showTournamentTemplateInfoPopup: gi,
    closeTournamentTemplateInfoPopup: Ta,
    setSelectedTemplate: Ar
  } = cr.actions,
  at = {
    getMyTemplate: js,
    getSelectedTemplate: bs,
    getApprovedList: Ns,
    getRandomList: Cs,
    selectTemplate: Is,
    getPeriods: ys,
    getResults: ws
  },
  lt = t => {
    const n = t.tournament.activePeriod;
    return n && n.ID && n.PeriodType === "round" ? n.RoundID : null
  },
  ng = t => {
    const n = lt(t);
    if (!n) return null;
    const s = t.tournament.periods;
    for (let a = 0; a < s.length; a++) {
      const i = s[a];
      if (i.RoundID === n) return i
    }
    return null
  },
  ua = t => {
    const n = t.tournament.activePeriod;
    if (!n) return null;
    if (n.PeriodType === "break" || n.PeriodType === "") {
      const s = n.ID,
        a = t.tournament.periods.filter(o => o.ID > s);
      return a.length === 0 ? null : a[0].RoundID
    } else if (n.PeriodType === "round") return n.RoundID;
    return null
  },
  sg = t => {
    const n = ua(t);
    if (!n) return null;
    const s = t.tournament.periods;
    for (let a = 0; a < s.length; a++) {
      const i = s[a];
      if (i.RoundID === n) return i
    }
    return null
  },
  ag = t => {
    const n = lt(t);
    if (!n) return null;
    const s = t.tournament.results;
    if (!s) return null;
    const a = s.filter(i => i.round_id === n);
    return a.length > 0 ? a[0] : null
  },
  ig = t => t.tournament.results,
  og = cr.reducer;
window.getComputedStyle(document.body).getPropertyValue("--canvas-bg-color");
const rg = {
  1: 1
};
let At;
const cg = t => {
  At = t
};
let Wa = 0;
setInterval(() => {
  console.log(Wa), Wa = 0
}, 1e4);
let Fn = !0;
window.addEventListener("blur", () => {
  Fn = !1
});
window.addEventListener("focus", () => {
  Fn = !0
});
document.addEventListener("visibilitychange", () => {
  document.hidden ? Fn = !1 : Fn = !0
});
let Ke = null;
const lg = (t, n, s) => {
    let a = {
        token: t
      },
      i = {
        data: new TextEncoder().encode(JSON.stringify(a))
      };
    Ke = new Pc(oi.replace("https", "wss").replace("api/v1/", "connection/websocket"), i), Ke.on("connected", function(o) {
      if (console.log(`connected over ${o.transport}`), !jo()) return;
      console.log("centrifuge image");
      const r = new Blob([o.data], {
          type: "image/webp"
        }),
        l = new Image;
      l.src = URL.createObjectURL(r), l.onload = () => {
        b.mainImage.loadFromCentrifuge(l).then(() => {
          const m = At.getState().main.startParams.coords;
          m && (b.viewport.viewport.animate({
            scale: 60,
            time: 400,
            position: {
              x: m.x + .5,
              y: m.y + .5
            }
          }), b.mainImage.selectedPixel.draw(m), At.dispatch(Gt(m)))
        })
      }
    }), Ke.on("disconnected", function(o) {
      console.log(`_disconnected: ${o.code}, ${o.reason}`)
    }), Ke.on("error", function(o) {
      console.log(o)
    }), Ke.on("publication", function(o) {
      if (o.channel === "event:message") {
        JSON.parse(new TextDecoder().decode(o.data)).forEach(d => {
          const m = JSON.parse(d.data);
          if (d.type === wa.pixanos && At.dispatch(pg(m)), m.user.userId === n || !Fn) return;
          const g = At.getState().canvas.animations;
          if (d.type === wa.bomb) {
            const f = Zs(m.info.pixelId);
            g && b.mainImage.bomb.boomWithDebounce(f)
          }
          if (d.type === wa.pumpkin) {
            const f = Zs(m.info.pixelId);
            b.mainImage.pumpkin.boomWithDebounce(f, g)
          }
        });
        return
      }
      const r = new Uint8Array(o.data);
      Sc(r, (l, d) => {
        if (l) console.error("Ошибка распаковки данных:", l);
        else {
          const m = JSON.parse(new TextDecoder().decode(d));
          if (o.channel === "pixel:message") Object.values(m).forEach(h => {
            Wa += h.length
          }), b.mainImage.paintPixelsFromCentrifuge(m);
          else if (o.channel === `personal:user#${n}`) {
            const h = JSON.parse(new TextDecoder().decode(d));
            if (h.type === rg[1] && At.getState().daily.list.entities[h.good_id]) {
              const g = At.getState().daily.list.entities[h.good_id],
                f = g.name,
                j = g.prices[0].quantity;
              At.dispatch(z({
                id: performance.now(),
                text: `Transaction for daily ${g.id} completed! Got ${f} x${j}. Refresh the app.`,
                icon: ""
              }))
            }
          } else if (o.channel === "event:tournament") {
            const h = JSON.parse(new TextDecoder().decode(d));
            h.type && h.type === 1 && h.templates.forEach(f => {
              At.dispatch(ur(f))
            })
          } else {
            if (o.channel === "event:mini-game") return;
            console.log("unknown channel", o)
          }
        }
      })
    }), Ke.connect()
  },
  Ps = G("main/getPixanosRating", async () => (await X.getPixanosRating()).data),
  dg = () => !1,
  ug = {
    settings: {
      RepaintReward: 1,
      BetaRefLimit: 3,
      IsBeta: !0,
      BronzeMax: 8,
      SilverMax: 128,
      GoldMax: 2048,
      PlatinumMax: 2048e3,
      SquadBronzeMax: 1024,
      SquadSilverMax: 20480,
      SquadGoldMax: 102400,
      DefaultSpeed: .0042,
      MaxMiningTime: 8,
      MinTimeToClaim: 1,
      NoBoostAdded: 0,
      InitialCharges: 5,
      Restore1ChargeMSec: 6e5,
      DynamiteSquareSide: 5,
      ReferralClaimReward: .16,
      TokensForInvite1Fren: 64,
      TokensForInvite3Frens: 64,
      TokensForSpendStars: 512,
      TokensForWalletConnection: 256,
      TokensForWalletVerification: 512,
      TokensForPixelInNickname: 256,
      TokensForPaint20Pixels: 64,
      TokensForJoinSquad: 64,
      TokensForTelegramPremium: 512,
      TokensForJoinChannel: 128,
      TokensForJoinX: 128,
      TokensForBoostChannelNotPixel: 64,
      TokensForMakePixelAvatar: 64,
      InitialCoins: 32,
      RefRewardCoinsPremium: 128,
      TokensForSilverLeagueCommon: 16,
      TokensForGoldLeagueCommon: 32,
      TokensForPlatinumLeagueCommon: 64,
      TokensForSilverLeaguePremium: 128,
      TokensForGoldLeaguePremium: 256,
      TokensForPlatinumLeaguePremium: 512,
      TokensForSilverLeagueCommonReferral: 16,
      TokensForGoldLeagueCommonReferral: 32,
      TokensForPlatinumLeagueCommonReferral: 64,
      TokensForSilverLeaguePremiumReferral: 128,
      TokensForGoldLeaguePremiumReferral: 256,
      TokensForPlatinumLeaguePremiumReferral: 512,
      UpgradeRepaint: {
        levels: {
          2: {
            Price: 5,
            Boost: 1.5
          },
          3: {
            Price: 100,
            Boost: 2
          },
          4: {
            Price: 200,
            Boost: 2.5
          },
          5: {
            Price: 300,
            Boost: 3
          },
          6: {
            Price: 500,
            Boost: 3.5
          },
          7: {
            Price: 600,
            Boost: 4,
            Max: !0
          }
        }
      },
      UpgradeChargeRestoration: {
        levels: {
          2: {
            Price: 5,
            ChargeBoost: 57e4
          },
          3: {
            Price: 100,
            ChargeBoost: 54e4
          },
          4: {
            Price: 200,
            ChargeBoost: 51e4
          },
          5: {
            Price: 300,
            ChargeBoost: 48e4
          },
          6: {
            Price: 400,
            ChargeBoost: 45e4
          },
          7: {
            Price: 500,
            ChargeBoost: 42e4
          },
          8: {
            Price: 600,
            ChargeBoost: 39e4
          },
          9: {
            Price: 700,
            ChargeBoost: 36e4
          },
          10: {
            Price: 800,
            ChargeBoost: 33e4
          },
          11: {
            Price: 900,
            ChargeBoost: 3e5,
            Max: !0
          }
        }
      },
      UpgradeChargeCount: {
        levels: {
          2: {
            Price: 5,
            Boost: 7
          },
          3: {
            Price: 100,
            Boost: 2
          },
          4: {
            Price: 200,
            Boost: 2
          },
          5: {
            Price: 300,
            Boost: 2
          },
          6: {
            Price: 400,
            Boost: 2
          },
          7: {
            Price: 10,
            Boost: 4,
            Max: !0
          }
        }
      }
    },
    startParams: cl(),
    startAppTs: Date.now(),
    timeLimit: !1,
    showIntro: !1,
    showBetaTestIntro: !1,
    fastMode: !1,
    fastEnergy: !1,
    currentFastType: null,
    showUserAndSquadPopup: !1,
    userAndSquadPopupStack: [],
    showNoFlagsPopup: dg(),
    showMiningDetailsPopup: !1,
    showInviteFrensPopup: !1,
    showNoChargesPopup: !1,
    lastShowChargesPopupTs: Date.now() - el,
    showBoostDetailsPopup: !1,
    activeBoostDetails: ge.paintReward,
    referrerSquadId: null,
    showMiniPopup: !1,
    showPixanosEvent: !1,
    pixanosProcessing: !1,
    pixanosEventData: null,
    showPixanosRating: !1,
    pixanosRatingData: null,
    pixanosRatingStatus: p.idle,
    flyingRewards: []
  },
  pr = _e({
    name: "main",
    initialState: ug,
    reducers: {
      setTimeLimit: t => {
        t.timeLimit = !0, Ke && Ke.disconnect()
      },
      updateSettings: (t, n) => {
        t.settings = {
          ...t.settings,
          ...n.payload
        }
      },
      enableFastMode: t => {
        t.fastMode = !0, t.currentFastType = null
      },
      disableFastMode: t => {
        t.fastMode = !1
      },
      enableFastType: (t, n) => {
        t.currentFastType = n.payload, t.fastEnergy = !1, t.fastMode = !1
      },
      disableFastType: t => {
        t.currentFastType = null
      },
      enableFastEnergy: t => {
        t.fastEnergy = !0, t.currentFastType = null
      },
      disableFastEnergy: t => {
        t.fastEnergy = !1
      },
      setShowPixanosRating: (t, n) => {
        t.showPixanosRating = n.payload
      },
      showPixanosEvent: (t, n) => {
        t.showPixanosEvent = !0, t.pixanosEventData = n.payload
      },
      hidePixanosEvent: t => {
        t.showPixanosEvent = !1, t.pixanosEventData = null
      },
      setPixanosProcessing: (t, n) => {
        t.pixanosProcessing = n.payload
      },
      setShowIntro: (t, n) => {
        t.showIntro = n.payload
      },
      setShowBetaTestIntro: (t, n) => {
        t.showBetaTestIntro = n.payload
      },
      setShowMiniPopup: (t, n) => {
        t.showMiniPopup = n.payload
      },
      addFlyingReward: (t, n) => {
        t.flyingRewards.push({
          ...n.payload,
          id: `${n.payload.flyCoords.x}_${n.payload.flyCoords.y}_${performance.now()}`
        })
      },
      removeFlyingReward: (t, n) => {
        t.flyingRewards = t.flyingRewards.filter(s => s.id !== n.payload)
      },
      showInviteFrensPopup: t => {
        t.showInviteFrensPopup = !0
      },
      hideInviteFrensPopup: t => {
        t.showInviteFrensPopup = !1
      },
      showNoChargesPopup: t => {
        t.showNoChargesPopup = !0
      },
      hideNoChargesPopup: t => {
        t.showNoChargesPopup = !1
      },
      setLastShowChargesPopupTs: (t, n) => {
        t.lastShowChargesPopupTs = n.payload, un.save("lastShowChargesPopupTs", JSON.stringify(n.payload))
      },
      setShowMiningDetailsPopup: (t, n) => {
        t.showMiningDetailsPopup = n.payload
      },
      setShowBoostDetailsPopup: (t, n) => {
        t.showBoostDetailsPopup = n.payload
      },
      setActiveBoostDetails: (t, n) => {
        t.activeBoostDetails = n.payload
      },
      addItemToUserAndSquadPopupStack: (t, n) => {
        t.userAndSquadPopupStack.length === 0 && (t.showUserAndSquadPopup = !0), t.userAndSquadPopupStack.push(n.payload)
      },
      removeItemFromUserAndSquadPopupStack: t => {
        t.userAndSquadPopupStack.length === 1 && (t.showUserAndSquadPopup = !1), t.userAndSquadPopupStack.pop()
      },
      setShowNoFlagsPopup: (t, n) => {
        t.showNoFlagsPopup = n.payload
      },
      setReferrerSquadId: (t, n) => {
        t.referrerSquadId = n.payload
      }
    },
    extraReducers: t => {
      t.addCase(Ps.pending, (n, s) => {
        n.pixanosRatingStatus = p.pending
      }).addCase(Ps.fulfilled, (n, s) => {
        n.pixanosRatingStatus = p.fulfilled, n.pixanosRatingData = s.payload
      }).addCase(Ps.rejected, (n, s) => {
        n.pixanosRatingStatus = p.rejected
      })
    }
  }),
  {
    setTimeLimit: mg,
    updateSettings: iU,
    enableFastMode: hr,
    disableFastMode: ma,
    enableFastType: Aa,
    disableFastType: Ht,
    enableFastEnergy: Ag,
    disableFastEnergy: gr,
    setShowPixanosRating: Ss,
    showPixanosEvent: pg,
    hidePixanosEvent: hg,
    setPixanosProcessing: Gi,
    setShowIntro: oU,
    setShowBetaTestIntro: rU,
    setShowMiniPopup: gg,
    addFlyingReward: _g,
    removeFlyingReward: fg,
    showInviteFrensPopup: cU,
    hideInviteFrensPopup: Ea,
    showNoChargesPopup: lU,
    hideNoChargesPopup: ka,
    setLastShowChargesPopupTs: dU,
    setShowMiningDetailsPopup: _r,
    setShowBoostDetailsPopup: _i,
    setActiveBoostDetails: xg,
    addItemToUserAndSquadPopupStack: Yn,
    removeItemFromUserAndSquadPopupStack: fr,
    setShowNoFlagsPopup: vg,
    setReferrerSquadId: Xa
  } = pr.actions,
  yg = pr.reducer,
  wg = {
    getPixanosRating: Ps
  },
  hn = si(t => t.main.settings, t => {
    const n = t.UpgradeRepaint,
      s = t.UpgradeChargeCount,
      a = t.UpgradeChargeRestoration;
    let i = 1,
      o = 1,
      r = 1;
    return Object.keys(n.levels).forEach(l => {
      n.levels[l].Max && (i = Number(l))
    }), Object.keys(s.levels).forEach(l => {
      s.levels[l].Max && (o = Number(l))
    }), Object.keys(a.levels).forEach(l => {
      a.levels[l].Max && (r = Number(l))
    }), {
      repaintReward: i,
      chargesCount: o,
      restorationSpeed: r
    }
  }),
  xr = si(t => t.main.settings, t => ({
    bronze: 0,
    silver: t.BronzeMax + 1,
    gold: t.SilverMax + 1,
    platinum: t.GoldMax + 1,
    diamond: t.PlatinumMax + 1,
    limit: {
      bronze: t.BronzeMax + 1,
      silver: t.SilverMax + 1,
      gold: t.GoldMax + 1,
      platinum: "∞",
      diamond: "∞"
    }
  })),
  jg = si(t => t.main.settings, t => ({
    bronze: 0,
    silver: t.SquadBronzeMax + 1,
    gold: t.SquadSilverMax + 1,
    platinum: t.SquadGoldMax + 1,
    diamond: t.SquadPlatinumMax + 1,
    limit: {
      bronze: t.SquadBronzeMax + 1,
      silver: t.SquadSilverMax + 1,
      gold: t.SquadGoldMax + 1,
      platinum: "∞",
      diamond: "∞"
    }
  })),
  bg = "_layout_oxfjd_1",
  Ng = "_container_oxfjd_7",
  Cg = "_placeholder_oxfjd_20",
  Ig = "_progress_oxfjd_24",
  Pg = "_counter_oxfjd_32",
  Sg = "_counter_max_text_oxfjd_45",
  Xt = {
    layout: bg,
    container: Ng,
    placeholder: Cg,
    progress: Ig,
    counter: Pg,
    counter_max_text: Sg
  },
  Bg = () => {
    _();
    const t = te(),
      n = c(o => o.mining.charges),
      s = c(o => o.mining.maxCharges),
      a = c(o => o.main.currentFastType),
      i = n >= s;
    return a !== null ? null : e.jsx("div", {
      className: Xt.layout,
      onPointerUp: o => {
        o.stopPropagation(), t.push("/energy-over")
      },
      children: e.jsxs("div", {
        className: Xt.container,
        children: [e.jsxs("div", {
          className: Xt.placeholder,
          children: [e.jsx(I, {
            children: ""
          }), e.jsxs("span", {
            children: [" ", n]
          }), i && e.jsx("span", {
            className: Xt.counter_max_text,
            children: " max"
          })]
        }), e.jsxs("div", {
          className: Xt.counter,
          children: [e.jsx(I, {
            children: ""
          }), e.jsxs("span", {
            children: [" ", n]
          }), i && e.jsx("span", {
            className: Xt.counter_max_text,
            children: " max"
          })]
        })]
      })
    })
  },
  Tg = "_progress_g3q57_1",
  Eg = {
    progress: Tg
  },
  kg = ({
    progress: t
  }) => e.jsx("div", {
    className: Eg.progress,
    style: {
      width: `${t}%`
    }
  }),
  Dg = () => {
    const t = _(),
      n = c(h => h.mining.charges),
      s = A.useRef(n),
      a = c(h => h.mining.addedCharges),
      i = A.useRef(0),
      o = c(h => h.mining.reChargeTs),
      r = c(h => h.mining.reChargeSpeed),
      l = c(h => h.mining.maxCharges),
      [d, m] = A.useState(0);
    return A.useEffect(() => {
      const h = () => {
        if (s.current >= l) {
          g = requestAnimationFrame(h);
          return
        }
        const f = Date.now(),
          x = Math.floor((f - o) / r) - i.current;
        x > 0 && s.current < l && (t(Vo(x)), t(am(x)));
        let y = (f - o) % r;
        m(y * 100 / r), g = requestAnimationFrame(h)
      };
      let g = requestAnimationFrame(h);
      return () => {
        cancelAnimationFrame(g), i.current = 0
      }
    }, [o]), A.useEffect(() => {
      s.current = n, n === l && m(0)
    }, [n]), A.useEffect(() => {
      i.current = a
    }, [a]), e.jsxs(ae.Fragment, {
      children: [e.jsx(Bg, {}), e.jsx(kg, {
        progress: d
      })]
    })
  },
  Rg = "_layout_91s2c_1",
  Mg = "_container_91s2c_21",
  Ug = "_buttons_container_91s2c_27",
  Qg = "_button_91s2c_27",
  Og = "_shop_button_91s2c_45",
  Fg = "_container__bottom_91s2c_50",
  zg = "_fast_type_button_91s2c_50",
  Gg = "_disabled_button_cover_91s2c_62",
  Lg = "_fast_mode_button_enabled_91s2c_72",
  Hg = "_available_91s2c_82",
  qg = "_limited_good_timer_91s2c_99",
  Yg = "_disabled_available_cover_91s2c_120",
  Vg = "_button_image_91s2c_130",
  Wg = "_animation_91s2c_147",
  Xg = "_shake_91s2c_1",
  S = {
    layout: Rg,
    container: Mg,
    buttons_container: Ug,
    button: Qg,
    shop_button: Og,
    container__bottom: Fg,
    fast_type_button: zg,
    disabled_button_cover: Gg,
    fast_mode_button_enabled: Lg,
    available: Hg,
    limited_good_timer: qg,
    disabled_available_cover: Yg,
    button_image: Vg,
    animation: Wg,
    shake: Xg
  },
  Jg = "_number_179d2_1",
  Zg = "_layout_179d2_6",
  Kg = "_viewer_179d2_14",
  $g = "_container_179d2_18",
  e_ = "_digit_179d2_25",
  t_ = {
    number: Jg,
    layout: Zg,
    viewer: Kg,
    container: $g,
    digit: e_
  },
  n_ = "_layout_q3t4p_1",
  s_ = "_viewer_q3t4p_9",
  a_ = "_container_q3t4p_18",
  i_ = "_digit_q3t4p_25",
  wn = {
    layout: n_,
    viewer: s_,
    container: a_,
    digit: i_
  },
  o_ = ({
    digit: t = 0,
    fontSize: n = 16,
    fontWeight: s = 600,
    gap: a = 6
  }) => {
    const [i, o] = A.useState(!0), [r, l] = A.useState(0), d = r === 0 ? `translateY(${a/2}px)` : `translateY(-${a/2+(n+a)*r-a}px)`;
    return A.useEffect(() => {
      o(!1);
      const m = setTimeout(() => {
        o(!0)
      }, 500);
      return () => {
        clearTimeout(m)
      }
    }, [r]), A.useEffect(() => {
      l(t)
    }, [t]), e.jsx("div", {
      className: wn.layout,
      children: e.jsxs("div", {
        className: wn.viewer,
        style: {
          height: n + a
        },
        children: [e.jsx("span", {
          className: wn.digit,
          style: {
            visibility: i ? "visible" : "hidden",
            alignSelf: "center",
            fontSize: n,
            fontWeight: s
          },
          children: r
        }), e.jsx("div", {
          className: wn.container,
          style: {
            transform: d,
            visibility: i ? "hidden" : "visible",
            gap: a
          },
          children: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(m => e.jsx("span", {
            className: wn.digit,
            style: {
              fontSize: n,
              fontWeight: s
            },
            children: m
          }, m))
        })]
      })
    })
  },
  Vn = ({
    number: t,
    fontSize: n = 16,
    fontWeight: s = 600,
    gap: a = 6,
    addSpace: i = !0
  }) => {
    if (t === void 0) return null;
    const o = String(t).split("").reverse();
    let r = [];
    for (let l = 0; l < o.length; l++) l % 3 === 0 && l !== 0 && i && r.push("space"), r.push(o[l]);
    return r = r.reverse(), e.jsx("div", {
      className: t_.number,
      children: r.map((l, d) => l === "space" ? e.jsx("div", {
        children: " "
      }, r.length - d) : e.jsx(o_, {
        digit: Number(l),
        fontSize: n,
        fontWeight: s,
        gap: a
      }, r.length - d))
    })
  },
  r_ = {
    isTMA: !1,
    isAuth: !1,
    authData: null
  },
  vr = _e({
    name: "auth",
    initialState: r_,
    reducers: {
      setIsTMA: (t, n) => {
        t.isTMA = n.payload
      },
      setAuthData: (t, n) => {
        t.authData = n.payload
      },
      setIsAuth: (t, n) => {
        t.isAuth = n.payload
      }
    },
    extraReducers: () => {}
  }),
  {
    setIsTMA: c_,
    setIsAuth: l_,
    setAuthData: d_
  } = vr.actions,
  fi = t => t.auth.isTMA,
  Ve = t => t.auth.isAuth,
  u_ = vr.reducer;
let Da = !1;
const m_ = async ({
  dispatch: t,
  amount: n,
  charges: s,
  maxCharges: a,
  status: i,
  state: o
}) => {
  var l, d;
  if (!n && o && (n = o.shop.available[1], s = o.mining.charges, a = o.mining.maxCharges, i = o.shop.useProductStatus), !n || n === 0) return t(sa(10)), t(ot(1)), t(rt()), t(gr()), !1;
  if (s === a) return !1;
  if (Da) return p.pending;
  Da = !0, t(ht({
    command: Oe.start
  }));
  try {
    (await t(oa.useProduct({
      productId: 1,
      pixelId: 1
    }))).meta.requestStatus === p.fulfilled && (t(sm(a)), t(aa({
      product: 1,
      amount: 1
    })), (d = (l = window.Telegram.WebApp) == null ? void 0 : l.HapticFeedback) == null || d.notificationOccurred("error"))
  } catch (m) {
    console.log("error", m)
  } finally {
    Da = !1, t(ht({
      command: Oe.finish
    }))
  }
  return !0
}, A_ = () => {
  const t = _(),
    n = c(Ve),
    s = 1,
    a = c(d => d.shop.available[s]),
    o = 10 + String(a).length * 6,
    r = c(d => d.main.fastEnergy),
    l = [S.button, S.fast_type_button];
  return r && l.push(S.fast_mode_button_enabled), n ? e.jsxs("button", {
    className: `${l.join(" ")} ${S.shop_button}`,
    onPointerUp: async () => {
      if (r) t(gr());
      else {
        if (!a || a === 0) return t(ot(s)), t(rt()), !1;
        t(Ag())
      }
    },
    children: [e.jsx("img", {
      alt: "img",
      className: S.button_image,
      src: Do
    }), e.jsx("div", {
      className: S.available,
      style: {
        width: o
      },
      children: !a || a === 0 ? e.jsx(I, {
        children: ""
      }) : e.jsx(Vn, {
        number: a,
        fontSize: 11,
        fontWeight: 400,
        gap: 3
      })
    })]
  }) : null
}, p_ = {
  isShowSideMenu: !1
}, yr = _e({
  name: "layout",
  initialState: p_,
  reducers: {
    setShowSideMenu: (t, n) => {
      t.isShowSideMenu = n.payload
    }
  }
}), {
  setShowSideMenu: Ft
} = yr.actions, wr = t => t.layout.isShowSideMenu, h_ = yr.reducer;
let Jt = null,
  Zt = null;
class jr {
  static async personal({
    league: n
  }) {
    Jt !== null && (Jt.abort(), Jt = null), Jt = new AbortController;
    const s = await P.get(`/ratings/personal?league=${n.toLowerCase()}&limit=20`, {
      signal: Jt.signal
    });
    return Jt = null, s
  }
  static async squad({
    league: n
  }) {
    Zt !== null && (Zt.abort(), Zt = null), Zt = new AbortController;
    const s = await P.get(`/ratings/squads?league=${n.toLowerCase()}&limit=20`, {
      signal: Zt.signal
    });
    return Zt = null, s
  }
}
const Bs = G("ratings/personal", async ({
    league: t
  }) => (await jr.personal({
    league: t
  })).data),
  Ts = G("ratings/squad", async ({
    league: t
  }) => (await jr.squad({
    league: t
  })).data),
  g_ = {
    list: [],
    myPlace: 0,
    mySquadPlace: 0,
    mySquad: null,
    league: "bronze",
    status: p.idle
  },
  br = _e({
    name: "ratings",
    initialState: g_,
    reducers: {
      setActiveLeague: (t, n) => {
        t.league = n.payload
      },
      clearRatingList: t => {
        t.list = []
      }
    },
    extraReducers: t => {
      t.addCase(Bs.pending, (n, s) => {
        n.status = p.pending
      }).addCase(Bs.fulfilled, (n, s) => {
        n.status = p.fulfilled, n.list = [...Object.values(s.payload.top)], n.myPlace = s.payload.myPlace
      }).addCase(Bs.rejected, (n, s) => {
        n.status = p.rejected
      }).addCase(Ts.pending, (n, s) => {
        n.status = p.pending
      }).addCase(Ts.fulfilled, (n, s) => {
        n.status = p.fulfilled, n.list = [...Object.values(s.payload.top)], n.mySquadPlace = s.payload.MySquadPlace, n.mySquad = s.payload.mySquad
      }).addCase(Ts.rejected, (n, s) => {
        n.status = p.rejected
      })
    }
  }),
  {
    setActiveLeague: Nr,
    clearRatingList: __
  } = br.actions,
  xi = {
    personal: Bs,
    squad: Ts
  },
  f_ = br.reducer,
  Es = G("history/get", async ({
    offset: t,
    limit: n
  }) => (await X.getHistory({
    offset: t,
    limit: n
  })).data),
  x_ = {
    list: [],
    status: p.idle
  },
  Cr = _e({
    name: "history",
    initialState: x_,
    reducers: {
      resetHistory: t => {
        t.list = [], t.status = p.idle
      }
    },
    extraReducers: t => {
      t.addCase(Es.pending, (n, s) => {
        n.status = p.pending
      }).addCase(Es.fulfilled, (n, s) => {
        n.status = p.fulfilled, n.list = s.payload
      }).addCase(Es.rejected, (n, s) => {
        n.status = p.rejected
      })
    }
  });
Cr.actions;
const vi = {
    get: Es
  },
  v_ = Cr.reducer,
  Dt = ln();
Dt.startListening({
  matcher: ve(xe.info.fulfilled),
  effect: (t, n) => {
    t.payload.activated && (n.dispatch(nu(t.payload.totalUserPixels)), n.dispatch(Go(t.payload.userBalance))), n.dispatch(Cl(t.payload.goods))
  }
});
Dt.startListening({
  matcher: ve(xe.checkTask.fulfilled),
  effect: (t, n) => {
    const s = t.meta.arg.key,
      a = t.payload[s],
      i = t.meta.arg.reward,
      o = t.meta.arg.disableFailPopup;
    a && (s === v.pumpkin && n.dispatch(an({
      product: 7,
      amount: 6
    })), n.dispatch(kt(i)));
    let r = "Check failed",
      l = "";
    if (a) r = "Well done fren", l = "";
    else if (!a && o) return;
    n.dispatch(z({
      id: performance.now(),
      text: r,
      icon: l
    }))
  }
});
Dt.startListening({
  matcher: ve(xe.checkBoost.fulfilled),
  effect: (t, n) => {
    const s = t.meta.arg.key,
      a = t.payload[s];
    let i = "Not enough PX",
      o = "";
    a && (i = "Well done fren", o = ""), n.dispatch(z({
      id: performance.now(),
      text: i,
      icon: o
    }))
  }
});
Dt.startListening({
  matcher: ve(xe.checkBoost.fulfilled),
  effect: (t, n) => {
    const s = n.getState(),
      a = s.main.settings,
      i = t.meta.arg.key,
      o = t.payload[i],
      r = t.meta.arg.price;
    if (o) {
      if (i === ge.energyLimit) {
        const l = s.mining.boosts[ge.energyLimit],
          d = a.UpgradeChargeCount.levels[l].Boost;
        n.dispatch(tm(s.mining.maxCharges + d)), n.dispatch(Vo(d))
      }
      if (i === ge.reChargeSpeed) {
        const l = s.mining.boosts[ge.reChargeSpeed],
          d = a.UpgradeChargeRestoration.levels[l].ChargeBoost;
        n.dispatch(nm(d))
      }
      n.dispatch(ou(r))
    }
  }
});
Dt.startListening({
  matcher: ve(xe.checkTask.rejected),
  effect: (t, n) => {
    n.dispatch(z({
      id: performance.now(),
      text: "Check failed",
      icon: ""
    }))
  }
});
Dt.startListening({
  matcher: ve(xe.checkBoost.rejected),
  effect: (t, n) => {
    n.dispatch(z({
      id: performance.now(),
      text: "Not enough PX",
      icon: ""
    }))
  }
});
Dt.startListening({
  matcher: ve(Yo),
  effect: (t, n) => {
    const a = n.getState().mining.toggleAction;
    console.log("boosts length: ", JSON.stringify(a).length), un.save("boosts1", JSON.stringify(a))
  }
});
const pa = ln();
pa.startListening({
  matcher: ve(da.getPriceMask.pending, ze.getPixelsForSale.pending, ze.getPixelsSold.pending, vi.get.pending),
  effect: (t, n) => {
    n.dispatch(ht({
      command: Oe.start
    }))
  }
});
pa.startListening({
  matcher: ve(da.getPriceMask.fulfilled, ze.getPixelsForSale.fulfilled, ze.getPixelsSold.fulfilled, vi.get.fulfilled),
  effect: (t, n) => {
    n.dispatch(ht({
      command: Oe.finish
    }))
  }
});
pa.startListening({
  matcher: ve(da.getPriceMask.rejected),
  effect: (t, n) => {
    t.error.code !== "ERR_CANCELED" && n.dispatch(ht({
      command: Oe.finish
    }))
  }
});
const Ir = ln();
Ir.startListening({
  matcher: ve(ze.getUser.fulfilled),
  effect: (t, n) => {
    n.dispatch(Nr(t.payload.data.league))
  }
});
const Wn = ln();
Wn.startListening({
  actionCreator: hr,
  effect: () => {
    b.mainImage.selectedPixel.hide()
  }
});
Wn.startListening({
  actionCreator: ma,
  effect: () => {
    b.mainImage.selectedPixel.show()
  }
});
Wn.startListening({
  actionCreator: Aa,
  effect: () => {
    b.mainImage.selectedPixel.hide()
  }
});
Wn.startListening({
  actionCreator: Ht,
  effect: () => {
    b.mainImage.selectedPixel.show()
  }
});
const Pr = ln();
Pr.startListening({
  matcher: ve(xi.squad.fulfilled),
  effect: (t, n) => {
    n.dispatch(ru(t.payload.mySquad))
  }
});
const y_ = {
    info: null,
    popupId: null,
    getInfoFetchStatus: p.idle
  },
  ks = G("squad/getSquadInfo", async ({
    id: t
  }) => (await X.getSquadInfo({
    id: t
  })).data),
  Sr = _e({
    name: "squad",
    initialState: y_,
    reducers: {
      setPopupSquadId: (t, n) => {
        t.popupId = n.payload
      }
    },
    extraReducers: t => {
      t.addCase(ks.pending, n => {
        n.getInfoFetchStatus = p.pending
      }).addCase(ks.fulfilled, (n, s) => {
        n.info = s.payload, n.getInfoFetchStatus = p.fulfilled
      }).addCase(ks.rejected, n => {
        n.getInfoFetchStatus = p.rejected
      })
    }
  });
Sr.actions;
const w_ = Sr.reducer,
  ha = {
    getInfo: ks
  },
  j_ = "/assets/coffee_break-nQdMk1u4.png",
  b_ = G("template/subscribe", async ({
    id: t
  }) => (await Ye.subscribeToTemplate({
    id: t
  })).data),
  Ds = G("template/getTemplateList", async ({
    offset: t,
    limit: n
  }) => (await Ye.getTemplatesList({
    offset: t,
    limit: n
  })).data),
  N_ = G("template/getAvailableSizes", async ({
    userId: t
  }) => (await Ye.getAvailableSizes({
    userId: t
  })).data),
  Rs = G("template/getReferredTemplate", async () => (await Ye.getReferredTemplate()).data),
  Ja = G("template/getMyTemplate", async ({
    id: t
  }) => (await Ye.getTemplateById({
    id: t
  })).data),
  Ms = G("template/getWorldTemplate", async () => ({
    x: 0,
    y: 0,
    imageSize: E.width,
    url: j_,
    type: Re.world
  })),
  C_ = {
    active: null,
    activeTab: "my",
    showTemplateDetailsPopup: !1,
    showTemplateInfoPopup: !1,
    templateInfoPopupId: null,
    list: [],
    listStatus: p.idle,
    listOffset: 0,
    listLimit: 12,
    opacity: [70],
    worldTemplate: null,
    referredTemplate: null,
    myTemplate: null,
    sizes: []
  },
  Br = _e({
    name: "template",
    initialState: C_,
    reducers: {
      setActiveTemplate: (t, n) => {
        t.active = n.payload, b.mainImage.worldTemplate.hide(), b.mainImage.worldTemplate.show(n.payload)
      },
      setActiveTemplateTab: (t, n) => {
        t.activeTab = n.payload
      },
      hideTemplates: t => {
        t.active = null, b.mainImage.worldTemplate.hide()
      },
      setTemplateOpacity: (t, n) => {
        t.opacity = n.payload
      },
      setShowTemplateDetailsPopup: (t, n) => {
        t.showTemplateDetailsPopup = n.payload
      },
      setShowTemplateInfoPopup: (t, n) => {
        t.showTemplateInfoPopup = n.payload.show, t.templateInfoPopupId = n.payload.id || null
      },
      setReferredTemplate: (t, n) => {
        t.referredTemplate = n.payload
      },
      setMyTemplate: (t, n) => {
        t.myTemplate = n.payload
      },
      setTemplateListOffset: (t, n) => {
        t.listOffset = n.payload
      },
      clearTemplatesListData: t => {
        t.list = [], t.listStatus = p.idle, t.listOffset = 0
      }
    },
    extraReducers: t => {
      t.addCase(Rs.pending, n => {}).addCase(Rs.fulfilled, (n, s) => {
        if (s.payload) {
          const a = {
            ...s.payload,
            type: Re.referred
          };
          n.referredTemplate = a
        }
      }).addCase(Rs.rejected, (n, s) => {}).addCase(Ja.pending, n => {}).addCase(Ja.fulfilled, (n, s) => {}).addCase(Ms.pending, (n, s) => {}).addCase(Ms.fulfilled, (n, s) => {
        const a = {
          ...s.payload,
          type: Re.world
        };
        n.worldTemplate = a, b.mainImage.worldTemplate.add(a)
      }).addCase(Ms.rejected, (n, s) => {}).addCase(Ds.pending, n => {
        n.listStatus = p.pending
      }).addCase(Ds.fulfilled, (n, s) => {
        n.listStatus = p.fulfilled, s.payload && (n.list = [...n.list, ...s.payload], n.listOffset += 12)
      }).addCase(Ds.rejected, n => {
        n.listStatus = p.rejected
      })
    }
  }),
  {
    setActiveTemplate: I_,
    setActiveTemplateTab: Li,
    hideTemplates: yi,
    setTemplateOpacity: P_,
    setReferredTemplate: S_,
    setMyTemplate: B_,
    setTemplateListOffset: uU,
    clearTemplatesListData: T_,
    setShowTemplateDetailsPopup: Tr,
    setShowTemplateInfoPopup: Za
  } = Br.actions,
  St = {
    getReferredTemplate: Rs,
    getTemplateById: Ja,
    getWorldTemplate: Ms,
    getList: Ds,
    getAvailableSizes: N_,
    subscribe: b_
  },
  E_ = Br.reducer,
  k_ = {
    list: Js.getInitialState(),
    selected: 1,
    showHowDailyWorksPopup: !1,
    getDailyListFetchStatus: p.idle,
    getFirstDailyFetchStatus: p.idle
  },
  Us = G("daily/getList", async () => (await X.getDailyList()).data),
  Qs = G("daily/getFirstDaily", async () => (await X.getFirstDaily()).data),
  Er = _e({
    name: "daily",
    initialState: k_,
    reducers: {
      setSelectedDaily: (t, n) => {
        t.selected = n.payload
      },
      setShowHowDailyWorksPopup: (t, n) => {
        t.showHowDailyWorksPopup = n.payload
      },
      updateOneDaily: (t, n) => {
        Js.updateOne(t.list, n.payload)
      }
    },
    extraReducers: t => {
      t.addCase(Us.pending, n => {
        n.getDailyListFetchStatus = p.pending
      }).addCase(Us.fulfilled, (n, s) => {
        Js.setAll(n.list, s.payload.dailyAvailable), n.getDailyListFetchStatus = p.fulfilled
      }).addCase(Us.rejected, n => {
        n.getDailyListFetchStatus = p.rejected
      }).addCase(Qs.pending, n => {
        n.getFirstDailyFetchStatus = p.pending
      }).addCase(Qs.fulfilled, (n, s) => {
        n.getFirstDailyFetchStatus = p.fulfilled
      }).addCase(Qs.rejected, n => {
        n.getFirstDailyFetchStatus = p.rejected
      })
    }
  }),
  D_ = t => {
    const n = t.daily.selected;
    return hi.selectById(t, n)
  },
  {
    setSelectedDaily: R_,
    updateOneDaily: mU,
    setShowHowDailyWorksPopup: kr
  } = Er.actions,
  M_ = Er.reducer,
  Dr = {
    getList: Us,
    getFirstDaily: Qs
  },
  Os = G("reward/getList", async ({
    userId: t
  }) => (await X.getRewards({
    userId: t
  })).data),
  Ra = G("reward/getById", async ({
    rewardId: t
  }) => (await X.getRewardById({
    rewardId: t
  })).data),
  U_ = {
    showPopup: !1,
    id: null,
    rewardUserId: null,
    info: null,
    active: null,
    list: mi.getInitialState(),
    getListStatus: p.idle,
    getRewardStatus: p.idle
  },
  Rr = _e({
    name: "reward",
    initialState: U_,
    reducers: {
      showRewardPopup: t => {
        t.showPopup = !0
      },
      hideRewardPopup: t => {
        t.showPopup = !1
      },
      setReward: (t, n) => {
        t.id = n.payload.rewardId, t.rewardUserId = n.payload.rewardUserId, t.info = {
          ...n.payload.reward,
          user: n.payload.user,
          type: n.payload.type
        }
      },
      clearReward: t => {
        t.id = null, t.rewardUserId = null, t.info = null
      },
      addReward: (t, n) => {
        t.active = n.payload
      },
      removeReward: t => {
        t.active = null
      },
      clearInventoryList: t => {
        mi.removeAll(t.list)
      }
    },
    extraReducers: t => {
      t.addCase(Os.pending, n => {
        n.getListStatus = p.pending
      }).addCase(Os.fulfilled, (n, s) => {
        n.list = s.payload, n.getListStatus = p.fulfilled
      }).addCase(Os.rejected, n => {
        n.getListStatus = p.rejected
      }).addCase(Ra.pending, n => {
        n.getRewardStatus = p.pending
      }).addCase(Ra.fulfilled, (n, s) => {
        n.getRewardStatus = p.fulfilled
      }).addCase(Ra.rejected, n => {
        n.getRewardStatus = p.rejected
      })
    }
  }),
  {
    setReward: Q_,
    clearReward: O_,
    addReward: AU,
    removeReward: pU,
    clearInventoryList: F_,
    showRewardPopup: z_,
    hideRewardPopup: G_
  } = Rr.actions,
  L_ = {
    getListByUserId: Os
  },
  H_ = Rr.reducer,
  gn = ln();
gn.startListening({
  matcher: ve(at.getMyTemplate.fulfilled),
  effect: (t, n) => {
    const s = n.getState();
    if (s.tournament.myTemplate) {
      const a = s.tournament.myTemplate;
      b.mainImage.tournamentTemplates.deleteTemplate(a.id), b.mainImage.tournamentTemplates.add(a)
    }
  }
});
gn.startListening({
  matcher: ve(at.getSelectedTemplate.fulfilled, Ar),
  effect: (t, n) => {
    const s = n.getState();
    if (s.tournament.selectedTemplate) {
      const a = s.tournament.selectedTemplate;
      b.mainImage.tournamentTemplates.deleteTemplate(a.id), b.mainImage.tournamentTemplates.add(a)
    }
  }
});
gn.startListening({
  matcher: ve(eg),
  effect: t => {
    const n = t.payload;
    b.mainImage.tournamentTemplates.hide(), b.mainImage.tournamentTemplates.show(n)
  }
});
gn.startListening({
  matcher: ve(tg),
  effect: () => {
    b.mainImage.tournamentTemplates.hide()
  }
});
gn.startListening({
  matcher: ve(ur),
  effect: t => {
    b.mainImage.tournamentTemplates.changeTemplateCoords(t.payload)
  }
});
const Xn = vc({
    reducer: {
      auth: u_,
      daily: M_,
      main: yg,
      color: hl,
      device: hd,
      mining: rm,
      layout: h_,
      canvas: dh,
      ratings: f_,
      user: lu,
      squad: w_,
      progress: Ah,
      history: v_,
      shop: Pl,
      toast: pu,
      template: E_,
      tournament: og,
      reward: H_
    },
    devTools: !1,
    middleware: t => [Wn.middleware, Ir.middleware, pa.middleware, Dt.middleware, Pr.middleware, gn.middleware, ...t()]
  }),
  Fs = [],
  q_ = async ({
    dispatch: t,
    flyCoords: n,
    paintCoords: s,
    activeColor: a
  }) => {
    const i = b.mainImage.tournamentTemplates.getRepaintRewardType({
      coords: s,
      repaintColor: a
    });
    await t(_g({
      flyCoords: n,
      repaintRewardType: i
    })), b.mainImage.paintPixel({
      id: _t(s),
      color: Ot(a)
    }), b.mainImage.updateTexture(), await t(Al(a)), await t(ch(s)), await t(im());
    try {
      const o = new TextEncoder().encode(JSON.stringify({
          type: 0,
          pixelId: _t(s),
          color: a
        })),
        r = await Ke.rpc("rеpаintTournаment", o);
      Fs.push(r);
      const l = await r,
        d = JSON.parse(new TextDecoder().decode(new Uint8Array(l.data)));
      console.log(d), d && d.balance && (t(Go(d.balance)), d.reward_user && (b.mainImage.reward.add(s), t(Q_({
        rewardId: d.reward_user.reward_id,
        rewardUserId: d.reward_user.id,
        reward: d.reward,
        type: d.reward_type,
        user: d.reward_user
      }))))
    } catch (o) {
      o.code && o.code === 5e3 && t(xe.info())
    }
  }, Y_ = ({
    history: t,
    dispatch: n,
    paintCoords: s
  }) => {
    n(ma()), t && t.push("/energy-over"), n(Gt(s)), b.mainImage.selectedPixel.draw(s)
  }, Mr = async ({
    history: t,
    charges: n,
    dispatch: s,
    flyCoords: a,
    paintCoords: i,
    pixelInfo: o,
    user: r,
    activeColor: l,
    state: d
  }) => {
    let m = !1;
    if (n <= 0)
      if (d && d.main.fastEnergy) {
        if (Fs.length > 0 && !(await Promise.allSettled(Fs)).every(f => f.status === p.fulfilled || f.status === p.rejected)) return;
        const h = await m_({
          dispatch: s,
          state: d
        });
        if (h === p.pending) return;
        Fs.length = 0, h || (m = !0)
      } else m = !0;
    if (m) {
      Y_({
        history: t,
        dispatch: s,
        paintCoords: i
      });
      return
    }
    q_({
      dispatch: s,
      flyCoords: a,
      paintCoords: i,
      activeColor: l
    })
  }, V_ = () => {
    const t = _(),
      n = te(),
      s = c(x => x.canvas.pixelInfo),
      a = c(x => x.color.active),
      i = c(x => x.user.user),
      o = c(x => x.mining.charges),
      r = c(x => x.canvas.coords),
      l = c(x => x.main.fastMode),
      d = c(x => x.main.currentFastType),
      m = c(x => x.main.fastEnergy),
      h = c(x => x.shop.available[1]),
      g = c(x => x.shop.products[1]),
      f = {
        bomb: 2,
        paintcan: 6,
        pumpkin: 7
      },
      j = c(x => x.shop.products[f[d]]);
    return e.jsxs("button", {
      className: le.button,
      onPointerUp: x => {
        if (l) {
          x.stopPropagation(), t(ma());
          return
        }
        Mr({
          dispatch: t,
          history: n,
          pixelInfo: s,
          activeColor: a,
          user: i,
          flyCoords: {
            x: x.clientX,
            y: x.clientY
          },
          paintCoords: r,
          charges: o,
          state: Xn.getState()
        })
      },
      children: [e.jsx(Dg, {}), e.jsx("span", {
        className: le.button_text,
        children: o === 0 ? h > 0 && m ? e.jsxs("div", {
          className: le.inner_wrapper_button,
          style: {
            gap: "8px"
          },
          children: [e.jsx("span", {
            children: "Use"
          }), e.jsxs("div", {
            className: le.inner_wrapper_button,
            style: {
              gap: "3px"
            },
            children: [e.jsx("img", {
              alt: "img",
              className: le.image,
              src: g.image_url
            }), e.jsx("span", {
              children: g.name
            })]
          })]
        }) : "No energy" : l ? e.jsxs("span", {
          className: le.flash_mode_button_text,
          children: ["Fast mode ", e.jsx(I, {
            size: 12,
            children: ""
          })]
        }) : d ? e.jsxs("div", {
          className: le.inner_wrapper_button,
          style: {
            gap: "8px"
          },
          children: [e.jsx("span", {
            children: "Fast mode"
          }), e.jsxs("div", {
            className: le.inner_wrapper_button,
            style: {
              gap: "5px"
            },
            children: [e.jsx("img", {
              alt: "img",
              className: le.image,
              src: j.image_url
            }), e.jsx("span", {
              children: j.name
            })]
          })]
        }) : "Paint"
      })]
    })
  };
class W_ {
  constructor({
    app: n,
    viewport: s,
    store: a
  }) {
    this.app = n, this.pixiViewport = s.viewport, this.store = a, this.sprite = null
  }
  show() {
    const s = this.store.getState().user.user;
    let a = PIXI.Texture.from(s.squad.logo);
    a.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST, this.sprite = new PIXI.Sprite(a), this.sprite.interactive = !1, this.sprite.zIndex = 5, this.sprite.alpha = 1, this.sprite.width = 1, this.sprite.height = 1, this.sprite.x = 1, this.sprite.y = 1, this.pixiViewport.addChild(this.sprite)
  }
  hide() {
    this.sprite !== null && (this.sprite.destroy(), this.sprite = null)
  }
}
class X_ {
  constructor({
    app: n,
    viewport: s,
    store: a,
    mainImage: i
  }) {
    Jn(this, "isCoordsInExtraRewardZone", ({
      coords: n,
      x1: s,
      y1: a,
      imageSize: i
    }) => {
      const {
        x: o,
        y: r
      } = n, l = s + i, d = a + i;
      return o >= s && o < l && r >= a && r < d
    });
    this.app = n, this.pixiViewport = s.viewport, this.store = a, this.mainImage = i, this.referredTemplate = null, this.items = [], this.opacity = 70, this.init().then(() => {
      this.validateColors()
    })
  }
  async init() {
    for (let n = 0; n < this.items.length; n++) {
      const s = this.items[n],
        a = await this.mainImage.loadImage(s.url);
      s.imageData = this.mainImage.getImageData(a, s.imageSize, s.imageSize), this.createTexture(s), this.createSprite(s)
    }
  }
  async add(n) {
    const s = {
        ...n
      },
      a = await this.mainImage.loadImage(s.url);
    return s.imageData = this.mainImage.getImageData(a, s.imageSize, s.imageSize), this.createTexture(s), this.createSprite(s), this.items.push(s), Promise.resolve()
  }
  deleteTemplate(n) {
    this.items = this.items.filter(s => (s.id === n && this.pixiViewport.removeChild(s.sprite), s.id !== n))
  }
  createTexture(n) {
    n.texture = new PIXI.Texture.fromBuffer(n.imageData, n.imageSize, n.imageSize), n.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST
  }
  createSprite(n) {
    n.sprite = new PIXI.Sprite(n.texture), n.sprite.interactive = !1, n.sprite.zIndex = 5, n.sprite.alpha = this.opacity / 100, n.sprite.visible = !1, n.sprite.width = n.imageSize, n.sprite.height = n.imageSize, n.sprite.x = n.x, n.sprite.y = n.y, this.pixiViewport.addChild(n.sprite)
  }
  isExtraRepaintReward({
    coords: n,
    repaintColor: s
  }) {
    for (let a = 0; a < this.items.length; a++) {
      const i = this.items[a];
      if (i.type === Re.my || !this.isCoordsInExtraRewardZone({
          coords: n,
          x1: i.x,
          y1: i.y,
          imageSize: i.imageSize
        })) continue;
      const o = On({
          x: n.x - i.x,
          y: n.y - i.y,
          width: i.imageSize
        }),
        r = cn(i.imageData[o], i.imageData[o + 1], i.imageData[o + 2]),
        l = i.imageData[o + 3],
        d = this.mainImage.getPixelColor({
          coords: n
        });
      if (l !== 0 && d !== s && d !== r && s === r) return !0
    }
    return !1
  }
  show(n) {
    this.items.forEach(s => {
      s.sprite !== null && s.type === n && (s.sprite.visible = !0)
    })
  }
  hide() {
    this.items.forEach(n => {
      n.sprite !== null && (n.sprite.visible = !1)
    })
  }
  setOpacity(n) {
    this.opacity = n, this.items.forEach(s => {
      s.sprite !== null && (s.sprite.alpha = this.opacity / 100)
    })
  }
  validateColors() {
    const n = [];
    this.items.forEach((s, a) => {
      for (let i = 0; i < s.imageSize; i++) {
        i === 0 && n.push({});
        for (let o = 0; o < s.imageSize; o++) {
          const r = On({
              x: i,
              y: o,
              width: s.imageSize
            }),
            l = cn(s.imageData[r], s.imageData[r + 1], s.imageData[r + 2]);
          et.includes(l) || (n[n.length - 1][l] || (n[n.length - 1][l] = 0), n[n.length - 1][l] += 1)
        }
      }
    })
  }
}
const J_ = ({
    x: t,
    y: n
  }) => {
    let s = 0;
    const a = t - 2,
      i = n - 2;
    for (let o = 0; o < 5; o++)
      for (let r = 0; r < 5; r++) {
        const l = a + o,
          d = i + r;
        Pt({
          x: l,
          y: d
        }) && s++
      }
    return s
  },
  Z_ = async ({
    coords: t,
    dispatch: n,
    repaintReward: s,
    amount: a,
    state: i
  }) => {
    var r, l;
    if (!a && i && (a = i.shop.available[2]), !a || a === 0) {
      n(sa(10)), n(ot(2)), n(rt()), n(Ht());
      return
    }
    b.mainImage.bomb.boom(t), n(oa.useProduct({
      pixelId: _t(t),
      productId: 2
    })), n(kt(s * J_(t))), n(aa({
      product: 2,
      amount: 1
    })), (l = (r = window.Telegram.WebApp) == null ? void 0 : r.HapticFeedback) == null || l.notificationOccurred("error")
  }, K_ = () => {
    const t = _(),
      n = 2,
      s = c(Ve),
      a = c(d => d.shop.available[n]);
    c(d => d.main.fastMode);
    const i = c(d => d.main.currentFastType),
      r = 10 + String(a).length * 6,
      l = [S.button, S.fast_type_button];
    return i === "bomb" && l.push(S.fast_mode_button_enabled), s ? e.jsxs("button", {
      className: `${l.join(" ")} ${S.shop_button}`,
      onPointerUp: () => {
        if (i === "bomb") {
          t(Ht());
          return
        }!a || a === 0 ? (t(ot(n)), t(rt())) : t(Aa("bomb"))
      },
      children: [e.jsx("img", {
        alt: "img",
        className: S.button_image,
        src: Eo
      }), e.jsx("div", {
        className: S.available,
        style: {
          width: r
        },
        children: !a || a === 0 ? e.jsx(I, {
          children: ""
        }) : e.jsx(Vn, {
          number: a,
          fontSize: 11,
          fontWeight: 400,
          gap: 3
        })
      })]
    }) : null
  }, $_ = ({
    x: t,
    y: n
  }) => {
    let s = 0;
    const a = t - 1,
      i = n - 1;
    for (let o = 0; o < 3; o++)
      for (let r = 0; r < 3; r++) {
        const l = a + o,
          d = i + r;
        Pt({
          x: l,
          y: d
        }) && s++
      }
    return s
  }, ef = async ({
    coords: t,
    dispatch: n,
    repaintReward: s,
    activeColor: a,
    amount: i,
    state: o
  }) => {
    var l, d;
    if (!i && o && (i = o.shop.available[6]), !i || i === 0) {
      n(sa(10)), n(ot(6)), n(rt()), n(Ht());
      return
    }
    b.mainImage.paintSquare({
      x: t.x - 1,
      y: t.y - 1,
      size: 3,
      colors: Array.from(Array(3 * 3), () => a)
    }), n(oa.useProduct({
      pixelId: _t(t),
      productId: 6,
      color: a
    })), n(kt(s * $_(t))), n(aa({
      product: 6,
      amount: 1
    })), (d = (l = window.Telegram.WebApp) == null ? void 0 : l.HapticFeedback) == null || d.notificationOccurred("error")
  }, tf = () => {
    const t = _(),
      n = 6,
      s = c(Ve),
      a = c(d => d.shop.available[n]);
    c(d => d.main.fastMode);
    const i = c(d => d.main.currentFastType),
      r = 10 + String(a).length * 6,
      l = [S.button, S.fast_type_button];
    return i === "paintcan" && l.push(S.fast_mode_button_enabled), s ? e.jsxs("button", {
      className: `${l.join(" ")} ${S.shop_button}`,
      onPointerUp: () => {
        if (i === "paintcan") {
          t(Ht());
          return
        }!a || a === 0 ? (t(ot(n)), t(rt())) : t(Aa("paintcan"))
      },
      children: [e.jsx("img", {
        alt: "img",
        className: S.button_image,
        src: ko
      }), e.jsx("div", {
        className: S.available,
        style: {
          width: r
        },
        children: !a || a === 0 ? e.jsx(I, {
          children: ""
        }) : e.jsx(Vn, {
          number: a,
          fontSize: 11,
          fontWeight: 400,
          gap: 3
        })
      })]
    }) : null
  }, nf = "data:image/png;base64,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", sf = "data:image/png;base64,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", af = "data:image/png;base64,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", of = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABRlJREFUeJztnL9uFDEQxr9D8AKhSMdzXLqLQpXykGhQJMqDhwjiHiKkRDrRICVlKlDScc9Bl4K8AMVSJN7Mbmyv7bXHO8f8muT29uxZf57x+M8doCiKoiiKoiiKoiiKoiiKoiiKoiiMzGobkIGm91r0M8k0frNqRTg9vuu8tb7ae3xxci7u+cQZjM2q6YvgYn21J04UUcbGiGGQJsqz2gZEEC0G0Ia0/jgzWSQJgs9/f7f/r6/2uuOF4zr9jASe1zYgFeMtfVFSvGhKiImtAJrTP28B3Pf6Ty9eeW+m96xffgeEPKuokAU8esTnv7+t4Yhet4W0qSM2ZBmkjRFDiBLE9PihcGX7jBTEhSwgrJGlCWEQMdARGmxWnQvepRMAODkHBD2nSA+hUAGkegVF1BjiYheEMIj0kNPjO+8EcOj9KSPJQxpsVk8a2jeGnB7fYb1ZASfnDYSMIyI9ZJcR0Wtgya4Mg1mWQUi2JSlkWdmlAR0Q0GPg8I7rr+cAgMWb7vWbi/u/h+8tHiXAS6ZknHMT6fqo+7ovggsjjuHwp/f2SbTFFEJWA4Q1er+BQzFlNaRMi1imQ1QVpmblwUIYbi7CvSP0Mx4vqtI2tdLe5voIaM66jRXb2Dno19+ctZ2kyj58jV7QNGcVak1g9vH+D2udnJVBkBgGblE4BRkUox/PS4Ww2Ho4ReESxCtGaPaUKlCO8rlEqS4IbazFGwDLefeGy+3TeyLIVf4uCdJcH7kf1DTG4tvcfoO57912lBGh5fvsfEiJi7YZiyA272iFsPVayv6vx8+8TjN38YNksLcH7huJt9iE4fCS0vOQpj/xA3ox3SXG/q+OGNnwlUtssY07HPOTUoI0GGN4CSHy1jHu+TyUcL/g9LYTrmgD3R4Al2FjRnKqvJw/rRMYDFuUEiGs7uIiDVdfmOeol1t02tLYspwDF+MSiDEUFyQoZQ30Bl/Z9FrSfOVy6xzPxqTdseTulsFLI6FhYZAPvVA+0tNi7codtqoJkoW+GAbG8JdbELmnTnxzF997EydnV+JfyXU1fOKYlEpOL5nCFm46zA3PAXvISt0Xr0ENW+WOITtKFUEkeEktG9kmhkN5fbZ5SSSu5f/FsrvkT+1LnnwGkFOQ2exjeqZlHpBLmNB9GNfnDLnnIexZlllQvHm3tTa66YG2kJFzCzdECFd9JTtLnZk63Xew7NS1IcE1E8+Bb6PKEJBW78RMncbmxbf50/g9tIs4lgAxbOMHB9OZGNoEuD3Iv1kV4hk9OBON4iHLlZG012M8IVGckL146qVmfKO2u55D3GqvN2tKDUuhwlh2AV20gkQux4gTBBjI25dz7+ZQFizl+44VWRMMByLTXm8MNo1VWpRAm4wnGSG4J6psWZY3ZFBRJrCCW3NpJ7eHOGfrQT3NcsyzKLQ+Ulet7dvshT0QdwzIBkfoehDAZkvNY0ClNp9bUXxpryHqLFUOHJ43ZBN9llLHSqtNDE2eD0SsnhYMYZxHfXyUGtRnDz0IQNggWXMgjbWv5KHrkudlOgeth9JMClcPjamb3lvyawmlDzANilJrYyrGDi4xihZMsH4lwUXMd8q5y9yVL+wAkaJQcntOqqgcYrBUQEgWBRgvzJikgUsMgHeDajbw4y+ThFMM1ooIozyFE24x2CsjtJvlNnEOf9qv58RVR8+L2dtnCr8RZTvJMHNcjxbKEyZddfy3P8+USuxRFInPqCiKoiiKoiiKoiiKoiiT5x+58vqZVePedgAAAABJRU5ErkJggg==", rf = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAA7JJREFUeJztm8tx6jAUhn/fuWkgWZBV6iBtsODWkBQBQ4pIaggL2oA6WCULV8BCd2ELhCzbMhifI/x/M5kMfunx+zx0bAOEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghZKRk0h24lkU+N+7vj6d10mP6K92BS7FCrA778x3l9lSFSbLTi3xuKkJ4LB9ekhTlj3QHurLI52b1+A2gmHQfu231+F1xZymQ3B0EwBhjgN9XAFVRjpYz2SLLMiCxMSbV2RJjfqZRB2bPOyCxMSbnsizLhxdgsq3umGyDriwVks2yjoRESZikzNnBLPI5gGraa63j42kNJDi+ZF2WxXVPKbsqS/ouC/chhCV5C7k3UrQQs8jnWB32WD68BGPI6rAH8jk+ntYGicURWogyUrp7DADY7AoAVt9rYOYtEjc7LP+djimzLSCRsWruZKUOZT69Db4Yls3u7Gf2HjxK5dg1xhADeJMfsIIoyvPMrHpe9n4UXJUw2mKIMZ8tYrRtjzzHaUdVRViTIEXR0J3Mpkm/FO/6ZaFSjSgazPU4GbFV3L4pq8LHnyKd0NA46krpbTEi1nIuuI50yV6TyypwJ3E2Bd5M8edOXkxQ7+s6AyNpIUU25VuInaS3Grf+1bHLbdfxrMRxXyJzI2UhRTYVEsPezXU07etyrLUWz0rMz1Q0+9LnsoZ84KTw4ZY+QUaOhJ8sMis/6AKnO7Z8o6SVuqAcm4X57Xl9ksi45AQJYWNIF3y3EytmRJtjECT6FZ4o6mJAV1EaGFoUxhBlDClIv9YxEEPXujSW3+Pp0TVpQY/LkixjKCqhyFmInYS2p359l+CDpZmsuv8Wpf8IhrSQzCtzNzObBksbV7HZnYqMMcdi+CxLTwxpesrni3Jp+b1OCCFrCKFrHTLZhquwt645NSQHXIfEupRboCC46w3qfVjF72v9JFvRXetQ4LrkLCQ0eDs5fa4vrMX5VveVFX9WMAXWAUgH9TpRJtvT/1u3J5zm+sjHkNCd6Ypyh6vxJoa2kCx73p1nWk13ZtfnI224FhdxzTGU34FLiox9uS43yEe4qHEJEpqYSxeAXWlqx+nXeATp+iJ1X8LEXPv8hWxgBIIATaIMlfW0WKiEGCINOpjK9x4hmlLVG50rJYZYow5xogDXW0ykiJJiiDbsEC8K0F2YDitwaTHEG3c4fZLQRZwe8D53E58P8Q4EiCr1tglX811h8NDoIwdAVWc60iZcymMjhBBCCCGEEEIIIYQQQgghhBBCiMd/ML9eI+BDYUAAAAAASUVORK5CYII=", cf = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAActJREFUeJzt2kFugzAQheFp1UXEtidjg3IaInqZRt3kZGyT7NyVU2NwcAQVfuj/pEitSCSHp7E9DmYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOR723oAS7V948L/vz5/5L+TrLZvnLt9u1AckJr3rQew2OH49/f9vN04VqIfSCgMR5R+IDuoitDH1gNY6nS9WLf1IFakXyE7I18hXVUP147rZbvBrEAyEL+17ap6dK2rarPenBk9yb9r+8aNeo+oD4l7EvW+pFht38wG8CyYrce/K48w4kBu3+OAEtVDKCsZTFFT1eFDCV+JgBRCKXrb2/aNG+2i5sTvPRwfzWNX1aPDSGQaTVPP1o5UdSSulxyKxrZ3rkJyrwscsxQ9Za3tJNA07j+QoCqmGsnSaATib+rUlHM/D18xsSN5jTXEm7q5uTf8fpYIRyOQV29kWCn+swJhmKlNWbkOR6mdVUgjkKC5e/lzIpUhYdAcpo5O5og9lVJ+hYS7J18pudUSv09g+ir+B5zHeVYstUY8eSzodL0U/6NV0YPzkqF4Gc9mKYRhJhKI2fiR0bmuOz4mUQjDTCiQ2NzirBIAAAAAAAAAAAAAAAAAAAAAAADAQr/gsiaUUMmhEAAAAABJRU5ErkJggg==", lf = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAQlJREFUeJzt2E1ug0AMBlCn6iK9YXpCckOymy76IxipKaSRGFvvSSxgZfjwGCYCAAAAAAAAAAAAAAAAAAAAAEo6HV3Af7V5asvz09t76nt6ObqApzhfPo8CagRSiEAGI5DBpB2AP8O8nx23a0TkHe6piu6/qO4O8q9gInKFk6bQNk9tFcDigf95/XZNFcrw2jy1leX5PK2P3/TdNaicQ33ZERuXLZ7k7lu/V4IuydkhheULpPgylC+Q86V0KK9HF/CQrYO8yIbjcB4e7N3n8dH3sUW+JSui9JKVxurHb2/HJOmOiERbJxE79rK6Dsq0bZKm0G973/ZMYQAAAAAAAAAAAAAAAAAAMIgPNT9HzAKUgvAAAAAASUVORK5CYII=", df = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAU1JREFUeJzt2MFOwkAQBuCtJ/XtvBR9mRKfptx8snK03NaDQCoWQii6TPm+hAAlaYYd/p2WlAAAAAAAAAAAAAAAAAAAAAAg5Zxz7ttcug628s5BU/JAqdouVZUuYIpzFryqqlDf8aF0AfwUtiERt6NzhIpzStMbcetbWIiERB3QlwjRkJ2pTVmuF9cq5b7lawhyvxIqIRfbrNLy86N0FfOR+/ZuEhLG2ALPsSlhtqyrDOTH1+nn+GNhGpJSSmmz+vlMOblvx7epU8cHStc/O0cX/tRMGRwrXf/sNF2dc9/mpqv3j8MmNF39qyel656tfUIOkzB4P9aQpqtDNSXWUE/p+JXSZpXen18M/P82loBTqYlw7zEULyHDBGxfH/4tUj29Vcv14vvzAPce4Y398qMmYhbGFn038EvUwwiXuAAAAAAAAAAAAAAAAAC37gv48l2z+Bjx4gAAAABJRU5ErkJggg==", uf = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAmpJREFUeJzt2jGPokAUwPHH5YqNpfuBtqcz2eA223tfAgOf4noLvY2Jnb0fCEq1mysUFoaBA8Tjkfx/iQmMkgzz5g3M2xUBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4n8IkMLJZmbH78Qw/xu5AX6GfSjEoYRIYc9maMAkqbZlxetqNN3YH+igOeiaaLURePhqv8zxP/f3+HLsDj2oTCBERue6e35kBTCYgDy05152sz4cBe/M86lM4Yy5b0yoTbPfMcAUkfv1Sd/+Teaj3muETWaaKVAfEGFN+c+o6wC8f+SeaLUpfxcf5UN0clLqULSo9N+7PgdYPcYd1usyPNS5XIsozpMQxy7vKrteaHSKKA+Laa/TNjMr1n79VZoc69s66dHwXJkGlrZPLdhI7dhVcAbDbwiQwlcB1NPZ9TkbtIF+235+GYLXlXA5R1bgcNQWrK5at9uoGuFewGmjNEnVvWd7+VN0AttkQXnedNo6PvkI/i8ri4vp8kMg6F5HbgNuvvnabKyiua5RS+T6eLSdNs7hY24rmf77b02Xp3FXp1bpLF1GaIZm8VFLXfp/5xZKI67dToi8gm5URSfNTb3/Kj0M/dV1RCpq3P0ksv0RExLy/STRb5EHRnBkZdQGxBz300/oscbSF/u3YWa/arIz2som6gPRVqQT7y8ktVyJKH+pFdZs4b3/Ksyk+zsW8v92+yAJS85dC7cuWun2IrWmWx8d5dWmy9iPx65enudxuUz1bMnaWrM+H8kzfrEyeIU2/wzCKxcW6kkdeAf7H7zAA138lAgAAAAAAAAAAAAAAAAAAAAAAQERE/gL4iAFGuCkFvAAAAABJRU5ErkJggg==", mf = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAtJJREFUeJzt2jFv2kAYxvHnqg6UMflA2dmQIkqG7PRLGMGnyE4laITElp0PBGNguw5wrn0QG1OUe93+fxMIA+Yev/faZyQAAAAAAAAAAAAAAAAAAAAAAAAAAACD/G7uU+8DCvxR5Ta7uSe4TxIC+XDAZyNfF5rfzWu3wYV8JH492wwqB7sYBoHcQBxIlWwz8HEAJUxrf69JIHVKHzwbEc41bpZGqI7ZyGebAWFco3L6aShMZ4TxF26Whvd5GOdCTv07W+GW1VEXVOrfWuRSfbGVI9M5l2wMzvmS7Jv3i2RfbWofIkmPjtRVYq06pJQVouOAGDxKUzJxhCSrlP1C7tuTiTEIklZILkWV7BdSZ1i/ePnfOV45hyV0ExKGk75Cnl+cJI3fV6n35CDxNJY+EEnTt7s/T1I1+f1CzjmXuqeYamilqaIzzOf5WpduF79HoqlfrMkgh/AashaGZCmQz74/0bSiPomdQFRu7Fc1+f3C5HJIE19T70CQ9bb54zyMJj2k6rl0+jlGgzMRSGjmcVWM31eaXPIBH4VWHHSjAcRMTVnBpNuXdDgdrp26qiqoM6x83eLdQxNnGXGFTLr9yiDCdYt/fLj6dDcYv680vX81MQ6ShUBmI1/sH9JhwP3jw0kok26/HEBdj4mnqYqpzcopsIkeUhSOfrdcyz9GlRIP6EcXj/vF+QorVEO2Gfg84M5Q0tMtf8bVkgeS9bblpZPj2pYkjXtbP+n25ZZrxVWU6wzlfv44TF/hfWfCiKfB6f2rm+pV2WZlqo+YKNM6oflO7n6dvrhfyC3Xh+0KoU3f7pT1tnkQlvpElVbspBRNMQXj7XdJ0QKlCg3fUH/455zcLwn3UM7dR2npn+KS95AmiheK+TSUr4GtyxsXelGbtG6n/W7u3XJdHvDo1Lkt/eIck1fqteKj//nFxT0EFvDPdgAAAAAAAAAAAAAAAAAAALTXb7LTHFrMPO3DAAAAAElFTkSuQmCC", Af = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABLlJREFUeJztnLFu2zAQhk9Nh9Sj+jxGd28GgiAF0tFBtsxZLFhv0KlBMrpA0iCFN++FnycenSwFO1hUKIoUaVni0en/AQEMWZSJ+3nk8XgKEQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIDDYvp8Krj7ABTEy73YSZT5paD55UGL+JG7Ay5mgzHRM4n882Piunc6WhMRUd57r/rjA3cHfJgNxu7p6+JIGD9bmD6fCvFyL8TLfVQedRCCEHmIMpyYP2tIIWaDcZfd64zopywV6/RVeES+TI3tps+n0Qqg45yXOdnVkNlmQURvwkxHa3K1zzYL8lmfQhFNR2z0Pccnn77Wve32L5td4p6ydg1hj8/M118fjJelRxHRVojhhOjbDesgjVoQGcY6sQmhfm8QJV+mZaCQL1Oi1d3OfeyaaAXxWj9cQuwK41QliVIQpxgdCTEdrasBgGG9qq0xPcM+InR6E8OyjjTBEYHFIYiyeIvzH9XvVEPu4xktBAntHUQBpyxn+GoztmVBfq8ES51UQkwdn5Ef2Dsa+9sjwQRh2w239C6u/gZNLlpHXZPRGKYrLu8gCixI/vkx8Rbl9aF6rY0wB7j2sLjlXtlX37VEF8PUzpFS4Zi22MLevVPiPnkrH/E0UbLN4i1DLNu/PgTbk4QVRCbwCnzS461p4UmlGDt6U5dChT0xvP2b6Am8XhbQFiFyxTN0DGJkmwUln74mXXtN+CNcRRSZR+KMaow0BBN9CSHhOVMP5SkuFGPXjn+1KK9vISR8RQ4GUXRqIh2fvf3tgx5S236PwgkhYU8u6pUkch43Rjs6PhGSo41sR1Q9iyf6z8Jeia20x2lYIqtxdy2MmKW/yuclT39Yj3Hjr8uy7bY72IXXxDs+I3HyZe/n7gOvIJYKQ+MCq352iOETIFTuiSjFwu4huvFtxW4+Qqjts83CukgbBVOfz1iwzXumrpV8lmKs7ihrsYvfGjo1XGtuo/6O6Rkh4RPEoyBaGtNHmGyzKEt58hURDSfeZUS6aNPRmq2Cnk8QxTvyZVoznnrNNcq3nqWN6tUd5bT9DTVnFl1WQIMnvNOSjERK7K9MWz6jvHK/RGvXVOtrEyhfpizhbzSCEFXrpJzYdvnDN69QUZ/blGVWBeIQhUcQUxRTeIQL2ygvS0EbBKl5oeV5tecGFCV82GtbzIcTZ21taTwtnzUbjBs9osnr8mVKydMfYzhcPjdgGBzeQ0zTlS5EsQbohhQnX+qpFGVvklyde3lZDdUDCuPrnhOqaC58lCUNpoqgFznf3lA+vxTT0Zry69/tjNyEEjDUvKcQJyeifJ6W4oSCPbnYiCoKEYnvP7fXlbNuleTqfPvBJqAcBKoYzO+D6ETVGSNSlGXamPjLNotSOCKqiqIJQcQX1rqIrkNWCmFMEVEZDRGZA4NCiNlgzBI57UKU74cY+XaTkOHsRBpYjvzZyU9j82yzKM464nnB00TUnatReImKvqfQKb+P1CN0DsdDDFSmnosjka8sN0bwqpovB9NRSfmS5vXvuqFNe5wD8QwJ+wFVG4xiEHlVsoCu8ThHoYsj8R7+VdP7QooCAAAAAAAAAAAAAAAAAAAAAAAAAAC65x9TXHckk+SwIwAAAABJRU5ErkJggg==", pf = "data:image/png;base64,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", hf = "data:image/png;base64,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", gf = "data:image/png;base64,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", _f = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAClRJREFUeJztXT1r40gYfnQ+pVhwqjSu3BiMF+PCpAh4DfoZgWVLh8BW90uuCoR1uRzkZwh8ARcmhTEOBjeu3GyVQAoboyvsdzwazUgjaWTJt3ogbOzoYzTPvN/vaIESJUqUKFGiRIkSJUqUKFGiRIkSJUqUKFGiRAkFft57+Hnv5T2MtPgj7wEYx13lrEn5M5e70kr+9mgZu+ZoaOxSeSJfCcliNf/YmSM5B+RKiDNpwem2jZDiTFpwJi0Tl8oV+aisb4/WXjrMTqD7Mjtr6QDyVln4f0yiSeRGiGn1UhJrAKbsR6a4q3gsxjmBS52ryir6qrZv4CfgBB5cPkb9TNDbtIEJ8Dx9xLZTOck9czfq54Depn2y+OZ/RYjTbXu1y6pXu6wa1fWnVK3F0+F3FQ/9wfEzpURCVmjtsuo1G3X2ebFcYf32nurZyOE4tZ0rlg0RyQBw/Dz00qgNnjQdwvJyOIolIVHp89FQKimkongpoQkVpYdgQoqyQLEGpFPPiJkhVsU67vXrUfoEop1u28uLMHNG/a6SPnDSSaGr7sEHcBFB3PPFDD7VKKpJ7KWNnIToQR1gIIAslpelYyMkk6e0PT/vPff6NXC4NKY4TGJiD81QFG/OqJvw0zUfiiLo7figcmUkEfoDuBj6cmf2dIct/NK4/y4ZnG7bc/Gq5RFGQV9CeHVgKK/jdNse6Xj7BsFVrgCtcKfb9gLpDRn6g72aOqC3acOe7thne7o7kou9wY8LZ9LaE5FyYepLyGioNIImsO1U/PcIGwcdP9E/b9up4Hk6w9W8CgC4QhWY7//WbNSBLjz3ZWaRIV+/zJTXksGUmxzvIpxUkAow5q/zEqeaXM7o29Mdeps2AjZCdi53Xu3pE5qNOhbLFUR3OMmzON22ZzJmiWdDSCoMGTCKEdyXmWVPd0djq+Ft9TZtAAd1wxvpiHMDJPDuL74EnytCG5gOIJN5WYLPnuQSfMDmdNueqNfDYE93WCxXWCxXAXsQdV4AUSry4K3JFmEW9ZzU7MYVWVnkzJ9v38ALS3WTqiLDy1+LDLfsfDqPsFiusL79iCaEh8m2JQWMuL2p9SjFEaMhepPWvgZxMfNNLE/EAkcviPeIrrA32M1N3Xe+SEaRcfLUgCjmfh0O2A+PPgkQ4VvVo318oeumBiTzry9xhg774dHnHmeBbLK9CVLohG2ngsVT0AMCDtIgpDxcDFFbfmJfNRv1AMlEXAA6brYwNhs7L0tSzBMSlkLvw3NH0VFzKMR4SECAjMP9xWg9Nk7UqmqWaRkZKoyGLCYQ9f3VvBqQEFJL69sP3/eksth1vt8rb2k/PPquLdopnfgHQKblXLMSEsdj6Q/wa/oIzFe+qDkKtadPvs9k4AOTK8G2UwHmnCPwWThAQwrS5Lx0EE2IzB4YWiHbTgXNTTBqphhDBfHYZqOOdef1OL6IaJ1wNa8GPLIwkPTiEh5fKyFX3kQNJZqQHzsLffhTJoe8j++4hNH788WMuauEgGHmvCmZsQeEiF2x0mWB4WK5l9AoYhgZAvi4qtmoA8uVFyBFpsoVMY1epP7t0YoU5zjqClBO2vPFbO+Oit7U9auSDCCYwdVBs1HH+vYD64evcK9fldegOCbs/krEsatImFx0Jq1gDifudjIh4QcAvz6/71doiHHlPSWZimC1Es5JIFB8o4zQueuTtPBBparsG6ayKO4SHReV6xxf30lIcbptT+puqiBIB8scU+ZWcR3ykghx9DVNjFbKRKIipc8XYU/5INh9mVksLRRyzund3lGwUudbgQTJw4etrDCI+TOdCL32/R/2eyiBIfmtJL1dxtze2mXVa07qxz5Y2WqKQJhhTkoGcJCk5UraDqSFsEV2V1H2iyXJ7xmREF6HMg9JE7Lomc/akg0wla6wb+CFBY8MnNpaP3zVOt5EOJD6ArI2TmacIyBNiWfYC8V0eMxsgm6a3kTyMbXKEtVAs1EH5ivm1wPq+sR2DMvFjLXeZN2YlmRLQbNRx6/pbJ9vi+vaJ0DqvixZRE3q62pexdW8itrTJ9jTHVM/oq+/fnu3TtolqJMo5FSWLpHbTiV5X9cBRm2IDDxheffSBqqRCk+OQC62L6EZkYBkdifhsxqdIFmNWSQkrDH6VIgqEwP+VInUJnIBohh8AsntodGJkBl4Ag0uqqaeB1TRPR+Eit6jLMUilomTPJfR9Dv5+1HHyRoU8sR2DKt2WfWaG2E8jeOvi+UK9sUxThLr/aaQ2crkjVvetkMHYXaQhyojLIuncpcQHudAAg+daH6xXGH7BsvGzouSkCT9wcApu074PFcGvcGmIJMUVj6WLDLlhqCEdjH7PYaKhKPJKptJ8JKiMzZZ0SypdAA5bvrkq2zr61etMvGpdsau394t3e53kUD2XUJkatTDEo3UcaKso0hI8REik7wCq0JdZDJ4aawhEKOVtAvrpVVVKOOQkpRUrvXV9ALIRGXJdCrfXciQIFnHgjjVAf0BtPe0y+7fHwB9eKES2v8S/16ayGTTJ2/U3OtXrB++Hn9uP9Bs1PekhSX5JH/TSXkA0CM6qktG2Iag3HrQHwTfGpQCmUjI+u3dOhpqoVzKtXXGbiM1hTidICQFE86jitkTHAfZGEDN2rozaSkjX6qX+CJ+oY00yv6I2ySYyonZ9c6PV1qAK6LKYiKtu/r6A1YzIWkhUKbV6bY9Um/NRj0YEatU3uF70+4xqeKreVVZ20mLVCpLGhckEGXqHsR8r+62AHAZ1MvS1k8h/Q0o6u8/7z0XgPP3v8lUTn8APB07UejlZgDknZwJkd+bHLjVTd2D64evocaWgi+xw3DbqbAfHSTaljAaMkld337A/etLrGYOXaQixH2ZWdQAxr5Mu4/isHLDot24mz1pXLXv/xwbuUdD/bFyx/kC2UOLa37bokPA3pTwY2cBw0g74kxarN7QnAAuNRFoTtJiuUKv0cbzVK9F05m0fHsTGfj7JeglM43UzPLSQZPhixcUD6lTPxBfOqaCbGuA73pCpjnMu1OBHA1pOdegl2VMQrZjWMzIj2fHmoEswDvsM1eVe3moulrCzvFB9PpYHOSXrjDw9fXeRiKV0aPQRipCwiLU7RgWxjtlvVonzc03RQDykq94nlamliNl8XQk9dfnd9BY+Y7JXrft8eqOPCz3ZWapyEiamTYmIfYNPHccvDnT6ePDA3J/05k8vjki6m/0mg7fuCgbINkVLEoYa2rgttetsSdJVUnkUyrPF7P8Oxd5iBLT27SNeSA8eTw5srYiKRQGOqpkC+xXeWB/veK57Bt42zGsQlUMaZW4iPeKI13EKQBtx8EaOBA/wlZNsPhaEPo3qaScdTEnKaLsEhCv0U1lS5OQ8lsSAoS/WzFJCVZGStav4TgZsvxvLLK4Nn9N+wYe/Zi+T4kcUFiREjdM5jmWU6JQ734PvP7VEM6J3EIRQlAFmb8DCvXQoiHM0kvJShrTolCvGhcnx7Sncg7eT6EIAU6zYotMSqHE9RQ4pVpMgsJJSInfFOdgT0qUKFGi4PgPVvigzoLcYp8AAAAASUVORK5CYII=", ff = "data:image/png;base64,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", xf = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABRVJREFUeJztnL1uIjEQx2ejkNc4gURHRRUpDS9AneqaPNg1V12dF6CJREVFhwS61wjFXnNGE2N7Z/yx683+f1IKYGFtz4znw7MhAgAAAAAAAAAgZvZM7dBjAAAAAZv1qg29BgCACBAJjYCx7vdjHTcYA9AuAL4zCE4AAAAAAAAIgqQYAJvYRLKx3zDmtTsc7z7rk8161S6W89vr8+lCRMOPqzSdk9usV23uRZg9U3vd++9tC4NzPl1GJ5Su+XKqnNjb6zZo7mMUipQH3wc1F9Nc1jN7prbmMUvxCoTT90SNvwjBQ0k+vrELpVqz79q2iIh+/XlviO6FIN2vDdxnDb0diiykBKEtRppIbdardrNefXGYKcIgcm+HfTKIQEJbTCjCCnHdU2OEkZoZD5lZP5b8cb7YGs09ny6dmhryM9otR+Kz+qKYhdia7xOOT1ChRXJ9FhtluYQ3pA8pYiGShZFYjERzfYunScZqymkGc+ouZs8UXRXgPsS89t2j5pwl2kJK1JrMIu4Ox4Y71o+n45frXj5XyfeqlVtUoplcVyR0Pl3uFpFrrPm+JOb3abJtATXlEimoB60JS10L47Isc42r0iwViJ1ISoUiqW5LFDCXAjwQ6coNmhxhsZxHxfTmO5px8QAgJYx1jbdrzovlnN5et21K/mK++0ikz25TyRX329rNf1eqsfZ1LouWjmexnNPucOy+MDAOlVOP1QDuo2yH7RqU4bqnxmUlLgXKsWWk1sRyoLqhpODHidFYF7EZf+w9OD9/bFW/o/UntpVXlYf4MDnGEBr7+++7+juanWR3ODZcgKotS1Jj4tdODVe4r0VlIbvDsZEsdClhDJVdn0+X21/oGi6M2LGqM/X/5tUS3YeDsYLgdSczEdf2VHLL8gUQNqUtP3qC2n1Sem1IICUxyZ/tM7RnLMZKYsdfnUD6xJeBhyKlrnmnzjWqdMJvXHqAJYktiUjzqBiSz0P4IMbWVCwpibgy793hePM3uSvPsU5d/dl3gjv/j6ejs5JNdG9hEv+YnBiazo+xWYems0Xzm3YHi3ZdimbqtQpKWzC0r3edTPr8EX9PUm0YRemkRuzFDfkjjQJMYs+34QskaTeS+EZJ4VXyW5O3EFfmLSmVSH7HRuJTijbK1YqdQ2nLIb5jX03x1UeyQDSljqHKIj5STgdLkbQw2hO2Pg6ahkLilyStUkW2LF9ylEsIrhCzptYfs/B8DaQkCYSXrK97arSd65p2T04g3s/+PKQUV23PJYiu8SVbSIrWxzzLEfp8aKHkIPuW5etM569jhCh1uCmtODnQdNW4yJqH2Af2RPd9uUTjfQ5QqhQpFpp0QOVrCeVIW0El9+OvQ77KPHtYG5KwX71ldRTRetu/fUlYn90umqZxIpkSqjsXQ5pZUii5opgYfD7QrEXOeYt9iDSkta8xJ2qclMis7wjKteW63ottLLcRCySlRvPyucrafZhTKG+v29ZVqR2qJahI2Msns9uX0WhXeJlTUFLFydW/bBALRFrJtMPc2GxcQo4FSNHyUM4Rizr0DAnF15g8pkKiKzTt8zEF9ZZlF86+vP+UZ1BDYf+HCbPwfSqUSiDcRFMd2nd5SDM32VtJQ0/f2t/nVlY6u5YqgC+b7utwLTrKStVo00VvMt2SeP7jjzORy31mo7X+SWwTMU3VOe+nuc9kuk5sK6z1Ca9JdZ30KYTYe03CQvqO4BAxAgAAAAAAAAAAAAAAwNT5BzZPhVZ/4M1WAAAAAElFTkSuQmCC", vf = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAA0xJREFUeJztnDtyIjEQhputvQhUkU00J5gLEJNzMOeOfQFOQERGFRxlNljkkuXR+9WS/i+xXXgGTf90q7slQQQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAODArvYATCzztB6O+++/n48XERFdb3fW446B7YOpYsg8H69uRflTewA6dGKI15Z5WgsOpxh/aw/Axsfn1w9PuJxPK9F/Ua63e/L3kz2zhiey9ZDn4/VLDKKfAqX2EjVMmrw0F2wFMX0yhSipDbb1nqVDI/uQZUMYLFVo+fj82tWcn9h6SCwxRpXFLT2HNJ06ykbvJQ3u1kNapQtBevEOIo9JfcQ2Rg2cjGlqYxDZCyhxfepCa5mnNfUHwnbPWFvYsF64NYCtgk38rzqYHEbTEVtlqyn01thFp8BGqDDWC9QB6MQQlBRARR1rDo/0KUZtttrCqzB0eYOac8rz8fqu3kOM4Yru3q7eY8KYZbXQUV3maZXHqeuBpeBw3Bvvrb4WYj+jIDWaazFcb/ddTg91ETpWlOZ7WRzT7ph+mNFDRK0BymEU5Hq77yBKWawh6x0S2E/uvuQqVlV87+38zzXri1To6ogc9QpR2Pzm1VxsIQ0O4XDc0+V8WlM+X6jA2pC1pXLrHmJrAV3OpzV240RsJDE20YjaF0FGrqRzVvIxsBxUDuT5g6sYRJ7rIeL31rxGHnspMUI7z0lWDNV+0uhs7e9ytU8XS7iulChydam1a1+wqdATSs1wKycSLqFrCEEEtYpbn4WzoQSpiasoQ80hNXHN7iBIQVxEYb9AtZW1tH6CypTtsfcQXQrZat1jS73ZeogwOLc2R6oen+76KEFyHf/qsbFJ5LZ8ESSI74axELiKETou1+I0WcjiasDaFNsGJE9OEENPUdu0mulwxnv3e+s1AHeCzkGMKEqpxqT2nIctixpRFB0p93j9mtRdDuhczqc111dbtIiw1/tn2l0nvgd0ekE8d+jz+i5E6TD2skYRIwXZbLXM05riJFBrpNqokaUUQH0RDgTpjOxzRO0vBGuNoushHMTAB4T4hsDURxBAAnKLIrJWbCV1JGetJYdH130AwwvCDbabHHrg/UUGRMR3Hh0aiAIAAAAAAAAAAAAAeuIfG3gINg3W6n8AAAAASUVORK5CYII=", yf = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAolJREFUeJzt3DtSwzAQgOGF4SLJTDpXPoEvkDo9B6On5gI5Qap0zMBRTAFiRPBDr5Vk5f9maEIejleP1cqOCAAAAAAAAAAAAAAAAAAAKGfou9HlMWSwdOIJSoVaDMpT6QOIsT/s5Hy5Jn/foe/G/WEnIiIf759yvlwfkn/IjMdcH6Th5fXtQaOX2AEwgcklW+S36Pl0HEXy95ImaM0nQ9+NOeeqTQ9Za1KdSHpHgFYyrqZ7CApppXeIeK5D7Pxc5Dv7ECk7xrYUDBGPgNjBeHl98w6Aeb1GCpn6/Ya+G5fe87Zh3lJPk4e+G01O7vJcl8e0+Bzr3Ovt45069ufTcTR/S/9T+96+X7DkMBITDBcm4EufsxQwJObaA9UCsoVJM+dq2uckhwxbq+uQ3MW12vkkNOa5PkHZdPndaKm0sdpDzFoDeawG5Hy5quw5IBJBCaN63giKPu9qL0HRtZhlmZNvZzEtZTSa9bVQXmlvLQcd47ZIqnHVCjzEFh8BAL+8Jmk75W1hgtcWcklqsuLiVIp8z8w2sJ3FrW0Ni3AZkIq5E09jtVBhwKK5BrKJDaqpy25qKneE+Pk+/4a2TQRk7nowl0lya6oOiOnWc/vYpYKhmVFWHZDWWr9tbmu86oDUquWGcrfmsiwWhpWJ7nolbyHeqqXsMHgOWbskH9PWKgZJJvWQ+0Xu1doIEhUQhig0z6l1T91bSM8ogCs0/ipawmf/wI9pvLHnbXJh2GIVVZsZ0veHHY05lVT3Bcb0FEonCmLWZVR7LSnvFmPIBzRk6VZUhN1ln0NqCAYNROpdaKr+SAzCaAfFZxXPOkT093PMkOiyiicgmbgGnYBkxM+UVIgEAgAAAAAAINgXIA5u7FTs1dIAAAAASUVORK5CYII=", wf = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAolJREFUeJzt3DtywjAQgOElk4vADJ0rn8AXoKbnYPSpuQAnoKLLTHIUp0iUUYgfeq0si/+bSUN4GK8eq5WNCAAAAAAAAAAAAAAAAADgqXRt07s8hgymTjxBKVCNQXld+gBi7PZbud7uyd+3a5t+t9+KiMjH+6dcb/dN8g8Z8ZLrgzSc3y4bjV5iB8AEJpdskV+j0/HQi+TvJVXQmk+6tulzzlWrHrLmpDqR9I4AtWRcVfcQLKSW3iHiuQ6x83OR7+xDZNkxtqZgiHgExA7G+e3iHQDzeo0UMvX7dW3TT73nY8N8pJ4md23Tm5zc5bkuj2nxOdax19vHO3Tsp+OhN39T/1P73r5fcMlhJCYYLkzApz5nKmBIzLUHqgVkDZNmztW0z0kOGbZm1yG5i2ul80lozHN9grLq8rtRU2ljtoeYtQbymA3I9XZX2XNAJIISRvW8ERR93tVegqJrMssyJ9/OYmrKaDTra6G80t5SDjrGY5FU46oVeIgtPgIAfnlN0nbKW8MEry3kktRkxcWhFPmZmW1gO4ub2xoW4TIgFWMnnsZqocKASWMNZBUbVEOX3ZRU7gjx833+DW2rCMjY9WAuk+TaFB0Q063H9rGXCoZmRll0QGpr/baxrfGiA1KqmhvK0xrLslgYFia66y15C/FaTWWHwXPI3CX5GDZXMUgyqYfcL/Ks5kaQqIAwRKF6Tq176N5CesYCuELjr0VL+Owf+DGNN/a8DS4Ma6yiajND+m6/pTGnkuq+wJieQulEQcy6jGqvJeXdYgz5gIYs3YqKsLvsc0gJwaCBSLkLTdUfiUEY7aD4rOJZh4j+fo4ZEl1W8QQkE9egE5CM+JmSApFAAAAAAAAAoBZf6Exu7Mzk5D8AAAAASUVORK5CYII=";
let jf = class {
  constructor({
    app: n,
    viewport: s,
    mainImage: a
  }) {
    this.app = n, this.pixiViewport = s.viewport, this.mainImage = a, this.size = 7, this.images = [nf, sf, af, of, rf, cf, lf, df, uf, mf, Af, pf, hf, gf, _f, ff, xf, vf, yf, wf], this.textureArray = [];
    for (let i = 0; i < this.images.length; i++) {
      let o = PIXI.Texture.from(this.images[i]);
      o.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST, this.textureArray.push(o)
    }
  }
  async boomWithDebounce({
    x: n,
    y: s
  }, a) {
    await kn(k(50, 500)), this.boom({
      x: n,
      y: s
    }, a)
  }
  boom({
    x: n,
    y: s
  }, a) {
    if (a) {
      const i = new PIXI.AnimatedSprite(this.textureArray);
      i.loop = !1, i.animationSpeed = .17, i.zIndex = 2, i.x = n, i.y = s, i.scale.set(.5), i.anchor.set(.5, .55), this.pixiViewport.addChild(i), i.play(), i.onComplete = () => {
        this.pixiViewport.removeChild(i)
      }
    }
  }
};
const bf = ({
    x: t,
    y: n
  }) => {
    let s = 0;
    const a = t - 3,
      i = n - 3;
    for (let o = 0; o < 7; o++)
      for (let r = 0; r < 7; r++) {
        const l = a + o,
          d = i + r;
        Pt({
          x: l,
          y: d
        }) && s++
      }
    return s
  },
  Nf = async ({
    coords: t,
    dispatch: n,
    repaintReward: s,
    amount: a,
    state: i
  }) => {
    var r, l;
    if (!a && i && (a = i.shop.available[7]), !a || a === 0) {
      n(Ht());
      return
    }
    b.mainImage.pumpkin.boom(t), n(oa.useProduct({
      pixelId: _t(t),
      productId: 7
    })), n(kt(s * bf(t))), n(aa({
      product: 7,
      amount: 1
    })), (l = (r = window.Telegram.WebApp) == null ? void 0 : r.HapticFeedback) == null || l.notificationOccurred("error")
  }, Cf = () => {
    const t = _(),
      n = 7,
      s = c(Ve),
      a = c(d => d.shop.available[n]);
    c(d => d.main.fastMode);
    const i = c(d => d.main.currentFastType),
      r = 10 + String(a).length * 6,
      l = [S.button, S.fast_type_button];
    return i === "pumpkin" && l.push(S.fast_mode_button_enabled), !s || !a || a === 0 ? null : e.jsxs("button", {
      className: `${l.join(" ")} ${S.shop_button}`,
      onPointerUp: () => {
        if (i === "pumpkin") {
          t(Ht());
          return
        }!a || a === 0 ? (t(ot(n)), t(rt())) : t(Aa("pumpkin"))
      },
      children: [e.jsx("img", {
        alt: "img",
        className: S.button_image,
        src: No
      }), e.jsx("div", {
        className: S.available,
        style: {
          width: r
        },
        children: !a || a === 0 ? e.jsx(I, {
          children: ""
        }) : e.jsx(Vn, {
          number: a,
          fontSize: 11,
          fontWeight: 400,
          gap: 3
        })
      })]
    })
  }, Ka = "/assets/particle_rays1-mrHjO6Jg.png", $a = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAB40lEQVR4nO3dQU7CUBRA0da4L2Hl1JXVidP+0Fgi7T1nSiIoNy+2vo/zuq7rRNaHt75NAHECiBNAnADiBBD3Ofr253mu/3wuYXSlbwLECSBOAHECiBNAnADiBBAngDgBxAkgTgBxAogTQJwA4gQQJ4A4AcQJIE4AcQKIE0CcAOIEECeAOAHEDU8GncV/fMbFVU5NmQBxAogTQJwA4gQQJ4C401wG7r3Uu9/uhzzvY3k8/XrOeGloAsQJIE4AcQKIE0DcJf4YtMfyvbzsa9++bpuPvfJ5/8IEiBNAnADiBBAngDgBxAkgTgBxAogTQNxpbgWPli1Gt2CftbVwctRiybsyAeIEECeAOAHECSDuEgshe5YtjjpJ/K4LHnuZAHECiBNAnADiBBAngDgBxAkgTgBxAogTQFzucOjWZtERW0VnZALECSBOAHECiJvXwYbEVT4SvW60BGMCxAkgTgBxAojL3QncuxV89V+ETYA4AcQJIE4AcQKIy10F7LW1J+BsIJcggDgBxAkgTgBxtoJ/2QomSQBxAogTQJwA4qyFB1gLZ5MA4gQQJ4A4AcQJIE4AcQKIE0CcAOIEECeAOAHECSBOAHECiBNA3PBcwFH/ZZP3ZQLECSBOAHECiBNAnADKpmn6AbwwPcfPo50AAAAAAElFTkSuQmCC";
class If {
  constructor({
    ticker: n,
    viewport: s,
    store: a
  }) {
    this.ticker = n, this.pixiViewport = s.viewport, this.viewport = s, this.store = a, this.backdrop = null, this.glow = null, this.glow2 = null, this.image = null
  }
  async add(n) {
    (this.glow || this.glow2 || this.backdrop || this.image) && this.destroy(), this.addBackdrop(), await this.addGlow(n), await this.addRewardImage(n), this.ticker.add(this.glowAnim.bind(this)), this.pixiViewport.animate({
      scale: 60,
      time: 400,
      position: {
        x: n.x + .5,
        y: n.y + .5
      },
      callbackOnComplete: () => {
        this.viewport.lock()
      }
    })
  }
  addBackdrop() {
    this.backdrop = new PIXI.Graphics, this.backdrop.beginFill(0, .8), this.backdrop.drawRect(0, 0, E.width, E.height), this.backdrop.endFill(), this.backdrop.zIndex = 20, this.backdrop.interactive = !0, setTimeout(() => {
      this.backdrop.on("pointerup", n => {
        const s = this.store.dispatch;
        s(z_()), this.viewport.unlock(), this.destroy()
      })
    }, 2e3), this.pixiViewport.addChild(this.backdrop)
  }
  async addGlow(n) {
    PIXI.Loader.shared.resources.rewardGlow || await this.loadResource("rewardGlow", Ka);
    const a = (i = 1) => {
      const o = new PIXI.Sprite(PIXI.Loader.shared.resources.rewardGlow.texture);
      return o.zIndex = 21, o.width = 10, o.height = 10, o.x = n.x + .5, o.y = n.y + .5, o.alpha = .5, o.anchor.set(.5), o
    };
    this.glow = a(), this.pixiViewport.addChild(this.glow), this.glow2 = a(-1), this.pixiViewport.addChild(this.glow2)
  }
  glowAnim(n) {
    this.glow.rotation += .05 * n, this.glow2.rotation += .05 * n * -1
  }
  async addRewardImage(n) {
    PIXI.Loader.shared.resources.tnt || await this.loadResource("tnt", $a), this.image = new PIXI.Sprite(PIXI.Loader.shared.resources.tnt.texture), this.image.zIndex = 21, this.image.width = 1, this.image.height = 1, this.image.x = n.x, this.image.y = n.y, this.pixiViewport.addChild(this.image)
  }
  async loadResource(n, s) {
    return new Promise((a, i) => {
      const o = PIXI.Loader.shared;
      o.add(n, s), o.load((r, l) => {
        a(l)
      }), o.onError.add(r => {
        i(r)
      })
    })
  }
  destroy() {
    this.glow !== null && (this.ticker.remove(this.glowAnim.bind(this)), this.glow.destroy(), this.glow = null), this.glow2 !== null && (this.ticker.remove(this.glowAnim.bind(this)), this.glow2.destroy(), this.glow2 = null), this.backdrop !== null && (this.backdrop.destroy(), this.backdrop = null), this.image !== null && (this.image.destroy(), this.image = null)
  }
}
class Pf {
  constructor({
    app: n,
    viewport: s,
    store: a,
    mainImage: i
  }) {
    Jn(this, "isCoordsInExtraRewardZone", ({
      coords: n,
      x1: s,
      y1: a,
      imageSize: i
    }) => {
      const {
        x: o,
        y: r
      } = n, l = s + i, d = a + i;
      return o >= s && o < l && r >= a && r < d
    });
    this.app = n, this.pixiViewport = s.viewport, this.store = a, this.mainImage = i, this.items = [], this.opacity = 70, this.init()
  }
  async init() {
    for (let n = 0; n < this.items.length; n++) {
      const s = this.items[n],
        a = await this.mainImage.loadImage(s.url);
      s.imageData = this.mainImage.getImageData(a, s.imageSize, s.imageSize), this.createTexture(s), this.createSprite(s)
    }
  }
  async add(n) {
    const s = {
        ...n
      },
      a = await this.mainImage.loadImage(s.url);
    return s.imageData = this.mainImage.getImageData(a, s.imageSize, s.imageSize), this.createTexture(s), this.createSprite(s), this.items.push(s), Promise.resolve()
  }
  deleteTemplate(n) {
    this.items = this.items.filter(s => (s.id === n && this.pixiViewport.removeChild(s.sprite), s.id !== n))
  }
  createTexture(n) {
    n.texture = new PIXI.Texture.fromBuffer(n.imageData, n.imageSize, n.imageSize), n.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST
  }
  createSprite(n) {
    n.sprite = new PIXI.Sprite(n.texture), n.sprite.interactive = !1, n.sprite.zIndex = 5, n.sprite.alpha = this.opacity / 100, n.sprite.visible = !1, n.sprite.width = n.imageSize, n.sprite.height = n.imageSize, n.sprite.x = n.x, n.sprite.y = n.y, this.pixiViewport.addChild(n.sprite)
  }
  getRepaintRewardType({
    coords: n,
    repaintColor: s
  }) {
    const i = this.store.getState().tournament.activePeriod;
    if (!(i && i.ID && i.PeriodType === "round")) return bt.neutral;
    for (let o = 0; o < this.items.length; o++) {
      const r = this.items[o];
      if (r.type === Re.my || !this.isCoordsInExtraRewardZone({
          coords: n,
          x1: r.x,
          y1: r.y,
          imageSize: r.imageSize
        })) continue;
      const l = On({
          x: n.x - r.x,
          y: n.y - r.y,
          width: r.imageSize
        }),
        d = cn(r.imageData[l], r.imageData[l + 1], r.imageData[l + 2]),
        m = r.imageData[l + 3],
        h = this.mainImage.getPixelColor({
          coords: n
        });
      if (m !== 0 && h !== s) {
        if (h === d && s !== d) return bt.fail;
        if (h !== d && s === d) return bt.success
      }
    }
    return bt.neutral
  }
  show(n) {
    this.items.forEach(s => {
      s.sprite !== null && s.id === n && (s.sprite.visible = !0)
    })
  }
  hide() {
    this.items.forEach(n => {
      n.sprite !== null && (n.sprite.visible = !1)
    })
  }
  setOpacity(n) {
    this.opacity = n, this.items.forEach(s => {
      s.sprite !== null && (s.sprite.alpha = this.opacity / 100)
    })
  }
  changeTemplateCoords({
    templateId: n,
    x: s,
    y: a
  }) {
    this.items.forEach(i => {
      i.id === n && (i.sprite.x = s, i.sprite.y = a)
    })
  }
}
class Sf {
  constructor({
    app: n,
    viewport: s,
    store: a,
    ticker: i,
    readyCallback: o
  }) {
    Jn(this, "getClickCoords", n => {
      const s = this.sprite.toLocal(n.data.global);
      return {
        x: Math.floor(s.x),
        y: Math.floor(s.y)
      }
    });
    this.app = n, this.ticker = i, this.viewport = s, this.store = a, this.pixiViewport = s.viewport, this.selectedPixel = new uh({
      viewport: s
    }), this.template = new W_({
      app: n,
      viewport: s,
      store: a
    }), this.worldTemplate = new X_({
      app: n,
      viewport: s,
      store: a,
      mainImage: this
    }), this.tournamentTemplates = new Pf({
      app: n,
      viewport: s,
      store: a,
      mainImage: this
    }), this.reward = new If({
      ticker: i,
      viewport: s,
      store: a
    }), this.bomb = new Ih({
      app: n,
      viewport: s,
      mainImage: this
    }), this.pumpkin = new jf({
      app: n,
      viewport: s,
      mainImage: this
    }), this.imageData = null, this.texture = null, this.sprite = null, this.timeout = null, this.lastPointerUpTs = Date.now(), this.lastPaintCoords = {
      x: -1,
      y: -1
    }, this.initImage(), o(a), this.initEvents(), this.store.dispatch(ht({
      command: Oe.start
    })), !jo() && this.loadAllChunks().then(() => {
      const r = a.getState().main.startParams.coords;
      r && (b.viewport.viewport.animate({
        scale: 60,
        time: 400,
        position: {
          x: r.x + .5,
          y: r.y + .5
        }
      }), this.selectedPixel.draw(r), this.store.dispatch(Gt(r)))
    })
  }
  initImage() {
    this.imageData = new Uint8Array(E.width * E.height * 4);
    const n = PIXI.Texture.fromBuffer(this.imageData, E.width, E.height, {
      format: PIXI.FORMATS.RGBA,
      type: PIXI.TYPES.UNSIGNED_BYTE,
      width: E.width,
      height: E.height
    });
    n.scaleMode = PIXI.SCALE_MODES.NEAREST, this.texture = n, this.sprite = PIXI.Sprite.from(n), this.sprite.interactive = !0, this.pixiViewport.addChild(this.sprite), this.pixiViewport.fitHeight(), this.pixiViewport.moveCenter(this.pixiViewport.worldWidth / 2, this.pixiViewport.worldHeight / 2)
  }
  initEvents() {
    this.sprite.on("pointerdown", n => {
      this.timeout !== null && (clearTimeout(this.timeout), this.timeout = null), this.wasMoved = !1
    }), this.pixiViewport.on("moved", () => {
      this.wasMoved = !0
    }), this.sprite.on("pointerup", n => {
      const s = this.store.getState(),
        a = this.getClickCoords(n),
        i = s.main.fastMode,
        o = s.main.currentFastType;
      if (this.isCoordsEqual(this.lastPaintCoords, a), this.wasMoved) return;
      const r = Date.now();
      if (r - this.lastPointerUpTs < 200 && !i && !o && (this.pixiViewport.scaled > 50 ? b.viewport.viewport.animate({
          scale: this.pixiViewport.findFitHeight(E.height),
          time: 400
        }) : b.viewport.viewport.animate({
          scale: 60,
          time: 400,
          position: {
            x: a.x + .5,
            y: a.y + .5
          }
        }), n.data.originalEvent.preventDefault()), this.lastPointerUpTs = r, i) {
        const l = n.data.originalEvent.touches;
        if (l && l.length > 0) return;
        const d = {
          x: n.data.global.x,
          y: n.data.global.y
        };
        this.lastPaintCoords = a, Mr({
          charges: s.mining.charges,
          dispatch: this.store.dispatch,
          flyCoords: d,
          paintCoords: a,
          activeColor: s.color.active,
          state: this.store.getState()
        })
      } else o === "bomb" ? Z_({
        coords: a,
        dispatch: this.store.dispatch,
        repaintReward: Ia(s),
        state: this.store.getState()
      }) : o === "paintcan" ? ef({
        coords: a,
        dispatch: this.store.dispatch,
        repaintReward: Ia(s),
        activeColor: s.color.active,
        state: this.store.getState()
      }) : o === "pumpkin" ? Nf({
        coords: a,
        dispatch: this.store.dispatch,
        repaintReward: Ia(s),
        state: this.store.getState()
      }) : this.timeout = setTimeout(() => {
        this.selectedPixel.draw(a), this.store.dispatch(Gt(a))
      }, 0)
    })
  }
  async loadAllChunks() {
    const n = await this.loadImage(al),
      s = this.getImageData(n, E.width, E.height);
    for (let a = 0; a < s.length; a += 4) this.imageData[a + 3] === 0 && (this.imageData[a] = s[a], this.imageData[a + 1] = s[a + 1], this.imageData[a + 2] = s[a + 2], this.imageData[a + 3] = s[a + 3]);
    this.updateTexture(), this.store.dispatch(ht({
      command: Oe.finish
    }))
  }
  async loadFromCentrifuge(n) {
    const s = performance.now(),
      a = this.getImageData(n, E.width, E.height);
    for (let i = 0; i < a.length; i += 4) this.imageData[i + 3] === 0 && (this.imageData[i] = a[i], this.imageData[i + 1] = a[i + 1], this.imageData[i + 2] = a[i + 2], this.imageData[i + 3] = a[i + 3]);
    this.updateTexture(), this.store.dispatch(ht({
      command: Oe.finish
    })), console.log(performance.now() - s)
  }
  async loadChunk({
    chunkIndex: n
  }) {
    const s = E.chunkOrder[n],
      a = await this.loadImage(`${oi}image/block?block_id=${s}`),
      i = this.getImageData(a, E.chunkSize, E.chunkSize),
      o = Sa({
        index: s - 1,
        width: 4,
        blockSize: 1
      });
    for (let r = 0; r < i.length; r += 4) {
      const l = Sa({
          index: r,
          width: E.chunkSize
        }),
        d = On({
          x: l.x + o.x * E.chunkSize,
          y: l.y + o.y * E.chunkSize,
          width: E.width
        });
      this.imageData[d] = i[r], this.imageData[d + 1] = i[r + 1], this.imageData[d + 2] = i[r + 2], this.imageData[d + 3] = i[r + 3]
    }
    this.updateTexture(), n < 15 ? await this.loadChunk({
      chunkIndex: n + 1
    }) : this.store.dispatch(ht({
      command: Oe.finish
    }))
  }
  updateTexture() {
    this.sprite.texture.update()
  }
  paintPixels(n) {
    for (const [s, a] of Object.entries(n)) this.paintPixel({
      id: s,
      color: Ot(a)
    });
    this.updateTexture()
  }
  paintPixelsFromCentrifuge(n) {
    Object.keys(n).forEach(s => {
      n[s].forEach(i => {
        s !== "#171F2A" && this.paintPixel({
          id: i,
          color: Ot(s)
        })
      })
    }), this.updateTexture()
  }
  paintSquare({
    x: n,
    y: s,
    size: a,
    colors: i
  }) {
    for (let o = 0; o < i.length; o++) {
      const r = Sa({
          index: o,
          width: a,
          blockSize: 1
        }),
        l = {
          x: n + r.x,
          y: s + r.y
        };
      if (l.x < 0 || l.y < 0 || l.x > E.width || l.y > E.height) continue;
      const d = On({
          x: l.x,
          y: l.y,
          width: E.width
        }),
        {
          r: m,
          g: h,
          b: g
        } = Ot(i[o]);
      this.imageData[d] = m, this.imageData[d + 1] = h, this.imageData[d + 2] = g, this.imageData[d + 3] = 255
    }
    this.updateTexture()
  }
  paintPixel({
    id: n,
    color: s
  }) {
    const i = (Number(n) - 1) * 4;
    this.imageData[i] = s.r, this.imageData[i + 1] = s.g, this.imageData[i + 2] = s.b, this.imageData[i + 3] = 255
  }
  getPixelColor({
    id: n,
    coords: s
  }) {
    let a = 0;
    s ? a = _t(s) : a = Number(n);
    const i = (a - 1) * 4,
      o = this.imageData[i],
      r = this.imageData[i + 1],
      l = this.imageData[i + 2];
    return cn(o, r, l)
  }
  loadImage(n) {
    return new Promise(async s => {
      let a = 0,
        i = 2e3;
      const o = async () => {
        const r = new Image,
          d = await (await fetch(n, {
            method: "GET"
          })).blob(),
          m = URL.createObjectURL(d);
        r.src = m, r.onload = () => {
          s(r)
        }, r.onerror = h => {
          a += 1, a < 5 && setTimeout(() => {
            o()
          }, i * a)
        }
      };
      await o()
    })
  }
  getImageData(n, s, a) {
    const i = document.createElement("canvas");
    i.width = s, i.height = a;
    const o = i.getContext("2d");
    return o.drawImage(n, 0, 0, s, a), o.getImageData(0, 0, s, a).data
  }
  isCoordsEqual(n, s) {
    return n.x === s.x && n.y === s.y
  }
  getImageBlob() {
    return new Blob([this.imageData], {
      type: "image/png"
    })
  }
  convertSpriteToImage(n) {
    const s = new PIXI.Renderer({
        width: E.width,
        height: E.height
      }),
      a = PIXI.RenderTexture.create({
        width: E.width,
        height: E.height
      });
    s.render(this.sprite, a), s.view.toBlob(o => {
      n(o), s.destroy(!0)
    }, "image/png")
  }
  pixanosRepaint(n, s, a, i) {
    const o = g => {
        let f = 1664525,
          j = 1013904223,
          x = 4294967296,
          y = g >>> 0;
        return function() {
          return y = (f * y + j) % x, y / x
        }
      },
      r = s * s,
      l = Math.floor(r * a),
      d = o(n),
      m = Array.from(Array(l));
    for (let g = 0; g < l; g++) m[g] = g + 1;
    for (let g = l + 1; g <= r; g++) {
      const f = Math.floor(d() * g) + 1;
      f <= l && (m[f - 1] = g)
    }
    const h = Ot(i);
    for (let g = 0; g < m.length; g++) {
      const f = m[g];
      if (g < 20) {
        const j = Zs(f);
        console.log(`i: ${g}, id: ${f}, x: ${j.x}, y: ${j.y}`)
      }
      this.paintPixel({
        id: f,
        color: h
      })
    }
    this.updateTexture()
  }
}
class Bf {
  constructor({
    viewport: n
  }) {
    this.viewport = n, this.pixiViewport = n.viewport, this.sprite = null
  }
  draw({
    arr: n
  }) {
    this.destroy();
    let s = new Uint8Array(E.width * E.height * 4);
    for (let i = 0; i < s.length; i += 32) {
      const o = n[Math.round(i / 32)];
      for (let r = 0; r < 32; r += 4) {
        const l = Math.round(r / 4);
        s[i + r] = o & 1 << l ? 0 : 23, s[i + r + 1] = o & 1 << l ? 0 : 31, s[i + r + 2] = o & 1 << l ? 0 : 42, s[i + r + 3] = o & 1 << l ? 0 : 255
      }
    }
    const a = PIXI.Texture.fromBuffer(s, E.width, E.height, {
      format: PIXI.FORMATS.RGBA,
      type: PIXI.TYPES.UNSIGNED_BYTE,
      width: E.width,
      height: E.height
    });
    a.scaleMode = PIXI.SCALE_MODES.NEAREST, this.sprite = PIXI.Sprite.from(a), this.sprite.eventMode = "none", this.sprite.zIndex = 4e3, this.pixiViewport.addChild(this.sprite)
  }
  destroy() {
    this.sprite !== null && (this.sprite.destroy(), this.sprite = null)
  }
}
class Tf {
  constructor({
    app: n,
    store: s
  }) {
    this.app = n, this.store = s, this.viewport = new window.pixi_viewport.Viewport({
      worldWidth: E.width,
      worldHeight: E.height,
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
      interaction: n.renderer.plugins.interaction,
      threshold: 8
    }), this.app.stage.addChild(this.viewport), this.viewport.drag().pinch({
      noDrag: !0
    }).wheel().clampZoom({
      minScale: .3,
      maxScale: 60
    }), this.viewport.sortableChildren = !0, this.addEvents()
  }
  addEvents() {
    window.addEventListener("resize", () => {
      this.store.getState(), this.app.renderer.resize(window.innerWidth, window.innerHeight), this.viewport.resize(window.innerWidth, window.innerHeight)
    })
  }
  zoomIn() {
    this.viewport.animate({
      time: 100,
      scale: this.viewport.scaled * 1.8
    })
  }
  zoomOut() {
    this.viewport.animate({
      time: 100,
      scale: this.viewport.scaled / 1.8
    })
  }
  lock() {
    this.viewport.plugins.pause("drag"), this.viewport.plugins.pause("pinch"), this.viewport.plugins.pause("wheel")
  }
  unlock() {
    this.viewport.plugins.resume("drag"), this.viewport.plugins.resume("pinch"), this.viewport.plugins.resume("wheel")
  }
}
const Ef = () => localStorage.getItem("canvasFps") ? Number(localStorage.getItem("canvasFps")) : 60;
class kf {
  constructor({
    app: n
  }) {
    this.app = n, this.lastTime = Date.now(), this.lastRenderTime = Date.now(), this.fps = Ef(), this.callbacks = [], this.render()
  }
  render(n = 0) {
    const s = Date.now(),
      a = s - this.lastTime;
    if (this.lastTime = s, s - this.lastRenderTime > 1e3 / this.fps) {
      const i = n / this.fps;
      this.app.render(), this.callbacks.forEach(o => {
        o(i)
      }), this.lastRenderTime = s
    }
    requestAnimationFrame(() => this.render(a))
  }
  add(n) {
    this.callbacks.push(n)
  }
  remove(n) {
    this.callbacks = this.callbacks.filter(s => s.toString() !== n.toString())
  }
  setFps(n) {
    this.fps = Math.min(60, Math.max(10, n))
  }
}
let ei;
const Df = t => {
  ei = t
};
class Rf {
  constructor({
    readyCallback: n
  }) {
    this.app = new PIXI.Application({
      view: document.getElementById("canvasHolder"),
      width: window.innerWidth,
      height: window.innerHeight,
      autoDensity: !0,
      resolution: window.devicePixelRatio,
      antialias: !0,
      transparent: !0,
      type: PIXI.RENDERER_TYPE.WEBGL
    }), this.app.ticker.stop(), this.ticker = new kf({
      app: this.app
    }), this.viewport = new Tf({
      app: this.app,
      store: ei
    }), this.mainImage = new Sf({
      app: this.app,
      viewport: this.viewport,
      store: ei,
      ticker: this.ticker,
      readyCallback: n
    }), this.mask = new Bf({
      viewport: this.viewport
    })
  }
}
let b, Hi = !1;

function Mf() {
  b = new Rf({
    readyCallback: async t => {
      var s, a, i;
      const n = t.getState();
      n.device.deviceType, window.Telegram.WebApp.platform, ((s = n.user.user) == null ? void 0 : s.websocketToken) === "" && t.dispatch(iu(!0)), lg((a = n.user.user) == null ? void 0 : a.websocketToken, (i = n.user.user) == null ? void 0 : i.id)
    }
  })
}
const Uf = A.memo(() => (A.useEffect(() => {
    Hi || (Mf(), Hi = !0)
  }, []), Ge.createPortal(e.jsx("canvas", {
    id: "canvasHolder",
    className: `${sh.main_canvas}`
  }), document.body)), () => !0),
  Qf = ({
    children: t,
    coords: n,
    classes: s = []
  }) => {
    const a = te(),
      i = _();
    return e.jsx("div", {
      className: [re.row, ...s].join(" "),
      onPointerUp: () => {
        b.viewport.viewport.animate({
          scale: 25,
          time: 400,
          position: n
        }), b.mainImage.selectedPixel.draw(n), a.push("/"), i(Gt(n))
      },
      children: t
    })
  },
  Of = ({
    item: t
  }) => e.jsxs(Qf, {
    coords: t,
    children: [e.jsxs(tr, {
      children: [e.jsx(th, {
        color: t.color
      }), e.jsx(eh, {
        coords: {
          x: t.x,
          y: t.y
        }
      })]
    }), e.jsx(nr, {
      children: e.jsx($p, {
        date: t.dateObtained
      })
    }), e.jsx(sr, {
      children: e.jsx("div", {
        className: `${re.icon_arrow} telegram_icons`,
        children: ""
      })
    })]
  }),
  Ff = () => c(pi.selectAll).map(n => e.jsx(Of, {
    item: n
  }, _t({
    x: n.x,
    y: n.y
  }))),
  zf = () => {
    const t = _(),
      n = c(o => o.user.pixelsForSaleOffset),
      s = c(o => o.user.pixelsForSaleLimit),
      a = c(o => o.user.pixelsForSaleTotal),
      i = c(o => o.user.pixelsForSaleFetchStatus);
    return n + s >= a ? null : e.jsx("button", {
      className: `${re.row} ${re.loadMoreButton}`,
      onPointerUp: () => {
        t(zo({
          offset: n + s
        }))
      },
      disabled: i === p.pending,
      children: "Show more"
    })
  },
  Gf = () => e.jsxs("div", {
    className: re.skeleton_container,
    children: [e.jsx("div", {
      className: `${re.header} ${re.skeleton_header}`
    }), e.jsx("div", {
      className: re.data,
      children: e.jsx("div", {
        className: `${re.skeleton_row}`
      })
    })]
  }),
  Lf = () => {
    const t = c(pi.selectTotal);
    return c(s => s.user.pixelsForSaleFetchStatus) === p.pending && t === 0 ? e.jsx(Gf, {}) : t !== 0 ? e.jsxs(Zp, {
      children: [e.jsx(Ff, {}), e.jsx(zf, {})]
    }) : null
  },
  Hf = () => {
    const t = _();
    return Np(), A.useEffect(() => () => {
      t(au()), t(zo({
        offset: 0
      })), t(su({
        status: p.idle
      }))
    }, []), e.jsxs(e.Fragment, {
      children: [e.jsx(Xp, {}), e.jsx(Lf, {})]
    })
  },
  qf = "_layout_v8prs_1",
  Yf = "_group_title_container_v8prs_7",
  Vf = "_group_title_v8prs_7",
  Wf = "_group_v8prs_7",
  zs = {
    layout: qf,
    group_title_container: Yf,
    group_title: Vf,
    group: Wf
  },
  Xf = ({
    title: t,
    children: n
  }) => e.jsxs(ae.Fragment, {
    children: [e.jsx("div", {
      className: zs.group_title_container,
      children: e.jsx("span", {
        className: zs.group_title,
        children: t
      })
    }), e.jsx("div", {
      className: zs.group,
      children: n
    })]
  }),
  Jf = "_boost_item_8sbvi_1",
  Zf = "_image_container_8sbvi_10",
  Kf = "_image_8sbvi_10",
  $f = "_content_container_8sbvi_21",
  ex = "_content_8sbvi_21",
  tx = "_item_title_container_8sbvi_33",
  nx = "_item_reward_container_8sbvi_40",
  sx = "_price_text_8sbvi_45",
  ax = "_dot_8sbvi_49",
  ix = "_level_text_8sbvi_53",
  ox = "_status_container_8sbvi_58",
  rx = "_status_8sbvi_58",
  Ue = {
    boost_item: Jf,
    image_container: Zf,
    image: Kf,
    content_container: $f,
    content: ex,
    item_title_container: tx,
    item_reward_container: nx,
    price_text: sx,
    dot: ax,
    level_text: ix,
    status_container: ox,
    status: rx
  },
  wi = ({
    children: t,
    boost: n,
    price: s,
    isMax: a
  }) => {
    const i = _();
    return e.jsx("div", {
      className: Ue.boost_item,
      onPointerUp: () => {
        a || (i(xg(n)), i(_i(!0)))
      },
      children: t
    })
  },
  ji = ({
    isMax: t
  }) => t ? null : e.jsx("div", {
    className: Ue.status_container,
    children: e.jsx("div", {
      className: Ue.status,
      children: e.jsx(I, {
        size: 20,
        children: ""
      })
    })
  }),
  bi = ({
    src: t
  }) => e.jsx("div", {
    className: Ue.image_container,
    children: e.jsx("img", {
      alt: "image",
      className: Ue.image,
      src: t
    })
  }),
  cx = ({
    price: t,
    isMax: n
  }) => n ? "Max" : e.jsxs(ae.Fragment, {
    children: [e.jsx(M, {}), "  ", e.jsx("span", {
      className: Ue.price_text,
      children: t
    })]
  }),
  Ni = ({
    reward: t,
    level: n,
    price: s,
    isMax: a
  }) => {
    const {
      t: i
    } = Le();
    return e.jsx("div", {
      className: Ue.content_container,
      children: e.jsxs("div", {
        className: Ue.content,
        children: [e.jsx("div", {
          className: Ue.item_title_container,
          children: t
        }), e.jsxs("div", {
          className: Ue.item_reward_container,
          children: [e.jsx(cx, {
            price: s,
            isMax: a
          }), "  ", e.jsx("span", {
            className: Ue.dot,
            children: "•"
          }), "  ", e.jsxs("span", {
            className: Ue.level_text,
            children: [n, " ", i("mining.boosts.level")]
          })]
        })]
      })
    })
  },
  Ur = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAADNQTFRFJS5B9v+18/Dl7NL//OZH1N6v1MdTura5/7AA1oX4ppdEyI4TwHoSZGNloiHkREJOZACci2GX6wAAAM5JREFUeNrt18EOgyAQRdFBpzKoQP//a8tbdGHGphppIWZuwoaEAwlhAVmWZVm3L6UQegFFNDaOITxLfYCfuJ+Adr6/gM5x6QjXCgQm8p1rB4qgi5wG7X3Y+S40DESAUlJcJ2CMIPcw/6gLzs5NR5/elovRe1LNzBNP9cBFmKiYZy8kZ3A5K3LFtlIRhLjIQugsCRTkjkj1QIgrnYnZOSzxHhzt1hIEJ8L8JvsDwWEARL2BwJjBiWznewGZFadqCUppLRGqCdrn07Is6+a9AG2rFi1gfBMTAAAAAElFTkSuQmCC",
  lx = () => {
    const {
      t
    } = Le(), n = ge.paintReward, s = c(m => m.main.settings.UpgradeRepaint), a = c(m => m.mining.boosts[n]), {
      repaintReward: i
    } = c(hn), o = a >= i, r = Math.min(i, a + 1), l = Math.min(i, a), d = s == null ? void 0 : s.levels[r];
    return e.jsxs(wi, {
      boost: n,
      isMax: o,
      price: d.Price,
      children: [e.jsx(bi, {
        src: Ur
      }), e.jsx(Ni, {
        reward: t("mining.boosts.paintReward"),
        price: d.Price,
        level: l,
        isMax: o
      }), e.jsx(ji, {
        isMax: o
      })]
    })
  },
  Qr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQBAMAAAB8P++eAAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAABJQTFRFJS5B/+2k/8ZA/6cA5HQArUkAuEjH0AAAAGRJREFUeNrt1TENAEEMA8FQCAVTMAVTCH8qL0V6Bltcka2ntuu6rjcbGqZgqIGhXCx0h4VuDQrd7eLgupa3INDqPwbGm7QOgH9ZR0KvA+GsI2GUQuE4xcKkAAhMGTG2d0zX9WYfl2Yb5cnsVocAAAAASUVORK5CYII=",
  dx = () => {
    const {
      t
    } = Le(), n = ge.reChargeSpeed, s = c(m => m.main.settings.UpgradeChargeRestoration), a = c(m => m.mining.boosts[n]), {
      restorationSpeed: i
    } = c(hn), o = a >= i, r = Math.min(i, a + 1), l = Math.min(i, a), d = s == null ? void 0 : s.levels[r];
    return e.jsxs(wi, {
      boost: n,
      isMax: o,
      price: d.Price,
      children: [e.jsx(bi, {
        src: Qr
      }), e.jsx(Ni, {
        reward: t("mining.boosts.rechargingSpeed"),
        price: d.Price,
        level: l,
        isMax: o
      }), e.jsx(ji, {
        isMax: o
      })]
    })
  },
  Or = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQBAMAAAB8P++eAAAAAXNSR0IArs4c6QAAACRQTFRFJS1A1uLTscetgNhhcMJTiaeNUqhDYYZsLZkvMXI6BY4bRGNNme8YcAAAAMdJREFUeNrt1bENQyEMRdG/grMBXoEVWIEVvAIreAVvEHmFt1z4jiKlAykuUnAbmlM8ISSu0+mfs4bOaJYFmw3wGB3DWgoUdGAwD6BDMmDFuBHiqBnQKoDOzACqp0DVVu9aVbUU6KruKioingU9oKZCTodOtAnLLlSiVMg040zoRKK6B7Pv8UllCbvF9QjfsGdAIw44HZNlwO5ORA+aLTa6l7ejzY2+2lh24ffGBfxs3Hq4M0mBIQNKuAQYVCO/rk14PvvT6bdeUNkQ6l74HqUAAAAASUVORK5CYII=",
  ux = () => {
    const {
      t
    } = Le(), n = ge.energyLimit, s = c(m => m.main.settings.UpgradeChargeCount), a = c(m => m.mining.boosts[n]), {
      chargesCount: i
    } = c(hn), o = a >= i, r = Math.min(i, a + 1), l = Math.min(i, a), d = s == null ? void 0 : s.levels[r];
    return e.jsxs(wi, {
      boost: n,
      isMax: o,
      price: d.Price,
      children: [e.jsx(bi, {
        src: Or
      }), e.jsx(Ni, {
        reward: t("mining.boosts.energyLimit"),
        price: d.Price,
        level: l,
        isMax: o
      }), e.jsx(ji, {
        isMax: o
      })]
    })
  },
  mx = "_container_1e12r_1",
  Ax = "_title_container_1e12r_8",
  px = "_description_1_1e12r_19",
  hx = "_description_2_1e12r_27",
  gx = "_description_container_1e12r_35",
  _x = "_image_container_1e12r_47",
  fx = "_image_1e12r_47",
  xx = "_buttons_container_1e12r_59",
  vx = "_button_1e12r_59",
  yx = "_cancel_button_1e12r_71",
  wx = "_loading_1e12r_1",
  de = {
    container: mx,
    title_container: Ax,
    description_1: px,
    description_2: hx,
    description_container: gx,
    image_container: _x,
    image: fx,
    buttons_container: xx,
    button: vx,
    cancel_button: yx,
    loading: wx
  },
  Ci = ({
    children: t,
    boost: n,
    price: s
  }) => {
    const a = _(),
      {
        t: i
      } = Le(),
      o = d => {
        a(_i(d))
      },
      l = c(d => d.mining.checkStatuses[n]) === p.pending;
    return e.jsxs("div", {
      className: de.container,
      children: [t, e.jsxs("div", {
        className: de.buttons_container,
        children: [e.jsx("button", {
          className: de.cancel_button,
          onPointerUp: () => o(!1),
          children: i("mining.boosts.popup.cancelButton")
        }), e.jsx("button", {
          className: de.button,
          disabled: l,
          onPointerUp: async () => {
            l || (await a(xe.checkBoost({
              key: n,
              price: s
            })), o(!1))
          },
          children: i("mining.boosts.popup.buyButton", {
            price: s
          })
        })]
      })]
    })
  },
  jx = () => {
    const {
      t
    } = Le(), n = ge.paintReward, s = c(d => d.main.settings.UpgradeRepaint), a = c(d => d.mining.boosts[n]), {
      repaintReward: i
    } = c(hn), o = Math.min(i, a + 1), r = (s == null ? void 0 : s.levels[a]) || {
      Boost: 1
    }, l = s == null ? void 0 : s.levels[o];
    return e.jsxs(Ci, {
      price: l.Price,
      boost: n,
      children: [e.jsxs("div", {
        className: de.title_container,
        children: [t("mining.boosts.paintReward"), " ", e.jsxs("span", {
          children: ["• ", o, " ", t("mining.boosts.level")]
        })]
      }), e.jsx("div", {
        className: de.image_container,
        children: e.jsx("img", {
          alt: "image",
          className: de.image,
          src: Ur
        })
      }), e.jsxs("div", {
        className: de.description_container,
        children: [e.jsx("div", {
          className: de.description_1,
          children: t("mining.boosts.popup.paintRewardDescription")
        }), e.jsxs("div", {
          className: de.description_2,
          children: [t("mining.boosts.popup.reward"), ": ", r.Boost, " ⇢", " ", l.Boost, " PX"]
        })]
      })]
    })
  },
  bx = () => {
    const {
      t
    } = Le(), n = ge.reChargeSpeed, s = c(d => d.main.settings.UpgradeChargeRestoration), a = c(d => d.mining.boosts[n]), {
      restorationSpeed: i
    } = c(hn), o = Math.min(i, a + 1), r = (s == null ? void 0 : s.levels[a]) || {
      ChargeBoost: 6e5
    }, l = s == null ? void 0 : s.levels[o];
    return l.ChargeBoost - (r == null ? void 0 : r.ChargeBoost), e.jsxs(Ci, {
      price: l.Price,
      boost: n,
      children: [e.jsxs("div", {
        className: de.title_container,
        children: [t("mining.boosts.rechargingSpeed"), " ", e.jsxs("span", {
          children: ["• ", o, " ", t("mining.boosts.level")]
        })]
      }), e.jsx("div", {
        className: de.image_container,
        children: e.jsx("img", {
          alt: "image",
          className: de.image,
          src: Qr
        })
      }), e.jsxs("div", {
        className: de.description_container,
        children: [e.jsx("div", {
          className: de.description_1,
          children: t("mining.boosts.popup.rechargingSpeedDescription")
        }), e.jsxs("div", {
          className: de.description_2,
          children: [t("mining.boosts.popup.recharging"), ": ", " ", (r == null ? void 0 : r.ChargeBoost) / 1e3, " ⇢", " ", l.ChargeBoost / 1e3, " ", t("shared.sec")]
        })]
      })]
    })
  },
  Nx = () => {
    const {
      t
    } = Le(), n = ge.energyLimit, s = c(d => d.main.settings.UpgradeChargeCount), a = c(d => d.mining.boosts[n]), {
      chargesCount: i
    } = c(hn), o = Math.min(i, a + 1), r = s == null ? void 0 : s.levels[o], l = c(d => d.mining.maxCharges);
    return e.jsxs(Ci, {
      price: r.Price,
      boost: n,
      children: [e.jsxs("div", {
        className: de.title_container,
        children: [t("mining.boosts.energyLimit"), " ", e.jsxs("span", {
          children: ["• ", o, " ", t("mining.boosts.level")]
        })]
      }), e.jsx("div", {
        className: de.image_container,
        children: e.jsx("img", {
          alt: "image",
          className: de.image,
          src: Or
        })
      }), e.jsxs("div", {
        className: de.description_container,
        children: [e.jsx("div", {
          className: de.description_1,
          children: t("mining.boosts.popup.energyLimitDescription")
        }), e.jsxs("div", {
          className: de.description_2,
          children: [t("mining.boosts.popup.energy"), ":  ", l, " ⇢", " ", l + r.Boost]
        })]
      })]
    })
  },
  Cx = () => {
    const t = _(),
      n = c(i => i.main.showBoostDetailsPopup),
      s = c(i => i.main.activeBoostDetails),
      a = i => {
        t(_i(i))
      };
    return e.jsxs(Lt, {
      show: n,
      setShow: a,
      children: [s === ge.paintReward && e.jsx(jx, {}), s === ge.reChargeSpeed && e.jsx(bx, {}), s === ge.energyLimit && e.jsx(Nx, {})]
    })
  },
  Ix = () => e.jsxs("div", {
    className: zs.layout,
    children: [e.jsxs(Xf, {
      title: "Boosters",
      children: [e.jsx(lx, {}), e.jsx(dx, {}), e.jsx(ux, {})]
    }), e.jsx(Cx, {}), e.jsx("div", {
      style: {
        height: "20px"
      }
    })]
  }),
  Px = () => {
    const t = c(n => n.mining.activeTab);
    return e.jsxs("div", {
      className: u.info_layout,
      children: [e.jsx(bp, {}), t === "tasks" && e.jsx(jp, {}), t === "pixels" && e.jsx(Hf, {}), t === "boosts" && e.jsx(Ix, {})]
    })
  },
  Sx = () => {
    const t = _(),
      n = c(s => s.mining.activeTab);
    return e.jsxs(pn, {
      children: [e.jsx(Fe, {
        active: n === "tasks",
        setActive: () => t(qa("tasks")),
        children: "Tasks"
      }), e.jsx(Fe, {
        active: n === "boosts",
        setActive: () => t(qa("boosts")),
        children: "Boosts"
      })]
    })
  },
  Bx = () => e.jsxs(ae.Fragment, {
    children: [e.jsx(Sx, {}), e.jsx(Px, {})]
  }),
  Tx = "_more_details_6gp7h_1",
  Ex = {
    more_details: Tx
  },
  _n = ({
    children: t,
    ...n
  }) => e.jsx("span", {
    className: Ex.more_details,
    ...n,
    children: e.jsx("span", {
      children: t
    })
  }),
  kx = "_container_11l5m_1",
  Dx = "_divider_11l5m_23",
  Rx = "_row_11l5m_28",
  Mx = "_row_title_11l5m_40",
  Ux = "_row_title_main_11l5m_44",
  Qx = "_row_hint_11l5m_49",
  Ox = "_row_value_11l5m_55",
  Fx = "_row_value_main_11l5m_59",
  zx = "_mining_percent_11l5m_64",
  Gx = "_active_row_11l5m_74",
  Lx = "_button_11l5m_85",
  qi = {
    container: kx,
    divider: Dx,
    row: Rx,
    row_title: Mx,
    row_title_main: Ux,
    row_hint: Qx,
    row_value: Ox,
    row_value_main: Fx,
    mining_percent: zx,
    active_row: Gx,
    button: Lx
  },
  Hx = () => {
    const t = _(),
      {
        t: n
      } = Le("translation", {
        keyPrefix: "mining.popup"
      }),
      s = c(r => r.main.showMiningDetailsPopup),
      a = r => {
        t(_r(r))
      },
      i = c(r => r.mining.info),
      o = c(r => r.main.settings);
    return i ? e.jsx(Lt, {
      show: s,
      setShow: a,
      children: e.jsxs("div", {
        className: qi.container,
        children: [e.jsx("h2", {
          children: n("title1")
        }), e.jsx("p", {
          children: n("text1")
        }), e.jsx("p", {
          children: n("text2")
        }), e.jsx("h2", {
          children: n("title2")
        }), e.jsx("p", {
          children: n("text3")
        }), e.jsx("p", {
          children: n("text4", {
            repaints: i.repaintsTotal,
            perDay: (i.speedPerSecond * 86400).toFixed(1)
          })
        }), e.jsx("p", {
          children: n("text5", {
            time: o.MaxMiningTime
          })
        }), e.jsx("button", {
          className: qi.button,
          onPointerUp: () => a(!1),
          children: n("button")
        })]
      })
    }) : null
  },
  qx = () => {
    const t = _(),
      {
        t: n
      } = Le("translation", {
        keyPrefix: "mining"
      });
    return e.jsxs(ue, {
      children: [e.jsx("div", {
        style: {
          display: "flex",
          paddingInline: "50px",
          justifyContent: "center",
          textAlign: "center",
          marginTop: "2px",
          marginBottom: "-8px",
          fontSize: "16px",
          fontWeight: "600",
          color: "#8794a1"
        },
        children: n("yourBalanceText")
      }), e.jsx(Wu, {}), e.jsxs("div", {
        className: Kn.general_info_container,
        children: [e.jsxs("h1", {
          className: Kn.pixels_amount,
          children: [e.jsx(Nm, {}), " PX"]
        }), e.jsxs("div", {
          className: Kn.description_container,
          children: [e.jsxs("span", {
            className: Kn.description,
            children: [n("grayInstruction"), " ", e.jsx("br", {}), e.jsx(_n, {
              onPointerUp: s => {
                s.stopPropagation(), t(_r(!0))
              },
              children: n("howItWorks")
            })]
          }), e.jsx(Hx, {})]
        })]
      }), e.jsx(bm, {}), e.jsx(Bx, {})]
    })
  },
  Yx = "_squads_img_container_zthsq_1",
  Vx = "_squads_img_zthsq_1",
  Wx = "_title_container_zthsq_11",
  Xx = "_description_container_zthsq_18",
  Jx = "_description_zthsq_18",
  Zx = "_info_layout_zthsq_31",
  Kx = "_info_container_zthsq_42",
  $x = "_base_item_zthsq_49",
  ev = "_loading_item_zthsq_60",
  tv = "_rating_item_zthsq_69",
  nv = "_info_row_zthsq_82",
  sv = "_avatar_container_zthsq_87",
  av = "_avatar_zthsq_87",
  iv = "_position_zthsq_99",
  ov = "_user_squad_position_zthsq_117",
  rv = "_rating_main_info_zthsq_135",
  cv = "_rating_name_zthsq_148",
  lv = "_rating_value_zthsq_155",
  dv = "_active_league_text_zthsq_163",
  uv = "_icon_leagueflag_zthsq_167",
  mv = "_join_squad_button_zthsq_174",
  Av = "_join_squad_text_zthsq_188",
  pv = "_user_squad_container_zthsq_206",
  hv = "_squad_avatar_container_zthsq_223",
  gv = "_user_squad_info_zthsq_234",
  _v = "_user_squad_name_zthsq_242",
  fv = "_user_squad_your_squad_text_zthsq_246",
  xv = "_user_squad_users_count_zthsq_251",
  H = {
    squads_img_container: Yx,
    squads_img: Vx,
    title_container: Wx,
    description_container: Xx,
    description: Jx,
    info_layout: Zx,
    info_container: Kx,
    base_item: $x,
    loading_item: ev,
    rating_item: tv,
    info_row: nv,
    avatar_container: sv,
    avatar: av,
    position: iv,
    user_squad_position: ov,
    rating_main_info: rv,
    rating_name: cv,
    rating_value: lv,
    active_league_text: dv,
    icon_leagueflag: uv,
    join_squad_button: mv,
    join_squad_text: Av,
    user_squad_container: pv,
    squad_avatar_container: hv,
    user_squad_info: gv,
    user_squad_name: _v,
    user_squad_your_squad_text: fv,
    user_squad_users_count: xv
  },
  vv = ({
    isPlayers: t
  }) => {
    const n = _(),
      s = c(i => i.ratings.league),
      a = c(Lo);
    return e.jsx(pn, {
      children: ["bronze", "silver", "gold", "platinum"].map(i => e.jsxs(Fe, {
        active: s === i,
        setActive: () => {
          s !== i && n(Nr(i))
        },
        children: [e.jsxs("span", {
          className: H.active_league_text,
          children: [" ", i, " "]
        }), i === a && t && e.jsx(I, {
          className: `${H.icon_leagueflag}`,
          children: ""
        })]
      }, i))
    })
  },
  yv = "_panel_bpwn4_1",
  wv = "_item_bpwn4_9",
  jv = "_active_bpwn4_20",
  Ma = {
    panel: yv,
    item: wv,
    active: jv
  },
  bv = ({
    selectedSection: t,
    setSelectedSection: n
  }) => e.jsx("div", {
    className: Ma.panel,
    children: ["Squads", "Painters"].map(s => e.jsx("div", {
      className: `${Ma.item} ${t===s?Ma.active:""}`,
      onPointerUp: () => {
        n(s)
      },
      children: e.jsx("h1", {
        children: s
      })
    }, s))
  }),
  ga = ({
    children: t
  }) => e.jsx("div", {
    className: H.base_item,
    children: t
  }),
  it = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAIVBMVEUQGSb////09PTk5ebT1NbCw8asr7ODh41jZ29GTFYjKjX3vgf4AAABe0lEQVR42u3X227DMAgGYMzBBt7/gSc17dwlWpNemGrT/121UhRQDMgQAAAAAAAAAAAA/GU5uqpqH0mfkJ3bHfekckPaExnl8bn9wKM8/t6gQs5twyLfP53q2Dz5WQ1WfgA9H/1QXQZbQEu6S9sSoiIp25nva0KSavgtAaUnekvAS3ugHw6FkYBTjdhqIOlbbjUQVES3tt8PBi2eA+KzLSrnwAwovv9b/Akam2e6cbvpVCe0HWhQIZe2I06lXA7xi6W1iS2pnhs/wjt9SHjvHtiQPiKGKT9qgNVGUJ0cyu2AdWRZ8R/UtYNre0l9+UZ8gnsWzV8W7XcqXDKVBz8VXOy7Qnn1pjz49VeOzjODlfEt6BdhCzMIme8+z1Ji1S1M49pdqa+5ijfLi/cEXXMCEtefXLSOnZlr2v9MwOgCW5JAyNUp67ymD2124ZU+tFWDkK2/ZLxqFKa1N2hWbGNTzZ7mUhH/vL7OadRfSCc2x9ICAAAAAAAAAADwli/CSAqaW7oHjgAAAABJRU5ErkJggg==",
  Fr = ({
    position: t,
    userPic: n
  }) => e.jsxs("div", {
    className: H.avatar_container,
    children: [e.jsx("img", {
      alt: "avatar",
      className: H.avatar,
      src: n === "" ? it : n
    }), e.jsx("div", {
      className: H.position,
      children: t
    }), ";"]
  }),
  zr = ({
    name: t
  }) => e.jsx("div", {
    className: H.rating_main_info,
    children: e.jsx("span", {
      className: H.rating_name,
      children: t
    })
  }),
  Gr = ({
    value: t
  }) => t ? e.jsx("span", {
    className: H.rating_value,
    children: rn(t)
  }) : null,
  Nv = ({
    item: t,
    index: n
  }) => {
    const s = _(),
      a = [H.rating_item];
    return e.jsx(ga, {
      children: e.jsxs("div", {
        className: a.join(" "),
        onPointerUp: () => {
          s(Yn({
            dataSource: $e.userFromRating,
            index: n
          }))
        },
        children: [e.jsx(Fr, {
          position: n + 1,
          userPic: t.userPic
        }), e.jsx(zr, {
          name: t.firstName
        }), e.jsx(Gr, {
          value: t.repaints
        })]
      })
    })
  },
  Cv = () => {
    const t = c(s => s.user.user),
      n = c(s => s.ratings.myPlace);
    return t === null ? null : e.jsx(ga, {
      children: e.jsxs("div", {
        className: H.rating_item,
        style: {
          border: "2px solid #4db2ff"
        },
        children: [e.jsxs("div", {
          className: H.avatar_container,
          children: [e.jsx("img", {
            alt: "avatar",
            className: H.avatar,
            src: t.userPic === "" ? it : t.userPic
          }), n !== 0 && n < 1e3 && e.jsx("div", {
            className: H.position,
            children: n
          }), n >= 1e3 && e.jsx("div", {
            className: H.position,
            style: {
              fontSize: "10px"
            },
            children: "999+"
          })]
        }), e.jsxs("div", {
          className: H.user_squad_info,
          children: [e.jsxs("div", {
            children: [e.jsx("span", {
              className: H.user_squad_name,
              children: t.firstName
            }), " "]
          }), e.jsxs("div", {
            className: H.user_squad_your_squad_text,
            children: ["You •", " ", e.jsx("span", {
              style: {
                textTransform: "capitalize"
              },
              children: t.league
            })]
          })]
        })]
      })
    })
  },
  Iv = () => {
    const t = _(),
      n = c(i => i.ratings.list),
      s = c(i => i.ratings.league),
      a = c(i => i.ratings.status);
    return A.useEffect(() => {
      t(xi.personal({
        league: s
      }))
    }, [s]), A.useEffect(() => () => {
      t(__())
    }, []), a !== p.fulfilled ? null : e.jsxs(ae.Fragment, {
      children: [e.jsx(Cv, {}), n.map((i, o) => e.jsx(Nv, {
        item: i,
        index: o
      }, o))]
    })
  },
  Pv = () => (A.useState("Day"), null),
  Sv = ({
    children: t
  }) => e.jsx("div", {
    className: H.info_layout,
    children: e.jsxs("div", {
      className: H.info_container,
      children: [e.jsx(Pv, {}), t]
    })
  }),
  Bv = () => {
    const t = te();
    return e.jsx("div", {
      className: H.description_container,
      children: e.jsxs("span", {
        className: H.description,
        children: ["Pixel painting Leaderboard!", e.jsx("br", {}), e.jsx(_n, {
          onPointerUp: () => {
            t.push("/stats")
          },
          children: "Painters stat"
        })]
      })
    })
  },
  Tv = () => {
    const t = c(n => n.user.user);
    return !t || !t.squad || t.squad.id !== null ? null : e.jsx("button", {
      className: H.join_squad_button,
      children: e.jsxs("div", {
        className: H.join_squad_text,
        onPointerUp: () => {
          W(`https://t.me/${It}`)
        },
        children: ["Join the squad ", e.jsx(I, {
          children: ""
        })]
      })
    })
  },
  zt = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAJFBMVEUQGSb////w8PHU1de6vMCoq6+NkJd3e4Juc3pXXWU8QkwlLDf3GVopAAABfklEQVR42u3ZwW7CMBCE4WHXazbO+79vL7QjUdxwYG1Vmu/YRP0tOwkOQERERERERERE5APOzIjMgR1Gd7s9mMfAWoffnnhuypMfWOMMu71kcWKB0W5TbaBcOuc8cgAjw/mngWJ3+5lvtjDCOII1/fa03GfjgQV96/ilP47Fin7ihTQeLO7f/zzuZ/X6d0x0Hq/sN0w1TkFd3w5MHcaroKJ/fZUHT6nqW4Imd4KX9a//uXOVCvq8BKcaZ6mif32PdZ708b7xIXR1clT0Pd6Z3fz4APK7P/YMgH3EjiVgH+ilF+F1H2nrb0NnHzhs/YPI2Qfg6x/FjX0Asf7DaDj7QNqej2PyNzckqNLtnS2ZdVQ5fc+mlNL2bMspdr2YcAC7Xs3Y3/dyyv789dzuC/u0uB9he/vA4Xv74BC29PlF5c4+v6q1HX0arr76i/qm+d/T75M+NyCWqORc//UbQA6AfUpjv1Cf9XE29it1946XzvB26KdTEREREREREZF/7Qv4ZQurWN4R2wAAAABJRU5ErkJggg==",
  Ii = ({
    src: t
  }) => {
    let n = zt;
    return t !== "" && t !== void 0 && t !== null && (n = t), e.jsx("img", {
      alt: "avatar",
      src: n,
      style: {
        width: "100%",
        height: "100%",
        borderRadius: "50%"
      }
    })
  },
  Ev = () => {
    const t = _(),
      n = c(a => a.ratings.mySquadPlace),
      s = c(a => a.ratings.mySquad);
    return s === null || !s || s.id === null ? null : e.jsxs("div", {
      className: H.user_squad_container,
      onPointerUp: () => {
        t(ha.getInfo({
          id: s.id
        })), t(Yn({
          dataSource: $e.squadFromData
        }))
      },
      children: [e.jsxs("div", {
        className: H.squad_avatar_container,
        children: [e.jsx(Ii, {
          src: s.logo
        }), e.jsx("div", {
          className: H.user_squad_position,
          children: n
        })]
      }), e.jsxs("div", {
        className: H.user_squad_info,
        children: [e.jsxs("div", {
          children: [e.jsx("span", {
            className: H.user_squad_name,
            children: s.name
          }), " "]
        }), e.jsx("div", {
          className: H.user_squad_your_squad_text,
          children: "Your squad"
        })]
      }), e.jsx("div", {
        children: e.jsx("span", {
          className: H.user_squad_users_count,
          children: rn(s.scoredRepaints)
        })
      })]
    })
  },
  kv = ({
    item: t,
    index: n
  }) => {
    const s = _();
    return e.jsx(ga, {
      children: e.jsxs("div", {
        className: H.rating_item,
        onPointerUp: () => {
          s(ha.getInfo({
            id: t.id
          })), s(Yn({
            dataSource: $e.squadFromData
          }))
        },
        children: [e.jsx(Fr, {
          position: n + 1,
          userPic: t.logo
        }), e.jsx(zr, {
          name: t.name,
          address: t.slug
        }), e.jsx(Gr, {
          value: t.scoredRepaints
        })]
      })
    })
  },
  Dv = () => {
    const t = c(s => s.ratings.list);
    return c(s => s.ratings.status) !== p.fulfilled ? null : t.map((s, a) => e.jsx(kv, {
      item: s,
      index: a
    }, a))
  },
  Rv = () => {
    const t = _(),
      n = c(s => s.ratings.league);
    return A.useEffect(() => {
      t(xi.squad({
        league: n
      }))
    }, [n]), e.jsxs(ae.Fragment, {
      children: [e.jsx(Tv, {}), e.jsx(Ev, {}), e.jsx(Dv, {})]
    })
  },
  Mv = () => e.jsx(ae.Fragment, {
    children: Array.from(Array(10)).map((t, n) => e.jsx(ga, {
      children: e.jsx("div", {
        className: H.loading_item
      })
    }, n))
  }),
  Uv = "_container_d5ybi_1",
  Qv = {
    container: Uv
  },
  Ov = () => {
    const t = c(a => a.ratings.league);
    let s = c(xr, wc)[t];
    return s === 0 ? s = "start" : s += " repaints", e.jsxs("span", {
      children: ["from ", s]
    })
  },
  Fv = () => (c(t => t.ratings.league), c(Lo), c(xr), e.jsx("div", {
    className: Qv.container,
    children: e.jsx(Ov, {})
  })),
  zv = "_container_d5ybi_1",
  Gv = {
    container: zv
  },
  Lv = () => {
    const t = c(s => s.ratings.league),
      n = c(jg);
    return e.jsx("div", {
      className: Gv.container,
      children: e.jsxs("span", {
        children: ["from ", (n[t] / 1e3).toFixed(0), "k"]
      })
    })
  },
  Hv = "/assets/icon_squad-_NF17RUb.gif",
  qv = "/assets/icon_squad_secret-B-fF264Z.gif",
  Yv = () => {
    const [t, n] = A.useState(0);
    return e.jsx("div", {
      className: H.squads_img_container,
      children: e.jsx("img", {
        alt: "img",
        className: H.squads_img,
        src: t >= 10 ? qv : Hv,
        onPointerUp: () => {
          n(s => s + 1)
        }
      })
    })
  },
  Vv = () => {
    const [t, n] = A.useState("Squads"), s = c(a => a.ratings.status);
    return e.jsxs(ue, {
      children: [e.jsx(Yv, {}), e.jsx(bv, {
        selectedSection: t,
        setSelectedSection: n
      }), e.jsx(Bv, {}), e.jsx(vv, {
        isPlayers: t === "Painters"
      }), e.jsxs(Sv, {
        children: [t === "Painters" && e.jsx(Fv, {}), t === "Squads" && e.jsx(Lv, {}), t === "Squads" && e.jsx(Rv, {}), t === "Painters" && e.jsx(Iv, {}), s !== p.fulfilled && e.jsx(Mv, {})]
      })]
    })
  },
  Wv = "_layout_14eqc_1",
  Xv = "_container_14eqc_9",
  Jv = "_button_14eqc_13",
  Ua = {
    layout: Wv,
    container: Xv,
    button: Jv
  },
  Zv = () => {
    const t = _();
    return c(s => s.canvas.selectedPrice) !== "my_pixels" ? null : e.jsx("div", {
      className: Ua.layout,
      children: e.jsx("div", {
        className: Ua.container,
        children: e.jsx("button", {
          className: Ua.button,
          onPointerUp: () => {
            t(lh(null)), b.mask.destroy()
          },
          children: "Hide My Pixels"
        })
      })
    })
  },
  Kv = () => {
    const t = A.useRef(null),
      n = A.useRef(null);
    A.useEffect(() => () => {
      clearInterval(t.current)
    }, []);
    const s = () => {
      performance.now() - n.current < 200 && b.viewport.zoomIn(), clearInterval(t.current)
    };
    return e.jsx("button", {
      className: S.button,
      onPointerDown: () => {
        n.current = performance.now(), t.current = setInterval(() => {
          b.viewport.zoomIn()
        }, 90)
      },
      onPointerUp: () => {
        performance.now() - n.current < 200 && b.viewport.zoomIn(), clearInterval(t.current)
      },
      onPointerLeave: s,
      onPointerOut: s,
      onPointerCancel: s,
      onBlur: s,
      onTouchEnd: s,
      onTouchCancel: s,
      children: e.jsx("span", {
        className: "telegram_icons",
        children: ""
      })
    })
  },
  $v = () => {
    const t = A.useRef(null),
      n = A.useRef(null),
      s = () => {
        performance.now() - n.current < 200 && b.viewport.zoomOut(), clearInterval(t.current)
      };
    return A.useEffect(() => () => {
      clearInterval(t.current)
    }, []), A.useEffect(() => (window.addEventListener("blur", s), () => {
      window.removeEventListener("blur", s)
    }), []), e.jsx("button", {
      className: S.button,
      onPointerDown: () => {
        n.current = performance.now(), t.current = setInterval(() => {
          b.viewport.zoomOut()
        }, 90)
      },
      onPointerUp: () => {
        performance.now() - n.current < 200 && b.viewport.zoomOut(), clearInterval(t.current)
      },
      onPointerLeave: s,
      onPointerOut: s,
      onPointerCancel: s,
      onBlur: s,
      onTouchEnd: s,
      onTouchCancel: s,
      children: e.jsx("span", {
        className: "telegram_icons",
        children: ""
      })
    })
  },
  ey = () => e.jsxs("div", {
    className: S.buttons_container,
    children: [e.jsx(Kv, {}), e.jsx($v, {})]
  }),
  ty = () => {
    const t = _(),
      n = [S.button],
      s = c(r => r.shop.limitedGood),
      a = c(r => r.shop.limitedEnd),
      [i, o] = A.useState(null);
    return A.useEffect(() => {
      let r = null;
      if (a) {
        const l = () => {
          const d = Date.now(),
            m = Math.max(0, Math.ceil((a - d) / 1e3));
          o(m)
        };
        l(), r = setInterval(l, 1e3)
      }
      return () => {
        r && clearInterval(r)
      }
    }, [a]), s ? e.jsxs("button", {
      className: `${n.join(" ")} ${S.shop_button}`,
      onPointerUp: () => {
        t(Il())
      },
      children: [e.jsx("img", {
        alt: "img",
        className: S.button_image,
        src: s.image_url
      }), e.jsx("div", {
        className: S.limited_good_timer,
        children: dl(i)
      })]
    }) : null
  },
  ny = () => c(Ve) ? e.jsx("div", {
    className: S.buttons_container,
    children: e.jsx(ty, {})
  }) : null,
  sy = "_button_t2u3a_1",
  ay = "_image_t2u3a_14",
  iy = "_airdrop_button_t2u3a_19",
  oy = "_button_text_t2u3a_33",
  Rn = {
    button: sy,
    image: ay,
    airdrop_button: iy,
    button_text: oy
  },
  ry = () => {
    const t = _(),
      n = c(ca),
      s = c(ra),
      a = c(o => o.main.pixanosRatingStatus);
    let i = 14 + n.top + s.top + xo + 14;
    return e.jsx("button", {
      className: Rn.button,
      style: {
        top: i
      },
      onPointerUp: () => {
        a !== p.pending && t(wg.getPixanosRating()), t(Ss(!0))
      },
      children: e.jsx("img", {
        alt: "img",
        src: mn,
        className: Rn.image
      })
    })
  },
  cy = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAAAXNSR0IArs4c6QAAAglJREFUaIHtWj1OwzAU/oy6UKkXYGCJRKV07AUoByjs3ITOIHEMBnboAQgXYCRShy4gcYFKsCCFoXlt/BzHNiEisv0ttHb8Xvo+vx/8DET0G6IDmcV/vsPBXwrrAwZdCS5eZ43zYpJ1ojcohmp9YZqOBAC85BtpPk2GAgDy9afTC6TJEOU6SZ5OTwW1vucdQ00RpgBUX+B7n+Z1PmFab5LTsD4MhpyjHLck/aXx5c0KAHB+/yF953i8PAIAzK/GkhyuxxXeMaT1oWk6ArCPMjoGuoKOwUr0q10XDkOwrMmMe32sEbMStc+JwbONWiBGuRK2eUSBIzPK+C/1h8MQ1WZikklR7uk6AQCcLdbtNOsYLEF6CMSMqWb0miHJZNwCZCHKD1qUls9u32unN/kXAGB+d7Id0PgOPScWss/wqrz6ioCHDFXNY1Vdcyh5yDKfFN+n2w+MIVd9vPr2jiHrPJQ9vAHY722lljNELQUa3yGQr47SQwDA7OLYSqx3DMUf1He0j3IUrXQgXzHUbNb6go9yJgtR9DH+x8qZcYROT9DVtrS5+Ykmz0fOMPgOB+UffsoUXLXd+uTUWH07gvtMPDk1PdBVH8cWrvq9YyienPYdzlFut1DTLeAM8ijIx127D8FFudjB6zucuw8WXfBG39spVmuz2AWvQ2d3fRxuksS7Pk2It7EiItrhB7p6E/aIRp2bAAAAAElFTkSuQmCC",
  ly = () => {
    const t = te();
    return e.jsxs("button", {
      className: Rn.airdrop_button,
      onPointerUp: () => {
        t.push("/airdrop")
      },
      children: [e.jsx("img", {
        alt: "img",
        src: cy,
        className: Rn.image
      }), e.jsx("div", {
        className: Rn.button_text,
        children: "Airdrop"
      })]
    })
  },
  dy = () => e.jsx("div", {
    className: S.layout,
    children: e.jsxs("div", {
      className: S.container,
      children: [e.jsxs("div", {
        className: S.buttons_container,
        children: [e.jsx(ly, {}), e.jsx(ry, {})]
      }), e.jsx(ey, {}), e.jsx(ny, {})]
    })
  }),
  uy = () => null,
  my = "_layout_14a3l_1",
  Ay = "_container_14a3l_11",
  py = "_image_14a3l_26",
  hy = "_text_14a3l_31",
  gy = "_gold_14a3l_37",
  _y = "_winning_14a3l_44",
  fy = "_loosing_14a3l_48",
  ke = {
    layout: my,
    container: Ay,
    image: py,
    text: hy,
    gold: gy,
    winning: _y,
    loosing: fy
  },
  Lr = t => {
    if (!t) return "soon";
    const s = t - new Date,
      a = Math.floor(s / 1e3),
      i = Math.floor(a / 60 / 60),
      r = Math.floor(s / (1e3 * 60)) % 60;
    return i <= 0 && r < 30 ? "soon" : `in ${i}h ${r}m`
  },
  Pi = "/assets/gold_pixel-CRD2C_ap.gif",
  xy = () => {
    const t = c(ag),
      n = c(r => r.tournament.resultsStatus),
      s = t && t.rank && t.rank <= t.rank_to_win,
      a = t && t.template && t.template.rank && t.template.rank <= t.template.lastSurvivalRank,
      i = t && t.rank || 0,
      o = t && t.template && t.template.rank || 0;
    return n !== p.fulfilled ? null : e.jsxs(ae.Fragment, {
      children: ["  ", e.jsx(I, {
        size: 14,
        className: a ? ke.winning : ke.loosing,
        children: ""
      }), " ", e.jsx("span", {
        className: a ? ke.winning : ke.loosing,
        children: o
      }), " ", e.jsx(I, {
        size: 14,
        className: s ? ke.winning : ke.loosing,
        children: ""
      }), " ", e.jsx("span", {
        className: s ? ke.winning : ke.loosing,
        children: i
      })]
    })
  },
  vy = () => {
    const t = c(lt),
      n = c(ng),
      s = n ? Lr(new Date(n.EndTime)) : null;
    return e.jsxs("span", {
      className: ke.text,
      children: [e.jsxs("span", {
        className: ke.gold,
        children: ["Round ", t, " ", s ? `ends ${s}` : ""]
      }), e.jsx(xy, {})]
    })
  },
  yy = () => {
    const t = te(),
      n = c(lt),
      s = c(sg),
      a = Lr(s ? new Date(s.StartTime) : null);
    return e.jsx("div", {
      className: ke.layout,
      onPointerUp: () => {
        t.push("/tournament")
      },
      children: e.jsxs("div", {
        className: ke.container,
        children: [e.jsx("img", {
          alt: "img",
          className: ke.image,
          src: Pi
        }), !n && e.jsxs("span", {
          children: ["Starts ", a]
        }), n && e.jsx(vy, {})]
      })
    })
  },
  wy = () => (_(), null),
  jy = "_layout_r9qhp_1",
  by = "_container_r9qhp_16",
  Ny = "_item_r9qhp_21",
  Cy = "_move_r9qhp_1",
  Iy = "_image_r9qhp_36",
  Ks = {
    layout: jy,
    container: by,
    item: Ny,
    move: Cy,
    image: Iy
  },
  Py = {
    [bt.success]: "+1",
    [bt.fail]: "-1",
    [bt.neutral]: "0"
  },
  Sy = ({
    item: t
  }) => {
    const n = _();
    return A.useEffect(() => {
      const s = setTimeout(() => {
        n(fg(t.id))
      }, 1e3);
      return () => {
        clearTimeout(s)
      }
    }, []), e.jsxs("div", {
      className: Ks.item,
      style: {
        left: t.flyCoords.x,
        top: t.flyCoords.y,
        fontSize: t.repaintRewardType === bt.success ? 18 : 14
      },
      children: [Py[t.repaintRewardType], " ", e.jsx("img", {
        alt: "img",
        className: Ks.image,
        src: Pi
      })]
    })
  },
  By = () => {
    const t = c(n => n.main.flyingRewards);
    return e.jsx("div", {
      className: Ks.layout,
      children: e.jsx("div", {
        className: Ks.container,
        children: t.map(n => e.jsx(Sy, {
          item: n
        }, n.id))
      })
    })
  },
  Ty = "_layout_1v16g_1",
  Ey = "_container_1v16g_5",
  ky = "_close_button_1v16g_14",
  Dy = "_title_container_1v16g_22",
  Ry = "_image_container_1v16g_28",
  My = "_image_1v16g_28",
  Uy = "_first_image_1v16g_45",
  Qy = "_second_image_1v16g_50",
  Oy = "_text_container_1v16g_55",
  Fy = "_button_container_1v16g_60",
  zy = "_button_1v16g_60",
  Me = {
    layout: Ty,
    container: Ey,
    close_button: ky,
    title_container: Dy,
    image_container: Ry,
    image: My,
    first_image: Uy,
    second_image: Qy,
    text_container: Oy,
    button_container: Fy,
    button: zy
  },
  Gy = "_layout_1df7o_1",
  Ly = "_container_1df7o_14",
  Hy = "_move_in_1df7o_1",
  Yi = {
    layout: Gy,
    container: Ly,
    move_in: Hy
  },
  We = ({
    children: t,
    show: n,
    onPointerUp: s = () => {},
    backgroundColor: a
  }) => {
    const [i, o] = A.useState(!1), [r, l] = Ls(() => ({
      from: {
        opacity: 0
      },
      config: {
        duration: 300,
        easing: Hs.easeOutCubic
      }
    }));
    return A.useEffect(() => {
      n ? (o(!0), l.start({
        opacity: 1
      })) : n || l.start({
        opacity: 0,
        onResolve: () => o(!1)
      })
    }, [n]), i ? e.jsx(qs.div, {
      className: Yi.layout,
      style: {
        ...r,
        backgroundColor: a
      },
      onPointerUp: s,
      children: e.jsx("div", {
        className: Yi.container,
        children: t
      })
    }) : null
  },
  qy = () => {
    const t = _(),
      n = c(o => o.main.referrerSquadId),
      [s, a] = A.useState(null),
      i = c(o => o.user.user);
    return A.useEffect(() => {
      if (n) try {
        (async () => {
          const r = await X.getSquadInfo({
            id: n
          });
          r.data.squad && r.data.squad.id !== null && a(r.data.squad)
        })()
      } catch {}
    }, [n]), e.jsx(We, {
      show: n !== null,
      onPointerUp: () => {
        t(Xa(null))
      },
      children: e.jsx("div", {
        className: Me.layout,
        onPointerUp: o => {
          o.stopPropagation()
        },
        children: e.jsxs("div", {
          className: Me.container,
          children: [e.jsx("div", {
            className: Me.close_button,
            onPointerUp: () => {
              t(Xa(null))
            },
            children: e.jsx(I, {
              size: 26,
              children: ""
            })
          }), e.jsx("div", {
            className: Me.title_container,
            children: e.jsx("span", {
              children: "Friend's squad invitation"
            })
          }), e.jsxs("div", {
            className: Me.image_container,
            children: [e.jsx("img", {
              alt: "img",
              className: `${Me.image} ${Me.first_image}`,
              src: s === null ? zt : s.logo
            }), e.jsx("img", {
              alt: "img",
              className: `${Me.image} ${Me.second_image}`,
              src: i === null || i.userPic === "" ? it : i.userPic
            })]
          }), e.jsx("div", {
            className: Me.text_container,
            children: e.jsxs("span", {
              children: ["Your friend is a part of the", " ", s === null ? "" : `"${s.name}"`, " squad. Ready to team up?"]
            })
          }), e.jsx("div", {
            className: Me.button_container,
            children: e.jsxs("button", {
              className: Me.button,
              onPointerUp: () => {
                s !== null && W(`https://t.me/${It}?startapp=${btoa(`id=${s.id}`)}`)
              },
              children: [s !== null && `Join ${s.name} squad`, s === null && "Loading squad info..."]
            })
          })]
        })
      })
    })
  },
  Yy = "_layout_srn55_1",
  Vy = "_container_srn55_12",
  Wy = "_buttons_container_srn55_18",
  Qa = {
    layout: Yy,
    container: Vy,
    buttons_container: Wy
  },
  Xy = "_container_srbwq_1",
  Jy = {
    container: Xy
  },
  Zy = ({
    show: t,
    setShow: n
  }) => t ? Ge.createPortal(e.jsx("div", {
    style: {
      position: "fixed",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: "rgba(0,0,0,0.0)",
      zIndex: 995
    },
    onPointerUp: () => {
      n(!1)
    }
  }), document.body) : null,
  Ky = 1,
  Vi = 0,
  Wi = 100,
  $y = ({
    rtl: t = !0
  }) => {
    const n = _(),
      s = c(o => o.template.opacity),
      [a, i] = A.useState(!1);
    return e.jsxs("div", {
      style: {
        display: "flex",
        alignItems: "center",
        height: "100%",
        flexDirection: "column",
        pointerEvents: "all"
      },
      onPointerDown: () => {
        i(!0)
      },
      onPointerUp: () => {
        i(!1)
      },
      children: [e.jsx(Zy, {
        show: a,
        setShow: i
      }), e.jsx(Qt.Range, {
        direction: Qt.Direction.Up,
        values: s,
        step: Ky,
        min: Vi,
        max: Wi,
        onChange: o => {
          n(P_(o)), b.mainImage.worldTemplate.setOpacity(Number(o[0])), b.mainImage.tournamentTemplates.setOpacity(Number(o[0]))
        },
        renderTrack: ({
          props: o,
          children: r
        }) => e.jsx("div", {
          onMouseDown: o.onMouseDown,
          onTouchStart: o.onTouchStart,
          style: {
            ...o.style,
            flexGrow: 1,
            width: "38px",
            display: "flex",
            height: "150px",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "var(--border-radius)",
            backgroundColor: "var(--btn-header-bg-color)",
            paddingBlock: "18px",
            boxSizing: "border-box"
          },
          children: e.jsx("div", {
            ref: o.ref,
            style: {
              width: "4px",
              height: "100%",
              borderRadius: "4px",
              background: Qt.getTrackBackground({
                values: s,
                colors: ["var(--font-secondary-color)", "var(--font-secondary-color)"],
                min: Vi,
                max: Wi,
                direction: Qt.Direction.Up,
                rtl: t
              }),
              alignSelf: "center"
            },
            children: r
          })
        }),
        renderThumb: ({
          props: o,
          isDragged: r
        }) => A.createElement("div", {
          ...o,
          key: o.key,
          style: {
            ...o.style,
            height: "18px",
            width: "18px",
            borderRadius: "6px",
            backgroundColor: "var(--app-primary-color)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }
        })
      })]
    })
  },
  ew = () => {
    const t = c(s => s.tournament.activeTournamentTemplate),
      n = c(s => s.template.active) === Re.world;
    return t === null && !n ? null : e.jsx("div", {
      className: Jy.container,
      children: e.jsx($y, {})
    })
  },
  tw = "_button_xsy81_2",
  nw = "_image_xsy81_19",
  sw = "_enabled_xsy81_25",
  aw = "_gray_xsy81_29",
  Oa = {
    button: tw,
    image: nw,
    enabled: sw,
    gray: aw
  },
  iw = () => {
    const t = _(),
      n = c(r => r.template.worldTemplate),
      s = c(r => r.template.active) === Re.world,
      a = c(lt),
      i = c(r => r.tournament.periodsStatus),
      o = [Oa.button];
    return s && o.push(Oa.enabled), n === null || a || i !== p.fulfilled ? null : e.jsx("button", {
      className: o.join(" "),
      onPointerUp: () => {
        t(s ? yi() : I_(Re.world))
      },
      children: e.jsx("img", {
        alt: "img",
        className: Oa.image,
        src: n.url
      })
    })
  },
  ow = () => e.jsx(ae.Fragment, {
    children: e.jsx("div", {
      className: Qa.layout,
      children: e.jsx("div", {
        className: Qa.container,
        children: e.jsxs("div", {
          className: Qa.buttons_container,
          children: [e.jsx(iw, {}), e.jsx(ew, {})]
        })
      })
    })
  }),
  rw = "_layout_swx97_1",
  cw = {
    layout: rw
  },
  lw = "_layout_1a5xo_1",
  dw = "_container_1a5xo_5",
  Xi = {
    layout: lw,
    container: dw
  },
  uw = () => {
    const t = _(),
      n = c(i => i.main.fastMode);
    if (!c(i => i.canvas.coords)) return null;
    const a = [S.button, S.fast_type_button, S.shop_button];
    return n && a.push(S.fast_mode_button_enabled), e.jsx("button", {
      className: a.join(" "),
      onPointerUp: () => {
        t(n ? ma() : hr())
      },
      children: e.jsx("img", {
        alt: "img",
        className: S.button_image,
        src: To
      })
    })
  },
  mw = () => {
    const t = _(),
      n = c(l => l.canvas.coords),
      s = c(l => l.main.fastMode),
      a = c(l => l.main.currentFastType),
      i = c(l => l.shop.available);
    if (!n || !(i[4] > 0)) return null;
    const r = [S.button, S.shop_button, S.fast_type_button];
    return e.jsxs("button", {
      className: r.join(" "),
      onPointerUp: () => {
        if (s || a) return;
        const l = b.mainImage.getPixelColor({
          coords: n
        });
        t(li(l))
      },
      children: [e.jsx("div", {
        className: S.disabled_button_cover,
        style: {
          opacity: s || a ? .7 : 0
        }
      }), e.jsx("img", {
        alt: "img",
        className: S.button_image,
        src: Bo
      })]
    })
  },
  Aw = () => {
    const t = _(),
      n = [S.button, S.shop_button, S.fast_type_button],
      s = [S.button_image];
    return e.jsx("button", {
      className: n.join(" "),
      style: {
        borderRadius: "0 var(--border-radius) var(--border-radius) 0"
      },
      onPointerUp: () => {
        t(ot(13)), t(rt())
      },
      children: e.jsx("img", {
        alt: "img",
        className: s.join(" "),
        src: mn
      })
    })
  },
  pw = () => e.jsx("div", {
    className: Xi.layout,
    children: e.jsxs("div", {
      className: Xi.container + " " + S.container__bottom,
      children: [e.jsx(tf, {}), e.jsx(K_, {}), e.jsx(Cf, {}), e.jsx(A_, {}), e.jsx(uw, {}), e.jsx(mw, {}), e.jsx(Aw, {})]
    })
  }),
  hw = ({
    open: t,
    setOpen: n,
    active: s,
    setActive: a
  }) => {
    const i = c(o => o.color.active);
    return e.jsx("div", {
      className: le.active_color,
      style: {
        backgroundColor: i
      },
      onPointerUp: o => {
        o.stopPropagation(), t && s === 1 ? n(!1) : t && s === 2 ? a(1) : (a(1), n(!0))
      }
    })
  },
  gw = ({
    open: t,
    setOpen: n,
    active: s,
    setActive: a
  }) => {
    const i = _(),
      o = [le.info_button];
    return t && s === 2 && o.push(le.info_button_active), e.jsx("div", {
      className: o.join(" "),
      onPointerUp: r => {
        r.stopPropagation(), i(Yn({
          dataSource: $e.userFromPixelInfo
        }))
      },
      children: "info"
    })
  },
  _w = () => {
    const [t, n] = A.useState(!0), [s, a] = A.useState(!1), i = c(r => r.canvas.coords), o = A.useRef(null);
    return A.useEffect(() => () => {
      o.current !== null && (clearTimeout(o.current), o.current = null)
    }, []), e.jsxs("div", {
      className: le.pixel_info_container,
      children: [t && e.jsxs("div", {
        className: le.pixel_info_text,
        onPointerUp: async r => {
          var d, m;
          r.stopPropagation(), await Hn(`${Bt}?startapp=x${i.x}_y${i.y}`) ? (m = (d = window.Telegram.WebApp) == null ? void 0 : d.HapticFeedback) == null || m.notificationOccurred("success") : a(!0), n(!1), o.current = setTimeout(() => {
            a(!1), n(!0), o.current = null
          }, 4e3)
        },
        children: [`${i.x}, ${i.y}`, " ", e.jsx(I, {
          size: 14,
          children: ""
        })]
      }), !t && e.jsx("div", {
        className: le.pixel_info_text,
        onPointerUp: async r => {
          r.stopPropagation(), a(!1), n(!0)
        },
        children: s ? "Failure" : "Pixel link copied!"
      })]
    })
  },
  fw = "_expandable_panel_layout_1v9vd_1",
  xw = "_expandable_panel_1v9vd_1",
  vw = "_divider_1v9vd_16",
  yw = "_divider_spacer_1v9vd_24",
  ww = "_divider_pointer_1v9vd_28",
  Mn = {
    expandable_panel_layout: fw,
    expandable_panel: xw,
    divider: vw,
    divider_spacer: yw,
    divider_pointer: ww
  },
  jw = ({
    active: t
  }) => {
    const n = t === 1 ? "38px" : "54px",
      s = t === 1 ? 0 : 1;
    return e.jsxs("div", {
      className: Mn.divider,
      children: [e.jsx("div", {
        className: Mn.divider_spacer,
        style: {
          flexGrow: s
        }
      }), e.jsx("div", {
        className: Mn.divider_pointer,
        style: {
          width: n
        }
      })]
    })
  },
  bw = t => {
    const n = A.useRef(),
      s = A.useRef();
    return A.useEffect(() => {
      n.current = t
    }), A.useEffect(() => {
      const a = i => {
        s.current && n.current && !s.current.contains(i.target) && n.current(i)
      };
      return window.addEventListener("pointerup", a), () => {
        window.removeEventListener("pointerup", a)
      }
    }, []), s
  },
  Nw = "_container_1vu8i_1",
  Cw = "_owner_1vu8i_10",
  Iw = "_id_1vu8i_14",
  Pw = "_date_1vu8i_19",
  Sw = "_avatar_container_1vu8i_24",
  Bw = "_avatar_1vu8i_24",
  Tw = "_squad_avatar_container_1vu8i_36",
  Ew = "_text_container_1vu8i_48",
  kw = "_dot_1vu8i_54",
  Dw = "_user_name_1vu8i_59",
  Rw = "_squad_name_1vu8i_64",
  Ae = {
    container: Nw,
    owner: Cw,
    id: Iw,
    date: Pw,
    avatar_container: Sw,
    avatar: Bw,
    squad_avatar_container: Tw,
    text_container: Ew,
    dot: kw,
    user_name: Dw,
    squad_name: Rw
  },
  Mw = "_skeleton_k7kmi_1",
  Uw = "_loading_k7kmi_1",
  Qw = {
    skeleton: Mw,
    loading: Uw
  },
  tt = ({
    children: t,
    show: n
  }) => n ? e.jsx("div", {
    className: Qw.skeleton,
    children: e.jsx("div", {
      style: {
        opacity: 0
      },
      children: t
    })
  }) : null,
  Ow = () => {
    const t = c(o => o.canvas.pixelInfo),
      n = c(o => o.canvas.getPixelInfoFetchStatus),
      s = t !== null && n === p.fulfilled,
      a = () => qe(new Date(t.pixel.dateObtained));
    if (!s) return e.jsx(tt, {
      show: !s,
      children: e.jsx("span", {
        className: Ae.date,
        children: "29 august at 18:00"
      })
    });
    const i = a();
    return e.jsx("div", {
      children: e.jsx("span", {
        className: Ae.date,
        children: i
      })
    })
  },
  fn = ({
    address: t,
    limit: n = 0,
    display: s = null
  }) => {
    const a = c(fi);
    if (!t || t === "") return e.jsx("span", {
      children: "Anon"
    });
    let i = ol(s === null ? t : s);
    return n > 0 && (i = Ln(i, n)), e.jsx("span", {
      className: Oo.link,
      onPointerUp: o => {
        o.stopPropagation(), a ? W(`https://t.me/${Bi(t)}`) : Tt(`https://t.me/${Bi(t)}`)
      },
      children: i
    })
  },
  Fw = () => {
    const t = c(r => r.canvas.pixelInfo),
      n = c(r => r.canvas.getPixelInfoFetchStatus),
      s = t !== null && n === p.fulfilled;
    if (!s) return e.jsx(tt, {
      show: !s,
      children: e.jsx("div", {
        className: Ae.text_container,
        children: e.jsx("span", {
          className: Ae.user_name,
          children: "No name • @notpixel"
        })
      })
    });
    const i = Ln(t.owner.firstName || "No name");
    return (() => {
      const r = t.owner.userName && t.owner.userName !== "";
      return {
        address: r ? t.owner.userName : "Anon",
        hasAddress: r
      }
    })(), e.jsx("div", {
      className: Ae.text_container,
      children: e.jsx("span", {
        className: Ae.user_name,
        children: i
      })
    })
  },
  zw = () => {
    var i, o;
    const t = c(r => r.canvas.pixelInfo),
      n = c(r => r.canvas.getPixelInfoFetchStatus),
      s = t !== null && n === p.fulfilled;
    return s ? ((o = (i = t == null ? void 0 : t.owner) == null ? void 0 : i.squad) == null ? void 0 : o.name) && t.owner.squad.name !== null ? e.jsxs("div", {
      className: Ae.text_container,
      children: [e.jsx("span", {
        className: Ae.squad_name,
        children: t.owner.squad.name
      }), e.jsx("span", {
        className: Ae.dot,
        children: "•"
      }), e.jsx(fn, {
        address: `${It}?startapp=${btoa(`id=${t.owner.squad.id}`)}`,
        display: t.owner.squad.slug,
        limit: 18
      })]
    }) : e.jsx("div", {
      className: Ae.text_container,
      children: e.jsx("span", {
        className: Ae.squad_name,
        children: "No squad"
      })
    }) : e.jsx(tt, {
      show: !s,
      children: e.jsx("div", {
        className: Ae.text_container,
        children: e.jsx("span", {
          className: Ae.squad_name,
          children: "Loading..."
        })
      })
    })
  },
  Gw = () => {
    var i, o;
    const t = c(r => r.canvas.pixelInfo),
      n = c(r => r.canvas.getPixelInfoFetchStatus),
      s = t !== null && n === p.fulfilled;
    let a = it;
    return s && t.owner.userPic && t.owner.userPic !== "" && (a = t.owner.userPic), e.jsxs("div", {
      className: Ae.avatar_container,
      children: [e.jsx("img", {
        alt: "avatar",
        className: Ae.avatar,
        src: a
      }), e.jsx("div", {
        className: Ae.squad_avatar_container,
        children: e.jsx(Ii, {
          src: ((o = (i = t == null ? void 0 : t.owner) == null ? void 0 : i.squad) == null ? void 0 : o.logo) || ""
        })
      })]
    })
  },
  Lw = () => {
    const t = _(),
      n = c(i => i.canvas.pixelInfo),
      s = c(i => i.canvas.getPixelInfoFetchStatus),
      a = n !== null && s === p.fulfilled;
    return e.jsxs("div", {
      children: [a && e.jsxs("span", {
        className: Ae.owner,
        children: [" ", "Owner "]
      }), a && n.owner.id !== 0 && e.jsxs("span", {
        className: Ae.id,
        onPointerUp: async i => {
          i.preventDefault(), i.stopPropagation();
          try {
            await Hn(`${n.owner.id}`), await t(z({
              id: performance.now(),
              text: "Copied!"
            }))
          } catch {
            await t(z({
              id: performance.now(),
              text: "Can't copy!"
            }))
          }
        },
        children: [" ", n.owner.id]
      }), e.jsx(tt, {
        show: !a,
        children: e.jsx("span", {
          className: Ae.owner,
          children: "Owner"
        })
      })]
    })
  },
  Hw = () => e.jsxs("div", {
    className: Ae.container,
    children: [e.jsx(Lw, {}), e.jsx(Ow, {}), e.jsx(Gw, {}), e.jsx(Fw, {}), e.jsx(zw, {})]
  }),
  qw = "_category_text_epppt_1",
  Yw = "_latest_used_container_epppt_8",
  Vw = "_color_line_epppt_15",
  Ww = "_color_item_epppt_22",
  Xw = "_pipette_container_epppt_30",
  Jw = "_child_scale_epppt_48",
  Hr = {
    category_text: qw,
    latest_used_container: Yw,
    color_line: Vw,
    color_item: Ww,
    pipette_container: Xw,
    child_scale: Jw
  },
  Zw = ({
    color: t
  }) => {
    const [n, s] = A.useState(!1), a = A.useRef(null), i = _();
    return e.jsx("div", {
      style: {
        backgroundColor: t,
        transform: n ? "scale(1.2)" : ""
      },
      className: Hr.color_item,
      onPointerUp: () => {
        var o, r;
        s(!0), a.current !== null && clearTimeout(a.current), a.current = setTimeout(() => {
          s(!1)
        }, 200), i(li(t)), (r = (o = window.Telegram.WebApp) == null ? void 0 : o.HapticFeedback) == null || r.notificationOccurred("success")
      }
    })
  },
  qr = ({
    colors: t
  }) => e.jsx("div", {
    className: Hr.color_line,
    children: t.map((n, s) => e.jsx(Zw, {
      color: n
    }, `${n}_${s}`))
  }),
  Kw = "_unlock_button_fc8qr_1",
  $w = "_stars_text_fc8qr_13",
  Ji = {
    unlock_button: Kw,
    stars_text: $w
  },
  ej = () => e.jsxs("div", {
    className: Ji.unlock_button,
    children: [e.jsx("span", {
      children: "Unlock all colors for"
    }), e.jsxs("span", {
      className: Ji.stars_text,
      children: [e.jsx(An, {}), e.jsx("span", {
        children: "5000"
      })]
    })]
  }),
  tj = () => {
    c(n => n.color.latest);
    const t = c(n => n.color.basic);
    return e.jsxs(ae.Fragment, {
      children: [e.jsx(qr, {
        colors: t
      }), e.jsx(ej, {})]
    })
  },
  nj = ({
    getData: t
  }) => {
    const n = _(),
      s = c(i => i.canvas.coords),
      a = c(i => i.main.showUserAndSquadPopup);
    return A.useEffect(() => {
      if (s !== null && (t || a)) {
        const i = _t(s);
        n(da.getPixelInfo({
          id: i
        }))
      }
    }, [s, t, a, n]), null
  },
  sj = ({
    open: t,
    setOpen: n,
    active: s
  }) => {
    const a = bw(() => {
        s !== 2 && n(!1)
      }),
      [i, o] = Ls(() => ({
        from: {
          height: 0,
          opacity: 0
        },
        config: {
          duration: 400,
          easing: Hs.easeOutCubic
        }
      })),
      r = A.useRef(null);
    return A.useEffect(() => {
      if (t !== null && r.current !== null) {
        const l = t ? r.current.offsetHeight : 0;
        o.start({
          height: t ? l : 0,
          opacity: t ? 1 : 0
        })
      }
    }, [t, s, r, o]), e.jsxs(qs.div, {
      ref: a,
      className: Mn.expandable_panel_layout,
      style: {
        ...i
      },
      children: [e.jsx(nj, {
        getData: s === 2 && t
      }), e.jsxs("div", {
        ref: r,
        className: Mn.expandable_panel,
        children: [e.jsx(jw, {
          active: s
        }), s === 1 && e.jsx(tj, {}), s === 2 && e.jsx(Hw, {})]
      })]
    })
  },
  aj = () => c(Ve) ? null : e.jsxs("button", {
    className: le.button,
    onPointerUp: () => {
      W("https://t.me/notpixel")
    },
    children: [e.jsx("img", {
      alt: "tg_logo",
      className: le.tg_logo,
      src: qn
    }), e.jsx("span", {
      className: le.button_text,
      children: "Go to app for paint"
    })]
  }),
  ij = () => e.jsx(V_, {}),
  oj = () => c(Ve) ? e.jsx(ij, {}) : e.jsx(aj, {}),
  rj = () => {
    const t = c(s => s.main.fastMode),
      n = c(s => s.main.currentFastType);
    return e.jsx("div", {
      className: le.fast_mode_blocker,
      style: {
        pointerEvents: t || n ? "all" : "none",
        opacity: t || n ? .7 : 0
      }
    })
  },
  cj = () => {
    const [t, n] = A.useState(!1), [s, a] = A.useState(1), i = c(r => r.main.fastMode), o = c(r => r.main.currentFastType);
    return A.useEffect(() => {
      (i || o) && n(!1)
    }, [i, o]), e.jsx("div", {
      className: le.order_panel,
      onPointerUp: r => {
        r.stopPropagation()
      },
      children: e.jsxs("div", {
        className: le.content,
        children: [e.jsx(rj, {}), e.jsxs("div", {
          className: le.info,
          children: [e.jsx(hw, {
            open: t,
            setOpen: n,
            active: s,
            setActive: a
          }), e.jsx(_w, {}), e.jsx(gw, {
            open: t,
            setOpen: n,
            active: s,
            setActive: a
          })]
        }), e.jsx(sj, {
          open: t,
          setOpen: n,
          active: s
        }), e.jsx(oj, {})]
      })
    })
  },
  lj = () => e.jsx(ae.Fragment, {
    children: e.jsx(cj, {})
  }),
  dj = "_panel_1urz2_1",
  uj = "_content_1urz2_16",
  Zi = {
    panel: dj,
    content: uj
  },
  Ki = ({
    text: t
  }) => e.jsx("div", {
    className: Zi.panel,
    children: e.jsx("div", {
      className: Zi.content,
      children: t
    })
  }),
  mj = () => {
    const t = c(a => a.canvas.coords),
      n = c(ct),
      s = c(Qo);
    return t === null ? e.jsx(Ki, {
      text: "A-yo! Zoom, tap, paint"
    }) : (s !== "mobile" || n === "unknown") && !gt.isDev ? e.jsx(Ki, {
      text: "Use telegram app on phone for painting"
    }) : e.jsxs("div", {
      className: cw.layout,
      children: [e.jsx(pw, {}), e.jsx(lj, {})]
    })
  },
  Aj = () => e.jsxs(e.Fragment, {
    children: [e.jsx(yy, {}), e.jsx(Zv, {}), e.jsx(ow, {}), e.jsx(dy, {}), e.jsx(mj, {}), e.jsx(By, {}), e.jsx(qy, {}), e.jsx(wy, {}), e.jsx(uy, {})]
  }),
  pj = "_page_title_13ybj_1",
  hj = "_container_13ybj_9",
  gj = "_item_13ybj_13",
  _j = "_active_13ybj_18",
  fj = "_info_container_13ybj_34",
  xj = "_dot_13ybj_40",
  vj = "_title_text_13ybj_46",
  yj = "_capitalize_13ybj_50",
  wj = "_hint_text_13ybj_54",
  jj = "_date_text_13ybj_61",
  bj = "_value_container_13ybj_66",
  Nj = "_value_text_13ybj_74",
  Cj = "_positive_color_13ybj_78",
  Ij = "_negative_color_13ybj_85",
  Pj = "_last_text_13ybj_92",
  w = {
    page_title: pj,
    container: hj,
    item: gj,
    active: _j,
    info_container: fj,
    dot: xj,
    title_text: vj,
    capitalize: yj,
    hint_text: wj,
    date_text: jj,
    value_container: bj,
    value_text: Nj,
    positive_color: Cj,
    negative_color: Ij,
    last_text: Pj
  },
  Sj = ({
    item: t
  }) => {
    const n = te(),
      s = Zs(t.details.pixel),
      a = _();
    return e.jsxs("div", {
      className: `${w.item} ${w.active}`,
      onPointerUp: () => {
        n.push("/"), b.viewport.viewport.animate({
          scale: 25,
          time: 400,
          position: s
        }), b.mainImage.selectedPixel.draw(s), a(Gt(s)), n.push("/")
      },
      children: [e.jsxs("div", {
        className: w.info_container,
        children: [e.jsxs("div", {
          children: [e.jsx("span", {
            className: w.title_text,
            children: "Paint Pixel"
          }), e.jsx("span", {
            className: w.hint_text,
            children: `${s.x}, ${s.y}`
          })]
        }), e.jsx("div", {
          className: w.date_text,
          children: e.jsx("span", {
            children: qe(new Date(t.dateTime))
          })
        })]
      }), e.jsx("div", {
        className: w.value_container,
        children: e.jsxs("span", {
          className: `${w.value_text} ${w.positive_color}`,
          children: ["+", new Intl.NumberFormat("fr", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          }).format(Math.abs(t.balanceChange)).replace(",", ".")]
        })
      })]
    })
  },
  Bj = ({
    item: t
  }) => {
    const n = te(),
      s = {
        x: t.details.x,
        y: t.details.y
      },
      a = _();
    return e.jsxs("div", {
      className: `${w.item} ${w.active}`,
      onPointerUp: () => {
        n.push("/"), b.viewport.viewport.animate({
          scale: 25,
          time: 400,
          position: s
        }), b.mainImage.selectedPixel.draw(s), a(Gt(s)), n.push("/")
      },
      children: [e.jsxs("div", {
        className: w.info_container,
        children: [e.jsxs("div", {
          children: [e.jsx("span", {
            className: w.title_text,
            children: "Pixel Sale"
          }), e.jsx("span", {
            className: w.hint_text,
            children: `${s.x}, ${s.y}`
          }), e.jsx("span", {
            className: w.dot,
            children: "•"
          }), e.jsx(fn, {
            address: t.details.buyer
          })]
        }), e.jsx("div", {
          className: w.date_text,
          children: e.jsx("span", {
            children: qe(new Date(t.dateTime))
          })
        })]
      }), e.jsx("div", {
        className: w.value_container,
        children: e.jsxs("span", {
          className: `${w.value_text} ${w.positive_color}`,
          children: ["+", new Intl.NumberFormat("fr", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          }).format(t.balanceChange).replace(",", ".")]
        })
      })]
    })
  },
  Tj = ({
    item: t
  }) => e.jsxs("div", {
    className: w.item,
    children: [e.jsxs("div", {
      className: w.info_container,
      children: [e.jsx("div", {
        children: e.jsx("span", {
          className: w.title_text,
          children: "Claim"
        })
      }), e.jsx("div", {
        className: w.date_text,
        children: e.jsx("span", {
          children: qe(new Date(t.dateTime))
        })
      })]
    }), e.jsx("div", {
      className: w.value_container,
      children: e.jsxs("span", {
        className: `${w.value_text} ${w.positive_color}`,
        children: ["+", t.balanceChange.toFixed(2)]
      })
    })]
  }),
  Ej = ({
    item: t
  }) => e.jsxs("div", {
    className: w.item,
    children: [e.jsxs("div", {
      className: w.info_container,
      children: [e.jsxs("div", {
        children: [e.jsx("span", {
          className: w.title_text,
          children: t.details.type
        }), e.jsx("span", {
          className: w.hint_text,
          children: "Boost"
        })]
      }), e.jsx("div", {
        className: w.date_text,
        children: e.jsx("span", {
          children: qe(new Date(t.dateTime))
        })
      })]
    }), e.jsx("div", {
      className: w.value_container,
      children: e.jsx("span", {
        className: `${w.value_text} ${w.negative_color}`,
        children: t.balanceChange
      })
    })]
  }),
  kj = ({
    item: t
  }) => e.jsxs("div", {
    className: w.item,
    children: [e.jsxs("div", {
      className: w.info_container,
      children: [e.jsxs("div", {
        children: [e.jsx("span", {
          className: `${w.title_text} ${w.capitalize}`,
          children: `${t.details.from} > ${t.details.to}`
        }), e.jsx("span", {
          className: w.hint_text,
          children: "League"
        })]
      }), e.jsx("div", {
        className: w.date_text,
        children: e.jsx("span", {
          children: qe(new Date(t.dateTime))
        })
      })]
    }), e.jsx("div", {
      className: w.value_container
    })]
  }),
  Dj = ({
    item: t
  }) => e.jsxs("div", {
    className: w.item,
    children: [e.jsxs("div", {
      className: w.info_container,
      children: [e.jsxs("div", {
        children: [e.jsx("span", {
          className: w.title_text,
          children: "Referral"
        }), e.jsx("span", {
          className: w.dot,
          children: "•"
        }), e.jsx(fn, {
          address: t.details.name
        })]
      }), e.jsx("div", {
        className: w.date_text,
        children: e.jsx("span", {
          children: qe(new Date(t.dateTime))
        })
      })]
    }), e.jsx("div", {
      className: w.value_container,
      children: e.jsxs("span", {
        className: `${w.value_text} ${w.positive_color}`,
        children: ["+", t.balanceChange]
      })
    })]
  }),
  Rj = ({
    item: t
  }) => e.jsxs("div", {
    className: w.item,
    children: [e.jsxs("div", {
      className: w.info_container,
      children: [e.jsxs("div", {
        children: [e.jsx("span", {
          className: w.title_text,
          children: `${t.details.type} ${t.details.round_id?"for round №"+t.details.round_id:""}`
        }), e.jsx("span", {
          className: w.hint_text,
          children: "Special"
        })]
      }), e.jsx("div", {
        className: w.date_text,
        children: e.jsx("span", {
          children: qe(new Date(t.dateTime))
        })
      })]
    }), e.jsx("div", {
      className: w.value_container,
      children: e.jsxs("span", {
        className: `${w.value_text} ${t.balanceChange>=0?w.positive_color:w.negative_color}`,
        children: [t.balanceChange >= 0 ? "+" : "", t.balanceChange]
      })
    })]
  }),
  Mj = ({
    item: t
  }) => e.jsxs("div", {
    className: w.item,
    children: [e.jsxs("div", {
      className: w.info_container,
      children: [e.jsxs("div", {
        children: [e.jsx("span", {
          className: `${w.title_text} ${w.capitalize}`,
          children: `${t.details.type}`
        }), e.jsxs("span", {
          className: w.hint_text,
          children: [t.details.quantity, " pc."]
        })]
      }), e.jsx("div", {
        className: w.date_text,
        children: e.jsx("span", {
          children: qe(new Date(t.dateTime))
        })
      })]
    }), e.jsxs("div", {
      className: w.value_container,
      children: ["-", t.details.price, " ", e.jsx(An, {
        fontSize: 14
      })]
    })]
  }),
  Uj = ({
    item: t
  }) => e.jsxs("div", {
    className: w.item,
    children: [e.jsxs("div", {
      className: w.info_container,
      children: [e.jsxs("div", {
        children: [e.jsx("span", {
          className: w.title_text,
          children: t.details.type
        }), e.jsx("span", {
          className: w.hint_text,
          children: "Task"
        })]
      }), e.jsx("div", {
        className: w.date_text,
        children: e.jsx("span", {
          children: qe(new Date(t.dateTime))
        })
      })]
    }), e.jsx("div", {
      className: w.value_container,
      children: e.jsxs("span", {
        className: `${w.value_text} ${w.positive_color}`,
        children: ["+", t.balanceChange]
      })
    })]
  }),
  Qj = ({
    item: t
  }) => e.jsxs("div", {
    className: w.item,
    children: [e.jsxs("div", {
      className: w.info_container,
      children: [e.jsxs("div", {
        children: [e.jsx("span", {
          className: w.title_text,
          children: "Ref reward"
        }), e.jsx("span", {
          className: w.hint_text,
          children: t.details.type
        })]
      }), e.jsx("div", {
        className: w.date_text,
        children: e.jsx("span", {
          children: qe(new Date(t.dateTime))
        })
      })]
    }), e.jsx("div", {
      className: w.value_container,
      children: e.jsxs("span", {
        className: `${w.value_text} ${w.positive_color}`,
        children: ["+", t.balanceChange.toFixed(2)]
      })
    })]
  }),
  Oj = ({
    item: t
  }) => t.action === "buy pixel" ? e.jsx(Sj, {
    item: t
  }) : t.action === "sell pixel" ? e.jsx(Bj, {
    item: t
  }) : t.action === "claim" ? e.jsx(Tj, {
    item: t
  }) : t.action === "get boost" ? e.jsx(Ej, {
    item: t
  }) : t.action === "league transfer" ? e.jsx(kj, {
    item: t
  }) : t.action === "referral" ? e.jsx(Dj, {
    item: t
  }) : t.action === "special" ? e.jsx(Rj, {
    item: t
  }) : t.action === "purchase" ? e.jsx(Mj, {
    item: t
  }) : t.action === "complete task" ? e.jsx(Uj, {
    item: t
  }) : t.action === "referrer reward" ? e.jsx(Qj, {
    item: t
  }) : (console.log("unknown action: ", t.action), null),
  Fj = () => {
    const t = _(),
      n = c(a => a.history.list),
      s = c(a => a.history.status);
    return A.useEffect(() => {
      t(vi.get({
        offset: 0,
        limit: 50
      }))
    }, []), e.jsxs("div", {
      className: w.container,
      children: [n.map((a, i) => e.jsx(Oj, {
        item: a
      }, i)), s === p.fulfilled && n.length >= 50 && e.jsx("div", {
        className: w.last_text,
        children: e.jsx("span", {
          children: "Last 50 events"
        })
      })]
    })
  },
  zj = () => e.jsxs(ue, {
    children: [e.jsx("h1", {
      className: w.page_title,
      children: "History"
    }), e.jsx(Fj, {})]
  }),
  Gj = "_text_layout_1xggq_1",
  Lj = "_text_1xggq_1",
  Hj = "_button_layout_1xggq_14",
  qj = "_button_layout_placeholder_1xggq_26",
  Yj = "_button_1xggq_14",
  jn = {
    text_layout: Gj,
    text: Lj,
    button_layout: Hj,
    button_layout_placeholder: qj,
    button: Yj
  },
  Vj = () => e.jsxs(ue, {
    children: [e.jsx("div", {
      className: jn.text_layout,
      children: e.jsxs("span", {
        className: jn.text,
        children: [e.jsx("h1", {
          children: "Rules"
        }), e.jsx("p", {
          children: "Follow Telegram's content rules and policies whenever possible. Targeted hate or harassment of private individuals and protected groups are violations of our policy and will be removed. In addition, posts, comments, and imagery that are hateful, graphic, sexually-explicit, and/or offensive are violations of our policy and will be removed."
        }), e.jsx("p", {
          children: "Use of third-party software, code reversal, any automation of canvas painting, use of bugs - may result in user lockout without the right to recover."
        }), e.jsx("p", {
          children: "Lay off the pineapple pizza."
        }), e.jsx("p", {
          children: "Be creative and have fun, Pixels."
        })]
      })
    }), e.jsx("div", {
      className: jn.button_layout_placeholder
    }), e.jsx("div", {
      className: jn.button_layout,
      children: e.jsxs("button", {
        className: jn.button,
        onPointerUp: () => {
          W("https://t.me/notpixel_channel")
        },
        children: [e.jsx("img", {
          alt: "tg_logo",
          src: qn
        }), "Telegram Channel"]
      })
    })]
  }),
  Wj = "_text_layout_1h04i_1",
  Xj = "_text_1h04i_1",
  Jj = "_button_layout_1h04i_14",
  Zj = "_button_layout_placeholder_1h04i_26",
  Kj = "_button_1h04i_14",
  bn = {
    text_layout: Wj,
    text: Xj,
    button_layout: Jj,
    button_layout_placeholder: Zj,
    button: Kj
  },
  $j = () => e.jsxs(ue, {
    children: [e.jsx("div", {
      className: bn.text_layout,
      children: e.jsxs("span", {
        className: bn.text,
        children: [e.jsx("h1", {
          children: "Awards"
        }), e.jsx("p", {
          children: "There will be something here, but not now."
        })]
      })
    }), e.jsx("div", {
      className: bn.button_layout_placeholder
    }), e.jsx("div", {
      className: bn.button_layout,
      children: e.jsxs("button", {
        className: bn.button,
        onPointerUp: () => {
          W(ii)
        },
        children: [e.jsx("img", {
          alt: "tg_logo",
          src: qn
        }), "Not Pixel 42"]
      })
    })]
  }),
  eb = "_layout_1drph_1",
  tb = "_container_1drph_11",
  nb = "_bold_1drph_22",
  sb = "_info_container_1drph_26",
  ab = "_title_1drph_33",
  ib = "_description_1drph_38",
  ob = "_image_container_1drph_43",
  rb = "_image_1drph_43",
  cb = "_extra_info_container_1drph_53",
  lb = "_npx_tokens_1drph_77",
  db = "_button_container_1drph_81",
  ub = "_button_1drph_81",
  Ie = {
    layout: eb,
    container: tb,
    bold: nb,
    info_container: sb,
    title: ab,
    description: ib,
    image_container: ob,
    image: rb,
    extra_info_container: cb,
    npx_tokens: lb,
    button_container: db,
    button: ub
  },
  mb = "/assets/intro-Brtd1phH.webp",
  Ab = {
    initial: {
      scale: .97,
      opacity: 0,
      transformOrigin: "50% 0"
    },
    animate: {
      scale: 1,
      opacity: 1
    },
    transition: {
      type: "spring",
      bounce: 0,
      ease: "easeInOut",
      duration: .5
    }
  },
  pb = () => {
    const t = te();
    return Ge.createPortal(e.jsx("div", {
      className: Ie.layout,
      children: e.jsxs(Un.div, {
        className: Ie.container,
        ...Ab,
        children: [e.jsxs("div", {
          className: Ie.info_container,
          children: [e.jsx("span", {
            className: `${Ie.title} ${Ie.bold}`,
            children: "New Pixel Order!"
          }), e.jsx("span", {
            className: Ie.description,
            children: "Not Pixel is a blank canvas 1000×1000px where Telegram users transform pixels."
          })]
        }), e.jsx("div", {
          className: Ie.image_container,
          children: e.jsx("img", {
            alt: "image",
            className: Ie.image,
            src: mb
          })
        }), e.jsxs("div", {
          className: Ie.extra_info_container,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: `${Ie.bold}`,
              children: "Probably all you need to know:"
            })
          }), e.jsx("div", {
            children: e.jsxs("ol", {
              children: [e.jsx("li", {
                children: "You can put some pixels on it, but you have to wait to continue."
              }), e.jsxs("li", {
                children: ["Get rewarded in", " ", e.jsx(M, {
                  size: 14,
                  style: {
                    transform: "translateY(1.5px)"
                  }
                }), e.jsx("span", {
                  className: `${Ie.npx_tokens} ${Ie.bold}`,
                  children: " Not PX "
                }), " ", "tokens for repainting and owning pixels."]
              }), e.jsx("li", {
                children: "Be creative. Enjoy."
              })]
            })
          })]
        }), e.jsx("div", {
          className: Ie.button_container,
          children: e.jsx("button", {
            className: Ie.button,
            onPointerUp: () => {
              t.push("/"), un.save("skipIntro", "true")
            },
            children: "Let’s Gooooooo!"
          })
        })]
      })
    }), document.body)
  },
  hb = "_text_layout_q4wab_1",
  gb = "_text_q4wab_1",
  _b = "_button_layout_q4wab_15",
  fb = "_button_layout_placeholder_q4wab_27",
  xb = "_button_q4wab_15",
  Nn = {
    text_layout: hb,
    text: gb,
    button_layout: _b,
    button_layout_placeholder: fb,
    button: xb
  },
  vb = () => e.jsxs(ue, {
    children: [e.jsx("div", {
      className: Nn.text_layout,
      children: e.jsxs("span", {
        className: Nn.text,
        children: [e.jsx("h1", {
          children: "Open League"
        }), e.jsx("p", {
          children: "Hey!"
        }), e.jsxs("p", {
          children: [e.jsx("b", {
            children: "Open League"
          }), " – a long-term incentive program for TON users, teams and traders. $40M+ in Toncoin already distributed, and much more to come."]
        }), e.jsxs("p", {
          children: [e.jsx("b", {
            children: "Not Pixel"
          }), " is involved!"]
        }), e.jsx("h2", {
          children: "For you"
        }), e.jsx("p", {
          children: "Choose how you want to take part depending on whether you're a beginner or have experience with Web3."
        })]
      })
    }), e.jsx("div", {
      className: Nn.button_layout_placeholder
    }), e.jsx("div", {
      className: Nn.button_layout,
      children: e.jsxs("button", {
        className: Nn.button,
        onPointerUp: () => {
          Tt("https://ton.org/en/open-league")
        },
        children: ["Details on ton.org ", e.jsx(I, {
          size: 16,
          children: ""
        })]
      })
    })]
  }),
  yb = "_text_layout_q4wab_1",
  wb = "_text_q4wab_1",
  jb = "_button_layout_q4wab_15",
  bb = "_button_layout_placeholder_q4wab_27",
  Nb = "_button_q4wab_15",
  $i = {
    text_layout: yb,
    text: wb,
    button_layout: jb,
    button_layout_placeholder: bb,
    button: Nb
  },
  Cb = () => e.jsx(ue, {
    children: e.jsx("div", {
      className: $i.text_layout,
      children: e.jsxs("span", {
        className: $i.text,
        children: [e.jsx("h1", {
          children: "Pay support"
        }), e.jsxs("p", {
          children: ["To take advantage of a refund, you must provide detailed information and send it to", " ", e.jsx("a", {
            href: "mailto:support@notpx.app",
            target: "_blank",
            children: "support@notpx.app"
          }), ". The letter must be sent no later than 24 hours after the purchase has been made."]
        }), e.jsx("p", {
          children: "The letter should contain the following data: your Telegram ID (a set of numbers), the exact name of the product, the exact time of the transaction, the transaction amount (in Stars), the transaction ID and the reason why you are requesting a refund. Include “paysupport” in the email header."
        }), e.jsx("p", {
          children: "It takes up to 10 days from the date of submission for the application to be processed."
        })]
      })
    })
  }),
  Ib = "_close_container_1mu9y_1",
  Pb = "_title_container_1mu9y_12",
  Sb = "_title_1mu9y_12",
  Bb = "_frens_count_1mu9y_21",
  Tb = "_content_1mu9y_25",
  Eb = "_image_container_1mu9y_32",
  kb = "_image_1mu9y_32",
  Db = "_description_container_1mu9y_41",
  Rb = "_white_1mu9y_50",
  Mb = "_gray_1mu9y_54",
  Ub = "_purple_1mu9y_58",
  Qb = "_bold_1mu9y_64",
  Ob = "_center_1mu9y_68",
  Fb = "_info_layout_1mu9y_72",
  zb = "_benefits_container_1mu9y_84",
  Gb = "_benefits_item_1mu9y_92",
  Lb = "_divider_1mu9y_98",
  Hb = "_buttons_container_1mu9y_105",
  qb = "_button_copy_1mu9y_112",
  Yb = "_button_1mu9y_105",
  Vb = "_share_container_1mu9y_137",
  Wb = "_share_row_1mu9y_143",
  Xb = "_crypto_image_1mu9y_150",
  R = {
    close_container: Ib,
    title_container: Pb,
    title: Sb,
    frens_count: Bb,
    content: Tb,
    image_container: Eb,
    image: kb,
    description_container: Db,
    white: Rb,
    gray: Mb,
    purple: Ub,
    bold: Qb,
    center: Ob,
    info_layout: Fb,
    benefits_container: zb,
    benefits_item: Gb,
    divider: Lb,
    buttons_container: Hb,
    button_copy: qb,
    button: Yb,
    share_container: Vb,
    share_row: Wb,
    crypto_image: Xb
  },
  Jb = "/assets/sitting_chars_animation_outl-BdmQzfhn.gif",
  Zb = "_link_a4r15_1",
  Kb = {
    link: Zb
  },
  qt = ({
    url: t,
    className: n = "",
    text: s = "Copy referral link"
  }) => {
    const [a, i] = A.useState(null), o = A.useRef(null);
    return e.jsxs("div", {
      className: `${Kb.link} ${n}`,
      onPointerUp: async r => {
        var d, m;
        const l = await Hn(t);
        r.stopPropagation(), l ? (i("Copied!"), (m = (d = window.Telegram.WebApp) == null ? void 0 : d.HapticFeedback) == null || m.notificationOccurred("success")) : i("Can't copy :-("), clearTimeout(o.current), o.current = setTimeout(() => {
          i(null)
        }, 3e3)
      },
      children: [a === null ? e.jsx("span", {
        children: s
      }) : a, a === null ? e.jsx(I, {
        size: 20,
        children: ""
      }) : ""]
    })
  },
  $b = () => {
    const {
      t
    } = Le("translation", {
      keyPrefix: "frens"
    }), n = c(d => d.user.user), s = c(d => d.main.settings);
    let a = `${Bt}?startapp=f${(n==null?void 0:n.id)||""}`;
    n && n.squad && n.squad.id !== null && (a += `_s${n.squad.id}`);
    const i = (n == null ? void 0 : n.friends) || 0,
      o = c(ia),
      [r, l] = A.useState([]);
    return A.useEffect(() => {
      const d = async () => {
        const m = await X.getRevShareInfo();
        m.status === 200 && m.data && l(m.data)
      };
      n && n.friends >= 1e4 && d()
    }, [n]), e.jsxs(ue, {
      children: [e.jsxs("div", {
        className: R.content,
        children: [e.jsx("div", {
          className: R.image_container,
          children: e.jsx("img", {
            alt: "image",
            className: R.image,
            src: Jb
          })
        }), e.jsx("div", {
          className: R.title_container,
          children: e.jsx("div", {
            className: R.title,
            children: t("invite")
          })
        }), e.jsxs("div", {
          className: R.description_container,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              children: t("description")
            })
          }), e.jsxs("div", {
            children: [e.jsxs("span", {
              children: [" ", t("your"), " "]
            }), e.jsx("span", {
              className: `${R.frens_count} ${R.bold}`,
              children: i
            })]
          })]
        }), e.jsxs("div", {
          className: R.buttons_container,
          children: [e.jsx(qt, {
            url: a,
            className: R.button_copy
          }), e.jsx("button", {
            className: R.button,
            onPointerUp: d => {
              d.stopPropagation(), W(`https://t.me/share/url?url=${a}`)
            },
            children: "Share"
          })]
        })]
      }), e.jsx("div", {
        className: R.info_layout,
        children: e.jsxs("div", {
          className: R.benefits_container,
          children: [e.jsxs("div", {
            className: R.benefits_item,
            children: [e.jsx("div", {
              children: e.jsx("span", {
                className: R.gray,
                children: t("benefits.title1")
              })
            }), e.jsxs("div", {
              children: [e.jsxs("span", {
                className: `${R.bold}`,
                children: [s.InitialCoins, " PX "]
              }), e.jsx("span", {
                className: `${R.gray}`,
                children: t("benefits.text1")
              })]
            })]
          }), e.jsxs("div", {
            className: R.benefits_item,
            children: [e.jsx("div", {
              children: e.jsxs(va, {
                i18nKey: "frens.benefits.title2",
                children: [e.jsx("span", {
                  className: R.gray
                }), e.jsx("span", {
                  className: `${R.bold} ${R.purple}`
                })]
              })
            }), e.jsxs("div", {
              children: [e.jsxs("span", {
                className: `${R.bold}`,
                children: [s.RefRewardCoinsPremium, " PX", " "]
              }), e.jsx("span", {
                className: `${R.gray}`,
                children: t("benefits.text2")
              })]
            })]
          }), e.jsx("div", {
            className: R.divider
          }), e.jsxs("div", {
            className: R.benefits_item,
            children: [e.jsx("div", {
              children: e.jsx("span", {
                className: R.gray,
                children: t("benefits.title3")
              })
            }), e.jsxs("div", {
              children: [e.jsxs("span", {
                className: R.white,
                children: [s.ReferralClaimReward * 100, "%"]
              }), e.jsxs("span", {
                className: `${R.gray}`,
                children: [" ", t("benefits.text3")]
              })]
            })]
          }), e.jsxs("div", {
            className: R.benefits_item,
            children: [e.jsx("div", {
              children: e.jsx("span", {
                className: R.gray,
                children: t("benefits.title4")
              })
            }), e.jsxs("div", {
              children: [e.jsx("span", {
                className: `${R.bold}`,
                children: "100% "
              }), e.jsxs("span", {
                className: `${R.gray}`,
                children: [" ", t("benefits.text4")]
              })]
            })]
          }), e.jsxs("div", {
            className: R.benefits_item,
            children: [e.jsx("div", {
              style: {
                display: "flex",
                alignItems: "center"
              },
              children: e.jsx("span", {
                className: R.gray,
                children: t("benefits.title5")
              })
            }), e.jsx("div", {
              children: e.jsxs(va, {
                i18nKey: "frens.benefits.text5",
                children: [e.jsx("span", {
                  className: `${R.bold}`
                }), e.jsx("span", {
                  className: `${R.gray}`
                })]
              })
            })]
          }), e.jsxs("div", {
            className: R.benefits_item,
            children: [e.jsxs("div", {
              style: {
                display: "flex",
                alignItems: "center"
              },
              children: [e.jsx("span", {
                className: R.gray,
                children: t("benefits.title6")
              }), i < 1e4 && e.jsx(I, {
                size: 16,
                style: {
                  marginLeft: 3
                },
                children: ""
              }), i >= 1e4 && e.jsx(I, {
                size: 16,
                style: {
                  marginLeft: 3
                },
                children: ""
              })]
            }), e.jsx("div", {
              children: e.jsxs(va, {
                i18nKey: "frens.benefits.text6",
                children: [e.jsx("span", {
                  className: `${R.bold}`
                }), e.jsx("span", {
                  className: `${R.gray}`
                })]
              })
            })]
          }), r && r.length > 0 && e.jsxs("div", {
            className: R.share_container,
            children: [e.jsxs("div", {
              className: R.share_row,
              children: [e.jsx("div", {}), e.jsx("div", {
                children: "Crypto"
              }), e.jsx("div", {
                children: "Purchases amount"
              }), e.jsx("div", {
                children: "Rev. share total"
              })]
            }), r.map(d => {
              const m = o.filter(g => g.currency_id === d.currencyId);
              if (m.length === 0) return null;
              const h = m[0];
              return e.jsxs("div", {
                className: R.share_row,
                children: [e.jsx("img", {
                  alt: "currency",
                  src: h.image,
                  className: R.crypto_image
                }), e.jsx("div", {
                  children: h.name
                }), e.jsx("div", {
                  children: Ze({
                    num: Math.floor(d.totalPurchases)
                  })
                }), e.jsx("div", {
                  children: Ze({
                    num: Math.floor(d.totalSpend)
                  })
                })]
              }, d.currencyId)
            })]
          }), e.jsx("div", {
            style: {
              height: "20px"
            }
          })]
        })
      })]
    })
  },
  e1 = "_container_19cbp_1",
  t1 = "_text_container_19cbp_9",
  n1 = "_text_block_19cbp_16",
  s1 = "_gray_19cbp_24",
  a1 = "_purple_19cbp_28",
  i1 = "_total_19cbp_35",
  o1 = "_bold_19cbp_39",
  r1 = "_indicator_19cbp_43",
  c1 = "_button_container_19cbp_52",
  l1 = "_button_19cbp_52",
  pe = {
    container: e1,
    text_container: t1,
    text_block: n1,
    gray: s1,
    purple: a1,
    total: i1,
    bold: o1,
    indicator: r1,
    button_container: c1,
    button: l1
  },
  d1 = "_layout_1ulm2_1",
  u1 = "_container_1ulm2_11",
  m1 = "_stars_1ulm2_17",
  A1 = "_animStar_1ulm2_1",
  ts = {
    layout: d1,
    container: u1,
    stars: m1,
    animStar: A1
  },
  p1 = () => {
    const [t, n] = A.useState(window.innerWidth);

    function s(a) {
      n(a.target.innerWidth)
    }
    return A.useEffect(() => (window.addEventListener("resize", s), () => {
      window.removeEventListener("resize", s)
    }), []), t
  },
  h1 = [{
    count: 50,
    speed: 50
  }, {
    count: 50,
    speed: 30
  }, {
    count: 50,
    speed: 90
  }],
  g1 = t => {
    const n = window.innerWidth,
      s = window.innerHeight * 2;
    return Array.from(Array(t)).reduce(a => {
      const i = k(0, n),
        o = k(0, s);
      return a + `${i}px ${o}px #fff, `
    }, "").replace(/,(\s+)?$/, "")
  },
  _1 = A.memo(() => (p1(), e.jsx("div", {
    className: ts.layout,
    children: e.jsx("div", {
      className: ts.container,
      children: h1.map((t, n) => {
        const s = g1(t.count);
        return e.jsx("div", {
          className: ts.stars,
          style: {
            animation: `${ts.animStar} ${t.speed}s linear infinite`,
            boxShadow: s
          }
        }, n)
      })
    })
  })), () => !1),
  f1 = () => {
    const t = te(),
      [n, s] = A.useState(0),
      [a, i] = A.useState(0),
      [o, r] = A.useState(0),
      [l, d] = A.useState(0),
      [m, h] = A.useState(0),
      [g, f] = A.useState(0),
      [j, x] = A.useState([]);
    return A.useEffect(() => {
      try {
        X.getStats().then(y => {
          const B = y.data;
          s(B.totalPlayers), i(B.totalRepaints)
        }), X.getMoreStats().then(y => {
          const B = y.data;
          r(B.premium_users), d(B.active_users), h(B.daily_users), f(B.daily_repaints), x(Object.keys(B.top_countries).map(C => ({
            key: C,
            value: B.top_countries[C]
          })))
        })
      } catch {}
    }, []), e.jsxs(ue, {
      children: [e.jsx(_1, {}), e.jsx("div", {
        style: {
          height: 50
        }
      }), e.jsxs("div", {
        className: pe.container,
        children: [e.jsxs("div", {
          className: pe.text_container,
          children: [e.jsxs("div", {
            className: pe.text_block,
            children: [e.jsx("span", {
              className: pe.gray,
              children: "Total painters"
            }), e.jsx("span", {
              className: `${pe.bold}`,
              style: {
                fontSize: 22
              },
              children: e.jsx(De, {
                num: n
              })
            })]
          }), e.jsxs("div", {
            className: pe.text_block,
            children: [e.jsx("span", {
              className: pe.gray,
              children: "Total repaints"
            }), e.jsx("span", {
              className: `${pe.bold}`,
              children: e.jsx(De, {
                num: Math.floor(a)
              })
            })]
          }), e.jsxs("div", {
            className: pe.text_block,
            children: [e.jsx("span", {
              className: pe.gray,
              children: "Online users"
            }), e.jsx("span", {
              className: `${pe.bold}`,
              children: e.jsx(De, {
                num: Math.floor(l)
              })
            })]
          }), e.jsxs("div", {
            className: pe.text_block,
            children: [e.jsx("div", {
              children: e.jsx("span", {
                className: pe.purple,
                children: "Telegram Premium "
              })
            }), e.jsx("span", {
              className: `${pe.bold}`,
              children: e.jsx(De, {
                num: Math.floor(o)
              })
            })]
          }), e.jsxs("div", {
            className: pe.text_block,
            children: [e.jsx("span", {
              className: pe.gray,
              children: "Daily repaints"
            }), e.jsx("span", {
              className: `${pe.bold}`,
              children: e.jsx(De, {
                num: Math.floor(g)
              })
            })]
          })]
        }), e.jsx("div", {
          className: pe.button_container,
          children: e.jsx("button", {
            className: pe.button,
            onPointerUp: () => {
              t.push("/invite-frens")
            },
            children: "Invite fren"
          })
        })]
      })]
    })
  },
  x1 = "_main_info_container_1gqs9_2",
  v1 = "_image_container_1gqs9_11",
  y1 = "_image_1gqs9_11",
  w1 = "_title_1gqs9_21",
  j1 = "_variants_container_1gqs9_25",
  b1 = "_variant_item_1gqs9_33",
  N1 = "_variant_left_container_1gqs9_39",
  C1 = "_variant_middle_container_1gqs9_45",
  I1 = "_dot_1gqs9_53",
  P1 = "_variant_right_container_1gqs9_59",
  S1 = "_button_container_1gqs9_66",
  B1 = "_button_1gqs9_66",
  T1 = "_bold_1gqs9_96",
  E1 = "_gray_1gqs9_100",
  k1 = "_blue_1gqs9_104",
  D1 = "_text_1gqs9_109",
  Z = {
    main_info_container: x1,
    image_container: v1,
    image: y1,
    title: w1,
    variants_container: j1,
    variant_item: b1,
    variant_left_container: N1,
    variant_middle_container: C1,
    dot: I1,
    variant_right_container: P1,
    button_container: S1,
    button: B1,
    bold: T1,
    gray: E1,
    blue: k1,
    text: D1
  },
  Yr = "/assets/button_dog_200x200-DtCBiZdv.gif",
  R1 = t => {
    const n = t / 1e3,
      s = Math.floor(n / 60),
      a = n % 60;
    return a === 0 ? `${s} min` : `${s} min ${a} sec`
  },
  M1 = t => {
    if (t < 0 || !t) return "";
    const n = Math.floor(t / 60),
      s = t % 60;
    return s < 10 ? `${n}:0${s}` : `${n}:${s}`
  },
  U1 = () => {
    const t = _(),
      n = te(),
      s = c(m => m.mining.maxCharges),
      a = c(m => m.mining.charges),
      i = c(m => m.mining.reChargeSpeed),
      o = R1(i),
      r = c(m => m.mining.reChargeTs),
      [l, d] = A.useState("");
    return A.useEffect(() => {
      if (a !== 0) return () => {};
      const m = setInterval(() => {
        const g = Date.now() - r,
          f = i - g,
          j = Math.round(f / 1e3);
        d(M1(j))
      }, 500);
      return () => {
        clearInterval(m)
      }
    }, [r, i, a]), e.jsxs(ue, {
      children: [e.jsx("div", {
        style: {
          height: 50
        }
      }), e.jsx("div", {
        className: Z.image_container,
        children: e.jsx("img", {
          alt: "image",
          className: Z.image,
          src: Yr
        })
      }), e.jsxs("div", {
        className: Z.main_info_container,
        children: [e.jsx("div", {
          children: e.jsx("span", {
            className: `${Z.title} ${Z.bold}`,
            children: "Energy is over"
          })
        }), e.jsxs("div", {
          children: [e.jsx("span", {
            className: `${Z.gray}`,
            children: "Energy limit: "
          }), e.jsxs("span", {
            children: [a, "/", s]
          })]
        }), e.jsxs("div", {
          children: [e.jsx("span", {
            className: `${Z.gray}`,
            children: "Recovery speed:"
          }), e.jsxs("span", {
            children: [" ", o]
          })]
        })]
      }), e.jsxs("div", {
        className: Z.variants_container,
        children: [e.jsxs("div", {
          className: Z.variant_item,
          children: [e.jsx("div", {
            className: Z.variant_left_container,
            children: e.jsx(I, {
              size: 28,
              children: ""
            })
          }), e.jsxs("div", {
            className: Z.variant_middle_container,
            children: [e.jsxs("div", {
              children: [e.jsx("span", {
                className: Z.bold,
                children: "Just wait"
              }), a === 0 && l !== "" && e.jsx("span", {
                className: Z.dot,
                children: "•"
              }), a === 0 && l !== "" && e.jsx("span", {
                className: Z.gray,
                children: l
              })]
            }), e.jsx("div", {
              children: e.jsx("span", {
                className: Z.gray,
                children: "Serene i fold my hands and wait."
              })
            })]
          }), e.jsx("div", {
            className: Z.variant_right_container
          })]
        }), e.jsxs("div", {
          className: Z.variant_item,
          onPointerUp: () => {
            t(qa("boosts")), n.push("/claiming")
          },
          children: [e.jsx("div", {
            className: Z.variant_left_container,
            children: e.jsx(I, {
              size: 28,
              children: ""
            })
          }), e.jsxs("div", {
            className: Z.variant_middle_container,
            children: [e.jsx("div", {
              children: e.jsx("span", {
                className: `${Z.bold} ${Z.blue}`,
                children: "Use boosters"
              })
            }), e.jsx("div", {
              children: e.jsx("span", {
                className: Z.gray,
                children: "Upgrade Energy limit and Speed."
              })
            })]
          }), e.jsx("div", {
            className: Z.variant_right_container,
            children: e.jsx(I, {
              size: 20,
              children: ""
            })
          })]
        }), e.jsxs("div", {
          className: Z.variant_item,
          onPointerUp: () => {
            t(ot(1)), t(rt()), n.push("/stars")
          },
          children: [e.jsx("div", {
            className: Z.variant_left_container,
            children: e.jsx(I, {
              size: 28,
              children: ""
            })
          }), e.jsxs("div", {
            className: Z.variant_middle_container,
            children: [e.jsx("div", {
              children: e.jsx("span", {
                className: `${Z.blue} ${Z.bold}`,
                children: "Use Stars Shop"
              })
            }), e.jsx("div", {
              children: e.jsx("span", {
                className: Z.gray,
                children: "Full energy right now for Stars."
              })
            })]
          }), e.jsx("div", {
            className: Z.variant_right_container,
            children: e.jsx(I, {
              size: 20,
              children: ""
            })
          })]
        })]
      }), e.jsx("div", {
        className: Z.button_container,
        children: e.jsx("button", {
          className: Z.button,
          onPointerUp: () => {
            n.push("/")
          },
          children: "Okay"
        })
      })]
    })
  },
  Q1 = "_close_container_5xtkt_1",
  O1 = "_title_container_5xtkt_12",
  F1 = "_title_5xtkt_12",
  z1 = "_small_title_container_5xtkt_23",
  G1 = "_small_title_5xtkt_23",
  L1 = "_content_5xtkt_32",
  H1 = "_image_container_5xtkt_40",
  q1 = "_image_placeholder_5xtkt_46",
  Y1 = "_image_5xtkt_40",
  V1 = "_how_container_5xtkt_58",
  W1 = "_description_container_5xtkt_63",
  X1 = "_white_5xtkt_72",
  J1 = "_gray_5xtkt_76",
  Z1 = "_bold_5xtkt_80",
  K1 = "_center_5xtkt_84",
  $1 = "_claim_button_container_5xtkt_88",
  e0 = "_claim_button_5xtkt_88",
  t0 = "_no_button_5xtkt_107",
  n0 = "_info_layout_5xtkt_119",
  s0 = "_rewards_layout_5xtkt_131",
  a0 = "_rewards_grid_container_5xtkt_137",
  i0 = "_reward_item_5xtkt_143",
  o0 = "_reward_item_completed_5xtkt_153",
  r0 = "_reward_item_content_container_5xtkt_166",
  c0 = "_reward_item_active_5xtkt_179",
  l0 = "_reward_item_image_container_5xtkt_183",
  d0 = "_reward_item_amount_5xtkt_187",
  u0 = "_reward_item_amount_active_5xtkt_201",
  m0 = "_reward_item_amount_premium_5xtkt_205",
  A0 = "_reward_item_title_5xtkt_210",
  p0 = "_reward_item_title_premium_5xtkt_216",
  h0 = "_reward_item_image_5xtkt_183",
  L = {
    close_container: Q1,
    title_container: O1,
    title: F1,
    small_title_container: z1,
    small_title: G1,
    content: L1,
    image_container: H1,
    image_placeholder: q1,
    image: Y1,
    how_container: V1,
    description_container: W1,
    white: X1,
    gray: J1,
    bold: Z1,
    center: K1,
    claim_button_container: $1,
    claim_button: e0,
    no_button: t0,
    info_layout: n0,
    rewards_layout: s0,
    rewards_grid_container: a0,
    reward_item: i0,
    reward_item_completed: o0,
    reward_item_content_container: r0,
    reward_item_active: c0,
    reward_item_image_container: l0,
    reward_item_amount: d0,
    reward_item_amount_active: u0,
    reward_item_amount_premium: m0,
    reward_item_title: A0,
    reward_item_title_premium: p0,
    reward_item_image: h0
  },
  g0 = ({
    secondsLeft: t
  }) => {
    const n = _(),
      s = "dailyTransactionInfo",
      a = c(D_),
      i = c(x => x.daily.getDailyListFetchStatus),
      o = c(x => x.daily.getFirstDailyFetchStatus),
      r = i === p.fulfilled,
      l = Gn(),
      [d, m] = dn(),
      [h, g] = A.useState(!1),
      f = c(ct);
    A.useEffect(() => {
      if (!a || !r) return;
      const x = localStorage.getItem(s);
      if (x) {
        const y = JSON.parse(x);
        y.dailyId === a.id && Date.now() - y.ts < 10 * 60 * 1e3 ? g(!0) : g(!1), Date.now() - y.ts >= 10 * 60 * 1e3 && localStorage.removeItem(s)
      }
    }, [a]);
    const j = async () => {
      try {
        const x = a.prices[0],
          y = await X.startShopTransaction({
            buyerWallet: l,
            currencyId: 2,
            daily: !0,
            quantity: x.quantity,
            goodId: a.id
          }),
          B = Be.beginCell().storeUint(0, 32).storeStringTail(y.data.txMemCode).endCell(),
          C = {
            validUntil: Math.floor(Date.now() / 1e3) + 600,
            messages: [{
              address: Ha,
              amount: String(Be.toNano(y.data.strAmount)),
              payload: B.toBoc().toString("base64")
            }]
          },
          Ce = await d.sendTransaction(C);
        localStorage.setItem(s, JSON.stringify({
          ts: Date.now(),
          dailyId: a.id
        })), n(z({
          id: performance.now(),
          text: "Success! Wait 3-5 min and reload the app.",
          icon: ""
        })), g(!0)
      } catch (x) {
        console.warn(x), n(z({
          id: performance.now(),
          text: "Error! Wait 5 min before starting a new transaction."
        }))
      }
    };
    if (r) {
      const x = a.prices[0];
      let y = `Claim for ${x.price} TON`;
      return t && (y = `Claim in ${ll(t)}`), h && (y = "Pending transaction..."), e.jsxs("div", {
        className: L.content,
        children: [e.jsx("div", {
          className: L.description_container,
          children: e.jsx("div", {
            children: e.jsxs("span", {
              children: ["Day ", a.id]
            })
          })
        }), e.jsx("div", {
          className: L.image_container,
          children: e.jsx("img", {
            alt: "image",
            className: L.image,
            src: a.image_url
          })
        }), e.jsx("div", {
          className: L.title_container,
          children: e.jsx("div", {
            className: L.title,
            children: `${a.name} x${x.quantity}`
          })
        }), e.jsx("div", {
          className: L.how_container,
          children: e.jsx(_n, {
            onPointerUp: B => {
              B.stopPropagation(), n(kr(!0))
            },
            children: "How it works"
          })
        }), e.jsxs("div", {
          className: L.claim_button_container,
          children: [f !== je && e.jsx("button", {
            className: L.no_button,
            children: "Desktop version only"
          }), l !== "" && f === je && e.jsx("button", {
            disabled: o === p.pending || h,
            className: L.claim_button,
            onPointerUp: async () => {
              t || h || j()
            },
            children: y
          }), l === "" && f === je && e.jsx("button", {
            className: L.claim_button,
            onPointerUp: async () => {
              await d.openModal()
            },
            children: "Connect wallet"
          })]
        })]
      })
    }
    return e.jsxs("div", {
      className: L.content,
      children: [e.jsx("div", {
        className: L.description_container,
        children: e.jsx("div", {
          children: e.jsx(tt, {
            show: !0,
            children: "Loading..."
          })
        })
      }), e.jsx("div", {
        className: L.image_container,
        children: e.jsx("div", {
          className: L.image_placeholder
        })
      }), e.jsx("div", {
        className: L.title_container,
        children: e.jsx("div", {
          className: L.title,
          children: e.jsx("div", {
            children: e.jsx(tt, {
              show: !0,
              children: "Loading..."
            })
          })
        })
      }), e.jsx("div", {
        className: L.claim_button_container,
        children: e.jsx("button", {
          className: L.claim_button,
          disabled: !0,
          children: "Loading..."
        })
      })]
    })
  },
  _0 = "data:image/png;base64,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",
  f0 = "data:image/png;base64,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",
  x0 = "data:image/png;base64,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",
  v0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAAArCAYAAAD41p9mAAAHhklEQVRogc2agXLcJhRFESBt+in9wf5E/7dNvCup4xm99PjkIe86thNmPLtIgNDhcnmwnv7+68/yG6aKv6Y804a/VfnfKvXfpDPP/ZiPzy6ohJsBrLoXoG/H3/X4/KXpV4JeDrgL4BqkFez+biq7YZBYNqB/Oz4/XfGfDfr5eRfAZdpkEQF5urPt/fjcEguJmfLlAP0E6J+SPgv083P+OABTpQY74X5L2rFNZGlFmR02kkF/+iyVfzToM8BdcJvuT3comyoumBXb0d56fLYEej1gL58B/KNA1wPwlwTwkig3wHYAZb1M3U5UcjnA3gCY0NcEeD+AXz8C+EeAXqDiSBngWXBtGQTuRTESYUT5UHmA3QB9xcAaeMdMe3rvaOU9QWc2ER3ny1UoqyZgCX5KIGfhXnyu+CRk5ldFKA1QKwQSA/z0XnDeI2UqjtiYCjZg+nCDwgl0OmBlHk1LyaKOgEy1U82RLlDyJrG091D3z4KuCNcIOWLkArhzAjjudYHljJigwDJQdIEXU8kFC+AK6DsGOMK9drxLQO1Q9E+r+2dAx4LXNd0WKG2WkidYCbfWmbIrlPhaLL3jc1Vox4Ey8IJ+XI/8RYAjKgnhvAn2W0F3TDdCvkBxC0CX48UuUHDBgBh8kS1k+Uir8vWAzGhjTYCHJ0f9sIgV7XxNYD+X+/ctwN5S5wxyk5JDxV2xs5VdBH5KFspRLL1DxU2LYgfwK4B3qLgkyi7Y1MT3fzCTH4L9KOgMcpf/XgCwAXgX4C6YzNOnpxPr2JM8F8OWhHRXKTyuXQez5nJsZjaBfwj2I6A7VEsln0HmgVG2KBYo3QoehXcliRqKfNkqv6Fe2MeTPLwkbUZaZCNfIba7PPte0GEN5cQuLoLZod4K6AbctDDRPsoAtK9vKL8qtNsxiAzRLjhGLYg4RulLAvsCzz9N94Im5KrvI8gLrIJlbR2TpnZArCfRR8DjLnDHJoQbmBWblLj3De1NUOVoUFfM0Ce80w2wT7fs94AOSB3lF4FtuL8A4iyroJ9PyBtuAwS/vLfaBLRDySuea+CTVBjh3A39YdoQdYSCFwC+vObXr4EmmK5rRdFFld/OUHVL8g7pmhQ96a8ki+KOzYfzjDYI/Iq22J7PZiKtiqFnALZ3D/36DDR9mT8vETI3IgTJX06e0wUDMNqaczdo0KMpHWmTjUz4bsDtALKqXUYcNwDtarsIcEf54anfGeiAXGUZFX4VJ3AXncYR8vMiEoOxyI+7bMKblqL8lIR09uVJu0Ju3a9Q4hUWUA/frlL2BVFLla2EghfY0NBCRqD5coyXQylUZJdPW8kBbx58p3VY1TWxC6dQ4qY4mqd1G8CHsgPaDTZDLtHekkQ1jM03QKfC7wJNNXOKV1lGk63wcOgiv44XWwTX3mzgBh33fKAUiYBZJ/Iz1E3YVHLBoDleXvDsjigkbGO+F3QfqJnb6zpY8Bzi0S6KIpJsMTTgqkWL0JsOk3Z5dcC9JXXjOQF7h7J9QHU9rmeRDFXdddL3wqsz0A63WK5Kydx8cEOSwVwAjqFil6Id3hV9L/JqflZYBIHf8KwJkAL2ono39DOAcebNmCEZ4O4IxKBHcBmiFeQNtkDxDXAdS3eVLRgQQh6BZtoBdUPfVkCdpW4PTMHOr2nRo4WsWHxnDRhB/xCBGHRPvnM3aMDZAT6B2YdpSzM61zCgPuc4g0wYsVs8+x2xCLbtYobncvDYZ/4s1pLFkCyfmGGak+tUcxXsKjXbMgrK0Y8N2TtBh3iZRzvMY/1Vg3RTewGbg/JN/d4U1n1Df+3V0Rcuii9OAjMFF9kHFyhP70zNUxKhsG4fQOY1w7OVlGQh3FXHABz2jcA0qDiYUNVNwnqCn99w7cWimME9WwSLlOmH8qjzrE4GmVGHLeS1LXhJoo6uEK9AgV2qrijfZA83vFd4dcfz5mNBJT8y/QG0Tb3KBqy8IjV76tsy+Dz78KOhXdE1e/Qule4a+FXKrYLGewR/xbUb+lhOQL94cXviqIJVOuE7/6qAOd+S+9kgO6QbKTrueQEL2Lu+M/Rj+bhOH65S8y15j6ZnRrnvNpiNguFXAbXisq2zt9dF/35g6CWpN6nNzK8nlc02QhaF38fPaLrX0Lb7xPsjntVQneiXBFPUKUMvSV2/8KTy2TP8YgV5Jh4gWeGToPLXFquav4ZzF+hzjmvCy6Ly9S3bsBSNuiMBRweZR02ClilnpM5ycq0A6CRYDveiHs+oqwaiAGbFAFTZh5Ucv7bbp/3s4QWPSrZIuVHHwJ6i2WgbYHbfKs8WxsxCfO+sTyW5l82azB4mXWsJr++fVudZcudGo+iFz3A9A7JOZ0oeJVuaYWTw3Z9s1tyzIGeWm17PzPsMgu/78Ccr77ZHL5spdvQiWTqr43ZL8kz2Jxswt0cGZ2tcYyb7B8Kzylny6pwBzxa3THGjKXyWMhiZMjNP9btlbWXX72b0mmKyhzucGqVRmXsBPgq6vDJQZ+2dcWDU8lrZhx9wT2OOJH62vUhvAfxa3ey615Cz+m95bs0ybxolpOxo8pHEOg7TfkV69B2yPv/PpJT6Hw4BB5QSyuZpAAAAAElFTkSuQmCC",
  y0 = "_container_11l5m_1",
  w0 = "_divider_11l5m_23",
  j0 = "_row_11l5m_28",
  b0 = "_row_title_11l5m_40",
  N0 = "_row_title_main_11l5m_44",
  C0 = "_row_hint_11l5m_49",
  I0 = "_row_value_11l5m_55",
  P0 = "_row_value_main_11l5m_59",
  S0 = "_mining_percent_11l5m_64",
  B0 = "_active_row_11l5m_74",
  T0 = "_button_11l5m_85",
  eo = {
    container: y0,
    divider: w0,
    row: j0,
    row_title: b0,
    row_title_main: N0,
    row_hint: C0,
    row_value: I0,
    row_value_main: P0,
    mining_percent: S0,
    active_row: B0,
    button: T0
  },
  E0 = () => {
    const t = _(),
      n = c(a => a.daily.showHowDailyWorksPopup),
      s = a => {
        t(kr(a))
      };
    return e.jsx(Lt, {
      show: n,
      setShow: s,
      children: e.jsxs("div", {
        className: eo.container,
        children: [e.jsx("h2", {
          children: "How does Daily work? "
        }), e.jsx("p", {
          children: "Complete the daily check-ins and earn valuable rewards. The more days completed, the more rewards you get."
        }), e.jsx("p", {
          children: "Usage is only possible in the desktop version."
        }), e.jsx("button", {
          className: eo.button,
          onPointerUp: () => s(!1),
          children: "That's so wise!"
        })]
      })
    })
  },
  k0 = (t, n) => {
    const s = t.getTime() - t.getTime() % 864e5,
      a = n.getTime() - n.getTime() % (86400 * 1e3);
    return s === a
  },
  D0 = () => {
    const t = _(),
      n = c(hi.selectAll),
      s = c(r => r.daily.selected),
      [a, i] = A.useState(null),
      o = c(r => r.daily.getDailyListFetchStatus);
    return A.useEffect(() => {
      (o === p.idle || o === p.rejected) && t(Dr.getList())
    }, [o]), A.useEffect(() => {
      let r = 0;
      for (let l = 0; l < n.length; l++) {
        const d = n[l];
        if (d.timestamp && new Date(d.timestamp) > r && (r = new Date(d.timestamp)), d.daily) {
          t(R_(d.id));
          break
        }
      }
      if (r && k0(new Date, new Date(r))) {
        const l = new Date(r),
          m = new Date(Date.UTC(l.getUTCFullYear(), l.getUTCMonth(), l.getUTCDate() + 1, 0, 0, 0, 0)) - new Date,
          h = Math.floor(m / 1e3);
        i(h)
      }
    }, [n]), e.jsxs(ue, {
      children: [e.jsx("div", {
        className: L.title_container,
        children: e.jsx("div", {
          className: L.title,
          children: "Daily streak awards"
        })
      }), e.jsx(g0, {
        secondsLeft: a
      }), e.jsxs("div", {
        className: L.info_layout,
        children: [e.jsx("div", {
          className: L.small_title_container,
          children: e.jsx("div", {
            className: L.small_title,
            children: "Stay on track for bigger rewards!"
          })
        }), e.jsx("div", {
          className: L.rewards_layout,
          children: e.jsx("div", {
            className: L.rewards_grid_container,
            children: n.map((r, l) => {
              const d = (l + 1) % 4 === 0,
                m = r.prices[0],
                h = [L.reward_item],
                g = [L.reward_item_amount],
                f = [L.reward_item_title];
              r.id === s && (h.push(L.reward_item_active), g.push(L.reward_item_amount_active)), d && f.push(L.reward_item_title_premium), d && !r.active && g.push(L.reward_item_amount_premium);
              let j = _0;
              return l >= 8 && l <= 15 && (j = f0), l >= 16 && l <= 23 && (j = x0), l >= 24 && l <= 31 && (j = v0), e.jsxs("div", {
                className: h.join(" "),
                onPointerUp: () => {
                  t(z({
                    id: performance.now(),
                    text: `${m.quantity} ${r.name} for ${m.price} TON`,
                    icon: ""
                  }))
                },
                children: [e.jsxs("div", {
                  className: L.reward_item_content_container,
                  children: [e.jsxs("div", {
                    className: f.join(" "),
                    children: ["Day ", l + 1]
                  }), e.jsx("img", {
                    src: j,
                    style: {
                      position: "absolute",
                      bottom: -12
                    }
                  }), e.jsx("div", {
                    className: L.reward_item_image_container,
                    children: e.jsx("img", {
                      alt: "item",
                      className: L.reward_item_image,
                      src: r.image_url
                    })
                  }), e.jsx("div", {
                    className: g.join(" "),
                    children: m.quantity
                  })]
                }), !r.daily && e.jsx("div", {
                  className: L.reward_item_completed,
                  children: e.jsx(I, {
                    size: 36,
                    style: {
                      fontWeight: 600
                    },
                    children: ""
                  })
                })]
              }, l)
            })
          })
        })]
      }), e.jsx(E0, {})]
    })
  },
  R0 = "_general_info_container_fv8d9_1",
  M0 = "_img_container_fv8d9_7",
  U0 = "_image_fv8d9_13",
  Q0 = "_title_fv8d9_19",
  O0 = "_description_container_fv8d9_25",
  F0 = "_description_fv8d9_25",
  Kt = {
    general_info_container: R0,
    img_container: M0,
    image: U0,
    title: Q0,
    description_container: O0,
    description: F0
  },
  z0 = "_info_layout_1p9dg_1",
  G0 = {
    info_layout: z0
  },
  L0 = "_no_template_container_uihlo_1",
  H0 = "_no_template_button_uihlo_10",
  q0 = "_template_container_uihlo_28",
  Y0 = "_template_info_container_uihlo_35",
  V0 = "_template_info_uihlo_35",
  W0 = "_buttons_container_uihlo_44",
  X0 = "_button_copy_uihlo_53",
  J0 = "_button_uihlo_44",
  Z0 = "_create_new_template_uihlo_72",
  st = {
    no_template_container: L0,
    no_template_button: H0,
    template_container: q0,
    template_info_container: Y0,
    template_info: V0,
    buttons_container: W0,
    button_copy: X0,
    button: J0,
    create_new_template: Z0
  },
  K0 = "_instruction_container_14ts7_1",
  $0 = "_img_container_14ts7_9",
  eN = "_image_14ts7_15",
  tN = "_instruction_text_14ts7_21",
  nN = "_preview_container_14ts7_26",
  sN = "_preview_image_container_14ts7_32",
  aN = "_preview_image_14ts7_32",
  iN = "_preview_image_loader_14ts7_45",
  oN = "_template_size_14ts7_60",
  rN = "_template_title_14ts7_68",
  cN = "_template_size_container_14ts7_73",
  lN = "_template_size_item_14ts7_79",
  dN = "_template_size_item_active_14ts7_87",
  uN = "_template_coords_14ts7_92",
  mN = "_template_coordinates_title_14ts7_102",
  AN = "_template_coords_container_14ts7_107",
  pN = "_coords_item_14ts7_114",
  hN = "_coords_input_14ts7_120",
  gN = "_file_button_container_14ts7_129",
  _N = "_file_button_14ts7_129",
  oe = {
    instruction_container: K0,
    img_container: $0,
    image: eN,
    instruction_text: tN,
    preview_container: nN,
    preview_image_container: sN,
    preview_image: aN,
    preview_image_loader: iN,
    template_size: oN,
    template_title: rN,
    template_size_container: cN,
    template_size_item: lN,
    template_size_item_active: dN,
    template_coords: uN,
    template_coordinates_title: mN,
    template_coords_container: AN,
    coords_item: pN,
    coords_input: hN,
    file_button_container: gN,
    file_button: _N
  },
  $s = {
    16: 512,
    32: 2048,
    64: 8192,
    128: 2e4
  },
  fN = ({
    templateSize: t,
    setTemplateSize: n
  }) => {
    const s = _(),
      a = c(He),
      i = a.friends || 64,
      [o] = A.useState([16, 32, 64, 128]);
    return e.jsxs("div", {
      className: oe.template_size,
      children: [e.jsx("div", {
        className: oe.template_title,
        children: "Select a template size"
      }), e.jsx("div", {
        className: oe.template_size_container,
        children: o.map(r => {
          if (r === 128 && !a.isContractor) return null;
          const l = [oe.template_size_item];
          return t === r && l.push(oe.template_size_item_active), e.jsx("div", {
            className: l.join(" "),
            onPointerUp: () => {
              i >= $s[r] || a.isContractor ? n(r) : s(z({
                id: performance.now(),
                text: `To unlock this size, invite ${$s[r]-i} more frens.`
              }))
            },
            children: `${r} X ${r}`
          }, r)
        })
      }), " "]
    })
  },
  xN = () => {
    const t = te(),
      n = c(i => i.template.myTemplate),
      s = c(i => i.user.user),
      a = s && s.friends >= $s[16] || s.isContractor;
    return n !== null ? null : e.jsxs("div", {
      className: st.no_template_container,
      children: [a && e.jsx("span", {
        className: "gray",
        children: "Create a template and share with your friends."
      }), !a && e.jsxs("span", {
        className: "gray",
        children: ["To unlock template creation, ", e.jsx("br", {}), " invite", " ", s && s.friends || 0, "/", $s[16], " friends"]
      }), a && e.jsx("button", {
        className: st.no_template_button,
        onPointerUp: () => {
          t.push("/template/create")
        },
        children: "Pixel Templates"
      }), !a && e.jsx("button", {
        className: st.no_template_button,
        onPointerUp: () => {
          t.push("/invite-frens")
        },
        children: "Invite frens"
      }), e.jsx("div", {
        style: {
          height: 30
        }
      })]
    })
  },
  vN = "_template_item_container_srp11_1",
  yN = "_template_item_inner_srp11_9",
  wN = "_template_image_srp11_17",
  jN = "_template_image_info_layout_srp11_24",
  bN = "_template_image_info_container_srp11_34",
  Cn = {
    template_item_container: vN,
    template_item_inner: yN,
    template_image: wN,
    template_image_info_layout: jN,
    template_image_info_container: bN
  },
  Vr = ({
    item: t,
    style: n = {}
  }) => {
    const s = _();
    return e.jsx("div", {
      className: Cn.template_item_container,
      style: {
        ...n
      },
      onPointerUp: async () => {
        t.templateId && t.templateId !== 0 && s(Za({
          show: !0,
          id: Number(t.templateId)
        }))
      },
      children: e.jsxs("div", {
        className: Cn.template_item_inner,
        children: [e.jsx("img", {
          alt: "image",
          className: Cn.template_image,
          src: t.url
        }), e.jsx("div", {
          className: Cn.template_image_info_layout,
          children: e.jsxs("div", {
            className: Cn.template_image_info_container,
            children: [e.jsx(I, {
              children: ""
            }), e.jsx("span", {
              children: rn(Math.max(0, t.subscribers))
            })]
          })
        })]
      })
    })
  },
  NN = () => {
    const t = te();
    return e.jsx("div", {
      className: st.create_new_template,
      onPointerUp: () => {
        t.push("/template/create")
      },
      children: "Create a new template"
    })
  },
  CN = () => {
    const t = c(a => a.user.user);
    let n = `${Bt}?startapp=f${(t==null?void 0:t.id)||""}_t`;
    t.squad && t.squad.id !== null && (n += `_s${t.squad.id}`);
    const s = c(a => a.template.myTemplate);
    return s === null ? null : e.jsxs("div", {
      className: st.template_container,
      children: [e.jsx(Vr, {
        item: {
          ...s,
          templateId: s.id
        },
        style: {
          width: 128,
          height: 128,
          paddingTop: 0
        }
      }), e.jsx("div", {
        className: st.template_info_container,
        children: e.jsxs("span", {
          className: st.template_info,
          children: ["Share this template with your frens, ", e.jsx("br", {}), " get reward for frens repaints."]
        })
      }), e.jsxs("div", {
        className: st.buttons_container,
        children: [e.jsx(qt, {
          url: n,
          className: st.button_copy,
          text: "Copy template link"
        }), e.jsx("button", {
          className: st.button,
          onPointerUp: a => {
            a.stopPropagation(), window.Telegram.WebApp.openTelegramLink(`https://t.me/share/url?url=${n}`)
          },
          children: "Share"
        })]
      }), e.jsx(NN, {})]
    })
  },
  IN = () => e.jsxs("div", {
    children: [e.jsx(xN, {}), e.jsx(CN, {})]
  }),
  PN = "_layout_94gj5_1",
  SN = "_container_94gj5_5",
  BN = "_button_container_94gj5_11",
  TN = "_button_94gj5_11",
  ea = {
    layout: PN,
    container: SN,
    button_container: BN,
    button: TN
  },
  EN = () => {
    const t = _(),
      n = A.useRef(null),
      s = A.useRef(0),
      a = c(m => m.template.listStatus),
      i = c(m => m.template.listOffset),
      o = c(m => m.template.listLimit),
      r = c(m => m.template.list),
      [l, d] = A.useState(!1);
    return A.useEffect(() => {
      let m = null;
      if (n.current && a === p.fulfilled && !l) {
        const h = {
            rootMargin: "0px",
            threshold: 1
          },
          g = (f, j) => {
            f.forEach(x => {
              x.intersectionRatio >= 1 && (t(St.getList({
                offset: i,
                limit: o
              })), j.unobserve(n.current))
            })
          };
        m = new IntersectionObserver(g, h), m.observe(n.current)
      }
      return () => {
        m && n.current && m.unobserve(n.current)
      }
    }, [a, i, o, l]), A.useEffect(() => {
      s.current === r.length && r.length !== 0 && d(!0), s.current = r.length
    }, [r]), l ? null : e.jsx("div", {
      className: ea.button_container,
      children: e.jsx("button", {
        ref: n,
        disabled: a === p.pending,
        className: ea.button,
        onPointerUp: () => {
          t(St.getList({
            offset: i,
            limit: o
          }))
        },
        children: "Load more"
      })
    })
  },
  kN = () => {
    const t = _(),
      n = c(o => o.template.listOffset),
      s = c(o => o.template.listLimit),
      a = c(o => o.template.list),
      i = c(o => o.template.referredTemplate);
    return A.useEffect(() => (t(St.getList({
      offset: n,
      limit: s
    })), () => {
      t(T_())
    }), []), e.jsxs("div", {
      className: ea.layout,
      children: [e.jsx("div", {
        className: ea.container,
        children: a.map(o => {
          if (Number(o.templateId) === 0) return null;
          let r = !1;
          return i !== null && Number(i.id) === Number(o.templateId) && (r = !0), e.jsx(Vr, {
            item: o,
            current: r
          }, o.templateId)
        })
      }), e.jsx(EN, {})]
    })
  },
  DN = () => {
    const t = c(n => n.template.activeTab);
    return e.jsxs("div", {
      className: G0.info_layout,
      children: [t === "my" && e.jsx(IN, {}), t === "catalog" && e.jsx(kN, {})]
    })
  },
  RN = () => {
    const t = _(),
      n = c(s => s.template.activeTab);
    return e.jsxs(pn, {
      children: [e.jsx(Fe, {
        active: n === "my",
        setActive: () => t(Li("my")),
        children: "My template"
      }), e.jsx(Fe, {
        active: n === "catalog",
        setActive: () => t(Li("catalog")),
        children: "Catalog"
      })]
    })
  },
  MN = () => e.jsxs(ae.Fragment, {
    children: [e.jsx(RN, {}), e.jsx(DN, {})]
  }),
  _a = "/assets/paintings_anim2-nk1iBB8J.gif",
  UN = "_container_1h1qc_1",
  QN = "_divider_1h1qc_19",
  ON = "_row_1h1qc_24",
  FN = "_row_title_1h1qc_36",
  zN = "_row_title_main_1h1qc_40",
  GN = "_row_hint_1h1qc_45",
  LN = "_row_value_1h1qc_51",
  HN = "_row_value_main_1h1qc_55",
  qN = "_mining_percent_1h1qc_60",
  YN = "_active_row_1h1qc_70",
  VN = "_button_1h1qc_81",
  to = {
    container: UN,
    divider: QN,
    row: ON,
    row_title: FN,
    row_title_main: zN,
    row_hint: GN,
    row_value: LN,
    row_value_main: HN,
    mining_percent: qN,
    active_row: YN,
    button: VN
  },
  WN = () => {
    const t = _(),
      n = c(a => a.template.showTemplateDetailsPopup),
      s = a => {
        t(Tr(a))
      };
    return e.jsx(Lt, {
      show: n,
      setShow: s,
      children: e.jsxs("div", {
        className: to.container,
        children: [e.jsx("h2", {
          children: "How does Templates work? "
        }), e.jsx("p", {
          children: "Paint the pixels in the correct color – get a PX. "
        }), e.jsx("p", {
          children: "Use global templates, join your frens' templates, or create your own."
        }), e.jsx("p", {
          children: "Create a template and get reward in PX. The reward depends on the number of painters of the template. Btw, the owner doesn't get an award for painting his template."
        }), e.jsx("button", {
          className: to.button,
          onPointerUp: () => s(!1),
          children: "That's so wise!"
        })]
      })
    })
  },
  XN = "_layout_2uiqn_1",
  JN = "_container_2uiqn_6",
  ZN = "_close_button_2uiqn_18",
  KN = "_title_container_2uiqn_26",
  $N = "_title_2uiqn_26",
  eC = "_image_container_2uiqn_37",
  tC = "_image_2uiqn_37",
  nC = "_image_placeholder_2uiqn_51",
  sC = "_info_container_2uiqn_58",
  aC = "_info_row_2uiqn_64",
  iC = "_info_title_2uiqn_69",
  oC = "_info_value_blue_2uiqn_73",
  rC = "_info_value_white_2uiqn_78",
  cC = "_buttons_container_2uiqn_82",
  lC = "_button_2uiqn_82",
  dC = "_not_button_2uiqn_98",
  uC = "_button_copy_2uiqn_109",
  ce = {
    layout: XN,
    container: JN,
    close_button: ZN,
    title_container: KN,
    title: $N,
    image_container: eC,
    image: tC,
    image_placeholder: nC,
    info_container: sC,
    info_row: aC,
    info_title: iC,
    info_value_blue: oC,
    info_value_white: rC,
    buttons_container: cC,
    button: lC,
    not_button: dC,
    button_copy: uC
  },
  mC = () => {
    const t = _(),
      n = c(d => d.template.templateInfoPopupId),
      [s, a] = A.useState(!1),
      i = c(d => d.user.user),
      o = c(d => d.template.referredTemplate),
      r = n === i.id,
      l = o !== null && n === o.id;
    return r ? e.jsx("div", {
      className: ce.not_button,
      children: "Your template. Cute!"
    }) : l ? e.jsx("div", {
      className: ce.not_button,
      children: "Selected template."
    }) : e.jsx("button", {
      disabled: s,
      className: ce.button,
      onPointerUp: async () => {
        if (!s) try {
          if (n && n !== 0) {
            if (a(!0), (await t(St.subscribe({
                id: n
              }))).meta.requestStatus === p.fulfilled) {
              await t(z({
                id: performance.now(),
                text: "Success!"
              }));
              const m = await t(St.getTemplateById({
                  id: n
                })),
                h = {
                  ...m.payload,
                  url: `${m.payload.url}?time=${Date.now()}`,
                  type: Re.referred
                };
              t(S_(h)), b.mainImage.worldTemplate.deleteTemplate(o.id), b.mainImage.worldTemplate.add(h), t(yi())
            } else await t(z({
              id: performance.now(),
              text: "Something wrong"
            }));
            a(!1)
          }
        } catch (d) {
          console.log(d), a(!1)
        }
      },
      children: "Select Template"
    })
  },
  AC = () => {
    const t = _(),
      [n, s] = A.useState(null),
      a = c(o => o.template.showTemplateInfoPopup),
      i = c(o => o.template.templateInfoPopupId);
    return A.useEffect(() => (i && (async () => {
      try {
        const r = await t(St.getTemplateById({
          id: i
        }));
        r.payload && s({
          ...r.payload
        })
      } catch {}
    })(), () => {
      s(null)
    }), [i]), Ge.createPortal(e.jsx(We, {
      onPointerUp: () => t(Za({
        show: !1
      })),
      show: a,
      children: e.jsx("div", {
        className: ce.layout,
        children: e.jsxs("div", {
          className: ce.container,
          onPointerUp: o => {
            o.stopPropagation()
          },
          children: [e.jsx("div", {
            className: ce.close_button,
            onPointerUp: () => {
              t(Za({
                show: !1
              }))
            },
            children: e.jsx(I, {
              size: 26,
              children: ""
            })
          }), e.jsx("div", {
            className: ce.title_container,
            children: e.jsxs("span", {
              className: ce.title,
              children: ["Template ", n && `${n.imageSize}x${n.imageSize}`]
            })
          }), e.jsxs("div", {
            className: ce.image_container,
            children: [n && e.jsx("img", {
              alt: "image",
              className: ce.image,
              src: n.url
            }), !n && e.jsx("div", {
              className: ce.image_placeholder
            })]
          }), e.jsxs("div", {
            className: ce.buttons_container,
            children: [e.jsx(mC, {}), e.jsx(qt, {
              url: `${Bt}?startapp=f${i}_t`,
              className: ce.button_copy,
              text: "Copy template link"
            })]
          }), e.jsxs("div", {
            className: ce.info_container,
            children: [e.jsxs("div", {
              className: ce.info_row,
              children: [e.jsx("span", {
                className: ce.info_title,
                children: "Coordinates"
              }), " ", e.jsx("span", {
                className: ce.info_value_blue,
                children: n ? `${n.x}, ${n.y}` : "Loading..."
              })]
            }), e.jsxs("div", {
              className: ce.info_row,
              children: [e.jsx("span", {
                className: ce.info_title,
                children: "Painters"
              }), " ", e.jsx("span", {
                className: ce.info_value_white,
                children: n ? `${n.subscribers}` : "Loading..."
              })]
            }), e.jsxs("div", {
              className: ce.info_row,
              children: [e.jsx("span", {
                className: ce.info_title,
                children: "Repaints"
              }), " ", e.jsx("span", {
                className: ce.info_value_white,
                children: n ? `${n.hits}` : "Loading..."
              })]
            })]
          })]
        })
      })
    }), document.body)
  },
  pC = () => {
    const t = _();
    return e.jsxs(ue, {
      children: [e.jsxs("div", {
        className: Kt.general_info_container,
        children: [e.jsx("div", {
          className: Kt.img_container,
          children: e.jsx("img", {
            alt: "img",
            className: Kt.image,
            src: _a
          })
        }), e.jsx("h1", {
          className: Kt.title,
          children: "Templates"
        }), e.jsxs("div", {
          className: Kt.description_container,
          children: [e.jsxs("span", {
            className: Kt.description,
            children: ["Use templates and get more PX ", e.jsx("br", {}), e.jsx(_n, {
              onPointerUp: n => {
                n.stopPropagation(), t(Tr(!0))
              },
              children: "How it works"
            })]
          }), e.jsx(WN, {})]
        })]
      }), e.jsx(MN, {}), e.jsx(AC, {})]
    })
  },
  hC = "_container_s1r1v_1",
  gC = "_page_s1r1v_13",
  _C = "_id_s1r1v_17",
  fC = "_title_s1r1v_22",
  xC = "_avatar_container_s1r1v_28",
  vC = "_avatar_s1r1v_28",
  yC = "_squad_avatar_container_s1r1v_40",
  wC = "_text_container_s1r1v_52",
  jC = "_dot_s1r1v_58",
  bC = "_user_name_s1r1v_63",
  NC = "_squad_name_s1r1v_69",
  CC = "_divider_s1r1v_75",
  IC = "_tabs_content_s1r1v_81",
  PC = "_content_info_s1r1v_85",
  SC = "_content_info_item_s1r1v_92",
  BC = "_content_info_item_title_s1r1v_96",
  TC = "_content_info_item_value_s1r1v_100",
  EC = "_no_content_s1r1v_106",
  kC = "_achievements_container_s1r1v_115",
  V = {
    container: hC,
    page: gC,
    id: _C,
    title: fC,
    avatar_container: xC,
    avatar: vC,
    squad_avatar_container: yC,
    text_container: wC,
    dot: jC,
    user_name: bC,
    squad_name: NC,
    divider: CC,
    tabs_content: IC,
    content_info: PC,
    content_info_item: SC,
    content_info_item_title: BC,
    content_info_item_value: TC,
    no_content: EC,
    achievements_container: kC
  },
  DC = () => {
    const t = c(l => l.canvas.pixelInfo),
      n = c(l => l.ratings.list),
      s = c(l => l.canvas.getPixelInfoFetchStatus),
      a = c(l => l.main.userAndSquadPopupStack),
      i = c(l => l.squad.getInfoFetchStatus),
      o = c(l => l.squad.info);
    if (a.length === 0) return {
      ready: !1,
      data: null,
      item: {
        dataSource: null
      }
    };
    const r = a[a.length - 1];
    if (r.dataSource === $e.userFromPixelInfo) return {
      ready: s === p.fulfilled && t !== null,
      data: t == null ? void 0 : t.owner,
      item: r
    };
    if (r.dataSource === $e.squadFromData) return {
      ready: i === p.fulfilled && o !== null,
      data: o,
      item: r
    };
    if (r.dataSource === $e.userFromRating) {
      const l = r.index,
        d = n.length;
      return {
        ready: l < d,
        data: n[l],
        item: r
      }
    }
    return null
  },
  Rt = (t = !0) => {
    const [n, s] = A.useState({
      ready: !1,
      data: null
    }), a = DC(), i = c(He);
    return A.useEffect(() => {
      n && s({
        ready: !0,
        data: i
      })
    }, [i]), t ? a : n
  },
  RC = ({
    isPopupContent: t = !0
  }) => {
    const {
      data: n,
      ready: s
    } = Rt(t);
    if (!s) return e.jsx(tt, {
      show: !s,
      children: e.jsx("div", {
        className: V.text_container,
        children: e.jsx("span", {
          className: V.user_name,
          children: "No name • @notpixel"
        })
      })
    });
    const i = Ln(n.firstName || "No name");
    return e.jsx("div", {
      className: V.text_container,
      children: e.jsx("span", {
        className: V.user_name,
        children: i
      })
    })
  },
  MC = ({
    isPopupContent: t = !0
  }) => {
    var o;
    const n = _(),
      {
        data: s,
        ready: a
      } = Rt(t);
    return a ? ((o = s == null ? void 0 : s.squad) == null ? void 0 : o.name) && s.squad.name !== null ? e.jsxs("div", {
      className: V.text_container,
      children: [e.jsx("span", {
        className: V.squad_name,
        children: "Squad"
      }), e.jsx(_n, {
        onPointerUp: () => {
          n(ha.getInfo({
            id: s.squad.id
          })), n(Yn({
            dataSource: $e.squadFromData
          }))
        },
        children: Ln(s.squad.name, 20)
      })]
    }) : e.jsx("div", {
      className: V.text_container,
      children: e.jsx("span", {
        className: V.squad_name,
        children: "No squad"
      })
    }) : e.jsx(tt, {
      show: !a,
      children: e.jsx("div", {
        className: V.text_container,
        children: e.jsx("span", {
          className: V.squad_name,
          children: "Loading..."
        })
      })
    })
  },
  UC = ({
    isPopupContent: t = !0
  }) => {
    var i;
    const {
      data: n,
      ready: s
    } = Rt(t);
    let a = it;
    return s && n.userPic && n.userPic !== "" && (a = n.userPic), e.jsxs("div", {
      className: V.avatar_container,
      children: [e.jsx("img", {
        alt: "avatar",
        className: V.avatar,
        src: a
      }), e.jsx("div", {
        className: V.squad_avatar_container,
        children: e.jsx(Ii, {
          src: ((i = n == null ? void 0 : n.squad) == null ? void 0 : i.logo) || ""
        })
      })]
    })
  },
  QC = ({
    isPopupContent: t = !0
  }) => {
    const n = _(),
      {
        data: s,
        ready: a
      } = Rt(t);
    return e.jsxs("div", {
      children: [a && s.id !== 0 && e.jsx("span", {
        className: V.id,
        onPointerUp: async i => {
          i.preventDefault(), i.stopPropagation();
          try {
            await Hn(`${s.id}`), await n(z({
              id: performance.now(),
              text: "Copied!"
            }))
          } catch {
            await n(z({
              id: performance.now(),
              text: "Can't copy!"
            }))
          }
        },
        children: s.id
      }), e.jsx(tt, {
        show: !a,
        children: e.jsx("span", {
          children: "Owner"
        })
      })]
    })
  },
  OC = ({
    active: t,
    setActive: n
  }) => e.jsxs(pn, {
    style: {},
    children: [e.jsx(Fe, {
      active: t === "info",
      setActive: () => n("info"),
      children: "Info"
    }), e.jsx(Fe, {
      active: t === "achievements",
      setActive: () => n("achievements"),
      children: "Achievements"
    }), e.jsx(Fe, {
      active: t === "inventory",
      setActive: () => n("inventory"),
      children: "Inventory"
    })]
  }),
  FC = () => e.jsx("div", {
    className: V.divider
  }),
  zC = ({
    isPopupContent: t = !0
  }) => {
    const {
      data: n,
      ready: s
    } = Rt(t);
    return e.jsxs("div", {
      className: V.content_info,
      children: [e.jsxs("div", {
        className: V.content_info_item,
        children: [e.jsx("div", {
          className: V.content_info_item_title,
          children: "Leaderboard Place"
        }), e.jsx("div", {
          className: V.content_info_item_value,
          children: s ? "Soon" : 0
        })]
      }), e.jsxs("div", {
        className: V.content_info_item,
        children: [e.jsx("div", {
          className: V.content_info_item_title,
          children: "Score"
        }), e.jsx("div", {
          className: V.content_info_item_value,
          children: s ? "Soon" : 0
        })]
      }), e.jsxs("div", {
        className: V.content_info_item,
        children: [e.jsx("div", {
          className: V.content_info_item_title,
          children: "Pixels recolored"
        }), e.jsx("div", {
          className: V.content_info_item_value,
          children: s ? De({
            num: n.repaints
          }) : 0
        })]
      }), e.jsxs("div", {
        className: V.content_info_item,
        children: [e.jsx("div", {
          className: V.content_info_item_title,
          children: "PX mined"
        }), e.jsx("div", {
          className: V.content_info_item_value,
          children: s ? De({
            num: n.balance
          }) : 0
        })]
      })]
    })
  },
  GC = "_container_os5nt_1",
  LC = "_not_completed_os5nt_6",
  HC = "_image_container_os5nt_10",
  qC = "_image_os5nt_10",
  YC = "_bold_os5nt_20",
  VC = "_gray_os5nt_24",
  WC = "_description_container_os5nt_28",
  Mt = {
    container: GC,
    not_completed: LC,
    image_container: HC,
    image: qC,
    bold: YC,
    gray: VC,
    description_container: WC
  },
  XC = ({
    completed: t,
    item: n
  }) => e.jsxs("div", {
    className: F(Mt.container, t ? "" : Mt.not_completed),
    children: [e.jsx("div", {
      className: Mt.image_container,
      children: e.jsx("img", {
        src: n.src,
        className: Mt.image
      })
    }), e.jsxs("div", {
      className: Mt.description_container,
      children: [e.jsx("span", {
        className: Mt.bold,
        children: n.title
      }), e.jsx("span", {
        className: Mt.gray,
        children: n.description
      })]
    })]
  }),
  JC = "/assets/0-CBlm-5t2.gif",
  ZC = "/assets/1-C1eaF-Lh.gif",
  KC = "/assets/2-Dx7l5fvD.gif",
  $C = "data:image/gif;base64,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",
  eI = "/assets/4-B9SjwR-x.gif",
  tI = "/assets/5-D2MXnTsp.gif",
  nI = "/assets/6-DGYxyagY.gif",
  sI = "/assets/10-BNY74yH-.gif",
  aI = "/assets/12-B0vEyGRB.gif",
  iI = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF0AAABkCAYAAADkBDymAAACSElEQVR4nO3doU5cQRSA4dmymz4DZkG0dU0wKB5gDXZVBSsxTfcBKmrql6SikhUoUlcED4DCNMHRCrqmz9AAadMHmHPDKXP/Jfk/Oxku/BlxMrnLDibz/ZJxvvj6J7WxlHJ7+by6Ntr9nf2xvf4uk/n+IPvMZ9mNyjM6wOgAowOMDjA6YBg9MhoLV6fh1iay412bffHIHI2UnnSA0QFGBxgdYHSA0QH/xpq1Ggs3tzeqa/2Phbl9XXs96QCjA4wOMDrA6ACjA4wOMDrA6ACjA4wOMDrA6ACjA/q/u+24vo10Xac+FZ50gNEBRgcYHWB0gNEBzUbGaCz8sPxSXfv4KfcZqMjx4mew+qq6Eu0b7W6lfx9POsDoAKMDjA4wOsDogPQLpF03hdFY+PLF6+ra9x9X1bVonNz5XN/37bD+vGgsnM3rY2H0vK5netIBRgcYHWB0gNEBRgc0u2XMjoXRvkg0orXwP8/zpAOMDjA6wOgAowOMDmj2MfXoFvLk4nrdOjy66IbSkw4wOsDoAKMDjA4wOgD5+EsLB+/GvT5vebRK7/WkA4wOMDrA6ACjA4wOCEfG8fSuutZ1A/nr5r669mav/pGT6Aay77GwFU86wOgAowOMDjA6wOiAYfbbBsfT+CtnWvzv9fdvz6prLd6dbPHOZfGkM4wOMDrA6ACjA4wOMDogPUx3zffxHF+/Mj5eMCEeKnpBtPjVmOvH6ACjA4wOMDrA6IBmL5Bmr4xn863wynhdZP++4klnGB1gdIDRAUYHGL1vpZS/8GF1OTKsdsMAAAAASUVORK5CYII=",
  oI = [{
    id: 1,
    src: JC,
    title: "Beta Pixel",
    description: "Someone who's seen the First Pixel. Show respect. He has nightmares about cubes and flags."
  }, {
    id: 2,
    src: ZC,
    title: "Pixel's 16 frens",
    description: "Invite 16 frens. A great company is the key to success!"
  }, {
    id: 3,
    src: KC,
    title: "Pixel Brotherhood",
    description: "Invite 64 frens. Where'd you get that charisma, buddy?"
  }, {
    id: 4,
    src: $C,
    title: "My pixel dudes",
    description: "Invite 128 frens. Admit it, are your relatives in the game too?"
  }, {
    id: 5,
    src: eI,
    title: "Thunder Pixel",
    description: "Paint 64,000 pixels. Is your finger on fire?"
  }, {
    id: 6,
    src: tI,
    title: "Master over Pixels",
    description: "Paint 128,000 pixels. Have you considered a career as a pixel artist?"
  }, {
    id: 7,
    src: nI,
    title: "Malevich",
    description: "Paint 512,000 pixels. Either the most dedicated artist or the most dedicated auto-clicker."
  }, {
    id: 11,
    src: sI,
    title: "Platinum Pixel",
    description: "Platinum League member. Your mom would be proud of you."
  }, {
    id: 13,
    src: aI,
    title: "Ambassador",
    description: "Invited 10,000 frens. You're either very friendly or a bot. A friendly bot?"
  }, {
    id: 14,
    src: iI,
    title: "Pixanos' Snap",
    description: "Use of Pixanos. Your snap destroyed half the world. Or did it save it?"
  }],
  rI = ({
    isPopupContent: t
  }) => {
    const {
      ready: n,
      data: s
    } = Rt(t);
    return e.jsx("div", {
      className: V.achievements_container,
      children: oI.map(a => e.jsx(XC, {
        item: a,
        completed: n && s.achievements && s.achievements[a.id]
      }, a.id))
    })
  },
  cI = () => e.jsxs("div", {
    className: V.no_content,
    children: ["Something will happen here,", e.jsx("br", {}), " but not now."]
  }),
  lI = ({
    active: t,
    isPopupContent: n = !0
  }) => e.jsxs("div", {
    className: V.tabs_content,
    children: [t === "info" && e.jsx(zC, {
      isPopupContent: n
    }), t === "achievements" && e.jsx(rI, {
      isPopupContent: n
    }), t === "inventory" && e.jsx(cI, {})]
  }),
  dI = ({
    isPopupContent: t = !0
  }) => {
    const [n, s] = A.useState("info");
    return e.jsxs("div", {
      style: {
        width: "100%"
      },
      children: [e.jsx(OC, {
        active: n,
        setActive: s
      }), e.jsx(FC, {}), e.jsx(lI, {
        active: n,
        isPopupContent: t
      })]
    })
  },
  uI = "_layout_c6k10_1",
  mI = "_close_button_c6k10_6",
  Wr = {
    layout: uI,
    close_button: mI
  },
  Xr = () => {
    const t = _();
    return e.jsx("div", {
      className: Wr.close_button,
      onPointerUp: () => {
        t(fr())
      },
      children: e.jsx(I, {
        size: 26,
        children: ""
      })
    })
  },
  ti = ({
    isPopupContent: t = !0
  }) => {
    const n = t ? "Painter" : "My Profile";
    return e.jsxs("div", {
      className: F(V.container, !t && V.page),
      children: [t && e.jsx(Xr, {}), e.jsx("div", {
        children: e.jsx("span", {
          className: V.title,
          children: n
        })
      }), e.jsx(UC, {
        isPopupContent: t
      }), e.jsx(RC, {
        isPopupContent: t
      }), e.jsx(MC, {
        isPopupContent: t
      }), e.jsx(QC, {
        isPopupContent: t
      }), e.jsx(dI, {
        isPopupContent: t
      })]
    })
  },
  AI = () => {
    const t = _(),
      n = c(He);
    return A.useEffect(() => (n && n.id && t(L_.getListByUserId({
      userId: n.id
    })), () => {
      t(F_())
    }), [n]), e.jsx(ue, {
      children: e.jsx(ti, {
        isPopupContent: !1
      })
    })
  },
  pI = "_container_1bw7p_1",
  hI = {
    container: pI
  },
  gI = "_container_12mk9_1",
  _I = "_page_12mk9_13",
  fI = "_id_12mk9_17",
  xI = "_title_12mk9_22",
  vI = "_avatar_container_12mk9_28",
  yI = "_avatar_12mk9_28",
  wI = "_text_container_12mk9_39",
  jI = "_dot_12mk9_45",
  bI = "_user_name_12mk9_50",
  NI = "_squad_slug_12mk9_56",
  CI = "_your_squad_button_12mk9_62",
  II = "_join_squad_button_12mk9_75",
  PI = "_red_12mk9_91",
  SI = "_divider_12mk9_95",
  BI = "_tabs_content_12mk9_101",
  TI = "_content_info_12mk9_105",
  EI = "_content_info_item_12mk9_112",
  kI = "_content_info_item_title_12mk9_116",
  DI = "_content_info_item_value_12mk9_120",
  RI = "_content_top_12mk9_127",
  MI = "_content_top_item_12mk9_140",
  UI = "_content_top_item_image_12mk9_150",
  QI = "_content_top_name_12mk9_156",
  OI = "_content_top_arrow_12mk9_162",
  FI = "_gray_12mk9_166",
  D = {
    container: gI,
    page: _I,
    id: fI,
    title: xI,
    avatar_container: vI,
    avatar: yI,
    text_container: wI,
    dot: jI,
    user_name: bI,
    squad_slug: NI,
    your_squad_button: CI,
    join_squad_button: II,
    red: PI,
    divider: SI,
    tabs_content: BI,
    content_info: TI,
    content_info_item: EI,
    content_info_item_title: kI,
    content_info_item_value: DI,
    content_top: RI,
    content_top_item: MI,
    content_top_item_image: UI,
    content_top_name: QI,
    content_top_arrow: OI,
    gray: FI
  },
  Jr = ({
    data: t,
    ready: n
  }) => {
    let s = it;
    return n && t.squad.logo && t.squad.logo !== "" && (s = t.squad.logo), e.jsx("div", {
      className: D.avatar_container,
      children: e.jsx("img", {
        alt: "avatar",
        className: D.avatar,
        src: s
      })
    })
  },
  Zr = ({
    data: t,
    ready: n
  }) => {
    if (!n) return e.jsx(tt, {
      show: !n,
      children: e.jsx("div", {
        className: D.text_container,
        children: e.jsx("span", {
          className: D.user_name,
          children: "No name • @notpixel"
        })
      })
    });
    const a = (() => {
      var i;
      return Ln(((i = t == null ? void 0 : t.squad) == null ? void 0 : i.name) || "No name")
    })();
    return e.jsx("div", {
      className: D.text_container,
      children: e.jsx("span", {
        className: D.user_name,
        children: a
      })
    })
  },
  Kr = ({
    data: t,
    ready: n
  }) => {
    var a;
    return n ? ((a = t == null ? void 0 : t.squad) == null ? void 0 : a.slug) && t.squad.slug !== null ? e.jsx("div", {
      className: D.text_container,
      children: e.jsx(fn, {
        address: `${It}?startapp=${btoa(`id=${t.squad.id}`)}`,
        display: t.squad.slug,
        limit: 18
      })
    }) : e.jsx("div", {
      className: D.text_container,
      children: e.jsx("span", {
        className: D.squad_slug,
        children: "No squad slug"
      })
    }) : e.jsx(tt, {
      show: !n,
      children: e.jsx("div", {
        className: D.text_container,
        children: e.jsx("span", {
          children: "Loading..."
        })
      })
    })
  },
  $r = ({
    data: t,
    ready: n
  }) => {
    const s = c(i => i.user.user);
    return n ? s !== null && s.squad.id !== null && s.squad.id === t.squad.id ? e.jsxs("div", {
      className: D.your_squad_button,
      onPointerUp: () => {
        W(`https://t.me/${It}?startapp=${btoa(`id=${t.squad.id}`)}`)
      },
      children: [e.jsx("span", {
        className: D.gray,
        children: "Your Squad."
      }), " ", e.jsx("span", {
        className: D.red,
        children: "Leave? "
      })]
    }) : e.jsx("button", {
      onPointerUp: () => {
        W(`https://t.me/${It}?startapp=${btoa(`id=${t.squad.id}`)}`)
      },
      className: D.join_squad_button,
      children: "Join squad"
    }) : null
  },
  zI = ({
    active: t,
    setActive: n
  }) => e.jsx(pn, {
    style: {},
    children: e.jsx(Fe, {
      active: t === "info",
      setActive: () => n("info"),
      children: "Info"
    })
  }),
  GI = () => e.jsx("div", {
    className: D.divider
  }),
  LI = ({
    data: t,
    ready: n
  }) => e.jsxs("div", {
    className: D.content_info,
    children: [e.jsxs("div", {
      className: D.content_info_item,
      children: [e.jsx("div", {
        className: D.content_info_item_title,
        children: "League"
      }), e.jsx("div", {
        className: D.content_info_item_value,
        children: n ? t.league : "-"
      })]
    }), e.jsxs("div", {
      className: D.content_info_item,
      children: [e.jsx("div", {
        className: D.content_info_item_title,
        children: "Place"
      }), e.jsx("div", {
        className: D.content_info_item_value,
        children: n ? De({
          num: t.rank
        }) : 0
      })]
    }), e.jsxs("div", {
      className: D.content_info_item,
      children: [e.jsx("div", {
        className: D.content_info_item_title,
        children: "Score"
      }), e.jsx("div", {
        className: D.content_info_item_value,
        children: n ? De({
          num: t.squad.scoredRepaints
        }) : 0
      })]
    }), e.jsxs("div", {
      className: D.content_info_item,
      children: [e.jsx("div", {
        className: D.content_info_item_title,
        children: "Members"
      }), e.jsx("div", {
        className: D.content_info_item_value,
        children: n ? De({
          num: t.squad.players
        }) : 0
      })]
    }), e.jsxs("div", {
      className: D.content_info_item,
      children: [e.jsx("div", {
        className: D.content_info_item_title,
        children: "Pixels recolored"
      }), e.jsx("div", {
        className: D.content_info_item_value,
        children: n ? De({
          num: t.squad.totalRepaints
        }) : 0
      })]
    }), e.jsxs("div", {
      className: D.content_info_item,
      children: [e.jsx("div", {
        className: D.content_info_item_title,
        children: "PX mined"
      }), e.jsx("div", {
        className: D.content_info_item_value,
        children: n ? De({
          num: t.squad.totalBalance
        }) : 0
      })]
    })]
  }),
  HI = [{
    name: "123",
    avatar: zt
  }, {
    name: "123",
    avatar: ""
  }, {
    name: "123",
    avatar: null
  }, {
    name: "123",
    avatar: zt
  }, {
    name: "123",
    avatar: zt
  }],
  qI = () => e.jsx("div", {
    className: D.content_top,
    children: HI.map((t, n) => {
      const s = t.avatar && t.avatar !== "" ? t.avatar : it;
      return e.jsxs("div", {
        className: D.content_top_item,
        children: [e.jsx("img", {
          alt: "img",
          className: D.content_top_item_image,
          src: s
        }), e.jsxs("div", {
          className: D.content_top_name,
          children: [e.jsx("span", {
            className: D.gray,
            children: n + 1
          }), e.jsx("span", {
            className: D.gray,
            children: "•"
          }), e.jsx("span", {
            children: t.name
          })]
        }), e.jsx("div", {
          className: D.content_top_arrow,
          children: e.jsx(I, {
            children: ""
          })
        })]
      }, n)
    })
  }),
  YI = ({
    isPopupContent: t,
    active: n,
    data: s,
    ready: a
  }) => e.jsxs("div", {
    className: D.tabs_content,
    children: [n === "info" && e.jsx(LI, {
      isPopupContent: t,
      data: s,
      ready: a
    }), n === "top" && e.jsx(qI, {})]
  }),
  ec = ({
    data: t,
    ready: n
  }) => {
    const [s, a] = A.useState("info");
    return e.jsxs("div", {
      style: {
        width: "100%"
      },
      children: [e.jsx(zI, {
        active: s,
        setActive: a
      }), e.jsx(GI, {}), e.jsx(YI, {
        active: s,
        data: t,
        ready: n
      })]
    })
  },
  VI = () => {
    const t = _(),
      n = c(o => o.user.user),
      a = c(o => o.squad.getInfoFetchStatus) === p.fulfilled,
      i = c(o => o.squad.info);
    return A.useEffect(() => {
      n && n.squad && n.squad.id && t(ha.getInfo({
        id: n.squad.id
      }))
    }, []), e.jsx(ue, {
      children: e.jsxs("div", {
        className: hI.container,
        children: [e.jsx(Jr, {
          data: i,
          ready: a
        }), e.jsx(Zr, {
          data: i,
          ready: a
        }), e.jsx(Kr, {
          data: i,
          ready: a
        }), e.jsx($r, {
          data: i,
          ready: a
        }), e.jsx(ec, {
          data: i,
          ready: a
        })]
      })
    })
  },
  WI = ({
    setFile: t,
    loading: n
  }) => {
    const s = ["image/png", "image/webp", "image/svg+xml", "image/gif", "image/bmp", "image/tiff"];
    return e.jsxs("div", {
      className: oe.file_button_container,
      children: [e.jsx("input", {
        type: "file",
        id: "custom-input",
        accept: s.join(", "),
        disabled: n,
        onChange: a => {
          var i;
          try {
            const o = (i = a.target.files) == null ? void 0 : i[0];
            if (!o) return;
            const r = new FileReader;
            r.addEventListener("load", l => {
              const d = document.createElement("img");
              d.addEventListener("load", () => {
                t(d)
              }), d.src = l.target.result
            }, !1), r.readAsDataURL(o)
          } catch (o) {
            console.error(o)
          }
        },
        hidden: !0
      }), e.jsx("label", {
        htmlFor: "custom-input",
        id: "choose-file",
        className: oe.file_button,
        children: "Upload a picture"
      })]
    })
  },
  XI = ({
    dataUrl: t,
    loading: n,
    templateSize: s
  }) => e.jsx("div", {
    className: oe.preview_container,
    children: e.jsxs("div", {
      className: oe.preview_image_container,
      children: [e.jsx("img", {
        alt: "templateImage",
        id: "templateImage",
        className: oe.preview_image,
        src: t
      }), n && e.jsx("div", {
        className: oe.preview_image_loader,
        children: "Loading..."
      })]
    })
  }),
  JI = t => {
    const n = new Uint8Array(t.data);
    for (let s = 0; s < n.length; s += 4) {
      const a = n[s],
        i = n[s + 1],
        o = n[s + 2];
      if (n[s + 3] === 0) continue;
      let l = et[0],
        d = 1 / 0;
      for (const h of et) {
        const g = on.deltaE(on(cn(a, i, o)), on(h));
        g < d && (d = g, l = h)
      }
      const m = Ot(l);
      t.data[s] = m.r, t.data[s + 1] = m.g, t.data[s + 2] = m.b, t.data[s + 3] = 255
    }
  },
  ZI = ({
    loading: t,
    imageData: n,
    posX: s,
    posY: a
  }) => {
    const i = _(),
      o = te(),
      r = c(h => h.template.myTemplate),
      l = c(h => h.user.user),
      [d, m] = A.useState(!1);
    return e.jsx("div", {
      className: oe.file_button_container,
      children: e.jsx("button", {
        disabled: t || d,
        className: oe.file_button,
        onPointerUp: async () => {
          try {
            m(!0);
            const h = new Blob([n.data], {
              type: "application/octet-stream"
            });
            if ((await Ye.uploadTemplate({
                blob: h,
                posX: s,
                posY: a
              })).status === 200) {
              r && b.mainImage.worldTemplate.deleteTemplate(r.id);
              const f = await i(St.getTemplateById({
                  id: l.id
                })),
                j = {
                  ...f.payload,
                  url: `${f.payload.url}?time=${Date.now()}`,
                  type: Re.my
                };
              i(B_(j)), i(yi()), await b.mainImage.worldTemplate.add(j), i(z({
                id: performance.now(),
                text: "Create successfully!",
                icon: ""
              })), o.push("/template")
            } else i(z({
              id: performance.now(),
              text: "Error, try again",
              icon: ""
            }));
            m(!1)
          } catch {
            i(z({
              id: performance.now(),
              text: "Use another coordinates",
              icon: ""
            })), m(!1)
          }
        },
        children: "Create template"
      })
    })
  },
  KI = ({
    templateSize: t,
    setTemplateSize: n,
    coords: s,
    setCoords: a
  }) => (A.useState([16, 32, 64, 128]), e.jsxs("div", {
    className: oe.template_coords,
    children: [e.jsx("div", {
      className: oe.template_coordinates_title,
      children: "Input template coordinates:"
    }), e.jsxs("div", {
      className: oe.template_coords_container,
      children: [e.jsxs("div", {
        className: oe.coords_item,
        children: [e.jsx("span", {
          children: "x:"
        }), e.jsx("input", {
          type: "text",
          placeholder: "x",
          value: s.x,
          onChange: i => {
            if (isNaN(i.target.value)) return;
            const r = {
              x: Number(i.target.value),
              y: s.y
            };
            Pt(r) && a(r)
          },
          className: oe.coords_input
        })]
      }), e.jsxs("div", {
        className: oe.coords_item,
        children: [e.jsx("span", {
          children: "y:"
        }), e.jsx("input", {
          type: "text",
          placeholder: "y",
          value: s.y,
          onChange: i => {
            if (isNaN(i.target.value)) return;
            const o = Number(i.target.value),
              r = {
                x: s.x,
                y: o
              };
            Pt(r) && a(r)
          },
          className: oe.coords_input
        })]
      })]
    })]
  })),
  $I = () => e.jsxs("div", {
    className: oe.instruction_container,
    children: [e.jsx("div", {
      className: oe.img_container,
      children: e.jsx("img", {
        alt: "img",
        className: oe.image,
        src: _a
      })
    }), e.jsx("div", {
      className: oe.instruction_text,
      children: "Upload a picture and create a template"
    })]
  }),
  eP = () => {
    _(), c(He);
    const [t, n] = A.useState(null), [s, a] = A.useState(null), [i, o] = A.useState(null), [r, l] = A.useState(16), [d, m] = A.useState({
      x: "",
      y: ""
    }), [h, g] = A.useState(!1);
    return A.useEffect(() => {}, []), A.useEffect(() => {
      if (t !== null) {
        g(!0);
        const f = async () => {
          const j = document.createElement("canvas"),
            x = j.getContext("2d");
          x.imageSmoothingEnabled = !1;
          const y = t.width / t.height;
          let B, C;
          y > 1 ? (B = r, C = r / y) : (C = r, B = r * y);
          const Ce = (r - B) / 2,
            be = (r - C) / 2;
          j.width = r, j.height = r, x.drawImage(t, Ce, be, B, C);
          const Y = x.getImageData(0, 0, r, r);
          JI(Y), x.putImageData(Y, 0, 0), a(Y), o(j.toDataURL())
        };
        setTimeout(() => {
          f().then(() => {
            g(!1)
          })
        }, 100)
      }
    }, [t, r]), e.jsxs(ue, {
      children: [i === null && e.jsx($I, {}), i !== null && e.jsx(XI, {
        loading: h,
        dataUrl: i,
        templateSize: r
      }), i !== null && e.jsx(fN, {
        templateSize: r,
        setTemplateSize: l
      }), i !== null && e.jsx(KI, {
        coords: d,
        setCoords: m,
        templateSize: r,
        setTemplateSize: l
      }), t === null && e.jsx(WI, {
        setFile: n,
        templateSize: r,
        loading: h
      }), t !== null && e.jsx(ZI, {
        loading: h,
        imageData: s,
        posX: d.x,
        posY: d.y
      })]
    })
  },
  tP = "_layout_10ga3_1",
  nP = "_container_10ga3_9",
  sP = "_header_10ga3_18",
  aP = "_bg_image_10ga3_25",
  iP = "_title_10ga3_34",
  oP = "_description_10ga3_43",
  rP = "_timer_10ga3_52",
  cP = "_timer_inner_10ga3_61",
  lP = "_timer_text_10ga3_69",
  dP = "_line_10ga3_73",
  uP = "_requirements_title_10ga3_79",
  mP = "_requirements_10ga3_79",
  AP = "_item_10ga3_94",
  pP = "_item_image_10ga3_107",
  hP = "_main_info_10ga3_113",
  gP = "_other_criteria_10ga3_120",
  _P = "_gray_10ga3_125",
  fP = "_soon_10ga3_129",
  xP = "_icon_10ga3_134",
  vP = "_completed_icon_10ga3_145",
  yP = "_not_completed_icon_10ga3_149",
  Q = {
    layout: tP,
    container: nP,
    header: sP,
    bg_image: aP,
    title: iP,
    description: oP,
    timer: rP,
    timer_inner: cP,
    timer_text: lP,
    line: dP,
    requirements_title: uP,
    requirements: mP,
    item: AP,
    item_image: pP,
    main_info: hP,
    other_criteria: gP,
    gray: _P,
    soon: fP,
    icon: xP,
    completed_icon: vP,
    not_completed_icon: yP
  },
  In = ({
    success: t
  }) => t ? e.jsx("div", {
    className: F(Q.completed_icon, Q.icon),
    children: e.jsx(I, {
      size: 14,
      children: ""
    })
  }) : e.jsx("div", {
    className: F(Q.not_completed_icon, Q.icon),
    children: e.jsx(I, {
      size: 14,
      children: ""
    })
  }),
  wP = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAIAAAABc2X6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAF42lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDYgNzkuMTY0NjQ4LCAyMDIxLzAxLzEyLTE1OjUyOjI5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjIuMiAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDI0LTEyLTExVDAwOjIzOjMyKzA0OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyNC0xMi0xMVQwMTowNzo1OSswNDowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyNC0xMi0xMVQwMTowNzo1OSswNDowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDplZWM0MWRiNi01NTc4LTA5NDQtOTEwMC0xZmFjNmI2OWU4ZjMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N2Y1OWJhYWItYjg5My01OTRjLWIzOGEtNmZhMzc5YTg0OWQ3IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6N2Y1OWJhYWItYjg5My01OTRjLWIzOGEtNmZhMzc5YTg0OWQ3Ij4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo3ZjU5YmFhYi1iODkzLTU5NGMtYjM4YS02ZmEzNzlhODQ5ZDciIHN0RXZ0OndoZW49IjIwMjQtMTItMTFUMDA6MjM6MzIrMDQ6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi4yIChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZWVjNDFkYjYtNTU3OC0wOTQ0LTkxMDAtMWZhYzZiNjllOGYzIiBzdEV2dDp3aGVuPSIyMDI0LTEyLTExVDAxOjA3OjU5KzA0OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjIuMiAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+UlXQ3AAAAMdJREFUeNrt2jEKgzAUBmAv4+rmAdw7ufUMTr1Dj+MRO7hJhwp95CWCfvBPj4TwLT8hpOuH6VbpgIGBgYGBgYGBgYGBgYGBgYGBgS8JXtbP6QEGBs4Bz693KFl7gYGB80srurf2WcDAwL8zPp57WoK/zwUGBs55AIiWSnRNeVEBAwNnFlh0TXlRAQMDZ+L/mecigYGBSy8kJXNgYOBzwEcFdpR6RQUMDFwL3wYJDAxcC3+Ln3jAwD6XAgMDAwMDAwMDAwMDt84G/cS8L/nGwNwAAAAASUVORK5CYII=",
  jP = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAABfElEQVR4nO3csU7CYBRA4UrYZOIB3NBNmdzrbHgZnsO3YTS6uznCCGElDDrLxNBL0lIO7f/HnG8Dg21OLjetEG8mj+VfoYsNTMcYEDIgZEDIgJABIQNCBoQMCBkQMiBkQMiAkAEhA0IGhAwIGRAyIDTM9cRW3x+Vx/dPL8nOpY4TCBkQMiCUzQ6MOy/6Wowqzzy//vR3cjWcQMiAkAGhZDuwaeftN7Pan+eyE51AyICQAaGr7cCmndakaefR42/fp5XH5XyMjnfkBEIGhAwIdfYd6Xid1rff5bpyxGvtvMgJhAwIGRDq7F6Y3pu23aF97bzICYQMCBkQyuYzkc+3XXgm7XXkuZxAyICQAaHeduDpjvsfsv1yUbwwjm4f7lKc1gnfwpABoc7+Hth257W9d+3695/LCYQMCBkQSnYZQ3dSfH2q60wnEDIgZEDI/50FOYGQASEDQgaEDAgZEDIgZEDIgJABIQNCBoQMCBkQMiBkQMiAkAEhAxJFURwAJr49NLZT3VgAAAAASUVORK5CYII=",
  bP = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAABF0lEQVR4nO3csW3CYBhFUYNYhZaSOkyRGdmCOkslLfxNpFxsYnNORwW6+vREY++Op8v3xJ/tpWsEjASMBIwEjASMBIwEjASMBIwEjASMBIwEjASMBIwEjASMBIwEjASMDqv+9XfOH58Pn79u10W+1wVGAkYCRqvdwN82b6lNdIGRgJGA0WIbWDepbt5cm+gCIwEjAaPZNnDuzfI/cCMEjASMnraB77J5IxcYCRgJGM32pNJWN2/kAiMBIwGjxZ7W3MrmjVxgJGAkYPSyJ9bXunkjFxgJGAkY/Zu3dqxl80YuMBIwEjDy5qLIBUYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgIW0zT9AOlGWxe1B8qHAAAAAElFTkSuQmCC",
  NP = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAABZUlEQVR4nO3cz4nCQBhA8cliBcI2sFfBsx7FHrYFSxArEDvQFuzBs54Ft4hdsIV4Tg4O8eWbjfB+t+CfwONjmBG1SvvfOullH6ZjDAgZEDIgZEDIgJABIQNCBoQMCBkQMiBkQMiAkAEhA0IGhAwIGRAyIGRAaFT6hvXq8+nj1eEv9PV9cwIhA0IGhAwIGRAyIGRAqPg+MCe3zxsaJxAyIGRAKHwNzK1pk/WxcX3bfaPnt+8XfTZ2AiEDQgaEel8Du+7jfr4Woc+PXhOdQMiAkAGhfz8Ld10zh3ZWdgIhA0IGhHpfA+fbU+P6vFl2ejz6fmk8RfdrcwIhA0IGhMJ/sT67XxvX2TWqo9z7XXpe89qcQMiAkAGh4v/aEX2W9fuBb8aAkAGh4p8H0n1fVvC+r80JhAwIGRAqvgZGn01LcwIhA0IGhAwIGRAyIGRAyICQASEDQgaEDAgZEDIgZEDIgJABiZTSA9erPYxaPJ1yAAAAAElFTkSuQmCC",
  CP = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAABkklEQVR4nO3cwUnEQBSA4VmxAsEGvC541qPYgy1YwrIViB1oC/bgWc+CFqFgC9lznixx8s9L5vB/t4Am7M/jMbuHbMrT91A024npGANCBoQMCBkQMiBkQMiAkAEhA0IGhAwIGRAyIGRAyICQASEDQgaEDAgZEDptdaPh/nytzzDL5vmnyX2cQMiAkAGhZjsw2u5e0P9/Pt6NrlvfrxUnEDIgZEAobQfGnUPPXV8XN1V/v9S51AmEDAgZEGq2A+M5LevcNdefc2TlTj3GCYQMCBkQarYDp85p8VzW6ve4Y/ePas+R/+UEQgaEDAilfRe+fngdXb/tb3M/ycTzy9llynOcQMiAkAGhtB34HnZO3ElD2Im158J47ov3j8/P4gRCBoQMCKXtwCh7Jy218yInEDIgZEBotbd2XP1+jK5rvyuvde6LnEDIgJABoW7eXDS1E3vZeZETCBkQMiDU7dvb4k7sZedFTiBkQMiA0GK/B9bqdedFTiBkQMiAkAEhA0IGhAwIGRAyIGRAyICQASEDEqWUA5NwRdaPa632AAAAAElFTkSuQmCC",
  IP = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAABFElEQVR4nO3ZwU0DMRRAQQdRQaS0wZ0zxVBDKqAFKIZzqAWKCC3EPBk50sx9V96nL2stH8b793XwZw/SNQJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkaPq158fT391zfc5PDxs+S9JjASMBIwEjASMBIwEjASMBIwEjASMFp2Fp71/PY59cTl/LLDsk1gJWAkYLTNHvh1fNpgFfNMYCRgJGAkYCRgJGAkYLTNf+Bu98i3MoGRgJGAkYCRgJGAkYCRgJGAkYCRgNGys/DsPe9yi+5cTGAkYCRgtGwPvNd73lkmMBIwEjASMBIwEjASMBIwEjASMBIwEjASMBIwEjASMBKwGGP8AtVUDnVJr20VAAAAAElFTkSuQmCC",
  PP = "/assets/gp_ase_f_outl-FdQpX43h.gif",
  SP = "_container_1kwij_1",
  BP = "_title_1kwij_10",
  TP = "_instruction_1kwij_15",
  EP = "_required_wallet_1kwij_20",
  kP = "_divider_1kwij_24",
  DP = "_input_1kwij_30",
  RP = "_button_1kwij_58",
  MP = "_active_row_1kwij_87",
  UP = "_row_title_1kwij_87",
  Xe = {
    container: SP,
    title: BP,
    instruction: TP,
    required_wallet: EP,
    divider: kP,
    input: DP,
    button: RP,
    active_row: MP,
    row_title: UP
  },
  no = "data:image/svg+xml,%3csvg%20height='18'%20viewBox='0%200%2017%2018'%20width='17'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20fill='none'%20fill-rule='evenodd'%20stroke='%23fff'%20stroke-width='1.7'%3e%3cpath%20d='m1.84%203h13.3c.28%200%20.5.22.5.5%200%20.09-.02.17-.06.25l-6.33%2011.18c-.27.48-.88.65-1.36.38-.16-.09-.3-.23-.38-.39l-6.11-11.18c-.13-.24-.04-.55.2-.68.08-.04.16-.06.24-.06z'/%3e%3cpath%20d='m8.5%2015v-12'/%3e%3c/g%3e%3c/svg%3e",
  QP = ({
    show: t,
    setShow: n
  }) => {
    const s = _(),
      a = te(),
      [i] = dn(),
      o = Gn(),
      r = ul(o),
      l = c(y => y.mining.tasks[v.walletVerification]),
      d = c(y => y.user.verificatedWallet),
      m = ci(d),
      h = Ys(m),
      g = c(y => y.user.hasCaptchaCode);
    console.log("connectedUQ: ", o), console.log("connectedEQ: ", r), console.log("verificatedWallet: ", d), console.log("verificatedWalletUQ: ", m), console.log("formattedVerificatedWalletUQ: ", h);
    const [f, j] = A.useState(""), x = async () => {
      try {
        if (d !== r) {
          s(z({
            id: performance.now(),
            text: `Use ${Ys(h)} wallet`
          })), await i.disconnect();
          return
        }
        const y = Be.beginCell().storeUint(0, 32).endCell(),
          B = {
            validUntil: Math.floor(Date.now() / 1e3) + 600,
            messages: [{
              address: "UQDTwwYcxZAP8IzsHTe6_wkfzk5cJrIR1H6O5klygJO7EYzX",
              amount: String(Be.toNano("0.1")),
              payload: y.toBoc().toString("base64")
            }]
          },
          C = await i.sendTransaction(B);
        s(z({
          id: performance.now(),
          text: "Success! Wait code in your wallet",
          icon: ""
        }))
      } catch {
        s(z({
          id: performance.now(),
          text: "Something went wrong... Try again."
        }))
      }
    };
    return e.jsx(Lt, {
      show: t,
      setShow: () => n(!1),
      children: e.jsxs("div", {
        className: Xe.container,
        children: [e.jsxs("div", {
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: Xe.title,
              children: "TON Captcha"
            })
          }), e.jsxs("div", {
            className: Xe.instruction,
            children: ["Send", e.jsx("strong", {
              children: " 0.1 TON "
            }), " to receive a response transaction with an encrypted code. Use wallets that support encrypted messages in TON. We recommend", e.jsx("strong", {
              children: " Tonkeeper "
            }), "."]
          }), !l && e.jsxs("button", {
            className: Xe.button,
            onPointerUp: () => {
              a.push("/claiming"), setTimeout(() => {
                const y = document.getElementById("ton_wallet_connect_task_div");
                y && y.scrollIntoView({
                  block: "center"
                })
              }, 100)
            },
            children: [e.jsx("img", {
              alt: "image",
              src: no
            }), "Connect TON"]
          }), l && o === "" && e.jsxs(e.Fragment, {
            children: [e.jsxs("div", {
              className: Xe.required_wallet,
              children: ["Use ", h, " wallet"]
            }), e.jsxs("button", {
              className: Xe.button,
              onPointerUp: () => {
                i.openModal()
              },
              children: [e.jsx("img", {
                alt: "image",
                src: no
              }), "Connect TON"]
            })]
          }), l && o !== "" && !g && e.jsx("button", {
            className: Xe.button,
            onPointerUp: x,
            children: "Request a code"
          }), e.jsx("div", {
            className: Xe.divider
          }), e.jsxs("div", {
            children: [e.jsxs("div", {
              className: Xe.instruction,
              children: ["Check the transaction history in your wallet. Do not duplicate your request! The code will arrive within 10 min. Enter the code received from ", e.jsx("strong", {
                children: "captcha.ton"
              })]
            }), e.jsx("div", {
              children: e.jsx("input", {
                className: Xe.input,
                placeholder: "Enter your code...",
                value: f,
                onChange: y => {
                  j(y.target.value)
                }
              })
            })]
          })]
        }), e.jsx("button", {
          className: Xe.button,
          onPointerUp: async () => {
            var y;
            if (!(!f || f === "")) {
              if (o === "") {
                s(z({
                  id: performance.now(),
                  text: `Connect ${h} wallet first`
                }));
                return
              }
              if (d !== r) {
                s(z({
                  id: performance.now(),
                  text: `Use ${h} wallet`
                })), await i.disconnect();
                return
              }
              try {
                const B = await s(ze.checkCaptcha({
                  wallet: r,
                  captcha: f
                }));
                if (B.meta.requestStatus === p.rejected) throw new Error("error");
                if ((y = B.payload) != null && y.success) s(z({
                  id: performance.now(),
                  text: "Success!",
                  icon: ""
                })), s(om({
                  task: v.checkCaptcha,
                  value: !0
                })), n(!1);
                else throw new Error("error")
              } catch {
                s(z({
                  id: performance.now(),
                  text: "Something went wrong... Try again."
                }))
              }
            }
          },
          children: "Check"
        })]
      })
    })
  },
  OP = () => {
    const t = _(),
      n = te(),
      s = c(ca),
      a = c(ra),
      i = c(U => U.user.pixelCoins),
      o = c(hi.selectAll),
      r = c(U => U.daily.getDailyListFetchStatus),
      l = i >= 1e5,
      d = c(U => U.mining.tasks[v.spendStars]),
      m = c(U => U.mining.tasks[v.spendTokens]),
      h = c(U => U.mining.tasks[v.walletVerification]),
      g = c(U => U.user.verificatedWalletStatus),
      f = c(U => U.mining.tasks.checkCaptcha),
      j = c(U => U.user.hasCaptchaCode),
      x = c(U => U.user.hasCaptchaCodeStatus);
    A.useEffect(() => {
      g === p.idle && t(ze.getVerificatedWallet())
    }, [g]), A.useEffect(() => {
      r === p.idle && t(Dr.getList())
    }, [r]), A.useEffect(() => {
      x === p.idle && t(ze.checkHasCaptchaCode())
    }, [x]);
    let y = 0,
      B = 0;
    i >= 1e5 && (y += 1), h && (y += 1), f && (y += 1), o.forEach(U => {
      U.timestamp && (B += 1)
    });
    const C = () => {
        const U = `${window.location.origin}/stars?initData=${btoa(window.Telegram.WebApp.initData)}`;
        Tt(U)
      },
      [Ce, be] = A.useState(!1),
      Y = U => {
        if (j) {
          be(U);
          return
        }
        be(!1)
      };
    return e.jsxs(ue, {
      children: [e.jsx(QP, {
        show: Ce,
        setShow: Y
      }), e.jsx("div", {
        className: Q.layout,
        children: e.jsxs("div", {
          className: Q.container,
          children: [e.jsxs("div", {
            className: Q.header,
            children: [e.jsx("div", {}), e.jsx("img", {
              alt: "image",
              src: PP,
              className: Q.bg_image
            }), e.jsx("div", {
              className: Q.title,
              children: "AIRDROP"
            }), e.jsx("div", {
              className: Q.description,
              children: "Meet the requirements to get the PX Airdrop"
            }), e.jsx("div", {
              className: Q.timer,
              children: e.jsxs("div", {
                className: Q.timer_inner,
                children: [e.jsx(I, {
                  children: ""
                }), e.jsx("span", {
                  className: Q.timer_text,
                  children: "Mining will end on Dec. 20"
                })]
              })
            })]
          }), e.jsx("div", {
            className: Q.line
          }), e.jsxs("div", {
            className: Q.requirements_title,
            children: [e.jsx("div", {
              children: "Required"
            }), e.jsxs("div", {
              className: Q.gray,
              children: [y, "/3 completed to get airdrop"]
            })]
          }), e.jsxs("div", {
            className: Q.requirements,
            children: [e.jsxs("div", {
              className: Q.item,
              children: [e.jsx("div", {
                children: e.jsx("img", {
                  className: Q.item_image,
                  src: IP
                })
              }), e.jsx("div", {
                className: Q.main_info,
                children: e.jsxs("div", {
                  children: ["Total balance: 100 000 ", e.jsx(M, {})]
                })
              }), e.jsx(In, {
                success: l
              })]
            }), e.jsxs("div", {
              className: Q.item,
              onPointerUp: async () => {
                h || (n.push("/claiming"), setTimeout(() => {
                  const U = document.getElementById("ton_wallet_connect_task_div");
                  U && U.scrollIntoView({
                    block: "center"
                  })
                }, 100))
              },
              children: [e.jsx("div", {
                children: e.jsx("img", {
                  className: Q.item_image,
                  src: CP
                })
              }), e.jsx("div", {
                className: Q.main_info,
                children: e.jsx("div", {
                  children: "Connect TON"
                })
              }), e.jsx(In, {
                success: h
              })]
            }), e.jsxs("div", {
              className: Q.item,
              onPointerUp: Y,
              children: [e.jsx("div", {
                children: e.jsx("img", {
                  className: Q.item_image,
                  src: NP
                })
              }), e.jsxs("div", {
                className: Q.main_info,
                children: [e.jsx("div", {
                  children: e.jsx("span", {
                    children: "TON Captcha"
                  })
                }), !j && e.jsx("span", {
                  className: Q.soon,
                  children: "Soon"
                })]
              }), e.jsx(In, {
                success: f
              })]
            })]
          }), e.jsxs("div", {
            className: Q.requirements_title,
            children: [e.jsx("div", {
              children: "Optional"
            }), e.jsx("div", {
              className: Q.gray,
              children: "boost your airdrop"
            })]
          }), e.jsxs("div", {
            className: Q.requirements,
            children: [e.jsxs("div", {
              className: Q.item,
              onPointerUp: async () => {
                if (d) return;
                const U = await t(xe.checkTask({
                  key: v.spendStars,
                  reward: 512,
                  disableFailPopup: !0
                }));
                U.meta.requestStatus === p.fulfilled && U.payload[v.spendStars] || n.push("/stars")
              },
              children: [e.jsx("div", {
                children: e.jsx("img", {
                  className: Q.item_image,
                  src: jP
                })
              }), e.jsx("div", {
                className: Q.main_info,
                children: "Purchases for Stars"
              }), e.jsx(In, {
                success: d
              })]
            }), e.jsxs("div", {
              className: Q.item,
              onPointerUp: async () => {
                if (m) return;
                const U = await t(xe.checkTask({
                  key: v.spendTokens,
                  reward: 512,
                  disableFailPopup: !0
                }));
                U.meta.requestStatus === p.fulfilled && U.payload[v.spendTokens] || C()
              },
              children: [e.jsx("div", {
                children: e.jsx("img", {
                  className: Q.item_image,
                  src: wP
                })
              }), e.jsx("div", {
                className: Q.main_info,
                children: "Purchases for crypto"
              }), e.jsx(In, {
                success: m
              })]
            }), e.jsxs("div", {
              className: Q.item,
              onPointerUp: () => {
                n.push("/daily")
              },
              children: [e.jsx("div", {
                children: e.jsx("img", {
                  className: Q.item_image,
                  src: bP
                })
              }), e.jsx("div", {
                className: Q.main_info,
                children: "Daily check-ins"
              }), e.jsxs("div", {
                className: Q.gray,
                children: [B, " completed"]
              })]
            })]
          }), e.jsx("div", {
            className: F(Q.other_criteria, Q.gray),
            children: "Other activity criteria will also be considered"
          }), e.jsx("div", {
            style: {
              height: 40 + s.top + a.top
            }
          })]
        })
      })]
    })
  },
  FP = "_general_info_container_1u2nd_1",
  zP = "_img_container_1u2nd_7",
  GP = "_image_1u2nd_17",
  LP = "_image_cup_1u2nd_23",
  HP = "_image_glow_container_1u2nd_29",
  qP = "_image_glow_1u2nd_29",
  YP = "_rotate_1u2nd_1",
  VP = "_image_glow_reverse_1u2nd_48",
  WP = "_title_1u2nd_53",
  XP = "_description_container_1u2nd_60",
  JP = "_description_1u2nd_60",
  ZP = "_gold_1u2nd_73",
  Je = {
    general_info_container: FP,
    img_container: zP,
    image: GP,
    image_cup: LP,
    image_glow_container: HP,
    image_glow: qP,
    rotate: YP,
    image_glow_reverse: VP,
    title: WP,
    description_container: XP,
    description: JP,
    gold: ZP
  },
  KP = "_info_layout_1p9dg_1",
  $P = {
    info_layout: KP
  },
  eS = t => {
    const n = new Uint8Array(t.data);
    for (let s = 0; s < n.length; s += 4) {
      const a = n[s],
        i = n[s + 1],
        o = n[s + 2];
      if (n[s + 3] === 0) continue;
      let l = et[0],
        d = 1 / 0;
      for (const h of et) {
        const g = on.deltaE(on(cn(a, i, o)), on(h));
        g < d && (d = g, l = h)
      }
      const m = Ot(l);
      t.data[s] = m.r, t.data[s + 1] = m.g, t.data[s + 2] = m.b, t.data[s + 3] = 255
    }
  },
  tS = "_instruction_container_17lvx_1",
  nS = "_img_container_17lvx_9",
  sS = "_img_inner_container_17lvx_16",
  aS = "_image_17lvx_22",
  iS = "_image_status_17lvx_30",
  oS = "_image_status_rejected_17lvx_45",
  rS = "_image_status_review_17lvx_49",
  cS = "_image_status_approved_17lvx_53",
  lS = "_copy_button_container_17lvx_57",
  dS = "_button_copy_17lvx_65",
  uS = "_gray_17lvx_71",
  mS = "_preview_container_17lvx_75",
  AS = "_preview_image_container_17lvx_81",
  pS = "_preview_image_17lvx_81",
  hS = "_preview_image_loader_17lvx_94",
  gS = "_template_size_17lvx_109",
  _S = "_template_title_17lvx_117",
  fS = "_template_size_container_17lvx_122",
  xS = "_template_size_item_17lvx_128",
  vS = "_template_size_item_active_17lvx_136",
  yS = "_template_coords_17lvx_141",
  wS = "_template_coordinates_title_17lvx_151",
  jS = "_template_coords_container_17lvx_156",
  bS = "_coords_item_17lvx_163",
  NS = "_coords_input_17lvx_169",
  CS = "_file_button_container_17lvx_178",
  IS = "_file_button_17lvx_178",
  me = {
    instruction_container: tS,
    img_container: nS,
    img_inner_container: sS,
    image: aS,
    image_status: iS,
    image_status_rejected: oS,
    image_status_review: rS,
    image_status_approved: cS,
    copy_button_container: lS,
    button_copy: dS,
    gray: uS,
    preview_container: mS,
    preview_image_container: AS,
    preview_image: pS,
    preview_image_loader: hS,
    template_size: gS,
    template_title: _S,
    template_size_container: fS,
    template_size_item: xS,
    template_size_item_active: vS,
    template_coords: yS,
    template_coordinates_title: wS,
    template_coords_container: jS,
    coords_item: bS,
    coords_input: NS,
    file_button_container: CS,
    file_button: IS
  },
  $t = {
    approved: "approved",
    review: "review",
    rejected: "rejected"
  },
  PS = () => {
    const t = _(),
      n = c(a => a.tournament.myTemplate);
    let s = $t.review;
    return n && n.approved && (s = $t.approved), n && (n.deletedAt || n.approved === !1) && (s = $t.rejected), e.jsxs("div", {
      className: me.instruction_container,
      children: [n && e.jsx("div", {
        children: "Current template:"
      }), e.jsx("div", {
        className: me.img_container,
        children: e.jsxs("div", {
          className: me.img_inner_container,
          children: [e.jsx("img", {
            alt: "img",
            className: me.image,
            src: n ? `${n.url}?time=${Date.now()}` : _a,
            onPointerUp: () => {
              n.id && n.id !== 0 && t(gi(n))
            }
          }), s === $t.review && e.jsx("div", {
            className: F(me.image_status, me.image_status_review),
            children: "On review"
          }), s === $t.rejected && e.jsx("div", {
            className: F(me.image_status, me.image_status_rejected),
            children: "Rejected"
          }), s === $t.approved && e.jsx("div", {
            className: F(me.image_status, me.image_status_approved),
            children: "Approved"
          })]
        })
      }), e.jsx("div", {
        className: me.copy_button_container,
        children: e.jsx(qt, {
          url: `${Bt}?startapp=f${n==null?void 0:n.id}_t`,
          className: me.button_copy,
          text: "Copy template link"
        })
      })]
    })
  },
  SS = ({
    dataUrl: t,
    loading: n,
    templateSize: s
  }) => e.jsx("div", {
    className: me.preview_container,
    children: e.jsxs("div", {
      className: me.preview_image_container,
      children: [e.jsx("img", {
        alt: "templateImage",
        id: "templateImage",
        className: me.preview_image,
        src: t
      }), n && e.jsx("div", {
        className: me.preview_image_loader,
        children: "Loading..."
      })]
    })
  }),
  BS = ({
    templateSize: t,
    setTemplateSize: n
  }) => {
    const [s] = A.useState([t]);
    return e.jsxs("div", {
      className: me.template_size,
      children: [e.jsx("div", {
        className: me.template_title,
        children: "Template Size"
      }), e.jsx("div", {
        className: me.template_size_container,
        children: s.map(a => {
          const i = [me.template_size_item];
          return t === a && i.push(me.template_size_item_active), e.jsx("div", {
            className: i.join(" "),
            onPointerUp: () => {
              n(a)
            },
            children: `${a} X ${a}`
          }, a)
        })
      }), " "]
    })
  },
  TS = ({
    coords: t,
    setCoords: n
  }) => null,
  ES = () => {
    _(), c(He);
    const t = c(ua),
      n = vo[t],
      [s, a] = A.useState(null),
      [i, o] = A.useState(null),
      [r, l] = A.useState(null),
      [d, m] = A.useState((n == null ? void 0 : n.templateSize) || 256),
      [h, g] = A.useState({
        x: 0,
        y: 0
      }),
      [f, j] = A.useState(!1);
    return A.useEffect(() => {
      if (s !== null) {
        j(!0);
        const x = async () => {
          const y = document.createElement("canvas"),
            B = y.getContext("2d");
          B.imageSmoothingEnabled = !1;
          const C = s.width / s.height;
          let Ce, be;
          C > 1 ? (Ce = d, be = d / C) : (be = d, Ce = d * C);
          const Y = (d - Ce) / 2,
            U = (d - be) / 2;
          y.width = d, y.height = d, B.drawImage(s, Y, U, Ce, be);
          const xt = B.getImageData(0, 0, d, d);
          eS(xt), B.putImageData(xt, 0, 0), o(xt), l(y.toDataURL())
        };
        setTimeout(() => {
          x().then(() => {
            j(!1)
          })
        }, 100)
      }
    }, [s, d]), e.jsxs("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 14
      },
      children: [r === null && e.jsx(PS, {}), r !== null && e.jsx(SS, {
        loading: f,
        dataUrl: r,
        templateSize: d
      }), r !== null && e.jsx(BS, {
        templateSize: d,
        setTemplateSize: m
      }), r !== null && e.jsx(TS, {
        coords: h,
        setCoords: g,
        templateSize: d,
        setTemplateSize: m
      }), e.jsxs("div", {
        style: {
          marginTop: 20,
          textAlign: "center"
        },
        children: ["To participate in the new round, please upload a new template! Size:", n == null ? void 0 : n.templateSize, "х", n == null ? void 0 : n.templateSize, ".Templates with no artistic value will be rejected."]
      })]
    })
  },
  kS = "_layout_1c7e5_1",
  DS = "_container_1c7e5_5",
  RS = "_button_container_1c7e5_11",
  MS = "_button_1c7e5_11",
  US = "_end_of_list_button_1c7e5_27",
  Nt = {
    layout: kS,
    container: DS,
    button_container: RS,
    button: MS,
    end_of_list_button: US
  },
  QS = "_template_item_container_1c93x_1",
  OS = "_template_item_inner_1c93x_12",
  FS = "_template_item_picked_1c93x_28",
  zS = "_template_item_rejected_1c93x_43",
  GS = "_template_item_shadow_1c93x_58",
  LS = "_template_rank_1c93x_70",
  HS = "_template_recolors_1c93x_90",
  qS = "_template_recolors_pixel_1c93x_105",
  YS = "_template_image_1c93x_112",
  dt = {
    template_item_container: QS,
    template_item_inner: OS,
    template_item_picked: FS,
    template_item_rejected: zS,
    template_item_shadow: GS,
    template_rank: LS,
    template_recolors: HS,
    template_recolors_pixel: qS,
    template_image: YS
  },
  tc = ({
    item: t,
    rank: n,
    repaints: s,
    style: a = {}
  }) => {
    const i = _(),
      o = c(d => d.tournament.selectedTemplate),
      r = o && o.id === t.id,
      l = A.useRef(!0);
    return A.useEffect(() => {
      const d = setTimeout(() => {
        l.current = !1
      }, 100);
      return () => {
        clearTimeout(d)
      }
    }, []), e.jsxs("div", {
      className: dt.template_item_container,
      style: {
        ...a
      },
      onPointerUp: async () => {
        l.current || t.id && t.id !== 0 && i(gi(t))
      },
      children: [e.jsx("div", {
        className: dt.template_item_inner,
        children: e.jsx("img", {
          alt: "image",
          className: dt.template_image,
          src: `${t.url}`
        })
      }), r && t.approved !== !1 && e.jsx("div", {
        className: dt.template_item_picked,
        children: "Picked"
      }), t.approved === !1 && e.jsx("div", {
        className: dt.template_item_rejected,
        children: "Rejected"
      }), n && e.jsx("div", {
        className: dt.template_rank,
        children: n
      }), s !== void 0 && s !== 0 && e.jsx("div", {
        className: dt.template_item_shadow
      }), s !== void 0 && s !== 0 && e.jsxs("div", {
        className: dt.template_recolors,
        children: [e.jsx("div", {
          className: dt.template_recolors_pixel
        }), rn(s)]
      })]
    })
  },
  VS = () => {
    const t = _(),
      n = A.useRef(null),
      s = c(r => r.tournament.approvedTemplatesListStatus),
      a = c(r => r.tournament.approvedTemplatesListOffset),
      i = c(r => r.tournament.approvedTemplatesListLimit),
      o = c(r => r.tournament.approvedTemplatesListTotal);
    return A.useEffect(() => {}, [s, a, i, o]), a >= o && s !== p.pending ? e.jsx("div", {
      className: Nt.button_container,
      children: e.jsx("button", {
        className: Nt.end_of_list_button,
        children: "That's all fren"
      })
    }) : e.jsx("div", {
      className: Nt.button_container,
      children: e.jsx("button", {
        ref: n,
        disabled: s === p.pending,
        className: Nt.button,
        onPointerUp: () => {
          t(at.getApprovedList({
            offset: a,
            limit: i
          }))
        },
        children: s === p.pending ? "Loading..." : "Load more"
      })
    })
  },
  WS = () => {
    const t = _(),
      n = c(i => i.tournament.approvedTemplatesListOffset),
      s = c(i => i.tournament.approvedTemplatesListLimit),
      a = c(er.selectAll);
    return A.useEffect(() => (t(at.getApprovedList({
      offset: n,
      limit: s
    })), () => {
      t(mr())
    }), []), e.jsxs("div", {
      className: Nt.layout,
      children: [e.jsx("div", {
        className: Nt.container,
        children: a.map((i, o) => e.jsx(tc, {
          item: i,
          rank: o + 1,
          repaints: i.repaints,
          approved: !0
        }, i.id))
      }), e.jsx(VS, {})]
    })
  },
  XS = () => {
    const t = _(),
      n = c(er.selectAll),
      a = c(i => i.tournament.selectedTemplate) ? 15 : 16;
    return A.useEffect(() => (t(at.getRandomList()), () => {
      t(mr())
    }), []), e.jsx("div", {
      className: Nt.layout,
      children: e.jsx("div", {
        className: Nt.container,
        children: n.map((i, o) => o + 1 > a ? null : e.jsx(tc, {
          item: i
        }, i.id))
      })
    })
  },
  JS = "_round_info_container_1d52c_1",
  ZS = "_title_1d52c_7",
  KS = "_description_1d52c_12",
  $S = "_round_status_container_1d52c_17",
  yt = {
    round_info_container: JS,
    title: ZS,
    description: KS,
    round_status_container: $S
  },
  e2 = "_round_indicator_mgwmo_1",
  t2 = "_round_indicator_wait_mgwmo_37",
  nc = {
    round_indicator: e2,
    round_indicator_wait: t2
  },
  n2 = () => e.jsx("div", {
    className: nc.round_indicator_wait
  }),
  sc = () => e.jsx("div", {
    className: nc.round_indicator
  }),
  s2 = () => {
    const t = c(lt);
    return c(ua), t ? e.jsxs("div", {
      className: yt.round_info_container,
      children: [e.jsxs("div", {
        children: [e.jsxs("div", {
          className: yt.title,
          children: ["Top ", vo[t].templateThreshold, " ", "templates will win"]
        }), e.jsx("div", {
          className: yt.description,
          children: "Most active painters gets rewarded"
        })]
      }), e.jsxs("div", {
        className: yt.round_status_container,
        children: [e.jsx(sc, {}), " on"]
      })]
    }) : e.jsxs("div", {
      className: yt.round_info_container,
      children: [e.jsxs("div", {
        children: [e.jsx("div", {
          className: yt.title,
          children: "Tournament finished"
        }), e.jsx("div", {
          className: yt.description,
          children: "Waiting for results"
        })]
      }), e.jsxs("div", {
        className: yt.round_status_container,
        children: [e.jsx(n2, {}), " Soon"]
      })]
    })
  },
  a2 = () => {
    const t = c(lt),
      n = c(s => s.tournament.periodsStatus);
    return e.jsxs("div", {
      children: [e.jsx(s2, {}), t && n === p.fulfilled && e.jsx(WS, {}), !t && n === p.fulfilled && e.jsx(XS, {})]
    })
  },
  i2 = "_soon_la5q2_1",
  o2 = "_active_round_instruction_la5q2_11",
  r2 = "_not_active_round_instruction_la5q2_19",
  c2 = "_round_container_la5q2_25",
  l2 = "_round_title_la5q2_33",
  d2 = "_round_title_text_la5q2_38",
  u2 = "_round_indicator_la5q2_43",
  m2 = "_round_status_success_la5q2_49",
  A2 = "_round_status_fail_la5q2_60",
  p2 = "_success_la5q2_71",
  h2 = "_fail_la5q2_75",
  g2 = "_gray_la5q2_79",
  _2 = "_round_main_info_la5q2_83",
  f2 = "_round_image_container_la5q2_89",
  x2 = "_round_image_la5q2_89",
  v2 = "_round_lines_container_la5q2_103",
  y2 = "_round_line_la5q2_103",
  w2 = "_divider_la5q2_117",
  j2 = "_pixels_number_la5q2_124",
  b2 = "_pixel_la5q2_124",
  N2 = "_past_rounds_la5q2_136",
  C2 = "_past_rounds_divider_la5q2_145",
  $ = {
    soon: i2,
    active_round_instruction: o2,
    not_active_round_instruction: r2,
    round_container: c2,
    round_title: l2,
    round_title_text: d2,
    round_indicator: u2,
    round_status_success: m2,
    round_status_fail: A2,
    success: p2,
    fail: h2,
    gray: g2,
    round_main_info: _2,
    round_image_container: f2,
    round_image: x2,
    round_lines_container: v2,
    round_line: y2,
    divider: w2,
    pixels_number: j2,
    pixel: b2,
    past_rounds: N2,
    past_rounds_divider: C2
  },
  I2 = ({
    result: t
  }) => {
    const n = _(),
      s = c(lt);
    if (!t) return null;
    const a = t.round_id,
      i = t.repaints_to_win - t.repaints,
      o = t.rank <= t.rank_to_win && t.rank !== 0,
      r = t.template,
      l = r.rank;
    let d = r.lastSurvivalRank;
    a === 1 && (d = 512), a === 2 && (d = 256), a === 3 && (d = 128);
    const m = l <= d,
      h = r.lastSurvivalRepaints - r.repaints,
      g = o && m,
      f = s && s === a,
      j = f ? "Winning" : "Won",
      x = f ? "😔 Losing" : "😔 Lost";
    return e.jsxs("div", {
      className: $.round_container,
      onPointerUp: () => {
        r && r.id && r.id !== 0 && n(gi(r))
      },
      children: [e.jsxs("div", {
        className: $.round_title,
        children: [e.jsxs("div", {
          className: $.round_title_text,
          children: ["Round ", a, " ", f ? "is on" : "has ended"]
        }), e.jsx("div", {
          className: $.round_indicator,
          children: f && e.jsx(sc, {})
        }), g && e.jsx("div", {
          className: F($.round_status_success, $.success),
          children: j
        }), !g && e.jsx("div", {
          className: F($.round_status_fail, $.fail),
          children: x
        })]
      }), e.jsxs("div", {
        className: $.round_main_info,
        children: [e.jsx("div", {
          className: $.round_image_container,
          children: e.jsx("img", {
            alt: "image",
            className: $.round_image,
            src: t.template.url
          })
        }), e.jsxs("div", {
          className: $.round_lines_container,
          children: [e.jsxs("div", {
            className: F($.round_line),
            children: [e.jsx("div", {
              className: F($.gray),
              children: "Template rank:"
            }), e.jsxs("div", {
              className: F(m ? $.success : $.fail),
              children: ["👑 ", l]
            })]
          }), e.jsxs("div", {
            className: $.round_line,
            children: [e.jsx("div", {
              className: F($.gray),
              children: "Pixels to win"
            }), e.jsx("div", {
              children: m ? "In the zone" : rn(h)
            })]
          }), e.jsx("div", {
            className: $.divider
          }), e.jsxs("div", {
            className: $.round_line,
            children: [e.jsx("div", {
              className: F($.gray),
              children: "Your position:"
            }), e.jsx("div", {
              className: F(o ? $.success : $.fail),
              children: t.rank
            })]
          }), e.jsxs("div", {
            className: $.round_line,
            children: [e.jsx("div", {
              className: F($.gray),
              children: "Pixels to win"
            }), e.jsxs("div", {
              className: $.pixels_number,
              children: [e.jsx("div", {
                className: $.pixel
              }), e.jsx("div", {
                children: o ? "In the zone" : rn(i)
              })]
            })]
          })]
        })]
      })]
    })
  },
  P2 = () => {
    const t = c(ig),
      n = c(ua);
    return t ? e.jsxs(ae.Fragment, {
      children: [e.jsxs("div", {
        className: $.past_rounds,
        children: [e.jsx("div", {
          className: $.past_rounds_divider
        }), e.jsx("div", {
          children: "All rounds"
        }), e.jsx("div", {
          className: $.past_rounds_divider
        })]
      }), t.map(s => n && n === s.round_id || s.round_id === 9 ? null : e.jsx(I2, {
        result: s
      }, s.round_id))]
    }) : null
  },
  S2 = () => {
    const t = _(),
      n = c(s => s.tournament.resultsStatus);
    return A.useEffect(() => {
      n === p.idle && t(at.getResults())
    }, [n]), e.jsx("div", {
      children: e.jsx(P2, {})
    })
  },
  B2 = () => {
    const t = c(n => n.tournament.activeTab);
    return e.jsxs("div", {
      className: $P.info_layout,
      children: [t === nt.create && e.jsx(ES, {}), t === nt.main && e.jsx(a2, {}), t === nt.result && e.jsx(S2, {})]
    })
  },
  T2 = () => e.jsxs(ae.Fragment, {
    children: [e.jsx(Kh, {}), e.jsx(B2, {})]
  }),
  E2 = "/assets/bg-BNfFdtGI.png",
  k2 = "data:image/png;base64,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",
  ac = "/assets/rays-uhfpLlt6.png",
  ic = "/assets/rays2-Ce7ymw8-.png",
  D2 = "_container_lc1md_1",
  R2 = "_title_lc1md_8",
  M2 = "_table_container_lc1md_13",
  U2 = "_table_row_lc1md_19",
  Q2 = "_button_lc1md_26",
  O2 = "_active_row_lc1md_50",
  F2 = "_row_title_lc1md_50",
  Fa = {
    container: D2,
    title: R2,
    table_container: M2,
    table_row: U2,
    button: Q2,
    active_row: O2,
    row_title: F2
  },
  z2 = () => {
    const t = _(),
      n = c(a => a.tournament.showTournamentDetailsPopup),
      s = a => {
        t(lr(a))
      };
    return e.jsx(Lt, {
      show: n,
      setShow: s,
      children: e.jsxs("div", {
        className: Fa.container,
        children: [e.jsx("h2", {
          children: " General Rules "
        }), e.jsxs("p", {
          children: ["1. ", e.jsx("b", {
            children: " 1,024 "
          }), "templates were selected (32×32px)."]
        }), e.jsxs("p", {
          children: ["2. The tournament has ", e.jsx("b", {
            children: "10 "
          }), " rounds, with templates progressing based on ", e.jsx("b", {
            children: "correct color fills "
          }), " and fines for incorrect painting."]
        }), e.jsxs("p", {
          children: ["3. The number of templates is", e.jsx("b", {
            children: " halved each round "
          }), ", and some rounds ", e.jsx("b", {
            children: "feature larger templates"
          }), " (e.g., the final round has 2 templates at 1024×1024px)."]
        }), e.jsx("h2", {
          children: " Participation and Rewards "
        }), e.jsxs("p", {
          children: ["1. All players can join. ", e.jsx("b", {
            children: "Select a template"
          }), " at the start of each round and color it correctly (one choice per round)."]
        }), e.jsxs("p", {
          children: ["2. At the end of each round, the top participants from the winning templates ", e.jsx("b", {
            children: " receive $PX"
          }), "."]
        }), " ", e.jsxs("p", {
          children: ["3. If your template loses or you don’t rank in the top, you", e.jsx("b", {
            children: " receive no rewards"
          }), "."]
        }), e.jsxs("p", {
          children: ["4. At the end of the Tournament, the best participants from the winning templates receive a", " ", e.jsx("span", {
            className: Fa.gold,
            children: "Golden Pixel"
          }), "."]
        }), e.jsx("p", {
          children: "Details on the awards coming soon."
        }), e.jsx("button", {
          className: Fa.button,
          onPointerUp: () => s(!1),
          children: "That's so wise!"
        })]
      })
    })
  },
  G2 = "_layout_17ca7_1",
  L2 = "_container_17ca7_6",
  H2 = "_close_button_17ca7_20",
  q2 = "_title_container_17ca7_28",
  Y2 = "_title_17ca7_28",
  V2 = "_image_container_17ca7_39",
  W2 = "_image_17ca7_39",
  X2 = "_image_placeholder_17ca7_53",
  J2 = "_info_container_17ca7_60",
  Z2 = "_info_row_17ca7_66",
  K2 = "_info_title_17ca7_71",
  $2 = "_info_value_blue_17ca7_75",
  eB = "_info_value_white_17ca7_80",
  tB = "_buttons_container_17ca7_84",
  nB = "_button_17ca7_84",
  sB = "_not_button_17ca7_100",
  aB = "_button_copy_17ca7_111",
  se = {
    layout: G2,
    container: L2,
    close_button: H2,
    title_container: q2,
    title: Y2,
    image_container: V2,
    image: W2,
    image_placeholder: X2,
    info_container: J2,
    info_row: Z2,
    info_title: K2,
    info_value_blue: $2,
    info_value_white: eB,
    buttons_container: tB,
    button: nB,
    not_button: sB,
    button_copy: aB
  },
  oc = ({
    template: t,
    style: n = {},
    onPointerUp: s = () => {}
  }) => {
    const a = _(),
      o = c(r => r.tournament.selectTemplateStatus) === p.pending;
    return e.jsx("button", {
      disabled: o,
      className: se.button,
      style: {
        ...n
      },
      onPointerUp: async () => {
        try {
          if (o) return;
          (await a(at.selectTemplate({
            id: t.id
          }))).meta.requestStatus === p.fulfilled && a(Ar(t))
        } catch (r) {
          console.log(r, "error when selecting template")
        } finally {
          s()
        }
      },
      children: "Select Template"
    })
  },
  iB = () => {
    const t = c(r => r.tournament.templateDataInfoPopup),
      n = c(r => r.user.user),
      s = c(r => r.tournament.selectedTemplate),
      a = t.id === n.id,
      i = s !== null && t.id === s.id,
      o = c(lt);
    return a ? e.jsx("div", {
      className: se.not_button,
      children: "Your template. Cute!"
    }) : i ? e.jsxs("div", {
      className: se.not_button,
      children: ["Selected template ", e.jsx(I, {
        size: 18,
        children: ""
      })]
    }) : o && s ? null : e.jsx(oc, {
      template: t
    })
  },
  oB = () => {
    const t = _(),
      n = te(),
      s = c(i => i.tournament.showTemplateInfoPopup),
      a = c(i => i.tournament.templateDataInfoPopup);
    return c(lt), !a || !s ? null : Ge.createPortal(e.jsx(We, {
      onPointerUp: () => t(Ta()),
      show: s,
      children: e.jsx("div", {
        className: se.layout,
        children: e.jsxs("div", {
          className: se.container,
          onPointerUp: i => {
            i.stopPropagation()
          },
          children: [e.jsx("div", {
            className: se.close_button,
            onPointerUp: () => {
              t(Ta())
            },
            children: e.jsx(I, {
              size: 26,
              children: ""
            })
          }), e.jsx("div", {
            className: se.title_container,
            children: e.jsx("span", {
              className: se.title,
              children: "Template"
            })
          }), e.jsx("div", {
            className: se.image_container,
            children: e.jsx("img", {
              alt: "image",
              className: se.image,
              src: a.url
            })
          }), e.jsxs("div", {
            className: se.buttons_container,
            children: [e.jsx(iB, {}), e.jsx(qt, {
              url: `${Bt}?startapp=f${a.id}_t`,
              className: se.button_copy,
              text: "Copy template link"
            })]
          }), e.jsxs("div", {
            className: se.info_container,
            children: [e.jsxs("div", {
              className: se.info_row,
              onPointerUp: () => {
                n.push("/"), t(Ta()), b.viewport.viewport.animate({
                  scale: 4,
                  time: 400,
                  position: {
                    x: a.x + a.imageSize / 2,
                    y: a.y + a.imageSize / 2
                  }
                })
              },
              children: [e.jsx("span", {
                className: se.info_title,
                children: "Coordinates"
              }), " ", e.jsxs("span", {
                className: se.info_value_blue,
                children: [a.x, ", ", a.y]
              })]
            }), e.jsxs("div", {
              className: se.info_row,
              children: [e.jsx("span", {
                className: se.info_title,
                children: "Painters"
              }), " ", e.jsx("span", {
                className: se.info_value_white,
                children: a.subscribers
              })]
            }), e.jsxs("div", {
              className: se.info_row,
              children: [e.jsx("span", {
                className: se.info_title,
                children: "Score"
              }), " ", e.jsx("span", {
                className: se.info_value_white,
                children: a.repaints
              })]
            }), e.jsxs("div", {
              className: se.info_row,
              children: [e.jsx("span", {
                className: se.info_title,
                children: "Place"
              }), " ", e.jsx("span", {
                className: se.info_value_white,
                children: a.rank
              })]
            })]
          })]
        })
      })
    }), document.body)
  },
  rB = "_layout_20dlh_1",
  cB = "_container_20dlh_10",
  lB = "_star_20dlh_14",
  dB = "_star_animation_20dlh_21",
  uB = "_move_20dlh_1",
  ta = {
    layout: rB,
    container: cB,
    star: lB,
    star_animation: dB,
    move: uB
  },
  mB = "data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3clinearGradient%20id='grad1'%20x1='0%25'%20y1='0%25'%20x2='0%25'%20y2='100%25'%3e%3cstop%20offset='0%25'%20style='stop-color:%23efce32;stop-opacity:1'%20/%3e%3c!--%20более%20светлый%20желтый%20--%3e%3cstop%20offset='100%25'%20style='stop-color:%23f7752e;stop-opacity:1'%20/%3e%3c!--%20более%20темный%20желтый%20--%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M5%200C2.23858%200%200%202.23858%200%205V27C0%2029.7614%202.23858%2032%205%2032H27C29.7614%2032%2032%2029.7614%2032%2027V5C32%202.23858%2029.7614%200%2027%200H5ZM21.4261%2010.5739H10.5739V21.4261H21.4261V10.5739Z'%20fill='url(%23grad1)'/%3e%3c/svg%3e",
  AB = ({
    size: t,
    style: n = {},
    animation: s = !1
  }) => e.jsx("img", {
    alt: "image",
    src: mB,
    className: s ? ta.star_animation : ta.star,
    style: {
      width: t,
      height: t,
      ...n
    }
  }),
  pB = A.memo(() => {
    const t = Array.from(Array(30));
    return e.jsx("div", {
      className: ta.layout,
      children: e.jsx("div", {
        className: ta.container,
        children: t.map((n, s) => {
          const a = k(2, 6);
          return e.jsx(AB, {
            size: a,
            animation: !0,
            style: {
              animationDelay: `-${s*300}ms`,
              transform: `translate(${k(-80,-170)*(s%2===1?1:-1)}px, ${k(-100,100)}px)`
            }
          }, s)
        })
      })
    })
  }, () => !1),
  hB = "_container_tuzgg_1",
  gB = "_column_tuzgg_9",
  _B = "_column_rev_tuzgg_17",
  fB = "_title_tuzgg_26",
  xB = "_table_container_tuzgg_32",
  vB = "_table_row_tuzgg_38",
  yB = "_button_tuzgg_45",
  wB = "_value_tuzgg_52",
  jB = "_notpixel_icon_tuzgg_58",
  bB = "_active_row_tuzgg_74",
  NB = "_row_title_tuzgg_74",
  Pe = {
    container: hB,
    column: gB,
    column_rev: _B,
    title: fB,
    table_container: xB,
    table_row: vB,
    button: yB,
    value: wB,
    notpixel_icon: jB,
    active_row: bB,
    row_title: NB
  },
  CB = [{
    name: "Total $PX for painters",
    value: 512e7,
    image: Se
  }, {
    name: "$PX for template owner",
    value: 128e6,
    image: Se
  }, {
    name: "Winning templates",
    value: 1,
    image: null
  }, {
    name: "Winners per template",
    value: 8184,
    image: null
  }, {
    name: "Total winners",
    value: 8184,
    image: null
  }],
  IB = [{
    name: "Template owner",
    value: 128e6,
    image: Se
  }, {
    name: "Top 8",
    value: 64e6,
    image: Se
  }, {
    name: "9-24",
    value: 32e6,
    image: Se
  }, {
    name: "25-56",
    value: 16e6,
    image: Se
  }, {
    name: "57-120",
    value: 8e6,
    image: Se
  }, {
    name: "121-248",
    value: 4e6,
    image: Se
  }, {
    name: "249-504",
    value: 2e6,
    image: Se
  }, {
    name: "505-1016",
    value: 1e6,
    image: Se
  }, {
    name: "1017-2040",
    value: 5e5,
    image: Se
  }, {
    name: "2041-4088",
    value: 25e4,
    image: Se
  }, {
    name: "4089-8184",
    value: 125e3,
    image: Se
  }],
  PB = () => {
    const t = _(),
      n = c(a => a.tournament.showRoundRewardsPopup),
      s = a => {
        t(dr(a))
      };
    return e.jsx(Lt, {
      show: n,
      setShow: s,
      children: e.jsxs("div", {
        className: Pe.container,
        children: [e.jsx("img", {
          alt: "column",
          src: Vs,
          className: Pe.column
        }), e.jsx("img", {
          alt: "column",
          src: Vs,
          className: Pe.column_rev
        }), e.jsx("div", {
          className: Pe.title,
          children: "Round 10"
        }), e.jsx("div", {
          className: Pe.table_container,
          children: CB.map((a, i) => e.jsxs("div", {
            className: Pe.table_row,
            children: [e.jsx("div", {
              children: a.name
            }), e.jsxs("div", {
              className: Pe.value,
              children: [Ze({
                num: a.value
              }), a.image && e.jsx("img", {
                alt: "coin",
                src: a.image,
                className: Pe.notpixel_icon
              })]
            })]
          }, i))
        }), e.jsx("div", {
          className: Pe.title,
          children: "Rewards in templates"
        }), e.jsx("div", {
          className: Pe.table_container,
          children: IB.map((a, i) => e.jsxs("div", {
            className: Pe.table_row,
            children: [e.jsx("div", {
              children: a.name
            }), e.jsxs("div", {
              className: Pe.value,
              children: [Ze({
                num: a.value
              }), a.image && e.jsx("img", {
                alt: "coin",
                src: a.image,
                className: Pe.notpixel_icon
              })]
            })]
          }, i))
        }), e.jsx("button", {
          className: Pe.button,
          onPointerUp: () => s(!1),
          children: "That's so wise!"
        })]
      })
    })
  },
  SB = "_button_1wjsf_1",
  BB = "_icon_1wjsf_20",
  so = {
    button: SB,
    icon: BB
  },
  TB = () => {
    const t = _(),
      s = c(Et) ? "calc(12px + var(--safe-area-top))" : "calc(12px + var(--header-height))";
    return e.jsxs("button", {
      className: so.button,
      style: {
        top: s
      },
      onPointerUp: () => {
        t(dr(!0))
      },
      children: [e.jsx("span", {
        children: "Round 10"
      }), " ", e.jsx("span", {
        className: `telegram_icons ${so.icon}`,
        children: ""
      })]
    })
  },
  EB = () => {
    const t = _();
    return e.jsxs(ue, {
      children: [e.jsx(TB, {}), e.jsxs("div", {
        className: Je.general_info_container,
        style: {
          backgroundImage: `url(${E2})`,
          backgroundPosition: "top center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          marginTop: -20
        },
        children: [e.jsxs("div", {
          className: Je.img_container,
          children: [e.jsx("img", {
            alt: "img",
            className: Je.image_cup,
            src: k2
          }), e.jsx("div", {
            className: Je.image_glow_container,
            children: e.jsx("img", {
              alt: "img",
              className: Je.image_glow,
              src: ac
            })
          }), e.jsx("div", {
            className: Je.image_glow_container,
            children: e.jsx("img", {
              alt: "img",
              className: Je.image_glow_reverse,
              src: ic
            })
          }), e.jsx(pB, {})]
        }), e.jsx("h1", {
          className: Je.title,
          children: "Telegram Battle"
        }), e.jsxs("div", {
          className: Je.description_container,
          children: [e.jsxs("span", {
            className: Je.description,
            children: [e.jsx("span", {
              children: " Paint templates to win "
            }), " ", e.jsx("span", {
              className: Je.gold,
              children: "Golden Pixels"
            }), " ", e.jsx("br", {}), e.jsx(_n, {
              onPointerUp: n => {
                n.stopPropagation(), t(lr(!0))
              },
              children: "How it works"
            })]
          }), e.jsx(z2, {}), e.jsx(PB, {})]
        })]
      }), e.jsx(T2, {}), e.jsx(oB, {})]
    })
  },
  kB = "_container_16f9l_1",
  DB = "_image_container_16f9l_9",
  RB = "_image_16f9l_9",
  MB = "_title_container_16f9l_18",
  UB = "_text_container_16f9l_27",
  QB = "_title_16f9l_18",
  OB = "_gray_16f9l_39",
  FB = "_bold_16f9l_43",
  zB = "_input_16f9l_47",
  GB = "_catalog_container_16f9l_72",
  LB = "_catalog_title_16f9l_77",
  HB = "_catalog_items_container_16f9l_82",
  qB = "_catalog_item_16f9l_82",
  YB = "_catalog_item_image_container_16f9l_101",
  VB = "_catalog_item_image_16f9l_101",
  WB = "_button_container_16f9l_110",
  XB = "_button_16f9l_110",
  JB = "_wrong_helper_text_16f9l_125",
  ZB = "_wrong_button_16f9l_130",
  KB = "_wrong_button_text2_16f9l_143",
  T = {
    container: kB,
    image_container: DB,
    image: RB,
    title_container: MB,
    text_container: UB,
    title: QB,
    gray: OB,
    bold: FB,
    input: zB,
    catalog_container: GB,
    catalog_title: LB,
    catalog_items_container: HB,
    catalog_item: qB,
    catalog_item_image_container: YB,
    catalog_item_image: VB,
    button_container: WB,
    button: XB,
    wrong_helper_text: JB,
    wrong_button: ZB,
    wrong_button_text2: KB
  },
  $B = "/assets/box_1-CzUKXu07.gif",
  eT = "/assets/box_2-wR9cQS7q.gif",
  tT = "/assets/box_3-g_PL1kKM.gif",
  nT = "/assets/dogs-D0jtZggB.gif",
  sT = "/assets/secret_word-BTKB1fAO.gif",
  aT = "/assets/cube_youtube_2-BqessN1a.gif",
  iT = "/assets/cube_twitter_3_m_-Bxf2Qx_E.gif",
  ns = {
    Ghost: "Ghost",
    Mythical: "Mythical",
    Magical: "Magical",
    Dogs: "Dogs"
  },
  oT = () => {
    const t = _(),
      [n, s] = A.useState(""),
      [a, i] = A.useState(!1),
      [o, r] = A.useState(!1),
      [l, d] = A.useState({
        count: 0,
        limit: 1e4
      }),
      [m, h] = A.useState({
        count: 0,
        limit: 1e4
      }),
      [g, f] = A.useState({
        count: 0,
        limit: 1
      }),
      [j, x] = A.useState({
        count: 0,
        limit: 5e3
      });
    return A.useEffect(() => {
      let y = null;
      return o && (y = setTimeout(() => {
        r(!1)
      }, 5e3)), () => {
        clearTimeout(y)
      }
    }, [o]), A.useEffect(() => {
      (async () => {
        const B = await X.getSecretStats();
        B.status === 200 && B.data && B.data.forEach(C => {
          C.group_name === ns.Ghost && d({
            count: C.usage_count,
            limit: C.limit
          }), C.group_name === ns.Mythical && h({
            count: C.usage_count,
            limit: C.limit
          }), C.group_name === ns.Magical && f({
            count: C.usage_count,
            limit: C.limit
          }), C.group_name === ns.Dogs && x({
            count: C.usage_count,
            limit: C.limit
          })
        })
      })()
    }, []), e.jsx(ue, {
      children: e.jsxs("div", {
        className: T.container,
        children: [e.jsx("div", {
          className: T.image_container,
          children: e.jsx("img", {
            alt: "image",
            className: T.image,
            src: sT
          })
        }), e.jsxs("div", {
          className: T.title_container,
          children: [e.jsxs("div", {
            className: T.text_container,
            children: [e.jsx("span", {
              className: F(T.bold, T.title),
              children: "Discover the Secrets"
            }), e.jsx("span", {
              className: T.gray,
              children: "Got secret word?"
            })]
          }), e.jsx("input", {
            className: T.input,
            placeholder: "Enter your word here, fren",
            value: n,
            onChange: y => {
              let B = y.target.value;
              s(B)
            }
          })]
        }), e.jsxs("div", {
          className: T.catalog_container,
          children: [e.jsx("div", {
            className: F(T.catalog_title, T.bold),
            children: "Secret boxes to discover"
          }), e.jsxs("div", {
            className: T.catalog_items_container,
            children: [e.jsxs("div", {
              className: T.catalog_item,
              children: [e.jsx("div", {
                className: T.catalog_item_image_container,
                children: e.jsx("img", {
                  alt: "item_image",
                  className: T.catalog_item_image,
                  src: $B
                })
              }), e.jsx("div", {
                className: F(T.bold),
                children: "Ghost's secret"
              }), e.jsxs("div", {
                className: F(T.gray),
                children: [Ze({
                  num: 1e4
                }), "/", Ze({
                  num: l.limit
                })]
              })]
            }), e.jsxs("div", {
              className: T.catalog_item,
              children: [e.jsx("div", {
                className: T.catalog_item_image_container,
                children: e.jsx("img", {
                  alt: "item_image",
                  className: T.catalog_item_image,
                  src: eT
                })
              }), e.jsx("div", {
                className: F(T.bold),
                children: "Mythical secret"
              }), e.jsxs("div", {
                className: F(T.gray),
                children: [Ze({
                  num: m.count
                }), "/", Ze({
                  num: m.limit
                })]
              })]
            }), e.jsxs("div", {
              className: T.catalog_item,
              children: [e.jsx("div", {
                className: T.catalog_item_image_container,
                children: e.jsx("img", {
                  alt: "item_image",
                  className: T.catalog_item_image,
                  src: nT
                })
              }), e.jsx("div", {
                className: F(T.bold),
                children: "Dogs secret"
              }), e.jsxs("div", {
                className: F(T.gray),
                children: [Ze({
                  num: j.count
                }), "/", Ze({
                  num: j.limit
                })]
              })]
            }), e.jsxs("div", {
              className: T.catalog_item,
              children: [e.jsx("div", {
                className: T.catalog_item_image_container,
                children: e.jsx("img", {
                  alt: "item_image",
                  className: T.catalog_item_image,
                  src: tT
                })
              }), e.jsx("div", {
                className: F(T.bold),
                children: "Magical secret"
              }), e.jsxs("div", {
                className: F(T.gray),
                children: [g.count, "/", g.limit]
              })]
            }), e.jsxs("div", {
              className: T.catalog_item,
              children: [e.jsx("div", {
                className: T.catalog_item_image_container,
                children: e.jsx("img", {
                  alt: "item_image",
                  className: T.catalog_item_image,
                  src: aT
                })
              }), e.jsx("div", {
                className: F(T.bold),
                children: "Y secrets"
              }), e.jsx("div", {
                className: F(T.gray),
                children: "Daily"
              })]
            }), e.jsxs("div", {
              className: T.catalog_item,
              children: [e.jsx("div", {
                className: T.catalog_item_image_container,
                children: e.jsx("img", {
                  alt: "item_image",
                  className: T.catalog_item_image,
                  src: iT
                })
              }), e.jsx("div", {
                className: F(T.bold),
                children: "X secrets"
              }), e.jsx("div", {
                className: F(T.gray),
                children: "Daily"
              })]
            })]
          })]
        }), e.jsxs("div", {
          className: T.button_container,
          children: [!o && e.jsx("button", {
            disabled: a,
            className: T.button,
            onPointerUp: async () => {
              i(!0);
              try {
                const y = await X.checkSecret({
                  key: n
                });
                if (y.status === 200) {
                  const B = y.data;
                  if (B.secretWord.success) {
                    let C = "Success!";
                    B.secretWord.reward && (C += ` ${B.secretWord.reward} PX earned`), t(z({
                      id: performance.now(),
                      text: C,
                      icon: ""
                    })), t(kt(B.secretWord.reward || 0));
                    return
                  }
                }
                throw new Error("Wrong word!")
              } catch {
                r(!0)
              } finally {
                i(!1)
              }
            },
            children: "Check my word"
          }), o && e.jsx("span", {
            className: F(T.gray, T.wrong_helper_text),
            children: "5s to try again"
          }), o && e.jsxs("button", {
            className: T.wrong_button,
            children: [e.jsx("span", {
              children: "Wrong word, fren."
            }), e.jsx("span", {
              className: T.wrong_button_text2,
              children: "But keep searching"
            })]
          })]
        })]
      })
    })
  },
  jt = {
    ratings: "/ratings",
    stars: "/stars",
    mining: "/claiming",
    template: "/template",
    history: "/history",
    my_squad: "/my-squad",
    my_profile: "/my-profile"
  },
  rT = Object.values(jt),
  cT = () => e.jsx(ai, {
    children: e.jsxs(Bc, {
      children: [e.jsx(ie, {
        path: "/welcome",
        children: e.jsx(pb, {})
      }), e.jsx(ie, {
        path: "/airdrop",
        children: e.jsx(OP, {})
      }), e.jsx(ie, {
        path: "/invite-frens",
        children: e.jsx($b, {})
      }), e.jsx(ie, {
        path: jt.stars,
        children: e.jsx(_u, {})
      }), e.jsx(ie, {
        path: "/info",
        children: e.jsx(ju, {})
      }), e.jsx(ie, {
        path: jt.my_squad,
        children: e.jsx(VI, {})
      }), e.jsx(ie, {
        path: jt.my_profile,
        children: e.jsx(AI, {})
      }), e.jsx(ie, {
        path: "/rules",
        children: e.jsx(Vj, {})
      }), e.jsx(ie, {
        path: "/terms",
        children: e.jsx(Cu, {})
      }), e.jsx(ie, {
        path: "/stats",
        children: e.jsx(f1, {})
      }), e.jsx(ie, {
        path: "/privacy",
        children: e.jsx(Su, {})
      }), e.jsx(ie, {
        path: "/secrets",
        children: e.jsx(oT, {})
      }), e.jsx(ie, {
        path: jt.mining,
        children: e.jsx(qx, {})
      }), e.jsx(ie, {
        path: "/ratings/awards",
        children: e.jsx($j, {})
      }), e.jsx(ie, {
        path: jt.ratings,
        children: e.jsx(Vv, {})
      }), e.jsx(ie, {
        path: "/daily",
        children: e.jsx(D0, {})
      }), e.jsx(ie, {
        path: jt.history,
        children: e.jsx(zj, {})
      }), e.jsx(ie, {
        path: "/template/create",
        children: e.jsx(eP, {})
      }), e.jsx(ie, {
        path: jt.template,
        children: e.jsx(pC, {})
      }), e.jsx(ie, {
        path: "/tournament",
        children: e.jsx(EB, {})
      }), e.jsx(ie, {
        path: "/energy-over",
        children: e.jsx(U1, {})
      }), e.jsx(ie, {
        path: "/open-league",
        children: e.jsx(vb, {})
      }), e.jsx(ie, {
        path: "/pay-support",
        children: e.jsx(Cb, {})
      }), e.jsx(ie, {
        path: "/",
        children: e.jsx(Aj, {})
      })]
    })
  }),
  lT = "_layout_1djp8_1",
  dT = "_loading_container_1djp8_8",
  uT = "_image_container_1djp8_20",
  mT = "_image_1djp8_20",
  AT = "_text_1djp8_29",
  Sn = {
    layout: lT,
    loading_container: dT,
    image_container: uT,
    image: mT,
    text: AT
  },
  pT = "_buttons_container_rjvnl_1",
  hT = "_group_rjvnl_8",
  gT = "_left_rjvnl_15",
  _T = "_middle_rjvnl_21",
  fT = "_right_rjvnl_29",
  xT = "_number_rjvnl_36",
  vT = "_button_rjvnl_1",
  yT = "_ratings_button_rjvnl_55",
  wT = "_stars_button_rjvnl_62",
  jT = "_shop_button_rjvnl_70",
  bT = "_burger_button_rjvnl_79",
  NT = "_relative_button_rjvnl_89",
  CT = "_telegram_button_rjvnl_116",
  IT = "_button_img_rjvnl_124",
  PT = "_avatar_img_rjvnl_129",
  ST = "_open_menu_button_rjvnl_134",
  BT = "_open_menu_button_image_rjvnl_144",
  TT = "_my_pixels_amount_rjvnl_149",
  ET = "_header_content_rjvnl_154",
  Ne = {
    buttons_container: pT,
    group: hT,
    left: gT,
    middle: _T,
    right: fT,
    number: xT,
    button: vT,
    ratings_button: yT,
    stars_button: wT,
    shop_button: jT,
    burger_button: bT,
    relative_button: NT,
    telegram_button: CT,
    button_img: IT,
    avatar_img: PT,
    open_menu_button: ST,
    open_menu_button_image: BT,
    my_pixels_amount: TT,
    header_content: ET
  },
  kT = () => c(Ve) ? null : e.jsxs("button", {
    className: `${Ne.button} ${Ne.telegram_button}`,
    onPointerUp: () => {
      W("https://t.me/notpixel")
    },
    children: [e.jsx("img", {
      alt: "tg_logo",
      src: qn
    }), "Go to app for paint"]
  }),
  fa = t => {
    const n = na(),
      s = te();
    return () => {
      n.pathname === t ? s.push("/") : s.push(t)
    }
  },
  DT = () => {
    const t = fa("/claiming"),
      n = c(a => a.user.pixelCoins);
    return c(Ve) ? e.jsxs("button", {
      className: `${Ne.button}`,
      onPointerUp: t,
      children: [e.jsx(M, {
        size: 16,
        className: Ne.button_img
      }), e.jsx("div", {
        style: {
          transform: "translateY(1px)"
        },
        children: e.jsx(Vn, {
          number: Math.max(Number(n.toFixed(0)), 0)
        })
      })]
    }) : null
  },
  RT = "data:image/svg+xml,%3c?xml%20version='1.0'%20?%3e%3csvg%20viewBox='0%200%2032%2032'%20xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:none;}%3c/style%3e%3c/defs%3e%3ctitle/%3e%3cg%20fill='%23e0dd8e'%20data-name='Layer%202'%20id='Layer_2'%3e%3cpath%20d='M24,29H8a3,3,0,0,1-3-3V16a1,1,0,0,1,2,0V26a1,1,0,0,0,1,1H24a1,1,0,0,0,1-1V16a1,1,0,0,1,2,0V26A3,3,0,0,1,24,29Z'/%3e%3cpath%20d='M15,29H10a1,1,0,0,1-1-1V22a3,3,0,0,1,3-3h1a3,3,0,0,1,3,3v6A1,1,0,0,1,15,29Zm-4-2h3V22a1,1,0,0,0-1-1H12a1,1,0,0,0-1,1Z'/%3e%3cpath%20d='M25,17a4,4,0,0,1-4-4,1,1,0,0,1,2,0,2,2,0,0,0,4,0v-.76L24.38,7H7.62L5,12.24V13a2,2,0,0,0,4,0,1,1,0,0,1,2,0,4,4,0,0,1-8,0V12a1,1,0,0,1,.11-.45l3-6A1,1,0,0,1,7,5H25a1,1,0,0,1,.89.55l3,6A1,1,0,0,1,29,12v1A4,4,0,0,1,25,17Z'/%3e%3cpath%20d='M13,17a4,4,0,0,1-4-4,1,1,0,0,1,2,0,2,2,0,0,0,4,0,1,1,0,0,1,2,0A4,4,0,0,1,13,17Z'/%3e%3cpath%20d='M19,17a4,4,0,0,1-4-4,1,1,0,0,1,2,0,2,2,0,0,0,4,0,1,1,0,0,1,2,0A4,4,0,0,1,19,17Z'/%3e%3cpath%20d='M22,22H19a1,1,0,0,1,0-2h3a1,1,0,0,1,0,2Z'/%3e%3c/g%3e%3cg%20id='frame'%3e%3crect%20class='cls-1'%20height='32'%20width='32'/%3e%3c/g%3e%3c/svg%3e",
  MT = () => {
    const t = fa("/stars");
    return c(Ve) ? e.jsx("button", {
      className: `${Ne.shop_button}`,
      onPointerUp: t,
      children: e.jsx("img", {
        alt: "icon",
        src: RT,
        style: {
          width: 24,
          height: 24
        }
      })
    }) : null
  },
  UT = () => {
    const t = fa("/invite-frens");
    return c(Ve) ? e.jsx("button", {
      className: `${Ne.stars_button}`,
      onPointerUp: t,
      children: e.jsx(I, {
        size: 20,
        children: ""
      })
    }) : null
  },
  QT = () => {
    const t = _(),
      n = c(wr),
      s = () => {
        if (n) {
          t(Ft(!1));
          return
        }
        t(Ft(!0))
      };
    return e.jsx("button", {
      className: Ne.burger_button,
      onPointerUp: s,
      children: e.jsx(I, {
        size: 28,
        children: ""
      })
    })
  },
  OT = () => {
    const t = fa("/daily");
    return c(Ve) ? e.jsx("button", {
      className: `${Ne.stars_button}`,
      onPointerUp: t,
      children: e.jsx(I, {
        size: 20,
        children: ""
      })
    }) : null
  },
  ao = ae.memo(() => e.jsxs("div", {
    className: Ne.buttons_container,
    children: [e.jsxs("div", {
      className: `${Ne.group} ${Ne.left}`,
      children: [e.jsx(QT, {}), e.jsx(UT, {})]
    }), e.jsx("div", {
      className: `${Ne.group} ${Ne.middle}`,
      children: e.jsx(DT, {})
    }), e.jsxs("div", {
      className: `${Ne.group} ${Ne.right}`,
      children: [e.jsx(OT, {}), e.jsx(kT, {}), e.jsx(MT, {})]
    })]
  })),
  io = {
    bronze: Qe.bronze,
    silver: Qe.silver,
    gold: Qe.gold,
    platinum: Qe.platinum,
    diamond: Qe.diamond
  },
  oo = () => {
    const t = c(s => s.user.user),
      n = [Qe.league];
    return t !== null && io.hasOwnProperty(t.league) ? (n.push(io[t.league]), e.jsx("div", {
      className: n.join(" ")
    })) : null
  },
  FT = () => {
    const t = c(Et),
      n = na(),
      s = c(ra),
      a = c(ca);
    c(pd);
    const i = `calc(16px + ${s.top+a.top}px)`;
    return t ? t && n.pathname === "/" ? e.jsx("div", {
      className: Qe.header_bottom_container,
      style: {
        top: i
      },
      children: e.jsx("div", {
        className: Qe.header_bottom,
        children: e.jsxs("div", {
          className: Qe.header_content,
          children: [e.jsx(oo, {}), e.jsx(ao, {})]
        })
      })
    }) : null : e.jsx("div", {
      className: Qe.header,
      children: e.jsxs("div", {
        className: Qe.header_content,
        children: [e.jsx(oo, {}), e.jsx(ao, {})]
      })
    })
  };
let ro = "/";
const zT = () => {
    let t = na(),
      n = te();
    return A.useEffect(() => {
      const s = () => {
        rT.includes(t.pathname) ? n.push("/") : n.goBack()
      };
      return window.Telegram.WebApp.onEvent("backButtonClicked", s), t.pathname !== ro && (t.pathname === "/" ? window.Telegram.WebApp.BackButton.hide() : window.Telegram.WebApp.BackButton.show(), ro = t.pathname), () => {
        window.Telegram.WebApp.offEvent("backButtonClicked", s)
      }
    }, [t, n]), null
  },
  GT = "_layout_ppin4_1",
  LT = {
    layout: GT
  },
  HT = () => {
    const t = A.useRef(),
      n = c(a => a.progress.command),
      s = c(a => a.progress.counter);
    return A.useEffect(() => {
      let a = null,
        i = 0,
        o = null,
        r = 2e3,
        l = 80,
        d = null,
        m = null;
      const h = g => {
        a === null && (a = g);
        const j = (g - a) / r;
        o !== g && (i = Math.min(j * l, l), t.current && (t.current.style.width = `${i}%`)), o = g, i < l && (d = requestAnimationFrame(h))
      };
      return n === Oe.start && (d = requestAnimationFrame(h), t.current && (t.current.style.display = "block")), n === Oe.finish && (t.current && (t.current.style.width = "100%"), m = setTimeout(() => {
        t.current && (t.current.style.display = "none", t.current.style.width = "0")
      }, 300)), () => {
        d !== null && cancelAnimationFrame(d), m !== null && clearTimeout(m)
      }
    }, [n, s]), Ge.createPortal(e.jsx("div", {
      ref: t,
      className: LT.layout
    }), document.body)
  },
  qT = "_container_11ui8_1",
  YT = "_header_11ui8_13",
  VT = "_close_container_11ui8_23",
  WT = "_close_11ui8_23",
  XT = "_title_11ui8_48",
  JT = "_frens_count_11ui8_53",
  ZT = "_body_11ui8_58",
  KT = "_content_11ui8_68",
  $T = "_image_container_11ui8_75",
  eE = "_image_11ui8_75",
  tE = "_image_container_charges_11ui8_84",
  nE = "_image_charges_11ui8_89",
  sE = "_description_container_11ui8_94",
  aE = "_bold_11ui8_102",
  iE = "_gray_11ui8_107",
  oE = "_center_11ui8_111",
  rE = "_benefits_container_11ui8_115",
  cE = "_benefits_item_11ui8_123",
  lE = "_benefits_icon_container_11ui8_128",
  dE = "_icon_invite_11ui8_132",
  uE = "_footer_11ui8_136",
  mE = "_button_11ui8_141",
  O = {
    container: qT,
    header: YT,
    close_container: VT,
    close: WT,
    title: XT,
    frens_count: JT,
    body: ZT,
    content: KT,
    image_container: $T,
    image: eE,
    image_container_charges: tE,
    image_charges: nE,
    description_container: sE,
    bold: aE,
    gray: iE,
    center: oE,
    benefits_container: rE,
    benefits_item: cE,
    benefits_icon_container: lE,
    icon_invite: dE,
    footer: uE,
    button: mE
  },
  AE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUoAAACuCAMAAABnVbQXAAAAAXNSR0IArs4c6QAAAFdQTFRFR3BM/v7/8/Dj9/O31O3t//VA6tOA/r2m/6KssL7A2rFjNsX02oBqyHivto1bhouRM4jepWpBq0hMY2JkOFmzmT1BiCsqQT0ybyEgNjJXUhUUISEjAAAAbfPdiQAAAAF0Uk5TAEDm2GYAAAXISURBVHja7d2NbuI4GIXhsHShmf6kSVoaj7n/65wjH+WTSWYcJyAa4LxbWcZQBp7JekOEtIVSSimllFJKKaWUUkoppZRSSimllFJKKaWUUo+WC3nvOQ6SjyhFKUolSlGKUpRKlFfOR4lSlKK8s/4LlWXJsaoqjkw+51O2+BHlmZQtxrYKtaJcSknEAFpXrf4Fv9xeWYvyApSt/rMzJ8f4USekUyJRivKeOva9jrK7pCRKUd4uZay23+9j3LmUm80mfa8oRSnKdNvtNrG+jHIfhZv/h4wy3/Ht7Q1j+l5RilKUCUfvPcbE+uK9kqZA5E1M5lI+Pz+b19gR94pSlKKcpKzrOlbb7XZYmUXZdV3TNIfDAXYU5JmQUXLH5DoeicdnUiI8fnMaVrAuytmUrSgf66h8f3//FTW+me/YhehomSayixp4WI7m09OTbYjjuI3iMaIUpSjTjtsQJuObRUbYIknDYEcyjIM5HW1jLZJVVQWpzb/DvXiMKEUpyr9mGyLg8CaNEnOsYD1zu2xQREk1fJ/g2If5ayimRAVLah77yrIEH0ZboaMoRSnKcXVdE46OA0pk2+Usyt8hbpEQZMTlXbMo8TKcc5+fnx8fHyaIOVawjrkoRfmAlM1ph1ARhbdEym0fBVm8nkmJ56ejC9VNPTgNwgq/SERNPD6HEjsjNQk3vvm7r4g6hAYIt0rZ1M2AEiuXpfQzKXVU0s61Rmk3f4TSNLsoo7SMEvNZlPbkrq+qqqY++QeOpOSEmsVUdvZDuPHNbpQ53g9lfWopyvOOyujn/imROQ5GlPlpZ+BIL2i+hnhWREejpGYxVXw549gXX84QpShFGVOmNZk5IjymmKoLmVR8GsiPOphwfcGX+0mGsW1bPCdGrnCjFKUoRZmgdM6RbLfbbfswz3RkdDTBeIJ3Dk1DXEAJtbIsaYf9F6OtrIvSOy9KHZUro4QXQUlpYYWOmZT7EAVhxAkc8bSc2F6JSw8Y96EC5WkeT8OK936VlH5I6Z0XpY7Kn6DEJxnbKF0IEzp653EvNfMpvfcDSmSUjNcrZ1F672GH1//19YWRjt/f3wPNTWgFlMBznpSY4UeUSymdPz0qRTnzcga8yNcfmAijp3ImZdMHJlIi2yvHlHPfHv9ueAKEEXNSIj4hHddFiR/+I8rzKEGIMOionKTEnwo1UhrWtg+IeCkvLy+YkDiH0l43n59eRolxTBn/SpERvkCAVwVBTDBijgk1+YRoZZSup3RelJc5Kr3TUTlFSTIA4c+G45DS+ZcQTHFXPqVtxKRMZ18pYJl75UfIJnS0EXvouii9c6R0TpQ6Kq9GCSBmlNgTx0clJnDMpOxCdLSTIXZkpyt8WNeXScm4+VIQYU5KCK6L0o5KTER5maPSeR2VU5TxFjneK/kZnCeVRmm/m6ZkRumcM8p4BdExTTngICJeDyZpyrIs10HZfwgX5bmUlHROlHmU0HkPxaakjAU5wUr865mfdlyIiMRFXOQVxvhXJh2NEpGSjsbKkyH7CpEoRXnflIcQn87G+HyFfIymvF65mJLxT6FafN5jGyh9+W5ZDiXV4r1yTGnfMLCNePD22aNTOlHew1HZzCzGIt+YkkyZlIjv096breRQGgQdq6ri2IYMekGiFOUlKB0p3U1RmmYdoqNpdmiKknADNRb7EjdNiXhIYhPkUYkwMUdRzqN0EaUT5WWOSnezR2X8cYiavGvyeuX40mRinf3174aUEAxXKIJm4BTlUsrviNIBU5RLKV1MGbolSr5zhIndNOViquNpifVE5jV4GbwpSlE+OOUhr/GnfdvyMMYrplxcJfPChHPT5EriLaQTpSjvgLJZGl+ljZzYCQ0qrpJtixjjV2JjszRRivKRKQ+heK9MCF7N1PZKm4tSlKI8hzKB+IOgohSlKC91OaNYWXaGJEpRPjhlt6gE4upAlyZKUa6PUv/LcaWUUkoppZRSSimllFJKKaWsP1zOEIZMFBOIAAAAAElFTkSuQmCC",
  pE = () => {
    var o, r;
    const t = _(),
      n = c(l => l.main.showInviteFrensPopup),
      s = c(l => l.user.user),
      a = c(l => l.main.settings),
      i = `${Bt}?startapp=f${((r=(o=window.Telegram.WebApp.initDataUnsafe)==null?void 0:o.user)==null?void 0:r.id)||""}`;
    return e.jsx(We, {
      show: n,
      onPointerUp: () => t(Ea()),
      children: e.jsxs("div", {
        className: O.container,
        onPointerUp: l => {
          l.stopPropagation()
        },
        children: [e.jsxs("div", {
          className: O.header,
          children: [e.jsx("div", {
            className: O.title,
            children: "Invite frens "
          }), e.jsx("div", {
            className: O.close_container,
            children: e.jsx("div", {
              className: O.close,
              onPointerUp: () => {
                t(Ea())
              },
              children: e.jsx(I, {
                size: 20,
                children: ""
              })
            })
          })]
        }), e.jsx("div", {
          className: O.body,
          children: e.jsxs("div", {
            className: O.content,
            children: [e.jsx("div", {
              className: O.image_container,
              children: e.jsx("img", {
                alt: "image",
                className: O.image,
                src: AE
              })
            }), e.jsxs("div", {
              className: O.description_container,
              children: [e.jsxs("span", {
                className: O.bold,
                children: ["Your frens:  ", e.jsx("span", {
                  className: O.frens_count,
                  children: (s == null ? void 0 : s.friends) || 0
                })]
              }), e.jsxs("span", {
                children: ["Invite more! You and your", e.jsx("br", {}), " frens will get bonuses:"]
              })]
            }), e.jsxs("div", {
              className: O.benefits_container,
              children: [e.jsx("div", {}), e.jsxs("div", {
                className: O.benefits_item,
                children: ["No Premium:   ", " ", e.jsx("div", {
                  className: O.benefits_icon_container,
                  children: e.jsx(M, {
                    size: 16,
                    className: O.icon_invite
                  })
                }), a.InitialCoins]
              }), e.jsx("div", {}), " ", e.jsx("div", {}), e.jsxs("div", {
                className: O.benefits_item,
                children: ["Premium:   ", " ", e.jsx("div", {
                  className: O.benefits_icon_container,
                  children: e.jsx(M, {
                    size: 16,
                    className: O.icon_invite
                  })
                }), a.RefRewardCoinsPremium]
              }), e.jsx("div", {})]
            })]
          })
        }), e.jsxs("div", {
          className: O.footer,
          children: [e.jsx(qt, {
            url: i
          }), e.jsx("button", {
            className: O.button,
            onPointerUp: l => {
              l.stopPropagation(), W(`https://t.me/share/url?url=${i}`), t(Ea())
            },
            children: "Share"
          })]
        })]
      })
    })
  },
  hE = "_container_1cfz6_1",
  gE = "_header_1cfz6_9",
  _E = "_close_1cfz6_20",
  fE = "_title_1cfz6_32",
  xE = "_body_1cfz6_37",
  vE = "_image_container_1cfz6_51",
  yE = "_image_1cfz6_51",
  wE = "_content_container_1cfz6_62",
  jE = "_description_container_1cfz6_70",
  bE = "_description_item_1cfz6_77",
  NE = "_amount_selector_container_1cfz6_84",
  CE = "_amount_selector_button_1cfz6_90",
  IE = "_amount_selector_count_1cfz6_103",
  PE = "_button_container_1cfz6_114",
  SE = "_crypto_button_container_1cfz6_120",
  BE = "_error_1cfz6_134",
  TE = "_not_available_1cfz6_141",
  EE = "_button_1cfz6_114",
  kE = "_star_color_1cfz6_167",
  DE = "_tokens_selector_1cfz6_173",
  RE = "_tokens_title_1cfz6_178",
  ME = "_connect_wallet_text_title_1cfz6_185",
  UE = "_tokens_container_1cfz6_194",
  QE = "_token_item_1cfz6_201",
  OE = "_token_image_container_1cfz6_212",
  FE = "_token_image_1cfz6_212",
  zE = "_sale_box_1cfz6_222",
  GE = "_sale_text_1cfz6_234",
  ee = {
    container: hE,
    header: gE,
    close: _E,
    title: fE,
    body: xE,
    image_container: vE,
    image: yE,
    content_container: wE,
    description_container: jE,
    description_item: bE,
    amount_selector_container: NE,
    amount_selector_button: CE,
    amount_selector_count: IE,
    button_container: PE,
    crypto_button_container: SE,
    error: BE,
    not_available: TE,
    button: EE,
    star_color: kE,
    tokens_selector: DE,
    tokens_title: RE,
    connect_wallet_text_title: ME,
    tokens_container: UE,
    token_item: QE,
    token_image_container: OE,
    token_image: FE,
    sale_box: zE,
    sale_text: GE
  },
  LE = () => {
    const t = _(),
      n = c(a => a.shop.activeProductCardId),
      s = c(a => a.shop.products[n]);
    return e.jsxs("div", {
      className: ee.header,
      onPointerUp: a => {
        a.stopPropagation()
      },
      children: [e.jsx("div", {
        className: ee.close,
        onPointerUp: () => {
          t(di())
        },
        children: e.jsx(I, {
          size: 30,
          children: ""
        })
      }), e.jsx("div", {
        className: ee.title,
        children: s.name
      })]
    })
  },
  HE = () => {
    const t = c(a => a.shop.activeProductCardId),
      n = c(a => a.shop.products[t]),
      s = c(a => a.shop.amount);
    return e.jsx("div", {
      className: ee.image_container,
      children: e.jsx("img", {
        alt: "img",
        className: ee.image,
        src: Ro(n.id, s)
      })
    })
  },
  qE = () => {
    const t = c(s => s.shop.activeProductCardId),
      n = c(s => s.shop.products[t]);
    return e.jsx("div", {
      className: ee.description_container,
      children: e.jsx("span", {
        className: ee.description_item,
        children: n.description
      })
    })
  },
  YE = () => {
    const t = _(),
      n = c(ia),
      s = c(i => i.shop.selectedCurrency);
    return c(ct) !== je ? null : e.jsxs("div", {
      className: ee.tokens_selector,
      children: [e.jsx("div", {
        className: ee.tokens_title,
        children: "Select token"
      }), e.jsx("div", {
        children: e.jsx("div", {
          className: ee.tokens_container,
          children: n.map(i => i.currency_id === 1 ? null : e.jsxs("div", {
            className: ee.token_item,
            style: {
              color: i.currency_id === s ? "#FFFFFF" : void 0
            },
            onPointerUp: () => {
              t(Qn(i.currency_id))
            },
            children: [e.jsx("div", {
              children: e.jsx(I, {
                size: 28,
                children: s === i.currency_id ? "" : ""
              })
            }), e.jsx("div", {
              className: ee.token_image_container,
              children: e.jsx("img", {
                alt: "img",
                className: ee.token_image,
                src: i.image
              })
            }), e.jsx("div", {
              children: e.jsx("span", {
                children: i.name
              })
            })]
          }, i.currency_id))
        })
      })]
    })
  },
  VE = () => {
    const t = c(s => s.shop.selectedCurrency),
      n = c(s => s.shop.crypto).filter(s => s.currency_id === t)[0];
    return t === 1 ? e.jsx("span", {
      className: ee.star_color,
      style: {
        paddingRight: 4,
        marginBottom: -5
      },
      children: e.jsx(An, {})
    }) : e.jsx("img", {
      alt: "image",
      style: {
        width: 16,
        height: 16,
        paddingRight: 6,
        paddingLeft: 6,
        marginBottom: 1
      },
      src: n.image
    })
  },
  WE = ({
    success: t
  }) => {
    var l;
    const n = c(d => d.shop.activeProductCardId),
      s = c(d => d.shop.amount),
      a = c(d => d.shop.selectedCurrency),
      i = c(d => d.shop.products[n]),
      o = (l = i.prices.filter(d => d.currency_id === a)[0]) == null ? void 0 : l.price,
      r = !i.isOnePiece;
    if (t) return e.jsx(ae.Fragment, {
      children: "Success, wait 1-5 min!"
    });
    if (!o) return e.jsx(ae.Fragment, {
      children: "Not available"
    });
    if (o) return e.jsxs(ae.Fragment, {
      children: ["Buy for ", e.jsx(VE, {}), Math.round(o * (r ? s : 1) * 100) / 100, e.jsx("div", {
        className: ee.sale_box,
        children: e.jsx("span", {
          className: ee.sale_text,
          children: "-30% "
        })
      })]
    })
  },
  XE = ({
    setError: t,
    setRunParticle: n
  }) => {
    var be;
    const s = _(),
      a = c(Y => Y.shop.activeProductCardId),
      i = c(Y => Y.shop.selectedCurrency),
      o = c(Y => Y.shop.amount),
      [r, l] = A.useState(p.idle),
      [d, m] = A.useState(!1),
      [h, g] = dn(),
      f = c(Y => Y.color.active),
      x = (be = c(Y => Y.shop.products[a]).prices.filter(Y => Y.currency_id === i)[0]) == null ? void 0 : be.price,
      y = Gn();
    if (c(Y => Y.shop.selectedCurrency) === 1 || y === "") return null;
    const C = async Y => {
      const U = Be.beginCell().storeUint(0, 32).storeStringTail(Y.txMemCode).endCell(),
        xt = {
          validUntil: Math.floor(Date.now() / 1e3) + 600,
          messages: [{
            address: Ha,
            amount: String(Be.toNano(Y.strAmount)),
            payload: U.toBoc().toString("base64")
          }]
        };
      await h.sendTransaction(xt), n(!0), m(!0), l(p.fulfilled)
    }, Ce = async Y => {
      const U = new ya.HttpProvider("https://toncenter.com/api/v2/jsonRPC"),
        uc = await new ya.token.jetton.JettonMinter(U, {
          address: Ut[i]
        }).getJettonWalletAddress(new ya.utils.Address(y)),
        mc = Be.Address.parse(y),
        Ac = Be.Address.parse(Ha),
        pc = Be.beginCell().storeUint(0, 32).storeStringTail(Y.txMemCode).endCell();
      let xa = Be.toNano(Y.strAmount);
      Number(i) === 4 && (xa = xa / 1000n);
      const hc = Be.beginCell().storeUint(260734629, 32).storeUint(0, 64).storeCoins(xa).storeAddress(Ac).storeAddress(mc).storeBit(0).storeCoins(Be.toNano("0.01")).storeBit(1).storeRef(pc).endCell(),
        gc = {
          validUntil: Math.floor(Date.now() / 1e3) + 600,
          messages: [{
            address: uc.toString(!0, !0, !0),
            amount: "101000000",
            payload: hc.toBoc().toString("base64")
          }]
        };
      await h.sendTransaction(gc), n(!0), m(!0), l(p.fulfilled)
    };
    return x ? e.jsx("button", {
      className: ee.button,
      onPointerUp: async Y => {
        if (Y.stopPropagation(), t(!1), d) {
          s(di()), l(p.idle);
          return
        }
        if (r !== p.pending) {
          l(p.pending);
          try {
            const U = await X.startShopTransaction({
              buyerWallet: y,
              currencyId: i,
              quantity: o,
              goodId: a,
              activeColor: f
            });
            if (i === 2) await C(U.data);
            else if (i === 3 || i === 4 || i === 5 || i === 6 || i === 7 || i === 8 || i === 9) await Ce(U.data);
            else throw new Error("Wrong currency")
          } catch (U) {
            console.warn(U), t("Something went wrong"), l(p.rejected)
          }
        }
      },
      children: e.jsx(WE, {
        success: d
      })
    }) : e.jsx("div", {
      className: ee.not_available,
      children: "Not available"
    })
  },
  JE = () => {
    const [t, n] = dn(), s = Gn(), a = c(i => i.shop.selectedCurrency);
    return s !== "" || a === 1 ? null : e.jsx("button", {
      className: ee.button,
      onPointerUp: async i => {
        i.stopPropagation(), i.preventDefault(), setTimeout(() => {
          t.openModal()
        }, 20)
      },
      children: "Connect TON wallet"
    })
  },
  ZE = ({
    success: t
  }) => {
    const n = c(o => o.shop.activeProductCardId),
      s = c(o => o.shop.amount),
      a = c(o => o.shop.products[n]),
      i = !a.isOnePiece;
    return t ? e.jsx(ae.Fragment, {
      children: "You bought it!"
    }) : e.jsxs(ae.Fragment, {
      children: ["Buy for", e.jsx(I, {
        size: 18,
        className: ee.star_color,
        children: ""
      }), a.prices[0].price * (i ? s : 1)]
    })
  },
  KE = ({
    setError: t,
    setRunParticle: n
  }) => {
    const s = _(),
      a = c(f => f.shop.activeProductCardId),
      i = c(f => f.shop.products[a]),
      o = c(f => f.shop.amount),
      [r, l] = A.useState(p.idle),
      [d, m] = A.useState(!1),
      h = c(f => f.shop.selectedCurrency),
      g = c(f => f.color.active);
    return h !== 1 ? null : e.jsx("div", {
      className: ee.button_container,
      onPointerUp: async f => {
        var x;
        if (f.stopPropagation(), d) {
          s(di()), l(p.idle);
          return
        }
        if (r === p.pending) return;
        l(p.pending);
        const j = i.isOnePiece ? 1 : o;
        try {
          const y = await X.buy({
            type: Number(a),
            qty: j,
            pixanosColor: g
          });
          y.status === 200 && ((x = y == null ? void 0 : y.data) == null ? void 0 : x.ok) === !0 && window.Telegram.WebApp.openInvoice(y.data.result, B => {
            var Ce, be;
            const C = Number(a);
            if (B === "paid") {
              if (C >= 9 && C <= 11) {
                const Y = {
                  9: 1,
                  10: 2,
                  11: 3
                };
                s(an({
                  product: 1,
                  amount: Y[C]
                })), s(an({
                  product: 2,
                  amount: Y[C]
                })), s(an({
                  product: 6,
                  amount: Y[C]
                }))
              } else s(an({
                product: a,
                amount: j
              }));
              m(!0), (be = (Ce = window.Telegram.WebApp) == null ? void 0 : Ce.HapticFeedback) == null || be.notificationOccurred("error"), n(!0)
            } else t("Error, try again.")
          })
        } catch {
          t("Error, try again."), l(p.rejected)
        }
        l(p.fulfilled)
      },
      children: e.jsx("button", {
        className: ee.button,
        children: e.jsx(ZE, {
          success: d
        })
      })
    })
  },
  $E = () => (c(ct) === je, null),
  ek = () => {
    const t = c(n => n.shop.activeProductCardId);
    return console.log(t), t !== 13 ? null : e.jsxs("div", {
      style: {
        marginBottom: 15
      },
      children: [e.jsx("div", {
        className: ee.tokens_title,
        style: {
          marginBottom: -10
        },
        children: "Select color"
      }), e.jsx(qr, {
        colors: et
      })]
    })
  },
  tk = () => {
    const [t, n] = A.useState(null), [s, a] = A.useState(!1);
    return e.jsxs("div", {
      className: ee.crypto_button_container,
      children: [e.jsx(ek, {}), e.jsx(YE, {}), e.jsx($E, {}), e.jsx(Xo, {
        runParticle: s,
        setRunParticle: a
      }), t && e.jsx("div", {
        className: ee.error,
        children: " Failure. Something went wrong."
      }), e.jsx(XE, {
        setError: n,
        setRunParticle: a
      }), e.jsx(KE, {
        setError: n,
        setRunParticle: a
      }), e.jsx(JE, {
        setError: n
      })]
    })
  },
  nk = () => {
    _();
    const t = c(i => i.shop.activeProductCardId),
      n = c(i => i.shop.amount);
    return c(i => i.shop.products[t]).isOnePiece ? null : e.jsx("div", {
      className: ee.amount_selector_container,
      children: e.jsxs("div", {
        className: ee.amount_selector_count,
        children: ["× ", n]
      })
    })
  },
  sk = "_container_1rmx4_1",
  ak = "_max_value_1rmx4_9",
  co = {
    container: sk,
    max_value: ak
  },
  ss = t => t < 100 ? {
    max: 100,
    step: 1
  } : t < 500 ? {
    max: 500,
    step: 5
  } : t < 1e3 ? {
    max: 1e3,
    step: 10
  } : {
    max: 5e3,
    step: 50
  };

function lo(t, n) {
  return Math.round(t / n) * n
}
const ik = () => {
    const t = _(),
      n = c(x => x.shop.activeProductCardId),
      s = c(x => x.shop.amount),
      i = c(x => x.shop.products[n]).isOnePiece,
      [o, r] = A.useState([s]),
      [l, d] = A.useState(ss(s).max),
      [m, h] = A.useState(ss(s).step),
      g = l === 5e3 ? "5000" : `${l}+`,
      f = x => {
        const y = x[0];
        t(sa(lo(y, m))), r([lo(y, m)])
      },
      j = x => {
        const y = x[0];
        y === l && (d(ss(y).max), h(ss(y).step))
      };
    return i ? null : e.jsxs("div", {
      className: co.container,
      children: [e.jsx(Qt.Range, {
        values: o,
        step: m,
        min: m,
        max: l,
        rtl: !1,
        onChange: f,
        onFinalChange: j,
        renderTrack: ({
          props: x,
          children: y
        }) => e.jsx("div", {
          onMouseDown: x.onMouseDown,
          onTouchStart: x.onTouchStart,
          style: {
            ...x.style,
            height: "36px",
            display: "flex",
            width: "100%"
          },
          children: e.jsx("div", {
            ref: x.ref,
            style: {
              height: "4px",
              borderRadius: "2px",
              width: "100%",
              background: Qt.getTrackBackground({
                values: o,
                colors: ["var(--btn-primary-bg-color)", "var(--btn-header-bg-color)"],
                min: m,
                max: l,
                rtl: !1
              }),
              alignSelf: "center"
            },
            children: y
          })
        }),
        renderThumb: ({
          props: x,
          isDragged: y
        }) => A.createElement("div", {
          ...x,
          key: x.key,
          style: {
            ...x.style,
            height: "20px",
            width: "20px",
            borderRadius: "50%",
            backgroundColor: "var(--btn-primary-bg-color)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }
        })
      }), e.jsxs("div", {
        className: co.max_value,
        children: [" ", g]
      })]
    })
  },
  ok = () => e.jsxs("div", {
    className: ee.body,
    onPointerUp: t => {
      t.stopPropagation()
    },
    children: [e.jsx(HE, {}), e.jsxs("div", {
      className: ee.content_container,
      children: [e.jsx(qE, {}), e.jsx(nk, {}), e.jsx(ik, {})]
    }), e.jsx(tk, {})]
  }),
  rk = () => {
    const t = c(n => n.shop.show);
    return Ge.createPortal(e.jsx(We, {
      show: t,
      children: e.jsxs("div", {
        className: ee.container,
        children: [e.jsx(LE, {}), e.jsx(ok, {})]
      })
    }), document.body)
  },
  ck = "_layout_9sf1k_1",
  lk = "_container_9sf1k_13",
  dk = "_header_9sf1k_20",
  uk = "_title_9sf1k_30",
  mk = "_body_9sf1k_35",
  Ak = "_image_container_9sf1k_47",
  pk = "_image_9sf1k_47",
  hk = "_shake_9sf1k_1",
  gk = "_description_container_9sf1k_60",
  _k = "_buyer_info_9sf1k_70",
  fk = "_avatar_9sf1k_78",
  xk = "_name_9sf1k_84",
  vk = "_squad_info_9sf1k_88",
  yk = "_squad_avatar_9sf1k_94",
  wk = "_text_container_9sf1k_100",
  jk = "_text_9sf1k_100",
  bk = "_thanos_snap_container_9sf1k_110",
  Nk = "_thanos_snap_text_9sf1k_119",
  Ck = "_button_container_9sf1k_126",
  Ik = "_button_9sf1k_126",
  ye = {
    layout: ck,
    container: lk,
    header: dk,
    title: uk,
    body: mk,
    image_container: Ak,
    image: pk,
    shake: hk,
    description_container: gk,
    buyer_info: _k,
    avatar: fk,
    name: xk,
    squad_info: vk,
    squad_avatar: yk,
    text_container: wk,
    text: jk,
    thanos_snap_container: bk,
    thanos_snap_text: Nk,
    button_container: Ck,
    button: Ik
  },
  Pk = `precision highp float;

uniform float u_AnimationDuration;
uniform float u_ParticleSize;
uniform float u_ElapsedTime;
uniform float u_ViewportWidth;
uniform float u_ViewportHeight;
uniform float u_TextureWidth;
uniform float u_TextureHeight;
uniform float u_TextureLeft;
uniform float u_TextureTop;

attribute float a_ParticleIndex;

varying vec2 v_ParticleCoord;
// Factor value from 0.0 to 1.0
varying float v_ParticleLifetime;

float random(float v) {
    return fract(sin(v) * 100000.0);
}

float random(vec2 st) {
    return fract(sin(dot(st.xy,
                         vec2(12.9898,78.233)))
                 * 43758.5453123);
}

float random(float v, float mult) {
    return fract(10000.0 * random(v) * random(v) * mult);
}

float normalizeX(float x) {
    return 2.0 * x / u_ViewportWidth - 1.0;
}

float normalizeY(float y) {
    return 1.0 - 2.0 * y / u_ViewportHeight;
}

float interpolateLinear(float start, float end, float factor) {
    return start + factor * (end - start);
}

vec4 calculatePosition(vec2 position, float r, float factor) {
    float normalizedX = normalizeX(position.x);
    float normalizedY = normalizeY(position.y);
    float x = interpolateLinear(
        normalizedX,
    // The formula was chosen empirically
        normalizedX + (random(normalizedY, r) - 0.5),
        factor
    );
    float y = interpolateLinear(
        normalizedY,
    // The formula was chosen empirically
        normalizedY + (random(normalizedX, r) - 0.25),
        factor
    );
    return vec4(x, y, 0.0, 1.0);
}

vec2 getPositionFromIndex(float particleSize, float index) {
    float y = floor(index / u_TextureWidth);
    float x = index - y * u_TextureWidth;
    return vec2(
        particleSize * (x + 0.5) + u_TextureLeft,
        particleSize * (y + 0.5) + u_TextureTop
    );
}

void main() {
    vec2 position = getPositionFromIndex(u_ParticleSize, a_ParticleIndex);
    float r = random(position);
    float particleAnimationMinTime = u_AnimationDuration / 4.0;
    float particleAnimationTotalTime = particleAnimationMinTime * (1.0 + r);
    float particleAnimationDelay = position.x / u_ViewportWidth * particleAnimationMinTime;

    // Allow particles to have different time of life
    float particleLifetime = min(u_ElapsedTime / (particleAnimationDelay + particleAnimationTotalTime), 1.0);
    // Allow to start active move for the particles at the start and accelerate animation for the end ones
    float acceleration = 1.0 + 3.0 * (position.x / u_ViewportWidth);

    gl_Position = calculatePosition(position, r, pow(particleLifetime, acceleration));
    gl_PointSize = u_ParticleSize;

    v_ParticleLifetime = particleLifetime;

    vec2 textureOffset = vec2(u_TextureLeft, u_TextureTop);
    vec2 originalTextureSize = vec2(u_TextureWidth * u_ParticleSize, u_TextureHeight * u_ParticleSize);
    // Calculate particle coordinate on texture
    v_ParticleCoord = (position - textureOffset) / originalTextureSize;
}`,
  Sk = `precision mediump float;

uniform sampler2D u_Texture;
varying vec2 v_ParticleCoord;
varying float v_ParticleLifetime;

float interpolateLinear(float start, float end, float factor) {
    return start + factor * (end - start);
}

void main() {
    if (v_ParticleLifetime == 1.0) {
        discard;
    }

    vec4 textureColor = texture2D(u_Texture, v_ParticleCoord);
    if (textureColor.a == 0.0) {
        discard;
    }

    vec2 center = vec2(0.5, 0.5);
    float distanceToCenter = distance(center, gl_PointCoord);
    float visibilityFactor = pow(v_ParticleLifetime, 5.);
    if (distanceToCenter > 1.0 - visibilityFactor) {
        discard;
    }

    float alpha = interpolateLinear(textureColor.a, 0.0, visibilityFactor);
    gl_FragColor = vec4(textureColor.xyz, alpha);
}`,
  rc = 7200,
  Bk = 1;
let N = null,
  Ee = null,
  as = -1,
  Gs = 0;
async function Tk(t) {
  if (N = Ek().getContext("webgl"), !N) {
    console.log("Your browser doesn't support WebGL :(");
    return
  }
  await kk(), Rk(t)
}

function Ek() {
  const t = document.createElement("canvas");
  return t.id = "canvasSnap", t.width = window.innerWidth, t.height = window.innerHeight, t.style.width = `${window.innerWidth}px`, t.style.height = `${window.innerHeight}px`, t.style.position = "fixed", t.style.top = "50%", t.style.left = "50%", t.style.zIndex = "980", t.style.transform = "translate(-50%, -50%)", t.style.opacity = "0", t.style.transition = "2s ease opacity", document.body.appendChild(t), window.getComputedStyle(t).opacity, t.style.opacity = "1", t
}
async function kk() {
  N.enable(N.BLEND), N.blendFunc(N.SRC_ALPHA, N.ONE_MINUS_SRC_ALPHA), N.clearColor(0, 0, 0, 0), N.viewport(0, 0, N.canvas.width, N.canvas.height), Ee = await Dk(N), N.useProgram(Ee)
}
async function Dk(t, n, s) {
  const a = Pk,
    i = Sk,
    o = uo(t, a, t.VERTEX_SHADER),
    r = uo(t, i, t.FRAGMENT_SHADER),
    l = t.createProgram();
  return t.attachShader(l, o), t.attachShader(l, r), t.linkProgram(l), t.getProgramParameter(l, t.LINK_STATUS) || console.error("Shader program initialization failure:", t.getProgramInfoLog(l)), l
}

function uo(t, n, s) {
  const a = t.createShader(s);
  return t.shaderSource(a, n), t.compileShader(a), t.getShaderParameter(a, t.COMPILE_STATUS) ? a : (console.error("Shader compilation failure:", t.getShaderInfoLog(a)), t.deleteShader(a), null)
}
async function Rk(t) {
  Mk(), Ok(t), cc(), document.getElementById("canvasHolder").style.opacity = "0", setTimeout(() => {
    const n = document.getElementById("canvasHolder");
    n.style.transition = "6s ease-in opacity", n.style.opacity = "1"
  }, 20), setTimeout(() => {
    document.getElementById("canvasHolder").style.transition = ""
  }, 7e3)
}

function Mk(t) {
  const n = Uk();
  var s = N.createTexture();
  N.bindTexture(N.TEXTURE_2D, s), N.texParameteri(N.TEXTURE_2D, N.TEXTURE_WRAP_S, N.CLAMP_TO_EDGE), N.texParameteri(N.TEXTURE_2D, N.TEXTURE_WRAP_T, N.CLAMP_TO_EDGE), N.texParameteri(N.TEXTURE_2D, N.TEXTURE_MIN_FILTER, N.NEAREST), N.texParameteri(N.TEXTURE_2D, N.TEXTURE_MAG_FILTER, N.NEAREST), N.texImage2D(N.TEXTURE_2D, 0, N.RGBA, N.RGBA, N.UNSIGNED_BYTE, n);
  const a = N.getUniformLocation(Ee, "u_Texture");
  N.uniform1i(a, 0)
}

function Uk() {
  const t = new ImageData(E.width, E.height);
  return t.data.set(b.mainImage.imageData.slice(0)), t
}

function Qk(t) {
  const n = window.innerHeight,
    s = window.innerWidth,
    a = Math.min(s, n);
  return s > n ? {
    viewportWidth: s,
    viewportHeight: n,
    textureWidth: a - t,
    textureHeight: a - t,
    textureLeft: (s - n + t) / 2,
    textureTop: t,
    min: Math.min(s, n)
  } : {
    viewportWidth: s,
    viewportHeight: n,
    textureWidth: a,
    textureHeight: a,
    textureLeft: 0,
    textureTop: (n - s + t) / 2,
    min: Math.min(s, n)
  }
}

function Ok(t) {
  const {
    viewportWidth: n,
    viewportHeight: s,
    textureWidth: a,
    textureHeight: i,
    textureLeft: o,
    textureTop: r,
    min: l
  } = Qk(t);
  Gs = l * l, pt(N, Ee, "u_AnimationDuration", rc), pt(N, Ee, "u_ParticleSize", Bk), pt(N, Ee, "u_ViewportWidth", n), pt(N, Ee, "u_ViewportHeight", s), pt(N, Ee, "u_TextureWidth", a), pt(N, Ee, "u_TextureHeight", i), pt(N, Ee, "u_TextureLeft", o), pt(N, Ee, "u_TextureTop", r);
  const d = new Array(Gs);
  for (let g = 0; g < Gs; g++) d[g] = g;
  const m = N.createBuffer();
  N.bindBuffer(N.ARRAY_BUFFER, m), N.bufferData(N.ARRAY_BUFFER, new Float32Array(d), N.STATIC_DRAW);
  const h = N.getAttribLocation(Ee, "a_ParticleIndex");
  N.enableVertexAttribArray(h), N.vertexAttribPointer(h, 1, N.FLOAT, !1, 0, 0)
}

function cc() {
  requestAnimationFrame(Fk)
}

function Fk(t) {
  N.clear(N.COLOR_BUFFER_BIT), as == -1 && (as = t);
  const s = t - as;
  if (s > rc) {
    as = -1, document.getElementById("canvasSnap").remove();
    return
  }
  pt(N, Ee, "u_ElapsedTime", s), N.drawArrays(N.POINTS, 0, Gs), cc()
}

function pt(t, n, s, a) {
  const i = t.getUniformLocation(n, s);
  t.uniform1f(i, a)
}
const zk = () => {
    const t = te(),
      n = _(),
      s = c(r => r.main.showPixanosEvent),
      a = c(r => r.main.pixanosEventData),
      i = c(Et);
    if (A.useEffect(() => {
        s && a && (async () => {
          var l, d;
          b.viewport.viewport.fit(), b.viewport.viewport.moveCenter(b.viewport.viewport.worldWidth / 2, b.viewport.viewport.worldHeight / 2), n(Gi(!0)), setTimeout(() => {
            n(Gi(!1)), n(hg())
          }, 7e3);
          try {
            await Tk(i ? 0 : xo)
          } catch (m) {
            document.getElementById("canvasHolder").style.opacity = "1", console.error(m, "cannot run pixanos")
          }
          t.push("/"), b.mainImage.pixanosRepaint(a.info.seed, E.width, a.info.percentage, a.info.color), (d = (l = window.Telegram.WebApp) == null ? void 0 : l.HapticFeedback) == null || d.notificationOccurred("error")
        })()
      }, [s, a]), !a) return null;
    const o = a.user.squad;
    return e.jsx(We, {
      show: s,
      backgroundColor: "rgba(0, 0, 0, 0.0)",
      children: e.jsxs("div", {
        className: ye.container,
        children: [e.jsx("div", {
          className: ye.header,
          children: e.jsx("span", {
            className: ye.title,
            children: "I AM INEVITABLE"
          })
        }), e.jsxs("div", {
          className: ye.body,
          children: [e.jsx("div", {
            className: ye.image_container,
            children: e.jsx("img", {
              alt: "img",
              className: ye.image,
              src: mn
            })
          }), e.jsxs("div", {
            className: ye.description_container,
            children: [e.jsxs("div", {
              className: ye.buyer_info,
              children: [e.jsx("img", {
                alt: "avatar",
                src: a.user.userPic && a.user.userPic !== "" ? a.user.userPic : it,
                className: ye.avatar
              }), " ", e.jsx("span", {
                className: ye.name,
                children: a.user.firstName
              }), o && e.jsx("span", {
                children: "from"
              }), o && e.jsxs("div", {
                className: ye.squad_info,
                children: [e.jsx("img", {
                  alt: "avatar",
                  src: o.logo && o.logo !== "" ? o.logo : zt,
                  className: ye.squad_avatar
                }), e.jsx(fn, {
                  address: `${It}?startapp=${btoa(`id=${o.squadId}`)}`,
                  display: o.name,
                  limit: 18
                })]
              }), o && e.jsx("span", {
                children: "squad"
              }), e.jsxs("div", {
                children: [e.jsx("span", {
                  children: "got"
                }), e.jsx("div", {
                  className: ye.thanos_snap_container,
                  children: e.jsx("span", {
                    className: ye.thanos_snap_text,
                    children: "Pixanos' Snap"
                  })
                })]
              })]
            }), e.jsx("div", {
              className: ye.text_container,
              children: e.jsxs("span", {
                className: ye.text,
                children: ["Now he takes every second pixel. ", e.jsx("br", {}), " Legendary!"]
              })
            })]
          })]
        })]
      })
    })
  },
  Gk = () => {
    var o, r;
    const t = c(l => l.user.user),
      n = _(),
      s = c(l => l.main.showNoChargesPopup),
      a = c(l => l.main.settings);
    let i = `${Bt}?startapp=f${((r=(o=window.Telegram.WebApp.initDataUnsafe)==null?void 0:o.user)==null?void 0:r.id)||""}`;
    return t && t.squad && t.squad.id !== null && (i += `_s${t.squad.id}`), e.jsx(We, {
      show: s,
      onPointerUp: () => n(ka()),
      children: e.jsxs("div", {
        className: O.container,
        onPointerUp: l => {
          l.stopPropagation()
        },
        children: [e.jsxs("div", {
          className: O.header,
          children: [e.jsx("div", {
            className: O.title,
            children: "Oops!"
          }), e.jsx("div", {
            className: O.close_container,
            onPointerUp: () => {
              n(ka())
            },
            children: e.jsx("div", {
              className: O.close,
              children: e.jsx(I, {
                size: 30,
                children: ""
              })
            })
          })]
        }), e.jsx("div", {
          className: O.body,
          children: e.jsxs("div", {
            className: O.content,
            children: [e.jsx("div", {
              className: O.image_container_charges,
              children: e.jsx("img", {
                alt: "image",
                className: O.image_charges,
                src: Yr
              })
            }), e.jsxs("div", {
              className: O.description_container,
              children: [e.jsx("span", {
                className: O.bold,
                children: "The energy is over!"
              }), e.jsxs("span", {
                className: O.center,
                children: ["Wait for the energy to recover.", e.jsx("br", {}), "Invite frens and get a bonus:"]
              })]
            }), e.jsxs("div", {
              className: O.benefits_container,
              children: [e.jsx("div", {}), e.jsxs("div", {
                className: O.benefits_item,
                children: ["No Premium:   ", " ", e.jsx("div", {
                  className: O.benefits_icon_container,
                  children: e.jsx(M, {
                    size: 16,
                    className: O.icon_invite
                  })
                }), a.InitialCoins]
              }), e.jsx("div", {}), " ", e.jsx("div", {}), e.jsxs("div", {
                className: O.benefits_item,
                children: ["Premium:   ", " ", e.jsx("div", {
                  className: O.benefits_icon_container,
                  children: e.jsx(M, {
                    size: 16,
                    className: O.icon_invite
                  })
                }), " ", a.RefRewardCoinsPremium]
              }), e.jsx("div", {})]
            })]
          })
        }), e.jsxs("div", {
          className: O.footer,
          children: [e.jsx(qt, {
            url: i
          }), e.jsx("button", {
            className: O.button,
            onPointerUp: l => {
              l.stopPropagation(), window.Telegram.WebApp.openLink(`https://t.me/share/url?url=${i}`), n(ka())
            },
            children: "Share"
          })]
        })]
      })
    })
  },
  Lk = () => na().pathname === "/" ? null : e.jsx("div", {
    style: {
      position: "fixed",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: "var(--bg-primary-color)",
      zIndex: 99
    }
  }),
  Hk = "_layout_1f2lr_1",
  qk = "_item_1f2lr_19",
  Yk = "_image_1f2lr_38",
  lc = {
    layout: Hk,
    item: qk,
    image: Yk
  },
  Vk = ({
    item: t
  }) => {
    const n = _(),
      s = {
        hidden: {
          opacity: 0,
          x: 0,
          y: 200
        },
        enter: {
          opacity: 1,
          x: 0,
          y: 0
        },
        exit: {
          opacity: 0,
          x: 0,
          y: 100
        }
      };
    let a = t.icon ? t.icon : "";
    return A.useEffect(() => {
      const i = setTimeout(() => {
        n(Mi(t.id))
      }, 3e3);
      return () => {
        clearTimeout(i)
      }
    }, []), e.jsxs(Un.div, {
      variants: s,
      initial: "hidden",
      animate: "enter",
      exit: "exit",
      transition: {
        duration: .3
      },
      className: lc.item,
      onPointerUp: () => {
        n(Mi(t.id))
      },
      children: [e.jsx(I, {
        size: 20,
        children: a
      }), t.text]
    })
  },
  Wk = () => {
    const t = c(n => n.toast.items);
    return Ge.createPortal(e.jsx("div", {
      className: lc.layout,
      children: e.jsx(ai, {
        children: t.map(n => e.jsx(Vk, {
          item: n
        }, n.id))
      })
    }), document.body)
  },
  Xk = "_layout_1nuac_1",
  Jk = "_container_1nuac_19",
  Zk = "_image_container_1nuac_30",
  Kk = "_image_1nuac_30",
  $k = "_text_container_1nuac_42",
  eD = "_title_1nuac_49",
  tD = "_button_container_1nuac_55",
  nD = "_button_1nuac_55",
  wt = {
    layout: Xk,
    container: Jk,
    image_container: Zk,
    image: Kk,
    text_container: $k,
    title: eD,
    button_container: tD,
    button: nD
  },
  sD = () => {
    const t = _();
    return c(s => s.main.showNoFlagsPopup) ? Ge.createPortal(e.jsx("div", {
      className: wt.layout,
      children: e.jsxs("div", {
        className: wt.container,
        children: [e.jsx("div", {
          className: wt.image_container,
          children: e.jsx("img", {
            alt: "img",
            className: wt.image,
            src: _a
          })
        }), e.jsxs("div", {
          className: wt.text_container,
          children: [e.jsx("div", {
            className: wt.title,
            children: "Wow! Note Pixel 2.0!"
          }), e.jsx("div", {
            children: "Meet the Gorgeous Templates!"
          }), e.jsx("div", {
            children: "Paint pixels in the right color - get a PX bonus. "
          }), " ", e.jsx("div", {
            children: "Use global templates, join your frens' templates, or create your own."
          }), " ", e.jsx("div", {
            children: "Everyone can create their own pattern and get extra rewards from all the recolors. The magic tool for communities and streaming!"
          }), " ", e.jsx("div", {
            children: "Ordo ab chao! Enjoy."
          })]
        }), e.jsx("div", {
          className: wt.button_container,
          children: e.jsx("button", {
            className: wt.button,
            onPointerUp: () => {
              t(vg(!1))
            },
            children: "That’s so wise!"
          })
        })]
      })
    }), document.body) : null
  },
  aD = ({
    isPopupContent: t = !0
  }) => {
    const n = t ? "Squad" : "My Squad",
      s = Rt(t);
    return e.jsxs("div", {
      className: F(D.container, !t && D.page),
      children: [t && e.jsx(Xr, {}), e.jsx("div", {
        children: e.jsx("span", {
          className: D.title,
          children: n
        })
      }), e.jsx(Jr, {
        ...s
      }), e.jsx(Zr, {
        ...s
      }), e.jsx(Kr, {
        ...s
      }), e.jsx($r, {
        ...s
      }), e.jsx(ec, {
        ...s
      })]
    })
  },
  iD = () => {
    const t = _(),
      {
        item: n
      } = Rt(),
      s = !0;
    return e.jsx(We, {
      show: n.dataSource !== null,
      onPointerUp: a => {
        a.stopPropagation(), t(fr())
      },
      children: e.jsxs("div", {
        className: Wr.layout,
        onPointerUp: a => {
          a.stopPropagation()
        },
        children: [n.dataSource === $e.userFromPixelInfo && e.jsx(ti, {
          isPopupContent: s
        }), n.dataSource === $e.userFromRating && e.jsx(ti, {
          isPopupContent: s
        }), n.dataSource === $e.squadFromData && e.jsx(aD, {})]
      })
    })
  },
  oD = "_overlay_12d15_1",
  rD = "_top_container_12d15_10",
  cD = "_bottom_container_12d15_15",
  lD = "_side_menu_12d15_20",
  dD = "_menu_safe_area_inset_12d15_36",
  uD = "_menu_header_12d15_40",
  mD = "_close_button_12d15_53",
  AD = "_menu_list_12d15_58",
  pD = "_icon_12d15_79",
  hD = "_icon_not_pixel_12d15_87",
  gD = "_gold_pixel_12d15_97",
  _D = "_menu_list_li_12d15_103",
  fD = "_menu_list_text_12d15_109",
  xD = "_menu_list_new_item_12d15_113",
  vD = "_verificated_wallet_12d15_136",
  yD = "_button_wrapper_12d15_144",
  wD = "_button_content_12d15_153",
  jD = "_footer_12d15_160",
  bD = "_avatar_12d15_166",
  ND = "_ratings_image_container_12d15_173",
  CD = "_ratings_image_12d15_173",
  K = {
    overlay: oD,
    top_container: rD,
    bottom_container: cD,
    side_menu: lD,
    menu_safe_area_inset: dD,
    menu_header: uD,
    close_button: mD,
    menu_list: AD,
    icon: pD,
    icon_not_pixel: hD,
    gold_pixel: gD,
    menu_list_li: _D,
    menu_list_text: fD,
    menu_list_new_item: xD,
    verificated_wallet: vD,
    button_wrapper: yD,
    button_content: wD,
    footer: jD,
    avatar: bD,
    ratings_image_container: ND,
    ratings_image: CD
  },
  mo = [.215, .61, .355, 1],
  ID = {
    hidden: {
      x: "-100%",
      transition: {
        type: "tween",
        duration: .25,
        ease: mo
      }
    },
    visible: {
      x: 0,
      transition: {
        type: "tween",
        duration: .25,
        ease: mo
      }
    }
  },
  PD = "_button_25266_1",
  SD = "_decor_25266_13",
  BD = "_dark_25266_22",
  Ao = {
    button: PD,
    decor: SD,
    dark: BD
  },
  po = ({
    children: t,
    variant: n = "dark",
    onPointerUp: s = () => {},
    style: a = {},
    className: i = void 0
  }) => e.jsx("button", {
    onPointerUp: s,
    className: F(Ao.button, Ao[n], i),
    style: a,
    children: t
  }),
  TD = "_layout_4kkfr_1",
  ED = "_line_4kkfr_14",
  kD = "_button_4kkfr_19",
  en = {
    layout: TD,
    line: ED,
    button: kD
  },
  DD = ({
    className: t = void 0
  }) => {
    const n = _(),
      s = te();
    return e.jsx("div", {
      className: F(en.layout, t),
      children: e.jsxs("div", {
        className: en.line,
        children: [e.jsx("div", {
          className: en.button,
          onPointerUp: () => {
            n(Ft(!1)), s.push("/rules")
          },
          children: "Rules"
        }), e.jsx("div", {
          className: en.button,
          onPointerUp: () => {
            W(ii)
          },
          children: "Support"
        }), e.jsx("div", {
          className: en.button,
          onPointerUp: () => {
            n(Ft(!1)), s.push("/terms")
          },
          children: "Terms"
        }), e.jsx("div", {
          className: en.button,
          onPointerUp: () => {
            n(Ft(!1)), s.push("/privacy")
          },
          children: "Privacy"
        })]
      })
    })
  },
  RD = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAABtQTFRFR3BM////////////////////////////////Fv0dDgAAAAh0Uk5TABU6XISq0+/2d3cmAAABKElEQVR42u3Z24rDMAxFUV1s6fz/Fw+FlA4lpGOj2Ew566kPKWxEQ2NFiIiIiIiIiIiI6L/RFrgQTeVWGvggbikwPwQ+Cj+YVLHAlChKcExzKaCJaak1A9g7gg7M61UBfSDmeS0DGMAABlQFNACI8YAAgPYNAY6H8YCyPyPDg40FvL5WAA9tNKAdg6u6DVLHAjSPjwX8NYKGa+9XuhQ+k41NAMfYSjRMalIkMCWkiiUmpMneAltwJlx5RlTz1hJ/kK25qdxCvQcuRfetB/RQuZ1l1Q+/viBNZGdBmiyiHSe6yjqeeJMua3ngl3BZT70nAOTsrV95ZmDADvbcW8bEUrJ+eRmLE7xgI1e9vExdO4C9I+g40WUdnNoewPdJREREREREREREU34Aqms7WGCxI2EAAAAASUVORK5CYII=",
  MD = "_layout_eiymv_1",
  UD = "_container_eiymv_7",
  ho = {
    layout: MD,
    container: UD
  },
  QD = () => localStorage.getItem("canvasFps") ? [Number(localStorage.getItem("canvasFps"))] : [60],
  OD = () => {
    const [t, n] = ae.useState(QD());
    return A.useEffect(() => {
      localStorage.setItem("canvasFps", String(t[0])), b.ticker.setFps(t[0])
    }, [t]), e.jsx("div", {
      className: ho.layout,
      children: e.jsxs("div", {
        className: ho.container,
        children: [e.jsx(Qt.Range, {
          label: "Select your value",
          step: 1,
          min: 10,
          max: 60,
          values: t,
          onChange: s => n(s),
          renderTrack: ({
            props: s,
            children: a
          }) => e.jsx("div", {
            ...s,
            style: {
              ...s.style,
              height: "6px",
              width: "50%",
              borderRadius: "2px",
              backgroundColor: "var(--btn-dark-bg-color)"
            },
            children: a
          }),
          renderThumb: ({
            props: s
          }) => A.createElement("div", {
            ...s,
            key: s.key,
            style: {
              ...s.style,
              height: "22px",
              width: "22px",
              borderRadius: "6px",
              backgroundColor: "var(--app-primary-color)"
            }
          })
        }), e.jsxs("div", {
          style: {
            color: "var(--font-secondary-color)"
          },
          children: ["Fps: ", t]
        })]
      })
    })
  },
  FD = "_layout_7wq4a_1",
  zD = "_green_7wq4a_10",
  GD = "_red_7wq4a_14",
  za = {
    layout: FD,
    green: zD,
    red: GD
  },
  LD = () => {
    const t = _(),
      n = c(s => s.canvas.animations);
    return e.jsxs("div", {
      className: za.layout,
      onPointerUp: () => {
        t(n ? rh() : oh())
      },
      children: [e.jsx("span", {
        style: {
          color: "var(--font-secondary-color)"
        },
        children: "Animation:"
      }), " ", n ? e.jsx("span", {
        className: za.green,
        children: "on"
      }) : e.jsx("span", {
        className: za.red,
        children: "off"
      })]
    })
  },
  HD = () => {
    const t = c(ra),
      n = c(ca);
    return e.jsx("div", {
      style: {
        width: "100%",
        height: t.bottom + n.bottom
      }
    })
  },
  qD = () => {
    const t = te(),
      n = _();
    c(He);
    const s = Gn(),
      [a, i] = dn();
    c(cu);
    const o = c(wr),
      r = c(Et),
      l = () => {
        n(Ft(!1))
      },
      d = x => {
        n(Ft(!1)), t.push(x)
      },
      m = () => {
        const x = `${window.location.origin}/stars?initData=${btoa(window.Telegram.WebApp.initData)}`;
        Tt(x)
      },
      h = c(x => x.user.verificatedWallet),
      g = ci(h),
      f = Ys(g),
      j = c(x => x.user.verificatedWalletStatus);
    return A.useEffect(() => {
      o && j === p.idle && n(ze.getVerificatedWallet())
    }, [o]), e.jsx(e.Fragment, {
      children: e.jsx(ai, {
        children: o && e.jsxs(e.Fragment, {
          children: [e.jsx(Un.div, {
            className: K.overlay,
            onPointerUp: l,
            initial: {
              opacity: 0
            },
            animate: {
              opacity: 1
            },
            exit: {
              opacity: 0
            },
            transition: {
              duration: .3
            }
          }), e.jsxs(Un.nav, {
            className: K.side_menu,
            initial: "hidden",
            animate: "visible",
            exit: "hidden",
            variants: ID,
            children: [e.jsxs("div", {
              className: K.top_container,
              children: [e.jsx("div", {
                className: K.menu_safe_area_inset
              }), e.jsxs("ul", {
                className: K.menu_list,
                children: [!r && e.jsxs("li", {
                  className: K.menu_list_li,
                  onPointerUp: () => d("/"),
                  children: [e.jsx("div", {
                    className: K.icon,
                    children: e.jsx(I, {
                      size: 24,
                      children: ""
                    })
                  }), e.jsx("span", {
                    className: K.menu_list_text,
                    children: "Canvas"
                  })]
                }), e.jsxs("li", {
                  className: K.menu_list_li,
                  onPointerUp: () => d("/tournament"),
                  children: [e.jsx("div", {
                    className: K.icon_not_pixel,
                    children: e.jsx("img", {
                      alt: "image",
                      className: K.gold_pixel,
                      src: Pi
                    })
                  }), e.jsx("span", {
                    className: K.menu_list_text,
                    style: {
                      transform: "translateX(-6px)"
                    },
                    children: "Telegram Battle"
                  }), e.jsx("span", {
                    className: K.menu_list_new_item,
                    children: "new"
                  })]
                }), e.jsxs("li", {
                  className: K.menu_list_li,
                  onPointerUp: () => d("/ratings"),
                  children: [e.jsx("div", {
                    className: K.ratings_image_container,
                    children: e.jsx("img", {
                      alt: "noavatar",
                      className: K.ratings_image,
                      src: RD
                    })
                  }), e.jsx("span", {
                    className: K.menu_list_text,
                    children: "Ratings"
                  })]
                }), e.jsxs("li", {
                  className: K.menu_list_li,
                  onPointerUp: () => d("/secrets"),
                  children: [e.jsx("div", {
                    className: K.icon,
                    children: e.jsx(I, {
                      size: 24,
                      children: ""
                    })
                  }), e.jsx("span", {
                    className: K.menu_list_text,
                    children: "Secrets"
                  })]
                }), e.jsxs("li", {
                  className: K.menu_list_li,
                  onPointerUp: () => d("/daily"),
                  children: [e.jsx("div", {
                    className: K.icon,
                    children: e.jsx(I, {
                      size: 24,
                      children: ""
                    })
                  }), e.jsx("span", {
                    className: K.menu_list_text,
                    children: "Daily tasks"
                  })]
                }), e.jsxs("li", {
                  className: K.menu_list_li,
                  onPointerUp: () => d("/history"),
                  children: [e.jsx("div", {
                    className: K.icon,
                    children: e.jsx(I, {
                      size: 24,
                      children: ""
                    })
                  }), e.jsx("span", {
                    className: K.menu_list_text,
                    children: "My History"
                  })]
                })]
              })]
            }), e.jsxs("div", {
              className: K.bottom_container,
              children: [e.jsx(LD, {}), e.jsx(OD, {}), f && f !== "" && e.jsxs("div", {
                className: K.verificated_wallet,
                children: ["Verificated wallet: ", f]
              }), e.jsxs("div", {
                className: K.button_wrapper,
                children: [s !== "" && e.jsx(po, {
                  onPointerUp: () => {
                    a.disconnect()
                  },
                  variant: "dark",
                  style: {
                    width: "90%"
                  },
                  children: e.jsxs("div", {
                    className: K.button_content,
                    children: [e.jsx("span", {
                      children: "Disconnect TON"
                    }), e.jsx(I, {
                      size: 20,
                      style: {
                        fontWeight: 400
                      },
                      children: ""
                    })]
                  })
                }), e.jsx(po, {
                  onPointerUp: m,
                  variant: "dark",
                  style: {
                    width: "90%"
                  },
                  children: e.jsxs("div", {
                    className: K.button_content,
                    children: [e.jsx("span", {
                      children: "Desktop version"
                    }), e.jsx(I, {
                      size: 20,
                      style: {
                        fontWeight: 400
                      },
                      children: ""
                    })]
                  })
                })]
              }), e.jsx(DD, {}), e.jsx(HD, {})]
            })]
          })]
        })
      })
    })
  },
  YD = "_layout_1at34_1",
  VD = "_container_1at34_10",
  WD = "_item_1at34_14",
  Ga = {
    layout: YD,
    container: VD,
    item: WD
  },
  XD = 8,
  JD = 16,
  ZD = 500,
  dc = 800,
  go = window.innerWidth,
  _o = 100,
  KD = () => Array.from(Array(100)).map(() => {
    const t = k(XD, JD),
      n = `hsl(${k(0,360)} , 70%, 50%)`,
      s = k(ZD, dc),
      a = k(-go, go),
      i = k(-_o, _o);
    return {
      size: t,
      color: n,
      speed: s,
      x: a,
      y: i,
      transform: !1,
      opacity: !1
    }
  });
A.memo(({
  runParticle: t,
  setRunParticle: n
}) => {
  const [s, a] = A.useState(KD()), [i, o] = A.useState(!1);
  return A.useEffect(() => {
    t && setTimeout(() => {
      o(!0), setTimeout(() => {
        n(!1), o(!1)
      }, dc)
    }, 200)
  }, [t]), e.jsx("div", {
    className: Ga.layout,
    style: {
      visibility: t ? "visible" : "hidden"
    },
    children: e.jsx("div", {
      className: Ga.container,
      children: s.map((r, l) => e.jsx("div", {
        className: Ga.item,
        style: {
          width: r.size,
          height: r.size,
          backgroundColor: r.color,
          transition: t ? `all ${r.speed}ms ease` : "",
          transform: t ? `translate(${r.x}px, ${r.y}px)` : "translate(0px, 0px)",
          opacity: i ? 0 : 1
        }
      }, l))
    })
  })
});
const $D = "_container_gb8eq_1",
  e4 = "_header_gb8eq_11",
  t4 = "_title_gb8eq_17",
  n4 = "_close_container_gb8eq_23",
  s4 = "_close_gb8eq_23",
  a4 = "_body_gb8eq_47",
  i4 = "_content_gb8eq_59",
  o4 = "_time_left_container_gb8eq_65",
  r4 = "_timer_gb8eq_69",
  c4 = "_image_container_gb8eq_73",
  l4 = "_image_gb8eq_73",
  d4 = "_glow_container_gb8eq_91",
  u4 = "_glow_gb8eq_91",
  m4 = "_rotate_gb8eq_1",
  A4 = "_glow_reverse_gb8eq_107",
  p4 = "_description_container_gb8eq_113",
  h4 = "_bold_gb8eq_123",
  g4 = "_gray_gb8eq_128",
  _4 = "_center_gb8eq_132",
  f4 = "_gold_gb8eq_136",
  x4 = "_button_gb8eq_144",
  we = {
    container: $D,
    header: e4,
    title: t4,
    close_container: n4,
    close: s4,
    body: a4,
    content: i4,
    time_left_container: o4,
    timer: r4,
    image_container: c4,
    image: l4,
    glow_container: d4,
    glow: u4,
    rotate: m4,
    glow_reverse: A4,
    description_container: p4,
    bold: h4,
    gray: g4,
    center: _4,
    gold: f4,
    button: x4
  },
  v4 = "/assets/cup_glad-DGT2PBmm.png",
  y4 = () => {
    const t = te(),
      n = c(He),
      [s, a] = A.useState(!1),
      i = "showCreateTournamentTemplatePopup";
    return A.useEffect(() => (ri() && (localStorage.getItem(i) || a(!0)), () => {}), [n]), e.jsx(We, {
      show: s,
      children: e.jsx("div", {
        className: we.container,
        onPointerUp: o => {
          o.stopPropagation()
        },
        children: e.jsxs("div", {
          className: we.body,
          children: [e.jsx("div", {
            className: we.header,
            children: e.jsx("div", {
              className: we.close_container,
              children: e.jsx("div", {
                className: we.close,
                onPointerUp: () => {
                  a(!1)
                },
                children: e.jsx(I, {
                  size: 20,
                  children: ""
                })
              })
            })
          }), e.jsx("div", {
            className: we.title,
            children: "Get ready for Telegram Battle!"
          }), e.jsxs("div", {
            className: we.content,
            children: [e.jsxs("div", {
              className: we.image_container,
              children: [e.jsx("div", {
                className: we.glow_container,
                children: e.jsx("img", {
                  alt: "image",
                  className: we.glow,
                  src: ac
                })
              }), e.jsx("div", {
                className: we.glow_container,
                children: e.jsx("img", {
                  alt: "image",
                  className: we.glow_reverse,
                  src: ic
                })
              }), e.jsx("img", {
                alt: "image",
                className: we.image,
                src: v4
              })]
            }), e.jsxs("div", {
              className: we.description_container,
              children: [e.jsx("span", {
                children: "Select a template and win Telegram Battle!"
              }), e.jsxs("span", {
                children: ["Join the race for the", " ", e.jsx("span", {
                  className: we.gold,
                  children: "Golden Pixel"
                }), "."]
              })]
            })]
          }), e.jsx("button", {
            className: we.button,
            onPointerUp: async o => {
              o.stopPropagation(), t.push("/tournament"), localStorage.setItem(i, "true"), a(!1)
            },
            children: "Select template"
          })]
        })
      })
    })
  },
  w4 = "_layout_xga4i_1",
  j4 = "_container_xga4i_14",
  b4 = "_header_xga4i_20",
  N4 = "_close_xga4i_25",
  C4 = "_body_xga4i_38",
  I4 = "_image_container_xga4i_42",
  P4 = "_image_xga4i_42",
  S4 = "_glow_xga4i_55",
  B4 = "_forward_xga4i_62",
  T4 = "_rotate_xga4i_1",
  E4 = "_reverse_xga4i_66",
  k4 = "_text_container_xga4i_70",
  D4 = "_title_xga4i_78",
  R4 = "_description_xga4i_82",
  M4 = "_footer_xga4i_86",
  U4 = "_button_xga4i_90",
  fe = {
    layout: w4,
    container: j4,
    header: b4,
    close: N4,
    body: C4,
    image_container: I4,
    image: P4,
    glow: S4,
    forward: B4,
    rotate: T4,
    reverse: E4,
    text_container: k4,
    title: D4,
    description: R4,
    footer: M4,
    button: U4
  },
  Q4 = "_layout_a9x11_1",
  O4 = "_container_a9x11_10",
  F4 = "_star_a9x11_14",
  z4 = "_move_a9x11_1",
  La = {
    layout: Q4,
    container: O4,
    star: F4,
    move: z4
  },
  G4 = A.memo(() => {
    const t = Array.from(Array(30));
    return e.jsx("div", {
      className: La.layout,
      children: e.jsx("div", {
        className: La.container,
        children: t.map((n, s) => {
          const a = k(8, 12);
          return e.jsx(M, {
            size: a,
            className: La.star,
            style: {
              animationDelay: `-${s*300}ms`,
              transform: `translate(${k(-80,-170)*(s%2===1?1:-1)}px, ${k(-100,100)}px)`
            }
          }, s)
        })
      })
    })
  }, () => !1),
  L4 = () => {
    const t = _(),
      n = c(He),
      s = c(C => C.reward.showPopup),
      a = c(C => C.reward.info),
      [i, o] = A.useState(!1),
      r = c(ia),
      l = async () => {
        if (i)
          if (t(O_()), t(G_()), a && a.user.reward_id && a.type === "goods") {
            const C = await X.claimRewardById({
              rewardId: a.user.id,
              userId: n.id
            });
            (C.status === 200 || C.status === 204) && t(an({
              product: a.good_id,
              amount: 1
            }))
          } else a && a.type === "px" ? t(kt(0)) : a && a.user && a.user.token
      }, d = c(C => C.user.verificatedWallet), m = ci(d), h = Ys(m), g = c(C => C.user.verificatedWalletStatus);
    if (A.useEffect(() => {
        const C = setTimeout(() => {
          o(!0)
        }, 1e3);
        return () => {
          clearTimeout(C)
        }
      }, []), A.useEffect(() => {
        g === p.idle && a && a.user && a.user.token && a.user.token !== "" && t(ze.getVerificatedWallet())
      }, [g]), !a) return null;
    let f = a.name,
      j = a.description,
      x = a.image_url || $a,
      y = "",
      B = "goods";
    return a.user.token !== "" && (B = "crypto", x = $a, a.user.currency_id, f = a.user.token, j = "Yo, you hit the crypto jackpot! Nice one, fam!", r.forEach(C => {
      C.name === f && (x = C.image)
    }), y = a.user.amount + " "), e.jsx(We, {
      show: s,
      onPointerUp: l,
      children: e.jsx("div", {
        className: fe.layout,
        onPointerUp: C => {
          C.stopPropagation()
        },
        children: e.jsxs("div", {
          className: fe.container,
          children: [e.jsx("div", {
            className: fe.header,
            children: e.jsx("div", {
              className: fe.close,
              onPointerUp: l,
              children: e.jsx(I, {
                size: 24,
                children: ""
              })
            })
          }), e.jsxs("div", {
            className: fe.body,
            children: [e.jsxs("div", {
              className: fe.image_container,
              children: [e.jsx(G4, {}), e.jsx("img", {
                alt: "glow",
                src: Ka,
                className: F(fe.glow, fe.forward)
              }), e.jsx("img", {
                alt: "glow",
                src: Ka,
                className: F(fe.glow, fe.reverse)
              }), e.jsx("img", {
                alt: "img",
                src: x,
                className: fe.image
              })]
            }), e.jsxs("div", {
              className: fe.text_container,
              children: [e.jsx("div", {
                className: fe.title,
                children: y + f
              }), e.jsx("div", {
                className: fe.description,
                children: j
              }), B === "crypto" && e.jsxs("div", {
                className: fe.description,
                style: {
                  marginTop: -10
                },
                children: [e.jsx("span", {
                  children: "Crypto will be sent to your "
                }), " ", e.jsx("span", {
                  style: {
                    color: "white"
                  },
                  children: `${h}`
                }), " ", e.jsx("span", {
                  children: " wallet."
                })]
              })]
            })]
          }), e.jsx("div", {
            className: fe.footer,
            children: e.jsx("button", {
              className: fe.button,
              onPointerUp: C => {
                C.stopPropagation(), l()
              },
              children: "Gotcha!"
            })
          })]
        })
      })
    })
  };
window.Telegram.WebApp.DeviceOrientation;
const H4 = "_layout_15tw0_1",
  q4 = "_container_15tw0_7",
  Y4 = "_close_button_15tw0_16",
  V4 = "_title_container_15tw0_24",
  W4 = "_image_container_15tw0_31",
  X4 = "_image_15tw0_31",
  J4 = "_text_container_15tw0_50",
  Z4 = "_button_container_15tw0_56",
  ut = {
    layout: H4,
    container: q4,
    close_button: Y4,
    title_container: V4,
    image_container: W4,
    image: X4,
    text_container: J4,
    button_container: Z4
  },
  K4 = () => {
    const t = c(r => r.main.startParams),
      [n, s] = A.useState(null),
      a = c(r => r.tournament.selectedTemplate),
      i = c(r => r.tournament.selectedTemplateStatus),
      o = () => {
        s(null)
      };
    return A.useEffect(() => {
      if (t.showTemplate && t.refId && (i === p.fulfilled && a && a.id !== t.refId || i === p.rejected)) try {
        (async () => {
          const l = await Ye.getTournamentTemplateById({
            id: t.refId
          });
          if (l.status === 200 && l.data && l.data.approved) {
            const d = l.data;
            s(d)
          }
        })()
      } catch {}
    }, [t, s, i]), e.jsx(We, {
      show: n,
      onPointerUp: o,
      children: e.jsx("div", {
        className: ut.layout,
        onPointerUp: r => {
          r.stopPropagation()
        },
        children: e.jsxs("div", {
          className: ut.container,
          children: [e.jsx("div", {
            className: ut.close_button,
            onPointerUp: o,
            children: e.jsx(I, {
              size: 26,
              children: ""
            })
          }), e.jsx("div", {
            className: ut.title_container,
            children: e.jsx("span", {
              children: "Friend's template invitation"
            })
          }), e.jsx("div", {
            className: ut.image_container,
            children: e.jsx("img", {
              alt: "img",
              className: `${ut.image} ${ut.first_image}`,
              src: n ? n.url : ""
            })
          }), e.jsx("div", {
            className: ut.text_container,
            children: e.jsxs("span", {
              children: ["Your friend has a template in tournament. ", e.jsx("br", {}), " Ready to team up?"]
            })
          }), e.jsx("div", {
            className: ut.button_container,
            children: e.jsx(oc, {
              template: n,
              style: {
                height: 50
              },
              onPointerUp: o
            })
          })]
        })
      })
    })
  },
  $4 = "_layout_1vlcp_1",
  eR = "_container_1vlcp_13",
  tR = "_close_button_1vlcp_21",
  nR = "_body_1vlcp_29",
  sR = "_image_container_1vlcp_40",
  aR = "_image_1vlcp_40",
  iR = "_shake_1vlcp_1",
  oR = "_description_container_1vlcp_54",
  rR = "_buyer_info_1vlcp_64",
  cR = "_avatar_1vlcp_72",
  lR = "_name_1vlcp_78",
  dR = "_squad_info_1vlcp_82",
  uR = "_squad_avatar_1vlcp_88",
  mR = "_text_container_1vlcp_94",
  AR = "_text_1vlcp_94",
  pR = "_thanos_snap_container_1vlcp_105",
  hR = "_thanos_snap_text_1vlcp_114",
  gR = "_prev_snaps_container_1vlcp_121",
  _R = "_prev_snaps_text_1vlcp_128",
  fR = "_prev_snaps_list_container_1vlcp_134",
  xR = "_prev_snaps_list_item_1vlcp_142",
  vR = "_button_container_1vlcp_148",
  yR = "_button_1vlcp_148",
  wR = "_button_text_1vlcp_163",
  ne = {
    layout: $4,
    container: eR,
    close_button: tR,
    body: nR,
    image_container: sR,
    image: aR,
    shake: iR,
    description_container: oR,
    buyer_info: rR,
    avatar: cR,
    name: lR,
    squad_info: dR,
    squad_avatar: uR,
    text_container: mR,
    text: AR,
    thanos_snap_container: pR,
    thanos_snap_text: hR,
    prev_snaps_container: gR,
    prev_snaps_text: _R,
    prev_snaps_list_container: fR,
    prev_snaps_list_item: xR,
    button_container: vR,
    button: yR,
    button_text: wR
  },
  jR = t => {
    const n = new Date;
    n.setHours(0, 0, 0, 0);
    const s = new Date(n);
    s.setDate(n.getDate() - 1);
    const a = new Date(t);
    return a.setHours(0, 0, 0, 0), a.getTime() === n.getTime() ? "today" : a.getTime() === s.getTime() ? "yesterday" : "once"
  },
  bR = t => {
    const n = String(t.getHours()).padStart(2, "0"),
      s = String(t.getMinutes()).padStart(2, "0");
    return ` ${jR(t)} at ${n}:${s}`
  },
  NR = () => {
    const t = _(),
      n = c(r => r.main.showPixanosRating),
      s = c(r => r.main.pixanosRatingData),
      a = c(r => r.color.active);
    if (!s) return null;
    const i = s[0],
      o = i.user.squad;
    return e.jsx(We, {
      show: n,
      onPointerUp: () => {
        t(Ss(!1))
      },
      children: e.jsxs("div", {
        className: ne.container,
        children: [e.jsx("div", {
          className: ne.close_button,
          onPointerUp: () => {
            t(Ss(!1))
          },
          children: e.jsx(I, {
            size: 26,
            children: ""
          })
        }), e.jsxs("div", {
          className: ne.body,
          children: [e.jsx("div", {
            className: ne.image_container,
            children: e.jsx("img", {
              alt: "img",
              className: ne.image,
              src: mn
            })
          }), e.jsxs("div", {
            className: ne.description_container,
            children: [e.jsxs("div", {
              className: ne.buyer_info,
              children: [e.jsx("img", {
                alt: "avatar",
                src: i.user.userPic && i.user.userPic !== "" ? i.user.userPic : it,
                className: ne.avatar
              }), " ", e.jsx("span", {
                className: ne.name,
                children: i.user.firstName
              }), o && e.jsx("span", {
                children: "from"
              }), o && e.jsxs("div", {
                className: ne.squad_info,
                children: [e.jsx("img", {
                  alt: "avatar",
                  src: o.logo && o.logo !== "" ? o.logo : zt,
                  className: ne.squad_avatar
                }), e.jsx(fn, {
                  address: `${It}?startapp=${btoa(`id=${o.squadId}`)}`,
                  display: o.name,
                  limit: 36
                })]
              }), o && e.jsx("span", {
                children: "squad"
              }), e.jsxs("div", {
                style: {
                  textAlign: "center"
                },
                children: [e.jsx("span", {
                  children: "activated"
                }), e.jsx("div", {
                  className: ne.thanos_snap_container,
                  children: e.jsx("span", {
                    className: ne.thanos_snap_text,
                    children: "Pixanos' Snap"
                  })
                }), e.jsx("span", {
                  children: bR(new Date(i.info.datetime))
                })]
              })]
            }), e.jsx("div", {
              className: ne.text_container,
              children: e.jsx("span", {
                className: ne.text,
                children: "Now his taking every second pixel"
              })
            })]
          }), e.jsxs("div", {
            className: ne.prev_snaps_container,
            children: [e.jsx("div", {
              className: ne.prev_snaps_text,
              children: "Previous five Snaps by:"
            }), e.jsx("div", {
              className: ne.prev_snaps_list_container,
              children: s.map((r, l) => l === 0 ? null : e.jsxs("div", {
                className: ne.prev_snaps_list_item,
                children: [e.jsx("img", {
                  alt: "avatar",
                  src: r.user.userPic && r.user.userPic !== "" ? r.user.userPic : it,
                  className: ne.avatar
                }), " ", e.jsx("span", {
                  className: ne.name,
                  children: r.user.firstName
                })]
              }, l))
            })]
          }), e.jsx("div", {
            className: ne.button_container,
            children: e.jsx("button", {
              className: F(ne.button),
              onPointerUp: async r => {
                var l;
                r.stopPropagation();
                try {
                  const d = await X.buy({
                    type: 13,
                    qty: 1,
                    pixanosColor: a
                  });
                  d.status === 200 && ((l = d == null ? void 0 : d.data) == null ? void 0 : l.ok) === !0 && window.Telegram.WebApp.openInvoice(d.data.result, m => {
                    var h, g;
                    if (m === "paid") t(z({
                      id: performance.now(),
                      text: "Success!",
                      icon: ""
                    })), t(Ss(!1)), (g = (h = window.Telegram.WebApp) == null ? void 0 : h.HapticFeedback) == null || g.notificationOccurred("error");
                    else throw new Error("Error")
                  })
                } catch {
                  t(z({
                    id: performance.now(),
                    text: "Error, try again."
                  }))
                }
              },
              children: e.jsxs("div", {
                className: F(ne.button_text, ne.thanos_snap_text),
                children: ["Buy Pixanos' Snap for 40 000 ", e.jsx(An, {
                  fontSize: 16
                })]
              })
            })
          })]
        })]
      })
    })
  },
  CR = "_layout_1i63b_1",
  IR = "_container_1i63b_18",
  PR = "_image_container_1i63b_25",
  SR = "_title_1i63b_30",
  BR = "_text_container_1i63b_37",
  TR = "_support_container_1i63b_46",
  tn = {
    layout: CR,
    container: IR,
    image_container: PR,
    title: SR,
    text_container: BR,
    support_container: TR
  },
  ER = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACQCAYAAACPtWCAAAAFW0lEQVR4nO3dwXUTMRSF4RnOVMImdJAmWKUCmgikhEDagSJIB7ChFHMOq4zko8vLk+bKzv/tHDtjxb5HPN6MNOvdp7vlpXVdd4+XU/lw/4N1WZvPK+uyniK/X47vdAq/X/MH6eMV5N9T/P3699fGo+rrEqP7d/zmS7Lfrzreu9TRgCQCCCsCCKutqmHEP/Gq5lGvz9YQZY0WHU9Vw57KmipX00WpmrpU13xqPO3PP/r3qu9TPV8+ZgaEFQGEFQGE1Va9uWgsVf/mF325sqaSNUq7LSf7cr1rlDN9wv3DdtusEq4pk59HtOaO1oRx7UAxA8KKAMKKAMJqU30xWcNVNWKbqmnK59N9PlHTyRpXfB7Rmkv+fcE24+i+bO/Pv3w3ZkBYEUBYEUBY1X3AoHANIfpc2esP5fPi3G997jKmup6yoGre+LnavWgXT76/uP5S1pSij8oMCCsCCCsCCKt0DRg+15m8nC56bjN7vHLAck1KVQKN7WtGa1Z1vGhfMnt9JDMgrAggrAggrLZo5yh7vVj298PnesvfL/tY0T5XsA/Wex119tzt6OsDozUkMyCsCCCsCCCsNrXONLtXTLbvVZI1jloz0Xtvmejrk2s+wuNRm8cI2RpWPc8MCCsCCCsCCKvqXHC0j/P+5nbw+LNXvIXfIPjy7uO5KH9+Pzc/HlUzMgPCigDCigDCql4XfPD+eJcnW/OpGnJ0jTn2+NE9vpkBYUUAYUUAYVX1AVWF0H//OOXa+mzq7xldY3au+cT1lVwPiKkRQFgRQFidORe8d/1nPo/uy2WPd2yNFyXv41IMnxkQVgQQVgQQVv+xN4ysWWKbSFdyNcvH21+h15c1yo/nD0PHp44XHX/p+8+b4ifhGjN1cn9dxIaIAjMgrAggrAggrM6cC+5977DBfalgyaP2cI7XULkaN7xXjRz/sX3A7LphZkBYEUBYEUBYbdH97fKyNVawxgkP/9iaV9V02b1sjha9zwgzIKwIIKwIIKzkueB8H3D09XTFs6JEyp25PHvErkcrx1+Ot/+anNz3I8fDmhDMjADCigDCalvW9s3G8n3AsX013Xdamo9nU61IqQY89vrEV9gNMLpnODMgrAggrAggrNL3C3ZTfaj+fb/S2HPV0Xvhxd/w2JXg7BGNqRBAWBFAWMn7hEy/J7QoYcbvbZO8nlGO/+g1Otk1MOJw7A2DmRBAWBFAWG1qP7f+fai+9B7F4gK74XLvF91zeXyfr/1/hGiNygwIKwIIKwIIq/i54HBbcGwnTu/vp3h3wa7391Oie9GM7ePKGpU1IZgZAYQVAYSV3B8wb/Y7i1zfnU/2jt2fUd4vmDUhmAkBhBUBhNUrrgfsfW7x+u9G19dcd/OLngtmTQimQgBhRQBhVe0RXdLXd/Veo9D73nKjjze65pqtRs7VfCVmQFgRQFgRQFit2ftO3D9+C94veF8zPD18ThU1949fy0UfmcOdMXfNl//81PfXln1/ZkBYEUBYEUBYDdgf8OiaaXQfj3PbIzEDwooAwooAwmpADfjW14BQM0YwA8KKAMKKAMLq4u8TcvmSe0wfru+6cWZAWBFAWBFAWPWoAQdfz9euOZ4evrzpk63Z6/ni31/fj5sZEFYEEFYEEFYT9AFHrzvGzJgBYUUAYUUAYUUAYUUAYUUAYUUAYUUAYUUAYUUAYUUAYTXhmpDYGogO18MFZe+bwt4xLzEDwooAwooAwmqCGjBawh1dY/U+HnvHvMQMCCsCCCsCCKsLWBMSff3RNV/vGraUrXHnriGZAWFFAGFFAGE1YR9wtj6XGt/RNVjvmtmLGRBWBBBWBBA+y7L8BWJknvMP2Od9AAAAAElFTkSuQmCC",
  kR = () => c(n => n.user.showRobotPopup) ? Ge.createPortal(e.jsx("div", {
    className: tn.layout,
    children: e.jsxs("div", {
      className: tn.container,
      children: [e.jsx("div", {
        className: tn.image_container,
        children: e.jsx("img", {
          alt: "robot",
          src: ER
        })
      }), e.jsx("div", {
        className: tn.title,
        children: "Hello, Mr. Robot!"
      }), e.jsxs("div", {
        className: tn.text_container,
        children: [e.jsx("div", {
          children: "1. A robot may not injure a human being or, through inaction, allow a human being to come to harm."
        }), e.jsx("div", {
          children: "2. A robot must obey the orders given it by human beings except where such orders would conflict with the First Law."
        }), e.jsx("div", {
          children: "3. A robot must protect its own existence as long as such protection does not conflict with the First or Second Law."
        })]
      }), e.jsx("div", {
        className: tn.support_container,
        onPointerUp: () => {
          W(ii)
        },
        children: "Support for humans"
      })]
    })
  }), document.body) : null,
  DR = "_layout_cc2i9_1",
  RR = "_container_cc2i9_19",
  MR = {
    layout: DR,
    container: RR
  },
  UR = {},
  QR = {},
  OR = 1,
  FR = 10,
  zR = () => {
    const t = a => {
        const i = k(OR, FR);
        return a[i] ? t(a) : (a[i] = !0, i)
      },
      n = t(UR),
      s = t(QR);
    return {
      x: n,
      y: s
    }
  };
(() => {
  const t = [];
  for (let n = 0; n < 5; n++) {
    const s = n + 1,
      a = `hsl(${k(0,360)} , 70%, 50%)`;
    t.push({
      number: s,
      color: a,
      ...zR()
    })
  }
  return t
})();
const GR = "_game_container_1afil_1",
  LR = "_title_1afil_5",
  HR = "_text_1afil_10",
  qR = "_items_container_1afil_15",
  YR = "_item_1afil_15",
  sn = {
    game_container: GR,
    title: LR,
    text: HR,
    items_container: qR,
    item: YR,
    "slide-across": "_slide-across_1afil_1"
  },
  VR = {},
  WR = {},
  XR = 1,
  JR = 10,
  ZR = () => {
    const t = a => {
        const i = k(XR, JR);
        return a[i] ? t(a) : (a[i] = !0, i)
      },
      n = t(VR),
      s = t(WR);
    return {
      x: n,
      y: s
    }
  },
  KR = (() => {
    const t = [];
    for (let n = 0; n < 4; n++) {
      const s = n + 1,
        a = `hsl(${k(0,360)} , 70%, 50%)`;
      t.push({
        number: s,
        color: a,
        animation: `${sn["slide-across"]} ${k(5,12)}s linear infinite`,
        ...ZR()
      })
    }
    return t
  })(),
  $R = () => {
    const t = _(),
      [n, s] = A.useState({
        0: !1,
        1: !1,
        2: !1,
        3: !1
      }),
      a = async (i, o) => {
        try {
          const r = new TextEncoder().encode(JSON.stringify({
            gameId: i,
            status: o
          }));
          await Ke.rpc("mini-game", r)
        } catch (r) {
          console.log("error send rpc: ", r)
        }
      };
    return A.useEffect(() => {
      n[0] && n[1] && n[2] && n[3] && (t(gg(!1)), a(2, 1))
    }, [n]), A.useEffect(() => {
      a(2, 0)
    }, []), e.jsxs("div", {
      className: sn.game_container,
      children: [e.jsx("div", {
        className: sn.title,
        children: "Mini game"
      }), e.jsx("div", {
        className: sn.text,
        children: "Press the flying pixels"
      }), e.jsx("div", {
        className: sn.items_container,
        children: KR.map((i, o) => n[o] ? null : e.jsx("div", {
          className: sn.item,
          style: {
            backgroundColor: i.color,
            top: i.y * 30,
            animation: i.animation
          },
          onPointerUp: () => {
            s({
              ...n,
              [o]: !0
            })
          }
        }))
      })]
    })
  },
  e3 = () => c(n => n.main.showMiniPopup) ? Ge.createPortal(e.jsx("div", {
    className: MR.layout,
    children: e.jsx($R, {})
  }), document.body) : null,
  t3 = () => e.jsxs("div", {
    className: Sn.layout,
    children: [e.jsx(HT, {}), e.jsx(FT, {}), e.jsx(Uf, {}), e.jsx(cT, {}), e.jsx(zT, {}), e.jsx(Lk, {}), e.jsx(sD, {}), e.jsx(iD, {}), e.jsx(pE, {}), e.jsx(Gk, {}), e.jsx(kR, {}), e.jsx(y4, {}), e.jsx(L4, {}), e.jsx(e3, {}), e.jsx(K4, {}), e.jsx(rk, {}), e.jsx(zk, {}), e.jsx(NR, {}), e.jsx(Wk, {}), e.jsx(qD, {})]
  }),
  n3 = () => {
    const t = _(),
      n = c(a => a.main.startAppTs),
      s = c(He);
    return A.useEffect(() => {
      if (s && (s.id === 555832576 || s.id === 2096307477)) return;
      const a = setInterval(() => {
        Date.now() - n > 30 * 60 * 1e3 && (t(mg()), clearInterval(a))
      }, 100);
      return () => {
        clearInterval(a)
      }
    }, [n, s]), null
  },
  s3 = () => {
    var i, o;
    const t = _(),
      n = ((o = (i = window == null ? void 0 : window.Telegram) == null ? void 0 : i.WebApp) == null ? void 0 : o.initData) && window.Telegram.WebApp.initData !== "",
      s = () => {
        if (n) return {
          isTMA: !0,
          authData: window.Telegram.WebApp.initData
        };
        {
          const r = new URLSearchParams(window.location.search);
          if (r.has("initData")) try {
            return {
              isTMA: !1,
              authData: atob(r.get("initData"))
            }
          } catch (l) {
            return console.warn("Ошибка декодирования initData из параметров URL:", l), {
              isTMA: !1,
              authData: null
            }
          }
        }
        return {
          isTMA: gt.isDev,
          authData: gt.devUserInitData
        }
      },
      a = r => {
        try {
          return JSON.parse(decodeURIComponent(r).split("&")[0].replace("user=", "")).language_code || "en"
        } catch (l) {
          return console.log("cant parse language code", l), "en"
        }
      };
    A.useEffect(() => {
      const {
        isTMA: r,
        authData: l
      } = s();
      if (t(c_(r)), l) {
        const d = a(l);
        t(tu(d)), t(d_(l))
      }
    }, [t])
  },
  a3 = () => (A.useEffect(() => {
    if (navigator.userAgent.toLowerCase().indexOf("android") > -1, document.body.style.overflowY = "hidden", document.body.style.marginTop = "100px", document.body.style.height = window.innerHeight + 100 + "px", document.body.style.paddingBottom = "100px", setTimeout(() => {
        window.scrollTo(0, 100)
      }, 1), document.body.addEventListener("scroll", () => {
        document.body.scrollTop = 100, setTimeout(() => {
          window.scrollTo(0, 100)
        }, 1)
      }), window.addEventListener("scroll", () => {
        document.body.scrollTop = 100, setTimeout(() => {
          window.scrollTo(0, 100)
        }, 1)
      }), ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document) {
      let t;
      const n = a => {
          t = a.touches[0].clientY
        },
        s = a => {
          let i = !1,
            o = !1,
            r = !1,
            l = a.target;
          for (; l && l.id !== "root";) {
            if (l.id === "canvasHolder") {
              o = !0;
              break
            }
            if (l.className === "react-colorful" || l.id === "colorPickerContainer" || l.id === "colorPickerCustomLayout" || l.id === "colorPickerLayout") {
              r = !0;
              break
            }
            if (l.scrollHeight > l.clientHeight) {
              i = !0;
              break
            }
            l = l.parentElement
          }
          if (o || r) a.preventDefault();
          else if (i) {
            const d = l.scrollTop,
              m = a.changedTouches[0].clientY;
            d <= 0 && t < m && a.cancelable && a.preventDefault()
          } else a.preventDefault()
        };
      document.documentElement.addEventListener("touchstart", n, {
        passive: !1
      }), document.documentElement.addEventListener("touchmove", s, {
        passive: !1
      })
    }
  }, []), null),
  i3 = "_layout_ieygs_1",
  o3 = "_container_ieygs_8",
  r3 = "_logo_container_ieygs_17",
  c3 = "_logo_ieygs_17",
  l3 = "_animate_ieygs_1",
  d3 = "_center_ieygs_37",
  u3 = "_title_ieygs_51",
  m3 = "_description_ieygs_58",
  A3 = "_button_container_ieygs_63",
  p3 = "_button_ieygs_63",
  h3 = "_b_ieygs_63",
  Te = {
    layout: i3,
    container: o3,
    logo_container: r3,
    logo: c3,
    animate: l3,
    center: d3,
    title: u3,
    description: m3,
    button_container: A3,
    button: p3,
    b: h3
  },
  g3 = () => {
    const t = c(fi);
    return e.jsx("div", {
      className: Te.layout,
      children: e.jsxs("div", {
        className: Te.container,
        children: [e.jsx("div", {
          className: Te.logo_container,
          children: e.jsx("div", {
            className: Te.logo,
            children: e.jsx("div", {
              className: Te.center
            })
          })
        }), e.jsx("div", {
          className: Te.button_container,
          children: e.jsx("button", {
            className: Te.button,
            onPointerUp: () => {
              t ? W("https://t.me/notpixel_channel") : Tt("https://t.me/notpixel_channel")
            },
            children: "Not Pixel Channel"
          })
        })]
      })
    })
  },
  _3 = "/assets/loading-D8SQALTR.gif",
  f3 = () => e.jsxs("div", {
    className: Sn.loading_container,
    children: [e.jsx("div", {
      className: Sn.image_container,
      children: e.jsx("img", {
        alt: "img",
        src: _3,
        className: Sn.image
      })
    }), e.jsx("div", {
      className: Sn.text,
      children: "Preparing pixels..."
    })]
  }),
  x3 = () => {
    const t = _();
    A.useEffect(() => {
      const n = (s, a) => {
        un.get(s, (i, o) => {
          if (i === null && o !== "") try {
            const r = JSON.parse(o);
            a(r)
          } catch (r) {
            console.error(`Ошибка парсинга данных ${s}:`, r)
          } else i !== null && console.error(`Ошибка при получении данных ${s}:`, i)
        })
      };
      n("colors", s => {
        Array.isArray(s) && s.length > 0 ? (t(pl(s)), t(li(s[0]))) : console.warn("Полученные данные цветов не являются непустым массивом")
      }), n("boosts1", s => {
        t(em(s))
      })
    }, [t])
  },
  v3 = () => {
    const t = _(),
      n = c(h => h.main.startParams),
      s = async () => {
        try {
          const g = (await t(ze.getUser())).payload.data;
          if (g.error) throw new Error(g.error);
          return t(l_(!0)), g
        } catch (h) {
          return console.error("Ошибка при получении данных пользователя:", h), !1
        }
      }, a = async () => {
        try {
          t(at.getPeriods())
        } catch (h) {
          console.error("Ошибка получения периодов:", h)
        }
      }, i = async () => {
        try {
          await t(xe.info()).unwrap()
        } catch (h) {
          console.error("Ошибка получения информации о майнинге:", h)
        }
      }, o = async h => {
        if (!or(h)) return Promise.resolve();
        try {
          t(at.getMyTemplate({
            id: h.id
          }))
        } catch (g) {
          console.error("Ошибка получения турнирного трафарета:", g)
        }
      }, r = async () => {
        try {
          t(at.getSelectedTemplate())
        } catch (h) {
          console.error("Ошибка получения выбранного турнирного трафарета:", h)
        }
      }, l = async () => {
        try {
          await t(St.getWorldTemplate())
        } catch (h) {
          console.error("Ошибка получения подключенного трафарета:", h)
        }
      }, d = () => {
        n.squadId && t(Xa(n.squadId))
      }, m = async () => {
        const [h] = await Promise.all([s()]);
        h && (await Promise.all([i(), l(), o(h), a(), r()]), d())
      };
    A.useEffect(() => {
      m()
    }, [t])
  },
  y3 = () => {
    const t = te();
    A.useEffect(() => {
      ri() ? localStorage.getItem("skipIntro") || (t.push("/welcome"), localStorage.setItem("skipIntro", "true")) : un.get("skipIntro", (n, s) => {
        n === null && s !== "" || (n !== null && console.error("Ошибка при получении skipIntro:", n), t.push("/welcome"))
      })
    }, [t])
  },
  ni = t => {
    let n = "unknown",
      s = "unknown";
    return /android/i.test(t) ? (n = "mobile", s = "android") : /iPad|iPhone|iPod/.test(t) ? (n = "mobile", s = "ios") : /Windows NT/i.test(t) ? (n = "desktop", s = "windows") : /Macintosh/i.test(t) ? (n = "desktop", s = "macos") : (n = "unknown", s = "unknown"), {
      deviceType: n,
      os: s
    }
  },
  w3 = t => {
    let n = "unknown",
      s = "unknown";
    const a = t.toLowerCase();
    switch (a) {
      case "android":
      case "ios":
        n = "mobile", s = a;
        break;
      case "macos":
      case "windows":
      case "linux":
        n = "desktop", s = a;
        break;
      case "web":
      case "weba":
        n = "browser", s = "unknown";
        break;
      case "tdesktop":
      case "desktop":
        n = "desktop", s = "unknown";
        break;
      default:
        const i = navigator.userAgent,
          o = ni(i);
        n = o.deviceType, s = o.os;
        break
    }
    return {
      deviceType: n,
      os: s
    }
  },
  j3 = () => {
    const t = _(),
      n = c(s => s.auth.authData);
    A.useEffect(() => {
      var o, r;
      let s = "unknown",
        a = "unknown",
        i = "unknown";
      if (n && n !== "")
        if ((r = (o = window == null ? void 0 : window.Telegram) == null ? void 0 : o.WebApp) != null && r.platform) {
          s = window.Telegram.WebApp.platform;
          const l = w3(s);
          a = l.deviceType, i = l.os
        } else {
          const l = navigator.userAgent,
            d = ni(l);
          a = d.deviceType, i = d.os
        }
      else {
        const l = navigator.userAgent,
          d = ni(l);
        a = d.deviceType, i = d.os
      }
      t(md({
        deviceType: a,
        os: i,
        platform: s
      }))
    }, [t, n])
  },
  b3 = () => {
    const t = _(),
      {
        t: n,
        i18n: s
      } = Le(),
      a = c(i => i.user.languageCode);
    A.useEffect(() => {
      s.changeLanguage(a)
    }, [t, a])
  },
  N3 = () => {
    const t = _(),
      n = c(a => a.shop.selectedCurrency),
      s = c(ct);
    A.useEffect(() => {
      s === je && n === 1 && t(Qn(2)), s !== je && t(Qn(1))
    }, [s])
  },
  C3 = () => {
    const t = _(),
      n = window.Telegram.WebApp,
      s = c(Et);
    return A.useEffect(() => {
      function a() {
        console.log("is fullscreen: ", this.isFullscreen), t(Ad(this.isFullscreen))
      }
      return n.onEvent("fullscreenChanged", a), () => {
        n.offEvent("fullscreenChanged", a)
      }
    }, [t]), A.useEffect(() => {
      if (b) {
        const a = window.innerWidth,
          i = window.innerHeight;
        b.app.renderer.resize(a, i), b.viewport.viewport.resize(a, i)
      }
    }, [s]), null
  };

function mt(t, n) {
  const [s, a = ""] = t.toString().split("."), i = a.slice(0, n);
  return +`${s}.${i.padEnd(n,"0")}`
}
const Bn = window.Telegram.WebApp.Accelerometer,
  Tn = window.Telegram.WebApp.DeviceOrientation,
  En = window.Telegram.WebApp.Gyroscope,
  I3 = new Promise(t => {
    Bn.start(null, n => t(n))
  }),
  P3 = new Promise(t => {
    Tn.start(null, n => t(n))
  }),
  S3 = new Promise(t => {
    En.start(null, n => t(n))
  }),
  B3 = async () => {
    if (!window.Telegram.WebApp.isVersionAtLeast("8.0")) return Promise.reject("Version is too low");
    const t = [I3, P3, S3],
      n = [],
      s = [],
      a = [],
      i = await Promise.allSettled(t),
      o = i[0].value,
      r = i[1].value,
      l = i[2].value,
      d = () => {
        try {
          try {
            if (o) {
              const g = {
                a: mt(Bn.x, 6),
                b: mt(Bn.y, 6),
                c: mt(Bn.z, 6)
              };
              n.push(g)
            }
          } catch {
            const f = {
              a: 1.111111,
              b: 1.111111,
              c: 1.111111
            };
            n.push(f)
          }
          try {
            if (r) {
              const g = {
                a: mt(Tn.alpha, 6),
                b: mt(Tn.beta, 6),
                c: mt(Tn.gamma, 6)
              };
              s.push(g)
            }
          } catch {
            const f = {
              a: 1.111111,
              b: 1.111111,
              c: 1.111111
            };
            s.push(f)
          }
          try {
            if (l) {
              const g = {
                a: mt(En.x, 6),
                b: mt(En.y, 6),
                c: mt(En.z, 6)
              };
              a.push(g)
            }
          } catch {
            const f = {
              a: 1.111111,
              b: 1.111111,
              c: 1.111111
            };
            a.push(f)
          }
        } catch {}
      };
    await kn(2400), d(), await kn(1200), d(), await kn(1200), d();
    const m = {};
    n.length > 0 && (m.a = n), s.length > 0 && (m.b = s), a.length > 0 && (m.c = a);
    const h = new TextEncoder().encode(JSON.stringify(m));
    await Ke.rpc("sensor", h), Bn.stop(), Tn.stop(), En.stop()
  };
let fo = !1;
const T3 = () => {
    const t = c(s => s.device.deviceType),
      n = window.Telegram.WebApp.platform;
    return A.useEffect(() => {
      t === "mobile" && n !== "unknown" && !fo && (B3(), fo = !0)
    }, [t]), null
  },
  E3 = ({
    children: t
  }) => {
    C3(), n3(), s3(), j3(), b3(), N3(), T3();
    const n = c(l => l.main.timeLimit),
      s = c(l => l.user.getUserFetchStatus),
      a = s === p.rejected && !gt.app.disableBetaError,
      i = s === p.pending || s === p.idle,
      o = n;
    return window.Telegram && !window.Telegram.WebApp.isVersionAtLeast(nl) && a3(), x3(), v3(), y3(), a || o ? e.jsx(g3, {}) : i ? e.jsx(f3, {}) : e.jsx(e.Fragment, {
      children: t
    })
  },
  k3 = () => {
    const t = c(fi);
    return e.jsx("div", {
      className: Te.layout,
      children: e.jsxs("div", {
        className: Te.container,
        children: [e.jsx("div", {
          className: Te.logo_container,
          children: e.jsx("div", {
            className: Te.logo,
            children: e.jsx("div", {
              className: Te.center
            })
          })
        }), "Your Telegram App is too old. Update your app.", e.jsx("div", {
          className: Te.button_container,
          children: e.jsx("button", {
            className: Te.button,
            onPointerUp: () => {
              t ? W("https://t.me/notpixel_channel") : Tt("https://t.me/notpixel_channel")
            },
            children: "Not Pixel Channel"
          })
        })]
      })
    })
  };

function D3() {
  return console.log("version:", window.Telegram.WebApp), window.Telegram.WebApp.isVersionAtLeast("8.0") || window.Telegram.WebApp.version === "6.0" && window.Telegram.WebApp.platform === "unknown" ? e.jsx(E3, {
    children: e.jsx(t3, {})
  }) : e.jsx(k3, {})
}
const R3 = {
    main: {
      paintButtonText: "Paint",
      paintButtonMax: "max",
      orderPanelInfo: "info"
    },
    mining: {
      yourBalanceText: "Your balance",
      grayInstruction: "Paint pixels and get PX",
      howItWorks: "How it works",
      popup: {
        title1: "Reward for painting",
        text1: "When you paint the pixels on the template in the correct color, you get PX.",
        text2: "Use Boosters to get more PX.",
        title2: "Mining",
        text3: "Each correct pixel you color mines ≈ 0.1 PX per day.",
        text4: "{{repaints}} repaints ≈ {{perDay}} PX per day.",
        text5: "PX must be claimed every 8 hours, or mining stops.",
        button: "That's so wise!"
      },
      tasks: {},
      boosts: {
        paintReward: "Paint Reward",
        rechargingSpeed: "Recharging Speed",
        energyLimit: "Energy Limit",
        level: "lvl",
        popup: {
          paintRewardDescription: "Increase amount of PX you can earn per one repaint.",
          rechargingSpeedDescription: "Increase the energy recharging speed.",
          energyLimitDescription: "Increase your energy limit, so you can mine more per session.",
          reward: "Reward",
          recharging: "Recharging",
          energy: "Energy",
          cancelButton: "Cancel",
          buyButton: "Buy for {{price}} PX"
        }
      }
    },
    frens: {
      invite: "Invite frens",
      description: "Invite frens to get bonuses!",
      your: "Your frens:",
      benefits: {
        title1: "Invite fren",
        text1: "for you and fren.",
        title2: "<0>Fren with </0><1>Telegram Premium</1>",
        text2: "for you and fren.",
        title3: "Mining drop",
        text3: "of all frens' mining",
        title4: "League bonuses",
        text4: "for you and fren.",
        title5: "Rank ‟Leader”",
        text5: "<0>Mega Drop </0><1>If your referrals invite 1 000+ frens.</1>",
        title6: "Rank ‟Ambassador”",
        text6: "<0>10% of all Stars and Crypto spent by frens </0><1>if you invite 10 000+ frens.</1>"
      }
    },
    shared: {
      sec: "sec"
    },
    misc: {
      halloweenPopup: {
        text1: "You got a pumpkin? Here you go.",
        text2: "Let's turn the canvas into pumpkin soup. Free",
        text3: "Pumpkin Bombs for everyone!",
        text4: "This is probably the craziest and most profitable event in the history of Not Pixel.",
        button: "Let's go!"
      }
    }
  },
  M3 = {
    translation: R3
  },
  U3 = {
    main: {
      paintButtonText: "Paint",
      paintButtonMax: "max",
      orderPanelInfo: "info"
    },
    mining: {
      yourBalanceText: "Ваш баланс",
      grayInstruction: "Красьте пиксели и получайте PX",
      howItWorks: "Как это работает",
      popup: {
        title1: "Награда за перекраску",
        text1: "Когда вы красите пиксели по трафарету в правильный цвет, вы получаете PX.",
        text2: "Прокачивайте Бусты, чтобы получить больше PX.",
        title2: "Майнинг",
        text3: "Каждый покрашенный в правильный цвет пиксель майнит ≈ 0.1 PX в день.",
        text4: "{{repaints}} перекрасок ≈ {{perDay}} PX в день.",
        text5: "PX должны быть запрошены каждые {{time}} часов, или майнинг остановится.",
        button: "Всё понятно!"
      },
      tasks: {},
      boosts: {
        paintReward: "Награда за перекраску",
        rechargingSpeed: "Скорость восстановления заряда",
        energyLimit: "Лимит зарядов",
        level: "ур.",
        popup: {
          paintRewardDescription: "Увеличивает количество PX которое вы можете получить за одну перекраску.",
          rechargingSpeedDescription: "Увеличивает скорость восстановления зарядов.",
          energyLimitDescription: "Увеличивает лимит зарядов, поэтому вы можете покрасить больше пикселей за сессию",
          reward: "Награда",
          recharging: "Перезарядка",
          energy: "Энергия",
          cancelButton: "Отмена",
          buyButton: "Купить за {{price}} PX"
        }
      }
    },
    frens: {
      invite: "Пригласить друзей",
      description: "Приглашайте друзей и получайте бонусы!",
      your: "Ваши друзья:",
      benefits: {
        title1: "Приглашение друга",
        text1: "для тебя и друга.",
        title2: "<0>Друг с </0><1>Telegram Premium</1>",
        text2: "для тебя и друга.",
        title3: "Майнинг бонус",
        text3: "за майнинг друзей.",
        title4: "Бонус лиги",
        text4: "для тебя и друга.",
        title5: "Уровень ‟Leader”",
        text5: "<0>Супер Дроп </0><1>Если твои рефералы пригласят более 1000 друзей.</1>",
        title6: "Уровень ‟Ambassador”",
        text6: "<0>10% всех потраченных друзьями Stars and Crypto </0><1>если ты пригласишь 10 000+ друзей.</1>"
      }
    },
    shared: {
      sec: "сек"
    },
    misc: {
      halloweenPopup: {
        text1: "У тебя есть тыква? На, держи.",
        text2: "Превратим этот чертов холст в тыквенный суп. Бесплатные",
        text3: "Тыквенные Бомбы — всем!",
        text4: "Вероятно, самое безумное и выгодное событие за всю историю Not Pixel.",
        button: "Поехали!"
      }
    }
  },
  Q3 = {
    translation: U3
  };
kc.use(Tc).init({
  resources: {
    en: M3,
    ru: Q3
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: !1
  }
});
try {
  window.telegramAnalytics.init({
    token: "eyJhcHBfbmFtZSI6Ik5vdFBpeGVsIiwiYXBwX3VybCI6Imh0dHBzOi8vdC5tZS9ub3RwaXhlbC9hcHAiLCJhcHBfZG9tYWluIjoiaHR0cHM6Ly9hcHAubm90cHguYXBwIn0=!qE41yKlb/OkRyaVhhgdePSZm5Nk7nqsUnsOXDWqNAYE=",
    appName: "NotPixel"
  })
} catch {}
Df(Xn);
il(Xn);
cg(Xn);
const O3 = xc.createRoot(document.getElementById("root"));
O3.render(e.jsx(ae.StrictMode, {
  children: e.jsx(jc, {
    store: Xn,
    children: e.jsx(Ec, {
      children: e.jsx(Cc, {
        manifestUrl: "https://app.notpx.app/tonconnect-manifest.json",
        actionsConfiguration: {
          returnStrategy: "back",
          twaReturnUrl: "https://t.me/notpixel/app",
          modals: ["before"],
          notifications: ["before", "success", "error"]
        },
        language: "en",
        uiPreferences: {
          theme: Ic.DARK
        },
        children: e.jsx(D3, {})
      })
    })
  })
}));