var Lr = Object.defineProperty;
var Xr = (n, t, s) => t in n ? Lr(n, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: s
}) : n[t] = s;
var Mt = (n, t, s) => Xr(n, typeof t != "symbol" ? t + "" : t, s);
import {
  j as e,
  r as u,
  R as re
} from "./react-DjWS3H3h.js";
import {
  r as Ve,
  c as Vr
} from "./react-dom-DCoj3sTC.js";
import {
  c as ie,
  a as D,
  b as Dt,
  d as Za,
  e as rn,
  i as ue,
  f as Gr
} from "./@reduxjs-K2ahyHOo.js";
import {
  a as Wr
} from "./axios-BdInfei4.js";
import "./yaml-Dy-SgT9h.js";
import "./vite-plugin-node-polyfills-BVIVvkCX.js";
import {
  d as we
} from "./@ton-CABtnvlX.js";
import {
  u as l,
  a as _,
  P as Yr
} from "./react-redux-uubI8uR8.js";
import {
  m as nn,
  A as $a
} from "./framer-motion-BggZOsGS.js";
import {
  u as $,
  S as Jr,
  a as H,
  b as aa
} from "./react-router-skDq-tWz.js";
import {
  c as U
} from "./classnames-D-x1NdaJ.js";
import {
  u as Ls,
  e as Xs,
  a as Vs
} from "./@react-spring-BiYD2lL6.js";
import {
  u as Kr,
  a as Zr,
  b as cn,
  c as ln,
  T as $r,
  d as ec
} from "./@tonconnect-AV74pAQg.js";
import {
  C as tc
} from "./centrifuge-B3TpHLNx.js";
import {
  d as nc
} from "./fflate-DRb3BoOD.js";
import {
  l as mt
} from "./react-range-COVt_hlT.js";
import {
  u as ro,
  i as sc
} from "./react-i18next-4MQgfZKk.js";
import {
  c as en
} from "./chroma-js-CHvE9HB5.js";
import {
  T as fa
} from "./tonweb-BaiZR3hJ.js";
import {
  B as ac
} from "./react-router-dom-DSUFG-Qy.js";
import {
  i as ic
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
import "./@babel-OEIDM1DX.js";
import "./prop-types-DK12qZJk.js";
import "./history-COziRoqA.js";
import "./resolve-pathname-D6XOvX2q.js";
import "./tiny-invariant-BaFNuDhB.js";
import "./path-to-regexp-Bpkj8jjG.js";
import "./isarray-Dmh8zLWU.js";
import "./hoist-non-react-statics-DQogQWOa.js";
import "./tweetnacl-util-B9eApQKV.js";
import "./ua-parser-js-9NRjnSWS.js";
import "./deepmerge-D9PnGD7j.js";
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
const oc = "_stars_img_container_1wci0_1",
  rc = "_stars_img_1wci0_1",
  cc = "_scalebubble_1wci0_1",
  lc = "_squads_img_1wci0_17",
  dc = "_title_container_1wci0_22",
  uc = "_description_container_1wci0_28",
  pc = "_description_1wci0_28",
  mc = "_info_layout_1wci0_42",
  hc = "_info_container_1wci0_52",
  Ac = "_info_row_1wci0_59",
  gc = "_info_row_content_1wci0_65",
  _c = "_info_row_sale_1wci0_84",
  fc = "_not_active_1wci0_100",
  xc = "_selected_1wci0_105",
  vc = "_row_icon_container_1wci0_110",
  yc = "_row_icon_1wci0_110",
  wc = "_row_title_1wci0_133",
  bc = "_row_amount_1wci0_143",
  jc = "_row_price_container_1wci0_156",
  Cc = "_main_info_channel_users_1wci0_166",
  le = {
    stars_img_container: oc,
    stars_img: rc,
    scalebubble: cc,
    squads_img: lc,
    title_container: dc,
    description_container: uc,
    description: pc,
    info_layout: mc,
    info_container: hc,
    info_row: Ac,
    info_row_content: gc,
    info_row_sale: _c,
    not_active: fc,
    selected: xc,
    row_icon_container: vc,
    row_icon: yc,
    row_title: wc,
    row_amount: bc,
    row_price_container: jc,
    main_info_channel_users: Cc
  },
  Pc = Number(window.getComputedStyle(document.body).getPropertyValue("--header-height").replace("px", ""));
Number(window.getComputedStyle(document.body).getPropertyValue("--content-max-width").replace("px", ""));
const Fa = 512,
  m = {
    idle: "idle",
    pending: "pending",
    fulfilled: "fulfilled",
    rejected: "rejected"
  },
  T = {
    width: 1024,
    height: 1024,
    chunkSize: 750,
    chunkOrder: [6, 7, 11, 10, 9, 5, 1, 2, 3, 4, 8, 12, 16, 15, 14, 13]
  },
  xa = {
    bomb: "Dynamite",
    pumpkin: "Pumpkin",
    pixanos: "Pixanos"
  },
  Nc = 24 * 60 * 60 * 1e3,
  Et = "https://t.me/notpixel/app",
  N = {
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
    "channel:probablyinsomnia": "channel:probablyinsomnia",
    "channel:tonbeholder": "channel:tonbeholder",
    "channel:notaspidey": "channel:notaspidey",
    "channel:nuvov": "channel:nuvov",
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
  tt = {
    paintReward: "paintReward",
    reChargeSpeed: "reChargeSpeed",
    energyLimit: "energyLimit"
  },
  Sc = ["/transaction/user/start", "/repaint/finish", "/transaction/user/complete", "/stars/shop/process", "/mining/status/claim", "/mining/claim", "/mining/status/error", "/repaint/complete", "/stars/shop/reject", "/squads/list/get", "/squads/list/update"],
  Se = {
    my: "my",
    referred: "referred",
    world: "world"
  },
  it = "notgames_bot/squads",
  ei = "https://t.me/notpixel_42",
  Qa = "UQBv3exBKLmQcn2Fm6VlntAInW-je1YP4U59gJxaO62NCyMn",
  Re = {
    userFromPixelInfo: "userFromPixelInfo",
    squadFromData: "squadFromData",
    userFromRating: "userFromRating"
  },
  Ic = "7.7",
  Ae = "unknown",
  Ct = {
    3: "EQAvlWFDxGF2lXm67y4yzC17wYKD9A0guwPkMs1gOsM__NOT",
    4: "EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs",
    5: "EQCvxJy4eG8hyHBFsZ7eePxrRsUQSFE_jpptRAYBmcG_DOGS",
    6: "EQDv-yr41_CZ2urg2gfegVfa44PDPjIK9F-MilEDKDUIhlwZ",
    7: "EQD-cvR0Nz6XAyRBvbhz-abTrRC6sI5tvHvvpeQraV9UAAD7",
    8: "EQB4zZusHsbU2vVTPqjhlokIOoiZhEdCMT703CWEzhTOo__X",
    9: "EQCuPm01HldiduQ55xaBF_1kaW_WAUy5DHey8suqzU_MAJOR"
  },
  Tc = {
    friendsForTemplateCreation: 128
  },
  Wn = {
    success: "success",
    neutral: "neutral",
    fail: "fail"
  },
  co = {
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
  ti = "https://notpx.app/api/v1/",
  Dc = "https://image.notpx.app/api/v2/image";
let lo;
const Ec = n => {
    lo = n
  },
  b = Wr.create({
    baseURL: ti
  });
b.interceptors.request.use(function(n) {
  var a;
  const s = (a = lo.getState().auth) == null ? void 0 : a.authData;
  return s ? n.headers.Authorization = `initData ${s}` : delete n.headers.Authorization, n
});
b.interceptors.request.use(function(n) {
  return Sc.includes(n.url), n
});
b.interceptors.response.use(n => n, n => Promise.reject(n));
const ji = window.Telegram.WebApp.CloudStorage;
let uo = class {
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
window.Telegram.WebApp.isVersionAtLeast("6.9") && (uo = class {
  static save(t, s, a = () => {}) {
    ji.setItem(t, s, a)
  }
  static get(t, s = () => {}) {
    ji.getItem(t, s)
  }
});
const dn = uo,
  V = (n, t) => Math.floor(Math.random() * (t - n + 1) + n),
  Bc = n => `${n.includes("@")?"":"@"}${n}`,
  Ci = n => n.replace("@", ""),
  On = (n, t = 18, s = !0) => n.slice(0, t) + (n.length > t && s ? "..." : ""),
  ia = n => {
    window.Telegram.WebApp.openLink(n)
  },
  fe = n => {
    window.Telegram.WebApp.openTelegramLink(n)
  },
  po = () => {
    const n = "some_test_local_storage_key";
    try {
      return localStorage.setItem(n, n), localStorage.removeItem(n), !0
    } catch {
      return !1
    }
  },
  Mn = async n => {
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
  }, Sn = n => new Promise(t => setTimeout(t, n)), kc = n => {
    if (!n || !n.x || !n.y || isNaN(n.x) || isNaN(n.y)) return !1;
    const t = Number(n.x),
      s = Number(n.y);
    return !(t < 0 || s < 0 || t >= T.width || s >= T.height)
  }, Rc = () => {
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
      return kc(t.coords) || (t.coords = !1), t.showTemplate && (t.coords = !1), t
    } catch {
      return {
        coords: !1,
        squad: !1,
        refId: !1,
        showTemplate: !1
      }
    }
  }, sn = n => {
    if (isNaN(n)) return "";
    let t = "";
    return n >= 1e3 ? (t += (n / 1e3).toFixed(1), t += "k") : t += n.toFixed(0), t
  }, Uc = n => {
    if (isNaN(n)) return "0 min";
    const t = Math.ceil(n / 3600),
      s = Math.ceil(n % 3600 / 60);
    let a = "";
    return t > 0 ? a += `${t} hour${t!==1?"s":""} ` : a += `${s} min`, a
  }, Oc = n => {
    if (isNaN(n)) return "0 min";
    let t = "";
    const s = Math.floor(n / 3600),
      a = Math.floor(n % 3600 / 60);
    return t += s, t += "h ", t += a > 9 ? a : `0${a}`, t += "m", t
  }, mo = n => !0, ho = n => {
    if (!n) return "";
    if (n.length <= 8) return n;
    const t = n.slice(0, 4),
      s = n.slice(-4);
    return `${t}...${s}`
  }, ni = n => {
    try {
      return we.Address.parse(n).toString({
        urlSafe: !0,
        bounceable: !0
      })
    } catch {
      return ""
    }
  }, Ao = n => {
    try {
      return we.Address.parse(n).toString({
        urlSafe: !0,
        bounceable: !1
      })
    } catch {
      return ""
    }
  }, Ue = ["#E46E6E", "#FFD635", "#7EED56", "#00CCC0", "#51E9F4", "#94B3FF", "#E4ABFF", "#FF99AA", "#FFB470", "#FFFFFF", "#BE0039", "#FF9600", "#00CC78", "#009EAA", "#3690EA", "#6A5CFF", "#B44AC0", "#FF3881", "#9C6926", "#898D90", "#6D001A", "#BF4300", "#00A368", "#00756F", "#2450A4", "#493AC1", "#811E9F", "#A00357", "#6D482F", "#000000"], Pi = Ue[V(0, Ue.length - 1)], Mc = {
    active: Pi,
    id: btoa(Pi),
    latest: ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
    basic: Ue
  }, go = ie({
    name: "color",
    initialState: Mc,
    reducers: {
      addColor: (n, t) => {
        const s = n.latest.indexOf(t.payload),
          a = n.latest[0];
        s > -1 ? n.latest = [t.payload, ...n.latest.slice(0, s), ...n.latest.slice(s + 1, 10)] : n.latest = [t.payload, ...n.latest.slice(0, 7)], a !== t.payload && dn.save("colors", JSON.stringify(n.latest))
      },
      setColors: (n, t) => {
        n.latest = t.payload
      },
      setActiveColor: (n, t) => {
        n.active = t.payload, n.id = btoa(t.payload)
      }
    }
  }), {
    addColor: Fc,
    setColors: Qc,
    setActiveColor: si
  } = go.actions, zc = go.reducer;
class O {
  static async getPrices() {
    return b.get("/image/prices")
  }
  static async getPixelInfo({
    id: t,
    signal: s
  }) {
    return b.get(`/image/get/${t}`, {
      signal: s
    })
  }
  static async getRevShareInfo() {
    return b.get("/users/me/revshare")
  }
  static async getUser() {
    return b.get("/users/me")
  }
  static async getStats() {
    return b.get("/users/stats")
  }
  static async getMoreStats() {
    return b.get("/history/stats")
  }
  static async getVerificatedWallet() {
    return b.get("/wallet/address")
  }
  static async checkCaptcha({
    wallet: t,
    captcha: s
  }) {
    return b.post("/wallet/ton-proof/check-captcha", {
      wallet: t,
      captcha: s
    })
  }
  static async checkHasCaptchaCode() {
    return b.get("/wallet/ton-proof/uncompleted-captcha")
  }
  static async getUserPixels({
    offset: t,
    limit: s
  }) {
    return b.get(`/users/mypixels?offset=${t}&limit=${s}`)
  }
  static async getUserPixelsSold({
    offset: t,
    limit: s
  }) {
    return b.get(`/users/mypixels/sold?offset=${t}&limit=${s}`)
  }
  static async getUserPixelsCount() {
    return b.get("/users/mypixels/count")
  }
  static async getPriceMask({
    price: t
  }) {
    let s = t === null ? "" : `/${t}`;
    return b.get(`/image/mask${s}`, {
      responseType: "arraybuffer",
      decompress: !0
    })
  }
  static async startRepaint({
    pixelId: t,
    newColor: s
  }) {
    return b.post("/repaint/start", {
      pixelId: t,
      newColor: s
    })
  }
  static async getHistory({
    offset: t,
    limit: s
  }) {
    return b.get(`/history/all?offset=${t}&limit=${s}`)
  }
  static async getPixanosRating() {
    return b.get("/ratings/pixanos")
  }
  static async buy({
    type: t,
    qty: s,
    pixanosColor: a
  }) {
    return b.post("/buy/stars", {
      type: t,
      qty: s,
      pixanosColor: a
    })
  }
  static async getProducts() {
    return b.get("/buy/list")
  }
  static async useProduct({
    pixelId: t,
    productId: s,
    color: a
  }) {
    return b.post("/repaint/special", {
      pixelId: t,
      type: s,
      color: a
    })
  }
  static async startTransaction({
    buyerWallet: t
  }) {
    return b.post("/transactions/start", {
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
    let c = s === 13 ? Ue[V(0, 29)] : void 0;
    return r && Ue.includes(r) && (c = r), b.post("/transactions/start", {
      buyerWallet: t,
      goodId: s,
      daily: a,
      currencyId: i,
      quantity: o,
      pixanosColor: c
    })
  }
  static async putUserWallet({
    address: t
  }) {
    return b.put(`/users/wallet/${t}`)
  }
  static async getSquadInfo({
    id: t
  }) {
    return b.get(`/ratings/squads/${t}`)
  }
  static async checkSecret({
    key: t
  }) {
    return b.post("/mining/quest/check/secretWord", {
      secret_word: t
    })
  }
  static async getSecretStats() {
    return b.get("/mining/quest/stats ")
  }
  static async getDailyList() {
    return b.get("/daily/list")
  }
  static async getFirstDaily() {
    return b.get("/daily/free")
  }
  static async shareBalance({
    sharePercent: t
  }) {
    return b.post("/users/balance/share", {
      balance_share_percent: t
    })
  }
  static async getRewards({
    userId: t
  }) {
    return b.get(`/users/rewards/${t}`)
  }
  static async getRewardById({
    rewardId: t
  }) {
    return b.get(`/users/rewards/distribution/${t}`)
  }
  static async claimRewardById({
    userId: t,
    rewardId: s
  }) {
    return b.post("/users/rewards/claim", {
      user_id: t,
      reward_user_id: s
    })
  }
  static async generateTonProofPayload() {
    return b.post("/wallet/ton-proof/generate-payload")
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
    return b.post("/wallet/ton-proof/check-proof", a)
  }
  static async getFinalMiningResults() {
    return b.get("/users/game/results")
  }
}
const qc = "/assets/icon_stars_new-Dk8ap_HZ.png",
  Hc = "data:image/png;base64,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",
  Lc = "data:image/png;base64,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",
  Xc = "data:image/png;base64,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",
  Vc = "data:image/png;base64,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",
  Gc = "/assets/icon_anon-B5YvKg3f.png",
  Wc = "/assets/icon_cati-mWXfw3xk.png",
  Yc = "/assets/icon_x-DBD55XHy.png",
  Jc = "/assets/icon_major-BvjI4Z5H.png",
  _o = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAADDklEQVR4nO3dsWsTURzA8ZwUHMQudhGyiItWXISCKHYTNIKD4OLiLHQpqAi6OAiijoH+CU4OCtpBcGipg4jgUt0czGiXQpGCcM6p8fe4vtwl1+/3s75c07v78uBe7pKOJElCKvbudFmWrT4ORVHUugNlWf5zzNqkKIb//UNt3hnlMwA4A4AzADgDgDMAOAOAm8Q17UQXGtY2roXjixffNva//Eej58QZAM4A4AwAzgDgDADOAOAMAG6m6u6XL66H48XdN+F1fmr7lOevN8JX3F/fyvr7KVe7h8NXnJytfEiH9Dd3wuO3NH8kXCfob+5Uej9nADgDgDMAOAOAMwA4A4AzALj9fPY80ev8M4lmP/7aDccvzMXX8bnb939sh+NjWCdIvaTSOXUGgDMAOAOAMwA4A4AzADgDgBt1URpe57+6vZB1xFLX+W137mi8TvBlO15nSK0TpO5HWB3spp67GFoncAaAMwA4A4AzADgDgDMAOAOAq/zh9I2zx8Pxuj/P771/EG9/+Wk4nqv3cjnr/ZdOzIbj+fcTxMdvL2cAOAOAMwA4A4AzADgDgDMAuFH3kIefJ3++1Q2P2Iefv8Px1DpAb+VUrWfk3Z3vU/3+uesAVZ8bcAaAMwA4A4AzADgDgDMAOAOAy3tYfQKm/Tq+7vcfN2cAOAOAMwA4A4AzADgDgDMAuKlbB3h082s4nvqevrZv3zRnADgDgDMAOAOAMwA4A4AzALjG1wFyn68/6Nv3zz8Ox8fNGQDOAOAMAM4A4AwAzgDgDACu8e8HuLcyTz/mod6VT+G43w+gsTIAOAOAMwA4A4AzADgDgGv8foDc5+sP+vZNcwaAMwA4A4AzADgDgDMAOAOAG3U/QEp4v8CzS8fCzXN/NzD1fH3bt0/9XsDqIPm7gJXOqTMAnAHAGQCcAcAZAJwBwBkA3H7WAVLCdYKHp+Pfz6d78i1eB1jszoTnbG3wp9IRdAaAMwA4A4AzADgDgDMAOAOAq2MdICVcJ1Cz58QZAM4A4AwAzgDgDADOAOAMQJIkiabT6fwFAeCnZalTAZIAAAAASUVORK5CYII=",
  fo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAABXdJREFUeJztnV+IVVUUxu9t9N4sshLJlEntLSptnIcgoRF7GANn6MEnBxRCiP48Rr1EPgS9CBHkQ4kRPli9F0PTGElCKYjjH3QEBxFmrg53YJwgU+6E3F4KWuvYXne5z/bc4/f93tY9+5y97+VjrbX3XmffSoUQQgghhBBCCCEoVIseQCztdrvtaV+tVkv9na3v6/1+D8QNh5QdCgAcCgCcJUUPIG90DPTmCGjQA4BDAYBDAYATnQPExti85+Wx4+n2nCHv34seABwKABwKAJzc1wE+3bFD2KeuXBP24YnjufaXem2/6K2D1CkJPQA4FAA4FAA4991egBfvvD/TfPKVqP4XJy4Ju77ratTzvNADgEMBgEMBgFN4DqBjcNE1e7r7vOfhVsyP7c/7e9IDgEMBgEMBgBMdb615tHdvIHUO0EFdvW4vGzjn/aljfuzvRQ8ADgUADgUATvQ6QNnr8FPP+621fW8Iz3t89ADgUADgUADgFL4XkJronCRyv799Yav84Nmfg+0XD/cKO3V9AD0AOBQAOBQAOPd9DqBJPe83UTlF6r0CC3oAcCgAcCgAcLouB7jX5w3kXX6QmfcrYmM+zwcguUIBgEMBgJO8JlBj1QhOPtIXvP/0sS90/57uo/HWDHZbzNfQA4BDAYBDAYDjXgfw1tW/8e4hYT9jPP+jD94KN1DX+7dIu+gcodtjvoYeABwKABwKAJw83gsQto75w4ObhD114Lvg8/Z+/Lmrf50z7DXG580JrPutGr5ui/kaegBwKABwKABw3PHnDmfQiOvf/3hW2Dqm71o5J2y9F/D1iVPB/vfV5Tz/24GTwtY5wfC2F4Sddw5QeI2hgv8bSFxQAOBQAODkngPMNGUMXL4mrLFlX0q7NqKWJo4susa3b+grYb9f2SPsDublwfbJzxOoL3O1b7VuBa/znEAShAIAhwIAJ/k6wKuDzwn75pKlwtY5gKZnt4yxPT+EY257XMXsz6TGvTlA5vmRMd+K8a33BoLXZ3/9Sdjrf6vJ+505AT0AOBQAOBQAOMlzAI3OCSzGxi8Erw+NbhD23EG517Dq1pPCTr1W743xOqZ7OdpcLezXL8/L/lROwByACCgAcCgAcJKfD9DXt1HYY+PnXPc3rl0X9vzvN4T94sFVdzewu8SK8Wt7nxf21M4Vwo6N+XlDDwAOBQAOBQDOPT8jaGhwY/B6Y05/InMGnQNoPnx7TH7wSYcD+wcrxm/esN31vK1qOI2FfmEfWzsRvF/P8yeur/iflv8yb1yX0AOAQwGAQwGAk8kByvafP15i1+pH/ojrv/fxdcI+2pwVth3jJfsXpqLGQw8ADgUADgUATqYeQOcAo0/L/fuXZy4GH/jobZlC6PoAvTdgceaMXAc4Ozkt7OmGnPce2v9m8Hl578drBqb77Ub/4bU/W8HrVoy3agA1rAcgAgoAHAoAHHMvYPuVcE1edTR8//A237t02b2AMDrme+vqY9Fr9V5Sx3gLegBwKABwKABwMjmAjiF6XWDuoaZoL61KZeUNWYff05LvAuZ9LF6t9mC4wchfwlw9skXYs+/8ErzdvR//sDSnG+eDzVPHeAt6AHAoAHAoAHDcNYFP3LTq8OU8vy1fX69UW+oDJ83HZoT91O31wfb1TceF3Tr9krD9NXeSzDx+QZpFx3gLegBwKABwKABwzBwgNibpdYR2LXzuX/XA5uD1TA5Sdw7oG7kuYcX8otfqU0MPAA4FAA4FAE7h8Sjv9xC8Z+1alD3GW9ADgEMBgEMBgFOqeNUJOqfQOYE3pluULeZr6AHAoQDAoQDAKXX8uhPWukLsOoF19m7ZoAcAhwIAhwIAp9TxqxNSn3nEHICUGgoAHAoAnL8BF6DwHlKpItgAAAAASUVORK5CYII=",
  xo = "data:image/png;base64,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",
  vo = "data:image/png;base64,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",
  un = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACABAMAAAAxEHz4AAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAABhQTFRFR3BM////+8sH4qsEoJDhMJjTe2y0AAAAichSjAAAAAF0Uk5TAEDm2GYAAADISURBVHja7dkxCsJAEIXhdNZeYRDtkxMIQzzB4gVkbCUK7/oOrEZHgq2z8v7mscV+TaqwHWMsa6hNIoKQiOx8CKQHVgCGWl+BaWlAIC8A4DqEHl/+YypyIUCAQCtAL3MEGgVEZGtmmLupqohsfOARSA+IZ2YnVfU5AyilHH1U9VBPhUATgKqOZlavPHs7EUgOeBXZ6JcINAisQwTSA4h/rqq69ysEmgGi8wJGM4tD4J+BGGqLALzOI5AeiE6s8wj8GuAjEmNZuwMoowLyPmOZ5gAAAABJRU5ErkJggg==";
D("main/startTransaction", async ({
  pixelId: n,
  newColor: t,
  buyerWallet: s
}) => (await O.startTransaction({
  pixelId: n,
  newColor: t,
  buyerWallet: s
})).data);
const Kc = {
    show: !1,
    activeProductCardId: 1,
    amount: 50,
    products: {
      1: {
        id: 1,
        name: "Restoring",
        description: "Instantly restore charges for painting. No reward, just fun.",
        image_url: "https://npx-cdn.fra1.digitaloceanspaces.com/icons/icon_lightning.png",
        price: 32,
        prices: [{
          currency_id: 1,
          currency_name: "XTR",
          price: 1
        }, {
          currency_id: 2,
          currency_name: "TON",
          price: .002
        }, {
          currency_id: 3,
          currency_name: "NOT",
          price: 2
        }, {
          currency_id: 4,
          currency_name: "USDT",
          price: .01
        }, {
          currency_id: 5,
          currency_name: "DOGS",
          price: 20
        }, {
          currency_id: 6,
          currency_name: "ANON",
          price: 3
        }, {
          currency_id: 7,
          currency_name: "CATI",
          price: .03
        }, {
          currency_id: 8,
          currency_name: "X",
          price: 60
        }, {
          currency_id: 9,
          currency_name: "Major",
          price: .01
        }],
        currency: "XTR",
        isOnePiece: !1
      },
      2: {
        id: 2,
        name: "Dynamite",
        description: "A 5x5 blast. No reward, just fun.",
        image_url: "https://npx-cdn.fra1.digitaloceanspaces.com/icons/icon_tnt.png",
        price: 64,
        prices: [{
          currency_id: 1,
          currency_name: "XTR",
          price: 1
        }, {
          currency_id: 2,
          currency_name: "TON",
          price: .002
        }, {
          currency_id: 3,
          currency_name: "NOT",
          price: 2
        }, {
          currency_id: 4,
          currency_name: "USDT",
          price: .01
        }, {
          currency_id: 5,
          currency_name: "DOGS",
          price: 20
        }, {
          currency_id: 6,
          currency_name: "ANON",
          price: 3
        }, {
          currency_id: 7,
          currency_name: "CATI",
          price: .03
        }, {
          currency_id: 8,
          currency_name: "X",
          price: 60
        }, {
          currency_id: 9,
          currency_name: "Major",
          price: .01
        }],
        currency: "XTR",
        isOnePiece: !1
      },
      13: {
        id: 13,
        name: "Pixanos' Snap",
        description: "Discolor ½ of the world. Your name will appear in History. No reward, just fun.",
        image_url: un,
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
        description: "A 3×3 color spot. No reward, just fun.",
        image_url: "https://npx-cdn.fra1.cdn.digitaloceanspaces.com/icons/icon_paintcan.png",
        price: 32,
        prices: [{
          currency_id: 1,
          currency_name: "XTR",
          price: 1
        }, {
          currency_id: 2,
          currency_name: "TON",
          price: .002
        }, {
          currency_id: 3,
          currency_name: "NOT",
          price: 2
        }, {
          currency_id: 4,
          currency_name: "USDT",
          price: .01
        }, {
          currency_id: 5,
          currency_name: "DOGS",
          price: 20
        }, {
          currency_id: 6,
          currency_name: "ANON",
          price: 3
        }, {
          currency_id: 7,
          currency_name: "CATI",
          price: .03
        }, {
          currency_id: 8,
          currency_name: "X",
          price: 60
        }, {
          currency_id: 9,
          currency_name: "Major",
          price: .01
        }],
        currency: "XTR",
        isOnePiece: !1
      },
      7: {
        id: 7,
        name: "Pumpkin",
        description: "A 7x7 pumpkin blast! No reward, just fun. Boo! Boo! Boo! Pumpkin soup canvas.",
        image_url: _o,
        price: 2,
        prices: [{
          currency_id: 1,
          currency_name: "XTR",
          price: 2
        }, {
          currency_id: 2,
          currency_name: "TON",
          price: .004
        }, {
          currency_id: 3,
          currency_name: "NOT",
          price: 4
        }, {
          currency_id: 4,
          currency_name: "USDT",
          price: .02
        }, {
          currency_id: 5,
          currency_name: "DOGS",
          price: 40
        }, {
          currency_id: 6,
          currency_name: "ANON",
          price: 6
        }, {
          currency_id: 7,
          currency_name: "CATI",
          price: .06
        }, {
          currency_id: 8,
          currency_name: "X",
          price: 120
        }, {
          currency_id: 9,
          currency_name: "Major",
          price: .02
        }],
        currency: "XTR",
        isOnePiece: !1
      },
      9: {
        id: 9,
        name: "1x pack",
        description: "1 dynamite, 1 paint can, 1 restore",
        image_url: fo,
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
        image_url: xo,
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
        image_url: vo,
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
    getProductsStatus: m.idle,
    useProductStatus: m.idle,
    order: [1, 2, 6],
    selectedCurrency: 1,
    crypto: [{
      currency_id: 1,
      name: "Stars",
      image: qc
    }, {
      currency_id: 2,
      name: "TON",
      image: Hc
    }, {
      currency_id: 3,
      name: "NOT",
      image: Lc,
      master: Ct[3]
    }, {
      currency_id: 4,
      name: "USDT",
      image: Vc
    }, {
      currency_id: 5,
      name: "DOGS",
      image: Xc,
      master: Ct[5]
    }, {
      currency_id: 6,
      name: "ANON",
      image: Gc,
      master: Ct[6]
    }, {
      currency_id: 7,
      name: "CATI",
      image: Wc,
      master: Ct[7]
    }, {
      currency_id: 8,
      name: "X",
      image: Yc,
      master: Ct[8]
    }, {
      currency_id: 9,
      name: "MAJOR",
      image: Jc,
      master: Ct[9]
    }],
    limitedGood: null,
    limitedEnd: null,
    showLimitedGoodPopup: !1
  },
  ns = D("shop/getProducts", async () => (await O.getProducts()).data),
  ss = D("shop/useProduct", async ({
    pixelId: n,
    productId: t,
    color: s
  }) => (await O.useProduct({
    pixelId: n,
    productId: t,
    color: s
  })).data),
  yo = ie({
    name: "shop",
    initialState: Kc,
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
      n.addCase(ns.pending, t => {
        t.getProductsStatus = m.pending
      }).addCase(ns.fulfilled, (t, s) => {
        s.payload.goodsAvailable.forEach(a => {
          t.products[a.id] = {
            ...t.products[a.id],
            ...a
          }
        }), t.getProductsStatus = m.fulfilled
      }).addCase(ns.rejected, t => {
        t.getProductsStatus = m.rejected
      }).addCase(ss.pending, t => {
        t.useProductStatus = m.pending
      }).addCase(ss.fulfilled, (t, s) => {
        t.useProductStatus = m.fulfilled
      }).addCase(ss.rejected, t => {
        t.useProductStatus = m.rejected
      })
    }
  }),
  {
    setProductCard: Ge,
    showProductCard: We,
    hideProductCard: ai,
    increaseAmount: Vk,
    decreaseAmount: Gk,
    setAmount: oa,
    setAvailable: Zc,
    addAvailable: Yn,
    subAvailable: ra,
    setSelectedCurrency: Bn,
    setLimitedGoods: Wk,
    clearLimitedGoods: Yk,
    showLimitedGoodsPopup: $c,
    hideLimitedGoodsPopup: Jk
  } = yo.actions,
  ii = n => n.shop.crypto,
  el = yo.reducer,
  ca = {
    getProducts: ns,
    useProduct: ss
  },
  Fn = ({
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
  tl = () => {
    const n = l(s => s.shop.selectedCurrency),
      t = l(s => s.shop.crypto).filter(s => s.currency_id === n)[0];
    return n === 1 ? e.jsx("span", {
      style: {
        paddingRight: 4,
        marginBottom: -4
      },
      children: e.jsx(Fn, {
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
  de = ({
    num: n
  }) => isNaN(n) ? null : new Intl.NumberFormat("ru-RU").format(n),
  wo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACABAMAAAAxEHz4AAAAIVBMVEVHcEzv7++7trv/sQAAxvb+XTUAieJkY2UaWbc9OGcbGx4WugEBAAAAAXRSTlMAQObYZgAAAM1JREFUeNrt2c0JxSAQBOC0YAu2YAu2YAu2YAu2YAtW+Rh4gUE0Iddh9rLBON9pwfxca8055/WhDOgBCJdSygmZ/zKgDaCewrXWmnPOuDagCpwxDqN67x1rBnQBDmMzh9ERHmMMA5rATrzD6LuwAS0ACymlhM5rrbWGjiA6hw3oAag1HGOMfLDwYWJAF+BwCCGg80DxIBlQBd7DPGwGVIH38LrXgBLwPcwfqwxoAfxAsQufBsmAFsDIGj5BBrSAFUHtXkgNSAD+B2vg6f4Pseby+y+jC6sAAAAASUVORK5CYII=",
  bo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACABAMAAAAxEHz4AAAAFVBMVEVHcEz/3Jr/6ADjygD/AAC5AAAAAAB/sfDAAAAAAXRSTlMAQObYZgAAAJJJREFUeNrt2bEJBCEQQNFrYVqwhWnBFq6F338Jx4IiyIG76ez/iRjMiwyE+Zj9i0MC9QGA7yEAgarAGu6HJiJQHTgnICAgIFAbAHgGrARqAACZmROIiAC4zt573+8TaK01gWLA6O5DyswUqAVcMXoCzGGBCsBqAjGCVYz2D4ZAbWBP4EXA6AQACJQB3LEImO39AJS0GBsvGYIKAAAAAElFTkSuQmCC",
  jo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAABVQTFRFR3BM/////2U1/z4F3SwBrB4AAAAAkQwbPgAAAAF0Uk5TAEDm2GYAAAEVSURBVHja7dvBDsIgEEVRZbD//8nGQjKlY6aMGMrivuDC14BHxIUmfRBCFss2IQAAAHBfOU2IOi4B8hmSTJzSmR8FaGSsTDIAiO6A38YBksYi8TNgMrgDKboDE7bABcietA+RXNO2sdK2PkBzWkATKE0LAAAAAAAAAAAAAMAl4DkhAAAA6AFsbcxFa+2ZDwAAABfgrGramEpbAAAA/BnQPgMAAMBNAA0AAADc+fw6BgBgMQD/FQMAAAAAAAAAAAAA4AJyk1dN28ZK214ApIx2gdqVR7jUVjoAGtEFikdZgVLbEuncgfM7OKwcLLWtF345A3JcIly+DijpOwNfP8Nc60CprfZ5lW8Bd9kAAHAfgNtKCVksb9I6sf1BNvNjAAAAAElFTkSuQmCC",
  nl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAAp1JREFUeJzt3bFq21AUh3E7lJrMnbp1LXmDDskDZSx5CtOpZMybdGmgGbOFQKdufoAMwV7cWcfgy0X3Slf3+36bkCIJ8ufcoyMbr1aSJEmSJEmSJKln67lvoHXH4/E45fXW6/Wk/5OLKS+m9hgAOAMA92HuG2hNas3fbC6LXm+/fy96vlxWADgDAGcA4LrvAcY+x8c1f+yaXbqHGMsKAGcA4AwAXHc9QO3n+NTfj+0R4v3XfjdgBYAzAHAGAK67HiDX/u767P7N9nGw/e/b4fzxiblB3E4dX7snsALAGQA4AwDXfQ9wssaGNX/359dg+/P9zfAE29XZ/bvb3+NuMCj97iHFCgBnAOAMANzie4DSn9s/PP8dbL89fCp5+hN+JlCzMgBwBgBu8d8NjD1A7nP/WF+ePg6vl1jTp/7uX4oVAM4AwBkAuMXPAUr78Xp1dv/3ry9Z52ttzY+sAHAGAM4AwC2uB8id/Zd+7u+NFQDOAMAZALjF9QDR2Nl/6rk/yp39t84KAGcA4AwA3OJ7gNri7P9n6AGi1mf/kRUAzgDAGQC45nsAZ/91WQHgDACcAYBrvgeInP2XZQWAMwBwBgBucT1Abb3P/iMrAJwBgDMAcM31AM7+p2UFgDMAcAYArrkeIHL2X5cVAM4AwBkAuOZ7gNpos//ICgBnAOAMANzsPYCz/3lZAeAMAJwBgJu9B4ic/U/LCgBnAOAMAFxzPUBt9Nl/ZAWAMwBwBgCu+R7A2X9dVgA4AwBnAOCa7wHibD/3d/vi8fTZf2QFgDMAcAYArrkeIK7J8fMBq8z3/bl6n/1HVgA4AwBnAOBmX+9yvxdw0hNkSj332wMIxQDAGQC45te73B4hF23Nj6wAcAYAzgBIkiRJkiRJkiR17D/jkLq5vlfVpgAAAABJRU5ErkJggg==",
  sl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAA39JREFUeJzt3LFrFEEUx/FdUS8RUlwpLNFGIYiFpjJFQCytbNPG1ipa+wdEq2ut06cQLLQRPBvFQkVIGpWAjZDCIhyCa5v3zuxkvL3bmft9P93cXnYn5Jc3b2ePKwoAAAAAAKCi7HoCqanrup7l9cqy7PRvcKbLi6N7BEAcARB3tusJdC205vd6i61ebzQ6avV8k6ICiCMA4giAOLkeIHbNT23NbhsVQBwBEEcAxGX3LKDtvfppr/ld7/WHUAHEEQBxBEBc8vsAbe/Vx67xk57fzz+1noAKII4AiCMA4pLrAaL36h+tR50/tKa3ff7UewIqgDgCII4AiEuuB/CCa/LGb/v+G2/bvf7268bjow+37Liw80v98wVUAHEEQBwBEJd8DxDLr8ljds6ZoV/jQz3GvKECiCMA4giAuPx7ALemh4Tu68d6giLuWcCPNy/dK+ejfn7WqADiCIA4AiAu+x7Ar7mvfv4x4829BTP29/mhfQB//EH/SuN8tlYaDyeHCiCOAIgjAOKy7wG80Jo/tre/XTQeH3u+H9kTpI4KII4AiCMA4uauB4gV/PzAnKMCiCMA4giAOL0eIPLzA7k9349FBRBHAMQRAHFyPYBf059+udb4/tye78eiAogjAOIIgLjseoDbL5bMeGfphDd2ZP37TffKp07mcVpUAHEEQBwBEJddD+Bt/LpnxsvVt6leb+36XTPePZzu9aaNCiCOAIgjAOKy7wFC/L5BUdieoajs8MCt6bvuvr7qtzSxRFABxBEAcQRAHAEQRwDEEQBxBEAcARBHAMQRAHEEQFx2zwJWD/bM+H11taOZ/NvjC+/MeLNYOOGdaaACiCMA4giAuOx6gCf3L5rxw2e2Jxge7ptx1b/U6vWHH5+bsf+ewDvL7n/KTi85VABxBEAcARCXXQ/gba18NuPB0H6Hj983CFkNHB9EnS19VABxBEAcARCXfQ8Q4vcN4r8jqLnHyB0VQBwBEEcAxBEAcQRAHAEQRwDEJb8PMBodmXGvt2jGX9dmOZuwy26fwM8/NVQAcQRAHAEQl1wPUJZleXxc13V9fBzqCWZt4D6DGFrz/e/XNSqAOAIgjgCIS64H8GJ7Am/SfYNJ7+tTW/M9KoA4AiCOAIhLen36H75H8GL3DXK7r49FBRBHAMQRAHFZr1+nEeoJYuW+5ntUAHEEQBwBAAAAEPQXKwzH8ovgV5cAAAAASUVORK5CYII=",
  al = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAABXtJREFUeJztnU+IV1UUx9+INDrgYsLAkfGnBZqgQ4muXCTjIkSFaBNks2qgTUQQE0SbzI2KuhBp509QyxAXImgM6hgKJpGVUWk6+Scd/AU5zmJwnN8IjgtX5zznHg/3Xn+//H4/u/Pe+937hvlyznnn/isKQgghhBBCCCGEoNCSu4PJycnJnO23tLRk/xueZ6Y1+gVIY6EAwKEAwEkeP62Y39o6M6r9ev1+8D5zAh/0AOBQAOBQAOBM9/7A+12vY3510biwew52C3vilyvC/rzvxWB7OifIXXdodrw5ED0AOBQAOBQAOGYOkPu7vm/1HXVFxvzXX/pd3h6Z4erfqhvEvn+jsf4+C3oAcCgAcCgAcNx1gNJ3+KdvyAc2PBCm9V2//dRs4/ku2d+v1vO+uoFmy/q1wfs/X78t7K17PxH2rWv/BH9/+eIlYZ84dFHYy1+eG/z9Z0e/C973Qg8ADgUADgUAjlk31nUAKweonT0p7IE7D4PtX/ivK3jfi64b9F6RdQOdA6SuA1w7v0/YJ4/2C/uDjQeS9qf/Ho4FEBcUADgUADjuOkAsPW+9KW2jbjBcrQl7x6UlSd8ntpaee45jbugBwKEAwKEAwInOARZ+e1fYZyq+39c+PC1sq25g8eXYCnXlj6j2/m/ouo1VF6AHAIcCAIcCACd5HWDD6NvCHhqT4+M9ke3vGhkUdqVzaWSLYXLPGUzdvreuQA8ADgUADgUATikHyL22rrt/lroSzhnK5P2u1zF5fLh/iiefzI8DPwXve9vTDGzaLOx1O09P8eTTQQ8ADgUADgUAzvTYtX+D78p5+N1xIS6aL9rOC7u3mDHFk4+xYv7Y9b9d/Xe90q7slVHtndt/yPW8F3oAcCgAcCgAcEp1AGstnZUTHJh1WNgDdTm+Xy3mu15Q81H7QnnhXl3abVHNF1eP7Bf2jd+GhL3gtc64DhS527egBwCHAgCHAgDnma8L+H7NqLBLawnrxlrCe2nXEsay5P1vXM//uee9TG/yZObMe1XUef69dVnMEaQHAIcCAIcCAOeZ5wCNJvccPx3jvTmChXf8v3bzL2F3VBaLnIAeABwKABwKAJyGrw1MjbU2MPceQaljvubYx6uErXMCayxH5wT0AOBQAOBQAOAkrwMs+OGF4P3ebWfUlfDzZQbDt0fCt62Y3+y1fQsrx9H36QHAoQDAoQDAyT4WoPcS1nUDC73uwEvu/lpVzqC/05sdegBwKABwKABwonOAm0Oy1n5j5YSw9X4Ane16fwCJXldQO+t7H71HUer+Or5SMX7bU79aEnTtn+cGkigoAHAoAHBKOUDq8fKhEWvPH4m1LsDsz9xjKK6/d9R5Bhodo2PHClLHfA09ADgUADgUADilveS9ewbpWn95H8Aweq2gl9z9fX3kuLD1OYf6nEKNPrfQizfme89KpgcAhwIAhwIAp1QH0GfMWDmBXt+v9/61KP/eS9r+dK3/wm4Z87efmi3svtXh+73Lzgm70ecE6v8vPQA4FAA4FAA40fMB9Dl/uWvxmtT9lWv9co5gq4rpml3LjHULifF+92voAcChAMChAMCB2yPIYrhaU1dkDqD3KtZjAXqsQJ9z6MWaj2HFfJ4dTIJQAOBQAOAE40NR+OcH6BjpjYGl8wCc5O5P1/qtukDsHEvvd31HZbGw9d7AGnoAcCgAcCgAcMw6gHd+gKbSudT3RvoMICe5+5sw1gVYMTv1fABvzNfQA4BDAYBDAYDjihdF4a8LVBeNC7u8l28YfRawl9T9WbV+HeN1jE6NN+Zr6AHAoQDAoQDAiYofRVHOCXKfydNsxI7HNxp6AHAoAHAoAHCS5wDoNHvM19ADgEMBgEMBEEIIIYQQQgghhIDwCOGz0zOqwEkRAAAAAElFTkSuQmCC",
  il = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAAw1JREFUeJzt3b9rFEEYxvG7ICYGbASLQCB/gAgp7AKCIGInVkJIl3S2Z2MjloF0tpZX2aWzEIJFuiABu6QKRFKkSBGInBZnPe/JLG9mbmdnn++nm/sxuwkP7/tmudwOBgAAAAAAAAAAAAAAAAAAoA+GpU8gt+l0Op3n/sPhsFe/s4XSJ4CyCIA4AiCu8/0stacvLt5LOv5k8jvp/V2fGagA4giAOAIg7k7bB2y7p0/ePQ0f2PwbLP/8OAnWX3Z/pR3PzAzen7ftmYEKII4AiCMA4pL7TW09/fjycXT/vZ2VpP23T5ai+1ulrzNQAcQRAHEEQJy7fzT1/L719NpmBu9MQAUQRwDEEQBxyTOA7fnqPT33/u9HD4L1p6vTYG1nAmYAuBAAcQRA3NxngIvDb9H9Vjaehw+I9fT1hz+j+9vjMwMgKwIgjgCIa/0zgU0u3n6PPr/16kW4bui5492wxx5/tj097Ml7O49c+49G4W7r+/Gebo9XGhVAHAEQRwDEdW4G8Mo9M9Te072oAOIIgDgCIK76GcBr/Oag4RV193QvKoA4AiCOAIjLPgM8+3rfPPI6WJ1fnQXr043cZ1CXjzdPos+vrq6FD5jPA6SiAogjAOIIgLji1wH6NjP4e/rZ/1/YEiqAOAIgjgCIKz4DeLU9M9TW072oAOIIgDgCIK66GcDLzgznlfV0O9PkRgUQRwDEEQBx2WeAg5fXwXrm+wHMn/Gb16bn9pzt6R+Wj6Kvn/l+gMznQwUQRwDEEQBxxa8D1D4zpPb0wXLuM/KhAogjAOIIgLjiM4DXvGeG2nu6FxVAHAEQRwDEVTcDeNmZYbzf757uRQUQRwDEEQBxyTOA/b762fsG3o2/v+P/6zdvzfcNjN8fIBUVQBwBEEcAxLlnAHtPGnsPIW+P6tvM0HZP994jyKICiCMA4giAuOTrAN4eVNvMUFtP96ICiCMA4giAuFb7zW3YmcFrdmbwqa2ne1EBxBEAcQRAXKf7022kzgxNut7TvagA4giAOAIAAAAAAAAAAAAAAADQM/8ACXZHRjaU+NYAAAAASUVORK5CYII=",
  ol = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAABXVJREFUeJztnTtoVEEUhu9KdBVNEdEiImijIOI7jQlETCGigpWFz0JLFQVjn8pKC1FLbXyhqQIqYqFYiI2PoAbBNBoiATFG8EUEifU5V+ZwmJndu/7/1529O7uT8HP+szNzz60VYMzMzMzEjK/VarVUc6kCs5o9AdJcKABwKABw/is/Kwq/x9fr84LXp6d/ub6/1WoEZgBwKABwKABw2po9AS/JPf7lZhH/fvHON17VCNb8qlYjMAOAQwGAQwGAU/kawPLUWI+fOPpYxOferlbjVwbHt3qNwAwADgUADgUATqV+k/4L7Znacy2Pn7w8IWLt8WcfLso6vv3IZBHC2mvIXRMwA4BDAYBDAYBT+XUAkxuzRTj5RHp256UtIj5TWgcYEXHZ4+U6gHe8dx3Be/4gFmYAcCgAcCgAcFq+Bth6v13E41MbRTza5Bqhv0/Od/3ij/KFYm7RTJgBwKEAwKEAwKlcDRB7754md41gefzQ/E4Z/+xSM3xTmnMjYQYAhwIAhwIAp+E1QOpz/Y+2fxPxxJMXIt73bVlwvLdGuD3k9fg49P8r9fkAZgBwKABwKABwstcAsef6vzy7GLxe7zqmXpkjounTcTXCiptf1Cs+j9/9Y1rE6xe/FvERtRdgnQ9IXRMwA4BDAYBDAYDT8HUA7XGWx1vkrhF6x+S6gMb0+HG13z8lY3P+mc8MMgOAQwGAQwGAk7wG8K71P706GLy++eCeqPnE1wgLRXxt6IGIYz3e+vtzwwwADgUADgUAjrsGSL2fv3zd0uD16tUIaT3+3rPvIt7RtSD4/tQwA4BDAYBDAYBTqgEa3Yu3/fD14PiRK/uD15tdI3g9vmowA4BDAYBDAYDTVvVevM2uEVrd4y2YAcChAMChAMAprQN4e/FaHp+7z17uGmHn+cfB616O9mxK+nnedRt9HwEzADgUADgUADj2eYAW78WrawSrJtCef7xjRfD9p1bJ+en/R33D0+B46/s11rqMxrq3kBkAHAoAHAoAnPj7Av6zXrza8y2P7++T8y36Pgc//9PXPyIeHBkOvl97+J0Hr0S8a9taEesawbq3kBkAHAoAHAoAHLMGMPvo9RgfkLkXb1EsLFKinwNoebzuB3Dg1lYRX9gw6vp+6/7/gYGTIt617WFwvLVuwAwADgUADgUATvQ6QOoaQffitTx+aH5dxpH9+PudHt/ft0bEw2r83ROyxtEMymUG83f+6+dyb6GrWxVJTpgBwKEAwKEAwDFrgOz9+I0awfb4tJTXAcIev/3QkuDnec8Uas/XePsEch2ABKEAwKEAwIleB4itERrdj99CrwPEerzl2d79e+95AAtmAHAoAHAoAHCyPy/AqhFi+/EP/5C/0y1Wq/sE9Fq99vxYj7ew9u+9nm59voYZABwKABwKAJxSDWCfKVP99K39foPRveF+/F6Pt/CemfP+jveOj32/F/YHIAIKABwKAJw27Qn6/nG/B6atESwuTKlz9+qZPdb8Yz3+fffvqPHW98c+G9iCGQAcCgAcCgCc0jqA5TmNrhFiPd7C8ujuNTuD13vHPohY712871YH/43vz70OoGEGAIcCAIcCAMd9HiB/jRDn8d79c+t3/Lm3sl+Bvk9haYc88/i8Q47vHZPv1zVCUfj6B6SGGQAcCgAcCgCcrOvM/8Lb396L9bwD6/kGGt0nUKPH6xphbNzXn0DXPNwLIFmhAMChAMDJfl+AJrWneWuKci9i2Q/AWyOU9ypk2Oi1fS/MAOBQAOBQAOA0fB0gNamffaz7A5Q8Xo93enzu3/VemAHAoQDAoQDAqZQfpcC7LpD63r6qebwFMwA4FAA4FAA4LeVXKYg9j9BqHm/BDAAOBQAOBQDOX/7wrWuOIpDoAAAAAElFTkSuQmCC",
  rl = "data:image/png;base64,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",
  Co = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACABAMAAAAxEHz4AAAAJFBMVEUAAABHcEz//////wC4uLj/oQCampoA/wAAmf//AP9SUlL/AACcsFD9AAAAAnRSTlP/AOW3MEoAAADGSURBVHja7dlBDcMwDIXhUCgFUxgFUyiFUBiFURiFUhi5vUm2FFlJc97T+y6Vmvi/+pB2TLSF6V0FqAJt4AOD/LaBAnyBOnQtjMEGCvAEfmZDz/AKV5ERBXgCBlc44RFq5A0K8Ac+cMIuogBnwMGCw13EQwcFuAIdPNhCDiUF+AL10Cd6YaAAV8CgXF6yoABfoC6WZDccFOAKdIiBLQ8dFOAK5A/fqMtHAZ7AAUPklg9yVgGeQEbqovGiPlAo8PcBvbkqMPoCnDifKjhoeKsAAAAASUVORK5CYII=",
  cl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAABMZJREFUeJzt3b+LVGcUxvGZZNlFXYlEyKi4aQMxmEljkVgEBQXRv0HXQiFtNJ1VOjFlfhjEKJZaKUpMoWglKriKjYUWGlw34EJsRDFM6vNc8549vHfG7JzvpzvcmTv3Lof3nPve997tdAAAAAAAAAAAAAAAAAAAwDjojvoHB4PBoM39dbvdkZ/DOHnvXR8A3i0SIDkSILmh10+v5r+YsDn4wT/24we+PWXi48f2tnNg/yFbT8EIkBwJkBwJkNyE94G2r9ujNV95JfrC5bs2/uOOiX/9YZ+J9fS88x23HoERIDkSIDkSILlGPdMa2H09WfUDg8nXJtYe4OuvDha/f+f6L8XtWvP7/c0m3vhR+fgOHjptYq9H8Cy3HoERIDkSIDkSIDm/Bzj+ZXkPs7dDP/j3yjfF7TovoLyar7wewDPuPQIjQHIkQHIkQHJuDxCl1/lRw+4BtKZ7vPUHbfcIatg9AyNAciRAciRAcm4P8Pth+5Htm8ol6drsJ8XtW95/YOLoeoBbt24Ut58/+7OJtQfQkqo1Wmu61wP8+Vdxc2du7p6Jo+sTPLU9AiNAciRAciRAcuF5gGhP4JmcLfcAXs1X0R7Ao38Or+bX+v7oaO89MAIkRwIkRwIk5xbEtp8LaBxAy1PdtWsEPbU9gNb4PTu+CH2/7XkERoDkSIDkSIDk3GcDo3PNS3i2Tj9f3B6lNbIh2BO0XfO3bf009P1ezx7gke/svYn+Zx+bOLo+gREgORIgORIgObcHqKU1Sa/T1ZMFW6O8++meaE9Q68Klqyb2rvN1nkJ7Bq35+veYu//YxFrzPYwAyZEAyZEAybW+5rzxbKFc19+cmzfxwkLsQtur6V7N1e9Ha7Rnfv6ZifX8vP1533/y9LmJv5ndZmLuBSCEBEiOBEhu6PMAav36dSaenp428cOHj4rfj94/V83r5FMm0rn1Tsded+vcvB6/np/X4+h1vfYIJ85cNnH0/j9rAlFEAiRHAiTX+ppALTnR5/lfvbLvFVxcXCx+3rvO9tbZe/Q5Be0RZjasDe0vOg+xZ+fnJq6t+YoRIDkSIDkSILnGPEB0TZ/Smqlz1/1++YCmpuy7ifW6WnnbPUuoqSbW89P78Xr/Xrn3MoZc8xUjQHIkQHIkQHITtev4la4B1Bo5s6E8t+7VdL1frnPxq1fbuFbtcwvaE3hr/DxtvzeQESA5EiA5EiC5xjxAtOar6Lt1Pd7ce3TNnUdrrPZI0XkD5c0TjBojQHIkQHIkQHJdbx2/PqunvHXsaveOWI3W5/O962btAWZ65bl87VmG/T6EqLfMQzAPgPaQAMmRAMm5PcBPv10p7iC6Js7j1XBvjaFX84f97t0RvFeRHgDtIQGSIwGSc3sA73/4eHQu/8M19n79qpVT9vNOTa920inRFy+ZcHBul4n/b//7txYjQHIkQHIkQHJvey7AxNHnAJSuCVTe8/hRjev+Tc79d6fmqyXM/S+rHoERIDkSIDkSILnw/w1s7KCy5NXOM+jc/sIKuz6h92Ovav8NYzZPwAiQHAmQHAmQXLhetX2/u7Zkas33nH550cSHB/urfl/RA2BZIQGSIwGSG3m9GvaaubYtt5oexQiQHAmQHAkAAAAAAAAAAAAwxv4Fm/jXETIKTbYAAAAASUVORK5CYII=",
  ll = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAABXFJREFUeJztnU9oXUUUh2+aNBKxjYhULF2UYnAhxkSkYAXdtGnRBA3FRSStFq2oOxHdVAWFLlqpghupsfbf2xUEqdUk3dSFLRQsScDSkkiChmoCSq0hQpombtycc5OZHOe+vNec79udzLy5w8vvzfndmblzswwAAAAAAAAAAAAAAAAAAAAAAAAAVgI1y33B+fn5+eW+ZjmpqalZ9u+wSFZVugNQWRCAcxCAc+rKfYFYzr/dUugKszCMAN5BAM5BAM4p3ANYc/7c3+dEPD06UnSXkrir+ZWytp86L5I6D8EI4BwE4BwE4JxkD1B0zv9t6EJql5IYGxyv6PU/2blTxD+OXhNx6VKx3w8jgHMQgHMQgHPMHmC5c37T3V8Yepdlw9dt9+0652/7qE/EK23uX8MI4BwE4BwE4JyoByh3zrfm+BxHv5VxZ7h6as5PnXuvtj2RjADOQQDOQQDOyeWzonP+rda9wQ40fj0XLI8Ru++vdM7X6O83de6f/QCQBAJwDgJwTnQeoOicr/nrWanBxue+CX9gz9Om9q1U+7N+RfePEcA5CMA5CMA55v0Asbn9dcb2Lt56UMTDnV8F6zcdVX+IzP1vfGSDqT9Fz9VXu6dgBHAOAnAOAnBO4c8G6py+ufZqsP7G0hOm9rVHWLt3f7D+jZ598vOll0VcdIrWFqLa1v81jADOQQDOQQDOKdwD6Jx+sVuWa0/wwNwREY+skjlaE8v5sfoxT3B/8+Om9jXaU2gLoNf/Kw0jgHMQgHMQgHPKfk7g1hNXRHxjT/i+O+YJjv9zRsQvNjyT0Ls8uecWumV/Xn3rWPDzrU++JuJHn3pdxLvulfXL/fx/DEYA5yAA5yAA55TdA2j0WsHW7MoiNRems3RexMe7F6n4H1aPEMv5HW2twc/HyocPfxAs157h0vefiVivLfBcACSBAJyDAJxj9gCp5/jpeYHeoXD9tgNHguWRLYE5j6Dr65yv7+N1Tn9/v8zJVvQ8gObDfdIDlNsTMAI4BwE4BwE4J3o+gE4pU0PyTJ+YJxgZkDm27YCtgzFqZ1eb6g+f2i1i7QFO9w2KWOf8cz8cFnHjtM1GfdzVIWK9FnB5TYuItSfQ/dGeAA8AJhCAcxCAc8we4Ozb20Vsffbu/KzMud27TB/PYfUAOe64KcJfJ+QevrXrw7+RBnXMYf0LyhOcnfnfXcuyLDvY/qWI38nk/gi95xAPACYQgHMQgHOSzwlM9QSbuqQnKJ2U5dojJOd8jfIAeh5gR9tDIp6uk9fXHkBTuzv8aGDtd+Hy+X6V4z+Vv1k8ACSBAJyDAJyTm8jWOUR7ggVyjohTPcGWOnmfWzqp9gN0mZrLkVsLyML7DXr7fxLxjtmbi9RcGH0Ssm7v9Gq5IaL9zMMinuyZNF3PCiOAcxCAcxCAc4p4d7CIrZ5A3/dvqdOx9ATDp2R50/Mngv3TOd9KS0uziHv7I5sYI4xf+1PEf1yfEvHmnvuS2rfCCOAcBOAcBOCcpbwvIDgvoLF6gjXqSJ6xC/IdP1GmHgsWj/1sbC9Ce1tzsHxc3bYPDEjPsGH9PSLWHkDz3hu98g+Hwv2zwgjgHATgHATgHPM8QGy92bp2kKcvUm5jW6GtrTwYAZyDAJyDAJxT+BlB1v0Elabp2KiIO7ZvErHeI5i1hOcBUtH3/Z8feknEB9X+hck7J0S8hD2d4v/DCOAcBOAcBOCcqn6n3VKI5ryZelm/fiZYnkM9NxDzMLG1AM3g5V9E/O6b8vwAnfOt5x6um5b7C/AAIEAAzkEAzrntPUAM63v7rJ6gaCYafg+W65xuBQ8AAgTgHATgnBXvAaxU+7t+NbwvAJJAAM5BAAAAAAAAAAAATvgXtprTE+PHJ9wAAAAASUVORK5CYII=",
  dl = "data:image/png;base64,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",
  ul = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAABQxJREFUeJztnUtsTVEUhu/xKCUhEoQgqQ46IaJCgkTMDBQjpuiAYmIiBoQIMRFGEpSBMDUgrorHwCPxSK5oCRMDOpAQkbQRiltcU2td9srO3ufl/7/Z6tk9+9zbv2v9Z5999q5UCCGEEIJIkvcFaBqNRiPva4hJkiSF+47/ZEzeF0DyhQIAhwIAJ/P65Fvjk/GT07qUVGiMfvFqn7dHYAYAhwIAhwIAZ1zaHVg136rx1b5HIl63ZpGz/dsPMh4YeC7ixYsXOY+HYn0e7RH095O1J2AGAIcCAIcCACd6vfGt+brG6xo9d6b8/RevPgVcXXwGBwe92q/vWiFia9wgbU/ADAAOBQAOBQBO6h7At+YPDxerxodieQTLE9ADkFShAMChAMBJ/VmAhR6Lb2try+dCUkI/u7h2K+6zh1CYAcChAMChAMDJ3QP87+MAoZjPVgLHCZgBwKEAwKEAwMndA1hz9jRF8wgLO6Y4j/ve92c9p5AZABwKABwKAJzcPYDGmqdveYSsiT22//P7iPO49gihnoAZABwKABwKAJzMPcCr1+9F3NE+y+v3Y7/LlzbVW/0iXr+m09l+7IRJIq6f+yobXFFzBg1PYMEMAA4FAA4FAE7hxgGs+/yieQBd40PRNXzJ6p0irnfL/9mWSmtQf8wA4FAA4FAA4BTOA2jmzZH3uZ0rNzvbP713WsR6rF6PQ2g+fJTzDYaG/e6ra7XHIj68f+c/WhYDZgBwKABwKABwCu8BNE/unHEe79mzXMTW2LsvusZrli2T/fs+C7AY2vVO/aQ96HzMAOBQAOBQAOCUzgP8vJjvFjy6xmtCxwH08309H2CodsjrfBbMAOBQAOBQAOCUzgPkTerjAF9GRdii/0Tb5H2/7xxADTMAOBQAOBQAOKXzAHosfNqp2Zn2b40DBDN5vPNw7P0FmAHAoQDAoQDAKZ0H0DQ9H991I58LiUTWew8zA4BDAYBDAYBTeg8wsa7HAc7nch1lhRkAHAoAHAoAnNJ5gOaaXyzOntjqPF6r7RCxftdRrweg0e8+cq1gEgQFAA4FAE7pPIBm6oj8CNv3Zdu/rvnVm89S7U97hFBPwAwADgUADgUATuk8gK75WWPV/INHZU2OjX7X0PIEFswA4FAA4FAA4AQXVGtvW3TuPugV8bcWOYdx+me5X8LYH+73Aip3Zc3vv6/XTKIHIB5QAOBQAOCYHsCq8Z/GGRpKwtazb+J23WhwIW5/nly9JGtw63XpAVorcj5D05pHM9yfr3on7udjBgCHAgCHAgCnyQPomt83f4HzBKsiX5DeE2j77lOyQeQaGJsNm+R9+tVLv5zt9eetVlTsuSdRsvG6iK35AcwA4FAA4FAA4JjjAF1vXob1oNa+9SX2ev9po8cBjhyTnuXA3i1B57fWKax0rxVh0icPa0/ADAAOBQAOBQBOkwcIXXNG1xi95o1eD//EycvO83W0z3IeLzq9x2XN79njN46ha75ep1DPB2h0eZ2eGQAdCgAcCgCc6JPstYfw9QQayyPEZub0Kc44FD0OoJ8FxIbvBhInFAA4FAA4mW/C5/segeURcufHiAhjrw+g5wPodxOtr5MegDihAMChAMDJdyPev5D1u4ZJ70r5g+4nYSecMGq3CSC05muYAcChAMChAMApnAdIm9geI6m3uBucXyr773kYs3vuGUTCoADAoQDAgfMAoUT3EIE1PBRmAHAoAHAoAHB+A1OqeOtqU9rHAAAAAElFTkSuQmCC",
  pl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAABMRJREFUeJztnbtrVEEUxu+V7CIE1BQqimD+AlEhoDZ2goQtbSx8lFoKNgqCgoWgleADETGgrYE1AR+ggqASIVGsLCRgJEYCkagRNsa1E89ZnZNx5r72+37d7L07M5t8nHN25ruzaUIE7Xa7XfQc/iRN0zTL/ldk2TkpPxQAOBQAOJnmlypg5fy01pvXVJIkSZL24jfn9dg1ASMAOBQAOBQAOD1FTyBvfHO+lZOnPrnHm5h4vbyJLXN8Pf/QmoARABwKABwKAJyuXwcIzflv3s7Hn5SDyclJ0W4M7hTt2OsEjADgUADgUADgwK0D6JzfHHkm2l8W8pxNJ/39/aKt5+e7TmHBCAAOBQAOBQBO5jVA2Tx2ZWfzplWirZYFosMIAA4FAA4FAE70GqBqHjvNk6dy/37r1i0xp+M9ftYwAoBDAYBDAYATXAOU3WO3ffcR0d6264DX+33Hi03z/nim/TMCgEMBgEMBgONdAxTtsdP75RZnTsoa4NTZy877dc4dG3vu1b/m7buPov1pVn7+uc9h+/mhMAKAQwGAQwGAE7wOUDWPnVUTDAzsEO3xB9fdAzx21wBlhxEAHAoAHAoAnK5/LiDUY7fUsyjaX+vy0bvhW1//Z1q/sdYZdE0SG0YAcCgAcCgAcDKvAarusdM5XzM7F1YDZJ3jLRgBwKEAwKEAwMl9HaBqHrtVP346rx/zHP/ufffnt/YmYsMIAA4FAA4FAE7mNUCoxy5vT93V8wdFO/Y5gZan0dfDGAojADgUADgUADi5rwO8OHxVtOv71RRy9tjpnFt2D2NjcCjqeIwA4FAA4FAA4HSdJ7Boj10oPCeQ5AoFAA4FAE7uNUB9rdxfb92WGry3Maz/0BxfdQ+jL4wA4FAA4FAA4BS+DqBrgmYSlgNjrwNUzcPo+/sMjADgUADgUADgFF4DLO2Vz96NPnwV1F/oOkDVPIzpiN/97UHZZgQAhwIAhwIAJ/caQOf8svPy0RXn9dGH5T4nUOf8NE3FP4ARABwKABwKAJzC1wE6zuAZzXa86ekP6pVtzvuXhoyaJdC/ELp3MbNvRrTXLaz3Gp8RABwKABwKAJyOGsB3P9kX69w9NEL3Lqycr7/3axgBwKEAwKEAwDHXAdJW3bijJlp6P7yxR37PPp7ccPbWsCYUyNTUe6/7545Ou28YnnFfN4jtYbRyvoYRABwKABwKAByzBmjXW87radLrvG7VBFnTt8Y9P19WtjaoVyaC+iv6vAJGAHAoAHAoAHA6agDre6TeK2gvSp+7/i1hzYWLd5zXtY/ewsrx504fdF5PErenT+f81QvyT9Z8bHRfchgBwKEAwKEAwPH2BOoawaoJOt5v1AjR+SZ/+zfprf39vn+gc363wQgADgUADgUATnCCC103iI3tXwjkgdobqRV7hlAojADgUADgUADgZP4l19ej5ktHjaH8C/M9UuOrUz8PY3Limhrxpmzm7G+IDSMAOBQAOBQAOJVf6Lb2JnypuofR+vw8I4gIKABwKABwuu5hfd8aIG8Po4XlYWxd++7VX+2Q/D0G1gBEQAGAQwGA03U1gEXsGiE2M7V3ot13ST+L6MbK+RpGAHAoAHAoAHDgagCLrM9JzBvWAMQJBQAOBQDOLzFifA2FYHwZAAAAAElFTkSuQmCC",
  ml = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAABjpJREFUeJztnW9oVXUYx+9xbTC0GWnbLAcVpmJZm+QKk9aSLos0MCiCaCWsVYMaEdULKcKKwOzFEkYuw7J/0IsSV2YTcUV/zEmTIGERMZr/ZpOyZmtbdXrRmz3P8Pf4cM7dveP7/bx77jnnd3738uX3fM9znntOlAEjjuM433OYSBRFUT7PPyOfJyf5hwIAhwIAJ6/5Jw2S5vSoeGZaUzkn4vEziY5P2zNwBQCHAgCHAgDnvHxPwMKb4705vbm13bV/Urzz057B+j28HoErADgUADgUADgF5wHMHGfkUG9O37LpvuD2IyfDxx869J3rfJmMb37W97U8guUJuAKAQwGAQwGAk3cP4M35Vo63crpmWd3Drv01y5df79p/TbbGeYbw99W/j9cTcAUAhwIAhwIAZ8o9QNKc//STMsfPL5fHJ83pXnp69rv2r5h/tWt/2zPI38frCbgCgEMBgEMBgJP3OoA3599+Z7o5vvvLLcHtpVt94400yfivkuMibsg8K+LVa5uD4x04/E9w+2SP4PMEXAHAoQDAoQDAybsHsPDeb7dyuqZstE7E42995jq+JP5XxPFovRw/c7eIv1HjjzSF53vTDQ+K2PIMXrgCgEMBgEMBgFPwHsDCyvk6x2uS5nxNtH2fiONG6QmK761TcXg+3cojbKIHIGlCAYBDAYBT8B6gulreP9+wXt4L+Dwj49WrWhOd79eW48Htg5nB4PaK36pEHOlS/sxiEWYb1or40x3SI5Q8cEAe/8RKEQ4clbX9zq7e4Pw0XAHAoQDAoQDAKXgP8P4HXSK+645scP+P9ra5xq9tqXDPKcTgBQMi1p6g8+OvRbx580YR6/kPHJUeqOoSeX//uY1vinjRgnnnPtkMVwB4KABwKABwCt4DLLy8UsTaE2gefWhVcPuMTJGId+3w/r/fR2f3QRHruoZGe4Ku3R+mPqeJcAUAhwIAhwIAp+A9gEZ7grlz54j4lVf3usazPIPFiZNF9k4T0NftmksX3SLiZhV3tLW4zmfBFQAcCgAcCgActweY6nfu6Otm638CK2qvFPGsWeHn7Hk9g0Xfj+F+Aov+vj0ituoAuvbvPT9XAHAoAHAoAHBMD5D02b1J+aTrCxHfmpU9cZXlsunu4LcnXONnb64V8fCw7LEbGjrlGs/CytG6DvDybY0ifvwR2UOox2M/AHFBAYBDAYBjegD9T7gilfN1j1tDVl6He6+zdU6bV14mYu0J/hj+U8RWbX/o1JiKR13zS4rO0f19GRXLOkBHG/sBSA6hAMChAMBJvR9gd9f3aQ8p0J5g6ZLLRLxz12ER9/8cvu6e7BnOV7HsP/De/9dY/91jPwCZUigAcCgAcBJ7gB9+8tXevXj7AS6uvFDECxdUnWXP/5nu/QBJ4QoADgUADgUATmIPkDTnWaD3A7AOQHIKBQAOBQCO6QG0QvQ7Z9J+T59+Fy96PwDrACSnUADgUADgFHxPoIb9AKwDkBShAMChAMCZdj2BFuwH8MEVABwKABwKAJyC7wm0aHnseREvq5Z1iGuWLhZx/Y3Xipj9AAQaCgAcCgCcgu8J9PJ6+1OpjvfiS9tEfNWSxWfZMx1YByBTCgUADgUAziQPYD4LuENeJ3c0p/ucwObW9kTH16yQz9Xr/Wp7ovGOHTsi4lx7ANYByJRCAYBDAYBj1gGibeqDe0pULMOxd/8OjjfSJOPZUamIe3r2i3hNtsaaomDldVeoT9L1BLkmaR3g7fd8+3MFAIcCAIcCAMd+X8A6/Yn8b934G2EN6ZxfulXGp5tGRDxb5ehnXpD7b1jv+y/idPME3jqA9kz6+4y9Jn9fDVcAcCgAcCgAcCZ5gCiKIs8A1r2D4vvV+GOqjhBLT6HpVfcatCfwUuiewFsH0PM9HYdzvoYrADgUADgUADiJewItz6A9Qlyicv6kOoNinew/sN9T2Ghsl1ieIG30dftF8nEHmV9+188nCKNzftlondyhaF/weK4A4FAA4FAA4Liu+fOB2aOo8L7LWPcQ5hpvnUE/l9GL5dG4AoBDAYBDAYCT+jOC0sZdZ3DmTK9nSMyZcRm/I+sicWN98HDvvRoLrgDgUADgUADgFHwdIG28dYV8k3bO13AFAIcCAIcCAOc/V4EWlA9oKYIAAAAASUVORK5CYII=",
  hl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAAgFJREFUeJzt3MFNwzAUBuAWIbEEE7AF7MF2zMEI3ODAnSV6Cee4Vd0oSWPn/75blKiN1F/v2Y7TwwEAAAAAAAAAAAAAAAAA6Mlx6xtINwzDcO388Xhc9Td6WPPDaZ8AhBOAcAIQTgDCCUA4AQi3+3WA2jx7a2vP82tUgHACEE4Awj1ufQP3tnHLPbQ2JFEBwglAOAEIt7sxwNR5/9nlP2+zvv/09Ts6fnr/m/V5a1MBwglAOAEIt7sxQKmc9y89D6/1/Nbm/SUVIJwAhBOAcN2PAWY/758471+655f3f+/9ASpAOAEIJwDhuh8DlNae99fW9qe28K3XCVSAcAIQTgDCdfdewA3v05fXjy+Y+bz/zMvn1dOnj+fRcW3dwDoAdyUA4QQgXPfrAGvP+6uKMUVv+wNUgHACEE4AwnU/BigtPY0evl+vnp/b8/0/AJsSgHACEK77McDcefXUZwe99/ySChBOAMIJQLjmxgC1ffJTe+jc9wb21vNLKkA4AQgnAOGa7k9LuDCmKM+Pjqfu4Su13vNLKkA4AQgnAOG66le3mPvewNQ9hr31/JIKEE4AwglAuOaeBSxt656/9X8A1agA4QQgnACEa6ofLaG29n/h+qvnW+vZS1MBwglAOAEIt/t1gKlbAvfe80sqQDgBCCcAAAAAAAAAAAAAAAAAAAAd+QcizKPAfxkTLQAAAABJRU5ErkJggg==",
  Al = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAAkxJREFUeJzt3cFx1DAUBuBdhhmaoALKoA+6Sx2UwJEDd5rIZTlH2cEY6cmy/++7ZXbi9Sb/vCfJsvd2AwAAAAAAAAAAAK7gfvQJVHs8Ho+jz6HH/X4v/R99qDw46xOAcAIQ7uPsN9zqyb097x+O33P4crOHLCpAOAEIJwDhpo8BZmt7/rse+/Nr6fu//vj119c/fftd+v5bVIBwAhBOAMJNHwOMXtteba1/b88/+vRVgHACEE4Awl1uHWD2vH90z6++/t9SAcIJQDgBCHe6McDR8/7Ven7799h7PBUgnACEE4Bwa2+Qe+JJz2tff/sLnfP+1Xr+aCpAOAEIJwDhll8HmD3vv3rPb6kA4QQgnACEW7o/3W718/7V9/B5PgClBCCcAIRbbh2get7fe69e9bTe8wGYSgDCCUC45dYByq/3f/n+X+dVZevzWQeglACEE4Bwy60DlCt+JlCrXXc4+tpCSwUIJwDhBCDc6cYA09fiO/cXrL6HUAUIJwDhBCDc8mOA6nlyb8s9W89vqQDhBCCcAIRbbj/AaKP3F5y957dUgHACEE4Awi2/DrDX6PsKrtbzWypAOAEIJwDhho8Bep9dO9reef/Ve35LBQgnAOEEINzwMcDsHtg771+951ePqVSAcAIQTgDCnWrO+sze6/2vL5/f/Fzd8/eOUdwXwFQCEE4AwsWNATavDTSqv9fv6GsnKkA4AQgnAOEutyewNbvnbzn6u49bKkA4AQgnAOEutw6w19n28I2mAoQTgHACAAAAAAAAAAAAAHABfwC3/v8vAZpBjAAAAABJRU5ErkJggg==",
  gl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAAqtJREFUeJzt3bFRxDAQRmHMMNAEMQkZJdAH3dEHHRASEEMTl5iABAsGY6S1Vn7vy47jfAb+2ZUl4Ts7kyRJkiRJkiRJRzb1PoFa8zzPvc8h0jRNoX+j88iDKz8DAGcA4C56n0BrwS0z3N5DGisAnAGAMwBw6ccA5XX+1uvibz315b7+pCqcnl8Xj68e3judyScrAJwBgDMAcOnHANFz4dHWen7vpQwrAJwBgDMAcOnHAKOp7fn/mOf49YBrx7MCwBkAOAMA5xigs97zHFYAOAMAZwDgHANUip7rX9sPUTuGsALAGQA4AwA33Fr7Dz2xfH75gsZ7APee649mBYAzAHAGAK75PEDt+vTRZP95rQBwBgDOAMClXwvofQ+g2uv+6PN3LUBVDACcAYBrPgaIvu6Nnvtvvb7f+tfRekhhBYAzAHAGAC79PEA2W3v61p59erxePI6+h5AVAM4AwBkAuHRjgN5z/5d3N4vH8/xWd8CVeYne9xCyAsAZADgDAJduv1rvff/Rsv1fgRUAzgDAGQC4dPMAq+z5TVkB4AwAnAGAG24eYIf3X35h45gje88vWQHgDACcAYBLPw8QvR5e23JH6/klKwCcAYAzAHDpxgCte2LrPYaj9/ySFQDOAMAZALhU/ShC6z2G0+3T768vv3/nzwHcygoAZwDgDABcunmAWq2v+6N7fm9WADgDAGcA4ML71drn3u3wfuXzyxcU1/1H7/klKwCcAYAzAHDh8wCj98jS0X4eKwCcAYAzAHDD97M/rJ+X37/p+R+ON/zv7CsrAJwBgDMAcIfbD9D6voK1PX/r/gTvD6BdGQA4AwB3uDFAdmWP7/35CFYAOAMAZwDgDj8GyDZ137vnl6wAcAYAzgDAHW4MkKzFpt8/YAWAMwBwBkCSJEmSJAniA8sG9dXtJ5oqAAAAAElFTkSuQmCC",
  _l = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAAtZJREFUeJzt3U1uFDEQhmEaRXATDsANwj24MruwYM8l2DQbNlOJZCz/lCvv++xG0cx0pE/lctvtuT4c7r7vO/saVrqu68r8/o+ZX658BgDOAMA9ZV9Ar+Qhc9hpLY0VAM4AwBkAuHI9QPRqTP35LedC/vnz49fD68/ffyddyf+xAsAZADgDAFe+B8gWx/xqrABwBgDOAMDZA0wW5/2n3fuPrABwBgDOAMDZA3Qanff37gFs7Ykc3VNoBYAzAHAGAM4eYFC1eX9kBYAzAHAGAM4eoGH3vH/2+1usAHAGAM4AwC3vAeK97Ozn4UdVn/dHVgA4AwBnAOCW9wCz179Xm73Pf/b/M7uHsgLAGQA4AwB3/FpAHPJ2nwfQer5/9W2N1S2RFQDOAMAZALjje4Bsu29L7F4qsQLAGQA4AwB33Nr8G/sH4t8f35B8LmCv1jmCrZ7DtQBNZQDgDACc9wEWy36uoMUKAGcA4AwAXPkeYPVZvZ++fpn6eac9V2AFgDMAcAYArlwPsHu9/H7p6wFOn/dHVgA4AwBnAOCm9wCzz7atvifvtHl/ZAWAMwBwBgDuuPsAsUdYfV7Aqz2HL89d768274+sAHAGAM4AwE3vAbLHtGynz/sjKwCcAYAzAHDH3QdoyW4xqs/7IysAnAGAMwBw5XqAKPu8gGrz/sgKAGcA4AwAXPkeoNfqZwmj0Xn/6t9csgLAGQA4AwBXvwcYnPe3fg+gZfW83zOCtJQBgDMAcPV7gIbeef/omH7aen+LFQDOAMAZALh33wNE2efzn8YKAGcA4AwA3HE9wOh5AO9t3/5qVgA4AwBnAOC29wC9e9xGfzdw9b792eci7mYFgDMAcAYAbnsPMDwmhjHfef8YKwCcAYAzAHDHrQWM2v28fvUewgoAZwDgDADccePXG2sFo5/38Lr6mD2bFQDOAMAZALjj7wNUO3evGisAnAGAMwCSJElAfwElasLUXOrQXAAAAABJRU5ErkJggg==",
  fl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAAxtJREFUeJzt3bFx3DAQRmHTo5GbcKwC3IHVh7tzPc6kQLmbUELFBjXG4QDsgnzvC6XhHaX5Z7EgQHL7srh93/fsc5hp27Yt8/u/Zn658hkAOAMAlzr+3KLsAZKHzG6tLc3sHsEKAGcA4AwA3EP2CfTO8w+Hvz73fFyz9z9v//39t19/g87kPlYAOAMAZwDg0nsAOtcClMoAwBkAuPQeoDYGrrYfoHXev9jpH1gB4AwAnAGAS+8BaLLn/SUrAJwBgDMAcIce4JM9eE1jVu/xq1lt3j/6/2sFgDMAcAYA7tAD9I4pZx/zRxv9/yg/r7ZWUvt+KwCcAYAzAHCuBRRWm/fPZgWAMwBwBgBueA/QOy9dbQ9gr9l/j2sB6mIA4AwA3PLXAcohLvp5ALX7+2cvfZR/7+i1BSsAnAGAMwBww3uAq83zo083ejuFFQDOAMAZALjw/XutPUD2dYDRyv0GrfsLvA6goQwAnAGAC18LuNp1gpraHsMa3xegqQwAnAGAq/YAd8zbp45Z77+/z/z4g8cfT0M/b7X7CqwAcAYAzgDANV8HaL0/fbTod/DsL209QO+8P5oVAM4AwBkAuOYeIHrMP/uevOz1/horAJwBgDMAcNUeIHpMir7OcNhz+PKz6fizzftLVgA4AwBnAODC9wRe7X0CpdXn/SUrAJwBgDMAcMvdF3DD8aNO5S7R+/x7n7tYYwWAMwBwBgCuuweYPUbd8P3//iD4eQGr7fNvZQWAMwBwBgBu+WcFjxa9fr/6u5etAHAGAM4AwHX3ANnr2b167zUcPe/3vgCFMgBwBgDu8tcBWuf9vWP62XoiKwCcAYAzAHCX7wFKZ9u3Xxq9VmAFgDMAcAYAbrkeoPl5AMUewLPt289+FrMVAM4AwBkAuOV6gFLvewPPtm8/+hlJVgA4AwBnAOCm9wDD97knz/tHH1+KfhazFQDOAMAZALjh7wsox8To9fTZ8/7RPU32fgMrAJwBgDMAcM3jz+xnAn0yxvZ83KEHyB5zV2MFgDMAcAYArvvdwbOtvn7farX3JVgB4AwAnAGQJEkC+gAjCBSs2IK1XQAAAABJRU5ErkJggg==",
  xl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAA9NJREFUeJztnT1y1EAQhS1qy1yCmAAybgDnMLfjHHADMhMQwyWcLLF6sXp7X49GW+/7MnktjaR61X/TM1oeDs75fD7PvgeFZVkW5fzs+dXrv1FOhvsHAZiDAMw5zb4BFdEFtnNvIQsWwBwEYA4CMGd4DKDmsfH37HoXP//6sn2DCS8/f2/+/vbrX+n68Xni86p5fgYWwBwEYA4CMOfu6wB7E32+mveP9vEZWABzEIA5CMAcOQaYncd2k+X9Gd3PW+2HqI6PBTAHAZiDAMw5XB3gaD2Aat7f3dNXnRvJwAKYgwDMQQDmpDFANc/P/v9oHC3vz+iOkbAA5iAAcxCAOWkM0L22rbsHsJvZ8/1qDFU9HwtgDgIwBwGYU64DqMyu9c/O+0c/P/0AUAIBmIMAzCn3A+xd2o8uM46vrgWs5v1H8+EqWABzEIA5CMCcjnUB6z+I6/GXjz+k81VmxzhX/H9rjyEWwBwEYA4CMOciBhid58ZafPf8e8bjp/dhvD9Dx3v59m51nO0ppL7/6vlYAHMQgDkIwJzhawNn+/wUsW4RqT7v7LoDFsAcBGAOAjDnmnUBq+Pu2v+9o/YYRtT3m8UgESyAOQjAHARgzml07X903h9r7SpxrqDK3nUONQbBApiDAMxBAOZc1AFG5/3V2nfmQ9Vv9lyM97wdAzSsLVyPV3y/1W8YZe8PC2AOAjAHAZjT3w/w4fvqMEuDb+iZu+m2XkOdjx9e52j2+XHdABbAHARgDgIwp9wPkBPy3OfPq+PZPYIXeXi4v8jeeX+3z8/AApiDAMxBAOb8b21g6QJVn1rlaJ8b2Dtmyeoi2fthLgA2QQDmIABzTup+9Bndef/odQmz5/sfn9b7FZyftserzqVEsADmIABzEIA5u38v4N5QY5bquoXHh1pPoHp/WABzEIA5CMAc+XsBR5vvj8zee7i+biG8L3Fuhe8GwiYIwBwEYE77/gBqn/rousPoGKS7n2J0TIUFMAcBmIMAzEn7Abp9svxdPHH9fCSLQbr7JUb7/OrzYAHMQQDmIABz5P0BYq19dvtAd56sxgRVVJ9f/R0LYA4CMAcBmFOOAW6ode9aZ8hQfeYN462OY94/O4bCApiDAMxBAOZcs0fQrgv0u/fUyajGIOr7qPr80f0SWABzEIA5CMAc2b93z59X9xzq9qlqf4Dqowf0HzAXAK+DAMxBAObI+wOM3mMoovb8ZYyem9i7rpKBBTAHAZiDAMxJ/VF3DJBdX3WR8XZn+9y9ewqrYAHMQQDmIABzpvujo+fdR/fhKlgAcxCAOQgAAAAAwJB/s3kQcMKqJVwAAAAASUVORK5CYII=",
  Po = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACABAMAAAAxEHz4AAAAD1BMVEVHcEz284nytSDliicgGCcE4LS5AAAAAXRSTlMAQObYZgAAAJ5JREFUeNrt2LsNgDAMRVEKFuAzAYwAA4DE/jNBCmyF/IkEzX113qmsyHITyJGIPAQACKQ1D7or/fTMvFxZAQAqAOlu5hEAQKq7m7I7gNoFAPgY0Al2AgAQAKTbT950d0YAgApAtzQAgBjgT2BLAwBwu7G59CxZAADlgP2JAQBIsg8QgzWAAAB/AbrXAwAURQ8QMoAAAC8BvVQBAOTmBHvqugmDIq+UAAAAAElFTkSuQmCC",
  No = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAAXNSR0IArs4c6QAAAFRQTFRFICo/9c+d/88A+Ldj/8UB0bqh/78A/7cA/60Ax6uV7bEK/6QA/6AA/5kA/5IA1qASop2exJ40/4UAsIA0eX6JlHpOeWhPV2ByYFZLMzxRGSc+ESE7VlFONgAAAadJREFUeNrt121vgyAUhmGnKFRb6ltbOOf//8/x4Jgm7ZKJZGkWbr80fLiCPVLTIpfL5XK5v8zacTydiN4VJJqmcdSa+X1BfRldfU/JQK09WKTJGO3FqmJOBaJUILPWl4v2PR4JQArgmAQksvZ8vrjwLdY1M/niwWIFdSyIXRnf7TZNSnXdusePj7ruXfP8eFi7B7SvQB0Htq0QTSNdytU58JuEuYl5D9goqdBx0BgPLn2h50BuzKr63XDoDtCLCpfqcAXQtwtE1oKUMJ9uO9x4XRdoFwjuCdQxIBoG7O56nSZj8CgxSwlyQfGIJwK9GQOCIFdB+GSMWkbjUqrvwcWCrgVUAew8GBew+32dNsh5JnDHQCU9F0CK5oBtTw1Q/MweA9dTAy8eJBoG4WogNmGPGMlxcN2j6xQLWluWALd7BFhVsVPeguvJltHv59vNgZ4sy+s1oBjSEVBsQYgqFmRu29LXttbiIE6TENIX9eDQj2ATCdLCGcNcUHi9VhWm3fcHwbBSAJSxIAsxDMVT8yzEPEeAnBZERK9XsZ4QxHr+K5jL5XL/oU+kODawNDIwtAAAAABJRU5ErkJggg==",
  Ft = {
    1: hl,
    5: Al,
    10: gl,
    100: _l,
    500: fl,
    1e3: xl,
    default: Po
  },
  vl = (n, t) => t < 5 ? Ft[1] : t < 10 ? Ft[5] : t < 100 ? Ft[10] : t < 500 ? Ft[100] : t < 1e3 ? Ft[500] : Ft[1e3],
  Qt = {
    1: nl,
    5: sl,
    10: al,
    100: il,
    500: ol,
    1e3: rl,
    default: jo
  },
  yl = (n, t) => t < 5 ? Qt[1] : t < 10 ? Qt[5] : t < 100 ? Qt[10] : t < 500 ? Qt[100] : t < 1e3 ? Qt[500] : Qt[1e3],
  wl = () => un,
  bl = () => wo,
  jl = () => bo,
  zt = {
    1: cl,
    5: ll,
    10: dl,
    100: ul,
    500: pl,
    1e3: ml,
    default: Co
  },
  Cl = (n, t) => t < 5 ? zt[1] : t < 10 ? zt[5] : t < 100 ? zt[10] : t < 500 ? zt[100] : t < 1e3 ? zt[500] : zt[1e3],
  Ni = {
    9: fo,
    10: xo,
    11: vo
  },
  va = (n, t) => Ni[n] ? Ni[n] : No,
  Pl = () => No,
  ya = {
    1: vl,
    2: yl,
    13: wl,
    4: bl,
    5: jl,
    6: Cl,
    9: va,
    10: va,
    11: va,
    default: Pl
  },
  So = (n, t) => ya[n] ? ya[n](n, t) : ya.default(),
  Nl = ({
    item: n,
    active: t,
    amount: s = 1,
    type: a = "sale"
  }) => {
    var d;
    const i = _(),
      o = l(p => p.shop.selectedCurrency),
      r = (d = n.prices.filter(p => p.currency_id === o)[0]) == null ? void 0 : d.price,
      c = [le.info_row];
    return e.jsxs("div", {
      className: c.join(" "),
      onPointerUp: () => {
        t && (i(Ge(n.id)), i(We()))
      },
      children: [e.jsxs("div", {
        className: le.info_row_content,
        children: [e.jsxs("div", {
          children: [e.jsx("div", {
            className: le.row_icon_container,
            children: e.jsx("img", {
              alt: "",
              src: So(n.id, s),
              className: le.row_icon
            })
          }), e.jsx("div", {
            className: le.row_title,
            children: e.jsx("span", {
              children: n.name.replace("charges", "").replace("' Snap", "").replace(" Snap", "")
            })
          })]
        }), e.jsxs("div", {
          className: le.row_price_container,
          children: [r && e.jsxs("span", {
            className: le.main_info_channel_users,
            children: [e.jsx(tl, {}), e.jsx(de, {
              num: r
            })]
          }), !r && e.jsx("span", {
            className: le.main_info_channel_users,
            children: "No"
          })]
        })]
      }), a === "sale" && e.jsx("div", {
        className: le.info_row_sale,
        children: "-75%"
      }), a === "limited" && e.jsx("div", {
        style: {
          backgroundColor: "#026e4f",
          color: "white",
          lineHeight: 1
        },
        className: le.info_row_sale,
        children: "Limited"
      }), a === "event" && e.jsx("div", {
        className: le.info_row_sale,
        style: {
          backgroundColor: "#850294",
          color: "white",
          lineHeight: 1
        },
        children: "Event"
      })]
    })
  },
  Sl = "_panel_1iadi_1",
  Il = "_item_1iadi_11",
  Tl = "_active_1iadi_25",
  wa = {
    panel: Sl,
    item: Il,
    active: Tl
  },
  Dl = {
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
  jn = Dl,
  El = () => window.location.hostname.split(".").length === 3,
  Bl = () => !1,
  Io = () => window.location.hostname.includes("dev"),
  kl = () => Io() ? jn.VITE_ADSGRAM_BLOCK_ID : El() ? "4853" : "4995",
  It = {
    isDev: Bl(),
    devServer: Io(),
    devUserInitData: jn.VITE_INIT_DATA || null,
    devWallet: jn.VITE_DEV_WALLET || null,
    apiBaseUrl: jn.VITE_API_URL,
    app: {
      disableBetaError: jn.VITE_DISABLE_BETA_ERROR,
      adsgramBlockId: kl()
    }
  },
  Rl = () => window.Telegram.WebApp.isVersionAtLeast("8.0") ? window.Telegram.WebApp.safeAreaInset : {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  Ul = () => window.Telegram.WebApp.isVersionAtLeast("8.0") ? window.Telegram.WebApp.contentSafeAreaInset : {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  Ol = {
    deviceType: "unknown",
    os: "unknown",
    platform: "unknown",
    fullscreen: window.Telegram.WebApp.isVersionAtLeast("8.0") || It.isDev,
    safeAreaInset: Rl(),
    contentSafeAreaInset: Ul()
  },
  To = ie({
    name: "device",
    initialState: Ol,
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
    setDeviceInfo: Ml,
    setFullscreen: Fl
  } = To.actions,
  ot = n => n.device.platform,
  Ql = n => n.device.os,
  Qn = n => n.device.fullscreen,
  zn = n => n.device.contentSafeAreaInset,
  qn = n => n.device.safeAreaInset,
  zl = To.reducer,
  ql = () => {
    const [n, t] = u.useState("Stars"), s = l(ot);
    return e.jsx("div", {
      className: wa.panel,
      children: ["Star Shop"].map(a => e.jsxs("div", {
        className: `${wa.item} ${n===a?wa.active:""}`,
        onPointerUp: () => {
          t(a)
        },
        children: [s === Ae && e.jsx("h1", {
          children: "TON Shop"
        }), s !== Ae && e.jsx("h1", {
          children: "Star Shop"
        })]
      }, a))
    })
  },
  Hl = "_layout_q8u4d_1",
  Ll = "_content_q8u4d_22",
  Si = {
    layout: Hl,
    content: Ll
  },
  Xl = "_header_btihg_1",
  Vl = "_header_bottom_container_btihg_14",
  Gl = "_header_bottom_btihg_14",
  Wl = "_header_placeholder_btihg_39",
  Yl = "_header_content_btihg_45",
  Jl = "_league_btihg_56",
  Kl = "_bronze_btihg_66",
  Zl = "_silver_btihg_67",
  $l = "_gold_btihg_68",
  ed = "_platinum_btihg_69",
  td = "_diamond_btihg_70",
  nd = "_logo_link_btihg_72",
  sd = "_logo_btihg_72",
  Ee = {
    header: Xl,
    header_bottom_container: Vl,
    header_bottom: Gl,
    header_placeholder: Wl,
    header_content: Yl,
    league: Jl,
    bronze: Kl,
    silver: Zl,
    gold: $l,
    platinum: ed,
    diamond: td,
    logo_link: nd,
    logo: sd
  },
  ad = () => e.jsx("div", {
    className: Ee.header_placeholder
  }),
  id = {
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
  W = ({
    children: n
  }) => {
    const t = l(s => s.main.showMiningDetailsPopup);
    return e.jsxs(nn.div, {
      className: Si.layout,
      style: {
        overflow: t ? "hidden" : ""
      },
      ...id,
      children: [e.jsx(ad, {}), e.jsx("div", {
        className: Si.content,
        children: n
      })]
    })
  },
  od = "_layout_13e1w_1",
  rd = "_container_13e1w_10",
  cd = "_star_13e1w_14",
  ld = "_move_13e1w_1",
  Jn = {
    layout: od,
    container: rd,
    star: cd,
    move: ld
  },
  dd = "_link_1fn8i_1",
  ud = "_telegram_icons_1fn8i_13",
  Do = {
    link: dd,
    telegram_icons: ud
  },
  B = ({
    children: n,
    className: t = "",
    style: s = {},
    size: a = 12
  }) => n ? e.jsx("span", {
    className: `${Do.telegram_icons} ${t}`,
    style: {
      fontSize: a,
      ...s
    },
    children: n
  }) : null,
  pd = u.memo(() => {
    const n = Array.from(Array(30)),
      t = l(ot);
    return e.jsx("div", {
      className: Jn.layout,
      children: e.jsx("div", {
        className: Jn.container,
        children: n.map((s, a) => {
          const i = V(4, 14);
          return t === Ae ? e.jsx(B, {
            size: i,
            className: Jn.star,
            style: {
              animationDelay: `-${a*300}ms`,
              transform: `translate(${V(-80,-170)*(a%2===1?1:-1)}px, ${V(-100,100)}px)`
            },
            children: ""
          }, a) : e.jsx(Fn, {
            fontSize: i,
            className: Jn.star,
            style: {
              animationDelay: `-${a*300}ms`,
              transform: `translate(${V(-80,-170)*(a%2===1?1:-1)}px, ${V(-100,100)}px)`
            }
          }, a)
        })
      })
    })
  }, () => !1),
  md = "_layout_1nbfl_1",
  hd = "_button_1nbfl_14",
  Ii = {
    layout: md,
    button: hd
  },
  Ad = () => {
    const n = $();
    return e.jsx("div", {
      className: Ii.layout,
      children: e.jsx("div", {
        className: Ii.button,
        onPointerUp: () => n.push("/pay-support"),
        children: "Pay support"
      })
    })
  },
  gd = "_layout_gx8in_1",
  _d = "_container_gx8in_5",
  fd = "_item_gx8in_11",
  xd = "_active_gx8in_20",
  vd = "_image_container_gx8in_24",
  yd = "_image_gx8in_24",
  wd = "_item_text_container_gx8in_34",
  bd = "_item_text_gx8in_34",
  ct = {
    layout: gd,
    container: _d,
    item: fd,
    active: xd,
    image_container: vd,
    image: yd,
    item_text_container: wd,
    item_text: bd
  },
  Gs = Dt(),
  Ws = Dt(),
  Ys = Dt({
    sortComparer: (n, t) => n.id - t.id
  }),
  oi = Dt(),
  In = Dt(),
  Js = Dt({
    selectId: n => n.user.userId,
    sortComparer: (n, t) => n.user.rank - t.user.rank
  }),
  ri = Dt({
    selectId: n => `${n.templateId}_${n.roundId}`
  }),
  jd = {
    user: null,
    country: null,
    languageCode: "en",
    showRobotPopup: !1,
    verificatedWallet: null,
    verificatedWalletStatus: m.idle,
    checkCaptchaStatus: m.idle,
    hasCaptchaCode: !1,
    hasCaptchaCodeStatus: m.idle,
    pixelsForSale: Gs.getInitialState(),
    pixelsForSaleOffset: 0,
    pixelsForSaleLimit: 10,
    pixelsForSaleTotal: 0,
    totalPrice: 0,
    pixelCoins: 0,
    pixelsSold: Ws.getInitialState(),
    pixelsSoldOffset: 0,
    pixelsSoldLimit: 10,
    pixelsSoldTotal: 0,
    finalMiningResults: null,
    pixelsForSaleFetchStatus: m.idle,
    pixelsSoldFetchStatus: m.idle,
    getUserFetchStatus: m.idle
  },
  as = D("user/getFinalMiningResults", async () => (await O.getFinalMiningResults()).data),
  is = D("user/getVerificatedWallet", async () => (await O.getVerificatedWallet()).data),
  os = D("user/checkCaptcha", async ({
    wallet: n,
    captcha: t
  }) => (await O.checkCaptcha({
    wallet: n,
    captcha: t
  })).data),
  rs = D("user/checkHasCaptchaCode", async () => (await O.checkHasCaptchaCode()).data),
  cs = D("user/getUserPixels", async ({
    offset: n,
    limit: t
  }) => (await O.getUserPixels({
    offset: n,
    limit: t
  })).data),
  ls = D("user/getPixelsForSaleTotal", async () => (await O.getUserPixelsCount()).data),
  ds = D("user/getUserPixelsSold", async ({
    offset: n,
    limit: t
  }, s) => (await O.getUserPixelsSold({
    offset: n,
    limit: t
  })).data),
  us = D("user/getUser", async (n, {
    rejectWithValue: t
  }) => {
    try {
      const s = await O.getUser();
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
  Eo = ie({
    name: "user",
    initialState: jd,
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
      setVerificatedWallet: (n, t) => {
        n.verificatedWallet = t.payload
      },
      setShowRobotPopup: (n, t) => {
        n.showRobotPopup = t.payload
      },
      setPixelsForSaleFetchStatus: (n, t) => {
        n.pixelsForSaleFetchStatus = t.payload.status
      },
      removePixelsForSale: n => {
        Gs.removeAll(n.pixelsForSale)
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
        Ws.removeAll(n.pixelsSold)
      },
      addPixelCoins: (n, t) => {
        n.pixelCoins += t.payload
      },
      subtractPixelCoins: (n, t) => {
        n.pixelCoins -= t.payload
      },
      setPixelCoins: (n, t) => {
        n.pixelCoins = Math.floor(t.payload / 1e3)
      },
      updateUserSquad: (n, t) => {
        n.user !== null && (n.user.squad === null && (n.user.squad = {}), n.user.squad = {
          ...n.user.squad,
          ...t.payload,
          templateX: n.user.squad.templateX,
          templateY: n.user.squad.templateY
        })
      },
      setShareBalancePercent: (n, t) => {
        n.user.balance_share_percent = t.payload
      }
    },
    extraReducers: n => {
      n.addCase(cs.pending, t => {
        t.pixelsForSaleFetchStatus = m.pending
      }).addCase(cs.fulfilled, (t, s) => {
        Gs.upsertMany(t.pixelsForSale, s.payload.pixels), t.totalPrice = s.payload.totalPrice, t.pixelsForSaleTotal = s.payload.total, t.pixelsForSaleFetchStatus = m.fulfilled
      }).addCase(cs.rejected, t => {
        t.pixelsForSaleFetchStatus = m.rejected
      }).addCase(is.pending, t => {
        t.verificatedWalletStatus = m.pending
      }).addCase(is.fulfilled, (t, s) => {
        t.verificatedWallet = s.payload.wallet_address, t.verificatedWalletStatus = m.fulfilled
      }).addCase(is.rejected, t => {
        t.verificatedWalletStatus = m.rejected
      }).addCase(rs.pending, t => {
        t.hasCaptchaCodeStatus = m.pending
      }).addCase(rs.fulfilled, (t, s) => {
        t.hasCaptchaCode = s.payload, t.hasCaptchaCodeStatus = m.fulfilled
      }).addCase(rs.rejected, t => {
        t.hasCaptchaCodeStatus = m.rejected
      }).addCase(os.pending, t => {
        t.checkCaptchaStatus = m.pending
      }).addCase(os.fulfilled, (t, s) => {
        t.checkCaptchaStatus = m.fulfilled
      }).addCase(os.rejected, t => {
        t.checkCaptchaStatus = m.rejected
      }).addCase(ds.pending, t => {
        t.pixelsSoldFetchStatus = m.pending
      }).addCase(ds.fulfilled, (t, s) => {
        Ws.upsertMany(t.pixelsSold, s.payload.pixels), t.pixelsSoldTotal = s.payload.total, t.pixelsSoldFetchStatus = m.fulfilled
      }).addCase(ds.rejected, t => {
        t.pixelsSoldFetchStatus = m.rejected
      }).addCase(us.pending, t => {
        t.getUserFetchStatus = m.pending
      }).addCase(us.fulfilled, (t, s) => {
        t.user = {
          ...s.payload.data
        }, t.country = s.payload.country, t.getUserFetchStatus = m.fulfilled
      }).addCase(us.rejected, (t, s) => {
        t.getUserFetchStatus = m.rejected
      }).addCase(ls.pending, t => {}).addCase(ls.fulfilled, (t, s) => {
        t.pixelsForSaleTotal = s.payload.myPixelsCount
      }).addCase(ls.rejected, t => {}).addCase(as.pending, t => {}).addCase(as.fulfilled, (t, s) => {
        t.finalMiningResults = s.payload
      }).addCase(as.rejected, t => {})
    }
  }),
  {
    setLanguageCode: Cd,
    setVerificatedWallet: Pd,
    setPixelsForSaleOffset: Kk,
    setPixelsForSaleTotal: Nd,
    setPixelsForSaleFetchStatus: Zk,
    removePixelsForSale: $k,
    setPixelsSoldOffset: e3,
    setPixelsSoldTotal: t3,
    setPixelsSoldFetchStatus: n3,
    removePixelsSold: s3,
    setShowRobotPopup: Sd,
    addPixelCoins: a3,
    subtractPixelCoins: Id,
    setPixelCoins: Bo,
    updateUserSquad: Td,
    setShareBalancePercent: Dd
  } = Eo.actions,
  Ye = n => n.user.user,
  Ed = Eo.reducer,
  Ie = {
    getPixelsForSale: cs,
    getPixelsForSaleTotal: ls,
    getPixelsSold: ds,
    getVerificatedWallet: is,
    checkCaptcha: os,
    checkHasCaptchaCode: rs,
    getUser: us,
    getFinalMiningResults: as
  },
  Bd = () => {
    const n = _(),
      t = l(ii),
      s = l(i => i.shop.selectedCurrency),
      a = l(ot);
    return l(Ye), u.useEffect(() => {
      a === Ae && s === 1 && n(Bn(2))
    }, [a]), a !== Ae ? null : e.jsx("div", {
      className: ct.layout,
      children: e.jsx("div", {
        className: ct.container,
        children: t.map(i => {
          if (i.currency_id === 1) return null;
          const o = s === i.currency_id;
          return e.jsxs("div", {
            className: U(ct.item, o ? ct.active : ""),
            onPointerUp: () => {
              n(Bn(i.currency_id))
            },
            children: [e.jsx("div", {
              className: ct.image_container,
              children: e.jsx("img", {
                alt: "img",
                className: ct.image,
                src: i.image
              })
            }), e.jsx("div", {
              className: ct.item_text_container,
              children: e.jsx("span", {
                className: ct.item_text,
                children: i.name
              })
            })]
          }, i.currency_id)
        })
      })
    })
  },
  kd = "/assets/icon_coin-COCalNMQ.gif",
  Rd = "/assets/icon_stars-BmDiRMAW.gif",
  Ud = {
    items: []
  },
  ko = ie({
    name: "toast",
    initialState: Ud,
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
    addToast: k,
    removeToast: Ti
  } = ko.actions,
  Od = ko.reducer,
  Md = () => {
    const n = _(),
      t = l(ot),
      [s, a] = u.useState(1);
    return e.jsx("img", {
      alt: "img",
      className: le.stars_img,
      src: t === Ae ? kd : Rd,
      onPointerUp: () => {
        (t !== Ae || It.isDev) && (s >= 7 ? (a(1), n(k({
          id: performance.now(),
          text: "Check every 11th word",
          icon: ""
        }))) : a(s + 1))
      }
    })
  },
  Fd = ["#FFD700", "#ffc60a", "#FFDF00"],
  Qd = () => {
    _();
    const n = l(i => i.shop.order),
      t = l(i => i.shop.products),
      s = l(i => i.shop.available),
      a = l(ot);
    return u.useEffect(() => {}, []), e.jsxs(W, {
      children: [e.jsxs("div", {
        className: le.stars_img_container,
        children: [e.jsx(Md, {}), e.jsx(pd, {
          color: () => Fd[V(0, 2)]
        })]
      }), e.jsx(ql, {}), e.jsxs("div", {
        className: le.description_container,
        children: [a !== Ae && e.jsxs("span", {
          className: le.description,
          children: ["Exclusive offers for brave Pixels. ", e.jsx("br", {}), "We've got something fun", " "]
        }), a === Ae && e.jsxs("span", {
          className: le.description,
          children: ["Weve got something fun", e.jsx("br", {}), "Buy with tokens, saving ≈30%"]
        })]
      }), e.jsxs("div", {
        className: le.info_layout,
        children: [e.jsx(Bd, {}), e.jsx("div", {
          className: le.info_container,
          children: n.map(i => {
            if (t.hasOwnProperty(i)) {
              const o = t[i];
              let r = !((i === 4 || i === 5) && s[i] > 0);
              {
                let c = i >= 9 && i <= 11 ? "limited" : "not_sale";
                return e.jsx(Nl, {
                  item: o,
                  active: r,
                  type: c
                }, i)
              }
            }
            return null
          })
        }), e.jsx(Ad, {})]
      })]
    })
  },
  zd = "_text_layout_1xggq_1",
  qd = "_text_1xggq_1",
  Hd = "_button_layout_1xggq_14",
  Ld = "_button_layout_placeholder_1xggq_26",
  Xd = "_button_1xggq_14",
  gn = {
    text_layout: zd,
    text: qd,
    button_layout: Hd,
    button_layout_placeholder: Ld,
    button: Xd
  },
  Hn = "data:image/svg+xml,%3csvg%20height='18'%20viewBox='0%200%2017%2018'%20width='17'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='m.32%208.22c4.81-2.07%208.02-3.43%209.62-4.08%203.48-1.43%204.87-1.96%205.61-2.13.23-.06%201.45.29%201.45%201.18%200%202.58-1.32%208.8-1.87%2011.67-.23%201.22-1.88%201.6-3.74.45-1.47-.91-2.27-1.52-3.68-2.44-1.63-1.05-.58-1.63.35-2.58.25-.25%204.47-4.03%204.55-4.37.01-.04.02-.2-.08-.29-.09-.08-.24-.05-.34-.03-.14.03-2.46%201.54-6.96%204.53-.66.44-1.25.66-1.79.65-.59-.02-1.15-.05-2.56-.6-.94-.37-1.13-1.02-.56-1.96z'%20fill='%23fff'%20fill-rule='evenodd'/%3e%3c/svg%3e",
  Vd = () => e.jsxs(W, {
    children: [e.jsx("div", {
      className: gn.text_layout,
      children: e.jsx("span", {
        className: gn.text,
        children: e.jsx("h1", {
          children: "Probably nothing"
        })
      })
    }), e.jsx("div", {
      className: gn.button_layout_placeholder
    }), e.jsx("div", {
      className: gn.button_layout,
      children: e.jsxs("button", {
        className: gn.button,
        onPointerUp: () => {
          fe("https://t.me/notpixel_channel")
        },
        children: [e.jsx("img", {
          alt: "tg_logo",
          src: Hn
        }), "Telegram Channel"]
      })
    })]
  }),
  Gd = "_content_9ogc8_1",
  Wd = {
    content: Gd
  },
  Yd = () => {
    const n = $();
    return e.jsx(W, {
      children: e.jsxs("div", {
        className: Wd.content,
        children: [e.jsx("h1", {
          children: "Terms of Service"
        }), e.jsx("h2", {
          children: "Legal disclaimer"
        }), e.jsxs("p", {
          children: ["Pease read the entirety of this “legal disclaimer” section carefully. Nothing herein constitutes legal, financial, business or tax advice and you should consult your own legal, financial, tax or other professional advisor(s) before engaging in any activity in connection herewith. Neither Not Pixel (the company), nor any of the project creations, developments or features in connection with accessing the app or website shall be liable for any kind of direct or indirect damage or loss whatsoever which you may suffer in connection with accessing the app (", e.jsx("a", {
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
          }), "You agree that you are clicking to mine $PX and by mining $PX you are doing so for fun, for knowledge and to expand your horizon in the various ecosystems that may offer you tasks for boost. The main purpose is to enable you to join communities, get acquainted with projects and make your own decision by reading and participating. There isn’t and never will be a monetary purpose behind Not Pixel."]
        }), e.jsxs("p", {
          children: [e.jsx("strong", {
            children: "Health:"
          }), " For your own mental, physical and inner stability, it is recommended not to spend excessive screen time, pay attention to what surrounds you, do not cross the street while looking at your device, and do not ignore calls for help for the sake of a game. When exhausted, take a pause, stand up, take a deep breath, have a conversation with a real human. Not Pixel is not responsible for your health and will encourage you to treat others respectfully."]
        }), e.jsxs("p", {
          children: [e.jsx("strong", {
            children: "Mining and Value:"
          }), " $PX is NOT a typical coin, in the sense that it has not been pre-minted, nor has it been planned to be distributed in trenches to certain fraudulent beneficiaries. $PX is unlike any coin, it has no father, no mother, no rich scam backer to rug pool communities. $PX is for the community, minted by you as you click, if any value arises from Not Pixel it is you the Minter and user who has created such value, and it is by your decision as a community of users that such value may change, vanish, accumulate or never exist."]
        }), e.jsxs("p", {
          children: [e.jsx("strong", {
            children: "End of the Mining Process:"
          }), " At the end of the Mining process all $PX Miners if actively using the Not Pixel App and its features are redirected and given instructions on how to successfully receive their $PX at a given time and through a given process. You agree that $PX has never been a promise for leverage or value, nor is it announced or agreed to be a store of value."]
        }), e.jsxs("p", {
          children: [e.jsx("strong", {
            children: "Distribution and Listing:"
          }), " Not Pixel has no agreements with centralized and decentralized exchanges about listing $PX. If it happens, it will be spontaneous. All news is published in the official channel t.me/notpixel_channel. Not Pixel doesn't have any investors. No token presale, no public and seed rounds. 80% of $PX is owned by miners and the active community (the active community owns the largest share). 8% of $PX is allocated to the team. 12% of $PX is dedicated to marketing and providing liquidity."]
        }), e.jsxs("p", {
          children: [e.jsx("strong", {
            children: "Project purpose:"
          }), " You agree that you are acquiring $PX to participate in Not Pixel and to obtain services on the ecosystem thereon. The Company, the Distributor and their respective affiliates would develop and contribute to the underlying source code for Not Pixel. The Company is acting solely as an arms’ length third party in relation to the $PX distribution and minting, and not in the capacity as a financial advisor or fiduciary of any person with regard to the distribution of $PX."]
        }), e.jsxs("p", {
          children: [e.jsx("strong", {
            children: "Token Documentation:"
          }), " Nothing in the Whitepaper, the App, or the Website constitutes any offer by the Ecosystem Operator or the Not Pixel team to sell any $PX (as defined herein) nor shall it or any part of it nor the fact of its presentation form the basis of, or be relied upon in connection with, any contract or investment decision. Nothing contained in the Whitepaper, the App, or the Website is or may be relied upon as a promise, representation or undertaking as to the future performance of Not Pixel. The agreement between the Ecosystem Operator and you, in relation to any distribution or transfer of $PX, is to be governed only by the separate terms and conditions of such agreement."]
        }), e.jsx("p", {
          children: "The information set out in the Whitepaper, the App and the Website is for community discussion only and is not legally binding. No person is bound to enter into any contract or binding legal commitment in relation to the minting or acquisition of $PX and no digital asset or other form of payment is to be accepted on the basis of the Whitepaper or the Website."
        }), e.jsxs("p", {
          children: [e.jsx("strong", {
            children: "Buying or Selling on Not Pixel App:"
          }), " The App is a product which is made available to you, its functions develop over time and your ability to use it as a decentralised App is the norm. Anything that may be offered on an exchange basis within the App is made available to you by third party providers and has no link to $PX as a token. The App is developed and maintained periodically, the features that may lead you to the possibility of buying, selling or participating in any type of payment agreement are strictly made available to you through licensed third party entities and only after thorough due diligence, KYB (Know your Business) and AML (Anti Money Laundering) procedures."]
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
          }), " This Privacy Policy outlines how Not Pixel App and website processes the information We collect about you through our App and when you otherwise interact with us. This Privacy Policy sets out the basis on which any personal data you as a User of the Ape Terminal App and Services (“", e.jsx("strong", {
            children: "User"
          }), "” or “", e.jsx("strong", {
            children: "You"
          }), "”) provide to us, will be used, processed or disclosed by us. By accessing or using the App, its features or other Services (as defined in the Terms of Service for the App, accessible on our App), You accept this Privacy Policy and agree to comply with its terms. Please read the following Privacy Policy carefully to understand our views and practices regarding your personal data and how We will treat it. If You do not consent to the same, please do not access or use the App or the Services."]
        }), e.jsx("p", {
          children: "We reserve the right to amend or modify this Privacy Policy at any time and in response to changes in applicable law or our business practices. Please check frequently to see any updates or changes to our Privacy Policy."
        }), e.jsx("p", {
          children: "What Data does Not Pixel App receive:"
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
          }), " The Ecosystem Provider will not ask you for any personal information for the purpose of the App, NOT PIXEL shall never ask you for your identification nor store any personal information, when clicking on a product delivered to you through the App, the product is the property of a third party, and therefore any third party providing their product on the App, such third party’s data collection and compliance is not in anyway connected to the App and therefore such third party will have their own compliance terms and data protection terms."]
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
  Jd = "_content_7fuxa_1",
  Kd = {
    content: Jd
  },
  Zd = () => e.jsx(W, {
    children: e.jsxs("div", {
      className: Kd.content,
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
  $d = "_pixels_amount_z338g_1",
  eu = "_general_info_container_z338g_6",
  tu = "_coin_amount_text_z338g_12",
  nu = "_description_container_z338g_16",
  su = "_timer_z338g_25",
  au = "_timer_inner_z338g_34",
  iu = "_buttons_container_z338g_41",
  ou = "_criteria_text_z338g_49",
  ru = "_requirements_z338g_54",
  cu = "_item_z338g_63",
  lu = "_pixanos_container_z338g_72",
  qe = {
    pixels_amount: $d,
    general_info_container: eu,
    coin_amount_text: tu,
    description_container: nu,
    timer: su,
    timer_inner: au,
    buttons_container: iu,
    criteria_text: ou,
    requirements: ru,
    item: cu,
    pixanos_container: lu
  },
  du = "_logo_container_1i5of_1",
  uu = {
    logo_container: du
  },
  pu = "_layout_1cvcu_1",
  mu = "_container_1cvcu_10",
  hu = "_bubble_1cvcu_16",
  Au = "_move_1cvcu_1",
  ba = {
    layout: pu,
    container: mu,
    bubble: hu,
    move: Au
  },
  gu = u.memo(({
    color: n
  }) => {
    const t = Array.from(Array(200));
    return e.jsx("div", {
      className: ba.layout,
      children: e.jsx("div", {
        className: ba.container,
        children: t.map((s, a) => {
          const i = V(1, 8);
          return e.jsx("div", {
            className: ba.bubble,
            style: {
              width: i,
              height: i,
              animationDelay: `-${a*300}ms`,
              transform: `translate3d(${V(-200,500)}px, ${V(-200,200)}px, ${V(0,33)}px)`,
              background: n()
            }
          }, a)
        })
      })
    })
  }, () => !1),
  _u = "_container_1aw3i_1",
  fu = "_logo_1aw3i_9",
  xu = "_animate_1aw3i_1",
  vu = "_center_1aw3i_18",
  yu = "_glow_1aw3i_28",
  Kn = {
    container: _u,
    logo: fu,
    animate: xu,
    center: vu,
    glow: yu
  },
  wu = () => e.jsxs("div", {
    className: Kn.container,
    children: [e.jsx("div", {
      className: Kn.glow
    }), e.jsx("div", {
      className: Kn.logo
    }), e.jsx("div", {
      className: Kn.center
    })]
  }),
  bu = () => e.jsxs("div", {
    className: uu.logo_container,
    children: [e.jsx(gu, {
      color: () => `hsl(${V(0,360)} , 1000%, 50%)`
    }), e.jsx(wu, {})]
  }),
  ju = () => {
    const n = l(t => t.user.pixelCoins);
    return new Intl.NumberFormat("fr", {
      maximumFractionDigits: 0
    }).format(Math.max(n, 0)).replace(",", ".")
  },
  Cu = "_more_details_6gp7h_1",
  Pu = {
    more_details: Cu
  },
  pn = ({
    children: n,
    ...t
  }) => e.jsx("span", {
    className: Pu.more_details,
    ...t,
    children: e.jsx("span", {
      children: n
    })
  }),
  Nu = () => {
    const n = _(),
      [t, s] = u.useState(!1);
    return u.useEffect(() => {
      function a(i) {
        i.ctrlKey && i.altKey && i.keyCode === 67 && (async () => {
          try {
            await Mn(window.Telegram.WebApp.initData), await n(k({
              id: performance.now(),
              text: "Copied!"
            }))
          } catch {
            await n(k({
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
  Su = "_container_duem2_1",
  Iu = "_divider_duem2_27",
  Tu = "_row_duem2_32",
  Du = "_row_title_duem2_44",
  Eu = "_row_title_main_duem2_48",
  Bu = "_row_hint_duem2_53",
  ku = "_row_value_duem2_59",
  Ru = "_row_value_main_duem2_63",
  Uu = "_mining_percent_duem2_68",
  Ou = "_active_row_duem2_78",
  Mu = "_button_duem2_89",
  Di = {
    container: Su,
    divider: Iu,
    row: Tu,
    row_title: Du,
    row_title_main: Eu,
    row_hint: Bu,
    row_value: ku,
    row_value_main: Ru,
    mining_percent: Uu,
    active_row: Ou,
    button: Mu
  },
  Fu = "_blocker_wufj5_1",
  Qu = "_popup_wufj5_11",
  Ei = {
    blocker: Fu,
    popup: Qu
  },
  xt = ({
    show: n,
    setShow: t,
    children: s
  }) => {
    const [a, i] = u.useState(!1), [o, r] = Ls(() => ({
      from: {
        transform: "translateY(100%)"
      },
      config: {
        duration: 300,
        easing: Xs.easeOutCubic
      }
    })), [c, d] = Ls(() => ({
      from: {
        opacity: 0
      },
      config: {
        duration: 300,
        easing: Xs.easeOutCubic
      }
    }));
    return u.useEffect(() => {
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
    }, [n]), a ? Ve.createPortal(e.jsxs(re.Fragment, {
      children: [e.jsx(Vs.div, {
        className: Ei.blocker,
        style: {
          ...c
        },
        onPointerUp: p => {
          p.stopPropagation(), t(!1)
        },
        onTouchMove: p => {
          p.stopPropagation()
        },
        onPointerMove: p => {
          p.stopPropagation()
        }
      }), e.jsx(Vs.div, {
        className: Ei.popup,
        style: {
          ...o
        },
        onPointerUp: p => {
          p.stopPropagation()
        },
        onTouchMove: p => {
          p.stopPropagation()
        },
        onPointerMove: p => {
          p.stopPropagation()
        },
        children: s
      })]
    }), document.body) : null
  },
  zu = ({
    show: n,
    setShow: t
  }) => e.jsx(xt, {
    show: n,
    setShow: t,
    children: e.jsxs("div", {
      className: Di.container,
      children: [e.jsxs("p", {
        children: ["We shaved off ", e.jsx("span", {
          children: "3 zeros"
        }), " from all user balances and the total supply. Now token pricing will be way easier to deal with."]
      }), e.jsx("p", {
        children: " Examples (before → after): "
      }), e.jsx("p", {
        children: e.jsx("span", {
          children: "10,000,000 → 10,000 $PX"
        })
      }), e.jsx("p", {
        children: e.jsx("span", {
          children: " 100,000 → 100 $PX"
        })
      }), e.jsxs("p", {
        children: ["With the changes, you need to have more than ", e.jsx("span", {
          children: " 100 $PX"
        }), " in your balance to get airdrop."]
      }), e.jsx("button", {
        className: Di.button,
        onPointerUp: () => t(!1),
        children: "Close"
      })]
    })
  }),
  qu = "_container_1g9kx_1",
  Hu = "_title_1g9kx_10",
  Lu = "_wallet_address_1g9kx_15",
  Xu = "_image_1g9kx_19",
  Vu = "_dot_1g9kx_24",
  Gu = "_text_button_1g9kx_30",
  qt = {
    container: qu,
    title: Hu,
    wallet_address: Lu,
    image: Xu,
    dot: Vu,
    text_button: Gu
  },
  Tn = "data:image/svg+xml,%3csvg%20height='18'%20viewBox='0%200%2017%2018'%20width='17'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20fill='none'%20fill-rule='evenodd'%20stroke='%23fff'%20stroke-width='1.7'%3e%3cpath%20d='m1.84%203h13.3c.28%200%20.5.22.5.5%200%20.09-.02.17-.06.25l-6.33%2011.18c-.27.48-.88.65-1.36.38-.16-.09-.3-.23-.38-.39l-6.11-11.18c-.13-.24-.04-.55.2-.68.08-.04.16-.06.24-.06z'/%3e%3cpath%20d='m8.5%2015v-12'/%3e%3c/g%3e%3c/svg%3e",
  ci = () => {
    const n = _(),
      t = l(g => g.user.verificatedWallet),
      s = l(g => g.mining.infoStatus),
      a = Ao(t),
      i = ho(a),
      o = Kr(),
      r = Zr(),
      c = cn(),
      [d] = ln(),
      [p, A] = u.useState(!1),
      h = async g => {
        if (g.stopPropagation(), g.preventDefault(), !o) return;
        r && await d.disconnect(), d.setConnectRequestParameters({
          state: "loading"
        }), A(!1);
        const w = await O.generateTonProofPayload();
        if (w.status === 200 && w.data && w.data.payload) {
          const x = w.data;
          d.setConnectRequestParameters({
            state: "ready",
            value: {
              tonProof: x.payload
            }
          }), await d.openModal(), A(!0)
        } else n(k({
          id: performance.now(),
          text: "Something went wrong, try again"
        }))
      };
    return u.useEffect(() => {
      var g;
      !o || s !== m.fulfilled || r && p && (g = r == null ? void 0 : r.connectItems) != null && g.tonProof && !("error" in r.connectItems.tonProof) && O.checkTonProof(r.connectItems.tonProof.proof, r.account).then(w => {
        if (w.status === 200 && w.data.success) n(Pd(ni(c))), n(k({
          id: performance.now(),
          text: "Success!",
          icon: ""
        }));
        else {
          let x = "Something went wrong. Try later, or try another wallet.";
          w.data && w.data.error && (x = w.data.error), n(k({
            id: performance.now(),
            text: x
          }))
        }
      })
    }, [r, o, s, p]), {
      handleConnect: h,
      verificatedWalletUQ: a,
      formattedVerificatedWalletUQ: i
    }
  },
  Ro = () => {
    const {
      handleConnect: n,
      formattedVerificatedWalletUQ: t
    } = ci(), s = l(a => a.mining.tasks.checkCaptcha);
    return e.jsxs("div", {
      className: qt.container,
      children: [e.jsx("div", {
        className: qt.title,
        children: "Airdrop wallet"
      }), t !== "" && e.jsxs(e.Fragment, {
        children: [e.jsx("img", {
          alt: "image",
          src: Tn,
          className: qt.image
        }), e.jsx("div", {
          className: qt.wallet_address,
          children: t
        })]
      }), !s && e.jsxs(e.Fragment, {
        children: [e.jsx("span", {
          className: qt.dot,
          children: "•"
        }), e.jsx("div", {
          className: qt.text_button,
          onPointerUp: n,
          children: t === "" ? "Add" : "Change"
        })]
      })]
    })
  },
  Wu = "_button_s0mho_1",
  Yu = "_decor_s0mho_13",
  Ju = "_dark_s0mho_22",
  Ku = "_blue_s0mho_36",
  Zu = "_disabled_s0mho_52",
  $u = "_disabled2_s0mho_57",
  ep = "_loading_s0mho_63",
  Bi = {
    button: Wu,
    decor: Yu,
    dark: Ju,
    blue: Ku,
    disabled: Zu,
    disabled2: $u,
    loading: ep
  },
  Dn = {
    dark: "dark",
    blue: "blue",
    decor: "decor",
    loading: "loading",
    disabled: "disabled"
  },
  _e = ({
    children: n,
    variant: t = Dn.dark,
    onPointerUp: s = () => {},
    style: a = {},
    className: i = void 0,
    disabled: o = !1
  }) => e.jsx("button", {
    disabled: o,
    onPointerUp: s,
    className: U(Bi.button, Bi[t], i),
    style: a,
    children: n
  });
Gs.getSelectors(n => n.user.pixelsForSale);
Ws.getSelectors(n => n.user.pixelsSold);
const li = Ys.getSelectors(n => n.daily.list);
oi.getSelectors(n => n.reward.list);
const tp = ri.getSelectors(n => n.tournament.finalResults),
  np = Js.getSelectors(n => n.ratings.pixanos),
  Uo = In.getSelectors(n => n.tournament.approvedTemplatesList),
  sp = {
    list: Ys.getInitialState(),
    selected: 1,
    showHowDailyWorksPopup: !1,
    getDailyListFetchStatus: m.idle,
    getFirstDailyFetchStatus: m.idle
  },
  ps = D("daily/getList", async () => (await O.getDailyList()).data),
  ms = D("daily/getFirstDaily", async () => (await O.getFirstDaily()).data),
  Oo = ie({
    name: "daily",
    initialState: sp,
    reducers: {
      setSelectedDaily: (n, t) => {
        n.selected = t.payload
      },
      setShowHowDailyWorksPopup: (n, t) => {
        n.showHowDailyWorksPopup = t.payload
      },
      updateOneDaily: (n, t) => {
        Ys.updateOne(n.list, t.payload)
      }
    },
    extraReducers: n => {
      n.addCase(ps.pending, t => {
        t.getDailyListFetchStatus = m.pending
      }).addCase(ps.fulfilled, (t, s) => {
        Ys.setAll(t.list, s.payload.dailyAvailable), t.getDailyListFetchStatus = m.fulfilled
      }).addCase(ps.rejected, t => {
        t.getDailyListFetchStatus = m.rejected
      }).addCase(ms.pending, t => {
        t.getFirstDailyFetchStatus = m.pending
      }).addCase(ms.fulfilled, (t, s) => {
        t.getFirstDailyFetchStatus = m.fulfilled
      }).addCase(ms.rejected, t => {
        t.getFirstDailyFetchStatus = m.rejected
      })
    }
  }),
  ap = n => {
    const t = n.daily.selected;
    return li.selectById(n, t)
  },
  {
    setSelectedDaily: ip,
    updateOneDaily: i3,
    setShowHowDailyWorksPopup: Mo
  } = Oo.actions,
  op = Oo.reducer,
  di = {
    getList: ps,
    getFirstDaily: ms
  },
  rp = "_layout_bs3u8_1",
  cp = "_container_bs3u8_9",
  lp = "_header_bs3u8_18",
  dp = "_bg_image_bs3u8_25",
  up = "_title_bs3u8_34",
  pp = "_description_bs3u8_43",
  mp = "_timer_bs3u8_52",
  hp = "_timer_inner_bs3u8_61",
  Ap = "_timer_text_bs3u8_68",
  gp = "_line_bs3u8_72",
  _p = "_requirements_title_bs3u8_78",
  fp = "_requirements_bs3u8_78",
  xp = "_item_bs3u8_93",
  vp = "_item_image_bs3u8_106",
  yp = "_main_info_bs3u8_112",
  wp = "_other_criteria_bs3u8_119",
  bp = "_gray_bs3u8_124",
  jp = "_soon_bs3u8_128",
  Cp = "_icon_bs3u8_133",
  Pp = "_completed_icon_bs3u8_143",
  Np = "_not_completed_icon_bs3u8_147",
  te = {
    layout: rp,
    container: cp,
    header: lp,
    bg_image: dp,
    title: up,
    description: pp,
    timer: mp,
    timer_inner: hp,
    timer_text: Ap,
    line: gp,
    requirements_title: _p,
    requirements: fp,
    item: xp,
    item_image: vp,
    main_info: yp,
    other_criteria: wp,
    gray: bp,
    soon: jp,
    icon: Cp,
    completed_icon: Pp,
    not_completed_icon: Np
  },
  Ks = ({
    success: n
  }) => n ? e.jsx("div", {
    className: U(te.completed_icon, te.icon),
    children: e.jsx(B, {
      size: 14,
      children: ""
    })
  }) : e.jsx("div", {
    className: U(te.not_completed_icon, te.icon),
    children: e.jsx(B, {
      size: 14,
      children: ""
    })
  }),
  Sp = "_container_1kwij_1",
  Ip = "_title_1kwij_10",
  Tp = "_instruction_1kwij_15",
  Dp = "_required_wallet_1kwij_20",
  Ep = "_divider_1kwij_24",
  Bp = "_input_1kwij_30",
  kp = "_button_1kwij_58",
  Rp = "_active_row_1kwij_87",
  Up = "_row_title_1kwij_87",
  Ne = {
    container: Sp,
    title: Ip,
    instruction: Tp,
    required_wallet: Dp,
    divider: Ep,
    input: Bp,
    button: kp,
    active_row: Rp,
    row_title: Up
  };
class la {
  static async claim() {
    return b.get("/mining/claim")
  }
  static async info() {
    return b.get("/mining/status")
  }
  static async checkBoost({
    key: t
  }) {
    return b.get(`/mining/boost/check/${t}`)
  }
  static async checkTask({
    key: t
  }) {
    let s = t,
      a = "";
    if (t === N["channel:notpixel_channel"] || t === N["channel:notcoin_pre_release"] || t === N["channel:purego"] || t === N["channel:probablyinsomnia"] || t === N["channel:tonbeholder"] || t === N["channel:notaspidey"] || t === N["channel:nuvov"] || t === N["channel:seinarukiro"] || t === N["channel:sscaleton"] || t === N["channel:waketonup"] || t === N["channel:GameDevDead"] || t === N["channel:zaegd"] || t === N["channel:fakedonalds"] || t === N["channel:pushinton"] || t === N["channel:notcoin"]) {
      const i = t.split(":");
      s = i[0], a = `?name=${i[1]}`
    }
    if (t === N["x:notpixel"] || t === N["x:notcoin"]) {
      const i = t.split(":");
      s = i[0], a = `?name=${i[1]}`
    }
    return b.get(`/mining/task/check/${s}${a}`)
  }
}
const hs = D("mining/info", async () => (await la.info()).data),
  As = D("mining/claim", async () => (await la.claim()).data),
  gs = D("mining/checkTask", async ({
    key: n
  }) => (await la.checkTask({
    key: n
  })).data),
  _s = D("mining/checkBoost", async ({
    key: n
  }) => (await la.checkBoost({
    key: n
  })).data),
  Op = {
    info: null,
    tasks: {},
    walletVerification: null,
    boosts: {
      [tt.paintReward]: 1,
      [tt.reChargeSpeed]: 1,
      [tt.energyLimit]: 1
    },
    checkError: {},
    toggleAction: {
      [N.invite3frens]: !0,
      [N.makePixelAvatar]: !0,
      [N.boostChannelNotPixel]: !0,
      [N.boostChannelNotCoin]: !0,
      [N.walletVerification]: !0,
      [N["channel:notpixel_channel"]]: !0,
      [N["channel:notcoin_pre_release"]]: !0,
      [N["channel:purego"]]: !0,
      [N["channel:seinarukiro"]]: !0,
      [N["channel:sscaleton"]]: !0,
      [N["channel:waketonup"]]: !0,
      [N["channel:notcoin"]]: !0,
      [N["channel:GameDevDead"]]: !0,
      [N["channel:zaegd"]]: !0,
      [N["channel:fakedonalds"]]: !0,
      [N["channel:pushinton"]]: !0,
      [N["channel:probablyinsomnia"]]: !0,
      [N["channel:tonbeholder"]]: !0,
      [N["channel:notaspidey"]]: !0,
      [N["channel:nuvov"]]: !0,
      [N["x:notpixel"]]: !0,
      [N["x:notcoin"]]: !0,
      [N.jettonTask]: !0,
      [N.solitaireGame]: !0,
      [N.tonDurakGame]: !0,
      [N.earnCoin]: !0,
      [N.earnCoin2]: !0,
      [N.frogApp]: !0,
      [N.tonPoker]: !0,
      [N.flappyBird]: !0,
      [N.stickerStore]: !0,
      [N.boink2]: !0,
      [N.duckChain]: !0,
      [N.starHash]: !0,
      [N.trmnl]: !0,
      [N.hauntedSpace]: !0,
      [N.capsGame]: !0,
      [N.taskTypeCampaign5_74739]: !0,
      [N.taskTypeCampaign6_74738]: !0
    },
    infoStatus: m.idle,
    claimStatus: m.idle,
    checkStatuses: {},
    activeTab: "tasks",
    charges: 0,
    maxCharges: 0,
    addedCharges: 0,
    reChargeSpeed: 0,
    reChargeTs: Date.now()
  },
  Fo = ie({
    name: "mining",
    initialState: Op,
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
      n.addCase(hs.pending, t => {
        t.infoStatus = m.pending
      }).addCase(hs.fulfilled, (t, s) => {
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
        }, t.charges = a.charges, t.maxCharges = a.maxCharges, t.reChargeSpeed = a.reChargeSpeed, t.reChargeTs = Date.now() - (a.reChargeSpeed - a.reChargeTimer % a.reChargeSpeed), t.addedCharges = 0, t.infoStatus = m.fulfilled
      }).addCase(hs.rejected, t => {
        t.infoStatus = m.rejected
      }).addCase(As.pending, t => {
        t.claimStatus = m.pending
      }).addCase(As.fulfilled, t => {
        t.claimStatus = m.fulfilled, t.info = {
          ...t.info,
          coins: 0,
          initTs: Date.now(),
          coinsFromUpdate: 0,
          fromStart: 0,
          fromUpdate: 0
        }
      }).addCase(As.rejected, t => {
        t.claimStatus = m.rejected
      }).addCase(gs.pending, (t, s) => {
        const a = s.meta.arg.key;
        t.checkStatuses[a] = m.pending, t.checkError[a] = !1
      }).addCase(gs.fulfilled, (t, s) => {
        const a = s.meta.arg.key;
        t.checkStatuses[a] = m.fulfilled, t.tasks[a] = s.payload[a], t.checkError[a] = !s.payload[a]
      }).addCase(gs.rejected, (t, s) => {
        const a = s.meta.arg.key;
        t.checkStatuses[a] = m.rejected, t.checkError[a] = !0
      }).addCase(_s.pending, (t, s) => {
        const a = s.meta.arg.key;
        t.checkStatuses[a] = m.pending, t.checkError[a] = !1
      }).addCase(_s.fulfilled, (t, s) => {
        const a = s.meta.arg.key;
        t.checkStatuses[a] = m.fulfilled, s.payload[a] && (t.boosts[a] += 1), t.checkError[a] = !s.payload[a]
      }).addCase(_s.rejected, (t, s) => {
        const a = s.meta.arg.key;
        t.checkStatuses[a] = m.rejected, t.checkError[a] = !0
      })
    }
  }),
  ja = n => {
    const t = tt.paintReward,
      s = n.main.settings,
      a = s.UpgradeRepaint,
      i = n.mining.boosts[t];
    return i === 1 ? s.RepaintReward : a.levels[i].Boost
  },
  {
    setCheckError: o3,
    setActiveTab: Mp,
    setToggleAction: Fp,
    setAllToggleActions: Qp,
    setMaxCharges: zp,
    setRechargeSpeed: qp,
    setCharges: Hp,
    addCharges: Qo,
    addAddedCharges: Lp,
    subCharges: Xp,
    restoreCharges: r3,
    setTask: Vp
  } = Fo.actions,
  Gp = Fo.reducer,
  Bt = {
    info: hs,
    claim: As,
    checkTask: gs,
    checkBoost: _s
  },
  Wp = () => {
    const n = _(),
      [t] = ln(),
      s = cn(),
      {
        handleConnect: a,
        verificatedWalletUQ: i,
        formattedVerificatedWalletUQ: o
      } = ci(),
      r = ni(s),
      c = l(p => p.user.verificatedWallet);
    l(p => p.user.hasCaptchaCode);
    const d = async () => {
      try {
        if (c !== r) {
          n(k({
            id: performance.now(),
            text: `Use ${o} wallet`
          })), await t.disconnect();
          return
        }
        const p = we.beginCell().storeUint(0, 32).endCell(),
          A = {
            validUntil: Math.floor(Date.now() / 1e3) + 600,
            messages: [{
              address: "UQDTwwYcxZAP8IzsHTe6_wkfzk5cJrIR1H6O5klygJO7EYzX",
              amount: String(we.toNano("0.1")),
              payload: p.toBoc().toString("base64")
            }]
          };
        await t.sendTransaction(A), n(k({
          id: performance.now(),
          text: "Success! Wait code in your wallet",
          icon: ""
        }))
      } catch {
        n(k({
          id: performance.now(),
          text: "Something went wrong... Try again."
        }))
      }
    };
    return s === "" && i !== "" ? e.jsxs(e.Fragment, {
      children: [e.jsxs("div", {
        className: Ne.required_wallet,
        children: ["Use ", o, " wallet"]
      }), e.jsxs("button", {
        className: Ne.button,
        onPointerUp: p => {
          p.preventDefault(), p.stopPropagation(), t.openModal()
        },
        children: [e.jsx("img", {
          alt: "image",
          src: Tn
        }), "Connect TON"]
      })]
    }) : s === "" && i === "" ? e.jsx(e.Fragment, {
      children: e.jsxs("button", {
        className: Ne.button,
        onPointerUp: a,
        children: [e.jsx("img", {
          alt: "image",
          src: Tn
        }), "Connect TON"]
      })
    }) : s !== "" && i !== "" && i === s ? e.jsx("button", {
      className: Ne.button,
      onPointerUp: d,
      children: "Request a code"
    }) : s !== "" && i !== "" && i !== s ? e.jsxs(e.Fragment, {
      children: [e.jsxs("div", {
        className: Ne.required_wallet,
        children: ["Use ", o, " wallet"]
      }), e.jsxs("button", {
        className: Ne.button,
        onPointerUp: () => {
          t.disconnect()
        },
        children: [e.jsx("img", {
          alt: "image",
          src: Tn
        }), "Disconnect TON"]
      })]
    }) : null
  },
  zo = ({
    show: n,
    setShow: t
  }) => {
    const s = _(),
      [a] = ln(),
      i = cn(),
      o = ni(i),
      r = l(h => h.user.verificatedWallet),
      c = Ao(r),
      d = ho(c),
      [p, A] = u.useState("");
    return e.jsx(xt, {
      show: n,
      setShow: () => t(!1),
      children: e.jsxs("div", {
        className: Ne.container,
        children: [e.jsxs("div", {
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: Ne.title,
              children: "TON Captcha"
            })
          }), e.jsxs("div", {
            className: Ne.instruction,
            children: ["Send", e.jsx("strong", {
              children: " 0.1 TON "
            }), " to receive a response transaction with an encrypted code. Use wallets that support encrypted messages in TON. We recommend", e.jsx("strong", {
              children: " Tonkeeper"
            }), "."]
          }), e.jsx(Wp, {}), e.jsx("div", {
            className: Ne.divider
          }), e.jsxs("div", {
            children: [e.jsxs("div", {
              className: Ne.instruction,
              children: ["Check the transaction history in your wallet. Do not duplicate your request! The code will arrive within 10 min. Enter the code received from ", e.jsx("strong", {
                children: "captcha.ton"
              })]
            }), e.jsx("div", {
              children: e.jsx("input", {
                className: Ne.input,
                placeholder: "Enter your code...",
                value: p,
                onChange: h => {
                  A(h.target.value)
                }
              })
            })]
          })]
        }), e.jsx("button", {
          className: Ne.button,
          onPointerUp: async () => {
            var h;
            if (!(!p || p === "")) {
              if (i === "") {
                s(k({
                  id: performance.now(),
                  text: `Connect ${d} wallet first`
                }));
                return
              }
              if (r !== o) {
                s(k({
                  id: performance.now(),
                  text: `Use ${d} wallet`
                })), await a.disconnect();
                return
              }
              try {
                const g = await s(Ie.checkCaptcha({
                  wallet: o,
                  captcha: p
                }));
                if (g.meta.requestStatus === m.rejected) throw new Error("error");
                if ((h = g.payload) != null && h.success) s(k({
                  id: performance.now(),
                  text: "Success!",
                  icon: ""
                })), s(Vp({
                  task: N.checkCaptcha,
                  value: !0
                })), t(!1);
                else throw new Error("error")
              } catch {
                s(k({
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
  Yp = () => {
    const n = _(),
      t = $(),
      s = l(qn),
      a = l(zn),
      [i, o] = u.useState(!1),
      [r, c] = u.useState(!1),
      d = l(Ye),
      A = l(y => y.user.pixelCoins) >= 100,
      h = l(y => y.user.verificatedWalletStatus),
      g = l(y => y.daily.getDailyListFetchStatus),
      w = l(y => y.mining.tasks.checkCaptcha);
    l(y => y.user.hasCaptchaCode);
    const x = l(y => y.user.hasCaptchaCodeStatus);
    u.useEffect(() => {
      h === m.idle && n(Ie.getVerificatedWallet())
    }, [h]), u.useEffect(() => {
      g === m.idle && n(di.getList())
    }, [g]), u.useEffect(() => {
      x === m.idle && n(Ie.checkHasCaptchaCode())
    }, [x]);
    const v = y => {
      w && (y = !1), c(y)
    };
    return e.jsxs(W, {
      children: [e.jsx(Nu, {}), e.jsx(zu, {
        show: i,
        setShow: o
      }), e.jsx(zo, {
        show: r,
        setShow: v
      }), e.jsx("div", {
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
        children: "Your balance"
      }), e.jsx(bu, {}), e.jsxs("div", {
        className: qe.general_info_container,
        children: [e.jsxs("h1", {
          className: qe.pixels_amount,
          children: [e.jsx(ju, {}), " PX"]
        }), e.jsxs("div", {
          className: qe.description_container,
          children: [e.jsx(pn, {
            onPointerUp: y => {
              y.stopPropagation(), o(!0)
            },
            children: "Balance conversion"
          }), e.jsx("div", {
            className: qe.timer,
            children: e.jsx("div", {
              className: qe.timer_inner,
              children: e.jsx(Ro, {})
            })
          })]
        }), e.jsxs("div", {
          className: qe.buttons_container,
          children: [e.jsxs(_e, {
            variant: "decor",
            onPointerUp: () => {
              t.push("/results")
            },
            children: ["Your personal story ", e.jsx(B, {
              size: 20,
              style: {
                fontWeight: 400,
                transform: "translateY(1px)"
              },
              children: ""
            })]
          }), A && e.jsxs(_e, {
            variant: "decor",
            onPointerUp: () => {
              t.push("/cashout")
            },
            children: ["Your final result ", e.jsx(B, {
              size: 20,
              style: {
                fontWeight: 400
              },
              children: ""
            })]
          }), d.firstClaimIteration && A && e.jsxs(_e, {
            variant: "disabled2",
            children: ["Withdraw $PX ", e.jsx(B, {
              size: 20,
              style: {
                color: "var(--font-secondary-color)",
                fontWeight: 400,
                transform: "translateY(1px)"
              },
              children: ""
            })]
          }), !d.firstClaimIteration && A && e.jsxs("div", {
            style: {
              color: "#b75b5a",
              backgroundColor: "#2f282c",
              padding: "10px",
              borderRadius: "10px"
            },
            children: ["Sadly, you did not complete TON captcha in time. You will be able to get your tokens on Feb. 22. ", e.jsx("br", {}), e.jsx("a", {
              href: "mailto:support@notpx.app",
              target: "_blank",
              style: {
                color: "#b75b5a",
                backgroundColor: "#2f282c"
              },
              children: "support@notpx.app"
            })]
          })]
        }), e.jsx("div", {
          className: qe.criteria_text,
          children: "PX Airdrop criteria"
        }), e.jsxs("div", {
          className: qe.requirements,
          children: [e.jsxs("div", {
            className: qe.item,
            children: [e.jsx("div", {
              children: "Your balance 100+ PX"
            }), e.jsx(Ks, {
              success: A
            })]
          }), e.jsxs("div", {
            className: qe.item,
            onPointerUp: v,
            children: [e.jsx("div", {
              children: e.jsx("span", {
                children: "TON Captcha"
              })
            }), e.jsx(Ks, {
              success: w
            })]
          })]
        })]
      }), e.jsx("div", {
        style: {
          height: 20 + s.top + a.top
        }
      })]
    })
  },
  Jp = "_panel_bpwn4_1",
  Kp = "_item_bpwn4_9",
  Zp = "_active_bpwn4_20",
  Ca = {
    panel: Jp,
    item: Kp,
    active: Zp
  },
  Zs = {
    squad: "Squads",
    user: "Painters"
  },
  $p = ({
    selectedSection: n,
    setSelectedSection: t
  }) => e.jsx("div", {
    className: Ca.panel,
    children: [Zs.squad, Zs.user].map(s => e.jsx("div", {
      className: `${Ca.item} ${n===s?Ca.active:""}`,
      onPointerUp: () => {
        t(s)
      },
      children: e.jsx("h1", {
        children: s
      })
    }, s))
  });
let Ht = null,
  Lt = null;
class ui {
  static async personal({
    league: t,
    limit: s,
    offset: a
  }) {
    Ht !== null && (Ht.abort(), Ht = null), Ht = new AbortController;
    const i = await b.get(`/ratings/personal?league=${t.toLowerCase()}&limit=${s}&offset=${a}`, {
      signal: Ht.signal
    });
    return Ht = null, i
  }
  static async squad({
    league: t,
    limit: s,
    offset: a
  }) {
    Lt !== null && (Lt.abort(), Lt = null), Lt = new AbortController;
    const i = await b.get(`/ratings/squads?league=${t.toLowerCase()}&limit=${s}&offset=${a}`, {
      signal: Lt.signal
    });
    return Lt = null, i
  }
  static async pixanos({
    limit: t,
    offset: s
  }) {
    return await b.get(`/ratings/pixanos?limit=${t}&offset=${s}`)
  }
}
const fs = D("ratings/personal", async ({
    league: n,
    offset: t,
    limit: s
  }) => (await ui.personal({
    league: n,
    offset: t,
    limit: s
  })).data),
  xs = D("ratings/squad", async ({
    league: n,
    offset: t,
    limit: s
  }) => (await ui.squad({
    league: n,
    offset: t,
    limit: s
  })).data),
  vs = D("ratings/pixanos", async ({
    offset: n,
    limit: t
  }) => (await ui.pixanos({
    offset: n,
    limit: t
  })).data),
  em = {
    list: [],
    myPlace: 0,
    mySquadPlace: 0,
    mySquad: null,
    league: "platinum",
    status: m.idle,
    selectedSection: "Squads",
    pixanos: Js.getInitialState(),
    pixanosOffset: 0,
    pixanosLimit: 10,
    pixanosTotal: 0,
    pixanosStatus: m.idle,
    offset: 0,
    limit: 20,
    total: 500
  },
  qo = ie({
    name: "ratings",
    initialState: em,
    reducers: {
      setActiveLeague: (n, t) => {
        n.league = t.payload
      },
      clearRatingList: n => {
        n.list = [], n.offset = 0
      },
      clearPixanosRatingList: n => {
        n.pixanos = Js.getInitialState(), n.pixanosOffset = 0, n.pixanosTotal = 0
      },
      setSelectedSection: (n, t) => {
        n.selectedSection = t.payload
      }
    },
    extraReducers: n => {
      n.addCase(fs.pending, (t, s) => {
        t.status = m.pending
      }).addCase(fs.fulfilled, (t, s) => {
        t.status = m.fulfilled, t.list = [...t.list, ...Object.values(s.payload.top)], t.myPlace = s.payload.myPlace, t.offset += t.limit
      }).addCase(fs.rejected, (t, s) => {
        t.status = m.rejected
      }).addCase(xs.pending, (t, s) => {
        t.status = m.pending
      }).addCase(xs.fulfilled, (t, s) => {
        t.status = m.fulfilled, t.list = [...t.list, ...Object.values(s.payload.top)], t.mySquadPlace = s.payload.MySquadPlace, t.mySquad = s.payload.mySquad, t.offset += t.limit
      }).addCase(xs.rejected, (t, s) => {
        t.status = m.rejected
      }).addCase(vs.pending, (t, s) => {
        t.pixanosStatus = m.pending
      }).addCase(vs.fulfilled, (t, s) => {
        t.pixanosStatus = m.fulfilled, s.payload.rating && Js.setMany(t.pixanos, s.payload.rating), t.pixanosTotal = s.payload.total, t.pixanosOffset += t.pixanosLimit
      }).addCase(vs.rejected, (t, s) => {
        t.pixanosStatus = m.rejected
      })
    }
  }),
  {
    setActiveLeague: Ho,
    clearRatingList: Lo,
    setSelectedSection: Xo,
    clearPixanosRatingList: tm
  } = qo.actions,
  Tt = {
    personal: fs,
    squad: xs,
    pixanos: vs
  },
  nm = qo.reducer,
  sm = "_squads_img_container_ftymn_1",
  am = "_squads_img_ftymn_1",
  im = "_title_container_ftymn_11",
  om = "_description_container_ftymn_18",
  rm = "_description_ftymn_18",
  cm = "_info_layout_ftymn_32",
  lm = "_info_container_ftymn_43",
  dm = "_base_item_ftymn_50",
  um = "_loading_item_ftymn_61",
  pm = "_rating_item_ftymn_70",
  mm = "_info_row_ftymn_83",
  hm = "_avatar_container_ftymn_88",
  Am = "_avatar_ftymn_88",
  gm = "_position_ftymn_100",
  _m = "_user_squad_position_ftymn_118",
  fm = "_rating_main_info_ftymn_136",
  xm = "_rating_name_ftymn_149",
  vm = "_rating_value_ftymn_156",
  ym = "_active_league_text_ftymn_164",
  wm = "_icon_leagueflag_ftymn_168",
  bm = "_join_squad_button_ftymn_175",
  jm = "_join_squad_text_ftymn_189",
  Cm = "_user_squad_container_ftymn_207",
  Pm = "_squad_avatar_container_ftymn_224",
  Nm = "_user_squad_info_ftymn_235",
  Sm = "_user_squad_name_ftymn_243",
  Im = "_user_squad_your_squad_text_ftymn_247",
  Tm = "_user_squad_users_count_ftymn_252",
  Q = {
    squads_img_container: sm,
    squads_img: am,
    title_container: im,
    description_container: om,
    description: rm,
    info_layout: cm,
    info_container: lm,
    base_item: dm,
    loading_item: um,
    rating_item: pm,
    info_row: mm,
    avatar_container: hm,
    avatar: Am,
    position: gm,
    user_squad_position: _m,
    rating_main_info: fm,
    rating_name: xm,
    rating_value: vm,
    active_league_text: ym,
    icon_leagueflag: wm,
    join_squad_button: bm,
    join_squad_text: jm,
    user_squad_container: Cm,
    squad_avatar_container: Pm,
    user_squad_info: Nm,
    user_squad_name: Sm,
    user_squad_your_squad_text: Im,
    user_squad_users_count: Tm
  },
  da = ({
    children: n
  }) => e.jsx("div", {
    className: Q.base_item,
    children: n
  }),
  Xe = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAIVBMVEUQGSb////09PTk5ebT1NbCw8asr7ODh41jZ29GTFYjKjX3vgf4AAABe0lEQVR42u3X227DMAgGYMzBBt7/gSc17dwlWpNemGrT/121UhRQDMgQAAAAAAAAAAAA/GU5uqpqH0mfkJ3bHfekckPaExnl8bn9wKM8/t6gQs5twyLfP53q2Dz5WQ1WfgA9H/1QXQZbQEu6S9sSoiIp25nva0KSavgtAaUnekvAS3ugHw6FkYBTjdhqIOlbbjUQVES3tt8PBi2eA+KzLSrnwAwovv9b/Akam2e6cbvpVCe0HWhQIZe2I06lXA7xi6W1iS2pnhs/wjt9SHjvHtiQPiKGKT9qgNVGUJ0cyu2AdWRZ8R/UtYNre0l9+UZ8gnsWzV8W7XcqXDKVBz8VXOy7Qnn1pjz49VeOzjODlfEt6BdhCzMIme8+z1Ji1S1M49pdqa+5ijfLi/cEXXMCEtefXLSOnZlr2v9MwOgCW5JAyNUp67ymD2124ZU+tFWDkK2/ZLxqFKa1N2hWbGNTzZ7mUhH/vL7OadRfSCc2x9ICAAAAAAAAAADwli/CSAqaW7oHjgAAAABJRU5ErkJggg==",
  pi = ({
    position: n,
    userPic: t
  }) => e.jsxs("div", {
    className: Q.avatar_container,
    children: [e.jsx("img", {
      alt: "avatar",
      className: Q.avatar,
      src: t === "" ? Xe : t
    }), e.jsx("div", {
      className: Q.position,
      children: n
    }), ";"]
  }),
  Vo = ({
    name: n
  }) => e.jsx("div", {
    className: Q.rating_main_info,
    children: e.jsx("span", {
      className: Q.rating_name,
      children: n
    })
  }),
  Go = ({
    value: n
  }) => n ? e.jsx("span", {
    className: Q.rating_value,
    children: sn(n)
  }) : null,
  Dm = "_main_canvas_1cgxj_1",
  Em = {
    main_canvas: Dm
  },
  $s = n => ({
    x: (n - 1) % T.width,
    y: Math.floor((n - 1) / T.height)
  }),
  gt = ({
    x: n,
    y: t
  }) => n + t * T.width + 1,
  kn = ({
    x: n,
    y: t,
    width: s,
    blockSize: a = 4
  }) => (n + t * s) * a,
  Pa = ({
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
  nt = n => {
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
  _t = (n, t, s) => ("#" + (1 << 24 | n << 16 | t << 8 | s).toString(16).slice(1)).toUpperCase(),
  an = n => !(n.x < 0 || n.y < 0 || n.x > T.width - 1 || n.y > T.height - 1),
  ys = D("canvas/repaint", async ({
    pixelId: n,
    newColor: t
  }) => (await O.startRepaint({
    pixelId: n,
    newColor: t
  })).data);
let Kt = null;
const za = D("canvas/getPixelInfo", async ({
    id: n
  }) => (Kt !== null && (Kt.abort(), Kt = null), Kt = new AbortController, (await O.getPixelInfo({
    id: n,
    signal: Kt.signal
  })).data)),
  ws = D("canvas/getPrices", async () => (await O.getPrices()).data),
  bs = D("canvas/getPriceMask", async ({
    price: n
  }) => {
    const t = await O.getPriceMask({
        price: n
      }),
      s = new Uint8Array(t.data);
    return C.mask.draw({
      arr: s
    }), {
      result: !0
    }
  }),
  Bm = () => po() ? localStorage.getItem("enableAnimations") ? localStorage.getItem("enableAnimations") === "true" : (localStorage.setItem("enableAnimations", "true"), !0) : !0,
  km = {
    coords: null,
    animations: Bm(),
    stats: null,
    pixelInfo: null,
    getPixelInfoFetchStatus: m.idle,
    repaintFetchStatus: m.idle,
    prices: [],
    selectedPrice: null,
    priceMaskFetching: !1
  },
  Wo = ie({
    name: "canvas",
    initialState: km,
    reducers: {
      setCoords: (n, t) => {
        an(t.payload) && (n.coords = t.payload)
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
        an(t.payload) && (n.stats = gt(t.payload) ^ 3201282)
      }
    },
    extraReducers: n => {
      n.addCase(za.pending, t => {
        t.getPixelInfoFetchStatus = m.pending
      }).addCase(za.fulfilled, (t, s) => {
        t.pixelInfo = s.payload, t.getPixelInfoFetchStatus = m.fulfilled, Kt = null
      }).addCase(ws.pending, t => {}).addCase(ws.fulfilled, (t, s) => {
        t.prices = s.payload.prices
      }).addCase(ws.rejected, t => {}).addCase(bs.pending, t => {
        t.priceMaskFetching = !0
      }).addCase(bs.fulfilled, t => {
        t.priceMaskFetching = !1
      }).addCase(bs.rejected, t => {
        t.priceMaskFetching = !1
      }).addCase(ys.pending, t => {
        t.repaintFetchStatus = m.pending
      }).addCase(ys.fulfilled, t => {
        t.repaintFetchStatus = m.fulfilled
      }).addCase(ys.rejected, t => {
        t.repaintFetchStatus = m.rejected
      })
    }
  }),
  {
    setCoords: on,
    enableAnimations: Rm,
    disableAnimations: Um,
    addPaintCoords: Om,
    setPriceMask: c3,
    setSelectedPrice: l3,
    updatePixelInfo: d3
  } = Wo.actions,
  Mm = Wo.reducer,
  ua = {
    getPixelInfo: za,
    getPriceMask: bs,
    getPrices: ws,
    repaint: ys
  };
class Fm {
  constructor({
    viewport: t
  }) {
    this.viewport = t, this.pixiViewport = t.viewport, this.pixel = null, this.line = null, this.hexColor = "#42a6ff", this.color = `0x${this.hexColor.replaceAll("#","")}`
  }
  draw({
    x: t,
    y: s
  }) {
    an({
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
    this.line = new PIXI.Graphics, this.line.setTransform(.5, .5), this.line.lineStyle(.2, this.color), this.line.moveTo(-.5, s).lineTo(t - .5, s), this.line.moveTo(t, -.5).lineTo(t, s - .5), this.line.moveTo(T.width - .5, s).lineTo(t + .5, s), this.line.moveTo(t, T.width - .5).lineTo(t, s + .5), this.line.zIndex = 10, this.pixiViewport.addChild(this.line)
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
const Be = {
    idle: "idle",
    start: "start",
    finish: "finish"
  },
  Qm = {
    command: Be.idle,
    counter: 0
  },
  Yo = ie({
    name: "progress",
    initialState: Qm,
    reducers: {
      setProgressCommand: (n, t) => {
        n.command = t.payload.command, n.counter = n.counter + 1
      }
    }
  }),
  {
    setProgressCommand: st
  } = Yo.actions,
  zm = Yo.reducer,
  qm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAElBMVEVHcEz/////96f/uQD/WQDnERFRxRXOAAAAAXRSTlMAQObYZgAAAKRJREFUeNrt1MENgzAQRNEVUEBqmKUA5DF3C7sApJj+W4kQKcCjHLP//m6jsSiKoiiKon9uKjpZbYZIPEEkM6ESQCW8hQto2r7ExwnwkH2YzHhikUk+h8mSHuLCBBIO3K3j5O0HEgAfJz1XOAGOk0Y2eKVJJB2eFdKvnnbShFpl3clTIWRtVSJGdmYWhdR8ceubQuZiLCa1mDWTe8UzR1EURT/0AVQMHG7ZD4ErAAAAAElFTkSuQmCC",
  Hm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAD1BMVEVHcEz/96f/uQD/WQDnERHKPBirAAAAAXRSTlMAQObYZgAAANhJREFUeNrt1cFthTAQhGHyoIFZN/A8SwHEQwGI0H9N0dNKOa+V634Hbr/QyLK8lFJKKaXMOucTXasvA1OJBoCpJArLB18Ink9eUZhL2WSNhPnE1KMxnckENhB0ZBMQwa/0EkNouWKgoyFYLukwtIGQTcCOHklu/jdgf2ve2aNvAPrE/q3DAbDn92+D6jAYCXBJEUkXGkxK3xVyQELLJpvORwPcH2rJWSXSSZ3UNZV4b4ok40Xuuru5jmyykvtzk++fSDLIY7k/nzz651e+TBhHPTGllFL+5xfUYCDCcZqQBQAAAABJRU5ErkJggg==",
  Lm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAD1BMVEVHcEz/96f/uQD/WQDnERHKPBirAAAAAXRSTlMAQObYZgAAAQRJREFUeNrt1sFxxCAMheEXewtAJAUY4QIwcgGJof+aQtiZ3b2tdMlJ3/0fATrYcM4555zZBjMCsNg62oCfMDLSJwQcAUiWZPhMRNGUTAHf1mRr0FkeSS3Q+XgkOVGARqIXm/YaT6YJU9Te4ynAPCbAPCaaljIlxZM1JusLrJUG02ZuNVmKaeFIQ6SJAU1yH5NUM6aLX5MAhcYH/eGkTiRXGiIPuoMtOQsP6V7pEj7rHDCbrEqqiJwXTcwFbzU5s9S5ljhPp0n6JQdRoigiqIS3zo51H8kXZ5EMCFTWkexNWoZeJZLe0wa9hSITZRisXHrvMNlxk2L+9LUCq1vxnwbnnPtnvyvQK1qRfQjwAAAAAElFTkSuQmCC",
  Xm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAD1BMVEVHcEz/96f/uQD/WQDnERHKPBirAAAAAXRSTlMAQObYZgAAAYJJREFUeNrt1tGN2zAQhOGJ5QIyvBQg7roA3a4KcEL2X1O0MpDY8IEikbdA3/uPEWXCEE6n0+n0n7lg2LcZm2kZSdK+NY8knAH8umGTv3cmMWMaBXsTzri640J2JheGpEZG3IVPgDuOTfwrofQ/2MOHrOiQX5JlcITJMzk0sktom5wvjn4ahrEk8ytz+6p85fhlDZ4+N5KBmTQPz2SyEV3d3kcOXlux/DbSLGJG3pJWEYpkvvo8KHCVzMRnFkWTCPPzsZPajKNEXs6duWAsScd/S1cR5cOeSkdi4nwwIWPyA22T6ZoZkknIVLSVLZG90RpNQJu7riYb9VqMHcnVXbzIZitEjREtR4l5qLW6iBtJUbRM7iWKzLS6iKlnMjVnivvq7kby5qam7kJqO1lrUf8k+cN3CzwTDV7vgJU/yWoLMBmOTLefkcRDFkUfi5Vb3QpZ0MnI5LWWrOh1IVVIKrpNIm4ijpFEUWu9Y4Dc4+5gxA1AGUvu+xXFsHJ+zZ5Op3/zG2ZWUn+tdqomAAAAAElFTkSuQmCC",
  Vm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAD1BMVEVHcEz/96f/uQD/WQDnERHKPBirAAAAAXRSTlMAQObYZgAAAnBJREFUeNrtl12y2jAMhV2SBVSiC4iPuoDEJwu4c8P+11TLLoROr0P80ocO3/AzAX+RLNlmCG/evHnzD7lM/Yr1K7E7zLBob36DyOSKdSkehgznEQ8zWOpTNFyAORSSnUgsExIw1cs0nVMmAOZlu8h1PqcoMuEime8nWim/AeSsEuUPpn6F7FdwNPHZX7KhortnrxXJRMkKqqYpfNOvBWDeayyI6opjITaUZDJlA0WBAYasOhFTIy3WwTWKJRAgy4Uctl00VoUkAIqjL9oOf4KZBNqLbkZxFFF5B3uQgzBaY3xszJSq2dzuS6qKuhFGtwD/oK2EJd6VNV9tYWMimSQcKFqmDjIURjLWuusAfJEWzEhAFFyfe6WSSV8pAVEWgYrCjcLt05X2HhhcqTv4AaTQLBsFpcSY/1IUc6vIgCu2zw8i/oitdiaJboBPzYUjy7XVS0RRGLnfQ1SjRuF8sO8V3L/f6pKTg/4nZKJcHwoEmaOFCUf2ESMTnCkcR5E9SjACRq5t5eJGfDpTSwVJtpVPeM2eGi2igB1FYVFE62/rYENRcKCMrImJqB+DbhflaFsSGVe83YNI1uG0lY3poSguHg2Fn02FRUFVRONDsQOFBkcUPl4EiMVqz56rJdRRkoFT3j+as+e60BWRopSeECI6N2fP23ZlqklVhVw3tI/YbNxuC0lXoiu1i+OGlpKiiN2UTCK4K5/hEL8fCKvbxg2sMbxiy4kQd4zpRzjDszJ8nFK2KFozI8M5RlcsubKGk4iokVGuc+hQSCZYj2K8jQTPK1GZC0V2KLA19CprXaUe6yRWho6WQi/L9f3X7M1/zC/mbn/kN4xkqQAAAABJRU5ErkJggg==",
  Gm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAElBMVEVHcEz/96f/uQD/WQDnERFAMiwoKjrVAAAAAXRSTlMAQObYZgAAArpJREFUeNrt10F2mzAQBmDV4H1H5ADMrx4Aa9Q9CXif9xLuf5VqJHCTgGJot/4XXvjxSYw0kp/NI4888khK1R0n4V9nkQOkfm4T6Q8QtiZmPEKIWiXmQIh0Gu+OEJ2mApZZpd9DrDkB8/6McldUFGM80JqU07iPtAC0GBgms49YQIthItpBTjQHYNpJeDFMGnucNNIdJr4td0reMiayFvqZib1PUuGIBqAU197p64rIwokHFmK77aYR6W8kCo3HhTgZetrqgCHk/kUWv4dZqWH6uVnIeNs+dCLX6T0ZJENt6WRpGHCmCtcwjYsp7+a8pIAEc56GaXodlldry72VyaDkGokZrpN4Jivm22nYvl8jiTFmmsKbB9CWiHAiEse/keF7UtkbMeeZxIUDWepKhFhrCUpyppgB4intnHyBtYRTXp/fOr7mnMgEsiCytXwlRi7UkOWFZKTEsyXN0+r+rH0kBLg81s28vszk57rPRrZMbN2nsaYpHblC09RxOLDFalUSsei2VowtWTjzMefX8xuDCGzXYOl8+UKmd8TQpTGbWROtxmqR0hVITFgR6JKp2EvOrwCKJ6ZS0m8M1JYvPQAuHCKVEuk3vi2jRLoVcSKhIGoAdkVOgIgUSOUBWhXjAVecZfAA26Zfl1Iky0W8EnBdoRSRTLrPlWgKpMqEqflcieZXkXifUXf7zmbiCtWLvAgAAtwiCOCktomIDI0HiMnOZl4PAvoCCeNFJD3DeQ4LOBEQ2e36oxiHRsRHkpb1okQkDChd/jpYeHYirI+CZfnpMPVQ7MvRw3kIciiTF/Ntaum103LyZIHNvWSyxIl/uk9qT/SBVL25nxclJr+ZiNmTH/k2yyTsJU605ZiazuwjOrgSD7eTnPJhrmuB7CWQfm663cSpOEbC3wOk+Ehq583RXJrHX9NH/jt/AL3WmbEKtmBpAAAAAElFTkSuQmCC",
  Wm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAFVBMVEVHcEz/uQD/WQDnERFAMiyACgUZDg0R26nsAAAAAXRSTlMAQObYZgAAAthJREFUeNrt18GO2jAQBuBZzHJmTMU5Hrecsx5xb3etnNGi3AFF8/6PUNsJywJ2Sa4VvxBSJH+ZxB6TAM8888x/mFk1nVjoQ9OrUD2WqPNIHk/gTGAC0dMnAKup5AVvyjj7mMQy6mvGlKtGEA3gqLpM4mMSyxBZGJ23QJaKiKBPNY7oWSB17IUZLscRpJAKZohYJpflNthHE+FI0g/cnFD3dMS9kBaDKGIGwvyYrCVU6JrjmVB+GNWXFlt3Xuben8TgRgxaGnZesY1ecO19E0gjRy1yRO2yfab42xz/SCTktOn8EdHmN5y6IYtIGvH+DyIaLLVW6l+D+qf3v6GLJHy9y0ljiQzLN5BYRgIREURdIskEFAYfAOJ1pUJiSqs5i0AMUSoCEkQk4XPUUIhB3EgnIpEsAGAg/mhrKJYR8U1PDhBNlwgRFKJcJF7CwAi6BhYSD/wpSxRZgDcTSCwjANEcIF1mA2aVM1QFojfSXciigbkECWCWEOOouioTjizzRvxvkQOkeJgfgoSODGIFiq4JMCC+4WYYfyapmm9OGALqptFUbQJZfydNJMlIIsD3k0yoFwJfOQxVwIspNA3h7QokL4EckWyOOLzpJjn0RORE+T5TVNgYIi8rrPMtY5aQD64Y8oSq0g/oCiYRRcUdAy5PHNVQCmVJ9xHJlCoL74ksTLmXzntm3hXIZ4FY5rpAOHfR3vv3YpVXtpAl3paIypbvUhnIZ58l80hsgTDXKjvJ3tGuROJXxnxQYTFfs0RR/0Av3D1v67s3lhkZRE2/SqTdc8h1EzG7gGyBtG17RyxzG4zO30sbc092AK0jgDK6JspuK/hn2vbm4Tuzn0vIJNOcyg4HbHaPyd4sARxRRI7rLTzOq0FQlUorbke+kyNqW6enlLK8G0viydkhMsBIkk7OTDSWGB0F7PbOjiVkt+emG02CmEjs7msDBTwtn1xNJQrr51/gZ67yF2l/ou0eQckjAAAAAElFTkSuQmCC",
  Ym = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAElBMVEVHcEz/WQDnERFAMiyACgUZDg3ZC39iAAAAAXRSTlMAQObYZgAAA7xJREFUeNrtmE2TozYQhhUDd0vZ3FEDdw0Nd1bGdy+y/v9fSbfEEAKiAqmtrdqqeS+iGD3qD3X32BZf+tKXtpL/AynFKf1xXx7hLKL+QcRJ5E8jZqE4qWpBzGlEXEZQXFYmEtJKXFSu75ctd+VlBM9u9MvTfyZPS774AvvTWbxJKcsZcf25miFEEeJQOMTXWUTOHiFqJbJDDBbHomdalogd0Rm+YpEfIoKReyArbIl2hByXwGLl2xBCwg5giEi2aTk6a7mD74yoR1geaGvhI2JSdRcRkCSowlJ770y6Xm+AyzNoMgIPAF6cQ3PQPrdPpDAWWDgvTof8pfR5mMMOSLWPCzrJKpN9FBH2g89/eOwsLTgF5J42MyOtQksEydkad0gCRC15v1Z9oPAjIN8O71CVjDSIvZSNb6VCbAOihjSiQ4lYYESrxutYMSwYDoywmg6eiB6g79gh18VrKo+KnjdRBISQLDvk3xA07F0qPxHVYx/idnw8eD9fkyj6jQEkLiLkliYOnQ1bI/P0wuGLfV8YTYgMoki+c9jouoA4XVmoMSJ6hdyqBWneHC/PihHGx8TP9tHKkh3jVlgEJtNMKKhazUmI/Y5TDE9LFUZgXu6TDPBoQcr5sCJevmcwNQKdJYKQbpVTF5Ef6QYo+hZYiJ0dl7ehnStCUozDd+yQdf7zGOCULk3EnjtkKF7r+CLS6STiuEzGetjMhODYpBl87WJBYrZvc9BSjc+JSdiP9IwRj2bDkJ4UpaxHTJjpPff+1pCtn76FcXygEVt574V3JhEkJ7NOISKGkkLQAiAhJ1UQ0edQI75OfyZw2NNmApOEVO6VKKUZPECwlYprNgGm/HIA4HSYwIboc3ECTPM4/SzdW1xv6QMyni0/IjLSouIkCVY/GExZ0bJqw5a8lqQYHr/Aj4OxrLnOAWCF3Obh1iaR+OeKe8ZPwKdn7FBQ9U6OWBN8+MvZOvwn41gWpPF22MdujAyI93xrHdQjbZKtnN8iHiLNJEsXxysjODvWqj0icqNn5M7N1gWk8RDCr7QsE8gQwkfUJSMuzNLeA7cypJFxyEHK0BUFek+948yNE8h6WkghmbEANQ/4wnvXM0IGlk8Bw94vQnjWh0r3c6VrCty/7ZjFKYJbZH2MQ1M4IaxUjSdliAa7PUIzZFVvL4+EADSIZBFRYDeIHfLvV4zkFDgj846Ts8IT8lrOPKWQ7iBCTn0fMau3hPxMobkI5AOai99COJmXkXWY4ylmHFdOjlc9ywm/ql+BMPMb/ajxN8we1xzBMA0/AAAAAElFTkSuQmCC",
  Jm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkAgMAAAANjH3HAAAADFBMVEVHcEznERFAMiyACgVxtGBQAAAAAXRSTlMAQObYZgAAAodJREFUeNrt1TFqG0EUBuA/GgTGeJnG6d0EzDZxs53N6ggq8phmQVdYkjYgBR8gV1ATMGlyhQGfYVATcoZp1I15mZ0dzay16ygkkCo/KoQ+3lvtm5ld/M/vpvoDqTGRJXxuJ0A08Lmekh9BNhO03eKQy5MyjntZbjDMDKcz+3xC/kXOMEyxQs58KBXpkbxBl9fUZpEI+aJ7WaJoosTxfvNyvq2oiR2zyG0nc3qXO25SbahR2lBsd4GU2dZ42dMKOxzH/6qZ1oLwLOcPeKK1ZmZB+kiumBm1Fz4W1F4EOzCeywaSHSBtiXH6NuVoM4oW2HVyT+rZCoSRkfbyiQ6DeLUAKmqLpsTOCwqiZZT3gCElXQkGjI5SLCAsQESPXgBB7Zyo6QXXQTQQWjW+ZhWXpoTwYoPcBVkDeKvDpYiUDaeupo9yT4wuSSrVCTvB7OXsOojwre2eNMKImF0+sobWvQi2Xm1evTvF9knpvsEHfsxrJJk1c6xv6oIWQ5GuXw5Dej7YlKGgF6LFnFTaOILj/p91UhDpgwD4isMdtDLLxn+iSKImS+iPgRiVZZbE+G5P6yQ5cr+yYMZEmIcimiFZ1A4xVZCUBzmUokPT9oIUXx0WjppjEQ6GAEkqSQ55qYlSxxyjopAa3YYXQ2Gi+J6vo1B3slcoiBqo4TNHOIQjNydSyKM21IahsrsMYqJ0vZdBandZEBE47VEvlQYg7a3/rlAPpK0Wsd7QCinCS9G33gkmLjMZOlTQI7MrRRth0+3cKG3N9rxo0qz5IMYKByTRIglb+EiHUXoRUYS1mM59ltMvI/Gi3LxcoxGiJ+REh1P/6srFIY7J/bqnxDgXvYipC6Wi6ci/eqn+BJYAHRseeKj2AAAAAElFTkSuQmCC",
  Km = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkAgMAAAANjH3HAAAADFBMVEVHcExiV01AMiyACgVW8W35AAAAAXRSTlMAQObYZgAAAipJREFUeNrt0jGK20AUBuA/EoaVWFDl3o1CrGpvIB/BRd7EeBuVwU2uMGy6NKmUeiAY7NlDWNk75A5hq4lrw2Tk0egh24GQLIGE/cFYw8e8mfck/MeJ8ZS5usLTpPk5TdAnwq/lT291jX81k99tVsEnWeI0Ei43yEkixC3BGVN1VjPIPDuRbmdOi7LBpYzodSu5xDAZchIfAdSzEymbmoScOBneIzZls6alBKDVsNYhw5ZWbbVCDmsdAK11FjoYSFxoDeAAnzAxJ0h334YyAXJ6Z14C1iQVhqlJoL6T1owWgEJOVZgqEcn67rPb89aJHJPw37MX7WT/QfkSBJ/IiSok7IMEEB9YXhAJBaD0Tdu2BKDAgk6+Eqm+2nIowvS3XrUSd/JIt6HfqdAKN6Ybu33U90FSrSXQSWLd0gwkHFpBa3RRWoNFoNj0Ejnh5pApcAZSNp/ixi83LAmRLB/ofZBIBpkSVVlCM1wUjNzvLAWRdCIuSL2Sx8POJNJavkp7MYgbJhbEB8QG4KS1CJIfH/JFkO3KC/YkYwBj0QnPNDqWjWqSZ6J3TVu9b52nXVjDEgFpJ8kCR1n3e0IXtfCy7c6JKv5GpTV8bvllwa9k1t4AhRf7XXQycqLgkrYyv7Z7Ftr5sptWYPcbrmYbhChYEySiNyyAKXnu61svYfAcfW+bpLokqbZI5v7MCibrgfv2r8hJInGaXPi/6kymy4vCAyrUmaReUoXn/MX8AOTf3EjQ8IXZAAAAAElFTkSuQmCC",
  Zm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkAgMAAAANjH3HAAAACVBMVEVHcExiV01AMiwfKIGrAAAAAXRSTlMAQObYZgAAAUlJREFUeNrt1TGKFEEUBuCvHwzMdOxuJGKyy7inmCNsMNU0Rh0aeoTCExjYi2Fj5IW8icgEixo+aLpgMZT50r/+ggrqPVdX/7UYqm2HMtm2K2MrcQZP1vZuIcpmC0oFgrTAj63OskePtVhI4SWikoLDew13ZXIPAaq5VGA+hQpiJD4pZQQKFegGiFLOwBlAPEKcujOITL5V6BhAl8kCcFsJ0gTwE6GzLfw+aTmSDhV6YC9FmeCIIJB+wQX0e6k7d1BBj0weNRxOpL4C8A44TAQcrby+EJA64OOztQfAYC0AN5OG3aihayZG0jxJH0hllL5LPYAFi0CM8IYUwN0Ib0l9FXCxtgAPFbKTQsP84qmyz481WrkH5tMrKzcVFEg77CaEP6w9A58h9VC1XpiJtictX1pH8squapnAV2y2YyA0NDp6LXHdhv/qL+6eN5hJ+KKhAAAAAElFTkSuQmCC",
  $m = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkAgMAAAANjH3HAAAACVBMVEVHcExiV01AMiwfKIGrAAAAAXRSTlMAQObYZgAAAQBJREFUeNrtlUEKwjAQRX8DlcaVCwWXXRjxGLmExWWOMniCLsR1jyp2kGCT31pEcNG3avMyTWYyoVhY+DekJsKgAqhjFHjiBCn9WOlpZECKbqHLGaPfZDGYZephgo0A2bWtB2wvRQPdOag5xGK2ADrZoUHPJi6g6d+wQ54WZayWcnpFFqIPb0bpBgYDI3lj1H9eLZk4fiNMXN/eAgu5gdHiZ5guHbpAzTptPGbqGR1HprgLIisgsjXExPqd1CSoWYPBTTVl7uwq2Ya1ovV8H7NxgQjjhwPgOVlh51cGZCg8gD01FbkZX+OEGjolbiaAoakc6TGXwkxBzGi+svx1R3kAWDoiQG5YEtEAAAAASUVORK5CYII=",
  eh = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkAgMAAAANjH3HAAAACVBMVEVHcExiV01AMiwfKIGrAAAAAXRSTlMAQObYZgAAAP5JREFUeNrtlU1qwzAQRp8FLlJWXTTQpRZVyTF0iZosdZShJ/AidO2jFoKJ8M9HcUPIxm9l62kYj2aE2dl5DhaFcHiQTtEAkIwlBtBmGVlY4gEY1owDMBnDJhOZ4jqD1dwhQ7Bb7kj6Klz5qIfZA4Md6bjyWhNkAC4cWaenhWllJ8bIxsaHmQGGmWFmTJoojVc9xKFwpsT35K2okAuKnofhhuXSeTSH5eApEzdMnNiSzlReoPLmhKnnd7qZSjUHFNr4v8yPukqhU2MVsv6OzaQihMvzBXRNwVT/2sIKTQbepfHiZtxNMmnqFtnCgmAs5VO2uTVlGml0vdj+1/0nv3CcIl47CPeHAAAAAElFTkSuQmCC";
let th = class {
  constructor({
    app: t,
    viewport: s,
    mainImage: a
  }) {
    this.app = t, this.pixiViewport = s.viewport, this.mainImage = a, this.size = 5, this.bombs = [qm, Hm, Lm, Xm, Vm, Gm, Wm, Ym, Jm, Km, Zm, $m, eh], this.textureArray = [];
    for (let i = 0; i < 13; i++) {
      let o = PIXI.Texture.from(this.bombs[i]);
      o.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST, this.textureArray.push(o)
    }
  }
  async boomWithDebounce({
    x: t,
    y: s
  }) {
    await Sn(V(50, 3e3)), this.boom({
      x: t,
      y: s
    })
  }
  boom({
    x: t,
    y: s
  }) {
    const a = new PIXI.AnimatedSprite(this.textureArray);
    a.loop = !1, a.animationSpeed = .17, a.zIndex = 2, a.x = t, a.y = s, a.scale.set(V(1, 2) === 1 ? 1 : -1, 1), a.anchor.set(.48, .55), this.pixiViewport.addChild(a), a.play(), a.onComplete = () => {
      this.pixiViewport.removeChild(a)
    }
  }
};
const nh = "_order_panel_dvy5p_1",
  sh = "_content_dvy5p_13",
  ah = "_fast_mode_blocker_dvy5p_26",
  ih = "_info_dvy5p_39",
  oh = "_active_color_dvy5p_48",
  rh = "_pixel_info_container_dvy5p_58",
  ch = "_pixel_info_color_dvy5p_66",
  lh = "_pixel_info_text_dvy5p_72",
  dh = "_info_button_dvy5p_78",
  uh = "_info_button_active_dvy5p_95",
  ph = "_price_value_dvy5p_99",
  mh = "_pixel_locked_text_dvy5p_105",
  hh = "_pixel_locked_text_painted_dvy5p_116",
  Ah = "_pixel_locked_animation_dvy5p_138",
  gh = "_button_dvy5p_144",
  _h = "_button_text_dvy5p_168",
  fh = "_flash_mode_button_text_dvy5p_181",
  xh = "_not_pixel_icon_dvy5p_192",
  vh = "_tg_logo_dvy5p_196",
  yh = "_image_dvy5p_201",
  wh = "_inner_wrapper_button_dvy5p_206",
  Z = {
    order_panel: nh,
    content: sh,
    fast_mode_blocker: ah,
    info: ih,
    active_color: oh,
    pixel_info_container: rh,
    pixel_info_color: ch,
    pixel_info_text: lh,
    info_button: dh,
    info_button_active: uh,
    price_value: ph,
    pixel_locked_text: mh,
    pixel_locked_text_painted: hh,
    pixel_locked_animation: Ah,
    button: gh,
    button_text: _h,
    flash_mode_button_text: fh,
    not_pixel_icon: xh,
    tg_logo: vh,
    image: yh,
    inner_wrapper_button: wh
  },
  bh = "_layout_oxfjd_1",
  jh = "_container_oxfjd_7",
  Ch = "_placeholder_oxfjd_20",
  Ph = "_progress_oxfjd_24",
  Nh = "_counter_oxfjd_32",
  Sh = "_counter_max_text_oxfjd_45",
  Xt = {
    layout: bh,
    container: jh,
    placeholder: Ch,
    progress: Ph,
    counter: Nh,
    counter_max_text: Sh
  },
  Ih = () => {
    _();
    const n = $(),
      t = l(o => o.mining.charges),
      s = l(o => o.mining.maxCharges),
      a = l(o => o.main.currentFastType),
      i = t >= s;
    return a !== null ? null : e.jsx("div", {
      className: Xt.layout,
      onPointerUp: o => {
        o.stopPropagation(), n.push("/energy-over")
      },
      children: e.jsxs("div", {
        className: Xt.container,
        children: [e.jsxs("div", {
          className: Xt.placeholder,
          children: [e.jsx(B, {
            children: ""
          }), e.jsxs("span", {
            children: [" ", t]
          }), i && e.jsx("span", {
            className: Xt.counter_max_text,
            children: " max"
          })]
        }), e.jsxs("div", {
          className: Xt.counter,
          children: [e.jsx(B, {
            children: ""
          }), e.jsxs("span", {
            children: [" ", t]
          }), i && e.jsx("span", {
            className: Xt.counter_max_text,
            children: " max"
          })]
        })]
      })
    })
  },
  Th = "_progress_g3q57_1",
  Dh = {
    progress: Th
  },
  Eh = ({
    progress: n
  }) => e.jsx("div", {
    className: Dh.progress,
    style: {
      width: `${n}%`
    }
  }),
  Bh = () => {
    const n = _(),
      t = l(A => A.mining.charges),
      s = u.useRef(t),
      a = l(A => A.mining.addedCharges),
      i = u.useRef(0),
      o = l(A => A.mining.reChargeTs),
      r = l(A => A.mining.reChargeSpeed),
      c = l(A => A.mining.maxCharges),
      [d, p] = u.useState(0);
    return u.useEffect(() => {
      const A = () => {
        if (s.current >= c) {
          h = requestAnimationFrame(A);
          return
        }
        const g = Date.now(),
          x = Math.floor((g - o) / r) - i.current;
        x > 0 && s.current < c && (n(Qo(x)), n(Lp(x)));
        let v = (g - o) % r;
        p(v * 100 / r), h = requestAnimationFrame(A)
      };
      let h = requestAnimationFrame(A);
      return () => {
        cancelAnimationFrame(h), i.current = 0
      }
    }, [o]), u.useEffect(() => {
      s.current = t, t === c && p(0)
    }, [t]), u.useEffect(() => {
      i.current = a
    }, [a]), e.jsxs(re.Fragment, {
      children: [e.jsx(Ih, {}), e.jsx(Eh, {
        progress: d
      })]
    })
  },
  kh = "_layout_91s2c_1",
  Rh = "_container_91s2c_21",
  Uh = "_buttons_container_91s2c_27",
  Oh = "_button_91s2c_27",
  Mh = "_shop_button_91s2c_45",
  Fh = "_container__bottom_91s2c_50",
  Qh = "_fast_type_button_91s2c_50",
  zh = "_disabled_button_cover_91s2c_62",
  qh = "_fast_mode_button_enabled_91s2c_72",
  Hh = "_available_91s2c_82",
  Lh = "_limited_good_timer_91s2c_99",
  Xh = "_disabled_available_cover_91s2c_120",
  Vh = "_button_image_91s2c_130",
  Gh = "_animation_91s2c_147",
  Wh = "_shake_91s2c_1",
  I = {
    layout: kh,
    container: Rh,
    buttons_container: Uh,
    button: Oh,
    shop_button: Mh,
    container__bottom: Fh,
    fast_type_button: Qh,
    disabled_button_cover: zh,
    fast_mode_button_enabled: qh,
    available: Hh,
    limited_good_timer: Lh,
    disabled_available_cover: Xh,
    button_image: Vh,
    animation: Gh,
    shake: Wh
  },
  Yh = "_number_179d2_1",
  Jh = "_layout_179d2_6",
  Kh = "_viewer_179d2_14",
  Zh = "_container_179d2_18",
  $h = "_digit_179d2_25",
  eA = {
    number: Yh,
    layout: Jh,
    viewer: Kh,
    container: Zh,
    digit: $h
  },
  tA = "_layout_q3t4p_1",
  nA = "_viewer_q3t4p_9",
  sA = "_container_q3t4p_18",
  aA = "_digit_q3t4p_25",
  _n = {
    layout: tA,
    viewer: nA,
    container: sA,
    digit: aA
  },
  iA = ({
    digit: n = 0,
    fontSize: t = 16,
    fontWeight: s = 600,
    gap: a = 6
  }) => {
    const [i, o] = u.useState(!0), [r, c] = u.useState(0), d = r === 0 ? `translateY(${a/2}px)` : `translateY(-${a/2+(t+a)*r-a}px)`;
    return u.useEffect(() => {
      o(!1);
      const p = setTimeout(() => {
        o(!0)
      }, 500);
      return () => {
        clearTimeout(p)
      }
    }, [r]), u.useEffect(() => {
      c(n)
    }, [n]), e.jsx("div", {
      className: _n.layout,
      children: e.jsxs("div", {
        className: _n.viewer,
        style: {
          height: t + a
        },
        children: [e.jsx("span", {
          className: _n.digit,
          style: {
            visibility: i ? "visible" : "hidden",
            alignSelf: "center",
            fontSize: t,
            fontWeight: s
          },
          children: r
        }), e.jsx("div", {
          className: _n.container,
          style: {
            transform: d,
            visibility: i ? "hidden" : "visible",
            gap: a
          },
          children: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(p => e.jsx("span", {
            className: _n.digit,
            style: {
              fontSize: t,
              fontWeight: s
            },
            children: p
          }, p))
        })]
      })
    })
  },
  Ln = ({
    number: n,
    fontSize: t = 16,
    fontWeight: s = 600,
    gap: a = 6,
    addSpace: i = !0
  }) => {
    if (n === void 0) return null;
    const o = String(n).split("").reverse();
    let r = [];
    for (let c = 0; c < o.length; c++) c % 3 === 0 && c !== 0 && i && r.push("space"), r.push(o[c]);
    return r = r.reverse(), e.jsx("div", {
      className: eA.number,
      children: r.map((c, d) => c === "space" ? e.jsx("div", {
        children: " "
      }, r.length - d) : e.jsx(iA, {
        digit: Number(c),
        fontSize: t,
        fontWeight: s,
        gap: a
      }, r.length - d))
    })
  },
  oA = {
    isTMA: !1,
    isAuth: !1,
    authData: null
  },
  Jo = ie({
    name: "auth",
    initialState: oA,
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
    setIsTMA: rA,
    setIsAuth: cA,
    setAuthData: lA
  } = Jo.actions,
  Ko = n => n.auth.isTMA,
  Me = n => n.auth.isAuth,
  dA = Jo.reducer;
let Na = !1;
const uA = async ({
  dispatch: n,
  amount: t,
  charges: s,
  maxCharges: a,
  status: i,
  state: o
}) => {
  var c, d;
  if (!t && o && (t = o.shop.available[1], s = o.mining.charges, a = o.mining.maxCharges, i = o.shop.useProductStatus), !t || t === 0) return n(oa(10)), n(Ge(1)), n(We()), n(cr()), !1;
  if (s === a) return !1;
  if (Na) return m.pending;
  Na = !0, n(st({
    command: Be.start
  }));
  try {
    (await n(ca.useProduct({
      productId: 1,
      pixelId: 1
    }))).meta.requestStatus === m.fulfilled && (n(Hp(a)), n(ra({
      product: 1,
      amount: 1
    })), (d = (c = window.Telegram.WebApp) == null ? void 0 : c.HapticFeedback) == null || d.notificationOccurred("error"))
  } catch (p) {
    console.log("error", p)
  } finally {
    Na = !1, n(st({
      command: Be.finish
    }))
  }
  return !0
}, pA = () => {
  const n = _(),
    t = l(Me),
    s = 1,
    a = l(d => d.shop.available[s]),
    o = 10 + String(a).length * 6,
    r = l(d => d.main.fastEnergy),
    c = [I.button, I.fast_type_button];
  return r && c.push(I.fast_mode_button_enabled), t ? e.jsxs("button", {
    className: `${c.join(" ")} ${I.shop_button}`,
    onPointerUp: async () => {
      if (r) n(cr());
      else {
        if (!a || a === 0) return n(Ge(s)), n(We()), !1;
        n(Ng())
      }
    },
    children: [e.jsx("img", {
      alt: "img",
      className: I.button_image,
      src: Po
    }), e.jsx("div", {
      className: I.available,
      style: {
        width: o
      },
      children: !a || a === 0 ? e.jsx(B, {
        children: ""
      }) : e.jsx(Ln, {
        number: a,
        fontSize: 11,
        fontWeight: 400,
        gap: 3
      })
    })]
  }) : null
}, js = D("reward/getList", async ({
  userId: n
}) => (await O.getRewards({
  userId: n
})).data), Sa = D("reward/getById", async ({
  rewardId: n
}) => (await O.getRewardById({
  rewardId: n
})).data), mA = {
  showPopup: !1,
  id: null,
  rewardUserId: null,
  info: null,
  active: null,
  list: oi.getInitialState(),
  getListStatus: m.idle,
  getRewardStatus: m.idle
}, Zo = ie({
  name: "reward",
  initialState: mA,
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
      oi.removeAll(n.list)
    }
  },
  extraReducers: n => {
    n.addCase(js.pending, t => {
      t.getListStatus = m.pending
    }).addCase(js.fulfilled, (t, s) => {
      t.list = s.payload, t.getListStatus = m.fulfilled
    }).addCase(js.rejected, t => {
      t.getListStatus = m.rejected
    }).addCase(Sa.pending, t => {
      t.getRewardStatus = m.pending
    }).addCase(Sa.fulfilled, (t, s) => {
      t.getRewardStatus = m.fulfilled
    }).addCase(Sa.rejected, t => {
      t.getRewardStatus = m.rejected
    })
  }
}), {
  setReward: hA,
  clearReward: p3,
  addReward: m3,
  removeReward: h3,
  clearInventoryList: AA,
  showRewardPopup: gA,
  hideRewardPopup: A3
} = Zo.actions, _A = {
  getListByUserId: js
}, fA = Zo.reducer;
let $o;
const xA = n => {
    $o = n
  },
  Cs = [],
  vA = async ({
    dispatch: n,
    flyCoords: t,
    paintCoords: s,
    activeColor: a
  }) => {
    C.mainImage.paintPixel({
      id: gt(s),
      color: nt(a)
    }), C.mainImage.updateTexture(), await n(Fc(a)), await n(Om(s)), await n(Xp());
    try {
      const i = new TextEncoder().encode(JSON.stringify({
          type: 0,
          pixelId: gt(s),
          color: a
        })),
        o = await He.rpc("rеpаintTournаment", i);
      Cs.push(o);
      const r = await o,
        c = JSON.parse(new TextDecoder().decode(new Uint8Array(r.data)));
      console.log(c), c && c.balance && (n(Bo(c.balance)), c.reward_user && (C.mainImage.reward.add(s), n(hA({
        rewardId: c.reward_user.reward_id,
        rewardUserId: c.reward_user.id,
        reward: c.reward,
        type: c.reward_type,
        user: c.reward_user
      }))))
    } catch (i) {
      i.code && i.code === 5e3 && n(Bt.info())
    }
  }, yA = ({
    history: n,
    dispatch: t,
    paintCoords: s
  }) => {
    t(ma()), n && n.push("/energy-over"), t(on(s)), C.mainImage.selectedPixel.draw(s)
  }, er = async ({
    history: n,
    charges: t,
    dispatch: s,
    flyCoords: a,
    paintCoords: i,
    pixelInfo: o,
    user: r,
    activeColor: c,
    state: d
  }) => {
    let p = !1;
    if (t <= 0)
      if (d && d.main.fastEnergy) {
        if (Cs.length > 0 && !(await Promise.allSettled(Cs)).every(g => g.status === m.fulfilled || g.status === m.rejected)) return;
        const A = await uA({
          dispatch: s,
          state: d
        });
        if (A === m.pending) return;
        Cs.length = 0, A || (p = !0)
      } else p = !0;
    if (p) {
      yA({
        history: n,
        dispatch: s,
        paintCoords: i
      });
      return
    }
    vA({
      dispatch: s,
      flyCoords: a,
      paintCoords: i,
      activeColor: c
    })
  }, wA = () => {
    const n = _(),
      t = $(),
      s = l(x => x.canvas.pixelInfo),
      a = l(x => x.color.active),
      i = l(x => x.user.user),
      o = l(x => x.mining.charges),
      r = l(x => x.canvas.coords),
      c = l(x => x.main.fastMode),
      d = l(x => x.main.currentFastType),
      p = l(x => x.main.fastEnergy),
      A = l(x => x.shop.available[1]),
      h = l(x => x.shop.products[1]),
      g = {
        bomb: 2,
        paintcan: 6,
        pumpkin: 7
      },
      w = l(x => x.shop.products[g[d]]);
    return e.jsxs("button", {
      className: Z.button,
      onPointerUp: x => {
        if (c) {
          x.stopPropagation(), n(ma());
          return
        }
        er({
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
          state: $o.getState()
        })
      },
      children: [e.jsx(Bh, {}), e.jsx("span", {
        className: Z.button_text,
        children: o === 0 ? A > 0 && p ? e.jsxs("div", {
          className: Z.inner_wrapper_button,
          style: {
            gap: "8px"
          },
          children: [e.jsx("span", {
            children: "Use"
          }), e.jsxs("div", {
            className: Z.inner_wrapper_button,
            style: {
              gap: "3px"
            },
            children: [e.jsx("img", {
              alt: "img",
              className: Z.image,
              src: h.image_url
            }), e.jsx("span", {
              children: h.name
            })]
          })]
        }) : "No energy" : c ? e.jsxs("span", {
          className: Z.flash_mode_button_text,
          children: ["Fast mode ", e.jsx(B, {
            size: 12,
            children: ""
          })]
        }) : d ? e.jsxs("div", {
          className: Z.inner_wrapper_button,
          style: {
            gap: "8px"
          },
          children: [e.jsx("span", {
            children: "Fast mode"
          }), e.jsxs("div", {
            className: Z.inner_wrapper_button,
            style: {
              gap: "5px"
            },
            children: [e.jsx("img", {
              alt: "img",
              className: Z.image,
              src: w.image_url
            }), e.jsx("span", {
              children: w.name
            })]
          })]
        }) : "Paint"
      })]
    })
  };
class bA {
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
class jA {
  constructor({
    app: t,
    viewport: s,
    store: a,
    mainImage: i
  }) {
    Mt(this, "isCoordsInExtraRewardZone", ({
      coords: t,
      x1: s,
      y1: a,
      imageSize: i
    }) => {
      const {
        x: o,
        y: r
      } = t, c = s + i, d = a + i;
      return o >= s && o < c && r >= a && r < d
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
      if (i.type === Se.my || !this.isCoordsInExtraRewardZone({
          coords: t,
          x1: i.x,
          y1: i.y,
          imageSize: i.imageSize
        })) continue;
      const o = kn({
          x: t.x - i.x,
          y: t.y - i.y,
          width: i.imageSize
        }),
        r = _t(i.imageData[o], i.imageData[o + 1], i.imageData[o + 2]),
        c = i.imageData[o + 3],
        d = this.mainImage.getPixelColor({
          coords: t
        });
      if (c !== 0 && d !== s && d !== r && s === r) return !0
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
          const r = kn({
              x: i,
              y: o,
              width: s.imageSize
            }),
            c = _t(s.imageData[r], s.imageData[r + 1], s.imageData[r + 2]);
          Ue.includes(c) || (t[t.length - 1][c] || (t[t.length - 1][c] = 0), t[t.length - 1][c] += 1)
        }
      }
    })
  }
}
const CA = async ({
  coords: n,
  dispatch: t,
  repaintReward: s,
  amount: a,
  state: i
}) => {
  var r, c;
  if (!a && i && (a = i.shop.available[2]), !a || a === 0) {
    t(oa(10)), t(Ge(2)), t(We()), t(kt());
    return
  }
  C.mainImage.bomb.boom(n), t(ca.useProduct({
    pixelId: gt(n),
    productId: 2
  })), t(ra({
    product: 2,
    amount: 1
  })), (c = (r = window.Telegram.WebApp) == null ? void 0 : r.HapticFeedback) == null || c.notificationOccurred("error")
}, PA = () => {
  const n = _(),
    t = 2,
    s = l(Me),
    a = l(d => d.shop.available[t]);
  l(d => d.main.fastMode);
  const i = l(d => d.main.currentFastType),
    r = 10 + String(a).length * 6,
    c = [I.button, I.fast_type_button];
  return i === "bomb" && c.push(I.fast_mode_button_enabled), s ? e.jsxs("button", {
    className: `${c.join(" ")} ${I.shop_button}`,
    onPointerUp: () => {
      if (i === "bomb") {
        n(kt());
        return
      }!a || a === 0 ? (n(Ge(t)), n(We())) : n(ha("bomb"))
    },
    children: [e.jsx("img", {
      alt: "img",
      className: I.button_image,
      src: jo
    }), e.jsx("div", {
      className: I.available,
      style: {
        width: r
      },
      children: !a || a === 0 ? e.jsx(B, {
        children: ""
      }) : e.jsx(Ln, {
        number: a,
        fontSize: 11,
        fontWeight: 400,
        gap: 3
      })
    })]
  }) : null
}, NA = async ({
  coords: n,
  dispatch: t,
  repaintReward: s,
  activeColor: a,
  amount: i,
  state: o
}) => {
  var c, d;
  if (!i && o && (i = o.shop.available[6]), !i || i === 0) {
    t(oa(10)), t(Ge(6)), t(We()), t(kt());
    return
  }
  C.mainImage.paintSquare({
    x: n.x - 1,
    y: n.y - 1,
    size: 3,
    colors: Array.from(Array(3 * 3), () => a)
  }), t(ca.useProduct({
    pixelId: gt(n),
    productId: 6,
    color: a
  })), t(ra({
    product: 6,
    amount: 1
  })), (d = (c = window.Telegram.WebApp) == null ? void 0 : c.HapticFeedback) == null || d.notificationOccurred("error")
}, SA = () => {
  const n = _(),
    t = 6,
    s = l(Me),
    a = l(d => d.shop.available[t]);
  l(d => d.main.fastMode);
  const i = l(d => d.main.currentFastType),
    r = 10 + String(a).length * 6,
    c = [I.button, I.fast_type_button];
  return i === "paintcan" && c.push(I.fast_mode_button_enabled), s ? e.jsxs("button", {
    className: `${c.join(" ")} ${I.shop_button}`,
    onPointerUp: () => {
      if (i === "paintcan") {
        n(kt());
        return
      }!a || a === 0 ? (n(Ge(t)), n(We())) : n(ha("paintcan"))
    },
    children: [e.jsx("img", {
      alt: "img",
      className: I.button_image,
      src: Co
    }), e.jsx("div", {
      className: I.available,
      style: {
        width: r
      },
      children: !a || a === 0 ? e.jsx(B, {
        children: ""
      }) : e.jsx(Ln, {
        number: a,
        fontSize: 11,
        fontWeight: 400,
        gap: 3
      })
    })]
  }) : null
}, IA = "data:image/png;base64,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", TA = "data:image/png;base64,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", DA = "data:image/png;base64,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", EA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABRlJREFUeJztnL9uFDEQxr9D8AKhSMdzXLqLQpXykGhQJMqDhwjiHiKkRDrRICVlKlDScc9Bl4K8AMVSJN7Mbmyv7bXHO8f8muT29uxZf57x+M8doCiKoiiKoiiKoiiKoiiKoiiKoiiMzGobkIGm91r0M8k0frNqRTg9vuu8tb7ae3xxci7u+cQZjM2q6YvgYn21J04UUcbGiGGQJsqz2gZEEC0G0Ia0/jgzWSQJgs9/f7f/r6/2uuOF4zr9jASe1zYgFeMtfVFSvGhKiImtAJrTP28B3Pf6Ty9eeW+m96xffgeEPKuokAU8esTnv7+t4Yhet4W0qSM2ZBmkjRFDiBLE9PihcGX7jBTEhSwgrJGlCWEQMdARGmxWnQvepRMAODkHBD2nSA+hUAGkegVF1BjiYheEMIj0kNPjO+8EcOj9KSPJQxpsVk8a2jeGnB7fYb1ZASfnDYSMIyI9ZJcR0Wtgya4Mg1mWQUi2JSlkWdmlAR0Q0GPg8I7rr+cAgMWb7vWbi/u/h+8tHiXAS6ZknHMT6fqo+7ovggsjjuHwp/f2SbTFFEJWA4Q1er+BQzFlNaRMi1imQ1QVpmblwUIYbi7CvSP0Mx4vqtI2tdLe5voIaM66jRXb2Dno19+ctZ2kyj58jV7QNGcVak1g9vH+D2udnJVBkBgGblE4BRkUox/PS4Ww2Ho4ReESxCtGaPaUKlCO8rlEqS4IbazFGwDLefeGy+3TeyLIVf4uCdJcH7kf1DTG4tvcfoO57912lBGh5fvsfEiJi7YZiyA272iFsPVayv6vx8+8TjN38YNksLcH7huJt9iE4fCS0vOQpj/xA3ox3SXG/q+OGNnwlUtssY07HPOTUoI0GGN4CSHy1jHu+TyUcL/g9LYTrmgD3R4Al2FjRnKqvJw/rRMYDFuUEiGs7uIiDVdfmOeol1t02tLYspwDF+MSiDEUFyQoZQ30Bl/Z9FrSfOVy6xzPxqTdseTulsFLI6FhYZAPvVA+0tNi7codtqoJkoW+GAbG8JdbELmnTnxzF997EydnV+JfyXU1fOKYlEpOL5nCFm46zA3PAXvISt0Xr0ENW+WOITtKFUEkeEktG9kmhkN5fbZ5SSSu5f/FsrvkT+1LnnwGkFOQ2exjeqZlHpBLmNB9GNfnDLnnIexZlllQvHm3tTa66YG2kJFzCzdECFd9JTtLnZk63Xew7NS1IcE1E8+Bb6PKEJBW78RMncbmxbf50/g9tIs4lgAxbOMHB9OZGNoEuD3Iv1kV4hk9OBON4iHLlZG012M8IVGckL146qVmfKO2u55D3GqvN2tKDUuhwlh2AV20gkQux4gTBBjI25dz7+ZQFizl+44VWRMMByLTXm8MNo1VWpRAm4wnGSG4J6psWZY3ZFBRJrCCW3NpJ7eHOGfrQT3NcsyzKLQ+Ulet7dvshT0QdwzIBkfoehDAZkvNY0ClNp9bUXxpryHqLFUOHJ43ZBN9llLHSqtNDE2eD0SsnhYMYZxHfXyUGtRnDz0IQNggWXMgjbWv5KHrkudlOgeth9JMClcPjamb3lvyawmlDzANilJrYyrGDi4xihZMsH4lwUXMd8q5y9yVL+wAkaJQcntOqqgcYrBUQEgWBRgvzJikgUsMgHeDajbw4y+ThFMM1ooIozyFE24x2CsjtJvlNnEOf9qv58RVR8+L2dtnCr8RZTvJMHNcjxbKEyZddfy3P8+USuxRFInPqCiKoiiKoiiKoiiKoiiT5x+58vqZVePedgAAAABJRU5ErkJggg==", BA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAA7JJREFUeJztm8tx6jAUhn/fuWkgWZBV6iBtsODWkBQBQ4pIaggL2oA6WCULV8BCd2ELhCzbMhifI/x/M5kMfunx+zx0bAOEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghZKRk0h24lkU+N+7vj6d10mP6K92BS7FCrA778x3l9lSFSbLTi3xuKkJ4LB9ekhTlj3QHurLI52b1+A2gmHQfu231+F1xZymQ3B0EwBhjgN9XAFVRjpYz2SLLMiCxMSbV2RJjfqZRB2bPOyCxMSbnsizLhxdgsq3umGyDriwVks2yjoRESZikzNnBLPI5gGraa63j42kNJDi+ZF2WxXVPKbsqS/ouC/chhCV5C7k3UrQQs8jnWB32WD68BGPI6rAH8jk+ntYGicURWogyUrp7DADY7AoAVt9rYOYtEjc7LP+djimzLSCRsWruZKUOZT69Db4Yls3u7Gf2HjxK5dg1xhADeJMfsIIoyvPMrHpe9n4UXJUw2mKIMZ8tYrRtjzzHaUdVRViTIEXR0J3Mpkm/FO/6ZaFSjSgazPU4GbFV3L4pq8LHnyKd0NA46krpbTEi1nIuuI50yV6TyypwJ3E2Bd5M8edOXkxQ7+s6AyNpIUU25VuInaS3Grf+1bHLbdfxrMRxXyJzI2UhRTYVEsPezXU07etyrLUWz0rMz1Q0+9LnsoZ84KTw4ZY+QUaOhJ8sMis/6AKnO7Z8o6SVuqAcm4X57Xl9ksi45AQJYWNIF3y3EytmRJtjECT6FZ4o6mJAV1EaGFoUxhBlDClIv9YxEEPXujSW3+Pp0TVpQY/LkixjKCqhyFmInYS2p359l+CDpZmsuv8Wpf8IhrSQzCtzNzObBksbV7HZnYqMMcdi+CxLTwxpesrni3Jp+b1OCCFrCKFrHTLZhquwt645NSQHXIfEupRboCC46w3qfVjF72v9JFvRXetQ4LrkLCQ0eDs5fa4vrMX5VveVFX9WMAXWAUgH9TpRJtvT/1u3J5zm+sjHkNCd6Ypyh6vxJoa2kCx73p1nWk13ZtfnI224FhdxzTGU34FLiox9uS43yEe4qHEJEpqYSxeAXWlqx+nXeATp+iJ1X8LEXPv8hWxgBIIATaIMlfW0WKiEGCINOpjK9x4hmlLVG50rJYZYow5xogDXW0ykiJJiiDbsEC8K0F2YDitwaTHEG3c4fZLQRZwe8D53E58P8Q4EiCr1tglX811h8NDoIwdAVWc60iZcymMjhBBCCCGEEEIIIYQQQgghhBBCiMd/ML9eI+BDYUAAAAAASUVORK5CYII=", kA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAActJREFUeJzt2kFugzAQheFp1UXEtidjg3IaInqZRt3kZGyT7NyVU2NwcAQVfuj/pEitSCSHp7E9DmYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOR723oAS7V948L/vz5/5L+TrLZvnLt9u1AckJr3rQew2OH49/f9vN04VqIfSCgMR5R+IDuoitDH1gNY6nS9WLf1IFakXyE7I18hXVUP147rZbvBrEAyEL+17ap6dK2rarPenBk9yb9r+8aNeo+oD4l7EvW+pFht38wG8CyYrce/K48w4kBu3+OAEtVDKCsZTFFT1eFDCV+JgBRCKXrb2/aNG+2i5sTvPRwfzWNX1aPDSGQaTVPP1o5UdSSulxyKxrZ3rkJyrwscsxQ9Za3tJNA07j+QoCqmGsnSaATib+rUlHM/D18xsSN5jTXEm7q5uTf8fpYIRyOQV29kWCn+swJhmKlNWbkOR6mdVUgjkKC5e/lzIpUhYdAcpo5O5og9lVJ+hYS7J18pudUSv09g+ir+B5zHeVYstUY8eSzodL0U/6NV0YPzkqF4Gc9mKYRhJhKI2fiR0bmuOz4mUQjDTCiQ2NzirBIAAAAAAAAAAAAAAAAAAAAAAADAQr/gsiaUUMmhEAAAAABJRU5ErkJggg==", RA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAQlJREFUeJzt2E1ug0AMBlCn6iK9YXpCckOymy76IxipKaSRGFvvSSxgZfjwGCYCAAAAAAAAAAAAAAAAAAAAAEo6HV3Af7V5asvz09t76nt6ObqApzhfPo8CagRSiEAGI5DBpB2AP8O8nx23a0TkHe6piu6/qO4O8q9gInKFk6bQNk9tFcDigf95/XZNFcrw2jy1leX5PK2P3/TdNaicQ33ZERuXLZ7k7lu/V4IuydkhheULpPgylC+Q86V0KK9HF/CQrYO8yIbjcB4e7N3n8dH3sUW+JSui9JKVxurHb2/HJOmOiERbJxE79rK6Dsq0bZKm0G973/ZMYQAAAAAAAAAAAAAAAAAAMIgPNT9HzAKUgvAAAAAASUVORK5CYII=", UA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAU1JREFUeJzt2MFOwkAQBuCtJ/XtvBR9mRKfptx8snK03NaDQCoWQii6TPm+hAAlaYYd/p2WlAAAAAAAAAAAAAAAAAAAAAAg5Zxz7ttcug628s5BU/JAqdouVZUuYIpzFryqqlDf8aF0AfwUtiERt6NzhIpzStMbcetbWIiERB3QlwjRkJ2pTVmuF9cq5b7lawhyvxIqIRfbrNLy86N0FfOR+/ZuEhLG2ALPsSlhtqyrDOTH1+nn+GNhGpJSSmmz+vlMOblvx7epU8cHStc/O0cX/tRMGRwrXf/sNF2dc9/mpqv3j8MmNF39qyel656tfUIOkzB4P9aQpqtDNSXWUE/p+JXSZpXen18M/P82loBTqYlw7zEULyHDBGxfH/4tUj29Vcv14vvzAPce4Y398qMmYhbGFn038EvUwwiXuAAAAAAAAAAAAAAAAAC37gv48l2z+Bjx4gAAAABJRU5ErkJggg==", OA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAmpJREFUeJzt2jGPokAUwPHH5YqNpfuBtqcz2eA223tfAgOf4noLvY2Jnb0fCEq1mysUFoaBA8Tjkfx/iQmMkgzz5g3M2xUBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4n8IkMLJZmbH78Qw/xu5AX6GfSjEoYRIYc9maMAkqbZlxetqNN3YH+igOeiaaLURePhqv8zxP/f3+HLsDj2oTCBERue6e35kBTCYgDy05152sz4cBe/M86lM4Yy5b0yoTbPfMcAUkfv1Sd/+Teaj3muETWaaKVAfEGFN+c+o6wC8f+SeaLUpfxcf5UN0clLqULSo9N+7PgdYPcYd1usyPNS5XIsozpMQxy7vKrteaHSKKA+Laa/TNjMr1n79VZoc69s66dHwXJkGlrZPLdhI7dhVcAbDbwiQwlcB1NPZ9TkbtIF+235+GYLXlXA5R1bgcNQWrK5at9uoGuFewGmjNEnVvWd7+VN0AttkQXnedNo6PvkI/i8ri4vp8kMg6F5HbgNuvvnabKyiua5RS+T6eLSdNs7hY24rmf77b02Xp3FXp1bpLF1GaIZm8VFLXfp/5xZKI67dToi8gm5URSfNTb3/Kj0M/dV1RCpq3P0ksv0RExLy/STRb5EHRnBkZdQGxBz300/oscbSF/u3YWa/arIz2som6gPRVqQT7y8ktVyJKH+pFdZs4b3/Ksyk+zsW8v92+yAJS85dC7cuWun2IrWmWx8d5dWmy9iPx65enudxuUz1bMnaWrM+H8kzfrEyeIU2/wzCKxcW6kkdeAf7H7zAA138lAgAAAAAAAAAAAAAAAAAAAAAAQERE/gL4iAFGuCkFvAAAAABJRU5ErkJggg==", MA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAtJJREFUeJzt2jFv2kAYxvHnqg6UMflA2dmQIkqG7PRLGMGnyE4laITElp0PBGNguw5wrn0QG1OUe93+fxMIA+Yev/faZyQAAAAAAAAAAAAAAAAAAAAAAAAAAACD/G7uU+8DCvxR5Ta7uSe4TxIC+XDAZyNfF5rfzWu3wYV8JH492wwqB7sYBoHcQBxIlWwz8HEAJUxrf69JIHVKHzwbEc41bpZGqI7ZyGebAWFco3L6aShMZ4TxF26Whvd5GOdCTv07W+GW1VEXVOrfWuRSfbGVI9M5l2wMzvmS7Jv3i2RfbWofIkmPjtRVYq06pJQVouOAGDxKUzJxhCSrlP1C7tuTiTEIklZILkWV7BdSZ1i/ePnfOV45hyV0ExKGk75Cnl+cJI3fV6n35CDxNJY+EEnTt7s/T1I1+f1CzjmXuqeYamilqaIzzOf5WpduF79HoqlfrMkgh/AashaGZCmQz74/0bSiPomdQFRu7Fc1+f3C5HJIE19T70CQ9bb54zyMJj2k6rl0+jlGgzMRSGjmcVWM31eaXPIBH4VWHHSjAcRMTVnBpNuXdDgdrp26qiqoM6x83eLdQxNnGXGFTLr9yiDCdYt/fLj6dDcYv680vX81MQ6ShUBmI1/sH9JhwP3jw0kok26/HEBdj4mnqYqpzcopsIkeUhSOfrdcyz9GlRIP6EcXj/vF+QorVEO2Gfg84M5Q0tMtf8bVkgeS9bblpZPj2pYkjXtbP+n25ZZrxVWU6wzlfv44TF/hfWfCiKfB6f2rm+pV2WZlqo+YKNM6oflO7n6dvrhfyC3Xh+0KoU3f7pT1tnkQlvpElVbspBRNMQXj7XdJ0QKlCg3fUH/455zcLwn3UM7dR2npn+KS95AmiheK+TSUr4GtyxsXelGbtG6n/W7u3XJdHvDo1Lkt/eIck1fqteKj//nFxT0EFvDPdgAAAAAAAAAAAAAAAAAAALTXb7LTHFrMPO3DAAAAAElFTkSuQmCC", FA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABLlJREFUeJztnLFu2zAQhk9Nh9Sj+jxGd28GgiAF0tFBtsxZLFhv0KlBMrpA0iCFN++FnycenSwFO1hUKIoUaVni0en/AQEMWZSJ+3nk8XgKEQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIDDYvp8Krj7ABTEy73YSZT5paD55UGL+JG7Ay5mgzHRM4n882Piunc6WhMRUd57r/rjA3cHfJgNxu7p6+JIGD9bmD6fCvFyL8TLfVQedRCCEHmIMpyYP2tIIWaDcZfd64zopywV6/RVeES+TI3tps+n0Qqg45yXOdnVkNlmQURvwkxHa3K1zzYL8lmfQhFNR2z0Pccnn77Wve32L5td4p6ydg1hj8/M118fjJelRxHRVojhhOjbDesgjVoQGcY6sQmhfm8QJV+mZaCQL1Oi1d3OfeyaaAXxWj9cQuwK41QliVIQpxgdCTEdrasBgGG9qq0xPcM+InR6E8OyjjTBEYHFIYiyeIvzH9XvVEPu4xktBAntHUQBpyxn+GoztmVBfq8ES51UQkwdn5Ef2Dsa+9sjwQRh2w239C6u/gZNLlpHXZPRGKYrLu8gCixI/vkx8Rbl9aF6rY0wB7j2sLjlXtlX37VEF8PUzpFS4Zi22MLevVPiPnkrH/E0UbLN4i1DLNu/PgTbk4QVRCbwCnzS461p4UmlGDt6U5dChT0xvP2b6Am8XhbQFiFyxTN0DGJkmwUln74mXXtN+CNcRRSZR+KMaow0BBN9CSHhOVMP5SkuFGPXjn+1KK9vISR8RQ4GUXRqIh2fvf3tgx5S236PwgkhYU8u6pUkch43Rjs6PhGSo41sR1Q9iyf6z8Jeia20x2lYIqtxdy2MmKW/yuclT39Yj3Hjr8uy7bY72IXXxDs+I3HyZe/n7gOvIJYKQ+MCq352iOETIFTuiSjFwu4huvFtxW4+Qqjts83CukgbBVOfz1iwzXumrpV8lmKs7ihrsYvfGjo1XGtuo/6O6Rkh4RPEoyBaGtNHmGyzKEt58hURDSfeZUS6aNPRmq2Cnk8QxTvyZVoznnrNNcq3nqWN6tUd5bT9DTVnFl1WQIMnvNOSjERK7K9MWz6jvHK/RGvXVOtrEyhfpizhbzSCEFXrpJzYdvnDN69QUZ/blGVWBeIQhUcQUxRTeIQL2ygvS0EbBKl5oeV5tecGFCV82GtbzIcTZ21taTwtnzUbjBs9osnr8mVKydMfYzhcPjdgGBzeQ0zTlS5EsQbohhQnX+qpFGVvklyde3lZDdUDCuPrnhOqaC58lCUNpoqgFznf3lA+vxTT0Zry69/tjNyEEjDUvKcQJyeifJ6W4oSCPbnYiCoKEYnvP7fXlbNuleTqfPvBJqAcBKoYzO+D6ETVGSNSlGXamPjLNotSOCKqiqIJQcQX1rqIrkNWCmFMEVEZDRGZA4NCiNlgzBI57UKU74cY+XaTkOHsRBpYjvzZyU9j82yzKM464nnB00TUnatReImKvqfQKb+P1CN0DsdDDFSmnosjka8sN0bwqpovB9NRSfmS5vXvuqFNe5wD8QwJ+wFVG4xiEHlVsoCu8ThHoYsj8R7+VdP7QooCAAAAAAAAAAAAAAAAAAAAAAAAAAC65x9TXHckk+SwIwAAAABJRU5ErkJggg==", QA = "data:image/png;base64,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", zA = "data:image/png;base64,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", qA = "data:image/png;base64,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", HA = "data:image/png;base64,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", LA = "data:image/png;base64,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", XA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABRVJREFUeJztnL1uIjEQx2ejkNc4gURHRRUpDS9AneqaPNg1V12dF6CJREVFhwS61wjFXnNGE2N7Z/yx683+f1IKYGFtz4znw7MhAgAAAAAAAAAgZvZM7dBjAAAAAZv1qg29BgCACBAJjYCx7vdjHTcYA9AuAL4zCE4AAAAAAAAIgqQYAJvYRLKx3zDmtTsc7z7rk8161S6W89vr8+lCRMOPqzSdk9usV23uRZg9U3vd++9tC4NzPl1GJ5Su+XKqnNjb6zZo7mMUipQH3wc1F9Nc1jN7prbmMUvxCoTT90SNvwjBQ0k+vrELpVqz79q2iIh+/XlviO6FIN2vDdxnDb0diiykBKEtRppIbdardrNefXGYKcIgcm+HfTKIQEJbTCjCCnHdU2OEkZoZD5lZP5b8cb7YGs09ny6dmhryM9otR+Kz+qKYhdia7xOOT1ChRXJ9FhtluYQ3pA8pYiGShZFYjERzfYunScZqymkGc+ouZs8UXRXgPsS89t2j5pwl2kJK1JrMIu4Ox4Y71o+n45frXj5XyfeqlVtUoplcVyR0Pl3uFpFrrPm+JOb3abJtATXlEimoB60JS10L47Isc42r0iwViJ1ISoUiqW5LFDCXAjwQ6coNmhxhsZxHxfTmO5px8QAgJYx1jbdrzovlnN5et21K/mK++0ikz25TyRX329rNf1eqsfZ1LouWjmexnNPucOy+MDAOlVOP1QDuo2yH7RqU4bqnxmUlLgXKsWWk1sRyoLqhpODHidFYF7EZf+w9OD9/bFW/o/UntpVXlYf4MDnGEBr7+++7+juanWR3ODZcgKotS1Jj4tdODVe4r0VlIbvDsZEsdClhDJVdn0+X21/oGi6M2LGqM/X/5tUS3YeDsYLgdSczEdf2VHLL8gUQNqUtP3qC2n1Sem1IICUxyZ/tM7RnLMZKYsdfnUD6xJeBhyKlrnmnzjWqdMJvXHqAJYktiUjzqBiSz0P4IMbWVCwpibgy793hePM3uSvPsU5d/dl3gjv/j6ejs5JNdG9hEv+YnBiazo+xWYems0Xzm3YHi3ZdimbqtQpKWzC0r3edTPr8EX9PUm0YRemkRuzFDfkjjQJMYs+34QskaTeS+EZJ4VXyW5O3EFfmLSmVSH7HRuJTijbK1YqdQ2nLIb5jX03x1UeyQDSljqHKIj5STgdLkbQw2hO2Pg6ahkLilyStUkW2LF9ylEsIrhCzptYfs/B8DaQkCYSXrK97arSd65p2T04g3s/+PKQUV23PJYiu8SVbSIrWxzzLEfp8aKHkIPuW5etM569jhCh1uCmtODnQdNW4yJqH2Af2RPd9uUTjfQ5QqhQpFpp0QOVrCeVIW0El9+OvQ77KPHtYG5KwX71ldRTRetu/fUlYn90umqZxIpkSqjsXQ5pZUii5opgYfD7QrEXOeYt9iDSkta8xJ2qclMis7wjKteW63ottLLcRCySlRvPyucrafZhTKG+v29ZVqR2qJahI2Msns9uX0WhXeJlTUFLFydW/bBALRFrJtMPc2GxcQo4FSNHyUM4Rizr0DAnF15g8pkKiKzTt8zEF9ZZlF86+vP+UZ1BDYf+HCbPwfSqUSiDcRFMd2nd5SDM32VtJQ0/f2t/nVlY6u5YqgC+b7utwLTrKStVo00VvMt2SeP7jjzORy31mo7X+SWwTMU3VOe+nuc9kuk5sK6z1Ca9JdZ30KYTYe03CQvqO4BAxAgAAAAAAAAAAAAAAwNT5BzZPhVZ/4M1WAAAAAElFTkSuQmCC", VA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAA0xJREFUeJztnDtyIjEQhputvQhUkU00J5gLEJNzMOeOfQFOQERGFRxlNljkkuXR+9WS/i+xXXgGTf90q7slQQQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAODArvYATCzztB6O+++/n48XERFdb3fW446B7YOpYsg8H69uRflTewA6dGKI15Z5WgsOpxh/aw/Axsfn1w9PuJxPK9F/Ua63e/L3kz2zhiey9ZDn4/VLDKKfAqX2EjVMmrw0F2wFMX0yhSipDbb1nqVDI/uQZUMYLFVo+fj82tWcn9h6SCwxRpXFLT2HNJ06ykbvJQ3u1kNapQtBevEOIo9JfcQ2Rg2cjGlqYxDZCyhxfepCa5mnNfUHwnbPWFvYsF64NYCtgk38rzqYHEbTEVtlqyn01thFp8BGqDDWC9QB6MQQlBRARR1rDo/0KUZtttrCqzB0eYOac8rz8fqu3kOM4Yru3q7eY8KYZbXQUV3maZXHqeuBpeBw3Bvvrb4WYj+jIDWaazFcb/ddTg91ETpWlOZ7WRzT7ph+mNFDRK0BymEU5Hq77yBKWawh6x0S2E/uvuQqVlV87+38zzXri1To6ogc9QpR2Pzm1VxsIQ0O4XDc0+V8WlM+X6jA2pC1pXLrHmJrAV3OpzV240RsJDE20YjaF0FGrqRzVvIxsBxUDuT5g6sYRJ7rIeL31rxGHnspMUI7z0lWDNV+0uhs7e9ytU8XS7iulChydam1a1+wqdATSs1wKycSLqFrCEEEtYpbn4WzoQSpiasoQ80hNXHN7iBIQVxEYb9AtZW1tH6CypTtsfcQXQrZat1jS73ZeogwOLc2R6oen+76KEFyHf/qsbFJ5LZ8ESSI74axELiKETou1+I0WcjiasDaFNsGJE9OEENPUdu0mulwxnv3e+s1AHeCzkGMKEqpxqT2nIctixpRFB0p93j9mtRdDuhczqc111dbtIiw1/tn2l0nvgd0ekE8d+jz+i5E6TD2skYRIwXZbLXM05riJFBrpNqokaUUQH0RDgTpjOxzRO0vBGuNoushHMTAB4T4hsDURxBAAnKLIrJWbCV1JGetJYdH130AwwvCDbabHHrg/UUGRMR3Hh0aiAIAAAAAAAAAAAAAeuIfG3gINg3W6n8AAAAASUVORK5CYII=", GA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAolJREFUeJzt3DtSwzAQgOGF4SLJTDpXPoEvkDo9B6On5gI5Qap0zMBRTAFiRPBDr5Vk5f9maEIejleP1cqOCAAAAAAAAAAAAAAAAAAAKGfou9HlMWSwdOIJSoVaDMpT6QOIsT/s5Hy5Jn/foe/G/WEnIiIf759yvlwfkn/IjMdcH6Th5fXtQaOX2AEwgcklW+S36Pl0HEXy95ImaM0nQ9+NOeeqTQ9Za1KdSHpHgFYyrqZ7CApppXeIeK5D7Pxc5Dv7ECk7xrYUDBGPgNjBeHl98w6Aeb1GCpn6/Ya+G5fe87Zh3lJPk4e+G01O7vJcl8e0+Bzr3Ovt45069ufTcTR/S/9T+96+X7DkMBITDBcm4EufsxQwJObaA9UCsoVJM+dq2uckhwxbq+uQ3MW12vkkNOa5PkHZdPndaKm0sdpDzFoDeawG5Hy5quw5IBJBCaN63giKPu9qL0HRtZhlmZNvZzEtZTSa9bVQXmlvLQcd47ZIqnHVCjzEFh8BAL+8Jmk75W1hgtcWcklqsuLiVIp8z8w2sJ3FrW0Ni3AZkIq5E09jtVBhwKK5BrKJDaqpy25qKneE+Pk+/4a2TQRk7nowl0lya6oOiOnWc/vYpYKhmVFWHZDWWr9tbmu86oDUquWGcrfmsiwWhpWJ7nolbyHeqqXsMHgOWbskH9PWKgZJJvWQ+0Xu1doIEhUQhig0z6l1T91bSM8ogCs0/ipawmf/wI9pvLHnbXJh2GIVVZsZ0veHHY05lVT3Bcb0FEonCmLWZVR7LSnvFmPIBzRk6VZUhN1ln0NqCAYNROpdaKr+SAzCaAfFZxXPOkT093PMkOiyiicgmbgGnYBkxM+UVIgEAgAAAAAAINgXIA5u7FTs1dIAAAAASUVORK5CYII=", WA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAolJREFUeJzt3DtywjAQgOElk4vADJ0rn8AXoKbnYPSpuQAnoKLLTHIUp0iUUYgfeq0si/+bSUN4GK8eq5WNCAAAAAAAAAAAAAAAAADgqXRt07s8hgymTjxBKVCNQXld+gBi7PZbud7uyd+3a5t+t9+KiMjH+6dcb/dN8g8Z8ZLrgzSc3y4bjV5iB8AEJpdskV+j0/HQi+TvJVXQmk+6tulzzlWrHrLmpDqR9I4AtWRcVfcQLKSW3iHiuQ6x83OR7+xDZNkxtqZgiHgExA7G+e3iHQDzeo0UMvX7dW3TT73nY8N8pJ4md23Tm5zc5bkuj2nxOdax19vHO3Tsp+OhN39T/1P73r5fcMlhJCYYLkzApz5nKmBIzLUHqgVkDZNmztW0z0kOGbZm1yG5i2ul80lozHN9grLq8rtRU2ljtoeYtQbymA3I9XZX2XNAJIISRvW8ERR93tVegqJrMssyJ9/OYmrKaDTra6G80t5SDjrGY5FU46oVeIgtPgIAfnlN0nbKW8MEry3kktRkxcWhFPmZmW1gO4ub2xoW4TIgFWMnnsZqocKASWMNZBUbVEOX3ZRU7gjx833+DW2rCMjY9WAuk+TaFB0Q063H9rGXCoZmRll0QGpr/baxrfGiA1KqmhvK0xrLslgYFia66y15C/FaTWWHwXPI3CX5GDZXMUgyqYfcL/Ks5kaQqIAwRKF6Tq176N5CesYCuELjr0VL+Owf+DGNN/a8DS4Ma6yiajND+m6/pTGnkuq+wJieQulEQcy6jGqvJeXdYgz5gIYs3YqKsLvsc0gJwaCBSLkLTdUfiUEY7aD4rOJZh4j+fo4ZEl1W8QQkE9egE5CM+JmSApFAAAAAAAAAoBZf6Exu7Mzk5D8AAAAASUVORK5CYII=";
let YA = class {
  constructor({
    app: t,
    viewport: s,
    mainImage: a
  }) {
    this.app = t, this.pixiViewport = s.viewport, this.mainImage = a, this.size = 7, this.images = [IA, TA, DA, EA, BA, kA, RA, UA, OA, MA, FA, QA, zA, qA, HA, LA, XA, VA, GA, WA], this.textureArray = [];
    for (let i = 0; i < this.images.length; i++) {
      let o = PIXI.Texture.from(this.images[i]);
      o.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST, this.textureArray.push(o)
    }
  }
  async boomWithDebounce({
    x: t,
    y: s
  }, a) {
    await Sn(V(50, 500)), this.boom({
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
const JA = async ({
  coords: n,
  dispatch: t,
  repaintReward: s,
  amount: a,
  state: i
}) => {
  var r, c;
  if (!a && i && (a = i.shop.available[7]), !a || a === 0) {
    t(kt());
    return
  }
  C.mainImage.pumpkin.boom(n), t(ca.useProduct({
    pixelId: gt(n),
    productId: 7
  })), t(ra({
    product: 7,
    amount: 1
  })), (c = (r = window.Telegram.WebApp) == null ? void 0 : r.HapticFeedback) == null || c.notificationOccurred("error")
}, KA = () => {
  const n = _(),
    t = 7,
    s = l(Me),
    a = l(d => d.shop.available[t]);
  l(d => d.main.fastMode);
  const i = l(d => d.main.currentFastType),
    r = 10 + String(a).length * 6,
    c = [I.button, I.fast_type_button];
  return i === "pumpkin" && c.push(I.fast_mode_button_enabled), !s || !a || a === 0 ? null : e.jsxs("button", {
    className: `${c.join(" ")} ${I.shop_button}`,
    onPointerUp: () => {
      if (i === "pumpkin") {
        n(kt());
        return
      }!a || a === 0 ? (n(Ge(t)), n(We())) : n(ha("pumpkin"))
    },
    children: [e.jsx("img", {
      alt: "img",
      className: I.button_image,
      src: _o
    }), e.jsx("div", {
      className: I.available,
      style: {
        width: r
      },
      children: !a || a === 0 ? e.jsx(B, {
        children: ""
      }) : e.jsx(Ln, {
        number: a,
        fontSize: 11,
        fontWeight: 400,
        gap: 3
      })
    })]
  })
}, ZA = "/assets/particle_rays1-mrHjO6Jg.png", $A = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAB40lEQVR4nO3dQU7CUBRA0da4L2Hl1JXVidP+0Fgi7T1nSiIoNy+2vo/zuq7rRNaHt75NAHECiBNAnADiBBD3Ofr253mu/3wuYXSlbwLECSBOAHECiBNAnADiBBAngDgBxAkgTgBxAogTQJwA4gQQJ4A4AcQJIE4AcQKIE0CcAOIEECeAOAHEDU8GncV/fMbFVU5NmQBxAogTQJwA4gQQJ4C401wG7r3Uu9/uhzzvY3k8/XrOeGloAsQJIE4AcQKIE0DcJf4YtMfyvbzsa9++bpuPvfJ5/8IEiBNAnADiBBAngDgBxAkgTgBxAogTQNxpbgWPli1Gt2CftbVwctRiybsyAeIEECeAOAHECSDuEgshe5YtjjpJ/K4LHnuZAHECiBNAnADiBBAngDgBxAkgTgBxAogTQFzucOjWZtERW0VnZALECSBOAHECiJvXwYbEVT4SvW60BGMCxAkgTgBxAojL3QncuxV89V+ETYA4AcQJIE4AcQKIy10F7LW1J+BsIJcggDgBxAkgTgBxtoJ/2QomSQBxAogTQJwA4qyFB1gLZ5MA4gQQJ4A4AcQJIE4AcQKIE0CcAOIEECeAOAHECSBOAHECiBNA3PBcwFH/ZZP3ZQLECSBOAHECiBNAnADKpmn6AbwwPcfPo50AAAAAAElFTkSuQmCC";
class eg {
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
    this.backdrop = new PIXI.Graphics, this.backdrop.beginFill(0, .8), this.backdrop.drawRect(0, 0, T.width, T.height), this.backdrop.endFill(), this.backdrop.zIndex = 20, this.backdrop.interactive = !0, setTimeout(() => {
      this.backdrop.on("pointerup", t => {
        const s = this.store.dispatch;
        s(gA()), this.viewport.unlock(), this.destroy()
      })
    }, 2e3), this.pixiViewport.addChild(this.backdrop)
  }
  async addGlow(t) {
    PIXI.Loader.shared.resources.rewardGlow || await this.loadResource("rewardGlow", ZA);
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
    PIXI.Loader.shared.resources.tnt || await this.loadResource("tnt", $A), this.image = new PIXI.Sprite(PIXI.Loader.shared.resources.tnt.texture), this.image.zIndex = 21, this.image.width = 1, this.image.height = 1, this.image.x = t.x, this.image.y = t.y, this.pixiViewport.addChild(this.image)
  }
  async loadResource(t, s) {
    return new Promise((a, i) => {
      const o = PIXI.Loader.shared;
      o.add(t, s), o.load((r, c) => {
        a(c)
      }), o.onError.add(r => {
        i(r)
      })
    })
  }
  destroy() {
    this.glow !== null && (this.ticker.remove(this.glowAnim.bind(this)), this.glow.destroy(), this.glow = null), this.glow2 !== null && (this.ticker.remove(this.glowAnim.bind(this)), this.glow2.destroy(), this.glow2 = null), this.backdrop !== null && (this.backdrop.destroy(), this.backdrop = null), this.image !== null && (this.image.destroy(), this.image = null)
  }
}
class tg {
  constructor({
    app: t,
    viewport: s,
    store: a,
    mainImage: i
  }) {
    Mt(this, "isCoordsInExtraRewardZone", ({
      coords: t,
      x1: s,
      y1: a,
      imageSize: i
    }) => {
      const {
        x: o,
        y: r
      } = t, c = s + i, d = a + i;
      return o >= s && o < c && r >= a && r < d
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
    if (!(i && i.ID && i.PeriodType === "round")) return Wn.neutral;
    for (let o = 0; o < this.items.length; o++) {
      const r = this.items[o];
      if (r.type === Se.my || !this.isCoordsInExtraRewardZone({
          coords: t,
          x1: r.x,
          y1: r.y,
          imageSize: r.imageSize
        })) continue;
      const c = kn({
          x: t.x - r.x,
          y: t.y - r.y,
          width: r.imageSize
        }),
        d = _t(r.imageData[c], r.imageData[c + 1], r.imageData[c + 2]),
        p = r.imageData[c + 3],
        A = this.mainImage.getPixelColor({
          coords: t
        });
      if (p !== 0 && A !== s) {
        if (A === d && s !== d) return Wn.fail;
        if (A !== d && s === d) return Wn.success
      }
    }
    return Wn.neutral
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
let ng = class {
  constructor({
    app: t,
    viewport: s,
    store: a,
    ticker: i,
    readyCallback: o
  }) {
    Mt(this, "getClickCoords", t => {
      const s = this.sprite.toLocal(t.data.global);
      return {
        x: Math.floor(s.x),
        y: Math.floor(s.y)
      }
    });
    this.app = t, this.ticker = i, this.viewport = s, this.store = a, this.pixiViewport = s.viewport, this.selectedPixel = new Fm({
      viewport: s
    }), this.template = new bA({
      app: t,
      viewport: s,
      store: a
    }), this.worldTemplate = new jA({
      app: t,
      viewport: s,
      store: a,
      mainImage: this
    }), this.tournamentTemplates = new tg({
      app: t,
      viewport: s,
      store: a,
      mainImage: this
    }), this.reward = new eg({
      ticker: i,
      viewport: s,
      store: a
    }), this.bomb = new th({
      app: t,
      viewport: s,
      mainImage: this
    }), this.pumpkin = new YA({
      app: t,
      viewport: s,
      mainImage: this
    }), this.imageData = null, this.texture = null, this.sprite = null, this.timeout = null, this.lastPointerUpTs = Date.now(), this.lastPaintCoords = {
      x: -1,
      y: -1
    }, this.initImage(), o(a), this.initEvents(), this.store.dispatch(st({
      command: Be.start
    })), !mo() && this.loadAllChunks().then(() => {
      const r = a.getState().main.startParams.coords;
      r && (C.viewport.viewport.animate({
        scale: 60,
        time: 400,
        position: {
          x: r.x + .5,
          y: r.y + .5
        }
      }), this.selectedPixel.draw(r), this.store.dispatch(on(r)))
    })
  }
  initImage() {
    this.imageData = new Uint8Array(T.width * T.height * 4);
    const t = PIXI.Texture.fromBuffer(this.imageData, T.width, T.height, {
      format: PIXI.FORMATS.RGBA,
      type: PIXI.TYPES.UNSIGNED_BYTE,
      width: T.width,
      height: T.height
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
      if (r - this.lastPointerUpTs < 200 && !i && !o && (this.pixiViewport.scaled > 50 ? C.viewport.viewport.animate({
          scale: this.pixiViewport.findFitHeight(T.height),
          time: 400
        }) : C.viewport.viewport.animate({
          scale: 60,
          time: 400,
          position: {
            x: a.x + .5,
            y: a.y + .5
          }
        }), t.data.originalEvent.preventDefault()), this.lastPointerUpTs = r, i) {
        const c = t.data.originalEvent.touches;
        if (c && c.length > 0) return;
        const d = {
          x: t.data.global.x,
          y: t.data.global.y
        };
        this.lastPaintCoords = a, er({
          charges: s.mining.charges,
          dispatch: this.store.dispatch,
          flyCoords: d,
          paintCoords: a,
          activeColor: s.color.active,
          state: this.store.getState()
        })
      } else o === "bomb" ? CA({
        coords: a,
        dispatch: this.store.dispatch,
        repaintReward: ja(s),
        state: this.store.getState()
      }) : o === "paintcan" ? NA({
        coords: a,
        dispatch: this.store.dispatch,
        repaintReward: ja(s),
        activeColor: s.color.active,
        state: this.store.getState()
      }) : o === "pumpkin" ? JA({
        coords: a,
        dispatch: this.store.dispatch,
        repaintReward: ja(s),
        state: this.store.getState()
      }) : this.timeout = setTimeout(() => {
        this.selectedPixel.draw(a), this.store.dispatch(on(a))
      }, 0)
    })
  }
  async loadAllChunks() {
    const t = await this.loadImage(Dc),
      s = this.getImageData(t, T.width, T.height);
    for (let a = 0; a < s.length; a += 4) this.imageData[a + 3] === 0 && (this.imageData[a] = s[a], this.imageData[a + 1] = s[a + 1], this.imageData[a + 2] = s[a + 2], this.imageData[a + 3] = s[a + 3]);
    this.updateTexture(), this.store.dispatch(st({
      command: Be.finish
    }))
  }
  async loadFromCentrifuge(t) {
    const s = performance.now(),
      a = this.getImageData(t, T.width, T.height);
    for (let i = 0; i < a.length; i += 4) this.imageData[i + 3] === 0 && (this.imageData[i] = a[i], this.imageData[i + 1] = a[i + 1], this.imageData[i + 2] = a[i + 2], this.imageData[i + 3] = a[i + 3]);
    this.updateTexture(), this.store.dispatch(st({
      command: Be.finish
    })), console.log(performance.now() - s)
  }
  async loadChunk({
    chunkIndex: t
  }) {
    const s = T.chunkOrder[t],
      a = await this.loadImage(`${ti}image/block?block_id=${s}`),
      i = this.getImageData(a, T.chunkSize, T.chunkSize),
      o = Pa({
        index: s - 1,
        width: 4,
        blockSize: 1
      });
    for (let r = 0; r < i.length; r += 4) {
      const c = Pa({
          index: r,
          width: T.chunkSize
        }),
        d = kn({
          x: c.x + o.x * T.chunkSize,
          y: c.y + o.y * T.chunkSize,
          width: T.width
        });
      this.imageData[d] = i[r], this.imageData[d + 1] = i[r + 1], this.imageData[d + 2] = i[r + 2], this.imageData[d + 3] = i[r + 3]
    }
    this.updateTexture(), t < 15 ? await this.loadChunk({
      chunkIndex: t + 1
    }) : this.store.dispatch(st({
      command: Be.finish
    }))
  }
  updateTexture() {
    this.sprite.texture.update()
  }
  paintPixels(t) {
    for (const [s, a] of Object.entries(t)) this.paintPixel({
      id: s,
      color: nt(a)
    });
    this.updateTexture()
  }
  paintPixelsFromCentrifuge(t) {
    Object.keys(t).forEach(s => {
      t[s].forEach(i => {
        s !== "#171F2A" && this.paintPixel({
          id: i,
          color: nt(s)
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
      const r = Pa({
          index: o,
          width: a,
          blockSize: 1
        }),
        c = {
          x: t + r.x,
          y: s + r.y
        };
      if (c.x < 0 || c.y < 0 || c.x > T.width || c.y > T.height) continue;
      const d = kn({
          x: c.x,
          y: c.y,
          width: T.width
        }),
        {
          r: p,
          g: A,
          b: h
        } = nt(i[o]);
      this.imageData[d] = p, this.imageData[d + 1] = A, this.imageData[d + 2] = h, this.imageData[d + 3] = 255
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
    s ? a = gt(s) : a = Number(t);
    const i = (a - 1) * 4,
      o = this.imageData[i],
      r = this.imageData[i + 1],
      c = this.imageData[i + 2];
    return _t(o, r, c)
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
          p = URL.createObjectURL(d);
        r.src = p, r.onload = () => {
          s(r)
        }, r.onerror = A => {
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
        width: T.width,
        height: T.height
      }),
      a = PIXI.RenderTexture.create({
        width: T.width,
        height: T.height
      });
    s.render(this.sprite, a), s.view.toBlob(o => {
      t(o), s.destroy(!0)
    }, "image/png")
  }
  pixanosRepaint(t, s, a, i) {
    const o = h => {
        let g = 1664525,
          w = 1013904223,
          x = 4294967296,
          v = h >>> 0;
        return function() {
          return v = (g * v + w) % x, v / x
        }
      },
      r = s * s,
      c = Math.floor(r * a),
      d = o(t),
      p = Array.from(Array(c));
    for (let h = 0; h < c; h++) p[h] = h + 1;
    for (let h = c + 1; h <= r; h++) {
      const g = Math.floor(d() * h) + 1;
      g <= c && (p[g - 1] = h)
    }
    const A = nt(i);
    for (let h = 0; h < p.length; h++) {
      const g = p[h];
      if (h < 20) {
        const w = $s(g);
        console.log(`i: ${h}, id: ${g}, x: ${w.x}, y: ${w.y}`)
      }
      this.paintPixel({
        id: g,
        color: A
      })
    }
    this.updateTexture()
  }
};
class sg {
  constructor({
    viewport: t
  }) {
    this.viewport = t, this.pixiViewport = t.viewport, this.sprite = null
  }
  draw({
    arr: t
  }) {
    this.destroy();
    let s = new Uint8Array(T.width * T.height * 4);
    for (let i = 0; i < s.length; i += 32) {
      const o = t[Math.round(i / 32)];
      for (let r = 0; r < 32; r += 4) {
        const c = Math.round(r / 4);
        s[i + r] = o & 1 << c ? 0 : 23, s[i + r + 1] = o & 1 << c ? 0 : 31, s[i + r + 2] = o & 1 << c ? 0 : 42, s[i + r + 3] = o & 1 << c ? 0 : 255
      }
    }
    const a = PIXI.Texture.fromBuffer(s, T.width, T.height, {
      format: PIXI.FORMATS.RGBA,
      type: PIXI.TYPES.UNSIGNED_BYTE,
      width: T.width,
      height: T.height
    });
    a.scaleMode = PIXI.SCALE_MODES.NEAREST, this.sprite = PIXI.Sprite.from(a), this.sprite.eventMode = "none", this.sprite.zIndex = 4e3, this.pixiViewport.addChild(this.sprite)
  }
  destroy() {
    this.sprite !== null && (this.sprite.destroy(), this.sprite = null)
  }
}
let ag = class {
  constructor({
    app: t,
    store: s
  }) {
    this.app = t, this.store = s, this.viewport = new window.pixi_viewport.Viewport({
      worldWidth: T.width,
      worldHeight: T.height,
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
};
const ig = () => localStorage.getItem("canvasFps") ? Number(localStorage.getItem("canvasFps")) : 60;
class og {
  constructor({
    app: t
  }) {
    this.app = t, this.lastTime = Date.now(), this.lastRenderTime = Date.now(), this.fps = ig(), this.callbacks = [], this.render()
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
let qa;
const rg = n => {
  qa = n
};
let cg = class {
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
      }), this.app.ticker.stop(), this.ticker = new og({
        app: this.app
      }), this.viewport = new ag({
        app: this.app,
        store: qa
      }), this.mainImage = new ng({
        app: this.app,
        viewport: this.viewport,
        store: qa,
        ticker: this.ticker,
        readyCallback: t
      }), this.mask = new sg({
        viewport: this.viewport
      })
    }
  },
  C, ki = !1;

function lg() {
  C = new cg({
    readyCallback: async n => {
      var s, a, i;
      const t = n.getState();
      t.device.deviceType, window.Telegram.WebApp.platform, ((s = t.user.user) == null ? void 0 : s.websocketToken) === "" && n.dispatch(Sd(!0)), jg((a = t.user.user) == null ? void 0 : a.websocketToken, (i = t.user.user) == null ? void 0 : i.id)
    }
  })
}
const dg = u.memo(() => (u.useEffect(() => {
    ki || (lg(), ki = !0)
  }, []), Ve.createPortal(e.jsx("canvas", {
    id: "canvasHolder",
    className: `${Em.main_canvas}`
  }), document.body)), () => !0),
  ug = "_panel_1mia4_1",
  pg = "_item_1mia4_15",
  mg = "_active_1mia4_24",
  Ha = {
    panel: ug,
    item: pg,
    active: mg
  },
  pa = ({
    children: n,
    className: t = "",
    style: s = {}
  }) => e.jsx("div", {
    className: `${Ha.panel} ${t}`,
    style: {
      ...s
    },
    children: n
  }),
  at = ({
    active: n,
    setActive: t,
    children: s
  }) => e.jsx("div", {
    className: `${Ha.item} ${n?Ha.active:""}`,
    onPointerUp: () => {
      t()
    },
    children: s
  }),
  hg = n => n ? n.friends >= Tc.friendsForTemplateCreation || n.isContractor : !1,
  De = {
    create: "create",
    main: "main",
    result: "result",
    finalRating: "finalRating",
    pixanos: "pixanos"
  },
  Ag = () => {
    const n = _(),
      t = l(a => a.tournament.activeTab),
      s = l(Ye);
    return hg(s), l(a => a.tournament.myTemplate), e.jsxs(pa, {
      children: [e.jsx(at, {
        active: t === De.result,
        setActive: () => n(Ia(De.result)),
        children: "My results"
      }), e.jsx(at, {
        active: t === De.pixanos,
        setActive: () => n(Ia(De.pixanos)),
        children: "Pixanos'"
      }), e.jsx(at, {
        active: t === De.finalRating,
        setActive: () => n(Ia(De.finalRating)),
        children: "Rating"
      })]
    })
  };
let fn = null;
class Fe {
  static async uploadTemplate({
    blob: t,
    posX: s,
    posY: a
  }) {
    const i = {
      "Content-Type": "application/octet-stream"
    };
    return s && s !== "" && (i.posX = s), a && a !== "" && (i.posY = a), b.post("/image/template/upload", t, {
      headers: i
    })
  }
  static async uploadTournamentTemplate({
    blob: t,
    posX: s,
    posY: a
  }) {
    return b.post("/tournament/template/upload", t, {
      headers: {
        "Content-Type": "application/octet-stream",
        posX: s,
        posY: a
      }
    })
  }
  static async getReferredTemplate() {
    return b.get("/image/template/my")
  }
  static async getTemplateById({
    id: t
  }) {
    return fn !== null && (fn.abort(), fn = null), fn = new AbortController, b.get(`/image/template/${t}`, {
      signal: fn.signal
    })
  }
  static async getTournamentTemplateById({
    id: t
  }) {
    return b.get(`/tournament/template/${t}`)
  }
  static async getSelectedTemplate() {
    return b.get("/tournament/template/subscribe/my")
  }
  static async getTemplatesList({
    limit: t,
    offset: s
  }) {
    return b.get(`/image/template/list?limit=${t}&offset=${s}`)
  }
  static async getApprovedTemplatesList({
    limit: t,
    offset: s
  }) {
    return b.get(`/tournament/template/list?limit=${t}&offset=${s}`)
  }
  static async getRandomTemplates() {
    return b.get("/tournament/template/list/random?limit=16")
  }
  static async subscribeToTemplate({
    id: t
  }) {
    return b.put(`/image/template/subscribe/${t}`)
  }
  static async subscribeToTournamentTemplate({
    id: t
  }) {
    return b.put(`/tournament/template/subscribe/${t}`)
  }
  static async getAvailableSizes({
    userId: t
  }) {
    return b.get(`/image/template/sizes/${t}`)
  }
}
class mi {
  static async getPeriods() {
    return b.get("/tournament/periods")
  }
  static async getResults() {
    return b.get("/tournament/user/results")
  }
  static async getFinalResults({
    limit: t,
    offset: s
  }) {
    return b.get(`/tournament/templates/leaderboard?limit=${t}&offset=${s}`)
  }
}
const Ps = D("tournament/getPeriods", async () => (await mi.getPeriods()).data),
  Ns = D("tournament/getResults", async () => (await mi.getResults()).data),
  Ss = D("tournament/getFinalResults", async ({
    offset: n,
    limit: t
  }) => (await mi.getFinalResults({
    offset: n,
    limit: t
  })).data),
  Is = D("tournament/getMyTemplate", async ({
    id: n
  }) => (await Fe.getTournamentTemplateById({
    id: n
  })).data),
  Ts = D("tournament/getSelectedTemplate", async () => (await Fe.getSelectedTemplate()).data),
  Ds = D("tournament/getApprovedTemplatesList", async ({
    offset: n,
    limit: t
  }) => (await Fe.getApprovedTemplatesList({
    offset: n,
    limit: t
  })).data),
  Es = D("tournament/getRandomTemplatesList", async () => (await Fe.getRandomTemplates()).data),
  Bs = D("tournament/selectTemplate", async ({
    id: n
  }) => (await Fe.subscribeToTournamentTemplate({
    id: n
  })).data),
  gg = {
    activeTab: De.result,
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
    finalResultsStatus: m.idle,
    finalResults: ri.getInitialState(),
    finalResultsOffset: 0,
    finalResultsLimit: 15,
    finalResultsTotal: 0,
    approvedTemplatesList: In.getInitialState(),
    approvedTemplatesListStatus: m.idle,
    approvedTemplatesListOffset: 0,
    approvedTemplatesListLimit: 16,
    approvedTemplatesListTotal: 0,
    selectTemplateStatus: m.idle,
    randomTemplatesListStatus: m.idle,
    periodsStatus: m.idle,
    resultsStatus: m.idle,
    selectedTemplateStatus: m.idle
  },
  xn = "?time=1502",
  tr = ie({
    name: "tournament",
    initialState: gg,
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
        n.approvedTemplatesList = In.getInitialState(), n.approvedTemplatesListOffset = 0
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
      n.addCase(Is.pending, t => {}).addCase(Is.fulfilled, (t, s) => {
        s.payload.id && (t.myTemplate = {
          ...s.payload,
          type: Se.my,
          url: `${s.payload.url}${xn}`
        })
      }).addCase(Is.rejected, (t, s) => {}).addCase(Ps.pending, t => {
        t.periodsStatus = m.pending
      }).addCase(Ps.fulfilled, (t, s) => {
        t.periodsStatus = m.fulfilled, t.periods = s.payload.allPeriods, t.activePeriod = s.payload.activePeriod
      }).addCase(Ps.rejected, (t, s) => {
        t.periodsStatus = m.rejected
      }).addCase(Ns.pending, t => {
        t.resultsStatus = m.pending
      }).addCase(Ns.fulfilled, (t, s) => {
        t.resultsStatus = m.fulfilled, t.results = s.payload.rounds.sort((a, i) => i.round_id - a.round_id)
      }).addCase(Ns.rejected, (t, s) => {
        t.resultsStatus = m.rejected
      }).addCase(Ss.pending, t => {
        t.finalResultsStatus = m.pending
      }).addCase(Ss.fulfilled, (t, s) => {
        t.finalResultsStatus = m.fulfilled, t.finalResultsTotal = s.payload.total, t.finalResultsOffset += s.meta.arg.limit, ri.addMany(t.finalResults, s.payload.rating)
      }).addCase(Ss.rejected, (t, s) => {
        t.finalResultsStatus = m.rejected
      }).addCase(Ts.pending, t => {
        t.selectedTemplateStatus = m.pending
      }).addCase(Ts.fulfilled, (t, s) => {
        s.payload.id && (t.selectedTemplate = {
          ...s.payload,
          imageSize: s.payload.size || s.payload.imageSize,
          type: Se.referred,
          url: `${s.payload.url}${xn}`
        }), t.selectedTemplateStatus = m.fulfilled
      }).addCase(Ts.rejected, (t, s) => {
        t.selectedTemplateStatus = m.rejected
      }).addCase(Ds.pending, t => {
        t.approvedTemplatesListStatus = m.pending
      }).addCase(Ds.fulfilled, (t, s) => {
        s.payload && s.payload.list && (In.addMany(t.approvedTemplatesList, s.payload.list.map(a => ({
          ...a,
          url: `${a.url}${xn}`
        }))), t.approvedTemplatesListOffset += 16, t.approvedTemplatesListTotal = Math.max(s.payload.total, t.approvedTemplatesListTotal)), t.approvedTemplatesListStatus = m.fulfilled
      }).addCase(Ds.rejected, (t, s) => {
        t.approvedTemplatesListStatus = m.rejected
      }).addCase(Es.pending, t => {
        t.randomTemplatesListStatus = m.pending
      }).addCase(Es.fulfilled, (t, s) => {
        s.payload && s.payload.list && In.setAll(t.approvedTemplatesList, s.payload.list.map(a => ({
          ...a,
          url: `${a.url}${xn}`
        }))), t.randomTemplatesListStatus = m.fulfilled
      }).addCase(Es.rejected, (t, s) => {
        t.randomTemplatesListStatus = m.rejected
      }).addCase(Bs.pending, t => {
        t.selectTemplateStatus = m.pending
      }).addCase(Bs.fulfilled, (t, s) => {
        s.payload.id && (t.selectedTemplate = {
          ...s.payload,
          type: Se.referred,
          url: `${s.payload.url}${xn}`
        }), t.selectTemplateStatus = m.fulfilled
      }).addCase(Bs.rejected, (t, s) => {
        t.selectTemplateStatus = m.rejected
      })
    }
  }),
  {
    setActiveTournamentTab: Ia,
    setActiveTournamentTemplate: _g,
    hideTournamentTemplates: fg,
    setShowTournamentDetailsPopup: nr,
    setShowRoundRewardsPopup: xg,
    changeTemplateCoordsIfNeeded: sr,
    setMyTournamentTemplate: v3,
    clearApprovedTemplateList: ar,
    showTournamentTemplateInfoPopup: hi,
    closeTournamentTemplateInfoPopup: Ta,
    setSelectedTemplate: ir
  } = tr.actions,
  rt = {
    getMyTemplate: Is,
    getSelectedTemplate: Ts,
    getApprovedList: Ds,
    getRandomList: Es,
    selectTemplate: Bs,
    getPeriods: Ps,
    getFinalResults: Ss,
    getResults: Ns
  },
  Xn = n => {
    const t = n.tournament.activePeriod;
    return t && t.ID && t.PeriodType === "round" ? t.RoundID : null
  },
  Ai = n => {
    const t = n.tournament.activePeriod;
    if (!t) return null;
    if (t.PeriodType === "break" || t.PeriodType === "") {
      const s = t.ID,
        a = n.tournament.periods.filter(o => o.ID > s);
      return a.length === 0 ? null : a[0].RoundID
    } else if (t.PeriodType === "round") return t.RoundID;
    return null
  },
  vg = n => n.tournament.results,
  yg = tr.reducer;
window.getComputedStyle(document.body).getPropertyValue("--canvas-bg-color");
const wg = {
  1: 1
};
let $e;
const bg = n => {
  $e = n
};
let La = 0;
setInterval(() => {
  console.log(La), La = 0
}, 1e4);
let Rn = !0;
window.addEventListener("blur", () => {
  Rn = !1
});
window.addEventListener("focus", () => {
  Rn = !0
});
document.addEventListener("visibilitychange", () => {
  document.hidden ? Rn = !1 : Rn = !0
});
let He = null;
const jg = (n, t, s) => {
    let a = {
        token: n
      },
      i = {
        data: new TextEncoder().encode(JSON.stringify(a))
      };
    He = new tc(ti.replace("https", "wss").replace("api/v1/", "connection/websocket"), i), He.on("connected", function(o) {
      if (console.log(`connected over ${o.transport}`), !mo()) return;
      console.log("centrifuge image");
      const r = new Blob([o.data], {
          type: "image/webp"
        }),
        c = new Image;
      c.src = URL.createObjectURL(r), c.onload = () => {
        C.mainImage.loadFromCentrifuge(c).then(() => {
          const p = $e.getState().main.startParams.coords;
          p && (C.viewport.viewport.animate({
            scale: 60,
            time: 400,
            position: {
              x: p.x + .5,
              y: p.y + .5
            }
          }), C.mainImage.selectedPixel.draw(p), $e.dispatch(on(p)))
        })
      }
    }), He.on("disconnected", function(o) {
      console.log(`_disconnected: ${o.code}, ${o.reason}`)
    }), He.on("error", function(o) {
      console.log(o)
    }), He.on("publication", function(o) {
      if (o.channel === "event:message") {
        JSON.parse(new TextDecoder().decode(o.data)).forEach(d => {
          const p = JSON.parse(d.data);
          if (d.type === xa.pixanos && $e.dispatch(Sg(p)), p.user.userId === t || !Rn) return;
          const h = $e.getState().canvas.animations;
          if (d.type === xa.bomb) {
            const g = $s(p.info.pixelId);
            h && C.mainImage.bomb.boomWithDebounce(g)
          }
          if (d.type === xa.pumpkin) {
            const g = $s(p.info.pixelId);
            C.mainImage.pumpkin.boomWithDebounce(g, h)
          }
        });
        return
      }
      const r = new Uint8Array(o.data);
      nc(r, (c, d) => {
        if (c) console.error("Ошибка распаковки данных:", c);
        else {
          const p = JSON.parse(new TextDecoder().decode(d));
          if (o.channel === "pixel:message") Object.values(p).forEach(A => {
            La += A.length
          }), C.mainImage.paintPixelsFromCentrifuge(p);
          else if (o.channel === `personal:user#${t}`) {
            const A = JSON.parse(new TextDecoder().decode(d));
            if (A.type === wg[1] && $e.getState().daily.list.entities[A.good_id]) {
              const h = $e.getState().daily.list.entities[A.good_id],
                g = h.name,
                w = h.prices[0].quantity;
              $e.dispatch(k({
                id: performance.now(),
                text: `Transaction for daily ${h.id} completed! Got ${g} x${w}. Refresh the app.`,
                icon: ""
              }))
            }
          } else if (o.channel === "event:tournament") {
            const A = JSON.parse(new TextDecoder().decode(d));
            A.type && A.type === 1 && A.templates.forEach(g => {
              $e.dispatch(sr(g))
            })
          } else {
            if (o.channel === "event:mini-game") return;
            console.log("unknown channel", o)
          }
        }
      })
    }), He.connect()
  },
  Da = D("main/getPixanosRating", async () => (await O.getPixanosRating()).data),
  Cg = () => !1,
  Pg = {
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
    startParams: Rc(),
    startAppTs: Date.now(),
    timeLimit: !1,
    showIntro: !1,
    showBetaTestIntro: !1,
    fastMode: !1,
    fastEnergy: !1,
    currentFastType: null,
    showUserAndSquadPopup: !1,
    userAndSquadPopupStack: [],
    showNoFlagsPopup: Cg(),
    showMiningDetailsPopup: !1,
    showNoChargesPopup: !1,
    lastShowChargesPopupTs: Date.now() - Nc,
    showBoostDetailsPopup: !1,
    activeBoostDetails: tt.paintReward,
    referrerSquadId: null,
    showMiniPopup: !1,
    showPixanosEvent: !1,
    pixanosProcessing: !1,
    pixanosEventData: null,
    showPixanosRating: !1,
    pixanosRatingData: null,
    pixanosRatingStatus: m.idle,
    flyingRewards: []
  },
  or = ie({
    name: "main",
    initialState: Pg,
    reducers: {
      setTimeLimit: n => {
        n.timeLimit = !0, He && He.disconnect()
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
      showNoChargesPopup: n => {
        n.showNoChargesPopup = !0
      },
      hideNoChargesPopup: n => {
        n.showNoChargesPopup = !1
      },
      setLastShowChargesPopupTs: (n, t) => {
        n.lastShowChargesPopupTs = t.payload, dn.save("lastShowChargesPopupTs", JSON.stringify(t.payload))
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
      n.addCase(Da.pending, (t, s) => {
        t.pixanosRatingStatus = m.pending
      }).addCase(Da.fulfilled, (t, s) => {
        t.pixanosRatingStatus = m.fulfilled, t.pixanosRatingData = s.payload
      }).addCase(Da.rejected, (t, s) => {
        t.pixanosRatingStatus = m.rejected
      })
    }
  }),
  {
    setTimeLimit: y3,
    updateSettings: w3,
    enableFastMode: rr,
    disableFastMode: ma,
    enableFastType: ha,
    disableFastType: kt,
    enableFastEnergy: Ng,
    disableFastEnergy: cr,
    setShowPixanosRating: Ea,
    showPixanosEvent: Sg,
    hidePixanosEvent: Ig,
    setPixanosProcessing: Ri,
    setShowIntro: b3,
    setShowBetaTestIntro: j3,
    setShowMiniPopup: C3,
    addFlyingReward: P3,
    removeFlyingReward: N3,
    showNoChargesPopup: S3,
    hideNoChargesPopup: Ba,
    setLastShowChargesPopupTs: I3,
    setShowMiningDetailsPopup: T3,
    setShowBoostDetailsPopup: D3,
    setActiveBoostDetails: E3,
    addItemToUserAndSquadPopupStack: Vn,
    removeItemFromUserAndSquadPopupStack: lr,
    setShowNoFlagsPopup: B3,
    setReferrerSquadId: Xa
  } = or.actions,
  Tg = or.reducer;
Za(n => n.main.settings, n => {
  const t = n.UpgradeRepaint,
    s = n.UpgradeChargeCount,
    a = n.UpgradeChargeRestoration;
  let i = 1,
    o = 1,
    r = 1;
  return Object.keys(t.levels).forEach(c => {
    t.levels[c].Max && (i = Number(c))
  }), Object.keys(s.levels).forEach(c => {
    s.levels[c].Max && (o = Number(c))
  }), Object.keys(a.levels).forEach(c => {
    a.levels[c].Max && (r = Number(c))
  }), {
    repaintReward: i,
    chargesCount: o,
    restorationSpeed: r
  }
});
Za(n => n.main.settings, n => ({
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
}));
Za(n => n.main.settings, n => ({
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
}));
const Dg = ({
    item: n,
    index: t
  }) => {
    const s = _(),
      a = [Q.rating_item];
    return e.jsx(da, {
      children: e.jsxs("div", {
        className: a.join(" "),
        onPointerUp: () => {
          s(Vn({
            dataSource: Re.userFromRating,
            index: t
          }))
        },
        children: [e.jsx(pi, {
          position: t + 1,
          userPic: n.userPic
        }), e.jsx(Vo, {
          name: n.firstName
        }), e.jsx(Go, {
          value: n.repaints
        })]
      })
    })
  },
  Eg = () => {
    const n = l(s => s.user.user),
      t = l(s => s.ratings.myPlace);
    return n === null ? null : e.jsx(da, {
      children: e.jsxs("div", {
        className: Q.rating_item,
        style: {
          border: "2px solid #4db2ff"
        },
        children: [e.jsxs("div", {
          className: Q.avatar_container,
          children: [e.jsx("img", {
            alt: "avatar",
            className: Q.avatar,
            src: n.userPic === "" ? Xe : n.userPic
          }), t !== 0 && t < 1e3 && e.jsx("div", {
            className: Q.position,
            children: t
          }), t >= 1e3 && e.jsx("div", {
            className: Q.position,
            style: {
              fontSize: "10px"
            },
            children: "999+"
          })]
        }), e.jsxs("div", {
          className: Q.user_squad_info,
          children: [e.jsxs("div", {
            children: [e.jsx("span", {
              className: Q.user_squad_name,
              children: n.firstName
            }), " "]
          }), e.jsxs("div", {
            className: Q.user_squad_your_squad_text,
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
  Bg = () => {
    const n = _(),
      t = l(o => o.ratings.list),
      s = l(o => o.ratings.league),
      a = l(o => o.ratings.offset),
      i = l(o => o.ratings.limit);
    return u.useEffect(() => {
      n(Tt.personal({
        league: s,
        offset: a,
        limit: i
      }))
    }, [s]), u.useEffect(() => () => {
      n(Lo())
    }, []), e.jsxs(re.Fragment, {
      children: [e.jsx(Eg, {}), t.map((o, r) => e.jsx(Dg, {
        item: o,
        index: r
      }, r))]
    })
  },
  kg = () => (u.useState("Day"), null),
  Rg = ({
    children: n
  }) => e.jsx("div", {
    className: Q.info_layout,
    children: e.jsxs("div", {
      className: Q.info_container,
      children: [e.jsx(kg, {}), n]
    })
  }),
  Ug = () => {
    const n = $();
    return e.jsx("div", {
      className: Q.description_container,
      children: e.jsxs("span", {
        className: Q.description,
        children: ["Pixel painting Leaderboard!", e.jsx("br", {}), e.jsx(pn, {
          onPointerUp: () => {
            n.push("/stats")
          },
          children: "Painters stat"
        })]
      })
    })
  },
  Og = () => {
    const n = l(t => t.user.user);
    return !n || !n.squad || n.squad.id !== null ? null : e.jsx("button", {
      className: Q.join_squad_button,
      children: e.jsxs("div", {
        className: Q.join_squad_text,
        onPointerUp: () => {
          fe(`https://t.me/${it}`)
        },
        children: ["Join the squad ", e.jsx(B, {
          children: ""
        })]
      })
    })
  },
  Nt = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAJFBMVEUQGSb////w8PHU1de6vMCoq6+NkJd3e4Juc3pXXWU8QkwlLDf3GVopAAABfklEQVR42u3ZwW7CMBCE4WHXazbO+79vL7QjUdxwYG1Vmu/YRP0tOwkOQERERERERERE5APOzIjMgR1Gd7s9mMfAWoffnnhuypMfWOMMu71kcWKB0W5TbaBcOuc8cgAjw/mngWJ3+5lvtjDCOII1/fa03GfjgQV96/ilP47Fin7ihTQeLO7f/zzuZ/X6d0x0Hq/sN0w1TkFd3w5MHcaroKJ/fZUHT6nqW4Imd4KX9a//uXOVCvq8BKcaZ6mif32PdZ708b7xIXR1clT0Pd6Z3fz4APK7P/YMgH3EjiVgH+ilF+F1H2nrb0NnHzhs/YPI2Qfg6x/FjX0Asf7DaDj7QNqej2PyNzckqNLtnS2ZdVQ5fc+mlNL2bMspdr2YcAC7Xs3Y3/dyyv789dzuC/u0uB9he/vA4Xv74BC29PlF5c4+v6q1HX0arr76i/qm+d/T75M+NyCWqORc//UbQA6AfUpjv1Cf9XE29it1946XzvB26KdTEREREREREZF/7Qv4ZQurWN4R2wAAAABJRU5ErkJggg==",
  gi = ({
    src: n
  }) => {
    let t = Nt;
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
  Mg = {
    info: null,
    popupId: null,
    getInfoFetchStatus: m.idle
  },
  ks = D("squad/getSquadInfo", async ({
    id: n
  }) => (await O.getSquadInfo({
    id: n
  })).data),
  dr = ie({
    name: "squad",
    initialState: Mg,
    reducers: {
      setPopupSquadId: (n, t) => {
        n.popupId = t.payload
      }
    },
    extraReducers: n => {
      n.addCase(ks.pending, t => {
        t.getInfoFetchStatus = m.pending
      }).addCase(ks.fulfilled, (t, s) => {
        t.info = s.payload, t.getInfoFetchStatus = m.fulfilled
      }).addCase(ks.rejected, t => {
        t.getInfoFetchStatus = m.rejected
      })
    }
  });
dr.actions;
const Fg = dr.reducer,
  Aa = {
    getInfo: ks
  },
  Qg = () => {
    const n = _(),
      t = l(a => a.ratings.mySquadPlace),
      s = l(a => a.ratings.mySquad);
    return s === null || !s || s.id === null ? null : e.jsxs("div", {
      className: Q.user_squad_container,
      onPointerUp: () => {
        n(Aa.getInfo({
          id: s.id
        })), n(Vn({
          dataSource: Re.squadFromData
        }))
      },
      children: [e.jsxs("div", {
        className: Q.squad_avatar_container,
        children: [e.jsx(gi, {
          src: s.logo
        }), e.jsx("div", {
          className: Q.user_squad_position,
          children: t
        })]
      }), e.jsxs("div", {
        className: Q.user_squad_info,
        children: [e.jsxs("div", {
          children: [e.jsx("span", {
            className: Q.user_squad_name,
            children: s.name
          }), " "]
        }), e.jsx("div", {
          className: Q.user_squad_your_squad_text,
          children: "Your squad"
        })]
      }), e.jsx("div", {
        children: e.jsx("span", {
          className: Q.user_squad_users_count,
          children: sn(s.scoredRepaints)
        })
      })]
    })
  },
  zg = ({
    item: n,
    index: t
  }) => {
    const s = _();
    return e.jsx(da, {
      children: e.jsxs("div", {
        className: Q.rating_item,
        onPointerUp: () => {
          s(Aa.getInfo({
            id: n.id
          })), s(Vn({
            dataSource: Re.squadFromData
          }))
        },
        children: [e.jsx(pi, {
          position: t + 1,
          userPic: n.logo
        }), e.jsx(Vo, {
          name: n.name,
          address: n.slug
        }), e.jsx(Go, {
          value: n.scoredRepaints
        })]
      })
    })
  },
  qg = () => l(t => t.ratings.list).map((t, s) => e.jsx(zg, {
    item: t,
    index: s
  }, s)),
  Hg = () => {
    const n = _(),
      t = l(i => i.ratings.league),
      s = l(i => i.ratings.offset),
      a = l(i => i.ratings.limit);
    return u.useEffect(() => {
      n(Tt.squad({
        league: t,
        offset: s,
        limit: a
      }))
    }, [t]), e.jsxs(re.Fragment, {
      children: [e.jsx(Og, {}), e.jsx(Qg, {}), e.jsx(qg, {})]
    })
  },
  Lg = () => e.jsx(re.Fragment, {
    children: Array.from(Array(10)).map((n, t) => e.jsx(da, {
      children: e.jsx("div", {
        className: Q.loading_item
      })
    }, t))
  }),
  Xg = "/assets/icon_squad_ny-C9Q4pxMJ.gif",
  Vg = "/assets/icon_squad_secret-B-fF264Z.gif",
  Gg = () => {
    const [n, t] = u.useState(0);
    return e.jsx("div", {
      className: Q.squads_img_container,
      children: e.jsx("img", {
        alt: "img",
        className: Q.squads_img,
        src: n >= 10 ? Vg : Xg,
        onPointerUp: () => {
          t(s => s + 1)
        }
      })
    })
  },
  Wg = "_container_13xrt_1",
  Yg = "_button_13xrt_5",
  ea = {
    container: Wg,
    button: Yg
  },
  Jg = () => {
    const n = _(),
      t = l(r => r.ratings.status),
      s = l(r => r.ratings.offset),
      a = l(r => r.ratings.limit),
      i = l(r => r.ratings.total),
      o = l(r => r.ratings.league);
    return e.jsx("div", {
      className: ea.container,
      children: e.jsx("button", {
        className: ea.button,
        disabled: t === m.pending,
        onPointerUp: () => {
          s >= i || n(Tt.personal({
            league: o,
            offset: s,
            limit: a
          }))
        },
        children: s >= i ? "That's all" : "Load more users"
      })
    })
  },
  Kg = () => {
    const n = _(),
      t = l(r => r.ratings.status),
      s = l(r => r.ratings.offset),
      a = l(r => r.ratings.limit),
      i = l(r => r.ratings.total),
      o = l(r => r.ratings.league);
    return e.jsx("div", {
      className: ea.container,
      children: e.jsx("button", {
        className: ea.button,
        disabled: t === m.pending,
        onPointerUp: () => {
          s >= i || n(Tt.squad({
            league: o,
            offset: s,
            limit: a
          }))
        },
        children: s >= i ? "That's all" : "Load more squads"
      })
    })
  },
  Zg = ({
    selectedSection: n
  }) => n === "Painters" ? e.jsx(Jg, {}) : n === "Squads" ? e.jsx(Kg, {}) : null,
  $g = () => {
    const n = _(),
      t = l(o => o.ratings.selectedSection),
      s = o => n(Xo(o)),
      a = l(o => o.ratings.status),
      i = l(o => o.ratings.offset);
    return e.jsxs(W, {
      children: [e.jsx(Gg, {}), e.jsx($p, {
        selectedSection: t,
        setSelectedSection: s
      }), e.jsx(Ug, {}), e.jsxs(Rg, {
        children: [t === Zs.squad && e.jsx(Hg, {}), t === Zs.user && e.jsx(Bg, {}), a !== m.fulfilled && i === 0 && e.jsx(Lg, {}), e.jsx(Zg, {
          selectedSection: t
        })]
      })]
    })
  },
  e_ = () => {
    const n = u.useRef(null),
      t = u.useRef(null);
    u.useEffect(() => () => {
      clearInterval(n.current)
    }, []);
    const s = () => {
      performance.now() - t.current < 200 && C.viewport.zoomIn(), clearInterval(n.current)
    };
    return e.jsx("button", {
      className: I.button,
      onPointerDown: () => {
        t.current = performance.now(), n.current = setInterval(() => {
          C.viewport.zoomIn()
        }, 90)
      },
      onPointerUp: () => {
        performance.now() - t.current < 200 && C.viewport.zoomIn(), clearInterval(n.current)
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
  t_ = () => {
    const n = u.useRef(null),
      t = u.useRef(null),
      s = () => {
        performance.now() - t.current < 200 && C.viewport.zoomOut(), clearInterval(n.current)
      };
    return u.useEffect(() => () => {
      clearInterval(n.current)
    }, []), u.useEffect(() => (window.addEventListener("blur", s), () => {
      window.removeEventListener("blur", s)
    }), []), e.jsx("button", {
      className: I.button,
      onPointerDown: () => {
        t.current = performance.now(), n.current = setInterval(() => {
          C.viewport.zoomOut()
        }, 90)
      },
      onPointerUp: () => {
        performance.now() - t.current < 200 && C.viewport.zoomOut(), clearInterval(n.current)
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
  n_ = () => e.jsxs("div", {
    className: I.buttons_container,
    children: [e.jsx(e_, {}), e.jsx(t_, {})]
  }),
  s_ = () => {
    const n = _(),
      t = [I.button],
      s = l(r => r.shop.limitedGood),
      a = l(r => r.shop.limitedEnd),
      [i, o] = u.useState(null);
    return u.useEffect(() => {
      let r = null;
      if (a) {
        const c = () => {
          const d = Date.now(),
            p = Math.max(0, Math.ceil((a - d) / 1e3));
          o(p)
        };
        c(), r = setInterval(c, 1e3)
      }
      return () => {
        r && clearInterval(r)
      }
    }, [a]), s ? e.jsxs("button", {
      className: `${t.join(" ")} ${I.shop_button}`,
      onPointerUp: () => {
        n($c())
      },
      children: [e.jsx("img", {
        alt: "img",
        className: I.button_image,
        src: s.image_url
      }), e.jsx("div", {
        className: I.limited_good_timer,
        children: Oc(i)
      })]
    }) : null
  },
  a_ = () => l(Me) ? e.jsx("div", {
    className: I.buttons_container,
    children: e.jsx(s_, {})
  }) : null,
  i_ = () => e.jsx("div", {
    className: I.layout,
    children: e.jsxs("div", {
      className: I.container,
      children: [e.jsx(n_, {}), e.jsx(a_, {})]
    })
  }),
  o_ = "_layout_1v16g_1",
  r_ = "_container_1v16g_5",
  c_ = "_close_button_1v16g_14",
  l_ = "_title_container_1v16g_22",
  d_ = "_image_container_1v16g_28",
  u_ = "_image_1v16g_28",
  p_ = "_first_image_1v16g_45",
  m_ = "_second_image_1v16g_50",
  h_ = "_text_container_1v16g_55",
  A_ = "_button_container_1v16g_60",
  g_ = "_button_1v16g_60",
  Te = {
    layout: o_,
    container: r_,
    close_button: c_,
    title_container: l_,
    image_container: d_,
    image: u_,
    first_image: p_,
    second_image: m_,
    text_container: h_,
    button_container: A_,
    button: g_
  },
  __ = "_layout_1df7o_1",
  f_ = "_container_1df7o_14",
  x_ = "_move_in_1df7o_1",
  Ui = {
    layout: __,
    container: f_,
    move_in: x_
  },
  vt = ({
    children: n,
    show: t,
    onPointerUp: s = () => {},
    backgroundColor: a
  }) => {
    const [i, o] = u.useState(!1), [r, c] = Ls(() => ({
      from: {
        opacity: 0
      },
      config: {
        duration: 300,
        easing: Xs.easeOutCubic
      }
    }));
    return u.useEffect(() => {
      t ? (o(!0), c.start({
        opacity: 1
      })) : t || c.start({
        opacity: 0,
        onResolve: () => o(!1)
      })
    }, [t]), i ? e.jsx(Vs.div, {
      className: Ui.layout,
      style: {
        ...r,
        backgroundColor: a
      },
      onPointerUp: s,
      children: e.jsx("div", {
        className: Ui.container,
        children: n
      })
    }) : null
  },
  v_ = () => {
    const n = _(),
      t = l(o => o.main.referrerSquadId),
      [s, a] = u.useState(null),
      i = l(o => o.user.user);
    return u.useEffect(() => {
      if (t) try {
        (async () => {
          const r = await O.getSquadInfo({
            id: t
          });
          r.data.squad && r.data.squad.id !== null && a(r.data.squad)
        })()
      } catch {}
    }, [t]), e.jsx(vt, {
      show: t !== null,
      onPointerUp: () => {
        n(Xa(null))
      },
      children: e.jsx("div", {
        className: Te.layout,
        onPointerUp: o => {
          o.stopPropagation()
        },
        children: e.jsxs("div", {
          className: Te.container,
          children: [e.jsx("div", {
            className: Te.close_button,
            onPointerUp: () => {
              n(Xa(null))
            },
            children: e.jsx(B, {
              size: 26,
              children: ""
            })
          }), e.jsx("div", {
            className: Te.title_container,
            children: e.jsx("span", {
              children: "Friend's squad invitation"
            })
          }), e.jsxs("div", {
            className: Te.image_container,
            children: [e.jsx("img", {
              alt: "img",
              className: `${Te.image} ${Te.first_image}`,
              src: s === null ? Nt : s.logo
            }), e.jsx("img", {
              alt: "img",
              className: `${Te.image} ${Te.second_image}`,
              src: i === null || i.userPic === "" ? Xe : i.userPic
            })]
          }), e.jsx("div", {
            className: Te.text_container,
            children: e.jsxs("span", {
              children: ["Your friend is a part of the", " ", s === null ? "" : `"${s.name}"`, " squad. Ready to team up?"]
            })
          }), e.jsx("div", {
            className: Te.button_container,
            children: e.jsxs("button", {
              className: Te.button,
              onPointerUp: () => {
                s !== null && fe(`https://t.me/${it}?startapp=${btoa(`id=${s.id}`)}`)
              },
              children: [s !== null && `Join ${s.name} squad`, s === null && "Loading squad info..."]
            })
          })]
        })
      })
    })
  },
  y_ = "_layout_swx97_1",
  w_ = {
    layout: y_
  },
  b_ = "_layout_1a5xo_1",
  j_ = "_container_1a5xo_5",
  Oi = {
    layout: b_,
    container: j_
  },
  C_ = () => {
    const n = _(),
      t = l(i => i.main.fastMode);
    if (!l(i => i.canvas.coords)) return null;
    const a = [I.button, I.fast_type_button, I.shop_button];
    return t && a.push(I.fast_mode_button_enabled), e.jsx("button", {
      className: a.join(" "),
      onPointerUp: () => {
        n(t ? ma() : rr())
      },
      children: e.jsx("img", {
        alt: "img",
        className: I.button_image,
        src: bo
      })
    })
  },
  P_ = () => {
    const n = _(),
      t = l(o => o.canvas.coords),
      s = l(o => o.main.fastMode),
      a = l(o => o.main.currentFastType);
    if (!t) return null;
    const i = [I.button, I.shop_button, I.fast_type_button];
    return e.jsxs("button", {
      className: i.join(" "),
      onPointerUp: () => {
        if (s || a) return;
        const o = C.mainImage.getPixelColor({
          coords: t
        });
        n(si(o))
      },
      children: [e.jsx("div", {
        className: I.disabled_button_cover,
        style: {
          opacity: s || a ? .7 : 0
        }
      }), e.jsx("img", {
        alt: "img",
        className: I.button_image,
        src: wo
      })]
    })
  },
  N_ = () => {
    const n = _(),
      t = [I.button, I.shop_button, I.fast_type_button],
      s = [I.button_image];
    return e.jsx("button", {
      className: t.join(" "),
      style: {
        borderRadius: "0 var(--border-radius) var(--border-radius) 0"
      },
      onPointerUp: () => {
        n(Ge(13)), n(We())
      },
      children: e.jsx("img", {
        alt: "img",
        className: s.join(" "),
        src: un
      })
    })
  },
  S_ = () => l(t => t.canvas.coords) ? e.jsx("div", {
    className: Oi.layout,
    children: e.jsxs("div", {
      className: Oi.container + " " + I.container__bottom,
      children: [e.jsx(SA, {}), e.jsx(PA, {}), e.jsx(KA, {}), e.jsx(pA, {}), e.jsx(C_, {}), e.jsx(P_, {}), e.jsx(N_, {})]
    })
  }) : null,
  I_ = ({
    open: n,
    setOpen: t,
    active: s,
    setActive: a
  }) => {
    const i = l(o => o.color.active);
    return e.jsx("div", {
      className: Z.active_color,
      style: {
        backgroundColor: i
      },
      onPointerUp: o => {
        o.stopPropagation(), n && s === 1 ? t(!1) : n && s === 2 ? a(1) : (a(1), t(!0))
      }
    })
  },
  T_ = ({
    open: n,
    setOpen: t,
    active: s,
    setActive: a
  }) => {
    const i = _(),
      o = [Z.info_button];
    return n && s === 2 && o.push(Z.info_button_active), e.jsx("div", {
      className: o.join(" "),
      onPointerUp: r => {
        r.stopPropagation(), i(Vn({
          dataSource: Re.userFromPixelInfo
        }))
      },
      children: "info"
    })
  },
  D_ = () => {
    const [n, t] = u.useState(!0), [s, a] = u.useState(!1), i = l(r => r.canvas.coords), o = u.useRef(null);
    return u.useEffect(() => () => {
      o.current !== null && (clearTimeout(o.current), o.current = null)
    }, []), e.jsxs("div", {
      className: Z.pixel_info_container,
      children: [n && e.jsxs("div", {
        className: Z.pixel_info_text,
        onPointerUp: async r => {
          var d, p;
          r.stopPropagation(), await Mn(`${Et}?startapp=x${i.x}_y${i.y}`) ? (p = (d = window.Telegram.WebApp) == null ? void 0 : d.HapticFeedback) == null || p.notificationOccurred("success") : a(!0), t(!1), o.current = setTimeout(() => {
            a(!1), t(!0), o.current = null
          }, 4e3)
        },
        children: [`${i.x}, ${i.y}`, " ", e.jsx(B, {
          size: 14,
          children: ""
        })]
      }), !n && e.jsx("div", {
        className: Z.pixel_info_text,
        onPointerUp: async r => {
          r.stopPropagation(), a(!1), t(!0)
        },
        children: s ? "Failure" : "Pixel link copied!"
      })]
    })
  },
  E_ = "_expandable_panel_layout_1v9vd_1",
  B_ = "_expandable_panel_1v9vd_1",
  k_ = "_divider_1v9vd_16",
  R_ = "_divider_spacer_1v9vd_24",
  U_ = "_divider_pointer_1v9vd_28",
  En = {
    expandable_panel_layout: E_,
    expandable_panel: B_,
    divider: k_,
    divider_spacer: R_,
    divider_pointer: U_
  },
  O_ = ({
    active: n
  }) => {
    const t = n === 1 ? "38px" : "54px",
      s = n === 1 ? 0 : 1;
    return e.jsxs("div", {
      className: En.divider,
      children: [e.jsx("div", {
        className: En.divider_spacer,
        style: {
          flexGrow: s
        }
      }), e.jsx("div", {
        className: En.divider_pointer,
        style: {
          width: t
        }
      })]
    })
  },
  M_ = n => {
    const t = u.useRef(),
      s = u.useRef();
    return u.useEffect(() => {
      t.current = n
    }), u.useEffect(() => {
      const a = i => {
        s.current && t.current && !s.current.contains(i.target) && t.current(i)
      };
      return window.addEventListener("pointerup", a), () => {
        window.removeEventListener("pointerup", a)
      }
    }, []), s
  },
  F_ = "_container_1vu8i_1",
  Q_ = "_owner_1vu8i_10",
  z_ = "_id_1vu8i_14",
  q_ = "_date_1vu8i_19",
  H_ = "_avatar_container_1vu8i_24",
  L_ = "_avatar_1vu8i_24",
  X_ = "_squad_avatar_container_1vu8i_36",
  V_ = "_text_container_1vu8i_48",
  G_ = "_dot_1vu8i_54",
  W_ = "_user_name_1vu8i_59",
  Y_ = "_squad_name_1vu8i_64",
  ae = {
    container: F_,
    owner: Q_,
    id: z_,
    date: q_,
    avatar_container: H_,
    avatar: L_,
    squad_avatar_container: X_,
    text_container: V_,
    dot: G_,
    user_name: W_,
    squad_name: Y_
  },
  ur = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  Qe = n => {
    const t = new Date().getFullYear(),
      s = n.getFullYear(),
      a = s === t ? "" : s,
      i = n.getMonth(),
      o = n.getDate(),
      r = n.getHours(),
      c = n.getMinutes();
    return `${o<10?0:""}${o} ${[ur[i]]} ${a} at ${r<10?0:""}${r}:${c<10?0:""}${c}`
  },
  J_ = n => {
    const t = new Date().getFullYear(),
      s = n.getFullYear(),
      a = s === t ? "" : s,
      i = n.getMonth(),
      o = n.getDate();
    return `${o<10?0:""}${o} ${[ur[i]]} ${a}`
  },
  K_ = "_skeleton_k7kmi_1",
  Z_ = "_loading_k7kmi_1",
  $_ = {
    skeleton: K_,
    loading: Z_
  },
  Oe = ({
    children: n,
    show: t
  }) => t ? e.jsx("div", {
    className: $_.skeleton,
    children: e.jsx("div", {
      style: {
        opacity: 0
      },
      children: n
    })
  }) : null,
  ef = () => {
    const n = l(o => o.canvas.pixelInfo),
      t = l(o => o.canvas.getPixelInfoFetchStatus),
      s = n !== null && t === m.fulfilled,
      a = () => Qe(new Date(n.pixel.dateObtained));
    if (!s) return e.jsx(Oe, {
      show: !s,
      children: e.jsx("span", {
        className: ae.date,
        children: "29 august at 18:00"
      })
    });
    const i = a();
    return e.jsx("div", {
      children: e.jsx("span", {
        className: ae.date,
        children: i
      })
    })
  },
  Rt = ({
    address: n,
    limit: t = 0,
    display: s = null
  }) => {
    const a = l(Ko);
    if (!n || n === "") return e.jsx("span", {
      children: "Anon"
    });
    let i = Bc(s === null ? n : s);
    return t > 0 && (i = On(i, t)), e.jsx("span", {
      className: Do.link,
      onPointerUp: o => {
        o.stopPropagation(), a ? fe(`https://t.me/${Ci(n)}`) : ia(`https://t.me/${Ci(n)}`)
      },
      children: i
    })
  },
  tf = () => {
    const n = l(r => r.canvas.pixelInfo),
      t = l(r => r.canvas.getPixelInfoFetchStatus),
      s = n !== null && t === m.fulfilled;
    if (!s) return e.jsx(Oe, {
      show: !s,
      children: e.jsx("div", {
        className: ae.text_container,
        children: e.jsx("span", {
          className: ae.user_name,
          children: "No name • @notpixel"
        })
      })
    });
    const i = On(n.owner.firstName || "No name");
    return (() => {
      const r = n.owner.userName && n.owner.userName !== "";
      return {
        address: r ? n.owner.userName : "Anon",
        hasAddress: r
      }
    })(), e.jsx("div", {
      className: ae.text_container,
      children: e.jsx("span", {
        className: ae.user_name,
        children: i
      })
    })
  },
  nf = () => {
    var i, o;
    const n = l(r => r.canvas.pixelInfo),
      t = l(r => r.canvas.getPixelInfoFetchStatus),
      s = n !== null && t === m.fulfilled;
    return s ? ((o = (i = n == null ? void 0 : n.owner) == null ? void 0 : i.squad) == null ? void 0 : o.name) && n.owner.squad.name !== null ? e.jsxs("div", {
      className: ae.text_container,
      children: [e.jsx("span", {
        className: ae.squad_name,
        children: n.owner.squad.name
      }), e.jsx("span", {
        className: ae.dot,
        children: "•"
      }), e.jsx(Rt, {
        address: `${it}?startapp=${btoa(`id=${n.owner.squad.id}`)}`,
        display: n.owner.squad.slug,
        limit: 18
      })]
    }) : e.jsx("div", {
      className: ae.text_container,
      children: e.jsx("span", {
        className: ae.squad_name,
        children: "No squad"
      })
    }) : e.jsx(Oe, {
      show: !s,
      children: e.jsx("div", {
        className: ae.text_container,
        children: e.jsx("span", {
          className: ae.squad_name,
          children: "Loading..."
        })
      })
    })
  },
  sf = () => {
    var i, o;
    const n = l(r => r.canvas.pixelInfo),
      t = l(r => r.canvas.getPixelInfoFetchStatus),
      s = n !== null && t === m.fulfilled;
    let a = Xe;
    return s && n.owner.userPic && n.owner.userPic !== "" && (a = n.owner.userPic), e.jsxs("div", {
      className: ae.avatar_container,
      children: [e.jsx("img", {
        alt: "avatar",
        className: ae.avatar,
        src: a
      }), e.jsx("div", {
        className: ae.squad_avatar_container,
        children: e.jsx(gi, {
          src: ((o = (i = n == null ? void 0 : n.owner) == null ? void 0 : i.squad) == null ? void 0 : o.logo) || ""
        })
      })]
    })
  },
  af = () => {
    const n = _(),
      t = l(i => i.canvas.pixelInfo),
      s = l(i => i.canvas.getPixelInfoFetchStatus),
      a = t !== null && s === m.fulfilled;
    return e.jsxs("div", {
      children: [a && e.jsxs("span", {
        className: ae.owner,
        children: [" ", "Owner "]
      }), a && t.owner.id !== 0 && e.jsxs("span", {
        className: ae.id,
        onPointerUp: async i => {
          i.preventDefault(), i.stopPropagation();
          try {
            await Mn(`${t.owner.id}`), await n(k({
              id: performance.now(),
              text: "Copied!"
            }))
          } catch {
            await n(k({
              id: performance.now(),
              text: "Can't copy!"
            }))
          }
        },
        children: [" ", t.owner.id]
      }), e.jsx(Oe, {
        show: !a,
        children: e.jsx("span", {
          className: ae.owner,
          children: "Owner"
        })
      })]
    })
  },
  of = () => e.jsxs("div", {
    className: ae.container,
    children: [e.jsx(af, {}), e.jsx(ef, {}), e.jsx(sf, {}), e.jsx(tf, {}), e.jsx(nf, {})]
  }),
  rf = "_category_text_epppt_1",
  cf = "_latest_used_container_epppt_8",
  lf = "_color_line_epppt_15",
  df = "_color_item_epppt_22",
  uf = "_pipette_container_epppt_30",
  pf = "_child_scale_epppt_48",
  pr = {
    category_text: rf,
    latest_used_container: cf,
    color_line: lf,
    color_item: df,
    pipette_container: uf,
    child_scale: pf
  },
  mf = ({
    color: n
  }) => {
    const [t, s] = u.useState(!1), a = u.useRef(null), i = _();
    return e.jsx("div", {
      style: {
        backgroundColor: n,
        transform: t ? "scale(1.2)" : ""
      },
      className: pr.color_item,
      onPointerUp: () => {
        var o, r;
        s(!0), a.current !== null && clearTimeout(a.current), a.current = setTimeout(() => {
          s(!1)
        }, 200), i(si(n)), (r = (o = window.Telegram.WebApp) == null ? void 0 : o.HapticFeedback) == null || r.notificationOccurred("success")
      }
    })
  },
  mr = ({
    colors: n
  }) => e.jsx("div", {
    className: pr.color_line,
    children: n.map((t, s) => e.jsx(mf, {
      color: t
    }, `${t}_${s}`))
  }),
  hf = "_unlock_button_fc8qr_1",
  Af = "_stars_text_fc8qr_13",
  Mi = {
    unlock_button: hf,
    stars_text: Af
  },
  gf = () => e.jsxs("div", {
    className: Mi.unlock_button,
    children: [e.jsx("span", {
      children: "Unlock all colors for"
    }), e.jsxs("span", {
      className: Mi.stars_text,
      children: [e.jsx(Fn, {}), e.jsx("span", {
        children: "5000"
      })]
    })]
  }),
  _f = () => {
    l(t => t.color.latest);
    const n = l(t => t.color.basic);
    return e.jsxs(re.Fragment, {
      children: [e.jsx(mr, {
        colors: n
      }), e.jsx(gf, {})]
    })
  },
  ff = ({
    getData: n
  }) => {
    const t = _(),
      s = l(i => i.canvas.coords),
      a = l(i => i.main.showUserAndSquadPopup);
    return u.useEffect(() => {
      if (s !== null && (n || a)) {
        const i = gt(s);
        t(ua.getPixelInfo({
          id: i
        }))
      }
    }, [s, n, a, t]), null
  },
  xf = ({
    open: n,
    setOpen: t,
    active: s
  }) => {
    const a = M_(() => {
        s !== 2 && t(!1)
      }),
      [i, o] = Ls(() => ({
        from: {
          height: 0,
          opacity: 0
        },
        config: {
          duration: 400,
          easing: Xs.easeOutCubic
        }
      })),
      r = u.useRef(null);
    return u.useEffect(() => {
      if (n !== null && r.current !== null) {
        const c = n ? r.current.offsetHeight : 0;
        o.start({
          height: n ? c : 0,
          opacity: n ? 1 : 0
        })
      }
    }, [n, s, r, o]), e.jsxs(Vs.div, {
      ref: a,
      className: En.expandable_panel_layout,
      style: {
        ...i
      },
      children: [e.jsx(ff, {
        getData: s === 2 && n
      }), e.jsxs("div", {
        ref: r,
        className: En.expandable_panel,
        children: [e.jsx(O_, {
          active: s
        }), s === 1 && e.jsx(_f, {}), s === 2 && e.jsx(of, {})]
      })]
    })
  },
  vf = () => l(Me) ? null : e.jsxs("button", {
    className: Z.button,
    onPointerUp: () => {
      fe("https://t.me/notpixel")
    },
    children: [e.jsx("img", {
      alt: "tg_logo",
      className: Z.tg_logo,
      src: Hn
    }), e.jsx("span", {
      className: Z.button_text,
      children: "Go to app for paint"
    })]
  }),
  yf = () => e.jsx(wA, {}),
  wf = () => l(Me) ? e.jsx(yf, {}) : e.jsx(vf, {}),
  bf = () => {
    const n = l(s => s.main.fastMode),
      t = l(s => s.main.currentFastType);
    return e.jsx("div", {
      className: Z.fast_mode_blocker,
      style: {
        pointerEvents: n || t ? "all" : "none",
        opacity: n || t ? .7 : 0
      }
    })
  },
  jf = () => {
    const [n, t] = u.useState(!1), [s, a] = u.useState(1), i = l(r => r.main.fastMode), o = l(r => r.main.currentFastType);
    return u.useEffect(() => {
      (i || o) && t(!1)
    }, [i, o]), e.jsx("div", {
      className: Z.order_panel,
      onPointerUp: r => {
        r.stopPropagation()
      },
      children: e.jsxs("div", {
        className: Z.content,
        children: [e.jsx(bf, {}), e.jsxs("div", {
          className: Z.info,
          children: [e.jsx(I_, {
            open: n,
            setOpen: t,
            active: s,
            setActive: a
          }), e.jsx(D_, {}), e.jsx(T_, {
            open: n,
            setOpen: t,
            active: s,
            setActive: a
          })]
        }), e.jsx(xf, {
          open: n,
          setOpen: t,
          active: s
        }), e.jsx(wf, {})]
      })
    })
  },
  Cf = () => e.jsx(re.Fragment, {
    children: e.jsx(jf, {})
  }),
  Pf = "_panel_1urz2_1",
  Nf = "_content_1urz2_16",
  Fi = {
    panel: Pf,
    content: Nf
  },
  Sf = ({
    text: n
  }) => e.jsx("div", {
    className: Fi.panel,
    children: e.jsx("div", {
      className: Fi.content,
      children: n
    })
  }),
  If = () => l(t => t.canvas.coords) === null ? e.jsx(Sf, {
    text: "A-yo! Zoom, tap, paint"
  }) : e.jsxs("div", {
    className: w_.layout,
    children: [e.jsx(S_, {}), e.jsx(Cf, {})]
  }),
  Tf = "_layout_srn55_1",
  Df = "_container_srn55_12",
  Ef = "_buttons_container_srn55_18",
  ka = {
    layout: Tf,
    container: Df,
    buttons_container: Ef
  },
  Bf = "_container_srbwq_1",
  kf = {
    container: Bf
  },
  Rf = "/assets/start-DnMan449.png",
  Uf = D("template/subscribe", async ({
    id: n
  }) => (await Fe.subscribeToTemplate({
    id: n
  })).data),
  Rs = D("template/getTemplateList", async ({
    offset: n,
    limit: t
  }) => (await Fe.getTemplatesList({
    offset: n,
    limit: t
  })).data),
  Of = D("template/getAvailableSizes", async ({
    userId: n
  }) => (await Fe.getAvailableSizes({
    userId: n
  })).data),
  Us = D("template/getReferredTemplate", async () => (await Fe.getReferredTemplate()).data),
  Va = D("template/getMyTemplate", async ({
    id: n
  }) => (await Fe.getTemplateById({
    id: n
  })).data),
  Os = D("template/getWorldTemplate", async () => ({
    x: 0,
    y: 0,
    imageSize: T.width,
    url: Rf,
    type: Se.world
  })),
  Mf = {
    active: null,
    activeTab: "my",
    showTemplateDetailsPopup: !1,
    showTemplateInfoPopup: !1,
    templateInfoPopupId: null,
    list: [],
    listStatus: m.idle,
    listOffset: 0,
    listLimit: 12,
    opacity: [70],
    worldTemplate: null,
    referredTemplate: null,
    myTemplate: null,
    sizes: []
  },
  hr = ie({
    name: "template",
    initialState: Mf,
    reducers: {
      setActiveTemplate: (n, t) => {
        n.active = t.payload, C.mainImage.worldTemplate.hide(), C.mainImage.worldTemplate.show(t.payload)
      },
      setActiveTemplateTab: (n, t) => {
        n.activeTab = t.payload
      },
      hideTemplates: n => {
        n.active = null, C.mainImage.worldTemplate.hide()
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
        n.list = [], n.listStatus = m.idle, n.listOffset = 0
      }
    },
    extraReducers: n => {
      n.addCase(Us.pending, t => {}).addCase(Us.fulfilled, (t, s) => {
        if (s.payload) {
          const a = {
            ...s.payload,
            type: Se.referred
          };
          t.referredTemplate = a
        }
      }).addCase(Us.rejected, (t, s) => {}).addCase(Va.pending, t => {}).addCase(Va.fulfilled, (t, s) => {}).addCase(Os.pending, (t, s) => {}).addCase(Os.fulfilled, (t, s) => {
        const a = {
          ...s.payload,
          type: Se.world
        };
        t.worldTemplate = a, C.mainImage.worldTemplate.add(a)
      }).addCase(Os.rejected, (t, s) => {}).addCase(Rs.pending, t => {
        t.listStatus = m.pending
      }).addCase(Rs.fulfilled, (t, s) => {
        t.listStatus = m.fulfilled, s.payload && (t.list = [...t.list, ...s.payload], t.listOffset += 12)
      }).addCase(Rs.rejected, t => {
        t.listStatus = m.rejected
      })
    }
  }),
  {
    setActiveTemplate: Ff,
    setActiveTemplateTab: Qi,
    hideTemplates: _i,
    setTemplateOpacity: Qf,
    setReferredTemplate: zf,
    setMyTemplate: qf,
    setTemplateListOffset: k3,
    clearTemplatesListData: Hf,
    setShowTemplateDetailsPopup: Ar,
    setShowTemplateInfoPopup: Ga
  } = hr.actions,
  ft = {
    getReferredTemplate: Us,
    getTemplateById: Va,
    getWorldTemplate: Os,
    getList: Rs,
    getAvailableSizes: Of,
    subscribe: Uf
  },
  Lf = hr.reducer,
  Xf = ({
    show: n,
    setShow: t
  }) => n ? Ve.createPortal(e.jsx("div", {
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
  Vf = 1,
  zi = 0,
  qi = 100,
  Gf = ({
    rtl: n = !0
  }) => {
    const t = _(),
      s = l(o => o.template.opacity),
      [a, i] = u.useState(!1);
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
      children: [e.jsx(Xf, {
        show: a,
        setShow: i
      }), e.jsx(mt.Range, {
        direction: mt.Direction.Up,
        values: s,
        step: Vf,
        min: zi,
        max: qi,
        onChange: o => {
          t(Qf(o)), C.mainImage.worldTemplate.setOpacity(Number(o[0])), C.mainImage.tournamentTemplates.setOpacity(Number(o[0]))
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
              background: mt.getTrackBackground({
                values: s,
                colors: ["var(--font-secondary-color)", "var(--font-secondary-color)"],
                min: zi,
                max: qi,
                direction: mt.Direction.Up,
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
        }) => u.createElement("div", {
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
  Wf = () => {
    const n = l(s => s.tournament.activeTournamentTemplate),
      t = l(s => s.template.active) === Se.world;
    return n === null && !t ? null : e.jsx("div", {
      className: kf.container,
      children: e.jsx(Gf, {})
    })
  },
  Yf = "_button_xsy81_2",
  Jf = "_image_xsy81_19",
  Kf = "_enabled_xsy81_25",
  Zf = "_gray_xsy81_29",
  Ra = {
    button: Yf,
    image: Jf,
    enabled: Kf,
    gray: Zf
  },
  $f = () => {
    const n = _(),
      t = l(i => i.template.worldTemplate),
      s = l(i => i.template.active) === Se.world,
      a = [Ra.button];
    return s && a.push(Ra.enabled), t === null ? null : e.jsx("button", {
      className: a.join(" "),
      onPointerUp: () => {
        n(s ? _i() : Ff(Se.world))
      },
      children: e.jsx("img", {
        alt: "img",
        className: Ra.image,
        src: t.url
      })
    })
  },
  ex = () => e.jsx(re.Fragment, {
    children: e.jsx("div", {
      className: ka.layout,
      children: e.jsx("div", {
        className: ka.container,
        children: e.jsxs("div", {
          className: ka.buttons_container,
          children: [e.jsx($f, {}), e.jsx(Wf, {})]
        })
      })
    })
  }),
  tx = () => e.jsxs(e.Fragment, {
    children: [e.jsx(ex, {}), e.jsx(i_, {}), e.jsx(If, {}), e.jsx(v_, {})]
  }),
  nx = "_page_title_13ybj_1",
  sx = "_container_13ybj_9",
  ax = "_item_13ybj_13",
  ix = "_active_13ybj_18",
  ox = "_info_container_13ybj_34",
  rx = "_dot_13ybj_40",
  cx = "_title_text_13ybj_46",
  lx = "_capitalize_13ybj_50",
  dx = "_hint_text_13ybj_54",
  ux = "_date_text_13ybj_61",
  px = "_value_container_13ybj_66",
  mx = "_value_text_13ybj_74",
  hx = "_positive_color_13ybj_78",
  Ax = "_negative_color_13ybj_85",
  gx = "_last_text_13ybj_92",
  f = {
    page_title: nx,
    container: sx,
    item: ax,
    active: ix,
    info_container: ox,
    dot: rx,
    title_text: cx,
    capitalize: lx,
    hint_text: dx,
    date_text: ux,
    value_container: px,
    value_text: mx,
    positive_color: hx,
    negative_color: Ax,
    last_text: gx
  },
  _x = ({
    item: n
  }) => {
    const t = $(),
      s = $s(n.details.pixel),
      a = _();
    return e.jsxs("div", {
      className: `${f.item} ${f.active}`,
      onPointerUp: () => {
        t.push("/"), C.viewport.viewport.animate({
          scale: 25,
          time: 400,
          position: s
        }), C.mainImage.selectedPixel.draw(s), a(on(s)), t.push("/")
      },
      children: [e.jsxs("div", {
        className: f.info_container,
        children: [e.jsxs("div", {
          children: [e.jsx("span", {
            className: f.title_text,
            children: "Paint Pixel"
          }), e.jsx("span", {
            className: f.hint_text,
            children: `${s.x}, ${s.y}`
          })]
        }), e.jsx("div", {
          className: f.date_text,
          children: e.jsx("span", {
            children: Qe(new Date(n.dateTime))
          })
        })]
      }), e.jsx("div", {
        className: f.value_container,
        children: e.jsxs("span", {
          className: `${f.value_text} ${f.positive_color}`,
          children: ["+", new Intl.NumberFormat("fr", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          }).format(Math.abs(n.balanceChange)).replace(",", ".")]
        })
      })]
    })
  },
  fx = ({
    item: n
  }) => {
    const t = $(),
      s = {
        x: n.details.x,
        y: n.details.y
      },
      a = _();
    return e.jsxs("div", {
      className: `${f.item} ${f.active}`,
      onPointerUp: () => {
        t.push("/"), C.viewport.viewport.animate({
          scale: 25,
          time: 400,
          position: s
        }), C.mainImage.selectedPixel.draw(s), a(on(s)), t.push("/")
      },
      children: [e.jsxs("div", {
        className: f.info_container,
        children: [e.jsxs("div", {
          children: [e.jsx("span", {
            className: f.title_text,
            children: "Pixel Sale"
          }), e.jsx("span", {
            className: f.hint_text,
            children: `${s.x}, ${s.y}`
          }), e.jsx("span", {
            className: f.dot,
            children: "•"
          }), e.jsx(Rt, {
            address: n.details.buyer
          })]
        }), e.jsx("div", {
          className: f.date_text,
          children: e.jsx("span", {
            children: Qe(new Date(n.dateTime))
          })
        })]
      }), e.jsx("div", {
        className: f.value_container,
        children: e.jsxs("span", {
          className: `${f.value_text} ${f.positive_color}`,
          children: ["+", new Intl.NumberFormat("fr", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          }).format(n.balanceChange).replace(",", ".")]
        })
      })]
    })
  },
  xx = ({
    item: n
  }) => e.jsxs("div", {
    className: f.item,
    children: [e.jsxs("div", {
      className: f.info_container,
      children: [e.jsx("div", {
        children: e.jsx("span", {
          className: f.title_text,
          children: "Claim"
        })
      }), e.jsx("div", {
        className: f.date_text,
        children: e.jsx("span", {
          children: Qe(new Date(n.dateTime))
        })
      })]
    }), e.jsx("div", {
      className: f.value_container,
      children: e.jsxs("span", {
        className: `${f.value_text} ${f.positive_color}`,
        children: ["+", n.balanceChange.toFixed(2)]
      })
    })]
  }),
  vx = ({
    item: n
  }) => e.jsxs("div", {
    className: f.item,
    children: [e.jsxs("div", {
      className: f.info_container,
      children: [e.jsxs("div", {
        children: [e.jsx("span", {
          className: f.title_text,
          children: n.details.type
        }), e.jsx("span", {
          className: f.hint_text,
          children: "Boost"
        })]
      }), e.jsx("div", {
        className: f.date_text,
        children: e.jsx("span", {
          children: Qe(new Date(n.dateTime))
        })
      })]
    }), e.jsx("div", {
      className: f.value_container,
      children: e.jsx("span", {
        className: `${f.value_text} ${f.negative_color}`,
        children: n.balanceChange
      })
    })]
  }),
  yx = ({
    item: n
  }) => e.jsxs("div", {
    className: f.item,
    children: [e.jsxs("div", {
      className: f.info_container,
      children: [e.jsxs("div", {
        children: [e.jsx("span", {
          className: `${f.title_text} ${f.capitalize}`,
          children: `${n.details.from} > ${n.details.to}`
        }), e.jsx("span", {
          className: f.hint_text,
          children: "League"
        })]
      }), e.jsx("div", {
        className: f.date_text,
        children: e.jsx("span", {
          children: Qe(new Date(n.dateTime))
        })
      })]
    }), e.jsx("div", {
      className: f.value_container
    })]
  }),
  wx = ({
    item: n
  }) => e.jsxs("div", {
    className: f.item,
    children: [e.jsxs("div", {
      className: f.info_container,
      children: [e.jsxs("div", {
        children: [e.jsx("span", {
          className: f.title_text,
          children: "Referral"
        }), e.jsx("span", {
          className: f.dot,
          children: "•"
        }), e.jsx(Rt, {
          address: n.details.name
        })]
      }), e.jsx("div", {
        className: f.date_text,
        children: e.jsx("span", {
          children: Qe(new Date(n.dateTime))
        })
      })]
    }), e.jsx("div", {
      className: f.value_container,
      children: e.jsxs("span", {
        className: `${f.value_text} ${f.positive_color}`,
        children: ["+", n.balanceChange]
      })
    })]
  }),
  bx = ({
    item: n
  }) => e.jsxs("div", {
    className: f.item,
    children: [e.jsxs("div", {
      className: f.info_container,
      children: [e.jsxs("div", {
        children: [e.jsx("span", {
          className: f.title_text,
          children: `${n.details.type} ${n.details.round_id?"for round №"+n.details.round_id:""}`
        }), e.jsx("span", {
          className: f.hint_text,
          children: "Special"
        })]
      }), e.jsx("div", {
        className: f.date_text,
        children: e.jsx("span", {
          children: Qe(new Date(n.dateTime))
        })
      })]
    }), e.jsx("div", {
      className: f.value_container,
      children: e.jsxs("span", {
        className: `${f.value_text} ${n.balanceChange>=0?f.positive_color:f.negative_color}`,
        children: [n.balanceChange >= 0 ? "+" : "", n.balanceChange]
      })
    })]
  }),
  jx = ({
    item: n
  }) => e.jsxs("div", {
    className: f.item,
    children: [e.jsxs("div", {
      className: f.info_container,
      children: [e.jsxs("div", {
        children: [e.jsx("span", {
          className: `${f.title_text} ${f.capitalize}`,
          children: `${n.details.type}`
        }), e.jsxs("span", {
          className: f.hint_text,
          children: [n.details.quantity, " pc."]
        })]
      }), e.jsx("div", {
        className: f.date_text,
        children: e.jsx("span", {
          children: Qe(new Date(n.dateTime))
        })
      })]
    }), e.jsxs("div", {
      className: f.value_container,
      children: ["-", n.details.price, " ", e.jsx(Fn, {
        fontSize: 14
      })]
    })]
  }),
  Cx = ({
    item: n
  }) => e.jsxs("div", {
    className: f.item,
    children: [e.jsxs("div", {
      className: f.info_container,
      children: [e.jsxs("div", {
        children: [e.jsx("span", {
          className: f.title_text,
          children: n.details.type
        }), e.jsx("span", {
          className: f.hint_text,
          children: "Task"
        })]
      }), e.jsx("div", {
        className: f.date_text,
        children: e.jsx("span", {
          children: Qe(new Date(n.dateTime))
        })
      })]
    }), e.jsx("div", {
      className: f.value_container,
      children: e.jsxs("span", {
        className: `${f.value_text} ${f.positive_color}`,
        children: ["+", n.balanceChange]
      })
    })]
  }),
  Px = ({
    item: n
  }) => e.jsxs("div", {
    className: f.item,
    children: [e.jsxs("div", {
      className: f.info_container,
      children: [e.jsxs("div", {
        children: [e.jsx("span", {
          className: f.title_text,
          children: "Ref reward"
        }), e.jsx("span", {
          className: f.hint_text,
          children: n.details.type
        })]
      }), e.jsx("div", {
        className: f.date_text,
        children: e.jsx("span", {
          children: Qe(new Date(n.dateTime))
        })
      })]
    }), e.jsx("div", {
      className: f.value_container,
      children: e.jsxs("span", {
        className: `${f.value_text} ${f.positive_color}`,
        children: ["+", n.balanceChange.toFixed(2)]
      })
    })]
  }),
  Nx = ({
    item: n
  }) => n.action === "buy pixel" ? e.jsx(_x, {
    item: n
  }) : n.action === "sell pixel" ? e.jsx(fx, {
    item: n
  }) : n.action === "claim" ? e.jsx(xx, {
    item: n
  }) : n.action === "get boost" ? e.jsx(vx, {
    item: n
  }) : n.action === "league transfer" ? e.jsx(yx, {
    item: n
  }) : n.action === "referral" ? e.jsx(wx, {
    item: n
  }) : n.action === "special" ? e.jsx(bx, {
    item: n
  }) : n.action === "purchase" ? e.jsx(jx, {
    item: n
  }) : n.action === "complete task" ? e.jsx(Cx, {
    item: n
  }) : n.action === "referrer reward" ? e.jsx(Px, {
    item: n
  }) : (console.log("unknown action: ", n.action), null),
  Ms = D("history/get", async ({
    offset: n,
    limit: t
  }) => (await O.getHistory({
    offset: n,
    limit: t
  })).data),
  Sx = {
    list: [],
    status: m.idle
  },
  gr = ie({
    name: "history",
    initialState: Sx,
    reducers: {
      resetHistory: n => {
        n.list = [], n.status = m.idle
      }
    },
    extraReducers: n => {
      n.addCase(Ms.pending, (t, s) => {
        t.status = m.pending
      }).addCase(Ms.fulfilled, (t, s) => {
        t.status = m.fulfilled, t.list = s.payload
      }).addCase(Ms.rejected, (t, s) => {
        t.status = m.rejected
      })
    }
  });
gr.actions;
const fi = {
    get: Ms
  },
  Ix = gr.reducer,
  Tx = () => {
    const n = _(),
      t = l(a => a.history.list),
      s = l(a => a.history.status);
    return u.useEffect(() => {
      n(fi.get({
        offset: 0,
        limit: 50
      }))
    }, []), e.jsxs("div", {
      className: f.container,
      children: [t.map((a, i) => e.jsx(Nx, {
        item: a
      }, i)), s === m.fulfilled && t.length >= 50 && e.jsx("div", {
        className: f.last_text,
        children: e.jsx("span", {
          children: "Last 50 events"
        })
      })]
    })
  },
  Dx = () => e.jsxs(W, {
    children: [e.jsx("h1", {
      className: f.page_title,
      children: "History"
    }), e.jsx(Tx, {})]
  }),
  Ex = "_text_layout_1xggq_1",
  Bx = "_text_1xggq_1",
  kx = "_button_layout_1xggq_14",
  Rx = "_button_layout_placeholder_1xggq_26",
  Ux = "_button_1xggq_14",
  vn = {
    text_layout: Ex,
    text: Bx,
    button_layout: kx,
    button_layout_placeholder: Rx,
    button: Ux
  },
  Ox = () => e.jsxs(W, {
    children: [e.jsx("div", {
      className: vn.text_layout,
      children: e.jsxs("span", {
        className: vn.text,
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
      className: vn.button_layout_placeholder
    }), e.jsx("div", {
      className: vn.button_layout,
      children: e.jsxs("button", {
        className: vn.button,
        onPointerUp: () => {
          fe("https://t.me/notpixel_channel")
        },
        children: [e.jsx("img", {
          alt: "tg_logo",
          src: Hn
        }), "Telegram Channel"]
      })
    })]
  }),
  Mx = "_text_layout_1h04i_1",
  Fx = "_text_1h04i_1",
  Qx = "_button_layout_1h04i_14",
  zx = "_button_layout_placeholder_1h04i_26",
  qx = "_button_1h04i_14",
  yn = {
    text_layout: Mx,
    text: Fx,
    button_layout: Qx,
    button_layout_placeholder: zx,
    button: qx
  },
  Hx = () => e.jsxs(W, {
    children: [e.jsx("div", {
      className: yn.text_layout,
      children: e.jsxs("span", {
        className: yn.text,
        children: [e.jsx("h1", {
          children: "Awards"
        }), e.jsx("p", {
          children: "There will be something here, but not now."
        })]
      })
    }), e.jsx("div", {
      className: yn.button_layout_placeholder
    }), e.jsx("div", {
      className: yn.button_layout,
      children: e.jsxs("button", {
        className: yn.button,
        onPointerUp: () => {
          fe(ei)
        },
        children: [e.jsx("img", {
          alt: "tg_logo",
          src: Hn
        }), "Not Pixel 42"]
      })
    })]
  }),
  Lx = "_layout_1drph_1",
  Xx = "_container_1drph_11",
  Vx = "_bold_1drph_22",
  Gx = "_info_container_1drph_26",
  Wx = "_title_1drph_33",
  Yx = "_description_1drph_38",
  Jx = "_image_container_1drph_43",
  Kx = "_image_1drph_43",
  Zx = "_extra_info_container_1drph_53",
  $x = "_npx_tokens_1drph_77",
  ev = "_button_container_1drph_81",
  tv = "_button_1drph_81",
  xe = {
    layout: Lx,
    container: Xx,
    bold: Vx,
    info_container: Gx,
    title: Wx,
    description: Yx,
    image_container: Jx,
    image: Kx,
    extra_info_container: Zx,
    npx_tokens: $x,
    button_container: ev,
    button: tv
  },
  nv = "/assets/intro-Brtd1phH.webp",
  ye = "data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M5%200C2.23858%200%200%202.23858%200%205V27C0%2029.7614%202.23858%2032%205%2032H27C29.7614%2032%2032%2029.7614%2032%2027V5C32%202.23858%2029.7614%200%2027%200H5ZM21.4261%2010.5739H10.5739V21.4261H21.4261V10.5739Z'%20fill='white'/%3e%3c/svg%3e",
  sv = "data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M5%200C2.23858%200%200%202.23858%200%205V27C0%2029.7614%202.23858%2032%205%2032H27C29.7614%2032%2032%2029.7614%2032%2027V5C32%202.23858%2029.7614%200%2027%200H5ZM21.4261%2010.5739H10.5739V21.4261H21.4261V10.5739Z'%20fill='%238794a1'/%3e%3c/svg%3e",
  av = {
    white: ye,
    gray: sv
  },
  Un = ({
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
    src: av[a],
    ...i
  }),
  iv = {
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
  ov = () => {
    const n = $();
    return Ve.createPortal(e.jsx("div", {
      className: xe.layout,
      children: e.jsxs(nn.div, {
        className: xe.container,
        ...iv,
        children: [e.jsxs("div", {
          className: xe.info_container,
          children: [e.jsx("span", {
            className: `${xe.title} ${xe.bold}`,
            children: "New Pixel Order!"
          }), e.jsx("span", {
            className: xe.description,
            children: "Not Pixel is a blank canvas 1000×1000px where Telegram users transform pixels."
          })]
        }), e.jsx("div", {
          className: xe.image_container,
          children: e.jsx("img", {
            alt: "image",
            className: xe.image,
            src: nv
          })
        }), e.jsxs("div", {
          className: xe.extra_info_container,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: `${xe.bold}`,
              children: "Probably all you need to know:"
            })
          }), e.jsx("div", {
            children: e.jsxs("ol", {
              children: [e.jsx("li", {
                children: "You can put some pixels on it, but you have to wait to continue."
              }), e.jsxs("li", {
                children: ["Get rewarded in", " ", e.jsx(Un, {
                  size: 14,
                  style: {
                    transform: "translateY(1.5px)"
                  }
                }), e.jsx("span", {
                  className: `${xe.npx_tokens} ${xe.bold}`,
                  children: " Not PX "
                }), " ", "tokens for repainting and owning pixels."]
              }), e.jsx("li", {
                children: "Be creative. Enjoy."
              })]
            })
          })]
        }), e.jsx("div", {
          className: xe.button_container,
          children: e.jsx("button", {
            className: xe.button,
            onPointerUp: () => {
              n.push("/"), dn.save("skipIntro", "true")
            },
            children: "Let’s Gooooooo!"
          })
        })]
      })
    }), document.body)
  },
  rv = "_text_layout_q4wab_1",
  cv = "_text_q4wab_1",
  lv = "_button_layout_q4wab_15",
  dv = "_button_layout_placeholder_q4wab_27",
  uv = "_button_q4wab_15",
  wn = {
    text_layout: rv,
    text: cv,
    button_layout: lv,
    button_layout_placeholder: dv,
    button: uv
  },
  pv = () => e.jsxs(W, {
    children: [e.jsx("div", {
      className: wn.text_layout,
      children: e.jsxs("span", {
        className: wn.text,
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
      className: wn.button_layout_placeholder
    }), e.jsx("div", {
      className: wn.button_layout,
      children: e.jsxs("button", {
        className: wn.button,
        onPointerUp: () => {
          ia("https://ton.org/en/open-league")
        },
        children: ["Details on ton.org ", e.jsx(B, {
          size: 16,
          children: ""
        })]
      })
    })]
  }),
  mv = "_text_layout_q4wab_1",
  hv = "_text_q4wab_1",
  Av = "_button_layout_q4wab_15",
  gv = "_button_layout_placeholder_q4wab_27",
  _v = "_button_q4wab_15",
  Hi = {
    text_layout: mv,
    text: hv,
    button_layout: Av,
    button_layout_placeholder: gv,
    button: _v
  },
  fv = () => e.jsx(W, {
    children: e.jsx("div", {
      className: Hi.text_layout,
      children: e.jsxs("span", {
        className: Hi.text,
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
  xv = "_close_container_1ovp2_1",
  vv = "_title_container_1ovp2_12",
  yv = "_title_1ovp2_12",
  wv = "_frens_count_1ovp2_21",
  bv = "_content_1ovp2_25",
  jv = "_image_container_1ovp2_32",
  Cv = "_image_1ovp2_32",
  Pv = "_description_container_1ovp2_41",
  Nv = "_white_1ovp2_50",
  Sv = "_gray_1ovp2_54",
  Iv = "_purple_1ovp2_58",
  Tv = "_bold_1ovp2_64",
  Dv = "_center_1ovp2_68",
  Ev = "_info_layout_1ovp2_72",
  Bv = "_benefits_container_1ovp2_84",
  kv = "_benefits_item_1ovp2_92",
  Rv = "_divider_1ovp2_98",
  Uv = "_buttons_container_1ovp2_105",
  Ov = "_button_copy_1ovp2_112",
  Mv = "_button_1ovp2_105",
  Fv = "_share_container_1ovp2_137",
  Qv = "_share_row_1ovp2_143",
  zv = "_crypto_image_1ovp2_150",
  qv = "_not_available_1ovp2_155",
  ce = {
    close_container: xv,
    title_container: vv,
    title: yv,
    frens_count: wv,
    content: bv,
    image_container: jv,
    image: Cv,
    description_container: Pv,
    white: Nv,
    gray: Sv,
    purple: Iv,
    bold: Tv,
    center: Dv,
    info_layout: Ev,
    benefits_container: Bv,
    benefits_item: kv,
    divider: Rv,
    buttons_container: Uv,
    button_copy: Ov,
    button: Mv,
    share_container: Fv,
    share_row: Qv,
    crypto_image: zv,
    not_available: qv
  },
  Hv = "/assets/sitting_chars_animation_ny_snow-er9QiNbn.gif",
  Lv = "_link_a4r15_1",
  Xv = {
    link: Lv
  },
  mn = ({
    url: n,
    className: t = "",
    text: s = "Copy referral link"
  }) => {
    const [a, i] = u.useState(null), o = u.useRef(null);
    return e.jsxs("div", {
      className: `${Xv.link} ${t}`,
      onPointerUp: async r => {
        var d, p;
        const c = await Mn(n);
        r.stopPropagation(), c ? (i("Copied!"), (p = (d = window.Telegram.WebApp) == null ? void 0 : d.HapticFeedback) == null || p.notificationOccurred("success")) : i("Can't copy :-("), clearTimeout(o.current), o.current = setTimeout(() => {
          i(null)
        }, 3e3)
      },
      children: [a === null ? e.jsx("span", {
        children: s
      }) : a, a === null ? e.jsx(B, {
        size: 20,
        children: ""
      }) : ""]
    })
  },
  Vv = () => {
    const {
      t: n
    } = ro("translation", {
      keyPrefix: "frens"
    }), [t, s] = u.useState(!1), a = l(p => p.user.user);
    let i = `${Et}?startapp=f${(a==null?void 0:a.id)||""}`;
    a && a.squad && a.squad.id !== null && (i += `_s${a.squad.id}`);
    const o = (a == null ? void 0 : a.friends) || 0,
      r = l(ii),
      [c, d] = u.useState([]);
    return u.useEffect(() => {
      const p = async () => {
        var A;
        try {
          const h = await O.getRevShareInfo();
          h.status === 200 && h.data && d(h.data)
        } catch (h) {
          const g = h.response;
          g && g.status === 403 && ((A = g.data) == null ? void 0 : A.code) === 20 && s(!0)
        }
      };
      a && a.friends >= 1e4 && p()
    }, [a]), e.jsxs(W, {
      children: [e.jsxs("div", {
        className: ce.content,
        children: [e.jsx("div", {
          className: ce.image_container,
          children: e.jsx("img", {
            alt: "image",
            className: ce.image,
            src: Hv
          })
        }), e.jsx("div", {
          className: ce.title_container,
          children: e.jsx("div", {
            className: ce.title,
            children: n("invite")
          })
        }), e.jsxs("div", {
          className: ce.description_container,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              children: n("description")
            })
          }), e.jsxs("div", {
            children: [e.jsxs("span", {
              children: [" ", n("your"), " "]
            }), e.jsx("span", {
              className: `${ce.frens_count} ${ce.bold}`,
              children: o
            })]
          })]
        }), e.jsxs("div", {
          className: ce.buttons_container,
          children: [e.jsx(mn, {
            url: i,
            className: ce.button_copy
          }), e.jsx("button", {
            className: ce.button,
            onPointerUp: p => {
              p.stopPropagation(), fe(`https://t.me/share/url?url=${i}`)
            },
            children: "Share"
          })]
        })]
      }), t && e.jsx("div", {
        className: ce.not_available,
        children: "10k frens were not invited until December 20th"
      }), c && c.length > 0 && e.jsx("div", {
        className: ce.info_layout,
        children: e.jsxs("div", {
          className: ce.benefits_container,
          children: [e.jsxs("div", {
            className: ce.share_container,
            children: [e.jsxs("div", {
              className: ce.share_row,
              children: [e.jsx("div", {}), e.jsx("div", {
                children: "Crypto"
              }), e.jsx("div", {
                children: "Purchases amount"
              }), e.jsx("div", {
                children: "Rev. share total"
              })]
            }), c.map(p => {
              const A = r.filter(g => g.currency_id === p.currencyId);
              if (A.length === 0) return null;
              const h = A[0];
              return e.jsxs("div", {
                className: ce.share_row,
                children: [e.jsx("img", {
                  alt: "currency",
                  src: h.image,
                  className: ce.crypto_image
                }), e.jsx("div", {
                  children: h.name
                }), e.jsx("div", {
                  children: de({
                    num: Math.floor(p.totalPurchases)
                  })
                }), e.jsx("div", {
                  children: de({
                    num: Math.floor(p.totalSpend)
                  })
                })]
              }, p.currencyId)
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
  Gv = "_container_19cbp_1",
  Wv = "_text_container_19cbp_9",
  Yv = "_text_block_19cbp_16",
  Jv = "_gray_19cbp_24",
  Kv = "_purple_19cbp_28",
  Zv = "_total_19cbp_35",
  $v = "_bold_19cbp_39",
  ey = "_indicator_19cbp_43",
  ty = "_button_container_19cbp_52",
  ny = "_button_19cbp_52",
  Ce = {
    container: Gv,
    text_container: Wv,
    text_block: Yv,
    gray: Jv,
    purple: Kv,
    total: Zv,
    bold: $v,
    indicator: ey,
    button_container: ty,
    button: ny
  },
  je = ({
    num: n
  }) => isNaN(n) ? null : new Intl.NumberFormat("en-US").format(n),
  sy = "_layout_1ulm2_1",
  ay = "_container_1ulm2_11",
  iy = "_stars_1ulm2_17",
  oy = "_animStar_1ulm2_1",
  Zn = {
    layout: sy,
    container: ay,
    stars: iy,
    animStar: oy
  },
  ry = () => {
    const [n, t] = u.useState(window.innerWidth);

    function s(a) {
      t(a.target.innerWidth)
    }
    return u.useEffect(() => (window.addEventListener("resize", s), () => {
      window.removeEventListener("resize", s)
    }), []), n
  },
  cy = [{
    count: 50,
    speed: 50
  }, {
    count: 50,
    speed: 30
  }, {
    count: 50,
    speed: 90
  }],
  ly = n => {
    const t = window.innerWidth,
      s = window.innerHeight * 2;
    return Array.from(Array(n)).reduce(a => {
      const i = V(0, t),
        o = V(0, s);
      return a + `${i}px ${o}px #fff, `
    }, "").replace(/,(\s+)?$/, "")
  },
  dy = u.memo(() => (ry(), e.jsx("div", {
    className: Zn.layout,
    children: e.jsx("div", {
      className: Zn.container,
      children: cy.map((n, t) => {
        const s = ly(n.count);
        return e.jsx("div", {
          className: Zn.stars,
          style: {
            animation: `${Zn.animStar} ${n.speed}s linear infinite`,
            boxShadow: s
          }
        }, t)
      })
    })
  })), () => !1),
  uy = () => {
    const n = $(),
      [t, s] = u.useState(0),
      [a, i] = u.useState(0),
      [o, r] = u.useState(0),
      [c, d] = u.useState(0),
      [p, A] = u.useState(0),
      [h, g] = u.useState(0),
      [w, x] = u.useState([]);
    return u.useEffect(() => {
      try {
        O.getStats().then(v => {
          const y = v.data;
          s(y.totalPlayers), i(y.totalRepaints)
        }), O.getMoreStats().then(v => {
          const y = v.data;
          r(y.premium_users), d(y.active_users), A(y.daily_users), g(y.daily_repaints), x(Object.keys(y.top_countries).map(P => ({
            key: P,
            value: y.top_countries[P]
          })))
        })
      } catch {}
    }, []), e.jsxs(W, {
      children: [e.jsx(dy, {}), e.jsx("div", {
        style: {
          height: 50
        }
      }), e.jsxs("div", {
        className: Ce.container,
        children: [e.jsxs("div", {
          className: Ce.text_container,
          children: [e.jsxs("div", {
            className: Ce.text_block,
            children: [e.jsx("span", {
              className: Ce.gray,
              children: "Total painters"
            }), e.jsx("span", {
              className: `${Ce.bold}`,
              style: {
                fontSize: 22
              },
              children: e.jsx(je, {
                num: t
              })
            })]
          }), e.jsxs("div", {
            className: Ce.text_block,
            children: [e.jsx("span", {
              className: Ce.gray,
              children: "Total repaints"
            }), e.jsx("span", {
              className: `${Ce.bold}`,
              children: e.jsx(je, {
                num: Math.floor(a)
              })
            })]
          }), e.jsxs("div", {
            className: Ce.text_block,
            children: [e.jsx("div", {
              children: e.jsx("span", {
                className: Ce.purple,
                children: "Telegram Premium "
              })
            }), e.jsx("span", {
              className: `${Ce.bold}`,
              children: e.jsx(je, {
                num: Math.floor(o)
              })
            })]
          })]
        }), e.jsx("div", {
          className: Ce.button_container,
          children: e.jsx("button", {
            className: Ce.button,
            onPointerUp: () => {
              n.push("/invite-frens")
            },
            children: "Invite fren"
          })
        })]
      })]
    })
  },
  py = "_main_info_container_1gqs9_2",
  my = "_image_container_1gqs9_11",
  hy = "_image_1gqs9_11",
  Ay = "_title_1gqs9_21",
  gy = "_variants_container_1gqs9_25",
  _y = "_variant_item_1gqs9_33",
  fy = "_variant_left_container_1gqs9_39",
  xy = "_variant_middle_container_1gqs9_45",
  vy = "_dot_1gqs9_53",
  yy = "_variant_right_container_1gqs9_59",
  wy = "_button_container_1gqs9_66",
  by = "_button_1gqs9_66",
  jy = "_bold_1gqs9_96",
  Cy = "_gray_1gqs9_100",
  Py = "_blue_1gqs9_104",
  Ny = "_text_1gqs9_109",
  z = {
    main_info_container: py,
    image_container: my,
    image: hy,
    title: Ay,
    variants_container: gy,
    variant_item: _y,
    variant_left_container: fy,
    variant_middle_container: xy,
    dot: vy,
    variant_right_container: yy,
    button_container: wy,
    button: by,
    bold: jy,
    gray: Cy,
    blue: Py,
    text: Ny
  },
  _r = "/assets/button_dog_200x200-DtCBiZdv.gif",
  Sy = n => {
    const t = n / 1e3,
      s = Math.floor(t / 60),
      a = t % 60;
    return a === 0 ? `${s} min` : `${s} min ${a} sec`
  },
  Iy = n => {
    if (n < 0 || !n) return "";
    const t = Math.floor(n / 60),
      s = n % 60;
    return s < 10 ? `${t}:0${s}` : `${t}:${s}`
  },
  Ty = () => {
    const n = _(),
      t = $(),
      s = l(p => p.mining.maxCharges),
      a = l(p => p.mining.charges),
      i = l(p => p.mining.reChargeSpeed),
      o = Sy(i),
      r = l(p => p.mining.reChargeTs),
      [c, d] = u.useState("");
    return u.useEffect(() => {
      if (a !== 0) return () => {};
      const p = setInterval(() => {
        const h = Date.now() - r,
          g = i - h,
          w = Math.round(g / 1e3);
        d(Iy(w))
      }, 500);
      return () => {
        clearInterval(p)
      }
    }, [r, i, a]), e.jsxs(W, {
      children: [e.jsx("div", {
        style: {
          height: 50
        }
      }), e.jsx("div", {
        className: z.image_container,
        children: e.jsx("img", {
          alt: "image",
          className: z.image,
          src: _r
        })
      }), e.jsxs("div", {
        className: z.main_info_container,
        children: [e.jsx("div", {
          children: e.jsx("span", {
            className: `${z.title} ${z.bold}`,
            children: "Energy is over"
          })
        }), e.jsxs("div", {
          children: [e.jsx("span", {
            className: `${z.gray}`,
            children: "Energy limit: "
          }), e.jsxs("span", {
            children: [a, "/", s]
          })]
        }), e.jsxs("div", {
          children: [e.jsx("span", {
            className: `${z.gray}`,
            children: "Recovery speed:"
          }), e.jsxs("span", {
            children: [" ", o]
          })]
        })]
      }), e.jsxs("div", {
        className: z.variants_container,
        children: [e.jsxs("div", {
          className: z.variant_item,
          children: [e.jsx("div", {
            className: z.variant_left_container,
            children: e.jsx(B, {
              size: 28,
              children: ""
            })
          }), e.jsxs("div", {
            className: z.variant_middle_container,
            children: [e.jsxs("div", {
              children: [e.jsx("span", {
                className: z.bold,
                children: "Just wait"
              }), a === 0 && c !== "" && e.jsx("span", {
                className: z.dot,
                children: "•"
              }), a === 0 && c !== "" && e.jsx("span", {
                className: z.gray,
                children: c
              })]
            }), e.jsx("div", {
              children: e.jsx("span", {
                className: z.gray,
                children: "Serene i fold my hands and wait."
              })
            })]
          }), e.jsx("div", {
            className: z.variant_right_container
          })]
        }), e.jsxs("div", {
          className: z.variant_item,
          onPointerUp: () => {
            n(Mp("boosts")), t.push("/claiming")
          },
          children: [e.jsx("div", {
            className: z.variant_left_container,
            children: e.jsx(B, {
              size: 28,
              children: ""
            })
          }), e.jsxs("div", {
            className: z.variant_middle_container,
            children: [e.jsx("div", {
              children: e.jsx("span", {
                className: `${z.bold} ${z.blue}`,
                children: "Use boosters"
              })
            }), e.jsx("div", {
              children: e.jsx("span", {
                className: z.gray,
                children: "Upgrade Energy limit and Speed."
              })
            })]
          }), e.jsx("div", {
            className: z.variant_right_container,
            children: e.jsx(B, {
              size: 20,
              children: ""
            })
          })]
        }), e.jsxs("div", {
          className: z.variant_item,
          onPointerUp: () => {
            n(Ge(1)), n(We()), t.push("/stars")
          },
          children: [e.jsx("div", {
            className: z.variant_left_container,
            children: e.jsx(B, {
              size: 28,
              children: ""
            })
          }), e.jsxs("div", {
            className: z.variant_middle_container,
            children: [e.jsx("div", {
              children: e.jsx("span", {
                className: `${z.blue} ${z.bold}`,
                children: "Use Stars Shop"
              })
            }), e.jsx("div", {
              children: e.jsx("span", {
                className: z.gray,
                children: "Full energy right now for Stars."
              })
            })]
          }), e.jsx("div", {
            className: z.variant_right_container,
            children: e.jsx(B, {
              size: 20,
              children: ""
            })
          })]
        })]
      }), e.jsx("div", {
        className: z.button_container,
        children: e.jsx("button", {
          className: z.button,
          onPointerUp: () => {
            t.push("/")
          },
          children: "Okay"
        })
      })]
    })
  },
  Dy = "_close_container_5xtkt_1",
  Ey = "_title_container_5xtkt_12",
  By = "_title_5xtkt_12",
  ky = "_small_title_container_5xtkt_23",
  Ry = "_small_title_5xtkt_23",
  Uy = "_content_5xtkt_32",
  Oy = "_image_container_5xtkt_40",
  My = "_image_placeholder_5xtkt_46",
  Fy = "_image_5xtkt_40",
  Qy = "_how_container_5xtkt_58",
  zy = "_description_container_5xtkt_63",
  qy = "_white_5xtkt_72",
  Hy = "_gray_5xtkt_76",
  Ly = "_bold_5xtkt_80",
  Xy = "_center_5xtkt_84",
  Vy = "_claim_button_container_5xtkt_88",
  Gy = "_claim_button_5xtkt_88",
  Wy = "_no_button_5xtkt_107",
  Yy = "_info_layout_5xtkt_119",
  Jy = "_rewards_layout_5xtkt_131",
  Ky = "_rewards_grid_container_5xtkt_137",
  Zy = "_reward_item_5xtkt_143",
  $y = "_reward_item_completed_5xtkt_153",
  ew = "_reward_item_content_container_5xtkt_166",
  tw = "_reward_item_active_5xtkt_179",
  nw = "_reward_item_image_container_5xtkt_183",
  sw = "_reward_item_amount_5xtkt_187",
  aw = "_reward_item_amount_active_5xtkt_201",
  iw = "_reward_item_amount_premium_5xtkt_205",
  ow = "_reward_item_title_5xtkt_210",
  rw = "_reward_item_title_premium_5xtkt_216",
  cw = "_reward_item_image_5xtkt_183",
  R = {
    close_container: Dy,
    title_container: Ey,
    title: By,
    small_title_container: ky,
    small_title: Ry,
    content: Uy,
    image_container: Oy,
    image_placeholder: My,
    image: Fy,
    how_container: Qy,
    description_container: zy,
    white: qy,
    gray: Hy,
    bold: Ly,
    center: Xy,
    claim_button_container: Vy,
    claim_button: Gy,
    no_button: Wy,
    info_layout: Yy,
    rewards_layout: Jy,
    rewards_grid_container: Ky,
    reward_item: Zy,
    reward_item_completed: $y,
    reward_item_content_container: ew,
    reward_item_active: tw,
    reward_item_image_container: nw,
    reward_item_amount: sw,
    reward_item_amount_active: aw,
    reward_item_amount_premium: iw,
    reward_item_title: ow,
    reward_item_title_premium: rw,
    reward_item_image: cw
  },
  lw = ({
    secondsLeft: n
  }) => {
    const t = _(),
      s = "dailyTransactionInfo",
      a = l(ap),
      i = l(x => x.daily.getDailyListFetchStatus),
      o = l(x => x.daily.getFirstDailyFetchStatus),
      r = i === m.fulfilled,
      c = cn(),
      [d, p] = ln(),
      [A, h] = u.useState(!1),
      g = l(ot);
    u.useEffect(() => {
      if (!a || !r) return;
      const x = localStorage.getItem(s);
      if (x) {
        const v = JSON.parse(x);
        v.dailyId === a.id && Date.now() - v.ts < 10 * 60 * 1e3 ? h(!0) : h(!1), Date.now() - v.ts >= 10 * 60 * 1e3 && localStorage.removeItem(s)
      }
    }, [a]);
    const w = async () => {
      try {
        const x = a.prices[0],
          v = await O.startShopTransaction({
            buyerWallet: c,
            currencyId: 2,
            daily: !0,
            quantity: x.quantity,
            goodId: a.id
          }),
          y = we.beginCell().storeUint(0, 32).storeStringTail(v.data.txMemCode).endCell(),
          P = {
            validUntil: Math.floor(Date.now() / 1e3) + 600,
            messages: [{
              address: Qa,
              amount: String(we.toNano(v.data.strAmount)),
              payload: y.toBoc().toString("base64")
            }]
          },
          ge = await d.sendTransaction(P);
        localStorage.setItem(s, JSON.stringify({
          ts: Date.now(),
          dailyId: a.id
        })), t(k({
          id: performance.now(),
          text: "Success! Wait 3-5 min and reload the app.",
          icon: ""
        })), h(!0)
      } catch (x) {
        console.warn(x), t(k({
          id: performance.now(),
          text: "Error! Wait 5 min before starting a new transaction."
        }))
      }
    };
    if (r) {
      const x = a.prices[0];
      let v = `Claim for ${x.price} TON`;
      return n && (v = `Claim in ${Uc(n)}`), A && (v = "Pending transaction..."), e.jsxs("div", {
        className: R.content,
        children: [e.jsx("div", {
          className: R.description_container,
          children: e.jsx("div", {
            children: e.jsxs("span", {
              children: ["Day ", a.id]
            })
          })
        }), e.jsx("div", {
          className: R.image_container,
          children: e.jsx("img", {
            alt: "image",
            className: R.image,
            src: a.image_url
          })
        }), e.jsx("div", {
          className: R.title_container,
          children: e.jsx("div", {
            className: R.title,
            children: `${a.name} x${x.quantity}`
          })
        }), e.jsx("div", {
          className: R.how_container,
          children: e.jsx(pn, {
            onPointerUp: y => {
              y.stopPropagation(), t(Mo(!0))
            },
            children: "How it works"
          })
        }), e.jsxs("div", {
          className: R.claim_button_container,
          children: [g !== Ae && e.jsx("button", {
            className: R.no_button,
            children: "Desktop version only"
          }), c !== "" && g === Ae && e.jsx("button", {
            disabled: o === m.pending || A,
            className: R.claim_button,
            onPointerUp: async () => {
              n || A || w()
            },
            children: v
          }), c === "" && g === Ae && e.jsx("button", {
            className: R.claim_button,
            onPointerUp: async () => {
              await d.openModal()
            },
            children: "Connect wallet"
          })]
        })]
      })
    }
    return e.jsxs("div", {
      className: R.content,
      children: [e.jsx("div", {
        className: R.description_container,
        children: e.jsx("div", {
          children: e.jsx(Oe, {
            show: !0,
            children: "Loading..."
          })
        })
      }), e.jsx("div", {
        className: R.image_container,
        children: e.jsx("div", {
          className: R.image_placeholder
        })
      }), e.jsx("div", {
        className: R.title_container,
        children: e.jsx("div", {
          className: R.title,
          children: e.jsx("div", {
            children: e.jsx(Oe, {
              show: !0,
              children: "Loading..."
            })
          })
        })
      }), e.jsx("div", {
        className: R.claim_button_container,
        children: e.jsx("button", {
          className: R.claim_button,
          disabled: !0,
          children: "Loading..."
        })
      })]
    })
  },
  dw = "data:image/png;base64,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",
  uw = "data:image/png;base64,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",
  pw = "data:image/png;base64,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",
  mw = "data:image/png;base64,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",
  hw = "_container_11l5m_1",
  Aw = "_divider_11l5m_23",
  gw = "_row_11l5m_28",
  _w = "_row_title_11l5m_40",
  fw = "_row_title_main_11l5m_44",
  xw = "_row_hint_11l5m_49",
  vw = "_row_value_11l5m_55",
  yw = "_row_value_main_11l5m_59",
  ww = "_mining_percent_11l5m_64",
  bw = "_active_row_11l5m_74",
  jw = "_button_11l5m_85",
  Li = {
    container: hw,
    divider: Aw,
    row: gw,
    row_title: _w,
    row_title_main: fw,
    row_hint: xw,
    row_value: vw,
    row_value_main: yw,
    mining_percent: ww,
    active_row: bw,
    button: jw
  },
  Cw = () => {
    const n = _(),
      t = l(a => a.daily.showHowDailyWorksPopup),
      s = a => {
        n(Mo(a))
      };
    return e.jsx(xt, {
      show: t,
      setShow: s,
      children: e.jsxs("div", {
        className: Li.container,
        children: [e.jsx("h2", {
          children: "How does Daily work? "
        }), e.jsx("p", {
          children: "Complete the daily check-ins and earn valuable rewards. The more days completed, the more rewards you get."
        }), e.jsx("p", {
          children: "Usage is only possible in the desktop version."
        }), e.jsx("button", {
          className: Li.button,
          onPointerUp: () => s(!1),
          children: "That's so wise!"
        })]
      })
    })
  },
  Pw = (n, t) => {
    const s = n.getTime() - n.getTime() % 864e5,
      a = t.getTime() - t.getTime() % (86400 * 1e3);
    return s === a
  },
  Nw = () => {
    const n = _(),
      t = l(li.selectAll),
      s = l(r => r.daily.selected),
      [a, i] = u.useState(null),
      o = l(r => r.daily.getDailyListFetchStatus);
    return u.useEffect(() => {
      (o === m.idle || o === m.rejected) && n(di.getList())
    }, [o]), u.useEffect(() => {
      let r = 0;
      for (let c = 0; c < t.length; c++) {
        const d = t[c];
        if (d.timestamp && new Date(d.timestamp) > r && (r = new Date(d.timestamp)), d.daily) {
          n(ip(d.id));
          break
        }
      }
      if (r && Pw(new Date, new Date(r))) {
        const c = new Date(r),
          p = new Date(Date.UTC(c.getUTCFullYear(), c.getUTCMonth(), c.getUTCDate() + 1, 0, 0, 0, 0)) - new Date,
          A = Math.floor(p / 1e3);
        i(A)
      }
    }, [t]), e.jsxs(W, {
      children: [e.jsx("div", {
        className: R.title_container,
        children: e.jsx("div", {
          className: R.title,
          children: "Daily streak awards"
        })
      }), e.jsx(lw, {
        secondsLeft: a
      }), e.jsxs("div", {
        className: R.info_layout,
        children: [e.jsx("div", {
          className: R.small_title_container,
          children: e.jsx("div", {
            className: R.small_title,
            children: "Stay on track for bigger rewards!"
          })
        }), e.jsx("div", {
          className: R.rewards_layout,
          children: e.jsx("div", {
            className: R.rewards_grid_container,
            children: t.map((r, c) => {
              const d = (c + 1) % 4 === 0,
                p = r.prices[0],
                A = [R.reward_item],
                h = [R.reward_item_amount],
                g = [R.reward_item_title];
              r.id === s && (A.push(R.reward_item_active), h.push(R.reward_item_amount_active)), d && g.push(R.reward_item_title_premium), d && !r.active && h.push(R.reward_item_amount_premium);
              let w = dw;
              return c >= 8 && c <= 15 && (w = uw), c >= 16 && c <= 23 && (w = pw), c >= 24 && c <= 31 && (w = mw), e.jsxs("div", {
                className: A.join(" "),
                onPointerUp: () => {
                  n(k({
                    id: performance.now(),
                    text: `${p.quantity} ${r.name} for ${p.price} TON`,
                    icon: ""
                  }))
                },
                children: [e.jsxs("div", {
                  className: R.reward_item_content_container,
                  children: [e.jsxs("div", {
                    className: g.join(" "),
                    children: ["Day ", c + 1]
                  }), e.jsx("img", {
                    src: w,
                    style: {
                      position: "absolute",
                      bottom: -12
                    }
                  }), e.jsx("div", {
                    className: R.reward_item_image_container,
                    children: e.jsx("img", {
                      alt: "item",
                      className: R.reward_item_image,
                      src: r.image_url
                    })
                  }), e.jsx("div", {
                    className: h.join(" "),
                    children: p.quantity
                  })]
                }), !r.daily && e.jsx("div", {
                  className: R.reward_item_completed,
                  children: e.jsx(B, {
                    size: 36,
                    style: {
                      fontWeight: 600
                    },
                    children: ""
                  })
                })]
              }, c)
            })
          })
        })]
      }), e.jsx(Cw, {})]
    })
  },
  Sw = "_general_info_container_fv8d9_1",
  Iw = "_img_container_fv8d9_7",
  Tw = "_image_fv8d9_13",
  Dw = "_title_fv8d9_19",
  Ew = "_description_container_fv8d9_25",
  Bw = "_description_fv8d9_25",
  Vt = {
    general_info_container: Sw,
    img_container: Iw,
    image: Tw,
    title: Dw,
    description_container: Ew,
    description: Bw
  },
  kw = "_info_layout_1p9dg_1",
  Rw = {
    info_layout: kw
  },
  Uw = "_no_template_container_uihlo_1",
  Ow = "_no_template_button_uihlo_10",
  Mw = "_template_container_uihlo_28",
  Fw = "_template_info_container_uihlo_35",
  Qw = "_template_info_uihlo_35",
  zw = "_buttons_container_uihlo_44",
  qw = "_button_copy_uihlo_53",
  Hw = "_button_uihlo_44",
  Lw = "_create_new_template_uihlo_72",
  Le = {
    no_template_container: Uw,
    no_template_button: Ow,
    template_container: Mw,
    template_info_container: Fw,
    template_info: Qw,
    buttons_container: zw,
    button_copy: qw,
    button: Hw,
    create_new_template: Lw
  },
  Xw = "_instruction_container_14ts7_1",
  Vw = "_img_container_14ts7_9",
  Gw = "_image_14ts7_15",
  Ww = "_instruction_text_14ts7_21",
  Yw = "_preview_container_14ts7_26",
  Jw = "_preview_image_container_14ts7_32",
  Kw = "_preview_image_14ts7_32",
  Zw = "_preview_image_loader_14ts7_45",
  $w = "_template_size_14ts7_60",
  eb = "_template_title_14ts7_68",
  tb = "_template_size_container_14ts7_73",
  nb = "_template_size_item_14ts7_79",
  sb = "_template_size_item_active_14ts7_87",
  ab = "_template_coords_14ts7_92",
  ib = "_template_coordinates_title_14ts7_102",
  ob = "_template_coords_container_14ts7_107",
  rb = "_coords_item_14ts7_114",
  cb = "_coords_input_14ts7_120",
  lb = "_file_button_container_14ts7_129",
  db = "_file_button_14ts7_129",
  Y = {
    instruction_container: Xw,
    img_container: Vw,
    image: Gw,
    instruction_text: Ww,
    preview_container: Yw,
    preview_image_container: Jw,
    preview_image: Kw,
    preview_image_loader: Zw,
    template_size: $w,
    template_title: eb,
    template_size_container: tb,
    template_size_item: nb,
    template_size_item_active: sb,
    template_coords: ab,
    template_coordinates_title: ib,
    template_coords_container: ob,
    coords_item: rb,
    coords_input: cb,
    file_button_container: lb,
    file_button: db
  },
  ta = {
    16: 512,
    32: 2048,
    64: 8192,
    128: 2e4
  },
  ub = ({
    templateSize: n,
    setTemplateSize: t
  }) => {
    const s = _(),
      a = l(Ye),
      i = a.friends || 64,
      [o] = u.useState([16, 32, 64, 128]);
    return e.jsxs("div", {
      className: Y.template_size,
      children: [e.jsx("div", {
        className: Y.template_title,
        children: "Select a template size"
      }), e.jsx("div", {
        className: Y.template_size_container,
        children: o.map(r => {
          if (r === 128 && !a.isContractor) return null;
          const c = [Y.template_size_item];
          return n === r && c.push(Y.template_size_item_active), e.jsx("div", {
            className: c.join(" "),
            onPointerUp: () => {
              i >= ta[r] || a.isContractor ? t(r) : s(k({
                id: performance.now(),
                text: `To unlock this size, invite ${ta[r]-i} more frens.`
              }))
            },
            children: `${r} X ${r}`
          }, r)
        })
      }), " "]
    })
  },
  pb = () => {
    const n = $(),
      t = l(i => i.template.myTemplate),
      s = l(i => i.user.user),
      a = s && s.friends >= ta[16] || s.isContractor;
    return t !== null ? null : e.jsxs("div", {
      className: Le.no_template_container,
      children: [a && e.jsx("span", {
        className: "gray",
        children: "Create a template and share with your friends."
      }), !a && e.jsxs("span", {
        className: "gray",
        children: ["To unlock template creation, ", e.jsx("br", {}), " invite", " ", s && s.friends || 0, "/", ta[16], " friends"]
      }), a && e.jsx("button", {
        className: Le.no_template_button,
        onPointerUp: () => {
          n.push("/template/create")
        },
        children: "Pixel Templates"
      }), !a && e.jsx("button", {
        className: Le.no_template_button,
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
  mb = "_template_item_container_srp11_1",
  hb = "_template_item_inner_srp11_9",
  Ab = "_template_image_srp11_17",
  gb = "_template_image_info_layout_srp11_24",
  _b = "_template_image_info_container_srp11_34",
  bn = {
    template_item_container: mb,
    template_item_inner: hb,
    template_image: Ab,
    template_image_info_layout: gb,
    template_image_info_container: _b
  },
  fr = ({
    item: n,
    style: t = {}
  }) => {
    const s = _();
    return e.jsx("div", {
      className: bn.template_item_container,
      style: {
        ...t
      },
      onPointerUp: async () => {
        n.templateId && n.templateId !== 0 && s(Ga({
          show: !0,
          id: Number(n.templateId)
        }))
      },
      children: e.jsxs("div", {
        className: bn.template_item_inner,
        children: [e.jsx("img", {
          alt: "image",
          className: bn.template_image,
          src: n.url
        }), e.jsx("div", {
          className: bn.template_image_info_layout,
          children: e.jsxs("div", {
            className: bn.template_image_info_container,
            children: [e.jsx(B, {
              children: ""
            }), e.jsx("span", {
              children: sn(Math.max(0, n.subscribers))
            })]
          })
        })]
      })
    })
  },
  fb = () => {
    const n = $();
    return e.jsx("div", {
      className: Le.create_new_template,
      onPointerUp: () => {
        n.push("/template/create")
      },
      children: "Create a new template"
    })
  },
  xb = () => {
    const n = l(a => a.user.user);
    let t = `${Et}?startapp=f${(n==null?void 0:n.id)||""}_t`;
    n.squad && n.squad.id !== null && (t += `_s${n.squad.id}`);
    const s = l(a => a.template.myTemplate);
    return s === null ? null : e.jsxs("div", {
      className: Le.template_container,
      children: [e.jsx(fr, {
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
        className: Le.template_info_container,
        children: e.jsxs("span", {
          className: Le.template_info,
          children: ["Share this template with your frens, ", e.jsx("br", {}), " get reward for frens repaints."]
        })
      }), e.jsxs("div", {
        className: Le.buttons_container,
        children: [e.jsx(mn, {
          url: t,
          className: Le.button_copy,
          text: "Copy template link"
        }), e.jsx("button", {
          className: Le.button,
          onPointerUp: a => {
            a.stopPropagation(), window.Telegram.WebApp.openTelegramLink(`https://t.me/share/url?url=${t}`)
          },
          children: "Share"
        })]
      }), e.jsx(fb, {})]
    })
  },
  vb = () => e.jsxs("div", {
    children: [e.jsx(pb, {}), e.jsx(xb, {})]
  }),
  yb = "_layout_94gj5_1",
  wb = "_container_94gj5_5",
  bb = "_button_container_94gj5_11",
  jb = "_button_94gj5_11",
  na = {
    layout: yb,
    container: wb,
    button_container: bb,
    button: jb
  },
  Cb = () => {
    const n = _(),
      t = u.useRef(null),
      s = u.useRef(0),
      a = l(p => p.template.listStatus),
      i = l(p => p.template.listOffset),
      o = l(p => p.template.listLimit),
      r = l(p => p.template.list),
      [c, d] = u.useState(!1);
    return u.useEffect(() => {
      let p = null;
      if (t.current && a === m.fulfilled && !c) {
        const A = {
            rootMargin: "0px",
            threshold: 1
          },
          h = (g, w) => {
            g.forEach(x => {
              x.intersectionRatio >= 1 && (n(ft.getList({
                offset: i,
                limit: o
              })), w.unobserve(t.current))
            })
          };
        p = new IntersectionObserver(h, A), p.observe(t.current)
      }
      return () => {
        p && t.current && p.unobserve(t.current)
      }
    }, [a, i, o, c]), u.useEffect(() => {
      s.current === r.length && r.length !== 0 && d(!0), s.current = r.length
    }, [r]), c ? null : e.jsx("div", {
      className: na.button_container,
      children: e.jsx("button", {
        ref: t,
        disabled: a === m.pending,
        className: na.button,
        onPointerUp: () => {
          n(ft.getList({
            offset: i,
            limit: o
          }))
        },
        children: "Load more"
      })
    })
  },
  Pb = () => {
    const n = _(),
      t = l(o => o.template.listOffset),
      s = l(o => o.template.listLimit),
      a = l(o => o.template.list),
      i = l(o => o.template.referredTemplate);
    return u.useEffect(() => (n(ft.getList({
      offset: t,
      limit: s
    })), () => {
      n(Hf())
    }), []), e.jsxs("div", {
      className: na.layout,
      children: [e.jsx("div", {
        className: na.container,
        children: a.map(o => {
          if (Number(o.templateId) === 0) return null;
          let r = !1;
          return i !== null && Number(i.id) === Number(o.templateId) && (r = !0), e.jsx(fr, {
            item: o,
            current: r
          }, o.templateId)
        })
      }), e.jsx(Cb, {})]
    })
  },
  Nb = () => {
    const n = l(t => t.template.activeTab);
    return e.jsxs("div", {
      className: Rw.info_layout,
      children: [n === "my" && e.jsx(vb, {}), n === "catalog" && e.jsx(Pb, {})]
    })
  },
  Sb = () => {
    const n = _(),
      t = l(s => s.template.activeTab);
    return e.jsxs(pa, {
      children: [e.jsx(at, {
        active: t === "my",
        setActive: () => n(Qi("my")),
        children: "My template"
      }), e.jsx(at, {
        active: t === "catalog",
        setActive: () => n(Qi("catalog")),
        children: "Catalog"
      })]
    })
  },
  Ib = () => e.jsxs(re.Fragment, {
    children: [e.jsx(Sb, {}), e.jsx(Nb, {})]
  }),
  xi = "/assets/paintings_anim2-nk1iBB8J.gif",
  Tb = "_container_1h1qc_1",
  Db = "_divider_1h1qc_19",
  Eb = "_row_1h1qc_24",
  Bb = "_row_title_1h1qc_36",
  kb = "_row_title_main_1h1qc_40",
  Rb = "_row_hint_1h1qc_45",
  Ub = "_row_value_1h1qc_51",
  Ob = "_row_value_main_1h1qc_55",
  Mb = "_mining_percent_1h1qc_60",
  Fb = "_active_row_1h1qc_70",
  Qb = "_button_1h1qc_81",
  Xi = {
    container: Tb,
    divider: Db,
    row: Eb,
    row_title: Bb,
    row_title_main: kb,
    row_hint: Rb,
    row_value: Ub,
    row_value_main: Ob,
    mining_percent: Mb,
    active_row: Fb,
    button: Qb
  },
  zb = () => {
    const n = _(),
      t = l(a => a.template.showTemplateDetailsPopup),
      s = a => {
        n(Ar(a))
      };
    return e.jsx(xt, {
      show: t,
      setShow: s,
      children: e.jsxs("div", {
        className: Xi.container,
        children: [e.jsx("h2", {
          children: "How does Templates work? "
        }), e.jsx("p", {
          children: "Paint the pixels in the correct color – get a PX. "
        }), e.jsx("p", {
          children: "Use global templates, join your frens' templates, or create your own."
        }), e.jsx("p", {
          children: "Create a template and get reward in PX. The reward depends on the number of painters of the template. Btw, the owner doesn't get an award for painting his template."
        }), e.jsx("button", {
          className: Xi.button,
          onPointerUp: () => s(!1),
          children: "That's so wise!"
        })]
      })
    })
  },
  qb = "_layout_2uiqn_1",
  Hb = "_container_2uiqn_6",
  Lb = "_close_button_2uiqn_18",
  Xb = "_title_container_2uiqn_26",
  Vb = "_title_2uiqn_26",
  Gb = "_image_container_2uiqn_37",
  Wb = "_image_2uiqn_37",
  Yb = "_image_placeholder_2uiqn_51",
  Jb = "_info_container_2uiqn_58",
  Kb = "_info_row_2uiqn_64",
  Zb = "_info_title_2uiqn_69",
  $b = "_info_value_blue_2uiqn_73",
  e1 = "_info_value_white_2uiqn_78",
  t1 = "_buttons_container_2uiqn_82",
  n1 = "_button_2uiqn_82",
  s1 = "_not_button_2uiqn_98",
  a1 = "_button_copy_2uiqn_109",
  K = {
    layout: qb,
    container: Hb,
    close_button: Lb,
    title_container: Xb,
    title: Vb,
    image_container: Gb,
    image: Wb,
    image_placeholder: Yb,
    info_container: Jb,
    info_row: Kb,
    info_title: Zb,
    info_value_blue: $b,
    info_value_white: e1,
    buttons_container: t1,
    button: n1,
    not_button: s1,
    button_copy: a1
  },
  i1 = () => {
    const n = _(),
      t = l(d => d.template.templateInfoPopupId),
      [s, a] = u.useState(!1),
      i = l(d => d.user.user),
      o = l(d => d.template.referredTemplate),
      r = t === i.id,
      c = o !== null && t === o.id;
    return r ? e.jsx("div", {
      className: K.not_button,
      children: "Your template. Cute!"
    }) : c ? e.jsx("div", {
      className: K.not_button,
      children: "Selected template."
    }) : e.jsx("button", {
      disabled: s,
      className: K.button,
      onPointerUp: async () => {
        if (!s) try {
          if (t && t !== 0) {
            if (a(!0), (await n(ft.subscribe({
                id: t
              }))).meta.requestStatus === m.fulfilled) {
              await n(k({
                id: performance.now(),
                text: "Success!"
              }));
              const p = await n(ft.getTemplateById({
                  id: t
                })),
                A = {
                  ...p.payload,
                  url: `${p.payload.url}?time=${Date.now()}`,
                  type: Se.referred
                };
              n(zf(A)), C.mainImage.worldTemplate.deleteTemplate(o.id), C.mainImage.worldTemplate.add(A), n(_i())
            } else await n(k({
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
  o1 = () => {
    const n = _(),
      [t, s] = u.useState(null),
      a = l(o => o.template.showTemplateInfoPopup),
      i = l(o => o.template.templateInfoPopupId);
    return u.useEffect(() => (i && (async () => {
      try {
        const r = await n(ft.getTemplateById({
          id: i
        }));
        r.payload && s({
          ...r.payload
        })
      } catch {}
    })(), () => {
      s(null)
    }), [i]), Ve.createPortal(e.jsx(vt, {
      onPointerUp: () => n(Ga({
        show: !1
      })),
      show: a,
      children: e.jsx("div", {
        className: K.layout,
        children: e.jsxs("div", {
          className: K.container,
          onPointerUp: o => {
            o.stopPropagation()
          },
          children: [e.jsx("div", {
            className: K.close_button,
            onPointerUp: () => {
              n(Ga({
                show: !1
              }))
            },
            children: e.jsx(B, {
              size: 26,
              children: ""
            })
          }), e.jsx("div", {
            className: K.title_container,
            children: e.jsxs("span", {
              className: K.title,
              children: ["Template ", t && `${t.imageSize}x${t.imageSize}`]
            })
          }), e.jsxs("div", {
            className: K.image_container,
            children: [t && e.jsx("img", {
              alt: "image",
              className: K.image,
              src: t.url
            }), !t && e.jsx("div", {
              className: K.image_placeholder
            })]
          }), e.jsxs("div", {
            className: K.buttons_container,
            children: [e.jsx(i1, {}), e.jsx(mn, {
              url: `${Et}?startapp=f${i}_t`,
              className: K.button_copy,
              text: "Copy template link"
            })]
          }), e.jsxs("div", {
            className: K.info_container,
            children: [e.jsxs("div", {
              className: K.info_row,
              children: [e.jsx("span", {
                className: K.info_title,
                children: "Coordinates"
              }), " ", e.jsx("span", {
                className: K.info_value_blue,
                children: t ? `${t.x}, ${t.y}` : "Loading..."
              })]
            }), e.jsxs("div", {
              className: K.info_row,
              children: [e.jsx("span", {
                className: K.info_title,
                children: "Painters"
              }), " ", e.jsx("span", {
                className: K.info_value_white,
                children: t ? `${t.subscribers}` : "Loading..."
              })]
            }), e.jsxs("div", {
              className: K.info_row,
              children: [e.jsx("span", {
                className: K.info_title,
                children: "Repaints"
              }), " ", e.jsx("span", {
                className: K.info_value_white,
                children: t ? `${t.hits}` : "Loading..."
              })]
            })]
          })]
        })
      })
    }), document.body)
  },
  r1 = () => {
    const n = _();
    return e.jsxs(W, {
      children: [e.jsxs("div", {
        className: Vt.general_info_container,
        children: [e.jsx("div", {
          className: Vt.img_container,
          children: e.jsx("img", {
            alt: "img",
            className: Vt.image,
            src: xi
          })
        }), e.jsx("h1", {
          className: Vt.title,
          children: "Templates"
        }), e.jsxs("div", {
          className: Vt.description_container,
          children: [e.jsxs("span", {
            className: Vt.description,
            children: ["Use templates and get more PX ", e.jsx("br", {}), e.jsx(pn, {
              onPointerUp: t => {
                t.stopPropagation(), n(Ar(!0))
              },
              children: "How it works"
            })]
          }), e.jsx(zb, {})]
        })]
      }), e.jsx(Ib, {}), e.jsx(o1, {})]
    })
  },
  c1 = "_container_s1r1v_1",
  l1 = "_page_s1r1v_13",
  d1 = "_id_s1r1v_17",
  u1 = "_title_s1r1v_22",
  p1 = "_avatar_container_s1r1v_28",
  m1 = "_avatar_s1r1v_28",
  h1 = "_squad_avatar_container_s1r1v_40",
  A1 = "_text_container_s1r1v_52",
  g1 = "_dot_s1r1v_58",
  _1 = "_user_name_s1r1v_63",
  f1 = "_squad_name_s1r1v_69",
  x1 = "_divider_s1r1v_75",
  v1 = "_tabs_content_s1r1v_81",
  y1 = "_content_info_s1r1v_85",
  w1 = "_content_info_item_s1r1v_92",
  b1 = "_content_info_item_title_s1r1v_96",
  j1 = "_content_info_item_value_s1r1v_100",
  C1 = "_no_content_s1r1v_106",
  P1 = "_achievements_container_s1r1v_115",
  F = {
    container: c1,
    page: l1,
    id: d1,
    title: u1,
    avatar_container: p1,
    avatar: m1,
    squad_avatar_container: h1,
    text_container: A1,
    dot: g1,
    user_name: _1,
    squad_name: f1,
    divider: x1,
    tabs_content: v1,
    content_info: y1,
    content_info_item: w1,
    content_info_item_title: b1,
    content_info_item_value: j1,
    no_content: C1,
    achievements_container: P1
  },
  N1 = () => {
    const n = l(c => c.canvas.pixelInfo),
      t = l(c => c.ratings.list),
      s = l(c => c.canvas.getPixelInfoFetchStatus),
      a = l(c => c.main.userAndSquadPopupStack),
      i = l(c => c.squad.getInfoFetchStatus),
      o = l(c => c.squad.info);
    if (a.length === 0) return {
      ready: !1,
      data: null,
      item: {
        dataSource: null
      }
    };
    const r = a[a.length - 1];
    if (r.dataSource === Re.userFromPixelInfo) return {
      ready: s === m.fulfilled && n !== null,
      data: n == null ? void 0 : n.owner,
      item: r
    };
    if (r.dataSource === Re.squadFromData) return {
      ready: i === m.fulfilled && o !== null,
      data: o,
      item: r
    };
    if (r.dataSource === Re.userFromRating) {
      const c = r.index,
        d = t.length;
      return {
        ready: c < d,
        data: t[c],
        item: r
      }
    }
    return null
  },
  yt = (n = !0) => {
    const [t, s] = u.useState({
      ready: !1,
      data: null
    }), a = N1(), i = l(Ye);
    return u.useEffect(() => {
      t && s({
        ready: !0,
        data: i
      })
    }, [i]), n ? a : t
  },
  S1 = ({
    isPopupContent: n = !0
  }) => {
    const {
      data: t,
      ready: s
    } = yt(n);
    if (!s) return e.jsx(Oe, {
      show: !s,
      children: e.jsx("div", {
        className: F.text_container,
        children: e.jsx("span", {
          className: F.user_name,
          children: "No name • @notpixel"
        })
      })
    });
    const i = On(t.firstName || "No name");
    return e.jsx("div", {
      className: F.text_container,
      children: e.jsx("span", {
        className: F.user_name,
        children: i
      })
    })
  },
  I1 = ({
    isPopupContent: n = !0
  }) => {
    var o;
    const t = _(),
      {
        data: s,
        ready: a
      } = yt(n);
    return a ? ((o = s == null ? void 0 : s.squad) == null ? void 0 : o.name) && s.squad.name !== null ? e.jsxs("div", {
      className: F.text_container,
      children: [e.jsx("span", {
        className: F.squad_name,
        children: "Squad"
      }), e.jsx(pn, {
        onPointerUp: () => {
          t(Aa.getInfo({
            id: s.squad.id
          })), t(Vn({
            dataSource: Re.squadFromData
          }))
        },
        children: On(s.squad.name, 20)
      })]
    }) : e.jsx("div", {
      className: F.text_container,
      children: e.jsx("span", {
        className: F.squad_name,
        children: "No squad"
      })
    }) : e.jsx(Oe, {
      show: !a,
      children: e.jsx("div", {
        className: F.text_container,
        children: e.jsx("span", {
          className: F.squad_name,
          children: "Loading..."
        })
      })
    })
  },
  T1 = ({
    isPopupContent: n = !0
  }) => {
    var i;
    const {
      data: t,
      ready: s
    } = yt(n);
    let a = Xe;
    return s && t.userPic && t.userPic !== "" && (a = t.userPic), e.jsxs("div", {
      className: F.avatar_container,
      children: [e.jsx("img", {
        alt: "avatar",
        className: F.avatar,
        src: a
      }), e.jsx("div", {
        className: F.squad_avatar_container,
        children: e.jsx(gi, {
          src: ((i = t == null ? void 0 : t.squad) == null ? void 0 : i.logo) || ""
        })
      })]
    })
  },
  D1 = ({
    isPopupContent: n = !0
  }) => {
    const t = _(),
      {
        data: s,
        ready: a
      } = yt(n);
    return e.jsxs("div", {
      children: [a && s.id !== 0 && e.jsx("span", {
        className: F.id,
        onPointerUp: async i => {
          i.preventDefault(), i.stopPropagation();
          try {
            await Mn(`${s.id}`), await t(k({
              id: performance.now(),
              text: "Copied!"
            }))
          } catch {
            await t(k({
              id: performance.now(),
              text: "Can't copy!"
            }))
          }
        },
        children: s.id
      }), e.jsx(Oe, {
        show: !a,
        children: e.jsx("span", {
          children: "Owner"
        })
      })]
    })
  },
  E1 = ({
    active: n,
    setActive: t
  }) => e.jsxs(pa, {
    style: {},
    children: [e.jsx(at, {
      active: n === "info",
      setActive: () => t("info"),
      children: "Info"
    }), e.jsx(at, {
      active: n === "achievements",
      setActive: () => t("achievements"),
      children: "Achievements"
    }), e.jsx(at, {
      active: n === "inventory",
      setActive: () => t("inventory"),
      children: "Inventory"
    })]
  }),
  B1 = () => e.jsx("div", {
    className: F.divider
  }),
  k1 = ({
    isPopupContent: n = !0
  }) => {
    const {
      data: t,
      ready: s
    } = yt(n);
    return e.jsxs("div", {
      className: F.content_info,
      children: [e.jsxs("div", {
        className: F.content_info_item,
        children: [e.jsx("div", {
          className: F.content_info_item_title,
          children: "Leaderboard Place"
        }), e.jsx("div", {
          className: F.content_info_item_value,
          children: s ? "Soon" : 0
        })]
      }), e.jsxs("div", {
        className: F.content_info_item,
        children: [e.jsx("div", {
          className: F.content_info_item_title,
          children: "Score"
        }), e.jsx("div", {
          className: F.content_info_item_value,
          children: s ? "Soon" : 0
        })]
      }), e.jsxs("div", {
        className: F.content_info_item,
        children: [e.jsx("div", {
          className: F.content_info_item_title,
          children: "Pixels recolored"
        }), e.jsx("div", {
          className: F.content_info_item_value,
          children: s ? je({
            num: t.repaints
          }) : 0
        })]
      }), e.jsxs("div", {
        className: F.content_info_item,
        children: [e.jsx("div", {
          className: F.content_info_item_title,
          children: "PX mined"
        }), e.jsx("div", {
          className: F.content_info_item_value,
          children: s ? je({
            num: t.balance
          }) : 0
        })]
      })]
    })
  },
  R1 = "_container_os5nt_1",
  U1 = "_not_completed_os5nt_6",
  O1 = "_image_container_os5nt_10",
  M1 = "_image_os5nt_10",
  F1 = "_bold_os5nt_20",
  Q1 = "_gray_os5nt_24",
  z1 = "_description_container_os5nt_28",
  wt = {
    container: R1,
    not_completed: U1,
    image_container: O1,
    image: M1,
    bold: F1,
    gray: Q1,
    description_container: z1
  },
  q1 = ({
    completed: n,
    item: t
  }) => e.jsxs("div", {
    className: U(wt.container, n ? "" : wt.not_completed),
    children: [e.jsx("div", {
      className: wt.image_container,
      children: e.jsx("img", {
        src: t.src,
        className: wt.image
      })
    }), e.jsxs("div", {
      className: wt.description_container,
      children: [e.jsx("span", {
        className: wt.bold,
        children: t.title
      }), e.jsx("span", {
        className: wt.gray,
        children: t.description
      })]
    })]
  }),
  H1 = "/assets/0-CBlm-5t2.gif",
  L1 = "/assets/1-C1eaF-Lh.gif",
  X1 = "/assets/2-Dx7l5fvD.gif",
  V1 = "data:image/gif;base64,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",
  G1 = "/assets/4-B9SjwR-x.gif",
  W1 = "/assets/5-D2MXnTsp.gif",
  Y1 = "/assets/6-DGYxyagY.gif",
  J1 = "/assets/7-BOUksXqi.gif",
  K1 = "data:image/gif;base64,R0lGODdhZABkAHcAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFCgAAACwAAAAAZABkAMIAAAAXTYc0ZNVCk/5GyOyo5v/Y/fn///8D/wi63P4wykmrvTjrzTsY4FCMZGmeqKAKXjuFgyHPMmET5a3jaEmXgWDAhdHRjsjj7pZbEn4kGGwlEA6JCmNyy505d9KwGPS1YhWwXunAbrPV8ELZKqSaz5Q0ijbuh+h1K3d4WDBbfiBUdkKEjRWGM1OCjI6VLoOWmZqbnJ2en6ChDoikUqIdkDJNS3EmNFSnDFpdX6s7PTQ6MJh4s12/UK0jpWKLQS56J1tubl/ON2NfipPHjslqfMRSxnTcsQupRyWk3N7fGeHjIdMqvOd4VECU7/T19vf4+fr7/Pjapf0kXBMWB1bAdCRqESzwasW9cLmYJHTSKlgBd518bVE4gv+jKy/Q/syzpBEYSFYTl1gcYw5LSZNcFhb4J6ndSA4vYSZ5ZoNmiDnVPAwksYwZG57OojlhV+Vmi6EnjL6RmXIHoCAtLUH9KMNnImrdwJ7ams3n1QBZ30Gcoc5PObEHQxxCxBRjQDRy2UZZx87uXQjhajYN+pdDPBJ+C3dIrLix48eQI0ueTLmy5cuYM2tG5nVM5c6eIW+lSsJg4dGkC5jmh7AjxYUNVexrLec1wdgs7K2tIdE1SjgWGXPabUCHLeNxgjvNeAOYR48+ThLYtZxk81/PbXMtHhKEcBc5nWv/srIY3EbhsY93Uj5M2hbpdeol2Pm9hvjyDcisf74Dfvm0SHUG1BUe/KdTgF4NyBkIuCQh1QFIfaHUEnVVhwFZDkoVoRMT7lAhYQuKEMeDqdW2xFn2EYHaCCSmNqAVKeKxIkOReMUNjP1tMmNZNN0YiE0geoJhV16hmKMoQxrQmZFAEkgPcW318VaTs+WFRJQsgRWjblYeQU5fFupD3JfTfCdml1F+6GRktAm25WOB8UXlZh90KZiZkx02Ap6W6XlRmHQuwGeggwZq6KGIJqrooow2ilkCACH5BAUKAAAALAAAAABkAGQAwQAAAKjm/9j9+f///wL/hI+py+0Po5y02otzErz7D4baeA3maQZq4K0uG3rkvKD2ybxrqwf0f7iZgMRiI2ZMKhHIpfMJjUqn1Kr1is1qt9yut4ji6WLNr0Jo68E46jIXjaKQRWaDu1694/f8vv8PGCg4SFhoeIiIOLdIVxjW0cbYMYjmIvbC+Ad3EsnWo9e1ObTQKaC2JzogJ8mBKpSoAQprITu7CmI7UpvL2+v7CxwsPExcbHyMnKy8zNzs/AydxMo6Oy15+Og5No19cmnJLVi5A/m5SCkEro157pdaWirjLgpvjouXmmNv2qMpqr9tnQtXm25dw/dvgjWCNpqhabZrWERjE4NVJHbxV0ZhGxt7dYwGMqTIkSRLmjyJMqXKlSxbunwJM+aXAgAh+QQFCgAAACwAAAAAZABkAMEAAADY/fn///8AAAAC9YSPqcvtD6OctNqLcxK8+w+G2kgewRl46JqGXglXLouqdBDnjct3+l9aAYfEovGITCqXzKbzCY1Kp9Sq1Wmj9UBXzK3F+bq6j62ZR3aM008h+w2Py+f0uv2Oz+v3fPL5L9AHkMUCGNi3Qpi4JSjW4ciVN3OjiKJnaGiH6SO4sNaZ4QZKIjpqeoqaqrrK2ur6ChsrO0tba3uLm6u7e7HZI+iL1ld5kjn8SAnYWIOsxYjIHJb8C+0sbf2xjA2ZLRnC/QX8PS0Q7h1MjYf+TBes6p76OStvW1pvyQtgX7uf7/8PMKDAgQQLGjyIMKHChQwbOnwIUVYBACH5BAUKAAAALAAAAABkAGQAwQAAAKjm/9j9+f///wL/hI+py+0Po5y02otzErz7D4baeIVCgAZeyqpmR8bLS58tut6BzD+1wBgIh8TioIccGZfMYfI5+Zmg1FKtih15styu9wsOi8fksvlcNelcUiDa8VvnbtM3oA2y6wHNfnGvhbcFGCM4SMjzg7jI2Oj4CBkpOUlZGWZ4VammIyi5idMhl8kYxxlqmkeIySHKqoO46mZpobjg9zfrcHubq7Dr17uxGswQSzwzfNxQq+wz2hxxCD1NXW19jZ2tvc3d7f0NHi6eFVuXWy6iGdIqZfnZ0hn5Pgf/7Dh/SmevWsPOLg2rHyob+lIBiuXvVSOEA9cExFTNGDdmCX4J8bTPgMUjOdQ2MmnmcQnIkLiOkSxJTOI0ldBYNnOpDOYxmS0zWqOYDSc2ndsAgvM5LqjQoUSLGj2KNKnSpWcKAAAh+QQFCgAAACwAAAAAZABkAMIAAABGyOyo5v/Y/fn///8AAAAAAAAAAAAD/wi63P4wykmrvTjrzXsTYCiOZOmd6BKsgci+bSkyQz2keAaz7h7QtqDQlosMa5TjQDZbKJWEKCFYhDBD1iuTISVoBdWNjOErw4LjsFpiZqGx67jmRZXb7/i8fs/v+/+AgYIUPTtfTYMeZYUwaQpKiRNKX0BPlkRqMpAPhyZONl1djniUKm1mb1eRFoynAalgqyitbpiycnW3uru8vb6/wMHCw3+dncRZIIvGyA8vtCulj7bBy8o+o5vC1gJllZdIu5Na3+DaVecQ46qf5gNduVWaR8nGIN+hUqNr0h/2cApEkfPTz1UZWPsEjTLoAyFAZNBQ2UDUzNkpWBUrRIyXEeEDHWodN3AMSbKkyZMoU6pcybKly5cwY8qceevfwJA22eEMwa1fxoj2Sj7jie0mgJG+hl4zZBRpL249H6bbBbUoiXIgf1XdgdUSsK0wuj7htW5LO3f0VpXNhnYqDrcN1nqa5g5e1rdpJci9ehac3XBh5g2pF/RsvigJcQgWQpiZ4cOJ5RllkDNWQH2T7fhcUJkLZp18CjI8MzFzH9Gja9XYHGhhatVL5taU/Rp2ZGARD5a+RzJ3w92WTbrCyHI48JYb76pMDljmx+Y0ATy/Ef1s9QdOr2vfzr279+/gw4v3ngAAIfkEBQoAAAAsAAAAAGQAZADCAAAAQpP+RsjsqOb/2P35AAAAAAAAAAAAA/8Iutz+MMpJq7046827/2AojmRZDuhgrpfgvrCbzvTM3l+Nwjge/MCgUBh79Y6N4bDoQjojQd5zSq1ar9isdsvter/gsFhHE2eY6Bh5Rmi722aGck5kxjd0IEN6BwX3Rn0kNoKFhoeIiYqLjI2Oj5CRkpMrhJQSaymUaS+ZNYycnJ4Db2+XC2R8iXl5aJCsdK6TsIBNpwCwsrcLfwuqu3JAv8AOlsTHyMnKy8zNzs/Q0dLT1NXW19jZ2tvcjsbQ38ejzOOToQKj4Yrn6ZqL52ijpW6C8Ezy8wS7qYHK/LaKYM3R1UigEoKMDC6x80hhnSKUaPnqd0migmGScjE8pREi4rFeFykiAwkAI7AoIpehBNhMXUt33WLKnEmzps2bOBMlAAAh+QQFCgAAACwAAAAAZABkAMIAAAAXTYc0ZNVCk/5GyOyo5v8AAAAAAAAD/wi63P4wykmrvTjrzbv/YChmRVmMaEoN7GC+pypbbW3f7EvsxOxPvCAhQAwIeb/kpMg0IpVQiWBKnUavkyp2y+16v+CweEwum8/oB8yUTuFs63Wb8z7an/NMtVkM5j17RVp/IFWDhIiJiouMjY6PkJGSk5SVAC+WHXExmTQtm50LbzWbmJKjqC4mfpZ1d3aZd0x3oQqBfKy1C3xEuboAtwGHvwyGVMQOxlbIEMPMz9DR0tPU1dbX2Nna29zd3t/g4VGm2OTXoNXo1KRx0uxytamqpZyU8vQlk/JvOniQ+zj67cjk6pUQgjgMHollZxasWrL6PAwVzOFAZBUlXiTGyyvJxmcdfekK5gwjFSYliSkTYG2lNJfVYFJLOY2muJs4c+rcybOnz59AoSQAACH5BAUKAAAALAAAAABkAGQAwgAAABdNhzRk1UKT/kbI7AAAAAAAAAAAAAPKCLrc/jDKSau9OOvNu/9gKI5kaT5DOgiscL4wIRNwHQZ40Lp2j+2+oHBILBqPyKRyyWw6n9Co1DMjqAbT4fUKzNZ2XS8pLC6bz+i0es1uu9/wuHxOr8+rV/uG29JbtipkfhFVgz9gLIYPOTp9ihGCjwyRkpWWl5iZmpucnZ6foKGio6SlpqeoqaqrrJp4KpyvKaB8iZu1PJqAKZSGuyuOrjOghZ+ItprHuZWMvZLNwZnOl9OK1ZXXrdrb3N3e3+Dh4uPk5ebn6OkjCQAh+QQFCgAAACwAAAAAZABkAMAAAAAAAAACc4SPqcvtD6OctNqLs968+w+G4kiW5omm6sq27gvH8kzX9o3n+s73/g8MCofEovGITCqXzKbzCY1Kp9Sq9YrNarfcrvcLDovH5LL5jE6r1+y2+w2Py+f0uv2Oz+v3/L7/DxgoOEhYaHiImKi4yNjo+AhpWAAAOw==",
  Z1 = "/assets/9-D0xvUYfV.gif",
  $1 = "/assets/10-BNY74yH-.gif",
  ej = "/assets/12-B0vEyGRB.gif",
  tj = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF0AAABkCAYAAADkBDymAAACSElEQVR4nO3doU5cQRSA4dmymz4DZkG0dU0wKB5gDXZVBSsxTfcBKmrql6SikhUoUlcED4DCNMHRCrqmz9AAadMHmHPDKXP/Jfk/Oxku/BlxMrnLDibz/ZJxvvj6J7WxlHJ7+by6Ntr9nf2xvf4uk/n+IPvMZ9mNyjM6wOgAowOMDjA6YBg9MhoLV6fh1iay412bffHIHI2UnnSA0QFGBxgdYHSA0QH/xpq1Ggs3tzeqa/2Phbl9XXs96QCjA4wOMDrA6ACjA4wOMDrA6ACjA4wOMDrA6ACjA/q/u+24vo10Xac+FZ50gNEBRgcYHWB0gNEBzUbGaCz8sPxSXfv4KfcZqMjx4mew+qq6Eu0b7W6lfx9POsDoAKMDjA4wOsDogPQLpF03hdFY+PLF6+ra9x9X1bVonNz5XN/37bD+vGgsnM3rY2H0vK5netIBRgcYHWB0gNEBRgc0u2XMjoXRvkg0orXwP8/zpAOMDjA6wOgAowOMDmj2MfXoFvLk4nrdOjy66IbSkw4wOsDoAKMDjA4wOgD5+EsLB+/GvT5vebRK7/WkA4wOMDrA6ACjA4wOCEfG8fSuutZ1A/nr5r669mav/pGT6Aay77GwFU86wOgAowOMDjA6wOiAYfbbBsfT+CtnWvzv9fdvz6prLd6dbPHOZfGkM4wOMDrA6ACjA4wOMDogPUx3zffxHF+/Mj5eMCEeKnpBtPjVmOvH6ACjA4wOMDrA6IBmL5Bmr4xn863wynhdZP++4klnGB1gdIDRAUYHGL1vpZS/8GF1OTKsdsMAAAAASUVORK5CYII=",
  nj = [{
    id: 1,
    src: H1,
    title: "Beta Pixel",
    description: "Someone who's seen the First Pixel. Show respect. He has nightmares about cubes and flags."
  }, {
    id: 2,
    src: L1,
    title: "Pixel's 16 frens",
    description: "Invite 16 frens. A great company is the key to success!"
  }, {
    id: 3,
    src: X1,
    title: "Pixel Brotherhood",
    description: "Invite 64 frens. Where'd you get that charisma, buddy?"
  }, {
    id: 4,
    src: V1,
    title: "My pixel dudes",
    description: "Invite 128 frens. Admit it, are your relatives in the game too?"
  }, {
    id: 5,
    src: G1,
    title: "Thunder Pixel",
    description: "Paint 64,000 pixels. Is your finger on fire?"
  }, {
    id: 6,
    src: W1,
    title: "Master over Pixels",
    description: "Paint 128,000 pixels. Have you considered a career as a pixel artist?"
  }, {
    id: 7,
    src: Y1,
    title: "Malevich",
    description: "Paint 512,000 pixels. Either the most dedicated artist or the most dedicated auto-clicker."
  }, {
    id: 8,
    src: J1,
    title: "Star Pixel",
    description: "Buy something with Telegram Stars. Who needs stars when you've got dynamite!?"
  }, {
    id: 9,
    src: K1,
    title: "Crypto Pixel",
    description: `Buy something with crypto. It's always cheaper in crypto, isn't it?
`
  }, {
    id: 10,
    src: Z1,
    title: "Ghost Pixel",
    description: `Activate any secret password. You're looking at a lifelong insane asylum. 
`
  }, {
    id: 11,
    src: $1,
    title: "Platinum Pixel",
    description: "Platinum League member. Your mom would be proud of you."
  }, {
    id: 13,
    src: ej,
    title: "Ambassador",
    description: "Invited 10,000 frens. You're either very friendly or a bot. A friendly bot?"
  }, {
    id: 14,
    src: tj,
    title: "Pixanos' Snap",
    description: "Use of Pixanos. Your snap destroyed half the world. Or did it save it?"
  }],
  sj = ({
    isPopupContent: n
  }) => {
    const {
      ready: t,
      data: s
    } = yt(n);
    return e.jsx("div", {
      className: F.achievements_container,
      children: nj.map(a => e.jsx(q1, {
        item: a,
        completed: t && s.achievements && s.achievements[a.id]
      }, a.id))
    })
  },
  aj = () => e.jsxs("div", {
    className: F.no_content,
    children: ["Something will happen here,", e.jsx("br", {}), " but not now."]
  }),
  ij = ({
    active: n,
    isPopupContent: t = !0
  }) => e.jsxs("div", {
    className: F.tabs_content,
    children: [n === "info" && e.jsx(k1, {
      isPopupContent: t
    }), n === "achievements" && e.jsx(sj, {
      isPopupContent: t
    }), n === "inventory" && e.jsx(aj, {})]
  }),
  oj = ({
    isPopupContent: n = !0
  }) => {
    const [t, s] = u.useState("info");
    return e.jsxs("div", {
      style: {
        width: "100%"
      },
      children: [e.jsx(E1, {
        active: t,
        setActive: s
      }), e.jsx(B1, {}), e.jsx(ij, {
        active: t,
        isPopupContent: n
      })]
    })
  },
  rj = "_layout_c6k10_1",
  cj = "_close_button_c6k10_6",
  xr = {
    layout: rj,
    close_button: cj
  },
  vr = () => {
    const n = _();
    return e.jsx("div", {
      className: xr.close_button,
      onPointerUp: () => {
        n(lr())
      },
      children: e.jsx(B, {
        size: 26,
        children: ""
      })
    })
  },
  Wa = ({
    isPopupContent: n = !0
  }) => {
    const t = n ? "Painter" : "My Profile";
    return e.jsxs("div", {
      className: U(F.container, !n && F.page),
      children: [n && e.jsx(vr, {}), e.jsx("div", {
        children: e.jsx("span", {
          className: F.title,
          children: t
        })
      }), e.jsx(T1, {
        isPopupContent: n
      }), e.jsx(S1, {
        isPopupContent: n
      }), e.jsx(I1, {
        isPopupContent: n
      }), e.jsx(D1, {
        isPopupContent: n
      }), e.jsx(oj, {
        isPopupContent: n
      })]
    })
  },
  lj = () => {
    const n = _(),
      t = l(Ye);
    return u.useEffect(() => (t && t.id && n(_A.getListByUserId({
      userId: t.id
    })), () => {
      n(AA())
    }), [t]), e.jsx(W, {
      children: e.jsx(Wa, {
        isPopupContent: !1
      })
    })
  },
  dj = "_container_1bw7p_1",
  uj = {
    container: dj
  },
  pj = "_container_12mk9_1",
  mj = "_page_12mk9_13",
  hj = "_id_12mk9_17",
  Aj = "_title_12mk9_22",
  gj = "_avatar_container_12mk9_28",
  _j = "_avatar_12mk9_28",
  fj = "_text_container_12mk9_39",
  xj = "_dot_12mk9_45",
  vj = "_user_name_12mk9_50",
  yj = "_squad_slug_12mk9_56",
  wj = "_your_squad_button_12mk9_62",
  bj = "_join_squad_button_12mk9_75",
  jj = "_red_12mk9_91",
  Cj = "_divider_12mk9_95",
  Pj = "_tabs_content_12mk9_101",
  Nj = "_content_info_12mk9_105",
  Sj = "_content_info_item_12mk9_112",
  Ij = "_content_info_item_title_12mk9_116",
  Tj = "_content_info_item_value_12mk9_120",
  Dj = "_content_top_12mk9_127",
  Ej = "_content_top_item_12mk9_140",
  Bj = "_content_top_item_image_12mk9_150",
  kj = "_content_top_name_12mk9_156",
  Rj = "_content_top_arrow_12mk9_162",
  Uj = "_gray_12mk9_166",
  E = {
    container: pj,
    page: mj,
    id: hj,
    title: Aj,
    avatar_container: gj,
    avatar: _j,
    text_container: fj,
    dot: xj,
    user_name: vj,
    squad_slug: yj,
    your_squad_button: wj,
    join_squad_button: bj,
    red: jj,
    divider: Cj,
    tabs_content: Pj,
    content_info: Nj,
    content_info_item: Sj,
    content_info_item_title: Ij,
    content_info_item_value: Tj,
    content_top: Dj,
    content_top_item: Ej,
    content_top_item_image: Bj,
    content_top_name: kj,
    content_top_arrow: Rj,
    gray: Uj
  },
  yr = ({
    data: n,
    ready: t
  }) => {
    let s = Xe;
    return t && n.squad.logo && n.squad.logo !== "" && (s = n.squad.logo), e.jsx("div", {
      className: E.avatar_container,
      children: e.jsx("img", {
        alt: "avatar",
        className: E.avatar,
        src: s
      })
    })
  },
  wr = ({
    data: n,
    ready: t
  }) => {
    if (!t) return e.jsx(Oe, {
      show: !t,
      children: e.jsx("div", {
        className: E.text_container,
        children: e.jsx("span", {
          className: E.user_name,
          children: "No name • @notpixel"
        })
      })
    });
    const a = (() => {
      var i;
      return On(((i = n == null ? void 0 : n.squad) == null ? void 0 : i.name) || "No name")
    })();
    return e.jsx("div", {
      className: E.text_container,
      children: e.jsx("span", {
        className: E.user_name,
        children: a
      })
    })
  },
  br = ({
    data: n,
    ready: t
  }) => {
    var a;
    return t ? ((a = n == null ? void 0 : n.squad) == null ? void 0 : a.slug) && n.squad.slug !== null ? e.jsx("div", {
      className: E.text_container,
      children: e.jsx(Rt, {
        address: `${it}?startapp=${btoa(`id=${n.squad.id}`)}`,
        display: n.squad.slug,
        limit: 18
      })
    }) : e.jsx("div", {
      className: E.text_container,
      children: e.jsx("span", {
        className: E.squad_slug,
        children: "No squad slug"
      })
    }) : e.jsx(Oe, {
      show: !t,
      children: e.jsx("div", {
        className: E.text_container,
        children: e.jsx("span", {
          children: "Loading..."
        })
      })
    })
  },
  jr = ({
    data: n,
    ready: t
  }) => {
    const s = l(i => i.user.user);
    return t ? s !== null && s.squad.id !== null && s.squad.id === n.squad.id ? e.jsxs("div", {
      className: E.your_squad_button,
      onPointerUp: () => {
        fe(`https://t.me/${it}?startapp=${btoa(`id=${n.squad.id}`)}`)
      },
      children: [e.jsx("span", {
        className: E.gray,
        children: "Your Squad."
      }), " ", e.jsx("span", {
        className: E.red,
        children: "Leave? "
      })]
    }) : e.jsx("button", {
      onPointerUp: () => {
        fe(`https://t.me/${it}?startapp=${btoa(`id=${n.squad.id}`)}`)
      },
      className: E.join_squad_button,
      children: "Join squad"
    }) : null
  },
  Oj = ({
    active: n,
    setActive: t
  }) => e.jsx(pa, {
    style: {},
    children: e.jsx(at, {
      active: n === "info",
      setActive: () => t("info"),
      children: "Info"
    })
  }),
  Mj = () => e.jsx("div", {
    className: E.divider
  }),
  Fj = ({
    data: n,
    ready: t
  }) => e.jsxs("div", {
    className: E.content_info,
    children: [e.jsxs("div", {
      className: E.content_info_item,
      children: [e.jsx("div", {
        className: E.content_info_item_title,
        children: "League"
      }), e.jsx("div", {
        className: E.content_info_item_value,
        children: t ? n.league : "-"
      })]
    }), e.jsxs("div", {
      className: E.content_info_item,
      children: [e.jsx("div", {
        className: E.content_info_item_title,
        children: "Place"
      }), e.jsx("div", {
        className: E.content_info_item_value,
        children: t ? je({
          num: n.rank
        }) : 0
      })]
    }), e.jsxs("div", {
      className: E.content_info_item,
      children: [e.jsx("div", {
        className: E.content_info_item_title,
        children: "Score"
      }), e.jsx("div", {
        className: E.content_info_item_value,
        children: t ? je({
          num: n.squad.scoredRepaints
        }) : 0
      })]
    }), e.jsxs("div", {
      className: E.content_info_item,
      children: [e.jsx("div", {
        className: E.content_info_item_title,
        children: "Members"
      }), e.jsx("div", {
        className: E.content_info_item_value,
        children: t ? je({
          num: n.squad.players
        }) : 0
      })]
    }), e.jsxs("div", {
      className: E.content_info_item,
      children: [e.jsx("div", {
        className: E.content_info_item_title,
        children: "Pixels recolored"
      }), e.jsx("div", {
        className: E.content_info_item_value,
        children: t ? je({
          num: n.squad.totalRepaints
        }) : 0
      })]
    }), e.jsxs("div", {
      className: E.content_info_item,
      children: [e.jsx("div", {
        className: E.content_info_item_title,
        children: "PX mined"
      }), e.jsx("div", {
        className: E.content_info_item_value,
        children: t ? je({
          num: n.squad.totalBalance
        }) : 0
      })]
    })]
  }),
  Qj = [{
    name: "123",
    avatar: Nt
  }, {
    name: "123",
    avatar: ""
  }, {
    name: "123",
    avatar: null
  }, {
    name: "123",
    avatar: Nt
  }, {
    name: "123",
    avatar: Nt
  }],
  zj = () => e.jsx("div", {
    className: E.content_top,
    children: Qj.map((n, t) => {
      const s = n.avatar && n.avatar !== "" ? n.avatar : Xe;
      return e.jsxs("div", {
        className: E.content_top_item,
        children: [e.jsx("img", {
          alt: "img",
          className: E.content_top_item_image,
          src: s
        }), e.jsxs("div", {
          className: E.content_top_name,
          children: [e.jsx("span", {
            className: E.gray,
            children: t + 1
          }), e.jsx("span", {
            className: E.gray,
            children: "•"
          }), e.jsx("span", {
            children: n.name
          })]
        }), e.jsx("div", {
          className: E.content_top_arrow,
          children: e.jsx(B, {
            children: ""
          })
        })]
      }, t)
    })
  }),
  qj = ({
    isPopupContent: n,
    active: t,
    data: s,
    ready: a
  }) => e.jsxs("div", {
    className: E.tabs_content,
    children: [t === "info" && e.jsx(Fj, {
      isPopupContent: n,
      data: s,
      ready: a
    }), t === "top" && e.jsx(zj, {})]
  }),
  Cr = ({
    data: n,
    ready: t
  }) => {
    const [s, a] = u.useState("info");
    return e.jsxs("div", {
      style: {
        width: "100%"
      },
      children: [e.jsx(Oj, {
        active: s,
        setActive: a
      }), e.jsx(Mj, {}), e.jsx(qj, {
        active: s,
        data: n,
        ready: t
      })]
    })
  },
  Hj = () => {
    const n = _(),
      t = l(o => o.user.user),
      a = l(o => o.squad.getInfoFetchStatus) === m.fulfilled,
      i = l(o => o.squad.info);
    return u.useEffect(() => {
      t && t.squad && t.squad.id && n(Aa.getInfo({
        id: t.squad.id
      }))
    }, []), e.jsx(W, {
      children: e.jsxs("div", {
        className: uj.container,
        children: [e.jsx(yr, {
          data: i,
          ready: a
        }), e.jsx(wr, {
          data: i,
          ready: a
        }), e.jsx(br, {
          data: i,
          ready: a
        }), e.jsx(jr, {
          data: i,
          ready: a
        }), e.jsx(Cr, {
          data: i,
          ready: a
        })]
      })
    })
  },
  Lj = ({
    setFile: n,
    loading: t
  }) => {
    const s = ["image/png", "image/webp", "image/svg+xml", "image/gif", "image/bmp", "image/tiff"];
    return e.jsxs("div", {
      className: Y.file_button_container,
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
            r.addEventListener("load", c => {
              const d = document.createElement("img");
              d.addEventListener("load", () => {
                n(d)
              }), d.src = c.target.result
            }, !1), r.readAsDataURL(o)
          } catch (o) {
            console.error(o)
          }
        },
        hidden: !0
      }), e.jsx("label", {
        htmlFor: "custom-input",
        id: "choose-file",
        className: Y.file_button,
        children: "Upload a picture"
      })]
    })
  },
  Xj = ({
    dataUrl: n,
    loading: t,
    templateSize: s
  }) => e.jsx("div", {
    className: Y.preview_container,
    children: e.jsxs("div", {
      className: Y.preview_image_container,
      children: [e.jsx("img", {
        alt: "templateImage",
        id: "templateImage",
        className: Y.preview_image,
        src: n
      }), t && e.jsx("div", {
        className: Y.preview_image_loader,
        children: "Loading..."
      })]
    })
  }),
  Vj = n => {
    const t = new Uint8Array(n.data);
    for (let s = 0; s < t.length; s += 4) {
      const a = t[s],
        i = t[s + 1],
        o = t[s + 2];
      if (t[s + 3] === 0) continue;
      let c = Ue[0],
        d = 1 / 0;
      for (const A of Ue) {
        const h = en.deltaE(en(_t(a, i, o)), en(A));
        h < d && (d = h, c = A)
      }
      const p = nt(c);
      n.data[s] = p.r, n.data[s + 1] = p.g, n.data[s + 2] = p.b, n.data[s + 3] = 255
    }
  },
  Gj = ({
    loading: n,
    imageData: t,
    posX: s,
    posY: a
  }) => {
    const i = _(),
      o = $(),
      r = l(A => A.template.myTemplate),
      c = l(A => A.user.user),
      [d, p] = u.useState(!1);
    return e.jsx("div", {
      className: Y.file_button_container,
      children: e.jsx("button", {
        disabled: n || d,
        className: Y.file_button,
        onPointerUp: async () => {
          try {
            p(!0);
            const A = new Blob([t.data], {
              type: "application/octet-stream"
            });
            if ((await Fe.uploadTemplate({
                blob: A,
                posX: s,
                posY: a
              })).status === 200) {
              r && C.mainImage.worldTemplate.deleteTemplate(r.id);
              const g = await i(ft.getTemplateById({
                  id: c.id
                })),
                w = {
                  ...g.payload,
                  url: `${g.payload.url}?time=${Date.now()}`,
                  type: Se.my
                };
              i(qf(w)), i(_i()), await C.mainImage.worldTemplate.add(w), i(k({
                id: performance.now(),
                text: "Create successfully!",
                icon: ""
              })), o.push("/template")
            } else i(k({
              id: performance.now(),
              text: "Error, try again",
              icon: ""
            }));
            p(!1)
          } catch {
            i(k({
              id: performance.now(),
              text: "Use another coordinates",
              icon: ""
            })), p(!1)
          }
        },
        children: "Create template"
      })
    })
  },
  Wj = ({
    templateSize: n,
    setTemplateSize: t,
    coords: s,
    setCoords: a
  }) => (u.useState([16, 32, 64, 128]), e.jsxs("div", {
    className: Y.template_coords,
    children: [e.jsx("div", {
      className: Y.template_coordinates_title,
      children: "Input template coordinates:"
    }), e.jsxs("div", {
      className: Y.template_coords_container,
      children: [e.jsxs("div", {
        className: Y.coords_item,
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
            an(r) && a(r)
          },
          className: Y.coords_input
        })]
      }), e.jsxs("div", {
        className: Y.coords_item,
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
            an(r) && a(r)
          },
          className: Y.coords_input
        })]
      })]
    })]
  })),
  Yj = () => e.jsxs("div", {
    className: Y.instruction_container,
    children: [e.jsx("div", {
      className: Y.img_container,
      children: e.jsx("img", {
        alt: "img",
        className: Y.image,
        src: xi
      })
    }), e.jsx("div", {
      className: Y.instruction_text,
      children: "Upload a picture and create a template"
    })]
  }),
  Jj = () => {
    _(), l(Ye);
    const [n, t] = u.useState(null), [s, a] = u.useState(null), [i, o] = u.useState(null), [r, c] = u.useState(16), [d, p] = u.useState({
      x: "",
      y: ""
    }), [A, h] = u.useState(!1);
    return u.useEffect(() => {}, []), u.useEffect(() => {
      if (n !== null) {
        h(!0);
        const g = async () => {
          const w = document.createElement("canvas"),
            x = w.getContext("2d");
          x.imageSmoothingEnabled = !1;
          const v = n.width / n.height;
          let y, P;
          v > 1 ? (y = r, P = r / v) : (P = r, y = r * v);
          const ge = (r - y) / 2,
            pe = (r - P) / 2;
          w.width = r, w.height = r, x.drawImage(n, ge, pe, y, P);
          const M = x.getImageData(0, 0, r, r);
          Vj(M), x.putImageData(M, 0, 0), a(M), o(w.toDataURL())
        };
        setTimeout(() => {
          g().then(() => {
            h(!1)
          })
        }, 100)
      }
    }, [n, r]), e.jsxs(W, {
      children: [i === null && e.jsx(Yj, {}), i !== null && e.jsx(Xj, {
        loading: A,
        dataUrl: i,
        templateSize: r
      }), i !== null && e.jsx(ub, {
        templateSize: r,
        setTemplateSize: c
      }), i !== null && e.jsx(Wj, {
        coords: d,
        setCoords: p,
        templateSize: r,
        setTemplateSize: c
      }), n === null && e.jsx(Lj, {
        setFile: t,
        templateSize: r,
        loading: A
      }), n !== null && e.jsx(Gj, {
        loading: A,
        imageData: s,
        posX: d.x,
        posY: d.y
      })]
    })
  },
  Kj = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAABZUlEQVR4nO3cz4nCQBhA8cliBcI2sFfBsx7FHrYFSxArEDvQFuzBs54Ft4hdsIV4Tg4O8eWbjfB+t+CfwONjmBG1SvvfOullH6ZjDAgZEDIgZEDIgJABIQNCBoQMCBkQMiBkQMiAkAEhA0IGhAwIGRAyIGRAaFT6hvXq8+nj1eEv9PV9cwIhA0IGhAwIGRAyIGRAqPg+MCe3zxsaJxAyIGRAKHwNzK1pk/WxcX3bfaPnt+8XfTZ2AiEDQgaEel8Du+7jfr4Woc+PXhOdQMiAkAGhfz8Ld10zh3ZWdgIhA0IGhHpfA+fbU+P6vFl2ejz6fmk8RfdrcwIhA0IGhMJ/sT67XxvX2TWqo9z7XXpe89qcQMiAkAGh4v/aEX2W9fuBb8aAkAGh4p8H0n1fVvC+r80JhAwIGRAqvgZGn01LcwIhA0IGhAwIGRAyIGRAyICQASEDQgaEDAgZEDIgZEDIgJABiZTSA9erPYxaPJ1yAAAAAElFTkSuQmCC",
  Zj = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAABFElEQVR4nO3ZwU0DMRRAQQdRQaS0wZ0zxVBDKqAFKIZzqAWKCC3EPBk50sx9V96nL2stH8b793XwZw/SNQJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkaPq158fT391zfc5PDxs+S9JjASMBIwEjASMBIwEjASMBIwEjASMFp2Fp71/PY59cTl/LLDsk1gJWAkYLTNHvh1fNpgFfNMYCRgJGAkYCRgJGAkYLTNf+Bu98i3MoGRgJGAkYCRgJGAkYCRgJGAkYCRgNGys/DsPe9yi+5cTGAkYCRgtGwPvNd73lkmMBIwEjASMBIwEjASMBIwEjASMBIwEjASMBIwEjASMBKwGGP8AtVUDnVJr20VAAAAAElFTkSuQmCC",
  $j = "/assets/gp_ase_f_outl-FdQpX43h.gif",
  e0 = () => {
    const n = _(),
      t = l(qn),
      s = l(zn),
      a = l(v => v.user.pixelCoins),
      i = l(li.selectAll),
      o = l(v => v.daily.getDailyListFetchStatus),
      r = a >= 100,
      c = l(v => v.user.verificatedWalletStatus),
      d = l(v => v.mining.tasks.checkCaptcha),
      p = l(v => v.user.hasCaptchaCode),
      A = l(v => v.user.hasCaptchaCodeStatus);
    u.useEffect(() => {
      c === m.idle && n(Ie.getVerificatedWallet())
    }, [c]), u.useEffect(() => {
      o === m.idle && n(di.getList())
    }, [o]), u.useEffect(() => {
      A === m.idle && n(Ie.checkHasCaptchaCode())
    }, [A]);
    let h = 0;
    a >= 1e5 && (h += 1), d && (h += 1), i.forEach(v => {
      v.timestamp
    });
    const [g, w] = u.useState(!1), x = v => {
      if (p) {
        w(v);
        return
      }
      if (w(!1), !(V(1, 100) >= 0) && !It.devServer) {
        n(k({
          id: performance.now(),
          text: "Ton network is busy, try later"
        }));
        return
      }
      d && (v = !1), w(v)
    };
    return e.jsxs(W, {
      children: [e.jsx(zo, {
        show: g,
        setShow: x
      }), e.jsx("div", {
        className: te.layout,
        children: e.jsxs("div", {
          className: te.container,
          children: [e.jsxs("div", {
            className: te.header,
            children: [e.jsx("div", {}), e.jsx("img", {
              alt: "image",
              src: $j,
              className: te.bg_image
            }), e.jsx("div", {
              className: te.title,
              children: "AIRDROP"
            }), e.jsx("div", {
              className: te.timer,
              children: e.jsx("div", {
                className: te.timer_inner,
                children: e.jsx(Ro, {})
              })
            })]
          }), e.jsx("div", {
            className: te.line
          }), e.jsxs("div", {
            className: te.requirements_title,
            children: [e.jsx("div", {
              children: "Required"
            }), e.jsxs("div", {
              className: te.gray,
              children: [h, "/2 completed to get airdrop"]
            })]
          }), e.jsxs("div", {
            className: te.requirements,
            children: [e.jsxs("div", {
              className: te.item,
              children: [e.jsx("div", {
                children: e.jsx("img", {
                  alt: "img",
                  className: te.item_image,
                  src: Zj
                })
              }), e.jsx("div", {
                className: te.main_info,
                children: e.jsxs("div", {
                  children: ["Total balance: 100 ", e.jsx(Un, {})]
                })
              }), e.jsx(Ks, {
                success: r
              })]
            }), e.jsxs("div", {
              className: te.item,
              onPointerUp: x,
              children: [e.jsx("div", {
                children: e.jsx("img", {
                  alt: "img",
                  className: te.item_image,
                  src: Kj
                })
              }), e.jsx("div", {
                className: te.main_info,
                children: e.jsx("div", {
                  children: e.jsx("span", {
                    children: "TON Captcha"
                  })
                })
              }), e.jsx(Ks, {
                success: d
              })]
            })]
          }), e.jsx("div", {
            style: {
              height: 40 + t.top + s.top
            }
          })]
        })
      })]
    })
  },
  t0 = "_general_info_container_1u2nd_1",
  n0 = "_img_container_1u2nd_7",
  s0 = "_image_1u2nd_17",
  a0 = "_image_cup_1u2nd_23",
  i0 = "_image_glow_container_1u2nd_29",
  o0 = "_image_glow_1u2nd_29",
  r0 = "_rotate_1u2nd_1",
  c0 = "_image_glow_reverse_1u2nd_48",
  l0 = "_title_1u2nd_53",
  d0 = "_description_container_1u2nd_60",
  u0 = "_description_1u2nd_60",
  p0 = "_gold_1u2nd_73",
  ke = {
    general_info_container: t0,
    img_container: n0,
    image: s0,
    image_cup: a0,
    image_glow_container: i0,
    image_glow: o0,
    rotate: r0,
    image_glow_reverse: c0,
    title: l0,
    description_container: d0,
    description: u0,
    gold: p0
  },
  m0 = "_info_layout_1p9dg_1",
  h0 = {
    info_layout: m0
  },
  A0 = n => {
    const t = new Uint8Array(n.data);
    for (let s = 0; s < t.length; s += 4) {
      const a = t[s],
        i = t[s + 1],
        o = t[s + 2];
      if (t[s + 3] === 0) continue;
      let c = Ue[0],
        d = 1 / 0;
      for (const A of Ue) {
        const h = en.deltaE(en(_t(a, i, o)), en(A));
        h < d && (d = h, c = A)
      }
      const p = nt(c);
      n.data[s] = p.r, n.data[s + 1] = p.g, n.data[s + 2] = p.b, n.data[s + 3] = 255
    }
  },
  g0 = "_instruction_container_17lvx_1",
  _0 = "_img_container_17lvx_9",
  f0 = "_img_inner_container_17lvx_16",
  x0 = "_image_17lvx_22",
  v0 = "_image_status_17lvx_30",
  y0 = "_image_status_rejected_17lvx_45",
  w0 = "_image_status_review_17lvx_49",
  b0 = "_image_status_approved_17lvx_53",
  j0 = "_copy_button_container_17lvx_57",
  C0 = "_button_copy_17lvx_65",
  P0 = "_gray_17lvx_71",
  N0 = "_preview_container_17lvx_75",
  S0 = "_preview_image_container_17lvx_81",
  I0 = "_preview_image_17lvx_81",
  T0 = "_preview_image_loader_17lvx_94",
  D0 = "_template_size_17lvx_109",
  E0 = "_template_title_17lvx_117",
  B0 = "_template_size_container_17lvx_122",
  k0 = "_template_size_item_17lvx_128",
  R0 = "_template_size_item_active_17lvx_136",
  U0 = "_template_coords_17lvx_141",
  O0 = "_template_coordinates_title_17lvx_151",
  M0 = "_template_coords_container_17lvx_156",
  F0 = "_coords_item_17lvx_163",
  Q0 = "_coords_input_17lvx_169",
  z0 = "_file_button_container_17lvx_178",
  q0 = "_file_button_17lvx_178",
  ne = {
    instruction_container: g0,
    img_container: _0,
    img_inner_container: f0,
    image: x0,
    image_status: v0,
    image_status_rejected: y0,
    image_status_review: w0,
    image_status_approved: b0,
    copy_button_container: j0,
    button_copy: C0,
    gray: P0,
    preview_container: N0,
    preview_image_container: S0,
    preview_image: I0,
    preview_image_loader: T0,
    template_size: D0,
    template_title: E0,
    template_size_container: B0,
    template_size_item: k0,
    template_size_item_active: R0,
    template_coords: U0,
    template_coordinates_title: O0,
    template_coords_container: M0,
    coords_item: F0,
    coords_input: Q0,
    file_button_container: z0,
    file_button: q0
  },
  Gt = {
    approved: "approved",
    review: "review",
    rejected: "rejected"
  },
  H0 = () => {
    const n = _(),
      t = l(a => a.tournament.myTemplate);
    let s = Gt.review;
    return t && t.approved && (s = Gt.approved), t && (t.deletedAt || t.approved === !1) && (s = Gt.rejected), e.jsxs("div", {
      className: ne.instruction_container,
      children: [t && e.jsx("div", {
        children: "Current template:"
      }), e.jsx("div", {
        className: ne.img_container,
        children: e.jsxs("div", {
          className: ne.img_inner_container,
          children: [e.jsx("img", {
            alt: "img",
            className: ne.image,
            src: t ? `${t.url}?time=${Date.now()}` : xi,
            onPointerUp: () => {
              t.id && t.id !== 0 && n(hi(t))
            }
          }), s === Gt.review && e.jsx("div", {
            className: U(ne.image_status, ne.image_status_review),
            children: "On review"
          }), s === Gt.rejected && e.jsx("div", {
            className: U(ne.image_status, ne.image_status_rejected),
            children: "Rejected"
          }), s === Gt.approved && e.jsx("div", {
            className: U(ne.image_status, ne.image_status_approved),
            children: "Approved"
          })]
        })
      }), e.jsx("div", {
        className: ne.copy_button_container,
        children: e.jsx(mn, {
          url: `${Et}?startapp=f${t==null?void 0:t.id}_t`,
          className: ne.button_copy,
          text: "Copy template link"
        })
      })]
    })
  },
  L0 = ({
    dataUrl: n,
    loading: t,
    templateSize: s
  }) => e.jsx("div", {
    className: ne.preview_container,
    children: e.jsxs("div", {
      className: ne.preview_image_container,
      children: [e.jsx("img", {
        alt: "templateImage",
        id: "templateImage",
        className: ne.preview_image,
        src: n
      }), t && e.jsx("div", {
        className: ne.preview_image_loader,
        children: "Loading..."
      })]
    })
  }),
  X0 = ({
    templateSize: n,
    setTemplateSize: t
  }) => {
    const [s] = u.useState([n]);
    return e.jsxs("div", {
      className: ne.template_size,
      children: [e.jsx("div", {
        className: ne.template_title,
        children: "Template Size"
      }), e.jsx("div", {
        className: ne.template_size_container,
        children: s.map(a => {
          const i = [ne.template_size_item];
          return n === a && i.push(ne.template_size_item_active), e.jsx("div", {
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
  V0 = ({
    coords: n,
    setCoords: t
  }) => null,
  G0 = () => {
    _(), l(Ye);
    const n = l(Ai),
      t = co[n],
      [s, a] = u.useState(null),
      [i, o] = u.useState(null),
      [r, c] = u.useState(null),
      [d, p] = u.useState((t == null ? void 0 : t.templateSize) || 256),
      [A, h] = u.useState({
        x: 0,
        y: 0
      }),
      [g, w] = u.useState(!1);
    return u.useEffect(() => {
      if (s !== null) {
        w(!0);
        const x = async () => {
          const v = document.createElement("canvas"),
            y = v.getContext("2d");
          y.imageSmoothingEnabled = !1;
          const P = s.width / s.height;
          let ge, pe;
          P > 1 ? (ge = d, pe = d / P) : (pe = d, ge = d * P);
          const M = (d - ge) / 2,
            ze = (d - pe) / 2;
          v.width = d, v.height = d, y.drawImage(s, M, ze, ge, pe);
          const Ot = y.getImageData(0, 0, d, d);
          A0(Ot), y.putImageData(Ot, 0, 0), o(Ot), c(v.toDataURL())
        };
        setTimeout(() => {
          x().then(() => {
            w(!1)
          })
        }, 100)
      }
    }, [s, d]), e.jsxs("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 14
      },
      children: [r === null && e.jsx(H0, {}), r !== null && e.jsx(L0, {
        loading: g,
        dataUrl: r,
        templateSize: d
      }), r !== null && e.jsx(X0, {
        templateSize: d,
        setTemplateSize: p
      }), r !== null && e.jsx(V0, {
        coords: A,
        setCoords: h,
        templateSize: d,
        setTemplateSize: p
      }), e.jsxs("div", {
        style: {
          marginTop: 20,
          textAlign: "center"
        },
        children: ["To participate in the new round, please upload a new template! Size:", t == null ? void 0 : t.templateSize, "х", t == null ? void 0 : t.templateSize, ".Templates with no artistic value will be rejected."]
      })]
    })
  },
  W0 = "_layout_1c7e5_1",
  Y0 = "_container_1c7e5_5",
  J0 = "_button_container_1c7e5_11",
  K0 = "_button_1c7e5_11",
  Z0 = "_end_of_list_button_1c7e5_27",
  ht = {
    layout: W0,
    container: Y0,
    button_container: J0,
    button: K0,
    end_of_list_button: Z0
  },
  $0 = "_template_item_container_1c93x_1",
  eC = "_template_item_inner_1c93x_12",
  tC = "_template_item_picked_1c93x_28",
  nC = "_template_item_rejected_1c93x_43",
  sC = "_template_item_shadow_1c93x_58",
  aC = "_template_rank_1c93x_70",
  iC = "_template_recolors_1c93x_90",
  oC = "_template_recolors_pixel_1c93x_105",
  rC = "_template_image_1c93x_112",
  Je = {
    template_item_container: $0,
    template_item_inner: eC,
    template_item_picked: tC,
    template_item_rejected: nC,
    template_item_shadow: sC,
    template_rank: aC,
    template_recolors: iC,
    template_recolors_pixel: oC,
    template_image: rC
  },
  $t = ({
    item: n,
    rank: t,
    repaints: s,
    style: a = {},
    onPointerUp: i = () => {}
  }) => {
    const o = _(),
      r = l(p => p.tournament.selectedTemplate),
      c = r && r.id === n.id,
      d = u.useRef(!0);
    return u.useEffect(() => {
      const p = setTimeout(() => {
        d.current = !1
      }, 100);
      return () => {
        clearTimeout(p)
      }
    }, []), e.jsxs("div", {
      className: Je.template_item_container,
      style: {
        ...a
      },
      onPointerUp: async () => {
        d.current || (n.id && n.id !== 0 && o(hi(n)), i())
      },
      children: [e.jsx("div", {
        className: Je.template_item_inner,
        children: e.jsx("img", {
          alt: "image",
          className: Je.template_image,
          src: `${n.url}`
        })
      }), c && n.approved !== !1 && e.jsx("div", {
        className: Je.template_item_picked,
        children: "Picked"
      }), n.approved === !1 && e.jsx("div", {
        className: Je.template_item_rejected,
        children: "Rejected"
      }), t && e.jsx("div", {
        className: Je.template_rank,
        children: t
      }), s !== void 0 && s !== 0 && e.jsx("div", {
        className: Je.template_item_shadow
      }), s !== void 0 && s !== 0 && e.jsxs("div", {
        className: Je.template_recolors,
        children: [e.jsx("div", {
          className: Je.template_recolors_pixel
        }), sn(s)]
      })]
    })
  },
  cC = () => {
    const n = _(),
      t = u.useRef(null),
      s = l(r => r.tournament.approvedTemplatesListStatus),
      a = l(r => r.tournament.approvedTemplatesListOffset),
      i = l(r => r.tournament.approvedTemplatesListLimit),
      o = l(r => r.tournament.approvedTemplatesListTotal);
    return u.useEffect(() => {}, [s, a, i, o]), a >= o && s !== m.pending ? e.jsx("div", {
      className: ht.button_container,
      children: e.jsx("button", {
        className: ht.end_of_list_button,
        children: "That's all fren"
      })
    }) : e.jsx("div", {
      className: ht.button_container,
      children: e.jsx("button", {
        ref: t,
        disabled: s === m.pending,
        className: ht.button,
        onPointerUp: () => {
          n(rt.getApprovedList({
            offset: a,
            limit: i
          }))
        },
        children: s === m.pending ? "Loading..." : "Load more"
      })
    })
  },
  lC = () => {
    const n = _(),
      t = l(i => i.tournament.approvedTemplatesListOffset),
      s = l(i => i.tournament.approvedTemplatesListLimit),
      a = l(Uo.selectAll);
    return u.useEffect(() => (n(rt.getApprovedList({
      offset: t,
      limit: s
    })), () => {
      n(ar())
    }), []), e.jsxs("div", {
      className: ht.layout,
      children: [e.jsx("div", {
        className: ht.container,
        children: a.map((i, o) => e.jsx($t, {
          item: i,
          rank: o + 1,
          repaints: i.repaints,
          approved: !0
        }, i.id))
      }), e.jsx(cC, {})]
    })
  },
  dC = () => {
    const n = _(),
      t = l(Uo.selectAll),
      a = l(i => i.tournament.selectedTemplate) ? 15 : 16;
    return u.useEffect(() => (n(rt.getRandomList()), () => {
      n(ar())
    }), []), e.jsx("div", {
      className: ht.layout,
      children: e.jsx("div", {
        className: ht.container,
        children: t.map((i, o) => o + 1 > a ? null : e.jsx($t, {
          item: i
        }, i.id))
      })
    })
  },
  uC = "_round_info_container_1d52c_1",
  pC = "_title_1d52c_7",
  mC = "_description_1d52c_12",
  hC = "_round_status_container_1d52c_17",
  lt = {
    round_info_container: uC,
    title: pC,
    description: mC,
    round_status_container: hC
  },
  AC = "_round_indicator_mgwmo_1",
  gC = "_round_indicator_wait_mgwmo_37",
  Pr = {
    round_indicator: AC,
    round_indicator_wait: gC
  },
  _C = () => e.jsx("div", {
    className: Pr.round_indicator_wait
  }),
  Nr = () => e.jsx("div", {
    className: Pr.round_indicator
  }),
  fC = () => {
    const n = l(Xn);
    return l(Ai), n ? e.jsxs("div", {
      className: lt.round_info_container,
      children: [e.jsxs("div", {
        children: [e.jsxs("div", {
          className: lt.title,
          children: ["Top ", co[n].templateThreshold, " ", "templates will win"]
        }), e.jsx("div", {
          className: lt.description,
          children: "Most active painters gets rewarded"
        })]
      }), e.jsxs("div", {
        className: lt.round_status_container,
        children: [e.jsx(Nr, {}), " on"]
      })]
    }) : e.jsxs("div", {
      className: lt.round_info_container,
      children: [e.jsxs("div", {
        children: [e.jsx("div", {
          className: lt.title,
          children: "Tournament finished"
        }), e.jsx("div", {
          className: lt.description,
          children: "Waiting for results"
        })]
      }), e.jsxs("div", {
        className: lt.round_status_container,
        children: [e.jsx(_C, {}), " Soon"]
      })]
    })
  },
  xC = () => {
    const n = l(Xn),
      t = l(s => s.tournament.periodsStatus);
    return e.jsxs("div", {
      children: [e.jsx(fC, {}), n && t === m.fulfilled && e.jsx(lC, {}), !n && t === m.fulfilled && e.jsx(dC, {})]
    })
  },
  vC = "_soon_4m91z_1",
  yC = "_active_round_instruction_4m91z_11",
  wC = "_not_active_round_instruction_4m91z_19",
  bC = "_round_container_4m91z_25",
  jC = "_round_title_4m91z_33",
  CC = "_round_title_text_4m91z_38",
  PC = "_round_indicator_4m91z_43",
  NC = "_round_status_success_4m91z_49",
  SC = "_round_status_fail_4m91z_60",
  IC = "_success_4m91z_71",
  TC = "_fail_4m91z_75",
  DC = "_gray_4m91z_79",
  EC = "_round_main_info_4m91z_83",
  BC = "_round_image_container_4m91z_89",
  kC = "_round_image_4m91z_89",
  RC = "_round_lines_container_4m91z_103",
  UC = "_round_line_4m91z_103",
  OC = "_divider_4m91z_117",
  MC = "_pixels_number_4m91z_124",
  FC = "_pixel_4m91z_124",
  X = {
    soon: vC,
    active_round_instruction: yC,
    not_active_round_instruction: wC,
    round_container: bC,
    round_title: jC,
    round_title_text: CC,
    round_indicator: PC,
    round_status_success: NC,
    round_status_fail: SC,
    success: IC,
    fail: TC,
    gray: DC,
    round_main_info: EC,
    round_image_container: BC,
    round_image: kC,
    round_lines_container: RC,
    round_line: UC,
    divider: OC,
    pixels_number: MC,
    pixel: FC
  },
  QC = ({
    result: n
  }) => {
    const t = _(),
      s = l(Xn);
    if (!n) return null;
    const a = n.round_id,
      i = n.repaints_to_win - n.repaints,
      o = n.rank <= n.rank_to_win && n.rank !== 0,
      r = n.template,
      c = r.rank;
    let d = r.lastSurvivalRank;
    a === 1 && (d = 512), a === 2 && (d = 256), a === 3 && (d = 128);
    const p = c <= d,
      A = r.lastSurvivalRepaints - r.repaints,
      h = o && p,
      g = s && s === a,
      w = g ? "Winning" : "Won",
      x = g ? "😔 Losing" : "😔 Lost";
    return e.jsxs("div", {
      className: X.round_container,
      onPointerUp: () => {
        r && r.id && r.id !== 0 && t(hi(r))
      },
      children: [e.jsxs("div", {
        className: X.round_title,
        children: [e.jsxs("div", {
          className: X.round_title_text,
          children: ["Round ", a, " ", g ? "is on" : "has ended"]
        }), e.jsx("div", {
          className: X.round_indicator,
          children: g && e.jsx(Nr, {})
        }), h && e.jsx("div", {
          className: U(X.round_status_success, X.success),
          children: w
        }), !h && e.jsx("div", {
          className: U(X.round_status_fail, X.fail),
          children: x
        })]
      }), e.jsxs("div", {
        className: X.round_main_info,
        children: [e.jsx("div", {
          className: X.round_image_container,
          children: e.jsx("img", {
            alt: "image",
            className: X.round_image,
            src: n.template.url
          })
        }), e.jsxs("div", {
          className: X.round_lines_container,
          children: [e.jsxs("div", {
            className: U(X.round_line),
            children: [e.jsx("div", {
              className: U(X.gray),
              children: "Template rank:"
            }), e.jsxs("div", {
              className: U(p ? X.success : X.fail),
              children: ["👑 ", c]
            })]
          }), e.jsxs("div", {
            className: X.round_line,
            children: [e.jsx("div", {
              className: U(X.gray),
              children: "Pixels to win"
            }), e.jsx("div", {
              children: p ? "In the zone" : sn(A)
            })]
          }), e.jsx("div", {
            className: X.divider
          }), e.jsxs("div", {
            className: X.round_line,
            children: [e.jsx("div", {
              className: U(X.gray),
              children: "Your position:"
            }), e.jsx("div", {
              className: U(o ? X.success : X.fail),
              children: n.rank
            })]
          }), e.jsxs("div", {
            className: X.round_line,
            children: [e.jsx("div", {
              className: U(X.gray),
              children: "Pixels to win"
            }), e.jsxs("div", {
              className: X.pixels_number,
              children: [e.jsx("div", {
                className: X.pixel
              }), e.jsx("div", {
                children: o ? "In the zone" : sn(i)
              })]
            })]
          })]
        })]
      })]
    })
  },
  zC = "_past_rounds_vgbtc_1",
  qC = "_past_rounds_divider_vgbtc_10",
  Ua = {
    past_rounds: zC,
    past_rounds_divider: qC
  },
  Fs = ({
    children: n
  }) => e.jsxs("div", {
    className: Ua.past_rounds,
    children: [e.jsx("div", {
      className: Ua.past_rounds_divider
    }), e.jsx("div", {
      children: n
    }), e.jsx("div", {
      className: Ua.past_rounds_divider
    })]
  }),
  HC = () => {
    const n = l(vg),
      t = l(Ai);
    return n ? e.jsxs(re.Fragment, {
      children: [e.jsx(Fs, {
        children: "All rounds"
      }), n.map(s => t && t === s.round_id ? null : e.jsx(QC, {
        result: s
      }, s.round_id))]
    }) : null
  },
  LC = () => {
    const n = _(),
      t = l(s => s.tournament.resultsStatus);
    return u.useEffect(() => {
      t === m.idle && n(rt.getResults())
    }, [t]), e.jsx("div", {
      children: e.jsx(HC, {})
    })
  },
  XC = "_container_6kfol_1",
  VC = "_item_6kfol_7",
  GC = "_rating_main_info_6kfol_21",
  WC = "_rating_name_6kfol_34",
  YC = "_rating_value_6kfol_41",
  JC = "_pixanos_img_6kfol_47",
  Zt = {
    container: XC,
    item: VC,
    rating_main_info: GC,
    rating_name: WC,
    rating_value: YC,
    pixanos_img: JC
  },
  KC = ({
    item: n,
    index: t
  }) => {
    const s = n.user;
    return e.jsxs("div", {
      className: Zt.item,
      children: [e.jsx(pi, {
        position: s.rank,
        userPic: s.userPic
      }), e.jsxs("div", {
        className: Zt.rating_main_info,
        children: [e.jsx("span", {
          className: Zt.rating_name,
          children: s.firstName
        }), s && s.squad && s.squad.squadId && s.squad.slug && e.jsx(Rt, {
          address: `${s.squad.slug}`,
          display: s.squad.slug,
          limit: 18
        })]
      }), e.jsxs("div", {
        className: Zt.rating_value,
        children: [e.jsx("span", {
          children: s.pixanosCount
        }), e.jsx("img", {
          alt: "pixanos",
          src: un,
          className: Zt.pixanos_img
        })]
      })]
    })
  },
  ZC = ({
    children: n,
    variant: t = Dn.dark,
    onPointerUp: s = () => {},
    style: a = {},
    className: i = void 0,
    disabled: o = !1,
    status: r = m.idle,
    offset: c,
    limit: d,
    total: p
  }) => {
    const A = c >= p && r !== m.pending,
      h = r === m.pending,
      g = A ? Dn.disabled : h ? Dn.loading : t;
    return e.jsx(_e, {
      variant: g,
      onPointerUp: A ? () => {} : s,
      style: a,
      className: i,
      disabled: o,
      children: n
    })
  },
  $C = () => {
    const n = _(),
      t = l(np.selectAll),
      s = l(c => c.ratings.pixanosOffset),
      a = l(c => c.ratings.pixanosLimit),
      i = l(c => c.ratings.pixanosTotal),
      o = l(c => c.ratings.pixanosStatus),
      r = s >= i && o !== m.pending;
    return u.useEffect(() => {
      n(Tt.pixanos({
        offset: 0,
        limit: a
      }))
    }, []), u.useEffect(() => () => {
      n(tm())
    }, []), e.jsxs("div", {
      className: Zt.container,
      children: [t.map((c, d) => e.jsx(KC, {
        item: c,
        index: d
      }, d)), e.jsx(ZC, {
        variant: Dn.blue,
        status: o,
        offset: s,
        limit: a,
        total: i,
        onPointerUp: () => {
          n(Tt.pixanos({
            offset: s,
            limit: a
          }))
        },
        children: r ? "That's all, fren" : "Load more"
      })]
    })
  },
  eP = "_winner_container_1i0xj_1",
  tP = "_winner_container_inner_1i0xj_8",
  nP = "_templates_container_1i0xj_13",
  sP = "_button_container_1i0xj_19",
  aP = "_button_1i0xj_19",
  iP = "_end_of_list_button_1i0xj_35",
  At = {
    winner_container: eP,
    winner_container_inner: tP,
    templates_container: nP,
    button_container: sP,
    button: aP,
    end_of_list_button: iP
  },
  oP = () => {
    const n = _(),
      t = l(i => i.tournament.finalResultsStatus),
      s = l(i => i.tournament.finalResultsOffset);
    l(i => i.tournament.finalResultsLimit);
    const a = l(i => i.tournament.finalResultsTotal);
    return s >= a && t !== m.pending ? e.jsx("div", {
      className: At.button_container,
      children: e.jsx("button", {
        className: At.end_of_list_button,
        children: "That's all fren"
      })
    }) : e.jsx("div", {
      className: At.button_container,
      children: e.jsx("button", {
        disabled: t === m.pending,
        className: At.button,
        onPointerUp: () => {
          n(rt.getFinalResults({
            offset: s,
            limit: s === 0 ? 14 : 16
          }))
        },
        children: t === m.pending ? "Loading..." : "Load more"
      })
    })
  },
  rP = n => {
    const t = {};
    for (let s = 0; s < n.length; s++) {
      const a = n[s];
      t[a.roundId] || (t[a.roundId] = {
        list: []
      }), t[a.roundId].list.push(a)
    }
    return t
  },
  cP = () => {
    const n = _(),
      t = l(r => r.tournament.finalResultsStatus),
      s = l(tp.selectAll),
      a = rP(s),
      i = [9, 8, 7, 6, 5, 4, 3, 2, 1];
    u.useEffect(() => {
      t === m.idle && n(rt.getFinalResults({
        offset: 0,
        limit: 14
      }))
    }, []);
    const o = r => {
      fe(`https://t.me/${it}?startapp=${btoa(`id=${r}`)}`)
    };
    return e.jsxs("div", {
      children: [a[10] && e.jsxs(e.Fragment, {
        children: [e.jsx(Fs, {
          children: "Winner"
        }), e.jsx("div", {
          className: At.winner_container,
          children: e.jsx("div", {
            className: At.winner_container_inner,
            children: e.jsx($t, {
              item: {
                url: a[10].list[0].templateUrl
              },
              onPointerUp: () => {
                o(a[10].list[0].squad.id)
              }
            })
          })
        })]
      }), a[10] && e.jsxs(e.Fragment, {
        children: [e.jsx(Fs, {
          children: "10 round"
        }), e.jsxs("div", {
          className: At.templates_container,
          children: [e.jsx("div", {}), e.jsx($t, {
            item: {
              url: a[10].list[0].templateUrl
            },
            onPointerUp: () => {
              o(a[10].list[0].squad.id)
            }
          }), e.jsx($t, {
            item: {
              url: a[10].list[1].templateUrl
            },
            onPointerUp: () => {
              o(a[10].list[1].squad.id)
            }
          }), e.jsx("div", {})]
        })]
      }), i.map(r => {
        if (!a[r]) return null;
        const c = a[r].list;
        return e.jsxs("div", {
          children: [e.jsxs(Fs, {
            children: [r, " round"]
          }), e.jsx("div", {
            className: At.templates_container,
            children: c.map(d => e.jsx($t, {
              item: {
                url: d.templateUrl
              },
              onPointerUp: () => {
                o(d.squad.id)
              }
            }, d.templateId))
          })]
        }, r)
      }), e.jsx(oP, {})]
    })
  },
  lP = () => {
    const n = l(t => t.tournament.activeTab);
    return e.jsxs("div", {
      className: h0.info_layout,
      children: [n === De.create && e.jsx(G0, {}), n === De.main && e.jsx(xC, {}), n === De.result && e.jsx(LC, {}), n === De.pixanos && e.jsx($C, {}), n === De.finalRating && e.jsx(cP, {})]
    })
  },
  dP = () => e.jsxs(re.Fragment, {
    children: [e.jsx(Ag, {}), e.jsx(lP, {})]
  }),
  uP = "/assets/bg-BNfFdtGI.png",
  pP = "data:image/png;base64,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",
  mP = "/assets/rays-uhfpLlt6.png",
  hP = "/assets/rays2-Ce7ymw8-.png",
  AP = "_container_lc1md_1",
  gP = "_title_lc1md_8",
  _P = "_table_container_lc1md_13",
  fP = "_table_row_lc1md_19",
  xP = "_button_lc1md_26",
  vP = "_active_row_lc1md_50",
  yP = "_row_title_lc1md_50",
  Oa = {
    container: AP,
    title: gP,
    table_container: _P,
    table_row: fP,
    button: xP,
    active_row: vP,
    row_title: yP
  },
  wP = () => {
    const n = _(),
      t = l(a => a.tournament.showTournamentDetailsPopup),
      s = a => {
        n(nr(a))
      };
    return e.jsx(xt, {
      show: t,
      setShow: s,
      children: e.jsxs("div", {
        className: Oa.container,
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
            className: Oa.gold,
            children: "Golden Pixel"
          }), "."]
        }), e.jsx("p", {
          children: "Details on the awards coming soon."
        }), e.jsx("button", {
          className: Oa.button,
          onPointerUp: () => s(!1),
          children: "That's so wise!"
        })]
      })
    })
  },
  bP = "_layout_17ca7_1",
  jP = "_container_17ca7_6",
  CP = "_close_button_17ca7_20",
  PP = "_title_container_17ca7_28",
  NP = "_title_17ca7_28",
  SP = "_image_container_17ca7_39",
  IP = "_image_17ca7_39",
  TP = "_image_placeholder_17ca7_53",
  DP = "_info_container_17ca7_60",
  EP = "_info_row_17ca7_66",
  BP = "_info_title_17ca7_71",
  kP = "_info_value_blue_17ca7_75",
  RP = "_info_value_white_17ca7_80",
  UP = "_buttons_container_17ca7_84",
  OP = "_button_17ca7_84",
  MP = "_not_button_17ca7_100",
  FP = "_button_copy_17ca7_111",
  G = {
    layout: bP,
    container: jP,
    close_button: CP,
    title_container: PP,
    title: NP,
    image_container: SP,
    image: IP,
    image_placeholder: TP,
    info_container: DP,
    info_row: EP,
    info_title: BP,
    info_value_blue: kP,
    info_value_white: RP,
    buttons_container: UP,
    button: OP,
    not_button: MP,
    button_copy: FP
  },
  QP = ({
    template: n,
    style: t = {},
    onPointerUp: s = () => {}
  }) => {
    const a = _(),
      o = l(r => r.tournament.selectTemplateStatus) === m.pending;
    return e.jsx("button", {
      disabled: o,
      className: G.button,
      style: {
        ...t
      },
      onPointerUp: async () => {
        try {
          if (o) return;
          (await a(rt.selectTemplate({
            id: n.id
          }))).meta.requestStatus === m.fulfilled && a(ir(n))
        } catch (r) {
          console.log(r, "error when selecting template")
        } finally {
          s()
        }
      },
      children: "Select Template"
    })
  },
  zP = () => {
    const n = l(r => r.tournament.templateDataInfoPopup),
      t = l(r => r.user.user),
      s = l(r => r.tournament.selectedTemplate),
      a = n.id === t.id,
      i = s !== null && n.id === s.id,
      o = l(Xn);
    return a ? e.jsx("div", {
      className: G.not_button,
      children: "Your template. Cute!"
    }) : i ? e.jsxs("div", {
      className: G.not_button,
      children: ["Selected template ", e.jsx(B, {
        size: 18,
        children: ""
      })]
    }) : o && s ? null : e.jsx(QP, {
      template: n
    })
  },
  qP = () => {
    const n = _(),
      t = $(),
      s = l(i => i.tournament.showTemplateInfoPopup),
      a = l(i => i.tournament.templateDataInfoPopup);
    return l(Xn), !a || !s ? null : Ve.createPortal(e.jsx(vt, {
      onPointerUp: () => n(Ta()),
      show: s,
      children: e.jsx("div", {
        className: G.layout,
        children: e.jsxs("div", {
          className: G.container,
          onPointerUp: i => {
            i.stopPropagation()
          },
          children: [e.jsx("div", {
            className: G.close_button,
            onPointerUp: () => {
              n(Ta())
            },
            children: e.jsx(B, {
              size: 26,
              children: ""
            })
          }), e.jsx("div", {
            className: G.title_container,
            children: e.jsx("span", {
              className: G.title,
              children: "Template"
            })
          }), e.jsx("div", {
            className: G.image_container,
            children: e.jsx("img", {
              alt: "image",
              className: G.image,
              src: a.url
            })
          }), e.jsxs("div", {
            className: G.buttons_container,
            children: [e.jsx(zP, {}), e.jsx(mn, {
              url: `${Et}?startapp=f${a.id}_t`,
              className: G.button_copy,
              text: "Copy template link"
            })]
          }), e.jsxs("div", {
            className: G.info_container,
            children: [e.jsxs("div", {
              className: G.info_row,
              onPointerUp: () => {
                t.push("/"), n(Ta()), C.viewport.viewport.animate({
                  scale: 4,
                  time: 400,
                  position: {
                    x: a.x + a.imageSize / 2,
                    y: a.y + a.imageSize / 2
                  }
                })
              },
              children: [e.jsx("span", {
                className: G.info_title,
                children: "Coordinates"
              }), " ", e.jsxs("span", {
                className: G.info_value_blue,
                children: [a.x, ", ", a.y]
              })]
            }), e.jsxs("div", {
              className: G.info_row,
              children: [e.jsx("span", {
                className: G.info_title,
                children: "Painters"
              }), " ", e.jsx("span", {
                className: G.info_value_white,
                children: a.subscribers
              })]
            }), e.jsxs("div", {
              className: G.info_row,
              children: [e.jsx("span", {
                className: G.info_title,
                children: "Score"
              }), " ", e.jsx("span", {
                className: G.info_value_white,
                children: a.repaints
              })]
            }), e.jsxs("div", {
              className: G.info_row,
              children: [e.jsx("span", {
                className: G.info_title,
                children: "Place"
              }), " ", e.jsx("span", {
                className: G.info_value_white,
                children: a.rank
              })]
            })]
          })]
        })
      })
    }), document.body)
  },
  HP = "_layout_20dlh_1",
  LP = "_container_20dlh_10",
  XP = "_star_20dlh_14",
  VP = "_star_animation_20dlh_21",
  GP = "_move_20dlh_1",
  sa = {
    layout: HP,
    container: LP,
    star: XP,
    star_animation: VP,
    move: GP
  },
  WP = "data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3clinearGradient%20id='grad1'%20x1='0%25'%20y1='0%25'%20x2='0%25'%20y2='100%25'%3e%3cstop%20offset='0%25'%20style='stop-color:%23efce32;stop-opacity:1'%20/%3e%3c!--%20более%20светлый%20желтый%20--%3e%3cstop%20offset='100%25'%20style='stop-color:%23f7752e;stop-opacity:1'%20/%3e%3c!--%20более%20темный%20желтый%20--%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M5%200C2.23858%200%200%202.23858%200%205V27C0%2029.7614%202.23858%2032%205%2032H27C29.7614%2032%2032%2029.7614%2032%2027V5C32%202.23858%2029.7614%200%2027%200H5ZM21.4261%2010.5739H10.5739V21.4261H21.4261V10.5739Z'%20fill='url(%23grad1)'/%3e%3c/svg%3e",
  YP = ({
    size: n,
    style: t = {},
    animation: s = !1
  }) => e.jsx("img", {
    alt: "image",
    src: WP,
    className: s ? sa.star_animation : sa.star,
    style: {
      width: n,
      height: n,
      ...t
    }
  }),
  JP = u.memo(() => {
    const n = Array.from(Array(30));
    return e.jsx("div", {
      className: sa.layout,
      children: e.jsx("div", {
        className: sa.container,
        children: n.map((t, s) => {
          const a = V(2, 6);
          return e.jsx(YP, {
            size: a,
            animation: !0,
            style: {
              animationDelay: `-${s*300}ms`,
              transform: `translate(${V(-80,-170)*(s%2===1?1:-1)}px, ${V(-100,100)}px)`
            }
          }, s)
        })
      })
    })
  }, () => !1),
  KP = "_container_tuzgg_1",
  ZP = "_column_tuzgg_9",
  $P = "_column_rev_tuzgg_17",
  eN = "_title_tuzgg_26",
  tN = "_table_container_tuzgg_32",
  nN = "_table_row_tuzgg_38",
  sN = "_button_tuzgg_45",
  aN = "_value_tuzgg_52",
  iN = "_notpixel_icon_tuzgg_58",
  oN = "_active_row_tuzgg_74",
  rN = "_row_title_tuzgg_74",
  ve = {
    container: KP,
    column: ZP,
    column_rev: $P,
    title: eN,
    table_container: tN,
    table_row: nN,
    button: sN,
    value: aN,
    notpixel_icon: iN,
    active_row: oN,
    row_title: rN
  },
  Vi = "data:image/png;base64,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",
  cN = [{
    name: "Total $PX for painters",
    value: 512e7,
    image: ye
  }, {
    name: "$PX for template owner",
    value: 128e6,
    image: ye
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
  lN = [{
    name: "Template owner",
    value: 128e6,
    image: ye
  }, {
    name: "Top 8",
    value: 64e6,
    image: ye
  }, {
    name: "9-24",
    value: 32e6,
    image: ye
  }, {
    name: "25-56",
    value: 16e6,
    image: ye
  }, {
    name: "57-120",
    value: 8e6,
    image: ye
  }, {
    name: "121-248",
    value: 4e6,
    image: ye
  }, {
    name: "249-504",
    value: 2e6,
    image: ye
  }, {
    name: "505-1016",
    value: 1e6,
    image: ye
  }, {
    name: "1017-2040",
    value: 5e5,
    image: ye
  }, {
    name: "2041-4088",
    value: 25e4,
    image: ye
  }, {
    name: "4089-8184",
    value: 125e3,
    image: ye
  }],
  dN = () => {
    const n = _(),
      t = l(a => a.tournament.showRoundRewardsPopup),
      s = a => {
        n(xg(a))
      };
    return e.jsx(xt, {
      show: t,
      setShow: s,
      children: e.jsxs("div", {
        className: ve.container,
        children: [e.jsx("img", {
          alt: "column",
          src: Vi,
          className: ve.column
        }), e.jsx("img", {
          alt: "column",
          src: Vi,
          className: ve.column_rev
        }), e.jsx("div", {
          className: ve.title,
          children: "Round 10"
        }), e.jsx("div", {
          className: ve.table_container,
          children: cN.map((a, i) => e.jsxs("div", {
            className: ve.table_row,
            children: [e.jsx("div", {
              children: a.name
            }), e.jsxs("div", {
              className: ve.value,
              children: [de({
                num: a.value
              }), a.image && e.jsx("img", {
                alt: "coin",
                src: a.image,
                className: ve.notpixel_icon
              })]
            })]
          }, i))
        }), e.jsx("div", {
          className: ve.title,
          children: "Rewards in templates"
        }), e.jsx("div", {
          className: ve.table_container,
          children: lN.map((a, i) => e.jsxs("div", {
            className: ve.table_row,
            children: [e.jsx("div", {
              children: a.name
            }), e.jsxs("div", {
              className: ve.value,
              children: [de({
                num: a.value
              }), a.image && e.jsx("img", {
                alt: "coin",
                src: a.image,
                className: ve.notpixel_icon
              })]
            })]
          }, i))
        }), e.jsx("button", {
          className: ve.button,
          onPointerUp: () => s(!1),
          children: "That's so wise!"
        })]
      })
    })
  },
  uN = () => {
    const n = _();
    return e.jsxs(W, {
      children: [e.jsxs("div", {
        className: ke.general_info_container,
        style: {
          backgroundImage: `url(${uP})`,
          backgroundPosition: "top center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          marginTop: -20
        },
        children: [e.jsxs("div", {
          className: ke.img_container,
          children: [e.jsx("img", {
            alt: "img",
            className: ke.image_cup,
            src: pP
          }), e.jsx("div", {
            className: ke.image_glow_container,
            children: e.jsx("img", {
              alt: "img",
              className: ke.image_glow,
              src: mP
            })
          }), e.jsx("div", {
            className: ke.image_glow_container,
            children: e.jsx("img", {
              alt: "img",
              className: ke.image_glow_reverse,
              src: hP
            })
          }), e.jsx(JP, {})]
        }), e.jsx("h1", {
          className: ke.title,
          children: "Telegram Battle"
        }), e.jsxs("div", {
          className: ke.description_container,
          children: [e.jsxs("span", {
            className: ke.description,
            children: [e.jsx("span", {
              children: " Paint templates to win "
            }), " ", e.jsx("span", {
              className: ke.gold,
              children: "Golden Pixels"
            }), " ", e.jsx("br", {}), e.jsx(pn, {
              onPointerUp: t => {
                t.stopPropagation(), n(nr(!0))
              },
              children: "How it works"
            })]
          }), e.jsx(wP, {}), e.jsx(dN, {})]
        })]
      }), e.jsx(dP, {}), e.jsx(qP, {})]
    })
  },
  pN = "_container_16f9l_1",
  mN = "_image_container_16f9l_9",
  hN = "_image_16f9l_9",
  AN = "_title_container_16f9l_18",
  gN = "_text_container_16f9l_27",
  _N = "_title_16f9l_18",
  fN = "_gray_16f9l_39",
  xN = "_bold_16f9l_43",
  vN = "_input_16f9l_47",
  yN = "_catalog_container_16f9l_72",
  wN = "_catalog_title_16f9l_77",
  bN = "_catalog_items_container_16f9l_82",
  jN = "_catalog_item_16f9l_82",
  CN = "_catalog_item_image_container_16f9l_101",
  PN = "_catalog_item_image_16f9l_101",
  NN = "_button_container_16f9l_110",
  SN = "_button_16f9l_110",
  IN = "_wrong_helper_text_16f9l_125",
  TN = "_wrong_button_16f9l_130",
  DN = "_wrong_button_text2_16f9l_143",
  S = {
    container: pN,
    image_container: mN,
    image: hN,
    title_container: AN,
    text_container: gN,
    title: _N,
    gray: fN,
    bold: xN,
    input: vN,
    catalog_container: yN,
    catalog_title: wN,
    catalog_items_container: bN,
    catalog_item: jN,
    catalog_item_image_container: CN,
    catalog_item_image: PN,
    button_container: NN,
    button: SN,
    wrong_helper_text: IN,
    wrong_button: TN,
    wrong_button_text2: DN
  },
  EN = "/assets/box_1-CzUKXu07.gif",
  BN = "/assets/box_2-wR9cQS7q.gif",
  kN = "/assets/box_3-g_PL1kKM.gif",
  RN = "/assets/dogs-D0jtZggB.gif",
  UN = "/assets/secret_word-BTKB1fAO.gif",
  ON = "/assets/cube_youtube_2-BqessN1a.gif",
  MN = "/assets/cube_twitter_3_m_-Bxf2Qx_E.gif",
  $n = {
    Ghost: "Ghost",
    Mythical: "Mythical",
    Magical: "Magical",
    Dogs: "Dogs"
  },
  FN = () => {
    const n = _(),
      [t, s] = u.useState(""),
      [a, i] = u.useState(!1),
      [o, r] = u.useState(!1),
      [c, d] = u.useState({
        count: 0,
        limit: 1e4
      }),
      [p, A] = u.useState({
        count: 0,
        limit: 1e4
      }),
      [h, g] = u.useState({
        count: 0,
        limit: 1
      }),
      [w, x] = u.useState({
        count: 0,
        limit: 5e3
      });
    return u.useEffect(() => {
      let v = null;
      return o && (v = setTimeout(() => {
        r(!1)
      }, 5e3)), () => {
        clearTimeout(v)
      }
    }, [o]), u.useEffect(() => {
      (async () => {
        const y = await O.getSecretStats();
        y.status === 200 && y.data && y.data.forEach(P => {
          P.group_name === $n.Ghost && d({
            count: P.usage_count,
            limit: P.limit
          }), P.group_name === $n.Mythical && A({
            count: P.usage_count,
            limit: P.limit
          }), P.group_name === $n.Magical && g({
            count: P.usage_count,
            limit: P.limit
          }), P.group_name === $n.Dogs && x({
            count: P.usage_count,
            limit: P.limit
          })
        })
      })()
    }, []), e.jsx(W, {
      children: e.jsxs("div", {
        className: S.container,
        children: [e.jsx("div", {
          className: S.image_container,
          children: e.jsx("img", {
            alt: "image",
            className: S.image,
            src: UN
          })
        }), e.jsxs("div", {
          className: S.title_container,
          children: [e.jsxs("div", {
            className: S.text_container,
            children: [e.jsx("span", {
              className: U(S.bold, S.title),
              children: "Discover the Secrets"
            }), e.jsx("span", {
              className: S.gray,
              children: "Got secret word?"
            })]
          }), e.jsx("input", {
            className: S.input,
            placeholder: "Enter your word here, fren",
            value: t,
            onChange: v => {
              let y = v.target.value;
              s(y)
            }
          })]
        }), e.jsxs("div", {
          className: S.catalog_container,
          children: [e.jsx("div", {
            className: U(S.catalog_title, S.bold),
            children: "Secret boxes to discover"
          }), e.jsxs("div", {
            className: S.catalog_items_container,
            children: [e.jsxs("div", {
              className: S.catalog_item,
              children: [e.jsx("div", {
                className: S.catalog_item_image_container,
                children: e.jsx("img", {
                  alt: "item_image",
                  className: S.catalog_item_image,
                  src: EN
                })
              }), e.jsx("div", {
                className: U(S.bold),
                children: "Ghost's secret"
              }), e.jsxs("div", {
                className: U(S.gray),
                children: [de({
                  num: 1e4
                }), "/", de({
                  num: c.limit
                })]
              })]
            }), e.jsxs("div", {
              className: S.catalog_item,
              children: [e.jsx("div", {
                className: S.catalog_item_image_container,
                children: e.jsx("img", {
                  alt: "item_image",
                  className: S.catalog_item_image,
                  src: BN
                })
              }), e.jsx("div", {
                className: U(S.bold),
                children: "Mythical secret"
              }), e.jsxs("div", {
                className: U(S.gray),
                children: [de({
                  num: p.count
                }), "/", de({
                  num: p.limit
                })]
              })]
            }), e.jsxs("div", {
              className: S.catalog_item,
              children: [e.jsx("div", {
                className: S.catalog_item_image_container,
                children: e.jsx("img", {
                  alt: "item_image",
                  className: S.catalog_item_image,
                  src: RN
                })
              }), e.jsx("div", {
                className: U(S.bold),
                children: "Dogs secret"
              }), e.jsxs("div", {
                className: U(S.gray),
                children: [de({
                  num: w.count
                }), "/", de({
                  num: w.limit
                })]
              })]
            }), e.jsxs("div", {
              className: S.catalog_item,
              children: [e.jsx("div", {
                className: S.catalog_item_image_container,
                children: e.jsx("img", {
                  alt: "item_image",
                  className: S.catalog_item_image,
                  src: kN
                })
              }), e.jsx("div", {
                className: U(S.bold),
                children: "Magical secret"
              }), e.jsxs("div", {
                className: U(S.gray),
                children: [h.count, "/", h.limit]
              })]
            }), e.jsxs("div", {
              className: S.catalog_item,
              children: [e.jsx("div", {
                className: S.catalog_item_image_container,
                children: e.jsx("img", {
                  alt: "item_image",
                  className: S.catalog_item_image,
                  src: ON
                })
              }), e.jsx("div", {
                className: U(S.bold),
                children: "Y secrets"
              }), e.jsx("div", {
                className: U(S.gray),
                children: "Daily"
              })]
            }), e.jsxs("div", {
              className: S.catalog_item,
              children: [e.jsx("div", {
                className: S.catalog_item_image_container,
                children: e.jsx("img", {
                  alt: "item_image",
                  className: S.catalog_item_image,
                  src: MN
                })
              }), e.jsx("div", {
                className: U(S.bold),
                children: "X secrets"
              }), e.jsx("div", {
                className: U(S.gray),
                children: "Daily"
              })]
            })]
          })]
        }), e.jsxs("div", {
          className: S.button_container,
          children: [!o && e.jsx("button", {
            disabled: a,
            className: S.button,
            onPointerUp: async () => {
              i(!0);
              try {
                const v = await O.checkSecret({
                  key: t
                });
                if (v.status === 200 && v.data.secretWord.success) {
                  n(k({
                    id: performance.now(),
                    text: "Success!",
                    icon: ""
                  }));
                  return
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
            className: U(S.gray, S.wrong_helper_text),
            children: "5s to try again"
          }), o && e.jsxs("button", {
            className: S.wrong_button,
            children: [e.jsx("span", {
              children: "Wrong word, fren."
            }), e.jsx("span", {
              className: S.wrong_button_text2,
              children: "But keep searching"
            })]
          })]
        })]
      })
    })
  },
  QN = "_general_info_container_bz7gl_1",
  zN = "_img_container_bz7gl_9",
  qN = "_image_bz7gl_15",
  HN = "_title_container_bz7gl_21",
  LN = "_title_bz7gl_21",
  XN = "_description_container_bz7gl_32",
  VN = "_description_bz7gl_32",
  GN = "_safe_inset_bz7gl_45",
  es = {
    general_info_container: QN,
    img_container: zN,
    image: qN,
    title_container: HN,
    title: LN,
    description_container: XN,
    description: VN,
    safe_inset: GN
  },
  WN = "_info_layout_t9gzv_1",
  YN = "_info_desc_wrapper_t9gzv_11",
  JN = "_info_title_t9gzv_19",
  KN = "_info_text_t9gzv_25",
  ZN = "_button_container_t9gzv_32",
  $N = "_button_content_t9gzv_37",
  Ke = {
    info_layout: WN,
    info_desc_wrapper: YN,
    info_title: JN,
    info_text: KN,
    button_container: ZN,
    button_content: $N
  };
class vi {
  static async uploadNft({
    blob: t
  }) {
    const s = {
      "Content-Type": "application/octet-stream"
    };
    return b.post("/nft/upload", t, {
      headers: s
    })
  }
  static async getNft() {
    return b.get("/nft/get")
  }
  static async getCountApproved() {
    return b.get("/nft/count")
  }
}
const Qs = D("drawNft/uploadNft", async ({
    blob: n
  }) => (await vi.uploadNft({
    blob: n
  })).data),
  zs = D("drawNft/getNft", async () => (await vi.getNft()).data),
  qs = D("drawNft/getCountApproved", async () => (await vi.getCountApproved()).data),
  eS = {
    activeScreen: "connect",
    wallet: null,
    canConnect: !0,
    pixelData: null,
    nftData: null,
    countApproved: 0,
    uploadNftStatus: m.idle,
    getCountApprovedStatus: m.idle,
    getNftStatus: m.idle
  },
  Sr = ie({
    name: "drawNft",
    initialState: eS,
    reducers: {
      setActiveScreen: (n, t) => {
        n.activeScreen = t.payload
      },
      setWallet: (n, t) => {
        n.wallet = t.payload
      },
      setCanConnect: (n, t) => {
        n.canConnect = t.payload
      },
      setPixelData: (n, t) => {
        n.pixelData = t.payload
      }
    },
    extraReducers: n => {
      n.addCase(Qs.pending, (t, s) => {
        t.uploadNftStatus = m.pending
      }).addCase(Qs.fulfilled, (t, s) => {
        t.nftData = s.payload, t.uploadNftStatus = m.fulfilled
      }).addCase(Qs.rejected, (t, s) => {
        t.uploadNftStatus = m.rejected
      }).addCase(qs.pending, (t, s) => {
        t.getCountApprovedStatus = m.pending
      }).addCase(qs.fulfilled, (t, s) => {
        t.getCountApprovedStatus = m.fulfilled, t.countApproved = s.payload
      }).addCase(qs.rejected, (t, s) => {
        t.getCountApprovedStatus = m.rejected
      }).addCase(zs.pending, (t, s) => {
        t.getNftStatus = m.pending
      }).addCase(zs.fulfilled, (t, s) => {
        t.getNftStatus = m.fulfilled, t.nftData = s.payload
      }).addCase(zs.rejected, (t, s) => {
        t.getNftStatus = m.rejected
      })
    }
  }),
  {
    setActiveScreen: yi,
    setWallet: R3,
    setCanConnect: U3,
    setPixelData: O3
  } = Sr.actions,
  Ya = {
    uploadNft: Qs,
    getCountApproved: qs,
    getNft: zs
  },
  tS = Sr.reducer,
  nS = "data:image/png;base64,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",
  sS = () => {
    const n = _(),
      t = l(r => r.drawNft.activeScreen),
      s = l(r => r.drawNft.countApproved),
      a = l(r => r.drawNft.getNftStatus),
      i = l(r => r.drawNft.nftData);
    if (t !== "connect") return null;
    const o = () => a === m.pending ? e.jsx("div", {
      className: Ke.button_container,
      children: e.jsx(_e, {
        variant: "loading",
        onPointerUp: async r => {
          r.stopPropagation(), r.preventDefault()
        },
        children: "Loading data..."
      })
    }) : i ? e.jsx("div", {
      className: Ke.button_container,
      children: e.jsx(_e, {
        variant: "disabled2",
        onPointerUp: async r => {
          r.stopPropagation(), r.preventDefault()
        },
        children: "Wait for NFT approval"
      })
    }) : e.jsx("div", {
      className: Ke.button_container,
      children: e.jsx(_e, {
        variant: "blue",
        onPointerUp: async r => {
          r.stopPropagation(), r.preventDefault(), n(yi("draw"))
        },
        children: e.jsxs("div", {
          className: Ke.button_content,
          children: [e.jsx(B, {
            size: 25,
            children: ""
          }), e.jsx("span", {
            style: {
              transform: "translateY(1px)"
            },
            children: "Create an NFT"
          })]
        })
      })
    });
    return e.jsxs("div", {
      className: Ke.info_layout,
      children: [e.jsx("img", {
        src: nS,
        alt: "nft_dog",
        className: Ke.info_img
      }), e.jsxs("div", {
        className: Ke.info_desc_wrapper,
        children: [e.jsxs("span", {
          className: Ke.info_title,
          children: ["Approved ", je({
            num: s
          }), " / 1,000 NFTs"]
        }), e.jsxs("p", {
          className: Ke.info_text,
          children: ["Create your own pixel artwork. ", e.jsx("br", {}), " Get a special authored NFT", " ", e.jsx("br", {}), " on TON blockchain."]
        })]
      }), e.jsx(o, {})]
    })
  },
  aS = "_info_layout_tww6b_1",
  iS = "_canvas_wrapper_tww6b_10",
  oS = "_description_tww6b_19",
  rS = "_color_panel_tww6b_26",
  cS = "_congrat_tww6b_31",
  lS = "_button_container_tww6b_38",
  bt = {
    info_layout: aS,
    canvas_wrapper: iS,
    description: oS,
    color_panel: rS,
    congrat: cS,
    button_container: lS
  },
  dS = "_nft_canvas_2rbc6_1",
  uS = {
    nft_canvas: dS
  },
  he = {
    width: 64,
    height: 64
  };
class pS {
  constructor({
    app: t
  }) {
    const s = Math.min(Fa, window.innerWidth);
    this.app = t, this.viewport = new window.pixi_viewport.Viewport({
      screenWidth: s,
      screenHeight: s,
      worldWidth: he.width,
      worldHeight: he.height,
      interaction: t.renderer.plugins.interaction,
      threshold: 8
    }), this.app.stage.addChild(this.viewport), this.viewport.drag().pinch({
      noDrag: !0
    }).wheel().clampZoom({
      minScale: 5,
      maxScale: 60
    }), this.viewport.sortableChildren = !0, this.addEvents()
  }
  removeEvents() {
    this.viewport.plugins.pause("drag"), this.viewport.plugins.pause("pinch"), this.viewport.plugins.pause("wheel")
  }
  addEvents() {
    window.addEventListener("resize", () => {
      const t = Math.min(Fa, window.innerWidth);
      this.app.renderer.resize(t, t), this.viewport.resize(t, t)
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
}
class mS {
  constructor({
    app: t,
    viewport: s,
    store: a,
    withGrid: i
  }) {
    Mt(this, "coordsToId", ({
      x: t,
      y: s
    }) => t + s * he.width + 1);
    Mt(this, "getClickCoords", t => {
      const s = this.sprite.toLocal(t.data.global);
      return {
        x: Math.floor(s.x),
        y: Math.floor(s.y)
      }
    });
    this.app = t, this.viewport = s, this.store = a, this.pixiViewport = s.viewport, this.imageData = null, this.texture = null, this.sprite = null, this.initImage(), this.initEvents(), i && this.drawPixelGrid(he.width, he.height)
  }
  initImage() {
    const t = window.localStorage.getItem("nftCanvas");
    this.imageData = t ? new Uint8Array(t.split(",")) : new Uint8Array(he.width * he.height * 4).fill(255), console.log(this.imageData.length);
    const s = PIXI.Texture.fromBuffer(this.imageData, he.width, he.height, {
      format: PIXI.FORMATS.RGBA,
      type: PIXI.TYPES.UNSIGNED_BYTE,
      width: he.width,
      height: he.height
    });
    s.scaleMode = PIXI.SCALE_MODES.NEAREST, this.texture = s, this.sprite = PIXI.Sprite.from(s), this.sprite.interactive = !0, this.pixiViewport.addChild(this.sprite), this.pixiViewport.fitHeight(), this.pixiViewport.moveCenter(this.pixiViewport.worldWidth / 2, this.pixiViewport.worldHeight / 2)
  }
  lock() {
    this.sprite.interactive = !1, this.viewport.removeEvents()
  }
  initEvents() {
    this.sprite.on("pointerdown", t => {
      this.wasMoved = !1
    }), this.pixiViewport.on("moved", () => {
      this.wasMoved = !0
    }), this.sprite.on("pointerup", t => {
      const s = this.store.getState(),
        a = this.getClickCoords(t);
      this.wasMoved || s.nftCanvas.color && (this.paintPixel({
        id: this.coordsToId(a),
        color: nt(s.nftCanvas.color)
      }), this.updateTexture())
    })
  }
  updateTexture() {
    this.sprite.texture.update()
  }
  loadFromPixelData(t) {
    for (let s = 0; s < he.height; s++)
      for (let a = 0; a < he.width; a++) {
        const i = this.coordsToId({
            x: a,
            y: s
          }),
          o = nt(t[s][a]);
        this.paintPixel({
          id: i,
          color: o
        })
      }
  }
  convertToPixelData() {
    const t = this.imageData,
      s = [];
    for (let a = 0; a < he.height; a++) {
      const i = [];
      for (let o = 0; o < he.width; o++) {
        const r = (a * he.width + o) * 4,
          c = t[r],
          d = t[r + 1],
          p = t[r + 2],
          h = t[r + 3] === 0 ? "#ffffff" : _t(c, d, p);
        i.push(h)
      }
      s.push(i)
    }
    return s
  }
  paintPixel({
    id: t,
    color: s
  }) {
    const i = (Number(t) - 1) * 4;
    this.imageData[i] = s.r, this.imageData[i + 1] = s.g, this.imageData[i + 2] = s.b, this.imageData[i + 3] = 255, window.localStorage.setItem("nftCanvas", this.imageData)
  }
  drawPixelGrid(t, s) {
    const o = new PIXI.Graphics;
    o.setTransform(0, 0), o.lineStyle(.06, 0);
    for (let r = 0; r <= t; r++)
      for (let c = 0; c <= s; c++) o.moveTo(r, 0).lineTo(r, s), o.moveTo(0, c).lineTo(t, c);
    o.zIndex = 10, this.viewport.viewport.addChild(o)
  }
  erasePixelGrid() {
    this.viewport.viewport.children.forEach(t => {
      t.zIndex === 10 && this.viewport.viewport.removeChild(t)
    })
  }
  getPixelColor({
    id: t,
    coords: s
  }) {
    let a = 0;
    s ? a = this.coordsToId(s) : a = Number(t);
    const i = (a - 1) * 4,
      o = this.imageData[i],
      r = this.imageData[i + 1],
      c = this.imageData[i + 2];
    return _t(o, r, c)
  }
  isCoordsEqual(t, s) {
    return t.x === s.x && t.y === s.y
  }
}
let Ir;
const hS = n => {
  Ir = n
};
class AS {
  constructor(t = !1) {
    const s = document.getElementById("canvasNft");
    s.addEventListener("wheel", i => {
      i.preventDefault()
    }, {
      passive: !1
    });
    const a = Math.min(Fa, window.innerWidth);
    this.app = new PIXI.Application({
      view: s,
      width: a,
      height: a,
      autoDensity: !0,
      resolution: window.devicePixelRatio,
      antialias: !0,
      transparent: !0,
      type: PIXI.RENDERER_TYPE.WEBGL
    }), this.viewport = new pS({
      app: this.app
    }), this.mainImage = new mS({
      withGrid: t,
      app: this.app,
      viewport: this.viewport,
      store: Ir
    })
  }
  destroy() {
    this.app && (this.app.destroy(!0), this.app = null)
  }
}
let tn;
const gS = u.memo(() => {
    const n = u.useRef(!1);
    return u.useEffect(() => {
      n.current || (tn = new AS(!0), n.current = !0)
    }, []), e.jsx("canvas", {
      id: "canvasNft",
      className: `${uS.nft_canvas}`
    })
  }, () => !0),
  _S = "_color_line_imofs_1",
  fS = "_color_item_imofs_8",
  xS = "_selected_color_imofs_17",
  vS = "_child_scale_imofs_29",
  Ja = {
    color_line: _S,
    color_item: fS,
    selected_color: xS,
    child_scale: vS
  },
  yS = {
    coords: null,
    stats: null,
    color: "#000000"
  },
  Tr = ie({
    name: "nftCanvas",
    initialState: yS,
    reducers: {
      setCoords: (n, t) => {
        an(t.payload) && (n.coords = t.payload)
      },
      setColor: (n, t) => {
        n.color = t.payload
      }
    },
    extraReducers: n => {}
  }),
  {
    setCoords: M3,
    setColor: wS
  } = Tr.actions,
  bS = Tr.reducer,
  jS = ({
    color: n
  }) => {
    const t = l(r => r.nftCanvas.color),
      [s, a] = u.useState(!1),
      i = u.useRef(null),
      o = _();
    return e.jsx("div", {
      style: {
        backgroundColor: n,
        transform: s ? "scale(1.2)" : ""
      },
      className: `${Ja.color_item} ${t===n?Ja.selected_color:""}`,
      onPointerUp: () => {
        var r, c;
        a(!0), i.current !== null && clearTimeout(i.current), i.current = setTimeout(() => {
          a(!1)
        }, 200), o(wS(n)), (c = (r = window.Telegram.WebApp) == null ? void 0 : r.HapticFeedback) == null || c.notificationOccurred("success")
      }
    })
  },
  CS = ({
    colors: n
  }) => e.jsx("div", {
    className: Ja.color_line,
    children: n.map((t, s) => e.jsx(jS, {
      color: t
    }, `${t}_${s}`))
  }),
  PS = "_container_1qimg_1",
  NS = {
    container: PS
  },
  SS = ({
    show: n,
    setShow: t
  }) => {
    const s = _(),
      [a, i] = u.useState(3);
    u.useEffect(() => {
      let r = null;
      return n && (i(3), r = setInterval(() => {
        i(c => c - 1)
      }, 1e3)), () => {
        i(3), clearInterval(r)
      }
    }, [n]);
    const o = a > 0 || !n;
    return e.jsx(xt, {
      show: n,
      setShow: () => t(!1),
      children: e.jsxs("div", {
        className: NS.container,
        children: [e.jsx("div", {
          style: {
            marginTop: 0
          },
          children: e.jsx("span", {
            children: "You can only submit an NFT for review once."
          })
        }), e.jsx(_e, {
          variant: o ? "disabled" : "decor",
          onPointerUp: async () => {
            if (o) return;
            t(!1), tn.mainImage.erasePixelGrid(), tn.mainImage.lock();
            const r = new Blob([tn.mainImage.imageData], {
              type: "application/octet-stream"
            });
            (await s(Ya.uploadNft({
              blob: r
            }))).meta.requestStatus === m.fulfilled ? (s(k({
              id: performance.now(),
              text: "Success!"
            })), s(yi("connect"))) : s(k({
              id: performance.now(),
              text: "Something went wrong... Try again."
            }))
          },
          children: o ? `${a}` : "Confirm send NFT to review"
        }), e.jsx(_e, {
          variant: "blue",
          onPointerUp: () => {
            t(!1)
          },
          children: "Cancel"
        })]
      })
    })
  },
  IS = () => {
    const n = l(i => i.drawNft.activeScreen),
      t = l(i => i.color.basic),
      [s, a] = u.useState(!1);
    return u.useEffect(() => {
      n === "mint" && (tn.mainImage.erasePixelGrid(), tn.mainImage.lock())
    }, [n]), n !== "draw" && n !== "mint" ? null : e.jsxs("div", {
      className: bt.info_layout,
      children: [e.jsx(SS, {
        show: s,
        setShow: a
      }), e.jsxs("div", {
        className: bt.canvas_wrapper,
        children: [e.jsx(gS, {}), n === "draw" && e.jsxs("div", {
          className: bt.color_panel,
          children: [e.jsx(CS, {
            colors: t
          }), e.jsxs("p", {
            className: bt.description,
            children: ["Choose a color and paint ", e.jsx("br", {}), " your artwork in NFT."]
          })]
        }), n === "mint" && e.jsxs(e.Fragment, {
          children: [e.jsx("span", {
            className: bt.congrat,
            children: "Congratulations!"
          }), e.jsxs("p", {
            className: bt.description,
            children: ["Your image is being verified. ", e.jsx("br", {}), "You will receive NFT to", e.jsx("br", {}), "your TON wallet.", e.jsx("br", {})]
          })]
        })]
      }), n === "draw" && e.jsx("div", {
        className: bt.button_container,
        children: e.jsx(_e, {
          variant: "blue",
          onPointerUp: async i => {
            i.stopPropagation(), i.preventDefault(), a(!0)
          },
          children: "Send NFT to review"
        })
      })]
    })
  },
  TS = () => {
    const n = _(),
      t = l(o => o.drawNft.activeScreen),
      s = l(o => o.drawNft.getNftStatus),
      a = l(o => o.drawNft.getCountApprovedStatus),
      i = {
        connect: "Free mint 1,000 pixel NFTs!",
        draw: "Create an NFT",
        mint: "Yay! You have created an NFT!"
      };
    return u.useEffect(() => {
      n(yi("connect"))
    }, []), u.useEffect(() => {
      s === m.idle && n(Ya.getNft())
    }, [s]), u.useEffect(() => {
      a === m.idle && n(Ya.getCountApproved())
    }, [a]), e.jsxs(W, {
      children: [e.jsx("div", {
        className: es.title_container,
        children: e.jsx("span", {
          className: es.title,
          children: i[t]
        })
      }), e.jsxs("div", {
        className: es.general_info_container,
        children: [e.jsx(sS, {}), e.jsx(IS, {})]
      }), e.jsx("div", {
        className: es.safe_inset
      })]
    })
  },
  DS = "_layout_8geds_1",
  ES = "_container_8geds_9",
  BS = "_header_8geds_18",
  kS = "_bg_image_8geds_25",
  RS = "_title_8geds_31",
  US = "_title2_8geds_41",
  OS = "_gray_8geds_48",
  MS = "_bold_8geds_52",
  FS = "_info_layout_8geds_56",
  QS = "_info_container_8geds_69",
  zS = "_percent_controller_container_8geds_76",
  qS = "_donate_percent_8geds_83",
  HS = "_balance_container_8geds_88",
  LS = "_balance_value_8geds_94",
  XS = "_alert_info_8geds_101",
  VS = "_button_container_8geds_106",
  GS = "_button_text_8geds_110",
  L = {
    layout: DS,
    container: ES,
    header: BS,
    bg_image: kS,
    title: RS,
    title2: US,
    gray: OS,
    bold: MS,
    info_layout: FS,
    info_container: QS,
    percent_controller_container: zS,
    donate_percent: qS,
    balance_container: HS,
    balance_value: LS,
    alert_info: XS,
    button_container: VS,
    button_text: GS
  },
  Gi = "/assets/thanos1-yvwRl8rL.gif",
  WS = ({
    values: n,
    setValues: t
  }) => e.jsx(mt.Range, {
    label: "Select your value",
    step: 1,
    min: 0,
    max: 50,
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
        width: "calc(240px)",
        borderRadius: "2px",
        backgroundColor: "var(--btn-dark-bg-color)"
      },
      children: a
    }),
    renderThumb: ({
      props: s
    }) => u.createElement("div", {
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
  }),
  YS = "_container_1qimg_1",
  JS = {
    container: YS
  },
  KS = ({
    show: n,
    setShow: t,
    sharePercent: s
  }) => {
    const a = _(),
      [i, o] = u.useState(3);
    u.useEffect(() => {
      let c = null;
      return n && (o(3), c = setInterval(() => {
        o(d => d - 1)
      }, 1e3)), () => {
        o(3), clearInterval(c)
      }
    }, [n]);
    const r = i > 0 || !n;
    return e.jsx(xt, {
      show: n,
      setShow: () => t(!1),
      children: e.jsxs("div", {
        className: JS.container,
        children: [e.jsxs("div", {
          className: L.alert_info,
          style: {
            marginTop: 0
          },
          children: [e.jsxs("span", {
            className: L.gray,
            children: ["When sending PIX, remember: ", e.jsx("br", {}), " it's a", " "]
          }), e.jsx("span", {
            children: "non-refundable "
          }), e.jsx("span", {
            className: L.gray,
            children: "donation"
          })]
        }), e.jsx(_e, {
          variant: r ? "disabled" : "decor",
          onPointerUp: async () => {
            if (r) return;
            t(!1);
            const c = await O.shareBalance({
              sharePercent: s
            });
            c.status === 200 || c.status === 204 ? (a(Dd(s)), a(k({
              id: performance.now(),
              text: "Success!"
            }))) : a(k({
              id: performance.now(),
              text: "Something went wrong... Try again."
            }))
          },
          children: r ? `${i}` : "Confirm donate"
        }), e.jsx(_e, {
          variant: "blue",
          onPointerUp: () => {
            t(!1)
          },
          children: "Cancel"
        })]
      })
    })
  },
  ZS = () => {
    const [n, t] = u.useState(!1), a = l(Ye).balance_share_percent, [i, o] = u.useState([0]), [r, c] = u.useState(0), d = l(g => g.user.pixelCoins), p = d - r, A = l(qn), h = l(zn);
    return u.useEffect(() => {
      c(Math.floor(d * i[0] / 100))
    }, [i]), e.jsxs(W, {
      children: [e.jsx(KS, {
        show: n,
        setShow: t,
        sharePercent: r * 1e3
      }), e.jsx("div", {
        className: L.layout,
        children: e.jsxs("div", {
          className: L.container,
          children: [e.jsxs("div", {
            className: L.header,
            children: [e.jsx("div", {}), e.jsx("img", {
              alt: "image",
              src: (i[0] === 0, Gi),
              className: L.bg_image
            }), e.jsx("div", {
              className: L.title,
              children: "Thanks, Pixanos!"
            }), e.jsxs("div", {
              className: L.title2,
              children: [e.jsxs("span", {
                className: L.gray,
                children: ["Is it time to be thankful? Donations ", e.jsx("br", {}), " for players who have used"]
              }), e.jsx("span", {
                className: L.bold,
                children: " Pixanos"
              }), e.jsx("span", {
                className: L.gray,
                children: "."
              })]
            })]
          }), e.jsx("div", {
            className: L.info_layout,
            children: e.jsxs("div", {
              className: L.container,
              children: [a !== 0 && e.jsxs(e.Fragment, {
                children: [e.jsxs("div", {
                  className: L.balance_container,
                  children: [e.jsx("span", {
                    children: "Your balance: "
                  }), " ", e.jsxs("span", {
                    className: L.balance_value,
                    children: [e.jsx(de, {
                      num: d
                    }), " PX"]
                  })]
                }), e.jsxs("div", {
                  className: L.balance_container,
                  children: [e.jsx("span", {
                    children: "Share balance: "
                  }), " ", e.jsxs("span", {
                    className: L.balance_value,
                    children: [e.jsx(de, {
                      num: Math.floor(a / 1e3)
                    }), " ", "PX"]
                  })]
                })]
              }), a === 0 && e.jsxs(e.Fragment, {
                children: [e.jsx("div", {
                  className: L.gray,
                  children: e.jsx("span", {
                    children: "Pick your donation amount:"
                  })
                }), e.jsxs("div", {
                  className: L.percent_controller_container,
                  children: [e.jsx(WS, {
                    values: i,
                    setValues: o
                  }), e.jsxs("span", {
                    className: L.donate_percent,
                    children: [i, "%"]
                  })]
                }), e.jsxs("div", {
                  className: L.balance_container,
                  children: [e.jsx("span", {
                    children: "Your balance: "
                  }), " ", e.jsxs("span", {
                    className: L.balance_value,
                    children: [e.jsx(de, {
                      num: d
                    }), " PX"]
                  })]
                }), e.jsxs("div", {
                  className: L.alert_info,
                  children: [e.jsxs("span", {
                    className: L.gray,
                    children: ["When sending PX, remember: ", e.jsx("br", {}), " it's a", " "]
                  }), e.jsx("span", {
                    children: "non-refundable "
                  }), e.jsx("span", {
                    className: L.gray,
                    children: "donation"
                  })]
                }), e.jsx("div", {
                  className: L.button_container,
                  children: e.jsx(_e, {
                    variant: "blue",
                    onPointerUp: g => {
                      r !== 0 && (p < 100 || (g.preventDefault(), g.stopPropagation(), t(!0)))
                    },
                    children: e.jsxs("span", {
                      className: L.button_text,
                      children: ["Send ", e.jsx(de, {
                        num: r
                      }), " PX"]
                    })
                  })
                })]
              }), e.jsx("div", {
                style: {
                  height: 20 + A.bottom + h.bottom
                }
              })]
            })
          })]
        })
      })]
    })
  },
  $S = "_layout_1vmy6_1",
  e2 = "_container_1vmy6_12",
  t2 = "_item_1vmy6_17",
  n2 = "_item_video_1vmy6_24",
  s2 = "_overlay_1vmy6_52",
  a2 = "_top_text_1vmy6_61",
  i2 = "_center_text_1vmy6_71",
  o2 = "_bottom_text_1vmy6_81",
  pt = {
    layout: $S,
    container: e2,
    item: t2,
    item_video: n2,
    overlay: s2,
    top_text: a2,
    center_text: i2,
    bottom_text: o2
  },
  r2 = ({
    itemHeight: n,
    translateStep: t,
    setTranslate: s,
    item: a,
    currentNumber: i
  }) => {
    const o = u.useRef(null),
      r = u.useRef(i),
      c = u.useRef(null);
    return u.useEffect(() => {
      r.current = i, o.current && i === a.number && !c.current && (c.current = o.current.play(), c.current.then(d => {
        c.current = null, r.current !== i && o.current.pause()
      })), o.current && i !== a.number && (c.current || o.current.pause())
    }, [i]), e.jsxs("div", {
      className: pt.item,
      style: {
        height: n
      },
      onPointerUp: () => {
        s(t * (a.number - 1))
      },
      children: [e.jsx("video", {
        ref: o,
        autoPlay: !1,
        preload: "none",
        loop: !0,
        disablePictureInPicture: !0,
        "webkit-playsinline": "",
        playsinline: "",
        pip: !1,
        muted: !0,
        className: pt.item_video,
        src: a.video
      }), e.jsx("div", {
        className: pt.overlay
      }), e.jsx("div", {
        className: pt.top_text,
        children: a.top
      }), e.jsx("div", {
        className: pt.center_text,
        children: a.center
      }), e.jsx("div", {
        className: pt.bottom_text,
        children: a.bottom
      })]
    })
  },
  c2 = () => {
    const n = [],
      t = l(Ye),
      s = l(d => d.mining.info),
      a = l(d => d.mining.tasks),
      i = Object.keys(a || {}).length,
      o = Object.keys((s == null ? void 0 : s.quests) || {}).length;
    let r = 0;
    t && t.created_at && n.push({
      id: "1",
      video: "https://npx-cdn.fra1.cdn.digitaloceanspaces.com/results_video/1_open.mp4",
      top: "You've pixelized",
      center: J_(new Date(t.created_at)),
      bottom: "‟In the Beginning of all Beginnings was the word. So they say. But we say, in the beginning was the Pixels.”",
      number: ++r
    }), t && t.isBetaTester && n.push({
      id: "2",
      video: "https://npx-cdn.fra1.cdn.digitaloceanspaces.com/results_video/beta.mp4",
      top: "BETA PIXEL",
      center: "Visionary!",
      bottom: "Someone who's seen the First Pixel. Show respect. He has nightmares about cubes and flags.",
      number: ++r
    }), t && t.friends && n.push({
      id: "3",
      video: "https://npx-cdn.fra1.cdn.digitaloceanspaces.com/results_video/2_friends.mp4",
      top: "Pixel frens",
      center: `${de({num:t.friends})} Frens`,
      bottom: "Where'd you get that charisma, buddy? Anyway, to create something meaningful, you have to have your dudes around.",
      number: ++r
    }), t && t.repaints && n.push({
      id: "4",
      video: "https://npx-cdn.fra1.cdn.digitaloceanspaces.com/results_video/3_repaints.mp4",
      top: "Repaints",
      center: `${de({num:t.repaints})} Repaints`,
      bottom: "We respect the working man. Your merit reflects your diligence, man.",
      number: ++r
    }), i && n.push({
      id: "6",
      video: "https://npx-cdn.fra1.cdn.digitaloceanspaces.com/results_video/6_task.mp4",
      top: "TASKS COMPLETED",
      center: `${i} tasks`,
      bottom: "Easy assignments are easy $PX! Honestly, this is the easiest way to get airdrop. Our dude.",
      number: ++r
    }), o && n.push({
      id: "7",
      video: "https://npx-cdn.fra1.cdn.digitaloceanspaces.com/results_video/7_secrets.mp4",
      top: "SECRETS COMPLETED",
      center: `${o} secrets`,
      bottom: "Sometimes, it's more important to think than to do. Shrewd pixel! Remember: never talk to ghosts.",
      number: ++r
    });
    const c = n.length;
    return [n, c]
  },
  l2 = () => {
    const [t, s] = u.useState(0), a = l(Qn), [i, o] = u.useState(window.innerHeight - 20 * 2 - 100 - (a ? 0 : 56)), r = u.useRef(null), c = u.useRef(Date.now()), d = 600, p = i + 20, A = t / p + 1, [h, g] = c2();
    u.useEffect(() => {
      const P = () => {
        o(window.innerHeight - 40 - 100 - (a ? 0 : 56))
      };
      return window.addEventListener("resize", P), () => {
        window.removeEventListener("resize", P)
      }
    }, []);
    const w = () => {
        t / p < g - 1 && s(t + p)
      },
      x = () => {
        t !== 0 && s(t - p)
      },
      v = P => {
        const ge = P.changedTouches[0].clientY,
          pe = r.current;
        if (pe !== null) {
          const M = pe - ge;
          Math.abs(M) > 30 && (M > 0 ? w() : x())
        }
      },
      y = P => {
        Date.now() - c.current < d || (P.deltaY > 0 ? w() : P.deltaY < 0 && x(), c.current = Date.now())
      };
    return e.jsx("div", {
      className: pt.layout,
      onTouchStart: P => {
        r.current = P.touches[0].clientY
      },
      onTouchEnd: v,
      onTouchCancel: v,
      onWheel: y,
      children: e.jsxs(nn.div, {
        className: pt.container,
        style: {
          gap: 20
        },
        animate: {
          y: -t
        },
        transition: {
          duration: .3
        },
        children: [e.jsx("div", {
          style: {
            height: 50
          }
        }), h.map(P => e.jsx(r2, {
          itemHeight: i,
          setTranslate: s,
          translateStep: p,
          currentNumber: A,
          item: P
        }, P.id))]
      })
    })
  },
  d2 = "_results_container_10gn8_1",
  u2 = "_image_container_10gn8_11",
  p2 = "_image_10gn8_11",
  m2 = "_avatar_container_10gn8_27",
  h2 = "_final_result_10gn8_31",
  A2 = "_balance_10gn8_36",
  g2 = "_balance_text_10gn8_43",
  _2 = "_stats_container_10gn8_48",
  f2 = "_stats_total_10gn8_56",
  x2 = "_course_10gn8_61",
  v2 = "_logo_container_10gn8_65",
  y2 = "_logo_center_10gn8_72",
  w2 = "_stats_lines_container_10gn8_82",
  b2 = "_stats_line_10gn8_82",
  j2 = "_button_container_10gn8_98",
  C2 = "_gray_10gn8_106",
  P2 = "_bold_10gn8_110",
  oe = {
    results_container: d2,
    image_container: u2,
    image: p2,
    avatar_container: m2,
    final_result: h2,
    balance: A2,
    balance_text: g2,
    stats_container: _2,
    stats_total: f2,
    course: x2,
    logo_container: v2,
    logo_center: y2,
    stats_lines_container: w2,
    stats_line: b2,
    button_container: j2,
    gray: C2,
    bold: P2
  },
  N2 = ({
    src: n
  }) => e.jsx("img", {
    alt: "avatar",
    style: {
      height: "100%",
      width: "100%",
      borderRadius: "50%"
    },
    src: n
  }),
  S2 = ({
    user: n
  }) => {
    let t = "T";
    return n && n.firstName && n.firstName[0] && (t = n.firstName[0]), e.jsx("div", {
      style: {
        height: "100%",
        width: "100%",
        borderRadius: "50%",
        backgroundColor: "#0f141b",
        color: "var(--font-secondary-color)",
        textTransform: "uppercase",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 600,
        fontSize: "14px"
      },
      children: e.jsx("span", {
        children: t
      })
    })
  },
  I2 = ({
    size: n = 26
  }) => {
    const t = l(s => s.user.user);
    return t && t.userPic ? e.jsx("div", {
      style: {
        height: n,
        width: n
      },
      children: e.jsx(N2, {
        src: t.userPic
      })
    }) : e.jsx("div", {
      style: {
        height: n,
        width: n
      },
      children: e.jsx(S2, {
        user: t
      })
    })
  },
  T2 = "/assets/stats_screen_1-BDAoAwDP.gif",
  D2 = [{
    key: "balance_from_referrals",
    title: "Frens"
  }, {
    key: "balance_from_painting",
    title: "Pixel painting"
  }, {
    key: "achiv_reward",
    title: "Achievements"
  }, {
    key: "tournament_painter_reward",
    title: "Telegram Battle"
  }, {
    key: "balance_from_quests",
    title: "Secret words"
  }, {
    key: "beta_reward",
    title: "Beta test"
  }, {
    key: "beta_reports_rewards",
    title: "Reports"
  }, {
    key: "leaders_rewards",
    title: "Leader Bonus"
  }, {
    key: "contribution_reward",
    title: "Contributor Bonus"
  }, {
    key: "item_reward",
    title: "Explosive Bonus"
  }, {
    key: "early_reward",
    title: "Early Bonus"
  }, {
    key: "notcoin_lvl_reward",
    title: "Notcoin fam Bonus"
  }, {
    key: "tanos_reward",
    title: "Pixanos Bonus"
  }, {
    key: "tanos_spent",
    title: "Donation to Pixanos"
  }, {
    key: "personal_reward",
    title: "Personal Bonus"
  }],
  E2 = () => {
    const n = _(),
      t = l(i => i.user.pixelCoins),
      s = l(i => i.user.finalMiningResults);
    let a = s && s.final_balance || 0;
    return a = Math.floor(a / 1e3), u.useEffect(() => {
      s || n(Ie.getFinalMiningResults())
    }, [s]), t < 100 ? null : e.jsxs(W, {
      children: [e.jsxs("div", {
        className: oe.results_container,
        children: [e.jsx("div", {
          className: oe.image_container,
          children: e.jsx("img", {
            alt: "gif",
            src: T2,
            className: oe.image
          })
        }), e.jsx("div", {
          className: oe.avatar_container,
          children: e.jsx(I2, {
            size: 80
          })
        }), e.jsxs("div", {
          className: oe.final_result,
          children: [e.jsxs("div", {
            className: oe.balance,
            children: [je({
              num: a
            }), " $PX"]
          }), e.jsx("div", {
            className: oe.balance_text,
            children: "Your final balance"
          })]
        })]
      }), e.jsxs("div", {
        className: oe.stats_container,
        children: [e.jsxs("div", {
          className: oe.stats_total,
          children: [e.jsxs("div", {
            children: [e.jsxs("div", {
              className: oe.bold,
              children: ["Total Earned ", je({
                num: t * 1e3
              }), " PX"]
            }), e.jsx("div", {
              className: U(oe.gray, oe.course),
              children: "1,000 in-game PX = 1 $PX"
            })]
          }), e.jsx("div", {
            className: oe.logo_container,
            children: e.jsx("div", {
              className: oe.logo_center
            })
          })]
        }), e.jsx("div", {
          className: oe.stats_lines_container,
          children: D2.map(i => {
            const o = i.title;
            let r = s && s[i.key] || 0;
            if (i.key === "tanos_spent" && (r = -r), i.key === "tournament_painter_reward") {
              const c = s && s.tournament_creator_reward || 0;
              r += c
            }
            return !r || (r = Math.floor(r / 1e3), !r) ? null : e.jsxs("div", {
              className: oe.stats_line,
              children: [e.jsx("span", {
                className: oe.gray,
                children: o
              }), e.jsxs("span", {
                className: oe.bold,
                children: [je({
                  num: Math.floor(r)
                }), " $PX"]
              })]
            }, i.key)
          })
        })]
      }), e.jsx("div", {
        className: oe.button_container,
        children: e.jsxs(_e, {
          variant: "disabled2",
          children: ["Withdraw $PX ", e.jsx(B, {
            size: 20,
            style: {
              color: "var(--font-secondary-color)",
              fontWeight: 400,
              transform: "translateY(1px)"
            },
            children: ""
          })]
        })
      })]
    })
  },
  ut = {
    ratings: "/ratings",
    stars: "/stars",
    mining: "/claiming",
    template: "/template",
    history: "/history",
    my_squad: "/my-squad",
    my_profile: "/my-profile"
  },
  B2 = Object.values(ut),
  k2 = () => e.jsx($a, {
    children: e.jsxs(Jr, {
      children: [e.jsx(H, {
        path: "/welcome",
        children: e.jsx(ov, {})
      }), e.jsx(H, {
        path: "/airdrop",
        children: e.jsx(e0, {})
      }), e.jsx(H, {
        path: "/cashout",
        children: e.jsx(E2, {})
      }), e.jsx(H, {
        path: "/invite-frens",
        children: e.jsx(Vv, {})
      }), e.jsx(H, {
        path: ut.stars,
        children: e.jsx(Qd, {})
      }), e.jsx(H, {
        path: "/info",
        children: e.jsx(Vd, {})
      }), e.jsx(H, {
        path: ut.my_squad,
        children: e.jsx(Hj, {})
      }), e.jsx(H, {
        path: ut.my_profile,
        children: e.jsx(lj, {})
      }), e.jsx(H, {
        path: "/donate",
        children: e.jsx(ZS, {})
      }), e.jsx(H, {
        path: "/rules",
        children: e.jsx(Ox, {})
      }), e.jsx(H, {
        path: "/terms",
        children: e.jsx(Yd, {})
      }), e.jsx(H, {
        path: "/nft",
        children: e.jsx(TS, {})
      }), e.jsx(H, {
        path: "/stats",
        children: e.jsx(uy, {})
      }), e.jsx(H, {
        path: "/privacy",
        children: e.jsx(Zd, {})
      }), e.jsx(H, {
        path: "/secrets",
        children: e.jsx(FN, {})
      }), e.jsx(H, {
        path: ut.mining,
        children: e.jsx(Yp, {})
      }), e.jsx(H, {
        path: "/ratings/awards",
        children: e.jsx(Hx, {})
      }), e.jsx(H, {
        path: ut.ratings,
        children: e.jsx($g, {})
      }), e.jsx(H, {
        path: "/daily",
        children: e.jsx(Nw, {})
      }), e.jsx(H, {
        path: "/results",
        children: e.jsx(l2, {})
      }), e.jsx(H, {
        path: ut.history,
        children: e.jsx(Dx, {})
      }), e.jsx(H, {
        path: "/template/create",
        children: e.jsx(Jj, {})
      }), e.jsx(H, {
        path: ut.template,
        children: e.jsx(r1, {})
      }), e.jsx(H, {
        path: "/tournament",
        children: e.jsx(uN, {})
      }), e.jsx(H, {
        path: "/energy-over",
        children: e.jsx(Ty, {})
      }), e.jsx(H, {
        path: "/open-league",
        children: e.jsx(pv, {})
      }), e.jsx(H, {
        path: "/pay-support",
        children: e.jsx(fv, {})
      }), e.jsx(H, {
        path: "/",
        children: e.jsx(tx, {})
      })]
    })
  }),
  R2 = "_layout_j2ers_1",
  U2 = "_loading_container_j2ers_8",
  O2 = "_image_container_j2ers_19",
  M2 = "_image_j2ers_19",
  F2 = "_text_j2ers_28",
  Q2 = "_white_j2ers_42",
  Pt = {
    layout: R2,
    loading_container: U2,
    image_container: O2,
    image: M2,
    text: F2,
    white: Q2
  },
  z2 = "_buttons_container_rjvnl_1",
  q2 = "_group_rjvnl_8",
  H2 = "_left_rjvnl_15",
  L2 = "_middle_rjvnl_21",
  X2 = "_right_rjvnl_29",
  V2 = "_number_rjvnl_36",
  G2 = "_button_rjvnl_1",
  W2 = "_ratings_button_rjvnl_55",
  Y2 = "_stars_button_rjvnl_62",
  J2 = "_shop_button_rjvnl_70",
  K2 = "_burger_button_rjvnl_79",
  Z2 = "_relative_button_rjvnl_89",
  $2 = "_telegram_button_rjvnl_116",
  eI = "_button_img_rjvnl_124",
  tI = "_avatar_img_rjvnl_129",
  nI = "_open_menu_button_rjvnl_134",
  sI = "_open_menu_button_image_rjvnl_144",
  aI = "_my_pixels_amount_rjvnl_149",
  iI = "_header_content_rjvnl_154",
  be = {
    buttons_container: z2,
    group: q2,
    left: H2,
    middle: L2,
    right: X2,
    number: V2,
    button: G2,
    ratings_button: W2,
    stars_button: Y2,
    shop_button: J2,
    burger_button: K2,
    relative_button: Z2,
    telegram_button: $2,
    button_img: eI,
    avatar_img: tI,
    open_menu_button: nI,
    open_menu_button_image: sI,
    my_pixels_amount: aI,
    header_content: iI
  },
  oI = () => l(Me) ? null : e.jsxs("button", {
    className: `${be.button} ${be.telegram_button}`,
    onPointerUp: () => {
      fe("https://t.me/notpixel")
    },
    children: [e.jsx("img", {
      alt: "tg_logo",
      src: Hn
    }), "Go to app for paint"]
  }),
  wi = n => {
    const t = aa(),
      s = $();
    return () => {
      t.pathname === n ? s.push("/") : s.push(n)
    }
  },
  rI = () => {
    const n = wi("/claiming"),
      t = l(a => a.user.pixelCoins);
    return l(Me) ? e.jsxs("button", {
      className: `${be.button}`,
      onPointerUp: n,
      children: [e.jsx(Un, {
        size: 16,
        className: be.button_img
      }), e.jsx("div", {
        style: {
          transform: "translateY(1px)"
        },
        children: e.jsx(Ln, {
          number: Math.max(Number(t.toFixed(0)), 0)
        })
      })]
    }) : null
  },
  cI = "data:image/svg+xml,%3c?xml%20version='1.0'%20?%3e%3csvg%20viewBox='0%200%2032%2032'%20xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:none;}%3c/style%3e%3c/defs%3e%3ctitle/%3e%3cg%20fill='%23e0dd8e'%20data-name='Layer%202'%20id='Layer_2'%3e%3cpath%20d='M24,29H8a3,3,0,0,1-3-3V16a1,1,0,0,1,2,0V26a1,1,0,0,0,1,1H24a1,1,0,0,0,1-1V16a1,1,0,0,1,2,0V26A3,3,0,0,1,24,29Z'/%3e%3cpath%20d='M15,29H10a1,1,0,0,1-1-1V22a3,3,0,0,1,3-3h1a3,3,0,0,1,3,3v6A1,1,0,0,1,15,29Zm-4-2h3V22a1,1,0,0,0-1-1H12a1,1,0,0,0-1,1Z'/%3e%3cpath%20d='M25,17a4,4,0,0,1-4-4,1,1,0,0,1,2,0,2,2,0,0,0,4,0v-.76L24.38,7H7.62L5,12.24V13a2,2,0,0,0,4,0,1,1,0,0,1,2,0,4,4,0,0,1-8,0V12a1,1,0,0,1,.11-.45l3-6A1,1,0,0,1,7,5H25a1,1,0,0,1,.89.55l3,6A1,1,0,0,1,29,12v1A4,4,0,0,1,25,17Z'/%3e%3cpath%20d='M13,17a4,4,0,0,1-4-4,1,1,0,0,1,2,0,2,2,0,0,0,4,0,1,1,0,0,1,2,0A4,4,0,0,1,13,17Z'/%3e%3cpath%20d='M19,17a4,4,0,0,1-4-4,1,1,0,0,1,2,0,2,2,0,0,0,4,0,1,1,0,0,1,2,0A4,4,0,0,1,19,17Z'/%3e%3cpath%20d='M22,22H19a1,1,0,0,1,0-2h3a1,1,0,0,1,0,2Z'/%3e%3c/g%3e%3cg%20id='frame'%3e%3crect%20class='cls-1'%20height='32'%20width='32'/%3e%3c/g%3e%3c/svg%3e",
  lI = () => {
    const n = wi("/stars");
    return l(Me) ? e.jsx("button", {
      className: `${be.shop_button}`,
      onPointerUp: n,
      children: e.jsx("img", {
        alt: "icon",
        src: cI,
        style: {
          width: 24,
          height: 24
        }
      })
    }) : null
  },
  dI = () => {
    const n = wi("/invite-frens");
    return l(Me) ? e.jsx("button", {
      className: `${be.stars_button}`,
      onPointerUp: n,
      children: e.jsx(B, {
        size: 20,
        children: ""
      })
    }) : null
  },
  uI = {
    isShowSideMenu: !1
  },
  Dr = ie({
    name: "layout",
    initialState: uI,
    reducers: {
      setShowSideMenu: (n, t) => {
        n.isShowSideMenu = t.payload
      }
    }
  }),
  {
    setShowSideMenu: St
  } = Dr.actions,
  Er = n => n.layout.isShowSideMenu,
  pI = Dr.reducer,
  mI = () => {
    const n = _(),
      t = l(Er),
      s = () => {
        if (t) {
          n(St(!1));
          return
        }
        n(St(!0))
      };
    return e.jsx("button", {
      className: be.burger_button,
      onPointerUp: s,
      children: e.jsx(B, {
        size: 28,
        children: ""
      })
    })
  },
  Wi = re.memo(() => e.jsxs("div", {
    className: be.buttons_container,
    children: [e.jsxs("div", {
      className: `${be.group} ${be.left}`,
      children: [e.jsx(mI, {}), e.jsx(dI, {})]
    }), e.jsx("div", {
      className: `${be.group} ${be.middle}`,
      children: e.jsx(rI, {})
    }), e.jsxs("div", {
      className: `${be.group} ${be.right}`,
      children: [e.jsx(oI, {}), e.jsx(lI, {})]
    })]
  })),
  Yi = {
    bronze: Ee.bronze,
    silver: Ee.silver,
    gold: Ee.gold,
    platinum: Ee.platinum,
    diamond: Ee.diamond
  },
  Ji = () => {
    const n = l(s => s.user.user),
      t = [Ee.league];
    return n !== null && Yi.hasOwnProperty(n.league) ? (t.push(Yi[n.league]), e.jsx("div", {
      className: t.join(" ")
    })) : null
  },
  hI = () => {
    const n = l(Qn),
      t = aa(),
      s = l(zn),
      a = l(qn);
    l(Ql);
    const i = `calc(16px + ${s.top+a.top}px)`;
    return n ? n && t.pathname === "/" ? e.jsx("div", {
      className: Ee.header_bottom_container,
      style: {
        top: i
      },
      children: e.jsx("div", {
        className: Ee.header_bottom,
        children: e.jsxs("div", {
          className: Ee.header_content,
          children: [e.jsx(Ji, {}), e.jsx(Wi, {})]
        })
      })
    }) : null : e.jsx("div", {
      className: Ee.header,
      children: e.jsxs("div", {
        className: Ee.header_content,
        children: [e.jsx(Ji, {}), e.jsx(Wi, {})]
      })
    })
  };
let Ki = "/";
const AI = () => {
    let n = aa(),
      t = $();
    return u.useEffect(() => {
      const s = () => {
        B2.includes(n.pathname) ? t.push("/") : t.goBack()
      };
      return window.Telegram.WebApp.onEvent("backButtonClicked", s), n.pathname !== Ki && (n.pathname === "/" ? window.Telegram.WebApp.BackButton.hide() : window.Telegram.WebApp.BackButton.show(), Ki = n.pathname), () => {
        window.Telegram.WebApp.offEvent("backButtonClicked", s)
      }
    }, [n, t]), null
  },
  gI = "_layout_ppin4_1",
  _I = {
    layout: gI
  },
  fI = () => {
    const n = u.useRef(),
      t = l(a => a.progress.command),
      s = l(a => a.progress.counter);
    return u.useEffect(() => {
      let a = null,
        i = 0,
        o = null,
        r = 2e3,
        c = 80,
        d = null,
        p = null;
      const A = h => {
        a === null && (a = h);
        const w = (h - a) / r;
        o !== h && (i = Math.min(w * c, c), n.current && (n.current.style.width = `${i}%`)), o = h, i < c && (d = requestAnimationFrame(A))
      };
      return t === Be.start && (d = requestAnimationFrame(A), n.current && (n.current.style.display = "block")), t === Be.finish && (n.current && (n.current.style.width = "100%"), p = setTimeout(() => {
        n.current && (n.current.style.display = "none", n.current.style.width = "0")
      }, 300)), () => {
        d !== null && cancelAnimationFrame(d), p !== null && clearTimeout(p)
      }
    }, [t, s]), Ve.createPortal(e.jsx("div", {
      ref: n,
      className: _I.layout
    }), document.body)
  },
  xI = "_container_1cfz6_1",
  vI = "_header_1cfz6_9",
  yI = "_close_1cfz6_20",
  wI = "_title_1cfz6_32",
  bI = "_body_1cfz6_37",
  jI = "_image_container_1cfz6_51",
  CI = "_image_1cfz6_51",
  PI = "_content_container_1cfz6_62",
  NI = "_description_container_1cfz6_70",
  SI = "_description_item_1cfz6_77",
  II = "_amount_selector_container_1cfz6_84",
  TI = "_amount_selector_button_1cfz6_90",
  DI = "_amount_selector_count_1cfz6_103",
  EI = "_button_container_1cfz6_114",
  BI = "_crypto_button_container_1cfz6_120",
  kI = "_error_1cfz6_134",
  RI = "_not_available_1cfz6_141",
  UI = "_button_1cfz6_114",
  OI = "_star_color_1cfz6_167",
  MI = "_tokens_selector_1cfz6_173",
  FI = "_tokens_title_1cfz6_178",
  QI = "_connect_wallet_text_title_1cfz6_185",
  zI = "_tokens_container_1cfz6_194",
  qI = "_token_item_1cfz6_201",
  HI = "_token_image_container_1cfz6_212",
  LI = "_token_image_1cfz6_212",
  XI = "_sale_box_1cfz6_222",
  VI = "_sale_text_1cfz6_234",
  q = {
    container: xI,
    header: vI,
    close: yI,
    title: wI,
    body: bI,
    image_container: jI,
    image: CI,
    content_container: PI,
    description_container: NI,
    description_item: SI,
    amount_selector_container: II,
    amount_selector_button: TI,
    amount_selector_count: DI,
    button_container: EI,
    crypto_button_container: BI,
    error: kI,
    not_available: RI,
    button: UI,
    star_color: OI,
    tokens_selector: MI,
    tokens_title: FI,
    connect_wallet_text_title: QI,
    tokens_container: zI,
    token_item: qI,
    token_image_container: HI,
    token_image: LI,
    sale_box: XI,
    sale_text: VI
  },
  GI = () => {
    const n = _(),
      t = l(a => a.shop.activeProductCardId),
      s = l(a => a.shop.products[t]);
    return e.jsxs("div", {
      className: q.header,
      onPointerUp: a => {
        a.stopPropagation()
      },
      children: [e.jsx("div", {
        className: q.close,
        onPointerUp: () => {
          n(ai())
        },
        children: e.jsx(B, {
          size: 30,
          children: ""
        })
      }), e.jsx("div", {
        className: q.title,
        children: s.name
      })]
    })
  },
  WI = () => {
    const n = l(a => a.shop.activeProductCardId),
      t = l(a => a.shop.products[n]),
      s = l(a => a.shop.amount);
    return e.jsx("div", {
      className: q.image_container,
      children: e.jsx("img", {
        alt: "img",
        className: q.image,
        src: So(t.id, s)
      })
    })
  },
  YI = () => {
    const n = l(s => s.shop.activeProductCardId),
      t = l(s => s.shop.products[n]);
    return e.jsx("div", {
      className: q.description_container,
      children: e.jsx("span", {
        className: q.description_item,
        children: t.description
      })
    })
  },
  JI = "_layout_1at34_1",
  KI = "_container_1at34_10",
  ZI = "_item_1at34_14",
  Ma = {
    layout: JI,
    container: KI,
    item: ZI
  },
  $I = 8,
  eT = 16,
  tT = 500,
  Br = 800,
  Zi = window.innerWidth,
  $i = 100,
  nT = () => Array.from(Array(100)).map(() => {
    const n = V($I, eT),
      t = `hsl(${V(0,360)} , 70%, 50%)`,
      s = V(tT, Br),
      a = V(-Zi, Zi),
      i = V(-$i, $i);
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
  sT = u.memo(({
    runParticle: n,
    setRunParticle: t
  }) => {
    const [s, a] = u.useState(nT()), [i, o] = u.useState(!1);
    return u.useEffect(() => {
      n && setTimeout(() => {
        o(!0), setTimeout(() => {
          t(!1), o(!1)
        }, Br)
      }, 200)
    }, [n]), e.jsx("div", {
      className: Ma.layout,
      style: {
        visibility: n ? "visible" : "hidden"
      },
      children: e.jsx("div", {
        className: Ma.container,
        children: s.map((r, c) => e.jsx("div", {
          className: Ma.item,
          style: {
            width: r.size,
            height: r.size,
            backgroundColor: r.color,
            transition: n ? `all ${r.speed}ms ease` : "",
            transform: n ? `translate(${r.x}px, ${r.y}px)` : "translate(0px, 0px)",
            opacity: i ? 0 : 1
          }
        }, c))
      })
    })
  }),
  aT = () => {
    const n = _(),
      t = l(ii),
      s = l(i => i.shop.selectedCurrency);
    return l(ot) !== Ae ? null : e.jsxs("div", {
      className: q.tokens_selector,
      children: [e.jsx("div", {
        className: q.tokens_title,
        children: "Select token"
      }), e.jsx("div", {
        children: e.jsx("div", {
          className: q.tokens_container,
          children: t.map(i => i.currency_id === 1 ? null : e.jsxs("div", {
            className: q.token_item,
            style: {
              color: i.currency_id === s ? "#FFFFFF" : void 0
            },
            onPointerUp: () => {
              n(Bn(i.currency_id))
            },
            children: [e.jsx("div", {
              children: e.jsx(B, {
                size: 28,
                children: s === i.currency_id ? "" : ""
              })
            }), e.jsx("div", {
              className: q.token_image_container,
              children: e.jsx("img", {
                alt: "img",
                className: q.token_image,
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
  iT = () => {
    const n = l(s => s.shop.selectedCurrency),
      t = l(s => s.shop.crypto).filter(s => s.currency_id === n)[0];
    return n === 1 ? e.jsx("span", {
      className: q.star_color,
      style: {
        paddingRight: 4,
        marginBottom: -5
      },
      children: e.jsx(Fn, {})
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
  oT = ({
    success: n
  }) => {
    var c;
    const t = l(d => d.shop.activeProductCardId),
      s = l(d => d.shop.amount),
      a = l(d => d.shop.selectedCurrency),
      i = l(d => d.shop.products[t]),
      o = (c = i.prices.filter(d => d.currency_id === a)[0]) == null ? void 0 : c.price,
      r = !i.isOnePiece;
    if (n) return e.jsx(re.Fragment, {
      children: "Success, wait 1-5 min!"
    });
    if (!o) return e.jsx(re.Fragment, {
      children: "Not available"
    });
    if (o) return e.jsxs(re.Fragment, {
      children: ["Buy for ", e.jsx(iT, {}), Math.round(o * (r ? s : 1) * 100) / 100, e.jsx("div", {
        className: q.sale_box,
        children: e.jsx("span", {
          className: q.sale_text,
          children: "-30% "
        })
      })]
    })
  },
  rT = ({
    setError: n,
    setRunParticle: t
  }) => {
    var pe;
    const s = _(),
      a = l(M => M.shop.activeProductCardId),
      i = l(M => M.shop.selectedCurrency),
      o = l(M => M.shop.amount),
      [r, c] = u.useState(m.idle),
      [d, p] = u.useState(!1),
      [A, h] = ln(),
      g = l(M => M.color.active),
      x = (pe = l(M => M.shop.products[a]).prices.filter(M => M.currency_id === i)[0]) == null ? void 0 : pe.price,
      v = cn();
    if (l(M => M.shop.selectedCurrency) === 1 || v === "") return null;
    const P = async M => {
      const ze = we.beginCell().storeUint(0, 32).storeStringTail(M.txMemCode).endCell(),
        Ot = {
          validUntil: Math.floor(Date.now() / 1e3) + 600,
          messages: [{
            address: Qa,
            amount: String(we.toNano(M.strAmount)),
            payload: ze.toBoc().toString("base64")
          }]
        };
      await A.sendTransaction(Ot), t(!0), p(!0), c(m.fulfilled)
    }, ge = async M => {
      const ze = new fa.HttpProvider("https://toncenter.com/api/v2/jsonRPC"),
        Mr = await new fa.token.jetton.JettonMinter(ze, {
          address: Ct[i]
        }).getJettonWalletAddress(new fa.utils.Address(v)),
        Fr = we.Address.parse(v),
        Qr = we.Address.parse(Qa),
        zr = we.beginCell().storeUint(0, 32).storeStringTail(M.txMemCode).endCell();
      let _a = we.toNano(M.strAmount);
      Number(i) === 4 && (_a = _a / 1000n);
      const qr = we.beginCell().storeUint(260734629, 32).storeUint(0, 64).storeCoins(_a).storeAddress(Qr).storeAddress(Fr).storeBit(0).storeCoins(we.toNano("0.01")).storeBit(1).storeRef(zr).endCell(),
        Hr = {
          validUntil: Math.floor(Date.now() / 1e3) + 600,
          messages: [{
            address: Mr.toString(!0, !0, !0),
            amount: "101000000",
            payload: qr.toBoc().toString("base64")
          }]
        };
      await A.sendTransaction(Hr), t(!0), p(!0), c(m.fulfilled)
    };
    return x ? e.jsx("button", {
      className: q.button,
      onPointerUp: async M => {
        if (M.stopPropagation(), n(!1), d) {
          s(ai()), c(m.idle);
          return
        }
        if (r !== m.pending) {
          c(m.pending);
          try {
            const ze = await O.startShopTransaction({
              buyerWallet: v,
              currencyId: i,
              quantity: o,
              goodId: a,
              activeColor: g
            });
            if (i === 2) await P(ze.data);
            else if (i === 3 || i === 4 || i === 5 || i === 6 || i === 7 || i === 8 || i === 9) await ge(ze.data);
            else throw new Error("Wrong currency")
          } catch (ze) {
            console.warn(ze), n("Something went wrong"), c(m.rejected)
          }
        }
      },
      children: e.jsx(oT, {
        success: d
      })
    }) : e.jsx("div", {
      className: q.not_available,
      children: "Not available"
    })
  },
  cT = () => {
    const [n, t] = ln(), s = cn(), a = l(i => i.shop.selectedCurrency);
    return s !== "" || a === 1 ? null : e.jsx("button", {
      className: q.button,
      onPointerUp: async i => {
        i.stopPropagation(), i.preventDefault(), setTimeout(() => {
          n.openModal()
        }, 20)
      },
      children: "Connect TON wallet"
    })
  },
  lT = ({
    success: n
  }) => {
    const t = l(o => o.shop.activeProductCardId),
      s = l(o => o.shop.amount),
      a = l(o => o.shop.products[t]),
      i = !a.isOnePiece;
    return n ? e.jsx(re.Fragment, {
      children: "You bought it!"
    }) : e.jsxs(re.Fragment, {
      children: ["Buy for", e.jsx(B, {
        size: 18,
        className: q.star_color,
        children: ""
      }), a.prices[0].price * (i ? s : 1)]
    })
  },
  dT = ({
    setError: n,
    setRunParticle: t
  }) => {
    const s = _(),
      a = l(g => g.shop.activeProductCardId),
      i = l(g => g.shop.products[a]),
      o = l(g => g.shop.amount),
      [r, c] = u.useState(m.idle),
      [d, p] = u.useState(!1),
      A = l(g => g.shop.selectedCurrency),
      h = l(g => g.color.active);
    return A !== 1 ? null : e.jsx("div", {
      className: q.button_container,
      onPointerUp: async g => {
        var x;
        if (g.stopPropagation(), d) {
          s(ai()), c(m.idle);
          return
        }
        if (r === m.pending) return;
        c(m.pending);
        const w = i.isOnePiece ? 1 : o;
        try {
          const v = await O.buy({
            type: Number(a),
            qty: w,
            pixanosColor: h
          });
          v.status === 200 && ((x = v == null ? void 0 : v.data) == null ? void 0 : x.ok) === !0 && window.Telegram.WebApp.openInvoice(v.data.result, y => {
            var ge, pe;
            const P = Number(a);
            if (y === "paid") {
              if (P >= 9 && P <= 11) {
                const M = {
                  9: 1,
                  10: 2,
                  11: 3
                };
                s(Yn({
                  product: 1,
                  amount: M[P]
                })), s(Yn({
                  product: 2,
                  amount: M[P]
                })), s(Yn({
                  product: 6,
                  amount: M[P]
                }))
              } else s(Yn({
                product: a,
                amount: w
              }));
              p(!0), (pe = (ge = window.Telegram.WebApp) == null ? void 0 : ge.HapticFeedback) == null || pe.notificationOccurred("error"), t(!0)
            } else n("Error, try again.")
          })
        } catch {
          n("Error, try again."), c(m.rejected)
        }
        c(m.fulfilled)
      },
      children: e.jsx("button", {
        className: q.button,
        children: e.jsx(lT, {
          success: d
        })
      })
    })
  },
  uT = () => (l(ot) === Ae, null),
  pT = () => {
    const n = l(t => t.shop.activeProductCardId);
    return console.log(n), n !== 13 ? null : e.jsxs("div", {
      style: {
        marginBottom: 15
      },
      children: [e.jsx("div", {
        className: q.tokens_title,
        style: {
          marginBottom: -10
        },
        children: "Select color"
      }), e.jsx(mr, {
        colors: Ue
      })]
    })
  },
  mT = () => {
    const [n, t] = u.useState(null), [s, a] = u.useState(!1);
    return e.jsxs("div", {
      className: q.crypto_button_container,
      children: [e.jsx(pT, {}), e.jsx(aT, {}), e.jsx(uT, {}), e.jsx(sT, {
        runParticle: s,
        setRunParticle: a
      }), n && e.jsx("div", {
        className: q.error,
        children: " Failure. Something went wrong."
      }), e.jsx(rT, {
        setError: t,
        setRunParticle: a
      }), e.jsx(dT, {
        setError: t,
        setRunParticle: a
      }), e.jsx(cT, {
        setError: t
      })]
    })
  },
  hT = () => {
    _();
    const n = l(i => i.shop.activeProductCardId),
      t = l(i => i.shop.amount);
    return l(i => i.shop.products[n]).isOnePiece ? null : e.jsx("div", {
      className: q.amount_selector_container,
      children: e.jsxs("div", {
        className: q.amount_selector_count,
        children: ["× ", t]
      })
    })
  },
  AT = "_container_1rmx4_1",
  gT = "_max_value_1rmx4_9",
  eo = {
    container: AT,
    max_value: gT
  },
  Wt = n => n < 100 ? {
    max: 100,
    step: 1,
    min: 50
  } : n < 500 ? {
    max: 500,
    step: 5,
    min: 100
  } : n < 1e3 ? {
    max: 1e3,
    step: 10,
    min: 500
  } : {
    max: 5e3,
    step: 50,
    min: 1e3
  };

function to(n, t) {
  return Math.round(n / t) * t
}
const _T = () => {
    const n = _(),
      t = l(y => y.shop.activeProductCardId),
      s = l(y => y.shop.amount),
      i = l(y => y.shop.products[t]).isOnePiece,
      [o, r] = u.useState([s]),
      [c, d] = u.useState(Wt(s).max),
      [p, A] = u.useState(Wt(s).min),
      [h, g] = u.useState(Wt(s).step),
      w = c === 5e3 ? "5000" : `${c}+`,
      x = y => {
        const P = y[0];
        n(oa(to(P, h))), r([to(P, h)])
      },
      v = y => {
        const P = y[0];
        P === c && (d(Wt(P).max), A(Wt(P).min), g(Wt(P).step))
      };
    return i ? null : e.jsxs("div", {
      className: eo.container,
      children: [e.jsx(mt.Range, {
        values: o,
        step: h,
        min: p,
        max: c,
        rtl: !1,
        onChange: x,
        onFinalChange: v,
        renderTrack: ({
          props: y,
          children: P
        }) => e.jsx("div", {
          onMouseDown: y.onMouseDown,
          onTouchStart: y.onTouchStart,
          style: {
            ...y.style,
            height: "36px",
            display: "flex",
            width: "100%"
          },
          children: e.jsx("div", {
            ref: y.ref,
            style: {
              height: "4px",
              borderRadius: "2px",
              width: "100%",
              background: mt.getTrackBackground({
                values: o,
                colors: ["var(--btn-primary-bg-color)", "var(--btn-header-bg-color)"],
                min: p,
                max: c,
                rtl: !1
              }),
              alignSelf: "center"
            },
            children: P
          })
        }),
        renderThumb: ({
          props: y,
          isDragged: P
        }) => u.createElement("div", {
          ...y,
          key: y.key,
          style: {
            ...y.style,
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
        className: eo.max_value,
        children: [" ", w]
      })]
    })
  },
  fT = () => e.jsxs("div", {
    className: q.body,
    onPointerUp: n => {
      n.stopPropagation()
    },
    children: [e.jsx(WI, {}), e.jsxs("div", {
      className: q.content_container,
      children: [e.jsx(YI, {}), e.jsx(hT, {}), e.jsx(_T, {})]
    }), e.jsx(mT, {})]
  }),
  xT = () => {
    const n = l(t => t.shop.show);
    return Ve.createPortal(e.jsx(vt, {
      show: n,
      children: e.jsxs("div", {
        className: q.container,
        children: [e.jsx(GI, {}), e.jsx(fT, {})]
      })
    }), document.body)
  },
  vT = "_layout_9sf1k_1",
  yT = "_container_9sf1k_13",
  wT = "_header_9sf1k_20",
  bT = "_title_9sf1k_30",
  jT = "_body_9sf1k_35",
  CT = "_image_container_9sf1k_47",
  PT = "_image_9sf1k_47",
  NT = "_shake_9sf1k_1",
  ST = "_description_container_9sf1k_60",
  IT = "_buyer_info_9sf1k_70",
  TT = "_avatar_9sf1k_78",
  DT = "_name_9sf1k_84",
  ET = "_squad_info_9sf1k_88",
  BT = "_squad_avatar_9sf1k_94",
  kT = "_text_container_9sf1k_100",
  RT = "_text_9sf1k_100",
  UT = "_thanos_snap_container_9sf1k_110",
  OT = "_thanos_snap_text_9sf1k_119",
  MT = "_button_container_9sf1k_126",
  FT = "_button_9sf1k_126",
  me = {
    layout: vT,
    container: yT,
    header: wT,
    title: bT,
    body: jT,
    image_container: CT,
    image: PT,
    shake: NT,
    description_container: ST,
    buyer_info: IT,
    avatar: TT,
    name: DT,
    squad_info: ET,
    squad_avatar: BT,
    text_container: kT,
    text: RT,
    thanos_snap_container: UT,
    thanos_snap_text: OT,
    button_container: MT,
    button: FT
  },
  QT = `precision highp float;

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
  zT = `precision mediump float;

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
  kr = 7200,
  qT = 1;
let j = null,
  Pe = null,
  ts = -1,
  Hs = 0;
async function HT(n) {
  if (j = LT().getContext("webgl"), !j) {
    console.log("Your browser doesn't support WebGL :(");
    return
  }
  await XT(), GT(n)
}

function LT() {
  const n = document.createElement("canvas");
  return n.id = "canvasSnap", n.width = window.innerWidth, n.height = window.innerHeight, n.style.width = `${window.innerWidth}px`, n.style.height = `${window.innerHeight}px`, n.style.position = "fixed", n.style.top = "50%", n.style.left = "50%", n.style.zIndex = "980", n.style.transform = "translate(-50%, -50%)", n.style.opacity = "0", n.style.transition = "2s ease opacity", document.body.appendChild(n), window.getComputedStyle(n).opacity, n.style.opacity = "1", n
}
async function XT() {
  j.enable(j.BLEND), j.blendFunc(j.SRC_ALPHA, j.ONE_MINUS_SRC_ALPHA), j.clearColor(0, 0, 0, 0), j.viewport(0, 0, j.canvas.width, j.canvas.height), Pe = await VT(j), j.useProgram(Pe)
}
async function VT(n, t, s) {
  const a = QT,
    i = zT,
    o = no(n, a, n.VERTEX_SHADER),
    r = no(n, i, n.FRAGMENT_SHADER),
    c = n.createProgram();
  return n.attachShader(c, o), n.attachShader(c, r), n.linkProgram(c), n.getProgramParameter(c, n.LINK_STATUS) || console.error("Shader program initialization failure:", n.getProgramInfoLog(c)), c
}

function no(n, t, s) {
  const a = n.createShader(s);
  return n.shaderSource(a, t), n.compileShader(a), n.getShaderParameter(a, n.COMPILE_STATUS) ? a : (console.error("Shader compilation failure:", n.getShaderInfoLog(a)), n.deleteShader(a), null)
}
async function GT(n) {
  WT(), KT(n), Rr(), document.getElementById("canvasHolder").style.opacity = "0", setTimeout(() => {
    const t = document.getElementById("canvasHolder");
    t.style.transition = "6s ease-in opacity", t.style.opacity = "1"
  }, 20), setTimeout(() => {
    document.getElementById("canvasHolder").style.transition = ""
  }, 7e3)
}

function WT(n) {
  const t = YT();
  var s = j.createTexture();
  j.bindTexture(j.TEXTURE_2D, s), j.texParameteri(j.TEXTURE_2D, j.TEXTURE_WRAP_S, j.CLAMP_TO_EDGE), j.texParameteri(j.TEXTURE_2D, j.TEXTURE_WRAP_T, j.CLAMP_TO_EDGE), j.texParameteri(j.TEXTURE_2D, j.TEXTURE_MIN_FILTER, j.NEAREST), j.texParameteri(j.TEXTURE_2D, j.TEXTURE_MAG_FILTER, j.NEAREST), j.texImage2D(j.TEXTURE_2D, 0, j.RGBA, j.RGBA, j.UNSIGNED_BYTE, t);
  const a = j.getUniformLocation(Pe, "u_Texture");
  j.uniform1i(a, 0)
}

function YT() {
  const n = new ImageData(T.width, T.height);
  return n.data.set(C.mainImage.imageData.slice(0)), n
}

function JT(n) {
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

function KT(n) {
  const {
    viewportWidth: t,
    viewportHeight: s,
    textureWidth: a,
    textureHeight: i,
    textureLeft: o,
    textureTop: r,
    min: c
  } = JT(n);
  Hs = c * c, et(j, Pe, "u_AnimationDuration", kr), et(j, Pe, "u_ParticleSize", qT), et(j, Pe, "u_ViewportWidth", t), et(j, Pe, "u_ViewportHeight", s), et(j, Pe, "u_TextureWidth", a), et(j, Pe, "u_TextureHeight", i), et(j, Pe, "u_TextureLeft", o), et(j, Pe, "u_TextureTop", r);
  const d = new Array(Hs);
  for (let h = 0; h < Hs; h++) d[h] = h;
  const p = j.createBuffer();
  j.bindBuffer(j.ARRAY_BUFFER, p), j.bufferData(j.ARRAY_BUFFER, new Float32Array(d), j.STATIC_DRAW);
  const A = j.getAttribLocation(Pe, "a_ParticleIndex");
  j.enableVertexAttribArray(A), j.vertexAttribPointer(A, 1, j.FLOAT, !1, 0, 0)
}

function Rr() {
  requestAnimationFrame(ZT)
}

function ZT(n) {
  j.clear(j.COLOR_BUFFER_BIT), ts == -1 && (ts = n);
  const s = n - ts;
  if (s > kr) {
    ts = -1, document.getElementById("canvasSnap").remove();
    return
  }
  et(j, Pe, "u_ElapsedTime", s), j.drawArrays(j.POINTS, 0, Hs), Rr()
}

function et(n, t, s, a) {
  const i = n.getUniformLocation(t, s);
  n.uniform1f(i, a)
}
const $T = () => {
    const n = $(),
      t = _(),
      s = l(r => r.main.showPixanosEvent),
      a = l(r => r.main.pixanosEventData),
      i = l(Qn);
    if (u.useEffect(() => {
        s && a && (async () => {
          var c, d;
          C.viewport.viewport.fit(), C.viewport.viewport.moveCenter(C.viewport.viewport.worldWidth / 2, C.viewport.viewport.worldHeight / 2), t(Ri(!0)), setTimeout(() => {
            t(Ri(!1)), t(Ig())
          }, 7e3);
          try {
            await HT(i ? 0 : Pc)
          } catch (p) {
            document.getElementById("canvasHolder").style.opacity = "1", console.error(p, "cannot run pixanos")
          }
          n.push("/"), C.mainImage.pixanosRepaint(a.info.seed, T.width, a.info.percentage, a.info.color), (d = (c = window.Telegram.WebApp) == null ? void 0 : c.HapticFeedback) == null || d.notificationOccurred("error")
        })()
      }, [s, a]), !a) return null;
    const o = a.user.squad;
    return e.jsx(vt, {
      show: s,
      backgroundColor: "rgba(0, 0, 0, 0.0)",
      children: e.jsxs("div", {
        className: me.container,
        children: [e.jsx("div", {
          className: me.header,
          children: e.jsx("span", {
            className: me.title,
            children: "I AM INEVITABLE"
          })
        }), e.jsxs("div", {
          className: me.body,
          children: [e.jsx("div", {
            className: me.image_container,
            children: e.jsx("img", {
              alt: "img",
              className: me.image,
              src: un
            })
          }), e.jsxs("div", {
            className: me.description_container,
            children: [e.jsxs("div", {
              className: me.buyer_info,
              children: [e.jsx("img", {
                alt: "avatar",
                src: a.user.userPic && a.user.userPic !== "" ? a.user.userPic : Xe,
                className: me.avatar
              }), " ", e.jsx("span", {
                className: me.name,
                children: a.user.firstName
              }), o && e.jsx("span", {
                children: "from"
              }), o && e.jsxs("div", {
                className: me.squad_info,
                children: [e.jsx("img", {
                  alt: "avatar",
                  src: o.logo && o.logo !== "" ? o.logo : Nt,
                  className: me.squad_avatar
                }), e.jsx(Rt, {
                  address: `${it}?startapp=${btoa(`id=${o.squadId}`)}`,
                  display: o.name,
                  limit: 18
                })]
              }), o && e.jsx("span", {
                children: "squad"
              }), e.jsxs("div", {
                children: [e.jsx("span", {
                  children: "got"
                }), e.jsx("div", {
                  className: me.thanos_snap_container,
                  children: e.jsx("span", {
                    className: me.thanos_snap_text,
                    children: "Pixanos' Snap"
                  })
                })]
              })]
            }), e.jsx("div", {
              className: me.text_container,
              children: e.jsxs("span", {
                className: me.text,
                children: ["Now he takes every second pixel. ", e.jsx("br", {}), " Legendary!"]
              })
            })]
          })]
        })]
      })
    })
  },
  eD = "_container_11ui8_1",
  tD = "_header_11ui8_13",
  nD = "_close_container_11ui8_23",
  sD = "_close_11ui8_23",
  aD = "_title_11ui8_48",
  iD = "_frens_count_11ui8_53",
  oD = "_body_11ui8_58",
  rD = "_content_11ui8_68",
  cD = "_image_container_11ui8_75",
  lD = "_image_11ui8_75",
  dD = "_image_container_charges_11ui8_84",
  uD = "_image_charges_11ui8_89",
  pD = "_description_container_11ui8_94",
  mD = "_bold_11ui8_102",
  hD = "_gray_11ui8_107",
  AD = "_center_11ui8_111",
  gD = "_benefits_container_11ui8_115",
  _D = "_benefits_item_11ui8_123",
  fD = "_benefits_icon_container_11ui8_128",
  xD = "_icon_invite_11ui8_132",
  vD = "_footer_11ui8_136",
  yD = "_button_11ui8_141",
  ee = {
    container: eD,
    header: tD,
    close_container: nD,
    close: sD,
    title: aD,
    frens_count: iD,
    body: oD,
    content: rD,
    image_container: cD,
    image: lD,
    image_container_charges: dD,
    image_charges: uD,
    description_container: pD,
    bold: mD,
    gray: hD,
    center: AD,
    benefits_container: gD,
    benefits_item: _D,
    benefits_icon_container: fD,
    icon_invite: xD,
    footer: vD,
    button: yD
  },
  wD = () => {
    var o, r;
    const n = l(c => c.user.user),
      t = _(),
      s = l(c => c.main.showNoChargesPopup),
      a = l(c => c.main.settings);
    let i = `${Et}?startapp=f${((r=(o=window.Telegram.WebApp.initDataUnsafe)==null?void 0:o.user)==null?void 0:r.id)||""}`;
    return n && n.squad && n.squad.id !== null && (i += `_s${n.squad.id}`), e.jsx(vt, {
      show: s,
      onPointerUp: () => t(Ba()),
      children: e.jsxs("div", {
        className: ee.container,
        onPointerUp: c => {
          c.stopPropagation()
        },
        children: [e.jsxs("div", {
          className: ee.header,
          children: [e.jsx("div", {
            className: ee.title,
            children: "Oops!"
          }), e.jsx("div", {
            className: ee.close_container,
            onPointerUp: () => {
              t(Ba())
            },
            children: e.jsx("div", {
              className: ee.close,
              children: e.jsx(B, {
                size: 30,
                children: ""
              })
            })
          })]
        }), e.jsx("div", {
          className: ee.body,
          children: e.jsxs("div", {
            className: ee.content,
            children: [e.jsx("div", {
              className: ee.image_container_charges,
              children: e.jsx("img", {
                alt: "image",
                className: ee.image_charges,
                src: _r
              })
            }), e.jsxs("div", {
              className: ee.description_container,
              children: [e.jsx("span", {
                className: ee.bold,
                children: "The energy is over!"
              }), e.jsxs("span", {
                className: ee.center,
                children: ["Wait for the energy to recover.", e.jsx("br", {}), "Invite frens and get a bonus:"]
              })]
            }), e.jsxs("div", {
              className: ee.benefits_container,
              children: [e.jsx("div", {}), e.jsxs("div", {
                className: ee.benefits_item,
                children: ["No Premium:   ", " ", e.jsx("div", {
                  className: ee.benefits_icon_container,
                  children: e.jsx(Un, {
                    size: 16,
                    className: ee.icon_invite
                  })
                }), a.InitialCoins]
              }), e.jsx("div", {}), " ", e.jsx("div", {}), e.jsxs("div", {
                className: ee.benefits_item,
                children: ["Premium:   ", " ", e.jsx("div", {
                  className: ee.benefits_icon_container,
                  children: e.jsx(Un, {
                    size: 16,
                    className: ee.icon_invite
                  })
                }), " ", a.RefRewardCoinsPremium]
              }), e.jsx("div", {})]
            })]
          })
        }), e.jsxs("div", {
          className: ee.footer,
          children: [e.jsx(mn, {
            url: i
          }), e.jsx("button", {
            className: ee.button,
            onPointerUp: c => {
              c.stopPropagation(), window.Telegram.WebApp.openLink(`https://t.me/share/url?url=${i}`), t(Ba())
            },
            children: "Share"
          })]
        })]
      })
    })
  },
  bD = () => aa().pathname === "/" ? null : e.jsx("div", {
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
  jD = "_layout_67kk9_1",
  CD = "_item_67kk9_19",
  PD = "_image_67kk9_38",
  Ur = {
    layout: jD,
    item: CD,
    image: PD
  },
  ND = ({
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
    return u.useEffect(() => {
      const i = setTimeout(() => {
        t(Ti(n.id))
      }, 3e3);
      return () => {
        clearTimeout(i)
      }
    }, []), e.jsxs(nn.div, {
      variants: s,
      initial: "hidden",
      animate: "enter",
      exit: "exit",
      transition: {
        duration: .3
      },
      className: Ur.item,
      onPointerUp: () => {
        t(Ti(n.id))
      },
      children: [e.jsx(B, {
        size: 20,
        children: a
      }), n.text]
    })
  },
  SD = () => {
    const n = l(t => t.toast.items);
    return Ve.createPortal(e.jsx("div", {
      className: Ur.layout,
      children: e.jsx($a, {
        children: n.map(t => e.jsx(ND, {
          item: t
        }, t.id))
      })
    }), document.body)
  },
  ID = ({
    isPopupContent: n = !0
  }) => {
    const t = n ? "Squad" : "My Squad",
      s = yt(n);
    return e.jsxs("div", {
      className: U(E.container, !n && E.page),
      children: [n && e.jsx(vr, {}), e.jsx("div", {
        children: e.jsx("span", {
          className: E.title,
          children: t
        })
      }), e.jsx(yr, {
        ...s
      }), e.jsx(wr, {
        ...s
      }), e.jsx(br, {
        ...s
      }), e.jsx(jr, {
        ...s
      }), e.jsx(Cr, {
        ...s
      })]
    })
  },
  TD = () => {
    const n = _(),
      {
        item: t
      } = yt(),
      s = !0;
    return e.jsx(vt, {
      show: t.dataSource !== null,
      onPointerUp: a => {
        a.stopPropagation(), n(lr())
      },
      children: e.jsxs("div", {
        className: xr.layout,
        onPointerUp: a => {
          a.stopPropagation()
        },
        children: [t.dataSource === Re.userFromPixelInfo && e.jsx(Wa, {
          isPopupContent: s
        }), t.dataSource === Re.userFromRating && e.jsx(Wa, {
          isPopupContent: s
        }), t.dataSource === Re.squadFromData && e.jsx(ID, {})]
      })
    })
  },
  DD = "_overlay_1mqco_1",
  ED = "_top_container_1mqco_10",
  BD = "_bottom_container_1mqco_15",
  kD = "_side_menu_1mqco_20",
  RD = "_menu_safe_area_inset_1mqco_36",
  UD = "_menu_header_1mqco_40",
  OD = "_close_button_1mqco_53",
  MD = "_menu_list_1mqco_58",
  FD = "_icon_1mqco_79",
  QD = "_icon_not_pixel_1mqco_87",
  zD = "_gold_pixel_1mqco_97",
  qD = "_menu_list_li_1mqco_103",
  HD = "_menu_list_text_1mqco_109",
  LD = "_menu_list_new_item_1mqco_113",
  XD = "_button_wrapper_1mqco_136",
  VD = "_button_content_1mqco_148",
  GD = "_footer_1mqco_155",
  WD = "_avatar_1mqco_161",
  YD = "_ratings_image_container_1mqco_168",
  JD = "_ratings_image_1mqco_168",
  se = {
    overlay: DD,
    top_container: ED,
    bottom_container: BD,
    side_menu: kD,
    menu_safe_area_inset: RD,
    menu_header: UD,
    close_button: OD,
    menu_list: MD,
    icon: FD,
    icon_not_pixel: QD,
    gold_pixel: zD,
    menu_list_li: qD,
    menu_list_text: HD,
    menu_list_new_item: LD,
    button_wrapper: XD,
    button_content: VD,
    footer: GD,
    avatar: WD,
    ratings_image_container: YD,
    ratings_image: JD
  },
  so = [.215, .61, .355, 1],
  KD = {
    hidden: {
      x: "-100%",
      transition: {
        type: "tween",
        duration: .25,
        ease: so
      }
    },
    visible: {
      x: 0,
      transition: {
        type: "tween",
        duration: .25,
        ease: so
      }
    }
  },
  ZD = "/assets/gold_pixel-CRD2C_ap.gif",
  $D = "_layout_4kkfr_1",
  eE = "_line_4kkfr_14",
  tE = "_button_4kkfr_19",
  Yt = {
    layout: $D,
    line: eE,
    button: tE
  },
  nE = ({
    className: n = void 0
  }) => {
    const t = _(),
      s = $();
    return e.jsx("div", {
      className: U(Yt.layout, n),
      children: e.jsxs("div", {
        className: Yt.line,
        children: [e.jsx("div", {
          className: Yt.button,
          onPointerUp: () => {
            t(St(!1)), s.push("/rules")
          },
          children: "Rules"
        }), e.jsx("div", {
          className: Yt.button,
          onPointerUp: () => {
            fe(ei)
          },
          children: "Support"
        }), e.jsx("div", {
          className: Yt.button,
          onPointerUp: () => {
            t(St(!1)), s.push("/terms")
          },
          children: "Terms"
        }), e.jsx("div", {
          className: Yt.button,
          onPointerUp: () => {
            t(St(!1)), s.push("/privacy")
          },
          children: "Privacy"
        })]
      })
    })
  },
  sE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAABtQTFRFR3BM////////////////////////////////Fv0dDgAAAAh0Uk5TABU6XISq0+/2d3cmAAABKElEQVR42u3Z24rDMAxFUV1s6fz/Fw+FlA4lpGOj2Ew566kPKWxEQ2NFiIiIiIiIiIiI6L/RFrgQTeVWGvggbikwPwQ+Cj+YVLHAlChKcExzKaCJaak1A9g7gg7M61UBfSDmeS0DGMAABlQFNACI8YAAgPYNAY6H8YCyPyPDg40FvL5WAA9tNKAdg6u6DVLHAjSPjwX8NYKGa+9XuhQ+k41NAMfYSjRMalIkMCWkiiUmpMneAltwJlx5RlTz1hJ/kK25qdxCvQcuRfetB/RQuZ1l1Q+/viBNZGdBmiyiHSe6yjqeeJMua3ngl3BZT70nAOTsrV95ZmDADvbcW8bEUrJ+eRmLE7xgI1e9vExdO4C9I+g40WUdnNoewPdJREREREREREREU34Aqms7WGCxI2EAAAAASUVORK5CYII=",
  aE = () => {
    const n = l(zn),
      t = l(qn);
    return e.jsx("div", {
      style: {
        width: "100%",
        height: n.bottom + t.bottom
      }
    })
  },
  iE = "_layout_1kunc_1",
  oE = "_animation_1kunc_11",
  rE = "_green_1kunc_16",
  cE = "_red_1kunc_20",
  ao = {
    layout: iE,
    animation: oE,
    green: rE,
    red: cE
  },
  lE = ({
    values: n
  }) => {
    const t = _(),
      s = l(a => a.canvas.animations);
    return e.jsxs("div", {
      className: ao.layout,
      onPointerUp: () => {
        t(s ? Um() : Rm())
      },
      children: [e.jsxs("div", {
        children: [e.jsx("span", {
          className: ao.animation,
          children: "Animation:"
        }), " ", s ? e.jsx("span", {
          children: "on"
        }) : e.jsx("span", {
          children: "off"
        })]
      }), e.jsxs("span", {
        style: {
          color: "var(--font-secondary-color)"
        },
        children: ["Fps: ", n]
      })]
    })
  },
  dE = "_layout_eiymv_1",
  uE = "_container_eiymv_7",
  io = {
    layout: dE,
    container: uE
  },
  pE = ({
    values: n,
    setValues: t
  }) => e.jsx("div", {
    className: io.layout,
    children: e.jsx("div", {
      className: io.container,
      children: e.jsx(mt.Range, {
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
            width: "calc(100% - 11px)",
            borderRadius: "2px",
            backgroundColor: "var(--btn-dark-bg-color)"
          },
          children: a
        }),
        renderThumb: ({
          props: s
        }) => u.createElement("div", {
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
      })
    })
  }),
  mE = () => localStorage.getItem("canvasFps") ? [Number(localStorage.getItem("canvasFps"))] : [60],
  hE = () => {
    const [n, t] = re.useState(mE());
    return u.useEffect(() => {
      localStorage.setItem("canvasFps", String(n[0])), C.ticker.setFps(n[0])
    }, [n]), e.jsxs(e.Fragment, {
      children: [e.jsx(lE, {
        values: n
      }), e.jsx(pE, {
        values: n,
        setValues: t
      })]
    })
  },
  AE = "_layout_pdc5v_1",
  gE = "_container_pdc5v_7",
  _E = "_title_container_pdc5v_13",
  fE = "_title_pdc5v_13",
  xE = "_change_pdc5v_23",
  vE = "_wallet_container_pdc5v_28",
  yE = "_ton_icon_pdc5v_35",
  wE = "_verificated_wallet_pdc5v_40",
  dt = {
    layout: AE,
    container: gE,
    title_container: _E,
    title: fE,
    change: xE,
    wallet_container: vE,
    ton_icon: yE,
    verificated_wallet: wE
  },
  bE = () => {
    const {
      handleConnect: n,
      formattedVerificatedWalletUQ: t
    } = ci(), s = t && t !== "", a = l(i => i.mining.tasks.checkCaptcha);
    return e.jsx("div", {
      className: dt.layout,
      children: e.jsxs("div", {
        className: dt.container,
        children: [e.jsxs("div", {
          className: dt.title_container,
          children: [e.jsx("div", {
            className: dt.title,
            children: "Airdrop wallet"
          }), !a && e.jsx("div", {
            className: dt.change,
            onPointerUp: n,
            children: s ? "Change" : "Add"
          })]
        }), s && e.jsxs("div", {
          className: dt.wallet_container,
          children: [e.jsx("img", {
            alt: "ton",
            src: Tn,
            className: dt.ton_icon
          }), e.jsx("div", {
            className: dt.verificated_wallet,
            children: t
          })]
        })]
      })
    })
  },
  jE = () => {
    const n = $(),
      t = _(),
      s = l(Er),
      a = l(Qn),
      i = () => {
        t(St(!1))
      },
      o = d => {
        t(St(!1)), n.push(d)
      },
      r = () => {
        const d = `${window.location.origin}/stars?initData=${btoa(window.Telegram.WebApp.initData)}`;
        ia(d)
      },
      c = l(d => d.user.verificatedWalletStatus);
    return u.useEffect(() => {
      s && c === m.idle && t(Ie.getVerificatedWallet())
    }, [s]), e.jsx(e.Fragment, {
      children: e.jsx($a, {
        children: s && e.jsxs(e.Fragment, {
          children: [e.jsx(nn.div, {
            className: se.overlay,
            onPointerUp: i,
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
          }), e.jsxs(nn.nav, {
            className: se.side_menu,
            initial: "hidden",
            animate: "visible",
            exit: "hidden",
            variants: KD,
            children: [e.jsxs("div", {
              className: se.top_container,
              children: [e.jsx("div", {
                className: se.menu_safe_area_inset
              }), e.jsxs("ul", {
                className: se.menu_list,
                children: [!a && e.jsxs("li", {
                  className: se.menu_list_li,
                  onPointerUp: () => o("/"),
                  children: [e.jsx("div", {
                    className: se.icon,
                    children: e.jsx(B, {
                      size: 24,
                      children: ""
                    })
                  }), e.jsx("span", {
                    className: se.menu_list_text,
                    children: "Canvas"
                  })]
                }), e.jsxs("li", {
                  className: se.menu_list_li,
                  onPointerUp: () => o("/tournament"),
                  children: [e.jsx("div", {
                    className: se.icon_not_pixel,
                    children: e.jsx("img", {
                      alt: "image",
                      className: se.gold_pixel,
                      src: ZD
                    })
                  }), e.jsx("span", {
                    className: se.menu_list_text,
                    style: {
                      transform: "translateX(-6px)"
                    },
                    children: "Telegram Battle"
                  }), e.jsx("span", {
                    className: se.menu_list_new_item,
                    children: "finished"
                  })]
                }), e.jsxs("li", {
                  className: se.menu_list_li,
                  onPointerUp: () => o("/ratings"),
                  children: [e.jsx("div", {
                    className: se.ratings_image_container,
                    children: e.jsx("img", {
                      alt: "noavatar",
                      className: se.ratings_image,
                      src: sE
                    })
                  }), e.jsx("span", {
                    className: se.menu_list_text,
                    children: "Ratings"
                  })]
                })]
              })]
            }), e.jsxs("div", {
              className: se.bottom_container,
              children: [e.jsx(hE, {}), e.jsx(bE, {}), e.jsx("div", {
                className: se.button_wrapper,
                children: e.jsx(_e, {
                  onPointerUp: r,
                  variant: "dark",
                  children: e.jsxs("div", {
                    className: se.button_content,
                    children: [e.jsx("span", {
                      children: "Desktop version"
                    }), e.jsx(B, {
                      size: 20,
                      style: {
                        fontWeight: 400
                      },
                      children: ""
                    })]
                  })
                })
              }), e.jsx(nE, {}), e.jsx(aE, {})]
            })]
          })]
        })
      })
    })
  },
  CE = "_layout_1vlcp_1",
  PE = "_container_1vlcp_13",
  NE = "_close_button_1vlcp_21",
  SE = "_body_1vlcp_29",
  IE = "_image_container_1vlcp_40",
  TE = "_image_1vlcp_40",
  DE = "_shake_1vlcp_1",
  EE = "_description_container_1vlcp_54",
  BE = "_buyer_info_1vlcp_64",
  kE = "_avatar_1vlcp_72",
  RE = "_name_1vlcp_78",
  UE = "_squad_info_1vlcp_82",
  OE = "_squad_avatar_1vlcp_88",
  ME = "_text_container_1vlcp_94",
  FE = "_text_1vlcp_94",
  QE = "_thanos_snap_container_1vlcp_105",
  zE = "_thanos_snap_text_1vlcp_114",
  qE = "_prev_snaps_container_1vlcp_121",
  HE = "_prev_snaps_text_1vlcp_128",
  LE = "_prev_snaps_list_container_1vlcp_134",
  XE = "_prev_snaps_list_item_1vlcp_142",
  VE = "_button_container_1vlcp_148",
  GE = "_button_1vlcp_148",
  WE = "_button_text_1vlcp_163",
  J = {
    layout: CE,
    container: PE,
    close_button: NE,
    body: SE,
    image_container: IE,
    image: TE,
    shake: DE,
    description_container: EE,
    buyer_info: BE,
    avatar: kE,
    name: RE,
    squad_info: UE,
    squad_avatar: OE,
    text_container: ME,
    text: FE,
    thanos_snap_container: QE,
    thanos_snap_text: zE,
    prev_snaps_container: qE,
    prev_snaps_text: HE,
    prev_snaps_list_container: LE,
    prev_snaps_list_item: XE,
    button_container: VE,
    button: GE,
    button_text: WE
  },
  YE = n => {
    const t = new Date;
    t.setHours(0, 0, 0, 0);
    const s = new Date(t);
    s.setDate(t.getDate() - 1);
    const a = new Date(n);
    return a.setHours(0, 0, 0, 0), a.getTime() === t.getTime() ? "today" : a.getTime() === s.getTime() ? "yesterday" : "once"
  },
  JE = n => {
    const t = String(n.getHours()).padStart(2, "0"),
      s = String(n.getMinutes()).padStart(2, "0");
    return ` ${YE(n)} at ${t}:${s}`
  },
  KE = () => {
    var r;
    const n = _(),
      t = l(c => c.main.showPixanosRating),
      s = l(c => c.main.pixanosRatingData),
      a = l(c => c.color.active);
    if (!s || s.length === 0) return null;
    const i = s[0],
      o = (r = i == null ? void 0 : i.user) == null ? void 0 : r.squad;
    return e.jsx(vt, {
      show: t,
      onPointerUp: () => {
        n(Ea(!1))
      },
      children: e.jsxs("div", {
        className: J.container,
        children: [e.jsx("div", {
          className: J.close_button,
          onPointerUp: () => {
            n(Ea(!1))
          },
          children: e.jsx(B, {
            size: 26,
            children: ""
          })
        }), e.jsxs("div", {
          className: J.body,
          children: [e.jsx("div", {
            className: J.image_container,
            children: e.jsx("img", {
              alt: "img",
              className: J.image,
              src: un
            })
          }), i && e.jsxs("div", {
            className: J.description_container,
            children: [e.jsxs("div", {
              className: J.buyer_info,
              children: [e.jsx("img", {
                alt: "avatar",
                src: i.user.userPic && i.user.userPic !== "" ? i.user.userPic : Xe,
                className: J.avatar
              }), " ", e.jsx("span", {
                className: J.name,
                children: i.user.firstName
              }), o && e.jsx("span", {
                children: "from"
              }), o && e.jsxs("div", {
                className: J.squad_info,
                children: [e.jsx("img", {
                  alt: "avatar",
                  src: o.logo && o.logo !== "" ? o.logo : Nt,
                  className: J.squad_avatar
                }), e.jsx(Rt, {
                  address: `${it}?startapp=${btoa(`id=${o.squadId}`)}`,
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
                  className: J.thanos_snap_container,
                  children: e.jsx("span", {
                    className: J.thanos_snap_text,
                    children: "Pixanos' Snap"
                  })
                }), e.jsx("span", {
                  children: JE(new Date(i.info.datetime))
                })]
              })]
            }), e.jsx("div", {
              className: J.text_container,
              children: e.jsx("span", {
                className: J.text,
                children: "Now his taking every second pixel"
              })
            })]
          }), e.jsxs("div", {
            className: J.prev_snaps_container,
            children: [e.jsx("div", {
              className: J.prev_snaps_text,
              children: "Previous five Snaps by:"
            }), e.jsx("div", {
              className: J.prev_snaps_list_container,
              children: s.map((c, d) => d === 0 ? null : e.jsxs("div", {
                className: J.prev_snaps_list_item,
                children: [e.jsx("img", {
                  alt: "avatar",
                  src: c.user.userPic && c.user.userPic !== "" ? c.user.userPic : Xe,
                  className: J.avatar
                }), " ", e.jsx("span", {
                  className: J.name,
                  children: c.user.firstName
                })]
              }, d))
            })]
          }), e.jsx("div", {
            className: J.button_container,
            children: e.jsx("button", {
              className: U(J.button),
              onPointerUp: async c => {
                var d;
                c.stopPropagation();
                try {
                  const p = await O.buy({
                    type: 13,
                    qty: 1,
                    pixanosColor: a
                  });
                  p.status === 200 && ((d = p == null ? void 0 : p.data) == null ? void 0 : d.ok) === !0 && window.Telegram.WebApp.openInvoice(p.data.result, A => {
                    var h, g;
                    if (A === "paid") n(k({
                      id: performance.now(),
                      text: "Success!",
                      icon: ""
                    })), n(Ea(!1)), (g = (h = window.Telegram.WebApp) == null ? void 0 : h.HapticFeedback) == null || g.notificationOccurred("error");
                    else throw new Error("Error")
                  })
                } catch {
                  n(k({
                    id: performance.now(),
                    text: "Error, try again."
                  }))
                }
              }
            })
          })]
        })]
      })
    })
  },
  ZE = "_layout_1i63b_1",
  $E = "_container_1i63b_18",
  eB = "_image_container_1i63b_25",
  tB = "_title_1i63b_30",
  nB = "_text_container_1i63b_37",
  sB = "_support_container_1i63b_46",
  Jt = {
    layout: ZE,
    container: $E,
    image_container: eB,
    title: tB,
    text_container: nB,
    support_container: sB
  },
  aB = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACQCAYAAACPtWCAAAAFW0lEQVR4nO3dwXUTMRSF4RnOVMImdJAmWKUCmgikhEDagSJIB7ChFHMOq4zko8vLk+bKzv/tHDtjxb5HPN6MNOvdp7vlpXVdd4+XU/lw/4N1WZvPK+uyniK/X47vdAq/X/MH6eMV5N9T/P3699fGo+rrEqP7d/zmS7Lfrzreu9TRgCQCCCsCCKutqmHEP/Gq5lGvz9YQZY0WHU9Vw57KmipX00WpmrpU13xqPO3PP/r3qu9TPV8+ZgaEFQGEFQGE1Va9uWgsVf/mF325sqaSNUq7LSf7cr1rlDN9wv3DdtusEq4pk59HtOaO1oRx7UAxA8KKAMKKAMJqU30xWcNVNWKbqmnK59N9PlHTyRpXfB7Rmkv+fcE24+i+bO/Pv3w3ZkBYEUBYEUBY1X3AoHANIfpc2esP5fPi3G997jKmup6yoGre+LnavWgXT76/uP5S1pSij8oMCCsCCCsCCKt0DRg+15m8nC56bjN7vHLAck1KVQKN7WtGa1Z1vGhfMnt9JDMgrAggrAggrLZo5yh7vVj298PnesvfL/tY0T5XsA/Wex119tzt6OsDozUkMyCsCCCsCCCsNrXONLtXTLbvVZI1jloz0Xtvmejrk2s+wuNRm8cI2RpWPc8MCCsCCCsCCKvqXHC0j/P+5nbw+LNXvIXfIPjy7uO5KH9+Pzc/HlUzMgPCigDCigDCql4XfPD+eJcnW/OpGnJ0jTn2+NE9vpkBYUUAYUUAYVX1AVWF0H//OOXa+mzq7xldY3au+cT1lVwPiKkRQFgRQFidORe8d/1nPo/uy2WPd2yNFyXv41IMnxkQVgQQVgQQVv+xN4ysWWKbSFdyNcvH21+h15c1yo/nD0PHp44XHX/p+8+b4ifhGjN1cn9dxIaIAjMgrAggrAggrM6cC+5977DBfalgyaP2cI7XULkaN7xXjRz/sX3A7LphZkBYEUBYEUBYbdH97fKyNVawxgkP/9iaV9V02b1sjha9zwgzIKwIIKwIIKzkueB8H3D09XTFs6JEyp25PHvErkcrx1+Ot/+anNz3I8fDmhDMjADCigDCalvW9s3G8n3AsX013Xdamo9nU61IqQY89vrEV9gNMLpnODMgrAggrAggrNL3C3ZTfaj+fb/S2HPV0Xvhxd/w2JXg7BGNqRBAWBFAWMn7hEy/J7QoYcbvbZO8nlGO/+g1Otk1MOJw7A2DmRBAWBFAWG1qP7f+fai+9B7F4gK74XLvF91zeXyfr/1/hGiNygwIKwIIKwIIq/i54HBbcGwnTu/vp3h3wa7391Oie9GM7ePKGpU1IZgZAYQVAYSV3B8wb/Y7i1zfnU/2jt2fUd4vmDUhmAkBhBUBhNUrrgfsfW7x+u9G19dcd/OLngtmTQimQgBhRQBhVe0RXdLXd/Veo9D73nKjjze65pqtRs7VfCVmQFgRQFgRQFit2ftO3D9+C94veF8zPD18ThU1949fy0UfmcOdMXfNl//81PfXln1/ZkBYEUBYEUBYDdgf8OiaaXQfj3PbIzEDwooAwooAwmpADfjW14BQM0YwA8KKAMKKAMLq4u8TcvmSe0wfru+6cWZAWBFAWBFAWPWoAQdfz9euOZ4evrzpk63Z6/ni31/fj5sZEFYEEFYEEFYT9AFHrzvGzJgBYUUAYUUAYUUAYUUAYUUAYUUAYUUAYUUAYUUAYUUAYTXhmpDYGogO18MFZe+bwt4xLzEDwooAwooAwmqCGjBawh1dY/U+HnvHvMQMCCsCCCsCCKsLWBMSff3RNV/vGraUrXHnriGZAWFFAGFFAGE1YR9wtj6XGt/RNVjvmtmLGRBWBBBWBBA+y7L8BWJknvMP2Od9AAAAAElFTkSuQmCC",
  iB = () => l(t => t.user.showRobotPopup) ? Ve.createPortal(e.jsx("div", {
    className: Jt.layout,
    children: e.jsxs("div", {
      className: Jt.container,
      children: [e.jsx("div", {
        className: Jt.image_container,
        children: e.jsx("img", {
          alt: "robot",
          src: aB
        })
      }), e.jsx("div", {
        className: Jt.title,
        children: "Hello, Mr. Robot!"
      }), e.jsxs("div", {
        className: Jt.text_container,
        children: [e.jsx("div", {
          children: "1. A robot may not injure a human being or, through inaction, allow a human being to come to harm."
        }), e.jsx("div", {
          children: "2. A robot must obey the orders given it by human beings except where such orders would conflict with the First Law."
        }), e.jsx("div", {
          children: "3. A robot must protect its own existence as long as such protection does not conflict with the First or Second Law."
        })]
      }), e.jsx("div", {
        className: Jt.support_container,
        onPointerUp: () => {
          fe(ei)
        },
        children: "Support for humans"
      })]
    })
  }), document.body) : null,
  oB = () => {
    const n = _(),
      t = async () => {
        try {
          await n(ft.getWorldTemplate())
        } catch (s) {
          console.error("Ошибка получения Глобального трафарета:", s)
        }
      };
    return u.useEffect(() => {
      t()
    }, []), e.jsxs("div", {
      className: Pt.layout,
      children: [e.jsx(fI, {}), e.jsx(hI, {}), e.jsx(dg, {}), e.jsx(k2, {}), e.jsx(AI, {}), e.jsx(bD, {}), e.jsx(TD, {}), e.jsx(wD, {}), e.jsx(iB, {}), e.jsx(xT, {}), e.jsx($T, {}), e.jsx(KE, {}), e.jsx(SD, {}), e.jsx(jE, {})]
    })
  },
  rB = () => {
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
          } catch (c) {
            return console.warn("Ошибка декодирования initData из параметров URL:", c), {
              isTMA: !1,
              authData: null
            }
          }
        }
        return {
          isTMA: It.isDev,
          authData: It.devUserInitData
        }
      },
      a = r => {
        try {
          return JSON.parse(decodeURIComponent(r).split("&")[0].replace("user=", "")).language_code || "en"
        } catch (c) {
          return console.log("cant parse language code", c), "en"
        }
      };
    u.useEffect(() => {
      const {
        isTMA: r,
        authData: c
      } = s();
      if (n(rA(r)), c) {
        const d = a(c);
        n(Cd(d)), n(lA(c))
      }
    }, [n])
  },
  cB = () => (u.useEffect(() => {
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
            c = a.target;
          for (; c && c.id !== "root";) {
            if (c.id === "canvasHolder") {
              o = !0;
              break
            }
            if (c.className === "react-colorful" || c.id === "colorPickerContainer" || c.id === "colorPickerCustomLayout" || c.id === "colorPickerLayout") {
              r = !0;
              break
            }
            if (c.scrollHeight > c.clientHeight) {
              i = !0;
              break
            }
            c = c.parentElement
          }
          if (o || r) a.preventDefault();
          else if (i) {
            const d = c.scrollTop,
              p = a.changedTouches[0].clientY;
            d <= 0 && n < p && a.cancelable && a.preventDefault()
          } else a.preventDefault()
        };
      document.documentElement.addEventListener("touchstart", t, {
        passive: !1
      }), document.documentElement.addEventListener("touchmove", s, {
        passive: !1
      })
    }
  }, []), null),
  lB = "_layout_ieygs_1",
  dB = "_container_ieygs_8",
  uB = "_logo_container_ieygs_17",
  pB = "_logo_ieygs_17",
  mB = "_animate_ieygs_1",
  hB = "_center_ieygs_37",
  AB = "_title_ieygs_51",
  gB = "_description_ieygs_58",
  _B = "_button_container_ieygs_63",
  fB = "_button_ieygs_63",
  xB = "_b_ieygs_63",
  jt = {
    layout: lB,
    container: dB,
    logo_container: uB,
    logo: pB,
    animate: mB,
    center: hB,
    title: AB,
    description: gB,
    button_container: _B,
    button: fB,
    b: xB
  },
  vB = () => {
    const n = l(Ko);
    return e.jsx("div", {
      className: jt.layout,
      children: e.jsxs("div", {
        className: jt.container,
        children: [e.jsx("div", {
          className: jt.logo_container,
          children: e.jsx("div", {
            className: jt.logo,
            children: e.jsx("div", {
              className: jt.center
            })
          })
        }), e.jsx("div", {
          className: jt.button_container,
          children: e.jsx("button", {
            className: jt.button,
            onPointerUp: () => {
              n ? fe("https://t.me/notpixel_channel") : ia("https://t.me/notpixel_channel")
            },
            children: "Not Pixel Channel"
          })
        })]
      })
    })
  },
  yB = "/assets/loading_packman-D9aK3hLf.gif",
  wB = () => e.jsxs("div", {
    className: Pt.loading_container,
    children: [e.jsx("div", {
      className: Pt.image_container,
      children: e.jsx("img", {
        alt: "img",
        src: yB,
        className: Pt.image
      })
    }), e.jsxs("div", {
      className: Pt.text,
      children: [e.jsxs("p", {
        children: ["We shaved off ", e.jsx("span", {
          className: Pt.white,
          children: "3 zeros"
        }), " from all user balances and the total supply. Now token pricing will be way easier to deal with."]
      }), e.jsxs("p", {
        children: ["Example (before → after):", e.jsx("br", {}), e.jsx("span", {
          className: Pt.white,
          children: " 1,000 $PX → 1 $PX"
        })]
      })]
    })]
  }),
  bB = () => {
    const n = _();
    u.useEffect(() => {
      const t = (s, a) => {
        dn.get(s, (i, o) => {
          if (i === null && o !== "") try {
            const r = JSON.parse(o);
            a(r)
          } catch (r) {
            console.error(`Ошибка парсинга данных ${s}:`, r)
          } else i !== null && console.error(`Ошибка при получении данных ${s}:`, i)
        })
      };
      t("colors", s => {
        Array.isArray(s) && s.length > 0 ? (n(Qc(s)), n(si(s[0]))) : console.warn("Полученные данные цветов не являются непустым массивом")
      }), t("boosts1", s => {
        n(Qp(s))
      })
    }, [n])
  },
  jB = () => {
    const n = _(),
      t = $(),
      s = l(c => c.main.startParams),
      a = async () => {
        try {
          const d = (await n(Ie.getUser())).payload.data;
          if (d.balance >= 1e5 && t.push("/cashout"), d.error) throw new Error(d.error);
          return n(cA(!0)), d
        } catch (c) {
          return console.error("Ошибка при получении данных пользователя:", c), !1
        }
      }, i = async () => {
        try {
          const c = await n(Bt.info()).unwrap()
        } catch (c) {
          console.error("Ошибка получения информации о майнинге:", c)
        }
      }, o = () => {
        s.squadId && n(Xa(s.squadId))
      }, r = async () => {
        const [c] = await Promise.all([a()]);
        c && (await Promise.all([i()]), o())
      };
    u.useEffect(() => {
      r()
    }, [n])
  },
  CB = () => {
    const n = $();
    u.useEffect(() => {
      po() ? localStorage.getItem("skipIntro") || (n.push("/welcome"), localStorage.setItem("skipIntro", "true")) : dn.get("skipIntro", (t, s) => {
        t === null && s !== "" || (t !== null && console.error("Ошибка при получении skipIntro:", t), n.push("/welcome"))
      })
    }, [n])
  },
  Ka = n => {
    let t = "unknown",
      s = "unknown";
    return /android/i.test(n) ? (t = "mobile", s = "android") : /iPad|iPhone|iPod/.test(n) ? (t = "mobile", s = "ios") : /Windows NT/i.test(n) ? (t = "desktop", s = "windows") : /Macintosh/i.test(n) ? (t = "desktop", s = "macos") : (t = "unknown", s = "unknown"), {
      deviceType: t,
      os: s
    }
  },
  PB = n => {
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
          o = Ka(i);
        t = o.deviceType, s = o.os;
        break
    }
    return {
      deviceType: t,
      os: s
    }
  },
  NB = () => {
    const n = _(),
      t = l(s => s.auth.authData);
    u.useEffect(() => {
      var o, r;
      let s = "unknown",
        a = "unknown",
        i = "unknown";
      if (t && t !== "")
        if ((r = (o = window == null ? void 0 : window.Telegram) == null ? void 0 : o.WebApp) != null && r.platform) {
          s = window.Telegram.WebApp.platform;
          const c = PB(s);
          a = c.deviceType, i = c.os
        } else {
          const c = navigator.userAgent,
            d = Ka(c);
          a = d.deviceType, i = d.os
        }
      else {
        const c = navigator.userAgent,
          d = Ka(c);
        a = d.deviceType, i = d.os
      }
      n(Ml({
        deviceType: a,
        os: i,
        platform: s
      }))
    }, [n, t])
  },
  SB = () => {
    const n = _(),
      {
        t,
        i18n: s
      } = ro(),
      a = l(i => i.user.languageCode);
    u.useEffect(() => {
      s.changeLanguage(a)
    }, [n, a])
  },
  IB = () => {
    const n = _(),
      t = l(a => a.shop.selectedCurrency),
      s = l(ot);
    u.useEffect(() => {
      s === Ae && t === 1 && n(Bn(2)), s !== Ae && n(Bn(1))
    }, [s])
  },
  TB = () => {
    const n = _(),
      t = window.Telegram.WebApp,
      s = l(Qn);
    return u.useEffect(() => {
      function a() {
        console.log("is fullscreen: ", this.isFullscreen), n(Fl(this.isFullscreen))
      }
      return t.onEvent("fullscreenChanged", a), () => {
        t.offEvent("fullscreenChanged", a)
      }
    }, [n]), u.useEffect(() => {
      if (C) {
        const a = window.innerWidth,
          i = window.innerHeight;
        C.app.renderer.resize(a, i), C.viewport.viewport.resize(a, i)
      }
    }, [s]), null
  };

function Ze(n, t) {
  const [s, a = ""] = n.toString().split("."), i = a.slice(0, t);
  return +`${s}.${i.padEnd(t,"0")}`
}
const Cn = window.Telegram.WebApp.Accelerometer,
  Pn = window.Telegram.WebApp.DeviceOrientation,
  Nn = window.Telegram.WebApp.Gyroscope,
  DB = new Promise(n => {
    Cn.start(null, t => n(t))
  }),
  EB = new Promise(n => {
    Pn.start(null, t => n(t))
  }),
  BB = new Promise(n => {
    Nn.start(null, t => n(t))
  }),
  kB = async () => {
    if (!window.Telegram.WebApp.isVersionAtLeast("8.0")) return Promise.reject("Version is too low");
    const n = [DB, EB, BB],
      t = [],
      s = [],
      a = [],
      i = await Promise.allSettled(n),
      o = i[0].value,
      r = i[1].value,
      c = i[2].value,
      d = () => {
        try {
          try {
            if (o) {
              const h = {
                a: Ze(Cn.x, 6),
                b: Ze(Cn.y, 6),
                c: Ze(Cn.z, 6)
              };
              t.push(h)
            }
          } catch {
            const g = {
              a: 1.111111,
              b: 1.111111,
              c: 1.111111
            };
            t.push(g)
          }
          try {
            if (r) {
              const h = {
                a: Ze(Pn.alpha, 6),
                b: Ze(Pn.beta, 6),
                c: Ze(Pn.gamma, 6)
              };
              s.push(h)
            }
          } catch {
            const g = {
              a: 1.111111,
              b: 1.111111,
              c: 1.111111
            };
            s.push(g)
          }
          try {
            if (c) {
              const h = {
                a: Ze(Nn.x, 6),
                b: Ze(Nn.y, 6),
                c: Ze(Nn.z, 6)
              };
              a.push(h)
            }
          } catch {
            const g = {
              a: 1.111111,
              b: 1.111111,
              c: 1.111111
            };
            a.push(g)
          }
        } catch {}
      };
    await Sn(2400), d(), await Sn(1200), d(), await Sn(1200), d();
    const p = {};
    t.length > 0 && (p.a = t), s.length > 0 && (p.b = s), a.length > 0 && (p.c = a);
    const A = new TextEncoder().encode(JSON.stringify(p));
    await He.rpc("sensor", A), Cn.stop(), Pn.stop(), Nn.stop()
  };
let oo = !1;
const RB = () => {
    const n = l(s => s.device.deviceType),
      t = window.Telegram.WebApp.platform;
    return u.useEffect(() => {
      n === "mobile" && t !== "unknown" && !oo && (kB(), oo = !0)
    }, [n]), null
  },
  UB = ({
    children: n
  }) => {
    const [t, s] = u.useState(It.devServer ? 0 : 4);
    u.useEffect(() => {
      const p = setInterval(() => {
        s(A => {
          const h = A - 1;
          h <= 0 && clearInterval(p), s(h)
        })
      }, 1e3);
      return () => {
        clearInterval(p)
      }
    }, []), TB(), rB(), NB(), SB(), IB(), RB();
    const a = l(p => p.main.timeLimit),
      i = l(p => p.user.getUserFetchStatus),
      o = i === m.rejected && !It.app.disableBetaError,
      r = i === m.pending || i === m.idle,
      c = a;
    return window.Telegram && !window.Telegram.WebApp.isVersionAtLeast(Ic) && cB(), bB(), jB(), CB(), o || c ? e.jsx(vB, {}) : r || t > 0 ? e.jsx(wB, {}) : e.jsx(e.Fragment, {
      children: n
    })
  };

function OB() {
  return e.jsx(UB, {
    children: e.jsx(oB, {})
  })
}
const Ut = rn();
Ut.startListening({
  matcher: ue(Bt.info.fulfilled),
  effect: (n, t) => {
    n.payload.activated && t.dispatch(Nd(n.payload.totalUserPixels)), t.dispatch(Zc(n.payload.goods))
  }
});
Ut.startListening({
  matcher: ue(Bt.checkBoost.fulfilled),
  effect: (n, t) => {
    const s = n.meta.arg.key,
      a = n.payload[s];
    let i = "Not enough PX",
      o = "";
    a && (i = "Well done fren", o = ""), t.dispatch(k({
      id: performance.now(),
      text: i,
      icon: o
    }))
  }
});
Ut.startListening({
  matcher: ue(Bt.checkBoost.fulfilled),
  effect: (n, t) => {
    const s = t.getState(),
      a = s.main.settings,
      i = n.meta.arg.key,
      o = n.payload[i],
      r = n.meta.arg.price;
    if (o) {
      if (i === tt.energyLimit) {
        const c = s.mining.boosts[tt.energyLimit],
          d = a.UpgradeChargeCount.levels[c].Boost;
        t.dispatch(zp(s.mining.maxCharges + d)), t.dispatch(Qo(d))
      }
      if (i === tt.reChargeSpeed) {
        const c = s.mining.boosts[tt.reChargeSpeed],
          d = a.UpgradeChargeRestoration.levels[c].ChargeBoost;
        t.dispatch(qp(d))
      }
      t.dispatch(Id(r))
    }
  }
});
Ut.startListening({
  matcher: ue(Bt.checkTask.rejected),
  effect: (n, t) => {
    t.dispatch(k({
      id: performance.now(),
      text: "Check failed",
      icon: ""
    }))
  }
});
Ut.startListening({
  matcher: ue(Bt.checkBoost.rejected),
  effect: (n, t) => {
    t.dispatch(k({
      id: performance.now(),
      text: "Not enough PX",
      icon: ""
    }))
  }
});
Ut.startListening({
  matcher: ue(Fp),
  effect: (n, t) => {
    const a = t.getState().mining.toggleAction;
    console.log("boosts length: ", JSON.stringify(a).length), dn.save("boosts1", JSON.stringify(a))
  }
});
const ga = rn();
ga.startListening({
  matcher: ue(ua.getPriceMask.pending, Ie.getPixelsForSale.pending, Ie.getPixelsSold.pending, fi.get.pending),
  effect: (n, t) => {
    t.dispatch(st({
      command: Be.start
    }))
  }
});
ga.startListening({
  matcher: ue(ua.getPriceMask.fulfilled, Ie.getPixelsForSale.fulfilled, Ie.getPixelsSold.fulfilled, fi.get.fulfilled),
  effect: (n, t) => {
    t.dispatch(st({
      command: Be.finish
    }))
  }
});
ga.startListening({
  matcher: ue(ua.getPriceMask.rejected),
  effect: (n, t) => {
    n.error.code !== "ERR_CANCELED" && t.dispatch(st({
      command: Be.finish
    }))
  }
});
const Or = rn();
Or.startListening({
  matcher: ue(Ie.getUser.fulfilled),
  effect: (n, t) => {
    t.dispatch(Ho(n.payload.data.league)), t.dispatch(Bo(n.payload.data.balance))
  }
});
const hn = rn();
hn.startListening({
  matcher: ue(rt.getMyTemplate.fulfilled),
  effect: (n, t) => {
    const s = t.getState();
    if (s.tournament.myTemplate) {
      const a = s.tournament.myTemplate;
      C.mainImage.tournamentTemplates.deleteTemplate(a.id), C.mainImage.tournamentTemplates.add(a)
    }
  }
});
hn.startListening({
  matcher: ue(rt.getSelectedTemplate.fulfilled, ir),
  effect: (n, t) => {
    const s = t.getState();
    if (s.tournament.selectedTemplate) {
      const a = s.tournament.selectedTemplate;
      C.mainImage.tournamentTemplates.deleteTemplate(a.id), C.mainImage.tournamentTemplates.add(a)
    }
  }
});
hn.startListening({
  matcher: ue(_g),
  effect: n => {
    const t = n.payload;
    C.mainImage.tournamentTemplates.hide(), C.mainImage.tournamentTemplates.show(t)
  }
});
hn.startListening({
  matcher: ue(fg),
  effect: () => {
    C.mainImage.tournamentTemplates.hide()
  }
});
hn.startListening({
  matcher: ue(sr),
  effect: n => {
    C.mainImage.tournamentTemplates.changeTemplateCoords(n.payload)
  }
});
const bi = rn();
bi.startListening({
  matcher: ue(Tt.squad.fulfilled),
  effect: (n, t) => {
    t.dispatch(Td(n.payload.mySquad))
  }
});
bi.startListening({
  matcher: ue(Xo, Ho),
  effect: (n, t) => {
    t.dispatch(Lo())
  }
});
const Gn = rn();
Gn.startListening({
  actionCreator: rr,
  effect: () => {
    C.mainImage.selectedPixel.hide()
  }
});
Gn.startListening({
  actionCreator: ma,
  effect: () => {
    C.mainImage.selectedPixel.show()
  }
});
Gn.startListening({
  actionCreator: ha,
  effect: () => {
    C.mainImage.selectedPixel.hide()
  }
});
Gn.startListening({
  actionCreator: kt,
  effect: () => {
    C.mainImage.selectedPixel.show()
  }
});
const An = Gr({
    reducer: {
      auth: dA,
      daily: op,
      drawNft: tS,
      main: Tg,
      color: zc,
      device: zl,
      mining: Gp,
      layout: pI,
      canvas: Mm,
      nftCanvas: bS,
      ratings: nm,
      user: Ed,
      squad: Fg,
      progress: zm,
      history: Ix,
      shop: el,
      toast: Od,
      template: Lf,
      tournament: yg,
      reward: fA
    },
    devTools: !1,
    middleware: n => [Gn.middleware, Or.middleware, ga.middleware, Ut.middleware, bi.middleware, hn.middleware, ...n()]
  }),
  MB = {
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
      description: "Invite frens and paint together!",
      your: "Your frens:"
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
  FB = {
    translation: MB
  },
  QB = {
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
      description: "Приглашайте друзей и красьте вместе!",
      your: "Ваши друзья:"
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
  zB = {
    translation: QB
  };
ic.use(sc).init({
  resources: {
    en: FB,
    ru: zB
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
rg(An);
Ec(An);
xA(An);
bg(An);
hS(An);
const qB = Vr.createRoot(document.getElementById("root"));
qB.render(e.jsx(re.StrictMode, {
  children: e.jsx(Yr, {
    store: An,
    children: e.jsx(ac, {
      children: e.jsx($r, {
        manifestUrl: "https://app.notpx.app/tonconnect-manifest.json",
        actionsConfiguration: {
          returnStrategy: "back",
          twaReturnUrl: "https://t.me/notpixel/app",
          modals: ["before"],
          notifications: ["before", "success", "error"]
        },
        language: "en",
        uiPreferences: {
          theme: ec.DARK
        },
        children: e.jsx(OB, {})
      })
    })
  })
}));