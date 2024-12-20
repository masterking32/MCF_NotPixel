var Sa = Object.defineProperty;
var xa = (t, e, a) => e in t ? Sa(t, e, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: a
}) : t[e] = a;
var re = (t, e, a) => xa(t, typeof e != "symbol" ? e + "" : e, a);
import {
  j as A,
  r as C,
  R as Vt
} from "./react-DjWS3H3h.js";
import {
  r as Ta,
  c as Ia
} from "./react-dom-DCoj3sTC.js";
import {
  c as T,
  a as m,
  b as ae,
  d as Ct,
  e as J,
  i as I,
  f as Ea
} from "./@reduxjs-K2ahyHOo.js";
import {
  a as ba
} from "./axios-BdInfei4.js";
import "./yaml-Dy-SgT9h.js";
import "./vite-plugin-node-polyfills-BVIVvkCX.js";
import "./@ton-DLYbX9ET.js";
import {
  u as R,
  a as va,
  P as Pa
} from "./react-redux-uubI8uR8.js";
import "./classnames-D-x1NdaJ.js";
import {
  T as Da,
  a as ka
} from "./@tonconnect-BEZnZ737.js";
import "./@react-spring-DKE08EoY.js";
import {
  C as Ba
} from "./centrifuge-B3TpHLNx.js";
import {
  d as Ra
} from "./fflate-DRb3BoOD.js";
import "./chroma-js-BelInIBW.js";
import {
  u as Ua,
  a as Fa
} from "./react-router-sB3DGMJ5.js";
import "./tonweb-BSP0R_jA.js";
import {
  B as Qa
} from "./react-router-dom-CaNkwuT7.js";
import {
  i as Oa
} from "./i18next-vSwsns86.js";
import {
  i as Ma
} from "./react-i18next-BYxT0jIK.js";
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
import "./tweetnacl-BwY_NA6f.js";
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
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) s(i);
  new MutationObserver(i => {
    for (const n of i)
      if (n.type === "childList")
        for (const r of n.addedNodes) r.tagName === "LINK" && r.rel === "modulepreload" && s(r)
  }).observe(document, {
    childList: !0,
    subtree: !0
  });

  function a(i) {
    const n = {};
    return i.integrity && (n.integrity = i.integrity), i.referrerPolicy && (n.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? n.credentials = "include" : i.crossOrigin === "anonymous" ? n.credentials = "omit" : n.credentials = "same-origin", n
  }

  function s(i) {
    if (i.ep) return;
    i.ep = !0;
    const n = a(i);
    fetch(i.href, n)
  }
})();
Number(window.getComputedStyle(document.body).getPropertyValue("--header-height").replace("px", ""));
const o = {
    idle: "idle",
    pending: "pending",
    fulfilled: "fulfilled",
    rejected: "rejected"
  },
  u = {
    width: 1024,
    height: 1024,
    chunkSize: 750,
    chunkOrder: [6, 7, 11, 10, 9, 5, 1, 2, 3, 4, 8, 12, 16, 15, 14, 13]
  },
  $e = {
    bomb: "Dynamite",
    pumpkin: "Pumpkin",
    pixanos: "Pixanos"
  },
  Va = 24 * 60 * 60 * 1e3,
  d = {
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
  k = {
    paintReward: "paintReward",
    reChargeSpeed: "reChargeSpeed",
    energyLimit: "energyLimit"
  },
  Na = ["/transaction/user/start", "/repaint/finish", "/transaction/user/complete", "/stars/shop/process", "/mining/status/claim", "/mining/claim", "/mining/status/error", "/repaint/complete", "/stars/shop/reject", "/squads/list/get", "/squads/list/update"],
  U = {
    my: "my",
    referred: "referred",
    world: "world"
  },
  La = "unknown",
  N = {
    3: "EQAvlWFDxGF2lXm67y4yzC17wYKD9A0guwPkMs1gOsM__NOT",
    4: "EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs",
    5: "EQCvxJy4eG8hyHBFsZ7eePxrRsUQSFE_jpptRAYBmcG_DOGS",
    6: "EQDv-yr41_CZ2urg2gfegVfa44PDPjIK9F-MilEDKDUIhlwZ",
    7: "EQD-cvR0Nz6XAyRBvbhz-abTrRC6sI5tvHvvpeQraV9UAAD7",
    8: "EQB4zZusHsbU2vVTPqjhlokIOoiZhEdCMT703CWEzhTOo__X",
    9: "EQCuPm01HldiduQ55xaBF_1kaW_WAUy5DHey8suqzU_MAJOR"
  },
  oe = {
    success: "success",
    neutral: "neutral",
    fail: "fail"
  },
  St = "https://notpx.app/api/v1/",
  za = "https://image.notpx.app/api/v2/image";
let Nt;
const ja = t => {
    Nt = t
  },
  p = ba.create({
    baseURL: St
  });
p.interceptors.request.use(function(t) {
  var s;
  const a = (s = Nt.getState().auth) == null ? void 0 : s.authData;
  return a ? t.headers.Authorization = `initData ${a}` : delete t.headers.Authorization, t
});
p.interceptors.request.use(function(t) {
  return Na.includes(t.url), t
});
p.interceptors.response.use(t => t, t => Promise.reject(t));
const Dt = window.Telegram.WebApp.CloudStorage;
let Lt = class {
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
window.Telegram.WebApp.isVersionAtLeast("6.9") && (Lt = class {
  static save(e, a, s = () => {}) {
    Dt.setItem(e, a, s)
  }
  static get(e, a = () => {}) {
    Dt.getItem(e, a)
  }
});
const xt = Lt,
  g = (t, e) => Math.floor(Math.random() * (e - t + 1) + t),
  Ga = t => {
    window.Telegram.WebApp.openLink(t)
  },
  zt = t => {
    window.Telegram.WebApp.openTelegramLink(t)
  },
  Ha = () => {
    const t = "some_test_local_storage_key";
    try {
      return localStorage.setItem(t, t), localStorage.removeItem(t), !0
    } catch {
      return !1
    }
  },
  jt = t => new Promise(e => setTimeout(e, t)),
  Ja = t => {
    if (!t || !t.x || !t.y || isNaN(t.x) || isNaN(t.y)) return !1;
    const e = Number(t.x),
      a = Number(t.y);
    return !(e < 0 || a < 0 || e >= u.width || a >= u.height)
  },
  Xa = () => {
    try {
      let t = window.Telegram.WebApp.initDataUnsafe.start_param;
      const e = {
        coords: !1,
        squadId: !1,
        refId: !1,
        showTemplate: !1
      };
      if (!t) return e;
      const a = t.split("_");
      for (let i = 0; i < a.length; i++) {
        let n = a[i],
          r = n[0];
        n = Number(n.substring(1)), !isNaN(n) && (r === "f" ? e.refId = n : r === "s" ? e.squadId = n : r === "x" || r === "y" ? (e.coords || (e.coords = {
          x: 0,
          y: 0
        }), e.coords[r] = n) : r === "t" && (e.showTemplate = !0))
      }
      return Ja(e.coords) || (e.coords = !1), e.showTemplate && (e.coords = !1), e
    } catch {
      return {
        coords: !1,
        squad: !1,
        refId: !1,
        showTemplate: !1
      }
    }
  },
  Gt = t => !0,
  G = ["#E46E6E", "#FFD635", "#7EED56", "#00CCC0", "#51E9F4", "#94B3FF", "#E4ABFF", "#FF99AA", "#FFB470", "#FFFFFF", "#BE0039", "#FF9600", "#00CC78", "#009EAA", "#3690EA", "#6A5CFF", "#B44AC0", "#FF3881", "#9C6926", "#898D90", "#6D001A", "#BF4300", "#00A368", "#00756F", "#2450A4", "#493AC1", "#811E9F", "#A00357", "#6D482F", "#000000"],
  kt = G[g(0, G.length - 1)],
  Ya = {
    active: kt,
    id: btoa(kt),
    latest: ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
    basic: G
  },
  Ht = T({
    name: "color",
    initialState: Ya,
    reducers: {
      addColor: (t, e) => {
        const a = t.latest.indexOf(e.payload),
          s = t.latest[0];
        a > -1 ? t.latest = [e.payload, ...t.latest.slice(0, a), ...t.latest.slice(a + 1, 10)] : t.latest = [e.payload, ...t.latest.slice(0, 7)], s !== e.payload && xt.save("colors", JSON.stringify(t.latest))
      },
      setColors: (t, e) => {
        t.latest = e.payload
      },
      setActiveColor: (t, e) => {
        t.active = e.payload, t.id = btoa(e.payload)
      }
    }
  }),
  {
    addColor: Ka,
    setColors: il,
    setActiveColor: nl
  } = Ht.actions,
  qa = Ht.reducer;
class S {
  static async getPrices() {
    return p.get("/image/prices")
  }
  static async getPixelInfo({
    id: e,
    signal: a
  }) {
    return p.get(`/image/get/${e}`, {
      signal: a
    })
  }
  static async getRevShareInfo() {
    return p.get("/users/me/revshare")
  }
  static async getUser() {
    return p.get("/users/me")
  }
  static async getStats() {
    return p.get("/users/stats")
  }
  static async getMoreStats() {
    return p.get("/history/stats")
  }
  static async getVerificatedWallet() {
    return p.get("/wallet/address")
  }
  static async checkCaptcha({
    wallet: e,
    captcha: a
  }) {
    return p.post("/wallet/ton-proof/check-captcha", {
      wallet: e,
      captcha: a
    })
  }
  static async checkHasCaptchaCode() {
    return p.get("/wallet/ton-proof/uncompleted-captcha")
  }
  static async getUserPixels({
    offset: e,
    limit: a
  }) {
    return p.get(`/users/mypixels?offset=${e}&limit=${a}`)
  }
  static async getUserPixelsSold({
    offset: e,
    limit: a
  }) {
    return p.get(`/users/mypixels/sold?offset=${e}&limit=${a}`)
  }
  static async getUserPixelsCount() {
    return p.get("/users/mypixels/count")
  }
  static async getPriceMask({
    price: e
  }) {
    let a = e === null ? "" : `/${e}`;
    return p.get(`/image/mask${a}`, {
      responseType: "arraybuffer",
      decompress: !0
    })
  }
  static async startRepaint({
    pixelId: e,
    newColor: a
  }) {
    return p.post("/repaint/start", {
      pixelId: e,
      newColor: a
    })
  }
  static async getHistory({
    offset: e,
    limit: a
  }) {
    return p.get(`/history/all?offset=${e}&limit=${a}`)
  }
  static async getPixanosRating() {
    return p.get("/ratings/pixanos")
  }
  static async buy({
    type: e,
    qty: a,
    pixanosColor: s
  }) {
    return p.post("/buy/stars", {
      type: e,
      qty: a,
      pixanosColor: s
    })
  }
  static async getProducts() {
    return p.get("/buy/list")
  }
  static async useProduct({
    pixelId: e,
    productId: a,
    color: s
  }) {
    return p.post("/repaint/special", {
      pixelId: e,
      type: a,
      color: s
    })
  }
  static async startTransaction({
    buyerWallet: e
  }) {
    return p.post("/transactions/start", {
      buyerWallet: e
    })
  }
  static async startShopTransaction({
    buyerWallet: e,
    goodId: a,
    daily: s = !1,
    currencyId: i,
    quantity: n,
    activeColor: r
  }) {
    let c = a === 13 ? G[g(0, 29)] : void 0;
    return r && G.includes(r) && (c = r), p.post("/transactions/start", {
      buyerWallet: e,
      goodId: a,
      daily: s,
      currencyId: i,
      quantity: n,
      pixanosColor: c
    })
  }
  static async putUserWallet({
    address: e
  }) {
    return p.put(`/users/wallet/${e}`)
  }
  static async getSquadInfo({
    id: e
  }) {
    return p.get(`/ratings/squads/${e}`)
  }
  static async checkSecret({
    key: e
  }) {
    return p.post("/mining/quest/check/secretWord", {
      secret_word: e
    })
  }
  static async getSecretStats() {
    return p.get("/mining/quest/stats ")
  }
  static async getDailyList() {
    return p.get("/daily/list")
  }
  static async getFirstDaily() {
    return p.get("/daily/free")
  }
  static async getRewards({
    userId: e
  }) {
    return p.get(`/users/rewards/${e}`)
  }
  static async getRewardById({
    rewardId: e
  }) {
    return p.get(`/users/rewards/distribution/${e}`)
  }
  static async claimRewardById({
    userId: e,
    rewardId: a
  }) {
    return p.post("/users/rewards/claim", {
      user_id: e,
      reward_user_id: a
    })
  }
  static async generateTonProofPayload() {
    return p.post("/wallet/ton-proof/generate-payload")
  }
  static async checkTonProof(e, a) {
    const s = {
      address: a.address,
      network: a.chain,
      proof: {
        ...e,
        state_init: a.walletStateInit
      }
    };
    return p.post("/wallet/ton-proof/check-proof", s)
  }
}
const Wa = "/assets/icon_stars_new-Dk8ap_HZ.png",
  Za = "data:image/png;base64,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",
  _a = "data:image/png;base64,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",
  $a = "data:image/png;base64,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",
  es = "data:image/png;base64,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",
  ts = "/assets/icon_anon-B5YvKg3f.png",
  as = "/assets/icon_cati-mWXfw3xk.png",
  ss = "/assets/icon_x-DBD55XHy.png",
  is = "/assets/icon_major-BvjI4Z5H.png",
  ns = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAADDklEQVR4nO3dsWsTURzA8ZwUHMQudhGyiItWXISCKHYTNIKD4OLiLHQpqAi6OAiijoH+CU4OCtpBcGipg4jgUt0czGiXQpGCcM6p8fe4vtwl1+/3s75c07v78uBe7pKOJElCKvbudFmWrT4ORVHUugNlWf5zzNqkKIb//UNt3hnlMwA4A4AzADgDgDMAOAOAm8Q17UQXGtY2roXjixffNva//Eej58QZAM4A4AwAzgDgDADOAOAMAG6m6u6XL66H48XdN+F1fmr7lOevN8JX3F/fyvr7KVe7h8NXnJytfEiH9Dd3wuO3NH8kXCfob+5Uej9nADgDgDMAOAOAMwA4A4AzALj9fPY80ev8M4lmP/7aDccvzMXX8bnb939sh+NjWCdIvaTSOXUGgDMAOAOAMwA4A4AzADgDgBt1URpe57+6vZB1xFLX+W137mi8TvBlO15nSK0TpO5HWB3spp67GFoncAaAMwA4A4AzADgDgDMAOAOAq/zh9I2zx8Pxuj/P771/EG9/+Wk4nqv3cjnr/ZdOzIbj+fcTxMdvL2cAOAOAMwA4A4AzADgDgDMAuFH3kIefJ3++1Q2P2Iefv8Px1DpAb+VUrWfk3Z3vU/3+uesAVZ8bcAaAMwA4A4AzADgDgDMAOAOAy3tYfQKm/Tq+7vcfN2cAOAOAMwA4A4AzADgDgDMAuKlbB3h082s4nvqevrZv3zRnADgDgDMAOAOAMwA4A4AzALjG1wFyn68/6Nv3zz8Ox8fNGQDOAOAMAM4A4AwAzgDgDACu8e8HuLcyTz/mod6VT+G43w+gsTIAOAOAMwA4A4AzADgDgGv8foDc5+sP+vZNcwaAMwA4A4AzADgDgDMAOAOAG3U/QEp4v8CzS8fCzXN/NzD1fH3bt0/9XsDqIPm7gJXOqTMAnAHAGQCcAcAZAJwBwBkA3H7WAVLCdYKHp+Pfz6d78i1eB1jszoTnbG3wp9IRdAaAMwA4A4AzADgDgDMAOAOAq2MdICVcJ1Cz58QZAM4A4AwAzgDgDADOAOAMQJIkiabT6fwFAeCnZalTAZIAAAAASUVORK5CYII=",
  rs = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAABXdJREFUeJztnV+IVVUUxu9t9N4sshLJlEntLSptnIcgoRF7GANn6MEnBxRCiP48Rr1EPgS9CBHkQ4kRPli9F0PTGElCKYjjH3QEBxFmrg53YJwgU+6E3F4KWuvYXne5z/bc4/f93tY9+5y97+VjrbX3XmffSoUQQgghhBBCCCEoVIseQCztdrvtaV+tVkv9na3v6/1+D8QNh5QdCgAcCgCcJUUPIG90DPTmCGjQA4BDAYBDAYATnQPExti85+Wx4+n2nCHv34seABwKABwKAJzc1wE+3bFD2KeuXBP24YnjufaXem2/6K2D1CkJPQA4FAA4FAA4991egBfvvD/TfPKVqP4XJy4Ju77ratTzvNADgEMBgEMBgFN4DqBjcNE1e7r7vOfhVsyP7c/7e9IDgEMBgEMBgBMdb615tHdvIHUO0EFdvW4vGzjn/aljfuzvRQ8ADgUADgUATvQ6QNnr8FPP+621fW8Iz3t89ADgUADgUADgFL4XkJronCRyv799Yav84Nmfg+0XD/cKO3V9AD0AOBQAOBQAOPd9DqBJPe83UTlF6r0CC3oAcCgAcCgAcLouB7jX5w3kXX6QmfcrYmM+zwcguUIBgEMBgJO8JlBj1QhOPtIXvP/0sS90/57uo/HWDHZbzNfQA4BDAYBDAYDjXgfw1tW/8e4hYT9jPP+jD94KN1DX+7dIu+gcodtjvoYeABwKABwKAJw83gsQto75w4ObhD114Lvg8/Z+/Lmrf50z7DXG580JrPutGr5ui/kaegBwKABwKABw3PHnDmfQiOvf/3hW2Dqm71o5J2y9F/D1iVPB/vfV5Tz/24GTwtY5wfC2F4Sddw5QeI2hgv8bSFxQAOBQAODkngPMNGUMXL4mrLFlX0q7NqKWJo4susa3b+grYb9f2SPsDublwfbJzxOoL3O1b7VuBa/znEAShAIAhwIAJ/k6wKuDzwn75pKlwtY5gKZnt4yxPT+EY257XMXsz6TGvTlA5vmRMd+K8a33BoLXZ3/9Sdjrf6vJ+505AT0AOBQAOBQAOMlzAI3OCSzGxi8Erw+NbhD23EG517Dq1pPCTr1W743xOqZ7OdpcLezXL8/L/lROwByACCgAcCgAcJKfD9DXt1HYY+PnXPc3rl0X9vzvN4T94sFVdzewu8SK8Wt7nxf21M4Vwo6N+XlDDwAOBQAOBQDOPT8jaGhwY/B6Y05/InMGnQNoPnx7TH7wSYcD+wcrxm/esN31vK1qOI2FfmEfWzsRvF/P8yeur/iflv8yb1yX0AOAQwGAQwGAk8kByvafP15i1+pH/ojrv/fxdcI+2pwVth3jJfsXpqLGQw8ADgUADgUATqYeQOcAo0/L/fuXZy4GH/jobZlC6PoAvTdgceaMXAc4Ozkt7OmGnPce2v9m8Hl578drBqb77Ub/4bU/W8HrVoy3agA1rAcgAgoAHAoAHHMvYPuVcE1edTR8//A237t02b2AMDrme+vqY9Fr9V5Sx3gLegBwKABwKABwMjmAjiF6XWDuoaZoL61KZeUNWYff05LvAuZ9LF6t9mC4wchfwlw9skXYs+/8ErzdvR//sDSnG+eDzVPHeAt6AHAoAHAoAHDcNYFP3LTq8OU8vy1fX69UW+oDJ83HZoT91O31wfb1TceF3Tr9krD9NXeSzDx+QZpFx3gLegBwKABwKABwzBwgNibpdYR2LXzuX/XA5uD1TA5Sdw7oG7kuYcX8otfqU0MPAA4FAA4FAE7h8Sjv9xC8Z+1alD3GW9ADgEMBgEMBgFOqeNUJOqfQOYE3pluULeZr6AHAoQDAoQDAKXX8uhPWukLsOoF19m7ZoAcAhwIAhwIAp9TxqxNSn3nEHICUGgoAHAoAnL8BF6DwHlKpItgAAAAASUVORK5CYII=",
  os = "data:image/png;base64,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",
  cs = "data:image/png;base64,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",
  ls = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACABAMAAAAxEHz4AAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAABhQTFRFR3BM////+8sH4qsEoJDhMJjTe2y0AAAAichSjAAAAAF0Uk5TAEDm2GYAAADISURBVHja7dkxCsJAEIXhdNZeYRDtkxMIQzzB4gVkbCUK7/oOrEZHgq2z8v7mscV+TaqwHWMsa6hNIoKQiOx8CKQHVgCGWl+BaWlAIC8A4DqEHl/+YypyIUCAQCtAL3MEGgVEZGtmmLupqohsfOARSA+IZ2YnVfU5AyilHH1U9VBPhUATgKqOZlavPHs7EUgOeBXZ6JcINAisQwTSA4h/rqq69ysEmgGi8wJGM4tD4J+BGGqLALzOI5AeiE6s8wj8GuAjEmNZuwMoowLyPmOZ5gAAAABJRU5ErkJggg==";
m("main/startTransaction", async ({
  pixelId: t,
  newColor: e,
  buyerWallet: a
}) => (await S.startTransaction({
  pixelId: t,
  newColor: e,
  buyerWallet: a
})).data);
const As = {
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
        image_url: ls,
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
        image_url: ns,
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
        image_url: rs,
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
        image_url: os,
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
        image_url: cs,
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
    getProductsStatus: o.idle,
    useProductStatus: o.idle,
    order: [1, 2, 6, 13, 4],
    selectedCurrency: 1,
    crypto: [{
      currency_id: 1,
      name: "Stars",
      image: Wa
    }, {
      currency_id: 2,
      name: "TON",
      image: Za
    }, {
      currency_id: 3,
      name: "NOT",
      image: _a,
      master: N[3]
    }, {
      currency_id: 4,
      name: "USDT",
      image: es
    }, {
      currency_id: 5,
      name: "DOGS",
      image: $a,
      master: N[5]
    }, {
      currency_id: 6,
      name: "ANON",
      image: ts,
      master: N[6]
    }, {
      currency_id: 7,
      name: "CATI",
      image: as,
      master: N[7]
    }, {
      currency_id: 8,
      name: "X",
      image: ss,
      master: N[8]
    }, {
      currency_id: 9,
      name: "MAJOR",
      image: is,
      master: N[9]
    }],
    limitedGood: null,
    limitedEnd: null,
    showLimitedGoodPopup: !1
  },
  Ae = m("shop/getProducts", async () => (await S.getProducts()).data),
  de = m("shop/useProduct", async ({
    pixelId: t,
    productId: e,
    color: a
  }) => (await S.useProduct({
    pixelId: t,
    productId: e,
    color: a
  })).data),
  Jt = T({
    name: "shop",
    initialState: As,
    reducers: {
      setProductCard: (t, e) => {
        t.activeProductCardId = e.payload
      },
      showProductCard: (t, e) => {
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
      setAmount: (t, e) => {
        t.amount = e.payload
      },
      setAvailable: (t, e) => {
        t.available = {
          ...t.available,
          ...e.payload
        }
      },
      addAvailable: (t, e) => {
        t.available[e.payload.product] += e.payload.amount
      },
      subAvailable: (t, e) => {
        t.available[e.payload.product] -= e.payload.amount
      },
      setSelectedCurrency: (t, e) => {
        t.selectedCurrency = e.payload
      },
      setLimitedGoods: (t, e) => {
        t.limitedGood = e.payload.good, t.limitedEnd = e.payload.end
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
      t.addCase(Ae.pending, e => {
        e.getProductsStatus = o.pending
      }).addCase(Ae.fulfilled, (e, a) => {
        a.payload.goodsAvailable.forEach(s => {
          e.products[s.id] = {
            ...e.products[s.id],
            ...s
          }
        }), e.getProductsStatus = o.fulfilled
      }).addCase(Ae.rejected, e => {
        e.getProductsStatus = o.rejected
      }).addCase(de.pending, e => {
        e.useProductStatus = o.pending
      }).addCase(de.fulfilled, (e, a) => {
        e.useProductStatus = o.fulfilled
      }).addCase(de.rejected, e => {
        e.useProductStatus = o.rejected
      })
    }
  }),
  {
    setProductCard: Tt,
    showProductCard: It,
    hideProductCard: rl,
    increaseAmount: ol,
    decreaseAmount: cl,
    setAmount: Et,
    setAvailable: ds,
    addAvailable: ps,
    subAvailable: Ge,
    setSelectedCurrency: ll,
    setLimitedGoods: Al,
    clearLimitedGoods: dl,
    showLimitedGoodsPopup: pl,
    hideLimitedGoodsPopup: ul
  } = Jt.actions,
  us = Jt.reducer,
  He = {
    getProducts: Ae,
    useProduct: de
  },
  ms = ({
    fontSize: t = 18,
    className: e = "",
    style: a = {}
  }) => A.jsx("span", {
    className: `telegram_icons ${e}`,
    style: {
      fontSize: t,
      ...a
    },
    children: ""
  }),
  gs = {
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
  W = gs,
  hs = () => window.location.hostname.split(".").length === 3,
  fs = () => !1,
  Xt = () => window.location.hostname.includes("dev"),
  ys = () => Xt() ? W.VITE_ADSGRAM_BLOCK_ID : hs() ? "4853" : "4995",
  ws = {
    isDev: fs(),
    devServer: Xt(),
    devUserInitData: W.VITE_INIT_DATA || null,
    devWallet: W.VITE_DEV_WALLET || null,
    apiBaseUrl: W.VITE_API_URL,
    app: {
      disableBetaError: W.VITE_DISABLE_BETA_ERROR,
      adsgramBlockId: ys()
    }
  },
  Cs = () => window.Telegram.WebApp.isVersionAtLeast("8.0") ? window.Telegram.WebApp.safeAreaInset : {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  Ss = () => window.Telegram.WebApp.isVersionAtLeast("8.0") ? window.Telegram.WebApp.contentSafeAreaInset : {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  xs = {
    deviceType: "unknown",
    os: "unknown",
    platform: "unknown",
    fullscreen: window.Telegram.WebApp.isVersionAtLeast("8.0") || ws.isDev,
    safeAreaInset: Cs(),
    contentSafeAreaInset: Ss()
  },
  Yt = T({
    name: "device",
    initialState: xs,
    reducers: {
      setDeviceInfo: (t, e) => {
        const {
          deviceType: a,
          os: s,
          platform: i
        } = e.payload;
        t.deviceType = a, t.os = s, t.platform = i
      },
      setFullscreen: (t, e) => {
        t.fullscreen = e.payload
      }
    }
  });
Yt.actions;
const Ts = t => t.device.platform,
  Is = Yt.reducer,
  Es = "_layout_13e1w_1",
  bs = "_container_13e1w_10",
  vs = "_star_13e1w_14",
  Ps = "_move_13e1w_1",
  ce = {
    layout: Es,
    container: bs,
    star: vs,
    move: Ps
  },
  Ds = "_link_1fn8i_1",
  ks = "_telegram_icons_1fn8i_13",
  Bs = {
    link: Ds,
    telegram_icons: ks
  },
  Je = ({
    children: t,
    className: e = "",
    style: a = {},
    size: s = 12
  }) => t ? A.jsx("span", {
    className: `${Bs.telegram_icons} ${e}`,
    style: {
      fontSize: s,
      ...a
    },
    children: t
  }) : null;
C.memo(() => {
  const t = Array.from(Array(30)),
    e = R(Ts);
  return A.jsx("div", {
    className: ce.layout,
    children: A.jsx("div", {
      className: ce.container,
      children: t.map((a, s) => {
        const i = g(4, 14);
        return e === La ? A.jsx(Je, {
          size: i,
          className: ce.star,
          style: {
            animationDelay: `-${s*300}ms`,
            transform: `translate(${g(-80,-170)*(s%2===1?1:-1)}px, ${g(-100,100)}px)`
          },
          children: ""
        }, s) : A.jsx(ms, {
          fontSize: i,
          className: ce.star,
          style: {
            animationDelay: `-${s*300}ms`,
            transform: `translate(${g(-80,-170)*(s%2===1?1:-1)}px, ${g(-100,100)}px)`
          }
        }, s)
      })
    })
  })
}, () => !1);
const Me = ae(),
  Ve = ae(),
  Ne = ae({
    sortComparer: (t, e) => t.id - e.id
  }),
  bt = ae(),
  _ = ae(),
  Rs = {
    user: null,
    country: null,
    languageCode: "en",
    showRobotPopup: !1,
    verificatedWallet: null,
    verificatedWalletStatus: o.idle,
    checkCaptchaStatus: o.idle,
    hasCaptchaCode: !1,
    hasCaptchaCodeStatus: o.idle,
    pixelsForSale: Me.getInitialState(),
    pixelsForSaleOffset: 0,
    pixelsForSaleLimit: 10,
    pixelsForSaleTotal: 0,
    totalPrice: 0,
    pixelCoins: 0,
    pixelsSold: Ve.getInitialState(),
    pixelsSoldOffset: 0,
    pixelsSoldLimit: 10,
    pixelsSoldTotal: 0,
    pixelsForSaleFetchStatus: o.idle,
    pixelsSoldFetchStatus: o.idle,
    getUserFetchStatus: o.idle
  },
  pe = m("user/getVerificatedWallet", async () => (await S.getVerificatedWallet()).data),
  ue = m("user/checkCaptcha", async ({
    wallet: t,
    captcha: e
  }) => (await S.checkCaptcha({
    wallet: t,
    captcha: e
  })).data),
  me = m("user/checkHasCaptchaCode", async () => (await S.checkHasCaptchaCode()).data),
  ge = m("user/getUserPixels", async ({
    offset: t,
    limit: e
  }) => (await S.getUserPixels({
    offset: t,
    limit: e
  })).data),
  he = m("user/getPixelsForSaleTotal", async () => (await S.getUserPixelsCount()).data),
  fe = m("user/getUserPixelsSold", async ({
    offset: t,
    limit: e
  }, a) => (await S.getUserPixelsSold({
    offset: t,
    limit: e
  })).data),
  ye = m("user/getUser", async (t, {
    rejectWithValue: e
  }) => {
    try {
      const a = await S.getUser();
      if (a.data.error) return e(a.data.error);
      const s = a.headers.get("cf-ipcountry");
      return {
        data: a.data,
        country: s || null
      }
    } catch (a) {
      return e(a.response.data)
    }
  }),
  Kt = T({
    name: "user",
    initialState: Rs,
    reducers: {
      setLanguageCode: (t, e) => {
        t.languageCode = e.payload
      },
      setPixelsForSaleOffset: (t, e) => {
        t.pixelsForSaleOffset = e.payload.offset
      },
      setPixelsForSaleTotal: (t, e) => {
        t.pixelsForSaleTotal = e.payload
      },
      setShowRobotPopup: (t, e) => {
        t.showRobotPopup = e.payload
      },
      setPixelsForSaleFetchStatus: (t, e) => {
        t.pixelsForSaleFetchStatus = e.payload.status
      },
      removePixelsForSale: t => {
        Me.removeAll(t.pixelsForSale)
      },
      setPixelsSoldOffset: (t, e) => {
        t.pixelsSoldOffset = e.payload.offset
      },
      setPixelsSoldTotal: (t, e) => {
        t.pixelsSoldTotal = e.payload.total
      },
      setPixelsSoldFetchStatus: (t, e) => {
        t.pixelsSoldFetchStatus = e.payload.status
      },
      removePixelsSold: t => {
        Ve.removeAll(t.pixelsSold)
      },
      addPixelCoins: (t, e) => {
        t.pixelCoins += e.payload
      },
      subtractPixelCoins: (t, e) => {
        t.pixelCoins -= e.payload
      },
      setPixelCoins: (t, e) => {
        t.pixelCoins = Math.floor(e.payload)
      },
      updateUserSquad: (t, e) => {
        t.user !== null && (t.user.squad === null && (t.user.squad = {}), t.user.squad = {
          ...t.user.squad,
          ...e.payload,
          templateX: t.user.squad.templateX,
          templateY: t.user.squad.templateY
        })
      }
    },
    extraReducers: t => {
      t.addCase(ge.pending, e => {
        e.pixelsForSaleFetchStatus = o.pending
      }).addCase(ge.fulfilled, (e, a) => {
        Me.upsertMany(e.pixelsForSale, a.payload.pixels), e.totalPrice = a.payload.totalPrice, e.pixelsForSaleTotal = a.payload.total, e.pixelsForSaleFetchStatus = o.fulfilled
      }).addCase(ge.rejected, e => {
        e.pixelsForSaleFetchStatus = o.rejected
      }).addCase(pe.pending, e => {
        e.verificatedWalletStatus = o.pending
      }).addCase(pe.fulfilled, (e, a) => {
        e.verificatedWallet = a.payload.wallet_address, e.verificatedWalletStatus = o.fulfilled
      }).addCase(pe.rejected, e => {
        e.verificatedWalletStatus = o.rejected
      }).addCase(me.pending, e => {
        e.hasCaptchaCodeStatus = o.pending
      }).addCase(me.fulfilled, (e, a) => {
        e.hasCaptchaCode = a.payload, e.hasCaptchaCodeStatus = o.fulfilled
      }).addCase(me.rejected, e => {
        e.hasCaptchaCodeStatus = o.rejected
      }).addCase(ue.pending, e => {
        e.checkCaptchaStatus = o.pending
      }).addCase(ue.fulfilled, (e, a) => {
        e.checkCaptchaStatus = o.fulfilled
      }).addCase(ue.rejected, e => {
        e.checkCaptchaStatus = o.rejected
      }).addCase(fe.pending, e => {
        e.pixelsSoldFetchStatus = o.pending
      }).addCase(fe.fulfilled, (e, a) => {
        Ve.upsertMany(e.pixelsSold, a.payload.pixels), e.pixelsSoldTotal = a.payload.total, e.pixelsSoldFetchStatus = o.fulfilled
      }).addCase(fe.rejected, e => {
        e.pixelsSoldFetchStatus = o.rejected
      }).addCase(ye.pending, e => {
        e.getUserFetchStatus = o.pending
      }).addCase(ye.fulfilled, (e, a) => {
        e.user = {
          ...a.payload.data
        }, e.country = a.payload.country, e.getUserFetchStatus = o.fulfilled
      }).addCase(ye.rejected, (e, a) => {
        e.getUserFetchStatus = o.rejected
      }).addCase(he.pending, e => {}).addCase(he.fulfilled, (e, a) => {
        e.pixelsForSaleTotal = a.payload.myPixelsCount
      }).addCase(he.rejected, e => {})
    }
  }),
  {
    setLanguageCode: ml,
    setPixelsForSaleOffset: gl,
    setPixelsForSaleTotal: Us,
    setPixelsForSaleFetchStatus: hl,
    removePixelsForSale: fl,
    setPixelsSoldOffset: yl,
    setPixelsSoldTotal: wl,
    setPixelsSoldFetchStatus: Cl,
    removePixelsSold: Sl,
    setShowRobotPopup: Fs,
    addPixelCoins: Xe,
    subtractPixelCoins: Qs,
    setPixelCoins: qt,
    updateUserSquad: Os
  } = Kt.actions,
  Ms = Kt.reducer,
  $ = {
    getPixelsForSale: ge,
    getPixelsForSaleTotal: he,
    getPixelsSold: fe,
    getVerificatedWallet: pe,
    checkCaptcha: ue,
    checkHasCaptchaCode: me,
    getUser: ye
  },
  Vs = {
    items: []
  },
  Wt = T({
    name: "toast",
    initialState: Vs,
    reducers: {
      addToast: (t, e) => {
        t.items.push(e.payload)
      },
      removeToast: (t, e) => {
        t.items = t.items.filter(a => a.id !== e.payload)
      }
    }
  }),
  {
    addToast: se,
    removeToast: xl
  } = Wt.actions,
  Ns = Wt.reducer,
  Ls = "data:image/svg+xml,%3csvg%20height='18'%20viewBox='0%200%2017%2018'%20width='17'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='m.32%208.22c4.81-2.07%208.02-3.43%209.62-4.08%203.48-1.43%204.87-1.96%205.61-2.13.23-.06%201.45.29%201.45%201.18%200%202.58-1.32%208.8-1.87%2011.67-.23%201.22-1.88%201.6-3.74.45-1.47-.91-2.27-1.52-3.68-2.44-1.63-1.05-.58-1.63.35-2.58.25-.25%204.47-4.03%204.55-4.37.01-.04.02-.2-.08-.29-.09-.08-.24-.05-.34-.03-.14.03-2.46%201.54-6.96%204.53-.66.44-1.25.66-1.79.65-.59-.02-1.15-.05-2.56-.6-.94-.37-1.13-1.02-.56-1.96z'%20fill='%23fff'%20fill-rule='evenodd'/%3e%3c/svg%3e",
  zs = "_layout_1cvcu_1",
  js = "_container_1cvcu_10",
  Gs = "_bubble_1cvcu_16",
  Hs = "_move_1cvcu_1",
  et = {
    layout: zs,
    container: js,
    bubble: Gs,
    move: Hs
  };
C.memo(({
  color: t
}) => {
  const e = Array.from(Array(200));
  return A.jsx("div", {
    className: et.layout,
    children: A.jsx("div", {
      className: et.container,
      children: e.map((a, s) => {
        const i = g(1, 8);
        return A.jsx("div", {
          className: et.bubble,
          style: {
            width: i,
            height: i,
            animationDelay: `-${s*300}ms`,
            transform: `translate3d(${g(-200,500)}px, ${g(-200,200)}px, ${g(0,33)}px)`,
            background: t()
          }
        }, s)
      })
    })
  })
}, () => !1);
class Ye {
  static async claim() {
    return p.get("/mining/claim")
  }
  static async info() {
    return p.get("/mining/status")
  }
  static async checkBoost({
    key: e
  }) {
    return p.get(`/mining/boost/check/${e}`)
  }
  static async checkTask({
    key: e
  }) {
    let a = e,
      s = "";
    if (e === d["channel:notpixel_channel"] || e === d["channel:notcoin_pre_release"] || e === d["channel:purego"] || e === d["channel:probablyinsomnia"] || e === d["channel:tonbeholder"] || e === d["channel:notaspidey"] || e === d["channel:nuvov"] || e === d["channel:seinarukiro"] || e === d["channel:sscaleton"] || e === d["channel:waketonup"] || e === d["channel:GameDevDead"] || e === d["channel:zaegd"] || e === d["channel:fakedonalds"] || e === d["channel:pushinton"] || e === d["channel:notcoin"]) {
      const i = e.split(":");
      a = i[0], s = `?name=${i[1]}`
    }
    if (e === d["x:notpixel"] || e === d["x:notcoin"]) {
      const i = e.split(":");
      a = i[0], s = `?name=${i[1]}`
    }
    return p.get(`/mining/task/check/${a}${s}`)
  }
}
const we = m("mining/info", async () => (await Ye.info()).data),
  Ce = m("mining/claim", async () => (await Ye.claim()).data),
  Se = m("mining/checkTask", async ({
    key: t
  }) => (await Ye.checkTask({
    key: t
  })).data),
  xe = m("mining/checkBoost", async ({
    key: t
  }) => (await Ye.checkBoost({
    key: t
  })).data),
  Js = {
    info: null,
    tasks: {},
    walletVerification: null,
    boosts: {
      [k.paintReward]: 1,
      [k.reChargeSpeed]: 1,
      [k.energyLimit]: 1
    },
    checkError: {},
    toggleAction: {
      [d.invite3frens]: !0,
      [d.makePixelAvatar]: !0,
      [d.boostChannelNotPixel]: !0,
      [d.boostChannelNotCoin]: !0,
      [d.walletVerification]: !0,
      [d["channel:notpixel_channel"]]: !0,
      [d["channel:notcoin_pre_release"]]: !0,
      [d["channel:purego"]]: !0,
      [d["channel:seinarukiro"]]: !0,
      [d["channel:sscaleton"]]: !0,
      [d["channel:waketonup"]]: !0,
      [d["channel:notcoin"]]: !0,
      [d["channel:GameDevDead"]]: !0,
      [d["channel:zaegd"]]: !0,
      [d["channel:fakedonalds"]]: !0,
      [d["channel:pushinton"]]: !0,
      [d["channel:probablyinsomnia"]]: !0,
      [d["channel:tonbeholder"]]: !0,
      [d["channel:notaspidey"]]: !0,
      [d["channel:nuvov"]]: !0,
      [d["x:notpixel"]]: !0,
      [d["x:notcoin"]]: !0,
      [d.jettonTask]: !0,
      [d.solitaireGame]: !0,
      [d.tonDurakGame]: !0,
      [d.earnCoin]: !0,
      [d.earnCoin2]: !0,
      [d.frogApp]: !0,
      [d.tonPoker]: !0,
      [d.flappyBird]: !0,
      [d.stickerStore]: !0,
      [d.boink2]: !0,
      [d.duckChain]: !0,
      [d.starHash]: !0,
      [d.trmnl]: !0,
      [d.hauntedSpace]: !0,
      [d.capsGame]: !0,
      [d.taskTypeCampaign5_74739]: !0,
      [d.taskTypeCampaign6_74738]: !0
    },
    infoStatus: o.idle,
    claimStatus: o.idle,
    checkStatuses: {},
    activeTab: "tasks",
    charges: 0,
    maxCharges: 0,
    addedCharges: 0,
    reChargeSpeed: 0,
    reChargeTs: Date.now()
  },
  Zt = T({
    name: "mining",
    initialState: Js,
    reducers: {
      setCheckError: (t, e) => {
        t.checkError[e.payload.key] = e.payload.value
      },
      setActiveTab: (t, e) => {
        t.activeTab = e.payload
      },
      setToggleAction: (t, e) => {
        t.toggleAction[e.payload.action] = e.payload.value
      },
      setAllToggleActions: (t, e) => {
        t.toggleAction = {
          ...t.toggleAction,
          ...e.payload
        }
      },
      setMaxCharges: (t, e) => {
        t.maxCharges = e.payload
      },
      setRechargeSpeed: (t, e) => {
        t.reChargeSpeed = e.payload
      },
      setCharges: (t, e) => {
        t.reChargeTs = Date.now(), t.addedCharges = 0, t.charges = e.payload
      },
      addCharges: (t, e) => {
        t.charges = Math.min(t.charges + e.payload, t.maxCharges)
      },
      addAddedCharges: (t, e) => {
        t.addedCharges += e.payload
      },
      subCharges: t => {
        t.charges === t.maxCharges && (t.addedCharges = 0, t.reChargeTs = Date.now()), t.charges -= 1
      },
      restoreCharges: t => {
        t.charges < t.maxCharges && (t.charges = t.maxCharges)
      },
      setTask: (t, e) => {
        t.tasks[e.payload.task] = e.payload.value
      }
    },
    extraReducers: t => {
      t.addCase(we.pending, e => {
        e.infoStatus = o.pending
      }).addCase(we.fulfilled, (e, a) => {
        const s = a.payload,
          i = Math.min(s.fromStart, s.maxMiningTime);
        s.tasks && (e.tasks = {
          ...e.tasks,
          ...s.tasks
        }), e.walletVerification = s.walletVerification, s.boosts && (e.boosts = {
          ...e.boosts,
          ...s.boosts
        }), e.info = {
          ...s,
          coins: s.fromUpdate === 0 ? i * s.speedPerSecond : s.coins,
          initTs: Date.now(),
          coinsFromUpdate: s.fromUpdate * s.speedPerSecond,
          boosts: void 0,
          tasks: void 0,
          charges: void 0,
          maxCharges: void 0,
          reChargeTimer: void 0,
          reChargeSpeed: void 0
        }, e.charges = s.charges, e.maxCharges = s.maxCharges, e.reChargeSpeed = s.reChargeSpeed, e.reChargeTs = Date.now() - (s.reChargeSpeed - s.reChargeTimer % s.reChargeSpeed), e.addedCharges = 0, e.infoStatus = o.fulfilled
      }).addCase(we.rejected, e => {
        e.infoStatus = o.rejected
      }).addCase(Ce.pending, e => {
        e.claimStatus = o.pending
      }).addCase(Ce.fulfilled, e => {
        e.claimStatus = o.fulfilled, e.info = {
          ...e.info,
          coins: 0,
          initTs: Date.now(),
          coinsFromUpdate: 0,
          fromStart: 0,
          fromUpdate: 0
        }
      }).addCase(Ce.rejected, e => {
        e.claimStatus = o.rejected
      }).addCase(Se.pending, (e, a) => {
        const s = a.meta.arg.key;
        e.checkStatuses[s] = o.pending, e.checkError[s] = !1
      }).addCase(Se.fulfilled, (e, a) => {
        const s = a.meta.arg.key;
        e.checkStatuses[s] = o.fulfilled, e.tasks[s] = a.payload[s], e.checkError[s] = !a.payload[s]
      }).addCase(Se.rejected, (e, a) => {
        const s = a.meta.arg.key;
        e.checkStatuses[s] = o.rejected, e.checkError[s] = !0
      }).addCase(xe.pending, (e, a) => {
        const s = a.meta.arg.key;
        e.checkStatuses[s] = o.pending, e.checkError[s] = !1
      }).addCase(xe.fulfilled, (e, a) => {
        const s = a.meta.arg.key;
        e.checkStatuses[s] = o.fulfilled, a.payload[s] && (e.boosts[s] += 1), e.checkError[s] = !a.payload[s]
      }).addCase(xe.rejected, (e, a) => {
        const s = a.meta.arg.key;
        e.checkStatuses[s] = o.rejected, e.checkError[s] = !0
      })
    }
  }),
  tt = t => {
    const e = k.paintReward,
      a = t.main.settings,
      s = a.UpgradeRepaint,
      i = t.mining.boosts[e];
    return i === 1 ? a.RepaintReward : s.levels[i].Boost
  },
  {
    setCheckError: Tl,
    setActiveTab: Il,
    setToggleAction: Xs,
    setAllToggleActions: El,
    setMaxCharges: Ys,
    setRechargeSpeed: Ks,
    setCharges: qs,
    addCharges: Ws,
    addAddedCharges: bl,
    subCharges: Zs,
    restoreCharges: vl,
    setTask: Pl
  } = Zt.actions,
  _s = Zt.reducer,
  M = {
    info: we,
    claim: Ce,
    checkTask: Se,
    checkBoost: xe
  },
  $s = "data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M5%200C2.23858%200%200%202.23858%200%205V27C0%2029.7614%202.23858%2032%205%2032H27C29.7614%2032%2032%2029.7614%2032%2027V5C32%202.23858%2029.7614%200%2027%200H5ZM21.4261%2010.5739H10.5739V21.4261H21.4261V10.5739Z'%20fill='white'/%3e%3c/svg%3e",
  ei = "data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M5%200C2.23858%200%200%202.23858%200%205V27C0%2029.7614%202.23858%2032%205%2032H27C29.7614%2032%2032%2029.7614%2032%2027V5C32%202.23858%2029.7614%200%2027%200H5ZM21.4261%2010.5739H10.5739V21.4261H21.4261V10.5739Z'%20fill='%238794a1'/%3e%3c/svg%3e",
  ti = {
    white: $s,
    gray: ei
  },
  _t = ({
    size: t = 11,
    className: e = "",
    style: a = {},
    color: s = "white",
    ...i
  }) => A.jsx("img", {
    alt: "",
    className: e,
    style: {
      width: `${t}px`,
      height: `${t}px`,
      ...a
    },
    src: ti[s],
    ...i
  }),
  ai = "_layout_1at34_1",
  si = "_container_1at34_10",
  ii = "_item_1at34_14",
  at = {
    layout: ai,
    container: si,
    item: ii
  },
  ni = 8,
  ri = 16,
  oi = 500,
  $t = 800,
  Bt = window.innerWidth,
  Rt = 100,
  ci = () => Array.from(Array(100)).map(() => {
    const t = g(ni, ri),
      e = `hsl(${g(0,360)} , 70%, 50%)`,
      a = g(oi, $t),
      s = g(-Bt, Bt),
      i = g(-Rt, Rt);
    return {
      size: t,
      color: e,
      speed: a,
      x: s,
      y: i,
      transform: !1,
      opacity: !1
    }
  });
C.memo(({
  runParticle: t,
  setRunParticle: e
}) => {
  const [a, s] = C.useState(ci()), [i, n] = C.useState(!1);
  return C.useEffect(() => {
    t && setTimeout(() => {
      n(!0), setTimeout(() => {
        e(!1), n(!1)
      }, $t)
    }, 200)
  }, [t]), A.jsx("div", {
    className: at.layout,
    style: {
      visibility: t ? "visible" : "hidden"
    },
    children: A.jsx("div", {
      className: at.container,
      children: a.map((r, c) => A.jsx("div", {
        className: at.item,
        style: {
          width: r.size,
          height: r.size,
          backgroundColor: r.color,
          transition: t ? `all ${r.speed}ms ease` : "",
          transform: t ? `translate(${r.x}px, ${r.y}px)` : "translate(0px, 0px)",
          opacity: i ? 0 : 1
        }
      }, c))
    })
  })
});
Me.getSelectors(t => t.user.pixelsForSale);
Ve.getSelectors(t => t.user.pixelsSold);
Ne.getSelectors(t => t.daily.list);
bt.getSelectors(t => t.reward.list);
_.getSelectors(t => t.tournament.approvedTemplatesList);
const li = "_main_canvas_1cgxj_1",
  Ai = {
    main_canvas: li
  },
  ht = t => ({
    x: (t - 1) % u.width,
    y: Math.floor((t - 1) / u.height)
  }),
  O = ({
    x: t,
    y: e
  }) => t + e * u.width + 1,
  ee = ({
    x: t,
    y: e,
    width: a,
    blockSize: s = 4
  }) => (t + e * a) * s,
  st = ({
    index: t,
    width: e,
    blockSize: a = 4
  }) => {
    const s = Math.floor(t / a);
    return {
      x: s % e,
      y: Math.floor(s / e)
    }
  },
  Z = t => {
    const e = parseInt(t.replace("#", ""), 16),
      a = e >> 16 & 255,
      s = e >> 8 & 255,
      i = e & 255;
    return {
      r: a,
      g: s,
      b: i
    }
  },
  Le = (t, e, a) => ("#" + (1 << 24 | t << 16 | e << 8 | a).toString(16).slice(1)).toUpperCase(),
  H = t => !(t.x < 0 || t.y < 0 || t.x > u.width - 1 || t.y > u.height - 1),
  Te = m("canvas/repaint", async ({
    pixelId: t,
    newColor: e
  }) => (await S.startRepaint({
    pixelId: t,
    newColor: e
  })).data);
let j = null;
const ft = m("canvas/getPixelInfo", async ({
    id: t
  }) => (j !== null && (j.abort(), j = null), j = new AbortController, (await S.getPixelInfo({
    id: t,
    signal: j.signal
  })).data)),
  Ie = m("canvas/getPrices", async () => (await S.getPrices()).data),
  Ee = m("canvas/getPriceMask", async ({
    price: t
  }) => {
    const e = await S.getPriceMask({
        price: t
      }),
      a = new Uint8Array(e.data);
    return f.mask.draw({
      arr: a
    }), {
      result: !0
    }
  }),
  di = () => Ha() ? localStorage.getItem("enableAnimations") ? localStorage.getItem("enableAnimations") === "true" : (localStorage.setItem("enableAnimations", "true"), !0) : !0,
  pi = {
    coords: null,
    animations: di(),
    stats: null,
    pixelInfo: null,
    getPixelInfoFetchStatus: o.idle,
    repaintFetchStatus: o.idle,
    prices: [],
    selectedPrice: null,
    priceMaskFetching: !1
  },
  ea = T({
    name: "canvas",
    initialState: pi,
    reducers: {
      setCoords: (t, e) => {
        H(e.payload) && (t.coords = e.payload)
      },
      setSelectedPrice: (t, e) => {
        t.selectedPrice = e.payload
      },
      setPriceMask: (t, e) => {
        t.priceMask = e.payload
      },
      enableAnimations: t => {
        localStorage.setItem("enableAnimations", "true"), t.animations = !0
      },
      disableAnimations: t => {
        localStorage.setItem("enableAnimations", "false"), t.animations = !1
      },
      updatePixelInfo: (t, e) => {
        t.pixelInfo = {
          ...t.pixelInfo,
          ...e.payload.changes
        }
      },
      addPaintCoords: (t, e) => {
        H(e.payload) && (t.stats = O(e.payload) ^ 3201282)
      }
    },
    extraReducers: t => {
      t.addCase(ft.pending, e => {
        e.getPixelInfoFetchStatus = o.pending
      }).addCase(ft.fulfilled, (e, a) => {
        e.pixelInfo = a.payload, e.getPixelInfoFetchStatus = o.fulfilled, j = null
      }).addCase(Ie.pending, e => {}).addCase(Ie.fulfilled, (e, a) => {
        e.prices = a.payload.prices
      }).addCase(Ie.rejected, e => {}).addCase(Ee.pending, e => {
        e.priceMaskFetching = !0
      }).addCase(Ee.fulfilled, e => {
        e.priceMaskFetching = !1
      }).addCase(Ee.rejected, e => {
        e.priceMaskFetching = !1
      }).addCase(Te.pending, e => {
        e.repaintFetchStatus = o.pending
      }).addCase(Te.fulfilled, e => {
        e.repaintFetchStatus = o.fulfilled
      }).addCase(Te.rejected, e => {
        e.repaintFetchStatus = o.rejected
      })
    }
  }),
  {
    setCoords: ze,
    enableAnimations: Dl,
    disableAnimations: kl,
    addPaintCoords: ui,
    setPriceMask: Bl,
    setSelectedPrice: Rl,
    updatePixelInfo: Ul
  } = ea.actions,
  mi = ea.reducer,
  vt = {
    getPixelInfo: ft,
    getPriceMask: Ee,
    getPrices: Ie,
    repaint: Te
  };
class gi {
  constructor({
    viewport: e
  }) {
    this.viewport = e, this.pixiViewport = e.viewport, this.pixel = null, this.line = null, this.hexColor = "#42a6ff", this.color = `0x${this.hexColor.replaceAll("#","")}`
  }
  draw({
    x: e,
    y: a
  }) {
    H({
      x: e,
      y: a
    }) && (this.destroy(), this.drawLine({
      x: e,
      y: a
    }), this.drawPixel({
      x: e,
      y: a
    }))
  }
  destroy() {
    this.destroyPixel(), this.destroyLine()
  }
  drawPixel({
    x: e,
    y: a
  }) {
    this.pixel = new PIXI.Graphics, this.pixel.lineStyle(.21, this.color), this.pixel.drawRect(e - .1, a - .1, 1.2, 1.2), this.pixel.zIndex = 10, this.pixiViewport.addChild(this.pixel)
  }
  drawLine({
    x: e,
    y: a
  }) {
    this.line = new PIXI.Graphics, this.line.setTransform(.5, .5), this.line.lineStyle(.2, this.color), this.line.moveTo(-.5, a).lineTo(e - .5, a), this.line.moveTo(e, -.5).lineTo(e, a - .5), this.line.moveTo(u.width - .5, a).lineTo(e + .5, a), this.line.moveTo(e, u.width - .5).lineTo(e, a + .5), this.line.zIndex = 10, this.pixiViewport.addChild(this.line)
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
const b = {
    idle: "idle",
    start: "start",
    finish: "finish"
  },
  hi = {
    command: b.idle,
    counter: 0
  },
  ta = T({
    name: "progress",
    initialState: hi,
    reducers: {
      setProgressCommand: (t, e) => {
        t.command = e.payload.command, t.counter = t.counter + 1
      }
    }
  }),
  {
    setProgressCommand: B
  } = ta.actions,
  fi = ta.reducer,
  yi = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAElBMVEVHcEz/////96f/uQD/WQDnERFRxRXOAAAAAXRSTlMAQObYZgAAAKRJREFUeNrt1MENgzAQRNEVUEBqmKUA5DF3C7sApJj+W4kQKcCjHLP//m6jsSiKoiiKon9uKjpZbYZIPEEkM6ESQCW8hQto2r7ExwnwkH2YzHhikUk+h8mSHuLCBBIO3K3j5O0HEgAfJz1XOAGOk0Y2eKVJJB2eFdKvnnbShFpl3clTIWRtVSJGdmYWhdR8ceubQuZiLCa1mDWTe8UzR1EURT/0AVQMHG7ZD4ErAAAAAElFTkSuQmCC",
  wi = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAD1BMVEVHcEz/96f/uQD/WQDnERHKPBirAAAAAXRSTlMAQObYZgAAANhJREFUeNrt1cFthTAQhGHyoIFZN/A8SwHEQwGI0H9N0dNKOa+V634Hbr/QyLK8lFJKKaXMOucTXasvA1OJBoCpJArLB18Ink9eUZhL2WSNhPnE1KMxnckENhB0ZBMQwa/0EkNouWKgoyFYLukwtIGQTcCOHklu/jdgf2ve2aNvAPrE/q3DAbDn92+D6jAYCXBJEUkXGkxK3xVyQELLJpvORwPcH2rJWSXSSZ3UNZV4b4ok40Xuuru5jmyykvtzk++fSDLIY7k/nzz651e+TBhHPTGllFL+5xfUYCDCcZqQBQAAAABJRU5ErkJggg==",
  Ci = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAD1BMVEVHcEz/96f/uQD/WQDnERHKPBirAAAAAXRSTlMAQObYZgAAAQRJREFUeNrt1sFxxCAMheEXewtAJAUY4QIwcgGJof+aQtiZ3b2tdMlJ3/0fATrYcM4555zZBjMCsNg62oCfMDLSJwQcAUiWZPhMRNGUTAHf1mRr0FkeSS3Q+XgkOVGARqIXm/YaT6YJU9Te4ynAPCbAPCaaljIlxZM1JusLrJUG02ZuNVmKaeFIQ6SJAU1yH5NUM6aLX5MAhcYH/eGkTiRXGiIPuoMtOQsP6V7pEj7rHDCbrEqqiJwXTcwFbzU5s9S5ljhPp0n6JQdRoigiqIS3zo51H8kXZ5EMCFTWkexNWoZeJZLe0wa9hSITZRisXHrvMNlxk2L+9LUCq1vxnwbnnPtnvyvQK1qRfQjwAAAAAElFTkSuQmCC",
  Si = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAD1BMVEVHcEz/96f/uQD/WQDnERHKPBirAAAAAXRSTlMAQObYZgAAAYJJREFUeNrt1tGN2zAQhOGJ5QIyvBQg7roA3a4KcEL2X1O0MpDY8IEikbdA3/uPEWXCEE6n0+n0n7lg2LcZm2kZSdK+NY8knAH8umGTv3cmMWMaBXsTzri640J2JheGpEZG3IVPgDuOTfwrofQ/2MOHrOiQX5JlcITJMzk0sktom5wvjn4ahrEk8ytz+6p85fhlDZ4+N5KBmTQPz2SyEV3d3kcOXlux/DbSLGJG3pJWEYpkvvo8KHCVzMRnFkWTCPPzsZPajKNEXs6duWAsScd/S1cR5cOeSkdi4nwwIWPyA22T6ZoZkknIVLSVLZG90RpNQJu7riYb9VqMHcnVXbzIZitEjREtR4l5qLW6iBtJUbRM7iWKzLS6iKlnMjVnivvq7kby5qam7kJqO1lrUf8k+cN3CzwTDV7vgJU/yWoLMBmOTLefkcRDFkUfi5Vb3QpZ0MnI5LWWrOh1IVVIKrpNIm4ijpFEUWu9Y4Dc4+5gxA1AGUvu+xXFsHJ+zZ5Op3/zG2ZWUn+tdqomAAAAAElFTkSuQmCC",
  xi = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAD1BMVEVHcEz/96f/uQD/WQDnERHKPBirAAAAAXRSTlMAQObYZgAAAnBJREFUeNrtl12y2jAMhV2SBVSiC4iPuoDEJwu4c8P+11TLLoROr0P80ocO3/AzAX+RLNlmCG/evHnzD7lM/Yr1K7E7zLBob36DyOSKdSkehgznEQ8zWOpTNFyAORSSnUgsExIw1cs0nVMmAOZlu8h1PqcoMuEime8nWim/AeSsEuUPpn6F7FdwNPHZX7KhortnrxXJRMkKqqYpfNOvBWDeayyI6opjITaUZDJlA0WBAYasOhFTIy3WwTWKJRAgy4Uctl00VoUkAIqjL9oOf4KZBNqLbkZxFFF5B3uQgzBaY3xszJSq2dzuS6qKuhFGtwD/oK2EJd6VNV9tYWMimSQcKFqmDjIURjLWuusAfJEWzEhAFFyfe6WSSV8pAVEWgYrCjcLt05X2HhhcqTv4AaTQLBsFpcSY/1IUc6vIgCu2zw8i/oitdiaJboBPzYUjy7XVS0RRGLnfQ1SjRuF8sO8V3L/f6pKTg/4nZKJcHwoEmaOFCUf2ESMTnCkcR5E9SjACRq5t5eJGfDpTSwVJtpVPeM2eGi2igB1FYVFE62/rYENRcKCMrImJqB+DbhflaFsSGVe83YNI1uG0lY3poSguHg2Fn02FRUFVRONDsQOFBkcUPl4EiMVqz56rJdRRkoFT3j+as+e60BWRopSeECI6N2fP23ZlqklVhVw3tI/YbNxuC0lXoiu1i+OGlpKiiN2UTCK4K5/hEL8fCKvbxg2sMbxiy4kQd4zpRzjDszJ8nFK2KFozI8M5RlcsubKGk4iokVGuc+hQSCZYj2K8jQTPK1GZC0V2KLA19CprXaUe6yRWho6WQi/L9f3X7M1/zC/mbn/kN4xkqQAAAABJRU5ErkJggg==",
  Ti = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAElBMVEVHcEz/96f/uQD/WQDnERFAMiwoKjrVAAAAAXRSTlMAQObYZgAAArpJREFUeNrt10F2mzAQBmDV4H1H5ADMrx4Aa9Q9CXif9xLuf5VqJHCTgGJot/4XXvjxSYw0kp/NI4888khK1R0n4V9nkQOkfm4T6Q8QtiZmPEKIWiXmQIh0Gu+OEJ2mApZZpd9DrDkB8/6McldUFGM80JqU07iPtAC0GBgms49YQIthItpBTjQHYNpJeDFMGnucNNIdJr4td0reMiayFvqZib1PUuGIBqAU197p64rIwokHFmK77aYR6W8kCo3HhTgZetrqgCHk/kUWv4dZqWH6uVnIeNs+dCLX6T0ZJENt6WRpGHCmCtcwjYsp7+a8pIAEc56GaXodlldry72VyaDkGokZrpN4Jivm22nYvl8jiTFmmsKbB9CWiHAiEse/keF7UtkbMeeZxIUDWepKhFhrCUpyppgB4intnHyBtYRTXp/fOr7mnMgEsiCytXwlRi7UkOWFZKTEsyXN0+r+rH0kBLg81s28vszk57rPRrZMbN2nsaYpHblC09RxOLDFalUSsei2VowtWTjzMefX8xuDCGzXYOl8+UKmd8TQpTGbWROtxmqR0hVITFgR6JKp2EvOrwCKJ6ZS0m8M1JYvPQAuHCKVEuk3vi2jRLoVcSKhIGoAdkVOgIgUSOUBWhXjAVecZfAA26Zfl1Iky0W8EnBdoRSRTLrPlWgKpMqEqflcieZXkXifUXf7zmbiCtWLvAgAAtwiCOCktomIDI0HiMnOZl4PAvoCCeNFJD3DeQ4LOBEQ2e36oxiHRsRHkpb1okQkDChd/jpYeHYirI+CZfnpMPVQ7MvRw3kIciiTF/Ntaum103LyZIHNvWSyxIl/uk9qT/SBVL25nxclJr+ZiNmTH/k2yyTsJU605ZiazuwjOrgSD7eTnPJhrmuB7CWQfm663cSpOEbC3wOk+Ehq583RXJrHX9NH/jt/AL3WmbEKtmBpAAAAAElFTkSuQmCC",
  Ii = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAFVBMVEVHcEz/uQD/WQDnERFAMiyACgUZDg0R26nsAAAAAXRSTlMAQObYZgAAAthJREFUeNrt18GO2jAQBuBZzHJmTMU5Hrecsx5xb3etnNGi3AFF8/6PUNsJywJ2Sa4VvxBSJH+ZxB6TAM8888x/mFk1nVjoQ9OrUD2WqPNIHk/gTGAC0dMnAKup5AVvyjj7mMQy6mvGlKtGEA3gqLpM4mMSyxBZGJ23QJaKiKBPNY7oWSB17IUZLscRpJAKZohYJpflNthHE+FI0g/cnFD3dMS9kBaDKGIGwvyYrCVU6JrjmVB+GNWXFlt3Xuben8TgRgxaGnZesY1ecO19E0gjRy1yRO2yfab42xz/SCTktOn8EdHmN5y6IYtIGvH+DyIaLLVW6l+D+qf3v6GLJHy9y0ljiQzLN5BYRgIREURdIskEFAYfAOJ1pUJiSqs5i0AMUSoCEkQk4XPUUIhB3EgnIpEsAGAg/mhrKJYR8U1PDhBNlwgRFKJcJF7CwAi6BhYSD/wpSxRZgDcTSCwjANEcIF1mA2aVM1QFojfSXciigbkECWCWEOOouioTjizzRvxvkQOkeJgfgoSODGIFiq4JMCC+4WYYfyapmm9OGALqptFUbQJZfydNJMlIIsD3k0yoFwJfOQxVwIspNA3h7QokL4EckWyOOLzpJjn0RORE+T5TVNgYIi8rrPMtY5aQD64Y8oSq0g/oCiYRRcUdAy5PHNVQCmVJ9xHJlCoL74ksTLmXzntm3hXIZ4FY5rpAOHfR3vv3YpVXtpAl3paIypbvUhnIZ58l80hsgTDXKjvJ3tGuROJXxnxQYTFfs0RR/0Av3D1v67s3lhkZRE2/SqTdc8h1EzG7gGyBtG17RyxzG4zO30sbc092AK0jgDK6JspuK/hn2vbm4Tuzn0vIJNOcyg4HbHaPyd4sARxRRI7rLTzOq0FQlUorbke+kyNqW6enlLK8G0viydkhMsBIkk7OTDSWGB0F7PbOjiVkt+emG02CmEjs7msDBTwtn1xNJQrr51/gZ67yF2l/ou0eQckjAAAAAElFTkSuQmCC",
  Ei = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAElBMVEVHcEz/WQDnERFAMiyACgUZDg3ZC39iAAAAAXRSTlMAQObYZgAAA7xJREFUeNrtmE2TozYQhhUDd0vZ3FEDdw0Nd1bGdy+y/v9fSbfEEAKiAqmtrdqqeS+iGD3qD3X32BZf+tKXtpL/AynFKf1xXx7hLKL+QcRJ5E8jZqE4qWpBzGlEXEZQXFYmEtJKXFSu75ctd+VlBM9u9MvTfyZPS774AvvTWbxJKcsZcf25miFEEeJQOMTXWUTOHiFqJbJDDBbHomdalogd0Rm+YpEfIoKReyArbIl2hByXwGLl2xBCwg5giEi2aTk6a7mD74yoR1geaGvhI2JSdRcRkCSowlJ770y6Xm+AyzNoMgIPAF6cQ3PQPrdPpDAWWDgvTof8pfR5mMMOSLWPCzrJKpN9FBH2g89/eOwsLTgF5J42MyOtQksEydkad0gCRC15v1Z9oPAjIN8O71CVjDSIvZSNb6VCbAOihjSiQ4lYYESrxutYMSwYDoywmg6eiB6g79gh18VrKo+KnjdRBISQLDvk3xA07F0qPxHVYx/idnw8eD9fkyj6jQEkLiLkliYOnQ1bI/P0wuGLfV8YTYgMoki+c9jouoA4XVmoMSJ6hdyqBWneHC/PihHGx8TP9tHKkh3jVlgEJtNMKKhazUmI/Y5TDE9LFUZgXu6TDPBoQcr5sCJevmcwNQKdJYKQbpVTF5Ef6QYo+hZYiJ0dl7ehnStCUozDd+yQdf7zGOCULk3EnjtkKF7r+CLS6STiuEzGetjMhODYpBl87WJBYrZvc9BSjc+JSdiP9IwRj2bDkJ4UpaxHTJjpPff+1pCtn76FcXygEVt574V3JhEkJ7NOISKGkkLQAiAhJ1UQ0edQI75OfyZw2NNmApOEVO6VKKUZPECwlYprNgGm/HIA4HSYwIboc3ECTPM4/SzdW1xv6QMyni0/IjLSouIkCVY/GExZ0bJqw5a8lqQYHr/Aj4OxrLnOAWCF3Obh1iaR+OeKe8ZPwKdn7FBQ9U6OWBN8+MvZOvwn41gWpPF22MdujAyI93xrHdQjbZKtnN8iHiLNJEsXxysjODvWqj0icqNn5M7N1gWk8RDCr7QsE8gQwkfUJSMuzNLeA7cypJFxyEHK0BUFek+948yNE8h6WkghmbEANQ/4wnvXM0IGlk8Bw94vQnjWh0r3c6VrCty/7ZjFKYJbZH2MQ1M4IaxUjSdliAa7PUIzZFVvL4+EADSIZBFRYDeIHfLvV4zkFDgj846Ts8IT8lrOPKWQ7iBCTn0fMau3hPxMobkI5AOai99COJmXkXWY4ylmHFdOjlc9ywm/ql+BMPMb/ajxN8we1xzBMA0/AAAAAElFTkSuQmCC",
  bi = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkAgMAAAANjH3HAAAADFBMVEVHcEznERFAMiyACgVxtGBQAAAAAXRSTlMAQObYZgAAAodJREFUeNrt1TFqG0EUBuA/GgTGeJnG6d0EzDZxs53N6ggq8phmQVdYkjYgBR8gV1ATMGlyhQGfYVATcoZp1I15mZ0dzay16ygkkCo/KoQ+3lvtm5ld/M/vpvoDqTGRJXxuJ0A08Lmekh9BNhO03eKQy5MyjntZbjDMDKcz+3xC/kXOMEyxQs58KBXpkbxBl9fUZpEI+aJ7WaJoosTxfvNyvq2oiR2zyG0nc3qXO25SbahR2lBsd4GU2dZ42dMKOxzH/6qZ1oLwLOcPeKK1ZmZB+kiumBm1Fz4W1F4EOzCeywaSHSBtiXH6NuVoM4oW2HVyT+rZCoSRkfbyiQ6DeLUAKmqLpsTOCwqiZZT3gCElXQkGjI5SLCAsQESPXgBB7Zyo6QXXQTQQWjW+ZhWXpoTwYoPcBVkDeKvDpYiUDaeupo9yT4wuSSrVCTvB7OXsOojwre2eNMKImF0+sobWvQi2Xm1evTvF9knpvsEHfsxrJJk1c6xv6oIWQ5GuXw5Dej7YlKGgF6LFnFTaOILj/p91UhDpgwD4isMdtDLLxn+iSKImS+iPgRiVZZbE+G5P6yQ5cr+yYMZEmIcimiFZ1A4xVZCUBzmUokPT9oIUXx0WjppjEQ6GAEkqSQ55qYlSxxyjopAa3YYXQ2Gi+J6vo1B3slcoiBqo4TNHOIQjNydSyKM21IahsrsMYqJ0vZdBandZEBE47VEvlQYg7a3/rlAPpK0Wsd7QCinCS9G33gkmLjMZOlTQI7MrRRth0+3cKG3N9rxo0qz5IMYKByTRIglb+EiHUXoRUYS1mM59ltMvI/Gi3LxcoxGiJ+REh1P/6srFIY7J/bqnxDgXvYipC6Wi6ci/eqn+BJYAHRseeKj2AAAAAElFTkSuQmCC",
  vi = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkAgMAAAANjH3HAAAADFBMVEVHcExiV01AMiyACgVW8W35AAAAAXRSTlMAQObYZgAAAipJREFUeNrt0jGK20AUBuA/EoaVWFDl3o1CrGpvIB/BRd7EeBuVwU2uMGy6NKmUeiAY7NlDWNk75A5hq4lrw2Tk0egh24GQLIGE/cFYw8e8mfck/MeJ8ZS5usLTpPk5TdAnwq/lT291jX81k99tVsEnWeI0Ei43yEkixC3BGVN1VjPIPDuRbmdOi7LBpYzodSu5xDAZchIfAdSzEymbmoScOBneIzZls6alBKDVsNYhw5ZWbbVCDmsdAK11FjoYSFxoDeAAnzAxJ0h334YyAXJ6Z14C1iQVhqlJoL6T1owWgEJOVZgqEcn67rPb89aJHJPw37MX7WT/QfkSBJ/IiSok7IMEEB9YXhAJBaD0Tdu2BKDAgk6+Eqm+2nIowvS3XrUSd/JIt6HfqdAKN6Ybu33U90FSrSXQSWLd0gwkHFpBa3RRWoNFoNj0Ejnh5pApcAZSNp/ixi83LAmRLB/ofZBIBpkSVVlCM1wUjNzvLAWRdCIuSL2Sx8POJNJavkp7MYgbJhbEB8QG4KS1CJIfH/JFkO3KC/YkYwBj0QnPNDqWjWqSZ6J3TVu9b52nXVjDEgFpJ8kCR1n3e0IXtfCy7c6JKv5GpTV8bvllwa9k1t4AhRf7XXQycqLgkrYyv7Z7Ftr5sptWYPcbrmYbhChYEySiNyyAKXnu61svYfAcfW+bpLokqbZI5v7MCibrgfv2r8hJInGaXPi/6kymy4vCAyrUmaReUoXn/MX8AOTf3EjQ8IXZAAAAAElFTkSuQmCC",
  Pi = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkAgMAAAANjH3HAAAACVBMVEVHcExiV01AMiwfKIGrAAAAAXRSTlMAQObYZgAAAUlJREFUeNrt1TGKFEEUBuCvHwzMdOxuJGKyy7inmCNsMNU0Rh0aeoTCExjYi2Fj5IW8icgEixo+aLpgMZT50r/+ggrqPVdX/7UYqm2HMtm2K2MrcQZP1vZuIcpmC0oFgrTAj63OskePtVhI4SWikoLDew13ZXIPAaq5VGA+hQpiJD4pZQQKFegGiFLOwBlAPEKcujOITL5V6BhAl8kCcFsJ0gTwE6GzLfw+aTmSDhV6YC9FmeCIIJB+wQX0e6k7d1BBj0weNRxOpL4C8A44TAQcrby+EJA64OOztQfAYC0AN5OG3aihayZG0jxJH0hllL5LPYAFi0CM8IYUwN0Ib0l9FXCxtgAPFbKTQsP84qmyz481WrkH5tMrKzcVFEg77CaEP6w9A58h9VC1XpiJtictX1pH8squapnAV2y2YyA0NDp6LXHdhv/qL+6eN5hJ+KKhAAAAAElFTkSuQmCC",
  Di = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkAgMAAAANjH3HAAAACVBMVEVHcExiV01AMiwfKIGrAAAAAXRSTlMAQObYZgAAAQBJREFUeNrtlUEKwjAQRX8DlcaVCwWXXRjxGLmExWWOMniCLsR1jyp2kGCT31pEcNG3avMyTWYyoVhY+DekJsKgAqhjFHjiBCn9WOlpZECKbqHLGaPfZDGYZephgo0A2bWtB2wvRQPdOag5xGK2ADrZoUHPJi6g6d+wQ54WZayWcnpFFqIPb0bpBgYDI3lj1H9eLZk4fiNMXN/eAgu5gdHiZ5guHbpAzTptPGbqGR1HprgLIisgsjXExPqd1CSoWYPBTTVl7uwq2Ya1ovV8H7NxgQjjhwPgOVlh51cGZCg8gD01FbkZX+OEGjolbiaAoakc6TGXwkxBzGi+svx1R3kAWDoiQG5YEtEAAAAASUVORK5CYII=",
  ki = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkAgMAAAANjH3HAAAACVBMVEVHcExiV01AMiwfKIGrAAAAAXRSTlMAQObYZgAAAP5JREFUeNrtlU1qwzAQRp8FLlJWXTTQpRZVyTF0iZosdZShJ/AidO2jFoKJ8M9HcUPIxm9l62kYj2aE2dl5DhaFcHiQTtEAkIwlBtBmGVlY4gEY1owDMBnDJhOZ4jqD1dwhQ7Bb7kj6Klz5qIfZA4Md6bjyWhNkAC4cWaenhWllJ8bIxsaHmQGGmWFmTJoojVc9xKFwpsT35K2okAuKnofhhuXSeTSH5eApEzdMnNiSzlReoPLmhKnnd7qZSjUHFNr4v8yPukqhU2MVsv6OzaQihMvzBXRNwVT/2sIKTQbepfHiZtxNMmnqFtnCgmAs5VO2uTVlGml0vdj+1/0nv3CcIl47CPeHAAAAAElFTkSuQmCC";
class Bi {
  constructor({
    app: e,
    viewport: a,
    mainImage: s
  }) {
    this.app = e, this.pixiViewport = a.viewport, this.mainImage = s, this.size = 5, this.bombs = [yi, wi, Ci, Si, xi, Ti, Ii, Ei, bi, vi, Pi, Di, ki], this.textureArray = [];
    for (let i = 0; i < 13; i++) {
      let n = PIXI.Texture.from(this.bombs[i]);
      n.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST, this.textureArray.push(n)
    }
  }
  async boomWithDebounce({
    x: e,
    y: a
  }) {
    await jt(g(50, 3e3)), this.boom({
      x: e,
      y: a
    })
  }
  boom({
    x: e,
    y: a
  }) {
    const s = new PIXI.AnimatedSprite(this.textureArray);
    s.loop = !1, s.animationSpeed = .17, s.zIndex = 2, s.x = e, s.y = a, s.scale.set(g(1, 2) === 1 ? 1 : -1, 1), s.anchor.set(.48, .55), this.pixiViewport.addChild(s), s.play(), s.onComplete = () => {
      this.pixiViewport.removeChild(s)
    }
  }
}
const Ri = {
  create: "create",
  main: "main",
  result: "result"
};
let Y = null;
class v {
  static async uploadTemplate({
    blob: e,
    posX: a,
    posY: s
  }) {
    const i = {
      "Content-Type": "application/octet-stream"
    };
    return a && a !== "" && (i.posX = a), s && s !== "" && (i.posY = s), p.post("/image/template/upload", e, {
      headers: i
    })
  }
  static async uploadTournamentTemplate({
    blob: e,
    posX: a,
    posY: s
  }) {
    return p.post("/tournament/template/upload", e, {
      headers: {
        "Content-Type": "application/octet-stream",
        posX: a,
        posY: s
      }
    })
  }
  static async getReferredTemplate() {
    return p.get("/image/template/my")
  }
  static async getTemplateById({
    id: e
  }) {
    return Y !== null && (Y.abort(), Y = null), Y = new AbortController, p.get(`/image/template/${e}`, {
      signal: Y.signal
    })
  }
  static async getTournamentTemplateById({
    id: e
  }) {
    return p.get(`/tournament/template/${e}`)
  }
  static async getSelectedTemplate() {
    return p.get("/tournament/template/subscribe/my")
  }
  static async getTemplatesList({
    limit: e,
    offset: a
  }) {
    return p.get(`/image/template/list?limit=${e}&offset=${a}`)
  }
  static async getApprovedTemplatesList({
    limit: e,
    offset: a
  }) {
    return p.get(`/tournament/template/list?limit=${e}&offset=${a}`)
  }
  static async getRandomTemplates() {
    return p.get("/tournament/template/list/random?limit=16")
  }
  static async subscribeToTemplate({
    id: e
  }) {
    return p.put(`/image/template/subscribe/${e}`)
  }
  static async subscribeToTournamentTemplate({
    id: e
  }) {
    return p.put(`/tournament/template/subscribe/${e}`)
  }
  static async getAvailableSizes({
    userId: e
  }) {
    return p.get(`/image/template/sizes/${e}`)
  }
}
class aa {
  static async getPeriods() {
    return p.get("/tournament/periods")
  }
  static async getResults() {
    return p.get("/tournament/user/results")
  }
}
const be = m("tournament/getPeriods", async () => (await aa.getPeriods()).data),
  ve = m("tournament/getResults", async () => (await aa.getResults()).data),
  Pe = m("tournament/getMyTemplate", async ({
    id: t
  }) => (await v.getTournamentTemplateById({
    id: t
  })).data),
  De = m("tournament/getSelectedTemplate", async () => (await v.getSelectedTemplate()).data),
  ke = m("tournament/getApprovedTemplatesList", async ({
    offset: t,
    limit: e
  }) => (await v.getApprovedTemplatesList({
    offset: t,
    limit: e
  })).data),
  Be = m("tournament/getRandomTemplatesList", async () => (await v.getRandomTemplates()).data),
  Re = m("tournament/selectTemplate", async ({
    id: t
  }) => (await v.subscribeToTournamentTemplate({
    id: t
  })).data),
  Ui = {
    activeTab: Ri.result,
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
    approvedTemplatesList: _.getInitialState(),
    approvedTemplatesListStatus: o.idle,
    approvedTemplatesListOffset: 0,
    approvedTemplatesListLimit: 16,
    approvedTemplatesListTotal: 0,
    selectTemplateStatus: o.idle,
    randomTemplatesListStatus: o.idle,
    periodsStatus: o.idle,
    resultsStatus: o.idle,
    selectedTemplateStatus: o.idle
  },
  K = "?time=1502",
  sa = T({
    name: "tournament",
    initialState: Ui,
    reducers: {
      setActiveTournamentTab: (t, e) => {
        t.activeTab = e.payload
      },
      changeTemplateCoordsIfNeeded: (t, e) => {
        t.myTemplate && t.myTemplate.id === e.payload.templateId && (t.myTemplate = {
          ...t.myTemplate,
          x: e.payload.x,
          y: e.payload.y
        }), t.selectedTemplate && t.selectedTemplate.id === e.payload.templateId && (t.selectedTemplate = {
          ...t.selectedTemplate,
          x: e.payload.x,
          y: e.payload.y
        })
      },
      setActiveTournamentTemplate: (t, e) => {
        t.activeTournamentTemplate = e.payload
      },
      hideTournamentTemplates: t => {
        t.activeTournamentTemplate = null
      },
      setShowTournamentDetailsPopup: (t, e) => {
        t.showTournamentDetailsPopup = e.payload
      },
      setShowRoundRewardsPopup: (t, e) => {
        t.showRoundRewardsPopup = e.payload
      },
      setMyTournamentTemplate: (t, e) => {
        t.myTemplate = e.payload
      },
      clearApprovedTemplateList: t => {
        t.approvedTemplatesList = _.getInitialState(), t.approvedTemplatesListOffset = 0
      },
      showTournamentTemplateInfoPopup: (t, e) => {
        t.showTemplateInfoPopup = !0, t.templateDataInfoPopup = e.payload
      },
      closeTournamentTemplateInfoPopup: t => {
        t.showTemplateInfoPopup = !1, t.templateDataInfoPopup = null
      },
      setSelectedTemplate: (t, e) => {
        try {
          localStorage.setItem("selectedTemplate", JSON.stringify(e.payload))
        } catch {}
        t.selectedTemplate = e.payload
      }
    },
    extraReducers: t => {
      t.addCase(Pe.pending, e => {}).addCase(Pe.fulfilled, (e, a) => {
        a.payload.id && (e.myTemplate = {
          ...a.payload,
          type: U.my,
          url: `${a.payload.url}${K}`
        })
      }).addCase(Pe.rejected, (e, a) => {}).addCase(be.pending, e => {
        e.periodsStatus = o.pending
      }).addCase(be.fulfilled, (e, a) => {
        e.periodsStatus = o.fulfilled, e.periods = a.payload.allPeriods, e.activePeriod = a.payload.activePeriod
      }).addCase(be.rejected, (e, a) => {
        e.periodsStatus = o.rejected
      }).addCase(ve.pending, e => {
        e.resultsStatus = o.pending
      }).addCase(ve.fulfilled, (e, a) => {
        e.resultsStatus = o.fulfilled, e.results = a.payload.rounds.sort((s, i) => i.round_id - s.round_id)
      }).addCase(ve.rejected, (e, a) => {
        e.resultsStatus = o.rejected
      }).addCase(De.pending, e => {
        e.selectedTemplateStatus = o.pending
      }).addCase(De.fulfilled, (e, a) => {
        a.payload.id && (e.selectedTemplate = {
          ...a.payload,
          imageSize: a.payload.size || a.payload.imageSize,
          type: U.referred,
          url: `${a.payload.url}${K}`
        }), e.selectedTemplateStatus = o.fulfilled
      }).addCase(De.rejected, (e, a) => {
        e.selectedTemplateStatus = o.rejected
      }).addCase(ke.pending, e => {
        e.approvedTemplatesListStatus = o.pending
      }).addCase(ke.fulfilled, (e, a) => {
        a.payload && a.payload.list && (_.addMany(e.approvedTemplatesList, a.payload.list.map(s => ({
          ...s,
          url: `${s.url}${K}`
        }))), e.approvedTemplatesListOffset += 16, e.approvedTemplatesListTotal = Math.max(a.payload.total, e.approvedTemplatesListTotal)), e.approvedTemplatesListStatus = o.fulfilled
      }).addCase(ke.rejected, (e, a) => {
        e.approvedTemplatesListStatus = o.rejected
      }).addCase(Be.pending, e => {
        e.randomTemplatesListStatus = o.pending
      }).addCase(Be.fulfilled, (e, a) => {
        a.payload && a.payload.list && _.setAll(e.approvedTemplatesList, a.payload.list.map(s => ({
          ...s,
          url: `${s.url}${K}`
        }))), e.randomTemplatesListStatus = o.fulfilled
      }).addCase(Be.rejected, (e, a) => {
        e.randomTemplatesListStatus = o.rejected
      }).addCase(Re.pending, e => {
        e.selectTemplateStatus = o.pending
      }).addCase(Re.fulfilled, (e, a) => {
        a.payload.id && (e.selectedTemplate = {
          ...a.payload,
          type: U.referred,
          url: `${a.payload.url}${K}`
        }), e.selectTemplateStatus = o.fulfilled
      }).addCase(Re.rejected, (e, a) => {
        e.selectTemplateStatus = o.rejected
      })
    }
  }),
  {
    setActiveTournamentTab: Fl,
    setActiveTournamentTemplate: Fi,
    hideTournamentTemplates: Qi,
    setShowTournamentDetailsPopup: Ql,
    setShowRoundRewardsPopup: Ol,
    changeTemplateCoordsIfNeeded: ia,
    setMyTournamentTemplate: Ml,
    clearApprovedTemplateList: Vl,
    showTournamentTemplateInfoPopup: Nl,
    closeTournamentTemplateInfoPopup: Ll,
    setSelectedTemplate: Oi
  } = sa.actions,
  na = {
    getMyTemplate: Pe,
    getSelectedTemplate: De,
    getApprovedList: ke,
    getRandomList: Be,
    selectTemplate: Re,
    getPeriods: be,
    getResults: ve
  },
  Mi = sa.reducer;
window.getComputedStyle(document.body).getPropertyValue("--canvas-bg-color");
const Vi = {
  1: 1
};
let P;
const Ni = t => {
  P = t
};
let yt = 0;
setInterval(() => {
  console.log(yt), yt = 0
}, 1e4);
let te = !0;
window.addEventListener("blur", () => {
  te = !1
});
window.addEventListener("focus", () => {
  te = !0
});
document.addEventListener("visibilitychange", () => {
  document.hidden ? te = !1 : te = !0
});
let D = null;
const Li = (t, e, a) => {
    let s = {
        token: t
      },
      i = {
        data: new TextEncoder().encode(JSON.stringify(s))
      };
    D = new Ba(St.replace("https", "wss").replace("api/v1/", "connection/websocket"), i), D.on("connected", function(n) {
      if (console.log(`connected over ${n.transport}`), !Gt()) return;
      console.log("centrifuge image");
      const r = new Blob([n.data], {
          type: "image/webp"
        }),
        c = new Image;
      c.src = URL.createObjectURL(r), c.onload = () => {
        f.mainImage.loadFromCentrifuge(c).then(() => {
          const h = P.getState().main.startParams.coords;
          h && (f.viewport.viewport.animate({
            scale: 60,
            time: 400,
            position: {
              x: h.x + .5,
              y: h.y + .5
            }
          }), f.mainImage.selectedPixel.draw(h), P.dispatch(ze(h)))
        })
      }
    }), D.on("disconnected", function(n) {
      console.log(`_disconnected: ${n.code}, ${n.reason}`)
    }), D.on("error", function(n) {
      console.log(n)
    }), D.on("publication", function(n) {
      if (n.channel === "event:message") {
        JSON.parse(new TextDecoder().decode(n.data)).forEach(l => {
          const h = JSON.parse(l.data);
          if (l.type === $e.pixanos && P.dispatch(Xi(h)), h.user.userId === e || !te) return;
          const y = P.getState().canvas.animations;
          if (l.type === $e.bomb) {
            const x = ht(h.info.pixelId);
            y && f.mainImage.bomb.boomWithDebounce(x)
          }
          if (l.type === $e.pumpkin) {
            const x = ht(h.info.pixelId);
            f.mainImage.pumpkin.boomWithDebounce(x, y)
          }
        });
        return
      }
      const r = new Uint8Array(n.data);
      Ra(r, (c, l) => {
        if (c) console.error("Ошибка распаковки данных:", c);
        else {
          const h = JSON.parse(new TextDecoder().decode(l));
          if (n.channel === "pixel:message") Object.values(h).forEach(w => {
            yt += w.length
          }), f.mainImage.paintPixelsFromCentrifuge(h);
          else if (n.channel === `personal:user#${e}`) {
            const w = JSON.parse(new TextDecoder().decode(l));
            if (w.type === Vi[1] && P.getState().daily.list.entities[w.good_id]) {
              const y = P.getState().daily.list.entities[w.good_id],
                x = y.name,
                V = y.prices[0].quantity;
              P.dispatch(se({
                id: performance.now(),
                text: `Transaction for daily ${y.id} completed! Got ${x} x${V}. Refresh the app.`,
                icon: ""
              }))
            }
          } else if (n.channel === "event:tournament") {
            const w = JSON.parse(new TextDecoder().decode(l));
            w.type && w.type === 1 && w.templates.forEach(x => {
              P.dispatch(ia(x))
            })
          } else {
            if (n.channel === "event:mini-game") return;
            console.log("unknown channel", n)
          }
        }
      })
    }), D.connect()
  },
  it = m("main/getPixanosRating", async () => (await S.getPixanosRating()).data),
  zi = () => !1,
  ji = {
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
    startParams: Xa(),
    startAppTs: Date.now(),
    timeLimit: !1,
    showIntro: !1,
    showBetaTestIntro: !1,
    fastMode: !1,
    fastEnergy: !1,
    currentFastType: null,
    showUserAndSquadPopup: !1,
    userAndSquadPopupStack: [],
    showNoFlagsPopup: zi(),
    showMiningDetailsPopup: !1,
    showInviteFrensPopup: !1,
    showNoChargesPopup: !1,
    lastShowChargesPopupTs: Date.now() - Va,
    showBoostDetailsPopup: !1,
    activeBoostDetails: k.paintReward,
    referrerSquadId: null,
    showMiniPopup: !1,
    showPixanosEvent: !1,
    pixanosProcessing: !1,
    pixanosEventData: null,
    showPixanosRating: !1,
    pixanosRatingData: null,
    pixanosRatingStatus: o.idle,
    flyingRewards: []
  },
  ra = T({
    name: "main",
    initialState: ji,
    reducers: {
      setTimeLimit: t => {
        t.timeLimit = !0, D && D.disconnect()
      },
      updateSettings: (t, e) => {
        t.settings = {
          ...t.settings,
          ...e.payload
        }
      },
      enableFastMode: t => {
        t.fastMode = !0, t.currentFastType = null
      },
      disableFastMode: t => {
        t.fastMode = !1
      },
      enableFastType: (t, e) => {
        t.currentFastType = e.payload, t.fastEnergy = !1, t.fastMode = !1
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
      setShowPixanosRating: (t, e) => {
        t.showPixanosRating = e.payload
      },
      showPixanosEvent: (t, e) => {
        t.showPixanosEvent = !0, t.pixanosEventData = e.payload
      },
      hidePixanosEvent: t => {
        t.showPixanosEvent = !1, t.pixanosEventData = null
      },
      setPixanosProcessing: (t, e) => {
        t.pixanosProcessing = e.payload
      },
      setShowIntro: (t, e) => {
        t.showIntro = e.payload
      },
      setShowBetaTestIntro: (t, e) => {
        t.showBetaTestIntro = e.payload
      },
      setShowMiniPopup: (t, e) => {
        t.showMiniPopup = e.payload
      },
      addFlyingReward: (t, e) => {
        t.flyingRewards.push({
          ...e.payload,
          id: `${e.payload.flyCoords.x}_${e.payload.flyCoords.y}_${performance.now()}`
        })
      },
      removeFlyingReward: (t, e) => {
        t.flyingRewards = t.flyingRewards.filter(a => a.id !== e.payload)
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
      setLastShowChargesPopupTs: (t, e) => {
        t.lastShowChargesPopupTs = e.payload, xt.save("lastShowChargesPopupTs", JSON.stringify(e.payload))
      },
      setShowMiningDetailsPopup: (t, e) => {
        t.showMiningDetailsPopup = e.payload
      },
      setShowBoostDetailsPopup: (t, e) => {
        t.showBoostDetailsPopup = e.payload
      },
      setActiveBoostDetails: (t, e) => {
        t.activeBoostDetails = e.payload
      },
      addItemToUserAndSquadPopupStack: (t, e) => {
        t.userAndSquadPopupStack.length === 0 && (t.showUserAndSquadPopup = !0), t.userAndSquadPopupStack.push(e.payload)
      },
      removeItemFromUserAndSquadPopupStack: t => {
        t.userAndSquadPopupStack.length === 1 && (t.showUserAndSquadPopup = !1), t.userAndSquadPopupStack.pop()
      },
      setShowNoFlagsPopup: (t, e) => {
        t.showNoFlagsPopup = e.payload
      },
      setReferrerSquadId: (t, e) => {
        t.referrerSquadId = e.payload
      }
    },
    extraReducers: t => {
      t.addCase(it.pending, (e, a) => {
        e.pixanosRatingStatus = o.pending
      }).addCase(it.fulfilled, (e, a) => {
        e.pixanosRatingStatus = o.fulfilled, e.pixanosRatingData = a.payload
      }).addCase(it.rejected, (e, a) => {
        e.pixanosRatingStatus = o.rejected
      })
    }
  }),
  {
    setTimeLimit: zl,
    updateSettings: jl,
    enableFastMode: Gi,
    disableFastMode: oa,
    enableFastType: Hi,
    disableFastType: Ke,
    enableFastEnergy: Gl,
    disableFastEnergy: Ji,
    setShowPixanosRating: Hl,
    showPixanosEvent: Xi,
    hidePixanosEvent: Jl,
    setPixanosProcessing: Xl,
    setShowIntro: Yl,
    setShowBetaTestIntro: Kl,
    setShowMiniPopup: ql,
    addFlyingReward: Yi,
    removeFlyingReward: Wl,
    showInviteFrensPopup: Zl,
    hideInviteFrensPopup: _l,
    showNoChargesPopup: $l,
    hideNoChargesPopup: eA,
    setLastShowChargesPopupTs: tA,
    setShowMiningDetailsPopup: aA,
    setShowBoostDetailsPopup: sA,
    setActiveBoostDetails: iA,
    addItemToUserAndSquadPopupStack: nA,
    removeItemFromUserAndSquadPopupStack: rA,
    setShowNoFlagsPopup: oA,
    setReferrerSquadId: cA
  } = ra.actions,
  Ki = ra.reducer;
Ct(t => t.main.settings, t => {
  const e = t.UpgradeRepaint,
    a = t.UpgradeChargeCount,
    s = t.UpgradeChargeRestoration;
  let i = 1,
    n = 1,
    r = 1;
  return Object.keys(e.levels).forEach(c => {
    e.levels[c].Max && (i = Number(c))
  }), Object.keys(a.levels).forEach(c => {
    a.levels[c].Max && (n = Number(c))
  }), Object.keys(s.levels).forEach(c => {
    s.levels[c].Max && (r = Number(c))
  }), {
    repaintReward: i,
    chargesCount: n,
    restorationSpeed: r
  }
});
Ct(t => t.main.settings, t => ({
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
}));
Ct(t => t.main.settings, t => ({
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
}));
const qi = "_number_179d2_1",
  Wi = "_layout_179d2_6",
  Zi = "_viewer_179d2_14",
  _i = "_container_179d2_18",
  $i = "_digit_179d2_25",
  en = {
    number: qi,
    layout: Wi,
    viewer: Zi,
    container: _i,
    digit: $i
  },
  tn = "_layout_q3t4p_1",
  an = "_viewer_q3t4p_9",
  sn = "_container_q3t4p_18",
  nn = "_digit_q3t4p_25",
  q = {
    layout: tn,
    viewer: an,
    container: sn,
    digit: nn
  },
  rn = ({
    digit: t = 0,
    fontSize: e = 16,
    fontWeight: a = 600,
    gap: s = 6
  }) => {
    const [i, n] = C.useState(!0), [r, c] = C.useState(0), l = r === 0 ? `translateY(${s/2}px)` : `translateY(-${s/2+(e+s)*r-s}px)`;
    return C.useEffect(() => {
      n(!1);
      const h = setTimeout(() => {
        n(!0)
      }, 500);
      return () => {
        clearTimeout(h)
      }
    }, [r]), C.useEffect(() => {
      c(t)
    }, [t]), A.jsx("div", {
      className: q.layout,
      children: A.jsxs("div", {
        className: q.viewer,
        style: {
          height: e + s
        },
        children: [A.jsx("span", {
          className: q.digit,
          style: {
            visibility: i ? "visible" : "hidden",
            alignSelf: "center",
            fontSize: e,
            fontWeight: a
          },
          children: r
        }), A.jsx("div", {
          className: q.container,
          style: {
            transform: l,
            visibility: i ? "hidden" : "visible",
            gap: s
          },
          children: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(h => A.jsx("span", {
            className: q.digit,
            style: {
              fontSize: e,
              fontWeight: a
            },
            children: h
          }, h))
        })]
      })
    })
  },
  on = ({
    number: t,
    fontSize: e = 16,
    fontWeight: a = 600,
    gap: s = 6,
    addSpace: i = !0
  }) => {
    if (t === void 0) return null;
    const n = String(t).split("").reverse();
    let r = [];
    for (let c = 0; c < n.length; c++) c % 3 === 0 && c !== 0 && i && r.push("space"), r.push(n[c]);
    return r = r.reverse(), A.jsx("div", {
      className: en.number,
      children: r.map((c, l) => c === "space" ? A.jsx("div", {
        children: " "
      }, r.length - l) : A.jsx(rn, {
        digit: Number(c),
        fontSize: e,
        fontWeight: a,
        gap: s
      }, r.length - l))
    })
  },
  cn = {
    isTMA: !1,
    isAuth: !1,
    authData: null
  },
  ca = T({
    name: "auth",
    initialState: cn,
    reducers: {
      setIsTMA: (t, e) => {
        t.isTMA = e.payload
      },
      setAuthData: (t, e) => {
        t.authData = e.payload
      },
      setIsAuth: (t, e) => {
        t.isAuth = e.payload
      }
    },
    extraReducers: () => {}
  });
ca.actions;
const ln = t => t.auth.isTMA,
  ie = t => t.auth.isAuth,
  An = ca.reducer;
let nt = !1;
const dn = async ({
  dispatch: t,
  amount: e,
  charges: a,
  maxCharges: s,
  status: i,
  state: n
}) => {
  var c, l;
  if (!e && n && (e = n.shop.available[1], a = n.mining.charges, s = n.mining.maxCharges, i = n.shop.useProductStatus), !e || e === 0) return t(Et(10)), t(Tt(1)), t(It()), t(Ji()), !1;
  if (a === s) return !1;
  if (nt) return o.pending;
  nt = !0, t(B({
    command: b.start
  }));
  try {
    (await t(He.useProduct({
      productId: 1,
      pixelId: 1
    }))).meta.requestStatus === o.fulfilled && (t(qs(s)), t(Ge({
      product: 1,
      amount: 1
    })), (l = (c = window.Telegram.WebApp) == null ? void 0 : c.HapticFeedback) == null || l.notificationOccurred("error"))
  } catch (h) {
    console.log("error", h)
  } finally {
    nt = !1, t(B({
      command: b.finish
    }))
  }
  return !0
}, pn = {
  isShowSideMenu: !1
}, la = T({
  name: "layout",
  initialState: pn,
  reducers: {
    setShowSideMenu: (t, e) => {
      t.isShowSideMenu = e.payload
    }
  }
}), {
  setShowSideMenu: Ut
} = la.actions, un = t => t.layout.isShowSideMenu, mn = la.reducer;
let L = null,
  z = null;
class Aa {
  static async personal({
    league: e
  }) {
    L !== null && (L.abort(), L = null), L = new AbortController;
    const a = await p.get(`/ratings/personal?league=${e.toLowerCase()}&limit=20`, {
      signal: L.signal
    });
    return L = null, a
  }
  static async squad({
    league: e
  }) {
    z !== null && (z.abort(), z = null), z = new AbortController;
    const a = await p.get(`/ratings/squads?league=${e.toLowerCase()}&limit=20`, {
      signal: z.signal
    });
    return z = null, a
  }
}
const Ue = m("ratings/personal", async ({
    league: t
  }) => (await Aa.personal({
    league: t
  })).data),
  Fe = m("ratings/squad", async ({
    league: t
  }) => (await Aa.squad({
    league: t
  })).data),
  gn = {
    list: [],
    myPlace: 0,
    mySquadPlace: 0,
    mySquad: null,
    league: "bronze",
    status: o.idle
  },
  da = T({
    name: "ratings",
    initialState: gn,
    reducers: {
      setActiveLeague: (t, e) => {
        t.league = e.payload
      },
      clearRatingList: t => {
        t.list = []
      }
    },
    extraReducers: t => {
      t.addCase(Ue.pending, (e, a) => {
        e.status = o.pending
      }).addCase(Ue.fulfilled, (e, a) => {
        e.status = o.fulfilled, e.list = [...Object.values(a.payload.top)], e.myPlace = a.payload.myPlace
      }).addCase(Ue.rejected, (e, a) => {
        e.status = o.rejected
      }).addCase(Fe.pending, (e, a) => {
        e.status = o.pending
      }).addCase(Fe.fulfilled, (e, a) => {
        e.status = o.fulfilled, e.list = [...Object.values(a.payload.top)], e.mySquadPlace = a.payload.MySquadPlace, e.mySquad = a.payload.mySquad
      }).addCase(Fe.rejected, (e, a) => {
        e.status = o.rejected
      })
    }
  }),
  {
    setActiveLeague: hn,
    clearRatingList: lA
  } = da.actions,
  fn = {
    personal: Ue,
    squad: Fe
  },
  yn = da.reducer,
  Qe = m("history/get", async ({
    offset: t,
    limit: e
  }) => (await S.getHistory({
    offset: t,
    limit: e
  })).data),
  wn = {
    list: [],
    status: o.idle
  },
  pa = T({
    name: "history",
    initialState: wn,
    reducers: {
      resetHistory: t => {
        t.list = [], t.status = o.idle
      }
    },
    extraReducers: t => {
      t.addCase(Qe.pending, (e, a) => {
        e.status = o.pending
      }).addCase(Qe.fulfilled, (e, a) => {
        e.status = o.fulfilled, e.list = a.payload
      }).addCase(Qe.rejected, (e, a) => {
        e.status = o.rejected
      })
    }
  });
pa.actions;
const ua = {
    get: Qe
  },
  Cn = pa.reducer,
  F = J();
F.startListening({
  matcher: I(M.info.fulfilled),
  effect: (t, e) => {
    t.payload.activated && (e.dispatch(Us(t.payload.totalUserPixels)), e.dispatch(qt(t.payload.userBalance))), e.dispatch(ds(t.payload.goods))
  }
});
F.startListening({
  matcher: I(M.checkTask.fulfilled),
  effect: (t, e) => {
    const a = t.meta.arg.key,
      s = t.payload[a],
      i = t.meta.arg.reward,
      n = t.meta.arg.disableFailPopup;
    s && (a === d.pumpkin && e.dispatch(ps({
      product: 7,
      amount: 6
    })), e.dispatch(Xe(i)));
    let r = "Check failed",
      c = "";
    if (s) r = "Well done fren", c = "";
    else if (!s && n) return;
    e.dispatch(se({
      id: performance.now(),
      text: r,
      icon: c
    }))
  }
});
F.startListening({
  matcher: I(M.checkBoost.fulfilled),
  effect: (t, e) => {
    const a = t.meta.arg.key,
      s = t.payload[a];
    let i = "Not enough PX",
      n = "";
    s && (i = "Well done fren", n = ""), e.dispatch(se({
      id: performance.now(),
      text: i,
      icon: n
    }))
  }
});
F.startListening({
  matcher: I(M.checkBoost.fulfilled),
  effect: (t, e) => {
    const a = e.getState(),
      s = a.main.settings,
      i = t.meta.arg.key,
      n = t.payload[i],
      r = t.meta.arg.price;
    if (n) {
      if (i === k.energyLimit) {
        const c = a.mining.boosts[k.energyLimit],
          l = s.UpgradeChargeCount.levels[c].Boost;
        e.dispatch(Ys(a.mining.maxCharges + l)), e.dispatch(Ws(l))
      }
      if (i === k.reChargeSpeed) {
        const c = a.mining.boosts[k.reChargeSpeed],
          l = s.UpgradeChargeRestoration.levels[c].ChargeBoost;
        e.dispatch(Ks(l))
      }
      e.dispatch(Qs(r))
    }
  }
});
F.startListening({
  matcher: I(M.checkTask.rejected),
  effect: (t, e) => {
    e.dispatch(se({
      id: performance.now(),
      text: "Check failed",
      icon: ""
    }))
  }
});
F.startListening({
  matcher: I(M.checkBoost.rejected),
  effect: (t, e) => {
    e.dispatch(se({
      id: performance.now(),
      text: "Not enough PX",
      icon: ""
    }))
  }
});
F.startListening({
  matcher: I(Xs),
  effect: (t, e) => {
    const s = e.getState().mining.toggleAction;
    console.log("boosts length: ", JSON.stringify(s).length), xt.save("boosts1", JSON.stringify(s))
  }
});
const qe = J();
qe.startListening({
  matcher: I(vt.getPriceMask.pending, $.getPixelsForSale.pending, $.getPixelsSold.pending, ua.get.pending),
  effect: (t, e) => {
    e.dispatch(B({
      command: b.start
    }))
  }
});
qe.startListening({
  matcher: I(vt.getPriceMask.fulfilled, $.getPixelsForSale.fulfilled, $.getPixelsSold.fulfilled, ua.get.fulfilled),
  effect: (t, e) => {
    e.dispatch(B({
      command: b.finish
    }))
  }
});
qe.startListening({
  matcher: I(vt.getPriceMask.rejected),
  effect: (t, e) => {
    t.error.code !== "ERR_CANCELED" && e.dispatch(B({
      command: b.finish
    }))
  }
});
const ma = J();
ma.startListening({
  matcher: I($.getUser.fulfilled),
  effect: (t, e) => {
    e.dispatch(hn(t.payload.data.league))
  }
});
const ne = J();
ne.startListening({
  actionCreator: Gi,
  effect: () => {
    f.mainImage.selectedPixel.hide()
  }
});
ne.startListening({
  actionCreator: oa,
  effect: () => {
    f.mainImage.selectedPixel.show()
  }
});
ne.startListening({
  actionCreator: Hi,
  effect: () => {
    f.mainImage.selectedPixel.hide()
  }
});
ne.startListening({
  actionCreator: Ke,
  effect: () => {
    f.mainImage.selectedPixel.show()
  }
});
const ga = J();
ga.startListening({
  matcher: I(fn.squad.fulfilled),
  effect: (t, e) => {
    e.dispatch(Os(t.payload.mySquad))
  }
});
const Sn = {
    info: null,
    popupId: null,
    getInfoFetchStatus: o.idle
  },
  rt = m("squad/getSquadInfo", async ({
    id: t
  }) => (await S.getSquadInfo({
    id: t
  })).data),
  ha = T({
    name: "squad",
    initialState: Sn,
    reducers: {
      setPopupSquadId: (t, e) => {
        t.popupId = e.payload
      }
    },
    extraReducers: t => {
      t.addCase(rt.pending, e => {
        e.getInfoFetchStatus = o.pending
      }).addCase(rt.fulfilled, (e, a) => {
        e.info = a.payload, e.getInfoFetchStatus = o.fulfilled
      }).addCase(rt.rejected, e => {
        e.getInfoFetchStatus = o.rejected
      })
    }
  });
ha.actions;
const xn = ha.reducer,
  Tn = "/assets/world_final-f0xkCoEs.png";
m("template/subscribe", async ({
  id: t
}) => (await v.subscribeToTemplate({
  id: t
})).data);
const ot = m("template/getTemplateList", async ({
  offset: t,
  limit: e
}) => (await v.getTemplatesList({
  offset: t,
  limit: e
})).data);
m("template/getAvailableSizes", async ({
  userId: t
}) => (await v.getAvailableSizes({
  userId: t
})).data);
const ct = m("template/getReferredTemplate", async () => (await v.getReferredTemplate()).data),
  Ft = m("template/getMyTemplate", async ({
    id: t
  }) => (await v.getTemplateById({
    id: t
  })).data),
  lt = m("template/getWorldTemplate", async () => ({
    x: 0,
    y: 0,
    imageSize: u.width,
    url: Tn,
    type: U.world
  })),
  In = {
    active: null,
    activeTab: "my",
    showTemplateDetailsPopup: !1,
    showTemplateInfoPopup: !1,
    templateInfoPopupId: null,
    list: [],
    listStatus: o.idle,
    listOffset: 0,
    listLimit: 12,
    opacity: [70],
    worldTemplate: null,
    referredTemplate: null,
    myTemplate: null,
    sizes: []
  },
  fa = T({
    name: "template",
    initialState: In,
    reducers: {
      setActiveTemplate: (t, e) => {
        t.active = e.payload, f.mainImage.worldTemplate.hide(), f.mainImage.worldTemplate.show(e.payload)
      },
      setActiveTemplateTab: (t, e) => {
        t.activeTab = e.payload
      },
      hideTemplates: t => {
        t.active = null, f.mainImage.worldTemplate.hide()
      },
      setTemplateOpacity: (t, e) => {
        t.opacity = e.payload
      },
      setShowTemplateDetailsPopup: (t, e) => {
        t.showTemplateDetailsPopup = e.payload
      },
      setShowTemplateInfoPopup: (t, e) => {
        t.showTemplateInfoPopup = e.payload.show, t.templateInfoPopupId = e.payload.id || null
      },
      setReferredTemplate: (t, e) => {
        t.referredTemplate = e.payload
      },
      setMyTemplate: (t, e) => {
        t.myTemplate = e.payload
      },
      setTemplateListOffset: (t, e) => {
        t.listOffset = e.payload
      },
      clearTemplatesListData: t => {
        t.list = [], t.listStatus = o.idle, t.listOffset = 0
      }
    },
    extraReducers: t => {
      t.addCase(ct.pending, e => {}).addCase(ct.fulfilled, (e, a) => {
        if (a.payload) {
          const s = {
            ...a.payload,
            type: U.referred
          };
          e.referredTemplate = s
        }
      }).addCase(ct.rejected, (e, a) => {}).addCase(Ft.pending, e => {}).addCase(Ft.fulfilled, (e, a) => {}).addCase(lt.pending, (e, a) => {}).addCase(lt.fulfilled, (e, a) => {
        const s = {
          ...a.payload,
          type: U.world
        };
        e.worldTemplate = s, f.mainImage.worldTemplate.add(s)
      }).addCase(lt.rejected, (e, a) => {}).addCase(ot.pending, e => {
        e.listStatus = o.pending
      }).addCase(ot.fulfilled, (e, a) => {
        e.listStatus = o.fulfilled, a.payload && (e.list = [...e.list, ...a.payload], e.listOffset += 12)
      }).addCase(ot.rejected, e => {
        e.listStatus = o.rejected
      })
    }
  });
fa.actions;
const En = fa.reducer,
  bn = {
    list: Ne.getInitialState(),
    selected: 1,
    showHowDailyWorksPopup: !1,
    getDailyListFetchStatus: o.idle,
    getFirstDailyFetchStatus: o.idle
  },
  At = m("daily/getList", async () => (await S.getDailyList()).data),
  dt = m("daily/getFirstDaily", async () => (await S.getFirstDaily()).data),
  ya = T({
    name: "daily",
    initialState: bn,
    reducers: {
      setSelectedDaily: (t, e) => {
        t.selected = e.payload
      },
      setShowHowDailyWorksPopup: (t, e) => {
        t.showHowDailyWorksPopup = e.payload
      },
      updateOneDaily: (t, e) => {
        Ne.updateOne(t.list, e.payload)
      }
    },
    extraReducers: t => {
      t.addCase(At.pending, e => {
        e.getDailyListFetchStatus = o.pending
      }).addCase(At.fulfilled, (e, a) => {
        Ne.setAll(e.list, a.payload.dailyAvailable), e.getDailyListFetchStatus = o.fulfilled
      }).addCase(At.rejected, e => {
        e.getDailyListFetchStatus = o.rejected
      }).addCase(dt.pending, e => {
        e.getFirstDailyFetchStatus = o.pending
      }).addCase(dt.fulfilled, (e, a) => {
        e.getFirstDailyFetchStatus = o.fulfilled
      }).addCase(dt.rejected, e => {
        e.getFirstDailyFetchStatus = o.rejected
      })
    }
  });
ya.actions;
const vn = ya.reducer,
  pt = m("reward/getList", async ({
    userId: t
  }) => (await S.getRewards({
    userId: t
  })).data),
  ut = m("reward/getById", async ({
    rewardId: t
  }) => (await S.getRewardById({
    rewardId: t
  })).data),
  Pn = {
    showPopup: !1,
    id: null,
    rewardUserId: null,
    info: null,
    active: null,
    list: bt.getInitialState(),
    getListStatus: o.idle,
    getRewardStatus: o.idle
  },
  wa = T({
    name: "reward",
    initialState: Pn,
    reducers: {
      showRewardPopup: t => {
        t.showPopup = !0
      },
      hideRewardPopup: t => {
        t.showPopup = !1
      },
      setReward: (t, e) => {
        t.id = e.payload.rewardId, t.rewardUserId = e.payload.rewardUserId, t.info = {
          ...e.payload.reward,
          user: e.payload.user,
          type: e.payload.type
        }
      },
      clearReward: t => {
        t.id = null, t.rewardUserId = null, t.info = null
      },
      addReward: (t, e) => {
        t.active = e.payload
      },
      removeReward: t => {
        t.active = null
      },
      clearInventoryList: t => {
        bt.removeAll(t.list)
      }
    },
    extraReducers: t => {
      t.addCase(pt.pending, e => {
        e.getListStatus = o.pending
      }).addCase(pt.fulfilled, (e, a) => {
        e.list = a.payload, e.getListStatus = o.fulfilled
      }).addCase(pt.rejected, e => {
        e.getListStatus = o.rejected
      }).addCase(ut.pending, e => {
        e.getRewardStatus = o.pending
      }).addCase(ut.fulfilled, (e, a) => {
        e.getRewardStatus = o.fulfilled
      }).addCase(ut.rejected, e => {
        e.getRewardStatus = o.rejected
      })
    }
  }),
  {
    setReward: Dn,
    clearReward: AA,
    addReward: dA,
    removeReward: pA,
    clearInventoryList: uA,
    showRewardPopup: kn,
    hideRewardPopup: mA
  } = wa.actions,
  Bn = wa.reducer,
  X = J();
X.startListening({
  matcher: I(na.getMyTemplate.fulfilled),
  effect: (t, e) => {
    const a = e.getState();
    if (a.tournament.myTemplate) {
      const s = a.tournament.myTemplate;
      f.mainImage.tournamentTemplates.deleteTemplate(s.id), f.mainImage.tournamentTemplates.add(s)
    }
  }
});
X.startListening({
  matcher: I(na.getSelectedTemplate.fulfilled, Oi),
  effect: (t, e) => {
    const a = e.getState();
    if (a.tournament.selectedTemplate) {
      const s = a.tournament.selectedTemplate;
      f.mainImage.tournamentTemplates.deleteTemplate(s.id), f.mainImage.tournamentTemplates.add(s)
    }
  }
});
X.startListening({
  matcher: I(Fi),
  effect: t => {
    const e = t.payload;
    f.mainImage.tournamentTemplates.hide(), f.mainImage.tournamentTemplates.show(e)
  }
});
X.startListening({
  matcher: I(Qi),
  effect: () => {
    f.mainImage.tournamentTemplates.hide()
  }
});
X.startListening({
  matcher: I(ia),
  effect: t => {
    f.mainImage.tournamentTemplates.changeTemplateCoords(t.payload)
  }
});
const We = Ea({
    reducer: {
      auth: An,
      daily: vn,
      main: Ki,
      color: qa,
      device: Is,
      mining: _s,
      layout: mn,
      canvas: mi,
      ratings: yn,
      user: Ms,
      squad: xn,
      progress: fi,
      history: Cn,
      shop: us,
      toast: Ns,
      template: En,
      tournament: Mi,
      reward: Bn
    },
    devTools: !1,
    middleware: t => [ne.middleware, ma.middleware, qe.middleware, F.middleware, ga.middleware, X.middleware, ...t()]
  }),
  Oe = [],
  Rn = async ({
    dispatch: t,
    flyCoords: e,
    paintCoords: a,
    activeColor: s
  }) => {
    const i = f.mainImage.tournamentTemplates.getRepaintRewardType({
      coords: a,
      repaintColor: s
    });
    await t(Yi({
      flyCoords: e,
      repaintRewardType: i
    })), f.mainImage.paintPixel({
      id: O(a),
      color: Z(s)
    }), f.mainImage.updateTexture(), await t(Ka(s)), await t(ui(a)), await t(Zs());
    try {
      const n = new TextEncoder().encode(JSON.stringify({
          type: 0,
          pixelId: O(a),
          color: s
        })),
        r = await D.rpc("rеpаintTournаment", n);
      Oe.push(r);
      const c = await r,
        l = JSON.parse(new TextDecoder().decode(new Uint8Array(c.data)));
      console.log(l), l && l.balance && (t(qt(l.balance)), l.reward_user && (f.mainImage.reward.add(a), t(Dn({
        rewardId: l.reward_user.reward_id,
        rewardUserId: l.reward_user.id,
        reward: l.reward,
        type: l.reward_type,
        user: l.reward_user
      }))))
    } catch (n) {
      n.code && n.code === 5e3 && t(M.info())
    }
  }, Un = ({
    history: t,
    dispatch: e,
    paintCoords: a
  }) => {
    e(oa()), t && t.push("/energy-over"), e(ze(a)), f.mainImage.selectedPixel.draw(a)
  }, Fn = async ({
    history: t,
    charges: e,
    dispatch: a,
    flyCoords: s,
    paintCoords: i,
    pixelInfo: n,
    user: r,
    activeColor: c,
    state: l
  }) => {
    let h = !1;
    if (e <= 0)
      if (l && l.main.fastEnergy) {
        if (Oe.length > 0 && !(await Promise.allSettled(Oe)).every(x => x.status === o.fulfilled || x.status === o.rejected)) return;
        const w = await dn({
          dispatch: a,
          state: l
        });
        if (w === o.pending) return;
        Oe.length = 0, w || (h = !0)
      } else h = !0;
    if (h) {
      Un({
        history: t,
        dispatch: a,
        paintCoords: i
      });
      return
    }
    Rn({
      dispatch: a,
      flyCoords: s,
      paintCoords: i,
      activeColor: c
    })
  };
class Qn {
  constructor({
    app: e,
    viewport: a,
    store: s
  }) {
    this.app = e, this.pixiViewport = a.viewport, this.store = s, this.sprite = null
  }
  show() {
    const a = this.store.getState().user.user;
    let s = PIXI.Texture.from(a.squad.logo);
    s.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST, this.sprite = new PIXI.Sprite(s), this.sprite.interactive = !1, this.sprite.zIndex = 5, this.sprite.alpha = 1, this.sprite.width = 1, this.sprite.height = 1, this.sprite.x = 1, this.sprite.y = 1, this.pixiViewport.addChild(this.sprite)
  }
  hide() {
    this.sprite !== null && (this.sprite.destroy(), this.sprite = null)
  }
}
class On {
  constructor({
    app: e,
    viewport: a,
    store: s,
    mainImage: i
  }) {
    re(this, "isCoordsInExtraRewardZone", ({
      coords: e,
      x1: a,
      y1: s,
      imageSize: i
    }) => {
      const {
        x: n,
        y: r
      } = e, c = a + i, l = s + i;
      return n >= a && n < c && r >= s && r < l
    });
    this.app = e, this.pixiViewport = a.viewport, this.store = s, this.mainImage = i, this.referredTemplate = null, this.items = [], this.opacity = 70, this.init().then(() => {
      this.validateColors()
    })
  }
  async init() {
    for (let e = 0; e < this.items.length; e++) {
      const a = this.items[e],
        s = await this.mainImage.loadImage(a.url);
      a.imageData = this.mainImage.getImageData(s, a.imageSize, a.imageSize), this.createTexture(a), this.createSprite(a)
    }
  }
  async add(e) {
    const a = {
        ...e
      },
      s = await this.mainImage.loadImage(a.url);
    return a.imageData = this.mainImage.getImageData(s, a.imageSize, a.imageSize), this.createTexture(a), this.createSprite(a), this.items.push(a), Promise.resolve()
  }
  deleteTemplate(e) {
    this.items = this.items.filter(a => (a.id === e && this.pixiViewport.removeChild(a.sprite), a.id !== e))
  }
  createTexture(e) {
    e.texture = new PIXI.Texture.fromBuffer(e.imageData, e.imageSize, e.imageSize), e.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST
  }
  createSprite(e) {
    e.sprite = new PIXI.Sprite(e.texture), e.sprite.interactive = !1, e.sprite.zIndex = 5, e.sprite.alpha = this.opacity / 100, e.sprite.visible = !1, e.sprite.width = e.imageSize, e.sprite.height = e.imageSize, e.sprite.x = e.x, e.sprite.y = e.y, this.pixiViewport.addChild(e.sprite)
  }
  isExtraRepaintReward({
    coords: e,
    repaintColor: a
  }) {
    for (let s = 0; s < this.items.length; s++) {
      const i = this.items[s];
      if (i.type === U.my || !this.isCoordsInExtraRewardZone({
          coords: e,
          x1: i.x,
          y1: i.y,
          imageSize: i.imageSize
        })) continue;
      const n = ee({
          x: e.x - i.x,
          y: e.y - i.y,
          width: i.imageSize
        }),
        r = Le(i.imageData[n], i.imageData[n + 1], i.imageData[n + 2]),
        c = i.imageData[n + 3],
        l = this.mainImage.getPixelColor({
          coords: e
        });
      if (c !== 0 && l !== a && l !== r && a === r) return !0
    }
    return !1
  }
  show(e) {
    this.items.forEach(a => {
      a.sprite !== null && a.type === e && (a.sprite.visible = !0)
    })
  }
  hide() {
    this.items.forEach(e => {
      e.sprite !== null && (e.sprite.visible = !1)
    })
  }
  setOpacity(e) {
    this.opacity = e, this.items.forEach(a => {
      a.sprite !== null && (a.sprite.alpha = this.opacity / 100)
    })
  }
  validateColors() {
    const e = [];
    this.items.forEach((a, s) => {
      for (let i = 0; i < a.imageSize; i++) {
        i === 0 && e.push({});
        for (let n = 0; n < a.imageSize; n++) {
          const r = ee({
              x: i,
              y: n,
              width: a.imageSize
            }),
            c = Le(a.imageData[r], a.imageData[r + 1], a.imageData[r + 2]);
          G.includes(c) || (e[e.length - 1][c] || (e[e.length - 1][c] = 0), e[e.length - 1][c] += 1)
        }
      }
    })
  }
}
const Mn = ({
    x: t,
    y: e
  }) => {
    let a = 0;
    const s = t - 2,
      i = e - 2;
    for (let n = 0; n < 5; n++)
      for (let r = 0; r < 5; r++) {
        const c = s + n,
          l = i + r;
        H({
          x: c,
          y: l
        }) && a++
      }
    return a
  },
  Vn = async ({
    coords: t,
    dispatch: e,
    repaintReward: a,
    amount: s,
    state: i
  }) => {
    var r, c;
    if (!s && i && (s = i.shop.available[2]), !s || s === 0) {
      e(Et(10)), e(Tt(2)), e(It()), e(Ke());
      return
    }
    f.mainImage.bomb.boom(t), e(He.useProduct({
      pixelId: O(t),
      productId: 2
    })), e(Xe(a * Mn(t))), e(Ge({
      product: 2,
      amount: 1
    })), (c = (r = window.Telegram.WebApp) == null ? void 0 : r.HapticFeedback) == null || c.notificationOccurred("error")
  }, Nn = ({
    x: t,
    y: e
  }) => {
    let a = 0;
    const s = t - 1,
      i = e - 1;
    for (let n = 0; n < 3; n++)
      for (let r = 0; r < 3; r++) {
        const c = s + n,
          l = i + r;
        H({
          x: c,
          y: l
        }) && a++
      }
    return a
  }, Ln = async ({
    coords: t,
    dispatch: e,
    repaintReward: a,
    activeColor: s,
    amount: i,
    state: n
  }) => {
    var c, l;
    if (!i && n && (i = n.shop.available[6]), !i || i === 0) {
      e(Et(10)), e(Tt(6)), e(It()), e(Ke());
      return
    }
    f.mainImage.paintSquare({
      x: t.x - 1,
      y: t.y - 1,
      size: 3,
      colors: Array.from(Array(3 * 3), () => s)
    }), e(He.useProduct({
      pixelId: O(t),
      productId: 6,
      color: s
    })), e(Xe(a * Nn(t))), e(Ge({
      product: 6,
      amount: 1
    })), (l = (c = window.Telegram.WebApp) == null ? void 0 : c.HapticFeedback) == null || l.notificationOccurred("error")
  }, zn = "data:image/png;base64,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", jn = "data:image/png;base64,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", Gn = "data:image/png;base64,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", Hn = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABRlJREFUeJztnL9uFDEQxr9D8AKhSMdzXLqLQpXykGhQJMqDhwjiHiKkRDrRICVlKlDScc9Bl4K8AMVSJN7Mbmyv7bXHO8f8muT29uxZf57x+M8doCiKoiiKoiiKoiiKoiiKoiiKoiiMzGobkIGm91r0M8k0frNqRTg9vuu8tb7ae3xxci7u+cQZjM2q6YvgYn21J04UUcbGiGGQJsqz2gZEEC0G0Ia0/jgzWSQJgs9/f7f/r6/2uuOF4zr9jASe1zYgFeMtfVFSvGhKiImtAJrTP28B3Pf6Ty9eeW+m96xffgeEPKuokAU8esTnv7+t4Yhet4W0qSM2ZBmkjRFDiBLE9PihcGX7jBTEhSwgrJGlCWEQMdARGmxWnQvepRMAODkHBD2nSA+hUAGkegVF1BjiYheEMIj0kNPjO+8EcOj9KSPJQxpsVk8a2jeGnB7fYb1ZASfnDYSMIyI9ZJcR0Wtgya4Mg1mWQUi2JSlkWdmlAR0Q0GPg8I7rr+cAgMWb7vWbi/u/h+8tHiXAS6ZknHMT6fqo+7ovggsjjuHwp/f2SbTFFEJWA4Q1er+BQzFlNaRMi1imQ1QVpmblwUIYbi7CvSP0Mx4vqtI2tdLe5voIaM66jRXb2Dno19+ctZ2kyj58jV7QNGcVak1g9vH+D2udnJVBkBgGblE4BRkUox/PS4Ww2Ho4ReESxCtGaPaUKlCO8rlEqS4IbazFGwDLefeGy+3TeyLIVf4uCdJcH7kf1DTG4tvcfoO57912lBGh5fvsfEiJi7YZiyA272iFsPVayv6vx8+8TjN38YNksLcH7huJt9iE4fCS0vOQpj/xA3ox3SXG/q+OGNnwlUtssY07HPOTUoI0GGN4CSHy1jHu+TyUcL/g9LYTrmgD3R4Al2FjRnKqvJw/rRMYDFuUEiGs7uIiDVdfmOeol1t02tLYspwDF+MSiDEUFyQoZQ30Bl/Z9FrSfOVy6xzPxqTdseTulsFLI6FhYZAPvVA+0tNi7codtqoJkoW+GAbG8JdbELmnTnxzF997EydnV+JfyXU1fOKYlEpOL5nCFm46zA3PAXvISt0Xr0ENW+WOITtKFUEkeEktG9kmhkN5fbZ5SSSu5f/FsrvkT+1LnnwGkFOQ2exjeqZlHpBLmNB9GNfnDLnnIexZlllQvHm3tTa66YG2kJFzCzdECFd9JTtLnZk63Xew7NS1IcE1E8+Bb6PKEJBW78RMncbmxbf50/g9tIs4lgAxbOMHB9OZGNoEuD3Iv1kV4hk9OBON4iHLlZG012M8IVGckL146qVmfKO2u55D3GqvN2tKDUuhwlh2AV20gkQux4gTBBjI25dz7+ZQFizl+44VWRMMByLTXm8MNo1VWpRAm4wnGSG4J6psWZY3ZFBRJrCCW3NpJ7eHOGfrQT3NcsyzKLQ+Ulet7dvshT0QdwzIBkfoehDAZkvNY0ClNp9bUXxpryHqLFUOHJ43ZBN9llLHSqtNDE2eD0SsnhYMYZxHfXyUGtRnDz0IQNggWXMgjbWv5KHrkudlOgeth9JMClcPjamb3lvyawmlDzANilJrYyrGDi4xihZMsH4lwUXMd8q5y9yVL+wAkaJQcntOqqgcYrBUQEgWBRgvzJikgUsMgHeDajbw4y+ThFMM1ooIozyFE24x2CsjtJvlNnEOf9qv58RVR8+L2dtnCr8RZTvJMHNcjxbKEyZddfy3P8+USuxRFInPqCiKoiiKoiiKoiiKoiiT5x+58vqZVePedgAAAABJRU5ErkJggg==", Jn = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAA7JJREFUeJztm8tx6jAUhn/fuWkgWZBV6iBtsODWkBQBQ4pIaggL2oA6WCULV8BCd2ELhCzbMhifI/x/M5kMfunx+zx0bAOEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghZKRk0h24lkU+N+7vj6d10mP6K92BS7FCrA778x3l9lSFSbLTi3xuKkJ4LB9ekhTlj3QHurLI52b1+A2gmHQfu231+F1xZymQ3B0EwBhjgN9XAFVRjpYz2SLLMiCxMSbV2RJjfqZRB2bPOyCxMSbnsizLhxdgsq3umGyDriwVks2yjoRESZikzNnBLPI5gGraa63j42kNJDi+ZF2WxXVPKbsqS/ouC/chhCV5C7k3UrQQs8jnWB32WD68BGPI6rAH8jk+ntYGicURWogyUrp7DADY7AoAVt9rYOYtEjc7LP+djimzLSCRsWruZKUOZT69Db4Yls3u7Gf2HjxK5dg1xhADeJMfsIIoyvPMrHpe9n4UXJUw2mKIMZ8tYrRtjzzHaUdVRViTIEXR0J3Mpkm/FO/6ZaFSjSgazPU4GbFV3L4pq8LHnyKd0NA46krpbTEi1nIuuI50yV6TyypwJ3E2Bd5M8edOXkxQ7+s6AyNpIUU25VuInaS3Grf+1bHLbdfxrMRxXyJzI2UhRTYVEsPezXU07etyrLUWz0rMz1Q0+9LnsoZ84KTw4ZY+QUaOhJ8sMis/6AKnO7Z8o6SVuqAcm4X57Xl9ksi45AQJYWNIF3y3EytmRJtjECT6FZ4o6mJAV1EaGFoUxhBlDClIv9YxEEPXujSW3+Pp0TVpQY/LkixjKCqhyFmInYS2p359l+CDpZmsuv8Wpf8IhrSQzCtzNzObBksbV7HZnYqMMcdi+CxLTwxpesrni3Jp+b1OCCFrCKFrHTLZhquwt645NSQHXIfEupRboCC46w3qfVjF72v9JFvRXetQ4LrkLCQ0eDs5fa4vrMX5VveVFX9WMAXWAUgH9TpRJtvT/1u3J5zm+sjHkNCd6Ypyh6vxJoa2kCx73p1nWk13ZtfnI224FhdxzTGU34FLiox9uS43yEe4qHEJEpqYSxeAXWlqx+nXeATp+iJ1X8LEXPv8hWxgBIIATaIMlfW0WKiEGCINOpjK9x4hmlLVG50rJYZYow5xogDXW0ykiJJiiDbsEC8K0F2YDitwaTHEG3c4fZLQRZwe8D53E58P8Q4EiCr1tglX811h8NDoIwdAVWc60iZcymMjhBBCCCGEEEIIIYQQQgghhBBCiMd/ML9eI+BDYUAAAAAASUVORK5CYII=", Xn = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAActJREFUeJzt2kFugzAQheFp1UXEtidjg3IaInqZRt3kZGyT7NyVU2NwcAQVfuj/pEitSCSHp7E9DmYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOR723oAS7V948L/vz5/5L+TrLZvnLt9u1AckJr3rQew2OH49/f9vN04VqIfSCgMR5R+IDuoitDH1gNY6nS9WLf1IFakXyE7I18hXVUP147rZbvBrEAyEL+17ap6dK2rarPenBk9yb9r+8aNeo+oD4l7EvW+pFht38wG8CyYrce/K48w4kBu3+OAEtVDKCsZTFFT1eFDCV+JgBRCKXrb2/aNG+2i5sTvPRwfzWNX1aPDSGQaTVPP1o5UdSSulxyKxrZ3rkJyrwscsxQ9Za3tJNA07j+QoCqmGsnSaATib+rUlHM/D18xsSN5jTXEm7q5uTf8fpYIRyOQV29kWCn+swJhmKlNWbkOR6mdVUgjkKC5e/lzIpUhYdAcpo5O5og9lVJ+hYS7J18pudUSv09g+ir+B5zHeVYstUY8eSzodL0U/6NV0YPzkqF4Gc9mKYRhJhKI2fiR0bmuOz4mUQjDTCiQ2NzirBIAAAAAAAAAAAAAAAAAAAAAAADAQr/gsiaUUMmhEAAAAABJRU5ErkJggg==", Yn = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAQlJREFUeJzt2E1ug0AMBlCn6iK9YXpCckOymy76IxipKaSRGFvvSSxgZfjwGCYCAAAAAAAAAAAAAAAAAAAAAEo6HV3Af7V5asvz09t76nt6ObqApzhfPo8CagRSiEAGI5DBpB2AP8O8nx23a0TkHe6piu6/qO4O8q9gInKFk6bQNk9tFcDigf95/XZNFcrw2jy1leX5PK2P3/TdNaicQ33ZERuXLZ7k7lu/V4IuydkhheULpPgylC+Q86V0KK9HF/CQrYO8yIbjcB4e7N3n8dH3sUW+JSui9JKVxurHb2/HJOmOiERbJxE79rK6Dsq0bZKm0G973/ZMYQAAAAAAAAAAAAAAAAAAMIgPNT9HzAKUgvAAAAAASUVORK5CYII=", Kn = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAU1JREFUeJzt2MFOwkAQBuCtJ/XtvBR9mRKfptx8snK03NaDQCoWQii6TPm+hAAlaYYd/p2WlAAAAAAAAAAAAAAAAAAAAAAg5Zxz7ttcug628s5BU/JAqdouVZUuYIpzFryqqlDf8aF0AfwUtiERt6NzhIpzStMbcetbWIiERB3QlwjRkJ2pTVmuF9cq5b7lawhyvxIqIRfbrNLy86N0FfOR+/ZuEhLG2ALPsSlhtqyrDOTH1+nn+GNhGpJSSmmz+vlMOblvx7epU8cHStc/O0cX/tRMGRwrXf/sNF2dc9/mpqv3j8MmNF39qyel656tfUIOkzB4P9aQpqtDNSXWUE/p+JXSZpXen18M/P82loBTqYlw7zEULyHDBGxfH/4tUj29Vcv14vvzAPce4Y398qMmYhbGFn038EvUwwiXuAAAAAAAAAAAAAAAAAC37gv48l2z+Bjx4gAAAABJRU5ErkJggg==", qn = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAmpJREFUeJzt2jGPokAUwPHH5YqNpfuBtqcz2eA223tfAgOf4noLvY2Jnb0fCEq1mysUFoaBA8Tjkfx/iQmMkgzz5g3M2xUBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4n8IkMLJZmbH78Qw/xu5AX6GfSjEoYRIYc9maMAkqbZlxetqNN3YH+igOeiaaLURePhqv8zxP/f3+HLsDj2oTCBERue6e35kBTCYgDy05152sz4cBe/M86lM4Yy5b0yoTbPfMcAUkfv1Sd/+Teaj3muETWaaKVAfEGFN+c+o6wC8f+SeaLUpfxcf5UN0clLqULSo9N+7PgdYPcYd1usyPNS5XIsozpMQxy7vKrteaHSKKA+Laa/TNjMr1n79VZoc69s66dHwXJkGlrZPLdhI7dhVcAbDbwiQwlcB1NPZ9TkbtIF+235+GYLXlXA5R1bgcNQWrK5at9uoGuFewGmjNEnVvWd7+VN0AttkQXnedNo6PvkI/i8ri4vp8kMg6F5HbgNuvvnabKyiua5RS+T6eLSdNs7hY24rmf77b02Xp3FXp1bpLF1GaIZm8VFLXfp/5xZKI67dToi8gm5URSfNTb3/Kj0M/dV1RCpq3P0ksv0RExLy/STRb5EHRnBkZdQGxBz300/oscbSF/u3YWa/arIz2som6gPRVqQT7y8ktVyJKH+pFdZs4b3/Ksyk+zsW8v92+yAJS85dC7cuWun2IrWmWx8d5dWmy9iPx65enudxuUz1bMnaWrM+H8kzfrEyeIU2/wzCKxcW6kkdeAf7H7zAA138lAgAAAAAAAAAAAAAAAAAAAAAAQERE/gL4iAFGuCkFvAAAAABJRU5ErkJggg==", Wn = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAtJJREFUeJzt2jFv2kAYxvHnqg6UMflA2dmQIkqG7PRLGMGnyE4laITElp0PBGNguw5wrn0QG1OUe93+fxMIA+Yev/faZyQAAAAAAAAAAAAAAAAAAAAAAAAAAACD/G7uU+8DCvxR5Ta7uSe4TxIC+XDAZyNfF5rfzWu3wYV8JH492wwqB7sYBoHcQBxIlWwz8HEAJUxrf69JIHVKHzwbEc41bpZGqI7ZyGebAWFco3L6aShMZ4TxF26Whvd5GOdCTv07W+GW1VEXVOrfWuRSfbGVI9M5l2wMzvmS7Jv3i2RfbWofIkmPjtRVYq06pJQVouOAGDxKUzJxhCSrlP1C7tuTiTEIklZILkWV7BdSZ1i/ePnfOV45hyV0ExKGk75Cnl+cJI3fV6n35CDxNJY+EEnTt7s/T1I1+f1CzjmXuqeYamilqaIzzOf5WpduF79HoqlfrMkgh/AashaGZCmQz74/0bSiPomdQFRu7Fc1+f3C5HJIE19T70CQ9bb54zyMJj2k6rl0+jlGgzMRSGjmcVWM31eaXPIBH4VWHHSjAcRMTVnBpNuXdDgdrp26qiqoM6x83eLdQxNnGXGFTLr9yiDCdYt/fLj6dDcYv680vX81MQ6ShUBmI1/sH9JhwP3jw0kok26/HEBdj4mnqYqpzcopsIkeUhSOfrdcyz9GlRIP6EcXj/vF+QorVEO2Gfg84M5Q0tMtf8bVkgeS9bblpZPj2pYkjXtbP+n25ZZrxVWU6wzlfv44TF/hfWfCiKfB6f2rm+pV2WZlqo+YKNM6oflO7n6dvrhfyC3Xh+0KoU3f7pT1tnkQlvpElVbspBRNMQXj7XdJ0QKlCg3fUH/455zcLwn3UM7dR2npn+KS95AmiheK+TSUr4GtyxsXelGbtG6n/W7u3XJdHvDo1Lkt/eIck1fqteKj//nFxT0EFvDPdgAAAAAAAAAAAAAAAAAAALTXb7LTHFrMPO3DAAAAAElFTkSuQmCC", Zn = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABLlJREFUeJztnLFu2zAQhk9Nh9Sj+jxGd28GgiAF0tFBtsxZLFhv0KlBMrpA0iCFN++FnycenSwFO1hUKIoUaVni0en/AQEMWZSJ+3nk8XgKEQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIDDYvp8Krj7ABTEy73YSZT5paD55UGL+JG7Ay5mgzHRM4n882Piunc6WhMRUd57r/rjA3cHfJgNxu7p6+JIGD9bmD6fCvFyL8TLfVQedRCCEHmIMpyYP2tIIWaDcZfd64zopywV6/RVeES+TI3tps+n0Qqg45yXOdnVkNlmQURvwkxHa3K1zzYL8lmfQhFNR2z0Pccnn77Wve32L5td4p6ydg1hj8/M118fjJelRxHRVojhhOjbDesgjVoQGcY6sQmhfm8QJV+mZaCQL1Oi1d3OfeyaaAXxWj9cQuwK41QliVIQpxgdCTEdrasBgGG9qq0xPcM+InR6E8OyjjTBEYHFIYiyeIvzH9XvVEPu4xktBAntHUQBpyxn+GoztmVBfq8ES51UQkwdn5Ef2Dsa+9sjwQRh2w239C6u/gZNLlpHXZPRGKYrLu8gCixI/vkx8Rbl9aF6rY0wB7j2sLjlXtlX37VEF8PUzpFS4Zi22MLevVPiPnkrH/E0UbLN4i1DLNu/PgTbk4QVRCbwCnzS461p4UmlGDt6U5dChT0xvP2b6Am8XhbQFiFyxTN0DGJkmwUln74mXXtN+CNcRRSZR+KMaow0BBN9CSHhOVMP5SkuFGPXjn+1KK9vISR8RQ4GUXRqIh2fvf3tgx5S236PwgkhYU8u6pUkch43Rjs6PhGSo41sR1Q9iyf6z8Jeia20x2lYIqtxdy2MmKW/yuclT39Yj3Hjr8uy7bY72IXXxDs+I3HyZe/n7gOvIJYKQ+MCq352iOETIFTuiSjFwu4huvFtxW4+Qqjts83CukgbBVOfz1iwzXumrpV8lmKs7ihrsYvfGjo1XGtuo/6O6Rkh4RPEoyBaGtNHmGyzKEt58hURDSfeZUS6aNPRmq2Cnk8QxTvyZVoznnrNNcq3nqWN6tUd5bT9DTVnFl1WQIMnvNOSjERK7K9MWz6jvHK/RGvXVOtrEyhfpizhbzSCEFXrpJzYdvnDN69QUZ/blGVWBeIQhUcQUxRTeIQL2ygvS0EbBKl5oeV5tecGFCV82GtbzIcTZ21taTwtnzUbjBs9osnr8mVKydMfYzhcPjdgGBzeQ0zTlS5EsQbohhQnX+qpFGVvklyde3lZDdUDCuPrnhOqaC58lCUNpoqgFznf3lA+vxTT0Zry69/tjNyEEjDUvKcQJyeifJ6W4oSCPbnYiCoKEYnvP7fXlbNuleTqfPvBJqAcBKoYzO+D6ETVGSNSlGXamPjLNotSOCKqiqIJQcQX1rqIrkNWCmFMEVEZDRGZA4NCiNlgzBI57UKU74cY+XaTkOHsRBpYjvzZyU9j82yzKM464nnB00TUnatReImKvqfQKb+P1CN0DsdDDFSmnosjka8sN0bwqpovB9NRSfmS5vXvuqFNe5wD8QwJ+wFVG4xiEHlVsoCu8ThHoYsj8R7+VdP7QooCAAAAAAAAAAAAAAAAAAAAAAAAAAC65x9TXHckk+SwIwAAAABJRU5ErkJggg==", _n = "data:image/png;base64,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", $n = "data:image/png;base64,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", er = "data:image/png;base64,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", tr = "data:image/png;base64,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", ar = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABdBJREFUeJztXUuO2zAMZZq6pwmyyCrAbHKaOVRPM5sBsprFYE4zRuAuCqWyIlEkRX3c8AEFmsSWbVH8PVIeAIPBYDAYDAaDwWAwGAwGQwK73jeggekMy3zc//3w+7bpZ/rR+wYMa/zsfQNamD5vAAAwd76PUrTXkNf9Aq/7pcbQ83X7JripQKYzLLH/l+Ll+wAv3wet4bqiuYY40wIAcDkd1DWlxpj/NS6nw+JPWvh5SFQ0syEsyhoMm3eCteH7uhZBg2mIAJoByVAY3ncYxoIfcExnWFpohpksg8FgMBg6QytiHCYxXBWZwKPTt8rgOqqFWTAboh4SCgMAwH2e4LZsVigCkMLey+mwVK1jBMIIf9tiZjx93lbMNhVZDQlt43SG5it2Pu4BrvjDxUxeD81y8/V2/RJdm2yyJNL2EQr27ePfDU+fN1RLAPCFkDR5R1h6CUaKrMl6+/ja+ZP38n1Q56AoE5Yza9hvrU2eP19ckKmT+Qq7WiuNOmExPolybkuhOGFIr9dUlX3N8m88Z64cYqGwe/CsyUuE0f71RzBv3W0rd0IB4gK5/xYZBzv34fjOjXbV8pCYn8FsK+bYOQFFafDRI4r00SUxvJwOS0w4lMkMJ2u+wq7EP5QKUBtd6iG+MDRWIzXgiAkzd0xrNNGQXBhIXeW5yUJ9i/fbKrgQJnC1MNTNAMTDRe1ViyWpvdGVXHRRjh9u5ia/ZpiaC8FbhMVqAuHS5/7x83FPZnX9a3DOoyAXeregY9YCEXL4GH0ueYBYAnm/lhceSyOkaIR3hoW6lYFCdkoR1RAXi6fC04djhStLOqGpRI9yfyNk4wDpXV8rgYQTRHF2VNrDHetMjDR/4ExmSnNjZo7zHPexKwg2OuCd06dEH8yiVasVynXQHE7NnQ/AjwDd3L7/+rp/54+BJoY5ml2aIddmXquPX5Dd5xZ52UoVaIdDbGVphbSrjnWEbOSSlP659+OUtX2oJgc/ytEKaamrOfRp2hyXHyBhLqGIy9JgYTHzIi0sSYXIPY9zPJUNKNKQ+Qq7CW5ZZ9iDUc1FcanJdN/nFoJ/HNfMYsIpNllOKACPdperQSXnp+6Nc3xI5aSEEhMGgI6ZVeWBqMdizhQ7tgZS4a6/2mPb2tAwuaDq2N2pYyZCUxgYHRO9rwxvheY4BUmjmkC4tpf6fW2QaB8mb1VCQhZFWW7Ll7/6HC0izWBrQbvmQSo3C6LEqiaLIpTwJQI1i0UPzDGR4U2ZIErHJRcqNXXqJI701gZWENKw0a5IQzirOSWIkcqnEmi1Lzk06zoZdeIpk5ZzzuHWA+lWBIABmxxaIUcmUklE7Tyqex7SC2GYPkrDnG4oOFjjsgQ5ukTrnBRUNCRGn28VuUmMZfyl7aw+upksreaDGKfUQzu1rqfXl8VhdhnNBznEQk7tfq2WUAl7OVQJxpKymgwyb+fZ6u7d9isoV4cnUNe5mjlnvFFMnkPXt5JyfquFlMmD132T92OF6OLUNSe+hODLkYsUGj3WMF4CVYFQIifNEHF1nVTVj3ivGLAgQdIwjkHFTmIPl1td/mdJDRz7HR1P8JqQ6LME45RqSrGG5FYaurqISViKmCRrm7CrnwLtmkhZXxZR7bWLOKuxpd2NAj+GWQH3r9RklfVllThTAudFpexjmhLb9jCHvx95vizmk7R9YpMoC3OuWptfsJWZ9GFOUISFhWmUZs5SJBCp/fQ7HjFhaYCijasmcEKzHreliIMmraRJh35tJwwAWmhaogkaOQnbqcdq46mSZUkpsxZ8jovDwfnHJfco+jlJz7cB9W4HTSH2Yhts51NJXqRVTmCbrFiPErVrsRc4e0RaXAfD5uoFXGiWV7nXklxDTFWEWrHFYtCIyDr1UToNtwCbq8Exqk99OpggBoXkr/KwE0OT/hPChP4ksCiICH+inN1tpSUmpAxaCMRM4gBoqXUlGObvGPaYrC0IaAi0sOtb0ZingQnEYNgi/gA7lB6a3ITaiAAAAABJRU5ErkJggg==", sr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABRVJREFUeJztnL1uIjEQx2ejkNc4gURHRRUpDS9AneqaPNg1V12dF6CJREVFhwS61wjFXnNGE2N7Z/yx683+f1IKYGFtz4znw7MhAgAAAAAAAAAgZvZM7dBjAAAAAZv1qg29BgCACBAJjYCx7vdjHTcYA9AuAL4zCE4AAAAAAAAIgqQYAJvYRLKx3zDmtTsc7z7rk8161S6W89vr8+lCRMOPqzSdk9usV23uRZg9U3vd++9tC4NzPl1GJ5Su+XKqnNjb6zZo7mMUipQH3wc1F9Nc1jN7prbmMUvxCoTT90SNvwjBQ0k+vrELpVqz79q2iIh+/XlviO6FIN2vDdxnDb0diiykBKEtRppIbdardrNefXGYKcIgcm+HfTKIQEJbTCjCCnHdU2OEkZoZD5lZP5b8cb7YGs09ny6dmhryM9otR+Kz+qKYhdia7xOOT1ChRXJ9FhtluYQ3pA8pYiGShZFYjERzfYunScZqymkGc+ouZs8UXRXgPsS89t2j5pwl2kJK1JrMIu4Ox4Y71o+n45frXj5XyfeqlVtUoplcVyR0Pl3uFpFrrPm+JOb3abJtATXlEimoB60JS10L47Isc42r0iwViJ1ISoUiqW5LFDCXAjwQ6coNmhxhsZxHxfTmO5px8QAgJYx1jbdrzovlnN5et21K/mK++0ikz25TyRX329rNf1eqsfZ1LouWjmexnNPucOy+MDAOlVOP1QDuo2yH7RqU4bqnxmUlLgXKsWWk1sRyoLqhpODHidFYF7EZf+w9OD9/bFW/o/UntpVXlYf4MDnGEBr7+++7+juanWR3ODZcgKotS1Jj4tdODVe4r0VlIbvDsZEsdClhDJVdn0+X21/oGi6M2LGqM/X/5tUS3YeDsYLgdSczEdf2VHLL8gUQNqUtP3qC2n1Sem1IICUxyZ/tM7RnLMZKYsdfnUD6xJeBhyKlrnmnzjWqdMJvXHqAJYktiUjzqBiSz0P4IMbWVCwpibgy793hePM3uSvPsU5d/dl3gjv/j6ejs5JNdG9hEv+YnBiazo+xWYems0Xzm3YHi3ZdimbqtQpKWzC0r3edTPr8EX9PUm0YRemkRuzFDfkjjQJMYs+34QskaTeS+EZJ4VXyW5O3EFfmLSmVSH7HRuJTijbK1YqdQ2nLIb5jX03x1UeyQDSljqHKIj5STgdLkbQw2hO2Pg6ahkLilyStUkW2LF9ylEsIrhCzptYfs/B8DaQkCYSXrK97arSd65p2T04g3s/+PKQUV23PJYiu8SVbSIrWxzzLEfp8aKHkIPuW5etM569jhCh1uCmtODnQdNW4yJqH2Af2RPd9uUTjfQ5QqhQpFpp0QOVrCeVIW0El9+OvQ77KPHtYG5KwX71ldRTRetu/fUlYn90umqZxIpkSqjsXQ5pZUii5opgYfD7QrEXOeYt9iDSkta8xJ2qclMis7wjKteW63ottLLcRCySlRvPyucrafZhTKG+v29ZVqR2qJahI2Msns9uX0WhXeJlTUFLFydW/bBALRFrJtMPc2GxcQo4FSNHyUM4Rizr0DAnF15g8pkKiKzTt8zEF9ZZlF86+vP+UZ1BDYf+HCbPwfSqUSiDcRFMd2nd5SDM32VtJQ0/f2t/nVlY6u5YqgC+b7utwLTrKStVo00VvMt2SeP7jjzORy31mo7X+SWwTMU3VOe+nuc9kuk5sK6z1Ca9JdZ30KYTYe03CQvqO4BAxAgAAAAAAAAAAAAAAwNT5BzZPhVZ/4M1WAAAAAElFTkSuQmCC", ir = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAA0xJREFUeJztnDtyIjEQhputvQhUkU00J5gLEJNzMOeOfQFOQERGFRxlNljkkuXR+9WS/i+xXXgGTf90q7slQQQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAODArvYATCzztB6O+++/n48XERFdb3fW446B7YOpYsg8H69uRflTewA6dGKI15Z5WgsOpxh/aw/Axsfn1w9PuJxPK9F/Ua63e/L3kz2zhiey9ZDn4/VLDKKfAqX2EjVMmrw0F2wFMX0yhSipDbb1nqVDI/uQZUMYLFVo+fj82tWcn9h6SCwxRpXFLT2HNJ06ykbvJQ3u1kNapQtBevEOIo9JfcQ2Rg2cjGlqYxDZCyhxfepCa5mnNfUHwnbPWFvYsF64NYCtgk38rzqYHEbTEVtlqyn01thFp8BGqDDWC9QB6MQQlBRARR1rDo/0KUZtttrCqzB0eYOac8rz8fqu3kOM4Yru3q7eY8KYZbXQUV3maZXHqeuBpeBw3Bvvrb4WYj+jIDWaazFcb/ddTg91ETpWlOZ7WRzT7ph+mNFDRK0BymEU5Hq77yBKWawh6x0S2E/uvuQqVlV87+38zzXri1To6ogc9QpR2Pzm1VxsIQ0O4XDc0+V8WlM+X6jA2pC1pXLrHmJrAV3OpzV240RsJDE20YjaF0FGrqRzVvIxsBxUDuT5g6sYRJ7rIeL31rxGHnspMUI7z0lWDNV+0uhs7e9ytU8XS7iulChydam1a1+wqdATSs1wKycSLqFrCEEEtYpbn4WzoQSpiasoQ80hNXHN7iBIQVxEYb9AtZW1tH6CypTtsfcQXQrZat1jS73ZeogwOLc2R6oen+76KEFyHf/qsbFJ5LZ8ESSI74axELiKETou1+I0WcjiasDaFNsGJE9OEENPUdu0mulwxnv3e+s1AHeCzkGMKEqpxqT2nIctixpRFB0p93j9mtRdDuhczqc111dbtIiw1/tn2l0nvgd0ekE8d+jz+i5E6TD2skYRIwXZbLXM05riJFBrpNqokaUUQH0RDgTpjOxzRO0vBGuNoushHMTAB4T4hsDURxBAAnKLIrJWbCV1JGetJYdH130AwwvCDbabHHrg/UUGRMR3Hh0aiAIAAAAAAAAAAAAAeuIfG3gINg3W6n8AAAAASUVORK5CYII=", nr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAolJREFUeJzt3DtSwzAQgOGF4SLJTDpXPoEvkDo9B6On5gI5Qap0zMBRTAFiRPBDr5Vk5f9maEIejleP1cqOCAAAAAAAAAAAAAAAAAAAKGfou9HlMWSwdOIJSoVaDMpT6QOIsT/s5Hy5Jn/foe/G/WEnIiIf759yvlwfkn/IjMdcH6Th5fXtQaOX2AEwgcklW+S36Pl0HEXy95ImaM0nQ9+NOeeqTQ9Za1KdSHpHgFYyrqZ7CApppXeIeK5D7Pxc5Dv7ECk7xrYUDBGPgNjBeHl98w6Aeb1GCpn6/Ya+G5fe87Zh3lJPk4e+G01O7vJcl8e0+Bzr3Ovt45069ufTcTR/S/9T+96+X7DkMBITDBcm4EufsxQwJObaA9UCsoVJM+dq2uckhwxbq+uQ3MW12vkkNOa5PkHZdPndaKm0sdpDzFoDeawG5Hy5quw5IBJBCaN63giKPu9qL0HRtZhlmZNvZzEtZTSa9bVQXmlvLQcd47ZIqnHVCjzEFh8BAL+8Jmk75W1hgtcWcklqsuLiVIp8z8w2sJ3FrW0Ni3AZkIq5E09jtVBhwKK5BrKJDaqpy25qKneE+Pk+/4a2TQRk7nowl0lya6oOiOnWc/vYpYKhmVFWHZDWWr9tbmu86oDUquWGcrfmsiwWhpWJ7nolbyHeqqXsMHgOWbskH9PWKgZJJvWQ+0Xu1doIEhUQhig0z6l1T91bSM8ogCs0/ipawmf/wI9pvLHnbXJh2GIVVZsZ0veHHY05lVT3Bcb0FEonCmLWZVR7LSnvFmPIBzRk6VZUhN1ln0NqCAYNROpdaKr+SAzCaAfFZxXPOkT093PMkOiyiicgmbgGnYBkxM+UVIgEAgAAAAAAINgXIA5u7FTs1dIAAAAASUVORK5CYII=", rr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAolJREFUeJzt3DtywjAQgOElk4vADJ0rn8AXoKbnYPSpuQAnoKLLTHIUp0iUUYgfeq0si/+bSUN4GK8eq5WNCAAAAAAAAAAAAAAAAADgqXRt07s8hgymTjxBKVCNQXld+gBi7PZbud7uyd+3a5t+t9+KiMjH+6dcb/dN8g8Z8ZLrgzSc3y4bjV5iB8AEJpdskV+j0/HQi+TvJVXQmk+6tulzzlWrHrLmpDqR9I4AtWRcVfcQLKSW3iHiuQ6x83OR7+xDZNkxtqZgiHgExA7G+e3iHQDzeo0UMvX7dW3TT73nY8N8pJ4md23Tm5zc5bkuj2nxOdax19vHO3Tsp+OhN39T/1P73r5fcMlhJCYYLkzApz5nKmBIzLUHqgVkDZNmztW0z0kOGbZm1yG5i2ul80lozHN9grLq8rtRU2ljtoeYtQbymA3I9XZX2XNAJIISRvW8ERR93tVegqJrMssyJ9/OYmrKaDTra6G80t5SDjrGY5FU46oVeIgtPgIAfnlN0nbKW8MEry3kktRkxcWhFPmZmW1gO4ub2xoW4TIgFWMnnsZqocKASWMNZBUbVEOX3ZRU7gjx833+DW2rCMjY9WAuk+TaFB0Q063H9rGXCoZmRll0QGpr/baxrfGiA1KqmhvK0xrLslgYFia66y15C/FaTWWHwXPI3CX5GDZXMUgyqYfcL/Ks5kaQqIAwRKF6Tq176N5CesYCuELjr0VL+Owf+DGNN/a8DS4Ma6yiajND+m6/pTGnkuq+wJieQulEQcy6jGqvJeXdYgz5gIYs3YqKsLvsc0gJwaCBSLkLTdUfiUEY7aD4rOJZh4j+fo4ZEl1W8QQkE9egE5CM+JmSApFAAAAAAAAAoBZf6Exu7Mzk5D8AAAAASUVORK5CYII=";
class or {
  constructor({
    app: e,
    viewport: a,
    mainImage: s
  }) {
    this.app = e, this.pixiViewport = a.viewport, this.mainImage = s, this.size = 7, this.images = [zn, jn, Gn, Hn, Jn, Xn, Yn, Kn, qn, Wn, Zn, _n, $n, er, tr, ar, sr, ir, nr, rr], this.textureArray = [];
    for (let i = 0; i < this.images.length; i++) {
      let n = PIXI.Texture.from(this.images[i]);
      n.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST, this.textureArray.push(n)
    }
  }
  async boomWithDebounce({
    x: e,
    y: a
  }, s) {
    await jt(g(50, 500)), this.boom({
      x: e,
      y: a
    }, s)
  }
  boom({
    x: e,
    y: a
  }, s) {
    if (s) {
      const i = new PIXI.AnimatedSprite(this.textureArray);
      i.loop = !1, i.animationSpeed = .17, i.zIndex = 2, i.x = e, i.y = a, i.scale.set(.5), i.anchor.set(.5, .55), this.pixiViewport.addChild(i), i.play(), i.onComplete = () => {
        this.pixiViewport.removeChild(i)
      }
    }
  }
}
const cr = ({
    x: t,
    y: e
  }) => {
    let a = 0;
    const s = t - 3,
      i = e - 3;
    for (let n = 0; n < 7; n++)
      for (let r = 0; r < 7; r++) {
        const c = s + n,
          l = i + r;
        H({
          x: c,
          y: l
        }) && a++
      }
    return a
  },
  lr = async ({
    coords: t,
    dispatch: e,
    repaintReward: a,
    amount: s,
    state: i
  }) => {
    var r, c;
    if (!s && i && (s = i.shop.available[7]), !s || s === 0) {
      e(Ke());
      return
    }
    f.mainImage.pumpkin.boom(t), e(He.useProduct({
      pixelId: O(t),
      productId: 7
    })), e(Xe(a * cr(t))), e(Ge({
      product: 7,
      amount: 1
    })), (c = (r = window.Telegram.WebApp) == null ? void 0 : r.HapticFeedback) == null || c.notificationOccurred("error")
  }, Ar = "/assets/particle_rays1-mrHjO6Jg.png", dr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAB40lEQVR4nO3dQU7CUBRA0da4L2Hl1JXVidP+0Fgi7T1nSiIoNy+2vo/zuq7rRNaHt75NAHECiBNAnADiBBD3Ofr253mu/3wuYXSlbwLECSBOAHECiBNAnADiBBAngDgBxAkgTgBxAogTQJwA4gQQJ4A4AcQJIE4AcQKIE0CcAOIEECeAOAHEDU8GncV/fMbFVU5NmQBxAogTQJwA4gQQJ4C401wG7r3Uu9/uhzzvY3k8/XrOeGloAsQJIE4AcQKIE0DcJf4YtMfyvbzsa9++bpuPvfJ5/8IEiBNAnADiBBAngDgBxAkgTgBxAogTQNxpbgWPli1Gt2CftbVwctRiybsyAeIEECeAOAHECSDuEgshe5YtjjpJ/K4LHnuZAHECiBNAnADiBBAngDgBxAkgTgBxAogTQFzucOjWZtERW0VnZALECSBOAHECiJvXwYbEVT4SvW60BGMCxAkgTgBxAojL3QncuxV89V+ETYA4AcQJIE4AcQKIy10F7LW1J+BsIJcggDgBxAkgTgBxtoJ/2QomSQBxAogTQJwA4qyFB1gLZ5MA4gQQJ4A4AcQJIE4AcQKIE0CcAOIEECeAOAHECSBOAHECiBNA3PBcwFH/ZZP3ZQLECSBOAHECiBNAnADKpmn6AbwwPcfPo50AAAAAAElFTkSuQmCC";
class pr {
  constructor({
    ticker: e,
    viewport: a,
    store: s
  }) {
    this.ticker = e, this.pixiViewport = a.viewport, this.viewport = a, this.store = s, this.backdrop = null, this.glow = null, this.glow2 = null, this.image = null
  }
  async add(e) {
    (this.glow || this.glow2 || this.backdrop || this.image) && this.destroy(), this.addBackdrop(), await this.addGlow(e), await this.addRewardImage(e), this.ticker.add(this.glowAnim.bind(this)), this.pixiViewport.animate({
      scale: 60,
      time: 400,
      position: {
        x: e.x + .5,
        y: e.y + .5
      },
      callbackOnComplete: () => {
        this.viewport.lock()
      }
    })
  }
  addBackdrop() {
    this.backdrop = new PIXI.Graphics, this.backdrop.beginFill(0, .8), this.backdrop.drawRect(0, 0, u.width, u.height), this.backdrop.endFill(), this.backdrop.zIndex = 20, this.backdrop.interactive = !0, setTimeout(() => {
      this.backdrop.on("pointerup", e => {
        const a = this.store.dispatch;
        a(kn()), this.viewport.unlock(), this.destroy()
      })
    }, 2e3), this.pixiViewport.addChild(this.backdrop)
  }
  async addGlow(e) {
    PIXI.Loader.shared.resources.rewardGlow || await this.loadResource("rewardGlow", Ar);
    const s = (i = 1) => {
      const n = new PIXI.Sprite(PIXI.Loader.shared.resources.rewardGlow.texture);
      return n.zIndex = 21, n.width = 10, n.height = 10, n.x = e.x + .5, n.y = e.y + .5, n.alpha = .5, n.anchor.set(.5), n
    };
    this.glow = s(), this.pixiViewport.addChild(this.glow), this.glow2 = s(-1), this.pixiViewport.addChild(this.glow2)
  }
  glowAnim(e) {
    this.glow.rotation += .05 * e, this.glow2.rotation += .05 * e * -1
  }
  async addRewardImage(e) {
    PIXI.Loader.shared.resources.tnt || await this.loadResource("tnt", dr), this.image = new PIXI.Sprite(PIXI.Loader.shared.resources.tnt.texture), this.image.zIndex = 21, this.image.width = 1, this.image.height = 1, this.image.x = e.x, this.image.y = e.y, this.pixiViewport.addChild(this.image)
  }
  async loadResource(e, a) {
    return new Promise((s, i) => {
      const n = PIXI.Loader.shared;
      n.add(e, a), n.load((r, c) => {
        s(c)
      }), n.onError.add(r => {
        i(r)
      })
    })
  }
  destroy() {
    this.glow !== null && (this.ticker.remove(this.glowAnim.bind(this)), this.glow.destroy(), this.glow = null), this.glow2 !== null && (this.ticker.remove(this.glowAnim.bind(this)), this.glow2.destroy(), this.glow2 = null), this.backdrop !== null && (this.backdrop.destroy(), this.backdrop = null), this.image !== null && (this.image.destroy(), this.image = null)
  }
}
class ur {
  constructor({
    app: e,
    viewport: a,
    store: s,
    mainImage: i
  }) {
    re(this, "isCoordsInExtraRewardZone", ({
      coords: e,
      x1: a,
      y1: s,
      imageSize: i
    }) => {
      const {
        x: n,
        y: r
      } = e, c = a + i, l = s + i;
      return n >= a && n < c && r >= s && r < l
    });
    this.app = e, this.pixiViewport = a.viewport, this.store = s, this.mainImage = i, this.items = [], this.opacity = 70, this.init()
  }
  async init() {
    for (let e = 0; e < this.items.length; e++) {
      const a = this.items[e],
        s = await this.mainImage.loadImage(a.url);
      a.imageData = this.mainImage.getImageData(s, a.imageSize, a.imageSize), this.createTexture(a), this.createSprite(a)
    }
  }
  async add(e) {
    const a = {
        ...e
      },
      s = await this.mainImage.loadImage(a.url);
    return a.imageData = this.mainImage.getImageData(s, a.imageSize, a.imageSize), this.createTexture(a), this.createSprite(a), this.items.push(a), Promise.resolve()
  }
  deleteTemplate(e) {
    this.items = this.items.filter(a => (a.id === e && this.pixiViewport.removeChild(a.sprite), a.id !== e))
  }
  createTexture(e) {
    e.texture = new PIXI.Texture.fromBuffer(e.imageData, e.imageSize, e.imageSize), e.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST
  }
  createSprite(e) {
    e.sprite = new PIXI.Sprite(e.texture), e.sprite.interactive = !1, e.sprite.zIndex = 5, e.sprite.alpha = this.opacity / 100, e.sprite.visible = !1, e.sprite.width = e.imageSize, e.sprite.height = e.imageSize, e.sprite.x = e.x, e.sprite.y = e.y, this.pixiViewport.addChild(e.sprite)
  }
  getRepaintRewardType({
    coords: e,
    repaintColor: a
  }) {
    const i = this.store.getState().tournament.activePeriod;
    if (!(i && i.ID && i.PeriodType === "round")) return oe.neutral;
    for (let n = 0; n < this.items.length; n++) {
      const r = this.items[n];
      if (r.type === U.my || !this.isCoordsInExtraRewardZone({
          coords: e,
          x1: r.x,
          y1: r.y,
          imageSize: r.imageSize
        })) continue;
      const c = ee({
          x: e.x - r.x,
          y: e.y - r.y,
          width: r.imageSize
        }),
        l = Le(r.imageData[c], r.imageData[c + 1], r.imageData[c + 2]),
        h = r.imageData[c + 3],
        w = this.mainImage.getPixelColor({
          coords: e
        });
      if (h !== 0 && w !== a) {
        if (w === l && a !== l) return oe.fail;
        if (w !== l && a === l) return oe.success
      }
    }
    return oe.neutral
  }
  show(e) {
    this.items.forEach(a => {
      a.sprite !== null && a.id === e && (a.sprite.visible = !0)
    })
  }
  hide() {
    this.items.forEach(e => {
      e.sprite !== null && (e.sprite.visible = !1)
    })
  }
  setOpacity(e) {
    this.opacity = e, this.items.forEach(a => {
      a.sprite !== null && (a.sprite.alpha = this.opacity / 100)
    })
  }
  changeTemplateCoords({
    templateId: e,
    x: a,
    y: s
  }) {
    this.items.forEach(i => {
      i.id === e && (i.sprite.x = a, i.sprite.y = s)
    })
  }
}
class mr {
  constructor({
    app: e,
    viewport: a,
    store: s,
    ticker: i,
    readyCallback: n
  }) {
    re(this, "getClickCoords", e => {
      const a = this.sprite.toLocal(e.data.global);
      return {
        x: Math.floor(a.x),
        y: Math.floor(a.y)
      }
    });
    this.app = e, this.ticker = i, this.viewport = a, this.store = s, this.pixiViewport = a.viewport, this.selectedPixel = new gi({
      viewport: a
    }), this.template = new Qn({
      app: e,
      viewport: a,
      store: s
    }), this.worldTemplate = new On({
      app: e,
      viewport: a,
      store: s,
      mainImage: this
    }), this.tournamentTemplates = new ur({
      app: e,
      viewport: a,
      store: s,
      mainImage: this
    }), this.reward = new pr({
      ticker: i,
      viewport: a,
      store: s
    }), this.bomb = new Bi({
      app: e,
      viewport: a,
      mainImage: this
    }), this.pumpkin = new or({
      app: e,
      viewport: a,
      mainImage: this
    }), this.imageData = null, this.texture = null, this.sprite = null, this.timeout = null, this.lastPointerUpTs = Date.now(), this.lastPaintCoords = {
      x: -1,
      y: -1
    }, this.initImage(), n(s), this.initEvents(), this.store.dispatch(B({
      command: b.start
    })), !Gt() && this.loadAllChunks().then(() => {
      const r = s.getState().main.startParams.coords;
      r && (f.viewport.viewport.animate({
        scale: 60,
        time: 400,
        position: {
          x: r.x + .5,
          y: r.y + .5
        }
      }), this.selectedPixel.draw(r), this.store.dispatch(ze(r)))
    })
  }
  initImage() {
    this.imageData = new Uint8Array(u.width * u.height * 4);
    const e = PIXI.Texture.fromBuffer(this.imageData, u.width, u.height, {
      format: PIXI.FORMATS.RGBA,
      type: PIXI.TYPES.UNSIGNED_BYTE,
      width: u.width,
      height: u.height
    });
    e.scaleMode = PIXI.SCALE_MODES.NEAREST, this.texture = e, this.sprite = PIXI.Sprite.from(e), this.sprite.interactive = !0, this.pixiViewport.addChild(this.sprite), this.pixiViewport.fitHeight(), this.pixiViewport.moveCenter(this.pixiViewport.worldWidth / 2, this.pixiViewport.worldHeight / 2)
  }
  initEvents() {
    this.sprite.on("pointerdown", e => {
      this.timeout !== null && (clearTimeout(this.timeout), this.timeout = null), this.wasMoved = !1
    }), this.pixiViewport.on("moved", () => {
      this.wasMoved = !0
    }), this.sprite.on("pointerup", e => {
      const a = this.store.getState(),
        s = this.getClickCoords(e),
        i = a.main.fastMode,
        n = a.main.currentFastType;
      if (this.isCoordsEqual(this.lastPaintCoords, s), this.wasMoved) return;
      const r = Date.now();
      if (r - this.lastPointerUpTs < 200 && !i && !n && (this.pixiViewport.scaled > 50 ? f.viewport.viewport.animate({
          scale: this.pixiViewport.findFitHeight(u.height),
          time: 400
        }) : f.viewport.viewport.animate({
          scale: 60,
          time: 400,
          position: {
            x: s.x + .5,
            y: s.y + .5
          }
        }), e.data.originalEvent.preventDefault()), this.lastPointerUpTs = r, i) {
        const c = e.data.originalEvent.touches;
        if (c && c.length > 0) return;
        const l = {
          x: e.data.global.x,
          y: e.data.global.y
        };
        this.lastPaintCoords = s, Fn({
          charges: a.mining.charges,
          dispatch: this.store.dispatch,
          flyCoords: l,
          paintCoords: s,
          activeColor: a.color.active,
          state: this.store.getState()
        })
      } else n === "bomb" ? Vn({
        coords: s,
        dispatch: this.store.dispatch,
        repaintReward: tt(a),
        state: this.store.getState()
      }) : n === "paintcan" ? Ln({
        coords: s,
        dispatch: this.store.dispatch,
        repaintReward: tt(a),
        activeColor: a.color.active,
        state: this.store.getState()
      }) : n === "pumpkin" ? lr({
        coords: s,
        dispatch: this.store.dispatch,
        repaintReward: tt(a),
        state: this.store.getState()
      }) : this.timeout = setTimeout(() => {
        this.selectedPixel.draw(s), this.store.dispatch(ze(s))
      }, 0)
    })
  }
  async loadAllChunks() {
    const e = await this.loadImage(za),
      a = this.getImageData(e, u.width, u.height);
    for (let s = 0; s < a.length; s += 4) this.imageData[s + 3] === 0 && (this.imageData[s] = a[s], this.imageData[s + 1] = a[s + 1], this.imageData[s + 2] = a[s + 2], this.imageData[s + 3] = a[s + 3]);
    this.updateTexture(), this.store.dispatch(B({
      command: b.finish
    }))
  }
  async loadFromCentrifuge(e) {
    const a = performance.now(),
      s = this.getImageData(e, u.width, u.height);
    for (let i = 0; i < s.length; i += 4) this.imageData[i + 3] === 0 && (this.imageData[i] = s[i], this.imageData[i + 1] = s[i + 1], this.imageData[i + 2] = s[i + 2], this.imageData[i + 3] = s[i + 3]);
    this.updateTexture(), this.store.dispatch(B({
      command: b.finish
    })), console.log(performance.now() - a)
  }
  async loadChunk({
    chunkIndex: e
  }) {
    const a = u.chunkOrder[e],
      s = await this.loadImage(`${St}image/block?block_id=${a}`),
      i = this.getImageData(s, u.chunkSize, u.chunkSize),
      n = st({
        index: a - 1,
        width: 4,
        blockSize: 1
      });
    for (let r = 0; r < i.length; r += 4) {
      const c = st({
          index: r,
          width: u.chunkSize
        }),
        l = ee({
          x: c.x + n.x * u.chunkSize,
          y: c.y + n.y * u.chunkSize,
          width: u.width
        });
      this.imageData[l] = i[r], this.imageData[l + 1] = i[r + 1], this.imageData[l + 2] = i[r + 2], this.imageData[l + 3] = i[r + 3]
    }
    this.updateTexture(), e < 15 ? await this.loadChunk({
      chunkIndex: e + 1
    }) : this.store.dispatch(B({
      command: b.finish
    }))
  }
  updateTexture() {
    this.sprite.texture.update()
  }
  paintPixels(e) {
    for (const [a, s] of Object.entries(e)) this.paintPixel({
      id: a,
      color: Z(s)
    });
    this.updateTexture()
  }
  paintPixelsFromCentrifuge(e) {
    Object.keys(e).forEach(a => {
      e[a].forEach(i => {
        a !== "#171F2A" && this.paintPixel({
          id: i,
          color: Z(a)
        })
      })
    }), this.updateTexture()
  }
  paintSquare({
    x: e,
    y: a,
    size: s,
    colors: i
  }) {
    for (let n = 0; n < i.length; n++) {
      const r = st({
          index: n,
          width: s,
          blockSize: 1
        }),
        c = {
          x: e + r.x,
          y: a + r.y
        };
      if (c.x < 0 || c.y < 0 || c.x > u.width || c.y > u.height) continue;
      const l = ee({
          x: c.x,
          y: c.y,
          width: u.width
        }),
        {
          r: h,
          g: w,
          b: y
        } = Z(i[n]);
      this.imageData[l] = h, this.imageData[l + 1] = w, this.imageData[l + 2] = y, this.imageData[l + 3] = 255
    }
    this.updateTexture()
  }
  paintPixel({
    id: e,
    color: a
  }) {
    const i = (Number(e) - 1) * 4;
    this.imageData[i] = a.r, this.imageData[i + 1] = a.g, this.imageData[i + 2] = a.b, this.imageData[i + 3] = 255
  }
  getPixelColor({
    id: e,
    coords: a
  }) {
    let s = 0;
    a ? s = O(a) : s = Number(e);
    const i = (s - 1) * 4,
      n = this.imageData[i],
      r = this.imageData[i + 1],
      c = this.imageData[i + 2];
    return Le(n, r, c)
  }
  loadImage(e) {
    return new Promise(async a => {
      let s = 0,
        i = 2e3;
      const n = async () => {
        const r = new Image,
          l = await (await fetch(e, {
            method: "GET"
          })).blob(),
          h = URL.createObjectURL(l);
        r.src = h, r.onload = () => {
          a(r)
        }, r.onerror = w => {
          s += 1, s < 5 && setTimeout(() => {
            n()
          }, i * s)
        }
      };
      await n()
    })
  }
  getImageData(e, a, s) {
    const i = document.createElement("canvas");
    i.width = a, i.height = s;
    const n = i.getContext("2d");
    return n.drawImage(e, 0, 0, a, s), n.getImageData(0, 0, a, s).data
  }
  isCoordsEqual(e, a) {
    return e.x === a.x && e.y === a.y
  }
  getImageBlob() {
    return new Blob([this.imageData], {
      type: "image/png"
    })
  }
  convertSpriteToImage(e) {
    const a = new PIXI.Renderer({
        width: u.width,
        height: u.height
      }),
      s = PIXI.RenderTexture.create({
        width: u.width,
        height: u.height
      });
    a.render(this.sprite, s), a.view.toBlob(n => {
      e(n), a.destroy(!0)
    }, "image/png")
  }
  pixanosRepaint(e, a, s, i) {
    const n = y => {
        let x = 1664525,
          V = 1013904223,
          Pt = 4294967296,
          _e = y >>> 0;
        return function() {
          return _e = (x * _e + V) % Pt, _e / Pt
        }
      },
      r = a * a,
      c = Math.floor(r * s),
      l = n(e),
      h = Array.from(Array(c));
    for (let y = 0; y < c; y++) h[y] = y + 1;
    for (let y = c + 1; y <= r; y++) {
      const x = Math.floor(l() * y) + 1;
      x <= c && (h[x - 1] = y)
    }
    const w = Z(i);
    for (let y = 0; y < h.length; y++) {
      const x = h[y];
      if (y < 20) {
        const V = ht(x);
        console.log(`i: ${y}, id: ${x}, x: ${V.x}, y: ${V.y}`)
      }
      this.paintPixel({
        id: x,
        color: w
      })
    }
    this.updateTexture()
  }
}
class gr {
  constructor({
    viewport: e
  }) {
    this.viewport = e, this.pixiViewport = e.viewport, this.sprite = null
  }
  draw({
    arr: e
  }) {
    this.destroy();
    let a = new Uint8Array(u.width * u.height * 4);
    for (let i = 0; i < a.length; i += 32) {
      const n = e[Math.round(i / 32)];
      for (let r = 0; r < 32; r += 4) {
        const c = Math.round(r / 4);
        a[i + r] = n & 1 << c ? 0 : 23, a[i + r + 1] = n & 1 << c ? 0 : 31, a[i + r + 2] = n & 1 << c ? 0 : 42, a[i + r + 3] = n & 1 << c ? 0 : 255
      }
    }
    const s = PIXI.Texture.fromBuffer(a, u.width, u.height, {
      format: PIXI.FORMATS.RGBA,
      type: PIXI.TYPES.UNSIGNED_BYTE,
      width: u.width,
      height: u.height
    });
    s.scaleMode = PIXI.SCALE_MODES.NEAREST, this.sprite = PIXI.Sprite.from(s), this.sprite.eventMode = "none", this.sprite.zIndex = 4e3, this.pixiViewport.addChild(this.sprite)
  }
  destroy() {
    this.sprite !== null && (this.sprite.destroy(), this.sprite = null)
  }
}
class hr {
  constructor({
    app: e,
    store: a
  }) {
    this.app = e, this.store = a, this.viewport = new window.pixi_viewport.Viewport({
      worldWidth: u.width,
      worldHeight: u.height,
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
      interaction: e.renderer.plugins.interaction,
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
const fr = () => localStorage.getItem("canvasFps") ? Number(localStorage.getItem("canvasFps")) : 60;
class yr {
  constructor({
    app: e
  }) {
    this.app = e, this.lastTime = Date.now(), this.lastRenderTime = Date.now(), this.fps = fr(), this.callbacks = [], this.render()
  }
  render(e = 0) {
    const a = Date.now(),
      s = a - this.lastTime;
    if (this.lastTime = a, a - this.lastRenderTime > 1e3 / this.fps) {
      const i = e / this.fps;
      this.app.render(), this.callbacks.forEach(n => {
        n(i)
      }), this.lastRenderTime = a
    }
    requestAnimationFrame(() => this.render(s))
  }
  add(e) {
    this.callbacks.push(e)
  }
  remove(e) {
    this.callbacks = this.callbacks.filter(a => a.toString() !== e.toString())
  }
  setFps(e) {
    this.fps = Math.min(60, Math.max(10, e))
  }
}
let wt;
const wr = t => {
  wt = t
};
class Cr {
  constructor({
    readyCallback: e
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
    }), this.app.ticker.stop(), this.ticker = new yr({
      app: this.app
    }), this.viewport = new hr({
      app: this.app,
      store: wt
    }), this.mainImage = new mr({
      app: this.app,
      viewport: this.viewport,
      store: wt,
      ticker: this.ticker,
      readyCallback: e
    }), this.mask = new gr({
      viewport: this.viewport
    })
  }
}
let f, Qt = !1;

function Sr() {
  f = new Cr({
    readyCallback: async t => {
      var a, s, i;
      const e = t.getState();
      e.device.deviceType, window.Telegram.WebApp.platform, ((a = e.user.user) == null ? void 0 : a.websocketToken) === "" && t.dispatch(Fs(!0)), Li((s = e.user.user) == null ? void 0 : s.websocketToken, (i = e.user.user) == null ? void 0 : i.id)
    }
  })
}
C.memo(() => (C.useEffect(() => {
  Qt || (Sr(), Qt = !0)
}, []), Ta.createPortal(A.jsx("canvas", {
  id: "canvasHolder",
  className: `${Ai.main_canvas}`
}), document.body)), () => !0);
const xr = "_layout_1ulm2_1",
  Tr = "_container_1ulm2_11",
  Ir = "_stars_1ulm2_17",
  Er = "_animStar_1ulm2_1",
  le = {
    layout: xr,
    container: Tr,
    stars: Ir,
    animStar: Er
  },
  br = () => {
    const [t, e] = C.useState(window.innerWidth);

    function a(s) {
      e(s.target.innerWidth)
    }
    return C.useEffect(() => (window.addEventListener("resize", a), () => {
      window.removeEventListener("resize", a)
    }), []), t
  },
  vr = [{
    count: 50,
    speed: 50
  }, {
    count: 50,
    speed: 30
  }, {
    count: 50,
    speed: 90
  }],
  Pr = t => {
    const e = window.innerWidth,
      a = window.innerHeight * 2;
    return Array.from(Array(t)).reduce(s => {
      const i = g(0, e),
        n = g(0, a);
      return s + `${i}px ${n}px #fff, `
    }, "").replace(/,(\s+)?$/, "")
  };
C.memo(() => (br(), A.jsx("div", {
  className: le.layout,
  children: A.jsx("div", {
    className: le.container,
    children: vr.map((t, e) => {
      const a = Pr(t.count);
      return A.jsx("div", {
        className: le.stars,
        style: {
          animation: `${le.animStar} ${t.speed}s linear infinite`,
          boxShadow: a
        }
      }, e)
    })
  })
})), () => !1);
const Dr = "_layout_20dlh_1",
  kr = "_container_20dlh_10",
  Br = "_star_20dlh_14",
  Rr = "_star_animation_20dlh_21",
  Ur = "_move_20dlh_1",
  je = {
    layout: Dr,
    container: kr,
    star: Br,
    star_animation: Rr,
    move: Ur
  },
  Fr = "data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3clinearGradient%20id='grad1'%20x1='0%25'%20y1='0%25'%20x2='0%25'%20y2='100%25'%3e%3cstop%20offset='0%25'%20style='stop-color:%23efce32;stop-opacity:1'%20/%3e%3c!--%20более%20светлый%20желтый%20--%3e%3cstop%20offset='100%25'%20style='stop-color:%23f7752e;stop-opacity:1'%20/%3e%3c!--%20более%20темный%20желтый%20--%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M5%200C2.23858%200%200%202.23858%200%205V27C0%2029.7614%202.23858%2032%205%2032H27C29.7614%2032%2032%2029.7614%2032%2027V5C32%202.23858%2029.7614%200%2027%200H5ZM21.4261%2010.5739H10.5739V21.4261H21.4261V10.5739Z'%20fill='url(%23grad1)'/%3e%3c/svg%3e",
  Qr = ({
    size: t,
    style: e = {},
    animation: a = !1
  }) => A.jsx("img", {
    alt: "image",
    src: Fr,
    className: a ? je.star_animation : je.star,
    style: {
      width: t,
      height: t,
      ...e
    }
  });
C.memo(() => {
  const t = Array.from(Array(30));
  return A.jsx("div", {
    className: je.layout,
    children: A.jsx("div", {
      className: je.container,
      children: t.map((e, a) => {
        const s = g(2, 6);
        return A.jsx(Qr, {
          size: s,
          animation: !0,
          style: {
            animationDelay: `-${a*300}ms`,
            transform: `translate(${g(-80,-170)*(a%2===1?1:-1)}px, ${g(-100,100)}px)`
          }
        }, a)
      })
    })
  })
}, () => !1);
const Or = "_buttons_container_rjvnl_1",
  Mr = "_group_rjvnl_8",
  Vr = "_left_rjvnl_15",
  Nr = "_middle_rjvnl_21",
  Lr = "_right_rjvnl_29",
  zr = "_number_rjvnl_36",
  jr = "_button_rjvnl_1",
  Gr = "_ratings_button_rjvnl_55",
  Hr = "_stars_button_rjvnl_62",
  Jr = "_shop_button_rjvnl_70",
  Xr = "_burger_button_rjvnl_79",
  Yr = "_relative_button_rjvnl_89",
  Kr = "_telegram_button_rjvnl_116",
  qr = "_button_img_rjvnl_124",
  Wr = "_avatar_img_rjvnl_129",
  Zr = "_open_menu_button_rjvnl_134",
  _r = "_open_menu_button_image_rjvnl_144",
  $r = "_my_pixels_amount_rjvnl_149",
  eo = "_header_content_rjvnl_154",
  E = {
    buttons_container: Or,
    group: Mr,
    left: Vr,
    middle: Nr,
    right: Lr,
    number: zr,
    button: jr,
    ratings_button: Gr,
    stars_button: Hr,
    shop_button: Jr,
    burger_button: Xr,
    relative_button: Yr,
    telegram_button: Kr,
    button_img: qr,
    avatar_img: Wr,
    open_menu_button: Zr,
    open_menu_button_image: _r,
    my_pixels_amount: $r,
    header_content: eo
  },
  to = () => R(ie) ? null : A.jsxs("button", {
    className: `${E.button} ${E.telegram_button}`,
    onPointerUp: () => {
      zt("https://t.me/notpixel")
    },
    children: [A.jsx("img", {
      alt: "tg_logo",
      src: Ls
    }), "Go to app for paint"]
  }),
  Ze = t => {
    const e = Ua(),
      a = Fa();
    return () => {
      e.pathname === t ? a.push("/") : a.push(t)
    }
  },
  ao = () => {
    const t = Ze("/claiming"),
      e = R(s => s.user.pixelCoins);
    return R(ie) ? A.jsxs("button", {
      className: `${E.button}`,
      onPointerUp: t,
      children: [A.jsx(_t, {
        size: 16,
        className: E.button_img
      }), A.jsx("div", {
        style: {
          transform: "translateY(1px)"
        },
        children: A.jsx(on, {
          number: Math.max(Number(e.toFixed(0)), 0)
        })
      })]
    }) : null
  },
  so = "data:image/svg+xml,%3c?xml%20version='1.0'%20?%3e%3csvg%20viewBox='0%200%2032%2032'%20xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:none;}%3c/style%3e%3c/defs%3e%3ctitle/%3e%3cg%20fill='%23e0dd8e'%20data-name='Layer%202'%20id='Layer_2'%3e%3cpath%20d='M24,29H8a3,3,0,0,1-3-3V16a1,1,0,0,1,2,0V26a1,1,0,0,0,1,1H24a1,1,0,0,0,1-1V16a1,1,0,0,1,2,0V26A3,3,0,0,1,24,29Z'/%3e%3cpath%20d='M15,29H10a1,1,0,0,1-1-1V22a3,3,0,0,1,3-3h1a3,3,0,0,1,3,3v6A1,1,0,0,1,15,29Zm-4-2h3V22a1,1,0,0,0-1-1H12a1,1,0,0,0-1,1Z'/%3e%3cpath%20d='M25,17a4,4,0,0,1-4-4,1,1,0,0,1,2,0,2,2,0,0,0,4,0v-.76L24.38,7H7.62L5,12.24V13a2,2,0,0,0,4,0,1,1,0,0,1,2,0,4,4,0,0,1-8,0V12a1,1,0,0,1,.11-.45l3-6A1,1,0,0,1,7,5H25a1,1,0,0,1,.89.55l3,6A1,1,0,0,1,29,12v1A4,4,0,0,1,25,17Z'/%3e%3cpath%20d='M13,17a4,4,0,0,1-4-4,1,1,0,0,1,2,0,2,2,0,0,0,4,0,1,1,0,0,1,2,0A4,4,0,0,1,13,17Z'/%3e%3cpath%20d='M19,17a4,4,0,0,1-4-4,1,1,0,0,1,2,0,2,2,0,0,0,4,0,1,1,0,0,1,2,0A4,4,0,0,1,19,17Z'/%3e%3cpath%20d='M22,22H19a1,1,0,0,1,0-2h3a1,1,0,0,1,0,2Z'/%3e%3c/g%3e%3cg%20id='frame'%3e%3crect%20class='cls-1'%20height='32'%20width='32'/%3e%3c/g%3e%3c/svg%3e",
  io = () => {
    const t = Ze("/stars");
    return R(ie) ? A.jsx("button", {
      className: `${E.shop_button}`,
      onPointerUp: t,
      children: A.jsx("img", {
        alt: "icon",
        src: so,
        style: {
          width: 24,
          height: 24
        }
      })
    }) : null
  },
  no = () => {
    const t = Ze("/invite-frens");
    return R(ie) ? A.jsx("button", {
      className: `${E.stars_button}`,
      onPointerUp: t,
      children: A.jsx(Je, {
        size: 20,
        children: ""
      })
    }) : null
  },
  ro = () => {
    const t = va(),
      e = R(un),
      a = () => {
        if (e) {
          t(Ut(!1));
          return
        }
        t(Ut(!0))
      };
    return A.jsx("button", {
      className: E.burger_button,
      onPointerUp: a,
      children: A.jsx(Je, {
        size: 28,
        children: ""
      })
    })
  },
  oo = () => {
    const t = Ze("/daily");
    return R(ie) ? A.jsx("button", {
      className: `${E.stars_button}`,
      onPointerUp: t,
      children: A.jsx(Je, {
        size: 20,
        children: ""
      })
    }) : null
  };
Vt.memo(() => A.jsxs("div", {
  className: E.buttons_container,
  children: [A.jsxs("div", {
    className: `${E.group} ${E.left}`,
    children: [A.jsx(ro, {}), A.jsx(no, {})]
  }), A.jsx("div", {
    className: `${E.group} ${E.middle}`,
    children: A.jsx(ao, {})
  }), A.jsxs("div", {
    className: `${E.group} ${E.right}`,
    children: [A.jsx(oo, {}), A.jsx(to, {}), A.jsx(io, {})]
  })]
}));
const co = "_layout_1at34_1",
  lo = "_container_1at34_10",
  Ao = "_item_1at34_14",
  mt = {
    layout: co,
    container: lo,
    item: Ao
  },
  po = 8,
  uo = 16,
  mo = 500,
  Ca = 800,
  Ot = window.innerWidth,
  Mt = 100,
  go = () => Array.from(Array(100)).map(() => {
    const t = g(po, uo),
      e = `hsl(${g(0,360)} , 70%, 50%)`,
      a = g(mo, Ca),
      s = g(-Ot, Ot),
      i = g(-Mt, Mt);
    return {
      size: t,
      color: e,
      speed: a,
      x: s,
      y: i,
      transform: !1,
      opacity: !1
    }
  });
C.memo(({
  runParticle: t,
  setRunParticle: e
}) => {
  const [a, s] = C.useState(go()), [i, n] = C.useState(!1);
  return C.useEffect(() => {
    t && setTimeout(() => {
      n(!0), setTimeout(() => {
        e(!1), n(!1)
      }, Ca)
    }, 200)
  }, [t]), A.jsx("div", {
    className: mt.layout,
    style: {
      visibility: t ? "visible" : "hidden"
    },
    children: A.jsx("div", {
      className: mt.container,
      children: a.map((r, c) => A.jsx("div", {
        className: mt.item,
        style: {
          width: r.size,
          height: r.size,
          backgroundColor: r.color,
          transition: t ? `all ${r.speed}ms ease` : "",
          transform: t ? `translate(${r.x}px, ${r.y}px)` : "translate(0px, 0px)",
          opacity: i ? 0 : 1
        }
      }, c))
    })
  })
});
const ho = "_layout_a9x11_1",
  fo = "_container_a9x11_10",
  yo = "_star_a9x11_14",
  wo = "_move_a9x11_1",
  gt = {
    layout: ho,
    container: fo,
    star: yo,
    move: wo
  };
C.memo(() => {
  const t = Array.from(Array(30));
  return A.jsx("div", {
    className: gt.layout,
    children: A.jsx("div", {
      className: gt.container,
      children: t.map((e, a) => {
        const s = g(8, 12);
        return A.jsx(_t, {
          size: s,
          className: gt.star,
          style: {
            animationDelay: `-${a*300}ms`,
            transform: `translate(${g(-80,-170)*(a%2===1?1:-1)}px, ${g(-100,100)}px)`
          }
        }, a)
      })
    })
  })
}, () => !1);
window.Telegram.WebApp.DeviceOrientation;
const Co = {},
  So = {},
  xo = 1,
  To = 10,
  Io = () => {
    const t = s => {
        const i = g(xo, To);
        return s[i] ? t(s) : (s[i] = !0, i)
      },
      e = t(Co),
      a = t(So);
    return {
      x: e,
      y: a
    }
  };
(() => {
  const t = [];
  for (let e = 0; e < 5; e++) {
    const a = e + 1,
      s = `hsl(${g(0,360)} , 70%, 50%)`;
    t.push({
      number: a,
      color: s,
      ...Io()
    })
  }
  return t
})();
const Eo = "_game_container_1afil_1",
  bo = "_title_1afil_5",
  vo = "_text_1afil_10",
  Po = "_items_container_1afil_15",
  Do = "_item_1afil_15",
  ko = {
    game_container: Eo,
    title: bo,
    text: vo,
    items_container: Po,
    item: Do,
    "slide-across": "_slide-across_1afil_1"
  },
  Bo = {},
  Ro = {},
  Uo = 1,
  Fo = 10,
  Qo = () => {
    const t = s => {
        const i = g(Uo, Fo);
        return s[i] ? t(s) : (s[i] = !0, i)
      },
      e = t(Bo),
      a = t(Ro);
    return {
      x: e,
      y: a
    }
  };
(() => {
  const t = [];
  for (let e = 0; e < 4; e++) {
    const a = e + 1,
      s = `hsl(${g(0,360)} , 70%, 50%)`;
    t.push({
      number: a,
      color: s,
      animation: `${ko["slide-across"]} ${g(5,12)}s linear infinite`,
      ...Qo()
    })
  }
  return t
})();
const Oo = "_layout_ieygs_1",
  Mo = "_container_ieygs_8",
  Vo = "_logo_container_ieygs_17",
  No = "_logo_ieygs_17",
  Lo = "_animate_ieygs_1",
  zo = "_center_ieygs_37",
  jo = "_title_ieygs_51",
  Go = "_description_ieygs_58",
  Ho = "_button_container_ieygs_63",
  Jo = "_button_ieygs_63",
  Xo = "_b_ieygs_63",
  Q = {
    layout: Oo,
    container: Mo,
    logo_container: Vo,
    logo: No,
    animate: Lo,
    center: zo,
    title: jo,
    description: Go,
    button_container: Ho,
    button: Jo,
    b: Xo
  },
  Yo = () => {
    const t = R(ln);
    return A.jsx("div", {
      className: Q.layout,
      children: A.jsxs("div", {
        className: Q.container,
        children: [A.jsx("div", {
          className: Q.logo_container,
          children: A.jsx("div", {
            className: Q.logo,
            children: A.jsx("div", {
              className: Q.center
            })
          })
        }), A.jsx("div", {
          className: Q.button_container,
          children: A.jsx("button", {
            className: Q.button,
            onPointerUp: () => {
              t ? zt("https://t.me/notpixel_channel") : Ga("https://t.me/notpixel_channel")
            },
            children: "Not Pixel Channel"
          })
        })]
      })
    })
  },
  Ko = window.Telegram.WebApp.Accelerometer,
  qo = window.Telegram.WebApp.DeviceOrientation,
  Wo = window.Telegram.WebApp.Gyroscope;
new Promise(t => {
  Ko.start(null, e => t(e))
});
new Promise(t => {
  qo.start(null, e => t(e))
});
new Promise(t => {
  Wo.start(null, e => t(e))
});

function Zo() {
  return console.log("version:", window.Telegram.WebApp), A.jsx(Yo, {})
}
const _o = {
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
  $o = {
    translation: _o
  },
  ec = {
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
  tc = {
    translation: ec
  };
Oa.use(Ma).init({
  resources: {
    en: $o,
    ru: tc
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
wr(We);
ja(We);
Ni(We);
const ac = Ia.createRoot(document.getElementById("root"));
ac.render(A.jsx(Vt.StrictMode, {
  children: A.jsx(Pa, {
    store: We,
    children: A.jsx(Qa, {
      children: A.jsx(Da, {
        manifestUrl: "https://app.notpx.app/tonconnect-manifest.json",
        actionsConfiguration: {
          returnStrategy: "back",
          twaReturnUrl: "https://t.me/notpixel/app",
          modals: ["before"],
          notifications: ["before", "success", "error"]
        },
        language: "en",
        uiPreferences: {
          theme: ka.DARK
        },
        children: A.jsx(Zo, {})
      })
    })
  })
}));