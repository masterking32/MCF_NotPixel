var ac = Object.defineProperty;
var ic = (t, n, s) => n in t ? ac(t, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: s
}) : t[n] = s;
var Ln = (t, n, s) => ic(t, typeof n != "symbol" ? n + "" : n, s);
import {
  j as e,
  r as A,
  R as ae
} from "./react-DjWS3H3h.js";
import {
  r as nt,
  c as oc
} from "./react-dom-DCoj3sTC.js";
import {
  c as G,
  a as ge,
  b as Dn,
  d as qa,
  e as sn,
  i as _e,
  f as rc
} from "./@reduxjs-WPf4Nv7j.js";
import {
  a as cc
} from "./axios-BdInfei4.js";
import {
  u as c,
  a as g,
  s as lc,
  P as dc
} from "./react-redux-BljSBgeC.js";
import "./yaml-Dy-SgT9h.js";
import "./vite-plugin-node-polyfills-BVIVvkCX.js";
import {
  c as R
} from "./classnames-D-x1NdaJ.js";
import {
  u as kn,
  a as uc,
  b as Ac,
  c as qs,
  T as mc,
  d as pc
} from "./@tonconnect-C4go9-2N.js";
import {
  d as Ke
} from "./@ton-CABtnvlX.js";
import {
  u as Ds,
  e as ks,
  a as Rs
} from "./@react-spring-BiYD2lL6.js";
import {
  C as hc
} from "./centrifuge-B3TpHLNx.js";
import {
  d as gc
} from "./fflate-DRb3BoOD.js";
import {
  u as J,
  S as _c,
  a as ie,
  b as Ys
} from "./react-router-skDq-tWz.js";
import {
  c as en
} from "./chroma-js-CHvE9HB5.js";
import {
  m as Sn,
  A as Ya
} from "./framer-motion-BggZOsGS.js";
import {
  u as ze,
  T as ca,
  i as xc
} from "./react-i18next-DUbAQzaN.js";
import {
  l as Dt
} from "./react-range-COVt_hlT.js";
import {
  T as la
} from "./tonweb-BaiZR3hJ.js";
import {
  B as fc
} from "./react-router-dom-DSUFG-Qy.js";
import {
  i as vc
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
import "./use-sync-external-store-BIcyVYYg.js";
import "./tweetnacl-util-B9eApQKV.js";
import "./tweetnacl-DeYMGiLl.js";
import "./ethjs-unit-bvdJTi0B.js";
import "./number-to-bn-VwIxN61R.js";
import "./strip-hex-prefix-DJeEoz3i.js";
import "./is-hex-prefixed-Chswt-_p.js";
import "./ua-parser-js-9NRjnSWS.js";
import "./deepmerge-D9PnGD7j.js";
import "./symbol.inspect-CD8uWkLQ.js";
import "./jssha-Dj0pk0Xq.js";
import "./dataloader-7UOpijhF.js";
import "./zod-Dbq4cBMj.js";
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
const yc = "_stars_img_container_1wci0_1",
  wc = "_stars_img_1wci0_1",
  jc = "_scalebubble_1wci0_1",
  bc = "_squads_img_1wci0_17",
  Nc = "_title_container_1wci0_22",
  Ic = "_description_container_1wci0_28",
  Cc = "_description_1wci0_28",
  Pc = "_info_layout_1wci0_42",
  Sc = "_info_container_1wci0_52",
  Bc = "_info_row_1wci0_59",
  Tc = "_info_row_content_1wci0_65",
  Ec = "_info_row_sale_1wci0_84",
  Dc = "_not_active_1wci0_100",
  kc = "_selected_1wci0_105",
  Rc = "_row_icon_container_1wci0_110",
  Mc = "_row_icon_1wci0_110",
  Uc = "_row_title_1wci0_133",
  Oc = "_row_amount_1wci0_143",
  Qc = "_row_price_container_1wci0_156",
  Fc = "_main_info_channel_users_1wci0_166",
  pe = {
    stars_img_container: yc,
    stars_img: wc,
    scalebubble: jc,
    squads_img: bc,
    title_container: Nc,
    description_container: Ic,
    description: Cc,
    info_layout: Pc,
    info_container: Sc,
    info_row: Bc,
    info_row_content: Tc,
    info_row_sale: Ec,
    not_active: Dc,
    selected: kc,
    row_icon_container: Rc,
    row_icon: Mc,
    row_title: Uc,
    row_amount: Oc,
    row_price_container: Qc,
    main_info_channel_users: Fc
  },
  oo = Number(window.getComputedStyle(document.body).getPropertyValue("--header-height").replace("px", "")),
  p = {
    idle: "idle",
    pending: "pending",
    fulfilled: "fulfilled",
    rejected: "rejected"
  },
  B = {
    width: 1024,
    height: 1024,
    chunkSize: 750,
    chunkOrder: [6, 7, 11, 10, 9, 5, 1, 2, 3, 4, 8, 12, 16, 15, 14, 13]
  },
  da = {
    bomb: "Dynamite",
    pumpkin: "Pumpkin",
    pixanos: "Pixanos"
  },
  Gc = 24 * 60 * 60 * 1e3,
  Nt = "https://t.me/notpixel/app",
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
    joinSquad: "joinSquad",
    earnCoin: "earnCoin",
    premium: "premium",
    leagueBonusSilver: "leagueBonusSilver",
    leagueBonusGold: "leagueBonusGold",
    leagueBonusPlatinum: "leagueBonusPlatinum",
    "x:notpixel": "x:notpixel",
    "x:notcoin": "x:notcoin",
    "channel:notpixel_channel": "channel:notpixel_channel",
    "channel:notcoin": "channel:notcoin",
    nikolai: "nikolai",
    boostChannelNotPixel: "boostChanNotPixel",
    boostChannelNotCoin: "boostChannelNotCoin",
    makePixelAvatar: "makePixelAvatar",
    pixelInNickname: "pixelInNickname",
    boinkTask: "boinkTask",
    unitsWallet: "unitsWallet",
    utgardApp: "utgardApp",
    frogApp: "frogApp",
    tonPoker: "tonPoker",
    flappyBird: "flappyBird",
    hauntedSpace: "hauntedSpace",
    solitaireGame: "solitaireGame",
    tonDurakGame: "tonDurakGame",
    capsGame: "capsGame",
    nerdGame: "nerdGame",
    openLeague: "openLeague",
    spendStars: "spendStars",
    spendTokens: "spendTokens",
    sashaX: "sashaX",
    walletConnection: "walletConnection",
    walletVerification: "walletVerification",
    taskTypeCampaign1_74262: "taskTypeCampaign1_74262",
    taskTypeCampaign1_74264: "taskTypeCampaign1_74264",
    taskTypeCampaign2_74263: "taskTypeCampaign2_74263",
    taskTypeCampaign2_74265: "taskTypeCampaign2_74265",
    taskTypeCampaign4_74434: "taskTypeCampaign4_74434",
    taskTypeCampaign3_74388: "taskTypeCampaign3_74388"
  },
  he = {
    paintReward: "paintReward",
    reChargeSpeed: "reChargeSpeed",
    energyLimit: "energyLimit"
  },
  zc = ["/transaction/user/start", "/repaint/finish", "/transaction/user/complete", "/stars/shop/process", "/mining/status/claim", "/mining/claim", "/mining/status/error", "/repaint/complete", "/stars/shop/reject", "/squads/list/get", "/squads/list/update"],
  Te = {
    my: "my",
    referred: "referred",
    world: "world"
  },
  vt = "notgames_bot/squads",
  ro = "https://t.me/notpixel_42",
  Ea = "UQBv3exBKLmQcn2Fm6VlntAInW-je1YP4U59gJxaO62NCyMn",
  Je = {
    userFromPixelInfo: "userFromPixelInfo",
    squadFromData: "squadFromData",
    userFromRating: "userFromRating"
  },
  Lc = "7.7",
  ye = "unknown",
  Et = {
    3: "EQAvlWFDxGF2lXm67y4yzC17wYKD9A0guwPkMs1gOsM__NOT",
    4: "EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs",
    5: "EQCvxJy4eG8hyHBFsZ7eePxrRsUQSFE_jpptRAYBmcG_DOGS",
    6: "EQDv-yr41_CZ2urg2gfegVfa44PDPjIK9F-MilEDKDUIhlwZ",
    7: "EQD-cvR0Nz6XAyRBvbhz-abTrRC6sI5tvHvvpeQraV9UAAD7",
    8: "EQB4zZusHsbU2vVTPqjhlokIOoiZhEdCMT703CWEzhTOo__X",
    9: "EQCuPm01HldiduQ55xaBF_1kaW_WAUy5DHey8suqzU_MAJOR"
  },
  Hc = {
    friendsForTemplateCreation: 128
  },
  xt = {
    success: "success",
    neutral: "neutral",
    fail: "fail"
  },
  Xa = {
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
  Va = "https://notpx.app/api/v1/",
  qc = "https://image.notpx.app/api/v2/image";
let co;
const Yc = t => {
    co = t
  },
  C = cc.create({
    baseURL: Va
  });
C.interceptors.request.use(function(t) {
  var a;
  const s = (a = co.getState().auth) == null ? void 0 : a.authData;
  return s ? t.headers.Authorization = `initData ${s}` : delete t.headers.Authorization, t
});
C.interceptors.request.use(function(t) {
  return zc.includes(t.url), t
});
C.interceptors.response.use(t => t, t => Promise.reject(t));
class X {
  static async getPrices() {
    return C.get("/image/prices")
  }
  static async getPixelInfo({
    id: n,
    signal: s
  }) {
    return C.get(`/image/get/${n}`, {
      signal: s
    })
  }
  static async getRevShareInfo() {
    return C.get("/users/me/revshare")
  }
  static async getUser() {
    return C.get("/users/me")
  }
  static async getStats() {
    return C.get("/users/stats")
  }
  static async getMoreStats() {
    return C.get("/history/stats")
  }
  static async getUserPixels({
    offset: n,
    limit: s
  }) {
    return C.get(`/users/mypixels?offset=${n}&limit=${s}`)
  }
  static async getUserPixelsSold({
    offset: n,
    limit: s
  }) {
    return C.get(`/users/mypixels/sold?offset=${n}&limit=${s}`)
  }
  static async getUserPixelsCount() {
    return C.get("/users/mypixels/count")
  }
  static async getPriceMask({
    price: n
  }) {
    let s = n === null ? "" : `/${n}`;
    return C.get(`/image/mask${s}`, {
      responseType: "arraybuffer",
      decompress: !0
    })
  }
  static async startRepaint({
    pixelId: n,
    newColor: s
  }) {
    return C.post("/repaint/start", {
      pixelId: n,
      newColor: s
    })
  }
  static async getHistory({
    offset: n,
    limit: s
  }) {
    return C.get(`/history/all?offset=${n}&limit=${s}`)
  }
  static async getPixanosRating() {
    return C.get("/ratings/pixanos")
  }
  static async buy({
    type: n,
    qty: s,
    pixanosColor: a
  }) {
    return C.post("/buy/stars", {
      type: n,
      qty: s,
      pixanosColor: a
    })
  }
  static async getProducts() {
    return C.get("/buy/list")
  }
  static async useProduct({
    pixelId: n,
    productId: s,
    color: a
  }) {
    return C.post("/repaint/special", {
      pixelId: n,
      type: s,
      color: a
    })
  }
  static async startTransaction({
    buyerWallet: n
  }) {
    return C.post("/transactions/start", {
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
    return C.post("/transactions/start", {
      buyerWallet: n,
      goodId: s,
      daily: a,
      currencyId: i,
      quantity: o,
      pixanosColor: r
    })
  }
  static async putUserWallet({
    address: n
  }) {
    return C.put(`/users/wallet/${n}`)
  }
  static async getSquadInfo({
    id: n
  }) {
    return C.get(`/ratings/squads/${n}`)
  }
  static async checkSecret({
    key: n
  }) {
    return C.post("/mining/quest/check/secretWord", {
      secret_word: n
    })
  }
  static async getSecretStats() {
    return C.get("/mining/quest/stats ")
  }
  static async getDailyList() {
    return C.get("/daily/list")
  }
  static async getFirstDaily() {
    return C.get("/daily/free")
  }
  static async getRewards({
    userId: n
  }) {
    return C.get(`/users/rewards/${n}`)
  }
  static async getRewardById({
    rewardId: n
  }) {
    return C.get(`/users/rewards/distribution/${n}`)
  }
  static async claimRewardById({
    userId: n,
    rewardId: s
  }) {
    return C.post("/users/rewards/claim", {
      user_id: n,
      reward_user_id: s
    })
  }
  static async generateTonProofPayload() {
    return C.post("/wallet/ton-proof/generate-payload")
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
    return C.post("/wallet/ton-proof/check-proof", a)
  }
}
const Xc = "/assets/icon_stars_new-Dk8ap_HZ.png",
  Vc = "data:image/png;base64,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",
  Jc = "data:image/png;base64,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",
  Wc = "data:image/png;base64,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",
  Zc = "data:image/png;base64,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",
  Kc = "/assets/icon_anon-B5YvKg3f.png",
  $c = "/assets/icon_cati-mWXfw3xk.png",
  el = "/assets/icon_x-DBD55XHy.png",
  tl = "/assets/icon_major-BvjI4Z5H.png",
  lo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAADDklEQVR4nO3dsWsTURzA8ZwUHMQudhGyiItWXISCKHYTNIKD4OLiLHQpqAi6OAiijoH+CU4OCtpBcGipg4jgUt0czGiXQpGCcM6p8fe4vtwl1+/3s75c07v78uBe7pKOJElCKvbudFmWrT4ORVHUugNlWf5zzNqkKIb//UNt3hnlMwA4A4AzADgDgDMAOAOAm8Q17UQXGtY2roXjixffNva//Eej58QZAM4A4AwAzgDgDADOAOAMAG6m6u6XL66H48XdN+F1fmr7lOevN8JX3F/fyvr7KVe7h8NXnJytfEiH9Dd3wuO3NH8kXCfob+5Uej9nADgDgDMAOAOAMwA4A4AzALj9fPY80ev8M4lmP/7aDccvzMXX8bnb939sh+NjWCdIvaTSOXUGgDMAOAOAMwA4A4AzADgDgBt1URpe57+6vZB1xFLX+W137mi8TvBlO15nSK0TpO5HWB3spp67GFoncAaAMwA4A4AzADgDgDMAOAOAq/zh9I2zx8Pxuj/P771/EG9/+Wk4nqv3cjnr/ZdOzIbj+fcTxMdvL2cAOAOAMwA4A4AzADgDgDMAuFH3kIefJ3++1Q2P2Iefv8Px1DpAb+VUrWfk3Z3vU/3+uesAVZ8bcAaAMwA4A4AzADgDgDMAOAOAy3tYfQKm/Tq+7vcfN2cAOAOAMwA4A4AzADgDgDMAuKlbB3h082s4nvqevrZv3zRnADgDgDMAOAOAMwA4A4AzALjG1wFyn68/6Nv3zz8Ox8fNGQDOAOAMAM4A4AwAzgDgDACu8e8HuLcyTz/mod6VT+G43w+gsTIAOAOAMwA4A4AzADgDgGv8foDc5+sP+vZNcwaAMwA4A4AzADgDgDMAOAOAG3U/QEp4v8CzS8fCzXN/NzD1fH3bt0/9XsDqIPm7gJXOqTMAnAHAGQCcAcAZAJwBwBkA3H7WAVLCdYKHp+Pfz6d78i1eB1jszoTnbG3wp9IRdAaAMwA4A4AzADgDgDMAOAOAq2MdICVcJ1Cz58QZAM4A4AwAzgDgDADOAOAMQJIkiabT6fwFAeCnZalTAZIAAAAASUVORK5CYII=",
  uo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAABXdJREFUeJztnV+IVVUUxu9t9N4sshLJlEntLSptnIcgoRF7GANn6MEnBxRCiP48Rr1EPgS9CBHkQ4kRPli9F0PTGElCKYjjH3QEBxFmrg53YJwgU+6E3F4KWuvYXne5z/bc4/f93tY9+5y97+VjrbX3XmffSoUQQgghhBBCCCEoVIseQCztdrvtaV+tVkv9na3v6/1+D8QNh5QdCgAcCgCcJUUPIG90DPTmCGjQA4BDAYBDAYATnQPExti85+Wx4+n2nCHv34seABwKABwKAJzc1wE+3bFD2KeuXBP24YnjufaXem2/6K2D1CkJPQA4FAA4FAA4991egBfvvD/TfPKVqP4XJy4Ju77ratTzvNADgEMBgEMBgFN4DqBjcNE1e7r7vOfhVsyP7c/7e9IDgEMBgEMBgBMdb615tHdvIHUO0EFdvW4vGzjn/aljfuzvRQ8ADgUADgUATvQ6QNnr8FPP+621fW8Iz3t89ADgUADgUADgFL4XkJronCRyv799Yav84Nmfg+0XD/cKO3V9AD0AOBQAOBQAOPd9DqBJPe83UTlF6r0CC3oAcCgAcCgAcLouB7jX5w3kXX6QmfcrYmM+zwcguUIBgEMBgJO8JlBj1QhOPtIXvP/0sS90/57uo/HWDHZbzNfQA4BDAYBDAYDjXgfw1tW/8e4hYT9jPP+jD94KN1DX+7dIu+gcodtjvoYeABwKABwKAJw83gsQto75w4ObhD114Lvg8/Z+/Lmrf50z7DXG580JrPutGr5ui/kaegBwKABwKABw3PHnDmfQiOvf/3hW2Dqm71o5J2y9F/D1iVPB/vfV5Tz/24GTwtY5wfC2F4Sddw5QeI2hgv8bSFxQAOBQAODkngPMNGUMXL4mrLFlX0q7NqKWJo4susa3b+grYb9f2SPsDublwfbJzxOoL3O1b7VuBa/znEAShAIAhwIAJ/k6wKuDzwn75pKlwtY5gKZnt4yxPT+EY257XMXsz6TGvTlA5vmRMd+K8a33BoLXZ3/9Sdjrf6vJ+505AT0AOBQAOBQAOMlzAI3OCSzGxi8Erw+NbhD23EG517Dq1pPCTr1W743xOqZ7OdpcLezXL8/L/lROwByACCgAcCgAcJKfD9DXt1HYY+PnXPc3rl0X9vzvN4T94sFVdzewu8SK8Wt7nxf21M4Vwo6N+XlDDwAOBQAOBQDOPT8jaGhwY/B6Y05/InMGnQNoPnx7TH7wSYcD+wcrxm/esN31vK1qOI2FfmEfWzsRvF/P8yeur/iflv8yb1yX0AOAQwGAQwGAk8kByvafP15i1+pH/ojrv/fxdcI+2pwVth3jJfsXpqLGQw8ADgUADgUATqYeQOcAo0/L/fuXZy4GH/jobZlC6PoAvTdgceaMXAc4Ozkt7OmGnPce2v9m8Hl578drBqb77Ub/4bU/W8HrVoy3agA1rAcgAgoAHAoAHHMvYPuVcE1edTR8//A237t02b2AMDrme+vqY9Fr9V5Sx3gLegBwKABwKABwMjmAjiF6XWDuoaZoL61KZeUNWYff05LvAuZ9LF6t9mC4wchfwlw9skXYs+/8ErzdvR//sDSnG+eDzVPHeAt6AHAoAHAoAHDcNYFP3LTq8OU8vy1fX69UW+oDJ83HZoT91O31wfb1TceF3Tr9krD9NXeSzDx+QZpFx3gLegBwKABwKABwzBwgNibpdYR2LXzuX/XA5uD1TA5Sdw7oG7kuYcX8otfqU0MPAA4FAA4FAE7h8Sjv9xC8Z+1alD3GW9ADgEMBgEMBgFOqeNUJOqfQOYE3pluULeZr6AHAoQDAoQDAKXX8uhPWukLsOoF19m7ZoAcAhwIAhwIAp9TxqxNSn3nEHICUGgoAHAoAnL8BF6DwHlKpItgAAAAASUVORK5CYII=",
  Ao = "data:image/png;base64,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",
  mo = "data:image/png;base64,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",
  an = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACABAMAAAAxEHz4AAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAABhQTFRFR3BM////+8sH4qsEoJDhMJjTe2y0AAAAichSjAAAAAF0Uk5TAEDm2GYAAADISURBVHja7dkxCsJAEIXhdNZeYRDtkxMIQzzB4gVkbCUK7/oOrEZHgq2z8v7mscV+TaqwHWMsa6hNIoKQiOx8CKQHVgCGWl+BaWlAIC8A4DqEHl/+YypyIUCAQCtAL3MEGgVEZGtmmLupqohsfOARSA+IZ2YnVfU5AyilHH1U9VBPhUATgKqOZlavPHs7EUgOeBXZ6JcINAisQwTSA4h/rqq69ysEmgGi8wJGM4tD4J+BGGqLALzOI5AeiE6s8wj8GuAjEmNZuwMoowLyPmOZ5gAAAABJRU5ErkJggg==";
G("main/startTransaction", async ({
  pixelId: t,
  newColor: n,
  buyerWallet: s
}) => (await X.startTransaction({
  pixelId: t,
  newColor: n,
  buyerWallet: s
})).data);
const nl = {
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
          price: 64
        }, {
          currency_id: 2,
          currency_name: "TON",
          price: .1
        }, {
          currency_id: 3,
          currency_name: "NOT",
          price: 90
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
          price: 180
        }, {
          currency_id: 7,
          currency_name: "CATI",
          price: 1.4
        }, {
          currency_id: 8,
          currency_name: "X",
          price: 4200
        }, {
          currency_id: 9,
          currency_name: "Major",
          price: .8
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
          price: 128
        }, {
          currency_id: 2,
          currency_name: "TON",
          price: .2
        }, {
          currency_id: 3,
          currency_name: "NOT",
          price: 180
        }, {
          currency_id: 4,
          currency_name: "USDT",
          price: 1.4
        }, {
          currency_id: 5,
          currency_name: "DOGS",
          price: 2400
        }, {
          currency_id: 6,
          currency_name: "ANON",
          price: 360
        }, {
          currency_id: 7,
          currency_name: "CATI",
          price: 2.8
        }, {
          currency_id: 8,
          currency_name: "X",
          price: 8400
        }, {
          currency_id: 9,
          currency_name: "Major",
          price: 1.6
        }],
        currency: "XTR",
        isOnePiece: !1
      },
      13: {
        id: 13,
        name: "Pixanos' Snap",
        description: "Discolor ½ of the world. Your name will appear in History. No reward, just fun.",
        image_url: an,
        price: 2e4,
        prices: [{
          currency_id: 1,
          currency_name: "XTR",
          price: 4e4
        }, {
          currency_id: 2,
          currency_name: "TON",
          price: 70
        }, {
          currency_id: 3,
          currency_name: "NOT",
          price: 52e3
        }, {
          currency_id: 4,
          currency_name: "USDT",
          price: 450
        }, {
          currency_id: 5,
          currency_name: "DOGS",
          price: 62e4
        }, {
          currency_id: 6,
          currency_name: "ANON",
          price: 1e5
        }, {
          currency_id: 7,
          currency_name: "CATI",
          price: 900
        }, {
          currency_id: 9,
          currency_name: "Major",
          price: 400
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
          price: 64
        }, {
          currency_id: 2,
          currency_name: "TON",
          price: .1
        }, {
          currency_id: 3,
          currency_name: "NOT",
          price: 90
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
          price: 180
        }, {
          currency_id: 7,
          currency_name: "CATI",
          price: 1.4
        }, {
          currency_id: 8,
          currency_name: "X",
          price: 4200
        }, {
          currency_id: 9,
          currency_name: "Major",
          price: .8
        }],
        currency: "XTR",
        isOnePiece: !1
      },
      7: {
        id: 7,
        name: "Pumpkin",
        description: "A 7x7 pumpkin blast! You get pixels. Boo! Boo! Boo! Pumpkin soup canvas.",
        image_url: lo,
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
        image_url: uo,
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
        image_url: Ao,
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
        image_url: mo,
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
      image: Xc
    }, {
      currency_id: 2,
      name: "TON",
      image: Vc
    }, {
      currency_id: 3,
      name: "NOT",
      image: Jc,
      master: Et[3]
    }, {
      currency_id: 4,
      name: "USDT",
      image: Zc
    }, {
      currency_id: 5,
      name: "DOGS",
      image: Wc,
      master: Et[5]
    }, {
      currency_id: 6,
      name: "ANON",
      image: Kc,
      master: Et[6]
    }, {
      currency_id: 7,
      name: "CATI",
      image: $c,
      master: Et[7]
    }, {
      currency_id: 8,
      name: "X",
      image: el,
      master: Et[8]
    }, {
      currency_id: 9,
      name: "MAJOR",
      image: tl,
      master: Et[9]
    }],
    limitedGood: null,
    limitedEnd: null,
    showLimitedGoodPopup: !1
  },
  Zn = G("shop/getProducts", async () => (await X.getProducts()).data),
  Kn = G("shop/useProduct", async ({
    pixelId: t,
    productId: n,
    color: s
  }) => (await X.useProduct({
    pixelId: t,
    productId: n,
    color: s
  })).data),
  po = ge({
    name: "shop",
    initialState: nl,
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
      t.addCase(Zn.pending, n => {
        n.getProductsStatus = p.pending
      }).addCase(Zn.fulfilled, (n, s) => {
        s.payload.goodsAvailable.forEach(a => {
          n.products[a.id] = {
            ...n.products[a.id],
            ...a
          }
        }), n.getProductsStatus = p.fulfilled
      }).addCase(Zn.rejected, n => {
        n.getProductsStatus = p.rejected
      }).addCase(Kn.pending, n => {
        n.useProductStatus = p.pending
      }).addCase(Kn.fulfilled, (n, s) => {
        n.useProductStatus = p.fulfilled
      }).addCase(Kn.rejected, n => {
        n.useProductStatus = p.rejected
      })
    }
  }),
  {
    setProductCard: st,
    showProductCard: at,
    hideProductCard: Ja,
    increaseAmount: M3,
    decreaseAmount: U3,
    setAmount: Xs,
    setAvailable: sl,
    addAvailable: $t,
    subAvailable: Vs,
    setSelectedCurrency: Bn,
    setLimitedGoods: O3,
    clearLimitedGoods: Q3,
    showLimitedGoodsPopup: al,
    hideLimitedGoodsPopup: F3
  } = po.actions,
  Wa = t => t.shop.crypto,
  il = po.reducer,
  Js = {
    getProducts: Zn,
    useProduct: Kn
  },
  on = ({
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
  ol = () => {
    const t = c(s => s.shop.selectedCurrency),
      n = c(s => s.shop.crypto).filter(s => s.currency_id === t)[0];
    return t === 1 ? e.jsx("span", {
      style: {
        paddingRight: 4,
        marginBottom: -4
      },
      children: e.jsx(on, {
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
  Ve = ({
    num: t
  }) => isNaN(t) ? null : new Intl.NumberFormat("ru-RU").format(t),
  ho = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACABAMAAAAxEHz4AAAAIVBMVEVHcEzv7++7trv/sQAAxvb+XTUAieJkY2UaWbc9OGcbGx4WugEBAAAAAXRSTlMAQObYZgAAAM1JREFUeNrt2c0JxSAQBOC0YAu2YAu2YAu2YAu2YAtW+Rh4gUE0Iddh9rLBON9pwfxca8055/WhDOgBCJdSygmZ/zKgDaCewrXWmnPOuDagCpwxDqN67x1rBnQBDmMzh9ERHmMMA5rATrzD6LuwAS0ACymlhM5rrbWGjiA6hw3oAag1HGOMfLDwYWJAF+BwCCGg80DxIBlQBd7DPGwGVIH38LrXgBLwPcwfqwxoAfxAsQufBsmAFsDIGj5BBrSAFUHtXkgNSAD+B2vg6f4Pseby+y+jC6sAAAAASUVORK5CYII=",
  go = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACABAMAAAAxEHz4AAAAFVBMVEVHcEz/3Jr/6ADjygD/AAC5AAAAAAB/sfDAAAAAAXRSTlMAQObYZgAAAJJJREFUeNrt2bEJBCEQQNFrYVqwhWnBFq6F338Jx4IiyIG76ez/iRjMiwyE+Zj9i0MC9QGA7yEAgarAGu6HJiJQHTgnICAgIFAbAHgGrARqAACZmROIiAC4zt573+8TaK01gWLA6O5DyswUqAVcMXoCzGGBCsBqAjGCVYz2D4ZAbWBP4EXA6AQACJQB3LEImO39AJS0GBsvGYIKAAAAAElFTkSuQmCC",
  _o = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAABVQTFRFR3BM/////2U1/z4F3SwBrB4AAAAAkQwbPgAAAAF0Uk5TAEDm2GYAAAEVSURBVHja7dvBDsIgEEVRZbD//8nGQjKlY6aMGMrivuDC14BHxIUmfRBCFss2IQAAAHBfOU2IOi4B8hmSTJzSmR8FaGSsTDIAiO6A38YBksYi8TNgMrgDKboDE7bABcietA+RXNO2sdK2PkBzWkATKE0LAAAAAAAAAAAAAMAl4DkhAAAA6AFsbcxFa+2ZDwAAABfgrGramEpbAAAA/BnQPgMAAMBNAA0AAADc+fw6BgBgMQD/FQMAAAAAAAAAAAAA4AJyk1dN28ZK214ApIx2gdqVR7jUVjoAGtEFikdZgVLbEuncgfM7OKwcLLWtF345A3JcIly+DijpOwNfP8Nc60CprfZ5lW8Bd9kAAHAfgNtKCVksb9I6sf1BNvNjAAAAAElFTkSuQmCC",
  rl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAAp1JREFUeJzt3bFq21AUh3E7lJrMnbp1LXmDDskDZSx5CtOpZMybdGmgGbOFQKdufoAMwV7cWcfgy0X3Slf3+36bkCIJ8ufcoyMbr1aSJEmSJEmSJKln67lvoHXH4/E45fXW6/Wk/5OLKS+m9hgAOAMA92HuG2hNas3fbC6LXm+/fy96vlxWADgDAGcA4LrvAcY+x8c1f+yaXbqHGMsKAGcA4AwAXHc9QO3n+NTfj+0R4v3XfjdgBYAzAHAGAK67HiDX/u767P7N9nGw/e/b4fzxiblB3E4dX7snsALAGQA4AwDXfQ9wssaGNX/359dg+/P9zfAE29XZ/bvb3+NuMCj97iHFCgBnAOAMANzie4DSn9s/PP8dbL89fCp5+hN+JlCzMgBwBgBu8d8NjD1A7nP/WF+ePg6vl1jTp/7uX4oVAM4AwBkAuMXPAUr78Xp1dv/3ry9Z52ttzY+sAHAGAM4AwC2uB8id/Zd+7u+NFQDOAMAZALjF9QDR2Nl/6rk/yp39t84KAGcA4AwA3OJ7gNri7P9n6AGi1mf/kRUAzgDAGQC45nsAZ/91WQHgDACcAYBrvgeInP2XZQWAMwBwBgBucT1Abb3P/iMrAJwBgDMAcM31AM7+p2UFgDMAcAYArrkeIHL2X5cVAM4AwBkAuOZ7gNpos//ICgBnAOAMANzsPYCz/3lZAeAMAJwBgJu9B4ic/U/LCgBnAOAMAFxzPUBt9Nl/ZAWAMwBwBgCu+R7A2X9dVgA4AwBnAOCa7wHibD/3d/vi8fTZf2QFgDMAcAYArrkeIK7J8fMBq8z3/bl6n/1HVgA4AwBnAOBmX+9yvxdw0hNkSj332wMIxQDAGQC45te73B4hF23Nj6wAcAYAzgBIkiRJkiRJkiR17D/jkLq5vlfVpgAAAABJRU5ErkJggg==",
  cl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAA39JREFUeJzt3LFrFEEUx/FdUS8RUlwpLNFGIYiFpjJFQCytbNPG1ipa+wdEq2ut06cQLLQRPBvFQkVIGpWAjZDCIhyCa5v3zuxkvL3bmft9P93cXnYn5Jc3b2ePKwoAAAAAAKCi7HoCqanrup7l9cqy7PRvcKbLi6N7BEAcARB3tusJdC205vd6i61ebzQ6avV8k6ICiCMA4giAOLkeIHbNT23NbhsVQBwBEEcAxGX3LKDtvfppr/ld7/WHUAHEEQBxBEBc8vsAbe/Vx67xk57fzz+1noAKII4AiCMA4pLrAaL36h+tR50/tKa3ff7UewIqgDgCII4AiEuuB/CCa/LGb/v+G2/bvf7268bjow+37Liw80v98wVUAHEEQBwBEJd8DxDLr8ljds6ZoV/jQz3GvKECiCMA4giAuPx7ALemh4Tu68d6giLuWcCPNy/dK+ejfn7WqADiCIA4AiAu+x7Ar7mvfv4x4829BTP29/mhfQB//EH/SuN8tlYaDyeHCiCOAIgjAOKy7wG80Jo/tre/XTQeH3u+H9kTpI4KII4AiCMA4uauB4gV/PzAnKMCiCMA4giAOL0eIPLzA7k9349FBRBHAMQRAHFyPYBf059+udb4/tye78eiAogjAOIIgLjseoDbL5bMeGfphDd2ZP37TffKp07mcVpUAHEEQBwBEJddD+Bt/LpnxsvVt6leb+36XTPePZzu9aaNCiCOAIgjAOKy7wFC/L5BUdieoajs8MCt6bvuvr7qtzSxRFABxBEAcQRAHAEQRwDEEQBxBEAcARBHAMQRAHEEQFx2zwJWD/bM+H11taOZ/NvjC+/MeLNYOOGdaaACiCMA4giAuOx6gCf3L5rxw2e2Jxge7ptx1b/U6vWHH5+bsf+ewDvL7n/KTi85VABxBEAcARCXXQ/gba18NuPB0H6Hj983CFkNHB9EnS19VABxBEAcARCXfQ8Q4vcN4r8jqLnHyB0VQBwBEEcAxBEAcQRAHAEQRwDEJb8PMBodmXGvt2jGX9dmOZuwy26fwM8/NVQAcQRAHAEQl1wPUJZleXxc13V9fBzqCWZt4D6DGFrz/e/XNSqAOAIgjgCIS64H8GJ7Am/SfYNJ7+tTW/M9KoA4AiCOAIhLen36H75H8GL3DXK7r49FBRBHAMQRAHFZr1+nEeoJYuW+5ntUAHEEQBwBAAAAEPQXKwzH8ovgV5cAAAAASUVORK5CYII=",
  ll = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAABXtJREFUeJztnU+IV1UUx9+INDrgYsLAkfGnBZqgQ4muXCTjIkSFaBNks2qgTUQQE0SbzI2KuhBp509QyxAXImgM6hgKJpGVUWk6+Scd/AU5zmJwnN8IjgtX5zznHg/3Xn+//H4/u/Pe+937hvlyznnn/isKQgghhBBCCCGEoNCSu4PJycnJnO23tLRk/xueZ6Y1+gVIY6EAwKEAwEkeP62Y39o6M6r9ev1+8D5zAh/0AOBQAOBQAOBM9/7A+12vY3510biwew52C3vilyvC/rzvxWB7OifIXXdodrw5ED0AOBQAOBQAOGYOkPu7vm/1HXVFxvzXX/pd3h6Z4erfqhvEvn+jsf4+C3oAcCgAcCgAcNx1gNJ3+KdvyAc2PBCm9V2//dRs4/ku2d+v1vO+uoFmy/q1wfs/X78t7K17PxH2rWv/BH9/+eIlYZ84dFHYy1+eG/z9Z0e/C973Qg8ADgUADgUAjlk31nUAKweonT0p7IE7D4PtX/ivK3jfi64b9F6RdQOdA6SuA1w7v0/YJ4/2C/uDjQeS9qf/Ho4FEBcUADgUADjuOkAsPW+9KW2jbjBcrQl7x6UlSd8ntpaee45jbugBwKEAwKEAwInOARZ+e1fYZyq+39c+PC1sq25g8eXYCnXlj6j2/m/ouo1VF6AHAIcCAIcCACd5HWDD6NvCHhqT4+M9ke3vGhkUdqVzaWSLYXLPGUzdvreuQA8ADgUADgUATikHyL22rrt/lroSzhnK5P2u1zF5fLh/iiefzI8DPwXve9vTDGzaLOx1O09P8eTTQQ8ADgUADgUAzvTYtX+D78p5+N1xIS6aL9rOC7u3mDHFk4+xYv7Y9b9d/Xe90q7slVHtndt/yPW8F3oAcCgAcCgAcEp1AGstnZUTHJh1WNgDdTm+Xy3mu15Q81H7QnnhXl3abVHNF1eP7Bf2jd+GhL3gtc64DhS527egBwCHAgCHAgDnma8L+H7NqLBLawnrxlrCe2nXEsay5P1vXM//uee9TG/yZObMe1XUef69dVnMEaQHAIcCAIcCAOeZ5wCNJvccPx3jvTmChXf8v3bzL2F3VBaLnIAeABwKABwKAJyGrw1MjbU2MPceQaljvubYx6uErXMCayxH5wT0AOBQAOBQAOAkrwMs+OGF4P3ebWfUlfDzZQbDt0fCt62Y3+y1fQsrx9H36QHAoQDAoQDAyT4WoPcS1nUDC73uwEvu/lpVzqC/05sdegBwKABwKABwonOAm0Oy1n5j5YSw9X4Ane16fwCJXldQO+t7H71HUer+Or5SMX7bU79aEnTtn+cGkigoAHAoAHBKOUDq8fKhEWvPH4m1LsDsz9xjKK6/d9R5Bhodo2PHClLHfA09ADgUADgUADilveS9ewbpWn95H8Aweq2gl9z9fX3kuLD1OYf6nEKNPrfQizfme89KpgcAhwIAhwIAp1QH0GfMWDmBXt+v9/61KP/eS9r+dK3/wm4Z87efmi3svtXh+73Lzgm70ecE6v8vPQA4FAA4FAA40fMB9Dl/uWvxmtT9lWv9co5gq4rpml3LjHULifF+92voAcChAMChAMCB2yPIYrhaU1dkDqD3KtZjAXqsQJ9z6MWaj2HFfJ4dTIJQAOBQAOAE40NR+OcH6BjpjYGl8wCc5O5P1/qtukDsHEvvd31HZbGw9d7AGnoAcCgAcCgAcMw6gHd+gKbSudT3RvoMICe5+5sw1gVYMTv1fABvzNfQA4BDAYBDAYDjihdF4a8LVBeNC7u8l28YfRawl9T9WbV+HeN1jE6NN+Zr6AHAoQDAoQDAiYofRVHOCXKfydNsxI7HNxp6AHAoAHAoAHCS5wDoNHvM19ADgEMBgEMBEEIIIYQQQgghhIDwCOGz0zOqwEkRAAAAAElFTkSuQmCC",
  dl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAAw1JREFUeJzt3b9rFEEYxvG7ICYGbASLQCB/gAgp7AKCIGInVkJIl3S2Z2MjloF0tpZX2aWzEIJFuiABu6QKRFKkSBGInBZnPe/JLG9mbmdnn++nm/sxuwkP7/tmudwOBgAAAAAAAAAAAAAAAAAAoA+GpU8gt+l0Op3n/sPhsFe/s4XSJ4CyCIA4AiCu8/0stacvLt5LOv5k8jvp/V2fGagA4giAOAIg7k7bB2y7p0/ePQ0f2PwbLP/8OAnWX3Z/pR3PzAzen7ftmYEKII4AiCMA4pL7TW09/fjycXT/vZ2VpP23T5ai+1ulrzNQAcQRAHEEQJy7fzT1/L719NpmBu9MQAUQRwDEEQBxyTOA7fnqPT33/u9HD4L1p6vTYG1nAmYAuBAAcQRA3NxngIvDb9H9Vjaehw+I9fT1hz+j+9vjMwMgKwIgjgCIa/0zgU0u3n6PPr/16kW4bui5492wxx5/tj097Ml7O49c+49G4W7r+/Gebo9XGhVAHAEQRwDEdW4G8Mo9M9Te072oAOIIgDgCIK76GcBr/Oag4RV193QvKoA4AiCOAIjLPgM8+3rfPPI6WJ1fnQXr043cZ1CXjzdPos+vrq6FD5jPA6SiAogjAOIIgLji1wH6NjP4e/rZ/1/YEiqAOAIgjgCIKz4DeLU9M9TW072oAOIIgDgCIK66GcDLzgznlfV0O9PkRgUQRwDEEQBx2WeAg5fXwXrm+wHMn/Gb16bn9pzt6R+Wj6Kvn/l+gMznQwUQRwDEEQBxxa8D1D4zpPb0wXLuM/KhAogjAOIIgLjiM4DXvGeG2nu6FxVAHAEQRwDEVTcDeNmZYbzf757uRQUQRwDEEQBxyTOA/b762fsG3o2/v+P/6zdvzfcNjN8fIBUVQBwBEEcAxLlnAHtPGnsPIW+P6tvM0HZP994jyKICiCMA4giAuOTrAN4eVNvMUFtP96ICiCMA4giAuFb7zW3YmcFrdmbwqa2ne1EBxBEAcQRAXKf7022kzgxNut7TvagA4giAOAIAAAAAAAAAAAAAAADQM/8ACXZHRjaU+NYAAAAASUVORK5CYII=",
  ul = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAABXVJREFUeJztnTtoVEEUhu9KdBVNEdEiImijIOI7jQlETCGigpWFz0JLFQVjn8pKC1FLbXyhqQIqYqFYiI2PoAbBNBoiATFG8EUEifU5V+ZwmJndu/7/1529O7uT8HP+szNzz60VYMzMzMzEjK/VarVUc6kCs5o9AdJcKABwKABw/is/Kwq/x9fr84LXp6d/ub6/1WoEZgBwKABwKABw2po9AS/JPf7lZhH/fvHON17VCNb8qlYjMAOAQwGAQwGAU/kawPLUWI+fOPpYxOferlbjVwbHt3qNwAwADgUADgUATqV+k/4L7Znacy2Pn7w8IWLt8WcfLso6vv3IZBHC2mvIXRMwA4BDAYBDAYBT+XUAkxuzRTj5RHp256UtIj5TWgcYEXHZ4+U6gHe8dx3Be/4gFmYAcCgAcCgAcFq+Bth6v13E41MbRTza5Bqhv0/Od/3ij/KFYm7RTJgBwKEAwKEAwKlcDRB7754md41gefzQ/E4Z/+xSM3xTmnMjYQYAhwIAhwIAp+E1QOpz/Y+2fxPxxJMXIt73bVlwvLdGuD3k9fg49P8r9fkAZgBwKABwKABwstcAsef6vzy7GLxe7zqmXpkjounTcTXCiptf1Cs+j9/9Y1rE6xe/FvERtRdgnQ9IXRMwA4BDAYBDAYDT8HUA7XGWx1vkrhF6x+S6gMb0+HG13z8lY3P+mc8MMgOAQwGAQwGAk7wG8K71P706GLy++eCeqPnE1wgLRXxt6IGIYz3e+vtzwwwADgUADgUAjrsGSL2fv3zd0uD16tUIaT3+3rPvIt7RtSD4/tQwA4BDAYBDAYBTqgEa3Yu3/fD14PiRK/uD15tdI3g9vmowA4BDAYBDAYDTVvVevM2uEVrd4y2YAcChAMChAMAprQN4e/FaHp+7z17uGmHn+cfB616O9mxK+nnedRt9HwEzADgUADgUADj2eYAW78WrawSrJtCef7xjRfD9p1bJ+en/R33D0+B46/s11rqMxrq3kBkAHAoAHAoAnPj7Av6zXrza8y2P7++T8y36Pgc//9PXPyIeHBkOvl97+J0Hr0S8a9taEesawbq3kBkAHAoAHAoAHLMGMPvo9RgfkLkXb1EsLFKinwNoebzuB3Dg1lYRX9gw6vp+6/7/gYGTIt617WFwvLVuwAwADgUADgUATvQ6QOoaQffitTx+aH5dxpH9+PudHt/ft0bEw2r83ROyxtEMymUG83f+6+dyb6GrWxVJTpgBwKEAwKEAwDFrgOz9+I0awfb4tJTXAcIev/3QkuDnec8Uas/XePsEch2ABKEAwKEAwIleB4itERrdj99CrwPEerzl2d79e+95AAtmAHAoAHAoAHCyPy/AqhFi+/EP/5C/0y1Wq/sE9Fq99vxYj7ew9u+9nm59voYZABwKABwKAJxSDWCfKVP99K39foPRveF+/F6Pt/CemfP+jveOj32/F/YHIAIKABwKAJw27Qn6/nG/B6atESwuTKlz9+qZPdb8Yz3+fffvqPHW98c+G9iCGQAcCgAcCgCc0jqA5TmNrhFiPd7C8ujuNTuD13vHPohY712871YH/43vz70OoGEGAIcCAIcCAMd9HiB/jRDn8d79c+t3/Lm3sl+Bvk9haYc88/i8Q47vHZPv1zVCUfj6B6SGGQAcCgAcCgCcrOvM/8Lb396L9bwD6/kGGt0nUKPH6xphbNzXn0DXPNwLIFmhAMChAMDJfl+AJrWneWuKci9i2Q/AWyOU9ypk2Oi1fS/MAOBQAOBQAOA0fB0gNamffaz7A5Q8Xo93enzu3/VemAHAoQDAoQDAqZQfpcC7LpD63r6qebwFMwA4FAA4FAA4LeVXKYg9j9BqHm/BDAAOBQAOBQDOX/7wrWuOIpDoAAAAAElFTkSuQmCC",
  Al = "data:image/png;base64,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",
  xo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACABAMAAAAxEHz4AAAAJFBMVEUAAABHcEz//////wC4uLj/oQCampoA/wAAmf//AP9SUlL/AACcsFD9AAAAAnRSTlP/AOW3MEoAAADGSURBVHja7dlBDcMwDIXhUCgFUxgFUyiFUBiFURiFUhi5vUm2FFlJc97T+y6Vmvi/+pB2TLSF6V0FqAJt4AOD/LaBAnyBOnQtjMEGCvAEfmZDz/AKV5ERBXgCBlc44RFq5A0K8Ac+cMIuogBnwMGCw13EQwcFuAIdPNhCDiUF+AL10Cd6YaAAV8CgXF6yoABfoC6WZDccFOAKdIiBLQ8dFOAK5A/fqMtHAZ7AAUPklg9yVgGeQEbqovGiPlAo8PcBvbkqMPoCnDifKjhoeKsAAAAASUVORK5CYII=",
  ml = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAABMZJREFUeJzt3b+LVGcUxvGZZNlFXYlEyKi4aQMxmEljkVgEBQXRv0HXQiFtNJ1VOjFlfhjEKJZaKUpMoWglKriKjYUWGlw34EJsRDFM6vNc8549vHfG7JzvpzvcmTv3Lof3nPve997tdAAAAAAAAAAAAAAAAAAAwDjojvoHB4PBoM39dbvdkZ/DOHnvXR8A3i0SIDkSILmh10+v5r+YsDn4wT/24we+PWXi48f2tnNg/yFbT8EIkBwJkBwJkNyE94G2r9ujNV95JfrC5bs2/uOOiX/9YZ+J9fS88x23HoERIDkSIDkSILlGPdMa2H09WfUDg8nXJtYe4OuvDha/f+f6L8XtWvP7/c0m3vhR+fgOHjptYq9H8Cy3HoERIDkSIDkSIDm/Bzj+ZXkPs7dDP/j3yjfF7TovoLyar7wewDPuPQIjQHIkQHIkQHJuDxCl1/lRw+4BtKZ7vPUHbfcIatg9AyNAciRAciRAcm4P8Pth+5Htm8ol6drsJ8XtW95/YOLoeoBbt24Ut58/+7OJtQfQkqo1Wmu61wP8+Vdxc2du7p6Jo+sTPLU9AiNAciRAciRAcuF5gGhP4JmcLfcAXs1X0R7Ao38Or+bX+v7oaO89MAIkRwIkRwIk5xbEtp8LaBxAy1PdtWsEPbU9gNb4PTu+CH2/7XkERoDkSIDkSIDk3GcDo3PNS3i2Tj9f3B6lNbIh2BO0XfO3bf009P1ezx7gke/svYn+Zx+bOLo+gREgORIgORIgObcHqKU1Sa/T1ZMFW6O8++meaE9Q68Klqyb2rvN1nkJ7Bq35+veYu//YxFrzPYwAyZEAyZEAybW+5rzxbKFc19+cmzfxwkLsQtur6V7N1e9Ha7Rnfv6ZifX8vP1533/y9LmJv5ndZmLuBSCEBEiOBEhu6PMAav36dSaenp428cOHj4rfj94/V83r5FMm0rn1Tsded+vcvB6/np/X4+h1vfYIJ85cNnH0/j9rAlFEAiRHAiTX+ppALTnR5/lfvbLvFVxcXCx+3rvO9tbZe/Q5Be0RZjasDe0vOg+xZ+fnJq6t+YoRIDkSIDkSILnGPEB0TZ/Smqlz1/1++YCmpuy7ifW6WnnbPUuoqSbW89P78Xr/Xrn3MoZc8xUjQHIkQHIkQHITtev4la4B1Bo5s6E8t+7VdL1frnPxq1fbuFbtcwvaE3hr/DxtvzeQESA5EiA5EiC5xjxAtOar6Lt1Pd7ce3TNnUdrrPZI0XkD5c0TjBojQHIkQHIkQHJdbx2/PqunvHXsaveOWI3W5/O962btAWZ65bl87VmG/T6EqLfMQzAPgPaQAMmRAMm5PcBPv10p7iC6Js7j1XBvjaFX84f97t0RvFeRHgDtIQGSIwGSc3sA73/4eHQu/8M19n79qpVT9vNOTa920inRFy+ZcHBul4n/b//7txYjQHIkQHIkQHJvey7AxNHnAJSuCVTe8/hRjev+Tc79d6fmqyXM/S+rHoERIDkSIDkSILnw/w1s7KCy5NXOM+jc/sIKuz6h92Ovav8NYzZPwAiQHAmQHAmQXLhetX2/u7Zkas33nH550cSHB/urfl/RA2BZIQGSIwGSG3m9GvaaubYtt5oexQiQHAmQHAkAAAAAAAAAAAAwxv4Fm/jXETIKTbYAAAAASUVORK5CYII=",
  pl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAABXFJREFUeJztnU9oXUUUh2+aNBKxjYhULF2UYnAhxkSkYAXdtGnRBA3FRSStFq2oOxHdVAWFLlqpghupsfbf2xUEqdUk3dSFLRQsScDSkkiChmoCSq0hQpombtycc5OZHOe+vNec79udzLy5w8vvzfndmblzswwAAAAAAAAAAAAAAAAAAAAAAAAAVgI1y33B+fn5+eW+ZjmpqalZ9u+wSFZVugNQWRCAcxCAc+rKfYFYzr/dUugKszCMAN5BAM5BAM4p3ANYc/7c3+dEPD06UnSXkrir+ZWytp86L5I6D8EI4BwE4BwE4JxkD1B0zv9t6EJql5IYGxyv6PU/2blTxD+OXhNx6VKx3w8jgHMQgHMQgHPMHmC5c37T3V8Yepdlw9dt9+0652/7qE/EK23uX8MI4BwE4BwE4JyoByh3zrfm+BxHv5VxZ7h6as5PnXuvtj2RjADOQQDOQQDOyeWzonP+rda9wQ40fj0XLI8Ru++vdM7X6O83de6f/QCQBAJwDgJwTnQeoOicr/nrWanBxue+CX9gz9Om9q1U+7N+RfePEcA5CMA5CMA55v0Asbn9dcb2Lt56UMTDnV8F6zcdVX+IzP1vfGSDqT9Fz9VXu6dgBHAOAnAOAnBO4c8G6py+ufZqsP7G0hOm9rVHWLt3f7D+jZ598vOll0VcdIrWFqLa1v81jADOQQDOQQDOKdwD6Jx+sVuWa0/wwNwREY+skjlaE8v5sfoxT3B/8+Om9jXaU2gLoNf/Kw0jgHMQgHMQgHPKfk7g1hNXRHxjT/i+O+YJjv9zRsQvNjyT0Ls8uecWumV/Xn3rWPDzrU++JuJHn3pdxLvulfXL/fx/DEYA5yAA5yAA55TdA2j0WsHW7MoiNRems3RexMe7F6n4H1aPEMv5HW2twc/HyocPfxAs157h0vefiVivLfBcACSBAJyDAJxj9gCp5/jpeYHeoXD9tgNHguWRLYE5j6Dr65yv7+N1Tn9/v8zJVvQ8gObDfdIDlNsTMAI4BwE4BwE4J3o+gE4pU0PyTJ+YJxgZkDm27YCtgzFqZ1eb6g+f2i1i7QFO9w2KWOf8cz8cFnHjtM1GfdzVIWK9FnB5TYuItSfQ/dGeAA8AJhCAcxCAc8we4Ozb20Vsffbu/KzMud27TB/PYfUAOe64KcJfJ+QevrXrw7+RBnXMYf0LyhOcnfnfXcuyLDvY/qWI38nk/gi95xAPACYQgHMQgHOSzwlM9QSbuqQnKJ2U5dojJOd8jfIAeh5gR9tDIp6uk9fXHkBTuzv8aGDtd+Hy+X6V4z+Vv1k8ACSBAJyDAJyTm8jWOUR7ggVyjohTPcGWOnmfWzqp9gN0mZrLkVsLyML7DXr7fxLxjtmbi9RcGH0Ssm7v9Gq5IaL9zMMinuyZNF3PCiOAcxCAcxCAc4p4d7CIrZ5A3/dvqdOx9ATDp2R50/Mngv3TOd9KS0uziHv7I5sYI4xf+1PEf1yfEvHmnvuS2rfCCOAcBOAcBOCcpbwvIDgvoLF6gjXqSJ6xC/IdP1GmHgsWj/1sbC9Ce1tzsHxc3bYPDEjPsGH9PSLWHkDz3hu98g+Hwv2zwgjgHATgHATgHPM8QGy92bp2kKcvUm5jW6GtrTwYAZyDAJyDAJxT+BlB1v0Elabp2KiIO7ZvErHeI5i1hOcBUtH3/Z8feknEB9X+hck7J0S8hD2d4v/DCOAcBOAcBOCcqn6n3VKI5ryZelm/fiZYnkM9NxDzMLG1AM3g5V9E/O6b8vwAnfOt5x6um5b7C/AAIEAAzkEAzrntPUAM63v7rJ6gaCYafg+W65xuBQ8AAgTgHATgnBXvAaxU+7t+NbwvAJJAAM5BAAAAAAAAAAAATvgXtprTE+PHJ9wAAAAASUVORK5CYII=",
  hl = "data:image/png;base64,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",
  gl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAABQxJREFUeJztnUtsTVEUhu/xKCUhEoQgqQ46IaJCgkTMDBQjpuiAYmIiBoQIMRFGEpSBMDUgrorHwCPxSK5oCRMDOpAQkbQRiltcU2td9srO3ufl/7/Z6tk9+9zbv2v9Z5999q5UCCGEEIJIkvcFaBqNRiPva4hJkiSF+47/ZEzeF0DyhQIAhwIAJ/P65Fvjk/GT07qUVGiMfvFqn7dHYAYAhwIAhwIAZ1zaHVg136rx1b5HIl63ZpGz/dsPMh4YeC7ixYsXOY+HYn0e7RH095O1J2AGAIcCAIcCACd6vfGt+brG6xo9d6b8/RevPgVcXXwGBwe92q/vWiFia9wgbU/ADAAOBQAOBQBO6h7At+YPDxerxodieQTLE9ADkFShAMChAMBJ/VmAhR6Lb2try+dCUkI/u7h2K+6zh1CYAcChAMChAMDJ3QP87+MAoZjPVgLHCZgBwKEAwKEAwMndA1hz9jRF8wgLO6Y4j/ve92c9p5AZABwKABwKAJzcPYDGmqdveYSsiT22//P7iPO49gihnoAZABwKABwKAJzMPcCr1+9F3NE+y+v3Y7/LlzbVW/0iXr+m09l+7IRJIq6f+yobXFFzBg1PYMEMAA4FAA4FAE7hxgGs+/yieQBd40PRNXzJ6p0irnfL/9mWSmtQf8wA4FAA4FAA4BTOA2jmzZH3uZ0rNzvbP713WsR6rF6PQ2g+fJTzDYaG/e6ra7XHIj68f+c/WhYDZgBwKABwKABwCu8BNE/unHEe79mzXMTW2LsvusZrli2T/fs+C7AY2vVO/aQ96HzMAOBQAOBQAOCUzgP8vJjvFjy6xmtCxwH08309H2CodsjrfBbMAOBQAOBQAOCUzgPkTerjAF9GRdii/0Tb5H2/7xxADTMAOBQAOBQAOKXzAHosfNqp2Zn2b40DBDN5vPNw7P0FmAHAoQDAoQDAKZ0H0DQ9H991I58LiUTWew8zA4BDAYBDAYBTeg8wsa7HAc7nch1lhRkAHAoAHAoAnNJ5gOaaXyzOntjqPF6r7RCxftdRrweg0e8+cq1gEgQFAA4FAE7pPIBm6oj8CNv3Zdu/rvnVm89S7U97hFBPwAwADgUADgUATuk8gK75WWPV/INHZU2OjX7X0PIEFswA4FAA4FAA4AQXVGtvW3TuPugV8bcWOYdx+me5X8LYH+73Aip3Zc3vv6/XTKIHIB5QAOBQAOCYHsCq8Z/GGRpKwtazb+J23WhwIW5/nly9JGtw63XpAVorcj5D05pHM9yfr3on7udjBgCHAgCHAgCnyQPomt83f4HzBKsiX5DeE2j77lOyQeQaGJsNm+R9+tVLv5zt9eetVlTsuSdRsvG6iK35AcwA4FAA4FAA4JjjAF1vXob1oNa+9SX2ev9po8cBjhyTnuXA3i1B57fWKax0rxVh0icPa0/ADAAOBQAOBQBOkwcIXXNG1xi95o1eD//EycvO83W0z3IeLzq9x2XN79njN46ha75ep1DPB2h0eZ2eGQAdCgAcCgCc6JPstYfw9QQayyPEZub0Kc44FD0OoJ8FxIbvBhInFAA4FAA4mW/C5/segeURcufHiAhjrw+g5wPodxOtr5MegDihAMChAMDJdyPev5D1u4ZJ70r5g+4nYSecMGq3CSC05muYAcChAMChAMApnAdIm9geI6m3uBucXyr773kYs3vuGUTCoADAoQDAgfMAoUT3EIE1PBRmAHAoAHAoAHB+A1OqeOtqU9rHAAAAAElFTkSuQmCC",
  _l = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAABMRJREFUeJztnbtrVEEUxu+V7CIE1BQqimD+AlEhoDZ2goQtbSx8lFoKNgqCgoWgleADETGgrYE1AR+ggqASIVGsLCRgJEYCkagRNsa1E89ZnZNx5r72+37d7L07M5t8nHN25ruzaUIE7Xa7XfQc/iRN0zTL/ldk2TkpPxQAOBQAOJnmlypg5fy01pvXVJIkSZL24jfn9dg1ASMAOBQAOBQAOD1FTyBvfHO+lZOnPrnHm5h4vbyJLXN8Pf/QmoARABwKABwKAJyuXwcIzflv3s7Hn5SDyclJ0W4M7hTt2OsEjADgUADgUADgwK0D6JzfHHkm2l8W8pxNJ/39/aKt5+e7TmHBCAAOBQAOBQBO5jVA2Tx2ZWfzplWirZYFosMIAA4FAA4FAE70GqBqHjvNk6dy/37r1i0xp+M9ftYwAoBDAYBDAYATXAOU3WO3ffcR0d6264DX+33Hi03z/nim/TMCgEMBgEMBgONdAxTtsdP75RZnTsoa4NTZy877dc4dG3vu1b/m7buPov1pVn7+uc9h+/mhMAKAQwGAQwGAE7wOUDWPnVUTDAzsEO3xB9fdAzx21wBlhxEAHAoAHAoAnK5/LiDUY7fUsyjaX+vy0bvhW1//Z1q/sdYZdE0SG0YAcCgAcCgAcDKvAarusdM5XzM7F1YDZJ3jLRgBwKEAwKEAwMl9HaBqHrtVP346rx/zHP/ufffnt/YmYsMIAA4FAA4FAE7mNUCoxy5vT93V8wdFO/Y5gZan0dfDGAojADgUADgUADi5rwO8OHxVtOv71RRy9tjpnFt2D2NjcCjqeIwA4FAA4FAA4HSdJ7Boj10oPCeQ5AoFAA4FAE7uNUB9rdxfb92WGry3Maz/0BxfdQ+jL4wA4FAA4FAA4BS+DqBrgmYSlgNjrwNUzcPo+/sMjADgUADgUADgFF4DLO2Vz96NPnwV1F/oOkDVPIzpiN/97UHZZgQAhwIAhwIAJ/caQOf8svPy0RXn9dGH5T4nUOf8NE3FP4ARABwKABwKAJzC1wE6zuAZzXa86ekP6pVtzvuXhoyaJdC/ELp3MbNvRrTXLaz3Gp8RABwKABwKAJyOGsB3P9kX69w9NEL3Lqycr7/3axgBwKEAwKEAwDHXAdJW3bijJlp6P7yxR37PPp7ccPbWsCYUyNTUe6/7545Ou28YnnFfN4jtYbRyvoYRABwKABwKAByzBmjXW87radLrvG7VBFnTt8Y9P19WtjaoVyaC+iv6vAJGAHAoAHAoAHA6agDre6TeK2gvSp+7/i1hzYWLd5zXtY/ewsrx504fdF5PErenT+f81QvyT9Z8bHRfchgBwKEAwKEAwPH2BOoawaoJOt5v1AjR+SZ/+zfprf39vn+gc363wQgADgUADgUATnCCC103iI3tXwjkgdobqRV7hlAojADgUADgUADgZP4l19ej5ktHjaH8C/M9UuOrUz8PY3Limhrxpmzm7G+IDSMAOBQAOBQAOJVf6Lb2JnypuofR+vw8I4gIKABwKABwuu5hfd8aIG8Po4XlYWxd++7VX+2Q/D0G1gBEQAGAQwGA03U1gEXsGiE2M7V3ot13ST+L6MbK+RpGAHAoAHAoAHDgagCLrM9JzBvWAMQJBQAOBQDOLzFifA2FYHwZAAAAAElFTkSuQmCC",
  xl = "data:image/png;base64,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",
  fl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAAgFJREFUeJzt3MFNwzAUBuAWIbEEE7AF7MF2zMEI3ODAnSV6Cee4Vd0oSWPn/75blKiN1F/v2Y7TwwEAAAAAAAAAAAAAAAAA6Mlx6xtINwzDcO388Xhc9Td6WPPDaZ8AhBOAcAIQTgDCCUA4AQi3+3WA2jx7a2vP82tUgHACEE4Awj1ufQP3tnHLPbQ2JFEBwglAOAEIt7sxwNR5/9nlP2+zvv/09Ts6fnr/m/V5a1MBwglAOAEIt7sxQKmc9y89D6/1/Nbm/SUVIJwAhBOAcN2PAWY/758471+655f3f+/9ASpAOAEIJwDhuh8DlNae99fW9qe28K3XCVSAcAIQTgDCdfdewA3v05fXjy+Y+bz/zMvn1dOnj+fRcW3dwDoAdyUA4QQgXPfrAGvP+6uKMUVv+wNUgHACEE4AwnU/BigtPY0evl+vnp/b8/0/AJsSgHACEK77McDcefXUZwe99/ySChBOAMIJQLjmxgC1ffJTe+jc9wb21vNLKkA4AQgnAOGa7k9LuDCmKM+Pjqfu4Su13vNLKkA4AQgnAOG66le3mPvewNQ9hr31/JIKEE4AwglAuOaeBSxt656/9X8A1agA4QQgnACEa6ofLaG29n/h+qvnW+vZS1MBwglAOAEIt/t1gKlbAvfe80sqQDgBCCcAAAAAAAAAAAAAAAAAAAAd+QcizKPAfxkTLQAAAABJRU5ErkJggg==",
  vl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAAkxJREFUeJzt3cFx1DAUBuBdhhmaoALKoA+6Sx2UwJEDd5rIZTlH2cEY6cmy/++7ZXbi9Sb/vCfJsvd2AwAAAAAAAAAAAK7gfvQJVHs8Ho+jz6HH/X4v/R99qDw46xOAcAIQ7uPsN9zqyb097x+O33P4crOHLCpAOAEIJwDhpo8BZmt7/rse+/Nr6fu//vj119c/fftd+v5bVIBwAhBOAMJNHwOMXtteba1/b88/+vRVgHACEE4Awl1uHWD2vH90z6++/t9SAcIJQDgBCHe6McDR8/7Ven7799h7PBUgnACEE4Bwa2+Qe+JJz2tff/sLnfP+1Xr+aCpAOAEIJwDhll8HmD3vv3rPb6kA4QQgnACEW7o/3W718/7V9/B5PgClBCCcAIRbbh2get7fe69e9bTe8wGYSgDCCUC45dYByq/3f/n+X+dVZevzWQeglACEE4Bwy60DlCt+JlCrXXc4+tpCSwUIJwDhBCDc6cYA09fiO/cXrL6HUAUIJwDhBCDc8mOA6nlyb8s9W89vqQDhBCCcAIRbbj/AaKP3F5y957dUgHACEE4Awi2/DrDX6PsKrtbzWypAOAEIJwDhho8Bep9dO9reef/Ve35LBQgnAOEEINzwMcDsHtg771+951ePqVSAcAIQTgDCnWrO+sze6/2vL5/f/Fzd8/eOUdwXwFQCEE4AwsWNATavDTSqv9fv6GsnKkA4AQgnAOEutyewNbvnbzn6u49bKkA4AQgnAOEutw6w19n28I2mAoQTgHACAAAAAAAAAAAAAHABfwC3/v8vAZpBjAAAAABJRU5ErkJggg==",
  yl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAAqtJREFUeJzt3bFRxDAQRmHMMNAEMQkZJdAH3dEHHRASEEMTl5iABAsGY6S1Vn7vy47jfAb+2ZUl4Ts7kyRJkiRJkiRJRzb1PoFa8zzPvc8h0jRNoX+j88iDKz8DAGcA4C56n0BrwS0z3N5DGisAnAGAMwBw6ccA5XX+1uvibz315b7+pCqcnl8Xj68e3judyScrAJwBgDMAcOnHANFz4dHWen7vpQwrAJwBgDMAcOnHAKOp7fn/mOf49YBrx7MCwBkAOAMA5xigs97zHFYAOAMAZwDgHANUip7rX9sPUTuGsALAGQA4AwA33Fr7Dz2xfH75gsZ7APee649mBYAzAHAGAK75PEDt+vTRZP95rQBwBgDOAMClXwvofQ+g2uv+6PN3LUBVDACcAYBrPgaIvu6Nnvtvvb7f+tfRekhhBYAzAHAGAC79PEA2W3v61p59erxePI6+h5AVAM4AwBkAuHRjgN5z/5d3N4vH8/xWd8CVeYne9xCyAsAZADgDAJduv1rvff/Rsv1fgRUAzgDAGQC4dPMAq+z5TVkB4AwAnAGAG24eYIf3X35h45gje88vWQHgDACcAYBLPw8QvR5e23JH6/klKwCcAYAzAHDpxgCte2LrPYaj9/ySFQDOAMAZALhU/ShC6z2G0+3T768vv3/nzwHcygoAZwDgDABcunmAWq2v+6N7fm9WADgDAGcA4ML71drn3u3wfuXzyxcU1/1H7/klKwCcAYAzAHDh8wCj98jS0X4eKwCcAYAzAHDD97M/rJ+X37/p+R+ON/zv7CsrAJwBgDMAcIfbD9D6voK1PX/r/gTvD6BdGQA4AwB3uDFAdmWP7/35CFYAOAMAZwDgDj8GyDZ137vnl6wAcAYAzgDAHW4MkKzFpt8/YAWAMwBwBkCSJEmSJAniA8sG9dXtJ5oqAAAAAElFTkSuQmCC",
  wl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAAtZJREFUeJzt3U1uFDEQhmEaRXATDsANwj24MruwYM8l2DQbNlOJZCz/lCvv++xG0cx0pE/lctvtuT4c7r7vO/saVrqu68r8/o+ZX658BgDOAMA9ZV9Ar+Qhc9hpLY0VAM4AwBkAuHI9QPRqTP35LedC/vnz49fD68/ffyddyf+xAsAZADgDAFe+B8gWx/xqrABwBgDOAMDZA0wW5/2n3fuPrABwBgDOAMDZA3Qanff37gFs7Ykc3VNoBYAzAHAGAM4eYFC1eX9kBYAzAHAGAM4eoGH3vH/2+1usAHAGAM4AwC3vAeK97Ozn4UdVn/dHVgA4AwBnAOCW9wCz179Xm73Pf/b/M7uHsgLAGQA4AwB3/FpAHPJ2nwfQer5/9W2N1S2RFQDOAMAZALjje4Bsu29L7F4qsQLAGQA4AwB33Nr8G/sH4t8f35B8LmCv1jmCrZ7DtQBNZQDgDACc9wEWy36uoMUKAGcA4AwAXPkeYPVZvZ++fpn6eac9V2AFgDMAcAYArlwPsHu9/H7p6wFOn/dHVgA4AwBnAOCm9wCzz7atvifvtHl/ZAWAMwBwBgDuuPsAsUdYfV7Aqz2HL89d768274+sAHAGAM4AwE3vAbLHtGynz/sjKwCcAYAzAHDH3QdoyW4xqs/7IysAnAGAMwBw5XqAKPu8gGrz/sgKAGcA4AwAXPkeoNfqZwmj0Xn/6t9csgLAGQA4AwBXvwcYnPe3fg+gZfW83zOCtJQBgDMAcPV7gIbeef/omH7aen+LFQDOAMAZALh33wNE2efzn8YKAGcA4AwA3HE9wOh5AO9t3/5qVgA4AwBnAOC29wC9e9xGfzdw9b792eci7mYFgDMAcAYAbnsPMDwmhjHfef8YKwCcAYAzAHDHrQWM2v28fvUewgoAZwDgDADccePXG2sFo5/38Lr6mD2bFQDOAMAZALjj7wNUO3evGisAnAGAMwCSJElAfwElasLUXOrQXAAAAABJRU5ErkJggg==",
  jl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAAxtJREFUeJzt3bFx3DAQRmHTo5GbcKwC3IHVh7tzPc6kQLmbUELFBjXG4QDsgnzvC6XhHaX5Z7EgQHL7srh93/fsc5hp27Yt8/u/Zn658hkAOAMAlzr+3KLsAZKHzG6tLc3sHsEKAGcA4AwA3EP2CfTO8w+Hvz73fFyz9z9v//39t19/g87kPlYAOAMAZwDg0nsAOtcClMoAwBkAuPQeoDYGrrYfoHXev9jpH1gB4AwAnAGAS+8BaLLn/SUrAJwBgDMAcIce4JM9eE1jVu/xq1lt3j/6/2sFgDMAcAYA7tAD9I4pZx/zRxv9/yg/r7ZWUvt+KwCcAYAzAHCuBRRWm/fPZgWAMwBwBgBueA/QOy9dbQ9gr9l/j2sB6mIA4AwA3PLXAcohLvp5ALX7+2cvfZR/7+i1BSsAnAGAMwBww3uAq83zo083ejuFFQDOAMAZALjw/XutPUD2dYDRyv0GrfsLvA6goQwAnAGAC18LuNp1gpraHsMa3xegqQwAnAGAq/YAd8zbp45Z77+/z/z4g8cfT0M/b7X7CqwAcAYAzgDANV8HaL0/fbTod/DsL209QO+8P5oVAM4AwBkAuOYeIHrMP/uevOz1/horAJwBgDMAcNUeIHpMir7OcNhz+PKz6fizzftLVgA4AwBnAODC9wRe7X0CpdXn/SUrAJwBgDMAcMvdF3DD8aNO5S7R+/x7n7tYYwWAMwBwBgCuuweYPUbd8P3//iD4eQGr7fNvZQWAMwBwBgBu+WcFjxa9fr/6u5etAHAGAM4AwHX3ANnr2b167zUcPe/3vgCFMgBwBgDu8tcBWuf9vWP62XoiKwCcAYAzAHCX7wFKZ9u3Xxq9VmAFgDMAcAYAbrkeoPl5AMUewLPt289+FrMVAM4AwBkAuOV6gFLvewPPtm8/+hlJVgA4AwBnAOCm9wDD97knz/tHH1+KfhazFQDOAMAZALjh7wsox8To9fTZ8/7RPU32fgMrAJwBgDMAcM3jz+xnAn0yxvZ83KEHyB5zV2MFgDMAcAYArvvdwbOtvn7farX3JVgB4AwAnAGQJEkC+gAjCBSs2IK1XQAAAABJRU5ErkJggg==",
  bl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAA9NJREFUeJztnT1y1EAQhS1qy1yCmAAybgDnMLfjHHADMhMQwyWcLLF6sXp7X49GW+/7MnktjaR61X/TM1oeDs75fD7PvgeFZVkW5fzs+dXrv1FOhvsHAZiDAMw5zb4BFdEFtnNvIQsWwBwEYA4CMGd4DKDmsfH37HoXP//6sn2DCS8/f2/+/vbrX+n68Xni86p5fgYWwBwEYA4CMOfu6wB7E32+mveP9vEZWABzEIA5CMAcOQaYncd2k+X9Gd3PW+2HqI6PBTAHAZiDAMw5XB3gaD2Aat7f3dNXnRvJwAKYgwDMQQDmpDFANc/P/v9oHC3vz+iOkbAA5iAAcxCAOWkM0L22rbsHsJvZ8/1qDFU9HwtgDgIwBwGYU64DqMyu9c/O+0c/P/0AUAIBmIMAzCn3A+xd2o8uM46vrgWs5v1H8+EqWABzEIA5CMCcjnUB6z+I6/GXjz+k81VmxzhX/H9rjyEWwBwEYA4CMOciBhid58ZafPf8e8bjp/dhvD9Dx3v59m51nO0ppL7/6vlYAHMQgDkIwJzhawNn+/wUsW4RqT7v7LoDFsAcBGAOAjDnmnUBq+Pu2v+9o/YYRtT3m8UgESyAOQjAHARgzml07X903h9r7SpxrqDK3nUONQbBApiDAMxBAOZc1AFG5/3V2nfmQ9Vv9lyM97wdAzSsLVyPV3y/1W8YZe8PC2AOAjAHAZjT3w/w4fvqMEuDb+iZu+m2XkOdjx9e52j2+XHdABbAHARgDgIwp9wPkBPy3OfPq+PZPYIXeXi4v8jeeX+3z8/AApiDAMxBAOb8b21g6QJVn1rlaJ8b2Dtmyeoi2fthLgA2QQDmIABzTup+9Bndef/odQmz5/sfn9b7FZyftserzqVEsADmIABzEIA5u38v4N5QY5bquoXHh1pPoHp/WABzEIA5CMAc+XsBR5vvj8zee7i+biG8L3Fuhe8GwiYIwBwEYE77/gBqn/rousPoGKS7n2J0TIUFMAcBmIMAzEn7Abp9svxdPHH9fCSLQbr7JUb7/OrzYAHMQQDmIABz5P0BYq19dvtAd56sxgRVVJ9f/R0LYA4CMAcBmFOOAW6ode9aZ8hQfeYN462OY94/O4bCApiDAMxBAOZcs0fQrgv0u/fUyajGIOr7qPr80f0SWABzEIA5CMAc2b93z59X9xzq9qlqf4Dqowf0HzAXAK+DAMxBAObI+wOM3mMoovb8ZYyem9i7rpKBBTAHAZiDAMxJ/VF3DJBdX3WR8XZn+9y9ewqrYAHMQQDmIABzpvujo+fdR/fhKlgAcxCAOQgAAAAAwJB/s3kQcMKqJVwAAAAASUVORK5CYII=",
  fo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACABAMAAAAxEHz4AAAAD1BMVEVHcEz284nytSDliicgGCcE4LS5AAAAAXRSTlMAQObYZgAAAJ5JREFUeNrt2LsNgDAMRVEKFuAzAYwAA4DE/jNBCmyF/IkEzX113qmsyHITyJGIPAQACKQ1D7or/fTMvFxZAQAqAOlu5hEAQKq7m7I7gNoFAPgY0Al2AgAQAKTbT950d0YAgApAtzQAgBjgT2BLAwBwu7G59CxZAADlgP2JAQBIsg8QgzWAAAB/AbrXAwAURQ8QMoAAAC8BvVQBAOTmBHvqugmDIq+UAAAAAElFTkSuQmCC",
  Za = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAAXNSR0IArs4c6QAAAFRQTFRFICo/9c+d/88A+Ldj/8UB0bqh/78A/7cA/60Ax6uV7bEK/6QA/6AA/5kA/5IA1qASop2exJ40/4UAsIA0eX6JlHpOeWhPV2ByYFZLMzxRGSc+ESE7VlFONgAAAadJREFUeNrt121vgyAUhmGnKFRb6ltbOOf//8/x4Jgm7ZKJZGkWbr80fLiCPVLTIpfL5XK5v8zacTydiN4VJJqmcdSa+X1BfRldfU/JQK09WKTJGO3FqmJOBaJUILPWl4v2PR4JQArgmAQksvZ8vrjwLdY1M/niwWIFdSyIXRnf7TZNSnXdusePj7ruXfP8eFi7B7SvQB0Htq0QTSNdytU58JuEuYl5D9goqdBx0BgPLn2h50BuzKr63XDoDtCLCpfqcAXQtwtE1oKUMJ9uO9x4XRdoFwjuCdQxIBoG7O56nSZj8CgxSwlyQfGIJwK9GQOCIFdB+GSMWkbjUqrvwcWCrgVUAew8GBew+32dNsh5JnDHQCU9F0CK5oBtTw1Q/MweA9dTAy8eJBoG4WogNmGPGMlxcN2j6xQLWluWALd7BFhVsVPeguvJltHv59vNgZ4sy+s1oBjSEVBsQYgqFmRu29LXttbiIE6TENIX9eDQj2ATCdLCGcNcUHi9VhWm3fcHwbBSAJSxIAsxDMVT8yzEPEeAnBZERK9XsZ4QxHr+K5jL5XL/oU+kODawNDIwtAAAAABJRU5ErkJggg==",
  Lt = {
    1: fl,
    5: vl,
    10: yl,
    100: wl,
    500: jl,
    1e3: bl,
    default: fo
  },
  Nl = (t, n) => n < 5 ? Lt[1] : n < 10 ? Lt[5] : n < 100 ? Lt[10] : n < 500 ? Lt[100] : n < 1e3 ? Lt[500] : Lt[1e3],
  Ht = {
    1: rl,
    5: cl,
    10: ll,
    100: dl,
    500: ul,
    1e3: Al,
    default: _o
  },
  Il = (t, n) => n < 5 ? Ht[1] : n < 10 ? Ht[5] : n < 100 ? Ht[10] : n < 500 ? Ht[100] : n < 1e3 ? Ht[500] : Ht[1e3],
  Cl = () => an,
  Pl = () => ho,
  Sl = () => go,
  qt = {
    1: ml,
    5: pl,
    10: hl,
    100: gl,
    500: _l,
    1e3: xl,
    default: xo
  },
  Bl = (t, n) => n < 5 ? qt[1] : n < 10 ? qt[5] : n < 100 ? qt[10] : n < 500 ? qt[100] : n < 1e3 ? qt[500] : qt[1e3],
  vi = {
    9: uo,
    10: Ao,
    11: mo
  },
  ua = (t, n) => vi[t] ? vi[t] : Za,
  Tl = () => Za,
  Aa = {
    1: Nl,
    2: Il,
    13: Cl,
    4: Pl,
    5: Sl,
    6: Bl,
    9: ua,
    10: ua,
    11: ua,
    default: Tl
  },
  vo = (t, n) => Aa[t] ? Aa[t](t, n) : Aa.default(),
  El = ({
    item: t,
    active: n,
    amount: s = 1,
    type: a = "sale"
  }) => {
    var d;
    const i = g(),
      o = c(u => u.shop.selectedCurrency),
      r = (d = t.prices.filter(u => u.currency_id === o)[0]) == null ? void 0 : d.price,
      l = [pe.info_row];
    return e.jsxs("div", {
      className: l.join(" "),
      onPointerUp: () => {
        n && (i(st(t.id)), i(at()))
      },
      children: [e.jsxs("div", {
        className: pe.info_row_content,
        children: [e.jsxs("div", {
          children: [e.jsx("div", {
            className: pe.row_icon_container,
            children: e.jsx("img", {
              alt: "",
              src: vo(t.id, s),
              className: pe.row_icon
            })
          }), e.jsx("div", {
            className: pe.row_title,
            children: e.jsx("span", {
              children: t.name.replace("charges", "").replace("' Snap", "").replace(" Snap", "")
            })
          })]
        }), e.jsxs("div", {
          className: pe.row_price_container,
          children: [r && e.jsxs("span", {
            className: pe.main_info_channel_users,
            children: [e.jsx(ol, {}), e.jsx(Ve, {
              num: r
            })]
          }), !r && e.jsx("span", {
            className: pe.main_info_channel_users,
            children: "No"
          })]
        })]
      }), a === "sale" && e.jsx("div", {
        className: pe.info_row_sale,
        children: "-50%"
      }), a === "limited" && e.jsx("div", {
        style: {
          backgroundColor: "#026e4f",
          color: "white",
          lineHeight: 1
        },
        className: pe.info_row_sale,
        children: "Limited"
      }), a === "event" && e.jsx("div", {
        className: pe.info_row_sale,
        style: {
          backgroundColor: "#850294",
          color: "white",
          lineHeight: 1
        },
        children: "Event"
      })]
    })
  },
  Dl = "_panel_1iadi_1",
  kl = "_item_1iadi_11",
  Rl = "_active_1iadi_25",
  ma = {
    panel: Dl,
    item: kl,
    active: Rl
  },
  Ml = {
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
  $n = Ml,
  Ul = () => window.location.hostname.split(".").length === 3,
  Ol = () => !1,
  yo = () => window.location.hostname.includes("dev"),
  Ql = () => yo() ? $n.VITE_ADSGRAM_BLOCK_ID : Ul() ? "4853" : "4995",
  yt = {
    isDev: Ol(),
    devServer: yo(),
    devUserInitData: $n.VITE_INIT_DATA || null,
    apiBaseUrl: $n.VITE_API_URL,
    app: {
      disableBetaError: $n.VITE_DISABLE_BETA_ERROR,
      adsgramBlockId: Ql()
    }
  },
  Fl = () => window.Telegram.WebApp.isVersionAtLeast(8) ? window.Telegram.WebApp.safeAreaInset : {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  Gl = () => window.Telegram.WebApp.isVersionAtLeast(8) ? window.Telegram.WebApp.contentSafeAreaInset : {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  zl = {
    deviceType: "unknown",
    os: "unknown",
    platform: "unknown",
    fullscreen: window.Telegram.WebApp.isVersionAtLeast("8.0") || yt.isDev,
    safeAreaInset: Fl(),
    contentSafeAreaInset: Gl()
  },
  wo = ge({
    name: "device",
    initialState: zl,
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
    setDeviceInfo: Ll,
    setFullscreen: Hl
  } = wo.actions,
  At = t => t.device.platform,
  ql = t => t.device.os,
  Yl = t => t.device.deviceType,
  It = t => t.device.fullscreen,
  Ws = t => t.device.contentSafeAreaInset,
  Zs = t => t.device.safeAreaInset,
  Xl = wo.reducer,
  Vl = () => {
    const [t, n] = A.useState("Stars"), s = c(At);
    return e.jsx("div", {
      className: ma.panel,
      children: ["Star Shop"].map(a => e.jsxs("div", {
        className: `${ma.item} ${t===a?ma.active:""}`,
        onPointerUp: () => {
          n(a)
        },
        children: [s === ye && e.jsx("h1", {
          children: "TON Shop"
        }), s !== ye && e.jsx("h1", {
          children: "Star Shop"
        })]
      }, a))
    })
  },
  Jl = "_layout_q8u4d_1",
  Wl = "_content_q8u4d_22",
  yi = {
    layout: Jl,
    content: Wl
  },
  Zl = "_header_btihg_1",
  Kl = "_header_bottom_container_btihg_14",
  $l = "_header_bottom_btihg_14",
  ed = "_header_placeholder_btihg_39",
  td = "_header_content_btihg_45",
  nd = "_league_btihg_56",
  sd = "_bronze_btihg_66",
  ad = "_silver_btihg_67",
  id = "_gold_btihg_68",
  od = "_platinum_btihg_69",
  rd = "_diamond_btihg_70",
  cd = "_logo_link_btihg_72",
  ld = "_logo_btihg_72",
  Oe = {
    header: Zl,
    header_bottom_container: Kl,
    header_bottom: $l,
    header_placeholder: ed,
    header_content: td,
    league: nd,
    bronze: sd,
    silver: ad,
    gold: id,
    platinum: od,
    diamond: rd,
    logo_link: cd,
    logo: ld
  },
  dd = () => e.jsx("div", {
    className: Oe.header_placeholder
  }),
  Ms = "data:image/png;base64,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",
  ud = "_image_1nx2h_1",
  wi = {
    image: ud
  },
  Ad = () => {
    const t = c(It);
    return e.jsxs(ae.Fragment, {
      children: [e.jsx("img", {
        alt: "web",
        src: Ms,
        className: wi.image,
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
        src: Ms,
        className: wi.image,
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
  md = {
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
    return e.jsxs(Sn.div, {
      className: yi.layout,
      style: {
        overflow: n ? "hidden" : ""
      },
      ...md,
      children: [e.jsx(dd, {}), e.jsx("div", {
        className: yi.content,
        children: t
      }), e.jsx(Ad, {})]
    })
  },
  M = (t, n) => Math.floor(Math.random() * (n - t + 1) + t),
  pd = t => `${t.includes("@")?"":"@"}${t}`,
  ji = t => t.replace("@", ""),
  Rn = (t, n = 18, s = !0) => t.slice(0, n) + (t.length > n && s ? "..." : ""),
  Ct = t => {
    window.Telegram.WebApp.openLink(t)
  },
  ee = t => {
    window.Telegram.WebApp.openTelegramLink(t)
  },
  Ka = () => {
    const t = "some_test_local_storage_key";
    try {
      return localStorage.setItem(t, t), localStorage.removeItem(t), !0
    } catch {
      return !1
    }
  },
  Mn = async t => {
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
  }, jo = t => new Promise(n => setTimeout(n, t)), hd = t => {
    if (!t || !t.x || !t.y || isNaN(t.x) || isNaN(t.y)) return !1;
    const n = Number(t.x),
      s = Number(t.y);
    return !(n < 0 || s < 0 || n >= B.width || s >= B.height)
  }, gd = () => {
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
      return hd(n.coords) || (n.coords = !1), n.showTemplate && (n.coords = !1), n
    } catch {
      return {
        coords: !1,
        squad: !1,
        refId: !1,
        showTemplate: !1
      }
    }
  }, tn = t => {
    if (isNaN(t)) return "";
    let n = "";
    return t >= 1e3 ? (n += (t / 1e3).toFixed(1), n += "k") : n += t.toFixed(0), n
  }, _d = t => {
    if (isNaN(t)) return "0 min";
    const n = Math.ceil(t / 3600),
      s = Math.ceil(t % 3600 / 60);
    let a = "";
    return n > 0 ? a += `${n} hour${n!==1?"s":""} ` : a += `${s} min`, a
  }, xd = t => {
    if (isNaN(t)) return "0 min";
    let n = "";
    const s = Math.floor(t / 3600),
      a = Math.floor(t % 3600 / 60);
    return n += s, n += "h ", n += a > 9 ? a : `0${a}`, n += "m", n
  }, Da = t => !0, fd = "_layout_13e1w_1", vd = "_container_13e1w_10", yd = "_star_13e1w_14", wd = "_move_13e1w_1", Hn = {
    layout: fd,
    container: vd,
    star: yd,
    move: wd
  }, jd = "_link_1fn8i_1", bd = "_telegram_icons_1fn8i_13", bo = {
    link: jd,
    telegram_icons: bd
  }, I = ({
    children: t,
    className: n = "",
    style: s = {},
    size: a = 12
  }) => t ? e.jsx("span", {
    className: `${bo.telegram_icons} ${n}`,
    style: {
      fontSize: a,
      ...s
    },
    children: t
  }) : null, Nd = A.memo(() => {
    console.log("render");
    const t = Array.from(Array(30)),
      n = c(At);
    return e.jsx("div", {
      className: Hn.layout,
      children: e.jsx("div", {
        className: Hn.container,
        children: t.map((s, a) => {
          const i = M(4, 14);
          return n === ye ? e.jsx(I, {
            size: i,
            className: Hn.star,
            style: {
              animationDelay: `-${a*300}ms`,
              transform: `translate(${M(-80,-170)*(a%2===1?1:-1)}px, ${M(-100,100)}px)`
            },
            children: ""
          }, a) : e.jsx(on, {
            fontSize: i,
            className: Hn.star,
            style: {
              animationDelay: `-${a*300}ms`,
              transform: `translate(${M(-80,-170)*(a%2===1?1:-1)}px, ${M(-100,100)}px)`
            }
          }, a)
        })
      })
    })
  }, () => !1), Id = "_layout_1nbfl_1", Cd = "_button_1nbfl_14", bi = {
    layout: Id,
    button: Cd
  }, Pd = () => {
    const t = J();
    return e.jsx("div", {
      className: bi.layout,
      children: e.jsx("div", {
        className: bi.button,
        onPointerUp: () => t.push("/pay-support"),
        children: "Pay support"
      })
    })
  }, Sd = "_layout_gx8in_1", Bd = "_container_gx8in_5", Td = "_item_gx8in_11", Ed = "_active_gx8in_20", Dd = "_image_container_gx8in_24", kd = "_image_gx8in_24", Rd = "_item_text_container_gx8in_34", Md = "_item_text_gx8in_34", mt = {
    layout: Sd,
    container: Bd,
    item: Td,
    active: Ed,
    image_container: Dd,
    image: kd,
    item_text_container: Rd,
    item_text: Md
  }, Us = Dn(), Os = Dn(), Qs = Dn({
    sortComparer: (t, n) => t.id - n.id
  }), $a = Dn(), Nn = Dn(), Ud = {
    user: null,
    country: null,
    languageCode: "en",
    pixelsForSale: Us.getInitialState(),
    pixelsForSaleOffset: 0,
    pixelsForSaleLimit: 10,
    pixelsForSaleTotal: 0,
    totalPrice: 0,
    pixelCoins: 0,
    pixelsSold: Os.getInitialState(),
    pixelsSoldOffset: 0,
    pixelsSoldLimit: 10,
    pixelsSoldTotal: 0,
    pixelsForSaleFetchStatus: p.idle,
    pixelsSoldFetchStatus: p.idle,
    getUserFetchStatus: p.idle
  }, es = G("user/getUserPixels", async ({
    offset: t,
    limit: n
  }) => (await X.getUserPixels({
    offset: t,
    limit: n
  })).data), ts = G("user/getPixelsForSaleTotal", async () => (await X.getUserPixelsCount()).data), ns = G("user/getUserPixelsSold", async ({
    offset: t,
    limit: n
  }, s) => (await X.getUserPixelsSold({
    offset: t,
    limit: n
  })).data), ss = G("user/getUser", async (t, {
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
  }), No = ge({
    name: "user",
    initialState: Ud,
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
      setPixelsForSaleFetchStatus: (t, n) => {
        t.pixelsForSaleFetchStatus = n.payload.status
      },
      removePixelsForSale: t => {
        Us.removeAll(t.pixelsForSale)
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
        Os.removeAll(t.pixelsSold)
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
      t.addCase(es.pending, n => {
        n.pixelsForSaleFetchStatus = p.pending
      }).addCase(es.fulfilled, (n, s) => {
        Us.upsertMany(n.pixelsForSale, s.payload.pixels), n.totalPrice = s.payload.totalPrice, n.pixelsForSaleTotal = s.payload.total, n.pixelsForSaleFetchStatus = p.fulfilled
      }).addCase(es.rejected, n => {
        n.pixelsForSaleFetchStatus = p.rejected
      }).addCase(ns.pending, n => {
        n.pixelsSoldFetchStatus = p.pending
      }).addCase(ns.fulfilled, (n, s) => {
        Os.upsertMany(n.pixelsSold, s.payload.pixels), n.pixelsSoldTotal = s.payload.total, n.pixelsSoldFetchStatus = p.fulfilled
      }).addCase(ns.rejected, n => {
        n.pixelsSoldFetchStatus = p.rejected
      }).addCase(ss.pending, n => {
        n.getUserFetchStatus = p.pending
      }).addCase(ss.fulfilled, (n, s) => {
        n.user = {
          ...s.payload.data
        }, n.country = s.payload.country, n.getUserFetchStatus = p.fulfilled
      }).addCase(ss.rejected, (n, s) => {
        n.getUserFetchStatus = p.rejected
      }).addCase(ts.pending, n => {}).addCase(ts.fulfilled, (n, s) => {
        n.pixelsForSaleTotal = s.payload.myPixelsCount
      }).addCase(ts.rejected, n => {})
    }
  }), {
    setLanguageCode: Od,
    setPixelsForSaleOffset: Io,
    setPixelsForSaleTotal: Qd,
    setPixelsForSaleFetchStatus: Fd,
    removePixelsForSale: Gd,
    setPixelsSoldOffset: G3,
    setPixelsSoldTotal: z3,
    setPixelsSoldFetchStatus: L3,
    removePixelsSold: H3,
    addPixelCoins: Qt,
    subtractPixelCoins: zd,
    setPixelCoins: Co,
    updateUserSquad: Ld
  } = No.actions, Po = t => {
    const n = t.user.user;
    return n === null ? null : n.league || null
  }, Hd = t => t.user.userPic, Le = t => t.user.user, qd = No.reducer, Ut = {
    getPixelsForSale: es,
    getPixelsForSaleTotal: ts,
    getPixelsSold: ns,
    getUser: ss
  }, Yd = () => {
    const t = g(),
      n = c(Wa),
      s = c(i => i.shop.selectedCurrency),
      a = c(At);
    return c(Le), A.useEffect(() => {
      a === ye && s === 1 && t(Bn(2))
    }, [a]), a !== ye ? null : e.jsx("div", {
      className: mt.layout,
      children: e.jsx("div", {
        className: mt.container,
        children: n.map(i => {
          if (i.currency_id === 1) return null;
          const o = s === i.currency_id;
          return e.jsxs("div", {
            className: R(mt.item, o ? mt.active : ""),
            onPointerUp: () => {
              t(Bn(i.currency_id))
            },
            children: [e.jsx("div", {
              className: mt.image_container,
              children: e.jsx("img", {
                alt: "img",
                className: mt.image,
                src: i.image
              })
            }), e.jsx("div", {
              className: mt.item_text_container,
              children: e.jsx("span", {
                className: mt.item_text,
                children: i.name
              })
            })]
          }, i.currency_id)
        })
      })
    })
  }, Xd = "/assets/icon_coin-COCalNMQ.gif", Vd = "/assets/icon_stars-BmDiRMAW.gif", Jd = {
    items: []
  }, So = ge({
    name: "toast",
    initialState: Jd,
    reducers: {
      addToast: (t, n) => {
        t.items.push(n.payload)
      },
      removeToast: (t, n) => {
        t.items = t.items.filter(s => s.id !== n.payload)
      }
    }
  }), {
    addToast: z,
    removeToast: Ni
  } = So.actions, Wd = So.reducer, Zd = () => {
    const t = g(),
      n = c(At),
      [s, a] = A.useState(1);
    return e.jsx("img", {
      alt: "img",
      className: pe.stars_img,
      src: n === ye ? Xd : Vd,
      onPointerUp: () => {
        (n !== ye || yt.isDev) && (s >= 7 ? (a(1), t(z({
          id: performance.now(),
          text: "Check every 11th word",
          icon: ""
        }))) : a(s + 1))
      }
    })
  }, Kd = ["#FFD700", "#ffc60a", "#FFDF00"], $d = () => {
    g();
    const t = c(i => i.shop.order),
      n = c(i => i.shop.products),
      s = c(i => i.shop.available),
      a = c(At);
    return A.useEffect(() => {}, []), e.jsxs(ue, {
      children: [e.jsxs("div", {
        className: pe.stars_img_container,
        children: [e.jsx(Zd, {}), e.jsx(Nd, {
          color: () => Kd[M(0, 2)]
        })]
      }), e.jsx(Vl, {}), e.jsxs("div", {
        className: pe.description_container,
        children: [a !== ye && e.jsxs("span", {
          className: pe.description,
          children: ["Exclusive offers for brave Pixels. ", e.jsx("br", {}), "We've got something fun", " "]
        }), a === ye && e.jsxs("span", {
          className: pe.description,
          children: ["Weve got something fun", e.jsx("br", {}), "Buy with tokens, saving ≈30%"]
        })]
      }), e.jsxs("div", {
        className: pe.info_layout,
        children: [e.jsx(Yd, {}), e.jsx("div", {
          className: pe.info_container,
          children: t.map(i => {
            if (n.hasOwnProperty(i)) {
              const o = n[i];
              let r = !((i === 4 || i === 5) && s[i] > 0);
              {
                let l = i >= 9 && i <= 11 ? "limited" : "sale";
                return e.jsx(El, {
                  item: o,
                  active: r,
                  type: l
                }, i)
              }
            }
            return null
          })
        }), e.jsx(Pd, {})]
      })]
    })
  }, eu = "_text_layout_1xggq_1", tu = "_text_1xggq_1", nu = "_button_layout_1xggq_14", su = "_button_layout_placeholder_1xggq_26", au = "_button_1xggq_14", hn = {
    text_layout: eu,
    text: tu,
    button_layout: nu,
    button_layout_placeholder: su,
    button: au
  }, Un = "data:image/svg+xml,%3csvg%20height='18'%20viewBox='0%200%2017%2018'%20width='17'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='m.32%208.22c4.81-2.07%208.02-3.43%209.62-4.08%203.48-1.43%204.87-1.96%205.61-2.13.23-.06%201.45.29%201.45%201.18%200%202.58-1.32%208.8-1.87%2011.67-.23%201.22-1.88%201.6-3.74.45-1.47-.91-2.27-1.52-3.68-2.44-1.63-1.05-.58-1.63.35-2.58.25-.25%204.47-4.03%204.55-4.37.01-.04.02-.2-.08-.29-.09-.08-.24-.05-.34-.03-.14.03-2.46%201.54-6.96%204.53-.66.44-1.25.66-1.79.65-.59-.02-1.15-.05-2.56-.6-.94-.37-1.13-1.02-.56-1.96z'%20fill='%23fff'%20fill-rule='evenodd'/%3e%3c/svg%3e", iu = () => e.jsxs(ue, {
    children: [e.jsx("div", {
      className: hn.text_layout,
      children: e.jsx("span", {
        className: hn.text,
        children: e.jsx("h1", {
          children: "Probably nothing"
        })
      })
    }), e.jsx("div", {
      className: hn.button_layout_placeholder
    }), e.jsx("div", {
      className: hn.button_layout,
      children: e.jsxs("button", {
        className: hn.button,
        onPointerUp: () => {
          ee("https://t.me/notpixel_channel")
        },
        children: [e.jsx("img", {
          alt: "tg_logo",
          src: Un
        }), "Telegram Channel"]
      })
    })]
  }), ou = "_content_9ogc8_1", ru = {
    content: ou
  }, cu = () => {
    const t = J();
    return e.jsx(ue, {
      children: e.jsxs("div", {
        className: ru.content,
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
  }, lu = "_content_7fuxa_1", du = {
    content: lu
  }, uu = () => e.jsx(ue, {
    children: e.jsxs("div", {
      className: du.content,
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
  }), Au = "_pixels_amount_ngjsa_1", mu = "_general_info_container_ngjsa_6", pu = "_coin_amount_text_ngjsa_12", hu = "_description_container_ngjsa_16", gu = "_description_ngjsa_16", qn = {
    pixels_amount: Au,
    general_info_container: mu,
    coin_amount_text: pu,
    description_container: hu,
    description: gu
  }, _u = "_logo_container_1i5of_1", xu = {
    logo_container: _u
  }, fu = "_layout_1cvcu_1", vu = "_container_1cvcu_10", yu = "_bubble_1cvcu_16", wu = "_move_1cvcu_1", pa = {
    layout: fu,
    container: vu,
    bubble: yu,
    move: wu
  }, ju = A.memo(({
    color: t
  }) => {
    const n = Array.from(Array(200));
    return e.jsx("div", {
      className: pa.layout,
      children: e.jsx("div", {
        className: pa.container,
        children: n.map((s, a) => {
          const i = M(1, 8);
          return e.jsx("div", {
            className: pa.bubble,
            style: {
              width: i,
              height: i,
              animationDelay: `-${a*300}ms`,
              transform: `translate3d(${M(-200,500)}px, ${M(-200,200)}px, ${M(0,33)}px)`,
              background: t()
            }
          }, a)
        })
      })
    })
  }, () => !1), bu = "_container_1aw3i_1", Nu = "_logo_1aw3i_9", Iu = "_animate_1aw3i_1", Cu = "_center_1aw3i_18", Pu = "_glow_1aw3i_28", Yn = {
    container: bu,
    logo: Nu,
    animate: Iu,
    center: Cu,
    glow: Pu
  }, Su = () => e.jsxs("div", {
    className: Yn.container,
    children: [e.jsx("div", {
      className: Yn.glow
    }), e.jsx("div", {
      className: Yn.logo
    }), e.jsx("div", {
      className: Yn.center
    })]
  }), Bu = () => e.jsxs("div", {
    className: xu.logo_container,
    children: [e.jsx(ju, {
      color: () => `hsl(${M(0,360)} , 1000%, 50%)`
    }), e.jsx(Su, {})]
  }), Tu = "_container_13oyr_1", Eu = "_button_13oyr_11", Du = "_info_13oyr_32", ft = {
    container: Tu,
    button: Eu,
    info: Du
  };
class Ks {
  static async claim() {
    return C.get("/mining/claim")
  }
  static async info() {
    return C.get("/mining/status")
  }
  static async checkBoost({
    key: n
  }) {
    return C.get(`/mining/boost/check/${n}`)
  }
  static async checkTask({
    key: n
  }) {
    let s = n,
      a = "";
    if (n === v["channel:notpixel_channel"] || n === v["channel:notcoin"]) {
      const i = n.split(":");
      s = i[0], a = `?name=${i[1]}`
    }
    if (n === v["x:notpixel"] || n === v["x:notcoin"]) {
      const i = n.split(":");
      s = i[0], a = `?name=${i[1]}`
    }
    return C.get(`/mining/task/check/${s}${a}`)
  }
}
const as = G("mining/info", async () => (await Ks.info()).data),
  is = G("mining/claim", async () => (await Ks.claim()).data),
  os = G("mining/checkTask", async ({
    key: t
  }) => (await Ks.checkTask({
    key: t
  })).data),
  rs = G("mining/checkBoost", async ({
    key: t
  }) => (await Ks.checkBoost({
    key: t
  })).data),
  ku = {
    info: null,
    tasks: {},
    walletVerification: null,
    boosts: {
      [he.paintReward]: 1,
      [he.reChargeSpeed]: 1,
      [he.energyLimit]: 1
    },
    checkError: {},
    toggleAction: {
      [v.invite1fren]: !0,
      [v.invite3frens]: !0,
      [v.makePixelAvatar]: !0,
      [v.pixelInNickname]: !0,
      [v.boostChannelNotPixel]: !0,
      [v.boostChannelNotCoin]: !0,
      [v.walletConnection]: !0,
      [v.walletVerification]: !0,
      [v["channel:notpixel_channel"]]: !0,
      [v["channel:notcoin"]]: !0,
      [v["x:notpixel"]]: !0,
      [v["x:notcoin"]]: !0,
      [v.jettonTask]: !0,
      [v.limeTask]: !0,
      [v.boinkTask]: !0,
      [v.nikolai]: !0,
      [v.solitaireGame]: !0,
      [v.tonDurakGame]: !0,
      [v.unitsWallet]: !0,
      [v.sashaX]: !0,
      [v.utgardApp]: !0,
      [v.earnCoin]: !0,
      [v.frogApp]: !0,
      [v.tonPoker]: !0,
      [v.flappyBird]: !0,
      [v.hauntedSpace]: !0,
      [v.capsGame]: !0,
      [v.taskTypeCampaign1_74262]: !0,
      [v.taskTypeCampaign1_74264]: !0,
      [v.taskTypeCampaign2_74263]: !0,
      [v.taskTypeCampaign2_74265]: !0,
      [v.taskTypeCampaign3_74388]: !0,
      [v.taskTypeCampaign4_74434]: !0,
      [v.skinlabTask]: !0,
      [v.nerdGame]: !0
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
  Bo = ge({
    name: "mining",
    initialState: ku,
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
      t.addCase(as.pending, n => {
        n.infoStatus = p.pending
      }).addCase(as.fulfilled, (n, s) => {
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
      }).addCase(as.rejected, n => {
        n.infoStatus = p.rejected
      }).addCase(is.pending, n => {
        n.claimStatus = p.pending
      }).addCase(is.fulfilled, n => {
        n.claimStatus = p.fulfilled, n.info = {
          ...n.info,
          coins: 0,
          initTs: Date.now(),
          coinsFromUpdate: 0,
          fromStart: 0,
          fromUpdate: 0
        }
      }).addCase(is.rejected, n => {
        n.claimStatus = p.rejected
      }).addCase(os.pending, (n, s) => {
        const a = s.meta.arg.key;
        n.checkStatuses[a] = p.pending, n.checkError[a] = !1
      }).addCase(os.fulfilled, (n, s) => {
        const a = s.meta.arg.key;
        n.checkStatuses[a] = p.fulfilled, n.tasks[a] = s.payload[a], n.checkError[a] = !s.payload[a]
      }).addCase(os.rejected, (n, s) => {
        const a = s.meta.arg.key;
        n.checkStatuses[a] = p.rejected, n.checkError[a] = !0
      }).addCase(rs.pending, (n, s) => {
        const a = s.meta.arg.key;
        n.checkStatuses[a] = p.pending, n.checkError[a] = !1
      }).addCase(rs.fulfilled, (n, s) => {
        const a = s.meta.arg.key;
        n.checkStatuses[a] = p.fulfilled, s.payload[a] && (n.boosts[a] += 1), n.checkError[a] = !s.payload[a]
      }).addCase(rs.rejected, (n, s) => {
        const a = s.meta.arg.key;
        n.checkStatuses[a] = p.rejected, n.checkError[a] = !0
      })
    }
  }),
  ha = t => {
    const n = he.paintReward,
      s = t.main.settings,
      a = s.UpgradeRepaint,
      i = t.mining.boosts[n];
    return i === 1 ? s.RepaintReward : a.levels[i].Boost
  },
  {
    setCheckError: Ru,
    setActiveTab: ka,
    setToggleAction: To,
    setAllToggleActions: Mu,
    setMaxCharges: Uu,
    setRechargeSpeed: Ou,
    setCharges: Qu,
    addCharges: Eo,
    addAddedCharges: Fu,
    subCharges: Gu,
    restoreCharges: q3,
    setTask: Y3
  } = Bo.actions,
  zu = Bo.reducer,
  be = {
    info: as,
    claim: is,
    checkTask: os,
    checkBoost: rs
  },
  Ce = "data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M5%200C2.23858%200%200%202.23858%200%205V27C0%2029.7614%202.23858%2032%205%2032H27C29.7614%2032%2032%2029.7614%2032%2027V5C32%202.23858%2029.7614%200%2027%200H5ZM21.4261%2010.5739H10.5739V21.4261H21.4261V10.5739Z'%20fill='white'/%3e%3c/svg%3e",
  Lu = "data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M5%200C2.23858%200%200%202.23858%200%205V27C0%2029.7614%202.23858%2032%205%2032H27C29.7614%2032%2032%2029.7614%2032%2027V5C32%202.23858%2029.7614%200%2027%200H5ZM21.4261%2010.5739H10.5739V21.4261H21.4261V10.5739Z'%20fill='%238794a1'/%3e%3c/svg%3e",
  Hu = {
    white: Ce,
    gray: Lu
  },
  U = ({
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
    src: Hu[a],
    ...i
  }),
  qu = ({
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
  Yu = ({
    left: t,
    secFromInit: n,
    setRunParticle: s
  }) => {
    const a = g(),
      i = c(u => u.mining.claimStatus),
      [o, r] = A.useState(!1),
      l = c(u => u.mining.info),
      {
        reward: d
      } = qu({
        info: l,
        secFromInit: n
      });
    return A.useEffect(() => {
      o && setTimeout(() => {
        r(!1)
      }, 2e3)
    }, [o]), t > 0 || l.coins === 0 && l.speedPerSecond === 0 ? null : o ? e.jsx("div", {
      className: ft.info,
      children: "Something went wrong..."
    }) : i === p.pending ? e.jsx("div", {
      className: ft.info,
      children: "Claiming..."
    }) : e.jsx(ae.Fragment, {
      children: e.jsxs("button", {
        style: {
          fontFamily: "arial",
          fontSize: 17
        },
        className: ft.button,
        onPointerUp: async () => {
          var u, h;
          try {
            const _ = await a(be.claim()).unwrap();
            await a(Qt(_.claimed)), s(!0), (h = (u = window.Telegram.WebApp) == null ? void 0 : u.HapticFeedback) == null || h.notificationOccurred("success")
          } catch (_) {
            r(!0), console.warn(_)
          }
        },
        children: [e.jsx("span", {
          style: {
            transform: "translate(0px, 1px)"
          },
          children: "Claim"
        }), " ", e.jsx(U, {
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
  Xu = ({
    left: t
  }) => {
    const n = c(s => s.mining.info);
    return t <= 0 || n.coins === 0 && n.speedPerSecond === 0 ? null : e.jsxs("div", {
      className: ft.info,
      children: ["CLAIM IN ", t, " MIN"]
    })
  },
  Vu = "_layout_1at34_1",
  Ju = "_container_1at34_10",
  Wu = "_item_1at34_14",
  ga = {
    layout: Vu,
    container: Ju,
    item: Wu
  },
  Zu = 8,
  Ku = 16,
  $u = 500,
  Do = 800,
  Ii = window.innerWidth,
  Ci = 100,
  eA = () => Array.from(Array(100)).map(() => {
    const t = M(Zu, Ku),
      n = `hsl(${M(0,360)} , 70%, 50%)`,
      s = M($u, Do),
      a = M(-Ii, Ii),
      i = M(-Ci, Ci);
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
  ko = A.memo(({
    runParticle: t,
    setRunParticle: n
  }) => {
    const [s, a] = A.useState(eA()), [i, o] = A.useState(!1);
    return A.useEffect(() => {
      t && setTimeout(() => {
        o(!0), setTimeout(() => {
          n(!1), o(!1)
        }, Do)
      }, 200)
    }, [t]), e.jsx("div", {
      className: ga.layout,
      style: {
        visibility: t ? "visible" : "hidden"
      },
      children: e.jsx("div", {
        className: ga.container,
        children: s.map((r, l) => e.jsx("div", {
          className: ga.item,
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
  tA = () => {
    const t = c(n => n.mining.info);
    return t.coins === 0 && t.speedPerSecond === 0 ? e.jsx("div", {
      className: ft.info,
      children: "Paint a pixel to start mining"
    }) : null
  },
  nA = (t, n) => {
    const s = n * 60,
      a = Math.max(s - t, 0);
    return Math.ceil(a / 60)
  },
  sA = () => {
    const t = c(d => d.mining.info),
      [n, s] = A.useState(0),
      a = t.fromStart + n,
      i = c(d => d.main.settings.MinTimeToClaim),
      o = nA(a, i),
      [r, l] = A.useState(!1);
    return A.useEffect(() => {
      let d = null;
      if (t !== null) {
        const u = () => {
          const h = (Date.now() - t.initTs) / 1e3;
          if (h + t.fromStart > t.maxMiningTime) {
            clearInterval(d);
            return
          }
          s(h)
        };
        u(), d = setInterval(u, 100)
      }
      return () => {
        clearInterval(d)
      }
    }, [t]), e.jsxs("div", {
      className: ft.container,
      children: [e.jsx(ko, {
        runParticle: r,
        setRunParticle: l
      }), e.jsx(Yu, {
        secFromInit: n,
        left: o,
        setRunParticle: l
      }), e.jsx(Xu, {
        left: o
      }), e.jsx(tA, {})]
    })
  },
  aA = () => e.jsx("div", {
    className: ft.container,
    children: e.jsx("div", {
      className: ft.info,
      children: "Loading..."
    })
  }),
  iA = () => c(n => n.mining.infoStatus) !== p.fulfilled ? e.jsx(aA, {}) : e.jsx(sA, {}),
  oA = () => {
    const t = c(n => n.user.pixelCoins);
    return new Intl.NumberFormat("fr", {
      maximumFractionDigits: 0
    }).format(Math.max(t, 0)).replace(",", ".")
  },
  rA = "_info_layout_bt2qf_1",
  cA = "_info_container_bt2qf_10",
  lA = "_category_container_bt2qf_16",
  dA = "_category_title_bt2qf_22",
  uA = "_row_container_bt2qf_27",
  AA = "_info_row_bt2qf_35",
  mA = "_info_row_pending_bt2qf_59",
  pA = "_loading_bt2qf_1",
  hA = "_content_bt2qf_74",
  gA = "_image_container_bt2qf_83",
  _A = "_image_bt2qf_83",
  xA = "_row_main_information_bt2qf_103",
  fA = "_row_title_bt2qf_114",
  vA = "_row_icon_container_bt2qf_120",
  yA = "_row_icon_bt2qf_120",
  wA = "_row_main_value_bt2qf_130",
  jA = "_row_prompt_bt2qf_137",
  bA = "_not_pixel_icon_bt2qf_142",
  NA = "_row_image_bt2qf_147",
  IA = "_row_reward_count_bt2qf_153",
  CA = "_row_reward_completed_bt2qf_158",
  PA = "_priceless_bt2qf_165",
  SA = "_completed_tasks_container_bt2qf_169",
  BA = "_completed_task_item_bt2qf_176",
  m = {
    info_layout: rA,
    info_container: cA,
    category_container: lA,
    category_title: dA,
    row_container: uA,
    info_row: AA,
    info_row_pending: mA,
    loading: pA,
    content: hA,
    image_container: gA,
    image: _A,
    row_main_information: xA,
    row_title: fA,
    row_icon_container: vA,
    row_icon: yA,
    row_main_value: wA,
    row_prompt: jA,
    not_pixel_icon: bA,
    row_image: NA,
    row_reward_count: IA,
    row_reward_completed: CA,
    priceless: PA,
    completed_tasks_container: SA,
    completed_task_item: BA
  },
  Z = ({
    children: t,
    boost: n,
    enableCheck: s = !0,
    action: a,
    id: i,
    reward: o,
    ...r
  }) => {
    const l = g(),
      d = [m.info_row],
      u = c(w => w.mining.tasks[n]),
      _ = c(w => w.mining.checkStatuses[n]) === p.pending,
      y = c(w => w.mining.checkError[n]),
      N = c(w => w.mining.toggleAction[n]),
      x = A.useRef();
    return n && _ && d.push(m.info_row_pending), A.useEffect(() => {
      let w = null;
      return y && setTimeout(() => {
        l(Ru({
          key: n,
          value: !1
        }))
      }, 4e3), () => {
        clearTimeout(w)
      }
    }, [y]), e.jsx("div", {
      className: m.row_container,
      ref: x,
      id: i,
      style: {
        opacity: u ? .3 : 1
      },
      children: e.jsx("div", {
        className: d.join(" "),
        onPointerUp: () => {
          !n || u || _ || y || (a && l(To({
            action: n,
            value: !N
          })), a && N || a && !s ? a() : s && l(be.checkTask({
            key: n,
            reward: o
          })))
        },
        ...r,
        children: t
      })
    })
  },
  TA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAAXNSR0IArs4c6QAAAGBQTFRFGypAeIX/KTdNXmWDmXv/xG7/0G/+qXb/tnD/3Gv5ZWipjH//g4L/6Gz0OkZc9mnsfnTFV47/2b3lioia5qfuZ4j/oXjhNZD6bYXgsaa7REx1yJr+SVlt8YHyvpXYz4P13SNuwwAAAVZJREFUeNrt11tugzAQheEAhdgmdQ12AHPL/nfZwcQaWvEC40qo8r+ALyfJiCi3WCwWi/2vsuzSIHCcWxsQ1KHB14vzaboumKbcpfVVwaYpCg4Zc1Uwz4tiJccxIFiEAoVgzG+s66uAfS8gpRqIsQX0pDG1y1qtpTwJ5r9AcxRMksejLD+guws3cugT+np3BHTi6t2pYN/vbgTQkytq7RHQbwSSORGv0XEAanvgcfDeWAIJ5tI8bzdOk3tUHAXxTSNYIHgsIbpOKSH63r/I9njwR4sOgjgtICHAlMJrNMad9AVAxNavxpNpSuAQZE4kg0qt17jdKCUVhNaNLCeCSYIHjgu1poL45KGBWfZ87m0cBiqIG9mdAnZdVXkyy9yTBwoH+o3nwQpaSCH8R+A3pmlIkJ0EpWyhrrv9aJ5BpIAJHcTadhz3jmkYpAwOxr+CsVgsFvv7vgHg5COfXLmgNAAAAABJRU5ErkJggg==",
  $ = ({
    boost: t
  }) => c(s => s.mining.tasks[t]) ? e.jsx("div", {
    className: m.row_icon_container,
    children: e.jsx(I, {
      size: 20,
      children: ""
    })
  }) : e.jsx("div", {
    className: m.row_icon_container,
    children: e.jsx(I, {
      size: 20,
      children: ""
    })
  }),
  EA = () => {
    const t = v.premium,
      n = c(a => a.main.settings),
      s = c(a => a.mining.tasks[t]);
    return e.jsx(Z, {
      boost: t,
      id: "telegramPremium",
      reward: n.TokensForTelegramPremium,
      children: e.jsxs("div", {
        className: m.content,
        children: [!s && e.jsx("div", {
          className: m.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: TA,
            className: m.image
          })
        }), e.jsxs("div", {
          className: m.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: m.row_title,
              children: "Telegram Premium"
            })
          }), !s && e.jsxs("div", {
            children: ["Get ", e.jsx(U, {
              className: m.not_pixel_icon
            }), " ", n.TokensForTelegramPremium]
          })]
        }), e.jsx($, {
          boost: t
        })]
      })
    })
  },
  Ro = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAIAAAABc2X6AAABJmlDQ1BBZG9iZSBSR0IgKDE5OTgpAAAoz2NgYDJwdHFyZRJgYMjNKykKcndSiIiMUmA/z8DGwMwABonJxQWOAQE+IHZefl4qAwb4do2BEURf1gWZxUAa4EouKCoB0n+A2CgltTiZgYHRAMjOLi8pAIozzgGyRZKywewNIHZRSJAzkH0EyOZLh7CvgNhJEPYTELsI6Akg+wtIfTqYzcQBNgfClgGxS1IrQPYyOOcXVBZlpmeUKBhaWloqOKbkJ6UqBFcWl6TmFit45iXnFxXkFyWWpKYA1ULcBwaCEIWgENMAarTQZKAyAMUDhPU5EBy+jGJnEGIIkFxaVAZlMjIZE+YjzJgjwcDgv5SBgeUPQsykl4FhgQ4DA/9UhJiaIQODgD4Dw745AMDGT/0ZOjZcAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGh2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDYgNzkuMTY0NjQ4LCAyMDIxLzAxLzEyLTE1OjUyOjI5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjIuMiAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDI0LTA5LTI0VDEwOjM5OjA5KzA0OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyNC0wOS0yNFQxMToyMjo0OCswNDowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyNC0wOS0yNFQxMToyMjo0OCswNDowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MWVkZTI5YTMtOTM2ZS1jNjQxLWJkZDEtNDNmMTA2NTY3ZjMzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjkzNjNmMjgyLWIxOTMtZGY0ZS1hYWEyLWE1OGY3Mjg0Mjk0NSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjkzNjNmMjgyLWIxOTMtZGY0ZS1hYWEyLWE1OGY3Mjg0Mjk0NSI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6OTM2M2YyODItYjE5My1kZjRlLWFhYTItYTU4ZjcyODQyOTQ1IiBzdEV2dDp3aGVuPSIyMDI0LTA5LTI0VDEwOjM5OjA5KzA0OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjIuMiAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmM3ZDdlOWUzLTBhNTEtYzU0ZS1iZTVlLWU2MmY5MzE1ZWMwNyIgc3RFdnQ6d2hlbj0iMjAyNC0wOS0yNFQxMToxNzoyOSswNDowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjIgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoxZWRlMjlhMy05MzZlLWM2NDEtYmRkMS00M2YxMDY1NjdmMzMiIHN0RXZ0OndoZW49IjIwMjQtMDktMjRUMTE6MjI6NDgrMDQ6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi4yIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7U6VMbAAABP0lEQVR42u3asW6DMBSF4TxQp861oWQLmGYpsUkfos/QF2+Prw1RhypbisSPzoCDY93P1wyRcnh67naVA2DAgAEDBgwYMGDAgAEDBgwYMGDA+wN/P/ACDBgwYMCAAQMGDHhv4I/Pr7sBDBjwdsGPXAcwYMCAAQMGzK8lwIABAwYMGDBgwIDvpQmpGaLrL66flCZEP6Z2nNsx6d5pOOToPs8Mcxuur285mvNrwhDbkLowK8fxqujpy2lStLh9PW4CrGqsrHfFnSY/1OIKpsSGs+1C1S7mZLtQ5wtc0gmspyG5Pto+XrQjbivgRfsX2Hp+o3bnmmMe1oNQY332pdXnfAR8PTsC52ylw3LmWCvcWv2tt1Glr11dwcrS5OjXl8KW0icFvBz4LYH5Jx5gwIABAwYMGDBgwIABAwYMGPD/5gdV5YsHhxhyrwAAAABJRU5ErkJggg==",
  DA = () => {
    const t = v["channel:notpixel_channel"],
      n = c(a => a.main.settings),
      s = c(a => a.mining.tasks[t]);
    return e.jsx(Z, {
      boost: t,
      action: () => {
        ee("https://t.me/notpixel_channel")
      },
      id: "notPixelChannel",
      reward: n.TokensForJoinChannel,
      children: e.jsxs("div", {
        className: m.content,
        children: [!s && e.jsx("div", {
          className: m.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: Ro,
            className: m.image
          })
        }), e.jsxs("div", {
          className: m.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: m.row_title,
              children: "Not Pixel Channel"
            })
          }), !s && e.jsxs("div", {
            children: ["Get ", e.jsx(U, {
              className: m.not_pixel_icon
            }), " ", n.TokensForJoinChannel]
          })]
        }), e.jsx($, {
          boost: t
        })]
      })
    })
  },
  kA = () => {
    const t = v["x:notpixel"],
      n = c(a => a.main.settings),
      s = c(a => a.mining.tasks[t]);
    return e.jsx(Z, {
      boost: t,
      action: () => {
        Ct("https://x.com/notpixelx")
      },
      id: "notPixelX",
      reward: n.TokensForJoinX,
      children: e.jsxs("div", {
        className: m.content,
        children: [!s && e.jsx("div", {
          className: m.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: Ro,
            className: m.image
          })
        }), e.jsxs("div", {
          className: m.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: m.row_title,
              children: "Not Pixel on X.com"
            })
          }), !s && e.jsxs("div", {
            children: ["Get ", e.jsx(U, {
              className: m.not_pixel_icon
            }), " ", n.TokensForJoinX]
          })]
        }), e.jsx($, {
          boost: t
        })]
      })
    })
  },
  RA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQBAMAAAB8P++eAAAAAXNSR0IArs4c6QAAABhQTFRFHCk/6cGp86xt4I5f1YNQq4VwlU8bUzwyVRbffwAAAJZJREFUeNrt1cENw0AIBdG04BZo4bcwLWwLlGDaj7KKkeVTZFAu3jk/gcSF12r1vKAVbsza4PYpaRk62HaiVegCDmoA8hoEY3ZsV0QVojONcC9DMPvKMdxbIDJDEaMPIkW4T9cEkWd1aNYOsWaI3YP7v+7od+Ge8JpLl4lRg5MmTFaAMwklK8HMpWQ1mEWyX+B6yqtVtTf2acUX1leb/QAAAABJRU5ErkJggg==",
  Be = ({
    num: t
  }) => isNaN(t) ? null : new Intl.NumberFormat("en-US").format(t),
  MA = () => {
    const t = J(),
      n = v.invite1fren;
    let s = c(i => i.user.user);
    const a = c(i => i.main.settings);
    return s === null ? null : e.jsx(Z, {
      action: () => {
        t.push("/invite-frens")
      },
      boost: n,
      id: "invite1Fren",
      reward: a.TokensForInvite1Fren,
      enableCheck: !1,
      children: e.jsxs("div", {
        className: m.content,
        children: [e.jsx("div", {
          className: m.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: RA,
            className: m.image
          })
        }), e.jsxs("div", {
          className: m.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: m.row_title,
              children: "Invite bonus "
            })
          }), e.jsxs("div", {
            children: ["Up to ", e.jsx(U, {
              className: m.not_pixel_icon
            }), " ", e.jsx(Be, {
              num: a.RefRewardCoinsPremium
            }), " for fren"]
          })]
        }), e.jsx("div", {
          className: m.row_icon_container,
          children: e.jsx(I, {
            size: 20,
            children: ""
          })
        })]
      })
    })
  },
  UA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQBAMAAAB8P++eAAAAAXNSR0IArs4c6QAAAB5QTFRFHCk/9fPq//Bh0cq8/9YA/8cA/ZIAqZyM9mYAiF8iNQ3eYAAAALRJREFUeNrt1TGRRTEMQ1FTMAVTMAVBWC0EUQiFUAjbHe/M+5lfvcIpcxs1p5fdbrdujAiehIyKB6FbVDoGYRbhFjgHAwoznIOENCOgY1DEVIB2BgY0Jf6Amog3+Eu+wIA051RVE2jCfyawHKGi6EEbawlPrrnSmjDXIt2L0d3lbei55O5O0qtsw/T06jOjC0fml+vCLbfrw5GZD8vRhFtW2/VgyfGwcn1YtNrsHd4bvd16/QEV+IbgR8VccAAAAABJRU5ErkJggg==",
  OA = () => {
    const t = v.paint20pixels,
      n = c(i => i.main.settings),
      s = c(i => i.mining.info),
      a = c(i => i.mining.tasks[t]);
    return s === null ? null : e.jsx(Z, {
      boost: t,
      id: "pain20pixels",
      reward: n.TokensForPaint20Pixels,
      children: e.jsxs("div", {
        className: m.content,
        children: [!a && e.jsx("div", {
          className: m.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: UA,
            className: m.image
          })
        }), e.jsxs("div", {
          className: m.row_main_information,
          children: [e.jsx("div", {
            children: e.jsxs("span", {
              className: m.row_title,
              children: ["Paint pixels • ", Math.min(s.repaintsTotal, 20), "/20", " "]
            })
          }), !a && e.jsxs("div", {
            children: ["Get ", e.jsx(U, {
              className: m.not_pixel_icon
            }), " ", n.TokensForPaint20Pixels]
          })]
        }), e.jsx($, {
          boost: t
        })]
      })
    })
  },
  QA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQBAMAAAB8P++eAAAAAXNSR0IArs4c6QAAABVQTFRFHCk//PuG/+wo/8gA/5IA9mYAb0QgBXY6pgAAAJ9JREFUeNrt1TGNBEEQQ9GiUBQ+BVMwBVMY/hBOVxptvFJXtv0DRy933W6/lkCrkO5uFqF60h4EuoE1KLq6u9AWhKegHtiCotvuRlvQggTkFYhctkB2WRxDYstvssMhlJ0IDUOJrUOYKtNMjapyBifRbwzagLxuC5pP3oHxx2UDjtQ0bgGOnFJrsPLOGoz/11mCsuw8T2xZX8P7zbfbQX+axVI3GU07RQAAAABJRU5ErkJggg==",
  FA = () => {
    const t = J(),
      n = v.invite3frens;
    let s = c(o => o.user.user);
    const a = c(o => o.main.settings),
      i = c(o => o.mining.tasks[n]);
    return s === null ? null : e.jsx(Z, {
      action: () => {
        t.push("/invite-frens")
      },
      boost: n,
      id: "invite3Frens",
      reward: a.TokensForInvite3Frens,
      children: e.jsxs("div", {
        className: m.content,
        children: [!i && e.jsx("div", {
          className: m.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: QA,
            className: m.image
          })
        }), e.jsxs("div", {
          className: m.row_main_information,
          children: [e.jsx("div", {
            children: e.jsxs("span", {
              className: m.row_title,
              children: ["Invite frens • ", Math.min(s.friends, 3), "/3", " "]
            })
          }), !i && e.jsxs("div", {
            children: ["Get ", e.jsx(U, {
              className: m.not_pixel_icon
            }), " ", a.TokensForInvite3Frens]
          })]
        }), e.jsx($, {
          boost: n
        })]
      })
    })
  },
  GA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQBAMAAAB8P++eAAAAAXNSR0IArs4c6QAAABtQTFRFHCk/8/Dl/+Qy/9sA/8cA/6lU86MA2YQQn1IBegOu8wAAAIlJREFUeNrt1DERA0EMQ1FTCAVTMAVROAqiYAqGnfFFTbpM1tWNf/0aNbJt27a/ig5zEKEwAOXc3SUHINtJghMQHyc5APkNeQ6B8JdluzkYZubdCLwS8LLCFLyuWwLeBZAHUK5lhAvSzmFWEdG0p+QBVFWV5E1B0g6hbFKlzUBRZtmvcN96257eG1BkaXWD691mAAAAAElFTkSuQmCC",
  zA = () => {
    const t = v.joinSquad;
    let n = c(i => i.user.user);
    const s = c(i => i.main.settings),
      a = c(i => i.mining.tasks[t]);
    return n === null ? null : e.jsx(Z, {
      boost: t,
      id: "joinSquad",
      reward: s.TokensForJoinSquad,
      children: e.jsxs("div", {
        className: m.content,
        children: [!a && e.jsx("div", {
          className: m.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: GA,
            className: m.image
          })
        }), e.jsxs("div", {
          className: m.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: m.row_title,
              children: "Join Squad"
            })
          }), !a && e.jsxs("div", {
            children: ["Get ", e.jsx(U, {
              className: m.not_pixel_icon
            }), " ", s.TokensForJoinSquad]
          })]
        }), e.jsx($, {
          boost: t
        })]
      })
    })
  },
  ei = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQBAMAAAB8P++eAAAAAXNSR0IArs4c6QAAABhQTFRFHCk//9dK/7cA/pYA2n0AvlkAmjEAXjEUlqfz5AAAAKhJREFUeNrt1cFpRFEMQ1G1oBbUglpwC2pBLUz74Q8hmeXA8/JdMMZw9sbtdjvJohNLpBYgB5i0TWYCDA8hC7/iNB7LL6M8gwKAKh1bfF86gy6AcP5hfQYhAKUfyDc0DiEMVMpYpAHhGMKtObGo1FiAMGplqIGxAgPEIz97Bz61KZ7W4IjahchgGY6WoSmuQqcm92D/WoPU8Jk9+OvWYD/6Gt5nerud9AMgnFxPBQmwaAAAAABJRU5ErkJggg==",
  LA = () => {
    var o, r;
    const t = v.leagueBonusSilver,
      n = c(l => l.main.settings),
      s = (r = (o = window.Telegram.WebApp.initDataUnsafe) == null ? void 0 : o.user) == null ? void 0 : r.is_premium,
      a = c(l => l.mining.tasks[t]),
      i = s ? n.TokensForSilverLeaguePremium : n.TokensForSilverLeagueCommon;
    return e.jsx(Z, {
      boost: t,
      id: "leagueBonusSilver",
      reward: i,
      children: e.jsxs("div", {
        className: m.content,
        children: [!a && e.jsx("div", {
          className: m.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: ei,
            className: m.image
          })
        }), e.jsxs("div", {
          className: m.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: m.row_title,
              children: "Silver League Bonus"
            })
          }), !a && e.jsxs("div", {
            children: ["Get ", e.jsx(U, {
              className: m.not_pixel_icon
            }), " ", s ? n.TokensForSilverLeaguePremium : n.TokensForSilverLeagueCommon]
          })]
        }), e.jsx($, {
          boost: t
        })]
      })
    })
  },
  HA = () => {
    var r, l;
    const t = v.leagueBonusGold,
      n = c(d => d.mining.tasks[v.leagueBonusSilver]),
      s = c(d => d.main.settings),
      a = (l = (r = window.Telegram.WebApp.initDataUnsafe) == null ? void 0 : r.user) == null ? void 0 : l.is_premium,
      i = c(d => d.mining.tasks[t]),
      o = a ? s.TokensForGoldLeaguePremium : s.TokensForGoldLeagueCommon;
    return n ? e.jsx(Z, {
      boost: t,
      id: "leagueBonusGold",
      reward: o,
      children: e.jsxs("div", {
        className: m.content,
        children: [!i && e.jsx("div", {
          className: m.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: ei,
            className: m.image
          })
        }), e.jsxs("div", {
          className: m.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: m.row_title,
              children: "Gold League Bonus"
            })
          }), !i && e.jsxs("div", {
            children: ["Get ", e.jsx(U, {
              className: m.not_pixel_icon
            }), " ", a ? s.TokensForGoldLeaguePremium : s.TokensForGoldLeagueCommon]
          })]
        }), e.jsx($, {
          boost: t
        })]
      })
    }) : null
  },
  qA = () => {
    var r, l;
    const t = v.leagueBonusPlatinum,
      n = c(d => d.mining.tasks[v.leagueBonusGold]),
      s = c(d => d.main.settings),
      a = (l = (r = window.Telegram.WebApp.initDataUnsafe) == null ? void 0 : r.user) == null ? void 0 : l.is_premium,
      i = c(d => d.mining.tasks[t]),
      o = a ? s.TokensForPlatinumLeaguePremium : s.TokensForPlatinumLeagueCommon;
    return n ? e.jsx(Z, {
      boost: t,
      id: "leagueBonusPlatinum",
      reward: o,
      children: e.jsxs("div", {
        className: m.content,
        children: [!i && e.jsx("div", {
          className: m.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: ei,
            className: m.image
          })
        }), e.jsxs("div", {
          className: m.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: m.row_title,
              children: "Platinum League Bonus"
            })
          }), !i && e.jsxs("div", {
            children: ["Get ", e.jsx(U, {
              className: m.not_pixel_icon
            }), " ", a ? s.TokensForPlatinumLeaguePremium : s.TokensForPlatinumLeagueCommon]
          })]
        }), e.jsx($, {
          boost: t
        })]
      })
    }) : null
  },
  YA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAIAAAABc2X6AAABJmlDQ1BBZG9iZSBSR0IgKDE5OTgpAAAoz2NgYDJwdHFyZRJgYMjNKykKcndSiIiMUmA/z8DGwMwABonJxQWOAQE+IHZefl4qAwb4do2BEURf1gWZxUAa4EouKCoB0n+A2CgltTiZgYHRAMjOLi8pAIozzgGyRZKywewNIHZRSJAzkH0EyOZLh7CvgNhJEPYTELsI6Akg+wtIfTqYzcQBNgfClgGxS1IrQPYyOOcXVBZlpmeUKBhaWloqOKbkJ6UqBFcWl6TmFit45iXnFxXkFyWWpKYA1ULcBwaCEIWgENMAarTQZKAyAMUDhPU5EBy+jGJnEGIIkFxaVAZlMjIZE+YjzJgjwcDgv5SBgeUPQsykl4FhgQ4DA/9UhJiaIQODgD4Dw745AMDGT/0ZOjZcAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGh2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDYgNzkuMTY0NjQ4LCAyMDIxLzAxLzEyLTE1OjUyOjI5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjIuMiAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDI0LTA5LTI0VDExOjA1OjE0KzA0OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyNC0wOS0yNFQxMToyMjoxMyswNDowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyNC0wOS0yNFQxMToyMjoxMyswNDowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NGU1YjQ1ZGMtMDA0MC0xNTRkLWIzYWMtNDRkNGJjOWU4Y2JlIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOmFjOGM1YWVjLWQ0YjctZGQ0YS05ZTJkLTczNjcwMTRkZjQ4NiIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmFjOGM1YWVjLWQ0YjctZGQ0YS05ZTJkLTczNjcwMTRkZjQ4NiI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YWM4YzVhZWMtZDRiNy1kZDRhLTllMmQtNzM2NzAxNGRmNDg2IiBzdEV2dDp3aGVuPSIyMDI0LTA5LTI0VDExOjA1OjE0KzA0OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjIuMiAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmM1NDNmYzg1LTZhNjMtZTY0MS1iYzMzLTRiNWU5OWM2NDY5MCIgc3RFdnQ6d2hlbj0iMjAyNC0wOS0yNFQxMToxNzozMCswNDowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjIgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo0ZTViNDVkYy0wMDQwLTE1NGQtYjNhYy00NGQ0YmM5ZThjYmUiIHN0RXZ0OndoZW49IjIwMjQtMDktMjRUMTE6MjI6MTMrMDQ6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi4yIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6TN+2hAAAAr0lEQVR42u3auwmAQBAFQAsysgHB3AIEi7AGGz8zMRE8XT94s7z0HTvpsVXddEWlAgYGBgYGBgYGBgYGBgYGBgYGBv49OGVOVBcYGPg8OAXNOM1ZuY4HBi4XnG6eIztcxwMDA78J3tsHGBgYGBgYGBgY+Mvgth/WRCG3b+Yic7vAwKWDo/BR3Ud/LYGBfwbewx9JVBcYGNhRCzAwMDAwMDAwMDAwMDAwMDAwMPDnsgAsAtPYi2unugAAAABJRU5ErkJggg==",
  XA = () => {
    const t = J(),
      n = v.openLeague;
    let s = c(a => a.user.user);
    return c(a => a.main.settings), s === null ? null : e.jsx(Z, {
      boost: n,
      enableCheck: !1,
      action: () => t.push("/open-league"),
      id: "openLeague",
      children: e.jsxs("div", {
        className: m.content,
        children: [e.jsx("div", {
          className: m.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: YA,
            className: m.image
          })
        }), e.jsxs("div", {
          className: m.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: m.row_title,
              children: "Open League"
            })
          }), e.jsx("div", {
            children: e.jsx("span", {
              className: m.priceless,
              children: "Priceless"
            })
          })]
        }), e.jsx($, {
          boost: n
        })]
      })
    })
  },
  _a = ({
    text: t
  }) => e.jsx("div", {
    className: m.category_container,
    children: e.jsx("span", {
      className: m.category_title,
      children: t
    })
  }),
  VA = () => {
    const t = v.spendStars,
      n = c(a => a.main.settings),
      s = c(a => a.mining.tasks[t]);
    return e.jsx(Z, {
      boost: t,
      id: "spendStars",
      reward: n.TokensForSpendStars,
      children: e.jsxs("div", {
        className: m.content,
        children: [!s && e.jsx("div", {
          className: m.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: Za,
            className: m.image
          })
        }), e.jsxs("div", {
          className: m.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: m.row_title,
              children: "Spend Stars"
            })
          }), !s && e.jsxs("div", {
            children: ["Get ", e.jsx(U, {
              className: m.not_pixel_icon
            }), " ", n.TokensForSpendStars]
          })]
        }), e.jsx($, {
          boost: t
        })]
      })
    })
  },
  JA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAABiUlEQVR4nO3coU7DUBhH8UJ4ACQKxyRz8+BROB4DO43lMXBT0+MBcASHRE3yBqD7T6Bpz73tFefnmqXNdvLly93ETq6ub346TXZqOsaAkAEhA0IGhAwIGRAyIGRAyICQASEDQgaEDAgZEDIgZEDIgJABIQNCBoTOSj3o8/11qc8wyWp9W+Q5TiBkQMiAULEdmO4fn9D9u+dt77r080pxAiEDQgaEqu3A3Dnjz139+z8Oh1F3z3UudQIhA0IGhIrtwM3dQ+/6bf8y7ycZkO+vFCcQMiBkQKjYDvz+Ov77ep7LSv0e99fz09D7m8oJhAwIGRCq9l146XNhrXNfcgIhA0IGhKrtwDx35U6i58K8P59f69yXnEDIgJABoWo7MNXeSXPtvOQEQgaEDAgt9q8d55cXveux35WXOvclJxAyIGRAqJl/Lhraia3svOQEQgaEDAg1++9tuRNb2XnJCYQMCBkQmu33wLFa3XnJCYQMCBkQMiBkQMiAkAEhA0IGhAwIGRAyIGRAouu6XySITdXe7YNeAAAAAElFTkSuQmCC",
  WA = () => {
    const t = g(),
      n = v.walletVerification,
      s = c(h => h.main.settings),
      [a] = kn(),
      i = c(h => h.mining.tasks[n]),
      o = uc(),
      r = Ac(),
      l = s.TokensForWalletVerification,
      d = c(h => h.mining.infoStatus),
      u = async () => {
        if (i || !o) return;
        const h = await t(be.checkTask({
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
        const _ = await X.generateTonProofPayload();
        if (_.status === 200 && _.data && _.data.payload) {
          const y = _.data;
          a.setConnectRequestParameters({
            state: "ready",
            value: {
              tonProof: y.payload
            }
          }), await a.openModal()
        } else t(z({
          id: performance.now(),
          text: "Something went wrong, try again"
        }))
      };
    return A.useEffect(() => {
      var h;
      !o || d !== p.fulfilled || r && (i || (h = r == null ? void 0 : r.connectItems) != null && h.tonProof && !("error" in r.connectItems.tonProof) && X.checkTonProof(r.connectItems.tonProof.proof, r.account).then(_ => {
        _.status === 200 && _.data.success ? t(be.checkTask({
          key: n,
          reward: l
        })) : t(z({
          id: performance.now(),
          text: "Something went wrong. Try later, or try another wallet."
        }))
      }))
    }, [r, o, d, i]), e.jsx(Z, {
      boost: n,
      action: u,
      enableCheck: !1,
      reward: l,
      children: e.jsxs("div", {
        className: m.content,
        id: "ton_wallet_connect_task_div",
        children: [!i && e.jsx("div", {
          className: m.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: JA,
            className: m.image
          })
        }), e.jsxs("div", {
          className: m.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: m.row_title,
              children: "Connect TON"
            })
          }), !i && e.jsxs("div", {
            children: ["Get ", e.jsx(U, {
              className: m.not_pixel_icon
            }), " ", l]
          })]
        }), e.jsx($, {
          boost: n
        })]
      })
    })
  },
  Mo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAIAAAABc2X6AAABJmlDQ1BBZG9iZSBSR0IgKDE5OTgpAAAoz2NgYDJwdHFyZRJgYMjNKykKcndSiIiMUmA/z8DGwMwABonJxQWOAQE+IHZefl4qAwb4do2BEURf1gWZxUAa4EouKCoB0n+A2CgltTiZgYHRAMjOLi8pAIozzgGyRZKywewNIHZRSJAzkH0EyOZLh7CvgNhJEPYTELsI6Akg+wtIfTqYzcQBNgfClgGxS1IrQPYyOOcXVBZlpmeUKBhaWloqOKbkJ6UqBFcWl6TmFit45iXnFxXkFyWWpKYA1ULcBwaCEIWgENMAarTQZKAyAMUDhPU5EBy+jGJnEGIIkFxaVAZlMjIZE+YjzJgjwcDgv5SBgeUPQsykl4FhgQ4DA/9UhJiaIQODgD4Dw745AMDGT/0ZOjZcAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGh2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDYgNzkuMTY0NjQ4LCAyMDIxLzAxLzEyLTE1OjUyOjI5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjIuMiAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDI0LTA5LTI0VDEwOjEzOjA1KzA0OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyNC0wOS0yNFQxMToyMTo0NSswNDowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyNC0wOS0yNFQxMToyMTo0NSswNDowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OWE1ZTFkNmEtMDFkMy01MTRjLWI1ZGQtZjQ1YTZjZmMzYzU3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjNlNWY4MjgyLTc1NjEtMDQ0Zi1hMWM1LTYzN2ViZmQyYjcxNSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjNlNWY4MjgyLTc1NjEtMDQ0Zi1hMWM1LTYzN2ViZmQyYjcxNSI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6M2U1ZjgyODItNzU2MS0wNDRmLWExYzUtNjM3ZWJmZDJiNzE1IiBzdEV2dDp3aGVuPSIyMDI0LTA5LTI0VDEwOjEzOjA1KzA0OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjIuMiAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjUwMjg3MDBiLTJkNWItMGU0OS05MmYyLWM0Y2U0OWE4ODAwNiIgc3RFdnQ6d2hlbj0iMjAyNC0wOS0yNFQxMToxNzoyNSswNDowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjIgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo5YTVlMWQ2YS0wMWQzLTUxNGMtYjVkZC1mNDVhNmNmYzNjNTciIHN0RXZ0OndoZW49IjIwMjQtMDktMjRUMTE6MjE6NDUrMDQ6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi4yIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5KGBqWAAAAxElEQVR42u3aywmDQBQFUAtylQYE9ykgYBHWkMZ1J7OJPHyO8XMedzXI4NlcGMemffWPSgMMDAwMDAwMDAwMDAwMDAxcIVMxwMDA1wBPgQEGBj4XuMQM43dJZB0YGPhc4Mw6MDDwceBfhRSBHVNgwMDA0YNB5gNAvQMGMDDw2st178+SDLjcBxgYeH9wplQyz+fxwMDAW4oqA963wICBgaOXY7UHGBh4O7gskn8FGBjYz6XAwMDAwMDAwMDAwMDAwMC3zAwlcvXsnlyGdQAAAABJRU5ErkJggg==",
  ZA = () => {
    const t = v["channel:notcoin"],
      n = c(a => a.main.settings),
      s = c(a => a.mining.tasks[t]);
    return e.jsx(Z, {
      boost: t,
      action: () => {
        ee("https://t.me/notcoin")
      },
      id: "notCoinChannel",
      reward: n.TokensForJoinChannel,
      children: e.jsxs("div", {
        className: m.content,
        children: [!s && e.jsx("div", {
          className: m.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: Mo,
            className: m.image
          })
        }), e.jsxs("div", {
          className: m.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: m.row_title,
              children: "Notcoin community"
            })
          }), !s && e.jsxs("div", {
            children: ["Get ", e.jsx(U, {
              className: m.not_pixel_icon
            }), " ", n.TokensForJoinChannel]
          })]
        }), e.jsx($, {
          boost: t
        })]
      })
    })
  },
  KA = () => {
    const t = v["x:notcoin"],
      n = c(a => a.main.settings),
      s = c(a => a.mining.tasks[t]);
    return e.jsx(Z, {
      boost: t,
      action: () => {
        Ct("https://x.com/thenotcoin")
      },
      id: "notCoinX",
      reward: n.TokensForJoinX,
      children: e.jsxs("div", {
        className: m.content,
        children: [!s && e.jsx("div", {
          className: m.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: Mo,
            className: m.image
          })
        }), e.jsxs("div", {
          className: m.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: m.row_title,
              children: "Notcoin on X.com"
            })
          }), !s && e.jsxs("div", {
            children: ["Get ", e.jsx(U, {
              className: m.not_pixel_icon
            }), " ", n.TokensForJoinX]
          })]
        }), e.jsx($, {
          boost: t
        })]
      })
    })
  },
  Uo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAACTElEQVR4nO2cvUrDUBiGv7QdVJwcHcTBjvYeegOuTiJaRBA3BwuioqC0UtHB4uDgpXgPOppBHBydRB0kkZPktLHUmvblmE95nyUY22N8+nDy0xCvXKmGQkamQHUYFAhCgSAUCEKBIBQIQoEgFAhCgSAUCEKBIBQIQoEgFAhCgSAUCEKBIBQIQoEgFAhCgSAll4O/vb7I08OdBB/vv/G/9KVQGpPp2XkZn5h0M76TURPylmcwf99shyucFmjlNQ7ir54LoYgnIl6yjH4O408xWoY/rOt9X5gaK+iOJanXLbQ9px8i50AQCgShQBAKBKFAEAoEcXoYMwrHl3NDvau17Oe6vSwQRF2BlsfnwWXNTA1XqitYIIiaAk/acVFZy2uu+NGpmuR8gzILBPkzAk156Xlv+5pz4L8g9znw9CLb3Jf+vZY9sLBAHDV74X5V9VZpX9NY9aOLp3nvgYUF4uRe4Nam37l8/92xoC3vqOZHl+o1lGdhgSBqz4UlVd7hmp45rxcWCKKyQFve3rqO891BsEAQVQXWN/wvX6xrLs/CAkEoEIQCQSgQhAJBKBDE6WGMuTvU3JtX3/cyvf58N4wOY4rm8CUQKSbrvWRdMYiXi2fZxktvhyucFmhurXW58Vmwt/i6QtWTi+5vb6Jleyfs1FZIlbfUissrV6o5b2kXzoEgKp+dZUu8qsdzYq2przwLCwRR/fQ2W6LG8iwsEET1JX3N5VlYIAgFglAgCAWCUCAIBYJQIAgFglAgCAWCUCAIBYJQIAgFglAggoh8Ap/jkinpc8FdAAAAAElFTkSuQmCC",
  $A = () => {
    const t = c(i => i.user.user),
      n = v.boostChannelNotPixel,
      s = c(i => i.main.settings),
      a = c(i => i.mining.tasks[n]);
    return !t || !t.isPremium ? null : e.jsx(Z, {
      action: () => {
        ee("https://t.me/boost/notpixel_channel")
      },
      boost: n,
      id: "notPixelBoostChannel",
      reward: s.TokensForBoostChannelNotPixel,
      children: e.jsxs("div", {
        className: m.content,
        children: [!a && e.jsx("div", {
          className: m.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: Uo,
            className: m.image
          })
        }), e.jsxs("div", {
          className: m.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: m.row_title,
              children: "Boost Not Pixel Channel "
            })
          }), !a && e.jsxs("div", {
            children: ["Get ", e.jsx(U, {
              className: m.not_pixel_icon
            }), " ", 64]
          })]
        }), e.jsx($, {
          boost: n
        })]
      })
    })
  },
  em = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAIZklEQVR4nO1cW6gkRxn+qrp7TvfMnNseEyFgFCVC8rJCnnYXxRdvURHMQlj3wD5pBDcqK2QhkLBvWSWIkgc3PkRNsvoWLwuCiMIBzYO7L+ZJ0E0egiFPZ/ecmTPT1yqpv7vm2jOTOT3TNXH7gz41p7u6p+rr/6//UlXDHj75WYkKxwavqCuGisCCqAgsiIrAgqgILIiKwIKoCCyIisCCqAgsiIrAgqgILIiKwIKoCCyIisCCqAgsiIrAgrBNN+Dkx2qIW4dwI6DpOYDk8DwPlmXR9Xa7nXtfwgX+9p5VcmvHYZxAdnAE6Qc4AofDI1KKNdeGiCO6HoSd3PskU38b5TY2B5UKF4QxCXzEOwBjDA5suGtpMzY2Nqg8PDzs1cs7p8Ak8PkHLUiZTun8+R1RYuv7MKrCuvNFoF6CSZRKoDIY/E5qFE6sb1MZ+D7ibLxrtVpU1uv1nhHRaDabY2R1Oh0kSUKfv/rxHSpvvNUtpzMZSiUwbrcgQ58+W9xLz2XkYUAibXu8WZyPD9dxHPc+R1G4lDbPQqkEehHHEct3PWIOWElK4DS15BIImYQ1ov3CkCaXSuCHd7YQxalboo2CNhIKVy5dggTPlTYNZTyefeGHiuWh830jU65rU7IR4WOek5IoLT2c2RCQ043LwKXBe03BmBVeX1+n8geXvo/N2hoSMDTcNUBMt8yK3CtPX4bDLVz96Y/R6vqk8qNuTlkwRqAe55o1F16tlp6cQZ6+b8N1s/rMuBvzgY5ETJOHsiXwvf19dIPUiGxk0UcRZ3r38bN0vzqeffHFhbVzHnzgY+FFRDNFUOr6wEe3op4E3nznv9R5x6vBkoLe5alTp+jarVu3EEXRxOfoejdv3oQfhfScwI9Ipes1FxEYGAS8rYeW3icjRkR12A8T6nDQ7oJJTt5JJ0gTAgftYCqBut7hUdirV0vS8bCVpJGOFAze1vL7YkSFafCXnI6EcfLnVPeJAil7nwcPW6akxZzDFuP1Iis91DNJrVk8qxkLgTE3Zu8nL1BHv/zcZci7CboOsLe3R9dOnz4Nx3HSent7RPgfnr8K3mRwkxhf/O4V+DzOrXfigUdK7UepBKZaluXtuCApUv8r8iQT1ByG/LxeIhkaiQWp1N6JwMRq2L9SCXzm4kU4TJKkNNdsksB//OI6LKHUT+Lk47uk2cqIaOt65swZKnc+tA1P6S7v+3559f71drkRSakEbqrJIvSNgyJyy6tRyZiEtBNA8CEDolNbTPpgaAIstbo07uXUKxulfms6uM+4PuDXpcSyXF9P5tQzgVIJPDhowUZqHTe31kcIYXj3xu/G7tHEtI+6lKkB3F69VqeffT79vatLbn0+jE9rzoKWtFnSawqlEvjEj17ufX798gUq79u5v5cb/c/ttwEm8NGPPNhzTzTqngfGlcOdGKRrHMYkcHRcU/8LkbowluWM1VdJai4FxApkYAaxAioshgIixiyyyHkx0qCHaAmB2JKwk3toWnMalLH45EOfgBVx4NFPQVr1qfVjcIg33gCSltF2GyeQj3oodky+IJsysaRgMRUfT044lAVjBP7+L3+lce/CuXNoODaFcuv1BiBstP79Jhrd6Us1JONoHProThfUpcMYgZ0wyhxgvdIqlbjEEqgfhXg/SUrT5GEVJpVQMKtsOiNtjMBzX/oClb+6fh2dWFAe79I3L8zxBI6fv/oK2oFZv9C4H9iPY4/njtxTq7Py8LlPfwaMVmIx/Oy1V8ElR73uwmLTrTCDxC9vvWuq2T0YJ9Bbq5ER4YKjHcSUUlVhXMymW2FuZj3lGFbCkVaBR8IkuMoJKgcZHJacrpqRtRoMGidw68Q2rcZSDvXF8+cpjGPDa4gId/b3hyyuIvrlv98uvb2jWJlQTq+yUnnBPMdEESZFX+okW42fu1mpfODO1vZIyqCPjfUGbG4Rkbdvm5c8jZUikLIwE9yZmp2muEw7zqOo9okUxMIl8LEnd0tpOJcxvvadXUQzFiColQ9/uvbK8tqxtCffIyi0Ouvst55AaLnDJ21nbJxKooBKbtd6oRuP0hj2K5sc94uQ1rzs7OzQnIhaeK4MRh6Ulb785j/hRU0kjRrqdrq69eDggMpGozE0R6wWLvnBHcRROj1649prC32zhVQ4AEMihoN5G87E+HRw/jbM7qup1Hw290sHGCxm53iC2fOlhOW7aDsRHkAT4ch3KfIGv18wiTBgEGw5+0gKqXAyI16dChWqMQE3apITrQKPhKsOC0quyixPOHpARgicGLbgCN7H6+d6Z6d00mPBKKTCjz35DWri5uZmfwK840+sr1S5txup5vbPCUbE6S7LbNFRHiQXuG+rDik9UtvR4cJy1sY0wHVd2Nm7vnt3n8o/vvTrhTBZSIXVytJCUkg0cTCWDKiCyFzBCbGwtIi8SeC0fmF4/LSHmrhYuzm3BO4+dRadyKaGuuvbSJiNMAxp+ZmCEJOD/EEJ1FKiNhXKCdu/JkFvROx2u7CykE5JHpVM0ksZhCJQn/PWUjVOOi34IoSVMPz2pd/M9f1Dz573hnbsIcxIqHEnXSVFe9zmGwl6SzZoHni+pKh+SYoYrcH6GSJHcmOB3pCg6x3FymjZiGUxiaz8wIIoNRbWaqYQZ9tetY943OfNK73TjNxxUElgQSxcAutuGhkEQdAzLHkYlMbjQBkxRgbj/2xSSe/1TY3E5M4VnU1TrsoqJLaWp8J85dduLgQL76UepJUqa2lc9MC9SliiBK62fdLuPpsx+zcLS9Mz3w97W/KVy6LGPJVq0lLZ8c38yoaGbdfSLWaM4evfPk+j6uvX5o+Pl0agihboLWcjvTIqKgRbhU3SyIwYZXpUak0yJHOGkxqVH1gEAP4HsRgdoFaJYVAAAAAASUVORK5CYII=",
  tm = () => {
    const t = v.makePixelAvatar,
      n = c(a => a.main.settings),
      s = c(a => a.mining.tasks[t]);
    return e.jsx(Z, {
      action: () => {
        ee("https://t.me/notpixime_bot")
      },
      boost: t,
      reward: n.TokensForMakePixelAvatar,
      children: e.jsxs("div", {
        className: m.content,
        children: [!s && e.jsx("div", {
          className: m.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: em,
            className: m.image
          })
        }), e.jsxs("div", {
          className: m.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: m.row_title,
              children: "Pixelize your photo"
            })
          }), !s && e.jsxs("div", {
            children: ["Get ", e.jsx(U, {
              className: m.not_pixel_icon
            }), " ", 64]
          })]
        }), e.jsx($, {
          boost: t
        })]
      })
    })
  },
  nm = () => {
    const t = c(i => i.user.user),
      n = v.boostChannelNotCoin,
      s = c(i => i.main.settings),
      a = c(i => i.mining.tasks[n]);
    return !t || !t.isPremium ? null : e.jsx(Z, {
      action: () => {
        ee("https://t.me/boost/notcoin")
      },
      boost: n,
      id: "notCoinBoostChannel",
      reward: s.TokensForBoostChannelNotPixel,
      children: e.jsxs("div", {
        className: m.content,
        children: [!a && e.jsx("div", {
          className: m.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: Uo,
            className: m.image
          })
        }), e.jsxs("div", {
          className: m.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: m.row_title,
              children: "Boost Notcoin Channel "
            })
          }), !a && e.jsxs("div", {
            children: ["Get ", e.jsx(U, {
              className: m.not_pixel_icon
            }), " ", 64]
          })]
        }), e.jsx($, {
          boost: n
        })]
      })
    })
  },
  sm = "_blocker_wufj5_1",
  am = "_popup_wufj5_11",
  Pi = {
    blocker: sm,
    popup: am
  },
  rn = ({
    show: t,
    setShow: n,
    children: s
  }) => {
    const [a, i] = A.useState(!1), [o, r] = Ds(() => ({
      from: {
        transform: "translateY(100%)"
      },
      config: {
        duration: 300,
        easing: ks.easeOutCubic
      }
    })), [l, d] = Ds(() => ({
      from: {
        opacity: 0
      },
      config: {
        duration: 300,
        easing: ks.easeOutCubic
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
    }, [t]), a ? nt.createPortal(e.jsxs(ae.Fragment, {
      children: [e.jsx(Rs.div, {
        className: Pi.blocker,
        style: {
          ...l
        },
        onPointerUp: u => {
          u.stopPropagation(), n(!1)
        },
        onTouchMove: u => {
          u.stopPropagation()
        },
        onPointerMove: u => {
          u.stopPropagation()
        }
      }), e.jsx(Rs.div, {
        className: Pi.popup,
        style: {
          ...o
        },
        onPointerUp: u => {
          u.stopPropagation()
        },
        onTouchMove: u => {
          u.stopPropagation()
        },
        onPointerMove: u => {
          u.stopPropagation()
        },
        children: s
      })]
    }), document.body) : null
  },
  im = "/assets/adsgram-D63qdz_D.png",
  cn = () => window.plausible,
  om = () => window.Adsgram.init({
    blockId: yt.app.adsgramBlockId,
    debug: yt.isDev,
    debugBannerType: "FullscreenMedia"
  }),
  rm = 31 * 1e3,
  cm = M(0, 100),
  lm = cm <= 100;
let Si = !1;
const Bi = () => {
    const t = localStorage.getItem("adsgramNextView") || Date.now();
    return Math.max(Math.ceil((t - Date.now()) / 1e3), 0)
  },
  dm = () => {
    c(Le);
    const t = g(),
      n = om(),
      s = c(Yl),
      a = v.adsgram,
      i = v.watchAd;
    c(N => N.mining.tasks[a]);
    const o = c(N => N.mining.tasks[i]),
      r = c(N => N.user.country),
      l = cn(),
      [d, u] = A.useState(Bi()),
      [h, _] = A.useState(Si),
      y = 16;
    return A.useEffect(() => {
      const N = setInterval(() => {
        u(Bi())
      }, 1e3);
      return () => {
        clearInterval(N)
      }
    }, []), !lm || h || s !== "mobile" || o === !1 ? null : e.jsxs(Z, {
      enableCheck: !1,
      action: () => {
        d === 0 && n.show().then(N => {
          t(Qt(y)), t(z({
            id: performance.now(),
            text: "16 PX earned!",
            icon: ""
          })), localStorage.setItem("adsgramNextView", `${Date.now()+rm}`), l("task_adsgram1", {
            props: {
              country: r,
              result: !0
            }
          })
        }).catch(N => {
          t(z({
            id: performance.now(),
            text: "Something went wrong."
          })), _(!0), Si = !0, l("task_adsgram1", {
            props: {
              country: r,
              result: !1
            }
          })
        })
      },
      boost: a,
      reward: y,
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
        className: m.content,
        children: [e.jsx("div", {
          className: m.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: im,
            className: m.image
          })
        }), e.jsxs("div", {
          className: m.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: m.row_title,
              children: "View ADS and get PX!"
            })
          }), d === 0 && e.jsxs("div", {
            children: ["Get ", e.jsx(U, {
              className: m.not_pixel_icon
            }), " ", y, " for each AD"]
          }), d !== 0 && e.jsx("div", {
            children: `Wait ${d} sec`
          })]
        }), e.jsx($, {
          boost: a
        })]
      })]
    })
  },
  um = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAABZElEQVR4nO3cza2CQBRA4cHYiHtLsBCKsAGDS4kNWARd4soECUTkDNxZnG/3Fs57nNzBv8mrTudLn7TawXSMASEDQgaEDAgZEDIgZEDIgJABIQNCBoQMCBkQMiBkQMiAkAEhA0IGhAwIHSN/+fN+zbbW7fHKttY/wiYwZ7wt1lsq5Hvh8cXWdb16ra7rvn7eexLD74EkXo7HU6H3wLmLb5pm9jFt206uM57EvfgsDIVO4JypKSuVEwgZEDIgZEDIgJABIQNCBoSKeyHd978/26iqape/ZQknEDIgVOR74Y/hVl2ytSM4gZABoaK3cKnbdsgJhAwIFbeFS3qRvIQTCBkQMiBkQMiAkAEhA0IGhEID5joQFHWwKJUwgfTiI+OlqAOWaaMTpRHHfMMmMPfFRp2R9l8/QT4LQwaEDAgZEDIgZEDIgJABIQNCBoQMCBkQMiBkQMiAkAEhA0IGhAwIGZBIKb0B7eY0Ujl2RcIAAAAASUVORK5CYII=",
  Am = () => {
    const t = g(),
      n = c(It),
      s = v.addToHomeScreen,
      a = c(o => o.mining.tasks[s]),
      i = 128;
    return n ? e.jsx(Z, {
      action: () => {
        window.Telegram.WebApp.checkHomeScreenStatus(o => {
          o === {
            unsupported: "unsupported",
            unknown: "unknown",
            added: "added",
            missed: "missed"
          }.added ? (t(be.checkTask({
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
        className: m.content,
        children: [!a && e.jsx("div", {
          className: m.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: um,
            className: m.image
          })
        }), e.jsxs("div", {
          className: m.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: m.row_title,
              children: "Add Not Pixel to Home screen"
            })
          }), !a && e.jsxs("div", {
            children: ["Get ", e.jsx(U, {
              className: m.not_pixel_icon
            }), " ", 128]
          })]
        }), e.jsx($, {
          boost: s
        })]
      })
    }) : null
  },
  mm = "data:image/gif;base64,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",
  pm = () => {
    const t = g(),
      n = c(It),
      s = v.addEmoji,
      a = 256,
      i = c(r => r.mining.tasks[s]),
      o = c(r => r.user.user);
    return !o || !o.isPremium || !n ? null : e.jsx(Z, {
      action: () => {
        window.Telegram.WebApp.requestEmojiStatusAccess(r => {
          r ? window.Telegram.WebApp.setEmojiStatus("5447461825023072674", {}, l => {
            l ? (t(be.checkTask({
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
        className: m.content,
        children: [!i && e.jsx("div", {
          className: m.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: mm,
            className: m.image
          })
        }), e.jsxs("div", {
          className: m.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: m.row_title,
              children: "Add emoji to status"
            })
          }), !i && e.jsxs("div", {
            children: ["Get ", e.jsx(U, {
              className: m.not_pixel_icon
            }), " ", a]
          })]
        }), e.jsx($, {
          boost: s
        })]
      })
    })
  },
  Oo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAACm0lEQVR4nO2c20rDQBCGN0UfIApeWaHe6r0gPpTiAX0CBQV9KsEH8FbBeiVoH0CwMtXBcZukbX6ys8r/QWiSzWm/zmZnl9JisL03DqQ1ParDoEAQCgShQBAKBKFAEAoEoUAQCgShQBAKBKFAEAoEoUAQCgShQBAKBKFAEAoEoUAQCgShQBAKBFnq+gZ397dd36KRna3dTq/fuUBl+e011a0mvK+sJrlPMoGWqsqJYLtfhcs+K99ux9dJ/SUFz3egVtZWumrfPNfRxQMXgXFl6yqv0aaRFm/rvlTNtQqXJoxQluXX2foZQhiNRm7Pk5XAONLWxh8/or4/x+PpH5MVRRFeip5LM3YVKBUuTST9oiwrZTVdywNXgSLv/PJ6sn56tO/5KK3hSASEAkGy7oWlc7Dk2Nyzj0BJUTzTlFmwCYO4CpTIOjs+mKxfXN1MlUsao2lO07H2uNQwAkHcOpFFIsYruubBtRfWkYb2ttJEnx6GoT9YnzomV7JIY6wklRmLzBWXd2BZMc5VcblHXExWnUicOP8FshqJxNE3fHyuPG5js5/oiWaTlUAbgW0kyash9agleRNuSkkkAjUKdV0XGQfb7WDGxrouS+qUJ6lArZytuEUiUJaqjkRSnLp3ZN31UuDWidjhmIpREfFQzYqTMtmuk5Y6CpMJtLPPishQWVKmY12ZrtIyG5Hyaaey9HhPknciKsoKi8utNBFmI1Cjz56r6x5NOZnA+IXfJnrskK9J1qTs5LDlky6GWxpjBcQybRTWzUrnQhZ54DwRGU882HM96fxvT/77z9v4vzEgnJEGoUAQCgShQBAKBKFAEAoEoUAQCgShQBAKBKFAEAoEoUAQCgShQBAKBKFAEAoEoUAQCgShQBAKRAghfAI/bQOb3RwWlAAAAABJRU5ErkJggg==",
  hm = () => {
    const t = c(u => u.user.languageCode),
      n = t === "ru" ? 74265 : 74263,
      s = t === "ru" ? 74263 : 74265,
      a = "Campaign2",
      i = v[`taskType${a}_${s}`],
      o = c(u => u.mining.tasks[i]);
    let r = v[`taskType${a}_${n}`];
    o && (r = v[`taskType${a}_${s}`]);
    const l = c(u => u.mining.tasks[r]),
      d = 1024;
    return t !== "en" ? null : e.jsx(Z, {
      action: () => {
        ee(`https://t.me/community_bot/join?startapp=id_${n}`)
      },
      boost: r,
      reward: d,
      children: e.jsxs("div", {
        className: m.content,
        children: [!l && e.jsx("div", {
          className: m.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: Oo,
            className: m.image
          })
        }), e.jsxs("div", {
          className: m.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: m.row_title,
              children: "The Open Friends"
            })
          }), !l && e.jsxs("div", {
            children: ["Get ", e.jsx(U, {
              className: m.not_pixel_icon
            }), " ", d]
          })]
        }), e.jsx($, {
          boost: r
        })]
      })
    })
  },
  gm = () => {
    const t = v.unitsWallet;
    return c(n => n.mining.tasks[t]), c(n => n.user.country), null
  },
  _m = M(0, 100),
  xm = _m <= 10,
  fm = () => {
    const t = v.skinlabTask,
      n = c(s => s.mining.tasks[t]);
    return c(s => s.user.country), !xm && !n && !yt.isDev, null
  },
  vm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAACyklEQVR4nO2cT0iTYRzH361ZyRRqFcxDgoaQFV2SoCVERBBdFC/ZIejQxUs3L96Vrtmx6DwjJCQqpA4NZuHAP4FDREYWZixd6DbMZZvwe/YeLDef9X3/Hb6fy3ds75732WdfePb+Yb6Wc50lg/w3fqrDoEAQCgShQBAKBKFAEAoEoUAQCgShQBAKBKFAEAoEoUAQCgShQBAKBKFAEAoEoUAQCgShQBAKBAl4dWL1wSOSkd4ByXdP+tULPp+b0/oHNhDEM3cmhJpOSV7ve1R1u1KxKDk62CO5/bvgwOwqwwaCuNbA5rOdkpduDVgy3uuH9yQ31r5ZMp4ubCCIYw08f+2OZPuV207szvgQHZT8kozbuh82EMT2Bl7sui/ZcuGG/Z9mDz4+fyBPLn2K2TI+Gwhi+5HI7PhTyeDRsGQuo1bJ1o6blu5nI/1ZMjU1LnkgcFDSruaZsIEgtjdwazMnmf3xVbLxxEnJdGpGsrCZlTzefEbycOMxrXFTiVeS+fX0rufN5i1OvrToE1SHDQRx/Ejk6t0hre2Kf7Ylw20dkrNvHkv6A3Va75uPj4Iz1YMNBHG8gYfqGyQjmsfAKwsJyf2aZ5KMPcMmWCNsIIjjZ6TNVTmXWZFsCDVZMu7S9FtLxqkVNhDEtWsiiTF15nnfVVnzGkg+m7FiWjXDBoK4flVuYkQ1sOKqXKr+IyEZGyk/cudqHRsI4noDzVU5n/kuGQyFd71eqtDA5TnzTLO714nZQBDP3JkwOTYsqXusvL62bPOM9GADQTx3b0w8qhp4uXxPjP+v34HJ91H1wOeN754NBPFcAwu/yqvyT3WmuWioVXh1cUpt4JHmmbCBIJ7/35jTkW7J+YkXrs9lL9hAEP5zEQgbCEKBIBQIQoEgFAhCgSAUCEKBIBQIQoEgFAhCgSAUCEKBIBQIQoEgFAhCgSAUCEKBIBSIYBjGDiltmN/9syZ+AAAAAElFTkSuQmCC",
  ym = () => {
    const t = v.spendTokens,
      n = c(a => a.mining.tasks[t]),
      s = 512;
    return e.jsx(Z, {
      boost: t,
      reward: s,
      children: e.jsxs("div", {
        className: m.content,
        children: [!n && e.jsx("div", {
          className: m.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: vm,
            className: m.image
          })
        }), e.jsxs("div", {
          className: m.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: m.row_title,
              children: "Spend Crypto"
            })
          }), !n && e.jsxs("div", {
            children: ["Get ", e.jsx(U, {
              className: m.not_pixel_icon
            }), " ", s]
          })]
        }), e.jsx($, {
          boost: t
        })]
      })
    })
  },
  wm = "data:image/png;base64,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",
  jm = M(0, 100),
  bm = jm <= 100,
  Nm = () => {
    const t = v.frogApp,
      n = c(i => i.mining.tasks[t]),
      s = 512,
      a = cn();
    return !bm && !n ? null : e.jsx(Z, {
      boost: t,
      action: () => {
        ee("https://t.me/frogfarmbot/frogfarm?startapp=291096007"), a("task_frogApp")
      },
      reward: s,
      children: e.jsxs("div", {
        className: m.content,
        children: [!n && e.jsx("div", {
          className: m.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: wm,
            className: m.image
          })
        }), e.jsxs("div", {
          className: m.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: m.row_title,
              children: "Join the Frog team now!"
            })
          }), !n && e.jsxs("div", {
            children: ["Get ", e.jsx(U, {
              className: m.not_pixel_icon
            }), " ", s]
          })]
        }), e.jsx($, {
          boost: t
        })]
      })
    })
  },
  Im = "data:image/png;base64,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",
  Cm = M(0, 100),
  Pm = Cm <= 100,
  Sm = () => {
    const t = v.tonPoker,
      n = c(r => r.mining.tasks[t]),
      a = c(r => r.user.languageCode) === "ru" ? "Фрироллы на $100 ждут!" : "$100 awaits — join now!",
      i = 512,
      o = cn();
    return !Pm && !n ? null : e.jsx(Z, {
      boost: t,
      action: () => {
        ee("https://t.me/tonpoker/lobby?startapp=eyJ0eXBlIjoibG9iYnkiLCJjaWQiOiJOb3RQaXhlbCIsImFmcCI6IlkyTmhOek14T1RGak1XTTFNR1prWXpOaFlXTmlOek5rTlRabU9UazFObVkifQ"), o("task_poker")
      },
      reward: i,
      children: e.jsxs("div", {
        className: m.content,
        children: [!n && e.jsx("div", {
          className: m.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: Im,
            className: m.image
          })
        }), e.jsxs("div", {
          className: m.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: m.row_title,
              children: a
            })
          }), !n && e.jsxs("div", {
            children: ["Get ", e.jsx(U, {
              className: m.not_pixel_icon
            }), " ", i]
          })]
        }), e.jsx($, {
          boost: t
        })]
      })
    })
  },
  Bm = "data:image/png;base64,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",
  Tm = M(0, 30),
  Em = Tm <= 100,
  Dm = () => {
    const t = v.solitaireGame,
      n = c(i => i.mining.tasks[t]),
      s = 512,
      a = cn();
    return !Em && !n ? null : e.jsx(Z, {
      boost: t,
      action: () => {
        ee("https://t.me/MySolitaireGameBot/play?startapp=NotPixel"), a("task_solitaire")
      },
      reward: s,
      children: e.jsxs("div", {
        className: m.content,
        children: [!n && e.jsx("div", {
          className: m.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: Bm,
            className: m.image
          })
        }), e.jsxs("div", {
          className: m.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: m.row_title,
              children: "Earn USDT in Solitaire"
            })
          }), !n && e.jsxs("div", {
            children: ["Get ", e.jsx(U, {
              className: m.not_pixel_icon
            }), " ", s]
          })]
        }), e.jsx($, {
          boost: t
        })]
      })
    })
  },
  km = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAABHpJREFUeJztmzFo20AUhn8VG0OWggcHj+lkyBLo4KV0CMVZBaH15Lljm7nQoeC59ZhZkxpctDqU0LVDIUvAUw1dQjIYvKSoLmqH6ylnWVKkexffqdwHoZEqdHef3713OjkO/vHs6+8/sBTmc7fmAIADWHmyfO7WHMfKo/FAdweqjhVIxAokYgUSsQKJWIFErEAiViARK5CIFUik9uun7i5UGxuBRKxAIlYgESuQSE1n49tn/srx1X5fU0/k0SZw+8yH95YJmy4iXMyXCDy/chK1TGFRHgB0HrJuuAN3LSpNx+ZAItoEjmfh2u+n1w1d3ZFGi8Cr/T4CL8B0EWG6iHB63aikPABwnn7R91Zu+8zH1sFtLuy1QpxeN3AzqU4x0ZoDr/b7uJmwonHUibDbrAMAtg76lSkmxhWRo04EoDoSjRH4frrelSpINEagCI/CKqBdoJgH0zA9CrULFOk8fBD/HHd196YYRgnMwuQorEVz3V3I5qgTrRQXE/tqRARe7qXnQb7JALAobJ+bF4VGCMyj1wrvvkgjxgvkTyemYrxAEROn8b3sSOcN8nJvfZOgfe7DHbip14t50ESUCuTismQAQODdyk2TqaL9LFS3BygSWEQcR7xGlFkUd+Ai8PxYhijNHbjYbdbXona6YI+Gw5H6D8958om2H5g3/YoSeMHKO5Ik0wVbD/KKHHhB/H/uwMXhTrnN2PEsROAFSiSSIlCFvNPrRqF7JJczMuI4hzsN7L56juHIJ0uUztCq5In/ZpGckhR54j3fvHpOrupKi0ha/uHwd7+q2rkLnvfENpP9U1Hhpe6QFn158gDW2cOdRjx4MerK7v/ltTNdRBjPQlzMl2sf2MV8ufI2EAA5CpUssso8LXCRyXNURHF3kZRIgTyFRXnTRYTh6CQ+zqusx13g5Vdae5wsIfwNH2froB8Xo/EsXHmJ1Z7IFRRlOZCLEzsxeMc6nyXyuMtzlXwEZsnjSx2xP+2JjwC3a9GL+ZL8rK1E4HB0kvrp8XODd36mxCLTlxeEtGOeS8VlTtYaj58LvNscnvYyqwzk5JMlT+Ryrx9Ho0rEwXORRRfIyaWT7EZFaYHtcxZNvBC4A7dQwxSJaYWBsiQSN3B7rRDHXZZOZCpyKYFcHkfHd1r48iStXZnHs+SKoGhAcDa6VyQThcn8p5JkAZGJ6trPH+X2EsQVfq/FOjGcAGXvU5S0QeVFvex4WD5txMWo6H1KReD35ot4ubLbrDN5oxN8b74oc5vCqFzwJhHHArBc2GuxXZoy4ym9jGENf1w5Lst4FuZuBsg8N/daIYK7L1shORZ+rgzO4w/LjX4/8NH8Y+4TShHEyExO55uJf28zIo2Nfktfpby0PCgThVS0/p1IGVRuh6nEWIHi8sVEcRwtOZC6kw2sT2GZCqqCjQsEmMT7YNPyAE1TWMdA7wuzX/tXACuQiBVIxAokYgUSsQKJWIFErEAiViARK5CIFUjECiRiBRKxAolYgUQcANCxqfo/8O113XH4gZVYjm+v6w4A/AXR4fs9W0fsqgAAAABJRU5ErkJggg==",
  Rm = M(0, 30),
  Mm = Rm <= 100,
  Um = () => {
    const t = v.tonDurakGame,
      n = c(i => i.mining.tasks[t]),
      s = 512,
      a = cn();
    return !Mm && !n ? null : e.jsx(Z, {
      boost: t,
      action: () => {
        ee("https://t.me/TonDurakGameBot/PLAY?startapp=ee1811e8c20553f6758373a6fa8b79147e627addd678a57c94c51012872c910e"), a("task_durak")
      },
      reward: s,
      children: e.jsxs("div", {
        className: m.content,
        children: [!n && e.jsx("div", {
          className: m.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: km,
            className: m.image
          })
        }), e.jsxs("div", {
          className: m.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: m.row_title,
              children: "Play TON DURAK, earn USDT!"
            })
          }), !n && e.jsxs("div", {
            children: ["Get ", e.jsx(U, {
              className: m.not_pixel_icon
            }), " ", s]
          })]
        }), e.jsx($, {
          boost: t
        })]
      })
    })
  },
  Om = {
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
  Qm = () => {
    const s = v["taskTypeCampaign4_74434"],
      a = c(l => l.user.country),
      i = c(l => l.mining.tasks[s]),
      o = 1024;
    if (!a) return null;
    const r = a.toUpperCase();
    return Om[r] ? e.jsx(Z, {
      action: () => {
        ee("https://t.me/community_bot/join?startapp=id_74434")
      },
      boost: s,
      reward: o,
      children: e.jsxs("div", {
        className: m.content,
        children: [!i && e.jsx("div", {
          className: m.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: Oo,
            className: m.image
          })
        }), e.jsxs("div", {
          className: m.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: m.row_title,
              children: "Surf the blockchain through exceptional creators"
            })
          }), !i && e.jsxs("div", {
            children: ["Get ", e.jsx(U, {
              className: m.not_pixel_icon
            }), " ", o]
          })]
        }), e.jsx($, {
          boost: s
        })]
      })
    }) : null
  },
  Fm = "/assets/task_sasha-D_2hRd0V.png",
  Gm = () => {
    const t = v.sashaX,
      n = c(i => i.mining.tasks[t]),
      s = c(i => i.user.pixelCoins),
      a = 512;
    return s < 1e5 ? null : e.jsx(Z, {
      boost: t,
      action: () => {
        Ct("https://x.com/takoy_sasha")
      },
      reward: a,
      children: e.jsxs("div", {
        className: m.content,
        children: [!n && e.jsx("div", {
          className: m.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: Fm,
            className: m.image
          })
        }), e.jsxs("div", {
          className: m.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: m.row_title,
              children: "Sasha on X.com"
            })
          }), !n && e.jsxs("div", {
            children: ["Get ", e.jsx(U, {
              className: m.not_pixel_icon
            }), " ", a]
          })]
        }), e.jsx($, {
          boost: t
        })]
      })
    })
  },
  zm = "data:image/png;base64,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",
  Lm = M(0, 30),
  Hm = Lm <= 100,
  qm = () => {
    const t = v.earnCoin,
      n = c(i => i.mining.tasks[t]),
      s = 512,
      a = cn();
    return !Hm && !n ? null : e.jsx(Z, {
      boost: t,
      action: () => {
        ee("https://t.me/earn/join"), a("task_earncoin")
      },
      reward: s,
      children: e.jsxs("div", {
        className: m.content,
        children: [!n && e.jsx("div", {
          className: m.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: zm,
            className: m.image
          })
        }), e.jsxs("div", {
          className: m.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: m.row_title,
              children: "Hold to Earn"
            })
          }), !n && e.jsxs("div", {
            children: ["Get ", e.jsx(U, {
              className: m.not_pixel_icon
            }), " ", s]
          })]
        }), e.jsx($, {
          boost: t
        })]
      })
    })
  },
  Ym = () => e.jsxs("div", {
    className: m.info_container,
    children: [e.jsx(dm, {}), e.jsx(Gm, {}), e.jsx(Nm, {}), e.jsx(qm, {}), e.jsx(Sm, {}), e.jsx(Dm, {}), e.jsx(Um, {}), e.jsx(fm, {}), e.jsx(gm, {}), e.jsx(Qm, {}), e.jsx(hm, {}), e.jsx(MA, {}), e.jsx(_a, {
      text: "Quick start"
    }), e.jsx(OA, {}), e.jsx(FA, {}), e.jsx(zA, {}), e.jsx(_a, {
      text: "Special"
    }), e.jsx(WA, {}), e.jsx(Am, {}), e.jsx(pm, {}), e.jsx(tm, {}), e.jsx(nm, {}), e.jsx($A, {}), e.jsx(EA, {}), e.jsx(LA, {}), e.jsx(HA, {}), e.jsx(qA, {}), e.jsx(VA, {}), e.jsx(ym, {}), e.jsx(_a, {
      text: "Browser"
    }), e.jsx(DA, {}), e.jsx(kA, {}), e.jsx(ZA, {}), e.jsx(KA, {}), e.jsx(XA, {}), e.jsx("div", {
      style: {
        height: 30
      }
    })]
  }),
  Xm = () => {
    const t = g(),
      [n, s] = A.useState(!1);
    return A.useEffect(() => {
      function a(i) {
        i.ctrlKey && i.altKey && i.keyCode === 67 && (async () => {
          try {
            await Mn(window.Telegram.WebApp.initData), await t(z({
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
  Vm = () => {
    const t = g(),
      n = c(a => a.user.pixelsForSaleOffset),
      s = c(a => a.user.pixelsForSaleLimit);
    return A.useEffect(() => {
      t(Ut.getPixelsForSale({
        offset: n,
        limit: s
      }))
    }, [n, s, t]), null
  },
  Jm = "_container_7jsmf_1",
  Wm = "_row_7jsmf_6",
  Zm = "_cell1_7jsmf_26",
  Km = "_cell2_7jsmf_30",
  $m = "_cell3_7jsmf_36",
  ep = "_icon_arrow_7jsmf_40",
  tp = "_header_7jsmf_47",
  np = "_data_7jsmf_57",
  sp = "_title_7jsmf_63",
  ap = "_pixelColor_7jsmf_68",
  ip = "_pixelCoords_7jsmf_77",
  op = "_pixelPriceValue_7jsmf_83",
  rp = "_pixelPriceDescription_7jsmf_91",
  cp = "_pixelState_7jsmf_95",
  lp = "_pixelDate_7jsmf_100",
  dp = "_paginationContainer_7jsmf_107",
  up = "_loadMoreButton_7jsmf_114",
  Ap = "_noPixelsContainer_7jsmf_136",
  mp = "_noPixelsText_7jsmf_143",
  pp = "_pixelsForSaleCountText_7jsmf_149",
  hp = "_skeleton_container_7jsmf_153",
  gp = "_skeleton_header_7jsmf_157",
  _p = "_skeleton_row_7jsmf_166",
  re = {
    container: Jm,
    row: Wm,
    cell1: Zm,
    cell2: Km,
    cell3: $m,
    icon_arrow: ep,
    header: tp,
    data: np,
    title: sp,
    pixelColor: ap,
    pixelCoords: ip,
    pixelPriceValue: op,
    pixelPriceDescription: rp,
    pixelState: cp,
    pixelDate: lp,
    paginationContainer: dp,
    loadMoreButton: up,
    noPixelsContainer: Ap,
    noPixelsText: mp,
    pixelsForSaleCountText: pp,
    skeleton_container: hp,
    skeleton_header: gp,
    skeleton_row: _p
  },
  ti = Us.getSelectors(t => t.user.pixelsForSale);
Os.getSelectors(t => t.user.pixelsSold);
const ni = Qs.getSelectors(t => t.daily.list);
$a.getSelectors(t => t.reward.list);
const Qo = Nn.getSelectors(t => t.tournament.approvedTemplatesList),
  xp = () => {
    const t = c(s => s.user.pixelsForSaleFetchStatus);
    return c(ti.selectTotal) === 0 && t === p.fulfilled ? e.jsx("div", {
      className: re.noPixelsContainer,
      children: e.jsx("span", {
        className: re.noPixelsText,
        children: "You don't have Pixels..."
      })
    }) : null
  },
  Fo = t => e.jsx("div", {
    className: `${re.cell1}`,
    children: t.children
  }),
  Go = t => e.jsx("div", {
    className: `${re.cell2}`,
    children: t.children
  }),
  zo = t => e.jsx("div", {
    className: `${re.cell3}`,
    children: t.children
  }),
  fp = () => e.jsxs("div", {
    className: `${re.row} ${re.header}`,
    children: [e.jsx(Fo, {
      children: e.jsx("span", {
        className: re.title,
        children: "Pixel"
      })
    }), e.jsx(Go, {
      children: e.jsx("span", {
        className: re.title,
        children: "Value"
      })
    }), e.jsx(zo, {
      children: e.jsx("span", {
        className: re.title,
        children: "Status"
      })
    })]
  }),
  vp = t => e.jsxs("div", {
    className: re.container,
    children: [e.jsx(fp, {}), e.jsx("div", {
      className: re.data,
      children: t.children
    })]
  }),
  yp = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  He = t => {
    const n = new Date().getFullYear(),
      s = t.getFullYear(),
      a = s === n ? "" : s,
      i = t.getMonth(),
      o = t.getDate(),
      r = t.getHours(),
      l = t.getMinutes();
    return `${o<10?0:""}${o} ${[yp[i]]} ${a} at ${r<10?0:""}${r}:${l<10?0:""}${l}`
  },
  wp = ({
    date: t
  }) => e.jsx("div", {
    className: re.pixelDate,
    children: He(new Date(t))
  }),
  jp = ({
    coords: t
  }) => e.jsxs("div", {
    className: re.pixelCoords,
    children: [t.x, ", ", t.y]
  }),
  bp = ({
    color: t
  }) => e.jsx("div", {
    className: re.pixelColor,
    style: {
      backgroundColor: t
    }
  }),
  Np = "_main_canvas_1cgxj_1",
  Ip = {
    main_canvas: Np
  },
  Fs = t => ({
    x: (t - 1) % B.width,
    y: Math.floor((t - 1) / B.height)
  }),
  ut = ({
    x: t,
    y: n
  }) => t + n * B.width + 1,
  Tn = ({
    x: t,
    y: n,
    width: s,
    blockSize: a = 4
  }) => (t + n * s) * a,
  xa = ({
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
  kt = t => {
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
  nn = (t, n, s) => ("#" + (1 << 24 | t << 16 | n << 8 | s).toString(16).slice(1)).toUpperCase(),
  wt = t => !(t.x < 0 || t.y < 0 || t.x > B.width - 1 || t.y > B.height - 1),
  cs = G("canvas/repaint", async ({
    pixelId: t,
    newColor: n
  }) => (await X.startRepaint({
    pixelId: t,
    newColor: n
  })).data);
let Kt = null;
const Ra = G("canvas/getPixelInfo", async ({
    id: t
  }) => (Kt !== null && (Kt.abort(), Kt = null), Kt = new AbortController, (await X.getPixelInfo({
    id: t,
    signal: Kt.signal
  })).data)),
  ls = G("canvas/getPrices", async () => (await X.getPrices()).data),
  ds = G("canvas/getPriceMask", async ({
    price: t
  }) => {
    const n = await X.getPriceMask({
        price: t
      }),
      s = new Uint8Array(n.data);
    return j.mask.draw({
      arr: s
    }), {
      result: !0
    }
  }),
  Cp = () => Ka() ? localStorage.getItem("enableAnimations") ? localStorage.getItem("enableAnimations") === "true" : (localStorage.setItem("enableAnimations", "true"), !0) : !0,
  Pp = {
    coords: null,
    animations: Cp(),
    stats: null,
    pixelInfo: null,
    getPixelInfoFetchStatus: p.idle,
    repaintFetchStatus: p.idle,
    prices: [],
    selectedPrice: null,
    priceMaskFetching: !1
  },
  Lo = ge({
    name: "canvas",
    initialState: Pp,
    reducers: {
      setCoords: (t, n) => {
        wt(n.payload) && (t.coords = n.payload)
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
        wt(n.payload) && (t.stats = ut(n.payload) ^ 3201282)
      }
    },
    extraReducers: t => {
      t.addCase(Ra.pending, n => {
        n.getPixelInfoFetchStatus = p.pending
      }).addCase(Ra.fulfilled, (n, s) => {
        n.pixelInfo = s.payload, n.getPixelInfoFetchStatus = p.fulfilled, Kt = null
      }).addCase(ls.pending, n => {}).addCase(ls.fulfilled, (n, s) => {
        n.prices = s.payload.prices
      }).addCase(ls.rejected, n => {}).addCase(ds.pending, n => {
        n.priceMaskFetching = !0
      }).addCase(ds.fulfilled, n => {
        n.priceMaskFetching = !1
      }).addCase(ds.rejected, n => {
        n.priceMaskFetching = !1
      }).addCase(cs.pending, n => {
        n.repaintFetchStatus = p.pending
      }).addCase(cs.fulfilled, n => {
        n.repaintFetchStatus = p.fulfilled
      }).addCase(cs.rejected, n => {
        n.repaintFetchStatus = p.rejected
      })
    }
  }),
  {
    setCoords: Ot,
    enableAnimations: Sp,
    disableAnimations: Bp,
    addPaintCoords: Tp,
    setPriceMask: X3,
    setSelectedPrice: Ep,
    updatePixelInfo: V3
  } = Lo.actions,
  Dp = Lo.reducer,
  $s = {
    getPixelInfo: Ra,
    getPriceMask: ds,
    getPrices: ls,
    repaint: cs
  };
class kp {
  constructor({
    viewport: n
  }) {
    this.viewport = n, this.pixiViewport = n.viewport, this.pixel = null, this.line = null, this.hexColor = "#42a6ff", this.color = `0x${this.hexColor.replaceAll("#","")}`
  }
  draw({
    x: n,
    y: s
  }) {
    wt({
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
    this.line = new PIXI.Graphics, this.line.setTransform(.5, .5), this.line.lineStyle(.2, this.color), this.line.moveTo(-.5, s).lineTo(n - .5, s), this.line.moveTo(n, -.5).lineTo(n, s - .5), this.line.moveTo(B.width - .5, s).lineTo(n + .5, s), this.line.moveTo(n, B.width - .5).lineTo(n, s + .5), this.line.zIndex = 10, this.pixiViewport.addChild(this.line)
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
  Rp = {
    command: Qe.idle,
    counter: 0
  },
  Ho = ge({
    name: "progress",
    initialState: Rp,
    reducers: {
      setProgressCommand: (t, n) => {
        t.command = n.payload.command, t.counter = t.counter + 1
      }
    }
  }),
  {
    setProgressCommand: dt
  } = Ho.actions,
  Mp = Ho.reducer,
  Up = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAElBMVEVHcEz/////96f/uQD/WQDnERFRxRXOAAAAAXRSTlMAQObYZgAAAKRJREFUeNrt1MENgzAQRNEVUEBqmKUA5DF3C7sApJj+W4kQKcCjHLP//m6jsSiKoiiKon9uKjpZbYZIPEEkM6ESQCW8hQto2r7ExwnwkH2YzHhikUk+h8mSHuLCBBIO3K3j5O0HEgAfJz1XOAGOk0Y2eKVJJB2eFdKvnnbShFpl3clTIWRtVSJGdmYWhdR8ceubQuZiLCa1mDWTe8UzR1EURT/0AVQMHG7ZD4ErAAAAAElFTkSuQmCC",
  Op = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAD1BMVEVHcEz/96f/uQD/WQDnERHKPBirAAAAAXRSTlMAQObYZgAAANhJREFUeNrt1cFthTAQhGHyoIFZN/A8SwHEQwGI0H9N0dNKOa+V634Hbr/QyLK8lFJKKaXMOucTXasvA1OJBoCpJArLB18Ink9eUZhL2WSNhPnE1KMxnckENhB0ZBMQwa/0EkNouWKgoyFYLukwtIGQTcCOHklu/jdgf2ve2aNvAPrE/q3DAbDn92+D6jAYCXBJEUkXGkxK3xVyQELLJpvORwPcH2rJWSXSSZ3UNZV4b4ok40Xuuru5jmyykvtzk++fSDLIY7k/nzz651e+TBhHPTGllFL+5xfUYCDCcZqQBQAAAABJRU5ErkJggg==",
  Qp = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAD1BMVEVHcEz/96f/uQD/WQDnERHKPBirAAAAAXRSTlMAQObYZgAAAQRJREFUeNrt1sFxxCAMheEXewtAJAUY4QIwcgGJof+aQtiZ3b2tdMlJ3/0fATrYcM4555zZBjMCsNg62oCfMDLSJwQcAUiWZPhMRNGUTAHf1mRr0FkeSS3Q+XgkOVGARqIXm/YaT6YJU9Te4ynAPCbAPCaaljIlxZM1JusLrJUG02ZuNVmKaeFIQ6SJAU1yH5NUM6aLX5MAhcYH/eGkTiRXGiIPuoMtOQsP6V7pEj7rHDCbrEqqiJwXTcwFbzU5s9S5ljhPp0n6JQdRoigiqIS3zo51H8kXZ5EMCFTWkexNWoZeJZLe0wa9hSITZRisXHrvMNlxk2L+9LUCq1vxnwbnnPtnvyvQK1qRfQjwAAAAAElFTkSuQmCC",
  Fp = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAD1BMVEVHcEz/96f/uQD/WQDnERHKPBirAAAAAXRSTlMAQObYZgAAAYJJREFUeNrt1tGN2zAQhOGJ5QIyvBQg7roA3a4KcEL2X1O0MpDY8IEikbdA3/uPEWXCEE6n0+n0n7lg2LcZm2kZSdK+NY8knAH8umGTv3cmMWMaBXsTzri640J2JheGpEZG3IVPgDuOTfwrofQ/2MOHrOiQX5JlcITJMzk0sktom5wvjn4ahrEk8ytz+6p85fhlDZ4+N5KBmTQPz2SyEV3d3kcOXlux/DbSLGJG3pJWEYpkvvo8KHCVzMRnFkWTCPPzsZPajKNEXs6duWAsScd/S1cR5cOeSkdi4nwwIWPyA22T6ZoZkknIVLSVLZG90RpNQJu7riYb9VqMHcnVXbzIZitEjREtR4l5qLW6iBtJUbRM7iWKzLS6iKlnMjVnivvq7kby5qam7kJqO1lrUf8k+cN3CzwTDV7vgJU/yWoLMBmOTLefkcRDFkUfi5Vb3QpZ0MnI5LWWrOh1IVVIKrpNIm4ijpFEUWu9Y4Dc4+5gxA1AGUvu+xXFsHJ+zZ5Op3/zG2ZWUn+tdqomAAAAAElFTkSuQmCC",
  Gp = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAD1BMVEVHcEz/96f/uQD/WQDnERHKPBirAAAAAXRSTlMAQObYZgAAAnBJREFUeNrtl12y2jAMhV2SBVSiC4iPuoDEJwu4c8P+11TLLoROr0P80ocO3/AzAX+RLNlmCG/evHnzD7lM/Yr1K7E7zLBob36DyOSKdSkehgznEQ8zWOpTNFyAORSSnUgsExIw1cs0nVMmAOZlu8h1PqcoMuEime8nWim/AeSsEuUPpn6F7FdwNPHZX7KhortnrxXJRMkKqqYpfNOvBWDeayyI6opjITaUZDJlA0WBAYasOhFTIy3WwTWKJRAgy4Uctl00VoUkAIqjL9oOf4KZBNqLbkZxFFF5B3uQgzBaY3xszJSq2dzuS6qKuhFGtwD/oK2EJd6VNV9tYWMimSQcKFqmDjIURjLWuusAfJEWzEhAFFyfe6WSSV8pAVEWgYrCjcLt05X2HhhcqTv4AaTQLBsFpcSY/1IUc6vIgCu2zw8i/oitdiaJboBPzYUjy7XVS0RRGLnfQ1SjRuF8sO8V3L/f6pKTg/4nZKJcHwoEmaOFCUf2ESMTnCkcR5E9SjACRq5t5eJGfDpTSwVJtpVPeM2eGi2igB1FYVFE62/rYENRcKCMrImJqB+DbhflaFsSGVe83YNI1uG0lY3poSguHg2Fn02FRUFVRONDsQOFBkcUPl4EiMVqz56rJdRRkoFT3j+as+e60BWRopSeECI6N2fP23ZlqklVhVw3tI/YbNxuC0lXoiu1i+OGlpKiiN2UTCK4K5/hEL8fCKvbxg2sMbxiy4kQd4zpRzjDszJ8nFK2KFozI8M5RlcsubKGk4iokVGuc+hQSCZYj2K8jQTPK1GZC0V2KLA19CprXaUe6yRWho6WQi/L9f3X7M1/zC/mbn/kN4xkqQAAAABJRU5ErkJggg==",
  zp = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAElBMVEVHcEz/96f/uQD/WQDnERFAMiwoKjrVAAAAAXRSTlMAQObYZgAAArpJREFUeNrt10F2mzAQBmDV4H1H5ADMrx4Aa9Q9CXif9xLuf5VqJHCTgGJot/4XXvjxSYw0kp/NI4888khK1R0n4V9nkQOkfm4T6Q8QtiZmPEKIWiXmQIh0Gu+OEJ2mApZZpd9DrDkB8/6McldUFGM80JqU07iPtAC0GBgms49YQIthItpBTjQHYNpJeDFMGnucNNIdJr4td0reMiayFvqZib1PUuGIBqAU197p64rIwokHFmK77aYR6W8kCo3HhTgZetrqgCHk/kUWv4dZqWH6uVnIeNs+dCLX6T0ZJENt6WRpGHCmCtcwjYsp7+a8pIAEc56GaXodlldry72VyaDkGokZrpN4Jivm22nYvl8jiTFmmsKbB9CWiHAiEse/keF7UtkbMeeZxIUDWepKhFhrCUpyppgB4intnHyBtYRTXp/fOr7mnMgEsiCytXwlRi7UkOWFZKTEsyXN0+r+rH0kBLg81s28vszk57rPRrZMbN2nsaYpHblC09RxOLDFalUSsei2VowtWTjzMefX8xuDCGzXYOl8+UKmd8TQpTGbWROtxmqR0hVITFgR6JKp2EvOrwCKJ6ZS0m8M1JYvPQAuHCKVEuk3vi2jRLoVcSKhIGoAdkVOgIgUSOUBWhXjAVecZfAA26Zfl1Iky0W8EnBdoRSRTLrPlWgKpMqEqflcieZXkXifUXf7zmbiCtWLvAgAAtwiCOCktomIDI0HiMnOZl4PAvoCCeNFJD3DeQ4LOBEQ2e36oxiHRsRHkpb1okQkDChd/jpYeHYirI+CZfnpMPVQ7MvRw3kIciiTF/Ntaum103LyZIHNvWSyxIl/uk9qT/SBVL25nxclJr+ZiNmTH/k2yyTsJU605ZiazuwjOrgSD7eTnPJhrmuB7CWQfm663cSpOEbC3wOk+Ehq583RXJrHX9NH/jt/AL3WmbEKtmBpAAAAAElFTkSuQmCC",
  Lp = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAFVBMVEVHcEz/uQD/WQDnERFAMiyACgUZDg0R26nsAAAAAXRSTlMAQObYZgAAAthJREFUeNrt18GO2jAQBuBZzHJmTMU5Hrecsx5xb3etnNGi3AFF8/6PUNsJywJ2Sa4VvxBSJH+ZxB6TAM8888x/mFk1nVjoQ9OrUD2WqPNIHk/gTGAC0dMnAKup5AVvyjj7mMQy6mvGlKtGEA3gqLpM4mMSyxBZGJ23QJaKiKBPNY7oWSB17IUZLscRpJAKZohYJpflNthHE+FI0g/cnFD3dMS9kBaDKGIGwvyYrCVU6JrjmVB+GNWXFlt3Xuben8TgRgxaGnZesY1ecO19E0gjRy1yRO2yfab42xz/SCTktOn8EdHmN5y6IYtIGvH+DyIaLLVW6l+D+qf3v6GLJHy9y0ljiQzLN5BYRgIREURdIskEFAYfAOJ1pUJiSqs5i0AMUSoCEkQk4XPUUIhB3EgnIpEsAGAg/mhrKJYR8U1PDhBNlwgRFKJcJF7CwAi6BhYSD/wpSxRZgDcTSCwjANEcIF1mA2aVM1QFojfSXciigbkECWCWEOOouioTjizzRvxvkQOkeJgfgoSODGIFiq4JMCC+4WYYfyapmm9OGALqptFUbQJZfydNJMlIIsD3k0yoFwJfOQxVwIspNA3h7QokL4EckWyOOLzpJjn0RORE+T5TVNgYIi8rrPMtY5aQD64Y8oSq0g/oCiYRRcUdAy5PHNVQCmVJ9xHJlCoL74ksTLmXzntm3hXIZ4FY5rpAOHfR3vv3YpVXtpAl3paIypbvUhnIZ58l80hsgTDXKjvJ3tGuROJXxnxQYTFfs0RR/0Av3D1v67s3lhkZRE2/SqTdc8h1EzG7gGyBtG17RyxzG4zO30sbc092AK0jgDK6JspuK/hn2vbm4Tuzn0vIJNOcyg4HbHaPyd4sARxRRI7rLTzOq0FQlUorbke+kyNqW6enlLK8G0viydkhMsBIkk7OTDSWGB0F7PbOjiVkt+emG02CmEjs7msDBTwtn1xNJQrr51/gZ67yF2l/ou0eQckjAAAAAElFTkSuQmCC",
  Hp = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAElBMVEVHcEz/WQDnERFAMiyACgUZDg3ZC39iAAAAAXRSTlMAQObYZgAAA7xJREFUeNrtmE2TozYQhhUDd0vZ3FEDdw0Nd1bGdy+y/v9fSbfEEAKiAqmtrdqqeS+iGD3qD3X32BZf+tKXtpL/AynFKf1xXx7hLKL+QcRJ5E8jZqE4qWpBzGlEXEZQXFYmEtJKXFSu75ctd+VlBM9u9MvTfyZPS774AvvTWbxJKcsZcf25miFEEeJQOMTXWUTOHiFqJbJDDBbHomdalogd0Rm+YpEfIoKReyArbIl2hByXwGLl2xBCwg5giEi2aTk6a7mD74yoR1geaGvhI2JSdRcRkCSowlJ770y6Xm+AyzNoMgIPAF6cQ3PQPrdPpDAWWDgvTof8pfR5mMMOSLWPCzrJKpN9FBH2g89/eOwsLTgF5J42MyOtQksEydkad0gCRC15v1Z9oPAjIN8O71CVjDSIvZSNb6VCbAOihjSiQ4lYYESrxutYMSwYDoywmg6eiB6g79gh18VrKo+KnjdRBISQLDvk3xA07F0qPxHVYx/idnw8eD9fkyj6jQEkLiLkliYOnQ1bI/P0wuGLfV8YTYgMoki+c9jouoA4XVmoMSJ6hdyqBWneHC/PihHGx8TP9tHKkh3jVlgEJtNMKKhazUmI/Y5TDE9LFUZgXu6TDPBoQcr5sCJevmcwNQKdJYKQbpVTF5Ef6QYo+hZYiJ0dl7ehnStCUozDd+yQdf7zGOCULk3EnjtkKF7r+CLS6STiuEzGetjMhODYpBl87WJBYrZvc9BSjc+JSdiP9IwRj2bDkJ4UpaxHTJjpPff+1pCtn76FcXygEVt574V3JhEkJ7NOISKGkkLQAiAhJ1UQ0edQI75OfyZw2NNmApOEVO6VKKUZPECwlYprNgGm/HIA4HSYwIboc3ECTPM4/SzdW1xv6QMyni0/IjLSouIkCVY/GExZ0bJqw5a8lqQYHr/Aj4OxrLnOAWCF3Obh1iaR+OeKe8ZPwKdn7FBQ9U6OWBN8+MvZOvwn41gWpPF22MdujAyI93xrHdQjbZKtnN8iHiLNJEsXxysjODvWqj0icqNn5M7N1gWk8RDCr7QsE8gQwkfUJSMuzNLeA7cypJFxyEHK0BUFek+948yNE8h6WkghmbEANQ/4wnvXM0IGlk8Bw94vQnjWh0r3c6VrCty/7ZjFKYJbZH2MQ1M4IaxUjSdliAa7PUIzZFVvL4+EADSIZBFRYDeIHfLvV4zkFDgj846Ts8IT8lrOPKWQ7iBCTn0fMau3hPxMobkI5AOai99COJmXkXWY4ylmHFdOjlc9ywm/ql+BMPMb/ajxN8we1xzBMA0/AAAAAElFTkSuQmCC",
  qp = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkAgMAAAANjH3HAAAADFBMVEVHcEznERFAMiyACgVxtGBQAAAAAXRSTlMAQObYZgAAAodJREFUeNrt1TFqG0EUBuA/GgTGeJnG6d0EzDZxs53N6ggq8phmQVdYkjYgBR8gV1ATMGlyhQGfYVATcoZp1I15mZ0dzay16ygkkCo/KoQ+3lvtm5ld/M/vpvoDqTGRJXxuJ0A08Lmekh9BNhO03eKQy5MyjntZbjDMDKcz+3xC/kXOMEyxQs58KBXpkbxBl9fUZpEI+aJ7WaJoosTxfvNyvq2oiR2zyG0nc3qXO25SbahR2lBsd4GU2dZ42dMKOxzH/6qZ1oLwLOcPeKK1ZmZB+kiumBm1Fz4W1F4EOzCeywaSHSBtiXH6NuVoM4oW2HVyT+rZCoSRkfbyiQ6DeLUAKmqLpsTOCwqiZZT3gCElXQkGjI5SLCAsQESPXgBB7Zyo6QXXQTQQWjW+ZhWXpoTwYoPcBVkDeKvDpYiUDaeupo9yT4wuSSrVCTvB7OXsOojwre2eNMKImF0+sobWvQi2Xm1evTvF9knpvsEHfsxrJJk1c6xv6oIWQ5GuXw5Dej7YlKGgF6LFnFTaOILj/p91UhDpgwD4isMdtDLLxn+iSKImS+iPgRiVZZbE+G5P6yQ5cr+yYMZEmIcimiFZ1A4xVZCUBzmUokPT9oIUXx0WjppjEQ6GAEkqSQ55qYlSxxyjopAa3YYXQ2Gi+J6vo1B3slcoiBqo4TNHOIQjNydSyKM21IahsrsMYqJ0vZdBandZEBE47VEvlQYg7a3/rlAPpK0Wsd7QCinCS9G33gkmLjMZOlTQI7MrRRth0+3cKG3N9rxo0qz5IMYKByTRIglb+EiHUXoRUYS1mM59ltMvI/Gi3LxcoxGiJ+REh1P/6srFIY7J/bqnxDgXvYipC6Wi6ci/eqn+BJYAHRseeKj2AAAAAElFTkSuQmCC",
  Yp = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkAgMAAAANjH3HAAAADFBMVEVHcExiV01AMiyACgVW8W35AAAAAXRSTlMAQObYZgAAAipJREFUeNrt0jGK20AUBuA/EoaVWFDl3o1CrGpvIB/BRd7EeBuVwU2uMGy6NKmUeiAY7NlDWNk75A5hq4lrw2Tk0egh24GQLIGE/cFYw8e8mfck/MeJ8ZS5usLTpPk5TdAnwq/lT291jX81k99tVsEnWeI0Ei43yEkixC3BGVN1VjPIPDuRbmdOi7LBpYzodSu5xDAZchIfAdSzEymbmoScOBneIzZls6alBKDVsNYhw5ZWbbVCDmsdAK11FjoYSFxoDeAAnzAxJ0h334YyAXJ6Z14C1iQVhqlJoL6T1owWgEJOVZgqEcn67rPb89aJHJPw37MX7WT/QfkSBJ/IiSok7IMEEB9YXhAJBaD0Tdu2BKDAgk6+Eqm+2nIowvS3XrUSd/JIt6HfqdAKN6Ybu33U90FSrSXQSWLd0gwkHFpBa3RRWoNFoNj0Ejnh5pApcAZSNp/ixi83LAmRLB/ofZBIBpkSVVlCM1wUjNzvLAWRdCIuSL2Sx8POJNJavkp7MYgbJhbEB8QG4KS1CJIfH/JFkO3KC/YkYwBj0QnPNDqWjWqSZ6J3TVu9b52nXVjDEgFpJ8kCR1n3e0IXtfCy7c6JKv5GpTV8bvllwa9k1t4AhRf7XXQycqLgkrYyv7Z7Ftr5sptWYPcbrmYbhChYEySiNyyAKXnu61svYfAcfW+bpLokqbZI5v7MCibrgfv2r8hJInGaXPi/6kymy4vCAyrUmaReUoXn/MX8AOTf3EjQ8IXZAAAAAElFTkSuQmCC",
  Xp = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkAgMAAAANjH3HAAAACVBMVEVHcExiV01AMiwfKIGrAAAAAXRSTlMAQObYZgAAAUlJREFUeNrt1TGKFEEUBuCvHwzMdOxuJGKyy7inmCNsMNU0Rh0aeoTCExjYi2Fj5IW8icgEixo+aLpgMZT50r/+ggrqPVdX/7UYqm2HMtm2K2MrcQZP1vZuIcpmC0oFgrTAj63OskePtVhI4SWikoLDew13ZXIPAaq5VGA+hQpiJD4pZQQKFegGiFLOwBlAPEKcujOITL5V6BhAl8kCcFsJ0gTwE6GzLfw+aTmSDhV6YC9FmeCIIJB+wQX0e6k7d1BBj0weNRxOpL4C8A44TAQcrby+EJA64OOztQfAYC0AN5OG3aihayZG0jxJH0hllL5LPYAFi0CM8IYUwN0Ib0l9FXCxtgAPFbKTQsP84qmyz481WrkH5tMrKzcVFEg77CaEP6w9A58h9VC1XpiJtictX1pH8squapnAV2y2YyA0NDp6LXHdhv/qL+6eN5hJ+KKhAAAAAElFTkSuQmCC",
  Vp = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkAgMAAAANjH3HAAAACVBMVEVHcExiV01AMiwfKIGrAAAAAXRSTlMAQObYZgAAAQBJREFUeNrtlUEKwjAQRX8DlcaVCwWXXRjxGLmExWWOMniCLsR1jyp2kGCT31pEcNG3avMyTWYyoVhY+DekJsKgAqhjFHjiBCn9WOlpZECKbqHLGaPfZDGYZephgo0A2bWtB2wvRQPdOag5xGK2ADrZoUHPJi6g6d+wQ54WZayWcnpFFqIPb0bpBgYDI3lj1H9eLZk4fiNMXN/eAgu5gdHiZ5guHbpAzTptPGbqGR1HprgLIisgsjXExPqd1CSoWYPBTTVl7uwq2Ya1ovV8H7NxgQjjhwPgOVlh51cGZCg8gD01FbkZX+OEGjolbiaAoakc6TGXwkxBzGi+svx1R3kAWDoiQG5YEtEAAAAASUVORK5CYII=",
  Jp = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkAgMAAAANjH3HAAAACVBMVEVHcExiV01AMiwfKIGrAAAAAXRSTlMAQObYZgAAAP5JREFUeNrtlU1qwzAQRp8FLlJWXTTQpRZVyTF0iZosdZShJ/AidO2jFoKJ8M9HcUPIxm9l62kYj2aE2dl5DhaFcHiQTtEAkIwlBtBmGVlY4gEY1owDMBnDJhOZ4jqD1dwhQ7Bb7kj6Klz5qIfZA4Md6bjyWhNkAC4cWaenhWllJ8bIxsaHmQGGmWFmTJoojVc9xKFwpsT35K2okAuKnofhhuXSeTSH5eApEzdMnNiSzlReoPLmhKnnd7qZSjUHFNr4v8yPukqhU2MVsv6OzaQihMvzBXRNwVT/2sIKTQbepfHiZtxNMmnqFtnCgmAs5VO2uTVlGml0vdj+1/0nv3CcIl47CPeHAAAAAElFTkSuQmCC";
let Wp = class {
  constructor({
    app: n,
    viewport: s,
    mainImage: a
  }) {
    this.app = n, this.pixiViewport = s.viewport, this.mainImage = a, this.size = 5, this.bombs = [Up, Op, Qp, Fp, Gp, zp, Lp, Hp, qp, Yp, Xp, Vp, Jp], this.textureArray = [];
    for (let i = 0; i < 13; i++) {
      let o = PIXI.Texture.from(this.bombs[i]);
      o.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST, this.textureArray.push(o)
    }
  }
  async boomWithDebounce({
    x: n,
    y: s
  }) {
    await jo(M(50, 3e3)), this.boom({
      x: n,
      y: s
    })
  }
  boom({
    x: n,
    y: s
  }) {
    const a = new PIXI.AnimatedSprite(this.textureArray);
    a.loop = !1, a.animationSpeed = .17, a.zIndex = 2, a.x = n, a.y = s, a.scale.set(M(1, 2) === 1 ? 1 : -1, 1), a.anchor.set(.48, .55), this.pixiViewport.addChild(a), a.play(), a.onComplete = () => {
      this.pixiViewport.removeChild(a)
    }
  }
};
const Zp = "_order_panel_dvy5p_1",
  Kp = "_content_dvy5p_13",
  $p = "_fast_mode_blocker_dvy5p_26",
  eh = "_info_dvy5p_39",
  th = "_active_color_dvy5p_48",
  nh = "_pixel_info_container_dvy5p_58",
  sh = "_pixel_info_color_dvy5p_66",
  ah = "_pixel_info_text_dvy5p_72",
  ih = "_info_button_dvy5p_78",
  oh = "_info_button_active_dvy5p_95",
  rh = "_price_value_dvy5p_99",
  ch = "_pixel_locked_text_dvy5p_105",
  lh = "_pixel_locked_text_painted_dvy5p_116",
  dh = "_pixel_locked_animation_dvy5p_138",
  uh = "_button_dvy5p_144",
  Ah = "_button_text_dvy5p_168",
  mh = "_flash_mode_button_text_dvy5p_181",
  ph = "_not_pixel_icon_dvy5p_192",
  hh = "_tg_logo_dvy5p_196",
  gh = "_image_dvy5p_201",
  _h = "_inner_wrapper_button_dvy5p_206",
  le = {
    order_panel: Zp,
    content: Kp,
    fast_mode_blocker: $p,
    info: eh,
    active_color: th,
    pixel_info_container: nh,
    pixel_info_color: sh,
    pixel_info_text: ah,
    info_button: ih,
    info_button_active: oh,
    price_value: rh,
    pixel_locked_text: ch,
    pixel_locked_text_painted: lh,
    pixel_locked_animation: dh,
    button: uh,
    button_text: Ah,
    flash_mode_button_text: mh,
    not_pixel_icon: ph,
    tg_logo: hh,
    image: gh,
    inner_wrapper_button: _h
  },
  Ti = window.Telegram.WebApp.CloudStorage;
let qo = class {
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
window.Telegram.WebApp.isVersionAtLeast("6.9") && (qo = class {
  static save(n, s, a = () => {}) {
    Ti.setItem(n, s, a)
  }
  static get(n, s = () => {}) {
    Ti.getItem(n, s)
  }
});
const ln = qo,
  jt = ["#E46E6E", "#FFD635", "#7EED56", "#00CCC0", "#51E9F4", "#94B3FF", "#E4ABFF", "#FF99AA", "#FFB470", "#FFFFFF", "#BE0039", "#FF9600", "#00CC78", "#009EAA", "#3690EA", "#6A5CFF", "#B44AC0", "#FF3881", "#9C6926", "#898D90", "#6D001A", "#BF4300", "#00A368", "#00756F", "#2450A4", "#493AC1", "#811E9F", "#A00357", "#6D482F", "#000000"],
  Ei = jt[M(0, jt.length - 1)],
  xh = {
    active: Ei,
    id: btoa(Ei),
    latest: ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
    basic: jt
  },
  Yo = ge({
    name: "color",
    initialState: xh,
    reducers: {
      addColor: (t, n) => {
        const s = t.latest.indexOf(n.payload),
          a = t.latest[0];
        s > -1 ? t.latest = [n.payload, ...t.latest.slice(0, s), ...t.latest.slice(s + 1, 10)] : t.latest = [n.payload, ...t.latest.slice(0, 7)], a !== n.payload && ln.save("colors", JSON.stringify(t.latest))
      },
      setColors: (t, n) => {
        t.latest = n.payload
      },
      setActiveColor: (t, n) => {
        t.active = n.payload, t.id = btoa(n.payload)
      }
    }
  }),
  {
    addColor: fh,
    setColors: vh,
    setActiveColor: si
  } = Yo.actions,
  yh = Yo.reducer,
  wh = "_panel_1mia4_1",
  jh = "_item_1mia4_15",
  bh = "_active_1mia4_24",
  Ma = {
    panel: wh,
    item: jh,
    active: bh
  },
  dn = ({
    children: t,
    className: n = "",
    style: s = {}
  }) => e.jsx("div", {
    className: `${Ma.panel} ${n}`,
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
    className: `${Ma.item} ${t?Ma.active:""}`,
    onPointerUp: () => {
      n()
    },
    children: s
  }),
  Xo = t => t ? t.friends >= Hc.friendsForTemplateCreation || t.isContractor : !1,
  Me = {
    create: "create",
    main: "main",
    result: "result"
  },
  Nh = () => {
    const t = g(),
      n = c(o => o.tournament.activeTab),
      s = c(Le),
      a = Xo(s),
      i = c(o => o.tournament.myTemplate);
    return e.jsxs(dn, {
      children: [a && i && e.jsx(Fe, {
        active: n === Me.create,
        setActive: () => t(In(Me.create)),
        children: "My template"
      }), e.jsx(Fe, {
        active: n === Me.main,
        setActive: () => t(In(Me.main)),
        children: "Tournament"
      }), e.jsx(Fe, {
        active: n === Me.result,
        setActive: () => t(In(Me.result)),
        children: "My results"
      })]
    })
  };
let gn = null;
class Ee {
  static async uploadTemplate({
    blob: n,
    posX: s,
    posY: a
  }) {
    const i = {
      "Content-Type": "application/octet-stream"
    };
    return s && s !== "" && (i.posX = s), a && a !== "" && (i.posY = a), C.post("/image/template/upload", n, {
      headers: i
    })
  }
  static async uploadTournamentTemplate({
    blob: n,
    posX: s,
    posY: a
  }) {
    return C.post("/tournament/template/upload", n, {
      headers: {
        "Content-Type": "application/octet-stream",
        posX: s,
        posY: a
      }
    })
  }
  static async getReferredTemplate() {
    return C.get("/image/template/my")
  }
  static async getTemplateById({
    id: n
  }) {
    return gn !== null && (gn.abort(), gn = null), gn = new AbortController, C.get(`/image/template/${n}`, {
      signal: gn.signal
    })
  }
  static async getTournamentTemplateById({
    id: n
  }) {
    return C.get(`/tournament/template/${n}`)
  }
  static async getSelectedTemplate() {
    return C.get("/tournament/template/subscribe/my")
  }
  static async getTemplatesList({
    limit: n,
    offset: s
  }) {
    return C.get(`/image/template/list?limit=${n}&offset=${s}`)
  }
  static async getApprovedTemplatesList({
    limit: n,
    offset: s
  }) {
    return C.get(`/tournament/template/list?limit=${n}&offset=${s}`)
  }
  static async getRandomTemplates() {
    return C.get("/tournament/template/list/random?limit=16")
  }
  static async subscribeToTemplate({
    id: n
  }) {
    return C.put(`/image/template/subscribe/${n}`)
  }
  static async subscribeToTournamentTemplate({
    id: n
  }) {
    return C.put(`/tournament/template/subscribe/${n}`)
  }
  static async getAvailableSizes({
    userId: n
  }) {
    return C.get(`/image/template/sizes/${n}`)
  }
}
class Vo {
  static async getPeriods() {
    return C.get("/tournament/periods")
  }
  static async getResults() {
    return C.get("/tournament/user/results")
  }
}
const us = G("tournament/getPeriods", async () => (await Vo.getPeriods()).data),
  As = G("tournament/getResults", async () => (await Vo.getResults()).data),
  ms = G("tournament/getMyTemplate", async ({
    id: t
  }) => (await Ee.getTournamentTemplateById({
    id: t
  })).data),
  ps = G("tournament/getSelectedTemplate", async () => (await Ee.getSelectedTemplate()).data),
  hs = G("tournament/getApprovedTemplatesList", async ({
    offset: t,
    limit: n
  }) => (await Ee.getApprovedTemplatesList({
    offset: t,
    limit: n
  })).data),
  gs = G("tournament/getRandomTemplatesList", async () => (await Ee.getRandomTemplates()).data),
  _s = G("tournament/selectTemplate", async ({
    id: t
  }) => (await Ee.subscribeToTournamentTemplate({
    id: t
  })).data),
  Ih = {
    activeTab: Me.main,
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
    approvedTemplatesList: Nn.getInitialState(),
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
  _n = "?time=1502",
  Jo = ge({
    name: "tournament",
    initialState: Ih,
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
        t.approvedTemplatesList = Nn.getInitialState(), t.approvedTemplatesListOffset = 0
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
      t.addCase(ms.pending, n => {}).addCase(ms.fulfilled, (n, s) => {
        s.payload.id && (n.myTemplate = {
          ...s.payload,
          type: Te.my,
          url: `${s.payload.url}${_n}`
        })
      }).addCase(ms.rejected, (n, s) => {}).addCase(us.pending, n => {
        n.periodsStatus = p.pending
      }).addCase(us.fulfilled, (n, s) => {
        n.periodsStatus = p.fulfilled, n.periods = s.payload.allPeriods, n.activePeriod = s.payload.activePeriod
      }).addCase(us.rejected, (n, s) => {
        n.periodsStatus = p.rejected
      }).addCase(As.pending, n => {
        n.resultsStatus = p.pending
      }).addCase(As.fulfilled, (n, s) => {
        n.resultsStatus = p.fulfilled, n.results = s.payload.rounds.sort((a, i) => i.round_id - a.round_id)
      }).addCase(As.rejected, (n, s) => {
        n.resultsStatus = p.rejected
      }).addCase(ps.pending, n => {
        n.selectedTemplateStatus = p.pending
      }).addCase(ps.fulfilled, (n, s) => {
        s.payload.id && (n.selectedTemplate = {
          ...s.payload,
          imageSize: s.payload.size || s.payload.imageSize,
          type: Te.referred,
          url: `${s.payload.url}${_n}`
        }), n.selectedTemplateStatus = p.fulfilled
      }).addCase(ps.rejected, (n, s) => {
        n.selectedTemplateStatus = p.rejected
      }).addCase(hs.pending, n => {
        n.approvedTemplatesListStatus = p.pending
      }).addCase(hs.fulfilled, (n, s) => {
        s.payload && s.payload.list && (Nn.addMany(n.approvedTemplatesList, s.payload.list.map(a => ({
          ...a,
          url: `${a.url}${_n}`
        }))), n.approvedTemplatesListOffset += 16, n.approvedTemplatesListTotal = Math.max(s.payload.total, n.approvedTemplatesListTotal)), n.approvedTemplatesListStatus = p.fulfilled
      }).addCase(hs.rejected, (n, s) => {
        n.approvedTemplatesListStatus = p.rejected
      }).addCase(gs.pending, n => {
        n.randomTemplatesListStatus = p.pending
      }).addCase(gs.fulfilled, (n, s) => {
        s.payload && s.payload.list && Nn.setAll(n.approvedTemplatesList, s.payload.list.map(a => ({
          ...a,
          url: `${a.url}${_n}`
        }))), n.randomTemplatesListStatus = p.fulfilled
      }).addCase(gs.rejected, (n, s) => {
        n.randomTemplatesListStatus = p.rejected
      }).addCase(_s.pending, n => {
        n.selectTemplateStatus = p.pending
      }).addCase(_s.fulfilled, (n, s) => {
        s.payload.id && (n.selectedTemplate = {
          ...s.payload,
          type: Te.referred,
          url: `${s.payload.url}${_n}`
        }), n.selectTemplateStatus = p.fulfilled
      }).addCase(_s.rejected, (n, s) => {
        n.selectTemplateStatus = p.rejected
      })
    }
  }),
  {
    setActiveTournamentTab: In,
    setActiveTournamentTemplate: ai,
    hideTournamentTemplates: ii,
    setShowTournamentDetailsPopup: Wo,
    setShowRoundRewardsPopup: Zo,
    changeTemplateCoordsIfNeeded: Ko,
    setMyTournamentTemplate: K3,
    clearApprovedTemplateList: $o,
    showTournamentTemplateInfoPopup: oi,
    closeTournamentTemplateInfoPopup: fa,
    setSelectedTemplate: er
  } = Jo.actions,
  Ge = {
    getMyTemplate: ms,
    getSelectedTemplate: ps,
    getApprovedList: hs,
    getRandomList: gs,
    selectTemplate: _s,
    getPeriods: us,
    getResults: As
  },
  we = t => {
    const n = t.tournament.activePeriod;
    return n && n.ID && n.PeriodType === "round" ? n.RoundID : null
  },
  Ch = t => {
    const n = we(t);
    if (!n) return null;
    const s = t.tournament.periods;
    for (let a = 0; a < s.length; a++) {
      const i = s[a];
      if (i.RoundID === n) return i
    }
    return null
  },
  On = t => {
    const n = t.tournament.activePeriod;
    if (!n) return null;
    if (n.PeriodType === "break" || n.PeriodType === "") {
      const s = n.ID,
        a = t.tournament.periods.filter(o => o.ID > s);
      return a.length === 0 ? null : a[0].RoundID
    } else if (n.PeriodType === "round") return n.RoundID;
    return null
  },
  Ph = t => {
    const n = On(t);
    if (!n) return null;
    const s = t.tournament.periods;
    for (let a = 0; a < s.length; a++) {
      const i = s[a];
      if (i.RoundID === n) return i
    }
    return null
  },
  tr = t => {
    const n = we(t);
    if (!n) return null;
    const s = t.tournament.results;
    if (!s) return null;
    const a = s.filter(i => i.round_id === n);
    return a.length > 0 ? a[0] : null
  },
  Sh = t => t.tournament.results,
  Bh = Jo.reducer;
window.getComputedStyle(document.body).getPropertyValue("--canvas-bg-color");
const Th = {
  1: 1
};
let rt;
const Eh = t => {
  rt = t
};
let Ua = 0;
setInterval(() => {
  console.log(Ua), Ua = 0
}, 1e4);
let En = !0;
window.addEventListener("blur", () => {
  En = !1
});
window.addEventListener("focus", () => {
  En = !0
});
document.addEventListener("visibilitychange", () => {
  document.hidden ? En = !1 : En = !0
});
let lt = null;
const Dh = (t, n) => {
    let s = {
      token: t
    };
    Da() && (s = {
      data: new TextEncoder().encode(JSON.stringify({
        token: t
      }))
    }), lt = new hc(Va.replace("https", "wss").replace("api/v1/", "connection/websocket"), s), lt.on("connected", function(a) {
      if (console.log(`connected over ${a.transport}`), !Da()) return;
      console.log("centrifuge image");
      const i = new Blob([a.data], {
          type: "image/webp"
        }),
        o = new Image;
      o.src = URL.createObjectURL(i), o.onload = () => {
        j.mainImage.loadFromCentrifuge(o).then(() => {
          const l = rt.getState().main.startParams.coords;
          l && (j.viewport.viewport.animate({
            scale: 60,
            time: 400,
            position: {
              x: l.x + .5,
              y: l.y + .5
            }
          }), j.mainImage.selectedPixel.draw(l), rt.dispatch(Ot(l)))
        })
      }
    }), lt.on("disconnected", function(a) {
      console.log(`disconnected: ${a.code}, ${a.reason}`)
    }), lt.on("error", function(a) {
      console.log(a)
    }), lt.on("publication", function(a) {
      if (a.channel === "event:message") {
        JSON.parse(new TextDecoder().decode(a.data)).forEach(r => {
          const l = JSON.parse(r.data);
          if (r.type === da.pixanos && rt.dispatch(Oh(l)), l.user.userId === n || !En) return;
          const u = rt.getState().canvas.animations;
          if (r.type === da.bomb) {
            const h = Fs(l.info.pixelId);
            u && j.mainImage.bomb.boomWithDebounce(h)
          }
          if (r.type === da.pumpkin) {
            const h = Fs(l.info.pixelId);
            j.mainImage.pumpkin.boomWithDebounce(h, u)
          }
        });
        return
      }
      const i = new Uint8Array(a.data);
      gc(i, (o, r) => {
        if (o) console.error("Ошибка распаковки данных:", o);
        else {
          const l = JSON.parse(new TextDecoder().decode(r));
          if (a.channel === "pixel:message") Object.values(l).forEach(d => {
            Ua += d.length
          }), j.mainImage.paintPixelsFromCentrifuge(l);
          else if (a.channel === `personal:user#${n}`) {
            const d = JSON.parse(new TextDecoder().decode(r));
            if (d.type === Th[1] && rt.getState().daily.list.entities[d.good_id]) {
              const u = rt.getState().daily.list.entities[d.good_id],
                h = u.name,
                _ = u.prices[0].quantity;
              rt.dispatch(z({
                id: performance.now(),
                text: `Transaction for daily ${u.id} completed! Got ${h} x${_}. Refresh the app.`,
                icon: ""
              }))
            }
          } else if (a.channel === "event:tournament") {
            const d = JSON.parse(new TextDecoder().decode(r));
            d.type && d.type === 1 && d.templates.forEach(h => {
              rt.dispatch(Ko(h))
            })
          } else console.log("unknown channel", a)
        }
      })
    }), lt.connect()
  },
  xs = G("main/getPixanosRating", async () => (await X.getPixanosRating()).data),
  kh = () => !1,
  Rh = {
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
    startParams: gd(),
    startAppTs: Date.now(),
    timeLimit: !1,
    showIntro: !1,
    showBetaTestIntro: !1,
    fastMode: !1,
    fastEnergy: !1,
    currentFastType: null,
    showUserAndSquadPopup: !1,
    userAndSquadPopupStack: [],
    showNoFlagsPopup: kh(),
    showMiningDetailsPopup: !1,
    showInviteFrensPopup: !1,
    showNoChargesPopup: !1,
    lastShowChargesPopupTs: Date.now() - Gc,
    showBoostDetailsPopup: !1,
    activeBoostDetails: he.paintReward,
    referrerSquadId: null,
    showPixanosEvent: !1,
    pixanosProcessing: !1,
    pixanosEventData: null,
    showPixanosRating: !1,
    pixanosRatingData: null,
    pixanosRatingStatus: p.idle,
    flyingRewards: []
  },
  nr = ge({
    name: "main",
    initialState: Rh,
    reducers: {
      setTimeLimit: t => {
        t.timeLimit = !0, lt && lt.disconnect()
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
        t.lastShowChargesPopupTs = n.payload, ln.save("lastShowChargesPopupTs", JSON.stringify(n.payload))
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
      t.addCase(xs.pending, (n, s) => {
        n.pixanosRatingStatus = p.pending
      }).addCase(xs.fulfilled, (n, s) => {
        n.pixanosRatingStatus = p.fulfilled, n.pixanosRatingData = s.payload
      }).addCase(xs.rejected, (n, s) => {
        n.pixanosRatingStatus = p.rejected
      })
    }
  }),
  {
    setTimeLimit: Mh,
    updateSettings: $3,
    enableFastMode: sr,
    disableFastMode: ea,
    enableFastType: ta,
    disableFastType: Ft,
    enableFastEnergy: Uh,
    disableFastEnergy: ar,
    setShowPixanosRating: fs,
    showPixanosEvent: Oh,
    hidePixanosEvent: Qh,
    setPixanosProcessing: Di,
    setShowIntro: eM,
    setShowBetaTestIntro: tM,
    addFlyingReward: Fh,
    removeFlyingReward: Gh,
    showInviteFrensPopup: nM,
    hideInviteFrensPopup: va,
    showNoChargesPopup: sM,
    hideNoChargesPopup: ya,
    setLastShowChargesPopupTs: aM,
    setShowMiningDetailsPopup: ir,
    setShowBoostDetailsPopup: ri,
    setActiveBoostDetails: zh,
    addItemToUserAndSquadPopupStack: Qn,
    removeItemFromUserAndSquadPopupStack: or,
    setShowNoFlagsPopup: Lh,
    setReferrerSquadId: Oa
  } = nr.actions,
  Hh = nr.reducer,
  qh = {
    getPixanosRating: xs
  },
  un = qa(t => t.main.settings, t => {
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
  rr = qa(t => t.main.settings, t => ({
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
  Yh = qa(t => t.main.settings, t => ({
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
  Xh = "_layout_oxfjd_1",
  Vh = "_container_oxfjd_7",
  Jh = "_placeholder_oxfjd_20",
  Wh = "_progress_oxfjd_24",
  Zh = "_counter_oxfjd_32",
  Kh = "_counter_max_text_oxfjd_45",
  Yt = {
    layout: Xh,
    container: Vh,
    placeholder: Jh,
    progress: Wh,
    counter: Zh,
    counter_max_text: Kh
  },
  $h = () => {
    g();
    const t = J(),
      n = c(o => o.mining.charges),
      s = c(o => o.mining.maxCharges),
      a = c(o => o.main.currentFastType),
      i = n >= s;
    return a !== null ? null : e.jsx("div", {
      className: Yt.layout,
      onPointerUp: o => {
        o.stopPropagation(), t.push("/energy-over")
      },
      children: e.jsxs("div", {
        className: Yt.container,
        children: [e.jsxs("div", {
          className: Yt.placeholder,
          children: [e.jsx(I, {
            children: ""
          }), e.jsxs("span", {
            children: [" ", n]
          }), i && e.jsx("span", {
            className: Yt.counter_max_text,
            children: " max"
          })]
        }), e.jsxs("div", {
          className: Yt.counter,
          children: [e.jsx(I, {
            children: ""
          }), e.jsxs("span", {
            children: [" ", n]
          }), i && e.jsx("span", {
            className: Yt.counter_max_text,
            children: " max"
          })]
        })]
      })
    })
  },
  eg = "_progress_g3q57_1",
  tg = {
    progress: eg
  },
  ng = ({
    progress: t
  }) => e.jsx("div", {
    className: tg.progress,
    style: {
      width: `${t}%`
    }
  }),
  sg = () => {
    const t = g(),
      n = c(h => h.mining.charges),
      s = A.useRef(n),
      a = c(h => h.mining.addedCharges),
      i = A.useRef(0),
      o = c(h => h.mining.reChargeTs),
      r = c(h => h.mining.reChargeSpeed),
      l = c(h => h.mining.maxCharges),
      [d, u] = A.useState(0);
    return A.useEffect(() => {
      const h = () => {
        if (s.current >= l) {
          _ = requestAnimationFrame(h);
          return
        }
        const y = Date.now(),
          x = Math.floor((y - o) / r) - i.current;
        x > 0 && s.current < l && (t(Eo(x)), t(Fu(x)));
        let w = (y - o) % r;
        u(w * 100 / r), _ = requestAnimationFrame(h)
      };
      let _ = requestAnimationFrame(h);
      return () => {
        cancelAnimationFrame(_), i.current = 0
      }
    }, [o]), A.useEffect(() => {
      s.current = n, n === l && u(0)
    }, [n]), A.useEffect(() => {
      i.current = a
    }, [a]), e.jsxs(ae.Fragment, {
      children: [e.jsx($h, {}), e.jsx(ng, {
        progress: d
      })]
    })
  },
  ag = "_layout_91s2c_1",
  ig = "_container_91s2c_21",
  og = "_buttons_container_91s2c_27",
  rg = "_button_91s2c_27",
  cg = "_shop_button_91s2c_45",
  lg = "_container__bottom_91s2c_50",
  dg = "_fast_type_button_91s2c_50",
  ug = "_disabled_button_cover_91s2c_62",
  Ag = "_fast_mode_button_enabled_91s2c_72",
  mg = "_available_91s2c_82",
  pg = "_limited_good_timer_91s2c_99",
  hg = "_disabled_available_cover_91s2c_120",
  gg = "_button_image_91s2c_130",
  _g = "_animation_91s2c_147",
  xg = "_shake_91s2c_1",
  P = {
    layout: ag,
    container: ig,
    buttons_container: og,
    button: rg,
    shop_button: cg,
    container__bottom: lg,
    fast_type_button: dg,
    disabled_button_cover: ug,
    fast_mode_button_enabled: Ag,
    available: mg,
    limited_good_timer: pg,
    disabled_available_cover: hg,
    button_image: gg,
    animation: _g,
    shake: xg
  },
  fg = "_number_179d2_1",
  vg = "_layout_179d2_6",
  yg = "_viewer_179d2_14",
  wg = "_container_179d2_18",
  jg = "_digit_179d2_25",
  bg = {
    number: fg,
    layout: vg,
    viewer: yg,
    container: wg,
    digit: jg
  },
  Ng = "_layout_q3t4p_1",
  Ig = "_viewer_q3t4p_9",
  Cg = "_container_q3t4p_18",
  Pg = "_digit_q3t4p_25",
  xn = {
    layout: Ng,
    viewer: Ig,
    container: Cg,
    digit: Pg
  },
  Sg = ({
    digit: t = 0,
    fontSize: n = 16,
    fontWeight: s = 600,
    gap: a = 6
  }) => {
    const [i, o] = A.useState(!0), [r, l] = A.useState(0), d = r === 0 ? `translateY(${a/2}px)` : `translateY(-${a/2+(n+a)*r-a}px)`;
    return A.useEffect(() => {
      o(!1);
      const u = setTimeout(() => {
        o(!0)
      }, 500);
      return () => {
        clearTimeout(u)
      }
    }, [r]), A.useEffect(() => {
      l(t)
    }, [t]), e.jsx("div", {
      className: xn.layout,
      children: e.jsxs("div", {
        className: xn.viewer,
        style: {
          height: n + a
        },
        children: [e.jsx("span", {
          className: xn.digit,
          style: {
            visibility: i ? "visible" : "hidden",
            alignSelf: "center",
            fontSize: n,
            fontWeight: s
          },
          children: r
        }), e.jsx("div", {
          className: xn.container,
          style: {
            transform: d,
            visibility: i ? "hidden" : "visible",
            gap: a
          },
          children: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(u => e.jsx("span", {
            className: xn.digit,
            style: {
              fontSize: n,
              fontWeight: s
            },
            children: u
          }, u))
        })]
      })
    })
  },
  Fn = ({
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
      className: bg.number,
      children: r.map((l, d) => l === "space" ? e.jsx("div", {
        children: " "
      }, r.length - d) : e.jsx(Sg, {
        digit: Number(l),
        fontSize: n,
        fontWeight: s,
        gap: a
      }, r.length - d))
    })
  },
  Bg = {
    isTMA: !1,
    isAuth: !1,
    authData: null
  },
  cr = ge({
    name: "auth",
    initialState: Bg,
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
    setIsTMA: Tg,
    setIsAuth: Eg,
    setAuthData: Dg
  } = cr.actions,
  lr = t => t.auth.isTMA,
  qe = t => t.auth.isAuth,
  kg = cr.reducer;
let wa = !1;
const Rg = async ({
  dispatch: t,
  amount: n,
  charges: s,
  maxCharges: a,
  status: i,
  state: o
}) => {
  var l, d;
  if (!n && o && (n = o.shop.available[1], s = o.mining.charges, a = o.mining.maxCharges, i = o.shop.useProductStatus), !n || n === 0) return t(Xs(10)), t(st(1)), t(at()), t(ar()), !1;
  if (s === a) return !1;
  if (wa) return p.pending;
  wa = !0, t(dt({
    command: Qe.start
  }));
  try {
    (await t(Js.useProduct({
      productId: 1,
      pixelId: 1
    }))).meta.requestStatus === p.fulfilled && (t(Qu(a)), t(Vs({
      product: 1,
      amount: 1
    })), (d = (l = window.Telegram.WebApp) == null ? void 0 : l.HapticFeedback) == null || d.notificationOccurred("error"))
  } catch (u) {
    console.log("error", u)
  } finally {
    wa = !1, t(dt({
      command: Qe.finish
    }))
  }
  return !0
}, Mg = () => {
  const t = g(),
    n = c(qe),
    s = 1,
    a = c(d => d.shop.available[s]),
    o = 10 + String(a).length * 6,
    r = c(d => d.main.fastEnergy),
    l = [P.button, P.fast_type_button];
  return r && l.push(P.fast_mode_button_enabled), n ? e.jsxs("button", {
    className: `${l.join(" ")} ${P.shop_button}`,
    onPointerUp: async () => {
      if (r) t(ar());
      else {
        if (!a || a === 0) return t(st(s)), t(at()), !1;
        t(Uh())
      }
    },
    children: [e.jsx("img", {
      alt: "img",
      className: P.button_image,
      src: fo
    }), e.jsx("div", {
      className: P.available,
      style: {
        width: o
      },
      children: !a || a === 0 ? e.jsx(I, {
        children: ""
      }) : e.jsx(Fn, {
        number: a,
        fontSize: 11,
        fontWeight: 400,
        gap: 3
      })
    })]
  }) : null
}, Ug = {
  isShowSideMenu: !1
}, dr = ge({
  name: "layout",
  initialState: Ug,
  reducers: {
    setShowSideMenu: (t, n) => {
      t.isShowSideMenu = n.payload
    }
  }
}), {
  setShowSideMenu: Rt
} = dr.actions, ur = t => t.layout.isShowSideMenu, Og = dr.reducer;
let Xt = null,
  Vt = null;
class Ar {
  static async personal({
    league: n
  }) {
    Xt !== null && (Xt.abort(), Xt = null), Xt = new AbortController;
    const s = await C.get(`/ratings/personal?league=${n.toLowerCase()}&limit=20`, {
      signal: Xt.signal
    });
    return Xt = null, s
  }
  static async squad({
    league: n
  }) {
    Vt !== null && (Vt.abort(), Vt = null), Vt = new AbortController;
    const s = await C.get(`/ratings/squads?league=${n.toLowerCase()}&limit=20`, {
      signal: Vt.signal
    });
    return Vt = null, s
  }
}
const vs = G("ratings/personal", async ({
    league: t
  }) => (await Ar.personal({
    league: t
  })).data),
  ys = G("ratings/squad", async ({
    league: t
  }) => (await Ar.squad({
    league: t
  })).data),
  Qg = {
    list: [],
    myPlace: 0,
    mySquadPlace: 0,
    mySquad: null,
    league: "bronze",
    status: p.idle
  },
  mr = ge({
    name: "ratings",
    initialState: Qg,
    reducers: {
      setActiveLeague: (t, n) => {
        t.league = n.payload
      },
      clearRatingList: t => {
        t.list = []
      }
    },
    extraReducers: t => {
      t.addCase(vs.pending, (n, s) => {
        n.status = p.pending
      }).addCase(vs.fulfilled, (n, s) => {
        n.status = p.fulfilled, n.list = [...Object.values(s.payload.top)], n.myPlace = s.payload.myPlace
      }).addCase(vs.rejected, (n, s) => {
        n.status = p.rejected
      }).addCase(ys.pending, (n, s) => {
        n.status = p.pending
      }).addCase(ys.fulfilled, (n, s) => {
        n.status = p.fulfilled, n.list = [...Object.values(s.payload.top)], n.mySquadPlace = s.payload.MySquadPlace, n.mySquad = s.payload.mySquad
      }).addCase(ys.rejected, (n, s) => {
        n.status = p.rejected
      })
    }
  }),
  {
    setActiveLeague: pr,
    clearRatingList: Fg
  } = mr.actions,
  ci = {
    personal: vs,
    squad: ys
  },
  Gg = mr.reducer,
  ws = G("history/get", async ({
    offset: t,
    limit: n
  }) => (await X.getHistory({
    offset: t,
    limit: n
  })).data),
  zg = {
    list: [],
    status: p.idle
  },
  hr = ge({
    name: "history",
    initialState: zg,
    reducers: {
      resetHistory: t => {
        t.list = [], t.status = p.idle
      }
    },
    extraReducers: t => {
      t.addCase(ws.pending, (n, s) => {
        n.status = p.pending
      }).addCase(ws.fulfilled, (n, s) => {
        n.status = p.fulfilled, n.list = s.payload
      }).addCase(ws.rejected, (n, s) => {
        n.status = p.rejected
      })
    }
  });
hr.actions;
const li = {
    get: ws
  },
  Lg = hr.reducer,
  Pt = sn();
Pt.startListening({
  matcher: _e(be.info.fulfilled),
  effect: (t, n) => {
    t.payload.activated && (n.dispatch(Qd(t.payload.totalUserPixels)), n.dispatch(Co(t.payload.userBalance))), n.dispatch(sl(t.payload.goods))
  }
});
Pt.startListening({
  matcher: _e(be.checkTask.fulfilled),
  effect: (t, n) => {
    const s = t.meta.arg.key,
      a = t.payload[s],
      i = t.meta.arg.reward,
      o = t.meta.arg.disableFailPopup;
    a && (s === v.pumpkin && n.dispatch($t({
      product: 7,
      amount: 6
    })), n.dispatch(Qt(i)));
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
Pt.startListening({
  matcher: _e(be.checkBoost.fulfilled),
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
Pt.startListening({
  matcher: _e(be.checkBoost.fulfilled),
  effect: (t, n) => {
    const s = n.getState(),
      a = s.main.settings,
      i = t.meta.arg.key,
      o = t.payload[i],
      r = t.meta.arg.price;
    if (o) {
      if (i === he.energyLimit) {
        const l = s.mining.boosts[he.energyLimit],
          d = a.UpgradeChargeCount.levels[l].Boost;
        n.dispatch(Uu(s.mining.maxCharges + d)), n.dispatch(Eo(d))
      }
      if (i === he.reChargeSpeed) {
        const l = s.mining.boosts[he.reChargeSpeed],
          d = a.UpgradeChargeRestoration.levels[l].ChargeBoost;
        n.dispatch(Ou(d))
      }
      n.dispatch(zd(r))
    }
  }
});
Pt.startListening({
  matcher: _e(be.checkTask.rejected),
  effect: (t, n) => {
    n.dispatch(z({
      id: performance.now(),
      text: "Check failed",
      icon: ""
    }))
  }
});
Pt.startListening({
  matcher: _e(be.checkBoost.rejected),
  effect: (t, n) => {
    n.dispatch(z({
      id: performance.now(),
      text: "Not enough PX",
      icon: ""
    }))
  }
});
Pt.startListening({
  matcher: _e(To),
  effect: (t, n) => {
    const a = n.getState().mining.toggleAction;
    console.log("boosts length: ", JSON.stringify(a).length), ln.save("boosts", JSON.stringify(a))
  }
});
const na = sn();
na.startListening({
  matcher: _e($s.getPriceMask.pending, Ut.getPixelsForSale.pending, Ut.getPixelsSold.pending, li.get.pending),
  effect: (t, n) => {
    n.dispatch(dt({
      command: Qe.start
    }))
  }
});
na.startListening({
  matcher: _e($s.getPriceMask.fulfilled, Ut.getPixelsForSale.fulfilled, Ut.getPixelsSold.fulfilled, li.get.fulfilled),
  effect: (t, n) => {
    n.dispatch(dt({
      command: Qe.finish
    }))
  }
});
na.startListening({
  matcher: _e($s.getPriceMask.rejected),
  effect: (t, n) => {
    t.error.code !== "ERR_CANCELED" && n.dispatch(dt({
      command: Qe.finish
    }))
  }
});
const gr = sn();
gr.startListening({
  matcher: _e(Ut.getUser.fulfilled),
  effect: (t, n) => {
    n.dispatch(pr(t.payload.data.league))
  }
});
const Gn = sn();
Gn.startListening({
  actionCreator: sr,
  effect: () => {
    j.mainImage.selectedPixel.hide()
  }
});
Gn.startListening({
  actionCreator: ea,
  effect: () => {
    j.mainImage.selectedPixel.show()
  }
});
Gn.startListening({
  actionCreator: ta,
  effect: () => {
    j.mainImage.selectedPixel.hide()
  }
});
Gn.startListening({
  actionCreator: Ft,
  effect: () => {
    j.mainImage.selectedPixel.show()
  }
});
const _r = sn();
_r.startListening({
  matcher: _e(ci.squad.fulfilled),
  effect: (t, n) => {
    n.dispatch(Ld(t.payload.mySquad))
  }
});
const Hg = {
    info: null,
    popupId: null,
    getInfoFetchStatus: p.idle
  },
  js = G("squad/getSquadInfo", async ({
    id: t
  }) => (await X.getSquadInfo({
    id: t
  })).data),
  xr = ge({
    name: "squad",
    initialState: Hg,
    reducers: {
      setPopupSquadId: (t, n) => {
        t.popupId = n.payload
      }
    },
    extraReducers: t => {
      t.addCase(js.pending, n => {
        n.getInfoFetchStatus = p.pending
      }).addCase(js.fulfilled, (n, s) => {
        n.info = s.payload, n.getInfoFetchStatus = p.fulfilled
      }).addCase(js.rejected, n => {
        n.getInfoFetchStatus = p.rejected
      })
    }
  });
xr.actions;
const qg = xr.reducer,
  sa = {
    getInfo: js
  },
  Yg = "/assets/coffee_break-nQdMk1u4.png",
  Xg = G("template/subscribe", async ({
    id: t
  }) => (await Ee.subscribeToTemplate({
    id: t
  })).data),
  bs = G("template/getTemplateList", async ({
    offset: t,
    limit: n
  }) => (await Ee.getTemplatesList({
    offset: t,
    limit: n
  })).data),
  Vg = G("template/getAvailableSizes", async ({
    userId: t
  }) => (await Ee.getAvailableSizes({
    userId: t
  })).data),
  Ns = G("template/getReferredTemplate", async () => (await Ee.getReferredTemplate()).data),
  Qa = G("template/getMyTemplate", async ({
    id: t
  }) => (await Ee.getTemplateById({
    id: t
  })).data),
  Is = G("template/getWorldTemplate", async () => ({
    x: 0,
    y: 0,
    imageSize: B.width,
    url: Yg,
    type: Te.world
  })),
  Jg = {
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
  fr = ge({
    name: "template",
    initialState: Jg,
    reducers: {
      setActiveTemplate: (t, n) => {
        t.active = n.payload, j.mainImage.worldTemplate.hide(), j.mainImage.worldTemplate.show(n.payload)
      },
      setActiveTemplateTab: (t, n) => {
        t.activeTab = n.payload
      },
      hideTemplates: t => {
        t.active = null, j.mainImage.worldTemplate.hide()
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
      t.addCase(Ns.pending, n => {}).addCase(Ns.fulfilled, (n, s) => {
        if (s.payload) {
          const a = {
            ...s.payload,
            type: Te.referred
          };
          n.referredTemplate = a
        }
      }).addCase(Ns.rejected, (n, s) => {}).addCase(Qa.pending, n => {}).addCase(Qa.fulfilled, (n, s) => {}).addCase(Is.pending, (n, s) => {}).addCase(Is.fulfilled, (n, s) => {
        const a = {
          ...s.payload,
          type: Te.world
        };
        n.worldTemplate = a, j.mainImage.worldTemplate.add(a)
      }).addCase(Is.rejected, (n, s) => {}).addCase(bs.pending, n => {
        n.listStatus = p.pending
      }).addCase(bs.fulfilled, (n, s) => {
        n.listStatus = p.fulfilled, s.payload && (n.list = [...n.list, ...s.payload], n.listOffset += 12)
      }).addCase(bs.rejected, n => {
        n.listStatus = p.rejected
      })
    }
  }),
  {
    setActiveTemplate: Wg,
    setActiveTemplateTab: ki,
    hideTemplates: di,
    setTemplateOpacity: Zg,
    setReferredTemplate: Kg,
    setMyTemplate: $g,
    setTemplateListOffset: iM,
    clearTemplatesListData: e_,
    setShowTemplateDetailsPopup: vr,
    setShowTemplateInfoPopup: Fa
  } = fr.actions,
  bt = {
    getReferredTemplate: Ns,
    getTemplateById: Qa,
    getWorldTemplate: Is,
    getList: bs,
    getAvailableSizes: Vg,
    subscribe: Xg
  },
  t_ = fr.reducer,
  n_ = {
    list: Qs.getInitialState(),
    selected: 1,
    showHowDailyWorksPopup: !1,
    getDailyListFetchStatus: p.idle,
    getFirstDailyFetchStatus: p.idle
  },
  Cs = G("daily/getList", async () => (await X.getDailyList()).data),
  Ps = G("daily/getFirstDaily", async () => (await X.getFirstDaily()).data),
  yr = ge({
    name: "daily",
    initialState: n_,
    reducers: {
      setSelectedDaily: (t, n) => {
        t.selected = n.payload
      },
      setShowHowDailyWorksPopup: (t, n) => {
        t.showHowDailyWorksPopup = n.payload
      },
      updateOneDaily: (t, n) => {
        Qs.updateOne(t.list, n.payload)
      }
    },
    extraReducers: t => {
      t.addCase(Cs.pending, n => {
        n.getDailyListFetchStatus = p.pending
      }).addCase(Cs.fulfilled, (n, s) => {
        Qs.setAll(n.list, s.payload.dailyAvailable), n.getDailyListFetchStatus = p.fulfilled
      }).addCase(Cs.rejected, n => {
        n.getDailyListFetchStatus = p.rejected
      }).addCase(Ps.pending, n => {
        n.getFirstDailyFetchStatus = p.pending
      }).addCase(Ps.fulfilled, (n, s) => {
        n.getFirstDailyFetchStatus = p.fulfilled
      }).addCase(Ps.rejected, n => {
        n.getFirstDailyFetchStatus = p.rejected
      })
    }
  }),
  s_ = t => {
    const n = t.daily.selected;
    return ni.selectById(t, n)
  },
  {
    setSelectedDaily: a_,
    updateOneDaily: oM,
    setShowHowDailyWorksPopup: wr
  } = yr.actions,
  i_ = yr.reducer,
  jr = {
    getList: Cs,
    getFirstDaily: Ps
  },
  Ss = G("reward/getList", async ({
    userId: t
  }) => (await X.getRewards({
    userId: t
  })).data),
  ja = G("reward/getById", async ({
    rewardId: t
  }) => (await X.getRewardById({
    rewardId: t
  })).data),
  o_ = {
    showPopup: !1,
    id: null,
    rewardUserId: null,
    active: null,
    list: $a.getInitialState(),
    getListStatus: p.idle,
    getRewardStatus: p.idle
  },
  br = ge({
    name: "reward",
    initialState: o_,
    reducers: {
      showRewardPopup: t => {
        t.showPopup = !0
      },
      hideRewardPopup: t => {
        t.showPopup = !1
      },
      setRewardId: (t, n) => {
        t.id = n.payload.rewardId, t.rewardUserId = n.payload.rewardUserId
      },
      clearRewardId: t => {
        t.id = null, t.rewardUserId = null
      },
      addReward: (t, n) => {
        t.active = n.payload
      },
      removeReward: t => {
        t.active = null
      },
      clearInventoryList: t => {
        $a.removeAll(t.list)
      }
    },
    extraReducers: t => {
      t.addCase(Ss.pending, n => {
        n.getListStatus = p.pending
      }).addCase(Ss.fulfilled, (n, s) => {
        n.list = s.payload, n.getListStatus = p.fulfilled
      }).addCase(Ss.rejected, n => {
        n.getListStatus = p.rejected
      }).addCase(ja.pending, n => {
        n.getRewardStatus = p.pending
      }).addCase(ja.fulfilled, (n, s) => {
        n.getRewardStatus = p.fulfilled
      }).addCase(ja.rejected, n => {
        n.getRewardStatus = p.rejected
      })
    }
  }),
  {
    setRewardId: r_,
    clearRewardId: c_,
    addReward: rM,
    removeReward: cM,
    clearInventoryList: l_,
    showRewardPopup: d_,
    hideRewardPopup: u_
  } = br.actions,
  A_ = {
    getListByUserId: Ss
  },
  m_ = br.reducer,
  An = sn();
An.startListening({
  matcher: _e(Ge.getMyTemplate.fulfilled),
  effect: (t, n) => {
    const s = n.getState();
    if (s.tournament.myTemplate) {
      const a = s.tournament.myTemplate;
      j.mainImage.tournamentTemplates.deleteTemplate(a.id), j.mainImage.tournamentTemplates.add(a)
    }
  }
});
An.startListening({
  matcher: _e(Ge.getSelectedTemplate.fulfilled, er),
  effect: (t, n) => {
    const s = n.getState();
    if (s.tournament.selectedTemplate) {
      const a = s.tournament.selectedTemplate;
      j.mainImage.tournamentTemplates.deleteTemplate(a.id), j.mainImage.tournamentTemplates.add(a)
    }
  }
});
An.startListening({
  matcher: _e(ai),
  effect: t => {
    const n = t.payload;
    j.mainImage.tournamentTemplates.hide(), j.mainImage.tournamentTemplates.show(n)
  }
});
An.startListening({
  matcher: _e(ii),
  effect: () => {
    j.mainImage.tournamentTemplates.hide()
  }
});
An.startListening({
  matcher: _e(Ko),
  effect: t => {
    j.mainImage.tournamentTemplates.changeTemplateCoords(t.payload)
  }
});
const zn = rc({
    reducer: {
      auth: kg,
      daily: i_,
      main: Hh,
      color: yh,
      device: Xl,
      mining: zu,
      layout: Og,
      canvas: Dp,
      ratings: Gg,
      user: qd,
      squad: qg,
      progress: Mp,
      history: Lg,
      shop: il,
      toast: Wd,
      template: t_,
      tournament: Bh,
      reward: m_
    },
    devTools: !1,
    middleware: t => [Gn.middleware, gr.middleware, na.middleware, Pt.middleware, _r.middleware, An.middleware, ...t()]
  }),
  Bs = [],
  p_ = async ({
    dispatch: t,
    flyCoords: n,
    paintCoords: s,
    activeColor: a
  }) => {
    const i = j.mainImage.tournamentTemplates.getRepaintRewardType({
      coords: s,
      repaintColor: a
    });
    await t(Fh({
      flyCoords: n,
      repaintRewardType: i
    })), j.mainImage.paintPixel({
      id: ut(s),
      color: kt(a)
    }), j.mainImage.updateTexture(), await t(fh(a)), await t(Tp(s)), await t(Gu());
    try {
      const o = new TextEncoder().encode(JSON.stringify({
          type: 0,
          pixelId: ut(s),
          color: a
        })),
        r = await lt.rpc("rеpаintTournаment", o);
      Bs.push(r);
      const l = await r,
        d = JSON.parse(new TextDecoder().decode(new Uint8Array(l.data)));
      d && d.balance && (t(Co(d.balance)), d.reward_user && d.reward_user.reward_id && (j.mainImage.reward.add(s), t(r_({
        rewardId: d.reward_user.reward_id,
        rewardUserId: d.reward_user.id
      }))))
    } catch (o) {
      o.code && o.code === 5e3 && t(be.info())
    }
  }, h_ = ({
    history: t,
    dispatch: n,
    paintCoords: s
  }) => {
    n(ea()), t && t.push("/energy-over"), n(Ot(s)), j.mainImage.selectedPixel.draw(s)
  }, Nr = async ({
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
    let u = !1;
    if (n <= 0)
      if (d && d.main.fastEnergy) {
        if (Bs.length > 0 && !(await Promise.allSettled(Bs)).every(y => y.status === p.fulfilled || y.status === p.rejected)) return;
        const h = await Rg({
          dispatch: s,
          state: d
        });
        if (h === p.pending) return;
        Bs.length = 0, h || (u = !0)
      } else u = !0;
    if (u) {
      h_({
        history: t,
        dispatch: s,
        paintCoords: i
      });
      return
    }
    p_({
      dispatch: s,
      flyCoords: a,
      paintCoords: i,
      activeColor: l
    })
  }, g_ = () => {
    const t = g(),
      n = J(),
      s = c(x => x.canvas.pixelInfo),
      a = c(x => x.color.active),
      i = c(x => x.user.user),
      o = c(x => x.mining.charges),
      r = c(x => x.canvas.coords),
      l = c(x => x.main.fastMode),
      d = c(x => x.main.currentFastType),
      u = c(x => x.main.fastEnergy),
      h = c(x => x.shop.available[1]),
      _ = c(x => x.shop.products[1]),
      y = {
        bomb: 2,
        paintcan: 6,
        pumpkin: 7
      },
      N = c(x => x.shop.products[y[d]]);
    return e.jsxs("button", {
      className: le.button,
      onPointerUp: x => {
        if (l) {
          x.stopPropagation(), t(ea());
          return
        }
        Nr({
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
          state: zn.getState()
        })
      },
      children: [e.jsx(sg, {}), e.jsx("span", {
        className: le.button_text,
        children: o === 0 ? h > 0 && u ? e.jsxs("div", {
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
              src: _.image_url
            }), e.jsx("span", {
              children: _.name
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
              src: N.image_url
            }), e.jsx("span", {
              children: N.name
            })]
          })]
        }) : "Paint"
      })]
    })
  };
class __ {
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
class x_ {
  constructor({
    app: n,
    viewport: s,
    store: a,
    mainImage: i
  }) {
    Ln(this, "isCoordsInExtraRewardZone", ({
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
      if (i.type === Te.my || !this.isCoordsInExtraRewardZone({
          coords: n,
          x1: i.x,
          y1: i.y,
          imageSize: i.imageSize
        })) continue;
      const o = Tn({
          x: n.x - i.x,
          y: n.y - i.y,
          width: i.imageSize
        }),
        r = nn(i.imageData[o], i.imageData[o + 1], i.imageData[o + 2]),
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
          const r = Tn({
              x: i,
              y: o,
              width: s.imageSize
            }),
            l = nn(s.imageData[r], s.imageData[r + 1], s.imageData[r + 2]);
          jt.includes(l) || (n[n.length - 1][l] || (n[n.length - 1][l] = 0), n[n.length - 1][l] += 1)
        }
      }
    })
  }
}
const f_ = ({
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
        wt({
          x: l,
          y: d
        }) && s++
      }
    return s
  },
  v_ = async ({
    coords: t,
    dispatch: n,
    repaintReward: s,
    amount: a,
    state: i
  }) => {
    var r, l;
    if (!a && i && (a = i.shop.available[2]), !a || a === 0) {
      n(Xs(10)), n(st(2)), n(at()), n(Ft());
      return
    }
    j.mainImage.bomb.boom(t), n(Js.useProduct({
      pixelId: ut(t),
      productId: 2
    })), n(Qt(s * f_(t))), n(Vs({
      product: 2,
      amount: 1
    })), (l = (r = window.Telegram.WebApp) == null ? void 0 : r.HapticFeedback) == null || l.notificationOccurred("error")
  }, y_ = () => {
    const t = g(),
      n = 2,
      s = c(qe),
      a = c(d => d.shop.available[n]);
    c(d => d.main.fastMode);
    const i = c(d => d.main.currentFastType),
      r = 10 + String(a).length * 6,
      l = [P.button, P.fast_type_button];
    return i === "bomb" && l.push(P.fast_mode_button_enabled), s ? e.jsxs("button", {
      className: `${l.join(" ")} ${P.shop_button}`,
      onPointerUp: () => {
        if (i === "bomb") {
          t(Ft());
          return
        }!a || a === 0 ? (t(st(n)), t(at())) : t(ta("bomb"))
      },
      children: [e.jsx("img", {
        alt: "img",
        className: P.button_image,
        src: _o
      }), e.jsx("div", {
        className: P.available,
        style: {
          width: r
        },
        children: !a || a === 0 ? e.jsx(I, {
          children: ""
        }) : e.jsx(Fn, {
          number: a,
          fontSize: 11,
          fontWeight: 400,
          gap: 3
        })
      })]
    }) : null
  }, w_ = ({
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
        wt({
          x: l,
          y: d
        }) && s++
      }
    return s
  }, j_ = async ({
    coords: t,
    dispatch: n,
    repaintReward: s,
    activeColor: a,
    amount: i,
    state: o
  }) => {
    var l, d;
    if (!i && o && (i = o.shop.available[6]), !i || i === 0) {
      n(Xs(10)), n(st(6)), n(at()), n(Ft());
      return
    }
    j.mainImage.paintSquare({
      x: t.x - 1,
      y: t.y - 1,
      size: 3,
      colors: Array.from(Array(3 * 3), () => a)
    }), n(Js.useProduct({
      pixelId: ut(t),
      productId: 6,
      color: a
    })), n(Qt(s * w_(t))), n(Vs({
      product: 6,
      amount: 1
    })), (d = (l = window.Telegram.WebApp) == null ? void 0 : l.HapticFeedback) == null || d.notificationOccurred("error")
  }, b_ = () => {
    const t = g(),
      n = 6,
      s = c(qe),
      a = c(d => d.shop.available[n]);
    c(d => d.main.fastMode);
    const i = c(d => d.main.currentFastType),
      r = 10 + String(a).length * 6,
      l = [P.button, P.fast_type_button];
    return i === "paintcan" && l.push(P.fast_mode_button_enabled), s ? e.jsxs("button", {
      className: `${l.join(" ")} ${P.shop_button}`,
      onPointerUp: () => {
        if (i === "paintcan") {
          t(Ft());
          return
        }!a || a === 0 ? (t(st(n)), t(at())) : t(ta("paintcan"))
      },
      children: [e.jsx("img", {
        alt: "img",
        className: P.button_image,
        src: xo
      }), e.jsx("div", {
        className: P.available,
        style: {
          width: r
        },
        children: !a || a === 0 ? e.jsx(I, {
          children: ""
        }) : e.jsx(Fn, {
          number: a,
          fontSize: 11,
          fontWeight: 400,
          gap: 3
        })
      })]
    }) : null
  }, N_ = "data:image/png;base64,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", I_ = "data:image/png;base64,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", C_ = "data:image/png;base64,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", P_ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABRlJREFUeJztnL9uFDEQxr9D8AKhSMdzXLqLQpXykGhQJMqDhwjiHiKkRDrRICVlKlDScc9Bl4K8AMVSJN7Mbmyv7bXHO8f8muT29uxZf57x+M8doCiKoiiKoiiKoiiKoiiKoiiKoiiMzGobkIGm91r0M8k0frNqRTg9vuu8tb7ae3xxci7u+cQZjM2q6YvgYn21J04UUcbGiGGQJsqz2gZEEC0G0Ia0/jgzWSQJgs9/f7f/r6/2uuOF4zr9jASe1zYgFeMtfVFSvGhKiImtAJrTP28B3Pf6Ty9eeW+m96xffgeEPKuokAU8esTnv7+t4Yhet4W0qSM2ZBmkjRFDiBLE9PihcGX7jBTEhSwgrJGlCWEQMdARGmxWnQvepRMAODkHBD2nSA+hUAGkegVF1BjiYheEMIj0kNPjO+8EcOj9KSPJQxpsVk8a2jeGnB7fYb1ZASfnDYSMIyI9ZJcR0Wtgya4Mg1mWQUi2JSlkWdmlAR0Q0GPg8I7rr+cAgMWb7vWbi/u/h+8tHiXAS6ZknHMT6fqo+7ovggsjjuHwp/f2SbTFFEJWA4Q1er+BQzFlNaRMi1imQ1QVpmblwUIYbi7CvSP0Mx4vqtI2tdLe5voIaM66jRXb2Dno19+ctZ2kyj58jV7QNGcVak1g9vH+D2udnJVBkBgGblE4BRkUox/PS4Ww2Ho4ReESxCtGaPaUKlCO8rlEqS4IbazFGwDLefeGy+3TeyLIVf4uCdJcH7kf1DTG4tvcfoO57912lBGh5fvsfEiJi7YZiyA272iFsPVayv6vx8+8TjN38YNksLcH7huJt9iE4fCS0vOQpj/xA3ox3SXG/q+OGNnwlUtssY07HPOTUoI0GGN4CSHy1jHu+TyUcL/g9LYTrmgD3R4Al2FjRnKqvJw/rRMYDFuUEiGs7uIiDVdfmOeol1t02tLYspwDF+MSiDEUFyQoZQ30Bl/Z9FrSfOVy6xzPxqTdseTulsFLI6FhYZAPvVA+0tNi7codtqoJkoW+GAbG8JdbELmnTnxzF997EydnV+JfyXU1fOKYlEpOL5nCFm46zA3PAXvISt0Xr0ENW+WOITtKFUEkeEktG9kmhkN5fbZ5SSSu5f/FsrvkT+1LnnwGkFOQ2exjeqZlHpBLmNB9GNfnDLnnIexZlllQvHm3tTa66YG2kJFzCzdECFd9JTtLnZk63Xew7NS1IcE1E8+Bb6PKEJBW78RMncbmxbf50/g9tIs4lgAxbOMHB9OZGNoEuD3Iv1kV4hk9OBON4iHLlZG012M8IVGckL146qVmfKO2u55D3GqvN2tKDUuhwlh2AV20gkQux4gTBBjI25dz7+ZQFizl+44VWRMMByLTXm8MNo1VWpRAm4wnGSG4J6psWZY3ZFBRJrCCW3NpJ7eHOGfrQT3NcsyzKLQ+Ulet7dvshT0QdwzIBkfoehDAZkvNY0ClNp9bUXxpryHqLFUOHJ43ZBN9llLHSqtNDE2eD0SsnhYMYZxHfXyUGtRnDz0IQNggWXMgjbWv5KHrkudlOgeth9JMClcPjamb3lvyawmlDzANilJrYyrGDi4xihZMsH4lwUXMd8q5y9yVL+wAkaJQcntOqqgcYrBUQEgWBRgvzJikgUsMgHeDajbw4y+ThFMM1ooIozyFE24x2CsjtJvlNnEOf9qv58RVR8+L2dtnCr8RZTvJMHNcjxbKEyZddfy3P8+USuxRFInPqCiKoiiKoiiKoiiKoiiT5x+58vqZVePedgAAAABJRU5ErkJggg==", S_ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAA7JJREFUeJztm8tx6jAUhn/fuWkgWZBV6iBtsODWkBQBQ4pIaggL2oA6WCULV8BCd2ELhCzbMhifI/x/M5kMfunx+zx0bAOEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghZKRk0h24lkU+N+7vj6d10mP6K92BS7FCrA778x3l9lSFSbLTi3xuKkJ4LB9ekhTlj3QHurLI52b1+A2gmHQfu231+F1xZymQ3B0EwBhjgN9XAFVRjpYz2SLLMiCxMSbV2RJjfqZRB2bPOyCxMSbnsizLhxdgsq3umGyDriwVks2yjoRESZikzNnBLPI5gGraa63j42kNJDi+ZF2WxXVPKbsqS/ouC/chhCV5C7k3UrQQs8jnWB32WD68BGPI6rAH8jk+ntYGicURWogyUrp7DADY7AoAVt9rYOYtEjc7LP+djimzLSCRsWruZKUOZT69Db4Yls3u7Gf2HjxK5dg1xhADeJMfsIIoyvPMrHpe9n4UXJUw2mKIMZ8tYrRtjzzHaUdVRViTIEXR0J3Mpkm/FO/6ZaFSjSgazPU4GbFV3L4pq8LHnyKd0NA46krpbTEi1nIuuI50yV6TyypwJ3E2Bd5M8edOXkxQ7+s6AyNpIUU25VuInaS3Grf+1bHLbdfxrMRxXyJzI2UhRTYVEsPezXU07etyrLUWz0rMz1Q0+9LnsoZ84KTw4ZY+QUaOhJ8sMis/6AKnO7Z8o6SVuqAcm4X57Xl9ksi45AQJYWNIF3y3EytmRJtjECT6FZ4o6mJAV1EaGFoUxhBlDClIv9YxEEPXujSW3+Pp0TVpQY/LkixjKCqhyFmInYS2p359l+CDpZmsuv8Wpf8IhrSQzCtzNzObBksbV7HZnYqMMcdi+CxLTwxpesrni3Jp+b1OCCFrCKFrHTLZhquwt645NSQHXIfEupRboCC46w3qfVjF72v9JFvRXetQ4LrkLCQ0eDs5fa4vrMX5VveVFX9WMAXWAUgH9TpRJtvT/1u3J5zm+sjHkNCd6Ypyh6vxJoa2kCx73p1nWk13ZtfnI224FhdxzTGU34FLiox9uS43yEe4qHEJEpqYSxeAXWlqx+nXeATp+iJ1X8LEXPv8hWxgBIIATaIMlfW0WKiEGCINOpjK9x4hmlLVG50rJYZYow5xogDXW0ykiJJiiDbsEC8K0F2YDitwaTHEG3c4fZLQRZwe8D53E58P8Q4EiCr1tglX811h8NDoIwdAVWc60iZcymMjhBBCCCGEEEIIIYQQQgghhBBCiMd/ML9eI+BDYUAAAAAASUVORK5CYII=", B_ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAActJREFUeJzt2kFugzAQheFp1UXEtidjg3IaInqZRt3kZGyT7NyVU2NwcAQVfuj/pEitSCSHp7E9DmYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOR723oAS7V948L/vz5/5L+TrLZvnLt9u1AckJr3rQew2OH49/f9vN04VqIfSCgMR5R+IDuoitDH1gNY6nS9WLf1IFakXyE7I18hXVUP147rZbvBrEAyEL+17ap6dK2rarPenBk9yb9r+8aNeo+oD4l7EvW+pFht38wG8CyYrce/K48w4kBu3+OAEtVDKCsZTFFT1eFDCV+JgBRCKXrb2/aNG+2i5sTvPRwfzWNX1aPDSGQaTVPP1o5UdSSulxyKxrZ3rkJyrwscsxQ9Za3tJNA07j+QoCqmGsnSaATib+rUlHM/D18xsSN5jTXEm7q5uTf8fpYIRyOQV29kWCn+swJhmKlNWbkOR6mdVUgjkKC5e/lzIpUhYdAcpo5O5og9lVJ+hYS7J18pudUSv09g+ir+B5zHeVYstUY8eSzodL0U/6NV0YPzkqF4Gc9mKYRhJhKI2fiR0bmuOz4mUQjDTCiQ2NzirBIAAAAAAAAAAAAAAAAAAAAAAADAQr/gsiaUUMmhEAAAAABJRU5ErkJggg==", T_ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAQlJREFUeJzt2E1ug0AMBlCn6iK9YXpCckOymy76IxipKaSRGFvvSSxgZfjwGCYCAAAAAAAAAAAAAAAAAAAAAEo6HV3Af7V5asvz09t76nt6ObqApzhfPo8CagRSiEAGI5DBpB2AP8O8nx23a0TkHe6piu6/qO4O8q9gInKFk6bQNk9tFcDigf95/XZNFcrw2jy1leX5PK2P3/TdNaicQ33ZERuXLZ7k7lu/V4IuydkhheULpPgylC+Q86V0KK9HF/CQrYO8yIbjcB4e7N3n8dH3sUW+JSui9JKVxurHb2/HJOmOiERbJxE79rK6Dsq0bZKm0G973/ZMYQAAAAAAAAAAAAAAAAAAMIgPNT9HzAKUgvAAAAAASUVORK5CYII=", E_ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAU1JREFUeJzt2MFOwkAQBuCtJ/XtvBR9mRKfptx8snK03NaDQCoWQii6TPm+hAAlaYYd/p2WlAAAAAAAAAAAAAAAAAAAAAAg5Zxz7ttcug628s5BU/JAqdouVZUuYIpzFryqqlDf8aF0AfwUtiERt6NzhIpzStMbcetbWIiERB3QlwjRkJ2pTVmuF9cq5b7lawhyvxIqIRfbrNLy86N0FfOR+/ZuEhLG2ALPsSlhtqyrDOTH1+nn+GNhGpJSSmmz+vlMOblvx7epU8cHStc/O0cX/tRMGRwrXf/sNF2dc9/mpqv3j8MmNF39qyel656tfUIOkzB4P9aQpqtDNSXWUE/p+JXSZpXen18M/P82loBTqYlw7zEULyHDBGxfH/4tUj29Vcv14vvzAPce4Y398qMmYhbGFn038EvUwwiXuAAAAAAAAAAAAAAAAAC37gv48l2z+Bjx4gAAAABJRU5ErkJggg==", D_ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAmpJREFUeJzt2jGPokAUwPHH5YqNpfuBtqcz2eA223tfAgOf4noLvY2Jnb0fCEq1mysUFoaBA8Tjkfx/iQmMkgzz5g3M2xUBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4n8IkMLJZmbH78Qw/xu5AX6GfSjEoYRIYc9maMAkqbZlxetqNN3YH+igOeiaaLURePhqv8zxP/f3+HLsDj2oTCBERue6e35kBTCYgDy05152sz4cBe/M86lM4Yy5b0yoTbPfMcAUkfv1Sd/+Teaj3muETWaaKVAfEGFN+c+o6wC8f+SeaLUpfxcf5UN0clLqULSo9N+7PgdYPcYd1usyPNS5XIsozpMQxy7vKrteaHSKKA+Laa/TNjMr1n79VZoc69s66dHwXJkGlrZPLdhI7dhVcAbDbwiQwlcB1NPZ9TkbtIF+235+GYLXlXA5R1bgcNQWrK5at9uoGuFewGmjNEnVvWd7+VN0AttkQXnedNo6PvkI/i8ri4vp8kMg6F5HbgNuvvnabKyiua5RS+T6eLSdNs7hY24rmf77b02Xp3FXp1bpLF1GaIZm8VFLXfp/5xZKI67dToi8gm5URSfNTb3/Kj0M/dV1RCpq3P0ksv0RExLy/STRb5EHRnBkZdQGxBz300/oscbSF/u3YWa/arIz2som6gPRVqQT7y8ktVyJKH+pFdZs4b3/Ksyk+zsW8v92+yAJS85dC7cuWun2IrWmWx8d5dWmy9iPx65enudxuUz1bMnaWrM+H8kzfrEyeIU2/wzCKxcW6kkdeAf7H7zAA138lAgAAAAAAAAAAAAAAAAAAAAAAQERE/gL4iAFGuCkFvAAAAABJRU5ErkJggg==", k_ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAtJJREFUeJzt2jFv2kAYxvHnqg6UMflA2dmQIkqG7PRLGMGnyE4laITElp0PBGNguw5wrn0QG1OUe93+fxMIA+Yev/faZyQAAAAAAAAAAAAAAAAAAAAAAAAAAACD/G7uU+8DCvxR5Ta7uSe4TxIC+XDAZyNfF5rfzWu3wYV8JH492wwqB7sYBoHcQBxIlWwz8HEAJUxrf69JIHVKHzwbEc41bpZGqI7ZyGebAWFco3L6aShMZ4TxF26Whvd5GOdCTv07W+GW1VEXVOrfWuRSfbGVI9M5l2wMzvmS7Jv3i2RfbWofIkmPjtRVYq06pJQVouOAGDxKUzJxhCSrlP1C7tuTiTEIklZILkWV7BdSZ1i/ePnfOV45hyV0ExKGk75Cnl+cJI3fV6n35CDxNJY+EEnTt7s/T1I1+f1CzjmXuqeYamilqaIzzOf5WpduF79HoqlfrMkgh/AashaGZCmQz74/0bSiPomdQFRu7Fc1+f3C5HJIE19T70CQ9bb54zyMJj2k6rl0+jlGgzMRSGjmcVWM31eaXPIBH4VWHHSjAcRMTVnBpNuXdDgdrp26qiqoM6x83eLdQxNnGXGFTLr9yiDCdYt/fLj6dDcYv680vX81MQ6ShUBmI1/sH9JhwP3jw0kok26/HEBdj4mnqYqpzcopsIkeUhSOfrdcyz9GlRIP6EcXj/vF+QorVEO2Gfg84M5Q0tMtf8bVkgeS9bblpZPj2pYkjXtbP+n25ZZrxVWU6wzlfv44TF/hfWfCiKfB6f2rm+pV2WZlqo+YKNM6oflO7n6dvrhfyC3Xh+0KoU3f7pT1tnkQlvpElVbspBRNMQXj7XdJ0QKlCg3fUH/455zcLwn3UM7dR2npn+KS95AmiheK+TSUr4GtyxsXelGbtG6n/W7u3XJdHvDo1Lkt/eIck1fqteKj//nFxT0EFvDPdgAAAAAAAAAAAAAAAAAAALTXb7LTHFrMPO3DAAAAAElFTkSuQmCC", R_ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABLlJREFUeJztnLFu2zAQhk9Nh9Sj+jxGd28GgiAF0tFBtsxZLFhv0KlBMrpA0iCFN++FnycenSwFO1hUKIoUaVni0en/AQEMWZSJ+3nk8XgKEQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIDDYvp8Krj7ABTEy73YSZT5paD55UGL+JG7Ay5mgzHRM4n882Piunc6WhMRUd57r/rjA3cHfJgNxu7p6+JIGD9bmD6fCvFyL8TLfVQedRCCEHmIMpyYP2tIIWaDcZfd64zopywV6/RVeES+TI3tps+n0Qqg45yXOdnVkNlmQURvwkxHa3K1zzYL8lmfQhFNR2z0Pccnn77Wve32L5td4p6ydg1hj8/M118fjJelRxHRVojhhOjbDesgjVoQGcY6sQmhfm8QJV+mZaCQL1Oi1d3OfeyaaAXxWj9cQuwK41QliVIQpxgdCTEdrasBgGG9qq0xPcM+InR6E8OyjjTBEYHFIYiyeIvzH9XvVEPu4xktBAntHUQBpyxn+GoztmVBfq8ES51UQkwdn5Ef2Dsa+9sjwQRh2w239C6u/gZNLlpHXZPRGKYrLu8gCixI/vkx8Rbl9aF6rY0wB7j2sLjlXtlX37VEF8PUzpFS4Zi22MLevVPiPnkrH/E0UbLN4i1DLNu/PgTbk4QVRCbwCnzS461p4UmlGDt6U5dChT0xvP2b6Am8XhbQFiFyxTN0DGJkmwUln74mXXtN+CNcRRSZR+KMaow0BBN9CSHhOVMP5SkuFGPXjn+1KK9vISR8RQ4GUXRqIh2fvf3tgx5S236PwgkhYU8u6pUkch43Rjs6PhGSo41sR1Q9iyf6z8Jeia20x2lYIqtxdy2MmKW/yuclT39Yj3Hjr8uy7bY72IXXxDs+I3HyZe/n7gOvIJYKQ+MCq352iOETIFTuiSjFwu4huvFtxW4+Qqjts83CukgbBVOfz1iwzXumrpV8lmKs7ihrsYvfGjo1XGtuo/6O6Rkh4RPEoyBaGtNHmGyzKEt58hURDSfeZUS6aNPRmq2Cnk8QxTvyZVoznnrNNcq3nqWN6tUd5bT9DTVnFl1WQIMnvNOSjERK7K9MWz6jvHK/RGvXVOtrEyhfpizhbzSCEFXrpJzYdvnDN69QUZ/blGVWBeIQhUcQUxRTeIQL2ygvS0EbBKl5oeV5tecGFCV82GtbzIcTZ21taTwtnzUbjBs9osnr8mVKydMfYzhcPjdgGBzeQ0zTlS5EsQbohhQnX+qpFGVvklyde3lZDdUDCuPrnhOqaC58lCUNpoqgFznf3lA+vxTT0Zry69/tjNyEEjDUvKcQJyeifJ6W4oSCPbnYiCoKEYnvP7fXlbNuleTqfPvBJqAcBKoYzO+D6ETVGSNSlGXamPjLNotSOCKqiqIJQcQX1rqIrkNWCmFMEVEZDRGZA4NCiNlgzBI57UKU74cY+XaTkOHsRBpYjvzZyU9j82yzKM464nnB00TUnatReImKvqfQKb+P1CN0DsdDDFSmnosjka8sN0bwqpovB9NRSfmS5vXvuqFNe5wD8QwJ+wFVG4xiEHlVsoCu8ThHoYsj8R7+VdP7QooCAAAAAAAAAAAAAAAAAAAAAAAAAAC65x9TXHckk+SwIwAAAABJRU5ErkJggg==", M_ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABolJREFUeJztnL9v6joUx49f7/IY6d+DurOhVpWe9Bhbsb35LqnI0vltCEaeVKniio0d8feUsZ0qvwFO6jjHjpPYjuk9H6lSSyFx8s355WMDwDAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAXTfZ2L7O3e9n3OPrkj74HQLKe/baiJCmIvLuB39VSRN8DKHG2DHl3AwAAT+9byK9fa8eI4rm8N3WSsxAUAwBgPpg0s5Rv4Op+9D2AOuaDCcAbSOPTv57JfBd5UAFJy0KmC/KmGy1lPZPZ+Fj8qf5+qSTnc+XHi9Ht6DGFEinfDY3CWlHEbX0MD6RlITUxYD6Y1L63lZXox+pJDIALiCE62du9zK9fhfXGr2eSuql6Npa93UtVZLHZex9vU9JyWeuZVLMsE0/v29r36K6tZF0GxJ9/9X4/eh+AiuuNs6GL1eR4KQiSnMt6et82uok6bT/rYnUxSE6Qvsh3w3Jw7ymwsyAaRerb0/nDpr3rmXSazljPJMYPyuXo7uTpfevdxaRSVCZTh9h8/3wwKQlgey+K1VSw+WAC2fh4cl0a8uNFyo+XKL0aby5LH6zvahdFUcXAm46vdbWa+WACMN6WRIndBvAXuLSpB6cpdOUzLtmRfsPz3ZB0NerruoCuWRi+Vz1njOl9vydQ4kXTAs9VENUa8ElWRaFeU193GR8lXKwaxW+WhS7KsS+h3twu9Qfl93VKE4eO40Ji1ihBVG9TcevxwPR/pIkI6vsxcLtYMJ43Zicy2Im6iIJQ7qnzuBrGrNht4WBpb379KtqYulqLOKWvh9XJVR5Wjc5Td9ziIYjcFg5ah+S7IYjNvpUPRlHy3ZC2DhRi+Xl6gpefZVEchDKNC+OZq1vzSdjC8Bzk9fSxM4cVFEKoqKJQ/4evWIJCi82+8kNdQyzCn0zpcdgyKZNgFetoc4MerySMHkovZeOj01hMUzn59avQe/oA3WsV73WIntmYpiP0C6EqcDxGgckyGowPf21ah+iIzZ4uSjsK4r8OUaYa8KLnd6cLUG+CmuY6Be4uQgCcrOTszrLn206HAvi6Nt9t3zAu62wper9afyqbtmJ9gHNTXTuTSCkl9xBvwgT16UJgwESy8ZEUwDTlXpDgakR1RrmYRPUU/MMG9fPNVK3FVvyZ8DZzTARh0zSJbfqkVLB6tuCwHcPpQlBPuCmAU/iq0AHozMpWi6jg58RmD/M7/2NDwrdwpwuRr2cSxvSFU0E9xIWeHoxqVqT2WUz9lcrML7riADVKnI7hdCFcTZsUw8eFH1ZWoU2WQsY3jzFDJ94iB+UJtbkpyq0IAHIlYhtcuoxWNzYNO9kYbVrAtRVqrYy7olXsTRc2xJj5jWYhpnar62e9sPwU2fNRqvNZphYwyeOV7Fyg1hBv1UmNy8F6hHQXnv21vLspfiiMD442HxaCeII8XhldluqmUJSn9y09+9oR3SWailJSlIY9lzbEE2T00Mj1YD9C3ZHbeB/7eQFeUQs1rPr7WDwXJ6grwdR0kWrWUzfPpE5/AwDp0qgWsunYzsVphN5IHEGUJ9PlqXPay6FMVorNvnyzLPtMTIvt6oi1zS18lqXFji7ZlolsfARQdkfZjt+2e5mNj5B/iyyrRWbSZXEEbhoNspYqQpYVpYVLvYydRFdrsbkZWyvWZTKxydrg0MVhWEGIXjYAABxWkD3fGpd9Ii43yiUBcMF5gd7PX927lxbCxhCLiePqQbHZO1lK2+WdtpihpuE5nOodfSFdxTJHDwDLhdO52xDOQizWUTB6KERRqWsiIa7rgSlBjGu9zuMyrXAMvZoxnIXoYlBV7mEFAqAiSml/Ro3ldN0kWoxNdUPLxWlL2+OVzOFXSaDQhLOQmr0fRT/6LJT89z/jGt66Tl+bOFKcB+NZIl/tFHcQWJMQT1yTvR4mmsQZfBiy51uYDyZJ7FEH6POLA9QYQ627UhZI+EK3PrQ88c/fQTOnJvS3LXr5KUJmK7Wce/35IR0xAFLep35YFYlB05SXzIxC9eo9k8y26Ar69gILxi0LJiL0NdqS3BOiQ32hGVqIa0YWctmOb9J1WTWYLCLfDaG6BizAOq9ApOuyDFTiwWFV2S1VmhIJseguIMlbiGlvOpkqLz8FjODUF7kwIZDkBQEgYoaP/SKJchGCAHxV1rVCKOly5fUL4CJiiLMYAEW6XPk+329qUZfDeibxa5VS3PTDMAzDMAzDMAzDMAzDMAzDfGf+Bzso/MsnGLo4AAAAAElFTkSuQmCC", U_ = "data:image/png;base64,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", O_ = "data:image/png;base64,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", Q_ = "data:image/png;base64,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", F_ = "data:image/png;base64,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", G_ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABRVJREFUeJztnL1uIjEQx2ejkNc4gURHRRUpDS9AneqaPNg1V12dF6CJREVFhwS61wjFXnNGE2N7Z/yx683+f1IKYGFtz4znw7MhAgAAAAAAAAAgZvZM7dBjAAAAAZv1qg29BgCACBAJjYCx7vdjHTcYA9AuAL4zCE4AAAAAAAAIgqQYAJvYRLKx3zDmtTsc7z7rk8161S6W89vr8+lCRMOPqzSdk9usV23uRZg9U3vd++9tC4NzPl1GJ5Su+XKqnNjb6zZo7mMUipQH3wc1F9Nc1jN7prbmMUvxCoTT90SNvwjBQ0k+vrELpVqz79q2iIh+/XlviO6FIN2vDdxnDb0diiykBKEtRppIbdardrNefXGYKcIgcm+HfTKIQEJbTCjCCnHdU2OEkZoZD5lZP5b8cb7YGs09ny6dmhryM9otR+Kz+qKYhdia7xOOT1ChRXJ9FhtluYQ3pA8pYiGShZFYjERzfYunScZqymkGc+ouZs8UXRXgPsS89t2j5pwl2kJK1JrMIu4Ox4Y71o+n45frXj5XyfeqlVtUoplcVyR0Pl3uFpFrrPm+JOb3abJtATXlEimoB60JS10L47Isc42r0iwViJ1ISoUiqW5LFDCXAjwQ6coNmhxhsZxHxfTmO5px8QAgJYx1jbdrzovlnN5et21K/mK++0ikz25TyRX329rNf1eqsfZ1LouWjmexnNPucOy+MDAOlVOP1QDuo2yH7RqU4bqnxmUlLgXKsWWk1sRyoLqhpODHidFYF7EZf+w9OD9/bFW/o/UntpVXlYf4MDnGEBr7+++7+juanWR3ODZcgKotS1Jj4tdODVe4r0VlIbvDsZEsdClhDJVdn0+X21/oGi6M2LGqM/X/5tUS3YeDsYLgdSczEdf2VHLL8gUQNqUtP3qC2n1Sem1IICUxyZ/tM7RnLMZKYsdfnUD6xJeBhyKlrnmnzjWqdMJvXHqAJYktiUjzqBiSz0P4IMbWVCwpibgy793hePM3uSvPsU5d/dl3gjv/j6ejs5JNdG9hEv+YnBiazo+xWYems0Xzm3YHi3ZdimbqtQpKWzC0r3edTPr8EX9PUm0YRemkRuzFDfkjjQJMYs+34QskaTeS+EZJ4VXyW5O3EFfmLSmVSH7HRuJTijbK1YqdQ2nLIb5jX03x1UeyQDSljqHKIj5STgdLkbQw2hO2Pg6ahkLilyStUkW2LF9ylEsIrhCzptYfs/B8DaQkCYSXrK97arSd65p2T04g3s/+PKQUV23PJYiu8SVbSIrWxzzLEfp8aKHkIPuW5etM569jhCh1uCmtODnQdNW4yJqH2Af2RPd9uUTjfQ5QqhQpFpp0QOVrCeVIW0El9+OvQ77KPHtYG5KwX71ldRTRetu/fUlYn90umqZxIpkSqjsXQ5pZUii5opgYfD7QrEXOeYt9iDSkta8xJ2qclMis7wjKteW63ottLLcRCySlRvPyucrafZhTKG+v29ZVqR2qJahI2Msns9uX0WhXeJlTUFLFydW/bBALRFrJtMPc2GxcQo4FSNHyUM4Rizr0DAnF15g8pkKiKzTt8zEF9ZZlF86+vP+UZ1BDYf+HCbPwfSqUSiDcRFMd2nd5SDM32VtJQ0/f2t/nVlY6u5YqgC+b7utwLTrKStVo00VvMt2SeP7jjzORy31mo7X+SWwTMU3VOe+nuc9kuk5sK6z1Ca9JdZ30KYTYe03CQvqO4BAxAgAAAAAAAAAAAAAAwNT5BzZPhVZ/4M1WAAAAAElFTkSuQmCC", z_ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAA0xJREFUeJztnDtyIjEQhputvQhUkU00J5gLEJNzMOeOfQFOQERGFRxlNljkkuXR+9WS/i+xXXgGTf90q7slQQQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAODArvYATCzztB6O+++/n48XERFdb3fW446B7YOpYsg8H69uRflTewA6dGKI15Z5WgsOpxh/aw/Axsfn1w9PuJxPK9F/Ua63e/L3kz2zhiey9ZDn4/VLDKKfAqX2EjVMmrw0F2wFMX0yhSipDbb1nqVDI/uQZUMYLFVo+fj82tWcn9h6SCwxRpXFLT2HNJ06ykbvJQ3u1kNapQtBevEOIo9JfcQ2Rg2cjGlqYxDZCyhxfepCa5mnNfUHwnbPWFvYsF64NYCtgk38rzqYHEbTEVtlqyn01thFp8BGqDDWC9QB6MQQlBRARR1rDo/0KUZtttrCqzB0eYOac8rz8fqu3kOM4Yru3q7eY8KYZbXQUV3maZXHqeuBpeBw3Bvvrb4WYj+jIDWaazFcb/ddTg91ETpWlOZ7WRzT7ph+mNFDRK0BymEU5Hq77yBKWawh6x0S2E/uvuQqVlV87+38zzXri1To6ogc9QpR2Pzm1VxsIQ0O4XDc0+V8WlM+X6jA2pC1pXLrHmJrAV3OpzV240RsJDE20YjaF0FGrqRzVvIxsBxUDuT5g6sYRJ7rIeL31rxGHnspMUI7z0lWDNV+0uhs7e9ytU8XS7iulChydam1a1+wqdATSs1wKycSLqFrCEEEtYpbn4WzoQSpiasoQ80hNXHN7iBIQVxEYb9AtZW1tH6CypTtsfcQXQrZat1jS73ZeogwOLc2R6oen+76KEFyHf/qsbFJ5LZ8ESSI74axELiKETou1+I0WcjiasDaFNsGJE9OEENPUdu0mulwxnv3e+s1AHeCzkGMKEqpxqT2nIctixpRFB0p93j9mtRdDuhczqc111dbtIiw1/tn2l0nvgd0ekE8d+jz+i5E6TD2skYRIwXZbLXM05riJFBrpNqokaUUQH0RDgTpjOxzRO0vBGuNoushHMTAB4T4hsDURxBAAnKLIrJWbCV1JGetJYdH130AwwvCDbabHHrg/UUGRMR3Hh0aiAIAAAAAAAAAAAAAeuIfG3gINg3W6n8AAAAASUVORK5CYII=", L_ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAolJREFUeJzt3DtSwzAQgOGF4SLJTDpXPoEvkDo9B6On5gI5Qap0zMBRTAFiRPBDr5Vk5f9maEIejleP1cqOCAAAAAAAAAAAAAAAAAAAKGfou9HlMWSwdOIJSoVaDMpT6QOIsT/s5Hy5Jn/foe/G/WEnIiIf759yvlwfkn/IjMdcH6Th5fXtQaOX2AEwgcklW+S36Pl0HEXy95ImaM0nQ9+NOeeqTQ9Za1KdSHpHgFYyrqZ7CApppXeIeK5D7Pxc5Dv7ECk7xrYUDBGPgNjBeHl98w6Aeb1GCpn6/Ya+G5fe87Zh3lJPk4e+G01O7vJcl8e0+Bzr3Ovt45069ufTcTR/S/9T+96+X7DkMBITDBcm4EufsxQwJObaA9UCsoVJM+dq2uckhwxbq+uQ3MW12vkkNOa5PkHZdPndaKm0sdpDzFoDeawG5Hy5quw5IBJBCaN63giKPu9qL0HRtZhlmZNvZzEtZTSa9bVQXmlvLQcd47ZIqnHVCjzEFh8BAL+8Jmk75W1hgtcWcklqsuLiVIp8z8w2sJ3FrW0Ni3AZkIq5E09jtVBhwKK5BrKJDaqpy25qKneE+Pk+/4a2TQRk7nowl0lya6oOiOnWc/vYpYKhmVFWHZDWWr9tbmu86oDUquWGcrfmsiwWhpWJ7nolbyHeqqXsMHgOWbskH9PWKgZJJvWQ+0Xu1doIEhUQhig0z6l1T91bSM8ogCs0/ipawmf/wI9pvLHnbXJh2GIVVZsZ0veHHY05lVT3Bcb0FEonCmLWZVR7LSnvFmPIBzRk6VZUhN1ln0NqCAYNROpdaKr+SAzCaAfFZxXPOkT093PMkOiyiicgmbgGnYBkxM+UVIgEAgAAAAAAINgXIA5u7FTs1dIAAAAASUVORK5CYII=", H_ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAolJREFUeJzt3DtywjAQgOElk4vADJ0rn8AXoKbnYPSpuQAnoKLLTHIUp0iUUYgfeq0si/+bSUN4GK8eq5WNCAAAAAAAAAAAAAAAAADgqXRt07s8hgymTjxBKVCNQXld+gBi7PZbud7uyd+3a5t+t9+KiMjH+6dcb/dN8g8Z8ZLrgzSc3y4bjV5iB8AEJpdskV+j0/HQi+TvJVXQmk+6tulzzlWrHrLmpDqR9I4AtWRcVfcQLKSW3iHiuQ6x83OR7+xDZNkxtqZgiHgExA7G+e3iHQDzeo0UMvX7dW3TT73nY8N8pJ4md23Tm5zc5bkuj2nxOdax19vHO3Tsp+OhN39T/1P73r5fcMlhJCYYLkzApz5nKmBIzLUHqgVkDZNmztW0z0kOGbZm1yG5i2ul80lozHN9grLq8rtRU2ljtoeYtQbymA3I9XZX2XNAJIISRvW8ERR93tVegqJrMssyJ9/OYmrKaDTra6G80t5SDjrGY5FU46oVeIgtPgIAfnlN0nbKW8MEry3kktRkxcWhFPmZmW1gO4ub2xoW4TIgFWMnnsZqocKASWMNZBUbVEOX3ZRU7gjx833+DW2rCMjY9WAuk+TaFB0Q063H9rGXCoZmRll0QGpr/baxrfGiA1KqmhvK0xrLslgYFia66y15C/FaTWWHwXPI3CX5GDZXMUgyqYfcL/Ks5kaQqIAwRKF6Tq176N5CesYCuELjr0VL+Owf+DGNN/a8DS4Ma6yiajND+m6/pTGnkuq+wJieQulEQcy6jGqvJeXdYgz5gIYs3YqKsLvsc0gJwaCBSLkLTdUfiUEY7aD4rOJZh4j+fo4ZEl1W8QQkE9egE5CM+JmSApFAAAAAAAAAoBZf6Exu7Mzk5D8AAAAASUVORK5CYII=";
let q_ = class {
  constructor({
    app: n,
    viewport: s,
    mainImage: a
  }) {
    this.app = n, this.pixiViewport = s.viewport, this.mainImage = a, this.size = 7, this.images = [N_, I_, C_, P_, S_, B_, T_, E_, D_, k_, R_, M_, U_, O_, Q_, F_, G_, z_, L_, H_], this.textureArray = [];
    for (let i = 0; i < this.images.length; i++) {
      let o = PIXI.Texture.from(this.images[i]);
      o.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST, this.textureArray.push(o)
    }
  }
  async boomWithDebounce({
    x: n,
    y: s
  }, a) {
    await jo(M(50, 500)), this.boom({
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
const Y_ = ({
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
        wt({
          x: l,
          y: d
        }) && s++
      }
    return s
  },
  X_ = async ({
    coords: t,
    dispatch: n,
    repaintReward: s,
    amount: a,
    state: i
  }) => {
    var r, l;
    if (!a && i && (a = i.shop.available[7]), !a || a === 0) {
      n(Ft());
      return
    }
    j.mainImage.pumpkin.boom(t), n(Js.useProduct({
      pixelId: ut(t),
      productId: 7
    })), n(Qt(s * Y_(t))), n(Vs({
      product: 7,
      amount: 1
    })), (l = (r = window.Telegram.WebApp) == null ? void 0 : r.HapticFeedback) == null || l.notificationOccurred("error")
  }, V_ = () => {
    const t = g(),
      n = 7,
      s = c(qe),
      a = c(d => d.shop.available[n]);
    c(d => d.main.fastMode);
    const i = c(d => d.main.currentFastType),
      r = 10 + String(a).length * 6,
      l = [P.button, P.fast_type_button];
    return i === "pumpkin" && l.push(P.fast_mode_button_enabled), !s || !a || a === 0 ? null : e.jsxs("button", {
      className: `${l.join(" ")} ${P.shop_button}`,
      onPointerUp: () => {
        if (i === "pumpkin") {
          t(Ft());
          return
        }!a || a === 0 ? (t(st(n)), t(at())) : t(ta("pumpkin"))
      },
      children: [e.jsx("img", {
        alt: "img",
        className: P.button_image,
        src: lo
      }), e.jsx("div", {
        className: P.available,
        style: {
          width: r
        },
        children: !a || a === 0 ? e.jsx(I, {
          children: ""
        }) : e.jsx(Fn, {
          number: a,
          fontSize: 11,
          fontWeight: 400,
          gap: 3
        })
      })]
    })
  }, Ga = "/assets/particle_rays1-mrHjO6Jg.png", J_ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAB40lEQVR4nO3dQU7CUBRA0da4L2Hl1JXVidP+0Fgi7T1nSiIoNy+2vo/zuq7rRNaHt75NAHECiBNAnADiBBD3Ofr253mu/3wuYXSlbwLECSBOAHECiBNAnADiBBAngDgBxAkgTgBxAogTQJwA4gQQJ4A4AcQJIE4AcQKIE0CcAOIEECeAOAHEDU8GncV/fMbFVU5NmQBxAogTQJwA4gQQJ4C401wG7r3Uu9/uhzzvY3k8/XrOeGloAsQJIE4AcQKIE0DcJf4YtMfyvbzsa9++bpuPvfJ5/8IEiBNAnADiBBAngDgBxAkgTgBxAogTQNxpbgWPli1Gt2CftbVwctRiybsyAeIEECeAOAHECSDuEgshe5YtjjpJ/K4LHnuZAHECiBNAnADiBBAngDgBxAkgTgBxAogTQFzucOjWZtERW0VnZALECSBOAHECiJvXwYbEVT4SvW60BGMCxAkgTgBxAojL3QncuxV89V+ETYA4AcQJIE4AcQKIy10F7LW1J+BsIJcggDgBxAkgTgBxtoJ/2QomSQBxAogTQJwA4qyFB1gLZ5MA4gQQJ4A4AcQJIE4AcQKIE0CcAOIEECeAOAHECSBOAHECiBNA3PBcwFH/ZZP3ZQLECSBOAHECiBNAnADKpmn6AbwwPcfPo50AAAAAAElFTkSuQmCC";
class W_ {
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
    this.backdrop = new PIXI.Graphics, this.backdrop.beginFill(0, .8), this.backdrop.drawRect(0, 0, B.width, B.height), this.backdrop.endFill(), this.backdrop.zIndex = 20, this.backdrop.interactive = !0, setTimeout(() => {
      this.backdrop.on("pointerup", n => {
        const s = this.store.dispatch;
        s(d_()), this.viewport.unlock(), this.destroy()
      })
    }, 2e3), this.pixiViewport.addChild(this.backdrop)
  }
  async addGlow(n) {
    PIXI.Loader.shared.resources.rewardGlow || await this.loadResource("rewardGlow", Ga);
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
    PIXI.Loader.shared.resources.tnt || await this.loadResource("tnt", J_), this.image = new PIXI.Sprite(PIXI.Loader.shared.resources.tnt.texture), this.image.zIndex = 21, this.image.width = 1, this.image.height = 1, this.image.x = n.x, this.image.y = n.y, this.pixiViewport.addChild(this.image)
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
class Z_ {
  constructor({
    app: n,
    viewport: s,
    store: a,
    mainImage: i
  }) {
    Ln(this, "isCoordsInExtraRewardZone", ({
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
    if (!(i && i.ID && i.PeriodType === "round")) return xt.neutral;
    for (let o = 0; o < this.items.length; o++) {
      const r = this.items[o];
      if (r.type === Te.my || !this.isCoordsInExtraRewardZone({
          coords: n,
          x1: r.x,
          y1: r.y,
          imageSize: r.imageSize
        })) continue;
      const l = Tn({
          x: n.x - r.x,
          y: n.y - r.y,
          width: r.imageSize
        }),
        d = nn(r.imageData[l], r.imageData[l + 1], r.imageData[l + 2]),
        u = r.imageData[l + 3],
        h = this.mainImage.getPixelColor({
          coords: n
        });
      if (u !== 0 && h !== s) {
        if (h === d && s !== d) return xt.fail;
        if (h !== d && s === d) return xt.success
      }
    }
    return xt.neutral
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
class K_ {
  constructor({
    app: n,
    viewport: s,
    store: a,
    ticker: i,
    readyCallback: o
  }) {
    Ln(this, "getClickCoords", n => {
      const s = this.sprite.toLocal(n.data.global);
      return {
        x: Math.floor(s.x),
        y: Math.floor(s.y)
      }
    });
    this.app = n, this.ticker = i, this.viewport = s, this.store = a, this.pixiViewport = s.viewport, this.selectedPixel = new kp({
      viewport: s
    }), this.template = new __({
      app: n,
      viewport: s,
      store: a
    }), this.worldTemplate = new x_({
      app: n,
      viewport: s,
      store: a,
      mainImage: this
    }), this.tournamentTemplates = new Z_({
      app: n,
      viewport: s,
      store: a,
      mainImage: this
    }), this.reward = new W_({
      ticker: i,
      viewport: s,
      store: a
    }), this.bomb = new Wp({
      app: n,
      viewport: s,
      mainImage: this
    }), this.pumpkin = new q_({
      app: n,
      viewport: s,
      mainImage: this
    }), this.imageData = null, this.texture = null, this.sprite = null, this.timeout = null, this.lastPointerUpTs = Date.now(), this.lastPaintCoords = {
      x: -1,
      y: -1
    }, this.initImage(), o(a), this.initEvents(), this.store.dispatch(dt({
      command: Qe.start
    })), !Da() && this.loadAllChunks().then(() => {
      const r = a.getState().main.startParams.coords;
      r && (j.viewport.viewport.animate({
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
    this.imageData = new Uint8Array(B.width * B.height * 4);
    const n = PIXI.Texture.fromBuffer(this.imageData, B.width, B.height, {
      format: PIXI.FORMATS.RGBA,
      type: PIXI.TYPES.UNSIGNED_BYTE,
      width: B.width,
      height: B.height
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
      if (r - this.lastPointerUpTs < 200 && !i && !o && (this.pixiViewport.scaled > 50 ? j.viewport.viewport.animate({
          scale: this.pixiViewport.findFitHeight(B.height),
          time: 400
        }) : j.viewport.viewport.animate({
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
        this.lastPaintCoords = a, Nr({
          charges: s.mining.charges,
          dispatch: this.store.dispatch,
          flyCoords: d,
          paintCoords: a,
          activeColor: s.color.active,
          state: this.store.getState()
        })
      } else o === "bomb" ? v_({
        coords: a,
        dispatch: this.store.dispatch,
        repaintReward: ha(s),
        state: this.store.getState()
      }) : o === "paintcan" ? j_({
        coords: a,
        dispatch: this.store.dispatch,
        repaintReward: ha(s),
        activeColor: s.color.active,
        state: this.store.getState()
      }) : o === "pumpkin" ? X_({
        coords: a,
        dispatch: this.store.dispatch,
        repaintReward: ha(s),
        state: this.store.getState()
      }) : this.timeout = setTimeout(() => {
        this.selectedPixel.draw(a), this.store.dispatch(Ot(a))
      }, 0)
    })
  }
  async loadAllChunks() {
    const n = await this.loadImage(qc),
      s = this.getImageData(n, B.width, B.height);
    for (let a = 0; a < s.length; a += 4) this.imageData[a + 3] === 0 && (this.imageData[a] = s[a], this.imageData[a + 1] = s[a + 1], this.imageData[a + 2] = s[a + 2], this.imageData[a + 3] = s[a + 3]);
    this.updateTexture(), this.store.dispatch(dt({
      command: Qe.finish
    }))
  }
  async loadFromCentrifuge(n) {
    const s = performance.now(),
      a = this.getImageData(n, B.width, B.height);
    for (let i = 0; i < a.length; i += 4) this.imageData[i + 3] === 0 && (this.imageData[i] = a[i], this.imageData[i + 1] = a[i + 1], this.imageData[i + 2] = a[i + 2], this.imageData[i + 3] = a[i + 3]);
    this.updateTexture(), this.store.dispatch(dt({
      command: Qe.finish
    })), console.log(performance.now() - s)
  }
  async loadChunk({
    chunkIndex: n
  }) {
    const s = B.chunkOrder[n],
      a = await this.loadImage(`${Va}image/block?block_id=${s}`),
      i = this.getImageData(a, B.chunkSize, B.chunkSize),
      o = xa({
        index: s - 1,
        width: 4,
        blockSize: 1
      });
    for (let r = 0; r < i.length; r += 4) {
      const l = xa({
          index: r,
          width: B.chunkSize
        }),
        d = Tn({
          x: l.x + o.x * B.chunkSize,
          y: l.y + o.y * B.chunkSize,
          width: B.width
        });
      this.imageData[d] = i[r], this.imageData[d + 1] = i[r + 1], this.imageData[d + 2] = i[r + 2], this.imageData[d + 3] = i[r + 3]
    }
    this.updateTexture(), n < 15 ? await this.loadChunk({
      chunkIndex: n + 1
    }) : this.store.dispatch(dt({
      command: Qe.finish
    }))
  }
  updateTexture() {
    this.sprite.texture.update()
  }
  paintPixels(n) {
    for (const [s, a] of Object.entries(n)) this.paintPixel({
      id: s,
      color: kt(a)
    });
    this.updateTexture()
  }
  paintPixelsFromCentrifuge(n) {
    Object.keys(n).forEach(s => {
      n[s].forEach(i => {
        s !== "#171F2A" && this.paintPixel({
          id: i,
          color: kt(s)
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
      const r = xa({
          index: o,
          width: a,
          blockSize: 1
        }),
        l = {
          x: n + r.x,
          y: s + r.y
        };
      if (l.x < 0 || l.y < 0 || l.x > B.width || l.y > B.height) continue;
      const d = Tn({
          x: l.x,
          y: l.y,
          width: B.width
        }),
        {
          r: u,
          g: h,
          b: _
        } = kt(i[o]);
      this.imageData[d] = u, this.imageData[d + 1] = h, this.imageData[d + 2] = _, this.imageData[d + 3] = 255
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
    s ? a = ut(s) : a = Number(n);
    const i = (a - 1) * 4,
      o = this.imageData[i],
      r = this.imageData[i + 1],
      l = this.imageData[i + 2];
    return nn(o, r, l)
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
          u = URL.createObjectURL(d);
        r.src = u, r.onload = () => {
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
        width: B.width,
        height: B.height
      }),
      a = PIXI.RenderTexture.create({
        width: B.width,
        height: B.height
      });
    s.render(this.sprite, a), s.view.toBlob(o => {
      n(o), s.destroy(!0)
    }, "image/png")
  }
  pixanosRepaint(n, s, a, i) {
    const o = _ => {
        let y = 1664525,
          N = 1013904223,
          x = 4294967296,
          w = _ >>> 0;
        return function() {
          return w = (y * w + N) % x, w / x
        }
      },
      r = s * s,
      l = Math.floor(r * a),
      d = o(n),
      u = Array.from(Array(l));
    for (let _ = 0; _ < l; _++) u[_] = _ + 1;
    for (let _ = l + 1; _ <= r; _++) {
      const y = Math.floor(d() * _) + 1;
      y <= l && (u[y - 1] = _)
    }
    const h = kt(i);
    for (let _ = 0; _ < u.length; _++) {
      const y = u[_];
      if (_ < 20) {
        const N = Fs(y);
        console.log(`i: ${_}, id: ${y}, x: ${N.x}, y: ${N.y}`)
      }
      this.paintPixel({
        id: y,
        color: h
      })
    }
    this.updateTexture()
  }
}
class $_ {
  constructor({
    viewport: n
  }) {
    this.viewport = n, this.pixiViewport = n.viewport, this.sprite = null
  }
  draw({
    arr: n
  }) {
    this.destroy();
    let s = new Uint8Array(B.width * B.height * 4);
    for (let i = 0; i < s.length; i += 32) {
      const o = n[Math.round(i / 32)];
      for (let r = 0; r < 32; r += 4) {
        const l = Math.round(r / 4);
        s[i + r] = o & 1 << l ? 0 : 23, s[i + r + 1] = o & 1 << l ? 0 : 31, s[i + r + 2] = o & 1 << l ? 0 : 42, s[i + r + 3] = o & 1 << l ? 0 : 255
      }
    }
    const a = PIXI.Texture.fromBuffer(s, B.width, B.height, {
      format: PIXI.FORMATS.RGBA,
      type: PIXI.TYPES.UNSIGNED_BYTE,
      width: B.width,
      height: B.height
    });
    a.scaleMode = PIXI.SCALE_MODES.NEAREST, this.sprite = PIXI.Sprite.from(a), this.sprite.eventMode = "none", this.sprite.zIndex = 4e3, this.pixiViewport.addChild(this.sprite)
  }
  destroy() {
    this.sprite !== null && (this.sprite.destroy(), this.sprite = null)
  }
}
class ex {
  constructor({
    app: n,
    store: s
  }) {
    this.app = n, this.store = s, this.viewport = new window.pixi_viewport.Viewport({
      worldWidth: B.width,
      worldHeight: B.height,
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
const tx = () => localStorage.getItem("canvasFps") ? Number(localStorage.getItem("canvasFps")) : 60;
class nx {
  constructor({
    app: n
  }) {
    this.app = n, this.lastTime = Date.now(), this.lastRenderTime = Date.now(), this.fps = tx(), this.callbacks = [], this.render()
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
let za;
const sx = t => {
  za = t
};
class ax {
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
    }), this.app.ticker.stop(), this.ticker = new nx({
      app: this.app
    }), this.viewport = new ex({
      app: this.app,
      store: za
    }), this.mainImage = new K_({
      app: this.app,
      viewport: this.viewport,
      store: za,
      ticker: this.ticker,
      readyCallback: n
    }), this.mask = new $_({
      viewport: this.viewport
    })
  }
}
let j, Ri = !1;

function ix() {
  j = new ax({
    readyCallback: t => {
      Dh(t.getState().user.user.websocketToken, t.getState().user.user.id)
    }
  })
}
const ox = A.memo(() => (A.useEffect(() => {
    Ri || (ix(), Ri = !0)
  }, []), nt.createPortal(e.jsx("canvas", {
    id: "canvasHolder",
    className: `${Ip.main_canvas}`
  }), document.body)), () => !0),
  rx = ({
    children: t,
    coords: n,
    classes: s = []
  }) => {
    const a = J(),
      i = g();
    return e.jsx("div", {
      className: [re.row, ...s].join(" "),
      onPointerUp: () => {
        j.viewport.viewport.animate({
          scale: 25,
          time: 400,
          position: n
        }), j.mainImage.selectedPixel.draw(n), a.push("/"), i(Ot(n))
      },
      children: t
    })
  },
  cx = ({
    item: t
  }) => e.jsxs(rx, {
    coords: t,
    children: [e.jsxs(Fo, {
      children: [e.jsx(bp, {
        color: t.color
      }), e.jsx(jp, {
        coords: {
          x: t.x,
          y: t.y
        }
      })]
    }), e.jsx(Go, {
      children: e.jsx(wp, {
        date: t.dateObtained
      })
    }), e.jsx(zo, {
      children: e.jsx("div", {
        className: `${re.icon_arrow} telegram_icons`,
        children: ""
      })
    })]
  }),
  lx = () => c(ti.selectAll).map(n => e.jsx(cx, {
    item: n
  }, ut({
    x: n.x,
    y: n.y
  }))),
  dx = () => {
    const t = g(),
      n = c(o => o.user.pixelsForSaleOffset),
      s = c(o => o.user.pixelsForSaleLimit),
      a = c(o => o.user.pixelsForSaleTotal),
      i = c(o => o.user.pixelsForSaleFetchStatus);
    return n + s >= a ? null : e.jsx("button", {
      className: `${re.row} ${re.loadMoreButton}`,
      onPointerUp: () => {
        t(Io({
          offset: n + s
        }))
      },
      disabled: i === p.pending,
      children: "Show more"
    })
  },
  ux = () => e.jsxs("div", {
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
  Ax = () => {
    const t = c(ti.selectTotal);
    return c(s => s.user.pixelsForSaleFetchStatus) === p.pending && t === 0 ? e.jsx(ux, {}) : t !== 0 ? e.jsxs(vp, {
      children: [e.jsx(lx, {}), e.jsx(dx, {})]
    }) : null
  },
  mx = () => {
    const t = g();
    return Vm(), A.useEffect(() => () => {
      t(Gd()), t(Io({
        offset: 0
      })), t(Fd({
        status: p.idle
      }))
    }, []), e.jsxs(e.Fragment, {
      children: [e.jsx(xp, {}), e.jsx(Ax, {})]
    })
  },
  px = "_layout_v8prs_1",
  hx = "_group_title_container_v8prs_7",
  gx = "_group_title_v8prs_7",
  _x = "_group_v8prs_7",
  Ts = {
    layout: px,
    group_title_container: hx,
    group_title: gx,
    group: _x
  },
  xx = ({
    title: t,
    children: n
  }) => e.jsxs(ae.Fragment, {
    children: [e.jsx("div", {
      className: Ts.group_title_container,
      children: e.jsx("span", {
        className: Ts.group_title,
        children: t
      })
    }), e.jsx("div", {
      className: Ts.group,
      children: n
    })]
  }),
  fx = "_boost_item_8sbvi_1",
  vx = "_image_container_8sbvi_10",
  yx = "_image_8sbvi_10",
  wx = "_content_container_8sbvi_21",
  jx = "_content_8sbvi_21",
  bx = "_item_title_container_8sbvi_33",
  Nx = "_item_reward_container_8sbvi_40",
  Ix = "_price_text_8sbvi_45",
  Cx = "_dot_8sbvi_49",
  Px = "_level_text_8sbvi_53",
  Sx = "_status_container_8sbvi_58",
  Bx = "_status_8sbvi_58",
  Ue = {
    boost_item: fx,
    image_container: vx,
    image: yx,
    content_container: wx,
    content: jx,
    item_title_container: bx,
    item_reward_container: Nx,
    price_text: Ix,
    dot: Cx,
    level_text: Px,
    status_container: Sx,
    status: Bx
  },
  ui = ({
    children: t,
    boost: n,
    price: s,
    isMax: a
  }) => {
    const i = g();
    return e.jsx("div", {
      className: Ue.boost_item,
      onPointerUp: () => {
        a || (i(zh(n)), i(ri(!0)))
      },
      children: t
    })
  },
  Ai = ({
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
  mi = ({
    src: t
  }) => e.jsx("div", {
    className: Ue.image_container,
    children: e.jsx("img", {
      alt: "image",
      className: Ue.image,
      src: t
    })
  }),
  Tx = ({
    price: t,
    isMax: n
  }) => n ? "Max" : e.jsxs(ae.Fragment, {
    children: [e.jsx(U, {}), "  ", e.jsx("span", {
      className: Ue.price_text,
      children: t
    })]
  }),
  pi = ({
    reward: t,
    level: n,
    price: s,
    isMax: a
  }) => {
    const {
      t: i
    } = ze();
    return e.jsx("div", {
      className: Ue.content_container,
      children: e.jsxs("div", {
        className: Ue.content,
        children: [e.jsx("div", {
          className: Ue.item_title_container,
          children: t
        }), e.jsxs("div", {
          className: Ue.item_reward_container,
          children: [e.jsx(Tx, {
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
  Ir = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAADNQTFRFJS5B9v+18/Dl7NL//OZH1N6v1MdTura5/7AA1oX4ppdEyI4TwHoSZGNloiHkREJOZACci2GX6wAAAM5JREFUeNrt18EOgyAQRdFBpzKoQP//a8tbdGHGphppIWZuwoaEAwlhAVmWZVm3L6UQegFFNDaOITxLfYCfuJ+Adr6/gM5x6QjXCgQm8p1rB4qgi5wG7X3Y+S40DESAUlJcJ2CMIPcw/6gLzs5NR5/elovRe1LNzBNP9cBFmKiYZy8kZ3A5K3LFtlIRhLjIQugsCRTkjkj1QIgrnYnZOSzxHhzt1hIEJ8L8JvsDwWEARL2BwJjBiWznewGZFadqCUppLRGqCdrn07Is6+a9AG2rFi1gfBMTAAAAAElFTkSuQmCC",
  Ex = () => {
    const {
      t
    } = ze(), n = he.paintReward, s = c(u => u.main.settings.UpgradeRepaint), a = c(u => u.mining.boosts[n]), {
      repaintReward: i
    } = c(un), o = a >= i, r = Math.min(i, a + 1), l = Math.min(i, a), d = s == null ? void 0 : s.levels[r];
    return e.jsxs(ui, {
      boost: n,
      isMax: o,
      price: d.Price,
      children: [e.jsx(mi, {
        src: Ir
      }), e.jsx(pi, {
        reward: t("mining.boosts.paintReward"),
        price: d.Price,
        level: l,
        isMax: o
      }), e.jsx(Ai, {
        isMax: o
      })]
    })
  },
  Cr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQBAMAAAB8P++eAAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAABJQTFRFJS5B/+2k/8ZA/6cA5HQArUkAuEjH0AAAAGRJREFUeNrt1TENAEEMA8FQCAVTMAVTCH8qL0V6Bltcka2ntuu6rjcbGqZgqIGhXCx0h4VuDQrd7eLgupa3INDqPwbGm7QOgH9ZR0KvA+GsI2GUQuE4xcKkAAhMGTG2d0zX9WYfl2Yb5cnsVocAAAAASUVORK5CYII=",
  Dx = () => {
    const {
      t
    } = ze(), n = he.reChargeSpeed, s = c(u => u.main.settings.UpgradeChargeRestoration), a = c(u => u.mining.boosts[n]), {
      restorationSpeed: i
    } = c(un), o = a >= i, r = Math.min(i, a + 1), l = Math.min(i, a), d = s == null ? void 0 : s.levels[r];
    return e.jsxs(ui, {
      boost: n,
      isMax: o,
      price: d.Price,
      children: [e.jsx(mi, {
        src: Cr
      }), e.jsx(pi, {
        reward: t("mining.boosts.rechargingSpeed"),
        price: d.Price,
        level: l,
        isMax: o
      }), e.jsx(Ai, {
        isMax: o
      })]
    })
  },
  Pr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQBAMAAAB8P++eAAAAAXNSR0IArs4c6QAAACRQTFRFJS1A1uLTscetgNhhcMJTiaeNUqhDYYZsLZkvMXI6BY4bRGNNme8YcAAAAMdJREFUeNrt1bENQyEMRdG/grMBXoEVWIEVvAIreAVvEHmFt1z4jiKlAykuUnAbmlM8ISSu0+mfs4bOaJYFmw3wGB3DWgoUdGAwD6BDMmDFuBHiqBnQKoDOzACqp0DVVu9aVbUU6KruKioingU9oKZCTodOtAnLLlSiVMg040zoRKK6B7Pv8UllCbvF9QjfsGdAIw44HZNlwO5ORA+aLTa6l7ejzY2+2lh24ffGBfxs3Hq4M0mBIQNKuAQYVCO/rk14PvvT6bdeUNkQ6l74HqUAAAAASUVORK5CYII=",
  kx = () => {
    const {
      t
    } = ze(), n = he.energyLimit, s = c(u => u.main.settings.UpgradeChargeCount), a = c(u => u.mining.boosts[n]), {
      chargesCount: i
    } = c(un), o = a >= i, r = Math.min(i, a + 1), l = Math.min(i, a), d = s == null ? void 0 : s.levels[r];
    return e.jsxs(ui, {
      boost: n,
      isMax: o,
      price: d.Price,
      children: [e.jsx(mi, {
        src: Pr
      }), e.jsx(pi, {
        reward: t("mining.boosts.energyLimit"),
        price: d.Price,
        level: l,
        isMax: o
      }), e.jsx(Ai, {
        isMax: o
      })]
    })
  },
  Rx = "_container_1e12r_1",
  Mx = "_title_container_1e12r_8",
  Ux = "_description_1_1e12r_19",
  Ox = "_description_2_1e12r_27",
  Qx = "_description_container_1e12r_35",
  Fx = "_image_container_1e12r_47",
  Gx = "_image_1e12r_47",
  zx = "_buttons_container_1e12r_59",
  Lx = "_button_1e12r_59",
  Hx = "_cancel_button_1e12r_71",
  qx = "_loading_1e12r_1",
  de = {
    container: Rx,
    title_container: Mx,
    description_1: Ux,
    description_2: Ox,
    description_container: Qx,
    image_container: Fx,
    image: Gx,
    buttons_container: zx,
    button: Lx,
    cancel_button: Hx,
    loading: qx
  },
  hi = ({
    children: t,
    boost: n,
    price: s
  }) => {
    const a = g(),
      {
        t: i
      } = ze(),
      o = d => {
        a(ri(d))
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
            l || (await a(be.checkBoost({
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
  Yx = () => {
    const {
      t
    } = ze(), n = he.paintReward, s = c(d => d.main.settings.UpgradeRepaint), a = c(d => d.mining.boosts[n]), {
      repaintReward: i
    } = c(un), o = Math.min(i, a + 1), r = (s == null ? void 0 : s.levels[a]) || {
      Boost: 1
    }, l = s == null ? void 0 : s.levels[o];
    return e.jsxs(hi, {
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
          src: Ir
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
  Xx = () => {
    const {
      t
    } = ze(), n = he.reChargeSpeed, s = c(d => d.main.settings.UpgradeChargeRestoration), a = c(d => d.mining.boosts[n]), {
      restorationSpeed: i
    } = c(un), o = Math.min(i, a + 1), r = (s == null ? void 0 : s.levels[a]) || {
      ChargeBoost: 6e5
    }, l = s == null ? void 0 : s.levels[o];
    return l.ChargeBoost - (r == null ? void 0 : r.ChargeBoost), e.jsxs(hi, {
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
          src: Cr
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
  Vx = () => {
    const {
      t
    } = ze(), n = he.energyLimit, s = c(d => d.main.settings.UpgradeChargeCount), a = c(d => d.mining.boosts[n]), {
      chargesCount: i
    } = c(un), o = Math.min(i, a + 1), r = s == null ? void 0 : s.levels[o], l = c(d => d.mining.maxCharges);
    return e.jsxs(hi, {
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
          src: Pr
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
  Jx = () => {
    const t = g(),
      n = c(i => i.main.showBoostDetailsPopup),
      s = c(i => i.main.activeBoostDetails),
      a = i => {
        t(ri(i))
      };
    return e.jsxs(rn, {
      show: n,
      setShow: a,
      children: [s === he.paintReward && e.jsx(Yx, {}), s === he.reChargeSpeed && e.jsx(Xx, {}), s === he.energyLimit && e.jsx(Vx, {})]
    })
  },
  Wx = () => e.jsxs("div", {
    className: Ts.layout,
    children: [e.jsxs(xx, {
      title: "Boosters",
      children: [e.jsx(Ex, {}), e.jsx(Dx, {}), e.jsx(kx, {})]
    }), e.jsx(Jx, {}), e.jsx("div", {
      style: {
        height: "20px"
      }
    })]
  }),
  Zx = () => {
    const t = c(n => n.mining.activeTab);
    return e.jsxs("div", {
      className: m.info_layout,
      children: [e.jsx(Xm, {}), t === "tasks" && e.jsx(Ym, {}), t === "pixels" && e.jsx(mx, {}), t === "boosts" && e.jsx(Wx, {})]
    })
  },
  Kx = () => {
    const t = g(),
      n = c(s => s.mining.activeTab);
    return e.jsxs(dn, {
      children: [e.jsx(Fe, {
        active: n === "tasks",
        setActive: () => t(ka("tasks")),
        children: "Tasks"
      }), e.jsx(Fe, {
        active: n === "boosts",
        setActive: () => t(ka("boosts")),
        children: "Boosts"
      })]
    })
  },
  $x = () => e.jsxs(ae.Fragment, {
    children: [e.jsx(Kx, {}), e.jsx(Zx, {})]
  }),
  ef = "_more_details_6gp7h_1",
  tf = {
    more_details: ef
  },
  mn = ({
    children: t,
    ...n
  }) => e.jsx("span", {
    className: tf.more_details,
    ...n,
    children: e.jsx("span", {
      children: t
    })
  }),
  nf = "_container_11l5m_1",
  sf = "_divider_11l5m_23",
  af = "_row_11l5m_28",
  of = "_row_title_11l5m_40",
  rf = "_row_title_main_11l5m_44",
  cf = "_row_hint_11l5m_49",
  lf = "_row_value_11l5m_55",
  df = "_row_value_main_11l5m_59",
  uf = "_mining_percent_11l5m_64",
  Af = "_active_row_11l5m_74",
  mf = "_button_11l5m_85",
  Mi = {
    container: nf,
    divider: sf,
    row: af,
    row_title: of,
    row_title_main: rf,
    row_hint: cf,
    row_value: lf,
    row_value_main: df,
    mining_percent: uf,
    active_row: Af,
    button: mf
  },
  pf = () => {
    const t = g(),
      {
        t: n
      } = ze("translation", {
        keyPrefix: "mining.popup"
      }),
      s = c(r => r.main.showMiningDetailsPopup),
      a = r => {
        t(ir(r))
      },
      i = c(r => r.mining.info),
      o = c(r => r.main.settings);
    return i ? e.jsx(rn, {
      show: s,
      setShow: a,
      children: e.jsxs("div", {
        className: Mi.container,
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
          className: Mi.button,
          onPointerUp: () => a(!1),
          children: n("button")
        })]
      })
    }) : null
  },
  hf = () => {
    const t = g(),
      {
        t: n
      } = ze("translation", {
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
      }), e.jsx(Bu, {}), e.jsxs("div", {
        className: qn.general_info_container,
        children: [e.jsxs("h1", {
          className: qn.pixels_amount,
          children: [e.jsx(oA, {}), " PX"]
        }), e.jsxs("div", {
          className: qn.description_container,
          children: [e.jsxs("span", {
            className: qn.description,
            children: [n("grayInstruction"), " ", e.jsx("br", {}), e.jsx(mn, {
              onPointerUp: s => {
                s.stopPropagation(), t(ir(!0))
              },
              children: n("howItWorks")
            })]
          }), e.jsx(pf, {})]
        })]
      }), e.jsx(iA, {}), e.jsx($x, {})]
    })
  },
  gf = "_squads_img_container_zthsq_1",
  _f = "_squads_img_zthsq_1",
  xf = "_title_container_zthsq_11",
  ff = "_description_container_zthsq_18",
  vf = "_description_zthsq_18",
  yf = "_info_layout_zthsq_31",
  wf = "_info_container_zthsq_42",
  jf = "_base_item_zthsq_49",
  bf = "_loading_item_zthsq_60",
  Nf = "_rating_item_zthsq_69",
  If = "_info_row_zthsq_82",
  Cf = "_avatar_container_zthsq_87",
  Pf = "_avatar_zthsq_87",
  Sf = "_position_zthsq_99",
  Bf = "_user_squad_position_zthsq_117",
  Tf = "_rating_main_info_zthsq_135",
  Ef = "_rating_name_zthsq_148",
  Df = "_rating_value_zthsq_155",
  kf = "_active_league_text_zthsq_163",
  Rf = "_icon_leagueflag_zthsq_167",
  Mf = "_join_squad_button_zthsq_174",
  Uf = "_join_squad_text_zthsq_188",
  Of = "_user_squad_container_zthsq_206",
  Qf = "_squad_avatar_container_zthsq_223",
  Ff = "_user_squad_info_zthsq_234",
  Gf = "_user_squad_name_zthsq_242",
  zf = "_user_squad_your_squad_text_zthsq_246",
  Lf = "_user_squad_users_count_zthsq_251",
  H = {
    squads_img_container: gf,
    squads_img: _f,
    title_container: xf,
    description_container: ff,
    description: vf,
    info_layout: yf,
    info_container: wf,
    base_item: jf,
    loading_item: bf,
    rating_item: Nf,
    info_row: If,
    avatar_container: Cf,
    avatar: Pf,
    position: Sf,
    user_squad_position: Bf,
    rating_main_info: Tf,
    rating_name: Ef,
    rating_value: Df,
    active_league_text: kf,
    icon_leagueflag: Rf,
    join_squad_button: Mf,
    join_squad_text: Uf,
    user_squad_container: Of,
    squad_avatar_container: Qf,
    user_squad_info: Ff,
    user_squad_name: Gf,
    user_squad_your_squad_text: zf,
    user_squad_users_count: Lf
  },
  Hf = ({
    isPlayers: t
  }) => {
    const n = g(),
      s = c(i => i.ratings.league),
      a = c(Po);
    return e.jsx(dn, {
      children: ["bronze", "silver", "gold", "platinum"].map(i => e.jsxs(Fe, {
        active: s === i,
        setActive: () => {
          s !== i && n(pr(i))
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
  qf = "_panel_bpwn4_1",
  Yf = "_item_bpwn4_9",
  Xf = "_active_bpwn4_20",
  ba = {
    panel: qf,
    item: Yf,
    active: Xf
  },
  Vf = ({
    selectedSection: t,
    setSelectedSection: n
  }) => e.jsx("div", {
    className: ba.panel,
    children: ["Squads", "Painters"].map(s => e.jsx("div", {
      className: `${ba.item} ${t===s?ba.active:""}`,
      onPointerUp: () => {
        n(s)
      },
      children: e.jsx("h1", {
        children: s
      })
    }, s))
  }),
  aa = ({
    children: t
  }) => e.jsx("div", {
    className: H.base_item,
    children: t
  }),
  tt = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAIVBMVEUQGSb////09PTk5ebT1NbCw8asr7ODh41jZ29GTFYjKjX3vgf4AAABe0lEQVR42u3X227DMAgGYMzBBt7/gSc17dwlWpNemGrT/121UhRQDMgQAAAAAAAAAAAA/GU5uqpqH0mfkJ3bHfekckPaExnl8bn9wKM8/t6gQs5twyLfP53q2Dz5WQ1WfgA9H/1QXQZbQEu6S9sSoiIp25nva0KSavgtAaUnekvAS3ugHw6FkYBTjdhqIOlbbjUQVES3tt8PBi2eA+KzLSrnwAwovv9b/Akam2e6cbvpVCe0HWhQIZe2I06lXA7xi6W1iS2pnhs/wjt9SHjvHtiQPiKGKT9qgNVGUJ0cyu2AdWRZ8R/UtYNre0l9+UZ8gnsWzV8W7XcqXDKVBz8VXOy7Qnn1pjz49VeOzjODlfEt6BdhCzMIme8+z1Ji1S1M49pdqa+5ijfLi/cEXXMCEtefXLSOnZlr2v9MwOgCW5JAyNUp67ymD2124ZU+tFWDkK2/ZLxqFKa1N2hWbGNTzZ7mUhH/vL7OadRfSCc2x9ICAAAAAAAAAADwli/CSAqaW7oHjgAAAABJRU5ErkJggg==",
  Sr = ({
    position: t,
    userPic: n
  }) => e.jsxs("div", {
    className: H.avatar_container,
    children: [e.jsx("img", {
      alt: "avatar",
      className: H.avatar,
      src: n === "" ? tt : n
    }), e.jsx("div", {
      className: H.position,
      children: t
    }), ";"]
  }),
  Br = ({
    name: t
  }) => e.jsx("div", {
    className: H.rating_main_info,
    children: e.jsx("span", {
      className: H.rating_name,
      children: t
    })
  }),
  Tr = ({
    value: t
  }) => t ? e.jsx("span", {
    className: H.rating_value,
    children: tn(t)
  }) : null,
  Jf = ({
    item: t,
    index: n
  }) => {
    const s = g(),
      a = [H.rating_item];
    return e.jsx(aa, {
      children: e.jsxs("div", {
        className: a.join(" "),
        onPointerUp: () => {
          s(Qn({
            dataSource: Je.userFromRating,
            index: n
          }))
        },
        children: [e.jsx(Sr, {
          position: n + 1,
          userPic: t.userPic
        }), e.jsx(Br, {
          name: t.firstName
        }), e.jsx(Tr, {
          value: t.repaints
        })]
      })
    })
  },
  Wf = () => {
    const t = c(s => s.user.user),
      n = c(s => s.ratings.myPlace);
    return t === null ? null : e.jsx(aa, {
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
            src: t.userPic === "" ? tt : t.userPic
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
  Zf = () => {
    const t = g(),
      n = c(i => i.ratings.list),
      s = c(i => i.ratings.league),
      a = c(i => i.ratings.status);
    return A.useEffect(() => {
      t(ci.personal({
        league: s
      }))
    }, [s]), A.useEffect(() => () => {
      t(Fg())
    }, []), a !== p.fulfilled ? null : e.jsxs(ae.Fragment, {
      children: [e.jsx(Wf, {}), n.map((i, o) => e.jsx(Jf, {
        item: i,
        index: o
      }, o))]
    })
  },
  Kf = () => (A.useState("Day"), null),
  $f = ({
    children: t
  }) => e.jsx("div", {
    className: H.info_layout,
    children: e.jsxs("div", {
      className: H.info_container,
      children: [e.jsx(Kf, {}), t]
    })
  }),
  ev = () => {
    const t = J();
    return e.jsx("div", {
      className: H.description_container,
      children: e.jsxs("span", {
        className: H.description,
        children: ["Pixel painting Leaderboard!", e.jsx("br", {}), e.jsx(mn, {
          onPointerUp: () => {
            t.push("/stats")
          },
          children: "Painters stat"
        })]
      })
    })
  },
  tv = () => {
    const t = c(n => n.user.user);
    return !t || !t.squad || t.squad.id !== null ? null : e.jsx("button", {
      className: H.join_squad_button,
      children: e.jsxs("div", {
        className: H.join_squad_text,
        onPointerUp: () => {
          ee(`https://t.me/${vt}`)
        },
        children: ["Join the squad ", e.jsx(I, {
          children: ""
        })]
      })
    })
  },
  Mt = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAJFBMVEUQGSb////w8PHU1de6vMCoq6+NkJd3e4Juc3pXXWU8QkwlLDf3GVopAAABfklEQVR42u3ZwW7CMBCE4WHXazbO+79vL7QjUdxwYG1Vmu/YRP0tOwkOQERERERERERE5APOzIjMgR1Gd7s9mMfAWoffnnhuypMfWOMMu71kcWKB0W5TbaBcOuc8cgAjw/mngWJ3+5lvtjDCOII1/fa03GfjgQV96/ilP47Fin7ihTQeLO7f/zzuZ/X6d0x0Hq/sN0w1TkFd3w5MHcaroKJ/fZUHT6nqW4Imd4KX9a//uXOVCvq8BKcaZ6mif32PdZ708b7xIXR1clT0Pd6Z3fz4APK7P/YMgH3EjiVgH+ilF+F1H2nrb0NnHzhs/YPI2Qfg6x/FjX0Asf7DaDj7QNqej2PyNzckqNLtnS2ZdVQ5fc+mlNL2bMspdr2YcAC7Xs3Y3/dyyv789dzuC/u0uB9he/vA4Xv74BC29PlF5c4+v6q1HX0arr76i/qm+d/T75M+NyCWqORc//UbQA6AfUpjv1Cf9XE29it1946XzvB26KdTEREREREREZF/7Qv4ZQurWN4R2wAAAABJRU5ErkJggg==",
  gi = ({
    src: t
  }) => {
    let n = Mt;
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
  nv = () => {
    const t = g(),
      n = c(a => a.ratings.mySquadPlace),
      s = c(a => a.ratings.mySquad);
    return s === null || !s || s.id === null ? null : e.jsxs("div", {
      className: H.user_squad_container,
      onPointerUp: () => {
        t(sa.getInfo({
          id: s.id
        })), t(Qn({
          dataSource: Je.squadFromData
        }))
      },
      children: [e.jsxs("div", {
        className: H.squad_avatar_container,
        children: [e.jsx(gi, {
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
          children: tn(s.scoredRepaints)
        })
      })]
    })
  },
  sv = ({
    item: t,
    index: n
  }) => {
    const s = g();
    return e.jsx(aa, {
      children: e.jsxs("div", {
        className: H.rating_item,
        onPointerUp: () => {
          s(sa.getInfo({
            id: t.id
          })), s(Qn({
            dataSource: Je.squadFromData
          }))
        },
        children: [e.jsx(Sr, {
          position: n + 1,
          userPic: t.logo
        }), e.jsx(Br, {
          name: t.name,
          address: t.slug
        }), e.jsx(Tr, {
          value: t.scoredRepaints
        })]
      })
    })
  },
  av = () => {
    const t = c(s => s.ratings.list);
    return c(s => s.ratings.status) !== p.fulfilled ? null : t.map((s, a) => e.jsx(sv, {
      item: s,
      index: a
    }, a))
  },
  iv = () => {
    const t = g(),
      n = c(s => s.ratings.league);
    return A.useEffect(() => {
      t(ci.squad({
        league: n
      }))
    }, [n]), e.jsxs(ae.Fragment, {
      children: [e.jsx(tv, {}), e.jsx(nv, {}), e.jsx(av, {})]
    })
  },
  ov = () => e.jsx(ae.Fragment, {
    children: Array.from(Array(10)).map((t, n) => e.jsx(aa, {
      children: e.jsx("div", {
        className: H.loading_item
      })
    }, n))
  }),
  rv = "_container_d5ybi_1",
  cv = {
    container: rv
  },
  lv = () => {
    const t = c(a => a.ratings.league);
    let s = c(rr, lc)[t];
    return s === 0 ? s = "start" : s += " repaints", e.jsxs("span", {
      children: ["from ", s]
    })
  },
  dv = () => (c(t => t.ratings.league), c(Po), c(rr), e.jsx("div", {
    className: cv.container,
    children: e.jsx(lv, {})
  })),
  uv = "_container_d5ybi_1",
  Av = {
    container: uv
  },
  mv = () => {
    const t = c(s => s.ratings.league),
      n = c(Yh);
    return e.jsx("div", {
      className: Av.container,
      children: e.jsxs("span", {
        children: ["from ", (n[t] / 1e3).toFixed(0), "k"]
      })
    })
  },
  pv = "/assets/icon_squad-_NF17RUb.gif",
  hv = "/assets/icon_squad_secret-B-fF264Z.gif",
  gv = () => {
    const [t, n] = A.useState(0);
    return e.jsx("div", {
      className: H.squads_img_container,
      children: e.jsx("img", {
        alt: "img",
        className: H.squads_img,
        src: t >= 10 ? hv : pv,
        onPointerUp: () => {
          n(s => s + 1)
        }
      })
    })
  },
  _v = () => {
    const [t, n] = A.useState("Squads"), s = c(a => a.ratings.status);
    return e.jsxs(ue, {
      children: [e.jsx(gv, {}), e.jsx(Vf, {
        selectedSection: t,
        setSelectedSection: n
      }), e.jsx(ev, {}), e.jsx(Hf, {
        isPlayers: t === "Painters"
      }), e.jsxs($f, {
        children: [t === "Painters" && e.jsx(dv, {}), t === "Squads" && e.jsx(mv, {}), t === "Squads" && e.jsx(iv, {}), t === "Painters" && e.jsx(Zf, {}), s !== p.fulfilled && e.jsx(ov, {})]
      })]
    })
  },
  xv = "_layout_14eqc_1",
  fv = "_container_14eqc_9",
  vv = "_button_14eqc_13",
  Na = {
    layout: xv,
    container: fv,
    button: vv
  },
  yv = () => {
    const t = g();
    return c(s => s.canvas.selectedPrice) !== "my_pixels" ? null : e.jsx("div", {
      className: Na.layout,
      children: e.jsx("div", {
        className: Na.container,
        children: e.jsx("button", {
          className: Na.button,
          onPointerUp: () => {
            t(Ep(null)), j.mask.destroy()
          },
          children: "Hide My Pixels"
        })
      })
    })
  },
  wv = () => {
    const t = A.useRef(null),
      n = A.useRef(null);
    A.useEffect(() => () => {
      clearInterval(t.current)
    }, []);
    const s = () => {
      performance.now() - n.current < 200 && j.viewport.zoomIn(), clearInterval(t.current)
    };
    return e.jsx("button", {
      className: P.button,
      onPointerDown: () => {
        n.current = performance.now(), t.current = setInterval(() => {
          j.viewport.zoomIn()
        }, 90)
      },
      onPointerUp: () => {
        performance.now() - n.current < 200 && j.viewport.zoomIn(), clearInterval(t.current)
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
  jv = () => {
    const t = A.useRef(null),
      n = A.useRef(null),
      s = () => {
        performance.now() - n.current < 200 && j.viewport.zoomOut(), clearInterval(t.current)
      };
    return A.useEffect(() => () => {
      clearInterval(t.current)
    }, []), A.useEffect(() => (window.addEventListener("blur", s), () => {
      window.removeEventListener("blur", s)
    }), []), e.jsx("button", {
      className: P.button,
      onPointerDown: () => {
        n.current = performance.now(), t.current = setInterval(() => {
          j.viewport.zoomOut()
        }, 90)
      },
      onPointerUp: () => {
        performance.now() - n.current < 200 && j.viewport.zoomOut(), clearInterval(t.current)
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
  bv = () => e.jsxs("div", {
    className: P.buttons_container,
    children: [e.jsx(wv, {}), e.jsx(jv, {})]
  }),
  Nv = () => {
    const t = g(),
      n = [P.button],
      s = c(r => r.shop.limitedGood),
      a = c(r => r.shop.limitedEnd),
      [i, o] = A.useState(null);
    return A.useEffect(() => {
      let r = null;
      if (a) {
        const l = () => {
          const d = Date.now(),
            u = Math.max(0, Math.ceil((a - d) / 1e3));
          o(u)
        };
        l(), r = setInterval(l, 1e3)
      }
      return () => {
        r && clearInterval(r)
      }
    }, [a]), s ? e.jsxs("button", {
      className: `${n.join(" ")} ${P.shop_button}`,
      onPointerUp: () => {
        t(al())
      },
      children: [e.jsx("img", {
        alt: "img",
        className: P.button_image,
        src: s.image_url
      }), e.jsx("div", {
        className: P.limited_good_timer,
        children: xd(i)
      })]
    }) : null
  },
  Iv = () => c(qe) ? e.jsx("div", {
    className: P.buttons_container,
    children: e.jsx(Nv, {})
  }) : null,
  Cv = "_button_t2u3a_1",
  Pv = "_image_t2u3a_14",
  Sv = "_airdrop_button_t2u3a_19",
  Bv = "_button_text_t2u3a_33",
  Cn = {
    button: Cv,
    image: Pv,
    airdrop_button: Sv,
    button_text: Bv
  },
  Tv = () => {
    const t = g(),
      n = c(Zs),
      s = c(Ws),
      a = c(o => o.main.pixanosRatingStatus);
    let i = 14 + n.top + s.top + oo + 14;
    return e.jsx("button", {
      className: Cn.button,
      style: {
        top: i
      },
      onPointerUp: () => {
        a !== p.pending && t(qh.getPixanosRating()), t(fs(!0))
      },
      children: e.jsx("img", {
        alt: "img",
        src: an,
        className: Cn.image
      })
    })
  },
  Ev = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAAAXNSR0IArs4c6QAAAglJREFUaIHtWj1OwzAU/oy6UKkXYGCJRKV07AUoByjs3ITOIHEMBnboAQgXYCRShy4gcYFKsCCFoXlt/BzHNiEisv0ttHb8Xvo+vx/8DET0G6IDmcV/vsPBXwrrAwZdCS5eZ43zYpJ1ojcohmp9YZqOBAC85BtpPk2GAgDy9afTC6TJEOU6SZ5OTwW1vucdQ00RpgBUX+B7n+Z1PmFab5LTsD4MhpyjHLck/aXx5c0KAHB+/yF953i8PAIAzK/GkhyuxxXeMaT1oWk6ArCPMjoGuoKOwUr0q10XDkOwrMmMe32sEbMStc+JwbONWiBGuRK2eUSBIzPK+C/1h8MQ1WZikklR7uk6AQCcLdbtNOsYLEF6CMSMqWb0miHJZNwCZCHKD1qUls9u32unN/kXAGB+d7Id0PgOPScWss/wqrz6ioCHDFXNY1Vdcyh5yDKfFN+n2w+MIVd9vPr2jiHrPJQ9vAHY722lljNELQUa3yGQr47SQwDA7OLYSqx3DMUf1He0j3IUrXQgXzHUbNb6go9yJgtR9DH+x8qZcYROT9DVtrS5+Ykmz0fOMPgOB+UffsoUXLXd+uTUWH07gvtMPDk1PdBVH8cWrvq9YyienPYdzlFut1DTLeAM8ijIx127D8FFudjB6zucuw8WXfBG39spVmuz2AWvQ2d3fRxuksS7Pk2It7EiItrhB7p6E/aIRp2bAAAAAElFTkSuQmCC",
  Dv = () => {
    const t = J();
    return e.jsxs("button", {
      className: Cn.airdrop_button,
      onPointerUp: () => {
        t.push("/airdrop")
      },
      children: [e.jsx("img", {
        alt: "img",
        src: Ev,
        className: Cn.image
      }), e.jsx("div", {
        className: Cn.button_text,
        children: "Airdrop"
      })]
    })
  },
  kv = () => e.jsx("div", {
    className: P.layout,
    children: e.jsxs("div", {
      className: P.container,
      children: [e.jsxs("div", {
        className: P.buttons_container,
        children: [e.jsx(Dv, {}), e.jsx(Tv, {})]
      }), e.jsx(bv, {}), e.jsx(Iv, {})]
    })
  }),
  Rv = () => null,
  Mv = "_layout_14a3l_1",
  Uv = "_container_14a3l_11",
  Ov = "_image_14a3l_26",
  Qv = "_text_14a3l_31",
  Fv = "_gold_14a3l_37",
  Gv = "_winning_14a3l_44",
  zv = "_loosing_14a3l_48",
  Se = {
    layout: Mv,
    container: Uv,
    image: Ov,
    text: Qv,
    gold: Fv,
    winning: Gv,
    loosing: zv
  },
  _i = t => {
    if (!t) return "soon";
    const s = t - new Date,
      a = Math.floor(s / 1e3),
      i = Math.floor(a / 60 / 60),
      r = Math.floor(s / (1e3 * 60)) % 60;
    return i <= 0 && r < 30 ? "soon" : `in ${i}h ${r}m`
  },
  xi = "/assets/gold_pixel-CRD2C_ap.gif",
  Lv = () => {
    const t = c(tr),
      n = c(r => r.tournament.resultsStatus),
      s = t && t.rank && t.rank <= t.rank_to_win,
      a = t && t.template && t.template.rank && t.template.rank <= t.template.lastSurvivalRank,
      i = t && t.rank || 0,
      o = t && t.template && t.template.rank || 0;
    return n !== p.fulfilled ? null : e.jsxs(ae.Fragment, {
      children: ["  ", e.jsx(I, {
        size: 14,
        className: a ? Se.winning : Se.loosing,
        children: ""
      }), " ", e.jsx("span", {
        className: a ? Se.winning : Se.loosing,
        children: o
      }), " ", e.jsx(I, {
        size: 14,
        className: s ? Se.winning : Se.loosing,
        children: ""
      }), " ", e.jsx("span", {
        className: s ? Se.winning : Se.loosing,
        children: i
      })]
    })
  },
  Hv = () => {
    const t = c(we),
      n = c(Ch),
      s = n ? _i(new Date(n.EndTime)) : null;
    return e.jsxs("span", {
      className: Se.text,
      children: [e.jsxs("span", {
        className: Se.gold,
        children: ["Round ", t, " ", s ? `ends ${s}` : ""]
      }), e.jsx(Lv, {})]
    })
  },
  qv = () => {
    const t = J(),
      n = c(we),
      s = c(Ph),
      a = _i(s ? new Date(s.StartTime) : null);
    return e.jsx("div", {
      className: Se.layout,
      onPointerUp: () => {
        t.push("/tournament")
      },
      children: e.jsxs("div", {
        className: Se.container,
        children: [e.jsx("img", {
          alt: "img",
          className: Se.image,
          src: xi
        }), !n && e.jsxs("span", {
          children: ["Starts ", a]
        }), n && e.jsx(Hv, {})]
      })
    })
  },
  Yv = () => (g(), null),
  Xv = "_layout_r9qhp_1",
  Vv = "_container_r9qhp_16",
  Jv = "_item_r9qhp_21",
  Wv = "_move_r9qhp_1",
  Zv = "_image_r9qhp_36",
  Gs = {
    layout: Xv,
    container: Vv,
    item: Jv,
    move: Wv,
    image: Zv
  },
  Kv = {
    [xt.success]: "+1",
    [xt.fail]: "-1",
    [xt.neutral]: "0"
  },
  $v = ({
    item: t
  }) => {
    const n = g();
    return A.useEffect(() => {
      const s = setTimeout(() => {
        n(Gh(t.id))
      }, 1e3);
      return () => {
        clearTimeout(s)
      }
    }, []), e.jsxs("div", {
      className: Gs.item,
      style: {
        left: t.flyCoords.x,
        top: t.flyCoords.y,
        fontSize: t.repaintRewardType === xt.success ? 18 : 14
      },
      children: [Kv[t.repaintRewardType], " ", e.jsx("img", {
        alt: "img",
        className: Gs.image,
        src: xi
      })]
    })
  },
  ey = () => {
    const t = c(n => n.main.flyingRewards);
    return e.jsx("div", {
      className: Gs.layout,
      children: e.jsx("div", {
        className: Gs.container,
        children: t.map(n => e.jsx($v, {
          item: n
        }, n.id))
      })
    })
  },
  ty = "_panel_1urz2_1",
  ny = "_content_1urz2_16",
  Ui = {
    panel: ty,
    content: ny
  },
  sy = () => c(n => n.canvas.coords) !== null ? null : e.jsx("div", {
    className: Ui.panel,
    children: e.jsx("div", {
      className: Ui.content,
      children: "A-yo! Zoom, tap, paint"
    })
  }),
  ay = "_layout_1v16g_1",
  iy = "_container_1v16g_5",
  oy = "_close_button_1v16g_14",
  ry = "_title_container_1v16g_22",
  cy = "_image_container_1v16g_28",
  ly = "_image_1v16g_28",
  dy = "_first_image_1v16g_45",
  uy = "_second_image_1v16g_50",
  Ay = "_text_container_1v16g_55",
  my = "_button_container_1v16g_60",
  py = "_button_1v16g_60",
  Re = {
    layout: ay,
    container: iy,
    close_button: oy,
    title_container: ry,
    image_container: cy,
    image: ly,
    first_image: dy,
    second_image: uy,
    text_container: Ay,
    button_container: my,
    button: py
  },
  hy = "_layout_1df7o_1",
  gy = "_container_1df7o_14",
  _y = "_move_in_1df7o_1",
  Oi = {
    layout: hy,
    container: gy,
    move_in: _y
  },
  Ye = ({
    children: t,
    show: n,
    onPointerUp: s = () => {},
    backgroundColor: a
  }) => {
    const [i, o] = A.useState(!1), [r, l] = Ds(() => ({
      from: {
        opacity: 0
      },
      config: {
        duration: 300,
        easing: ks.easeOutCubic
      }
    }));
    return A.useEffect(() => {
      n ? (o(!0), l.start({
        opacity: 1
      })) : n || l.start({
        opacity: 0,
        onResolve: () => o(!1)
      })
    }, [n]), i ? e.jsx(Rs.div, {
      className: Oi.layout,
      style: {
        ...r,
        backgroundColor: a
      },
      onPointerUp: s,
      children: e.jsx("div", {
        className: Oi.container,
        children: t
      })
    }) : null
  },
  xy = () => {
    const t = g(),
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
    }, [n]), e.jsx(Ye, {
      show: n !== null,
      onPointerUp: () => {
        t(Oa(null))
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
              t(Oa(null))
            },
            children: e.jsx(I, {
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
              src: s === null ? Mt : s.logo
            }), e.jsx("img", {
              alt: "img",
              className: `${Re.image} ${Re.second_image}`,
              src: i === null || i.userPic === "" ? tt : i.userPic
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
                s !== null && ee(`https://t.me/${vt}?startapp=${btoa(`id=${s.id}`)}`)
              },
              children: [s !== null && `Join ${s.name} squad`, s === null && "Loading squad info..."]
            })
          })]
        })
      })
    })
  },
  fy = "_layout_srn55_1",
  vy = "_container_srn55_12",
  yy = "_buttons_container_srn55_18",
  Ia = {
    layout: fy,
    container: vy,
    buttons_container: yy
  },
  wy = "_container_srbwq_1",
  jy = {
    container: wy
  },
  by = ({
    show: t,
    setShow: n
  }) => t ? nt.createPortal(e.jsx("div", {
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
  Ny = 1,
  Qi = 0,
  Fi = 100,
  Iy = ({
    rtl: t = !0
  }) => {
    const n = g(),
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
      children: [e.jsx(by, {
        show: a,
        setShow: i
      }), e.jsx(Dt.Range, {
        direction: Dt.Direction.Up,
        values: s,
        step: Ny,
        min: Qi,
        max: Fi,
        onChange: o => {
          n(Zg(o)), j.mainImage.worldTemplate.setOpacity(Number(o[0])), j.mainImage.tournamentTemplates.setOpacity(Number(o[0]))
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
              background: Dt.getTrackBackground({
                values: s,
                colors: ["var(--font-secondary-color)", "var(--font-secondary-color)"],
                min: Qi,
                max: Fi,
                direction: Dt.Direction.Up,
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
  Cy = () => {
    const t = c(s => s.tournament.activeTournamentTemplate),
      n = c(s => s.template.active) === Te.world;
    return t === null && !n ? null : e.jsx("div", {
      className: jy.container,
      children: e.jsx(Iy, {})
    })
  },
  Py = "_button_14giw_2",
  Sy = "_image_14giw_22",
  By = "_enabled_14giw_29",
  Ty = "_animation_14giw_33",
  Ey = "_scaleInfinity_14giw_1",
  Dy = "_gray_14giw_38",
  ky = "_indicator_14giw_42",
  _t = {
    button: Py,
    image: Sy,
    enabled: By,
    animation: Ty,
    scaleInfinity: Ey,
    gray: Dy,
    indicator: ky
  },
  Ry = () => {
    const t = g(),
      n = J(),
      s = c(l => l.tournament.myTemplate),
      a = c(l => l.tournament.activeTournamentTemplate),
      i = c(we);
    if (!s) return null;
    const o = [_t.button],
      r = a === s.id;
    return r && o.push(_t.enabled), e.jsx("button", {
      className: o.join(" "),
      onPointerUp: () => {
        if (!i) {
          t(In(Me.create)), n.push("/tournament");
          return
        }
        r ? t(ii()) : (j.viewport.viewport.animate({
          scale: 4,
          time: 400,
          position: {
            x: s.x + s.imageSize / 2,
            y: s.y + s.imageSize / 2
          }
        }), t(ai(s.id)))
      },
      children: e.jsx("img", {
        alt: "img",
        className: _t.image,
        src: `${s.url}`
      })
    })
  },
  My = () => {
    const t = g(),
      n = J(),
      s = c(d => d.tournament.selectedTemplate),
      a = c(d => d.tournament.activeTournamentTemplate),
      i = s && a === s.id,
      o = [_t.button],
      r = c(we);
    return c(d => d.tournament.selectedTemplateStatus) === p.pending ? null : (i && o.push(_t.enabled), s || o.push(_t.animation), e.jsxs("button", {
      className: o.join(" "),
      onPointerUp: d => {
        if (!s || !r) {
          t(In(Me.main)), n.push("/tournament");
          return
        }
        i ? t(ii()) : (j.viewport.viewport.animate({
          scale: 4,
          time: 400,
          position: {
            x: s.x + s.imageSize / 2,
            y: s.y + s.imageSize / 2
          }
        }), t(ai(s.id)))
      },
      children: [s === null && e.jsx(I, {
        className: _t.gray,
        size: 24,
        children: ""
      }), s !== null && e.jsx("img", {
        alt: "img",
        className: _t.image,
        src: `${s.url}`
      })]
    }))
  },
  Uy = "_button_xsy81_2",
  Oy = "_image_xsy81_19",
  Qy = "_enabled_xsy81_25",
  Fy = "_gray_xsy81_29",
  Ca = {
    button: Uy,
    image: Oy,
    enabled: Qy,
    gray: Fy
  },
  Gy = () => {
    const t = g(),
      n = c(r => r.template.worldTemplate),
      s = c(r => r.template.active) === Te.world,
      a = c(we),
      i = c(r => r.tournament.periodsStatus),
      o = [Ca.button];
    return s && o.push(Ca.enabled), n === null || a || i !== p.fulfilled ? null : e.jsx("button", {
      className: o.join(" "),
      onPointerUp: () => {
        t(s ? di() : Wg(Te.world))
      },
      children: e.jsx("img", {
        alt: "img",
        className: Ca.image,
        src: n.url
      })
    })
  },
  zy = () => e.jsx(ae.Fragment, {
    children: e.jsx("div", {
      className: Ia.layout,
      children: e.jsx("div", {
        className: Ia.container,
        children: e.jsxs("div", {
          className: Ia.buttons_container,
          children: [e.jsx(Gy, {}), e.jsx(Ry, {}), e.jsx(My, {}), e.jsx(Cy, {})]
        })
      })
    })
  }),
  Ly = "_layout_swx97_1",
  Hy = {
    layout: Ly
  },
  qy = "_layout_1a5xo_1",
  Yy = "_container_1a5xo_5",
  Gi = {
    layout: qy,
    container: Yy
  },
  Xy = () => {
    const t = g(),
      n = c(i => i.main.fastMode);
    if (!c(i => i.canvas.coords)) return null;
    const a = [P.button, P.fast_type_button, P.shop_button];
    return n && a.push(P.fast_mode_button_enabled), e.jsx("button", {
      className: a.join(" "),
      onPointerUp: () => {
        t(n ? ea() : sr())
      },
      children: e.jsx("img", {
        alt: "img",
        className: P.button_image,
        src: go
      })
    })
  },
  Vy = () => {
    const t = g(),
      n = c(l => l.canvas.coords),
      s = c(l => l.main.fastMode),
      a = c(l => l.main.currentFastType),
      i = c(l => l.shop.available);
    if (!n || !(i[4] > 0)) return null;
    const r = [P.button, P.shop_button, P.fast_type_button];
    return e.jsxs("button", {
      className: r.join(" "),
      onPointerUp: () => {
        if (s || a) return;
        const l = j.mainImage.getPixelColor({
          coords: n
        });
        t(si(l))
      },
      children: [e.jsx("div", {
        className: P.disabled_button_cover,
        style: {
          opacity: s || a ? .7 : 0
        }
      }), e.jsx("img", {
        alt: "img",
        className: P.button_image,
        src: ho
      })]
    })
  },
  Jy = () => {
    const t = g(),
      n = [P.button, P.shop_button, P.fast_type_button],
      s = [P.button_image];
    return e.jsx("button", {
      className: n.join(" "),
      style: {
        borderRadius: "0 var(--border-radius) var(--border-radius) 0"
      },
      onPointerUp: () => {
        t(st(13)), t(at())
      },
      children: e.jsx("img", {
        alt: "img",
        className: s.join(" "),
        src: an
      })
    })
  },
  Wy = () => c(n => n.canvas.coords) === null ? null : e.jsx("div", {
    className: Gi.layout,
    children: e.jsxs("div", {
      className: Gi.container + " " + P.container__bottom,
      children: [e.jsx(b_, {}), e.jsx(y_, {}), e.jsx(V_, {}), e.jsx(Mg, {}), e.jsx(Xy, {}), e.jsx(Vy, {}), e.jsx(Jy, {})]
    })
  }),
  Zy = ({
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
  Ky = ({
    open: t,
    setOpen: n,
    active: s,
    setActive: a
  }) => {
    const i = g(),
      o = [le.info_button];
    return t && s === 2 && o.push(le.info_button_active), e.jsx("div", {
      className: o.join(" "),
      onPointerUp: r => {
        r.stopPropagation(), i(Qn({
          dataSource: Je.userFromPixelInfo
        }))
      },
      children: "info"
    })
  },
  $y = () => {
    const [t, n] = A.useState(!0), [s, a] = A.useState(!1), i = c(r => r.canvas.coords), o = A.useRef(null);
    return A.useEffect(() => () => {
      o.current !== null && (clearTimeout(o.current), o.current = null)
    }, []), e.jsxs("div", {
      className: le.pixel_info_container,
      children: [t && e.jsxs("div", {
        className: le.pixel_info_text,
        onPointerUp: async r => {
          var d, u;
          r.stopPropagation(), await Mn(`${Nt}?startapp=x${i.x}_y${i.y}`) ? (u = (d = window.Telegram.WebApp) == null ? void 0 : d.HapticFeedback) == null || u.notificationOccurred("success") : a(!0), n(!1), o.current = setTimeout(() => {
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
  ew = "_expandable_panel_layout_1v9vd_1",
  tw = "_expandable_panel_1v9vd_1",
  nw = "_divider_1v9vd_16",
  sw = "_divider_spacer_1v9vd_24",
  aw = "_divider_pointer_1v9vd_28",
  Pn = {
    expandable_panel_layout: ew,
    expandable_panel: tw,
    divider: nw,
    divider_spacer: sw,
    divider_pointer: aw
  },
  iw = ({
    active: t
  }) => {
    const n = t === 1 ? "38px" : "54px",
      s = t === 1 ? 0 : 1;
    return e.jsxs("div", {
      className: Pn.divider,
      children: [e.jsx("div", {
        className: Pn.divider_spacer,
        style: {
          flexGrow: s
        }
      }), e.jsx("div", {
        className: Pn.divider_pointer,
        style: {
          width: n
        }
      })]
    })
  },
  ow = t => {
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
  rw = "_container_1vu8i_1",
  cw = "_owner_1vu8i_10",
  lw = "_id_1vu8i_14",
  dw = "_date_1vu8i_19",
  uw = "_avatar_container_1vu8i_24",
  Aw = "_avatar_1vu8i_24",
  mw = "_squad_avatar_container_1vu8i_36",
  pw = "_text_container_1vu8i_48",
  hw = "_dot_1vu8i_54",
  gw = "_user_name_1vu8i_59",
  _w = "_squad_name_1vu8i_64",
  Ae = {
    container: rw,
    owner: cw,
    id: lw,
    date: dw,
    avatar_container: uw,
    avatar: Aw,
    squad_avatar_container: mw,
    text_container: pw,
    dot: hw,
    user_name: gw,
    squad_name: _w
  },
  xw = "_skeleton_k7kmi_1",
  fw = "_loading_k7kmi_1",
  vw = {
    skeleton: xw,
    loading: fw
  },
  We = ({
    children: t,
    show: n
  }) => n ? e.jsx("div", {
    className: vw.skeleton,
    children: e.jsx("div", {
      style: {
        opacity: 0
      },
      children: t
    })
  }) : null,
  yw = () => {
    const t = c(o => o.canvas.pixelInfo),
      n = c(o => o.canvas.getPixelInfoFetchStatus),
      s = t !== null && n === p.fulfilled,
      a = () => He(new Date(t.pixel.dateObtained));
    if (!s) return e.jsx(We, {
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
  pn = ({
    address: t,
    limit: n = 0,
    display: s = null
  }) => {
    const a = c(lr);
    if (!t || t === "") return e.jsx("span", {
      children: "Anon"
    });
    let i = pd(s === null ? t : s);
    return n > 0 && (i = Rn(i, n)), e.jsx("span", {
      className: bo.link,
      onPointerUp: o => {
        o.stopPropagation(), a ? ee(`https://t.me/${ji(t)}`) : Ct(`https://t.me/${ji(t)}`)
      },
      children: i
    })
  },
  ww = () => {
    const t = c(r => r.canvas.pixelInfo),
      n = c(r => r.canvas.getPixelInfoFetchStatus),
      s = t !== null && n === p.fulfilled;
    if (!s) return e.jsx(We, {
      show: !s,
      children: e.jsx("div", {
        className: Ae.text_container,
        children: e.jsx("span", {
          className: Ae.user_name,
          children: "No name • @notpixel"
        })
      })
    });
    const i = Rn(t.owner.firstName || "No name");
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
  jw = () => {
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
      }), e.jsx(pn, {
        address: `${vt}?startapp=${btoa(`id=${t.owner.squad.id}`)}`,
        display: t.owner.squad.slug,
        limit: 18
      })]
    }) : e.jsx("div", {
      className: Ae.text_container,
      children: e.jsx("span", {
        className: Ae.squad_name,
        children: "No squad"
      })
    }) : e.jsx(We, {
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
  bw = () => {
    var i, o;
    const t = c(r => r.canvas.pixelInfo),
      n = c(r => r.canvas.getPixelInfoFetchStatus),
      s = t !== null && n === p.fulfilled;
    let a = tt;
    return s && t.owner.userPic && t.owner.userPic !== "" && (a = t.owner.userPic), e.jsxs("div", {
      className: Ae.avatar_container,
      children: [e.jsx("img", {
        alt: "avatar",
        className: Ae.avatar,
        src: a
      }), e.jsx("div", {
        className: Ae.squad_avatar_container,
        children: e.jsx(gi, {
          src: ((o = (i = t == null ? void 0 : t.owner) == null ? void 0 : i.squad) == null ? void 0 : o.logo) || ""
        })
      })]
    })
  },
  Nw = () => {
    const t = g(),
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
            await Mn(`${n.owner.id}`), await t(z({
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
      }), e.jsx(We, {
        show: !a,
        children: e.jsx("span", {
          className: Ae.owner,
          children: "Owner"
        })
      })]
    })
  },
  Iw = () => e.jsxs("div", {
    className: Ae.container,
    children: [e.jsx(Nw, {}), e.jsx(yw, {}), e.jsx(bw, {}), e.jsx(ww, {}), e.jsx(jw, {})]
  }),
  Cw = "_category_text_epppt_1",
  Pw = "_latest_used_container_epppt_8",
  Sw = "_color_line_epppt_15",
  Bw = "_color_item_epppt_22",
  Tw = "_pipette_container_epppt_30",
  Ew = "_child_scale_epppt_48",
  Er = {
    category_text: Cw,
    latest_used_container: Pw,
    color_line: Sw,
    color_item: Bw,
    pipette_container: Tw,
    child_scale: Ew
  },
  Dw = ({
    color: t
  }) => {
    const [n, s] = A.useState(!1), a = A.useRef(null), i = g();
    return e.jsx("div", {
      style: {
        backgroundColor: t,
        transform: n ? "scale(1.2)" : ""
      },
      className: Er.color_item,
      onPointerUp: () => {
        var o, r;
        s(!0), a.current !== null && clearTimeout(a.current), a.current = setTimeout(() => {
          s(!1)
        }, 200), i(si(t)), (r = (o = window.Telegram.WebApp) == null ? void 0 : o.HapticFeedback) == null || r.notificationOccurred("success")
      }
    })
  },
  kw = ({
    colors: t
  }) => e.jsx("div", {
    className: Er.color_line,
    children: t.map((n, s) => e.jsx(Dw, {
      color: n
    }, `${n}_${s}`))
  }),
  Rw = "_unlock_button_fc8qr_1",
  Mw = "_stars_text_fc8qr_13",
  zi = {
    unlock_button: Rw,
    stars_text: Mw
  },
  Uw = () => e.jsxs("div", {
    className: zi.unlock_button,
    children: [e.jsx("span", {
      children: "Unlock all colors for"
    }), e.jsxs("span", {
      className: zi.stars_text,
      children: [e.jsx(on, {}), e.jsx("span", {
        children: "5000"
      })]
    })]
  }),
  Ow = () => {
    c(n => n.color.latest);
    const t = c(n => n.color.basic);
    return e.jsxs(ae.Fragment, {
      children: [e.jsx(kw, {
        colors: t
      }), e.jsx(Uw, {})]
    })
  },
  Qw = ({
    getData: t
  }) => {
    const n = g(),
      s = c(i => i.canvas.coords),
      a = c(i => i.main.showUserAndSquadPopup);
    return A.useEffect(() => {
      if (s !== null && (t || a)) {
        const i = ut(s);
        n($s.getPixelInfo({
          id: i
        }))
      }
    }, [s, t, a, n]), null
  },
  Fw = ({
    open: t,
    setOpen: n,
    active: s
  }) => {
    const a = ow(() => {
        s !== 2 && n(!1)
      }),
      [i, o] = Ds(() => ({
        from: {
          height: 0,
          opacity: 0
        },
        config: {
          duration: 400,
          easing: ks.easeOutCubic
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
    }, [t, s, r, o]), e.jsxs(Rs.div, {
      ref: a,
      className: Pn.expandable_panel_layout,
      style: {
        ...i
      },
      children: [e.jsx(Qw, {
        getData: s === 2 && t
      }), e.jsxs("div", {
        ref: r,
        className: Pn.expandable_panel,
        children: [e.jsx(iw, {
          active: s
        }), s === 1 && e.jsx(Ow, {}), s === 2 && e.jsx(Iw, {})]
      })]
    })
  },
  Gw = () => c(qe) ? null : e.jsxs("button", {
    className: le.button,
    onPointerUp: () => {
      ee("https://t.me/notpixel")
    },
    children: [e.jsx("img", {
      alt: "tg_logo",
      className: le.tg_logo,
      src: Un
    }), e.jsx("span", {
      className: le.button_text,
      children: "Go to app for paint"
    })]
  }),
  zw = () => e.jsx(g_, {}),
  Lw = () => c(qe) ? e.jsx(zw, {}) : e.jsx(Gw, {}),
  Hw = () => {
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
  qw = () => {
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
        children: [e.jsx(Hw, {}), e.jsxs("div", {
          className: le.info,
          children: [e.jsx(Zy, {
            open: t,
            setOpen: n,
            active: s,
            setActive: a
          }), e.jsx($y, {}), e.jsx(Ky, {
            open: t,
            setOpen: n,
            active: s,
            setActive: a
          })]
        }), e.jsx(Fw, {
          open: t,
          setOpen: n,
          active: s
        }), e.jsx(Lw, {})]
      })
    })
  },
  Yw = () => c(n => n.canvas.coords) === null ? null : e.jsx(ae.Fragment, {
    children: e.jsx(qw, {})
  }),
  Xw = () => e.jsxs("div", {
    className: Hy.layout,
    children: [e.jsx(Wy, {}), e.jsx(Yw, {})]
  }),
  Vw = () => e.jsxs(e.Fragment, {
    children: [e.jsx(qv, {}), e.jsx(yv, {}), e.jsx(zy, {}), e.jsx(kv, {}), e.jsx(Xw, {}), e.jsx(sy, {}), e.jsx(ey, {}), e.jsx(xy, {}), e.jsx(Yv, {}), e.jsx(Rv, {})]
  }),
  Jw = "_page_title_13ybj_1",
  Ww = "_container_13ybj_9",
  Zw = "_item_13ybj_13",
  Kw = "_active_13ybj_18",
  $w = "_info_container_13ybj_34",
  ej = "_dot_13ybj_40",
  tj = "_title_text_13ybj_46",
  nj = "_capitalize_13ybj_50",
  sj = "_hint_text_13ybj_54",
  aj = "_date_text_13ybj_61",
  ij = "_value_container_13ybj_66",
  oj = "_value_text_13ybj_74",
  rj = "_positive_color_13ybj_78",
  cj = "_negative_color_13ybj_85",
  lj = "_last_text_13ybj_92",
  f = {
    page_title: Jw,
    container: Ww,
    item: Zw,
    active: Kw,
    info_container: $w,
    dot: ej,
    title_text: tj,
    capitalize: nj,
    hint_text: sj,
    date_text: aj,
    value_container: ij,
    value_text: oj,
    positive_color: rj,
    negative_color: cj,
    last_text: lj
  },
  dj = ({
    item: t
  }) => {
    const n = J(),
      s = Fs(t.details.pixel),
      a = g();
    return e.jsxs("div", {
      className: `${f.item} ${f.active}`,
      onPointerUp: () => {
        n.push("/"), j.viewport.viewport.animate({
          scale: 25,
          time: 400,
          position: s
        }), j.mainImage.selectedPixel.draw(s), a(Ot(s)), n.push("/")
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
            children: He(new Date(t.dateTime))
          })
        })]
      }), e.jsx("div", {
        className: f.value_container,
        children: e.jsxs("span", {
          className: `${f.value_text} ${f.positive_color}`,
          children: ["+", new Intl.NumberFormat("fr", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          }).format(Math.abs(t.balanceChange)).replace(",", ".")]
        })
      })]
    })
  },
  uj = ({
    item: t
  }) => {
    const n = J(),
      s = {
        x: t.details.x,
        y: t.details.y
      },
      a = g();
    return e.jsxs("div", {
      className: `${f.item} ${f.active}`,
      onPointerUp: () => {
        n.push("/"), j.viewport.viewport.animate({
          scale: 25,
          time: 400,
          position: s
        }), j.mainImage.selectedPixel.draw(s), a(Ot(s)), n.push("/")
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
          }), e.jsx(pn, {
            address: t.details.buyer
          })]
        }), e.jsx("div", {
          className: f.date_text,
          children: e.jsx("span", {
            children: He(new Date(t.dateTime))
          })
        })]
      }), e.jsx("div", {
        className: f.value_container,
        children: e.jsxs("span", {
          className: `${f.value_text} ${f.positive_color}`,
          children: ["+", new Intl.NumberFormat("fr", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          }).format(t.balanceChange).replace(",", ".")]
        })
      })]
    })
  },
  Aj = ({
    item: t
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
          children: He(new Date(t.dateTime))
        })
      })]
    }), e.jsx("div", {
      className: f.value_container,
      children: e.jsxs("span", {
        className: `${f.value_text} ${f.positive_color}`,
        children: ["+", t.balanceChange.toFixed(2)]
      })
    })]
  }),
  mj = ({
    item: t
  }) => e.jsxs("div", {
    className: f.item,
    children: [e.jsxs("div", {
      className: f.info_container,
      children: [e.jsxs("div", {
        children: [e.jsx("span", {
          className: f.title_text,
          children: t.details.type
        }), e.jsx("span", {
          className: f.hint_text,
          children: "Boost"
        })]
      }), e.jsx("div", {
        className: f.date_text,
        children: e.jsx("span", {
          children: He(new Date(t.dateTime))
        })
      })]
    }), e.jsx("div", {
      className: f.value_container,
      children: e.jsx("span", {
        className: `${f.value_text} ${f.negative_color}`,
        children: t.balanceChange
      })
    })]
  }),
  pj = ({
    item: t
  }) => e.jsxs("div", {
    className: f.item,
    children: [e.jsxs("div", {
      className: f.info_container,
      children: [e.jsxs("div", {
        children: [e.jsx("span", {
          className: `${f.title_text} ${f.capitalize}`,
          children: `${t.details.from} > ${t.details.to}`
        }), e.jsx("span", {
          className: f.hint_text,
          children: "League"
        })]
      }), e.jsx("div", {
        className: f.date_text,
        children: e.jsx("span", {
          children: He(new Date(t.dateTime))
        })
      })]
    }), e.jsx("div", {
      className: f.value_container
    })]
  }),
  hj = ({
    item: t
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
        }), e.jsx(pn, {
          address: t.details.name
        })]
      }), e.jsx("div", {
        className: f.date_text,
        children: e.jsx("span", {
          children: He(new Date(t.dateTime))
        })
      })]
    }), e.jsx("div", {
      className: f.value_container,
      children: e.jsxs("span", {
        className: `${f.value_text} ${f.positive_color}`,
        children: ["+", t.balanceChange]
      })
    })]
  }),
  gj = ({
    item: t
  }) => e.jsxs("div", {
    className: f.item,
    children: [e.jsxs("div", {
      className: f.info_container,
      children: [e.jsxs("div", {
        children: [e.jsx("span", {
          className: f.title_text,
          children: `${t.details.type} ${t.details.round_id?"for round №"+t.details.round_id:""}`
        }), e.jsx("span", {
          className: f.hint_text,
          children: "Special"
        })]
      }), e.jsx("div", {
        className: f.date_text,
        children: e.jsx("span", {
          children: He(new Date(t.dateTime))
        })
      })]
    }), e.jsx("div", {
      className: f.value_container,
      children: e.jsxs("span", {
        className: `${f.value_text} ${t.balanceChange>=0?f.positive_color:f.negative_color}`,
        children: [t.balanceChange >= 0 ? "+" : "", t.balanceChange]
      })
    })]
  }),
  _j = ({
    item: t
  }) => e.jsxs("div", {
    className: f.item,
    children: [e.jsxs("div", {
      className: f.info_container,
      children: [e.jsxs("div", {
        children: [e.jsx("span", {
          className: `${f.title_text} ${f.capitalize}`,
          children: `${t.details.type}`
        }), e.jsxs("span", {
          className: f.hint_text,
          children: [t.details.quantity, " pc."]
        })]
      }), e.jsx("div", {
        className: f.date_text,
        children: e.jsx("span", {
          children: He(new Date(t.dateTime))
        })
      })]
    }), e.jsxs("div", {
      className: f.value_container,
      children: ["-", t.details.price, " ", e.jsx(on, {
        fontSize: 14
      })]
    })]
  }),
  xj = ({
    item: t
  }) => e.jsxs("div", {
    className: f.item,
    children: [e.jsxs("div", {
      className: f.info_container,
      children: [e.jsxs("div", {
        children: [e.jsx("span", {
          className: f.title_text,
          children: t.details.type
        }), e.jsx("span", {
          className: f.hint_text,
          children: "Task"
        })]
      }), e.jsx("div", {
        className: f.date_text,
        children: e.jsx("span", {
          children: He(new Date(t.dateTime))
        })
      })]
    }), e.jsx("div", {
      className: f.value_container,
      children: e.jsxs("span", {
        className: `${f.value_text} ${f.positive_color}`,
        children: ["+", t.balanceChange]
      })
    })]
  }),
  fj = ({
    item: t
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
          children: t.details.type
        })]
      }), e.jsx("div", {
        className: f.date_text,
        children: e.jsx("span", {
          children: He(new Date(t.dateTime))
        })
      })]
    }), e.jsx("div", {
      className: f.value_container,
      children: e.jsxs("span", {
        className: `${f.value_text} ${f.positive_color}`,
        children: ["+", t.balanceChange.toFixed(2)]
      })
    })]
  }),
  vj = ({
    item: t
  }) => t.action === "buy pixel" ? e.jsx(dj, {
    item: t
  }) : t.action === "sell pixel" ? e.jsx(uj, {
    item: t
  }) : t.action === "claim" ? e.jsx(Aj, {
    item: t
  }) : t.action === "get boost" ? e.jsx(mj, {
    item: t
  }) : t.action === "league transfer" ? e.jsx(pj, {
    item: t
  }) : t.action === "referral" ? e.jsx(hj, {
    item: t
  }) : t.action === "special" ? e.jsx(gj, {
    item: t
  }) : t.action === "purchase" ? e.jsx(_j, {
    item: t
  }) : t.action === "complete task" ? e.jsx(xj, {
    item: t
  }) : t.action === "referrer reward" ? e.jsx(fj, {
    item: t
  }) : (console.log("unknown action: ", t.action), null),
  yj = () => {
    const t = g(),
      n = c(a => a.history.list),
      s = c(a => a.history.status);
    return A.useEffect(() => {
      t(li.get({
        offset: 0,
        limit: 50
      }))
    }, []), e.jsxs("div", {
      className: f.container,
      children: [n.map((a, i) => e.jsx(vj, {
        item: a
      }, i)), s === p.fulfilled && n.length >= 50 && e.jsx("div", {
        className: f.last_text,
        children: e.jsx("span", {
          children: "Last 50 events"
        })
      })]
    })
  },
  wj = () => e.jsxs(ue, {
    children: [e.jsx("h1", {
      className: f.page_title,
      children: "History"
    }), e.jsx(yj, {})]
  }),
  jj = "_text_layout_1xggq_1",
  bj = "_text_1xggq_1",
  Nj = "_button_layout_1xggq_14",
  Ij = "_button_layout_placeholder_1xggq_26",
  Cj = "_button_1xggq_14",
  fn = {
    text_layout: jj,
    text: bj,
    button_layout: Nj,
    button_layout_placeholder: Ij,
    button: Cj
  },
  Pj = () => e.jsxs(ue, {
    children: [e.jsx("div", {
      className: fn.text_layout,
      children: e.jsxs("span", {
        className: fn.text,
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
      className: fn.button_layout_placeholder
    }), e.jsx("div", {
      className: fn.button_layout,
      children: e.jsxs("button", {
        className: fn.button,
        onPointerUp: () => {
          ee("https://t.me/notpixel_channel")
        },
        children: [e.jsx("img", {
          alt: "tg_logo",
          src: Un
        }), "Telegram Channel"]
      })
    })]
  }),
  Sj = "_text_layout_1h04i_1",
  Bj = "_text_1h04i_1",
  Tj = "_button_layout_1h04i_14",
  Ej = "_button_layout_placeholder_1h04i_26",
  Dj = "_button_1h04i_14",
  vn = {
    text_layout: Sj,
    text: Bj,
    button_layout: Tj,
    button_layout_placeholder: Ej,
    button: Dj
  },
  kj = () => e.jsxs(ue, {
    children: [e.jsx("div", {
      className: vn.text_layout,
      children: e.jsxs("span", {
        className: vn.text,
        children: [e.jsx("h1", {
          children: "Awards"
        }), e.jsx("p", {
          children: "There will be something here, but not now."
        })]
      })
    }), e.jsx("div", {
      className: vn.button_layout_placeholder
    }), e.jsx("div", {
      className: vn.button_layout,
      children: e.jsxs("button", {
        className: vn.button,
        onPointerUp: () => {
          ee(ro)
        },
        children: [e.jsx("img", {
          alt: "tg_logo",
          src: Un
        }), "Not Pixel 42"]
      })
    })]
  }),
  Rj = "_layout_1drph_1",
  Mj = "_container_1drph_11",
  Uj = "_bold_1drph_22",
  Oj = "_info_container_1drph_26",
  Qj = "_title_1drph_33",
  Fj = "_description_1drph_38",
  Gj = "_image_container_1drph_43",
  zj = "_image_1drph_43",
  Lj = "_extra_info_container_1drph_53",
  Hj = "_npx_tokens_1drph_77",
  qj = "_button_container_1drph_81",
  Yj = "_button_1drph_81",
  Ne = {
    layout: Rj,
    container: Mj,
    bold: Uj,
    info_container: Oj,
    title: Qj,
    description: Fj,
    image_container: Gj,
    image: zj,
    extra_info_container: Lj,
    npx_tokens: Hj,
    button_container: qj,
    button: Yj
  },
  Xj = "/assets/intro-Brtd1phH.webp",
  Vj = {
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
  Jj = () => {
    const t = J();
    return nt.createPortal(e.jsx("div", {
      className: Ne.layout,
      children: e.jsxs(Sn.div, {
        className: Ne.container,
        ...Vj,
        children: [e.jsxs("div", {
          className: Ne.info_container,
          children: [e.jsx("span", {
            className: `${Ne.title} ${Ne.bold}`,
            children: "New Pixel Order!"
          }), e.jsx("span", {
            className: Ne.description,
            children: "Not Pixel is a blank canvas 1000×1000px where Telegram users transform pixels."
          })]
        }), e.jsx("div", {
          className: Ne.image_container,
          children: e.jsx("img", {
            alt: "image",
            className: Ne.image,
            src: Xj
          })
        }), e.jsxs("div", {
          className: Ne.extra_info_container,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: `${Ne.bold}`,
              children: "Probably all you need to know:"
            })
          }), e.jsx("div", {
            children: e.jsxs("ol", {
              children: [e.jsx("li", {
                children: "You can put some pixels on it, but you have to wait to continue."
              }), e.jsxs("li", {
                children: ["Get rewarded in", " ", e.jsx(U, {
                  size: 14,
                  style: {
                    transform: "translateY(1.5px)"
                  }
                }), e.jsx("span", {
                  className: `${Ne.npx_tokens} ${Ne.bold}`,
                  children: " Not PX "
                }), " ", "tokens for repainting and owning pixels."]
              }), e.jsx("li", {
                children: "Be creative. Enjoy."
              })]
            })
          })]
        }), e.jsx("div", {
          className: Ne.button_container,
          children: e.jsx("button", {
            className: Ne.button,
            onPointerUp: () => {
              t.push("/"), ln.save("skipIntro", "true")
            },
            children: "Let’s Gooooooo!"
          })
        })]
      })
    }), document.body)
  },
  Wj = "_text_layout_q4wab_1",
  Zj = "_text_q4wab_1",
  Kj = "_button_layout_q4wab_15",
  $j = "_button_layout_placeholder_q4wab_27",
  eb = "_button_q4wab_15",
  yn = {
    text_layout: Wj,
    text: Zj,
    button_layout: Kj,
    button_layout_placeholder: $j,
    button: eb
  },
  tb = () => e.jsxs(ue, {
    children: [e.jsx("div", {
      className: yn.text_layout,
      children: e.jsxs("span", {
        className: yn.text,
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
      className: yn.button_layout_placeholder
    }), e.jsx("div", {
      className: yn.button_layout,
      children: e.jsxs("button", {
        className: yn.button,
        onPointerUp: () => {
          Ct("https://ton.org/en/open-league")
        },
        children: ["Details on ton.org ", e.jsx(I, {
          size: 16,
          children: ""
        })]
      })
    })]
  }),
  nb = "_text_layout_q4wab_1",
  sb = "_text_q4wab_1",
  ab = "_button_layout_q4wab_15",
  ib = "_button_layout_placeholder_q4wab_27",
  ob = "_button_q4wab_15",
  Li = {
    text_layout: nb,
    text: sb,
    button_layout: ab,
    button_layout_placeholder: ib,
    button: ob
  },
  rb = () => e.jsx(ue, {
    children: e.jsx("div", {
      className: Li.text_layout,
      children: e.jsxs("span", {
        className: Li.text,
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
  cb = "_close_container_1mu9y_1",
  lb = "_title_container_1mu9y_12",
  db = "_title_1mu9y_12",
  ub = "_frens_count_1mu9y_21",
  Ab = "_content_1mu9y_25",
  mb = "_image_container_1mu9y_32",
  pb = "_image_1mu9y_32",
  hb = "_description_container_1mu9y_41",
  gb = "_white_1mu9y_50",
  _b = "_gray_1mu9y_54",
  xb = "_purple_1mu9y_58",
  fb = "_bold_1mu9y_64",
  vb = "_center_1mu9y_68",
  yb = "_info_layout_1mu9y_72",
  wb = "_benefits_container_1mu9y_84",
  jb = "_benefits_item_1mu9y_92",
  bb = "_divider_1mu9y_98",
  Nb = "_buttons_container_1mu9y_105",
  Ib = "_button_copy_1mu9y_112",
  Cb = "_button_1mu9y_105",
  Pb = "_share_container_1mu9y_137",
  Sb = "_share_row_1mu9y_143",
  Bb = "_crypto_image_1mu9y_150",
  E = {
    close_container: cb,
    title_container: lb,
    title: db,
    frens_count: ub,
    content: Ab,
    image_container: mb,
    image: pb,
    description_container: hb,
    white: gb,
    gray: _b,
    purple: xb,
    bold: fb,
    center: vb,
    info_layout: yb,
    benefits_container: wb,
    benefits_item: jb,
    divider: bb,
    buttons_container: Nb,
    button_copy: Ib,
    button: Cb,
    share_container: Pb,
    share_row: Sb,
    crypto_image: Bb
  },
  Tb = "/assets/sitting_chars_animation_outl-BdmQzfhn.gif",
  Eb = "_link_a4r15_1",
  Db = {
    link: Eb
  },
  Gt = ({
    url: t,
    className: n = "",
    text: s = "Copy referral link"
  }) => {
    const [a, i] = A.useState(null), o = A.useRef(null);
    return e.jsxs("div", {
      className: `${Db.link} ${n}`,
      onPointerUp: async r => {
        var d, u;
        const l = await Mn(t);
        r.stopPropagation(), l ? (i("Copied!"), (u = (d = window.Telegram.WebApp) == null ? void 0 : d.HapticFeedback) == null || u.notificationOccurred("success")) : i("Can't copy :-("), clearTimeout(o.current), o.current = setTimeout(() => {
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
  kb = () => {
    const {
      t
    } = ze("translation", {
      keyPrefix: "frens"
    }), n = c(d => d.user.user), s = c(d => d.main.settings);
    let a = `${Nt}?startapp=f${(n==null?void 0:n.id)||""}`;
    n && n.squad && n.squad.id !== null && (a += `_s${n.squad.id}`);
    const i = (n == null ? void 0 : n.friends) || 0,
      o = c(Wa),
      [r, l] = A.useState([]);
    return A.useEffect(() => {
      const d = async () => {
        const u = await X.getRevShareInfo();
        u.status === 200 && u.data && l(u.data)
      };
      n && n.friends >= 1e4 && d()
    }, [n]), e.jsxs(ue, {
      children: [e.jsxs("div", {
        className: E.content,
        children: [e.jsx("div", {
          className: E.image_container,
          children: e.jsx("img", {
            alt: "image",
            className: E.image,
            src: Tb
          })
        }), e.jsx("div", {
          className: E.title_container,
          children: e.jsx("div", {
            className: E.title,
            children: t("invite")
          })
        }), e.jsxs("div", {
          className: E.description_container,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              children: t("description")
            })
          }), e.jsxs("div", {
            children: [e.jsxs("span", {
              children: [" ", t("your"), " "]
            }), e.jsx("span", {
              className: `${E.frens_count} ${E.bold}`,
              children: i
            })]
          })]
        }), e.jsxs("div", {
          className: E.buttons_container,
          children: [e.jsx(Gt, {
            url: a,
            className: E.button_copy
          }), e.jsx("button", {
            className: E.button,
            onPointerUp: d => {
              d.stopPropagation(), ee(`https://t.me/share/url?url=${a}`)
            },
            children: "Share"
          })]
        })]
      }), e.jsx("div", {
        className: E.info_layout,
        children: e.jsxs("div", {
          className: E.benefits_container,
          children: [e.jsxs("div", {
            className: E.benefits_item,
            children: [e.jsx("div", {
              children: e.jsx("span", {
                className: E.gray,
                children: t("benefits.title1")
              })
            }), e.jsxs("div", {
              children: [e.jsxs("span", {
                className: `${E.bold}`,
                children: [s.InitialCoins, " PX "]
              }), e.jsx("span", {
                className: `${E.gray}`,
                children: t("benefits.text1")
              })]
            })]
          }), e.jsxs("div", {
            className: E.benefits_item,
            children: [e.jsx("div", {
              children: e.jsxs(ca, {
                i18nKey: "frens.benefits.title2",
                children: [e.jsx("span", {
                  className: E.gray
                }), e.jsx("span", {
                  className: `${E.bold} ${E.purple}`
                })]
              })
            }), e.jsxs("div", {
              children: [e.jsxs("span", {
                className: `${E.bold}`,
                children: [s.RefRewardCoinsPremium, " PX", " "]
              }), e.jsx("span", {
                className: `${E.gray}`,
                children: t("benefits.text2")
              })]
            })]
          }), e.jsx("div", {
            className: E.divider
          }), e.jsxs("div", {
            className: E.benefits_item,
            children: [e.jsx("div", {
              children: e.jsx("span", {
                className: E.gray,
                children: t("benefits.title3")
              })
            }), e.jsxs("div", {
              children: [e.jsxs("span", {
                className: E.white,
                children: [s.ReferralClaimReward * 100, "%"]
              }), e.jsxs("span", {
                className: `${E.gray}`,
                children: [" ", t("benefits.text3")]
              })]
            })]
          }), e.jsxs("div", {
            className: E.benefits_item,
            children: [e.jsx("div", {
              children: e.jsx("span", {
                className: E.gray,
                children: t("benefits.title4")
              })
            }), e.jsxs("div", {
              children: [e.jsx("span", {
                className: `${E.bold}`,
                children: "100% "
              }), e.jsxs("span", {
                className: `${E.gray}`,
                children: [" ", t("benefits.text4")]
              })]
            })]
          }), e.jsxs("div", {
            className: E.benefits_item,
            children: [e.jsx("div", {
              style: {
                display: "flex",
                alignItems: "center"
              },
              children: e.jsx("span", {
                className: E.gray,
                children: t("benefits.title5")
              })
            }), e.jsx("div", {
              children: e.jsxs(ca, {
                i18nKey: "frens.benefits.text5",
                children: [e.jsx("span", {
                  className: `${E.bold}`
                }), e.jsx("span", {
                  className: `${E.gray}`
                })]
              })
            })]
          }), e.jsxs("div", {
            className: E.benefits_item,
            children: [e.jsxs("div", {
              style: {
                display: "flex",
                alignItems: "center"
              },
              children: [e.jsx("span", {
                className: E.gray,
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
              children: e.jsxs(ca, {
                i18nKey: "frens.benefits.text6",
                children: [e.jsx("span", {
                  className: `${E.bold}`
                }), e.jsx("span", {
                  className: `${E.gray}`
                })]
              })
            })]
          }), r && r.length > 0 && e.jsxs("div", {
            className: E.share_container,
            children: [e.jsxs("div", {
              className: E.share_row,
              children: [e.jsx("div", {}), e.jsx("div", {
                children: "Crypto"
              }), e.jsx("div", {
                children: "Purchases amount"
              }), e.jsx("div", {
                children: "Rev. share total"
              })]
            }), r.map(d => {
              const u = o.filter(_ => _.currency_id === d.currencyId);
              if (u.length === 0) return null;
              const h = u[0];
              return e.jsxs("div", {
                className: E.share_row,
                children: [e.jsx("img", {
                  alt: "currency",
                  src: h.image,
                  className: E.crypto_image
                }), e.jsx("div", {
                  children: h.name
                }), e.jsx("div", {
                  children: Ve({
                    num: Math.floor(d.totalPurchases)
                  })
                }), e.jsx("div", {
                  children: Ve({
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
  Rb = "_container_19cbp_1",
  Mb = "_text_container_19cbp_9",
  Ub = "_text_block_19cbp_16",
  Ob = "_gray_19cbp_24",
  Qb = "_purple_19cbp_28",
  Fb = "_total_19cbp_35",
  Gb = "_bold_19cbp_39",
  zb = "_indicator_19cbp_43",
  Lb = "_button_container_19cbp_52",
  Hb = "_button_19cbp_52",
  me = {
    container: Rb,
    text_container: Mb,
    text_block: Ub,
    gray: Ob,
    purple: Qb,
    total: Fb,
    bold: Gb,
    indicator: zb,
    button_container: Lb,
    button: Hb
  },
  qb = "_layout_1ulm2_1",
  Yb = "_container_1ulm2_11",
  Xb = "_stars_1ulm2_17",
  Vb = "_animStar_1ulm2_1",
  Xn = {
    layout: qb,
    container: Yb,
    stars: Xb,
    animStar: Vb
  },
  Jb = () => {
    const [t, n] = A.useState(window.innerWidth);

    function s(a) {
      n(a.target.innerWidth)
    }
    return A.useEffect(() => (window.addEventListener("resize", s), () => {
      window.removeEventListener("resize", s)
    }), []), t
  },
  Wb = [{
    count: 50,
    speed: 50
  }, {
    count: 50,
    speed: 30
  }, {
    count: 50,
    speed: 90
  }],
  Zb = t => {
    const n = window.innerWidth,
      s = window.innerHeight * 2;
    return Array.from(Array(t)).reduce(a => {
      const i = M(0, n),
        o = M(0, s);
      return a + `${i}px ${o}px #fff, `
    }, "").replace(/,(\s+)?$/, "")
  },
  Kb = A.memo(() => (Jb(), e.jsx("div", {
    className: Xn.layout,
    children: e.jsx("div", {
      className: Xn.container,
      children: Wb.map((t, n) => {
        const s = Zb(t.count);
        return e.jsx("div", {
          className: Xn.stars,
          style: {
            animation: `${Xn.animStar} ${t.speed}s linear infinite`,
            boxShadow: s
          }
        }, n)
      })
    })
  })), () => !1),
  $b = () => {
    const t = J(),
      [n, s] = A.useState(0),
      [a, i] = A.useState(0),
      [o, r] = A.useState(0),
      [l, d] = A.useState(0),
      [u, h] = A.useState(0),
      [_, y] = A.useState(0),
      [N, x] = A.useState([]);
    return A.useEffect(() => {
      try {
        X.getStats().then(w => {
          const O = w.data;
          s(O.totalPlayers), i(O.totalRepaints)
        }), X.getMoreStats().then(w => {
          const O = w.data;
          r(O.premium_users), d(O.active_users), h(O.daily_users), y(O.daily_repaints), x(Object.keys(O.top_countries).map(Q => ({
            key: Q,
            value: O.top_countries[Q]
          })))
        })
      } catch {}
    }, []), e.jsxs(ue, {
      children: [e.jsx(Kb, {}), e.jsx("div", {
        style: {
          height: 50
        }
      }), e.jsxs("div", {
        className: me.container,
        children: [e.jsxs("div", {
          className: me.text_container,
          children: [e.jsxs("div", {
            className: me.text_block,
            children: [e.jsx("span", {
              className: me.gray,
              children: "Total painters"
            }), e.jsx("span", {
              className: `${me.bold}`,
              style: {
                fontSize: 22
              },
              children: e.jsx(Be, {
                num: n
              })
            })]
          }), e.jsxs("div", {
            className: me.text_block,
            children: [e.jsx("span", {
              className: me.gray,
              children: "Total repaints"
            }), e.jsx("span", {
              className: `${me.bold}`,
              children: e.jsx(Be, {
                num: Math.floor(a)
              })
            })]
          }), e.jsxs("div", {
            className: me.text_block,
            children: [e.jsx("span", {
              className: me.gray,
              children: "Online users"
            }), e.jsx("span", {
              className: `${me.bold}`,
              children: e.jsx(Be, {
                num: Math.floor(l)
              })
            })]
          }), e.jsxs("div", {
            className: me.text_block,
            children: [e.jsx("div", {
              children: e.jsx("span", {
                className: me.purple,
                children: "Telegram Premium "
              })
            }), e.jsx("span", {
              className: `${me.bold}`,
              children: e.jsx(Be, {
                num: Math.floor(o)
              })
            })]
          }), e.jsxs("div", {
            className: me.text_block,
            children: [e.jsx("span", {
              className: me.gray,
              children: "Daily repaints"
            }), e.jsx("span", {
              className: `${me.bold}`,
              children: e.jsx(Be, {
                num: Math.floor(_)
              })
            })]
          })]
        }), e.jsx("div", {
          className: me.button_container,
          children: e.jsx("button", {
            className: me.button,
            onPointerUp: () => {
              t.push("/invite-frens")
            },
            children: "Invite fren"
          })
        })]
      })]
    })
  },
  e1 = "_main_info_container_1gqs9_2",
  t1 = "_image_container_1gqs9_11",
  n1 = "_image_1gqs9_11",
  s1 = "_title_1gqs9_21",
  a1 = "_variants_container_1gqs9_25",
  i1 = "_variant_item_1gqs9_33",
  o1 = "_variant_left_container_1gqs9_39",
  r1 = "_variant_middle_container_1gqs9_45",
  c1 = "_dot_1gqs9_53",
  l1 = "_variant_right_container_1gqs9_59",
  d1 = "_button_container_1gqs9_66",
  u1 = "_button_1gqs9_66",
  A1 = "_bold_1gqs9_96",
  m1 = "_gray_1gqs9_100",
  p1 = "_blue_1gqs9_104",
  h1 = "_text_1gqs9_109",
  Y = {
    main_info_container: e1,
    image_container: t1,
    image: n1,
    title: s1,
    variants_container: a1,
    variant_item: i1,
    variant_left_container: o1,
    variant_middle_container: r1,
    dot: c1,
    variant_right_container: l1,
    button_container: d1,
    button: u1,
    bold: A1,
    gray: m1,
    blue: p1,
    text: h1
  },
  Dr = "/assets/button_dog_200x200-DtCBiZdv.gif",
  g1 = t => {
    const n = t / 1e3,
      s = Math.floor(n / 60),
      a = n % 60;
    return a === 0 ? `${s} min` : `${s} min ${a} sec`
  },
  _1 = t => {
    if (t < 0 || !t) return "";
    const n = Math.floor(t / 60),
      s = t % 60;
    return s < 10 ? `${n}:0${s}` : `${n}:${s}`
  },
  x1 = () => {
    const t = g(),
      n = J(),
      s = c(u => u.mining.maxCharges),
      a = c(u => u.mining.charges),
      i = c(u => u.mining.reChargeSpeed),
      o = g1(i),
      r = c(u => u.mining.reChargeTs),
      [l, d] = A.useState("");
    return A.useEffect(() => {
      if (a !== 0) return () => {};
      const u = setInterval(() => {
        const _ = Date.now() - r,
          y = i - _,
          N = Math.round(y / 1e3);
        d(_1(N))
      }, 500);
      return () => {
        clearInterval(u)
      }
    }, [r, i, a]), e.jsxs(ue, {
      children: [e.jsx("div", {
        style: {
          height: 50
        }
      }), e.jsx("div", {
        className: Y.image_container,
        children: e.jsx("img", {
          alt: "image",
          className: Y.image,
          src: Dr
        })
      }), e.jsxs("div", {
        className: Y.main_info_container,
        children: [e.jsx("div", {
          children: e.jsx("span", {
            className: `${Y.title} ${Y.bold}`,
            children: "Energy is over"
          })
        }), e.jsxs("div", {
          children: [e.jsx("span", {
            className: `${Y.gray}`,
            children: "Energy limit: "
          }), e.jsxs("span", {
            children: [a, "/", s]
          })]
        }), e.jsxs("div", {
          children: [e.jsx("span", {
            className: `${Y.gray}`,
            children: "Recovery speed:"
          }), e.jsxs("span", {
            children: [" ", o]
          })]
        })]
      }), e.jsxs("div", {
        className: Y.variants_container,
        children: [e.jsxs("div", {
          className: Y.variant_item,
          children: [e.jsx("div", {
            className: Y.variant_left_container,
            children: e.jsx(I, {
              size: 28,
              children: ""
            })
          }), e.jsxs("div", {
            className: Y.variant_middle_container,
            children: [e.jsxs("div", {
              children: [e.jsx("span", {
                className: Y.bold,
                children: "Just wait"
              }), a === 0 && l !== "" && e.jsx("span", {
                className: Y.dot,
                children: "•"
              }), a === 0 && l !== "" && e.jsx("span", {
                className: Y.gray,
                children: l
              })]
            }), e.jsx("div", {
              children: e.jsx("span", {
                className: Y.gray,
                children: "Serene i fold my hands and wait."
              })
            })]
          }), e.jsx("div", {
            className: Y.variant_right_container
          })]
        }), e.jsxs("div", {
          className: Y.variant_item,
          onPointerUp: () => {
            t(ka("boosts")), n.push("/claiming")
          },
          children: [e.jsx("div", {
            className: Y.variant_left_container,
            children: e.jsx(I, {
              size: 28,
              children: ""
            })
          }), e.jsxs("div", {
            className: Y.variant_middle_container,
            children: [e.jsx("div", {
              children: e.jsx("span", {
                className: `${Y.bold} ${Y.blue}`,
                children: "Use boosters"
              })
            }), e.jsx("div", {
              children: e.jsx("span", {
                className: Y.gray,
                children: "Upgrade Energy limit and Speed."
              })
            })]
          }), e.jsx("div", {
            className: Y.variant_right_container,
            children: e.jsx(I, {
              size: 20,
              children: ""
            })
          })]
        }), e.jsxs("div", {
          className: Y.variant_item,
          onPointerUp: () => {
            t(st(1)), t(at()), n.push("/stars")
          },
          children: [e.jsx("div", {
            className: Y.variant_left_container,
            children: e.jsx(I, {
              size: 28,
              children: ""
            })
          }), e.jsxs("div", {
            className: Y.variant_middle_container,
            children: [e.jsx("div", {
              children: e.jsx("span", {
                className: `${Y.blue} ${Y.bold}`,
                children: "Use Stars Shop"
              })
            }), e.jsx("div", {
              children: e.jsx("span", {
                className: Y.gray,
                children: "Full energy right now for Stars."
              })
            })]
          }), e.jsx("div", {
            className: Y.variant_right_container,
            children: e.jsx(I, {
              size: 20,
              children: ""
            })
          })]
        })]
      }), e.jsx("div", {
        className: Y.button_container,
        children: e.jsx("button", {
          className: Y.button,
          onPointerUp: () => {
            n.push("/")
          },
          children: "Okay"
        })
      })]
    })
  },
  f1 = "_close_container_5xtkt_1",
  v1 = "_title_container_5xtkt_12",
  y1 = "_title_5xtkt_12",
  w1 = "_small_title_container_5xtkt_23",
  j1 = "_small_title_5xtkt_23",
  b1 = "_content_5xtkt_32",
  N1 = "_image_container_5xtkt_40",
  I1 = "_image_placeholder_5xtkt_46",
  C1 = "_image_5xtkt_40",
  P1 = "_how_container_5xtkt_58",
  S1 = "_description_container_5xtkt_63",
  B1 = "_white_5xtkt_72",
  T1 = "_gray_5xtkt_76",
  E1 = "_bold_5xtkt_80",
  D1 = "_center_5xtkt_84",
  k1 = "_claim_button_container_5xtkt_88",
  R1 = "_claim_button_5xtkt_88",
  M1 = "_no_button_5xtkt_107",
  U1 = "_info_layout_5xtkt_119",
  O1 = "_rewards_layout_5xtkt_131",
  Q1 = "_rewards_grid_container_5xtkt_137",
  F1 = "_reward_item_5xtkt_143",
  G1 = "_reward_item_completed_5xtkt_153",
  z1 = "_reward_item_content_container_5xtkt_166",
  L1 = "_reward_item_active_5xtkt_179",
  H1 = "_reward_item_image_container_5xtkt_183",
  q1 = "_reward_item_amount_5xtkt_187",
  Y1 = "_reward_item_amount_active_5xtkt_201",
  X1 = "_reward_item_amount_premium_5xtkt_205",
  V1 = "_reward_item_title_5xtkt_210",
  J1 = "_reward_item_title_premium_5xtkt_216",
  W1 = "_reward_item_image_5xtkt_183",
  F = {
    close_container: f1,
    title_container: v1,
    title: y1,
    small_title_container: w1,
    small_title: j1,
    content: b1,
    image_container: N1,
    image_placeholder: I1,
    image: C1,
    how_container: P1,
    description_container: S1,
    white: B1,
    gray: T1,
    bold: E1,
    center: D1,
    claim_button_container: k1,
    claim_button: R1,
    no_button: M1,
    info_layout: U1,
    rewards_layout: O1,
    rewards_grid_container: Q1,
    reward_item: F1,
    reward_item_completed: G1,
    reward_item_content_container: z1,
    reward_item_active: L1,
    reward_item_image_container: H1,
    reward_item_amount: q1,
    reward_item_amount_active: Y1,
    reward_item_amount_premium: X1,
    reward_item_title: V1,
    reward_item_title_premium: J1,
    reward_item_image: W1
  },
  Z1 = ({
    secondsLeft: t
  }) => {
    const n = g(),
      s = "dailyTransactionInfo",
      a = c(s_),
      i = c(x => x.daily.getDailyListFetchStatus),
      o = c(x => x.daily.getFirstDailyFetchStatus),
      r = i === p.fulfilled,
      l = qs(),
      [d, u] = kn(),
      [h, _] = A.useState(!1),
      y = c(At);
    A.useEffect(() => {
      if (!a || !r) return;
      const x = localStorage.getItem(s);
      if (x) {
        const w = JSON.parse(x);
        w.dailyId === a.id && Date.now() - w.ts < 10 * 60 * 1e3 ? _(!0) : _(!1), Date.now() - w.ts >= 10 * 60 * 1e3 && localStorage.removeItem(s)
      }
    }, [a]);
    const N = async () => {
      try {
        const x = a.prices[0],
          w = await X.startShopTransaction({
            buyerWallet: l,
            currencyId: 2,
            daily: !0,
            quantity: x.quantity,
            goodId: a.id
          }),
          O = Ke.beginCell().storeUint(0, 32).storeStringTail(w.data.txMemCode).endCell(),
          Q = {
            validUntil: Math.floor(Date.now() / 1e3) + 600,
            messages: [{
              address: Ea,
              amount: String(Ke.toNano(w.data.strAmount)),
              payload: O.toBoc().toString("base64")
            }]
          },
          De = await d.sendTransaction(Q);
        localStorage.setItem(s, JSON.stringify({
          ts: Date.now(),
          dailyId: a.id
        })), n(z({
          id: performance.now(),
          text: "Success! Wait 3-5 min and reload the app.",
          icon: ""
        })), _(!0)
      } catch (x) {
        console.warn(x), n(z({
          id: performance.now(),
          text: "Error! Wait 5 min before starting a new transaction."
        }))
      }
    };
    if (r) {
      const x = a.prices[0];
      let w = `Claim for ${x.price} TON`;
      return t && (w = `Claim in ${_d(t)}`), h && (w = "Pending transaction..."), e.jsxs("div", {
        className: F.content,
        children: [e.jsx("div", {
          className: F.description_container,
          children: e.jsx("div", {
            children: e.jsxs("span", {
              children: ["Day ", a.id]
            })
          })
        }), e.jsx("div", {
          className: F.image_container,
          children: e.jsx("img", {
            alt: "image",
            className: F.image,
            src: a.image_url
          })
        }), e.jsx("div", {
          className: F.title_container,
          children: e.jsx("div", {
            className: F.title,
            children: `${a.name} x${x.quantity}`
          })
        }), e.jsx("div", {
          className: F.how_container,
          children: e.jsx(mn, {
            onPointerUp: O => {
              O.stopPropagation(), n(wr(!0))
            },
            children: "How it works"
          })
        }), e.jsxs("div", {
          className: F.claim_button_container,
          children: [y !== ye && e.jsx("button", {
            className: F.no_button,
            children: "Desktop version only"
          }), l !== "" && y === ye && e.jsx("button", {
            disabled: o === p.pending || h,
            className: F.claim_button,
            onPointerUp: async () => {
              t || h || N()
            },
            children: w
          }), l === "" && y === ye && e.jsx("button", {
            className: F.claim_button,
            onPointerUp: async () => {
              await d.openModal()
            },
            children: "Connect wallet"
          })]
        })]
      })
    }
    return e.jsxs("div", {
      className: F.content,
      children: [e.jsx("div", {
        className: F.description_container,
        children: e.jsx("div", {
          children: e.jsx(We, {
            show: !0,
            children: "Loading..."
          })
        })
      }), e.jsx("div", {
        className: F.image_container,
        children: e.jsx("div", {
          className: F.image_placeholder
        })
      }), e.jsx("div", {
        className: F.title_container,
        children: e.jsx("div", {
          className: F.title,
          children: e.jsx("div", {
            children: e.jsx(We, {
              show: !0,
              children: "Loading..."
            })
          })
        })
      }), e.jsx("div", {
        className: F.claim_button_container,
        children: e.jsx("button", {
          className: F.claim_button,
          disabled: !0,
          children: "Loading..."
        })
      })]
    })
  },
  K1 = "data:image/png;base64,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",
  $1 = "data:image/png;base64,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",
  e0 = "data:image/png;base64,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",
  t0 = "data:image/png;base64,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",
  n0 = "_container_11l5m_1",
  s0 = "_divider_11l5m_23",
  a0 = "_row_11l5m_28",
  i0 = "_row_title_11l5m_40",
  o0 = "_row_title_main_11l5m_44",
  r0 = "_row_hint_11l5m_49",
  c0 = "_row_value_11l5m_55",
  l0 = "_row_value_main_11l5m_59",
  d0 = "_mining_percent_11l5m_64",
  u0 = "_active_row_11l5m_74",
  A0 = "_button_11l5m_85",
  Hi = {
    container: n0,
    divider: s0,
    row: a0,
    row_title: i0,
    row_title_main: o0,
    row_hint: r0,
    row_value: c0,
    row_value_main: l0,
    mining_percent: d0,
    active_row: u0,
    button: A0
  },
  m0 = () => {
    const t = g(),
      n = c(a => a.daily.showHowDailyWorksPopup),
      s = a => {
        t(wr(a))
      };
    return e.jsx(rn, {
      show: n,
      setShow: s,
      children: e.jsxs("div", {
        className: Hi.container,
        children: [e.jsx("h2", {
          children: "How does Daily work? "
        }), e.jsx("p", {
          children: "Complete the daily check-ins and earn valuable rewards. The more days completed, the more rewards you get."
        }), e.jsx("p", {
          children: "Usage is only possible in the desktop version."
        }), e.jsx("button", {
          className: Hi.button,
          onPointerUp: () => s(!1),
          children: "That's so wise!"
        })]
      })
    })
  },
  p0 = (t, n) => {
    const s = t.getTime() - t.getTime() % 864e5,
      a = n.getTime() - n.getTime() % (86400 * 1e3);
    return s === a
  },
  h0 = () => {
    const t = g(),
      n = c(ni.selectAll),
      s = c(r => r.daily.selected),
      [a, i] = A.useState(null),
      o = c(r => r.daily.getDailyListFetchStatus);
    return A.useEffect(() => {
      (o === p.idle || o === p.rejected) && t(jr.getList())
    }, [o]), A.useEffect(() => {
      let r = 0;
      for (let l = 0; l < n.length; l++) {
        const d = n[l];
        if (d.timestamp && new Date(d.timestamp) > r && (r = new Date(d.timestamp)), d.daily) {
          t(a_(d.id));
          break
        }
      }
      if (r && p0(new Date, new Date(r))) {
        const l = new Date(r),
          u = new Date(Date.UTC(l.getUTCFullYear(), l.getUTCMonth(), l.getUTCDate() + 1, 0, 0, 0, 0)) - new Date,
          h = Math.floor(u / 1e3);
        i(h)
      }
    }, [n]), e.jsxs(ue, {
      children: [e.jsx("div", {
        className: F.title_container,
        children: e.jsx("div", {
          className: F.title,
          children: "Daily streak awards"
        })
      }), e.jsx(Z1, {
        secondsLeft: a
      }), e.jsxs("div", {
        className: F.info_layout,
        children: [e.jsx("div", {
          className: F.small_title_container,
          children: e.jsx("div", {
            className: F.small_title,
            children: "Stay on track for bigger rewards!"
          })
        }), e.jsx("div", {
          className: F.rewards_layout,
          children: e.jsx("div", {
            className: F.rewards_grid_container,
            children: n.map((r, l) => {
              const d = (l + 1) % 4 === 0,
                u = r.prices[0],
                h = [F.reward_item],
                _ = [F.reward_item_amount],
                y = [F.reward_item_title];
              r.id === s && (h.push(F.reward_item_active), _.push(F.reward_item_amount_active)), d && y.push(F.reward_item_title_premium), d && !r.active && _.push(F.reward_item_amount_premium);
              let N = K1;
              return l >= 8 && l <= 15 && (N = $1), l >= 16 && l <= 23 && (N = e0), l >= 24 && l <= 31 && (N = t0), e.jsxs("div", {
                className: h.join(" "),
                onPointerUp: () => {
                  t(z({
                    id: performance.now(),
                    text: `${u.quantity} ${r.name} for ${u.price} TON`,
                    icon: ""
                  }))
                },
                children: [e.jsxs("div", {
                  className: F.reward_item_content_container,
                  children: [e.jsxs("div", {
                    className: y.join(" "),
                    children: ["Day ", l + 1]
                  }), e.jsx("img", {
                    src: N,
                    style: {
                      position: "absolute",
                      bottom: -12
                    }
                  }), e.jsx("div", {
                    className: F.reward_item_image_container,
                    children: e.jsx("img", {
                      alt: "item",
                      className: F.reward_item_image,
                      src: r.image_url
                    })
                  }), e.jsx("div", {
                    className: _.join(" "),
                    children: u.quantity
                  })]
                }), !r.daily && e.jsx("div", {
                  className: F.reward_item_completed,
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
      }), e.jsx(m0, {})]
    })
  },
  g0 = "_general_info_container_fv8d9_1",
  _0 = "_img_container_fv8d9_7",
  x0 = "_image_fv8d9_13",
  f0 = "_title_fv8d9_19",
  v0 = "_description_container_fv8d9_25",
  y0 = "_description_fv8d9_25",
  Jt = {
    general_info_container: g0,
    img_container: _0,
    image: x0,
    title: f0,
    description_container: v0,
    description: y0
  },
  w0 = "_info_layout_1p9dg_1",
  j0 = {
    info_layout: w0
  },
  b0 = "_no_template_container_uihlo_1",
  N0 = "_no_template_button_uihlo_10",
  I0 = "_template_container_uihlo_28",
  C0 = "_template_info_container_uihlo_35",
  P0 = "_template_info_uihlo_35",
  S0 = "_buttons_container_uihlo_44",
  B0 = "_button_copy_uihlo_53",
  T0 = "_button_uihlo_44",
  E0 = "_create_new_template_uihlo_72",
  $e = {
    no_template_container: b0,
    no_template_button: N0,
    template_container: I0,
    template_info_container: C0,
    template_info: P0,
    buttons_container: S0,
    button_copy: B0,
    button: T0,
    create_new_template: E0
  },
  D0 = "_instruction_container_14ts7_1",
  k0 = "_img_container_14ts7_9",
  R0 = "_image_14ts7_15",
  M0 = "_instruction_text_14ts7_21",
  U0 = "_preview_container_14ts7_26",
  O0 = "_preview_image_container_14ts7_32",
  Q0 = "_preview_image_14ts7_32",
  F0 = "_preview_image_loader_14ts7_45",
  G0 = "_template_size_14ts7_60",
  z0 = "_template_title_14ts7_68",
  L0 = "_template_size_container_14ts7_73",
  H0 = "_template_size_item_14ts7_79",
  q0 = "_template_size_item_active_14ts7_87",
  Y0 = "_template_coords_14ts7_92",
  X0 = "_template_coordinates_title_14ts7_102",
  V0 = "_template_coords_container_14ts7_107",
  J0 = "_coords_item_14ts7_114",
  W0 = "_coords_input_14ts7_120",
  Z0 = "_file_button_container_14ts7_129",
  K0 = "_file_button_14ts7_129",
  oe = {
    instruction_container: D0,
    img_container: k0,
    image: R0,
    instruction_text: M0,
    preview_container: U0,
    preview_image_container: O0,
    preview_image: Q0,
    preview_image_loader: F0,
    template_size: G0,
    template_title: z0,
    template_size_container: L0,
    template_size_item: H0,
    template_size_item_active: q0,
    template_coords: Y0,
    template_coordinates_title: X0,
    template_coords_container: V0,
    coords_item: J0,
    coords_input: W0,
    file_button_container: Z0,
    file_button: K0
  },
  zs = {
    16: 512,
    32: 2048,
    64: 8192,
    128: 2e4
  },
  $0 = ({
    templateSize: t,
    setTemplateSize: n
  }) => {
    const s = g(),
      a = c(Le),
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
              i >= zs[r] || a.isContractor ? n(r) : s(z({
                id: performance.now(),
                text: `To unlock this size, invite ${zs[r]-i} more frens.`
              }))
            },
            children: `${r} X ${r}`
          }, r)
        })
      }), " "]
    })
  },
  eN = () => {
    const t = J(),
      n = c(i => i.template.myTemplate),
      s = c(i => i.user.user),
      a = s && s.friends >= zs[16] || s.isContractor;
    return n !== null ? null : e.jsxs("div", {
      className: $e.no_template_container,
      children: [a && e.jsx("span", {
        className: "gray",
        children: "Create a template and share with your friends."
      }), !a && e.jsxs("span", {
        className: "gray",
        children: ["To unlock template creation, ", e.jsx("br", {}), " invite", " ", s && s.friends || 0, "/", zs[16], " friends"]
      }), a && e.jsx("button", {
        className: $e.no_template_button,
        onPointerUp: () => {
          t.push("/template/create")
        },
        children: "Pixel Templates"
      }), !a && e.jsx("button", {
        className: $e.no_template_button,
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
  tN = "_template_item_container_srp11_1",
  nN = "_template_item_inner_srp11_9",
  sN = "_template_image_srp11_17",
  aN = "_template_image_info_layout_srp11_24",
  iN = "_template_image_info_container_srp11_34",
  wn = {
    template_item_container: tN,
    template_item_inner: nN,
    template_image: sN,
    template_image_info_layout: aN,
    template_image_info_container: iN
  },
  kr = ({
    item: t,
    style: n = {}
  }) => {
    const s = g();
    return e.jsx("div", {
      className: wn.template_item_container,
      style: {
        ...n
      },
      onPointerUp: async () => {
        t.templateId && t.templateId !== 0 && s(Fa({
          show: !0,
          id: Number(t.templateId)
        }))
      },
      children: e.jsxs("div", {
        className: wn.template_item_inner,
        children: [e.jsx("img", {
          alt: "image",
          className: wn.template_image,
          src: t.url
        }), e.jsx("div", {
          className: wn.template_image_info_layout,
          children: e.jsxs("div", {
            className: wn.template_image_info_container,
            children: [e.jsx(I, {
              children: ""
            }), e.jsx("span", {
              children: tn(Math.max(0, t.subscribers))
            })]
          })
        })]
      })
    })
  },
  oN = () => {
    const t = J();
    return e.jsx("div", {
      className: $e.create_new_template,
      onPointerUp: () => {
        t.push("/template/create")
      },
      children: "Create a new template"
    })
  },
  rN = () => {
    const t = c(a => a.user.user);
    let n = `${Nt}?startapp=f${(t==null?void 0:t.id)||""}_t`;
    t.squad && t.squad.id !== null && (n += `_s${t.squad.id}`);
    const s = c(a => a.template.myTemplate);
    return s === null ? null : e.jsxs("div", {
      className: $e.template_container,
      children: [e.jsx(kr, {
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
        className: $e.template_info_container,
        children: e.jsxs("span", {
          className: $e.template_info,
          children: ["Share this template with your frens, ", e.jsx("br", {}), " get reward for frens repaints."]
        })
      }), e.jsxs("div", {
        className: $e.buttons_container,
        children: [e.jsx(Gt, {
          url: n,
          className: $e.button_copy,
          text: "Copy template link"
        }), e.jsx("button", {
          className: $e.button,
          onPointerUp: a => {
            a.stopPropagation(), window.Telegram.WebApp.openTelegramLink(`https://t.me/share/url?url=${n}`)
          },
          children: "Share"
        })]
      }), e.jsx(oN, {})]
    })
  },
  cN = () => e.jsxs("div", {
    children: [e.jsx(eN, {}), e.jsx(rN, {})]
  }),
  lN = "_layout_94gj5_1",
  dN = "_container_94gj5_5",
  uN = "_button_container_94gj5_11",
  AN = "_button_94gj5_11",
  Ls = {
    layout: lN,
    container: dN,
    button_container: uN,
    button: AN
  },
  mN = () => {
    const t = g(),
      n = A.useRef(null),
      s = A.useRef(0),
      a = c(u => u.template.listStatus),
      i = c(u => u.template.listOffset),
      o = c(u => u.template.listLimit),
      r = c(u => u.template.list),
      [l, d] = A.useState(!1);
    return A.useEffect(() => {
      let u = null;
      if (n.current && a === p.fulfilled && !l) {
        const h = {
            rootMargin: "0px",
            threshold: 1
          },
          _ = (y, N) => {
            y.forEach(x => {
              x.intersectionRatio >= 1 && (t(bt.getList({
                offset: i,
                limit: o
              })), N.unobserve(n.current))
            })
          };
        u = new IntersectionObserver(_, h), u.observe(n.current)
      }
      return () => {
        u && n.current && u.unobserve(n.current)
      }
    }, [a, i, o, l]), A.useEffect(() => {
      s.current === r.length && r.length !== 0 && d(!0), s.current = r.length
    }, [r]), l ? null : e.jsx("div", {
      className: Ls.button_container,
      children: e.jsx("button", {
        ref: n,
        disabled: a === p.pending,
        className: Ls.button,
        onPointerUp: () => {
          t(bt.getList({
            offset: i,
            limit: o
          }))
        },
        children: "Load more"
      })
    })
  },
  pN = () => {
    const t = g(),
      n = c(o => o.template.listOffset),
      s = c(o => o.template.listLimit),
      a = c(o => o.template.list),
      i = c(o => o.template.referredTemplate);
    return A.useEffect(() => (t(bt.getList({
      offset: n,
      limit: s
    })), () => {
      t(e_())
    }), []), e.jsxs("div", {
      className: Ls.layout,
      children: [e.jsx("div", {
        className: Ls.container,
        children: a.map(o => {
          if (Number(o.templateId) === 0) return null;
          let r = !1;
          return i !== null && Number(i.id) === Number(o.templateId) && (r = !0), e.jsx(kr, {
            item: o,
            current: r
          }, o.templateId)
        })
      }), e.jsx(mN, {})]
    })
  },
  hN = () => {
    const t = c(n => n.template.activeTab);
    return e.jsxs("div", {
      className: j0.info_layout,
      children: [t === "my" && e.jsx(cN, {}), t === "catalog" && e.jsx(pN, {})]
    })
  },
  gN = () => {
    const t = g(),
      n = c(s => s.template.activeTab);
    return e.jsxs(dn, {
      children: [e.jsx(Fe, {
        active: n === "my",
        setActive: () => t(ki("my")),
        children: "My template"
      }), e.jsx(Fe, {
        active: n === "catalog",
        setActive: () => t(ki("catalog")),
        children: "Catalog"
      })]
    })
  },
  _N = () => e.jsxs(ae.Fragment, {
    children: [e.jsx(gN, {}), e.jsx(hN, {})]
  }),
  ia = "/assets/paintings_anim2-nk1iBB8J.gif",
  xN = "_container_1h1qc_1",
  fN = "_divider_1h1qc_19",
  vN = "_row_1h1qc_24",
  yN = "_row_title_1h1qc_36",
  wN = "_row_title_main_1h1qc_40",
  jN = "_row_hint_1h1qc_45",
  bN = "_row_value_1h1qc_51",
  NN = "_row_value_main_1h1qc_55",
  IN = "_mining_percent_1h1qc_60",
  CN = "_active_row_1h1qc_70",
  PN = "_button_1h1qc_81",
  qi = {
    container: xN,
    divider: fN,
    row: vN,
    row_title: yN,
    row_title_main: wN,
    row_hint: jN,
    row_value: bN,
    row_value_main: NN,
    mining_percent: IN,
    active_row: CN,
    button: PN
  },
  SN = () => {
    const t = g(),
      n = c(a => a.template.showTemplateDetailsPopup),
      s = a => {
        t(vr(a))
      };
    return e.jsx(rn, {
      show: n,
      setShow: s,
      children: e.jsxs("div", {
        className: qi.container,
        children: [e.jsx("h2", {
          children: "How does Templates work? "
        }), e.jsx("p", {
          children: "Paint the pixels in the correct color – get a PX. "
        }), e.jsx("p", {
          children: "Use global templates, join your frens' templates, or create your own."
        }), e.jsx("p", {
          children: "Create a template and get reward in PX. The reward depends on the number of painters of the template. Btw, the owner doesn't get an award for painting his template."
        }), e.jsx("button", {
          className: qi.button,
          onPointerUp: () => s(!1),
          children: "That's so wise!"
        })]
      })
    })
  },
  BN = "_layout_2uiqn_1",
  TN = "_container_2uiqn_6",
  EN = "_close_button_2uiqn_18",
  DN = "_title_container_2uiqn_26",
  kN = "_title_2uiqn_26",
  RN = "_image_container_2uiqn_37",
  MN = "_image_2uiqn_37",
  UN = "_image_placeholder_2uiqn_51",
  ON = "_info_container_2uiqn_58",
  QN = "_info_row_2uiqn_64",
  FN = "_info_title_2uiqn_69",
  GN = "_info_value_blue_2uiqn_73",
  zN = "_info_value_white_2uiqn_78",
  LN = "_buttons_container_2uiqn_82",
  HN = "_button_2uiqn_82",
  qN = "_not_button_2uiqn_98",
  YN = "_button_copy_2uiqn_109",
  ce = {
    layout: BN,
    container: TN,
    close_button: EN,
    title_container: DN,
    title: kN,
    image_container: RN,
    image: MN,
    image_placeholder: UN,
    info_container: ON,
    info_row: QN,
    info_title: FN,
    info_value_blue: GN,
    info_value_white: zN,
    buttons_container: LN,
    button: HN,
    not_button: qN,
    button_copy: YN
  },
  XN = () => {
    const t = g(),
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
            if (a(!0), (await t(bt.subscribe({
                id: n
              }))).meta.requestStatus === p.fulfilled) {
              await t(z({
                id: performance.now(),
                text: "Success!"
              }));
              const u = await t(bt.getTemplateById({
                  id: n
                })),
                h = {
                  ...u.payload,
                  url: `${u.payload.url}?time=${Date.now()}`,
                  type: Te.referred
                };
              t(Kg(h)), j.mainImage.worldTemplate.deleteTemplate(o.id), j.mainImage.worldTemplate.add(h), t(di())
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
  VN = () => {
    const t = g(),
      [n, s] = A.useState(null),
      a = c(o => o.template.showTemplateInfoPopup),
      i = c(o => o.template.templateInfoPopupId);
    return A.useEffect(() => (i && (async () => {
      try {
        const r = await t(bt.getTemplateById({
          id: i
        }));
        r.payload && s({
          ...r.payload
        })
      } catch {}
    })(), () => {
      s(null)
    }), [i]), nt.createPortal(e.jsx(Ye, {
      onPointerUp: () => t(Fa({
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
              t(Fa({
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
            children: [e.jsx(XN, {}), e.jsx(Gt, {
              url: `${Nt}?startapp=f${i}_t`,
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
  JN = () => {
    const t = g();
    return e.jsxs(ue, {
      children: [e.jsxs("div", {
        className: Jt.general_info_container,
        children: [e.jsx("div", {
          className: Jt.img_container,
          children: e.jsx("img", {
            alt: "img",
            className: Jt.image,
            src: ia
          })
        }), e.jsx("h1", {
          className: Jt.title,
          children: "Templates"
        }), e.jsxs("div", {
          className: Jt.description_container,
          children: [e.jsxs("span", {
            className: Jt.description,
            children: ["Use templates and get more PX ", e.jsx("br", {}), e.jsx(mn, {
              onPointerUp: n => {
                n.stopPropagation(), t(vr(!0))
              },
              children: "How it works"
            })]
          }), e.jsx(SN, {})]
        })]
      }), e.jsx(_N, {}), e.jsx(VN, {})]
    })
  },
  WN = "_container_s1r1v_1",
  ZN = "_page_s1r1v_13",
  KN = "_id_s1r1v_17",
  $N = "_title_s1r1v_22",
  eI = "_avatar_container_s1r1v_28",
  tI = "_avatar_s1r1v_28",
  nI = "_squad_avatar_container_s1r1v_40",
  sI = "_text_container_s1r1v_52",
  aI = "_dot_s1r1v_58",
  iI = "_user_name_s1r1v_63",
  oI = "_squad_name_s1r1v_69",
  rI = "_divider_s1r1v_75",
  cI = "_tabs_content_s1r1v_81",
  lI = "_content_info_s1r1v_85",
  dI = "_content_info_item_s1r1v_92",
  uI = "_content_info_item_title_s1r1v_96",
  AI = "_content_info_item_value_s1r1v_100",
  mI = "_no_content_s1r1v_106",
  pI = "_achievements_container_s1r1v_115",
  q = {
    container: WN,
    page: ZN,
    id: KN,
    title: $N,
    avatar_container: eI,
    avatar: tI,
    squad_avatar_container: nI,
    text_container: sI,
    dot: aI,
    user_name: iI,
    squad_name: oI,
    divider: rI,
    tabs_content: cI,
    content_info: lI,
    content_info_item: dI,
    content_info_item_title: uI,
    content_info_item_value: AI,
    no_content: mI,
    achievements_container: pI
  },
  hI = () => {
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
    if (r.dataSource === Je.userFromPixelInfo) return {
      ready: s === p.fulfilled && t !== null,
      data: t == null ? void 0 : t.owner,
      item: r
    };
    if (r.dataSource === Je.squadFromData) return {
      ready: i === p.fulfilled && o !== null,
      data: o,
      item: r
    };
    if (r.dataSource === Je.userFromRating) {
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
  St = (t = !0) => {
    const [n, s] = A.useState({
      ready: !1,
      data: null
    }), a = hI(), i = c(Le);
    return A.useEffect(() => {
      n && s({
        ready: !0,
        data: i
      })
    }, [i]), t ? a : n
  },
  gI = ({
    isPopupContent: t = !0
  }) => {
    const {
      data: n,
      ready: s
    } = St(t);
    if (!s) return e.jsx(We, {
      show: !s,
      children: e.jsx("div", {
        className: q.text_container,
        children: e.jsx("span", {
          className: q.user_name,
          children: "No name • @notpixel"
        })
      })
    });
    const i = Rn(n.firstName || "No name");
    return e.jsx("div", {
      className: q.text_container,
      children: e.jsx("span", {
        className: q.user_name,
        children: i
      })
    })
  },
  _I = ({
    isPopupContent: t = !0
  }) => {
    var o;
    const n = g(),
      {
        data: s,
        ready: a
      } = St(t);
    return a ? ((o = s == null ? void 0 : s.squad) == null ? void 0 : o.name) && s.squad.name !== null ? e.jsxs("div", {
      className: q.text_container,
      children: [e.jsx("span", {
        className: q.squad_name,
        children: "Squad"
      }), e.jsx(mn, {
        onPointerUp: () => {
          n(sa.getInfo({
            id: s.squad.id
          })), n(Qn({
            dataSource: Je.squadFromData
          }))
        },
        children: Rn(s.squad.name, 20)
      })]
    }) : e.jsx("div", {
      className: q.text_container,
      children: e.jsx("span", {
        className: q.squad_name,
        children: "No squad"
      })
    }) : e.jsx(We, {
      show: !a,
      children: e.jsx("div", {
        className: q.text_container,
        children: e.jsx("span", {
          className: q.squad_name,
          children: "Loading..."
        })
      })
    })
  },
  xI = ({
    isPopupContent: t = !0
  }) => {
    var i;
    const {
      data: n,
      ready: s
    } = St(t);
    let a = tt;
    return s && n.userPic && n.userPic !== "" && (a = n.userPic), e.jsxs("div", {
      className: q.avatar_container,
      children: [e.jsx("img", {
        alt: "avatar",
        className: q.avatar,
        src: a
      }), e.jsx("div", {
        className: q.squad_avatar_container,
        children: e.jsx(gi, {
          src: ((i = n == null ? void 0 : n.squad) == null ? void 0 : i.logo) || ""
        })
      })]
    })
  },
  fI = ({
    isPopupContent: t = !0
  }) => {
    const n = g(),
      {
        data: s,
        ready: a
      } = St(t);
    return e.jsxs("div", {
      children: [a && s.id !== 0 && e.jsx("span", {
        className: q.id,
        onPointerUp: async i => {
          i.preventDefault(), i.stopPropagation();
          try {
            await Mn(`${s.id}`), await n(z({
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
      }), e.jsx(We, {
        show: !a,
        children: e.jsx("span", {
          children: "Owner"
        })
      })]
    })
  },
  vI = ({
    active: t,
    setActive: n
  }) => e.jsxs(dn, {
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
  yI = () => e.jsx("div", {
    className: q.divider
  }),
  wI = ({
    isPopupContent: t = !0
  }) => {
    const {
      data: n,
      ready: s
    } = St(t);
    return e.jsxs("div", {
      className: q.content_info,
      children: [e.jsxs("div", {
        className: q.content_info_item,
        children: [e.jsx("div", {
          className: q.content_info_item_title,
          children: "Leaderboard Place"
        }), e.jsx("div", {
          className: q.content_info_item_value,
          children: s ? "Soon" : 0
        })]
      }), e.jsxs("div", {
        className: q.content_info_item,
        children: [e.jsx("div", {
          className: q.content_info_item_title,
          children: "Score"
        }), e.jsx("div", {
          className: q.content_info_item_value,
          children: s ? "Soon" : 0
        })]
      }), e.jsxs("div", {
        className: q.content_info_item,
        children: [e.jsx("div", {
          className: q.content_info_item_title,
          children: "Pixels recolored"
        }), e.jsx("div", {
          className: q.content_info_item_value,
          children: s ? Be({
            num: n.repaints
          }) : 0
        })]
      }), e.jsxs("div", {
        className: q.content_info_item,
        children: [e.jsx("div", {
          className: q.content_info_item_title,
          children: "PX mined"
        }), e.jsx("div", {
          className: q.content_info_item_value,
          children: s ? Be({
            num: n.balance
          }) : 0
        })]
      })]
    })
  },
  jI = "_container_os5nt_1",
  bI = "_not_completed_os5nt_6",
  NI = "_image_container_os5nt_10",
  II = "_image_os5nt_10",
  CI = "_bold_os5nt_20",
  PI = "_gray_os5nt_24",
  SI = "_description_container_os5nt_28",
  Bt = {
    container: jI,
    not_completed: bI,
    image_container: NI,
    image: II,
    bold: CI,
    gray: PI,
    description_container: SI
  },
  BI = ({
    completed: t,
    item: n
  }) => e.jsxs("div", {
    className: R(Bt.container, t ? "" : Bt.not_completed),
    children: [e.jsx("div", {
      className: Bt.image_container,
      children: e.jsx("img", {
        src: n.src,
        className: Bt.image
      })
    }), e.jsxs("div", {
      className: Bt.description_container,
      children: [e.jsx("span", {
        className: Bt.bold,
        children: n.title
      }), e.jsx("span", {
        className: Bt.gray,
        children: n.description
      })]
    })]
  }),
  TI = "/assets/0-CBlm-5t2.gif",
  EI = "/assets/1-C1eaF-Lh.gif",
  DI = "/assets/2-Dx7l5fvD.gif",
  kI = "data:image/gif;base64,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",
  RI = "/assets/4-B9SjwR-x.gif",
  MI = "/assets/5-D2MXnTsp.gif",
  UI = "/assets/6-DGYxyagY.gif",
  OI = "/assets/10-BNY74yH-.gif",
  QI = "/assets/12-B0vEyGRB.gif",
  FI = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF0AAABkCAYAAADkBDymAAACSElEQVR4nO3doU5cQRSA4dmymz4DZkG0dU0wKB5gDXZVBSsxTfcBKmrql6SikhUoUlcED4DCNMHRCrqmz9AAadMHmHPDKXP/Jfk/Oxku/BlxMrnLDibz/ZJxvvj6J7WxlHJ7+by6Ntr9nf2xvf4uk/n+IPvMZ9mNyjM6wOgAowOMDjA6YBg9MhoLV6fh1iay412bffHIHI2UnnSA0QFGBxgdYHSA0QH/xpq1Ggs3tzeqa/2Phbl9XXs96QCjA4wOMDrA6ACjA4wOMDrA6ACjA4wOMDrA6ACjA/q/u+24vo10Xac+FZ50gNEBRgcYHWB0gNEBzUbGaCz8sPxSXfv4KfcZqMjx4mew+qq6Eu0b7W6lfx9POsDoAKMDjA4wOsDogPQLpF03hdFY+PLF6+ra9x9X1bVonNz5XN/37bD+vGgsnM3rY2H0vK5netIBRgcYHWB0gNEBRgc0u2XMjoXRvkg0orXwP8/zpAOMDjA6wOgAowOMDmj2MfXoFvLk4nrdOjy66IbSkw4wOsDoAKMDjA4wOgD5+EsLB+/GvT5vebRK7/WkA4wOMDrA6ACjA4wOCEfG8fSuutZ1A/nr5r669mav/pGT6Aay77GwFU86wOgAowOMDjA6wOiAYfbbBsfT+CtnWvzv9fdvz6prLd6dbPHOZfGkM4wOMDrA6ACjA4wOMDogPUx3zffxHF+/Mj5eMCEeKnpBtPjVmOvH6ACjA4wOMDrA6IBmL5Bmr4xn863wynhdZP++4klnGB1gdIDRAUYHGL1vpZS/8GF1OTKsdsMAAAAASUVORK5CYII=",
  GI = [{
    id: 1,
    src: TI,
    title: "Beta Pixel",
    description: "Someone who's seen the First Pixel. Show respect. He has nightmares about cubes and flags."
  }, {
    id: 2,
    src: EI,
    title: "Pixel's 16 frens",
    description: "Invite 16 frens. A great company is the key to success!"
  }, {
    id: 3,
    src: DI,
    title: "Pixel Brotherhood",
    description: "Invite 64 frens. Where'd you get that charisma, buddy?"
  }, {
    id: 4,
    src: kI,
    title: "My pixel dudes",
    description: "Invite 128 frens. Admit it, are your relatives in the game too?"
  }, {
    id: 5,
    src: RI,
    title: "Thunder Pixel",
    description: "Paint 64,000 pixels. Is your finger on fire?"
  }, {
    id: 6,
    src: MI,
    title: "Master over Pixels",
    description: "Paint 128,000 pixels. Have you considered a career as a pixel artist?"
  }, {
    id: 7,
    src: UI,
    title: "Malevich",
    description: "Paint 512,000 pixels. Either the most dedicated artist or the most dedicated auto-clicker."
  }, {
    id: 11,
    src: OI,
    title: "Platinum Pixel",
    description: "Platinum League member. Your mom would be proud of you."
  }, {
    id: 13,
    src: QI,
    title: "Ambassador",
    description: "Invited 10,000 frens. You're either very friendly or a bot. A friendly bot?"
  }, {
    id: 14,
    src: FI,
    title: "Pixanos' Snap",
    description: "Use of Pixanos. Your snap destroyed half the world. Or did it save it?"
  }],
  zI = ({
    isPopupContent: t
  }) => {
    const {
      ready: n,
      data: s
    } = St(t);
    return e.jsx("div", {
      className: q.achievements_container,
      children: GI.map(a => e.jsx(BI, {
        item: a,
        completed: n && s.achievements && s.achievements[a.id]
      }, a.id))
    })
  },
  LI = () => e.jsxs("div", {
    className: q.no_content,
    children: ["Something will happen here,", e.jsx("br", {}), " but not now."]
  }),
  HI = ({
    active: t,
    isPopupContent: n = !0
  }) => e.jsxs("div", {
    className: q.tabs_content,
    children: [t === "info" && e.jsx(wI, {
      isPopupContent: n
    }), t === "achievements" && e.jsx(zI, {
      isPopupContent: n
    }), t === "inventory" && e.jsx(LI, {})]
  }),
  qI = ({
    isPopupContent: t = !0
  }) => {
    const [n, s] = A.useState("info");
    return e.jsxs("div", {
      style: {
        width: "100%"
      },
      children: [e.jsx(vI, {
        active: n,
        setActive: s
      }), e.jsx(yI, {}), e.jsx(HI, {
        active: n,
        isPopupContent: t
      })]
    })
  },
  YI = "_layout_c6k10_1",
  XI = "_close_button_c6k10_6",
  Rr = {
    layout: YI,
    close_button: XI
  },
  Mr = () => {
    const t = g();
    return e.jsx("div", {
      className: Rr.close_button,
      onPointerUp: () => {
        t(or())
      },
      children: e.jsx(I, {
        size: 26,
        children: ""
      })
    })
  },
  La = ({
    isPopupContent: t = !0
  }) => {
    const n = t ? "Painter" : "My Profile";
    return e.jsxs("div", {
      className: R(q.container, !t && q.page),
      children: [t && e.jsx(Mr, {}), e.jsx("div", {
        children: e.jsx("span", {
          className: q.title,
          children: n
        })
      }), e.jsx(xI, {
        isPopupContent: t
      }), e.jsx(gI, {
        isPopupContent: t
      }), e.jsx(_I, {
        isPopupContent: t
      }), e.jsx(fI, {
        isPopupContent: t
      }), e.jsx(qI, {
        isPopupContent: t
      })]
    })
  },
  VI = () => {
    const t = g(),
      n = c(Le);
    return A.useEffect(() => (n && n.id && t(A_.getListByUserId({
      userId: n.id
    })), () => {
      t(l_())
    }), [n]), e.jsx(ue, {
      children: e.jsx(La, {
        isPopupContent: !1
      })
    })
  },
  JI = "_container_1bw7p_1",
  WI = {
    container: JI
  },
  ZI = "_container_12mk9_1",
  KI = "_page_12mk9_13",
  $I = "_id_12mk9_17",
  eC = "_title_12mk9_22",
  tC = "_avatar_container_12mk9_28",
  nC = "_avatar_12mk9_28",
  sC = "_text_container_12mk9_39",
  aC = "_dot_12mk9_45",
  iC = "_user_name_12mk9_50",
  oC = "_squad_slug_12mk9_56",
  rC = "_your_squad_button_12mk9_62",
  cC = "_join_squad_button_12mk9_75",
  lC = "_red_12mk9_91",
  dC = "_divider_12mk9_95",
  uC = "_tabs_content_12mk9_101",
  AC = "_content_info_12mk9_105",
  mC = "_content_info_item_12mk9_112",
  pC = "_content_info_item_title_12mk9_116",
  hC = "_content_info_item_value_12mk9_120",
  gC = "_content_top_12mk9_127",
  _C = "_content_top_item_12mk9_140",
  xC = "_content_top_item_image_12mk9_150",
  fC = "_content_top_name_12mk9_156",
  vC = "_content_top_arrow_12mk9_162",
  yC = "_gray_12mk9_166",
  T = {
    container: ZI,
    page: KI,
    id: $I,
    title: eC,
    avatar_container: tC,
    avatar: nC,
    text_container: sC,
    dot: aC,
    user_name: iC,
    squad_slug: oC,
    your_squad_button: rC,
    join_squad_button: cC,
    red: lC,
    divider: dC,
    tabs_content: uC,
    content_info: AC,
    content_info_item: mC,
    content_info_item_title: pC,
    content_info_item_value: hC,
    content_top: gC,
    content_top_item: _C,
    content_top_item_image: xC,
    content_top_name: fC,
    content_top_arrow: vC,
    gray: yC
  },
  Ur = ({
    data: t,
    ready: n
  }) => {
    let s = tt;
    return n && t.squad.logo && t.squad.logo !== "" && (s = t.squad.logo), e.jsx("div", {
      className: T.avatar_container,
      children: e.jsx("img", {
        alt: "avatar",
        className: T.avatar,
        src: s
      })
    })
  },
  Or = ({
    data: t,
    ready: n
  }) => {
    if (!n) return e.jsx(We, {
      show: !n,
      children: e.jsx("div", {
        className: T.text_container,
        children: e.jsx("span", {
          className: T.user_name,
          children: "No name • @notpixel"
        })
      })
    });
    const a = (() => {
      var i;
      return Rn(((i = t == null ? void 0 : t.squad) == null ? void 0 : i.name) || "No name")
    })();
    return e.jsx("div", {
      className: T.text_container,
      children: e.jsx("span", {
        className: T.user_name,
        children: a
      })
    })
  },
  Qr = ({
    data: t,
    ready: n
  }) => {
    var a;
    return n ? ((a = t == null ? void 0 : t.squad) == null ? void 0 : a.slug) && t.squad.slug !== null ? e.jsx("div", {
      className: T.text_container,
      children: e.jsx(pn, {
        address: `${vt}?startapp=${btoa(`id=${t.squad.id}`)}`,
        display: t.squad.slug,
        limit: 18
      })
    }) : e.jsx("div", {
      className: T.text_container,
      children: e.jsx("span", {
        className: T.squad_slug,
        children: "No squad slug"
      })
    }) : e.jsx(We, {
      show: !n,
      children: e.jsx("div", {
        className: T.text_container,
        children: e.jsx("span", {
          children: "Loading..."
        })
      })
    })
  },
  Fr = ({
    data: t,
    ready: n
  }) => {
    const s = c(i => i.user.user);
    return n ? s !== null && s.squad.id !== null && s.squad.id === t.squad.id ? e.jsxs("div", {
      className: T.your_squad_button,
      onPointerUp: () => {
        ee(`https://t.me/${vt}?startapp=${btoa(`id=${t.squad.id}`)}`)
      },
      children: [e.jsx("span", {
        className: T.gray,
        children: "Your Squad."
      }), " ", e.jsx("span", {
        className: T.red,
        children: "Leave? "
      })]
    }) : e.jsx("button", {
      onPointerUp: () => {
        ee(`https://t.me/${vt}?startapp=${btoa(`id=${t.squad.id}`)}`)
      },
      className: T.join_squad_button,
      children: "Join squad"
    }) : null
  },
  wC = ({
    active: t,
    setActive: n
  }) => e.jsx(dn, {
    style: {},
    children: e.jsx(Fe, {
      active: t === "info",
      setActive: () => n("info"),
      children: "Info"
    })
  }),
  jC = () => e.jsx("div", {
    className: T.divider
  }),
  bC = ({
    data: t,
    ready: n
  }) => e.jsxs("div", {
    className: T.content_info,
    children: [e.jsxs("div", {
      className: T.content_info_item,
      children: [e.jsx("div", {
        className: T.content_info_item_title,
        children: "League"
      }), e.jsx("div", {
        className: T.content_info_item_value,
        children: n ? t.league : "-"
      })]
    }), e.jsxs("div", {
      className: T.content_info_item,
      children: [e.jsx("div", {
        className: T.content_info_item_title,
        children: "Place"
      }), e.jsx("div", {
        className: T.content_info_item_value,
        children: n ? Be({
          num: t.rank
        }) : 0
      })]
    }), e.jsxs("div", {
      className: T.content_info_item,
      children: [e.jsx("div", {
        className: T.content_info_item_title,
        children: "Score"
      }), e.jsx("div", {
        className: T.content_info_item_value,
        children: n ? Be({
          num: t.squad.scoredRepaints
        }) : 0
      })]
    }), e.jsxs("div", {
      className: T.content_info_item,
      children: [e.jsx("div", {
        className: T.content_info_item_title,
        children: "Members"
      }), e.jsx("div", {
        className: T.content_info_item_value,
        children: n ? Be({
          num: t.squad.players
        }) : 0
      })]
    }), e.jsxs("div", {
      className: T.content_info_item,
      children: [e.jsx("div", {
        className: T.content_info_item_title,
        children: "Pixels recolored"
      }), e.jsx("div", {
        className: T.content_info_item_value,
        children: n ? Be({
          num: t.squad.totalRepaints
        }) : 0
      })]
    }), e.jsxs("div", {
      className: T.content_info_item,
      children: [e.jsx("div", {
        className: T.content_info_item_title,
        children: "PX mined"
      }), e.jsx("div", {
        className: T.content_info_item_value,
        children: n ? Be({
          num: t.squad.totalBalance
        }) : 0
      })]
    })]
  }),
  NC = [{
    name: "123",
    avatar: Mt
  }, {
    name: "123",
    avatar: ""
  }, {
    name: "123",
    avatar: null
  }, {
    name: "123",
    avatar: Mt
  }, {
    name: "123",
    avatar: Mt
  }],
  IC = () => e.jsx("div", {
    className: T.content_top,
    children: NC.map((t, n) => {
      const s = t.avatar && t.avatar !== "" ? t.avatar : tt;
      return e.jsxs("div", {
        className: T.content_top_item,
        children: [e.jsx("img", {
          alt: "img",
          className: T.content_top_item_image,
          src: s
        }), e.jsxs("div", {
          className: T.content_top_name,
          children: [e.jsx("span", {
            className: T.gray,
            children: n + 1
          }), e.jsx("span", {
            className: T.gray,
            children: "•"
          }), e.jsx("span", {
            children: t.name
          })]
        }), e.jsx("div", {
          className: T.content_top_arrow,
          children: e.jsx(I, {
            children: ""
          })
        })]
      }, n)
    })
  }),
  CC = ({
    isPopupContent: t,
    active: n,
    data: s,
    ready: a
  }) => e.jsxs("div", {
    className: T.tabs_content,
    children: [n === "info" && e.jsx(bC, {
      isPopupContent: t,
      data: s,
      ready: a
    }), n === "top" && e.jsx(IC, {})]
  }),
  Gr = ({
    data: t,
    ready: n
  }) => {
    const [s, a] = A.useState("info");
    return e.jsxs("div", {
      style: {
        width: "100%"
      },
      children: [e.jsx(wC, {
        active: s,
        setActive: a
      }), e.jsx(jC, {}), e.jsx(CC, {
        active: s,
        data: t,
        ready: n
      })]
    })
  },
  PC = () => {
    const t = g(),
      n = c(o => o.user.user),
      a = c(o => o.squad.getInfoFetchStatus) === p.fulfilled,
      i = c(o => o.squad.info);
    return A.useEffect(() => {
      n && n.squad && n.squad.id && t(sa.getInfo({
        id: n.squad.id
      }))
    }, []), e.jsx(ue, {
      children: e.jsxs("div", {
        className: WI.container,
        children: [e.jsx(Ur, {
          data: i,
          ready: a
        }), e.jsx(Or, {
          data: i,
          ready: a
        }), e.jsx(Qr, {
          data: i,
          ready: a
        }), e.jsx(Fr, {
          data: i,
          ready: a
        }), e.jsx(Gr, {
          data: i,
          ready: a
        })]
      })
    })
  },
  SC = ({
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
  BC = ({
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
  TC = t => {
    const n = new Uint8Array(t.data);
    for (let s = 0; s < n.length; s += 4) {
      const a = n[s],
        i = n[s + 1],
        o = n[s + 2];
      if (n[s + 3] === 0) continue;
      let l = jt[0],
        d = 1 / 0;
      for (const h of jt) {
        const _ = en.deltaE(en(nn(a, i, o)), en(h));
        _ < d && (d = _, l = h)
      }
      const u = kt(l);
      t.data[s] = u.r, t.data[s + 1] = u.g, t.data[s + 2] = u.b, t.data[s + 3] = 255
    }
  },
  EC = ({
    loading: t,
    imageData: n,
    posX: s,
    posY: a
  }) => {
    const i = g(),
      o = J(),
      r = c(h => h.template.myTemplate),
      l = c(h => h.user.user),
      [d, u] = A.useState(!1);
    return e.jsx("div", {
      className: oe.file_button_container,
      children: e.jsx("button", {
        disabled: t || d,
        className: oe.file_button,
        onPointerUp: async () => {
          try {
            u(!0);
            const h = new Blob([n.data], {
              type: "application/octet-stream"
            });
            if ((await Ee.uploadTemplate({
                blob: h,
                posX: s,
                posY: a
              })).status === 200) {
              r && j.mainImage.worldTemplate.deleteTemplate(r.id);
              const y = await i(bt.getTemplateById({
                  id: l.id
                })),
                N = {
                  ...y.payload,
                  url: `${y.payload.url}?time=${Date.now()}`,
                  type: Te.my
                };
              i($g(N)), i(di()), await j.mainImage.worldTemplate.add(N), i(z({
                id: performance.now(),
                text: "Create successfully!",
                icon: ""
              })), o.push("/template")
            } else i(z({
              id: performance.now(),
              text: "Error, try again",
              icon: ""
            }));
            u(!1)
          } catch {
            i(z({
              id: performance.now(),
              text: "Use another coordinates",
              icon: ""
            })), u(!1)
          }
        },
        children: "Create template"
      })
    })
  },
  DC = ({
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
            wt(r) && a(r)
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
            wt(r) && a(r)
          },
          className: oe.coords_input
        })]
      })]
    })]
  })),
  kC = () => e.jsxs("div", {
    className: oe.instruction_container,
    children: [e.jsx("div", {
      className: oe.img_container,
      children: e.jsx("img", {
        alt: "img",
        className: oe.image,
        src: ia
      })
    }), e.jsx("div", {
      className: oe.instruction_text,
      children: "Upload a picture and create a template"
    })]
  }),
  RC = () => {
    g(), c(Le);
    const [t, n] = A.useState(null), [s, a] = A.useState(null), [i, o] = A.useState(null), [r, l] = A.useState(16), [d, u] = A.useState({
      x: "",
      y: ""
    }), [h, _] = A.useState(!1);
    return A.useEffect(() => {}, []), A.useEffect(() => {
      if (t !== null) {
        _(!0);
        const y = async () => {
          const N = document.createElement("canvas"),
            x = N.getContext("2d");
          x.imageSmoothingEnabled = !1;
          const w = t.width / t.height;
          let O, Q;
          w > 1 ? (O = r, Q = r / w) : (Q = r, O = r * w);
          const De = (r - O) / 2,
            ke = (r - Q) / 2;
          N.width = r, N.height = r, x.drawImage(t, De, ke, O, Q);
          const V = x.getImageData(0, 0, r, r);
          TC(V), x.putImageData(V, 0, 0), a(V), o(N.toDataURL())
        };
        setTimeout(() => {
          y().then(() => {
            _(!1)
          })
        }, 100)
      }
    }, [t, r]), e.jsxs(ue, {
      children: [i === null && e.jsx(kC, {}), i !== null && e.jsx(BC, {
        loading: h,
        dataUrl: i,
        templateSize: r
      }), i !== null && e.jsx($0, {
        templateSize: r,
        setTemplateSize: l
      }), i !== null && e.jsx(DC, {
        coords: d,
        setCoords: u,
        templateSize: r,
        setTemplateSize: l
      }), t === null && e.jsx(SC, {
        setFile: n,
        templateSize: r,
        loading: h
      }), t !== null && e.jsx(EC, {
        loading: h,
        imageData: s,
        posX: d.x,
        posY: d.y
      })]
    })
  },
  MC = "_layout_c4dhq_1",
  UC = "_container_c4dhq_9",
  OC = "_header_c4dhq_18",
  QC = "_bg_image_c4dhq_25",
  FC = "_title_c4dhq_34",
  GC = "_description_c4dhq_43",
  zC = "_timer_c4dhq_52",
  LC = "_timer_inner_c4dhq_61",
  HC = "_timer_text_c4dhq_69",
  qC = "_line_c4dhq_73",
  YC = "_requirements_title_c4dhq_79",
  XC = "_requirements_c4dhq_79",
  VC = "_item_c4dhq_94",
  JC = "_item_image_c4dhq_107",
  WC = "_main_info_c4dhq_113",
  ZC = "_other_criteria_c4dhq_120",
  KC = "_gray_c4dhq_125",
  $C = "_icon_c4dhq_130",
  eP = "_completed_icon_c4dhq_141",
  tP = "_not_completed_icon_c4dhq_145",
  D = {
    layout: MC,
    container: UC,
    header: OC,
    bg_image: QC,
    title: FC,
    description: GC,
    timer: zC,
    timer_inner: LC,
    timer_text: HC,
    line: qC,
    requirements_title: YC,
    requirements: XC,
    item: VC,
    item_image: JC,
    main_info: WC,
    other_criteria: ZC,
    gray: KC,
    icon: $C,
    completed_icon: eP,
    not_completed_icon: tP
  },
  jn = ({
    success: t
  }) => t ? e.jsx("div", {
    className: R(D.completed_icon, D.icon),
    children: e.jsx(I, {
      size: 14,
      children: ""
    })
  }) : e.jsx("div", {
    className: R(D.not_completed_icon, D.icon),
    children: e.jsx(I, {
      size: 14,
      children: ""
    })
  }),
  nP = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAIAAAABc2X6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAF42lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDYgNzkuMTY0NjQ4LCAyMDIxLzAxLzEyLTE1OjUyOjI5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjIuMiAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDI0LTEyLTExVDAwOjIzOjMyKzA0OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyNC0xMi0xMVQwMTowNzo1OSswNDowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyNC0xMi0xMVQwMTowNzo1OSswNDowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDplZWM0MWRiNi01NTc4LTA5NDQtOTEwMC0xZmFjNmI2OWU4ZjMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N2Y1OWJhYWItYjg5My01OTRjLWIzOGEtNmZhMzc5YTg0OWQ3IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6N2Y1OWJhYWItYjg5My01OTRjLWIzOGEtNmZhMzc5YTg0OWQ3Ij4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo3ZjU5YmFhYi1iODkzLTU5NGMtYjM4YS02ZmEzNzlhODQ5ZDciIHN0RXZ0OndoZW49IjIwMjQtMTItMTFUMDA6MjM6MzIrMDQ6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi4yIChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZWVjNDFkYjYtNTU3OC0wOTQ0LTkxMDAtMWZhYzZiNjllOGYzIiBzdEV2dDp3aGVuPSIyMDI0LTEyLTExVDAxOjA3OjU5KzA0OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjIuMiAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+UlXQ3AAAAMdJREFUeNrt2jEKgzAUBmAv4+rmAdw7ufUMTr1Dj+MRO7hJhwp95CWCfvBPj4TwLT8hpOuH6VbpgIGBgYGBgYGBgYGBgYGBgYGBgS8JXtbP6QEGBs4Bz693KFl7gYGB80srurf2WcDAwL8zPp57WoK/zwUGBs55AIiWSnRNeVEBAwNnFlh0TXlRAQMDZ+L/mecigYGBSy8kJXNgYOBzwEcFdpR6RQUMDFwL3wYJDAxcC3+Ln3jAwD6XAgMDAwMDAwMDAwMDt84G/cS8L/nGwNwAAAAASUVORK5CYII=",
  sP = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAABfElEQVR4nO3csU7CYBRA4UrYZOIB3NBNmdzrbHgZnsO3YTS6uznCCGElDDrLxNBL0lIO7f/HnG8Dg21OLjetEG8mj+VfoYsNTMcYEDIgZEDIgJABIQNCBoQMCBkQMiBkQMiAkAEhA0IGhAwIGRAyIDTM9cRW3x+Vx/dPL8nOpY4TCBkQMiCUzQ6MOy/6Wowqzzy//vR3cjWcQMiAkAGhZDuwaeftN7Pan+eyE51AyICQAaGr7cCmndakaefR42/fp5XH5XyMjnfkBEIGhAwIdfYd6Xid1rff5bpyxGvtvMgJhAwIGRDq7F6Y3pu23aF97bzICYQMCBkQyuYzkc+3XXgm7XXkuZxAyICQAaHeduDpjvsfsv1yUbwwjm4f7lKc1gnfwpABoc7+Hth257W9d+3695/LCYQMCBkQSnYZQ3dSfH2q60wnEDIgZEDI/50FOYGQASEDQgaEDAgZEDIgZEDIgJABIQNCBoQMCBkQMiBkQMiAkAEhAxJFURwAJr49NLZT3VgAAAAASUVORK5CYII=",
  aP = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAABF0lEQVR4nO3csW3CYBhFUYNYhZaSOkyRGdmCOkslLfxNpFxsYnNORwW6+vREY++Op8v3xJ/tpWsEjASMBIwEjASMBIwEjASMBIwEjASMBIwEjASMBIwEjASMBIwEjASMDqv+9XfOH58Pn79u10W+1wVGAkYCRqvdwN82b6lNdIGRgJGA0WIbWDepbt5cm+gCIwEjAaPZNnDuzfI/cCMEjASMnraB77J5IxcYCRgJGM32pNJWN2/kAiMBIwGjxZ7W3MrmjVxgJGAkYPSyJ9bXunkjFxgJGAkY/Zu3dqxl80YuMBIwEjDy5qLIBUYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgIW0zT9AOlGWxe1B8qHAAAAAElFTkSuQmCC",
  iP = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAABZUlEQVR4nO3cz4nCQBhA8cliBcI2sFfBsx7FHrYFSxArEDvQFuzBs54Ft4hdsIV4Tg4O8eWbjfB+t+CfwONjmBG1SvvfOullH6ZjDAgZEDIgZEDIgJABIQNCBoQMCBkQMiBkQMiAkAEhA0IGhAwIGRAyIGRAaFT6hvXq8+nj1eEv9PV9cwIhA0IGhAwIGRAyIGRAqPg+MCe3zxsaJxAyIGRAKHwNzK1pk/WxcX3bfaPnt+8XfTZ2AiEDQgaEel8Du+7jfr4Woc+PXhOdQMiAkAGhfz8Ld10zh3ZWdgIhA0IGhHpfA+fbU+P6vFl2ejz6fmk8RfdrcwIhA0IGhMJ/sT67XxvX2TWqo9z7XXpe89qcQMiAkAGh4v/aEX2W9fuBb8aAkAGh4p8H0n1fVvC+r80JhAwIGRAqvgZGn01LcwIhA0IGhAwIGRAyIGRAyICQASEDQgaEDAgZEDIgZEDIgJABiZTSA9erPYxaPJ1yAAAAAElFTkSuQmCC",
  oP = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAABkklEQVR4nO3cwUnEQBSA4VmxAsEGvC541qPYgy1YwrIViB1oC/bgWc+CFqFgC9lznixx8s9L5vB/t4Am7M/jMbuHbMrT91A024npGANCBoQMCBkQMiBkQMiAkAEhA0IGhAwIGRAyIGRAyICQASEDQgaEDAgZEDptdaPh/nytzzDL5vmnyX2cQMiAkAGhZjsw2u5e0P9/Pt6NrlvfrxUnEDIgZEAobQfGnUPPXV8XN1V/v9S51AmEDAgZEGq2A+M5LevcNdefc2TlTj3GCYQMCBkQarYDp85p8VzW6ve4Y/ePas+R/+UEQgaEDAilfRe+fngdXb/tb3M/ycTzy9llynOcQMiAkAGhtB34HnZO3ElD2Im158J47ov3j8/P4gRCBoQMCKXtwCh7Jy218yInEDIgZEBotbd2XP1+jK5rvyuvde6LnEDIgJABoW7eXDS1E3vZeZETCBkQMiDU7dvb4k7sZedFTiBkQMiA0GK/B9bqdedFTiBkQMiAkAEhA0IGhAwIGRAyIGRAyICQASEDEqWUA5NwRdaPa632AAAAAElFTkSuQmCC",
  rP = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAABFElEQVR4nO3ZwU0DMRRAQQdRQaS0wZ0zxVBDKqAFKIZzqAWKCC3EPBk50sx9V96nL2stH8b793XwZw/SNQJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkYCRgJGAkaPq158fT391zfc5PDxs+S9JjASMBIwEjASMBIwEjASMBIwEjASMFp2Fp71/PY59cTl/LLDsk1gJWAkYLTNHvh1fNpgFfNMYCRgJGAkYCRgJGAkYLTNf+Bu98i3MoGRgJGAkYCRgJGAkYCRgJGAkYCRgNGys/DsPe9yi+5cTGAkYCRgtGwPvNd73lkmMBIwEjASMBIwEjASMBIwEjASMBIwEjASMBIwEjASMBKwGGP8AtVUDnVJr20VAAAAAElFTkSuQmCC",
  cP = "/assets/gp_ase_f_outl-FdQpX43h.gif",
  lP = () => {
    const t = g(),
      n = J(),
      s = c(Zs),
      a = c(Ws),
      i = c(x => x.user.pixelCoins),
      o = c(ni.selectAll),
      r = c(x => x.daily.getDailyListFetchStatus),
      l = i >= 1e5,
      d = c(x => x.mining.tasks[v.spendStars]),
      u = c(x => x.mining.tasks[v.spendTokens]),
      h = c(x => x.mining.tasks[v.walletVerification]);
    A.useEffect(() => {
      (r === p.idle || r === p.rejected) && t(jr.getList())
    }, [r]);
    let _ = 0,
      y = 0;
    i >= 1e5 && (_ += 1), h && (_ += 1), o.forEach(x => {
      x.timestamp && (y += 1)
    });
    const N = () => {
      const x = `${window.location.origin}/stars?initData=${btoa(window.Telegram.WebApp.initData)}`;
      Ct(x)
    };
    return e.jsx(ue, {
      children: e.jsx("div", {
        className: D.layout,
        children: e.jsxs("div", {
          className: D.container,
          children: [e.jsxs("div", {
            className: D.header,
            children: [e.jsx("div", {}), e.jsx("img", {
              alt: "image",
              src: cP,
              className: D.bg_image
            }), e.jsx("div", {
              className: D.title,
              children: "AIRDROP"
            }), e.jsx("div", {
              className: D.description,
              children: "Meet the requirements to get the PX Airdrop"
            }), e.jsx("div", {
              className: D.timer,
              children: e.jsxs("div", {
                className: D.timer_inner,
                children: [e.jsx(I, {
                  children: ""
                }), e.jsx("span", {
                  className: D.timer_text,
                  children: "Mining will end on Dec. 20"
                })]
              })
            })]
          }), e.jsx("div", {
            className: D.line
          }), e.jsxs("div", {
            className: D.requirements_title,
            children: [e.jsx("div", {
              children: "Required"
            }), e.jsxs("div", {
              className: D.gray,
              children: [_, "/3 completed to get airdrop"]
            })]
          }), e.jsxs("div", {
            className: D.requirements,
            children: [e.jsxs("div", {
              className: D.item,
              children: [e.jsx("div", {
                children: e.jsx("img", {
                  className: D.item_image,
                  src: rP
                })
              }), e.jsx("div", {
                className: D.main_info,
                children: e.jsxs("div", {
                  children: ["Total balance: 100 000 ", e.jsx(U, {})]
                })
              }), e.jsx(jn, {
                success: l
              })]
            }), e.jsxs("div", {
              className: D.item,
              onPointerUp: () => {
                n.push("/claiming"), setTimeout(() => {
                  const x = document.getElementById("ton_wallet_connect_task_div");
                  x && x.scrollIntoView({
                    block: "center"
                  })
                }, 100)
              },
              children: [e.jsx("div", {
                children: e.jsx("img", {
                  className: D.item_image,
                  src: oP
                })
              }), e.jsx("div", {
                className: D.main_info,
                children: e.jsx("div", {
                  children: "Connect TON"
                })
              }), e.jsx(jn, {
                success: h
              })]
            }), e.jsxs("div", {
              className: D.item,
              children: [e.jsx("div", {
                children: e.jsx("img", {
                  className: D.item_image,
                  src: iP
                })
              }), e.jsx("div", {
                className: D.main_info,
                children: e.jsxs("div", {
                  children: [e.jsx("span", {
                    children: "Time-limited check"
                  }), " ", e.jsx("span", {
                    className: D.gray,
                    children: "• Dec. 16"
                  })]
                })
              }), e.jsx(jn, {
                success: !1
              })]
            })]
          }), e.jsxs("div", {
            className: D.requirements_title,
            children: [e.jsx("div", {
              children: "Optional"
            }), e.jsx("div", {
              className: D.gray,
              children: "boost your airdrop"
            })]
          }), e.jsxs("div", {
            className: D.requirements,
            children: [e.jsxs("div", {
              className: D.item,
              onPointerUp: () => {
                n.push("/stars")
              },
              children: [e.jsx("div", {
                children: e.jsx("img", {
                  className: D.item_image,
                  src: sP
                })
              }), e.jsx("div", {
                className: D.main_info,
                children: "Purchases for Stars"
              }), e.jsx(jn, {
                success: d
              })]
            }), e.jsxs("div", {
              className: D.item,
              onPointerUp: N,
              children: [e.jsx("div", {
                children: e.jsx("img", {
                  className: D.item_image,
                  src: nP
                })
              }), e.jsx("div", {
                className: D.main_info,
                children: "Purchases for crypto"
              }), e.jsx(jn, {
                success: u
              })]
            }), e.jsxs("div", {
              className: D.item,
              onPointerUp: () => {
                n.push("/daily")
              },
              children: [e.jsx("div", {
                children: e.jsx("img", {
                  className: D.item_image,
                  src: aP
                })
              }), e.jsx("div", {
                className: D.main_info,
                children: "Daily check-ins"
              }), e.jsxs("div", {
                className: D.gray,
                children: [y, " completed"]
              })]
            })]
          }), e.jsx("div", {
            className: R(D.other_criteria, D.gray),
            children: "Other activity criteria will also be considered"
          }), e.jsx("div", {
            style: {
              height: 40 + s.top + a.top
            }
          })]
        })
      })
    })
  },
  dP = "_general_info_container_1u2nd_1",
  uP = "_img_container_1u2nd_7",
  AP = "_image_1u2nd_17",
  mP = "_image_cup_1u2nd_23",
  pP = "_image_glow_container_1u2nd_29",
  hP = "_image_glow_1u2nd_29",
  gP = "_rotate_1u2nd_1",
  _P = "_image_glow_reverse_1u2nd_48",
  xP = "_title_1u2nd_53",
  fP = "_description_container_1u2nd_60",
  vP = "_description_1u2nd_60",
  yP = "_gold_1u2nd_73",
  Xe = {
    general_info_container: dP,
    img_container: uP,
    image: AP,
    image_cup: mP,
    image_glow_container: pP,
    image_glow: hP,
    rotate: gP,
    image_glow_reverse: _P,
    title: xP,
    description_container: fP,
    description: vP,
    gold: yP
  },
  wP = "_info_layout_1p9dg_1",
  jP = {
    info_layout: wP
  },
  bP = t => {
    const n = new Uint8Array(t.data);
    for (let s = 0; s < n.length; s += 4) {
      const a = n[s],
        i = n[s + 1],
        o = n[s + 2];
      if (n[s + 3] === 0) continue;
      let l = jt[0],
        d = 1 / 0;
      for (const h of jt) {
        const _ = en.deltaE(en(nn(a, i, o)), en(h));
        _ < d && (d = _, l = h)
      }
      const u = kt(l);
      t.data[s] = u.r, t.data[s + 1] = u.g, t.data[s + 2] = u.b, t.data[s + 3] = 255
    }
  },
  NP = "_instruction_container_17lvx_1",
  IP = "_img_container_17lvx_9",
  CP = "_img_inner_container_17lvx_16",
  PP = "_image_17lvx_22",
  SP = "_image_status_17lvx_30",
  BP = "_image_status_rejected_17lvx_45",
  TP = "_image_status_review_17lvx_49",
  EP = "_image_status_approved_17lvx_53",
  DP = "_copy_button_container_17lvx_57",
  kP = "_button_copy_17lvx_65",
  RP = "_gray_17lvx_71",
  MP = "_preview_container_17lvx_75",
  UP = "_preview_image_container_17lvx_81",
  OP = "_preview_image_17lvx_81",
  QP = "_preview_image_loader_17lvx_94",
  FP = "_template_size_17lvx_109",
  GP = "_template_title_17lvx_117",
  zP = "_template_size_container_17lvx_122",
  LP = "_template_size_item_17lvx_128",
  HP = "_template_size_item_active_17lvx_136",
  qP = "_template_coords_17lvx_141",
  YP = "_template_coordinates_title_17lvx_151",
  XP = "_template_coords_container_17lvx_156",
  VP = "_coords_item_17lvx_163",
  JP = "_coords_input_17lvx_169",
  WP = "_file_button_container_17lvx_178",
  ZP = "_file_button_17lvx_178",
  se = {
    instruction_container: NP,
    img_container: IP,
    img_inner_container: CP,
    image: PP,
    image_status: SP,
    image_status_rejected: BP,
    image_status_review: TP,
    image_status_approved: EP,
    copy_button_container: DP,
    button_copy: kP,
    gray: RP,
    preview_container: MP,
    preview_image_container: UP,
    preview_image: OP,
    preview_image_loader: QP,
    template_size: FP,
    template_title: GP,
    template_size_container: zP,
    template_size_item: LP,
    template_size_item_active: HP,
    template_coords: qP,
    template_coordinates_title: YP,
    template_coords_container: XP,
    coords_item: VP,
    coords_input: JP,
    file_button_container: WP,
    file_button: ZP
  },
  Wt = {
    approved: "approved",
    review: "review",
    rejected: "rejected"
  },
  KP = () => {
    const t = g(),
      n = c(a => a.tournament.myTemplate);
    let s = Wt.review;
    return n && n.approved && (s = Wt.approved), n && (n.deletedAt || n.approved === !1) && (s = Wt.rejected), e.jsxs("div", {
      className: se.instruction_container,
      children: [n && e.jsx("div", {
        children: "Current template:"
      }), e.jsx("div", {
        className: se.img_container,
        children: e.jsxs("div", {
          className: se.img_inner_container,
          children: [e.jsx("img", {
            alt: "img",
            className: se.image,
            src: n ? `${n.url}?time=${Date.now()}` : ia,
            onPointerUp: () => {
              n.id && n.id !== 0 && t(oi(n))
            }
          }), s === Wt.review && e.jsx("div", {
            className: R(se.image_status, se.image_status_review),
            children: "On review"
          }), s === Wt.rejected && e.jsx("div", {
            className: R(se.image_status, se.image_status_rejected),
            children: "Rejected"
          }), s === Wt.approved && e.jsx("div", {
            className: R(se.image_status, se.image_status_approved),
            children: "Approved"
          })]
        })
      }), e.jsx("div", {
        className: se.copy_button_container,
        children: e.jsx(Gt, {
          url: `${Nt}?startapp=f${n==null?void 0:n.id}_t`,
          className: se.button_copy,
          text: "Copy template link"
        })
      })]
    })
  },
  $P = ({
    dataUrl: t,
    loading: n,
    templateSize: s
  }) => e.jsx("div", {
    className: se.preview_container,
    children: e.jsxs("div", {
      className: se.preview_image_container,
      children: [e.jsx("img", {
        alt: "templateImage",
        id: "templateImage",
        className: se.preview_image,
        src: t
      }), n && e.jsx("div", {
        className: se.preview_image_loader,
        children: "Loading..."
      })]
    })
  }),
  eS = ({
    templateSize: t,
    setTemplateSize: n
  }) => {
    const [s] = A.useState([t]);
    return e.jsxs("div", {
      className: se.template_size,
      children: [e.jsx("div", {
        className: se.template_title,
        children: "Template Size"
      }), e.jsx("div", {
        className: se.template_size_container,
        children: s.map(a => {
          const i = [se.template_size_item];
          return t === a && i.push(se.template_size_item_active), e.jsx("div", {
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
  tS = ({
    coords: t,
    setCoords: n
  }) => null,
  nS = ({
    setFile: t,
    loading: n
  }) => {
    if (c(we)) return null;
    const a = ["image/png", "image/webp", "image/svg+xml", "image/gif", "image/bmp", "image/tiff"];
    return e.jsxs("div", {
      className: se.file_button_container,
      children: [e.jsx("input", {
        type: "file",
        id: "custom-input",
        accept: a.join(", "),
        disabled: n,
        onChange: i => {
          var o;
          try {
            const r = (o = i.target.files) == null ? void 0 : o[0];
            if (!r) return;
            const l = new FileReader;
            l.addEventListener("load", d => {
              const u = document.createElement("img");
              u.addEventListener("load", () => {
                t(u)
              }), u.src = d.target.result
            }, !1), l.readAsDataURL(r)
          } catch (r) {
            console.error(r)
          }
        },
        hidden: !0
      }), e.jsx("label", {
        htmlFor: "custom-input",
        id: "choose-file",
        className: se.file_button,
        children: "Upload a picture"
      })]
    })
  },
  sS = ({
    loading: t,
    imageData: n,
    posX: s,
    posY: a,
    setFile: i,
    setDataUrl: o
  }) => {
    const r = g();
    J();
    const l = c(_ => _.user.user),
      [d, u] = A.useState(!1);
    return c(we) ? null : e.jsx("div", {
      className: se.file_button_container,
      children: e.jsx("button", {
        disabled: t || d,
        className: se.file_button,
        onPointerUp: async () => {
          try {
            u(!0);
            const _ = new Blob([n.data], {
              type: "application/octet-stream"
            });
            (await Ee.uploadTournamentTemplate({
              blob: _,
              posX: s,
              posY: a
            })).status === 200 ? (o(null), i(null), r(z({
              id: performance.now(),
              text: "Create successfully!",
              icon: ""
            })), r(Ge.getMyTemplate({
              id: l.id
            }))) : r(z({
              id: performance.now(),
              text: "Error, try again",
              icon: ""
            })), u(!1)
          } catch {
            r(z({
              id: performance.now(),
              text: "Error, try again",
              icon: ""
            })), u(!1)
          }
        },
        children: "Create template"
      })
    })
  },
  aS = () => {
    g(), c(Le);
    const t = c(On),
      n = Xa[t],
      [s, a] = A.useState(null),
      [i, o] = A.useState(null),
      [r, l] = A.useState(null),
      [d, u] = A.useState((n == null ? void 0 : n.templateSize) || 256),
      [h, _] = A.useState({
        x: 0,
        y: 0
      }),
      [y, N] = A.useState(!1);
    return A.useEffect(() => {
      if (s !== null) {
        N(!0);
        const x = async () => {
          const w = document.createElement("canvas"),
            O = w.getContext("2d");
          O.imageSmoothingEnabled = !1;
          const Q = s.width / s.height;
          let De, ke;
          Q > 1 ? (De = d, ke = d / Q) : (ke = d, De = d * Q);
          const V = (d - De) / 2,
            Ze = (d - ke) / 2;
          w.width = d, w.height = d, O.drawImage(s, V, Ze, De, ke);
          const zt = O.getImageData(0, 0, d, d);
          bP(zt), O.putImageData(zt, 0, 0), o(zt), l(w.toDataURL())
        };
        setTimeout(() => {
          x().then(() => {
            N(!1)
          })
        }, 100)
      }
    }, [s, d]), e.jsxs("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 14
      },
      children: [r === null && e.jsx(KP, {}), r !== null && e.jsx($P, {
        loading: y,
        dataUrl: r,
        templateSize: d
      }), r !== null && e.jsx(eS, {
        templateSize: d,
        setTemplateSize: u
      }), r !== null && e.jsx(tS, {
        coords: h,
        setCoords: _,
        templateSize: d,
        setTemplateSize: u
      }), e.jsxs("div", {
        style: {
          marginTop: 20,
          textAlign: "center"
        },
        children: ["To participate in the new round, please upload a new template! Size:", n == null ? void 0 : n.templateSize, "х", n == null ? void 0 : n.templateSize, ".Templates with no artistic value will be rejected."]
      }), s === null && e.jsx(nS, {
        setFile: a,
        templateSize: d,
        loading: y
      }), s !== null && e.jsx(sS, {
        loading: y,
        imageData: i,
        setFile: a,
        setDataUrl: l,
        posX: h.x,
        posY: h.y
      })]
    })
  },
  iS = "_layout_1c7e5_1",
  oS = "_container_1c7e5_5",
  rS = "_button_container_1c7e5_11",
  cS = "_button_1c7e5_11",
  lS = "_end_of_list_button_1c7e5_27",
  et = {
    layout: iS,
    container: oS,
    button_container: rS,
    button: cS,
    end_of_list_button: lS
  },
  dS = "_template_item_container_1c93x_1",
  uS = "_template_item_inner_1c93x_12",
  AS = "_template_item_picked_1c93x_28",
  mS = "_template_item_rejected_1c93x_43",
  pS = "_template_item_shadow_1c93x_58",
  hS = "_template_rank_1c93x_70",
  gS = "_template_recolors_1c93x_90",
  _S = "_template_recolors_pixel_1c93x_105",
  xS = "_template_image_1c93x_112",
  it = {
    template_item_container: dS,
    template_item_inner: uS,
    template_item_picked: AS,
    template_item_rejected: mS,
    template_item_shadow: pS,
    template_rank: hS,
    template_recolors: gS,
    template_recolors_pixel: _S,
    template_image: xS
  },
  fi = ({
    item: t,
    rank: n,
    repaints: s,
    style: a = {}
  }) => {
    const i = g(),
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
      className: it.template_item_container,
      style: {
        ...a
      },
      onPointerUp: async () => {
        l.current || t.id && t.id !== 0 && i(oi(t))
      },
      children: [e.jsx("div", {
        className: it.template_item_inner,
        children: e.jsx("img", {
          alt: "image",
          className: it.template_image,
          src: `${t.url}`
        })
      }), r && t.approved !== !1 && e.jsx("div", {
        className: it.template_item_picked,
        children: "Picked"
      }), t.approved === !1 && e.jsx("div", {
        className: it.template_item_rejected,
        children: "Rejected"
      }), n && e.jsx("div", {
        className: it.template_rank,
        children: n
      }), s !== void 0 && s !== 0 && e.jsx("div", {
        className: it.template_item_shadow
      }), s !== void 0 && s !== 0 && e.jsxs("div", {
        className: it.template_recolors,
        children: [e.jsx("div", {
          className: it.template_recolors_pixel
        }), tn(s)]
      })]
    })
  },
  fS = () => {
    const t = g(),
      n = A.useRef(null),
      s = c(r => r.tournament.approvedTemplatesListStatus),
      a = c(r => r.tournament.approvedTemplatesListOffset),
      i = c(r => r.tournament.approvedTemplatesListLimit),
      o = c(r => r.tournament.approvedTemplatesListTotal);
    return A.useEffect(() => {}, [s, a, i, o]), a >= o && s !== p.pending ? e.jsx("div", {
      className: et.button_container,
      children: e.jsx("button", {
        className: et.end_of_list_button,
        children: "That's all fren"
      })
    }) : e.jsx("div", {
      className: et.button_container,
      children: e.jsx("button", {
        ref: n,
        disabled: s === p.pending,
        className: et.button,
        onPointerUp: () => {
          t(Ge.getApprovedList({
            offset: a,
            limit: i
          }))
        },
        children: s === p.pending ? "Loading..." : "Load more"
      })
    })
  },
  vS = () => {
    const t = g(),
      n = c(i => i.tournament.approvedTemplatesListOffset),
      s = c(i => i.tournament.approvedTemplatesListLimit),
      a = c(Qo.selectAll);
    return A.useEffect(() => (t(Ge.getApprovedList({
      offset: n,
      limit: s
    })), () => {
      t($o())
    }), []), e.jsxs("div", {
      className: et.layout,
      children: [e.jsx("div", {
        className: et.container,
        children: a.map((i, o) => e.jsx(fi, {
          item: i,
          rank: o + 1,
          repaints: i.repaints,
          approved: !0
        }, i.id))
      }), e.jsx(fS, {})]
    })
  },
  yS = () => {
    const t = g(),
      n = c(s => s.tournament.randomTemplatesListStatus);
    return e.jsx("div", {
      className: et.button_container,
      children: e.jsx("button", {
        disabled: n === p.pending,
        className: et.button,
        onPointerUp: () => {
          t(Ge.getRandomList())
        },
        children: "Show another templates"
      })
    })
  },
  wS = () => {
    const t = c(n => n.tournament.selectedTemplate);
    return t ? e.jsx(fi, {
      item: t
    }) : null
  },
  jS = () => {
    const t = g(),
      n = c(Qo.selectAll),
      a = c(i => i.tournament.selectedTemplate) ? 15 : 16;
    return A.useEffect(() => (t(Ge.getRandomList()), () => {
      t($o())
    }), []), e.jsxs("div", {
      className: et.layout,
      children: [e.jsxs("div", {
        className: et.container,
        children: [e.jsx(wS, {}), n.map((i, o) => o + 1 > a ? null : e.jsx(fi, {
          item: i
        }, i.id))]
      }), e.jsx(yS, {})]
    })
  },
  bS = "_round_info_container_1d52c_1",
  NS = "_title_1d52c_7",
  IS = "_description_1d52c_12",
  CS = "_round_status_container_1d52c_17",
  pt = {
    round_info_container: bS,
    title: NS,
    description: IS,
    round_status_container: CS
  },
  PS = "_round_indicator_mgwmo_1",
  SS = "_round_indicator_wait_mgwmo_37",
  zr = {
    round_indicator: PS,
    round_indicator_wait: SS
  },
  BS = () => e.jsx("div", {
    className: zr.round_indicator_wait
  }),
  Lr = () => e.jsx("div", {
    className: zr.round_indicator
  }),
  TS = () => {
    const t = c(we),
      n = c(On);
    return t ? e.jsxs("div", {
      className: pt.round_info_container,
      children: [e.jsxs("div", {
        children: [e.jsxs("div", {
          className: pt.title,
          children: ["Top ", Xa[t].templateThreshold, " ", "templates will win"]
        }), e.jsx("div", {
          className: pt.description,
          children: "Most active painters gets rewarded"
        })]
      }), e.jsxs("div", {
        className: pt.round_status_container,
        children: [e.jsx(Lr, {}), " on"]
      })]
    }) : e.jsxs("div", {
      className: pt.round_info_container,
      children: [e.jsxs("div", {
        children: [e.jsxs("div", {
          className: pt.title,
          children: ["Preparing round ", n]
        }), e.jsx("div", {
          className: pt.description,
          children: "Select one template"
        })]
      }), e.jsxs("div", {
        className: pt.round_status_container,
        children: [e.jsx(BS, {}), " Soon"]
      })]
    })
  },
  ES = () => {
    const t = c(we),
      n = c(s => s.tournament.periodsStatus);
    return e.jsxs("div", {
      children: [e.jsx(TS, {}), t && n === p.fulfilled && e.jsx(vS, {}), !t && n === p.fulfilled && e.jsx(jS, {})]
    })
  },
  DS = "_soon_la5q2_1",
  kS = "_active_round_instruction_la5q2_11",
  RS = "_not_active_round_instruction_la5q2_19",
  MS = "_round_container_la5q2_25",
  US = "_round_title_la5q2_33",
  OS = "_round_title_text_la5q2_38",
  QS = "_round_indicator_la5q2_43",
  FS = "_round_status_success_la5q2_49",
  GS = "_round_status_fail_la5q2_60",
  zS = "_success_la5q2_71",
  LS = "_fail_la5q2_75",
  HS = "_gray_la5q2_79",
  qS = "_round_main_info_la5q2_83",
  YS = "_round_image_container_la5q2_89",
  XS = "_round_image_la5q2_89",
  VS = "_round_lines_container_la5q2_103",
  JS = "_round_line_la5q2_103",
  WS = "_divider_la5q2_117",
  ZS = "_pixels_number_la5q2_124",
  KS = "_pixel_la5q2_124",
  $S = "_past_rounds_la5q2_136",
  eB = "_past_rounds_divider_la5q2_145",
  L = {
    soon: DS,
    active_round_instruction: kS,
    not_active_round_instruction: RS,
    round_container: MS,
    round_title: US,
    round_title_text: OS,
    round_indicator: QS,
    round_status_success: FS,
    round_status_fail: GS,
    success: zS,
    fail: LS,
    gray: HS,
    round_main_info: qS,
    round_image_container: YS,
    round_image: XS,
    round_lines_container: VS,
    round_line: JS,
    divider: WS,
    pixels_number: ZS,
    pixel: KS,
    past_rounds: $S,
    past_rounds_divider: eB
  },
  Hr = ({
    result: t
  }) => {
    const n = g(),
      s = c(we);
    if (!t) return null;
    const a = t.round_id,
      i = t.repaints_to_win - t.repaints,
      o = t.rank <= t.rank_to_win && t.rank !== 0,
      r = t.template,
      l = r.rank;
    let d = r.lastSurvivalRank;
    a === 1 && (d = 512), a === 2 && (d = 256), a === 3 && (d = 128);
    const u = l <= d,
      h = r.lastSurvivalRepaints - r.repaints,
      _ = o && u,
      y = s && s === a,
      N = y ? "Winning" : "Won",
      x = y ? "😔 Losing" : "😔 Lost";
    return e.jsxs("div", {
      className: L.round_container,
      onPointerUp: () => {
        r && r.id && r.id !== 0 && n(oi(r))
      },
      children: [e.jsxs("div", {
        className: L.round_title,
        children: [e.jsxs("div", {
          className: L.round_title_text,
          children: ["Round ", a, " ", y ? "is on" : "has ended"]
        }), e.jsx("div", {
          className: L.round_indicator,
          children: y && e.jsx(Lr, {})
        }), _ && e.jsx("div", {
          className: R(L.round_status_success, L.success),
          children: N
        }), !_ && e.jsx("div", {
          className: R(L.round_status_fail, L.fail),
          children: x
        })]
      }), e.jsxs("div", {
        className: L.round_main_info,
        children: [e.jsx("div", {
          className: L.round_image_container,
          children: e.jsx("img", {
            alt: "image",
            className: L.round_image,
            src: t.template.url
          })
        }), e.jsxs("div", {
          className: L.round_lines_container,
          children: [e.jsxs("div", {
            className: R(L.round_line),
            children: [e.jsx("div", {
              className: R(L.gray),
              children: "Template rank:"
            }), e.jsxs("div", {
              className: R(u ? L.success : L.fail),
              children: ["👑 ", l]
            })]
          }), e.jsxs("div", {
            className: L.round_line,
            children: [e.jsx("div", {
              className: R(L.gray),
              children: "Pixels to win"
            }), e.jsx("div", {
              children: u ? "In the zone" : tn(h)
            })]
          }), e.jsx("div", {
            className: L.divider
          }), e.jsxs("div", {
            className: L.round_line,
            children: [e.jsx("div", {
              className: R(L.gray),
              children: "Your position:"
            }), e.jsx("div", {
              className: R(o ? L.success : L.fail),
              children: t.rank
            })]
          }), e.jsxs("div", {
            className: L.round_line,
            children: [e.jsx("div", {
              className: R(L.gray),
              children: "Pixels to win"
            }), e.jsxs("div", {
              className: L.pixels_number,
              children: [e.jsx("div", {
                className: L.pixel
              }), e.jsx("div", {
                children: o ? "In the zone" : tn(i)
              })]
            })]
          })]
        })]
      })]
    })
  },
  tB = () => {
    const t = c(tr);
    return t ? e.jsx(Hr, {
      result: t
    }) : null
  },
  nB = () => {
    const t = c(Sh),
      n = c(On);
    return t ? e.jsxs(ae.Fragment, {
      children: [e.jsxs("div", {
        className: L.past_rounds,
        children: [e.jsx("div", {
          className: L.past_rounds_divider
        }), e.jsx("div", {
          children: "Past rounds"
        }), e.jsx("div", {
          className: L.past_rounds_divider
        })]
      }), t.map(s => n && n === s.round_id ? null : e.jsx(Hr, {
        result: s
      }, s.round_id))]
    }) : null
  },
  sB = () => {
    const t = c(we);
    if (!t) return null;
    const n = Xa[t];
    return e.jsxs("div", {
      className: L.active_round_instruction,
      children: ["Top ", n.templateThreshold, " templates and their most ", e.jsx("br", {}), " active painters earn rewards in Round ", t]
    })
  },
  aB = () => {
    const t = c(we),
      n = c(On),
      s = _i(new Date(Date.UTC(2024, 10, 30, 9, 0, 0)));
    return t ? null : e.jsxs("div", {
      className: R(L.round_container, L.not_active_round_instruction),
      children: [e.jsxs("span", {
        className: L.round_title_text,
        children: ["Round ", n, " will start ", s, "."]
      }), e.jsx("span", {
        className: L.gray,
        children: "It's time to pick a template."
      })]
    })
  },
  iB = () => {
    const t = g(),
      n = c(s => s.tournament.resultsStatus);
    return A.useEffect(() => {
      n === p.idle && t(Ge.getResults())
    }, [n]), e.jsxs("div", {
      children: [e.jsx(sB, {}), e.jsx(aB, {}), e.jsx(tB, {}), e.jsx(nB, {})]
    })
  },
  oB = () => {
    const t = c(n => n.tournament.activeTab);
    return e.jsxs("div", {
      className: jP.info_layout,
      children: [t === Me.create && e.jsx(aS, {}), t === Me.main && e.jsx(ES, {}), t === Me.result && e.jsx(iB, {})]
    })
  },
  rB = () => e.jsxs(ae.Fragment, {
    children: [e.jsx(Nh, {}), e.jsx(oB, {})]
  }),
  cB = "/assets/bg-BNfFdtGI.png",
  lB = "data:image/png;base64,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",
  qr = "/assets/rays-uhfpLlt6.png",
  Yr = "/assets/rays2-Ce7ymw8-.png",
  dB = "_container_lc1md_1",
  uB = "_title_lc1md_8",
  AB = "_table_container_lc1md_13",
  mB = "_table_row_lc1md_19",
  pB = "_button_lc1md_26",
  hB = "_active_row_lc1md_50",
  gB = "_row_title_lc1md_50",
  Pa = {
    container: dB,
    title: uB,
    table_container: AB,
    table_row: mB,
    button: pB,
    active_row: hB,
    row_title: gB
  },
  _B = () => {
    const t = g(),
      n = c(a => a.tournament.showTournamentDetailsPopup),
      s = a => {
        t(Wo(a))
      };
    return e.jsx(rn, {
      show: n,
      setShow: s,
      children: e.jsxs("div", {
        className: Pa.container,
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
            className: Pa.gold,
            children: "Golden Pixel"
          }), "."]
        }), e.jsx("p", {
          children: "Details on the awards coming soon."
        }), e.jsx("button", {
          className: Pa.button,
          onPointerUp: () => s(!1),
          children: "That's so wise!"
        })]
      })
    })
  },
  xB = "_layout_17ca7_1",
  fB = "_container_17ca7_6",
  vB = "_close_button_17ca7_20",
  yB = "_title_container_17ca7_28",
  wB = "_title_17ca7_28",
  jB = "_image_container_17ca7_39",
  bB = "_image_17ca7_39",
  NB = "_image_placeholder_17ca7_53",
  IB = "_info_container_17ca7_60",
  CB = "_info_row_17ca7_66",
  PB = "_info_title_17ca7_71",
  SB = "_info_value_blue_17ca7_75",
  BB = "_info_value_white_17ca7_80",
  TB = "_buttons_container_17ca7_84",
  EB = "_button_17ca7_84",
  DB = "_not_button_17ca7_100",
  kB = "_button_copy_17ca7_111",
  ne = {
    layout: xB,
    container: fB,
    close_button: vB,
    title_container: yB,
    title: wB,
    image_container: jB,
    image: bB,
    image_placeholder: NB,
    info_container: IB,
    info_row: CB,
    info_title: PB,
    info_value_blue: SB,
    info_value_white: BB,
    buttons_container: TB,
    button: EB,
    not_button: DB,
    button_copy: kB
  },
  Xr = ({
    template: t,
    style: n = {},
    onPointerUp: s = () => {}
  }) => {
    const a = g(),
      o = c(r => r.tournament.selectTemplateStatus) === p.pending;
    return e.jsx("button", {
      disabled: o,
      className: ne.button,
      style: {
        ...n
      },
      onPointerUp: async () => {
        try {
          if (o) return;
          (await a(Ge.selectTemplate({
            id: t.id
          }))).meta.requestStatus === p.fulfilled && a(er(t))
        } catch (r) {
          console.log(r, "error when selecting template")
        } finally {
          s()
        }
      },
      children: "Select Template"
    })
  },
  RB = () => {
    const t = c(r => r.tournament.templateDataInfoPopup),
      n = c(r => r.user.user),
      s = c(r => r.tournament.selectedTemplate),
      a = t.id === n.id,
      i = s !== null && t.id === s.id,
      o = c(we);
    return a ? e.jsx("div", {
      className: ne.not_button,
      children: "Your template. Cute!"
    }) : i ? e.jsxs("div", {
      className: ne.not_button,
      children: ["Selected template ", e.jsx(I, {
        size: 18,
        children: ""
      })]
    }) : o && s ? null : e.jsx(Xr, {
      template: t
    })
  },
  MB = () => {
    const t = g(),
      n = J(),
      s = c(i => i.tournament.showTemplateInfoPopup),
      a = c(i => i.tournament.templateDataInfoPopup);
    return c(we), !a || !s ? null : nt.createPortal(e.jsx(Ye, {
      onPointerUp: () => t(fa()),
      show: s,
      children: e.jsx("div", {
        className: ne.layout,
        children: e.jsxs("div", {
          className: ne.container,
          onPointerUp: i => {
            i.stopPropagation()
          },
          children: [e.jsx("div", {
            className: ne.close_button,
            onPointerUp: () => {
              t(fa())
            },
            children: e.jsx(I, {
              size: 26,
              children: ""
            })
          }), e.jsx("div", {
            className: ne.title_container,
            children: e.jsx("span", {
              className: ne.title,
              children: "Template"
            })
          }), e.jsx("div", {
            className: ne.image_container,
            children: e.jsx("img", {
              alt: "image",
              className: ne.image,
              src: a.url
            })
          }), e.jsxs("div", {
            className: ne.buttons_container,
            children: [e.jsx(RB, {}), e.jsx(Gt, {
              url: `${Nt}?startapp=f${a.id}_t`,
              className: ne.button_copy,
              text: "Copy template link"
            })]
          }), e.jsxs("div", {
            className: ne.info_container,
            children: [e.jsxs("div", {
              className: ne.info_row,
              onPointerUp: () => {
                n.push("/"), t(fa()), j.viewport.viewport.animate({
                  scale: 4,
                  time: 400,
                  position: {
                    x: a.x + a.imageSize / 2,
                    y: a.y + a.imageSize / 2
                  }
                })
              },
              children: [e.jsx("span", {
                className: ne.info_title,
                children: "Coordinates"
              }), " ", e.jsxs("span", {
                className: ne.info_value_blue,
                children: [a.x, ", ", a.y]
              })]
            }), e.jsxs("div", {
              className: ne.info_row,
              children: [e.jsx("span", {
                className: ne.info_title,
                children: "Painters"
              }), " ", e.jsx("span", {
                className: ne.info_value_white,
                children: a.subscribers
              })]
            }), e.jsxs("div", {
              className: ne.info_row,
              children: [e.jsx("span", {
                className: ne.info_title,
                children: "Score"
              }), " ", e.jsx("span", {
                className: ne.info_value_white,
                children: a.repaints
              })]
            }), e.jsxs("div", {
              className: ne.info_row,
              children: [e.jsx("span", {
                className: ne.info_title,
                children: "Place"
              }), " ", e.jsx("span", {
                className: ne.info_value_white,
                children: a.rank
              })]
            })]
          })]
        })
      })
    }), document.body)
  },
  UB = "_layout_20dlh_1",
  OB = "_container_20dlh_10",
  QB = "_star_20dlh_14",
  FB = "_star_animation_20dlh_21",
  GB = "_move_20dlh_1",
  Hs = {
    layout: UB,
    container: OB,
    star: QB,
    star_animation: FB,
    move: GB
  },
  zB = "data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3clinearGradient%20id='grad1'%20x1='0%25'%20y1='0%25'%20x2='0%25'%20y2='100%25'%3e%3cstop%20offset='0%25'%20style='stop-color:%23efce32;stop-opacity:1'%20/%3e%3c!--%20более%20светлый%20желтый%20--%3e%3cstop%20offset='100%25'%20style='stop-color:%23f7752e;stop-opacity:1'%20/%3e%3c!--%20более%20темный%20желтый%20--%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M5%200C2.23858%200%200%202.23858%200%205V27C0%2029.7614%202.23858%2032%205%2032H27C29.7614%2032%2032%2029.7614%2032%2027V5C32%202.23858%2029.7614%200%2027%200H5ZM21.4261%2010.5739H10.5739V21.4261H21.4261V10.5739Z'%20fill='url(%23grad1)'/%3e%3c/svg%3e",
  LB = ({
    size: t,
    style: n = {},
    animation: s = !1
  }) => e.jsx("img", {
    alt: "image",
    src: zB,
    className: s ? Hs.star_animation : Hs.star,
    style: {
      width: t,
      height: t,
      ...n
    }
  }),
  HB = A.memo(() => {
    const t = Array.from(Array(30));
    return e.jsx("div", {
      className: Hs.layout,
      children: e.jsx("div", {
        className: Hs.container,
        children: t.map((n, s) => {
          const a = M(2, 6);
          return e.jsx(LB, {
            size: a,
            animation: !0,
            style: {
              animationDelay: `-${s*300}ms`,
              transform: `translate(${M(-80,-170)*(s%2===1?1:-1)}px, ${M(-100,100)}px)`
            }
          }, s)
        })
      })
    })
  }, () => !1),
  qB = "_container_tuzgg_1",
  YB = "_column_tuzgg_9",
  XB = "_column_rev_tuzgg_17",
  VB = "_title_tuzgg_26",
  JB = "_table_container_tuzgg_32",
  WB = "_table_row_tuzgg_38",
  ZB = "_button_tuzgg_45",
  KB = "_value_tuzgg_52",
  $B = "_notpixel_icon_tuzgg_58",
  e2 = "_active_row_tuzgg_74",
  t2 = "_row_title_tuzgg_74",
  Ie = {
    container: qB,
    column: YB,
    column_rev: XB,
    title: VB,
    table_container: JB,
    table_row: WB,
    button: ZB,
    value: KB,
    notpixel_icon: $B,
    active_row: e2,
    row_title: t2
  },
  n2 = [{
    name: "Total $PX for painters",
    value: 507904e4,
    image: Ce
  }, {
    name: "Total $PX for template owners",
    value: 128e6,
    image: Ce
  }, {
    name: "Winning templates",
    value: 4,
    image: null
  }, {
    name: "Winners per template",
    value: 8184,
    image: null
  }, {
    name: "Total winners",
    value: 32736,
    image: null
  }],
  s2 = [{
    name: "Template owner",
    value: 32e6,
    image: Ce
  }, {
    name: "Top 8",
    value: 16e6,
    image: Ce
  }, {
    name: "9-24",
    value: 8e6,
    image: Ce
  }, {
    name: "25-56",
    value: 4e6,
    image: Ce
  }, {
    name: "57-120",
    value: 2e6,
    image: Ce
  }, {
    name: "121-248",
    value: 1e6,
    image: Ce
  }, {
    name: "249-504",
    value: 5e5,
    image: Ce
  }, {
    name: "505-1016",
    value: 25e4,
    image: Ce
  }, {
    name: "1017-2040",
    value: 125e3,
    image: Ce
  }, {
    name: "2041-4088",
    value: 6e4,
    image: Ce
  }, {
    name: "4089-8184",
    value: 3e4,
    image: Ce
  }],
  a2 = () => {
    const t = g(),
      n = c(a => a.tournament.showRoundRewardsPopup),
      s = a => {
        t(Zo(a))
      };
    return e.jsx(rn, {
      show: n,
      setShow: s,
      children: e.jsxs("div", {
        className: Ie.container,
        children: [e.jsx("img", {
          alt: "column",
          src: Ms,
          className: Ie.column
        }), e.jsx("img", {
          alt: "column",
          src: Ms,
          className: Ie.column_rev
        }), e.jsx("div", {
          className: Ie.title,
          children: "Round 8"
        }), e.jsx("div", {
          className: Ie.table_container,
          children: n2.map((a, i) => e.jsxs("div", {
            className: Ie.table_row,
            children: [e.jsx("div", {
              children: a.name
            }), e.jsxs("div", {
              className: Ie.value,
              children: [Ve({
                num: a.value
              }), a.image && e.jsx("img", {
                alt: "coin",
                src: a.image,
                className: Ie.notpixel_icon
              })]
            })]
          }, i))
        }), e.jsx("div", {
          className: Ie.title,
          children: "Rewards in templates"
        }), e.jsx("div", {
          className: Ie.table_container,
          children: s2.map((a, i) => e.jsxs("div", {
            className: Ie.table_row,
            children: [e.jsx("div", {
              children: a.name
            }), e.jsxs("div", {
              className: Ie.value,
              children: [Ve({
                num: a.value
              }), a.image && e.jsx("img", {
                alt: "coin",
                src: a.image,
                className: Ie.notpixel_icon
              })]
            })]
          }, i))
        }), e.jsx("button", {
          className: Ie.button,
          onPointerUp: () => s(!1),
          children: "That's so wise!"
        })]
      })
    })
  },
  i2 = "_button_1wjsf_1",
  o2 = "_icon_1wjsf_20",
  Yi = {
    button: i2,
    icon: o2
  },
  r2 = () => {
    const t = g(),
      s = c(It) ? "calc(12px + var(--safe-area-top))" : "calc(12px + var(--header-height))";
    return e.jsxs("button", {
      className: Yi.button,
      style: {
        top: s
      },
      onPointerUp: () => {
        t(Zo(!0))
      },
      children: [e.jsx("span", {
        children: "Round 8"
      }), " ", e.jsx("span", {
        className: `telegram_icons ${Yi.icon}`,
        children: ""
      })]
    })
  },
  c2 = () => {
    const t = g();
    return e.jsxs(ue, {
      children: [e.jsx(r2, {}), e.jsxs("div", {
        className: Xe.general_info_container,
        style: {
          backgroundImage: `url(${cB})`,
          backgroundPosition: "top center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          marginTop: -20
        },
        children: [e.jsxs("div", {
          className: Xe.img_container,
          children: [e.jsx("img", {
            alt: "img",
            className: Xe.image_cup,
            src: lB
          }), e.jsx("div", {
            className: Xe.image_glow_container,
            children: e.jsx("img", {
              alt: "img",
              className: Xe.image_glow,
              src: qr
            })
          }), e.jsx("div", {
            className: Xe.image_glow_container,
            children: e.jsx("img", {
              alt: "img",
              className: Xe.image_glow_reverse,
              src: Yr
            })
          }), e.jsx(HB, {})]
        }), e.jsx("h1", {
          className: Xe.title,
          children: "Telegram Battle"
        }), e.jsxs("div", {
          className: Xe.description_container,
          children: [e.jsxs("span", {
            className: Xe.description,
            children: [e.jsx("span", {
              children: " Paint templates to win "
            }), " ", e.jsx("span", {
              className: Xe.gold,
              children: "Golden Pixels"
            }), " ", e.jsx("br", {}), e.jsx(mn, {
              onPointerUp: n => {
                n.stopPropagation(), t(Wo(!0))
              },
              children: "How it works"
            })]
          }), e.jsx(_B, {}), e.jsx(a2, {})]
        })]
      }), e.jsx(rB, {}), e.jsx(MB, {})]
    })
  },
  l2 = "_container_qn09x_1",
  d2 = "_image_container_qn09x_9",
  u2 = "_image_qn09x_9",
  A2 = "_title_container_qn09x_18",
  m2 = "_text_container_qn09x_27",
  p2 = "_title_qn09x_18",
  h2 = "_gray_qn09x_39",
  g2 = "_bold_qn09x_43",
  _2 = "_input_qn09x_47",
  x2 = "_catalog_container_qn09x_71",
  f2 = "_catalog_title_qn09x_76",
  v2 = "_catalog_items_container_qn09x_81",
  y2 = "_catalog_item_qn09x_81",
  w2 = "_catalog_item_image_container_qn09x_100",
  j2 = "_catalog_item_image_qn09x_100",
  b2 = "_button_container_qn09x_109",
  N2 = "_button_qn09x_109",
  I2 = "_wrong_helper_text_qn09x_124",
  C2 = "_wrong_button_qn09x_129",
  P2 = "_wrong_button_text2_qn09x_142",
  S = {
    container: l2,
    image_container: d2,
    image: u2,
    title_container: A2,
    text_container: m2,
    title: p2,
    gray: h2,
    bold: g2,
    input: _2,
    catalog_container: x2,
    catalog_title: f2,
    catalog_items_container: v2,
    catalog_item: y2,
    catalog_item_image_container: w2,
    catalog_item_image: j2,
    button_container: b2,
    button: N2,
    wrong_helper_text: I2,
    wrong_button: C2,
    wrong_button_text2: P2
  },
  S2 = "/assets/box_1-CzUKXu07.gif",
  B2 = "/assets/box_2-wR9cQS7q.gif",
  T2 = "/assets/box_3-g_PL1kKM.gif",
  E2 = "/assets/dogs-D0jtZggB.gif",
  D2 = "/assets/secret_word-BTKB1fAO.gif",
  k2 = "/assets/cube_youtube_2-BqessN1a.gif",
  R2 = "/assets/cube_twitter_3_m_-Bxf2Qx_E.gif",
  Vn = {
    Ghost: "Ghost",
    Mythical: "Mythical",
    Magical: "Magical",
    Dogs: "Dogs"
  },
  M2 = () => {
    const t = g(),
      [n, s] = A.useState(""),
      [a, i] = A.useState(!1),
      [o, r] = A.useState(!1),
      [l, d] = A.useState({
        count: 0,
        limit: 1e4
      }),
      [u, h] = A.useState({
        count: 0,
        limit: 1e4
      }),
      [_, y] = A.useState({
        count: 0,
        limit: 1
      }),
      [N, x] = A.useState({
        count: 0,
        limit: 5e3
      });
    return A.useEffect(() => {
      let w = null;
      return o && (w = setTimeout(() => {
        r(!1)
      }, 5e3)), () => {
        clearTimeout(w)
      }
    }, [o]), A.useEffect(() => {
      (async () => {
        const O = await X.getSecretStats();
        O.status === 200 && O.data && O.data.forEach(Q => {
          Q.group_name === Vn.Ghost && d({
            count: Q.usage_count,
            limit: Q.limit
          }), Q.group_name === Vn.Mythical && h({
            count: Q.usage_count,
            limit: Q.limit
          }), Q.group_name === Vn.Magical && y({
            count: Q.usage_count,
            limit: Q.limit
          }), Q.group_name === Vn.Dogs && x({
            count: Q.usage_count,
            limit: Q.limit
          })
        })
      })()
    }, []), e.jsx(ue, {
      children: e.jsxs("div", {
        className: S.container,
        children: [e.jsx("div", {
          className: S.image_container,
          children: e.jsx("img", {
            alt: "image",
            className: S.image,
            src: D2
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
            value: n,
            onChange: w => {
              let O = w.target.value;
              s(O)
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
                  src: S2
                })
              }), e.jsx("div", {
                className: R(S.bold),
                children: "Ghost's secret"
              }), e.jsxs("div", {
                className: R(S.gray),
                children: [Ve({
                  num: 1e4
                }), "/", Ve({
                  num: l.limit
                })]
              })]
            }), e.jsxs("div", {
              className: S.catalog_item,
              children: [e.jsx("div", {
                className: S.catalog_item_image_container,
                children: e.jsx("img", {
                  alt: "item_image",
                  className: S.catalog_item_image,
                  src: B2
                })
              }), e.jsx("div", {
                className: R(S.bold),
                children: "Mythical secret"
              }), e.jsxs("div", {
                className: R(S.gray),
                children: [Ve({
                  num: u.count
                }), "/", Ve({
                  num: u.limit
                })]
              })]
            }), e.jsxs("div", {
              className: S.catalog_item,
              children: [e.jsx("div", {
                className: S.catalog_item_image_container,
                children: e.jsx("img", {
                  alt: "item_image",
                  className: S.catalog_item_image,
                  src: E2
                })
              }), e.jsx("div", {
                className: R(S.bold),
                children: "Dogs secret"
              }), e.jsxs("div", {
                className: R(S.gray),
                children: [Ve({
                  num: N.count
                }), "/", Ve({
                  num: N.limit
                })]
              })]
            }), e.jsxs("div", {
              className: S.catalog_item,
              children: [e.jsx("div", {
                className: S.catalog_item_image_container,
                children: e.jsx("img", {
                  alt: "item_image",
                  className: S.catalog_item_image,
                  src: T2
                })
              }), e.jsx("div", {
                className: R(S.bold),
                children: "Magical secret"
              }), e.jsxs("div", {
                className: R(S.gray),
                children: [_.count, "/", _.limit]
              })]
            }), e.jsxs("div", {
              className: S.catalog_item,
              children: [e.jsx("div", {
                className: S.catalog_item_image_container,
                children: e.jsx("img", {
                  alt: "item_image",
                  className: S.catalog_item_image,
                  src: k2
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
                  src: R2
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
          children: [!o && e.jsx("button", {
            disabled: a,
            className: S.button,
            onPointerUp: async () => {
              i(!0);
              try {
                const w = await X.checkSecret({
                  key: n
                });
                if (w.status === 200) {
                  const O = w.data;
                  if (O.secretWord.success) {
                    let Q = "Success!";
                    O.secretWord.reward && (Q += ` ${O.secretWord.reward} PX earned`), t(z({
                      id: performance.now(),
                      text: Q,
                      icon: ""
                    })), t(Qt(O.secretWord.reward || 0));
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
            className: R(S.gray, S.wrong_helper_text),
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
  gt = {
    ratings: "/ratings",
    stars: "/stars",
    mining: "/claiming",
    template: "/template",
    history: "/history",
    my_squad: "/my-squad",
    my_profile: "/my-profile"
  },
  U2 = Object.values(gt),
  O2 = () => e.jsx(Ya, {
    children: e.jsxs(_c, {
      children: [e.jsx(ie, {
        path: "/welcome",
        children: e.jsx(Jj, {})
      }), e.jsx(ie, {
        path: "/airdrop",
        children: e.jsx(lP, {})
      }), e.jsx(ie, {
        path: "/invite-frens",
        children: e.jsx(kb, {})
      }), e.jsx(ie, {
        path: gt.stars,
        children: e.jsx($d, {})
      }), e.jsx(ie, {
        path: "/info",
        children: e.jsx(iu, {})
      }), e.jsx(ie, {
        path: gt.my_squad,
        children: e.jsx(PC, {})
      }), e.jsx(ie, {
        path: gt.my_profile,
        children: e.jsx(VI, {})
      }), e.jsx(ie, {
        path: "/rules",
        children: e.jsx(Pj, {})
      }), e.jsx(ie, {
        path: "/terms",
        children: e.jsx(cu, {})
      }), e.jsx(ie, {
        path: "/stats",
        children: e.jsx($b, {})
      }), e.jsx(ie, {
        path: "/privacy",
        children: e.jsx(uu, {})
      }), e.jsx(ie, {
        path: "/secrets",
        children: e.jsx(M2, {})
      }), e.jsx(ie, {
        path: gt.mining,
        children: e.jsx(hf, {})
      }), e.jsx(ie, {
        path: "/ratings/awards",
        children: e.jsx(kj, {})
      }), e.jsx(ie, {
        path: gt.ratings,
        children: e.jsx(_v, {})
      }), e.jsx(ie, {
        path: "/daily",
        children: e.jsx(h0, {})
      }), e.jsx(ie, {
        path: gt.history,
        children: e.jsx(wj, {})
      }), e.jsx(ie, {
        path: "/template/create",
        children: e.jsx(RC, {})
      }), e.jsx(ie, {
        path: gt.template,
        children: e.jsx(JN, {})
      }), e.jsx(ie, {
        path: "/tournament",
        children: e.jsx(c2, {})
      }), e.jsx(ie, {
        path: "/energy-over",
        children: e.jsx(x1, {})
      }), e.jsx(ie, {
        path: "/open-league",
        children: e.jsx(tb, {})
      }), e.jsx(ie, {
        path: "/pay-support",
        children: e.jsx(rb, {})
      }), e.jsx(ie, {
        path: "/",
        children: e.jsx(Vw, {})
      })]
    })
  }),
  Q2 = "_layout_1djp8_1",
  F2 = "_loading_container_1djp8_8",
  G2 = "_image_container_1djp8_20",
  z2 = "_image_1djp8_20",
  L2 = "_text_1djp8_29",
  bn = {
    layout: Q2,
    loading_container: F2,
    image_container: G2,
    image: z2,
    text: L2
  },
  H2 = "_buttons_container_rjvnl_1",
  q2 = "_group_rjvnl_8",
  Y2 = "_left_rjvnl_15",
  X2 = "_middle_rjvnl_21",
  V2 = "_right_rjvnl_29",
  J2 = "_number_rjvnl_36",
  W2 = "_button_rjvnl_1",
  Z2 = "_ratings_button_rjvnl_55",
  K2 = "_stars_button_rjvnl_62",
  $2 = "_shop_button_rjvnl_70",
  eT = "_burger_button_rjvnl_79",
  tT = "_relative_button_rjvnl_89",
  nT = "_telegram_button_rjvnl_116",
  sT = "_button_img_rjvnl_124",
  aT = "_avatar_img_rjvnl_129",
  iT = "_open_menu_button_rjvnl_134",
  oT = "_open_menu_button_image_rjvnl_144",
  rT = "_my_pixels_amount_rjvnl_149",
  cT = "_header_content_rjvnl_154",
  je = {
    buttons_container: H2,
    group: q2,
    left: Y2,
    middle: X2,
    right: V2,
    number: J2,
    button: W2,
    ratings_button: Z2,
    stars_button: K2,
    shop_button: $2,
    burger_button: eT,
    relative_button: tT,
    telegram_button: nT,
    button_img: sT,
    avatar_img: aT,
    open_menu_button: iT,
    open_menu_button_image: oT,
    my_pixels_amount: rT,
    header_content: cT
  },
  lT = () => c(qe) ? null : e.jsxs("button", {
    className: `${je.button} ${je.telegram_button}`,
    onPointerUp: () => {
      ee("https://t.me/notpixel")
    },
    children: [e.jsx("img", {
      alt: "tg_logo",
      src: Un
    }), "Go to app for paint"]
  }),
  oa = t => {
    const n = Ys(),
      s = J();
    return () => {
      n.pathname === t ? s.push("/") : s.push(t)
    }
  },
  dT = () => {
    const t = oa("/claiming"),
      n = c(a => a.user.pixelCoins);
    return c(qe) ? e.jsxs("button", {
      className: `${je.button}`,
      onPointerUp: t,
      children: [e.jsx(U, {
        size: 16,
        className: je.button_img
      }), e.jsx("div", {
        style: {
          transform: "translateY(1px)"
        },
        children: e.jsx(Fn, {
          number: Math.max(Number(n.toFixed(0)), 0)
        })
      })]
    }) : null
  },
  uT = "data:image/svg+xml,%3c?xml%20version='1.0'%20?%3e%3csvg%20viewBox='0%200%2032%2032'%20xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:none;}%3c/style%3e%3c/defs%3e%3ctitle/%3e%3cg%20fill='%23e0dd8e'%20data-name='Layer%202'%20id='Layer_2'%3e%3cpath%20d='M24,29H8a3,3,0,0,1-3-3V16a1,1,0,0,1,2,0V26a1,1,0,0,0,1,1H24a1,1,0,0,0,1-1V16a1,1,0,0,1,2,0V26A3,3,0,0,1,24,29Z'/%3e%3cpath%20d='M15,29H10a1,1,0,0,1-1-1V22a3,3,0,0,1,3-3h1a3,3,0,0,1,3,3v6A1,1,0,0,1,15,29Zm-4-2h3V22a1,1,0,0,0-1-1H12a1,1,0,0,0-1,1Z'/%3e%3cpath%20d='M25,17a4,4,0,0,1-4-4,1,1,0,0,1,2,0,2,2,0,0,0,4,0v-.76L24.38,7H7.62L5,12.24V13a2,2,0,0,0,4,0,1,1,0,0,1,2,0,4,4,0,0,1-8,0V12a1,1,0,0,1,.11-.45l3-6A1,1,0,0,1,7,5H25a1,1,0,0,1,.89.55l3,6A1,1,0,0,1,29,12v1A4,4,0,0,1,25,17Z'/%3e%3cpath%20d='M13,17a4,4,0,0,1-4-4,1,1,0,0,1,2,0,2,2,0,0,0,4,0,1,1,0,0,1,2,0A4,4,0,0,1,13,17Z'/%3e%3cpath%20d='M19,17a4,4,0,0,1-4-4,1,1,0,0,1,2,0,2,2,0,0,0,4,0,1,1,0,0,1,2,0A4,4,0,0,1,19,17Z'/%3e%3cpath%20d='M22,22H19a1,1,0,0,1,0-2h3a1,1,0,0,1,0,2Z'/%3e%3c/g%3e%3cg%20id='frame'%3e%3crect%20class='cls-1'%20height='32'%20width='32'/%3e%3c/g%3e%3c/svg%3e",
  AT = () => {
    const t = oa("/stars");
    return c(qe) ? e.jsx("button", {
      className: `${je.shop_button}`,
      onPointerUp: t,
      children: e.jsx("img", {
        alt: "icon",
        src: uT,
        style: {
          width: 24,
          height: 24
        }
      })
    }) : null
  },
  mT = () => {
    const t = oa("/invite-frens");
    return c(qe) ? e.jsx("button", {
      className: `${je.stars_button}`,
      onPointerUp: t,
      children: e.jsx(I, {
        size: 20,
        children: ""
      })
    }) : null
  },
  pT = () => {
    const t = g(),
      n = c(ur),
      s = () => {
        if (n) {
          t(Rt(!1));
          return
        }
        t(Rt(!0))
      };
    return e.jsx("button", {
      className: je.burger_button,
      onPointerUp: s,
      children: e.jsx(I, {
        size: 28,
        children: ""
      })
    })
  },
  hT = () => {
    const t = oa("/daily");
    return c(qe) ? e.jsx("button", {
      className: `${je.stars_button}`,
      onPointerUp: t,
      children: e.jsx(I, {
        size: 20,
        children: ""
      })
    }) : null
  },
  Xi = ae.memo(() => e.jsxs("div", {
    className: je.buttons_container,
    children: [e.jsxs("div", {
      className: `${je.group} ${je.left}`,
      children: [e.jsx(pT, {}), e.jsx(mT, {})]
    }), e.jsx("div", {
      className: `${je.group} ${je.middle}`,
      children: e.jsx(dT, {})
    }), e.jsxs("div", {
      className: `${je.group} ${je.right}`,
      children: [e.jsx(hT, {}), e.jsx(lT, {}), e.jsx(AT, {})]
    })]
  })),
  Vi = {
    bronze: Oe.bronze,
    silver: Oe.silver,
    gold: Oe.gold,
    platinum: Oe.platinum,
    diamond: Oe.diamond
  },
  Ji = () => {
    const t = c(s => s.user.user),
      n = [Oe.league];
    return t !== null && Vi.hasOwnProperty(t.league) ? (n.push(Vi[t.league]), e.jsx("div", {
      className: n.join(" ")
    })) : null
  },
  gT = () => {
    const t = c(It),
      n = Ys(),
      s = c(Ws),
      a = c(Zs);
    c(ql);
    const i = `calc(16px + ${s.top+a.top}px)`;
    return t ? t && n.pathname === "/" ? e.jsx("div", {
      className: Oe.header_bottom_container,
      style: {
        top: i
      },
      children: e.jsx("div", {
        className: Oe.header_bottom,
        children: e.jsxs("div", {
          className: Oe.header_content,
          children: [e.jsx(Ji, {}), e.jsx(Xi, {})]
        })
      })
    }) : null : e.jsx("div", {
      className: Oe.header,
      children: e.jsxs("div", {
        className: Oe.header_content,
        children: [e.jsx(Ji, {}), e.jsx(Xi, {})]
      })
    })
  };
let Wi = "/";
const _T = () => {
    let t = Ys(),
      n = J();
    return A.useEffect(() => {
      const s = () => {
        U2.includes(t.pathname) ? n.push("/") : n.goBack()
      };
      return window.Telegram.WebApp.onEvent("backButtonClicked", s), t.pathname !== Wi && (t.pathname === "/" ? window.Telegram.WebApp.BackButton.hide() : window.Telegram.WebApp.BackButton.show(), Wi = t.pathname), () => {
        window.Telegram.WebApp.offEvent("backButtonClicked", s)
      }
    }, [t, n]), null
  },
  xT = "_layout_ppin4_1",
  fT = {
    layout: xT
  },
  vT = () => {
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
        u = null;
      const h = _ => {
        a === null && (a = _);
        const N = (_ - a) / r;
        o !== _ && (i = Math.min(N * l, l), t.current && (t.current.style.width = `${i}%`)), o = _, i < l && (d = requestAnimationFrame(h))
      };
      return n === Qe.start && (d = requestAnimationFrame(h), t.current && (t.current.style.display = "block")), n === Qe.finish && (t.current && (t.current.style.width = "100%"), u = setTimeout(() => {
        t.current && (t.current.style.display = "none", t.current.style.width = "0")
      }, 300)), () => {
        d !== null && cancelAnimationFrame(d), u !== null && clearTimeout(u)
      }
    }, [n, s]), nt.createPortal(e.jsx("div", {
      ref: t,
      className: fT.layout
    }), document.body)
  },
  yT = "_container_11ui8_1",
  wT = "_header_11ui8_13",
  jT = "_close_container_11ui8_23",
  bT = "_close_11ui8_23",
  NT = "_title_11ui8_48",
  IT = "_frens_count_11ui8_53",
  CT = "_body_11ui8_58",
  PT = "_content_11ui8_68",
  ST = "_image_container_11ui8_75",
  BT = "_image_11ui8_75",
  TT = "_image_container_charges_11ui8_84",
  ET = "_image_charges_11ui8_89",
  DT = "_description_container_11ui8_94",
  kT = "_bold_11ui8_102",
  RT = "_gray_11ui8_107",
  MT = "_center_11ui8_111",
  UT = "_benefits_container_11ui8_115",
  OT = "_benefits_item_11ui8_123",
  QT = "_benefits_icon_container_11ui8_128",
  FT = "_icon_invite_11ui8_132",
  GT = "_footer_11ui8_136",
  zT = "_button_11ui8_141",
  k = {
    container: yT,
    header: wT,
    close_container: jT,
    close: bT,
    title: NT,
    frens_count: IT,
    body: CT,
    content: PT,
    image_container: ST,
    image: BT,
    image_container_charges: TT,
    image_charges: ET,
    description_container: DT,
    bold: kT,
    gray: RT,
    center: MT,
    benefits_container: UT,
    benefits_item: OT,
    benefits_icon_container: QT,
    icon_invite: FT,
    footer: GT,
    button: zT
  },
  LT = "data:image/png;base64,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",
  HT = () => {
    var o, r;
    const t = g(),
      n = c(l => l.main.showInviteFrensPopup),
      s = c(l => l.user.user),
      a = c(l => l.main.settings),
      i = `${Nt}?startapp=f${((r=(o=window.Telegram.WebApp.initDataUnsafe)==null?void 0:o.user)==null?void 0:r.id)||""}`;
    return e.jsx(Ye, {
      show: n,
      onPointerUp: () => t(va()),
      children: e.jsxs("div", {
        className: k.container,
        onPointerUp: l => {
          l.stopPropagation()
        },
        children: [e.jsxs("div", {
          className: k.header,
          children: [e.jsx("div", {
            className: k.title,
            children: "Invite frens "
          }), e.jsx("div", {
            className: k.close_container,
            children: e.jsx("div", {
              className: k.close,
              onPointerUp: () => {
                t(va())
              },
              children: e.jsx(I, {
                size: 20,
                children: ""
              })
            })
          })]
        }), e.jsx("div", {
          className: k.body,
          children: e.jsxs("div", {
            className: k.content,
            children: [e.jsx("div", {
              className: k.image_container,
              children: e.jsx("img", {
                alt: "image",
                className: k.image,
                src: LT
              })
            }), e.jsxs("div", {
              className: k.description_container,
              children: [e.jsxs("span", {
                className: k.bold,
                children: ["Your frens:  ", e.jsx("span", {
                  className: k.frens_count,
                  children: (s == null ? void 0 : s.friends) || 0
                })]
              }), e.jsxs("span", {
                children: ["Invite more! You and your", e.jsx("br", {}), " frens will get bonuses:"]
              })]
            }), e.jsxs("div", {
              className: k.benefits_container,
              children: [e.jsx("div", {}), e.jsxs("div", {
                className: k.benefits_item,
                children: ["No Premium:   ", " ", e.jsx("div", {
                  className: k.benefits_icon_container,
                  children: e.jsx(U, {
                    size: 16,
                    className: k.icon_invite
                  })
                }), a.InitialCoins]
              }), e.jsx("div", {}), " ", e.jsx("div", {}), e.jsxs("div", {
                className: k.benefits_item,
                children: ["Premium:   ", " ", e.jsx("div", {
                  className: k.benefits_icon_container,
                  children: e.jsx(U, {
                    size: 16,
                    className: k.icon_invite
                  })
                }), a.RefRewardCoinsPremium]
              }), e.jsx("div", {})]
            })]
          })
        }), e.jsxs("div", {
          className: k.footer,
          children: [e.jsx(Gt, {
            url: i
          }), e.jsx("button", {
            className: k.button,
            onPointerUp: l => {
              l.stopPropagation(), ee(`https://t.me/share/url?url=${i}`), t(va())
            },
            children: "Share"
          })]
        })]
      })
    })
  },
  qT = "_container_19qal_1",
  YT = "_header_19qal_9",
  XT = "_close_19qal_19",
  VT = "_title_19qal_31",
  JT = "_body_19qal_36",
  WT = "_image_container_19qal_49",
  ZT = "_image_19qal_49",
  KT = "_content_container_19qal_60",
  $T = "_description_container_19qal_68",
  eE = "_description_item_19qal_75",
  tE = "_amount_selector_container_19qal_82",
  nE = "_amount_selector_button_19qal_88",
  sE = "_amount_selector_count_19qal_101",
  aE = "_button_container_19qal_112",
  iE = "_crypto_button_container_19qal_118",
  oE = "_error_19qal_132",
  rE = "_not_available_19qal_139",
  cE = "_button_19qal_112",
  lE = "_star_color_19qal_165",
  dE = "_tokens_selector_19qal_171",
  uE = "_tokens_title_19qal_176",
  AE = "_connect_wallet_text_title_19qal_183",
  mE = "_tokens_container_19qal_192",
  pE = "_token_item_19qal_199",
  hE = "_token_image_container_19qal_210",
  gE = "_token_image_19qal_210",
  _E = "_sale_box_19qal_220",
  xE = "_sale_text_19qal_232",
  K = {
    container: qT,
    header: YT,
    close: XT,
    title: VT,
    body: JT,
    image_container: WT,
    image: ZT,
    content_container: KT,
    description_container: $T,
    description_item: eE,
    amount_selector_container: tE,
    amount_selector_button: nE,
    amount_selector_count: sE,
    button_container: aE,
    crypto_button_container: iE,
    error: oE,
    not_available: rE,
    button: cE,
    star_color: lE,
    tokens_selector: dE,
    tokens_title: uE,
    connect_wallet_text_title: AE,
    tokens_container: mE,
    token_item: pE,
    token_image_container: hE,
    token_image: gE,
    sale_box: _E,
    sale_text: xE
  },
  fE = () => {
    const t = g(),
      n = c(a => a.shop.activeProductCardId),
      s = c(a => a.shop.products[n]);
    return e.jsxs("div", {
      className: K.header,
      onPointerUp: a => {
        a.stopPropagation()
      },
      children: [e.jsx("div", {
        className: K.close,
        onPointerUp: () => {
          t(Ja())
        },
        children: e.jsx(I, {
          size: 30,
          children: ""
        })
      }), e.jsx("div", {
        className: K.title,
        children: s.name
      })]
    })
  },
  vE = () => {
    const t = c(a => a.shop.activeProductCardId),
      n = c(a => a.shop.products[t]),
      s = c(a => a.shop.amount);
    return e.jsx("div", {
      className: K.image_container,
      children: e.jsx("img", {
        alt: "img",
        className: K.image,
        src: vo(n.id, s)
      })
    })
  },
  yE = () => {
    const t = c(s => s.shop.activeProductCardId),
      n = c(s => s.shop.products[t]);
    return e.jsx("div", {
      className: K.description_container,
      children: e.jsx("span", {
        className: K.description_item,
        children: n.description
      })
    })
  },
  wE = () => {
    const t = g(),
      n = c(Wa),
      s = c(i => i.shop.selectedCurrency);
    return c(At) !== ye ? null : e.jsxs("div", {
      className: K.tokens_selector,
      children: [e.jsx("div", {
        className: K.tokens_title,
        children: "Select token"
      }), e.jsx("div", {
        children: e.jsx("div", {
          className: K.tokens_container,
          children: n.map(i => i.currency_id === 1 ? null : e.jsxs("div", {
            className: K.token_item,
            style: {
              color: i.currency_id === s ? "#FFFFFF" : void 0
            },
            onPointerUp: () => {
              t(Bn(i.currency_id))
            },
            children: [e.jsx("div", {
              children: e.jsx(I, {
                size: 28,
                children: s === i.currency_id ? "" : ""
              })
            }), e.jsx("div", {
              className: K.token_image_container,
              children: e.jsx("img", {
                alt: "img",
                className: K.token_image,
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
  jE = () => {
    const t = c(s => s.shop.selectedCurrency),
      n = c(s => s.shop.crypto).filter(s => s.currency_id === t)[0];
    return t === 1 ? e.jsx("span", {
      className: K.star_color,
      style: {
        paddingRight: 4,
        marginBottom: -5
      },
      children: e.jsx(on, {})
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
  bE = ({
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
      children: ["Buy for ", e.jsx(jE, {}), Math.round(o * (r ? s : 1) * 100) / 100, e.jsx("div", {
        className: K.sale_box,
        children: e.jsx("span", {
          className: K.sale_text,
          children: "-30% "
        })
      })]
    })
  },
  NE = ({
    setError: t,
    setRunParticle: n
  }) => {
    var ke;
    const s = g(),
      a = c(V => V.shop.activeProductCardId),
      i = c(V => V.shop.selectedCurrency),
      o = c(V => V.shop.amount),
      [r, l] = A.useState(p.idle),
      [d, u] = A.useState(!1),
      [h, _] = kn(),
      y = c(V => V.color.active),
      x = (ke = c(V => V.shop.products[a]).prices.filter(V => V.currency_id === i)[0]) == null ? void 0 : ke.price,
      w = qs();
    if (c(V => V.shop.selectedCurrency) === 1 || w === "") return null;
    const Q = async V => {
      const Ze = Ke.beginCell().storeUint(0, 32).storeStringTail(V.txMemCode).endCell(),
        zt = {
          validUntil: Math.floor(Date.now() / 1e3) + 600,
          messages: [{
            address: Ea,
            amount: String(Ke.toNano(V.strAmount)),
            payload: Ze.toBoc().toString("base64")
          }]
        };
      await h.sendTransaction(zt), n(!0), u(!0), l(p.fulfilled)
    }, De = async V => {
      const Ze = new la.HttpProvider("https://toncenter.com/api/v2/jsonRPC"),
        Kr = await new la.token.jetton.JettonMinter(Ze, {
          address: Et[i]
        }).getJettonWalletAddress(new la.utils.Address(w)),
        $r = Ke.Address.parse(w),
        ec = Ke.Address.parse(Ea),
        tc = Ke.beginCell().storeUint(0, 32).storeStringTail(V.txMemCode).endCell();
      let ra = Ke.toNano(V.strAmount);
      Number(i) === 4 && (ra = ra / 1000n);
      const nc = Ke.beginCell().storeUint(260734629, 32).storeUint(0, 64).storeCoins(ra).storeAddress(ec).storeAddress($r).storeBit(0).storeCoins(Ke.toNano("0.01")).storeBit(1).storeRef(tc).endCell(),
        sc = {
          validUntil: Math.floor(Date.now() / 1e3) + 600,
          messages: [{
            address: Kr.toString(!0, !0, !0),
            amount: "101000000",
            payload: nc.toBoc().toString("base64")
          }]
        };
      await h.sendTransaction(sc), n(!0), u(!0), l(p.fulfilled)
    };
    return x ? e.jsx("button", {
      className: K.button,
      onPointerUp: async V => {
        if (V.stopPropagation(), t(!1), d) {
          s(Ja()), l(p.idle);
          return
        }
        if (r !== p.pending) {
          l(p.pending);
          try {
            const Ze = await X.startShopTransaction({
              buyerWallet: w,
              currencyId: i,
              quantity: o,
              goodId: a,
              activeColor: y
            });
            if (i === 2) await Q(Ze.data);
            else if (i === 3 || i === 4 || i === 5 || i === 6 || i === 7 || i === 8 || i === 9) await De(Ze.data);
            else throw new Error("Wrong currency")
          } catch (Ze) {
            console.warn(Ze), t("Something went wrong"), l(p.rejected)
          }
        }
      },
      children: e.jsx(bE, {
        success: d
      })
    }) : e.jsx("div", {
      className: K.not_available,
      children: "Not available"
    })
  },
  IE = () => {
    const [t, n] = kn(), s = qs(), a = c(i => i.shop.selectedCurrency);
    return s !== "" || a === 1 ? null : e.jsx("button", {
      className: K.button,
      onPointerUp: async i => {
        i.stopPropagation(), i.preventDefault(), setTimeout(() => {
          t.openModal()
        }, 20)
      },
      children: "Connect TON wallet"
    })
  },
  CE = ({
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
        className: K.star_color,
        children: ""
      }), a.prices[0].price * (i ? s : 1)]
    })
  },
  PE = ({
    setError: t,
    setRunParticle: n
  }) => {
    const s = g(),
      a = c(y => y.shop.activeProductCardId),
      i = c(y => y.shop.products[a]),
      o = c(y => y.shop.amount),
      [r, l] = A.useState(p.idle),
      [d, u] = A.useState(!1),
      h = c(y => y.shop.selectedCurrency),
      _ = c(y => y.color.active);
    return h !== 1 ? null : e.jsx("div", {
      className: K.button_container,
      onPointerUp: async y => {
        var x;
        if (y.stopPropagation(), d) {
          s(Ja()), l(p.idle);
          return
        }
        if (r === p.pending) return;
        l(p.pending);
        const N = i.isOnePiece ? 1 : o;
        try {
          const w = await X.buy({
            type: Number(a),
            qty: N,
            pixanosColor: _
          });
          w.status === 200 && ((x = w == null ? void 0 : w.data) == null ? void 0 : x.ok) === !0 && window.Telegram.WebApp.openInvoice(w.data.result, O => {
            var De, ke;
            const Q = Number(a);
            if (O === "paid") {
              if (Q >= 9 && Q <= 11) {
                const V = {
                  9: 1,
                  10: 2,
                  11: 3
                };
                s($t({
                  product: 1,
                  amount: V[Q]
                })), s($t({
                  product: 2,
                  amount: V[Q]
                })), s($t({
                  product: 6,
                  amount: V[Q]
                }))
              } else s($t({
                product: a,
                amount: N
              }));
              u(!0), (ke = (De = window.Telegram.WebApp) == null ? void 0 : De.HapticFeedback) == null || ke.notificationOccurred("error"), n(!0)
            } else t("Error, try again.")
          })
        } catch {
          t("Error, try again."), l(p.rejected)
        }
        l(p.fulfilled)
      },
      children: e.jsx("button", {
        className: K.button,
        children: e.jsx(CE, {
          success: d
        })
      })
    })
  },
  SE = () => (c(At) === ye, null),
  BE = () => {
    const [t, n] = A.useState(null), [s, a] = A.useState(!1);
    return e.jsxs("div", {
      className: K.crypto_button_container,
      children: [e.jsx(wE, {}), e.jsx(SE, {}), e.jsx(ko, {
        runParticle: s,
        setRunParticle: a
      }), t && e.jsx("div", {
        className: K.error,
        children: " Failure. Something went wrong."
      }), e.jsx(NE, {
        setError: n,
        setRunParticle: a
      }), e.jsx(PE, {
        setError: n,
        setRunParticle: a
      }), e.jsx(IE, {
        setError: n
      })]
    })
  },
  TE = () => {
    g();
    const t = c(i => i.shop.activeProductCardId),
      n = c(i => i.shop.amount);
    return c(i => i.shop.products[t]).isOnePiece ? null : e.jsx("div", {
      className: K.amount_selector_container,
      children: e.jsxs("div", {
        className: K.amount_selector_count,
        children: ["× ", n]
      })
    })
  },
  EE = "_container_1rmx4_1",
  DE = "_max_value_1rmx4_9",
  Zi = {
    container: EE,
    max_value: DE
  },
  Jn = t => t < 100 ? {
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

function Ki(t, n) {
  return Math.round(t / n) * n
}
const kE = () => {
    const t = g(),
      n = c(x => x.shop.activeProductCardId),
      s = c(x => x.shop.amount),
      i = c(x => x.shop.products[n]).isOnePiece,
      [o, r] = A.useState([s]),
      [l, d] = A.useState(Jn(s).max),
      [u, h] = A.useState(Jn(s).step),
      _ = l === 5e3 ? "5000" : `${l}+`,
      y = x => {
        const w = x[0];
        t(Xs(Ki(w, u))), r([Ki(w, u)])
      },
      N = x => {
        const w = x[0];
        w === l && (d(Jn(w).max), h(Jn(w).step))
      };
    return i ? null : e.jsxs("div", {
      className: Zi.container,
      children: [e.jsx(Dt.Range, {
        values: o,
        step: u,
        min: u,
        max: l,
        rtl: !1,
        onChange: y,
        onFinalChange: N,
        renderTrack: ({
          props: x,
          children: w
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
              background: Dt.getTrackBackground({
                values: o,
                colors: ["var(--btn-primary-bg-color)", "var(--btn-header-bg-color)"],
                min: u,
                max: l,
                rtl: !1
              }),
              alignSelf: "center"
            },
            children: w
          })
        }),
        renderThumb: ({
          props: x,
          isDragged: w
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
        className: Zi.max_value,
        children: [" ", _]
      })]
    })
  },
  RE = () => e.jsxs("div", {
    className: K.body,
    onPointerUp: t => {
      t.stopPropagation()
    },
    children: [e.jsx(vE, {}), e.jsxs("div", {
      className: K.content_container,
      children: [e.jsx(yE, {}), e.jsx(TE, {}), e.jsx(kE, {})]
    }), e.jsx(BE, {})]
  }),
  ME = () => {
    const t = c(n => n.shop.show);
    return nt.createPortal(e.jsx(Ye, {
      show: t,
      children: e.jsxs("div", {
        className: K.container,
        children: [e.jsx(fE, {}), e.jsx(RE, {})]
      })
    }), document.body)
  },
  UE = "_layout_9sf1k_1",
  OE = "_container_9sf1k_13",
  QE = "_header_9sf1k_20",
  FE = "_title_9sf1k_30",
  GE = "_body_9sf1k_35",
  zE = "_image_container_9sf1k_47",
  LE = "_image_9sf1k_47",
  HE = "_shake_9sf1k_1",
  qE = "_description_container_9sf1k_60",
  YE = "_buyer_info_9sf1k_70",
  XE = "_avatar_9sf1k_78",
  VE = "_name_9sf1k_84",
  JE = "_squad_info_9sf1k_88",
  WE = "_squad_avatar_9sf1k_94",
  ZE = "_text_container_9sf1k_100",
  KE = "_text_9sf1k_100",
  $E = "_thanos_snap_container_9sf1k_110",
  eD = "_thanos_snap_text_9sf1k_119",
  tD = "_button_container_9sf1k_126",
  nD = "_button_9sf1k_126",
  xe = {
    layout: UE,
    container: OE,
    header: QE,
    title: FE,
    body: GE,
    image_container: zE,
    image: LE,
    shake: HE,
    description_container: qE,
    buyer_info: YE,
    avatar: XE,
    name: VE,
    squad_info: JE,
    squad_avatar: WE,
    text_container: ZE,
    text: KE,
    thanos_snap_container: $E,
    thanos_snap_text: eD,
    button_container: tD,
    button: nD
  },
  sD = `precision highp float;

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
  aD = `precision mediump float;

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
  Vr = 7200,
  iD = 1;
let b = null,
  Pe = null,
  Wn = -1,
  Es = 0;
async function oD(t) {
  if (b = rD().getContext("webgl"), !b) {
    console.log("Your browser doesn't support WebGL :(");
    return
  }
  await cD(), dD(t)
}

function rD() {
  const t = document.createElement("canvas");
  return t.id = "canvasSnap", t.width = window.innerWidth, t.height = window.innerHeight, t.style.width = `${window.innerWidth}px`, t.style.height = `${window.innerHeight}px`, t.style.position = "fixed", t.style.top = "50%", t.style.left = "50%", t.style.zIndex = "980", t.style.transform = "translate(-50%, -50%)", t.style.opacity = "0", t.style.transition = "2s ease opacity", document.body.appendChild(t), window.getComputedStyle(t).opacity, t.style.opacity = "1", t
}
async function cD() {
  b.enable(b.BLEND), b.blendFunc(b.SRC_ALPHA, b.ONE_MINUS_SRC_ALPHA), b.clearColor(0, 0, 0, 0), b.viewport(0, 0, b.canvas.width, b.canvas.height), Pe = await lD(b), b.useProgram(Pe)
}
async function lD(t, n, s) {
  const a = sD,
    i = aD,
    o = $i(t, a, t.VERTEX_SHADER),
    r = $i(t, i, t.FRAGMENT_SHADER),
    l = t.createProgram();
  return t.attachShader(l, o), t.attachShader(l, r), t.linkProgram(l), t.getProgramParameter(l, t.LINK_STATUS) || console.error("Shader program initialization failure:", t.getProgramInfoLog(l)), l
}

function $i(t, n, s) {
  const a = t.createShader(s);
  return t.shaderSource(a, n), t.compileShader(a), t.getShaderParameter(a, t.COMPILE_STATUS) ? a : (console.error("Shader compilation failure:", t.getShaderInfoLog(a)), t.deleteShader(a), null)
}
async function dD(t) {
  uD(), pD(t), Jr(), document.getElementById("canvasHolder").style.opacity = "0", setTimeout(() => {
    const n = document.getElementById("canvasHolder");
    n.style.transition = "6s ease-in opacity", n.style.opacity = "1"
  }, 20), setTimeout(() => {
    document.getElementById("canvasHolder").style.transition = ""
  }, 7e3)
}

function uD(t) {
  const n = AD();
  var s = b.createTexture();
  b.bindTexture(b.TEXTURE_2D, s), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, b.CLAMP_TO_EDGE), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, b.CLAMP_TO_EDGE), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, b.NEAREST), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, b.NEAREST), b.texImage2D(b.TEXTURE_2D, 0, b.RGBA, b.RGBA, b.UNSIGNED_BYTE, n);
  const a = b.getUniformLocation(Pe, "u_Texture");
  b.uniform1i(a, 0)
}

function AD() {
  const t = new ImageData(B.width, B.height);
  return t.data.set(j.mainImage.imageData.slice(0)), t
}

function mD(t) {
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

function pD(t) {
  const {
    viewportWidth: n,
    viewportHeight: s,
    textureWidth: a,
    textureHeight: i,
    textureLeft: o,
    textureTop: r,
    min: l
  } = mD(t);
  Es = l * l, ct(b, Pe, "u_AnimationDuration", Vr), ct(b, Pe, "u_ParticleSize", iD), ct(b, Pe, "u_ViewportWidth", n), ct(b, Pe, "u_ViewportHeight", s), ct(b, Pe, "u_TextureWidth", a), ct(b, Pe, "u_TextureHeight", i), ct(b, Pe, "u_TextureLeft", o), ct(b, Pe, "u_TextureTop", r);
  const d = new Array(Es);
  for (let _ = 0; _ < Es; _++) d[_] = _;
  const u = b.createBuffer();
  b.bindBuffer(b.ARRAY_BUFFER, u), b.bufferData(b.ARRAY_BUFFER, new Float32Array(d), b.STATIC_DRAW);
  const h = b.getAttribLocation(Pe, "a_ParticleIndex");
  b.enableVertexAttribArray(h), b.vertexAttribPointer(h, 1, b.FLOAT, !1, 0, 0)
}

function Jr() {
  requestAnimationFrame(hD)
}

function hD(t) {
  b.clear(b.COLOR_BUFFER_BIT), Wn == -1 && (Wn = t);
  const s = t - Wn;
  if (s > Vr) {
    Wn = -1, document.getElementById("canvasSnap").remove();
    return
  }
  ct(b, Pe, "u_ElapsedTime", s), b.drawArrays(b.POINTS, 0, Es), Jr()
}

function ct(t, n, s, a) {
  const i = t.getUniformLocation(n, s);
  t.uniform1f(i, a)
}
const gD = () => {
    const t = J(),
      n = g(),
      s = c(r => r.main.showPixanosEvent),
      a = c(r => r.main.pixanosEventData),
      i = c(It);
    if (A.useEffect(() => {
        s && a && (async () => {
          var l, d;
          j.viewport.viewport.fit(), j.viewport.viewport.moveCenter(j.viewport.viewport.worldWidth / 2, j.viewport.viewport.worldHeight / 2), n(Di(!0)), setTimeout(() => {
            n(Di(!1)), n(Qh())
          }, 7e3);
          try {
            await oD(i ? 0 : oo)
          } catch (u) {
            document.getElementById("canvasHolder").style.opacity = "1", console.error(u, "cannot run pixanos")
          }
          t.push("/"), j.mainImage.pixanosRepaint(a.info.seed, B.width, a.info.percentage, a.info.color), (d = (l = window.Telegram.WebApp) == null ? void 0 : l.HapticFeedback) == null || d.notificationOccurred("error")
        })()
      }, [s, a]), !a) return null;
    const o = a.user.squad;
    return e.jsx(Ye, {
      show: s,
      backgroundColor: "rgba(0, 0, 0, 0.0)",
      children: e.jsxs("div", {
        className: xe.container,
        children: [e.jsx("div", {
          className: xe.header,
          children: e.jsx("span", {
            className: xe.title,
            children: "I AM INEVITABLE"
          })
        }), e.jsxs("div", {
          className: xe.body,
          children: [e.jsx("div", {
            className: xe.image_container,
            children: e.jsx("img", {
              alt: "img",
              className: xe.image,
              src: an
            })
          }), e.jsxs("div", {
            className: xe.description_container,
            children: [e.jsxs("div", {
              className: xe.buyer_info,
              children: [e.jsx("img", {
                alt: "avatar",
                src: a.user.userPic && a.user.userPic !== "" ? a.user.userPic : tt,
                className: xe.avatar
              }), " ", e.jsx("span", {
                className: xe.name,
                children: a.user.firstName
              }), o && e.jsx("span", {
                children: "from"
              }), o && e.jsxs("div", {
                className: xe.squad_info,
                children: [e.jsx("img", {
                  alt: "avatar",
                  src: o.logo && o.logo !== "" ? o.logo : Mt,
                  className: xe.squad_avatar
                }), e.jsx(pn, {
                  address: `${vt}?startapp=${btoa(`id=${o.squadId}`)}`,
                  display: o.name,
                  limit: 18
                })]
              }), o && e.jsx("span", {
                children: "squad"
              }), e.jsxs("div", {
                children: [e.jsx("span", {
                  children: "got"
                }), e.jsx("div", {
                  className: xe.thanos_snap_container,
                  children: e.jsx("span", {
                    className: xe.thanos_snap_text,
                    children: "Pixanos' Snap"
                  })
                })]
              })]
            }), e.jsx("div", {
              className: xe.text_container,
              children: e.jsxs("span", {
                className: xe.text,
                children: ["Now he takes every second pixel. ", e.jsx("br", {}), " Legendary!"]
              })
            })]
          })]
        })]
      })
    })
  },
  _D = () => {
    var o, r;
    const t = c(l => l.user.user),
      n = g(),
      s = c(l => l.main.showNoChargesPopup),
      a = c(l => l.main.settings);
    let i = `${Nt}?startapp=f${((r=(o=window.Telegram.WebApp.initDataUnsafe)==null?void 0:o.user)==null?void 0:r.id)||""}`;
    return t && t.squad && t.squad.id !== null && (i += `_s${t.squad.id}`), e.jsx(Ye, {
      show: s,
      onPointerUp: () => n(ya()),
      children: e.jsxs("div", {
        className: k.container,
        onPointerUp: l => {
          l.stopPropagation()
        },
        children: [e.jsxs("div", {
          className: k.header,
          children: [e.jsx("div", {
            className: k.title,
            children: "Oops!"
          }), e.jsx("div", {
            className: k.close_container,
            onPointerUp: () => {
              n(ya())
            },
            children: e.jsx("div", {
              className: k.close,
              children: e.jsx(I, {
                size: 30,
                children: ""
              })
            })
          })]
        }), e.jsx("div", {
          className: k.body,
          children: e.jsxs("div", {
            className: k.content,
            children: [e.jsx("div", {
              className: k.image_container_charges,
              children: e.jsx("img", {
                alt: "image",
                className: k.image_charges,
                src: Dr
              })
            }), e.jsxs("div", {
              className: k.description_container,
              children: [e.jsx("span", {
                className: k.bold,
                children: "The energy is over!"
              }), e.jsxs("span", {
                className: k.center,
                children: ["Wait for the energy to recover.", e.jsx("br", {}), "Invite frens and get a bonus:"]
              })]
            }), e.jsxs("div", {
              className: k.benefits_container,
              children: [e.jsx("div", {}), e.jsxs("div", {
                className: k.benefits_item,
                children: ["No Premium:   ", " ", e.jsx("div", {
                  className: k.benefits_icon_container,
                  children: e.jsx(U, {
                    size: 16,
                    className: k.icon_invite
                  })
                }), a.InitialCoins]
              }), e.jsx("div", {}), " ", e.jsx("div", {}), e.jsxs("div", {
                className: k.benefits_item,
                children: ["Premium:   ", " ", e.jsx("div", {
                  className: k.benefits_icon_container,
                  children: e.jsx(U, {
                    size: 16,
                    className: k.icon_invite
                  })
                }), " ", a.RefRewardCoinsPremium]
              }), e.jsx("div", {})]
            })]
          })
        }), e.jsxs("div", {
          className: k.footer,
          children: [e.jsx(Gt, {
            url: i
          }), e.jsx("button", {
            className: k.button,
            onPointerUp: l => {
              l.stopPropagation(), window.Telegram.WebApp.openLink(`https://t.me/share/url?url=${i}`), n(ya())
            },
            children: "Share"
          })]
        })]
      })
    })
  },
  xD = () => Ys().pathname === "/" ? null : e.jsx("div", {
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
  fD = "_layout_1f2lr_1",
  vD = "_item_1f2lr_19",
  yD = "_image_1f2lr_38",
  Wr = {
    layout: fD,
    item: vD,
    image: yD
  },
  wD = ({
    item: t
  }) => {
    const n = g(),
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
        n(Ni(t.id))
      }, 3e3);
      return () => {
        clearTimeout(i)
      }
    }, []), e.jsxs(Sn.div, {
      variants: s,
      initial: "hidden",
      animate: "enter",
      exit: "exit",
      transition: {
        duration: .3
      },
      className: Wr.item,
      onPointerUp: () => {
        n(Ni(t.id))
      },
      children: [e.jsx(I, {
        size: 20,
        children: a
      }), t.text]
    })
  },
  jD = () => {
    const t = c(n => n.toast.items);
    return nt.createPortal(e.jsx("div", {
      className: Wr.layout,
      children: e.jsx(Ya, {
        children: t.map(n => e.jsx(wD, {
          item: n
        }, n.id))
      })
    }), document.body)
  },
  bD = "_layout_1nuac_1",
  ND = "_container_1nuac_19",
  ID = "_image_container_1nuac_30",
  CD = "_image_1nuac_30",
  PD = "_text_container_1nuac_42",
  SD = "_title_1nuac_49",
  BD = "_button_container_1nuac_55",
  TD = "_button_1nuac_55",
  ht = {
    layout: bD,
    container: ND,
    image_container: ID,
    image: CD,
    text_container: PD,
    title: SD,
    button_container: BD,
    button: TD
  },
  ED = () => {
    const t = g();
    return c(s => s.main.showNoFlagsPopup) ? nt.createPortal(e.jsx("div", {
      className: ht.layout,
      children: e.jsxs("div", {
        className: ht.container,
        children: [e.jsx("div", {
          className: ht.image_container,
          children: e.jsx("img", {
            alt: "img",
            className: ht.image,
            src: ia
          })
        }), e.jsxs("div", {
          className: ht.text_container,
          children: [e.jsx("div", {
            className: ht.title,
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
          className: ht.button_container,
          children: e.jsx("button", {
            className: ht.button,
            onPointerUp: () => {
              t(Lh(!1))
            },
            children: "That’s so wise!"
          })
        })]
      })
    }), document.body) : null
  },
  DD = ({
    isPopupContent: t = !0
  }) => {
    const n = t ? "Squad" : "My Squad",
      s = St(t);
    return e.jsxs("div", {
      className: R(T.container, !t && T.page),
      children: [t && e.jsx(Mr, {}), e.jsx("div", {
        children: e.jsx("span", {
          className: T.title,
          children: n
        })
      }), e.jsx(Ur, {
        ...s
      }), e.jsx(Or, {
        ...s
      }), e.jsx(Qr, {
        ...s
      }), e.jsx(Fr, {
        ...s
      }), e.jsx(Gr, {
        ...s
      })]
    })
  },
  kD = () => {
    const t = g(),
      {
        item: n
      } = St(),
      s = !0;
    return e.jsx(Ye, {
      show: n.dataSource !== null,
      onPointerUp: a => {
        a.stopPropagation(), t(or())
      },
      children: e.jsxs("div", {
        className: Rr.layout,
        onPointerUp: a => {
          a.stopPropagation()
        },
        children: [n.dataSource === Je.userFromPixelInfo && e.jsx(La, {
          isPopupContent: s
        }), n.dataSource === Je.userFromRating && e.jsx(La, {
          isPopupContent: s
        }), n.dataSource === Je.squadFromData && e.jsx(DD, {})]
      })
    })
  },
  RD = "_overlay_1vl8z_1",
  MD = "_top_container_1vl8z_10",
  UD = "_bottom_container_1vl8z_15",
  OD = "_side_menu_1vl8z_20",
  QD = "_menu_safe_area_inset_1vl8z_36",
  FD = "_menu_header_1vl8z_40",
  GD = "_close_button_1vl8z_53",
  zD = "_menu_list_1vl8z_58",
  LD = "_icon_1vl8z_79",
  HD = "_icon_not_pixel_1vl8z_87",
  qD = "_gold_pixel_1vl8z_97",
  YD = "_menu_list_li_1vl8z_103",
  XD = "_menu_list_text_1vl8z_109",
  VD = "_menu_list_new_item_1vl8z_113",
  JD = "_button_wrapper_1vl8z_136",
  WD = "_button_content_1vl8z_145",
  ZD = "_footer_1vl8z_152",
  KD = "_avatar_1vl8z_158",
  $D = "_ratings_image_container_1vl8z_165",
  ek = "_ratings_image_1vl8z_165",
  W = {
    overlay: RD,
    top_container: MD,
    bottom_container: UD,
    side_menu: OD,
    menu_safe_area_inset: QD,
    menu_header: FD,
    close_button: GD,
    menu_list: zD,
    icon: LD,
    icon_not_pixel: HD,
    gold_pixel: qD,
    menu_list_li: YD,
    menu_list_text: XD,
    menu_list_new_item: VD,
    button_wrapper: JD,
    button_content: WD,
    footer: ZD,
    avatar: KD,
    ratings_image_container: $D,
    ratings_image: ek
  },
  eo = [.215, .61, .355, 1],
  tk = {
    hidden: {
      x: "-100%",
      transition: {
        type: "tween",
        duration: .25,
        ease: eo
      }
    },
    visible: {
      x: 0,
      transition: {
        type: "tween",
        duration: .25,
        ease: eo
      }
    }
  },
  nk = "_button_25266_1",
  sk = "_decor_25266_13",
  ak = "_dark_25266_22",
  to = {
    button: nk,
    decor: sk,
    dark: ak
  },
  no = ({
    children: t,
    variant: n = "dark",
    onPointerUp: s = () => {},
    style: a = {},
    className: i = void 0
  }) => e.jsx("button", {
    onPointerUp: s,
    className: R(to.button, to[n], i),
    style: a,
    children: t
  }),
  ik = "_layout_4kkfr_1",
  ok = "_line_4kkfr_14",
  rk = "_button_4kkfr_19",
  Zt = {
    layout: ik,
    line: ok,
    button: rk
  },
  ck = ({
    className: t = void 0
  }) => {
    const n = g(),
      s = J();
    return e.jsx("div", {
      className: R(Zt.layout, t),
      children: e.jsxs("div", {
        className: Zt.line,
        children: [e.jsx("div", {
          className: Zt.button,
          onPointerUp: () => {
            n(Rt(!1)), s.push("/rules")
          },
          children: "Rules"
        }), e.jsx("div", {
          className: Zt.button,
          onPointerUp: () => {
            ee(ro)
          },
          children: "Support"
        }), e.jsx("div", {
          className: Zt.button,
          onPointerUp: () => {
            n(Rt(!1)), s.push("/terms")
          },
          children: "Terms"
        }), e.jsx("div", {
          className: Zt.button,
          onPointerUp: () => {
            n(Rt(!1)), s.push("/privacy")
          },
          children: "Privacy"
        })]
      })
    })
  },
  lk = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAABtQTFRFR3BM////////////////////////////////Fv0dDgAAAAh0Uk5TABU6XISq0+/2d3cmAAABKElEQVR42u3Z24rDMAxFUV1s6fz/Fw+FlA4lpGOj2Ew566kPKWxEQ2NFiIiIiIiIiIiI6L/RFrgQTeVWGvggbikwPwQ+Cj+YVLHAlChKcExzKaCJaak1A9g7gg7M61UBfSDmeS0DGMAABlQFNACI8YAAgPYNAY6H8YCyPyPDg40FvL5WAA9tNKAdg6u6DVLHAjSPjwX8NYKGa+9XuhQ+k41NAMfYSjRMalIkMCWkiiUmpMneAltwJlx5RlTz1hJ/kK25qdxCvQcuRfetB/RQuZ1l1Q+/viBNZGdBmiyiHSe6yjqeeJMua3ngl3BZT70nAOTsrV95ZmDADvbcW8bEUrJ+eRmLE7xgI1e9vExdO4C9I+g40WUdnNoewPdJREREREREREREU34Aqms7WGCxI2EAAAAASUVORK5CYII=",
  dk = "_layout_eiymv_1",
  uk = "_container_eiymv_7",
  so = {
    layout: dk,
    container: uk
  },
  Ak = () => localStorage.getItem("canvasFps") ? [Number(localStorage.getItem("canvasFps"))] : [60],
  mk = () => {
    const [t, n] = ae.useState(Ak());
    return A.useEffect(() => {
      localStorage.setItem("canvasFps", String(t[0])), j.ticker.setFps(t[0])
    }, [t]), e.jsx("div", {
      className: so.layout,
      children: e.jsxs("div", {
        className: so.container,
        children: [e.jsx(Dt.Range, {
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
  pk = "_layout_7wq4a_1",
  hk = "_green_7wq4a_10",
  gk = "_red_7wq4a_14",
  Sa = {
    layout: pk,
    green: hk,
    red: gk
  },
  _k = () => {
    const t = g(),
      n = c(s => s.canvas.animations);
    return e.jsxs("div", {
      className: Sa.layout,
      onPointerUp: () => {
        t(n ? Bp() : Sp())
      },
      children: [e.jsx("span", {
        style: {
          color: "var(--font-secondary-color)"
        },
        children: "Animation:"
      }), " ", n ? e.jsx("span", {
        className: Sa.green,
        children: "on"
      }) : e.jsx("span", {
        className: Sa.red,
        children: "off"
      })]
    })
  },
  xk = () => {
    const t = c(Ws),
      n = c(Zs);
    return e.jsx("div", {
      style: {
        width: "100%",
        height: t.bottom + n.bottom
      }
    })
  },
  fk = () => {
    const t = J(),
      n = g();
    c(Le);
    const s = qs(),
      [a, i] = kn();
    c(Hd);
    const o = c(ur),
      r = c(It),
      l = () => {
        n(Rt(!1))
      },
      d = h => {
        n(Rt(!1)), t.push(h)
      },
      u = () => {
        const h = `${window.location.origin}/stars?initData=${btoa(window.Telegram.WebApp.initData)}`;
        Ct(h)
      };
    return e.jsx(e.Fragment, {
      children: e.jsx(Ya, {
        children: o && e.jsxs(e.Fragment, {
          children: [e.jsx(Sn.div, {
            className: W.overlay,
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
          }), e.jsxs(Sn.nav, {
            className: W.side_menu,
            initial: "hidden",
            animate: "visible",
            exit: "hidden",
            variants: tk,
            children: [e.jsxs("div", {
              className: W.top_container,
              children: [e.jsx("div", {
                className: W.menu_safe_area_inset
              }), e.jsxs("ul", {
                className: W.menu_list,
                children: [!r && e.jsxs("li", {
                  className: W.menu_list_li,
                  onPointerUp: () => d("/"),
                  children: [e.jsx("div", {
                    className: W.icon,
                    children: e.jsx(I, {
                      size: 24,
                      children: ""
                    })
                  }), e.jsx("span", {
                    className: W.menu_list_text,
                    children: "Canvas"
                  })]
                }), e.jsxs("li", {
                  className: W.menu_list_li,
                  onPointerUp: () => d("/tournament"),
                  children: [e.jsx("div", {
                    className: W.icon_not_pixel,
                    children: e.jsx("img", {
                      alt: "image",
                      className: W.gold_pixel,
                      src: xi
                    })
                  }), e.jsx("span", {
                    className: W.menu_list_text,
                    style: {
                      transform: "translateX(-6px)"
                    },
                    children: "Telegram Battle"
                  }), e.jsx("span", {
                    className: W.menu_list_new_item,
                    children: "new"
                  })]
                }), e.jsxs("li", {
                  className: W.menu_list_li,
                  onPointerUp: () => d("/ratings"),
                  children: [e.jsx("div", {
                    className: W.ratings_image_container,
                    children: e.jsx("img", {
                      alt: "noavatar",
                      className: W.ratings_image,
                      src: lk
                    })
                  }), e.jsx("span", {
                    className: W.menu_list_text,
                    children: "Ratings"
                  })]
                }), e.jsxs("li", {
                  className: W.menu_list_li,
                  onPointerUp: () => d("/secrets"),
                  children: [e.jsx("div", {
                    className: W.icon,
                    children: e.jsx(I, {
                      size: 24,
                      children: ""
                    })
                  }), e.jsx("span", {
                    className: W.menu_list_text,
                    children: "Secrets"
                  })]
                }), e.jsxs("li", {
                  className: W.menu_list_li,
                  onPointerUp: () => d("/daily"),
                  children: [e.jsx("div", {
                    className: W.icon,
                    children: e.jsx(I, {
                      size: 24,
                      children: ""
                    })
                  }), e.jsx("span", {
                    className: W.menu_list_text,
                    children: "Daily tasks"
                  })]
                }), e.jsxs("li", {
                  className: W.menu_list_li,
                  onPointerUp: () => d("/history"),
                  children: [e.jsx("div", {
                    className: W.icon,
                    children: e.jsx(I, {
                      size: 24,
                      children: ""
                    })
                  }), e.jsx("span", {
                    className: W.menu_list_text,
                    children: "My History"
                  })]
                })]
              })]
            }), e.jsxs("div", {
              className: W.bottom_container,
              children: [e.jsx(_k, {}), e.jsx(mk, {}), e.jsxs("div", {
                className: W.button_wrapper,
                children: [s !== "" && e.jsx(no, {
                  onPointerUp: () => {
                    a.disconnect()
                  },
                  variant: "dark",
                  style: {
                    width: "90%"
                  },
                  children: e.jsxs("div", {
                    className: W.button_content,
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
                }), e.jsx(no, {
                  onPointerUp: u,
                  variant: "dark",
                  style: {
                    width: "90%"
                  },
                  children: e.jsxs("div", {
                    className: W.button_content,
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
              }), e.jsx(ck, {}), e.jsx(xk, {})]
            })]
          })]
        })
      })
    })
  },
  vk = "_layout_1at34_1",
  yk = "_container_1at34_10",
  wk = "_item_1at34_14",
  Ba = {
    layout: vk,
    container: yk,
    item: wk
  },
  jk = 8,
  bk = 16,
  Nk = 500,
  Zr = 800,
  ao = window.innerWidth,
  io = 100,
  Ik = () => Array.from(Array(100)).map(() => {
    const t = M(jk, bk),
      n = `hsl(${M(0,360)} , 70%, 50%)`,
      s = M(Nk, Zr),
      a = M(-ao, ao),
      i = M(-io, io);
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
  const [s, a] = A.useState(Ik()), [i, o] = A.useState(!1);
  return A.useEffect(() => {
    t && setTimeout(() => {
      o(!0), setTimeout(() => {
        n(!1), o(!1)
      }, Zr)
    }, 200)
  }, [t]), e.jsx("div", {
    className: Ba.layout,
    style: {
      visibility: t ? "visible" : "hidden"
    },
    children: e.jsx("div", {
      className: Ba.container,
      children: s.map((r, l) => e.jsx("div", {
        className: Ba.item,
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
const Ck = "_container_gb8eq_1",
  Pk = "_header_gb8eq_11",
  Sk = "_title_gb8eq_17",
  Bk = "_close_container_gb8eq_23",
  Tk = "_close_gb8eq_23",
  Ek = "_body_gb8eq_47",
  Dk = "_content_gb8eq_59",
  kk = "_time_left_container_gb8eq_65",
  Rk = "_timer_gb8eq_69",
  Mk = "_image_container_gb8eq_73",
  Uk = "_image_gb8eq_73",
  Ok = "_glow_container_gb8eq_91",
  Qk = "_glow_gb8eq_91",
  Fk = "_rotate_gb8eq_1",
  Gk = "_glow_reverse_gb8eq_107",
  zk = "_description_container_gb8eq_113",
  Lk = "_bold_gb8eq_123",
  Hk = "_gray_gb8eq_128",
  qk = "_center_gb8eq_132",
  Yk = "_gold_gb8eq_136",
  Xk = "_button_gb8eq_144",
  fe = {
    container: Ck,
    header: Pk,
    title: Sk,
    close_container: Bk,
    close: Tk,
    body: Ek,
    content: Dk,
    time_left_container: kk,
    timer: Rk,
    image_container: Mk,
    image: Uk,
    glow_container: Ok,
    glow: Qk,
    rotate: Fk,
    glow_reverse: Gk,
    description_container: zk,
    bold: Lk,
    gray: Hk,
    center: qk,
    gold: Yk,
    button: Xk
  },
  Vk = "/assets/cup_glad-DGT2PBmm.png",
  Jk = () => {
    const t = J(),
      n = c(Le),
      [s, a] = A.useState(!1),
      i = "showCreateTournamentTemplatePopup";
    return A.useEffect(() => (Ka() && (localStorage.getItem(i) || a(!0)), () => {}), [n]), e.jsx(Ye, {
      show: s,
      children: e.jsx("div", {
        className: fe.container,
        onPointerUp: o => {
          o.stopPropagation()
        },
        children: e.jsxs("div", {
          className: fe.body,
          children: [e.jsx("div", {
            className: fe.header,
            children: e.jsx("div", {
              className: fe.close_container,
              children: e.jsx("div", {
                className: fe.close,
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
            className: fe.title,
            children: "Get ready for Telegram Battle!"
          }), e.jsxs("div", {
            className: fe.content,
            children: [e.jsxs("div", {
              className: fe.image_container,
              children: [e.jsx("div", {
                className: fe.glow_container,
                children: e.jsx("img", {
                  alt: "image",
                  className: fe.glow,
                  src: qr
                })
              }), e.jsx("div", {
                className: fe.glow_container,
                children: e.jsx("img", {
                  alt: "image",
                  className: fe.glow_reverse,
                  src: Yr
                })
              }), e.jsx("img", {
                alt: "image",
                className: fe.image,
                src: Vk
              })]
            }), e.jsxs("div", {
              className: fe.description_container,
              children: [e.jsx("span", {
                children: "Select a template and win Telegram Battle!"
              }), e.jsxs("span", {
                children: ["Join the race for the", " ", e.jsx("span", {
                  className: fe.gold,
                  children: "Golden Pixel"
                }), "."]
              })]
            })]
          }), e.jsx("button", {
            className: fe.button,
            onPointerUp: async o => {
              o.stopPropagation(), t.push("/tournament"), localStorage.setItem(i, "true"), a(!1)
            },
            children: "Select template"
          })]
        })
      })
    })
  },
  Wk = "_layout_xga4i_1",
  Zk = "_container_xga4i_14",
  Kk = "_header_xga4i_20",
  $k = "_close_xga4i_25",
  e4 = "_body_xga4i_38",
  t4 = "_image_container_xga4i_42",
  n4 = "_image_xga4i_42",
  s4 = "_glow_xga4i_55",
  a4 = "_forward_xga4i_62",
  i4 = "_rotate_xga4i_1",
  o4 = "_reverse_xga4i_66",
  r4 = "_text_container_xga4i_70",
  c4 = "_title_xga4i_78",
  l4 = "_description_xga4i_82",
  d4 = "_footer_xga4i_86",
  u4 = "_button_xga4i_90",
  ve = {
    layout: Wk,
    container: Zk,
    header: Kk,
    close: $k,
    body: e4,
    image_container: t4,
    image: n4,
    glow: s4,
    forward: a4,
    rotate: i4,
    reverse: o4,
    text_container: r4,
    title: c4,
    description: l4,
    footer: d4,
    button: u4
  },
  A4 = "_layout_a9x11_1",
  m4 = "_container_a9x11_10",
  p4 = "_star_a9x11_14",
  h4 = "_move_a9x11_1",
  Ta = {
    layout: A4,
    container: m4,
    star: p4,
    move: h4
  },
  g4 = A.memo(() => {
    const t = Array.from(Array(30));
    return e.jsx("div", {
      className: Ta.layout,
      children: e.jsx("div", {
        className: Ta.container,
        children: t.map((n, s) => {
          const a = M(4, 14);
          return e.jsx(I, {
            size: a,
            className: Ta.star,
            style: {
              animationDelay: `-${s*300}ms`,
              transform: `translate(${M(-80,-170)*(s%2===1?1:-1)}px, ${M(-100,100)}px)`
            },
            children: ""
          }, s)
        })
      })
    })
  }, () => !1),
  _4 = () => {
    const t = g(),
      [n, s] = A.useState(null),
      a = c(Le);
    c(u => u.reward.id);
    const i = c(u => u.reward.rewardUserId),
      o = c(u => u.reward.showPopup),
      [r, l] = A.useState(!1),
      d = async () => {
        if (r && (t(c_()), t(u_()), n && n.good_id)) {
          const u = await X.claimRewardById({
            rewardId: i,
            userId: a.id
          });
          (u.status === 200 || u.status === 204) && t($t({
            product: n.good_id,
            amount: 1
          }))
        }
      };
    return A.useEffect(() => {
      const u = setTimeout(() => {
        l(!0)
      }, 1e3);
      return () => {
        clearTimeout(u)
      }
    }, []), A.useEffect(() => (i && (async () => {
      const h = await X.getRewardById({
        rewardId: i
      });
      if (h.status === 200) {
        const _ = h.data;
        s(_.reward)
      }
    })(), () => {}), [i]), e.jsx(Ye, {
      show: o,
      onPointerUp: d,
      children: e.jsx("div", {
        className: ve.layout,
        onPointerUp: u => {
          u.stopPropagation()
        },
        children: e.jsxs("div", {
          className: ve.container,
          children: [e.jsx("div", {
            className: ve.header,
            children: e.jsx("div", {
              className: ve.close,
              onPointerUp: d,
              children: e.jsx(I, {
                size: 24,
                children: ""
              })
            })
          }), e.jsxs("div", {
            className: ve.body,
            children: [e.jsxs("div", {
              className: ve.image_container,
              children: [e.jsx(g4, {}), e.jsx("img", {
                alt: "glow",
                src: Ga,
                className: R(ve.glow, ve.forward)
              }), e.jsx("img", {
                alt: "glow",
                src: Ga,
                className: R(ve.glow, ve.reverse)
              }), e.jsx("img", {
                alt: "img",
                src: n ? n.image_url : "",
                className: ve.image
              })]
            }), e.jsxs("div", {
              className: ve.text_container,
              children: [e.jsx("div", {
                className: ve.title,
                children: n ? n.name : "Loading..."
              }), e.jsx("div", {
                className: ve.description,
                children: n ? n.description : "Loading..."
              })]
            })]
          }), e.jsx("div", {
            className: ve.footer,
            children: e.jsx("button", {
              className: ve.button,
              onPointerUp: u => {
                u.stopPropagation(), d()
              },
              children: "Claim"
            })
          })]
        })
      })
    })
  };
window.Telegram.WebApp.DeviceOrientation;
const x4 = "_layout_15tw0_1",
  f4 = "_container_15tw0_7",
  v4 = "_close_button_15tw0_16",
  y4 = "_title_container_15tw0_24",
  w4 = "_image_container_15tw0_31",
  j4 = "_image_15tw0_31",
  b4 = "_text_container_15tw0_50",
  N4 = "_button_container_15tw0_56",
  ot = {
    layout: x4,
    container: f4,
    close_button: v4,
    title_container: y4,
    image_container: w4,
    image: j4,
    text_container: b4,
    button_container: N4
  },
  I4 = () => {
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
          const l = await Ee.getTournamentTemplateById({
            id: t.refId
          });
          if (l.status === 200 && l.data && l.data.approved) {
            const d = l.data;
            s(d)
          }
        })()
      } catch {}
    }, [t, s, i]), e.jsx(Ye, {
      show: n,
      onPointerUp: o,
      children: e.jsx("div", {
        className: ot.layout,
        onPointerUp: r => {
          r.stopPropagation()
        },
        children: e.jsxs("div", {
          className: ot.container,
          children: [e.jsx("div", {
            className: ot.close_button,
            onPointerUp: o,
            children: e.jsx(I, {
              size: 26,
              children: ""
            })
          }), e.jsx("div", {
            className: ot.title_container,
            children: e.jsx("span", {
              children: "Friend's template invitation"
            })
          }), e.jsx("div", {
            className: ot.image_container,
            children: e.jsx("img", {
              alt: "img",
              className: `${ot.image} ${ot.first_image}`,
              src: n ? n.url : ""
            })
          }), e.jsx("div", {
            className: ot.text_container,
            children: e.jsxs("span", {
              children: ["Your friend has a template in tournament. ", e.jsx("br", {}), " Ready to team up?"]
            })
          }), e.jsx("div", {
            className: ot.button_container,
            children: e.jsx(Xr, {
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
  C4 = "_layout_1vlcp_1",
  P4 = "_container_1vlcp_13",
  S4 = "_close_button_1vlcp_21",
  B4 = "_body_1vlcp_29",
  T4 = "_image_container_1vlcp_40",
  E4 = "_image_1vlcp_40",
  D4 = "_shake_1vlcp_1",
  k4 = "_description_container_1vlcp_54",
  R4 = "_buyer_info_1vlcp_64",
  M4 = "_avatar_1vlcp_72",
  U4 = "_name_1vlcp_78",
  O4 = "_squad_info_1vlcp_82",
  Q4 = "_squad_avatar_1vlcp_88",
  F4 = "_text_container_1vlcp_94",
  G4 = "_text_1vlcp_94",
  z4 = "_thanos_snap_container_1vlcp_105",
  L4 = "_thanos_snap_text_1vlcp_114",
  H4 = "_prev_snaps_container_1vlcp_121",
  q4 = "_prev_snaps_text_1vlcp_128",
  Y4 = "_prev_snaps_list_container_1vlcp_134",
  X4 = "_prev_snaps_list_item_1vlcp_142",
  V4 = "_button_container_1vlcp_148",
  J4 = "_button_1vlcp_148",
  W4 = "_button_text_1vlcp_163",
  te = {
    layout: C4,
    container: P4,
    close_button: S4,
    body: B4,
    image_container: T4,
    image: E4,
    shake: D4,
    description_container: k4,
    buyer_info: R4,
    avatar: M4,
    name: U4,
    squad_info: O4,
    squad_avatar: Q4,
    text_container: F4,
    text: G4,
    thanos_snap_container: z4,
    thanos_snap_text: L4,
    prev_snaps_container: H4,
    prev_snaps_text: q4,
    prev_snaps_list_container: Y4,
    prev_snaps_list_item: X4,
    button_container: V4,
    button: J4,
    button_text: W4
  },
  Z4 = t => {
    const n = new Date;
    n.setHours(0, 0, 0, 0);
    const s = new Date(n);
    s.setDate(n.getDate() - 1);
    const a = new Date(t);
    return a.setHours(0, 0, 0, 0), a.getTime() === n.getTime() ? "today" : a.getTime() === s.getTime() ? "yesterday" : "once"
  },
  K4 = t => {
    const n = String(t.getHours()).padStart(2, "0"),
      s = String(t.getMinutes()).padStart(2, "0");
    return ` ${Z4(t)} at ${n}:${s}`
  },
  $4 = () => {
    const t = g(),
      n = c(r => r.main.showPixanosRating),
      s = c(r => r.main.pixanosRatingData),
      a = c(r => r.color.active);
    if (!s) return null;
    const i = s[0],
      o = i.user.squad;
    return e.jsx(Ye, {
      show: n,
      onPointerUp: () => {
        t(fs(!1))
      },
      children: e.jsxs("div", {
        className: te.container,
        children: [e.jsx("div", {
          className: te.close_button,
          onPointerUp: () => {
            t(fs(!1))
          },
          children: e.jsx(I, {
            size: 26,
            children: ""
          })
        }), e.jsxs("div", {
          className: te.body,
          children: [e.jsx("div", {
            className: te.image_container,
            children: e.jsx("img", {
              alt: "img",
              className: te.image,
              src: an
            })
          }), e.jsxs("div", {
            className: te.description_container,
            children: [e.jsxs("div", {
              className: te.buyer_info,
              children: [e.jsx("img", {
                alt: "avatar",
                src: i.user.userPic && i.user.userPic !== "" ? i.user.userPic : tt,
                className: te.avatar
              }), " ", e.jsx("span", {
                className: te.name,
                children: i.user.firstName
              }), o && e.jsx("span", {
                children: "from"
              }), o && e.jsxs("div", {
                className: te.squad_info,
                children: [e.jsx("img", {
                  alt: "avatar",
                  src: o.logo && o.logo !== "" ? o.logo : Mt,
                  className: te.squad_avatar
                }), e.jsx(pn, {
                  address: `${vt}?startapp=${btoa(`id=${o.squadId}`)}`,
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
                  className: te.thanos_snap_container,
                  children: e.jsx("span", {
                    className: te.thanos_snap_text,
                    children: "Pixanos' Snap"
                  })
                }), e.jsx("span", {
                  children: K4(new Date(i.info.datetime))
                })]
              })]
            }), e.jsx("div", {
              className: te.text_container,
              children: e.jsx("span", {
                className: te.text,
                children: "Now his taking every second pixel"
              })
            })]
          }), e.jsxs("div", {
            className: te.prev_snaps_container,
            children: [e.jsx("div", {
              className: te.prev_snaps_text,
              children: "Previous five Snaps by:"
            }), e.jsx("div", {
              className: te.prev_snaps_list_container,
              children: s.map((r, l) => l === 0 ? null : e.jsxs("div", {
                className: te.prev_snaps_list_item,
                children: [e.jsx("img", {
                  alt: "avatar",
                  src: r.user.userPic && r.user.userPic !== "" ? r.user.userPic : tt,
                  className: te.avatar
                }), " ", e.jsx("span", {
                  className: te.name,
                  children: r.user.firstName
                })]
              }, l))
            })]
          }), e.jsx("div", {
            className: te.button_container,
            children: e.jsx("button", {
              className: R(te.button),
              onPointerUp: async r => {
                var l;
                r.stopPropagation();
                try {
                  const d = await X.buy({
                    type: 13,
                    qty: 1,
                    pixanosColor: a
                  });
                  d.status === 200 && ((l = d == null ? void 0 : d.data) == null ? void 0 : l.ok) === !0 && window.Telegram.WebApp.openInvoice(d.data.result, u => {
                    var h, _;
                    if (u === "paid") t(z({
                      id: performance.now(),
                      text: "Success!",
                      icon: ""
                    })), t(fs(!1)), (_ = (h = window.Telegram.WebApp) == null ? void 0 : h.HapticFeedback) == null || _.notificationOccurred("error");
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
                className: R(te.button_text, te.thanos_snap_text),
                children: ["Buy Pixanos' Snap for 40 000 ", e.jsx(on, {
                  fontSize: 16
                })]
              })
            })
          })]
        })]
      })
    })
  },
  eR = () => e.jsxs("div", {
    className: bn.layout,
    children: [e.jsx(vT, {}), e.jsx(gT, {}), e.jsx(ox, {}), e.jsx(O2, {}), e.jsx(_T, {}), e.jsx(xD, {}), e.jsx(ED, {}), e.jsx(kD, {}), e.jsx(HT, {}), e.jsx(_D, {}), e.jsx(Jk, {}), e.jsx(_4, {}), e.jsx(I4, {}), e.jsx(ME, {}), e.jsx(gD, {}), e.jsx($4, {}), e.jsx(jD, {}), e.jsx(fk, {})]
  }),
  tR = () => {
    const t = g(),
      n = c(a => a.main.startAppTs),
      s = c(Le);
    return A.useEffect(() => {
      if (s && (s.id === 555832576 || s.id === 2096307477)) return;
      const a = setInterval(() => {
        Date.now() - n > 30 * 60 * 1e3 && (t(Mh()), clearInterval(a))
      }, 100);
      return () => {
        clearInterval(a)
      }
    }, [n, s]), null
  },
  nR = () => {
    var i, o;
    const t = g(),
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
          isTMA: yt.isDev,
          authData: yt.devUserInitData
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
      if (t(Tg(r)), l) {
        const d = a(l);
        t(Od(d)), t(Dg(l))
      }
    }, [t])
  },
  sR = () => (A.useEffect(() => {
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
              u = a.changedTouches[0].clientY;
            d <= 0 && t < u && a.cancelable && a.preventDefault()
          } else a.preventDefault()
        };
      document.documentElement.addEventListener("touchstart", n, {
        passive: !1
      }), document.documentElement.addEventListener("touchmove", s, {
        passive: !1
      })
    }
  }, []), null),
  aR = "_layout_ieygs_1",
  iR = "_container_ieygs_8",
  oR = "_logo_container_ieygs_17",
  rR = "_logo_ieygs_17",
  cR = "_animate_ieygs_1",
  lR = "_center_ieygs_37",
  dR = "_title_ieygs_51",
  uR = "_description_ieygs_58",
  AR = "_button_container_ieygs_63",
  mR = "_button_ieygs_63",
  pR = "_b_ieygs_63",
  Tt = {
    layout: aR,
    container: iR,
    logo_container: oR,
    logo: rR,
    animate: cR,
    center: lR,
    title: dR,
    description: uR,
    button_container: AR,
    button: mR,
    b: pR
  },
  hR = () => {
    const t = c(lr);
    return e.jsx("div", {
      className: Tt.layout,
      children: e.jsxs("div", {
        className: Tt.container,
        children: [e.jsx("div", {
          className: Tt.logo_container,
          children: e.jsx("div", {
            className: Tt.logo,
            children: e.jsx("div", {
              className: Tt.center
            })
          })
        }), e.jsx("div", {
          className: Tt.button_container,
          children: e.jsx("button", {
            className: Tt.button,
            onPointerUp: () => {
              t ? ee("https://t.me/notpixel_channel") : Ct("https://t.me/notpixel_channel")
            },
            children: "Not Pixel Channel"
          })
        })]
      })
    })
  },
  gR = "/assets/loading-D8SQALTR.gif",
  _R = () => e.jsxs("div", {
    className: bn.loading_container,
    children: [e.jsx("div", {
      className: bn.image_container,
      children: e.jsx("img", {
        alt: "img",
        src: gR,
        className: bn.image
      })
    }), e.jsx("div", {
      className: bn.text,
      children: "Preparing pixels..."
    })]
  }),
  xR = () => {
    const t = g();
    A.useEffect(() => {
      const n = (s, a) => {
        ln.get(s, (i, o) => {
          if (i === null && o !== "") try {
            const r = JSON.parse(o);
            a(r)
          } catch (r) {
            console.error(`Ошибка парсинга данных ${s}:`, r)
          } else i !== null && console.error(`Ошибка при получении данных ${s}:`, i)
        })
      };
      n("colors", s => {
        Array.isArray(s) && s.length > 0 ? (t(vh(s)), t(si(s[0]))) : console.warn("Полученные данные цветов не являются непустым массивом")
      }), n("boosts", s => {
        t(Mu(s))
      })
    }, [t])
  },
  fR = () => {
    const t = g(),
      n = c(h => h.main.startParams),
      s = async () => {
        try {
          const _ = (await t(Ut.getUser())).payload.data;
          if (_.error) throw new Error(_.error);
          return t(Eg(!0)), _
        } catch (h) {
          return console.error("Ошибка при получении данных пользователя:", h), !1
        }
      }, a = async () => {
        try {
          t(Ge.getPeriods())
        } catch (h) {
          console.error("Ошибка получения периодов:", h)
        }
      }, i = async () => {
        try {
          await t(be.info()).unwrap()
        } catch (h) {
          console.error("Ошибка получения информации о майнинге:", h)
        }
      }, o = async h => {
        if (!Xo(h)) return Promise.resolve();
        try {
          t(Ge.getMyTemplate({
            id: h.id
          }))
        } catch (_) {
          console.error("Ошибка получения турнирного трафарета:", _)
        }
      }, r = async () => {
        try {
          t(Ge.getSelectedTemplate())
        } catch (h) {
          console.error("Ошибка получения выбранного турнирного трафарета:", h)
        }
      }, l = async () => {
        try {
          await t(bt.getWorldTemplate())
        } catch (h) {
          console.error("Ошибка получения подключенного трафарета:", h)
        }
      }, d = () => {
        n.squadId && t(Oa(n.squadId))
      }, u = async () => {
        const [h] = await Promise.all([s()]);
        h && (await Promise.all([i(), l(), o(h), a(), r()]), d())
      };
    A.useEffect(() => {
      u()
    }, [t])
  },
  vR = () => {
    const t = J();
    A.useEffect(() => {
      Ka() ? localStorage.getItem("skipIntro") || (t.push("/welcome"), localStorage.setItem("skipIntro", "true")) : ln.get("skipIntro", (n, s) => {
        n === null && s !== "" || (n !== null && console.error("Ошибка при получении skipIntro:", n), t.push("/welcome"))
      })
    }, [t])
  },
  Ha = t => {
    let n = "unknown",
      s = "unknown";
    return /android/i.test(t) ? (n = "mobile", s = "android") : /iPad|iPhone|iPod/.test(t) ? (n = "mobile", s = "ios") : /Windows NT/i.test(t) ? (n = "desktop", s = "windows") : /Macintosh/i.test(t) ? (n = "desktop", s = "macos") : (n = "unknown", s = "unknown"), {
      deviceType: n,
      os: s
    }
  },
  yR = t => {
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
          o = Ha(i);
        n = o.deviceType, s = o.os;
        break
    }
    return {
      deviceType: n,
      os: s
    }
  },
  wR = () => {
    const t = g(),
      n = c(s => s.auth.authData);
    A.useEffect(() => {
      var o, r;
      let s = "unknown",
        a = "unknown",
        i = "unknown";
      if (n && n !== "")
        if ((r = (o = window == null ? void 0 : window.Telegram) == null ? void 0 : o.WebApp) != null && r.platform) {
          s = window.Telegram.WebApp.platform;
          const l = yR(s);
          a = l.deviceType, i = l.os
        } else {
          const l = navigator.userAgent,
            d = Ha(l);
          a = d.deviceType, i = d.os
        }
      else {
        const l = navigator.userAgent,
          d = Ha(l);
        a = d.deviceType, i = d.os
      }
      t(Ll({
        deviceType: a,
        os: i,
        platform: s
      }))
    }, [t, n])
  },
  jR = () => {
    const t = g(),
      {
        t: n,
        i18n: s
      } = ze(),
      a = c(i => i.user.languageCode);
    A.useEffect(() => {
      s.changeLanguage(a)
    }, [t, a])
  },
  bR = () => {
    const t = g(),
      n = c(a => a.shop.selectedCurrency),
      s = c(At);
    A.useEffect(() => {
      s === ye && n === 1 && t(Bn(2)), s !== ye && t(Bn(1))
    }, [s])
  },
  NR = () => {
    const t = g(),
      n = window.Telegram.WebApp,
      s = c(It);
    return A.useEffect(() => {
      function a() {
        console.log("is fullscreen: ", this.isFullscreen), t(Hl(this.isFullscreen))
      }
      return n.onEvent("fullscreenChanged", a), () => {
        n.offEvent("fullscreenChanged", a)
      }
    }, [t]), A.useEffect(() => {
      if (j) {
        const a = window.innerWidth,
          i = window.innerHeight;
        j.app.renderer.resize(a, i), j.viewport.viewport.resize(a, i)
      }
    }, [s]), null
  },
  IR = ({
    children: t
  }) => {
    NR(), tR(), nR(), wR(), jR(), bR();
    const n = c(l => l.main.timeLimit),
      s = c(l => l.user.getUserFetchStatus),
      a = s === p.rejected && !yt.app.disableBetaError,
      i = s === p.pending || s === p.idle,
      o = n;
    return window.Telegram && !window.Telegram.WebApp.isVersionAtLeast(Lc) && sR(), xR(), fR(), vR(), a || o ? e.jsx(hR, {}) : i ? e.jsx(_R, {}) : e.jsx(e.Fragment, {
      children: t
    })
  };

function CR() {
  return e.jsx(IR, {
    children: e.jsx(eR, {})
  })
}
const PR = {
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
  SR = {
    translation: PR
  },
  BR = {
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
  TR = {
    translation: BR
  };
vc.use(xc).init({
  resources: {
    en: SR,
    ru: TR
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
console.log("init");
sx(zn);
Yc(zn);
Eh(zn);
const ER = oc.createRoot(document.getElementById("root"));
ER.render(e.jsx(ae.StrictMode, {
  children: e.jsx(dc, {
    store: zn,
    children: e.jsx(fc, {
      children: e.jsx(mc, {
        manifestUrl: "https://app.notpx.app/tonconnect-manifest.json",
        actionsConfiguration: {
          returnStrategy: "back",
          twaReturnUrl: "https://t.me/notpixel/app",
          modals: ["before"],
          notifications: ["before", "success", "error"]
        },
        language: "en",
        uiPreferences: {
          theme: pc.DARK
        },
        children: e.jsx(CR, {})
      })
    })
  })
}));