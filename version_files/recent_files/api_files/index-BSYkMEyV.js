var or = Object.defineProperty;
var ir = (n, t, s) => t in n ? or(n, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: s
}) : n[t] = s;
var In = (n, t, s) => ir(n, typeof t != "symbol" ? t + "" : t, s);
import {
  j as e,
  r as p,
  R as ae
} from "./react-DjWS3H3h.js";
import {
  r as Ke,
  c as rr
} from "./react-dom-DCoj3sTC.js";
import {
  c as re,
  a as D,
  b as fn,
  d as ba,
  e as Mt,
  i as ue,
  f as cr
} from "./@reduxjs-K2ahyHOo.js";
import {
  a as lr
} from "./axios-BdInfei4.js";
import "./yaml-Dy-SgT9h.js";
import "./vite-plugin-node-polyfills-BVIVvkCX.js";
import {
  d as ge
} from "./@ton-CABtnvlX.js";
import {
  u as l,
  a as g,
  P as dr
} from "./react-redux-uubI8uR8.js";
import {
  c as R
} from "./classnames-D-x1NdaJ.js";
import {
  u as xn,
  a as yn,
  T as ur,
  b as pr
} from "./@tonconnect-CKEjIK8E.js";
import {
  u as vs,
  e as ws,
  a as bs
} from "./@react-spring-BiYD2lL6.js";
import {
  C as mr
} from "./centrifuge-B3TpHLNx.js";
import {
  d as Ar
} from "./fflate-DRb3BoOD.js";
import {
  u as Y,
  S as hr,
  a as X,
  b as Es
} from "./react-router-skDq-tWz.js";
import {
  c as Dt
} from "./chroma-js-CHvE9HB5.js";
import {
  m as un,
  A as ja
} from "./framer-motion-BggZOsGS.js";
import {
  u as Bs,
  i as gr
} from "./react-i18next-4MQgfZKk.js";
import {
  T as Ys
} from "./tonweb-BaiZR3hJ.js";
import {
  l as ua
} from "./react-range-COVt_hlT.js";
import {
  B as _r
} from "./react-router-dom-DSUFG-Qy.js";
import {
  i as fr
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
import "./isomorphic-webcrypto-Cp7ugTe2.js";
(function() {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) a(o);
  new MutationObserver(o => {
    for (const i of o)
      if (i.type === "childList")
        for (const r of i.addedNodes) r.tagName === "LINK" && r.rel === "modulepreload" && a(r)
  }).observe(document, {
    childList: !0,
    subtree: !0
  });

  function s(o) {
    const i = {};
    return o.integrity && (i.integrity = o.integrity), o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? i.credentials = "include" : o.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i
  }

  function a(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = s(o);
    fetch(o.href, i)
  }
})();
const xr = "_stars_img_container_1wci0_1",
  yr = "_stars_img_1wci0_1",
  vr = "_scalebubble_1wci0_1",
  wr = "_squads_img_1wci0_17",
  br = "_title_container_1wci0_22",
  jr = "_description_container_1wci0_28",
  Pr = "_description_1wci0_28",
  Cr = "_info_layout_1wci0_42",
  Nr = "_info_container_1wci0_52",
  Sr = "_info_row_1wci0_59",
  Ir = "_info_row_content_1wci0_65",
  Tr = "_info_row_sale_1wci0_84",
  Er = "_not_active_1wci0_100",
  Br = "_selected_1wci0_105",
  Dr = "_row_icon_container_1wci0_110",
  kr = "_row_icon_1wci0_110",
  Rr = "_row_title_1wci0_133",
  Ur = "_row_amount_1wci0_143",
  Or = "_row_price_container_1wci0_156",
  Mr = "_main_info_channel_users_1wci0_166",
  ie = {
    stars_img_container: xr,
    stars_img: yr,
    scalebubble: vr,
    squads_img: wr,
    title_container: br,
    description_container: jr,
    description: Pr,
    info_layout: Cr,
    info_container: Nr,
    info_row: Sr,
    info_row_content: Ir,
    info_row_sale: Tr,
    not_active: Er,
    selected: Br,
    row_icon_container: Dr,
    row_icon: kr,
    row_title: Rr,
    row_amount: Ur,
    row_price_container: Or,
    main_info_channel_users: Mr
  },
  jo = Number(window.getComputedStyle(document.body).getPropertyValue("--header-height").replace("px", "")),
  u = {
    idle: "idle",
    pending: "pending",
    fulfilled: "fulfilled",
    rejected: "rejected"
  },
  I = {
    width: 1024,
    height: 1024,
    chunkSize: 750,
    chunkOrder: [6, 7, 11, 10, 9, 5, 1, 2, 3, 4, 8, 12, 16, 15, 14, 13]
  },
  Ws = {
    bomb: "Dynamite",
    pumpkin: "Pumpkin",
    pixanos: "Pixanos"
  },
  Qr = 24 * 60 * 60 * 1e3,
  gt = "https://t.me/notpixel/app",
  j = {
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
  Ye = {
    paintReward: "paintReward",
    reChargeSpeed: "reChargeSpeed",
    energyLimit: "energyLimit"
  },
  Fr = ["/transaction/user/start", "/repaint/finish", "/transaction/user/complete", "/stars/shop/process", "/mining/status/claim", "/mining/claim", "/mining/status/error", "/repaint/complete", "/stars/shop/reject", "/squads/list/get", "/squads/list/update"],
  Qe = {
    my: "my",
    referred: "referred",
    world: "world"
  },
  at = "notgames_bot/squads",
  Pa = "https://t.me/notpixel_42",
  pa = "UQBv3exBKLmQcn2Fm6VlntAInW-je1YP4U59gJxaO62NCyMn",
  Te = {
    userFromPixelInfo: "userFromPixelInfo",
    squadFromData: "squadFromData",
    userFromRating: "userFromRating"
  },
  zr = "7.7",
  de = "unknown",
  ut = {
    3: "EQAvlWFDxGF2lXm67y4yzC17wYKD9A0guwPkMs1gOsM__NOT",
    4: "EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs",
    5: "EQCvxJy4eG8hyHBFsZ7eePxrRsUQSFE_jpptRAYBmcG_DOGS",
    6: "EQDv-yr41_CZ2urg2gfegVfa44PDPjIK9F-MilEDKDUIhlwZ",
    7: "EQD-cvR0Nz6XAyRBvbhz-abTrRC6sI5tvHvvpeQraV9UAAD7",
    8: "EQB4zZusHsbU2vVTPqjhlokIOoiZhEdCMT703CWEzhTOo__X",
    9: "EQCuPm01HldiduQ55xaBF_1kaW_WAUy5DHey8suqzU_MAJOR"
  },
  Hr = {
    friendsForTemplateCreation: 128
  },
  Tn = {
    success: "success",
    neutral: "neutral",
    fail: "fail"
  },
  Po = {
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
  Ca = "https://notpx.app/api/v1/",
  qr = "https://image.notpx.app/api/v2/image";
let Co;
const Lr = n => {
    Co = n
  },
  P = lr.create({
    baseURL: Ca
  });
P.interceptors.request.use(function(n) {
  var a;
  const s = (a = Co.getState().auth) == null ? void 0 : a.authData;
  return s ? n.headers.Authorization = `initData ${s}` : delete n.headers.Authorization, n
});
P.interceptors.request.use(function(n) {
  return Fr.includes(n.url), n
});
P.interceptors.response.use(n => n, n => Promise.reject(n));
const Qa = window.Telegram.WebApp.CloudStorage;
let No = class {
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
window.Telegram.WebApp.isVersionAtLeast("6.9") && (No = class {
  static save(t, s, a = () => {}) {
    Qa.setItem(t, s, a)
  }
  static get(t, s = () => {}) {
    Qa.getItem(t, s)
  }
});
const Qt = No,
  L = (n, t) => Math.floor(Math.random() * (t - n + 1) + n),
  Vr = n => `${n.includes("@")?"":"@"}${n}`,
  Fa = n => n.replace("@", ""),
  vn = (n, t = 18, s = !0) => n.slice(0, t) + (n.length > t && s ? "..." : ""),
  wn = n => {
    window.Telegram.WebApp.openLink(n)
  },
  pe = n => {
    window.Telegram.WebApp.openTelegramLink(n)
  },
  So = () => {
    const n = "some_test_local_storage_key";
    try {
      return localStorage.setItem(n, n), localStorage.removeItem(n), !0
    } catch {
      return !1
    }
  },
  Ds = async n => {
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
  }, rn = n => new Promise(t => setTimeout(t, n)), Gr = n => {
    if (!n || !n.x || !n.y || isNaN(n.x) || isNaN(n.y)) return !1;
    const t = Number(n.x),
      s = Number(n.y);
    return !(t < 0 || s < 0 || t >= I.width || s >= I.height)
  }, Xr = () => {
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
      for (let o = 0; o < s.length; o++) {
        let i = s[o],
          r = i[0];
        i = Number(i.substring(1)), !isNaN(i) && (r === "f" ? t.refId = i : r === "s" ? t.squadId = i : r === "x" || r === "y" ? (t.coords || (t.coords = {
          x: 0,
          y: 0
        }), t.coords[r] = i) : r === "t" && (t.showTemplate = !0))
      }
      return Gr(t.coords) || (t.coords = !1), t.showTemplate && (t.coords = !1), t
    } catch {
      return {
        coords: !1,
        squad: !1,
        refId: !1,
        showTemplate: !1
      }
    }
  }, Rt = n => {
    if (isNaN(n)) return "";
    let t = "";
    return n >= 1e3 ? (t += (n / 1e3).toFixed(1), t += "k") : t += n.toFixed(0), t
  }, Jr = n => {
    if (isNaN(n)) return "0 min";
    const t = Math.ceil(n / 3600),
      s = Math.ceil(n % 3600 / 60);
    let a = "";
    return t > 0 ? a += `${t} hour${t!==1?"s":""} ` : a += `${s} min`, a
  }, Yr = n => {
    if (isNaN(n)) return "0 min";
    let t = "";
    const s = Math.floor(n / 3600),
      a = Math.floor(n % 3600 / 60);
    return t += s, t += "h ", t += a > 9 ? a : `0${a}`, t += "m", t
  }, Io = n => !0, ma = n => {
    if (!n) return "";
    if (n.length <= 6) return n;
    const t = n.slice(0, 3),
      s = n.slice(-3);
    return `${t}...${s}`
  }, Wr = n => {
    try {
      return ge.Address.parse(n).toString({
        urlSafe: !0,
        bounceable: !0
      })
    } catch {
      return ""
    }
  }, To = n => {
    try {
      return ge.Address.parse(n).toString({
        urlSafe: !0,
        bounceable: !1
      })
    } catch {
      return ""
    }
  }, Ee = ["#E46E6E", "#FFD635", "#7EED56", "#00CCC0", "#51E9F4", "#94B3FF", "#E4ABFF", "#FF99AA", "#FFB470", "#FFFFFF", "#BE0039", "#FF9600", "#00CC78", "#009EAA", "#3690EA", "#6A5CFF", "#B44AC0", "#FF3881", "#9C6926", "#898D90", "#6D001A", "#BF4300", "#00A368", "#00756F", "#2450A4", "#493AC1", "#811E9F", "#A00357", "#6D482F", "#000000"], za = Ee[L(0, Ee.length - 1)], Kr = {
    active: za,
    id: btoa(za),
    latest: ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
    basic: Ee
  }, Eo = re({
    name: "color",
    initialState: Kr,
    reducers: {
      addColor: (n, t) => {
        const s = n.latest.indexOf(t.payload),
          a = n.latest[0];
        s > -1 ? n.latest = [t.payload, ...n.latest.slice(0, s), ...n.latest.slice(s + 1, 10)] : n.latest = [t.payload, ...n.latest.slice(0, 7)], a !== t.payload && Qt.save("colors", JSON.stringify(n.latest))
      },
      setColors: (n, t) => {
        n.latest = t.payload
      },
      setActiveColor: (n, t) => {
        n.active = t.payload, n.id = btoa(t.payload)
      }
    }
  }), {
    addColor: Zr,
    setColors: $r,
    setActiveColor: Na
  } = Eo.actions, ec = Eo.reducer;
class F {
  static async getPrices() {
    return P.get("/image/prices")
  }
  static async getPixelInfo({
    id: t,
    signal: s
  }) {
    return P.get(`/image/get/${t}`, {
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
    wallet: t,
    captcha: s
  }) {
    return P.post("/wallet/ton-proof/check-captcha", {
      wallet: t,
      captcha: s
    })
  }
  static async checkHasCaptchaCode() {
    return P.get("/wallet/ton-proof/uncompleted-captcha")
  }
  static async getUserPixels({
    offset: t,
    limit: s
  }) {
    return P.get(`/users/mypixels?offset=${t}&limit=${s}`)
  }
  static async getUserPixelsSold({
    offset: t,
    limit: s
  }) {
    return P.get(`/users/mypixels/sold?offset=${t}&limit=${s}`)
  }
  static async getUserPixelsCount() {
    return P.get("/users/mypixels/count")
  }
  static async getPriceMask({
    price: t
  }) {
    let s = t === null ? "" : `/${t}`;
    return P.get(`/image/mask${s}`, {
      responseType: "arraybuffer",
      decompress: !0
    })
  }
  static async startRepaint({
    pixelId: t,
    newColor: s
  }) {
    return P.post("/repaint/start", {
      pixelId: t,
      newColor: s
    })
  }
  static async getHistory({
    offset: t,
    limit: s
  }) {
    return P.get(`/history/all?offset=${t}&limit=${s}`)
  }
  static async getPixanosRating() {
    return P.get("/ratings/pixanos")
  }
  static async buy({
    type: t,
    qty: s,
    pixanosColor: a
  }) {
    return P.post("/buy/stars", {
      type: t,
      qty: s,
      pixanosColor: a
    })
  }
  static async getProducts() {
    return P.get("/buy/list")
  }
  static async useProduct({
    pixelId: t,
    productId: s,
    color: a
  }) {
    return P.post("/repaint/special", {
      pixelId: t,
      type: s,
      color: a
    })
  }
  static async startTransaction({
    buyerWallet: t
  }) {
    return P.post("/transactions/start", {
      buyerWallet: t
    })
  }
  static async startShopTransaction({
    buyerWallet: t,
    goodId: s,
    daily: a = !1,
    currencyId: o,
    quantity: i,
    activeColor: r
  }) {
    let c = s === 13 ? Ee[L(0, 29)] : void 0;
    return r && Ee.includes(r) && (c = r), P.post("/transactions/start", {
      buyerWallet: t,
      goodId: s,
      daily: a,
      currencyId: o,
      quantity: i,
      pixanosColor: c
    })
  }
  static async putUserWallet({
    address: t
  }) {
    return P.put(`/users/wallet/${t}`)
  }
  static async getSquadInfo({
    id: t
  }) {
    return P.get(`/ratings/squads/${t}`)
  }
  static async checkSecret({
    key: t
  }) {
    return P.post("/mining/quest/check/secretWord", {
      secret_word: t
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
    userId: t
  }) {
    return P.get(`/users/rewards/${t}`)
  }
  static async getRewardById({
    rewardId: t
  }) {
    return P.get(`/users/rewards/distribution/${t}`)
  }
  static async claimRewardById({
    userId: t,
    rewardId: s
  }) {
    return P.post("/users/rewards/claim", {
      user_id: t,
      reward_user_id: s
    })
  }
  static async generateTonProofPayload() {
    return P.post("/wallet/ton-proof/generate-payload")
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
    return P.post("/wallet/ton-proof/check-proof", a)
  }
}
const tc = "/assets/icon_stars_new-Dk8ap_HZ.png",
  nc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAMAAAC8EZcfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAPFBMVEVHcEwCmOwCl+wCmOwDmOwEmOwEl+weoukAkuv////8/Pvy9PTB5PKX1O9lv+w+r+wBmOkBl+wAhugAeOKI36LFAAAACXRSTlMADC1rmsLi/f1nGCWIAAAHbUlEQVR42u2d65KjOAyFY2yMYm6y8v7vurthpg0oIBuR8VbtnqmaP51Ofzm6GYc4jxtkmsY617beg0cE733bOmebxjyqyzTWeTyUd7YipbHOx7+F8bcQIy7/LVp+5p2tANnYNhaotc2fpfOxWP6PMTLvCnw03zfP+aiQd82X8aJaX0Rs2niL2qaCe9VdNOV4eCZnbq5cH+8FRG+rJR9m6rZUNPaac7Ls7fbp4e430YLOPVUm6otXD+pMzdb87TA3PjLpUZclY5K/TGjjjULAiAg//9ayNfm4kQscqAld/IYS3obR1eXjwtXFDCesz8eF7pt8iKgGRKfgUwHqCfX1i7dYiDafrwZgPmEDxU99F2GTOd+qAOZOPdPGQuGNhK3JKOCagOi+MIDxJsKssdyAdtH35TRslXgI12FxUXtzgDkeXHQUEaRu2OhX9QCSi/JTNccBVgICAiS8C4BwHmQb1Q7y5XwsEJwvsI3PWGYCkEoAMR5B/+SvNxdbNBBhN6vUIRFIDqK7VCFAOI19eB4r/NbJQ/pxQoJzBxGbCwYSTP1zJ87X94yPqZ+AJAuLDUTqBpEu9G9JJj6fQ0dYamEr+DeHDPvCm68PoothplMHsS00kLqnxPcmlCxM6uhjIzy00AkNqpcAE55k4aKAdNpUXZmBwzMHsMTBMFDkOrTQCQko8aUaEQCFNET4bKHxOgNTiBPhU9JAR+OYjxOrqJCkBPjMUejOs9Bm9xiaNrkzHmhIIT5+zJpwOrewzS+RceXSTAd6zW/A4R/A+UUHmlfujnTaCmPDIyyn4PQ6iAnQ9PyJ8ERHy63XJCRhUkwx9vFUkAADwtEz5gEChgQI5xeJPjPCEEsBgwIQIf1mwyMsh5jwPMTDqYNImxALGwGW17BcJBHwuoMIcV0kEmC78JmYJLeZkTQ5SOOmzUi7USYrwhG6sJoYSGchHk4dJAzrRg0SoOVzWB51I+FVB5HG7aiTAF1qMgWLhY4EwHDgIG5nZicD+iUFZfFXzkMsFQmPhHCtHZckNEIX5LnznKncQR4IzAFsUo0UFHJP8BkwpByMHBCoZyUsAbrcLVWAgydPIAkwLA9YA/IXCRCPlQBzaoSHp0dgb0EwwPXP+HXNTFEEXKrEYBTEEzx8SPB3iMNPDsZFK8AXLzQZEM2j4YDysjrwC+/kYPhxsLjF8Lg02ZuWSCO7JOMOhr4PKcRyi5EB84qYj6mZWfg7xOGTg0jzM7BFmwyI9qyIuUVJA8EnwLBctTNAoIF1gawcdA+HuYD7PoafALmD/MX1It8asMV8C+f1Ph8AMsBFDBABWIvJA4xtAixtNRMhfgoxB8Rddsh8ycH24RlgbqtB2AP+spAlGWxGeQciXwL0RYCRRtYrBEDh14QAlwPGftNtRUBufF/09jPCgzAWaJdMmAOI2xYjBXgPCEWAAAPr1mv2N18CZMX/HCS+HWB8YD4g/2sEe3PffAmQ9ei5FFDMQWEkMMBdm0F4zYEtg0S+ZFspIG4zHmCfnjvASDSwheShGB5CESC/dJyI188aEPE1Jf+YgQKg3Gbk1T8SB1xzE/Rrw0sDHL2wMSPvhKwBubH4GjfTUeDjDkqzWK6Tjg4A+SJyyA5wUsuXW7K2reYIkC/DZygKMFsPXhzJM+EBIHsp2QFOcg9bBMhXJ6En4IDEkyF0IPJxB614VSfXyUTIAfnYGSk7wEnYXAOEbfMADsgfhQUBTmqEC3epThIOB8Sdz/n+JaFJWx8lwsgGGAcE6IUKkQH9avNIMZInYoB7A2e6dAOdS9tvmlYTEBjgxsAwFAU4yV4C5BdCI+EOcGcgQu4inwOaeEUboBAQcAcI2IvLQBnQpE30EvGL8ZF2DiberN3K+FleeBuiYKOhoy0gYMhsMXgC6FSfG9m0mnEHSKPcYmRZ4a2wgo2G0L3WgC8McouRZdKbiepWM24BR3kIy2qVnw1Cwj5xwLwOMWsxV2QVt67ybb9pBThvW85VNeyWAM3qvx9D6nu93GJkeXZThXJVk+qCVYgiwmKMdXd1DRR1EZbrWHffXkdRUcMsxspWwzVS1EWYlYlmJHMFhHhV3rDb87SthmsijFflEl0ad6pWw7VckSrG3E0WzowstRi9gfpOE2kUWoyqx+g7TQQM+hbDe8ydFk5Ci1EYyLNQu9HAt3v1Gai3cBZajNJAbqF+JA+kNJDLeAVgJ7QYxRC5ZSIjjfw+c/0UvrHV0K7VoL7FCHWiGslB32I0QZbvaOgBUBFg/Wd3uRBpZhvr6gBzNaAbyfoZAinAdwc50tS/4zuRKsCCnIYQp3GckKJ6mSqkoaJSiAjidbUm60P41eTzjgmI1dRUOGjmvgKpT2grHuaiL+D6hJoDZ+rz1SfUHHpUn69+LSsO3qrPV3/q+eZ7h9PVP1PUuK+Xh9EfkPhFga1+PKwcXr1sleqtb2LbVDwoVpYX7KtczuDMf+Gw4vrHPdc/MPt+mdpHjssyqkPb/z/2XvHFAXW+ekGS9qsX9JC29XAo7+y/5Cs2lq//6H5p+fqPN5vR8v0Fd8bCJbo7XakAAAAASUVORK5CYII=",
  sc = "data:image/png;base64,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",
  ac = "data:image/png;base64,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",
  oc = "data:image/png;base64,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",
  ic = "/assets/icon_anon-B5YvKg3f.png",
  rc = "/assets/icon_cati-mWXfw3xk.png",
  cc = "/assets/icon_x-DBD55XHy.png",
  lc = "/assets/icon_major-BvjI4Z5H.png",
  Bo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAADDklEQVR4nO3dsWsTURzA8ZwUHMQudhGyiItWXISCKHYTNIKD4OLiLHQpqAi6OAiijoH+CU4OCtpBcGipg4jgUt0czGiXQpGCcM6p8fe4vtwl1+/3s75c07v78uBe7pKOJElCKvbudFmWrT4ORVHUugNlWf5zzNqkKIb//UNt3hnlMwA4A4AzADgDgDMAOAOAm8Q17UQXGtY2roXjixffNva//Eej58QZAM4A4AwAzgDgDADOAOAMAG6m6u6XL66H48XdN+F1fmr7lOevN8JX3F/fyvr7KVe7h8NXnJytfEiH9Dd3wuO3NH8kXCfob+5Uej9nADgDgDMAOAOAMwA4A4AzALj9fPY80ev8M4lmP/7aDccvzMXX8bnb939sh+NjWCdIvaTSOXUGgDMAOAOAMwA4A4AzADgDgBt1URpe57+6vZB1xFLX+W137mi8TvBlO15nSK0TpO5HWB3spp67GFoncAaAMwA4A4AzADgDgDMAOAOAq/zh9I2zx8Pxuj/P771/EG9/+Wk4nqv3cjnr/ZdOzIbj+fcTxMdvL2cAOAOAMwA4A4AzADgDgDMAuFH3kIefJ3++1Q2P2Iefv8Px1DpAb+VUrWfk3Z3vU/3+uesAVZ8bcAaAMwA4A4AzADgDgDMAOAOAy3tYfQKm/Tq+7vcfN2cAOAOAMwA4A4AzADgDgDMAuKlbB3h082s4nvqevrZv3zRnADgDgDMAOAOAMwA4A4AzALjG1wFyn68/6Nv3zz8Ox8fNGQDOAOAMAM4A4AwAzgDgDACu8e8HuLcyTz/mod6VT+G43w+gsTIAOAOAMwA4A4AzADgDgGv8foDc5+sP+vZNcwaAMwA4A4AzADgDgDMAOAOAG3U/QEp4v8CzS8fCzXN/NzD1fH3bt0/9XsDqIPm7gJXOqTMAnAHAGQCcAcAZAJwBwBkA3H7WAVLCdYKHp+Pfz6d78i1eB1jszoTnbG3wp9IRdAaAMwA4A4AzADgDgDMAOAOAq2MdICVcJ1Cz58QZAM4A4AwAzgDgDADOAOAMQJIkiabT6fwFAeCnZalTAZIAAAAASUVORK5CYII=",
  Do = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAABXdJREFUeJztnV+IVVUUxu9t9N4sshLJlEntLSptnIcgoRF7GANn6MEnBxRCiP48Rr1EPgS9CBHkQ4kRPli9F0PTGElCKYjjH3QEBxFmrg53YJwgU+6E3F4KWuvYXne5z/bc4/f93tY9+5y97+VjrbX3XmffSoUQQgghhBBCCCEoVIseQCztdrvtaV+tVkv9na3v6/1+D8QNh5QdCgAcCgCcJUUPIG90DPTmCGjQA4BDAYBDAYATnQPExti85+Wx4+n2nCHv34seABwKABwKAJzc1wE+3bFD2KeuXBP24YnjufaXem2/6K2D1CkJPQA4FAA4FAA4991egBfvvD/TfPKVqP4XJy4Ju77ratTzvNADgEMBgEMBgFN4DqBjcNE1e7r7vOfhVsyP7c/7e9IDgEMBgEMBgBMdb615tHdvIHUO0EFdvW4vGzjn/aljfuzvRQ8ADgUADgUATvQ6QNnr8FPP+621fW8Iz3t89ADgUADgUADgFL4XkJronCRyv799Yav84Nmfg+0XD/cKO3V9AD0AOBQAOBQAOPd9DqBJPe83UTlF6r0CC3oAcCgAcCgAcLouB7jX5w3kXX6QmfcrYmM+zwcguUIBgEMBgJO8JlBj1QhOPtIXvP/0sS90/57uo/HWDHZbzNfQA4BDAYBDAYDjXgfw1tW/8e4hYT9jPP+jD94KN1DX+7dIu+gcodtjvoYeABwKABwKAJw83gsQto75w4ObhD114Lvg8/Z+/Lmrf50z7DXG580JrPutGr5ui/kaegBwKABwKABw3PHnDmfQiOvf/3hW2Dqm71o5J2y9F/D1iVPB/vfV5Tz/24GTwtY5wfC2F4Sddw5QeI2hgv8bSFxQAOBQAODkngPMNGUMXL4mrLFlX0q7NqKWJo4susa3b+grYb9f2SPsDublwfbJzxOoL3O1b7VuBa/znEAShAIAhwIAJ/k6wKuDzwn75pKlwtY5gKZnt4yxPT+EY257XMXsz6TGvTlA5vmRMd+K8a33BoLXZ3/9Sdjrf6vJ+505AT0AOBQAOBQAOMlzAI3OCSzGxi8Erw+NbhD23EG517Dq1pPCTr1W743xOqZ7OdpcLezXL8/L/lROwByACCgAcCgAcJKfD9DXt1HYY+PnXPc3rl0X9vzvN4T94sFVdzewu8SK8Wt7nxf21M4Vwo6N+XlDDwAOBQAOBQDOPT8jaGhwY/B6Y05/InMGnQNoPnx7TH7wSYcD+wcrxm/esN31vK1qOI2FfmEfWzsRvF/P8yeur/iflv8yb1yX0AOAQwGAQwGAk8kByvafP15i1+pH/ojrv/fxdcI+2pwVth3jJfsXpqLGQw8ADgUADgUATqYeQOcAo0/L/fuXZy4GH/jobZlC6PoAvTdgceaMXAc4Ozkt7OmGnPce2v9m8Hl578drBqb77Ub/4bU/W8HrVoy3agA1rAcgAgoAHAoAHHMvYPuVcE1edTR8//A237t02b2AMDrme+vqY9Fr9V5Sx3gLegBwKABwKABwMjmAjiF6XWDuoaZoL61KZeUNWYff05LvAuZ9LF6t9mC4wchfwlw9skXYs+/8ErzdvR//sDSnG+eDzVPHeAt6AHAoAHAoAHDcNYFP3LTq8OU8vy1fX69UW+oDJ83HZoT91O31wfb1TceF3Tr9krD9NXeSzDx+QZpFx3gLegBwKABwKABwzBwgNibpdYR2LXzuX/XA5uD1TA5Sdw7oG7kuYcX8otfqU0MPAA4FAA4FAE7h8Sjv9xC8Z+1alD3GW9ADgEMBgEMBgFOqeNUJOqfQOYE3pluULeZr6AHAoQDAoQDAKXX8uhPWukLsOoF19m7ZoAcAhwIAhwIAp9TxqxNSn3nEHICUGgoAHAoAnL8BF6DwHlKpItgAAAAASUVORK5CYII=",
  ko = "data:image/png;base64,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",
  Ro = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAABspJREFUeJztnW9oV2UUx3+/fnOik4YUWFNXGI3GKFhgbwb622AptF5U9EKDBf2hQoikQQxHWsxWsmUENsN80V6kECu0hUXifga9qEGzJMXRC5mljoo2sH/a/PUyzvfGczg99/dnnu/n3fk9z33u3d2X55zn3Oeem80oFIvFYqg9m81mtTFixk8bvN60z2+9H3h+7Xjr9WrjXWcZjFx7UADOoQCcU5P2gFafhvTcdFeq1zN48VtTf2tIgy7ZGjPFxlCxMQ1nAOdQAM6hAJyjxgBWHxXr05CEDz/VEezf0/FzmqfPdHd3B9u1Pzc2RtCIzWNwBnAOBeAcCsA5iRig3Ll5lfl2+CHVEENlenpa2I2NjcKu9hhBgzOAcygA51AAzlHzAJXOzWtc2fMljP9bsH9sjIMxQaFQEDbGBNUeI3AGcA4F4BwKwDnm/QBp5+YxxrCO3zt6m/xhNByzpB2DICMjI8H2SscICGcA51AAzqEAnFNjXhcruXlcl2cy4KMjx0cGf7xBnv/Zr4SdiBEqTLljBAT/3ZwBnEMBOIcCcE4iD5BYl4OPzZwJ+5xFb94j7IGM9Mnas4Welb8E2weP3Wi6noVG2jGCNh5nAOdQAM6hAJyj7wcosU/WcvPW/Qi47i917r/coE/XYgANzgDOoQCcQwE4JxEDLDSfjPsNcPxltzxiGq+ucTP8cv7/XNaCgTOAcygA51AAzqlJuy6ddQ8gEhsjoM//9aUDwq7dHE59zC39W9gNmU3CXrvm2ooJOAM4hwJwDgXgnNTrBCLaPn9rTR9t3X9s/TPCXr5d+vC67eHxG1ZKu+nW66GHLQYofod7HCXZlvGo4x99zXQ5CTgDOIcCcA4F4JzoGED14bDPv6cjvL8Aic0L9G7dpHcKMPrhx8LGGkGaj76w5biwh063mM6vHr9htWk8hDOAcygA51AAzomuD2B9jwD3EOK7hFq9AO1duNZ1TwfbB3YfCLZrTJ2V9qvTYR/9fHN4PGsMoYF7BrVHOZwBnEMBOIcCcE7qzwLM7xEoxJbGRZ+P+wP+eCJ8fP3vyi3aEG6+ec96YQ9Cu7bO12IIK7j/gzOAcygA51AAzjHHAOaaNMo6F98b2Lv4TmHXNUrbysF9Lwh7+ZPQAZ7/I3W3KydYczDYXG4fb4UzgHMoAOdQAM6JzgMM9PcLu7evL9gf9w8M7Q8/77/8k9QortsT6/TOx4XZteo5YV86IruP/fCGsL85Jb8HsO3e14PXd2FLsLnq4QzgHArAORSAc1J/FoAxQbYlHBOcWyvtEydkTLBr9rDsAMn04vfgo4fPCFNbh+fDZfQqvo637iG0whnAORSAcygA56QeA5yemhI21rFrbmoS9uoV4WcL/bs/CrbH+mjME3StgvEPhY+PBa93aOZksH8+nxd2wbgHEOEM4BwKwDkUgHNKXh8AscYIvVvvD473WD6s4VLvydN8+NAMHiHb0afnm6Udi1YDijOAcygA51AAzlE3+GGdQHQpmPtHH582iRhB2X9wHmIELbeurcMR9OHlplAoCBvzAIwBSBAKwDkUgHMSeQDzt4TLjDWP0JCIEWy59ljGx8N1AJH29vB7FFb+I4bju4HkXygA51AAzslqPv9uqL1rZfLzvcH22O/eWcEY4dOjR03HW326FYwB5q7eYToe7zdrBJEgFIBzKADnJPIAms8vfPG2sJe8Ez5BDlxmLifttL+FW2m0dbwWQ6DPn/xsv7Dna64Ej79UK1P/+CgAYwLOAM6hAJxDAThH3ROIPh/JdYfXmbkj0D4GHbpsNYdOnl1q6o/r4oUeY6CPR+oPXZU/KPeXM4BzKADnUADOUWOAfNtTwv5kYoew/1wm+6+YhW/YdNZKe3F4HYugz49dF9dD3qHSz/81WqHmUb5NtuP/o3WXzONMKuNzBnAOBeAcCsA5agxw+P1hYW98WNkfgD7+r0XCxPf9+5R3/zTSXhenjX2Pn3wWgPf/3fcgkTIhzYceuE/Y2n4MzgDOoQCcQwE4R40BsG7fy9tkDIC1ddEH9WUeNF0Q7g/A7wCem70s7HybvJ7YdbFG2vv28d2+1nUyBsD7j+x7ZSLYrsEZwDkUgHMoAOeUvEZQ/1sfmPrP5eQ6Pa/0x5gjdl0cC/p0jZklF+UPcP0bd+4IHq/9PXwvgAShAJxDAThHjQFe3Clz0ZgHsKLl/vEbQK2dsr3U62LE6tPTLq/wdWZY6aG1S1gfgAgoAOdQAM5JvT6AeZ09FvaZRVjma9ejnR/zDPXzyvkjfbpWp6/ScAZwDgXgHArAOQn/VO11AitNtft0K5wBnEMBOIcCcM4/eBxeOtUJT3UAAAAASUVORK5CYII=",
  Ft = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACABAMAAAAxEHz4AAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAABhQTFRFR3BM////+8sH4qsEoJDhMJjTe2y0AAAAichSjAAAAAF0Uk5TAEDm2GYAAADISURBVHja7dkxCsJAEIXhdNZeYRDtkxMIQzzB4gVkbCUK7/oOrEZHgq2z8v7mscV+TaqwHWMsa6hNIoKQiOx8CKQHVgCGWl+BaWlAIC8A4DqEHl/+YypyIUCAQCtAL3MEGgVEZGtmmLupqohsfOARSA+IZ2YnVfU5AyilHH1U9VBPhUATgKqOZlavPHs7EUgOeBXZ6JcINAisQwTSA4h/rqq69ysEmgGi8wJGM4tD4J+BGGqLALzOI5AeiE6s8wj8GuAjEmNZuwMoowLyPmOZ5gAAAABJRU5ErkJggg==";
D("main/startTransaction", async ({
  pixelId: n,
  newColor: t,
  buyerWallet: s
}) => (await F.startTransaction({
  pixelId: n,
  newColor: t,
  buyerWallet: s
})).data);
const dc = {
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
        image_url: Ft,
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
        image_url: Bo,
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
        image_url: Do,
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
        image_url: ko,
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
        image_url: Ro,
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
    getProductsStatus: u.idle,
    useProductStatus: u.idle,
    order: [1, 2, 6],
    selectedCurrency: 1,
    crypto: [{
      currency_id: 1,
      name: "Stars",
      image: tc
    }, {
      currency_id: 2,
      name: "TON",
      image: nc
    }, {
      currency_id: 3,
      name: "NOT",
      image: sc,
      master: ut[3]
    }, {
      currency_id: 4,
      name: "USDT",
      image: oc
    }, {
      currency_id: 5,
      name: "DOGS",
      image: ac,
      master: ut[5]
    }, {
      currency_id: 6,
      name: "ANON",
      image: ic,
      master: ut[6]
    }, {
      currency_id: 7,
      name: "CATI",
      image: rc,
      master: ut[7]
    }, {
      currency_id: 8,
      name: "X",
      image: cc,
      master: ut[8]
    }, {
      currency_id: 9,
      name: "MAJOR",
      image: lc,
      master: ut[9]
    }],
    limitedGood: null,
    limitedEnd: null,
    showLimitedGoodPopup: !1
  },
  Mn = D("shop/getProducts", async () => (await F.getProducts()).data),
  Qn = D("shop/useProduct", async ({
    pixelId: n,
    productId: t,
    color: s
  }) => (await F.useProduct({
    pixelId: n,
    productId: t,
    color: s
  })).data),
  Uo = re({
    name: "shop",
    initialState: dc,
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
      n.addCase(Mn.pending, t => {
        t.getProductsStatus = u.pending
      }).addCase(Mn.fulfilled, (t, s) => {
        s.payload.goodsAvailable.forEach(a => {
          t.products[a.id] = {
            ...t.products[a.id],
            ...a
          }
        }), t.getProductsStatus = u.fulfilled
      }).addCase(Mn.rejected, t => {
        t.getProductsStatus = u.rejected
      }).addCase(Qn.pending, t => {
        t.useProductStatus = u.pending
      }).addCase(Qn.fulfilled, (t, s) => {
        t.useProductStatus = u.fulfilled
      }).addCase(Qn.rejected, t => {
        t.useProductStatus = u.rejected
      })
    }
  }),
  {
    setProductCard: qe,
    showProductCard: Le,
    hideProductCard: Sa,
    increaseAmount: xE,
    decreaseAmount: yE,
    setAmount: ks,
    setAvailable: uc,
    addAvailable: En,
    subAvailable: Rs,
    setSelectedCurrency: pn,
    setLimitedGoods: vE,
    clearLimitedGoods: wE,
    showLimitedGoodsPopup: pc,
    hideLimitedGoodsPopup: bE
  } = Uo.actions,
  Ia = n => n.shop.crypto,
  mc = Uo.reducer,
  Us = {
    getProducts: Mn,
    useProduct: Qn
  },
  bn = ({
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
  Ac = () => {
    const n = l(s => s.shop.selectedCurrency),
      t = l(s => s.shop.crypto).filter(s => s.currency_id === n)[0];
    return n === 1 ? e.jsx("span", {
      style: {
        paddingRight: 4,
        marginBottom: -4
      },
      children: e.jsx(bn, {
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
  Ie = ({
    num: n
  }) => isNaN(n) ? null : new Intl.NumberFormat("ru-RU").format(n),
  Oo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACABAMAAAAxEHz4AAAAIVBMVEVHcEzv7++7trv/sQAAxvb+XTUAieJkY2UaWbc9OGcbGx4WugEBAAAAAXRSTlMAQObYZgAAAM1JREFUeNrt2c0JxSAQBOC0YAu2YAu2YAu2YAu2YAtW+Rh4gUE0Iddh9rLBON9pwfxca8055/WhDOgBCJdSygmZ/zKgDaCewrXWmnPOuDagCpwxDqN67x1rBnQBDmMzh9ERHmMMA5rATrzD6LuwAS0ACymlhM5rrbWGjiA6hw3oAag1HGOMfLDwYWJAF+BwCCGg80DxIBlQBd7DPGwGVIH38LrXgBLwPcwfqwxoAfxAsQufBsmAFsDIGj5BBrSAFUHtXkgNSAD+B2vg6f4Pseby+y+jC6sAAAAASUVORK5CYII=",
  Mo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACABAMAAAAxEHz4AAAAFVBMVEVHcEz/3Jr/6ADjygD/AAC5AAAAAAB/sfDAAAAAAXRSTlMAQObYZgAAAJJJREFUeNrt2bEJBCEQQNFrYVqwhWnBFq6F338Jx4IiyIG76ez/iRjMiwyE+Zj9i0MC9QGA7yEAgarAGu6HJiJQHTgnICAgIFAbAHgGrARqAACZmROIiAC4zt573+8TaK01gWLA6O5DyswUqAVcMXoCzGGBCsBqAjGCVYz2D4ZAbWBP4EXA6AQACJQB3LEImO39AJS0GBsvGYIKAAAAAElFTkSuQmCC",
  Qo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAABVQTFRFR3BM/////2U1/z4F3SwBrB4AAAAAkQwbPgAAAAF0Uk5TAEDm2GYAAAEVSURBVHja7dvBDsIgEEVRZbD//8nGQjKlY6aMGMrivuDC14BHxIUmfRBCFss2IQAAAHBfOU2IOi4B8hmSTJzSmR8FaGSsTDIAiO6A38YBksYi8TNgMrgDKboDE7bABcietA+RXNO2sdK2PkBzWkATKE0LAAAAAAAAAAAAAMAl4DkhAAAA6AFsbcxFa+2ZDwAAABfgrGramEpbAAAA/BnQPgMAAMBNAA0AAADc+fw6BgBgMQD/FQMAAAAAAAAAAAAA4AJyk1dN28ZK214ApIx2gdqVR7jUVjoAGtEFikdZgVLbEuncgfM7OKwcLLWtF345A3JcIly+DijpOwNfP8Nc60CprfZ5lW8Bd9kAAHAfgNtKCVksb9I6sf1BNvNjAAAAAElFTkSuQmCC",
  hc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAAp1JREFUeJzt3bFq21AUh3E7lJrMnbp1LXmDDskDZSx5CtOpZMybdGmgGbOFQKdufoAMwV7cWcfgy0X3Slf3+36bkCIJ8ufcoyMbr1aSJEmSJEmSJKln67lvoHXH4/E45fXW6/Wk/5OLKS+m9hgAOAMA92HuG2hNas3fbC6LXm+/fy96vlxWADgDAGcA4LrvAcY+x8c1f+yaXbqHGMsKAGcA4AwAXHc9QO3n+NTfj+0R4v3XfjdgBYAzAHAGAK67HiDX/u767P7N9nGw/e/b4fzxiblB3E4dX7snsALAGQA4AwDXfQ9wssaGNX/359dg+/P9zfAE29XZ/bvb3+NuMCj97iHFCgBnAOAMANzie4DSn9s/PP8dbL89fCp5+hN+JlCzMgBwBgBu8d8NjD1A7nP/WF+ePg6vl1jTp/7uX4oVAM4AwBkAuMXPAUr78Xp1dv/3ry9Z52ttzY+sAHAGAM4AwC2uB8id/Zd+7u+NFQDOAMAZALjF9QDR2Nl/6rk/yp39t84KAGcA4AwA3OJ7gNri7P9n6AGi1mf/kRUAzgDAGQC45nsAZ/91WQHgDACcAYBrvgeInP2XZQWAMwBwBgBucT1Abb3P/iMrAJwBgDMAcM31AM7+p2UFgDMAcAYArrkeIHL2X5cVAM4AwBkAuOZ7gNpos//ICgBnAOAMANzsPYCz/3lZAeAMAJwBgJu9B4ic/U/LCgBnAOAMAFxzPUBt9Nl/ZAWAMwBwBgCu+R7A2X9dVgA4AwBnAOCa7wHibD/3d/vi8fTZf2QFgDMAcAYArrkeIK7J8fMBq8z3/bl6n/1HVgA4AwBnAOBmX+9yvxdw0hNkSj332wMIxQDAGQC45te73B4hF23Nj6wAcAYAzgBIkiRJkiRJkiR17D/jkLq5vlfVpgAAAABJRU5ErkJggg==",
  gc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAA39JREFUeJzt3LFrFEEUx/FdUS8RUlwpLNFGIYiFpjJFQCytbNPG1ipa+wdEq2ut06cQLLQRPBvFQkVIGpWAjZDCIhyCa5v3zuxkvL3bmft9P93cXnYn5Jc3b2ePKwoAAAAAAKCi7HoCqanrup7l9cqy7PRvcKbLi6N7BEAcARB3tusJdC205vd6i61ebzQ6avV8k6ICiCMA4giAOLkeIHbNT23NbhsVQBwBEEcAxGX3LKDtvfppr/ld7/WHUAHEEQBxBEBc8vsAbe/Vx67xk57fzz+1noAKII4AiCMA4pLrAaL36h+tR50/tKa3ff7UewIqgDgCII4AiEuuB/CCa/LGb/v+G2/bvf7268bjow+37Liw80v98wVUAHEEQBwBEJd8DxDLr8ljds6ZoV/jQz3GvKECiCMA4giAuPx7ALemh4Tu68d6giLuWcCPNy/dK+ejfn7WqADiCIA4AiAu+x7Ar7mvfv4x4829BTP29/mhfQB//EH/SuN8tlYaDyeHCiCOAIgjAOKy7wG80Jo/tre/XTQeH3u+H9kTpI4KII4AiCMA4uauB4gV/PzAnKMCiCMA4giAOL0eIPLzA7k9349FBRBHAMQRAHFyPYBf059+udb4/tye78eiAogjAOIIgLjseoDbL5bMeGfphDd2ZP37TffKp07mcVpUAHEEQBwBEJddD+Bt/LpnxsvVt6leb+36XTPePZzu9aaNCiCOAIgjAOKy7wFC/L5BUdieoajs8MCt6bvuvr7qtzSxRFABxBEAcQRAHAEQRwDEEQBxBEAcARBHAMQRAHEEQFx2zwJWD/bM+H11taOZ/NvjC+/MeLNYOOGdaaACiCMA4giAuOx6gCf3L5rxw2e2Jxge7ptx1b/U6vWHH5+bsf+ewDvL7n/KTi85VABxBEAcARCXXQ/gba18NuPB0H6Hj983CFkNHB9EnS19VABxBEAcARCXfQ8Q4vcN4r8jqLnHyB0VQBwBEEcAxBEAcQRAHAEQRwDEJb8PMBodmXGvt2jGX9dmOZuwy26fwM8/NVQAcQRAHAEQl1wPUJZleXxc13V9fBzqCWZt4D6DGFrz/e/XNSqAOAIgjgCIS64H8GJ7Am/SfYNJ7+tTW/M9KoA4AiCOAIhLen36H75H8GL3DXK7r49FBRBHAMQRAHFZr1+nEeoJYuW+5ntUAHEEQBwBAAAAEPQXKwzH8ovgV5cAAAAASUVORK5CYII=",
  _c = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAABXtJREFUeJztnU+IV1UUx9+INDrgYsLAkfGnBZqgQ4muXCTjIkSFaBNks2qgTUQQE0SbzI2KuhBp509QyxAXImgM6hgKJpGVUWk6+Scd/AU5zmJwnN8IjgtX5zznHg/3Xn+//H4/u/Pe+937hvlyznnn/isKQgghhBBCCCGEoNCSu4PJycnJnO23tLRk/xueZ6Y1+gVIY6EAwKEAwEkeP62Y39o6M6r9ev1+8D5zAh/0AOBQAOBQAOBM9/7A+12vY3510biwew52C3vilyvC/rzvxWB7OifIXXdodrw5ED0AOBQAOBQAOGYOkPu7vm/1HXVFxvzXX/pd3h6Z4erfqhvEvn+jsf4+C3oAcCgAcCgAcNx1gNJ3+KdvyAc2PBCm9V2//dRs4/ku2d+v1vO+uoFmy/q1wfs/X78t7K17PxH2rWv/BH9/+eIlYZ84dFHYy1+eG/z9Z0e/C973Qg8ADgUADgUAjlk31nUAKweonT0p7IE7D4PtX/ivK3jfi64b9F6RdQOdA6SuA1w7v0/YJ4/2C/uDjQeS9qf/Ho4FEBcUADgUADjuOkAsPW+9KW2jbjBcrQl7x6UlSd8ntpaee45jbugBwKEAwKEAwInOARZ+e1fYZyq+39c+PC1sq25g8eXYCnXlj6j2/m/ouo1VF6AHAIcCAIcCACd5HWDD6NvCHhqT4+M9ke3vGhkUdqVzaWSLYXLPGUzdvreuQA8ADgUADgUATikHyL22rrt/lroSzhnK5P2u1zF5fLh/iiefzI8DPwXve9vTDGzaLOx1O09P8eTTQQ8ADgUADgUAzvTYtX+D78p5+N1xIS6aL9rOC7u3mDHFk4+xYv7Y9b9d/Xe90q7slVHtndt/yPW8F3oAcCgAcCgAcEp1AGstnZUTHJh1WNgDdTm+Xy3mu15Q81H7QnnhXl3abVHNF1eP7Bf2jd+GhL3gtc64DhS527egBwCHAgCHAgDnma8L+H7NqLBLawnrxlrCe2nXEsay5P1vXM//uee9TG/yZObMe1XUef69dVnMEaQHAIcCAIcCAOeZ5wCNJvccPx3jvTmChXf8v3bzL2F3VBaLnIAeABwKABwKAJyGrw1MjbU2MPceQaljvubYx6uErXMCayxH5wT0AOBQAOBQAOAkrwMs+OGF4P3ebWfUlfDzZQbDt0fCt62Y3+y1fQsrx9H36QHAoQDAoQDAyT4WoPcS1nUDC73uwEvu/lpVzqC/05sdegBwKABwKABwonOAm0Oy1n5j5YSw9X4Ane16fwCJXldQO+t7H71HUer+Or5SMX7bU79aEnTtn+cGkigoAHAoAHBKOUDq8fKhEWvPH4m1LsDsz9xjKK6/d9R5Bhodo2PHClLHfA09ADgUADgUADilveS9ewbpWn95H8Aweq2gl9z9fX3kuLD1OYf6nEKNPrfQizfme89KpgcAhwIAhwIAp1QH0GfMWDmBXt+v9/61KP/eS9r+dK3/wm4Z87efmi3svtXh+73Lzgm70ecE6v8vPQA4FAA4FAA40fMB9Dl/uWvxmtT9lWv9co5gq4rpml3LjHULifF+92voAcChAMChAMCB2yPIYrhaU1dkDqD3KtZjAXqsQJ9z6MWaj2HFfJ4dTIJQAOBQAOAE40NR+OcH6BjpjYGl8wCc5O5P1/qtukDsHEvvd31HZbGw9d7AGnoAcCgAcCgAcMw6gHd+gKbSudT3RvoMICe5+5sw1gVYMTv1fABvzNfQA4BDAYBDAYDjihdF4a8LVBeNC7u8l28YfRawl9T9WbV+HeN1jE6NN+Zr6AHAoQDAoQDAiYofRVHOCXKfydNsxI7HNxp6AHAoAHAoAHCS5wDoNHvM19ADgEMBgEMBEEIIIYQQQgghhIDwCOGz0zOqwEkRAAAAAElFTkSuQmCC",
  fc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAAw1JREFUeJzt3b9rFEEYxvG7ICYGbASLQCB/gAgp7AKCIGInVkJIl3S2Z2MjloF0tpZX2aWzEIJFuiABu6QKRFKkSBGInBZnPe/JLG9mbmdnn++nm/sxuwkP7/tmudwOBgAAAAAAAAAAAAAAAAAAoA+GpU8gt+l0Op3n/sPhsFe/s4XSJ4CyCIA4AiCu8/0stacvLt5LOv5k8jvp/V2fGagA4giAOAIg7k7bB2y7p0/ePQ0f2PwbLP/8OAnWX3Z/pR3PzAzen7ftmYEKII4AiCMA4pL7TW09/fjycXT/vZ2VpP23T5ai+1ulrzNQAcQRAHEEQJy7fzT1/L719NpmBu9MQAUQRwDEEQBxyTOA7fnqPT33/u9HD4L1p6vTYG1nAmYAuBAAcQRA3NxngIvDb9H9Vjaehw+I9fT1hz+j+9vjMwMgKwIgjgCIa/0zgU0u3n6PPr/16kW4bui5492wxx5/tj097Ml7O49c+49G4W7r+/Gebo9XGhVAHAEQRwDEdW4G8Mo9M9Te072oAOIIgDgCIK76GcBr/Oag4RV193QvKoA4AiCOAIjLPgM8+3rfPPI6WJ1fnQXr043cZ1CXjzdPos+vrq6FD5jPA6SiAogjAOIIgLji1wH6NjP4e/rZ/1/YEiqAOAIgjgCIKz4DeLU9M9TW072oAOIIgDgCIK66GcDLzgznlfV0O9PkRgUQRwDEEQBx2WeAg5fXwXrm+wHMn/Gb16bn9pzt6R+Wj6Kvn/l+gMznQwUQRwDEEQBxxa8D1D4zpPb0wXLuM/KhAogjAOIIgLjiM4DXvGeG2nu6FxVAHAEQRwDEVTcDeNmZYbzf757uRQUQRwDEEQBxyTOA/b762fsG3o2/v+P/6zdvzfcNjN8fIBUVQBwBEEcAxLlnAHtPGnsPIW+P6tvM0HZP994jyKICiCMA4giAuOTrAN4eVNvMUFtP96ICiCMA4giAuFb7zW3YmcFrdmbwqa2ne1EBxBEAcQRAXKf7022kzgxNut7TvagA4giAOAIAAAAAAAAAAAAAAADQM/8ACXZHRjaU+NYAAAAASUVORK5CYII=",
  xc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAABXVJREFUeJztnTtoVEEUhu9KdBVNEdEiImijIOI7jQlETCGigpWFz0JLFQVjn8pKC1FLbXyhqQIqYqFYiI2PoAbBNBoiATFG8EUEifU5V+ZwmJndu/7/1529O7uT8HP+szNzz60VYMzMzMzEjK/VarVUc6kCs5o9AdJcKABwKABw/is/Kwq/x9fr84LXp6d/ub6/1WoEZgBwKABwKABw2po9AS/JPf7lZhH/fvHON17VCNb8qlYjMAOAQwGAQwGAU/kawPLUWI+fOPpYxOferlbjVwbHt3qNwAwADgUADgUATqV+k/4L7Znacy2Pn7w8IWLt8WcfLso6vv3IZBHC2mvIXRMwA4BDAYBDAYBT+XUAkxuzRTj5RHp256UtIj5TWgcYEXHZ4+U6gHe8dx3Be/4gFmYAcCgAcCgAcFq+Bth6v13E41MbRTza5Bqhv0/Od/3ij/KFYm7RTJgBwKEAwKEAwKlcDRB7754md41gefzQ/E4Z/+xSM3xTmnMjYQYAhwIAhwIAp+E1QOpz/Y+2fxPxxJMXIt73bVlwvLdGuD3k9fg49P8r9fkAZgBwKABwKABwstcAsef6vzy7GLxe7zqmXpkjounTcTXCiptf1Cs+j9/9Y1rE6xe/FvERtRdgnQ9IXRMwA4BDAYBDAYDT8HUA7XGWx1vkrhF6x+S6gMb0+HG13z8lY3P+mc8MMgOAQwGAQwGAk7wG8K71P706GLy++eCeqPnE1wgLRXxt6IGIYz3e+vtzwwwADgUADgUAjrsGSL2fv3zd0uD16tUIaT3+3rPvIt7RtSD4/tQwA4BDAYBDAYBTqgEa3Yu3/fD14PiRK/uD15tdI3g9vmowA4BDAYBDAYDTVvVevM2uEVrd4y2YAcChAMChAMAprQN4e/FaHp+7z17uGmHn+cfB616O9mxK+nnedRt9HwEzADgUADgUADj2eYAW78WrawSrJtCef7xjRfD9p1bJ+en/R33D0+B46/s11rqMxrq3kBkAHAoAHAoAnPj7Av6zXrza8y2P7++T8y36Pgc//9PXPyIeHBkOvl97+J0Hr0S8a9taEesawbq3kBkAHAoAHAoAHLMGMPvo9RgfkLkXb1EsLFKinwNoebzuB3Dg1lYRX9gw6vp+6/7/gYGTIt617WFwvLVuwAwADgUADgUATvQ6QOoaQffitTx+aH5dxpH9+PudHt/ft0bEw2r83ROyxtEMymUG83f+6+dyb6GrWxVJTpgBwKEAwKEAwDFrgOz9+I0awfb4tJTXAcIev/3QkuDnec8Uas/XePsEch2ABKEAwKEAwIleB4itERrdj99CrwPEerzl2d79e+95AAtmAHAoAHAoAHCyPy/AqhFi+/EP/5C/0y1Wq/sE9Fq99vxYj7ew9u+9nm59voYZABwKABwKAJxSDWCfKVP99K39foPRveF+/F6Pt/CemfP+jveOj32/F/YHIAIKABwKAJw27Qn6/nG/B6atESwuTKlz9+qZPdb8Yz3+fffvqPHW98c+G9iCGQAcCgAcCgCc0jqA5TmNrhFiPd7C8ujuNTuD13vHPohY712871YH/43vz70OoGEGAIcCAIcCAMd9HiB/jRDn8d79c+t3/Lm3sl+Bvk9haYc88/i8Q47vHZPv1zVCUfj6B6SGGQAcCgAcCgCcrOvM/8Lb396L9bwD6/kGGt0nUKPH6xphbNzXn0DXPNwLIFmhAMChAMDJfl+AJrWneWuKci9i2Q/AWyOU9ypk2Oi1fS/MAOBQAOBQAOA0fB0gNamffaz7A5Q8Xo93enzu3/VemAHAoQDAoQDAqZQfpcC7LpD63r6qebwFMwA4FAA4FAA4LeVXKYg9j9BqHm/BDAAOBQAOBQDOX/7wrWuOIpDoAAAAAElFTkSuQmCC",
  yc = "data:image/png;base64,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",
  Fo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACABAMAAAAxEHz4AAAAJFBMVEUAAABHcEz//////wC4uLj/oQCampoA/wAAmf//AP9SUlL/AACcsFD9AAAAAnRSTlP/AOW3MEoAAADGSURBVHja7dlBDcMwDIXhUCgFUxgFUyiFUBiFURiFUhi5vUm2FFlJc97T+y6Vmvi/+pB2TLSF6V0FqAJt4AOD/LaBAnyBOnQtjMEGCvAEfmZDz/AKV5ERBXgCBlc44RFq5A0K8Ac+cMIuogBnwMGCw13EQwcFuAIdPNhCDiUF+AL10Cd6YaAAV8CgXF6yoABfoC6WZDccFOAKdIiBLQ8dFOAK5A/fqMtHAZ7AAUPklg9yVgGeQEbqovGiPlAo8PcBvbkqMPoCnDifKjhoeKsAAAAASUVORK5CYII=",
  vc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAABMZJREFUeJzt3b+LVGcUxvGZZNlFXYlEyKi4aQMxmEljkVgEBQXRv0HXQiFtNJ1VOjFlfhjEKJZaKUpMoWglKriKjYUWGlw34EJsRDFM6vNc8549vHfG7JzvpzvcmTv3Lof3nPve997tdAAAAAAAAAAAAAAAAAAAwDjojvoHB4PBoM39dbvdkZ/DOHnvXR8A3i0SIDkSILmh10+v5r+YsDn4wT/24we+PWXi48f2tnNg/yFbT8EIkBwJkBwJkNyE94G2r9ujNV95JfrC5bs2/uOOiX/9YZ+J9fS88x23HoERIDkSIDkSILlGPdMa2H09WfUDg8nXJtYe4OuvDha/f+f6L8XtWvP7/c0m3vhR+fgOHjptYq9H8Cy3HoERIDkSIDkSIDm/Bzj+ZXkPs7dDP/j3yjfF7TovoLyar7wewDPuPQIjQHIkQHIkQHJuDxCl1/lRw+4BtKZ7vPUHbfcIatg9AyNAciRAciRAcm4P8Pth+5Htm8ol6drsJ8XtW95/YOLoeoBbt24Ut58/+7OJtQfQkqo1Wmu61wP8+Vdxc2du7p6Jo+sTPLU9AiNAciRAciRAcuF5gGhP4JmcLfcAXs1X0R7Ao38Or+bX+v7oaO89MAIkRwIkRwIk5xbEtp8LaBxAy1PdtWsEPbU9gNb4PTu+CH2/7XkERoDkSIDkSIDk3GcDo3PNS3i2Tj9f3B6lNbIh2BO0XfO3bf009P1ezx7gke/svYn+Zx+bOLo+gREgORIgORIgObcHqKU1Sa/T1ZMFW6O8++meaE9Q68Klqyb2rvN1nkJ7Bq35+veYu//YxFrzPYwAyZEAyZEAybW+5rzxbKFc19+cmzfxwkLsQtur6V7N1e9Ha7Rnfv6ZifX8vP1533/y9LmJv5ndZmLuBSCEBEiOBEhu6PMAav36dSaenp428cOHj4rfj94/V83r5FMm0rn1Tsded+vcvB6/np/X4+h1vfYIJ85cNnH0/j9rAlFEAiRHAiTX+ppALTnR5/lfvbLvFVxcXCx+3rvO9tbZe/Q5Be0RZjasDe0vOg+xZ+fnJq6t+YoRIDkSIDkSILnGPEB0TZ/Smqlz1/1++YCmpuy7ifW6WnnbPUuoqSbW89P78Xr/Xrn3MoZc8xUjQHIkQHIkQHITtev4la4B1Bo5s6E8t+7VdL1frnPxq1fbuFbtcwvaE3hr/DxtvzeQESA5EiA5EiC5xjxAtOar6Lt1Pd7ce3TNnUdrrPZI0XkD5c0TjBojQHIkQHIkQHJdbx2/PqunvHXsaveOWI3W5/O962btAWZ65bl87VmG/T6EqLfMQzAPgPaQAMmRAMm5PcBPv10p7iC6Js7j1XBvjaFX84f97t0RvFeRHgDtIQGSIwGSc3sA73/4eHQu/8M19n79qpVT9vNOTa920inRFy+ZcHBul4n/b//7txYjQHIkQHIkQHJvey7AxNHnAJSuCVTe8/hRjev+Tc79d6fmqyXM/S+rHoERIDkSIDkSILnw/w1s7KCy5NXOM+jc/sIKuz6h92Ovav8NYzZPwAiQHAmQHAmQXLhetX2/u7Zkas33nH550cSHB/urfl/RA2BZIQGSIwGSG3m9GvaaubYtt5oexQiQHAmQHAkAAAAAAAAAAAAwxv4Fm/jXETIKTbYAAAAASUVORK5CYII=",
  wc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAABXFJREFUeJztnU9oXUUUh2+aNBKxjYhULF2UYnAhxkSkYAXdtGnRBA3FRSStFq2oOxHdVAWFLlqpghupsfbf2xUEqdUk3dSFLRQsScDSkkiChmoCSq0hQpombtycc5OZHOe+vNec79udzLy5w8vvzfndmblzswwAAAAAAAAAAAAAAAAAAAAAAAAAVgI1y33B+fn5+eW+ZjmpqalZ9u+wSFZVugNQWRCAcxCAc+rKfYFYzr/dUugKszCMAN5BAM5BAM4p3ANYc/7c3+dEPD06UnSXkrir+ZWytp86L5I6D8EI4BwE4BwE4JxkD1B0zv9t6EJql5IYGxyv6PU/2blTxD+OXhNx6VKx3w8jgHMQgHMQgHPMHmC5c37T3V8Yepdlw9dt9+0652/7qE/EK23uX8MI4BwE4BwE4JyoByh3zrfm+BxHv5VxZ7h6as5PnXuvtj2RjADOQQDOQQDOyeWzonP+rda9wQ40fj0XLI8Ru++vdM7X6O83de6f/QCQBAJwDgJwTnQeoOicr/nrWanBxue+CX9gz9Om9q1U+7N+RfePEcA5CMA5CMA55v0Asbn9dcb2Lt56UMTDnV8F6zcdVX+IzP1vfGSDqT9Fz9VXu6dgBHAOAnAOAnBO4c8G6py+ufZqsP7G0hOm9rVHWLt3f7D+jZ598vOll0VcdIrWFqLa1v81jADOQQDOQQDOKdwD6Jx+sVuWa0/wwNwREY+skjlaE8v5sfoxT3B/8+Om9jXaU2gLoNf/Kw0jgHMQgHMQgHPKfk7g1hNXRHxjT/i+O+YJjv9zRsQvNjyT0Ls8uecWumV/Xn3rWPDzrU++JuJHn3pdxLvulfXL/fx/DEYA5yAA5yAA55TdA2j0WsHW7MoiNRems3RexMe7F6n4H1aPEMv5HW2twc/HyocPfxAs157h0vefiVivLfBcACSBAJyDAJxj9gCp5/jpeYHeoXD9tgNHguWRLYE5j6Dr65yv7+N1Tn9/v8zJVvQ8gObDfdIDlNsTMAI4BwE4BwE4J3o+gE4pU0PyTJ+YJxgZkDm27YCtgzFqZ1eb6g+f2i1i7QFO9w2KWOf8cz8cFnHjtM1GfdzVIWK9FnB5TYuItSfQ/dGeAA8AJhCAcxCAc8we4Ozb20Vsffbu/KzMud27TB/PYfUAOe64KcJfJ+QevrXrw7+RBnXMYf0LyhOcnfnfXcuyLDvY/qWI38nk/gi95xAPACYQgHMQgHOSzwlM9QSbuqQnKJ2U5dojJOd8jfIAeh5gR9tDIp6uk9fXHkBTuzv8aGDtd+Hy+X6V4z+Vv1k8ACSBAJyDAJyTm8jWOUR7ggVyjohTPcGWOnmfWzqp9gN0mZrLkVsLyML7DXr7fxLxjtmbi9RcGH0Ssm7v9Gq5IaL9zMMinuyZNF3PCiOAcxCAcxCAc4p4d7CIrZ5A3/dvqdOx9ATDp2R50/Mngv3TOd9KS0uziHv7I5sYI4xf+1PEf1yfEvHmnvuS2rfCCOAcBOAcBOCcpbwvIDgvoLF6gjXqSJ6xC/IdP1GmHgsWj/1sbC9Ce1tzsHxc3bYPDEjPsGH9PSLWHkDz3hu98g+Hwv2zwgjgHATgHATgHPM8QGy92bp2kKcvUm5jW6GtrTwYAZyDAJyDAJxT+BlB1v0Elabp2KiIO7ZvErHeI5i1hOcBUtH3/Z8feknEB9X+hck7J0S8hD2d4v/DCOAcBOAcBOCcqn6n3VKI5ryZelm/fiZYnkM9NxDzMLG1AM3g5V9E/O6b8vwAnfOt5x6um5b7C/AAIEAAzkEAzrntPUAM63v7rJ6gaCYafg+W65xuBQ8AAgTgHATgnBXvAaxU+7t+NbwvAJJAAM5BAAAAAAAAAAAATvgXtprTE+PHJ9wAAAAASUVORK5CYII=",
  bc = "data:image/png;base64,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",
  jc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAABQxJREFUeJztnUtsTVEUhu/xKCUhEoQgqQ46IaJCgkTMDBQjpuiAYmIiBoQIMRFGEpSBMDUgrorHwCPxSK5oCRMDOpAQkbQRiltcU2td9srO3ufl/7/Z6tk9+9zbv2v9Z5999q5UCCGEEIJIkvcFaBqNRiPva4hJkiSF+47/ZEzeF0DyhQIAhwIAJ/P65Fvjk/GT07qUVGiMfvFqn7dHYAYAhwIAhwIAZ1zaHVg136rx1b5HIl63ZpGz/dsPMh4YeC7ixYsXOY+HYn0e7RH095O1J2AGAIcCAIcCACd6vfGt+brG6xo9d6b8/RevPgVcXXwGBwe92q/vWiFia9wgbU/ADAAOBQAOBQBO6h7At+YPDxerxodieQTLE9ADkFShAMChAMBJ/VmAhR6Lb2try+dCUkI/u7h2K+6zh1CYAcChAMChAMDJ3QP87+MAoZjPVgLHCZgBwKEAwKEAwMndA1hz9jRF8wgLO6Y4j/ve92c9p5AZABwKABwKAJzcPYDGmqdveYSsiT22//P7iPO49gihnoAZABwKABwKAJzMPcCr1+9F3NE+y+v3Y7/LlzbVW/0iXr+m09l+7IRJIq6f+yobXFFzBg1PYMEMAA4FAA4FAE7hxgGs+/yieQBd40PRNXzJ6p0irnfL/9mWSmtQf8wA4FAA4FAA4BTOA2jmzZH3uZ0rNzvbP713WsR6rF6PQ2g+fJTzDYaG/e6ra7XHIj68f+c/WhYDZgBwKABwKABwCu8BNE/unHEe79mzXMTW2LsvusZrli2T/fs+C7AY2vVO/aQ96HzMAOBQAOBQAOCUzgP8vJjvFjy6xmtCxwH08309H2CodsjrfBbMAOBQAOBQAOCUzgPkTerjAF9GRdii/0Tb5H2/7xxADTMAOBQAOBQAOKXzAHosfNqp2Zn2b40DBDN5vPNw7P0FmAHAoQDAoQDAKZ0H0DQ9H991I58LiUTWew8zA4BDAYBDAYBTeg8wsa7HAc7nch1lhRkAHAoAHAoAnNJ5gOaaXyzOntjqPF6r7RCxftdRrweg0e8+cq1gEgQFAA4FAE7pPIBm6oj8CNv3Zdu/rvnVm89S7U97hFBPwAwADgUADgUATuk8gK75WWPV/INHZU2OjX7X0PIEFswA4FAA4FAA4AQXVGtvW3TuPugV8bcWOYdx+me5X8LYH+73Aip3Zc3vv6/XTKIHIB5QAOBQAOCYHsCq8Z/GGRpKwtazb+J23WhwIW5/nly9JGtw63XpAVorcj5D05pHM9yfr3on7udjBgCHAgCHAgCnyQPomt83f4HzBKsiX5DeE2j77lOyQeQaGJsNm+R9+tVLv5zt9eetVlTsuSdRsvG6iK35AcwA4FAA4FAA4JjjAF1vXob1oNa+9SX2ev9po8cBjhyTnuXA3i1B57fWKax0rxVh0icPa0/ADAAOBQAOBQBOkwcIXXNG1xi95o1eD//EycvO83W0z3IeLzq9x2XN79njN46ha75ep1DPB2h0eZ2eGQAdCgAcCgCc6JPstYfw9QQayyPEZub0Kc44FD0OoJ8FxIbvBhInFAA4FAA4mW/C5/segeURcufHiAhjrw+g5wPodxOtr5MegDihAMChAMDJdyPev5D1u4ZJ70r5g+4nYSecMGq3CSC05muYAcChAMChAMApnAdIm9geI6m3uBucXyr773kYs3vuGUTCoADAoQDAgfMAoUT3EIE1PBRmAHAoAHAoAHB+A1OqeOtqU9rHAAAAAElFTkSuQmCC",
  Pc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAABMRJREFUeJztnbtrVEEUxu+V7CIE1BQqimD+AlEhoDZ2goQtbSx8lFoKNgqCgoWgleADETGgrYE1AR+ggqASIVGsLCRgJEYCkagRNsa1E89ZnZNx5r72+37d7L07M5t8nHN25ruzaUIE7Xa7XfQc/iRN0zTL/ldk2TkpPxQAOBQAOJnmlypg5fy01pvXVJIkSZL24jfn9dg1ASMAOBQAOBQAOD1FTyBvfHO+lZOnPrnHm5h4vbyJLXN8Pf/QmoARABwKABwKAJyuXwcIzflv3s7Hn5SDyclJ0W4M7hTt2OsEjADgUADgUADgwK0D6JzfHHkm2l8W8pxNJ/39/aKt5+e7TmHBCAAOBQAOBQBO5jVA2Tx2ZWfzplWirZYFosMIAA4FAA4FAE70GqBqHjvNk6dy/37r1i0xp+M9ftYwAoBDAYBDAYATXAOU3WO3ffcR0d6264DX+33Hi03z/nim/TMCgEMBgEMBgONdAxTtsdP75RZnTsoa4NTZy877dc4dG3vu1b/m7buPov1pVn7+uc9h+/mhMAKAQwGAQwGAE7wOUDWPnVUTDAzsEO3xB9fdAzx21wBlhxEAHAoAHAoAnK5/LiDUY7fUsyjaX+vy0bvhW1//Z1q/sdYZdE0SG0YAcCgAcCgAcDKvAarusdM5XzM7F1YDZJ3jLRgBwKEAwKEAwMl9HaBqHrtVP346rx/zHP/ufffnt/YmYsMIAA4FAA4FAE7mNUCoxy5vT93V8wdFO/Y5gZan0dfDGAojADgUADgUADi5rwO8OHxVtOv71RRy9tjpnFt2D2NjcCjqeIwA4FAA4FAA4HSdJ7Boj10oPCeQ5AoFAA4FAE7uNUB9rdxfb92WGry3Maz/0BxfdQ+jL4wA4FAA4FAA4BS+DqBrgmYSlgNjrwNUzcPo+/sMjADgUADgUADgFF4DLO2Vz96NPnwV1F/oOkDVPIzpiN/97UHZZgQAhwIAhwIAJ/caQOf8svPy0RXn9dGH5T4nUOf8NE3FP4ARABwKABwKAJzC1wE6zuAZzXa86ekP6pVtzvuXhoyaJdC/ELp3MbNvRrTXLaz3Gp8RABwKABwKAJyOGsB3P9kX69w9NEL3Lqycr7/3axgBwKEAwKEAwDHXAdJW3bijJlp6P7yxR37PPp7ccPbWsCYUyNTUe6/7545Ou28YnnFfN4jtYbRyvoYRABwKABwKAByzBmjXW87radLrvG7VBFnTt8Y9P19WtjaoVyaC+iv6vAJGAHAoAHAoAHA6agDre6TeK2gvSp+7/i1hzYWLd5zXtY/ewsrx504fdF5PErenT+f81QvyT9Z8bHRfchgBwKEAwKEAwPH2BOoawaoJOt5v1AjR+SZ/+zfprf39vn+gc363wQgADgUADgUATnCCC103iI3tXwjkgdobqRV7hlAojADgUADgUADgZP4l19ej5ktHjaH8C/M9UuOrUz8PY3Limhrxpmzm7G+IDSMAOBQAOBQAOJVf6Lb2JnypuofR+vw8I4gIKABwKABwuu5hfd8aIG8Po4XlYWxd++7VX+2Q/D0G1gBEQAGAQwGA03U1gEXsGiE2M7V3ot13ST+L6MbK+RpGAHAoAHAoAHDgagCLrM9JzBvWAMQJBQAOBQDOLzFifA2FYHwZAAAAAElFTkSuQmCC",
  Cc = "data:image/png;base64,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",
  Nc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAAgFJREFUeJzt3MFNwzAUBuAWIbEEE7AF7MF2zMEI3ODAnSV6Cee4Vd0oSWPn/75blKiN1F/v2Y7TwwEAAAAAAAAAAAAAAAAA6Mlx6xtINwzDcO388Xhc9Td6WPPDaZ8AhBOAcAIQTgDCCUA4AQi3+3WA2jx7a2vP82tUgHACEE4Awj1ufQP3tnHLPbQ2JFEBwglAOAEIt7sxwNR5/9nlP2+zvv/09Ts6fnr/m/V5a1MBwglAOAEIt7sxQKmc9y89D6/1/Nbm/SUVIJwAhBOAcN2PAWY/758471+655f3f+/9ASpAOAEIJwDhuh8DlNae99fW9qe28K3XCVSAcAIQTgDCdfdewA3v05fXjy+Y+bz/zMvn1dOnj+fRcW3dwDoAdyUA4QQgXPfrAGvP+6uKMUVv+wNUgHACEE4AwnU/BigtPY0evl+vnp/b8/0/AJsSgHACEK77McDcefXUZwe99/ySChBOAMIJQLjmxgC1ffJTe+jc9wb21vNLKkA4AQgnAOGa7k9LuDCmKM+Pjqfu4Su13vNLKkA4AQgnAOG66le3mPvewNQ9hr31/JIKEE4AwglAuOaeBSxt656/9X8A1agA4QQgnACEa6ofLaG29n/h+qvnW+vZS1MBwglAOAEIt/t1gKlbAvfe80sqQDgBCCcAAAAAAAAAAAAAAAAAAAAd+QcizKPAfxkTLQAAAABJRU5ErkJggg==",
  Sc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAAkxJREFUeJzt3cFx1DAUBuBdhhmaoALKoA+6Sx2UwJEDd5rIZTlH2cEY6cmy/++7ZXbi9Sb/vCfJsvd2AwAAAAAAAAAAAK7gfvQJVHs8Ho+jz6HH/X4v/R99qDw46xOAcAIQ7uPsN9zqyb097x+O33P4crOHLCpAOAEIJwDhpo8BZmt7/rse+/Nr6fu//vj119c/fftd+v5bVIBwAhBOAMJNHwOMXtteba1/b88/+vRVgHACEE4Awl1uHWD2vH90z6++/t9SAcIJQDgBCHe6McDR8/7Ven7799h7PBUgnACEE4Bwa2+Qe+JJz2tff/sLnfP+1Xr+aCpAOAEIJwDhll8HmD3vv3rPb6kA4QQgnACEW7o/3W718/7V9/B5PgClBCCcAIRbbh2get7fe69e9bTe8wGYSgDCCUC45dYByq/3f/n+X+dVZevzWQeglACEE4Bwy60DlCt+JlCrXXc4+tpCSwUIJwDhBCDc6cYA09fiO/cXrL6HUAUIJwDhBCDc8mOA6nlyb8s9W89vqQDhBCCcAIRbbj/AaKP3F5y957dUgHACEE4Awi2/DrDX6PsKrtbzWypAOAEIJwDhho8Bep9dO9reef/Ve35LBQgnAOEEINzwMcDsHtg771+951ePqVSAcAIQTgDCnWrO+sze6/2vL5/f/Fzd8/eOUdwXwFQCEE4AwsWNATavDTSqv9fv6GsnKkA4AQgnAOEutyewNbvnbzn6u49bKkA4AQgnAOEutw6w19n28I2mAoQTgHACAAAAAAAAAAAAAHABfwC3/v8vAZpBjAAAAABJRU5ErkJggg==",
  Ic = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAAqtJREFUeJzt3bFRxDAQRmHMMNAEMQkZJdAH3dEHHRASEEMTl5iABAsGY6S1Vn7vy47jfAb+2ZUl4Ts7kyRJkiRJkiRJRzb1PoFa8zzPvc8h0jRNoX+j88iDKz8DAGcA4C56n0BrwS0z3N5DGisAnAGAMwBw6ccA5XX+1uvibz315b7+pCqcnl8Xj68e3judyScrAJwBgDMAcOnHANFz4dHWen7vpQwrAJwBgDMAcOnHAKOp7fn/mOf49YBrx7MCwBkAOAMA5xigs97zHFYAOAMAZwDgHANUip7rX9sPUTuGsALAGQA4AwA33Fr7Dz2xfH75gsZ7APee649mBYAzAHAGAK75PEDt+vTRZP95rQBwBgDOAMClXwvofQ+g2uv+6PN3LUBVDACcAYBrPgaIvu6Nnvtvvb7f+tfRekhhBYAzAHAGAC79PEA2W3v61p59erxePI6+h5AVAM4AwBkAuHRjgN5z/5d3N4vH8/xWd8CVeYne9xCyAsAZADgDAJduv1rvff/Rsv1fgRUAzgDAGQC4dPMAq+z5TVkB4AwAnAGAG24eYIf3X35h45gje88vWQHgDACcAYBLPw8QvR5e23JH6/klKwCcAYAzAHDpxgCte2LrPYaj9/ySFQDOAMAZALhU/ShC6z2G0+3T768vv3/nzwHcygoAZwDgDABcunmAWq2v+6N7fm9WADgDAGcA4ML71drn3u3wfuXzyxcU1/1H7/klKwCcAYAzAHDh8wCj98jS0X4eKwCcAYAzAHDD97M/rJ+X37/p+R+ON/zv7CsrAJwBgDMAcIfbD9D6voK1PX/r/gTvD6BdGQA4AwB3uDFAdmWP7/35CFYAOAMAZwDgDj8GyDZ137vnl6wAcAYAzgDAHW4MkKzFpt8/YAWAMwBwBkCSJEmSJAniA8sG9dXtJ5oqAAAAAElFTkSuQmCC",
  Tc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAAtZJREFUeJzt3U1uFDEQhmEaRXATDsANwj24MruwYM8l2DQbNlOJZCz/lCvv++xG0cx0pE/lctvtuT4c7r7vO/saVrqu68r8/o+ZX658BgDOAMA9ZV9Ar+Qhc9hpLY0VAM4AwBkAuHI9QPRqTP35LedC/vnz49fD68/ffyddyf+xAsAZADgDAFe+B8gWx/xqrABwBgDOAMDZA0wW5/2n3fuPrABwBgDOAMDZA3Qanff37gFs7Ykc3VNoBYAzAHAGAM4eYFC1eX9kBYAzAHAGAM4eoGH3vH/2+1usAHAGAM4AwC3vAeK97Ozn4UdVn/dHVgA4AwBnAOCW9wCz179Xm73Pf/b/M7uHsgLAGQA4AwB3/FpAHPJ2nwfQer5/9W2N1S2RFQDOAMAZALjje4Bsu29L7F4qsQLAGQA4AwB33Nr8G/sH4t8f35B8LmCv1jmCrZ7DtQBNZQDgDACc9wEWy36uoMUKAGcA4AwAXPkeYPVZvZ++fpn6eac9V2AFgDMAcAYArlwPsHu9/H7p6wFOn/dHVgA4AwBnAOCm9wCzz7atvifvtHl/ZAWAMwBwBgDuuPsAsUdYfV7Aqz2HL89d768274+sAHAGAM4AwE3vAbLHtGynz/sjKwCcAYAzAHDH3QdoyW4xqs/7IysAnAGAMwBw5XqAKPu8gGrz/sgKAGcA4AwAXPkeoNfqZwmj0Xn/6t9csgLAGQA4AwBXvwcYnPe3fg+gZfW83zOCtJQBgDMAcPV7gIbeef/omH7aen+LFQDOAMAZALh33wNE2efzn8YKAGcA4AwA3HE9wOh5AO9t3/5qVgA4AwBnAOC29wC9e9xGfzdw9b792eci7mYFgDMAcAYAbnsPMDwmhjHfef8YKwCcAYAzAHDHrQWM2v28fvUewgoAZwDgDADccePXG2sFo5/38Lr6mD2bFQDOAMAZALjj7wNUO3evGisAnAGAMwCSJElAfwElasLUXOrQXAAAAABJRU5ErkJggg==",
  Ec = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAAxtJREFUeJzt3bFx3DAQRmHTo5GbcKwC3IHVh7tzPc6kQLmbUELFBjXG4QDsgnzvC6XhHaX5Z7EgQHL7srh93/fsc5hp27Yt8/u/Zn658hkAOAMAlzr+3KLsAZKHzG6tLc3sHsEKAGcA4AwA3EP2CfTO8w+Hvz73fFyz9z9v//39t19/g87kPlYAOAMAZwDg0nsAOtcClMoAwBkAuPQeoDYGrrYfoHXev9jpH1gB4AwAnAGAS+8BaLLn/SUrAJwBgDMAcIce4JM9eE1jVu/xq1lt3j/6/2sFgDMAcAYA7tAD9I4pZx/zRxv9/yg/r7ZWUvt+KwCcAYAzAHCuBRRWm/fPZgWAMwBwBgBueA/QOy9dbQ9gr9l/j2sB6mIA4AwA3PLXAcohLvp5ALX7+2cvfZR/7+i1BSsAnAGAMwBww3uAq83zo083ejuFFQDOAMAZALjw/XutPUD2dYDRyv0GrfsLvA6goQwAnAGAC18LuNp1gpraHsMa3xegqQwAnAGAq/YAd8zbp45Z77+/z/z4g8cfT0M/b7X7CqwAcAYAzgDANV8HaL0/fbTod/DsL209QO+8P5oVAM4AwBkAuOYeIHrMP/uevOz1/horAJwBgDMAcNUeIHpMir7OcNhz+PKz6fizzftLVgA4AwBnAODC9wRe7X0CpdXn/SUrAJwBgDMAcMvdF3DD8aNO5S7R+/x7n7tYYwWAMwBwBgCuuweYPUbd8P3//iD4eQGr7fNvZQWAMwBwBgBu+WcFjxa9fr/6u5etAHAGAM4AwHX3ANnr2b167zUcPe/3vgCFMgBwBgDu8tcBWuf9vWP62XoiKwCcAYAzAHCX7wFKZ9u3Xxq9VmAFgDMAcAYAbrkeoPl5AMUewLPt289+FrMVAM4AwBkAuOV6gFLvewPPtm8/+hlJVgA4AwBnAOCm9wDD97knz/tHH1+KfhazFQDOAMAZALjh7wsox8To9fTZ8/7RPU32fgMrAJwBgDMAcM3jz+xnAn0yxvZ83KEHyB5zV2MFgDMAcAYArvvdwbOtvn7farX3JVgB4AwAnAGQJEkC+gAjCBSs2IK1XQAAAABJRU5ErkJggg==",
  Bc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAA9NJREFUeJztnT1y1EAQhS1qy1yCmAAybgDnMLfjHHADMhMQwyWcLLF6sXp7X49GW+/7MnktjaR61X/TM1oeDs75fD7PvgeFZVkW5fzs+dXrv1FOhvsHAZiDAMw5zb4BFdEFtnNvIQsWwBwEYA4CMGd4DKDmsfH37HoXP//6sn2DCS8/f2/+/vbrX+n68Xni86p5fgYWwBwEYA4CMOfu6wB7E32+mveP9vEZWABzEIA5CMAcOQaYncd2k+X9Gd3PW+2HqI6PBTAHAZiDAMw5XB3gaD2Aat7f3dNXnRvJwAKYgwDMQQDmpDFANc/P/v9oHC3vz+iOkbAA5iAAcxCAOWkM0L22rbsHsJvZ8/1qDFU9HwtgDgIwBwGYU64DqMyu9c/O+0c/P/0AUAIBmIMAzCn3A+xd2o8uM46vrgWs5v1H8+EqWABzEIA5CMCcjnUB6z+I6/GXjz+k81VmxzhX/H9rjyEWwBwEYA4CMOciBhid58ZafPf8e8bjp/dhvD9Dx3v59m51nO0ppL7/6vlYAHMQgDkIwJzhawNn+/wUsW4RqT7v7LoDFsAcBGAOAjDnmnUBq+Pu2v+9o/YYRtT3m8UgESyAOQjAHARgzml07X903h9r7SpxrqDK3nUONQbBApiDAMxBAOZc1AFG5/3V2nfmQ9Vv9lyM97wdAzSsLVyPV3y/1W8YZe8PC2AOAjAHAZjT3w/w4fvqMEuDb+iZu+m2XkOdjx9e52j2+XHdABbAHARgDgIwp9wPkBPy3OfPq+PZPYIXeXi4v8jeeX+3z8/AApiDAMxBAOb8b21g6QJVn1rlaJ8b2Dtmyeoi2fthLgA2QQDmIABzTup+9Bndef/odQmz5/sfn9b7FZyftserzqVEsADmIABzEIA5u38v4N5QY5bquoXHh1pPoHp/WABzEIA5CMAc+XsBR5vvj8zee7i+biG8L3Fuhe8GwiYIwBwEYE77/gBqn/rousPoGKS7n2J0TIUFMAcBmIMAzEn7Abp9svxdPHH9fCSLQbr7JUb7/OrzYAHMQQDmIABz5P0BYq19dvtAd56sxgRVVJ9f/R0LYA4CMAcBmFOOAW6ode9aZ8hQfeYN462OY94/O4bCApiDAMxBAOZcs0fQrgv0u/fUyajGIOr7qPr80f0SWABzEIA5CMAc2b93z59X9xzq9qlqf4Dqowf0HzAXAK+DAMxBAObI+wOM3mMoovb8ZYyem9i7rpKBBTAHAZiDAMxJ/VF3DJBdX3WR8XZn+9y9ewqrYAHMQQDmIABzpvujo+fdR/fhKlgAcxCAOQgAAAAAwJB/s3kQcMKqJVwAAAAASUVORK5CYII=",
  zo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACABAMAAAAxEHz4AAAAD1BMVEVHcEz284nytSDliicgGCcE4LS5AAAAAXRSTlMAQObYZgAAAJ5JREFUeNrt2LsNgDAMRVEKFuAzAYwAA4DE/jNBCmyF/IkEzX113qmsyHITyJGIPAQACKQ1D7or/fTMvFxZAQAqAOlu5hEAQKq7m7I7gNoFAPgY0Al2AgAQAKTbT950d0YAgApAtzQAgBjgT2BLAwBwu7G59CxZAADlgP2JAQBIsg8QgzWAAAB/AbrXAwAURQ8QMoAAAC8BvVQBAOTmBHvqugmDIq+UAAAAAElFTkSuQmCC",
  Ho = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAAXNSR0IArs4c6QAAAFRQTFRFICo/9c+d/88A+Ldj/8UB0bqh/78A/7cA/60Ax6uV7bEK/6QA/6AA/5kA/5IA1qASop2exJ40/4UAsIA0eX6JlHpOeWhPV2ByYFZLMzxRGSc+ESE7VlFONgAAAadJREFUeNrt121vgyAUhmGnKFRb6ltbOOf//8/x4Jgm7ZKJZGkWbr80fLiCPVLTIpfL5XK5v8zacTydiN4VJJqmcdSa+X1BfRldfU/JQK09WKTJGO3FqmJOBaJUILPWl4v2PR4JQArgmAQksvZ8vrjwLdY1M/niwWIFdSyIXRnf7TZNSnXdusePj7ruXfP8eFi7B7SvQB0Htq0QTSNdytU58JuEuYl5D9goqdBx0BgPLn2h50BuzKr63XDoDtCLCpfqcAXQtwtE1oKUMJ9uO9x4XRdoFwjuCdQxIBoG7O56nSZj8CgxSwlyQfGIJwK9GQOCIFdB+GSMWkbjUqrvwcWCrgVUAew8GBew+32dNsh5JnDHQCU9F0CK5oBtTw1Q/MweA9dTAy8eJBoG4WogNmGPGMlxcN2j6xQLWluWALd7BFhVsVPeguvJltHv59vNgZ4sy+s1oBjSEVBsQYgqFmRu29LXttbiIE6TENIX9eDQj2ATCdLCGcNcUHi9VhWm3fcHwbBSAJSxIAsxDMVT8yzEPEeAnBZERK9XsZ4QxHr+K5jL5XL/oU+kODawNDIwtAAAAABJRU5ErkJggg==",
  vt = {
    1: Nc,
    5: Sc,
    10: Ic,
    100: Tc,
    500: Ec,
    1e3: Bc,
    default: zo
  },
  Dc = (n, t) => t < 5 ? vt[1] : t < 10 ? vt[5] : t < 100 ? vt[10] : t < 500 ? vt[100] : t < 1e3 ? vt[500] : vt[1e3],
  wt = {
    1: hc,
    5: gc,
    10: _c,
    100: fc,
    500: xc,
    1e3: yc,
    default: Qo
  },
  kc = (n, t) => t < 5 ? wt[1] : t < 10 ? wt[5] : t < 100 ? wt[10] : t < 500 ? wt[100] : t < 1e3 ? wt[500] : wt[1e3],
  Rc = () => Ft,
  Uc = () => Oo,
  Oc = () => Mo,
  bt = {
    1: vc,
    5: wc,
    10: bc,
    100: jc,
    500: Pc,
    1e3: Cc,
    default: Fo
  },
  Mc = (n, t) => t < 5 ? bt[1] : t < 10 ? bt[5] : t < 100 ? bt[10] : t < 500 ? bt[100] : t < 1e3 ? bt[500] : bt[1e3],
  Ha = {
    9: Do,
    10: ko,
    11: Ro
  },
  Ks = (n, t) => Ha[n] ? Ha[n] : Ho,
  Qc = () => Ho,
  Zs = {
    1: Dc,
    2: kc,
    13: Rc,
    4: Uc,
    5: Oc,
    6: Mc,
    9: Ks,
    10: Ks,
    11: Ks,
    default: Qc
  },
  qo = (n, t) => Zs[n] ? Zs[n](n, t) : Zs.default(),
  Fc = ({
    item: n,
    active: t,
    amount: s = 1,
    type: a = "sale"
  }) => {
    var d;
    const o = g(),
      i = l(m => m.shop.selectedCurrency),
      r = (d = n.prices.filter(m => m.currency_id === i)[0]) == null ? void 0 : d.price,
      c = [ie.info_row];
    return e.jsxs("div", {
      className: c.join(" "),
      onPointerUp: () => {
        t && (o(qe(n.id)), o(Le()))
      },
      children: [e.jsxs("div", {
        className: ie.info_row_content,
        children: [e.jsxs("div", {
          children: [e.jsx("div", {
            className: ie.row_icon_container,
            children: e.jsx("img", {
              alt: "",
              src: qo(n.id, s),
              className: ie.row_icon
            })
          }), e.jsx("div", {
            className: ie.row_title,
            children: e.jsx("span", {
              children: n.name.replace("charges", "").replace("' Snap", "").replace(" Snap", "")
            })
          })]
        }), e.jsxs("div", {
          className: ie.row_price_container,
          children: [r && e.jsxs("span", {
            className: ie.main_info_channel_users,
            children: [e.jsx(Ac, {}), e.jsx(Ie, {
              num: r
            })]
          }), !r && e.jsx("span", {
            className: ie.main_info_channel_users,
            children: "No"
          })]
        })]
      }), a === "sale" && e.jsx("div", {
        className: ie.info_row_sale,
        children: "-75%"
      }), a === "limited" && e.jsx("div", {
        style: {
          backgroundColor: "#026e4f",
          color: "white",
          lineHeight: 1
        },
        className: ie.info_row_sale,
        children: "Limited"
      }), a === "event" && e.jsx("div", {
        className: ie.info_row_sale,
        style: {
          backgroundColor: "#850294",
          color: "white",
          lineHeight: 1
        },
        children: "Event"
      })]
    })
  },
  zc = "_panel_1iadi_1",
  Hc = "_item_1iadi_11",
  qc = "_active_1iadi_25",
  $s = {
    panel: zc,
    item: Hc,
    active: qc
  },
  Lc = {
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
  tn = Lc,
  Vc = () => window.location.hostname.split(".").length === 3,
  Gc = () => !1,
  Lo = () => window.location.hostname.includes("dev"),
  Xc = () => Lo() ? tn.VITE_ADSGRAM_BLOCK_ID : Vc() ? "4853" : "4995",
  mn = {
    isDev: Gc(),
    devServer: Lo(),
    devUserInitData: tn.VITE_INIT_DATA || null,
    devWallet: tn.VITE_DEV_WALLET || null,
    apiBaseUrl: tn.VITE_API_URL,
    app: {
      disableBetaError: tn.VITE_DISABLE_BETA_ERROR,
      adsgramBlockId: Xc()
    }
  },
  Jc = () => window.Telegram.WebApp.isVersionAtLeast("8.0") ? window.Telegram.WebApp.safeAreaInset : {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  Yc = () => window.Telegram.WebApp.isVersionAtLeast("8.0") ? window.Telegram.WebApp.contentSafeAreaInset : {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  Wc = {
    deviceType: "unknown",
    os: "unknown",
    platform: "unknown",
    fullscreen: window.Telegram.WebApp.isVersionAtLeast("8.0") || mn.isDev,
    safeAreaInset: Jc(),
    contentSafeAreaInset: Yc()
  },
  Vo = re({
    name: "device",
    initialState: Wc,
    reducers: {
      setDeviceInfo: (n, t) => {
        const {
          deviceType: s,
          os: a,
          platform: o
        } = t.payload;
        n.deviceType = s, n.os = a, n.platform = o
      },
      setFullscreen: (n, t) => {
        n.fullscreen = t.payload
      }
    }
  }),
  {
    setDeviceInfo: Kc,
    setFullscreen: Zc
  } = Vo.actions,
  Ze = n => n.device.platform,
  $c = n => n.device.os,
  zt = n => n.device.fullscreen,
  Os = n => n.device.contentSafeAreaInset,
  Ms = n => n.device.safeAreaInset,
  el = Vo.reducer,
  tl = () => {
    const [n, t] = p.useState("Stars"), s = l(Ze);
    return e.jsx("div", {
      className: $s.panel,
      children: ["Star Shop"].map(a => e.jsxs("div", {
        className: `${$s.item} ${n===a?$s.active:""}`,
        onPointerUp: () => {
          t(a)
        },
        children: [s === de && e.jsx("h1", {
          children: "TON Shop"
        }), s !== de && e.jsx("h1", {
          children: "Star Shop"
        })]
      }, a))
    })
  },
  nl = "_layout_q8u4d_1",
  sl = "_content_q8u4d_22",
  qa = {
    layout: nl,
    content: sl
  },
  al = "_header_btihg_1",
  ol = "_header_bottom_container_btihg_14",
  il = "_header_bottom_btihg_14",
  rl = "_header_placeholder_btihg_39",
  cl = "_header_content_btihg_45",
  ll = "_league_btihg_56",
  dl = "_bronze_btihg_66",
  ul = "_silver_btihg_67",
  pl = "_gold_btihg_68",
  ml = "_platinum_btihg_69",
  Al = "_diamond_btihg_70",
  hl = "_logo_link_btihg_72",
  gl = "_logo_btihg_72",
  je = {
    header: al,
    header_bottom_container: ol,
    header_bottom: il,
    header_placeholder: rl,
    header_content: cl,
    league: ll,
    bronze: dl,
    silver: ul,
    gold: pl,
    platinum: ml,
    diamond: Al,
    logo_link: hl,
    logo: gl
  },
  _l = () => e.jsx("div", {
    className: je.header_placeholder
  }),
  fl = "data:image/png;base64,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",
  xl = "data:image/png;base64,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",
  yl = "_image_1k343_1",
  La = {
    image: yl
  },
  vl = () => {
    const n = l(zt);
    return e.jsxs(ae.Fragment, {
      children: [e.jsx("img", {
        alt: "web",
        src: fl,
        className: La.image,
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
        src: xl,
        className: La.image,
        style: {
          position: "absolute",
          top: n ? "0" : "var(--header-height)",
          right: 0,
          zIndex: 100,
          pointerEvents: "none",
          opacity: .6
        }
      })]
    })
  },
  wl = {
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
  $ = ({
    children: n
  }) => {
    const t = l(s => s.main.showMiningDetailsPopup);
    return e.jsxs(un.div, {
      className: qa.layout,
      style: {
        overflow: t ? "hidden" : ""
      },
      ...wl,
      children: [e.jsx(_l, {}), e.jsx("div", {
        className: qa.content,
        children: n
      }), e.jsx(vl, {})]
    })
  },
  bl = "_layout_13e1w_1",
  jl = "_container_13e1w_10",
  Pl = "_star_13e1w_14",
  Cl = "_move_13e1w_1",
  Bn = {
    layout: bl,
    container: jl,
    star: Pl,
    move: Cl
  },
  Nl = "_link_1fn8i_1",
  Sl = "_telegram_icons_1fn8i_13",
  Go = {
    link: Nl,
    telegram_icons: Sl
  },
  B = ({
    children: n,
    className: t = "",
    style: s = {},
    size: a = 12
  }) => n ? e.jsx("span", {
    className: `${Go.telegram_icons} ${t}`,
    style: {
      fontSize: a,
      ...s
    },
    children: n
  }) : null,
  Il = p.memo(() => {
    const n = Array.from(Array(30)),
      t = l(Ze);
    return e.jsx("div", {
      className: Bn.layout,
      children: e.jsx("div", {
        className: Bn.container,
        children: n.map((s, a) => {
          const o = L(4, 14);
          return t === de ? e.jsx(B, {
            size: o,
            className: Bn.star,
            style: {
              animationDelay: `-${a*300}ms`,
              transform: `translate(${L(-80,-170)*(a%2===1?1:-1)}px, ${L(-100,100)}px)`
            },
            children: ""
          }, a) : e.jsx(bn, {
            fontSize: o,
            className: Bn.star,
            style: {
              animationDelay: `-${a*300}ms`,
              transform: `translate(${L(-80,-170)*(a%2===1?1:-1)}px, ${L(-100,100)}px)`
            }
          }, a)
        })
      })
    })
  }, () => !1),
  Tl = "_layout_1nbfl_1",
  El = "_button_1nbfl_14",
  Va = {
    layout: Tl,
    button: El
  },
  Bl = () => {
    const n = Y();
    return e.jsx("div", {
      className: Va.layout,
      children: e.jsx("div", {
        className: Va.button,
        onPointerUp: () => n.push("/pay-support"),
        children: "Pay support"
      })
    })
  },
  Dl = "_layout_gx8in_1",
  kl = "_container_gx8in_5",
  Rl = "_item_gx8in_11",
  Ul = "_active_gx8in_20",
  Ol = "_image_container_gx8in_24",
  Ml = "_image_gx8in_24",
  Ql = "_item_text_container_gx8in_34",
  Fl = "_item_text_gx8in_34",
  et = {
    layout: Dl,
    container: kl,
    item: Rl,
    active: Ul,
    image_container: Ol,
    image: Ml,
    item_text_container: Ql,
    item_text: Fl
  },
  js = fn(),
  Ps = fn(),
  Cs = fn({
    sortComparer: (n, t) => n.id - t.id
  }),
  Ta = fn(),
  cn = fn(),
  zl = {
    user: null,
    country: null,
    languageCode: "en",
    showRobotPopup: !1,
    verificatedWallet: null,
    verificatedWalletStatus: u.idle,
    checkCaptchaStatus: u.idle,
    hasCaptchaCode: !1,
    hasCaptchaCodeStatus: u.idle,
    pixelsForSale: js.getInitialState(),
    pixelsForSaleOffset: 0,
    pixelsForSaleLimit: 10,
    pixelsForSaleTotal: 0,
    totalPrice: 0,
    pixelCoins: 0,
    pixelsSold: Ps.getInitialState(),
    pixelsSoldOffset: 0,
    pixelsSoldLimit: 10,
    pixelsSoldTotal: 0,
    pixelsForSaleFetchStatus: u.idle,
    pixelsSoldFetchStatus: u.idle,
    getUserFetchStatus: u.idle
  },
  Fn = D("user/getVerificatedWallet", async () => (await F.getVerificatedWallet()).data),
  zn = D("user/checkCaptcha", async ({
    wallet: n,
    captcha: t
  }) => (await F.checkCaptcha({
    wallet: n,
    captcha: t
  })).data),
  Hn = D("user/checkHasCaptchaCode", async () => (await F.checkHasCaptchaCode()).data),
  qn = D("user/getUserPixels", async ({
    offset: n,
    limit: t
  }) => (await F.getUserPixels({
    offset: n,
    limit: t
  })).data),
  Ln = D("user/getPixelsForSaleTotal", async () => (await F.getUserPixelsCount()).data),
  Vn = D("user/getUserPixelsSold", async ({
    offset: n,
    limit: t
  }, s) => (await F.getUserPixelsSold({
    offset: n,
    limit: t
  })).data),
  Gn = D("user/getUser", async (n, {
    rejectWithValue: t
  }) => {
    try {
      const s = await F.getUser();
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
  Xo = re({
    name: "user",
    initialState: zl,
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
        js.removeAll(n.pixelsForSale)
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
        Ps.removeAll(n.pixelsSold)
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
      n.addCase(qn.pending, t => {
        t.pixelsForSaleFetchStatus = u.pending
      }).addCase(qn.fulfilled, (t, s) => {
        js.upsertMany(t.pixelsForSale, s.payload.pixels), t.totalPrice = s.payload.totalPrice, t.pixelsForSaleTotal = s.payload.total, t.pixelsForSaleFetchStatus = u.fulfilled
      }).addCase(qn.rejected, t => {
        t.pixelsForSaleFetchStatus = u.rejected
      }).addCase(Fn.pending, t => {
        t.verificatedWalletStatus = u.pending
      }).addCase(Fn.fulfilled, (t, s) => {
        t.verificatedWallet = s.payload.wallet_address, t.verificatedWalletStatus = u.fulfilled
      }).addCase(Fn.rejected, t => {
        t.verificatedWalletStatus = u.rejected
      }).addCase(Hn.pending, t => {
        t.hasCaptchaCodeStatus = u.pending
      }).addCase(Hn.fulfilled, (t, s) => {
        t.hasCaptchaCode = s.payload, t.hasCaptchaCodeStatus = u.fulfilled
      }).addCase(Hn.rejected, t => {
        t.hasCaptchaCodeStatus = u.rejected
      }).addCase(zn.pending, t => {
        t.checkCaptchaStatus = u.pending
      }).addCase(zn.fulfilled, (t, s) => {
        t.checkCaptchaStatus = u.fulfilled
      }).addCase(zn.rejected, t => {
        t.checkCaptchaStatus = u.rejected
      }).addCase(Vn.pending, t => {
        t.pixelsSoldFetchStatus = u.pending
      }).addCase(Vn.fulfilled, (t, s) => {
        Ps.upsertMany(t.pixelsSold, s.payload.pixels), t.pixelsSoldTotal = s.payload.total, t.pixelsSoldFetchStatus = u.fulfilled
      }).addCase(Vn.rejected, t => {
        t.pixelsSoldFetchStatus = u.rejected
      }).addCase(Gn.pending, t => {
        t.getUserFetchStatus = u.pending
      }).addCase(Gn.fulfilled, (t, s) => {
        t.user = {
          ...s.payload.data
        }, t.country = s.payload.country, t.getUserFetchStatus = u.fulfilled
      }).addCase(Gn.rejected, (t, s) => {
        t.getUserFetchStatus = u.rejected
      }).addCase(Ln.pending, t => {}).addCase(Ln.fulfilled, (t, s) => {
        t.pixelsForSaleTotal = s.payload.myPixelsCount
      }).addCase(Ln.rejected, t => {})
    }
  }),
  {
    setLanguageCode: Hl,
    setVerificatedWallet: jE,
    setPixelsForSaleOffset: PE,
    setPixelsForSaleTotal: ql,
    setPixelsForSaleFetchStatus: CE,
    removePixelsForSale: NE,
    setPixelsSoldOffset: SE,
    setPixelsSoldTotal: IE,
    setPixelsSoldFetchStatus: TE,
    removePixelsSold: EE,
    setShowRobotPopup: Ll,
    addPixelCoins: BE,
    subtractPixelCoins: Vl,
    setPixelCoins: Jo,
    updateUserSquad: Gl
  } = Xo.actions,
  Xl = n => n.user.userPic,
  rt = n => n.user.user,
  Jl = Xo.reducer,
  ze = {
    getPixelsForSale: qn,
    getPixelsForSaleTotal: Ln,
    getPixelsSold: Vn,
    getVerificatedWallet: Fn,
    checkCaptcha: zn,
    checkHasCaptchaCode: Hn,
    getUser: Gn
  },
  Yl = () => {
    const n = g(),
      t = l(Ia),
      s = l(o => o.shop.selectedCurrency),
      a = l(Ze);
    return l(rt), p.useEffect(() => {
      a === de && s === 1 && n(pn(2))
    }, [a]), a !== de ? null : e.jsx("div", {
      className: et.layout,
      children: e.jsx("div", {
        className: et.container,
        children: t.map(o => {
          if (o.currency_id === 1) return null;
          const i = s === o.currency_id;
          return e.jsxs("div", {
            className: R(et.item, i ? et.active : ""),
            onPointerUp: () => {
              n(pn(o.currency_id))
            },
            children: [e.jsx("div", {
              className: et.image_container,
              children: e.jsx("img", {
                alt: "img",
                className: et.image,
                src: o.image
              })
            }), e.jsx("div", {
              className: et.item_text_container,
              children: e.jsx("span", {
                className: et.item_text,
                children: o.name
              })
            })]
          }, o.currency_id)
        })
      })
    })
  },
  Wl = "/assets/icon_coin-COCalNMQ.gif",
  Kl = "/assets/icon_stars-BmDiRMAW.gif",
  Zl = {
    items: []
  },
  Yo = re({
    name: "toast",
    initialState: Zl,
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
    addToast: q,
    removeToast: Ga
  } = Yo.actions,
  $l = Yo.reducer,
  ed = () => {
    const n = g(),
      t = l(Ze),
      [s, a] = p.useState(1);
    return e.jsx("img", {
      alt: "img",
      className: ie.stars_img,
      src: t === de ? Wl : Kl,
      onPointerUp: () => {
        (t !== de || mn.isDev) && (s >= 7 ? (a(1), n(q({
          id: performance.now(),
          text: "Check every 11th word",
          icon: ""
        }))) : a(s + 1))
      }
    })
  },
  td = ["#FFD700", "#ffc60a", "#FFDF00"],
  nd = () => {
    g();
    const n = l(o => o.shop.order),
      t = l(o => o.shop.products),
      s = l(o => o.shop.available),
      a = l(Ze);
    return p.useEffect(() => {}, []), e.jsxs($, {
      children: [e.jsxs("div", {
        className: ie.stars_img_container,
        children: [e.jsx(ed, {}), e.jsx(Il, {
          color: () => td[L(0, 2)]
        })]
      }), e.jsx(tl, {}), e.jsxs("div", {
        className: ie.description_container,
        children: [a !== de && e.jsxs("span", {
          className: ie.description,
          children: ["Exclusive offers for brave Pixels. ", e.jsx("br", {}), "We've got something fun", " "]
        }), a === de && e.jsxs("span", {
          className: ie.description,
          children: ["Weve got something fun", e.jsx("br", {}), "Buy with tokens, saving ≈30%"]
        })]
      }), e.jsxs("div", {
        className: ie.info_layout,
        children: [e.jsx(Yl, {}), e.jsx("div", {
          className: ie.info_container,
          children: n.map(o => {
            if (t.hasOwnProperty(o)) {
              const i = t[o];
              let r = !((o === 4 || o === 5) && s[o] > 0);
              {
                let c = o >= 9 && o <= 11 ? "limited" : "not_sale";
                return e.jsx(Fc, {
                  item: i,
                  active: r,
                  type: c
                }, o)
              }
            }
            return null
          })
        }), e.jsx(Bl, {})]
      })]
    })
  },
  sd = "_text_layout_1xggq_1",
  ad = "_text_1xggq_1",
  od = "_button_layout_1xggq_14",
  id = "_button_layout_placeholder_1xggq_26",
  rd = "_button_1xggq_14",
  Xt = {
    text_layout: sd,
    text: ad,
    button_layout: od,
    button_layout_placeholder: id,
    button: rd
  },
  jn = "data:image/svg+xml,%3csvg%20height='18'%20viewBox='0%200%2017%2018'%20width='17'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='m.32%208.22c4.81-2.07%208.02-3.43%209.62-4.08%203.48-1.43%204.87-1.96%205.61-2.13.23-.06%201.45.29%201.45%201.18%200%202.58-1.32%208.8-1.87%2011.67-.23%201.22-1.88%201.6-3.74.45-1.47-.91-2.27-1.52-3.68-2.44-1.63-1.05-.58-1.63.35-2.58.25-.25%204.47-4.03%204.55-4.37.01-.04.02-.2-.08-.29-.09-.08-.24-.05-.34-.03-.14.03-2.46%201.54-6.96%204.53-.66.44-1.25.66-1.79.65-.59-.02-1.15-.05-2.56-.6-.94-.37-1.13-1.02-.56-1.96z'%20fill='%23fff'%20fill-rule='evenodd'/%3e%3c/svg%3e",
  cd = () => e.jsxs($, {
    children: [e.jsx("div", {
      className: Xt.text_layout,
      children: e.jsx("span", {
        className: Xt.text,
        children: e.jsx("h1", {
          children: "Probably nothing"
        })
      })
    }), e.jsx("div", {
      className: Xt.button_layout_placeholder
    }), e.jsx("div", {
      className: Xt.button_layout,
      children: e.jsxs("button", {
        className: Xt.button,
        onPointerUp: () => {
          pe("https://t.me/notpixel_channel")
        },
        children: [e.jsx("img", {
          alt: "tg_logo",
          src: jn
        }), "Telegram Channel"]
      })
    })]
  }),
  ld = "_content_9ogc8_1",
  dd = {
    content: ld
  },
  ud = () => {
    const n = Y();
    return e.jsx($, {
      children: e.jsxs("div", {
        className: dd.content,
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
  pd = "_content_7fuxa_1",
  md = {
    content: pd
  },
  Ad = () => e.jsx($, {
    children: e.jsxs("div", {
      className: md.content,
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
  hd = "_pixels_amount_ngjsa_1",
  gd = "_general_info_container_ngjsa_6",
  _d = "_coin_amount_text_ngjsa_12",
  fd = "_description_container_ngjsa_16",
  xd = "_description_ngjsa_16",
  Dn = {
    pixels_amount: hd,
    general_info_container: gd,
    coin_amount_text: _d,
    description_container: fd,
    description: xd
  },
  yd = "_logo_container_1i5of_1",
  vd = {
    logo_container: yd
  },
  wd = "_layout_1cvcu_1",
  bd = "_container_1cvcu_10",
  jd = "_bubble_1cvcu_16",
  Pd = "_move_1cvcu_1",
  ea = {
    layout: wd,
    container: bd,
    bubble: jd,
    move: Pd
  },
  Cd = p.memo(({
    color: n
  }) => {
    const t = Array.from(Array(200));
    return e.jsx("div", {
      className: ea.layout,
      children: e.jsx("div", {
        className: ea.container,
        children: t.map((s, a) => {
          const o = L(1, 8);
          return e.jsx("div", {
            className: ea.bubble,
            style: {
              width: o,
              height: o,
              animationDelay: `-${a*300}ms`,
              transform: `translate3d(${L(-200,500)}px, ${L(-200,200)}px, ${L(0,33)}px)`,
              background: n()
            }
          }, a)
        })
      })
    })
  }, () => !1),
  Nd = "_container_1aw3i_1",
  Sd = "_logo_1aw3i_9",
  Id = "_animate_1aw3i_1",
  Td = "_center_1aw3i_18",
  Ed = "_glow_1aw3i_28",
  kn = {
    container: Nd,
    logo: Sd,
    animate: Id,
    center: Td,
    glow: Ed
  },
  Bd = () => e.jsxs("div", {
    className: kn.container,
    children: [e.jsx("div", {
      className: kn.glow
    }), e.jsx("div", {
      className: kn.logo
    }), e.jsx("div", {
      className: kn.center
    })]
  }),
  Dd = () => e.jsxs("div", {
    className: vd.logo_container,
    children: [e.jsx(Cd, {
      color: () => `hsl(${L(0,360)} , 1000%, 50%)`
    }), e.jsx(Bd, {})]
  }),
  kd = () => {
    const n = l(t => t.user.pixelCoins);
    return new Intl.NumberFormat("fr", {
      maximumFractionDigits: 0
    }).format(Math.max(n, 0)).replace(",", ".")
  };
class Qs {
  static async claim() {
    return P.get("/mining/claim")
  }
  static async info() {
    return P.get("/mining/status")
  }
  static async checkBoost({
    key: t
  }) {
    return P.get(`/mining/boost/check/${t}`)
  }
  static async checkTask({
    key: t
  }) {
    let s = t,
      a = "";
    if (t === j["channel:notpixel_channel"] || t === j["channel:notcoin_pre_release"] || t === j["channel:purego"] || t === j["channel:probablyinsomnia"] || t === j["channel:tonbeholder"] || t === j["channel:notaspidey"] || t === j["channel:nuvov"] || t === j["channel:seinarukiro"] || t === j["channel:sscaleton"] || t === j["channel:waketonup"] || t === j["channel:GameDevDead"] || t === j["channel:zaegd"] || t === j["channel:fakedonalds"] || t === j["channel:pushinton"] || t === j["channel:notcoin"]) {
      const o = t.split(":");
      s = o[0], a = `?name=${o[1]}`
    }
    if (t === j["x:notpixel"] || t === j["x:notcoin"]) {
      const o = t.split(":");
      s = o[0], a = `?name=${o[1]}`
    }
    return P.get(`/mining/task/check/${s}${a}`)
  }
}
const Xn = D("mining/info", async () => (await Qs.info()).data),
  Jn = D("mining/claim", async () => (await Qs.claim()).data),
  Yn = D("mining/checkTask", async ({
    key: n
  }) => (await Qs.checkTask({
    key: n
  })).data),
  Wn = D("mining/checkBoost", async ({
    key: n
  }) => (await Qs.checkBoost({
    key: n
  })).data),
  Rd = {
    info: null,
    tasks: {},
    walletVerification: null,
    boosts: {
      [Ye.paintReward]: 1,
      [Ye.reChargeSpeed]: 1,
      [Ye.energyLimit]: 1
    },
    checkError: {},
    toggleAction: {
      [j.invite3frens]: !0,
      [j.makePixelAvatar]: !0,
      [j.boostChannelNotPixel]: !0,
      [j.boostChannelNotCoin]: !0,
      [j.walletVerification]: !0,
      [j["channel:notpixel_channel"]]: !0,
      [j["channel:notcoin_pre_release"]]: !0,
      [j["channel:purego"]]: !0,
      [j["channel:seinarukiro"]]: !0,
      [j["channel:sscaleton"]]: !0,
      [j["channel:waketonup"]]: !0,
      [j["channel:notcoin"]]: !0,
      [j["channel:GameDevDead"]]: !0,
      [j["channel:zaegd"]]: !0,
      [j["channel:fakedonalds"]]: !0,
      [j["channel:pushinton"]]: !0,
      [j["channel:probablyinsomnia"]]: !0,
      [j["channel:tonbeholder"]]: !0,
      [j["channel:notaspidey"]]: !0,
      [j["channel:nuvov"]]: !0,
      [j["x:notpixel"]]: !0,
      [j["x:notcoin"]]: !0,
      [j.jettonTask]: !0,
      [j.solitaireGame]: !0,
      [j.tonDurakGame]: !0,
      [j.earnCoin]: !0,
      [j.earnCoin2]: !0,
      [j.frogApp]: !0,
      [j.tonPoker]: !0,
      [j.flappyBird]: !0,
      [j.stickerStore]: !0,
      [j.boink2]: !0,
      [j.duckChain]: !0,
      [j.starHash]: !0,
      [j.trmnl]: !0,
      [j.hauntedSpace]: !0,
      [j.capsGame]: !0,
      [j.taskTypeCampaign5_74739]: !0,
      [j.taskTypeCampaign6_74738]: !0
    },
    infoStatus: u.idle,
    claimStatus: u.idle,
    checkStatuses: {},
    activeTab: "tasks",
    charges: 0,
    maxCharges: 0,
    addedCharges: 0,
    reChargeSpeed: 0,
    reChargeTs: Date.now()
  },
  Wo = re({
    name: "mining",
    initialState: Rd,
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
      n.addCase(Xn.pending, t => {
        t.infoStatus = u.pending
      }).addCase(Xn.fulfilled, (t, s) => {
        const a = s.payload,
          o = Math.min(a.fromStart, a.maxMiningTime);
        a.tasks && (t.tasks = {
          ...t.tasks,
          ...a.tasks
        }), t.walletVerification = a.walletVerification, a.boosts && (t.boosts = {
          ...t.boosts,
          ...a.boosts
        }), t.info = {
          ...a,
          coins: a.fromUpdate === 0 ? o * a.speedPerSecond : a.coins,
          initTs: Date.now(),
          coinsFromUpdate: a.fromUpdate * a.speedPerSecond,
          boosts: void 0,
          tasks: void 0,
          charges: void 0,
          maxCharges: void 0,
          reChargeTimer: void 0,
          reChargeSpeed: void 0
        }, t.charges = a.charges, t.maxCharges = a.maxCharges, t.reChargeSpeed = a.reChargeSpeed, t.reChargeTs = Date.now() - (a.reChargeSpeed - a.reChargeTimer % a.reChargeSpeed), t.addedCharges = 0, t.infoStatus = u.fulfilled
      }).addCase(Xn.rejected, t => {
        t.infoStatus = u.rejected
      }).addCase(Jn.pending, t => {
        t.claimStatus = u.pending
      }).addCase(Jn.fulfilled, t => {
        t.claimStatus = u.fulfilled, t.info = {
          ...t.info,
          coins: 0,
          initTs: Date.now(),
          coinsFromUpdate: 0,
          fromStart: 0,
          fromUpdate: 0
        }
      }).addCase(Jn.rejected, t => {
        t.claimStatus = u.rejected
      }).addCase(Yn.pending, (t, s) => {
        const a = s.meta.arg.key;
        t.checkStatuses[a] = u.pending, t.checkError[a] = !1
      }).addCase(Yn.fulfilled, (t, s) => {
        const a = s.meta.arg.key;
        t.checkStatuses[a] = u.fulfilled, t.tasks[a] = s.payload[a], t.checkError[a] = !s.payload[a]
      }).addCase(Yn.rejected, (t, s) => {
        const a = s.meta.arg.key;
        t.checkStatuses[a] = u.rejected, t.checkError[a] = !0
      }).addCase(Wn.pending, (t, s) => {
        const a = s.meta.arg.key;
        t.checkStatuses[a] = u.pending, t.checkError[a] = !1
      }).addCase(Wn.fulfilled, (t, s) => {
        const a = s.meta.arg.key;
        t.checkStatuses[a] = u.fulfilled, s.payload[a] && (t.boosts[a] += 1), t.checkError[a] = !s.payload[a]
      }).addCase(Wn.rejected, (t, s) => {
        const a = s.meta.arg.key;
        t.checkStatuses[a] = u.rejected, t.checkError[a] = !0
      })
    }
  }),
  ta = n => {
    const t = Ye.paintReward,
      s = n.main.settings,
      a = s.UpgradeRepaint,
      o = n.mining.boosts[t];
    return o === 1 ? s.RepaintReward : a.levels[o].Boost
  },
  {
    setCheckError: DE,
    setActiveTab: Ud,
    setToggleAction: Od,
    setAllToggleActions: Md,
    setMaxCharges: Qd,
    setRechargeSpeed: Fd,
    setCharges: zd,
    addCharges: Ko,
    addAddedCharges: Hd,
    subCharges: qd,
    restoreCharges: kE,
    setTask: Ld
  } = Wo.actions,
  Vd = Wo.reducer,
  _t = {
    info: Xn,
    claim: Jn,
    checkTask: Yn,
    checkBoost: Wn
  },
  he = "data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M5%200C2.23858%200%200%202.23858%200%205V27C0%2029.7614%202.23858%2032%205%2032H27C29.7614%2032%2032%2029.7614%2032%2027V5C32%202.23858%2029.7614%200%2027%200H5ZM21.4261%2010.5739H10.5739V21.4261H21.4261V10.5739Z'%20fill='white'/%3e%3c/svg%3e",
  Gd = "data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M5%200C2.23858%200%200%202.23858%200%205V27C0%2029.7614%202.23858%2032%205%2032H27C29.7614%2032%2032%2029.7614%2032%2027V5C32%202.23858%2029.7614%200%2027%200H5ZM21.4261%2010.5739H10.5739V21.4261H21.4261V10.5739Z'%20fill='%238794a1'/%3e%3c/svg%3e",
  Xd = {
    white: he,
    gray: Gd
  },
  An = ({
    size: n = 11,
    className: t = "",
    style: s = {},
    color: a = "white",
    ...o
  }) => e.jsx("img", {
    alt: "",
    className: t,
    style: {
      width: `${n}px`,
      height: `${n}px`,
      ...s
    },
    src: Xd[a],
    ...o
  }),
  Pe = ({
    num: n
  }) => isNaN(n) ? null : new Intl.NumberFormat("en-US").format(n),
  Jd = "_blocker_wufj5_1",
  Yd = "_popup_wufj5_11",
  Xa = {
    blocker: Jd,
    popup: Yd
  },
  Ht = ({
    show: n,
    setShow: t,
    children: s
  }) => {
    const [a, o] = p.useState(!1), [i, r] = vs(() => ({
      from: {
        transform: "translateY(100%)"
      },
      config: {
        duration: 300,
        easing: ws.easeOutCubic
      }
    })), [c, d] = vs(() => ({
      from: {
        opacity: 0
      },
      config: {
        duration: 300,
        easing: ws.easeOutCubic
      }
    }));
    return p.useEffect(() => {
      n ? (o(!0), r.start({
        transform: "translateY(0%)"
      }), d.start({
        opacity: 1
      })) : n === !1 && (r.start({
        transform: "translateY(100%)",
        onResolve: () => o(!1)
      }), d.start({
        opacity: 0
      }))
    }, [n]), a ? Ke.createPortal(e.jsxs(ae.Fragment, {
      children: [e.jsx(bs.div, {
        className: Xa.blocker,
        style: {
          ...c
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
      }), e.jsx(bs.div, {
        className: Xa.popup,
        style: {
          ...i
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
  };
js.getSelectors(n => n.user.pixelsForSale);
Ps.getSelectors(n => n.user.pixelsSold);
const Ea = Cs.getSelectors(n => n.daily.list);
Ta.getSelectors(n => n.reward.list);
const Zo = cn.getSelectors(n => n.tournament.approvedTemplatesList),
  Wd = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  De = n => {
    const t = new Date().getFullYear(),
      s = n.getFullYear(),
      a = s === t ? "" : s,
      o = n.getMonth(),
      i = n.getDate(),
      r = n.getHours(),
      c = n.getMinutes();
    return `${i<10?0:""}${i} ${[Wd[o]]} ${a} at ${r<10?0:""}${r}:${c<10?0:""}${c}`
  },
  Kd = "_main_canvas_1cgxj_1",
  Zd = {
    main_canvas: Kd
  },
  Ns = n => ({
    x: (n - 1) % I.width,
    y: Math.floor((n - 1) / I.height)
  }),
  ot = ({
    x: n,
    y: t
  }) => n + t * I.width + 1,
  hn = ({
    x: n,
    y: t,
    width: s,
    blockSize: a = 4
  }) => (n + t * s) * a,
  na = ({
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
  pt = n => {
    const t = parseInt(n.replace("#", ""), 16),
      s = t >> 16 & 255,
      a = t >> 8 & 255,
      o = t & 255;
    return {
      r: s,
      g: a,
      b: o
    }
  },
  Ut = (n, t, s) => ("#" + (1 << 24 | n << 16 | t << 8 | s).toString(16).slice(1)).toUpperCase(),
  gn = n => !(n.x < 0 || n.y < 0 || n.x > I.width - 1 || n.y > I.height - 1),
  Kn = D("canvas/repaint", async ({
    pixelId: n,
    newColor: t
  }) => (await F.startRepaint({
    pixelId: n,
    newColor: t
  })).data);
let Bt = null;
const Aa = D("canvas/getPixelInfo", async ({
    id: n
  }) => (Bt !== null && (Bt.abort(), Bt = null), Bt = new AbortController, (await F.getPixelInfo({
    id: n,
    signal: Bt.signal
  })).data)),
  Zn = D("canvas/getPrices", async () => (await F.getPrices()).data),
  $n = D("canvas/getPriceMask", async ({
    price: n
  }) => {
    const t = await F.getPriceMask({
        price: n
      }),
      s = new Uint8Array(t.data);
    return w.mask.draw({
      arr: s
    }), {
      result: !0
    }
  }),
  $d = () => So() ? localStorage.getItem("enableAnimations") ? localStorage.getItem("enableAnimations") === "true" : (localStorage.setItem("enableAnimations", "true"), !0) : !0,
  eu = {
    coords: null,
    animations: $d(),
    stats: null,
    pixelInfo: null,
    getPixelInfoFetchStatus: u.idle,
    repaintFetchStatus: u.idle,
    prices: [],
    selectedPrice: null,
    priceMaskFetching: !1
  },
  $o = re({
    name: "canvas",
    initialState: eu,
    reducers: {
      setCoords: (n, t) => {
        gn(t.payload) && (n.coords = t.payload)
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
        gn(t.payload) && (n.stats = ot(t.payload) ^ 3201282)
      }
    },
    extraReducers: n => {
      n.addCase(Aa.pending, t => {
        t.getPixelInfoFetchStatus = u.pending
      }).addCase(Aa.fulfilled, (t, s) => {
        t.pixelInfo = s.payload, t.getPixelInfoFetchStatus = u.fulfilled, Bt = null
      }).addCase(Zn.pending, t => {}).addCase(Zn.fulfilled, (t, s) => {
        t.prices = s.payload.prices
      }).addCase(Zn.rejected, t => {}).addCase($n.pending, t => {
        t.priceMaskFetching = !0
      }).addCase($n.fulfilled, t => {
        t.priceMaskFetching = !1
      }).addCase($n.rejected, t => {
        t.priceMaskFetching = !1
      }).addCase(Kn.pending, t => {
        t.repaintFetchStatus = u.pending
      }).addCase(Kn.fulfilled, t => {
        t.repaintFetchStatus = u.fulfilled
      }).addCase(Kn.rejected, t => {
        t.repaintFetchStatus = u.rejected
      })
    }
  }),
  {
    setCoords: Ot,
    enableAnimations: tu,
    disableAnimations: nu,
    addPaintCoords: su,
    setPriceMask: RE,
    setSelectedPrice: UE,
    updatePixelInfo: OE
  } = $o.actions,
  au = $o.reducer,
  Fs = {
    getPixelInfo: Aa,
    getPriceMask: $n,
    getPrices: Zn,
    repaint: Kn
  };
class ou {
  constructor({
    viewport: t
  }) {
    this.viewport = t, this.pixiViewport = t.viewport, this.pixel = null, this.line = null, this.hexColor = "#42a6ff", this.color = `0x${this.hexColor.replaceAll("#","")}`
  }
  draw({
    x: t,
    y: s
  }) {
    gn({
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
    this.line = new PIXI.Graphics, this.line.setTransform(.5, .5), this.line.lineStyle(.2, this.color), this.line.moveTo(-.5, s).lineTo(t - .5, s), this.line.moveTo(t, -.5).lineTo(t, s - .5), this.line.moveTo(I.width - .5, s).lineTo(t + .5, s), this.line.moveTo(t, I.width - .5).lineTo(t, s + .5), this.line.zIndex = 10, this.pixiViewport.addChild(this.line)
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
const Ce = {
    idle: "idle",
    start: "start",
    finish: "finish"
  },
  iu = {
    command: Ce.idle,
    counter: 0
  },
  ei = re({
    name: "progress",
    initialState: iu,
    reducers: {
      setProgressCommand: (n, t) => {
        n.command = t.payload.command, n.counter = n.counter + 1
      }
    }
  }),
  {
    setProgressCommand: We
  } = ei.actions,
  ru = ei.reducer,
  cu = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAElBMVEVHcEz/////96f/uQD/WQDnERFRxRXOAAAAAXRSTlMAQObYZgAAAKRJREFUeNrt1MENgzAQRNEVUEBqmKUA5DF3C7sApJj+W4kQKcCjHLP//m6jsSiKoiiKon9uKjpZbYZIPEEkM6ESQCW8hQto2r7ExwnwkH2YzHhikUk+h8mSHuLCBBIO3K3j5O0HEgAfJz1XOAGOk0Y2eKVJJB2eFdKvnnbShFpl3clTIWRtVSJGdmYWhdR8ceubQuZiLCa1mDWTe8UzR1EURT/0AVQMHG7ZD4ErAAAAAElFTkSuQmCC",
  lu = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAD1BMVEVHcEz/96f/uQD/WQDnERHKPBirAAAAAXRSTlMAQObYZgAAANhJREFUeNrt1cFthTAQhGHyoIFZN/A8SwHEQwGI0H9N0dNKOa+V634Hbr/QyLK8lFJKKaXMOucTXasvA1OJBoCpJArLB18Ink9eUZhL2WSNhPnE1KMxnckENhB0ZBMQwa/0EkNouWKgoyFYLukwtIGQTcCOHklu/jdgf2ve2aNvAPrE/q3DAbDn92+D6jAYCXBJEUkXGkxK3xVyQELLJpvORwPcH2rJWSXSSZ3UNZV4b4ok40Xuuru5jmyykvtzk++fSDLIY7k/nzz651e+TBhHPTGllFL+5xfUYCDCcZqQBQAAAABJRU5ErkJggg==",
  du = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAD1BMVEVHcEz/96f/uQD/WQDnERHKPBirAAAAAXRSTlMAQObYZgAAAQRJREFUeNrt1sFxxCAMheEXewtAJAUY4QIwcgGJof+aQtiZ3b2tdMlJ3/0fATrYcM4555zZBjMCsNg62oCfMDLSJwQcAUiWZPhMRNGUTAHf1mRr0FkeSS3Q+XgkOVGARqIXm/YaT6YJU9Te4ynAPCbAPCaaljIlxZM1JusLrJUG02ZuNVmKaeFIQ6SJAU1yH5NUM6aLX5MAhcYH/eGkTiRXGiIPuoMtOQsP6V7pEj7rHDCbrEqqiJwXTcwFbzU5s9S5ljhPp0n6JQdRoigiqIS3zo51H8kXZ5EMCFTWkexNWoZeJZLe0wa9hSITZRisXHrvMNlxk2L+9LUCq1vxnwbnnPtnvyvQK1qRfQjwAAAAAElFTkSuQmCC",
  uu = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAD1BMVEVHcEz/96f/uQD/WQDnERHKPBirAAAAAXRSTlMAQObYZgAAAYJJREFUeNrt1tGN2zAQhOGJ5QIyvBQg7roA3a4KcEL2X1O0MpDY8IEikbdA3/uPEWXCEE6n0+n0n7lg2LcZm2kZSdK+NY8knAH8umGTv3cmMWMaBXsTzri640J2JheGpEZG3IVPgDuOTfwrofQ/2MOHrOiQX5JlcITJMzk0sktom5wvjn4ahrEk8ytz+6p85fhlDZ4+N5KBmTQPz2SyEV3d3kcOXlux/DbSLGJG3pJWEYpkvvo8KHCVzMRnFkWTCPPzsZPajKNEXs6duWAsScd/S1cR5cOeSkdi4nwwIWPyA22T6ZoZkknIVLSVLZG90RpNQJu7riYb9VqMHcnVXbzIZitEjREtR4l5qLW6iBtJUbRM7iWKzLS6iKlnMjVnivvq7kby5qam7kJqO1lrUf8k+cN3CzwTDV7vgJU/yWoLMBmOTLefkcRDFkUfi5Vb3QpZ0MnI5LWWrOh1IVVIKrpNIm4ijpFEUWu9Y4Dc4+5gxA1AGUvu+xXFsHJ+zZ5Op3/zG2ZWUn+tdqomAAAAAElFTkSuQmCC",
  pu = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAD1BMVEVHcEz/96f/uQD/WQDnERHKPBirAAAAAXRSTlMAQObYZgAAAnBJREFUeNrtl12y2jAMhV2SBVSiC4iPuoDEJwu4c8P+11TLLoROr0P80ocO3/AzAX+RLNlmCG/evHnzD7lM/Yr1K7E7zLBob36DyOSKdSkehgznEQ8zWOpTNFyAORSSnUgsExIw1cs0nVMmAOZlu8h1PqcoMuEime8nWim/AeSsEuUPpn6F7FdwNPHZX7KhortnrxXJRMkKqqYpfNOvBWDeayyI6opjITaUZDJlA0WBAYasOhFTIy3WwTWKJRAgy4Uctl00VoUkAIqjL9oOf4KZBNqLbkZxFFF5B3uQgzBaY3xszJSq2dzuS6qKuhFGtwD/oK2EJd6VNV9tYWMimSQcKFqmDjIURjLWuusAfJEWzEhAFFyfe6WSSV8pAVEWgYrCjcLt05X2HhhcqTv4AaTQLBsFpcSY/1IUc6vIgCu2zw8i/oitdiaJboBPzYUjy7XVS0RRGLnfQ1SjRuF8sO8V3L/f6pKTg/4nZKJcHwoEmaOFCUf2ESMTnCkcR5E9SjACRq5t5eJGfDpTSwVJtpVPeM2eGi2igB1FYVFE62/rYENRcKCMrImJqB+DbhflaFsSGVe83YNI1uG0lY3poSguHg2Fn02FRUFVRONDsQOFBkcUPl4EiMVqz56rJdRRkoFT3j+as+e60BWRopSeECI6N2fP23ZlqklVhVw3tI/YbNxuC0lXoiu1i+OGlpKiiN2UTCK4K5/hEL8fCKvbxg2sMbxiy4kQd4zpRzjDszJ8nFK2KFozI8M5RlcsubKGk4iokVGuc+hQSCZYj2K8jQTPK1GZC0V2KLA19CprXaUe6yRWho6WQi/L9f3X7M1/zC/mbn/kN4xkqQAAAABJRU5ErkJggg==",
  mu = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAElBMVEVHcEz/96f/uQD/WQDnERFAMiwoKjrVAAAAAXRSTlMAQObYZgAAArpJREFUeNrt10F2mzAQBmDV4H1H5ADMrx4Aa9Q9CXif9xLuf5VqJHCTgGJot/4XXvjxSYw0kp/NI4888khK1R0n4V9nkQOkfm4T6Q8QtiZmPEKIWiXmQIh0Gu+OEJ2mApZZpd9DrDkB8/6McldUFGM80JqU07iPtAC0GBgms49YQIthItpBTjQHYNpJeDFMGnucNNIdJr4td0reMiayFvqZib1PUuGIBqAU197p64rIwokHFmK77aYR6W8kCo3HhTgZetrqgCHk/kUWv4dZqWH6uVnIeNs+dCLX6T0ZJENt6WRpGHCmCtcwjYsp7+a8pIAEc56GaXodlldry72VyaDkGokZrpN4Jivm22nYvl8jiTFmmsKbB9CWiHAiEse/keF7UtkbMeeZxIUDWepKhFhrCUpyppgB4intnHyBtYRTXp/fOr7mnMgEsiCytXwlRi7UkOWFZKTEsyXN0+r+rH0kBLg81s28vszk57rPRrZMbN2nsaYpHblC09RxOLDFalUSsei2VowtWTjzMefX8xuDCGzXYOl8+UKmd8TQpTGbWROtxmqR0hVITFgR6JKp2EvOrwCKJ6ZS0m8M1JYvPQAuHCKVEuk3vi2jRLoVcSKhIGoAdkVOgIgUSOUBWhXjAVecZfAA26Zfl1Iky0W8EnBdoRSRTLrPlWgKpMqEqflcieZXkXifUXf7zmbiCtWLvAgAAtwiCOCktomIDI0HiMnOZl4PAvoCCeNFJD3DeQ4LOBEQ2e36oxiHRsRHkpb1okQkDChd/jpYeHYirI+CZfnpMPVQ7MvRw3kIciiTF/Ntaum103LyZIHNvWSyxIl/uk9qT/SBVL25nxclJr+ZiNmTH/k2yyTsJU605ZiazuwjOrgSD7eTnPJhrmuB7CWQfm663cSpOEbC3wOk+Ehq583RXJrHX9NH/jt/AL3WmbEKtmBpAAAAAElFTkSuQmCC",
  Au = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAFVBMVEVHcEz/uQD/WQDnERFAMiyACgUZDg0R26nsAAAAAXRSTlMAQObYZgAAAthJREFUeNrt18GO2jAQBuBZzHJmTMU5Hrecsx5xb3etnNGi3AFF8/6PUNsJywJ2Sa4VvxBSJH+ZxB6TAM8888x/mFk1nVjoQ9OrUD2WqPNIHk/gTGAC0dMnAKup5AVvyjj7mMQy6mvGlKtGEA3gqLpM4mMSyxBZGJ23QJaKiKBPNY7oWSB17IUZLscRpJAKZohYJpflNthHE+FI0g/cnFD3dMS9kBaDKGIGwvyYrCVU6JrjmVB+GNWXFlt3Xuben8TgRgxaGnZesY1ecO19E0gjRy1yRO2yfab42xz/SCTktOn8EdHmN5y6IYtIGvH+DyIaLLVW6l+D+qf3v6GLJHy9y0ljiQzLN5BYRgIREURdIskEFAYfAOJ1pUJiSqs5i0AMUSoCEkQk4XPUUIhB3EgnIpEsAGAg/mhrKJYR8U1PDhBNlwgRFKJcJF7CwAi6BhYSD/wpSxRZgDcTSCwjANEcIF1mA2aVM1QFojfSXciigbkECWCWEOOouioTjizzRvxvkQOkeJgfgoSODGIFiq4JMCC+4WYYfyapmm9OGALqptFUbQJZfydNJMlIIsD3k0yoFwJfOQxVwIspNA3h7QokL4EckWyOOLzpJjn0RORE+T5TVNgYIi8rrPMtY5aQD64Y8oSq0g/oCiYRRcUdAy5PHNVQCmVJ9xHJlCoL74ksTLmXzntm3hXIZ4FY5rpAOHfR3vv3YpVXtpAl3paIypbvUhnIZ58l80hsgTDXKjvJ3tGuROJXxnxQYTFfs0RR/0Av3D1v67s3lhkZRE2/SqTdc8h1EzG7gGyBtG17RyxzG4zO30sbc092AK0jgDK6JspuK/hn2vbm4Tuzn0vIJNOcyg4HbHaPyd4sARxRRI7rLTzOq0FQlUorbke+kyNqW6enlLK8G0viydkhMsBIkk7OTDSWGB0F7PbOjiVkt+emG02CmEjs7msDBTwtn1xNJQrr51/gZ67yF2l/ou0eQckjAAAAAElFTkSuQmCC",
  hu = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAElBMVEVHcEz/WQDnERFAMiyACgUZDg3ZC39iAAAAAXRSTlMAQObYZgAAA7xJREFUeNrtmE2TozYQhhUDd0vZ3FEDdw0Nd1bGdy+y/v9fSbfEEAKiAqmtrdqqeS+iGD3qD3X32BZf+tKXtpL/AynFKf1xXx7hLKL+QcRJ5E8jZqE4qWpBzGlEXEZQXFYmEtJKXFSu75ctd+VlBM9u9MvTfyZPS774AvvTWbxJKcsZcf25miFEEeJQOMTXWUTOHiFqJbJDDBbHomdalogd0Rm+YpEfIoKReyArbIl2hByXwGLl2xBCwg5giEi2aTk6a7mD74yoR1geaGvhI2JSdRcRkCSowlJ770y6Xm+AyzNoMgIPAF6cQ3PQPrdPpDAWWDgvTof8pfR5mMMOSLWPCzrJKpN9FBH2g89/eOwsLTgF5J42MyOtQksEydkad0gCRC15v1Z9oPAjIN8O71CVjDSIvZSNb6VCbAOihjSiQ4lYYESrxutYMSwYDoywmg6eiB6g79gh18VrKo+KnjdRBISQLDvk3xA07F0qPxHVYx/idnw8eD9fkyj6jQEkLiLkliYOnQ1bI/P0wuGLfV8YTYgMoki+c9jouoA4XVmoMSJ6hdyqBWneHC/PihHGx8TP9tHKkh3jVlgEJtNMKKhazUmI/Y5TDE9LFUZgXu6TDPBoQcr5sCJevmcwNQKdJYKQbpVTF5Ef6QYo+hZYiJ0dl7ehnStCUozDd+yQdf7zGOCULk3EnjtkKF7r+CLS6STiuEzGetjMhODYpBl87WJBYrZvc9BSjc+JSdiP9IwRj2bDkJ4UpaxHTJjpPff+1pCtn76FcXygEVt574V3JhEkJ7NOISKGkkLQAiAhJ1UQ0edQI75OfyZw2NNmApOEVO6VKKUZPECwlYprNgGm/HIA4HSYwIboc3ECTPM4/SzdW1xv6QMyni0/IjLSouIkCVY/GExZ0bJqw5a8lqQYHr/Aj4OxrLnOAWCF3Obh1iaR+OeKe8ZPwKdn7FBQ9U6OWBN8+MvZOvwn41gWpPF22MdujAyI93xrHdQjbZKtnN8iHiLNJEsXxysjODvWqj0icqNn5M7N1gWk8RDCr7QsE8gQwkfUJSMuzNLeA7cypJFxyEHK0BUFek+948yNE8h6WkghmbEANQ/4wnvXM0IGlk8Bw94vQnjWh0r3c6VrCty/7ZjFKYJbZH2MQ1M4IaxUjSdliAa7PUIzZFVvL4+EADSIZBFRYDeIHfLvV4zkFDgj846Ts8IT8lrOPKWQ7iBCTn0fMau3hPxMobkI5AOai99COJmXkXWY4ylmHFdOjlc9ywm/ql+BMPMb/ajxN8we1xzBMA0/AAAAAElFTkSuQmCC",
  gu = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkAgMAAAANjH3HAAAADFBMVEVHcEznERFAMiyACgVxtGBQAAAAAXRSTlMAQObYZgAAAodJREFUeNrt1TFqG0EUBuA/GgTGeJnG6d0EzDZxs53N6ggq8phmQVdYkjYgBR8gV1ATMGlyhQGfYVATcoZp1I15mZ0dzay16ygkkCo/KoQ+3lvtm5ld/M/vpvoDqTGRJXxuJ0A08Lmekh9BNhO03eKQy5MyjntZbjDMDKcz+3xC/kXOMEyxQs58KBXpkbxBl9fUZpEI+aJ7WaJoosTxfvNyvq2oiR2zyG0nc3qXO25SbahR2lBsd4GU2dZ42dMKOxzH/6qZ1oLwLOcPeKK1ZmZB+kiumBm1Fz4W1F4EOzCeywaSHSBtiXH6NuVoM4oW2HVyT+rZCoSRkfbyiQ6DeLUAKmqLpsTOCwqiZZT3gCElXQkGjI5SLCAsQESPXgBB7Zyo6QXXQTQQWjW+ZhWXpoTwYoPcBVkDeKvDpYiUDaeupo9yT4wuSSrVCTvB7OXsOojwre2eNMKImF0+sobWvQi2Xm1evTvF9knpvsEHfsxrJJk1c6xv6oIWQ5GuXw5Dej7YlKGgF6LFnFTaOILj/p91UhDpgwD4isMdtDLLxn+iSKImS+iPgRiVZZbE+G5P6yQ5cr+yYMZEmIcimiFZ1A4xVZCUBzmUokPT9oIUXx0WjppjEQ6GAEkqSQ55qYlSxxyjopAa3YYXQ2Gi+J6vo1B3slcoiBqo4TNHOIQjNydSyKM21IahsrsMYqJ0vZdBandZEBE47VEvlQYg7a3/rlAPpK0Wsd7QCinCS9G33gkmLjMZOlTQI7MrRRth0+3cKG3N9rxo0qz5IMYKByTRIglb+EiHUXoRUYS1mM59ltMvI/Gi3LxcoxGiJ+REh1P/6srFIY7J/bqnxDgXvYipC6Wi6ci/eqn+BJYAHRseeKj2AAAAAElFTkSuQmCC",
  _u = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkAgMAAAANjH3HAAAADFBMVEVHcExiV01AMiyACgVW8W35AAAAAXRSTlMAQObYZgAAAipJREFUeNrt0jGK20AUBuA/EoaVWFDl3o1CrGpvIB/BRd7EeBuVwU2uMGy6NKmUeiAY7NlDWNk75A5hq4lrw2Tk0egh24GQLIGE/cFYw8e8mfck/MeJ8ZS5usLTpPk5TdAnwq/lT291jX81k99tVsEnWeI0Ei43yEkixC3BGVN1VjPIPDuRbmdOi7LBpYzodSu5xDAZchIfAdSzEymbmoScOBneIzZls6alBKDVsNYhw5ZWbbVCDmsdAK11FjoYSFxoDeAAnzAxJ0h334YyAXJ6Z14C1iQVhqlJoL6T1owWgEJOVZgqEcn67rPb89aJHJPw37MX7WT/QfkSBJ/IiSok7IMEEB9YXhAJBaD0Tdu2BKDAgk6+Eqm+2nIowvS3XrUSd/JIt6HfqdAKN6Ybu33U90FSrSXQSWLd0gwkHFpBa3RRWoNFoNj0Ejnh5pApcAZSNp/ixi83LAmRLB/ofZBIBpkSVVlCM1wUjNzvLAWRdCIuSL2Sx8POJNJavkp7MYgbJhbEB8QG4KS1CJIfH/JFkO3KC/YkYwBj0QnPNDqWjWqSZ6J3TVu9b52nXVjDEgFpJ8kCR1n3e0IXtfCy7c6JKv5GpTV8bvllwa9k1t4AhRf7XXQycqLgkrYyv7Z7Ftr5sptWYPcbrmYbhChYEySiNyyAKXnu61svYfAcfW+bpLokqbZI5v7MCibrgfv2r8hJInGaXPi/6kymy4vCAyrUmaReUoXn/MX8AOTf3EjQ8IXZAAAAAElFTkSuQmCC",
  fu = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkAgMAAAANjH3HAAAACVBMVEVHcExiV01AMiwfKIGrAAAAAXRSTlMAQObYZgAAAUlJREFUeNrt1TGKFEEUBuCvHwzMdOxuJGKyy7inmCNsMNU0Rh0aeoTCExjYi2Fj5IW8icgEixo+aLpgMZT50r/+ggrqPVdX/7UYqm2HMtm2K2MrcQZP1vZuIcpmC0oFgrTAj63OskePtVhI4SWikoLDew13ZXIPAaq5VGA+hQpiJD4pZQQKFegGiFLOwBlAPEKcujOITL5V6BhAl8kCcFsJ0gTwE6GzLfw+aTmSDhV6YC9FmeCIIJB+wQX0e6k7d1BBj0weNRxOpL4C8A44TAQcrby+EJA64OOztQfAYC0AN5OG3aihayZG0jxJH0hllL5LPYAFi0CM8IYUwN0Ib0l9FXCxtgAPFbKTQsP84qmyz481WrkH5tMrKzcVFEg77CaEP6w9A58h9VC1XpiJtictX1pH8squapnAV2y2YyA0NDp6LXHdhv/qL+6eN5hJ+KKhAAAAAElFTkSuQmCC",
  xu = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkAgMAAAANjH3HAAAACVBMVEVHcExiV01AMiwfKIGrAAAAAXRSTlMAQObYZgAAAQBJREFUeNrtlUEKwjAQRX8DlcaVCwWXXRjxGLmExWWOMniCLsR1jyp2kGCT31pEcNG3avMyTWYyoVhY+DekJsKgAqhjFHjiBCn9WOlpZECKbqHLGaPfZDGYZephgo0A2bWtB2wvRQPdOag5xGK2ADrZoUHPJi6g6d+wQ54WZayWcnpFFqIPb0bpBgYDI3lj1H9eLZk4fiNMXN/eAgu5gdHiZ5guHbpAzTptPGbqGR1HprgLIisgsjXExPqd1CSoWYPBTTVl7uwq2Ya1ovV8H7NxgQjjhwPgOVlh51cGZCg8gD01FbkZX+OEGjolbiaAoakc6TGXwkxBzGi+svx1R3kAWDoiQG5YEtEAAAAASUVORK5CYII=",
  yu = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkAgMAAAANjH3HAAAACVBMVEVHcExiV01AMiwfKIGrAAAAAXRSTlMAQObYZgAAAP5JREFUeNrtlU1qwzAQRp8FLlJWXTTQpRZVyTF0iZosdZShJ/AidO2jFoKJ8M9HcUPIxm9l62kYj2aE2dl5DhaFcHiQTtEAkIwlBtBmGVlY4gEY1owDMBnDJhOZ4jqD1dwhQ7Bb7kj6Klz5qIfZA4Md6bjyWhNkAC4cWaenhWllJ8bIxsaHmQGGmWFmTJoojVc9xKFwpsT35K2okAuKnofhhuXSeTSH5eApEzdMnNiSzlReoPLmhKnnd7qZSjUHFNr4v8yPukqhU2MVsv6OzaQihMvzBXRNwVT/2sIKTQbepfHiZtxNMmnqFtnCgmAs5VO2uTVlGml0vdj+1/0nv3CcIl47CPeHAAAAAElFTkSuQmCC";
let vu = class {
  constructor({
    app: t,
    viewport: s,
    mainImage: a
  }) {
    this.app = t, this.pixiViewport = s.viewport, this.mainImage = a, this.size = 5, this.bombs = [cu, lu, du, uu, pu, mu, Au, hu, gu, _u, fu, xu, yu], this.textureArray = [];
    for (let o = 0; o < 13; o++) {
      let i = PIXI.Texture.from(this.bombs[o]);
      i.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST, this.textureArray.push(i)
    }
  }
  async boomWithDebounce({
    x: t,
    y: s
  }) {
    await rn(L(50, 3e3)), this.boom({
      x: t,
      y: s
    })
  }
  boom({
    x: t,
    y: s
  }) {
    const a = new PIXI.AnimatedSprite(this.textureArray);
    a.loop = !1, a.animationSpeed = .17, a.zIndex = 2, a.x = t, a.y = s, a.scale.set(L(1, 2) === 1 ? 1 : -1, 1), a.anchor.set(.48, .55), this.pixiViewport.addChild(a), a.play(), a.onComplete = () => {
      this.pixiViewport.removeChild(a)
    }
  }
};
const wu = "_order_panel_dvy5p_1",
  bu = "_content_dvy5p_13",
  ju = "_fast_mode_blocker_dvy5p_26",
  Pu = "_info_dvy5p_39",
  Cu = "_active_color_dvy5p_48",
  Nu = "_pixel_info_container_dvy5p_58",
  Su = "_pixel_info_color_dvy5p_66",
  Iu = "_pixel_info_text_dvy5p_72",
  Tu = "_info_button_dvy5p_78",
  Eu = "_info_button_active_dvy5p_95",
  Bu = "_price_value_dvy5p_99",
  Du = "_pixel_locked_text_dvy5p_105",
  ku = "_pixel_locked_text_painted_dvy5p_116",
  Ru = "_pixel_locked_animation_dvy5p_138",
  Uu = "_button_dvy5p_144",
  Ou = "_button_text_dvy5p_168",
  Mu = "_flash_mode_button_text_dvy5p_181",
  Qu = "_not_pixel_icon_dvy5p_192",
  Fu = "_tg_logo_dvy5p_196",
  zu = "_image_dvy5p_201",
  Hu = "_inner_wrapper_button_dvy5p_206",
  Z = {
    order_panel: wu,
    content: bu,
    fast_mode_blocker: ju,
    info: Pu,
    active_color: Cu,
    pixel_info_container: Nu,
    pixel_info_color: Su,
    pixel_info_text: Iu,
    info_button: Tu,
    info_button_active: Eu,
    price_value: Bu,
    pixel_locked_text: Du,
    pixel_locked_text_painted: ku,
    pixel_locked_animation: Ru,
    button: Uu,
    button_text: Ou,
    flash_mode_button_text: Mu,
    not_pixel_icon: Qu,
    tg_logo: Fu,
    image: zu,
    inner_wrapper_button: Hu
  },
  qu = "_panel_1mia4_1",
  Lu = "_item_1mia4_15",
  Vu = "_active_1mia4_24",
  ha = {
    panel: qu,
    item: Lu,
    active: Vu
  },
  zs = ({
    children: n,
    className: t = "",
    style: s = {}
  }) => e.jsx("div", {
    className: `${ha.panel} ${t}`,
    style: {
      ...s
    },
    children: n
  }),
  mt = ({
    active: n,
    setActive: t,
    children: s
  }) => e.jsx("div", {
    className: `${ha.item} ${n?ha.active:""}`,
    onPointerUp: () => {
      t()
    },
    children: s
  }),
  ti = n => n ? n.friends >= Hr.friendsForTemplateCreation || n.isContractor : !1,
  kt = {
    create: "create",
    main: "main",
    result: "result"
  },
  Gu = () => {
    const n = g(),
      t = l(a => a.tournament.activeTab),
      s = l(rt);
    return ti(s), l(a => a.tournament.myTemplate), e.jsx(zs, {
      children: e.jsx(mt, {
        active: t === kt.result,
        setActive: () => n(Ju(kt.result)),
        children: "My results"
      })
    })
  };
let Jt = null;
class ke {
  static async uploadTemplate({
    blob: t,
    posX: s,
    posY: a
  }) {
    const o = {
      "Content-Type": "application/octet-stream"
    };
    return s && s !== "" && (o.posX = s), a && a !== "" && (o.posY = a), P.post("/image/template/upload", t, {
      headers: o
    })
  }
  static async uploadTournamentTemplate({
    blob: t,
    posX: s,
    posY: a
  }) {
    return P.post("/tournament/template/upload", t, {
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
    id: t
  }) {
    return Jt !== null && (Jt.abort(), Jt = null), Jt = new AbortController, P.get(`/image/template/${t}`, {
      signal: Jt.signal
    })
  }
  static async getTournamentTemplateById({
    id: t
  }) {
    return P.get(`/tournament/template/${t}`)
  }
  static async getSelectedTemplate() {
    return P.get("/tournament/template/subscribe/my")
  }
  static async getTemplatesList({
    limit: t,
    offset: s
  }) {
    return P.get(`/image/template/list?limit=${t}&offset=${s}`)
  }
  static async getApprovedTemplatesList({
    limit: t,
    offset: s
  }) {
    return P.get(`/tournament/template/list?limit=${t}&offset=${s}`)
  }
  static async getRandomTemplates() {
    return P.get("/tournament/template/list/random?limit=16")
  }
  static async subscribeToTemplate({
    id: t
  }) {
    return P.put(`/image/template/subscribe/${t}`)
  }
  static async subscribeToTournamentTemplate({
    id: t
  }) {
    return P.put(`/tournament/template/subscribe/${t}`)
  }
  static async getAvailableSizes({
    userId: t
  }) {
    return P.get(`/image/template/sizes/${t}`)
  }
}
class ni {
  static async getPeriods() {
    return P.get("/tournament/periods")
  }
  static async getResults() {
    return P.get("/tournament/user/results")
  }
}
const es = D("tournament/getPeriods", async () => (await ni.getPeriods()).data),
  ts = D("tournament/getResults", async () => (await ni.getResults()).data),
  ns = D("tournament/getMyTemplate", async ({
    id: n
  }) => (await ke.getTournamentTemplateById({
    id: n
  })).data),
  ss = D("tournament/getSelectedTemplate", async () => (await ke.getSelectedTemplate()).data),
  as = D("tournament/getApprovedTemplatesList", async ({
    offset: n,
    limit: t
  }) => (await ke.getApprovedTemplatesList({
    offset: n,
    limit: t
  })).data),
  os = D("tournament/getRandomTemplatesList", async () => (await ke.getRandomTemplates()).data),
  is = D("tournament/selectTemplate", async ({
    id: n
  }) => (await ke.subscribeToTournamentTemplate({
    id: n
  })).data),
  Xu = {
    activeTab: kt.result,
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
    approvedTemplatesList: cn.getInitialState(),
    approvedTemplatesListStatus: u.idle,
    approvedTemplatesListOffset: 0,
    approvedTemplatesListLimit: 16,
    approvedTemplatesListTotal: 0,
    selectTemplateStatus: u.idle,
    randomTemplatesListStatus: u.idle,
    periodsStatus: u.idle,
    resultsStatus: u.idle,
    selectedTemplateStatus: u.idle
  },
  Yt = "?time=1502",
  si = re({
    name: "tournament",
    initialState: Xu,
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
        n.approvedTemplatesList = cn.getInitialState(), n.approvedTemplatesListOffset = 0
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
      n.addCase(ns.pending, t => {}).addCase(ns.fulfilled, (t, s) => {
        s.payload.id && (t.myTemplate = {
          ...s.payload,
          type: Qe.my,
          url: `${s.payload.url}${Yt}`
        })
      }).addCase(ns.rejected, (t, s) => {}).addCase(es.pending, t => {
        t.periodsStatus = u.pending
      }).addCase(es.fulfilled, (t, s) => {
        t.periodsStatus = u.fulfilled, t.periods = s.payload.allPeriods, t.activePeriod = s.payload.activePeriod
      }).addCase(es.rejected, (t, s) => {
        t.periodsStatus = u.rejected
      }).addCase(ts.pending, t => {
        t.resultsStatus = u.pending
      }).addCase(ts.fulfilled, (t, s) => {
        t.resultsStatus = u.fulfilled, t.results = s.payload.rounds.sort((a, o) => o.round_id - a.round_id)
      }).addCase(ts.rejected, (t, s) => {
        t.resultsStatus = u.rejected
      }).addCase(ss.pending, t => {
        t.selectedTemplateStatus = u.pending
      }).addCase(ss.fulfilled, (t, s) => {
        s.payload.id && (t.selectedTemplate = {
          ...s.payload,
          imageSize: s.payload.size || s.payload.imageSize,
          type: Qe.referred,
          url: `${s.payload.url}${Yt}`
        }), t.selectedTemplateStatus = u.fulfilled
      }).addCase(ss.rejected, (t, s) => {
        t.selectedTemplateStatus = u.rejected
      }).addCase(as.pending, t => {
        t.approvedTemplatesListStatus = u.pending
      }).addCase(as.fulfilled, (t, s) => {
        s.payload && s.payload.list && (cn.addMany(t.approvedTemplatesList, s.payload.list.map(a => ({
          ...a,
          url: `${a.url}${Yt}`
        }))), t.approvedTemplatesListOffset += 16, t.approvedTemplatesListTotal = Math.max(s.payload.total, t.approvedTemplatesListTotal)), t.approvedTemplatesListStatus = u.fulfilled
      }).addCase(as.rejected, (t, s) => {
        t.approvedTemplatesListStatus = u.rejected
      }).addCase(os.pending, t => {
        t.randomTemplatesListStatus = u.pending
      }).addCase(os.fulfilled, (t, s) => {
        s.payload && s.payload.list && cn.setAll(t.approvedTemplatesList, s.payload.list.map(a => ({
          ...a,
          url: `${a.url}${Yt}`
        }))), t.randomTemplatesListStatus = u.fulfilled
      }).addCase(os.rejected, (t, s) => {
        t.randomTemplatesListStatus = u.rejected
      }).addCase(is.pending, t => {
        t.selectTemplateStatus = u.pending
      }).addCase(is.fulfilled, (t, s) => {
        s.payload.id && (t.selectedTemplate = {
          ...s.payload,
          type: Qe.referred,
          url: `${s.payload.url}${Yt}`
        }), t.selectTemplateStatus = u.fulfilled
      }).addCase(is.rejected, (t, s) => {
        t.selectTemplateStatus = u.rejected
      })
    }
  }),
  {
    setActiveTournamentTab: Ju,
    setActiveTournamentTemplate: Yu,
    hideTournamentTemplates: Wu,
    setShowTournamentDetailsPopup: ai,
    setShowRoundRewardsPopup: oi,
    changeTemplateCoordsIfNeeded: ii,
    setMyTournamentTemplate: QE,
    clearApprovedTemplateList: ri,
    showTournamentTemplateInfoPopup: Ba,
    closeTournamentTemplateInfoPopup: sa,
    setSelectedTemplate: ci
  } = si.actions,
  Fe = {
    getMyTemplate: ns,
    getSelectedTemplate: ss,
    getApprovedList: as,
    getRandomList: os,
    selectTemplate: is,
    getPeriods: es,
    getResults: ts
  },
  $e = n => {
    const t = n.tournament.activePeriod;
    return t && t.ID && t.PeriodType === "round" ? t.RoundID : null
  },
  Ku = n => {
    const t = $e(n);
    if (!t) return null;
    const s = n.tournament.periods;
    for (let a = 0; a < s.length; a++) {
      const o = s[a];
      if (o.RoundID === t) return o
    }
    return null
  },
  Hs = n => {
    const t = n.tournament.activePeriod;
    if (!t) return null;
    if (t.PeriodType === "break" || t.PeriodType === "") {
      const s = t.ID,
        a = n.tournament.periods.filter(i => i.ID > s);
      return a.length === 0 ? null : a[0].RoundID
    } else if (t.PeriodType === "round") return t.RoundID;
    return null
  },
  Zu = n => {
    const t = Hs(n);
    if (!t) return null;
    const s = n.tournament.periods;
    for (let a = 0; a < s.length; a++) {
      const o = s[a];
      if (o.RoundID === t) return o
    }
    return null
  },
  $u = n => {
    const t = $e(n);
    if (!t) return null;
    const s = n.tournament.results;
    if (!s) return null;
    const a = s.filter(o => o.round_id === t);
    return a.length > 0 ? a[0] : null
  },
  ep = n => n.tournament.results,
  tp = si.reducer;
window.getComputedStyle(document.body).getPropertyValue("--canvas-bg-color");
const np = {
  1: 1
};
let Xe;
const sp = n => {
  Xe = n
};
let ga = 0;
setInterval(() => {
  console.log(ga), ga = 0
}, 1e4);
let _n = !0;
window.addEventListener("blur", () => {
  _n = !1
});
window.addEventListener("focus", () => {
  _n = !0
});
document.addEventListener("visibilitychange", () => {
  document.hidden ? _n = !1 : _n = !0
});
let Oe = null;
const ap = (n, t, s) => {
    let a = {
        token: n
      },
      o = {
        data: new TextEncoder().encode(JSON.stringify(a))
      };
    Oe = new mr(Ca.replace("https", "wss").replace("api/v1/", "connection/websocket"), o), Oe.on("connected", function(i) {
      if (console.log(`connected over ${i.transport}`), !Io()) return;
      console.log("centrifuge image");
      const r = new Blob([i.data], {
          type: "image/webp"
        }),
        c = new Image;
      c.src = URL.createObjectURL(r), c.onload = () => {
        w.mainImage.loadFromCentrifuge(c).then(() => {
          const m = Xe.getState().main.startParams.coords;
          m && (w.viewport.viewport.animate({
            scale: 60,
            time: 400,
            position: {
              x: m.x + .5,
              y: m.y + .5
            }
          }), w.mainImage.selectedPixel.draw(m), Xe.dispatch(Ot(m)))
        })
      }
    }), Oe.on("disconnected", function(i) {
      console.log(`_disconnected: ${i.code}, ${i.reason}`)
    }), Oe.on("error", function(i) {
      console.log(i)
    }), Oe.on("publication", function(i) {
      if (i.channel === "event:message") {
        JSON.parse(new TextDecoder().decode(i.data)).forEach(d => {
          const m = JSON.parse(d.data);
          if (d.type === Ws.pixanos && Xe.dispatch(cp(m)), m.user.userId === t || !_n) return;
          const h = Xe.getState().canvas.animations;
          if (d.type === Ws.bomb) {
            const f = Ns(m.info.pixelId);
            h && w.mainImage.bomb.boomWithDebounce(f)
          }
          if (d.type === Ws.pumpkin) {
            const f = Ns(m.info.pixelId);
            w.mainImage.pumpkin.boomWithDebounce(f, h)
          }
        });
        return
      }
      const r = new Uint8Array(i.data);
      Ar(r, (c, d) => {
        if (c) console.error("Ошибка распаковки данных:", c);
        else {
          const m = JSON.parse(new TextDecoder().decode(d));
          if (i.channel === "pixel:message") Object.values(m).forEach(A => {
            ga += A.length
          }), w.mainImage.paintPixelsFromCentrifuge(m);
          else if (i.channel === `personal:user#${t}`) {
            const A = JSON.parse(new TextDecoder().decode(d));
            if (A.type === np[1] && Xe.getState().daily.list.entities[A.good_id]) {
              const h = Xe.getState().daily.list.entities[A.good_id],
                f = h.name,
                C = h.prices[0].quantity;
              Xe.dispatch(q({
                id: performance.now(),
                text: `Transaction for daily ${h.id} completed! Got ${f} x${C}. Refresh the app.`,
                icon: ""
              }))
            }
          } else if (i.channel === "event:tournament") {
            const A = JSON.parse(new TextDecoder().decode(d));
            A.type && A.type === 1 && A.templates.forEach(f => {
              Xe.dispatch(ii(f))
            })
          } else {
            if (i.channel === "event:mini-game") return;
            console.log("unknown channel", i)
          }
        }
      })
    }), Oe.connect()
  },
  rs = D("main/getPixanosRating", async () => (await F.getPixanosRating()).data),
  op = () => !1,
  ip = {
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
    startParams: Xr(),
    startAppTs: Date.now(),
    timeLimit: !1,
    showIntro: !1,
    showBetaTestIntro: !1,
    fastMode: !1,
    fastEnergy: !1,
    currentFastType: null,
    showUserAndSquadPopup: !1,
    userAndSquadPopupStack: [],
    showNoFlagsPopup: op(),
    showMiningDetailsPopup: !1,
    showNoChargesPopup: !1,
    lastShowChargesPopupTs: Date.now() - Qr,
    showBoostDetailsPopup: !1,
    activeBoostDetails: Ye.paintReward,
    referrerSquadId: null,
    showMiniPopup: !1,
    showPixanosEvent: !1,
    pixanosProcessing: !1,
    pixanosEventData: null,
    showPixanosRating: !1,
    pixanosRatingData: null,
    pixanosRatingStatus: u.idle,
    flyingRewards: []
  },
  li = re({
    name: "main",
    initialState: ip,
    reducers: {
      setTimeLimit: n => {
        n.timeLimit = !0, Oe && Oe.disconnect()
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
        n.lastShowChargesPopupTs = t.payload, Qt.save("lastShowChargesPopupTs", JSON.stringify(t.payload))
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
      n.addCase(rs.pending, (t, s) => {
        t.pixanosRatingStatus = u.pending
      }).addCase(rs.fulfilled, (t, s) => {
        t.pixanosRatingStatus = u.fulfilled, t.pixanosRatingData = s.payload
      }).addCase(rs.rejected, (t, s) => {
        t.pixanosRatingStatus = u.rejected
      })
    }
  }),
  {
    setTimeLimit: FE,
    updateSettings: zE,
    enableFastMode: di,
    disableFastMode: qs,
    enableFastType: Ls,
    disableFastType: ft,
    enableFastEnergy: rp,
    disableFastEnergy: ui,
    setShowPixanosRating: cs,
    showPixanosEvent: cp,
    hidePixanosEvent: lp,
    setPixanosProcessing: Ja,
    setShowIntro: HE,
    setShowBetaTestIntro: qE,
    setShowMiniPopup: LE,
    addFlyingReward: VE,
    removeFlyingReward: GE,
    showNoChargesPopup: XE,
    hideNoChargesPopup: aa,
    setLastShowChargesPopupTs: JE,
    setShowMiningDetailsPopup: dp,
    setShowBoostDetailsPopup: YE,
    setActiveBoostDetails: WE,
    addItemToUserAndSquadPopupStack: Pn,
    removeItemFromUserAndSquadPopupStack: pi,
    setShowNoFlagsPopup: KE,
    setReferrerSquadId: _a
  } = li.actions,
  up = li.reducer,
  pp = {
    getPixanosRating: rs
  };
ba(n => n.main.settings, n => {
  const t = n.UpgradeRepaint,
    s = n.UpgradeChargeCount,
    a = n.UpgradeChargeRestoration;
  let o = 1,
    i = 1,
    r = 1;
  return Object.keys(t.levels).forEach(c => {
    t.levels[c].Max && (o = Number(c))
  }), Object.keys(s.levels).forEach(c => {
    s.levels[c].Max && (i = Number(c))
  }), Object.keys(a.levels).forEach(c => {
    a.levels[c].Max && (r = Number(c))
  }), {
    repaintReward: o,
    chargesCount: i,
    restorationSpeed: r
  }
});
ba(n => n.main.settings, n => ({
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
ba(n => n.main.settings, n => ({
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
const mp = "_layout_oxfjd_1",
  Ap = "_container_oxfjd_7",
  hp = "_placeholder_oxfjd_20",
  gp = "_progress_oxfjd_24",
  _p = "_counter_oxfjd_32",
  fp = "_counter_max_text_oxfjd_45",
  jt = {
    layout: mp,
    container: Ap,
    placeholder: hp,
    progress: gp,
    counter: _p,
    counter_max_text: fp
  },
  xp = () => {
    g();
    const n = Y(),
      t = l(i => i.mining.charges),
      s = l(i => i.mining.maxCharges),
      a = l(i => i.main.currentFastType),
      o = t >= s;
    return a !== null ? null : e.jsx("div", {
      className: jt.layout,
      onPointerUp: i => {
        i.stopPropagation(), n.push("/energy-over")
      },
      children: e.jsxs("div", {
        className: jt.container,
        children: [e.jsxs("div", {
          className: jt.placeholder,
          children: [e.jsx(B, {
            children: ""
          }), e.jsxs("span", {
            children: [" ", t]
          }), o && e.jsx("span", {
            className: jt.counter_max_text,
            children: " max"
          })]
        }), e.jsxs("div", {
          className: jt.counter,
          children: [e.jsx(B, {
            children: ""
          }), e.jsxs("span", {
            children: [" ", t]
          }), o && e.jsx("span", {
            className: jt.counter_max_text,
            children: " max"
          })]
        })]
      })
    })
  },
  yp = "_progress_g3q57_1",
  vp = {
    progress: yp
  },
  wp = ({
    progress: n
  }) => e.jsx("div", {
    className: vp.progress,
    style: {
      width: `${n}%`
    }
  }),
  bp = () => {
    const n = g(),
      t = l(A => A.mining.charges),
      s = p.useRef(t),
      a = l(A => A.mining.addedCharges),
      o = p.useRef(0),
      i = l(A => A.mining.reChargeTs),
      r = l(A => A.mining.reChargeSpeed),
      c = l(A => A.mining.maxCharges),
      [d, m] = p.useState(0);
    return p.useEffect(() => {
      const A = () => {
        if (s.current >= c) {
          h = requestAnimationFrame(A);
          return
        }
        const f = Date.now(),
          y = Math.floor((f - i) / r) - o.current;
        y > 0 && s.current < c && (n(Ko(y)), n(Hd(y)));
        let _ = (f - i) % r;
        m(_ * 100 / r), h = requestAnimationFrame(A)
      };
      let h = requestAnimationFrame(A);
      return () => {
        cancelAnimationFrame(h), o.current = 0
      }
    }, [i]), p.useEffect(() => {
      s.current = t, t === c && m(0)
    }, [t]), p.useEffect(() => {
      o.current = a
    }, [a]), e.jsxs(ae.Fragment, {
      children: [e.jsx(xp, {}), e.jsx(wp, {
        progress: d
      })]
    })
  },
  jp = "_layout_91s2c_1",
  Pp = "_container_91s2c_21",
  Cp = "_buttons_container_91s2c_27",
  Np = "_button_91s2c_27",
  Sp = "_shop_button_91s2c_45",
  Ip = "_container__bottom_91s2c_50",
  Tp = "_fast_type_button_91s2c_50",
  Ep = "_disabled_button_cover_91s2c_62",
  Bp = "_fast_mode_button_enabled_91s2c_72",
  Dp = "_available_91s2c_82",
  kp = "_limited_good_timer_91s2c_99",
  Rp = "_disabled_available_cover_91s2c_120",
  Up = "_button_image_91s2c_130",
  Op = "_animation_91s2c_147",
  Mp = "_shake_91s2c_1",
  N = {
    layout: jp,
    container: Pp,
    buttons_container: Cp,
    button: Np,
    shop_button: Sp,
    container__bottom: Ip,
    fast_type_button: Tp,
    disabled_button_cover: Ep,
    fast_mode_button_enabled: Bp,
    available: Dp,
    limited_good_timer: kp,
    disabled_available_cover: Rp,
    button_image: Up,
    animation: Op,
    shake: Mp
  },
  Qp = "_number_179d2_1",
  Fp = "_layout_179d2_6",
  zp = "_viewer_179d2_14",
  Hp = "_container_179d2_18",
  qp = "_digit_179d2_25",
  Lp = {
    number: Qp,
    layout: Fp,
    viewer: zp,
    container: Hp,
    digit: qp
  },
  Vp = "_layout_q3t4p_1",
  Gp = "_viewer_q3t4p_9",
  Xp = "_container_q3t4p_18",
  Jp = "_digit_q3t4p_25",
  Wt = {
    layout: Vp,
    viewer: Gp,
    container: Xp,
    digit: Jp
  },
  Yp = ({
    digit: n = 0,
    fontSize: t = 16,
    fontWeight: s = 600,
    gap: a = 6
  }) => {
    const [o, i] = p.useState(!0), [r, c] = p.useState(0), d = r === 0 ? `translateY(${a/2}px)` : `translateY(-${a/2+(t+a)*r-a}px)`;
    return p.useEffect(() => {
      i(!1);
      const m = setTimeout(() => {
        i(!0)
      }, 500);
      return () => {
        clearTimeout(m)
      }
    }, [r]), p.useEffect(() => {
      c(n)
    }, [n]), e.jsx("div", {
      className: Wt.layout,
      children: e.jsxs("div", {
        className: Wt.viewer,
        style: {
          height: t + a
        },
        children: [e.jsx("span", {
          className: Wt.digit,
          style: {
            visibility: o ? "visible" : "hidden",
            alignSelf: "center",
            fontSize: t,
            fontWeight: s
          },
          children: r
        }), e.jsx("div", {
          className: Wt.container,
          style: {
            transform: d,
            visibility: o ? "hidden" : "visible",
            gap: a
          },
          children: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(m => e.jsx("span", {
            className: Wt.digit,
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
  Cn = ({
    number: n,
    fontSize: t = 16,
    fontWeight: s = 600,
    gap: a = 6,
    addSpace: o = !0
  }) => {
    if (n === void 0) return null;
    const i = String(n).split("").reverse();
    let r = [];
    for (let c = 0; c < i.length; c++) c % 3 === 0 && c !== 0 && o && r.push("space"), r.push(i[c]);
    return r = r.reverse(), e.jsx("div", {
      className: Lp.number,
      children: r.map((c, d) => c === "space" ? e.jsx("div", {
        children: " "
      }, r.length - d) : e.jsx(Yp, {
        digit: Number(c),
        fontSize: t,
        fontWeight: s,
        gap: a
      }, r.length - d))
    })
  },
  Wp = {
    isTMA: !1,
    isAuth: !1,
    authData: null
  },
  mi = re({
    name: "auth",
    initialState: Wp,
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
    setIsTMA: Kp,
    setIsAuth: Zp,
    setAuthData: $p
  } = mi.actions,
  Da = n => n.auth.isTMA,
  Re = n => n.auth.isAuth,
  em = mi.reducer;
let oa = !1;
const tm = async ({
  dispatch: n,
  amount: t,
  charges: s,
  maxCharges: a,
  status: o,
  state: i
}) => {
  var c, d;
  if (!t && i && (t = i.shop.available[1], s = i.mining.charges, a = i.mining.maxCharges, o = i.shop.useProductStatus), !t || t === 0) return n(ks(10)), n(qe(1)), n(Le()), n(ui()), !1;
  if (s === a) return !1;
  if (oa) return u.pending;
  oa = !0, n(We({
    command: Ce.start
  }));
  try {
    (await n(Us.useProduct({
      productId: 1,
      pixelId: 1
    }))).meta.requestStatus === u.fulfilled && (n(zd(a)), n(Rs({
      product: 1,
      amount: 1
    })), (d = (c = window.Telegram.WebApp) == null ? void 0 : c.HapticFeedback) == null || d.notificationOccurred("error"))
  } catch (m) {
    console.log("error", m)
  } finally {
    oa = !1, n(We({
      command: Ce.finish
    }))
  }
  return !0
}, nm = () => {
  const n = g(),
    t = l(Re),
    s = 1,
    a = l(d => d.shop.available[s]),
    i = 10 + String(a).length * 6,
    r = l(d => d.main.fastEnergy),
    c = [N.button, N.fast_type_button];
  return r && c.push(N.fast_mode_button_enabled), t ? e.jsxs("button", {
    className: `${c.join(" ")} ${N.shop_button}`,
    onPointerUp: async () => {
      if (r) n(ui());
      else {
        if (!a || a === 0) return n(qe(s)), n(Le()), !1;
        n(rp())
      }
    },
    children: [e.jsx("img", {
      alt: "img",
      className: N.button_image,
      src: zo
    }), e.jsx("div", {
      className: N.available,
      style: {
        width: i
      },
      children: !a || a === 0 ? e.jsx(B, {
        children: ""
      }) : e.jsx(Cn, {
        number: a,
        fontSize: 11,
        fontWeight: 400,
        gap: 3
      })
    })]
  }) : null
}, sm = {
  isShowSideMenu: !1
}, Ai = re({
  name: "layout",
  initialState: sm,
  reducers: {
    setShowSideMenu: (n, t) => {
      n.isShowSideMenu = t.payload
    }
  }
}), {
  setShowSideMenu: At
} = Ai.actions, hi = n => n.layout.isShowSideMenu, am = Ai.reducer;
let Pt = null,
  Ct = null;
class gi {
  static async personal({
    league: t
  }) {
    Pt !== null && (Pt.abort(), Pt = null), Pt = new AbortController;
    const s = await P.get(`/ratings/personal?league=${t.toLowerCase()}&limit=20`, {
      signal: Pt.signal
    });
    return Pt = null, s
  }
  static async squad({
    league: t
  }) {
    Ct !== null && (Ct.abort(), Ct = null), Ct = new AbortController;
    const s = await P.get(`/ratings/squads?league=${t.toLowerCase()}&limit=20`, {
      signal: Ct.signal
    });
    return Ct = null, s
  }
}
const ls = D("ratings/personal", async ({
    league: n
  }) => (await gi.personal({
    league: n
  })).data),
  ds = D("ratings/squad", async ({
    league: n
  }) => (await gi.squad({
    league: n
  })).data),
  om = {
    list: [],
    myPlace: 0,
    mySquadPlace: 0,
    mySquad: null,
    league: "bronze",
    status: u.idle
  },
  _i = re({
    name: "ratings",
    initialState: om,
    reducers: {
      setActiveLeague: (n, t) => {
        n.league = t.payload
      },
      clearRatingList: n => {
        n.list = []
      }
    },
    extraReducers: n => {
      n.addCase(ls.pending, (t, s) => {
        t.status = u.pending
      }).addCase(ls.fulfilled, (t, s) => {
        t.status = u.fulfilled, t.list = [...Object.values(s.payload.top)], t.myPlace = s.payload.myPlace
      }).addCase(ls.rejected, (t, s) => {
        t.status = u.rejected
      }).addCase(ds.pending, (t, s) => {
        t.status = u.pending
      }).addCase(ds.fulfilled, (t, s) => {
        t.status = u.fulfilled, t.list = [...Object.values(s.payload.top)], t.mySquadPlace = s.payload.MySquadPlace, t.mySquad = s.payload.mySquad
      }).addCase(ds.rejected, (t, s) => {
        t.status = u.rejected
      })
    }
  }),
  {
    setActiveLeague: im,
    clearRatingList: rm
  } = _i.actions,
  ka = {
    personal: ls,
    squad: ds
  },
  cm = _i.reducer,
  us = D("history/get", async ({
    offset: n,
    limit: t
  }) => (await F.getHistory({
    offset: n,
    limit: t
  })).data),
  lm = {
    list: [],
    status: u.idle
  },
  fi = re({
    name: "history",
    initialState: lm,
    reducers: {
      resetHistory: n => {
        n.list = [], n.status = u.idle
      }
    },
    extraReducers: n => {
      n.addCase(us.pending, (t, s) => {
        t.status = u.pending
      }).addCase(us.fulfilled, (t, s) => {
        t.status = u.fulfilled, t.list = s.payload
      }).addCase(us.rejected, (t, s) => {
        t.status = u.rejected
      })
    }
  });
fi.actions;
const Ra = {
    get: us
  },
  dm = fi.reducer,
  xt = Mt();
xt.startListening({
  matcher: ue(_t.info.fulfilled),
  effect: (n, t) => {
    n.payload.activated && (t.dispatch(ql(n.payload.totalUserPixels)), t.dispatch(Jo(n.payload.userBalance))), t.dispatch(uc(n.payload.goods))
  }
});
xt.startListening({
  matcher: ue(_t.checkBoost.fulfilled),
  effect: (n, t) => {
    const s = n.meta.arg.key,
      a = n.payload[s];
    let o = "Not enough PX",
      i = "";
    a && (o = "Well done fren", i = ""), t.dispatch(q({
      id: performance.now(),
      text: o,
      icon: i
    }))
  }
});
xt.startListening({
  matcher: ue(_t.checkBoost.fulfilled),
  effect: (n, t) => {
    const s = t.getState(),
      a = s.main.settings,
      o = n.meta.arg.key,
      i = n.payload[o],
      r = n.meta.arg.price;
    if (i) {
      if (o === Ye.energyLimit) {
        const c = s.mining.boosts[Ye.energyLimit],
          d = a.UpgradeChargeCount.levels[c].Boost;
        t.dispatch(Qd(s.mining.maxCharges + d)), t.dispatch(Ko(d))
      }
      if (o === Ye.reChargeSpeed) {
        const c = s.mining.boosts[Ye.reChargeSpeed],
          d = a.UpgradeChargeRestoration.levels[c].ChargeBoost;
        t.dispatch(Fd(d))
      }
      t.dispatch(Vl(r))
    }
  }
});
xt.startListening({
  matcher: ue(_t.checkTask.rejected),
  effect: (n, t) => {
    t.dispatch(q({
      id: performance.now(),
      text: "Check failed",
      icon: ""
    }))
  }
});
xt.startListening({
  matcher: ue(_t.checkBoost.rejected),
  effect: (n, t) => {
    t.dispatch(q({
      id: performance.now(),
      text: "Not enough PX",
      icon: ""
    }))
  }
});
xt.startListening({
  matcher: ue(Od),
  effect: (n, t) => {
    const a = t.getState().mining.toggleAction;
    console.log("boosts length: ", JSON.stringify(a).length), Qt.save("boosts1", JSON.stringify(a))
  }
});
const Vs = Mt();
Vs.startListening({
  matcher: ue(Fs.getPriceMask.pending, ze.getPixelsForSale.pending, ze.getPixelsSold.pending, Ra.get.pending),
  effect: (n, t) => {
    t.dispatch(We({
      command: Ce.start
    }))
  }
});
Vs.startListening({
  matcher: ue(Fs.getPriceMask.fulfilled, ze.getPixelsForSale.fulfilled, ze.getPixelsSold.fulfilled, Ra.get.fulfilled),
  effect: (n, t) => {
    t.dispatch(We({
      command: Ce.finish
    }))
  }
});
Vs.startListening({
  matcher: ue(Fs.getPriceMask.rejected),
  effect: (n, t) => {
    n.error.code !== "ERR_CANCELED" && t.dispatch(We({
      command: Ce.finish
    }))
  }
});
const xi = Mt();
xi.startListening({
  matcher: ue(ze.getUser.fulfilled),
  effect: (n, t) => {
    t.dispatch(im(n.payload.data.league))
  }
});
const Nn = Mt();
Nn.startListening({
  actionCreator: di,
  effect: () => {
    w.mainImage.selectedPixel.hide()
  }
});
Nn.startListening({
  actionCreator: qs,
  effect: () => {
    w.mainImage.selectedPixel.show()
  }
});
Nn.startListening({
  actionCreator: Ls,
  effect: () => {
    w.mainImage.selectedPixel.hide()
  }
});
Nn.startListening({
  actionCreator: ft,
  effect: () => {
    w.mainImage.selectedPixel.show()
  }
});
const yi = Mt();
yi.startListening({
  matcher: ue(ka.squad.fulfilled),
  effect: (n, t) => {
    t.dispatch(Gl(n.payload.mySquad))
  }
});
const um = {
    info: null,
    popupId: null,
    getInfoFetchStatus: u.idle
  },
  ps = D("squad/getSquadInfo", async ({
    id: n
  }) => (await F.getSquadInfo({
    id: n
  })).data),
  vi = re({
    name: "squad",
    initialState: um,
    reducers: {
      setPopupSquadId: (n, t) => {
        n.popupId = t.payload
      }
    },
    extraReducers: n => {
      n.addCase(ps.pending, t => {
        t.getInfoFetchStatus = u.pending
      }).addCase(ps.fulfilled, (t, s) => {
        t.info = s.payload, t.getInfoFetchStatus = u.fulfilled
      }).addCase(ps.rejected, t => {
        t.getInfoFetchStatus = u.rejected
      })
    }
  });
vi.actions;
const pm = vi.reducer,
  Gs = {
    getInfo: ps
  },
  mm = "/assets/world_final-f0xkCoEs.png",
  Am = D("template/subscribe", async ({
    id: n
  }) => (await ke.subscribeToTemplate({
    id: n
  })).data),
  ms = D("template/getTemplateList", async ({
    offset: n,
    limit: t
  }) => (await ke.getTemplatesList({
    offset: n,
    limit: t
  })).data),
  hm = D("template/getAvailableSizes", async ({
    userId: n
  }) => (await ke.getAvailableSizes({
    userId: n
  })).data),
  As = D("template/getReferredTemplate", async () => (await ke.getReferredTemplate()).data),
  fa = D("template/getMyTemplate", async ({
    id: n
  }) => (await ke.getTemplateById({
    id: n
  })).data),
  hs = D("template/getWorldTemplate", async () => ({
    x: 0,
    y: 0,
    imageSize: I.width,
    url: mm,
    type: Qe.world
  })),
  gm = {
    active: null,
    activeTab: "my",
    showTemplateDetailsPopup: !1,
    showTemplateInfoPopup: !1,
    templateInfoPopupId: null,
    list: [],
    listStatus: u.idle,
    listOffset: 0,
    listLimit: 12,
    opacity: [70],
    worldTemplate: null,
    referredTemplate: null,
    myTemplate: null,
    sizes: []
  },
  wi = re({
    name: "template",
    initialState: gm,
    reducers: {
      setActiveTemplate: (n, t) => {
        n.active = t.payload, w.mainImage.worldTemplate.hide(), w.mainImage.worldTemplate.show(t.payload)
      },
      setActiveTemplateTab: (n, t) => {
        n.activeTab = t.payload
      },
      hideTemplates: n => {
        n.active = null, w.mainImage.worldTemplate.hide()
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
        n.list = [], n.listStatus = u.idle, n.listOffset = 0
      }
    },
    extraReducers: n => {
      n.addCase(As.pending, t => {}).addCase(As.fulfilled, (t, s) => {
        if (s.payload) {
          const a = {
            ...s.payload,
            type: Qe.referred
          };
          t.referredTemplate = a
        }
      }).addCase(As.rejected, (t, s) => {}).addCase(fa.pending, t => {}).addCase(fa.fulfilled, (t, s) => {}).addCase(hs.pending, (t, s) => {}).addCase(hs.fulfilled, (t, s) => {
        const a = {
          ...s.payload,
          type: Qe.world
        };
        t.worldTemplate = a, w.mainImage.worldTemplate.add(a)
      }).addCase(hs.rejected, (t, s) => {}).addCase(ms.pending, t => {
        t.listStatus = u.pending
      }).addCase(ms.fulfilled, (t, s) => {
        t.listStatus = u.fulfilled, s.payload && (t.list = [...t.list, ...s.payload], t.listOffset += 12)
      }).addCase(ms.rejected, t => {
        t.listStatus = u.rejected
      })
    }
  }),
  {
    setActiveTemplate: ZE,
    setActiveTemplateTab: Ya,
    hideTemplates: bi,
    setTemplateOpacity: $E,
    setReferredTemplate: _m,
    setMyTemplate: fm,
    setTemplateListOffset: eB,
    clearTemplatesListData: xm,
    setShowTemplateDetailsPopup: ji,
    setShowTemplateInfoPopup: xa
  } = wi.actions,
  it = {
    getReferredTemplate: As,
    getTemplateById: fa,
    getWorldTemplate: hs,
    getList: ms,
    getAvailableSizes: hm,
    subscribe: Am
  },
  ym = wi.reducer,
  vm = {
    list: Cs.getInitialState(),
    selected: 1,
    showHowDailyWorksPopup: !1,
    getDailyListFetchStatus: u.idle,
    getFirstDailyFetchStatus: u.idle
  },
  gs = D("daily/getList", async () => (await F.getDailyList()).data),
  _s = D("daily/getFirstDaily", async () => (await F.getFirstDaily()).data),
  Pi = re({
    name: "daily",
    initialState: vm,
    reducers: {
      setSelectedDaily: (n, t) => {
        n.selected = t.payload
      },
      setShowHowDailyWorksPopup: (n, t) => {
        n.showHowDailyWorksPopup = t.payload
      },
      updateOneDaily: (n, t) => {
        Cs.updateOne(n.list, t.payload)
      }
    },
    extraReducers: n => {
      n.addCase(gs.pending, t => {
        t.getDailyListFetchStatus = u.pending
      }).addCase(gs.fulfilled, (t, s) => {
        Cs.setAll(t.list, s.payload.dailyAvailable), t.getDailyListFetchStatus = u.fulfilled
      }).addCase(gs.rejected, t => {
        t.getDailyListFetchStatus = u.rejected
      }).addCase(_s.pending, t => {
        t.getFirstDailyFetchStatus = u.pending
      }).addCase(_s.fulfilled, (t, s) => {
        t.getFirstDailyFetchStatus = u.fulfilled
      }).addCase(_s.rejected, t => {
        t.getFirstDailyFetchStatus = u.rejected
      })
    }
  }),
  wm = n => {
    const t = n.daily.selected;
    return Ea.selectById(n, t)
  },
  {
    setSelectedDaily: bm,
    updateOneDaily: tB,
    setShowHowDailyWorksPopup: Ci
  } = Pi.actions,
  jm = Pi.reducer,
  Ni = {
    getList: gs,
    getFirstDaily: _s
  },
  fs = D("reward/getList", async ({
    userId: n
  }) => (await F.getRewards({
    userId: n
  })).data),
  ia = D("reward/getById", async ({
    rewardId: n
  }) => (await F.getRewardById({
    rewardId: n
  })).data),
  Pm = {
    showPopup: !1,
    id: null,
    rewardUserId: null,
    info: null,
    active: null,
    list: Ta.getInitialState(),
    getListStatus: u.idle,
    getRewardStatus: u.idle
  },
  Si = re({
    name: "reward",
    initialState: Pm,
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
        Ta.removeAll(n.list)
      }
    },
    extraReducers: n => {
      n.addCase(fs.pending, t => {
        t.getListStatus = u.pending
      }).addCase(fs.fulfilled, (t, s) => {
        t.list = s.payload, t.getListStatus = u.fulfilled
      }).addCase(fs.rejected, t => {
        t.getListStatus = u.rejected
      }).addCase(ia.pending, t => {
        t.getRewardStatus = u.pending
      }).addCase(ia.fulfilled, (t, s) => {
        t.getRewardStatus = u.fulfilled
      }).addCase(ia.rejected, t => {
        t.getRewardStatus = u.rejected
      })
    }
  }),
  {
    setReward: Cm,
    clearReward: nB,
    addReward: sB,
    removeReward: aB,
    clearInventoryList: Nm,
    showRewardPopup: Sm,
    hideRewardPopup: oB
  } = Si.actions,
  Im = {
    getListByUserId: fs
  },
  Tm = Si.reducer,
  qt = Mt();
qt.startListening({
  matcher: ue(Fe.getMyTemplate.fulfilled),
  effect: (n, t) => {
    const s = t.getState();
    if (s.tournament.myTemplate) {
      const a = s.tournament.myTemplate;
      w.mainImage.tournamentTemplates.deleteTemplate(a.id), w.mainImage.tournamentTemplates.add(a)
    }
  }
});
qt.startListening({
  matcher: ue(Fe.getSelectedTemplate.fulfilled, ci),
  effect: (n, t) => {
    const s = t.getState();
    if (s.tournament.selectedTemplate) {
      const a = s.tournament.selectedTemplate;
      w.mainImage.tournamentTemplates.deleteTemplate(a.id), w.mainImage.tournamentTemplates.add(a)
    }
  }
});
qt.startListening({
  matcher: ue(Yu),
  effect: n => {
    const t = n.payload;
    w.mainImage.tournamentTemplates.hide(), w.mainImage.tournamentTemplates.show(t)
  }
});
qt.startListening({
  matcher: ue(Wu),
  effect: () => {
    w.mainImage.tournamentTemplates.hide()
  }
});
qt.startListening({
  matcher: ue(ii),
  effect: n => {
    w.mainImage.tournamentTemplates.changeTemplateCoords(n.payload)
  }
});
const Sn = cr({
    reducer: {
      auth: em,
      daily: jm,
      main: up,
      color: ec,
      device: el,
      mining: Vd,
      layout: am,
      canvas: au,
      ratings: cm,
      user: Jl,
      squad: pm,
      progress: ru,
      history: dm,
      shop: mc,
      toast: $l,
      template: ym,
      tournament: tp,
      reward: Tm
    },
    devTools: !1,
    middleware: n => [Nn.middleware, xi.middleware, Vs.middleware, xt.middleware, yi.middleware, qt.middleware, ...n()]
  }),
  xs = [],
  Em = async ({
    dispatch: n,
    flyCoords: t,
    paintCoords: s,
    activeColor: a
  }) => {
    w.mainImage.paintPixel({
      id: ot(s),
      color: pt(a)
    }), w.mainImage.updateTexture(), await n(Zr(a)), await n(su(s)), await n(qd());
    try {
      const o = new TextEncoder().encode(JSON.stringify({
          type: 0,
          pixelId: ot(s),
          color: a
        })),
        i = await Oe.rpc("rеpаintTournаment", o);
      xs.push(i);
      const r = await i,
        c = JSON.parse(new TextDecoder().decode(new Uint8Array(r.data)));
      console.log(c), c && c.balance && (n(Jo(c.balance)), c.reward_user && (w.mainImage.reward.add(s), n(Cm({
        rewardId: c.reward_user.reward_id,
        rewardUserId: c.reward_user.id,
        reward: c.reward,
        type: c.reward_type,
        user: c.reward_user
      }))))
    } catch (o) {
      o.code && o.code === 5e3 && n(_t.info())
    }
  }, Bm = ({
    history: n,
    dispatch: t,
    paintCoords: s
  }) => {
    t(qs()), n && n.push("/energy-over"), t(Ot(s)), w.mainImage.selectedPixel.draw(s)
  }, Ii = async ({
    history: n,
    charges: t,
    dispatch: s,
    flyCoords: a,
    paintCoords: o,
    pixelInfo: i,
    user: r,
    activeColor: c,
    state: d
  }) => {
    let m = !1;
    if (t <= 0)
      if (d && d.main.fastEnergy) {
        if (xs.length > 0 && !(await Promise.allSettled(xs)).every(f => f.status === u.fulfilled || f.status === u.rejected)) return;
        const A = await tm({
          dispatch: s,
          state: d
        });
        if (A === u.pending) return;
        xs.length = 0, A || (m = !0)
      } else m = !0;
    if (m) {
      Bm({
        history: n,
        dispatch: s,
        paintCoords: o
      });
      return
    }
    Em({
      dispatch: s,
      flyCoords: a,
      paintCoords: o,
      activeColor: c
    })
  }, Dm = () => {
    const n = g(),
      t = Y(),
      s = l(y => y.canvas.pixelInfo),
      a = l(y => y.color.active),
      o = l(y => y.user.user),
      i = l(y => y.mining.charges),
      r = l(y => y.canvas.coords),
      c = l(y => y.main.fastMode),
      d = l(y => y.main.currentFastType),
      m = l(y => y.main.fastEnergy),
      A = l(y => y.shop.available[1]),
      h = l(y => y.shop.products[1]),
      f = {
        bomb: 2,
        paintcan: 6,
        pumpkin: 7
      },
      C = l(y => y.shop.products[f[d]]);
    return e.jsxs("button", {
      className: Z.button,
      onPointerUp: y => {
        if (c) {
          y.stopPropagation(), n(qs());
          return
        }
        Ii({
          dispatch: n,
          history: t,
          pixelInfo: s,
          activeColor: a,
          user: o,
          flyCoords: {
            x: y.clientX,
            y: y.clientY
          },
          paintCoords: r,
          charges: i,
          state: Sn.getState()
        })
      },
      children: [e.jsx(bp, {}), e.jsx("span", {
        className: Z.button_text,
        children: i === 0 ? A > 0 && m ? e.jsxs("div", {
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
              src: C.image_url
            }), e.jsx("span", {
              children: C.name
            })]
          })]
        }) : "Paint"
      })]
    })
  };
class km {
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
class Rm {
  constructor({
    app: t,
    viewport: s,
    store: a,
    mainImage: o
  }) {
    In(this, "isCoordsInExtraRewardZone", ({
      coords: t,
      x1: s,
      y1: a,
      imageSize: o
    }) => {
      const {
        x: i,
        y: r
      } = t, c = s + o, d = a + o;
      return i >= s && i < c && r >= a && r < d
    });
    this.app = t, this.pixiViewport = s.viewport, this.store = a, this.mainImage = o, this.referredTemplate = null, this.items = [], this.opacity = 70, this.init().then(() => {
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
      const o = this.items[a];
      if (o.type === Qe.my || !this.isCoordsInExtraRewardZone({
          coords: t,
          x1: o.x,
          y1: o.y,
          imageSize: o.imageSize
        })) continue;
      const i = hn({
          x: t.x - o.x,
          y: t.y - o.y,
          width: o.imageSize
        }),
        r = Ut(o.imageData[i], o.imageData[i + 1], o.imageData[i + 2]),
        c = o.imageData[i + 3],
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
      for (let o = 0; o < s.imageSize; o++) {
        o === 0 && t.push({});
        for (let i = 0; i < s.imageSize; i++) {
          const r = hn({
              x: o,
              y: i,
              width: s.imageSize
            }),
            c = Ut(s.imageData[r], s.imageData[r + 1], s.imageData[r + 2]);
          Ee.includes(c) || (t[t.length - 1][c] || (t[t.length - 1][c] = 0), t[t.length - 1][c] += 1)
        }
      }
    })
  }
}
const Um = async ({
  coords: n,
  dispatch: t,
  repaintReward: s,
  amount: a,
  state: o
}) => {
  var r, c;
  if (!a && o && (a = o.shop.available[2]), !a || a === 0) {
    t(ks(10)), t(qe(2)), t(Le()), t(ft());
    return
  }
  w.mainImage.bomb.boom(n), t(Us.useProduct({
    pixelId: ot(n),
    productId: 2
  })), t(Rs({
    product: 2,
    amount: 1
  })), (c = (r = window.Telegram.WebApp) == null ? void 0 : r.HapticFeedback) == null || c.notificationOccurred("error")
}, Om = () => {
  const n = g(),
    t = 2,
    s = l(Re),
    a = l(d => d.shop.available[t]);
  l(d => d.main.fastMode);
  const o = l(d => d.main.currentFastType),
    r = 10 + String(a).length * 6,
    c = [N.button, N.fast_type_button];
  return o === "bomb" && c.push(N.fast_mode_button_enabled), s ? e.jsxs("button", {
    className: `${c.join(" ")} ${N.shop_button}`,
    onPointerUp: () => {
      if (o === "bomb") {
        n(ft());
        return
      }!a || a === 0 ? (n(qe(t)), n(Le())) : n(Ls("bomb"))
    },
    children: [e.jsx("img", {
      alt: "img",
      className: N.button_image,
      src: Qo
    }), e.jsx("div", {
      className: N.available,
      style: {
        width: r
      },
      children: !a || a === 0 ? e.jsx(B, {
        children: ""
      }) : e.jsx(Cn, {
        number: a,
        fontSize: 11,
        fontWeight: 400,
        gap: 3
      })
    })]
  }) : null
}, Mm = async ({
  coords: n,
  dispatch: t,
  repaintReward: s,
  activeColor: a,
  amount: o,
  state: i
}) => {
  var c, d;
  if (!o && i && (o = i.shop.available[6]), !o || o === 0) {
    t(ks(10)), t(qe(6)), t(Le()), t(ft());
    return
  }
  w.mainImage.paintSquare({
    x: n.x - 1,
    y: n.y - 1,
    size: 3,
    colors: Array.from(Array(3 * 3), () => a)
  }), t(Us.useProduct({
    pixelId: ot(n),
    productId: 6,
    color: a
  })), t(Rs({
    product: 6,
    amount: 1
  })), (d = (c = window.Telegram.WebApp) == null ? void 0 : c.HapticFeedback) == null || d.notificationOccurred("error")
}, Qm = () => {
  const n = g(),
    t = 6,
    s = l(Re),
    a = l(d => d.shop.available[t]);
  l(d => d.main.fastMode);
  const o = l(d => d.main.currentFastType),
    r = 10 + String(a).length * 6,
    c = [N.button, N.fast_type_button];
  return o === "paintcan" && c.push(N.fast_mode_button_enabled), s ? e.jsxs("button", {
    className: `${c.join(" ")} ${N.shop_button}`,
    onPointerUp: () => {
      if (o === "paintcan") {
        n(ft());
        return
      }!a || a === 0 ? (n(qe(t)), n(Le())) : n(Ls("paintcan"))
    },
    children: [e.jsx("img", {
      alt: "img",
      className: N.button_image,
      src: Fo
    }), e.jsx("div", {
      className: N.available,
      style: {
        width: r
      },
      children: !a || a === 0 ? e.jsx(B, {
        children: ""
      }) : e.jsx(Cn, {
        number: a,
        fontSize: 11,
        fontWeight: 400,
        gap: 3
      })
    })]
  }) : null
}, Fm = "data:image/png;base64,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", zm = "data:image/png;base64,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", Hm = "data:image/png;base64,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", qm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABRlJREFUeJztnL9uFDEQxr9D8AKhSMdzXLqLQpXykGhQJMqDhwjiHiKkRDrRICVlKlDScc9Bl4K8AMVSJN7Mbmyv7bXHO8f8muT29uxZf57x+M8doCiKoiiKoiiKoiiKoiiKoiiKoiiMzGobkIGm91r0M8k0frNqRTg9vuu8tb7ae3xxci7u+cQZjM2q6YvgYn21J04UUcbGiGGQJsqz2gZEEC0G0Ia0/jgzWSQJgs9/f7f/r6/2uuOF4zr9jASe1zYgFeMtfVFSvGhKiImtAJrTP28B3Pf6Ty9eeW+m96xffgeEPKuokAU8esTnv7+t4Yhet4W0qSM2ZBmkjRFDiBLE9PihcGX7jBTEhSwgrJGlCWEQMdARGmxWnQvepRMAODkHBD2nSA+hUAGkegVF1BjiYheEMIj0kNPjO+8EcOj9KSPJQxpsVk8a2jeGnB7fYb1ZASfnDYSMIyI9ZJcR0Wtgya4Mg1mWQUi2JSlkWdmlAR0Q0GPg8I7rr+cAgMWb7vWbi/u/h+8tHiXAS6ZknHMT6fqo+7ovggsjjuHwp/f2SbTFFEJWA4Q1er+BQzFlNaRMi1imQ1QVpmblwUIYbi7CvSP0Mx4vqtI2tdLe5voIaM66jRXb2Dno19+ctZ2kyj58jV7QNGcVak1g9vH+D2udnJVBkBgGblE4BRkUox/PS4Ww2Ho4ReESxCtGaPaUKlCO8rlEqS4IbazFGwDLefeGy+3TeyLIVf4uCdJcH7kf1DTG4tvcfoO57912lBGh5fvsfEiJi7YZiyA272iFsPVayv6vx8+8TjN38YNksLcH7huJt9iE4fCS0vOQpj/xA3ox3SXG/q+OGNnwlUtssY07HPOTUoI0GGN4CSHy1jHu+TyUcL/g9LYTrmgD3R4Al2FjRnKqvJw/rRMYDFuUEiGs7uIiDVdfmOeol1t02tLYspwDF+MSiDEUFyQoZQ30Bl/Z9FrSfOVy6xzPxqTdseTulsFLI6FhYZAPvVA+0tNi7codtqoJkoW+GAbG8JdbELmnTnxzF997EydnV+JfyXU1fOKYlEpOL5nCFm46zA3PAXvISt0Xr0ENW+WOITtKFUEkeEktG9kmhkN5fbZ5SSSu5f/FsrvkT+1LnnwGkFOQ2exjeqZlHpBLmNB9GNfnDLnnIexZlllQvHm3tTa66YG2kJFzCzdECFd9JTtLnZk63Xew7NS1IcE1E8+Bb6PKEJBW78RMncbmxbf50/g9tIs4lgAxbOMHB9OZGNoEuD3Iv1kV4hk9OBON4iHLlZG012M8IVGckL146qVmfKO2u55D3GqvN2tKDUuhwlh2AV20gkQux4gTBBjI25dz7+ZQFizl+44VWRMMByLTXm8MNo1VWpRAm4wnGSG4J6psWZY3ZFBRJrCCW3NpJ7eHOGfrQT3NcsyzKLQ+Ulet7dvshT0QdwzIBkfoehDAZkvNY0ClNp9bUXxpryHqLFUOHJ43ZBN9llLHSqtNDE2eD0SsnhYMYZxHfXyUGtRnDz0IQNggWXMgjbWv5KHrkudlOgeth9JMClcPjamb3lvyawmlDzANilJrYyrGDi4xihZMsH4lwUXMd8q5y9yVL+wAkaJQcntOqqgcYrBUQEgWBRgvzJikgUsMgHeDajbw4y+ThFMM1ooIozyFE24x2CsjtJvlNnEOf9qv58RVR8+L2dtnCr8RZTvJMHNcjxbKEyZddfy3P8+USuxRFInPqCiKoiiKoiiKoiiKoiiT5x+58vqZVePedgAAAABJRU5ErkJggg==", Lm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAA7JJREFUeJztm8tx6jAUhn/fuWkgWZBV6iBtsODWkBQBQ4pIaggL2oA6WCULV8BCd2ELhCzbMhifI/x/M5kMfunx+zx0bAOEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghZKRk0h24lkU+N+7vj6d10mP6K92BS7FCrA778x3l9lSFSbLTi3xuKkJ4LB9ekhTlj3QHurLI52b1+A2gmHQfu231+F1xZymQ3B0EwBhjgN9XAFVRjpYz2SLLMiCxMSbV2RJjfqZRB2bPOyCxMSbnsizLhxdgsq3umGyDriwVks2yjoRESZikzNnBLPI5gGraa63j42kNJDi+ZF2WxXVPKbsqS/ouC/chhCV5C7k3UrQQs8jnWB32WD68BGPI6rAH8jk+ntYGicURWogyUrp7DADY7AoAVt9rYOYtEjc7LP+djimzLSCRsWruZKUOZT69Db4Yls3u7Gf2HjxK5dg1xhADeJMfsIIoyvPMrHpe9n4UXJUw2mKIMZ8tYrRtjzzHaUdVRViTIEXR0J3Mpkm/FO/6ZaFSjSgazPU4GbFV3L4pq8LHnyKd0NA46krpbTEi1nIuuI50yV6TyypwJ3E2Bd5M8edOXkxQ7+s6AyNpIUU25VuInaS3Grf+1bHLbdfxrMRxXyJzI2UhRTYVEsPezXU07etyrLUWz0rMz1Q0+9LnsoZ84KTw4ZY+QUaOhJ8sMis/6AKnO7Z8o6SVuqAcm4X57Xl9ksi45AQJYWNIF3y3EytmRJtjECT6FZ4o6mJAV1EaGFoUxhBlDClIv9YxEEPXujSW3+Pp0TVpQY/LkixjKCqhyFmInYS2p359l+CDpZmsuv8Wpf8IhrSQzCtzNzObBksbV7HZnYqMMcdi+CxLTwxpesrni3Jp+b1OCCFrCKFrHTLZhquwt645NSQHXIfEupRboCC46w3qfVjF72v9JFvRXetQ4LrkLCQ0eDs5fa4vrMX5VveVFX9WMAXWAUgH9TpRJtvT/1u3J5zm+sjHkNCd6Ypyh6vxJoa2kCx73p1nWk13ZtfnI224FhdxzTGU34FLiox9uS43yEe4qHEJEpqYSxeAXWlqx+nXeATp+iJ1X8LEXPv8hWxgBIIATaIMlfW0WKiEGCINOpjK9x4hmlLVG50rJYZYow5xogDXW0ykiJJiiDbsEC8K0F2YDitwaTHEG3c4fZLQRZwe8D53E58P8Q4EiCr1tglX811h8NDoIwdAVWc60iZcymMjhBBCCCGEEEIIIYQQQgghhBBCiMd/ML9eI+BDYUAAAAAASUVORK5CYII=", Vm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAActJREFUeJzt2kFugzAQheFp1UXEtidjg3IaInqZRt3kZGyT7NyVU2NwcAQVfuj/pEitSCSHp7E9DmYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOR723oAS7V948L/vz5/5L+TrLZvnLt9u1AckJr3rQew2OH49/f9vN04VqIfSCgMR5R+IDuoitDH1gNY6nS9WLf1IFakXyE7I18hXVUP147rZbvBrEAyEL+17ap6dK2rarPenBk9yb9r+8aNeo+oD4l7EvW+pFht38wG8CyYrce/K48w4kBu3+OAEtVDKCsZTFFT1eFDCV+JgBRCKXrb2/aNG+2i5sTvPRwfzWNX1aPDSGQaTVPP1o5UdSSulxyKxrZ3rkJyrwscsxQ9Za3tJNA07j+QoCqmGsnSaATib+rUlHM/D18xsSN5jTXEm7q5uTf8fpYIRyOQV29kWCn+swJhmKlNWbkOR6mdVUgjkKC5e/lzIpUhYdAcpo5O5og9lVJ+hYS7J18pudUSv09g+ir+B5zHeVYstUY8eSzodL0U/6NV0YPzkqF4Gc9mKYRhJhKI2fiR0bmuOz4mUQjDTCiQ2NzirBIAAAAAAAAAAAAAAAAAAAAAAADAQr/gsiaUUMmhEAAAAABJRU5ErkJggg==", Gm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAQlJREFUeJzt2E1ug0AMBlCn6iK9YXpCckOymy76IxipKaSRGFvvSSxgZfjwGCYCAAAAAAAAAAAAAAAAAAAAAEo6HV3Af7V5asvz09t76nt6ObqApzhfPo8CagRSiEAGI5DBpB2AP8O8nx23a0TkHe6piu6/qO4O8q9gInKFk6bQNk9tFcDigf95/XZNFcrw2jy1leX5PK2P3/TdNaicQ33ZERuXLZ7k7lu/V4IuydkhheULpPgylC+Q86V0KK9HF/CQrYO8yIbjcB4e7N3n8dH3sUW+JSui9JKVxurHb2/HJOmOiERbJxE79rK6Dsq0bZKm0G973/ZMYQAAAAAAAAAAAAAAAAAAMIgPNT9HzAKUgvAAAAAASUVORK5CYII=", Xm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAU1JREFUeJzt2MFOwkAQBuCtJ/XtvBR9mRKfptx8snK03NaDQCoWQii6TPm+hAAlaYYd/p2WlAAAAAAAAAAAAAAAAAAAAAAg5Zxz7ttcug628s5BU/JAqdouVZUuYIpzFryqqlDf8aF0AfwUtiERt6NzhIpzStMbcetbWIiERB3QlwjRkJ2pTVmuF9cq5b7lawhyvxIqIRfbrNLy86N0FfOR+/ZuEhLG2ALPsSlhtqyrDOTH1+nn+GNhGpJSSmmz+vlMOblvx7epU8cHStc/O0cX/tRMGRwrXf/sNF2dc9/mpqv3j8MmNF39qyel656tfUIOkzB4P9aQpqtDNSXWUE/p+JXSZpXen18M/P82loBTqYlw7zEULyHDBGxfH/4tUj29Vcv14vvzAPce4Y398qMmYhbGFn038EvUwwiXuAAAAAAAAAAAAAAAAAC37gv48l2z+Bjx4gAAAABJRU5ErkJggg==", Jm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAmpJREFUeJzt2jGPokAUwPHH5YqNpfuBtqcz2eA223tfAgOf4noLvY2Jnb0fCEq1mysUFoaBA8Tjkfx/iQmMkgzz5g3M2xUBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4n8IkMLJZmbH78Qw/xu5AX6GfSjEoYRIYc9maMAkqbZlxetqNN3YH+igOeiaaLURePhqv8zxP/f3+HLsDj2oTCBERue6e35kBTCYgDy05152sz4cBe/M86lM4Yy5b0yoTbPfMcAUkfv1Sd/+Teaj3muETWaaKVAfEGFN+c+o6wC8f+SeaLUpfxcf5UN0clLqULSo9N+7PgdYPcYd1usyPNS5XIsozpMQxy7vKrteaHSKKA+Laa/TNjMr1n79VZoc69s66dHwXJkGlrZPLdhI7dhVcAbDbwiQwlcB1NPZ9TkbtIF+235+GYLXlXA5R1bgcNQWrK5at9uoGuFewGmjNEnVvWd7+VN0AttkQXnedNo6PvkI/i8ri4vp8kMg6F5HbgNuvvnabKyiua5RS+T6eLSdNs7hY24rmf77b02Xp3FXp1bpLF1GaIZm8VFLXfp/5xZKI67dToi8gm5URSfNTb3/Kj0M/dV1RCpq3P0ksv0RExLy/STRb5EHRnBkZdQGxBz300/oscbSF/u3YWa/arIz2som6gPRVqQT7y8ktVyJKH+pFdZs4b3/Ksyk+zsW8v92+yAJS85dC7cuWun2IrWmWx8d5dWmy9iPx65enudxuUz1bMnaWrM+H8kzfrEyeIU2/wzCKxcW6kkdeAf7H7zAA138lAgAAAAAAAAAAAAAAAAAAAAAAQERE/gL4iAFGuCkFvAAAAABJRU5ErkJggg==", Ym = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAtJJREFUeJzt2jFv2kAYxvHnqg6UMflA2dmQIkqG7PRLGMGnyE4laITElp0PBGNguw5wrn0QG1OUe93+fxMIA+Yev/faZyQAAAAAAAAAAAAAAAAAAAAAAAAAAACD/G7uU+8DCvxR5Ta7uSe4TxIC+XDAZyNfF5rfzWu3wYV8JH492wwqB7sYBoHcQBxIlWwz8HEAJUxrf69JIHVKHzwbEc41bpZGqI7ZyGebAWFco3L6aShMZ4TxF26Whvd5GOdCTv07W+GW1VEXVOrfWuRSfbGVI9M5l2wMzvmS7Jv3i2RfbWofIkmPjtRVYq06pJQVouOAGDxKUzJxhCSrlP1C7tuTiTEIklZILkWV7BdSZ1i/ePnfOV45hyV0ExKGk75Cnl+cJI3fV6n35CDxNJY+EEnTt7s/T1I1+f1CzjmXuqeYamilqaIzzOf5WpduF79HoqlfrMkgh/AashaGZCmQz74/0bSiPomdQFRu7Fc1+f3C5HJIE19T70CQ9bb54zyMJj2k6rl0+jlGgzMRSGjmcVWM31eaXPIBH4VWHHSjAcRMTVnBpNuXdDgdrp26qiqoM6x83eLdQxNnGXGFTLr9yiDCdYt/fLj6dDcYv680vX81MQ6ShUBmI1/sH9JhwP3jw0kok26/HEBdj4mnqYqpzcopsIkeUhSOfrdcyz9GlRIP6EcXj/vF+QorVEO2Gfg84M5Q0tMtf8bVkgeS9bblpZPj2pYkjXtbP+n25ZZrxVWU6wzlfv44TF/hfWfCiKfB6f2rm+pV2WZlqo+YKNM6oflO7n6dvrhfyC3Xh+0KoU3f7pT1tnkQlvpElVbspBRNMQXj7XdJ0QKlCg3fUH/455zcLwn3UM7dR2npn+KS95AmiheK+TSUr4GtyxsXelGbtG6n/W7u3XJdHvDo1Lkt/eIck1fqteKj//nFxT0EFvDPdgAAAAAAAAAAAAAAAAAAALTXb7LTHFrMPO3DAAAAAElFTkSuQmCC", Wm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABLlJREFUeJztnLFu2zAQhk9Nh9Sj+jxGd28GgiAF0tFBtsxZLFhv0KlBMrpA0iCFN++FnycenSwFO1hUKIoUaVni0en/AQEMWZSJ+3nk8XgKEQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIDDYvp8Krj7ABTEy73YSZT5paD55UGL+JG7Ay5mgzHRM4n882Piunc6WhMRUd57r/rjA3cHfJgNxu7p6+JIGD9bmD6fCvFyL8TLfVQedRCCEHmIMpyYP2tIIWaDcZfd64zopywV6/RVeES+TI3tps+n0Qqg45yXOdnVkNlmQURvwkxHa3K1zzYL8lmfQhFNR2z0Pccnn77Wve32L5td4p6ydg1hj8/M118fjJelRxHRVojhhOjbDesgjVoQGcY6sQmhfm8QJV+mZaCQL1Oi1d3OfeyaaAXxWj9cQuwK41QliVIQpxgdCTEdrasBgGG9qq0xPcM+InR6E8OyjjTBEYHFIYiyeIvzH9XvVEPu4xktBAntHUQBpyxn+GoztmVBfq8ES51UQkwdn5Ef2Dsa+9sjwQRh2w239C6u/gZNLlpHXZPRGKYrLu8gCixI/vkx8Rbl9aF6rY0wB7j2sLjlXtlX37VEF8PUzpFS4Zi22MLevVPiPnkrH/E0UbLN4i1DLNu/PgTbk4QVRCbwCnzS461p4UmlGDt6U5dChT0xvP2b6Am8XhbQFiFyxTN0DGJkmwUln74mXXtN+CNcRRSZR+KMaow0BBN9CSHhOVMP5SkuFGPXjn+1KK9vISR8RQ4GUXRqIh2fvf3tgx5S236PwgkhYU8u6pUkch43Rjs6PhGSo41sR1Q9iyf6z8Jeia20x2lYIqtxdy2MmKW/yuclT39Yj3Hjr8uy7bY72IXXxDs+I3HyZe/n7gOvIJYKQ+MCq352iOETIFTuiSjFwu4huvFtxW4+Qqjts83CukgbBVOfz1iwzXumrpV8lmKs7ihrsYvfGjo1XGtuo/6O6Rkh4RPEoyBaGtNHmGyzKEt58hURDSfeZUS6aNPRmq2Cnk8QxTvyZVoznnrNNcq3nqWN6tUd5bT9DTVnFl1WQIMnvNOSjERK7K9MWz6jvHK/RGvXVOtrEyhfpizhbzSCEFXrpJzYdvnDN69QUZ/blGVWBeIQhUcQUxRTeIQL2ygvS0EbBKl5oeV5tecGFCV82GtbzIcTZ21taTwtnzUbjBs9osnr8mVKydMfYzhcPjdgGBzeQ0zTlS5EsQbohhQnX+qpFGVvklyde3lZDdUDCuPrnhOqaC58lCUNpoqgFznf3lA+vxTT0Zry69/tjNyEEjDUvKcQJyeifJ6W4oSCPbnYiCoKEYnvP7fXlbNuleTqfPvBJqAcBKoYzO+D6ETVGSNSlGXamPjLNotSOCKqiqIJQcQX1rqIrkNWCmFMEVEZDRGZA4NCiNlgzBI57UKU74cY+XaTkOHsRBpYjvzZyU9j82yzKM464nnB00TUnatReImKvqfQKb+P1CN0DsdDDFSmnosjka8sN0bwqpovB9NRSfmS5vXvuqFNe5wD8QwJ+wFVG4xiEHlVsoCu8ThHoYsj8R7+VdP7QooCAAAAAAAAAAAAAAAAAAAAAAAAAAC65x9TXHckk+SwIwAAAABJRU5ErkJggg==", Km = "data:image/png;base64,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", Zm = "data:image/png;base64,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", $m = "data:image/png;base64,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", eA = "data:image/png;base64,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", tA = "data:image/png;base64,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", nA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABRVJREFUeJztnL1uIjEQx2ejkNc4gURHRRUpDS9AneqaPNg1V12dF6CJREVFhwS61wjFXnNGE2N7Z/yx683+f1IKYGFtz4znw7MhAgAAAAAAAAAgZvZM7dBjAAAAAZv1qg29BgCACBAJjYCx7vdjHTcYA9AuAL4zCE4AAAAAAAAIgqQYAJvYRLKx3zDmtTsc7z7rk8161S6W89vr8+lCRMOPqzSdk9usV23uRZg9U3vd++9tC4NzPl1GJ5Su+XKqnNjb6zZo7mMUipQH3wc1F9Nc1jN7prbmMUvxCoTT90SNvwjBQ0k+vrELpVqz79q2iIh+/XlviO6FIN2vDdxnDb0diiykBKEtRppIbdardrNefXGYKcIgcm+HfTKIQEJbTCjCCnHdU2OEkZoZD5lZP5b8cb7YGs09ny6dmhryM9otR+Kz+qKYhdia7xOOT1ChRXJ9FhtluYQ3pA8pYiGShZFYjERzfYunScZqymkGc+ouZs8UXRXgPsS89t2j5pwl2kJK1JrMIu4Ox4Y71o+n45frXj5XyfeqlVtUoplcVyR0Pl3uFpFrrPm+JOb3abJtATXlEimoB60JS10L47Isc42r0iwViJ1ISoUiqW5LFDCXAjwQ6coNmhxhsZxHxfTmO5px8QAgJYx1jbdrzovlnN5et21K/mK++0ikz25TyRX329rNf1eqsfZ1LouWjmexnNPucOy+MDAOlVOP1QDuo2yH7RqU4bqnxmUlLgXKsWWk1sRyoLqhpODHidFYF7EZf+w9OD9/bFW/o/UntpVXlYf4MDnGEBr7+++7+juanWR3ODZcgKotS1Jj4tdODVe4r0VlIbvDsZEsdClhDJVdn0+X21/oGi6M2LGqM/X/5tUS3YeDsYLgdSczEdf2VHLL8gUQNqUtP3qC2n1Sem1IICUxyZ/tM7RnLMZKYsdfnUD6xJeBhyKlrnmnzjWqdMJvXHqAJYktiUjzqBiSz0P4IMbWVCwpibgy793hePM3uSvPsU5d/dl3gjv/j6ejs5JNdG9hEv+YnBiazo+xWYems0Xzm3YHi3ZdimbqtQpKWzC0r3edTPr8EX9PUm0YRemkRuzFDfkjjQJMYs+34QskaTeS+EZJ4VXyW5O3EFfmLSmVSH7HRuJTijbK1YqdQ2nLIb5jX03x1UeyQDSljqHKIj5STgdLkbQw2hO2Pg6ahkLilyStUkW2LF9ylEsIrhCzptYfs/B8DaQkCYSXrK97arSd65p2T04g3s/+PKQUV23PJYiu8SVbSIrWxzzLEfp8aKHkIPuW5etM569jhCh1uCmtODnQdNW4yJqH2Af2RPd9uUTjfQ5QqhQpFpp0QOVrCeVIW0El9+OvQ77KPHtYG5KwX71ldRTRetu/fUlYn90umqZxIpkSqjsXQ5pZUii5opgYfD7QrEXOeYt9iDSkta8xJ2qclMis7wjKteW63ottLLcRCySlRvPyucrafZhTKG+v29ZVqR2qJahI2Msns9uX0WhXeJlTUFLFydW/bBALRFrJtMPc2GxcQo4FSNHyUM4Rizr0DAnF15g8pkKiKzTt8zEF9ZZlF86+vP+UZ1BDYf+HCbPwfSqUSiDcRFMd2nd5SDM32VtJQ0/f2t/nVlY6u5YqgC+b7utwLTrKStVo00VvMt2SeP7jjzORy31mo7X+SWwTMU3VOe+nuc9kuk5sK6z1Ca9JdZ30KYTYe03CQvqO4BAxAgAAAAAAAAAAAAAAwNT5BzZPhVZ/4M1WAAAAAElFTkSuQmCC", sA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAA0xJREFUeJztnDtyIjEQhputvQhUkU00J5gLEJNzMOeOfQFOQERGFRxlNljkkuXR+9WS/i+xXXgGTf90q7slQQQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAODArvYATCzztB6O+++/n48XERFdb3fW446B7YOpYsg8H69uRflTewA6dGKI15Z5WgsOpxh/aw/Axsfn1w9PuJxPK9F/Ua63e/L3kz2zhiey9ZDn4/VLDKKfAqX2EjVMmrw0F2wFMX0yhSipDbb1nqVDI/uQZUMYLFVo+fj82tWcn9h6SCwxRpXFLT2HNJ06ykbvJQ3u1kNapQtBevEOIo9JfcQ2Rg2cjGlqYxDZCyhxfepCa5mnNfUHwnbPWFvYsF64NYCtgk38rzqYHEbTEVtlqyn01thFp8BGqDDWC9QB6MQQlBRARR1rDo/0KUZtttrCqzB0eYOac8rz8fqu3kOM4Yru3q7eY8KYZbXQUV3maZXHqeuBpeBw3Bvvrb4WYj+jIDWaazFcb/ddTg91ETpWlOZ7WRzT7ph+mNFDRK0BymEU5Hq77yBKWawh6x0S2E/uvuQqVlV87+38zzXri1To6ogc9QpR2Pzm1VxsIQ0O4XDc0+V8WlM+X6jA2pC1pXLrHmJrAV3OpzV240RsJDE20YjaF0FGrqRzVvIxsBxUDuT5g6sYRJ7rIeL31rxGHnspMUI7z0lWDNV+0uhs7e9ytU8XS7iulChydam1a1+wqdATSs1wKycSLqFrCEEEtYpbn4WzoQSpiasoQ80hNXHN7iBIQVxEYb9AtZW1tH6CypTtsfcQXQrZat1jS73ZeogwOLc2R6oen+76KEFyHf/qsbFJ5LZ8ESSI74axELiKETou1+I0WcjiasDaFNsGJE9OEENPUdu0mulwxnv3e+s1AHeCzkGMKEqpxqT2nIctixpRFB0p93j9mtRdDuhczqc111dbtIiw1/tn2l0nvgd0ekE8d+jz+i5E6TD2skYRIwXZbLXM05riJFBrpNqokaUUQH0RDgTpjOxzRO0vBGuNoushHMTAB4T4hsDURxBAAnKLIrJWbCV1JGetJYdH130AwwvCDbabHHrg/UUGRMR3Hh0aiAIAAAAAAAAAAAAAeuIfG3gINg3W6n8AAAAASUVORK5CYII=", aA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAolJREFUeJzt3DtSwzAQgOGF4SLJTDpXPoEvkDo9B6On5gI5Qap0zMBRTAFiRPBDr5Vk5f9maEIejleP1cqOCAAAAAAAAAAAAAAAAAAAKGfou9HlMWSwdOIJSoVaDMpT6QOIsT/s5Hy5Jn/foe/G/WEnIiIf759yvlwfkn/IjMdcH6Th5fXtQaOX2AEwgcklW+S36Pl0HEXy95ImaM0nQ9+NOeeqTQ9Za1KdSHpHgFYyrqZ7CApppXeIeK5D7Pxc5Dv7ECk7xrYUDBGPgNjBeHl98w6Aeb1GCpn6/Ya+G5fe87Zh3lJPk4e+G01O7vJcl8e0+Bzr3Ovt45069ufTcTR/S/9T+96+X7DkMBITDBcm4EufsxQwJObaA9UCsoVJM+dq2uckhwxbq+uQ3MW12vkkNOa5PkHZdPndaKm0sdpDzFoDeawG5Hy5quw5IBJBCaN63giKPu9qL0HRtZhlmZNvZzEtZTSa9bVQXmlvLQcd47ZIqnHVCjzEFh8BAL+8Jmk75W1hgtcWcklqsuLiVIp8z8w2sJ3FrW0Ni3AZkIq5E09jtVBhwKK5BrKJDaqpy25qKneE+Pk+/4a2TQRk7nowl0lya6oOiOnWc/vYpYKhmVFWHZDWWr9tbmu86oDUquWGcrfmsiwWhpWJ7nolbyHeqqXsMHgOWbskH9PWKgZJJvWQ+0Xu1doIEhUQhig0z6l1T91bSM8ogCs0/ipawmf/wI9pvLHnbXJh2GIVVZsZ0veHHY05lVT3Bcb0FEonCmLWZVR7LSnvFmPIBzRk6VZUhN1ln0NqCAYNROpdaKr+SAzCaAfFZxXPOkT093PMkOiyiicgmbgGnYBkxM+UVIgEAgAAAAAAINgXIA5u7FTs1dIAAAAASUVORK5CYII=", oA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAolJREFUeJzt3DtywjAQgOElk4vADJ0rn8AXoKbnYPSpuQAnoKLLTHIUp0iUUYgfeq0si/+bSUN4GK8eq5WNCAAAAAAAAAAAAAAAAADgqXRt07s8hgymTjxBKVCNQXld+gBi7PZbud7uyd+3a5t+t9+KiMjH+6dcb/dN8g8Z8ZLrgzSc3y4bjV5iB8AEJpdskV+j0/HQi+TvJVXQmk+6tulzzlWrHrLmpDqR9I4AtWRcVfcQLKSW3iHiuQ6x83OR7+xDZNkxtqZgiHgExA7G+e3iHQDzeo0UMvX7dW3TT73nY8N8pJ4md23Tm5zc5bkuj2nxOdax19vHO3Tsp+OhN39T/1P73r5fcMlhJCYYLkzApz5nKmBIzLUHqgVkDZNmztW0z0kOGbZm1yG5i2ul80lozHN9grLq8rtRU2ljtoeYtQbymA3I9XZX2XNAJIISRvW8ERR93tVegqJrMssyJ9/OYmrKaDTra6G80t5SDjrGY5FU46oVeIgtPgIAfnlN0nbKW8MEry3kktRkxcWhFPmZmW1gO4ub2xoW4TIgFWMnnsZqocKASWMNZBUbVEOX3ZRU7gjx833+DW2rCMjY9WAuk+TaFB0Q063H9rGXCoZmRll0QGpr/baxrfGiA1KqmhvK0xrLslgYFia66y15C/FaTWWHwXPI3CX5GDZXMUgyqYfcL/Ks5kaQqIAwRKF6Tq176N5CesYCuELjr0VL+Owf+DGNN/a8DS4Ma6yiajND+m6/pTGnkuq+wJieQulEQcy6jGqvJeXdYgz5gIYs3YqKsLvsc0gJwaCBSLkLTdUfiUEY7aD4rOJZh4j+fo4ZEl1W8QQkE9egE5CM+JmSApFAAAAAAAAAoBZf6Exu7Mzk5D8AAAAASUVORK5CYII=";
let iA = class {
  constructor({
    app: t,
    viewport: s,
    mainImage: a
  }) {
    this.app = t, this.pixiViewport = s.viewport, this.mainImage = a, this.size = 7, this.images = [Fm, zm, Hm, qm, Lm, Vm, Gm, Xm, Jm, Ym, Wm, Km, Zm, $m, eA, tA, nA, sA, aA, oA], this.textureArray = [];
    for (let o = 0; o < this.images.length; o++) {
      let i = PIXI.Texture.from(this.images[o]);
      i.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST, this.textureArray.push(i)
    }
  }
  async boomWithDebounce({
    x: t,
    y: s
  }, a) {
    await rn(L(50, 500)), this.boom({
      x: t,
      y: s
    }, a)
  }
  boom({
    x: t,
    y: s
  }, a) {
    if (a) {
      const o = new PIXI.AnimatedSprite(this.textureArray);
      o.loop = !1, o.animationSpeed = .17, o.zIndex = 2, o.x = t, o.y = s, o.scale.set(.5), o.anchor.set(.5, .55), this.pixiViewport.addChild(o), o.play(), o.onComplete = () => {
        this.pixiViewport.removeChild(o)
      }
    }
  }
};
const rA = async ({
  coords: n,
  dispatch: t,
  repaintReward: s,
  amount: a,
  state: o
}) => {
  var r, c;
  if (!a && o && (a = o.shop.available[7]), !a || a === 0) {
    t(ft());
    return
  }
  w.mainImage.pumpkin.boom(n), t(Us.useProduct({
    pixelId: ot(n),
    productId: 7
  })), t(Rs({
    product: 7,
    amount: 1
  })), (c = (r = window.Telegram.WebApp) == null ? void 0 : r.HapticFeedback) == null || c.notificationOccurred("error")
}, cA = () => {
  const n = g(),
    t = 7,
    s = l(Re),
    a = l(d => d.shop.available[t]);
  l(d => d.main.fastMode);
  const o = l(d => d.main.currentFastType),
    r = 10 + String(a).length * 6,
    c = [N.button, N.fast_type_button];
  return o === "pumpkin" && c.push(N.fast_mode_button_enabled), !s || !a || a === 0 ? null : e.jsxs("button", {
    className: `${c.join(" ")} ${N.shop_button}`,
    onPointerUp: () => {
      if (o === "pumpkin") {
        n(ft());
        return
      }!a || a === 0 ? (n(qe(t)), n(Le())) : n(Ls("pumpkin"))
    },
    children: [e.jsx("img", {
      alt: "img",
      className: N.button_image,
      src: Bo
    }), e.jsx("div", {
      className: N.available,
      style: {
        width: r
      },
      children: !a || a === 0 ? e.jsx(B, {
        children: ""
      }) : e.jsx(Cn, {
        number: a,
        fontSize: 11,
        fontWeight: 400,
        gap: 3
      })
    })]
  })
}, lA = "/assets/particle_rays1-mrHjO6Jg.png", dA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAB40lEQVR4nO3dQU7CUBRA0da4L2Hl1JXVidP+0Fgi7T1nSiIoNy+2vo/zuq7rRNaHt75NAHECiBNAnADiBBD3Ofr253mu/3wuYXSlbwLECSBOAHECiBNAnADiBBAngDgBxAkgTgBxAogTQJwA4gQQJ4A4AcQJIE4AcQKIE0CcAOIEECeAOAHEDU8GncV/fMbFVU5NmQBxAogTQJwA4gQQJ4C401wG7r3Uu9/uhzzvY3k8/XrOeGloAsQJIE4AcQKIE0DcJf4YtMfyvbzsa9++bpuPvfJ5/8IEiBNAnADiBBAngDgBxAkgTgBxAogTQNxpbgWPli1Gt2CftbVwctRiybsyAeIEECeAOAHECSDuEgshe5YtjjpJ/K4LHnuZAHECiBNAnADiBBAngDgBxAkgTgBxAogTQFzucOjWZtERW0VnZALECSBOAHECiJvXwYbEVT4SvW60BGMCxAkgTgBxAojL3QncuxV89V+ETYA4AcQJIE4AcQKIy10F7LW1J+BsIJcggDgBxAkgTgBxtoJ/2QomSQBxAogTQJwA4qyFB1gLZ5MA4gQQJ4A4AcQJIE4AcQKIE0CcAOIEECeAOAHECSBOAHECiBNA3PBcwFH/ZZP3ZQLECSBOAHECiBNAnADKpmn6AbwwPcfPo50AAAAAAElFTkSuQmCC";
class uA {
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
    this.backdrop = new PIXI.Graphics, this.backdrop.beginFill(0, .8), this.backdrop.drawRect(0, 0, I.width, I.height), this.backdrop.endFill(), this.backdrop.zIndex = 20, this.backdrop.interactive = !0, setTimeout(() => {
      this.backdrop.on("pointerup", t => {
        const s = this.store.dispatch;
        s(Sm()), this.viewport.unlock(), this.destroy()
      })
    }, 2e3), this.pixiViewport.addChild(this.backdrop)
  }
  async addGlow(t) {
    PIXI.Loader.shared.resources.rewardGlow || await this.loadResource("rewardGlow", lA);
    const a = (o = 1) => {
      const i = new PIXI.Sprite(PIXI.Loader.shared.resources.rewardGlow.texture);
      return i.zIndex = 21, i.width = 10, i.height = 10, i.x = t.x + .5, i.y = t.y + .5, i.alpha = .5, i.anchor.set(.5), i
    };
    this.glow = a(), this.pixiViewport.addChild(this.glow), this.glow2 = a(-1), this.pixiViewport.addChild(this.glow2)
  }
  glowAnim(t) {
    this.glow.rotation += .05 * t, this.glow2.rotation += .05 * t * -1
  }
  async addRewardImage(t) {
    PIXI.Loader.shared.resources.tnt || await this.loadResource("tnt", dA), this.image = new PIXI.Sprite(PIXI.Loader.shared.resources.tnt.texture), this.image.zIndex = 21, this.image.width = 1, this.image.height = 1, this.image.x = t.x, this.image.y = t.y, this.pixiViewport.addChild(this.image)
  }
  async loadResource(t, s) {
    return new Promise((a, o) => {
      const i = PIXI.Loader.shared;
      i.add(t, s), i.load((r, c) => {
        a(c)
      }), i.onError.add(r => {
        o(r)
      })
    })
  }
  destroy() {
    this.glow !== null && (this.ticker.remove(this.glowAnim.bind(this)), this.glow.destroy(), this.glow = null), this.glow2 !== null && (this.ticker.remove(this.glowAnim.bind(this)), this.glow2.destroy(), this.glow2 = null), this.backdrop !== null && (this.backdrop.destroy(), this.backdrop = null), this.image !== null && (this.image.destroy(), this.image = null)
  }
}
class pA {
  constructor({
    app: t,
    viewport: s,
    store: a,
    mainImage: o
  }) {
    In(this, "isCoordsInExtraRewardZone", ({
      coords: t,
      x1: s,
      y1: a,
      imageSize: o
    }) => {
      const {
        x: i,
        y: r
      } = t, c = s + o, d = a + o;
      return i >= s && i < c && r >= a && r < d
    });
    this.app = t, this.pixiViewport = s.viewport, this.store = a, this.mainImage = o, this.items = [], this.opacity = 70, this.init()
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
    const o = this.store.getState().tournament.activePeriod;
    if (!(o && o.ID && o.PeriodType === "round")) return Tn.neutral;
    for (let i = 0; i < this.items.length; i++) {
      const r = this.items[i];
      if (r.type === Qe.my || !this.isCoordsInExtraRewardZone({
          coords: t,
          x1: r.x,
          y1: r.y,
          imageSize: r.imageSize
        })) continue;
      const c = hn({
          x: t.x - r.x,
          y: t.y - r.y,
          width: r.imageSize
        }),
        d = Ut(r.imageData[c], r.imageData[c + 1], r.imageData[c + 2]),
        m = r.imageData[c + 3],
        A = this.mainImage.getPixelColor({
          coords: t
        });
      if (m !== 0 && A !== s) {
        if (A === d && s !== d) return Tn.fail;
        if (A !== d && s === d) return Tn.success
      }
    }
    return Tn.neutral
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
    this.items.forEach(o => {
      o.id === t && (o.sprite.x = s, o.sprite.y = a)
    })
  }
}
class mA {
  constructor({
    app: t,
    viewport: s,
    store: a,
    ticker: o,
    readyCallback: i
  }) {
    In(this, "getClickCoords", t => {
      const s = this.sprite.toLocal(t.data.global);
      return {
        x: Math.floor(s.x),
        y: Math.floor(s.y)
      }
    });
    this.app = t, this.ticker = o, this.viewport = s, this.store = a, this.pixiViewport = s.viewport, this.selectedPixel = new ou({
      viewport: s
    }), this.template = new km({
      app: t,
      viewport: s,
      store: a
    }), this.worldTemplate = new Rm({
      app: t,
      viewport: s,
      store: a,
      mainImage: this
    }), this.tournamentTemplates = new pA({
      app: t,
      viewport: s,
      store: a,
      mainImage: this
    }), this.reward = new uA({
      ticker: o,
      viewport: s,
      store: a
    }), this.bomb = new vu({
      app: t,
      viewport: s,
      mainImage: this
    }), this.pumpkin = new iA({
      app: t,
      viewport: s,
      mainImage: this
    }), this.imageData = null, this.texture = null, this.sprite = null, this.timeout = null, this.lastPointerUpTs = Date.now(), this.lastPaintCoords = {
      x: -1,
      y: -1
    }, this.initImage(), i(a), this.initEvents(), this.store.dispatch(We({
      command: Ce.start
    })), !Io() && this.loadAllChunks().then(() => {
      const r = a.getState().main.startParams.coords;
      r && (w.viewport.viewport.animate({
        scale: 60,
        time: 400,
        position: {
          x: r.x + .5,
          y: r.y + .5
        }
      }), this.selectedPixel.draw(r), this.store.dispatch(Ot(r)))
    })
  }
  initImage() {
    this.imageData = new Uint8Array(I.width * I.height * 4);
    const t = PIXI.Texture.fromBuffer(this.imageData, I.width, I.height, {
      format: PIXI.FORMATS.RGBA,
      type: PIXI.TYPES.UNSIGNED_BYTE,
      width: I.width,
      height: I.height
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
        o = s.main.fastMode,
        i = s.main.currentFastType;
      if (this.isCoordsEqual(this.lastPaintCoords, a), this.wasMoved) return;
      const r = Date.now();
      if (r - this.lastPointerUpTs < 200 && !o && !i && (this.pixiViewport.scaled > 50 ? w.viewport.viewport.animate({
          scale: this.pixiViewport.findFitHeight(I.height),
          time: 400
        }) : w.viewport.viewport.animate({
          scale: 60,
          time: 400,
          position: {
            x: a.x + .5,
            y: a.y + .5
          }
        }), t.data.originalEvent.preventDefault()), this.lastPointerUpTs = r, o) {
        const c = t.data.originalEvent.touches;
        if (c && c.length > 0) return;
        const d = {
          x: t.data.global.x,
          y: t.data.global.y
        };
        this.lastPaintCoords = a, Ii({
          charges: s.mining.charges,
          dispatch: this.store.dispatch,
          flyCoords: d,
          paintCoords: a,
          activeColor: s.color.active,
          state: this.store.getState()
        })
      } else i === "bomb" ? Um({
        coords: a,
        dispatch: this.store.dispatch,
        repaintReward: ta(s),
        state: this.store.getState()
      }) : i === "paintcan" ? Mm({
        coords: a,
        dispatch: this.store.dispatch,
        repaintReward: ta(s),
        activeColor: s.color.active,
        state: this.store.getState()
      }) : i === "pumpkin" ? rA({
        coords: a,
        dispatch: this.store.dispatch,
        repaintReward: ta(s),
        state: this.store.getState()
      }) : this.timeout = setTimeout(() => {
        this.selectedPixel.draw(a), this.store.dispatch(Ot(a))
      }, 0)
    })
  }
  async loadAllChunks() {
    const t = await this.loadImage(qr),
      s = this.getImageData(t, I.width, I.height);
    for (let a = 0; a < s.length; a += 4) this.imageData[a + 3] === 0 && (this.imageData[a] = s[a], this.imageData[a + 1] = s[a + 1], this.imageData[a + 2] = s[a + 2], this.imageData[a + 3] = s[a + 3]);
    this.updateTexture(), this.store.dispatch(We({
      command: Ce.finish
    }))
  }
  async loadFromCentrifuge(t) {
    const s = performance.now(),
      a = this.getImageData(t, I.width, I.height);
    for (let o = 0; o < a.length; o += 4) this.imageData[o + 3] === 0 && (this.imageData[o] = a[o], this.imageData[o + 1] = a[o + 1], this.imageData[o + 2] = a[o + 2], this.imageData[o + 3] = a[o + 3]);
    this.updateTexture(), this.store.dispatch(We({
      command: Ce.finish
    })), console.log(performance.now() - s)
  }
  async loadChunk({
    chunkIndex: t
  }) {
    const s = I.chunkOrder[t],
      a = await this.loadImage(`${Ca}image/block?block_id=${s}`),
      o = this.getImageData(a, I.chunkSize, I.chunkSize),
      i = na({
        index: s - 1,
        width: 4,
        blockSize: 1
      });
    for (let r = 0; r < o.length; r += 4) {
      const c = na({
          index: r,
          width: I.chunkSize
        }),
        d = hn({
          x: c.x + i.x * I.chunkSize,
          y: c.y + i.y * I.chunkSize,
          width: I.width
        });
      this.imageData[d] = o[r], this.imageData[d + 1] = o[r + 1], this.imageData[d + 2] = o[r + 2], this.imageData[d + 3] = o[r + 3]
    }
    this.updateTexture(), t < 15 ? await this.loadChunk({
      chunkIndex: t + 1
    }) : this.store.dispatch(We({
      command: Ce.finish
    }))
  }
  updateTexture() {
    this.sprite.texture.update()
  }
  paintPixels(t) {
    for (const [s, a] of Object.entries(t)) this.paintPixel({
      id: s,
      color: pt(a)
    });
    this.updateTexture()
  }
  paintPixelsFromCentrifuge(t) {
    Object.keys(t).forEach(s => {
      t[s].forEach(o => {
        s !== "#171F2A" && this.paintPixel({
          id: o,
          color: pt(s)
        })
      })
    }), this.updateTexture()
  }
  paintSquare({
    x: t,
    y: s,
    size: a,
    colors: o
  }) {
    for (let i = 0; i < o.length; i++) {
      const r = na({
          index: i,
          width: a,
          blockSize: 1
        }),
        c = {
          x: t + r.x,
          y: s + r.y
        };
      if (c.x < 0 || c.y < 0 || c.x > I.width || c.y > I.height) continue;
      const d = hn({
          x: c.x,
          y: c.y,
          width: I.width
        }),
        {
          r: m,
          g: A,
          b: h
        } = pt(o[i]);
      this.imageData[d] = m, this.imageData[d + 1] = A, this.imageData[d + 2] = h, this.imageData[d + 3] = 255
    }
    this.updateTexture()
  }
  paintPixel({
    id: t,
    color: s
  }) {
    const o = (Number(t) - 1) * 4;
    this.imageData[o] = s.r, this.imageData[o + 1] = s.g, this.imageData[o + 2] = s.b, this.imageData[o + 3] = 255
  }
  getPixelColor({
    id: t,
    coords: s
  }) {
    let a = 0;
    s ? a = ot(s) : a = Number(t);
    const o = (a - 1) * 4,
      i = this.imageData[o],
      r = this.imageData[o + 1],
      c = this.imageData[o + 2];
    return Ut(i, r, c)
  }
  loadImage(t) {
    return new Promise(async s => {
      let a = 0,
        o = 2e3;
      const i = async () => {
        const r = new Image,
          d = await (await fetch(t, {
            method: "GET"
          })).blob(),
          m = URL.createObjectURL(d);
        r.src = m, r.onload = () => {
          s(r)
        }, r.onerror = A => {
          a += 1, a < 5 && setTimeout(() => {
            i()
          }, o * a)
        }
      };
      await i()
    })
  }
  getImageData(t, s, a) {
    const o = document.createElement("canvas");
    o.width = s, o.height = a;
    const i = o.getContext("2d");
    return i.drawImage(t, 0, 0, s, a), i.getImageData(0, 0, s, a).data
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
        width: I.width,
        height: I.height
      }),
      a = PIXI.RenderTexture.create({
        width: I.width,
        height: I.height
      });
    s.render(this.sprite, a), s.view.toBlob(i => {
      t(i), s.destroy(!0)
    }, "image/png")
  }
  pixanosRepaint(t, s, a, o) {
    const i = h => {
        let f = 1664525,
          C = 1013904223,
          y = 4294967296,
          _ = h >>> 0;
        return function() {
          return _ = (f * _ + C) % y, _ / y
        }
      },
      r = s * s,
      c = Math.floor(r * a),
      d = i(t),
      m = Array.from(Array(c));
    for (let h = 0; h < c; h++) m[h] = h + 1;
    for (let h = c + 1; h <= r; h++) {
      const f = Math.floor(d() * h) + 1;
      f <= c && (m[f - 1] = h)
    }
    const A = pt(o);
    for (let h = 0; h < m.length; h++) {
      const f = m[h];
      if (h < 20) {
        const C = Ns(f);
        console.log(`i: ${h}, id: ${f}, x: ${C.x}, y: ${C.y}`)
      }
      this.paintPixel({
        id: f,
        color: A
      })
    }
    this.updateTexture()
  }
}
class AA {
  constructor({
    viewport: t
  }) {
    this.viewport = t, this.pixiViewport = t.viewport, this.sprite = null
  }
  draw({
    arr: t
  }) {
    this.destroy();
    let s = new Uint8Array(I.width * I.height * 4);
    for (let o = 0; o < s.length; o += 32) {
      const i = t[Math.round(o / 32)];
      for (let r = 0; r < 32; r += 4) {
        const c = Math.round(r / 4);
        s[o + r] = i & 1 << c ? 0 : 23, s[o + r + 1] = i & 1 << c ? 0 : 31, s[o + r + 2] = i & 1 << c ? 0 : 42, s[o + r + 3] = i & 1 << c ? 0 : 255
      }
    }
    const a = PIXI.Texture.fromBuffer(s, I.width, I.height, {
      format: PIXI.FORMATS.RGBA,
      type: PIXI.TYPES.UNSIGNED_BYTE,
      width: I.width,
      height: I.height
    });
    a.scaleMode = PIXI.SCALE_MODES.NEAREST, this.sprite = PIXI.Sprite.from(a), this.sprite.eventMode = "none", this.sprite.zIndex = 4e3, this.pixiViewport.addChild(this.sprite)
  }
  destroy() {
    this.sprite !== null && (this.sprite.destroy(), this.sprite = null)
  }
}
class hA {
  constructor({
    app: t,
    store: s
  }) {
    this.app = t, this.store = s, this.viewport = new window.pixi_viewport.Viewport({
      worldWidth: I.width,
      worldHeight: I.height,
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
const gA = () => localStorage.getItem("canvasFps") ? Number(localStorage.getItem("canvasFps")) : 60;
class _A {
  constructor({
    app: t
  }) {
    this.app = t, this.lastTime = Date.now(), this.lastRenderTime = Date.now(), this.fps = gA(), this.callbacks = [], this.render()
  }
  render(t = 0) {
    const s = Date.now(),
      a = s - this.lastTime;
    if (this.lastTime = s, s - this.lastRenderTime > 1e3 / this.fps) {
      const o = t / this.fps;
      this.app.render(), this.callbacks.forEach(i => {
        i(o)
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
let ya;
const fA = n => {
  ya = n
};
class xA {
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
    }), this.app.ticker.stop(), this.ticker = new _A({
      app: this.app
    }), this.viewport = new hA({
      app: this.app,
      store: ya
    }), this.mainImage = new mA({
      app: this.app,
      viewport: this.viewport,
      store: ya,
      ticker: this.ticker,
      readyCallback: t
    }), this.mask = new AA({
      viewport: this.viewport
    })
  }
}
let w, Wa = !1;

function yA() {
  w = new xA({
    readyCallback: async n => {
      var s, a, o;
      const t = n.getState();
      t.device.deviceType, window.Telegram.WebApp.platform, ((s = t.user.user) == null ? void 0 : s.websocketToken) === "" && n.dispatch(Ll(!0)), ap((a = t.user.user) == null ? void 0 : a.websocketToken, (o = t.user.user) == null ? void 0 : o.id)
    }
  })
}
const vA = p.memo(() => (p.useEffect(() => {
    Wa || (yA(), Wa = !0)
  }, []), Ke.createPortal(e.jsx("canvas", {
    id: "canvasHolder",
    className: `${Zd.main_canvas}`
  }), document.body)), () => !0),
  wA = "_more_details_6gp7h_1",
  bA = {
    more_details: wA
  },
  Lt = ({
    children: n,
    ...t
  }) => e.jsx("span", {
    className: bA.more_details,
    ...t,
    children: e.jsx("span", {
      children: n
    })
  }),
  jA = "_container_11l5m_1",
  PA = "_divider_11l5m_23",
  CA = "_row_11l5m_28",
  NA = "_row_title_11l5m_40",
  SA = "_row_title_main_11l5m_44",
  IA = "_row_hint_11l5m_49",
  TA = "_row_value_11l5m_55",
  EA = "_row_value_main_11l5m_59",
  BA = "_mining_percent_11l5m_64",
  DA = "_active_row_11l5m_74",
  kA = "_button_11l5m_85",
  Ka = {
    container: jA,
    divider: PA,
    row: CA,
    row_title: NA,
    row_title_main: SA,
    row_hint: IA,
    row_value: TA,
    row_value_main: EA,
    mining_percent: BA,
    active_row: DA,
    button: kA
  },
  RA = () => {
    const n = g(),
      {
        t
      } = Bs("translation", {
        keyPrefix: "mining.popup"
      }),
      s = l(r => r.main.showMiningDetailsPopup),
      a = r => {
        n(dp(r))
      },
      o = l(r => r.mining.info),
      i = l(r => r.main.settings);
    return o ? e.jsx(Ht, {
      show: s,
      setShow: a,
      children: e.jsxs("div", {
        className: Ka.container,
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
            repaints: o.repaintsTotal,
            perDay: (o.speedPerSecond * 86400).toFixed(1)
          })
        }), e.jsx("p", {
          children: t("text5", {
            time: i.MaxMiningTime
          })
        }), e.jsx("button", {
          className: Ka.button,
          onPointerUp: () => a(!1),
          children: t("button")
        })]
      })
    }) : null
  },
  UA = () => {
    const n = Y();
    g();
    const {
      t
    } = Bs("translation", {
      keyPrefix: "mining"
    });
    return e.jsxs($, {
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
      }), e.jsx(Dd, {}), e.jsxs("div", {
        className: Dn.general_info_container,
        children: [e.jsxs("h1", {
          className: Dn.pixels_amount,
          children: [e.jsx(kd, {}), " PX"]
        }), e.jsxs("div", {
          className: Dn.description_container,
          children: [e.jsxs("span", {
            className: Dn.description,
            children: ["Mining is over ", e.jsx("br", {}), e.jsx(Lt, {
              onPointerUp: s => {
                s.stopPropagation(), n.push("/stats")
              },
              children: "Stats"
            })]
          }), e.jsx(RA, {})]
        })]
      })]
    })
  },
  OA = "_panel_bpwn4_1",
  MA = "_item_bpwn4_9",
  QA = "_active_bpwn4_20",
  ra = {
    panel: OA,
    item: MA,
    active: QA
  },
  FA = ({
    selectedSection: n,
    setSelectedSection: t
  }) => e.jsx("div", {
    className: ra.panel,
    children: ["Squads", "Painters"].map(s => e.jsx("div", {
      className: `${ra.item} ${n===s?ra.active:""}`,
      onPointerUp: () => {
        t(s)
      },
      children: e.jsx("h1", {
        children: s
      })
    }, s))
  }),
  zA = "_squads_img_container_ftymn_1",
  HA = "_squads_img_ftymn_1",
  qA = "_title_container_ftymn_11",
  LA = "_description_container_ftymn_18",
  VA = "_description_ftymn_18",
  GA = "_info_layout_ftymn_32",
  XA = "_info_container_ftymn_43",
  JA = "_base_item_ftymn_50",
  YA = "_loading_item_ftymn_61",
  WA = "_rating_item_ftymn_70",
  KA = "_info_row_ftymn_83",
  ZA = "_avatar_container_ftymn_88",
  $A = "_avatar_ftymn_88",
  eh = "_position_ftymn_100",
  th = "_user_squad_position_ftymn_118",
  nh = "_rating_main_info_ftymn_136",
  sh = "_rating_name_ftymn_149",
  ah = "_rating_value_ftymn_156",
  oh = "_active_league_text_ftymn_164",
  ih = "_icon_leagueflag_ftymn_168",
  rh = "_join_squad_button_ftymn_175",
  ch = "_join_squad_text_ftymn_189",
  lh = "_user_squad_container_ftymn_207",
  dh = "_squad_avatar_container_ftymn_224",
  uh = "_user_squad_info_ftymn_235",
  ph = "_user_squad_name_ftymn_243",
  mh = "_user_squad_your_squad_text_ftymn_247",
  Ah = "_user_squad_users_count_ftymn_252",
  O = {
    squads_img_container: zA,
    squads_img: HA,
    title_container: qA,
    description_container: LA,
    description: VA,
    info_layout: GA,
    info_container: XA,
    base_item: JA,
    loading_item: YA,
    rating_item: WA,
    info_row: KA,
    avatar_container: ZA,
    avatar: $A,
    position: eh,
    user_squad_position: th,
    rating_main_info: nh,
    rating_name: sh,
    rating_value: ah,
    active_league_text: oh,
    icon_leagueflag: ih,
    join_squad_button: rh,
    join_squad_text: ch,
    user_squad_container: lh,
    squad_avatar_container: dh,
    user_squad_info: uh,
    user_squad_name: ph,
    user_squad_your_squad_text: mh,
    user_squad_users_count: Ah
  },
  Xs = ({
    children: n
  }) => e.jsx("div", {
    className: O.base_item,
    children: n
  }),
  He = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAIVBMVEUQGSb////09PTk5ebT1NbCw8asr7ODh41jZ29GTFYjKjX3vgf4AAABe0lEQVR42u3X227DMAgGYMzBBt7/gSc17dwlWpNemGrT/121UhRQDMgQAAAAAAAAAAAA/GU5uqpqH0mfkJ3bHfekckPaExnl8bn9wKM8/t6gQs5twyLfP53q2Dz5WQ1WfgA9H/1QXQZbQEu6S9sSoiIp25nva0KSavgtAaUnekvAS3ugHw6FkYBTjdhqIOlbbjUQVES3tt8PBi2eA+KzLSrnwAwovv9b/Akam2e6cbvpVCe0HWhQIZe2I06lXA7xi6W1iS2pnhs/wjt9SHjvHtiQPiKGKT9qgNVGUJ0cyu2AdWRZ8R/UtYNre0l9+UZ8gnsWzV8W7XcqXDKVBz8VXOy7Qnn1pjz49VeOzjODlfEt6BdhCzMIme8+z1Ji1S1M49pdqa+5ijfLi/cEXXMCEtefXLSOnZlr2v9MwOgCW5JAyNUp67ymD2124ZU+tFWDkK2/ZLxqFKa1N2hWbGNTzZ7mUhH/vL7OadRfSCc2x9ICAAAAAAAAAADwli/CSAqaW7oHjgAAAABJRU5ErkJggg==",
  Ti = ({
    position: n,
    userPic: t
  }) => e.jsxs("div", {
    className: O.avatar_container,
    children: [e.jsx("img", {
      alt: "avatar",
      className: O.avatar,
      src: t === "" ? He : t
    }), e.jsx("div", {
      className: O.position,
      children: n
    }), ";"]
  }),
  Ei = ({
    name: n
  }) => e.jsx("div", {
    className: O.rating_main_info,
    children: e.jsx("span", {
      className: O.rating_name,
      children: n
    })
  }),
  Bi = ({
    value: n
  }) => n ? e.jsx("span", {
    className: O.rating_value,
    children: Rt(n)
  }) : null,
  hh = ({
    item: n,
    index: t
  }) => {
    const s = g(),
      a = [O.rating_item];
    return e.jsx(Xs, {
      children: e.jsxs("div", {
        className: a.join(" "),
        onPointerUp: () => {
          s(Pn({
            dataSource: Te.userFromRating,
            index: t
          }))
        },
        children: [e.jsx(Ti, {
          position: t + 1,
          userPic: n.userPic
        }), e.jsx(Ei, {
          name: n.firstName
        }), e.jsx(Bi, {
          value: n.repaints
        })]
      })
    })
  },
  gh = () => {
    const n = l(s => s.user.user),
      t = l(s => s.ratings.myPlace);
    return n === null ? null : e.jsx(Xs, {
      children: e.jsxs("div", {
        className: O.rating_item,
        style: {
          border: "2px solid #4db2ff"
        },
        children: [e.jsxs("div", {
          className: O.avatar_container,
          children: [e.jsx("img", {
            alt: "avatar",
            className: O.avatar,
            src: n.userPic === "" ? He : n.userPic
          }), t !== 0 && t < 1e3 && e.jsx("div", {
            className: O.position,
            children: t
          }), t >= 1e3 && e.jsx("div", {
            className: O.position,
            style: {
              fontSize: "10px"
            },
            children: "999+"
          })]
        }), e.jsxs("div", {
          className: O.user_squad_info,
          children: [e.jsxs("div", {
            children: [e.jsx("span", {
              className: O.user_squad_name,
              children: n.firstName
            }), " "]
          }), e.jsxs("div", {
            className: O.user_squad_your_squad_text,
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
  _h = () => {
    const n = g(),
      t = l(o => o.ratings.list),
      s = l(o => o.ratings.league),
      a = l(o => o.ratings.status);
    return p.useEffect(() => {
      n(ka.personal({
        league: s
      }))
    }, [s]), p.useEffect(() => () => {
      n(rm())
    }, []), a !== u.fulfilled ? null : e.jsxs(ae.Fragment, {
      children: [e.jsx(gh, {}), t.map((o, i) => e.jsx(hh, {
        item: o,
        index: i
      }, i))]
    })
  },
  fh = () => (p.useState("Day"), null),
  xh = ({
    children: n
  }) => e.jsx("div", {
    className: O.info_layout,
    children: e.jsxs("div", {
      className: O.info_container,
      children: [e.jsx(fh, {}), n]
    })
  }),
  yh = () => {
    const n = Y();
    return e.jsx("div", {
      className: O.description_container,
      children: e.jsxs("span", {
        className: O.description,
        children: ["Pixel painting Leaderboard!", e.jsx("br", {}), e.jsx(Lt, {
          onPointerUp: () => {
            n.push("/stats")
          },
          children: "Painters stat"
        })]
      })
    })
  },
  vh = () => {
    const n = l(t => t.user.user);
    return !n || !n.squad || n.squad.id !== null ? null : e.jsx("button", {
      className: O.join_squad_button,
      children: e.jsxs("div", {
        className: O.join_squad_text,
        onPointerUp: () => {
          pe(`https://t.me/${at}`)
        },
        children: ["Join the squad ", e.jsx(B, {
          children: ""
        })]
      })
    })
  },
  ht = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAJFBMVEUQGSb////w8PHU1de6vMCoq6+NkJd3e4Juc3pXXWU8QkwlLDf3GVopAAABfklEQVR42u3ZwW7CMBCE4WHXazbO+79vL7QjUdxwYG1Vmu/YRP0tOwkOQERERERERERE5APOzIjMgR1Gd7s9mMfAWoffnnhuypMfWOMMu71kcWKB0W5TbaBcOuc8cgAjw/mngWJ3+5lvtjDCOII1/fa03GfjgQV96/ilP47Fin7ihTQeLO7f/zzuZ/X6d0x0Hq/sN0w1TkFd3w5MHcaroKJ/fZUHT6nqW4Imd4KX9a//uXOVCvq8BKcaZ6mif32PdZ708b7xIXR1clT0Pd6Z3fz4APK7P/YMgH3EjiVgH+ilF+F1H2nrb0NnHzhs/YPI2Qfg6x/FjX0Asf7DaDj7QNqej2PyNzckqNLtnS2ZdVQ5fc+mlNL2bMspdr2YcAC7Xs3Y3/dyyv789dzuC/u0uB9he/vA4Xv74BC29PlF5c4+v6q1HX0arr76i/qm+d/T75M+NyCWqORc//UbQA6AfUpjv1Cf9XE29it1946XzvB26KdTEREREREREZF/7Qv4ZQurWN4R2wAAAABJRU5ErkJggg==",
  Ua = ({
    src: n
  }) => {
    let t = ht;
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
  wh = () => {
    const n = g(),
      t = l(a => a.ratings.mySquadPlace),
      s = l(a => a.ratings.mySquad);
    return s === null || !s || s.id === null ? null : e.jsxs("div", {
      className: O.user_squad_container,
      onPointerUp: () => {
        n(Gs.getInfo({
          id: s.id
        })), n(Pn({
          dataSource: Te.squadFromData
        }))
      },
      children: [e.jsxs("div", {
        className: O.squad_avatar_container,
        children: [e.jsx(Ua, {
          src: s.logo
        }), e.jsx("div", {
          className: O.user_squad_position,
          children: t
        })]
      }), e.jsxs("div", {
        className: O.user_squad_info,
        children: [e.jsxs("div", {
          children: [e.jsx("span", {
            className: O.user_squad_name,
            children: s.name
          }), " "]
        }), e.jsx("div", {
          className: O.user_squad_your_squad_text,
          children: "Your squad"
        })]
      }), e.jsx("div", {
        children: e.jsx("span", {
          className: O.user_squad_users_count,
          children: Rt(s.scoredRepaints)
        })
      })]
    })
  },
  bh = ({
    item: n,
    index: t
  }) => {
    const s = g();
    return e.jsx(Xs, {
      children: e.jsxs("div", {
        className: O.rating_item,
        onPointerUp: () => {
          s(Gs.getInfo({
            id: n.id
          })), s(Pn({
            dataSource: Te.squadFromData
          }))
        },
        children: [e.jsx(Ti, {
          position: t + 1,
          userPic: n.logo
        }), e.jsx(Ei, {
          name: n.name,
          address: n.slug
        }), e.jsx(Bi, {
          value: n.scoredRepaints
        })]
      })
    })
  },
  jh = () => {
    const n = l(s => s.ratings.list);
    return l(s => s.ratings.status) !== u.fulfilled ? null : n.map((s, a) => e.jsx(bh, {
      item: s,
      index: a
    }, a))
  },
  Ph = () => {
    const n = g(),
      t = l(s => s.ratings.league);
    return p.useEffect(() => {
      n(ka.squad({
        league: t
      }))
    }, [t]), e.jsxs(ae.Fragment, {
      children: [e.jsx(vh, {}), e.jsx(wh, {}), e.jsx(jh, {})]
    })
  },
  Ch = () => e.jsx(ae.Fragment, {
    children: Array.from(Array(10)).map((n, t) => e.jsx(Xs, {
      children: e.jsx("div", {
        className: O.loading_item
      })
    }, t))
  }),
  Nh = "/assets/icon_squad-_NF17RUb.gif",
  Sh = "/assets/icon_squad_secret-B-fF264Z.gif",
  Ih = () => {
    const [n, t] = p.useState(0);
    return e.jsx("div", {
      className: O.squads_img_container,
      children: e.jsx("img", {
        alt: "img",
        className: O.squads_img,
        src: n >= 10 ? Sh : Nh,
        onPointerUp: () => {
          t(s => s + 1)
        }
      })
    })
  },
  Th = () => {
    const [n, t] = p.useState("Squads"), s = l(a => a.ratings.status);
    return e.jsxs($, {
      children: [e.jsx(Ih, {}), e.jsx(FA, {
        selectedSection: n,
        setSelectedSection: t
      }), e.jsx(yh, {}), e.jsxs(xh, {
        children: [n === "Squads" && e.jsx(Ph, {}), n === "Painters" && e.jsx(_h, {}), s !== u.fulfilled && e.jsx(Ch, {})]
      })]
    })
  },
  Eh = () => {
    const n = p.useRef(null),
      t = p.useRef(null);
    p.useEffect(() => () => {
      clearInterval(n.current)
    }, []);
    const s = () => {
      performance.now() - t.current < 200 && w.viewport.zoomIn(), clearInterval(n.current)
    };
    return e.jsx("button", {
      className: N.button,
      onPointerDown: () => {
        t.current = performance.now(), n.current = setInterval(() => {
          w.viewport.zoomIn()
        }, 90)
      },
      onPointerUp: () => {
        performance.now() - t.current < 200 && w.viewport.zoomIn(), clearInterval(n.current)
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
  Bh = () => {
    const n = p.useRef(null),
      t = p.useRef(null),
      s = () => {
        performance.now() - t.current < 200 && w.viewport.zoomOut(), clearInterval(n.current)
      };
    return p.useEffect(() => () => {
      clearInterval(n.current)
    }, []), p.useEffect(() => (window.addEventListener("blur", s), () => {
      window.removeEventListener("blur", s)
    }), []), e.jsx("button", {
      className: N.button,
      onPointerDown: () => {
        t.current = performance.now(), n.current = setInterval(() => {
          w.viewport.zoomOut()
        }, 90)
      },
      onPointerUp: () => {
        performance.now() - t.current < 200 && w.viewport.zoomOut(), clearInterval(n.current)
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
  Dh = () => e.jsxs("div", {
    className: N.buttons_container,
    children: [e.jsx(Eh, {}), e.jsx(Bh, {})]
  }),
  kh = () => {
    const n = g(),
      t = [N.button],
      s = l(r => r.shop.limitedGood),
      a = l(r => r.shop.limitedEnd),
      [o, i] = p.useState(null);
    return p.useEffect(() => {
      let r = null;
      if (a) {
        const c = () => {
          const d = Date.now(),
            m = Math.max(0, Math.ceil((a - d) / 1e3));
          i(m)
        };
        c(), r = setInterval(c, 1e3)
      }
      return () => {
        r && clearInterval(r)
      }
    }, [a]), s ? e.jsxs("button", {
      className: `${t.join(" ")} ${N.shop_button}`,
      onPointerUp: () => {
        n(pc())
      },
      children: [e.jsx("img", {
        alt: "img",
        className: N.button_image,
        src: s.image_url
      }), e.jsx("div", {
        className: N.limited_good_timer,
        children: Yr(o)
      })]
    }) : null
  },
  Rh = () => l(Re) ? e.jsx("div", {
    className: N.buttons_container,
    children: e.jsx(kh, {})
  }) : null,
  Uh = "_button_t2u3a_1",
  Oh = "_image_t2u3a_14",
  Mh = "_airdrop_button_t2u3a_19",
  Qh = "_button_text_t2u3a_33",
  ln = {
    button: Uh,
    image: Oh,
    airdrop_button: Mh,
    button_text: Qh
  },
  Fh = () => {
    const n = g(),
      t = l(Ms),
      s = l(Os),
      a = l(i => i.main.pixanosRatingStatus);
    let o = 14 + t.top + s.top + jo + 14;
    return e.jsx("button", {
      className: ln.button,
      style: {
        top: o
      },
      onPointerUp: () => {
        a !== u.pending && n(pp.getPixanosRating()), n(cs(!0))
      },
      children: e.jsx("img", {
        alt: "img",
        src: Ft,
        className: ln.image
      })
    })
  },
  zh = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAAAXNSR0IArs4c6QAAAglJREFUaIHtWj1OwzAU/oy6UKkXYGCJRKV07AUoByjs3ITOIHEMBnboAQgXYCRShy4gcYFKsCCFoXlt/BzHNiEisv0ttHb8Xvo+vx/8DET0G6IDmcV/vsPBXwrrAwZdCS5eZ43zYpJ1ojcohmp9YZqOBAC85BtpPk2GAgDy9afTC6TJEOU6SZ5OTwW1vucdQ00RpgBUX+B7n+Z1PmFab5LTsD4MhpyjHLck/aXx5c0KAHB+/yF953i8PAIAzK/GkhyuxxXeMaT1oWk6ArCPMjoGuoKOwUr0q10XDkOwrMmMe32sEbMStc+JwbONWiBGuRK2eUSBIzPK+C/1h8MQ1WZikklR7uk6AQCcLdbtNOsYLEF6CMSMqWb0miHJZNwCZCHKD1qUls9u32unN/kXAGB+d7Id0PgOPScWss/wqrz6ioCHDFXNY1Vdcyh5yDKfFN+n2w+MIVd9vPr2jiHrPJQ9vAHY722lljNELQUa3yGQr47SQwDA7OLYSqx3DMUf1He0j3IUrXQgXzHUbNb6go9yJgtR9DH+x8qZcYROT9DVtrS5+Ykmz0fOMPgOB+UffsoUXLXd+uTUWH07gvtMPDk1PdBVH8cWrvq9YyienPYdzlFut1DTLeAM8ijIx127D8FFudjB6zucuw8WXfBG39spVmuz2AWvQ2d3fRxuksS7Pk2It7EiItrhB7p6E/aIRp2bAAAAAElFTkSuQmCC",
  Hh = () => {
    const n = Y();
    return e.jsxs("button", {
      className: ln.airdrop_button,
      onPointerUp: () => {
        n.push("/airdrop")
      },
      children: [e.jsx("img", {
        alt: "img",
        src: zh,
        className: ln.image
      }), e.jsx("div", {
        className: ln.button_text,
        children: "Airdrop"
      })]
    })
  },
  qh = () => e.jsx("div", {
    className: N.layout,
    children: e.jsxs("div", {
      className: N.container,
      children: [e.jsxs("div", {
        className: N.buttons_container,
        children: [e.jsx(Hh, {}), e.jsx(Fh, {})]
      }), e.jsx(Dh, {}), e.jsx(Rh, {})]
    })
  }),
  Lh = "_layout_1v16g_1",
  Vh = "_container_1v16g_5",
  Gh = "_close_button_1v16g_14",
  Xh = "_title_container_1v16g_22",
  Jh = "_image_container_1v16g_28",
  Yh = "_image_1v16g_28",
  Wh = "_first_image_1v16g_45",
  Kh = "_second_image_1v16g_50",
  Zh = "_text_container_1v16g_55",
  $h = "_button_container_1v16g_60",
  eg = "_button_1v16g_60",
  be = {
    layout: Lh,
    container: Vh,
    close_button: Gh,
    title_container: Xh,
    image_container: Jh,
    image: Yh,
    first_image: Wh,
    second_image: Kh,
    text_container: Zh,
    button_container: $h,
    button: eg
  },
  tg = "_layout_1df7o_1",
  ng = "_container_1df7o_14",
  sg = "_move_in_1df7o_1",
  Za = {
    layout: tg,
    container: ng,
    move_in: sg
  },
  ct = ({
    children: n,
    show: t,
    onPointerUp: s = () => {},
    backgroundColor: a
  }) => {
    const [o, i] = p.useState(!1), [r, c] = vs(() => ({
      from: {
        opacity: 0
      },
      config: {
        duration: 300,
        easing: ws.easeOutCubic
      }
    }));
    return p.useEffect(() => {
      t ? (i(!0), c.start({
        opacity: 1
      })) : t || c.start({
        opacity: 0,
        onResolve: () => i(!1)
      })
    }, [t]), o ? e.jsx(bs.div, {
      className: Za.layout,
      style: {
        ...r,
        backgroundColor: a
      },
      onPointerUp: s,
      children: e.jsx("div", {
        className: Za.container,
        children: n
      })
    }) : null
  },
  ag = () => {
    const n = g(),
      t = l(i => i.main.referrerSquadId),
      [s, a] = p.useState(null),
      o = l(i => i.user.user);
    return p.useEffect(() => {
      if (t) try {
        (async () => {
          const r = await F.getSquadInfo({
            id: t
          });
          r.data.squad && r.data.squad.id !== null && a(r.data.squad)
        })()
      } catch {}
    }, [t]), e.jsx(ct, {
      show: t !== null,
      onPointerUp: () => {
        n(_a(null))
      },
      children: e.jsx("div", {
        className: be.layout,
        onPointerUp: i => {
          i.stopPropagation()
        },
        children: e.jsxs("div", {
          className: be.container,
          children: [e.jsx("div", {
            className: be.close_button,
            onPointerUp: () => {
              n(_a(null))
            },
            children: e.jsx(B, {
              size: 26,
              children: ""
            })
          }), e.jsx("div", {
            className: be.title_container,
            children: e.jsx("span", {
              children: "Friend's squad invitation"
            })
          }), e.jsxs("div", {
            className: be.image_container,
            children: [e.jsx("img", {
              alt: "img",
              className: `${be.image} ${be.first_image}`,
              src: s === null ? ht : s.logo
            }), e.jsx("img", {
              alt: "img",
              className: `${be.image} ${be.second_image}`,
              src: o === null || o.userPic === "" ? He : o.userPic
            })]
          }), e.jsx("div", {
            className: be.text_container,
            children: e.jsxs("span", {
              children: ["Your friend is a part of the", " ", s === null ? "" : `"${s.name}"`, " squad. Ready to team up?"]
            })
          }), e.jsx("div", {
            className: be.button_container,
            children: e.jsxs("button", {
              className: be.button,
              onPointerUp: () => {
                s !== null && pe(`https://t.me/${at}?startapp=${btoa(`id=${s.id}`)}`)
              },
              children: [s !== null && `Join ${s.name} squad`, s === null && "Loading squad info..."]
            })
          })]
        })
      })
    })
  },
  og = "_layout_swx97_1",
  ig = {
    layout: og
  },
  rg = "_layout_1a5xo_1",
  cg = "_container_1a5xo_5",
  $a = {
    layout: rg,
    container: cg
  },
  lg = () => {
    const n = g(),
      t = l(o => o.main.fastMode);
    if (!l(o => o.canvas.coords)) return null;
    const a = [N.button, N.fast_type_button, N.shop_button];
    return t && a.push(N.fast_mode_button_enabled), e.jsx("button", {
      className: a.join(" "),
      onPointerUp: () => {
        n(t ? qs() : di())
      },
      children: e.jsx("img", {
        alt: "img",
        className: N.button_image,
        src: Mo
      })
    })
  },
  dg = () => {
    const n = g(),
      t = l(i => i.canvas.coords),
      s = l(i => i.main.fastMode),
      a = l(i => i.main.currentFastType);
    if (!t) return null;
    const o = [N.button, N.shop_button, N.fast_type_button];
    return e.jsxs("button", {
      className: o.join(" "),
      onPointerUp: () => {
        if (s || a) return;
        const i = w.mainImage.getPixelColor({
          coords: t
        });
        n(Na(i))
      },
      children: [e.jsx("div", {
        className: N.disabled_button_cover,
        style: {
          opacity: s || a ? .7 : 0
        }
      }), e.jsx("img", {
        alt: "img",
        className: N.button_image,
        src: Oo
      })]
    })
  },
  ug = () => {
    const n = g(),
      t = [N.button, N.shop_button, N.fast_type_button],
      s = [N.button_image];
    return e.jsx("button", {
      className: t.join(" "),
      style: {
        borderRadius: "0 var(--border-radius) var(--border-radius) 0"
      },
      onPointerUp: () => {
        n(qe(13)), n(Le())
      },
      children: e.jsx("img", {
        alt: "img",
        className: s.join(" "),
        src: Ft
      })
    })
  },
  pg = () => l(t => t.canvas.coords) ? e.jsx("div", {
    className: $a.layout,
    children: e.jsxs("div", {
      className: $a.container + " " + N.container__bottom,
      children: [e.jsx(Qm, {}), e.jsx(Om, {}), e.jsx(cA, {}), e.jsx(nm, {}), e.jsx(lg, {}), e.jsx(dg, {}), e.jsx(ug, {})]
    })
  }) : null,
  mg = ({
    open: n,
    setOpen: t,
    active: s,
    setActive: a
  }) => {
    const o = l(i => i.color.active);
    return e.jsx("div", {
      className: Z.active_color,
      style: {
        backgroundColor: o
      },
      onPointerUp: i => {
        i.stopPropagation(), n && s === 1 ? t(!1) : n && s === 2 ? a(1) : (a(1), t(!0))
      }
    })
  },
  Ag = ({
    open: n,
    setOpen: t,
    active: s,
    setActive: a
  }) => {
    const o = g(),
      i = [Z.info_button];
    return n && s === 2 && i.push(Z.info_button_active), e.jsx("div", {
      className: i.join(" "),
      onPointerUp: r => {
        r.stopPropagation(), o(Pn({
          dataSource: Te.userFromPixelInfo
        }))
      },
      children: "info"
    })
  },
  hg = () => {
    const [n, t] = p.useState(!0), [s, a] = p.useState(!1), o = l(r => r.canvas.coords), i = p.useRef(null);
    return p.useEffect(() => () => {
      i.current !== null && (clearTimeout(i.current), i.current = null)
    }, []), e.jsxs("div", {
      className: Z.pixel_info_container,
      children: [n && e.jsxs("div", {
        className: Z.pixel_info_text,
        onPointerUp: async r => {
          var d, m;
          r.stopPropagation(), await Ds(`${gt}?startapp=x${o.x}_y${o.y}`) ? (m = (d = window.Telegram.WebApp) == null ? void 0 : d.HapticFeedback) == null || m.notificationOccurred("success") : a(!0), t(!1), i.current = setTimeout(() => {
            a(!1), t(!0), i.current = null
          }, 4e3)
        },
        children: [`${o.x}, ${o.y}`, " ", e.jsx(B, {
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
  gg = "_expandable_panel_layout_1v9vd_1",
  _g = "_expandable_panel_1v9vd_1",
  fg = "_divider_1v9vd_16",
  xg = "_divider_spacer_1v9vd_24",
  yg = "_divider_pointer_1v9vd_28",
  dn = {
    expandable_panel_layout: gg,
    expandable_panel: _g,
    divider: fg,
    divider_spacer: xg,
    divider_pointer: yg
  },
  vg = ({
    active: n
  }) => {
    const t = n === 1 ? "38px" : "54px",
      s = n === 1 ? 0 : 1;
    return e.jsxs("div", {
      className: dn.divider,
      children: [e.jsx("div", {
        className: dn.divider_spacer,
        style: {
          flexGrow: s
        }
      }), e.jsx("div", {
        className: dn.divider_pointer,
        style: {
          width: t
        }
      })]
    })
  },
  wg = n => {
    const t = p.useRef(),
      s = p.useRef();
    return p.useEffect(() => {
      t.current = n
    }), p.useEffect(() => {
      const a = o => {
        s.current && t.current && !s.current.contains(o.target) && t.current(o)
      };
      return window.addEventListener("pointerup", a), () => {
        window.removeEventListener("pointerup", a)
      }
    }, []), s
  },
  bg = "_container_1vu8i_1",
  jg = "_owner_1vu8i_10",
  Pg = "_id_1vu8i_14",
  Cg = "_date_1vu8i_19",
  Ng = "_avatar_container_1vu8i_24",
  Sg = "_avatar_1vu8i_24",
  Ig = "_squad_avatar_container_1vu8i_36",
  Tg = "_text_container_1vu8i_48",
  Eg = "_dot_1vu8i_54",
  Bg = "_user_name_1vu8i_59",
  Dg = "_squad_name_1vu8i_64",
  se = {
    container: bg,
    owner: jg,
    id: Pg,
    date: Cg,
    avatar_container: Ng,
    avatar: Sg,
    squad_avatar_container: Ig,
    text_container: Tg,
    dot: Eg,
    user_name: Bg,
    squad_name: Dg
  },
  kg = "_skeleton_k7kmi_1",
  Rg = "_loading_k7kmi_1",
  Ug = {
    skeleton: kg,
    loading: Rg
  },
  Be = ({
    children: n,
    show: t
  }) => t ? e.jsx("div", {
    className: Ug.skeleton,
    children: e.jsx("div", {
      style: {
        opacity: 0
      },
      children: n
    })
  }) : null,
  Og = () => {
    const n = l(i => i.canvas.pixelInfo),
      t = l(i => i.canvas.getPixelInfoFetchStatus),
      s = n !== null && t === u.fulfilled,
      a = () => De(new Date(n.pixel.dateObtained));
    if (!s) return e.jsx(Be, {
      show: !s,
      children: e.jsx("span", {
        className: se.date,
        children: "29 august at 18:00"
      })
    });
    const o = a();
    return e.jsx("div", {
      children: e.jsx("span", {
        className: se.date,
        children: o
      })
    })
  },
  Vt = ({
    address: n,
    limit: t = 0,
    display: s = null
  }) => {
    const a = l(Da);
    if (!n || n === "") return e.jsx("span", {
      children: "Anon"
    });
    let o = Vr(s === null ? n : s);
    return t > 0 && (o = vn(o, t)), e.jsx("span", {
      className: Go.link,
      onPointerUp: i => {
        i.stopPropagation(), a ? pe(`https://t.me/${Fa(n)}`) : wn(`https://t.me/${Fa(n)}`)
      },
      children: o
    })
  },
  Mg = () => {
    const n = l(r => r.canvas.pixelInfo),
      t = l(r => r.canvas.getPixelInfoFetchStatus),
      s = n !== null && t === u.fulfilled;
    if (!s) return e.jsx(Be, {
      show: !s,
      children: e.jsx("div", {
        className: se.text_container,
        children: e.jsx("span", {
          className: se.user_name,
          children: "No name • @notpixel"
        })
      })
    });
    const o = vn(n.owner.firstName || "No name");
    return (() => {
      const r = n.owner.userName && n.owner.userName !== "";
      return {
        address: r ? n.owner.userName : "Anon",
        hasAddress: r
      }
    })(), e.jsx("div", {
      className: se.text_container,
      children: e.jsx("span", {
        className: se.user_name,
        children: o
      })
    })
  },
  Qg = () => {
    var o, i;
    const n = l(r => r.canvas.pixelInfo),
      t = l(r => r.canvas.getPixelInfoFetchStatus),
      s = n !== null && t === u.fulfilled;
    return s ? ((i = (o = n == null ? void 0 : n.owner) == null ? void 0 : o.squad) == null ? void 0 : i.name) && n.owner.squad.name !== null ? e.jsxs("div", {
      className: se.text_container,
      children: [e.jsx("span", {
        className: se.squad_name,
        children: n.owner.squad.name
      }), e.jsx("span", {
        className: se.dot,
        children: "•"
      }), e.jsx(Vt, {
        address: `${at}?startapp=${btoa(`id=${n.owner.squad.id}`)}`,
        display: n.owner.squad.slug,
        limit: 18
      })]
    }) : e.jsx("div", {
      className: se.text_container,
      children: e.jsx("span", {
        className: se.squad_name,
        children: "No squad"
      })
    }) : e.jsx(Be, {
      show: !s,
      children: e.jsx("div", {
        className: se.text_container,
        children: e.jsx("span", {
          className: se.squad_name,
          children: "Loading..."
        })
      })
    })
  },
  Fg = () => {
    var o, i;
    const n = l(r => r.canvas.pixelInfo),
      t = l(r => r.canvas.getPixelInfoFetchStatus),
      s = n !== null && t === u.fulfilled;
    let a = He;
    return s && n.owner.userPic && n.owner.userPic !== "" && (a = n.owner.userPic), e.jsxs("div", {
      className: se.avatar_container,
      children: [e.jsx("img", {
        alt: "avatar",
        className: se.avatar,
        src: a
      }), e.jsx("div", {
        className: se.squad_avatar_container,
        children: e.jsx(Ua, {
          src: ((i = (o = n == null ? void 0 : n.owner) == null ? void 0 : o.squad) == null ? void 0 : i.logo) || ""
        })
      })]
    })
  },
  zg = () => {
    const n = g(),
      t = l(o => o.canvas.pixelInfo),
      s = l(o => o.canvas.getPixelInfoFetchStatus),
      a = t !== null && s === u.fulfilled;
    return e.jsxs("div", {
      children: [a && e.jsxs("span", {
        className: se.owner,
        children: [" ", "Owner "]
      }), a && t.owner.id !== 0 && e.jsxs("span", {
        className: se.id,
        onPointerUp: async o => {
          o.preventDefault(), o.stopPropagation();
          try {
            await Ds(`${t.owner.id}`), await n(q({
              id: performance.now(),
              text: "Copied!"
            }))
          } catch {
            await n(q({
              id: performance.now(),
              text: "Can't copy!"
            }))
          }
        },
        children: [" ", t.owner.id]
      }), e.jsx(Be, {
        show: !a,
        children: e.jsx("span", {
          className: se.owner,
          children: "Owner"
        })
      })]
    })
  },
  Hg = () => e.jsxs("div", {
    className: se.container,
    children: [e.jsx(zg, {}), e.jsx(Og, {}), e.jsx(Fg, {}), e.jsx(Mg, {}), e.jsx(Qg, {})]
  }),
  qg = "_category_text_epppt_1",
  Lg = "_latest_used_container_epppt_8",
  Vg = "_color_line_epppt_15",
  Gg = "_color_item_epppt_22",
  Xg = "_pipette_container_epppt_30",
  Jg = "_child_scale_epppt_48",
  Di = {
    category_text: qg,
    latest_used_container: Lg,
    color_line: Vg,
    color_item: Gg,
    pipette_container: Xg,
    child_scale: Jg
  },
  Yg = ({
    color: n
  }) => {
    const [t, s] = p.useState(!1), a = p.useRef(null), o = g();
    return e.jsx("div", {
      style: {
        backgroundColor: n,
        transform: t ? "scale(1.2)" : ""
      },
      className: Di.color_item,
      onPointerUp: () => {
        var i, r;
        s(!0), a.current !== null && clearTimeout(a.current), a.current = setTimeout(() => {
          s(!1)
        }, 200), o(Na(n)), (r = (i = window.Telegram.WebApp) == null ? void 0 : i.HapticFeedback) == null || r.notificationOccurred("success")
      }
    })
  },
  ki = ({
    colors: n
  }) => e.jsx("div", {
    className: Di.color_line,
    children: n.map((t, s) => e.jsx(Yg, {
      color: t
    }, `${t}_${s}`))
  }),
  Wg = "_unlock_button_fc8qr_1",
  Kg = "_stars_text_fc8qr_13",
  eo = {
    unlock_button: Wg,
    stars_text: Kg
  },
  Zg = () => e.jsxs("div", {
    className: eo.unlock_button,
    children: [e.jsx("span", {
      children: "Unlock all colors for"
    }), e.jsxs("span", {
      className: eo.stars_text,
      children: [e.jsx(bn, {}), e.jsx("span", {
        children: "5000"
      })]
    })]
  }),
  $g = () => {
    l(t => t.color.latest);
    const n = l(t => t.color.basic);
    return e.jsxs(ae.Fragment, {
      children: [e.jsx(ki, {
        colors: n
      }), e.jsx(Zg, {})]
    })
  },
  e_ = ({
    getData: n
  }) => {
    const t = g(),
      s = l(o => o.canvas.coords),
      a = l(o => o.main.showUserAndSquadPopup);
    return p.useEffect(() => {
      if (s !== null && (n || a)) {
        const o = ot(s);
        t(Fs.getPixelInfo({
          id: o
        }))
      }
    }, [s, n, a, t]), null
  },
  t_ = ({
    open: n,
    setOpen: t,
    active: s
  }) => {
    const a = wg(() => {
        s !== 2 && t(!1)
      }),
      [o, i] = vs(() => ({
        from: {
          height: 0,
          opacity: 0
        },
        config: {
          duration: 400,
          easing: ws.easeOutCubic
        }
      })),
      r = p.useRef(null);
    return p.useEffect(() => {
      if (n !== null && r.current !== null) {
        const c = n ? r.current.offsetHeight : 0;
        i.start({
          height: n ? c : 0,
          opacity: n ? 1 : 0
        })
      }
    }, [n, s, r, i]), e.jsxs(bs.div, {
      ref: a,
      className: dn.expandable_panel_layout,
      style: {
        ...o
      },
      children: [e.jsx(e_, {
        getData: s === 2 && n
      }), e.jsxs("div", {
        ref: r,
        className: dn.expandable_panel,
        children: [e.jsx(vg, {
          active: s
        }), s === 1 && e.jsx($g, {}), s === 2 && e.jsx(Hg, {})]
      })]
    })
  },
  n_ = () => l(Re) ? null : e.jsxs("button", {
    className: Z.button,
    onPointerUp: () => {
      pe("https://t.me/notpixel")
    },
    children: [e.jsx("img", {
      alt: "tg_logo",
      className: Z.tg_logo,
      src: jn
    }), e.jsx("span", {
      className: Z.button_text,
      children: "Go to app for paint"
    })]
  }),
  s_ = () => e.jsx(Dm, {}),
  a_ = () => l(Re) ? e.jsx(s_, {}) : e.jsx(n_, {}),
  o_ = () => {
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
  i_ = () => {
    const [n, t] = p.useState(!1), [s, a] = p.useState(1), o = l(r => r.main.fastMode), i = l(r => r.main.currentFastType);
    return p.useEffect(() => {
      (o || i) && t(!1)
    }, [o, i]), e.jsx("div", {
      className: Z.order_panel,
      onPointerUp: r => {
        r.stopPropagation()
      },
      children: e.jsxs("div", {
        className: Z.content,
        children: [e.jsx(o_, {}), e.jsxs("div", {
          className: Z.info,
          children: [e.jsx(mg, {
            open: n,
            setOpen: t,
            active: s,
            setActive: a
          }), e.jsx(hg, {}), e.jsx(Ag, {
            open: n,
            setOpen: t,
            active: s,
            setActive: a
          })]
        }), e.jsx(t_, {
          open: n,
          setOpen: t,
          active: s
        }), e.jsx(a_, {})]
      })
    })
  },
  r_ = () => e.jsx(ae.Fragment, {
    children: e.jsx(i_, {})
  }),
  c_ = "_panel_1urz2_1",
  l_ = "_content_1urz2_16",
  to = {
    panel: c_,
    content: l_
  },
  d_ = ({
    text: n
  }) => e.jsx("div", {
    className: to.panel,
    children: e.jsx("div", {
      className: to.content,
      children: n
    })
  }),
  u_ = () => l(t => t.canvas.coords) === null ? e.jsx(d_, {
    text: "A-yo! Zoom, tap, paint"
  }) : e.jsxs("div", {
    className: ig.layout,
    children: [e.jsx(pg, {}), e.jsx(r_, {})]
  }),
  p_ = "_layout_14a3l_1",
  m_ = "_container_14a3l_11",
  A_ = "_image_14a3l_26",
  h_ = "_text_14a3l_31",
  g_ = "_gold_14a3l_37",
  __ = "_winning_14a3l_44",
  f_ = "_loosing_14a3l_48",
  ye = {
    layout: p_,
    container: m_,
    image: A_,
    text: h_,
    gold: g_,
    winning: __,
    loosing: f_
  },
  Ri = n => {
    if (!n) return "soon";
    const s = n - new Date,
      a = Math.floor(s / 1e3),
      o = Math.floor(a / 60 / 60),
      r = Math.floor(s / (1e3 * 60)) % 60;
    return o <= 0 && r < 30 ? "soon" : `in ${o}h ${r}m`
  },
  Ui = "/assets/gold_pixel-CRD2C_ap.gif",
  x_ = () => {
    const n = l($u),
      t = l(r => r.tournament.resultsStatus),
      s = n && n.rank && n.rank <= n.rank_to_win,
      a = n && n.template && n.template.rank && n.template.rank <= n.template.lastSurvivalRank,
      o = n && n.rank || 0,
      i = n && n.template && n.template.rank || 0;
    return t !== u.fulfilled ? null : e.jsxs(ae.Fragment, {
      children: ["  ", e.jsx(B, {
        size: 14,
        className: a ? ye.winning : ye.loosing,
        children: ""
      }), " ", e.jsx("span", {
        className: a ? ye.winning : ye.loosing,
        children: i
      }), " ", e.jsx(B, {
        size: 14,
        className: s ? ye.winning : ye.loosing,
        children: ""
      }), " ", e.jsx("span", {
        className: s ? ye.winning : ye.loosing,
        children: o
      })]
    })
  },
  y_ = () => {
    const n = l($e),
      t = l(Ku),
      s = t ? Ri(new Date(t.EndTime)) : null;
    return e.jsxs("span", {
      className: ye.text,
      children: [e.jsxs("span", {
        className: ye.gold,
        children: ["Round ", n, " ", s ? `ends ${s}` : ""]
      }), e.jsx(x_, {})]
    })
  },
  v_ = () => {
    const n = Y(),
      t = l($e),
      s = l(Zu);
    return Ri(s ? new Date(s.StartTime) : null), e.jsx("div", {
      className: ye.layout,
      onPointerUp: () => {
        n.push("/tournament")
      },
      children: e.jsxs("div", {
        className: ye.container,
        children: [e.jsx("img", {
          alt: "img",
          className: ye.image,
          src: Ui
        }), !t && e.jsx("span", {
          style: {
            fontWeight: 600
          },
          children: "Telegram Battle is over"
        }), t && e.jsx(y_, {})]
      })
    })
  },
  w_ = () => e.jsxs(e.Fragment, {
    children: [e.jsx(qh, {}), e.jsx(u_, {}), e.jsx(v_, {}), e.jsx(ag, {})]
  }),
  b_ = "_page_title_13ybj_1",
  j_ = "_container_13ybj_9",
  P_ = "_item_13ybj_13",
  C_ = "_active_13ybj_18",
  N_ = "_info_container_13ybj_34",
  S_ = "_dot_13ybj_40",
  I_ = "_title_text_13ybj_46",
  T_ = "_capitalize_13ybj_50",
  E_ = "_hint_text_13ybj_54",
  B_ = "_date_text_13ybj_61",
  D_ = "_value_container_13ybj_66",
  k_ = "_value_text_13ybj_74",
  R_ = "_positive_color_13ybj_78",
  U_ = "_negative_color_13ybj_85",
  O_ = "_last_text_13ybj_92",
  x = {
    page_title: b_,
    container: j_,
    item: P_,
    active: C_,
    info_container: N_,
    dot: S_,
    title_text: I_,
    capitalize: T_,
    hint_text: E_,
    date_text: B_,
    value_container: D_,
    value_text: k_,
    positive_color: R_,
    negative_color: U_,
    last_text: O_
  },
  M_ = ({
    item: n
  }) => {
    const t = Y(),
      s = Ns(n.details.pixel),
      a = g();
    return e.jsxs("div", {
      className: `${x.item} ${x.active}`,
      onPointerUp: () => {
        t.push("/"), w.viewport.viewport.animate({
          scale: 25,
          time: 400,
          position: s
        }), w.mainImage.selectedPixel.draw(s), a(Ot(s)), t.push("/")
      },
      children: [e.jsxs("div", {
        className: x.info_container,
        children: [e.jsxs("div", {
          children: [e.jsx("span", {
            className: x.title_text,
            children: "Paint Pixel"
          }), e.jsx("span", {
            className: x.hint_text,
            children: `${s.x}, ${s.y}`
          })]
        }), e.jsx("div", {
          className: x.date_text,
          children: e.jsx("span", {
            children: De(new Date(n.dateTime))
          })
        })]
      }), e.jsx("div", {
        className: x.value_container,
        children: e.jsxs("span", {
          className: `${x.value_text} ${x.positive_color}`,
          children: ["+", new Intl.NumberFormat("fr", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          }).format(Math.abs(n.balanceChange)).replace(",", ".")]
        })
      })]
    })
  },
  Q_ = ({
    item: n
  }) => {
    const t = Y(),
      s = {
        x: n.details.x,
        y: n.details.y
      },
      a = g();
    return e.jsxs("div", {
      className: `${x.item} ${x.active}`,
      onPointerUp: () => {
        t.push("/"), w.viewport.viewport.animate({
          scale: 25,
          time: 400,
          position: s
        }), w.mainImage.selectedPixel.draw(s), a(Ot(s)), t.push("/")
      },
      children: [e.jsxs("div", {
        className: x.info_container,
        children: [e.jsxs("div", {
          children: [e.jsx("span", {
            className: x.title_text,
            children: "Pixel Sale"
          }), e.jsx("span", {
            className: x.hint_text,
            children: `${s.x}, ${s.y}`
          }), e.jsx("span", {
            className: x.dot,
            children: "•"
          }), e.jsx(Vt, {
            address: n.details.buyer
          })]
        }), e.jsx("div", {
          className: x.date_text,
          children: e.jsx("span", {
            children: De(new Date(n.dateTime))
          })
        })]
      }), e.jsx("div", {
        className: x.value_container,
        children: e.jsxs("span", {
          className: `${x.value_text} ${x.positive_color}`,
          children: ["+", new Intl.NumberFormat("fr", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          }).format(n.balanceChange).replace(",", ".")]
        })
      })]
    })
  },
  F_ = ({
    item: n
  }) => e.jsxs("div", {
    className: x.item,
    children: [e.jsxs("div", {
      className: x.info_container,
      children: [e.jsx("div", {
        children: e.jsx("span", {
          className: x.title_text,
          children: "Claim"
        })
      }), e.jsx("div", {
        className: x.date_text,
        children: e.jsx("span", {
          children: De(new Date(n.dateTime))
        })
      })]
    }), e.jsx("div", {
      className: x.value_container,
      children: e.jsxs("span", {
        className: `${x.value_text} ${x.positive_color}`,
        children: ["+", n.balanceChange.toFixed(2)]
      })
    })]
  }),
  z_ = ({
    item: n
  }) => e.jsxs("div", {
    className: x.item,
    children: [e.jsxs("div", {
      className: x.info_container,
      children: [e.jsxs("div", {
        children: [e.jsx("span", {
          className: x.title_text,
          children: n.details.type
        }), e.jsx("span", {
          className: x.hint_text,
          children: "Boost"
        })]
      }), e.jsx("div", {
        className: x.date_text,
        children: e.jsx("span", {
          children: De(new Date(n.dateTime))
        })
      })]
    }), e.jsx("div", {
      className: x.value_container,
      children: e.jsx("span", {
        className: `${x.value_text} ${x.negative_color}`,
        children: n.balanceChange
      })
    })]
  }),
  H_ = ({
    item: n
  }) => e.jsxs("div", {
    className: x.item,
    children: [e.jsxs("div", {
      className: x.info_container,
      children: [e.jsxs("div", {
        children: [e.jsx("span", {
          className: `${x.title_text} ${x.capitalize}`,
          children: `${n.details.from} > ${n.details.to}`
        }), e.jsx("span", {
          className: x.hint_text,
          children: "League"
        })]
      }), e.jsx("div", {
        className: x.date_text,
        children: e.jsx("span", {
          children: De(new Date(n.dateTime))
        })
      })]
    }), e.jsx("div", {
      className: x.value_container
    })]
  }),
  q_ = ({
    item: n
  }) => e.jsxs("div", {
    className: x.item,
    children: [e.jsxs("div", {
      className: x.info_container,
      children: [e.jsxs("div", {
        children: [e.jsx("span", {
          className: x.title_text,
          children: "Referral"
        }), e.jsx("span", {
          className: x.dot,
          children: "•"
        }), e.jsx(Vt, {
          address: n.details.name
        })]
      }), e.jsx("div", {
        className: x.date_text,
        children: e.jsx("span", {
          children: De(new Date(n.dateTime))
        })
      })]
    }), e.jsx("div", {
      className: x.value_container,
      children: e.jsxs("span", {
        className: `${x.value_text} ${x.positive_color}`,
        children: ["+", n.balanceChange]
      })
    })]
  }),
  L_ = ({
    item: n
  }) => e.jsxs("div", {
    className: x.item,
    children: [e.jsxs("div", {
      className: x.info_container,
      children: [e.jsxs("div", {
        children: [e.jsx("span", {
          className: x.title_text,
          children: `${n.details.type} ${n.details.round_id?"for round №"+n.details.round_id:""}`
        }), e.jsx("span", {
          className: x.hint_text,
          children: "Special"
        })]
      }), e.jsx("div", {
        className: x.date_text,
        children: e.jsx("span", {
          children: De(new Date(n.dateTime))
        })
      })]
    }), e.jsx("div", {
      className: x.value_container,
      children: e.jsxs("span", {
        className: `${x.value_text} ${n.balanceChange>=0?x.positive_color:x.negative_color}`,
        children: [n.balanceChange >= 0 ? "+" : "", n.balanceChange]
      })
    })]
  }),
  V_ = ({
    item: n
  }) => e.jsxs("div", {
    className: x.item,
    children: [e.jsxs("div", {
      className: x.info_container,
      children: [e.jsxs("div", {
        children: [e.jsx("span", {
          className: `${x.title_text} ${x.capitalize}`,
          children: `${n.details.type}`
        }), e.jsxs("span", {
          className: x.hint_text,
          children: [n.details.quantity, " pc."]
        })]
      }), e.jsx("div", {
        className: x.date_text,
        children: e.jsx("span", {
          children: De(new Date(n.dateTime))
        })
      })]
    }), e.jsxs("div", {
      className: x.value_container,
      children: ["-", n.details.price, " ", e.jsx(bn, {
        fontSize: 14
      })]
    })]
  }),
  G_ = ({
    item: n
  }) => e.jsxs("div", {
    className: x.item,
    children: [e.jsxs("div", {
      className: x.info_container,
      children: [e.jsxs("div", {
        children: [e.jsx("span", {
          className: x.title_text,
          children: n.details.type
        }), e.jsx("span", {
          className: x.hint_text,
          children: "Task"
        })]
      }), e.jsx("div", {
        className: x.date_text,
        children: e.jsx("span", {
          children: De(new Date(n.dateTime))
        })
      })]
    }), e.jsx("div", {
      className: x.value_container,
      children: e.jsxs("span", {
        className: `${x.value_text} ${x.positive_color}`,
        children: ["+", n.balanceChange]
      })
    })]
  }),
  X_ = ({
    item: n
  }) => e.jsxs("div", {
    className: x.item,
    children: [e.jsxs("div", {
      className: x.info_container,
      children: [e.jsxs("div", {
        children: [e.jsx("span", {
          className: x.title_text,
          children: "Ref reward"
        }), e.jsx("span", {
          className: x.hint_text,
          children: n.details.type
        })]
      }), e.jsx("div", {
        className: x.date_text,
        children: e.jsx("span", {
          children: De(new Date(n.dateTime))
        })
      })]
    }), e.jsx("div", {
      className: x.value_container,
      children: e.jsxs("span", {
        className: `${x.value_text} ${x.positive_color}`,
        children: ["+", n.balanceChange.toFixed(2)]
      })
    })]
  }),
  J_ = ({
    item: n
  }) => n.action === "buy pixel" ? e.jsx(M_, {
    item: n
  }) : n.action === "sell pixel" ? e.jsx(Q_, {
    item: n
  }) : n.action === "claim" ? e.jsx(F_, {
    item: n
  }) : n.action === "get boost" ? e.jsx(z_, {
    item: n
  }) : n.action === "league transfer" ? e.jsx(H_, {
    item: n
  }) : n.action === "referral" ? e.jsx(q_, {
    item: n
  }) : n.action === "special" ? e.jsx(L_, {
    item: n
  }) : n.action === "purchase" ? e.jsx(V_, {
    item: n
  }) : n.action === "complete task" ? e.jsx(G_, {
    item: n
  }) : n.action === "referrer reward" ? e.jsx(X_, {
    item: n
  }) : (console.log("unknown action: ", n.action), null),
  Y_ = () => {
    const n = g(),
      t = l(a => a.history.list),
      s = l(a => a.history.status);
    return p.useEffect(() => {
      n(Ra.get({
        offset: 0,
        limit: 50
      }))
    }, []), e.jsxs("div", {
      className: x.container,
      children: [t.map((a, o) => e.jsx(J_, {
        item: a
      }, o)), s === u.fulfilled && t.length >= 50 && e.jsx("div", {
        className: x.last_text,
        children: e.jsx("span", {
          children: "Last 50 events"
        })
      })]
    })
  },
  W_ = () => e.jsxs($, {
    children: [e.jsx("h1", {
      className: x.page_title,
      children: "History"
    }), e.jsx(Y_, {})]
  }),
  K_ = "_text_layout_1xggq_1",
  Z_ = "_text_1xggq_1",
  $_ = "_button_layout_1xggq_14",
  ef = "_button_layout_placeholder_1xggq_26",
  tf = "_button_1xggq_14",
  Kt = {
    text_layout: K_,
    text: Z_,
    button_layout: $_,
    button_layout_placeholder: ef,
    button: tf
  },
  nf = () => e.jsxs($, {
    children: [e.jsx("div", {
      className: Kt.text_layout,
      children: e.jsxs("span", {
        className: Kt.text,
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
      className: Kt.button_layout_placeholder
    }), e.jsx("div", {
      className: Kt.button_layout,
      children: e.jsxs("button", {
        className: Kt.button,
        onPointerUp: () => {
          pe("https://t.me/notpixel_channel")
        },
        children: [e.jsx("img", {
          alt: "tg_logo",
          src: jn
        }), "Telegram Channel"]
      })
    })]
  }),
  sf = "_text_layout_1h04i_1",
  af = "_text_1h04i_1",
  of = "_button_layout_1h04i_14",
  rf = "_button_layout_placeholder_1h04i_26",
  cf = "_button_1h04i_14",
  Zt = {
    text_layout: sf,
    text: af,
    button_layout: of,
    button_layout_placeholder: rf,
    button: cf
  },
  lf = () => e.jsxs($, {
    children: [e.jsx("div", {
      className: Zt.text_layout,
      children: e.jsxs("span", {
        className: Zt.text,
        children: [e.jsx("h1", {
          children: "Awards"
        }), e.jsx("p", {
          children: "There will be something here, but not now."
        })]
      })
    }), e.jsx("div", {
      className: Zt.button_layout_placeholder
    }), e.jsx("div", {
      className: Zt.button_layout,
      children: e.jsxs("button", {
        className: Zt.button,
        onPointerUp: () => {
          pe(Pa)
        },
        children: [e.jsx("img", {
          alt: "tg_logo",
          src: jn
        }), "Not Pixel 42"]
      })
    })]
  }),
  df = "_layout_1drph_1",
  uf = "_container_1drph_11",
  pf = "_bold_1drph_22",
  mf = "_info_container_1drph_26",
  Af = "_title_1drph_33",
  hf = "_description_1drph_38",
  gf = "_image_container_1drph_43",
  _f = "_image_1drph_43",
  ff = "_extra_info_container_1drph_53",
  xf = "_npx_tokens_1drph_77",
  yf = "_button_container_1drph_81",
  vf = "_button_1drph_81",
  me = {
    layout: df,
    container: uf,
    bold: pf,
    info_container: mf,
    title: Af,
    description: hf,
    image_container: gf,
    image: _f,
    extra_info_container: ff,
    npx_tokens: xf,
    button_container: yf,
    button: vf
  },
  wf = "/assets/intro-Brtd1phH.webp",
  bf = {
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
  jf = () => {
    const n = Y();
    return Ke.createPortal(e.jsx("div", {
      className: me.layout,
      children: e.jsxs(un.div, {
        className: me.container,
        ...bf,
        children: [e.jsxs("div", {
          className: me.info_container,
          children: [e.jsx("span", {
            className: `${me.title} ${me.bold}`,
            children: "New Pixel Order!"
          }), e.jsx("span", {
            className: me.description,
            children: "Not Pixel is a blank canvas 1000×1000px where Telegram users transform pixels."
          })]
        }), e.jsx("div", {
          className: me.image_container,
          children: e.jsx("img", {
            alt: "image",
            className: me.image,
            src: wf
          })
        }), e.jsxs("div", {
          className: me.extra_info_container,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: `${me.bold}`,
              children: "Probably all you need to know:"
            })
          }), e.jsx("div", {
            children: e.jsxs("ol", {
              children: [e.jsx("li", {
                children: "You can put some pixels on it, but you have to wait to continue."
              }), e.jsxs("li", {
                children: ["Get rewarded in", " ", e.jsx(An, {
                  size: 14,
                  style: {
                    transform: "translateY(1.5px)"
                  }
                }), e.jsx("span", {
                  className: `${me.npx_tokens} ${me.bold}`,
                  children: " Not PX "
                }), " ", "tokens for repainting and owning pixels."]
              }), e.jsx("li", {
                children: "Be creative. Enjoy."
              })]
            })
          })]
        }), e.jsx("div", {
          className: me.button_container,
          children: e.jsx("button", {
            className: me.button,
            onPointerUp: () => {
              n.push("/"), Qt.save("skipIntro", "true")
            },
            children: "Let’s Gooooooo!"
          })
        })]
      })
    }), document.body)
  },
  Pf = "_text_layout_q4wab_1",
  Cf = "_text_q4wab_1",
  Nf = "_button_layout_q4wab_15",
  Sf = "_button_layout_placeholder_q4wab_27",
  If = "_button_q4wab_15",
  $t = {
    text_layout: Pf,
    text: Cf,
    button_layout: Nf,
    button_layout_placeholder: Sf,
    button: If
  },
  Tf = () => e.jsxs($, {
    children: [e.jsx("div", {
      className: $t.text_layout,
      children: e.jsxs("span", {
        className: $t.text,
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
      className: $t.button_layout_placeholder
    }), e.jsx("div", {
      className: $t.button_layout,
      children: e.jsxs("button", {
        className: $t.button,
        onPointerUp: () => {
          wn("https://ton.org/en/open-league")
        },
        children: ["Details on ton.org ", e.jsx(B, {
          size: 16,
          children: ""
        })]
      })
    })]
  }),
  Ef = "_text_layout_q4wab_1",
  Bf = "_text_q4wab_1",
  Df = "_button_layout_q4wab_15",
  kf = "_button_layout_placeholder_q4wab_27",
  Rf = "_button_q4wab_15",
  no = {
    text_layout: Ef,
    text: Bf,
    button_layout: Df,
    button_layout_placeholder: kf,
    button: Rf
  },
  Uf = () => e.jsx($, {
    children: e.jsx("div", {
      className: no.text_layout,
      children: e.jsxs("span", {
        className: no.text,
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
  Of = "_close_container_1mu9y_1",
  Mf = "_title_container_1mu9y_12",
  Qf = "_title_1mu9y_12",
  Ff = "_frens_count_1mu9y_21",
  zf = "_content_1mu9y_25",
  Hf = "_image_container_1mu9y_32",
  qf = "_image_1mu9y_32",
  Lf = "_description_container_1mu9y_41",
  Vf = "_white_1mu9y_50",
  Gf = "_gray_1mu9y_54",
  Xf = "_purple_1mu9y_58",
  Jf = "_bold_1mu9y_64",
  Yf = "_center_1mu9y_68",
  Wf = "_info_layout_1mu9y_72",
  Kf = "_benefits_container_1mu9y_84",
  Zf = "_benefits_item_1mu9y_92",
  $f = "_divider_1mu9y_98",
  ex = "_buttons_container_1mu9y_105",
  tx = "_button_copy_1mu9y_112",
  nx = "_button_1mu9y_105",
  sx = "_share_container_1mu9y_137",
  ax = "_share_row_1mu9y_143",
  ox = "_crypto_image_1mu9y_150",
  ce = {
    close_container: Of,
    title_container: Mf,
    title: Qf,
    frens_count: Ff,
    content: zf,
    image_container: Hf,
    image: qf,
    description_container: Lf,
    white: Vf,
    gray: Gf,
    purple: Xf,
    bold: Jf,
    center: Yf,
    info_layout: Wf,
    benefits_container: Kf,
    benefits_item: Zf,
    divider: $f,
    buttons_container: ex,
    button_copy: tx,
    button: nx,
    share_container: sx,
    share_row: ax,
    crypto_image: ox
  },
  ix = "/assets/sitting_chars_animation_ny_snow-er9QiNbn.gif",
  rx = "_link_a4r15_1",
  cx = {
    link: rx
  },
  Gt = ({
    url: n,
    className: t = "",
    text: s = "Copy referral link"
  }) => {
    const [a, o] = p.useState(null), i = p.useRef(null);
    return e.jsxs("div", {
      className: `${cx.link} ${t}`,
      onPointerUp: async r => {
        var d, m;
        const c = await Ds(n);
        r.stopPropagation(), c ? (o("Copied!"), (m = (d = window.Telegram.WebApp) == null ? void 0 : d.HapticFeedback) == null || m.notificationOccurred("success")) : o("Can't copy :-("), clearTimeout(i.current), i.current = setTimeout(() => {
          o(null)
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
  lx = () => {
    const {
      t: n
    } = Bs("translation", {
      keyPrefix: "frens"
    }), t = l(c => c.user.user);
    l(c => c.main.settings);
    let s = `${gt}?startapp=f${(t==null?void 0:t.id)||""}`;
    t && t.squad && t.squad.id !== null && (s += `_s${t.squad.id}`);
    const a = (t == null ? void 0 : t.friends) || 0,
      o = l(Ia),
      [i, r] = p.useState([]);
    return p.useEffect(() => {
      const c = async () => {
        const d = await F.getRevShareInfo();
        d.status === 200 && d.data && r(d.data)
      };
      t && t.friends >= 1e4 && c()
    }, [t]), e.jsxs($, {
      children: [e.jsxs("div", {
        className: ce.content,
        children: [e.jsx("div", {
          className: ce.image_container,
          children: e.jsx("img", {
            alt: "image",
            className: ce.image,
            src: ix
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
              children: a
            })]
          })]
        }), e.jsxs("div", {
          className: ce.buttons_container,
          children: [e.jsx(Gt, {
            url: s,
            className: ce.button_copy
          }), e.jsx("button", {
            className: ce.button,
            onPointerUp: c => {
              c.stopPropagation(), pe(`https://t.me/share/url?url=${s}`)
            },
            children: "Share"
          })]
        })]
      }), i && i.length > 0 && e.jsx("div", {
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
            }), i.map(c => {
              const d = o.filter(A => A.currency_id === c.currencyId);
              if (d.length === 0) return null;
              const m = d[0];
              return e.jsxs("div", {
                className: ce.share_row,
                children: [e.jsx("img", {
                  alt: "currency",
                  src: m.image,
                  className: ce.crypto_image
                }), e.jsx("div", {
                  children: m.name
                }), e.jsx("div", {
                  children: Ie({
                    num: Math.floor(c.totalPurchases)
                  })
                }), e.jsx("div", {
                  children: Ie({
                    num: Math.floor(c.totalSpend)
                  })
                })]
              }, c.currencyId)
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
  dx = "_container_19cbp_1",
  ux = "_text_container_19cbp_9",
  px = "_text_block_19cbp_16",
  mx = "_gray_19cbp_24",
  Ax = "_purple_19cbp_28",
  hx = "_total_19cbp_35",
  gx = "_bold_19cbp_39",
  _x = "_indicator_19cbp_43",
  fx = "_button_container_19cbp_52",
  xx = "_button_19cbp_52",
  oe = {
    container: dx,
    text_container: ux,
    text_block: px,
    gray: mx,
    purple: Ax,
    total: hx,
    bold: gx,
    indicator: _x,
    button_container: fx,
    button: xx
  },
  yx = "_layout_1ulm2_1",
  vx = "_container_1ulm2_11",
  wx = "_stars_1ulm2_17",
  bx = "_animStar_1ulm2_1",
  Rn = {
    layout: yx,
    container: vx,
    stars: wx,
    animStar: bx
  },
  jx = () => {
    const [n, t] = p.useState(window.innerWidth);

    function s(a) {
      t(a.target.innerWidth)
    }
    return p.useEffect(() => (window.addEventListener("resize", s), () => {
      window.removeEventListener("resize", s)
    }), []), n
  },
  Px = [{
    count: 50,
    speed: 50
  }, {
    count: 50,
    speed: 30
  }, {
    count: 50,
    speed: 90
  }],
  Cx = n => {
    const t = window.innerWidth,
      s = window.innerHeight * 2;
    return Array.from(Array(n)).reduce(a => {
      const o = L(0, t),
        i = L(0, s);
      return a + `${o}px ${i}px #fff, `
    }, "").replace(/,(\s+)?$/, "")
  },
  Nx = p.memo(() => (jx(), e.jsx("div", {
    className: Rn.layout,
    children: e.jsx("div", {
      className: Rn.container,
      children: Px.map((n, t) => {
        const s = Cx(n.count);
        return e.jsx("div", {
          className: Rn.stars,
          style: {
            animation: `${Rn.animStar} ${n.speed}s linear infinite`,
            boxShadow: s
          }
        }, t)
      })
    })
  })), () => !1),
  Sx = () => {
    const n = Y(),
      [t, s] = p.useState(0),
      [a, o] = p.useState(0),
      [i, r] = p.useState(0),
      [c, d] = p.useState(0),
      [m, A] = p.useState(0),
      [h, f] = p.useState(0),
      [C, y] = p.useState([]);
    return p.useEffect(() => {
      try {
        F.getStats().then(_ => {
          const b = _.data;
          s(b.totalPlayers), o(b.totalRepaints)
        }), F.getMoreStats().then(_ => {
          const b = _.data;
          r(b.premium_users), d(b.active_users), A(b.daily_users), f(b.daily_repaints), y(Object.keys(b.top_countries).map(T => ({
            key: T,
            value: b.top_countries[T]
          })))
        })
      } catch {}
    }, []), e.jsxs($, {
      children: [e.jsx(Nx, {}), e.jsx("div", {
        style: {
          height: 50
        }
      }), e.jsxs("div", {
        className: oe.container,
        children: [e.jsxs("div", {
          className: oe.text_container,
          children: [e.jsxs("div", {
            className: oe.text_block,
            children: [e.jsx("span", {
              className: oe.gray,
              children: "Total painters"
            }), e.jsx("span", {
              className: `${oe.bold}`,
              style: {
                fontSize: 22
              },
              children: e.jsx(Pe, {
                num: t
              })
            })]
          }), e.jsxs("div", {
            className: oe.text_block,
            children: [e.jsx("span", {
              className: oe.gray,
              children: "Total repaints"
            }), e.jsx("span", {
              className: `${oe.bold}`,
              children: e.jsx(Pe, {
                num: Math.floor(a)
              })
            })]
          }), e.jsxs("div", {
            className: oe.text_block,
            children: [e.jsx("span", {
              className: oe.gray,
              children: "Online users"
            }), e.jsx("span", {
              className: `${oe.bold}`,
              children: e.jsx(Pe, {
                num: Math.floor(c)
              })
            })]
          }), e.jsxs("div", {
            className: oe.text_block,
            children: [e.jsx("div", {
              children: e.jsx("span", {
                className: oe.purple,
                children: "Telegram Premium "
              })
            }), e.jsx("span", {
              className: `${oe.bold}`,
              children: e.jsx(Pe, {
                num: Math.floor(i)
              })
            })]
          }), e.jsxs("div", {
            className: oe.text_block,
            children: [e.jsx("span", {
              className: oe.gray,
              children: "Daily repaints"
            }), e.jsx("span", {
              className: `${oe.bold}`,
              children: e.jsx(Pe, {
                num: Math.floor(h)
              })
            })]
          })]
        }), e.jsx("div", {
          className: oe.button_container,
          children: e.jsx("button", {
            className: oe.button,
            onPointerUp: () => {
              n.push("/invite-frens")
            },
            children: "Invite fren"
          })
        })]
      })]
    })
  },
  Ix = "_main_info_container_1gqs9_2",
  Tx = "_image_container_1gqs9_11",
  Ex = "_image_1gqs9_11",
  Bx = "_title_1gqs9_21",
  Dx = "_variants_container_1gqs9_25",
  kx = "_variant_item_1gqs9_33",
  Rx = "_variant_left_container_1gqs9_39",
  Ux = "_variant_middle_container_1gqs9_45",
  Ox = "_dot_1gqs9_53",
  Mx = "_variant_right_container_1gqs9_59",
  Qx = "_button_container_1gqs9_66",
  Fx = "_button_1gqs9_66",
  zx = "_bold_1gqs9_96",
  Hx = "_gray_1gqs9_100",
  qx = "_blue_1gqs9_104",
  Lx = "_text_1gqs9_109",
  M = {
    main_info_container: Ix,
    image_container: Tx,
    image: Ex,
    title: Bx,
    variants_container: Dx,
    variant_item: kx,
    variant_left_container: Rx,
    variant_middle_container: Ux,
    dot: Ox,
    variant_right_container: Mx,
    button_container: Qx,
    button: Fx,
    bold: zx,
    gray: Hx,
    blue: qx,
    text: Lx
  },
  Oi = "/assets/button_dog_200x200-DtCBiZdv.gif",
  Vx = n => {
    const t = n / 1e3,
      s = Math.floor(t / 60),
      a = t % 60;
    return a === 0 ? `${s} min` : `${s} min ${a} sec`
  },
  Gx = n => {
    if (n < 0 || !n) return "";
    const t = Math.floor(n / 60),
      s = n % 60;
    return s < 10 ? `${t}:0${s}` : `${t}:${s}`
  },
  Xx = () => {
    const n = g(),
      t = Y(),
      s = l(m => m.mining.maxCharges),
      a = l(m => m.mining.charges),
      o = l(m => m.mining.reChargeSpeed),
      i = Vx(o),
      r = l(m => m.mining.reChargeTs),
      [c, d] = p.useState("");
    return p.useEffect(() => {
      if (a !== 0) return () => {};
      const m = setInterval(() => {
        const h = Date.now() - r,
          f = o - h,
          C = Math.round(f / 1e3);
        d(Gx(C))
      }, 500);
      return () => {
        clearInterval(m)
      }
    }, [r, o, a]), e.jsxs($, {
      children: [e.jsx("div", {
        style: {
          height: 50
        }
      }), e.jsx("div", {
        className: M.image_container,
        children: e.jsx("img", {
          alt: "image",
          className: M.image,
          src: Oi
        })
      }), e.jsxs("div", {
        className: M.main_info_container,
        children: [e.jsx("div", {
          children: e.jsx("span", {
            className: `${M.title} ${M.bold}`,
            children: "Energy is over"
          })
        }), e.jsxs("div", {
          children: [e.jsx("span", {
            className: `${M.gray}`,
            children: "Energy limit: "
          }), e.jsxs("span", {
            children: [a, "/", s]
          })]
        }), e.jsxs("div", {
          children: [e.jsx("span", {
            className: `${M.gray}`,
            children: "Recovery speed:"
          }), e.jsxs("span", {
            children: [" ", i]
          })]
        })]
      }), e.jsxs("div", {
        className: M.variants_container,
        children: [e.jsxs("div", {
          className: M.variant_item,
          children: [e.jsx("div", {
            className: M.variant_left_container,
            children: e.jsx(B, {
              size: 28,
              children: ""
            })
          }), e.jsxs("div", {
            className: M.variant_middle_container,
            children: [e.jsxs("div", {
              children: [e.jsx("span", {
                className: M.bold,
                children: "Just wait"
              }), a === 0 && c !== "" && e.jsx("span", {
                className: M.dot,
                children: "•"
              }), a === 0 && c !== "" && e.jsx("span", {
                className: M.gray,
                children: c
              })]
            }), e.jsx("div", {
              children: e.jsx("span", {
                className: M.gray,
                children: "Serene i fold my hands and wait."
              })
            })]
          }), e.jsx("div", {
            className: M.variant_right_container
          })]
        }), e.jsxs("div", {
          className: M.variant_item,
          onPointerUp: () => {
            n(Ud("boosts")), t.push("/claiming")
          },
          children: [e.jsx("div", {
            className: M.variant_left_container,
            children: e.jsx(B, {
              size: 28,
              children: ""
            })
          }), e.jsxs("div", {
            className: M.variant_middle_container,
            children: [e.jsx("div", {
              children: e.jsx("span", {
                className: `${M.bold} ${M.blue}`,
                children: "Use boosters"
              })
            }), e.jsx("div", {
              children: e.jsx("span", {
                className: M.gray,
                children: "Upgrade Energy limit and Speed."
              })
            })]
          }), e.jsx("div", {
            className: M.variant_right_container,
            children: e.jsx(B, {
              size: 20,
              children: ""
            })
          })]
        }), e.jsxs("div", {
          className: M.variant_item,
          onPointerUp: () => {
            n(qe(1)), n(Le()), t.push("/stars")
          },
          children: [e.jsx("div", {
            className: M.variant_left_container,
            children: e.jsx(B, {
              size: 28,
              children: ""
            })
          }), e.jsxs("div", {
            className: M.variant_middle_container,
            children: [e.jsx("div", {
              children: e.jsx("span", {
                className: `${M.blue} ${M.bold}`,
                children: "Use Stars Shop"
              })
            }), e.jsx("div", {
              children: e.jsx("span", {
                className: M.gray,
                children: "Full energy right now for Stars."
              })
            })]
          }), e.jsx("div", {
            className: M.variant_right_container,
            children: e.jsx(B, {
              size: 20,
              children: ""
            })
          })]
        })]
      }), e.jsx("div", {
        className: M.button_container,
        children: e.jsx("button", {
          className: M.button,
          onPointerUp: () => {
            t.push("/")
          },
          children: "Okay"
        })
      })]
    })
  },
  Jx = "_close_container_5xtkt_1",
  Yx = "_title_container_5xtkt_12",
  Wx = "_title_5xtkt_12",
  Kx = "_small_title_container_5xtkt_23",
  Zx = "_small_title_5xtkt_23",
  $x = "_content_5xtkt_32",
  ey = "_image_container_5xtkt_40",
  ty = "_image_placeholder_5xtkt_46",
  ny = "_image_5xtkt_40",
  sy = "_how_container_5xtkt_58",
  ay = "_description_container_5xtkt_63",
  oy = "_white_5xtkt_72",
  iy = "_gray_5xtkt_76",
  ry = "_bold_5xtkt_80",
  cy = "_center_5xtkt_84",
  ly = "_claim_button_container_5xtkt_88",
  dy = "_claim_button_5xtkt_88",
  uy = "_no_button_5xtkt_107",
  py = "_info_layout_5xtkt_119",
  my = "_rewards_layout_5xtkt_131",
  Ay = "_rewards_grid_container_5xtkt_137",
  hy = "_reward_item_5xtkt_143",
  gy = "_reward_item_completed_5xtkt_153",
  _y = "_reward_item_content_container_5xtkt_166",
  fy = "_reward_item_active_5xtkt_179",
  xy = "_reward_item_image_container_5xtkt_183",
  yy = "_reward_item_amount_5xtkt_187",
  vy = "_reward_item_amount_active_5xtkt_201",
  wy = "_reward_item_amount_premium_5xtkt_205",
  by = "_reward_item_title_5xtkt_210",
  jy = "_reward_item_title_premium_5xtkt_216",
  Py = "_reward_item_image_5xtkt_183",
  k = {
    close_container: Jx,
    title_container: Yx,
    title: Wx,
    small_title_container: Kx,
    small_title: Zx,
    content: $x,
    image_container: ey,
    image_placeholder: ty,
    image: ny,
    how_container: sy,
    description_container: ay,
    white: oy,
    gray: iy,
    bold: ry,
    center: cy,
    claim_button_container: ly,
    claim_button: dy,
    no_button: uy,
    info_layout: py,
    rewards_layout: my,
    rewards_grid_container: Ay,
    reward_item: hy,
    reward_item_completed: gy,
    reward_item_content_container: _y,
    reward_item_active: fy,
    reward_item_image_container: xy,
    reward_item_amount: yy,
    reward_item_amount_active: vy,
    reward_item_amount_premium: wy,
    reward_item_title: by,
    reward_item_title_premium: jy,
    reward_item_image: Py
  },
  Cy = ({
    secondsLeft: n
  }) => {
    const t = g(),
      s = "dailyTransactionInfo",
      a = l(wm),
      o = l(y => y.daily.getDailyListFetchStatus),
      i = l(y => y.daily.getFirstDailyFetchStatus),
      r = o === u.fulfilled,
      c = xn(),
      [d, m] = yn(),
      [A, h] = p.useState(!1),
      f = l(Ze);
    p.useEffect(() => {
      if (!a || !r) return;
      const y = localStorage.getItem(s);
      if (y) {
        const _ = JSON.parse(y);
        _.dailyId === a.id && Date.now() - _.ts < 10 * 60 * 1e3 ? h(!0) : h(!1), Date.now() - _.ts >= 10 * 60 * 1e3 && localStorage.removeItem(s)
      }
    }, [a]);
    const C = async () => {
      try {
        const y = a.prices[0],
          _ = await F.startShopTransaction({
            buyerWallet: c,
            currencyId: 2,
            daily: !0,
            quantity: y.quantity,
            goodId: a.id
          }),
          b = ge.beginCell().storeUint(0, 32).storeStringTail(_.data.txMemCode).endCell(),
          T = {
            validUntil: Math.floor(Date.now() / 1e3) + 600,
            messages: [{
              address: pa,
              amount: String(ge.toNano(_.data.strAmount)),
              payload: b.toBoc().toString("base64")
            }]
          },
          ve = await d.sendTransaction(T);
        localStorage.setItem(s, JSON.stringify({
          ts: Date.now(),
          dailyId: a.id
        })), t(q({
          id: performance.now(),
          text: "Success! Wait 3-5 min and reload the app.",
          icon: ""
        })), h(!0)
      } catch (y) {
        console.warn(y), t(q({
          id: performance.now(),
          text: "Error! Wait 5 min before starting a new transaction."
        }))
      }
    };
    if (r) {
      const y = a.prices[0];
      let _ = `Claim for ${y.price} TON`;
      return n && (_ = `Claim in ${Jr(n)}`), A && (_ = "Pending transaction..."), e.jsxs("div", {
        className: k.content,
        children: [e.jsx("div", {
          className: k.description_container,
          children: e.jsx("div", {
            children: e.jsxs("span", {
              children: ["Day ", a.id]
            })
          })
        }), e.jsx("div", {
          className: k.image_container,
          children: e.jsx("img", {
            alt: "image",
            className: k.image,
            src: a.image_url
          })
        }), e.jsx("div", {
          className: k.title_container,
          children: e.jsx("div", {
            className: k.title,
            children: `${a.name} x${y.quantity}`
          })
        }), e.jsx("div", {
          className: k.how_container,
          children: e.jsx(Lt, {
            onPointerUp: b => {
              b.stopPropagation(), t(Ci(!0))
            },
            children: "How it works"
          })
        }), e.jsxs("div", {
          className: k.claim_button_container,
          children: [f !== de && e.jsx("button", {
            className: k.no_button,
            children: "Desktop version only"
          }), c !== "" && f === de && e.jsx("button", {
            disabled: i === u.pending || A,
            className: k.claim_button,
            onPointerUp: async () => {
              n || A || C()
            },
            children: _
          }), c === "" && f === de && e.jsx("button", {
            className: k.claim_button,
            onPointerUp: async () => {
              await d.openModal()
            },
            children: "Connect wallet"
          })]
        })]
      })
    }
    return e.jsxs("div", {
      className: k.content,
      children: [e.jsx("div", {
        className: k.description_container,
        children: e.jsx("div", {
          children: e.jsx(Be, {
            show: !0,
            children: "Loading..."
          })
        })
      }), e.jsx("div", {
        className: k.image_container,
        children: e.jsx("div", {
          className: k.image_placeholder
        })
      }), e.jsx("div", {
        className: k.title_container,
        children: e.jsx("div", {
          className: k.title,
          children: e.jsx("div", {
            children: e.jsx(Be, {
              show: !0,
              children: "Loading..."
            })
          })
        })
      }), e.jsx("div", {
        className: k.claim_button_container,
        children: e.jsx("button", {
          className: k.claim_button,
          disabled: !0,
          children: "Loading..."
        })
      })]
    })
  },
  Ny = "data:image/png;base64,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",
  Sy = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAAArCAYAAAD41p9mAAAIO0lEQVRogc2aC47jNhBEW6JIS7M5Qi6VO+XEQTZjW7IUGGAvnmubsj2/XQKCSX0o8rFYbGqm+/Ovv+03TGnnYLrsHL9VGn6TxhQcGZDNbuFGAJNcc/izmZ1x/NL0K0FPFe5Yf1MAUhWcpbzKvRcM0rXOb/XauYJ/rfkvV/xXgy4VsMNlcki9KLp/sG6H7opeAbQA/BX0EdC/JH0V6Gsn/6iAqVIF2zcsw+TcniJpIStsJIJ+/CqVfzboPcC5oWDD+f6OsqliL9NCLvU9OYCeKuzxK4B/FuhUAX8LAI6Bch1sBlB97l6ikq2CnQGY0OcAeK7Az58B/DNAT1CxpwhwEbhqGT1+W6AJQwfIwV4AfcbAKnBfkAvU/WEe/pGgI5tIUBFj4yEI4xwUwXcBZFqIWsdSf+f6jlUsxK1jgZpdybO0x/OvHwHno0BHKs4CvQSA6cO5gvUQjgOwPhB9EPqh/m5QreG9DvxUz3+r5WO9NsoMebe63ws6VciTQB5RdoiHAHAW+IZrJveuuO5plfwFSvZrBSqeZfFNAOwzydXtVnL8CHW/B7QveEWgjlBlqYAZYWQA7gNlDyjTp/eSQ10r0BXge6h4EOAGwFT3EYA9KvG4/02w3wq6yM7OaqNeoMyxQvYG9vX6gIHw9xP8gPqs2gnLmtyfN9S54lAlO/BzPbdAHKd6r1ve9wD2tfzvs8DeAvoe5FQBj6LiEih7wOH1dLjHz7v6uqA9G9SreY8mlnqcZE3wXaKh7cdA3Z7/BzP5KdjPgo4gc9Fz4Bk2cL02YIo64IJOd7IYdqLolnWsUt4QM/NIGNCzKHyoYB2u98vL1/v+q3UR/FOwnwHtkFPgyS3Ik5Qzog8CLjVPBatPU80JqvW0IpxbAX0D3ASfPsLD/R0enSjsUWzkO3g85NmPgvbownbsgpAPsApX8gSP6wS6QxxQTqJmtQ1v+wZlU9FrfWbDIJ5Rz0stnySkdMUq7G8B7Km+627o9yhoQk6Sb0EeYRUjVFxgHR28OAFuEkU7HIfucTVj55aiZ9TpM+G1Xvf6XyXEVNj/oR++KK4V8ITBfRfoCYA8ghgFbMYxQcUHgHXrOABoEeBJfvvAnx262oZJWLeIVcwyiL4J8bWC8bPCXmt5xOCNADzd8+t7oAumu0+vjJHW6KII5BGKdU/rBDwXJX9HD/h79rFBvYb8ii33gncsmOZdPbys32YMPn5AecRg0rt3/XoPNH2Z22ZvkIZrI8AeoPprZyYot4hXc3BMLERBe+oCRXuZX+Xcumb481CB6XcU5l3ZF9iRyWL5HTP9jN/QQvZAO+QklpEwCD7tXuRrHCFfFxFf4EZA5Q5RvZoK5tc7BWyi4g33eERxgSBOmOoneKxvrwdRttc/wyYZibjCfVY0LaQFml+xGC87gAOuZ4kwVMlcBGkrtA1uvemjCVM8SoTOTQoXxQVe2mP353Zwhno9FcyKCfkR9WXMnhFb9hJFIS3QVLNGGbSMATbQY+EzsYuD5LndzgDKjz20DmtEHlbhbrg+wJu5ffcPSwcshoQ9ob6ChTWL/04YFF8HinzXfgh0aaiZ2+vIlzPUS7Ae2ilw/bA0COBI0erVhM3vGz5oC657HQsAn2p+hS9vUPmCOHtBJJMDVWcoP6lXt0CbqJnnMn75UWjEOe70GAY68AJ7UZ/upWyBfXSIg90+NgnvCNzV7OvIjAjnVFXKDc6MGerABvT3gIUxAlw0AlHQhMvdUg9YFixmBdN8hEJHsZQkkBl9DHiuC5S859OubC6qCxRdYBfcUVLNL3VjMkBYJhaywP8P2MgcA9A3EYiCLkGeu8Fe1KzTPks+YUCSgC3i1QlAW9bRSptsv00GjB+fCPuMv5B7n4+wkA1tzBKBZID1xZDWdqPqFmgCp5qTqLkXNdMyBlhDj4YlgZwFShLoFvyaRBxcEOnNXucs9Ths+ugrVGvYAQ61769or3q1/jXnAnH+BFrhmuz/CWBPzYRfxBJ6uY8D0ot1GM6rlZh4M+PoTaa5pwsAr/Dscy0PeHZFn1TV7t8X2AavhYsiQStQCxZBg0IJXNXcyTMKlqFdh4YSavRRKdqCb1gYVwCnOimsBQANMKjUHoqf0b4TZvMqfpxgKyZ174JOgWp7GQiqWT8MZTQ4wUZ4XwS55c9R1MEPTBvuX6FSv55wn0HZ3p8V3pzlmvfjhP7OuKb8lOnNn5BuPEWMnYshQ7oeKuaRRNkcAIVPP452hATdUrQ17IWWcEF+Q589f8F7B/k/D4pnDkTF51XlNzAJmWFdklHLMqVV4ZGHM8qwALJ6NMFrh6JD79cZ2KE9huc7aUcSIVFQnGkqTOdl8o4bkUagTc7pyJlA1t+ucZ8FUDTa6KWxSTqp0KO8yTOMrZmP2q1tZH+4QSNIFWV0PtywmDS6lwr84UGmqnpsJ/VRORpN9AHkPrjPIfIrnf+1ZcPzPMcveUm83NvEKEG9WVn0AK8+rRx/pNbIRGV2nEmnFmfJXlycAtAmcDXyiOLq6B6tt2u0yQS4tsNTFDTwOuHroph4Q2QdmhS6AtdRj0IzVbE18pGSWyl6JoKui6W20xrXokHVPkesQjh7EUdUmapWO6b3tqKHe1BaHYlSJ/V50kHVdrTgW/DLPlGxe2vczWLoW9GfVsvgBa2kFhMB1wFqhXCPKFmT3q/gdS2x4Lw+y3LU/4cZ3VMMK1JruPd8C3jUAc1H5UfS3kC16tt2+tGJOOzJWfYjPewxO/foqvzMe7YA9lsA8/moHNWpHty675G0Z683hUfA7iV+vNlTRyv5Nf2z1K9Kz6pW/wfw9pxZ+h8XrSm3HJGz/wAAAABJRU5ErkJggg==",
  Iy = "data:image/png;base64,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",
  Ty = "data:image/png;base64,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",
  Ey = "_container_11l5m_1",
  By = "_divider_11l5m_23",
  Dy = "_row_11l5m_28",
  ky = "_row_title_11l5m_40",
  Ry = "_row_title_main_11l5m_44",
  Uy = "_row_hint_11l5m_49",
  Oy = "_row_value_11l5m_55",
  My = "_row_value_main_11l5m_59",
  Qy = "_mining_percent_11l5m_64",
  Fy = "_active_row_11l5m_74",
  zy = "_button_11l5m_85",
  so = {
    container: Ey,
    divider: By,
    row: Dy,
    row_title: ky,
    row_title_main: Ry,
    row_hint: Uy,
    row_value: Oy,
    row_value_main: My,
    mining_percent: Qy,
    active_row: Fy,
    button: zy
  },
  Hy = () => {
    const n = g(),
      t = l(a => a.daily.showHowDailyWorksPopup),
      s = a => {
        n(Ci(a))
      };
    return e.jsx(Ht, {
      show: t,
      setShow: s,
      children: e.jsxs("div", {
        className: so.container,
        children: [e.jsx("h2", {
          children: "How does Daily work? "
        }), e.jsx("p", {
          children: "Complete the daily check-ins and earn valuable rewards. The more days completed, the more rewards you get."
        }), e.jsx("p", {
          children: "Usage is only possible in the desktop version."
        }), e.jsx("button", {
          className: so.button,
          onPointerUp: () => s(!1),
          children: "That's so wise!"
        })]
      })
    })
  },
  qy = (n, t) => {
    const s = n.getTime() - n.getTime() % 864e5,
      a = t.getTime() - t.getTime() % (86400 * 1e3);
    return s === a
  },
  Ly = () => {
    const n = g(),
      t = l(Ea.selectAll),
      s = l(r => r.daily.selected),
      [a, o] = p.useState(null),
      i = l(r => r.daily.getDailyListFetchStatus);
    return p.useEffect(() => {
      (i === u.idle || i === u.rejected) && n(Ni.getList())
    }, [i]), p.useEffect(() => {
      let r = 0;
      for (let c = 0; c < t.length; c++) {
        const d = t[c];
        if (d.timestamp && new Date(d.timestamp) > r && (r = new Date(d.timestamp)), d.daily) {
          n(bm(d.id));
          break
        }
      }
      if (r && qy(new Date, new Date(r))) {
        const c = new Date(r),
          m = new Date(Date.UTC(c.getUTCFullYear(), c.getUTCMonth(), c.getUTCDate() + 1, 0, 0, 0, 0)) - new Date,
          A = Math.floor(m / 1e3);
        o(A)
      }
    }, [t]), e.jsxs($, {
      children: [e.jsx("div", {
        className: k.title_container,
        children: e.jsx("div", {
          className: k.title,
          children: "Daily streak awards"
        })
      }), e.jsx(Cy, {
        secondsLeft: a
      }), e.jsxs("div", {
        className: k.info_layout,
        children: [e.jsx("div", {
          className: k.small_title_container,
          children: e.jsx("div", {
            className: k.small_title,
            children: "Stay on track for bigger rewards!"
          })
        }), e.jsx("div", {
          className: k.rewards_layout,
          children: e.jsx("div", {
            className: k.rewards_grid_container,
            children: t.map((r, c) => {
              const d = (c + 1) % 4 === 0,
                m = r.prices[0],
                A = [k.reward_item],
                h = [k.reward_item_amount],
                f = [k.reward_item_title];
              r.id === s && (A.push(k.reward_item_active), h.push(k.reward_item_amount_active)), d && f.push(k.reward_item_title_premium), d && !r.active && h.push(k.reward_item_amount_premium);
              let C = Ny;
              return c >= 8 && c <= 15 && (C = Sy), c >= 16 && c <= 23 && (C = Iy), c >= 24 && c <= 31 && (C = Ty), e.jsxs("div", {
                className: A.join(" "),
                onPointerUp: () => {
                  n(q({
                    id: performance.now(),
                    text: `${m.quantity} ${r.name} for ${m.price} TON`,
                    icon: ""
                  }))
                },
                children: [e.jsxs("div", {
                  className: k.reward_item_content_container,
                  children: [e.jsxs("div", {
                    className: f.join(" "),
                    children: ["Day ", c + 1]
                  }), e.jsx("img", {
                    src: C,
                    style: {
                      position: "absolute",
                      bottom: -12
                    }
                  }), e.jsx("div", {
                    className: k.reward_item_image_container,
                    children: e.jsx("img", {
                      alt: "item",
                      className: k.reward_item_image,
                      src: r.image_url
                    })
                  }), e.jsx("div", {
                    className: h.join(" "),
                    children: m.quantity
                  })]
                }), !r.daily && e.jsx("div", {
                  className: k.reward_item_completed,
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
      }), e.jsx(Hy, {})]
    })
  },
  Vy = "_general_info_container_fv8d9_1",
  Gy = "_img_container_fv8d9_7",
  Xy = "_image_fv8d9_13",
  Jy = "_title_fv8d9_19",
  Yy = "_description_container_fv8d9_25",
  Wy = "_description_fv8d9_25",
  Nt = {
    general_info_container: Vy,
    img_container: Gy,
    image: Xy,
    title: Jy,
    description_container: Yy,
    description: Wy
  },
  Ky = "_info_layout_1p9dg_1",
  Zy = {
    info_layout: Ky
  },
  $y = "_no_template_container_uihlo_1",
  ev = "_no_template_button_uihlo_10",
  tv = "_template_container_uihlo_28",
  nv = "_template_info_container_uihlo_35",
  sv = "_template_info_uihlo_35",
  av = "_buttons_container_uihlo_44",
  ov = "_button_copy_uihlo_53",
  iv = "_button_uihlo_44",
  rv = "_create_new_template_uihlo_72",
  Me = {
    no_template_container: $y,
    no_template_button: ev,
    template_container: tv,
    template_info_container: nv,
    template_info: sv,
    buttons_container: av,
    button_copy: ov,
    button: iv,
    create_new_template: rv
  },
  cv = "_instruction_container_14ts7_1",
  lv = "_img_container_14ts7_9",
  dv = "_image_14ts7_15",
  uv = "_instruction_text_14ts7_21",
  pv = "_preview_container_14ts7_26",
  mv = "_preview_image_container_14ts7_32",
  Av = "_preview_image_14ts7_32",
  hv = "_preview_image_loader_14ts7_45",
  gv = "_template_size_14ts7_60",
  _v = "_template_title_14ts7_68",
  fv = "_template_size_container_14ts7_73",
  xv = "_template_size_item_14ts7_79",
  yv = "_template_size_item_active_14ts7_87",
  vv = "_template_coords_14ts7_92",
  wv = "_template_coordinates_title_14ts7_102",
  bv = "_template_coords_container_14ts7_107",
  jv = "_coords_item_14ts7_114",
  Pv = "_coords_input_14ts7_120",
  Cv = "_file_button_container_14ts7_129",
  Nv = "_file_button_14ts7_129",
  J = {
    instruction_container: cv,
    img_container: lv,
    image: dv,
    instruction_text: uv,
    preview_container: pv,
    preview_image_container: mv,
    preview_image: Av,
    preview_image_loader: hv,
    template_size: gv,
    template_title: _v,
    template_size_container: fv,
    template_size_item: xv,
    template_size_item_active: yv,
    template_coords: vv,
    template_coordinates_title: wv,
    template_coords_container: bv,
    coords_item: jv,
    coords_input: Pv,
    file_button_container: Cv,
    file_button: Nv
  },
  Ss = {
    16: 512,
    32: 2048,
    64: 8192,
    128: 2e4
  },
  Sv = ({
    templateSize: n,
    setTemplateSize: t
  }) => {
    const s = g(),
      a = l(rt),
      o = a.friends || 64,
      [i] = p.useState([16, 32, 64, 128]);
    return e.jsxs("div", {
      className: J.template_size,
      children: [e.jsx("div", {
        className: J.template_title,
        children: "Select a template size"
      }), e.jsx("div", {
        className: J.template_size_container,
        children: i.map(r => {
          if (r === 128 && !a.isContractor) return null;
          const c = [J.template_size_item];
          return n === r && c.push(J.template_size_item_active), e.jsx("div", {
            className: c.join(" "),
            onPointerUp: () => {
              o >= Ss[r] || a.isContractor ? t(r) : s(q({
                id: performance.now(),
                text: `To unlock this size, invite ${Ss[r]-o} more frens.`
              }))
            },
            children: `${r} X ${r}`
          }, r)
        })
      }), " "]
    })
  },
  Iv = () => {
    const n = Y(),
      t = l(o => o.template.myTemplate),
      s = l(o => o.user.user),
      a = s && s.friends >= Ss[16] || s.isContractor;
    return t !== null ? null : e.jsxs("div", {
      className: Me.no_template_container,
      children: [a && e.jsx("span", {
        className: "gray",
        children: "Create a template and share with your friends."
      }), !a && e.jsxs("span", {
        className: "gray",
        children: ["To unlock template creation, ", e.jsx("br", {}), " invite", " ", s && s.friends || 0, "/", Ss[16], " friends"]
      }), a && e.jsx("button", {
        className: Me.no_template_button,
        onPointerUp: () => {
          n.push("/template/create")
        },
        children: "Pixel Templates"
      }), !a && e.jsx("button", {
        className: Me.no_template_button,
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
  Tv = "_template_item_container_srp11_1",
  Ev = "_template_item_inner_srp11_9",
  Bv = "_template_image_srp11_17",
  Dv = "_template_image_info_layout_srp11_24",
  kv = "_template_image_info_container_srp11_34",
  en = {
    template_item_container: Tv,
    template_item_inner: Ev,
    template_image: Bv,
    template_image_info_layout: Dv,
    template_image_info_container: kv
  },
  Mi = ({
    item: n,
    style: t = {}
  }) => {
    const s = g();
    return e.jsx("div", {
      className: en.template_item_container,
      style: {
        ...t
      },
      onPointerUp: async () => {
        n.templateId && n.templateId !== 0 && s(xa({
          show: !0,
          id: Number(n.templateId)
        }))
      },
      children: e.jsxs("div", {
        className: en.template_item_inner,
        children: [e.jsx("img", {
          alt: "image",
          className: en.template_image,
          src: n.url
        }), e.jsx("div", {
          className: en.template_image_info_layout,
          children: e.jsxs("div", {
            className: en.template_image_info_container,
            children: [e.jsx(B, {
              children: ""
            }), e.jsx("span", {
              children: Rt(Math.max(0, n.subscribers))
            })]
          })
        })]
      })
    })
  },
  Rv = () => {
    const n = Y();
    return e.jsx("div", {
      className: Me.create_new_template,
      onPointerUp: () => {
        n.push("/template/create")
      },
      children: "Create a new template"
    })
  },
  Uv = () => {
    const n = l(a => a.user.user);
    let t = `${gt}?startapp=f${(n==null?void 0:n.id)||""}_t`;
    n.squad && n.squad.id !== null && (t += `_s${n.squad.id}`);
    const s = l(a => a.template.myTemplate);
    return s === null ? null : e.jsxs("div", {
      className: Me.template_container,
      children: [e.jsx(Mi, {
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
        className: Me.template_info_container,
        children: e.jsxs("span", {
          className: Me.template_info,
          children: ["Share this template with your frens, ", e.jsx("br", {}), " get reward for frens repaints."]
        })
      }), e.jsxs("div", {
        className: Me.buttons_container,
        children: [e.jsx(Gt, {
          url: t,
          className: Me.button_copy,
          text: "Copy template link"
        }), e.jsx("button", {
          className: Me.button,
          onPointerUp: a => {
            a.stopPropagation(), window.Telegram.WebApp.openTelegramLink(`https://t.me/share/url?url=${t}`)
          },
          children: "Share"
        })]
      }), e.jsx(Rv, {})]
    })
  },
  Ov = () => e.jsxs("div", {
    children: [e.jsx(Iv, {}), e.jsx(Uv, {})]
  }),
  Mv = "_layout_94gj5_1",
  Qv = "_container_94gj5_5",
  Fv = "_button_container_94gj5_11",
  zv = "_button_94gj5_11",
  Is = {
    layout: Mv,
    container: Qv,
    button_container: Fv,
    button: zv
  },
  Hv = () => {
    const n = g(),
      t = p.useRef(null),
      s = p.useRef(0),
      a = l(m => m.template.listStatus),
      o = l(m => m.template.listOffset),
      i = l(m => m.template.listLimit),
      r = l(m => m.template.list),
      [c, d] = p.useState(!1);
    return p.useEffect(() => {
      let m = null;
      if (t.current && a === u.fulfilled && !c) {
        const A = {
            rootMargin: "0px",
            threshold: 1
          },
          h = (f, C) => {
            f.forEach(y => {
              y.intersectionRatio >= 1 && (n(it.getList({
                offset: o,
                limit: i
              })), C.unobserve(t.current))
            })
          };
        m = new IntersectionObserver(h, A), m.observe(t.current)
      }
      return () => {
        m && t.current && m.unobserve(t.current)
      }
    }, [a, o, i, c]), p.useEffect(() => {
      s.current === r.length && r.length !== 0 && d(!0), s.current = r.length
    }, [r]), c ? null : e.jsx("div", {
      className: Is.button_container,
      children: e.jsx("button", {
        ref: t,
        disabled: a === u.pending,
        className: Is.button,
        onPointerUp: () => {
          n(it.getList({
            offset: o,
            limit: i
          }))
        },
        children: "Load more"
      })
    })
  },
  qv = () => {
    const n = g(),
      t = l(i => i.template.listOffset),
      s = l(i => i.template.listLimit),
      a = l(i => i.template.list),
      o = l(i => i.template.referredTemplate);
    return p.useEffect(() => (n(it.getList({
      offset: t,
      limit: s
    })), () => {
      n(xm())
    }), []), e.jsxs("div", {
      className: Is.layout,
      children: [e.jsx("div", {
        className: Is.container,
        children: a.map(i => {
          if (Number(i.templateId) === 0) return null;
          let r = !1;
          return o !== null && Number(o.id) === Number(i.templateId) && (r = !0), e.jsx(Mi, {
            item: i,
            current: r
          }, i.templateId)
        })
      }), e.jsx(Hv, {})]
    })
  },
  Lv = () => {
    const n = l(t => t.template.activeTab);
    return e.jsxs("div", {
      className: Zy.info_layout,
      children: [n === "my" && e.jsx(Ov, {}), n === "catalog" && e.jsx(qv, {})]
    })
  },
  Vv = () => {
    const n = g(),
      t = l(s => s.template.activeTab);
    return e.jsxs(zs, {
      children: [e.jsx(mt, {
        active: t === "my",
        setActive: () => n(Ya("my")),
        children: "My template"
      }), e.jsx(mt, {
        active: t === "catalog",
        setActive: () => n(Ya("catalog")),
        children: "Catalog"
      })]
    })
  },
  Gv = () => e.jsxs(ae.Fragment, {
    children: [e.jsx(Vv, {}), e.jsx(Lv, {})]
  }),
  Oa = "/assets/paintings_anim2-nk1iBB8J.gif",
  Xv = "_container_1h1qc_1",
  Jv = "_divider_1h1qc_19",
  Yv = "_row_1h1qc_24",
  Wv = "_row_title_1h1qc_36",
  Kv = "_row_title_main_1h1qc_40",
  Zv = "_row_hint_1h1qc_45",
  $v = "_row_value_1h1qc_51",
  ew = "_row_value_main_1h1qc_55",
  tw = "_mining_percent_1h1qc_60",
  nw = "_active_row_1h1qc_70",
  sw = "_button_1h1qc_81",
  ao = {
    container: Xv,
    divider: Jv,
    row: Yv,
    row_title: Wv,
    row_title_main: Kv,
    row_hint: Zv,
    row_value: $v,
    row_value_main: ew,
    mining_percent: tw,
    active_row: nw,
    button: sw
  },
  aw = () => {
    const n = g(),
      t = l(a => a.template.showTemplateDetailsPopup),
      s = a => {
        n(ji(a))
      };
    return e.jsx(Ht, {
      show: t,
      setShow: s,
      children: e.jsxs("div", {
        className: ao.container,
        children: [e.jsx("h2", {
          children: "How does Templates work? "
        }), e.jsx("p", {
          children: "Paint the pixels in the correct color – get a PX. "
        }), e.jsx("p", {
          children: "Use global templates, join your frens' templates, or create your own."
        }), e.jsx("p", {
          children: "Create a template and get reward in PX. The reward depends on the number of painters of the template. Btw, the owner doesn't get an award for painting his template."
        }), e.jsx("button", {
          className: ao.button,
          onPointerUp: () => s(!1),
          children: "That's so wise!"
        })]
      })
    })
  },
  ow = "_layout_2uiqn_1",
  iw = "_container_2uiqn_6",
  rw = "_close_button_2uiqn_18",
  cw = "_title_container_2uiqn_26",
  lw = "_title_2uiqn_26",
  dw = "_image_container_2uiqn_37",
  uw = "_image_2uiqn_37",
  pw = "_image_placeholder_2uiqn_51",
  mw = "_info_container_2uiqn_58",
  Aw = "_info_row_2uiqn_64",
  hw = "_info_title_2uiqn_69",
  gw = "_info_value_blue_2uiqn_73",
  _w = "_info_value_white_2uiqn_78",
  fw = "_buttons_container_2uiqn_82",
  xw = "_button_2uiqn_82",
  yw = "_not_button_2uiqn_98",
  vw = "_button_copy_2uiqn_109",
  K = {
    layout: ow,
    container: iw,
    close_button: rw,
    title_container: cw,
    title: lw,
    image_container: dw,
    image: uw,
    image_placeholder: pw,
    info_container: mw,
    info_row: Aw,
    info_title: hw,
    info_value_blue: gw,
    info_value_white: _w,
    buttons_container: fw,
    button: xw,
    not_button: yw,
    button_copy: vw
  },
  ww = () => {
    const n = g(),
      t = l(d => d.template.templateInfoPopupId),
      [s, a] = p.useState(!1),
      o = l(d => d.user.user),
      i = l(d => d.template.referredTemplate),
      r = t === o.id,
      c = i !== null && t === i.id;
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
            if (a(!0), (await n(it.subscribe({
                id: t
              }))).meta.requestStatus === u.fulfilled) {
              await n(q({
                id: performance.now(),
                text: "Success!"
              }));
              const m = await n(it.getTemplateById({
                  id: t
                })),
                A = {
                  ...m.payload,
                  url: `${m.payload.url}?time=${Date.now()}`,
                  type: Qe.referred
                };
              n(_m(A)), w.mainImage.worldTemplate.deleteTemplate(i.id), w.mainImage.worldTemplate.add(A), n(bi())
            } else await n(q({
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
  bw = () => {
    const n = g(),
      [t, s] = p.useState(null),
      a = l(i => i.template.showTemplateInfoPopup),
      o = l(i => i.template.templateInfoPopupId);
    return p.useEffect(() => (o && (async () => {
      try {
        const r = await n(it.getTemplateById({
          id: o
        }));
        r.payload && s({
          ...r.payload
        })
      } catch {}
    })(), () => {
      s(null)
    }), [o]), Ke.createPortal(e.jsx(ct, {
      onPointerUp: () => n(xa({
        show: !1
      })),
      show: a,
      children: e.jsx("div", {
        className: K.layout,
        children: e.jsxs("div", {
          className: K.container,
          onPointerUp: i => {
            i.stopPropagation()
          },
          children: [e.jsx("div", {
            className: K.close_button,
            onPointerUp: () => {
              n(xa({
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
            children: [e.jsx(ww, {}), e.jsx(Gt, {
              url: `${gt}?startapp=f${o}_t`,
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
  jw = () => {
    const n = g();
    return e.jsxs($, {
      children: [e.jsxs("div", {
        className: Nt.general_info_container,
        children: [e.jsx("div", {
          className: Nt.img_container,
          children: e.jsx("img", {
            alt: "img",
            className: Nt.image,
            src: Oa
          })
        }), e.jsx("h1", {
          className: Nt.title,
          children: "Templates"
        }), e.jsxs("div", {
          className: Nt.description_container,
          children: [e.jsxs("span", {
            className: Nt.description,
            children: ["Use templates and get more PX ", e.jsx("br", {}), e.jsx(Lt, {
              onPointerUp: t => {
                t.stopPropagation(), n(ji(!0))
              },
              children: "How it works"
            })]
          }), e.jsx(aw, {})]
        })]
      }), e.jsx(Gv, {}), e.jsx(bw, {})]
    })
  },
  Pw = "_container_s1r1v_1",
  Cw = "_page_s1r1v_13",
  Nw = "_id_s1r1v_17",
  Sw = "_title_s1r1v_22",
  Iw = "_avatar_container_s1r1v_28",
  Tw = "_avatar_s1r1v_28",
  Ew = "_squad_avatar_container_s1r1v_40",
  Bw = "_text_container_s1r1v_52",
  Dw = "_dot_s1r1v_58",
  kw = "_user_name_s1r1v_63",
  Rw = "_squad_name_s1r1v_69",
  Uw = "_divider_s1r1v_75",
  Ow = "_tabs_content_s1r1v_81",
  Mw = "_content_info_s1r1v_85",
  Qw = "_content_info_item_s1r1v_92",
  Fw = "_content_info_item_title_s1r1v_96",
  zw = "_content_info_item_value_s1r1v_100",
  Hw = "_no_content_s1r1v_106",
  qw = "_achievements_container_s1r1v_115",
  U = {
    container: Pw,
    page: Cw,
    id: Nw,
    title: Sw,
    avatar_container: Iw,
    avatar: Tw,
    squad_avatar_container: Ew,
    text_container: Bw,
    dot: Dw,
    user_name: kw,
    squad_name: Rw,
    divider: Uw,
    tabs_content: Ow,
    content_info: Mw,
    content_info_item: Qw,
    content_info_item_title: Fw,
    content_info_item_value: zw,
    no_content: Hw,
    achievements_container: qw
  },
  Lw = () => {
    const n = l(c => c.canvas.pixelInfo),
      t = l(c => c.ratings.list),
      s = l(c => c.canvas.getPixelInfoFetchStatus),
      a = l(c => c.main.userAndSquadPopupStack),
      o = l(c => c.squad.getInfoFetchStatus),
      i = l(c => c.squad.info);
    if (a.length === 0) return {
      ready: !1,
      data: null,
      item: {
        dataSource: null
      }
    };
    const r = a[a.length - 1];
    if (r.dataSource === Te.userFromPixelInfo) return {
      ready: s === u.fulfilled && n !== null,
      data: n == null ? void 0 : n.owner,
      item: r
    };
    if (r.dataSource === Te.squadFromData) return {
      ready: o === u.fulfilled && i !== null,
      data: i,
      item: r
    };
    if (r.dataSource === Te.userFromRating) {
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
  lt = (n = !0) => {
    const [t, s] = p.useState({
      ready: !1,
      data: null
    }), a = Lw(), o = l(rt);
    return p.useEffect(() => {
      t && s({
        ready: !0,
        data: o
      })
    }, [o]), n ? a : t
  },
  Vw = ({
    isPopupContent: n = !0
  }) => {
    const {
      data: t,
      ready: s
    } = lt(n);
    if (!s) return e.jsx(Be, {
      show: !s,
      children: e.jsx("div", {
        className: U.text_container,
        children: e.jsx("span", {
          className: U.user_name,
          children: "No name • @notpixel"
        })
      })
    });
    const o = vn(t.firstName || "No name");
    return e.jsx("div", {
      className: U.text_container,
      children: e.jsx("span", {
        className: U.user_name,
        children: o
      })
    })
  },
  Gw = ({
    isPopupContent: n = !0
  }) => {
    var i;
    const t = g(),
      {
        data: s,
        ready: a
      } = lt(n);
    return a ? ((i = s == null ? void 0 : s.squad) == null ? void 0 : i.name) && s.squad.name !== null ? e.jsxs("div", {
      className: U.text_container,
      children: [e.jsx("span", {
        className: U.squad_name,
        children: "Squad"
      }), e.jsx(Lt, {
        onPointerUp: () => {
          t(Gs.getInfo({
            id: s.squad.id
          })), t(Pn({
            dataSource: Te.squadFromData
          }))
        },
        children: vn(s.squad.name, 20)
      })]
    }) : e.jsx("div", {
      className: U.text_container,
      children: e.jsx("span", {
        className: U.squad_name,
        children: "No squad"
      })
    }) : e.jsx(Be, {
      show: !a,
      children: e.jsx("div", {
        className: U.text_container,
        children: e.jsx("span", {
          className: U.squad_name,
          children: "Loading..."
        })
      })
    })
  },
  Xw = ({
    isPopupContent: n = !0
  }) => {
    var o;
    const {
      data: t,
      ready: s
    } = lt(n);
    let a = He;
    return s && t.userPic && t.userPic !== "" && (a = t.userPic), e.jsxs("div", {
      className: U.avatar_container,
      children: [e.jsx("img", {
        alt: "avatar",
        className: U.avatar,
        src: a
      }), e.jsx("div", {
        className: U.squad_avatar_container,
        children: e.jsx(Ua, {
          src: ((o = t == null ? void 0 : t.squad) == null ? void 0 : o.logo) || ""
        })
      })]
    })
  },
  Jw = ({
    isPopupContent: n = !0
  }) => {
    const t = g(),
      {
        data: s,
        ready: a
      } = lt(n);
    return e.jsxs("div", {
      children: [a && s.id !== 0 && e.jsx("span", {
        className: U.id,
        onPointerUp: async o => {
          o.preventDefault(), o.stopPropagation();
          try {
            await Ds(`${s.id}`), await t(q({
              id: performance.now(),
              text: "Copied!"
            }))
          } catch {
            await t(q({
              id: performance.now(),
              text: "Can't copy!"
            }))
          }
        },
        children: s.id
      }), e.jsx(Be, {
        show: !a,
        children: e.jsx("span", {
          children: "Owner"
        })
      })]
    })
  },
  Yw = ({
    active: n,
    setActive: t
  }) => e.jsxs(zs, {
    style: {},
    children: [e.jsx(mt, {
      active: n === "info",
      setActive: () => t("info"),
      children: "Info"
    }), e.jsx(mt, {
      active: n === "achievements",
      setActive: () => t("achievements"),
      children: "Achievements"
    }), e.jsx(mt, {
      active: n === "inventory",
      setActive: () => t("inventory"),
      children: "Inventory"
    })]
  }),
  Ww = () => e.jsx("div", {
    className: U.divider
  }),
  Kw = ({
    isPopupContent: n = !0
  }) => {
    const {
      data: t,
      ready: s
    } = lt(n);
    return e.jsxs("div", {
      className: U.content_info,
      children: [e.jsxs("div", {
        className: U.content_info_item,
        children: [e.jsx("div", {
          className: U.content_info_item_title,
          children: "Leaderboard Place"
        }), e.jsx("div", {
          className: U.content_info_item_value,
          children: s ? "Soon" : 0
        })]
      }), e.jsxs("div", {
        className: U.content_info_item,
        children: [e.jsx("div", {
          className: U.content_info_item_title,
          children: "Score"
        }), e.jsx("div", {
          className: U.content_info_item_value,
          children: s ? "Soon" : 0
        })]
      }), e.jsxs("div", {
        className: U.content_info_item,
        children: [e.jsx("div", {
          className: U.content_info_item_title,
          children: "Pixels recolored"
        }), e.jsx("div", {
          className: U.content_info_item_value,
          children: s ? Pe({
            num: t.repaints
          }) : 0
        })]
      }), e.jsxs("div", {
        className: U.content_info_item,
        children: [e.jsx("div", {
          className: U.content_info_item_title,
          children: "PX mined"
        }), e.jsx("div", {
          className: U.content_info_item_value,
          children: s ? Pe({
            num: t.balance
          }) : 0
        })]
      })]
    })
  },
  Zw = "_container_os5nt_1",
  $w = "_not_completed_os5nt_6",
  e1 = "_image_container_os5nt_10",
  t1 = "_image_os5nt_10",
  n1 = "_bold_os5nt_20",
  s1 = "_gray_os5nt_24",
  a1 = "_description_container_os5nt_28",
  dt = {
    container: Zw,
    not_completed: $w,
    image_container: e1,
    image: t1,
    bold: n1,
    gray: s1,
    description_container: a1
  },
  o1 = ({
    completed: n,
    item: t
  }) => e.jsxs("div", {
    className: R(dt.container, n ? "" : dt.not_completed),
    children: [e.jsx("div", {
      className: dt.image_container,
      children: e.jsx("img", {
        src: t.src,
        className: dt.image
      })
    }), e.jsxs("div", {
      className: dt.description_container,
      children: [e.jsx("span", {
        className: dt.bold,
        children: t.title
      }), e.jsx("span", {
        className: dt.gray,
        children: t.description
      })]
    })]
  }),
  i1 = "/assets/0-CBlm-5t2.gif",
  r1 = "/assets/1-C1eaF-Lh.gif",
  c1 = "/assets/2-Dx7l5fvD.gif",
  l1 = "data:image/gif;base64,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",
  d1 = "/assets/4-B9SjwR-x.gif",
  u1 = "/assets/5-D2MXnTsp.gif",
  p1 = "/assets/6-DGYxyagY.gif",
  m1 = "/assets/10-BNY74yH-.gif",
  A1 = "/assets/12-B0vEyGRB.gif",
  h1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF0AAABkCAYAAADkBDymAAACSElEQVR4nO3doU5cQRSA4dmymz4DZkG0dU0wKB5gDXZVBSsxTfcBKmrql6SikhUoUlcED4DCNMHRCrqmz9AAadMHmHPDKXP/Jfk/Oxku/BlxMrnLDibz/ZJxvvj6J7WxlHJ7+by6Ntr9nf2xvf4uk/n+IPvMZ9mNyjM6wOgAowOMDjA6YBg9MhoLV6fh1iay412bffHIHI2UnnSA0QFGBxgdYHSA0QH/xpq1Ggs3tzeqa/2Phbl9XXs96QCjA4wOMDrA6ACjA4wOMDrA6ACjA4wOMDrA6ACjA/q/u+24vo10Xac+FZ50gNEBRgcYHWB0gNEBzUbGaCz8sPxSXfv4KfcZqMjx4mew+qq6Eu0b7W6lfx9POsDoAKMDjA4wOsDogPQLpF03hdFY+PLF6+ra9x9X1bVonNz5XN/37bD+vGgsnM3rY2H0vK5netIBRgcYHWB0gNEBRgc0u2XMjoXRvkg0orXwP8/zpAOMDjA6wOgAowOMDmj2MfXoFvLk4nrdOjy66IbSkw4wOsDoAKMDjA4wOgD5+EsLB+/GvT5vebRK7/WkA4wOMDrA6ACjA4wOCEfG8fSuutZ1A/nr5r669mav/pGT6Aay77GwFU86wOgAowOMDjA6wOiAYfbbBsfT+CtnWvzv9fdvz6prLd6dbPHOZfGkM4wOMDrA6ACjA4wOMDogPUx3zffxHF+/Mj5eMCEeKnpBtPjVmOvH6ACjA4wOMDrA6IBmL5Bmr4xn863wynhdZP++4klnGB1gdIDRAUYHGL1vpZS/8GF1OTKsdsMAAAAASUVORK5CYII=",
  g1 = [{
    id: 1,
    src: i1,
    title: "Beta Pixel",
    description: "Someone who's seen the First Pixel. Show respect. He has nightmares about cubes and flags."
  }, {
    id: 2,
    src: r1,
    title: "Pixel's 16 frens",
    description: "Invite 16 frens. A great company is the key to success!"
  }, {
    id: 3,
    src: c1,
    title: "Pixel Brotherhood",
    description: "Invite 64 frens. Where'd you get that charisma, buddy?"
  }, {
    id: 4,
    src: l1,
    title: "My pixel dudes",
    description: "Invite 128 frens. Admit it, are your relatives in the game too?"
  }, {
    id: 5,
    src: d1,
    title: "Thunder Pixel",
    description: "Paint 64,000 pixels. Is your finger on fire?"
  }, {
    id: 6,
    src: u1,
    title: "Master over Pixels",
    description: "Paint 128,000 pixels. Have you considered a career as a pixel artist?"
  }, {
    id: 7,
    src: p1,
    title: "Malevich",
    description: "Paint 512,000 pixels. Either the most dedicated artist or the most dedicated auto-clicker."
  }, {
    id: 11,
    src: m1,
    title: "Platinum Pixel",
    description: "Platinum League member. Your mom would be proud of you."
  }, {
    id: 13,
    src: A1,
    title: "Ambassador",
    description: "Invited 10,000 frens. You're either very friendly or a bot. A friendly bot?"
  }, {
    id: 14,
    src: h1,
    title: "Pixanos' Snap",
    description: "Use of Pixanos. Your snap destroyed half the world. Or did it save it?"
  }],
  _1 = ({
    isPopupContent: n
  }) => {
    const {
      ready: t,
      data: s
    } = lt(n);
    return e.jsx("div", {
      className: U.achievements_container,
      children: g1.map(a => e.jsx(o1, {
        item: a,
        completed: t && s.achievements && s.achievements[a.id]
      }, a.id))
    })
  },
  f1 = () => e.jsxs("div", {
    className: U.no_content,
    children: ["Something will happen here,", e.jsx("br", {}), " but not now."]
  }),
  x1 = ({
    active: n,
    isPopupContent: t = !0
  }) => e.jsxs("div", {
    className: U.tabs_content,
    children: [n === "info" && e.jsx(Kw, {
      isPopupContent: t
    }), n === "achievements" && e.jsx(_1, {
      isPopupContent: t
    }), n === "inventory" && e.jsx(f1, {})]
  }),
  y1 = ({
    isPopupContent: n = !0
  }) => {
    const [t, s] = p.useState("info");
    return e.jsxs("div", {
      style: {
        width: "100%"
      },
      children: [e.jsx(Yw, {
        active: t,
        setActive: s
      }), e.jsx(Ww, {}), e.jsx(x1, {
        active: t,
        isPopupContent: n
      })]
    })
  },
  v1 = "_layout_c6k10_1",
  w1 = "_close_button_c6k10_6",
  Qi = {
    layout: v1,
    close_button: w1
  },
  Fi = () => {
    const n = g();
    return e.jsx("div", {
      className: Qi.close_button,
      onPointerUp: () => {
        n(pi())
      },
      children: e.jsx(B, {
        size: 26,
        children: ""
      })
    })
  },
  va = ({
    isPopupContent: n = !0
  }) => {
    const t = n ? "Painter" : "My Profile";
    return e.jsxs("div", {
      className: R(U.container, !n && U.page),
      children: [n && e.jsx(Fi, {}), e.jsx("div", {
        children: e.jsx("span", {
          className: U.title,
          children: t
        })
      }), e.jsx(Xw, {
        isPopupContent: n
      }), e.jsx(Vw, {
        isPopupContent: n
      }), e.jsx(Gw, {
        isPopupContent: n
      }), e.jsx(Jw, {
        isPopupContent: n
      }), e.jsx(y1, {
        isPopupContent: n
      })]
    })
  },
  b1 = () => {
    const n = g(),
      t = l(rt);
    return p.useEffect(() => (t && t.id && n(Im.getListByUserId({
      userId: t.id
    })), () => {
      n(Nm())
    }), [t]), e.jsx($, {
      children: e.jsx(va, {
        isPopupContent: !1
      })
    })
  },
  j1 = "_container_1bw7p_1",
  P1 = {
    container: j1
  },
  C1 = "_container_12mk9_1",
  N1 = "_page_12mk9_13",
  S1 = "_id_12mk9_17",
  I1 = "_title_12mk9_22",
  T1 = "_avatar_container_12mk9_28",
  E1 = "_avatar_12mk9_28",
  B1 = "_text_container_12mk9_39",
  D1 = "_dot_12mk9_45",
  k1 = "_user_name_12mk9_50",
  R1 = "_squad_slug_12mk9_56",
  U1 = "_your_squad_button_12mk9_62",
  O1 = "_join_squad_button_12mk9_75",
  M1 = "_red_12mk9_91",
  Q1 = "_divider_12mk9_95",
  F1 = "_tabs_content_12mk9_101",
  z1 = "_content_info_12mk9_105",
  H1 = "_content_info_item_12mk9_112",
  q1 = "_content_info_item_title_12mk9_116",
  L1 = "_content_info_item_value_12mk9_120",
  V1 = "_content_top_12mk9_127",
  G1 = "_content_top_item_12mk9_140",
  X1 = "_content_top_item_image_12mk9_150",
  J1 = "_content_top_name_12mk9_156",
  Y1 = "_content_top_arrow_12mk9_162",
  W1 = "_gray_12mk9_166",
  E = {
    container: C1,
    page: N1,
    id: S1,
    title: I1,
    avatar_container: T1,
    avatar: E1,
    text_container: B1,
    dot: D1,
    user_name: k1,
    squad_slug: R1,
    your_squad_button: U1,
    join_squad_button: O1,
    red: M1,
    divider: Q1,
    tabs_content: F1,
    content_info: z1,
    content_info_item: H1,
    content_info_item_title: q1,
    content_info_item_value: L1,
    content_top: V1,
    content_top_item: G1,
    content_top_item_image: X1,
    content_top_name: J1,
    content_top_arrow: Y1,
    gray: W1
  },
  zi = ({
    data: n,
    ready: t
  }) => {
    let s = He;
    return t && n.squad.logo && n.squad.logo !== "" && (s = n.squad.logo), e.jsx("div", {
      className: E.avatar_container,
      children: e.jsx("img", {
        alt: "avatar",
        className: E.avatar,
        src: s
      })
    })
  },
  Hi = ({
    data: n,
    ready: t
  }) => {
    if (!t) return e.jsx(Be, {
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
      var o;
      return vn(((o = n == null ? void 0 : n.squad) == null ? void 0 : o.name) || "No name")
    })();
    return e.jsx("div", {
      className: E.text_container,
      children: e.jsx("span", {
        className: E.user_name,
        children: a
      })
    })
  },
  qi = ({
    data: n,
    ready: t
  }) => {
    var a;
    return t ? ((a = n == null ? void 0 : n.squad) == null ? void 0 : a.slug) && n.squad.slug !== null ? e.jsx("div", {
      className: E.text_container,
      children: e.jsx(Vt, {
        address: `${at}?startapp=${btoa(`id=${n.squad.id}`)}`,
        display: n.squad.slug,
        limit: 18
      })
    }) : e.jsx("div", {
      className: E.text_container,
      children: e.jsx("span", {
        className: E.squad_slug,
        children: "No squad slug"
      })
    }) : e.jsx(Be, {
      show: !t,
      children: e.jsx("div", {
        className: E.text_container,
        children: e.jsx("span", {
          children: "Loading..."
        })
      })
    })
  },
  Li = ({
    data: n,
    ready: t
  }) => {
    const s = l(o => o.user.user);
    return t ? s !== null && s.squad.id !== null && s.squad.id === n.squad.id ? e.jsxs("div", {
      className: E.your_squad_button,
      onPointerUp: () => {
        pe(`https://t.me/${at}?startapp=${btoa(`id=${n.squad.id}`)}`)
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
        pe(`https://t.me/${at}?startapp=${btoa(`id=${n.squad.id}`)}`)
      },
      className: E.join_squad_button,
      children: "Join squad"
    }) : null
  },
  K1 = ({
    active: n,
    setActive: t
  }) => e.jsx(zs, {
    style: {},
    children: e.jsx(mt, {
      active: n === "info",
      setActive: () => t("info"),
      children: "Info"
    })
  }),
  Z1 = () => e.jsx("div", {
    className: E.divider
  }),
  $1 = ({
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
        children: t ? Pe({
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
        children: t ? Pe({
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
        children: t ? Pe({
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
        children: t ? Pe({
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
        children: t ? Pe({
          num: n.squad.totalBalance
        }) : 0
      })]
    })]
  }),
  eb = [{
    name: "123",
    avatar: ht
  }, {
    name: "123",
    avatar: ""
  }, {
    name: "123",
    avatar: null
  }, {
    name: "123",
    avatar: ht
  }, {
    name: "123",
    avatar: ht
  }],
  tb = () => e.jsx("div", {
    className: E.content_top,
    children: eb.map((n, t) => {
      const s = n.avatar && n.avatar !== "" ? n.avatar : He;
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
  nb = ({
    isPopupContent: n,
    active: t,
    data: s,
    ready: a
  }) => e.jsxs("div", {
    className: E.tabs_content,
    children: [t === "info" && e.jsx($1, {
      isPopupContent: n,
      data: s,
      ready: a
    }), t === "top" && e.jsx(tb, {})]
  }),
  Vi = ({
    data: n,
    ready: t
  }) => {
    const [s, a] = p.useState("info");
    return e.jsxs("div", {
      style: {
        width: "100%"
      },
      children: [e.jsx(K1, {
        active: s,
        setActive: a
      }), e.jsx(Z1, {}), e.jsx(nb, {
        active: s,
        data: n,
        ready: t
      })]
    })
  },
  sb = () => {
    const n = g(),
      t = l(i => i.user.user),
      a = l(i => i.squad.getInfoFetchStatus) === u.fulfilled,
      o = l(i => i.squad.info);
    return p.useEffect(() => {
      t && t.squad && t.squad.id && n(Gs.getInfo({
        id: t.squad.id
      }))
    }, []), e.jsx($, {
      children: e.jsxs("div", {
        className: P1.container,
        children: [e.jsx(zi, {
          data: o,
          ready: a
        }), e.jsx(Hi, {
          data: o,
          ready: a
        }), e.jsx(qi, {
          data: o,
          ready: a
        }), e.jsx(Li, {
          data: o,
          ready: a
        }), e.jsx(Vi, {
          data: o,
          ready: a
        })]
      })
    })
  },
  ab = ({
    setFile: n,
    loading: t
  }) => {
    const s = ["image/png", "image/webp", "image/svg+xml", "image/gif", "image/bmp", "image/tiff"];
    return e.jsxs("div", {
      className: J.file_button_container,
      children: [e.jsx("input", {
        type: "file",
        id: "custom-input",
        accept: s.join(", "),
        disabled: t,
        onChange: a => {
          var o;
          try {
            const i = (o = a.target.files) == null ? void 0 : o[0];
            if (!i) return;
            const r = new FileReader;
            r.addEventListener("load", c => {
              const d = document.createElement("img");
              d.addEventListener("load", () => {
                n(d)
              }), d.src = c.target.result
            }, !1), r.readAsDataURL(i)
          } catch (i) {
            console.error(i)
          }
        },
        hidden: !0
      }), e.jsx("label", {
        htmlFor: "custom-input",
        id: "choose-file",
        className: J.file_button,
        children: "Upload a picture"
      })]
    })
  },
  ob = ({
    dataUrl: n,
    loading: t,
    templateSize: s
  }) => e.jsx("div", {
    className: J.preview_container,
    children: e.jsxs("div", {
      className: J.preview_image_container,
      children: [e.jsx("img", {
        alt: "templateImage",
        id: "templateImage",
        className: J.preview_image,
        src: n
      }), t && e.jsx("div", {
        className: J.preview_image_loader,
        children: "Loading..."
      })]
    })
  }),
  ib = n => {
    const t = new Uint8Array(n.data);
    for (let s = 0; s < t.length; s += 4) {
      const a = t[s],
        o = t[s + 1],
        i = t[s + 2];
      if (t[s + 3] === 0) continue;
      let c = Ee[0],
        d = 1 / 0;
      for (const A of Ee) {
        const h = Dt.deltaE(Dt(Ut(a, o, i)), Dt(A));
        h < d && (d = h, c = A)
      }
      const m = pt(c);
      n.data[s] = m.r, n.data[s + 1] = m.g, n.data[s + 2] = m.b, n.data[s + 3] = 255
    }
  },
  rb = ({
    loading: n,
    imageData: t,
    posX: s,
    posY: a
  }) => {
    const o = g(),
      i = Y(),
      r = l(A => A.template.myTemplate),
      c = l(A => A.user.user),
      [d, m] = p.useState(!1);
    return e.jsx("div", {
      className: J.file_button_container,
      children: e.jsx("button", {
        disabled: n || d,
        className: J.file_button,
        onPointerUp: async () => {
          try {
            m(!0);
            const A = new Blob([t.data], {
              type: "application/octet-stream"
            });
            if ((await ke.uploadTemplate({
                blob: A,
                posX: s,
                posY: a
              })).status === 200) {
              r && w.mainImage.worldTemplate.deleteTemplate(r.id);
              const f = await o(it.getTemplateById({
                  id: c.id
                })),
                C = {
                  ...f.payload,
                  url: `${f.payload.url}?time=${Date.now()}`,
                  type: Qe.my
                };
              o(fm(C)), o(bi()), await w.mainImage.worldTemplate.add(C), o(q({
                id: performance.now(),
                text: "Create successfully!",
                icon: ""
              })), i.push("/template")
            } else o(q({
              id: performance.now(),
              text: "Error, try again",
              icon: ""
            }));
            m(!1)
          } catch {
            o(q({
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
  cb = ({
    templateSize: n,
    setTemplateSize: t,
    coords: s,
    setCoords: a
  }) => (p.useState([16, 32, 64, 128]), e.jsxs("div", {
    className: J.template_coords,
    children: [e.jsx("div", {
      className: J.template_coordinates_title,
      children: "Input template coordinates:"
    }), e.jsxs("div", {
      className: J.template_coords_container,
      children: [e.jsxs("div", {
        className: J.coords_item,
        children: [e.jsx("span", {
          children: "x:"
        }), e.jsx("input", {
          type: "text",
          placeholder: "x",
          value: s.x,
          onChange: o => {
            if (isNaN(o.target.value)) return;
            const r = {
              x: Number(o.target.value),
              y: s.y
            };
            gn(r) && a(r)
          },
          className: J.coords_input
        })]
      }), e.jsxs("div", {
        className: J.coords_item,
        children: [e.jsx("span", {
          children: "y:"
        }), e.jsx("input", {
          type: "text",
          placeholder: "y",
          value: s.y,
          onChange: o => {
            if (isNaN(o.target.value)) return;
            const i = Number(o.target.value),
              r = {
                x: s.x,
                y: i
              };
            gn(r) && a(r)
          },
          className: J.coords_input
        })]
      })]
    })]
  })),
  lb = () => e.jsxs("div", {
    className: J.instruction_container,
    children: [e.jsx("div", {
      className: J.img_container,
      children: e.jsx("img", {
        alt: "img",
        className: J.image,
        src: Oa
      })
    }), e.jsx("div", {
      className: J.instruction_text,
      children: "Upload a picture and create a template"
    })]
  }),
  db = () => {
    g(), l(rt);
    const [n, t] = p.useState(null), [s, a] = p.useState(null), [o, i] = p.useState(null), [r, c] = p.useState(16), [d, m] = p.useState({
      x: "",
      y: ""
    }), [A, h] = p.useState(!1);
    return p.useEffect(() => {}, []), p.useEffect(() => {
      if (n !== null) {
        h(!0);
        const f = async () => {
          const C = document.createElement("canvas"),
            y = C.getContext("2d");
          y.imageSmoothingEnabled = !1;
          const _ = n.width / n.height;
          let b, T;
          _ > 1 ? (b = r, T = r / _) : (T = r, b = r * _);
          const ve = (r - b) / 2,
            we = (r - T) / 2;
          C.width = r, C.height = r, y.drawImage(n, ve, we, b, T);
          const Q = y.getImageData(0, 0, r, r);
          ib(Q), y.putImageData(Q, 0, 0), a(Q), i(C.toDataURL())
        };
        setTimeout(() => {
          f().then(() => {
            h(!1)
          })
        }, 100)
      }
    }, [n, r]), e.jsxs($, {
      children: [o === null && e.jsx(lb, {}), o !== null && e.jsx(ob, {
        loading: A,
        dataUrl: o,
        templateSize: r
      }), o !== null && e.jsx(Sv, {
        templateSize: r,
        setTemplateSize: c
      }), o !== null && e.jsx(cb, {
        coords: d,
        setCoords: m,
        templateSize: r,
        setTemplateSize: c
      }), n === null && e.jsx(ab, {
        setFile: t,
        templateSize: r,
        loading: A
      }), n !== null && e.jsx(rb, {
        loading: A,
        imageData: s,
        posX: d.x,
        posY: d.y
      })]
    })
  },
  ub = "_layout_1pbs2_1",
  pb = "_container_1pbs2_9",
  mb = "_header_1pbs2_18",
  Ab = "_bg_image_1pbs2_25",
  hb = "_title_1pbs2_34",
  gb = "_description_1pbs2_43",
  _b = "_timer_1pbs2_52",
  fb = "_timer_inner_1pbs2_61",
  xb = "_timer_text_1pbs2_68",
  yb = "_line_1pbs2_72",
  vb = "_requirements_title_1pbs2_78",
  wb = "_requirements_1pbs2_78",
  bb = "_item_1pbs2_93",
  jb = "_item_image_1pbs2_106",
  Pb = "_main_info_1pbs2_112",
  Cb = "_other_criteria_1pbs2_119",
  Nb = "_gray_1pbs2_124",
  Sb = "_soon_1pbs2_128",
  Ib = "_icon_1pbs2_133",
  Tb = "_completed_icon_1pbs2_144",
  Eb = "_not_completed_icon_1pbs2_148",
  te = {
    layout: ub,
    container: pb,
    header: mb,
    bg_image: Ab,
    title: hb,
    description: gb,
    timer: _b,
    timer_inner: fb,
    timer_text: xb,
    line: yb,
    requirements_title: vb,
    requirements: wb,
    item: bb,
    item_image: jb,
    main_info: Pb,
    other_criteria: Cb,
    gray: Nb,
    soon: Sb,
    icon: Ib,
    completed_icon: Tb,
    not_completed_icon: Eb
  },
  oo = ({
    success: n
  }) => n ? e.jsx("div", {
    className: R(te.completed_icon, te.icon),
    children: e.jsx(B, {
      size: 14,
      children: ""
    })
  }) : e.jsx("div", {
    className: R(te.not_completed_icon, te.icon),
    children: e.jsx(B, {
      size: 14,
      children: ""
    })
  }),
  Bb = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAABZUlEQVR4nO3cz4nCQBhA8cliBcI2sFfBsx7FHrYFSxArEDvQFuzBs54Ft4hdsIV4Tg4O8eWbjfB+t+CfwONjmBG1SvvfOullH6ZjDAgZEDIgZEDIgJABIQNCBoQMCBkQMiBkQMiAkAEhA0IGhAwIGRAyIGRAaFT6hvXq8+nj1eEv9PV9cwIhA0IGhAwIGRAyIGRAqPg+MCe3zxsaJxAyIGRAKHwNzK1pk/WxcX3bfaPnt+8XfTZ2AiEDQgaEel8Du+7jfr4Woc+PXhOdQMiAkAGhfz8Ld10zh3ZWdgIhA0IGhHpfA+fbU+P6vFl2ejz6fmk8RfdrcwIhA0IGhMJ/sT67XxvX2TWqo9z7XXpe89qcQMiAkAGh4v/aEX2W9fuBb8aAkAGh4p8H0n1fVvC+r80JhAwIGRAqvgZGn01LcwIhA0IGhAwIGRAyIGRAyICQASEDQgaEDAgZEDIgZEDIgJABiZTSA9erPYxaPJ1yAAAAAElFTkSuQmCC",
  Db = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAABFElEQVR4nO3ZwU0DMRRAQQdRQaS0wZ0zxVBDKqAFKIZzqAWKCC3EPBk50sx9V96nL2stH8b793XwZw/SNQJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkaPq158fT391zfc5PDxs+S9JjASMBIwEjASMBIwEjASMBIwEjASMFp2Fp71/PY59cTl/LLDsk1gJWAkYLTNHvh1fNpgFfNMYCRgJGAkYCRgJGAkYLTNf+Bu98i3MoGRgJGAkYCRgJGAkYCRgJGAkYCRgNGys/DsPe9yi+5cTGAkYCRgtGwPvNd73lkmMBIwEjASMBIwEjASMBIwEjASMBIwEjASMBIwEjASMBKwGGP8AtVUDnVJr20VAAAAAElFTkSuQmCC",
  kb = "/assets/gp_ase_f_outl-FdQpX43h.gif",
  Rb = "_container_1kwij_1",
  Ub = "_title_1kwij_10",
  Ob = "_instruction_1kwij_15",
  Mb = "_required_wallet_1kwij_20",
  Qb = "_divider_1kwij_24",
  Fb = "_input_1kwij_30",
  zb = "_button_1kwij_58",
  Hb = "_active_row_1kwij_87",
  qb = "_row_title_1kwij_87",
  Ne = {
    container: Rb,
    title: Ub,
    instruction: Ob,
    required_wallet: Mb,
    divider: Qb,
    input: Fb,
    button: zb,
    active_row: Hb,
    row_title: qb
  },
  io = "data:image/svg+xml,%3csvg%20height='18'%20viewBox='0%200%2017%2018'%20width='17'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20fill='none'%20fill-rule='evenodd'%20stroke='%23fff'%20stroke-width='1.7'%3e%3cpath%20d='m1.84%203h13.3c.28%200%20.5.22.5.5%200%20.09-.02.17-.06.25l-6.33%2011.18c-.27.48-.88.65-1.36.38-.16-.09-.3-.23-.38-.39l-6.11-11.18c-.13-.24-.04-.55.2-.68.08-.04.16-.06.24-.06z'/%3e%3cpath%20d='m8.5%2015v-12'/%3e%3c/g%3e%3c/svg%3e",
  Lb = ({
    show: n,
    setShow: t
  }) => {
    const s = g(),
      a = Y(),
      [o] = yn(),
      i = xn(),
      r = Wr(i),
      c = l(_ => _.mining.tasks[j.walletVerification]),
      d = l(_ => _.user.verificatedWallet),
      m = To(d),
      A = ma(m),
      h = l(_ => _.user.hasCaptchaCode);
    console.log("connectedUQ: ", i), console.log("connectedEQ: ", r), console.log("verificatedWallet: ", d), console.log("verificatedWalletUQ: ", m), console.log("formattedVerificatedWalletUQ: ", A);
    const [f, C] = p.useState(""), y = async () => {
      try {
        if (d !== r) {
          s(q({
            id: performance.now(),
            text: `Use ${ma(A)} wallet`
          })), await o.disconnect();
          return
        }
        const _ = ge.beginCell().storeUint(0, 32).endCell(),
          b = {
            validUntil: Math.floor(Date.now() / 1e3) + 600,
            messages: [{
              address: "UQDTwwYcxZAP8IzsHTe6_wkfzk5cJrIR1H6O5klygJO7EYzX",
              amount: String(ge.toNano("0.1")),
              payload: _.toBoc().toString("base64")
            }]
          },
          T = await o.sendTransaction(b);
        s(q({
          id: performance.now(),
          text: "Success! Wait code in your wallet",
          icon: ""
        }))
      } catch {
        s(q({
          id: performance.now(),
          text: "Something went wrong... Try again."
        }))
      }
    };
    return e.jsx(Ht, {
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
              children: " Tonkeeper "
            }), "."]
          }), !c && e.jsxs("button", {
            className: Ne.button,
            onPointerUp: () => {
              a.push("/claiming"), setTimeout(() => {
                const _ = document.getElementById("ton_wallet_connect_task_div");
                _ && _.scrollIntoView({
                  block: "center"
                })
              }, 100)
            },
            children: [e.jsx("img", {
              alt: "image",
              src: io
            }), "Connect TON"]
          }), c && i === "" && e.jsxs(e.Fragment, {
            children: [e.jsxs("div", {
              className: Ne.required_wallet,
              children: ["Use ", A, " wallet"]
            }), e.jsxs("button", {
              className: Ne.button,
              onPointerUp: () => {
                o.openModal()
              },
              children: [e.jsx("img", {
                alt: "image",
                src: io
              }), "Connect TON"]
            })]
          }), c && i !== "" && !h && e.jsx("button", {
            className: Ne.button,
            onPointerUp: y,
            children: "Request a code"
          }), e.jsx("div", {
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
                value: f,
                onChange: _ => {
                  C(_.target.value)
                }
              })
            })]
          })]
        }), e.jsx("button", {
          className: Ne.button,
          onPointerUp: async () => {
            var _;
            if (!(!f || f === "")) {
              if (i === "") {
                s(q({
                  id: performance.now(),
                  text: `Connect ${A} wallet first`
                }));
                return
              }
              if (d !== r) {
                s(q({
                  id: performance.now(),
                  text: `Use ${A} wallet`
                })), await o.disconnect();
                return
              }
              try {
                const b = await s(ze.checkCaptcha({
                  wallet: r,
                  captcha: f
                }));
                if (b.meta.requestStatus === u.rejected) throw new Error("error");
                if ((_ = b.payload) != null && _.success) s(q({
                  id: performance.now(),
                  text: "Success!",
                  icon: ""
                })), s(Ld({
                  task: j.checkCaptcha,
                  value: !0
                })), t(!1);
                else throw new Error("error")
              } catch {
                s(q({
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
  Vb = () => {
    const n = g(),
      t = l(Ms),
      s = l(Os),
      a = l(_ => _.user.pixelCoins),
      o = l(Ea.selectAll),
      i = l(_ => _.daily.getDailyListFetchStatus),
      r = a >= 1e5,
      c = l(_ => _.user.verificatedWalletStatus),
      d = l(_ => _.mining.tasks.checkCaptcha),
      m = l(_ => _.user.hasCaptchaCode),
      A = l(_ => _.user.hasCaptchaCodeStatus);
    p.useEffect(() => {
      c === u.idle && n(ze.getVerificatedWallet())
    }, [c]), p.useEffect(() => {
      i === u.idle && n(Ni.getList())
    }, [i]), p.useEffect(() => {
      A === u.idle && n(ze.checkHasCaptchaCode())
    }, [A]);
    let h = 0;
    a >= 1e5 && (h += 1), d && (h += 1), o.forEach(_ => {
      _.timestamp
    });
    const [f, C] = p.useState(!1), y = _ => {
      if (m) {
        C(_);
        return
      }
      C(!1)
    };
    return e.jsxs($, {
      children: [e.jsx(Lb, {
        show: f,
        setShow: y
      }), e.jsx("div", {
        className: te.layout,
        children: e.jsxs("div", {
          className: te.container,
          children: [e.jsxs("div", {
            className: te.header,
            children: [e.jsx("div", {}), e.jsx("img", {
              alt: "image",
              src: kb,
              className: te.bg_image
            }), e.jsx("div", {
              className: te.title,
              children: "AIRDROP"
            }), e.jsx("div", {
              className: te.timer
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
                  className: te.item_image,
                  src: Db
                })
              }), e.jsx("div", {
                className: te.main_info,
                children: e.jsxs("div", {
                  children: ["Total balance: 100 000 ", e.jsx(An, {})]
                })
              }), e.jsx(oo, {
                success: r
              })]
            }), e.jsxs("div", {
              className: te.item,
              onPointerUp: y,
              children: [e.jsx("div", {
                children: e.jsx("img", {
                  className: te.item_image,
                  src: Bb
                })
              }), e.jsxs("div", {
                className: te.main_info,
                children: [e.jsx("div", {
                  children: e.jsx("span", {
                    children: "TON Captcha"
                  })
                }), !m && e.jsx("span", {
                  className: te.soon,
                  children: "Soon"
                })]
              }), e.jsx(oo, {
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
  Gb = "_general_info_container_1u2nd_1",
  Xb = "_img_container_1u2nd_7",
  Jb = "_image_1u2nd_17",
  Yb = "_image_cup_1u2nd_23",
  Wb = "_image_glow_container_1u2nd_29",
  Kb = "_image_glow_1u2nd_29",
  Zb = "_rotate_1u2nd_1",
  $b = "_image_glow_reverse_1u2nd_48",
  ej = "_title_1u2nd_53",
  tj = "_description_container_1u2nd_60",
  nj = "_description_1u2nd_60",
  sj = "_gold_1u2nd_73",
  Se = {
    general_info_container: Gb,
    img_container: Xb,
    image: Jb,
    image_cup: Yb,
    image_glow_container: Wb,
    image_glow: Kb,
    rotate: Zb,
    image_glow_reverse: $b,
    title: ej,
    description_container: tj,
    description: nj,
    gold: sj
  },
  aj = "_info_layout_1p9dg_1",
  oj = {
    info_layout: aj
  },
  ij = n => {
    const t = new Uint8Array(n.data);
    for (let s = 0; s < t.length; s += 4) {
      const a = t[s],
        o = t[s + 1],
        i = t[s + 2];
      if (t[s + 3] === 0) continue;
      let c = Ee[0],
        d = 1 / 0;
      for (const A of Ee) {
        const h = Dt.deltaE(Dt(Ut(a, o, i)), Dt(A));
        h < d && (d = h, c = A)
      }
      const m = pt(c);
      n.data[s] = m.r, n.data[s + 1] = m.g, n.data[s + 2] = m.b, n.data[s + 3] = 255
    }
  },
  rj = "_instruction_container_17lvx_1",
  cj = "_img_container_17lvx_9",
  lj = "_img_inner_container_17lvx_16",
  dj = "_image_17lvx_22",
  uj = "_image_status_17lvx_30",
  pj = "_image_status_rejected_17lvx_45",
  mj = "_image_status_review_17lvx_49",
  Aj = "_image_status_approved_17lvx_53",
  hj = "_copy_button_container_17lvx_57",
  gj = "_button_copy_17lvx_65",
  _j = "_gray_17lvx_71",
  fj = "_preview_container_17lvx_75",
  xj = "_preview_image_container_17lvx_81",
  yj = "_preview_image_17lvx_81",
  vj = "_preview_image_loader_17lvx_94",
  wj = "_template_size_17lvx_109",
  bj = "_template_title_17lvx_117",
  jj = "_template_size_container_17lvx_122",
  Pj = "_template_size_item_17lvx_128",
  Cj = "_template_size_item_active_17lvx_136",
  Nj = "_template_coords_17lvx_141",
  Sj = "_template_coordinates_title_17lvx_151",
  Ij = "_template_coords_container_17lvx_156",
  Tj = "_coords_item_17lvx_163",
  Ej = "_coords_input_17lvx_169",
  Bj = "_file_button_container_17lvx_178",
  Dj = "_file_button_17lvx_178",
  ne = {
    instruction_container: rj,
    img_container: cj,
    img_inner_container: lj,
    image: dj,
    image_status: uj,
    image_status_rejected: pj,
    image_status_review: mj,
    image_status_approved: Aj,
    copy_button_container: hj,
    button_copy: gj,
    gray: _j,
    preview_container: fj,
    preview_image_container: xj,
    preview_image: yj,
    preview_image_loader: vj,
    template_size: wj,
    template_title: bj,
    template_size_container: jj,
    template_size_item: Pj,
    template_size_item_active: Cj,
    template_coords: Nj,
    template_coordinates_title: Sj,
    template_coords_container: Ij,
    coords_item: Tj,
    coords_input: Ej,
    file_button_container: Bj,
    file_button: Dj
  },
  St = {
    approved: "approved",
    review: "review",
    rejected: "rejected"
  },
  kj = () => {
    const n = g(),
      t = l(a => a.tournament.myTemplate);
    let s = St.review;
    return t && t.approved && (s = St.approved), t && (t.deletedAt || t.approved === !1) && (s = St.rejected), e.jsxs("div", {
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
            src: t ? `${t.url}?time=${Date.now()}` : Oa,
            onPointerUp: () => {
              t.id && t.id !== 0 && n(Ba(t))
            }
          }), s === St.review && e.jsx("div", {
            className: R(ne.image_status, ne.image_status_review),
            children: "On review"
          }), s === St.rejected && e.jsx("div", {
            className: R(ne.image_status, ne.image_status_rejected),
            children: "Rejected"
          }), s === St.approved && e.jsx("div", {
            className: R(ne.image_status, ne.image_status_approved),
            children: "Approved"
          })]
        })
      }), e.jsx("div", {
        className: ne.copy_button_container,
        children: e.jsx(Gt, {
          url: `${gt}?startapp=f${t==null?void 0:t.id}_t`,
          className: ne.button_copy,
          text: "Copy template link"
        })
      })]
    })
  },
  Rj = ({
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
  Uj = ({
    templateSize: n,
    setTemplateSize: t
  }) => {
    const [s] = p.useState([n]);
    return e.jsxs("div", {
      className: ne.template_size,
      children: [e.jsx("div", {
        className: ne.template_title,
        children: "Template Size"
      }), e.jsx("div", {
        className: ne.template_size_container,
        children: s.map(a => {
          const o = [ne.template_size_item];
          return n === a && o.push(ne.template_size_item_active), e.jsx("div", {
            className: o.join(" "),
            onPointerUp: () => {
              t(a)
            },
            children: `${a} X ${a}`
          }, a)
        })
      }), " "]
    })
  },
  Oj = ({
    coords: n,
    setCoords: t
  }) => null,
  Mj = () => {
    g(), l(rt);
    const n = l(Hs),
      t = Po[n],
      [s, a] = p.useState(null),
      [o, i] = p.useState(null),
      [r, c] = p.useState(null),
      [d, m] = p.useState((t == null ? void 0 : t.templateSize) || 256),
      [A, h] = p.useState({
        x: 0,
        y: 0
      }),
      [f, C] = p.useState(!1);
    return p.useEffect(() => {
      if (s !== null) {
        C(!0);
        const y = async () => {
          const _ = document.createElement("canvas"),
            b = _.getContext("2d");
          b.imageSmoothingEnabled = !1;
          const T = s.width / s.height;
          let ve, we;
          T > 1 ? (ve = d, we = d / T) : (we = d, ve = d * T);
          const Q = (d - ve) / 2,
            Ue = (d - we) / 2;
          _.width = d, _.height = d, b.drawImage(s, Q, Ue, ve, we);
          const yt = b.getImageData(0, 0, d, d);
          ij(yt), b.putImageData(yt, 0, 0), i(yt), c(_.toDataURL())
        };
        setTimeout(() => {
          y().then(() => {
            C(!1)
          })
        }, 100)
      }
    }, [s, d]), e.jsxs("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 14
      },
      children: [r === null && e.jsx(kj, {}), r !== null && e.jsx(Rj, {
        loading: f,
        dataUrl: r,
        templateSize: d
      }), r !== null && e.jsx(Uj, {
        templateSize: d,
        setTemplateSize: m
      }), r !== null && e.jsx(Oj, {
        coords: A,
        setCoords: h,
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
  Qj = "_layout_1c7e5_1",
  Fj = "_container_1c7e5_5",
  zj = "_button_container_1c7e5_11",
  Hj = "_button_1c7e5_11",
  qj = "_end_of_list_button_1c7e5_27",
  st = {
    layout: Qj,
    container: Fj,
    button_container: zj,
    button: Hj,
    end_of_list_button: qj
  },
  Lj = "_template_item_container_1c93x_1",
  Vj = "_template_item_inner_1c93x_12",
  Gj = "_template_item_picked_1c93x_28",
  Xj = "_template_item_rejected_1c93x_43",
  Jj = "_template_item_shadow_1c93x_58",
  Yj = "_template_rank_1c93x_70",
  Wj = "_template_recolors_1c93x_90",
  Kj = "_template_recolors_pixel_1c93x_105",
  Zj = "_template_image_1c93x_112",
  Ve = {
    template_item_container: Lj,
    template_item_inner: Vj,
    template_item_picked: Gj,
    template_item_rejected: Xj,
    template_item_shadow: Jj,
    template_rank: Yj,
    template_recolors: Wj,
    template_recolors_pixel: Kj,
    template_image: Zj
  },
  Gi = ({
    item: n,
    rank: t,
    repaints: s,
    style: a = {}
  }) => {
    const o = g(),
      i = l(d => d.tournament.selectedTemplate),
      r = i && i.id === n.id,
      c = p.useRef(!0);
    return p.useEffect(() => {
      const d = setTimeout(() => {
        c.current = !1
      }, 100);
      return () => {
        clearTimeout(d)
      }
    }, []), e.jsxs("div", {
      className: Ve.template_item_container,
      style: {
        ...a
      },
      onPointerUp: async () => {
        c.current || n.id && n.id !== 0 && o(Ba(n))
      },
      children: [e.jsx("div", {
        className: Ve.template_item_inner,
        children: e.jsx("img", {
          alt: "image",
          className: Ve.template_image,
          src: `${n.url}`
        })
      }), r && n.approved !== !1 && e.jsx("div", {
        className: Ve.template_item_picked,
        children: "Picked"
      }), n.approved === !1 && e.jsx("div", {
        className: Ve.template_item_rejected,
        children: "Rejected"
      }), t && e.jsx("div", {
        className: Ve.template_rank,
        children: t
      }), s !== void 0 && s !== 0 && e.jsx("div", {
        className: Ve.template_item_shadow
      }), s !== void 0 && s !== 0 && e.jsxs("div", {
        className: Ve.template_recolors,
        children: [e.jsx("div", {
          className: Ve.template_recolors_pixel
        }), Rt(s)]
      })]
    })
  },
  $j = () => {
    const n = g(),
      t = p.useRef(null),
      s = l(r => r.tournament.approvedTemplatesListStatus),
      a = l(r => r.tournament.approvedTemplatesListOffset),
      o = l(r => r.tournament.approvedTemplatesListLimit),
      i = l(r => r.tournament.approvedTemplatesListTotal);
    return p.useEffect(() => {}, [s, a, o, i]), a >= i && s !== u.pending ? e.jsx("div", {
      className: st.button_container,
      children: e.jsx("button", {
        className: st.end_of_list_button,
        children: "That's all fren"
      })
    }) : e.jsx("div", {
      className: st.button_container,
      children: e.jsx("button", {
        ref: t,
        disabled: s === u.pending,
        className: st.button,
        onPointerUp: () => {
          n(Fe.getApprovedList({
            offset: a,
            limit: o
          }))
        },
        children: s === u.pending ? "Loading..." : "Load more"
      })
    })
  },
  e0 = () => {
    const n = g(),
      t = l(o => o.tournament.approvedTemplatesListOffset),
      s = l(o => o.tournament.approvedTemplatesListLimit),
      a = l(Zo.selectAll);
    return p.useEffect(() => (n(Fe.getApprovedList({
      offset: t,
      limit: s
    })), () => {
      n(ri())
    }), []), e.jsxs("div", {
      className: st.layout,
      children: [e.jsx("div", {
        className: st.container,
        children: a.map((o, i) => e.jsx(Gi, {
          item: o,
          rank: i + 1,
          repaints: o.repaints,
          approved: !0
        }, o.id))
      }), e.jsx($j, {})]
    })
  },
  t0 = () => {
    const n = g(),
      t = l(Zo.selectAll),
      a = l(o => o.tournament.selectedTemplate) ? 15 : 16;
    return p.useEffect(() => (n(Fe.getRandomList()), () => {
      n(ri())
    }), []), e.jsx("div", {
      className: st.layout,
      children: e.jsx("div", {
        className: st.container,
        children: t.map((o, i) => i + 1 > a ? null : e.jsx(Gi, {
          item: o
        }, o.id))
      })
    })
  },
  n0 = "_round_info_container_1d52c_1",
  s0 = "_title_1d52c_7",
  a0 = "_description_1d52c_12",
  o0 = "_round_status_container_1d52c_17",
  tt = {
    round_info_container: n0,
    title: s0,
    description: a0,
    round_status_container: o0
  },
  i0 = "_round_indicator_mgwmo_1",
  r0 = "_round_indicator_wait_mgwmo_37",
  Xi = {
    round_indicator: i0,
    round_indicator_wait: r0
  },
  c0 = () => e.jsx("div", {
    className: Xi.round_indicator_wait
  }),
  Ji = () => e.jsx("div", {
    className: Xi.round_indicator
  }),
  l0 = () => {
    const n = l($e);
    return l(Hs), n ? e.jsxs("div", {
      className: tt.round_info_container,
      children: [e.jsxs("div", {
        children: [e.jsxs("div", {
          className: tt.title,
          children: ["Top ", Po[n].templateThreshold, " ", "templates will win"]
        }), e.jsx("div", {
          className: tt.description,
          children: "Most active painters gets rewarded"
        })]
      }), e.jsxs("div", {
        className: tt.round_status_container,
        children: [e.jsx(Ji, {}), " on"]
      })]
    }) : e.jsxs("div", {
      className: tt.round_info_container,
      children: [e.jsxs("div", {
        children: [e.jsx("div", {
          className: tt.title,
          children: "Tournament finished"
        }), e.jsx("div", {
          className: tt.description,
          children: "Waiting for results"
        })]
      }), e.jsxs("div", {
        className: tt.round_status_container,
        children: [e.jsx(c0, {}), " Soon"]
      })]
    })
  },
  d0 = () => {
    const n = l($e),
      t = l(s => s.tournament.periodsStatus);
    return e.jsxs("div", {
      children: [e.jsx(l0, {}), n && t === u.fulfilled && e.jsx(e0, {}), !n && t === u.fulfilled && e.jsx(t0, {})]
    })
  },
  u0 = "_soon_la5q2_1",
  p0 = "_active_round_instruction_la5q2_11",
  m0 = "_not_active_round_instruction_la5q2_19",
  A0 = "_round_container_la5q2_25",
  h0 = "_round_title_la5q2_33",
  g0 = "_round_title_text_la5q2_38",
  _0 = "_round_indicator_la5q2_43",
  f0 = "_round_status_success_la5q2_49",
  x0 = "_round_status_fail_la5q2_60",
  y0 = "_success_la5q2_71",
  v0 = "_fail_la5q2_75",
  w0 = "_gray_la5q2_79",
  b0 = "_round_main_info_la5q2_83",
  j0 = "_round_image_container_la5q2_89",
  P0 = "_round_image_la5q2_89",
  C0 = "_round_lines_container_la5q2_103",
  N0 = "_round_line_la5q2_103",
  S0 = "_divider_la5q2_117",
  I0 = "_pixels_number_la5q2_124",
  T0 = "_pixel_la5q2_124",
  E0 = "_past_rounds_la5q2_136",
  B0 = "_past_rounds_divider_la5q2_145",
  z = {
    soon: u0,
    active_round_instruction: p0,
    not_active_round_instruction: m0,
    round_container: A0,
    round_title: h0,
    round_title_text: g0,
    round_indicator: _0,
    round_status_success: f0,
    round_status_fail: x0,
    success: y0,
    fail: v0,
    gray: w0,
    round_main_info: b0,
    round_image_container: j0,
    round_image: P0,
    round_lines_container: C0,
    round_line: N0,
    divider: S0,
    pixels_number: I0,
    pixel: T0,
    past_rounds: E0,
    past_rounds_divider: B0
  },
  D0 = ({
    result: n
  }) => {
    const t = g(),
      s = l($e);
    if (!n) return null;
    const a = n.round_id,
      o = n.repaints_to_win - n.repaints,
      i = n.rank <= n.rank_to_win && n.rank !== 0,
      r = n.template,
      c = r.rank;
    let d = r.lastSurvivalRank;
    a === 1 && (d = 512), a === 2 && (d = 256), a === 3 && (d = 128);
    const m = c <= d,
      A = r.lastSurvivalRepaints - r.repaints,
      h = i && m,
      f = s && s === a,
      C = f ? "Winning" : "Won",
      y = f ? "😔 Losing" : "😔 Lost";
    return e.jsxs("div", {
      className: z.round_container,
      onPointerUp: () => {
        r && r.id && r.id !== 0 && t(Ba(r))
      },
      children: [e.jsxs("div", {
        className: z.round_title,
        children: [e.jsxs("div", {
          className: z.round_title_text,
          children: ["Round ", a, " ", f ? "is on" : "has ended"]
        }), e.jsx("div", {
          className: z.round_indicator,
          children: f && e.jsx(Ji, {})
        }), h && e.jsx("div", {
          className: R(z.round_status_success, z.success),
          children: C
        }), !h && e.jsx("div", {
          className: R(z.round_status_fail, z.fail),
          children: y
        })]
      }), e.jsxs("div", {
        className: z.round_main_info,
        children: [e.jsx("div", {
          className: z.round_image_container,
          children: e.jsx("img", {
            alt: "image",
            className: z.round_image,
            src: n.template.url
          })
        }), e.jsxs("div", {
          className: z.round_lines_container,
          children: [e.jsxs("div", {
            className: R(z.round_line),
            children: [e.jsx("div", {
              className: R(z.gray),
              children: "Template rank:"
            }), e.jsxs("div", {
              className: R(m ? z.success : z.fail),
              children: ["👑 ", c]
            })]
          }), e.jsxs("div", {
            className: z.round_line,
            children: [e.jsx("div", {
              className: R(z.gray),
              children: "Pixels to win"
            }), e.jsx("div", {
              children: m ? "In the zone" : Rt(A)
            })]
          }), e.jsx("div", {
            className: z.divider
          }), e.jsxs("div", {
            className: z.round_line,
            children: [e.jsx("div", {
              className: R(z.gray),
              children: "Your position:"
            }), e.jsx("div", {
              className: R(i ? z.success : z.fail),
              children: n.rank
            })]
          }), e.jsxs("div", {
            className: z.round_line,
            children: [e.jsx("div", {
              className: R(z.gray),
              children: "Pixels to win"
            }), e.jsxs("div", {
              className: z.pixels_number,
              children: [e.jsx("div", {
                className: z.pixel
              }), e.jsx("div", {
                children: i ? "In the zone" : Rt(o)
              })]
            })]
          })]
        })]
      })]
    })
  },
  k0 = () => {
    const n = l(ep),
      t = l(Hs);
    return n ? e.jsxs(ae.Fragment, {
      children: [e.jsxs("div", {
        className: z.past_rounds,
        children: [e.jsx("div", {
          className: z.past_rounds_divider
        }), e.jsx("div", {
          children: "All rounds"
        }), e.jsx("div", {
          className: z.past_rounds_divider
        })]
      }), n.map(s => t && t === s.round_id ? null : e.jsx(D0, {
        result: s
      }, s.round_id))]
    }) : null
  },
  R0 = () => {
    const n = g(),
      t = l(s => s.tournament.resultsStatus);
    return p.useEffect(() => {
      t === u.idle && n(Fe.getResults())
    }, [t]), e.jsx("div", {
      children: e.jsx(k0, {})
    })
  },
  U0 = () => {
    const n = l(t => t.tournament.activeTab);
    return e.jsxs("div", {
      className: oj.info_layout,
      children: [n === kt.create && e.jsx(Mj, {}), n === kt.main && e.jsx(d0, {}), n === kt.result && e.jsx(R0, {})]
    })
  },
  O0 = () => e.jsxs(ae.Fragment, {
    children: [e.jsx(Gu, {}), e.jsx(U0, {})]
  }),
  M0 = "/assets/bg-BNfFdtGI.png",
  Q0 = "data:image/png;base64,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",
  F0 = "/assets/rays-uhfpLlt6.png",
  z0 = "/assets/rays2-Ce7ymw8-.png",
  H0 = "_container_lc1md_1",
  q0 = "_title_lc1md_8",
  L0 = "_table_container_lc1md_13",
  V0 = "_table_row_lc1md_19",
  G0 = "_button_lc1md_26",
  X0 = "_active_row_lc1md_50",
  J0 = "_row_title_lc1md_50",
  ca = {
    container: H0,
    title: q0,
    table_container: L0,
    table_row: V0,
    button: G0,
    active_row: X0,
    row_title: J0
  },
  Y0 = () => {
    const n = g(),
      t = l(a => a.tournament.showTournamentDetailsPopup),
      s = a => {
        n(ai(a))
      };
    return e.jsx(Ht, {
      show: t,
      setShow: s,
      children: e.jsxs("div", {
        className: ca.container,
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
            className: ca.gold,
            children: "Golden Pixel"
          }), "."]
        }), e.jsx("p", {
          children: "Details on the awards coming soon."
        }), e.jsx("button", {
          className: ca.button,
          onPointerUp: () => s(!1),
          children: "That's so wise!"
        })]
      })
    })
  },
  W0 = "_layout_17ca7_1",
  K0 = "_container_17ca7_6",
  Z0 = "_close_button_17ca7_20",
  $0 = "_title_container_17ca7_28",
  eP = "_title_17ca7_28",
  tP = "_image_container_17ca7_39",
  nP = "_image_17ca7_39",
  sP = "_image_placeholder_17ca7_53",
  aP = "_info_container_17ca7_60",
  oP = "_info_row_17ca7_66",
  iP = "_info_title_17ca7_71",
  rP = "_info_value_blue_17ca7_75",
  cP = "_info_value_white_17ca7_80",
  lP = "_buttons_container_17ca7_84",
  dP = "_button_17ca7_84",
  uP = "_not_button_17ca7_100",
  pP = "_button_copy_17ca7_111",
  G = {
    layout: W0,
    container: K0,
    close_button: Z0,
    title_container: $0,
    title: eP,
    image_container: tP,
    image: nP,
    image_placeholder: sP,
    info_container: aP,
    info_row: oP,
    info_title: iP,
    info_value_blue: rP,
    info_value_white: cP,
    buttons_container: lP,
    button: dP,
    not_button: uP,
    button_copy: pP
  },
  mP = ({
    template: n,
    style: t = {},
    onPointerUp: s = () => {}
  }) => {
    const a = g(),
      i = l(r => r.tournament.selectTemplateStatus) === u.pending;
    return e.jsx("button", {
      disabled: i,
      className: G.button,
      style: {
        ...t
      },
      onPointerUp: async () => {
        try {
          if (i) return;
          (await a(Fe.selectTemplate({
            id: n.id
          }))).meta.requestStatus === u.fulfilled && a(ci(n))
        } catch (r) {
          console.log(r, "error when selecting template")
        } finally {
          s()
        }
      },
      children: "Select Template"
    })
  },
  AP = () => {
    const n = l(r => r.tournament.templateDataInfoPopup),
      t = l(r => r.user.user),
      s = l(r => r.tournament.selectedTemplate),
      a = n.id === t.id,
      o = s !== null && n.id === s.id,
      i = l($e);
    return a ? e.jsx("div", {
      className: G.not_button,
      children: "Your template. Cute!"
    }) : o ? e.jsxs("div", {
      className: G.not_button,
      children: ["Selected template ", e.jsx(B, {
        size: 18,
        children: ""
      })]
    }) : i && s ? null : e.jsx(mP, {
      template: n
    })
  },
  hP = () => {
    const n = g(),
      t = Y(),
      s = l(o => o.tournament.showTemplateInfoPopup),
      a = l(o => o.tournament.templateDataInfoPopup);
    return l($e), !a || !s ? null : Ke.createPortal(e.jsx(ct, {
      onPointerUp: () => n(sa()),
      show: s,
      children: e.jsx("div", {
        className: G.layout,
        children: e.jsxs("div", {
          className: G.container,
          onPointerUp: o => {
            o.stopPropagation()
          },
          children: [e.jsx("div", {
            className: G.close_button,
            onPointerUp: () => {
              n(sa())
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
            children: [e.jsx(AP, {}), e.jsx(Gt, {
              url: `${gt}?startapp=f${a.id}_t`,
              className: G.button_copy,
              text: "Copy template link"
            })]
          }), e.jsxs("div", {
            className: G.info_container,
            children: [e.jsxs("div", {
              className: G.info_row,
              onPointerUp: () => {
                t.push("/"), n(sa()), w.viewport.viewport.animate({
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
  gP = "_layout_20dlh_1",
  _P = "_container_20dlh_10",
  fP = "_star_20dlh_14",
  xP = "_star_animation_20dlh_21",
  yP = "_move_20dlh_1",
  Ts = {
    layout: gP,
    container: _P,
    star: fP,
    star_animation: xP,
    move: yP
  },
  vP = "data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3clinearGradient%20id='grad1'%20x1='0%25'%20y1='0%25'%20x2='0%25'%20y2='100%25'%3e%3cstop%20offset='0%25'%20style='stop-color:%23efce32;stop-opacity:1'%20/%3e%3c!--%20более%20светлый%20желтый%20--%3e%3cstop%20offset='100%25'%20style='stop-color:%23f7752e;stop-opacity:1'%20/%3e%3c!--%20более%20темный%20желтый%20--%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M5%200C2.23858%200%200%202.23858%200%205V27C0%2029.7614%202.23858%2032%205%2032H27C29.7614%2032%2032%2029.7614%2032%2027V5C32%202.23858%2029.7614%200%2027%200H5ZM21.4261%2010.5739H10.5739V21.4261H21.4261V10.5739Z'%20fill='url(%23grad1)'/%3e%3c/svg%3e",
  wP = ({
    size: n,
    style: t = {},
    animation: s = !1
  }) => e.jsx("img", {
    alt: "image",
    src: vP,
    className: s ? Ts.star_animation : Ts.star,
    style: {
      width: n,
      height: n,
      ...t
    }
  }),
  bP = p.memo(() => {
    const n = Array.from(Array(30));
    return e.jsx("div", {
      className: Ts.layout,
      children: e.jsx("div", {
        className: Ts.container,
        children: n.map((t, s) => {
          const a = L(2, 6);
          return e.jsx(wP, {
            size: a,
            animation: !0,
            style: {
              animationDelay: `-${s*300}ms`,
              transform: `translate(${L(-80,-170)*(s%2===1?1:-1)}px, ${L(-100,100)}px)`
            }
          }, s)
        })
      })
    })
  }, () => !1),
  jP = "_container_tuzgg_1",
  PP = "_column_tuzgg_9",
  CP = "_column_rev_tuzgg_17",
  NP = "_title_tuzgg_26",
  SP = "_table_container_tuzgg_32",
  IP = "_table_row_tuzgg_38",
  TP = "_button_tuzgg_45",
  EP = "_value_tuzgg_52",
  BP = "_notpixel_icon_tuzgg_58",
  DP = "_active_row_tuzgg_74",
  kP = "_row_title_tuzgg_74",
  Ae = {
    container: jP,
    column: PP,
    column_rev: CP,
    title: NP,
    table_container: SP,
    table_row: IP,
    button: TP,
    value: EP,
    notpixel_icon: BP,
    active_row: DP,
    row_title: kP
  },
  ro = "data:image/png;base64,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",
  RP = [{
    name: "Total $PX for painters",
    value: 512e7,
    image: he
  }, {
    name: "$PX for template owner",
    value: 128e6,
    image: he
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
  UP = [{
    name: "Template owner",
    value: 128e6,
    image: he
  }, {
    name: "Top 8",
    value: 64e6,
    image: he
  }, {
    name: "9-24",
    value: 32e6,
    image: he
  }, {
    name: "25-56",
    value: 16e6,
    image: he
  }, {
    name: "57-120",
    value: 8e6,
    image: he
  }, {
    name: "121-248",
    value: 4e6,
    image: he
  }, {
    name: "249-504",
    value: 2e6,
    image: he
  }, {
    name: "505-1016",
    value: 1e6,
    image: he
  }, {
    name: "1017-2040",
    value: 5e5,
    image: he
  }, {
    name: "2041-4088",
    value: 25e4,
    image: he
  }, {
    name: "4089-8184",
    value: 125e3,
    image: he
  }],
  OP = () => {
    const n = g(),
      t = l(a => a.tournament.showRoundRewardsPopup),
      s = a => {
        n(oi(a))
      };
    return e.jsx(Ht, {
      show: t,
      setShow: s,
      children: e.jsxs("div", {
        className: Ae.container,
        children: [e.jsx("img", {
          alt: "column",
          src: ro,
          className: Ae.column
        }), e.jsx("img", {
          alt: "column",
          src: ro,
          className: Ae.column_rev
        }), e.jsx("div", {
          className: Ae.title,
          children: "Round 10"
        }), e.jsx("div", {
          className: Ae.table_container,
          children: RP.map((a, o) => e.jsxs("div", {
            className: Ae.table_row,
            children: [e.jsx("div", {
              children: a.name
            }), e.jsxs("div", {
              className: Ae.value,
              children: [Ie({
                num: a.value
              }), a.image && e.jsx("img", {
                alt: "coin",
                src: a.image,
                className: Ae.notpixel_icon
              })]
            })]
          }, o))
        }), e.jsx("div", {
          className: Ae.title,
          children: "Rewards in templates"
        }), e.jsx("div", {
          className: Ae.table_container,
          children: UP.map((a, o) => e.jsxs("div", {
            className: Ae.table_row,
            children: [e.jsx("div", {
              children: a.name
            }), e.jsxs("div", {
              className: Ae.value,
              children: [Ie({
                num: a.value
              }), a.image && e.jsx("img", {
                alt: "coin",
                src: a.image,
                className: Ae.notpixel_icon
              })]
            })]
          }, o))
        }), e.jsx("button", {
          className: Ae.button,
          onPointerUp: () => s(!1),
          children: "That's so wise!"
        })]
      })
    })
  },
  MP = "_button_1wjsf_1",
  QP = "_icon_1wjsf_20",
  co = {
    button: MP,
    icon: QP
  },
  FP = () => {
    const n = g(),
      s = l(zt) ? "calc(12px + var(--safe-area-top))" : "calc(12px + var(--header-height))";
    return e.jsxs("button", {
      className: co.button,
      style: {
        top: s
      },
      onPointerUp: () => {
        n(oi(!0))
      },
      children: [e.jsx("span", {
        children: "Round 10"
      }), " ", e.jsx("span", {
        className: `telegram_icons ${co.icon}`,
        children: ""
      })]
    })
  },
  zP = () => {
    const n = g();
    return e.jsxs($, {
      children: [e.jsx(FP, {}), e.jsxs("div", {
        className: Se.general_info_container,
        style: {
          backgroundImage: `url(${M0})`,
          backgroundPosition: "top center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          marginTop: -20
        },
        children: [e.jsxs("div", {
          className: Se.img_container,
          children: [e.jsx("img", {
            alt: "img",
            className: Se.image_cup,
            src: Q0
          }), e.jsx("div", {
            className: Se.image_glow_container,
            children: e.jsx("img", {
              alt: "img",
              className: Se.image_glow,
              src: F0
            })
          }), e.jsx("div", {
            className: Se.image_glow_container,
            children: e.jsx("img", {
              alt: "img",
              className: Se.image_glow_reverse,
              src: z0
            })
          }), e.jsx(bP, {})]
        }), e.jsx("h1", {
          className: Se.title,
          children: "Telegram Battle"
        }), e.jsxs("div", {
          className: Se.description_container,
          children: [e.jsxs("span", {
            className: Se.description,
            children: [e.jsx("span", {
              children: " Paint templates to win "
            }), " ", e.jsx("span", {
              className: Se.gold,
              children: "Golden Pixels"
            }), " ", e.jsx("br", {}), e.jsx(Lt, {
              onPointerUp: t => {
                t.stopPropagation(), n(ai(!0))
              },
              children: "How it works"
            })]
          }), e.jsx(Y0, {}), e.jsx(OP, {})]
        })]
      }), e.jsx(O0, {}), e.jsx(hP, {})]
    })
  },
  HP = "_container_16f9l_1",
  qP = "_image_container_16f9l_9",
  LP = "_image_16f9l_9",
  VP = "_title_container_16f9l_18",
  GP = "_text_container_16f9l_27",
  XP = "_title_16f9l_18",
  JP = "_gray_16f9l_39",
  YP = "_bold_16f9l_43",
  WP = "_input_16f9l_47",
  KP = "_catalog_container_16f9l_72",
  ZP = "_catalog_title_16f9l_77",
  $P = "_catalog_items_container_16f9l_82",
  eC = "_catalog_item_16f9l_82",
  tC = "_catalog_item_image_container_16f9l_101",
  nC = "_catalog_item_image_16f9l_101",
  sC = "_button_container_16f9l_110",
  aC = "_button_16f9l_110",
  oC = "_wrong_helper_text_16f9l_125",
  iC = "_wrong_button_16f9l_130",
  rC = "_wrong_button_text2_16f9l_143",
  S = {
    container: HP,
    image_container: qP,
    image: LP,
    title_container: VP,
    text_container: GP,
    title: XP,
    gray: JP,
    bold: YP,
    input: WP,
    catalog_container: KP,
    catalog_title: ZP,
    catalog_items_container: $P,
    catalog_item: eC,
    catalog_item_image_container: tC,
    catalog_item_image: nC,
    button_container: sC,
    button: aC,
    wrong_helper_text: oC,
    wrong_button: iC,
    wrong_button_text2: rC
  },
  cC = "/assets/box_1-CzUKXu07.gif",
  lC = "/assets/box_2-wR9cQS7q.gif",
  dC = "/assets/box_3-g_PL1kKM.gif",
  uC = "/assets/dogs-D0jtZggB.gif",
  pC = "/assets/secret_word-BTKB1fAO.gif",
  mC = "/assets/cube_youtube_2-BqessN1a.gif",
  AC = "/assets/cube_twitter_3_m_-Bxf2Qx_E.gif",
  Un = {
    Ghost: "Ghost",
    Mythical: "Mythical",
    Magical: "Magical",
    Dogs: "Dogs"
  },
  hC = () => {
    const n = g(),
      [t, s] = p.useState(""),
      [a, o] = p.useState(!1),
      [i, r] = p.useState(!1),
      [c, d] = p.useState({
        count: 0,
        limit: 1e4
      }),
      [m, A] = p.useState({
        count: 0,
        limit: 1e4
      }),
      [h, f] = p.useState({
        count: 0,
        limit: 1
      }),
      [C, y] = p.useState({
        count: 0,
        limit: 5e3
      });
    return p.useEffect(() => {
      let _ = null;
      return i && (_ = setTimeout(() => {
        r(!1)
      }, 5e3)), () => {
        clearTimeout(_)
      }
    }, [i]), p.useEffect(() => {
      (async () => {
        const b = await F.getSecretStats();
        b.status === 200 && b.data && b.data.forEach(T => {
          T.group_name === Un.Ghost && d({
            count: T.usage_count,
            limit: T.limit
          }), T.group_name === Un.Mythical && A({
            count: T.usage_count,
            limit: T.limit
          }), T.group_name === Un.Magical && f({
            count: T.usage_count,
            limit: T.limit
          }), T.group_name === Un.Dogs && y({
            count: T.usage_count,
            limit: T.limit
          })
        })
      })()
    }, []), e.jsx($, {
      children: e.jsxs("div", {
        className: S.container,
        children: [e.jsx("div", {
          className: S.image_container,
          children: e.jsx("img", {
            alt: "image",
            className: S.image,
            src: pC
          })
        }), e.jsxs("div", {
          className: S.title_container,
          children: [e.jsxs("div", {
            className: S.text_container,
            children: [e.jsx("span", {
              className: R(S.bold, S.title),
              children: "Discover the Secrets"
            }), e.jsx("span", {
              className: S.gray,
              children: "Got secret word?"
            })]
          }), e.jsx("input", {
            className: S.input,
            placeholder: "Enter your word here, fren",
            value: t,
            onChange: _ => {
              let b = _.target.value;
              s(b)
            }
          })]
        }), e.jsxs("div", {
          className: S.catalog_container,
          children: [e.jsx("div", {
            className: R(S.catalog_title, S.bold),
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
                  src: cC
                })
              }), e.jsx("div", {
                className: R(S.bold),
                children: "Ghost's secret"
              }), e.jsxs("div", {
                className: R(S.gray),
                children: [Ie({
                  num: 1e4
                }), "/", Ie({
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
                  src: lC
                })
              }), e.jsx("div", {
                className: R(S.bold),
                children: "Mythical secret"
              }), e.jsxs("div", {
                className: R(S.gray),
                children: [Ie({
                  num: m.count
                }), "/", Ie({
                  num: m.limit
                })]
              })]
            }), e.jsxs("div", {
              className: S.catalog_item,
              children: [e.jsx("div", {
                className: S.catalog_item_image_container,
                children: e.jsx("img", {
                  alt: "item_image",
                  className: S.catalog_item_image,
                  src: uC
                })
              }), e.jsx("div", {
                className: R(S.bold),
                children: "Dogs secret"
              }), e.jsxs("div", {
                className: R(S.gray),
                children: [Ie({
                  num: C.count
                }), "/", Ie({
                  num: C.limit
                })]
              })]
            }), e.jsxs("div", {
              className: S.catalog_item,
              children: [e.jsx("div", {
                className: S.catalog_item_image_container,
                children: e.jsx("img", {
                  alt: "item_image",
                  className: S.catalog_item_image,
                  src: dC
                })
              }), e.jsx("div", {
                className: R(S.bold),
                children: "Magical secret"
              }), e.jsxs("div", {
                className: R(S.gray),
                children: [h.count, "/", h.limit]
              })]
            }), e.jsxs("div", {
              className: S.catalog_item,
              children: [e.jsx("div", {
                className: S.catalog_item_image_container,
                children: e.jsx("img", {
                  alt: "item_image",
                  className: S.catalog_item_image,
                  src: mC
                })
              }), e.jsx("div", {
                className: R(S.bold),
                children: "Y secrets"
              }), e.jsx("div", {
                className: R(S.gray),
                children: "Daily"
              })]
            }), e.jsxs("div", {
              className: S.catalog_item,
              children: [e.jsx("div", {
                className: S.catalog_item_image_container,
                children: e.jsx("img", {
                  alt: "item_image",
                  className: S.catalog_item_image,
                  src: AC
                })
              }), e.jsx("div", {
                className: R(S.bold),
                children: "X secrets"
              }), e.jsx("div", {
                className: R(S.gray),
                children: "Daily"
              })]
            })]
          })]
        }), e.jsxs("div", {
          className: S.button_container,
          children: [!i && e.jsx("button", {
            disabled: a,
            className: S.button,
            onPointerUp: async () => {
              o(!0);
              try {
                const _ = await F.checkSecret({
                  key: t
                });
                if (_.status === 200 && _.data.secretWord.success) {
                  n(q({
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
                o(!1)
              }
            },
            children: "Check my word"
          }), i && e.jsx("span", {
            className: R(S.gray, S.wrong_helper_text),
            children: "5s to try again"
          }), i && e.jsxs("button", {
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
  nt = {
    ratings: "/ratings",
    stars: "/stars",
    mining: "/claiming",
    template: "/template",
    history: "/history",
    my_squad: "/my-squad",
    my_profile: "/my-profile"
  },
  gC = Object.values(nt),
  _C = () => e.jsx(ja, {
    children: e.jsxs(hr, {
      children: [e.jsx(X, {
        path: "/welcome",
        children: e.jsx(jf, {})
      }), e.jsx(X, {
        path: "/airdrop",
        children: e.jsx(Vb, {})
      }), e.jsx(X, {
        path: "/invite-frens",
        children: e.jsx(lx, {})
      }), e.jsx(X, {
        path: nt.stars,
        children: e.jsx(nd, {})
      }), e.jsx(X, {
        path: "/info",
        children: e.jsx(cd, {})
      }), e.jsx(X, {
        path: nt.my_squad,
        children: e.jsx(sb, {})
      }), e.jsx(X, {
        path: nt.my_profile,
        children: e.jsx(b1, {})
      }), e.jsx(X, {
        path: "/rules",
        children: e.jsx(nf, {})
      }), e.jsx(X, {
        path: "/terms",
        children: e.jsx(ud, {})
      }), e.jsx(X, {
        path: "/stats",
        children: e.jsx(Sx, {})
      }), e.jsx(X, {
        path: "/privacy",
        children: e.jsx(Ad, {})
      }), e.jsx(X, {
        path: "/secrets",
        children: e.jsx(hC, {})
      }), e.jsx(X, {
        path: nt.mining,
        children: e.jsx(UA, {})
      }), e.jsx(X, {
        path: "/ratings/awards",
        children: e.jsx(lf, {})
      }), e.jsx(X, {
        path: nt.ratings,
        children: e.jsx(Th, {})
      }), e.jsx(X, {
        path: "/daily",
        children: e.jsx(Ly, {})
      }), e.jsx(X, {
        path: nt.history,
        children: e.jsx(W_, {})
      }), e.jsx(X, {
        path: "/template/create",
        children: e.jsx(db, {})
      }), e.jsx(X, {
        path: nt.template,
        children: e.jsx(jw, {})
      }), e.jsx(X, {
        path: "/tournament",
        children: e.jsx(zP, {})
      }), e.jsx(X, {
        path: "/energy-over",
        children: e.jsx(Xx, {})
      }), e.jsx(X, {
        path: "/open-league",
        children: e.jsx(Tf, {})
      }), e.jsx(X, {
        path: "/pay-support",
        children: e.jsx(Uf, {})
      }), e.jsx(X, {
        path: "/",
        children: e.jsx(w_, {})
      })]
    })
  }),
  fC = "_layout_1djp8_1",
  xC = "_loading_container_1djp8_8",
  yC = "_image_container_1djp8_20",
  vC = "_image_1djp8_20",
  wC = "_text_1djp8_29",
  nn = {
    layout: fC,
    loading_container: xC,
    image_container: yC,
    image: vC,
    text: wC
  },
  bC = "_buttons_container_rjvnl_1",
  jC = "_group_rjvnl_8",
  PC = "_left_rjvnl_15",
  CC = "_middle_rjvnl_21",
  NC = "_right_rjvnl_29",
  SC = "_number_rjvnl_36",
  IC = "_button_rjvnl_1",
  TC = "_ratings_button_rjvnl_55",
  EC = "_stars_button_rjvnl_62",
  BC = "_shop_button_rjvnl_70",
  DC = "_burger_button_rjvnl_79",
  kC = "_relative_button_rjvnl_89",
  RC = "_telegram_button_rjvnl_116",
  UC = "_button_img_rjvnl_124",
  OC = "_avatar_img_rjvnl_129",
  MC = "_open_menu_button_rjvnl_134",
  QC = "_open_menu_button_image_rjvnl_144",
  FC = "_my_pixels_amount_rjvnl_149",
  zC = "_header_content_rjvnl_154",
  _e = {
    buttons_container: bC,
    group: jC,
    left: PC,
    middle: CC,
    right: NC,
    number: SC,
    button: IC,
    ratings_button: TC,
    stars_button: EC,
    shop_button: BC,
    burger_button: DC,
    relative_button: kC,
    telegram_button: RC,
    button_img: UC,
    avatar_img: OC,
    open_menu_button: MC,
    open_menu_button_image: QC,
    my_pixels_amount: FC,
    header_content: zC
  },
  HC = () => l(Re) ? null : e.jsxs("button", {
    className: `${_e.button} ${_e.telegram_button}`,
    onPointerUp: () => {
      pe("https://t.me/notpixel")
    },
    children: [e.jsx("img", {
      alt: "tg_logo",
      src: jn
    }), "Go to app for paint"]
  }),
  Ma = n => {
    const t = Es(),
      s = Y();
    return () => {
      t.pathname === n ? s.push("/") : s.push(n)
    }
  },
  qC = () => {
    const n = Ma("/claiming"),
      t = l(a => a.user.pixelCoins);
    return l(Re) ? e.jsxs("button", {
      className: `${_e.button}`,
      onPointerUp: n,
      children: [e.jsx(An, {
        size: 16,
        className: _e.button_img
      }), e.jsx("div", {
        style: {
          transform: "translateY(1px)"
        },
        children: e.jsx(Cn, {
          number: Math.max(Number(t.toFixed(0)), 0)
        })
      })]
    }) : null
  },
  LC = "data:image/svg+xml,%3c?xml%20version='1.0'%20?%3e%3csvg%20viewBox='0%200%2032%2032'%20xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:none;}%3c/style%3e%3c/defs%3e%3ctitle/%3e%3cg%20fill='%23e0dd8e'%20data-name='Layer%202'%20id='Layer_2'%3e%3cpath%20d='M24,29H8a3,3,0,0,1-3-3V16a1,1,0,0,1,2,0V26a1,1,0,0,0,1,1H24a1,1,0,0,0,1-1V16a1,1,0,0,1,2,0V26A3,3,0,0,1,24,29Z'/%3e%3cpath%20d='M15,29H10a1,1,0,0,1-1-1V22a3,3,0,0,1,3-3h1a3,3,0,0,1,3,3v6A1,1,0,0,1,15,29Zm-4-2h3V22a1,1,0,0,0-1-1H12a1,1,0,0,0-1,1Z'/%3e%3cpath%20d='M25,17a4,4,0,0,1-4-4,1,1,0,0,1,2,0,2,2,0,0,0,4,0v-.76L24.38,7H7.62L5,12.24V13a2,2,0,0,0,4,0,1,1,0,0,1,2,0,4,4,0,0,1-8,0V12a1,1,0,0,1,.11-.45l3-6A1,1,0,0,1,7,5H25a1,1,0,0,1,.89.55l3,6A1,1,0,0,1,29,12v1A4,4,0,0,1,25,17Z'/%3e%3cpath%20d='M13,17a4,4,0,0,1-4-4,1,1,0,0,1,2,0,2,2,0,0,0,4,0,1,1,0,0,1,2,0A4,4,0,0,1,13,17Z'/%3e%3cpath%20d='M19,17a4,4,0,0,1-4-4,1,1,0,0,1,2,0,2,2,0,0,0,4,0,1,1,0,0,1,2,0A4,4,0,0,1,19,17Z'/%3e%3cpath%20d='M22,22H19a1,1,0,0,1,0-2h3a1,1,0,0,1,0,2Z'/%3e%3c/g%3e%3cg%20id='frame'%3e%3crect%20class='cls-1'%20height='32'%20width='32'/%3e%3c/g%3e%3c/svg%3e",
  VC = () => {
    const n = Ma("/stars");
    return l(Re) ? e.jsx("button", {
      className: `${_e.shop_button}`,
      onPointerUp: n,
      children: e.jsx("img", {
        alt: "icon",
        src: LC,
        style: {
          width: 24,
          height: 24
        }
      })
    }) : null
  },
  GC = () => {
    const n = Ma("/invite-frens");
    return l(Re) ? e.jsx("button", {
      className: `${_e.stars_button}`,
      onPointerUp: n,
      children: e.jsx(B, {
        size: 20,
        children: ""
      })
    }) : null
  },
  XC = () => {
    const n = g(),
      t = l(hi),
      s = () => {
        if (t) {
          n(At(!1));
          return
        }
        n(At(!0))
      };
    return e.jsx("button", {
      className: _e.burger_button,
      onPointerUp: s,
      children: e.jsx(B, {
        size: 28,
        children: ""
      })
    })
  },
  lo = ae.memo(() => e.jsxs("div", {
    className: _e.buttons_container,
    children: [e.jsxs("div", {
      className: `${_e.group} ${_e.left}`,
      children: [e.jsx(XC, {}), e.jsx(GC, {})]
    }), e.jsx("div", {
      className: `${_e.group} ${_e.middle}`,
      children: e.jsx(qC, {})
    }), e.jsxs("div", {
      className: `${_e.group} ${_e.right}`,
      children: [e.jsx(HC, {}), e.jsx(VC, {})]
    })]
  })),
  uo = {
    bronze: je.bronze,
    silver: je.silver,
    gold: je.gold,
    platinum: je.platinum,
    diamond: je.diamond
  },
  po = () => {
    const n = l(s => s.user.user),
      t = [je.league];
    return n !== null && uo.hasOwnProperty(n.league) ? (t.push(uo[n.league]), e.jsx("div", {
      className: t.join(" ")
    })) : null
  },
  JC = () => {
    const n = l(zt),
      t = Es(),
      s = l(Os),
      a = l(Ms);
    l($c);
    const o = `calc(16px + ${s.top+a.top}px)`;
    return n ? n && t.pathname === "/" ? e.jsx("div", {
      className: je.header_bottom_container,
      style: {
        top: o
      },
      children: e.jsx("div", {
        className: je.header_bottom,
        children: e.jsxs("div", {
          className: je.header_content,
          children: [e.jsx(po, {}), e.jsx(lo, {})]
        })
      })
    }) : null : e.jsx("div", {
      className: je.header,
      children: e.jsxs("div", {
        className: je.header_content,
        children: [e.jsx(po, {}), e.jsx(lo, {})]
      })
    })
  };
let mo = "/";
const YC = () => {
    let n = Es(),
      t = Y();
    return p.useEffect(() => {
      const s = () => {
        gC.includes(n.pathname) ? t.push("/") : t.goBack()
      };
      return window.Telegram.WebApp.onEvent("backButtonClicked", s), n.pathname !== mo && (n.pathname === "/" ? window.Telegram.WebApp.BackButton.hide() : window.Telegram.WebApp.BackButton.show(), mo = n.pathname), () => {
        window.Telegram.WebApp.offEvent("backButtonClicked", s)
      }
    }, [n, t]), null
  },
  WC = "_layout_ppin4_1",
  KC = {
    layout: WC
  },
  ZC = () => {
    const n = p.useRef(),
      t = l(a => a.progress.command),
      s = l(a => a.progress.counter);
    return p.useEffect(() => {
      let a = null,
        o = 0,
        i = null,
        r = 2e3,
        c = 80,
        d = null,
        m = null;
      const A = h => {
        a === null && (a = h);
        const C = (h - a) / r;
        i !== h && (o = Math.min(C * c, c), n.current && (n.current.style.width = `${o}%`)), i = h, o < c && (d = requestAnimationFrame(A))
      };
      return t === Ce.start && (d = requestAnimationFrame(A), n.current && (n.current.style.display = "block")), t === Ce.finish && (n.current && (n.current.style.width = "100%"), m = setTimeout(() => {
        n.current && (n.current.style.display = "none", n.current.style.width = "0")
      }, 300)), () => {
        d !== null && cancelAnimationFrame(d), m !== null && clearTimeout(m)
      }
    }, [t, s]), Ke.createPortal(e.jsx("div", {
      ref: n,
      className: KC.layout
    }), document.body)
  },
  $C = "_container_1cfz6_1",
  eN = "_header_1cfz6_9",
  tN = "_close_1cfz6_20",
  nN = "_title_1cfz6_32",
  sN = "_body_1cfz6_37",
  aN = "_image_container_1cfz6_51",
  oN = "_image_1cfz6_51",
  iN = "_content_container_1cfz6_62",
  rN = "_description_container_1cfz6_70",
  cN = "_description_item_1cfz6_77",
  lN = "_amount_selector_container_1cfz6_84",
  dN = "_amount_selector_button_1cfz6_90",
  uN = "_amount_selector_count_1cfz6_103",
  pN = "_button_container_1cfz6_114",
  mN = "_crypto_button_container_1cfz6_120",
  AN = "_error_1cfz6_134",
  hN = "_not_available_1cfz6_141",
  gN = "_button_1cfz6_114",
  _N = "_star_color_1cfz6_167",
  fN = "_tokens_selector_1cfz6_173",
  xN = "_tokens_title_1cfz6_178",
  yN = "_connect_wallet_text_title_1cfz6_185",
  vN = "_tokens_container_1cfz6_194",
  wN = "_token_item_1cfz6_201",
  bN = "_token_image_container_1cfz6_212",
  jN = "_token_image_1cfz6_212",
  PN = "_sale_box_1cfz6_222",
  CN = "_sale_text_1cfz6_234",
  H = {
    container: $C,
    header: eN,
    close: tN,
    title: nN,
    body: sN,
    image_container: aN,
    image: oN,
    content_container: iN,
    description_container: rN,
    description_item: cN,
    amount_selector_container: lN,
    amount_selector_button: dN,
    amount_selector_count: uN,
    button_container: pN,
    crypto_button_container: mN,
    error: AN,
    not_available: hN,
    button: gN,
    star_color: _N,
    tokens_selector: fN,
    tokens_title: xN,
    connect_wallet_text_title: yN,
    tokens_container: vN,
    token_item: wN,
    token_image_container: bN,
    token_image: jN,
    sale_box: PN,
    sale_text: CN
  },
  NN = () => {
    const n = g(),
      t = l(a => a.shop.activeProductCardId),
      s = l(a => a.shop.products[t]);
    return e.jsxs("div", {
      className: H.header,
      onPointerUp: a => {
        a.stopPropagation()
      },
      children: [e.jsx("div", {
        className: H.close,
        onPointerUp: () => {
          n(Sa())
        },
        children: e.jsx(B, {
          size: 30,
          children: ""
        })
      }), e.jsx("div", {
        className: H.title,
        children: s.name
      })]
    })
  },
  SN = () => {
    const n = l(a => a.shop.activeProductCardId),
      t = l(a => a.shop.products[n]),
      s = l(a => a.shop.amount);
    return e.jsx("div", {
      className: H.image_container,
      children: e.jsx("img", {
        alt: "img",
        className: H.image,
        src: qo(t.id, s)
      })
    })
  },
  IN = () => {
    const n = l(s => s.shop.activeProductCardId),
      t = l(s => s.shop.products[n]);
    return e.jsx("div", {
      className: H.description_container,
      children: e.jsx("span", {
        className: H.description_item,
        children: t.description
      })
    })
  },
  TN = "_layout_1at34_1",
  EN = "_container_1at34_10",
  BN = "_item_1at34_14",
  la = {
    layout: TN,
    container: EN,
    item: BN
  },
  DN = 8,
  kN = 16,
  RN = 500,
  Yi = 800,
  Ao = window.innerWidth,
  ho = 100,
  UN = () => Array.from(Array(100)).map(() => {
    const n = L(DN, kN),
      t = `hsl(${L(0,360)} , 70%, 50%)`,
      s = L(RN, Yi),
      a = L(-Ao, Ao),
      o = L(-ho, ho);
    return {
      size: n,
      color: t,
      speed: s,
      x: a,
      y: o,
      transform: !1,
      opacity: !1
    }
  }),
  ON = p.memo(({
    runParticle: n,
    setRunParticle: t
  }) => {
    const [s, a] = p.useState(UN()), [o, i] = p.useState(!1);
    return p.useEffect(() => {
      n && setTimeout(() => {
        i(!0), setTimeout(() => {
          t(!1), i(!1)
        }, Yi)
      }, 200)
    }, [n]), e.jsx("div", {
      className: la.layout,
      style: {
        visibility: n ? "visible" : "hidden"
      },
      children: e.jsx("div", {
        className: la.container,
        children: s.map((r, c) => e.jsx("div", {
          className: la.item,
          style: {
            width: r.size,
            height: r.size,
            backgroundColor: r.color,
            transition: n ? `all ${r.speed}ms ease` : "",
            transform: n ? `translate(${r.x}px, ${r.y}px)` : "translate(0px, 0px)",
            opacity: o ? 0 : 1
          }
        }, c))
      })
    })
  }),
  MN = () => {
    const n = g(),
      t = l(Ia),
      s = l(o => o.shop.selectedCurrency);
    return l(Ze) !== de ? null : e.jsxs("div", {
      className: H.tokens_selector,
      children: [e.jsx("div", {
        className: H.tokens_title,
        children: "Select token"
      }), e.jsx("div", {
        children: e.jsx("div", {
          className: H.tokens_container,
          children: t.map(o => o.currency_id === 1 ? null : e.jsxs("div", {
            className: H.token_item,
            style: {
              color: o.currency_id === s ? "#FFFFFF" : void 0
            },
            onPointerUp: () => {
              n(pn(o.currency_id))
            },
            children: [e.jsx("div", {
              children: e.jsx(B, {
                size: 28,
                children: s === o.currency_id ? "" : ""
              })
            }), e.jsx("div", {
              className: H.token_image_container,
              children: e.jsx("img", {
                alt: "img",
                className: H.token_image,
                src: o.image
              })
            }), e.jsx("div", {
              children: e.jsx("span", {
                children: o.name
              })
            })]
          }, o.currency_id))
        })
      })]
    })
  },
  QN = () => {
    const n = l(s => s.shop.selectedCurrency),
      t = l(s => s.shop.crypto).filter(s => s.currency_id === n)[0];
    return n === 1 ? e.jsx("span", {
      className: H.star_color,
      style: {
        paddingRight: 4,
        marginBottom: -5
      },
      children: e.jsx(bn, {})
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
  FN = ({
    success: n
  }) => {
    var c;
    const t = l(d => d.shop.activeProductCardId),
      s = l(d => d.shop.amount),
      a = l(d => d.shop.selectedCurrency),
      o = l(d => d.shop.products[t]),
      i = (c = o.prices.filter(d => d.currency_id === a)[0]) == null ? void 0 : c.price,
      r = !o.isOnePiece;
    if (n) return e.jsx(ae.Fragment, {
      children: "Success, wait 1-5 min!"
    });
    if (!i) return e.jsx(ae.Fragment, {
      children: "Not available"
    });
    if (i) return e.jsxs(ae.Fragment, {
      children: ["Buy for ", e.jsx(QN, {}), Math.round(i * (r ? s : 1) * 100) / 100, e.jsx("div", {
        className: H.sale_box,
        children: e.jsx("span", {
          className: H.sale_text,
          children: "-30% "
        })
      })]
    })
  },
  zN = ({
    setError: n,
    setRunParticle: t
  }) => {
    var we;
    const s = g(),
      a = l(Q => Q.shop.activeProductCardId),
      o = l(Q => Q.shop.selectedCurrency),
      i = l(Q => Q.shop.amount),
      [r, c] = p.useState(u.idle),
      [d, m] = p.useState(!1),
      [A, h] = yn(),
      f = l(Q => Q.color.active),
      y = (we = l(Q => Q.shop.products[a]).prices.filter(Q => Q.currency_id === o)[0]) == null ? void 0 : we.price,
      _ = xn();
    if (l(Q => Q.shop.selectedCurrency) === 1 || _ === "") return null;
    const T = async Q => {
      const Ue = ge.beginCell().storeUint(0, 32).storeStringTail(Q.txMemCode).endCell(),
        yt = {
          validUntil: Math.floor(Date.now() / 1e3) + 600,
          messages: [{
            address: pa,
            amount: String(ge.toNano(Q.strAmount)),
            payload: Ue.toBoc().toString("base64")
          }]
        };
      await A.sendTransaction(yt), t(!0), m(!0), c(u.fulfilled)
    }, ve = async Q => {
      const Ue = new Ys.HttpProvider("https://toncenter.com/api/v2/jsonRPC"),
        $i = await new Ys.token.jetton.JettonMinter(Ue, {
          address: ut[o]
        }).getJettonWalletAddress(new Ys.utils.Address(_)),
        er = ge.Address.parse(_),
        tr = ge.Address.parse(pa),
        nr = ge.beginCell().storeUint(0, 32).storeStringTail(Q.txMemCode).endCell();
      let Js = ge.toNano(Q.strAmount);
      Number(o) === 4 && (Js = Js / 1000n);
      const sr = ge.beginCell().storeUint(260734629, 32).storeUint(0, 64).storeCoins(Js).storeAddress(tr).storeAddress(er).storeBit(0).storeCoins(ge.toNano("0.01")).storeBit(1).storeRef(nr).endCell(),
        ar = {
          validUntil: Math.floor(Date.now() / 1e3) + 600,
          messages: [{
            address: $i.toString(!0, !0, !0),
            amount: "101000000",
            payload: sr.toBoc().toString("base64")
          }]
        };
      await A.sendTransaction(ar), t(!0), m(!0), c(u.fulfilled)
    };
    return y ? e.jsx("button", {
      className: H.button,
      onPointerUp: async Q => {
        if (Q.stopPropagation(), n(!1), d) {
          s(Sa()), c(u.idle);
          return
        }
        if (r !== u.pending) {
          c(u.pending);
          try {
            const Ue = await F.startShopTransaction({
              buyerWallet: _,
              currencyId: o,
              quantity: i,
              goodId: a,
              activeColor: f
            });
            if (o === 2) await T(Ue.data);
            else if (o === 3 || o === 4 || o === 5 || o === 6 || o === 7 || o === 8 || o === 9) await ve(Ue.data);
            else throw new Error("Wrong currency")
          } catch (Ue) {
            console.warn(Ue), n("Something went wrong"), c(u.rejected)
          }
        }
      },
      children: e.jsx(FN, {
        success: d
      })
    }) : e.jsx("div", {
      className: H.not_available,
      children: "Not available"
    })
  },
  HN = () => {
    const [n, t] = yn(), s = xn(), a = l(o => o.shop.selectedCurrency);
    return s !== "" || a === 1 ? null : e.jsx("button", {
      className: H.button,
      onPointerUp: async o => {
        o.stopPropagation(), o.preventDefault(), setTimeout(() => {
          n.openModal()
        }, 20)
      },
      children: "Connect TON wallet"
    })
  },
  qN = ({
    success: n
  }) => {
    const t = l(i => i.shop.activeProductCardId),
      s = l(i => i.shop.amount),
      a = l(i => i.shop.products[t]),
      o = !a.isOnePiece;
    return n ? e.jsx(ae.Fragment, {
      children: "You bought it!"
    }) : e.jsxs(ae.Fragment, {
      children: ["Buy for", e.jsx(B, {
        size: 18,
        className: H.star_color,
        children: ""
      }), a.prices[0].price * (o ? s : 1)]
    })
  },
  LN = ({
    setError: n,
    setRunParticle: t
  }) => {
    const s = g(),
      a = l(f => f.shop.activeProductCardId),
      o = l(f => f.shop.products[a]),
      i = l(f => f.shop.amount),
      [r, c] = p.useState(u.idle),
      [d, m] = p.useState(!1),
      A = l(f => f.shop.selectedCurrency),
      h = l(f => f.color.active);
    return A !== 1 ? null : e.jsx("div", {
      className: H.button_container,
      onPointerUp: async f => {
        var y;
        if (f.stopPropagation(), d) {
          s(Sa()), c(u.idle);
          return
        }
        if (r === u.pending) return;
        c(u.pending);
        const C = o.isOnePiece ? 1 : i;
        try {
          const _ = await F.buy({
            type: Number(a),
            qty: C,
            pixanosColor: h
          });
          _.status === 200 && ((y = _ == null ? void 0 : _.data) == null ? void 0 : y.ok) === !0 && window.Telegram.WebApp.openInvoice(_.data.result, b => {
            var ve, we;
            const T = Number(a);
            if (b === "paid") {
              if (T >= 9 && T <= 11) {
                const Q = {
                  9: 1,
                  10: 2,
                  11: 3
                };
                s(En({
                  product: 1,
                  amount: Q[T]
                })), s(En({
                  product: 2,
                  amount: Q[T]
                })), s(En({
                  product: 6,
                  amount: Q[T]
                }))
              } else s(En({
                product: a,
                amount: C
              }));
              m(!0), (we = (ve = window.Telegram.WebApp) == null ? void 0 : ve.HapticFeedback) == null || we.notificationOccurred("error"), t(!0)
            } else n("Error, try again.")
          })
        } catch {
          n("Error, try again."), c(u.rejected)
        }
        c(u.fulfilled)
      },
      children: e.jsx("button", {
        className: H.button,
        children: e.jsx(qN, {
          success: d
        })
      })
    })
  },
  VN = () => (l(Ze) === de, null),
  GN = () => {
    const n = l(t => t.shop.activeProductCardId);
    return console.log(n), n !== 13 ? null : e.jsxs("div", {
      style: {
        marginBottom: 15
      },
      children: [e.jsx("div", {
        className: H.tokens_title,
        style: {
          marginBottom: -10
        },
        children: "Select color"
      }), e.jsx(ki, {
        colors: Ee
      })]
    })
  },
  XN = () => {
    const [n, t] = p.useState(null), [s, a] = p.useState(!1);
    return e.jsxs("div", {
      className: H.crypto_button_container,
      children: [e.jsx(GN, {}), e.jsx(MN, {}), e.jsx(VN, {}), e.jsx(ON, {
        runParticle: s,
        setRunParticle: a
      }), n && e.jsx("div", {
        className: H.error,
        children: " Failure. Something went wrong."
      }), e.jsx(zN, {
        setError: t,
        setRunParticle: a
      }), e.jsx(LN, {
        setError: t,
        setRunParticle: a
      }), e.jsx(HN, {
        setError: t
      })]
    })
  },
  JN = () => {
    g();
    const n = l(o => o.shop.activeProductCardId),
      t = l(o => o.shop.amount);
    return l(o => o.shop.products[n]).isOnePiece ? null : e.jsx("div", {
      className: H.amount_selector_container,
      children: e.jsxs("div", {
        className: H.amount_selector_count,
        children: ["× ", t]
      })
    })
  },
  YN = "_container_1rmx4_1",
  WN = "_max_value_1rmx4_9",
  go = {
    container: YN,
    max_value: WN
  },
  It = n => n < 100 ? {
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

function _o(n, t) {
  return Math.round(n / t) * t
}
const KN = () => {
    const n = g(),
      t = l(b => b.shop.activeProductCardId),
      s = l(b => b.shop.amount),
      o = l(b => b.shop.products[t]).isOnePiece,
      [i, r] = p.useState([s]),
      [c, d] = p.useState(It(s).max),
      [m, A] = p.useState(It(s).min),
      [h, f] = p.useState(It(s).step),
      C = c === 5e3 ? "5000" : `${c}+`,
      y = b => {
        const T = b[0];
        n(ks(_o(T, h))), r([_o(T, h)])
      },
      _ = b => {
        const T = b[0];
        T === c && (d(It(T).max), A(It(T).min), f(It(T).step))
      };
    return o ? null : e.jsxs("div", {
      className: go.container,
      children: [e.jsx(ua.Range, {
        values: i,
        step: h,
        min: m,
        max: c,
        rtl: !1,
        onChange: y,
        onFinalChange: _,
        renderTrack: ({
          props: b,
          children: T
        }) => e.jsx("div", {
          onMouseDown: b.onMouseDown,
          onTouchStart: b.onTouchStart,
          style: {
            ...b.style,
            height: "36px",
            display: "flex",
            width: "100%"
          },
          children: e.jsx("div", {
            ref: b.ref,
            style: {
              height: "4px",
              borderRadius: "2px",
              width: "100%",
              background: ua.getTrackBackground({
                values: i,
                colors: ["var(--btn-primary-bg-color)", "var(--btn-header-bg-color)"],
                min: m,
                max: c,
                rtl: !1
              }),
              alignSelf: "center"
            },
            children: T
          })
        }),
        renderThumb: ({
          props: b,
          isDragged: T
        }) => p.createElement("div", {
          ...b,
          key: b.key,
          style: {
            ...b.style,
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
        className: go.max_value,
        children: [" ", C]
      })]
    })
  },
  ZN = () => e.jsxs("div", {
    className: H.body,
    onPointerUp: n => {
      n.stopPropagation()
    },
    children: [e.jsx(SN, {}), e.jsxs("div", {
      className: H.content_container,
      children: [e.jsx(IN, {}), e.jsx(JN, {}), e.jsx(KN, {})]
    }), e.jsx(XN, {})]
  }),
  $N = () => {
    const n = l(t => t.shop.show);
    return Ke.createPortal(e.jsx(ct, {
      show: n,
      children: e.jsxs("div", {
        className: H.container,
        children: [e.jsx(NN, {}), e.jsx(ZN, {})]
      })
    }), document.body)
  },
  e2 = "_layout_9sf1k_1",
  t2 = "_container_9sf1k_13",
  n2 = "_header_9sf1k_20",
  s2 = "_title_9sf1k_30",
  a2 = "_body_9sf1k_35",
  o2 = "_image_container_9sf1k_47",
  i2 = "_image_9sf1k_47",
  r2 = "_shake_9sf1k_1",
  c2 = "_description_container_9sf1k_60",
  l2 = "_buyer_info_9sf1k_70",
  d2 = "_avatar_9sf1k_78",
  u2 = "_name_9sf1k_84",
  p2 = "_squad_info_9sf1k_88",
  m2 = "_squad_avatar_9sf1k_94",
  A2 = "_text_container_9sf1k_100",
  h2 = "_text_9sf1k_100",
  g2 = "_thanos_snap_container_9sf1k_110",
  _2 = "_thanos_snap_text_9sf1k_119",
  f2 = "_button_container_9sf1k_126",
  x2 = "_button_9sf1k_126",
  le = {
    layout: e2,
    container: t2,
    header: n2,
    title: s2,
    body: a2,
    image_container: o2,
    image: i2,
    shake: r2,
    description_container: c2,
    buyer_info: l2,
    avatar: d2,
    name: u2,
    squad_info: p2,
    squad_avatar: m2,
    text_container: A2,
    text: h2,
    thanos_snap_container: g2,
    thanos_snap_text: _2,
    button_container: f2,
    button: x2
  },
  y2 = `precision highp float;

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
  v2 = `precision mediump float;

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
  Wi = 7200,
  w2 = 1;
let v = null,
  xe = null,
  On = -1,
  ys = 0;
async function b2(n) {
  if (v = j2().getContext("webgl"), !v) {
    console.log("Your browser doesn't support WebGL :(");
    return
  }
  await P2(), N2(n)
}

function j2() {
  const n = document.createElement("canvas");
  return n.id = "canvasSnap", n.width = window.innerWidth, n.height = window.innerHeight, n.style.width = `${window.innerWidth}px`, n.style.height = `${window.innerHeight}px`, n.style.position = "fixed", n.style.top = "50%", n.style.left = "50%", n.style.zIndex = "980", n.style.transform = "translate(-50%, -50%)", n.style.opacity = "0", n.style.transition = "2s ease opacity", document.body.appendChild(n), window.getComputedStyle(n).opacity, n.style.opacity = "1", n
}
async function P2() {
  v.enable(v.BLEND), v.blendFunc(v.SRC_ALPHA, v.ONE_MINUS_SRC_ALPHA), v.clearColor(0, 0, 0, 0), v.viewport(0, 0, v.canvas.width, v.canvas.height), xe = await C2(v), v.useProgram(xe)
}
async function C2(n, t, s) {
  const a = y2,
    o = v2,
    i = fo(n, a, n.VERTEX_SHADER),
    r = fo(n, o, n.FRAGMENT_SHADER),
    c = n.createProgram();
  return n.attachShader(c, i), n.attachShader(c, r), n.linkProgram(c), n.getProgramParameter(c, n.LINK_STATUS) || console.error("Shader program initialization failure:", n.getProgramInfoLog(c)), c
}

function fo(n, t, s) {
  const a = n.createShader(s);
  return n.shaderSource(a, t), n.compileShader(a), n.getShaderParameter(a, n.COMPILE_STATUS) ? a : (console.error("Shader compilation failure:", n.getShaderInfoLog(a)), n.deleteShader(a), null)
}
async function N2(n) {
  S2(), E2(n), Ki(), document.getElementById("canvasHolder").style.opacity = "0", setTimeout(() => {
    const t = document.getElementById("canvasHolder");
    t.style.transition = "6s ease-in opacity", t.style.opacity = "1"
  }, 20), setTimeout(() => {
    document.getElementById("canvasHolder").style.transition = ""
  }, 7e3)
}

function S2(n) {
  const t = I2();
  var s = v.createTexture();
  v.bindTexture(v.TEXTURE_2D, s), v.texParameteri(v.TEXTURE_2D, v.TEXTURE_WRAP_S, v.CLAMP_TO_EDGE), v.texParameteri(v.TEXTURE_2D, v.TEXTURE_WRAP_T, v.CLAMP_TO_EDGE), v.texParameteri(v.TEXTURE_2D, v.TEXTURE_MIN_FILTER, v.NEAREST), v.texParameteri(v.TEXTURE_2D, v.TEXTURE_MAG_FILTER, v.NEAREST), v.texImage2D(v.TEXTURE_2D, 0, v.RGBA, v.RGBA, v.UNSIGNED_BYTE, t);
  const a = v.getUniformLocation(xe, "u_Texture");
  v.uniform1i(a, 0)
}

function I2() {
  const n = new ImageData(I.width, I.height);
  return n.data.set(w.mainImage.imageData.slice(0)), n
}

function T2(n) {
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

function E2(n) {
  const {
    viewportWidth: t,
    viewportHeight: s,
    textureWidth: a,
    textureHeight: o,
    textureLeft: i,
    textureTop: r,
    min: c
  } = T2(n);
  ys = c * c, Je(v, xe, "u_AnimationDuration", Wi), Je(v, xe, "u_ParticleSize", w2), Je(v, xe, "u_ViewportWidth", t), Je(v, xe, "u_ViewportHeight", s), Je(v, xe, "u_TextureWidth", a), Je(v, xe, "u_TextureHeight", o), Je(v, xe, "u_TextureLeft", i), Je(v, xe, "u_TextureTop", r);
  const d = new Array(ys);
  for (let h = 0; h < ys; h++) d[h] = h;
  const m = v.createBuffer();
  v.bindBuffer(v.ARRAY_BUFFER, m), v.bufferData(v.ARRAY_BUFFER, new Float32Array(d), v.STATIC_DRAW);
  const A = v.getAttribLocation(xe, "a_ParticleIndex");
  v.enableVertexAttribArray(A), v.vertexAttribPointer(A, 1, v.FLOAT, !1, 0, 0)
}

function Ki() {
  requestAnimationFrame(B2)
}

function B2(n) {
  v.clear(v.COLOR_BUFFER_BIT), On == -1 && (On = n);
  const s = n - On;
  if (s > Wi) {
    On = -1, document.getElementById("canvasSnap").remove();
    return
  }
  Je(v, xe, "u_ElapsedTime", s), v.drawArrays(v.POINTS, 0, ys), Ki()
}

function Je(n, t, s, a) {
  const o = n.getUniformLocation(t, s);
  n.uniform1f(o, a)
}
const D2 = () => {
    const n = Y(),
      t = g(),
      s = l(r => r.main.showPixanosEvent),
      a = l(r => r.main.pixanosEventData),
      o = l(zt);
    if (p.useEffect(() => {
        s && a && (async () => {
          var c, d;
          w.viewport.viewport.fit(), w.viewport.viewport.moveCenter(w.viewport.viewport.worldWidth / 2, w.viewport.viewport.worldHeight / 2), t(Ja(!0)), setTimeout(() => {
            t(Ja(!1)), t(lp())
          }, 7e3);
          try {
            await b2(o ? 0 : jo)
          } catch (m) {
            document.getElementById("canvasHolder").style.opacity = "1", console.error(m, "cannot run pixanos")
          }
          n.push("/"), w.mainImage.pixanosRepaint(a.info.seed, I.width, a.info.percentage, a.info.color), (d = (c = window.Telegram.WebApp) == null ? void 0 : c.HapticFeedback) == null || d.notificationOccurred("error")
        })()
      }, [s, a]), !a) return null;
    const i = a.user.squad;
    return e.jsx(ct, {
      show: s,
      backgroundColor: "rgba(0, 0, 0, 0.0)",
      children: e.jsxs("div", {
        className: le.container,
        children: [e.jsx("div", {
          className: le.header,
          children: e.jsx("span", {
            className: le.title,
            children: "I AM INEVITABLE"
          })
        }), e.jsxs("div", {
          className: le.body,
          children: [e.jsx("div", {
            className: le.image_container,
            children: e.jsx("img", {
              alt: "img",
              className: le.image,
              src: Ft
            })
          }), e.jsxs("div", {
            className: le.description_container,
            children: [e.jsxs("div", {
              className: le.buyer_info,
              children: [e.jsx("img", {
                alt: "avatar",
                src: a.user.userPic && a.user.userPic !== "" ? a.user.userPic : He,
                className: le.avatar
              }), " ", e.jsx("span", {
                className: le.name,
                children: a.user.firstName
              }), i && e.jsx("span", {
                children: "from"
              }), i && e.jsxs("div", {
                className: le.squad_info,
                children: [e.jsx("img", {
                  alt: "avatar",
                  src: i.logo && i.logo !== "" ? i.logo : ht,
                  className: le.squad_avatar
                }), e.jsx(Vt, {
                  address: `${at}?startapp=${btoa(`id=${i.squadId}`)}`,
                  display: i.name,
                  limit: 18
                })]
              }), i && e.jsx("span", {
                children: "squad"
              }), e.jsxs("div", {
                children: [e.jsx("span", {
                  children: "got"
                }), e.jsx("div", {
                  className: le.thanos_snap_container,
                  children: e.jsx("span", {
                    className: le.thanos_snap_text,
                    children: "Pixanos' Snap"
                  })
                })]
              })]
            }), e.jsx("div", {
              className: le.text_container,
              children: e.jsxs("span", {
                className: le.text,
                children: ["Now he takes every second pixel. ", e.jsx("br", {}), " Legendary!"]
              })
            })]
          })]
        })]
      })
    })
  },
  k2 = "_container_11ui8_1",
  R2 = "_header_11ui8_13",
  U2 = "_close_container_11ui8_23",
  O2 = "_close_11ui8_23",
  M2 = "_title_11ui8_48",
  Q2 = "_frens_count_11ui8_53",
  F2 = "_body_11ui8_58",
  z2 = "_content_11ui8_68",
  H2 = "_image_container_11ui8_75",
  q2 = "_image_11ui8_75",
  L2 = "_image_container_charges_11ui8_84",
  V2 = "_image_charges_11ui8_89",
  G2 = "_description_container_11ui8_94",
  X2 = "_bold_11ui8_102",
  J2 = "_gray_11ui8_107",
  Y2 = "_center_11ui8_111",
  W2 = "_benefits_container_11ui8_115",
  K2 = "_benefits_item_11ui8_123",
  Z2 = "_benefits_icon_container_11ui8_128",
  $2 = "_icon_invite_11ui8_132",
  eS = "_footer_11ui8_136",
  tS = "_button_11ui8_141",
  ee = {
    container: k2,
    header: R2,
    close_container: U2,
    close: O2,
    title: M2,
    frens_count: Q2,
    body: F2,
    content: z2,
    image_container: H2,
    image: q2,
    image_container_charges: L2,
    image_charges: V2,
    description_container: G2,
    bold: X2,
    gray: J2,
    center: Y2,
    benefits_container: W2,
    benefits_item: K2,
    benefits_icon_container: Z2,
    icon_invite: $2,
    footer: eS,
    button: tS
  },
  nS = () => {
    var i, r;
    const n = l(c => c.user.user),
      t = g(),
      s = l(c => c.main.showNoChargesPopup),
      a = l(c => c.main.settings);
    let o = `${gt}?startapp=f${((r=(i=window.Telegram.WebApp.initDataUnsafe)==null?void 0:i.user)==null?void 0:r.id)||""}`;
    return n && n.squad && n.squad.id !== null && (o += `_s${n.squad.id}`), e.jsx(ct, {
      show: s,
      onPointerUp: () => t(aa()),
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
              t(aa())
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
                src: Oi
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
                  children: e.jsx(An, {
                    size: 16,
                    className: ee.icon_invite
                  })
                }), a.InitialCoins]
              }), e.jsx("div", {}), " ", e.jsx("div", {}), e.jsxs("div", {
                className: ee.benefits_item,
                children: ["Premium:   ", " ", e.jsx("div", {
                  className: ee.benefits_icon_container,
                  children: e.jsx(An, {
                    size: 16,
                    className: ee.icon_invite
                  })
                }), " ", a.RefRewardCoinsPremium]
              }), e.jsx("div", {})]
            })]
          })
        }), e.jsxs("div", {
          className: ee.footer,
          children: [e.jsx(Gt, {
            url: o
          }), e.jsx("button", {
            className: ee.button,
            onPointerUp: c => {
              c.stopPropagation(), window.Telegram.WebApp.openLink(`https://t.me/share/url?url=${o}`), t(aa())
            },
            children: "Share"
          })]
        })]
      })
    })
  },
  sS = () => Es().pathname === "/" ? null : e.jsx("div", {
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
  aS = "_layout_1f2lr_1",
  oS = "_item_1f2lr_19",
  iS = "_image_1f2lr_38",
  Zi = {
    layout: aS,
    item: oS,
    image: iS
  },
  rS = ({
    item: n
  }) => {
    const t = g(),
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
    return p.useEffect(() => {
      const o = setTimeout(() => {
        t(Ga(n.id))
      }, 3e3);
      return () => {
        clearTimeout(o)
      }
    }, []), e.jsxs(un.div, {
      variants: s,
      initial: "hidden",
      animate: "enter",
      exit: "exit",
      transition: {
        duration: .3
      },
      className: Zi.item,
      onPointerUp: () => {
        t(Ga(n.id))
      },
      children: [e.jsx(B, {
        size: 20,
        children: a
      }), n.text]
    })
  },
  cS = () => {
    const n = l(t => t.toast.items);
    return Ke.createPortal(e.jsx("div", {
      className: Zi.layout,
      children: e.jsx(ja, {
        children: n.map(t => e.jsx(rS, {
          item: t
        }, t.id))
      })
    }), document.body)
  },
  lS = ({
    isPopupContent: n = !0
  }) => {
    const t = n ? "Squad" : "My Squad",
      s = lt(n);
    return e.jsxs("div", {
      className: R(E.container, !n && E.page),
      children: [n && e.jsx(Fi, {}), e.jsx("div", {
        children: e.jsx("span", {
          className: E.title,
          children: t
        })
      }), e.jsx(zi, {
        ...s
      }), e.jsx(Hi, {
        ...s
      }), e.jsx(qi, {
        ...s
      }), e.jsx(Li, {
        ...s
      }), e.jsx(Vi, {
        ...s
      })]
    })
  },
  dS = () => {
    const n = g(),
      {
        item: t
      } = lt(),
      s = !0;
    return e.jsx(ct, {
      show: t.dataSource !== null,
      onPointerUp: a => {
        a.stopPropagation(), n(pi())
      },
      children: e.jsxs("div", {
        className: Qi.layout,
        onPointerUp: a => {
          a.stopPropagation()
        },
        children: [t.dataSource === Te.userFromPixelInfo && e.jsx(va, {
          isPopupContent: s
        }), t.dataSource === Te.userFromRating && e.jsx(va, {
          isPopupContent: s
        }), t.dataSource === Te.squadFromData && e.jsx(lS, {})]
      })
    })
  },
  uS = "_overlay_12d15_1",
  pS = "_top_container_12d15_10",
  mS = "_bottom_container_12d15_15",
  AS = "_side_menu_12d15_20",
  hS = "_menu_safe_area_inset_12d15_36",
  gS = "_menu_header_12d15_40",
  _S = "_close_button_12d15_53",
  fS = "_menu_list_12d15_58",
  xS = "_icon_12d15_79",
  yS = "_icon_not_pixel_12d15_87",
  vS = "_gold_pixel_12d15_97",
  wS = "_menu_list_li_12d15_103",
  bS = "_menu_list_text_12d15_109",
  jS = "_menu_list_new_item_12d15_113",
  PS = "_verificated_wallet_12d15_136",
  CS = "_button_wrapper_12d15_144",
  NS = "_button_content_12d15_153",
  SS = "_footer_12d15_160",
  IS = "_avatar_12d15_166",
  TS = "_ratings_image_container_12d15_173",
  ES = "_ratings_image_12d15_173",
  V = {
    overlay: uS,
    top_container: pS,
    bottom_container: mS,
    side_menu: AS,
    menu_safe_area_inset: hS,
    menu_header: gS,
    close_button: _S,
    menu_list: fS,
    icon: xS,
    icon_not_pixel: yS,
    gold_pixel: vS,
    menu_list_li: wS,
    menu_list_text: bS,
    menu_list_new_item: jS,
    verificated_wallet: PS,
    button_wrapper: CS,
    button_content: NS,
    footer: SS,
    avatar: IS,
    ratings_image_container: TS,
    ratings_image: ES
  },
  xo = [.215, .61, .355, 1],
  BS = {
    hidden: {
      x: "-100%",
      transition: {
        type: "tween",
        duration: .25,
        ease: xo
      }
    },
    visible: {
      x: 0,
      transition: {
        type: "tween",
        duration: .25,
        ease: xo
      }
    }
  },
  DS = "_button_25266_1",
  kS = "_decor_25266_13",
  RS = "_dark_25266_22",
  yo = {
    button: DS,
    decor: kS,
    dark: RS
  },
  vo = ({
    children: n,
    variant: t = "dark",
    onPointerUp: s = () => {},
    style: a = {},
    className: o = void 0
  }) => e.jsx("button", {
    onPointerUp: s,
    className: R(yo.button, yo[t], o),
    style: a,
    children: n
  }),
  US = "_layout_4kkfr_1",
  OS = "_line_4kkfr_14",
  MS = "_button_4kkfr_19",
  Tt = {
    layout: US,
    line: OS,
    button: MS
  },
  QS = ({
    className: n = void 0
  }) => {
    const t = g(),
      s = Y();
    return e.jsx("div", {
      className: R(Tt.layout, n),
      children: e.jsxs("div", {
        className: Tt.line,
        children: [e.jsx("div", {
          className: Tt.button,
          onPointerUp: () => {
            t(At(!1)), s.push("/rules")
          },
          children: "Rules"
        }), e.jsx("div", {
          className: Tt.button,
          onPointerUp: () => {
            pe(Pa)
          },
          children: "Support"
        }), e.jsx("div", {
          className: Tt.button,
          onPointerUp: () => {
            t(At(!1)), s.push("/terms")
          },
          children: "Terms"
        }), e.jsx("div", {
          className: Tt.button,
          onPointerUp: () => {
            t(At(!1)), s.push("/privacy")
          },
          children: "Privacy"
        })]
      })
    })
  },
  FS = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAABtQTFRFR3BM////////////////////////////////Fv0dDgAAAAh0Uk5TABU6XISq0+/2d3cmAAABKElEQVR42u3Z24rDMAxFUV1s6fz/Fw+FlA4lpGOj2Ew566kPKWxEQ2NFiIiIiIiIiIiI6L/RFrgQTeVWGvggbikwPwQ+Cj+YVLHAlChKcExzKaCJaak1A9g7gg7M61UBfSDmeS0DGMAABlQFNACI8YAAgPYNAY6H8YCyPyPDg40FvL5WAA9tNKAdg6u6DVLHAjSPjwX8NYKGa+9XuhQ+k41NAMfYSjRMalIkMCWkiiUmpMneAltwJlx5RlTz1hJ/kK25qdxCvQcuRfetB/RQuZ1l1Q+/viBNZGdBmiyiHSe6yjqeeJMua3ngl3BZT70nAOTsrV95ZmDADvbcW8bEUrJ+eRmLE7xgI1e9vExdO4C9I+g40WUdnNoewPdJREREREREREREU34Aqms7WGCxI2EAAAAASUVORK5CYII=",
  zS = "_layout_eiymv_1",
  HS = "_container_eiymv_7",
  wo = {
    layout: zS,
    container: HS
  },
  qS = () => localStorage.getItem("canvasFps") ? [Number(localStorage.getItem("canvasFps"))] : [60],
  LS = () => {
    const [n, t] = ae.useState(qS());
    return p.useEffect(() => {
      localStorage.setItem("canvasFps", String(n[0])), w.ticker.setFps(n[0])
    }, [n]), e.jsx("div", {
      className: wo.layout,
      children: e.jsxs("div", {
        className: wo.container,
        children: [e.jsx(ua.Range, {
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
          }) => p.createElement("div", {
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
  VS = "_layout_7wq4a_1",
  GS = "_green_7wq4a_10",
  XS = "_red_7wq4a_14",
  da = {
    layout: VS,
    green: GS,
    red: XS
  },
  JS = () => {
    const n = g(),
      t = l(s => s.canvas.animations);
    return e.jsxs("div", {
      className: da.layout,
      onPointerUp: () => {
        n(t ? nu() : tu())
      },
      children: [e.jsx("span", {
        style: {
          color: "var(--font-secondary-color)"
        },
        children: "Animation:"
      }), " ", t ? e.jsx("span", {
        className: da.green,
        children: "on"
      }) : e.jsx("span", {
        className: da.red,
        children: "off"
      })]
    })
  },
  YS = () => {
    const n = l(Os),
      t = l(Ms);
    return e.jsx("div", {
      style: {
        width: "100%",
        height: n.bottom + t.bottom
      }
    })
  },
  WS = () => {
    const n = Y(),
      t = g();
    l(rt);
    const s = xn(),
      [a, o] = yn();
    l(Xl);
    const i = l(hi),
      r = l(zt),
      c = () => {
        t(At(!1))
      },
      d = y => {
        t(At(!1)), n.push(y)
      },
      m = () => {
        const y = `${window.location.origin}/stars?initData=${btoa(window.Telegram.WebApp.initData)}`;
        wn(y)
      },
      A = l(y => y.user.verificatedWallet),
      h = To(A),
      f = ma(h),
      C = l(y => y.user.verificatedWalletStatus);
    return p.useEffect(() => {
      i && C === u.idle && t(ze.getVerificatedWallet())
    }, [i]), e.jsx(e.Fragment, {
      children: e.jsx(ja, {
        children: i && e.jsxs(e.Fragment, {
          children: [e.jsx(un.div, {
            className: V.overlay,
            onPointerUp: c,
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
          }), e.jsxs(un.nav, {
            className: V.side_menu,
            initial: "hidden",
            animate: "visible",
            exit: "hidden",
            variants: BS,
            children: [e.jsxs("div", {
              className: V.top_container,
              children: [e.jsx("div", {
                className: V.menu_safe_area_inset
              }), e.jsxs("ul", {
                className: V.menu_list,
                children: [!r && e.jsxs("li", {
                  className: V.menu_list_li,
                  onPointerUp: () => d("/"),
                  children: [e.jsx("div", {
                    className: V.icon,
                    children: e.jsx(B, {
                      size: 24,
                      children: ""
                    })
                  }), e.jsx("span", {
                    className: V.menu_list_text,
                    children: "Canvas"
                  })]
                }), e.jsxs("li", {
                  className: V.menu_list_li,
                  onPointerUp: () => d("/tournament"),
                  children: [e.jsx("div", {
                    className: V.icon_not_pixel,
                    children: e.jsx("img", {
                      alt: "image",
                      className: V.gold_pixel,
                      src: Ui
                    })
                  }), e.jsx("span", {
                    className: V.menu_list_text,
                    style: {
                      transform: "translateX(-6px)"
                    },
                    children: "Telegram Battle"
                  }), e.jsx("span", {
                    className: V.menu_list_new_item,
                    children: "finished"
                  })]
                }), e.jsxs("li", {
                  className: V.menu_list_li,
                  onPointerUp: () => d("/ratings"),
                  children: [e.jsx("div", {
                    className: V.ratings_image_container,
                    children: e.jsx("img", {
                      alt: "noavatar",
                      className: V.ratings_image,
                      src: FS
                    })
                  }), e.jsx("span", {
                    className: V.menu_list_text,
                    children: "Ratings"
                  })]
                }), e.jsxs("li", {
                  className: V.menu_list_li,
                  onPointerUp: () => d("/history"),
                  children: [e.jsx("div", {
                    className: V.icon,
                    children: e.jsx(B, {
                      size: 24,
                      children: ""
                    })
                  }), e.jsx("span", {
                    className: V.menu_list_text,
                    children: "My History"
                  })]
                })]
              })]
            }), e.jsxs("div", {
              className: V.bottom_container,
              children: [e.jsx(JS, {}), e.jsx(LS, {}), f && f !== "" && e.jsxs("div", {
                className: V.verificated_wallet,
                children: ["Verificated wallet: ", f]
              }), e.jsxs("div", {
                className: V.button_wrapper,
                children: [s !== "" && e.jsx(vo, {
                  onPointerUp: () => {
                    a.disconnect()
                  },
                  variant: "dark",
                  style: {
                    width: "90%"
                  },
                  children: e.jsxs("div", {
                    className: V.button_content,
                    children: [e.jsx("span", {
                      children: "Disconnect TON"
                    }), e.jsx(B, {
                      size: 20,
                      style: {
                        fontWeight: 400
                      },
                      children: ""
                    })]
                  })
                }), e.jsx(vo, {
                  onPointerUp: m,
                  variant: "dark",
                  style: {
                    width: "90%"
                  },
                  children: e.jsxs("div", {
                    className: V.button_content,
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
                })]
              }), e.jsx(QS, {}), e.jsx(YS, {})]
            })]
          })]
        })
      })
    })
  },
  KS = "_layout_1vlcp_1",
  ZS = "_container_1vlcp_13",
  $S = "_close_button_1vlcp_21",
  eI = "_body_1vlcp_29",
  tI = "_image_container_1vlcp_40",
  nI = "_image_1vlcp_40",
  sI = "_shake_1vlcp_1",
  aI = "_description_container_1vlcp_54",
  oI = "_buyer_info_1vlcp_64",
  iI = "_avatar_1vlcp_72",
  rI = "_name_1vlcp_78",
  cI = "_squad_info_1vlcp_82",
  lI = "_squad_avatar_1vlcp_88",
  dI = "_text_container_1vlcp_94",
  uI = "_text_1vlcp_94",
  pI = "_thanos_snap_container_1vlcp_105",
  mI = "_thanos_snap_text_1vlcp_114",
  AI = "_prev_snaps_container_1vlcp_121",
  hI = "_prev_snaps_text_1vlcp_128",
  gI = "_prev_snaps_list_container_1vlcp_134",
  _I = "_prev_snaps_list_item_1vlcp_142",
  fI = "_button_container_1vlcp_148",
  xI = "_button_1vlcp_148",
  yI = "_button_text_1vlcp_163",
  W = {
    layout: KS,
    container: ZS,
    close_button: $S,
    body: eI,
    image_container: tI,
    image: nI,
    shake: sI,
    description_container: aI,
    buyer_info: oI,
    avatar: iI,
    name: rI,
    squad_info: cI,
    squad_avatar: lI,
    text_container: dI,
    text: uI,
    thanos_snap_container: pI,
    thanos_snap_text: mI,
    prev_snaps_container: AI,
    prev_snaps_text: hI,
    prev_snaps_list_container: gI,
    prev_snaps_list_item: _I,
    button_container: fI,
    button: xI,
    button_text: yI
  },
  vI = n => {
    const t = new Date;
    t.setHours(0, 0, 0, 0);
    const s = new Date(t);
    s.setDate(t.getDate() - 1);
    const a = new Date(n);
    return a.setHours(0, 0, 0, 0), a.getTime() === t.getTime() ? "today" : a.getTime() === s.getTime() ? "yesterday" : "once"
  },
  wI = n => {
    const t = String(n.getHours()).padStart(2, "0"),
      s = String(n.getMinutes()).padStart(2, "0");
    return ` ${vI(n)} at ${t}:${s}`
  },
  bI = () => {
    const n = g(),
      t = l(r => r.main.showPixanosRating),
      s = l(r => r.main.pixanosRatingData),
      a = l(r => r.color.active);
    if (!s) return null;
    const o = s[0],
      i = o.user.squad;
    return e.jsx(ct, {
      show: t,
      onPointerUp: () => {
        n(cs(!1))
      },
      children: e.jsxs("div", {
        className: W.container,
        children: [e.jsx("div", {
          className: W.close_button,
          onPointerUp: () => {
            n(cs(!1))
          },
          children: e.jsx(B, {
            size: 26,
            children: ""
          })
        }), e.jsxs("div", {
          className: W.body,
          children: [e.jsx("div", {
            className: W.image_container,
            children: e.jsx("img", {
              alt: "img",
              className: W.image,
              src: Ft
            })
          }), e.jsxs("div", {
            className: W.description_container,
            children: [e.jsxs("div", {
              className: W.buyer_info,
              children: [e.jsx("img", {
                alt: "avatar",
                src: o.user.userPic && o.user.userPic !== "" ? o.user.userPic : He,
                className: W.avatar
              }), " ", e.jsx("span", {
                className: W.name,
                children: o.user.firstName
              }), i && e.jsx("span", {
                children: "from"
              }), i && e.jsxs("div", {
                className: W.squad_info,
                children: [e.jsx("img", {
                  alt: "avatar",
                  src: i.logo && i.logo !== "" ? i.logo : ht,
                  className: W.squad_avatar
                }), e.jsx(Vt, {
                  address: `${at}?startapp=${btoa(`id=${i.squadId}`)}`,
                  display: i.name,
                  limit: 36
                })]
              }), i && e.jsx("span", {
                children: "squad"
              }), e.jsxs("div", {
                style: {
                  textAlign: "center"
                },
                children: [e.jsx("span", {
                  children: "activated"
                }), e.jsx("div", {
                  className: W.thanos_snap_container,
                  children: e.jsx("span", {
                    className: W.thanos_snap_text,
                    children: "Pixanos' Snap"
                  })
                }), e.jsx("span", {
                  children: wI(new Date(o.info.datetime))
                })]
              })]
            }), e.jsx("div", {
              className: W.text_container,
              children: e.jsx("span", {
                className: W.text,
                children: "Now his taking every second pixel"
              })
            })]
          }), e.jsxs("div", {
            className: W.prev_snaps_container,
            children: [e.jsx("div", {
              className: W.prev_snaps_text,
              children: "Previous five Snaps by:"
            }), e.jsx("div", {
              className: W.prev_snaps_list_container,
              children: s.map((r, c) => c === 0 ? null : e.jsxs("div", {
                className: W.prev_snaps_list_item,
                children: [e.jsx("img", {
                  alt: "avatar",
                  src: r.user.userPic && r.user.userPic !== "" ? r.user.userPic : He,
                  className: W.avatar
                }), " ", e.jsx("span", {
                  className: W.name,
                  children: r.user.firstName
                })]
              }, c))
            })]
          }), e.jsx("div", {
            className: W.button_container,
            children: e.jsx("button", {
              className: R(W.button),
              onPointerUp: async r => {
                var c;
                r.stopPropagation();
                try {
                  const d = await F.buy({
                    type: 13,
                    qty: 1,
                    pixanosColor: a
                  });
                  d.status === 200 && ((c = d == null ? void 0 : d.data) == null ? void 0 : c.ok) === !0 && window.Telegram.WebApp.openInvoice(d.data.result, m => {
                    var A, h;
                    if (m === "paid") n(q({
                      id: performance.now(),
                      text: "Success!",
                      icon: ""
                    })), n(cs(!1)), (h = (A = window.Telegram.WebApp) == null ? void 0 : A.HapticFeedback) == null || h.notificationOccurred("error");
                    else throw new Error("Error")
                  })
                } catch {
                  n(q({
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
  jI = "_layout_1i63b_1",
  PI = "_container_1i63b_18",
  CI = "_image_container_1i63b_25",
  NI = "_title_1i63b_30",
  SI = "_text_container_1i63b_37",
  II = "_support_container_1i63b_46",
  Et = {
    layout: jI,
    container: PI,
    image_container: CI,
    title: NI,
    text_container: SI,
    support_container: II
  },
  TI = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACQCAYAAACPtWCAAAAFW0lEQVR4nO3dwXUTMRSF4RnOVMImdJAmWKUCmgikhEDagSJIB7ChFHMOq4zko8vLk+bKzv/tHDtjxb5HPN6MNOvdp7vlpXVdd4+XU/lw/4N1WZvPK+uyniK/X47vdAq/X/MH6eMV5N9T/P3699fGo+rrEqP7d/zmS7Lfrzreu9TRgCQCCCsCCKutqmHEP/Gq5lGvz9YQZY0WHU9Vw57KmipX00WpmrpU13xqPO3PP/r3qu9TPV8+ZgaEFQGEFQGE1Va9uWgsVf/mF325sqaSNUq7LSf7cr1rlDN9wv3DdtusEq4pk59HtOaO1oRx7UAxA8KKAMKKAMJqU30xWcNVNWKbqmnK59N9PlHTyRpXfB7Rmkv+fcE24+i+bO/Pv3w3ZkBYEUBYEUBY1X3AoHANIfpc2esP5fPi3G997jKmup6yoGre+LnavWgXT76/uP5S1pSij8oMCCsCCCsCCKt0DRg+15m8nC56bjN7vHLAck1KVQKN7WtGa1Z1vGhfMnt9JDMgrAggrAggrLZo5yh7vVj298PnesvfL/tY0T5XsA/Wex119tzt6OsDozUkMyCsCCCsCCCsNrXONLtXTLbvVZI1jloz0Xtvmejrk2s+wuNRm8cI2RpWPc8MCCsCCCsCCKvqXHC0j/P+5nbw+LNXvIXfIPjy7uO5KH9+Pzc/HlUzMgPCigDCigDCql4XfPD+eJcnW/OpGnJ0jTn2+NE9vpkBYUUAYUUAYVX1AVWF0H//OOXa+mzq7xldY3au+cT1lVwPiKkRQFgRQFidORe8d/1nPo/uy2WPd2yNFyXv41IMnxkQVgQQVgQQVv+xN4ysWWKbSFdyNcvH21+h15c1yo/nD0PHp44XHX/p+8+b4ifhGjN1cn9dxIaIAjMgrAggrAggrM6cC+5977DBfalgyaP2cI7XULkaN7xXjRz/sX3A7LphZkBYEUBYEUBYbdH97fKyNVawxgkP/9iaV9V02b1sjha9zwgzIKwIIKwIIKzkueB8H3D09XTFs6JEyp25PHvErkcrx1+Ot/+anNz3I8fDmhDMjADCigDCalvW9s3G8n3AsX013Xdamo9nU61IqQY89vrEV9gNMLpnODMgrAggrAggrNL3C3ZTfaj+fb/S2HPV0Xvhxd/w2JXg7BGNqRBAWBFAWMn7hEy/J7QoYcbvbZO8nlGO/+g1Otk1MOJw7A2DmRBAWBFAWG1qP7f+fai+9B7F4gK74XLvF91zeXyfr/1/hGiNygwIKwIIKwIIq/i54HBbcGwnTu/vp3h3wa7391Oie9GM7ePKGpU1IZgZAYQVAYSV3B8wb/Y7i1zfnU/2jt2fUd4vmDUhmAkBhBUBhNUrrgfsfW7x+u9G19dcd/OLngtmTQimQgBhRQBhVe0RXdLXd/Veo9D73nKjjze65pqtRs7VfCVmQFgRQFgRQFit2ftO3D9+C94veF8zPD18ThU1949fy0UfmcOdMXfNl//81PfXln1/ZkBYEUBYEUBYDdgf8OiaaXQfj3PbIzEDwooAwooAwmpADfjW14BQM0YwA8KKAMKKAMLq4u8TcvmSe0wfru+6cWZAWBFAWBFAWPWoAQdfz9euOZ4evrzpk63Z6/ni31/fj5sZEFYEEFYEEFYT9AFHrzvGzJgBYUUAYUUAYUUAYUUAYUUAYUUAYUUAYUUAYUUAYUUAYTXhmpDYGogO18MFZe+bwt4xLzEDwooAwooAwmqCGjBawh1dY/U+HnvHvMQMCCsCCCsCCKsLWBMSff3RNV/vGraUrXHnriGZAWFFAGFFAGE1YR9wtj6XGt/RNVjvmtmLGRBWBBBWBBA+y7L8BWJknvMP2Od9AAAAAElFTkSuQmCC",
  EI = () => l(t => t.user.showRobotPopup) ? Ke.createPortal(e.jsx("div", {
    className: Et.layout,
    children: e.jsxs("div", {
      className: Et.container,
      children: [e.jsx("div", {
        className: Et.image_container,
        children: e.jsx("img", {
          alt: "robot",
          src: TI
        })
      }), e.jsx("div", {
        className: Et.title,
        children: "Hello, Mr. Robot!"
      }), e.jsxs("div", {
        className: Et.text_container,
        children: [e.jsx("div", {
          children: "1. A robot may not injure a human being or, through inaction, allow a human being to come to harm."
        }), e.jsx("div", {
          children: "2. A robot must obey the orders given it by human beings except where such orders would conflict with the First Law."
        }), e.jsx("div", {
          children: "3. A robot must protect its own existence as long as such protection does not conflict with the First or Second Law."
        })]
      }), e.jsx("div", {
        className: Et.support_container,
        onPointerUp: () => {
          pe(Pa)
        },
        children: "Support for humans"
      })]
    })
  }), document.body) : null,
  BI = () => e.jsxs("div", {
    className: nn.layout,
    children: [e.jsx(ZC, {}), e.jsx(JC, {}), e.jsx(vA, {}), e.jsx(_C, {}), e.jsx(YC, {}), e.jsx(sS, {}), e.jsx(dS, {}), e.jsx(nS, {}), e.jsx(EI, {}), e.jsx($N, {}), e.jsx(D2, {}), e.jsx(bI, {}), e.jsx(cS, {}), e.jsx(WS, {})]
  }),
  DI = () => {
    var o, i;
    const n = g(),
      t = ((i = (o = window == null ? void 0 : window.Telegram) == null ? void 0 : o.WebApp) == null ? void 0 : i.initData) && window.Telegram.WebApp.initData !== "",
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
          isTMA: mn.isDev,
          authData: mn.devUserInitData
        }
      },
      a = r => {
        try {
          return JSON.parse(decodeURIComponent(r).split("&")[0].replace("user=", "")).language_code || "en"
        } catch (c) {
          return console.log("cant parse language code", c), "en"
        }
      };
    p.useEffect(() => {
      const {
        isTMA: r,
        authData: c
      } = s();
      if (n(Kp(r)), c) {
        const d = a(c);
        n(Hl(d)), n($p(c))
      }
    }, [n])
  },
  kI = () => (p.useEffect(() => {
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
          let o = !1,
            i = !1,
            r = !1,
            c = a.target;
          for (; c && c.id !== "root";) {
            if (c.id === "canvasHolder") {
              i = !0;
              break
            }
            if (c.className === "react-colorful" || c.id === "colorPickerContainer" || c.id === "colorPickerCustomLayout" || c.id === "colorPickerLayout") {
              r = !0;
              break
            }
            if (c.scrollHeight > c.clientHeight) {
              o = !0;
              break
            }
            c = c.parentElement
          }
          if (i || r) a.preventDefault();
          else if (o) {
            const d = c.scrollTop,
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
  RI = "_layout_ieygs_1",
  UI = "_container_ieygs_8",
  OI = "_logo_container_ieygs_17",
  MI = "_logo_ieygs_17",
  QI = "_animate_ieygs_1",
  FI = "_center_ieygs_37",
  zI = "_title_ieygs_51",
  HI = "_description_ieygs_58",
  qI = "_button_container_ieygs_63",
  LI = "_button_ieygs_63",
  VI = "_b_ieygs_63",
  fe = {
    layout: RI,
    container: UI,
    logo_container: OI,
    logo: MI,
    animate: QI,
    center: FI,
    title: zI,
    description: HI,
    button_container: qI,
    button: LI,
    b: VI
  },
  GI = () => {
    const n = l(Da);
    return e.jsx("div", {
      className: fe.layout,
      children: e.jsxs("div", {
        className: fe.container,
        children: [e.jsx("div", {
          className: fe.logo_container,
          children: e.jsx("div", {
            className: fe.logo,
            children: e.jsx("div", {
              className: fe.center
            })
          })
        }), e.jsx("div", {
          className: fe.button_container,
          children: e.jsx("button", {
            className: fe.button,
            onPointerUp: () => {
              n ? pe("https://t.me/notpixel_channel") : wn("https://t.me/notpixel_channel")
            },
            children: "Not Pixel Channel"
          })
        })]
      })
    })
  },
  XI = "/assets/loading-D8SQALTR.gif",
  JI = () => e.jsxs("div", {
    className: nn.loading_container,
    children: [e.jsx("div", {
      className: nn.image_container,
      children: e.jsx("img", {
        alt: "img",
        src: XI,
        className: nn.image
      })
    }), e.jsx("div", {
      className: nn.text,
      children: "Preparing pixels..."
    })]
  }),
  YI = () => {
    const n = g();
    p.useEffect(() => {
      const t = (s, a) => {
        Qt.get(s, (o, i) => {
          if (o === null && i !== "") try {
            const r = JSON.parse(i);
            a(r)
          } catch (r) {
            console.error(`Ошибка парсинга данных ${s}:`, r)
          } else o !== null && console.error(`Ошибка при получении данных ${s}:`, o)
        })
      };
      t("colors", s => {
        Array.isArray(s) && s.length > 0 ? (n($r(s)), n(Na(s[0]))) : console.warn("Полученные данные цветов не являются непустым массивом")
      }), t("boosts1", s => {
        n(Md(s))
      })
    }, [n])
  },
  WI = () => {
    const n = g(),
      t = l(A => A.main.startParams),
      s = async () => {
        try {
          const h = (await n(ze.getUser())).payload.data;
          if (h.error) throw new Error(h.error);
          return n(Zp(!0)), h
        } catch (A) {
          return console.error("Ошибка при получении данных пользователя:", A), !1
        }
      }, a = async () => {
        try {
          n(Fe.getPeriods())
        } catch (A) {
          console.error("Ошибка получения периодов:", A)
        }
      }, o = async () => {
        try {
          await n(_t.info()).unwrap()
        } catch (A) {
          console.error("Ошибка получения информации о майнинге:", A)
        }
      }, i = async A => {
        if (!ti(A)) return Promise.resolve();
        try {
          n(Fe.getMyTemplate({
            id: A.id
          }))
        } catch (h) {
          console.error("Ошибка получения турнирного трафарета:", h)
        }
      }, r = async () => {
        try {
          n(Fe.getSelectedTemplate())
        } catch (A) {
          console.error("Ошибка получения выбранного турнирного трафарета:", A)
        }
      }, c = async () => {
        try {
          await n(it.getWorldTemplate())
        } catch (A) {
          console.error("Ошибка получения подключенного трафарета:", A)
        }
      }, d = () => {
        t.squadId && n(_a(t.squadId))
      }, m = async () => {
        const [A] = await Promise.all([s()]);
        A && (await Promise.all([o(), c(), i(A), a(), r()]), d())
      };
    p.useEffect(() => {
      m()
    }, [n])
  },
  KI = () => {
    const n = Y();
    p.useEffect(() => {
      So() ? localStorage.getItem("skipIntro") || (n.push("/welcome"), localStorage.setItem("skipIntro", "true")) : Qt.get("skipIntro", (t, s) => {
        t === null && s !== "" || (t !== null && console.error("Ошибка при получении skipIntro:", t), n.push("/welcome"))
      })
    }, [n])
  },
  wa = n => {
    let t = "unknown",
      s = "unknown";
    return /android/i.test(n) ? (t = "mobile", s = "android") : /iPad|iPhone|iPod/.test(n) ? (t = "mobile", s = "ios") : /Windows NT/i.test(n) ? (t = "desktop", s = "windows") : /Macintosh/i.test(n) ? (t = "desktop", s = "macos") : (t = "unknown", s = "unknown"), {
      deviceType: t,
      os: s
    }
  },
  ZI = n => {
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
        const o = navigator.userAgent,
          i = wa(o);
        t = i.deviceType, s = i.os;
        break
    }
    return {
      deviceType: t,
      os: s
    }
  },
  $I = () => {
    const n = g(),
      t = l(s => s.auth.authData);
    p.useEffect(() => {
      var i, r;
      let s = "unknown",
        a = "unknown",
        o = "unknown";
      if (t && t !== "")
        if ((r = (i = window == null ? void 0 : window.Telegram) == null ? void 0 : i.WebApp) != null && r.platform) {
          s = window.Telegram.WebApp.platform;
          const c = ZI(s);
          a = c.deviceType, o = c.os
        } else {
          const c = navigator.userAgent,
            d = wa(c);
          a = d.deviceType, o = d.os
        }
      else {
        const c = navigator.userAgent,
          d = wa(c);
        a = d.deviceType, o = d.os
      }
      n(Kc({
        deviceType: a,
        os: o,
        platform: s
      }))
    }, [n, t])
  },
  eT = () => {
    const n = g(),
      {
        t,
        i18n: s
      } = Bs(),
      a = l(o => o.user.languageCode);
    p.useEffect(() => {
      s.changeLanguage(a)
    }, [n, a])
  },
  tT = () => {
    const n = g(),
      t = l(a => a.shop.selectedCurrency),
      s = l(Ze);
    p.useEffect(() => {
      s === de && t === 1 && n(pn(2)), s !== de && n(pn(1))
    }, [s])
  },
  nT = () => {
    const n = g(),
      t = window.Telegram.WebApp,
      s = l(zt);
    return p.useEffect(() => {
      function a() {
        console.log("is fullscreen: ", this.isFullscreen), n(Zc(this.isFullscreen))
      }
      return t.onEvent("fullscreenChanged", a), () => {
        t.offEvent("fullscreenChanged", a)
      }
    }, [n]), p.useEffect(() => {
      if (w) {
        const a = window.innerWidth,
          o = window.innerHeight;
        w.app.renderer.resize(a, o), w.viewport.viewport.resize(a, o)
      }
    }, [s]), null
  };

function Ge(n, t) {
  const [s, a = ""] = n.toString().split("."), o = a.slice(0, t);
  return +`${s}.${o.padEnd(t,"0")}`
}
const sn = window.Telegram.WebApp.Accelerometer,
  an = window.Telegram.WebApp.DeviceOrientation,
  on = window.Telegram.WebApp.Gyroscope,
  sT = new Promise(n => {
    sn.start(null, t => n(t))
  }),
  aT = new Promise(n => {
    an.start(null, t => n(t))
  }),
  oT = new Promise(n => {
    on.start(null, t => n(t))
  }),
  iT = async () => {
    if (!window.Telegram.WebApp.isVersionAtLeast("8.0")) return Promise.reject("Version is too low");
    const n = [sT, aT, oT],
      t = [],
      s = [],
      a = [],
      o = await Promise.allSettled(n),
      i = o[0].value,
      r = o[1].value,
      c = o[2].value,
      d = () => {
        try {
          try {
            if (i) {
              const h = {
                a: Ge(sn.x, 6),
                b: Ge(sn.y, 6),
                c: Ge(sn.z, 6)
              };
              t.push(h)
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
              const h = {
                a: Ge(an.alpha, 6),
                b: Ge(an.beta, 6),
                c: Ge(an.gamma, 6)
              };
              s.push(h)
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
            if (c) {
              const h = {
                a: Ge(on.x, 6),
                b: Ge(on.y, 6),
                c: Ge(on.z, 6)
              };
              a.push(h)
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
    await rn(2400), d(), await rn(1200), d(), await rn(1200), d();
    const m = {};
    t.length > 0 && (m.a = t), s.length > 0 && (m.b = s), a.length > 0 && (m.c = a);
    const A = new TextEncoder().encode(JSON.stringify(m));
    await Oe.rpc("sensor", A), sn.stop(), an.stop(), on.stop()
  };
let bo = !1;
const rT = () => {
    const n = l(s => s.device.deviceType),
      t = window.Telegram.WebApp.platform;
    return p.useEffect(() => {
      n === "mobile" && t !== "unknown" && !bo && (iT(), bo = !0)
    }, [n]), null
  },
  cT = ({
    children: n
  }) => {
    nT(), DI(), $I(), eT(), tT(), rT();
    const t = l(c => c.main.timeLimit),
      s = l(c => c.user.getUserFetchStatus),
      a = s === u.rejected && !mn.app.disableBetaError,
      o = s === u.pending || s === u.idle,
      i = t;
    return window.Telegram && !window.Telegram.WebApp.isVersionAtLeast(zr) && kI(), YI(), WI(), KI(), a || i ? e.jsx(GI, {}) : o ? e.jsx(JI, {}) : e.jsx(e.Fragment, {
      children: n
    })
  },
  lT = () => {
    const n = l(Da);
    return e.jsx("div", {
      className: fe.layout,
      children: e.jsxs("div", {
        className: fe.container,
        children: [e.jsx("div", {
          className: fe.logo_container,
          children: e.jsx("div", {
            className: fe.logo,
            children: e.jsx("div", {
              className: fe.center
            })
          })
        }), "Your Telegram App is too old. Update your app.", e.jsx("div", {
          className: fe.button_container,
          children: e.jsx("button", {
            className: fe.button,
            onPointerUp: () => {
              n ? pe("https://t.me/notpixel_channel") : wn("https://t.me/notpixel_channel")
            },
            children: "Not Pixel Channel"
          })
        })]
      })
    })
  };

function dT() {
  return console.log("version:", window.Telegram.WebApp), window.Telegram.WebApp.isVersionAtLeast("8.0") || window.Telegram.WebApp.version === "6.0" && window.Telegram.WebApp.platform === "unknown" ? e.jsx(cT, {
    children: e.jsx(BI, {})
  }) : e.jsx(lT, {})
}
const uT = {
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
  pT = {
    translation: uT
  },
  mT = {
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
  AT = {
    translation: mT
  };
fr.use(gr).init({
  resources: {
    en: pT,
    ru: AT
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
fA(Sn);
Lr(Sn);
sp(Sn);
const hT = rr.createRoot(document.getElementById("root"));
hT.render(e.jsx(ae.StrictMode, {
  children: e.jsx(dr, {
    store: Sn,
    children: e.jsx(_r, {
      children: e.jsx(ur, {
        manifestUrl: "https://app.notpx.app/tonconnect-manifest.json",
        actionsConfiguration: {
          returnStrategy: "back",
          twaReturnUrl: "https://t.me/notpixel/app",
          modals: ["before"],
          notifications: ["before", "success", "error"]
        },
        language: "en",
        uiPreferences: {
          theme: pr.DARK
        },
        children: e.jsx(dT, {})
      })
    })
  })
}));