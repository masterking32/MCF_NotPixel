var hc = Object.defineProperty;
var gc = (n, t, s) => t in n ? hc(n, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: s
}) : n[t] = s;
var Wn = (n, t, s) => gc(n, typeof t != "symbol" ? t + "" : t, s);
import {
  j as e,
  r as A,
  R as re
} from "./react-DjWS3H3h.js";
import {
  r as ze,
  c as _c
} from "./react-dom-DCoj3sTC.js";
import {
  c as _e,
  a as G,
  b as Fn,
  d as ti,
  e as rn,
  i as ve,
  f as fc
} from "./@reduxjs-K2ahyHOo.js";
import {
  a as xc
} from "./axios-BdInfei4.js";
import "./yaml-Dy-SgT9h.js";
import "./vite-plugin-node-polyfills-BVIVvkCX.js";
import {
  d as Be
} from "./@ton-CABtnvlX.js";
import {
  u as c,
  a as _,
  s as vc,
  P as yc
} from "./react-redux-BljSBgeC.js";
import {
  c as F
} from "./classnames-D-x1NdaJ.js";
import {
  u as cn,
  a as wc,
  b as jc,
  c as zn,
  T as bc,
  d as Nc
} from "./@tonconnect-C4go9-2N.js";
import {
  u as Gs,
  e as Ls,
  a as Hs
} from "./@react-spring-BiYD2lL6.js";
import {
  C as Cc
} from "./centrifuge-B3TpHLNx.js";
import {
  d as Ic
} from "./fflate-DRb3BoOD.js";
import {
  u as te,
  S as Pc,
  a as ae,
  b as ta
} from "./react-router-skDq-tWz.js";
import {
  c as sn
} from "./chroma-js-CHvE9HB5.js";
import {
  m as Mn,
  A as ni
} from "./framer-motion-BggZOsGS.js";
import {
  u as Ge,
  T as fa,
  i as Sc
} from "./react-i18next-DUbAQzaN.js";
import {
  l as Mt
} from "./react-range-COVt_hlT.js";
import {
  T as xa
} from "./tonweb-BaiZR3hJ.js";
import {
  B as Bc
} from "./react-router-dom-DSUFG-Qy.js";
import {
  i as Tc
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
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
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
const Ec = "_stars_img_container_1wci0_1",
  kc = "_stars_img_1wci0_1",
  Dc = "_scalebubble_1wci0_1",
  Rc = "_squads_img_1wci0_17",
  Mc = "_title_container_1wci0_22",
  Uc = "_description_container_1wci0_28",
  Qc = "_description_1wci0_28",
  Oc = "_info_layout_1wci0_42",
  Fc = "_info_container_1wci0_52",
  zc = "_info_row_1wci0_59",
  Gc = "_info_row_content_1wci0_65",
  Lc = "_info_row_sale_1wci0_84",
  Hc = "_not_active_1wci0_100",
  qc = "_selected_1wci0_105",
  Yc = "_row_icon_container_1wci0_110",
  Vc = "_row_icon_1wci0_110",
  Xc = "_row_title_1wci0_133",
  Wc = "_row_amount_1wci0_143",
  Jc = "_row_price_container_1wci0_156",
  Zc = "_main_info_channel_users_1wci0_166",
  he = {
    stars_img_container: Ec,
    stars_img: kc,
    scalebubble: Dc,
    squads_img: Rc,
    title_container: Mc,
    description_container: Uc,
    description: Qc,
    info_layout: Oc,
    info_container: Fc,
    info_row: zc,
    info_row_content: Gc,
    info_row_sale: Lc,
    not_active: Hc,
    selected: qc,
    row_icon_container: Yc,
    row_icon: Vc,
    row_title: Xc,
    row_amount: Wc,
    row_price_container: Jc,
    main_info_channel_users: Zc
  },
  _o = Number(window.getComputedStyle(document.body).getPropertyValue("--header-height").replace("px", "")),
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
  va = {
    bomb: "Dynamite",
    pumpkin: "Pumpkin",
    pixanos: "Pixanos"
  },
  Kc = 24 * 60 * 60 * 1e3,
  Pt = "https://t.me/notpixel/app",
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
  $c = ["/transaction/user/start", "/repaint/finish", "/transaction/user/complete", "/stars/shop/process", "/mining/status/claim", "/mining/claim", "/mining/status/error", "/repaint/complete", "/stars/shop/reject", "/squads/list/get", "/squads/list/update"],
  De = {
    my: "my",
    referred: "referred",
    world: "world"
  },
  Nt = "notgames_bot/squads",
  si = "https://t.me/notpixel_42",
  Ga = "UQBv3exBKLmQcn2Fm6VlntAInW-je1YP4U59gJxaO62NCyMn",
  Ke = {
    userFromPixelInfo: "userFromPixelInfo",
    squadFromData: "squadFromData",
    userFromRating: "userFromRating"
  },
  el = "7.7",
  je = "unknown",
  Rt = {
    3: "EQAvlWFDxGF2lXm67y4yzC17wYKD9A0guwPkMs1gOsM__NOT",
    4: "EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs",
    5: "EQCvxJy4eG8hyHBFsZ7eePxrRsUQSFE_jpptRAYBmcG_DOGS",
    6: "EQDv-yr41_CZ2urg2gfegVfa44PDPjIK9F-MilEDKDUIhlwZ",
    7: "EQD-cvR0Nz6XAyRBvbhz-abTrRC6sI5tvHvvpeQraV9UAAD7",
    8: "EQB4zZusHsbU2vVTPqjhlokIOoiZhEdCMT703CWEzhTOo__X",
    9: "EQCuPm01HldiduQ55xaBF_1kaW_WAUy5DHey8suqzU_MAJOR"
  },
  tl = {
    friendsForTemplateCreation: 128
  },
  wt = {
    success: "success",
    neutral: "neutral",
    fail: "fail"
  },
  fo = {
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
  ai = "https://notpx.app/api/v1/",
  nl = "https://image.notpx.app/api/v2/image";
let xo;
const sl = n => {
    xo = n
  },
  I = xc.create({
    baseURL: ai
  });
I.interceptors.request.use(function(n) {
  var a;
  const s = (a = xo.getState().auth) == null ? void 0 : a.authData;
  return s ? n.headers.Authorization = `initData ${s}` : delete n.headers.Authorization, n
});
I.interceptors.request.use(function(n) {
  return $c.includes(n.url), n
});
I.interceptors.response.use(n => n, n => Promise.reject(n));
const Ii = window.Telegram.WebApp.CloudStorage;
let vo = class {
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
window.Telegram.WebApp.isVersionAtLeast("6.9") && (vo = class {
  static save(t, s, a = () => {}) {
    Ii.setItem(t, s, a)
  }
  static get(t, s = () => {}) {
    Ii.getItem(t, s)
  }
});
const ln = vo,
  k = (n, t) => Math.floor(Math.random() * (t - n + 1) + n),
  al = n => `${n.includes("@")?"":"@"}${n}`,
  Pi = n => n.replace("@", ""),
  Gn = (n, t = 18, s = !0) => n.slice(0, t) + (n.length > t && s ? "..." : ""),
  St = n => {
    window.Telegram.WebApp.openLink(n)
  },
  X = n => {
    window.Telegram.WebApp.openTelegramLink(n)
  },
  ii = () => {
    const n = "some_test_local_storage_key";
    try {
      return localStorage.setItem(n, n), localStorage.removeItem(n), !0
    } catch {
      return !1
    }
  },
  Ln = async n => {
    if (navigator.clipboard && window.isSecureContext) try {
      return await navigator.clipboard.writeText(n), Promise.resolve(!0)
    } catch (s) {
      console.log(s)
    }
    const t = document.createElement("textarea");
    t.value = n, t.style.position = "fixed", t.style.left = "-99999px", document.body.prepend(t), t.select();
    try {
      return document.execCommand("copy"), t.remove(), Promise.resolve(!0)
    } catch {
      return t.remove(), Promise.resolve(!1)
    }
  }, En = n => new Promise(t => setTimeout(t, n)), il = n => {
    if (!n || !n.x || !n.y || isNaN(n.x) || isNaN(n.y)) return !1;
    const t = Number(n.x),
      s = Number(n.y);
    return !(t < 0 || s < 0 || t >= E.width || s >= E.height)
  }, ol = () => {
    try {
      let n = window.Telegram.WebApp.initDataUnsafe.start_param;
      const t = {
        coords: !1,
        squadId: !1,
        refId: !1,
        showTemplate: !1
      };
      if (!n) return t;
      const s = n.split("_");
      for (let i = 0; i < s.length; i++) {
        let o = s[i],
          r = o[0];
        o = Number(o.substring(1)), !isNaN(o) && (r === "f" ? t.refId = o : r === "s" ? t.squadId = o : r === "x" || r === "y" ? (t.coords || (t.coords = {
          x: 0,
          y: 0
        }), t.coords[r] = o) : r === "t" && (t.showTemplate = !0))
      }
      return il(t.coords) || (t.coords = !1), t.showTemplate && (t.coords = !1), t
    } catch {
      return {
        coords: !1,
        squad: !1,
        refId: !1,
        showTemplate: !1
      }
    }
  }, an = n => {
    if (isNaN(n)) return "";
    let t = "";
    return n >= 1e3 ? (t += (n / 1e3).toFixed(1), t += "k") : t += n.toFixed(0), t
  }, rl = n => {
    if (isNaN(n)) return "0 min";
    const t = Math.ceil(n / 3600),
      s = Math.ceil(n % 3600 / 60);
    let a = "";
    return t > 0 ? a += `${t} hour${t!==1?"s":""} ` : a += `${s} min`, a
  }, cl = n => {
    if (isNaN(n)) return "0 min";
    let t = "";
    const s = Math.floor(n / 3600),
      a = Math.floor(n % 3600 / 60);
    return t += s, t += "h ", t += a > 9 ? a : `0${a}`, t += "m", t
  }, yo = n => !0, qs = n => {
    if (!n) return "";
    if (n.length <= 6) return n;
    const t = n.slice(0, 3),
      s = n.slice(-3);
    return `${t}...${s}`
  }, ll = n => {
    try {
      return Be.Address.parse(n).toString({
        urlSafe: !0,
        bounceable: !0
      })
    } catch {
      return ""
    }
  }, oi = n => {
    try {
      return Be.Address.parse(n).toString({
        urlSafe: !0,
        bounceable: !1
      })
    } catch {
      return ""
    }
  }, $e = ["#E46E6E", "#FFD635", "#7EED56", "#00CCC0", "#51E9F4", "#94B3FF", "#E4ABFF", "#FF99AA", "#FFB470", "#FFFFFF", "#BE0039", "#FF9600", "#00CC78", "#009EAA", "#3690EA", "#6A5CFF", "#B44AC0", "#FF3881", "#9C6926", "#898D90", "#6D001A", "#BF4300", "#00A368", "#00756F", "#2450A4", "#493AC1", "#811E9F", "#A00357", "#6D482F", "#000000"], Si = $e[k(0, $e.length - 1)], dl = {
    active: Si,
    id: btoa(Si),
    latest: ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
    basic: $e
  }, wo = _e({
    name: "color",
    initialState: dl,
    reducers: {
      addColor: (n, t) => {
        const s = n.latest.indexOf(t.payload),
          a = n.latest[0];
        s > -1 ? n.latest = [t.payload, ...n.latest.slice(0, s), ...n.latest.slice(s + 1, 10)] : n.latest = [t.payload, ...n.latest.slice(0, 7)], a !== t.payload && ln.save("colors", JSON.stringify(n.latest))
      },
      setColors: (n, t) => {
        n.latest = t.payload
      },
      setActiveColor: (n, t) => {
        n.active = t.payload, n.id = btoa(t.payload)
      }
    }
  }), {
    addColor: ul,
    setColors: ml,
    setActiveColor: ri
  } = wo.actions, Al = wo.reducer;
class W {
  static async getPrices() {
    return I.get("/image/prices")
  }
  static async getPixelInfo({
    id: t,
    signal: s
  }) {
    return I.get(`/image/get/${t}`, {
      signal: s
    })
  }
  static async getRevShareInfo() {
    return I.get("/users/me/revshare")
  }
  static async getUser() {
    return I.get("/users/me")
  }
  static async getStats() {
    return I.get("/users/stats")
  }
  static async getMoreStats() {
    return I.get("/history/stats")
  }
  static async getVerificatedWallet() {
    return I.get("/wallet/address")
  }
  static async checkCaptcha({
    wallet: t,
    captcha: s
  }) {
    return I.post("/wallet/ton-proof/check-captcha", {
      wallet: t,
      captcha: s
    })
  }
  static async checkHasCaptchaCode() {
    return I.get("/wallet/ton-proof/uncompleted-captcha")
  }
  static async getUserPixels({
    offset: t,
    limit: s
  }) {
    return I.get(`/users/mypixels?offset=${t}&limit=${s}`)
  }
  static async getUserPixelsSold({
    offset: t,
    limit: s
  }) {
    return I.get(`/users/mypixels/sold?offset=${t}&limit=${s}`)
  }
  static async getUserPixelsCount() {
    return I.get("/users/mypixels/count")
  }
  static async getPriceMask({
    price: t
  }) {
    let s = t === null ? "" : `/${t}`;
    return I.get(`/image/mask${s}`, {
      responseType: "arraybuffer",
      decompress: !0
    })
  }
  static async startRepaint({
    pixelId: t,
    newColor: s
  }) {
    return I.post("/repaint/start", {
      pixelId: t,
      newColor: s
    })
  }
  static async getHistory({
    offset: t,
    limit: s
  }) {
    return I.get(`/history/all?offset=${t}&limit=${s}`)
  }
  static async getPixanosRating() {
    return I.get("/ratings/pixanos")
  }
  static async buy({
    type: t,
    qty: s,
    pixanosColor: a
  }) {
    return I.post("/buy/stars", {
      type: t,
      qty: s,
      pixanosColor: a
    })
  }
  static async getProducts() {
    return I.get("/buy/list")
  }
  static async useProduct({
    pixelId: t,
    productId: s,
    color: a
  }) {
    return I.post("/repaint/special", {
      pixelId: t,
      type: s,
      color: a
    })
  }
  static async startTransaction({
    buyerWallet: t
  }) {
    return I.post("/transactions/start", {
      buyerWallet: t
    })
  }
  static async startShopTransaction({
    buyerWallet: t,
    goodId: s,
    daily: a = !1,
    currencyId: i,
    quantity: o,
    activeColor: r
  }) {
    let l = s === 13 ? $e[k(0, 29)] : void 0;
    return r && $e.includes(r) && (l = r), I.post("/transactions/start", {
      buyerWallet: t,
      goodId: s,
      daily: a,
      currencyId: i,
      quantity: o,
      pixanosColor: l
    })
  }
  static async putUserWallet({
    address: t
  }) {
    return I.put(`/users/wallet/${t}`)
  }
  static async getSquadInfo({
    id: t
  }) {
    return I.get(`/ratings/squads/${t}`)
  }
  static async checkSecret({
    key: t
  }) {
    return I.post("/mining/quest/check/secretWord", {
      secret_word: t
    })
  }
  static async getSecretStats() {
    return I.get("/mining/quest/stats ")
  }
  static async getDailyList() {
    return I.get("/daily/list")
  }
  static async getFirstDaily() {
    return I.get("/daily/free")
  }
  static async getRewards({
    userId: t
  }) {
    return I.get(`/users/rewards/${t}`)
  }
  static async getRewardById({
    rewardId: t
  }) {
    return I.get(`/users/rewards/distribution/${t}`)
  }
  static async claimRewardById({
    userId: t,
    rewardId: s
  }) {
    return I.post("/users/rewards/claim", {
      user_id: t,
      reward_user_id: s
    })
  }
  static async generateTonProofPayload() {
    return I.post("/wallet/ton-proof/generate-payload")
  }
  static async checkTonProof(t, s) {
    const a = {
      address: s.address,
      network: s.chain,
      proof: {
        ...t,
        state_init: s.walletStateInit
      }
    };
    return I.post("/wallet/ton-proof/check-proof", a)
  }
}
const pl = "/assets/icon_stars_new-Dk8ap_HZ.png",
  hl = "data:image/png;base64,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",
  gl = "data:image/png;base64,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",
  _l = "data:image/png;base64,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",
  fl = "data:image/png;base64,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",
  xl = "/assets/icon_anon-B5YvKg3f.png",
  vl = "/assets/icon_cati-mWXfw3xk.png",
  yl = "/assets/icon_x-DBD55XHy.png",
  wl = "/assets/icon_major-BvjI4Z5H.png",
  jo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAADDklEQVR4nO3dsWsTURzA8ZwUHMQudhGyiItWXISCKHYTNIKD4OLiLHQpqAi6OAiijoH+CU4OCtpBcGipg4jgUt0czGiXQpGCcM6p8fe4vtwl1+/3s75c07v78uBe7pKOJElCKvbudFmWrT4ORVHUugNlWf5zzNqkKIb//UNt3hnlMwA4A4AzADgDgDMAOAOAm8Q17UQXGtY2roXjixffNva//Eej58QZAM4A4AwAzgDgDADOAOAMAG6m6u6XL66H48XdN+F1fmr7lOevN8JX3F/fyvr7KVe7h8NXnJytfEiH9Dd3wuO3NH8kXCfob+5Uej9nADgDgDMAOAOAMwA4A4AzALj9fPY80ev8M4lmP/7aDccvzMXX8bnb939sh+NjWCdIvaTSOXUGgDMAOAOAMwA4A4AzADgDgBt1URpe57+6vZB1xFLX+W137mi8TvBlO15nSK0TpO5HWB3spp67GFoncAaAMwA4A4AzADgDgDMAOAOAq/zh9I2zx8Pxuj/P771/EG9/+Wk4nqv3cjnr/ZdOzIbj+fcTxMdvL2cAOAOAMwA4A4AzADgDgDMAuFH3kIefJ3++1Q2P2Iefv8Px1DpAb+VUrWfk3Z3vU/3+uesAVZ8bcAaAMwA4A4AzADgDgDMAOAOAy3tYfQKm/Tq+7vcfN2cAOAOAMwA4A4AzADgDgDMAuKlbB3h082s4nvqevrZv3zRnADgDgDMAOAOAMwA4A4AzALjG1wFyn68/6Nv3zz8Ox8fNGQDOAOAMAM4A4AwAzgDgDACu8e8HuLcyTz/mod6VT+G43w+gsTIAOAOAMwA4A4AzADgDgGv8foDc5+sP+vZNcwaAMwA4A4AzADgDgDMAOAOAG3U/QEp4v8CzS8fCzXN/NzD1fH3bt0/9XsDqIPm7gJXOqTMAnAHAGQCcAcAZAJwBwBkA3H7WAVLCdYKHp+Pfz6d78i1eB1jszoTnbG3wp9IRdAaAMwA4A4AzADgDgDMAOAOAq2MdICVcJ1Cz58QZAM4A4AwAzgDgDADOAOAMQJIkiabT6fwFAeCnZalTAZIAAAAASUVORK5CYII=",
  bo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAABXdJREFUeJztnV+IVVUUxu9t9N4sshLJlEntLSptnIcgoRF7GANn6MEnBxRCiP48Rr1EPgS9CBHkQ4kRPli9F0PTGElCKYjjH3QEBxFmrg53YJwgU+6E3F4KWuvYXne5z/bc4/f93tY9+5y97+VjrbX3XmffSoUQQgghhBBCCCEoVIseQCztdrvtaV+tVkv9na3v6/1+D8QNh5QdCgAcCgCcJUUPIG90DPTmCGjQA4BDAYBDAYATnQPExti85+Wx4+n2nCHv34seABwKABwKAJzc1wE+3bFD2KeuXBP24YnjufaXem2/6K2D1CkJPQA4FAA4FAA4991egBfvvD/TfPKVqP4XJy4Ju77ratTzvNADgEMBgEMBgFN4DqBjcNE1e7r7vOfhVsyP7c/7e9IDgEMBgEMBgBMdb615tHdvIHUO0EFdvW4vGzjn/aljfuzvRQ8ADgUADgUATvQ6QNnr8FPP+621fW8Iz3t89ADgUADgUADgFL4XkJronCRyv799Yav84Nmfg+0XD/cKO3V9AD0AOBQAOBQAOPd9DqBJPe83UTlF6r0CC3oAcCgAcCgAcLouB7jX5w3kXX6QmfcrYmM+zwcguUIBgEMBgJO8JlBj1QhOPtIXvP/0sS90/57uo/HWDHZbzNfQA4BDAYBDAYDjXgfw1tW/8e4hYT9jPP+jD94KN1DX+7dIu+gcodtjvoYeABwKABwKAJw83gsQto75w4ObhD114Lvg8/Z+/Lmrf50z7DXG580JrPutGr5ui/kaegBwKABwKABw3PHnDmfQiOvf/3hW2Dqm71o5J2y9F/D1iVPB/vfV5Tz/24GTwtY5wfC2F4Sddw5QeI2hgv8bSFxQAOBQAODkngPMNGUMXL4mrLFlX0q7NqKWJo4susa3b+grYb9f2SPsDublwfbJzxOoL3O1b7VuBa/znEAShAIAhwIAJ/k6wKuDzwn75pKlwtY5gKZnt4yxPT+EY257XMXsz6TGvTlA5vmRMd+K8a33BoLXZ3/9Sdjrf6vJ+505AT0AOBQAOBQAOMlzAI3OCSzGxi8Erw+NbhD23EG517Dq1pPCTr1W743xOqZ7OdpcLezXL8/L/lROwByACCgAcCgAcJKfD9DXt1HYY+PnXPc3rl0X9vzvN4T94sFVdzewu8SK8Wt7nxf21M4Vwo6N+XlDDwAOBQAOBQDOPT8jaGhwY/B6Y05/InMGnQNoPnx7TH7wSYcD+wcrxm/esN31vK1qOI2FfmEfWzsRvF/P8yeur/iflv8yb1yX0AOAQwGAQwGAk8kByvafP15i1+pH/ojrv/fxdcI+2pwVth3jJfsXpqLGQw8ADgUADgUATqYeQOcAo0/L/fuXZy4GH/jobZlC6PoAvTdgceaMXAc4Ozkt7OmGnPce2v9m8Hl578drBqb77Ub/4bU/W8HrVoy3agA1rAcgAgoAHAoAHHMvYPuVcE1edTR8//A237t02b2AMDrme+vqY9Fr9V5Sx3gLegBwKABwKABwMjmAjiF6XWDuoaZoL61KZeUNWYff05LvAuZ9LF6t9mC4wchfwlw9skXYs+/8ErzdvR//sDSnG+eDzVPHeAt6AHAoAHAoAHDcNYFP3LTq8OU8vy1fX69UW+oDJ83HZoT91O31wfb1TceF3Tr9krD9NXeSzDx+QZpFx3gLegBwKABwKABwzBwgNibpdYR2LXzuX/XA5uD1TA5Sdw7oG7kuYcX8otfqU0MPAA4FAA4FAE7h8Sjv9xC8Z+1alD3GW9ADgEMBgEMBgFOqeNUJOqfQOYE3pluULeZr6AHAoQDAoQDAKXX8uhPWukLsOoF19m7ZoAcAhwIAhwIAp9TxqxNSn3nEHICUGgoAHAoAnL8BF6DwHlKpItgAAAAASUVORK5CYII=",
  No = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAABkxJREFUeJztnW9o1WUUx383l6O2LDJYupArMReMDGER+qZNEaIWxCCoRX+kLKOYe7E39iYEIYgFaWYLsaKIiJhBzQgiNaJkFeQEVyMYw1IbpZbNxLvWen3Obz2nw/PcP+v7/bw79/nd5/7u5cs55znPeX63kEUyNzc3F/P+QqFQiL0HD9b96vuJ/X6xlPv3uayck5PahwIAhwIApy71hPX1VwTHL126KGwdYyudE3jpv3510vkGfj4WHE+dg+jflx4AHAoAHAoAnOQ5gI7xGp0jVDonSD1fLoaPrRfmzMsjwt42dGNwvkrnGPQA4FAA4FAA4ETnAFbtvKuwVFw/2VESto55VsyKxcox3Ovu2U71QtoyRuocQ38/egBwKABwKABwcjlAtfe/Lbz3p2O8tw5g5igqJvev/1XNELnuV/Onhh4AHAoAHAoAHLMO4N3fT40V8629heQY6/6Bg9fJ4VZ5+zO9Xwlbr9sHTsq6STYuzdgcQ+cw9ADgUADgUADgmDlA7P7+/43+5jPB8VwOMO7cGzCuj80xNPQA4FAA4FAA4ORyAGt/XMf8yXXh/X0v1rrVm3PE9hha/QnW93Wv23PXh8nlBE7oAcChAMChAMBJfi7AYvPha4S9t+O4sF/4rk3Y3p7Cl879EPz8avc7WP0EGqvnzxrnuQAShAIAhwIAp+w9gTc1NQv7+6mTKafPcfab3cFxq79B493b0DE5t+5PfI7AG/M19ADgUADgUADgRPcEFr9cLOzJdeF1fbk5feyIsJetXitsK0fQeHOGbKhFmN51v3fvQOPt4aQHAIcCAIcCAMe9F6Bj6LXtTye7mf9Cy8R98oV6aQ4+o9ftB13zTw3LGO3NGZ7duFO+4Fz3584FLDokzJmnGoSt6wAHtt4u7Lt2fhb8PHoAcCgAcCgAcCreDxDLquISYY9selXYi3vCX+n3K/8S9vLm+4Xd1OXLGTRblB1/joDPByBlhAIAhwIAJzoH0Ovk872PC3uw/mb5hhXSbplQE6p1vb5+lXE/OsZrrv5TfuU1G2VOcfgLmVNoGkuyXWLJyh5h3/HQ8uD7P37zVHDcQq/7rc+zoAcAhwIAhwIAx/18AL3frHOA3P6/iukX9rwd/LzSL1KTFx+T4x3FJ4T9/G8fyAsGpLmt925h79i1X9hD2QFh67pAjpXh4XveXRoc35L5cgDdH2DFfF37t3oa6QHAoQDAoQDASb4XsP2TrcIeVLX1H2+V1x89KnvmrJievS9j9sM9XcH5vJzb/o6wdQ6i0XUFTUPLveEJ1DN+9N6BFfPXPqjmN/b/+b+BREABgEMBgOM+F+DtkdM9dtnUPmF2LpPDo2NNrvmtmP/crg9d85k5SI5uYe3Yo+oMRZmz5J79q2K+zqEsjrz1nut6DT0AOBQAOBQAOHXVfmbO7JrNwu77dm/w+r4N7cI+dDrt/Vh1hdGxE8LWMV/z+e529Yq2JbEx3Qs9ADgUADgUADi5OkDsut/LIiPm6xxB02m8X9cZXvw0XGew6gp9G6aC45pKx3Qv9ADgUADgUADg1PzZQCtHaGx90jXfdPaKsHVdIcu+Dr4/NqZb5/U1+rx/augBwKEAwKEAwDFzAOsZQOWuE1y4TdbmG0aGhT09LmN6LN4Y743ptQY9ADgUADgUADi5HMD7fHy9d3D8tQeErZ/V60XH/Fh0jC/eckPS+TXWOr7aOQQ9ADgUADgUADh13v/S9fYQ6uf3T47+JOzc2TYnjSceFfb0in3/ciWZD3oAcCgAcCgAcCreD6DX3bE5ghXzK73u11R7nW9BDwAOBQAOBQBOzfUEenMETWxdodKUu+fPgh4AHAoAHAoAnJrLASysdXylz+JVO4bHQg8ADgUADgUAjqsXIMvsfgDr/+s1uoew2lh1hkrj3Uuwejr5rGAioADAoQDAcdcBdAzROUFpv+9cQVv3ws4ZvKSO6RZWzyc9ADgUADgUADjp9wJe/yg8vulOYZb+mHVN33ZV+H8HNeXOGWotpnuhBwCHAgCHAgAnOp6k/r+B83VhTer/6RtubQle331qIvqeQtRaTPdCDwAOBQAOBQBOVePPfHhzipk3whq+/JG/g9fr8ViqHdO90AOAQwGAQwGAs6Di1XykrkMstBgeCz0AOBQAOBQAOP8AhMYQP5QZrUAAAAAASUVORK5CYII=",
  Co = "data:image/png;base64,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",
  dn = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACABAMAAAAxEHz4AAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAABhQTFRFR3BM////+8sH4qsEoJDhMJjTe2y0AAAAichSjAAAAAF0Uk5TAEDm2GYAAADISURBVHja7dkxCsJAEIXhdNZeYRDtkxMIQzzB4gVkbCUK7/oOrEZHgq2z8v7mscV+TaqwHWMsa6hNIoKQiOx8CKQHVgCGWl+BaWlAIC8A4DqEHl/+YypyIUCAQCtAL3MEGgVEZGtmmLupqohsfOARSA+IZ2YnVfU5AyilHH1U9VBPhUATgKqOZlavPHs7EUgOeBXZ6JcINAisQwTSA4h/rqq69ysEmgGi8wJGM4tD4J+BGGqLALzOI5AeiE6s8wj8GuAjEmNZuwMoowLyPmOZ5gAAAABJRU5ErkJggg==";
G("main/startTransaction", async ({
  pixelId: n,
  newColor: t,
  buyerWallet: s
}) => (await W.startTransaction({
  pixelId: n,
  newColor: t,
  buyerWallet: s
})).data);
const jl = {
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
        image_url: dn,
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
        image_url: jo,
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
        image_url: bo,
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
        image_url: No,
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
        image_url: Co,
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
      image: pl
    }, {
      currency_id: 2,
      name: "TON",
      image: hl
    }, {
      currency_id: 3,
      name: "NOT",
      image: gl,
      master: Rt[3]
    }, {
      currency_id: 4,
      name: "USDT",
      image: fl
    }, {
      currency_id: 5,
      name: "DOGS",
      image: _l,
      master: Rt[5]
    }, {
      currency_id: 6,
      name: "ANON",
      image: xl,
      master: Rt[6]
    }, {
      currency_id: 7,
      name: "CATI",
      image: vl,
      master: Rt[7]
    }, {
      currency_id: 8,
      name: "X",
      image: yl,
      master: Rt[8]
    }, {
      currency_id: 9,
      name: "MAJOR",
      image: wl,
      master: Rt[9]
    }],
    limitedGood: null,
    limitedEnd: null,
    showLimitedGoodPopup: !1
  },
  as = G("shop/getProducts", async () => (await W.getProducts()).data),
  is = G("shop/useProduct", async ({
    pixelId: n,
    productId: t,
    color: s
  }) => (await W.useProduct({
    pixelId: n,
    productId: t,
    color: s
  })).data),
  Io = _e({
    name: "shop",
    initialState: jl,
    reducers: {
      setProductCard: (n, t) => {
        n.activeProductCardId = t.payload
      },
      showProductCard: (n, t) => {
        n.show = !0
      },
      hideProductCard: n => {
        n.show = !1
      },
      increaseAmount: n => {
        n.amount += 1
      },
      decreaseAmount: n => {
        n.amount > 1 && (n.amount -= 1)
      },
      setAmount: (n, t) => {
        n.amount = t.payload
      },
      setAvailable: (n, t) => {
        n.available = {
          ...n.available,
          ...t.payload
        }
      },
      addAvailable: (n, t) => {
        n.available[t.payload.product] += t.payload.amount
      },
      subAvailable: (n, t) => {
        n.available[t.payload.product] -= t.payload.amount
      },
      setSelectedCurrency: (n, t) => {
        n.selectedCurrency = t.payload
      },
      setLimitedGoods: (n, t) => {
        n.limitedGood = t.payload.good, n.limitedEnd = t.payload.end
      },
      clearLimitedGoods: n => {
        n.limitedGood = null, n.limitedEnd = null
      },
      showLimitedGoodsPopup: n => {
        n.showLimitedGoodPopup = !0
      },
      hideLimitedGoodsPopup: n => {
        n.showLimitedGoodPopup = !1
      }
    },
    extraReducers: n => {
      n.addCase(as.pending, t => {
        t.getProductsStatus = p.pending
      }).addCase(as.fulfilled, (t, s) => {
        s.payload.goodsAvailable.forEach(a => {
          t.products[a.id] = {
            ...t.products[a.id],
            ...a
          }
        }), t.getProductsStatus = p.fulfilled
      }).addCase(as.rejected, t => {
        t.getProductsStatus = p.rejected
      }).addCase(is.pending, t => {
        t.useProductStatus = p.pending
      }).addCase(is.fulfilled, (t, s) => {
        t.useProductStatus = p.fulfilled
      }).addCase(is.rejected, t => {
        t.useProductStatus = p.rejected
      })
    }
  }),
  {
    setProductCard: it,
    showProductCard: ot,
    hideProductCard: ci,
    increaseAmount: BM,
    decreaseAmount: TM,
    setAmount: na,
    setAvailable: bl,
    addAvailable: nn,
    subAvailable: sa,
    setSelectedCurrency: Un,
    setLimitedGoods: EM,
    clearLimitedGoods: kM,
    showLimitedGoodsPopup: Nl,
    hideLimitedGoodsPopup: DM
  } = Io.actions,
  aa = n => n.shop.crypto,
  Cl = Io.reducer,
  ia = {
    getProducts: as,
    useProduct: is
  },
  un = ({
    fontSize: n = 18,
    className: t = "",
    style: s = {}
  }) => e.jsx("span", {
    className: `telegram_icons ${t}`,
    style: {
      fontSize: n,
      ...s
    },
    children: ""
  }),
  Il = () => {
    const n = c(s => s.shop.selectedCurrency),
      t = c(s => s.shop.crypto).filter(s => s.currency_id === n)[0];
    return n === 1 ? e.jsx("span", {
      style: {
        paddingRight: 4,
        marginBottom: -4
      },
      children: e.jsx(un, {
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
      src: t.image
    })
  },
  Je = ({
    num: n
  }) => isNaN(n) ? null : new Intl.NumberFormat("ru-RU").format(n),
  Po = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACABAMAAAAxEHz4AAAAIVBMVEVHcEzv7++7trv/sQAAxvb+XTUAieJkY2UaWbc9OGcbGx4WugEBAAAAAXRSTlMAQObYZgAAAM1JREFUeNrt2c0JxSAQBOC0YAu2YAu2YAu2YAu2YAtW+Rh4gUE0Iddh9rLBON9pwfxca8055/WhDOgBCJdSygmZ/zKgDaCewrXWmnPOuDagCpwxDqN67x1rBnQBDmMzh9ERHmMMA5rATrzD6LuwAS0ACymlhM5rrbWGjiA6hw3oAag1HGOMfLDwYWJAF+BwCCGg80DxIBlQBd7DPGwGVIH38LrXgBLwPcwfqwxoAfxAsQufBsmAFsDIGj5BBrSAFUHtXkgNSAD+B2vg6f4Pseby+y+jC6sAAAAASUVORK5CYII=",
  So = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACABAMAAAAxEHz4AAAAFVBMVEVHcEz/3Jr/6ADjygD/AAC5AAAAAAB/sfDAAAAAAXRSTlMAQObYZgAAAJJJREFUeNrt2bEJBCEQQNFrYVqwhWnBFq6F338Jx4IiyIG76ez/iRjMiwyE+Zj9i0MC9QGA7yEAgarAGu6HJiJQHTgnICAgIFAbAHgGrARqAACZmROIiAC4zt573+8TaK01gWLA6O5DyswUqAVcMXoCzGGBCsBqAjGCVYz2D4ZAbWBP4EXA6AQACJQB3LEImO39AJS0GBsvGYIKAAAAAElFTkSuQmCC",
  Bo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAABVQTFRFR3BM/////2U1/z4F3SwBrB4AAAAAkQwbPgAAAAF0Uk5TAEDm2GYAAAEVSURBVHja7dvBDsIgEEVRZbD//8nGQjKlY6aMGMrivuDC14BHxIUmfRBCFss2IQAAAHBfOU2IOi4B8hmSTJzSmR8FaGSsTDIAiO6A38YBksYi8TNgMrgDKboDE7bABcietA+RXNO2sdK2PkBzWkATKE0LAAAAAAAAAAAAAMAl4DkhAAAA6AFsbcxFa+2ZDwAAABfgrGramEpbAAAA/BnQPgMAAMBNAA0AAADc+fw6BgBgMQD/FQMAAAAAAAAAAAAA4AJyk1dN28ZK214ApIx2gdqVR7jUVjoAGtEFikdZgVLbEuncgfM7OKwcLLWtF345A3JcIly+DijpOwNfP8Nc60CprfZ5lW8Bd9kAAHAfgNtKCVksb9I6sf1BNvNjAAAAAElFTkSuQmCC",
  Pl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAAp1JREFUeJzt3bFq21AUh3E7lJrMnbp1LXmDDskDZSx5CtOpZMybdGmgGbOFQKdufoAMwV7cWcfgy0X3Slf3+36bkCIJ8ufcoyMbr1aSJEmSJEmSJKln67lvoHXH4/E45fXW6/Wk/5OLKS+m9hgAOAMA92HuG2hNas3fbC6LXm+/fy96vlxWADgDAGcA4LrvAcY+x8c1f+yaXbqHGMsKAGcA4AwAXHc9QO3n+NTfj+0R4v3XfjdgBYAzAHAGAK67HiDX/u767P7N9nGw/e/b4fzxiblB3E4dX7snsALAGQA4AwDXfQ9wssaGNX/359dg+/P9zfAE29XZ/bvb3+NuMCj97iHFCgBnAOAMANzie4DSn9s/PP8dbL89fCp5+hN+JlCzMgBwBgBu8d8NjD1A7nP/WF+ePg6vl1jTp/7uX4oVAM4AwBkAuMXPAUr78Xp1dv/3ry9Z52ttzY+sAHAGAM4AwC2uB8id/Zd+7u+NFQDOAMAZALjF9QDR2Nl/6rk/yp39t84KAGcA4AwA3OJ7gNri7P9n6AGi1mf/kRUAzgDAGQC45nsAZ/91WQHgDACcAYBrvgeInP2XZQWAMwBwBgBucT1Abb3P/iMrAJwBgDMAcM31AM7+p2UFgDMAcAYArrkeIHL2X5cVAM4AwBkAuOZ7gNpos//ICgBnAOAMANzsPYCz/3lZAeAMAJwBgJu9B4ic/U/LCgBnAOAMAFxzPUBt9Nl/ZAWAMwBwBgCu+R7A2X9dVgA4AwBnAOCa7wHibD/3d/vi8fTZf2QFgDMAcAYArrkeIK7J8fMBq8z3/bl6n/1HVgA4AwBnAOBmX+9yvxdw0hNkSj332wMIxQDAGQC45te73B4hF23Nj6wAcAYAzgBIkiRJkiRJkiR17D/jkLq5vlfVpgAAAABJRU5ErkJggg==",
  Sl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAA39JREFUeJzt3LFrFEEUx/FdUS8RUlwpLNFGIYiFpjJFQCytbNPG1ipa+wdEq2ut06cQLLQRPBvFQkVIGpWAjZDCIhyCa5v3zuxkvL3bmft9P93cXnYn5Jc3b2ePKwoAAAAAAKCi7HoCqanrup7l9cqy7PRvcKbLi6N7BEAcARB3tusJdC205vd6i61ebzQ6avV8k6ICiCMA4giAOLkeIHbNT23NbhsVQBwBEEcAxGX3LKDtvfppr/ld7/WHUAHEEQBxBEBc8vsAbe/Vx67xk57fzz+1noAKII4AiCMA4pLrAaL36h+tR50/tKa3ff7UewIqgDgCII4AiEuuB/CCa/LGb/v+G2/bvf7268bjow+37Liw80v98wVUAHEEQBwBEJd8DxDLr8ljds6ZoV/jQz3GvKECiCMA4giAuPx7ALemh4Tu68d6giLuWcCPNy/dK+ejfn7WqADiCIA4AiAu+x7Ar7mvfv4x4829BTP29/mhfQB//EH/SuN8tlYaDyeHCiCOAIgjAOKy7wG80Jo/tre/XTQeH3u+H9kTpI4KII4AiCMA4uauB4gV/PzAnKMCiCMA4giAOL0eIPLzA7k9349FBRBHAMQRAHFyPYBf059+udb4/tye78eiAogjAOIIgLjseoDbL5bMeGfphDd2ZP37TffKp07mcVpUAHEEQBwBEJddD+Bt/LpnxsvVt6leb+36XTPePZzu9aaNCiCOAIgjAOKy7wFC/L5BUdieoajs8MCt6bvuvr7qtzSxRFABxBEAcQRAHAEQRwDEEQBxBEAcARBHAMQRAHEEQFx2zwJWD/bM+H11taOZ/NvjC+/MeLNYOOGdaaACiCMA4giAuOx6gCf3L5rxw2e2Jxge7ptx1b/U6vWHH5+bsf+ewDvL7n/KTi85VABxBEAcARCXXQ/gba18NuPB0H6Hj983CFkNHB9EnS19VABxBEAcARCXfQ8Q4vcN4r8jqLnHyB0VQBwBEEcAxBEAcQRAHAEQRwDEJb8PMBodmXGvt2jGX9dmOZuwy26fwM8/NVQAcQRAHAEQl1wPUJZleXxc13V9fBzqCWZt4D6DGFrz/e/XNSqAOAIgjgCIS64H8GJ7Am/SfYNJ7+tTW/M9KoA4AiCOAIhLen36H75H8GL3DXK7r49FBRBHAMQRAHFZr1+nEeoJYuW+5ntUAHEEQBwBAAAAEPQXKwzH8ovgV5cAAAAASUVORK5CYII=",
  Bl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAABXtJREFUeJztnU+IV1UUx9+INDrgYsLAkfGnBZqgQ4muXCTjIkSFaBNks2qgTUQQE0SbzI2KuhBp509QyxAXImgM6hgKJpGVUWk6+Scd/AU5zmJwnN8IjgtX5zznHg/3Xn+//H4/u/Pe+937hvlyznnn/isKQgghhBBCCCGEoNCSu4PJycnJnO23tLRk/xueZ6Y1+gVIY6EAwKEAwEkeP62Y39o6M6r9ev1+8D5zAh/0AOBQAOBQAOBM9/7A+12vY3510biwew52C3vilyvC/rzvxWB7OifIXXdodrw5ED0AOBQAOBQAOGYOkPu7vm/1HXVFxvzXX/pd3h6Z4erfqhvEvn+jsf4+C3oAcCgAcCgAcNx1gNJ3+KdvyAc2PBCm9V2//dRs4/ku2d+v1vO+uoFmy/q1wfs/X78t7K17PxH2rWv/BH9/+eIlYZ84dFHYy1+eG/z9Z0e/C973Qg8ADgUADgUAjlk31nUAKweonT0p7IE7D4PtX/ivK3jfi64b9F6RdQOdA6SuA1w7v0/YJ4/2C/uDjQeS9qf/Ho4FEBcUADgUADjuOkAsPW+9KW2jbjBcrQl7x6UlSd8ntpaee45jbugBwKEAwKEAwInOARZ+e1fYZyq+39c+PC1sq25g8eXYCnXlj6j2/m/ouo1VF6AHAIcCAIcCACd5HWDD6NvCHhqT4+M9ke3vGhkUdqVzaWSLYXLPGUzdvreuQA8ADgUADgUATikHyL22rrt/lroSzhnK5P2u1zF5fLh/iiefzI8DPwXve9vTDGzaLOx1O09P8eTTQQ8ADgUADgUAzvTYtX+D78p5+N1xIS6aL9rOC7u3mDHFk4+xYv7Y9b9d/Xe90q7slVHtndt/yPW8F3oAcCgAcCgAcEp1AGstnZUTHJh1WNgDdTm+Xy3mu15Q81H7QnnhXl3abVHNF1eP7Bf2jd+GhL3gtc64DhS527egBwCHAgCHAgDnma8L+H7NqLBLawnrxlrCe2nXEsay5P1vXM//uee9TG/yZObMe1XUef69dVnMEaQHAIcCAIcCAOeZ5wCNJvccPx3jvTmChXf8v3bzL2F3VBaLnIAeABwKABwKAJyGrw1MjbU2MPceQaljvubYx6uErXMCayxH5wT0AOBQAOBQAOAkrwMs+OGF4P3ebWfUlfDzZQbDt0fCt62Y3+y1fQsrx9H36QHAoQDAoQDAyT4WoPcS1nUDC73uwEvu/lpVzqC/05sdegBwKABwKABwonOAm0Oy1n5j5YSw9X4Ane16fwCJXldQO+t7H71HUer+Or5SMX7bU79aEnTtn+cGkigoAHAoAHBKOUDq8fKhEWvPH4m1LsDsz9xjKK6/d9R5Bhodo2PHClLHfA09ADgUADgUADilveS9ewbpWn95H8Aweq2gl9z9fX3kuLD1OYf6nEKNPrfQizfme89KpgcAhwIAhwIAp1QH0GfMWDmBXt+v9/61KP/eS9r+dK3/wm4Z87efmi3svtXh+73Lzgm70ecE6v8vPQA4FAA4FAA40fMB9Dl/uWvxmtT9lWv9co5gq4rpml3LjHULifF+92voAcChAMChAMCB2yPIYrhaU1dkDqD3KtZjAXqsQJ9z6MWaj2HFfJ4dTIJQAOBQAOAE40NR+OcH6BjpjYGl8wCc5O5P1/qtukDsHEvvd31HZbGw9d7AGnoAcCgAcCgAcMw6gHd+gKbSudT3RvoMICe5+5sw1gVYMTv1fABvzNfQA4BDAYBDAYDjihdF4a8LVBeNC7u8l28YfRawl9T9WbV+HeN1jE6NN+Zr6AHAoQDAoQDAiYofRVHOCXKfydNsxI7HNxp6AHAoAHAoAHCS5wDoNHvM19ADgEMBgEMBEEIIIYQQQgghhIDwCOGz0zOqwEkRAAAAAElFTkSuQmCC",
  Tl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAAw1JREFUeJzt3b9rFEEYxvG7ICYGbASLQCB/gAgp7AKCIGInVkJIl3S2Z2MjloF0tpZX2aWzEIJFuiABu6QKRFKkSBGInBZnPe/JLG9mbmdnn++nm/sxuwkP7/tmudwOBgAAAAAAAAAAAAAAAAAAoA+GpU8gt+l0Op3n/sPhsFe/s4XSJ4CyCIA4AiCu8/0stacvLt5LOv5k8jvp/V2fGagA4giAOAIg7k7bB2y7p0/ePQ0f2PwbLP/8OAnWX3Z/pR3PzAzen7ftmYEKII4AiCMA4pL7TW09/fjycXT/vZ2VpP23T5ai+1ulrzNQAcQRAHEEQJy7fzT1/L719NpmBu9MQAUQRwDEEQBxyTOA7fnqPT33/u9HD4L1p6vTYG1nAmYAuBAAcQRA3NxngIvDb9H9Vjaehw+I9fT1hz+j+9vjMwMgKwIgjgCIa/0zgU0u3n6PPr/16kW4bui5492wxx5/tj097Ml7O49c+49G4W7r+/Gebo9XGhVAHAEQRwDEdW4G8Mo9M9Te072oAOIIgDgCIK76GcBr/Oag4RV193QvKoA4AiCOAIjLPgM8+3rfPPI6WJ1fnQXr043cZ1CXjzdPos+vrq6FD5jPA6SiAogjAOIIgLji1wH6NjP4e/rZ/1/YEiqAOAIgjgCIKz4DeLU9M9TW072oAOIIgDgCIK66GcDLzgznlfV0O9PkRgUQRwDEEQBx2WeAg5fXwXrm+wHMn/Gb16bn9pzt6R+Wj6Kvn/l+gMznQwUQRwDEEQBxxa8D1D4zpPb0wXLuM/KhAogjAOIIgLjiM4DXvGeG2nu6FxVAHAEQRwDEVTcDeNmZYbzf757uRQUQRwDEEQBxyTOA/b762fsG3o2/v+P/6zdvzfcNjN8fIBUVQBwBEEcAxLlnAHtPGnsPIW+P6tvM0HZP994jyKICiCMA4giAuOTrAN4eVNvMUFtP96ICiCMA4giAuFb7zW3YmcFrdmbwqa2ne1EBxBEAcQRAXKf7022kzgxNut7TvagA4giAOAIAAAAAAAAAAAAAAADQM/8ACXZHRjaU+NYAAAAASUVORK5CYII=",
  El = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAABXVJREFUeJztnTtoVEEUhu9KdBVNEdEiImijIOI7jQlETCGigpWFz0JLFQVjn8pKC1FLbXyhqQIqYqFYiI2PoAbBNBoiATFG8EUEifU5V+ZwmJndu/7/1529O7uT8HP+szNzz60VYMzMzMzEjK/VarVUc6kCs5o9AdJcKABwKABw/is/Kwq/x9fr84LXp6d/ub6/1WoEZgBwKABwKABw2po9AS/JPf7lZhH/fvHON17VCNb8qlYjMAOAQwGAQwGAU/kawPLUWI+fOPpYxOferlbjVwbHt3qNwAwADgUADgUATqV+k/4L7Znacy2Pn7w8IWLt8WcfLso6vv3IZBHC2mvIXRMwA4BDAYBDAYBT+XUAkxuzRTj5RHp256UtIj5TWgcYEXHZ4+U6gHe8dx3Be/4gFmYAcCgAcCgAcFq+Bth6v13E41MbRTza5Bqhv0/Od/3ij/KFYm7RTJgBwKEAwKEAwKlcDRB7754md41gefzQ/E4Z/+xSM3xTmnMjYQYAhwIAhwIAp+E1QOpz/Y+2fxPxxJMXIt73bVlwvLdGuD3k9fg49P8r9fkAZgBwKABwKABwstcAsef6vzy7GLxe7zqmXpkjounTcTXCiptf1Cs+j9/9Y1rE6xe/FvERtRdgnQ9IXRMwA4BDAYBDAYDT8HUA7XGWx1vkrhF6x+S6gMb0+HG13z8lY3P+mc8MMgOAQwGAQwGAk7wG8K71P706GLy++eCeqPnE1wgLRXxt6IGIYz3e+vtzwwwADgUADgUAjrsGSL2fv3zd0uD16tUIaT3+3rPvIt7RtSD4/tQwA4BDAYBDAYBTqgEa3Yu3/fD14PiRK/uD15tdI3g9vmowA4BDAYBDAYDTVvVevM2uEVrd4y2YAcChAMChAMAprQN4e/FaHp+7z17uGmHn+cfB616O9mxK+nnedRt9HwEzADgUADgUADj2eYAW78WrawSrJtCef7xjRfD9p1bJ+en/R33D0+B46/s11rqMxrq3kBkAHAoAHAoAnPj7Av6zXrza8y2P7++T8y36Pgc//9PXPyIeHBkOvl97+J0Hr0S8a9taEesawbq3kBkAHAoAHAoAHLMGMPvo9RgfkLkXb1EsLFKinwNoebzuB3Dg1lYRX9gw6vp+6/7/gYGTIt617WFwvLVuwAwADgUADgUATvQ6QOoaQffitTx+aH5dxpH9+PudHt/ft0bEw2r83ROyxtEMymUG83f+6+dyb6GrWxVJTpgBwKEAwKEAwDFrgOz9+I0awfb4tJTXAcIev/3QkuDnec8Uas/XePsEch2ABKEAwKEAwIleB4itERrdj99CrwPEerzl2d79e+95AAtmAHAoAHAoAHCyPy/AqhFi+/EP/5C/0y1Wq/sE9Fq99vxYj7ew9u+9nm59voYZABwKABwKAJxSDWCfKVP99K39foPRveF+/F6Pt/CemfP+jveOj32/F/YHIAIKABwKAJw27Qn6/nG/B6atESwuTKlz9+qZPdb8Yz3+fffvqPHW98c+G9iCGQAcCgAcCgCc0jqA5TmNrhFiPd7C8ujuNTuD13vHPohY712871YH/43vz70OoGEGAIcCAIcCAMd9HiB/jRDn8d79c+t3/Lm3sl+Bvk9haYc88/i8Q47vHZPv1zVCUfj6B6SGGQAcCgAcCgCcrOvM/8Lb396L9bwD6/kGGt0nUKPH6xphbNzXn0DXPNwLIFmhAMChAMDJfl+AJrWneWuKci9i2Q/AWyOU9ypk2Oi1fS/MAOBQAOBQAOA0fB0gNamffaz7A5Q8Xo93enzu3/VemAHAoQDAoQDAqZQfpcC7LpD63r6qebwFMwA4FAA4FAA4LeVXKYg9j9BqHm/BDAAOBQAOBQDOX/7wrWuOIpDoAAAAAElFTkSuQmCC",
  kl = "data:image/png;base64,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",
  To = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACABAMAAAAxEHz4AAAAJFBMVEUAAABHcEz//////wC4uLj/oQCampoA/wAAmf//AP9SUlL/AACcsFD9AAAAAnRSTlP/AOW3MEoAAADGSURBVHja7dlBDcMwDIXhUCgFUxgFUyiFUBiFURiFUhi5vUm2FFlJc97T+y6Vmvi/+pB2TLSF6V0FqAJt4AOD/LaBAnyBOnQtjMEGCvAEfmZDz/AKV5ERBXgCBlc44RFq5A0K8Ac+cMIuogBnwMGCw13EQwcFuAIdPNhCDiUF+AL10Cd6YaAAV8CgXF6yoABfoC6WZDccFOAKdIiBLQ8dFOAK5A/fqMtHAZ7AAUPklg9yVgGeQEbqovGiPlAo8PcBvbkqMPoCnDifKjhoeKsAAAAASUVORK5CYII=",
  Dl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAABMZJREFUeJzt3b+LVGcUxvGZZNlFXYlEyKi4aQMxmEljkVgEBQXRv0HXQiFtNJ1VOjFlfhjEKJZaKUpMoWglKriKjYUWGlw34EJsRDFM6vNc8549vHfG7JzvpzvcmTv3Lof3nPve997tdAAAAAAAAAAAAAAAAAAAwDjojvoHB4PBoM39dbvdkZ/DOHnvXR8A3i0SIDkSILmh10+v5r+YsDn4wT/24we+PWXi48f2tnNg/yFbT8EIkBwJkBwJkNyE94G2r9ujNV95JfrC5bs2/uOOiX/9YZ+J9fS88x23HoERIDkSIDkSILlGPdMa2H09WfUDg8nXJtYe4OuvDha/f+f6L8XtWvP7/c0m3vhR+fgOHjptYq9H8Cy3HoERIDkSIDkSIDm/Bzj+ZXkPs7dDP/j3yjfF7TovoLyar7wewDPuPQIjQHIkQHIkQHJuDxCl1/lRw+4BtKZ7vPUHbfcIatg9AyNAciRAciRAcm4P8Pth+5Htm8ol6drsJ8XtW95/YOLoeoBbt24Ut58/+7OJtQfQkqo1Wmu61wP8+Vdxc2du7p6Jo+sTPLU9AiNAciRAciRAcuF5gGhP4JmcLfcAXs1X0R7Ao38Or+bX+v7oaO89MAIkRwIkRwIk5xbEtp8LaBxAy1PdtWsEPbU9gNb4PTu+CH2/7XkERoDkSIDkSIDk3GcDo3PNS3i2Tj9f3B6lNbIh2BO0XfO3bf009P1ezx7gke/svYn+Zx+bOLo+gREgORIgORIgObcHqKU1Sa/T1ZMFW6O8++meaE9Q68Klqyb2rvN1nkJ7Bq35+veYu//YxFrzPYwAyZEAyZEAybW+5rzxbKFc19+cmzfxwkLsQtur6V7N1e9Ha7Rnfv6ZifX8vP1533/y9LmJv5ndZmLuBSCEBEiOBEhu6PMAav36dSaenp428cOHj4rfj94/V83r5FMm0rn1Tsded+vcvB6/np/X4+h1vfYIJ85cNnH0/j9rAlFEAiRHAiTX+ppALTnR5/lfvbLvFVxcXCx+3rvO9tbZe/Q5Be0RZjasDe0vOg+xZ+fnJq6t+YoRIDkSIDkSILnGPEB0TZ/Smqlz1/1++YCmpuy7ifW6WnnbPUuoqSbW89P78Xr/Xrn3MoZc8xUjQHIkQHIkQHITtev4la4B1Bo5s6E8t+7VdL1frnPxq1fbuFbtcwvaE3hr/DxtvzeQESA5EiA5EiC5xjxAtOar6Lt1Pd7ce3TNnUdrrPZI0XkD5c0TjBojQHIkQHIkQHJdbx2/PqunvHXsaveOWI3W5/O962btAWZ65bl87VmG/T6EqLfMQzAPgPaQAMmRAMm5PcBPv10p7iC6Js7j1XBvjaFX84f97t0RvFeRHgDtIQGSIwGSc3sA73/4eHQu/8M19n79qpVT9vNOTa920inRFy+ZcHBul4n/b//7txYjQHIkQHIkQHJvey7AxNHnAJSuCVTe8/hRjev+Tc79d6fmqyXM/S+rHoERIDkSIDkSILnw/w1s7KCy5NXOM+jc/sIKuz6h92Ovav8NYzZPwAiQHAmQHAmQXLhetX2/u7Zkas33nH550cSHB/urfl/RA2BZIQGSIwGSG3m9GvaaubYtt5oexQiQHAmQHAkAAAAAAAAAAAAwxv4Fm/jXETIKTbYAAAAASUVORK5CYII=",
  Rl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAABXFJREFUeJztnU9oXUUUh2+aNBKxjYhULF2UYnAhxkSkYAXdtGnRBA3FRSStFq2oOxHdVAWFLlqpghupsfbf2xUEqdUk3dSFLRQsScDSkkiChmoCSq0hQpombtycc5OZHOe+vNec79udzLy5w8vvzfndmblzswwAAAAAAAAAAAAAAAAAAAAAAAAAVgI1y33B+fn5+eW+ZjmpqalZ9u+wSFZVugNQWRCAcxCAc+rKfYFYzr/dUugKszCMAN5BAM5BAM4p3ANYc/7c3+dEPD06UnSXkrir+ZWytp86L5I6D8EI4BwE4BwE4JxkD1B0zv9t6EJql5IYGxyv6PU/2blTxD+OXhNx6VKx3w8jgHMQgHMQgHPMHmC5c37T3V8Yepdlw9dt9+0652/7qE/EK23uX8MI4BwE4BwE4JyoByh3zrfm+BxHv5VxZ7h6as5PnXuvtj2RjADOQQDOQQDOyeWzonP+rda9wQ40fj0XLI8Ru++vdM7X6O83de6f/QCQBAJwDgJwTnQeoOicr/nrWanBxue+CX9gz9Om9q1U+7N+RfePEcA5CMA5CMA55v0Asbn9dcb2Lt56UMTDnV8F6zcdVX+IzP1vfGSDqT9Fz9VXu6dgBHAOAnAOAnBO4c8G6py+ufZqsP7G0hOm9rVHWLt3f7D+jZ598vOll0VcdIrWFqLa1v81jADOQQDOQQDOKdwD6Jx+sVuWa0/wwNwREY+skjlaE8v5sfoxT3B/8+Om9jXaU2gLoNf/Kw0jgHMQgHMQgHPKfk7g1hNXRHxjT/i+O+YJjv9zRsQvNjyT0Ls8uecWumV/Xn3rWPDzrU++JuJHn3pdxLvulfXL/fx/DEYA5yAA5yAA55TdA2j0WsHW7MoiNRems3RexMe7F6n4H1aPEMv5HW2twc/HyocPfxAs157h0vefiVivLfBcACSBAJyDAJxj9gCp5/jpeYHeoXD9tgNHguWRLYE5j6Dr65yv7+N1Tn9/v8zJVvQ8gObDfdIDlNsTMAI4BwE4BwE4J3o+gE4pU0PyTJ+YJxgZkDm27YCtgzFqZ1eb6g+f2i1i7QFO9w2KWOf8cz8cFnHjtM1GfdzVIWK9FnB5TYuItSfQ/dGeAA8AJhCAcxCAc8we4Ozb20Vsffbu/KzMud27TB/PYfUAOe64KcJfJ+QevrXrw7+RBnXMYf0LyhOcnfnfXcuyLDvY/qWI38nk/gi95xAPACYQgHMQgHOSzwlM9QSbuqQnKJ2U5dojJOd8jfIAeh5gR9tDIp6uk9fXHkBTuzv8aGDtd+Hy+X6V4z+Vv1k8ACSBAJyDAJyTm8jWOUR7ggVyjohTPcGWOnmfWzqp9gN0mZrLkVsLyML7DXr7fxLxjtmbi9RcGH0Ssm7v9Gq5IaL9zMMinuyZNF3PCiOAcxCAcxCAc4p4d7CIrZ5A3/dvqdOx9ATDp2R50/Mngv3TOd9KS0uziHv7I5sYI4xf+1PEf1yfEvHmnvuS2rfCCOAcBOAcBOCcpbwvIDgvoLF6gjXqSJ6xC/IdP1GmHgsWj/1sbC9Ce1tzsHxc3bYPDEjPsGH9PSLWHkDz3hu98g+Hwv2zwgjgHATgHATgHPM8QGy92bp2kKcvUm5jW6GtrTwYAZyDAJyDAJxT+BlB1v0Elabp2KiIO7ZvErHeI5i1hOcBUtH3/Z8feknEB9X+hck7J0S8hD2d4v/DCOAcBOAcBOCcqn6n3VKI5ryZelm/fiZYnkM9NxDzMLG1AM3g5V9E/O6b8vwAnfOt5x6um5b7C/AAIEAAzkEAzrntPUAM63v7rJ6gaCYafg+W65xuBQ8AAgTgHATgnBXvAaxU+7t+NbwvAJJAAM5BAAAAAAAAAAAATvgXtprTE+PHJ9wAAAAASUVORK5CYII=",
  Ml = "data:image/png;base64,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",
  Ul = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAABQxJREFUeJztnUtsTVEUhu/xKCUhEoQgqQ46IaJCgkTMDBQjpuiAYmIiBoQIMRFGEpSBMDUgrorHwCPxSK5oCRMDOpAQkbQRiltcU2td9srO3ufl/7/Z6tk9+9zbv2v9Z5999q5UCCGEEIJIkvcFaBqNRiPva4hJkiSF+47/ZEzeF0DyhQIAhwIAJ/P65Fvjk/GT07qUVGiMfvFqn7dHYAYAhwIAhwIAZ1zaHVg136rx1b5HIl63ZpGz/dsPMh4YeC7ixYsXOY+HYn0e7RH095O1J2AGAIcCAIcCACd6vfGt+brG6xo9d6b8/RevPgVcXXwGBwe92q/vWiFia9wgbU/ADAAOBQAOBQBO6h7At+YPDxerxodieQTLE9ADkFShAMChAMBJ/VmAhR6Lb2try+dCUkI/u7h2K+6zh1CYAcChAMChAMDJ3QP87+MAoZjPVgLHCZgBwKEAwKEAwMndA1hz9jRF8wgLO6Y4j/ve92c9p5AZABwKABwKAJzcPYDGmqdveYSsiT22//P7iPO49gihnoAZABwKABwKAJzMPcCr1+9F3NE+y+v3Y7/LlzbVW/0iXr+m09l+7IRJIq6f+yobXFFzBg1PYMEMAA4FAA4FAE7hxgGs+/yieQBd40PRNXzJ6p0irnfL/9mWSmtQf8wA4FAA4FAA4BTOA2jmzZH3uZ0rNzvbP713WsR6rF6PQ2g+fJTzDYaG/e6ra7XHIj68f+c/WhYDZgBwKABwKABwCu8BNE/unHEe79mzXMTW2LsvusZrli2T/fs+C7AY2vVO/aQ96HzMAOBQAOBQAOCUzgP8vJjvFjy6xmtCxwH08309H2CodsjrfBbMAOBQAOBQAOCUzgPkTerjAF9GRdii/0Tb5H2/7xxADTMAOBQAOBQAOKXzAHosfNqp2Zn2b40DBDN5vPNw7P0FmAHAoQDAoQDAKZ0H0DQ9H991I58LiUTWew8zA4BDAYBDAYBTeg8wsa7HAc7nch1lhRkAHAoAHAoAnNJ5gOaaXyzOntjqPF6r7RCxftdRrweg0e8+cq1gEgQFAA4FAE7pPIBm6oj8CNv3Zdu/rvnVm89S7U97hFBPwAwADgUADgUATuk8gK75WWPV/INHZU2OjX7X0PIEFswA4FAA4FAA4AQXVGtvW3TuPugV8bcWOYdx+me5X8LYH+73Aip3Zc3vv6/XTKIHIB5QAOBQAOCYHsCq8Z/GGRpKwtazb+J23WhwIW5/nly9JGtw63XpAVorcj5D05pHM9yfr3on7udjBgCHAgCHAgCnyQPomt83f4HzBKsiX5DeE2j77lOyQeQaGJsNm+R9+tVLv5zt9eetVlTsuSdRsvG6iK35AcwA4FAA4FAA4JjjAF1vXob1oNa+9SX2ev9po8cBjhyTnuXA3i1B57fWKax0rxVh0icPa0/ADAAOBQAOBQBOkwcIXXNG1xi95o1eD//EycvO83W0z3IeLzq9x2XN79njN46ha75ep1DPB2h0eZ2eGQAdCgAcCgCc6JPstYfw9QQayyPEZub0Kc44FD0OoJ8FxIbvBhInFAA4FAA4mW/C5/segeURcufHiAhjrw+g5wPodxOtr5MegDihAMChAMDJdyPev5D1u4ZJ70r5g+4nYSecMGq3CSC05muYAcChAMChAMApnAdIm9geI6m3uBucXyr773kYs3vuGUTCoADAoQDAgfMAoUT3EIE1PBRmAHAoAHAoAHB+A1OqeOtqU9rHAAAAAElFTkSuQmCC",
  Ql = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAABMRJREFUeJztnbtrVEEUxu+V7CIE1BQqimD+AlEhoDZ2goQtbSx8lFoKNgqCgoWgleADETGgrYE1AR+ggqASIVGsLCRgJEYCkagRNsa1E89ZnZNx5r72+37d7L07M5t8nHN25ruzaUIE7Xa7XfQc/iRN0zTL/ldk2TkpPxQAOBQAOJnmlypg5fy01pvXVJIkSZL24jfn9dg1ASMAOBQAOBQAOD1FTyBvfHO+lZOnPrnHm5h4vbyJLXN8Pf/QmoARABwKABwKAJyuXwcIzflv3s7Hn5SDyclJ0W4M7hTt2OsEjADgUADgUADgwK0D6JzfHHkm2l8W8pxNJ/39/aKt5+e7TmHBCAAOBQAOBQBO5jVA2Tx2ZWfzplWirZYFosMIAA4FAA4FAE70GqBqHjvNk6dy/37r1i0xp+M9ftYwAoBDAYBDAYATXAOU3WO3ffcR0d6264DX+33Hi03z/nim/TMCgEMBgEMBgONdAxTtsdP75RZnTsoa4NTZy877dc4dG3vu1b/m7buPov1pVn7+uc9h+/mhMAKAQwGAQwGAE7wOUDWPnVUTDAzsEO3xB9fdAzx21wBlhxEAHAoAHAoAnK5/LiDUY7fUsyjaX+vy0bvhW1//Z1q/sdYZdE0SG0YAcCgAcCgAcDKvAarusdM5XzM7F1YDZJ3jLRgBwKEAwKEAwMl9HaBqHrtVP346rx/zHP/ufffnt/YmYsMIAA4FAA4FAE7mNUCoxy5vT93V8wdFO/Y5gZan0dfDGAojADgUADgUADi5rwO8OHxVtOv71RRy9tjpnFt2D2NjcCjqeIwA4FAA4FAA4HSdJ7Boj10oPCeQ5AoFAA4FAE7uNUB9rdxfb92WGry3Maz/0BxfdQ+jL4wA4FAA4FAA4BS+DqBrgmYSlgNjrwNUzcPo+/sMjADgUADgUADgFF4DLO2Vz96NPnwV1F/oOkDVPIzpiN/97UHZZgQAhwIAhwIAJ/caQOf8svPy0RXn9dGH5T4nUOf8NE3FP4ARABwKABwKAJzC1wE6zuAZzXa86ekP6pVtzvuXhoyaJdC/ELp3MbNvRrTXLaz3Gp8RABwKABwKAJyOGsB3P9kX69w9NEL3Lqycr7/3axgBwKEAwKEAwDHXAdJW3bijJlp6P7yxR37PPp7ccPbWsCYUyNTUe6/7545Ou28YnnFfN4jtYbRyvoYRABwKABwKAByzBmjXW87radLrvG7VBFnTt8Y9P19WtjaoVyaC+iv6vAJGAHAoAHAoAHA6agDre6TeK2gvSp+7/i1hzYWLd5zXtY/ewsrx504fdF5PErenT+f81QvyT9Z8bHRfchgBwKEAwKEAwPH2BOoawaoJOt5v1AjR+SZ/+zfprf39vn+gc363wQgADgUADgUATnCCC103iI3tXwjkgdobqRV7hlAojADgUADgUADgZP4l19ej5ktHjaH8C/M9UuOrUz8PY3Limhrxpmzm7G+IDSMAOBQAOBQAOJVf6Lb2JnypuofR+vw8I4gIKABwKABwuu5hfd8aIG8Po4XlYWxd++7VX+2Q/D0G1gBEQAGAQwGA03U1gEXsGiE2M7V3ot13ST+L6MbK+RpGAHAoAHAoAHDgagCLrM9JzBvWAMQJBQAOBQDOLzFifA2FYHwZAAAAAElFTkSuQmCC",
  Ol = "data:image/png;base64,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",
  Fl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAAgFJREFUeJzt3MFNwzAUBuAWIbEEE7AF7MF2zMEI3ODAnSV6Cee4Vd0oSWPn/75blKiN1F/v2Y7TwwEAAAAAAAAAAAAAAAAA6Mlx6xtINwzDcO388Xhc9Td6WPPDaZ8AhBOAcAIQTgDCCUA4AQi3+3WA2jx7a2vP82tUgHACEE4Awj1ufQP3tnHLPbQ2JFEBwglAOAEIt7sxwNR5/9nlP2+zvv/09Ts6fnr/m/V5a1MBwglAOAEIt7sxQKmc9y89D6/1/Nbm/SUVIJwAhBOAcN2PAWY/758471+655f3f+/9ASpAOAEIJwDhuh8DlNae99fW9qe28K3XCVSAcAIQTgDCdfdewA3v05fXjy+Y+bz/zMvn1dOnj+fRcW3dwDoAdyUA4QQgXPfrAGvP+6uKMUVv+wNUgHACEE4AwnU/BigtPY0evl+vnp/b8/0/AJsSgHACEK77McDcefXUZwe99/ySChBOAMIJQLjmxgC1ffJTe+jc9wb21vNLKkA4AQgnAOGa7k9LuDCmKM+Pjqfu4Su13vNLKkA4AQgnAOG66le3mPvewNQ9hr31/JIKEE4AwglAuOaeBSxt656/9X8A1agA4QQgnACEa6ofLaG29n/h+qvnW+vZS1MBwglAOAEIt/t1gKlbAvfe80sqQDgBCCcAAAAAAAAAAAAAAAAAAAAd+QcizKPAfxkTLQAAAABJRU5ErkJggg==",
  zl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAAkxJREFUeJzt3cFx1DAUBuBdhhmaoALKoA+6Sx2UwJEDd5rIZTlH2cEY6cmy/++7ZXbi9Sb/vCfJsvd2AwAAAAAAAAAAAK7gfvQJVHs8Ho+jz6HH/X4v/R99qDw46xOAcAIQ7uPsN9zqyb097x+O33P4crOHLCpAOAEIJwDhpo8BZmt7/rse+/Nr6fu//vj119c/fftd+v5bVIBwAhBOAMJNHwOMXtteba1/b88/+vRVgHACEE4Awl1uHWD2vH90z6++/t9SAcIJQDgBCHe6McDR8/7Ven7799h7PBUgnACEE4Bwa2+Qe+JJz2tff/sLnfP+1Xr+aCpAOAEIJwDhll8HmD3vv3rPb6kA4QQgnACEW7o/3W718/7V9/B5PgClBCCcAIRbbh2get7fe69e9bTe8wGYSgDCCUC45dYByq/3f/n+X+dVZevzWQeglACEE4Bwy60DlCt+JlCrXXc4+tpCSwUIJwDhBCDc6cYA09fiO/cXrL6HUAUIJwDhBCDc8mOA6nlyb8s9W89vqQDhBCCcAIRbbj/AaKP3F5y957dUgHACEE4Awi2/DrDX6PsKrtbzWypAOAEIJwDhho8Bep9dO9reef/Ve35LBQgnAOEEINzwMcDsHtg771+951ePqVSAcAIQTgDCnWrO+sze6/2vL5/f/Fzd8/eOUdwXwFQCEE4AwsWNATavDTSqv9fv6GsnKkA4AQgnAOEutyewNbvnbzn6u49bKkA4AQgnAOEutw6w19n28I2mAoQTgHACAAAAAAAAAAAAAHABfwC3/v8vAZpBjAAAAABJRU5ErkJggg==",
  Gl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAAqtJREFUeJzt3bFRxDAQRmHMMNAEMQkZJdAH3dEHHRASEEMTl5iABAsGY6S1Vn7vy47jfAb+2ZUl4Ts7kyRJkiRJkiRJRzb1PoFa8zzPvc8h0jRNoX+j88iDKz8DAGcA4C56n0BrwS0z3N5DGisAnAGAMwBw6ccA5XX+1uvibz315b7+pCqcnl8Xj68e3judyScrAJwBgDMAcOnHANFz4dHWen7vpQwrAJwBgDMAcOnHAKOp7fn/mOf49YBrx7MCwBkAOAMA5xigs97zHFYAOAMAZwDgHANUip7rX9sPUTuGsALAGQA4AwA33Fr7Dz2xfH75gsZ7APee649mBYAzAHAGAK75PEDt+vTRZP95rQBwBgDOAMClXwvofQ+g2uv+6PN3LUBVDACcAYBrPgaIvu6Nnvtvvb7f+tfRekhhBYAzAHAGAC79PEA2W3v61p59erxePI6+h5AVAM4AwBkAuHRjgN5z/5d3N4vH8/xWd8CVeYne9xCyAsAZADgDAJduv1rvff/Rsv1fgRUAzgDAGQC4dPMAq+z5TVkB4AwAnAGAG24eYIf3X35h45gje88vWQHgDACcAYBLPw8QvR5e23JH6/klKwCcAYAzAHDpxgCte2LrPYaj9/ySFQDOAMAZALhU/ShC6z2G0+3T768vv3/nzwHcygoAZwDgDABcunmAWq2v+6N7fm9WADgDAGcA4ML71drn3u3wfuXzyxcU1/1H7/klKwCcAYAzAHDh8wCj98jS0X4eKwCcAYAzAHDD97M/rJ+X37/p+R+ON/zv7CsrAJwBgDMAcIfbD9D6voK1PX/r/gTvD6BdGQA4AwB3uDFAdmWP7/35CFYAOAMAZwDgDj8GyDZ137vnl6wAcAYAzgDAHW4MkKzFpt8/YAWAMwBwBkCSJEmSJAniA8sG9dXtJ5oqAAAAAElFTkSuQmCC",
  Ll = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAAtZJREFUeJzt3U1uFDEQhmEaRXATDsANwj24MruwYM8l2DQbNlOJZCz/lCvv++xG0cx0pE/lctvtuT4c7r7vO/saVrqu68r8/o+ZX658BgDOAMA9ZV9Ar+Qhc9hpLY0VAM4AwBkAuHI9QPRqTP35LedC/vnz49fD68/ffyddyf+xAsAZADgDAFe+B8gWx/xqrABwBgDOAMDZA0wW5/2n3fuPrABwBgDOAMDZA3Qanff37gFs7Ykc3VNoBYAzAHAGAM4eYFC1eX9kBYAzAHAGAM4eoGH3vH/2+1usAHAGAM4AwC3vAeK97Ozn4UdVn/dHVgA4AwBnAOCW9wCz179Xm73Pf/b/M7uHsgLAGQA4AwB3/FpAHPJ2nwfQer5/9W2N1S2RFQDOAMAZALjje4Bsu29L7F4qsQLAGQA4AwB33Nr8G/sH4t8f35B8LmCv1jmCrZ7DtQBNZQDgDACc9wEWy36uoMUKAGcA4AwAXPkeYPVZvZ++fpn6eac9V2AFgDMAcAYArlwPsHu9/H7p6wFOn/dHVgA4AwBnAOCm9wCzz7atvifvtHl/ZAWAMwBwBgDuuPsAsUdYfV7Aqz2HL89d768274+sAHAGAM4AwE3vAbLHtGynz/sjKwCcAYAzAHDH3QdoyW4xqs/7IysAnAGAMwBw5XqAKPu8gGrz/sgKAGcA4AwAXPkeoNfqZwmj0Xn/6t9csgLAGQA4AwBXvwcYnPe3fg+gZfW83zOCtJQBgDMAcPV7gIbeef/omH7aen+LFQDOAMAZALh33wNE2efzn8YKAGcA4AwA3HE9wOh5AO9t3/5qVgA4AwBnAOC29wC9e9xGfzdw9b792eci7mYFgDMAcAYAbnsPMDwmhjHfef8YKwCcAYAzAHDHrQWM2v28fvUewgoAZwDgDADccePXG2sFo5/38Lr6mD2bFQDOAMAZALjj7wNUO3evGisAnAGAMwCSJElAfwElasLUXOrQXAAAAABJRU5ErkJggg==",
  Hl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAAxtJREFUeJzt3bFx3DAQRmHTo5GbcKwC3IHVh7tzPc6kQLmbUELFBjXG4QDsgnzvC6XhHaX5Z7EgQHL7srh93/fsc5hp27Yt8/u/Zn658hkAOAMAlzr+3KLsAZKHzG6tLc3sHsEKAGcA4AwA3EP2CfTO8w+Hvz73fFyz9z9v//39t19/g87kPlYAOAMAZwDg0nsAOtcClMoAwBkAuPQeoDYGrrYfoHXev9jpH1gB4AwAnAGAS+8BaLLn/SUrAJwBgDMAcIce4JM9eE1jVu/xq1lt3j/6/2sFgDMAcAYA7tAD9I4pZx/zRxv9/yg/r7ZWUvt+KwCcAYAzAHCuBRRWm/fPZgWAMwBwBgBueA/QOy9dbQ9gr9l/j2sB6mIA4AwA3PLXAcohLvp5ALX7+2cvfZR/7+i1BSsAnAGAMwBww3uAq83zo083ejuFFQDOAMAZALjw/XutPUD2dYDRyv0GrfsLvA6goQwAnAGAC18LuNp1gpraHsMa3xegqQwAnAGAq/YAd8zbp45Z77+/z/z4g8cfT0M/b7X7CqwAcAYAzgDANV8HaL0/fbTod/DsL209QO+8P5oVAM4AwBkAuOYeIHrMP/uevOz1/horAJwBgDMAcNUeIHpMir7OcNhz+PKz6fizzftLVgA4AwBnAODC9wRe7X0CpdXn/SUrAJwBgDMAcMvdF3DD8aNO5S7R+/x7n7tYYwWAMwBwBgCuuweYPUbd8P3//iD4eQGr7fNvZQWAMwBwBgBu+WcFjxa9fr/6u5etAHAGAM4AwHX3ANnr2b167zUcPe/3vgCFMgBwBgDu8tcBWuf9vWP62XoiKwCcAYAzAHCX7wFKZ9u3Xxq9VmAFgDMAcAYAbrkeoPl5AMUewLPt289+FrMVAM4AwBkAuOV6gFLvewPPtm8/+hlJVgA4AwBnAOCm9wDD97knz/tHH1+KfhazFQDOAMAZALjh7wsox8To9fTZ8/7RPU32fgMrAJwBgDMAcM3jz+xnAn0yxvZ83KEHyB5zV2MFgDMAcAYArvvdwbOtvn7farX3JVgB4AwAnAGQJEkC+gAjCBSs2IK1XQAAAABJRU5ErkJggg==",
  ql = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAA9NJREFUeJztnT1y1EAQhS1qy1yCmAAybgDnMLfjHHADMhMQwyWcLLF6sXp7X49GW+/7MnktjaR61X/TM1oeDs75fD7PvgeFZVkW5fzs+dXrv1FOhvsHAZiDAMw5zb4BFdEFtnNvIQsWwBwEYA4CMGd4DKDmsfH37HoXP//6sn2DCS8/f2/+/vbrX+n68Xni86p5fgYWwBwEYA4CMOfu6wB7E32+mveP9vEZWABzEIA5CMAcOQaYncd2k+X9Gd3PW+2HqI6PBTAHAZiDAMw5XB3gaD2Aat7f3dNXnRvJwAKYgwDMQQDmpDFANc/P/v9oHC3vz+iOkbAA5iAAcxCAOWkM0L22rbsHsJvZ8/1qDFU9HwtgDgIwBwGYU64DqMyu9c/O+0c/P/0AUAIBmIMAzCn3A+xd2o8uM46vrgWs5v1H8+EqWABzEIA5CMCcjnUB6z+I6/GXjz+k81VmxzhX/H9rjyEWwBwEYA4CMOciBhid58ZafPf8e8bjp/dhvD9Dx3v59m51nO0ppL7/6vlYAHMQgDkIwJzhawNn+/wUsW4RqT7v7LoDFsAcBGAOAjDnmnUBq+Pu2v+9o/YYRtT3m8UgESyAOQjAHARgzml07X903h9r7SpxrqDK3nUONQbBApiDAMxBAOZc1AFG5/3V2nfmQ9Vv9lyM97wdAzSsLVyPV3y/1W8YZe8PC2AOAjAHAZjT3w/w4fvqMEuDb+iZu+m2XkOdjx9e52j2+XHdABbAHARgDgIwp9wPkBPy3OfPq+PZPYIXeXi4v8jeeX+3z8/AApiDAMxBAOb8b21g6QJVn1rlaJ8b2Dtmyeoi2fthLgA2QQDmIABzTup+9Bndef/odQmz5/sfn9b7FZyftserzqVEsADmIABzEIA5u38v4N5QY5bquoXHh1pPoHp/WABzEIA5CMAc+XsBR5vvj8zee7i+biG8L3Fuhe8GwiYIwBwEYE77/gBqn/rousPoGKS7n2J0TIUFMAcBmIMAzEn7Abp9svxdPHH9fCSLQbr7JUb7/OrzYAHMQQDmIABz5P0BYq19dvtAd56sxgRVVJ9f/R0LYA4CMAcBmFOOAW6ode9aZ8hQfeYN462OY94/O4bCApiDAMxBAOZcs0fQrgv0u/fUyajGIOr7qPr80f0SWABzEIA5CMAc2b93z59X9xzq9qlqf4Dqowf0HzAXAK+DAMxBAObI+wOM3mMoovb8ZYyem9i7rpKBBTAHAZiDAMxJ/VF3DJBdX3WR8XZn+9y9ewqrYAHMQQDmIABzpvujo+fdR/fhKlgAcxCAOQgAAAAAwJB/s3kQcMKqJVwAAAAASUVORK5CYII=",
  Eo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACABAMAAAAxEHz4AAAAD1BMVEVHcEz284nytSDliicgGCcE4LS5AAAAAXRSTlMAQObYZgAAAJ5JREFUeNrt2LsNgDAMRVEKFuAzAYwAA4DE/jNBCmyF/IkEzX113qmsyHITyJGIPAQACKQ1D7or/fTMvFxZAQAqAOlu5hEAQKq7m7I7gNoFAPgY0Al2AgAQAKTbT950d0YAgApAtzQAgBjgT2BLAwBwu7G59CxZAADlgP2JAQBIsg8QgzWAAAB/AbrXAwAURQ8QMoAAAC8BvVQBAOTmBHvqugmDIq+UAAAAAElFTkSuQmCC",
  li = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAAXNSR0IArs4c6QAAAFRQTFRFICo/9c+d/88A+Ldj/8UB0bqh/78A/7cA/60Ax6uV7bEK/6QA/6AA/5kA/5IA1qASop2exJ40/4UAsIA0eX6JlHpOeWhPV2ByYFZLMzxRGSc+ESE7VlFONgAAAadJREFUeNrt121vgyAUhmGnKFRb6ltbOOf//8/x4Jgm7ZKJZGkWbr80fLiCPVLTIpfL5XK5v8zacTydiN4VJJqmcdSa+X1BfRldfU/JQK09WKTJGO3FqmJOBaJUILPWl4v2PR4JQArgmAQksvZ8vrjwLdY1M/niwWIFdSyIXRnf7TZNSnXdusePj7ruXfP8eFi7B7SvQB0Htq0QTSNdytU58JuEuYl5D9goqdBx0BgPLn2h50BuzKr63XDoDtCLCpfqcAXQtwtE1oKUMJ9uO9x4XRdoFwjuCdQxIBoG7O56nSZj8CgxSwlyQfGIJwK9GQOCIFdB+GSMWkbjUqrvwcWCrgVUAew8GBew+32dNsh5JnDHQCU9F0CK5oBtTw1Q/MweA9dTAy8eJBoG4WogNmGPGMlxcN2j6xQLWluWALd7BFhVsVPeguvJltHv59vNgZ4sy+s1oBjSEVBsQYgqFmRu29LXttbiIE6TENIX9eDQj2ATCdLCGcNcUHi9VhWm3fcHwbBSAJSxIAsxDMVT8yzEPEeAnBZERK9XsZ4QxHr+K5jL5XL/oU+kODawNDIwtAAAAABJRU5ErkJggg==",
  Ht = {
    1: Fl,
    5: zl,
    10: Gl,
    100: Ll,
    500: Hl,
    1e3: ql,
    default: Eo
  },
  Yl = (n, t) => t < 5 ? Ht[1] : t < 10 ? Ht[5] : t < 100 ? Ht[10] : t < 500 ? Ht[100] : t < 1e3 ? Ht[500] : Ht[1e3],
  qt = {
    1: Pl,
    5: Sl,
    10: Bl,
    100: Tl,
    500: El,
    1e3: kl,
    default: Bo
  },
  Vl = (n, t) => t < 5 ? qt[1] : t < 10 ? qt[5] : t < 100 ? qt[10] : t < 500 ? qt[100] : t < 1e3 ? qt[500] : qt[1e3],
  Xl = () => dn,
  Wl = () => Po,
  Jl = () => So,
  Yt = {
    1: Dl,
    5: Rl,
    10: Ml,
    100: Ul,
    500: Ql,
    1e3: Ol,
    default: To
  },
  Zl = (n, t) => t < 5 ? Yt[1] : t < 10 ? Yt[5] : t < 100 ? Yt[10] : t < 500 ? Yt[100] : t < 1e3 ? Yt[500] : Yt[1e3],
  Bi = {
    9: bo,
    10: No,
    11: Co
  },
  ya = (n, t) => Bi[n] ? Bi[n] : li,
  Kl = () => li,
  wa = {
    1: Yl,
    2: Vl,
    13: Xl,
    4: Wl,
    5: Jl,
    6: Zl,
    9: ya,
    10: ya,
    11: ya,
    default: Kl
  },
  ko = (n, t) => wa[n] ? wa[n](n, t) : wa.default(),
  $l = ({
    item: n,
    active: t,
    amount: s = 1,
    type: a = "sale"
  }) => {
    var d;
    const i = _(),
      o = c(m => m.shop.selectedCurrency),
      r = (d = n.prices.filter(m => m.currency_id === o)[0]) == null ? void 0 : d.price,
      l = [he.info_row];
    return e.jsxs("div", {
      className: l.join(" "),
      onPointerUp: () => {
        t && (i(it(n.id)), i(ot()))
      },
      children: [e.jsxs("div", {
        className: he.info_row_content,
        children: [e.jsxs("div", {
          children: [e.jsx("div", {
            className: he.row_icon_container,
            children: e.jsx("img", {
              alt: "",
              src: ko(n.id, s),
              className: he.row_icon
            })
          }), e.jsx("div", {
            className: he.row_title,
            children: e.jsx("span", {
              children: n.name.replace("charges", "").replace("' Snap", "").replace(" Snap", "")
            })
          })]
        }), e.jsxs("div", {
          className: he.row_price_container,
          children: [r && e.jsxs("span", {
            className: he.main_info_channel_users,
            children: [e.jsx(Il, {}), e.jsx(Je, {
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
  ed = "_panel_1iadi_1",
  td = "_item_1iadi_11",
  nd = "_active_1iadi_25",
  ja = {
    panel: ed,
    item: td,
    active: nd
  },
  sd = {
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
  In = sd,
  ad = () => window.location.hostname.split(".").length === 3,
  id = () => !1,
  Do = () => window.location.hostname.includes("dev"),
  od = () => Do() ? In.VITE_ADSGRAM_BLOCK_ID : ad() ? "4853" : "4995",
  pt = {
    isDev: id(),
    devServer: Do(),
    devUserInitData: In.VITE_INIT_DATA || null,
    devWallet: In.VITE_DEV_WALLET || null,
    apiBaseUrl: In.VITE_API_URL,
    app: {
      disableBetaError: In.VITE_DISABLE_BETA_ERROR,
      adsgramBlockId: od()
    }
  },
  rd = () => window.Telegram.WebApp.isVersionAtLeast("8.0") ? window.Telegram.WebApp.safeAreaInset : {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  cd = () => window.Telegram.WebApp.isVersionAtLeast("8.0") ? window.Telegram.WebApp.contentSafeAreaInset : {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  ld = {
    deviceType: "unknown",
    os: "unknown",
    platform: "unknown",
    fullscreen: window.Telegram.WebApp.isVersionAtLeast("8.0") || pt.isDev,
    safeAreaInset: rd(),
    contentSafeAreaInset: cd()
  },
  Ro = _e({
    name: "device",
    initialState: ld,
    reducers: {
      setDeviceInfo: (n, t) => {
        const {
          deviceType: s,
          os: a,
          platform: i
        } = t.payload;
        n.deviceType = s, n.os = a, n.platform = i
      },
      setFullscreen: (n, t) => {
        n.fullscreen = t.payload
      }
    }
  }),
  {
    setDeviceInfo: dd,
    setFullscreen: ud
  } = Ro.actions,
  rt = n => n.device.platform,
  md = n => n.device.os,
  Mo = n => n.device.deviceType,
  Bt = n => n.device.fullscreen,
  oa = n => n.device.contentSafeAreaInset,
  ra = n => n.device.safeAreaInset,
  Ad = Ro.reducer,
  pd = () => {
    const [n, t] = A.useState("Stars"), s = c(rt);
    return e.jsx("div", {
      className: ja.panel,
      children: ["Star Shop"].map(a => e.jsxs("div", {
        className: `${ja.item} ${n===a?ja.active:""}`,
        onPointerUp: () => {
          t(a)
        },
        children: [s === je && e.jsx("h1", {
          children: "TON Shop"
        }), s !== je && e.jsx("h1", {
          children: "Star Shop"
        })]
      }, a))
    })
  },
  hd = "_layout_q8u4d_1",
  gd = "_content_q8u4d_22",
  Ti = {
    layout: hd,
    content: gd
  },
  _d = "_header_btihg_1",
  fd = "_header_bottom_container_btihg_14",
  xd = "_header_bottom_btihg_14",
  vd = "_header_placeholder_btihg_39",
  yd = "_header_content_btihg_45",
  wd = "_league_btihg_56",
  jd = "_bronze_btihg_66",
  bd = "_silver_btihg_67",
  Nd = "_gold_btihg_68",
  Cd = "_platinum_btihg_69",
  Id = "_diamond_btihg_70",
  Pd = "_logo_link_btihg_72",
  Sd = "_logo_btihg_72",
  Ue = {
    header: _d,
    header_bottom_container: fd,
    header_bottom: xd,
    header_placeholder: vd,
    header_content: yd,
    league: wd,
    bronze: jd,
    silver: bd,
    gold: Nd,
    platinum: Cd,
    diamond: Id,
    logo_link: Pd,
    logo: Sd
  },
  Bd = () => e.jsx("div", {
    className: Ue.header_placeholder
  }),
  Ys = "data:image/png;base64,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",
  Td = "_image_1nx2h_1",
  Ei = {
    image: Td
  },
  Ed = () => {
    const n = c(Bt);
    return e.jsxs(re.Fragment, {
      children: [e.jsx("img", {
        alt: "web",
        src: Ys,
        className: Ei.image,
        style: {
          position: "absolute",
          top: n ? "0" : "var(--header-height)",
          left: 0,
          zIndex: 100,
          pointerEvents: "none",
          opacity: .6
        }
      }), e.jsx("img", {
        alt: "web",
        src: Ys,
        className: Ei.image,
        style: {
          position: "absolute",
          top: n ? "0" : "var(--header-height)",
          transform: "scaleX(-1)",
          right: 0,
          zIndex: 100,
          pointerEvents: "none",
          opacity: .6
        }
      })]
    })
  },
  kd = {
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
    children: n
  }) => {
    const t = c(s => s.main.showMiningDetailsPopup);
    return e.jsxs(Mn.div, {
      className: Ti.layout,
      style: {
        overflow: t ? "hidden" : ""
      },
      ...kd,
      children: [e.jsx(Bd, {}), e.jsx("div", {
        className: Ti.content,
        children: n
      }), e.jsx(Ed, {})]
    })
  },
  Dd = "_layout_13e1w_1",
  Rd = "_container_13e1w_10",
  Md = "_star_13e1w_14",
  Ud = "_move_13e1w_1",
  Jn = {
    layout: Dd,
    container: Rd,
    star: Md,
    move: Ud
  },
  Qd = "_link_1fn8i_1",
  Od = "_telegram_icons_1fn8i_13",
  Uo = {
    link: Qd,
    telegram_icons: Od
  },
  P = ({
    children: n,
    className: t = "",
    style: s = {},
    size: a = 12
  }) => n ? e.jsx("span", {
    className: `${Uo.telegram_icons} ${t}`,
    style: {
      fontSize: a,
      ...s
    },
    children: n
  }) : null,
  Fd = A.memo(() => {
    const n = Array.from(Array(30)),
      t = c(rt);
    return e.jsx("div", {
      className: Jn.layout,
      children: e.jsx("div", {
        className: Jn.container,
        children: n.map((s, a) => {
          const i = k(4, 14);
          return t === je ? e.jsx(P, {
            size: i,
            className: Jn.star,
            style: {
              animationDelay: `-${a*300}ms`,
              transform: `translate(${k(-80,-170)*(a%2===1?1:-1)}px, ${k(-100,100)}px)`
            },
            children: ""
          }, a) : e.jsx(un, {
            fontSize: i,
            className: Jn.star,
            style: {
              animationDelay: `-${a*300}ms`,
              transform: `translate(${k(-80,-170)*(a%2===1?1:-1)}px, ${k(-100,100)}px)`
            }
          }, a)
        })
      })
    })
  }, () => !1),
  zd = "_layout_1nbfl_1",
  Gd = "_button_1nbfl_14",
  ki = {
    layout: zd,
    button: Gd
  },
  Ld = () => {
    const n = te();
    return e.jsx("div", {
      className: ki.layout,
      children: e.jsx("div", {
        className: ki.button,
        onPointerUp: () => n.push("/pay-support"),
        children: "Pay support"
      })
    })
  },
  Hd = "_layout_gx8in_1",
  qd = "_container_gx8in_5",
  Yd = "_item_gx8in_11",
  Vd = "_active_gx8in_20",
  Xd = "_image_container_gx8in_24",
  Wd = "_image_gx8in_24",
  Jd = "_item_text_container_gx8in_34",
  Zd = "_item_text_gx8in_34",
  ft = {
    layout: Hd,
    container: qd,
    item: Yd,
    active: Vd,
    image_container: Xd,
    image: Wd,
    item_text_container: Jd,
    item_text: Zd
  },
  Vs = Fn(),
  Xs = Fn(),
  Ws = Fn({
    sortComparer: (n, t) => n.id - t.id
  }),
  di = Fn(),
  kn = Fn(),
  Kd = {
    user: null,
    country: null,
    languageCode: "en",
    showRobotPopup: !1,
    verificatedWallet: null,
    verificatedWalletStatus: p.idle,
    checkCaptchaStatus: p.idle,
    hasCaptchaCode: !1,
    hasCaptchaCodeStatus: p.idle,
    pixelsForSale: Vs.getInitialState(),
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
  os = G("user/getVerificatedWallet", async () => (await W.getVerificatedWallet()).data),
  rs = G("user/checkCaptcha", async ({
    wallet: n,
    captcha: t
  }) => (await W.checkCaptcha({
    wallet: n,
    captcha: t
  })).data),
  cs = G("user/checkHasCaptchaCode", async () => (await W.checkHasCaptchaCode()).data),
  ls = G("user/getUserPixels", async ({
    offset: n,
    limit: t
  }) => (await W.getUserPixels({
    offset: n,
    limit: t
  })).data),
  ds = G("user/getPixelsForSaleTotal", async () => (await W.getUserPixelsCount()).data),
  us = G("user/getUserPixelsSold", async ({
    offset: n,
    limit: t
  }, s) => (await W.getUserPixelsSold({
    offset: n,
    limit: t
  })).data),
  ms = G("user/getUser", async (n, {
    rejectWithValue: t
  }) => {
    try {
      const s = await W.getUser();
      if (s.data.error) return t(s.data.error);
      const a = s.headers.get("cf-ipcountry");
      return {
        data: s.data,
        country: a || null
      }
    } catch (s) {
      return t(s.response.data)
    }
  }),
  Qo = _e({
    name: "user",
    initialState: Kd,
    reducers: {
      setLanguageCode: (n, t) => {
        n.languageCode = t.payload
      },
      setPixelsForSaleOffset: (n, t) => {
        n.pixelsForSaleOffset = t.payload.offset
      },
      setPixelsForSaleTotal: (n, t) => {
        n.pixelsForSaleTotal = t.payload
      },
      setShowRobotPopup: (n, t) => {
        n.showRobotPopup = t.payload
      },
      setPixelsForSaleFetchStatus: (n, t) => {
        n.pixelsForSaleFetchStatus = t.payload.status
      },
      removePixelsForSale: n => {
        Vs.removeAll(n.pixelsForSale)
      },
      setPixelsSoldOffset: (n, t) => {
        n.pixelsSoldOffset = t.payload.offset
      },
      setPixelsSoldTotal: (n, t) => {
        n.pixelsSoldTotal = t.payload.total
      },
      setPixelsSoldFetchStatus: (n, t) => {
        n.pixelsSoldFetchStatus = t.payload.status
      },
      removePixelsSold: n => {
        Xs.removeAll(n.pixelsSold)
      },
      addPixelCoins: (n, t) => {
        n.pixelCoins += t.payload
      },
      subtractPixelCoins: (n, t) => {
        n.pixelCoins -= t.payload
      },
      setPixelCoins: (n, t) => {
        n.pixelCoins = Math.floor(t.payload)
      },
      updateUserSquad: (n, t) => {
        n.user !== null && (n.user.squad === null && (n.user.squad = {}), n.user.squad = {
          ...n.user.squad,
          ...t.payload,
          templateX: n.user.squad.templateX,
          templateY: n.user.squad.templateY
        })
      }
    },
    extraReducers: n => {
      n.addCase(ls.pending, t => {
        t.pixelsForSaleFetchStatus = p.pending
      }).addCase(ls.fulfilled, (t, s) => {
        Vs.upsertMany(t.pixelsForSale, s.payload.pixels), t.totalPrice = s.payload.totalPrice, t.pixelsForSaleTotal = s.payload.total, t.pixelsForSaleFetchStatus = p.fulfilled
      }).addCase(ls.rejected, t => {
        t.pixelsForSaleFetchStatus = p.rejected
      }).addCase(os.pending, t => {
        t.verificatedWalletStatus = p.pending
      }).addCase(os.fulfilled, (t, s) => {
        t.verificatedWallet = s.payload.wallet_address, t.verificatedWalletStatus = p.fulfilled
      }).addCase(os.rejected, t => {
        t.verificatedWalletStatus = p.rejected
      }).addCase(cs.pending, t => {
        t.hasCaptchaCodeStatus = p.pending
      }).addCase(cs.fulfilled, (t, s) => {
        t.hasCaptchaCode = s.payload, t.hasCaptchaCodeStatus = p.fulfilled
      }).addCase(cs.rejected, t => {
        t.hasCaptchaCodeStatus = p.rejected
      }).addCase(rs.pending, t => {
        t.checkCaptchaStatus = p.pending
      }).addCase(rs.fulfilled, (t, s) => {
        t.checkCaptchaStatus = p.fulfilled
      }).addCase(rs.rejected, t => {
        t.checkCaptchaStatus = p.rejected
      }).addCase(us.pending, t => {
        t.pixelsSoldFetchStatus = p.pending
      }).addCase(us.fulfilled, (t, s) => {
        Xs.upsertMany(t.pixelsSold, s.payload.pixels), t.pixelsSoldTotal = s.payload.total, t.pixelsSoldFetchStatus = p.fulfilled
      }).addCase(us.rejected, t => {
        t.pixelsSoldFetchStatus = p.rejected
      }).addCase(ms.pending, t => {
        t.getUserFetchStatus = p.pending
      }).addCase(ms.fulfilled, (t, s) => {
        t.user = {
          ...s.payload.data
        }, t.country = s.payload.country, t.getUserFetchStatus = p.fulfilled
      }).addCase(ms.rejected, (t, s) => {
        t.getUserFetchStatus = p.rejected
      }).addCase(ds.pending, t => {}).addCase(ds.fulfilled, (t, s) => {
        t.pixelsForSaleTotal = s.payload.myPixelsCount
      }).addCase(ds.rejected, t => {})
    }
  }),
  {
    setLanguageCode: $d,
    setPixelsForSaleOffset: Oo,
    setPixelsForSaleTotal: eu,
    setPixelsForSaleFetchStatus: tu,
    removePixelsForSale: nu,
    setPixelsSoldOffset: RM,
    setPixelsSoldTotal: MM,
    setPixelsSoldFetchStatus: UM,
    removePixelsSold: QM,
    setShowRobotPopup: su,
    addPixelCoins: Tt,
    subtractPixelCoins: au,
    setPixelCoins: Fo,
    updateUserSquad: iu
  } = Qo.actions,
  zo = n => {
    const t = n.user.user;
    return t === null ? null : t.league || null
  },
  ou = n => n.user.userPic,
  Le = n => n.user.user,
  ru = Qo.reducer,
  Fe = {
    getPixelsForSale: ls,
    getPixelsForSaleTotal: ds,
    getPixelsSold: us,
    getVerificatedWallet: os,
    checkCaptcha: rs,
    checkHasCaptchaCode: cs,
    getUser: ms
  },
  cu = () => {
    const n = _(),
      t = c(aa),
      s = c(i => i.shop.selectedCurrency),
      a = c(rt);
    return c(Le), A.useEffect(() => {
      a === je && s === 1 && n(Un(2))
    }, [a]), a !== je ? null : e.jsx("div", {
      className: ft.layout,
      children: e.jsx("div", {
        className: ft.container,
        children: t.map(i => {
          if (i.currency_id === 1) return null;
          const o = s === i.currency_id;
          return e.jsxs("div", {
            className: F(ft.item, o ? ft.active : ""),
            onPointerUp: () => {
              n(Un(i.currency_id))
            },
            children: [e.jsx("div", {
              className: ft.image_container,
              children: e.jsx("img", {
                alt: "img",
                className: ft.image,
                src: i.image
              })
            }), e.jsx("div", {
              className: ft.item_text_container,
              children: e.jsx("span", {
                className: ft.item_text,
                children: i.name
              })
            })]
          }, i.currency_id)
        })
      })
    })
  },
  lu = "/assets/icon_coin-COCalNMQ.gif",
  du = "/assets/icon_stars-BmDiRMAW.gif",
  uu = {
    items: []
  },
  Go = _e({
    name: "toast",
    initialState: uu,
    reducers: {
      addToast: (n, t) => {
        n.items.push(t.payload)
      },
      removeToast: (n, t) => {
        n.items = n.items.filter(s => s.id !== t.payload)
      }
    }
  }),
  {
    addToast: z,
    removeToast: Di
  } = Go.actions,
  mu = Go.reducer,
  Au = () => {
    const n = _(),
      t = c(rt),
      [s, a] = A.useState(1);
    return e.jsx("img", {
      alt: "img",
      className: he.stars_img,
      src: t === je ? lu : du,
      onPointerUp: () => {
        (t !== je || pt.isDev) && (s >= 7 ? (a(1), n(z({
          id: performance.now(),
          text: "Check every 11th word",
          icon: ""
        }))) : a(s + 1))
      }
    })
  },
  pu = ["#FFD700", "#ffc60a", "#FFDF00"],
  hu = () => {
    _();
    const n = c(i => i.shop.order),
      t = c(i => i.shop.products),
      s = c(i => i.shop.available),
      a = c(rt);
    return A.useEffect(() => {}, []), e.jsxs(ue, {
      children: [e.jsxs("div", {
        className: he.stars_img_container,
        children: [e.jsx(Au, {}), e.jsx(Fd, {
          color: () => pu[k(0, 2)]
        })]
      }), e.jsx(pd, {}), e.jsxs("div", {
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
        children: [e.jsx(cu, {}), e.jsx("div", {
          className: he.info_container,
          children: n.map(i => {
            if (t.hasOwnProperty(i)) {
              const o = t[i];
              let r = !((i === 4 || i === 5) && s[i] > 0);
              {
                let l = i >= 9 && i <= 11 ? "limited" : "sale";
                return e.jsx($l, {
                  item: o,
                  active: r,
                  type: l
                }, i)
              }
            }
            return null
          })
        }), e.jsx(Ld, {})]
      })]
    })
  },
  gu = "_text_layout_1xggq_1",
  _u = "_text_1xggq_1",
  fu = "_button_layout_1xggq_14",
  xu = "_button_layout_placeholder_1xggq_26",
  vu = "_button_1xggq_14",
  fn = {
    text_layout: gu,
    text: _u,
    button_layout: fu,
    button_layout_placeholder: xu,
    button: vu
  },
  Hn = "data:image/svg+xml,%3csvg%20height='18'%20viewBox='0%200%2017%2018'%20width='17'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='m.32%208.22c4.81-2.07%208.02-3.43%209.62-4.08%203.48-1.43%204.87-1.96%205.61-2.13.23-.06%201.45.29%201.45%201.18%200%202.58-1.32%208.8-1.87%2011.67-.23%201.22-1.88%201.6-3.74.45-1.47-.91-2.27-1.52-3.68-2.44-1.63-1.05-.58-1.63.35-2.58.25-.25%204.47-4.03%204.55-4.37.01-.04.02-.2-.08-.29-.09-.08-.24-.05-.34-.03-.14.03-2.46%201.54-6.96%204.53-.66.44-1.25.66-1.79.65-.59-.02-1.15-.05-2.56-.6-.94-.37-1.13-1.02-.56-1.96z'%20fill='%23fff'%20fill-rule='evenodd'/%3e%3c/svg%3e",
  yu = () => e.jsxs(ue, {
    children: [e.jsx("div", {
      className: fn.text_layout,
      children: e.jsx("span", {
        className: fn.text,
        children: e.jsx("h1", {
          children: "Probably nothing"
        })
      })
    }), e.jsx("div", {
      className: fn.button_layout_placeholder
    }), e.jsx("div", {
      className: fn.button_layout,
      children: e.jsxs("button", {
        className: fn.button,
        onPointerUp: () => {
          X("https://t.me/notpixel_channel")
        },
        children: [e.jsx("img", {
          alt: "tg_logo",
          src: Hn
        }), "Telegram Channel"]
      })
    })]
  }),
  wu = "_content_9ogc8_1",
  ju = {
    content: wu
  },
  bu = () => {
    const n = te();
    return e.jsx(ue, {
      children: e.jsxs("div", {
        className: ju.content,
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
              n.push("/privacy")
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
  Nu = "_content_7fuxa_1",
  Cu = {
    content: Nu
  },
  Iu = () => e.jsx(ue, {
    children: e.jsxs("div", {
      className: Cu.content,
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
  Pu = "_pixels_amount_ngjsa_1",
  Su = "_general_info_container_ngjsa_6",
  Bu = "_coin_amount_text_ngjsa_12",
  Tu = "_description_container_ngjsa_16",
  Eu = "_description_ngjsa_16",
  Zn = {
    pixels_amount: Pu,
    general_info_container: Su,
    coin_amount_text: Bu,
    description_container: Tu,
    description: Eu
  },
  ku = "_logo_container_1i5of_1",
  Du = {
    logo_container: ku
  },
  Ru = "_layout_1cvcu_1",
  Mu = "_container_1cvcu_10",
  Uu = "_bubble_1cvcu_16",
  Qu = "_move_1cvcu_1",
  ba = {
    layout: Ru,
    container: Mu,
    bubble: Uu,
    move: Qu
  },
  Ou = A.memo(({
    color: n
  }) => {
    const t = Array.from(Array(200));
    return e.jsx("div", {
      className: ba.layout,
      children: e.jsx("div", {
        className: ba.container,
        children: t.map((s, a) => {
          const i = k(1, 8);
          return e.jsx("div", {
            className: ba.bubble,
            style: {
              width: i,
              height: i,
              animationDelay: `-${a*300}ms`,
              transform: `translate3d(${k(-200,500)}px, ${k(-200,200)}px, ${k(0,33)}px)`,
              background: n()
            }
          }, a)
        })
      })
    })
  }, () => !1),
  Fu = "_container_1aw3i_1",
  zu = "_logo_1aw3i_9",
  Gu = "_animate_1aw3i_1",
  Lu = "_center_1aw3i_18",
  Hu = "_glow_1aw3i_28",
  Kn = {
    container: Fu,
    logo: zu,
    animate: Gu,
    center: Lu,
    glow: Hu
  },
  qu = () => e.jsxs("div", {
    className: Kn.container,
    children: [e.jsx("div", {
      className: Kn.glow
    }), e.jsx("div", {
      className: Kn.logo
    }), e.jsx("div", {
      className: Kn.center
    })]
  }),
  Yu = () => e.jsxs("div", {
    className: Du.logo_container,
    children: [e.jsx(Ou, {
      color: () => `hsl(${k(0,360)} , 1000%, 50%)`
    }), e.jsx(qu, {})]
  }),
  Vu = "_container_13oyr_1",
  Xu = "_button_13oyr_11",
  Wu = "_info_13oyr_32",
  bt = {
    container: Vu,
    button: Xu,
    info: Wu
  };
class ca {
  static async claim() {
    return I.get("/mining/claim")
  }
  static async info() {
    return I.get("/mining/status")
  }
  static async checkBoost({
    key: t
  }) {
    return I.get(`/mining/boost/check/${t}`)
  }
  static async checkTask({
    key: t
  }) {
    let s = t,
      a = "";
    if (t === v["channel:notpixel_channel"] || t === v["channel:notcoin_pre_release"] || t === v["channel:purego"] || t === v["channel:seinarukiro"] || t === v["channel:sscaleton"] || t === v["channel:waketonup"] || t === v["channel:GameDevDead"] || t === v["channel:zaegd"] || t === v["channel:fakedonalds"] || t === v["channel:pushinton"] || t === v["channel:notcoin"]) {
      const i = t.split(":");
      s = i[0], a = `?name=${i[1]}`
    }
    if (t === v["x:notpixel"] || t === v["x:notcoin"]) {
      const i = t.split(":");
      s = i[0], a = `?name=${i[1]}`
    }
    return I.get(`/mining/task/check/${s}${a}`)
  }
}
const As = G("mining/info", async () => (await ca.info()).data),
  ps = G("mining/claim", async () => (await ca.claim()).data),
  hs = G("mining/checkTask", async ({
    key: n
  }) => (await ca.checkTask({
    key: n
  })).data),
  gs = G("mining/checkBoost", async ({
    key: n
  }) => (await ca.checkBoost({
    key: n
  })).data),
  Ju = {
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
  Lo = _e({
    name: "mining",
    initialState: Ju,
    reducers: {
      setCheckError: (n, t) => {
        n.checkError[t.payload.key] = t.payload.value
      },
      setActiveTab: (n, t) => {
        n.activeTab = t.payload
      },
      setToggleAction: (n, t) => {
        n.toggleAction[t.payload.action] = t.payload.value
      },
      setAllToggleActions: (n, t) => {
        n.toggleAction = {
          ...n.toggleAction,
          ...t.payload
        }
      },
      setMaxCharges: (n, t) => {
        n.maxCharges = t.payload
      },
      setRechargeSpeed: (n, t) => {
        n.reChargeSpeed = t.payload
      },
      setCharges: (n, t) => {
        n.reChargeTs = Date.now(), n.addedCharges = 0, n.charges = t.payload
      },
      addCharges: (n, t) => {
        n.charges = Math.min(n.charges + t.payload, n.maxCharges)
      },
      addAddedCharges: (n, t) => {
        n.addedCharges += t.payload
      },
      subCharges: n => {
        n.charges === n.maxCharges && (n.addedCharges = 0, n.reChargeTs = Date.now()), n.charges -= 1
      },
      restoreCharges: n => {
        n.charges < n.maxCharges && (n.charges = n.maxCharges)
      },
      setTask: (n, t) => {
        n.tasks[t.payload.task] = t.payload.value
      }
    },
    extraReducers: n => {
      n.addCase(As.pending, t => {
        t.infoStatus = p.pending
      }).addCase(As.fulfilled, (t, s) => {
        const a = s.payload,
          i = Math.min(a.fromStart, a.maxMiningTime);
        a.tasks && (t.tasks = {
          ...t.tasks,
          ...a.tasks
        }), t.walletVerification = a.walletVerification, a.boosts && (t.boosts = {
          ...t.boosts,
          ...a.boosts
        }), t.info = {
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
        }, t.charges = a.charges, t.maxCharges = a.maxCharges, t.reChargeSpeed = a.reChargeSpeed, t.reChargeTs = Date.now() - (a.reChargeSpeed - a.reChargeTimer % a.reChargeSpeed), t.addedCharges = 0, t.infoStatus = p.fulfilled
      }).addCase(As.rejected, t => {
        t.infoStatus = p.rejected
      }).addCase(ps.pending, t => {
        t.claimStatus = p.pending
      }).addCase(ps.fulfilled, t => {
        t.claimStatus = p.fulfilled, t.info = {
          ...t.info,
          coins: 0,
          initTs: Date.now(),
          coinsFromUpdate: 0,
          fromStart: 0,
          fromUpdate: 0
        }
      }).addCase(ps.rejected, t => {
        t.claimStatus = p.rejected
      }).addCase(hs.pending, (t, s) => {
        const a = s.meta.arg.key;
        t.checkStatuses[a] = p.pending, t.checkError[a] = !1
      }).addCase(hs.fulfilled, (t, s) => {
        const a = s.meta.arg.key;
        t.checkStatuses[a] = p.fulfilled, t.tasks[a] = s.payload[a], t.checkError[a] = !s.payload[a]
      }).addCase(hs.rejected, (t, s) => {
        const a = s.meta.arg.key;
        t.checkStatuses[a] = p.rejected, t.checkError[a] = !0
      }).addCase(gs.pending, (t, s) => {
        const a = s.meta.arg.key;
        t.checkStatuses[a] = p.pending, t.checkError[a] = !1
      }).addCase(gs.fulfilled, (t, s) => {
        const a = s.meta.arg.key;
        t.checkStatuses[a] = p.fulfilled, s.payload[a] && (t.boosts[a] += 1), t.checkError[a] = !s.payload[a]
      }).addCase(gs.rejected, (t, s) => {
        const a = s.meta.arg.key;
        t.checkStatuses[a] = p.rejected, t.checkError[a] = !0
      })
    }
  }),
  Na = n => {
    const t = ge.paintReward,
      s = n.main.settings,
      a = s.UpgradeRepaint,
      i = n.mining.boosts[t];
    return i === 1 ? s.RepaintReward : a.levels[i].Boost
  },
  {
    setCheckError: Zu,
    setActiveTab: La,
    setToggleAction: Ho,
    setAllToggleActions: Ku,
    setMaxCharges: $u,
    setRechargeSpeed: em,
    setCharges: tm,
    addCharges: qo,
    addAddedCharges: nm,
    subCharges: sm,
    restoreCharges: OM,
    setTask: am
  } = Lo.actions,
  im = Lo.reducer,
  xe = {
    info: As,
    claim: ps,
    checkTask: hs,
    checkBoost: gs
  },
  Se = "data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M5%200C2.23858%200%200%202.23858%200%205V27C0%2029.7614%202.23858%2032%205%2032H27C29.7614%2032%2032%2029.7614%2032%2027V5C32%202.23858%2029.7614%200%2027%200H5ZM21.4261%2010.5739H10.5739V21.4261H21.4261V10.5739Z'%20fill='white'/%3e%3c/svg%3e",
  om = "data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M5%200C2.23858%200%200%202.23858%200%205V27C0%2029.7614%202.23858%2032%205%2032H27C29.7614%2032%2032%2029.7614%2032%2027V5C32%202.23858%2029.7614%200%2027%200H5ZM21.4261%2010.5739H10.5739V21.4261H21.4261V10.5739Z'%20fill='%238794a1'/%3e%3c/svg%3e",
  rm = {
    white: Se,
    gray: om
  },
  M = ({
    size: n = 11,
    className: t = "",
    style: s = {},
    color: a = "white",
    ...i
  }) => e.jsx("img", {
    alt: "",
    className: t,
    style: {
      width: `${n}px`,
      height: `${n}px`,
      ...s
    },
    src: rm[a],
    ...i
  }),
  cm = ({
    info: n,
    secFromInit: t
  }) => {
    const s = n.coins + n.coinsFromUpdate + t * n.speedPerSecond,
      a = n.coins + Math.max(n.maxMiningTime - (n.fromStart - n.fromUpdate), 0) * n.speedPerSecond;
    let i = 5;
    return n.speedPerSecond > .01 ? i = 2 : n.speedPerSecond > .001 ? i = 3 : n.speedPerSecond > 1e-4 && (i = 4), {
      reward: new Intl.NumberFormat("fr", {
        minimumFractionDigits: i,
        maximumFractionDigits: i
      }).format(Math.min(Number(s), Number(a))).replace(",", ".")
    }
  },
  lm = ({
    left: n,
    secFromInit: t,
    setRunParticle: s
  }) => {
    const a = _(),
      i = c(m => m.mining.claimStatus),
      [o, r] = A.useState(!1),
      l = c(m => m.mining.info),
      {
        reward: d
      } = cm({
        info: l,
        secFromInit: t
      });
    return A.useEffect(() => {
      o && setTimeout(() => {
        r(!1)
      }, 2e3)
    }, [o]), n > 0 || l.coins === 0 && l.speedPerSecond === 0 ? null : o ? e.jsx("div", {
      className: bt.info,
      children: "Something went wrong..."
    }) : i === p.pending ? e.jsx("div", {
      className: bt.info,
      children: "Claiming..."
    }) : e.jsx(re.Fragment, {
      children: e.jsxs("button", {
        style: {
          fontFamily: "arial",
          fontSize: 17
        },
        className: bt.button,
        onPointerUp: async () => {
          var m, h;
          try {
            const g = await a(xe.claim()).unwrap();
            await a(Tt(g.claimed)), s(!0), (h = (m = window.Telegram.WebApp) == null ? void 0 : m.HapticFeedback) == null || h.notificationOccurred("success")
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
  dm = ({
    left: n
  }) => {
    const t = c(s => s.mining.info);
    return n <= 0 || t.coins === 0 && t.speedPerSecond === 0 ? null : e.jsxs("div", {
      className: bt.info,
      children: ["CLAIM IN ", n, " MIN"]
    })
  },
  um = "_layout_1at34_1",
  mm = "_container_1at34_10",
  Am = "_item_1at34_14",
  Ca = {
    layout: um,
    container: mm,
    item: Am
  },
  pm = 8,
  hm = 16,
  gm = 500,
  Yo = 800,
  Ri = window.innerWidth,
  Mi = 100,
  _m = () => Array.from(Array(100)).map(() => {
    const n = k(pm, hm),
      t = `hsl(${k(0,360)} , 70%, 50%)`,
      s = k(gm, Yo),
      a = k(-Ri, Ri),
      i = k(-Mi, Mi);
    return {
      size: n,
      color: t,
      speed: s,
      x: a,
      y: i,
      transform: !1,
      opacity: !1
    }
  }),
  Vo = A.memo(({
    runParticle: n,
    setRunParticle: t
  }) => {
    const [s, a] = A.useState(_m()), [i, o] = A.useState(!1);
    return A.useEffect(() => {
      n && setTimeout(() => {
        o(!0), setTimeout(() => {
          t(!1), o(!1)
        }, Yo)
      }, 200)
    }, [n]), e.jsx("div", {
      className: Ca.layout,
      style: {
        visibility: n ? "visible" : "hidden"
      },
      children: e.jsx("div", {
        className: Ca.container,
        children: s.map((r, l) => e.jsx("div", {
          className: Ca.item,
          style: {
            width: r.size,
            height: r.size,
            backgroundColor: r.color,
            transition: n ? `all ${r.speed}ms ease` : "",
            transform: n ? `translate(${r.x}px, ${r.y}px)` : "translate(0px, 0px)",
            opacity: i ? 0 : 1
          }
        }, l))
      })
    })
  }),
  fm = () => {
    const n = c(t => t.mining.info);
    return n.coins === 0 && n.speedPerSecond === 0 ? e.jsx("div", {
      className: bt.info,
      children: "Paint a pixel to start mining"
    }) : null
  },
  xm = (n, t) => {
    const s = t * 60,
      a = Math.max(s - n, 0);
    return Math.ceil(a / 60)
  },
  vm = () => {
    const n = c(d => d.mining.info),
      [t, s] = A.useState(0),
      a = n.fromStart + t,
      i = c(d => d.main.settings.MinTimeToClaim),
      o = xm(a, i),
      [r, l] = A.useState(!1);
    return A.useEffect(() => {
      let d = null;
      if (n !== null) {
        const m = () => {
          const h = (Date.now() - n.initTs) / 1e3;
          if (h + n.fromStart > n.maxMiningTime) {
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
    }, [n]), e.jsxs("div", {
      className: bt.container,
      children: [e.jsx(Vo, {
        runParticle: r,
        setRunParticle: l
      }), e.jsx(lm, {
        secFromInit: t,
        left: o,
        setRunParticle: l
      }), e.jsx(dm, {
        left: o
      }), e.jsx(fm, {})]
    })
  },
  ym = () => e.jsx("div", {
    className: bt.container,
    children: e.jsx("div", {
      className: bt.info,
      children: "Loading..."
    })
  }),
  wm = () => c(t => t.mining.infoStatus) !== p.fulfilled ? e.jsx(ym, {}) : e.jsx(vm, {}),
  jm = () => {
    const n = c(t => t.user.pixelCoins);
    return new Intl.NumberFormat("fr", {
      maximumFractionDigits: 0
    }).format(Math.max(n, 0)).replace(",", ".")
  },
  bm = "_info_layout_bt2qf_1",
  Nm = "_info_container_bt2qf_10",
  Cm = "_category_container_bt2qf_16",
  Im = "_category_title_bt2qf_22",
  Pm = "_row_container_bt2qf_27",
  Sm = "_info_row_bt2qf_35",
  Bm = "_info_row_pending_bt2qf_59",
  Tm = "_loading_bt2qf_1",
  Em = "_content_bt2qf_74",
  km = "_image_container_bt2qf_83",
  Dm = "_image_bt2qf_83",
  Rm = "_row_main_information_bt2qf_103",
  Mm = "_row_title_bt2qf_114",
  Um = "_row_icon_container_bt2qf_120",
  Qm = "_row_icon_bt2qf_120",
  Om = "_row_main_value_bt2qf_130",
  Fm = "_row_prompt_bt2qf_137",
  zm = "_not_pixel_icon_bt2qf_142",
  Gm = "_row_image_bt2qf_147",
  Lm = "_row_reward_count_bt2qf_153",
  Hm = "_row_reward_completed_bt2qf_158",
  qm = "_priceless_bt2qf_165",
  Ym = "_completed_tasks_container_bt2qf_169",
  Vm = "_completed_task_item_bt2qf_176",
  u = {
    info_layout: bm,
    info_container: Nm,
    category_container: Cm,
    category_title: Im,
    row_container: Pm,
    info_row: Sm,
    info_row_pending: Bm,
    loading: Tm,
    content: Em,
    image_container: km,
    image: Dm,
    row_main_information: Rm,
    row_title: Mm,
    row_icon_container: Um,
    row_icon: Qm,
    row_main_value: Om,
    row_prompt: Fm,
    not_pixel_icon: zm,
    row_image: Gm,
    row_reward_count: Lm,
    row_reward_completed: Hm,
    priceless: qm,
    completed_tasks_container: Ym,
    completed_task_item: Vm
  },
  q = ({
    children: n,
    boost: t,
    enableCheck: s = !0,
    action: a,
    id: i,
    reward: o,
    ...r
  }) => {
    const l = _(),
      d = [u.info_row],
      m = c(y => y.mining.tasks[t]),
      g = c(y => y.mining.checkStatuses[t]) === p.pending,
      f = c(y => y.mining.checkError[t]),
      j = c(y => y.mining.toggleAction[t]),
      x = A.useRef();
    return t && g && d.push(u.info_row_pending), A.useEffect(() => {
      let y = null;
      return f && setTimeout(() => {
        l(Zu({
          key: t,
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
          !t || m || g || f || (a && l(Ho({
            action: t,
            value: !j
          })), a && j || a && !s ? a() : s && l(xe.checkTask({
            key: t,
            reward: o
          })))
        },
        ...r,
        children: n
      })
    })
  },
  Xm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAAXNSR0IArs4c6QAAAGBQTFRFGypAeIX/KTdNXmWDmXv/xG7/0G/+qXb/tnD/3Gv5ZWipjH//g4L/6Gz0OkZc9mnsfnTFV47/2b3lioia5qfuZ4j/oXjhNZD6bYXgsaa7REx1yJr+SVlt8YHyvpXYz4P13SNuwwAAAVZJREFUeNrt11tugzAQheEAhdgmdQ12AHPL/nfZwcQaWvEC40qo8r+ALyfJiCi3WCwWi/2vsuzSIHCcWxsQ1KHB14vzaboumKbcpfVVwaYpCg4Zc1Uwz4tiJccxIFiEAoVgzG+s66uAfS8gpRqIsQX0pDG1y1qtpTwJ5r9AcxRMksejLD+guws3cugT+np3BHTi6t2pYN/vbgTQkytq7RHQbwSSORGv0XEAanvgcfDeWAIJ5tI8bzdOk3tUHAXxTSNYIHgsIbpOKSH63r/I9njwR4sOgjgtICHAlMJrNMad9AVAxNavxpNpSuAQZE4kg0qt17jdKCUVhNaNLCeCSYIHjgu1poL45KGBWfZ87m0cBiqIG9mdAnZdVXkyy9yTBwoH+o3nwQpaSCH8R+A3pmlIkJ0EpWyhrrv9aJ5BpIAJHcTadhz3jmkYpAwOxr+CsVgsFvv7vgHg5COfXLmgNAAAAABJRU5ErkJggg==",
  J = ({
    boost: n
  }) => c(s => s.mining.tasks[n]) ? e.jsx("div", {
    className: u.row_icon_container,
    children: e.jsx(P, {
      size: 20,
      children: ""
    })
  }) : e.jsx("div", {
    className: u.row_icon_container,
    children: e.jsx(P, {
      size: 20,
      children: ""
    })
  }),
  Wm = () => {
    const n = v.premium,
      t = c(a => a.main.settings),
      s = c(a => a.mining.tasks[n]);
    return e.jsx(q, {
      boost: n,
      id: "telegramPremium",
      reward: t.TokensForTelegramPremium,
      children: e.jsxs("div", {
        className: u.content,
        children: [!s && e.jsx("div", {
          className: u.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: Xm,
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
            }), " ", t.TokensForTelegramPremium]
          })]
        }), e.jsx(J, {
          boost: n
        })]
      })
    })
  },
  Xo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAIAAAABc2X6AAABJmlDQ1BBZG9iZSBSR0IgKDE5OTgpAAAoz2NgYDJwdHFyZRJgYMjNKykKcndSiIiMUmA/z8DGwMwABonJxQWOAQE+IHZefl4qAwb4do2BEURf1gWZxUAa4EouKCoB0n+A2CgltTiZgYHRAMjOLi8pAIozzgGyRZKywewNIHZRSJAzkH0EyOZLh7CvgNhJEPYTELsI6Akg+wtIfTqYzcQBNgfClgGxS1IrQPYyOOcXVBZlpmeUKBhaWloqOKbkJ6UqBFcWl6TmFit45iXnFxXkFyWWpKYA1ULcBwaCEIWgENMAarTQZKAyAMUDhPU5EBy+jGJnEGIIkFxaVAZlMjIZE+YjzJgjwcDgv5SBgeUPQsykl4FhgQ4DA/9UhJiaIQODgD4Dw745AMDGT/0ZOjZcAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGh2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDYgNzkuMTY0NjQ4LCAyMDIxLzAxLzEyLTE1OjUyOjI5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjIuMiAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDI0LTA5LTI0VDEwOjM5OjA5KzA0OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyNC0wOS0yNFQxMToyMjo0OCswNDowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyNC0wOS0yNFQxMToyMjo0OCswNDowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MWVkZTI5YTMtOTM2ZS1jNjQxLWJkZDEtNDNmMTA2NTY3ZjMzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjkzNjNmMjgyLWIxOTMtZGY0ZS1hYWEyLWE1OGY3Mjg0Mjk0NSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjkzNjNmMjgyLWIxOTMtZGY0ZS1hYWEyLWE1OGY3Mjg0Mjk0NSI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6OTM2M2YyODItYjE5My1kZjRlLWFhYTItYTU4ZjcyODQyOTQ1IiBzdEV2dDp3aGVuPSIyMDI0LTA5LTI0VDEwOjM5OjA5KzA0OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjIuMiAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmM3ZDdlOWUzLTBhNTEtYzU0ZS1iZTVlLWU2MmY5MzE1ZWMwNyIgc3RFdnQ6d2hlbj0iMjAyNC0wOS0yNFQxMToxNzoyOSswNDowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjIgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoxZWRlMjlhMy05MzZlLWM2NDEtYmRkMS00M2YxMDY1NjdmMzMiIHN0RXZ0OndoZW49IjIwMjQtMDktMjRUMTE6MjI6NDgrMDQ6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi4yIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7U6VMbAAABP0lEQVR42u3asW6DMBSF4TxQp861oWQLmGYpsUkfos/QF2+Prw1RhypbisSPzoCDY93P1wyRcnh67naVA2DAgAEDBgwYMGDAgAEDBgwYMGDA+wN/P/ACDBgwYMCAAQMGDHhv4I/Pr7sBDBjwdsGPXAcwYMCAAQMGzK8lwIABAwYMGDBgwIDvpQmpGaLrL66flCZEP6Z2nNsx6d5pOOToPs8Mcxuur285mvNrwhDbkLowK8fxqujpy2lStLh9PW4CrGqsrHfFnSY/1OIKpsSGs+1C1S7mZLtQ5wtc0gmspyG5Pto+XrQjbivgRfsX2Hp+o3bnmmMe1oNQY332pdXnfAR8PTsC52ylw3LmWCvcWv2tt1Glr11dwcrS5OjXl8KW0icFvBz4LYH5Jx5gwIABAwYMGDBgwIABAwYMGPD/5gdV5YsHhxhyrwAAAABJRU5ErkJggg==",
  Jm = () => {
    const n = v["channel:notpixel_channel"],
      t = c(a => a.main.settings),
      s = c(a => a.mining.tasks[n]);
    return e.jsx(q, {
      boost: n,
      action: () => {
        X("https://t.me/notpixel_channel")
      },
      id: "notPixelChannel",
      reward: t.TokensForJoinChannel,
      children: e.jsxs("div", {
        className: u.content,
        children: [!s && e.jsx("div", {
          className: u.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: Xo,
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
            }), " ", t.TokensForJoinChannel]
          })]
        }), e.jsx(J, {
          boost: n
        })]
      })
    })
  },
  Zm = () => {
    const n = v["x:notpixel"],
      t = c(a => a.main.settings),
      s = c(a => a.mining.tasks[n]);
    return e.jsx(q, {
      boost: n,
      action: () => {
        St("https://x.com/notpixelx")
      },
      id: "notPixelX",
      reward: t.TokensForJoinX,
      children: e.jsxs("div", {
        className: u.content,
        children: [!s && e.jsx("div", {
          className: u.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: Xo,
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
            }), " ", t.TokensForJoinX]
          })]
        }), e.jsx(J, {
          boost: n
        })]
      })
    })
  },
  Km = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQBAMAAAB8P++eAAAAAXNSR0IArs4c6QAAABhQTFRFHCk/6cGp86xt4I5f1YNQq4VwlU8bUzwyVRbffwAAAJZJREFUeNrt1cENw0AIBdG04BZo4bcwLWwLlGDaj7KKkeVTZFAu3jk/gcSF12r1vKAVbsza4PYpaRk62HaiVegCDmoA8hoEY3ZsV0QVojONcC9DMPvKMdxbIDJDEaMPIkW4T9cEkWd1aNYOsWaI3YP7v+7od+Ge8JpLl4lRg5MmTFaAMwklK8HMpWQ1mEWyX+B6yqtVtTf2acUX1leb/QAAAABJRU5ErkJggg==",
  ke = ({
    num: n
  }) => isNaN(n) ? null : new Intl.NumberFormat("en-US").format(n),
  $m = () => {
    const n = te(),
      t = v.invite1fren;
    let s = c(i => i.user.user);
    const a = c(i => i.main.settings);
    return s === null ? null : e.jsx(q, {
      action: () => {
        n.push("/invite-frens")
      },
      boost: t,
      id: "invite1Fren",
      reward: a.TokensForInvite1Fren,
      enableCheck: !1,
      children: e.jsxs("div", {
        className: u.content,
        children: [e.jsx("div", {
          className: u.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: Km,
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
            }), " ", e.jsx(ke, {
              num: a.RefRewardCoinsPremium
            }), " for fren"]
          })]
        }), e.jsx("div", {
          className: u.row_icon_container,
          children: e.jsx(P, {
            size: 20,
            children: ""
          })
        })]
      })
    })
  },
  eA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQBAMAAAB8P++eAAAAAXNSR0IArs4c6QAAAB5QTFRFHCk/9fPq//Bh0cq8/9YA/8cA/ZIAqZyM9mYAiF8iNQ3eYAAAALRJREFUeNrt1TGRRTEMQ1FTMAVTMAVBWC0EUQiFUAjbHe/M+5lfvcIpcxs1p5fdbrdujAiehIyKB6FbVDoGYRbhFjgHAwoznIOENCOgY1DEVIB2BgY0Jf6Amog3+Eu+wIA051RVE2jCfyawHKGi6EEbawlPrrnSmjDXIt2L0d3lbei55O5O0qtsw/T06jOjC0fml+vCLbfrw5GZD8vRhFtW2/VgyfGwcn1YtNrsHd4bvd16/QEV+IbgR8VccAAAAABJRU5ErkJggg==",
  tA = () => {
    const n = v.paint20pixels,
      t = c(i => i.main.settings),
      s = c(i => i.mining.info),
      a = c(i => i.mining.tasks[n]);
    return s === null ? null : e.jsx(q, {
      boost: n,
      id: "pain20pixels",
      reward: t.TokensForPaint20Pixels,
      children: e.jsxs("div", {
        className: u.content,
        children: [!a && e.jsx("div", {
          className: u.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: eA,
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
            }), " ", t.TokensForPaint20Pixels]
          })]
        }), e.jsx(J, {
          boost: n
        })]
      })
    })
  },
  nA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQBAMAAAB8P++eAAAAAXNSR0IArs4c6QAAABVQTFRFHCk//PuG/+wo/8gA/5IA9mYAb0QgBXY6pgAAAJ9JREFUeNrt1TGNBEEQQ9GiUBQ+BVMwBVMY/hBOVxptvFJXtv0DRy933W6/lkCrkO5uFqF60h4EuoE1KLq6u9AWhKegHtiCotvuRlvQggTkFYhctkB2WRxDYstvssMhlJ0IDUOJrUOYKtNMjapyBifRbwzagLxuC5pP3oHxx2UDjtQ0bgGOnFJrsPLOGoz/11mCsuw8T2xZX8P7zbfbQX+axVI3GU07RQAAAABJRU5ErkJggg==",
  sA = () => {
    const n = te(),
      t = v.invite3frens;
    let s = c(o => o.user.user);
    const a = c(o => o.main.settings),
      i = c(o => o.mining.tasks[t]);
    return s === null ? null : e.jsx(q, {
      action: () => {
        n.push("/invite-frens")
      },
      boost: t,
      id: "invite3Frens",
      reward: a.TokensForInvite3Frens,
      children: e.jsxs("div", {
        className: u.content,
        children: [!i && e.jsx("div", {
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
              children: ["Invite frens • ", Math.min(s.friends, 3), "/3", " "]
            })
          }), !i && e.jsxs("div", {
            children: ["Get ", e.jsx(M, {
              className: u.not_pixel_icon
            }), " ", a.TokensForInvite3Frens]
          })]
        }), e.jsx(J, {
          boost: t
        })]
      })
    })
  },
  aA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQBAMAAAB8P++eAAAAAXNSR0IArs4c6QAAABtQTFRFHCk/8/Dl/+Qy/9sA/8cA/6lU86MA2YQQn1IBegOu8wAAAIlJREFUeNrt1DERA0EMQ1FTCAVTMAVROAqiYAqGnfFFTbpM1tWNf/0aNbJt27a/ig5zEKEwAOXc3SUHINtJghMQHyc5APkNeQ6B8JdluzkYZubdCLwS8LLCFLyuWwLeBZAHUK5lhAvSzmFWEdG0p+QBVFWV5E1B0g6hbFKlzUBRZtmvcN96257eG1BkaXWD691mAAAAAElFTkSuQmCC",
  iA = () => {
    const n = v.joinSquad;
    let t = c(i => i.user.user);
    const s = c(i => i.main.settings),
      a = c(i => i.mining.tasks[n]);
    return t === null ? null : e.jsx(q, {
      boost: n,
      id: "joinSquad",
      reward: s.TokensForJoinSquad,
      children: e.jsxs("div", {
        className: u.content,
        children: [!a && e.jsx("div", {
          className: u.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: aA,
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
          boost: n
        })]
      })
    })
  },
  ui = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQBAMAAAB8P++eAAAAAXNSR0IArs4c6QAAABhQTFRFHCk//9dK/7cA/pYA2n0AvlkAmjEAXjEUlqfz5AAAAKhJREFUeNrt1cFpRFEMQ1G1oBbUglpwC2pBLUz74Q8hmeXA8/JdMMZw9sbtdjvJohNLpBYgB5i0TWYCDA8hC7/iNB7LL6M8gwKAKh1bfF86gy6AcP5hfQYhAKUfyDc0DiEMVMpYpAHhGMKtObGo1FiAMGplqIGxAgPEIz97Bz61KZ7W4IjahchgGY6WoSmuQqcm92D/WoPU8Jk9+OvWYD/6Gt5nerud9AMgnFxPBQmwaAAAAABJRU5ErkJggg==",
  oA = () => {
    var o, r;
    const n = v.leagueBonusSilver,
      t = c(l => l.main.settings),
      s = (r = (o = window.Telegram.WebApp.initDataUnsafe) == null ? void 0 : o.user) == null ? void 0 : r.is_premium,
      a = c(l => l.mining.tasks[n]),
      i = s ? t.TokensForSilverLeaguePremium : t.TokensForSilverLeagueCommon;
    return e.jsx(q, {
      boost: n,
      id: "leagueBonusSilver",
      reward: i,
      children: e.jsxs("div", {
        className: u.content,
        children: [!a && e.jsx("div", {
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
              children: "Silver League Bonus"
            })
          }), !a && e.jsxs("div", {
            children: ["Get ", e.jsx(M, {
              className: u.not_pixel_icon
            }), " ", s ? t.TokensForSilverLeaguePremium : t.TokensForSilverLeagueCommon]
          })]
        }), e.jsx(J, {
          boost: n
        })]
      })
    })
  },
  rA = () => {
    var r, l;
    const n = v.leagueBonusGold,
      t = c(d => d.mining.tasks[v.leagueBonusSilver]),
      s = c(d => d.main.settings),
      a = (l = (r = window.Telegram.WebApp.initDataUnsafe) == null ? void 0 : r.user) == null ? void 0 : l.is_premium,
      i = c(d => d.mining.tasks[n]),
      o = a ? s.TokensForGoldLeaguePremium : s.TokensForGoldLeagueCommon;
    return t ? e.jsx(q, {
      boost: n,
      id: "leagueBonusGold",
      reward: o,
      children: e.jsxs("div", {
        className: u.content,
        children: [!i && e.jsx("div", {
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
              children: "Gold League Bonus"
            })
          }), !i && e.jsxs("div", {
            children: ["Get ", e.jsx(M, {
              className: u.not_pixel_icon
            }), " ", a ? s.TokensForGoldLeaguePremium : s.TokensForGoldLeagueCommon]
          })]
        }), e.jsx(J, {
          boost: n
        })]
      })
    }) : null
  },
  cA = () => {
    var r, l;
    const n = v.leagueBonusPlatinum,
      t = c(d => d.mining.tasks[v.leagueBonusGold]),
      s = c(d => d.main.settings),
      a = (l = (r = window.Telegram.WebApp.initDataUnsafe) == null ? void 0 : r.user) == null ? void 0 : l.is_premium,
      i = c(d => d.mining.tasks[n]),
      o = a ? s.TokensForPlatinumLeaguePremium : s.TokensForPlatinumLeagueCommon;
    return t ? e.jsx(q, {
      boost: n,
      id: "leagueBonusPlatinum",
      reward: o,
      children: e.jsxs("div", {
        className: u.content,
        children: [!i && e.jsx("div", {
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
              children: "Platinum League Bonus"
            })
          }), !i && e.jsxs("div", {
            children: ["Get ", e.jsx(M, {
              className: u.not_pixel_icon
            }), " ", a ? s.TokensForPlatinumLeaguePremium : s.TokensForPlatinumLeagueCommon]
          })]
        }), e.jsx(J, {
          boost: n
        })]
      })
    }) : null
  },
  lA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAIAAAABc2X6AAABJmlDQ1BBZG9iZSBSR0IgKDE5OTgpAAAoz2NgYDJwdHFyZRJgYMjNKykKcndSiIiMUmA/z8DGwMwABonJxQWOAQE+IHZefl4qAwb4do2BEURf1gWZxUAa4EouKCoB0n+A2CgltTiZgYHRAMjOLi8pAIozzgGyRZKywewNIHZRSJAzkH0EyOZLh7CvgNhJEPYTELsI6Akg+wtIfTqYzcQBNgfClgGxS1IrQPYyOOcXVBZlpmeUKBhaWloqOKbkJ6UqBFcWl6TmFit45iXnFxXkFyWWpKYA1ULcBwaCEIWgENMAarTQZKAyAMUDhPU5EBy+jGJnEGIIkFxaVAZlMjIZE+YjzJgjwcDgv5SBgeUPQsykl4FhgQ4DA/9UhJiaIQODgD4Dw745AMDGT/0ZOjZcAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGh2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDYgNzkuMTY0NjQ4LCAyMDIxLzAxLzEyLTE1OjUyOjI5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjIuMiAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDI0LTA5LTI0VDExOjA1OjE0KzA0OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyNC0wOS0yNFQxMToyMjoxMyswNDowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyNC0wOS0yNFQxMToyMjoxMyswNDowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NGU1YjQ1ZGMtMDA0MC0xNTRkLWIzYWMtNDRkNGJjOWU4Y2JlIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOmFjOGM1YWVjLWQ0YjctZGQ0YS05ZTJkLTczNjcwMTRkZjQ4NiIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmFjOGM1YWVjLWQ0YjctZGQ0YS05ZTJkLTczNjcwMTRkZjQ4NiI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YWM4YzVhZWMtZDRiNy1kZDRhLTllMmQtNzM2NzAxNGRmNDg2IiBzdEV2dDp3aGVuPSIyMDI0LTA5LTI0VDExOjA1OjE0KzA0OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjIuMiAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmM1NDNmYzg1LTZhNjMtZTY0MS1iYzMzLTRiNWU5OWM2NDY5MCIgc3RFdnQ6d2hlbj0iMjAyNC0wOS0yNFQxMToxNzozMCswNDowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjIgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo0ZTViNDVkYy0wMDQwLTE1NGQtYjNhYy00NGQ0YmM5ZThjYmUiIHN0RXZ0OndoZW49IjIwMjQtMDktMjRUMTE6MjI6MTMrMDQ6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi4yIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6TN+2hAAAAr0lEQVR42u3auwmAQBAFQAsysgHB3AIEi7AGGz8zMRE8XT94s7z0HTvpsVXddEWlAgYGBgYGBgYGBgYGBgYGBgYGBv49OGVOVBcYGPg8OAXNOM1ZuY4HBi4XnG6eIztcxwMDA78J3tsHGBgYGBgYGBgY+Mvgth/WRCG3b+Yic7vAwKWDo/BR3Ud/LYGBfwbewx9JVBcYGNhRCzAwMDAwMDAwMDAwMDAwMDAwMPDnsgAsAtPYi2unugAAAABJRU5ErkJggg==",
  dA = () => {
    const n = te(),
      t = v.openLeague;
    let s = c(a => a.user.user);
    return c(a => a.main.settings), s === null ? null : e.jsx(q, {
      boost: t,
      enableCheck: !1,
      action: () => n.push("/open-league"),
      id: "openLeague",
      children: e.jsxs("div", {
        className: u.content,
        children: [e.jsx("div", {
          className: u.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: lA,
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
          boost: t
        })]
      })
    })
  },
  $n = ({
    text: n
  }) => e.jsx("div", {
    className: u.category_container,
    children: e.jsx("span", {
      className: u.category_title,
      children: n
    })
  }),
  uA = () => {
    const n = v.spendStars,
      t = c(a => a.main.settings),
      s = c(a => a.mining.tasks[n]);
    return e.jsx(q, {
      boost: n,
      id: "spendStars",
      reward: t.TokensForSpendStars,
      children: e.jsxs("div", {
        className: u.content,
        children: [!s && e.jsx("div", {
          className: u.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: li,
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
            }), " ", t.TokensForSpendStars]
          })]
        }), e.jsx(J, {
          boost: n
        })]
      })
    })
  },
  mA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAABiUlEQVR4nO3coU7DUBhH8UJ4ACQKxyRz8+BROB4DO43lMXBT0+MBcASHRE3yBqD7T6Bpz73tFefnmqXNdvLly93ETq6ub346TXZqOsaAkAEhA0IGhAwIGRAyIGRAyICQASEDQgaEDAgZEDIgZEDIgJABIQNCBoTOSj3o8/11qc8wyWp9W+Q5TiBkQMiAULEdmO4fn9D9u+dt77r080pxAiEDQgaEqu3A3Dnjz139+z8Oh1F3z3UudQIhA0IGhIrtwM3dQ+/6bf8y7ycZkO+vFCcQMiBkQKjYDvz+Ov77ep7LSv0e99fz09D7m8oJhAwIGRCq9l146XNhrXNfcgIhA0IGhKrtwDx35U6i58K8P59f69yXnEDIgJABoWo7MNXeSXPtvOQEQgaEDAgt9q8d55cXveux35WXOvclJxAyIGRAqJl/Lhraia3svOQEQgaEDAg1++9tuRNb2XnJCYQMCBkQmu33wLFa3XnJCYQMCBkQMiBkQMiAkAEhA0IGhAwIGRAyIGRAouu6XySITdXe7YNeAAAAAElFTkSuQmCC",
  AA = () => {
    const n = _(),
      t = v.walletVerification,
      s = c(h => h.main.settings),
      [a] = cn(),
      i = c(h => h.mining.tasks[t]),
      o = wc(),
      r = jc(),
      l = s.TokensForWalletVerification,
      d = c(h => h.mining.infoStatus),
      m = async () => {
        if (i || !o) return;
        const h = await n(xe.checkTask({
          key: t,
          reward: l,
          disableFailPopup: !0
        }));
        if (h.meta.requestStatus === p.fulfilled && h.payload[t]) return;
        if (r) {
          await a.disconnect(), n(z({
            id: performance.now(),
            text: "Wallet disconnected. Click again."
          }));
          return
        }
        a.setConnectRequestParameters({
          state: "loading"
        });
        const g = await W.generateTonProofPayload();
        if (g.status === 200 && g.data && g.data.payload) {
          const f = g.data;
          a.setConnectRequestParameters({
            state: "ready",
            value: {
              tonProof: f.payload
            }
          }), await a.openModal()
        } else n(z({
          id: performance.now(),
          text: "Something went wrong, try again"
        }))
      };
    return A.useEffect(() => {
      var h;
      !o || d !== p.fulfilled || r && (i || (h = r == null ? void 0 : r.connectItems) != null && h.tonProof && !("error" in r.connectItems.tonProof) && W.checkTonProof(r.connectItems.tonProof.proof, r.account).then(g => {
        g.status === 200 && g.data.success ? n(xe.checkTask({
          key: t,
          reward: l
        })) : n(z({
          id: performance.now(),
          text: "Something went wrong. Try later, or try another wallet."
        }))
      }))
    }, [r, o, d, i]), e.jsx(q, {
      boost: t,
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
            src: mA,
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
          boost: t
        })]
      })
    })
  },
  Wo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAIAAAABc2X6AAABJmlDQ1BBZG9iZSBSR0IgKDE5OTgpAAAoz2NgYDJwdHFyZRJgYMjNKykKcndSiIiMUmA/z8DGwMwABonJxQWOAQE+IHZefl4qAwb4do2BEURf1gWZxUAa4EouKCoB0n+A2CgltTiZgYHRAMjOLi8pAIozzgGyRZKywewNIHZRSJAzkH0EyOZLh7CvgNhJEPYTELsI6Akg+wtIfTqYzcQBNgfClgGxS1IrQPYyOOcXVBZlpmeUKBhaWloqOKbkJ6UqBFcWl6TmFit45iXnFxXkFyWWpKYA1ULcBwaCEIWgENMAarTQZKAyAMUDhPU5EBy+jGJnEGIIkFxaVAZlMjIZE+YjzJgjwcDgv5SBgeUPQsykl4FhgQ4DA/9UhJiaIQODgD4Dw745AMDGT/0ZOjZcAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGh2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDYgNzkuMTY0NjQ4LCAyMDIxLzAxLzEyLTE1OjUyOjI5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjIuMiAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDI0LTA5LTI0VDEwOjEzOjA1KzA0OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyNC0wOS0yNFQxMToyMTo0NSswNDowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyNC0wOS0yNFQxMToyMTo0NSswNDowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OWE1ZTFkNmEtMDFkMy01MTRjLWI1ZGQtZjQ1YTZjZmMzYzU3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjNlNWY4MjgyLTc1NjEtMDQ0Zi1hMWM1LTYzN2ViZmQyYjcxNSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjNlNWY4MjgyLTc1NjEtMDQ0Zi1hMWM1LTYzN2ViZmQyYjcxNSI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6M2U1ZjgyODItNzU2MS0wNDRmLWExYzUtNjM3ZWJmZDJiNzE1IiBzdEV2dDp3aGVuPSIyMDI0LTA5LTI0VDEwOjEzOjA1KzA0OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjIuMiAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjUwMjg3MDBiLTJkNWItMGU0OS05MmYyLWM0Y2U0OWE4ODAwNiIgc3RFdnQ6d2hlbj0iMjAyNC0wOS0yNFQxMToxNzoyNSswNDowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjIgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo5YTVlMWQ2YS0wMWQzLTUxNGMtYjVkZC1mNDVhNmNmYzNjNTciIHN0RXZ0OndoZW49IjIwMjQtMDktMjRUMTE6MjE6NDUrMDQ6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi4yIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5KGBqWAAAAxElEQVR42u3aywmDQBQFUAtylQYE9ykgYBHWkMZ1J7OJPHyO8XMedzXI4NlcGMemffWPSgMMDAwMDAwMDAwMDAwMDAxcIVMxwMDA1wBPgQEGBj4XuMQM43dJZB0YGPhc4Mw6MDDwceBfhRSBHVNgwMDA0YNB5gNAvQMGMDDw2st178+SDLjcBxgYeH9wplQyz+fxwMDAW4oqA963wICBgaOXY7UHGBh4O7gskn8FGBjYz6XAwMDAwMDAwMDAwMDAwMC3zAwlcvXsnlyGdQAAAABJRU5ErkJggg==",
  pA = () => {
    const n = v["channel:notcoin"],
      t = c(a => a.main.settings),
      s = c(a => a.mining.tasks[n]);
    return e.jsx(q, {
      boost: n,
      action: () => {
        X("https://t.me/notcoin")
      },
      id: "notCoinChannel",
      reward: t.TokensForJoinChannel,
      children: e.jsxs("div", {
        className: u.content,
        children: [!s && e.jsx("div", {
          className: u.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: Wo,
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
            }), " ", t.TokensForJoinChannel]
          })]
        }), e.jsx(J, {
          boost: n
        })]
      })
    })
  },
  hA = () => {
    const n = v["x:notcoin"],
      t = c(a => a.main.settings),
      s = c(a => a.mining.tasks[n]);
    return e.jsx(q, {
      boost: n,
      action: () => {
        St("https://x.com/thenotcoin")
      },
      id: "notCoinX",
      reward: t.TokensForJoinX,
      children: e.jsxs("div", {
        className: u.content,
        children: [!s && e.jsx("div", {
          className: u.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: Wo,
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
            }), " ", t.TokensForJoinX]
          })]
        }), e.jsx(J, {
          boost: n
        })]
      })
    })
  },
  Jo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAACTElEQVR4nO2cvUrDUBiGv7QdVJwcHcTBjvYeegOuTiJaRBA3BwuioqC0UtHB4uDgpXgPOppBHBydRB0kkZPktLHUmvblmE95nyUY22N8+nDy0xCvXKmGQkamQHUYFAhCgSAUCEKBIBQIQoEgFAhCgSAUCEKBIBQIQoEgFAhCgSAUCEKBIBQIQoEgFAhCgSAll4O/vb7I08OdBB/vv/G/9KVQGpPp2XkZn5h0M76TURPylmcwf99shyucFmjlNQ7ir54LoYgnIl6yjH4O408xWoY/rOt9X5gaK+iOJanXLbQ9px8i50AQCgShQBAKBKFAEAoEcXoYMwrHl3NDvau17Oe6vSwQRF2BlsfnwWXNTA1XqitYIIiaAk/acVFZy2uu+NGpmuR8gzILBPkzAk156Xlv+5pz4L8g9znw9CLb3Jf+vZY9sLBAHDV74X5V9VZpX9NY9aOLp3nvgYUF4uRe4Nam37l8/92xoC3vqOZHl+o1lGdhgSBqz4UlVd7hmp45rxcWCKKyQFve3rqO891BsEAQVQXWN/wvX6xrLs/CAkEoEIQCQSgQhAJBKBDE6WGMuTvU3JtX3/cyvf58N4wOY4rm8CUQKSbrvWRdMYiXi2fZxktvhyucFmhurXW58Vmwt/i6QtWTi+5vb6Jleyfs1FZIlbfUissrV6o5b2kXzoEgKp+dZUu8qsdzYq2przwLCwRR/fQ2W6LG8iwsEET1JX3N5VlYIAgFglAgCAWCUCAIBYJQIAgFglAgCAWCUCAIBYJQIAgFglAggoh8Ap/jkinpc8FdAAAAAElFTkSuQmCC",
  gA = () => {
    const n = c(i => i.user.user),
      t = v.boostChannelNotPixel,
      s = c(i => i.main.settings),
      a = c(i => i.mining.tasks[t]);
    return !n || !n.isPremium ? null : e.jsx(q, {
      action: () => {
        X("https://t.me/boost/notpixel_channel")
      },
      boost: t,
      id: "notPixelBoostChannel",
      reward: s.TokensForBoostChannelNotPixel,
      children: e.jsxs("div", {
        className: u.content,
        children: [!a && e.jsx("div", {
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
              children: "Boost Not Pixel Channel "
            })
          }), !a && e.jsxs("div", {
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
  _A = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAIZklEQVR4nO1cW6gkRxn+qrp7TvfMnNseEyFgFCVC8rJCnnYXxRdvURHMQlj3wD5pBDcqK2QhkLBvWSWIkgc3PkRNsvoWLwuCiMIBzYO7L+ZJ0E0egiFPZ/ecmTPT1yqpv7vm2jOTOT3TNXH7gz41p7u6p+rr/6//UlXDHj75WYkKxwavqCuGisCCqAgsiIrAgqgILIiKwIKoCCyIisCCqAgsiIrAgqgILIiKwIKoCCyIisCCqAgsiIrAgrBNN+Dkx2qIW4dwI6DpOYDk8DwPlmXR9Xa7nXtfwgX+9p5VcmvHYZxAdnAE6Qc4AofDI1KKNdeGiCO6HoSd3PskU38b5TY2B5UKF4QxCXzEOwBjDA5suGtpMzY2Nqg8PDzs1cs7p8Ak8PkHLUiZTun8+R1RYuv7MKrCuvNFoF6CSZRKoDIY/E5qFE6sb1MZ+D7ibLxrtVpU1uv1nhHRaDabY2R1Oh0kSUKfv/rxHSpvvNUtpzMZSiUwbrcgQ58+W9xLz2XkYUAibXu8WZyPD9dxHPc+R1G4lDbPQqkEehHHEct3PWIOWElK4DS15BIImYQ1ov3CkCaXSuCHd7YQxalboo2CNhIKVy5dggTPlTYNZTyefeGHiuWh830jU65rU7IR4WOek5IoLT2c2RCQ043LwKXBe03BmBVeX1+n8geXvo/N2hoSMDTcNUBMt8yK3CtPX4bDLVz96Y/R6vqk8qNuTlkwRqAe55o1F16tlp6cQZ6+b8N1s/rMuBvzgY5ETJOHsiXwvf19dIPUiGxk0UcRZ3r38bN0vzqeffHFhbVzHnzgY+FFRDNFUOr6wEe3op4E3nznv9R5x6vBkoLe5alTp+jarVu3EEXRxOfoejdv3oQfhfScwI9Ipes1FxEYGAS8rYeW3icjRkR12A8T6nDQ7oJJTt5JJ0gTAgftYCqBut7hUdirV0vS8bCVpJGOFAze1vL7YkSFafCXnI6EcfLnVPeJAil7nwcPW6akxZzDFuP1Iis91DNJrVk8qxkLgTE3Zu8nL1BHv/zcZci7CboOsLe3R9dOnz4Nx3HSent7RPgfnr8K3mRwkxhf/O4V+DzOrXfigUdK7UepBKZaluXtuCApUv8r8iQT1ByG/LxeIhkaiQWp1N6JwMRq2L9SCXzm4kU4TJKkNNdsksB//OI6LKHUT+Lk47uk2cqIaOt65swZKnc+tA1P6S7v+3559f71drkRSakEbqrJIvSNgyJyy6tRyZiEtBNA8CEDolNbTPpgaAIstbo07uXUKxulfms6uM+4PuDXpcSyXF9P5tQzgVIJPDhowUZqHTe31kcIYXj3xu/G7tHEtI+6lKkB3F69VqeffT79vatLbn0+jE9rzoKWtFnSawqlEvjEj17ufX798gUq79u5v5cb/c/ttwEm8NGPPNhzTzTqngfGlcOdGKRrHMYkcHRcU/8LkbowluWM1VdJai4FxApkYAaxAioshgIixiyyyHkx0qCHaAmB2JKwk3toWnMalLH45EOfgBVx4NFPQVr1qfVjcIg33gCSltF2GyeQj3oodky+IJsysaRgMRUfT044lAVjBP7+L3+lce/CuXNoODaFcuv1BiBstP79Jhrd6Us1JONoHProThfUpcMYgZ0wyhxgvdIqlbjEEqgfhXg/SUrT5GEVJpVQMKtsOiNtjMBzX/oClb+6fh2dWFAe79I3L8zxBI6fv/oK2oFZv9C4H9iPY4/njtxTq7Py8LlPfwaMVmIx/Oy1V8ElR73uwmLTrTCDxC9vvWuq2T0YJ9Bbq5ER4YKjHcSUUlVhXMymW2FuZj3lGFbCkVaBR8IkuMoJKgcZHJacrpqRtRoMGidw68Q2rcZSDvXF8+cpjGPDa4gId/b3hyyuIvrlv98uvb2jWJlQTq+yUnnBPMdEESZFX+okW42fu1mpfODO1vZIyqCPjfUGbG4Rkbdvm5c8jZUikLIwE9yZmp2muEw7zqOo9okUxMIl8LEnd0tpOJcxvvadXUQzFiColQ9/uvbK8tqxtCffIyi0Ouvst55AaLnDJ21nbJxKooBKbtd6oRuP0hj2K5sc94uQ1rzs7OzQnIhaeK4MRh6Ulb785j/hRU0kjRrqdrq69eDggMpGozE0R6wWLvnBHcRROj1649prC32zhVQ4AEMihoN5G87E+HRw/jbM7qup1Hw290sHGCxm53iC2fOlhOW7aDsRHkAT4ch3KfIGv18wiTBgEGw5+0gKqXAyI16dChWqMQE3apITrQKPhKsOC0quyixPOHpARgicGLbgCN7H6+d6Z6d00mPBKKTCjz35DWri5uZmfwK840+sr1S5txup5vbPCUbE6S7LbNFRHiQXuG+rDik9UtvR4cJy1sY0wHVd2Nm7vnt3n8o/vvTrhTBZSIXVytJCUkg0cTCWDKiCyFzBCbGwtIi8SeC0fmF4/LSHmrhYuzm3BO4+dRadyKaGuuvbSJiNMAxp+ZmCEJOD/EEJ1FKiNhXKCdu/JkFvROx2u7CykE5JHpVM0ksZhCJQn/PWUjVOOi34IoSVMPz2pd/M9f1Dz573hnbsIcxIqHEnXSVFe9zmGwl6SzZoHni+pKh+SYoYrcH6GSJHcmOB3pCg6x3FymjZiGUxiaz8wIIoNRbWaqYQZ9tetY943OfNK73TjNxxUElgQSxcAutuGhkEQdAzLHkYlMbjQBkxRgbj/2xSSe/1TY3E5M4VnU1TrsoqJLaWp8J85dduLgQL76UepJUqa2lc9MC9SliiBK62fdLuPpsx+zcLS9Mz3w97W/KVy6LGPJVq0lLZ8c38yoaGbdfSLWaM4evfPk+j6uvX5o+Pl0agihboLWcjvTIqKgRbhU3SyIwYZXpUak0yJHOGkxqVH1gEAP4HsRgdoFaJYVAAAAAASUVORK5CYII=",
  fA = () => {
    const n = v.makePixelAvatar,
      t = c(a => a.main.settings),
      s = c(a => a.mining.tasks[n]);
    return e.jsx(q, {
      action: () => {
        X("https://t.me/notpixime_bot")
      },
      boost: n,
      reward: t.TokensForMakePixelAvatar,
      children: e.jsxs("div", {
        className: u.content,
        children: [!s && e.jsx("div", {
          className: u.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: _A,
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
          boost: n
        })]
      })
    })
  },
  xA = () => {
    const n = c(i => i.user.user),
      t = v.boostChannelNotCoin,
      s = c(i => i.main.settings),
      a = c(i => i.mining.tasks[t]);
    return !n || !n.isPremium ? null : e.jsx(q, {
      action: () => {
        X("https://t.me/boost/notcoin")
      },
      boost: t,
      id: "notCoinBoostChannel",
      reward: s.TokensForBoostChannelNotPixel,
      children: e.jsxs("div", {
        className: u.content,
        children: [!a && e.jsx("div", {
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
              children: "Boost Notcoin Channel "
            })
          }), !a && e.jsxs("div", {
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
  vA = "_blocker_wufj5_1",
  yA = "_popup_wufj5_11",
  Ui = {
    blocker: vA,
    popup: yA
  },
  zt = ({
    show: n,
    setShow: t,
    children: s
  }) => {
    const [a, i] = A.useState(!1), [o, r] = Gs(() => ({
      from: {
        transform: "translateY(100%)"
      },
      config: {
        duration: 300,
        easing: Ls.easeOutCubic
      }
    })), [l, d] = Gs(() => ({
      from: {
        opacity: 0
      },
      config: {
        duration: 300,
        easing: Ls.easeOutCubic
      }
    }));
    return A.useEffect(() => {
      n ? (i(!0), r.start({
        transform: "translateY(0%)"
      }), d.start({
        opacity: 1
      })) : n === !1 && (r.start({
        transform: "translateY(100%)",
        onResolve: () => i(!1)
      }), d.start({
        opacity: 0
      }))
    }, [n]), a ? ze.createPortal(e.jsxs(re.Fragment, {
      children: [e.jsx(Hs.div, {
        className: Ui.blocker,
        style: {
          ...l
        },
        onPointerUp: m => {
          m.stopPropagation(), t(!1)
        },
        onTouchMove: m => {
          m.stopPropagation()
        },
        onPointerMove: m => {
          m.stopPropagation()
        }
      }), e.jsx(Hs.div, {
        className: Ui.popup,
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
  wA = "/assets/adsgram-D63qdz_D.png",
  gt = () => window.plausible,
  jA = () => window.Adsgram.init({
    blockId: pt.app.adsgramBlockId,
    debug: pt.isDev,
    debugBannerType: "FullscreenMedia"
  }),
  bA = 31 * 1e3,
  NA = k(0, 100),
  CA = NA <= 100;
let Qi = !1;
const Oi = () => {
    const n = localStorage.getItem("adsgramNextView") || Date.now();
    return Math.max(Math.ceil((n - Date.now()) / 1e3), 0)
  },
  IA = () => {
    c(Le);
    const n = _(),
      t = jA(),
      s = c(Mo),
      a = v.adsgram,
      i = v.watchAd;
    c(j => j.mining.tasks[a]);
    const o = c(j => j.mining.tasks[i]),
      r = c(j => j.user.country),
      l = gt(),
      [d, m] = A.useState(Oi()),
      [h, g] = A.useState(Qi),
      f = 16;
    return A.useEffect(() => {
      const j = setInterval(() => {
        m(Oi())
      }, 1e3);
      return () => {
        clearInterval(j)
      }
    }, []), !CA || h || s !== "mobile" || o === !1 ? null : e.jsxs(q, {
      enableCheck: !1,
      action: () => {
        d === 0 && t.show().then(j => {
          n(Tt(f)), n(z({
            id: performance.now(),
            text: "16 PX earned!",
            icon: ""
          })), localStorage.setItem("adsgramNextView", `${Date.now()+bA}`), l("task_adsgram1", {
            props: {
              country: r,
              result: !0
            }
          })
        }).catch(j => {
          n(z({
            id: performance.now(),
            text: "Something went wrong."
          })), g(!0), Qi = !0, l("task_adsgram1", {
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
            src: wA,
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
  PA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAABZElEQVR4nO3cza2CQBRA4cHYiHtLsBCKsAGDS4kNWARd4soECUTkDNxZnG/3Fs57nNzBv8mrTudLn7TawXSMASEDQgaEDAgZEDIgZEDIgJABIQNCBoQMCBkQMiBkQMiAkAEhA0IGhAwIHSN/+fN+zbbW7fHKttY/wiYwZ7wt1lsq5Hvh8cXWdb16ra7rvn7eexLD74EkXo7HU6H3wLmLb5pm9jFt206uM57EvfgsDIVO4JypKSuVEwgZEDIgZEDIgJABIQNCBoSKeyHd978/26iqape/ZQknEDIgVOR74Y/hVl2ytSM4gZABoaK3cKnbdsgJhAwIFbeFS3qRvIQTCBkQMiBkQMiAkAEhA0IGhEID5joQFHWwKJUwgfTiI+OlqAOWaaMTpRHHfMMmMPfFRp2R9l8/QT4LQwaEDAgZEDIgZEDIgJABIQNCBoQMCBkQMiBkQMiAkAEhA0IGhAwIGZBIKb0B7eY0Ujl2RcIAAAAASUVORK5CYII=",
  SA = () => {
    const n = _(),
      t = c(Bt),
      s = v.addToHomeScreen,
      a = c(o => o.mining.tasks[s]),
      i = 128;
    return t ? e.jsx(q, {
      action: () => {
        window.Telegram.WebApp.checkHomeScreenStatus(o => {
          o === {
            unsupported: "unsupported",
            unknown: "unknown",
            added: "added",
            missed: "missed"
          }.added ? (n(xe.checkTask({
            key: s,
            reward: i
          })), n(z({
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
            src: PA,
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
  BA = "data:image/gif;base64,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",
  TA = () => {
    const n = _(),
      t = c(Bt),
      s = v.addEmoji,
      a = 256,
      i = c(r => r.mining.tasks[s]),
      o = c(r => r.user.user);
    return !o || !o.isPremium || !t ? null : e.jsx(q, {
      action: () => {
        window.Telegram.WebApp.requestEmojiStatusAccess(r => {
          r ? window.Telegram.WebApp.setEmojiStatus("5447461825023072674", {}, l => {
            l ? (n(xe.checkTask({
              key: s,
              reward: a
            })), n(z({
              id: performance.now(),
              text: "Emoji set"
            }))) : n(z({
              id: performance.now(),
              text: l
            }))
          }) : n(z({
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
            src: BA,
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
  EA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAADmklEQVR4nO2cz2oTURSHT5OAEUSsgqBQaAl0EbKQLkXBZiMibrrwCXwCFy58ABcufII+gxsp4kYFpcviorgQSgoFC4JFpGAXJpFzM2dycnpnksxx7h3C+SDcOzN3Qubr7/7JZOjSWufOEIzC1EydDhOoxAQqMYFKTKASE6jEBCoxgUpMoBITqMQEKjGBSkygEhOoxAQqMYFKTKASE6jEBCoxgUpMoBITqKRRlQ/y8/sB/D45nqnt5as34NrNVumfaRaiCpTS3teWZjqve3LszquCyCgCuTgubX0wKr/VxnXfNp3TTd4jpsTgAkkeSeBiQMiiOr6uv2ON7o8KfI/YEoNOIlweieHIpFEd5f1IpGFJMvE4vtesY2cZBBXI5UEibB5IHpdI4B8nBsEE+i5QJjALnzDax1MYQ2IwgTJ9ReEyfRJDU5l14CzwFPJ6o14HGPZdHVMYckIJIvB/dC2aROS4OUp0H9bZrLxwArXdl0vzzdyS3v7nYIvsynVhn5A88fJY6EV2JW4moDQS9/TBarrft1acBp0TamaOmkAprb25Am0A2N5ccdtPnn1yZZ7ErLUkSSx7TCxdoEwAv2AUR9KIrx+OJo4jr94eulJ+PwaRWGxXdJFelNKf0scB/dbDNVfHC9x+efdcGy5t781IeK1Wg8FgkJYbj1qpSEjEYVvZ7mOjnrbpDoalTyZBujCmDCVJeT5xHJQij6NIrO9ltLv3t5+2g51e6ZNItDEQ5ZFYFOIumEGpBZLB4Nt57UIQTGA7mRjkNpZ44fK4D0rstLbY7stOz3XfsgmawM7uaVrfv30prVMSIUOOPMa7vg+St1ALaZS32rw43rF7ek4iZMjJSq+EJy/U17loY6CTmSTSJ5LDE0hjp69NaHkQS+DBrzNoXWmOE8lETksg7+5VIJhAl7KkG6M8lIhIkZ0LyxOJ9JE3iWAKIeBvJEETKCVCkkbwiCwCyn+8tQzPX49WiQt5N4YkQjIO5oosyIutDSdxYW9npV2UzcxSpIZ6M9y1RL0bw9MIIpFFOTz749IXYhENVbihOjFhFBz7OCRv4deBPqbNvnnEWgdW9vG2rLWeb38seVDlnzWzFsxyDRhTHlT9d+F57rrEerio9DvS8zw4WYTYzwjaP95RYs9IKzGBSkygEhOoxAQqMYFKTKASE6jEBCoxgUpMoBITqMQEKjGBSkygEhOoxAQqMYFKTKASE6jEBCoxgRoA4B95qZ/x3prlhgAAAABJRU5ErkJggg==",
  kA = () => {
    const n = v.unitsWallet;
    return c(t => t.mining.tasks[n]), c(t => t.user.country), null
  },
  DA = k(0, 100),
  RA = DA <= 10,
  MA = () => {
    const n = v.skinlabTask,
      t = c(s => s.mining.tasks[n]);
    return c(s => s.user.country), !RA && !t && !pt.isDev, null
  },
  UA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAACyklEQVR4nO2cT0iTYRzH361ZyRRqFcxDgoaQFV2SoCVERBBdFC/ZIejQxUs3L96Vrtmx6DwjJCQqpA4NZuHAP4FDREYWZixd6DbMZZvwe/YeLDef9X3/Hb6fy3ds75732WdfePb+Yb6Wc50lg/w3fqrDoEAQCgShQBAKBKFAEAoEoUAQCgShQBAKBKFAEAoEoUAQCgShQBAKBKFAEAoEoUAQCgShQBAKBAl4dWL1wSOSkd4ByXdP+tULPp+b0/oHNhDEM3cmhJpOSV7ve1R1u1KxKDk62CO5/bvgwOwqwwaCuNbA5rOdkpduDVgy3uuH9yQ31r5ZMp4ubCCIYw08f+2OZPuV207szvgQHZT8kozbuh82EMT2Bl7sui/ZcuGG/Z9mDz4+fyBPLn2K2TI+Gwhi+5HI7PhTyeDRsGQuo1bJ1o6blu5nI/1ZMjU1LnkgcFDSruaZsIEgtjdwazMnmf3xVbLxxEnJdGpGsrCZlTzefEbycOMxrXFTiVeS+fX0rufN5i1OvrToE1SHDQRx/Ejk6t0hre2Kf7Ylw20dkrNvHkv6A3Va75uPj4Iz1YMNBHG8gYfqGyQjmsfAKwsJyf2aZ5KMPcMmWCNsIIjjZ6TNVTmXWZFsCDVZMu7S9FtLxqkVNhDEtWsiiTF15nnfVVnzGkg+m7FiWjXDBoK4flVuYkQ1sOKqXKr+IyEZGyk/cudqHRsI4noDzVU5n/kuGQyFd71eqtDA5TnzTLO714nZQBDP3JkwOTYsqXusvL62bPOM9GADQTx3b0w8qhp4uXxPjP+v34HJ91H1wOeN754NBPFcAwu/yqvyT3WmuWioVXh1cUpt4JHmmbCBIJ7/35jTkW7J+YkXrs9lL9hAEP5zEQgbCEKBIBQIQoEgFAhCgSAUCEKBIBQIQoEgFAhCgSAUCEKBIBQIQoEgFAhCgSAUCEKBIBSIYBjGDiltmN/9syZ+AAAAAElFTkSuQmCC",
  QA = () => {
    const n = v.spendTokens,
      t = c(a => a.mining.tasks[n]),
      s = 512;
    return e.jsx(q, {
      boost: n,
      reward: s,
      children: e.jsxs("div", {
        className: u.content,
        children: [!t && e.jsx("div", {
          className: u.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: UA,
            className: u.image
          })
        }), e.jsxs("div", {
          className: u.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: u.row_title,
              children: "Spend Crypto"
            })
          }), !t && e.jsxs("div", {
            children: ["Get ", e.jsx(M, {
              className: u.not_pixel_icon
            }), " ", s]
          })]
        }), e.jsx(J, {
          boost: n
        })]
      })
    })
  },
  OA = "data:image/png;base64,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",
  FA = k(0, 100),
  zA = FA <= 100,
  GA = () => {
    const n = v.frogApp,
      t = c(i => i.mining.tasks[n]),
      s = 512,
      a = gt();
    return !zA && !t ? null : e.jsx(q, {
      boost: n,
      action: () => {
        X("https://t.me/frogfarmbot/frogfarm?startapp=291096007"), a("task_frogApp")
      },
      reward: s,
      children: e.jsxs("div", {
        className: u.content,
        children: [!t && e.jsx("div", {
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
              children: "Join the Frog team now!"
            })
          }), !t && e.jsxs("div", {
            children: ["Get ", e.jsx(M, {
              className: u.not_pixel_icon
            }), " ", s]
          })]
        }), e.jsx(J, {
          boost: n
        })]
      })
    })
  },
  Zo = "data:image/png;base64,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",
  LA = k(0, 30),
  HA = LA <= 100,
  qA = () => {
    const n = v.earnCoin,
      t = c(i => i.mining.tasks[n]),
      s = 512,
      a = gt();
    return !HA && !t ? null : e.jsx(q, {
      boost: n,
      action: () => {
        X("https://t.me/earn/join"), a("task_earncoin")
      },
      reward: s,
      children: e.jsxs("div", {
        className: u.content,
        children: [!t && e.jsx("div", {
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
              children: "Hold to Earn"
            })
          }), !t && e.jsxs("div", {
            children: ["Get ", e.jsx(M, {
              className: u.not_pixel_icon
            }), " ", s]
          })]
        }), e.jsx(J, {
          boost: n
        })]
      })
    })
  },
  YA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABWVBMVEUNDADYuQD/2gD10QCVgAAZFgB8agD71wAfGwBsXQDaugBxYQDApQCgiQBFPAAYFQDHqgCZgwCNeQA2LwBOQwAYFgAQDgEaFwOXgQD+2QAUEgLpyDj51jxlVxZmWABNQxDgwDZaTQAWFAKAbh3mxje0myroyDgrJgi1nCv82ABeUAAtKAiQinBYWFKxlwCymAD31DuYe2g9PTZ4aADoxgCUfyI2LwpYNx35dCmuUx1dUADhwjb5pjLbZiT4cylFJQpZTAASEAH5gSzzcShqWwD20gBBOA35zzvafyjwcCfAWx86IAiTfgDOsABYTBPKrTBMQhDXuACMeADJrTDuzDktJwDGqgqSfSLDpy5+bR2ahADsygAqJABgUxXLrgDryQChiyZjVQDbvCEnIgDBpi7+2QghHQCpkijCpi4ZFgOOeyEPDgF0ZBqHdB+IdR94aBtUSBIYFQP///9938y/AAAAAWJLR0RyNg4NWAAAAAd0SU1FB+gMDhUDH68kltAAAAHHSURBVFjD7dXpMwJhAMfxp4cSkbuk7SAkVCi6I3Shg0qhUzpZ1f//hp0m26Zpl5n1LLPfV+0+v/nMNG2zAPDx8f3bBAI4tLGx8XGhED0oEk1MDLsvFk9OTk0RsESCFpyenpkZdS6VEujsLDpwbm5+nm6zsADh4iKXQQCWliBcXuYKKJPJ5V93KysKBXpwdVWpxD5TqahLCNVqtKBGgw2k1fYv19YgRAmur/cYnW5jo/d5c5P6pVGCW1s9pHtfr9/eJq+6GQw7O+hA8qfY3SVP9/aMRvLKZDKbuQDu75OnBweHh+SVxWK1cgEkOjo6PgbAZrPbHQ5y63QyeHBYA12uwT+e223/yOPxek9OutvTU5Sgz0flzs7sfZ2fE5uLC78fHQhAIEAlg8FQKBwmuMvLqyticX0diaADo9FYjArG44Pbm5vbWzRgIoENLZmkvlAhTKV+H7y7w0aWTveDtBwLYCaD0XR/310+PDw+chPsvaggzGa5CuZyAOTzhQIDDhFYLJZKjB4ZZODTE4TlMirw+ZkerFSqVYYcC2CtRsfV64wxVsBGYxTWbH4LYwUE4OXl9RXH3z7D8Var3e50fkCxBPLx8f253gHh8OgNxI6rkgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNC0xMi0xNFQyMTowMzozMSswMzowMP/7ShMAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjQtMTItMTRUMjE6MDM6MzErMDM6MDCOpvKvAAAAAElFTkSuQmCC",
  VA = k(0, 100),
  XA = VA <= 100,
  WA = () => {
    const n = v.duckChain,
      t = c(i => i.mining.tasks[n]),
      s = 512,
      a = gt();
    return !XA && !t ? null : e.jsx(q, {
      boost: n,
      action: () => {
        X("https://t.me/DuckChain_bot/quack?startapp=dab7ZIxC"), a("task_duckChain")
      },
      reward: s,
      children: e.jsxs("div", {
        className: u.content,
        children: [!t && e.jsx("div", {
          className: u.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: YA,
            className: u.image
          })
        }), e.jsxs("div", {
          className: u.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: u.row_title,
              children: "Join $DUCK for Airdrop"
            })
          }), !t && e.jsxs("div", {
            children: ["Get ", e.jsx(M, {
              className: u.not_pixel_icon
            }), " ", s]
          })]
        }), e.jsx(J, {
          boost: n
        })]
      })
    })
  },
  JA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAEtUlEQVR4nO2czW8UZRzHv8906e4qxRrcksqLEYInTWqw7bIFfCnUoyeMCv8A9GI8yEET76YcOKiJejChCRENiVdh9SJl20RT2pMhaAqtRIyREAO77e485pmZ7vuyzH6nM67+Pk0DM93nmef5zPM88zy/mR31+fSs1lqjG1FKIR6PUyUvFArotP7m+Fa3yjMEUXYmD5PWokvwP0cEkohAEhFIIgJJRCCJCCQRgSQikEQEkohAEhFIIgJJLBOS6VaCKDuTh0kb4+JpGvl8gUgPJBLm+J1Xgo3nsfFEsgsH0Xq5PNh4HouMgSQikEQEkohAEhFIIgJJRCCJCCQRgSSxqAuglIZSFrS2zdIArdYGZtmltWpICydFdOv5CASaCttYXJjD4vwsbv++grt3/8LqWgG27UpsxtHjJ5BJT5SXX8oCzky9j3zhb4yMvoJ05rDXocKVGYFAG+emP8bC/GV/qYzcGjSKxQJurdzANxe+wC/Xf8ZbxycB1bMhpW5F6GNgbuY73/KaUm6pbjdevDqD3JVs0MVtCy3QbzxtbvbShnQy5eSd9YT6gYvIxMKMpxnXifhm7Ni1B9oTv3ovj9t/LFd9RuOR5BY8ntrmbmuvikUbSzevVeWmkRoYRElXunYstsl3HZh4pqm/+uxsjjoFiUTC50Hdf9fP2fLNazj94buVHQrYP3YEr78x6W27+8+f+wS5Hy6Wtw1vn5rCwBPb64/QcV06IfSLSENjN2exavqitKrtVFVTF+dTDac72lsSMpEmCb0FWnUNxm2RqjyYt55K12KGAuX81OUXdIHbEKpAU+mZXBalUtHdhoIulTB64Ii37fbYvXufbZ+ZVrj642X09W/1FiMaltWD4eGXQu3WoQo0y7Xz0x+5yzaPnbv24J1TUzVj3UPlBY3sxQu1O5WF4RderFypQkDGQBIRSPLvENi9D0eEO5E2Q1PuyiXYpcoYqO0Sln/7tW3aVGoQ8cSj1fNoh7W1VS8jAD0WRkZe/i9fRIB0Zrxm342l6/j6y0/bTl+OHjuJsbGJuomKwv17ee9/4U9hEMlKxK4PiuKhqu6uQlSrcGEk8iAXEZ7QW2B9MMFpWcpdA6/vMTvqu7Q79jVrZw2L6+AL/QCor7t2Es46c/o9FIv5cjhrIDWIQ4df8xZlbjkWfppB9tvaSXJ//1Zs3tLfMEmujlTHYr04MflBaBIDeD7Q7/N52rmHcWtlqbKnZGObE5KqVNpZntVx586fzu+D2L7zaSSTyZbj5EZAj4H+Wq/CyOh43b5gamv0pzMTocpDFBeR9P5xPDeU8arc2NX8dL7qzw7tO4QDB18NpIx+CP+unLLw5rFJ7N79DOZmv0dsU2/DRyxzz1I1P7fO1+wtC72xOPr6HsOTO57C0L6DGHo+7fw97Baozn41Tx0yn88TqbVzTai/Yb5+p601yjwd7wwf8USSKT5NxE8mtJoYN+/e1djlQGy0yESaRASSiEASEUgiAklEIIkIJBGBJCKQJPTnA4Mn2rfPhfp8YCP8943Z9Az0+wP579t28Q1heX9gMIhAEhFIIgJJRCCJCCQRgSQikEQEkohAEhFIIgJJRCAJ9f7AqN/fFzVKKfwDdAJ/2SCF1eEAAAAASUVORK5CYII=",
  ZA = k(0, 100),
  KA = ZA <= 100,
  $A = () => {
    const n = v.trmnl,
      t = c(i => i.mining.tasks[n]),
      s = 512,
      a = gt();
    return !KA && !t ? null : e.jsx(q, {
      boost: n,
      action: () => {
        X("https://t.me/terminalgame_bot/terminalgame?startapp=notpixel&startApp=notpixel"), a("task_trmnl")
      },
      reward: s,
      children: e.jsxs("div", {
        className: u.content,
        children: [!t && e.jsx("div", {
          className: u.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: JA,
            className: u.image
          })
        }), e.jsxs("div", {
          className: u.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: u.row_title,
              children: "Play Coinflip and get $TRMNL"
            })
          }), !t && e.jsxs("div", {
            children: ["Get ", e.jsx(M, {
              className: u.not_pixel_icon
            }), " ", s]
          })]
        }), e.jsx(J, {
          boost: n
        })]
      })
    })
  },
  ep = "data:image/png;base64,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",
  tp = k(0, 100),
  np = tp <= 100,
  sp = () => {
    const n = v.starHash,
      t = c(r => r.mining.tasks[n]),
      s = 512,
      a = gt(),
      o = c(r => r.user.languageCode) === "ru" ? "Майни токены, получай награды!" : "Mine tokens, get rewards!";
    return !np && !t ? null : e.jsx(q, {
      boost: n,
      action: () => {
        X("https://t.me/starshash_bot/starshash"), a("task_starHash")
      },
      reward: s,
      children: e.jsxs("div", {
        className: u.content,
        children: [!t && e.jsx("div", {
          className: u.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: ep,
            className: u.image
          })
        }), e.jsxs("div", {
          className: u.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: u.row_title,
              children: o
            })
          }), !t && e.jsxs("div", {
            children: ["Get ", e.jsx(M, {
              className: u.not_pixel_icon
            }), " ", s]
          })]
        }), e.jsx(J, {
          boost: n
        })]
      })
    })
  },
  ap = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAApBJREFUeJztmj9OG0EUxr8xyxW4gStKhGjQKgUHSME5Io4ScQ4L+QAUFl0UUbqiS0mRFimJbYrEyAzelTffvPd2V9+vsxnPn9++92Z22YR/XH37s4E4mPuLKgFAguT9N/cXVUqSxzGJnsDQkUASCSSRQBIJJJFAEgkkkUASCSSRQJLq10v0FIaNIpBEAkkkkEQCSSSQRAJJJJCk8hpoUcddq08Pa7O+XVYVKc96fKUwiXkK51ffMp3axl7UE5OxXSPQU57XeKYCo2tfjsV83FboHX1e45oJ7Fv0bSk9L5dVRkWfx/gmAvsafVtKzs98pdHRt8VqHtX6Z9kOHz6/vyal+y/Fop6gnvNSTQ/SbRPcFe3Vrp6vP1xgln4XqwFgKvDk9Oig76PalcBU4Gy6/+XX/PuodiUoLjCvP3nNaapB3u1KbCAAkC7vbN6RLl2sS1JKHixTuOQkS1J6Xm6P9He5fkp4Xq7ePp+cHu2tT6XbWWCWwuhwhrPGch79LVQDQQJJJJAkZBPZ0lbs843Bsg+GMIF/C3vz/jWbboBp+xOTQ/uwJCSFu9yTNrXty0E9JALzlGu7/ZtNN6iXaPw7GlLV6ywYfhn3pWhb2uYRWc/Xe+vc83L1oR+Ls2i4wK7sRtX1U2pt65HmgxO4S9sOa/X0JWfQApvwkgcA1csPn5vupnEOGb/Lb79/eV8jz29tz4GjikBveRiTwAh5GIvAKHnwFJgvslSfkfIAIJ19/W26i1iIa8JbHjwi0GtREfLglcKWizu/XYXJg+fDhMhFWjKKXTgSCSSRQBIJJJFAEgkkkUASCSSRQBIJJJFAEgkkkUASCSSRQBIJJEkAYP1/kbHyeHOc3t7OkcRuPN4cJwB4Bc3bAcUjskiMAAAAAElFTkSuQmCC",
  ip = k(0, 100),
  op = ip <= 100,
  rp = () => {
    const n = v.stickerStore,
      t = c(i => i.mining.tasks[n]),
      s = 1024,
      a = gt();
    return !op && !t ? null : e.jsx(q, {
      boost: n,
      action: () => {
        X("https://t.me/sticker_bot?startapp"), a("task_stickerStore")
      },
      reward: s,
      children: e.jsxs("div", {
        className: u.content,
        children: [!t && e.jsx("div", {
          className: u.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: ap,
            className: u.image
          })
        }), e.jsxs("div", {
          className: u.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: u.row_title,
              children: "Sticker Store: Pudgy Penguins, BAYC and others"
            })
          }), !t && e.jsxs("div", {
            children: ["Get ", e.jsx(M, {
              className: u.not_pixel_icon
            }), " ", s]
          })]
        }), e.jsx(J, {
          boost: n
        })]
      })
    })
  },
  cp = {
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
  lp = () => {
    const n = c(j => j.user.country),
      t = n ? n.toUpperCase() : "NULL",
      s = cp[t] ? 1 : 2,
      o = s === 1 ? 74738 : 74739,
      r = v.taskTypeCampaign6_74738,
      l = v.taskTypeCampaign5_74739,
      d = s === 1 ? r : l,
      m = c(j => j.mining.tasks[r]),
      h = c(j => j.mining.tasks[l]),
      g = m || h,
      f = 1024;
    return n ? e.jsx(q, {
      action: () => {
        X(`https://t.me/community_bot/join?startapp=id_${o}`)
      },
      boost: d,
      reward: f,
      children: e.jsxs("div", {
        className: u.content,
        children: [!g && e.jsx("div", {
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
  dp = "/assets/task_boinkers-DM7UoyVq.png",
  up = () => {
    const n = v.boink2,
      t = c(a => a.mining.tasks[n]),
      s = gt();
    return e.jsx(q, {
      action: () => {
        X("https://t.me/boinker_bot/boinkapp?startapp=campNotPixelDec"), s("task_boink_dec")
      },
      boost: n,
      reward: 512,
      children: e.jsxs("div", {
        className: u.content,
        children: [!t && e.jsx("div", {
          className: u.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: dp,
            className: u.image
          })
        }), e.jsxs("div", {
          className: u.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: u.row_title,
              children: "Boinkers: Spin the Slot 10 Times"
            })
          }), !t && e.jsxs("div", {
            children: ["Get ", e.jsx(M, {
              className: u.not_pixel_icon
            }), " ", 512]
          })]
        }), e.jsx(J, {
          boost: n
        })]
      })
    })
  },
  mp = "/assets/task_cryptotravel-S1j0pk50.jpg",
  Ap = () => {
    const n = v["channel:purego"],
      t = c(a => a.mining.tasks[n]),
      s = 256;
    return e.jsx(q, {
      action: () => {
        X("https://t.me/purego")
      },
      boost: n,
      reward: s,
      children: e.jsxs("div", {
        className: u.content,
        children: [!t && e.jsx("div", {
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
              children: "Crypto Travel"
            })
          }), !t && e.jsxs("div", {
            children: ["Get ", e.jsx(M, {
              className: u.not_pixel_icon
            }), " ", s]
          })]
        }), e.jsx(J, {
          boost: n
        })]
      })
    })
  },
  pp = "/assets/task_seinar-DKi6qDse.png",
  hp = () => {
    const n = v["channel:seinarukiro"],
      t = c(a => a.mining.tasks[n]),
      s = 256;
    return e.jsx(q, {
      action: () => {
        X("https://t.me/seinarukiro")
      },
      boost: n,
      reward: s,
      children: e.jsxs("div", {
        className: u.content,
        children: [!t && e.jsx("div", {
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
              children: "ꜱᴇɪɴᴀʀᴜᴋɪʀᴏ"
            })
          }), !t && e.jsxs("div", {
            children: ["Get ", e.jsx(M, {
              className: u.not_pixel_icon
            }), " ", s]
          })]
        }), e.jsx(J, {
          boost: n
        })]
      })
    })
  },
  gp = "/assets/task_scale-DZDk4Npm.jpg",
  _p = () => {
    const n = v["channel:sscaleton"],
      t = c(a => a.mining.tasks[n]),
      s = 256;
    return e.jsx(q, {
      action: () => {
        X("https://t.me/sscaleton")
      },
      boost: n,
      reward: s,
      children: e.jsxs("div", {
        className: u.content,
        children: [!t && e.jsx("div", {
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
              children: "Scale"
            })
          }), !t && e.jsxs("div", {
            children: ["Get ", e.jsx(M, {
              className: u.not_pixel_icon
            }), " ", s]
          })]
        }), e.jsx(J, {
          boost: n
        })]
      })
    })
  },
  fp = "/assets/task_wakeup-DUWjoCuC.jpg",
  xp = () => {
    const n = v["channel:waketonup"],
      t = c(a => a.mining.tasks[n]),
      s = 256;
    return e.jsx(q, {
      action: () => {
        X("https://t.me/waketonup")
      },
      boost: n,
      reward: s,
      children: e.jsxs("div", {
        className: u.content,
        children: [!t && e.jsx("div", {
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
              children: "Wakeup!"
            })
          }), !t && e.jsxs("div", {
            children: ["Get ", e.jsx(M, {
              className: u.not_pixel_icon
            }), " ", s]
          })]
        }), e.jsx(J, {
          boost: n
        })]
      })
    })
  },
  vp = () => {
    const n = v.earnCoin2,
      t = c(i => i.mining.tasks[n]),
      s = 512,
      a = gt();
    return e.jsx(q, {
      boost: n,
      action: () => {
        X("https://t.me/community_bot/join?startapp=id_74747"), a("task_earncoin2")
      },
      reward: s,
      children: e.jsxs("div", {
        className: u.content,
        children: [!t && e.jsx("div", {
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
              children: "Earn Early, dude"
            })
          }), !t && e.jsxs("div", {
            children: ["Get ", e.jsx(M, {
              className: u.not_pixel_icon
            }), " ", s]
          })]
        }), e.jsx(J, {
          boost: n
        })]
      })
    })
  },
  yp = () => e.jsxs("div", {
    className: u.info_container,
    children: [e.jsx(IA, {}), e.jsx(vp, {}), e.jsx(up, {}), e.jsx(lp, {}), e.jsx(rp, {}), e.jsx(sp, {}), e.jsx(WA, {}), e.jsx($A, {}), e.jsx(GA, {}), e.jsx(qA, {}), e.jsx(MA, {}), e.jsx(kA, {}), e.jsx($m, {}), e.jsx($n, {
      text: "Frens and supporters"
    }), e.jsx(Ap, {}), e.jsx(hp, {}), e.jsx(_p, {}), e.jsx(xp, {}), e.jsx($n, {
      text: "Quick start"
    }), e.jsx(tA, {}), e.jsx(sA, {}), e.jsx(iA, {}), e.jsx($n, {
      text: "Special"
    }), e.jsx(AA, {}), e.jsx(SA, {}), e.jsx(TA, {}), e.jsx(fA, {}), e.jsx(xA, {}), e.jsx(gA, {}), e.jsx(Wm, {}), e.jsx(oA, {}), e.jsx(rA, {}), e.jsx(cA, {}), e.jsx(uA, {}), e.jsx(QA, {}), e.jsx($n, {
      text: "Browser"
    }), e.jsx(Jm, {}), e.jsx(Zm, {}), e.jsx(pA, {}), e.jsx(hA, {}), e.jsx(dA, {}), e.jsx("div", {
      style: {
        height: 30
      }
    })]
  }),
  wp = () => {
    const n = _(),
      [t, s] = A.useState(!1);
    return A.useEffect(() => {
      function a(i) {
        i.ctrlKey && i.altKey && i.keyCode === 67 && (async () => {
          try {
            await Ln(window.Telegram.WebApp.initData), await n(z({
              id: performance.now(),
              text: "Copied!"
            }))
          } catch {
            await n(z({
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
    }, []), t ? e.jsx("div", {
      style: {
        overflowWrap: "break-word",
        userSelect: "text"
      },
      children: window.Telegram.WebApp.initData
    }) : null
  },
  jp = () => {
    const n = _(),
      t = c(a => a.user.pixelsForSaleOffset),
      s = c(a => a.user.pixelsForSaleLimit);
    return A.useEffect(() => {
      n(Fe.getPixelsForSale({
        offset: t,
        limit: s
      }))
    }, [t, s, n]), null
  },
  bp = "_container_7jsmf_1",
  Np = "_row_7jsmf_6",
  Cp = "_cell1_7jsmf_26",
  Ip = "_cell2_7jsmf_30",
  Pp = "_cell3_7jsmf_36",
  Sp = "_icon_arrow_7jsmf_40",
  Bp = "_header_7jsmf_47",
  Tp = "_data_7jsmf_57",
  Ep = "_title_7jsmf_63",
  kp = "_pixelColor_7jsmf_68",
  Dp = "_pixelCoords_7jsmf_77",
  Rp = "_pixelPriceValue_7jsmf_83",
  Mp = "_pixelPriceDescription_7jsmf_91",
  Up = "_pixelState_7jsmf_95",
  Qp = "_pixelDate_7jsmf_100",
  Op = "_paginationContainer_7jsmf_107",
  Fp = "_loadMoreButton_7jsmf_114",
  zp = "_noPixelsContainer_7jsmf_136",
  Gp = "_noPixelsText_7jsmf_143",
  Lp = "_pixelsForSaleCountText_7jsmf_149",
  Hp = "_skeleton_container_7jsmf_153",
  qp = "_skeleton_header_7jsmf_157",
  Yp = "_skeleton_row_7jsmf_166",
  oe = {
    container: bp,
    row: Np,
    cell1: Cp,
    cell2: Ip,
    cell3: Pp,
    icon_arrow: Sp,
    header: Bp,
    data: Tp,
    title: Ep,
    pixelColor: kp,
    pixelCoords: Dp,
    pixelPriceValue: Rp,
    pixelPriceDescription: Mp,
    pixelState: Up,
    pixelDate: Qp,
    paginationContainer: Op,
    loadMoreButton: Fp,
    noPixelsContainer: zp,
    noPixelsText: Gp,
    pixelsForSaleCountText: Lp,
    skeleton_container: Hp,
    skeleton_header: qp,
    skeleton_row: Yp
  },
  mi = Vs.getSelectors(n => n.user.pixelsForSale);
Xs.getSelectors(n => n.user.pixelsSold);
const Ai = Ws.getSelectors(n => n.daily.list);
di.getSelectors(n => n.reward.list);
const Ko = kn.getSelectors(n => n.tournament.approvedTemplatesList),
  Vp = () => {
    const n = c(s => s.user.pixelsForSaleFetchStatus);
    return c(mi.selectTotal) === 0 && n === p.fulfilled ? e.jsx("div", {
      className: oe.noPixelsContainer,
      children: e.jsx("span", {
        className: oe.noPixelsText,
        children: "You don't have Pixels..."
      })
    }) : null
  },
  $o = n => e.jsx("div", {
    className: `${oe.cell1}`,
    children: n.children
  }),
  er = n => e.jsx("div", {
    className: `${oe.cell2}`,
    children: n.children
  }),
  tr = n => e.jsx("div", {
    className: `${oe.cell3}`,
    children: n.children
  }),
  Xp = () => e.jsxs("div", {
    className: `${oe.row} ${oe.header}`,
    children: [e.jsx($o, {
      children: e.jsx("span", {
        className: oe.title,
        children: "Pixel"
      })
    }), e.jsx(er, {
      children: e.jsx("span", {
        className: oe.title,
        children: "Value"
      })
    }), e.jsx(tr, {
      children: e.jsx("span", {
        className: oe.title,
        children: "Status"
      })
    })]
  }),
  Wp = n => e.jsxs("div", {
    className: oe.container,
    children: [e.jsx(Xp, {}), e.jsx("div", {
      className: oe.data,
      children: n.children
    })]
  }),
  Jp = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  He = n => {
    const t = new Date().getFullYear(),
      s = n.getFullYear(),
      a = s === t ? "" : s,
      i = n.getMonth(),
      o = n.getDate(),
      r = n.getHours(),
      l = n.getMinutes();
    return `${o<10?0:""}${o} ${[Jp[i]]} ${a} at ${r<10?0:""}${r}:${l<10?0:""}${l}`
  },
  Zp = ({
    date: n
  }) => e.jsx("div", {
    className: oe.pixelDate,
    children: He(new Date(n))
  }),
  Kp = ({
    coords: n
  }) => e.jsxs("div", {
    className: oe.pixelCoords,
    children: [n.x, ", ", n.y]
  }),
  $p = ({
    color: n
  }) => e.jsx("div", {
    className: oe.pixelColor,
    style: {
      backgroundColor: n
    }
  }),
  eh = "_main_canvas_1cgxj_1",
  th = {
    main_canvas: eh
  },
  Js = n => ({
    x: (n - 1) % E.width,
    y: Math.floor((n - 1) / E.height)
  }),
  ht = ({
    x: n,
    y: t
  }) => n + t * E.width + 1,
  Qn = ({
    x: n,
    y: t,
    width: s,
    blockSize: a = 4
  }) => (n + t * s) * a,
  Ia = ({
    index: n,
    width: t,
    blockSize: s = 4
  }) => {
    const a = Math.floor(n / s);
    return {
      x: a % t,
      y: Math.floor(a / t)
    }
  },
  Ut = n => {
    const t = parseInt(n.replace("#", ""), 16),
      s = t >> 16 & 255,
      a = t >> 8 & 255,
      i = t & 255;
    return {
      r: s,
      g: a,
      b: i
    }
  },
  on = (n, t, s) => ("#" + (1 << 24 | n << 16 | t << 8 | s).toString(16).slice(1)).toUpperCase(),
  Ct = n => !(n.x < 0 || n.y < 0 || n.x > E.width - 1 || n.y > E.height - 1),
  _s = G("canvas/repaint", async ({
    pixelId: n,
    newColor: t
  }) => (await W.startRepaint({
    pixelId: n,
    newColor: t
  })).data);
let en = null;
const Ha = G("canvas/getPixelInfo", async ({
    id: n
  }) => (en !== null && (en.abort(), en = null), en = new AbortController, (await W.getPixelInfo({
    id: n,
    signal: en.signal
  })).data)),
  fs = G("canvas/getPrices", async () => (await W.getPrices()).data),
  xs = G("canvas/getPriceMask", async ({
    price: n
  }) => {
    const t = await W.getPriceMask({
        price: n
      }),
      s = new Uint8Array(t.data);
    return b.mask.draw({
      arr: s
    }), {
      result: !0
    }
  }),
  nh = () => ii() ? localStorage.getItem("enableAnimations") ? localStorage.getItem("enableAnimations") === "true" : (localStorage.setItem("enableAnimations", "true"), !0) : !0,
  sh = {
    coords: null,
    animations: nh(),
    stats: null,
    pixelInfo: null,
    getPixelInfoFetchStatus: p.idle,
    repaintFetchStatus: p.idle,
    prices: [],
    selectedPrice: null,
    priceMaskFetching: !1
  },
  nr = _e({
    name: "canvas",
    initialState: sh,
    reducers: {
      setCoords: (n, t) => {
        Ct(t.payload) && (n.coords = t.payload)
      },
      setSelectedPrice: (n, t) => {
        n.selectedPrice = t.payload
      },
      setPriceMask: (n, t) => {
        n.priceMask = t.payload
      },
      enableAnimations: n => {
        localStorage.setItem("enableAnimations", "true"), n.animations = !0
      },
      disableAnimations: n => {
        localStorage.setItem("enableAnimations", "false"), n.animations = !1
      },
      updatePixelInfo: (n, t) => {
        n.pixelInfo = {
          ...n.pixelInfo,
          ...t.payload.changes
        }
      },
      addPaintCoords: (n, t) => {
        Ct(t.payload) && (n.stats = ht(t.payload) ^ 3201282)
      }
    },
    extraReducers: n => {
      n.addCase(Ha.pending, t => {
        t.getPixelInfoFetchStatus = p.pending
      }).addCase(Ha.fulfilled, (t, s) => {
        t.pixelInfo = s.payload, t.getPixelInfoFetchStatus = p.fulfilled, en = null
      }).addCase(fs.pending, t => {}).addCase(fs.fulfilled, (t, s) => {
        t.prices = s.payload.prices
      }).addCase(fs.rejected, t => {}).addCase(xs.pending, t => {
        t.priceMaskFetching = !0
      }).addCase(xs.fulfilled, t => {
        t.priceMaskFetching = !1
      }).addCase(xs.rejected, t => {
        t.priceMaskFetching = !1
      }).addCase(_s.pending, t => {
        t.repaintFetchStatus = p.pending
      }).addCase(_s.fulfilled, t => {
        t.repaintFetchStatus = p.fulfilled
      }).addCase(_s.rejected, t => {
        t.repaintFetchStatus = p.rejected
      })
    }
  }),
  {
    setCoords: Ft,
    enableAnimations: ah,
    disableAnimations: ih,
    addPaintCoords: oh,
    setPriceMask: FM,
    setSelectedPrice: rh,
    updatePixelInfo: zM
  } = nr.actions,
  ch = nr.reducer,
  la = {
    getPixelInfo: Ha,
    getPriceMask: xs,
    getPrices: fs,
    repaint: _s
  };
class lh {
  constructor({
    viewport: t
  }) {
    this.viewport = t, this.pixiViewport = t.viewport, this.pixel = null, this.line = null, this.hexColor = "#42a6ff", this.color = `0x${this.hexColor.replaceAll("#","")}`
  }
  draw({
    x: t,
    y: s
  }) {
    Ct({
      x: t,
      y: s
    }) && (this.destroy(), this.drawLine({
      x: t,
      y: s
    }), this.drawPixel({
      x: t,
      y: s
    }))
  }
  destroy() {
    this.destroyPixel(), this.destroyLine()
  }
  drawPixel({
    x: t,
    y: s
  }) {
    this.pixel = new PIXI.Graphics, this.pixel.lineStyle(.21, this.color), this.pixel.drawRect(t - .1, s - .1, 1.2, 1.2), this.pixel.zIndex = 10, this.pixiViewport.addChild(this.pixel)
  }
  drawLine({
    x: t,
    y: s
  }) {
    this.line = new PIXI.Graphics, this.line.setTransform(.5, .5), this.line.lineStyle(.2, this.color), this.line.moveTo(-.5, s).lineTo(t - .5, s), this.line.moveTo(t, -.5).lineTo(t, s - .5), this.line.moveTo(E.width - .5, s).lineTo(t + .5, s), this.line.moveTo(t, E.width - .5).lineTo(t, s + .5), this.line.zIndex = 10, this.pixiViewport.addChild(this.line)
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
const Qe = {
    idle: "idle",
    start: "start",
    finish: "finish"
  },
  dh = {
    command: Qe.idle,
    counter: 0
  },
  sr = _e({
    name: "progress",
    initialState: dh,
    reducers: {
      setProgressCommand: (n, t) => {
        n.command = t.payload.command, n.counter = n.counter + 1
      }
    }
  }),
  {
    setProgressCommand: At
  } = sr.actions,
  uh = sr.reducer,
  mh = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAElBMVEVHcEz/////96f/uQD/WQDnERFRxRXOAAAAAXRSTlMAQObYZgAAAKRJREFUeNrt1MENgzAQRNEVUEBqmKUA5DF3C7sApJj+W4kQKcCjHLP//m6jsSiKoiiKon9uKjpZbYZIPEEkM6ESQCW8hQto2r7ExwnwkH2YzHhikUk+h8mSHuLCBBIO3K3j5O0HEgAfJz1XOAGOk0Y2eKVJJB2eFdKvnnbShFpl3clTIWRtVSJGdmYWhdR8ceubQuZiLCa1mDWTe8UzR1EURT/0AVQMHG7ZD4ErAAAAAElFTkSuQmCC",
  Ah = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAD1BMVEVHcEz/96f/uQD/WQDnERHKPBirAAAAAXRSTlMAQObYZgAAANhJREFUeNrt1cFthTAQhGHyoIFZN/A8SwHEQwGI0H9N0dNKOa+V634Hbr/QyLK8lFJKKaXMOucTXasvA1OJBoCpJArLB18Ink9eUZhL2WSNhPnE1KMxnckENhB0ZBMQwa/0EkNouWKgoyFYLukwtIGQTcCOHklu/jdgf2ve2aNvAPrE/q3DAbDn92+D6jAYCXBJEUkXGkxK3xVyQELLJpvORwPcH2rJWSXSSZ3UNZV4b4ok40Xuuru5jmyykvtzk++fSDLIY7k/nzz651e+TBhHPTGllFL+5xfUYCDCcZqQBQAAAABJRU5ErkJggg==",
  ph = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAD1BMVEVHcEz/96f/uQD/WQDnERHKPBirAAAAAXRSTlMAQObYZgAAAQRJREFUeNrt1sFxxCAMheEXewtAJAUY4QIwcgGJof+aQtiZ3b2tdMlJ3/0fATrYcM4555zZBjMCsNg62oCfMDLSJwQcAUiWZPhMRNGUTAHf1mRr0FkeSS3Q+XgkOVGARqIXm/YaT6YJU9Te4ynAPCbAPCaaljIlxZM1JusLrJUG02ZuNVmKaeFIQ6SJAU1yH5NUM6aLX5MAhcYH/eGkTiRXGiIPuoMtOQsP6V7pEj7rHDCbrEqqiJwXTcwFbzU5s9S5ljhPp0n6JQdRoigiqIS3zo51H8kXZ5EMCFTWkexNWoZeJZLe0wa9hSITZRisXHrvMNlxk2L+9LUCq1vxnwbnnPtnvyvQK1qRfQjwAAAAAElFTkSuQmCC",
  hh = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAD1BMVEVHcEz/96f/uQD/WQDnERHKPBirAAAAAXRSTlMAQObYZgAAAYJJREFUeNrt1tGN2zAQhOGJ5QIyvBQg7roA3a4KcEL2X1O0MpDY8IEikbdA3/uPEWXCEE6n0+n0n7lg2LcZm2kZSdK+NY8knAH8umGTv3cmMWMaBXsTzri640J2JheGpEZG3IVPgDuOTfwrofQ/2MOHrOiQX5JlcITJMzk0sktom5wvjn4ahrEk8ytz+6p85fhlDZ4+N5KBmTQPz2SyEV3d3kcOXlux/DbSLGJG3pJWEYpkvvo8KHCVzMRnFkWTCPPzsZPajKNEXs6duWAsScd/S1cR5cOeSkdi4nwwIWPyA22T6ZoZkknIVLSVLZG90RpNQJu7riYb9VqMHcnVXbzIZitEjREtR4l5qLW6iBtJUbRM7iWKzLS6iKlnMjVnivvq7kby5qam7kJqO1lrUf8k+cN3CzwTDV7vgJU/yWoLMBmOTLefkcRDFkUfi5Vb3QpZ0MnI5LWWrOh1IVVIKrpNIm4ijpFEUWu9Y4Dc4+5gxA1AGUvu+xXFsHJ+zZ5Op3/zG2ZWUn+tdqomAAAAAElFTkSuQmCC",
  gh = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAD1BMVEVHcEz/96f/uQD/WQDnERHKPBirAAAAAXRSTlMAQObYZgAAAnBJREFUeNrtl12y2jAMhV2SBVSiC4iPuoDEJwu4c8P+11TLLoROr0P80ocO3/AzAX+RLNlmCG/evHnzD7lM/Yr1K7E7zLBob36DyOSKdSkehgznEQ8zWOpTNFyAORSSnUgsExIw1cs0nVMmAOZlu8h1PqcoMuEime8nWim/AeSsEuUPpn6F7FdwNPHZX7KhortnrxXJRMkKqqYpfNOvBWDeayyI6opjITaUZDJlA0WBAYasOhFTIy3WwTWKJRAgy4Uctl00VoUkAIqjL9oOf4KZBNqLbkZxFFF5B3uQgzBaY3xszJSq2dzuS6qKuhFGtwD/oK2EJd6VNV9tYWMimSQcKFqmDjIURjLWuusAfJEWzEhAFFyfe6WSSV8pAVEWgYrCjcLt05X2HhhcqTv4AaTQLBsFpcSY/1IUc6vIgCu2zw8i/oitdiaJboBPzYUjy7XVS0RRGLnfQ1SjRuF8sO8V3L/f6pKTg/4nZKJcHwoEmaOFCUf2ESMTnCkcR5E9SjACRq5t5eJGfDpTSwVJtpVPeM2eGi2igB1FYVFE62/rYENRcKCMrImJqB+DbhflaFsSGVe83YNI1uG0lY3poSguHg2Fn02FRUFVRONDsQOFBkcUPl4EiMVqz56rJdRRkoFT3j+as+e60BWRopSeECI6N2fP23ZlqklVhVw3tI/YbNxuC0lXoiu1i+OGlpKiiN2UTCK4K5/hEL8fCKvbxg2sMbxiy4kQd4zpRzjDszJ8nFK2KFozI8M5RlcsubKGk4iokVGuc+hQSCZYj2K8jQTPK1GZC0V2KLA19CprXaUe6yRWho6WQi/L9f3X7M1/zC/mbn/kN4xkqQAAAABJRU5ErkJggg==",
  _h = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAElBMVEVHcEz/96f/uQD/WQDnERFAMiwoKjrVAAAAAXRSTlMAQObYZgAAArpJREFUeNrt10F2mzAQBmDV4H1H5ADMrx4Aa9Q9CXif9xLuf5VqJHCTgGJot/4XXvjxSYw0kp/NI4888khK1R0n4V9nkQOkfm4T6Q8QtiZmPEKIWiXmQIh0Gu+OEJ2mApZZpd9DrDkB8/6McldUFGM80JqU07iPtAC0GBgms49YQIthItpBTjQHYNpJeDFMGnucNNIdJr4td0reMiayFvqZib1PUuGIBqAU197p64rIwokHFmK77aYR6W8kCo3HhTgZetrqgCHk/kUWv4dZqWH6uVnIeNs+dCLX6T0ZJENt6WRpGHCmCtcwjYsp7+a8pIAEc56GaXodlldry72VyaDkGokZrpN4Jivm22nYvl8jiTFmmsKbB9CWiHAiEse/keF7UtkbMeeZxIUDWepKhFhrCUpyppgB4intnHyBtYRTXp/fOr7mnMgEsiCytXwlRi7UkOWFZKTEsyXN0+r+rH0kBLg81s28vszk57rPRrZMbN2nsaYpHblC09RxOLDFalUSsei2VowtWTjzMefX8xuDCGzXYOl8+UKmd8TQpTGbWROtxmqR0hVITFgR6JKp2EvOrwCKJ6ZS0m8M1JYvPQAuHCKVEuk3vi2jRLoVcSKhIGoAdkVOgIgUSOUBWhXjAVecZfAA26Zfl1Iky0W8EnBdoRSRTLrPlWgKpMqEqflcieZXkXifUXf7zmbiCtWLvAgAAtwiCOCktomIDI0HiMnOZl4PAvoCCeNFJD3DeQ4LOBEQ2e36oxiHRsRHkpb1okQkDChd/jpYeHYirI+CZfnpMPVQ7MvRw3kIciiTF/Ntaum103LyZIHNvWSyxIl/uk9qT/SBVL25nxclJr+ZiNmTH/k2yyTsJU605ZiazuwjOrgSD7eTnPJhrmuB7CWQfm663cSpOEbC3wOk+Ehq583RXJrHX9NH/jt/AL3WmbEKtmBpAAAAAElFTkSuQmCC",
  fh = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAFVBMVEVHcEz/uQD/WQDnERFAMiyACgUZDg0R26nsAAAAAXRSTlMAQObYZgAAAthJREFUeNrt18GO2jAQBuBZzHJmTMU5Hrecsx5xb3etnNGi3AFF8/6PUNsJywJ2Sa4VvxBSJH+ZxB6TAM8888x/mFk1nVjoQ9OrUD2WqPNIHk/gTGAC0dMnAKup5AVvyjj7mMQy6mvGlKtGEA3gqLpM4mMSyxBZGJ23QJaKiKBPNY7oWSB17IUZLscRpJAKZohYJpflNthHE+FI0g/cnFD3dMS9kBaDKGIGwvyYrCVU6JrjmVB+GNWXFlt3Xuben8TgRgxaGnZesY1ecO19E0gjRy1yRO2yfab42xz/SCTktOn8EdHmN5y6IYtIGvH+DyIaLLVW6l+D+qf3v6GLJHy9y0ljiQzLN5BYRgIREURdIskEFAYfAOJ1pUJiSqs5i0AMUSoCEkQk4XPUUIhB3EgnIpEsAGAg/mhrKJYR8U1PDhBNlwgRFKJcJF7CwAi6BhYSD/wpSxRZgDcTSCwjANEcIF1mA2aVM1QFojfSXciigbkECWCWEOOouioTjizzRvxvkQOkeJgfgoSODGIFiq4JMCC+4WYYfyapmm9OGALqptFUbQJZfydNJMlIIsD3k0yoFwJfOQxVwIspNA3h7QokL4EckWyOOLzpJjn0RORE+T5TVNgYIi8rrPMtY5aQD64Y8oSq0g/oCiYRRcUdAy5PHNVQCmVJ9xHJlCoL74ksTLmXzntm3hXIZ4FY5rpAOHfR3vv3YpVXtpAl3paIypbvUhnIZ58l80hsgTDXKjvJ3tGuROJXxnxQYTFfs0RR/0Av3D1v67s3lhkZRE2/SqTdc8h1EzG7gGyBtG17RyxzG4zO30sbc092AK0jgDK6JspuK/hn2vbm4Tuzn0vIJNOcyg4HbHaPyd4sARxRRI7rLTzOq0FQlUorbke+kyNqW6enlLK8G0viydkhMsBIkk7OTDSWGB0F7PbOjiVkt+emG02CmEjs7msDBTwtn1xNJQrr51/gZ67yF2l/ou0eQckjAAAAAElFTkSuQmCC",
  xh = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAElBMVEVHcEz/WQDnERFAMiyACgUZDg3ZC39iAAAAAXRSTlMAQObYZgAAA7xJREFUeNrtmE2TozYQhhUDd0vZ3FEDdw0Nd1bGdy+y/v9fSbfEEAKiAqmtrdqqeS+iGD3qD3X32BZf+tKXtpL/AynFKf1xXx7hLKL+QcRJ5E8jZqE4qWpBzGlEXEZQXFYmEtJKXFSu75ctd+VlBM9u9MvTfyZPS774AvvTWbxJKcsZcf25miFEEeJQOMTXWUTOHiFqJbJDDBbHomdalogd0Rm+YpEfIoKReyArbIl2hByXwGLl2xBCwg5giEi2aTk6a7mD74yoR1geaGvhI2JSdRcRkCSowlJ770y6Xm+AyzNoMgIPAF6cQ3PQPrdPpDAWWDgvTof8pfR5mMMOSLWPCzrJKpN9FBH2g89/eOwsLTgF5J42MyOtQksEydkad0gCRC15v1Z9oPAjIN8O71CVjDSIvZSNb6VCbAOihjSiQ4lYYESrxutYMSwYDoywmg6eiB6g79gh18VrKo+KnjdRBISQLDvk3xA07F0qPxHVYx/idnw8eD9fkyj6jQEkLiLkliYOnQ1bI/P0wuGLfV8YTYgMoki+c9jouoA4XVmoMSJ6hdyqBWneHC/PihHGx8TP9tHKkh3jVlgEJtNMKKhazUmI/Y5TDE9LFUZgXu6TDPBoQcr5sCJevmcwNQKdJYKQbpVTF5Ef6QYo+hZYiJ0dl7ehnStCUozDd+yQdf7zGOCULk3EnjtkKF7r+CLS6STiuEzGetjMhODYpBl87WJBYrZvc9BSjc+JSdiP9IwRj2bDkJ4UpaxHTJjpPff+1pCtn76FcXygEVt574V3JhEkJ7NOISKGkkLQAiAhJ1UQ0edQI75OfyZw2NNmApOEVO6VKKUZPECwlYprNgGm/HIA4HSYwIboc3ECTPM4/SzdW1xv6QMyni0/IjLSouIkCVY/GExZ0bJqw5a8lqQYHr/Aj4OxrLnOAWCF3Obh1iaR+OeKe8ZPwKdn7FBQ9U6OWBN8+MvZOvwn41gWpPF22MdujAyI93xrHdQjbZKtnN8iHiLNJEsXxysjODvWqj0icqNn5M7N1gWk8RDCr7QsE8gQwkfUJSMuzNLeA7cypJFxyEHK0BUFek+948yNE8h6WkghmbEANQ/4wnvXM0IGlk8Bw94vQnjWh0r3c6VrCty/7ZjFKYJbZH2MQ1M4IaxUjSdliAa7PUIzZFVvL4+EADSIZBFRYDeIHfLvV4zkFDgj846Ts8IT8lrOPKWQ7iBCTn0fMau3hPxMobkI5AOai99COJmXkXWY4ylmHFdOjlc9ywm/ql+BMPMb/ajxN8we1xzBMA0/AAAAAElFTkSuQmCC",
  vh = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkAgMAAAANjH3HAAAADFBMVEVHcEznERFAMiyACgVxtGBQAAAAAXRSTlMAQObYZgAAAodJREFUeNrt1TFqG0EUBuA/GgTGeJnG6d0EzDZxs53N6ggq8phmQVdYkjYgBR8gV1ATMGlyhQGfYVATcoZp1I15mZ0dzay16ygkkCo/KoQ+3lvtm5ld/M/vpvoDqTGRJXxuJ0A08Lmekh9BNhO03eKQy5MyjntZbjDMDKcz+3xC/kXOMEyxQs58KBXpkbxBl9fUZpEI+aJ7WaJoosTxfvNyvq2oiR2zyG0nc3qXO25SbahR2lBsd4GU2dZ42dMKOxzH/6qZ1oLwLOcPeKK1ZmZB+kiumBm1Fz4W1F4EOzCeywaSHSBtiXH6NuVoM4oW2HVyT+rZCoSRkfbyiQ6DeLUAKmqLpsTOCwqiZZT3gCElXQkGjI5SLCAsQESPXgBB7Zyo6QXXQTQQWjW+ZhWXpoTwYoPcBVkDeKvDpYiUDaeupo9yT4wuSSrVCTvB7OXsOojwre2eNMKImF0+sobWvQi2Xm1evTvF9knpvsEHfsxrJJk1c6xv6oIWQ5GuXw5Dej7YlKGgF6LFnFTaOILj/p91UhDpgwD4isMdtDLLxn+iSKImS+iPgRiVZZbE+G5P6yQ5cr+yYMZEmIcimiFZ1A4xVZCUBzmUokPT9oIUXx0WjppjEQ6GAEkqSQ55qYlSxxyjopAa3YYXQ2Gi+J6vo1B3slcoiBqo4TNHOIQjNydSyKM21IahsrsMYqJ0vZdBandZEBE47VEvlQYg7a3/rlAPpK0Wsd7QCinCS9G33gkmLjMZOlTQI7MrRRth0+3cKG3N9rxo0qz5IMYKByTRIglb+EiHUXoRUYS1mM59ltMvI/Gi3LxcoxGiJ+REh1P/6srFIY7J/bqnxDgXvYipC6Wi6ci/eqn+BJYAHRseeKj2AAAAAElFTkSuQmCC",
  yh = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkAgMAAAANjH3HAAAADFBMVEVHcExiV01AMiyACgVW8W35AAAAAXRSTlMAQObYZgAAAipJREFUeNrt0jGK20AUBuA/EoaVWFDl3o1CrGpvIB/BRd7EeBuVwU2uMGy6NKmUeiAY7NlDWNk75A5hq4lrw2Tk0egh24GQLIGE/cFYw8e8mfck/MeJ8ZS5usLTpPk5TdAnwq/lT291jX81k99tVsEnWeI0Ei43yEkixC3BGVN1VjPIPDuRbmdOi7LBpYzodSu5xDAZchIfAdSzEymbmoScOBneIzZls6alBKDVsNYhw5ZWbbVCDmsdAK11FjoYSFxoDeAAnzAxJ0h334YyAXJ6Z14C1iQVhqlJoL6T1owWgEJOVZgqEcn67rPb89aJHJPw37MX7WT/QfkSBJ/IiSok7IMEEB9YXhAJBaD0Tdu2BKDAgk6+Eqm+2nIowvS3XrUSd/JIt6HfqdAKN6Ybu33U90FSrSXQSWLd0gwkHFpBa3RRWoNFoNj0Ejnh5pApcAZSNp/ixi83LAmRLB/ofZBIBpkSVVlCM1wUjNzvLAWRdCIuSL2Sx8POJNJavkp7MYgbJhbEB8QG4KS1CJIfH/JFkO3KC/YkYwBj0QnPNDqWjWqSZ6J3TVu9b52nXVjDEgFpJ8kCR1n3e0IXtfCy7c6JKv5GpTV8bvllwa9k1t4AhRf7XXQycqLgkrYyv7Z7Ftr5sptWYPcbrmYbhChYEySiNyyAKXnu61svYfAcfW+bpLokqbZI5v7MCibrgfv2r8hJInGaXPi/6kymy4vCAyrUmaReUoXn/MX8AOTf3EjQ8IXZAAAAAElFTkSuQmCC",
  wh = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkAgMAAAANjH3HAAAACVBMVEVHcExiV01AMiwfKIGrAAAAAXRSTlMAQObYZgAAAUlJREFUeNrt1TGKFEEUBuCvHwzMdOxuJGKyy7inmCNsMNU0Rh0aeoTCExjYi2Fj5IW8icgEixo+aLpgMZT50r/+ggrqPVdX/7UYqm2HMtm2K2MrcQZP1vZuIcpmC0oFgrTAj63OskePtVhI4SWikoLDew13ZXIPAaq5VGA+hQpiJD4pZQQKFegGiFLOwBlAPEKcujOITL5V6BhAl8kCcFsJ0gTwE6GzLfw+aTmSDhV6YC9FmeCIIJB+wQX0e6k7d1BBj0weNRxOpL4C8A44TAQcrby+EJA64OOztQfAYC0AN5OG3aihayZG0jxJH0hllL5LPYAFi0CM8IYUwN0Ib0l9FXCxtgAPFbKTQsP84qmyz481WrkH5tMrKzcVFEg77CaEP6w9A58h9VC1XpiJtictX1pH8squapnAV2y2YyA0NDp6LXHdhv/qL+6eN5hJ+KKhAAAAAElFTkSuQmCC",
  jh = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkAgMAAAANjH3HAAAACVBMVEVHcExiV01AMiwfKIGrAAAAAXRSTlMAQObYZgAAAQBJREFUeNrtlUEKwjAQRX8DlcaVCwWXXRjxGLmExWWOMniCLsR1jyp2kGCT31pEcNG3avMyTWYyoVhY+DekJsKgAqhjFHjiBCn9WOlpZECKbqHLGaPfZDGYZephgo0A2bWtB2wvRQPdOag5xGK2ADrZoUHPJi6g6d+wQ54WZayWcnpFFqIPb0bpBgYDI3lj1H9eLZk4fiNMXN/eAgu5gdHiZ5guHbpAzTptPGbqGR1HprgLIisgsjXExPqd1CSoWYPBTTVl7uwq2Ya1ovV8H7NxgQjjhwPgOVlh51cGZCg8gD01FbkZX+OEGjolbiaAoakc6TGXwkxBzGi+svx1R3kAWDoiQG5YEtEAAAAASUVORK5CYII=",
  bh = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkAgMAAAANjH3HAAAACVBMVEVHcExiV01AMiwfKIGrAAAAAXRSTlMAQObYZgAAAP5JREFUeNrtlU1qwzAQRp8FLlJWXTTQpRZVyTF0iZosdZShJ/AidO2jFoKJ8M9HcUPIxm9l62kYj2aE2dl5DhaFcHiQTtEAkIwlBtBmGVlY4gEY1owDMBnDJhOZ4jqD1dwhQ7Bb7kj6Klz5qIfZA4Md6bjyWhNkAC4cWaenhWllJ8bIxsaHmQGGmWFmTJoojVc9xKFwpsT35K2okAuKnofhhuXSeTSH5eApEzdMnNiSzlReoPLmhKnnd7qZSjUHFNr4v8yPukqhU2MVsv6OzaQihMvzBXRNwVT/2sIKTQbepfHiZtxNMmnqFtnCgmAs5VO2uTVlGml0vdj+1/0nv3CcIl47CPeHAAAAAElFTkSuQmCC";
let Nh = class {
  constructor({
    app: t,
    viewport: s,
    mainImage: a
  }) {
    this.app = t, this.pixiViewport = s.viewport, this.mainImage = a, this.size = 5, this.bombs = [mh, Ah, ph, hh, gh, _h, fh, xh, vh, yh, wh, jh, bh], this.textureArray = [];
    for (let i = 0; i < 13; i++) {
      let o = PIXI.Texture.from(this.bombs[i]);
      o.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST, this.textureArray.push(o)
    }
  }
  async boomWithDebounce({
    x: t,
    y: s
  }) {
    await En(k(50, 3e3)), this.boom({
      x: t,
      y: s
    })
  }
  boom({
    x: t,
    y: s
  }) {
    const a = new PIXI.AnimatedSprite(this.textureArray);
    a.loop = !1, a.animationSpeed = .17, a.zIndex = 2, a.x = t, a.y = s, a.scale.set(k(1, 2) === 1 ? 1 : -1, 1), a.anchor.set(.48, .55), this.pixiViewport.addChild(a), a.play(), a.onComplete = () => {
      this.pixiViewport.removeChild(a)
    }
  }
};
const Ch = "_order_panel_dvy5p_1",
  Ih = "_content_dvy5p_13",
  Ph = "_fast_mode_blocker_dvy5p_26",
  Sh = "_info_dvy5p_39",
  Bh = "_active_color_dvy5p_48",
  Th = "_pixel_info_container_dvy5p_58",
  Eh = "_pixel_info_color_dvy5p_66",
  kh = "_pixel_info_text_dvy5p_72",
  Dh = "_info_button_dvy5p_78",
  Rh = "_info_button_active_dvy5p_95",
  Mh = "_price_value_dvy5p_99",
  Uh = "_pixel_locked_text_dvy5p_105",
  Qh = "_pixel_locked_text_painted_dvy5p_116",
  Oh = "_pixel_locked_animation_dvy5p_138",
  Fh = "_button_dvy5p_144",
  zh = "_button_text_dvy5p_168",
  Gh = "_flash_mode_button_text_dvy5p_181",
  Lh = "_not_pixel_icon_dvy5p_192",
  Hh = "_tg_logo_dvy5p_196",
  qh = "_image_dvy5p_201",
  Yh = "_inner_wrapper_button_dvy5p_206",
  le = {
    order_panel: Ch,
    content: Ih,
    fast_mode_blocker: Ph,
    info: Sh,
    active_color: Bh,
    pixel_info_container: Th,
    pixel_info_color: Eh,
    pixel_info_text: kh,
    info_button: Dh,
    info_button_active: Rh,
    price_value: Mh,
    pixel_locked_text: Uh,
    pixel_locked_text_painted: Qh,
    pixel_locked_animation: Oh,
    button: Fh,
    button_text: zh,
    flash_mode_button_text: Gh,
    not_pixel_icon: Lh,
    tg_logo: Hh,
    image: qh,
    inner_wrapper_button: Yh
  },
  Vh = "_panel_1mia4_1",
  Xh = "_item_1mia4_15",
  Wh = "_active_1mia4_24",
  qa = {
    panel: Vh,
    item: Xh,
    active: Wh
  },
  mn = ({
    children: n,
    className: t = "",
    style: s = {}
  }) => e.jsx("div", {
    className: `${qa.panel} ${t}`,
    style: {
      ...s
    },
    children: n
  }),
  Oe = ({
    active: n,
    setActive: t,
    children: s
  }) => e.jsx("div", {
    className: `${qa.item} ${n?qa.active:""}`,
    onPointerUp: () => {
      t()
    },
    children: s
  }),
  ar = n => n ? n.friends >= tl.friendsForTemplateCreation || n.isContractor : !1,
  tt = {
    create: "create",
    main: "main",
    result: "result"
  },
  Jh = () => {
    const n = _(),
      t = c(o => o.tournament.activeTab),
      s = c(Le),
      a = ar(s),
      i = c(o => o.tournament.myTemplate);
    return e.jsxs(mn, {
      children: [a && i && e.jsx(Oe, {
        active: t === tt.create,
        setActive: () => n(Pa(tt.create)),
        children: "My template"
      }), e.jsx(Oe, {
        active: t === tt.main,
        setActive: () => n(Pa(tt.main)),
        children: "Tournament"
      }), e.jsx(Oe, {
        active: t === tt.result,
        setActive: () => n(Pa(tt.result)),
        children: "My results"
      })]
    })
  };
let xn = null;
class qe {
  static async uploadTemplate({
    blob: t,
    posX: s,
    posY: a
  }) {
    const i = {
      "Content-Type": "application/octet-stream"
    };
    return s && s !== "" && (i.posX = s), a && a !== "" && (i.posY = a), I.post("/image/template/upload", t, {
      headers: i
    })
  }
  static async uploadTournamentTemplate({
    blob: t,
    posX: s,
    posY: a
  }) {
    return I.post("/tournament/template/upload", t, {
      headers: {
        "Content-Type": "application/octet-stream",
        posX: s,
        posY: a
      }
    })
  }
  static async getReferredTemplate() {
    return I.get("/image/template/my")
  }
  static async getTemplateById({
    id: t
  }) {
    return xn !== null && (xn.abort(), xn = null), xn = new AbortController, I.get(`/image/template/${t}`, {
      signal: xn.signal
    })
  }
  static async getTournamentTemplateById({
    id: t
  }) {
    return I.get(`/tournament/template/${t}`)
  }
  static async getSelectedTemplate() {
    return I.get("/tournament/template/subscribe/my")
  }
  static async getTemplatesList({
    limit: t,
    offset: s
  }) {
    return I.get(`/image/template/list?limit=${t}&offset=${s}`)
  }
  static async getApprovedTemplatesList({
    limit: t,
    offset: s
  }) {
    return I.get(`/tournament/template/list?limit=${t}&offset=${s}`)
  }
  static async getRandomTemplates() {
    return I.get("/tournament/template/list/random?limit=16")
  }
  static async subscribeToTemplate({
    id: t
  }) {
    return I.put(`/image/template/subscribe/${t}`)
  }
  static async subscribeToTournamentTemplate({
    id: t
  }) {
    return I.put(`/tournament/template/subscribe/${t}`)
  }
  static async getAvailableSizes({
    userId: t
  }) {
    return I.get(`/image/template/sizes/${t}`)
  }
}
class ir {
  static async getPeriods() {
    return I.get("/tournament/periods")
  }
  static async getResults() {
    return I.get("/tournament/user/results")
  }
}
const vs = G("tournament/getPeriods", async () => (await ir.getPeriods()).data),
  ys = G("tournament/getResults", async () => (await ir.getResults()).data),
  ws = G("tournament/getMyTemplate", async ({
    id: n
  }) => (await qe.getTournamentTemplateById({
    id: n
  })).data),
  js = G("tournament/getSelectedTemplate", async () => (await qe.getSelectedTemplate()).data),
  bs = G("tournament/getApprovedTemplatesList", async ({
    offset: n,
    limit: t
  }) => (await qe.getApprovedTemplatesList({
    offset: n,
    limit: t
  })).data),
  Ns = G("tournament/getRandomTemplatesList", async () => (await qe.getRandomTemplates()).data),
  Cs = G("tournament/selectTemplate", async ({
    id: n
  }) => (await qe.subscribeToTournamentTemplate({
    id: n
  })).data),
  Zh = {
    activeTab: tt.main,
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
    approvedTemplatesList: kn.getInitialState(),
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
  vn = "?time=1502",
  or = _e({
    name: "tournament",
    initialState: Zh,
    reducers: {
      setActiveTournamentTab: (n, t) => {
        n.activeTab = t.payload
      },
      changeTemplateCoordsIfNeeded: (n, t) => {
        n.myTemplate && n.myTemplate.id === t.payload.templateId && (n.myTemplate = {
          ...n.myTemplate,
          x: t.payload.x,
          y: t.payload.y
        }), n.selectedTemplate && n.selectedTemplate.id === t.payload.templateId && (n.selectedTemplate = {
          ...n.selectedTemplate,
          x: t.payload.x,
          y: t.payload.y
        })
      },
      setActiveTournamentTemplate: (n, t) => {
        n.activeTournamentTemplate = t.payload
      },
      hideTournamentTemplates: n => {
        n.activeTournamentTemplate = null
      },
      setShowTournamentDetailsPopup: (n, t) => {
        n.showTournamentDetailsPopup = t.payload
      },
      setShowRoundRewardsPopup: (n, t) => {
        n.showRoundRewardsPopup = t.payload
      },
      setMyTournamentTemplate: (n, t) => {
        n.myTemplate = t.payload
      },
      clearApprovedTemplateList: n => {
        n.approvedTemplatesList = kn.getInitialState(), n.approvedTemplatesListOffset = 0
      },
      showTournamentTemplateInfoPopup: (n, t) => {
        n.showTemplateInfoPopup = !0, n.templateDataInfoPopup = t.payload
      },
      closeTournamentTemplateInfoPopup: n => {
        n.showTemplateInfoPopup = !1, n.templateDataInfoPopup = null
      },
      setSelectedTemplate: (n, t) => {
        try {
          localStorage.setItem("selectedTemplate", JSON.stringify(t.payload))
        } catch {}
        n.selectedTemplate = t.payload
      }
    },
    extraReducers: n => {
      n.addCase(ws.pending, t => {}).addCase(ws.fulfilled, (t, s) => {
        s.payload.id && (t.myTemplate = {
          ...s.payload,
          type: De.my,
          url: `${s.payload.url}${vn}`
        })
      }).addCase(ws.rejected, (t, s) => {}).addCase(vs.pending, t => {
        t.periodsStatus = p.pending
      }).addCase(vs.fulfilled, (t, s) => {
        t.periodsStatus = p.fulfilled, t.periods = s.payload.allPeriods, t.activePeriod = s.payload.activePeriod
      }).addCase(vs.rejected, (t, s) => {
        t.periodsStatus = p.rejected
      }).addCase(ys.pending, t => {
        t.resultsStatus = p.pending
      }).addCase(ys.fulfilled, (t, s) => {
        t.resultsStatus = p.fulfilled, t.results = s.payload.rounds.sort((a, i) => i.round_id - a.round_id)
      }).addCase(ys.rejected, (t, s) => {
        t.resultsStatus = p.rejected
      }).addCase(js.pending, t => {
        t.selectedTemplateStatus = p.pending
      }).addCase(js.fulfilled, (t, s) => {
        s.payload.id && (t.selectedTemplate = {
          ...s.payload,
          imageSize: s.payload.size || s.payload.imageSize,
          type: De.referred,
          url: `${s.payload.url}${vn}`
        }), t.selectedTemplateStatus = p.fulfilled
      }).addCase(js.rejected, (t, s) => {
        t.selectedTemplateStatus = p.rejected
      }).addCase(bs.pending, t => {
        t.approvedTemplatesListStatus = p.pending
      }).addCase(bs.fulfilled, (t, s) => {
        s.payload && s.payload.list && (kn.addMany(t.approvedTemplatesList, s.payload.list.map(a => ({
          ...a,
          url: `${a.url}${vn}`
        }))), t.approvedTemplatesListOffset += 16, t.approvedTemplatesListTotal = Math.max(s.payload.total, t.approvedTemplatesListTotal)), t.approvedTemplatesListStatus = p.fulfilled
      }).addCase(bs.rejected, (t, s) => {
        t.approvedTemplatesListStatus = p.rejected
      }).addCase(Ns.pending, t => {
        t.randomTemplatesListStatus = p.pending
      }).addCase(Ns.fulfilled, (t, s) => {
        s.payload && s.payload.list && kn.setAll(t.approvedTemplatesList, s.payload.list.map(a => ({
          ...a,
          url: `${a.url}${vn}`
        }))), t.randomTemplatesListStatus = p.fulfilled
      }).addCase(Ns.rejected, (t, s) => {
        t.randomTemplatesListStatus = p.rejected
      }).addCase(Cs.pending, t => {
        t.selectTemplateStatus = p.pending
      }).addCase(Cs.fulfilled, (t, s) => {
        s.payload.id && (t.selectedTemplate = {
          ...s.payload,
          type: De.referred,
          url: `${s.payload.url}${vn}`
        }), t.selectTemplateStatus = p.fulfilled
      }).addCase(Cs.rejected, (t, s) => {
        t.selectTemplateStatus = p.rejected
      })
    }
  }),
  {
    setActiveTournamentTab: Pa,
    setActiveTournamentTemplate: Kh,
    hideTournamentTemplates: $h,
    setShowTournamentDetailsPopup: rr,
    setShowRoundRewardsPopup: cr,
    changeTemplateCoordsIfNeeded: lr,
    setMyTournamentTemplate: LM,
    clearApprovedTemplateList: dr,
    showTournamentTemplateInfoPopup: pi,
    closeTournamentTemplateInfoPopup: Sa,
    setSelectedTemplate: ur
  } = or.actions,
  st = {
    getMyTemplate: ws,
    getSelectedTemplate: js,
    getApprovedList: bs,
    getRandomList: Ns,
    selectTemplate: Cs,
    getPeriods: vs,
    getResults: ys
  },
  An = n => {
    const t = n.tournament.activePeriod;
    return t && t.ID && t.PeriodType === "round" ? t.RoundID : null
  },
  hi = n => {
    const t = n.tournament.activePeriod;
    if (!t) return null;
    if (t.PeriodType === "break" || t.PeriodType === "") {
      const s = t.ID,
        a = n.tournament.periods.filter(o => o.ID > s);
      return a.length === 0 ? null : a[0].RoundID
    } else if (t.PeriodType === "round") return t.RoundID;
    return null
  },
  eg = n => n.tournament.results,
  tg = or.reducer;
window.getComputedStyle(document.body).getPropertyValue("--canvas-bg-color");
const ng = {
  1: 1
};
let ut;
const sg = n => {
  ut = n
};
let Ya = 0;
setInterval(() => {
  console.log(Ya), Ya = 0
}, 1e4);
let On = !0;
window.addEventListener("blur", () => {
  On = !1
});
window.addEventListener("focus", () => {
  On = !0
});
document.addEventListener("visibilitychange", () => {
  document.hidden ? On = !1 : On = !0
});
let Ze = null;
const ag = (n, t, s) => {
    let a = {
        token: n
      },
      i = {
        data: new TextEncoder().encode(JSON.stringify(a))
      };
    Ze = new Cc(ai.replace("https", "wss").replace("api/v1/", "connection/websocket"), i), Ze.on("connected", function(o) {
      if (console.log(`connected over ${o.transport}`), !yo()) return;
      console.log("centrifuge image");
      const r = new Blob([o.data], {
          type: "image/webp"
        }),
        l = new Image;
      l.src = URL.createObjectURL(r), l.onload = () => {
        b.mainImage.loadFromCentrifuge(l).then(() => {
          const m = ut.getState().main.startParams.coords;
          m && (b.viewport.viewport.animate({
            scale: 60,
            time: 400,
            position: {
              x: m.x + .5,
              y: m.y + .5
            }
          }), b.mainImage.selectedPixel.draw(m), ut.dispatch(Ft(m)))
        })
      }
    }), Ze.on("disconnected", function(o) {
      console.log(`_disconnected: ${o.code}, ${o.reason}`)
    }), Ze.on("error", function(o) {
      console.log(o)
    }), Ze.on("publication", function(o) {
      if (o.channel === "event:message") {
        JSON.parse(new TextDecoder().decode(o.data)).forEach(d => {
          const m = JSON.parse(d.data);
          if (d.type === va.pixanos && ut.dispatch(lg(m)), m.user.userId === t || !On) return;
          const g = ut.getState().canvas.animations;
          if (d.type === va.bomb) {
            const f = Js(m.info.pixelId);
            g && b.mainImage.bomb.boomWithDebounce(f)
          }
          if (d.type === va.pumpkin) {
            const f = Js(m.info.pixelId);
            b.mainImage.pumpkin.boomWithDebounce(f, g)
          }
        });
        return
      }
      const r = new Uint8Array(o.data);
      Ic(r, (l, d) => {
        if (l) console.error("Ошибка распаковки данных:", l);
        else {
          const m = JSON.parse(new TextDecoder().decode(d));
          if (o.channel === "pixel:message") Object.values(m).forEach(h => {
            Ya += h.length
          }), b.mainImage.paintPixelsFromCentrifuge(m);
          else if (o.channel === `personal:user#${t}`) {
            const h = JSON.parse(new TextDecoder().decode(d));
            if (h.type === ng[1] && ut.getState().daily.list.entities[h.good_id]) {
              const g = ut.getState().daily.list.entities[h.good_id],
                f = g.name,
                j = g.prices[0].quantity;
              ut.dispatch(z({
                id: performance.now(),
                text: `Transaction for daily ${g.id} completed! Got ${f} x${j}. Refresh the app.`,
                icon: ""
              }))
            }
          } else if (o.channel === "event:tournament") {
            const h = JSON.parse(new TextDecoder().decode(d));
            h.type && h.type === 1 && h.templates.forEach(f => {
              ut.dispatch(lr(f))
            })
          } else {
            if (o.channel === "event:mini-game") return;
            console.log("unknown channel", o)
          }
        }
      })
    }), Ze.connect()
  },
  Is = G("main/getPixanosRating", async () => (await W.getPixanosRating()).data),
  ig = () => !1,
  og = {
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
    startParams: ol(),
    startAppTs: Date.now(),
    timeLimit: !1,
    showIntro: !1,
    showBetaTestIntro: !1,
    fastMode: !1,
    fastEnergy: !1,
    currentFastType: null,
    showUserAndSquadPopup: !1,
    userAndSquadPopupStack: [],
    showNoFlagsPopup: ig(),
    showMiningDetailsPopup: !1,
    showInviteFrensPopup: !1,
    showNoChargesPopup: !1,
    lastShowChargesPopupTs: Date.now() - Kc,
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
  mr = _e({
    name: "main",
    initialState: og,
    reducers: {
      setTimeLimit: n => {
        n.timeLimit = !0, Ze && Ze.disconnect()
      },
      updateSettings: (n, t) => {
        n.settings = {
          ...n.settings,
          ...t.payload
        }
      },
      enableFastMode: n => {
        n.fastMode = !0, n.currentFastType = null
      },
      disableFastMode: n => {
        n.fastMode = !1
      },
      enableFastType: (n, t) => {
        n.currentFastType = t.payload, n.fastEnergy = !1, n.fastMode = !1
      },
      disableFastType: n => {
        n.currentFastType = null
      },
      enableFastEnergy: n => {
        n.fastEnergy = !0, n.currentFastType = null
      },
      disableFastEnergy: n => {
        n.fastEnergy = !1
      },
      setShowPixanosRating: (n, t) => {
        n.showPixanosRating = t.payload
      },
      showPixanosEvent: (n, t) => {
        n.showPixanosEvent = !0, n.pixanosEventData = t.payload
      },
      hidePixanosEvent: n => {
        n.showPixanosEvent = !1, n.pixanosEventData = null
      },
      setPixanosProcessing: (n, t) => {
        n.pixanosProcessing = t.payload
      },
      setShowIntro: (n, t) => {
        n.showIntro = t.payload
      },
      setShowBetaTestIntro: (n, t) => {
        n.showBetaTestIntro = t.payload
      },
      setShowMiniPopup: (n, t) => {
        n.showMiniPopup = t.payload
      },
      addFlyingReward: (n, t) => {
        n.flyingRewards.push({
          ...t.payload,
          id: `${t.payload.flyCoords.x}_${t.payload.flyCoords.y}_${performance.now()}`
        })
      },
      removeFlyingReward: (n, t) => {
        n.flyingRewards = n.flyingRewards.filter(s => s.id !== t.payload)
      },
      showInviteFrensPopup: n => {
        n.showInviteFrensPopup = !0
      },
      hideInviteFrensPopup: n => {
        n.showInviteFrensPopup = !1
      },
      showNoChargesPopup: n => {
        n.showNoChargesPopup = !0
      },
      hideNoChargesPopup: n => {
        n.showNoChargesPopup = !1
      },
      setLastShowChargesPopupTs: (n, t) => {
        n.lastShowChargesPopupTs = t.payload, ln.save("lastShowChargesPopupTs", JSON.stringify(t.payload))
      },
      setShowMiningDetailsPopup: (n, t) => {
        n.showMiningDetailsPopup = t.payload
      },
      setShowBoostDetailsPopup: (n, t) => {
        n.showBoostDetailsPopup = t.payload
      },
      setActiveBoostDetails: (n, t) => {
        n.activeBoostDetails = t.payload
      },
      addItemToUserAndSquadPopupStack: (n, t) => {
        n.userAndSquadPopupStack.length === 0 && (n.showUserAndSquadPopup = !0), n.userAndSquadPopupStack.push(t.payload)
      },
      removeItemFromUserAndSquadPopupStack: n => {
        n.userAndSquadPopupStack.length === 1 && (n.showUserAndSquadPopup = !1), n.userAndSquadPopupStack.pop()
      },
      setShowNoFlagsPopup: (n, t) => {
        n.showNoFlagsPopup = t.payload
      },
      setReferrerSquadId: (n, t) => {
        n.referrerSquadId = t.payload
      }
    },
    extraReducers: n => {
      n.addCase(Is.pending, (t, s) => {
        t.pixanosRatingStatus = p.pending
      }).addCase(Is.fulfilled, (t, s) => {
        t.pixanosRatingStatus = p.fulfilled, t.pixanosRatingData = s.payload
      }).addCase(Is.rejected, (t, s) => {
        t.pixanosRatingStatus = p.rejected
      })
    }
  }),
  {
    setTimeLimit: rg,
    updateSettings: HM,
    enableFastMode: Ar,
    disableFastMode: da,
    enableFastType: ua,
    disableFastType: Gt,
    enableFastEnergy: cg,
    disableFastEnergy: pr,
    setShowPixanosRating: Ps,
    showPixanosEvent: lg,
    hidePixanosEvent: dg,
    setPixanosProcessing: Fi,
    setShowIntro: qM,
    setShowBetaTestIntro: YM,
    setShowMiniPopup: ug,
    addFlyingReward: mg,
    removeFlyingReward: Ag,
    showInviteFrensPopup: VM,
    hideInviteFrensPopup: Ba,
    showNoChargesPopup: XM,
    hideNoChargesPopup: Ta,
    setLastShowChargesPopupTs: WM,
    setShowMiningDetailsPopup: hr,
    setShowBoostDetailsPopup: gi,
    setActiveBoostDetails: pg,
    addItemToUserAndSquadPopupStack: qn,
    removeItemFromUserAndSquadPopupStack: gr,
    setShowNoFlagsPopup: hg,
    setReferrerSquadId: Va
  } = mr.actions,
  gg = mr.reducer,
  _g = {
    getPixanosRating: Is
  },
  pn = ti(n => n.main.settings, n => {
    const t = n.UpgradeRepaint,
      s = n.UpgradeChargeCount,
      a = n.UpgradeChargeRestoration;
    let i = 1,
      o = 1,
      r = 1;
    return Object.keys(t.levels).forEach(l => {
      t.levels[l].Max && (i = Number(l))
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
  _r = ti(n => n.main.settings, n => ({
    bronze: 0,
    silver: n.BronzeMax + 1,
    gold: n.SilverMax + 1,
    platinum: n.GoldMax + 1,
    diamond: n.PlatinumMax + 1,
    limit: {
      bronze: n.BronzeMax + 1,
      silver: n.SilverMax + 1,
      gold: n.GoldMax + 1,
      platinum: "∞",
      diamond: "∞"
    }
  })),
  fg = ti(n => n.main.settings, n => ({
    bronze: 0,
    silver: n.SquadBronzeMax + 1,
    gold: n.SquadSilverMax + 1,
    platinum: n.SquadGoldMax + 1,
    diamond: n.SquadPlatinumMax + 1,
    limit: {
      bronze: n.SquadBronzeMax + 1,
      silver: n.SquadSilverMax + 1,
      gold: n.SquadGoldMax + 1,
      platinum: "∞",
      diamond: "∞"
    }
  })),
  xg = "_layout_oxfjd_1",
  vg = "_container_oxfjd_7",
  yg = "_placeholder_oxfjd_20",
  wg = "_progress_oxfjd_24",
  jg = "_counter_oxfjd_32",
  bg = "_counter_max_text_oxfjd_45",
  Vt = {
    layout: xg,
    container: vg,
    placeholder: yg,
    progress: wg,
    counter: jg,
    counter_max_text: bg
  },
  Ng = () => {
    _();
    const n = te(),
      t = c(o => o.mining.charges),
      s = c(o => o.mining.maxCharges),
      a = c(o => o.main.currentFastType),
      i = t >= s;
    return a !== null ? null : e.jsx("div", {
      className: Vt.layout,
      onPointerUp: o => {
        o.stopPropagation(), n.push("/energy-over")
      },
      children: e.jsxs("div", {
        className: Vt.container,
        children: [e.jsxs("div", {
          className: Vt.placeholder,
          children: [e.jsx(P, {
            children: ""
          }), e.jsxs("span", {
            children: [" ", t]
          }), i && e.jsx("span", {
            className: Vt.counter_max_text,
            children: " max"
          })]
        }), e.jsxs("div", {
          className: Vt.counter,
          children: [e.jsx(P, {
            children: ""
          }), e.jsxs("span", {
            children: [" ", t]
          }), i && e.jsx("span", {
            className: Vt.counter_max_text,
            children: " max"
          })]
        })]
      })
    })
  },
  Cg = "_progress_g3q57_1",
  Ig = {
    progress: Cg
  },
  Pg = ({
    progress: n
  }) => e.jsx("div", {
    className: Ig.progress,
    style: {
      width: `${n}%`
    }
  }),
  Sg = () => {
    const n = _(),
      t = c(h => h.mining.charges),
      s = A.useRef(t),
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
        x > 0 && s.current < l && (n(qo(x)), n(nm(x)));
        let y = (f - o) % r;
        m(y * 100 / r), g = requestAnimationFrame(h)
      };
      let g = requestAnimationFrame(h);
      return () => {
        cancelAnimationFrame(g), i.current = 0
      }
    }, [o]), A.useEffect(() => {
      s.current = t, t === l && m(0)
    }, [t]), A.useEffect(() => {
      i.current = a
    }, [a]), e.jsxs(re.Fragment, {
      children: [e.jsx(Ng, {}), e.jsx(Pg, {
        progress: d
      })]
    })
  },
  Bg = "_layout_91s2c_1",
  Tg = "_container_91s2c_21",
  Eg = "_buttons_container_91s2c_27",
  kg = "_button_91s2c_27",
  Dg = "_shop_button_91s2c_45",
  Rg = "_container__bottom_91s2c_50",
  Mg = "_fast_type_button_91s2c_50",
  Ug = "_disabled_button_cover_91s2c_62",
  Qg = "_fast_mode_button_enabled_91s2c_72",
  Og = "_available_91s2c_82",
  Fg = "_limited_good_timer_91s2c_99",
  zg = "_disabled_available_cover_91s2c_120",
  Gg = "_button_image_91s2c_130",
  Lg = "_animation_91s2c_147",
  Hg = "_shake_91s2c_1",
  S = {
    layout: Bg,
    container: Tg,
    buttons_container: Eg,
    button: kg,
    shop_button: Dg,
    container__bottom: Rg,
    fast_type_button: Mg,
    disabled_button_cover: Ug,
    fast_mode_button_enabled: Qg,
    available: Og,
    limited_good_timer: Fg,
    disabled_available_cover: zg,
    button_image: Gg,
    animation: Lg,
    shake: Hg
  },
  qg = "_number_179d2_1",
  Yg = "_layout_179d2_6",
  Vg = "_viewer_179d2_14",
  Xg = "_container_179d2_18",
  Wg = "_digit_179d2_25",
  Jg = {
    number: qg,
    layout: Yg,
    viewer: Vg,
    container: Xg,
    digit: Wg
  },
  Zg = "_layout_q3t4p_1",
  Kg = "_viewer_q3t4p_9",
  $g = "_container_q3t4p_18",
  e_ = "_digit_q3t4p_25",
  yn = {
    layout: Zg,
    viewer: Kg,
    container: $g,
    digit: e_
  },
  t_ = ({
    digit: n = 0,
    fontSize: t = 16,
    fontWeight: s = 600,
    gap: a = 6
  }) => {
    const [i, o] = A.useState(!0), [r, l] = A.useState(0), d = r === 0 ? `translateY(${a/2}px)` : `translateY(-${a/2+(t+a)*r-a}px)`;
    return A.useEffect(() => {
      o(!1);
      const m = setTimeout(() => {
        o(!0)
      }, 500);
      return () => {
        clearTimeout(m)
      }
    }, [r]), A.useEffect(() => {
      l(n)
    }, [n]), e.jsx("div", {
      className: yn.layout,
      children: e.jsxs("div", {
        className: yn.viewer,
        style: {
          height: t + a
        },
        children: [e.jsx("span", {
          className: yn.digit,
          style: {
            visibility: i ? "visible" : "hidden",
            alignSelf: "center",
            fontSize: t,
            fontWeight: s
          },
          children: r
        }), e.jsx("div", {
          className: yn.container,
          style: {
            transform: d,
            visibility: i ? "hidden" : "visible",
            gap: a
          },
          children: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(m => e.jsx("span", {
            className: yn.digit,
            style: {
              fontSize: t,
              fontWeight: s
            },
            children: m
          }, m))
        })]
      })
    })
  },
  Yn = ({
    number: n,
    fontSize: t = 16,
    fontWeight: s = 600,
    gap: a = 6,
    addSpace: i = !0
  }) => {
    if (n === void 0) return null;
    const o = String(n).split("").reverse();
    let r = [];
    for (let l = 0; l < o.length; l++) l % 3 === 0 && l !== 0 && i && r.push("space"), r.push(o[l]);
    return r = r.reverse(), e.jsx("div", {
      className: Jg.number,
      children: r.map((l, d) => l === "space" ? e.jsx("div", {
        children: " "
      }, r.length - d) : e.jsx(t_, {
        digit: Number(l),
        fontSize: t,
        fontWeight: s,
        gap: a
      }, r.length - d))
    })
  },
  n_ = {
    isTMA: !1,
    isAuth: !1,
    authData: null
  },
  fr = _e({
    name: "auth",
    initialState: n_,
    reducers: {
      setIsTMA: (n, t) => {
        n.isTMA = t.payload
      },
      setAuthData: (n, t) => {
        n.authData = t.payload
      },
      setIsAuth: (n, t) => {
        n.isAuth = t.payload
      }
    },
    extraReducers: () => {}
  }),
  {
    setIsTMA: s_,
    setIsAuth: a_,
    setAuthData: i_
  } = fr.actions,
  _i = n => n.auth.isTMA,
  Ye = n => n.auth.isAuth,
  o_ = fr.reducer;
let Ea = !1;
const r_ = async ({
  dispatch: n,
  amount: t,
  charges: s,
  maxCharges: a,
  status: i,
  state: o
}) => {
  var l, d;
  if (!t && o && (t = o.shop.available[1], s = o.mining.charges, a = o.mining.maxCharges, i = o.shop.useProductStatus), !t || t === 0) return n(na(10)), n(it(1)), n(ot()), n(pr()), !1;
  if (s === a) return !1;
  if (Ea) return p.pending;
  Ea = !0, n(At({
    command: Qe.start
  }));
  try {
    (await n(ia.useProduct({
      productId: 1,
      pixelId: 1
    }))).meta.requestStatus === p.fulfilled && (n(tm(a)), n(sa({
      product: 1,
      amount: 1
    })), (d = (l = window.Telegram.WebApp) == null ? void 0 : l.HapticFeedback) == null || d.notificationOccurred("error"))
  } catch (m) {
    console.log("error", m)
  } finally {
    Ea = !1, n(At({
      command: Qe.finish
    }))
  }
  return !0
}, c_ = () => {
  const n = _(),
    t = c(Ye),
    s = 1,
    a = c(d => d.shop.available[s]),
    o = 10 + String(a).length * 6,
    r = c(d => d.main.fastEnergy),
    l = [S.button, S.fast_type_button];
  return r && l.push(S.fast_mode_button_enabled), t ? e.jsxs("button", {
    className: `${l.join(" ")} ${S.shop_button}`,
    onPointerUp: async () => {
      if (r) n(pr());
      else {
        if (!a || a === 0) return n(it(s)), n(ot()), !1;
        n(cg())
      }
    },
    children: [e.jsx("img", {
      alt: "img",
      className: S.button_image,
      src: Eo
    }), e.jsx("div", {
      className: S.available,
      style: {
        width: o
      },
      children: !a || a === 0 ? e.jsx(P, {
        children: ""
      }) : e.jsx(Yn, {
        number: a,
        fontSize: 11,
        fontWeight: 400,
        gap: 3
      })
    })]
  }) : null
}, l_ = {
  isShowSideMenu: !1
}, xr = _e({
  name: "layout",
  initialState: l_,
  reducers: {
    setShowSideMenu: (n, t) => {
      n.isShowSideMenu = t.payload
    }
  }
}), {
  setShowSideMenu: Qt
} = xr.actions, vr = n => n.layout.isShowSideMenu, d_ = xr.reducer;
let Xt = null,
  Wt = null;
class yr {
  static async personal({
    league: t
  }) {
    Xt !== null && (Xt.abort(), Xt = null), Xt = new AbortController;
    const s = await I.get(`/ratings/personal?league=${t.toLowerCase()}&limit=20`, {
      signal: Xt.signal
    });
    return Xt = null, s
  }
  static async squad({
    league: t
  }) {
    Wt !== null && (Wt.abort(), Wt = null), Wt = new AbortController;
    const s = await I.get(`/ratings/squads?league=${t.toLowerCase()}&limit=20`, {
      signal: Wt.signal
    });
    return Wt = null, s
  }
}
const Ss = G("ratings/personal", async ({
    league: n
  }) => (await yr.personal({
    league: n
  })).data),
  Bs = G("ratings/squad", async ({
    league: n
  }) => (await yr.squad({
    league: n
  })).data),
  u_ = {
    list: [],
    myPlace: 0,
    mySquadPlace: 0,
    mySquad: null,
    league: "bronze",
    status: p.idle
  },
  wr = _e({
    name: "ratings",
    initialState: u_,
    reducers: {
      setActiveLeague: (n, t) => {
        n.league = t.payload
      },
      clearRatingList: n => {
        n.list = []
      }
    },
    extraReducers: n => {
      n.addCase(Ss.pending, (t, s) => {
        t.status = p.pending
      }).addCase(Ss.fulfilled, (t, s) => {
        t.status = p.fulfilled, t.list = [...Object.values(s.payload.top)], t.myPlace = s.payload.myPlace
      }).addCase(Ss.rejected, (t, s) => {
        t.status = p.rejected
      }).addCase(Bs.pending, (t, s) => {
        t.status = p.pending
      }).addCase(Bs.fulfilled, (t, s) => {
        t.status = p.fulfilled, t.list = [...Object.values(s.payload.top)], t.mySquadPlace = s.payload.MySquadPlace, t.mySquad = s.payload.mySquad
      }).addCase(Bs.rejected, (t, s) => {
        t.status = p.rejected
      })
    }
  }),
  {
    setActiveLeague: jr,
    clearRatingList: m_
  } = wr.actions,
  fi = {
    personal: Ss,
    squad: Bs
  },
  A_ = wr.reducer,
  Ts = G("history/get", async ({
    offset: n,
    limit: t
  }) => (await W.getHistory({
    offset: n,
    limit: t
  })).data),
  p_ = {
    list: [],
    status: p.idle
  },
  br = _e({
    name: "history",
    initialState: p_,
    reducers: {
      resetHistory: n => {
        n.list = [], n.status = p.idle
      }
    },
    extraReducers: n => {
      n.addCase(Ts.pending, (t, s) => {
        t.status = p.pending
      }).addCase(Ts.fulfilled, (t, s) => {
        t.status = p.fulfilled, t.list = s.payload
      }).addCase(Ts.rejected, (t, s) => {
        t.status = p.rejected
      })
    }
  });
br.actions;
const xi = {
    get: Ts
  },
  h_ = br.reducer,
  Et = rn();
Et.startListening({
  matcher: ve(xe.info.fulfilled),
  effect: (n, t) => {
    n.payload.activated && (t.dispatch(eu(n.payload.totalUserPixels)), t.dispatch(Fo(n.payload.userBalance))), t.dispatch(bl(n.payload.goods))
  }
});
Et.startListening({
  matcher: ve(xe.checkTask.fulfilled),
  effect: (n, t) => {
    const s = n.meta.arg.key,
      a = n.payload[s],
      i = n.meta.arg.reward,
      o = n.meta.arg.disableFailPopup;
    a && (s === v.pumpkin && t.dispatch(nn({
      product: 7,
      amount: 6
    })), t.dispatch(Tt(i)));
    let r = "Check failed",
      l = "";
    if (a) r = "Well done fren", l = "";
    else if (!a && o) return;
    t.dispatch(z({
      id: performance.now(),
      text: r,
      icon: l
    }))
  }
});
Et.startListening({
  matcher: ve(xe.checkBoost.fulfilled),
  effect: (n, t) => {
    const s = n.meta.arg.key,
      a = n.payload[s];
    let i = "Not enough PX",
      o = "";
    a && (i = "Well done fren", o = ""), t.dispatch(z({
      id: performance.now(),
      text: i,
      icon: o
    }))
  }
});
Et.startListening({
  matcher: ve(xe.checkBoost.fulfilled),
  effect: (n, t) => {
    const s = t.getState(),
      a = s.main.settings,
      i = n.meta.arg.key,
      o = n.payload[i],
      r = n.meta.arg.price;
    if (o) {
      if (i === ge.energyLimit) {
        const l = s.mining.boosts[ge.energyLimit],
          d = a.UpgradeChargeCount.levels[l].Boost;
        t.dispatch($u(s.mining.maxCharges + d)), t.dispatch(qo(d))
      }
      if (i === ge.reChargeSpeed) {
        const l = s.mining.boosts[ge.reChargeSpeed],
          d = a.UpgradeChargeRestoration.levels[l].ChargeBoost;
        t.dispatch(em(d))
      }
      t.dispatch(au(r))
    }
  }
});
Et.startListening({
  matcher: ve(xe.checkTask.rejected),
  effect: (n, t) => {
    t.dispatch(z({
      id: performance.now(),
      text: "Check failed",
      icon: ""
    }))
  }
});
Et.startListening({
  matcher: ve(xe.checkBoost.rejected),
  effect: (n, t) => {
    t.dispatch(z({
      id: performance.now(),
      text: "Not enough PX",
      icon: ""
    }))
  }
});
Et.startListening({
  matcher: ve(Ho),
  effect: (n, t) => {
    const a = t.getState().mining.toggleAction;
    console.log("boosts length: ", JSON.stringify(a).length), ln.save("boosts1", JSON.stringify(a))
  }
});
const ma = rn();
ma.startListening({
  matcher: ve(la.getPriceMask.pending, Fe.getPixelsForSale.pending, Fe.getPixelsSold.pending, xi.get.pending),
  effect: (n, t) => {
    t.dispatch(At({
      command: Qe.start
    }))
  }
});
ma.startListening({
  matcher: ve(la.getPriceMask.fulfilled, Fe.getPixelsForSale.fulfilled, Fe.getPixelsSold.fulfilled, xi.get.fulfilled),
  effect: (n, t) => {
    t.dispatch(At({
      command: Qe.finish
    }))
  }
});
ma.startListening({
  matcher: ve(la.getPriceMask.rejected),
  effect: (n, t) => {
    n.error.code !== "ERR_CANCELED" && t.dispatch(At({
      command: Qe.finish
    }))
  }
});
const Nr = rn();
Nr.startListening({
  matcher: ve(Fe.getUser.fulfilled),
  effect: (n, t) => {
    t.dispatch(jr(n.payload.data.league))
  }
});
const Vn = rn();
Vn.startListening({
  actionCreator: Ar,
  effect: () => {
    b.mainImage.selectedPixel.hide()
  }
});
Vn.startListening({
  actionCreator: da,
  effect: () => {
    b.mainImage.selectedPixel.show()
  }
});
Vn.startListening({
  actionCreator: ua,
  effect: () => {
    b.mainImage.selectedPixel.hide()
  }
});
Vn.startListening({
  actionCreator: Gt,
  effect: () => {
    b.mainImage.selectedPixel.show()
  }
});
const Cr = rn();
Cr.startListening({
  matcher: ve(fi.squad.fulfilled),
  effect: (n, t) => {
    t.dispatch(iu(n.payload.mySquad))
  }
});
const g_ = {
    info: null,
    popupId: null,
    getInfoFetchStatus: p.idle
  },
  Es = G("squad/getSquadInfo", async ({
    id: n
  }) => (await W.getSquadInfo({
    id: n
  })).data),
  Ir = _e({
    name: "squad",
    initialState: g_,
    reducers: {
      setPopupSquadId: (n, t) => {
        n.popupId = t.payload
      }
    },
    extraReducers: n => {
      n.addCase(Es.pending, t => {
        t.getInfoFetchStatus = p.pending
      }).addCase(Es.fulfilled, (t, s) => {
        t.info = s.payload, t.getInfoFetchStatus = p.fulfilled
      }).addCase(Es.rejected, t => {
        t.getInfoFetchStatus = p.rejected
      })
    }
  });
Ir.actions;
const __ = Ir.reducer,
  Aa = {
    getInfo: Es
  },
  f_ = "/assets/coffee_break-nQdMk1u4.png",
  x_ = G("template/subscribe", async ({
    id: n
  }) => (await qe.subscribeToTemplate({
    id: n
  })).data),
  ks = G("template/getTemplateList", async ({
    offset: n,
    limit: t
  }) => (await qe.getTemplatesList({
    offset: n,
    limit: t
  })).data),
  v_ = G("template/getAvailableSizes", async ({
    userId: n
  }) => (await qe.getAvailableSizes({
    userId: n
  })).data),
  Ds = G("template/getReferredTemplate", async () => (await qe.getReferredTemplate()).data),
  Xa = G("template/getMyTemplate", async ({
    id: n
  }) => (await qe.getTemplateById({
    id: n
  })).data),
  Rs = G("template/getWorldTemplate", async () => ({
    x: 0,
    y: 0,
    imageSize: E.width,
    url: f_,
    type: De.world
  })),
  y_ = {
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
  Pr = _e({
    name: "template",
    initialState: y_,
    reducers: {
      setActiveTemplate: (n, t) => {
        n.active = t.payload, b.mainImage.worldTemplate.hide(), b.mainImage.worldTemplate.show(t.payload)
      },
      setActiveTemplateTab: (n, t) => {
        n.activeTab = t.payload
      },
      hideTemplates: n => {
        n.active = null, b.mainImage.worldTemplate.hide()
      },
      setTemplateOpacity: (n, t) => {
        n.opacity = t.payload
      },
      setShowTemplateDetailsPopup: (n, t) => {
        n.showTemplateDetailsPopup = t.payload
      },
      setShowTemplateInfoPopup: (n, t) => {
        n.showTemplateInfoPopup = t.payload.show, n.templateInfoPopupId = t.payload.id || null
      },
      setReferredTemplate: (n, t) => {
        n.referredTemplate = t.payload
      },
      setMyTemplate: (n, t) => {
        n.myTemplate = t.payload
      },
      setTemplateListOffset: (n, t) => {
        n.listOffset = t.payload
      },
      clearTemplatesListData: n => {
        n.list = [], n.listStatus = p.idle, n.listOffset = 0
      }
    },
    extraReducers: n => {
      n.addCase(Ds.pending, t => {}).addCase(Ds.fulfilled, (t, s) => {
        if (s.payload) {
          const a = {
            ...s.payload,
            type: De.referred
          };
          t.referredTemplate = a
        }
      }).addCase(Ds.rejected, (t, s) => {}).addCase(Xa.pending, t => {}).addCase(Xa.fulfilled, (t, s) => {}).addCase(Rs.pending, (t, s) => {}).addCase(Rs.fulfilled, (t, s) => {
        const a = {
          ...s.payload,
          type: De.world
        };
        t.worldTemplate = a, b.mainImage.worldTemplate.add(a)
      }).addCase(Rs.rejected, (t, s) => {}).addCase(ks.pending, t => {
        t.listStatus = p.pending
      }).addCase(ks.fulfilled, (t, s) => {
        t.listStatus = p.fulfilled, s.payload && (t.list = [...t.list, ...s.payload], t.listOffset += 12)
      }).addCase(ks.rejected, t => {
        t.listStatus = p.rejected
      })
    }
  }),
  {
    setActiveTemplate: w_,
    setActiveTemplateTab: zi,
    hideTemplates: vi,
    setTemplateOpacity: j_,
    setReferredTemplate: b_,
    setMyTemplate: N_,
    setTemplateListOffset: JM,
    clearTemplatesListData: C_,
    setShowTemplateDetailsPopup: Sr,
    setShowTemplateInfoPopup: Wa
  } = Pr.actions,
  It = {
    getReferredTemplate: Ds,
    getTemplateById: Xa,
    getWorldTemplate: Rs,
    getList: ks,
    getAvailableSizes: v_,
    subscribe: x_
  },
  I_ = Pr.reducer,
  P_ = {
    list: Ws.getInitialState(),
    selected: 1,
    showHowDailyWorksPopup: !1,
    getDailyListFetchStatus: p.idle,
    getFirstDailyFetchStatus: p.idle
  },
  Ms = G("daily/getList", async () => (await W.getDailyList()).data),
  Us = G("daily/getFirstDaily", async () => (await W.getFirstDaily()).data),
  Br = _e({
    name: "daily",
    initialState: P_,
    reducers: {
      setSelectedDaily: (n, t) => {
        n.selected = t.payload
      },
      setShowHowDailyWorksPopup: (n, t) => {
        n.showHowDailyWorksPopup = t.payload
      },
      updateOneDaily: (n, t) => {
        Ws.updateOne(n.list, t.payload)
      }
    },
    extraReducers: n => {
      n.addCase(Ms.pending, t => {
        t.getDailyListFetchStatus = p.pending
      }).addCase(Ms.fulfilled, (t, s) => {
        Ws.setAll(t.list, s.payload.dailyAvailable), t.getDailyListFetchStatus = p.fulfilled
      }).addCase(Ms.rejected, t => {
        t.getDailyListFetchStatus = p.rejected
      }).addCase(Us.pending, t => {
        t.getFirstDailyFetchStatus = p.pending
      }).addCase(Us.fulfilled, (t, s) => {
        t.getFirstDailyFetchStatus = p.fulfilled
      }).addCase(Us.rejected, t => {
        t.getFirstDailyFetchStatus = p.rejected
      })
    }
  }),
  S_ = n => {
    const t = n.daily.selected;
    return Ai.selectById(n, t)
  },
  {
    setSelectedDaily: B_,
    updateOneDaily: ZM,
    setShowHowDailyWorksPopup: Tr
  } = Br.actions,
  T_ = Br.reducer,
  Er = {
    getList: Ms,
    getFirstDaily: Us
  },
  Qs = G("reward/getList", async ({
    userId: n
  }) => (await W.getRewards({
    userId: n
  })).data),
  ka = G("reward/getById", async ({
    rewardId: n
  }) => (await W.getRewardById({
    rewardId: n
  })).data),
  E_ = {
    showPopup: !1,
    id: null,
    rewardUserId: null,
    info: null,
    active: null,
    list: di.getInitialState(),
    getListStatus: p.idle,
    getRewardStatus: p.idle
  },
  kr = _e({
    name: "reward",
    initialState: E_,
    reducers: {
      showRewardPopup: n => {
        n.showPopup = !0
      },
      hideRewardPopup: n => {
        n.showPopup = !1
      },
      setReward: (n, t) => {
        n.id = t.payload.rewardId, n.rewardUserId = t.payload.rewardUserId, n.info = {
          ...t.payload.reward,
          user: t.payload.user,
          type: t.payload.type
        }
      },
      clearReward: n => {
        n.id = null, n.rewardUserId = null, n.info = null
      },
      addReward: (n, t) => {
        n.active = t.payload
      },
      removeReward: n => {
        n.active = null
      },
      clearInventoryList: n => {
        di.removeAll(n.list)
      }
    },
    extraReducers: n => {
      n.addCase(Qs.pending, t => {
        t.getListStatus = p.pending
      }).addCase(Qs.fulfilled, (t, s) => {
        t.list = s.payload, t.getListStatus = p.fulfilled
      }).addCase(Qs.rejected, t => {
        t.getListStatus = p.rejected
      }).addCase(ka.pending, t => {
        t.getRewardStatus = p.pending
      }).addCase(ka.fulfilled, (t, s) => {
        t.getRewardStatus = p.fulfilled
      }).addCase(ka.rejected, t => {
        t.getRewardStatus = p.rejected
      })
    }
  }),
  {
    setReward: k_,
    clearReward: D_,
    addReward: KM,
    removeReward: $M,
    clearInventoryList: R_,
    showRewardPopup: M_,
    hideRewardPopup: U_
  } = kr.actions,
  Q_ = {
    getListByUserId: Qs
  },
  O_ = kr.reducer,
  hn = rn();
hn.startListening({
  matcher: ve(st.getMyTemplate.fulfilled),
  effect: (n, t) => {
    const s = t.getState();
    if (s.tournament.myTemplate) {
      const a = s.tournament.myTemplate;
      b.mainImage.tournamentTemplates.deleteTemplate(a.id), b.mainImage.tournamentTemplates.add(a)
    }
  }
});
hn.startListening({
  matcher: ve(st.getSelectedTemplate.fulfilled, ur),
  effect: (n, t) => {
    const s = t.getState();
    if (s.tournament.selectedTemplate) {
      const a = s.tournament.selectedTemplate;
      b.mainImage.tournamentTemplates.deleteTemplate(a.id), b.mainImage.tournamentTemplates.add(a)
    }
  }
});
hn.startListening({
  matcher: ve(Kh),
  effect: n => {
    const t = n.payload;
    b.mainImage.tournamentTemplates.hide(), b.mainImage.tournamentTemplates.show(t)
  }
});
hn.startListening({
  matcher: ve($h),
  effect: () => {
    b.mainImage.tournamentTemplates.hide()
  }
});
hn.startListening({
  matcher: ve(lr),
  effect: n => {
    b.mainImage.tournamentTemplates.changeTemplateCoords(n.payload)
  }
});
const Xn = fc({
    reducer: {
      auth: o_,
      daily: T_,
      main: gg,
      color: Al,
      device: Ad,
      mining: im,
      layout: d_,
      canvas: ch,
      ratings: A_,
      user: ru,
      squad: __,
      progress: uh,
      history: h_,
      shop: Cl,
      toast: mu,
      template: I_,
      tournament: tg,
      reward: O_
    },
    devTools: !1,
    middleware: n => [Vn.middleware, Nr.middleware, ma.middleware, Et.middleware, Cr.middleware, hn.middleware, ...n()]
  }),
  Os = [],
  F_ = async ({
    dispatch: n,
    flyCoords: t,
    paintCoords: s,
    activeColor: a
  }) => {
    const i = b.mainImage.tournamentTemplates.getRepaintRewardType({
      coords: s,
      repaintColor: a
    });
    await n(mg({
      flyCoords: t,
      repaintRewardType: i
    })), b.mainImage.paintPixel({
      id: ht(s),
      color: Ut(a)
    }), b.mainImage.updateTexture(), await n(ul(a)), await n(oh(s)), await n(sm());
    try {
      const o = new TextEncoder().encode(JSON.stringify({
          type: 0,
          pixelId: ht(s),
          color: a
        })),
        r = await Ze.rpc("rеpаintTournаment", o);
      Os.push(r);
      const l = await r,
        d = JSON.parse(new TextDecoder().decode(new Uint8Array(l.data)));
      console.log(d), d && d.balance && (n(Fo(d.balance)), d.reward_user && (b.mainImage.reward.add(s), n(k_({
        rewardId: d.reward_user.reward_id,
        rewardUserId: d.reward_user.id,
        reward: d.reward,
        type: d.reward_type,
        user: d.reward_user
      }))))
    } catch (o) {
      o.code && o.code === 5e3 && n(xe.info())
    }
  }, z_ = ({
    history: n,
    dispatch: t,
    paintCoords: s
  }) => {
    t(da()), n && n.push("/energy-over"), t(Ft(s)), b.mainImage.selectedPixel.draw(s)
  }, Dr = async ({
    history: n,
    charges: t,
    dispatch: s,
    flyCoords: a,
    paintCoords: i,
    pixelInfo: o,
    user: r,
    activeColor: l,
    state: d
  }) => {
    let m = !1;
    if (t <= 0)
      if (d && d.main.fastEnergy) {
        if (Os.length > 0 && !(await Promise.allSettled(Os)).every(f => f.status === p.fulfilled || f.status === p.rejected)) return;
        const h = await r_({
          dispatch: s,
          state: d
        });
        if (h === p.pending) return;
        Os.length = 0, h || (m = !0)
      } else m = !0;
    if (m) {
      z_({
        history: n,
        dispatch: s,
        paintCoords: i
      });
      return
    }
    F_({
      dispatch: s,
      flyCoords: a,
      paintCoords: i,
      activeColor: l
    })
  }, G_ = () => {
    const n = _(),
      t = te(),
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
          x.stopPropagation(), n(da());
          return
        }
        Dr({
          dispatch: n,
          history: t,
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
      children: [e.jsx(Sg, {}), e.jsx("span", {
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
          children: ["Fast mode ", e.jsx(P, {
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
class L_ {
  constructor({
    app: t,
    viewport: s,
    store: a
  }) {
    this.app = t, this.pixiViewport = s.viewport, this.store = a, this.sprite = null
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
class H_ {
  constructor({
    app: t,
    viewport: s,
    store: a,
    mainImage: i
  }) {
    Wn(this, "isCoordsInExtraRewardZone", ({
      coords: t,
      x1: s,
      y1: a,
      imageSize: i
    }) => {
      const {
        x: o,
        y: r
      } = t, l = s + i, d = a + i;
      return o >= s && o < l && r >= a && r < d
    });
    this.app = t, this.pixiViewport = s.viewport, this.store = a, this.mainImage = i, this.referredTemplate = null, this.items = [], this.opacity = 70, this.init().then(() => {
      this.validateColors()
    })
  }
  async init() {
    for (let t = 0; t < this.items.length; t++) {
      const s = this.items[t],
        a = await this.mainImage.loadImage(s.url);
      s.imageData = this.mainImage.getImageData(a, s.imageSize, s.imageSize), this.createTexture(s), this.createSprite(s)
    }
  }
  async add(t) {
    const s = {
        ...t
      },
      a = await this.mainImage.loadImage(s.url);
    return s.imageData = this.mainImage.getImageData(a, s.imageSize, s.imageSize), this.createTexture(s), this.createSprite(s), this.items.push(s), Promise.resolve()
  }
  deleteTemplate(t) {
    this.items = this.items.filter(s => (s.id === t && this.pixiViewport.removeChild(s.sprite), s.id !== t))
  }
  createTexture(t) {
    t.texture = new PIXI.Texture.fromBuffer(t.imageData, t.imageSize, t.imageSize), t.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST
  }
  createSprite(t) {
    t.sprite = new PIXI.Sprite(t.texture), t.sprite.interactive = !1, t.sprite.zIndex = 5, t.sprite.alpha = this.opacity / 100, t.sprite.visible = !1, t.sprite.width = t.imageSize, t.sprite.height = t.imageSize, t.sprite.x = t.x, t.sprite.y = t.y, this.pixiViewport.addChild(t.sprite)
  }
  isExtraRepaintReward({
    coords: t,
    repaintColor: s
  }) {
    for (let a = 0; a < this.items.length; a++) {
      const i = this.items[a];
      if (i.type === De.my || !this.isCoordsInExtraRewardZone({
          coords: t,
          x1: i.x,
          y1: i.y,
          imageSize: i.imageSize
        })) continue;
      const o = Qn({
          x: t.x - i.x,
          y: t.y - i.y,
          width: i.imageSize
        }),
        r = on(i.imageData[o], i.imageData[o + 1], i.imageData[o + 2]),
        l = i.imageData[o + 3],
        d = this.mainImage.getPixelColor({
          coords: t
        });
      if (l !== 0 && d !== s && d !== r && s === r) return !0
    }
    return !1
  }
  show(t) {
    this.items.forEach(s => {
      s.sprite !== null && s.type === t && (s.sprite.visible = !0)
    })
  }
  hide() {
    this.items.forEach(t => {
      t.sprite !== null && (t.sprite.visible = !1)
    })
  }
  setOpacity(t) {
    this.opacity = t, this.items.forEach(s => {
      s.sprite !== null && (s.sprite.alpha = this.opacity / 100)
    })
  }
  validateColors() {
    const t = [];
    this.items.forEach((s, a) => {
      for (let i = 0; i < s.imageSize; i++) {
        i === 0 && t.push({});
        for (let o = 0; o < s.imageSize; o++) {
          const r = Qn({
              x: i,
              y: o,
              width: s.imageSize
            }),
            l = on(s.imageData[r], s.imageData[r + 1], s.imageData[r + 2]);
          $e.includes(l) || (t[t.length - 1][l] || (t[t.length - 1][l] = 0), t[t.length - 1][l] += 1)
        }
      }
    })
  }
}
const q_ = ({
    x: n,
    y: t
  }) => {
    let s = 0;
    const a = n - 2,
      i = t - 2;
    for (let o = 0; o < 5; o++)
      for (let r = 0; r < 5; r++) {
        const l = a + o,
          d = i + r;
        Ct({
          x: l,
          y: d
        }) && s++
      }
    return s
  },
  Y_ = async ({
    coords: n,
    dispatch: t,
    repaintReward: s,
    amount: a,
    state: i
  }) => {
    var r, l;
    if (!a && i && (a = i.shop.available[2]), !a || a === 0) {
      t(na(10)), t(it(2)), t(ot()), t(Gt());
      return
    }
    b.mainImage.bomb.boom(n), t(ia.useProduct({
      pixelId: ht(n),
      productId: 2
    })), t(Tt(s * q_(n))), t(sa({
      product: 2,
      amount: 1
    })), (l = (r = window.Telegram.WebApp) == null ? void 0 : r.HapticFeedback) == null || l.notificationOccurred("error")
  }, V_ = () => {
    const n = _(),
      t = 2,
      s = c(Ye),
      a = c(d => d.shop.available[t]);
    c(d => d.main.fastMode);
    const i = c(d => d.main.currentFastType),
      r = 10 + String(a).length * 6,
      l = [S.button, S.fast_type_button];
    return i === "bomb" && l.push(S.fast_mode_button_enabled), s ? e.jsxs("button", {
      className: `${l.join(" ")} ${S.shop_button}`,
      onPointerUp: () => {
        if (i === "bomb") {
          n(Gt());
          return
        }!a || a === 0 ? (n(it(t)), n(ot())) : n(ua("bomb"))
      },
      children: [e.jsx("img", {
        alt: "img",
        className: S.button_image,
        src: Bo
      }), e.jsx("div", {
        className: S.available,
        style: {
          width: r
        },
        children: !a || a === 0 ? e.jsx(P, {
          children: ""
        }) : e.jsx(Yn, {
          number: a,
          fontSize: 11,
          fontWeight: 400,
          gap: 3
        })
      })]
    }) : null
  }, X_ = ({
    x: n,
    y: t
  }) => {
    let s = 0;
    const a = n - 1,
      i = t - 1;
    for (let o = 0; o < 3; o++)
      for (let r = 0; r < 3; r++) {
        const l = a + o,
          d = i + r;
        Ct({
          x: l,
          y: d
        }) && s++
      }
    return s
  }, W_ = async ({
    coords: n,
    dispatch: t,
    repaintReward: s,
    activeColor: a,
    amount: i,
    state: o
  }) => {
    var l, d;
    if (!i && o && (i = o.shop.available[6]), !i || i === 0) {
      t(na(10)), t(it(6)), t(ot()), t(Gt());
      return
    }
    b.mainImage.paintSquare({
      x: n.x - 1,
      y: n.y - 1,
      size: 3,
      colors: Array.from(Array(3 * 3), () => a)
    }), t(ia.useProduct({
      pixelId: ht(n),
      productId: 6,
      color: a
    })), t(Tt(s * X_(n))), t(sa({
      product: 6,
      amount: 1
    })), (d = (l = window.Telegram.WebApp) == null ? void 0 : l.HapticFeedback) == null || d.notificationOccurred("error")
  }, J_ = () => {
    const n = _(),
      t = 6,
      s = c(Ye),
      a = c(d => d.shop.available[t]);
    c(d => d.main.fastMode);
    const i = c(d => d.main.currentFastType),
      r = 10 + String(a).length * 6,
      l = [S.button, S.fast_type_button];
    return i === "paintcan" && l.push(S.fast_mode_button_enabled), s ? e.jsxs("button", {
      className: `${l.join(" ")} ${S.shop_button}`,
      onPointerUp: () => {
        if (i === "paintcan") {
          n(Gt());
          return
        }!a || a === 0 ? (n(it(t)), n(ot())) : n(ua("paintcan"))
      },
      children: [e.jsx("img", {
        alt: "img",
        className: S.button_image,
        src: To
      }), e.jsx("div", {
        className: S.available,
        style: {
          width: r
        },
        children: !a || a === 0 ? e.jsx(P, {
          children: ""
        }) : e.jsx(Yn, {
          number: a,
          fontSize: 11,
          fontWeight: 400,
          gap: 3
        })
      })]
    }) : null
  }, Z_ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAB+VJREFUeJztnb1OHEkQx/9zunsBHJDdMxAu2SLshHCRnKCTLtzjITiZh4ALT1qRWIKQBCPI2PCewRmBeQEHc8FMz/b0VndX9cdMj71/CRmz81Fdv6mu6u6ZWWCnnXayqxrbgGCtlrXz8z/+mWTbpmW0BuHi5M256eX93uY/E4IzDUNbED4INnVwJgCmeAOxWtahIExd3u8VD6Vo41LCUCodyi9jG2CVAaOXE4TS9704efMXBCPq17EN4Ori5K1zLDdqpNuXoGJDF6tlXX/4DwDw92+/d382I8V0tuvzT9+/AgCqh4Niu60ijWpVX3z7iE/fv/aAKPm6MCoq1LEu330GCm17kUa1qi++fez9wQbHJWqfkoFMIodc3u9BdV+q2/GBUdup36uHg0nkkkkAARoAupN1SKaqhwN8+rDZVhpVY2oyQACZY6cEQVfJQKrLd59rrJYAmogwuxyu01UB0A4KgULzB1DywNCnxrHyzwrXpICYpS5V+nK2KVnFhq6mrtvqqY0CszRuS1o49im6zZOKEEp6BEwtGiiVnNS3pJJ653gt4XdaLTfRY24/ARUdvq1qrJbknJVtoEd9NoUKCyjcOATAcG0zBSiTzyE/mkoGQlZXnOgA+usnPTXHLHaBqsTQbZxFla2GXDnEq83gsSgfFGUMbGMOTU//No6cn7oP9Hzb/Hv0pwdsYTmlFEPIqFDO1+UDYUqB0bUFqaBoGdMAsh9/OrbvIIWhREFROnq0fjSKb4Y+aQeBcrzpcN2RoTA4xyKjqA9qMD8NcSInBMDtbOWsVEA45zI1JJycB6+B+C7o+TYehvRYzC4ui+9yzGUlATGmlH0UGNWuo8cu8pOCSTkwrAHUT8dAfdU0inJ86TB02eyfnzZtbOHUSDjQTEG3BhoDbUqVB8YSx/7qfPNrzLliI6Sur9wwlKYKA+DZrvkhKlpickjNAWHKljDHBpbKrvoKqM5RIzBSQsOLDUNVNq7KRdfQYCR2SSq+tgsT+3eQFUNuo81tc8GR2BOzT4hCIkQUHabmpwAWM3qHu7V9nwQa2p6QKMkGxGyIs+GmLI5IqVh7OFCGAFI/HfOnvgFhw3VlhJLKJo4f2pE9288SIPlh7L/0j/U+z8zO/ItRmb4e8nfODIU7DqldUyH6yXviwNh/2fwYypHUyWM6bNiS0SZOFGsjeq84QIJgeJ3JdcDQYtjFmb43xYXiA9KDYXMyaZArOhKBUPNK5k8SuWwk2sYZWHKguMYhXTUlTa5Op7ga+noI3K3Dj01sQ9p+rXXni5ndpv0Xa36RDHb1fepT90jeBqRX2oacnJTZ8EgAnKvSC/BujZ5vTEAOKBLpdrimVyhK4jmqrfxxYx9opZLvAklaEFi63+ezfnuk56TGKeypk+ARa0IILluobZJB0dvAqBxjRvcmEDI6bOsB5t91Q57P1lknCuenAP6y5MfrKt9Ivx2H6L2A2X7KT9QFQnVdZpclAkJpsMUoGwyl67z3b6Tyidlt6VZbc0d13pRsY69ZdPLBUMoMhSs1Wnf5Fy0L9oqh44ayYSWZigmZr8ogie9KvvvdLk4ZmqBUHUMqqQctx46iu3Vz5XMcnqHCyyE9ubPLXtt8VtLykqtCHW3zxdMxv9tidVmcycWd3OL6MEkOGWq9uWSl8gELCLfW/hnBcNvN7dZFEeI6sRq5/ixgutH3zcw+d4dtX/h8k/w2IGoapZgBZaR6bXJAiJEYCLeqcq1JTAUQexabuT9HCkhVnbvHIjFrIr4lz1IAxQKwyfV4A9CfOonushSo57M15jcz1iyvaaAzNyWG5TzXlzpohK/WRaQ9ByURkM75jm5LQfGefDEDbjcDvK1bc1qlvhXIdp7Uci1NuCSOEE7X1VVczCvH9flQDgSQfP7LbBcngpIMDLurwFzSVCWhZda1u0ukhFnZQBjURWf2IJLcG5RDgvp1yun6314Px7tPK3Nk2P5GibVApcQpebttYq76zGCkeclWbekFDLUqyB0i6FWWGIh5UlKL2WaaPEa5wLQrieL7qnQwxoxzzKx3MBDRiVNB0RUKyOySDLvM3OcT52YPCRwbECBllAAbKOr3UmS5UELB6ABiYACZyt5OesNLBGOI7cjFZqxlAogdyAaVvWIoQANCRYz6mbhyzGoP85pYPVIW9sRYVPSYtlguoNRTO0nu7WXL5fAxIsbldMrWu003BcTDiLq3lyNvQnPlkTGiw1EFUrMOvf8HJnGfbCOkqLc0SJJjUSLGFrp85a5Etid0RUC4I3UgwMgx4ahIEXSb3HbafGYDYuuyvAtWPonBUM4YCpIARorKyvX8epY19d5jCTEJsKDSOOcbJnT5ZtnI5wwlz6qbKmW5lquYtlA+873dwQuE8/ZQnzGUSgeTwn7qGL6XCHDmoYOg2CqUoUI/RC7bpDdmhMAAeDmkOnrchhJaf5fifEqpbAuFwdpAk/eNDr5lS26Dh7rzMcYeyRKt5F0nQW8DipXkSkwNZ+hz53wbkFISKKZyOGpM8IAchnhjTaNDSalSYATtoCkLFGA4MLlyVSiM4J00eV8rnkI5q5+USvFe+FT3aYrBHD2W+6ic1LaUL+hP/WS996spdKmGlAJGYk+ur7DI/nUVuvSGUk+ljgXGZ4vlCdosvhvtG3Z8yg1H+GaKH+obdkIl6v44GutrjCQq0ihCqZ5JmEp7d9ppJ1L/A+pRnc9HPZvrAAAAAElFTkSuQmCC", K_ = "data:image/png;base64,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", $_ = "data:image/png;base64,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", ef = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABRlJREFUeJztnL9uFDEQxr9D8AKhSMdzXLqLQpXykGhQJMqDhwjiHiKkRDrRICVlKlDScc9Bl4K8AMVSJN7Mbmyv7bXHO8f8muT29uxZf57x+M8doCiKoiiKoiiKoiiKoiiKoiiKoiiMzGobkIGm91r0M8k0frNqRTg9vuu8tb7ae3xxci7u+cQZjM2q6YvgYn21J04UUcbGiGGQJsqz2gZEEC0G0Ia0/jgzWSQJgs9/f7f/r6/2uuOF4zr9jASe1zYgFeMtfVFSvGhKiImtAJrTP28B3Pf6Ty9eeW+m96xffgeEPKuokAU8esTnv7+t4Yhet4W0qSM2ZBmkjRFDiBLE9PihcGX7jBTEhSwgrJGlCWEQMdARGmxWnQvepRMAODkHBD2nSA+hUAGkegVF1BjiYheEMIj0kNPjO+8EcOj9KSPJQxpsVk8a2jeGnB7fYb1ZASfnDYSMIyI9ZJcR0Wtgya4Mg1mWQUi2JSlkWdmlAR0Q0GPg8I7rr+cAgMWb7vWbi/u/h+8tHiXAS6ZknHMT6fqo+7ovggsjjuHwp/f2SbTFFEJWA4Q1er+BQzFlNaRMi1imQ1QVpmblwUIYbi7CvSP0Mx4vqtI2tdLe5voIaM66jRXb2Dno19+ctZ2kyj58jV7QNGcVak1g9vH+D2udnJVBkBgGblE4BRkUox/PS4Ww2Ho4ReESxCtGaPaUKlCO8rlEqS4IbazFGwDLefeGy+3TeyLIVf4uCdJcH7kf1DTG4tvcfoO57912lBGh5fvsfEiJi7YZiyA272iFsPVayv6vx8+8TjN38YNksLcH7huJt9iE4fCS0vOQpj/xA3ox3SXG/q+OGNnwlUtssY07HPOTUoI0GGN4CSHy1jHu+TyUcL/g9LYTrmgD3R4Al2FjRnKqvJw/rRMYDFuUEiGs7uIiDVdfmOeol1t02tLYspwDF+MSiDEUFyQoZQ30Bl/Z9FrSfOVy6xzPxqTdseTulsFLI6FhYZAPvVA+0tNi7codtqoJkoW+GAbG8JdbELmnTnxzF997EydnV+JfyXU1fOKYlEpOL5nCFm46zA3PAXvISt0Xr0ENW+WOITtKFUEkeEktG9kmhkN5fbZ5SSSu5f/FsrvkT+1LnnwGkFOQ2exjeqZlHpBLmNB9GNfnDLnnIexZlllQvHm3tTa66YG2kJFzCzdECFd9JTtLnZk63Xew7NS1IcE1E8+Bb6PKEJBW78RMncbmxbf50/g9tIs4lgAxbOMHB9OZGNoEuD3Iv1kV4hk9OBON4iHLlZG012M8IVGckL146qVmfKO2u55D3GqvN2tKDUuhwlh2AV20gkQux4gTBBjI25dz7+ZQFizl+44VWRMMByLTXm8MNo1VWpRAm4wnGSG4J6psWZY3ZFBRJrCCW3NpJ7eHOGfrQT3NcsyzKLQ+Ulet7dvshT0QdwzIBkfoehDAZkvNY0ClNp9bUXxpryHqLFUOHJ43ZBN9llLHSqtNDE2eD0SsnhYMYZxHfXyUGtRnDz0IQNggWXMgjbWv5KHrkudlOgeth9JMClcPjamb3lvyawmlDzANilJrYyrGDi4xihZMsH4lwUXMd8q5y9yVL+wAkaJQcntOqqgcYrBUQEgWBRgvzJikgUsMgHeDajbw4y+ThFMM1ooIozyFE24x2CsjtJvlNnEOf9qv58RVR8+L2dtnCr8RZTvJMHNcjxbKEyZddfy3P8+USuxRFInPqCiKoiiKoiiKoiiKoiiT5x+58vqZVePedgAAAABJRU5ErkJggg==", tf = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAA7JJREFUeJztm8tx6jAUhn/fuWkgWZBV6iBtsODWkBQBQ4pIaggL2oA6WCULV8BCd2ELhCzbMhifI/x/M5kMfunx+zx0bAOEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghZKRk0h24lkU+N+7vj6d10mP6K92BS7FCrA778x3l9lSFSbLTi3xuKkJ4LB9ekhTlj3QHurLI52b1+A2gmHQfu231+F1xZymQ3B0EwBhjgN9XAFVRjpYz2SLLMiCxMSbV2RJjfqZRB2bPOyCxMSbnsizLhxdgsq3umGyDriwVks2yjoRESZikzNnBLPI5gGraa63j42kNJDi+ZF2WxXVPKbsqS/ouC/chhCV5C7k3UrQQs8jnWB32WD68BGPI6rAH8jk+ntYGicURWogyUrp7DADY7AoAVt9rYOYtEjc7LP+djimzLSCRsWruZKUOZT69Db4Yls3u7Gf2HjxK5dg1xhADeJMfsIIoyvPMrHpe9n4UXJUw2mKIMZ8tYrRtjzzHaUdVRViTIEXR0J3Mpkm/FO/6ZaFSjSgazPU4GbFV3L4pq8LHnyKd0NA46krpbTEi1nIuuI50yV6TyypwJ3E2Bd5M8edOXkxQ7+s6AyNpIUU25VuInaS3Grf+1bHLbdfxrMRxXyJzI2UhRTYVEsPezXU07etyrLUWz0rMz1Q0+9LnsoZ84KTw4ZY+QUaOhJ8sMis/6AKnO7Z8o6SVuqAcm4X57Xl9ksi45AQJYWNIF3y3EytmRJtjECT6FZ4o6mJAV1EaGFoUxhBlDClIv9YxEEPXujSW3+Pp0TVpQY/LkixjKCqhyFmInYS2p359l+CDpZmsuv8Wpf8IhrSQzCtzNzObBksbV7HZnYqMMcdi+CxLTwxpesrni3Jp+b1OCCFrCKFrHTLZhquwt645NSQHXIfEupRboCC46w3qfVjF72v9JFvRXetQ4LrkLCQ0eDs5fa4vrMX5VveVFX9WMAXWAUgH9TpRJtvT/1u3J5zm+sjHkNCd6Ypyh6vxJoa2kCx73p1nWk13ZtfnI224FhdxzTGU34FLiox9uS43yEe4qHEJEpqYSxeAXWlqx+nXeATp+iJ1X8LEXPv8hWxgBIIATaIMlfW0WKiEGCINOpjK9x4hmlLVG50rJYZYow5xogDXW0ykiJJiiDbsEC8K0F2YDitwaTHEG3c4fZLQRZwe8D53E58P8Q4EiCr1tglX811h8NDoIwdAVWc60iZcymMjhBBCCCGEEEIIIYQQQgghhBBCiMd/ML9eI+BDYUAAAAAASUVORK5CYII=", nf = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAActJREFUeJzt2kFugzAQheFp1UXEtidjg3IaInqZRt3kZGyT7NyVU2NwcAQVfuj/pEitSCSHp7E9DmYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOR723oAS7V948L/vz5/5L+TrLZvnLt9u1AckJr3rQew2OH49/f9vN04VqIfSCgMR5R+IDuoitDH1gNY6nS9WLf1IFakXyE7I18hXVUP147rZbvBrEAyEL+17ap6dK2rarPenBk9yb9r+8aNeo+oD4l7EvW+pFht38wG8CyYrce/K48w4kBu3+OAEtVDKCsZTFFT1eFDCV+JgBRCKXrb2/aNG+2i5sTvPRwfzWNX1aPDSGQaTVPP1o5UdSSulxyKxrZ3rkJyrwscsxQ9Za3tJNA07j+QoCqmGsnSaATib+rUlHM/D18xsSN5jTXEm7q5uTf8fpYIRyOQV29kWCn+swJhmKlNWbkOR6mdVUgjkKC5e/lzIpUhYdAcpo5O5og9lVJ+hYS7J18pudUSv09g+ir+B5zHeVYstUY8eSzodL0U/6NV0YPzkqF4Gc9mKYRhJhKI2fiR0bmuOz4mUQjDTCiQ2NzirBIAAAAAAAAAAAAAAAAAAAAAAADAQr/gsiaUUMmhEAAAAABJRU5ErkJggg==", sf = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAQlJREFUeJzt2E1ug0AMBlCn6iK9YXpCckOymy76IxipKaSRGFvvSSxgZfjwGCYCAAAAAAAAAAAAAAAAAAAAAEo6HV3Af7V5asvz09t76nt6ObqApzhfPo8CagRSiEAGI5DBpB2AP8O8nx23a0TkHe6piu6/qO4O8q9gInKFk6bQNk9tFcDigf95/XZNFcrw2jy1leX5PK2P3/TdNaicQ33ZERuXLZ7k7lu/V4IuydkhheULpPgylC+Q86V0KK9HF/CQrYO8yIbjcB4e7N3n8dH3sUW+JSui9JKVxurHb2/HJOmOiERbJxE79rK6Dsq0bZKm0G973/ZMYQAAAAAAAAAAAAAAAAAAMIgPNT9HzAKUgvAAAAAASUVORK5CYII=", af = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAU1JREFUeJzt2MFOwkAQBuCtJ/XtvBR9mRKfptx8snK03NaDQCoWQii6TPm+hAAlaYYd/p2WlAAAAAAAAAAAAAAAAAAAAAAg5Zxz7ttcug628s5BU/JAqdouVZUuYIpzFryqqlDf8aF0AfwUtiERt6NzhIpzStMbcetbWIiERB3QlwjRkJ2pTVmuF9cq5b7lawhyvxIqIRfbrNLy86N0FfOR+/ZuEhLG2ALPsSlhtqyrDOTH1+nn+GNhGpJSSmmz+vlMOblvx7epU8cHStc/O0cX/tRMGRwrXf/sNF2dc9/mpqv3j8MmNF39qyel656tfUIOkzB4P9aQpqtDNSXWUE/p+JXSZpXen18M/P82loBTqYlw7zEULyHDBGxfH/4tUj29Vcv14vvzAPce4Y398qMmYhbGFn038EvUwwiXuAAAAAAAAAAAAAAAAAC37gv48l2z+Bjx4gAAAABJRU5ErkJggg==", of = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAmpJREFUeJzt2jGPokAUwPHH5YqNpfuBtqcz2eA223tfAgOf4noLvY2Jnb0fCEq1mysUFoaBA8Tjkfx/iQmMkgzz5g3M2xUBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4n8IkMLJZmbH78Qw/xu5AX6GfSjEoYRIYc9maMAkqbZlxetqNN3YH+igOeiaaLURePhqv8zxP/f3+HLsDj2oTCBERue6e35kBTCYgDy05152sz4cBe/M86lM4Yy5b0yoTbPfMcAUkfv1Sd/+Teaj3muETWaaKVAfEGFN+c+o6wC8f+SeaLUpfxcf5UN0clLqULSo9N+7PgdYPcYd1usyPNS5XIsozpMQxy7vKrteaHSKKA+Laa/TNjMr1n79VZoc69s66dHwXJkGlrZPLdhI7dhVcAbDbwiQwlcB1NPZ9TkbtIF+235+GYLXlXA5R1bgcNQWrK5at9uoGuFewGmjNEnVvWd7+VN0AttkQXnedNo6PvkI/i8ri4vp8kMg6F5HbgNuvvnabKyiua5RS+T6eLSdNs7hY24rmf77b02Xp3FXp1bpLF1GaIZm8VFLXfp/5xZKI67dToi8gm5URSfNTb3/Kj0M/dV1RCpq3P0ksv0RExLy/STRb5EHRnBkZdQGxBz300/oscbSF/u3YWa/arIz2som6gPRVqQT7y8ktVyJKH+pFdZs4b3/Ksyk+zsW8v92+yAJS85dC7cuWun2IrWmWx8d5dWmy9iPx65enudxuUz1bMnaWrM+H8kzfrEyeIU2/wzCKxcW6kkdeAf7H7zAA138lAgAAAAAAAAAAAAAAAAAAAAAAQERE/gL4iAFGuCkFvAAAAABJRU5ErkJggg==", rf = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAtJJREFUeJzt2jFv2kAYxvHnqg6UMflA2dmQIkqG7PRLGMGnyE4laITElp0PBGNguw5wrn0QG1OUe93+fxMIA+Yev/faZyQAAAAAAAAAAAAAAAAAAAAAAAAAAACD/G7uU+8DCvxR5Ta7uSe4TxIC+XDAZyNfF5rfzWu3wYV8JH492wwqB7sYBoHcQBxIlWwz8HEAJUxrf69JIHVKHzwbEc41bpZGqI7ZyGebAWFco3L6aShMZ4TxF26Whvd5GOdCTv07W+GW1VEXVOrfWuRSfbGVI9M5l2wMzvmS7Jv3i2RfbWofIkmPjtRVYq06pJQVouOAGDxKUzJxhCSrlP1C7tuTiTEIklZILkWV7BdSZ1i/ePnfOV45hyV0ExKGk75Cnl+cJI3fV6n35CDxNJY+EEnTt7s/T1I1+f1CzjmXuqeYamilqaIzzOf5WpduF79HoqlfrMkgh/AashaGZCmQz74/0bSiPomdQFRu7Fc1+f3C5HJIE19T70CQ9bb54zyMJj2k6rl0+jlGgzMRSGjmcVWM31eaXPIBH4VWHHSjAcRMTVnBpNuXdDgdrp26qiqoM6x83eLdQxNnGXGFTLr9yiDCdYt/fLj6dDcYv680vX81MQ6ShUBmI1/sH9JhwP3jw0kok26/HEBdj4mnqYqpzcopsIkeUhSOfrdcyz9GlRIP6EcXj/vF+QorVEO2Gfg84M5Q0tMtf8bVkgeS9bblpZPj2pYkjXtbP+n25ZZrxVWU6wzlfv44TF/hfWfCiKfB6f2rm+pV2WZlqo+YKNM6oflO7n6dvrhfyC3Xh+0KoU3f7pT1tnkQlvpElVbspBRNMQXj7XdJ0QKlCg3fUH/455zcLwn3UM7dR2npn+KS95AmiheK+TSUr4GtyxsXelGbtG6n/W7u3XJdHvDo1Lkt/eIck1fqteKj//nFxT0EFvDPdgAAAAAAAAAAAAAAAAAAALTXb7LTHFrMPO3DAAAAAElFTkSuQmCC", cf = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABLlJREFUeJztnLFu2zAQhk9Nh9Sj+jxGd28GgiAF0tFBtsxZLFhv0KlBMrpA0iCFN++FnycenSwFO1hUKIoUaVni0en/AQEMWZSJ+3nk8XgKEQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIDDYvp8Krj7ABTEy73YSZT5paD55UGL+JG7Ay5mgzHRM4n882Piunc6WhMRUd57r/rjA3cHfJgNxu7p6+JIGD9bmD6fCvFyL8TLfVQedRCCEHmIMpyYP2tIIWaDcZfd64zopywV6/RVeES+TI3tps+n0Qqg45yXOdnVkNlmQURvwkxHa3K1zzYL8lmfQhFNR2z0Pccnn77Wve32L5td4p6ydg1hj8/M118fjJelRxHRVojhhOjbDesgjVoQGcY6sQmhfm8QJV+mZaCQL1Oi1d3OfeyaaAXxWj9cQuwK41QliVIQpxgdCTEdrasBgGG9qq0xPcM+InR6E8OyjjTBEYHFIYiyeIvzH9XvVEPu4xktBAntHUQBpyxn+GoztmVBfq8ES51UQkwdn5Ef2Dsa+9sjwQRh2w239C6u/gZNLlpHXZPRGKYrLu8gCixI/vkx8Rbl9aF6rY0wB7j2sLjlXtlX37VEF8PUzpFS4Zi22MLevVPiPnkrH/E0UbLN4i1DLNu/PgTbk4QVRCbwCnzS461p4UmlGDt6U5dChT0xvP2b6Am8XhbQFiFyxTN0DGJkmwUln74mXXtN+CNcRRSZR+KMaow0BBN9CSHhOVMP5SkuFGPXjn+1KK9vISR8RQ4GUXRqIh2fvf3tgx5S236PwgkhYU8u6pUkch43Rjs6PhGSo41sR1Q9iyf6z8Jeia20x2lYIqtxdy2MmKW/yuclT39Yj3Hjr8uy7bY72IXXxDs+I3HyZe/n7gOvIJYKQ+MCq352iOETIFTuiSjFwu4huvFtxW4+Qqjts83CukgbBVOfz1iwzXumrpV8lmKs7ihrsYvfGjo1XGtuo/6O6Rkh4RPEoyBaGtNHmGyzKEt58hURDSfeZUS6aNPRmq2Cnk8QxTvyZVoznnrNNcq3nqWN6tUd5bT9DTVnFl1WQIMnvNOSjERK7K9MWz6jvHK/RGvXVOtrEyhfpizhbzSCEFXrpJzYdvnDN69QUZ/blGVWBeIQhUcQUxRTeIQL2ygvS0EbBKl5oeV5tecGFCV82GtbzIcTZ21taTwtnzUbjBs9osnr8mVKydMfYzhcPjdgGBzeQ0zTlS5EsQbohhQnX+qpFGVvklyde3lZDdUDCuPrnhOqaC58lCUNpoqgFznf3lA+vxTT0Zry69/tjNyEEjDUvKcQJyeifJ6W4oSCPbnYiCoKEYnvP7fXlbNuleTqfPvBJqAcBKoYzO+D6ETVGSNSlGXamPjLNotSOCKqiqIJQcQX1rqIrkNWCmFMEVEZDRGZA4NCiNlgzBI57UKU74cY+XaTkOHsRBpYjvzZyU9j82yzKM464nnB00TUnatReImKvqfQKb+P1CN0DsdDDFSmnosjka8sN0bwqpovB9NRSfmS5vXvuqFNe5wD8QwJ+wFVG4xiEHlVsoCu8ThHoYsj8R7+VdP7QooCAAAAAAAAAAAAAAAAAAAAAAAAAAC65x9TXHckk+SwIwAAAABJRU5ErkJggg==", lf = "data:image/png;base64,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", df = "data:image/png;base64,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", uf = "data:image/png;base64,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", mf = "data:image/png;base64,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", Af = "data:image/png;base64,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", pf = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABRVJREFUeJztnL1uIjEQx2ejkNc4gURHRRUpDS9AneqaPNg1V12dF6CJREVFhwS61wjFXnNGE2N7Z/yx683+f1IKYGFtz4znw7MhAgAAAAAAAAAgZvZM7dBjAAAAAZv1qg29BgCACBAJjYCx7vdjHTcYA9AuAL4zCE4AAAAAAAAIgqQYAJvYRLKx3zDmtTsc7z7rk8161S6W89vr8+lCRMOPqzSdk9usV23uRZg9U3vd++9tC4NzPl1GJ5Su+XKqnNjb6zZo7mMUipQH3wc1F9Nc1jN7prbmMUvxCoTT90SNvwjBQ0k+vrELpVqz79q2iIh+/XlviO6FIN2vDdxnDb0diiykBKEtRppIbdardrNefXGYKcIgcm+HfTKIQEJbTCjCCnHdU2OEkZoZD5lZP5b8cb7YGs09ny6dmhryM9otR+Kz+qKYhdia7xOOT1ChRXJ9FhtluYQ3pA8pYiGShZFYjERzfYunScZqymkGc+ouZs8UXRXgPsS89t2j5pwl2kJK1JrMIu4Ox4Y71o+n45frXj5XyfeqlVtUoplcVyR0Pl3uFpFrrPm+JOb3abJtATXlEimoB60JS10L47Isc42r0iwViJ1ISoUiqW5LFDCXAjwQ6coNmhxhsZxHxfTmO5px8QAgJYx1jbdrzovlnN5et21K/mK++0ikz25TyRX329rNf1eqsfZ1LouWjmexnNPucOy+MDAOlVOP1QDuo2yH7RqU4bqnxmUlLgXKsWWk1sRyoLqhpODHidFYF7EZf+w9OD9/bFW/o/UntpVXlYf4MDnGEBr7+++7+juanWR3ODZcgKotS1Jj4tdODVe4r0VlIbvDsZEsdClhDJVdn0+X21/oGi6M2LGqM/X/5tUS3YeDsYLgdSczEdf2VHLL8gUQNqUtP3qC2n1Sem1IICUxyZ/tM7RnLMZKYsdfnUD6xJeBhyKlrnmnzjWqdMJvXHqAJYktiUjzqBiSz0P4IMbWVCwpibgy793hePM3uSvPsU5d/dl3gjv/j6ejs5JNdG9hEv+YnBiazo+xWYems0Xzm3YHi3ZdimbqtQpKWzC0r3edTPr8EX9PUm0YRemkRuzFDfkjjQJMYs+34QskaTeS+EZJ4VXyW5O3EFfmLSmVSH7HRuJTijbK1YqdQ2nLIb5jX03x1UeyQDSljqHKIj5STgdLkbQw2hO2Pg6ahkLilyStUkW2LF9ylEsIrhCzptYfs/B8DaQkCYSXrK97arSd65p2T04g3s/+PKQUV23PJYiu8SVbSIrWxzzLEfp8aKHkIPuW5etM569jhCh1uCmtODnQdNW4yJqH2Af2RPd9uUTjfQ5QqhQpFpp0QOVrCeVIW0El9+OvQ77KPHtYG5KwX71ldRTRetu/fUlYn90umqZxIpkSqjsXQ5pZUii5opgYfD7QrEXOeYt9iDSkta8xJ2qclMis7wjKteW63ottLLcRCySlRvPyucrafZhTKG+v29ZVqR2qJahI2Msns9uX0WhXeJlTUFLFydW/bBALRFrJtMPc2GxcQo4FSNHyUM4Rizr0DAnF15g8pkKiKzTt8zEF9ZZlF86+vP+UZ1BDYf+HCbPwfSqUSiDcRFMd2nd5SDM32VtJQ0/f2t/nVlY6u5YqgC+b7utwLTrKStVo00VvMt2SeP7jjzORy31mo7X+SWwTMU3VOe+nuc9kuk5sK6z1Ca9JdZ30KYTYe03CQvqO4BAxAgAAAAAAAAAAAAAAwNT5BzZPhVZ/4M1WAAAAAElFTkSuQmCC", hf = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAA0xJREFUeJztnDtyIjEQhputvQhUkU00J5gLEJNzMOeOfQFOQERGFRxlNljkkuXR+9WS/i+xXXgGTf90q7slQQQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAODArvYATCzztB6O+++/n48XERFdb3fW446B7YOpYsg8H69uRflTewA6dGKI15Z5WgsOpxh/aw/Axsfn1w9PuJxPK9F/Ua63e/L3kz2zhiey9ZDn4/VLDKKfAqX2EjVMmrw0F2wFMX0yhSipDbb1nqVDI/uQZUMYLFVo+fj82tWcn9h6SCwxRpXFLT2HNJ06ykbvJQ3u1kNapQtBevEOIo9JfcQ2Rg2cjGlqYxDZCyhxfepCa5mnNfUHwnbPWFvYsF64NYCtgk38rzqYHEbTEVtlqyn01thFp8BGqDDWC9QB6MQQlBRARR1rDo/0KUZtttrCqzB0eYOac8rz8fqu3kOM4Yru3q7eY8KYZbXQUV3maZXHqeuBpeBw3Bvvrb4WYj+jIDWaazFcb/ddTg91ETpWlOZ7WRzT7ph+mNFDRK0BymEU5Hq77yBKWawh6x0S2E/uvuQqVlV87+38zzXri1To6ogc9QpR2Pzm1VxsIQ0O4XDc0+V8WlM+X6jA2pC1pXLrHmJrAV3OpzV240RsJDE20YjaF0FGrqRzVvIxsBxUDuT5g6sYRJ7rIeL31rxGHnspMUI7z0lWDNV+0uhs7e9ytU8XS7iulChydam1a1+wqdATSs1wKycSLqFrCEEEtYpbn4WzoQSpiasoQ80hNXHN7iBIQVxEYb9AtZW1tH6CypTtsfcQXQrZat1jS73ZeogwOLc2R6oen+76KEFyHf/qsbFJ5LZ8ESSI74axELiKETou1+I0WcjiasDaFNsGJE9OEENPUdu0mulwxnv3e+s1AHeCzkGMKEqpxqT2nIctixpRFB0p93j9mtRdDuhczqc111dbtIiw1/tn2l0nvgd0ekE8d+jz+i5E6TD2skYRIwXZbLXM05riJFBrpNqokaUUQH0RDgTpjOxzRO0vBGuNoushHMTAB4T4hsDURxBAAnKLIrJWbCV1JGetJYdH130AwwvCDbabHHrg/UUGRMR3Hh0aiAIAAAAAAAAAAAAAeuIfG3gINg3W6n8AAAAASUVORK5CYII=", gf = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAolJREFUeJzt3DtSwzAQgOGF4SLJTDpXPoEvkDo9B6On5gI5Qap0zMBRTAFiRPBDr5Vk5f9maEIejleP1cqOCAAAAAAAAAAAAAAAAAAAKGfou9HlMWSwdOIJSoVaDMpT6QOIsT/s5Hy5Jn/foe/G/WEnIiIf759yvlwfkn/IjMdcH6Th5fXtQaOX2AEwgcklW+S36Pl0HEXy95ImaM0nQ9+NOeeqTQ9Za1KdSHpHgFYyrqZ7CApppXeIeK5D7Pxc5Dv7ECk7xrYUDBGPgNjBeHl98w6Aeb1GCpn6/Ya+G5fe87Zh3lJPk4e+G01O7vJcl8e0+Bzr3Ovt45069ufTcTR/S/9T+96+X7DkMBITDBcm4EufsxQwJObaA9UCsoVJM+dq2uckhwxbq+uQ3MW12vkkNOa5PkHZdPndaKm0sdpDzFoDeawG5Hy5quw5IBJBCaN63giKPu9qL0HRtZhlmZNvZzEtZTSa9bVQXmlvLQcd47ZIqnHVCjzEFh8BAL+8Jmk75W1hgtcWcklqsuLiVIp8z8w2sJ3FrW0Ni3AZkIq5E09jtVBhwKK5BrKJDaqpy25qKneE+Pk+/4a2TQRk7nowl0lya6oOiOnWc/vYpYKhmVFWHZDWWr9tbmu86oDUquWGcrfmsiwWhpWJ7nolbyHeqqXsMHgOWbskH9PWKgZJJvWQ+0Xu1doIEhUQhig0z6l1T91bSM8ogCs0/ipawmf/wI9pvLHnbXJh2GIVVZsZ0veHHY05lVT3Bcb0FEonCmLWZVR7LSnvFmPIBzRk6VZUhN1ln0NqCAYNROpdaKr+SAzCaAfFZxXPOkT093PMkOiyiicgmbgGnYBkxM+UVIgEAgAAAAAAINgXIA5u7FTs1dIAAAAASUVORK5CYII=", _f = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAolJREFUeJzt3DtywjAQgOElk4vADJ0rn8AXoKbnYPSpuQAnoKLLTHIUp0iUUYgfeq0si/+bSUN4GK8eq5WNCAAAAAAAAAAAAAAAAADgqXRt07s8hgymTjxBKVCNQXld+gBi7PZbud7uyd+3a5t+t9+KiMjH+6dcb/dN8g8Z8ZLrgzSc3y4bjV5iB8AEJpdskV+j0/HQi+TvJVXQmk+6tulzzlWrHrLmpDqR9I4AtWRcVfcQLKSW3iHiuQ6x83OR7+xDZNkxtqZgiHgExA7G+e3iHQDzeo0UMvX7dW3TT73nY8N8pJ4md23Tm5zc5bkuj2nxOdax19vHO3Tsp+OhN39T/1P73r5fcMlhJCYYLkzApz5nKmBIzLUHqgVkDZNmztW0z0kOGbZm1yG5i2ul80lozHN9grLq8rtRU2ljtoeYtQbymA3I9XZX2XNAJIISRvW8ERR93tVegqJrMssyJ9/OYmrKaDTra6G80t5SDjrGY5FU46oVeIgtPgIAfnlN0nbKW8MEry3kktRkxcWhFPmZmW1gO4ub2xoW4TIgFWMnnsZqocKASWMNZBUbVEOX3ZRU7gjx833+DW2rCMjY9WAuk+TaFB0Q063H9rGXCoZmRll0QGpr/baxrfGiA1KqmhvK0xrLslgYFia66y15C/FaTWWHwXPI3CX5GDZXMUgyqYfcL/Ks5kaQqIAwRKF6Tq176N5CesYCuELjr0VL+Owf+DGNN/a8DS4Ma6yiajND+m6/pTGnkuq+wJieQulEQcy6jGqvJeXdYgz5gIYs3YqKsLvsc0gJwaCBSLkLTdUfiUEY7aD4rOJZh4j+fo4ZEl1W8QQkE9egE5CM+JmSApFAAAAAAAAAoBZf6Exu7Mzk5D8AAAAASUVORK5CYII=";
let ff = class {
  constructor({
    app: t,
    viewport: s,
    mainImage: a
  }) {
    this.app = t, this.pixiViewport = s.viewport, this.mainImage = a, this.size = 7, this.images = [Z_, K_, $_, ef, tf, nf, sf, af, of, rf, cf, lf, df, uf, mf, Af, pf, hf, gf, _f], this.textureArray = [];
    for (let i = 0; i < this.images.length; i++) {
      let o = PIXI.Texture.from(this.images[i]);
      o.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST, this.textureArray.push(o)
    }
  }
  async boomWithDebounce({
    x: t,
    y: s
  }, a) {
    await En(k(50, 500)), this.boom({
      x: t,
      y: s
    }, a)
  }
  boom({
    x: t,
    y: s
  }, a) {
    if (a) {
      const i = new PIXI.AnimatedSprite(this.textureArray);
      i.loop = !1, i.animationSpeed = .17, i.zIndex = 2, i.x = t, i.y = s, i.scale.set(.5), i.anchor.set(.5, .55), this.pixiViewport.addChild(i), i.play(), i.onComplete = () => {
        this.pixiViewport.removeChild(i)
      }
    }
  }
};
const xf = ({
    x: n,
    y: t
  }) => {
    let s = 0;
    const a = n - 3,
      i = t - 3;
    for (let o = 0; o < 7; o++)
      for (let r = 0; r < 7; r++) {
        const l = a + o,
          d = i + r;
        Ct({
          x: l,
          y: d
        }) && s++
      }
    return s
  },
  vf = async ({
    coords: n,
    dispatch: t,
    repaintReward: s,
    amount: a,
    state: i
  }) => {
    var r, l;
    if (!a && i && (a = i.shop.available[7]), !a || a === 0) {
      t(Gt());
      return
    }
    b.mainImage.pumpkin.boom(n), t(ia.useProduct({
      pixelId: ht(n),
      productId: 7
    })), t(Tt(s * xf(n))), t(sa({
      product: 7,
      amount: 1
    })), (l = (r = window.Telegram.WebApp) == null ? void 0 : r.HapticFeedback) == null || l.notificationOccurred("error")
  }, yf = () => {
    const n = _(),
      t = 7,
      s = c(Ye),
      a = c(d => d.shop.available[t]);
    c(d => d.main.fastMode);
    const i = c(d => d.main.currentFastType),
      r = 10 + String(a).length * 6,
      l = [S.button, S.fast_type_button];
    return i === "pumpkin" && l.push(S.fast_mode_button_enabled), !s || !a || a === 0 ? null : e.jsxs("button", {
      className: `${l.join(" ")} ${S.shop_button}`,
      onPointerUp: () => {
        if (i === "pumpkin") {
          n(Gt());
          return
        }!a || a === 0 ? (n(it(t)), n(ot())) : n(ua("pumpkin"))
      },
      children: [e.jsx("img", {
        alt: "img",
        className: S.button_image,
        src: jo
      }), e.jsx("div", {
        className: S.available,
        style: {
          width: r
        },
        children: !a || a === 0 ? e.jsx(P, {
          children: ""
        }) : e.jsx(Yn, {
          number: a,
          fontSize: 11,
          fontWeight: 400,
          gap: 3
        })
      })]
    })
  }, Ja = "/assets/particle_rays1-mrHjO6Jg.png", Za = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAB40lEQVR4nO3dQU7CUBRA0da4L2Hl1JXVidP+0Fgi7T1nSiIoNy+2vo/zuq7rRNaHt75NAHECiBNAnADiBBD3Ofr253mu/3wuYXSlbwLECSBOAHECiBNAnADiBBAngDgBxAkgTgBxAogTQJwA4gQQJ4A4AcQJIE4AcQKIE0CcAOIEECeAOAHEDU8GncV/fMbFVU5NmQBxAogTQJwA4gQQJ4C401wG7r3Uu9/uhzzvY3k8/XrOeGloAsQJIE4AcQKIE0DcJf4YtMfyvbzsa9++bpuPvfJ5/8IEiBNAnADiBBAngDgBxAkgTgBxAogTQNxpbgWPli1Gt2CftbVwctRiybsyAeIEECeAOAHECSDuEgshe5YtjjpJ/K4LHnuZAHECiBNAnADiBBAngDgBxAkgTgBxAogTQFzucOjWZtERW0VnZALECSBOAHECiJvXwYbEVT4SvW60BGMCxAkgTgBxAojL3QncuxV89V+ETYA4AcQJIE4AcQKIy10F7LW1J+BsIJcggDgBxAkgTgBxtoJ/2QomSQBxAogTQJwA4qyFB1gLZ5MA4gQQJ4A4AcQJIE4AcQKIE0CcAOIEECeAOAHECSBOAHECiBNA3PBcwFH/ZZP3ZQLECSBOAHECiBNAnADKpmn6AbwwPcfPo50AAAAAAElFTkSuQmCC";
class wf {
  constructor({
    ticker: t,
    viewport: s,
    store: a
  }) {
    this.ticker = t, this.pixiViewport = s.viewport, this.viewport = s, this.store = a, this.backdrop = null, this.glow = null, this.glow2 = null, this.image = null
  }
  async add(t) {
    (this.glow || this.glow2 || this.backdrop || this.image) && this.destroy(), this.addBackdrop(), await this.addGlow(t), await this.addRewardImage(t), this.ticker.add(this.glowAnim.bind(this)), this.pixiViewport.animate({
      scale: 60,
      time: 400,
      position: {
        x: t.x + .5,
        y: t.y + .5
      },
      callbackOnComplete: () => {
        this.viewport.lock()
      }
    })
  }
  addBackdrop() {
    this.backdrop = new PIXI.Graphics, this.backdrop.beginFill(0, .8), this.backdrop.drawRect(0, 0, E.width, E.height), this.backdrop.endFill(), this.backdrop.zIndex = 20, this.backdrop.interactive = !0, setTimeout(() => {
      this.backdrop.on("pointerup", t => {
        const s = this.store.dispatch;
        s(M_()), this.viewport.unlock(), this.destroy()
      })
    }, 2e3), this.pixiViewport.addChild(this.backdrop)
  }
  async addGlow(t) {
    PIXI.Loader.shared.resources.rewardGlow || await this.loadResource("rewardGlow", Ja);
    const a = (i = 1) => {
      const o = new PIXI.Sprite(PIXI.Loader.shared.resources.rewardGlow.texture);
      return o.zIndex = 21, o.width = 10, o.height = 10, o.x = t.x + .5, o.y = t.y + .5, o.alpha = .5, o.anchor.set(.5), o
    };
    this.glow = a(), this.pixiViewport.addChild(this.glow), this.glow2 = a(-1), this.pixiViewport.addChild(this.glow2)
  }
  glowAnim(t) {
    this.glow.rotation += .05 * t, this.glow2.rotation += .05 * t * -1
  }
  async addRewardImage(t) {
    PIXI.Loader.shared.resources.tnt || await this.loadResource("tnt", Za), this.image = new PIXI.Sprite(PIXI.Loader.shared.resources.tnt.texture), this.image.zIndex = 21, this.image.width = 1, this.image.height = 1, this.image.x = t.x, this.image.y = t.y, this.pixiViewport.addChild(this.image)
  }
  async loadResource(t, s) {
    return new Promise((a, i) => {
      const o = PIXI.Loader.shared;
      o.add(t, s), o.load((r, l) => {
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
class jf {
  constructor({
    app: t,
    viewport: s,
    store: a,
    mainImage: i
  }) {
    Wn(this, "isCoordsInExtraRewardZone", ({
      coords: t,
      x1: s,
      y1: a,
      imageSize: i
    }) => {
      const {
        x: o,
        y: r
      } = t, l = s + i, d = a + i;
      return o >= s && o < l && r >= a && r < d
    });
    this.app = t, this.pixiViewport = s.viewport, this.store = a, this.mainImage = i, this.items = [], this.opacity = 70, this.init()
  }
  async init() {
    for (let t = 0; t < this.items.length; t++) {
      const s = this.items[t],
        a = await this.mainImage.loadImage(s.url);
      s.imageData = this.mainImage.getImageData(a, s.imageSize, s.imageSize), this.createTexture(s), this.createSprite(s)
    }
  }
  async add(t) {
    const s = {
        ...t
      },
      a = await this.mainImage.loadImage(s.url);
    return s.imageData = this.mainImage.getImageData(a, s.imageSize, s.imageSize), this.createTexture(s), this.createSprite(s), this.items.push(s), Promise.resolve()
  }
  deleteTemplate(t) {
    this.items = this.items.filter(s => (s.id === t && this.pixiViewport.removeChild(s.sprite), s.id !== t))
  }
  createTexture(t) {
    t.texture = new PIXI.Texture.fromBuffer(t.imageData, t.imageSize, t.imageSize), t.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST
  }
  createSprite(t) {
    t.sprite = new PIXI.Sprite(t.texture), t.sprite.interactive = !1, t.sprite.zIndex = 5, t.sprite.alpha = this.opacity / 100, t.sprite.visible = !1, t.sprite.width = t.imageSize, t.sprite.height = t.imageSize, t.sprite.x = t.x, t.sprite.y = t.y, this.pixiViewport.addChild(t.sprite)
  }
  getRepaintRewardType({
    coords: t,
    repaintColor: s
  }) {
    const i = this.store.getState().tournament.activePeriod;
    if (!(i && i.ID && i.PeriodType === "round")) return wt.neutral;
    for (let o = 0; o < this.items.length; o++) {
      const r = this.items[o];
      if (r.type === De.my || !this.isCoordsInExtraRewardZone({
          coords: t,
          x1: r.x,
          y1: r.y,
          imageSize: r.imageSize
        })) continue;
      const l = Qn({
          x: t.x - r.x,
          y: t.y - r.y,
          width: r.imageSize
        }),
        d = on(r.imageData[l], r.imageData[l + 1], r.imageData[l + 2]),
        m = r.imageData[l + 3],
        h = this.mainImage.getPixelColor({
          coords: t
        });
      if (m !== 0 && h !== s) {
        if (h === d && s !== d) return wt.fail;
        if (h !== d && s === d) return wt.success
      }
    }
    return wt.neutral
  }
  show(t) {
    this.items.forEach(s => {
      s.sprite !== null && s.id === t && (s.sprite.visible = !0)
    })
  }
  hide() {
    this.items.forEach(t => {
      t.sprite !== null && (t.sprite.visible = !1)
    })
  }
  setOpacity(t) {
    this.opacity = t, this.items.forEach(s => {
      s.sprite !== null && (s.sprite.alpha = this.opacity / 100)
    })
  }
  changeTemplateCoords({
    templateId: t,
    x: s,
    y: a
  }) {
    this.items.forEach(i => {
      i.id === t && (i.sprite.x = s, i.sprite.y = a)
    })
  }
}
class bf {
  constructor({
    app: t,
    viewport: s,
    store: a,
    ticker: i,
    readyCallback: o
  }) {
    Wn(this, "getClickCoords", t => {
      const s = this.sprite.toLocal(t.data.global);
      return {
        x: Math.floor(s.x),
        y: Math.floor(s.y)
      }
    });
    this.app = t, this.ticker = i, this.viewport = s, this.store = a, this.pixiViewport = s.viewport, this.selectedPixel = new lh({
      viewport: s
    }), this.template = new L_({
      app: t,
      viewport: s,
      store: a
    }), this.worldTemplate = new H_({
      app: t,
      viewport: s,
      store: a,
      mainImage: this
    }), this.tournamentTemplates = new jf({
      app: t,
      viewport: s,
      store: a,
      mainImage: this
    }), this.reward = new wf({
      ticker: i,
      viewport: s,
      store: a
    }), this.bomb = new Nh({
      app: t,
      viewport: s,
      mainImage: this
    }), this.pumpkin = new ff({
      app: t,
      viewport: s,
      mainImage: this
    }), this.imageData = null, this.texture = null, this.sprite = null, this.timeout = null, this.lastPointerUpTs = Date.now(), this.lastPaintCoords = {
      x: -1,
      y: -1
    }, this.initImage(), o(a), this.initEvents(), this.store.dispatch(At({
      command: Qe.start
    })), !yo() && this.loadAllChunks().then(() => {
      const r = a.getState().main.startParams.coords;
      r && (b.viewport.viewport.animate({
        scale: 60,
        time: 400,
        position: {
          x: r.x + .5,
          y: r.y + .5
        }
      }), this.selectedPixel.draw(r), this.store.dispatch(Ft(r)))
    })
  }
  initImage() {
    this.imageData = new Uint8Array(E.width * E.height * 4);
    const t = PIXI.Texture.fromBuffer(this.imageData, E.width, E.height, {
      format: PIXI.FORMATS.RGBA,
      type: PIXI.TYPES.UNSIGNED_BYTE,
      width: E.width,
      height: E.height
    });
    t.scaleMode = PIXI.SCALE_MODES.NEAREST, this.texture = t, this.sprite = PIXI.Sprite.from(t), this.sprite.interactive = !0, this.pixiViewport.addChild(this.sprite), this.pixiViewport.fitHeight(), this.pixiViewport.moveCenter(this.pixiViewport.worldWidth / 2, this.pixiViewport.worldHeight / 2)
  }
  initEvents() {
    this.sprite.on("pointerdown", t => {
      this.timeout !== null && (clearTimeout(this.timeout), this.timeout = null), this.wasMoved = !1
    }), this.pixiViewport.on("moved", () => {
      this.wasMoved = !0
    }), this.sprite.on("pointerup", t => {
      const s = this.store.getState(),
        a = this.getClickCoords(t),
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
        }), t.data.originalEvent.preventDefault()), this.lastPointerUpTs = r, i) {
        const l = t.data.originalEvent.touches;
        if (l && l.length > 0) return;
        const d = {
          x: t.data.global.x,
          y: t.data.global.y
        };
        this.lastPaintCoords = a, Dr({
          charges: s.mining.charges,
          dispatch: this.store.dispatch,
          flyCoords: d,
          paintCoords: a,
          activeColor: s.color.active,
          state: this.store.getState()
        })
      } else o === "bomb" ? Y_({
        coords: a,
        dispatch: this.store.dispatch,
        repaintReward: Na(s),
        state: this.store.getState()
      }) : o === "paintcan" ? W_({
        coords: a,
        dispatch: this.store.dispatch,
        repaintReward: Na(s),
        activeColor: s.color.active,
        state: this.store.getState()
      }) : o === "pumpkin" ? vf({
        coords: a,
        dispatch: this.store.dispatch,
        repaintReward: Na(s),
        state: this.store.getState()
      }) : this.timeout = setTimeout(() => {
        this.selectedPixel.draw(a), this.store.dispatch(Ft(a))
      }, 0)
    })
  }
  async loadAllChunks() {
    const t = await this.loadImage(nl),
      s = this.getImageData(t, E.width, E.height);
    for (let a = 0; a < s.length; a += 4) this.imageData[a + 3] === 0 && (this.imageData[a] = s[a], this.imageData[a + 1] = s[a + 1], this.imageData[a + 2] = s[a + 2], this.imageData[a + 3] = s[a + 3]);
    this.updateTexture(), this.store.dispatch(At({
      command: Qe.finish
    }))
  }
  async loadFromCentrifuge(t) {
    const s = performance.now(),
      a = this.getImageData(t, E.width, E.height);
    for (let i = 0; i < a.length; i += 4) this.imageData[i + 3] === 0 && (this.imageData[i] = a[i], this.imageData[i + 1] = a[i + 1], this.imageData[i + 2] = a[i + 2], this.imageData[i + 3] = a[i + 3]);
    this.updateTexture(), this.store.dispatch(At({
      command: Qe.finish
    })), console.log(performance.now() - s)
  }
  async loadChunk({
    chunkIndex: t
  }) {
    const s = E.chunkOrder[t],
      a = await this.loadImage(`${ai}image/block?block_id=${s}`),
      i = this.getImageData(a, E.chunkSize, E.chunkSize),
      o = Ia({
        index: s - 1,
        width: 4,
        blockSize: 1
      });
    for (let r = 0; r < i.length; r += 4) {
      const l = Ia({
          index: r,
          width: E.chunkSize
        }),
        d = Qn({
          x: l.x + o.x * E.chunkSize,
          y: l.y + o.y * E.chunkSize,
          width: E.width
        });
      this.imageData[d] = i[r], this.imageData[d + 1] = i[r + 1], this.imageData[d + 2] = i[r + 2], this.imageData[d + 3] = i[r + 3]
    }
    this.updateTexture(), t < 15 ? await this.loadChunk({
      chunkIndex: t + 1
    }) : this.store.dispatch(At({
      command: Qe.finish
    }))
  }
  updateTexture() {
    this.sprite.texture.update()
  }
  paintPixels(t) {
    for (const [s, a] of Object.entries(t)) this.paintPixel({
      id: s,
      color: Ut(a)
    });
    this.updateTexture()
  }
  paintPixelsFromCentrifuge(t) {
    Object.keys(t).forEach(s => {
      t[s].forEach(i => {
        s !== "#171F2A" && this.paintPixel({
          id: i,
          color: Ut(s)
        })
      })
    }), this.updateTexture()
  }
  paintSquare({
    x: t,
    y: s,
    size: a,
    colors: i
  }) {
    for (let o = 0; o < i.length; o++) {
      const r = Ia({
          index: o,
          width: a,
          blockSize: 1
        }),
        l = {
          x: t + r.x,
          y: s + r.y
        };
      if (l.x < 0 || l.y < 0 || l.x > E.width || l.y > E.height) continue;
      const d = Qn({
          x: l.x,
          y: l.y,
          width: E.width
        }),
        {
          r: m,
          g: h,
          b: g
        } = Ut(i[o]);
      this.imageData[d] = m, this.imageData[d + 1] = h, this.imageData[d + 2] = g, this.imageData[d + 3] = 255
    }
    this.updateTexture()
  }
  paintPixel({
    id: t,
    color: s
  }) {
    const i = (Number(t) - 1) * 4;
    this.imageData[i] = s.r, this.imageData[i + 1] = s.g, this.imageData[i + 2] = s.b, this.imageData[i + 3] = 255
  }
  getPixelColor({
    id: t,
    coords: s
  }) {
    let a = 0;
    s ? a = ht(s) : a = Number(t);
    const i = (a - 1) * 4,
      o = this.imageData[i],
      r = this.imageData[i + 1],
      l = this.imageData[i + 2];
    return on(o, r, l)
  }
  loadImage(t) {
    return new Promise(async s => {
      let a = 0,
        i = 2e3;
      const o = async () => {
        const r = new Image,
          d = await (await fetch(t, {
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
  getImageData(t, s, a) {
    const i = document.createElement("canvas");
    i.width = s, i.height = a;
    const o = i.getContext("2d");
    return o.drawImage(t, 0, 0, s, a), o.getImageData(0, 0, s, a).data
  }
  isCoordsEqual(t, s) {
    return t.x === s.x && t.y === s.y
  }
  getImageBlob() {
    return new Blob([this.imageData], {
      type: "image/png"
    })
  }
  convertSpriteToImage(t) {
    const s = new PIXI.Renderer({
        width: E.width,
        height: E.height
      }),
      a = PIXI.RenderTexture.create({
        width: E.width,
        height: E.height
      });
    s.render(this.sprite, a), s.view.toBlob(o => {
      t(o), s.destroy(!0)
    }, "image/png")
  }
  pixanosRepaint(t, s, a, i) {
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
      d = o(t),
      m = Array.from(Array(l));
    for (let g = 0; g < l; g++) m[g] = g + 1;
    for (let g = l + 1; g <= r; g++) {
      const f = Math.floor(d() * g) + 1;
      f <= l && (m[f - 1] = g)
    }
    const h = Ut(i);
    for (let g = 0; g < m.length; g++) {
      const f = m[g];
      if (g < 20) {
        const j = Js(f);
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
class Nf {
  constructor({
    viewport: t
  }) {
    this.viewport = t, this.pixiViewport = t.viewport, this.sprite = null
  }
  draw({
    arr: t
  }) {
    this.destroy();
    let s = new Uint8Array(E.width * E.height * 4);
    for (let i = 0; i < s.length; i += 32) {
      const o = t[Math.round(i / 32)];
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
class Cf {
  constructor({
    app: t,
    store: s
  }) {
    this.app = t, this.store = s, this.viewport = new window.pixi_viewport.Viewport({
      worldWidth: E.width,
      worldHeight: E.height,
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
      interaction: t.renderer.plugins.interaction,
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
const If = () => localStorage.getItem("canvasFps") ? Number(localStorage.getItem("canvasFps")) : 60;
class Pf {
  constructor({
    app: t
  }) {
    this.app = t, this.lastTime = Date.now(), this.lastRenderTime = Date.now(), this.fps = If(), this.callbacks = [], this.render()
  }
  render(t = 0) {
    const s = Date.now(),
      a = s - this.lastTime;
    if (this.lastTime = s, s - this.lastRenderTime > 1e3 / this.fps) {
      const i = t / this.fps;
      this.app.render(), this.callbacks.forEach(o => {
        o(i)
      }), this.lastRenderTime = s
    }
    requestAnimationFrame(() => this.render(a))
  }
  add(t) {
    this.callbacks.push(t)
  }
  remove(t) {
    this.callbacks = this.callbacks.filter(s => s.toString() !== t.toString())
  }
  setFps(t) {
    this.fps = Math.min(60, Math.max(10, t))
  }
}
let Ka;
const Sf = n => {
  Ka = n
};
class Bf {
  constructor({
    readyCallback: t
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
    }), this.app.ticker.stop(), this.ticker = new Pf({
      app: this.app
    }), this.viewport = new Cf({
      app: this.app,
      store: Ka
    }), this.mainImage = new bf({
      app: this.app,
      viewport: this.viewport,
      store: Ka,
      ticker: this.ticker,
      readyCallback: t
    }), this.mask = new Nf({
      viewport: this.viewport
    })
  }
}
let b, Gi = !1;

function Tf() {
  b = new Bf({
    readyCallback: async n => {
      var s, a, i;
      const t = n.getState();
      t.device.deviceType, window.Telegram.WebApp.platform, ((s = t.user.user) == null ? void 0 : s.websocketToken) === "" && n.dispatch(su(!0)), ag((a = t.user.user) == null ? void 0 : a.websocketToken, (i = t.user.user) == null ? void 0 : i.id)
    }
  })
}
const Ef = A.memo(() => (A.useEffect(() => {
    Gi || (Tf(), Gi = !0)
  }, []), ze.createPortal(e.jsx("canvas", {
    id: "canvasHolder",
    className: `${th.main_canvas}`
  }), document.body)), () => !0),
  kf = ({
    children: n,
    coords: t,
    classes: s = []
  }) => {
    const a = te(),
      i = _();
    return e.jsx("div", {
      className: [oe.row, ...s].join(" "),
      onPointerUp: () => {
        b.viewport.viewport.animate({
          scale: 25,
          time: 400,
          position: t
        }), b.mainImage.selectedPixel.draw(t), a.push("/"), i(Ft(t))
      },
      children: n
    })
  },
  Df = ({
    item: n
  }) => e.jsxs(kf, {
    coords: n,
    children: [e.jsxs($o, {
      children: [e.jsx($p, {
        color: n.color
      }), e.jsx(Kp, {
        coords: {
          x: n.x,
          y: n.y
        }
      })]
    }), e.jsx(er, {
      children: e.jsx(Zp, {
        date: n.dateObtained
      })
    }), e.jsx(tr, {
      children: e.jsx("div", {
        className: `${oe.icon_arrow} telegram_icons`,
        children: ""
      })
    })]
  }),
  Rf = () => c(mi.selectAll).map(t => e.jsx(Df, {
    item: t
  }, ht({
    x: t.x,
    y: t.y
  }))),
  Mf = () => {
    const n = _(),
      t = c(o => o.user.pixelsForSaleOffset),
      s = c(o => o.user.pixelsForSaleLimit),
      a = c(o => o.user.pixelsForSaleTotal),
      i = c(o => o.user.pixelsForSaleFetchStatus);
    return t + s >= a ? null : e.jsx("button", {
      className: `${oe.row} ${oe.loadMoreButton}`,
      onPointerUp: () => {
        n(Oo({
          offset: t + s
        }))
      },
      disabled: i === p.pending,
      children: "Show more"
    })
  },
  Uf = () => e.jsxs("div", {
    className: oe.skeleton_container,
    children: [e.jsx("div", {
      className: `${oe.header} ${oe.skeleton_header}`
    }), e.jsx("div", {
      className: oe.data,
      children: e.jsx("div", {
        className: `${oe.skeleton_row}`
      })
    })]
  }),
  Qf = () => {
    const n = c(mi.selectTotal);
    return c(s => s.user.pixelsForSaleFetchStatus) === p.pending && n === 0 ? e.jsx(Uf, {}) : n !== 0 ? e.jsxs(Wp, {
      children: [e.jsx(Rf, {}), e.jsx(Mf, {})]
    }) : null
  },
  Of = () => {
    const n = _();
    return jp(), A.useEffect(() => () => {
      n(nu()), n(Oo({
        offset: 0
      })), n(tu({
        status: p.idle
      }))
    }, []), e.jsxs(e.Fragment, {
      children: [e.jsx(Vp, {}), e.jsx(Qf, {})]
    })
  },
  Ff = "_layout_v8prs_1",
  zf = "_group_title_container_v8prs_7",
  Gf = "_group_title_v8prs_7",
  Lf = "_group_v8prs_7",
  Fs = {
    layout: Ff,
    group_title_container: zf,
    group_title: Gf,
    group: Lf
  },
  Hf = ({
    title: n,
    children: t
  }) => e.jsxs(re.Fragment, {
    children: [e.jsx("div", {
      className: Fs.group_title_container,
      children: e.jsx("span", {
        className: Fs.group_title,
        children: n
      })
    }), e.jsx("div", {
      className: Fs.group,
      children: t
    })]
  }),
  qf = "_boost_item_8sbvi_1",
  Yf = "_image_container_8sbvi_10",
  Vf = "_image_8sbvi_10",
  Xf = "_content_container_8sbvi_21",
  Wf = "_content_8sbvi_21",
  Jf = "_item_title_container_8sbvi_33",
  Zf = "_item_reward_container_8sbvi_40",
  Kf = "_price_text_8sbvi_45",
  $f = "_dot_8sbvi_49",
  ex = "_level_text_8sbvi_53",
  tx = "_status_container_8sbvi_58",
  nx = "_status_8sbvi_58",
  Me = {
    boost_item: qf,
    image_container: Yf,
    image: Vf,
    content_container: Xf,
    content: Wf,
    item_title_container: Jf,
    item_reward_container: Zf,
    price_text: Kf,
    dot: $f,
    level_text: ex,
    status_container: tx,
    status: nx
  },
  yi = ({
    children: n,
    boost: t,
    price: s,
    isMax: a
  }) => {
    const i = _();
    return e.jsx("div", {
      className: Me.boost_item,
      onPointerUp: () => {
        a || (i(pg(t)), i(gi(!0)))
      },
      children: n
    })
  },
  wi = ({
    isMax: n
  }) => n ? null : e.jsx("div", {
    className: Me.status_container,
    children: e.jsx("div", {
      className: Me.status,
      children: e.jsx(P, {
        size: 20,
        children: ""
      })
    })
  }),
  ji = ({
    src: n
  }) => e.jsx("div", {
    className: Me.image_container,
    children: e.jsx("img", {
      alt: "image",
      className: Me.image,
      src: n
    })
  }),
  sx = ({
    price: n,
    isMax: t
  }) => t ? "Max" : e.jsxs(re.Fragment, {
    children: [e.jsx(M, {}), "  ", e.jsx("span", {
      className: Me.price_text,
      children: n
    })]
  }),
  bi = ({
    reward: n,
    level: t,
    price: s,
    isMax: a
  }) => {
    const {
      t: i
    } = Ge();
    return e.jsx("div", {
      className: Me.content_container,
      children: e.jsxs("div", {
        className: Me.content,
        children: [e.jsx("div", {
          className: Me.item_title_container,
          children: n
        }), e.jsxs("div", {
          className: Me.item_reward_container,
          children: [e.jsx(sx, {
            price: s,
            isMax: a
          }), "  ", e.jsx("span", {
            className: Me.dot,
            children: "•"
          }), "  ", e.jsxs("span", {
            className: Me.level_text,
            children: [t, " ", i("mining.boosts.level")]
          })]
        })]
      })
    })
  },
  Rr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAADNQTFRFJS5B9v+18/Dl7NL//OZH1N6v1MdTura5/7AA1oX4ppdEyI4TwHoSZGNloiHkREJOZACci2GX6wAAAM5JREFUeNrt18EOgyAQRdFBpzKoQP//a8tbdGHGphppIWZuwoaEAwlhAVmWZVm3L6UQegFFNDaOITxLfYCfuJ+Adr6/gM5x6QjXCgQm8p1rB4qgi5wG7X3Y+S40DESAUlJcJ2CMIPcw/6gLzs5NR5/elovRe1LNzBNP9cBFmKiYZy8kZ3A5K3LFtlIRhLjIQugsCRTkjkj1QIgrnYnZOSzxHhzt1hIEJ8L8JvsDwWEARL2BwJjBiWznewGZFadqCUppLRGqCdrn07Is6+a9AG2rFi1gfBMTAAAAAElFTkSuQmCC",
  ax = () => {
    const {
      t: n
    } = Ge(), t = ge.paintReward, s = c(m => m.main.settings.UpgradeRepaint), a = c(m => m.mining.boosts[t]), {
      repaintReward: i
    } = c(pn), o = a >= i, r = Math.min(i, a + 1), l = Math.min(i, a), d = s == null ? void 0 : s.levels[r];
    return e.jsxs(yi, {
      boost: t,
      isMax: o,
      price: d.Price,
      children: [e.jsx(ji, {
        src: Rr
      }), e.jsx(bi, {
        reward: n("mining.boosts.paintReward"),
        price: d.Price,
        level: l,
        isMax: o
      }), e.jsx(wi, {
        isMax: o
      })]
    })
  },
  Mr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQBAMAAAB8P++eAAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAABJQTFRFJS5B/+2k/8ZA/6cA5HQArUkAuEjH0AAAAGRJREFUeNrt1TENAEEMA8FQCAVTMAVTCH8qL0V6Bltcka2ntuu6rjcbGqZgqIGhXCx0h4VuDQrd7eLgupa3INDqPwbGm7QOgH9ZR0KvA+GsI2GUQuE4xcKkAAhMGTG2d0zX9WYfl2Yb5cnsVocAAAAASUVORK5CYII=",
  ix = () => {
    const {
      t: n
    } = Ge(), t = ge.reChargeSpeed, s = c(m => m.main.settings.UpgradeChargeRestoration), a = c(m => m.mining.boosts[t]), {
      restorationSpeed: i
    } = c(pn), o = a >= i, r = Math.min(i, a + 1), l = Math.min(i, a), d = s == null ? void 0 : s.levels[r];
    return e.jsxs(yi, {
      boost: t,
      isMax: o,
      price: d.Price,
      children: [e.jsx(ji, {
        src: Mr
      }), e.jsx(bi, {
        reward: n("mining.boosts.rechargingSpeed"),
        price: d.Price,
        level: l,
        isMax: o
      }), e.jsx(wi, {
        isMax: o
      })]
    })
  },
  Ur = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQBAMAAAB8P++eAAAAAXNSR0IArs4c6QAAACRQTFRFJS1A1uLTscetgNhhcMJTiaeNUqhDYYZsLZkvMXI6BY4bRGNNme8YcAAAAMdJREFUeNrt1bENQyEMRdG/grMBXoEVWIEVvAIreAVvEHmFt1z4jiKlAykuUnAbmlM8ISSu0+mfs4bOaJYFmw3wGB3DWgoUdGAwD6BDMmDFuBHiqBnQKoDOzACqp0DVVu9aVbUU6KruKioingU9oKZCTodOtAnLLlSiVMg040zoRKK6B7Pv8UllCbvF9QjfsGdAIw44HZNlwO5ORA+aLTa6l7ejzY2+2lh24ffGBfxs3Hq4M0mBIQNKuAQYVCO/rk14PvvT6bdeUNkQ6l74HqUAAAAASUVORK5CYII=",
  ox = () => {
    const {
      t: n
    } = Ge(), t = ge.energyLimit, s = c(m => m.main.settings.UpgradeChargeCount), a = c(m => m.mining.boosts[t]), {
      chargesCount: i
    } = c(pn), o = a >= i, r = Math.min(i, a + 1), l = Math.min(i, a), d = s == null ? void 0 : s.levels[r];
    return e.jsxs(yi, {
      boost: t,
      isMax: o,
      price: d.Price,
      children: [e.jsx(ji, {
        src: Ur
      }), e.jsx(bi, {
        reward: n("mining.boosts.energyLimit"),
        price: d.Price,
        level: l,
        isMax: o
      }), e.jsx(wi, {
        isMax: o
      })]
    })
  },
  rx = "_container_1e12r_1",
  cx = "_title_container_1e12r_8",
  lx = "_description_1_1e12r_19",
  dx = "_description_2_1e12r_27",
  ux = "_description_container_1e12r_35",
  mx = "_image_container_1e12r_47",
  Ax = "_image_1e12r_47",
  px = "_buttons_container_1e12r_59",
  hx = "_button_1e12r_59",
  gx = "_cancel_button_1e12r_71",
  _x = "_loading_1e12r_1",
  de = {
    container: rx,
    title_container: cx,
    description_1: lx,
    description_2: dx,
    description_container: ux,
    image_container: mx,
    image: Ax,
    buttons_container: px,
    button: hx,
    cancel_button: gx,
    loading: _x
  },
  Ni = ({
    children: n,
    boost: t,
    price: s
  }) => {
    const a = _(),
      {
        t: i
      } = Ge(),
      o = d => {
        a(gi(d))
      },
      l = c(d => d.mining.checkStatuses[t]) === p.pending;
    return e.jsxs("div", {
      className: de.container,
      children: [n, e.jsxs("div", {
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
              key: t,
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
  fx = () => {
    const {
      t: n
    } = Ge(), t = ge.paintReward, s = c(d => d.main.settings.UpgradeRepaint), a = c(d => d.mining.boosts[t]), {
      repaintReward: i
    } = c(pn), o = Math.min(i, a + 1), r = (s == null ? void 0 : s.levels[a]) || {
      Boost: 1
    }, l = s == null ? void 0 : s.levels[o];
    return e.jsxs(Ni, {
      price: l.Price,
      boost: t,
      children: [e.jsxs("div", {
        className: de.title_container,
        children: [n("mining.boosts.paintReward"), " ", e.jsxs("span", {
          children: ["• ", o, " ", n("mining.boosts.level")]
        })]
      }), e.jsx("div", {
        className: de.image_container,
        children: e.jsx("img", {
          alt: "image",
          className: de.image,
          src: Rr
        })
      }), e.jsxs("div", {
        className: de.description_container,
        children: [e.jsx("div", {
          className: de.description_1,
          children: n("mining.boosts.popup.paintRewardDescription")
        }), e.jsxs("div", {
          className: de.description_2,
          children: [n("mining.boosts.popup.reward"), ": ", r.Boost, " ⇢", " ", l.Boost, " PX"]
        })]
      })]
    })
  },
  xx = () => {
    const {
      t: n
    } = Ge(), t = ge.reChargeSpeed, s = c(d => d.main.settings.UpgradeChargeRestoration), a = c(d => d.mining.boosts[t]), {
      restorationSpeed: i
    } = c(pn), o = Math.min(i, a + 1), r = (s == null ? void 0 : s.levels[a]) || {
      ChargeBoost: 6e5
    }, l = s == null ? void 0 : s.levels[o];
    return l.ChargeBoost - (r == null ? void 0 : r.ChargeBoost), e.jsxs(Ni, {
      price: l.Price,
      boost: t,
      children: [e.jsxs("div", {
        className: de.title_container,
        children: [n("mining.boosts.rechargingSpeed"), " ", e.jsxs("span", {
          children: ["• ", o, " ", n("mining.boosts.level")]
        })]
      }), e.jsx("div", {
        className: de.image_container,
        children: e.jsx("img", {
          alt: "image",
          className: de.image,
          src: Mr
        })
      }), e.jsxs("div", {
        className: de.description_container,
        children: [e.jsx("div", {
          className: de.description_1,
          children: n("mining.boosts.popup.rechargingSpeedDescription")
        }), e.jsxs("div", {
          className: de.description_2,
          children: [n("mining.boosts.popup.recharging"), ": ", " ", (r == null ? void 0 : r.ChargeBoost) / 1e3, " ⇢", " ", l.ChargeBoost / 1e3, " ", n("shared.sec")]
        })]
      })]
    })
  },
  vx = () => {
    const {
      t: n
    } = Ge(), t = ge.energyLimit, s = c(d => d.main.settings.UpgradeChargeCount), a = c(d => d.mining.boosts[t]), {
      chargesCount: i
    } = c(pn), o = Math.min(i, a + 1), r = s == null ? void 0 : s.levels[o], l = c(d => d.mining.maxCharges);
    return e.jsxs(Ni, {
      price: r.Price,
      boost: t,
      children: [e.jsxs("div", {
        className: de.title_container,
        children: [n("mining.boosts.energyLimit"), " ", e.jsxs("span", {
          children: ["• ", o, " ", n("mining.boosts.level")]
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
          children: n("mining.boosts.popup.energyLimitDescription")
        }), e.jsxs("div", {
          className: de.description_2,
          children: [n("mining.boosts.popup.energy"), ":  ", l, " ⇢", " ", l + r.Boost]
        })]
      })]
    })
  },
  yx = () => {
    const n = _(),
      t = c(i => i.main.showBoostDetailsPopup),
      s = c(i => i.main.activeBoostDetails),
      a = i => {
        n(gi(i))
      };
    return e.jsxs(zt, {
      show: t,
      setShow: a,
      children: [s === ge.paintReward && e.jsx(fx, {}), s === ge.reChargeSpeed && e.jsx(xx, {}), s === ge.energyLimit && e.jsx(vx, {})]
    })
  },
  wx = () => e.jsxs("div", {
    className: Fs.layout,
    children: [e.jsxs(Hf, {
      title: "Boosters",
      children: [e.jsx(ax, {}), e.jsx(ix, {}), e.jsx(ox, {})]
    }), e.jsx(yx, {}), e.jsx("div", {
      style: {
        height: "20px"
      }
    })]
  }),
  jx = () => {
    const n = c(t => t.mining.activeTab);
    return e.jsxs("div", {
      className: u.info_layout,
      children: [e.jsx(wp, {}), n === "tasks" && e.jsx(yp, {}), n === "pixels" && e.jsx(Of, {}), n === "boosts" && e.jsx(wx, {})]
    })
  },
  bx = () => {
    const n = _(),
      t = c(s => s.mining.activeTab);
    return e.jsxs(mn, {
      children: [e.jsx(Oe, {
        active: t === "tasks",
        setActive: () => n(La("tasks")),
        children: "Tasks"
      }), e.jsx(Oe, {
        active: t === "boosts",
        setActive: () => n(La("boosts")),
        children: "Boosts"
      })]
    })
  },
  Nx = () => e.jsxs(re.Fragment, {
    children: [e.jsx(bx, {}), e.jsx(jx, {})]
  }),
  Cx = "_more_details_6gp7h_1",
  Ix = {
    more_details: Cx
  },
  gn = ({
    children: n,
    ...t
  }) => e.jsx("span", {
    className: Ix.more_details,
    ...t,
    children: e.jsx("span", {
      children: n
    })
  }),
  Px = "_container_11l5m_1",
  Sx = "_divider_11l5m_23",
  Bx = "_row_11l5m_28",
  Tx = "_row_title_11l5m_40",
  Ex = "_row_title_main_11l5m_44",
  kx = "_row_hint_11l5m_49",
  Dx = "_row_value_11l5m_55",
  Rx = "_row_value_main_11l5m_59",
  Mx = "_mining_percent_11l5m_64",
  Ux = "_active_row_11l5m_74",
  Qx = "_button_11l5m_85",
  Li = {
    container: Px,
    divider: Sx,
    row: Bx,
    row_title: Tx,
    row_title_main: Ex,
    row_hint: kx,
    row_value: Dx,
    row_value_main: Rx,
    mining_percent: Mx,
    active_row: Ux,
    button: Qx
  },
  Ox = () => {
    const n = _(),
      {
        t
      } = Ge("translation", {
        keyPrefix: "mining.popup"
      }),
      s = c(r => r.main.showMiningDetailsPopup),
      a = r => {
        n(hr(r))
      },
      i = c(r => r.mining.info),
      o = c(r => r.main.settings);
    return i ? e.jsx(zt, {
      show: s,
      setShow: a,
      children: e.jsxs("div", {
        className: Li.container,
        children: [e.jsx("h2", {
          children: t("title1")
        }), e.jsx("p", {
          children: t("text1")
        }), e.jsx("p", {
          children: t("text2")
        }), e.jsx("h2", {
          children: t("title2")
        }), e.jsx("p", {
          children: t("text3")
        }), e.jsx("p", {
          children: t("text4", {
            repaints: i.repaintsTotal,
            perDay: (i.speedPerSecond * 86400).toFixed(1)
          })
        }), e.jsx("p", {
          children: t("text5", {
            time: o.MaxMiningTime
          })
        }), e.jsx("button", {
          className: Li.button,
          onPointerUp: () => a(!1),
          children: t("button")
        })]
      })
    }) : null
  },
  Fx = () => {
    const n = _(),
      {
        t
      } = Ge("translation", {
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
        children: t("yourBalanceText")
      }), e.jsx(Yu, {}), e.jsxs("div", {
        className: Zn.general_info_container,
        children: [e.jsxs("h1", {
          className: Zn.pixels_amount,
          children: [e.jsx(jm, {}), " PX"]
        }), e.jsxs("div", {
          className: Zn.description_container,
          children: [e.jsxs("span", {
            className: Zn.description,
            children: [t("grayInstruction"), " ", e.jsx("br", {}), e.jsx(gn, {
              onPointerUp: s => {
                s.stopPropagation(), n(hr(!0))
              },
              children: t("howItWorks")
            })]
          }), e.jsx(Ox, {})]
        })]
      }), e.jsx(wm, {}), e.jsx(Nx, {})]
    })
  },
  zx = "_squads_img_container_zthsq_1",
  Gx = "_squads_img_zthsq_1",
  Lx = "_title_container_zthsq_11",
  Hx = "_description_container_zthsq_18",
  qx = "_description_zthsq_18",
  Yx = "_info_layout_zthsq_31",
  Vx = "_info_container_zthsq_42",
  Xx = "_base_item_zthsq_49",
  Wx = "_loading_item_zthsq_60",
  Jx = "_rating_item_zthsq_69",
  Zx = "_info_row_zthsq_82",
  Kx = "_avatar_container_zthsq_87",
  $x = "_avatar_zthsq_87",
  ev = "_position_zthsq_99",
  tv = "_user_squad_position_zthsq_117",
  nv = "_rating_main_info_zthsq_135",
  sv = "_rating_name_zthsq_148",
  av = "_rating_value_zthsq_155",
  iv = "_active_league_text_zthsq_163",
  ov = "_icon_leagueflag_zthsq_167",
  rv = "_join_squad_button_zthsq_174",
  cv = "_join_squad_text_zthsq_188",
  lv = "_user_squad_container_zthsq_206",
  dv = "_squad_avatar_container_zthsq_223",
  uv = "_user_squad_info_zthsq_234",
  mv = "_user_squad_name_zthsq_242",
  Av = "_user_squad_your_squad_text_zthsq_246",
  pv = "_user_squad_users_count_zthsq_251",
  H = {
    squads_img_container: zx,
    squads_img: Gx,
    title_container: Lx,
    description_container: Hx,
    description: qx,
    info_layout: Yx,
    info_container: Vx,
    base_item: Xx,
    loading_item: Wx,
    rating_item: Jx,
    info_row: Zx,
    avatar_container: Kx,
    avatar: $x,
    position: ev,
    user_squad_position: tv,
    rating_main_info: nv,
    rating_name: sv,
    rating_value: av,
    active_league_text: iv,
    icon_leagueflag: ov,
    join_squad_button: rv,
    join_squad_text: cv,
    user_squad_container: lv,
    squad_avatar_container: dv,
    user_squad_info: uv,
    user_squad_name: mv,
    user_squad_your_squad_text: Av,
    user_squad_users_count: pv
  },
  hv = ({
    isPlayers: n
  }) => {
    const t = _(),
      s = c(i => i.ratings.league),
      a = c(zo);
    return e.jsx(mn, {
      children: ["bronze", "silver", "gold", "platinum"].map(i => e.jsxs(Oe, {
        active: s === i,
        setActive: () => {
          s !== i && t(jr(i))
        },
        children: [e.jsxs("span", {
          className: H.active_league_text,
          children: [" ", i, " "]
        }), i === a && n && e.jsx(P, {
          className: `${H.icon_leagueflag}`,
          children: ""
        })]
      }, i))
    })
  },
  gv = "_panel_bpwn4_1",
  _v = "_item_bpwn4_9",
  fv = "_active_bpwn4_20",
  Da = {
    panel: gv,
    item: _v,
    active: fv
  },
  xv = ({
    selectedSection: n,
    setSelectedSection: t
  }) => e.jsx("div", {
    className: Da.panel,
    children: ["Squads", "Painters"].map(s => e.jsx("div", {
      className: `${Da.item} ${n===s?Da.active:""}`,
      onPointerUp: () => {
        t(s)
      },
      children: e.jsx("h1", {
        children: s
      })
    }, s))
  }),
  pa = ({
    children: n
  }) => e.jsx("div", {
    className: H.base_item,
    children: n
  }),
  at = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAIVBMVEUQGSb////09PTk5ebT1NbCw8asr7ODh41jZ29GTFYjKjX3vgf4AAABe0lEQVR42u3X227DMAgGYMzBBt7/gSc17dwlWpNemGrT/121UhRQDMgQAAAAAAAAAAAA/GU5uqpqH0mfkJ3bHfekckPaExnl8bn9wKM8/t6gQs5twyLfP53q2Dz5WQ1WfgA9H/1QXQZbQEu6S9sSoiIp25nva0KSavgtAaUnekvAS3ugHw6FkYBTjdhqIOlbbjUQVES3tt8PBi2eA+KzLSrnwAwovv9b/Akam2e6cbvpVCe0HWhQIZe2I06lXA7xi6W1iS2pnhs/wjt9SHjvHtiQPiKGKT9qgNVGUJ0cyu2AdWRZ8R/UtYNre0l9+UZ8gnsWzV8W7XcqXDKVBz8VXOy7Qnn1pjz49VeOzjODlfEt6BdhCzMIme8+z1Ji1S1M49pdqa+5ijfLi/cEXXMCEtefXLSOnZlr2v9MwOgCW5JAyNUp67ymD2124ZU+tFWDkK2/ZLxqFKa1N2hWbGNTzZ7mUhH/vL7OadRfSCc2x9ICAAAAAAAAAADwli/CSAqaW7oHjgAAAABJRU5ErkJggg==",
  Qr = ({
    position: n,
    userPic: t
  }) => e.jsxs("div", {
    className: H.avatar_container,
    children: [e.jsx("img", {
      alt: "avatar",
      className: H.avatar,
      src: t === "" ? at : t
    }), e.jsx("div", {
      className: H.position,
      children: n
    }), ";"]
  }),
  Or = ({
    name: n
  }) => e.jsx("div", {
    className: H.rating_main_info,
    children: e.jsx("span", {
      className: H.rating_name,
      children: n
    })
  }),
  Fr = ({
    value: n
  }) => n ? e.jsx("span", {
    className: H.rating_value,
    children: an(n)
  }) : null,
  vv = ({
    item: n,
    index: t
  }) => {
    const s = _(),
      a = [H.rating_item];
    return e.jsx(pa, {
      children: e.jsxs("div", {
        className: a.join(" "),
        onPointerUp: () => {
          s(qn({
            dataSource: Ke.userFromRating,
            index: t
          }))
        },
        children: [e.jsx(Qr, {
          position: t + 1,
          userPic: n.userPic
        }), e.jsx(Or, {
          name: n.firstName
        }), e.jsx(Fr, {
          value: n.repaints
        })]
      })
    })
  },
  yv = () => {
    const n = c(s => s.user.user),
      t = c(s => s.ratings.myPlace);
    return n === null ? null : e.jsx(pa, {
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
            src: n.userPic === "" ? at : n.userPic
          }), t !== 0 && t < 1e3 && e.jsx("div", {
            className: H.position,
            children: t
          }), t >= 1e3 && e.jsx("div", {
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
              children: n.firstName
            }), " "]
          }), e.jsxs("div", {
            className: H.user_squad_your_squad_text,
            children: ["You •", " ", e.jsx("span", {
              style: {
                textTransform: "capitalize"
              },
              children: n.league
            })]
          })]
        })]
      })
    })
  },
  wv = () => {
    const n = _(),
      t = c(i => i.ratings.list),
      s = c(i => i.ratings.league),
      a = c(i => i.ratings.status);
    return A.useEffect(() => {
      n(fi.personal({
        league: s
      }))
    }, [s]), A.useEffect(() => () => {
      n(m_())
    }, []), a !== p.fulfilled ? null : e.jsxs(re.Fragment, {
      children: [e.jsx(yv, {}), t.map((i, o) => e.jsx(vv, {
        item: i,
        index: o
      }, o))]
    })
  },
  jv = () => (A.useState("Day"), null),
  bv = ({
    children: n
  }) => e.jsx("div", {
    className: H.info_layout,
    children: e.jsxs("div", {
      className: H.info_container,
      children: [e.jsx(jv, {}), n]
    })
  }),
  Nv = () => {
    const n = te();
    return e.jsx("div", {
      className: H.description_container,
      children: e.jsxs("span", {
        className: H.description,
        children: ["Pixel painting Leaderboard!", e.jsx("br", {}), e.jsx(gn, {
          onPointerUp: () => {
            n.push("/stats")
          },
          children: "Painters stat"
        })]
      })
    })
  },
  Cv = () => {
    const n = c(t => t.user.user);
    return !n || !n.squad || n.squad.id !== null ? null : e.jsx("button", {
      className: H.join_squad_button,
      children: e.jsxs("div", {
        className: H.join_squad_text,
        onPointerUp: () => {
          X(`https://t.me/${Nt}`)
        },
        children: ["Join the squad ", e.jsx(P, {
          children: ""
        })]
      })
    })
  },
  Ot = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAJFBMVEUQGSb////w8PHU1de6vMCoq6+NkJd3e4Juc3pXXWU8QkwlLDf3GVopAAABfklEQVR42u3ZwW7CMBCE4WHXazbO+79vL7QjUdxwYG1Vmu/YRP0tOwkOQERERERERERE5APOzIjMgR1Gd7s9mMfAWoffnnhuypMfWOMMu71kcWKB0W5TbaBcOuc8cgAjw/mngWJ3+5lvtjDCOII1/fa03GfjgQV96/ilP47Fin7ihTQeLO7f/zzuZ/X6d0x0Hq/sN0w1TkFd3w5MHcaroKJ/fZUHT6nqW4Imd4KX9a//uXOVCvq8BKcaZ6mif32PdZ708b7xIXR1clT0Pd6Z3fz4APK7P/YMgH3EjiVgH+ilF+F1H2nrb0NnHzhs/YPI2Qfg6x/FjX0Asf7DaDj7QNqej2PyNzckqNLtnS2ZdVQ5fc+mlNL2bMspdr2YcAC7Xs3Y3/dyyv789dzuC/u0uB9he/vA4Xv74BC29PlF5c4+v6q1HX0arr76i/qm+d/T75M+NyCWqORc//UbQA6AfUpjv1Cf9XE29it1946XzvB26KdTEREREREREZF/7Qv4ZQurWN4R2wAAAABJRU5ErkJggg==",
  Ci = ({
    src: n
  }) => {
    let t = Ot;
    return n !== "" && n !== void 0 && n !== null && (t = n), e.jsx("img", {
      alt: "avatar",
      src: t,
      style: {
        width: "100%",
        height: "100%",
        borderRadius: "50%"
      }
    })
  },
  Iv = () => {
    const n = _(),
      t = c(a => a.ratings.mySquadPlace),
      s = c(a => a.ratings.mySquad);
    return s === null || !s || s.id === null ? null : e.jsxs("div", {
      className: H.user_squad_container,
      onPointerUp: () => {
        n(Aa.getInfo({
          id: s.id
        })), n(qn({
          dataSource: Ke.squadFromData
        }))
      },
      children: [e.jsxs("div", {
        className: H.squad_avatar_container,
        children: [e.jsx(Ci, {
          src: s.logo
        }), e.jsx("div", {
          className: H.user_squad_position,
          children: t
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
          children: an(s.scoredRepaints)
        })
      })]
    })
  },
  Pv = ({
    item: n,
    index: t
  }) => {
    const s = _();
    return e.jsx(pa, {
      children: e.jsxs("div", {
        className: H.rating_item,
        onPointerUp: () => {
          s(Aa.getInfo({
            id: n.id
          })), s(qn({
            dataSource: Ke.squadFromData
          }))
        },
        children: [e.jsx(Qr, {
          position: t + 1,
          userPic: n.logo
        }), e.jsx(Or, {
          name: n.name,
          address: n.slug
        }), e.jsx(Fr, {
          value: n.scoredRepaints
        })]
      })
    })
  },
  Sv = () => {
    const n = c(s => s.ratings.list);
    return c(s => s.ratings.status) !== p.fulfilled ? null : n.map((s, a) => e.jsx(Pv, {
      item: s,
      index: a
    }, a))
  },
  Bv = () => {
    const n = _(),
      t = c(s => s.ratings.league);
    return A.useEffect(() => {
      n(fi.squad({
        league: t
      }))
    }, [t]), e.jsxs(re.Fragment, {
      children: [e.jsx(Cv, {}), e.jsx(Iv, {}), e.jsx(Sv, {})]
    })
  },
  Tv = () => e.jsx(re.Fragment, {
    children: Array.from(Array(10)).map((n, t) => e.jsx(pa, {
      children: e.jsx("div", {
        className: H.loading_item
      })
    }, t))
  }),
  Ev = "_container_d5ybi_1",
  kv = {
    container: Ev
  },
  Dv = () => {
    const n = c(a => a.ratings.league);
    let s = c(_r, vc)[n];
    return s === 0 ? s = "start" : s += " repaints", e.jsxs("span", {
      children: ["from ", s]
    })
  },
  Rv = () => (c(n => n.ratings.league), c(zo), c(_r), e.jsx("div", {
    className: kv.container,
    children: e.jsx(Dv, {})
  })),
  Mv = "_container_d5ybi_1",
  Uv = {
    container: Mv
  },
  Qv = () => {
    const n = c(s => s.ratings.league),
      t = c(fg);
    return e.jsx("div", {
      className: Uv.container,
      children: e.jsxs("span", {
        children: ["from ", (t[n] / 1e3).toFixed(0), "k"]
      })
    })
  },
  Ov = "/assets/icon_squad-_NF17RUb.gif",
  Fv = "/assets/icon_squad_secret-B-fF264Z.gif",
  zv = () => {
    const [n, t] = A.useState(0);
    return e.jsx("div", {
      className: H.squads_img_container,
      children: e.jsx("img", {
        alt: "img",
        className: H.squads_img,
        src: n >= 10 ? Fv : Ov,
        onPointerUp: () => {
          t(s => s + 1)
        }
      })
    })
  },
  Gv = () => {
    const [n, t] = A.useState("Squads"), s = c(a => a.ratings.status);
    return e.jsxs(ue, {
      children: [e.jsx(zv, {}), e.jsx(xv, {
        selectedSection: n,
        setSelectedSection: t
      }), e.jsx(Nv, {}), e.jsx(hv, {
        isPlayers: n === "Painters"
      }), e.jsxs(bv, {
        children: [n === "Painters" && e.jsx(Rv, {}), n === "Squads" && e.jsx(Qv, {}), n === "Squads" && e.jsx(Bv, {}), n === "Painters" && e.jsx(wv, {}), s !== p.fulfilled && e.jsx(Tv, {})]
      })]
    })
  },
  Lv = "_layout_14eqc_1",
  Hv = "_container_14eqc_9",
  qv = "_button_14eqc_13",
  Ra = {
    layout: Lv,
    container: Hv,
    button: qv
  },
  Yv = () => {
    const n = _();
    return c(s => s.canvas.selectedPrice) !== "my_pixels" ? null : e.jsx("div", {
      className: Ra.layout,
      children: e.jsx("div", {
        className: Ra.container,
        children: e.jsx("button", {
          className: Ra.button,
          onPointerUp: () => {
            n(rh(null)), b.mask.destroy()
          },
          children: "Hide My Pixels"
        })
      })
    })
  },
  Vv = () => {
    const n = A.useRef(null),
      t = A.useRef(null);
    A.useEffect(() => () => {
      clearInterval(n.current)
    }, []);
    const s = () => {
      performance.now() - t.current < 200 && b.viewport.zoomIn(), clearInterval(n.current)
    };
    return e.jsx("button", {
      className: S.button,
      onPointerDown: () => {
        t.current = performance.now(), n.current = setInterval(() => {
          b.viewport.zoomIn()
        }, 90)
      },
      onPointerUp: () => {
        performance.now() - t.current < 200 && b.viewport.zoomIn(), clearInterval(n.current)
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
  Xv = () => {
    const n = A.useRef(null),
      t = A.useRef(null),
      s = () => {
        performance.now() - t.current < 200 && b.viewport.zoomOut(), clearInterval(n.current)
      };
    return A.useEffect(() => () => {
      clearInterval(n.current)
    }, []), A.useEffect(() => (window.addEventListener("blur", s), () => {
      window.removeEventListener("blur", s)
    }), []), e.jsx("button", {
      className: S.button,
      onPointerDown: () => {
        t.current = performance.now(), n.current = setInterval(() => {
          b.viewport.zoomOut()
        }, 90)
      },
      onPointerUp: () => {
        performance.now() - t.current < 200 && b.viewport.zoomOut(), clearInterval(n.current)
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
  Wv = () => e.jsxs("div", {
    className: S.buttons_container,
    children: [e.jsx(Vv, {}), e.jsx(Xv, {})]
  }),
  Jv = () => {
    const n = _(),
      t = [S.button],
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
      className: `${t.join(" ")} ${S.shop_button}`,
      onPointerUp: () => {
        n(Nl())
      },
      children: [e.jsx("img", {
        alt: "img",
        className: S.button_image,
        src: s.image_url
      }), e.jsx("div", {
        className: S.limited_good_timer,
        children: cl(i)
      })]
    }) : null
  },
  Zv = () => c(Ye) ? e.jsx("div", {
    className: S.buttons_container,
    children: e.jsx(Jv, {})
  }) : null,
  Kv = "_button_t2u3a_1",
  $v = "_image_t2u3a_14",
  ey = "_airdrop_button_t2u3a_19",
  ty = "_button_text_t2u3a_33",
  Dn = {
    button: Kv,
    image: $v,
    airdrop_button: ey,
    button_text: ty
  },
  ny = () => {
    const n = _(),
      t = c(ra),
      s = c(oa),
      a = c(o => o.main.pixanosRatingStatus);
    let i = 14 + t.top + s.top + _o + 14;
    return e.jsx("button", {
      className: Dn.button,
      style: {
        top: i
      },
      onPointerUp: () => {
        a !== p.pending && n(_g.getPixanosRating()), n(Ps(!0))
      },
      children: e.jsx("img", {
        alt: "img",
        src: dn,
        className: Dn.image
      })
    })
  },
  sy = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAAAXNSR0IArs4c6QAAAglJREFUaIHtWj1OwzAU/oy6UKkXYGCJRKV07AUoByjs3ITOIHEMBnboAQgXYCRShy4gcYFKsCCFoXlt/BzHNiEisv0ttHb8Xvo+vx/8DET0G6IDmcV/vsPBXwrrAwZdCS5eZ43zYpJ1ojcohmp9YZqOBAC85BtpPk2GAgDy9afTC6TJEOU6SZ5OTwW1vucdQ00RpgBUX+B7n+Z1PmFab5LTsD4MhpyjHLck/aXx5c0KAHB+/yF953i8PAIAzK/GkhyuxxXeMaT1oWk6ArCPMjoGuoKOwUr0q10XDkOwrMmMe32sEbMStc+JwbONWiBGuRK2eUSBIzPK+C/1h8MQ1WZikklR7uk6AQCcLdbtNOsYLEF6CMSMqWb0miHJZNwCZCHKD1qUls9u32unN/kXAGB+d7Id0PgOPScWss/wqrz6ioCHDFXNY1Vdcyh5yDKfFN+n2w+MIVd9vPr2jiHrPJQ9vAHY722lljNELQUa3yGQr47SQwDA7OLYSqx3DMUf1He0j3IUrXQgXzHUbNb6go9yJgtR9DH+x8qZcYROT9DVtrS5+Ykmz0fOMPgOB+UffsoUXLXd+uTUWH07gvtMPDk1PdBVH8cWrvq9YyienPYdzlFut1DTLeAM8ijIx127D8FFudjB6zucuw8WXfBG39spVmuz2AWvQ2d3fRxuksS7Pk2It7EiItrhB7p6E/aIRp2bAAAAAElFTkSuQmCC",
  ay = () => {
    const n = te();
    return e.jsxs("button", {
      className: Dn.airdrop_button,
      onPointerUp: () => {
        n.push("/airdrop")
      },
      children: [e.jsx("img", {
        alt: "img",
        src: sy,
        className: Dn.image
      }), e.jsx("div", {
        className: Dn.button_text,
        children: "Airdrop"
      })]
    })
  },
  iy = () => e.jsx("div", {
    className: S.layout,
    children: e.jsxs("div", {
      className: S.container,
      children: [e.jsxs("div", {
        className: S.buttons_container,
        children: [e.jsx(ay, {}), e.jsx(ny, {})]
      }), e.jsx(Wv, {}), e.jsx(Zv, {})]
    })
  }),
  oy = () => null,
  ry = () => (_(), null),
  cy = "_layout_r9qhp_1",
  ly = "_container_r9qhp_16",
  dy = "_item_r9qhp_21",
  uy = "_move_r9qhp_1",
  my = "_image_r9qhp_36",
  Zs = {
    layout: cy,
    container: ly,
    item: dy,
    move: uy,
    image: my
  },
  zr = "/assets/gold_pixel-CRD2C_ap.gif",
  Ay = {
    [wt.success]: "+1",
    [wt.fail]: "-1",
    [wt.neutral]: "0"
  },
  py = ({
    item: n
  }) => {
    const t = _();
    return A.useEffect(() => {
      const s = setTimeout(() => {
        t(Ag(n.id))
      }, 1e3);
      return () => {
        clearTimeout(s)
      }
    }, []), e.jsxs("div", {
      className: Zs.item,
      style: {
        left: n.flyCoords.x,
        top: n.flyCoords.y,
        fontSize: n.repaintRewardType === wt.success ? 18 : 14
      },
      children: [Ay[n.repaintRewardType], " ", e.jsx("img", {
        alt: "img",
        className: Zs.image,
        src: zr
      })]
    })
  },
  hy = () => {
    const n = c(t => t.main.flyingRewards);
    return e.jsx("div", {
      className: Zs.layout,
      children: e.jsx("div", {
        className: Zs.container,
        children: n.map(t => e.jsx(py, {
          item: t
        }, t.id))
      })
    })
  },
  gy = "_layout_1v16g_1",
  _y = "_container_1v16g_5",
  fy = "_close_button_1v16g_14",
  xy = "_title_container_1v16g_22",
  vy = "_image_container_1v16g_28",
  yy = "_image_1v16g_28",
  wy = "_first_image_1v16g_45",
  jy = "_second_image_1v16g_50",
  by = "_text_container_1v16g_55",
  Ny = "_button_container_1v16g_60",
  Cy = "_button_1v16g_60",
  Re = {
    layout: gy,
    container: _y,
    close_button: fy,
    title_container: xy,
    image_container: vy,
    image: yy,
    first_image: wy,
    second_image: jy,
    text_container: by,
    button_container: Ny,
    button: Cy
  },
  Iy = "_layout_1df7o_1",
  Py = "_container_1df7o_14",
  Sy = "_move_in_1df7o_1",
  Hi = {
    layout: Iy,
    container: Py,
    move_in: Sy
  },
  Ve = ({
    children: n,
    show: t,
    onPointerUp: s = () => {},
    backgroundColor: a
  }) => {
    const [i, o] = A.useState(!1), [r, l] = Gs(() => ({
      from: {
        opacity: 0
      },
      config: {
        duration: 300,
        easing: Ls.easeOutCubic
      }
    }));
    return A.useEffect(() => {
      t ? (o(!0), l.start({
        opacity: 1
      })) : t || l.start({
        opacity: 0,
        onResolve: () => o(!1)
      })
    }, [t]), i ? e.jsx(Hs.div, {
      className: Hi.layout,
      style: {
        ...r,
        backgroundColor: a
      },
      onPointerUp: s,
      children: e.jsx("div", {
        className: Hi.container,
        children: n
      })
    }) : null
  },
  By = () => {
    const n = _(),
      t = c(o => o.main.referrerSquadId),
      [s, a] = A.useState(null),
      i = c(o => o.user.user);
    return A.useEffect(() => {
      if (t) try {
        (async () => {
          const r = await W.getSquadInfo({
            id: t
          });
          r.data.squad && r.data.squad.id !== null && a(r.data.squad)
        })()
      } catch {}
    }, [t]), e.jsx(Ve, {
      show: t !== null,
      onPointerUp: () => {
        n(Va(null))
      },
      children: e.jsx("div", {
        className: Re.layout,
        onPointerUp: o => {
          o.stopPropagation()
        },
        children: e.jsxs("div", {
          className: Re.container,
          children: [e.jsx("div", {
            className: Re.close_button,
            onPointerUp: () => {
              n(Va(null))
            },
            children: e.jsx(P, {
              size: 26,
              children: ""
            })
          }), e.jsx("div", {
            className: Re.title_container,
            children: e.jsx("span", {
              children: "Friend's squad invitation"
            })
          }), e.jsxs("div", {
            className: Re.image_container,
            children: [e.jsx("img", {
              alt: "img",
              className: `${Re.image} ${Re.first_image}`,
              src: s === null ? Ot : s.logo
            }), e.jsx("img", {
              alt: "img",
              className: `${Re.image} ${Re.second_image}`,
              src: i === null || i.userPic === "" ? at : i.userPic
            })]
          }), e.jsx("div", {
            className: Re.text_container,
            children: e.jsxs("span", {
              children: ["Your friend is a part of the", " ", s === null ? "" : `"${s.name}"`, " squad. Ready to team up?"]
            })
          }), e.jsx("div", {
            className: Re.button_container,
            children: e.jsxs("button", {
              className: Re.button,
              onPointerUp: () => {
                s !== null && X(`https://t.me/${Nt}?startapp=${btoa(`id=${s.id}`)}`)
              },
              children: [s !== null && `Join ${s.name} squad`, s === null && "Loading squad info..."]
            })
          })]
        })
      })
    })
  },
  Ty = "_layout_srn55_1",
  Ey = "_container_srn55_12",
  ky = "_buttons_container_srn55_18",
  Ma = {
    layout: Ty,
    container: Ey,
    buttons_container: ky
  },
  Dy = "_container_srbwq_1",
  Ry = {
    container: Dy
  },
  My = ({
    show: n,
    setShow: t
  }) => n ? ze.createPortal(e.jsx("div", {
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
      t(!1)
    }
  }), document.body) : null,
  Uy = 1,
  qi = 0,
  Yi = 100,
  Qy = ({
    rtl: n = !0
  }) => {
    const t = _(),
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
      children: [e.jsx(My, {
        show: a,
        setShow: i
      }), e.jsx(Mt.Range, {
        direction: Mt.Direction.Up,
        values: s,
        step: Uy,
        min: qi,
        max: Yi,
        onChange: o => {
          t(j_(o)), b.mainImage.worldTemplate.setOpacity(Number(o[0])), b.mainImage.tournamentTemplates.setOpacity(Number(o[0]))
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
              background: Mt.getTrackBackground({
                values: s,
                colors: ["var(--font-secondary-color)", "var(--font-secondary-color)"],
                min: qi,
                max: Yi,
                direction: Mt.Direction.Up,
                rtl: n
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
  Oy = () => {
    const n = c(s => s.tournament.activeTournamentTemplate),
      t = c(s => s.template.active) === De.world;
    return n === null && !t ? null : e.jsx("div", {
      className: Ry.container,
      children: e.jsx(Qy, {})
    })
  },
  Fy = "_button_xsy81_2",
  zy = "_image_xsy81_19",
  Gy = "_enabled_xsy81_25",
  Ly = "_gray_xsy81_29",
  Ua = {
    button: Fy,
    image: zy,
    enabled: Gy,
    gray: Ly
  },
  Hy = () => {
    const n = _(),
      t = c(r => r.template.worldTemplate),
      s = c(r => r.template.active) === De.world,
      a = c(An),
      i = c(r => r.tournament.periodsStatus),
      o = [Ua.button];
    return s && o.push(Ua.enabled), t === null || a || i !== p.fulfilled ? null : e.jsx("button", {
      className: o.join(" "),
      onPointerUp: () => {
        n(s ? vi() : w_(De.world))
      },
      children: e.jsx("img", {
        alt: "img",
        className: Ua.image,
        src: t.url
      })
    })
  },
  qy = () => e.jsx(re.Fragment, {
    children: e.jsx("div", {
      className: Ma.layout,
      children: e.jsx("div", {
        className: Ma.container,
        children: e.jsxs("div", {
          className: Ma.buttons_container,
          children: [e.jsx(Hy, {}), e.jsx(Oy, {})]
        })
      })
    })
  }),
  Yy = "_layout_swx97_1",
  Vy = {
    layout: Yy
  },
  Xy = "_layout_1a5xo_1",
  Wy = "_container_1a5xo_5",
  Vi = {
    layout: Xy,
    container: Wy
  },
  Jy = () => {
    const n = _(),
      t = c(i => i.main.fastMode);
    if (!c(i => i.canvas.coords)) return null;
    const a = [S.button, S.fast_type_button, S.shop_button];
    return t && a.push(S.fast_mode_button_enabled), e.jsx("button", {
      className: a.join(" "),
      onPointerUp: () => {
        n(t ? da() : Ar())
      },
      children: e.jsx("img", {
        alt: "img",
        className: S.button_image,
        src: So
      })
    })
  },
  Zy = () => {
    const n = _(),
      t = c(l => l.canvas.coords),
      s = c(l => l.main.fastMode),
      a = c(l => l.main.currentFastType),
      i = c(l => l.shop.available);
    if (!t || !(i[4] > 0)) return null;
    const r = [S.button, S.shop_button, S.fast_type_button];
    return e.jsxs("button", {
      className: r.join(" "),
      onPointerUp: () => {
        if (s || a) return;
        const l = b.mainImage.getPixelColor({
          coords: t
        });
        n(ri(l))
      },
      children: [e.jsx("div", {
        className: S.disabled_button_cover,
        style: {
          opacity: s || a ? .7 : 0
        }
      }), e.jsx("img", {
        alt: "img",
        className: S.button_image,
        src: Po
      })]
    })
  },
  Ky = () => {
    const n = _(),
      t = [S.button, S.shop_button, S.fast_type_button],
      s = [S.button_image];
    return e.jsx("button", {
      className: t.join(" "),
      style: {
        borderRadius: "0 var(--border-radius) var(--border-radius) 0"
      },
      onPointerUp: () => {
        n(it(13)), n(ot())
      },
      children: e.jsx("img", {
        alt: "img",
        className: s.join(" "),
        src: dn
      })
    })
  },
  $y = () => e.jsx("div", {
    className: Vi.layout,
    children: e.jsxs("div", {
      className: Vi.container + " " + S.container__bottom,
      children: [e.jsx(J_, {}), e.jsx(V_, {}), e.jsx(yf, {}), e.jsx(c_, {}), e.jsx(Jy, {}), e.jsx(Zy, {}), e.jsx(Ky, {})]
    })
  }),
  ew = ({
    open: n,
    setOpen: t,
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
        o.stopPropagation(), n && s === 1 ? t(!1) : n && s === 2 ? a(1) : (a(1), t(!0))
      }
    })
  },
  tw = ({
    open: n,
    setOpen: t,
    active: s,
    setActive: a
  }) => {
    const i = _(),
      o = [le.info_button];
    return n && s === 2 && o.push(le.info_button_active), e.jsx("div", {
      className: o.join(" "),
      onPointerUp: r => {
        r.stopPropagation(), i(qn({
          dataSource: Ke.userFromPixelInfo
        }))
      },
      children: "info"
    })
  },
  nw = () => {
    const [n, t] = A.useState(!0), [s, a] = A.useState(!1), i = c(r => r.canvas.coords), o = A.useRef(null);
    return A.useEffect(() => () => {
      o.current !== null && (clearTimeout(o.current), o.current = null)
    }, []), e.jsxs("div", {
      className: le.pixel_info_container,
      children: [n && e.jsxs("div", {
        className: le.pixel_info_text,
        onPointerUp: async r => {
          var d, m;
          r.stopPropagation(), await Ln(`${Pt}?startapp=x${i.x}_y${i.y}`) ? (m = (d = window.Telegram.WebApp) == null ? void 0 : d.HapticFeedback) == null || m.notificationOccurred("success") : a(!0), t(!1), o.current = setTimeout(() => {
            a(!1), t(!0), o.current = null
          }, 4e3)
        },
        children: [`${i.x}, ${i.y}`, " ", e.jsx(P, {
          size: 14,
          children: ""
        })]
      }), !n && e.jsx("div", {
        className: le.pixel_info_text,
        onPointerUp: async r => {
          r.stopPropagation(), a(!1), t(!0)
        },
        children: s ? "Failure" : "Pixel link copied!"
      })]
    })
  },
  sw = "_expandable_panel_layout_1v9vd_1",
  aw = "_expandable_panel_1v9vd_1",
  iw = "_divider_1v9vd_16",
  ow = "_divider_spacer_1v9vd_24",
  rw = "_divider_pointer_1v9vd_28",
  Rn = {
    expandable_panel_layout: sw,
    expandable_panel: aw,
    divider: iw,
    divider_spacer: ow,
    divider_pointer: rw
  },
  cw = ({
    active: n
  }) => {
    const t = n === 1 ? "38px" : "54px",
      s = n === 1 ? 0 : 1;
    return e.jsxs("div", {
      className: Rn.divider,
      children: [e.jsx("div", {
        className: Rn.divider_spacer,
        style: {
          flexGrow: s
        }
      }), e.jsx("div", {
        className: Rn.divider_pointer,
        style: {
          width: t
        }
      })]
    })
  },
  lw = n => {
    const t = A.useRef(),
      s = A.useRef();
    return A.useEffect(() => {
      t.current = n
    }), A.useEffect(() => {
      const a = i => {
        s.current && t.current && !s.current.contains(i.target) && t.current(i)
      };
      return window.addEventListener("pointerup", a), () => {
        window.removeEventListener("pointerup", a)
      }
    }, []), s
  },
  dw = "_container_1vu8i_1",
  uw = "_owner_1vu8i_10",
  mw = "_id_1vu8i_14",
  Aw = "_date_1vu8i_19",
  pw = "_avatar_container_1vu8i_24",
  hw = "_avatar_1vu8i_24",
  gw = "_squad_avatar_container_1vu8i_36",
  _w = "_text_container_1vu8i_48",
  fw = "_dot_1vu8i_54",
  xw = "_user_name_1vu8i_59",
  vw = "_squad_name_1vu8i_64",
  Ae = {
    container: dw,
    owner: uw,
    id: mw,
    date: Aw,
    avatar_container: pw,
    avatar: hw,
    squad_avatar_container: gw,
    text_container: _w,
    dot: fw,
    user_name: xw,
    squad_name: vw
  },
  yw = "_skeleton_k7kmi_1",
  ww = "_loading_k7kmi_1",
  jw = {
    skeleton: yw,
    loading: ww
  },
  et = ({
    children: n,
    show: t
  }) => t ? e.jsx("div", {
    className: jw.skeleton,
    children: e.jsx("div", {
      style: {
        opacity: 0
      },
      children: n
    })
  }) : null,
  bw = () => {
    const n = c(o => o.canvas.pixelInfo),
      t = c(o => o.canvas.getPixelInfoFetchStatus),
      s = n !== null && t === p.fulfilled,
      a = () => He(new Date(n.pixel.dateObtained));
    if (!s) return e.jsx(et, {
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
  _n = ({
    address: n,
    limit: t = 0,
    display: s = null
  }) => {
    const a = c(_i);
    if (!n || n === "") return e.jsx("span", {
      children: "Anon"
    });
    let i = al(s === null ? n : s);
    return t > 0 && (i = Gn(i, t)), e.jsx("span", {
      className: Uo.link,
      onPointerUp: o => {
        o.stopPropagation(), a ? X(`https://t.me/${Pi(n)}`) : St(`https://t.me/${Pi(n)}`)
      },
      children: i
    })
  },
  Nw = () => {
    const n = c(r => r.canvas.pixelInfo),
      t = c(r => r.canvas.getPixelInfoFetchStatus),
      s = n !== null && t === p.fulfilled;
    if (!s) return e.jsx(et, {
      show: !s,
      children: e.jsx("div", {
        className: Ae.text_container,
        children: e.jsx("span", {
          className: Ae.user_name,
          children: "No name • @notpixel"
        })
      })
    });
    const i = Gn(n.owner.firstName || "No name");
    return (() => {
      const r = n.owner.userName && n.owner.userName !== "";
      return {
        address: r ? n.owner.userName : "Anon",
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
  Cw = () => {
    var i, o;
    const n = c(r => r.canvas.pixelInfo),
      t = c(r => r.canvas.getPixelInfoFetchStatus),
      s = n !== null && t === p.fulfilled;
    return s ? ((o = (i = n == null ? void 0 : n.owner) == null ? void 0 : i.squad) == null ? void 0 : o.name) && n.owner.squad.name !== null ? e.jsxs("div", {
      className: Ae.text_container,
      children: [e.jsx("span", {
        className: Ae.squad_name,
        children: n.owner.squad.name
      }), e.jsx("span", {
        className: Ae.dot,
        children: "•"
      }), e.jsx(_n, {
        address: `${Nt}?startapp=${btoa(`id=${n.owner.squad.id}`)}`,
        display: n.owner.squad.slug,
        limit: 18
      })]
    }) : e.jsx("div", {
      className: Ae.text_container,
      children: e.jsx("span", {
        className: Ae.squad_name,
        children: "No squad"
      })
    }) : e.jsx(et, {
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
  Iw = () => {
    var i, o;
    const n = c(r => r.canvas.pixelInfo),
      t = c(r => r.canvas.getPixelInfoFetchStatus),
      s = n !== null && t === p.fulfilled;
    let a = at;
    return s && n.owner.userPic && n.owner.userPic !== "" && (a = n.owner.userPic), e.jsxs("div", {
      className: Ae.avatar_container,
      children: [e.jsx("img", {
        alt: "avatar",
        className: Ae.avatar,
        src: a
      }), e.jsx("div", {
        className: Ae.squad_avatar_container,
        children: e.jsx(Ci, {
          src: ((o = (i = n == null ? void 0 : n.owner) == null ? void 0 : i.squad) == null ? void 0 : o.logo) || ""
        })
      })]
    })
  },
  Pw = () => {
    const n = _(),
      t = c(i => i.canvas.pixelInfo),
      s = c(i => i.canvas.getPixelInfoFetchStatus),
      a = t !== null && s === p.fulfilled;
    return e.jsxs("div", {
      children: [a && e.jsxs("span", {
        className: Ae.owner,
        children: [" ", "Owner "]
      }), a && t.owner.id !== 0 && e.jsxs("span", {
        className: Ae.id,
        onPointerUp: async i => {
          i.preventDefault(), i.stopPropagation();
          try {
            await Ln(`${t.owner.id}`), await n(z({
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
        children: [" ", t.owner.id]
      }), e.jsx(et, {
        show: !a,
        children: e.jsx("span", {
          className: Ae.owner,
          children: "Owner"
        })
      })]
    })
  },
  Sw = () => e.jsxs("div", {
    className: Ae.container,
    children: [e.jsx(Pw, {}), e.jsx(bw, {}), e.jsx(Iw, {}), e.jsx(Nw, {}), e.jsx(Cw, {})]
  }),
  Bw = "_category_text_epppt_1",
  Tw = "_latest_used_container_epppt_8",
  Ew = "_color_line_epppt_15",
  kw = "_color_item_epppt_22",
  Dw = "_pipette_container_epppt_30",
  Rw = "_child_scale_epppt_48",
  Gr = {
    category_text: Bw,
    latest_used_container: Tw,
    color_line: Ew,
    color_item: kw,
    pipette_container: Dw,
    child_scale: Rw
  },
  Mw = ({
    color: n
  }) => {
    const [t, s] = A.useState(!1), a = A.useRef(null), i = _();
    return e.jsx("div", {
      style: {
        backgroundColor: n,
        transform: t ? "scale(1.2)" : ""
      },
      className: Gr.color_item,
      onPointerUp: () => {
        var o, r;
        s(!0), a.current !== null && clearTimeout(a.current), a.current = setTimeout(() => {
          s(!1)
        }, 200), i(ri(n)), (r = (o = window.Telegram.WebApp) == null ? void 0 : o.HapticFeedback) == null || r.notificationOccurred("success")
      }
    })
  },
  Lr = ({
    colors: n
  }) => e.jsx("div", {
    className: Gr.color_line,
    children: n.map((t, s) => e.jsx(Mw, {
      color: t
    }, `${t}_${s}`))
  }),
  Uw = "_unlock_button_fc8qr_1",
  Qw = "_stars_text_fc8qr_13",
  Xi = {
    unlock_button: Uw,
    stars_text: Qw
  },
  Ow = () => e.jsxs("div", {
    className: Xi.unlock_button,
    children: [e.jsx("span", {
      children: "Unlock all colors for"
    }), e.jsxs("span", {
      className: Xi.stars_text,
      children: [e.jsx(un, {}), e.jsx("span", {
        children: "5000"
      })]
    })]
  }),
  Fw = () => {
    c(t => t.color.latest);
    const n = c(t => t.color.basic);
    return e.jsxs(re.Fragment, {
      children: [e.jsx(Lr, {
        colors: n
      }), e.jsx(Ow, {})]
    })
  },
  zw = ({
    getData: n
  }) => {
    const t = _(),
      s = c(i => i.canvas.coords),
      a = c(i => i.main.showUserAndSquadPopup);
    return A.useEffect(() => {
      if (s !== null && (n || a)) {
        const i = ht(s);
        t(la.getPixelInfo({
          id: i
        }))
      }
    }, [s, n, a, t]), null
  },
  Gw = ({
    open: n,
    setOpen: t,
    active: s
  }) => {
    const a = lw(() => {
        s !== 2 && t(!1)
      }),
      [i, o] = Gs(() => ({
        from: {
          height: 0,
          opacity: 0
        },
        config: {
          duration: 400,
          easing: Ls.easeOutCubic
        }
      })),
      r = A.useRef(null);
    return A.useEffect(() => {
      if (n !== null && r.current !== null) {
        const l = n ? r.current.offsetHeight : 0;
        o.start({
          height: n ? l : 0,
          opacity: n ? 1 : 0
        })
      }
    }, [n, s, r, o]), e.jsxs(Hs.div, {
      ref: a,
      className: Rn.expandable_panel_layout,
      style: {
        ...i
      },
      children: [e.jsx(zw, {
        getData: s === 2 && n
      }), e.jsxs("div", {
        ref: r,
        className: Rn.expandable_panel,
        children: [e.jsx(cw, {
          active: s
        }), s === 1 && e.jsx(Fw, {}), s === 2 && e.jsx(Sw, {})]
      })]
    })
  },
  Lw = () => c(Ye) ? null : e.jsxs("button", {
    className: le.button,
    onPointerUp: () => {
      X("https://t.me/notpixel")
    },
    children: [e.jsx("img", {
      alt: "tg_logo",
      className: le.tg_logo,
      src: Hn
    }), e.jsx("span", {
      className: le.button_text,
      children: "Go to app for paint"
    })]
  }),
  Hw = () => e.jsx(G_, {}),
  qw = () => c(Ye) ? e.jsx(Hw, {}) : e.jsx(Lw, {}),
  Yw = () => {
    const n = c(s => s.main.fastMode),
      t = c(s => s.main.currentFastType);
    return e.jsx("div", {
      className: le.fast_mode_blocker,
      style: {
        pointerEvents: n || t ? "all" : "none",
        opacity: n || t ? .7 : 0
      }
    })
  },
  Vw = () => {
    const [n, t] = A.useState(!1), [s, a] = A.useState(1), i = c(r => r.main.fastMode), o = c(r => r.main.currentFastType);
    return A.useEffect(() => {
      (i || o) && t(!1)
    }, [i, o]), e.jsx("div", {
      className: le.order_panel,
      onPointerUp: r => {
        r.stopPropagation()
      },
      children: e.jsxs("div", {
        className: le.content,
        children: [e.jsx(Yw, {}), e.jsxs("div", {
          className: le.info,
          children: [e.jsx(ew, {
            open: n,
            setOpen: t,
            active: s,
            setActive: a
          }), e.jsx(nw, {}), e.jsx(tw, {
            open: n,
            setOpen: t,
            active: s,
            setActive: a
          })]
        }), e.jsx(Gw, {
          open: n,
          setOpen: t,
          active: s
        }), e.jsx(qw, {})]
      })
    })
  },
  Xw = () => e.jsx(re.Fragment, {
    children: e.jsx(Vw, {})
  }),
  Ww = "_panel_1urz2_1",
  Jw = "_content_1urz2_16",
  Wi = {
    panel: Ww,
    content: Jw
  },
  Ji = ({
    text: n
  }) => e.jsx("div", {
    className: Wi.panel,
    children: e.jsx("div", {
      className: Wi.content,
      children: n
    })
  }),
  Zw = () => {
    const n = c(a => a.canvas.coords),
      t = c(rt),
      s = c(Mo);
    return n === null ? e.jsx(Ji, {
      text: "A-yo! Zoom, tap, paint"
    }) : (s !== "mobile" || t === "unknown") && !pt.isDev ? e.jsx(Ji, {
      text: "Use telegram app on phone for painting"
    }) : e.jsxs("div", {
      className: Vy.layout,
      children: [e.jsx($y, {}), e.jsx(Xw, {})]
    })
  },
  Kw = () => e.jsxs(e.Fragment, {
    children: [e.jsx(Yv, {}), e.jsx(qy, {}), e.jsx(iy, {}), e.jsx(Zw, {}), e.jsx(hy, {}), e.jsx(By, {}), e.jsx(ry, {}), e.jsx(oy, {})]
  }),
  $w = "_page_title_13ybj_1",
  ej = "_container_13ybj_9",
  tj = "_item_13ybj_13",
  nj = "_active_13ybj_18",
  sj = "_info_container_13ybj_34",
  aj = "_dot_13ybj_40",
  ij = "_title_text_13ybj_46",
  oj = "_capitalize_13ybj_50",
  rj = "_hint_text_13ybj_54",
  cj = "_date_text_13ybj_61",
  lj = "_value_container_13ybj_66",
  dj = "_value_text_13ybj_74",
  uj = "_positive_color_13ybj_78",
  mj = "_negative_color_13ybj_85",
  Aj = "_last_text_13ybj_92",
  w = {
    page_title: $w,
    container: ej,
    item: tj,
    active: nj,
    info_container: sj,
    dot: aj,
    title_text: ij,
    capitalize: oj,
    hint_text: rj,
    date_text: cj,
    value_container: lj,
    value_text: dj,
    positive_color: uj,
    negative_color: mj,
    last_text: Aj
  },
  pj = ({
    item: n
  }) => {
    const t = te(),
      s = Js(n.details.pixel),
      a = _();
    return e.jsxs("div", {
      className: `${w.item} ${w.active}`,
      onPointerUp: () => {
        t.push("/"), b.viewport.viewport.animate({
          scale: 25,
          time: 400,
          position: s
        }), b.mainImage.selectedPixel.draw(s), a(Ft(s)), t.push("/")
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
            children: He(new Date(n.dateTime))
          })
        })]
      }), e.jsx("div", {
        className: w.value_container,
        children: e.jsxs("span", {
          className: `${w.value_text} ${w.positive_color}`,
          children: ["+", new Intl.NumberFormat("fr", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          }).format(Math.abs(n.balanceChange)).replace(",", ".")]
        })
      })]
    })
  },
  hj = ({
    item: n
  }) => {
    const t = te(),
      s = {
        x: n.details.x,
        y: n.details.y
      },
      a = _();
    return e.jsxs("div", {
      className: `${w.item} ${w.active}`,
      onPointerUp: () => {
        t.push("/"), b.viewport.viewport.animate({
          scale: 25,
          time: 400,
          position: s
        }), b.mainImage.selectedPixel.draw(s), a(Ft(s)), t.push("/")
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
          }), e.jsx(_n, {
            address: n.details.buyer
          })]
        }), e.jsx("div", {
          className: w.date_text,
          children: e.jsx("span", {
            children: He(new Date(n.dateTime))
          })
        })]
      }), e.jsx("div", {
        className: w.value_container,
        children: e.jsxs("span", {
          className: `${w.value_text} ${w.positive_color}`,
          children: ["+", new Intl.NumberFormat("fr", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          }).format(n.balanceChange).replace(",", ".")]
        })
      })]
    })
  },
  gj = ({
    item: n
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
          children: He(new Date(n.dateTime))
        })
      })]
    }), e.jsx("div", {
      className: w.value_container,
      children: e.jsxs("span", {
        className: `${w.value_text} ${w.positive_color}`,
        children: ["+", n.balanceChange.toFixed(2)]
      })
    })]
  }),
  _j = ({
    item: n
  }) => e.jsxs("div", {
    className: w.item,
    children: [e.jsxs("div", {
      className: w.info_container,
      children: [e.jsxs("div", {
        children: [e.jsx("span", {
          className: w.title_text,
          children: n.details.type
        }), e.jsx("span", {
          className: w.hint_text,
          children: "Boost"
        })]
      }), e.jsx("div", {
        className: w.date_text,
        children: e.jsx("span", {
          children: He(new Date(n.dateTime))
        })
      })]
    }), e.jsx("div", {
      className: w.value_container,
      children: e.jsx("span", {
        className: `${w.value_text} ${w.negative_color}`,
        children: n.balanceChange
      })
    })]
  }),
  fj = ({
    item: n
  }) => e.jsxs("div", {
    className: w.item,
    children: [e.jsxs("div", {
      className: w.info_container,
      children: [e.jsxs("div", {
        children: [e.jsx("span", {
          className: `${w.title_text} ${w.capitalize}`,
          children: `${n.details.from} > ${n.details.to}`
        }), e.jsx("span", {
          className: w.hint_text,
          children: "League"
        })]
      }), e.jsx("div", {
        className: w.date_text,
        children: e.jsx("span", {
          children: He(new Date(n.dateTime))
        })
      })]
    }), e.jsx("div", {
      className: w.value_container
    })]
  }),
  xj = ({
    item: n
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
        }), e.jsx(_n, {
          address: n.details.name
        })]
      }), e.jsx("div", {
        className: w.date_text,
        children: e.jsx("span", {
          children: He(new Date(n.dateTime))
        })
      })]
    }), e.jsx("div", {
      className: w.value_container,
      children: e.jsxs("span", {
        className: `${w.value_text} ${w.positive_color}`,
        children: ["+", n.balanceChange]
      })
    })]
  }),
  vj = ({
    item: n
  }) => e.jsxs("div", {
    className: w.item,
    children: [e.jsxs("div", {
      className: w.info_container,
      children: [e.jsxs("div", {
        children: [e.jsx("span", {
          className: w.title_text,
          children: `${n.details.type} ${n.details.round_id?"for round №"+n.details.round_id:""}`
        }), e.jsx("span", {
          className: w.hint_text,
          children: "Special"
        })]
      }), e.jsx("div", {
        className: w.date_text,
        children: e.jsx("span", {
          children: He(new Date(n.dateTime))
        })
      })]
    }), e.jsx("div", {
      className: w.value_container,
      children: e.jsxs("span", {
        className: `${w.value_text} ${n.balanceChange>=0?w.positive_color:w.negative_color}`,
        children: [n.balanceChange >= 0 ? "+" : "", n.balanceChange]
      })
    })]
  }),
  yj = ({
    item: n
  }) => e.jsxs("div", {
    className: w.item,
    children: [e.jsxs("div", {
      className: w.info_container,
      children: [e.jsxs("div", {
        children: [e.jsx("span", {
          className: `${w.title_text} ${w.capitalize}`,
          children: `${n.details.type}`
        }), e.jsxs("span", {
          className: w.hint_text,
          children: [n.details.quantity, " pc."]
        })]
      }), e.jsx("div", {
        className: w.date_text,
        children: e.jsx("span", {
          children: He(new Date(n.dateTime))
        })
      })]
    }), e.jsxs("div", {
      className: w.value_container,
      children: ["-", n.details.price, " ", e.jsx(un, {
        fontSize: 14
      })]
    })]
  }),
  wj = ({
    item: n
  }) => e.jsxs("div", {
    className: w.item,
    children: [e.jsxs("div", {
      className: w.info_container,
      children: [e.jsxs("div", {
        children: [e.jsx("span", {
          className: w.title_text,
          children: n.details.type
        }), e.jsx("span", {
          className: w.hint_text,
          children: "Task"
        })]
      }), e.jsx("div", {
        className: w.date_text,
        children: e.jsx("span", {
          children: He(new Date(n.dateTime))
        })
      })]
    }), e.jsx("div", {
      className: w.value_container,
      children: e.jsxs("span", {
        className: `${w.value_text} ${w.positive_color}`,
        children: ["+", n.balanceChange]
      })
    })]
  }),
  jj = ({
    item: n
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
          children: n.details.type
        })]
      }), e.jsx("div", {
        className: w.date_text,
        children: e.jsx("span", {
          children: He(new Date(n.dateTime))
        })
      })]
    }), e.jsx("div", {
      className: w.value_container,
      children: e.jsxs("span", {
        className: `${w.value_text} ${w.positive_color}`,
        children: ["+", n.balanceChange.toFixed(2)]
      })
    })]
  }),
  bj = ({
    item: n
  }) => n.action === "buy pixel" ? e.jsx(pj, {
    item: n
  }) : n.action === "sell pixel" ? e.jsx(hj, {
    item: n
  }) : n.action === "claim" ? e.jsx(gj, {
    item: n
  }) : n.action === "get boost" ? e.jsx(_j, {
    item: n
  }) : n.action === "league transfer" ? e.jsx(fj, {
    item: n
  }) : n.action === "referral" ? e.jsx(xj, {
    item: n
  }) : n.action === "special" ? e.jsx(vj, {
    item: n
  }) : n.action === "purchase" ? e.jsx(yj, {
    item: n
  }) : n.action === "complete task" ? e.jsx(wj, {
    item: n
  }) : n.action === "referrer reward" ? e.jsx(jj, {
    item: n
  }) : (console.log("unknown action: ", n.action), null),
  Nj = () => {
    const n = _(),
      t = c(a => a.history.list),
      s = c(a => a.history.status);
    return A.useEffect(() => {
      n(xi.get({
        offset: 0,
        limit: 50
      }))
    }, []), e.jsxs("div", {
      className: w.container,
      children: [t.map((a, i) => e.jsx(bj, {
        item: a
      }, i)), s === p.fulfilled && t.length >= 50 && e.jsx("div", {
        className: w.last_text,
        children: e.jsx("span", {
          children: "Last 50 events"
        })
      })]
    })
  },
  Cj = () => e.jsxs(ue, {
    children: [e.jsx("h1", {
      className: w.page_title,
      children: "History"
    }), e.jsx(Nj, {})]
  }),
  Ij = "_text_layout_1xggq_1",
  Pj = "_text_1xggq_1",
  Sj = "_button_layout_1xggq_14",
  Bj = "_button_layout_placeholder_1xggq_26",
  Tj = "_button_1xggq_14",
  wn = {
    text_layout: Ij,
    text: Pj,
    button_layout: Sj,
    button_layout_placeholder: Bj,
    button: Tj
  },
  Ej = () => e.jsxs(ue, {
    children: [e.jsx("div", {
      className: wn.text_layout,
      children: e.jsxs("span", {
        className: wn.text,
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
      className: wn.button_layout_placeholder
    }), e.jsx("div", {
      className: wn.button_layout,
      children: e.jsxs("button", {
        className: wn.button,
        onPointerUp: () => {
          X("https://t.me/notpixel_channel")
        },
        children: [e.jsx("img", {
          alt: "tg_logo",
          src: Hn
        }), "Telegram Channel"]
      })
    })]
  }),
  kj = "_text_layout_1h04i_1",
  Dj = "_text_1h04i_1",
  Rj = "_button_layout_1h04i_14",
  Mj = "_button_layout_placeholder_1h04i_26",
  Uj = "_button_1h04i_14",
  jn = {
    text_layout: kj,
    text: Dj,
    button_layout: Rj,
    button_layout_placeholder: Mj,
    button: Uj
  },
  Qj = () => e.jsxs(ue, {
    children: [e.jsx("div", {
      className: jn.text_layout,
      children: e.jsxs("span", {
        className: jn.text,
        children: [e.jsx("h1", {
          children: "Awards"
        }), e.jsx("p", {
          children: "There will be something here, but not now."
        })]
      })
    }), e.jsx("div", {
      className: jn.button_layout_placeholder
    }), e.jsx("div", {
      className: jn.button_layout,
      children: e.jsxs("button", {
        className: jn.button,
        onPointerUp: () => {
          X(si)
        },
        children: [e.jsx("img", {
          alt: "tg_logo",
          src: Hn
        }), "Not Pixel 42"]
      })
    })]
  }),
  Oj = "_layout_1drph_1",
  Fj = "_container_1drph_11",
  zj = "_bold_1drph_22",
  Gj = "_info_container_1drph_26",
  Lj = "_title_1drph_33",
  Hj = "_description_1drph_38",
  qj = "_image_container_1drph_43",
  Yj = "_image_1drph_43",
  Vj = "_extra_info_container_1drph_53",
  Xj = "_npx_tokens_1drph_77",
  Wj = "_button_container_1drph_81",
  Jj = "_button_1drph_81",
  Ie = {
    layout: Oj,
    container: Fj,
    bold: zj,
    info_container: Gj,
    title: Lj,
    description: Hj,
    image_container: qj,
    image: Yj,
    extra_info_container: Vj,
    npx_tokens: Xj,
    button_container: Wj,
    button: Jj
  },
  Zj = "/assets/intro-Brtd1phH.webp",
  Kj = {
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
  $j = () => {
    const n = te();
    return ze.createPortal(e.jsx("div", {
      className: Ie.layout,
      children: e.jsxs(Mn.div, {
        className: Ie.container,
        ...Kj,
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
            src: Zj
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
              n.push("/"), ln.save("skipIntro", "true")
            },
            children: "Let’s Gooooooo!"
          })
        })]
      })
    }), document.body)
  },
  eb = "_text_layout_q4wab_1",
  tb = "_text_q4wab_1",
  nb = "_button_layout_q4wab_15",
  sb = "_button_layout_placeholder_q4wab_27",
  ab = "_button_q4wab_15",
  bn = {
    text_layout: eb,
    text: tb,
    button_layout: nb,
    button_layout_placeholder: sb,
    button: ab
  },
  ib = () => e.jsxs(ue, {
    children: [e.jsx("div", {
      className: bn.text_layout,
      children: e.jsxs("span", {
        className: bn.text,
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
      className: bn.button_layout_placeholder
    }), e.jsx("div", {
      className: bn.button_layout,
      children: e.jsxs("button", {
        className: bn.button,
        onPointerUp: () => {
          St("https://ton.org/en/open-league")
        },
        children: ["Details on ton.org ", e.jsx(P, {
          size: 16,
          children: ""
        })]
      })
    })]
  }),
  ob = "_text_layout_q4wab_1",
  rb = "_text_q4wab_1",
  cb = "_button_layout_q4wab_15",
  lb = "_button_layout_placeholder_q4wab_27",
  db = "_button_q4wab_15",
  Zi = {
    text_layout: ob,
    text: rb,
    button_layout: cb,
    button_layout_placeholder: lb,
    button: db
  },
  ub = () => e.jsx(ue, {
    children: e.jsx("div", {
      className: Zi.text_layout,
      children: e.jsxs("span", {
        className: Zi.text,
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
  mb = "_close_container_1mu9y_1",
  Ab = "_title_container_1mu9y_12",
  pb = "_title_1mu9y_12",
  hb = "_frens_count_1mu9y_21",
  gb = "_content_1mu9y_25",
  _b = "_image_container_1mu9y_32",
  fb = "_image_1mu9y_32",
  xb = "_description_container_1mu9y_41",
  vb = "_white_1mu9y_50",
  yb = "_gray_1mu9y_54",
  wb = "_purple_1mu9y_58",
  jb = "_bold_1mu9y_64",
  bb = "_center_1mu9y_68",
  Nb = "_info_layout_1mu9y_72",
  Cb = "_benefits_container_1mu9y_84",
  Ib = "_benefits_item_1mu9y_92",
  Pb = "_divider_1mu9y_98",
  Sb = "_buttons_container_1mu9y_105",
  Bb = "_button_copy_1mu9y_112",
  Tb = "_button_1mu9y_105",
  Eb = "_share_container_1mu9y_137",
  kb = "_share_row_1mu9y_143",
  Db = "_crypto_image_1mu9y_150",
  R = {
    close_container: mb,
    title_container: Ab,
    title: pb,
    frens_count: hb,
    content: gb,
    image_container: _b,
    image: fb,
    description_container: xb,
    white: vb,
    gray: yb,
    purple: wb,
    bold: jb,
    center: bb,
    info_layout: Nb,
    benefits_container: Cb,
    benefits_item: Ib,
    divider: Pb,
    buttons_container: Sb,
    button_copy: Bb,
    button: Tb,
    share_container: Eb,
    share_row: kb,
    crypto_image: Db
  },
  Rb = "/assets/sitting_chars_animation_outl-BdmQzfhn.gif",
  Mb = "_link_a4r15_1",
  Ub = {
    link: Mb
  },
  Lt = ({
    url: n,
    className: t = "",
    text: s = "Copy referral link"
  }) => {
    const [a, i] = A.useState(null), o = A.useRef(null);
    return e.jsxs("div", {
      className: `${Ub.link} ${t}`,
      onPointerUp: async r => {
        var d, m;
        const l = await Ln(n);
        r.stopPropagation(), l ? (i("Copied!"), (m = (d = window.Telegram.WebApp) == null ? void 0 : d.HapticFeedback) == null || m.notificationOccurred("success")) : i("Can't copy :-("), clearTimeout(o.current), o.current = setTimeout(() => {
          i(null)
        }, 3e3)
      },
      children: [a === null ? e.jsx("span", {
        children: s
      }) : a, a === null ? e.jsx(P, {
        size: 20,
        children: ""
      }) : ""]
    })
  },
  Qb = () => {
    const {
      t: n
    } = Ge("translation", {
      keyPrefix: "frens"
    }), t = c(d => d.user.user), s = c(d => d.main.settings);
    let a = `${Pt}?startapp=f${(t==null?void 0:t.id)||""}`;
    t && t.squad && t.squad.id !== null && (a += `_s${t.squad.id}`);
    const i = (t == null ? void 0 : t.friends) || 0,
      o = c(aa),
      [r, l] = A.useState([]);
    return A.useEffect(() => {
      const d = async () => {
        const m = await W.getRevShareInfo();
        m.status === 200 && m.data && l(m.data)
      };
      t && t.friends >= 1e4 && d()
    }, [t]), e.jsxs(ue, {
      children: [e.jsxs("div", {
        className: R.content,
        children: [e.jsx("div", {
          className: R.image_container,
          children: e.jsx("img", {
            alt: "image",
            className: R.image,
            src: Rb
          })
        }), e.jsx("div", {
          className: R.title_container,
          children: e.jsx("div", {
            className: R.title,
            children: n("invite")
          })
        }), e.jsxs("div", {
          className: R.description_container,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              children: n("description")
            })
          }), e.jsxs("div", {
            children: [e.jsxs("span", {
              children: [" ", n("your"), " "]
            }), e.jsx("span", {
              className: `${R.frens_count} ${R.bold}`,
              children: i
            })]
          })]
        }), e.jsxs("div", {
          className: R.buttons_container,
          children: [e.jsx(Lt, {
            url: a,
            className: R.button_copy
          }), e.jsx("button", {
            className: R.button,
            onPointerUp: d => {
              d.stopPropagation(), X(`https://t.me/share/url?url=${a}`)
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
                children: n("benefits.title1")
              })
            }), e.jsxs("div", {
              children: [e.jsxs("span", {
                className: `${R.bold}`,
                children: [s.InitialCoins, " PX "]
              }), e.jsx("span", {
                className: `${R.gray}`,
                children: n("benefits.text1")
              })]
            })]
          }), e.jsxs("div", {
            className: R.benefits_item,
            children: [e.jsx("div", {
              children: e.jsxs(fa, {
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
                children: n("benefits.text2")
              })]
            })]
          }), e.jsx("div", {
            className: R.divider
          }), e.jsxs("div", {
            className: R.benefits_item,
            children: [e.jsx("div", {
              children: e.jsx("span", {
                className: R.gray,
                children: n("benefits.title3")
              })
            }), e.jsxs("div", {
              children: [e.jsxs("span", {
                className: R.white,
                children: [s.ReferralClaimReward * 100, "%"]
              }), e.jsxs("span", {
                className: `${R.gray}`,
                children: [" ", n("benefits.text3")]
              })]
            })]
          }), e.jsxs("div", {
            className: R.benefits_item,
            children: [e.jsx("div", {
              children: e.jsx("span", {
                className: R.gray,
                children: n("benefits.title4")
              })
            }), e.jsxs("div", {
              children: [e.jsx("span", {
                className: `${R.bold}`,
                children: "100% "
              }), e.jsxs("span", {
                className: `${R.gray}`,
                children: [" ", n("benefits.text4")]
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
                children: n("benefits.title5")
              })
            }), e.jsx("div", {
              children: e.jsxs(fa, {
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
                children: n("benefits.title6")
              }), i < 1e4 && e.jsx(P, {
                size: 16,
                style: {
                  marginLeft: 3
                },
                children: ""
              }), i >= 1e4 && e.jsx(P, {
                size: 16,
                style: {
                  marginLeft: 3
                },
                children: ""
              })]
            }), e.jsx("div", {
              children: e.jsxs(fa, {
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
                  children: Je({
                    num: Math.floor(d.totalPurchases)
                  })
                }), e.jsx("div", {
                  children: Je({
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
  Ob = "_container_19cbp_1",
  Fb = "_text_container_19cbp_9",
  zb = "_text_block_19cbp_16",
  Gb = "_gray_19cbp_24",
  Lb = "_purple_19cbp_28",
  Hb = "_total_19cbp_35",
  qb = "_bold_19cbp_39",
  Yb = "_indicator_19cbp_43",
  Vb = "_button_container_19cbp_52",
  Xb = "_button_19cbp_52",
  pe = {
    container: Ob,
    text_container: Fb,
    text_block: zb,
    gray: Gb,
    purple: Lb,
    total: Hb,
    bold: qb,
    indicator: Yb,
    button_container: Vb,
    button: Xb
  },
  Wb = "_layout_1ulm2_1",
  Jb = "_container_1ulm2_11",
  Zb = "_stars_1ulm2_17",
  Kb = "_animStar_1ulm2_1",
  es = {
    layout: Wb,
    container: Jb,
    stars: Zb,
    animStar: Kb
  },
  $b = () => {
    const [n, t] = A.useState(window.innerWidth);

    function s(a) {
      t(a.target.innerWidth)
    }
    return A.useEffect(() => (window.addEventListener("resize", s), () => {
      window.removeEventListener("resize", s)
    }), []), n
  },
  e1 = [{
    count: 50,
    speed: 50
  }, {
    count: 50,
    speed: 30
  }, {
    count: 50,
    speed: 90
  }],
  t1 = n => {
    const t = window.innerWidth,
      s = window.innerHeight * 2;
    return Array.from(Array(n)).reduce(a => {
      const i = k(0, t),
        o = k(0, s);
      return a + `${i}px ${o}px #fff, `
    }, "").replace(/,(\s+)?$/, "")
  },
  n1 = A.memo(() => ($b(), e.jsx("div", {
    className: es.layout,
    children: e.jsx("div", {
      className: es.container,
      children: e1.map((n, t) => {
        const s = t1(n.count);
        return e.jsx("div", {
          className: es.stars,
          style: {
            animation: `${es.animStar} ${n.speed}s linear infinite`,
            boxShadow: s
          }
        }, t)
      })
    })
  })), () => !1),
  s1 = () => {
    const n = te(),
      [t, s] = A.useState(0),
      [a, i] = A.useState(0),
      [o, r] = A.useState(0),
      [l, d] = A.useState(0),
      [m, h] = A.useState(0),
      [g, f] = A.useState(0),
      [j, x] = A.useState([]);
    return A.useEffect(() => {
      try {
        W.getStats().then(y => {
          const B = y.data;
          s(B.totalPlayers), i(B.totalRepaints)
        }), W.getMoreStats().then(y => {
          const B = y.data;
          r(B.premium_users), d(B.active_users), h(B.daily_users), f(B.daily_repaints), x(Object.keys(B.top_countries).map(C => ({
            key: C,
            value: B.top_countries[C]
          })))
        })
      } catch {}
    }, []), e.jsxs(ue, {
      children: [e.jsx(n1, {}), e.jsx("div", {
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
              children: e.jsx(ke, {
                num: t
              })
            })]
          }), e.jsxs("div", {
            className: pe.text_block,
            children: [e.jsx("span", {
              className: pe.gray,
              children: "Total repaints"
            }), e.jsx("span", {
              className: `${pe.bold}`,
              children: e.jsx(ke, {
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
              children: e.jsx(ke, {
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
              children: e.jsx(ke, {
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
              children: e.jsx(ke, {
                num: Math.floor(g)
              })
            })]
          })]
        }), e.jsx("div", {
          className: pe.button_container,
          children: e.jsx("button", {
            className: pe.button,
            onPointerUp: () => {
              n.push("/invite-frens")
            },
            children: "Invite fren"
          })
        })]
      })]
    })
  },
  a1 = "_main_info_container_1gqs9_2",
  i1 = "_image_container_1gqs9_11",
  o1 = "_image_1gqs9_11",
  r1 = "_title_1gqs9_21",
  c1 = "_variants_container_1gqs9_25",
  l1 = "_variant_item_1gqs9_33",
  d1 = "_variant_left_container_1gqs9_39",
  u1 = "_variant_middle_container_1gqs9_45",
  m1 = "_dot_1gqs9_53",
  A1 = "_variant_right_container_1gqs9_59",
  p1 = "_button_container_1gqs9_66",
  h1 = "_button_1gqs9_66",
  g1 = "_bold_1gqs9_96",
  _1 = "_gray_1gqs9_100",
  f1 = "_blue_1gqs9_104",
  x1 = "_text_1gqs9_109",
  Z = {
    main_info_container: a1,
    image_container: i1,
    image: o1,
    title: r1,
    variants_container: c1,
    variant_item: l1,
    variant_left_container: d1,
    variant_middle_container: u1,
    dot: m1,
    variant_right_container: A1,
    button_container: p1,
    button: h1,
    bold: g1,
    gray: _1,
    blue: f1,
    text: x1
  },
  Hr = "/assets/button_dog_200x200-DtCBiZdv.gif",
  v1 = n => {
    const t = n / 1e3,
      s = Math.floor(t / 60),
      a = t % 60;
    return a === 0 ? `${s} min` : `${s} min ${a} sec`
  },
  y1 = n => {
    if (n < 0 || !n) return "";
    const t = Math.floor(n / 60),
      s = n % 60;
    return s < 10 ? `${t}:0${s}` : `${t}:${s}`
  },
  w1 = () => {
    const n = _(),
      t = te(),
      s = c(m => m.mining.maxCharges),
      a = c(m => m.mining.charges),
      i = c(m => m.mining.reChargeSpeed),
      o = v1(i),
      r = c(m => m.mining.reChargeTs),
      [l, d] = A.useState("");
    return A.useEffect(() => {
      if (a !== 0) return () => {};
      const m = setInterval(() => {
        const g = Date.now() - r,
          f = i - g,
          j = Math.round(f / 1e3);
        d(y1(j))
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
          src: Hr
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
            children: e.jsx(P, {
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
            n(La("boosts")), t.push("/claiming")
          },
          children: [e.jsx("div", {
            className: Z.variant_left_container,
            children: e.jsx(P, {
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
            children: e.jsx(P, {
              size: 20,
              children: ""
            })
          })]
        }), e.jsxs("div", {
          className: Z.variant_item,
          onPointerUp: () => {
            n(it(1)), n(ot()), t.push("/stars")
          },
          children: [e.jsx("div", {
            className: Z.variant_left_container,
            children: e.jsx(P, {
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
            children: e.jsx(P, {
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
            t.push("/")
          },
          children: "Okay"
        })
      })]
    })
  },
  j1 = "_close_container_5xtkt_1",
  b1 = "_title_container_5xtkt_12",
  N1 = "_title_5xtkt_12",
  C1 = "_small_title_container_5xtkt_23",
  I1 = "_small_title_5xtkt_23",
  P1 = "_content_5xtkt_32",
  S1 = "_image_container_5xtkt_40",
  B1 = "_image_placeholder_5xtkt_46",
  T1 = "_image_5xtkt_40",
  E1 = "_how_container_5xtkt_58",
  k1 = "_description_container_5xtkt_63",
  D1 = "_white_5xtkt_72",
  R1 = "_gray_5xtkt_76",
  M1 = "_bold_5xtkt_80",
  U1 = "_center_5xtkt_84",
  Q1 = "_claim_button_container_5xtkt_88",
  O1 = "_claim_button_5xtkt_88",
  F1 = "_no_button_5xtkt_107",
  z1 = "_info_layout_5xtkt_119",
  G1 = "_rewards_layout_5xtkt_131",
  L1 = "_rewards_grid_container_5xtkt_137",
  H1 = "_reward_item_5xtkt_143",
  q1 = "_reward_item_completed_5xtkt_153",
  Y1 = "_reward_item_content_container_5xtkt_166",
  V1 = "_reward_item_active_5xtkt_179",
  X1 = "_reward_item_image_container_5xtkt_183",
  W1 = "_reward_item_amount_5xtkt_187",
  J1 = "_reward_item_amount_active_5xtkt_201",
  Z1 = "_reward_item_amount_premium_5xtkt_205",
  K1 = "_reward_item_title_5xtkt_210",
  $1 = "_reward_item_title_premium_5xtkt_216",
  e0 = "_reward_item_image_5xtkt_183",
  L = {
    close_container: j1,
    title_container: b1,
    title: N1,
    small_title_container: C1,
    small_title: I1,
    content: P1,
    image_container: S1,
    image_placeholder: B1,
    image: T1,
    how_container: E1,
    description_container: k1,
    white: D1,
    gray: R1,
    bold: M1,
    center: U1,
    claim_button_container: Q1,
    claim_button: O1,
    no_button: F1,
    info_layout: z1,
    rewards_layout: G1,
    rewards_grid_container: L1,
    reward_item: H1,
    reward_item_completed: q1,
    reward_item_content_container: Y1,
    reward_item_active: V1,
    reward_item_image_container: X1,
    reward_item_amount: W1,
    reward_item_amount_active: J1,
    reward_item_amount_premium: Z1,
    reward_item_title: K1,
    reward_item_title_premium: $1,
    reward_item_image: e0
  },
  t0 = ({
    secondsLeft: n
  }) => {
    const t = _(),
      s = "dailyTransactionInfo",
      a = c(S_),
      i = c(x => x.daily.getDailyListFetchStatus),
      o = c(x => x.daily.getFirstDailyFetchStatus),
      r = i === p.fulfilled,
      l = zn(),
      [d, m] = cn(),
      [h, g] = A.useState(!1),
      f = c(rt);
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
          y = await W.startShopTransaction({
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
              address: Ga,
              amount: String(Be.toNano(y.data.strAmount)),
              payload: B.toBoc().toString("base64")
            }]
          },
          Ce = await d.sendTransaction(C);
        localStorage.setItem(s, JSON.stringify({
          ts: Date.now(),
          dailyId: a.id
        })), t(z({
          id: performance.now(),
          text: "Success! Wait 3-5 min and reload the app.",
          icon: ""
        })), g(!0)
      } catch (x) {
        console.warn(x), t(z({
          id: performance.now(),
          text: "Error! Wait 5 min before starting a new transaction."
        }))
      }
    };
    if (r) {
      const x = a.prices[0];
      let y = `Claim for ${x.price} TON`;
      return n && (y = `Claim in ${rl(n)}`), h && (y = "Pending transaction..."), e.jsxs("div", {
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
          children: e.jsx(gn, {
            onPointerUp: B => {
              B.stopPropagation(), t(Tr(!0))
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
              n || h || j()
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
          children: e.jsx(et, {
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
            children: e.jsx(et, {
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
  n0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAAArCAYAAAD41p9mAAAIOElEQVRogc2ai5LbKBBFW0JgabJfmP//gq1NxrZkactVdOr4ppHteSVUqQx6IDhcLo1muu/fv9tfmNLOwXTZOf6qNPwljSk4MiCb3cKNACa55vBnMzvj+KPpT4KeKtyx/qYApCo4S3mVey8YpGud3+q1cwX/WvNfrvivBl0qYIfL5JB6UXT/YN0O3RW9AmgB+CvoI6B/Sfoq0NdO/lMBU6UKtm9Yhsm5PUXSQlbYSAT9+FUq/2zQe4BzQ8GG8/0dZVPFXqaFXOp7cgA9VdjjVwD/LNCpAv4WABwD5TrYDKD63L1EJVsFOwMwoc8B8FyBnz8D+GeAnqBiTxHgInDVMnr8tkAThg6Qg70A+oyBVeC+IBeo+8M8/CNBRzaRoCLGxkMQxjkogu8CyLQQtY6l/s71HatYiFvHAjW7kmdpj+dfPwLOR4GOVJwFegkA04dzBeshHAdgfSD6IPRD/d2gWsN7Hfipnv9Wy8d6bZQZ8m51vxd0qpAngTyi7BAPAeAs8A3XTO5dcd3TKvkLlOzXClQ8y+KbANhnkqvbreT4Eep+D2hf8IpAHaHKUgEzwsgA3AfKHlCmT+8lh7pWoCvA91DxIMANgKnuIwB7VOJx/5tgvxV0kZ2d1Ua9QJljhewN7Ov1AQPh7yf4AfVZtROWNbk/b6hzxaFKduDnem6BOE71Xre8HwHsa/m/Z4G9BfQ9yKkCHkXFJVD2gMPr6XCPn3f1dUF7NqhX8x5NLPU4yZrgu0RD24+Buj3/L2byU7CfBR1B5qLnwDNs4HptwBR1wAWd7mQx7ETRLetYpbwhZuaRMKBnUfhQwTpc75eXr/f9rHUR/FOwnwHtkFPgyS3Ik5Qzog8CLjVPBatPU80JqvW0IpxbAX0D3ASfPsLD/R0enSjsUWzkB3g85NmPgvbownbsgpAPsApX8gSP6wS6QxxQTqJmtQ1v+wZlU9FrfWbDIJ5Rz0stnySkdMUq7G8B7Km+627o9yhoQk6Sb0EeYRUjVFxgHR28OAFuEkU7HIfucTVj55aiZ9TpM+G1Xvf6XyXEVNg/0Q9fFNcKeMLgvgv0BEAeQYwCNuOYoOIDwLp1HAC0CPAkv33gzw5dbcMkrFvEKmYZRN+E+FrB+Flhr7U8YvBGAJ7u+fU90AXT3adXxkhrdFEE8gjFuqd1Ap6Lkr+jB/w9+9igXkN+xZZ7wTsWTPOuHl7WbzMGHz+gPGIw6d27fr0Hmr7MbbM3SMO1EWAPUP21MxOUW8SrOTgmFqKgPXWBor3Mr3JuXTP8eajA9DsK867sC+zIZLH8gZl+xm9oIXugHXISy0gYBJ92L/I1jpCvi4gvcCOgcoeoXk0F8+udAjZR8YZ7PKK4QBAnTPUTPNa314Mo2+ufYZOMRFzhPiuaFtICza9YjJcdwAHXs0QYqmQugrQV2ga33vTRhCkeJULnJoWL4gIv7bH7czs4Q72eCmbFhPyI+jJmz4gte4mikBZoqlmjDFrGABvosfCZ2MVB8txuZwDlxx5ahzUiD6twN1wf4M3cvvuHpQMWQ8KeUF/BwprFfycMiq8DRb5rPwS6NNTM7XXkyxnqJVgP7RS4flgaBHCkaPVqwub3DR+0Bde9jgWATzW/wpc3qHxBnL0gksmBqjOUn9SrW6BN1MxzGb/8KDTiHHd6DAMdeIG9qE/3UrbAPjrEwW4fm4R3BO5q9nVkRoRzqirlBmfGDHVgA/p7wMIYAS4agShowuVuqQcsCxazgmk+QqGjWEoSyIw+BjzXBUre82lXNhfVBYousAvuKKnml7oxGSAsEwtZ4P8HbGSOAeibCERBlyDP3WAvatZpnyWfMCBJwBbx6gSgLetopU223yYDxo9PhH3GX8i9z0dYyIY2ZolAMsD6Ykhru1F1CzSBU81J1NyLmmkZA6yhR8OSQM4CJQl0C35NIg4uiPRmr3OWehw2ffQVqjXsAIfa91e0V71a/5pzgTh/A61wTfb/BLCnZsIvYgm93McB6cU6DOfVSky8mXH0JtPc0wWAV3j2uZYHPLuiT6pq9+8LbIPXwkWRoBWoBYugQaEErmru5BkFy9CuQ0MJNfqoFG3BNyyMK4BTnRTWAoAGGFRqD8XPaN8Js3kVP06wFZO6d0GnQLW9DATVrB+GMhqcYCO8L4Lc8uco6uAHpg33r1CpX0+4z6Bs788Kb85yzftxQn9nXFN+yvTmT0g3niLGzsWQIV0PFfNIomwOgMKnH0c7QoJuKdoa9kJLuCC/oc+ev+C9g/yfB8UzB6Li86ryG5iEzLAuyahlmdKq8MjDGWVYAFk9muC1Q9Gh9+sM7NAew/OdtCOJkCgozjQVpvMyeceNSCPQJud05Ewg62/XuM8CKBpt9NLYJJ1U6FHe5BnG1sxH7dY2sj/coBGkijI6H25YTBrdSwX+8CBTVT22k/qoHI0m+gByH9znEPmVzv/asuF5nuOXvCRe7m1ilKDerCx6gFefVo6/UmtkojI7zqRTi7NkLy5OAWgTuBp5RHF1dI/W2zXaZAJc2+EpChp4nfB1UUy8IbIOTQpdgeuoR6GZqtga+UjJrRQ9E0HXxVLbaY1r0aBqnyNWIZy9iCOqTFWrHdN7W9HDPSitjkSpk/o86aBqO1rwLfhln6jYvTXuZjH0rehvq2XwglZSi4mA6wC1QrhHlKxJ71fwupZYcF6fZTnq/8OM7imGFak13Hu+BTzqgOaj8iNpb6Ba9W07/ehEHPbkLPuVHvaYnXt0VX7mPVsA+y2A+XxUjupUD27d90jas9ebwiNg9xI/3uypo5X8mv5Z6k+lZ1Wr/wN4e84s/Q/2rCnUUnWoDQAAAABJRU5ErkJggg==",
  s0 = "data:image/png;base64,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",
  a0 = "data:image/png;base64,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",
  i0 = "data:image/png;base64,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",
  o0 = "_container_11l5m_1",
  r0 = "_divider_11l5m_23",
  c0 = "_row_11l5m_28",
  l0 = "_row_title_11l5m_40",
  d0 = "_row_title_main_11l5m_44",
  u0 = "_row_hint_11l5m_49",
  m0 = "_row_value_11l5m_55",
  A0 = "_row_value_main_11l5m_59",
  p0 = "_mining_percent_11l5m_64",
  h0 = "_active_row_11l5m_74",
  g0 = "_button_11l5m_85",
  Ki = {
    container: o0,
    divider: r0,
    row: c0,
    row_title: l0,
    row_title_main: d0,
    row_hint: u0,
    row_value: m0,
    row_value_main: A0,
    mining_percent: p0,
    active_row: h0,
    button: g0
  },
  _0 = () => {
    const n = _(),
      t = c(a => a.daily.showHowDailyWorksPopup),
      s = a => {
        n(Tr(a))
      };
    return e.jsx(zt, {
      show: t,
      setShow: s,
      children: e.jsxs("div", {
        className: Ki.container,
        children: [e.jsx("h2", {
          children: "How does Daily work? "
        }), e.jsx("p", {
          children: "Complete the daily check-ins and earn valuable rewards. The more days completed, the more rewards you get."
        }), e.jsx("p", {
          children: "Usage is only possible in the desktop version."
        }), e.jsx("button", {
          className: Ki.button,
          onPointerUp: () => s(!1),
          children: "That's so wise!"
        })]
      })
    })
  },
  f0 = (n, t) => {
    const s = n.getTime() - n.getTime() % 864e5,
      a = t.getTime() - t.getTime() % (86400 * 1e3);
    return s === a
  },
  x0 = () => {
    const n = _(),
      t = c(Ai.selectAll),
      s = c(r => r.daily.selected),
      [a, i] = A.useState(null),
      o = c(r => r.daily.getDailyListFetchStatus);
    return A.useEffect(() => {
      (o === p.idle || o === p.rejected) && n(Er.getList())
    }, [o]), A.useEffect(() => {
      let r = 0;
      for (let l = 0; l < t.length; l++) {
        const d = t[l];
        if (d.timestamp && new Date(d.timestamp) > r && (r = new Date(d.timestamp)), d.daily) {
          n(B_(d.id));
          break
        }
      }
      if (r && f0(new Date, new Date(r))) {
        const l = new Date(r),
          m = new Date(Date.UTC(l.getUTCFullYear(), l.getUTCMonth(), l.getUTCDate() + 1, 0, 0, 0, 0)) - new Date,
          h = Math.floor(m / 1e3);
        i(h)
      }
    }, [t]), e.jsxs(ue, {
      children: [e.jsx("div", {
        className: L.title_container,
        children: e.jsx("div", {
          className: L.title,
          children: "Daily streak awards"
        })
      }), e.jsx(t0, {
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
            children: t.map((r, l) => {
              const d = (l + 1) % 4 === 0,
                m = r.prices[0],
                h = [L.reward_item],
                g = [L.reward_item_amount],
                f = [L.reward_item_title];
              r.id === s && (h.push(L.reward_item_active), g.push(L.reward_item_amount_active)), d && f.push(L.reward_item_title_premium), d && !r.active && g.push(L.reward_item_amount_premium);
              let j = n0;
              return l >= 8 && l <= 15 && (j = s0), l >= 16 && l <= 23 && (j = a0), l >= 24 && l <= 31 && (j = i0), e.jsxs("div", {
                className: h.join(" "),
                onPointerUp: () => {
                  n(z({
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
                  children: e.jsx(P, {
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
      }), e.jsx(_0, {})]
    })
  },
  v0 = "_general_info_container_fv8d9_1",
  y0 = "_img_container_fv8d9_7",
  w0 = "_image_fv8d9_13",
  j0 = "_title_fv8d9_19",
  b0 = "_description_container_fv8d9_25",
  N0 = "_description_fv8d9_25",
  Jt = {
    general_info_container: v0,
    img_container: y0,
    image: w0,
    title: j0,
    description_container: b0,
    description: N0
  },
  C0 = "_info_layout_1p9dg_1",
  I0 = {
    info_layout: C0
  },
  P0 = "_no_template_container_uihlo_1",
  S0 = "_no_template_button_uihlo_10",
  B0 = "_template_container_uihlo_28",
  T0 = "_template_info_container_uihlo_35",
  E0 = "_template_info_uihlo_35",
  k0 = "_buttons_container_uihlo_44",
  D0 = "_button_copy_uihlo_53",
  R0 = "_button_uihlo_44",
  M0 = "_create_new_template_uihlo_72",
  nt = {
    no_template_container: P0,
    no_template_button: S0,
    template_container: B0,
    template_info_container: T0,
    template_info: E0,
    buttons_container: k0,
    button_copy: D0,
    button: R0,
    create_new_template: M0
  },
  U0 = "_instruction_container_14ts7_1",
  Q0 = "_img_container_14ts7_9",
  O0 = "_image_14ts7_15",
  F0 = "_instruction_text_14ts7_21",
  z0 = "_preview_container_14ts7_26",
  G0 = "_preview_image_container_14ts7_32",
  L0 = "_preview_image_14ts7_32",
  H0 = "_preview_image_loader_14ts7_45",
  q0 = "_template_size_14ts7_60",
  Y0 = "_template_title_14ts7_68",
  V0 = "_template_size_container_14ts7_73",
  X0 = "_template_size_item_14ts7_79",
  W0 = "_template_size_item_active_14ts7_87",
  J0 = "_template_coords_14ts7_92",
  Z0 = "_template_coordinates_title_14ts7_102",
  K0 = "_template_coords_container_14ts7_107",
  $0 = "_coords_item_14ts7_114",
  eN = "_coords_input_14ts7_120",
  tN = "_file_button_container_14ts7_129",
  nN = "_file_button_14ts7_129",
  ie = {
    instruction_container: U0,
    img_container: Q0,
    image: O0,
    instruction_text: F0,
    preview_container: z0,
    preview_image_container: G0,
    preview_image: L0,
    preview_image_loader: H0,
    template_size: q0,
    template_title: Y0,
    template_size_container: V0,
    template_size_item: X0,
    template_size_item_active: W0,
    template_coords: J0,
    template_coordinates_title: Z0,
    template_coords_container: K0,
    coords_item: $0,
    coords_input: eN,
    file_button_container: tN,
    file_button: nN
  },
  Ks = {
    16: 512,
    32: 2048,
    64: 8192,
    128: 2e4
  },
  sN = ({
    templateSize: n,
    setTemplateSize: t
  }) => {
    const s = _(),
      a = c(Le),
      i = a.friends || 64,
      [o] = A.useState([16, 32, 64, 128]);
    return e.jsxs("div", {
      className: ie.template_size,
      children: [e.jsx("div", {
        className: ie.template_title,
        children: "Select a template size"
      }), e.jsx("div", {
        className: ie.template_size_container,
        children: o.map(r => {
          if (r === 128 && !a.isContractor) return null;
          const l = [ie.template_size_item];
          return n === r && l.push(ie.template_size_item_active), e.jsx("div", {
            className: l.join(" "),
            onPointerUp: () => {
              i >= Ks[r] || a.isContractor ? t(r) : s(z({
                id: performance.now(),
                text: `To unlock this size, invite ${Ks[r]-i} more frens.`
              }))
            },
            children: `${r} X ${r}`
          }, r)
        })
      }), " "]
    })
  },
  aN = () => {
    const n = te(),
      t = c(i => i.template.myTemplate),
      s = c(i => i.user.user),
      a = s && s.friends >= Ks[16] || s.isContractor;
    return t !== null ? null : e.jsxs("div", {
      className: nt.no_template_container,
      children: [a && e.jsx("span", {
        className: "gray",
        children: "Create a template and share with your friends."
      }), !a && e.jsxs("span", {
        className: "gray",
        children: ["To unlock template creation, ", e.jsx("br", {}), " invite", " ", s && s.friends || 0, "/", Ks[16], " friends"]
      }), a && e.jsx("button", {
        className: nt.no_template_button,
        onPointerUp: () => {
          n.push("/template/create")
        },
        children: "Pixel Templates"
      }), !a && e.jsx("button", {
        className: nt.no_template_button,
        onPointerUp: () => {
          n.push("/invite-frens")
        },
        children: "Invite frens"
      }), e.jsx("div", {
        style: {
          height: 30
        }
      })]
    })
  },
  iN = "_template_item_container_srp11_1",
  oN = "_template_item_inner_srp11_9",
  rN = "_template_image_srp11_17",
  cN = "_template_image_info_layout_srp11_24",
  lN = "_template_image_info_container_srp11_34",
  Nn = {
    template_item_container: iN,
    template_item_inner: oN,
    template_image: rN,
    template_image_info_layout: cN,
    template_image_info_container: lN
  },
  qr = ({
    item: n,
    style: t = {}
  }) => {
    const s = _();
    return e.jsx("div", {
      className: Nn.template_item_container,
      style: {
        ...t
      },
      onPointerUp: async () => {
        n.templateId && n.templateId !== 0 && s(Wa({
          show: !0,
          id: Number(n.templateId)
        }))
      },
      children: e.jsxs("div", {
        className: Nn.template_item_inner,
        children: [e.jsx("img", {
          alt: "image",
          className: Nn.template_image,
          src: n.url
        }), e.jsx("div", {
          className: Nn.template_image_info_layout,
          children: e.jsxs("div", {
            className: Nn.template_image_info_container,
            children: [e.jsx(P, {
              children: ""
            }), e.jsx("span", {
              children: an(Math.max(0, n.subscribers))
            })]
          })
        })]
      })
    })
  },
  dN = () => {
    const n = te();
    return e.jsx("div", {
      className: nt.create_new_template,
      onPointerUp: () => {
        n.push("/template/create")
      },
      children: "Create a new template"
    })
  },
  uN = () => {
    const n = c(a => a.user.user);
    let t = `${Pt}?startapp=f${(n==null?void 0:n.id)||""}_t`;
    n.squad && n.squad.id !== null && (t += `_s${n.squad.id}`);
    const s = c(a => a.template.myTemplate);
    return s === null ? null : e.jsxs("div", {
      className: nt.template_container,
      children: [e.jsx(qr, {
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
        className: nt.template_info_container,
        children: e.jsxs("span", {
          className: nt.template_info,
          children: ["Share this template with your frens, ", e.jsx("br", {}), " get reward for frens repaints."]
        })
      }), e.jsxs("div", {
        className: nt.buttons_container,
        children: [e.jsx(Lt, {
          url: t,
          className: nt.button_copy,
          text: "Copy template link"
        }), e.jsx("button", {
          className: nt.button,
          onPointerUp: a => {
            a.stopPropagation(), window.Telegram.WebApp.openTelegramLink(`https://t.me/share/url?url=${t}`)
          },
          children: "Share"
        })]
      }), e.jsx(dN, {})]
    })
  },
  mN = () => e.jsxs("div", {
    children: [e.jsx(aN, {}), e.jsx(uN, {})]
  }),
  AN = "_layout_94gj5_1",
  pN = "_container_94gj5_5",
  hN = "_button_container_94gj5_11",
  gN = "_button_94gj5_11",
  $s = {
    layout: AN,
    container: pN,
    button_container: hN,
    button: gN
  },
  _N = () => {
    const n = _(),
      t = A.useRef(null),
      s = A.useRef(0),
      a = c(m => m.template.listStatus),
      i = c(m => m.template.listOffset),
      o = c(m => m.template.listLimit),
      r = c(m => m.template.list),
      [l, d] = A.useState(!1);
    return A.useEffect(() => {
      let m = null;
      if (t.current && a === p.fulfilled && !l) {
        const h = {
            rootMargin: "0px",
            threshold: 1
          },
          g = (f, j) => {
            f.forEach(x => {
              x.intersectionRatio >= 1 && (n(It.getList({
                offset: i,
                limit: o
              })), j.unobserve(t.current))
            })
          };
        m = new IntersectionObserver(g, h), m.observe(t.current)
      }
      return () => {
        m && t.current && m.unobserve(t.current)
      }
    }, [a, i, o, l]), A.useEffect(() => {
      s.current === r.length && r.length !== 0 && d(!0), s.current = r.length
    }, [r]), l ? null : e.jsx("div", {
      className: $s.button_container,
      children: e.jsx("button", {
        ref: t,
        disabled: a === p.pending,
        className: $s.button,
        onPointerUp: () => {
          n(It.getList({
            offset: i,
            limit: o
          }))
        },
        children: "Load more"
      })
    })
  },
  fN = () => {
    const n = _(),
      t = c(o => o.template.listOffset),
      s = c(o => o.template.listLimit),
      a = c(o => o.template.list),
      i = c(o => o.template.referredTemplate);
    return A.useEffect(() => (n(It.getList({
      offset: t,
      limit: s
    })), () => {
      n(C_())
    }), []), e.jsxs("div", {
      className: $s.layout,
      children: [e.jsx("div", {
        className: $s.container,
        children: a.map(o => {
          if (Number(o.templateId) === 0) return null;
          let r = !1;
          return i !== null && Number(i.id) === Number(o.templateId) && (r = !0), e.jsx(qr, {
            item: o,
            current: r
          }, o.templateId)
        })
      }), e.jsx(_N, {})]
    })
  },
  xN = () => {
    const n = c(t => t.template.activeTab);
    return e.jsxs("div", {
      className: I0.info_layout,
      children: [n === "my" && e.jsx(mN, {}), n === "catalog" && e.jsx(fN, {})]
    })
  },
  vN = () => {
    const n = _(),
      t = c(s => s.template.activeTab);
    return e.jsxs(mn, {
      children: [e.jsx(Oe, {
        active: t === "my",
        setActive: () => n(zi("my")),
        children: "My template"
      }), e.jsx(Oe, {
        active: t === "catalog",
        setActive: () => n(zi("catalog")),
        children: "Catalog"
      })]
    })
  },
  yN = () => e.jsxs(re.Fragment, {
    children: [e.jsx(vN, {}), e.jsx(xN, {})]
  }),
  ha = "/assets/paintings_anim2-nk1iBB8J.gif",
  wN = "_container_1h1qc_1",
  jN = "_divider_1h1qc_19",
  bN = "_row_1h1qc_24",
  NN = "_row_title_1h1qc_36",
  CN = "_row_title_main_1h1qc_40",
  IN = "_row_hint_1h1qc_45",
  PN = "_row_value_1h1qc_51",
  SN = "_row_value_main_1h1qc_55",
  BN = "_mining_percent_1h1qc_60",
  TN = "_active_row_1h1qc_70",
  EN = "_button_1h1qc_81",
  $i = {
    container: wN,
    divider: jN,
    row: bN,
    row_title: NN,
    row_title_main: CN,
    row_hint: IN,
    row_value: PN,
    row_value_main: SN,
    mining_percent: BN,
    active_row: TN,
    button: EN
  },
  kN = () => {
    const n = _(),
      t = c(a => a.template.showTemplateDetailsPopup),
      s = a => {
        n(Sr(a))
      };
    return e.jsx(zt, {
      show: t,
      setShow: s,
      children: e.jsxs("div", {
        className: $i.container,
        children: [e.jsx("h2", {
          children: "How does Templates work? "
        }), e.jsx("p", {
          children: "Paint the pixels in the correct color – get a PX. "
        }), e.jsx("p", {
          children: "Use global templates, join your frens' templates, or create your own."
        }), e.jsx("p", {
          children: "Create a template and get reward in PX. The reward depends on the number of painters of the template. Btw, the owner doesn't get an award for painting his template."
        }), e.jsx("button", {
          className: $i.button,
          onPointerUp: () => s(!1),
          children: "That's so wise!"
        })]
      })
    })
  },
  DN = "_layout_2uiqn_1",
  RN = "_container_2uiqn_6",
  MN = "_close_button_2uiqn_18",
  UN = "_title_container_2uiqn_26",
  QN = "_title_2uiqn_26",
  ON = "_image_container_2uiqn_37",
  FN = "_image_2uiqn_37",
  zN = "_image_placeholder_2uiqn_51",
  GN = "_info_container_2uiqn_58",
  LN = "_info_row_2uiqn_64",
  HN = "_info_title_2uiqn_69",
  qN = "_info_value_blue_2uiqn_73",
  YN = "_info_value_white_2uiqn_78",
  VN = "_buttons_container_2uiqn_82",
  XN = "_button_2uiqn_82",
  WN = "_not_button_2uiqn_98",
  JN = "_button_copy_2uiqn_109",
  ce = {
    layout: DN,
    container: RN,
    close_button: MN,
    title_container: UN,
    title: QN,
    image_container: ON,
    image: FN,
    image_placeholder: zN,
    info_container: GN,
    info_row: LN,
    info_title: HN,
    info_value_blue: qN,
    info_value_white: YN,
    buttons_container: VN,
    button: XN,
    not_button: WN,
    button_copy: JN
  },
  ZN = () => {
    const n = _(),
      t = c(d => d.template.templateInfoPopupId),
      [s, a] = A.useState(!1),
      i = c(d => d.user.user),
      o = c(d => d.template.referredTemplate),
      r = t === i.id,
      l = o !== null && t === o.id;
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
          if (t && t !== 0) {
            if (a(!0), (await n(It.subscribe({
                id: t
              }))).meta.requestStatus === p.fulfilled) {
              await n(z({
                id: performance.now(),
                text: "Success!"
              }));
              const m = await n(It.getTemplateById({
                  id: t
                })),
                h = {
                  ...m.payload,
                  url: `${m.payload.url}?time=${Date.now()}`,
                  type: De.referred
                };
              n(b_(h)), b.mainImage.worldTemplate.deleteTemplate(o.id), b.mainImage.worldTemplate.add(h), n(vi())
            } else await n(z({
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
  KN = () => {
    const n = _(),
      [t, s] = A.useState(null),
      a = c(o => o.template.showTemplateInfoPopup),
      i = c(o => o.template.templateInfoPopupId);
    return A.useEffect(() => (i && (async () => {
      try {
        const r = await n(It.getTemplateById({
          id: i
        }));
        r.payload && s({
          ...r.payload
        })
      } catch {}
    })(), () => {
      s(null)
    }), [i]), ze.createPortal(e.jsx(Ve, {
      onPointerUp: () => n(Wa({
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
              n(Wa({
                show: !1
              }))
            },
            children: e.jsx(P, {
              size: 26,
              children: ""
            })
          }), e.jsx("div", {
            className: ce.title_container,
            children: e.jsxs("span", {
              className: ce.title,
              children: ["Template ", t && `${t.imageSize}x${t.imageSize}`]
            })
          }), e.jsxs("div", {
            className: ce.image_container,
            children: [t && e.jsx("img", {
              alt: "image",
              className: ce.image,
              src: t.url
            }), !t && e.jsx("div", {
              className: ce.image_placeholder
            })]
          }), e.jsxs("div", {
            className: ce.buttons_container,
            children: [e.jsx(ZN, {}), e.jsx(Lt, {
              url: `${Pt}?startapp=f${i}_t`,
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
                children: t ? `${t.x}, ${t.y}` : "Loading..."
              })]
            }), e.jsxs("div", {
              className: ce.info_row,
              children: [e.jsx("span", {
                className: ce.info_title,
                children: "Painters"
              }), " ", e.jsx("span", {
                className: ce.info_value_white,
                children: t ? `${t.subscribers}` : "Loading..."
              })]
            }), e.jsxs("div", {
              className: ce.info_row,
              children: [e.jsx("span", {
                className: ce.info_title,
                children: "Repaints"
              }), " ", e.jsx("span", {
                className: ce.info_value_white,
                children: t ? `${t.hits}` : "Loading..."
              })]
            })]
          })]
        })
      })
    }), document.body)
  },
  $N = () => {
    const n = _();
    return e.jsxs(ue, {
      children: [e.jsxs("div", {
        className: Jt.general_info_container,
        children: [e.jsx("div", {
          className: Jt.img_container,
          children: e.jsx("img", {
            alt: "img",
            className: Jt.image,
            src: ha
          })
        }), e.jsx("h1", {
          className: Jt.title,
          children: "Templates"
        }), e.jsxs("div", {
          className: Jt.description_container,
          children: [e.jsxs("span", {
            className: Jt.description,
            children: ["Use templates and get more PX ", e.jsx("br", {}), e.jsx(gn, {
              onPointerUp: t => {
                t.stopPropagation(), n(Sr(!0))
              },
              children: "How it works"
            })]
          }), e.jsx(kN, {})]
        })]
      }), e.jsx(yN, {}), e.jsx(KN, {})]
    })
  },
  eC = "_container_s1r1v_1",
  tC = "_page_s1r1v_13",
  nC = "_id_s1r1v_17",
  sC = "_title_s1r1v_22",
  aC = "_avatar_container_s1r1v_28",
  iC = "_avatar_s1r1v_28",
  oC = "_squad_avatar_container_s1r1v_40",
  rC = "_text_container_s1r1v_52",
  cC = "_dot_s1r1v_58",
  lC = "_user_name_s1r1v_63",
  dC = "_squad_name_s1r1v_69",
  uC = "_divider_s1r1v_75",
  mC = "_tabs_content_s1r1v_81",
  AC = "_content_info_s1r1v_85",
  pC = "_content_info_item_s1r1v_92",
  hC = "_content_info_item_title_s1r1v_96",
  gC = "_content_info_item_value_s1r1v_100",
  _C = "_no_content_s1r1v_106",
  fC = "_achievements_container_s1r1v_115",
  V = {
    container: eC,
    page: tC,
    id: nC,
    title: sC,
    avatar_container: aC,
    avatar: iC,
    squad_avatar_container: oC,
    text_container: rC,
    dot: cC,
    user_name: lC,
    squad_name: dC,
    divider: uC,
    tabs_content: mC,
    content_info: AC,
    content_info_item: pC,
    content_info_item_title: hC,
    content_info_item_value: gC,
    no_content: _C,
    achievements_container: fC
  },
  xC = () => {
    const n = c(l => l.canvas.pixelInfo),
      t = c(l => l.ratings.list),
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
    if (r.dataSource === Ke.userFromPixelInfo) return {
      ready: s === p.fulfilled && n !== null,
      data: n == null ? void 0 : n.owner,
      item: r
    };
    if (r.dataSource === Ke.squadFromData) return {
      ready: i === p.fulfilled && o !== null,
      data: o,
      item: r
    };
    if (r.dataSource === Ke.userFromRating) {
      const l = r.index,
        d = t.length;
      return {
        ready: l < d,
        data: t[l],
        item: r
      }
    }
    return null
  },
  kt = (n = !0) => {
    const [t, s] = A.useState({
      ready: !1,
      data: null
    }), a = xC(), i = c(Le);
    return A.useEffect(() => {
      t && s({
        ready: !0,
        data: i
      })
    }, [i]), n ? a : t
  },
  vC = ({
    isPopupContent: n = !0
  }) => {
    const {
      data: t,
      ready: s
    } = kt(n);
    if (!s) return e.jsx(et, {
      show: !s,
      children: e.jsx("div", {
        className: V.text_container,
        children: e.jsx("span", {
          className: V.user_name,
          children: "No name • @notpixel"
        })
      })
    });
    const i = Gn(t.firstName || "No name");
    return e.jsx("div", {
      className: V.text_container,
      children: e.jsx("span", {
        className: V.user_name,
        children: i
      })
    })
  },
  yC = ({
    isPopupContent: n = !0
  }) => {
    var o;
    const t = _(),
      {
        data: s,
        ready: a
      } = kt(n);
    return a ? ((o = s == null ? void 0 : s.squad) == null ? void 0 : o.name) && s.squad.name !== null ? e.jsxs("div", {
      className: V.text_container,
      children: [e.jsx("span", {
        className: V.squad_name,
        children: "Squad"
      }), e.jsx(gn, {
        onPointerUp: () => {
          t(Aa.getInfo({
            id: s.squad.id
          })), t(qn({
            dataSource: Ke.squadFromData
          }))
        },
        children: Gn(s.squad.name, 20)
      })]
    }) : e.jsx("div", {
      className: V.text_container,
      children: e.jsx("span", {
        className: V.squad_name,
        children: "No squad"
      })
    }) : e.jsx(et, {
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
  wC = ({
    isPopupContent: n = !0
  }) => {
    var i;
    const {
      data: t,
      ready: s
    } = kt(n);
    let a = at;
    return s && t.userPic && t.userPic !== "" && (a = t.userPic), e.jsxs("div", {
      className: V.avatar_container,
      children: [e.jsx("img", {
        alt: "avatar",
        className: V.avatar,
        src: a
      }), e.jsx("div", {
        className: V.squad_avatar_container,
        children: e.jsx(Ci, {
          src: ((i = t == null ? void 0 : t.squad) == null ? void 0 : i.logo) || ""
        })
      })]
    })
  },
  jC = ({
    isPopupContent: n = !0
  }) => {
    const t = _(),
      {
        data: s,
        ready: a
      } = kt(n);
    return e.jsxs("div", {
      children: [a && s.id !== 0 && e.jsx("span", {
        className: V.id,
        onPointerUp: async i => {
          i.preventDefault(), i.stopPropagation();
          try {
            await Ln(`${s.id}`), await t(z({
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
        children: s.id
      }), e.jsx(et, {
        show: !a,
        children: e.jsx("span", {
          children: "Owner"
        })
      })]
    })
  },
  bC = ({
    active: n,
    setActive: t
  }) => e.jsxs(mn, {
    style: {},
    children: [e.jsx(Oe, {
      active: n === "info",
      setActive: () => t("info"),
      children: "Info"
    }), e.jsx(Oe, {
      active: n === "achievements",
      setActive: () => t("achievements"),
      children: "Achievements"
    }), e.jsx(Oe, {
      active: n === "inventory",
      setActive: () => t("inventory"),
      children: "Inventory"
    })]
  }),
  NC = () => e.jsx("div", {
    className: V.divider
  }),
  CC = ({
    isPopupContent: n = !0
  }) => {
    const {
      data: t,
      ready: s
    } = kt(n);
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
          children: s ? ke({
            num: t.repaints
          }) : 0
        })]
      }), e.jsxs("div", {
        className: V.content_info_item,
        children: [e.jsx("div", {
          className: V.content_info_item_title,
          children: "PX mined"
        }), e.jsx("div", {
          className: V.content_info_item_value,
          children: s ? ke({
            num: t.balance
          }) : 0
        })]
      })]
    })
  },
  IC = "_container_os5nt_1",
  PC = "_not_completed_os5nt_6",
  SC = "_image_container_os5nt_10",
  BC = "_image_os5nt_10",
  TC = "_bold_os5nt_20",
  EC = "_gray_os5nt_24",
  kC = "_description_container_os5nt_28",
  Dt = {
    container: IC,
    not_completed: PC,
    image_container: SC,
    image: BC,
    bold: TC,
    gray: EC,
    description_container: kC
  },
  DC = ({
    completed: n,
    item: t
  }) => e.jsxs("div", {
    className: F(Dt.container, n ? "" : Dt.not_completed),
    children: [e.jsx("div", {
      className: Dt.image_container,
      children: e.jsx("img", {
        src: t.src,
        className: Dt.image
      })
    }), e.jsxs("div", {
      className: Dt.description_container,
      children: [e.jsx("span", {
        className: Dt.bold,
        children: t.title
      }), e.jsx("span", {
        className: Dt.gray,
        children: t.description
      })]
    })]
  }),
  RC = "/assets/0-CBlm-5t2.gif",
  MC = "/assets/1-C1eaF-Lh.gif",
  UC = "/assets/2-Dx7l5fvD.gif",
  QC = "data:image/gif;base64,R0lGODdhZABkAHcAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgAAACwAAAAAZABkAMMAAAABAAIzMzNfNRs0QxRMYh2HUjK1ajtogDSHqzuWvkE/Vfb///8AAAAAAAAAAAAE/xDISau9OOvNu79FKI4hYiJJmihs676vmpwIaRdfR+wE7f8+mXBILA6BSB+PkEMyngyBdCqFMpLY7M9KpVq1SwyNOw2Yz2YvVMs+kaVotPoJ5lG01m97386v+UBLgIOEhYaABomKi4yNjo+QkYyHg5IGB5iZmpucnZ6WlKE1N6SlpqWiqaqrrAgLr7CxsrO0tba3uLm6u7y9vr/AtzkYp8XGw8gZS4InRs7P0M40y3bJeH5XrWzY2VhhG2NQVHFnc92ibwLkaVN63tUSTuJdVX/abvP07oDM9/7/exZ5GkiwIKdFAJMsGsCwocOHECNKnBgRYUIgljJqzHixo8dBwf9CihxJsqTJk7mSqVzJsmUyYzBLuZw5oRgNGTBy5pRBoxhNC9R23IxGtKiRaUFV9gNktKmKQt88XPPzMRzVLFEzyHtCrx4dgOnM1dkhBh/XMuvEqkq3LoDad2QnWI2CltxbdPnUpW1nL0nWrXT19b0Xlu/XQUsB7/vILVTiqpAjS64q0KDly5osQt7IuTMojwspih5N+qHmi5Ywq970ebPn1xonA4lJ25js27hzy0bJu7fv38CDCx9OvDjxn8iTK1/OvLmH2tBxOE8evfb0YTabqdDJvQXPEz6v1zw1NEX37t9NhFcetId2p/CjIaXmsn35+PiLzF+mlEeh/ERBBY//Dv4RAqB8hGTFwVR5SNYYVgOWhcWDkFHoV4QXANaVAItpU5hX5yChoFxAfMjhYB7mdZeIGMZjVmB62WVYiJSwtReIYzFBogk2yojjWnm1tWIgA841zo0nHobXWXAg2eEPf714pI9J0nhIj3EMCWWRJao4Y0ImPsnGYzx6+eM/YaLYBpk+WMgYNo4VOCGckbmZoJy65annnnz26adriawm6ECnSVbZoIhmUihosDXq2UeORroRpIqUZumlFSlCaSKYdorpov+kluhlraEmyaikSmKopKwmglurrepZ3awi+EkrrX/mquuuvPbqKx/GBSvssMQWa+yxyCar7LLMNuvsBbPQLhABACH5BAkKAAAALAAAAABkAGQAwwAAAAEAAjMzM181GzRDFExiHYdSMrVqO2iANIerO5a+QT9V9v///wAAAAAAAAAAAAT/EMhJq7046827/1ghjqSInEiiJkrrvjC8JihS3gXIETxR/8DfbEgsGonB5K9HwDCVKIaUIahaq1MGdMuNTq/XbJLy3GavgbQ6HZ5234izdb1uS2tleDAr1vuhfG5/g4SFhod6BoqLjI2Oj5CRko2IiZMHmJmam5ydnpMGlYc4pKWmpqKpqqtQC66vsLGys7S1tre4ubq7vL2+v7Y6whWnxcbDyBVMeSlHzs/QR3jLPCDMSYF3rF3ZWltkPVxyVXRqdt6i4wLlbFZ9J9dw6ufbP/PugvX6+/w1jJ4AAwrkxKhfEkYDEipcyLChw4cQHRY0CASUxYsWKWrUCKyjx48g/0OKHIkrmcmTKFOmNMaylEqVxWrMiEGT5owaxV4qo+YDRbSfQJ1No4Ys3pugSFcQYrIjnJlsG2t04+LEKaAvYLDk03dPqzYg4HiIw0qOHb1U6tgFOHsibM+rUtCYxfe1Utq5XtEhMMqNLJh3XP2yXWK10NSoJw4jXsy4sWND/wZKnqxpImKMmDOD2ogwoufPoBlaNgiKsulNmxdrXo3x8Y+WsI25nk27tiGSuHPr3s27t+/fwIMD10m8uPHjyJOfjM08h3KdzWM/BxHT54qa2F3cRJFzuoTqJ2Zmx779RPfiPN82S8o+2tBlKNPLbE9fKIr0RQvrqf9zaQ9r+sHBn/l7gzC1AV9SQbWYYko0JdZTgTDG4BgXIOhFXFkJAFg9XWm4VQ1VPQgXFRluuE2HJrY1gYWJ+aXWYIjcVc5gbo2FYVkz0qVXjC7i5WFdNUJIIo50wHiIjEXqCOKKAQKBZB1KotVjjnm9RwiKH54oWJRAsKgElnVxuGWVQXhpIx8SKgiFmUKmaNCEtsUp55x01mmnnJGdpmcnozGW556AYtKnRqwVuhpnhiZ6EaKKhObooxItwqgBkFYK6aD7lBboZKlRpOmmA3UalaKkSvpYqaXaFt2qI9DJKqt3xirrrLTWWptwuOaq66689urrr8AGK+ywxBZr7LELRAAAOw==",
  OC = "/assets/4-B9SjwR-x.gif",
  FC = "/assets/5-D2MXnTsp.gif",
  zC = "/assets/6-DGYxyagY.gif",
  GC = "/assets/10-BNY74yH-.gif",
  LC = "/assets/12-B0vEyGRB.gif",
  HC = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF0AAABkCAYAAADkBDymAAACSElEQVR4nO3doU5cQRSA4dmymz4DZkG0dU0wKB5gDXZVBSsxTfcBKmrql6SikhUoUlcED4DCNMHRCrqmz9AAadMHmHPDKXP/Jfk/Oxku/BlxMrnLDibz/ZJxvvj6J7WxlHJ7+by6Ntr9nf2xvf4uk/n+IPvMZ9mNyjM6wOgAowOMDjA6YBg9MhoLV6fh1iay412bffHIHI2UnnSA0QFGBxgdYHSA0QH/xpq1Ggs3tzeqa/2Phbl9XXs96QCjA4wOMDrA6ACjA4wOMDrA6ACjA4wOMDrA6ACjA/q/u+24vo10Xac+FZ50gNEBRgcYHWB0gNEBzUbGaCz8sPxSXfv4KfcZqMjx4mew+qq6Eu0b7W6lfx9POsDoAKMDjA4wOsDogPQLpF03hdFY+PLF6+ra9x9X1bVonNz5XN/37bD+vGgsnM3rY2H0vK5netIBRgcYHWB0gNEBRgc0u2XMjoXRvkg0orXwP8/zpAOMDjA6wOgAowOMDmj2MfXoFvLk4nrdOjy66IbSkw4wOsDoAKMDjA4wOgD5+EsLB+/GvT5vebRK7/WkA4wOMDrA6ACjA4wOCEfG8fSuutZ1A/nr5r669mav/pGT6Aay77GwFU86wOgAowOMDjA6wOiAYfbbBsfT+CtnWvzv9fdvz6prLd6dbPHOZfGkM4wOMDrA6ACjA4wOMDogPUx3zffxHF+/Mj5eMCEeKnpBtPjVmOvH6ACjA4wOMDrA6IBmL5Bmr4xn863wynhdZP++4klnGB1gdIDRAUYHGL1vpZS/8GF1OTKsdsMAAAAASUVORK5CYII=",
  qC = [{
    id: 1,
    src: RC,
    title: "Beta Pixel",
    description: "Someone who's seen the First Pixel. Show respect. He has nightmares about cubes and flags."
  }, {
    id: 2,
    src: MC,
    title: "Pixel's 16 frens",
    description: "Invite 16 frens. A great company is the key to success!"
  }, {
    id: 3,
    src: UC,
    title: "Pixel Brotherhood",
    description: "Invite 64 frens. Where'd you get that charisma, buddy?"
  }, {
    id: 4,
    src: QC,
    title: "My pixel dudes",
    description: "Invite 128 frens. Admit it, are your relatives in the game too?"
  }, {
    id: 5,
    src: OC,
    title: "Thunder Pixel",
    description: "Paint 64,000 pixels. Is your finger on fire?"
  }, {
    id: 6,
    src: FC,
    title: "Master over Pixels",
    description: "Paint 128,000 pixels. Have you considered a career as a pixel artist?"
  }, {
    id: 7,
    src: zC,
    title: "Malevich",
    description: "Paint 512,000 pixels. Either the most dedicated artist or the most dedicated auto-clicker."
  }, {
    id: 11,
    src: GC,
    title: "Platinum Pixel",
    description: "Platinum League member. Your mom would be proud of you."
  }, {
    id: 13,
    src: LC,
    title: "Ambassador",
    description: "Invited 10,000 frens. You're either very friendly or a bot. A friendly bot?"
  }, {
    id: 14,
    src: HC,
    title: "Pixanos' Snap",
    description: "Use of Pixanos. Your snap destroyed half the world. Or did it save it?"
  }],
  YC = ({
    isPopupContent: n
  }) => {
    const {
      ready: t,
      data: s
    } = kt(n);
    return e.jsx("div", {
      className: V.achievements_container,
      children: qC.map(a => e.jsx(DC, {
        item: a,
        completed: t && s.achievements && s.achievements[a.id]
      }, a.id))
    })
  },
  VC = () => e.jsxs("div", {
    className: V.no_content,
    children: ["Something will happen here,", e.jsx("br", {}), " but not now."]
  }),
  XC = ({
    active: n,
    isPopupContent: t = !0
  }) => e.jsxs("div", {
    className: V.tabs_content,
    children: [n === "info" && e.jsx(CC, {
      isPopupContent: t
    }), n === "achievements" && e.jsx(YC, {
      isPopupContent: t
    }), n === "inventory" && e.jsx(VC, {})]
  }),
  WC = ({
    isPopupContent: n = !0
  }) => {
    const [t, s] = A.useState("info");
    return e.jsxs("div", {
      style: {
        width: "100%"
      },
      children: [e.jsx(bC, {
        active: t,
        setActive: s
      }), e.jsx(NC, {}), e.jsx(XC, {
        active: t,
        isPopupContent: n
      })]
    })
  },
  JC = "_layout_c6k10_1",
  ZC = "_close_button_c6k10_6",
  Yr = {
    layout: JC,
    close_button: ZC
  },
  Vr = () => {
    const n = _();
    return e.jsx("div", {
      className: Yr.close_button,
      onPointerUp: () => {
        n(gr())
      },
      children: e.jsx(P, {
        size: 26,
        children: ""
      })
    })
  },
  $a = ({
    isPopupContent: n = !0
  }) => {
    const t = n ? "Painter" : "My Profile";
    return e.jsxs("div", {
      className: F(V.container, !n && V.page),
      children: [n && e.jsx(Vr, {}), e.jsx("div", {
        children: e.jsx("span", {
          className: V.title,
          children: t
        })
      }), e.jsx(wC, {
        isPopupContent: n
      }), e.jsx(vC, {
        isPopupContent: n
      }), e.jsx(yC, {
        isPopupContent: n
      }), e.jsx(jC, {
        isPopupContent: n
      }), e.jsx(WC, {
        isPopupContent: n
      })]
    })
  },
  KC = () => {
    const n = _(),
      t = c(Le);
    return A.useEffect(() => (t && t.id && n(Q_.getListByUserId({
      userId: t.id
    })), () => {
      n(R_())
    }), [t]), e.jsx(ue, {
      children: e.jsx($a, {
        isPopupContent: !1
      })
    })
  },
  $C = "_container_1bw7p_1",
  eI = {
    container: $C
  },
  tI = "_container_12mk9_1",
  nI = "_page_12mk9_13",
  sI = "_id_12mk9_17",
  aI = "_title_12mk9_22",
  iI = "_avatar_container_12mk9_28",
  oI = "_avatar_12mk9_28",
  rI = "_text_container_12mk9_39",
  cI = "_dot_12mk9_45",
  lI = "_user_name_12mk9_50",
  dI = "_squad_slug_12mk9_56",
  uI = "_your_squad_button_12mk9_62",
  mI = "_join_squad_button_12mk9_75",
  AI = "_red_12mk9_91",
  pI = "_divider_12mk9_95",
  hI = "_tabs_content_12mk9_101",
  gI = "_content_info_12mk9_105",
  _I = "_content_info_item_12mk9_112",
  fI = "_content_info_item_title_12mk9_116",
  xI = "_content_info_item_value_12mk9_120",
  vI = "_content_top_12mk9_127",
  yI = "_content_top_item_12mk9_140",
  wI = "_content_top_item_image_12mk9_150",
  jI = "_content_top_name_12mk9_156",
  bI = "_content_top_arrow_12mk9_162",
  NI = "_gray_12mk9_166",
  D = {
    container: tI,
    page: nI,
    id: sI,
    title: aI,
    avatar_container: iI,
    avatar: oI,
    text_container: rI,
    dot: cI,
    user_name: lI,
    squad_slug: dI,
    your_squad_button: uI,
    join_squad_button: mI,
    red: AI,
    divider: pI,
    tabs_content: hI,
    content_info: gI,
    content_info_item: _I,
    content_info_item_title: fI,
    content_info_item_value: xI,
    content_top: vI,
    content_top_item: yI,
    content_top_item_image: wI,
    content_top_name: jI,
    content_top_arrow: bI,
    gray: NI
  },
  Xr = ({
    data: n,
    ready: t
  }) => {
    let s = at;
    return t && n.squad.logo && n.squad.logo !== "" && (s = n.squad.logo), e.jsx("div", {
      className: D.avatar_container,
      children: e.jsx("img", {
        alt: "avatar",
        className: D.avatar,
        src: s
      })
    })
  },
  Wr = ({
    data: n,
    ready: t
  }) => {
    if (!t) return e.jsx(et, {
      show: !t,
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
      return Gn(((i = n == null ? void 0 : n.squad) == null ? void 0 : i.name) || "No name")
    })();
    return e.jsx("div", {
      className: D.text_container,
      children: e.jsx("span", {
        className: D.user_name,
        children: a
      })
    })
  },
  Jr = ({
    data: n,
    ready: t
  }) => {
    var a;
    return t ? ((a = n == null ? void 0 : n.squad) == null ? void 0 : a.slug) && n.squad.slug !== null ? e.jsx("div", {
      className: D.text_container,
      children: e.jsx(_n, {
        address: `${Nt}?startapp=${btoa(`id=${n.squad.id}`)}`,
        display: n.squad.slug,
        limit: 18
      })
    }) : e.jsx("div", {
      className: D.text_container,
      children: e.jsx("span", {
        className: D.squad_slug,
        children: "No squad slug"
      })
    }) : e.jsx(et, {
      show: !t,
      children: e.jsx("div", {
        className: D.text_container,
        children: e.jsx("span", {
          children: "Loading..."
        })
      })
    })
  },
  Zr = ({
    data: n,
    ready: t
  }) => {
    const s = c(i => i.user.user);
    return t ? s !== null && s.squad.id !== null && s.squad.id === n.squad.id ? e.jsxs("div", {
      className: D.your_squad_button,
      onPointerUp: () => {
        X(`https://t.me/${Nt}?startapp=${btoa(`id=${n.squad.id}`)}`)
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
        X(`https://t.me/${Nt}?startapp=${btoa(`id=${n.squad.id}`)}`)
      },
      className: D.join_squad_button,
      children: "Join squad"
    }) : null
  },
  CI = ({
    active: n,
    setActive: t
  }) => e.jsx(mn, {
    style: {},
    children: e.jsx(Oe, {
      active: n === "info",
      setActive: () => t("info"),
      children: "Info"
    })
  }),
  II = () => e.jsx("div", {
    className: D.divider
  }),
  PI = ({
    data: n,
    ready: t
  }) => e.jsxs("div", {
    className: D.content_info,
    children: [e.jsxs("div", {
      className: D.content_info_item,
      children: [e.jsx("div", {
        className: D.content_info_item_title,
        children: "League"
      }), e.jsx("div", {
        className: D.content_info_item_value,
        children: t ? n.league : "-"
      })]
    }), e.jsxs("div", {
      className: D.content_info_item,
      children: [e.jsx("div", {
        className: D.content_info_item_title,
        children: "Place"
      }), e.jsx("div", {
        className: D.content_info_item_value,
        children: t ? ke({
          num: n.rank
        }) : 0
      })]
    }), e.jsxs("div", {
      className: D.content_info_item,
      children: [e.jsx("div", {
        className: D.content_info_item_title,
        children: "Score"
      }), e.jsx("div", {
        className: D.content_info_item_value,
        children: t ? ke({
          num: n.squad.scoredRepaints
        }) : 0
      })]
    }), e.jsxs("div", {
      className: D.content_info_item,
      children: [e.jsx("div", {
        className: D.content_info_item_title,
        children: "Members"
      }), e.jsx("div", {
        className: D.content_info_item_value,
        children: t ? ke({
          num: n.squad.players
        }) : 0
      })]
    }), e.jsxs("div", {
      className: D.content_info_item,
      children: [e.jsx("div", {
        className: D.content_info_item_title,
        children: "Pixels recolored"
      }), e.jsx("div", {
        className: D.content_info_item_value,
        children: t ? ke({
          num: n.squad.totalRepaints
        }) : 0
      })]
    }), e.jsxs("div", {
      className: D.content_info_item,
      children: [e.jsx("div", {
        className: D.content_info_item_title,
        children: "PX mined"
      }), e.jsx("div", {
        className: D.content_info_item_value,
        children: t ? ke({
          num: n.squad.totalBalance
        }) : 0
      })]
    })]
  }),
  SI = [{
    name: "123",
    avatar: Ot
  }, {
    name: "123",
    avatar: ""
  }, {
    name: "123",
    avatar: null
  }, {
    name: "123",
    avatar: Ot
  }, {
    name: "123",
    avatar: Ot
  }],
  BI = () => e.jsx("div", {
    className: D.content_top,
    children: SI.map((n, t) => {
      const s = n.avatar && n.avatar !== "" ? n.avatar : at;
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
            children: t + 1
          }), e.jsx("span", {
            className: D.gray,
            children: "•"
          }), e.jsx("span", {
            children: n.name
          })]
        }), e.jsx("div", {
          className: D.content_top_arrow,
          children: e.jsx(P, {
            children: ""
          })
        })]
      }, t)
    })
  }),
  TI = ({
    isPopupContent: n,
    active: t,
    data: s,
    ready: a
  }) => e.jsxs("div", {
    className: D.tabs_content,
    children: [t === "info" && e.jsx(PI, {
      isPopupContent: n,
      data: s,
      ready: a
    }), t === "top" && e.jsx(BI, {})]
  }),
  Kr = ({
    data: n,
    ready: t
  }) => {
    const [s, a] = A.useState("info");
    return e.jsxs("div", {
      style: {
        width: "100%"
      },
      children: [e.jsx(CI, {
        active: s,
        setActive: a
      }), e.jsx(II, {}), e.jsx(TI, {
        active: s,
        data: n,
        ready: t
      })]
    })
  },
  EI = () => {
    const n = _(),
      t = c(o => o.user.user),
      a = c(o => o.squad.getInfoFetchStatus) === p.fulfilled,
      i = c(o => o.squad.info);
    return A.useEffect(() => {
      t && t.squad && t.squad.id && n(Aa.getInfo({
        id: t.squad.id
      }))
    }, []), e.jsx(ue, {
      children: e.jsxs("div", {
        className: eI.container,
        children: [e.jsx(Xr, {
          data: i,
          ready: a
        }), e.jsx(Wr, {
          data: i,
          ready: a
        }), e.jsx(Jr, {
          data: i,
          ready: a
        }), e.jsx(Zr, {
          data: i,
          ready: a
        }), e.jsx(Kr, {
          data: i,
          ready: a
        })]
      })
    })
  },
  kI = ({
    setFile: n,
    loading: t
  }) => {
    const s = ["image/png", "image/webp", "image/svg+xml", "image/gif", "image/bmp", "image/tiff"];
    return e.jsxs("div", {
      className: ie.file_button_container,
      children: [e.jsx("input", {
        type: "file",
        id: "custom-input",
        accept: s.join(", "),
        disabled: t,
        onChange: a => {
          var i;
          try {
            const o = (i = a.target.files) == null ? void 0 : i[0];
            if (!o) return;
            const r = new FileReader;
            r.addEventListener("load", l => {
              const d = document.createElement("img");
              d.addEventListener("load", () => {
                n(d)
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
        className: ie.file_button,
        children: "Upload a picture"
      })]
    })
  },
  DI = ({
    dataUrl: n,
    loading: t,
    templateSize: s
  }) => e.jsx("div", {
    className: ie.preview_container,
    children: e.jsxs("div", {
      className: ie.preview_image_container,
      children: [e.jsx("img", {
        alt: "templateImage",
        id: "templateImage",
        className: ie.preview_image,
        src: n
      }), t && e.jsx("div", {
        className: ie.preview_image_loader,
        children: "Loading..."
      })]
    })
  }),
  RI = n => {
    const t = new Uint8Array(n.data);
    for (let s = 0; s < t.length; s += 4) {
      const a = t[s],
        i = t[s + 1],
        o = t[s + 2];
      if (t[s + 3] === 0) continue;
      let l = $e[0],
        d = 1 / 0;
      for (const h of $e) {
        const g = sn.deltaE(sn(on(a, i, o)), sn(h));
        g < d && (d = g, l = h)
      }
      const m = Ut(l);
      n.data[s] = m.r, n.data[s + 1] = m.g, n.data[s + 2] = m.b, n.data[s + 3] = 255
    }
  },
  MI = ({
    loading: n,
    imageData: t,
    posX: s,
    posY: a
  }) => {
    const i = _(),
      o = te(),
      r = c(h => h.template.myTemplate),
      l = c(h => h.user.user),
      [d, m] = A.useState(!1);
    return e.jsx("div", {
      className: ie.file_button_container,
      children: e.jsx("button", {
        disabled: n || d,
        className: ie.file_button,
        onPointerUp: async () => {
          try {
            m(!0);
            const h = new Blob([t.data], {
              type: "application/octet-stream"
            });
            if ((await qe.uploadTemplate({
                blob: h,
                posX: s,
                posY: a
              })).status === 200) {
              r && b.mainImage.worldTemplate.deleteTemplate(r.id);
              const f = await i(It.getTemplateById({
                  id: l.id
                })),
                j = {
                  ...f.payload,
                  url: `${f.payload.url}?time=${Date.now()}`,
                  type: De.my
                };
              i(N_(j)), i(vi()), await b.mainImage.worldTemplate.add(j), i(z({
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
  UI = ({
    templateSize: n,
    setTemplateSize: t,
    coords: s,
    setCoords: a
  }) => (A.useState([16, 32, 64, 128]), e.jsxs("div", {
    className: ie.template_coords,
    children: [e.jsx("div", {
      className: ie.template_coordinates_title,
      children: "Input template coordinates:"
    }), e.jsxs("div", {
      className: ie.template_coords_container,
      children: [e.jsxs("div", {
        className: ie.coords_item,
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
            Ct(r) && a(r)
          },
          className: ie.coords_input
        })]
      }), e.jsxs("div", {
        className: ie.coords_item,
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
            Ct(r) && a(r)
          },
          className: ie.coords_input
        })]
      })]
    })]
  })),
  QI = () => e.jsxs("div", {
    className: ie.instruction_container,
    children: [e.jsx("div", {
      className: ie.img_container,
      children: e.jsx("img", {
        alt: "img",
        className: ie.image,
        src: ha
      })
    }), e.jsx("div", {
      className: ie.instruction_text,
      children: "Upload a picture and create a template"
    })]
  }),
  OI = () => {
    _(), c(Le);
    const [n, t] = A.useState(null), [s, a] = A.useState(null), [i, o] = A.useState(null), [r, l] = A.useState(16), [d, m] = A.useState({
      x: "",
      y: ""
    }), [h, g] = A.useState(!1);
    return A.useEffect(() => {}, []), A.useEffect(() => {
      if (n !== null) {
        g(!0);
        const f = async () => {
          const j = document.createElement("canvas"),
            x = j.getContext("2d");
          x.imageSmoothingEnabled = !1;
          const y = n.width / n.height;
          let B, C;
          y > 1 ? (B = r, C = r / y) : (C = r, B = r * y);
          const Ce = (r - B) / 2,
            be = (r - C) / 2;
          j.width = r, j.height = r, x.drawImage(n, Ce, be, B, C);
          const Y = x.getImageData(0, 0, r, r);
          RI(Y), x.putImageData(Y, 0, 0), a(Y), o(j.toDataURL())
        };
        setTimeout(() => {
          f().then(() => {
            g(!1)
          })
        }, 100)
      }
    }, [n, r]), e.jsxs(ue, {
      children: [i === null && e.jsx(QI, {}), i !== null && e.jsx(DI, {
        loading: h,
        dataUrl: i,
        templateSize: r
      }), i !== null && e.jsx(sN, {
        templateSize: r,
        setTemplateSize: l
      }), i !== null && e.jsx(UI, {
        coords: d,
        setCoords: m,
        templateSize: r,
        setTemplateSize: l
      }), n === null && e.jsx(kI, {
        setFile: t,
        templateSize: r,
        loading: h
      }), n !== null && e.jsx(MI, {
        loading: h,
        imageData: s,
        posX: d.x,
        posY: d.y
      })]
    })
  },
  FI = "_layout_10ga3_1",
  zI = "_container_10ga3_9",
  GI = "_header_10ga3_18",
  LI = "_bg_image_10ga3_25",
  HI = "_title_10ga3_34",
  qI = "_description_10ga3_43",
  YI = "_timer_10ga3_52",
  VI = "_timer_inner_10ga3_61",
  XI = "_timer_text_10ga3_69",
  WI = "_line_10ga3_73",
  JI = "_requirements_title_10ga3_79",
  ZI = "_requirements_10ga3_79",
  KI = "_item_10ga3_94",
  $I = "_item_image_10ga3_107",
  eP = "_main_info_10ga3_113",
  tP = "_other_criteria_10ga3_120",
  nP = "_gray_10ga3_125",
  sP = "_soon_10ga3_129",
  aP = "_icon_10ga3_134",
  iP = "_completed_icon_10ga3_145",
  oP = "_not_completed_icon_10ga3_149",
  Q = {
    layout: FI,
    container: zI,
    header: GI,
    bg_image: LI,
    title: HI,
    description: qI,
    timer: YI,
    timer_inner: VI,
    timer_text: XI,
    line: WI,
    requirements_title: JI,
    requirements: ZI,
    item: KI,
    item_image: $I,
    main_info: eP,
    other_criteria: tP,
    gray: nP,
    soon: sP,
    icon: aP,
    completed_icon: iP,
    not_completed_icon: oP
  },
  Cn = ({
    success: n
  }) => n ? e.jsx("div", {
    className: F(Q.completed_icon, Q.icon),
    children: e.jsx(P, {
      size: 14,
      children: ""
    })
  }) : e.jsx("div", {
    className: F(Q.not_completed_icon, Q.icon),
    children: e.jsx(P, {
      size: 14,
      children: ""
    })
  }),
  rP = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAIAAAABc2X6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAF42lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDYgNzkuMTY0NjQ4LCAyMDIxLzAxLzEyLTE1OjUyOjI5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjIuMiAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDI0LTEyLTExVDAwOjIzOjMyKzA0OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyNC0xMi0xMVQwMTowNzo1OSswNDowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyNC0xMi0xMVQwMTowNzo1OSswNDowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDplZWM0MWRiNi01NTc4LTA5NDQtOTEwMC0xZmFjNmI2OWU4ZjMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N2Y1OWJhYWItYjg5My01OTRjLWIzOGEtNmZhMzc5YTg0OWQ3IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6N2Y1OWJhYWItYjg5My01OTRjLWIzOGEtNmZhMzc5YTg0OWQ3Ij4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo3ZjU5YmFhYi1iODkzLTU5NGMtYjM4YS02ZmEzNzlhODQ5ZDciIHN0RXZ0OndoZW49IjIwMjQtMTItMTFUMDA6MjM6MzIrMDQ6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi4yIChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZWVjNDFkYjYtNTU3OC0wOTQ0LTkxMDAtMWZhYzZiNjllOGYzIiBzdEV2dDp3aGVuPSIyMDI0LTEyLTExVDAxOjA3OjU5KzA0OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjIuMiAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+UlXQ3AAAAMdJREFUeNrt2jEKgzAUBmAv4+rmAdw7ufUMTr1Dj+MRO7hJhwp95CWCfvBPj4TwLT8hpOuH6VbpgIGBgYGBgYGBgYGBgYGBgYGBgS8JXtbP6QEGBs4Bz693KFl7gYGB80srurf2WcDAwL8zPp57WoK/zwUGBs55AIiWSnRNeVEBAwNnFlh0TXlRAQMDZ+L/mecigYGBSy8kJXNgYOBzwEcFdpR6RQUMDFwL3wYJDAxcC3+Ln3jAwD6XAgMDAwMDAwMDAwMDt84G/cS8L/nGwNwAAAAASUVORK5CYII=",
  cP = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAABfElEQVR4nO3csU7CYBRA4UrYZOIB3NBNmdzrbHgZnsO3YTS6uznCCGElDDrLxNBL0lIO7f/HnG8Dg21OLjetEG8mj+VfoYsNTMcYEDIgZEDIgJABIQNCBoQMCBkQMiBkQMiAkAEhA0IGhAwIGRAyIDTM9cRW3x+Vx/dPL8nOpY4TCBkQMiCUzQ6MOy/6Wowqzzy//vR3cjWcQMiAkAGhZDuwaeftN7Pan+eyE51AyICQAaGr7cCmndakaefR42/fp5XH5XyMjnfkBEIGhAwIdfYd6Xid1rff5bpyxGvtvMgJhAwIGRDq7F6Y3pu23aF97bzICYQMCBkQyuYzkc+3XXgm7XXkuZxAyICQAaHeduDpjvsfsv1yUbwwjm4f7lKc1gnfwpABoc7+Hth257W9d+3695/LCYQMCBkQSnYZQ3dSfH2q60wnEDIgZEDI/50FOYGQASEDQgaEDAgZEDIgZEDIgJABIQNCBoQMCBkQMiBkQMiAkAEhAxJFURwAJr49NLZT3VgAAAAASUVORK5CYII=",
  lP = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAABF0lEQVR4nO3csW3CYBhFUYNYhZaSOkyRGdmCOkslLfxNpFxsYnNORwW6+vREY++Op8v3xJ/tpWsEjASMBIwEjASMBIwEjASMBIwEjASMBIwEjASMBIwEjASMBIwEjASMDqv+9XfOH58Pn79u10W+1wVGAkYCRqvdwN82b6lNdIGRgJGA0WIbWDepbt5cm+gCIwEjAaPZNnDuzfI/cCMEjASMnraB77J5IxcYCRgJGM32pNJWN2/kAiMBIwGjxZ7W3MrmjVxgJGAkYPSyJ9bXunkjFxgJGAkY/Zu3dqxl80YuMBIwEjDy5qLIBUYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgIW0zT9AOlGWxe1B8qHAAAAAElFTkSuQmCC",
  dP = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAABZUlEQVR4nO3cz4nCQBhA8cliBcI2sFfBsx7FHrYFSxArEDvQFuzBs54Ft4hdsIV4Tg4O8eWbjfB+t+CfwONjmBG1SvvfOullH6ZjDAgZEDIgZEDIgJABIQNCBoQMCBkQMiBkQMiAkAEhA0IGhAwIGRAyIGRAaFT6hvXq8+nj1eEv9PV9cwIhA0IGhAwIGRAyIGRAqPg+MCe3zxsaJxAyIGRAKHwNzK1pk/WxcX3bfaPnt+8XfTZ2AiEDQgaEel8Du+7jfr4Woc+PXhOdQMiAkAGhfz8Ld10zh3ZWdgIhA0IGhHpfA+fbU+P6vFl2ejz6fmk8RfdrcwIhA0IGhMJ/sT67XxvX2TWqo9z7XXpe89qcQMiAkAGh4v/aEX2W9fuBb8aAkAGh4p8H0n1fVvC+r80JhAwIGRAqvgZGn01LcwIhA0IGhAwIGRAyIGRAyICQASEDQgaEDAgZEDIgZEDIgJABiZTSA9erPYxaPJ1yAAAAAElFTkSuQmCC",
  uP = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAABkklEQVR4nO3cwUnEQBSA4VmxAsEGvC541qPYgy1YwrIViB1oC/bgWc+CFqFgC9lznixx8s9L5vB/t4Am7M/jMbuHbMrT91A024npGANCBoQMCBkQMiBkQMiAkAEhA0IGhAwIGRAyIGRAyICQASEDQgaEDAgZEDptdaPh/nytzzDL5vmnyX2cQMiAkAGhZjsw2u5e0P9/Pt6NrlvfrxUnEDIgZEAobQfGnUPPXV8XN1V/v9S51AmEDAgZEGq2A+M5LevcNdefc2TlTj3GCYQMCBkQarYDp85p8VzW6ve4Y/ePas+R/+UEQgaEDAilfRe+fngdXb/tb3M/ycTzy9llynOcQMiAkAGhtB34HnZO3ElD2Im158J47ov3j8/P4gRCBoQMCKXtwCh7Jy218yInEDIgZEBotbd2XP1+jK5rvyuvde6LnEDIgJABoW7eXDS1E3vZeZETCBkQMiDU7dvb4k7sZedFTiBkQMiA0GK/B9bqdedFTiBkQMiAkAEhA0IGhAwIGRAyIGRAyICQASEDEqWUA5NwRdaPa632AAAAAElFTkSuQmCC",
  mP = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAABFElEQVR4nO3ZwU0DMRRAQQdRQaS0wZ0zxVBDKqAFKIZzqAWKCC3EPBk50sx9V96nL2stH8b793XwZw/SNQJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkaPq158fT391zfc5PDxs+S9JjASMBIwEjASMBIwEjASMBIwEjASMFp2Fp71/PY59cTl/LLDsk1gJWAkYLTNHvh1fNpgFfNMYCRgJGAkYCRgJGAkYLTNf+Bu98i3MoGRgJGAkYCRgJGAkYCRgJGAkYCRgNGys/DsPe9yi+5cTGAkYCRgtGwPvNd73lkmMBIwEjASMBIwEjASMBIwEjASMBIwEjASMBIwEjASMBKwGGP8AtVUDnVJr20VAAAAAElFTkSuQmCC",
  AP = "/assets/gp_ase_f_outl-FdQpX43h.gif",
  pP = "_container_1kwij_1",
  hP = "_title_1kwij_10",
  gP = "_instruction_1kwij_15",
  _P = "_required_wallet_1kwij_20",
  fP = "_divider_1kwij_24",
  xP = "_input_1kwij_30",
  vP = "_button_1kwij_58",
  yP = "_active_row_1kwij_87",
  wP = "_row_title_1kwij_87",
  Xe = {
    container: pP,
    title: hP,
    instruction: gP,
    required_wallet: _P,
    divider: fP,
    input: xP,
    button: vP,
    active_row: yP,
    row_title: wP
  },
  eo = "data:image/svg+xml,%3csvg%20height='18'%20viewBox='0%200%2017%2018'%20width='17'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20fill='none'%20fill-rule='evenodd'%20stroke='%23fff'%20stroke-width='1.7'%3e%3cpath%20d='m1.84%203h13.3c.28%200%20.5.22.5.5%200%20.09-.02.17-.06.25l-6.33%2011.18c-.27.48-.88.65-1.36.38-.16-.09-.3-.23-.38-.39l-6.11-11.18c-.13-.24-.04-.55.2-.68.08-.04.16-.06.24-.06z'/%3e%3cpath%20d='m8.5%2015v-12'/%3e%3c/g%3e%3c/svg%3e",
  jP = ({
    show: n,
    setShow: t
  }) => {
    const s = _(),
      a = te(),
      [i] = cn(),
      o = zn(),
      r = ll(o),
      l = c(y => y.mining.tasks[v.walletVerification]),
      d = c(y => y.user.verificatedWallet),
      m = oi(d),
      h = qs(m),
      g = c(y => y.user.hasCaptchaCode);
    console.log("connectedUQ: ", o), console.log("connectedEQ: ", r), console.log("verificatedWallet: ", d), console.log("verificatedWalletUQ: ", m), console.log("formattedVerificatedWalletUQ: ", h);
    const [f, j] = A.useState(""), x = async () => {
      try {
        if (d !== r) {
          s(z({
            id: performance.now(),
            text: `Use ${qs(h)} wallet`
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
    return e.jsx(zt, {
      show: n,
      setShow: () => t(!1),
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
              src: eo
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
                src: eo
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
                const B = await s(Fe.checkCaptcha({
                  wallet: r,
                  captcha: f
                }));
                if (B.meta.requestStatus === p.rejected) throw new Error("error");
                if ((y = B.payload) != null && y.success) s(z({
                  id: performance.now(),
                  text: "Success!",
                  icon: ""
                })), s(am({
                  task: v.checkCaptcha,
                  value: !0
                })), t(!1);
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
  bP = () => {
    const n = _(),
      t = te(),
      s = c(ra),
      a = c(oa),
      i = c(U => U.user.pixelCoins),
      o = c(Ai.selectAll),
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
      g === p.idle && n(Fe.getVerificatedWallet())
    }, [g]), A.useEffect(() => {
      r === p.idle && n(Er.getList())
    }, [r]), A.useEffect(() => {
      x === p.idle && n(Fe.checkHasCaptchaCode())
    }, [x]);
    let y = 0,
      B = 0;
    i >= 1e5 && (y += 1), h && (y += 1), f && (y += 1), o.forEach(U => {
      U.timestamp && (B += 1)
    });
    const C = () => {
        const U = `${window.location.origin}/stars?initData=${btoa(window.Telegram.WebApp.initData)}`;
        St(U)
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
      children: [e.jsx(jP, {
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
              src: AP,
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
                children: [e.jsx(P, {
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
                  src: mP
                })
              }), e.jsx("div", {
                className: Q.main_info,
                children: e.jsxs("div", {
                  children: ["Total balance: 100 000 ", e.jsx(M, {})]
                })
              }), e.jsx(Cn, {
                success: l
              })]
            }), e.jsxs("div", {
              className: Q.item,
              onPointerUp: async () => {
                h || (t.push("/claiming"), setTimeout(() => {
                  const U = document.getElementById("ton_wallet_connect_task_div");
                  U && U.scrollIntoView({
                    block: "center"
                  })
                }, 100))
              },
              children: [e.jsx("div", {
                children: e.jsx("img", {
                  className: Q.item_image,
                  src: uP
                })
              }), e.jsx("div", {
                className: Q.main_info,
                children: e.jsx("div", {
                  children: "Connect TON"
                })
              }), e.jsx(Cn, {
                success: h
              })]
            }), e.jsxs("div", {
              className: Q.item,
              onPointerUp: Y,
              children: [e.jsx("div", {
                children: e.jsx("img", {
                  className: Q.item_image,
                  src: dP
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
              }), e.jsx(Cn, {
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
                const U = await n(xe.checkTask({
                  key: v.spendStars,
                  reward: 512,
                  disableFailPopup: !0
                }));
                U.meta.requestStatus === p.fulfilled && U.payload[v.spendStars] || t.push("/stars")
              },
              children: [e.jsx("div", {
                children: e.jsx("img", {
                  className: Q.item_image,
                  src: cP
                })
              }), e.jsx("div", {
                className: Q.main_info,
                children: "Purchases for Stars"
              }), e.jsx(Cn, {
                success: d
              })]
            }), e.jsxs("div", {
              className: Q.item,
              onPointerUp: async () => {
                if (m) return;
                const U = await n(xe.checkTask({
                  key: v.spendTokens,
                  reward: 512,
                  disableFailPopup: !0
                }));
                U.meta.requestStatus === p.fulfilled && U.payload[v.spendTokens] || C()
              },
              children: [e.jsx("div", {
                children: e.jsx("img", {
                  className: Q.item_image,
                  src: rP
                })
              }), e.jsx("div", {
                className: Q.main_info,
                children: "Purchases for crypto"
              }), e.jsx(Cn, {
                success: m
              })]
            }), e.jsxs("div", {
              className: Q.item,
              onPointerUp: () => {
                t.push("/daily")
              },
              children: [e.jsx("div", {
                children: e.jsx("img", {
                  className: Q.item_image,
                  src: lP
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
  NP = "_general_info_container_1u2nd_1",
  CP = "_img_container_1u2nd_7",
  IP = "_image_1u2nd_17",
  PP = "_image_cup_1u2nd_23",
  SP = "_image_glow_container_1u2nd_29",
  BP = "_image_glow_1u2nd_29",
  TP = "_rotate_1u2nd_1",
  EP = "_image_glow_reverse_1u2nd_48",
  kP = "_title_1u2nd_53",
  DP = "_description_container_1u2nd_60",
  RP = "_description_1u2nd_60",
  MP = "_gold_1u2nd_73",
  We = {
    general_info_container: NP,
    img_container: CP,
    image: IP,
    image_cup: PP,
    image_glow_container: SP,
    image_glow: BP,
    rotate: TP,
    image_glow_reverse: EP,
    title: kP,
    description_container: DP,
    description: RP,
    gold: MP
  },
  UP = "_info_layout_1p9dg_1",
  QP = {
    info_layout: UP
  },
  OP = n => {
    const t = new Uint8Array(n.data);
    for (let s = 0; s < t.length; s += 4) {
      const a = t[s],
        i = t[s + 1],
        o = t[s + 2];
      if (t[s + 3] === 0) continue;
      let l = $e[0],
        d = 1 / 0;
      for (const h of $e) {
        const g = sn.deltaE(sn(on(a, i, o)), sn(h));
        g < d && (d = g, l = h)
      }
      const m = Ut(l);
      n.data[s] = m.r, n.data[s + 1] = m.g, n.data[s + 2] = m.b, n.data[s + 3] = 255
    }
  },
  FP = "_instruction_container_17lvx_1",
  zP = "_img_container_17lvx_9",
  GP = "_img_inner_container_17lvx_16",
  LP = "_image_17lvx_22",
  HP = "_image_status_17lvx_30",
  qP = "_image_status_rejected_17lvx_45",
  YP = "_image_status_review_17lvx_49",
  VP = "_image_status_approved_17lvx_53",
  XP = "_copy_button_container_17lvx_57",
  WP = "_button_copy_17lvx_65",
  JP = "_gray_17lvx_71",
  ZP = "_preview_container_17lvx_75",
  KP = "_preview_image_container_17lvx_81",
  $P = "_preview_image_17lvx_81",
  eS = "_preview_image_loader_17lvx_94",
  tS = "_template_size_17lvx_109",
  nS = "_template_title_17lvx_117",
  sS = "_template_size_container_17lvx_122",
  aS = "_template_size_item_17lvx_128",
  iS = "_template_size_item_active_17lvx_136",
  oS = "_template_coords_17lvx_141",
  rS = "_template_coordinates_title_17lvx_151",
  cS = "_template_coords_container_17lvx_156",
  lS = "_coords_item_17lvx_163",
  dS = "_coords_input_17lvx_169",
  uS = "_file_button_container_17lvx_178",
  mS = "_file_button_17lvx_178",
  me = {
    instruction_container: FP,
    img_container: zP,
    img_inner_container: GP,
    image: LP,
    image_status: HP,
    image_status_rejected: qP,
    image_status_review: YP,
    image_status_approved: VP,
    copy_button_container: XP,
    button_copy: WP,
    gray: JP,
    preview_container: ZP,
    preview_image_container: KP,
    preview_image: $P,
    preview_image_loader: eS,
    template_size: tS,
    template_title: nS,
    template_size_container: sS,
    template_size_item: aS,
    template_size_item_active: iS,
    template_coords: oS,
    template_coordinates_title: rS,
    template_coords_container: cS,
    coords_item: lS,
    coords_input: dS,
    file_button_container: uS,
    file_button: mS
  },
  Zt = {
    approved: "approved",
    review: "review",
    rejected: "rejected"
  },
  AS = () => {
    const n = _(),
      t = c(a => a.tournament.myTemplate);
    let s = Zt.review;
    return t && t.approved && (s = Zt.approved), t && (t.deletedAt || t.approved === !1) && (s = Zt.rejected), e.jsxs("div", {
      className: me.instruction_container,
      children: [t && e.jsx("div", {
        children: "Current template:"
      }), e.jsx("div", {
        className: me.img_container,
        children: e.jsxs("div", {
          className: me.img_inner_container,
          children: [e.jsx("img", {
            alt: "img",
            className: me.image,
            src: t ? `${t.url}?time=${Date.now()}` : ha,
            onPointerUp: () => {
              t.id && t.id !== 0 && n(pi(t))
            }
          }), s === Zt.review && e.jsx("div", {
            className: F(me.image_status, me.image_status_review),
            children: "On review"
          }), s === Zt.rejected && e.jsx("div", {
            className: F(me.image_status, me.image_status_rejected),
            children: "Rejected"
          }), s === Zt.approved && e.jsx("div", {
            className: F(me.image_status, me.image_status_approved),
            children: "Approved"
          })]
        })
      }), e.jsx("div", {
        className: me.copy_button_container,
        children: e.jsx(Lt, {
          url: `${Pt}?startapp=f${t==null?void 0:t.id}_t`,
          className: me.button_copy,
          text: "Copy template link"
        })
      })]
    })
  },
  pS = ({
    dataUrl: n,
    loading: t,
    templateSize: s
  }) => e.jsx("div", {
    className: me.preview_container,
    children: e.jsxs("div", {
      className: me.preview_image_container,
      children: [e.jsx("img", {
        alt: "templateImage",
        id: "templateImage",
        className: me.preview_image,
        src: n
      }), t && e.jsx("div", {
        className: me.preview_image_loader,
        children: "Loading..."
      })]
    })
  }),
  hS = ({
    templateSize: n,
    setTemplateSize: t
  }) => {
    const [s] = A.useState([n]);
    return e.jsxs("div", {
      className: me.template_size,
      children: [e.jsx("div", {
        className: me.template_title,
        children: "Template Size"
      }), e.jsx("div", {
        className: me.template_size_container,
        children: s.map(a => {
          const i = [me.template_size_item];
          return n === a && i.push(me.template_size_item_active), e.jsx("div", {
            className: i.join(" "),
            onPointerUp: () => {
              t(a)
            },
            children: `${a} X ${a}`
          }, a)
        })
      }), " "]
    })
  },
  gS = ({
    coords: n,
    setCoords: t
  }) => null,
  _S = () => {
    _(), c(Le);
    const n = c(hi),
      t = fo[n],
      [s, a] = A.useState(null),
      [i, o] = A.useState(null),
      [r, l] = A.useState(null),
      [d, m] = A.useState((t == null ? void 0 : t.templateSize) || 256),
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
          const _t = B.getImageData(0, 0, d, d);
          OP(_t), B.putImageData(_t, 0, 0), o(_t), l(y.toDataURL())
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
      children: [r === null && e.jsx(AS, {}), r !== null && e.jsx(pS, {
        loading: f,
        dataUrl: r,
        templateSize: d
      }), r !== null && e.jsx(hS, {
        templateSize: d,
        setTemplateSize: m
      }), r !== null && e.jsx(gS, {
        coords: h,
        setCoords: g,
        templateSize: d,
        setTemplateSize: m
      }), e.jsxs("div", {
        style: {
          marginTop: 20,
          textAlign: "center"
        },
        children: ["To participate in the new round, please upload a new template! Size:", t == null ? void 0 : t.templateSize, "х", t == null ? void 0 : t.templateSize, ".Templates with no artistic value will be rejected."]
      })]
    })
  },
  fS = "_layout_1c7e5_1",
  xS = "_container_1c7e5_5",
  vS = "_button_container_1c7e5_11",
  yS = "_button_1c7e5_11",
  wS = "_end_of_list_button_1c7e5_27",
  jt = {
    layout: fS,
    container: xS,
    button_container: vS,
    button: yS,
    end_of_list_button: wS
  },
  jS = "_template_item_container_1c93x_1",
  bS = "_template_item_inner_1c93x_12",
  NS = "_template_item_picked_1c93x_28",
  CS = "_template_item_rejected_1c93x_43",
  IS = "_template_item_shadow_1c93x_58",
  PS = "_template_rank_1c93x_70",
  SS = "_template_recolors_1c93x_90",
  BS = "_template_recolors_pixel_1c93x_105",
  TS = "_template_image_1c93x_112",
  ct = {
    template_item_container: jS,
    template_item_inner: bS,
    template_item_picked: NS,
    template_item_rejected: CS,
    template_item_shadow: IS,
    template_rank: PS,
    template_recolors: SS,
    template_recolors_pixel: BS,
    template_image: TS
  },
  $r = ({
    item: n,
    rank: t,
    repaints: s,
    style: a = {}
  }) => {
    const i = _(),
      o = c(d => d.tournament.selectedTemplate),
      r = o && o.id === n.id,
      l = A.useRef(!0);
    return A.useEffect(() => {
      const d = setTimeout(() => {
        l.current = !1
      }, 100);
      return () => {
        clearTimeout(d)
      }
    }, []), e.jsxs("div", {
      className: ct.template_item_container,
      style: {
        ...a
      },
      onPointerUp: async () => {
        l.current || n.id && n.id !== 0 && i(pi(n))
      },
      children: [e.jsx("div", {
        className: ct.template_item_inner,
        children: e.jsx("img", {
          alt: "image",
          className: ct.template_image,
          src: `${n.url}`
        })
      }), r && n.approved !== !1 && e.jsx("div", {
        className: ct.template_item_picked,
        children: "Picked"
      }), n.approved === !1 && e.jsx("div", {
        className: ct.template_item_rejected,
        children: "Rejected"
      }), t && e.jsx("div", {
        className: ct.template_rank,
        children: t
      }), s !== void 0 && s !== 0 && e.jsx("div", {
        className: ct.template_item_shadow
      }), s !== void 0 && s !== 0 && e.jsxs("div", {
        className: ct.template_recolors,
        children: [e.jsx("div", {
          className: ct.template_recolors_pixel
        }), an(s)]
      })]
    })
  },
  ES = () => {
    const n = _(),
      t = A.useRef(null),
      s = c(r => r.tournament.approvedTemplatesListStatus),
      a = c(r => r.tournament.approvedTemplatesListOffset),
      i = c(r => r.tournament.approvedTemplatesListLimit),
      o = c(r => r.tournament.approvedTemplatesListTotal);
    return A.useEffect(() => {}, [s, a, i, o]), a >= o && s !== p.pending ? e.jsx("div", {
      className: jt.button_container,
      children: e.jsx("button", {
        className: jt.end_of_list_button,
        children: "That's all fren"
      })
    }) : e.jsx("div", {
      className: jt.button_container,
      children: e.jsx("button", {
        ref: t,
        disabled: s === p.pending,
        className: jt.button,
        onPointerUp: () => {
          n(st.getApprovedList({
            offset: a,
            limit: i
          }))
        },
        children: s === p.pending ? "Loading..." : "Load more"
      })
    })
  },
  kS = () => {
    const n = _(),
      t = c(i => i.tournament.approvedTemplatesListOffset),
      s = c(i => i.tournament.approvedTemplatesListLimit),
      a = c(Ko.selectAll);
    return A.useEffect(() => (n(st.getApprovedList({
      offset: t,
      limit: s
    })), () => {
      n(dr())
    }), []), e.jsxs("div", {
      className: jt.layout,
      children: [e.jsx("div", {
        className: jt.container,
        children: a.map((i, o) => e.jsx($r, {
          item: i,
          rank: o + 1,
          repaints: i.repaints,
          approved: !0
        }, i.id))
      }), e.jsx(ES, {})]
    })
  },
  DS = () => {
    const n = _(),
      t = c(Ko.selectAll),
      a = c(i => i.tournament.selectedTemplate) ? 15 : 16;
    return A.useEffect(() => (n(st.getRandomList()), () => {
      n(dr())
    }), []), e.jsx("div", {
      className: jt.layout,
      children: e.jsx("div", {
        className: jt.container,
        children: t.map((i, o) => o + 1 > a ? null : e.jsx($r, {
          item: i
        }, i.id))
      })
    })
  },
  RS = "_round_info_container_1d52c_1",
  MS = "_title_1d52c_7",
  US = "_description_1d52c_12",
  QS = "_round_status_container_1d52c_17",
  xt = {
    round_info_container: RS,
    title: MS,
    description: US,
    round_status_container: QS
  },
  OS = "_round_indicator_mgwmo_1",
  FS = "_round_indicator_wait_mgwmo_37",
  ec = {
    round_indicator: OS,
    round_indicator_wait: FS
  },
  zS = () => e.jsx("div", {
    className: ec.round_indicator_wait
  }),
  tc = () => e.jsx("div", {
    className: ec.round_indicator
  }),
  GS = () => {
    const n = c(An);
    return c(hi), n ? e.jsxs("div", {
      className: xt.round_info_container,
      children: [e.jsxs("div", {
        children: [e.jsxs("div", {
          className: xt.title,
          children: ["Top ", fo[n].templateThreshold, " ", "templates will win"]
        }), e.jsx("div", {
          className: xt.description,
          children: "Most active painters gets rewarded"
        })]
      }), e.jsxs("div", {
        className: xt.round_status_container,
        children: [e.jsx(tc, {}), " on"]
      })]
    }) : e.jsxs("div", {
      className: xt.round_info_container,
      children: [e.jsxs("div", {
        children: [e.jsx("div", {
          className: xt.title,
          children: "Tournament finished"
        }), e.jsx("div", {
          className: xt.description,
          children: "Waiting for results"
        })]
      }), e.jsxs("div", {
        className: xt.round_status_container,
        children: [e.jsx(zS, {}), " Soon"]
      })]
    })
  },
  LS = () => {
    const n = c(An),
      t = c(s => s.tournament.periodsStatus);
    return e.jsxs("div", {
      children: [e.jsx(GS, {}), n && t === p.fulfilled && e.jsx(kS, {}), !n && t === p.fulfilled && e.jsx(DS, {})]
    })
  },
  HS = "_soon_la5q2_1",
  qS = "_active_round_instruction_la5q2_11",
  YS = "_not_active_round_instruction_la5q2_19",
  VS = "_round_container_la5q2_25",
  XS = "_round_title_la5q2_33",
  WS = "_round_title_text_la5q2_38",
  JS = "_round_indicator_la5q2_43",
  ZS = "_round_status_success_la5q2_49",
  KS = "_round_status_fail_la5q2_60",
  $S = "_success_la5q2_71",
  e2 = "_fail_la5q2_75",
  t2 = "_gray_la5q2_79",
  n2 = "_round_main_info_la5q2_83",
  s2 = "_round_image_container_la5q2_89",
  a2 = "_round_image_la5q2_89",
  i2 = "_round_lines_container_la5q2_103",
  o2 = "_round_line_la5q2_103",
  r2 = "_divider_la5q2_117",
  c2 = "_pixels_number_la5q2_124",
  l2 = "_pixel_la5q2_124",
  d2 = "_past_rounds_la5q2_136",
  u2 = "_past_rounds_divider_la5q2_145",
  $ = {
    soon: HS,
    active_round_instruction: qS,
    not_active_round_instruction: YS,
    round_container: VS,
    round_title: XS,
    round_title_text: WS,
    round_indicator: JS,
    round_status_success: ZS,
    round_status_fail: KS,
    success: $S,
    fail: e2,
    gray: t2,
    round_main_info: n2,
    round_image_container: s2,
    round_image: a2,
    round_lines_container: i2,
    round_line: o2,
    divider: r2,
    pixels_number: c2,
    pixel: l2,
    past_rounds: d2,
    past_rounds_divider: u2
  },
  m2 = ({
    result: n
  }) => {
    const t = _(),
      s = c(An);
    if (!n) return null;
    const a = n.round_id,
      i = n.repaints_to_win - n.repaints,
      o = n.rank <= n.rank_to_win && n.rank !== 0,
      r = n.template,
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
        r && r.id && r.id !== 0 && t(pi(r))
      },
      children: [e.jsxs("div", {
        className: $.round_title,
        children: [e.jsxs("div", {
          className: $.round_title_text,
          children: ["Round ", a, " ", f ? "is on" : "has ended"]
        }), e.jsx("div", {
          className: $.round_indicator,
          children: f && e.jsx(tc, {})
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
            src: n.template.url
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
              children: m ? "In the zone" : an(h)
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
              children: n.rank
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
                children: o ? "In the zone" : an(i)
              })]
            })]
          })]
        })]
      })]
    })
  },
  A2 = () => {
    const n = c(eg),
      t = c(hi);
    return n ? e.jsxs(re.Fragment, {
      children: [e.jsxs("div", {
        className: $.past_rounds,
        children: [e.jsx("div", {
          className: $.past_rounds_divider
        }), e.jsx("div", {
          children: "All rounds"
        }), e.jsx("div", {
          className: $.past_rounds_divider
        })]
      }), n.map(s => t && t === s.round_id || s.round_id === 9 ? null : e.jsx(m2, {
        result: s
      }, s.round_id))]
    }) : null
  },
  p2 = () => {
    const n = _(),
      t = c(s => s.tournament.resultsStatus);
    return A.useEffect(() => {
      t === p.idle && n(st.getResults())
    }, [t]), e.jsx("div", {
      children: e.jsx(A2, {})
    })
  },
  h2 = () => {
    const n = c(t => t.tournament.activeTab);
    return e.jsxs("div", {
      className: QP.info_layout,
      children: [n === tt.create && e.jsx(_S, {}), n === tt.main && e.jsx(LS, {}), n === tt.result && e.jsx(p2, {})]
    })
  },
  g2 = () => e.jsxs(re.Fragment, {
    children: [e.jsx(Jh, {}), e.jsx(h2, {})]
  }),
  _2 = "/assets/bg-BNfFdtGI.png",
  f2 = "data:image/png;base64,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",
  nc = "/assets/rays-uhfpLlt6.png",
  sc = "/assets/rays2-Ce7ymw8-.png",
  x2 = "_container_lc1md_1",
  v2 = "_title_lc1md_8",
  y2 = "_table_container_lc1md_13",
  w2 = "_table_row_lc1md_19",
  j2 = "_button_lc1md_26",
  b2 = "_active_row_lc1md_50",
  N2 = "_row_title_lc1md_50",
  Qa = {
    container: x2,
    title: v2,
    table_container: y2,
    table_row: w2,
    button: j2,
    active_row: b2,
    row_title: N2
  },
  C2 = () => {
    const n = _(),
      t = c(a => a.tournament.showTournamentDetailsPopup),
      s = a => {
        n(rr(a))
      };
    return e.jsx(zt, {
      show: t,
      setShow: s,
      children: e.jsxs("div", {
        className: Qa.container,
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
            className: Qa.gold,
            children: "Golden Pixel"
          }), "."]
        }), e.jsx("p", {
          children: "Details on the awards coming soon."
        }), e.jsx("button", {
          className: Qa.button,
          onPointerUp: () => s(!1),
          children: "That's so wise!"
        })]
      })
    })
  },
  I2 = "_layout_17ca7_1",
  P2 = "_container_17ca7_6",
  S2 = "_close_button_17ca7_20",
  B2 = "_title_container_17ca7_28",
  T2 = "_title_17ca7_28",
  E2 = "_image_container_17ca7_39",
  k2 = "_image_17ca7_39",
  D2 = "_image_placeholder_17ca7_53",
  R2 = "_info_container_17ca7_60",
  M2 = "_info_row_17ca7_66",
  U2 = "_info_title_17ca7_71",
  Q2 = "_info_value_blue_17ca7_75",
  O2 = "_info_value_white_17ca7_80",
  F2 = "_buttons_container_17ca7_84",
  z2 = "_button_17ca7_84",
  G2 = "_not_button_17ca7_100",
  L2 = "_button_copy_17ca7_111",
  se = {
    layout: I2,
    container: P2,
    close_button: S2,
    title_container: B2,
    title: T2,
    image_container: E2,
    image: k2,
    image_placeholder: D2,
    info_container: R2,
    info_row: M2,
    info_title: U2,
    info_value_blue: Q2,
    info_value_white: O2,
    buttons_container: F2,
    button: z2,
    not_button: G2,
    button_copy: L2
  },
  ac = ({
    template: n,
    style: t = {},
    onPointerUp: s = () => {}
  }) => {
    const a = _(),
      o = c(r => r.tournament.selectTemplateStatus) === p.pending;
    return e.jsx("button", {
      disabled: o,
      className: se.button,
      style: {
        ...t
      },
      onPointerUp: async () => {
        try {
          if (o) return;
          (await a(st.selectTemplate({
            id: n.id
          }))).meta.requestStatus === p.fulfilled && a(ur(n))
        } catch (r) {
          console.log(r, "error when selecting template")
        } finally {
          s()
        }
      },
      children: "Select Template"
    })
  },
  H2 = () => {
    const n = c(r => r.tournament.templateDataInfoPopup),
      t = c(r => r.user.user),
      s = c(r => r.tournament.selectedTemplate),
      a = n.id === t.id,
      i = s !== null && n.id === s.id,
      o = c(An);
    return a ? e.jsx("div", {
      className: se.not_button,
      children: "Your template. Cute!"
    }) : i ? e.jsxs("div", {
      className: se.not_button,
      children: ["Selected template ", e.jsx(P, {
        size: 18,
        children: ""
      })]
    }) : o && s ? null : e.jsx(ac, {
      template: n
    })
  },
  q2 = () => {
    const n = _(),
      t = te(),
      s = c(i => i.tournament.showTemplateInfoPopup),
      a = c(i => i.tournament.templateDataInfoPopup);
    return c(An), !a || !s ? null : ze.createPortal(e.jsx(Ve, {
      onPointerUp: () => n(Sa()),
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
              n(Sa())
            },
            children: e.jsx(P, {
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
            children: [e.jsx(H2, {}), e.jsx(Lt, {
              url: `${Pt}?startapp=f${a.id}_t`,
              className: se.button_copy,
              text: "Copy template link"
            })]
          }), e.jsxs("div", {
            className: se.info_container,
            children: [e.jsxs("div", {
              className: se.info_row,
              onPointerUp: () => {
                t.push("/"), n(Sa()), b.viewport.viewport.animate({
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
  Y2 = "_layout_20dlh_1",
  V2 = "_container_20dlh_10",
  X2 = "_star_20dlh_14",
  W2 = "_star_animation_20dlh_21",
  J2 = "_move_20dlh_1",
  ea = {
    layout: Y2,
    container: V2,
    star: X2,
    star_animation: W2,
    move: J2
  },
  Z2 = "data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3clinearGradient%20id='grad1'%20x1='0%25'%20y1='0%25'%20x2='0%25'%20y2='100%25'%3e%3cstop%20offset='0%25'%20style='stop-color:%23efce32;stop-opacity:1'%20/%3e%3c!--%20более%20светлый%20желтый%20--%3e%3cstop%20offset='100%25'%20style='stop-color:%23f7752e;stop-opacity:1'%20/%3e%3c!--%20более%20темный%20желтый%20--%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M5%200C2.23858%200%200%202.23858%200%205V27C0%2029.7614%202.23858%2032%205%2032H27C29.7614%2032%2032%2029.7614%2032%2027V5C32%202.23858%2029.7614%200%2027%200H5ZM21.4261%2010.5739H10.5739V21.4261H21.4261V10.5739Z'%20fill='url(%23grad1)'/%3e%3c/svg%3e",
  K2 = ({
    size: n,
    style: t = {},
    animation: s = !1
  }) => e.jsx("img", {
    alt: "image",
    src: Z2,
    className: s ? ea.star_animation : ea.star,
    style: {
      width: n,
      height: n,
      ...t
    }
  }),
  $2 = A.memo(() => {
    const n = Array.from(Array(30));
    return e.jsx("div", {
      className: ea.layout,
      children: e.jsx("div", {
        className: ea.container,
        children: n.map((t, s) => {
          const a = k(2, 6);
          return e.jsx(K2, {
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
  eB = "_container_tuzgg_1",
  tB = "_column_tuzgg_9",
  nB = "_column_rev_tuzgg_17",
  sB = "_title_tuzgg_26",
  aB = "_table_container_tuzgg_32",
  iB = "_table_row_tuzgg_38",
  oB = "_button_tuzgg_45",
  rB = "_value_tuzgg_52",
  cB = "_notpixel_icon_tuzgg_58",
  lB = "_active_row_tuzgg_74",
  dB = "_row_title_tuzgg_74",
  Pe = {
    container: eB,
    column: tB,
    column_rev: nB,
    title: sB,
    table_container: aB,
    table_row: iB,
    button: oB,
    value: rB,
    notpixel_icon: cB,
    active_row: lB,
    row_title: dB
  },
  uB = [{
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
  mB = [{
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
  AB = () => {
    const n = _(),
      t = c(a => a.tournament.showRoundRewardsPopup),
      s = a => {
        n(cr(a))
      };
    return e.jsx(zt, {
      show: t,
      setShow: s,
      children: e.jsxs("div", {
        className: Pe.container,
        children: [e.jsx("img", {
          alt: "column",
          src: Ys,
          className: Pe.column
        }), e.jsx("img", {
          alt: "column",
          src: Ys,
          className: Pe.column_rev
        }), e.jsx("div", {
          className: Pe.title,
          children: "Round 10"
        }), e.jsx("div", {
          className: Pe.table_container,
          children: uB.map((a, i) => e.jsxs("div", {
            className: Pe.table_row,
            children: [e.jsx("div", {
              children: a.name
            }), e.jsxs("div", {
              className: Pe.value,
              children: [Je({
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
          children: mB.map((a, i) => e.jsxs("div", {
            className: Pe.table_row,
            children: [e.jsx("div", {
              children: a.name
            }), e.jsxs("div", {
              className: Pe.value,
              children: [Je({
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
  pB = "_button_1wjsf_1",
  hB = "_icon_1wjsf_20",
  to = {
    button: pB,
    icon: hB
  },
  gB = () => {
    const n = _(),
      s = c(Bt) ? "calc(12px + var(--safe-area-top))" : "calc(12px + var(--header-height))";
    return e.jsxs("button", {
      className: to.button,
      style: {
        top: s
      },
      onPointerUp: () => {
        n(cr(!0))
      },
      children: [e.jsx("span", {
        children: "Round 10"
      }), " ", e.jsx("span", {
        className: `telegram_icons ${to.icon}`,
        children: ""
      })]
    })
  },
  _B = () => {
    const n = _();
    return e.jsxs(ue, {
      children: [e.jsx(gB, {}), e.jsxs("div", {
        className: We.general_info_container,
        style: {
          backgroundImage: `url(${_2})`,
          backgroundPosition: "top center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          marginTop: -20
        },
        children: [e.jsxs("div", {
          className: We.img_container,
          children: [e.jsx("img", {
            alt: "img",
            className: We.image_cup,
            src: f2
          }), e.jsx("div", {
            className: We.image_glow_container,
            children: e.jsx("img", {
              alt: "img",
              className: We.image_glow,
              src: nc
            })
          }), e.jsx("div", {
            className: We.image_glow_container,
            children: e.jsx("img", {
              alt: "img",
              className: We.image_glow_reverse,
              src: sc
            })
          }), e.jsx($2, {})]
        }), e.jsx("h1", {
          className: We.title,
          children: "Telegram Battle"
        }), e.jsxs("div", {
          className: We.description_container,
          children: [e.jsxs("span", {
            className: We.description,
            children: [e.jsx("span", {
              children: " Paint templates to win "
            }), " ", e.jsx("span", {
              className: We.gold,
              children: "Golden Pixels"
            }), " ", e.jsx("br", {}), e.jsx(gn, {
              onPointerUp: t => {
                t.stopPropagation(), n(rr(!0))
              },
              children: "How it works"
            })]
          }), e.jsx(C2, {}), e.jsx(AB, {})]
        })]
      }), e.jsx(g2, {}), e.jsx(q2, {})]
    })
  },
  fB = "_container_16f9l_1",
  xB = "_image_container_16f9l_9",
  vB = "_image_16f9l_9",
  yB = "_title_container_16f9l_18",
  wB = "_text_container_16f9l_27",
  jB = "_title_16f9l_18",
  bB = "_gray_16f9l_39",
  NB = "_bold_16f9l_43",
  CB = "_input_16f9l_47",
  IB = "_catalog_container_16f9l_72",
  PB = "_catalog_title_16f9l_77",
  SB = "_catalog_items_container_16f9l_82",
  BB = "_catalog_item_16f9l_82",
  TB = "_catalog_item_image_container_16f9l_101",
  EB = "_catalog_item_image_16f9l_101",
  kB = "_button_container_16f9l_110",
  DB = "_button_16f9l_110",
  RB = "_wrong_helper_text_16f9l_125",
  MB = "_wrong_button_16f9l_130",
  UB = "_wrong_button_text2_16f9l_143",
  T = {
    container: fB,
    image_container: xB,
    image: vB,
    title_container: yB,
    text_container: wB,
    title: jB,
    gray: bB,
    bold: NB,
    input: CB,
    catalog_container: IB,
    catalog_title: PB,
    catalog_items_container: SB,
    catalog_item: BB,
    catalog_item_image_container: TB,
    catalog_item_image: EB,
    button_container: kB,
    button: DB,
    wrong_helper_text: RB,
    wrong_button: MB,
    wrong_button_text2: UB
  },
  QB = "/assets/box_1-CzUKXu07.gif",
  OB = "/assets/box_2-wR9cQS7q.gif",
  FB = "/assets/box_3-g_PL1kKM.gif",
  zB = "/assets/dogs-D0jtZggB.gif",
  GB = "/assets/secret_word-BTKB1fAO.gif",
  LB = "/assets/cube_youtube_2-BqessN1a.gif",
  HB = "/assets/cube_twitter_3_m_-Bxf2Qx_E.gif",
  ts = {
    Ghost: "Ghost",
    Mythical: "Mythical",
    Magical: "Magical",
    Dogs: "Dogs"
  },
  qB = () => {
    const n = _(),
      [t, s] = A.useState(""),
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
        const B = await W.getSecretStats();
        B.status === 200 && B.data && B.data.forEach(C => {
          C.group_name === ts.Ghost && d({
            count: C.usage_count,
            limit: C.limit
          }), C.group_name === ts.Mythical && h({
            count: C.usage_count,
            limit: C.limit
          }), C.group_name === ts.Magical && f({
            count: C.usage_count,
            limit: C.limit
          }), C.group_name === ts.Dogs && x({
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
            src: GB
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
            value: t,
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
                  src: QB
                })
              }), e.jsx("div", {
                className: F(T.bold),
                children: "Ghost's secret"
              }), e.jsxs("div", {
                className: F(T.gray),
                children: [Je({
                  num: 1e4
                }), "/", Je({
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
                  src: OB
                })
              }), e.jsx("div", {
                className: F(T.bold),
                children: "Mythical secret"
              }), e.jsxs("div", {
                className: F(T.gray),
                children: [Je({
                  num: m.count
                }), "/", Je({
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
                  src: zB
                })
              }), e.jsx("div", {
                className: F(T.bold),
                children: "Dogs secret"
              }), e.jsxs("div", {
                className: F(T.gray),
                children: [Je({
                  num: j.count
                }), "/", Je({
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
                  src: FB
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
                  src: LB
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
                  src: HB
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
                const y = await W.checkSecret({
                  key: t
                });
                if (y.status === 200) {
                  const B = y.data;
                  if (B.secretWord.success) {
                    let C = "Success!";
                    B.secretWord.reward && (C += ` ${B.secretWord.reward} PX earned`), n(z({
                      id: performance.now(),
                      text: C,
                      icon: ""
                    })), n(Tt(B.secretWord.reward || 0));
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
  yt = {
    ratings: "/ratings",
    stars: "/stars",
    mining: "/claiming",
    template: "/template",
    history: "/history",
    my_squad: "/my-squad",
    my_profile: "/my-profile"
  },
  YB = Object.values(yt),
  VB = () => e.jsx(ni, {
    children: e.jsxs(Pc, {
      children: [e.jsx(ae, {
        path: "/welcome",
        children: e.jsx($j, {})
      }), e.jsx(ae, {
        path: "/airdrop",
        children: e.jsx(bP, {})
      }), e.jsx(ae, {
        path: "/invite-frens",
        children: e.jsx(Qb, {})
      }), e.jsx(ae, {
        path: yt.stars,
        children: e.jsx(hu, {})
      }), e.jsx(ae, {
        path: "/info",
        children: e.jsx(yu, {})
      }), e.jsx(ae, {
        path: yt.my_squad,
        children: e.jsx(EI, {})
      }), e.jsx(ae, {
        path: yt.my_profile,
        children: e.jsx(KC, {})
      }), e.jsx(ae, {
        path: "/rules",
        children: e.jsx(Ej, {})
      }), e.jsx(ae, {
        path: "/terms",
        children: e.jsx(bu, {})
      }), e.jsx(ae, {
        path: "/stats",
        children: e.jsx(s1, {})
      }), e.jsx(ae, {
        path: "/privacy",
        children: e.jsx(Iu, {})
      }), e.jsx(ae, {
        path: "/secrets",
        children: e.jsx(qB, {})
      }), e.jsx(ae, {
        path: yt.mining,
        children: e.jsx(Fx, {})
      }), e.jsx(ae, {
        path: "/ratings/awards",
        children: e.jsx(Qj, {})
      }), e.jsx(ae, {
        path: yt.ratings,
        children: e.jsx(Gv, {})
      }), e.jsx(ae, {
        path: "/daily",
        children: e.jsx(x0, {})
      }), e.jsx(ae, {
        path: yt.history,
        children: e.jsx(Cj, {})
      }), e.jsx(ae, {
        path: "/template/create",
        children: e.jsx(OI, {})
      }), e.jsx(ae, {
        path: yt.template,
        children: e.jsx($N, {})
      }), e.jsx(ae, {
        path: "/tournament",
        children: e.jsx(_B, {})
      }), e.jsx(ae, {
        path: "/energy-over",
        children: e.jsx(w1, {})
      }), e.jsx(ae, {
        path: "/open-league",
        children: e.jsx(ib, {})
      }), e.jsx(ae, {
        path: "/pay-support",
        children: e.jsx(ub, {})
      }), e.jsx(ae, {
        path: "/",
        children: e.jsx(Kw, {})
      })]
    })
  }),
  XB = "_layout_1djp8_1",
  WB = "_loading_container_1djp8_8",
  JB = "_image_container_1djp8_20",
  ZB = "_image_1djp8_20",
  KB = "_text_1djp8_29",
  Pn = {
    layout: XB,
    loading_container: WB,
    image_container: JB,
    image: ZB,
    text: KB
  },
  $B = "_buttons_container_rjvnl_1",
  eT = "_group_rjvnl_8",
  tT = "_left_rjvnl_15",
  nT = "_middle_rjvnl_21",
  sT = "_right_rjvnl_29",
  aT = "_number_rjvnl_36",
  iT = "_button_rjvnl_1",
  oT = "_ratings_button_rjvnl_55",
  rT = "_stars_button_rjvnl_62",
  cT = "_shop_button_rjvnl_70",
  lT = "_burger_button_rjvnl_79",
  dT = "_relative_button_rjvnl_89",
  uT = "_telegram_button_rjvnl_116",
  mT = "_button_img_rjvnl_124",
  AT = "_avatar_img_rjvnl_129",
  pT = "_open_menu_button_rjvnl_134",
  hT = "_open_menu_button_image_rjvnl_144",
  gT = "_my_pixels_amount_rjvnl_149",
  _T = "_header_content_rjvnl_154",
  Ne = {
    buttons_container: $B,
    group: eT,
    left: tT,
    middle: nT,
    right: sT,
    number: aT,
    button: iT,
    ratings_button: oT,
    stars_button: rT,
    shop_button: cT,
    burger_button: lT,
    relative_button: dT,
    telegram_button: uT,
    button_img: mT,
    avatar_img: AT,
    open_menu_button: pT,
    open_menu_button_image: hT,
    my_pixels_amount: gT,
    header_content: _T
  },
  fT = () => c(Ye) ? null : e.jsxs("button", {
    className: `${Ne.button} ${Ne.telegram_button}`,
    onPointerUp: () => {
      X("https://t.me/notpixel")
    },
    children: [e.jsx("img", {
      alt: "tg_logo",
      src: Hn
    }), "Go to app for paint"]
  }),
  ga = n => {
    const t = ta(),
      s = te();
    return () => {
      t.pathname === n ? s.push("/") : s.push(n)
    }
  },
  xT = () => {
    const n = ga("/claiming"),
      t = c(a => a.user.pixelCoins);
    return c(Ye) ? e.jsxs("button", {
      className: `${Ne.button}`,
      onPointerUp: n,
      children: [e.jsx(M, {
        size: 16,
        className: Ne.button_img
      }), e.jsx("div", {
        style: {
          transform: "translateY(1px)"
        },
        children: e.jsx(Yn, {
          number: Math.max(Number(t.toFixed(0)), 0)
        })
      })]
    }) : null
  },
  vT = "data:image/svg+xml,%3c?xml%20version='1.0'%20?%3e%3csvg%20viewBox='0%200%2032%2032'%20xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:none;}%3c/style%3e%3c/defs%3e%3ctitle/%3e%3cg%20fill='%23e0dd8e'%20data-name='Layer%202'%20id='Layer_2'%3e%3cpath%20d='M24,29H8a3,3,0,0,1-3-3V16a1,1,0,0,1,2,0V26a1,1,0,0,0,1,1H24a1,1,0,0,0,1-1V16a1,1,0,0,1,2,0V26A3,3,0,0,1,24,29Z'/%3e%3cpath%20d='M15,29H10a1,1,0,0,1-1-1V22a3,3,0,0,1,3-3h1a3,3,0,0,1,3,3v6A1,1,0,0,1,15,29Zm-4-2h3V22a1,1,0,0,0-1-1H12a1,1,0,0,0-1,1Z'/%3e%3cpath%20d='M25,17a4,4,0,0,1-4-4,1,1,0,0,1,2,0,2,2,0,0,0,4,0v-.76L24.38,7H7.62L5,12.24V13a2,2,0,0,0,4,0,1,1,0,0,1,2,0,4,4,0,0,1-8,0V12a1,1,0,0,1,.11-.45l3-6A1,1,0,0,1,7,5H25a1,1,0,0,1,.89.55l3,6A1,1,0,0,1,29,12v1A4,4,0,0,1,25,17Z'/%3e%3cpath%20d='M13,17a4,4,0,0,1-4-4,1,1,0,0,1,2,0,2,2,0,0,0,4,0,1,1,0,0,1,2,0A4,4,0,0,1,13,17Z'/%3e%3cpath%20d='M19,17a4,4,0,0,1-4-4,1,1,0,0,1,2,0,2,2,0,0,0,4,0,1,1,0,0,1,2,0A4,4,0,0,1,19,17Z'/%3e%3cpath%20d='M22,22H19a1,1,0,0,1,0-2h3a1,1,0,0,1,0,2Z'/%3e%3c/g%3e%3cg%20id='frame'%3e%3crect%20class='cls-1'%20height='32'%20width='32'/%3e%3c/g%3e%3c/svg%3e",
  yT = () => {
    const n = ga("/stars");
    return c(Ye) ? e.jsx("button", {
      className: `${Ne.shop_button}`,
      onPointerUp: n,
      children: e.jsx("img", {
        alt: "icon",
        src: vT,
        style: {
          width: 24,
          height: 24
        }
      })
    }) : null
  },
  wT = () => {
    const n = ga("/invite-frens");
    return c(Ye) ? e.jsx("button", {
      className: `${Ne.stars_button}`,
      onPointerUp: n,
      children: e.jsx(P, {
        size: 20,
        children: ""
      })
    }) : null
  },
  jT = () => {
    const n = _(),
      t = c(vr),
      s = () => {
        if (t) {
          n(Qt(!1));
          return
        }
        n(Qt(!0))
      };
    return e.jsx("button", {
      className: Ne.burger_button,
      onPointerUp: s,
      children: e.jsx(P, {
        size: 28,
        children: ""
      })
    })
  },
  bT = () => {
    const n = ga("/daily");
    return c(Ye) ? e.jsx("button", {
      className: `${Ne.stars_button}`,
      onPointerUp: n,
      children: e.jsx(P, {
        size: 20,
        children: ""
      })
    }) : null
  },
  no = re.memo(() => e.jsxs("div", {
    className: Ne.buttons_container,
    children: [e.jsxs("div", {
      className: `${Ne.group} ${Ne.left}`,
      children: [e.jsx(jT, {}), e.jsx(wT, {})]
    }), e.jsx("div", {
      className: `${Ne.group} ${Ne.middle}`,
      children: e.jsx(xT, {})
    }), e.jsxs("div", {
      className: `${Ne.group} ${Ne.right}`,
      children: [e.jsx(bT, {}), e.jsx(fT, {}), e.jsx(yT, {})]
    })]
  })),
  so = {
    bronze: Ue.bronze,
    silver: Ue.silver,
    gold: Ue.gold,
    platinum: Ue.platinum,
    diamond: Ue.diamond
  },
  ao = () => {
    const n = c(s => s.user.user),
      t = [Ue.league];
    return n !== null && so.hasOwnProperty(n.league) ? (t.push(so[n.league]), e.jsx("div", {
      className: t.join(" ")
    })) : null
  },
  NT = () => {
    const n = c(Bt),
      t = ta(),
      s = c(oa),
      a = c(ra);
    c(md);
    const i = `calc(16px + ${s.top+a.top}px)`;
    return n ? n && t.pathname === "/" ? e.jsx("div", {
      className: Ue.header_bottom_container,
      style: {
        top: i
      },
      children: e.jsx("div", {
        className: Ue.header_bottom,
        children: e.jsxs("div", {
          className: Ue.header_content,
          children: [e.jsx(ao, {}), e.jsx(no, {})]
        })
      })
    }) : null : e.jsx("div", {
      className: Ue.header,
      children: e.jsxs("div", {
        className: Ue.header_content,
        children: [e.jsx(ao, {}), e.jsx(no, {})]
      })
    })
  };
let io = "/";
const CT = () => {
    let n = ta(),
      t = te();
    return A.useEffect(() => {
      const s = () => {
        YB.includes(n.pathname) ? t.push("/") : t.goBack()
      };
      return window.Telegram.WebApp.onEvent("backButtonClicked", s), n.pathname !== io && (n.pathname === "/" ? window.Telegram.WebApp.BackButton.hide() : window.Telegram.WebApp.BackButton.show(), io = n.pathname), () => {
        window.Telegram.WebApp.offEvent("backButtonClicked", s)
      }
    }, [n, t]), null
  },
  IT = "_layout_ppin4_1",
  PT = {
    layout: IT
  },
  ST = () => {
    const n = A.useRef(),
      t = c(a => a.progress.command),
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
        o !== g && (i = Math.min(j * l, l), n.current && (n.current.style.width = `${i}%`)), o = g, i < l && (d = requestAnimationFrame(h))
      };
      return t === Qe.start && (d = requestAnimationFrame(h), n.current && (n.current.style.display = "block")), t === Qe.finish && (n.current && (n.current.style.width = "100%"), m = setTimeout(() => {
        n.current && (n.current.style.display = "none", n.current.style.width = "0")
      }, 300)), () => {
        d !== null && cancelAnimationFrame(d), m !== null && clearTimeout(m)
      }
    }, [t, s]), ze.createPortal(e.jsx("div", {
      ref: n,
      className: PT.layout
    }), document.body)
  },
  BT = "_container_11ui8_1",
  TT = "_header_11ui8_13",
  ET = "_close_container_11ui8_23",
  kT = "_close_11ui8_23",
  DT = "_title_11ui8_48",
  RT = "_frens_count_11ui8_53",
  MT = "_body_11ui8_58",
  UT = "_content_11ui8_68",
  QT = "_image_container_11ui8_75",
  OT = "_image_11ui8_75",
  FT = "_image_container_charges_11ui8_84",
  zT = "_image_charges_11ui8_89",
  GT = "_description_container_11ui8_94",
  LT = "_bold_11ui8_102",
  HT = "_gray_11ui8_107",
  qT = "_center_11ui8_111",
  YT = "_benefits_container_11ui8_115",
  VT = "_benefits_item_11ui8_123",
  XT = "_benefits_icon_container_11ui8_128",
  WT = "_icon_invite_11ui8_132",
  JT = "_footer_11ui8_136",
  ZT = "_button_11ui8_141",
  O = {
    container: BT,
    header: TT,
    close_container: ET,
    close: kT,
    title: DT,
    frens_count: RT,
    body: MT,
    content: UT,
    image_container: QT,
    image: OT,
    image_container_charges: FT,
    image_charges: zT,
    description_container: GT,
    bold: LT,
    gray: HT,
    center: qT,
    benefits_container: YT,
    benefits_item: VT,
    benefits_icon_container: XT,
    icon_invite: WT,
    footer: JT,
    button: ZT
  },
  KT = "data:image/png;base64,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",
  $T = () => {
    var o, r;
    const n = _(),
      t = c(l => l.main.showInviteFrensPopup),
      s = c(l => l.user.user),
      a = c(l => l.main.settings),
      i = `${Pt}?startapp=f${((r=(o=window.Telegram.WebApp.initDataUnsafe)==null?void 0:o.user)==null?void 0:r.id)||""}`;
    return e.jsx(Ve, {
      show: t,
      onPointerUp: () => n(Ba()),
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
                n(Ba())
              },
              children: e.jsx(P, {
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
                src: KT
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
          children: [e.jsx(Lt, {
            url: i
          }), e.jsx("button", {
            className: O.button,
            onPointerUp: l => {
              l.stopPropagation(), X(`https://t.me/share/url?url=${i}`), n(Ba())
            },
            children: "Share"
          })]
        })]
      })
    })
  },
  eE = "_container_1cfz6_1",
  tE = "_header_1cfz6_9",
  nE = "_close_1cfz6_20",
  sE = "_title_1cfz6_32",
  aE = "_body_1cfz6_37",
  iE = "_image_container_1cfz6_51",
  oE = "_image_1cfz6_51",
  rE = "_content_container_1cfz6_62",
  cE = "_description_container_1cfz6_70",
  lE = "_description_item_1cfz6_77",
  dE = "_amount_selector_container_1cfz6_84",
  uE = "_amount_selector_button_1cfz6_90",
  mE = "_amount_selector_count_1cfz6_103",
  AE = "_button_container_1cfz6_114",
  pE = "_crypto_button_container_1cfz6_120",
  hE = "_error_1cfz6_134",
  gE = "_not_available_1cfz6_141",
  _E = "_button_1cfz6_114",
  fE = "_star_color_1cfz6_167",
  xE = "_tokens_selector_1cfz6_173",
  vE = "_tokens_title_1cfz6_178",
  yE = "_connect_wallet_text_title_1cfz6_185",
  wE = "_tokens_container_1cfz6_194",
  jE = "_token_item_1cfz6_201",
  bE = "_token_image_container_1cfz6_212",
  NE = "_token_image_1cfz6_212",
  CE = "_sale_box_1cfz6_222",
  IE = "_sale_text_1cfz6_234",
  ee = {
    container: eE,
    header: tE,
    close: nE,
    title: sE,
    body: aE,
    image_container: iE,
    image: oE,
    content_container: rE,
    description_container: cE,
    description_item: lE,
    amount_selector_container: dE,
    amount_selector_button: uE,
    amount_selector_count: mE,
    button_container: AE,
    crypto_button_container: pE,
    error: hE,
    not_available: gE,
    button: _E,
    star_color: fE,
    tokens_selector: xE,
    tokens_title: vE,
    connect_wallet_text_title: yE,
    tokens_container: wE,
    token_item: jE,
    token_image_container: bE,
    token_image: NE,
    sale_box: CE,
    sale_text: IE
  },
  PE = () => {
    const n = _(),
      t = c(a => a.shop.activeProductCardId),
      s = c(a => a.shop.products[t]);
    return e.jsxs("div", {
      className: ee.header,
      onPointerUp: a => {
        a.stopPropagation()
      },
      children: [e.jsx("div", {
        className: ee.close,
        onPointerUp: () => {
          n(ci())
        },
        children: e.jsx(P, {
          size: 30,
          children: ""
        })
      }), e.jsx("div", {
        className: ee.title,
        children: s.name
      })]
    })
  },
  SE = () => {
    const n = c(a => a.shop.activeProductCardId),
      t = c(a => a.shop.products[n]),
      s = c(a => a.shop.amount);
    return e.jsx("div", {
      className: ee.image_container,
      children: e.jsx("img", {
        alt: "img",
        className: ee.image,
        src: ko(t.id, s)
      })
    })
  },
  BE = () => {
    const n = c(s => s.shop.activeProductCardId),
      t = c(s => s.shop.products[n]);
    return e.jsx("div", {
      className: ee.description_container,
      children: e.jsx("span", {
        className: ee.description_item,
        children: t.description
      })
    })
  },
  TE = () => {
    const n = _(),
      t = c(aa),
      s = c(i => i.shop.selectedCurrency);
    return c(rt) !== je ? null : e.jsxs("div", {
      className: ee.tokens_selector,
      children: [e.jsx("div", {
        className: ee.tokens_title,
        children: "Select token"
      }), e.jsx("div", {
        children: e.jsx("div", {
          className: ee.tokens_container,
          children: t.map(i => i.currency_id === 1 ? null : e.jsxs("div", {
            className: ee.token_item,
            style: {
              color: i.currency_id === s ? "#FFFFFF" : void 0
            },
            onPointerUp: () => {
              n(Un(i.currency_id))
            },
            children: [e.jsx("div", {
              children: e.jsx(P, {
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
  EE = () => {
    const n = c(s => s.shop.selectedCurrency),
      t = c(s => s.shop.crypto).filter(s => s.currency_id === n)[0];
    return n === 1 ? e.jsx("span", {
      className: ee.star_color,
      style: {
        paddingRight: 4,
        marginBottom: -5
      },
      children: e.jsx(un, {})
    }) : e.jsx("img", {
      alt: "image",
      style: {
        width: 16,
        height: 16,
        paddingRight: 6,
        paddingLeft: 6,
        marginBottom: 1
      },
      src: t.image
    })
  },
  kE = ({
    success: n
  }) => {
    var l;
    const t = c(d => d.shop.activeProductCardId),
      s = c(d => d.shop.amount),
      a = c(d => d.shop.selectedCurrency),
      i = c(d => d.shop.products[t]),
      o = (l = i.prices.filter(d => d.currency_id === a)[0]) == null ? void 0 : l.price,
      r = !i.isOnePiece;
    if (n) return e.jsx(re.Fragment, {
      children: "Success, wait 1-5 min!"
    });
    if (!o) return e.jsx(re.Fragment, {
      children: "Not available"
    });
    if (o) return e.jsxs(re.Fragment, {
      children: ["Buy for ", e.jsx(EE, {}), Math.round(o * (r ? s : 1) * 100) / 100, e.jsx("div", {
        className: ee.sale_box,
        children: e.jsx("span", {
          className: ee.sale_text,
          children: "-30% "
        })
      })]
    })
  },
  DE = ({
    setError: n,
    setRunParticle: t
  }) => {
    var be;
    const s = _(),
      a = c(Y => Y.shop.activeProductCardId),
      i = c(Y => Y.shop.selectedCurrency),
      o = c(Y => Y.shop.amount),
      [r, l] = A.useState(p.idle),
      [d, m] = A.useState(!1),
      [h, g] = cn(),
      f = c(Y => Y.color.active),
      x = (be = c(Y => Y.shop.products[a]).prices.filter(Y => Y.currency_id === i)[0]) == null ? void 0 : be.price,
      y = zn();
    if (c(Y => Y.shop.selectedCurrency) === 1 || y === "") return null;
    const C = async Y => {
      const U = Be.beginCell().storeUint(0, 32).storeStringTail(Y.txMemCode).endCell(),
        _t = {
          validUntil: Math.floor(Date.now() / 1e3) + 600,
          messages: [{
            address: Ga,
            amount: String(Be.toNano(Y.strAmount)),
            payload: U.toBoc().toString("base64")
          }]
        };
      await h.sendTransaction(_t), t(!0), m(!0), l(p.fulfilled)
    }, Ce = async Y => {
      const U = new xa.HttpProvider("https://toncenter.com/api/v2/jsonRPC"),
        lc = await new xa.token.jetton.JettonMinter(U, {
          address: Rt[i]
        }).getJettonWalletAddress(new xa.utils.Address(y)),
        dc = Be.Address.parse(y),
        uc = Be.Address.parse(Ga),
        mc = Be.beginCell().storeUint(0, 32).storeStringTail(Y.txMemCode).endCell();
      let _a = Be.toNano(Y.strAmount);
      Number(i) === 4 && (_a = _a / 1000n);
      const Ac = Be.beginCell().storeUint(260734629, 32).storeUint(0, 64).storeCoins(_a).storeAddress(uc).storeAddress(dc).storeBit(0).storeCoins(Be.toNano("0.01")).storeBit(1).storeRef(mc).endCell(),
        pc = {
          validUntil: Math.floor(Date.now() / 1e3) + 600,
          messages: [{
            address: lc.toString(!0, !0, !0),
            amount: "101000000",
            payload: Ac.toBoc().toString("base64")
          }]
        };
      await h.sendTransaction(pc), t(!0), m(!0), l(p.fulfilled)
    };
    return x ? e.jsx("button", {
      className: ee.button,
      onPointerUp: async Y => {
        if (Y.stopPropagation(), n(!1), d) {
          s(ci()), l(p.idle);
          return
        }
        if (r !== p.pending) {
          l(p.pending);
          try {
            const U = await W.startShopTransaction({
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
            console.warn(U), n("Something went wrong"), l(p.rejected)
          }
        }
      },
      children: e.jsx(kE, {
        success: d
      })
    }) : e.jsx("div", {
      className: ee.not_available,
      children: "Not available"
    })
  },
  RE = () => {
    const [n, t] = cn(), s = zn(), a = c(i => i.shop.selectedCurrency);
    return s !== "" || a === 1 ? null : e.jsx("button", {
      className: ee.button,
      onPointerUp: async i => {
        i.stopPropagation(), i.preventDefault(), setTimeout(() => {
          n.openModal()
        }, 20)
      },
      children: "Connect TON wallet"
    })
  },
  ME = ({
    success: n
  }) => {
    const t = c(o => o.shop.activeProductCardId),
      s = c(o => o.shop.amount),
      a = c(o => o.shop.products[t]),
      i = !a.isOnePiece;
    return n ? e.jsx(re.Fragment, {
      children: "You bought it!"
    }) : e.jsxs(re.Fragment, {
      children: ["Buy for", e.jsx(P, {
        size: 18,
        className: ee.star_color,
        children: ""
      }), a.prices[0].price * (i ? s : 1)]
    })
  },
  UE = ({
    setError: n,
    setRunParticle: t
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
          s(ci()), l(p.idle);
          return
        }
        if (r === p.pending) return;
        l(p.pending);
        const j = i.isOnePiece ? 1 : o;
        try {
          const y = await W.buy({
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
                s(nn({
                  product: 1,
                  amount: Y[C]
                })), s(nn({
                  product: 2,
                  amount: Y[C]
                })), s(nn({
                  product: 6,
                  amount: Y[C]
                }))
              } else s(nn({
                product: a,
                amount: j
              }));
              m(!0), (be = (Ce = window.Telegram.WebApp) == null ? void 0 : Ce.HapticFeedback) == null || be.notificationOccurred("error"), t(!0)
            } else n("Error, try again.")
          })
        } catch {
          n("Error, try again."), l(p.rejected)
        }
        l(p.fulfilled)
      },
      children: e.jsx("button", {
        className: ee.button,
        children: e.jsx(ME, {
          success: d
        })
      })
    })
  },
  QE = () => (c(rt) === je, null),
  OE = () => {
    const n = c(t => t.shop.activeProductCardId);
    return console.log(n), n !== 13 ? null : e.jsxs("div", {
      style: {
        marginBottom: 15
      },
      children: [e.jsx("div", {
        className: ee.tokens_title,
        style: {
          marginBottom: -10
        },
        children: "Select color"
      }), e.jsx(Lr, {
        colors: $e
      })]
    })
  },
  FE = () => {
    const [n, t] = A.useState(null), [s, a] = A.useState(!1);
    return e.jsxs("div", {
      className: ee.crypto_button_container,
      children: [e.jsx(OE, {}), e.jsx(TE, {}), e.jsx(QE, {}), e.jsx(Vo, {
        runParticle: s,
        setRunParticle: a
      }), n && e.jsx("div", {
        className: ee.error,
        children: " Failure. Something went wrong."
      }), e.jsx(DE, {
        setError: t,
        setRunParticle: a
      }), e.jsx(UE, {
        setError: t,
        setRunParticle: a
      }), e.jsx(RE, {
        setError: t
      })]
    })
  },
  zE = () => {
    _();
    const n = c(i => i.shop.activeProductCardId),
      t = c(i => i.shop.amount);
    return c(i => i.shop.products[n]).isOnePiece ? null : e.jsx("div", {
      className: ee.amount_selector_container,
      children: e.jsxs("div", {
        className: ee.amount_selector_count,
        children: ["× ", t]
      })
    })
  },
  GE = "_container_1rmx4_1",
  LE = "_max_value_1rmx4_9",
  oo = {
    container: GE,
    max_value: LE
  },
  ns = n => n < 100 ? {
    max: 100,
    step: 1
  } : n < 500 ? {
    max: 500,
    step: 5
  } : n < 1e3 ? {
    max: 1e3,
    step: 10
  } : {
    max: 5e3,
    step: 50
  };

function ro(n, t) {
  return Math.round(n / t) * t
}
const HE = () => {
    const n = _(),
      t = c(x => x.shop.activeProductCardId),
      s = c(x => x.shop.amount),
      i = c(x => x.shop.products[t]).isOnePiece,
      [o, r] = A.useState([s]),
      [l, d] = A.useState(ns(s).max),
      [m, h] = A.useState(ns(s).step),
      g = l === 5e3 ? "5000" : `${l}+`,
      f = x => {
        const y = x[0];
        n(na(ro(y, m))), r([ro(y, m)])
      },
      j = x => {
        const y = x[0];
        y === l && (d(ns(y).max), h(ns(y).step))
      };
    return i ? null : e.jsxs("div", {
      className: oo.container,
      children: [e.jsx(Mt.Range, {
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
              background: Mt.getTrackBackground({
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
        className: oo.max_value,
        children: [" ", g]
      })]
    })
  },
  qE = () => e.jsxs("div", {
    className: ee.body,
    onPointerUp: n => {
      n.stopPropagation()
    },
    children: [e.jsx(SE, {}), e.jsxs("div", {
      className: ee.content_container,
      children: [e.jsx(BE, {}), e.jsx(zE, {}), e.jsx(HE, {})]
    }), e.jsx(FE, {})]
  }),
  YE = () => {
    const n = c(t => t.shop.show);
    return ze.createPortal(e.jsx(Ve, {
      show: n,
      children: e.jsxs("div", {
        className: ee.container,
        children: [e.jsx(PE, {}), e.jsx(qE, {})]
      })
    }), document.body)
  },
  VE = "_layout_9sf1k_1",
  XE = "_container_9sf1k_13",
  WE = "_header_9sf1k_20",
  JE = "_title_9sf1k_30",
  ZE = "_body_9sf1k_35",
  KE = "_image_container_9sf1k_47",
  $E = "_image_9sf1k_47",
  ek = "_shake_9sf1k_1",
  tk = "_description_container_9sf1k_60",
  nk = "_buyer_info_9sf1k_70",
  sk = "_avatar_9sf1k_78",
  ak = "_name_9sf1k_84",
  ik = "_squad_info_9sf1k_88",
  ok = "_squad_avatar_9sf1k_94",
  rk = "_text_container_9sf1k_100",
  ck = "_text_9sf1k_100",
  lk = "_thanos_snap_container_9sf1k_110",
  dk = "_thanos_snap_text_9sf1k_119",
  uk = "_button_container_9sf1k_126",
  mk = "_button_9sf1k_126",
  ye = {
    layout: VE,
    container: XE,
    header: WE,
    title: JE,
    body: ZE,
    image_container: KE,
    image: $E,
    shake: ek,
    description_container: tk,
    buyer_info: nk,
    avatar: sk,
    name: ak,
    squad_info: ik,
    squad_avatar: ok,
    text_container: rk,
    text: ck,
    thanos_snap_container: lk,
    thanos_snap_text: dk,
    button_container: uk,
    button: mk
  },
  Ak = `precision highp float;

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
  pk = `precision mediump float;

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
  ic = 7200,
  hk = 1;
let N = null,
  Ee = null,
  ss = -1,
  zs = 0;
async function gk(n) {
  if (N = _k().getContext("webgl"), !N) {
    console.log("Your browser doesn't support WebGL :(");
    return
  }
  await fk(), vk(n)
}

function _k() {
  const n = document.createElement("canvas");
  return n.id = "canvasSnap", n.width = window.innerWidth, n.height = window.innerHeight, n.style.width = `${window.innerWidth}px`, n.style.height = `${window.innerHeight}px`, n.style.position = "fixed", n.style.top = "50%", n.style.left = "50%", n.style.zIndex = "980", n.style.transform = "translate(-50%, -50%)", n.style.opacity = "0", n.style.transition = "2s ease opacity", document.body.appendChild(n), window.getComputedStyle(n).opacity, n.style.opacity = "1", n
}
async function fk() {
  N.enable(N.BLEND), N.blendFunc(N.SRC_ALPHA, N.ONE_MINUS_SRC_ALPHA), N.clearColor(0, 0, 0, 0), N.viewport(0, 0, N.canvas.width, N.canvas.height), Ee = await xk(N), N.useProgram(Ee)
}
async function xk(n, t, s) {
  const a = Ak,
    i = pk,
    o = co(n, a, n.VERTEX_SHADER),
    r = co(n, i, n.FRAGMENT_SHADER),
    l = n.createProgram();
  return n.attachShader(l, o), n.attachShader(l, r), n.linkProgram(l), n.getProgramParameter(l, n.LINK_STATUS) || console.error("Shader program initialization failure:", n.getProgramInfoLog(l)), l
}

function co(n, t, s) {
  const a = n.createShader(s);
  return n.shaderSource(a, t), n.compileShader(a), n.getShaderParameter(a, n.COMPILE_STATUS) ? a : (console.error("Shader compilation failure:", n.getShaderInfoLog(a)), n.deleteShader(a), null)
}
async function vk(n) {
  yk(), bk(n), oc(), document.getElementById("canvasHolder").style.opacity = "0", setTimeout(() => {
    const t = document.getElementById("canvasHolder");
    t.style.transition = "6s ease-in opacity", t.style.opacity = "1"
  }, 20), setTimeout(() => {
    document.getElementById("canvasHolder").style.transition = ""
  }, 7e3)
}

function yk(n) {
  const t = wk();
  var s = N.createTexture();
  N.bindTexture(N.TEXTURE_2D, s), N.texParameteri(N.TEXTURE_2D, N.TEXTURE_WRAP_S, N.CLAMP_TO_EDGE), N.texParameteri(N.TEXTURE_2D, N.TEXTURE_WRAP_T, N.CLAMP_TO_EDGE), N.texParameteri(N.TEXTURE_2D, N.TEXTURE_MIN_FILTER, N.NEAREST), N.texParameteri(N.TEXTURE_2D, N.TEXTURE_MAG_FILTER, N.NEAREST), N.texImage2D(N.TEXTURE_2D, 0, N.RGBA, N.RGBA, N.UNSIGNED_BYTE, t);
  const a = N.getUniformLocation(Ee, "u_Texture");
  N.uniform1i(a, 0)
}

function wk() {
  const n = new ImageData(E.width, E.height);
  return n.data.set(b.mainImage.imageData.slice(0)), n
}

function jk(n) {
  const t = window.innerHeight,
    s = window.innerWidth,
    a = Math.min(s, t);
  return s > t ? {
    viewportWidth: s,
    viewportHeight: t,
    textureWidth: a - n,
    textureHeight: a - n,
    textureLeft: (s - t + n) / 2,
    textureTop: n,
    min: Math.min(s, t)
  } : {
    viewportWidth: s,
    viewportHeight: t,
    textureWidth: a,
    textureHeight: a,
    textureLeft: 0,
    textureTop: (t - s + n) / 2,
    min: Math.min(s, t)
  }
}

function bk(n) {
  const {
    viewportWidth: t,
    viewportHeight: s,
    textureWidth: a,
    textureHeight: i,
    textureLeft: o,
    textureTop: r,
    min: l
  } = jk(n);
  zs = l * l, mt(N, Ee, "u_AnimationDuration", ic), mt(N, Ee, "u_ParticleSize", hk), mt(N, Ee, "u_ViewportWidth", t), mt(N, Ee, "u_ViewportHeight", s), mt(N, Ee, "u_TextureWidth", a), mt(N, Ee, "u_TextureHeight", i), mt(N, Ee, "u_TextureLeft", o), mt(N, Ee, "u_TextureTop", r);
  const d = new Array(zs);
  for (let g = 0; g < zs; g++) d[g] = g;
  const m = N.createBuffer();
  N.bindBuffer(N.ARRAY_BUFFER, m), N.bufferData(N.ARRAY_BUFFER, new Float32Array(d), N.STATIC_DRAW);
  const h = N.getAttribLocation(Ee, "a_ParticleIndex");
  N.enableVertexAttribArray(h), N.vertexAttribPointer(h, 1, N.FLOAT, !1, 0, 0)
}

function oc() {
  requestAnimationFrame(Nk)
}

function Nk(n) {
  N.clear(N.COLOR_BUFFER_BIT), ss == -1 && (ss = n);
  const s = n - ss;
  if (s > ic) {
    ss = -1, document.getElementById("canvasSnap").remove();
    return
  }
  mt(N, Ee, "u_ElapsedTime", s), N.drawArrays(N.POINTS, 0, zs), oc()
}

function mt(n, t, s, a) {
  const i = n.getUniformLocation(t, s);
  n.uniform1f(i, a)
}
const Ck = () => {
    const n = te(),
      t = _(),
      s = c(r => r.main.showPixanosEvent),
      a = c(r => r.main.pixanosEventData),
      i = c(Bt);
    if (A.useEffect(() => {
        s && a && (async () => {
          var l, d;
          b.viewport.viewport.fit(), b.viewport.viewport.moveCenter(b.viewport.viewport.worldWidth / 2, b.viewport.viewport.worldHeight / 2), t(Fi(!0)), setTimeout(() => {
            t(Fi(!1)), t(dg())
          }, 7e3);
          try {
            await gk(i ? 0 : _o)
          } catch (m) {
            document.getElementById("canvasHolder").style.opacity = "1", console.error(m, "cannot run pixanos")
          }
          n.push("/"), b.mainImage.pixanosRepaint(a.info.seed, E.width, a.info.percentage, a.info.color), (d = (l = window.Telegram.WebApp) == null ? void 0 : l.HapticFeedback) == null || d.notificationOccurred("error")
        })()
      }, [s, a]), !a) return null;
    const o = a.user.squad;
    return e.jsx(Ve, {
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
              src: dn
            })
          }), e.jsxs("div", {
            className: ye.description_container,
            children: [e.jsxs("div", {
              className: ye.buyer_info,
              children: [e.jsx("img", {
                alt: "avatar",
                src: a.user.userPic && a.user.userPic !== "" ? a.user.userPic : at,
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
                  src: o.logo && o.logo !== "" ? o.logo : Ot,
                  className: ye.squad_avatar
                }), e.jsx(_n, {
                  address: `${Nt}?startapp=${btoa(`id=${o.squadId}`)}`,
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
  Ik = () => {
    var o, r;
    const n = c(l => l.user.user),
      t = _(),
      s = c(l => l.main.showNoChargesPopup),
      a = c(l => l.main.settings);
    let i = `${Pt}?startapp=f${((r=(o=window.Telegram.WebApp.initDataUnsafe)==null?void 0:o.user)==null?void 0:r.id)||""}`;
    return n && n.squad && n.squad.id !== null && (i += `_s${n.squad.id}`), e.jsx(Ve, {
      show: s,
      onPointerUp: () => t(Ta()),
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
              t(Ta())
            },
            children: e.jsx("div", {
              className: O.close,
              children: e.jsx(P, {
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
                src: Hr
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
          children: [e.jsx(Lt, {
            url: i
          }), e.jsx("button", {
            className: O.button,
            onPointerUp: l => {
              l.stopPropagation(), window.Telegram.WebApp.openLink(`https://t.me/share/url?url=${i}`), t(Ta())
            },
            children: "Share"
          })]
        })]
      })
    })
  },
  Pk = () => ta().pathname === "/" ? null : e.jsx("div", {
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
  Sk = "_layout_1f2lr_1",
  Bk = "_item_1f2lr_19",
  Tk = "_image_1f2lr_38",
  rc = {
    layout: Sk,
    item: Bk,
    image: Tk
  },
  Ek = ({
    item: n
  }) => {
    const t = _(),
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
    let a = n.icon ? n.icon : "";
    return A.useEffect(() => {
      const i = setTimeout(() => {
        t(Di(n.id))
      }, 3e3);
      return () => {
        clearTimeout(i)
      }
    }, []), e.jsxs(Mn.div, {
      variants: s,
      initial: "hidden",
      animate: "enter",
      exit: "exit",
      transition: {
        duration: .3
      },
      className: rc.item,
      onPointerUp: () => {
        t(Di(n.id))
      },
      children: [e.jsx(P, {
        size: 20,
        children: a
      }), n.text]
    })
  },
  kk = () => {
    const n = c(t => t.toast.items);
    return ze.createPortal(e.jsx("div", {
      className: rc.layout,
      children: e.jsx(ni, {
        children: n.map(t => e.jsx(Ek, {
          item: t
        }, t.id))
      })
    }), document.body)
  },
  Dk = "_layout_1nuac_1",
  Rk = "_container_1nuac_19",
  Mk = "_image_container_1nuac_30",
  Uk = "_image_1nuac_30",
  Qk = "_text_container_1nuac_42",
  Ok = "_title_1nuac_49",
  Fk = "_button_container_1nuac_55",
  zk = "_button_1nuac_55",
  vt = {
    layout: Dk,
    container: Rk,
    image_container: Mk,
    image: Uk,
    text_container: Qk,
    title: Ok,
    button_container: Fk,
    button: zk
  },
  Gk = () => {
    const n = _();
    return c(s => s.main.showNoFlagsPopup) ? ze.createPortal(e.jsx("div", {
      className: vt.layout,
      children: e.jsxs("div", {
        className: vt.container,
        children: [e.jsx("div", {
          className: vt.image_container,
          children: e.jsx("img", {
            alt: "img",
            className: vt.image,
            src: ha
          })
        }), e.jsxs("div", {
          className: vt.text_container,
          children: [e.jsx("div", {
            className: vt.title,
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
          className: vt.button_container,
          children: e.jsx("button", {
            className: vt.button,
            onPointerUp: () => {
              n(hg(!1))
            },
            children: "That’s so wise!"
          })
        })]
      })
    }), document.body) : null
  },
  Lk = ({
    isPopupContent: n = !0
  }) => {
    const t = n ? "Squad" : "My Squad",
      s = kt(n);
    return e.jsxs("div", {
      className: F(D.container, !n && D.page),
      children: [n && e.jsx(Vr, {}), e.jsx("div", {
        children: e.jsx("span", {
          className: D.title,
          children: t
        })
      }), e.jsx(Xr, {
        ...s
      }), e.jsx(Wr, {
        ...s
      }), e.jsx(Jr, {
        ...s
      }), e.jsx(Zr, {
        ...s
      }), e.jsx(Kr, {
        ...s
      })]
    })
  },
  Hk = () => {
    const n = _(),
      {
        item: t
      } = kt(),
      s = !0;
    return e.jsx(Ve, {
      show: t.dataSource !== null,
      onPointerUp: a => {
        a.stopPropagation(), n(gr())
      },
      children: e.jsxs("div", {
        className: Yr.layout,
        onPointerUp: a => {
          a.stopPropagation()
        },
        children: [t.dataSource === Ke.userFromPixelInfo && e.jsx($a, {
          isPopupContent: s
        }), t.dataSource === Ke.userFromRating && e.jsx($a, {
          isPopupContent: s
        }), t.dataSource === Ke.squadFromData && e.jsx(Lk, {})]
      })
    })
  },
  qk = "_overlay_12d15_1",
  Yk = "_top_container_12d15_10",
  Vk = "_bottom_container_12d15_15",
  Xk = "_side_menu_12d15_20",
  Wk = "_menu_safe_area_inset_12d15_36",
  Jk = "_menu_header_12d15_40",
  Zk = "_close_button_12d15_53",
  Kk = "_menu_list_12d15_58",
  $k = "_icon_12d15_79",
  eD = "_icon_not_pixel_12d15_87",
  tD = "_gold_pixel_12d15_97",
  nD = "_menu_list_li_12d15_103",
  sD = "_menu_list_text_12d15_109",
  aD = "_menu_list_new_item_12d15_113",
  iD = "_verificated_wallet_12d15_136",
  oD = "_button_wrapper_12d15_144",
  rD = "_button_content_12d15_153",
  cD = "_footer_12d15_160",
  lD = "_avatar_12d15_166",
  dD = "_ratings_image_container_12d15_173",
  uD = "_ratings_image_12d15_173",
  K = {
    overlay: qk,
    top_container: Yk,
    bottom_container: Vk,
    side_menu: Xk,
    menu_safe_area_inset: Wk,
    menu_header: Jk,
    close_button: Zk,
    menu_list: Kk,
    icon: $k,
    icon_not_pixel: eD,
    gold_pixel: tD,
    menu_list_li: nD,
    menu_list_text: sD,
    menu_list_new_item: aD,
    verificated_wallet: iD,
    button_wrapper: oD,
    button_content: rD,
    footer: cD,
    avatar: lD,
    ratings_image_container: dD,
    ratings_image: uD
  },
  lo = [.215, .61, .355, 1],
  mD = {
    hidden: {
      x: "-100%",
      transition: {
        type: "tween",
        duration: .25,
        ease: lo
      }
    },
    visible: {
      x: 0,
      transition: {
        type: "tween",
        duration: .25,
        ease: lo
      }
    }
  },
  AD = "_button_25266_1",
  pD = "_decor_25266_13",
  hD = "_dark_25266_22",
  uo = {
    button: AD,
    decor: pD,
    dark: hD
  },
  mo = ({
    children: n,
    variant: t = "dark",
    onPointerUp: s = () => {},
    style: a = {},
    className: i = void 0
  }) => e.jsx("button", {
    onPointerUp: s,
    className: F(uo.button, uo[t], i),
    style: a,
    children: n
  }),
  gD = "_layout_4kkfr_1",
  _D = "_line_4kkfr_14",
  fD = "_button_4kkfr_19",
  Kt = {
    layout: gD,
    line: _D,
    button: fD
  },
  xD = ({
    className: n = void 0
  }) => {
    const t = _(),
      s = te();
    return e.jsx("div", {
      className: F(Kt.layout, n),
      children: e.jsxs("div", {
        className: Kt.line,
        children: [e.jsx("div", {
          className: Kt.button,
          onPointerUp: () => {
            t(Qt(!1)), s.push("/rules")
          },
          children: "Rules"
        }), e.jsx("div", {
          className: Kt.button,
          onPointerUp: () => {
            X(si)
          },
          children: "Support"
        }), e.jsx("div", {
          className: Kt.button,
          onPointerUp: () => {
            t(Qt(!1)), s.push("/terms")
          },
          children: "Terms"
        }), e.jsx("div", {
          className: Kt.button,
          onPointerUp: () => {
            t(Qt(!1)), s.push("/privacy")
          },
          children: "Privacy"
        })]
      })
    })
  },
  vD = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAABtQTFRFR3BM////////////////////////////////Fv0dDgAAAAh0Uk5TABU6XISq0+/2d3cmAAABKElEQVR42u3Z24rDMAxFUV1s6fz/Fw+FlA4lpGOj2Ew566kPKWxEQ2NFiIiIiIiIiIiI6L/RFrgQTeVWGvggbikwPwQ+Cj+YVLHAlChKcExzKaCJaak1A9g7gg7M61UBfSDmeS0DGMAABlQFNACI8YAAgPYNAY6H8YCyPyPDg40FvL5WAA9tNKAdg6u6DVLHAjSPjwX8NYKGa+9XuhQ+k41NAMfYSjRMalIkMCWkiiUmpMneAltwJlx5RlTz1hJ/kK25qdxCvQcuRfetB/RQuZ1l1Q+/viBNZGdBmiyiHSe6yjqeeJMua3ngl3BZT70nAOTsrV95ZmDADvbcW8bEUrJ+eRmLE7xgI1e9vExdO4C9I+g40WUdnNoewPdJREREREREREREU34Aqms7WGCxI2EAAAAASUVORK5CYII=",
  yD = "_layout_eiymv_1",
  wD = "_container_eiymv_7",
  Ao = {
    layout: yD,
    container: wD
  },
  jD = () => localStorage.getItem("canvasFps") ? [Number(localStorage.getItem("canvasFps"))] : [60],
  bD = () => {
    const [n, t] = re.useState(jD());
    return A.useEffect(() => {
      localStorage.setItem("canvasFps", String(n[0])), b.ticker.setFps(n[0])
    }, [n]), e.jsx("div", {
      className: Ao.layout,
      children: e.jsxs("div", {
        className: Ao.container,
        children: [e.jsx(Mt.Range, {
          label: "Select your value",
          step: 1,
          min: 10,
          max: 60,
          values: n,
          onChange: s => t(s),
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
          children: ["Fps: ", n]
        })]
      })
    })
  },
  ND = "_layout_7wq4a_1",
  CD = "_green_7wq4a_10",
  ID = "_red_7wq4a_14",
  Oa = {
    layout: ND,
    green: CD,
    red: ID
  },
  PD = () => {
    const n = _(),
      t = c(s => s.canvas.animations);
    return e.jsxs("div", {
      className: Oa.layout,
      onPointerUp: () => {
        n(t ? ih() : ah())
      },
      children: [e.jsx("span", {
        style: {
          color: "var(--font-secondary-color)"
        },
        children: "Animation:"
      }), " ", t ? e.jsx("span", {
        className: Oa.green,
        children: "on"
      }) : e.jsx("span", {
        className: Oa.red,
        children: "off"
      })]
    })
  },
  SD = () => {
    const n = c(oa),
      t = c(ra);
    return e.jsx("div", {
      style: {
        width: "100%",
        height: n.bottom + t.bottom
      }
    })
  },
  BD = () => {
    const n = te(),
      t = _();
    c(Le);
    const s = zn(),
      [a, i] = cn();
    c(ou);
    const o = c(vr),
      r = c(Bt),
      l = () => {
        t(Qt(!1))
      },
      d = x => {
        t(Qt(!1)), n.push(x)
      },
      m = () => {
        const x = `${window.location.origin}/stars?initData=${btoa(window.Telegram.WebApp.initData)}`;
        St(x)
      },
      h = c(x => x.user.verificatedWallet),
      g = oi(h),
      f = qs(g),
      j = c(x => x.user.verificatedWalletStatus);
    return A.useEffect(() => {
      o && j === p.idle && t(Fe.getVerificatedWallet())
    }, [o]), e.jsx(e.Fragment, {
      children: e.jsx(ni, {
        children: o && e.jsxs(e.Fragment, {
          children: [e.jsx(Mn.div, {
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
          }), e.jsxs(Mn.nav, {
            className: K.side_menu,
            initial: "hidden",
            animate: "visible",
            exit: "hidden",
            variants: mD,
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
                    children: e.jsx(P, {
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
                      src: zr
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
                      src: vD
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
                    children: e.jsx(P, {
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
                    children: e.jsx(P, {
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
                    children: e.jsx(P, {
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
              children: [e.jsx(PD, {}), e.jsx(bD, {}), f && f !== "" && e.jsxs("div", {
                className: K.verificated_wallet,
                children: ["Verificated wallet: ", f]
              }), e.jsxs("div", {
                className: K.button_wrapper,
                children: [s !== "" && e.jsx(mo, {
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
                    }), e.jsx(P, {
                      size: 20,
                      style: {
                        fontWeight: 400
                      },
                      children: ""
                    })]
                  })
                }), e.jsx(mo, {
                  onPointerUp: m,
                  variant: "dark",
                  style: {
                    width: "90%"
                  },
                  children: e.jsxs("div", {
                    className: K.button_content,
                    children: [e.jsx("span", {
                      children: "Desktop version"
                    }), e.jsx(P, {
                      size: 20,
                      style: {
                        fontWeight: 400
                      },
                      children: ""
                    })]
                  })
                })]
              }), e.jsx(xD, {}), e.jsx(SD, {})]
            })]
          })]
        })
      })
    })
  },
  TD = "_layout_1at34_1",
  ED = "_container_1at34_10",
  kD = "_item_1at34_14",
  Fa = {
    layout: TD,
    container: ED,
    item: kD
  },
  DD = 8,
  RD = 16,
  MD = 500,
  cc = 800,
  po = window.innerWidth,
  ho = 100,
  UD = () => Array.from(Array(100)).map(() => {
    const n = k(DD, RD),
      t = `hsl(${k(0,360)} , 70%, 50%)`,
      s = k(MD, cc),
      a = k(-po, po),
      i = k(-ho, ho);
    return {
      size: n,
      color: t,
      speed: s,
      x: a,
      y: i,
      transform: !1,
      opacity: !1
    }
  });
A.memo(({
  runParticle: n,
  setRunParticle: t
}) => {
  const [s, a] = A.useState(UD()), [i, o] = A.useState(!1);
  return A.useEffect(() => {
    n && setTimeout(() => {
      o(!0), setTimeout(() => {
        t(!1), o(!1)
      }, cc)
    }, 200)
  }, [n]), e.jsx("div", {
    className: Fa.layout,
    style: {
      visibility: n ? "visible" : "hidden"
    },
    children: e.jsx("div", {
      className: Fa.container,
      children: s.map((r, l) => e.jsx("div", {
        className: Fa.item,
        style: {
          width: r.size,
          height: r.size,
          backgroundColor: r.color,
          transition: n ? `all ${r.speed}ms ease` : "",
          transform: n ? `translate(${r.x}px, ${r.y}px)` : "translate(0px, 0px)",
          opacity: i ? 0 : 1
        }
      }, l))
    })
  })
});
const QD = "_container_gb8eq_1",
  OD = "_header_gb8eq_11",
  FD = "_title_gb8eq_17",
  zD = "_close_container_gb8eq_23",
  GD = "_close_gb8eq_23",
  LD = "_body_gb8eq_47",
  HD = "_content_gb8eq_59",
  qD = "_time_left_container_gb8eq_65",
  YD = "_timer_gb8eq_69",
  VD = "_image_container_gb8eq_73",
  XD = "_image_gb8eq_73",
  WD = "_glow_container_gb8eq_91",
  JD = "_glow_gb8eq_91",
  ZD = "_rotate_gb8eq_1",
  KD = "_glow_reverse_gb8eq_107",
  $D = "_description_container_gb8eq_113",
  e4 = "_bold_gb8eq_123",
  t4 = "_gray_gb8eq_128",
  n4 = "_center_gb8eq_132",
  s4 = "_gold_gb8eq_136",
  a4 = "_button_gb8eq_144",
  we = {
    container: QD,
    header: OD,
    title: FD,
    close_container: zD,
    close: GD,
    body: LD,
    content: HD,
    time_left_container: qD,
    timer: YD,
    image_container: VD,
    image: XD,
    glow_container: WD,
    glow: JD,
    rotate: ZD,
    glow_reverse: KD,
    description_container: $D,
    bold: e4,
    gray: t4,
    center: n4,
    gold: s4,
    button: a4
  },
  i4 = "/assets/cup_glad-DGT2PBmm.png",
  o4 = () => {
    const n = te(),
      t = c(Le),
      [s, a] = A.useState(!1),
      i = "showCreateTournamentTemplatePopup";
    return A.useEffect(() => (ii() && (localStorage.getItem(i) || a(!0)), () => {}), [t]), e.jsx(Ve, {
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
                children: e.jsx(P, {
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
                  src: nc
                })
              }), e.jsx("div", {
                className: we.glow_container,
                children: e.jsx("img", {
                  alt: "image",
                  className: we.glow_reverse,
                  src: sc
                })
              }), e.jsx("img", {
                alt: "image",
                className: we.image,
                src: i4
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
              o.stopPropagation(), n.push("/tournament"), localStorage.setItem(i, "true"), a(!1)
            },
            children: "Select template"
          })]
        })
      })
    })
  },
  r4 = "_layout_xga4i_1",
  c4 = "_container_xga4i_14",
  l4 = "_header_xga4i_20",
  d4 = "_close_xga4i_25",
  u4 = "_body_xga4i_38",
  m4 = "_image_container_xga4i_42",
  A4 = "_image_xga4i_42",
  p4 = "_glow_xga4i_55",
  h4 = "_forward_xga4i_62",
  g4 = "_rotate_xga4i_1",
  _4 = "_reverse_xga4i_66",
  f4 = "_text_container_xga4i_70",
  x4 = "_title_xga4i_78",
  v4 = "_description_xga4i_82",
  y4 = "_footer_xga4i_86",
  w4 = "_button_xga4i_90",
  fe = {
    layout: r4,
    container: c4,
    header: l4,
    close: d4,
    body: u4,
    image_container: m4,
    image: A4,
    glow: p4,
    forward: h4,
    rotate: g4,
    reverse: _4,
    text_container: f4,
    title: x4,
    description: v4,
    footer: y4,
    button: w4
  },
  j4 = "_layout_a9x11_1",
  b4 = "_container_a9x11_10",
  N4 = "_star_a9x11_14",
  C4 = "_move_a9x11_1",
  za = {
    layout: j4,
    container: b4,
    star: N4,
    move: C4
  },
  I4 = A.memo(() => {
    const n = Array.from(Array(30));
    return e.jsx("div", {
      className: za.layout,
      children: e.jsx("div", {
        className: za.container,
        children: n.map((t, s) => {
          const a = k(8, 12);
          return e.jsx(M, {
            size: a,
            className: za.star,
            style: {
              animationDelay: `-${s*300}ms`,
              transform: `translate(${k(-80,-170)*(s%2===1?1:-1)}px, ${k(-100,100)}px)`
            }
          }, s)
        })
      })
    })
  }, () => !1),
  P4 = () => {
    const n = _(),
      t = c(Le),
      s = c(C => C.reward.showPopup),
      a = c(C => C.reward.info),
      [i, o] = A.useState(!1),
      r = c(aa),
      l = async () => {
        if (i)
          if (n(D_()), n(U_()), a && a.user.reward_id && a.type === "goods") {
            const C = await W.claimRewardById({
              rewardId: a.user.id,
              userId: t.id
            });
            (C.status === 200 || C.status === 204) && n(nn({
              product: a.good_id,
              amount: 1
            }))
          } else a && a.type === "px" ? n(Tt(0)) : a && a.user && a.user.token
      }, d = c(C => C.user.verificatedWallet), m = oi(d), h = qs(m), g = c(C => C.user.verificatedWalletStatus);
    if (A.useEffect(() => {
        const C = setTimeout(() => {
          o(!0)
        }, 1e3);
        return () => {
          clearTimeout(C)
        }
      }, []), A.useEffect(() => {
        g === p.idle && a && a.user && a.user.token && a.user.token !== "" && n(Fe.getVerificatedWallet())
      }, [g]), !a) return null;
    let f = a.name,
      j = a.description,
      x = a.image_url || Za,
      y = "",
      B = "goods";
    return a.user.token !== "" && (B = "crypto", x = Za, a.user.currency_id, f = a.user.token, j = "Yo, you hit the crypto jackpot! Nice one, fam!", r.forEach(C => {
      C.name === f && (x = C.image)
    }), y = a.user.amount + " "), e.jsx(Ve, {
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
              children: e.jsx(P, {
                size: 24,
                children: ""
              })
            })
          }), e.jsxs("div", {
            className: fe.body,
            children: [e.jsxs("div", {
              className: fe.image_container,
              children: [e.jsx(I4, {}), e.jsx("img", {
                alt: "glow",
                src: Ja,
                className: F(fe.glow, fe.forward)
              }), e.jsx("img", {
                alt: "glow",
                src: Ja,
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
const S4 = "_layout_15tw0_1",
  B4 = "_container_15tw0_7",
  T4 = "_close_button_15tw0_16",
  E4 = "_title_container_15tw0_24",
  k4 = "_image_container_15tw0_31",
  D4 = "_image_15tw0_31",
  R4 = "_text_container_15tw0_50",
  M4 = "_button_container_15tw0_56",
  lt = {
    layout: S4,
    container: B4,
    close_button: T4,
    title_container: E4,
    image_container: k4,
    image: D4,
    text_container: R4,
    button_container: M4
  },
  U4 = () => {
    const n = c(r => r.main.startParams),
      [t, s] = A.useState(null),
      a = c(r => r.tournament.selectedTemplate),
      i = c(r => r.tournament.selectedTemplateStatus),
      o = () => {
        s(null)
      };
    return A.useEffect(() => {
      if (n.showTemplate && n.refId && (i === p.fulfilled && a && a.id !== n.refId || i === p.rejected)) try {
        (async () => {
          const l = await qe.getTournamentTemplateById({
            id: n.refId
          });
          if (l.status === 200 && l.data && l.data.approved) {
            const d = l.data;
            s(d)
          }
        })()
      } catch {}
    }, [n, s, i]), e.jsx(Ve, {
      show: t,
      onPointerUp: o,
      children: e.jsx("div", {
        className: lt.layout,
        onPointerUp: r => {
          r.stopPropagation()
        },
        children: e.jsxs("div", {
          className: lt.container,
          children: [e.jsx("div", {
            className: lt.close_button,
            onPointerUp: o,
            children: e.jsx(P, {
              size: 26,
              children: ""
            })
          }), e.jsx("div", {
            className: lt.title_container,
            children: e.jsx("span", {
              children: "Friend's template invitation"
            })
          }), e.jsx("div", {
            className: lt.image_container,
            children: e.jsx("img", {
              alt: "img",
              className: `${lt.image} ${lt.first_image}`,
              src: t ? t.url : ""
            })
          }), e.jsx("div", {
            className: lt.text_container,
            children: e.jsxs("span", {
              children: ["Your friend has a template in tournament. ", e.jsx("br", {}), " Ready to team up?"]
            })
          }), e.jsx("div", {
            className: lt.button_container,
            children: e.jsx(ac, {
              template: t,
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
  Q4 = "_layout_1vlcp_1",
  O4 = "_container_1vlcp_13",
  F4 = "_close_button_1vlcp_21",
  z4 = "_body_1vlcp_29",
  G4 = "_image_container_1vlcp_40",
  L4 = "_image_1vlcp_40",
  H4 = "_shake_1vlcp_1",
  q4 = "_description_container_1vlcp_54",
  Y4 = "_buyer_info_1vlcp_64",
  V4 = "_avatar_1vlcp_72",
  X4 = "_name_1vlcp_78",
  W4 = "_squad_info_1vlcp_82",
  J4 = "_squad_avatar_1vlcp_88",
  Z4 = "_text_container_1vlcp_94",
  K4 = "_text_1vlcp_94",
  $4 = "_thanos_snap_container_1vlcp_105",
  eR = "_thanos_snap_text_1vlcp_114",
  tR = "_prev_snaps_container_1vlcp_121",
  nR = "_prev_snaps_text_1vlcp_128",
  sR = "_prev_snaps_list_container_1vlcp_134",
  aR = "_prev_snaps_list_item_1vlcp_142",
  iR = "_button_container_1vlcp_148",
  oR = "_button_1vlcp_148",
  rR = "_button_text_1vlcp_163",
  ne = {
    layout: Q4,
    container: O4,
    close_button: F4,
    body: z4,
    image_container: G4,
    image: L4,
    shake: H4,
    description_container: q4,
    buyer_info: Y4,
    avatar: V4,
    name: X4,
    squad_info: W4,
    squad_avatar: J4,
    text_container: Z4,
    text: K4,
    thanos_snap_container: $4,
    thanos_snap_text: eR,
    prev_snaps_container: tR,
    prev_snaps_text: nR,
    prev_snaps_list_container: sR,
    prev_snaps_list_item: aR,
    button_container: iR,
    button: oR,
    button_text: rR
  },
  cR = n => {
    const t = new Date;
    t.setHours(0, 0, 0, 0);
    const s = new Date(t);
    s.setDate(t.getDate() - 1);
    const a = new Date(n);
    return a.setHours(0, 0, 0, 0), a.getTime() === t.getTime() ? "today" : a.getTime() === s.getTime() ? "yesterday" : "once"
  },
  lR = n => {
    const t = String(n.getHours()).padStart(2, "0"),
      s = String(n.getMinutes()).padStart(2, "0");
    return ` ${cR(n)} at ${t}:${s}`
  },
  dR = () => {
    const n = _(),
      t = c(r => r.main.showPixanosRating),
      s = c(r => r.main.pixanosRatingData),
      a = c(r => r.color.active);
    if (!s) return null;
    const i = s[0],
      o = i.user.squad;
    return e.jsx(Ve, {
      show: t,
      onPointerUp: () => {
        n(Ps(!1))
      },
      children: e.jsxs("div", {
        className: ne.container,
        children: [e.jsx("div", {
          className: ne.close_button,
          onPointerUp: () => {
            n(Ps(!1))
          },
          children: e.jsx(P, {
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
              src: dn
            })
          }), e.jsxs("div", {
            className: ne.description_container,
            children: [e.jsxs("div", {
              className: ne.buyer_info,
              children: [e.jsx("img", {
                alt: "avatar",
                src: i.user.userPic && i.user.userPic !== "" ? i.user.userPic : at,
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
                  src: o.logo && o.logo !== "" ? o.logo : Ot,
                  className: ne.squad_avatar
                }), e.jsx(_n, {
                  address: `${Nt}?startapp=${btoa(`id=${o.squadId}`)}`,
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
                  children: lR(new Date(i.info.datetime))
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
                  src: r.user.userPic && r.user.userPic !== "" ? r.user.userPic : at,
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
                  const d = await W.buy({
                    type: 13,
                    qty: 1,
                    pixanosColor: a
                  });
                  d.status === 200 && ((l = d == null ? void 0 : d.data) == null ? void 0 : l.ok) === !0 && window.Telegram.WebApp.openInvoice(d.data.result, m => {
                    var h, g;
                    if (m === "paid") n(z({
                      id: performance.now(),
                      text: "Success!",
                      icon: ""
                    })), n(Ps(!1)), (g = (h = window.Telegram.WebApp) == null ? void 0 : h.HapticFeedback) == null || g.notificationOccurred("error");
                    else throw new Error("Error")
                  })
                } catch {
                  n(z({
                    id: performance.now(),
                    text: "Error, try again."
                  }))
                }
              },
              children: e.jsxs("div", {
                className: F(ne.button_text, ne.thanos_snap_text),
                children: ["Buy Pixanos' Snap for 40 000 ", e.jsx(un, {
                  fontSize: 16
                })]
              })
            })
          })]
        })]
      })
    })
  },
  uR = "_layout_1i63b_1",
  mR = "_container_1i63b_18",
  AR = "_image_container_1i63b_25",
  pR = "_title_1i63b_30",
  hR = "_text_container_1i63b_37",
  gR = "_support_container_1i63b_46",
  $t = {
    layout: uR,
    container: mR,
    image_container: AR,
    title: pR,
    text_container: hR,
    support_container: gR
  },
  _R = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACQCAYAAACPtWCAAAAFW0lEQVR4nO3dwXUTMRSF4RnOVMImdJAmWKUCmgikhEDagSJIB7ChFHMOq4zko8vLk+bKzv/tHDtjxb5HPN6MNOvdp7vlpXVdd4+XU/lw/4N1WZvPK+uyniK/X47vdAq/X/MH6eMV5N9T/P3699fGo+rrEqP7d/zmS7Lfrzreu9TRgCQCCCsCCKutqmHEP/Gq5lGvz9YQZY0WHU9Vw57KmipX00WpmrpU13xqPO3PP/r3qu9TPV8+ZgaEFQGEFQGE1Va9uWgsVf/mF325sqaSNUq7LSf7cr1rlDN9wv3DdtusEq4pk59HtOaO1oRx7UAxA8KKAMKKAMJqU30xWcNVNWKbqmnK59N9PlHTyRpXfB7Rmkv+fcE24+i+bO/Pv3w3ZkBYEUBYEUBY1X3AoHANIfpc2esP5fPi3G997jKmup6yoGre+LnavWgXT76/uP5S1pSij8oMCCsCCCsCCKt0DRg+15m8nC56bjN7vHLAck1KVQKN7WtGa1Z1vGhfMnt9JDMgrAggrAggrLZo5yh7vVj298PnesvfL/tY0T5XsA/Wex119tzt6OsDozUkMyCsCCCsCCCsNrXONLtXTLbvVZI1jloz0Xtvmejrk2s+wuNRm8cI2RpWPc8MCCsCCCsCCKvqXHC0j/P+5nbw+LNXvIXfIPjy7uO5KH9+Pzc/HlUzMgPCigDCigDCql4XfPD+eJcnW/OpGnJ0jTn2+NE9vpkBYUUAYUUAYVX1AVWF0H//OOXa+mzq7xldY3au+cT1lVwPiKkRQFgRQFidORe8d/1nPo/uy2WPd2yNFyXv41IMnxkQVgQQVgQQVv+xN4ysWWKbSFdyNcvH21+h15c1yo/nD0PHp44XHX/p+8+b4ifhGjN1cn9dxIaIAjMgrAggrAggrM6cC+5977DBfalgyaP2cI7XULkaN7xXjRz/sX3A7LphZkBYEUBYEUBYbdH97fKyNVawxgkP/9iaV9V02b1sjha9zwgzIKwIIKwIIKzkueB8H3D09XTFs6JEyp25PHvErkcrx1+Ot/+anNz3I8fDmhDMjADCigDCalvW9s3G8n3AsX013Xdamo9nU61IqQY89vrEV9gNMLpnODMgrAggrAggrNL3C3ZTfaj+fb/S2HPV0Xvhxd/w2JXg7BGNqRBAWBFAWMn7hEy/J7QoYcbvbZO8nlGO/+g1Otk1MOJw7A2DmRBAWBFAWG1qP7f+fai+9B7F4gK74XLvF91zeXyfr/1/hGiNygwIKwIIKwIIq/i54HBbcGwnTu/vp3h3wa7391Oie9GM7ePKGpU1IZgZAYQVAYSV3B8wb/Y7i1zfnU/2jt2fUd4vmDUhmAkBhBUBhNUrrgfsfW7x+u9G19dcd/OLngtmTQimQgBhRQBhVe0RXdLXd/Veo9D73nKjjze65pqtRs7VfCVmQFgRQFgRQFit2ftO3D9+C94veF8zPD18ThU1949fy0UfmcOdMXfNl//81PfXln1/ZkBYEUBYEUBYDdgf8OiaaXQfj3PbIzEDwooAwooAwmpADfjW14BQM0YwA8KKAMKKAMLq4u8TcvmSe0wfru+6cWZAWBFAWBFAWPWoAQdfz9euOZ4evrzpk63Z6/ni31/fj5sZEFYEEFYEEFYT9AFHrzvGzJgBYUUAYUUAYUUAYUUAYUUAYUUAYUUAYUUAYUUAYUUAYTXhmpDYGogO18MFZe+bwt4xLzEDwooAwooAwmqCGjBawh1dY/U+HnvHvMQMCCsCCCsCCKsLWBMSff3RNV/vGraUrXHnriGZAWFFAGFFAGE1YR9wtj6XGt/RNVjvmtmLGRBWBBBWBBA+y7L8BWJknvMP2Od9AAAAAElFTkSuQmCC",
  fR = () => c(t => t.user.showRobotPopup) ? ze.createPortal(e.jsx("div", {
    className: $t.layout,
    children: e.jsxs("div", {
      className: $t.container,
      children: [e.jsx("div", {
        className: $t.image_container,
        children: e.jsx("img", {
          alt: "robot",
          src: _R
        })
      }), e.jsx("div", {
        className: $t.title,
        children: "Hello, Mr. Robot!"
      }), e.jsxs("div", {
        className: $t.text_container,
        children: [e.jsx("div", {
          children: "1. A robot may not injure a human being or, through inaction, allow a human being to come to harm."
        }), e.jsx("div", {
          children: "2. A robot must obey the orders given it by human beings except where such orders would conflict with the First Law."
        }), e.jsx("div", {
          children: "3. A robot must protect its own existence as long as such protection does not conflict with the First or Second Law."
        })]
      }), e.jsx("div", {
        className: $t.support_container,
        onPointerUp: () => {
          X(si)
        },
        children: "Support for humans"
      })]
    })
  }), document.body) : null,
  xR = "_layout_cc2i9_1",
  vR = "_container_cc2i9_19",
  yR = {
    layout: xR,
    container: vR
  },
  wR = {},
  jR = {},
  bR = 1,
  NR = 10,
  CR = () => {
    const n = a => {
        const i = k(bR, NR);
        return a[i] ? n(a) : (a[i] = !0, i)
      },
      t = n(wR),
      s = n(jR);
    return {
      x: t,
      y: s
    }
  };
(() => {
  const n = [];
  for (let t = 0; t < 5; t++) {
    const s = t + 1,
      a = `hsl(${k(0,360)} , 70%, 50%)`;
    n.push({
      number: s,
      color: a,
      ...CR()
    })
  }
  return n
})();
const IR = "_game_container_1afil_1",
  PR = "_title_1afil_5",
  SR = "_text_1afil_10",
  BR = "_items_container_1afil_15",
  TR = "_item_1afil_15",
  tn = {
    game_container: IR,
    title: PR,
    text: SR,
    items_container: BR,
    item: TR,
    "slide-across": "_slide-across_1afil_1"
  },
  ER = {},
  kR = {},
  DR = 1,
  RR = 10,
  MR = () => {
    const n = a => {
        const i = k(DR, RR);
        return a[i] ? n(a) : (a[i] = !0, i)
      },
      t = n(ER),
      s = n(kR);
    return {
      x: t,
      y: s
    }
  },
  UR = (() => {
    const n = [];
    for (let t = 0; t < 4; t++) {
      const s = t + 1,
        a = `hsl(${k(0,360)} , 70%, 50%)`;
      n.push({
        number: s,
        color: a,
        animation: `${tn["slide-across"]} ${k(5,12)}s linear infinite`,
        ...MR()
      })
    }
    return n
  })(),
  QR = () => {
    const n = _(),
      [t, s] = A.useState({
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
          await Ze.rpc("mini-game", r)
        } catch (r) {
          console.log("error send rpc: ", r)
        }
      };
    return A.useEffect(() => {
      t[0] && t[1] && t[2] && t[3] && (n(ug(!1)), a(2, 1))
    }, [t]), A.useEffect(() => {
      a(2, 0)
    }, []), e.jsxs("div", {
      className: tn.game_container,
      children: [e.jsx("div", {
        className: tn.title,
        children: "Mini game"
      }), e.jsx("div", {
        className: tn.text,
        children: "Press the flying pixels"
      }), e.jsx("div", {
        className: tn.items_container,
        children: UR.map((i, o) => t[o] ? null : e.jsx("div", {
          className: tn.item,
          style: {
            backgroundColor: i.color,
            top: i.y * 30,
            animation: i.animation
          },
          onPointerUp: () => {
            s({
              ...t,
              [o]: !0
            })
          }
        }))
      })]
    })
  },
  OR = () => c(t => t.main.showMiniPopup) ? ze.createPortal(e.jsx("div", {
    className: yR.layout,
    children: e.jsx(QR, {})
  }), document.body) : null,
  FR = () => e.jsxs("div", {
    className: Pn.layout,
    children: [e.jsx(ST, {}), e.jsx(NT, {}), e.jsx(Ef, {}), e.jsx(VB, {}), e.jsx(CT, {}), e.jsx(Pk, {}), e.jsx(Gk, {}), e.jsx(Hk, {}), e.jsx($T, {}), e.jsx(Ik, {}), e.jsx(fR, {}), e.jsx(o4, {}), e.jsx(P4, {}), e.jsx(OR, {}), e.jsx(U4, {}), e.jsx(YE, {}), e.jsx(Ck, {}), e.jsx(dR, {}), e.jsx(kk, {}), e.jsx(BD, {})]
  }),
  zR = () => {
    const n = _(),
      t = c(a => a.main.startAppTs),
      s = c(Le);
    return A.useEffect(() => {
      if (s && (s.id === 555832576 || s.id === 2096307477)) return;
      const a = setInterval(() => {
        Date.now() - t > 30 * 60 * 1e3 && (n(rg()), clearInterval(a))
      }, 100);
      return () => {
        clearInterval(a)
      }
    }, [t, s]), null
  },
  GR = () => {
    var i, o;
    const n = _(),
      t = ((o = (i = window == null ? void 0 : window.Telegram) == null ? void 0 : i.WebApp) == null ? void 0 : o.initData) && window.Telegram.WebApp.initData !== "",
      s = () => {
        if (t) return {
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
          isTMA: pt.isDev,
          authData: pt.devUserInitData
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
      if (n(s_(r)), l) {
        const d = a(l);
        n($d(d)), n(i_(l))
      }
    }, [n])
  },
  LR = () => (A.useEffect(() => {
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
      let n;
      const t = a => {
          n = a.touches[0].clientY
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
            d <= 0 && n < m && a.cancelable && a.preventDefault()
          } else a.preventDefault()
        };
      document.documentElement.addEventListener("touchstart", t, {
        passive: !1
      }), document.documentElement.addEventListener("touchmove", s, {
        passive: !1
      })
    }
  }, []), null),
  HR = "_layout_ieygs_1",
  qR = "_container_ieygs_8",
  YR = "_logo_container_ieygs_17",
  VR = "_logo_ieygs_17",
  XR = "_animate_ieygs_1",
  WR = "_center_ieygs_37",
  JR = "_title_ieygs_51",
  ZR = "_description_ieygs_58",
  KR = "_button_container_ieygs_63",
  $R = "_button_ieygs_63",
  e3 = "_b_ieygs_63",
  Te = {
    layout: HR,
    container: qR,
    logo_container: YR,
    logo: VR,
    animate: XR,
    center: WR,
    title: JR,
    description: ZR,
    button_container: KR,
    button: $R,
    b: e3
  },
  t3 = () => {
    const n = c(_i);
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
              n ? X("https://t.me/notpixel_channel") : St("https://t.me/notpixel_channel")
            },
            children: "Not Pixel Channel"
          })
        })]
      })
    })
  },
  n3 = "/assets/loading-D8SQALTR.gif",
  s3 = () => e.jsxs("div", {
    className: Pn.loading_container,
    children: [e.jsx("div", {
      className: Pn.image_container,
      children: e.jsx("img", {
        alt: "img",
        src: n3,
        className: Pn.image
      })
    }), e.jsx("div", {
      className: Pn.text,
      children: "Preparing pixels..."
    })]
  }),
  a3 = () => {
    const n = _();
    A.useEffect(() => {
      const t = (s, a) => {
        ln.get(s, (i, o) => {
          if (i === null && o !== "") try {
            const r = JSON.parse(o);
            a(r)
          } catch (r) {
            console.error(`Ошибка парсинга данных ${s}:`, r)
          } else i !== null && console.error(`Ошибка при получении данных ${s}:`, i)
        })
      };
      t("colors", s => {
        Array.isArray(s) && s.length > 0 ? (n(ml(s)), n(ri(s[0]))) : console.warn("Полученные данные цветов не являются непустым массивом")
      }), t("boosts1", s => {
        n(Ku(s))
      })
    }, [n])
  },
  i3 = () => {
    const n = _(),
      t = c(h => h.main.startParams),
      s = async () => {
        try {
          const g = (await n(Fe.getUser())).payload.data;
          if (g.error) throw new Error(g.error);
          return n(a_(!0)), g
        } catch (h) {
          return console.error("Ошибка при получении данных пользователя:", h), !1
        }
      }, a = async () => {
        try {
          n(st.getPeriods())
        } catch (h) {
          console.error("Ошибка получения периодов:", h)
        }
      }, i = async () => {
        try {
          await n(xe.info()).unwrap()
        } catch (h) {
          console.error("Ошибка получения информации о майнинге:", h)
        }
      }, o = async h => {
        if (!ar(h)) return Promise.resolve();
        try {
          n(st.getMyTemplate({
            id: h.id
          }))
        } catch (g) {
          console.error("Ошибка получения турнирного трафарета:", g)
        }
      }, r = async () => {
        try {
          n(st.getSelectedTemplate())
        } catch (h) {
          console.error("Ошибка получения выбранного турнирного трафарета:", h)
        }
      }, l = async () => {
        try {
          await n(It.getWorldTemplate())
        } catch (h) {
          console.error("Ошибка получения подключенного трафарета:", h)
        }
      }, d = () => {
        t.squadId && n(Va(t.squadId))
      }, m = async () => {
        const [h] = await Promise.all([s()]);
        h && (await Promise.all([i(), l(), o(h), a(), r()]), d())
      };
    A.useEffect(() => {
      m()
    }, [n])
  },
  o3 = () => {
    const n = te();
    A.useEffect(() => {
      ii() ? localStorage.getItem("skipIntro") || (n.push("/welcome"), localStorage.setItem("skipIntro", "true")) : ln.get("skipIntro", (t, s) => {
        t === null && s !== "" || (t !== null && console.error("Ошибка при получении skipIntro:", t), n.push("/welcome"))
      })
    }, [n])
  },
  ei = n => {
    let t = "unknown",
      s = "unknown";
    return /android/i.test(n) ? (t = "mobile", s = "android") : /iPad|iPhone|iPod/.test(n) ? (t = "mobile", s = "ios") : /Windows NT/i.test(n) ? (t = "desktop", s = "windows") : /Macintosh/i.test(n) ? (t = "desktop", s = "macos") : (t = "unknown", s = "unknown"), {
      deviceType: t,
      os: s
    }
  },
  r3 = n => {
    let t = "unknown",
      s = "unknown";
    const a = n.toLowerCase();
    switch (a) {
      case "android":
      case "ios":
        t = "mobile", s = a;
        break;
      case "macos":
      case "windows":
      case "linux":
        t = "desktop", s = a;
        break;
      case "web":
      case "weba":
        t = "browser", s = "unknown";
        break;
      case "tdesktop":
      case "desktop":
        t = "desktop", s = "unknown";
        break;
      default:
        const i = navigator.userAgent,
          o = ei(i);
        t = o.deviceType, s = o.os;
        break
    }
    return {
      deviceType: t,
      os: s
    }
  },
  c3 = () => {
    const n = _(),
      t = c(s => s.auth.authData);
    A.useEffect(() => {
      var o, r;
      let s = "unknown",
        a = "unknown",
        i = "unknown";
      if (t && t !== "")
        if ((r = (o = window == null ? void 0 : window.Telegram) == null ? void 0 : o.WebApp) != null && r.platform) {
          s = window.Telegram.WebApp.platform;
          const l = r3(s);
          a = l.deviceType, i = l.os
        } else {
          const l = navigator.userAgent,
            d = ei(l);
          a = d.deviceType, i = d.os
        }
      else {
        const l = navigator.userAgent,
          d = ei(l);
        a = d.deviceType, i = d.os
      }
      n(dd({
        deviceType: a,
        os: i,
        platform: s
      }))
    }, [n, t])
  },
  l3 = () => {
    const n = _(),
      {
        t,
        i18n: s
      } = Ge(),
      a = c(i => i.user.languageCode);
    A.useEffect(() => {
      s.changeLanguage(a)
    }, [n, a])
  },
  d3 = () => {
    const n = _(),
      t = c(a => a.shop.selectedCurrency),
      s = c(rt);
    A.useEffect(() => {
      s === je && t === 1 && n(Un(2)), s !== je && n(Un(1))
    }, [s])
  },
  u3 = () => {
    const n = _(),
      t = window.Telegram.WebApp,
      s = c(Bt);
    return A.useEffect(() => {
      function a() {
        console.log("is fullscreen: ", this.isFullscreen), n(ud(this.isFullscreen))
      }
      return t.onEvent("fullscreenChanged", a), () => {
        t.offEvent("fullscreenChanged", a)
      }
    }, [n]), A.useEffect(() => {
      if (b) {
        const a = window.innerWidth,
          i = window.innerHeight;
        b.app.renderer.resize(a, i), b.viewport.viewport.resize(a, i)
      }
    }, [s]), null
  };

function dt(n, t) {
  const [s, a = ""] = n.toString().split("."), i = a.slice(0, t);
  return +`${s}.${i.padEnd(t,"0")}`
}
const Sn = window.Telegram.WebApp.Accelerometer,
  Bn = window.Telegram.WebApp.DeviceOrientation,
  Tn = window.Telegram.WebApp.Gyroscope,
  m3 = new Promise(n => {
    Sn.start(null, t => n(t))
  }),
  A3 = new Promise(n => {
    Bn.start(null, t => n(t))
  }),
  p3 = new Promise(n => {
    Tn.start(null, t => n(t))
  }),
  h3 = async () => {
    if (!window.Telegram.WebApp.isVersionAtLeast("8.0")) return Promise.reject("Version is too low");
    const n = [m3, A3, p3],
      t = [],
      s = [],
      a = [],
      i = await Promise.allSettled(n),
      o = i[0].value,
      r = i[1].value,
      l = i[2].value,
      d = () => {
        try {
          try {
            if (o) {
              const g = {
                a: dt(Sn.x, 6),
                b: dt(Sn.y, 6),
                c: dt(Sn.z, 6)
              };
              t.push(g)
            }
          } catch {
            const f = {
              a: 1.111111,
              b: 1.111111,
              c: 1.111111
            };
            t.push(f)
          }
          try {
            if (r) {
              const g = {
                a: dt(Bn.alpha, 6),
                b: dt(Bn.beta, 6),
                c: dt(Bn.gamma, 6)
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
                a: dt(Tn.x, 6),
                b: dt(Tn.y, 6),
                c: dt(Tn.z, 6)
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
    await En(2400), d(), await En(1200), d(), await En(1200), d();
    const m = {};
    t.length > 0 && (m.a = t), s.length > 0 && (m.b = s), a.length > 0 && (m.c = a);
    const h = new TextEncoder().encode(JSON.stringify(m));
    await Ze.rpc("sensor", h), Sn.stop(), Bn.stop(), Tn.stop()
  };
let go = !1;
const g3 = () => {
    const n = c(s => s.device.deviceType),
      t = window.Telegram.WebApp.platform;
    return A.useEffect(() => {
      n === "mobile" && t !== "unknown" && !go && (h3(), go = !0)
    }, [n]), null
  },
  _3 = ({
    children: n
  }) => {
    u3(), zR(), GR(), c3(), l3(), d3(), g3();
    const t = c(l => l.main.timeLimit),
      s = c(l => l.user.getUserFetchStatus),
      a = s === p.rejected && !pt.app.disableBetaError,
      i = s === p.pending || s === p.idle,
      o = t;
    return window.Telegram && !window.Telegram.WebApp.isVersionAtLeast(el) && LR(), a3(), i3(), o3(), a || o ? e.jsx(t3, {}) : i ? e.jsx(s3, {}) : e.jsx(e.Fragment, {
      children: n
    })
  },
  f3 = () => {
    const n = c(_i);
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
              n ? X("https://t.me/notpixel_channel") : St("https://t.me/notpixel_channel")
            },
            children: "Not Pixel Channel"
          })
        })]
      })
    })
  };

function x3() {
  return console.log("version:", window.Telegram.WebApp), window.Telegram.WebApp.isVersionAtLeast("8.0") || window.Telegram.WebApp.version === "6.0" && window.Telegram.WebApp.platform === "unknown" ? e.jsx(_3, {
    children: e.jsx(FR, {})
  }) : e.jsx(f3, {})
}
const v3 = {
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
  y3 = {
    translation: v3
  },
  w3 = {
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
  j3 = {
    translation: w3
  };
Tc.use(Sc).init({
  resources: {
    en: y3,
    ru: j3
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
Sf(Xn);
sl(Xn);
sg(Xn);
const b3 = _c.createRoot(document.getElementById("root"));
b3.render(e.jsx(re.StrictMode, {
  children: e.jsx(yc, {
    store: Xn,
    children: e.jsx(Bc, {
      children: e.jsx(bc, {
        manifestUrl: "https://app.notpx.app/tonconnect-manifest.json",
        actionsConfiguration: {
          returnStrategy: "back",
          twaReturnUrl: "https://t.me/notpixel/app",
          modals: ["before"],
          notifications: ["before", "success", "error"]
        },
        language: "en",
        uiPreferences: {
          theme: Nc.DARK
        },
        children: e.jsx(x3, {})
      })
    })
  })
}));