var vr = Object.defineProperty;
var wr = (t, n, s) => n in t ? vr(t, n, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: s
}) : t[n] = s;
var zs = (t, n, s) => wr(t, typeof n != "symbol" ? n + "" : n, s);
import {
  j as e,
  r as u,
  R as ae
} from "./react-DjWS3H3h.js";
import {
  r as Xe,
  c as jr
} from "./react-dom-DCoj3sTC.js";
import {
  c as Q,
  a as he,
  b as un,
  d as Na,
  e as mn,
  i as Ee,
  f as br
} from "./@reduxjs-WPf4Nv7j.js";
import {
  a as Nr
} from "./axios-BdInfei4.js";
import {
  u as c,
  a as _,
  s as Ir,
  P as Cr
} from "./react-redux-BljSBgeC.js";
import "./yaml-Dy-SgT9h.js";
import "./vite-plugin-node-polyfills-BVIVvkCX.js";
import {
  c as F
} from "./classnames-D-x1NdaJ.js";
import {
  u as An,
  a as Pr,
  b as Sr,
  c as Ns,
  T as Tr,
  d as Er
} from "./@tonconnect-C4go9-2N.js";
import {
  d as Le
} from "./@ton-CABtnvlX.js";
import {
  u as As,
  e as ps,
  a as hs
} from "./@react-spring-BiYD2lL6.js";
import {
  C as Br
} from "./centrifuge-B3TpHLNx.js";
import {
  d as Dr
} from "./fflate-DRb3BoOD.js";
import {
  u as Z,
  S as kr,
  a as ne,
  b as Is
} from "./react-router-skDq-tWz.js";
import {
  c as qt
} from "./chroma-js-CHvE9HB5.js";
import {
  m as on,
  A as Ia
} from "./framer-motion-BggZOsGS.js";
import {
  u as Be,
  T as qs,
  i as Rr
} from "./react-i18next-DUbAQzaN.js";
import {
  l as vt
} from "./react-range-COVt_hlT.js";
import {
  T as Ls
} from "./tonweb-BaiZR3hJ.js";
import {
  B as Mr
} from "./react-router-dom-DSUFG-Qy.js";
import {
  i as Ur
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
const Fr = "_stars_img_container_1wci0_1",
  Or = "_stars_img_1wci0_1",
  Qr = "_scalebubble_1wci0_1",
  zr = "_squads_img_1wci0_17",
  qr = "_title_container_1wci0_22",
  Lr = "_description_container_1wci0_28",
  Hr = "_description_1wci0_28",
  Gr = "_info_layout_1wci0_42",
  Vr = "_info_container_1wci0_52",
  Jr = "_info_row_1wci0_59",
  Yr = "_info_row_content_1wci0_65",
  Xr = "_info_row_sale_1wci0_84",
  Wr = "_not_active_1wci0_100",
  Kr = "_selected_1wci0_105",
  Zr = "_row_icon_container_1wci0_110",
  $r = "_row_icon_1wci0_110",
  ec = "_row_title_1wci0_133",
  tc = "_row_amount_1wci0_143",
  nc = "_row_price_container_1wci0_156",
  sc = "_main_info_channel_users_1wci0_166",
  Ae = {
    stars_img_container: Fr,
    stars_img: Or,
    scalebubble: Qr,
    squads_img: zr,
    title_container: qr,
    description_container: Lr,
    description: Hr,
    info_layout: Gr,
    info_container: Vr,
    info_row: Jr,
    info_row_content: Yr,
    info_row_sale: Xr,
    not_active: Wr,
    selected: Kr,
    row_icon_container: Zr,
    row_icon: $r,
    row_title: ec,
    row_amount: tc,
    row_price_container: nc,
    main_info_channel_users: sc
  },
  ac = Number(window.getComputedStyle(document.body).getPropertyValue("--header-height").replace("px", "")),
  p = {
    idle: "idle",
    pending: "pending",
    fulfilled: "fulfilled",
    rejected: "rejected"
  },
  T = {
    width: 1e3,
    height: 1e3,
    chunkSize: 750,
    chunkOrder: [6, 7, 11, 10, 9, 5, 1, 2, 3, 4, 8, 12, 16, 15, 14, 13]
  },
  Hs = {
    bomb: "Dynamite",
    pumpkin: "Pumpkin",
    pixanos: "Pixanos"
  },
  ic = 24 * 60 * 60 * 1e3,
  mt = "https://t.me/notpixel/app",
  w = {
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
    nerdGame: "nerdGame",
    openLeague: "openLeague",
    spendStars: "spendStars",
    spendCrypto: "spendCrypto",
    walletConnection: "walletConnection",
    walletVerification: "walletVerification",
    taskTypeCampaign1_74262: "taskTypeCampaign1_74262",
    taskTypeCampaign1_74264: "taskTypeCampaign1_74264",
    taskTypeCampaign2_74263: "taskTypeCampaign2_74263",
    taskTypeCampaign2_74265: "taskTypeCampaign2_74265",
    taskTypeCampaign3_74388: "taskTypeCampaign3_74388"
  },
  pe = {
    paintReward: "paintReward",
    reChargeSpeed: "reChargeSpeed",
    energyLimit: "energyLimit"
  },
  oc = ["/transaction/user/start", "/repaint/finish", "/transaction/user/complete", "/stars/shop/process", "/mining/status/claim", "/mining/claim", "/mining/status/error", "/repaint/complete", "/stars/shop/reject", "/squads/list/get", "/squads/list/update"],
  ge = {
    my: "my",
    referred: "referred",
    world: "world"
  },
  bt = "notgames_bot/squads",
  Ti = "https://t.me/notpixel_42",
  ua = "UQBv3exBKLmQcn2Fm6VlntAInW-je1YP4U59gJxaO62NCyMn",
  Fe = {
    userFromPixelInfo: "userFromPixelInfo",
    squadFromData: "squadFromData",
    userFromRating: "userFromRating"
  },
  rc = 0,
  cc = "7.7",
  ye = "unknown",
  ft = {
    3: "EQAvlWFDxGF2lXm67y4yzC17wYKD9A0guwPkMs1gOsM__NOT",
    5: "EQCvxJy4eG8hyHBFsZ7eePxrRsUQSFE_jpptRAYBmcG_DOGS",
    6: "EQDv-yr41_CZ2urg2gfegVfa44PDPjIK9F-MilEDKDUIhlwZ",
    7: "EQD-cvR0Nz6XAyRBvbhz-abTrRC6sI5tvHvvpeQraV9UAAD7",
    8: "EQB4zZusHsbU2vVTPqjhlokIOoiZhEdCMT703CWEzhTOo__X",
    9: "EQCuPm01HldiduQ55xaBF_1kaW_WAUy5DHey8suqzU_MAJOR"
  },
  lc = {
    friendsForTemplateCreation: 128
  },
  Ca = "https://notpx.app/api/v1/",
  dc = "https://image.notpx.app/api/v2/image";
let Ei;
const uc = t => {
    Ei = t
  },
  E = Nr.create({
    baseURL: Ca
  });
E.interceptors.request.use(function(t) {
  var a;
  const s = (a = Ei.getState().auth) == null ? void 0 : a.authData;
  return s ? t.headers.Authorization = `initData ${s}` : delete t.headers.Authorization, t
});
E.interceptors.request.use(function(t) {
  return oc.includes(t.url), t
});
E.interceptors.response.use(t => t, t => Promise.reject(t));
class X {
  static async getPrices() {
    return E.get("/image/prices")
  }
  static async getPixelInfo({
    id: n,
    signal: s
  }) {
    return E.get(`/image/get/${n}`, {
      signal: s
    })
  }
  static async getUser() {
    return E.get("/users/me")
  }
  static async getStats() {
    return E.get("/users/stats")
  }
  static async getUserPixels({
    offset: n,
    limit: s
  }) {
    return E.get(`/users/mypixels?offset=${n}&limit=${s}`)
  }
  static async getUserPixelsSold({
    offset: n,
    limit: s
  }) {
    return E.get(`/users/mypixels/sold?offset=${n}&limit=${s}`)
  }
  static async getUserPixelsCount() {
    return E.get("/users/mypixels/count")
  }
  static async getPriceMask({
    price: n
  }) {
    let s = n === null ? "" : `/${n}`;
    return E.get(`/image/mask${s}`, {
      responseType: "arraybuffer",
      decompress: !0
    })
  }
  static async startRepaint({
    pixelId: n,
    newColor: s
  }) {
    return E.post("/repaint/start", {
      pixelId: n,
      newColor: s
    })
  }
  static async getHistory({
    offset: n,
    limit: s
  }) {
    return E.get(`/history/all?offset=${n}&limit=${s}`)
  }
  static async buy({
    type: n,
    qty: s
  }) {
    return E.post("/buy/stars", {
      type: n,
      qty: s
    })
  }
  static async getProducts() {
    return E.get("/buy/list")
  }
  static async useProduct({
    pixelId: n,
    productId: s,
    color: a
  }) {
    return E.post("/repaint/special", {
      pixelId: n,
      type: s,
      color: a
    })
  }
  static async startTransaction({
    buyerWallet: n
  }) {
    return E.post("/transactions/start", {
      buyerWallet: n
    })
  }
  static async startShopTransaction({
    buyerWallet: n,
    goodId: s,
    daily: a = !1,
    currencyId: i,
    quantity: o
  }) {
    return E.post("/transactions/start", {
      buyerWallet: n,
      goodId: s,
      daily: a,
      currencyId: i,
      quantity: o
    })
  }
  static async putUserWallet({
    address: n
  }) {
    return E.put(`/users/wallet/${n}`)
  }
  static async getSquadInfo({
    id: n
  }) {
    return E.get(`/ratings/squads/${n}`)
  }
  static async checkSecret({
    key: n
  }) {
    return E.post("/mining/quest/check/secretWord", {
      secret_word: n
    })
  }
  static async getSecretStats() {
    return E.get("/mining/quest/stats ")
  }
  static async getDailyList() {
    return E.get("/daily/list")
  }
  static async getFirstDaily() {
    return E.get("/daily/free")
  }
  static async getRewards({
    userId: n
  }) {
    return E.get(`/users/rewards/${n}`)
  }
  static async getRewardById({
    rewardId: n
  }) {
    return E.get(`/users/rewards/distribution/${n}`)
  }
  static async claimRewardById({
    userId: n,
    rewardId: s
  }) {
    return E.post("/users/rewards/claim", {
      user_id: n,
      reward_user_id: s
    })
  }
  static async generateTonProofPayload() {
    return E.post("/wallet/ton-proof/generate-payload")
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
    return E.post("/wallet/ton-proof/check-proof", a)
  }
}
const mc = "/assets/icon_stars_new-Dk8ap_HZ.png",
  Ac = "data:image/png;base64,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",
  pc = "data:image/png;base64,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",
  hc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAMAAAC8EZcfAAAAQlBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAD////+/v7w8PDi4uLKysqwsLCampqEhIRubm5VVVU9PT0uLi4TExMAAADb2GKlAAAACHRSTlMAKFR2kKjL7EGhN34AAAcASURBVHjazJbbkqwgDEWHe7gJCvn/Xz3TUqetoXUG766X7gcrtciOka8jIJRxIaT6BlF9I4XgjJKvB0CZkLiIFIzeKcclNiD5HZKESVyBZOQWu2c6UokbkfSC5nGFO1CcnKsncDeCXK93v+Kk91xFjofCD9ZjCg9GsSPTlXgC8rCcGZ4Eu6B99zeRKjwRRff6CTwZcWK898dMFF6A2mxI8SLoGdvl/n3D8UL4Jr9HGwq8GPHQ/k3wlX6PNmR4C2zz/nvYPiR4G2TP9+0xXz2JJzP03YswZPxAbliAOcYQYuwzHkCO3kJBg+3S+nVI64peQ8G4kHAfvdegdSlYHAPW0HUDmAyAfpcDP+xpngWAojdVdHndGNYDaEH/P3L59XmjXjBQak2MuiatGUNWZwJ66mA5vum365WmVYomt+9rghVuKjjRbdWbRYPDCtIccJo7MWi3LuZop3AryuDE1pAZVoQiWBuCTdhM70qwS4KgwWNjyAoruqVUzIBtDEWv4q+ZUa13LA8TVRNje/c0rBVE3nhH8At+s4Z55KeeBv2i0qxP27XdGkSbYEH/OHfqu86ZEd/F9LIdgi1So6Az8MtLEvAD0dDAegbrsuAz5pxicK56SZ1ztjw1ZehALx41YUsLBX4ywK+G1hsDRQ10Ad55lv9gQow9Ym/1oqDFGUTbLdWChj2856uHZcGAc5CGBk51N6K1NqNhThYWZzDjHKLtmu9hByX+gJjsv/auZclxHYRW0nmAnpYs/v9X761ST+g4lsegKONFn2X35hRIYA6CQCOT8BVpmnC7ziwWEPsIeqKw8X+zrwq9UwMzdjBEdCEWIt/0L0CmBu47C81sei5K3jwo9QC0cN5ZKM0WtEZEcJm/2lb8i57auO2thIsDnRFrICxEuE4QwNMWTruljgAqYDVS8oDYzpZtfO0vhSedl/GRZtbMhxNt4y7QOpIB1Pm4CT/vVULYw9tX5a2wSSB3LTwsCNlao9qGdxv3mHahGHgLQQAbaSdkcuDEBHtgpyIQDEV6r4V+mFgkqrBMb/PQjcD09h9C2osJeuFICJkiPUMvMglxlkn6RhBMOJXwn6xK+L8SjTiEaL2rRJlgUPWfbjTiEPpchQ8mCKwSyW4J7UcGwEWSxfVYPD1s/tPJM4kh7IpYQM4H3nuzyhCBE617MEQwJMdJ1lbyzGcqRFQirAAjPTA/jI3gSY4zX2JBtkN42CgviypcSKaB/x9V/bsLCZBfi9npleC8LAuhIpEcF2Hn2lQD/hS+HTDYk2v/n0mOq7Dz5V85RFi0PnIjeNoymiBHwrghgdkXoRs5ESsC4Z3khxBSOwFieBWgWOkV4y4kWGybYOMqFAMV03CCfAifXIzwhLn1iZE+QjCytxoJOjcIYtERJBkyJ61GmGkRNKSClGDBRfcqAeCmBTOHRw1kLubsn5vqXHwRdpA/BsefQYqVYLVhmapBt+KgBeTs/QGCmT+3grcAuK3aczWdP0SwMKNdnSMDiJy+FQRvJIRjKrhOEFwqLH5iJehIhZuKIHNpMATjwpRzbdhxR0eBq/yhYBBJgsgFk5LghdrQa0iIuDBy0r7Z+5IThH0EEZEJYtE+2TvLCWrgSIez/DFeBg2C/sEeCVEMKDCRDix9DCY4K8Mgi0djCdqijDIy+U2vBHv9u1v5NfaKzkPseXZLQgRFWzuTDiyijyKo17VYRL+MJ+j1j9MVhzDKCU59L79JhvSxKEjcTByb66z6CFZ8DSaIoXP64DTagln9paDycf5kkKm4DCSICEEfZFQ+nqUEk97DKh8XCy91UbvSw947rIjVDnDByMeccwqOy+WGh9XzOXchQfxpP566mMOLEVEbpe/6MbD4RNAkIka2gO8ply76OaYJuB388q1c3JuqkZN6EpGf+OOqJvTUJkaj/9jXm9Aywfw3/SvqDag3YQDcqjUicFcZ9QbsMGHazrKFh3h6Cna1CbnyRLPdVu41oN6E4U+AbsahN51AbSzM3wTjX/QlU946KHsXJ5PUINgZA+/9U7upSuO54WJ+G/DeOd6bNBTmjUuCPYpR/+DutEXQVII9N6TbycXUhliDPPY6uN/JEZoEDSBnaaWD+6efi2kpBh6wkh8yA32WXGRw7W5jGjXnfhVpNPOatNTD7/rOEXIPaOkZs+vjd3vvEL5fDDCX8N2pzUNXz5xEUqGJ8ze75LGaz5chawwYZ1nbCV34H878mbZLAxZB6JNyds8FvI1l0CoNdRUaDVP0ifS4jFo3UyZXx07TTB24jlyIw4O7vfxEXv5desS4HH2t1dEXgx19tdrRl9MdfL3f0RckHn3F5MGXdB59zenBF8UefNXu0ZcVH3zd88EXZh985fixl7b/rr3v+OGA359e+Ec/XnH4n//4D9NIbBR1kWQ/AAAAAElFTkSuQmCC",
  gc = "/assets/icon_anon-B5YvKg3f.png",
  _c = "/assets/icon_cati-mWXfw3xk.png",
  fc = "/assets/icon_x-DBD55XHy.png",
  xc = "/assets/icon_major-BvjI4Z5H.png",
  Bi = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAADDklEQVR4nO3dsWsTURzA8ZwUHMQudhGyiItWXISCKHYTNIKD4OLiLHQpqAi6OAiijoH+CU4OCtpBcGipg4jgUt0czGiXQpGCcM6p8fe4vtwl1+/3s75c07v78uBe7pKOJElCKvbudFmWrT4ORVHUugNlWf5zzNqkKIb//UNt3hnlMwA4A4AzADgDgDMAOAOAm8Q17UQXGtY2roXjixffNva//Eej58QZAM4A4AwAzgDgDADOAOAMAG6m6u6XL66H48XdN+F1fmr7lOevN8JX3F/fyvr7KVe7h8NXnJytfEiH9Dd3wuO3NH8kXCfob+5Uej9nADgDgDMAOAOAMwA4A4AzALj9fPY80ev8M4lmP/7aDccvzMXX8bnb939sh+NjWCdIvaTSOXUGgDMAOAOAMwA4A4AzADgDgBt1URpe57+6vZB1xFLX+W137mi8TvBlO15nSK0TpO5HWB3spp67GFoncAaAMwA4A4AzADgDgDMAOAOAq/zh9I2zx8Pxuj/P771/EG9/+Wk4nqv3cjnr/ZdOzIbj+fcTxMdvL2cAOAOAMwA4A4AzADgDgDMAuFH3kIefJ3++1Q2P2Iefv8Px1DpAb+VUrWfk3Z3vU/3+uesAVZ8bcAaAMwA4A4AzADgDgDMAOAOAy3tYfQKm/Tq+7vcfN2cAOAOAMwA4A4AzADgDgDMAuKlbB3h082s4nvqevrZv3zRnADgDgDMAOAOAMwA4A4AzALjG1wFyn68/6Nv3zz8Ox8fNGQDOAOAMAM4A4AwAzgDgDACu8e8HuLcyTz/mod6VT+G43w+gsTIAOAOAMwA4A4AzADgDgGv8foDc5+sP+vZNcwaAMwA4A4AzADgDgDMAOAOAG3U/QEp4v8CzS8fCzXN/NzD1fH3bt0/9XsDqIPm7gJXOqTMAnAHAGQCcAcAZAJwBwBkA3H7WAVLCdYKHp+Pfz6d78i1eB1jszoTnbG3wp9IRdAaAMwA4A4AzADgDgDMAOAOAq2MdICVcJ1Cz58QZAM4A4AwAzgDgDADOAOAMQJIkiabT6fwFAeCnZalTAZIAAAAASUVORK5CYII=",
  Di = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAABXdJREFUeJztnV+IVVUUxu9t9N4sshLJlEntLSptnIcgoRF7GANn6MEnBxRCiP48Rr1EPgS9CBHkQ4kRPli9F0PTGElCKYjjH3QEBxFmrg53YJwgU+6E3F4KWuvYXne5z/bc4/f93tY9+5y97+VjrbX3XmffSoUQQgghhBBCCCEoVIseQCztdrvtaV+tVkv9na3v6/1+D8QNh5QdCgAcCgCcJUUPIG90DPTmCGjQA4BDAYBDAYATnQPExti85+Wx4+n2nCHv34seABwKABwKAJzc1wE+3bFD2KeuXBP24YnjufaXem2/6K2D1CkJPQA4FAA4FAA4991egBfvvD/TfPKVqP4XJy4Ju77ratTzvNADgEMBgEMBgFN4DqBjcNE1e7r7vOfhVsyP7c/7e9IDgEMBgEMBgBMdb615tHdvIHUO0EFdvW4vGzjn/aljfuzvRQ8ADgUADgUATvQ6QNnr8FPP+621fW8Iz3t89ADgUADgUADgFL4XkJronCRyv799Yav84Nmfg+0XD/cKO3V9AD0AOBQAOBQAOPd9DqBJPe83UTlF6r0CC3oAcCgAcCgAcLouB7jX5w3kXX6QmfcrYmM+zwcguUIBgEMBgJO8JlBj1QhOPtIXvP/0sS90/57uo/HWDHZbzNfQA4BDAYBDAYDjXgfw1tW/8e4hYT9jPP+jD94KN1DX+7dIu+gcodtjvoYeABwKABwKAJw83gsQto75w4ObhD114Lvg8/Z+/Lmrf50z7DXG580JrPutGr5ui/kaegBwKABwKABw3PHnDmfQiOvf/3hW2Dqm71o5J2y9F/D1iVPB/vfV5Tz/24GTwtY5wfC2F4Sddw5QeI2hgv8bSFxQAOBQAODkngPMNGUMXL4mrLFlX0q7NqKWJo4susa3b+grYb9f2SPsDublwfbJzxOoL3O1b7VuBa/znEAShAIAhwIAJ/k6wKuDzwn75pKlwtY5gKZnt4yxPT+EY257XMXsz6TGvTlA5vmRMd+K8a33BoLXZ3/9Sdjrf6vJ+505AT0AOBQAOBQAOMlzAI3OCSzGxi8Erw+NbhD23EG517Dq1pPCTr1W743xOqZ7OdpcLezXL8/L/lROwByACCgAcCgAcJKfD9DXt1HYY+PnXPc3rl0X9vzvN4T94sFVdzewu8SK8Wt7nxf21M4Vwo6N+XlDDwAOBQAOBQDOPT8jaGhwY/B6Y05/InMGnQNoPnx7TH7wSYcD+wcrxm/esN31vK1qOI2FfmEfWzsRvF/P8yeur/iflv8yb1yX0AOAQwGAQwGAk8kByvafP15i1+pH/ojrv/fxdcI+2pwVth3jJfsXpqLGQw8ADgUADgUATqYeQOcAo0/L/fuXZy4GH/jobZlC6PoAvTdgceaMXAc4Ozkt7OmGnPce2v9m8Hl578drBqb77Ub/4bU/W8HrVoy3agA1rAcgAgoAHAoAHHMvYPuVcE1edTR8//A237t02b2AMDrme+vqY9Fr9V5Sx3gLegBwKABwKABwMjmAjiF6XWDuoaZoL61KZeUNWYff05LvAuZ9LF6t9mC4wchfwlw9skXYs+/8ErzdvR//sDSnG+eDzVPHeAt6AHAoAHAoAHDcNYFP3LTq8OU8vy1fX69UW+oDJ83HZoT91O31wfb1TceF3Tr9krD9NXeSzDx+QZpFx3gLegBwKABwKABwzBwgNibpdYR2LXzuX/XA5uD1TA5Sdw7oG7kuYcX8otfqU0MPAA4FAA4FAE7h8Sjv9xC8Z+1alD3GW9ADgEMBgEMBgFOqeNUJOqfQOYE3pluULeZr6AHAoQDAoQDAKXX8uhPWukLsOoF19m7ZoAcAhwIAhwIAp9TxqxNSn3nEHICUGgoAHAoAnL8BF6DwHlKpItgAAAAASUVORK5CYII=",
  ki = "data:image/png;base64,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",
  Ri = "data:image/png;base64,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",
  Cs = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACABAMAAAAxEHz4AAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAABhQTFRFR3BM////+8sH4qsEoJDhMJjTe2y0AAAAichSjAAAAAF0Uk5TAEDm2GYAAADISURBVHja7dkxCsJAEIXhdNZeYRDtkxMIQzzB4gVkbCUK7/oOrEZHgq2z8v7mscV+TaqwHWMsa6hNIoKQiOx8CKQHVgCGWl+BaWlAIC8A4DqEHl/+YypyIUCAQCtAL3MEGgVEZGtmmLupqohsfOARSA+IZ2YnVfU5AyilHH1U9VBPhUATgKqOZlavPHs7EUgOeBXZ6JcINAisQwTSA4h/rqq69ysEmgGi8wJGM4tD4J+BGGqLALzOI5AeiE6s8wj8GuAjEmNZuwMoowLyPmOZ5gAAAABJRU5ErkJggg==";
Q("main/startTransaction", async ({
  pixelId: t,
  newColor: n,
  buyerWallet: s
}) => (await X.startTransaction({
  pixelId: t,
  newColor: n,
  buyerWallet: s
})).data);
const yc = {
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
          price: 96
        }, {
          currency_id: 2,
          currency_name: "TON",
          price: .21
        }, {
          currency_id: 3,
          currency_name: "NOT",
          price: 150
        }, {
          currency_id: 5,
          currency_name: "DOGS",
          price: 1800
        }, {
          currency_id: 6,
          currency_name: "ANON",
          price: 300
        }, {
          currency_id: 7,
          currency_name: "CATI",
          price: 1.95
        }, {
          currency_id: 8,
          currency_name: "X",
          price: 5100
        }, {
          currency_id: 9,
          currency_name: "Major",
          price: .75
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
          price: 192
        }, {
          currency_id: 2,
          currency_name: "TON",
          price: .45
        }, {
          currency_id: 3,
          currency_name: "NOT",
          price: 300
        }, {
          currency_id: 5,
          currency_name: "DOGS",
          price: 3600
        }, {
          currency_id: 6,
          currency_name: "ANON",
          price: 600
        }, {
          currency_id: 7,
          currency_name: "CATI",
          price: 3.9
        }, {
          currency_id: 8,
          currency_name: "X",
          price: 10200
        }, {
          currency_id: 9,
          currency_name: "Major",
          price: 1.5
        }],
        currency: "XTR",
        isOnePiece: !1
      },
      13: {
        id: 13,
        name: "Pixanos' Snap",
        description: "Discolor ½ of the world. Your name will appear in History. No reward, just fun.",
        image_url: Cs,
        price: 4e3,
        prices: [{
          currency_id: 1,
          currency_name: "XTR",
          price: 1
        }, {
          currency_id: 2,
          currency_name: "TON",
          price: 1
        }, {
          currency_id: 3,
          currency_name: "NOT",
          price: 1
        }, {
          currency_id: 5,
          currency_name: "DOGS",
          price: 1
        }, {
          currency_id: 6,
          currency_name: "ANON",
          price: 1
        }, {
          currency_id: 7,
          currency_name: "CATI",
          price: 1
        }, {
          currency_id: 8,
          currency_name: "X",
          price: 1
        }, {
          currency_id: 9,
          currency_name: "Major",
          price: 1
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
          price: 384
        }, {
          currency_id: 2,
          currency_name: "TON",
          price: .9
        }, {
          currency_id: 3,
          currency_name: "NOT",
          price: 600
        }, {
          currency_id: 5,
          currency_name: "DOGS",
          price: 7200
        }, {
          currency_id: 6,
          currency_name: "ANON",
          price: 1200
        }, {
          currency_id: 7,
          currency_name: "CATI",
          price: 7.8
        }, {
          currency_id: 8,
          currency_name: "X",
          price: 20400
        }, {
          currency_id: 9,
          currency_name: "Major",
          price: 3
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
          price: 96
        }, {
          currency_id: 2,
          currency_name: "TON",
          price: .21
        }, {
          currency_id: 3,
          currency_name: "NOT",
          price: 150
        }, {
          currency_id: 5,
          currency_name: "DOGS",
          price: 1800
        }, {
          currency_id: 6,
          currency_name: "ANON",
          price: 300
        }, {
          currency_id: 7,
          currency_name: "CATI",
          price: 1.95
        }, {
          currency_id: 8,
          currency_name: "X",
          price: 5100
        }, {
          currency_id: 9,
          currency_name: "Major",
          price: .75
        }],
        currency: "XTR",
        isOnePiece: !1
      },
      7: {
        id: 7,
        name: "Pumpkin",
        description: "A 7x7 pumpkin blast! You get pixels. Boo! Boo! Boo! Pumpkin soup canvas.",
        image_url: Bi,
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
        image_url: Di,
        price: 96,
        prices: [{
          currency_id: 1,
          currency_name: "XTR",
          price: 288
        }, {
          currency_id: 2,
          currency_name: "TON",
          price: .63
        }, {
          currency_id: 3,
          currency_name: "NOT",
          price: 450
        }, {
          currency_id: 5,
          currency_name: "DOGS",
          price: 5400
        }, {
          currency_id: 6,
          currency_name: "ANON",
          price: 900
        }, {
          currency_id: 7,
          currency_name: "CATI",
          price: 5.85
        }, {
          currency_id: 8,
          currency_name: "X",
          price: 15300
        }, {
          currency_id: 9,
          currency_name: "Major",
          price: 2.25
        }],
        currency: "XTR",
        isOnePiece: !0
      },
      10: {
        id: 10,
        name: "2x pack",
        description: "2 dynamite, 2 paint can, 2 restore",
        image_url: ki,
        price: 160,
        prices: [{
          currency_id: 1,
          currency_name: "XTR",
          price: 480
        }, {
          currency_id: 2,
          currency_name: "TON",
          price: 1.05
        }, {
          currency_id: 3,
          currency_name: "NOT",
          price: 750
        }, {
          currency_id: 5,
          currency_name: "DOGS",
          price: 9e3
        }, {
          currency_id: 6,
          currency_name: "ANON",
          price: 1500
        }, {
          currency_id: 7,
          currency_name: "CATI",
          price: 9.75
        }, {
          currency_id: 8,
          currency_name: "X",
          price: 25500
        }, {
          currency_id: 9,
          currency_name: "Major",
          price: 3.75
        }],
        currency: "XTR",
        isOnePiece: !0
      },
      11: {
        id: 11,
        name: "3x pack",
        description: "3 dynamite, 3 paint can, 3 restore",
        image_url: Ri,
        price: 256,
        prices: [{
          currency_id: 1,
          currency_name: "XTR",
          price: 768
        }, {
          currency_id: 2,
          currency_name: "TON",
          price: 1.68
        }, {
          currency_id: 3,
          currency_name: "NOT",
          price: 1200
        }, {
          currency_id: 5,
          currency_name: "DOGS",
          price: 14400
        }, {
          currency_id: 6,
          currency_name: "ANON",
          price: 2400
        }, {
          currency_id: 7,
          currency_name: "CATI",
          price: 15.6
        }, {
          currency_id: 8,
          currency_name: "X",
          price: 40800
        }, {
          currency_id: 9,
          currency_name: "Major",
          price: 6
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
    order: [9, 10, 11, 1, 2, 6, 4],
    selectedCurrency: 1,
    crypto: [{
      currency_id: 1,
      name: "Stars",
      image: mc
    }, {
      currency_id: 2,
      name: "TON",
      image: Ac
    }, {
      currency_id: 3,
      name: "NOT",
      image: pc,
      master: ft[3]
    }, {
      currency_id: 5,
      name: "DOGS",
      image: hc,
      master: ft[5]
    }, {
      currency_id: 6,
      name: "ANON",
      image: gc,
      master: ft[6]
    }, {
      currency_id: 7,
      name: "CATI",
      image: _c,
      master: ft[7]
    }, {
      currency_id: 8,
      name: "X",
      image: fc,
      master: ft[8]
    }, {
      currency_id: 9,
      name: "MAJOR",
      image: xc,
      master: ft[9]
    }],
    limitedGood: null,
    limitedEnd: null,
    showLimitedGoodPopup: !1
  },
  kn = Q("shop/getProducts", async () => (await X.getProducts()).data),
  Rn = Q("shop/useProduct", async ({
    pixelId: t,
    productId: n,
    color: s
  }) => (await X.useProduct({
    pixelId: t,
    productId: n,
    color: s
  })).data),
  Mi = he({
    name: "shop",
    initialState: yc,
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
      t.addCase(kn.pending, n => {
        n.getProductsStatus = p.pending
      }).addCase(kn.fulfilled, (n, s) => {
        s.payload.goodsAvailable.forEach(a => {
          n.products[a.id] = {
            ...n.products[a.id],
            ...a
          }
        }), n.getProductsStatus = p.fulfilled
      }).addCase(kn.rejected, n => {
        n.getProductsStatus = p.rejected
      }).addCase(Rn.pending, n => {
        n.useProductStatus = p.pending
      }).addCase(Rn.fulfilled, (n, s) => {
        n.useProductStatus = p.fulfilled
      }).addCase(Rn.rejected, n => {
        n.useProductStatus = p.rejected
      })
    }
  }),
  {
    setProductCard: et,
    showProductCard: tt,
    hideProductCard: Pa,
    increaseAmount: bk,
    decreaseAmount: Nk,
    setAmount: Ps,
    setAvailable: vc,
    addAvailable: zt,
    subAvailable: Ss,
    setSelectedCurrency: rn,
    setLimitedGoods: Ik,
    clearLimitedGoods: Ck,
    showLimitedGoodsPopup: wc,
    hideLimitedGoodsPopup: Pk
  } = Mi.actions,
  Ui = t => t.shop.crypto,
  jc = Mi.reducer,
  Ts = {
    getProducts: kn,
    useProduct: Rn
  },
  pn = ({
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
  bc = () => {
    const t = c(s => s.shop.selectedCurrency),
      n = c(s => s.shop.crypto).filter(s => s.currency_id === t)[0];
    return t === 1 ? e.jsx("span", {
      style: {
        paddingRight: 4,
        marginBottom: -4
      },
      children: e.jsx(pn, {
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
  xt = ({
    num: t
  }) => isNaN(t) ? null : new Intl.NumberFormat("ru-RU").format(t),
  Fi = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACABAMAAAAxEHz4AAAAIVBMVEVHcEzv7++7trv/sQAAxvb+XTUAieJkY2UaWbc9OGcbGx4WugEBAAAAAXRSTlMAQObYZgAAAM1JREFUeNrt2c0JxSAQBOC0YAu2YAu2YAu2YAu2YAtW+Rh4gUE0Iddh9rLBON9pwfxca8055/WhDOgBCJdSygmZ/zKgDaCewrXWmnPOuDagCpwxDqN67x1rBnQBDmMzh9ERHmMMA5rATrzD6LuwAS0ACymlhM5rrbWGjiA6hw3oAag1HGOMfLDwYWJAF+BwCCGg80DxIBlQBd7DPGwGVIH38LrXgBLwPcwfqwxoAfxAsQufBsmAFsDIGj5BBrSAFUHtXkgNSAD+B2vg6f4Pseby+y+jC6sAAAAASUVORK5CYII=",
  Oi = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACABAMAAAAxEHz4AAAAFVBMVEVHcEz/3Jr/6ADjygD/AAC5AAAAAAB/sfDAAAAAAXRSTlMAQObYZgAAAJJJREFUeNrt2bEJBCEQQNFrYVqwhWnBFq6F338Jx4IiyIG76ez/iRjMiwyE+Zj9i0MC9QGA7yEAgarAGu6HJiJQHTgnICAgIFAbAHgGrARqAACZmROIiAC4zt573+8TaK01gWLA6O5DyswUqAVcMXoCzGGBCsBqAjGCVYz2D4ZAbWBP4EXA6AQACJQB3LEImO39AJS0GBsvGYIKAAAAAElFTkSuQmCC",
  Qi = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAABVQTFRFR3BM/////2U1/z4F3SwBrB4AAAAAkQwbPgAAAAF0Uk5TAEDm2GYAAAEVSURBVHja7dvBDsIgEEVRZbD//8nGQjKlY6aMGMrivuDC14BHxIUmfRBCFss2IQAAAHBfOU2IOi4B8hmSTJzSmR8FaGSsTDIAiO6A38YBksYi8TNgMrgDKboDE7bABcietA+RXNO2sdK2PkBzWkATKE0LAAAAAAAAAAAAAMAl4DkhAAAA6AFsbcxFa+2ZDwAAABfgrGramEpbAAAA/BnQPgMAAMBNAA0AAADc+fw6BgBgMQD/FQMAAAAAAAAAAAAA4AJyk1dN28ZK214ApIx2gdqVR7jUVjoAGtEFikdZgVLbEuncgfM7OKwcLLWtF345A3JcIly+DijpOwNfP8Nc60CprfZ5lW8Bd9kAAHAfgNtKCVksb9I6sf1BNvNjAAAAAElFTkSuQmCC",
  Nc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAAp1JREFUeJzt3bFq21AUh3E7lJrMnbp1LXmDDskDZSx5CtOpZMybdGmgGbOFQKdufoAMwV7cWcfgy0X3Slf3+36bkCIJ8ufcoyMbr1aSJEmSJEmSJKln67lvoHXH4/E45fXW6/Wk/5OLKS+m9hgAOAMA92HuG2hNas3fbC6LXm+/fy96vlxWADgDAGcA4LrvAcY+x8c1f+yaXbqHGMsKAGcA4AwAXHc9QO3n+NTfj+0R4v3XfjdgBYAzAHAGAK67HiDX/u767P7N9nGw/e/b4fzxiblB3E4dX7snsALAGQA4AwDXfQ9wssaGNX/359dg+/P9zfAE29XZ/bvb3+NuMCj97iHFCgBnAOAMANzie4DSn9s/PP8dbL89fCp5+hN+JlCzMgBwBgBu8d8NjD1A7nP/WF+ePg6vl1jTp/7uX4oVAM4AwBkAuMXPAUr78Xp1dv/3ry9Z52ttzY+sAHAGAM4AwC2uB8id/Zd+7u+NFQDOAMAZALjF9QDR2Nl/6rk/yp39t84KAGcA4AwA3OJ7gNri7P9n6AGi1mf/kRUAzgDAGQC45nsAZ/91WQHgDACcAYBrvgeInP2XZQWAMwBwBgBucT1Abb3P/iMrAJwBgDMAcM31AM7+p2UFgDMAcAYArrkeIHL2X5cVAM4AwBkAuOZ7gNpos//ICgBnAOAMANzsPYCz/3lZAeAMAJwBgJu9B4ic/U/LCgBnAOAMAFxzPUBt9Nl/ZAWAMwBwBgCu+R7A2X9dVgA4AwBnAOCa7wHibD/3d/vi8fTZf2QFgDMAcAYArrkeIK7J8fMBq8z3/bl6n/1HVgA4AwBnAOBmX+9yvxdw0hNkSj332wMIxQDAGQC45te73B4hF23Nj6wAcAYAzgBIkiRJkiRJkiR17D/jkLq5vlfVpgAAAABJRU5ErkJggg==",
  Ic = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAA39JREFUeJzt3LFrFEEUx/FdUS8RUlwpLNFGIYiFpjJFQCytbNPG1ipa+wdEq2ut06cQLLQRPBvFQkVIGpWAjZDCIhyCa5v3zuxkvL3bmft9P93cXnYn5Jc3b2ePKwoAAAAAAKCi7HoCqanrup7l9cqy7PRvcKbLi6N7BEAcARB3tusJdC205vd6i61ebzQ6avV8k6ICiCMA4giAOLkeIHbNT23NbhsVQBwBEEcAxGX3LKDtvfppr/ld7/WHUAHEEQBxBEBc8vsAbe/Vx67xk57fzz+1noAKII4AiCMA4pLrAaL36h+tR50/tKa3ff7UewIqgDgCII4AiEuuB/CCa/LGb/v+G2/bvf7268bjow+37Liw80v98wVUAHEEQBwBEJd8DxDLr8ljds6ZoV/jQz3GvKECiCMA4giAuPx7ALemh4Tu68d6giLuWcCPNy/dK+ejfn7WqADiCIA4AiAu+x7Ar7mvfv4x4829BTP29/mhfQB//EH/SuN8tlYaDyeHCiCOAIgjAOKy7wG80Jo/tre/XTQeH3u+H9kTpI4KII4AiCMA4uauB4gV/PzAnKMCiCMA4giAOL0eIPLzA7k9349FBRBHAMQRAHFyPYBf059+udb4/tye78eiAogjAOIIgLjseoDbL5bMeGfphDd2ZP37TffKp07mcVpUAHEEQBwBEJddD+Bt/LpnxsvVt6leb+36XTPePZzu9aaNCiCOAIgjAOKy7wFC/L5BUdieoajs8MCt6bvuvr7qtzSxRFABxBEAcQRAHAEQRwDEEQBxBEAcARBHAMQRAHEEQFx2zwJWD/bM+H11taOZ/NvjC+/MeLNYOOGdaaACiCMA4giAuOx6gCf3L5rxw2e2Jxge7ptx1b/U6vWHH5+bsf+ewDvL7n/KTi85VABxBEAcARCXXQ/gba18NuPB0H6Hj983CFkNHB9EnS19VABxBEAcARCXfQ8Q4vcN4r8jqLnHyB0VQBwBEEcAxBEAcQRAHAEQRwDEJb8PMBodmXGvt2jGX9dmOZuwy26fwM8/NVQAcQRAHAEQl1wPUJZleXxc13V9fBzqCWZt4D6DGFrz/e/XNSqAOAIgjgCIS64H8GJ7Am/SfYNJ7+tTW/M9KoA4AiCOAIhLen36H75H8GL3DXK7r49FBRBHAMQRAHFZr1+nEeoJYuW+5ntUAHEEQBwBAAAAEPQXKwzH8ovgV5cAAAAASUVORK5CYII=",
  Cc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAABXtJREFUeJztnU+IV1UUx9+INDrgYsLAkfGnBZqgQ4muXCTjIkSFaBNks2qgTUQQE0SbzI2KuhBp509QyxAXImgM6hgKJpGVUWk6+Scd/AU5zmJwnN8IjgtX5zznHg/3Xn+//H4/u/Pe+937hvlyznnn/isKQgghhBBCCCGEoNCSu4PJycnJnO23tLRk/xueZ6Y1+gVIY6EAwKEAwEkeP62Y39o6M6r9ev1+8D5zAh/0AOBQAOBQAOBM9/7A+12vY3510biwew52C3vilyvC/rzvxWB7OifIXXdodrw5ED0AOBQAOBQAOGYOkPu7vm/1HXVFxvzXX/pd3h6Z4erfqhvEvn+jsf4+C3oAcCgAcCgAcNx1gNJ3+KdvyAc2PBCm9V2//dRs4/ku2d+v1vO+uoFmy/q1wfs/X78t7K17PxH2rWv/BH9/+eIlYZ84dFHYy1+eG/z9Z0e/C973Qg8ADgUADgUAjlk31nUAKweonT0p7IE7D4PtX/ivK3jfi64b9F6RdQOdA6SuA1w7v0/YJ4/2C/uDjQeS9qf/Ho4FEBcUADgUADjuOkAsPW+9KW2jbjBcrQl7x6UlSd8ntpaee45jbugBwKEAwKEAwInOARZ+e1fYZyq+39c+PC1sq25g8eXYCnXlj6j2/m/ouo1VF6AHAIcCAIcCACd5HWDD6NvCHhqT4+M9ke3vGhkUdqVzaWSLYXLPGUzdvreuQA8ADgUADgUATikHyL22rrt/lroSzhnK5P2u1zF5fLh/iiefzI8DPwXve9vTDGzaLOx1O09P8eTTQQ8ADgUADgUAzvTYtX+D78p5+N1xIS6aL9rOC7u3mDHFk4+xYv7Y9b9d/Xe90q7slVHtndt/yPW8F3oAcCgAcCgAcEp1AGstnZUTHJh1WNgDdTm+Xy3mu15Q81H7QnnhXl3abVHNF1eP7Bf2jd+GhL3gtc64DhS527egBwCHAgCHAgDnma8L+H7NqLBLawnrxlrCe2nXEsay5P1vXM//uee9TG/yZObMe1XUef69dVnMEaQHAIcCAIcCAOeZ5wCNJvccPx3jvTmChXf8v3bzL2F3VBaLnIAeABwKABwKAJyGrw1MjbU2MPceQaljvubYx6uErXMCayxH5wT0AOBQAOBQAOAkrwMs+OGF4P3ebWfUlfDzZQbDt0fCt62Y3+y1fQsrx9H36QHAoQDAoQDAyT4WoPcS1nUDC73uwEvu/lpVzqC/05sdegBwKABwKABwonOAm0Oy1n5j5YSw9X4Ane16fwCJXldQO+t7H71HUer+Or5SMX7bU79aEnTtn+cGkigoAHAoAHBKOUDq8fKhEWvPH4m1LsDsz9xjKK6/d9R5Bhodo2PHClLHfA09ADgUADgUADilveS9ewbpWn95H8Aweq2gl9z9fX3kuLD1OYf6nEKNPrfQizfme89KpgcAhwIAhwIAp1QH0GfMWDmBXt+v9/61KP/eS9r+dK3/wm4Z87efmi3svtXh+73Lzgm70ecE6v8vPQA4FAA4FAA40fMB9Dl/uWvxmtT9lWv9co5gq4rpml3LjHULifF+92voAcChAMChAMCB2yPIYrhaU1dkDqD3KtZjAXqsQJ9z6MWaj2HFfJ4dTIJQAOBQAOAE40NR+OcH6BjpjYGl8wCc5O5P1/qtukDsHEvvd31HZbGw9d7AGnoAcCgAcCgAcMw6gHd+gKbSudT3RvoMICe5+5sw1gVYMTv1fABvzNfQA4BDAYBDAYDjihdF4a8LVBeNC7u8l28YfRawl9T9WbV+HeN1jE6NN+Zr6AHAoQDAoQDAiYofRVHOCXKfydNsxI7HNxp6AHAoAHAoAHCS5wDoNHvM19ADgEMBgEMBEEIIIYQQQgghhIDwCOGz0zOqwEkRAAAAAElFTkSuQmCC",
  Pc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAAw1JREFUeJzt3b9rFEEYxvG7ICYGbASLQCB/gAgp7AKCIGInVkJIl3S2Z2MjloF0tpZX2aWzEIJFuiABu6QKRFKkSBGInBZnPe/JLG9mbmdnn++nm/sxuwkP7/tmudwOBgAAAAAAAAAAAAAAAAAAoA+GpU8gt+l0Op3n/sPhsFe/s4XSJ4CyCIA4AiCu8/0stacvLt5LOv5k8jvp/V2fGagA4giAOAIg7k7bB2y7p0/ePQ0f2PwbLP/8OAnWX3Z/pR3PzAzen7ftmYEKII4AiCMA4pL7TW09/fjycXT/vZ2VpP23T5ai+1ulrzNQAcQRAHEEQJy7fzT1/L719NpmBu9MQAUQRwDEEQBxyTOA7fnqPT33/u9HD4L1p6vTYG1nAmYAuBAAcQRA3NxngIvDb9H9Vjaehw+I9fT1hz+j+9vjMwMgKwIgjgCIa/0zgU0u3n6PPr/16kW4bui5492wxx5/tj097Ml7O49c+49G4W7r+/Gebo9XGhVAHAEQRwDEdW4G8Mo9M9Te072oAOIIgDgCIK76GcBr/Oag4RV193QvKoA4AiCOAIjLPgM8+3rfPPI6WJ1fnQXr043cZ1CXjzdPos+vrq6FD5jPA6SiAogjAOIIgLji1wH6NjP4e/rZ/1/YEiqAOAIgjgCIKz4DeLU9M9TW072oAOIIgDgCIK66GcDLzgznlfV0O9PkRgUQRwDEEQBx2WeAg5fXwXrm+wHMn/Gb16bn9pzt6R+Wj6Kvn/l+gMznQwUQRwDEEQBxxa8D1D4zpPb0wXLuM/KhAogjAOIIgLjiM4DXvGeG2nu6FxVAHAEQRwDEVTcDeNmZYbzf757uRQUQRwDEEQBxyTOA/b762fsG3o2/v+P/6zdvzfcNjN8fIBUVQBwBEEcAxLlnAHtPGnsPIW+P6tvM0HZP994jyKICiCMA4giAuOTrAN4eVNvMUFtP96ICiCMA4giAuFb7zW3YmcFrdmbwqa2ne1EBxBEAcQRAXKf7022kzgxNut7TvagA4giAOAIAAAAAAAAAAAAAAADQM/8ACXZHRjaU+NYAAAAASUVORK5CYII=",
  Sc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAABXVJREFUeJztnTtoVEEUhu9KdBVNEdEiImijIOI7jQlETCGigpWFz0JLFQVjn8pKC1FLbXyhqQIqYqFYiI2PoAbBNBoiATFG8EUEifU5V+ZwmJndu/7/1529O7uT8HP+szNzz60VYMzMzMzEjK/VarVUc6kCs5o9AdJcKABwKABw/is/Kwq/x9fr84LXp6d/ub6/1WoEZgBwKABwKABw2po9AS/JPf7lZhH/fvHON17VCNb8qlYjMAOAQwGAQwGAU/kawPLUWI+fOPpYxOferlbjVwbHt3qNwAwADgUADgUATqV+k/4L7Znacy2Pn7w8IWLt8WcfLso6vv3IZBHC2mvIXRMwA4BDAYBDAYBT+XUAkxuzRTj5RHp256UtIj5TWgcYEXHZ4+U6gHe8dx3Be/4gFmYAcCgAcCgAcFq+Bth6v13E41MbRTza5Bqhv0/Od/3ij/KFYm7RTJgBwKEAwKEAwKlcDRB7754md41gefzQ/E4Z/+xSM3xTmnMjYQYAhwIAhwIAp+E1QOpz/Y+2fxPxxJMXIt73bVlwvLdGuD3k9fg49P8r9fkAZgBwKABwKABwstcAsef6vzy7GLxe7zqmXpkjounTcTXCiptf1Cs+j9/9Y1rE6xe/FvERtRdgnQ9IXRMwA4BDAYBDAYDT8HUA7XGWx1vkrhF6x+S6gMb0+HG13z8lY3P+mc8MMgOAQwGAQwGAk7wG8K71P706GLy++eCeqPnE1wgLRXxt6IGIYz3e+vtzwwwADgUADgUAjrsGSL2fv3zd0uD16tUIaT3+3rPvIt7RtSD4/tQwA4BDAYBDAYBTqgEa3Yu3/fD14PiRK/uD15tdI3g9vmowA4BDAYBDAYDTVvVevM2uEVrd4y2YAcChAMChAMAprQN4e/FaHp+7z17uGmHn+cfB616O9mxK+nnedRt9HwEzADgUADgUADj2eYAW78WrawSrJtCef7xjRfD9p1bJ+en/R33D0+B46/s11rqMxrq3kBkAHAoAHAoAnPj7Av6zXrza8y2P7++T8y36Pgc//9PXPyIeHBkOvl97+J0Hr0S8a9taEesawbq3kBkAHAoAHAoAHLMGMPvo9RgfkLkXb1EsLFKinwNoebzuB3Dg1lYRX9gw6vp+6/7/gYGTIt617WFwvLVuwAwADgUADgUATvQ6QOoaQffitTx+aH5dxpH9+PudHt/ft0bEw2r83ROyxtEMymUG83f+6+dyb6GrWxVJTpgBwKEAwKEAwDFrgOz9+I0awfb4tJTXAcIev/3QkuDnec8Uas/XePsEch2ABKEAwKEAwIleB4itERrdj99CrwPEerzl2d79e+95AAtmAHAoAHAoAHCyPy/AqhFi+/EP/5C/0y1Wq/sE9Fq99vxYj7ew9u+9nm59voYZABwKABwKAJxSDWCfKVP99K39foPRveF+/F6Pt/CemfP+jveOj32/F/YHIAIKABwKAJw27Qn6/nG/B6atESwuTKlz9+qZPdb8Yz3+fffvqPHW98c+G9iCGQAcCgAcCgCc0jqA5TmNrhFiPd7C8ujuNTuD13vHPohY712871YH/43vz70OoGEGAIcCAIcCAMd9HiB/jRDn8d79c+t3/Lm3sl+Bvk9haYc88/i8Q47vHZPv1zVCUfj6B6SGGQAcCgAcCgCcrOvM/8Lb396L9bwD6/kGGt0nUKPH6xphbNzXn0DXPNwLIFmhAMChAMDJfl+AJrWneWuKci9i2Q/AWyOU9ypk2Oi1fS/MAOBQAOBQAOA0fB0gNamffaz7A5Q8Xo93enzu3/VemAHAoQDAoQDAqZQfpcC7LpD63r6qebwFMwA4FAA4FAA4LeVXKYg9j9BqHm/BDAAOBQAOBQDOX/7wrWuOIpDoAAAAAElFTkSuQmCC",
  Tc = "data:image/png;base64,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",
  zi = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACABAMAAAAxEHz4AAAAJFBMVEUAAABHcEz//////wC4uLj/oQCampoA/wAAmf//AP9SUlL/AACcsFD9AAAAAnRSTlP/AOW3MEoAAADGSURBVHja7dlBDcMwDIXhUCgFUxgFUyiFUBiFURiFUhi5vUm2FFlJc97T+y6Vmvi/+pB2TLSF6V0FqAJt4AOD/LaBAnyBOnQtjMEGCvAEfmZDz/AKV5ERBXgCBlc44RFq5A0K8Ac+cMIuogBnwMGCw13EQwcFuAIdPNhCDiUF+AL10Cd6YaAAV8CgXF6yoABfoC6WZDccFOAKdIiBLQ8dFOAK5A/fqMtHAZ7AAUPklg9yVgGeQEbqovGiPlAo8PcBvbkqMPoCnDifKjhoeKsAAAAASUVORK5CYII=",
  Ec = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAABMZJREFUeJzt3b+LVGcUxvGZZNlFXYlEyKi4aQMxmEljkVgEBQXRv0HXQiFtNJ1VOjFlfhjEKJZaKUpMoWglKriKjYUWGlw34EJsRDFM6vNc8549vHfG7JzvpzvcmTv3Lof3nPve997tdAAAAAAAAAAAAAAAAAAAwDjojvoHB4PBoM39dbvdkZ/DOHnvXR8A3i0SIDkSILmh10+v5r+YsDn4wT/24we+PWXi48f2tnNg/yFbT8EIkBwJkBwJkNyE94G2r9ujNV95JfrC5bs2/uOOiX/9YZ+J9fS88x23HoERIDkSIDkSILlGPdMa2H09WfUDg8nXJtYe4OuvDha/f+f6L8XtWvP7/c0m3vhR+fgOHjptYq9H8Cy3HoERIDkSIDkSIDm/Bzj+ZXkPs7dDP/j3yjfF7TovoLyar7wewDPuPQIjQHIkQHIkQHJuDxCl1/lRw+4BtKZ7vPUHbfcIatg9AyNAciRAciRAcm4P8Pth+5Htm8ol6drsJ8XtW95/YOLoeoBbt24Ut58/+7OJtQfQkqo1Wmu61wP8+Vdxc2du7p6Jo+sTPLU9AiNAciRAciRAcuF5gGhP4JmcLfcAXs1X0R7Ao38Or+bX+v7oaO89MAIkRwIkRwIk5xbEtp8LaBxAy1PdtWsEPbU9gNb4PTu+CH2/7XkERoDkSIDkSIDk3GcDo3PNS3i2Tj9f3B6lNbIh2BO0XfO3bf009P1ezx7gke/svYn+Zx+bOLo+gREgORIgORIgObcHqKU1Sa/T1ZMFW6O8++meaE9Q68Klqyb2rvN1nkJ7Bq35+veYu//YxFrzPYwAyZEAyZEAybW+5rzxbKFc19+cmzfxwkLsQtur6V7N1e9Ha7Rnfv6ZifX8vP1533/y9LmJv5ndZmLuBSCEBEiOBEhu6PMAav36dSaenp428cOHj4rfj94/V83r5FMm0rn1Tsded+vcvB6/np/X4+h1vfYIJ85cNnH0/j9rAlFEAiRHAiTX+ppALTnR5/lfvbLvFVxcXCx+3rvO9tbZe/Q5Be0RZjasDe0vOg+xZ+fnJq6t+YoRIDkSIDkSILnGPEB0TZ/Smqlz1/1++YCmpuy7ifW6WnnbPUuoqSbW89P78Xr/Xrn3MoZc8xUjQHIkQHIkQHITtev4la4B1Bo5s6E8t+7VdL1frnPxq1fbuFbtcwvaE3hr/DxtvzeQESA5EiA5EiC5xjxAtOar6Lt1Pd7ce3TNnUdrrPZI0XkD5c0TjBojQHIkQHIkQHJdbx2/PqunvHXsaveOWI3W5/O962btAWZ65bl87VmG/T6EqLfMQzAPgPaQAMmRAMm5PcBPv10p7iC6Js7j1XBvjaFX84f97t0RvFeRHgDtIQGSIwGSc3sA73/4eHQu/8M19n79qpVT9vNOTa920inRFy+ZcHBul4n/b//7txYjQHIkQHIkQHJvey7AxNHnAJSuCVTe8/hRjev+Tc79d6fmqyXM/S+rHoERIDkSIDkSILnw/w1s7KCy5NXOM+jc/sIKuz6h92Ovav8NYzZPwAiQHAmQHAmQXLhetX2/u7Zkas33nH550cSHB/urfl/RA2BZIQGSIwGSG3m9GvaaubYtt5oexQiQHAmQHAkAAAAAAAAAAAAwxv4Fm/jXETIKTbYAAAAASUVORK5CYII=",
  Bc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAABXFJREFUeJztnU9oXUUUh2+aNBKxjYhULF2UYnAhxkSkYAXdtGnRBA3FRSStFq2oOxHdVAWFLlqpghupsfbf2xUEqdUk3dSFLRQsScDSkkiChmoCSq0hQpombtycc5OZHOe+vNec79udzLy5w8vvzfndmblzswwAAAAAAAAAAAAAAAAAAAAAAAAAVgI1y33B+fn5+eW+ZjmpqalZ9u+wSFZVugNQWRCAcxCAc+rKfYFYzr/dUugKszCMAN5BAM5BAM4p3ANYc/7c3+dEPD06UnSXkrir+ZWytp86L5I6D8EI4BwE4BwE4JxkD1B0zv9t6EJql5IYGxyv6PU/2blTxD+OXhNx6VKx3w8jgHMQgHMQgHPMHmC5c37T3V8Yepdlw9dt9+0652/7qE/EK23uX8MI4BwE4BwE4JyoByh3zrfm+BxHv5VxZ7h6as5PnXuvtj2RjADOQQDOQQDOyeWzonP+rda9wQ40fj0XLI8Ru++vdM7X6O83de6f/QCQBAJwDgJwTnQeoOicr/nrWanBxue+CX9gz9Om9q1U+7N+RfePEcA5CMA5CMA55v0Asbn9dcb2Lt56UMTDnV8F6zcdVX+IzP1vfGSDqT9Fz9VXu6dgBHAOAnAOAnBO4c8G6py+ufZqsP7G0hOm9rVHWLt3f7D+jZ598vOll0VcdIrWFqLa1v81jADOQQDOQQDOKdwD6Jx+sVuWa0/wwNwREY+skjlaE8v5sfoxT3B/8+Om9jXaU2gLoNf/Kw0jgHMQgHMQgHPKfk7g1hNXRHxjT/i+O+YJjv9zRsQvNjyT0Ls8uecWumV/Xn3rWPDzrU++JuJHn3pdxLvulfXL/fx/DEYA5yAA5yAA55TdA2j0WsHW7MoiNRems3RexMe7F6n4H1aPEMv5HW2twc/HyocPfxAs157h0vefiVivLfBcACSBAJyDAJxj9gCp5/jpeYHeoXD9tgNHguWRLYE5j6Dr65yv7+N1Tn9/v8zJVvQ8gObDfdIDlNsTMAI4BwE4BwE4J3o+gE4pU0PyTJ+YJxgZkDm27YCtgzFqZ1eb6g+f2i1i7QFO9w2KWOf8cz8cFnHjtM1GfdzVIWK9FnB5TYuItSfQ/dGeAA8AJhCAcxCAc8we4Ozb20Vsffbu/KzMud27TB/PYfUAOe64KcJfJ+QevrXrw7+RBnXMYf0LyhOcnfnfXcuyLDvY/qWI38nk/gi95xAPACYQgHMQgHOSzwlM9QSbuqQnKJ2U5dojJOd8jfIAeh5gR9tDIp6uk9fXHkBTuzv8aGDtd+Hy+X6V4z+Vv1k8ACSBAJyDAJyTm8jWOUR7ggVyjohTPcGWOnmfWzqp9gN0mZrLkVsLyML7DXr7fxLxjtmbi9RcGH0Ssm7v9Gq5IaL9zMMinuyZNF3PCiOAcxCAcxCAc4p4d7CIrZ5A3/dvqdOx9ATDp2R50/Mngv3TOd9KS0uziHv7I5sYI4xf+1PEf1yfEvHmnvuS2rfCCOAcBOAcBOCcpbwvIDgvoLF6gjXqSJ6xC/IdP1GmHgsWj/1sbC9Ce1tzsHxc3bYPDEjPsGH9PSLWHkDz3hu98g+Hwv2zwgjgHATgHATgHPM8QGy92bp2kKcvUm5jW6GtrTwYAZyDAJyDAJxT+BlB1v0Elabp2KiIO7ZvErHeI5i1hOcBUtH3/Z8feknEB9X+hck7J0S8hD2d4v/DCOAcBOAcBOCcqn6n3VKI5ryZelm/fiZYnkM9NxDzMLG1AM3g5V9E/O6b8vwAnfOt5x6um5b7C/AAIEAAzkEAzrntPUAM63v7rJ6gaCYafg+W65xuBQ8AAgTgHATgnBXvAaxU+7t+NbwvAJJAAM5BAAAAAAAAAAAATvgXtprTE+PHJ9wAAAAASUVORK5CYII=",
  Dc = "data:image/png;base64,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",
  kc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAABQxJREFUeJztnUtsTVEUhu/xKCUhEoQgqQ46IaJCgkTMDBQjpuiAYmIiBoQIMRFGEpSBMDUgrorHwCPxSK5oCRMDOpAQkbQRiltcU2td9srO3ufl/7/Z6tk9+9zbv2v9Z5999q5UCCGEEIJIkvcFaBqNRiPva4hJkiSF+47/ZEzeF0DyhQIAhwIAJ/P65Fvjk/GT07qUVGiMfvFqn7dHYAYAhwIAhwIAZ1zaHVg136rx1b5HIl63ZpGz/dsPMh4YeC7ixYsXOY+HYn0e7RH095O1J2AGAIcCAIcCACd6vfGt+brG6xo9d6b8/RevPgVcXXwGBwe92q/vWiFia9wgbU/ADAAOBQAOBQBO6h7At+YPDxerxodieQTLE9ADkFShAMChAMBJ/VmAhR6Lb2try+dCUkI/u7h2K+6zh1CYAcChAMChAMDJ3QP87+MAoZjPVgLHCZgBwKEAwKEAwMndA1hz9jRF8wgLO6Y4j/ve92c9p5AZABwKABwKAJzcPYDGmqdveYSsiT22//P7iPO49gihnoAZABwKABwKAJzMPcCr1+9F3NE+y+v3Y7/LlzbVW/0iXr+m09l+7IRJIq6f+yobXFFzBg1PYMEMAA4FAA4FAE7hxgGs+/yieQBd40PRNXzJ6p0irnfL/9mWSmtQf8wA4FAA4FAA4BTOA2jmzZH3uZ0rNzvbP713WsR6rF6PQ2g+fJTzDYaG/e6ra7XHIj68f+c/WhYDZgBwKABwKABwCu8BNE/unHEe79mzXMTW2LsvusZrli2T/fs+C7AY2vVO/aQ96HzMAOBQAOBQAOCUzgP8vJjvFjy6xmtCxwH08309H2CodsjrfBbMAOBQAOBQAOCUzgPkTerjAF9GRdii/0Tb5H2/7xxADTMAOBQAOBQAOKXzAHosfNqp2Zn2b40DBDN5vPNw7P0FmAHAoQDAoQDAKZ0H0DQ9H991I58LiUTWew8zA4BDAYBDAYBTeg8wsa7HAc7nch1lhRkAHAoAHAoAnNJ5gOaaXyzOntjqPF6r7RCxftdRrweg0e8+cq1gEgQFAA4FAE7pPIBm6oj8CNv3Zdu/rvnVm89S7U97hFBPwAwADgUADgUATuk8gK75WWPV/INHZU2OjX7X0PIEFswA4FAA4FAA4AQXVGtvW3TuPugV8bcWOYdx+me5X8LYH+73Aip3Zc3vv6/XTKIHIB5QAOBQAOCYHsCq8Z/GGRpKwtazb+J23WhwIW5/nly9JGtw63XpAVorcj5D05pHM9yfr3on7udjBgCHAgCHAgCnyQPomt83f4HzBKsiX5DeE2j77lOyQeQaGJsNm+R9+tVLv5zt9eetVlTsuSdRsvG6iK35AcwA4FAA4FAA4JjjAF1vXob1oNa+9SX2ev9po8cBjhyTnuXA3i1B57fWKax0rxVh0icPa0/ADAAOBQAOBQBOkwcIXXNG1xi95o1eD//EycvO83W0z3IeLzq9x2XN79njN46ha75ep1DPB2h0eZ2eGQAdCgAcCgCc6JPstYfw9QQayyPEZub0Kc44FD0OoJ8FxIbvBhInFAA4FAA4mW/C5/segeURcufHiAhjrw+g5wPodxOtr5MegDihAMChAMDJdyPev5D1u4ZJ70r5g+4nYSecMGq3CSC05muYAcChAMChAMApnAdIm9geI6m3uBucXyr773kYs3vuGUTCoADAoQDAgfMAoUT3EIE1PBRmAHAoAHAoAHB+A1OqeOtqU9rHAAAAAElFTkSuQmCC",
  Rc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAABMRJREFUeJztnbtrVEEUxu+V7CIE1BQqimD+AlEhoDZ2goQtbSx8lFoKNgqCgoWgleADETGgrYE1AR+ggqASIVGsLCRgJEYCkagRNsa1E89ZnZNx5r72+37d7L07M5t8nHN25ruzaUIE7Xa7XfQc/iRN0zTL/ldk2TkpPxQAOBQAOJnmlypg5fy01pvXVJIkSZL24jfn9dg1ASMAOBQAOBQAOD1FTyBvfHO+lZOnPrnHm5h4vbyJLXN8Pf/QmoARABwKABwKAJyuXwcIzflv3s7Hn5SDyclJ0W4M7hTt2OsEjADgUADgUADgwK0D6JzfHHkm2l8W8pxNJ/39/aKt5+e7TmHBCAAOBQAOBQBO5jVA2Tx2ZWfzplWirZYFosMIAA4FAA4FAE70GqBqHjvNk6dy/37r1i0xp+M9ftYwAoBDAYBDAYATXAOU3WO3ffcR0d6264DX+33Hi03z/nim/TMCgEMBgEMBgONdAxTtsdP75RZnTsoa4NTZy877dc4dG3vu1b/m7buPov1pVn7+uc9h+/mhMAKAQwGAQwGAE7wOUDWPnVUTDAzsEO3xB9fdAzx21wBlhxEAHAoAHAoAnK5/LiDUY7fUsyjaX+vy0bvhW1//Z1q/sdYZdE0SG0YAcCgAcCgAcDKvAarusdM5XzM7F1YDZJ3jLRgBwKEAwKEAwMl9HaBqHrtVP346rx/zHP/ufffnt/YmYsMIAA4FAA4FAE7mNUCoxy5vT93V8wdFO/Y5gZan0dfDGAojADgUADgUADi5rwO8OHxVtOv71RRy9tjpnFt2D2NjcCjqeIwA4FAA4FAA4HSdJ7Boj10oPCeQ5AoFAA4FAE7uNUB9rdxfb92WGry3Maz/0BxfdQ+jL4wA4FAA4FAA4BS+DqBrgmYSlgNjrwNUzcPo+/sMjADgUADgUADgFF4DLO2Vz96NPnwV1F/oOkDVPIzpiN/97UHZZgQAhwIAhwIAJ/caQOf8svPy0RXn9dGH5T4nUOf8NE3FP4ARABwKABwKAJzC1wE6zuAZzXa86ekP6pVtzvuXhoyaJdC/ELp3MbNvRrTXLaz3Gp8RABwKABwKAJyOGsB3P9kX69w9NEL3Lqycr7/3axgBwKEAwKEAwDHXAdJW3bijJlp6P7yxR37PPp7ccPbWsCYUyNTUe6/7545Ou28YnnFfN4jtYbRyvoYRABwKABwKAByzBmjXW87radLrvG7VBFnTt8Y9P19WtjaoVyaC+iv6vAJGAHAoAHAoAHA6agDre6TeK2gvSp+7/i1hzYWLd5zXtY/ewsrx504fdF5PErenT+f81QvyT9Z8bHRfchgBwKEAwKEAwPH2BOoawaoJOt5v1AjR+SZ/+zfprf39vn+gc363wQgADgUADgUATnCCC103iI3tXwjkgdobqRV7hlAojADgUADgUADgZP4l19ej5ktHjaH8C/M9UuOrUz8PY3Limhrxpmzm7G+IDSMAOBQAOBQAOJVf6Lb2JnypuofR+vw8I4gIKABwKABwuu5hfd8aIG8Po4XlYWxd++7VX+2Q/D0G1gBEQAGAQwGA03U1gEXsGiE2M7V3ot13ST+L6MbK+RpGAHAoAHAoAHDgagCLrM9JzBvWAMQJBQAOBQDOLzFifA2FYHwZAAAAAElFTkSuQmCC",
  Mc = "data:image/png;base64,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",
  Uc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAAgFJREFUeJzt3MFNwzAUBuAWIbEEE7AF7MF2zMEI3ODAnSV6Cee4Vd0oSWPn/75blKiN1F/v2Y7TwwEAAAAAAAAAAAAAAAAA6Mlx6xtINwzDcO388Xhc9Td6WPPDaZ8AhBOAcAIQTgDCCUA4AQi3+3WA2jx7a2vP82tUgHACEE4Awj1ufQP3tnHLPbQ2JFEBwglAOAEIt7sxwNR5/9nlP2+zvv/09Ts6fnr/m/V5a1MBwglAOAEIt7sxQKmc9y89D6/1/Nbm/SUVIJwAhBOAcN2PAWY/758471+655f3f+/9ASpAOAEIJwDhuh8DlNae99fW9qe28K3XCVSAcAIQTgDCdfdewA3v05fXjy+Y+bz/zMvn1dOnj+fRcW3dwDoAdyUA4QQgXPfrAGvP+6uKMUVv+wNUgHACEE4AwnU/BigtPY0evl+vnp/b8/0/AJsSgHACEK77McDcefXUZwe99/ySChBOAMIJQLjmxgC1ffJTe+jc9wb21vNLKkA4AQgnAOGa7k9LuDCmKM+Pjqfu4Su13vNLKkA4AQgnAOG66le3mPvewNQ9hr31/JIKEE4AwglAuOaeBSxt656/9X8A1agA4QQgnACEa6ofLaG29n/h+qvnW+vZS1MBwglAOAEIt/t1gKlbAvfe80sqQDgBCCcAAAAAAAAAAAAAAAAAAAAd+QcizKPAfxkTLQAAAABJRU5ErkJggg==",
  Fc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAAkxJREFUeJzt3cFx1DAUBuBdhhmaoALKoA+6Sx2UwJEDd5rIZTlH2cEY6cmy/++7ZXbi9Sb/vCfJsvd2AwAAAAAAAAAAAK7gfvQJVHs8Ho+jz6HH/X4v/R99qDw46xOAcAIQ7uPsN9zqyb097x+O33P4crOHLCpAOAEIJwDhpo8BZmt7/rse+/Nr6fu//vj119c/fftd+v5bVIBwAhBOAMJNHwOMXtteba1/b88/+vRVgHACEE4Awl1uHWD2vH90z6++/t9SAcIJQDgBCHe6McDR8/7Ven7799h7PBUgnACEE4Bwa2+Qe+JJz2tff/sLnfP+1Xr+aCpAOAEIJwDhll8HmD3vv3rPb6kA4QQgnACEW7o/3W718/7V9/B5PgClBCCcAIRbbh2get7fe69e9bTe8wGYSgDCCUC45dYByq/3f/n+X+dVZevzWQeglACEE4Bwy60DlCt+JlCrXXc4+tpCSwUIJwDhBCDc6cYA09fiO/cXrL6HUAUIJwDhBCDc8mOA6nlyb8s9W89vqQDhBCCcAIRbbj/AaKP3F5y957dUgHACEE4Awi2/DrDX6PsKrtbzWypAOAEIJwDhho8Bep9dO9reef/Ve35LBQgnAOEEINzwMcDsHtg771+951ePqVSAcAIQTgDCnWrO+sze6/2vL5/f/Fzd8/eOUdwXwFQCEE4AwsWNATavDTSqv9fv6GsnKkA4AQgnAOEutyewNbvnbzn6u49bKkA4AQgnAOEutw6w19n28I2mAoQTgHACAAAAAAAAAAAAAHABfwC3/v8vAZpBjAAAAABJRU5ErkJggg==",
  Oc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAAqtJREFUeJzt3bFRxDAQRmHMMNAEMQkZJdAH3dEHHRASEEMTl5iABAsGY6S1Vn7vy47jfAb+2ZUl4Ts7kyRJkiRJkiRJRzb1PoFa8zzPvc8h0jRNoX+j88iDKz8DAGcA4C56n0BrwS0z3N5DGisAnAGAMwBw6ccA5XX+1uvibz315b7+pCqcnl8Xj68e3judyScrAJwBgDMAcOnHANFz4dHWen7vpQwrAJwBgDMAcOnHAKOp7fn/mOf49YBrx7MCwBkAOAMA5xigs97zHFYAOAMAZwDgHANUip7rX9sPUTuGsALAGQA4AwA33Fr7Dz2xfH75gsZ7APee649mBYAzAHAGAK75PEDt+vTRZP95rQBwBgDOAMClXwvofQ+g2uv+6PN3LUBVDACcAYBrPgaIvu6Nnvtvvb7f+tfRekhhBYAzAHAGAC79PEA2W3v61p59erxePI6+h5AVAM4AwBkAuHRjgN5z/5d3N4vH8/xWd8CVeYne9xCyAsAZADgDAJduv1rvff/Rsv1fgRUAzgDAGQC4dPMAq+z5TVkB4AwAnAGAG24eYIf3X35h45gje88vWQHgDACcAYBLPw8QvR5e23JH6/klKwCcAYAzAHDpxgCte2LrPYaj9/ySFQDOAMAZALhU/ShC6z2G0+3T768vv3/nzwHcygoAZwDgDABcunmAWq2v+6N7fm9WADgDAGcA4ML71drn3u3wfuXzyxcU1/1H7/klKwCcAYAzAHDh8wCj98jS0X4eKwCcAYAzAHDD97M/rJ+X37/p+R+ON/zv7CsrAJwBgDMAcIfbD9D6voK1PX/r/gTvD6BdGQA4AwB3uDFAdmWP7/35CFYAOAMAZwDgDj8GyDZ137vnl6wAcAYAzgDAHW4MkKzFpt8/YAWAMwBwBkCSJEmSJAniA8sG9dXtJ5oqAAAAAElFTkSuQmCC",
  Qc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAAtZJREFUeJzt3U1uFDEQhmEaRXATDsANwj24MruwYM8l2DQbNlOJZCz/lCvv++xG0cx0pE/lctvtuT4c7r7vO/saVrqu68r8/o+ZX658BgDOAMA9ZV9Ar+Qhc9hpLY0VAM4AwBkAuHI9QPRqTP35LedC/vnz49fD68/ffyddyf+xAsAZADgDAFe+B8gWx/xqrABwBgDOAMDZA0wW5/2n3fuPrABwBgDOAMDZA3Qanff37gFs7Ykc3VNoBYAzAHAGAM4eYFC1eX9kBYAzAHAGAM4eoGH3vH/2+1usAHAGAM4AwC3vAeK97Ozn4UdVn/dHVgA4AwBnAOCW9wCz179Xm73Pf/b/M7uHsgLAGQA4AwB3/FpAHPJ2nwfQer5/9W2N1S2RFQDOAMAZALjje4Bsu29L7F4qsQLAGQA4AwB33Nr8G/sH4t8f35B8LmCv1jmCrZ7DtQBNZQDgDACc9wEWy36uoMUKAGcA4AwAXPkeYPVZvZ++fpn6eac9V2AFgDMAcAYArlwPsHu9/H7p6wFOn/dHVgA4AwBnAOCm9wCzz7atvifvtHl/ZAWAMwBwBgDuuPsAsUdYfV7Aqz2HL89d768274+sAHAGAM4AwE3vAbLHtGynz/sjKwCcAYAzAHDH3QdoyW4xqs/7IysAnAGAMwBw5XqAKPu8gGrz/sgKAGcA4AwAXPkeoNfqZwmj0Xn/6t9csgLAGQA4AwBXvwcYnPe3fg+gZfW83zOCtJQBgDMAcPV7gIbeef/omH7aen+LFQDOAMAZALh33wNE2efzn8YKAGcA4AwA3HE9wOh5AO9t3/5qVgA4AwBnAOC29wC9e9xGfzdw9b792eci7mYFgDMAcAYAbnsPMDwmhjHfef8YKwCcAYAzAHDHrQWM2v28fvUewgoAZwDgDADccePXG2sFo5/38Lr6mD2bFQDOAMAZALjj7wNUO3evGisAnAGAMwCSJElAfwElasLUXOrQXAAAAABJRU5ErkJggg==",
  zc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAAxtJREFUeJzt3bFx3DAQRmHTo5GbcKwC3IHVh7tzPc6kQLmbUELFBjXG4QDsgnzvC6XhHaX5Z7EgQHL7srh93/fsc5hp27Yt8/u/Zn658hkAOAMAlzr+3KLsAZKHzG6tLc3sHsEKAGcA4AwA3EP2CfTO8w+Hvz73fFyz9z9v//39t19/g87kPlYAOAMAZwDg0nsAOtcClMoAwBkAuPQeoDYGrrYfoHXev9jpH1gB4AwAnAGAS+8BaLLn/SUrAJwBgDMAcIce4JM9eE1jVu/xq1lt3j/6/2sFgDMAcAYA7tAD9I4pZx/zRxv9/yg/r7ZWUvt+KwCcAYAzAHCuBRRWm/fPZgWAMwBwBgBueA/QOy9dbQ9gr9l/j2sB6mIA4AwA3PLXAcohLvp5ALX7+2cvfZR/7+i1BSsAnAGAMwBww3uAq83zo083ejuFFQDOAMAZALjw/XutPUD2dYDRyv0GrfsLvA6goQwAnAGAC18LuNp1gpraHsMa3xegqQwAnAGAq/YAd8zbp45Z77+/z/z4g8cfT0M/b7X7CqwAcAYAzgDANV8HaL0/fbTod/DsL209QO+8P5oVAM4AwBkAuOYeIHrMP/uevOz1/horAJwBgDMAcNUeIHpMir7OcNhz+PKz6fizzftLVgA4AwBnAODC9wRe7X0CpdXn/SUrAJwBgDMAcMvdF3DD8aNO5S7R+/x7n7tYYwWAMwBwBgCuuweYPUbd8P3//iD4eQGr7fNvZQWAMwBwBgBu+WcFjxa9fr/6u5etAHAGAM4AwHX3ANnr2b167zUcPe/3vgCFMgBwBgDu8tcBWuf9vWP62XoiKwCcAYAzAHCX7wFKZ9u3Xxq9VmAFgDMAcAYAbrkeoPl5AMUewLPt289+FrMVAM4AwBkAuOV6gFLvewPPtm8/+hlJVgA4AwBnAOCm9wDD97knz/tHH1+KfhazFQDOAMAZALjh7wsox8To9fTZ8/7RPU32fgMrAJwBgDMAcM3jz+xnAn0yxvZ83KEHyB5zV2MFgDMAcAYArvvdwbOtvn7farX3JVgB4AwAnAGQJEkC+gAjCBSs2IK1XQAAAABJRU5ErkJggg==",
  qc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAA9NJREFUeJztnT1y1EAQhS1qy1yCmAAybgDnMLfjHHADMhMQwyWcLLF6sXp7X49GW+/7MnktjaR61X/TM1oeDs75fD7PvgeFZVkW5fzs+dXrv1FOhvsHAZiDAMw5zb4BFdEFtnNvIQsWwBwEYA4CMGd4DKDmsfH37HoXP//6sn2DCS8/f2/+/vbrX+n68Xni86p5fgYWwBwEYA4CMOfu6wB7E32+mveP9vEZWABzEIA5CMAcOQaYncd2k+X9Gd3PW+2HqI6PBTAHAZiDAMw5XB3gaD2Aat7f3dNXnRvJwAKYgwDMQQDmpDFANc/P/v9oHC3vz+iOkbAA5iAAcxCAOWkM0L22rbsHsJvZ8/1qDFU9HwtgDgIwBwGYU64DqMyu9c/O+0c/P/0AUAIBmIMAzCn3A+xd2o8uM46vrgWs5v1H8+EqWABzEIA5CMCcjnUB6z+I6/GXjz+k81VmxzhX/H9rjyEWwBwEYA4CMOciBhid58ZafPf8e8bjp/dhvD9Dx3v59m51nO0ppL7/6vlYAHMQgDkIwJzhawNn+/wUsW4RqT7v7LoDFsAcBGAOAjDnmnUBq+Pu2v+9o/YYRtT3m8UgESyAOQjAHARgzml07X903h9r7SpxrqDK3nUONQbBApiDAMxBAOZc1AFG5/3V2nfmQ9Vv9lyM97wdAzSsLVyPV3y/1W8YZe8PC2AOAjAHAZjT3w/w4fvqMEuDb+iZu+m2XkOdjx9e52j2+XHdABbAHARgDgIwp9wPkBPy3OfPq+PZPYIXeXi4v8jeeX+3z8/AApiDAMxBAOb8b21g6QJVn1rlaJ8b2Dtmyeoi2fthLgA2QQDmIABzTup+9Bndef/odQmz5/sfn9b7FZyftserzqVEsADmIABzEIA5u38v4N5QY5bquoXHh1pPoHp/WABzEIA5CMAc+XsBR5vvj8zee7i+biG8L3Fuhe8GwiYIwBwEYE77/gBqn/rousPoGKS7n2J0TIUFMAcBmIMAzEn7Abp9svxdPHH9fCSLQbr7JUb7/OrzYAHMQQDmIABz5P0BYq19dvtAd56sxgRVVJ9f/R0LYA4CMAcBmFOOAW6ode9aZ8hQfeYN462OY94/O4bCApiDAMxBAOZcs0fQrgv0u/fUyajGIOr7qPr80f0SWABzEIA5CMAc2b93z59X9xzq9qlqf4Dqowf0HzAXAK+DAMxBAObI+wOM3mMoovb8ZYyem9i7rpKBBTAHAZiDAMxJ/VF3DJBdX3WR8XZn+9y9ewqrYAHMQQDmIABzpvujo+fdR/fhKlgAcxCAOQgAAAAAwJB/s3kQcMKqJVwAAAAASUVORK5CYII=",
  qi = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACABAMAAAAxEHz4AAAAD1BMVEVHcEz284nytSDliicgGCcE4LS5AAAAAXRSTlMAQObYZgAAAJ5JREFUeNrt2LsNgDAMRVEKFuAzAYwAA4DE/jNBCmyF/IkEzX113qmsyHITyJGIPAQACKQ1D7or/fTMvFxZAQAqAOlu5hEAQKq7m7I7gNoFAPgY0Al2AgAQAKTbT950d0YAgApAtzQAgBjgT2BLAwBwu7G59CxZAADlgP2JAQBIsg8QgzWAAAB/AbrXAwAURQ8QMoAAAC8BvVQBAOTmBHvqugmDIq+UAAAAAElFTkSuQmCC",
  Sa = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAAXNSR0IArs4c6QAAAFRQTFRFICo/9c+d/88A+Ldj/8UB0bqh/78A/7cA/60Ax6uV7bEK/6QA/6AA/5kA/5IA1qASop2exJ40/4UAsIA0eX6JlHpOeWhPV2ByYFZLMzxRGSc+ESE7VlFONgAAAadJREFUeNrt121vgyAUhmGnKFRb6ltbOOf//8/x4Jgm7ZKJZGkWbr80fLiCPVLTIpfL5XK5v8zacTydiN4VJJqmcdSa+X1BfRldfU/JQK09WKTJGO3FqmJOBaJUILPWl4v2PR4JQArgmAQksvZ8vrjwLdY1M/niwWIFdSyIXRnf7TZNSnXdusePj7ruXfP8eFi7B7SvQB0Htq0QTSNdytU58JuEuYl5D9goqdBx0BgPLn2h50BuzKr63XDoDtCLCpfqcAXQtwtE1oKUMJ9uO9x4XRdoFwjuCdQxIBoG7O56nSZj8CgxSwlyQfGIJwK9GQOCIFdB+GSMWkbjUqrvwcWCrgVUAew8GBew+32dNsh5JnDHQCU9F0CK5oBtTw1Q/MweA9dTAy8eJBoG4WogNmGPGMlxcN2j6xQLWluWALd7BFhVsVPeguvJltHv59vNgZ4sy+s1oBjSEVBsQYgqFmRu29LXttbiIE6TENIX9eDQj2ATCdLCGcNcUHi9VhWm3fcHwbBSAJSxIAsxDMVT8yzEPEeAnBZERK9XsZ4QxHr+K5jL5XL/oU+kODawNDIwtAAAAABJRU5ErkJggg==",
  Et = {
    1: Uc,
    5: Fc,
    10: Oc,
    100: Qc,
    500: zc,
    1e3: qc,
    default: qi
  },
  Lc = (t, n) => n < 5 ? Et[1] : n < 10 ? Et[5] : n < 100 ? Et[10] : n < 500 ? Et[100] : n < 1e3 ? Et[500] : Et[1e3],
  Bt = {
    1: Nc,
    5: Ic,
    10: Cc,
    100: Pc,
    500: Sc,
    1e3: Tc,
    default: Qi
  },
  Hc = (t, n) => n < 5 ? Bt[1] : n < 10 ? Bt[5] : n < 100 ? Bt[10] : n < 500 ? Bt[100] : n < 1e3 ? Bt[500] : Bt[1e3],
  Gc = () => Cs,
  Vc = () => Fi,
  Jc = () => Oi,
  Dt = {
    1: Ec,
    5: Bc,
    10: Dc,
    100: kc,
    500: Rc,
    1e3: Mc,
    default: zi
  },
  Yc = (t, n) => n < 5 ? Dt[1] : n < 10 ? Dt[5] : n < 100 ? Dt[10] : n < 500 ? Dt[100] : n < 1e3 ? Dt[500] : Dt[1e3],
  Ga = {
    9: Di,
    10: ki,
    11: Ri
  },
  Gs = (t, n) => Ga[t] ? Ga[t] : Sa,
  Xc = () => Sa,
  Vs = {
    1: Lc,
    2: Hc,
    13: Gc,
    4: Vc,
    5: Jc,
    6: Yc,
    9: Gs,
    10: Gs,
    11: Gs,
    default: Xc
  },
  Li = (t, n) => Vs[t] ? Vs[t](t, n) : Vs.default(),
  Wc = ({
    item: t,
    active: n,
    amount: s = 1,
    type: a = "sale"
  }) => {
    var d;
    const i = _(),
      o = c(m => m.shop.selectedCurrency),
      r = (d = t.prices.filter(m => m.currency_id === o)[0]) == null ? void 0 : d.price,
      l = [Ae.info_row];
    return e.jsxs("div", {
      className: l.join(" "),
      onPointerUp: () => {
        n && (i(et(t.id)), i(tt()))
      },
      children: [e.jsxs("div", {
        className: Ae.info_row_content,
        children: [e.jsxs("div", {
          children: [e.jsx("div", {
            className: Ae.row_icon_container,
            children: e.jsx("img", {
              alt: "",
              src: Li(t.id, s),
              className: Ae.row_icon
            })
          }), e.jsx("div", {
            className: Ae.row_title,
            children: e.jsx("span", {
              children: t.name.replace("charges", "").replace("' Snap", "").replace(" Snap", "")
            })
          })]
        }), e.jsxs("div", {
          className: Ae.row_price_container,
          children: [r && e.jsxs("span", {
            className: Ae.main_info_channel_users,
            children: [e.jsx(bc, {}), e.jsx(xt, {
              num: r
            })]
          }), !r && e.jsx("span", {
            className: Ae.main_info_channel_users,
            children: "No"
          })]
        })]
      }), a === "sale" && e.jsx("div", {
        className: Ae.info_row_sale,
        children: "-75%"
      }), a === "limited" && e.jsx("div", {
        style: {
          backgroundColor: "#026e4f",
          color: "white",
          lineHeight: 1
        },
        className: Ae.info_row_sale,
        children: "Limited"
      }), a === "event" && e.jsx("div", {
        className: Ae.info_row_sale,
        style: {
          backgroundColor: "#850294",
          color: "white",
          lineHeight: 1
        },
        children: "Event"
      })]
    })
  },
  Kc = "_panel_1iadi_1",
  Zc = "_item_1iadi_11",
  $c = "_active_1iadi_25",
  Js = {
    panel: Kc,
    item: Zc,
    active: $c
  },
  el = {
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
  Mn = el,
  tl = () => window.location.hostname.split(".").length === 3,
  nl = () => !1,
  Hi = () => window.location.hostname.includes("dev"),
  sl = () => Hi() ? Mn.VITE_ADSGRAM_BLOCK_ID : tl() ? "4853" : "4995",
  Ye = {
    isDev: nl(),
    devServer: Hi(),
    devUserInitData: Mn.VITE_INIT_DATA || null,
    apiBaseUrl: Mn.VITE_API_URL,
    app: {
      disableBetaError: Mn.VITE_DISABLE_BETA_ERROR,
      adsgramBlockId: sl()
    }
  },
  al = () => window.Telegram.WebApp.isVersionAtLeast(8) ? window.Telegram.WebApp.safeAreaInset : {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  il = () => window.Telegram.WebApp.isVersionAtLeast(8) ? window.Telegram.WebApp.contentSafeAreaInset : {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  ol = {
    deviceType: "unknown",
    os: "unknown",
    platform: "unknown",
    fullscreen: window.Telegram.WebApp.isVersionAtLeast("8.0") || Ye.isDev,
    safeAreaInset: al(),
    contentSafeAreaInset: il()
  },
  Gi = he({
    name: "device",
    initialState: ol,
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
    setDeviceInfo: rl,
    setFullscreen: cl
  } = Gi.actions,
  nt = t => t.device.platform,
  ll = t => t.device.os,
  dl = t => t.device.deviceType,
  Ct = t => t.device.fullscreen,
  ul = t => t.device.contentSafeAreaInset,
  ml = t => t.device.safeAreaInset,
  Al = Gi.reducer,
  pl = () => {
    const [t, n] = u.useState("Stars"), s = c(nt);
    return e.jsx("div", {
      className: Js.panel,
      children: ["Star Shop"].map(a => e.jsxs("div", {
        className: `${Js.item} ${t===a?Js.active:""}`,
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
  hl = "_layout_q8u4d_1",
  gl = "_content_q8u4d_22",
  Va = {
    layout: hl,
    content: gl
  },
  _l = "_header_btihg_1",
  fl = "_header_bottom_container_btihg_14",
  xl = "_header_bottom_btihg_14",
  yl = "_header_placeholder_btihg_39",
  vl = "_header_content_btihg_45",
  wl = "_league_btihg_56",
  jl = "_bronze_btihg_66",
  bl = "_silver_btihg_67",
  Nl = "_gold_btihg_68",
  Il = "_platinum_btihg_69",
  Cl = "_diamond_btihg_70",
  Pl = "_logo_link_btihg_72",
  Sl = "_logo_btihg_72",
  Pe = {
    header: _l,
    header_bottom_container: fl,
    header_bottom: xl,
    header_placeholder: yl,
    header_content: vl,
    league: wl,
    bronze: jl,
    silver: bl,
    gold: Nl,
    platinum: Il,
    diamond: Cl,
    logo_link: Pl,
    logo: Sl
  },
  Tl = () => e.jsx("div", {
    className: Pe.header_placeholder
  }),
  Ja = "data:image/png;base64,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",
  El = () => {
    const t = c(Ct);
    return e.jsxs(ae.Fragment, {
      children: [e.jsx("img", {
        alt: "web",
        src: Ja,
        style: {
          position: "absolute",
          top: t ? "0" : "var(--header-height)",
          left: 0,
          zIndex: 100,
          pointerEvents: "none",
          width: 140,
          height: 180,
          opacity: .6
        }
      }), e.jsx("img", {
        alt: "web",
        src: Ja,
        style: {
          position: "absolute",
          top: t ? "0" : "var(--header-height)",
          transform: "scaleX(-1)",
          right: 0,
          zIndex: 100,
          pointerEvents: "none",
          width: 140,
          height: 180,
          opacity: .6
        }
      })]
    })
  },
  Bl = {
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
  le = ({
    children: t
  }) => {
    const n = c(s => s.main.showMiningDetailsPopup);
    return e.jsxs(on.div, {
      className: Va.layout,
      style: {
        overflow: n ? "hidden" : ""
      },
      ...Bl,
      children: [e.jsx(Tl, {}), e.jsx("div", {
        className: Va.content,
        children: t
      }), e.jsx(El, {})]
    })
  },
  U = (t, n) => Math.floor(Math.random() * (n - t + 1) + t),
  Dl = t => `${t.includes("@")?"":"@"}${t}`,
  Ya = t => t.replace("@", ""),
  hn = (t, n = 18, s = !0) => t.slice(0, n) + (t.length > n && s ? "..." : ""),
  Ht = t => {
    window.Telegram.WebApp.openLink(t)
  },
  ue = t => {
    window.Telegram.WebApp.openTelegramLink(t)
  },
  Vi = () => {
    const t = "some_test_local_storage_key";
    try {
      return localStorage.setItem(t, t), localStorage.removeItem(t), !0
    } catch {
      return !1
    }
  },
  Gt = async t => {
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
  }, Ji = t => new Promise(n => setTimeout(n, t)), kl = t => {
    if (!t || !t.x || !t.y || isNaN(t.x) || isNaN(t.y)) return !1;
    const n = Number(t.x),
      s = Number(t.y);
    return !(n < 0 || s < 0 || n >= T.width || s >= T.height)
  }, Rl = () => {
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
      return kl(n.coords) || (n.coords = !1), n.showTemplate && (n.coords = !1), n
    } catch {
      return {
        coords: !1,
        squad: !1,
        refId: !1,
        showTemplate: !1
      }
    }
  }, gn = t => {
    if (!t || isNaN(t)) return "";
    let n = "";
    return t >= 1e3 ? (n += (t / 1e3).toFixed(1), n += "k") : n += t.toFixed(0), n
  }, Ml = t => {
    if (isNaN(t)) return "0 min";
    const n = Math.ceil(t / 3600),
      s = Math.ceil(t % 3600 / 60);
    let a = "";
    return n > 0 ? a += `${n} hour${n!==1?"s":""} ` : a += `${s} min`, a
  }, Ul = t => {
    if (isNaN(t)) return "0 min";
    let n = "";
    const s = Math.floor(t / 3600),
      a = Math.floor(t % 3600 / 60);
    return n += s, n += "h ", n += a > 9 ? a : `0${a}`, n += "m", n
  }, ma = t => !0, Fl = "_layout_13e1w_1", Ol = "_container_13e1w_10", Ql = "_star_13e1w_14", zl = "_move_13e1w_1", In = {
    layout: Fl,
    container: Ol,
    star: Ql,
    move: zl
  }, ql = "_link_1fn8i_1", Ll = "_telegram_icons_1fn8i_13", Yi = {
    link: ql,
    telegram_icons: Ll
  }, N = ({
    children: t,
    className: n = "",
    style: s = {},
    size: a = 12
  }) => t ? e.jsx("span", {
    className: `${Yi.telegram_icons} ${n}`,
    style: {
      fontSize: a,
      ...s
    },
    children: t
  }) : null, Hl = u.memo(() => {
    console.log("render");
    const t = Array.from(Array(30)),
      n = c(nt);
    return e.jsx("div", {
      className: In.layout,
      children: e.jsx("div", {
        className: In.container,
        children: t.map((s, a) => {
          const i = U(4, 14);
          return n === ye ? e.jsx(N, {
            size: i,
            className: In.star,
            style: {
              animationDelay: `-${a*300}ms`,
              transform: `translate(${U(-80,-170)*(a%2===1?1:-1)}px, ${U(-100,100)}px)`
            },
            children: ""
          }, a) : e.jsx(pn, {
            fontSize: i,
            className: In.star,
            style: {
              animationDelay: `-${a*300}ms`,
              transform: `translate(${U(-80,-170)*(a%2===1?1:-1)}px, ${U(-100,100)}px)`
            }
          }, a)
        })
      })
    })
  }, () => !1), Gl = "_layout_1nbfl_1", Vl = "_button_1nbfl_14", Xa = {
    layout: Gl,
    button: Vl
  }, Jl = () => {
    const t = Z();
    return e.jsx("div", {
      className: Xa.layout,
      children: e.jsx("div", {
        className: Xa.button,
        onPointerUp: () => t.push("/pay-support"),
        children: "Pay support"
      })
    })
  }, Yl = "_layout_gx8in_1", Xl = "_container_gx8in_5", Wl = "_item_gx8in_11", Kl = "_active_gx8in_20", Zl = "_image_container_gx8in_24", $l = "_image_gx8in_24", ed = "_item_text_container_gx8in_34", td = "_item_text_gx8in_34", st = {
    layout: Yl,
    container: Xl,
    item: Wl,
    active: Kl,
    image_container: Zl,
    image: $l,
    item_text_container: ed,
    item_text: td
  }, gs = un(), _s = un(), fs = un({
    sortComparer: (t, n) => t.id - n.id
  }), Ta = un(), sn = un(), nd = {
    user: null,
    country: null,
    languageCode: "en",
    pixelsForSale: gs.getInitialState(),
    pixelsForSaleOffset: 0,
    pixelsForSaleLimit: 10,
    pixelsForSaleTotal: 0,
    totalPrice: 0,
    pixelCoins: 0,
    pixelsSold: _s.getInitialState(),
    pixelsSoldOffset: 0,
    pixelsSoldLimit: 10,
    pixelsSoldTotal: 0,
    pixelsForSaleFetchStatus: p.idle,
    pixelsSoldFetchStatus: p.idle,
    getUserFetchStatus: p.idle
  }, Un = Q("user/getUserPixels", async ({
    offset: t,
    limit: n
  }) => (await X.getUserPixels({
    offset: t,
    limit: n
  })).data), Fn = Q("user/getPixelsForSaleTotal", async () => (await X.getUserPixelsCount()).data), On = Q("user/getUserPixelsSold", async ({
    offset: t,
    limit: n
  }, s) => (await X.getUserPixelsSold({
    offset: t,
    limit: n
  })).data), Qn = Q("user/getUser", async (t, {
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
  }), Xi = he({
    name: "user",
    initialState: nd,
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
        gs.removeAll(t.pixelsForSale)
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
        _s.removeAll(t.pixelsSold)
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
      t.addCase(Un.pending, n => {
        n.pixelsForSaleFetchStatus = p.pending
      }).addCase(Un.fulfilled, (n, s) => {
        gs.upsertMany(n.pixelsForSale, s.payload.pixels), n.totalPrice = s.payload.totalPrice, n.pixelsForSaleTotal = s.payload.total, n.pixelsForSaleFetchStatus = p.fulfilled
      }).addCase(Un.rejected, n => {
        n.pixelsForSaleFetchStatus = p.rejected
      }).addCase(On.pending, n => {
        n.pixelsSoldFetchStatus = p.pending
      }).addCase(On.fulfilled, (n, s) => {
        _s.upsertMany(n.pixelsSold, s.payload.pixels), n.pixelsSoldTotal = s.payload.total, n.pixelsSoldFetchStatus = p.fulfilled
      }).addCase(On.rejected, n => {
        n.pixelsSoldFetchStatus = p.rejected
      }).addCase(Qn.pending, n => {
        n.getUserFetchStatus = p.pending
      }).addCase(Qn.fulfilled, (n, s) => {
        n.user = {
          ...s.payload.data
        }, n.country = s.payload.country, n.getUserFetchStatus = p.fulfilled
      }).addCase(Qn.rejected, (n, s) => {
        n.getUserFetchStatus = p.rejected
      }).addCase(Fn.pending, n => {}).addCase(Fn.fulfilled, (n, s) => {
        n.pixelsForSaleTotal = s.payload.myPixelsCount
      }).addCase(Fn.rejected, n => {})
    }
  }), {
    setLanguageCode: sd,
    setPixelsForSaleOffset: Wi,
    setPixelsForSaleTotal: ad,
    setPixelsForSaleFetchStatus: id,
    removePixelsForSale: od,
    setPixelsSoldOffset: Sk,
    setPixelsSoldTotal: Tk,
    setPixelsSoldFetchStatus: Ek,
    removePixelsSold: Bk,
    addPixelCoins: Pt,
    subtractPixelCoins: rd,
    setPixelCoins: Ki,
    updateUserSquad: cd
  } = Xi.actions, Zi = t => {
    const n = t.user.user;
    return n === null ? null : n.league || null
  }, ld = t => t.user.userPic, be = t => t.user.user, dd = Xi.reducer, Nt = {
    getPixelsForSale: Un,
    getPixelsForSaleTotal: Fn,
    getPixelsSold: On,
    getUser: Qn
  }, ud = () => {
    const t = _(),
      n = c(Ui),
      s = c(i => i.shop.selectedCurrency),
      a = c(nt);
    return c(be), u.useEffect(() => {
      a === ye && s === 1 && t(rn(2))
    }, [a]), a !== ye ? null : e.jsx("div", {
      className: st.layout,
      children: e.jsx("div", {
        className: st.container,
        children: n.map(i => {
          if (i.currency_id === 1) return null;
          const o = s === i.currency_id;
          return e.jsxs("div", {
            className: F(st.item, o ? st.active : ""),
            onPointerUp: () => {
              t(rn(i.currency_id))
            },
            children: [e.jsx("div", {
              className: st.image_container,
              children: e.jsx("img", {
                alt: "img",
                className: st.image,
                src: i.image
              })
            }), e.jsx("div", {
              className: st.item_text_container,
              children: e.jsx("span", {
                className: st.item_text,
                children: i.name
              })
            })]
          }, i.currency_id)
        })
      })
    })
  }, md = "/assets/icon_coin-COCalNMQ.gif", Ad = "/assets/icon_stars-BmDiRMAW.gif", pd = {
    items: []
  }, $i = he({
    name: "toast",
    initialState: pd,
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
    removeToast: Wa
  } = $i.actions, hd = $i.reducer, gd = () => {
    const t = _(),
      n = c(nt),
      [s, a] = u.useState(1);
    return e.jsx("img", {
      alt: "img",
      className: Ae.stars_img,
      src: n === ye ? md : Ad,
      onPointerUp: () => {
        (n !== ye || Ye.isDev) && (s >= 7 ? (a(1), t(z({
          id: performance.now(),
          text: "Check every 11th word",
          icon: ""
        }))) : a(s + 1))
      }
    })
  }, _d = ["#FFD700", "#ffc60a", "#FFDF00"], fd = () => {
    _();
    const t = c(i => i.shop.order),
      n = c(i => i.shop.products),
      s = c(i => i.shop.available),
      a = c(nt);
    return u.useEffect(() => {}, []), e.jsxs(le, {
      children: [e.jsxs("div", {
        className: Ae.stars_img_container,
        children: [e.jsx(gd, {}), e.jsx(Hl, {
          color: () => _d[U(0, 2)]
        })]
      }), e.jsx(pl, {}), e.jsxs("div", {
        className: Ae.description_container,
        children: [a !== ye && e.jsxs("span", {
          className: Ae.description,
          children: ["Exclusive offers for brave Pixels. ", e.jsx("br", {}), "We've got something fun", " "]
        }), a === ye && e.jsxs("span", {
          className: Ae.description,
          children: ["Weve got something fun", e.jsx("br", {}), "Buy with tokens, saving ≈30%"]
        })]
      }), e.jsxs("div", {
        className: Ae.info_layout,
        children: [e.jsx(ud, {}), e.jsx("div", {
          className: Ae.info_container,
          children: t.map(i => {
            if (n.hasOwnProperty(i)) {
              const o = n[i];
              let r = !((i === 4 || i === 5) && s[i] > 0);
              {
                let l = i >= 9 && i <= 11 ? "limited" : "regular";
                return e.jsx(Wc, {
                  item: o,
                  active: r,
                  type: l
                }, i)
              }
            }
            return null
          })
        }), e.jsx(Jl, {})]
      })]
    })
  }, xd = "_text_layout_1xggq_1", yd = "_text_1xggq_1", vd = "_button_layout_1xggq_14", wd = "_button_layout_placeholder_1xggq_26", jd = "_button_1xggq_14", Xt = {
    text_layout: xd,
    text: yd,
    button_layout: vd,
    button_layout_placeholder: wd,
    button: jd
  }, _n = "data:image/svg+xml,%3csvg%20height='18'%20viewBox='0%200%2017%2018'%20width='17'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='m.32%208.22c4.81-2.07%208.02-3.43%209.62-4.08%203.48-1.43%204.87-1.96%205.61-2.13.23-.06%201.45.29%201.45%201.18%200%202.58-1.32%208.8-1.87%2011.67-.23%201.22-1.88%201.6-3.74.45-1.47-.91-2.27-1.52-3.68-2.44-1.63-1.05-.58-1.63.35-2.58.25-.25%204.47-4.03%204.55-4.37.01-.04.02-.2-.08-.29-.09-.08-.24-.05-.34-.03-.14.03-2.46%201.54-6.96%204.53-.66.44-1.25.66-1.79.65-.59-.02-1.15-.05-2.56-.6-.94-.37-1.13-1.02-.56-1.96z'%20fill='%23fff'%20fill-rule='evenodd'/%3e%3c/svg%3e", bd = () => e.jsxs(le, {
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
          ue("https://t.me/notpixel_channel")
        },
        children: [e.jsx("img", {
          alt: "tg_logo",
          src: _n
        }), "Telegram Channel"]
      })
    })]
  }), Nd = "_content_9ogc8_1", Id = {
    content: Nd
  }, Cd = () => {
    const t = Z();
    return e.jsx(le, {
      children: e.jsxs("div", {
        className: Id.content,
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
  }, Pd = "_content_7fuxa_1", Sd = {
    content: Pd
  }, Td = () => e.jsx(le, {
    children: e.jsxs("div", {
      className: Sd.content,
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
  }), Ed = "_pixels_amount_ngjsa_1", Bd = "_general_info_container_ngjsa_6", Dd = "_coin_amount_text_ngjsa_12", kd = "_description_container_ngjsa_16", Rd = "_description_ngjsa_16", Cn = {
    pixels_amount: Ed,
    general_info_container: Bd,
    coin_amount_text: Dd,
    description_container: kd,
    description: Rd
  }, Md = "_logo_container_1i5of_1", Ud = {
    logo_container: Md
  }, Fd = "_layout_1cvcu_1", Od = "_container_1cvcu_10", Qd = "_bubble_1cvcu_16", zd = "_move_1cvcu_1", Ys = {
    layout: Fd,
    container: Od,
    bubble: Qd,
    move: zd
  }, qd = u.memo(({
    color: t
  }) => {
    const n = Array.from(Array(200));
    return e.jsx("div", {
      className: Ys.layout,
      children: e.jsx("div", {
        className: Ys.container,
        children: n.map((s, a) => {
          const i = U(1, 8);
          return e.jsx("div", {
            className: Ys.bubble,
            style: {
              width: i,
              height: i,
              animationDelay: `-${a*300}ms`,
              transform: `translate3d(${U(-200,500)}px, ${U(-200,200)}px, ${U(0,33)}px)`,
              background: t()
            }
          }, a)
        })
      })
    })
  }, () => !1), Ld = "_container_1aw3i_1", Hd = "_logo_1aw3i_9", Gd = "_animate_1aw3i_1", Vd = "_center_1aw3i_18", Jd = "_glow_1aw3i_28", Pn = {
    container: Ld,
    logo: Hd,
    animate: Gd,
    center: Vd,
    glow: Jd
  }, Yd = () => e.jsxs("div", {
    className: Pn.container,
    children: [e.jsx("div", {
      className: Pn.glow
    }), e.jsx("div", {
      className: Pn.logo
    }), e.jsx("div", {
      className: Pn.center
    })]
  }), Xd = () => e.jsxs("div", {
    className: Ud.logo_container,
    children: [e.jsx(qd, {
      color: () => `hsl(${U(0,360)} , 1000%, 50%)`
    }), e.jsx(Yd, {})]
  }), Wd = "_container_13oyr_1", Kd = "_button_13oyr_11", Zd = "_info_13oyr_32", lt = {
    container: Wd,
    button: Kd,
    info: Zd
  };
class Es {
  static async claim() {
    return E.get("/mining/claim")
  }
  static async info() {
    return E.get("/mining/status")
  }
  static async checkBoost({
    key: n
  }) {
    return E.get(`/mining/boost/check/${n}`)
  }
  static async checkTask({
    key: n
  }) {
    let s = n,
      a = "";
    if (n === w["channel:notpixel_channel"] || n === w["channel:notcoin"]) {
      const i = n.split(":");
      s = i[0], a = `?name=${i[1]}`
    }
    if (n === w["x:notpixel"] || n === w["x:notcoin"]) {
      const i = n.split(":");
      s = i[0], a = `?name=${i[1]}`
    }
    return E.get(`/mining/task/check/${s}${a}`)
  }
}
const zn = Q("mining/info", async () => (await Es.info()).data),
  qn = Q("mining/claim", async () => (await Es.claim()).data),
  Ln = Q("mining/checkTask", async ({
    key: t
  }) => (await Es.checkTask({
    key: t
  })).data),
  Hn = Q("mining/checkBoost", async ({
    key: t
  }) => (await Es.checkBoost({
    key: t
  })).data),
  $d = {
    info: null,
    tasks: {},
    walletVerification: null,
    boosts: {
      [pe.paintReward]: 1,
      [pe.reChargeSpeed]: 1,
      [pe.energyLimit]: 1
    },
    checkError: {},
    toggleAction: {
      [w.invite1fren]: !0,
      [w.invite3frens]: !0,
      [w.makePixelAvatar]: !0,
      [w.pixelInNickname]: !0,
      [w.boostChannelNotPixel]: !0,
      [w.boostChannelNotCoin]: !0,
      [w.walletConnection]: !0,
      [w.walletVerification]: !0,
      [w["channel:notpixel_channel"]]: !0,
      [w["channel:notcoin"]]: !0,
      [w["x:notpixel"]]: !0,
      [w["x:notcoin"]]: !0,
      [w.jettonTask]: !0,
      [w.limeTask]: !0,
      [w.boinkTask]: !0,
      [w.nikolai]: !0,
      [w.unitsWallet]: !0,
      [w.utgardApp]: !0,
      [w.frogApp]: !0,
      [w.taskTypeCampaign1_74262]: !0,
      [w.taskTypeCampaign1_74264]: !0,
      [w.taskTypeCampaign2_74263]: !0,
      [w.taskTypeCampaign2_74265]: !0,
      [w.taskTypeCampaign3_74388]: !0,
      [w.skinlabTask]: !0,
      [w.nerdGame]: !0
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
  eo = he({
    name: "mining",
    initialState: $d,
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
      t.addCase(zn.pending, n => {
        n.infoStatus = p.pending
      }).addCase(zn.fulfilled, (n, s) => {
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
      }).addCase(zn.rejected, n => {
        n.infoStatus = p.rejected
      }).addCase(qn.pending, n => {
        n.claimStatus = p.pending
      }).addCase(qn.fulfilled, n => {
        n.claimStatus = p.fulfilled, n.info = {
          ...n.info,
          coins: 0,
          initTs: Date.now(),
          coinsFromUpdate: 0,
          fromStart: 0,
          fromUpdate: 0
        }
      }).addCase(qn.rejected, n => {
        n.claimStatus = p.rejected
      }).addCase(Ln.pending, (n, s) => {
        const a = s.meta.arg.key;
        n.checkStatuses[a] = p.pending, n.checkError[a] = !1
      }).addCase(Ln.fulfilled, (n, s) => {
        const a = s.meta.arg.key;
        n.checkStatuses[a] = p.fulfilled, n.tasks[a] = s.payload[a], n.checkError[a] = !s.payload[a]
      }).addCase(Ln.rejected, (n, s) => {
        const a = s.meta.arg.key;
        n.checkStatuses[a] = p.rejected, n.checkError[a] = !0
      }).addCase(Hn.pending, (n, s) => {
        const a = s.meta.arg.key;
        n.checkStatuses[a] = p.pending, n.checkError[a] = !1
      }).addCase(Hn.fulfilled, (n, s) => {
        const a = s.meta.arg.key;
        n.checkStatuses[a] = p.fulfilled, s.payload[a] && (n.boosts[a] += 1), n.checkError[a] = !s.payload[a]
      }).addCase(Hn.rejected, (n, s) => {
        const a = s.meta.arg.key;
        n.checkStatuses[a] = p.rejected, n.checkError[a] = !0
      })
    }
  }),
  Gn = t => {
    const n = pe.paintReward,
      s = t.main.settings,
      a = s.UpgradeRepaint,
      i = t.mining.boosts[n];
    return i === 1 ? s.RepaintReward : a.levels[i].Boost
  },
  {
    setCheckError: eu,
    setActiveTab: Aa,
    setToggleAction: to,
    setAllToggleActions: tu,
    setMaxCharges: nu,
    setRechargeSpeed: su,
    setCharges: au,
    addCharges: no,
    addAddedCharges: iu,
    subCharges: ou,
    restoreCharges: Dk,
    setTask: kk
  } = eo.actions,
  ru = eo.reducer,
  Ne = {
    info: zn,
    claim: qn,
    checkTask: Ln,
    checkBoost: Hn
  },
  cu = "data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M5%200C2.23858%200%200%202.23858%200%205V27C0%2029.7614%202.23858%2032%205%2032H27C29.7614%2032%2032%2029.7614%2032%2027V5C32%202.23858%2029.7614%200%2027%200H5ZM21.4261%2010.5739H10.5739V21.4261H21.4261V10.5739Z'%20fill='white'/%3e%3c/svg%3e",
  lu = "data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M5%200C2.23858%200%200%202.23858%200%205V27C0%2029.7614%202.23858%2032%205%2032H27C29.7614%2032%2032%2029.7614%2032%2027V5C32%202.23858%2029.7614%200%2027%200H5ZM21.4261%2010.5739H10.5739V21.4261H21.4261V10.5739Z'%20fill='%238794a1'/%3e%3c/svg%3e",
  du = {
    white: cu,
    gray: lu
  },
  H = ({
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
    src: du[a],
    ...i
  }),
  uu = ({
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
  mu = ({
    left: t,
    secFromInit: n,
    setRunParticle: s
  }) => {
    const a = _(),
      i = c(m => m.mining.claimStatus),
      [o, r] = u.useState(!1),
      l = c(m => m.mining.info),
      {
        reward: d
      } = uu({
        info: l,
        secFromInit: n
      });
    return u.useEffect(() => {
      o && setTimeout(() => {
        r(!1)
      }, 2e3)
    }, [o]), t > 0 || l.coins === 0 && l.speedPerSecond === 0 ? null : o ? e.jsx("div", {
      className: lt.info,
      children: "Something went wrong..."
    }) : i === p.pending ? e.jsx("div", {
      className: lt.info,
      children: "Claiming..."
    }) : e.jsx(ae.Fragment, {
      children: e.jsxs("button", {
        style: {
          fontFamily: "arial",
          fontSize: 17
        },
        className: lt.button,
        onPointerUp: async () => {
          var m, h;
          try {
            const g = await a(Ne.claim()).unwrap();
            await a(Pt(g.claimed)), s(!0), (h = (m = window.Telegram.WebApp) == null ? void 0 : m.HapticFeedback) == null || h.notificationOccurred("success")
          } catch (g) {
            r(!0), console.warn(g)
          }
        },
        children: [e.jsx("span", {
          style: {
            transform: "translate(0px, 1px)"
          },
          children: "Claim"
        }), " ", e.jsx(H, {
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
  Au = ({
    left: t
  }) => {
    const n = c(s => s.mining.info);
    return t <= 0 || n.coins === 0 && n.speedPerSecond === 0 ? null : e.jsxs("div", {
      className: lt.info,
      children: ["CLAIM IN ", t, " MIN"]
    })
  },
  pu = "_layout_1at34_1",
  hu = "_container_1at34_10",
  gu = "_item_1at34_14",
  Xs = {
    layout: pu,
    container: hu,
    item: gu
  },
  _u = 8,
  fu = 16,
  xu = 500,
  so = 800,
  Ka = window.innerWidth,
  Za = 100,
  yu = () => Array.from(Array(100)).map(() => {
    const t = U(_u, fu),
      n = `hsl(${U(0,360)} , 70%, 50%)`,
      s = U(xu, so),
      a = U(-Ka, Ka),
      i = U(-Za, Za);
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
  ao = u.memo(({
    runParticle: t,
    setRunParticle: n
  }) => {
    const [s, a] = u.useState(yu()), [i, o] = u.useState(!1);
    return u.useEffect(() => {
      t && setTimeout(() => {
        o(!0), setTimeout(() => {
          n(!1), o(!1)
        }, so)
      }, 200)
    }, [t]), e.jsx("div", {
      className: Xs.layout,
      style: {
        visibility: t ? "visible" : "hidden"
      },
      children: e.jsx("div", {
        className: Xs.container,
        children: s.map((r, l) => e.jsx("div", {
          className: Xs.item,
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
  vu = () => {
    const t = c(n => n.mining.info);
    return t.coins === 0 && t.speedPerSecond === 0 ? e.jsx("div", {
      className: lt.info,
      children: "Paint a pixel to start mining"
    }) : null
  },
  wu = (t, n) => {
    const s = n * 60,
      a = Math.max(s - t, 0);
    return Math.ceil(a / 60)
  },
  ju = () => {
    const t = c(d => d.mining.info),
      [n, s] = u.useState(0),
      a = t.fromStart + n,
      i = c(d => d.main.settings.MinTimeToClaim),
      o = wu(a, i),
      [r, l] = u.useState(!1);
    return u.useEffect(() => {
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
      className: lt.container,
      children: [e.jsx(ao, {
        runParticle: r,
        setRunParticle: l
      }), e.jsx(mu, {
        secFromInit: n,
        left: o,
        setRunParticle: l
      }), e.jsx(Au, {
        left: o
      }), e.jsx(vu, {})]
    })
  },
  bu = () => e.jsx("div", {
    className: lt.container,
    children: e.jsx("div", {
      className: lt.info,
      children: "Loading..."
    })
  }),
  Nu = () => c(n => n.mining.infoStatus) !== p.fulfilled ? e.jsx(bu, {}) : e.jsx(ju, {}),
  Iu = () => {
    const t = c(n => n.user.pixelCoins);
    return new Intl.NumberFormat("fr", {
      maximumFractionDigits: 0
    }).format(Math.max(t, 0)).replace(",", ".")
  },
  Cu = "_info_layout_bt2qf_1",
  Pu = "_info_container_bt2qf_10",
  Su = "_category_container_bt2qf_16",
  Tu = "_category_title_bt2qf_22",
  Eu = "_row_container_bt2qf_27",
  Bu = "_info_row_bt2qf_35",
  Du = "_info_row_pending_bt2qf_59",
  ku = "_loading_bt2qf_1",
  Ru = "_content_bt2qf_74",
  Mu = "_image_container_bt2qf_83",
  Uu = "_image_bt2qf_83",
  Fu = "_row_main_information_bt2qf_103",
  Ou = "_row_title_bt2qf_114",
  Qu = "_row_icon_container_bt2qf_120",
  zu = "_row_icon_bt2qf_120",
  qu = "_row_main_value_bt2qf_130",
  Lu = "_row_prompt_bt2qf_137",
  Hu = "_not_pixel_icon_bt2qf_142",
  Gu = "_row_image_bt2qf_147",
  Vu = "_row_reward_count_bt2qf_153",
  Ju = "_row_reward_completed_bt2qf_158",
  Yu = "_priceless_bt2qf_165",
  Xu = "_completed_tasks_container_bt2qf_169",
  Wu = "_completed_task_item_bt2qf_176",
  A = {
    info_layout: Cu,
    info_container: Pu,
    category_container: Su,
    category_title: Tu,
    row_container: Eu,
    info_row: Bu,
    info_row_pending: Du,
    loading: ku,
    content: Ru,
    image_container: Mu,
    image: Uu,
    row_main_information: Fu,
    row_title: Ou,
    row_icon_container: Qu,
    row_icon: zu,
    row_main_value: qu,
    row_prompt: Lu,
    not_pixel_icon: Hu,
    row_image: Gu,
    row_reward_count: Vu,
    row_reward_completed: Ju,
    priceless: Yu,
    completed_tasks_container: Xu,
    completed_task_item: Wu
  },
  te = ({
    children: t,
    boost: n,
    enableCheck: s = !0,
    action: a,
    id: i,
    reward: o,
    ...r
  }) => {
    const l = _(),
      d = [A.info_row],
      m = c(j => j.mining.tasks[n]),
      g = c(j => j.mining.checkStatuses[n]) === p.pending,
      I = c(j => j.mining.checkError[n]),
      b = c(j => j.mining.toggleAction[n]),
      f = u.useRef();
    return n && g && d.push(A.info_row_pending), u.useEffect(() => {
      let j = null;
      return I && setTimeout(() => {
        l(eu({
          key: n,
          value: !1
        }))
      }, 4e3), () => {
        clearTimeout(j)
      }
    }, [I]), e.jsx("div", {
      className: A.row_container,
      ref: f,
      id: i,
      style: {
        opacity: m ? .3 : 1
      },
      children: e.jsx("div", {
        className: d.join(" "),
        onPointerUp: () => {
          !n || m || g || I || (a && l(to({
            action: n,
            value: !b
          })), a && b || a && !s ? a() : s && l(Ne.checkTask({
            key: n,
            reward: o
          })))
        },
        ...r,
        children: t
      })
    })
  },
  Ku = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAAXNSR0IArs4c6QAAAGBQTFRFGypAeIX/KTdNXmWDmXv/xG7/0G/+qXb/tnD/3Gv5ZWipjH//g4L/6Gz0OkZc9mnsfnTFV47/2b3lioia5qfuZ4j/oXjhNZD6bYXgsaa7REx1yJr+SVlt8YHyvpXYz4P13SNuwwAAAVZJREFUeNrt11tugzAQheEAhdgmdQ12AHPL/nfZwcQaWvEC40qo8r+ALyfJiCi3WCwWi/2vsuzSIHCcWxsQ1KHB14vzaboumKbcpfVVwaYpCg4Zc1Uwz4tiJccxIFiEAoVgzG+s66uAfS8gpRqIsQX0pDG1y1qtpTwJ5r9AcxRMksejLD+guws3cugT+np3BHTi6t2pYN/vbgTQkytq7RHQbwSSORGv0XEAanvgcfDeWAIJ5tI8bzdOk3tUHAXxTSNYIHgsIbpOKSH63r/I9njwR4sOgjgtICHAlMJrNMad9AVAxNavxpNpSuAQZE4kg0qt17jdKCUVhNaNLCeCSYIHjgu1poL45KGBWfZ87m0cBiqIG9mdAnZdVXkyy9yTBwoH+o3nwQpaSCH8R+A3pmlIkJ0EpWyhrrv9aJ5BpIAJHcTadhz3jmkYpAwOxr+CsVgsFvv7vgHg5COfXLmgNAAAAABJRU5ErkJggg==",
  ie = ({
    boost: t
  }) => c(s => s.mining.tasks[t]) ? e.jsx("div", {
    className: A.row_icon_container,
    children: e.jsx(N, {
      size: 20,
      children: ""
    })
  }) : e.jsx("div", {
    className: A.row_icon_container,
    children: e.jsx(N, {
      size: 20,
      children: ""
    })
  }),
  Zu = () => {
    const t = w.premium,
      n = c(a => a.main.settings),
      s = c(a => a.mining.tasks[t]);
    return e.jsx(te, {
      boost: t,
      id: "telegramPremium",
      reward: n.TokensForTelegramPremium,
      children: e.jsxs("div", {
        className: A.content,
        children: [!s && e.jsx("div", {
          className: A.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: Ku,
            className: A.image
          })
        }), e.jsxs("div", {
          className: A.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: A.row_title,
              children: "Telegram Premium"
            })
          }), !s && e.jsxs("div", {
            children: ["Get ", e.jsx(H, {
              className: A.not_pixel_icon
            }), " ", n.TokensForTelegramPremium]
          })]
        }), e.jsx(ie, {
          boost: t
        })]
      })
    })
  },
  io = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAIAAAABc2X6AAABJmlDQ1BBZG9iZSBSR0IgKDE5OTgpAAAoz2NgYDJwdHFyZRJgYMjNKykKcndSiIiMUmA/z8DGwMwABonJxQWOAQE+IHZefl4qAwb4do2BEURf1gWZxUAa4EouKCoB0n+A2CgltTiZgYHRAMjOLi8pAIozzgGyRZKywewNIHZRSJAzkH0EyOZLh7CvgNhJEPYTELsI6Akg+wtIfTqYzcQBNgfClgGxS1IrQPYyOOcXVBZlpmeUKBhaWloqOKbkJ6UqBFcWl6TmFit45iXnFxXkFyWWpKYA1ULcBwaCEIWgENMAarTQZKAyAMUDhPU5EBy+jGJnEGIIkFxaVAZlMjIZE+YjzJgjwcDgv5SBgeUPQsykl4FhgQ4DA/9UhJiaIQODgD4Dw745AMDGT/0ZOjZcAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGh2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDYgNzkuMTY0NjQ4LCAyMDIxLzAxLzEyLTE1OjUyOjI5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjIuMiAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDI0LTA5LTI0VDEwOjM5OjA5KzA0OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyNC0wOS0yNFQxMToyMjo0OCswNDowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyNC0wOS0yNFQxMToyMjo0OCswNDowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MWVkZTI5YTMtOTM2ZS1jNjQxLWJkZDEtNDNmMTA2NTY3ZjMzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjkzNjNmMjgyLWIxOTMtZGY0ZS1hYWEyLWE1OGY3Mjg0Mjk0NSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjkzNjNmMjgyLWIxOTMtZGY0ZS1hYWEyLWE1OGY3Mjg0Mjk0NSI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6OTM2M2YyODItYjE5My1kZjRlLWFhYTItYTU4ZjcyODQyOTQ1IiBzdEV2dDp3aGVuPSIyMDI0LTA5LTI0VDEwOjM5OjA5KzA0OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjIuMiAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmM3ZDdlOWUzLTBhNTEtYzU0ZS1iZTVlLWU2MmY5MzE1ZWMwNyIgc3RFdnQ6d2hlbj0iMjAyNC0wOS0yNFQxMToxNzoyOSswNDowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjIgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoxZWRlMjlhMy05MzZlLWM2NDEtYmRkMS00M2YxMDY1NjdmMzMiIHN0RXZ0OndoZW49IjIwMjQtMDktMjRUMTE6MjI6NDgrMDQ6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi4yIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7U6VMbAAABP0lEQVR42u3asW6DMBSF4TxQp861oWQLmGYpsUkfos/QF2+Prw1RhypbisSPzoCDY93P1wyRcnh67naVA2DAgAEDBgwYMGDAgAEDBgwYMGDA+wN/P/ACDBgwYMCAAQMGDHhv4I/Pr7sBDBjwdsGPXAcwYMCAAQMGzK8lwIABAwYMGDBgwIDvpQmpGaLrL66flCZEP6Z2nNsx6d5pOOToPs8Mcxuur285mvNrwhDbkLowK8fxqujpy2lStLh9PW4CrGqsrHfFnSY/1OIKpsSGs+1C1S7mZLtQ5wtc0gmspyG5Pto+XrQjbivgRfsX2Hp+o3bnmmMe1oNQY332pdXnfAR8PTsC52ylw3LmWCvcWv2tt1Glr11dwcrS5OjXl8KW0icFvBz4LYH5Jx5gwIABAwYMGDBgwIABAwYMGPD/5gdV5YsHhxhyrwAAAABJRU5ErkJggg==",
  $u = () => {
    const t = w["channel:notpixel_channel"],
      n = c(a => a.main.settings),
      s = c(a => a.mining.tasks[t]);
    return e.jsx(te, {
      boost: t,
      action: () => {
        ue("https://t.me/notpixel_channel")
      },
      id: "notPixelChannel",
      reward: n.TokensForJoinChannel,
      children: e.jsxs("div", {
        className: A.content,
        children: [!s && e.jsx("div", {
          className: A.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: io,
            className: A.image
          })
        }), e.jsxs("div", {
          className: A.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: A.row_title,
              children: "Not Pixel Channel"
            })
          }), !s && e.jsxs("div", {
            children: ["Get ", e.jsx(H, {
              className: A.not_pixel_icon
            }), " ", n.TokensForJoinChannel]
          })]
        }), e.jsx(ie, {
          boost: t
        })]
      })
    })
  },
  em = () => {
    const t = w["x:notpixel"],
      n = c(a => a.main.settings),
      s = c(a => a.mining.tasks[t]);
    return e.jsx(te, {
      boost: t,
      action: () => {
        Ht("https://x.com/notpixelx")
      },
      id: "notPixelX",
      reward: n.TokensForJoinX,
      children: e.jsxs("div", {
        className: A.content,
        children: [!s && e.jsx("div", {
          className: A.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: io,
            className: A.image
          })
        }), e.jsxs("div", {
          className: A.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: A.row_title,
              children: "Not Pixel on X.com"
            })
          }), !s && e.jsxs("div", {
            children: ["Get ", e.jsx(H, {
              className: A.not_pixel_icon
            }), " ", n.TokensForJoinX]
          })]
        }), e.jsx(ie, {
          boost: t
        })]
      })
    })
  },
  tm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQBAMAAAB8P++eAAAAAXNSR0IArs4c6QAAABhQTFRFHCk/6cGp86xt4I5f1YNQq4VwlU8bUzwyVRbffwAAAJZJREFUeNrt1cENw0AIBdG04BZo4bcwLWwLlGDaj7KKkeVTZFAu3jk/gcSF12r1vKAVbsza4PYpaRk62HaiVegCDmoA8hoEY3ZsV0QVojONcC9DMPvKMdxbIDJDEaMPIkW4T9cEkWd1aNYOsWaI3YP7v+7od+Ge8JpLl4lRg5MmTFaAMwklK8HMpWQ1mEWyX+B6yqtVtTf2acUX1leb/QAAAABJRU5ErkJggg==",
  Ve = ({
    num: t
  }) => isNaN(t) ? null : new Intl.NumberFormat("en-US").format(t),
  nm = () => {
    const t = Z(),
      n = w.invite1fren;
    let s = c(i => i.user.user);
    const a = c(i => i.main.settings);
    return s === null ? null : e.jsx(te, {
      action: () => {
        t.push("/invite-frens")
      },
      boost: n,
      id: "invite1Fren",
      reward: a.TokensForInvite1Fren,
      enableCheck: !1,
      children: e.jsxs("div", {
        className: A.content,
        children: [e.jsx("div", {
          className: A.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: tm,
            className: A.image
          })
        }), e.jsxs("div", {
          className: A.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: A.row_title,
              children: "Invite bonus "
            })
          }), e.jsxs("div", {
            children: ["Up to ", e.jsx(H, {
              className: A.not_pixel_icon
            }), " ", e.jsx(Ve, {
              num: a.RefRewardCoinsPremium
            }), " for fren"]
          })]
        }), e.jsx("div", {
          className: A.row_icon_container,
          children: e.jsx(N, {
            size: 20,
            children: ""
          })
        })]
      })
    })
  },
  sm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQBAMAAAB8P++eAAAAAXNSR0IArs4c6QAAAB5QTFRFHCk/9fPq//Bh0cq8/9YA/8cA/ZIAqZyM9mYAiF8iNQ3eYAAAALRJREFUeNrt1TGRRTEMQ1FTMAVTMAVBWC0EUQiFUAjbHe/M+5lfvcIpcxs1p5fdbrdujAiehIyKB6FbVDoGYRbhFjgHAwoznIOENCOgY1DEVIB2BgY0Jf6Amog3+Eu+wIA051RVE2jCfyawHKGi6EEbawlPrrnSmjDXIt2L0d3lbei55O5O0qtsw/T06jOjC0fml+vCLbfrw5GZD8vRhFtW2/VgyfGwcn1YtNrsHd4bvd16/QEV+IbgR8VccAAAAABJRU5ErkJggg==",
  am = () => {
    const t = w.paint20pixels,
      n = c(i => i.main.settings),
      s = c(i => i.mining.info),
      a = c(i => i.mining.tasks[t]);
    return s === null ? null : e.jsx(te, {
      boost: t,
      id: "pain20pixels",
      reward: n.TokensForPaint20Pixels,
      children: e.jsxs("div", {
        className: A.content,
        children: [!a && e.jsx("div", {
          className: A.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: sm,
            className: A.image
          })
        }), e.jsxs("div", {
          className: A.row_main_information,
          children: [e.jsx("div", {
            children: e.jsxs("span", {
              className: A.row_title,
              children: ["Paint pixels • ", Math.min(s.repaintsTotal, 20), "/20", " "]
            })
          }), !a && e.jsxs("div", {
            children: ["Get ", e.jsx(H, {
              className: A.not_pixel_icon
            }), " ", n.TokensForPaint20Pixels]
          })]
        }), e.jsx(ie, {
          boost: t
        })]
      })
    })
  },
  im = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQBAMAAAB8P++eAAAAAXNSR0IArs4c6QAAABVQTFRFHCk//PuG/+wo/8gA/5IA9mYAb0QgBXY6pgAAAJ9JREFUeNrt1TGNBEEQQ9GiUBQ+BVMwBVMY/hBOVxptvFJXtv0DRy933W6/lkCrkO5uFqF60h4EuoE1KLq6u9AWhKegHtiCotvuRlvQggTkFYhctkB2WRxDYstvssMhlJ0IDUOJrUOYKtNMjapyBifRbwzagLxuC5pP3oHxx2UDjtQ0bgGOnFJrsPLOGoz/11mCsuw8T2xZX8P7zbfbQX+axVI3GU07RQAAAABJRU5ErkJggg==",
  om = () => {
    const t = Z(),
      n = w.invite3frens;
    let s = c(o => o.user.user);
    const a = c(o => o.main.settings),
      i = c(o => o.mining.tasks[n]);
    return s === null ? null : e.jsx(te, {
      action: () => {
        t.push("/invite-frens")
      },
      boost: n,
      id: "invite3Frens",
      reward: a.TokensForInvite3Frens,
      children: e.jsxs("div", {
        className: A.content,
        children: [!i && e.jsx("div", {
          className: A.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: im,
            className: A.image
          })
        }), e.jsxs("div", {
          className: A.row_main_information,
          children: [e.jsx("div", {
            children: e.jsxs("span", {
              className: A.row_title,
              children: ["Invite frens • ", Math.min(s.friends, 3), "/3", " "]
            })
          }), !i && e.jsxs("div", {
            children: ["Get ", e.jsx(H, {
              className: A.not_pixel_icon
            }), " ", a.TokensForInvite3Frens]
          })]
        }), e.jsx(ie, {
          boost: n
        })]
      })
    })
  },
  rm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQBAMAAAB8P++eAAAAAXNSR0IArs4c6QAAABtQTFRFHCk/8/Dl/+Qy/9sA/8cA/6lU86MA2YQQn1IBegOu8wAAAIlJREFUeNrt1DERA0EMQ1FTCAVTMAVROAqiYAqGnfFFTbpM1tWNf/0aNbJt27a/ig5zEKEwAOXc3SUHINtJghMQHyc5APkNeQ6B8JdluzkYZubdCLwS8LLCFLyuWwLeBZAHUK5lhAvSzmFWEdG0p+QBVFWV5E1B0g6hbFKlzUBRZtmvcN96257eG1BkaXWD691mAAAAAElFTkSuQmCC",
  cm = () => {
    const t = w.joinSquad;
    let n = c(i => i.user.user);
    const s = c(i => i.main.settings),
      a = c(i => i.mining.tasks[t]);
    return n === null ? null : e.jsx(te, {
      boost: t,
      id: "joinSquad",
      reward: s.TokensForJoinSquad,
      children: e.jsxs("div", {
        className: A.content,
        children: [!a && e.jsx("div", {
          className: A.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: rm,
            className: A.image
          })
        }), e.jsxs("div", {
          className: A.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: A.row_title,
              children: "Join Squad"
            })
          }), !a && e.jsxs("div", {
            children: ["Get ", e.jsx(H, {
              className: A.not_pixel_icon
            }), " ", s.TokensForJoinSquad]
          })]
        }), e.jsx(ie, {
          boost: t
        })]
      })
    })
  },
  Ea = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQBAMAAAB8P++eAAAAAXNSR0IArs4c6QAAABhQTFRFHCk//9dK/7cA/pYA2n0AvlkAmjEAXjEUlqfz5AAAAKhJREFUeNrt1cFpRFEMQ1G1oBbUglpwC2pBLUz74Q8hmeXA8/JdMMZw9sbtdjvJohNLpBYgB5i0TWYCDA8hC7/iNB7LL6M8gwKAKh1bfF86gy6AcP5hfQYhAKUfyDc0DiEMVMpYpAHhGMKtObGo1FiAMGplqIGxAgPEIz97Bz61KZ7W4IjahchgGY6WoSmuQqcm92D/WoPU8Jk9+OvWYD/6Gt5nerud9AMgnFxPBQmwaAAAAABJRU5ErkJggg==",
  lm = () => {
    var o, r;
    const t = w.leagueBonusSilver,
      n = c(l => l.main.settings),
      s = (r = (o = window.Telegram.WebApp.initDataUnsafe) == null ? void 0 : o.user) == null ? void 0 : r.is_premium,
      a = c(l => l.mining.tasks[t]),
      i = s ? n.TokensForSilverLeaguePremium : n.TokensForSilverLeagueCommon;
    return e.jsx(te, {
      boost: t,
      id: "leagueBonusSilver",
      reward: i,
      children: e.jsxs("div", {
        className: A.content,
        children: [!a && e.jsx("div", {
          className: A.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: Ea,
            className: A.image
          })
        }), e.jsxs("div", {
          className: A.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: A.row_title,
              children: "Silver League Bonus"
            })
          }), !a && e.jsxs("div", {
            children: ["Get ", e.jsx(H, {
              className: A.not_pixel_icon
            }), " ", s ? n.TokensForSilverLeaguePremium : n.TokensForSilverLeagueCommon]
          })]
        }), e.jsx(ie, {
          boost: t
        })]
      })
    })
  },
  dm = () => {
    var r, l;
    const t = w.leagueBonusGold,
      n = c(d => d.mining.tasks[w.leagueBonusSilver]),
      s = c(d => d.main.settings),
      a = (l = (r = window.Telegram.WebApp.initDataUnsafe) == null ? void 0 : r.user) == null ? void 0 : l.is_premium,
      i = c(d => d.mining.tasks[t]),
      o = a ? s.TokensForGoldLeaguePremium : s.TokensForGoldLeagueCommon;
    return n ? e.jsx(te, {
      boost: t,
      id: "leagueBonusGold",
      reward: o,
      children: e.jsxs("div", {
        className: A.content,
        children: [!i && e.jsx("div", {
          className: A.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: Ea,
            className: A.image
          })
        }), e.jsxs("div", {
          className: A.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: A.row_title,
              children: "Gold League Bonus"
            })
          }), !i && e.jsxs("div", {
            children: ["Get ", e.jsx(H, {
              className: A.not_pixel_icon
            }), " ", a ? s.TokensForGoldLeaguePremium : s.TokensForGoldLeagueCommon]
          })]
        }), e.jsx(ie, {
          boost: t
        })]
      })
    }) : null
  },
  um = () => {
    var r, l;
    const t = w.leagueBonusPlatinum,
      n = c(d => d.mining.tasks[w.leagueBonusGold]),
      s = c(d => d.main.settings),
      a = (l = (r = window.Telegram.WebApp.initDataUnsafe) == null ? void 0 : r.user) == null ? void 0 : l.is_premium,
      i = c(d => d.mining.tasks[t]),
      o = a ? s.TokensForPlatinumLeaguePremium : s.TokensForPlatinumLeagueCommon;
    return n ? e.jsx(te, {
      boost: t,
      id: "leagueBonusPlatinum",
      reward: o,
      children: e.jsxs("div", {
        className: A.content,
        children: [!i && e.jsx("div", {
          className: A.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: Ea,
            className: A.image
          })
        }), e.jsxs("div", {
          className: A.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: A.row_title,
              children: "Platinum League Bonus"
            })
          }), !i && e.jsxs("div", {
            children: ["Get ", e.jsx(H, {
              className: A.not_pixel_icon
            }), " ", a ? s.TokensForPlatinumLeaguePremium : s.TokensForPlatinumLeagueCommon]
          })]
        }), e.jsx(ie, {
          boost: t
        })]
      })
    }) : null
  },
  mm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAIAAAABc2X6AAABJmlDQ1BBZG9iZSBSR0IgKDE5OTgpAAAoz2NgYDJwdHFyZRJgYMjNKykKcndSiIiMUmA/z8DGwMwABonJxQWOAQE+IHZefl4qAwb4do2BEURf1gWZxUAa4EouKCoB0n+A2CgltTiZgYHRAMjOLi8pAIozzgGyRZKywewNIHZRSJAzkH0EyOZLh7CvgNhJEPYTELsI6Akg+wtIfTqYzcQBNgfClgGxS1IrQPYyOOcXVBZlpmeUKBhaWloqOKbkJ6UqBFcWl6TmFit45iXnFxXkFyWWpKYA1ULcBwaCEIWgENMAarTQZKAyAMUDhPU5EBy+jGJnEGIIkFxaVAZlMjIZE+YjzJgjwcDgv5SBgeUPQsykl4FhgQ4DA/9UhJiaIQODgD4Dw745AMDGT/0ZOjZcAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGh2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDYgNzkuMTY0NjQ4LCAyMDIxLzAxLzEyLTE1OjUyOjI5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjIuMiAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDI0LTA5LTI0VDExOjA1OjE0KzA0OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyNC0wOS0yNFQxMToyMjoxMyswNDowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyNC0wOS0yNFQxMToyMjoxMyswNDowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NGU1YjQ1ZGMtMDA0MC0xNTRkLWIzYWMtNDRkNGJjOWU4Y2JlIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOmFjOGM1YWVjLWQ0YjctZGQ0YS05ZTJkLTczNjcwMTRkZjQ4NiIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmFjOGM1YWVjLWQ0YjctZGQ0YS05ZTJkLTczNjcwMTRkZjQ4NiI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YWM4YzVhZWMtZDRiNy1kZDRhLTllMmQtNzM2NzAxNGRmNDg2IiBzdEV2dDp3aGVuPSIyMDI0LTA5LTI0VDExOjA1OjE0KzA0OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjIuMiAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmM1NDNmYzg1LTZhNjMtZTY0MS1iYzMzLTRiNWU5OWM2NDY5MCIgc3RFdnQ6d2hlbj0iMjAyNC0wOS0yNFQxMToxNzozMCswNDowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjIgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo0ZTViNDVkYy0wMDQwLTE1NGQtYjNhYy00NGQ0YmM5ZThjYmUiIHN0RXZ0OndoZW49IjIwMjQtMDktMjRUMTE6MjI6MTMrMDQ6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi4yIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6TN+2hAAAAr0lEQVR42u3auwmAQBAFQAsysgHB3AIEi7AGGz8zMRE8XT94s7z0HTvpsVXddEWlAgYGBgYGBgYGBgYGBgYGBgYGBv49OGVOVBcYGPg8OAXNOM1ZuY4HBi4XnG6eIztcxwMDA78J3tsHGBgYGBgYGBgY+Mvgth/WRCG3b+Yic7vAwKWDo/BR3Ud/LYGBfwbewx9JVBcYGNhRCzAwMDAwMDAwMDAwMDAwMDAwMPDnsgAsAtPYi2unugAAAABJRU5ErkJggg==",
  Am = () => {
    const t = Z(),
      n = w.openLeague;
    let s = c(a => a.user.user);
    return c(a => a.main.settings), s === null ? null : e.jsx(te, {
      boost: n,
      enableCheck: !1,
      action: () => t.push("/open-league"),
      id: "openLeague",
      children: e.jsxs("div", {
        className: A.content,
        children: [e.jsx("div", {
          className: A.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: mm,
            className: A.image
          })
        }), e.jsxs("div", {
          className: A.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: A.row_title,
              children: "Open League"
            })
          }), e.jsx("div", {
            children: e.jsx("span", {
              className: A.priceless,
              children: "Priceless"
            })
          })]
        }), e.jsx(ie, {
          boost: n
        })]
      })
    })
  },
  Ws = ({
    text: t
  }) => e.jsx("div", {
    className: A.category_container,
    children: e.jsx("span", {
      className: A.category_title,
      children: t
    })
  }),
  pm = () => {
    const t = w.spendStars,
      n = c(a => a.main.settings),
      s = c(a => a.mining.tasks[t]);
    return e.jsx(te, {
      boost: t,
      id: "spendStars",
      reward: n.TokensForSpendStars,
      children: e.jsxs("div", {
        className: A.content,
        children: [!s && e.jsx("div", {
          className: A.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: Sa,
            className: A.image
          })
        }), e.jsxs("div", {
          className: A.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: A.row_title,
              children: "Spend Stars"
            })
          }), !s && e.jsxs("div", {
            children: ["Get ", e.jsx(H, {
              className: A.not_pixel_icon
            }), " ", n.TokensForSpendStars]
          })]
        }), e.jsx(ie, {
          boost: t
        })]
      })
    })
  },
  hm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAABiUlEQVR4nO3coU7DUBhH8UJ4ACQKxyRz8+BROB4DO43lMXBT0+MBcASHRE3yBqD7T6Bpz73tFefnmqXNdvLly93ETq6ub346TXZqOsaAkAEhA0IGhAwIGRAyIGRAyICQASEDQgaEDAgZEDIgZEDIgJABIQNCBoTOSj3o8/11qc8wyWp9W+Q5TiBkQMiAULEdmO4fn9D9u+dt77r080pxAiEDQgaEqu3A3Dnjz139+z8Oh1F3z3UudQIhA0IGhIrtwM3dQ+/6bf8y7ycZkO+vFCcQMiBkQKjYDvz+Ov77ep7LSv0e99fz09D7m8oJhAwIGRCq9l146XNhrXNfcgIhA0IGhKrtwDx35U6i58K8P59f69yXnEDIgJABoWo7MNXeSXPtvOQEQgaEDAgt9q8d55cXveux35WXOvclJxAyIGRAqJl/Lhraia3svOQEQgaEDAg1++9tuRNb2XnJCYQMCBkQmu33wLFa3XnJCYQMCBkQMiBkQMiAkAEhA0IGhAwIGRAyIGRAouu6XySITdXe7YNeAAAAAElFTkSuQmCC",
  gm = () => {
    const t = _(),
      n = w.walletVerification,
      s = c(h => h.main.settings),
      [a] = An(),
      i = c(h => h.mining.tasks[n]),
      o = Pr(),
      r = Sr(),
      l = s.TokensForWalletVerification,
      d = c(h => h.mining.infoStatus),
      m = async () => {
        if (i || !o) return;
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
        const h = await X.generateTonProofPayload();
        if (h.status === 200 && h.data && h.data.payload) {
          const g = h.data;
          a.setConnectRequestParameters({
            state: "ready",
            value: {
              tonProof: g.payload
            }
          }), await a.openModal()
        } else t(z({
          id: performance.now(),
          text: "Something went wrong, try again"
        }))
      };
    return u.useEffect(() => {
      var h;
      !o || d !== p.fulfilled || r && (i || (h = r == null ? void 0 : r.connectItems) != null && h.tonProof && !("error" in r.connectItems.tonProof) && X.checkTonProof(r.connectItems.tonProof.proof, r.account).then(g => {
        g.status === 200 && g.data.success ? t(Ne.checkTask({
          key: n,
          reward: l
        })) : t(z({
          id: performance.now(),
          text: "Something went wrong. Try later, or try another wallet."
        }))
      }))
    }, [r, o, d, i]), e.jsx(te, {
      boost: n,
      action: m,
      enableCheck: !1,
      reward: l,
      children: e.jsxs("div", {
        className: A.content,
        children: [!i && e.jsx("div", {
          className: A.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: hm,
            className: A.image
          })
        }), e.jsxs("div", {
          className: A.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: A.row_title,
              children: "Ton wallet verification."
            })
          }), !i && e.jsxs("div", {
            children: ["Get ", e.jsx(H, {
              className: A.not_pixel_icon
            }), " ", l]
          })]
        }), e.jsx(ie, {
          boost: n
        })]
      })
    })
  },
  oo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAIAAAABc2X6AAABJmlDQ1BBZG9iZSBSR0IgKDE5OTgpAAAoz2NgYDJwdHFyZRJgYMjNKykKcndSiIiMUmA/z8DGwMwABonJxQWOAQE+IHZefl4qAwb4do2BEURf1gWZxUAa4EouKCoB0n+A2CgltTiZgYHRAMjOLi8pAIozzgGyRZKywewNIHZRSJAzkH0EyOZLh7CvgNhJEPYTELsI6Akg+wtIfTqYzcQBNgfClgGxS1IrQPYyOOcXVBZlpmeUKBhaWloqOKbkJ6UqBFcWl6TmFit45iXnFxXkFyWWpKYA1ULcBwaCEIWgENMAarTQZKAyAMUDhPU5EBy+jGJnEGIIkFxaVAZlMjIZE+YjzJgjwcDgv5SBgeUPQsykl4FhgQ4DA/9UhJiaIQODgD4Dw745AMDGT/0ZOjZcAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGh2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDYgNzkuMTY0NjQ4LCAyMDIxLzAxLzEyLTE1OjUyOjI5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjIuMiAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDI0LTA5LTI0VDEwOjEzOjA1KzA0OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyNC0wOS0yNFQxMToyMTo0NSswNDowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyNC0wOS0yNFQxMToyMTo0NSswNDowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OWE1ZTFkNmEtMDFkMy01MTRjLWI1ZGQtZjQ1YTZjZmMzYzU3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjNlNWY4MjgyLTc1NjEtMDQ0Zi1hMWM1LTYzN2ViZmQyYjcxNSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjNlNWY4MjgyLTc1NjEtMDQ0Zi1hMWM1LTYzN2ViZmQyYjcxNSI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6M2U1ZjgyODItNzU2MS0wNDRmLWExYzUtNjM3ZWJmZDJiNzE1IiBzdEV2dDp3aGVuPSIyMDI0LTA5LTI0VDEwOjEzOjA1KzA0OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjIuMiAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjUwMjg3MDBiLTJkNWItMGU0OS05MmYyLWM0Y2U0OWE4ODAwNiIgc3RFdnQ6d2hlbj0iMjAyNC0wOS0yNFQxMToxNzoyNSswNDowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjIgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo5YTVlMWQ2YS0wMWQzLTUxNGMtYjVkZC1mNDVhNmNmYzNjNTciIHN0RXZ0OndoZW49IjIwMjQtMDktMjRUMTE6MjE6NDUrMDQ6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi4yIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5KGBqWAAAAxElEQVR42u3aywmDQBQFUAtylQYE9ykgYBHWkMZ1J7OJPHyO8XMedzXI4NlcGMemffWPSgMMDAwMDAwMDAwMDAwMDAxcIVMxwMDA1wBPgQEGBj4XuMQM43dJZB0YGPhc4Mw6MDDwceBfhRSBHVNgwMDA0YNB5gNAvQMGMDDw2st178+SDLjcBxgYeH9wplQyz+fxwMDAW4oqA963wICBgaOXY7UHGBh4O7gskn8FGBjYz6XAwMDAwMDAwMDAwMDAwMC3zAwlcvXsnlyGdQAAAABJRU5ErkJggg==",
  _m = () => {
    const t = w["channel:notcoin"],
      n = c(a => a.main.settings),
      s = c(a => a.mining.tasks[t]);
    return e.jsx(te, {
      boost: t,
      action: () => {
        ue("https://t.me/notcoin")
      },
      id: "notCoinChannel",
      reward: n.TokensForJoinChannel,
      children: e.jsxs("div", {
        className: A.content,
        children: [!s && e.jsx("div", {
          className: A.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: oo,
            className: A.image
          })
        }), e.jsxs("div", {
          className: A.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: A.row_title,
              children: "Notcoin community"
            })
          }), !s && e.jsxs("div", {
            children: ["Get ", e.jsx(H, {
              className: A.not_pixel_icon
            }), " ", n.TokensForJoinChannel]
          })]
        }), e.jsx(ie, {
          boost: t
        })]
      })
    })
  },
  fm = () => {
    const t = w["x:notcoin"],
      n = c(a => a.main.settings),
      s = c(a => a.mining.tasks[t]);
    return e.jsx(te, {
      boost: t,
      action: () => {
        Ht("https://x.com/thenotcoin")
      },
      id: "notCoinX",
      reward: n.TokensForJoinX,
      children: e.jsxs("div", {
        className: A.content,
        children: [!s && e.jsx("div", {
          className: A.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: oo,
            className: A.image
          })
        }), e.jsxs("div", {
          className: A.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: A.row_title,
              children: "Notcoin on X.com"
            })
          }), !s && e.jsxs("div", {
            children: ["Get ", e.jsx(H, {
              className: A.not_pixel_icon
            }), " ", n.TokensForJoinX]
          })]
        }), e.jsx(ie, {
          boost: t
        })]
      })
    })
  },
  xm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAACTElEQVR4nO2cvUrDUBiGv7QdVJwcHcTBjvYeegOuTiJaRBA3BwuioqC0UtHB4uDgpXgPOppBHBydRB0kkZPktLHUmvblmE95nyUY22N8+nDy0xCvXKmGQkamQHUYFAhCgSAUCEKBIBQIQoEgFAhCgSAUCEKBIBQIQoEgFAhCgSAUCEKBIBQIQoEgFAhCgSAll4O/vb7I08OdBB/vv/G/9KVQGpPp2XkZn5h0M76TURPylmcwf99shyucFmjlNQ7ir54LoYgnIl6yjH4O408xWoY/rOt9X5gaK+iOJanXLbQ9px8i50AQCgShQBAKBKFAEAoEcXoYMwrHl3NDvau17Oe6vSwQRF2BlsfnwWXNTA1XqitYIIiaAk/acVFZy2uu+NGpmuR8gzILBPkzAk156Xlv+5pz4L8g9znw9CLb3Jf+vZY9sLBAHDV74X5V9VZpX9NY9aOLp3nvgYUF4uRe4Nam37l8/92xoC3vqOZHl+o1lGdhgSBqz4UlVd7hmp45rxcWCKKyQFve3rqO891BsEAQVQXWN/wvX6xrLs/CAkEoEIQCQSgQhAJBKBDE6WGMuTvU3JtX3/cyvf58N4wOY4rm8CUQKSbrvWRdMYiXi2fZxktvhyucFmhurXW58Vmwt/i6QtWTi+5vb6Jleyfs1FZIlbfUissrV6o5b2kXzoEgKp+dZUu8qsdzYq2przwLCwRR/fQ2W6LG8iwsEET1JX3N5VlYIAgFglAgCAWCUCAIBYJQIAgFglAgCAWCUCAIBYJQIAgFglAggoh8Ap/jkinpc8FdAAAAAElFTkSuQmCC",
  ym = () => {
    const t = c(i => i.user.user),
      n = w.boostChannelNotPixel,
      s = c(i => i.main.settings),
      a = c(i => i.mining.tasks[n]);
    return !t || !t.isPremium ? null : e.jsx(te, {
      action: () => {
        ue("https://t.me/boost/notpixel_channel")
      },
      boost: n,
      id: "notPixelBoostChannel",
      reward: s.TokensForBoostChannelNotPixel,
      children: e.jsxs("div", {
        className: A.content,
        children: [!a && e.jsx("div", {
          className: A.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: xm,
            className: A.image
          })
        }), e.jsxs("div", {
          className: A.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: A.row_title,
              children: "Boost Not Pixel Channel "
            })
          }), !a && e.jsxs("div", {
            children: ["Get ", e.jsx(H, {
              className: A.not_pixel_icon
            }), " ", 64]
          })]
        }), e.jsx(ie, {
          boost: n
        })]
      })
    })
  },
  vm = "data:image/png;base64,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",
  wm = () => {
    const t = w.makePixelAvatar,
      n = c(a => a.main.settings),
      s = c(a => a.mining.tasks[t]);
    return e.jsx(te, {
      action: () => {
        ue("https://t.me/notpixime_bot")
      },
      boost: t,
      reward: n.TokensForMakePixelAvatar,
      children: e.jsxs("div", {
        className: A.content,
        children: [!s && e.jsx("div", {
          className: A.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: vm,
            className: A.image
          })
        }), e.jsxs("div", {
          className: A.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: A.row_title,
              children: "Pixelize your photo"
            })
          }), !s && e.jsxs("div", {
            children: ["Get ", e.jsx(H, {
              className: A.not_pixel_icon
            }), " ", 64]
          })]
        }), e.jsx(ie, {
          boost: t
        })]
      })
    })
  },
  jm = "_pixel_image_popup_265n2_1",
  bm = "_pixel_image_text_container_265n2_8",
  Nm = "_pixel_image_265n2_1",
  Im = "_pixel_copy_button_265n2_25",
  Cm = "_gray_265n2_35",
  at = {
    pixel_image_popup: jm,
    pixel_image_text_container: bm,
    pixel_image: Nm,
    pixel_copy_button: Im,
    gray: Cm
  },
  Pm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAD/ElEQVR4nO2cTUtUURjH/+fOOOooDFqhuJHATMJEaOPCQHGhlZCLoBaCX6NW0c4v4Qdo1yJCCiMLxlUQKCGF4UjhppR8vy9zbzxHbyN0r6bP8Qzo88NhmOvlOXN+5zlv915GXe3ujyCcGkfU8RCBTEQgExHIRAQyEYFMRCATEchEBDIRgUxEIBMRyEQEMhGBTEQgExHIRAQyEYFMRCATEchEBDIRgUxEIBMRyCRrq6DaXBa3ervx4P4dNDc3QSmz8aMIWPq2jJnZIj5+WoDrBWYLSMHKkwn1dTlMPnuMmzeuoVQqwfd9hGFotAzHcVBTU4P29nbMf/6KJ08nsbPnGS0jCSsZONDfh+sd7ZiamsL8/Dy2t7fheR6iyEzbKaWQy+XQ0NCAnp4ejI+PY+B2H169eW8k/lFYEXhvZBALCwuYm5vTlS0UCsYFUvZtbGygWCyit7cXd4cHz49AErax/lNnXltbG1pbW3U3NgkJpAZZXV3VsVsKBRtVsyOw5cplLC99geu62NrawtraGoIgMJqB2Wz279BQLpd1mTawNgtDz5QR/MCF7+8ddGFHV/7f88qVD0r/HUNGS6OYNDmZapj/wapAIvADXVHfd7XAZD0nFVDW0kiibawL1Jnie3qciqLk3IrCikCdocelYLS/H6BhwTbWBZK43Z1d+IGXKvCkqIMufCEEUiVdj8ZB76Cnpkk8iVxHj30XQ2A5AFzApwE/bbA/4RCoVCUDaUdyricR3yvrF00kSTOwtqeSBThh8rWPUFW2hrScSY57NlSlC8dLDsqU5MqGiT1YhQoq4R+hghaYyWRQW1t7Nl88haoIJHn0Sif5QoOKUq6+OUo3Bu2HbVOdScR1j74io5KPH+7CceaSuMhROlY8/p3rMZAqSvJI4hFnpXRhp3JY7V8D1DhKy7sQC2mSR1kY74VTx8AElF43Hjqfso2OZBw9/lFMineuJ5F4y3W6PWvK+UGl+9qUB7knwkcEMqmKwLOYKeN4NmdgSAbyEYFMrAqkmTJeZpicLSkWLWPoncqwibVlDFWMtlq0V6UXVdbUwpfkxbHpnT7bworA0sp3XbF8Pq/v3ZK4+C6aCagxSB7Frqur07GpTBtYETg9M4uHYyPo6OjQld3c3DT+dAKJa2xsRGdnp3464fmLaWOxj8KKwLfvihgdHsLExAQWFxf1Ptj03TPqtiSxq6sL27u+LtMG1n6141JTAaMjQxh/NIZ8vt54fGqM0soPvJ75gJfTM/i1/tt4GUnIz54wkXUgExHIRAQyEYFMRCATEchEBDIRgUxEIBMRyEQEMhGBTEQgExHIRAQyEYFMRCATEchEBDIRgUxEIBMRyEQEMhGBHAD8AQc9wS5/YswmAAAAAElFTkSuQmCC",
  Ks = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADPklEQVRYhe1XS2gTURS9b5JO07RQ2lUJ1tmU0qoNhayFgNJuLGq1i0Chu+5cFEREN24KgoKCGzfZCdkoLrqQiIWC0K66SsXipxBFuovQT5r5ZEbObSaZTt+kSRmsCw9Mhsx7c8+5n3ffGzprCPA7jkOXr06lJ66kM2MXR+f7+/tIiHCVOQ5RqfS7WPj0Of9+eSX38cPSihDiUMDEtdvp508Wn3bF1FSxWCTTNMm27VAFKIpCHR0dpGkaHVSM9YV7D+/ml16vRDE4M309E1Eolc1mqVAo0P7+PhmGwZEJA/BUVVXq7u6mZDJJs7OzqZnpG5m6gOTYhcmNjQ1aW1vjyb29vaELgPc7Ozu0urpK4+PjNHZpdBJjLKC/r4+2vn1hzxOJBA0MDHAawgQEwKHt7W22Dc66ACLSqtUq6bpOe3t7VCqVyLKsUCMQjUbrqQUXOL0CGCA0LZ1Ms1JLgcIv++E4VY/12lJqigiTwiaK2+tY1P+aZVo80TR1FiA3325kqkxa8/wIjglgpabBeXIcuW+O3RDAETopBOwIcVpPFADig/IBmZYRKKBdiFoKWhKASbqBOjBqkQ4S0Y44hXPfmoCqRaQTmSiYoFXQZgkI0YgAOmLTIjSNKl8oRNkKYHYhV6DYivS5LRqtHcvRa1eaAnfJQKlchC3NgLCxuRwfsAWxgEgkQp2dnUfGpAJAjisY8o1KOPIIkCLYGewHfsiLUNeb74hC/tybAjdyIHYUwbbc/DetAUwEOUQ0jYA0BUrjsTg8A7gRAHlLjQjkiIK7FwTWgASC+4ZnPrzFk4jC+YdNPoQ0K0K3Zfp7dmsImG81wu93KKBq/h7+TQH+Sg0Drj2/3f8pOCIAleouE/nyOx1gC8sQd3B4EfWSo1WiV+PCZFnjOA1A7trGHf9dsIByuVxUVVWLx+N8dgexe4oNKwIgh+1YLMa2wYkxFvD1+1Ze07T5oaEhnry7uxv61xGIe3p6aHh4mL+OwFkX8C6/nFt89CA1NzeX2tzc5H3gdJ0wGAg7RIyMjNDg4Pn1l9lXOY4OfkB0Z+F++tbNqczgucR8PN4VGrELcFQqevHHz1/5N2+Xci+ePeaP07MFEf0BphfPxyhJzcIAAAAASUVORK5CYII=",
  Sm = "_blocker_wufj5_1",
  Tm = "_popup_wufj5_11",
  $a = {
    blocker: Sm,
    popup: Tm
  },
  fn = ({
    show: t,
    setShow: n,
    children: s
  }) => {
    const [a, i] = u.useState(!1), [o, r] = As(() => ({
      from: {
        transform: "translateY(100%)"
      },
      config: {
        duration: 300,
        easing: ps.easeOutCubic
      }
    })), [l, d] = As(() => ({
      from: {
        opacity: 0
      },
      config: {
        duration: 300,
        easing: ps.easeOutCubic
      }
    }));
    return u.useEffect(() => {
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
    }, [t]), a ? Xe.createPortal(e.jsxs(ae.Fragment, {
      children: [e.jsx(hs.div, {
        className: $a.blocker,
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
      }), e.jsx(hs.div, {
        className: $a.popup,
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
  Em = () => {
    const t = _(),
      n = w.pixelInNickname,
      s = c(l => l.main.settings),
      a = c(l => l.mining.tasks[n]),
      [i, o] = u.useState(!1),
      r = 256;
    return e.jsxs(te, {
      action: () => {
        o(!0)
      },
      enableCheck: !1,
      boost: n,
      reward: s.TokensForMakePixelAvatar,
      children: [e.jsxs("div", {
        className: A.content,
        children: [!a && e.jsx("div", {
          className: A.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: Pm,
            className: A.image
          })
        }), e.jsxs("div", {
          className: A.row_main_information,
          children: [e.jsx("div", {
            children: e.jsxs("span", {
              className: A.row_title,
              children: ["Add Pixel", " ", e.jsx("img", {
                alt: "pixelimage",
                className: at.pixel_image,
                src: Ks
              }), " ", "to your Telegram name"]
            })
          }), !a && e.jsxs("div", {
            children: ["Get ", e.jsx(H, {
              className: A.not_pixel_icon
            }), " ", r]
          })]
        }), e.jsx(ie, {
          boost: n
        })]
      }), e.jsx(fn, {
        show: i,
        setShow: o,
        children: e.jsxs("div", {
          className: at.pixel_image_popup,
          children: [e.jsxs("div", {
            className: at.pixel_image_text_container,
            children: [e.jsx("span", {
              children: "Add pixel"
            }), e.jsx("img", {
              alt: "emoji",
              className: at.pixel_image,
              src: Ks
            }), " ", e.jsx("span", {
              children: "emoji to your nickname!"
            })]
          }), e.jsx("div", {
            className: at.gray,
            children: "This is step 1 of the TGE."
          }), e.jsx("div", {
            children: e.jsxs("button", {
              className: at.pixel_copy_button,
              onPointerUp: async () => {
                Gt("▪️") ? (t(z({
                  id: performance.now(),
                  text: "Copied!"
                })), o(!1), setTimeout(() => {
                  var d, m;
                  (m = (d = window.Telegram) == null ? void 0 : d.WebApp) == null || m.close()
                }, 500)) : t(z({
                  id: performance.now(),
                  text: "Can't copy!"
                }))
              },
              children: ["Copy", e.jsx("img", {
                alt: "emoji",
                className: at.pixel_image,
                src: Ks
              }), " ", "and close app"]
            })
          }), e.jsx("div", {
            children: e.jsx("button", {
              className: at.pixel_copy_button,
              onPointerUp: () => {
                t(Ne.checkTask({
                  key: n,
                  reward: r
                })), o(!1)
              },
              children: "Check"
            })
          })]
        })
      })]
    })
  },
  Bm = "/assets/adsgram-D63qdz_D.png",
  ro = () => window.plausible,
  Dm = () => window.Adsgram.init({
    blockId: Ye.app.adsgramBlockId,
    debug: Ye.isDev,
    debugBannerType: "FullscreenMedia"
  }),
  km = 31 * 1e3,
  Rm = U(0, 100),
  Mm = Rm <= 100;
let ei = !1;
const ti = () => {
    const t = localStorage.getItem("adsgramNextView") || Date.now();
    return Math.max(Math.ceil((t - Date.now()) / 1e3), 0)
  },
  Um = () => {
    c(be);
    const t = _(),
      n = Dm(),
      s = c(dl),
      a = w.adsgram,
      i = w.watchAd;
    c(b => b.mining.tasks[a]);
    const o = c(b => b.mining.tasks[i]),
      r = c(b => b.user.country),
      l = ro(),
      [d, m] = u.useState(ti()),
      [h, g] = u.useState(ei),
      I = 16;
    return u.useEffect(() => {
      const b = setInterval(() => {
        m(ti())
      }, 1e3);
      return () => {
        clearInterval(b)
      }
    }, []), !Mm || h || s !== "mobile" || o === !1 ? null : e.jsxs(te, {
      enableCheck: !1,
      action: () => {
        d === 0 && n.show().then(b => {
          t(Pt(I)), t(z({
            id: performance.now(),
            text: "16 PX earned!",
            icon: ""
          })), localStorage.setItem("adsgramNextView", `${Date.now()+km}`), l("task_adsgram1", {
            props: {
              country: r,
              result: !0
            }
          })
        }).catch(b => {
          t(z({
            id: performance.now(),
            text: "Something went wrong."
          })), g(!0), ei = !0, l("task_adsgram1", {
            props: {
              country: r,
              result: !1
            }
          })
        })
      },
      boost: a,
      reward: I,
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
        className: A.content,
        children: [e.jsx("div", {
          className: A.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: Bm,
            className: A.image
          })
        }), e.jsxs("div", {
          className: A.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: A.row_title,
              children: "View ADS and get PX!"
            })
          }), d === 0 && e.jsxs("div", {
            children: ["Get ", e.jsx(H, {
              className: A.not_pixel_icon
            }), " ", I, " for each AD"]
          }), d !== 0 && e.jsx("div", {
            children: `Wait ${d} sec`
          })]
        }), e.jsx(ie, {
          boost: a
        })]
      })]
    })
  },
  Fm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAABZElEQVR4nO3cza2CQBRA4cHYiHtLsBCKsAGDS4kNWARd4soECUTkDNxZnG/3Fs57nNzBv8mrTudLn7TawXSMASEDQgaEDAgZEDIgZEDIgJABIQNCBoQMCBkQMiBkQMiAkAEhA0IGhAwIHSN/+fN+zbbW7fHKttY/wiYwZ7wt1lsq5Hvh8cXWdb16ra7rvn7eexLD74EkXo7HU6H3wLmLb5pm9jFt206uM57EvfgsDIVO4JypKSuVEwgZEDIgZEDIgJABIQNCBoSKeyHd978/26iqape/ZQknEDIgVOR74Y/hVl2ytSM4gZABoaK3cKnbdsgJhAwIFbeFS3qRvIQTCBkQMiBkQMiAkAEhA0IGhEID5joQFHWwKJUwgfTiI+OlqAOWaaMTpRHHfMMmMPfFRp2R9l8/QT4LQwaEDAgZEDIgZEDIgJABIQNCBoQMCBkQMiBkQMiAkAEhA0IGhAwIGZBIKb0B7eY0Ujl2RcIAAAAASUVORK5CYII=",
  Om = () => {
    const t = _(),
      n = c(Ct),
      s = w.addToHomeScreen,
      a = c(i => i.mining.tasks[s]);
    return n ? e.jsx(te, {
      action: () => {
        window.Telegram.WebApp.checkHomeScreenStatus(i => {
          i === {
            unsupported: "unsupported",
            unknown: "unknown",
            added: "added",
            missed: "missed"
          }.added ? t(z({
            id: performance.now(),
            text: i
          })) : window.Telegram.WebApp.addToHomeScreen()
        })
      },
      enableCheck: !1,
      boost: s,
      reward: 128,
      children: e.jsxs("div", {
        className: A.content,
        children: [!a && e.jsx("div", {
          className: A.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: Fm,
            className: A.image
          })
        }), e.jsxs("div", {
          className: A.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: A.row_title,
              children: "Add Not Pixel to home screen"
            })
          }), !a && e.jsxs("div", {
            children: ["Get ", e.jsx(H, {
              className: A.not_pixel_icon
            }), " ", 128]
          })]
        }), e.jsx(ie, {
          boost: s
        })]
      })
    }) : null
  },
  Qm = "data:image/gif;base64,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",
  zm = () => {
    const t = _(),
      n = c(Ct),
      s = w.addToHomeScreen,
      a = 64,
      i = c(r => r.mining.tasks[s]),
      o = c(r => r.user.user);
    return !o || !o.isPremium || !n ? null : e.jsx(te, {
      action: () => {
        window.Telegram.WebApp.requestEmojiStatusAccess(r => {
          r ? window.Telegram.WebApp.setEmojiStatus("5447461825023072674", {}, l => {
            t(z(l ? {
              id: performance.now(),
              text: "Emoji set"
            } : {
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
        className: A.content,
        children: [!i && e.jsx("div", {
          className: A.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: Qm,
            className: A.image
          })
        }), e.jsxs("div", {
          className: A.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: A.row_title,
              children: "Add emoji"
            })
          }), !i && e.jsxs("div", {
            children: ["Get ", e.jsx(H, {
              className: A.not_pixel_icon
            }), " ", a]
          })]
        }), e.jsx(ie, {
          boost: s
        })]
      })
    })
  },
  qm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAACm0lEQVR4nO2c20rDQBCGN0UfIApeWaHe6r0gPpTiAX0CBQV9KsEH8FbBeiVoH0CwMtXBcZukbX6ys8r/QWiSzWm/zmZnl9JisL03DqQ1ParDoEAQCgShQBAKBKFAEAoEoUAQCgShQBAKBKFAEAoEoUAQCgShQBAKBKFAEAoEoUAQCgShQBAKBFnq+gZ397dd36KRna3dTq/fuUBl+e011a0mvK+sJrlPMoGWqsqJYLtfhcs+K99ux9dJ/SUFz3egVtZWumrfPNfRxQMXgXFl6yqv0aaRFm/rvlTNtQqXJoxQluXX2foZQhiNRm7Pk5XAONLWxh8/or4/x+PpH5MVRRFeip5LM3YVKBUuTST9oiwrZTVdywNXgSLv/PJ6sn56tO/5KK3hSASEAkGy7oWlc7Dk2Nyzj0BJUTzTlFmwCYO4CpTIOjs+mKxfXN1MlUsao2lO07H2uNQwAkHcOpFFIsYruubBtRfWkYb2ttJEnx6GoT9YnzomV7JIY6wklRmLzBWXd2BZMc5VcblHXExWnUicOP8FshqJxNE3fHyuPG5js5/oiWaTlUAbgW0kyash9agleRNuSkkkAjUKdV0XGQfb7WDGxrouS+qUJ6lArZytuEUiUJaqjkRSnLp3ZN31UuDWidjhmIpREfFQzYqTMtmuk5Y6CpMJtLPPishQWVKmY12ZrtIyG5Hyaaey9HhPknciKsoKi8utNBFmI1Cjz56r6x5NOZnA+IXfJnrskK9J1qTs5LDlky6GWxpjBcQybRTWzUrnQhZ54DwRGU882HM96fxvT/77z9v4vzEgnJEGoUAQCgShQBAKBKFAEAoEoUAQCgShQBAKBKFAEAoEoUAQCgShQBAKBKFAEAoEoUAQCgShQBAKRAghfAI/bQOb3RwWlAAAAABJRU5ErkJggg==",
  Lm = () => {
    const t = w.unitsWallet;
    return c(n => n.mining.tasks[t]), c(n => n.user.country), null
  },
  Hm = U(0, 100),
  Gm = Hm <= 10,
  Vm = () => {
    const t = w.skinlabTask,
      n = c(s => s.mining.tasks[t]);
    return c(s => s.user.country), !Gm && !n && !Ye.isDev, null
  },
  Jm = () => {
    const s = w["taskTypeCampaign3_74388"],
      a = c(r => r.user.country),
      i = c(r => r.mining.tasks[s]),
      o = 1024;
    return a !== "RU" && a !== "ru" ? null : e.jsx(te, {
      action: () => {
        ue("https://t.me/community_bot/join?startapp=id_74388")
      },
      boost: s,
      reward: o,
      children: e.jsxs("div", {
        className: A.content,
        children: [!i && e.jsx("div", {
          className: A.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: qm,
            className: A.image
          })
        }), e.jsxs("div", {
          className: A.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: A.row_title,
              children: "Surf the blockchain through exceptional creators"
            })
          }), !i && e.jsxs("div", {
            children: ["Get ", e.jsx(H, {
              className: A.not_pixel_icon
            }), " ", o]
          })]
        }), e.jsx(ie, {
          boost: s
        })]
      })
    })
  },
  Ym = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAACyklEQVR4nO2cT0iTYRzH361ZyRRqFcxDgoaQFV2SoCVERBBdFC/ZIejQxUs3L96Vrtmx6DwjJCQqpA4NZuHAP4FDREYWZixd6DbMZZvwe/YeLDef9X3/Hb6fy3ds75732WdfePb+Yb6Wc50lg/w3fqrDoEAQCgShQBAKBKFAEAoEoUAQCgShQBAKBKFAEAoEoUAQCgShQBAKBKFAEAoEoUAQCgShQBAKBAl4dWL1wSOSkd4ByXdP+tULPp+b0/oHNhDEM3cmhJpOSV7ve1R1u1KxKDk62CO5/bvgwOwqwwaCuNbA5rOdkpduDVgy3uuH9yQ31r5ZMp4ubCCIYw08f+2OZPuV207szvgQHZT8kozbuh82EMT2Bl7sui/ZcuGG/Z9mDz4+fyBPLn2K2TI+Gwhi+5HI7PhTyeDRsGQuo1bJ1o6blu5nI/1ZMjU1LnkgcFDSruaZsIEgtjdwazMnmf3xVbLxxEnJdGpGsrCZlTzefEbycOMxrXFTiVeS+fX0rufN5i1OvrToE1SHDQRx/Ejk6t0hre2Kf7Ylw20dkrNvHkv6A3Va75uPj4Iz1YMNBHG8gYfqGyQjmsfAKwsJyf2aZ5KMPcMmWCNsIIjjZ6TNVTmXWZFsCDVZMu7S9FtLxqkVNhDEtWsiiTF15nnfVVnzGkg+m7FiWjXDBoK4flVuYkQ1sOKqXKr+IyEZGyk/cudqHRsI4noDzVU5n/kuGQyFd71eqtDA5TnzTLO714nZQBDP3JkwOTYsqXusvL62bPOM9GADQTx3b0w8qhp4uXxPjP+v34HJ91H1wOeN754NBPFcAwu/yqvyT3WmuWioVXh1cUpt4JHmmbCBIJ7/35jTkW7J+YkXrs9lL9hAEP5zEQgbCEKBIBQIQoEgFAhCgSAUCEKBIBQIQoEgFAhCgSAUCEKBIBQIQoEgFAhCgSAUCEKBIBSIYBjGDiltmN/9syZ+AAAAAElFTkSuQmCC",
  Xm = () => {
    const t = c(be),
      n = w.spendCrypto,
      s = c(i => i.mining.tasks[n]),
      a = 512;
    return !t || t.id !== 395492139 ? null : e.jsx(te, {
      boost: n,
      reward: a,
      children: e.jsxs("div", {
        className: A.content,
        children: [!s && e.jsx("div", {
          className: A.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: Ym,
            className: A.image
          })
        }), e.jsxs("div", {
          className: A.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: A.row_title,
              children: "Spend Crypto"
            })
          }), !s && e.jsxs("div", {
            children: ["Get ", e.jsx(H, {
              className: A.not_pixel_icon
            }), " ", a]
          })]
        }), e.jsx(ie, {
          boost: n
        })]
      })
    })
  },
  Wm = "data:image/png;base64,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",
  Km = () => {
    const t = w.frogApp,
      n = c(i => i.mining.tasks[t]),
      s = 512,
      a = ro();
    return e.jsx(te, {
      boost: t,
      action: () => {
        ue("https://t.me/frogfarmbot/frogfarm?startapp=291096007"), a("task_frogApp")
      },
      reward: s,
      children: e.jsxs("div", {
        className: A.content,
        children: [!n && e.jsx("div", {
          className: A.image_container,
          children: e.jsx("img", {
            alt: "image",
            src: Wm,
            className: A.image
          })
        }), e.jsxs("div", {
          className: A.row_main_information,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: A.row_title,
              children: "Join the Frog team now!"
            })
          }), !n && e.jsxs("div", {
            children: ["Get ", e.jsx(H, {
              className: A.not_pixel_icon
            }), " ", s]
          })]
        }), e.jsx(ie, {
          boost: t
        })]
      })
    })
  },
  Zm = () => e.jsxs("div", {
    className: A.info_container,
    children: [e.jsx(Um, {}), e.jsx(Km, {}), e.jsx(Vm, {}), e.jsx(Lm, {}), e.jsx(Jm, {}), e.jsx(nm, {}), e.jsx(Ws, {
      text: "Quick start"
    }), e.jsx(am, {}), e.jsx(om, {}), e.jsx(cm, {}), e.jsx(Ws, {
      text: "Special"
    }), e.jsx(gm, {}), e.jsx(Om, {}), e.jsx(zm, {}), e.jsx(Em, {}), e.jsx(wm, {}), e.jsx(ym, {}), e.jsx(Zu, {}), e.jsx(lm, {}), e.jsx(dm, {}), e.jsx(um, {}), e.jsx(pm, {}), e.jsx(Xm, {}), e.jsx(Ws, {
      text: "Browser"
    }), e.jsx($u, {}), e.jsx(em, {}), e.jsx(_m, {}), e.jsx(fm, {}), e.jsx(Am, {}), e.jsx("div", {
      style: {
        height: 30
      }
    })]
  }),
  $m = () => {
    const t = _(),
      [n, s] = u.useState(!1);
    return u.useEffect(() => {
      function a(i) {
        i.ctrlKey && i.altKey && i.keyCode === 67 && (async () => {
          try {
            await Gt(window.Telegram.WebApp.initData), await t(z({
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
  eA = () => {
    const t = _(),
      n = c(a => a.user.pixelsForSaleOffset),
      s = c(a => a.user.pixelsForSaleLimit);
    return u.useEffect(() => {
      t(Nt.getPixelsForSale({
        offset: n,
        limit: s
      }))
    }, [n, s, t]), null
  },
  tA = "_container_7jsmf_1",
  nA = "_row_7jsmf_6",
  sA = "_cell1_7jsmf_26",
  aA = "_cell2_7jsmf_30",
  iA = "_cell3_7jsmf_36",
  oA = "_icon_arrow_7jsmf_40",
  rA = "_header_7jsmf_47",
  cA = "_data_7jsmf_57",
  lA = "_title_7jsmf_63",
  dA = "_pixelColor_7jsmf_68",
  uA = "_pixelCoords_7jsmf_77",
  mA = "_pixelPriceValue_7jsmf_83",
  AA = "_pixelPriceDescription_7jsmf_91",
  pA = "_pixelState_7jsmf_95",
  hA = "_pixelDate_7jsmf_100",
  gA = "_paginationContainer_7jsmf_107",
  _A = "_loadMoreButton_7jsmf_114",
  fA = "_noPixelsContainer_7jsmf_136",
  xA = "_noPixelsText_7jsmf_143",
  yA = "_pixelsForSaleCountText_7jsmf_149",
  vA = "_skeleton_container_7jsmf_153",
  wA = "_skeleton_header_7jsmf_157",
  jA = "_skeleton_row_7jsmf_166",
  ee = {
    container: tA,
    row: nA,
    cell1: sA,
    cell2: aA,
    cell3: iA,
    icon_arrow: oA,
    header: rA,
    data: cA,
    title: lA,
    pixelColor: dA,
    pixelCoords: uA,
    pixelPriceValue: mA,
    pixelPriceDescription: AA,
    pixelState: pA,
    pixelDate: hA,
    paginationContainer: gA,
    loadMoreButton: _A,
    noPixelsContainer: fA,
    noPixelsText: xA,
    pixelsForSaleCountText: yA,
    skeleton_container: vA,
    skeleton_header: wA,
    skeleton_row: jA
  },
  Ba = gs.getSelectors(t => t.user.pixelsForSale);
_s.getSelectors(t => t.user.pixelsSold);
const co = fs.getSelectors(t => t.daily.list);
Ta.getSelectors(t => t.reward.list);
const bA = sn.getSelectors(t => t.tournament.approvedTemplatesList),
  NA = () => {
    const t = c(s => s.user.pixelsForSaleFetchStatus);
    return c(Ba.selectTotal) === 0 && t === p.fulfilled ? e.jsx("div", {
      className: ee.noPixelsContainer,
      children: e.jsx("span", {
        className: ee.noPixelsText,
        children: "You don't have Pixels..."
      })
    }) : null
  },
  lo = t => e.jsx("div", {
    className: `${ee.cell1}`,
    children: t.children
  }),
  uo = t => e.jsx("div", {
    className: `${ee.cell2}`,
    children: t.children
  }),
  mo = t => e.jsx("div", {
    className: `${ee.cell3}`,
    children: t.children
  }),
  IA = () => e.jsxs("div", {
    className: `${ee.row} ${ee.header}`,
    children: [e.jsx(lo, {
      children: e.jsx("span", {
        className: ee.title,
        children: "Pixel"
      })
    }), e.jsx(uo, {
      children: e.jsx("span", {
        className: ee.title,
        children: "Value"
      })
    }), e.jsx(mo, {
      children: e.jsx("span", {
        className: ee.title,
        children: "Status"
      })
    })]
  }),
  CA = t => e.jsxs("div", {
    className: ee.container,
    children: [e.jsx(IA, {}), e.jsx("div", {
      className: ee.data,
      children: t.children
    })]
  }),
  PA = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  De = t => {
    const n = new Date().getFullYear(),
      s = t.getFullYear(),
      a = s === n ? "" : s,
      i = t.getMonth(),
      o = t.getDate(),
      r = t.getHours(),
      l = t.getMinutes();
    return `${o<10?0:""}${o} ${[PA[i]]} ${a} at ${r<10?0:""}${r}:${l<10?0:""}${l}`
  },
  SA = ({
    date: t
  }) => e.jsx("div", {
    className: ee.pixelDate,
    children: De(new Date(t))
  }),
  TA = ({
    coords: t
  }) => e.jsxs("div", {
    className: ee.pixelCoords,
    children: [t.x, ", ", t.y]
  }),
  EA = ({
    color: t
  }) => e.jsx("div", {
    className: ee.pixelColor,
    style: {
      backgroundColor: t
    }
  }),
  BA = "_main_canvas_1cgxj_1",
  DA = {
    main_canvas: BA
  },
  xs = t => ({
    x: (t - 1) % T.width,
    y: Math.floor((t - 1) / T.height)
  }),
  $e = ({
    x: t,
    y: n
  }) => t + n * T.width + 1,
  ys = ({
    x: t,
    y: n,
    width: s,
    blockSize: a = 4
  }) => (t + n * s) * a,
  Zs = ({
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
  wt = t => {
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
  dt = t => !(t.x < 0 || t.y < 0 || t.x > T.width - 1 || t.y > T.height - 1),
  Vn = Q("canvas/repaint", async ({
    pixelId: t,
    newColor: n
  }) => (await X.startRepaint({
    pixelId: t,
    newColor: n
  })).data);
let Qt = null;
const pa = Q("canvas/getPixelInfo", async ({
    id: t
  }) => (Qt !== null && (Qt.abort(), Qt = null), Qt = new AbortController, (await X.getPixelInfo({
    id: t,
    signal: Qt.signal
  })).data)),
  Jn = Q("canvas/getPrices", async () => (await X.getPrices()).data),
  Yn = Q("canvas/getPriceMask", async ({
    price: t
  }) => {
    const n = await X.getPriceMask({
        price: t
      }),
      s = new Uint8Array(n.data);
    return v.mask.draw({
      arr: s
    }), {
      result: !0
    }
  }),
  kA = {
    coords: null,
    stats: null,
    pixelInfo: null,
    getPixelInfoFetchStatus: p.idle,
    repaintFetchStatus: p.idle,
    prices: [],
    selectedPrice: null,
    priceMaskFetching: !1
  },
  Ao = he({
    name: "canvas",
    initialState: kA,
    reducers: {
      setCoords: (t, n) => {
        dt(n.payload) && (t.coords = n.payload)
      },
      setSelectedPrice: (t, n) => {
        t.selectedPrice = n.payload
      },
      setPriceMask: (t, n) => {
        t.priceMask = n.payload
      },
      updatePixelInfo: (t, n) => {
        t.pixelInfo = {
          ...t.pixelInfo,
          ...n.payload.changes
        }
      },
      addPaintCoords: (t, n) => {
        dt(n.payload) && (t.stats = $e(n.payload) ^ 3201282)
      }
    },
    extraReducers: t => {
      t.addCase(pa.pending, n => {
        n.getPixelInfoFetchStatus = p.pending
      }).addCase(pa.fulfilled, (n, s) => {
        n.pixelInfo = s.payload, n.getPixelInfoFetchStatus = p.fulfilled, Qt = null
      }).addCase(Jn.pending, n => {}).addCase(Jn.fulfilled, (n, s) => {
        n.prices = s.payload.prices
      }).addCase(Jn.rejected, n => {}).addCase(Yn.pending, n => {
        n.priceMaskFetching = !0
      }).addCase(Yn.fulfilled, n => {
        n.priceMaskFetching = !1
      }).addCase(Yn.rejected, n => {
        n.priceMaskFetching = !1
      }).addCase(Vn.pending, n => {
        n.repaintFetchStatus = p.pending
      }).addCase(Vn.fulfilled, n => {
        n.repaintFetchStatus = p.fulfilled
      }).addCase(Vn.rejected, n => {
        n.repaintFetchStatus = p.rejected
      })
    }
  }),
  {
    setCoords: It,
    addPaintCoords: RA,
    setPriceMask: Rk,
    setSelectedPrice: MA,
    updatePixelInfo: Mk
  } = Ao.actions,
  UA = Ao.reducer,
  Bs = {
    getPixelInfo: pa,
    getPriceMask: Yn,
    getPrices: Jn,
    repaint: Vn
  };
class FA {
  constructor({
    viewport: n
  }) {
    this.viewport = n, this.pixiViewport = n.viewport, this.pixel = null, this.line = null, this.hexColor = "#42a6ff", this.color = `0x${this.hexColor.replaceAll("#","")}`
  }
  draw({
    x: n,
    y: s
  }) {
    dt({
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
    this.line = new PIXI.Graphics, this.line.setTransform(.5, .5), this.line.lineStyle(.2, this.color), this.line.moveTo(-.5, s).lineTo(n - .5, s), this.line.moveTo(n, -.5).lineTo(n, s - .5), this.line.moveTo(T.width - .5, s).lineTo(n + .5, s), this.line.moveTo(n, T.width - .5).lineTo(n, s + .5), this.line.zIndex = 10, this.pixiViewport.addChild(this.line)
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
const Se = {
    idle: "idle",
    start: "start",
    finish: "finish"
  },
  OA = {
    command: Se.idle,
    counter: 0
  },
  po = he({
    name: "progress",
    initialState: OA,
    reducers: {
      setProgressCommand: (t, n) => {
        t.command = n.payload.command, t.counter = t.counter + 1
      }
    }
  }),
  {
    setProgressCommand: Ze
  } = po.actions,
  QA = po.reducer,
  zA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAElBMVEVHcEz/////96f/uQD/WQDnERFRxRXOAAAAAXRSTlMAQObYZgAAAKRJREFUeNrt1MENgzAQRNEVUEBqmKUA5DF3C7sApJj+W4kQKcCjHLP//m6jsSiKoiiKon9uKjpZbYZIPEEkM6ESQCW8hQto2r7ExwnwkH2YzHhikUk+h8mSHuLCBBIO3K3j5O0HEgAfJz1XOAGOk0Y2eKVJJB2eFdKvnnbShFpl3clTIWRtVSJGdmYWhdR8ceubQuZiLCa1mDWTe8UzR1EURT/0AVQMHG7ZD4ErAAAAAElFTkSuQmCC",
  qA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAD1BMVEVHcEz/96f/uQD/WQDnERHKPBirAAAAAXRSTlMAQObYZgAAANhJREFUeNrt1cFthTAQhGHyoIFZN/A8SwHEQwGI0H9N0dNKOa+V634Hbr/QyLK8lFJKKaXMOucTXasvA1OJBoCpJArLB18Ink9eUZhL2WSNhPnE1KMxnckENhB0ZBMQwa/0EkNouWKgoyFYLukwtIGQTcCOHklu/jdgf2ve2aNvAPrE/q3DAbDn92+D6jAYCXBJEUkXGkxK3xVyQELLJpvORwPcH2rJWSXSSZ3UNZV4b4ok40Xuuru5jmyykvtzk++fSDLIY7k/nzz651e+TBhHPTGllFL+5xfUYCDCcZqQBQAAAABJRU5ErkJggg==",
  LA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAD1BMVEVHcEz/96f/uQD/WQDnERHKPBirAAAAAXRSTlMAQObYZgAAAQRJREFUeNrt1sFxxCAMheEXewtAJAUY4QIwcgGJof+aQtiZ3b2tdMlJ3/0fATrYcM4555zZBjMCsNg62oCfMDLSJwQcAUiWZPhMRNGUTAHf1mRr0FkeSS3Q+XgkOVGARqIXm/YaT6YJU9Te4ynAPCbAPCaaljIlxZM1JusLrJUG02ZuNVmKaeFIQ6SJAU1yH5NUM6aLX5MAhcYH/eGkTiRXGiIPuoMtOQsP6V7pEj7rHDCbrEqqiJwXTcwFbzU5s9S5ljhPp0n6JQdRoigiqIS3zo51H8kXZ5EMCFTWkexNWoZeJZLe0wa9hSITZRisXHrvMNlxk2L+9LUCq1vxnwbnnPtnvyvQK1qRfQjwAAAAAElFTkSuQmCC",
  HA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAD1BMVEVHcEz/96f/uQD/WQDnERHKPBirAAAAAXRSTlMAQObYZgAAAYJJREFUeNrt1tGN2zAQhOGJ5QIyvBQg7roA3a4KcEL2X1O0MpDY8IEikbdA3/uPEWXCEE6n0+n0n7lg2LcZm2kZSdK+NY8knAH8umGTv3cmMWMaBXsTzri640J2JheGpEZG3IVPgDuOTfwrofQ/2MOHrOiQX5JlcITJMzk0sktom5wvjn4ahrEk8ytz+6p85fhlDZ4+N5KBmTQPz2SyEV3d3kcOXlux/DbSLGJG3pJWEYpkvvo8KHCVzMRnFkWTCPPzsZPajKNEXs6duWAsScd/S1cR5cOeSkdi4nwwIWPyA22T6ZoZkknIVLSVLZG90RpNQJu7riYb9VqMHcnVXbzIZitEjREtR4l5qLW6iBtJUbRM7iWKzLS6iKlnMjVnivvq7kby5qam7kJqO1lrUf8k+cN3CzwTDV7vgJU/yWoLMBmOTLefkcRDFkUfi5Vb3QpZ0MnI5LWWrOh1IVVIKrpNIm4ijpFEUWu9Y4Dc4+5gxA1AGUvu+xXFsHJ+zZ5Op3/zG2ZWUn+tdqomAAAAAElFTkSuQmCC",
  GA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAD1BMVEVHcEz/96f/uQD/WQDnERHKPBirAAAAAXRSTlMAQObYZgAAAnBJREFUeNrtl12y2jAMhV2SBVSiC4iPuoDEJwu4c8P+11TLLoROr0P80ocO3/AzAX+RLNlmCG/evHnzD7lM/Yr1K7E7zLBob36DyOSKdSkehgznEQ8zWOpTNFyAORSSnUgsExIw1cs0nVMmAOZlu8h1PqcoMuEime8nWim/AeSsEuUPpn6F7FdwNPHZX7KhortnrxXJRMkKqqYpfNOvBWDeayyI6opjITaUZDJlA0WBAYasOhFTIy3WwTWKJRAgy4Uctl00VoUkAIqjL9oOf4KZBNqLbkZxFFF5B3uQgzBaY3xszJSq2dzuS6qKuhFGtwD/oK2EJd6VNV9tYWMimSQcKFqmDjIURjLWuusAfJEWzEhAFFyfe6WSSV8pAVEWgYrCjcLt05X2HhhcqTv4AaTQLBsFpcSY/1IUc6vIgCu2zw8i/oitdiaJboBPzYUjy7XVS0RRGLnfQ1SjRuF8sO8V3L/f6pKTg/4nZKJcHwoEmaOFCUf2ESMTnCkcR5E9SjACRq5t5eJGfDpTSwVJtpVPeM2eGi2igB1FYVFE62/rYENRcKCMrImJqB+DbhflaFsSGVe83YNI1uG0lY3poSguHg2Fn02FRUFVRONDsQOFBkcUPl4EiMVqz56rJdRRkoFT3j+as+e60BWRopSeECI6N2fP23ZlqklVhVw3tI/YbNxuC0lXoiu1i+OGlpKiiN2UTCK4K5/hEL8fCKvbxg2sMbxiy4kQd4zpRzjDszJ8nFK2KFozI8M5RlcsubKGk4iokVGuc+hQSCZYj2K8jQTPK1GZC0V2KLA19CprXaUe6yRWho6WQi/L9f3X7M1/zC/mbn/kN4xkqQAAAABJRU5ErkJggg==",
  VA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAElBMVEVHcEz/96f/uQD/WQDnERFAMiwoKjrVAAAAAXRSTlMAQObYZgAAArpJREFUeNrt10F2mzAQBmDV4H1H5ADMrx4Aa9Q9CXif9xLuf5VqJHCTgGJot/4XXvjxSYw0kp/NI4888khK1R0n4V9nkQOkfm4T6Q8QtiZmPEKIWiXmQIh0Gu+OEJ2mApZZpd9DrDkB8/6McldUFGM80JqU07iPtAC0GBgms49YQIthItpBTjQHYNpJeDFMGnucNNIdJr4td0reMiayFvqZib1PUuGIBqAU197p64rIwokHFmK77aYR6W8kCo3HhTgZetrqgCHk/kUWv4dZqWH6uVnIeNs+dCLX6T0ZJENt6WRpGHCmCtcwjYsp7+a8pIAEc56GaXodlldry72VyaDkGokZrpN4Jivm22nYvl8jiTFmmsKbB9CWiHAiEse/keF7UtkbMeeZxIUDWepKhFhrCUpyppgB4intnHyBtYRTXp/fOr7mnMgEsiCytXwlRi7UkOWFZKTEsyXN0+r+rH0kBLg81s28vszk57rPRrZMbN2nsaYpHblC09RxOLDFalUSsei2VowtWTjzMefX8xuDCGzXYOl8+UKmd8TQpTGbWROtxmqR0hVITFgR6JKp2EvOrwCKJ6ZS0m8M1JYvPQAuHCKVEuk3vi2jRLoVcSKhIGoAdkVOgIgUSOUBWhXjAVecZfAA26Zfl1Iky0W8EnBdoRSRTLrPlWgKpMqEqflcieZXkXifUXf7zmbiCtWLvAgAAtwiCOCktomIDI0HiMnOZl4PAvoCCeNFJD3DeQ4LOBEQ2e36oxiHRsRHkpb1okQkDChd/jpYeHYirI+CZfnpMPVQ7MvRw3kIciiTF/Ntaum103LyZIHNvWSyxIl/uk9qT/SBVL25nxclJr+ZiNmTH/k2yyTsJU605ZiazuwjOrgSD7eTnPJhrmuB7CWQfm663cSpOEbC3wOk+Ehq583RXJrHX9NH/jt/AL3WmbEKtmBpAAAAAElFTkSuQmCC",
  JA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAFVBMVEVHcEz/uQD/WQDnERFAMiyACgUZDg0R26nsAAAAAXRSTlMAQObYZgAAAthJREFUeNrt18GO2jAQBuBZzHJmTMU5Hrecsx5xb3etnNGi3AFF8/6PUNsJywJ2Sa4VvxBSJH+ZxB6TAM8888x/mFk1nVjoQ9OrUD2WqPNIHk/gTGAC0dMnAKup5AVvyjj7mMQy6mvGlKtGEA3gqLpM4mMSyxBZGJ23QJaKiKBPNY7oWSB17IUZLscRpJAKZohYJpflNthHE+FI0g/cnFD3dMS9kBaDKGIGwvyYrCVU6JrjmVB+GNWXFlt3Xuben8TgRgxaGnZesY1ecO19E0gjRy1yRO2yfab42xz/SCTktOn8EdHmN5y6IYtIGvH+DyIaLLVW6l+D+qf3v6GLJHy9y0ljiQzLN5BYRgIREURdIskEFAYfAOJ1pUJiSqs5i0AMUSoCEkQk4XPUUIhB3EgnIpEsAGAg/mhrKJYR8U1PDhBNlwgRFKJcJF7CwAi6BhYSD/wpSxRZgDcTSCwjANEcIF1mA2aVM1QFojfSXciigbkECWCWEOOouioTjizzRvxvkQOkeJgfgoSODGIFiq4JMCC+4WYYfyapmm9OGALqptFUbQJZfydNJMlIIsD3k0yoFwJfOQxVwIspNA3h7QokL4EckWyOOLzpJjn0RORE+T5TVNgYIi8rrPMtY5aQD64Y8oSq0g/oCiYRRcUdAy5PHNVQCmVJ9xHJlCoL74ksTLmXzntm3hXIZ4FY5rpAOHfR3vv3YpVXtpAl3paIypbvUhnIZ58l80hsgTDXKjvJ3tGuROJXxnxQYTFfs0RR/0Av3D1v67s3lhkZRE2/SqTdc8h1EzG7gGyBtG17RyxzG4zO30sbc092AK0jgDK6JspuK/hn2vbm4Tuzn0vIJNOcyg4HbHaPyd4sARxRRI7rLTzOq0FQlUorbke+kyNqW6enlLK8G0viydkhMsBIkk7OTDSWGB0F7PbOjiVkt+emG02CmEjs7msDBTwtn1xNJQrr51/gZ67yF2l/ou0eQckjAAAAAElFTkSuQmCC",
  YA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAElBMVEVHcEz/WQDnERFAMiyACgUZDg3ZC39iAAAAAXRSTlMAQObYZgAAA7xJREFUeNrtmE2TozYQhhUDd0vZ3FEDdw0Nd1bGdy+y/v9fSbfEEAKiAqmtrdqqeS+iGD3qD3X32BZf+tKXtpL/AynFKf1xXx7hLKL+QcRJ5E8jZqE4qWpBzGlEXEZQXFYmEtJKXFSu75ctd+VlBM9u9MvTfyZPS774AvvTWbxJKcsZcf25miFEEeJQOMTXWUTOHiFqJbJDDBbHomdalogd0Rm+YpEfIoKReyArbIl2hByXwGLl2xBCwg5giEi2aTk6a7mD74yoR1geaGvhI2JSdRcRkCSowlJ770y6Xm+AyzNoMgIPAF6cQ3PQPrdPpDAWWDgvTof8pfR5mMMOSLWPCzrJKpN9FBH2g89/eOwsLTgF5J42MyOtQksEydkad0gCRC15v1Z9oPAjIN8O71CVjDSIvZSNb6VCbAOihjSiQ4lYYESrxutYMSwYDoywmg6eiB6g79gh18VrKo+KnjdRBISQLDvk3xA07F0qPxHVYx/idnw8eD9fkyj6jQEkLiLkliYOnQ1bI/P0wuGLfV8YTYgMoki+c9jouoA4XVmoMSJ6hdyqBWneHC/PihHGx8TP9tHKkh3jVlgEJtNMKKhazUmI/Y5TDE9LFUZgXu6TDPBoQcr5sCJevmcwNQKdJYKQbpVTF5Ef6QYo+hZYiJ0dl7ehnStCUozDd+yQdf7zGOCULk3EnjtkKF7r+CLS6STiuEzGetjMhODYpBl87WJBYrZvc9BSjc+JSdiP9IwRj2bDkJ4UpaxHTJjpPff+1pCtn76FcXygEVt574V3JhEkJ7NOISKGkkLQAiAhJ1UQ0edQI75OfyZw2NNmApOEVO6VKKUZPECwlYprNgGm/HIA4HSYwIboc3ECTPM4/SzdW1xv6QMyni0/IjLSouIkCVY/GExZ0bJqw5a8lqQYHr/Aj4OxrLnOAWCF3Obh1iaR+OeKe8ZPwKdn7FBQ9U6OWBN8+MvZOvwn41gWpPF22MdujAyI93xrHdQjbZKtnN8iHiLNJEsXxysjODvWqj0icqNn5M7N1gWk8RDCr7QsE8gQwkfUJSMuzNLeA7cypJFxyEHK0BUFek+948yNE8h6WkghmbEANQ/4wnvXM0IGlk8Bw94vQnjWh0r3c6VrCty/7ZjFKYJbZH2MQ1M4IaxUjSdliAa7PUIzZFVvL4+EADSIZBFRYDeIHfLvV4zkFDgj846Ts8IT8lrOPKWQ7iBCTn0fMau3hPxMobkI5AOai99COJmXkXWY4ylmHFdOjlc9ywm/ql+BMPMb/ajxN8we1xzBMA0/AAAAAElFTkSuQmCC",
  XA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkAgMAAAANjH3HAAAADFBMVEVHcEznERFAMiyACgVxtGBQAAAAAXRSTlMAQObYZgAAAodJREFUeNrt1TFqG0EUBuA/GgTGeJnG6d0EzDZxs53N6ggq8phmQVdYkjYgBR8gV1ATMGlyhQGfYVATcoZp1I15mZ0dzay16ygkkCo/KoQ+3lvtm5ld/M/vpvoDqTGRJXxuJ0A08Lmekh9BNhO03eKQy5MyjntZbjDMDKcz+3xC/kXOMEyxQs58KBXpkbxBl9fUZpEI+aJ7WaJoosTxfvNyvq2oiR2zyG0nc3qXO25SbahR2lBsd4GU2dZ42dMKOxzH/6qZ1oLwLOcPeKK1ZmZB+kiumBm1Fz4W1F4EOzCeywaSHSBtiXH6NuVoM4oW2HVyT+rZCoSRkfbyiQ6DeLUAKmqLpsTOCwqiZZT3gCElXQkGjI5SLCAsQESPXgBB7Zyo6QXXQTQQWjW+ZhWXpoTwYoPcBVkDeKvDpYiUDaeupo9yT4wuSSrVCTvB7OXsOojwre2eNMKImF0+sobWvQi2Xm1evTvF9knpvsEHfsxrJJk1c6xv6oIWQ5GuXw5Dej7YlKGgF6LFnFTaOILj/p91UhDpgwD4isMdtDLLxn+iSKImS+iPgRiVZZbE+G5P6yQ5cr+yYMZEmIcimiFZ1A4xVZCUBzmUokPT9oIUXx0WjppjEQ6GAEkqSQ55qYlSxxyjopAa3YYXQ2Gi+J6vo1B3slcoiBqo4TNHOIQjNydSyKM21IahsrsMYqJ0vZdBandZEBE47VEvlQYg7a3/rlAPpK0Wsd7QCinCS9G33gkmLjMZOlTQI7MrRRth0+3cKG3N9rxo0qz5IMYKByTRIglb+EiHUXoRUYS1mM59ltMvI/Gi3LxcoxGiJ+REh1P/6srFIY7J/bqnxDgXvYipC6Wi6ci/eqn+BJYAHRseeKj2AAAAAElFTkSuQmCC",
  WA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkAgMAAAANjH3HAAAADFBMVEVHcExiV01AMiyACgVW8W35AAAAAXRSTlMAQObYZgAAAipJREFUeNrt0jGK20AUBuA/EoaVWFDl3o1CrGpvIB/BRd7EeBuVwU2uMGy6NKmUeiAY7NlDWNk75A5hq4lrw2Tk0egh24GQLIGE/cFYw8e8mfck/MeJ8ZS5usLTpPk5TdAnwq/lT291jX81k99tVsEnWeI0Ei43yEkixC3BGVN1VjPIPDuRbmdOi7LBpYzodSu5xDAZchIfAdSzEymbmoScOBneIzZls6alBKDVsNYhw5ZWbbVCDmsdAK11FjoYSFxoDeAAnzAxJ0h334YyAXJ6Z14C1iQVhqlJoL6T1owWgEJOVZgqEcn67rPb89aJHJPw37MX7WT/QfkSBJ/IiSok7IMEEB9YXhAJBaD0Tdu2BKDAgk6+Eqm+2nIowvS3XrUSd/JIt6HfqdAKN6Ybu33U90FSrSXQSWLd0gwkHFpBa3RRWoNFoNj0Ejnh5pApcAZSNp/ixi83LAmRLB/ofZBIBpkSVVlCM1wUjNzvLAWRdCIuSL2Sx8POJNJavkp7MYgbJhbEB8QG4KS1CJIfH/JFkO3KC/YkYwBj0QnPNDqWjWqSZ6J3TVu9b52nXVjDEgFpJ8kCR1n3e0IXtfCy7c6JKv5GpTV8bvllwa9k1t4AhRf7XXQycqLgkrYyv7Z7Ftr5sptWYPcbrmYbhChYEySiNyyAKXnu61svYfAcfW+bpLokqbZI5v7MCibrgfv2r8hJInGaXPi/6kymy4vCAyrUmaReUoXn/MX8AOTf3EjQ8IXZAAAAAElFTkSuQmCC",
  KA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkAgMAAAANjH3HAAAACVBMVEVHcExiV01AMiwfKIGrAAAAAXRSTlMAQObYZgAAAUlJREFUeNrt1TGKFEEUBuCvHwzMdOxuJGKyy7inmCNsMNU0Rh0aeoTCExjYi2Fj5IW8icgEixo+aLpgMZT50r/+ggrqPVdX/7UYqm2HMtm2K2MrcQZP1vZuIcpmC0oFgrTAj63OskePtVhI4SWikoLDew13ZXIPAaq5VGA+hQpiJD4pZQQKFegGiFLOwBlAPEKcujOITL5V6BhAl8kCcFsJ0gTwE6GzLfw+aTmSDhV6YC9FmeCIIJB+wQX0e6k7d1BBj0weNRxOpL4C8A44TAQcrby+EJA64OOztQfAYC0AN5OG3aihayZG0jxJH0hllL5LPYAFi0CM8IYUwN0Ib0l9FXCxtgAPFbKTQsP84qmyz481WrkH5tMrKzcVFEg77CaEP6w9A58h9VC1XpiJtictX1pH8squapnAV2y2YyA0NDp6LXHdhv/qL+6eN5hJ+KKhAAAAAElFTkSuQmCC",
  ZA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkAgMAAAANjH3HAAAACVBMVEVHcExiV01AMiwfKIGrAAAAAXRSTlMAQObYZgAAAQBJREFUeNrtlUEKwjAQRX8DlcaVCwWXXRjxGLmExWWOMniCLsR1jyp2kGCT31pEcNG3avMyTWYyoVhY+DekJsKgAqhjFHjiBCn9WOlpZECKbqHLGaPfZDGYZephgo0A2bWtB2wvRQPdOag5xGK2ADrZoUHPJi6g6d+wQ54WZayWcnpFFqIPb0bpBgYDI3lj1H9eLZk4fiNMXN/eAgu5gdHiZ5guHbpAzTptPGbqGR1HprgLIisgsjXExPqd1CSoWYPBTTVl7uwq2Ya1ovV8H7NxgQjjhwPgOVlh51cGZCg8gD01FbkZX+OEGjolbiaAoakc6TGXwkxBzGi+svx1R3kAWDoiQG5YEtEAAAAASUVORK5CYII=",
  $A = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkAgMAAAANjH3HAAAACVBMVEVHcExiV01AMiwfKIGrAAAAAXRSTlMAQObYZgAAAP5JREFUeNrtlU1qwzAQRp8FLlJWXTTQpRZVyTF0iZosdZShJ/AidO2jFoKJ8M9HcUPIxm9l62kYj2aE2dl5DhaFcHiQTtEAkIwlBtBmGVlY4gEY1owDMBnDJhOZ4jqD1dwhQ7Bb7kj6Klz5qIfZA4Md6bjyWhNkAC4cWaenhWllJ8bIxsaHmQGGmWFmTJoojVc9xKFwpsT35K2okAuKnofhhuXSeTSH5eApEzdMnNiSzlReoPLmhKnnd7qZSjUHFNr4v8yPukqhU2MVsv6OzaQihMvzBXRNwVT/2sIKTQbepfHiZtxNMmnqFtnCgmAs5VO2uTVlGml0vdj+1/0nv3CcIl47CPeHAAAAAElFTkSuQmCC";
let ep = class {
  constructor({
    app: n,
    viewport: s,
    mainImage: a
  }) {
    this.app = n, this.pixiViewport = s.viewport, this.mainImage = a, this.size = 5, this.bombs = [zA, qA, LA, HA, GA, VA, JA, YA, XA, WA, KA, ZA, $A], this.textureArray = [];
    for (let i = 0; i < 13; i++) {
      let o = PIXI.Texture.from(this.bombs[i]);
      o.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST, this.textureArray.push(o)
    }
  }
  async boomWithDebounce({
    x: n,
    y: s
  }) {
    await Ji(U(50, 3e3)), this.boom({
      x: n,
      y: s
    })
  }
  boom({
    x: n,
    y: s
  }) {
    const a = new PIXI.AnimatedSprite(this.textureArray);
    a.loop = !1, a.animationSpeed = .17, a.zIndex = 2, a.x = n, a.y = s, a.scale.set(U(1, 2) === 1 ? 1 : -1, 1), a.anchor.set(.48, .55), this.pixiViewport.addChild(a), a.play(), a.onComplete = () => {
      this.pixiViewport.removeChild(a)
    }, this.mainImage.paintSquare({
      x: n - Math.floor(this.size / 2),
      y: s - Math.floor(this.size / 2),
      size: 5,
      colors: Array.from(Array(5 * 5), (i, o) => "#171F2A")
    })
  }
};
const tp = "_order_panel_1ley0_1",
  np = "_content_1ley0_12",
  sp = "_fast_mode_blocker_1ley0_25",
  ap = "_info_1ley0_38",
  ip = "_active_color_1ley0_47",
  op = "_pixel_info_container_1ley0_57",
  rp = "_pixel_info_color_1ley0_65",
  cp = "_pixel_info_text_1ley0_71",
  lp = "_info_button_1ley0_77",
  dp = "_info_button_active_1ley0_94",
  up = "_price_value_1ley0_98",
  mp = "_pixel_locked_text_1ley0_104",
  Ap = "_pixel_locked_text_painted_1ley0_115",
  pp = "_pixel_locked_animation_1ley0_137",
  hp = "_button_1ley0_143",
  gp = "_button_text_1ley0_167",
  _p = "_flash_mode_button_text_1ley0_180",
  fp = "_not_pixel_icon_1ley0_191",
  xp = "_tg_logo_1ley0_195",
  yp = "_image_1ley0_200",
  vp = "_inner_wrapper_button_1ley0_205",
  oe = {
    order_panel: tp,
    content: np,
    fast_mode_blocker: sp,
    info: ap,
    active_color: ip,
    pixel_info_container: op,
    pixel_info_color: rp,
    pixel_info_text: cp,
    info_button: lp,
    info_button_active: dp,
    price_value: up,
    pixel_locked_text: mp,
    pixel_locked_text_painted: Ap,
    pixel_locked_animation: pp,
    button: hp,
    button_text: gp,
    flash_mode_button_text: _p,
    not_pixel_icon: fp,
    tg_logo: xp,
    image: yp,
    inner_wrapper_button: vp
  },
  ni = window.Telegram.WebApp.CloudStorage;
let ho = class {
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
window.Telegram.WebApp.isVersionAtLeast("6.9") && (ho = class {
  static save(n, s, a = () => {}) {
    ni.setItem(n, s, a)
  }
  static get(n, s = () => {}) {
    ni.getItem(n, s)
  }
});
const Vt = ho,
  ut = ["#E46E6E", "#FFD635", "#7EED56", "#00CCC0", "#51E9F4", "#94B3FF", "#E4ABFF", "#FF99AA", "#FFB470", "#FFFFFF", "#BE0039", "#FF9600", "#00CC78", "#009EAA", "#3690EA", "#6A5CFF", "#B44AC0", "#FF3881", "#9C6926", "#898D90", "#6D001A", "#BF4300", "#00A368", "#00756F", "#2450A4", "#493AC1", "#811E9F", "#A00357", "#6D482F", "#000000"],
  si = ut[U(0, ut.length - 1)],
  wp = {
    active: si,
    id: btoa(si),
    latest: ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
    basic: ut
  },
  go = he({
    name: "color",
    initialState: wp,
    reducers: {
      addColor: (t, n) => {
        const s = t.latest.indexOf(n.payload),
          a = t.latest[0];
        s > -1 ? t.latest = [n.payload, ...t.latest.slice(0, s), ...t.latest.slice(s + 1, 10)] : t.latest = [n.payload, ...t.latest.slice(0, 7)], a !== n.payload && Vt.save("colors", JSON.stringify(t.latest))
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
    addColor: jp,
    setColors: bp,
    setActiveColor: Da
  } = go.actions,
  Np = go.reducer,
  Ip = {
    1: 1
  };
let yt;
const Cp = t => {
  yt = t
};
let ha = 0;
setInterval(() => {
  console.log(ha), ha = 0
}, 1e4);
let ln = !0;
window.addEventListener("blur", () => {
  ln = !1
});
window.addEventListener("focus", () => {
  ln = !0
});
document.addEventListener("visibilitychange", () => {
  document.hidden ? ln = !1 : ln = !0
});
let ct = null;
const Pp = (t, n) => {
    let s = {
      token: t
    };
    ma() && (s = {
      data: new TextEncoder().encode(JSON.stringify({
        token: t
      }))
    }), ct = new Br(Ca.replace("https", "wss").replace("api/v1/", "connection/websocket"), s), ct.on("connected", function(a) {
      if (console.log(`connected over ${a.transport}`), !ma()) return;
      console.log("centrifuge image");
      const i = new Blob([a.data], {
          type: "image/webp"
        }),
        o = new Image;
      o.src = URL.createObjectURL(i), o.onload = () => {
        v.mainImage.loadFromCentrifuge(o).then(() => {
          const l = yt.getState().main.startParams.coords;
          l && (v.viewport.viewport.animate({
            scale: 60,
            time: 400,
            position: {
              x: l.x + .5,
              y: l.y + .5
            }
          }), v.mainImage.selectedPixel.draw(l), yt.dispatch(It(l)))
        })
      }
    }), ct.on("disconnected", function(a) {
      console.log(`disconnected: ${a.code}, ${a.reason}`)
    }), ct.on("error", function(a) {
      console.log(a)
    }), ct.on("publication", function(a) {
      if (a.channel === "event:message") {
        JSON.parse(new TextDecoder().decode(a.data)).forEach(r => {
          const l = JSON.parse(r.data);
          r.type === Hs.pixanos && yt.dispatch(Dp(l)), !(l.user.userId === n || !ln) && (r.type === Hs.bomb && v.mainImage.bomb.boomWithDebounce(xs(l.info.pixelId)), r.type === Hs.pumpkin && v.mainImage.pumpkin.boomWithDebounce(xs(l.info.pixelId)))
        });
        return
      }
      const i = new Uint8Array(a.data);
      Dr(i, (o, r) => {
        if (o) console.error("Ошибка распаковки данных:", o);
        else {
          const l = JSON.parse(new TextDecoder().decode(r));
          if (a.channel === "pixel:message") Object.values(l).forEach(d => {
            ha += d.length
          }), v.mainImage.paintPixelsFromCentrifuge(l);
          else if (a.channel === `personal:user#${n}`) {
            const d = JSON.parse(new TextDecoder().decode(r));
            if (d.type === Ip[1] && yt.getState().daily.list.entities[d.good_id]) {
              const m = yt.getState().daily.list.entities[d.good_id],
                h = m.name,
                g = m.prices[0].quantity;
              yt.dispatch(z({
                id: performance.now(),
                text: `Transaction for daily ${m.id} completed! Got ${h} x${g}. Refresh the app.`,
                icon: ""
              }))
            }
          } else console.log("unknown channel", a)
        }
      })
    }), ct.connect()
  },
  Sp = () => !1,
  Tp = {
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
      InitialCoins: 8,
      RefRewardCoinsPremium: 64,
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
    startParams: Rl(),
    startAppTs: Date.now(),
    timeLimit: !1,
    showIntro: !1,
    showBetaTestIntro: !1,
    fastMode: !1,
    fastEnergy: !1,
    currentFastType: null,
    showUserAndSquadPopup: !1,
    userAndSquadPopupStack: [],
    showNoFlagsPopup: Sp(),
    showMiningDetailsPopup: !1,
    showInviteFrensPopup: !1,
    showNoChargesPopup: !1,
    lastShowChargesPopupTs: Date.now() - ic,
    showBoostDetailsPopup: !1,
    activeBoostDetails: pe.paintReward,
    referrerSquadId: null,
    showPixanosEvent: !1,
    pixanosProcessing: !1,
    pixanosEventData: null,
    flyingRewards: []
  },
  _o = he({
    name: "main",
    initialState: Tp,
    reducers: {
      setTimeLimit: t => {
        t.timeLimit = !0, ct && ct.disconnect()
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
        t.lastShowChargesPopupTs = n.payload, Vt.save("lastShowChargesPopupTs", JSON.stringify(n.payload))
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
    }
  }),
  {
    setTimeLimit: Ep,
    updateSettings: Qk,
    enableFastMode: fo,
    disableFastMode: Ds,
    enableFastType: ks,
    disableFastType: St,
    enableFastEnergy: Bp,
    disableFastEnergy: xo,
    showPixanosEvent: Dp,
    hidePixanosEvent: kp,
    setPixanosProcessing: ai,
    setShowIntro: zk,
    setShowBetaTestIntro: qk,
    addFlyingReward: Rp,
    removeFlyingReward: Mp,
    showInviteFrensPopup: Lk,
    hideInviteFrensPopup: $s,
    showNoChargesPopup: Hk,
    hideNoChargesPopup: ea,
    setLastShowChargesPopupTs: Gk,
    setShowMiningDetailsPopup: yo,
    setShowBoostDetailsPopup: ka,
    setActiveBoostDetails: Up,
    addItemToUserAndSquadPopupStack: xn,
    removeItemFromUserAndSquadPopupStack: vo,
    setShowNoFlagsPopup: Fp,
    setReferrerSquadId: ga
  } = _o.actions,
  Op = _o.reducer,
  Jt = Na(t => t.main.settings, t => {
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
  wo = Na(t => t.main.settings, t => ({
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
  Qp = Na(t => t.main.settings, t => ({
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
  zp = "_layout_oxfjd_1",
  qp = "_container_oxfjd_7",
  Lp = "_placeholder_oxfjd_20",
  Hp = "_progress_oxfjd_24",
  Gp = "_counter_oxfjd_32",
  Vp = "_counter_max_text_oxfjd_45",
  kt = {
    layout: zp,
    container: qp,
    placeholder: Lp,
    progress: Hp,
    counter: Gp,
    counter_max_text: Vp
  },
  Jp = () => {
    _();
    const t = Z(),
      n = c(o => o.mining.charges),
      s = c(o => o.mining.maxCharges),
      a = c(o => o.main.currentFastType),
      i = n >= s;
    return a !== null ? null : e.jsx("div", {
      className: kt.layout,
      onPointerUp: o => {
        o.stopPropagation(), t.push("/energy-over")
      },
      children: e.jsxs("div", {
        className: kt.container,
        children: [e.jsxs("div", {
          className: kt.placeholder,
          children: [e.jsx(N, {
            children: ""
          }), e.jsxs("span", {
            children: [" ", n]
          }), i && e.jsx("span", {
            className: kt.counter_max_text,
            children: " max"
          })]
        }), e.jsxs("div", {
          className: kt.counter,
          children: [e.jsx(N, {
            children: ""
          }), e.jsxs("span", {
            children: [" ", n]
          }), i && e.jsx("span", {
            className: kt.counter_max_text,
            children: " max"
          })]
        })]
      })
    })
  },
  Yp = "_progress_g3q57_1",
  Xp = {
    progress: Yp
  },
  Wp = ({
    progress: t
  }) => e.jsx("div", {
    className: Xp.progress,
    style: {
      width: `${t}%`
    }
  }),
  Kp = () => {
    const t = _(),
      n = c(h => h.mining.charges),
      s = u.useRef(n),
      a = c(h => h.mining.addedCharges),
      i = u.useRef(0),
      o = c(h => h.mining.reChargeTs),
      r = c(h => h.mining.reChargeSpeed),
      l = c(h => h.mining.maxCharges),
      [d, m] = u.useState(0);
    return u.useEffect(() => {
      const h = () => {
        if (s.current >= l) {
          g = requestAnimationFrame(h);
          return
        }
        const I = Date.now(),
          f = Math.floor((I - o) / r) - i.current;
        f > 0 && s.current < l && (t(no(f)), t(iu(f)));
        let j = (I - o) % r;
        m(j * 100 / r), g = requestAnimationFrame(h)
      };
      let g = requestAnimationFrame(h);
      return () => {
        cancelAnimationFrame(g), i.current = 0
      }
    }, [o]), u.useEffect(() => {
      s.current = n, n === l && m(0)
    }, [n]), u.useEffect(() => {
      i.current = a
    }, [a]), e.jsxs(ae.Fragment, {
      children: [e.jsx(Jp, {}), e.jsx(Wp, {
        progress: d
      })]
    })
  },
  Zp = "_layout_mw4vu_1",
  $p = "_container_mw4vu_21",
  eh = "_buttons_container_mw4vu_27",
  th = "_button_mw4vu_27",
  nh = "_shop_button_mw4vu_44",
  sh = "_container__bottom_mw4vu_49",
  ah = "_fast_type_button_mw4vu_49",
  ih = "_disabled_button_cover_mw4vu_61",
  oh = "_fast_mode_button_enabled_mw4vu_71",
  rh = "_available_mw4vu_81",
  ch = "_limited_good_timer_mw4vu_98",
  lh = "_disabled_available_cover_mw4vu_119",
  dh = "_button_image_mw4vu_129",
  uh = "_animation_mw4vu_146",
  mh = "_shake_mw4vu_1",
  C = {
    layout: Zp,
    container: $p,
    buttons_container: eh,
    button: th,
    shop_button: nh,
    container__bottom: sh,
    fast_type_button: ah,
    disabled_button_cover: ih,
    fast_mode_button_enabled: oh,
    available: rh,
    limited_good_timer: ch,
    disabled_available_cover: lh,
    button_image: dh,
    animation: uh,
    shake: mh
  },
  Ah = "_number_179d2_1",
  ph = "_layout_179d2_6",
  hh = "_viewer_179d2_14",
  gh = "_container_179d2_18",
  _h = "_digit_179d2_25",
  fh = {
    number: Ah,
    layout: ph,
    viewer: hh,
    container: gh,
    digit: _h
  },
  xh = "_layout_q3t4p_1",
  yh = "_viewer_q3t4p_9",
  vh = "_container_q3t4p_18",
  wh = "_digit_q3t4p_25",
  Wt = {
    layout: xh,
    viewer: yh,
    container: vh,
    digit: wh
  },
  jh = ({
    digit: t = 0,
    fontSize: n = 16,
    fontWeight: s = 600,
    gap: a = 6
  }) => {
    const [i, o] = u.useState(!0), [r, l] = u.useState(0), d = r === 0 ? `translateY(${a/2}px)` : `translateY(-${a/2+(n+a)*r-a}px)`;
    return u.useEffect(() => {
      o(!1);
      const m = setTimeout(() => {
        o(!0)
      }, 500);
      return () => {
        clearTimeout(m)
      }
    }, [r]), u.useEffect(() => {
      l(t)
    }, [t]), e.jsx("div", {
      className: Wt.layout,
      children: e.jsxs("div", {
        className: Wt.viewer,
        style: {
          height: n + a
        },
        children: [e.jsx("span", {
          className: Wt.digit,
          style: {
            visibility: i ? "visible" : "hidden",
            alignSelf: "center",
            fontSize: n,
            fontWeight: s
          },
          children: r
        }), e.jsx("div", {
          className: Wt.container,
          style: {
            transform: d,
            visibility: i ? "hidden" : "visible",
            gap: a
          },
          children: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(m => e.jsx("span", {
            className: Wt.digit,
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
  yn = ({
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
      className: fh.number,
      children: r.map((l, d) => l === "space" ? e.jsx("div", {
        children: " "
      }, r.length - d) : e.jsx(jh, {
        digit: Number(l),
        fontSize: n,
        fontWeight: s,
        gap: a
      }, r.length - d))
    })
  },
  bh = {
    isTMA: !1,
    isAuth: !1,
    authData: null
  },
  jo = he({
    name: "auth",
    initialState: bh,
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
    setIsTMA: Nh,
    setIsAuth: Ih,
    setAuthData: Ch
  } = jo.actions,
  bo = t => t.auth.isTMA,
  ke = t => t.auth.isAuth,
  Ph = jo.reducer;
let ta = !1;
const Sh = async ({
  dispatch: t,
  amount: n,
  charges: s,
  maxCharges: a,
  status: i,
  state: o
}) => {
  var l, d;
  if (!n && o && (n = o.shop.available[1], s = o.mining.charges, a = o.mining.maxCharges, i = o.shop.useProductStatus), !n || n === 0) return t(Ps(10)), t(et(1)), t(tt()), t(xo()), !1;
  if (s === a) return !1;
  if (ta) return p.pending;
  ta = !0, t(Ze({
    command: Se.start
  }));
  try {
    (await t(Ts.useProduct({
      productId: 1,
      pixelId: 1
    }))).meta.requestStatus === p.fulfilled && (t(au(a)), t(Ss({
      product: 1,
      amount: 1
    })), (d = (l = window.Telegram.WebApp) == null ? void 0 : l.HapticFeedback) == null || d.notificationOccurred("error"))
  } catch (m) {
    console.log("error", m)
  } finally {
    ta = !1, t(Ze({
      command: Se.finish
    }))
  }
  return !0
}, Th = () => {
  const t = _(),
    n = c(ke),
    s = 1,
    a = c(d => d.shop.available[s]),
    o = 10 + String(a).length * 6,
    r = c(d => d.main.fastEnergy),
    l = [C.button, C.fast_type_button];
  return r && l.push(C.fast_mode_button_enabled), n ? e.jsxs("button", {
    className: `${l.join(" ")} ${C.shop_button}`,
    onPointerUp: async () => {
      if (r) t(xo());
      else {
        if (!a || a === 0) return t(et(s)), t(tt()), !1;
        t(Bp())
      }
    },
    children: [e.jsx("img", {
      alt: "img",
      className: C.button_image,
      src: qi
    }), e.jsx("div", {
      className: C.available,
      style: {
        width: o
      },
      children: !a || a === 0 ? e.jsx(N, {
        children: ""
      }) : e.jsx(yn, {
        number: a,
        fontSize: 11,
        fontWeight: 400,
        gap: 3
      })
    })]
  }) : null
}, Eh = {
  isShowSideMenu: !1
}, No = he({
  name: "layout",
  initialState: Eh,
  reducers: {
    setShowSideMenu: (t, n) => {
      t.isShowSideMenu = n.payload
    }
  }
}), {
  setShowSideMenu: jt
} = No.actions, Io = t => t.layout.isShowSideMenu, Bh = No.reducer;
let Rt = null,
  Mt = null;
class Co {
  static async personal({
    league: n
  }) {
    Rt !== null && (Rt.abort(), Rt = null), Rt = new AbortController;
    const s = await E.get(`/ratings/personal?league=${n.toLowerCase()}&limit=20`, {
      signal: Rt.signal
    });
    return Rt = null, s
  }
  static async squad({
    league: n
  }) {
    Mt !== null && (Mt.abort(), Mt = null), Mt = new AbortController;
    const s = await E.get(`/ratings/squads?league=${n.toLowerCase()}&limit=20`, {
      signal: Mt.signal
    });
    return Mt = null, s
  }
}
const Xn = Q("ratings/personal", async ({
    league: t
  }) => (await Co.personal({
    league: t
  })).data),
  Wn = Q("ratings/squad", async ({
    league: t
  }) => (await Co.squad({
    league: t
  })).data),
  Dh = {
    list: [],
    myPlace: 0,
    mySquadPlace: 0,
    mySquad: null,
    league: "bronze",
    status: p.idle
  },
  Po = he({
    name: "ratings",
    initialState: Dh,
    reducers: {
      setActiveLeague: (t, n) => {
        t.league = n.payload
      },
      clearRatingList: t => {
        t.list = []
      }
    },
    extraReducers: t => {
      t.addCase(Xn.pending, (n, s) => {
        n.status = p.pending
      }).addCase(Xn.fulfilled, (n, s) => {
        n.status = p.fulfilled, n.list = [...Object.values(s.payload.top)], n.myPlace = s.payload.myPlace
      }).addCase(Xn.rejected, (n, s) => {
        n.status = p.rejected
      }).addCase(Wn.pending, (n, s) => {
        n.status = p.pending
      }).addCase(Wn.fulfilled, (n, s) => {
        n.status = p.fulfilled, n.list = [...Object.values(s.payload.top)], n.mySquadPlace = s.payload.MySquadPlace, n.mySquad = s.payload.mySquad
      }).addCase(Wn.rejected, (n, s) => {
        n.status = p.rejected
      })
    }
  }),
  {
    setActiveLeague: So,
    clearRatingList: kh
  } = Po.actions,
  Ra = {
    personal: Xn,
    squad: Wn
  },
  Rh = Po.reducer,
  Kn = Q("history/get", async ({
    offset: t,
    limit: n
  }) => (await X.getHistory({
    offset: t,
    limit: n
  })).data),
  Mh = {
    list: [],
    status: p.idle
  },
  To = he({
    name: "history",
    initialState: Mh,
    reducers: {
      resetHistory: t => {
        t.list = [], t.status = p.idle
      }
    },
    extraReducers: t => {
      t.addCase(Kn.pending, (n, s) => {
        n.status = p.pending
      }).addCase(Kn.fulfilled, (n, s) => {
        n.status = p.fulfilled, n.list = s.payload
      }).addCase(Kn.rejected, (n, s) => {
        n.status = p.rejected
      })
    }
  });
To.actions;
const Ma = {
    get: Kn
  },
  Uh = To.reducer,
  At = mn();
At.startListening({
  matcher: Ee(Ne.info.fulfilled),
  effect: (t, n) => {
    t.payload.activated && (n.dispatch(ad(t.payload.totalUserPixels)), n.dispatch(Ki(t.payload.userBalance))), n.dispatch(vc(t.payload.goods))
  }
});
At.startListening({
  matcher: Ee(Ne.checkTask.fulfilled),
  effect: (t, n) => {
    const s = t.meta.arg.key,
      a = t.payload[s],
      i = t.meta.arg.reward;
    a && (s === w.pumpkin && n.dispatch(zt({
      product: 7,
      amount: 6
    })), n.dispatch(Pt(i)));
    let o = "Check failed",
      r = "";
    a && (o = "Well done fren", r = ""), n.dispatch(z({
      id: performance.now(),
      text: o,
      icon: r
    }))
  }
});
At.startListening({
  matcher: Ee(Ne.checkBoost.fulfilled),
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
At.startListening({
  matcher: Ee(Ne.checkBoost.fulfilled),
  effect: (t, n) => {
    const s = n.getState(),
      a = s.main.settings,
      i = t.meta.arg.key,
      o = t.payload[i],
      r = t.meta.arg.price;
    if (o) {
      if (i === pe.energyLimit) {
        const l = s.mining.boosts[pe.energyLimit],
          d = a.UpgradeChargeCount.levels[l].Boost;
        n.dispatch(nu(s.mining.maxCharges + d)), n.dispatch(no(d))
      }
      if (i === pe.reChargeSpeed) {
        const l = s.mining.boosts[pe.reChargeSpeed],
          d = a.UpgradeChargeRestoration.levels[l].ChargeBoost;
        n.dispatch(su(d))
      }
      n.dispatch(rd(r))
    }
  }
});
At.startListening({
  matcher: Ee(Ne.checkTask.rejected),
  effect: (t, n) => {
    n.dispatch(z({
      id: performance.now(),
      text: "Check failed",
      icon: ""
    }))
  }
});
At.startListening({
  matcher: Ee(Ne.checkBoost.rejected),
  effect: (t, n) => {
    n.dispatch(z({
      id: performance.now(),
      text: "Not enough PX",
      icon: ""
    }))
  }
});
At.startListening({
  matcher: Ee(to),
  effect: (t, n) => {
    const a = n.getState().mining.toggleAction;
    Vt.save("boosts", JSON.stringify(a))
  }
});
const Rs = mn();
Rs.startListening({
  matcher: Ee(Bs.getPriceMask.pending, Nt.getPixelsForSale.pending, Nt.getPixelsSold.pending, Ma.get.pending),
  effect: (t, n) => {
    n.dispatch(Ze({
      command: Se.start
    }))
  }
});
Rs.startListening({
  matcher: Ee(Bs.getPriceMask.fulfilled, Nt.getPixelsForSale.fulfilled, Nt.getPixelsSold.fulfilled, Ma.get.fulfilled),
  effect: (t, n) => {
    n.dispatch(Ze({
      command: Se.finish
    }))
  }
});
Rs.startListening({
  matcher: Ee(Bs.getPriceMask.rejected),
  effect: (t, n) => {
    t.error.code !== "ERR_CANCELED" && n.dispatch(Ze({
      command: Se.finish
    }))
  }
});
const Eo = mn();
Eo.startListening({
  matcher: Ee(Nt.getUser.fulfilled),
  effect: (t, n) => {
    n.dispatch(So(t.payload.data.league))
  }
});
const vn = mn();
vn.startListening({
  actionCreator: fo,
  effect: () => {
    v.mainImage.selectedPixel.hide()
  }
});
vn.startListening({
  actionCreator: Ds,
  effect: () => {
    v.mainImage.selectedPixel.show()
  }
});
vn.startListening({
  actionCreator: ks,
  effect: () => {
    v.mainImage.selectedPixel.hide()
  }
});
vn.startListening({
  actionCreator: St,
  effect: () => {
    v.mainImage.selectedPixel.show()
  }
});
const Bo = mn();
Bo.startListening({
  matcher: Ee(Ra.squad.fulfilled),
  effect: (t, n) => {
    n.dispatch(cd(t.payload.mySquad))
  }
});
const Fh = {
    info: null,
    popupId: null,
    getInfoFetchStatus: p.idle
  },
  Zn = Q("squad/getSquadInfo", async ({
    id: t
  }) => (await X.getSquadInfo({
    id: t
  })).data),
  Do = he({
    name: "squad",
    initialState: Fh,
    reducers: {
      setPopupSquadId: (t, n) => {
        t.popupId = n.payload
      }
    },
    extraReducers: t => {
      t.addCase(Zn.pending, n => {
        n.getInfoFetchStatus = p.pending
      }).addCase(Zn.fulfilled, (n, s) => {
        n.info = s.payload, n.getInfoFetchStatus = p.fulfilled
      }).addCase(Zn.rejected, n => {
        n.getInfoFetchStatus = p.rejected
      })
    }
  });
Do.actions;
const Oh = Do.reducer,
  Ms = {
    getInfo: Zn
  };
let Kt = null;
class Re {
  static async uploadTemplate({
    blob: n,
    posX: s,
    posY: a
  }) {
    const i = {
      "Content-Type": "application/octet-stream"
    };
    return s && s !== "" && (i.posX = s), a && a !== "" && (i.posY = a), E.post("/image/template/upload", n, {
      headers: i
    })
  }
  static async uploadTournamentTemplate({
    blob: n,
    posX: s,
    posY: a
  }) {
    return E.post("/tournament/template/upload", n, {
      headers: {
        "Content-Type": "application/octet-stream",
        posX: s,
        posY: a
      }
    })
  }
  static async getReferredTemplate() {
    return E.get("/image/template/my")
  }
  static async getTemplateById({
    id: n
  }) {
    return Kt !== null && (Kt.abort(), Kt = null), Kt = new AbortController, E.get(`/image/template/${n}`, {
      signal: Kt.signal
    })
  }
  static async getTournamentTemplateById({
    id: n
  }) {
    return E.get(`/tournament/template/${n}`)
  }
  static async getTemplatesList({
    limit: n,
    offset: s
  }) {
    return E.get(`/image/template/list?limit=${n}&offset=${s}`)
  }
  static async getApprovedTemplatesList({
    limit: n,
    offset: s
  }) {
    return E.get(`/tournament/template/approvedList?limit=${n}&offset=${s}`)
  }
  static async getRandomTemplates() {
    return E.get("/tournament/template/randomList?limit=16")
  }
  static async subscribeToTemplate({
    id: n
  }) {
    return E.put(`/image/template/subscribe/${n}`)
  }
  static async subscribeToTournamentTemplate({
    id: n
  }) {
    return E.put(`/tournament/template/subscribe/${n}`)
  }
  static async getAvailableSizes({
    userId: n
  }) {
    return E.get(`/image/template/sizes/${n}`)
  }
}
const Qh = "/assets/halloween2-l9FmXxVI.png",
  zh = Q("template/subscribe", async ({
    id: t
  }) => (await Re.subscribeToTemplate({
    id: t
  })).data),
  $n = Q("template/getTemplateList", async ({
    offset: t,
    limit: n
  }) => (await Re.getTemplatesList({
    offset: t,
    limit: n
  })).data),
  qh = Q("template/getAvailableSizes", async ({
    userId: t
  }) => (await Re.getAvailableSizes({
    userId: t
  })).data),
  es = Q("template/getReferredTemplate", async () => (await Re.getReferredTemplate()).data),
  _a = Q("template/getMyTemplate", async ({
    id: t
  }) => (await Re.getTemplateById({
    id: t
  })).data),
  ts = Q("template/getWorldTemplate", async () => ({
    x: 372,
    y: 372,
    imageSize: 256,
    url: Qh,
    type: ge.world
  })),
  Lh = {
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
  ko = he({
    name: "template",
    initialState: Lh,
    reducers: {
      setActiveTemplate: (t, n) => {
        t.active = n.payload, v.mainImage.worldTemplate.hide(), v.mainImage.worldTemplate.show(n.payload)
      },
      setActiveTemplateTab: (t, n) => {
        t.activeTab = n.payload
      },
      hideTemplates: t => {
        t.active = null, v.mainImage.worldTemplate.hide()
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
      t.addCase(es.pending, n => {}).addCase(es.fulfilled, (n, s) => {
        if (s.payload) {
          const a = {
            ...s.payload,
            type: ge.referred
          };
          n.referredTemplate = a
        }
      }).addCase(es.rejected, (n, s) => {}).addCase(_a.pending, n => {}).addCase(_a.fulfilled, (n, s) => {}).addCase(ts.pending, (n, s) => {}).addCase(ts.fulfilled, (n, s) => {
        const a = {
          ...s.payload,
          type: ge.world
        };
        n.worldTemplate = a, v.mainImage.worldTemplate.add(a)
      }).addCase(ts.rejected, (n, s) => {}).addCase($n.pending, n => {
        n.listStatus = p.pending
      }).addCase($n.fulfilled, (n, s) => {
        n.listStatus = p.fulfilled, s.payload && (n.list = [...n.list, ...s.payload], n.listOffset += 12)
      }).addCase($n.rejected, n => {
        n.listStatus = p.rejected
      })
    }
  }),
  {
    setActiveTemplate: Ua,
    setActiveTemplateTab: vs,
    hideTemplates: wn,
    setTemplateOpacity: Hh,
    setReferredTemplate: Gh,
    setMyTemplate: Ro,
    setTemplateListOffset: Vk,
    clearTemplatesListData: Vh,
    setShowTemplateDetailsPopup: Mo,
    setShowTemplateInfoPopup: fa
  } = ko.actions,
  Je = {
    getReferredTemplate: es,
    getTemplateById: _a,
    getWorldTemplate: ts,
    getList: $n,
    getAvailableSizes: qh,
    subscribe: zh
  },
  Jh = ko.reducer,
  Yh = {
    list: fs.getInitialState(),
    selected: 1,
    getDailyListFetchStatus: p.idle,
    getFirstDailyFetchStatus: p.idle
  },
  ns = Q("daily/getList", async () => (await X.getDailyList()).data),
  ss = Q("daily/getFirstDaily", async () => (await X.getFirstDaily()).data),
  Uo = he({
    name: "daily",
    initialState: Yh,
    reducers: {
      setSelectedDaily: (t, n) => {
        t.selected = n.payload
      },
      updateOneDaily: (t, n) => {
        fs.updateOne(t.list, n.payload)
      }
    },
    extraReducers: t => {
      t.addCase(ns.pending, n => {
        n.getDailyListFetchStatus = p.pending
      }).addCase(ns.fulfilled, (n, s) => {
        fs.setAll(n.list, s.payload.dailyAvailable), n.getDailyListFetchStatus = p.fulfilled
      }).addCase(ns.rejected, n => {
        n.getDailyListFetchStatus = p.rejected
      }).addCase(ss.pending, n => {
        n.getFirstDailyFetchStatus = p.pending
      }).addCase(ss.fulfilled, (n, s) => {
        n.getFirstDailyFetchStatus = p.fulfilled
      }).addCase(ss.rejected, n => {
        n.getFirstDailyFetchStatus = p.rejected
      })
    }
  }),
  Xh = t => {
    const n = t.daily.selected;
    return co.selectById(t, n)
  },
  {
    setSelectedDaily: Wh,
    updateOneDaily: Jk
  } = Uo.actions,
  Kh = Uo.reducer,
  Zh = {
    getList: ns,
    getFirstDaily: ss
  },
  $h = "_panel_1mia4_1",
  eg = "_item_1mia4_15",
  tg = "_active_1mia4_24",
  xa = {
    panel: $h,
    item: eg,
    active: tg
  },
  Yt = ({
    children: t,
    className: n = "",
    style: s = {}
  }) => e.jsx("div", {
    className: `${xa.panel} ${n}`,
    style: {
      ...s
    },
    children: t
  }),
  Te = ({
    active: t,
    setActive: n,
    children: s
  }) => e.jsx("div", {
    className: `${xa.item} ${t?xa.active:""}`,
    onPointerUp: () => {
      n()
    },
    children: s
  }),
  Fo = t => t ? t.friends >= lc.friendsForTemplateCreation || t.isContractor : !1,
  He = {
    create: "create",
    main: "main",
    result: "result"
  },
  ng = () => {
    const t = _(),
      n = c(r => r.tournament.activeTab),
      s = c(be),
      a = Fo(s),
      i = c(r => r.tournament.myTemplate),
      o = i && i.approved;
    return e.jsxs(Yt, {
      children: [a && o && e.jsx(Te, {
        active: n === He.create,
        setActive: () => t(na(He.create)),
        children: "My template"
      }), e.jsx(Te, {
        active: n === He.main,
        setActive: () => t(na(He.main)),
        children: "Tournament"
      }), e.jsx(Te, {
        active: n === He.result,
        setActive: () => t(na(He.result)),
        children: "My results"
      })]
    })
  },
  as = Q("tournament/getMyTemplate", async ({
    id: t
  }) => (await Re.getTournamentTemplateById({
    id: t
  })).data),
  is = Q("tournament/getSelectedTemplate", async ({
    id: t
  }) => (await Re.getTournamentTemplateById({
    id: t
  })).data),
  os = Q("tournament/getApprovedTemplatesList", async ({
    offset: t,
    limit: n
  }) => (await Re.getApprovedTemplatesList({
    offset: t,
    limit: n
  })).data),
  rs = Q("tournament/getRandomTemplatesList", async () => (await Re.getRandomTemplates()).data),
  cs = Q("tournament/selectTemplate", async ({
    id: t
  }) => (await Re.subscribeToTournamentTemplate({
    id: t
  })).data),
  sg = () => localStorage.getItem("selectedTemplate") ? JSON.parse(localStorage.getItem("selectedTemplate")) : null,
  ag = {
    activeTab: He.main,
    showTournamentDetailsPopup: !1,
    myTemplate: null,
    selectedTemplate: sg(),
    showTemplateInfoPopup: !1,
    templateDataInfoPopup: null,
    approvedTemplatesList: sn.getInitialState(),
    approvedTemplatesListStatus: p.idle,
    approvedTemplatesListOffset: 0,
    approvedTemplatesListLimit: 16,
    approvedTemplatesListTotal: 0,
    selectTemplateStatus: p.idle,
    randomTemplatesListStatus: p.idle
  },
  Oo = he({
    name: "tournament",
    initialState: ag,
    reducers: {
      setActiveTournamentTab: (t, n) => {
        t.activeTab = n.payload
      },
      setShowTournamentDetailsPopup: (t, n) => {
        t.showTournamentDetailsPopup = n.payload
      },
      setMyTournamentTemplate: (t, n) => {
        t.myTemplate = n.payload
      },
      clearApprovedTemplateList: t => {
        t.approvedTemplatesList = sn.getInitialState(), t.approvedTemplatesListOffset = 0
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
      t.addCase(as.pending, n => {}).addCase(as.fulfilled, (n, s) => {
        s.payload.id && (n.myTemplate = {
          ...s.payload,
          type: ge.my,
          url: `${s.payload.url}?time=${Date.now()}`
        })
      }).addCase(as.rejected, (n, s) => {}).addCase(is.pending, n => {}).addCase(is.fulfilled, (n, s) => {
        s.payload.id && (n.selectedTemplate = {
          ...s.payload,
          type: ge.referred,
          url: `${s.payload.url}?time=${Date.now()}`
        })
      }).addCase(is.rejected, (n, s) => {}).addCase(os.pending, n => {
        n.approvedTemplatesListStatus = p.pending
      }).addCase(os.fulfilled, (n, s) => {
        s.payload && s.payload.templates && (sn.addMany(n.approvedTemplatesList, s.payload.templates), n.approvedTemplatesListOffset += 16, n.approvedTemplatesListTotal = Math.max(s.payload.total, n.approvedTemplatesListTotal)), n.approvedTemplatesListStatus = p.fulfilled
      }).addCase(os.rejected, (n, s) => {
        n.approvedTemplatesListStatus = p.rejected
      }).addCase(rs.pending, n => {
        n.randomTemplatesListStatus = p.pending
      }).addCase(rs.fulfilled, (n, s) => {
        s.payload && s.payload.templates && sn.setAll(n.approvedTemplatesList, s.payload.templates), n.randomTemplatesListStatus = p.fulfilled
      }).addCase(rs.rejected, (n, s) => {
        n.randomTemplatesListStatus = p.rejected
      }).addCase(cs.pending, n => {
        n.selectTemplateStatus = p.pending
      }).addCase(cs.fulfilled, (n, s) => {
        s.payload.id && (n.selectedTemplate = {
          ...s.payload,
          type: ge.referred,
          url: `${s.payload.url}?time=${Date.now()}`
        }), n.selectTemplateStatus = p.fulfilled
      }).addCase(cs.rejected, (n, s) => {
        n.selectTemplateStatus = p.rejected
      })
    }
  }),
  {
    setActiveTournamentTab: na,
    setShowTournamentDetailsPopup: Qo,
    setMyTournamentTemplate: Yk,
    clearApprovedTemplateList: ig,
    showTournamentTemplateInfoPopup: zo,
    closeTournamentTemplateInfoPopup: ii,
    setSelectedTemplate: og
  } = Oo.actions,
  Us = {
    getMyTemplate: as,
    getSelectedTemplate: is,
    getApprovedList: os,
    getRandomList: rs,
    selectTemplate: cs
  },
  rg = Oo.reducer,
  ls = Q("reward/getList", async ({
    userId: t
  }) => (await X.getRewards({
    userId: t
  })).data),
  sa = Q("reward/getById", async ({
    rewardId: t
  }) => (await X.getRewardById({
    rewardId: t
  })).data),
  cg = {
    showPopup: !1,
    id: null,
    rewardUserId: null,
    active: null,
    list: Ta.getInitialState(),
    getListStatus: p.idle,
    getRewardStatus: p.idle
  },
  qo = he({
    name: "reward",
    initialState: cg,
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
        Ta.removeAll(t.list)
      }
    },
    extraReducers: t => {
      t.addCase(ls.pending, n => {
        n.getListStatus = p.pending
      }).addCase(ls.fulfilled, (n, s) => {
        n.list = s.payload, n.getListStatus = p.fulfilled
      }).addCase(ls.rejected, n => {
        n.getListStatus = p.rejected
      }).addCase(sa.pending, n => {
        n.getRewardStatus = p.pending
      }).addCase(sa.fulfilled, (n, s) => {
        n.getRewardStatus = p.fulfilled
      }).addCase(sa.rejected, n => {
        n.getRewardStatus = p.rejected
      })
    }
  }),
  {
    setRewardId: lg,
    clearRewardId: dg,
    addReward: Xk,
    removeReward: Wk,
    clearInventoryList: ug,
    showRewardPopup: mg,
    hideRewardPopup: Ag
  } = qo.actions,
  pg = {
    getListByUserId: ls
  },
  hg = qo.reducer,
  jn = br({
    reducer: {
      auth: Ph,
      daily: Kh,
      main: Op,
      color: Np,
      device: Al,
      mining: ru,
      layout: Bh,
      canvas: UA,
      ratings: Rh,
      user: dd,
      squad: Oh,
      progress: QA,
      history: Uh,
      shop: jc,
      toast: hd,
      template: Jh,
      tournament: rg,
      reward: hg
    },
    devTools: !1,
    middleware: t => [vn.middleware, Eo.middleware, Rs.middleware, At.middleware, Bo.middleware, ...t()]
  }),
  ds = [],
  gg = async ({
    dispatch: t,
    flyCoords: n,
    paintCoords: s,
    activeColor: a
  }) => {
    const i = v.mainImage.worldTemplate.isExtraRepaintReward({
      coords: s,
      repaintColor: a
    });
    await t(Rp({
      flyCoords: n,
      isExtraReward: i
    })), v.mainImage.paintPixel({
      id: $e(s),
      color: wt(a)
    }), v.mainImage.updateTexture(), await t(jp(a)), await t(RA(s)), await t(ou());
    const o = X.startRepaint({
      pixelId: $e(s),
      newColor: a
    });
    ds.push(o);
    try {
      const r = await o;
      r.status === 200 && (r.data.reward_user && r.data.reward_user.reward_id && (v.mainImage.reward.add(s), t(lg({
        rewardId: r.data.reward_user.reward_id,
        rewardUserId: r.data.reward_user.id
      }))), t(Ki(r.data.balance)))
    } catch (r) {
      console.log(r, r.response.data.code === 16), r.response.data.code === 16 && t(Ne.info())
    }
  }, _g = ({
    history: t,
    dispatch: n,
    paintCoords: s
  }) => {
    n(Ds()), t && t.push("/energy-over"), n(It(s)), v.mainImage.selectedPixel.draw(s)
  }, Lo = async ({
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
        if (ds.length > 0 && !(await Promise.allSettled(ds)).every(I => I.status === p.fulfilled || I.status === p.rejected)) return;
        const h = await Sh({
          dispatch: s,
          state: d
        });
        if (h === p.pending) return;
        ds.length = 0, h || (m = !0)
      } else m = !0;
    if (m) {
      _g({
        history: t,
        dispatch: s,
        paintCoords: i
      });
      return
    }
    gg({
      dispatch: s,
      flyCoords: a,
      paintCoords: i,
      activeColor: l
    })
  }, fg = () => {
    const t = _(),
      n = Z(),
      s = c(f => f.canvas.pixelInfo),
      a = c(f => f.color.active),
      i = c(f => f.user.user),
      o = c(f => f.mining.charges),
      r = c(f => f.canvas.coords),
      l = c(f => f.main.fastMode),
      d = c(f => f.main.currentFastType),
      m = c(f => f.main.fastEnergy),
      h = c(f => f.shop.available[1]),
      g = c(f => f.shop.products[1]),
      I = {
        bomb: 2,
        paintcan: 6,
        pumpkin: 7
      },
      b = c(f => f.shop.products[I[d]]);
    return e.jsxs("button", {
      className: oe.button,
      onPointerUp: f => {
        if (l) {
          f.stopPropagation(), t(Ds());
          return
        }
        Lo({
          dispatch: t,
          history: n,
          pixelInfo: s,
          activeColor: a,
          user: i,
          flyCoords: {
            x: f.clientX,
            y: f.clientY
          },
          paintCoords: r,
          charges: o,
          state: jn.getState()
        })
      },
      children: [e.jsx(Kp, {}), e.jsx("span", {
        className: oe.button_text,
        children: o === 0 ? h > 0 && m ? e.jsxs("div", {
          className: oe.inner_wrapper_button,
          style: {
            gap: "8px"
          },
          children: [e.jsx("span", {
            children: "Use"
          }), e.jsxs("div", {
            className: oe.inner_wrapper_button,
            style: {
              gap: "3px"
            },
            children: [e.jsx("img", {
              alt: "img",
              className: oe.image,
              src: g.image_url
            }), e.jsx("span", {
              children: g.name
            })]
          })]
        }) : "No energy" : l ? e.jsxs("span", {
          className: oe.flash_mode_button_text,
          children: ["Fast mode ", e.jsx(N, {
            size: 12,
            children: ""
          })]
        }) : d ? e.jsxs("div", {
          className: oe.inner_wrapper_button,
          style: {
            gap: "8px"
          },
          children: [e.jsx("span", {
            children: "Fast mode"
          }), e.jsxs("div", {
            className: oe.inner_wrapper_button,
            style: {
              gap: "5px"
            },
            children: [e.jsx("img", {
              alt: "img",
              className: oe.image,
              src: b.image_url
            }), e.jsx("span", {
              children: b.name
            })]
          })]
        }) : "Paint"
      })]
    })
  };
class xg {
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
class yg {
  constructor({
    app: n,
    viewport: s,
    store: a,
    mainImage: i
  }) {
    zs(this, "isCoordsInExtraRewardZone", ({
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
      if (i.type === ge.my || !this.isCoordsInExtraRewardZone({
          coords: n,
          x1: i.x,
          y1: i.y,
          imageSize: i.imageSize
        })) continue;
      const o = ys({
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
          const r = ys({
              x: i,
              y: o,
              width: s.imageSize
            }),
            l = cn(s.imageData[r], s.imageData[r + 1], s.imageData[r + 2]);
          ut.includes(l) || (n[n.length - 1][l] || (n[n.length - 1][l] = 0), n[n.length - 1][l] += 1)
        }
      }
    })
  }
}
const vg = ({
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
        dt({
          x: l,
          y: d
        }) && s++
      }
    return s
  },
  wg = async ({
    coords: t,
    dispatch: n,
    repaintReward: s,
    amount: a,
    state: i
  }) => {
    var r, l;
    if (!a && i && (a = i.shop.available[2]), !a || a === 0) {
      n(Ps(10)), n(et(2)), n(tt()), n(St());
      return
    }
    v.mainImage.bomb.boom(t), n(Ts.useProduct({
      pixelId: $e(t),
      productId: 2
    })), n(Pt(s * vg(t))), n(Ss({
      product: 2,
      amount: 1
    })), (l = (r = window.Telegram.WebApp) == null ? void 0 : r.HapticFeedback) == null || l.notificationOccurred("error")
  }, jg = () => {
    const t = _(),
      n = 2,
      s = c(ke),
      a = c(d => d.shop.available[n]);
    c(d => d.main.fastMode);
    const i = c(d => d.main.currentFastType),
      r = 10 + String(a).length * 6,
      l = [C.button, C.fast_type_button];
    return i === "bomb" && l.push(C.fast_mode_button_enabled), s ? e.jsxs("button", {
      className: `${l.join(" ")} ${C.shop_button}`,
      onPointerUp: () => {
        if (i === "bomb") {
          t(St());
          return
        }!a || a === 0 ? (t(et(n)), t(tt())) : t(ks("bomb"))
      },
      children: [e.jsx("img", {
        alt: "img",
        className: C.button_image,
        src: Qi
      }), e.jsx("div", {
        className: C.available,
        style: {
          width: r
        },
        children: !a || a === 0 ? e.jsx(N, {
          children: ""
        }) : e.jsx(yn, {
          number: a,
          fontSize: 11,
          fontWeight: 400,
          gap: 3
        })
      })]
    }) : null
  }, bg = ({
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
        dt({
          x: l,
          y: d
        }) && s++
      }
    return s
  }, Ng = async ({
    coords: t,
    dispatch: n,
    repaintReward: s,
    activeColor: a,
    amount: i,
    state: o
  }) => {
    var l, d;
    if (!i && o && (i = o.shop.available[6]), !i || i === 0) {
      n(Ps(10)), n(et(6)), n(tt()), n(St());
      return
    }
    v.mainImage.paintSquare({
      x: t.x - 1,
      y: t.y - 1,
      size: 3,
      colors: Array.from(Array(3 * 3), () => a)
    }), n(Ts.useProduct({
      pixelId: $e(t),
      productId: 6,
      color: a
    })), n(Pt(s * bg(t))), n(Ss({
      product: 6,
      amount: 1
    })), (d = (l = window.Telegram.WebApp) == null ? void 0 : l.HapticFeedback) == null || d.notificationOccurred("error")
  }, Ig = () => {
    const t = _(),
      n = 6,
      s = c(ke),
      a = c(d => d.shop.available[n]);
    c(d => d.main.fastMode);
    const i = c(d => d.main.currentFastType),
      r = 10 + String(a).length * 6,
      l = [C.button, C.fast_type_button];
    return i === "paintcan" && l.push(C.fast_mode_button_enabled), s ? e.jsxs("button", {
      className: `${l.join(" ")} ${C.shop_button}`,
      onPointerUp: () => {
        if (i === "paintcan") {
          t(St());
          return
        }!a || a === 0 ? (t(et(n)), t(tt())) : t(ks("paintcan"))
      },
      children: [e.jsx("img", {
        alt: "img",
        className: C.button_image,
        src: zi
      }), e.jsx("div", {
        className: C.available,
        style: {
          width: r
        },
        children: !a || a === 0 ? e.jsx(N, {
          children: ""
        }) : e.jsx(yn, {
          number: a,
          fontSize: 11,
          fontWeight: 400,
          gap: 3
        })
      })]
    }) : null
  }, Cg = "data:image/png;base64,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", Pg = "data:image/png;base64,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", Sg = "data:image/png;base64,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", Tg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABRlJREFUeJztnL9uFDEQxr9D8AKhSMdzXLqLQpXykGhQJMqDhwjiHiKkRDrRICVlKlDScc9Bl4K8AMVSJN7Mbmyv7bXHO8f8muT29uxZf57x+M8doCiKoiiKoiiKoiiKoiiKoiiKoiiMzGobkIGm91r0M8k0frNqRTg9vuu8tb7ae3xxci7u+cQZjM2q6YvgYn21J04UUcbGiGGQJsqz2gZEEC0G0Ia0/jgzWSQJgs9/f7f/r6/2uuOF4zr9jASe1zYgFeMtfVFSvGhKiImtAJrTP28B3Pf6Ty9eeW+m96xffgeEPKuokAU8esTnv7+t4Yhet4W0qSM2ZBmkjRFDiBLE9PihcGX7jBTEhSwgrJGlCWEQMdARGmxWnQvepRMAODkHBD2nSA+hUAGkegVF1BjiYheEMIj0kNPjO+8EcOj9KSPJQxpsVk8a2jeGnB7fYb1ZASfnDYSMIyI9ZJcR0Wtgya4Mg1mWQUi2JSlkWdmlAR0Q0GPg8I7rr+cAgMWb7vWbi/u/h+8tHiXAS6ZknHMT6fqo+7ovggsjjuHwp/f2SbTFFEJWA4Q1er+BQzFlNaRMi1imQ1QVpmblwUIYbi7CvSP0Mx4vqtI2tdLe5voIaM66jRXb2Dno19+ctZ2kyj58jV7QNGcVak1g9vH+D2udnJVBkBgGblE4BRkUox/PS4Ww2Ho4ReESxCtGaPaUKlCO8rlEqS4IbazFGwDLefeGy+3TeyLIVf4uCdJcH7kf1DTG4tvcfoO57912lBGh5fvsfEiJi7YZiyA272iFsPVayv6vx8+8TjN38YNksLcH7huJt9iE4fCS0vOQpj/xA3ox3SXG/q+OGNnwlUtssY07HPOTUoI0GGN4CSHy1jHu+TyUcL/g9LYTrmgD3R4Al2FjRnKqvJw/rRMYDFuUEiGs7uIiDVdfmOeol1t02tLYspwDF+MSiDEUFyQoZQ30Bl/Z9FrSfOVy6xzPxqTdseTulsFLI6FhYZAPvVA+0tNi7codtqoJkoW+GAbG8JdbELmnTnxzF997EydnV+JfyXU1fOKYlEpOL5nCFm46zA3PAXvISt0Xr0ENW+WOITtKFUEkeEktG9kmhkN5fbZ5SSSu5f/FsrvkT+1LnnwGkFOQ2exjeqZlHpBLmNB9GNfnDLnnIexZlllQvHm3tTa66YG2kJFzCzdECFd9JTtLnZk63Xew7NS1IcE1E8+Bb6PKEJBW78RMncbmxbf50/g9tIs4lgAxbOMHB9OZGNoEuD3Iv1kV4hk9OBON4iHLlZG012M8IVGckL146qVmfKO2u55D3GqvN2tKDUuhwlh2AV20gkQux4gTBBjI25dz7+ZQFizl+44VWRMMByLTXm8MNo1VWpRAm4wnGSG4J6psWZY3ZFBRJrCCW3NpJ7eHOGfrQT3NcsyzKLQ+Ulet7dvshT0QdwzIBkfoehDAZkvNY0ClNp9bUXxpryHqLFUOHJ43ZBN9llLHSqtNDE2eD0SsnhYMYZxHfXyUGtRnDz0IQNggWXMgjbWv5KHrkudlOgeth9JMClcPjamb3lvyawmlDzANilJrYyrGDi4xihZMsH4lwUXMd8q5y9yVL+wAkaJQcntOqqgcYrBUQEgWBRgvzJikgUsMgHeDajbw4y+ThFMM1ooIozyFE24x2CsjtJvlNnEOf9qv58RVR8+L2dtnCr8RZTvJMHNcjxbKEyZddfy3P8+USuxRFInPqCiKoiiKoiiKoiiKoiiT5x+58vqZVePedgAAAABJRU5ErkJggg==", Eg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAA7JJREFUeJztm8tx6jAUhn/fuWkgWZBV6iBtsODWkBQBQ4pIaggL2oA6WCULV8BCd2ELhCzbMhifI/x/M5kMfunx+zx0bAOEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghZKRk0h24lkU+N+7vj6d10mP6K92BS7FCrA778x3l9lSFSbLTi3xuKkJ4LB9ekhTlj3QHurLI52b1+A2gmHQfu231+F1xZymQ3B0EwBhjgN9XAFVRjpYz2SLLMiCxMSbV2RJjfqZRB2bPOyCxMSbnsizLhxdgsq3umGyDriwVks2yjoRESZikzNnBLPI5gGraa63j42kNJDi+ZF2WxXVPKbsqS/ouC/chhCV5C7k3UrQQs8jnWB32WD68BGPI6rAH8jk+ntYGicURWogyUrp7DADY7AoAVt9rYOYtEjc7LP+djimzLSCRsWruZKUOZT69Db4Yls3u7Gf2HjxK5dg1xhADeJMfsIIoyvPMrHpe9n4UXJUw2mKIMZ8tYrRtjzzHaUdVRViTIEXR0J3Mpkm/FO/6ZaFSjSgazPU4GbFV3L4pq8LHnyKd0NA46krpbTEi1nIuuI50yV6TyypwJ3E2Bd5M8edOXkxQ7+s6AyNpIUU25VuInaS3Grf+1bHLbdfxrMRxXyJzI2UhRTYVEsPezXU07etyrLUWz0rMz1Q0+9LnsoZ84KTw4ZY+QUaOhJ8sMis/6AKnO7Z8o6SVuqAcm4X57Xl9ksi45AQJYWNIF3y3EytmRJtjECT6FZ4o6mJAV1EaGFoUxhBlDClIv9YxEEPXujSW3+Pp0TVpQY/LkixjKCqhyFmInYS2p359l+CDpZmsuv8Wpf8IhrSQzCtzNzObBksbV7HZnYqMMcdi+CxLTwxpesrni3Jp+b1OCCFrCKFrHTLZhquwt645NSQHXIfEupRboCC46w3qfVjF72v9JFvRXetQ4LrkLCQ0eDs5fa4vrMX5VveVFX9WMAXWAUgH9TpRJtvT/1u3J5zm+sjHkNCd6Ypyh6vxJoa2kCx73p1nWk13ZtfnI224FhdxzTGU34FLiox9uS43yEe4qHEJEpqYSxeAXWlqx+nXeATp+iJ1X8LEXPv8hWxgBIIATaIMlfW0WKiEGCINOpjK9x4hmlLVG50rJYZYow5xogDXW0ykiJJiiDbsEC8K0F2YDitwaTHEG3c4fZLQRZwe8D53E58P8Q4EiCr1tglX811h8NDoIwdAVWc60iZcymMjhBBCCCGEEEIIIYQQQgghhBBCiMd/ML9eI+BDYUAAAAAASUVORK5CYII=", Bg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAActJREFUeJzt2kFugzAQheFp1UXEtidjg3IaInqZRt3kZGyT7NyVU2NwcAQVfuj/pEitSCSHp7E9DmYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOR723oAS7V948L/vz5/5L+TrLZvnLt9u1AckJr3rQew2OH49/f9vN04VqIfSCgMR5R+IDuoitDH1gNY6nS9WLf1IFakXyE7I18hXVUP147rZbvBrEAyEL+17ap6dK2rarPenBk9yb9r+8aNeo+oD4l7EvW+pFht38wG8CyYrce/K48w4kBu3+OAEtVDKCsZTFFT1eFDCV+JgBRCKXrb2/aNG+2i5sTvPRwfzWNX1aPDSGQaTVPP1o5UdSSulxyKxrZ3rkJyrwscsxQ9Za3tJNA07j+QoCqmGsnSaATib+rUlHM/D18xsSN5jTXEm7q5uTf8fpYIRyOQV29kWCn+swJhmKlNWbkOR6mdVUgjkKC5e/lzIpUhYdAcpo5O5og9lVJ+hYS7J18pudUSv09g+ir+B5zHeVYstUY8eSzodL0U/6NV0YPzkqF4Gc9mKYRhJhKI2fiR0bmuOz4mUQjDTCiQ2NzirBIAAAAAAAAAAAAAAAAAAAAAAADAQr/gsiaUUMmhEAAAAABJRU5ErkJggg==", Dg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAQlJREFUeJzt2E1ug0AMBlCn6iK9YXpCckOymy76IxipKaSRGFvvSSxgZfjwGCYCAAAAAAAAAAAAAAAAAAAAAEo6HV3Af7V5asvz09t76nt6ObqApzhfPo8CagRSiEAGI5DBpB2AP8O8nx23a0TkHe6piu6/qO4O8q9gInKFk6bQNk9tFcDigf95/XZNFcrw2jy1leX5PK2P3/TdNaicQ33ZERuXLZ7k7lu/V4IuydkhheULpPgylC+Q86V0KK9HF/CQrYO8yIbjcB4e7N3n8dH3sUW+JSui9JKVxurHb2/HJOmOiERbJxE79rK6Dsq0bZKm0G973/ZMYQAAAAAAAAAAAAAAAAAAMIgPNT9HzAKUgvAAAAAASUVORK5CYII=", kg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAU1JREFUeJzt2MFOwkAQBuCtJ/XtvBR9mRKfptx8snK03NaDQCoWQii6TPm+hAAlaYYd/p2WlAAAAAAAAAAAAAAAAAAAAAAg5Zxz7ttcug628s5BU/JAqdouVZUuYIpzFryqqlDf8aF0AfwUtiERt6NzhIpzStMbcetbWIiERB3QlwjRkJ2pTVmuF9cq5b7lawhyvxIqIRfbrNLy86N0FfOR+/ZuEhLG2ALPsSlhtqyrDOTH1+nn+GNhGpJSSmmz+vlMOblvx7epU8cHStc/O0cX/tRMGRwrXf/sNF2dc9/mpqv3j8MmNF39qyel656tfUIOkzB4P9aQpqtDNSXWUE/p+JXSZpXen18M/P82loBTqYlw7zEULyHDBGxfH/4tUj29Vcv14vvzAPce4Y398qMmYhbGFn038EvUwwiXuAAAAAAAAAAAAAAAAAC37gv48l2z+Bjx4gAAAABJRU5ErkJggg==", Rg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAmpJREFUeJzt2jGPokAUwPHH5YqNpfuBtqcz2eA223tfAgOf4noLvY2Jnb0fCEq1mysUFoaBA8Tjkfx/iQmMkgzz5g3M2xUBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4n8IkMLJZmbH78Qw/xu5AX6GfSjEoYRIYc9maMAkqbZlxetqNN3YH+igOeiaaLURePhqv8zxP/f3+HLsDj2oTCBERue6e35kBTCYgDy05152sz4cBe/M86lM4Yy5b0yoTbPfMcAUkfv1Sd/+Teaj3muETWaaKVAfEGFN+c+o6wC8f+SeaLUpfxcf5UN0clLqULSo9N+7PgdYPcYd1usyPNS5XIsozpMQxy7vKrteaHSKKA+Laa/TNjMr1n79VZoc69s66dHwXJkGlrZPLdhI7dhVcAbDbwiQwlcB1NPZ9TkbtIF+235+GYLXlXA5R1bgcNQWrK5at9uoGuFewGmjNEnVvWd7+VN0AttkQXnedNo6PvkI/i8ri4vp8kMg6F5HbgNuvvnabKyiua5RS+T6eLSdNs7hY24rmf77b02Xp3FXp1bpLF1GaIZm8VFLXfp/5xZKI67dToi8gm5URSfNTb3/Kj0M/dV1RCpq3P0ksv0RExLy/STRb5EHRnBkZdQGxBz300/oscbSF/u3YWa/arIz2som6gPRVqQT7y8ktVyJKH+pFdZs4b3/Ksyk+zsW8v92+yAJS85dC7cuWun2IrWmWx8d5dWmy9iPx65enudxuUz1bMnaWrM+H8kzfrEyeIU2/wzCKxcW6kkdeAf7H7zAA138lAgAAAAAAAAAAAAAAAAAAAAAAQERE/gL4iAFGuCkFvAAAAABJRU5ErkJggg==", Mg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAtJJREFUeJzt2jFv2kAYxvHnqg6UMflA2dmQIkqG7PRLGMGnyE4laITElp0PBGNguw5wrn0QG1OUe93+fxMIA+Yev/faZyQAAAAAAAAAAAAAAAAAAAAAAAAAAACD/G7uU+8DCvxR5Ta7uSe4TxIC+XDAZyNfF5rfzWu3wYV8JH492wwqB7sYBoHcQBxIlWwz8HEAJUxrf69JIHVKHzwbEc41bpZGqI7ZyGebAWFco3L6aShMZ4TxF26Whvd5GOdCTv07W+GW1VEXVOrfWuRSfbGVI9M5l2wMzvmS7Jv3i2RfbWofIkmPjtRVYq06pJQVouOAGDxKUzJxhCSrlP1C7tuTiTEIklZILkWV7BdSZ1i/ePnfOV45hyV0ExKGk75Cnl+cJI3fV6n35CDxNJY+EEnTt7s/T1I1+f1CzjmXuqeYamilqaIzzOf5WpduF79HoqlfrMkgh/AashaGZCmQz74/0bSiPomdQFRu7Fc1+f3C5HJIE19T70CQ9bb54zyMJj2k6rl0+jlGgzMRSGjmcVWM31eaXPIBH4VWHHSjAcRMTVnBpNuXdDgdrp26qiqoM6x83eLdQxNnGXGFTLr9yiDCdYt/fLj6dDcYv680vX81MQ6ShUBmI1/sH9JhwP3jw0kok26/HEBdj4mnqYqpzcopsIkeUhSOfrdcyz9GlRIP6EcXj/vF+QorVEO2Gfg84M5Q0tMtf8bVkgeS9bblpZPj2pYkjXtbP+n25ZZrxVWU6wzlfv44TF/hfWfCiKfB6f2rm+pV2WZlqo+YKNM6oflO7n6dvrhfyC3Xh+0KoU3f7pT1tnkQlvpElVbspBRNMQXj7XdJ0QKlCg3fUH/455zcLwn3UM7dR2npn+KS95AmiheK+TSUr4GtyxsXelGbtG6n/W7u3XJdHvDo1Lkt/eIck1fqteKj//nFxT0EFvDPdgAAAAAAAAAAAAAAAAAAALTXb7LTHFrMPO3DAAAAAElFTkSuQmCC", Ug = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABLlJREFUeJztnLFu2zAQhk9Nh9Sj+jxGd28GgiAF0tFBtsxZLFhv0KlBMrpA0iCFN++FnycenSwFO1hUKIoUaVni0en/AQEMWZSJ+3nk8XgKEQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIDDYvp8Krj7ABTEy73YSZT5paD55UGL+JG7Ay5mgzHRM4n882Piunc6WhMRUd57r/rjA3cHfJgNxu7p6+JIGD9bmD6fCvFyL8TLfVQedRCCEHmIMpyYP2tIIWaDcZfd64zopywV6/RVeES+TI3tps+n0Qqg45yXOdnVkNlmQURvwkxHa3K1zzYL8lmfQhFNR2z0Pccnn77Wve32L5td4p6ydg1hj8/M118fjJelRxHRVojhhOjbDesgjVoQGcY6sQmhfm8QJV+mZaCQL1Oi1d3OfeyaaAXxWj9cQuwK41QliVIQpxgdCTEdrasBgGG9qq0xPcM+InR6E8OyjjTBEYHFIYiyeIvzH9XvVEPu4xktBAntHUQBpyxn+GoztmVBfq8ES51UQkwdn5Ef2Dsa+9sjwQRh2w239C6u/gZNLlpHXZPRGKYrLu8gCixI/vkx8Rbl9aF6rY0wB7j2sLjlXtlX37VEF8PUzpFS4Zi22MLevVPiPnkrH/E0UbLN4i1DLNu/PgTbk4QVRCbwCnzS461p4UmlGDt6U5dChT0xvP2b6Am8XhbQFiFyxTN0DGJkmwUln74mXXtN+CNcRRSZR+KMaow0BBN9CSHhOVMP5SkuFGPXjn+1KK9vISR8RQ4GUXRqIh2fvf3tgx5S236PwgkhYU8u6pUkch43Rjs6PhGSo41sR1Q9iyf6z8Jeia20x2lYIqtxdy2MmKW/yuclT39Yj3Hjr8uy7bY72IXXxDs+I3HyZe/n7gOvIJYKQ+MCq352iOETIFTuiSjFwu4huvFtxW4+Qqjts83CukgbBVOfz1iwzXumrpV8lmKs7ihrsYvfGjo1XGtuo/6O6Rkh4RPEoyBaGtNHmGyzKEt58hURDSfeZUS6aNPRmq2Cnk8QxTvyZVoznnrNNcq3nqWN6tUd5bT9DTVnFl1WQIMnvNOSjERK7K9MWz6jvHK/RGvXVOtrEyhfpizhbzSCEFXrpJzYdvnDN69QUZ/blGVWBeIQhUcQUxRTeIQL2ygvS0EbBKl5oeV5tecGFCV82GtbzIcTZ21taTwtnzUbjBs9osnr8mVKydMfYzhcPjdgGBzeQ0zTlS5EsQbohhQnX+qpFGVvklyde3lZDdUDCuPrnhOqaC58lCUNpoqgFznf3lA+vxTT0Zry69/tjNyEEjDUvKcQJyeifJ6W4oSCPbnYiCoKEYnvP7fXlbNuleTqfPvBJqAcBKoYzO+D6ETVGSNSlGXamPjLNotSOCKqiqIJQcQX1rqIrkNWCmFMEVEZDRGZA4NCiNlgzBI57UKU74cY+XaTkOHsRBpYjvzZyU9j82yzKM464nnB00TUnatReImKvqfQKb+P1CN0DsdDDFSmnosjka8sN0bwqpovB9NRSfmS5vXvuqFNe5wD8QwJ+wFVG4xiEHlVsoCu8ThHoYsj8R7+VdP7QooCAAAAAAAAAAAAAAAAAAAAAAAAAAC65x9TXHckk+SwIwAAAABJRU5ErkJggg==", Fg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABolJREFUeJztnL9v6joUx49f7/IY6d+DurOhVpWe9Bhbsb35LqnI0vltCEaeVKniio0d8feUsZ0qvwFO6jjHjpPYjuk9H6lSSyFx8s355WMDwDAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAXTfZ2L7O3e9n3OPrkj74HQLKe/baiJCmIvLuB39VSRN8DKHG2DHl3AwAAT+9byK9fa8eI4rm8N3WSsxAUAwBgPpg0s5Rv4Op+9D2AOuaDCcAbSOPTv57JfBd5UAFJy0KmC/KmGy1lPZPZ+Fj8qf5+qSTnc+XHi9Ht6DGFEinfDY3CWlHEbX0MD6RlITUxYD6Y1L63lZXox+pJDIALiCE62du9zK9fhfXGr2eSuql6Npa93UtVZLHZex9vU9JyWeuZVLMsE0/v29r36K6tZF0GxJ9/9X4/eh+AiuuNs6GL1eR4KQiSnMt6et82uok6bT/rYnUxSE6Qvsh3w3Jw7ymwsyAaRerb0/nDpr3rmXSazljPJMYPyuXo7uTpfevdxaRSVCZTh9h8/3wwKQlgey+K1VSw+WAC2fh4cl0a8uNFyo+XKL0aby5LH6zvahdFUcXAm46vdbWa+WACMN6WRIndBvAXuLSpB6cpdOUzLtmRfsPz3ZB0NerruoCuWRi+Vz1njOl9vydQ4kXTAs9VENUa8ElWRaFeU193GR8lXKwaxW+WhS7KsS+h3twu9Qfl93VKE4eO40Ji1ihBVG9TcevxwPR/pIkI6vsxcLtYMJ43Zicy2Im6iIJQ7qnzuBrGrNht4WBpb379KtqYulqLOKWvh9XJVR5Wjc5Td9ziIYjcFg5ah+S7IYjNvpUPRlHy3ZC2DhRi+Xl6gpefZVEchDKNC+OZq1vzSdjC8Bzk9fSxM4cVFEKoqKJQ/4evWIJCi82+8kNdQyzCn0zpcdgyKZNgFetoc4MerySMHkovZeOj01hMUzn59avQe/oA3WsV73WIntmYpiP0C6EqcDxGgckyGowPf21ah+iIzZ4uSjsK4r8OUaYa8KLnd6cLUG+CmuY6Be4uQgCcrOTszrLn206HAvi6Nt9t3zAu62wper9afyqbtmJ9gHNTXTuTSCkl9xBvwgT16UJgwESy8ZEUwDTlXpDgakR1RrmYRPUU/MMG9fPNVK3FVvyZ8DZzTARh0zSJbfqkVLB6tuCwHcPpQlBPuCmAU/iq0AHozMpWi6jg58RmD/M7/2NDwrdwpwuRr2cSxvSFU0E9xIWeHoxqVqT2WUz9lcrML7riADVKnI7hdCFcTZsUw8eFH1ZWoU2WQsY3jzFDJ94iB+UJtbkpyq0IAHIlYhtcuoxWNzYNO9kYbVrAtRVqrYy7olXsTRc2xJj5jWYhpnar62e9sPwU2fNRqvNZphYwyeOV7Fyg1hBv1UmNy8F6hHQXnv21vLspfiiMD442HxaCeII8XhldluqmUJSn9y09+9oR3SWailJSlIY9lzbEE2T00Mj1YD9C3ZHbeB/7eQFeUQs1rPr7WDwXJ6grwdR0kWrWUzfPpE5/AwDp0qgWsunYzsVphN5IHEGUJ9PlqXPay6FMVorNvnyzLPtMTIvt6oi1zS18lqXFji7ZlolsfARQdkfZjt+2e5mNj5B/iyyrRWbSZXEEbhoNspYqQpYVpYVLvYydRFdrsbkZWyvWZTKxydrg0MVhWEGIXjYAABxWkD3fGpd9Ii43yiUBcMF5gd7PX927lxbCxhCLiePqQbHZO1lK2+WdtpihpuE5nOodfSFdxTJHDwDLhdO52xDOQizWUTB6KERRqWsiIa7rgSlBjGu9zuMyrXAMvZoxnIXoYlBV7mEFAqAiSml/Ro3ldN0kWoxNdUPLxWlL2+OVzOFXSaDQhLOQmr0fRT/6LJT89z/jGt66Tl+bOFKcB+NZIl/tFHcQWJMQT1yTvR4mmsQZfBiy51uYDyZJ7FEH6POLA9QYQ627UhZI+EK3PrQ88c/fQTOnJvS3LXr5KUJmK7Wce/35IR0xAFLep35YFYlB05SXzIxC9eo9k8y26Ar69gILxi0LJiL0NdqS3BOiQ32hGVqIa0YWctmOb9J1WTWYLCLfDaG6BizAOq9ApOuyDFTiwWFV2S1VmhIJseguIMlbiGlvOpkqLz8FjODUF7kwIZDkBQEgYoaP/SKJchGCAHxV1rVCKOly5fUL4CJiiLMYAEW6XPk+329qUZfDeibxa5VS3PTDMAzDMAzDMAzDMAzDMAzDfGf+Bzso/MsnGLo4AAAAAElFTkSuQmCC", Og = "data:image/png;base64,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", Qg = "data:image/png;base64,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", zg = "data:image/png;base64,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", qg = "data:image/png;base64,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", Lg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABRVJREFUeJztnL1uIjEQx2ejkNc4gURHRRUpDS9AneqaPNg1V12dF6CJREVFhwS61wjFXnNGE2N7Z/yx683+f1IKYGFtz4znw7MhAgAAAAAAAAAgZvZM7dBjAAAAAZv1qg29BgCACBAJjYCx7vdjHTcYA9AuAL4zCE4AAAAAAAAIgqQYAJvYRLKx3zDmtTsc7z7rk8161S6W89vr8+lCRMOPqzSdk9usV23uRZg9U3vd++9tC4NzPl1GJ5Su+XKqnNjb6zZo7mMUipQH3wc1F9Nc1jN7prbmMUvxCoTT90SNvwjBQ0k+vrELpVqz79q2iIh+/XlviO6FIN2vDdxnDb0diiykBKEtRppIbdardrNefXGYKcIgcm+HfTKIQEJbTCjCCnHdU2OEkZoZD5lZP5b8cb7YGs09ny6dmhryM9otR+Kz+qKYhdia7xOOT1ChRXJ9FhtluYQ3pA8pYiGShZFYjERzfYunScZqymkGc+ouZs8UXRXgPsS89t2j5pwl2kJK1JrMIu4Ox4Y71o+n45frXj5XyfeqlVtUoplcVyR0Pl3uFpFrrPm+JOb3abJtATXlEimoB60JS10L47Isc42r0iwViJ1ISoUiqW5LFDCXAjwQ6coNmhxhsZxHxfTmO5px8QAgJYx1jbdrzovlnN5et21K/mK++0ikz25TyRX329rNf1eqsfZ1LouWjmexnNPucOy+MDAOlVOP1QDuo2yH7RqU4bqnxmUlLgXKsWWk1sRyoLqhpODHidFYF7EZf+w9OD9/bFW/o/UntpVXlYf4MDnGEBr7+++7+juanWR3ODZcgKotS1Jj4tdODVe4r0VlIbvDsZEsdClhDJVdn0+X21/oGi6M2LGqM/X/5tUS3YeDsYLgdSczEdf2VHLL8gUQNqUtP3qC2n1Sem1IICUxyZ/tM7RnLMZKYsdfnUD6xJeBhyKlrnmnzjWqdMJvXHqAJYktiUjzqBiSz0P4IMbWVCwpibgy793hePM3uSvPsU5d/dl3gjv/j6ejs5JNdG9hEv+YnBiazo+xWYems0Xzm3YHi3ZdimbqtQpKWzC0r3edTPr8EX9PUm0YRemkRuzFDfkjjQJMYs+34QskaTeS+EZJ4VXyW5O3EFfmLSmVSH7HRuJTijbK1YqdQ2nLIb5jX03x1UeyQDSljqHKIj5STgdLkbQw2hO2Pg6ahkLilyStUkW2LF9ylEsIrhCzptYfs/B8DaQkCYSXrK97arSd65p2T04g3s/+PKQUV23PJYiu8SVbSIrWxzzLEfp8aKHkIPuW5etM569jhCh1uCmtODnQdNW4yJqH2Af2RPd9uUTjfQ5QqhQpFpp0QOVrCeVIW0El9+OvQ77KPHtYG5KwX71ldRTRetu/fUlYn90umqZxIpkSqjsXQ5pZUii5opgYfD7QrEXOeYt9iDSkta8xJ2qclMis7wjKteW63ottLLcRCySlRvPyucrafZhTKG+v29ZVqR2qJahI2Msns9uX0WhXeJlTUFLFydW/bBALRFrJtMPc2GxcQo4FSNHyUM4Rizr0DAnF15g8pkKiKzTt8zEF9ZZlF86+vP+UZ1BDYf+HCbPwfSqUSiDcRFMd2nd5SDM32VtJQ0/f2t/nVlY6u5YqgC+b7utwLTrKStVo00VvMt2SeP7jjzORy31mo7X+SWwTMU3VOe+nuc9kuk5sK6z1Ca9JdZ30KYTYe03CQvqO4BAxAgAAAAAAAAAAAAAAwNT5BzZPhVZ/4M1WAAAAAElFTkSuQmCC", Hg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAA0xJREFUeJztnDtyIjEQhputvQhUkU00J5gLEJNzMOeOfQFOQERGFRxlNljkkuXR+9WS/i+xXXgGTf90q7slQQQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAODArvYATCzztB6O+++/n48XERFdb3fW446B7YOpYsg8H69uRflTewA6dGKI15Z5WgsOpxh/aw/Axsfn1w9PuJxPK9F/Ua63e/L3kz2zhiey9ZDn4/VLDKKfAqX2EjVMmrw0F2wFMX0yhSipDbb1nqVDI/uQZUMYLFVo+fj82tWcn9h6SCwxRpXFLT2HNJ06ykbvJQ3u1kNapQtBevEOIo9JfcQ2Rg2cjGlqYxDZCyhxfepCa5mnNfUHwnbPWFvYsF64NYCtgk38rzqYHEbTEVtlqyn01thFp8BGqDDWC9QB6MQQlBRARR1rDo/0KUZtttrCqzB0eYOac8rz8fqu3kOM4Yru3q7eY8KYZbXQUV3maZXHqeuBpeBw3Bvvrb4WYj+jIDWaazFcb/ddTg91ETpWlOZ7WRzT7ph+mNFDRK0BymEU5Hq77yBKWawh6x0S2E/uvuQqVlV87+38zzXri1To6ogc9QpR2Pzm1VxsIQ0O4XDc0+V8WlM+X6jA2pC1pXLrHmJrAV3OpzV240RsJDE20YjaF0FGrqRzVvIxsBxUDuT5g6sYRJ7rIeL31rxGHnspMUI7z0lWDNV+0uhs7e9ytU8XS7iulChydam1a1+wqdATSs1wKycSLqFrCEEEtYpbn4WzoQSpiasoQ80hNXHN7iBIQVxEYb9AtZW1tH6CypTtsfcQXQrZat1jS73ZeogwOLc2R6oen+76KEFyHf/qsbFJ5LZ8ESSI74axELiKETou1+I0WcjiasDaFNsGJE9OEENPUdu0mulwxnv3e+s1AHeCzkGMKEqpxqT2nIctixpRFB0p93j9mtRdDuhczqc111dbtIiw1/tn2l0nvgd0ekE8d+jz+i5E6TD2skYRIwXZbLXM05riJFBrpNqokaUUQH0RDgTpjOxzRO0vBGuNoushHMTAB4T4hsDURxBAAnKLIrJWbCV1JGetJYdH130AwwvCDbabHHrg/UUGRMR3Hh0aiAIAAAAAAAAAAAAAeuIfG3gINg3W6n8AAAAASUVORK5CYII=", Gg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAolJREFUeJzt3DtSwzAQgOGF4SLJTDpXPoEvkDo9B6On5gI5Qap0zMBRTAFiRPBDr5Vk5f9maEIejleP1cqOCAAAAAAAAAAAAAAAAAAAKGfou9HlMWSwdOIJSoVaDMpT6QOIsT/s5Hy5Jn/foe/G/WEnIiIf759yvlwfkn/IjMdcH6Th5fXtQaOX2AEwgcklW+S36Pl0HEXy95ImaM0nQ9+NOeeqTQ9Za1KdSHpHgFYyrqZ7CApppXeIeK5D7Pxc5Dv7ECk7xrYUDBGPgNjBeHl98w6Aeb1GCpn6/Ya+G5fe87Zh3lJPk4e+G01O7vJcl8e0+Bzr3Ovt45069ufTcTR/S/9T+96+X7DkMBITDBcm4EufsxQwJObaA9UCsoVJM+dq2uckhwxbq+uQ3MW12vkkNOa5PkHZdPndaKm0sdpDzFoDeawG5Hy5quw5IBJBCaN63giKPu9qL0HRtZhlmZNvZzEtZTSa9bVQXmlvLQcd47ZIqnHVCjzEFh8BAL+8Jmk75W1hgtcWcklqsuLiVIp8z8w2sJ3FrW0Ni3AZkIq5E09jtVBhwKK5BrKJDaqpy25qKneE+Pk+/4a2TQRk7nowl0lya6oOiOnWc/vYpYKhmVFWHZDWWr9tbmu86oDUquWGcrfmsiwWhpWJ7nolbyHeqqXsMHgOWbskH9PWKgZJJvWQ+0Xu1doIEhUQhig0z6l1T91bSM8ogCs0/ipawmf/wI9pvLHnbXJh2GIVVZsZ0veHHY05lVT3Bcb0FEonCmLWZVR7LSnvFmPIBzRk6VZUhN1ln0NqCAYNROpdaKr+SAzCaAfFZxXPOkT093PMkOiyiicgmbgGnYBkxM+UVIgEAgAAAAAAINgXIA5u7FTs1dIAAAAASUVORK5CYII=", Vg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAolJREFUeJzt3DtywjAQgOElk4vADJ0rn8AXoKbnYPSpuQAnoKLLTHIUp0iUUYgfeq0si/+bSUN4GK8eq5WNCAAAAAAAAAAAAAAAAADgqXRt07s8hgymTjxBKVCNQXld+gBi7PZbud7uyd+3a5t+t9+KiMjH+6dcb/dN8g8Z8ZLrgzSc3y4bjV5iB8AEJpdskV+j0/HQi+TvJVXQmk+6tulzzlWrHrLmpDqR9I4AtWRcVfcQLKSW3iHiuQ6x83OR7+xDZNkxtqZgiHgExA7G+e3iHQDzeo0UMvX7dW3TT73nY8N8pJ4md23Tm5zc5bkuj2nxOdax19vHO3Tsp+OhN39T/1P73r5fcMlhJCYYLkzApz5nKmBIzLUHqgVkDZNmztW0z0kOGbZm1yG5i2ul80lozHN9grLq8rtRU2ljtoeYtQbymA3I9XZX2XNAJIISRvW8ERR93tVegqJrMssyJ9/OYmrKaDTra6G80t5SDjrGY5FU46oVeIgtPgIAfnlN0nbKW8MEry3kktRkxcWhFPmZmW1gO4ub2xoW4TIgFWMnnsZqocKASWMNZBUbVEOX3ZRU7gjx833+DW2rCMjY9WAuk+TaFB0Q063H9rGXCoZmRll0QGpr/baxrfGiA1KqmhvK0xrLslgYFia66y15C/FaTWWHwXPI3CX5GDZXMUgyqYfcL/Ks5kaQqIAwRKF6Tq176N5CesYCuELjr0VL+Owf+DGNN/a8DS4Ma6yiajND+m6/pTGnkuq+wJieQulEQcy6jGqvJeXdYgz5gIYs3YqKsLvsc0gJwaCBSLkLTdUfiUEY7aD4rOJZh4j+fo4ZEl1W8QQkE9egE5CM+JmSApFAAAAAAAAAoBZf6Exu7Mzk5D8AAAAASUVORK5CYII=", P = ["#ff8600", "#ff1600", "#fdbf13"], Jg = [P[0], P[1], P[0], P[1], P[0], P[1], P[0], P[1], P[0], P[1], P[2], P[1], P[0], P[1], P[0], P[1], P[2], P[1], P[2], P[1], P[0], P[1], P[2], P[1], P[2], P[1], P[2], P[1], P[0], P[1], P[2], P[1], P[2], P[1], P[0], P[1], P[0], P[1], P[2], P[1], P[0], P[1], P[0], P[1], P[0], P[1], P[0], P[1], P[0]];
let Yg = class {
  constructor({
    app: n,
    viewport: s,
    mainImage: a
  }) {
    this.app = n, this.pixiViewport = s.viewport, this.mainImage = a, this.size = 7, this.images = [Cg, Pg, Sg, Tg, Eg, Bg, Dg, kg, Rg, Mg, Ug, Fg, Og, Qg, zg, qg, Lg, Hg, Gg, Vg], this.textureArray = [];
    for (let i = 0; i < this.images.length; i++) {
      let o = PIXI.Texture.from(this.images[i]);
      o.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST, this.textureArray.push(o)
    }
  }
  async boomWithDebounce({
    x: n,
    y: s
  }) {
    await Ji(U(50, 500)), this.boom({
      x: n,
      y: s
    })
  }
  boom({
    x: n,
    y: s
  }) {
    const a = new PIXI.AnimatedSprite(this.textureArray);
    a.loop = !1, a.animationSpeed = .17, a.zIndex = 2, a.x = n, a.y = s, a.scale.set(.5), a.anchor.set(.5, .55), this.pixiViewport.addChild(a), a.play(), a.onComplete = () => {
      this.pixiViewport.removeChild(a)
    }, this.mainImage.paintSquare({
      x: n - Math.floor(this.size / 2),
      y: s - Math.floor(this.size / 2),
      size: this.size,
      colors: Jg
    })
  }
};
const Xg = ({
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
        dt({
          x: l,
          y: d
        }) && s++
      }
    return s
  },
  Wg = async ({
    coords: t,
    dispatch: n,
    repaintReward: s,
    amount: a,
    state: i
  }) => {
    var r, l;
    if (!a && i && (a = i.shop.available[7]), !a || a === 0) {
      n(St());
      return
    }
    v.mainImage.pumpkin.boom(t), n(Ts.useProduct({
      pixelId: $e(t),
      productId: 7
    })), n(Pt(s * Xg(t))), n(Ss({
      product: 7,
      amount: 1
    })), (l = (r = window.Telegram.WebApp) == null ? void 0 : r.HapticFeedback) == null || l.notificationOccurred("error")
  }, Kg = () => {
    const t = _(),
      n = 7,
      s = c(ke),
      a = c(d => d.shop.available[n]);
    c(d => d.main.fastMode);
    const i = c(d => d.main.currentFastType),
      r = 10 + String(a).length * 6,
      l = [C.button, C.fast_type_button];
    return i === "pumpkin" && l.push(C.fast_mode_button_enabled), !s || !a || a === 0 ? null : e.jsxs("button", {
      className: `${l.join(" ")} ${C.shop_button}`,
      onPointerUp: () => {
        if (i === "pumpkin") {
          t(St());
          return
        }!a || a === 0 ? (t(et(n)), t(tt())) : t(ks("pumpkin"))
      },
      children: [e.jsx("img", {
        alt: "img",
        className: C.button_image,
        src: Bi
      }), e.jsx("div", {
        className: C.available,
        style: {
          width: r
        },
        children: !a || a === 0 ? e.jsx(N, {
          children: ""
        }) : e.jsx(yn, {
          number: a,
          fontSize: 11,
          fontWeight: 400,
          gap: 3
        })
      })]
    })
  }, ya = "/assets/particle_rays1-mrHjO6Jg.png", Zg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAB40lEQVR4nO3dQU7CUBRA0da4L2Hl1JXVidP+0Fgi7T1nSiIoNy+2vo/zuq7rRNaHt75NAHECiBNAnADiBBD3Ofr253mu/3wuYXSlbwLECSBOAHECiBNAnADiBBAngDgBxAkgTgBxAogTQJwA4gQQJ4A4AcQJIE4AcQKIE0CcAOIEECeAOAHEDU8GncV/fMbFVU5NmQBxAogTQJwA4gQQJ4C401wG7r3Uu9/uhzzvY3k8/XrOeGloAsQJIE4AcQKIE0DcJf4YtMfyvbzsa9++bpuPvfJ5/8IEiBNAnADiBBAngDgBxAkgTgBxAogTQNxpbgWPli1Gt2CftbVwctRiybsyAeIEECeAOAHECSDuEgshe5YtjjpJ/K4LHnuZAHECiBNAnADiBBAngDgBxAkgTgBxAogTQFzucOjWZtERW0VnZALECSBOAHECiJvXwYbEVT4SvW60BGMCxAkgTgBxAojL3QncuxV89V+ETYA4AcQJIE4AcQKIy10F7LW1J+BsIJcggDgBxAkgTgBxtoJ/2QomSQBxAogTQJwA4qyFB1gLZ5MA4gQQJ4A4AcQJIE4AcQKIE0CcAOIEECeAOAHECSBOAHECiBNA3PBcwFH/ZZP3ZQLECSBOAHECiBNAnADKpmn6AbwwPcfPo50AAAAAAElFTkSuQmCC";
class $g {
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
    this.backdrop = new PIXI.Graphics, this.backdrop.beginFill(0, .8), this.backdrop.drawRect(0, 0, T.width, T.height), this.backdrop.endFill(), this.backdrop.zIndex = 20, this.backdrop.interactive = !0, setTimeout(() => {
      this.backdrop.on("pointerup", n => {
        const s = this.store.dispatch;
        s(mg()), this.viewport.unlock(), this.destroy()
      })
    }, 2e3), this.pixiViewport.addChild(this.backdrop)
  }
  async addGlow(n) {
    PIXI.Loader.shared.resources.rewardGlow || await this.loadResource("rewardGlow", ya);
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
    PIXI.Loader.shared.resources.tnt || await this.loadResource("tnt", Zg), this.image = new PIXI.Sprite(PIXI.Loader.shared.resources.tnt.texture), this.image.zIndex = 21, this.image.width = 1, this.image.height = 1, this.image.x = n.x, this.image.y = n.y, this.pixiViewport.addChild(this.image)
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
class e_ {
  constructor({
    app: n,
    viewport: s,
    store: a,
    ticker: i,
    readyCallback: o
  }) {
    zs(this, "getClickCoords", n => {
      const s = this.sprite.toLocal(n.data.global);
      return {
        x: Math.floor(s.x),
        y: Math.floor(s.y)
      }
    });
    this.app = n, this.ticker = i, this.viewport = s, this.store = a, this.pixiViewport = s.viewport, this.selectedPixel = new FA({
      viewport: s
    }), this.template = new xg({
      app: n,
      viewport: s,
      store: a
    }), this.worldTemplate = new yg({
      app: n,
      viewport: s,
      store: a,
      mainImage: this
    }), this.reward = new $g({
      ticker: i,
      viewport: s,
      store: a
    }), this.bomb = new ep({
      app: n,
      viewport: s,
      mainImage: this
    }), this.pumpkin = new Yg({
      app: n,
      viewport: s,
      mainImage: this
    }), this.imageData = null, this.texture = null, this.sprite = null, this.timeout = null, this.lastPointerUpTs = Date.now(), this.lastPaintCoords = {
      x: -1,
      y: -1
    }, this.initImage(), o(a), this.initEvents(), this.store.dispatch(Ze({
      command: Se.start
    })), !ma() && this.loadAllChunks().then(() => {
      const r = a.getState().main.startParams.coords;
      r && (v.viewport.viewport.animate({
        scale: 60,
        time: 400,
        position: {
          x: r.x + .5,
          y: r.y + .5
        }
      }), this.selectedPixel.draw(r), this.store.dispatch(It(r)))
    })
  }
  initImage() {
    this.imageData = new Uint8Array(T.width * T.height * 4);
    const n = PIXI.Texture.fromBuffer(this.imageData, T.width, T.height, {
      format: PIXI.FORMATS.RGBA,
      type: PIXI.TYPES.UNSIGNED_BYTE,
      width: T.width,
      height: T.height
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
      if (r - this.lastPointerUpTs < 200 && !i && !o && (this.pixiViewport.scaled > 50 ? v.viewport.viewport.animate({
          scale: this.pixiViewport.findFitHeight(T.height),
          time: 400
        }) : v.viewport.viewport.animate({
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
        this.lastPaintCoords = a, Lo({
          charges: s.mining.charges,
          dispatch: this.store.dispatch,
          flyCoords: d,
          paintCoords: a,
          activeColor: s.color.active,
          state: this.store.getState()
        })
      } else o === "bomb" ? wg({
        coords: a,
        dispatch: this.store.dispatch,
        repaintReward: Gn(s),
        state: this.store.getState()
      }) : o === "paintcan" ? Ng({
        coords: a,
        dispatch: this.store.dispatch,
        repaintReward: Gn(s),
        activeColor: s.color.active,
        state: this.store.getState()
      }) : o === "pumpkin" ? Wg({
        coords: a,
        dispatch: this.store.dispatch,
        repaintReward: Gn(s),
        state: this.store.getState()
      }) : this.timeout = setTimeout(() => {
        this.selectedPixel.draw(a), this.store.dispatch(It(a))
      }, 0)
    })
  }
  async loadAllChunks() {
    const n = await this.loadImage(dc),
      s = this.getImageData(n, T.width, T.height);
    for (let a = 0; a < s.length; a += 4) this.imageData[a + 3] === 0 && (this.imageData[a] = s[a], this.imageData[a + 1] = s[a + 1], this.imageData[a + 2] = s[a + 2], this.imageData[a + 3] = s[a + 3]);
    this.updateTexture(), this.store.dispatch(Ze({
      command: Se.finish
    }))
  }
  async loadFromCentrifuge(n) {
    const s = performance.now(),
      a = this.getImageData(n, T.width, T.height);
    for (let i = 0; i < a.length; i += 4) this.imageData[i + 3] === 0 && (this.imageData[i] = a[i], this.imageData[i + 1] = a[i + 1], this.imageData[i + 2] = a[i + 2], this.imageData[i + 3] = a[i + 3]);
    this.updateTexture(), this.store.dispatch(Ze({
      command: Se.finish
    })), console.log(performance.now() - s)
  }
  async loadChunk({
    chunkIndex: n
  }) {
    const s = T.chunkOrder[n],
      a = await this.loadImage(`${Ca}image/block?block_id=${s}`),
      i = this.getImageData(a, T.chunkSize, T.chunkSize),
      o = Zs({
        index: s - 1,
        width: 4,
        blockSize: 1
      });
    for (let r = 0; r < i.length; r += 4) {
      const l = Zs({
          index: r,
          width: T.chunkSize
        }),
        d = ys({
          x: l.x + o.x * T.chunkSize,
          y: l.y + o.y * T.chunkSize,
          width: T.width
        });
      this.imageData[d] = i[r], this.imageData[d + 1] = i[r + 1], this.imageData[d + 2] = i[r + 2], this.imageData[d + 3] = i[r + 3]
    }
    this.updateTexture(), n < 15 ? await this.loadChunk({
      chunkIndex: n + 1
    }) : this.store.dispatch(Ze({
      command: Se.finish
    }))
  }
  updateTexture() {
    this.sprite.texture.update()
  }
  paintPixels(n) {
    for (const [s, a] of Object.entries(n)) this.paintPixel({
      id: s,
      color: wt(a)
    });
    this.updateTexture()
  }
  paintPixelsFromCentrifuge(n) {
    Object.keys(n).forEach(s => {
      n[s].forEach(i => {
        s !== "#171F2A" && this.paintPixel({
          id: i,
          color: wt(s)
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
      const r = Zs({
          index: o,
          width: a,
          blockSize: 1
        }),
        l = {
          x: n + r.x,
          y: s + r.y
        };
      if (l.x < 0 || l.y < 0 || l.x > T.width || l.y > T.height) continue;
      const d = ys({
          x: l.x,
          y: l.y,
          width: T.width
        }),
        {
          r: m,
          g: h,
          b: g
        } = wt(i[o]);
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
    s ? a = $e(s) : a = Number(n);
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
        width: T.width,
        height: T.height
      }),
      a = PIXI.RenderTexture.create({
        width: T.width,
        height: T.height
      });
    s.render(this.sprite, a), s.view.toBlob(o => {
      n(o), s.destroy(!0)
    }, "image/png")
  }
  pixanosRepaint(n, s, a, i) {
    const o = g => {
        let I = 1664525,
          b = 1013904223,
          f = 4294967296,
          j = g >>> 0;
        return function() {
          return j = (I * j + b) % f, j / f
        }
      },
      r = s * s,
      l = Math.floor(r * a),
      d = o(n),
      m = Array.from(Array(l));
    for (let g = 0; g < l; g++) m[g] = g + 1;
    for (let g = l + 1; g <= r; g++) {
      const I = Math.floor(d() * g) + 1;
      I <= l && (m[I - 1] = g)
    }
    const h = wt(i);
    for (let g = 0; g < m.length; g++) {
      const I = m[g];
      if (g < 20) {
        const b = xs(I);
        console.log(`i: ${g}, id: ${I}, x: ${b.x}, y: ${b.y}`)
      }
      this.paintPixel({
        id: I,
        color: h
      })
    }
    this.updateTexture()
  }
}
class t_ {
  constructor({
    viewport: n
  }) {
    this.viewport = n, this.pixiViewport = n.viewport, this.sprite = null
  }
  draw({
    arr: n
  }) {
    this.destroy();
    let s = new Uint8Array(T.width * T.height * 4);
    for (let i = 0; i < s.length; i += 32) {
      const o = n[Math.round(i / 32)];
      for (let r = 0; r < 32; r += 4) {
        const l = Math.round(r / 4);
        s[i + r] = o & 1 << l ? 0 : 23, s[i + r + 1] = o & 1 << l ? 0 : 31, s[i + r + 2] = o & 1 << l ? 0 : 42, s[i + r + 3] = o & 1 << l ? 0 : 255
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
class n_ {
  constructor({
    app: n,
    store: s
  }) {
    this.app = n, this.store = s, this.viewport = new window.pixi_viewport.Viewport({
      worldWidth: T.width,
      worldHeight: T.height,
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
const s_ = () => localStorage.getItem("canvasFps") ? Number(localStorage.getItem("canvasFps")) : 60;
class a_ {
  constructor({
    app: n
  }) {
    this.app = n, this.lastTime = Date.now(), this.lastRenderTime = Date.now(), this.fps = s_(), this.callbacks = [], this.render()
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
let va;
const i_ = t => {
  va = t
};
class o_ {
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
    }), this.app.ticker.stop(), this.ticker = new a_({
      app: this.app
    }), this.viewport = new n_({
      app: this.app,
      store: va
    }), this.mainImage = new e_({
      app: this.app,
      viewport: this.viewport,
      store: va,
      ticker: this.ticker,
      readyCallback: n
    }), this.mask = new t_({
      viewport: this.viewport
    })
  }
}
let v, oi = !1;

function r_() {
  v = new o_({
    readyCallback: t => {
      Pp(t.getState().user.user.websocketToken, t.getState().user.user.id)
    }
  })
}
const c_ = u.memo(() => (u.useEffect(() => {
    oi || (r_(), oi = !0)
  }, []), Xe.createPortal(e.jsx("canvas", {
    id: "canvasHolder",
    className: `${DA.main_canvas}`
  }), document.body)), () => !0),
  l_ = ({
    children: t,
    coords: n,
    classes: s = []
  }) => {
    const a = Z(),
      i = _();
    return e.jsx("div", {
      className: [ee.row, ...s].join(" "),
      onPointerUp: () => {
        v.viewport.viewport.animate({
          scale: 25,
          time: 400,
          position: n
        }), v.mainImage.selectedPixel.draw(n), a.push("/"), i(It(n))
      },
      children: t
    })
  },
  d_ = ({
    item: t
  }) => e.jsxs(l_, {
    coords: t,
    children: [e.jsxs(lo, {
      children: [e.jsx(EA, {
        color: t.color
      }), e.jsx(TA, {
        coords: {
          x: t.x,
          y: t.y
        }
      })]
    }), e.jsx(uo, {
      children: e.jsx(SA, {
        date: t.dateObtained
      })
    }), e.jsx(mo, {
      children: e.jsx("div", {
        className: `${ee.icon_arrow} telegram_icons`,
        children: ""
      })
    })]
  }),
  u_ = () => c(Ba.selectAll).map(n => e.jsx(d_, {
    item: n
  }, $e({
    x: n.x,
    y: n.y
  }))),
  m_ = () => {
    const t = _(),
      n = c(o => o.user.pixelsForSaleOffset),
      s = c(o => o.user.pixelsForSaleLimit),
      a = c(o => o.user.pixelsForSaleTotal),
      i = c(o => o.user.pixelsForSaleFetchStatus);
    return n + s >= a ? null : e.jsx("button", {
      className: `${ee.row} ${ee.loadMoreButton}`,
      onPointerUp: () => {
        t(Wi({
          offset: n + s
        }))
      },
      disabled: i === p.pending,
      children: "Show more"
    })
  },
  A_ = () => e.jsxs("div", {
    className: ee.skeleton_container,
    children: [e.jsx("div", {
      className: `${ee.header} ${ee.skeleton_header}`
    }), e.jsx("div", {
      className: ee.data,
      children: e.jsx("div", {
        className: `${ee.skeleton_row}`
      })
    })]
  }),
  p_ = () => {
    const t = c(Ba.selectTotal);
    return c(s => s.user.pixelsForSaleFetchStatus) === p.pending && t === 0 ? e.jsx(A_, {}) : t !== 0 ? e.jsxs(CA, {
      children: [e.jsx(u_, {}), e.jsx(m_, {})]
    }) : null
  },
  h_ = () => {
    const t = _();
    return eA(), u.useEffect(() => () => {
      t(od()), t(Wi({
        offset: 0
      })), t(id({
        status: p.idle
      }))
    }, []), e.jsxs(e.Fragment, {
      children: [e.jsx(NA, {}), e.jsx(p_, {})]
    })
  },
  g_ = "_layout_v8prs_1",
  __ = "_group_title_container_v8prs_7",
  f_ = "_group_title_v8prs_7",
  x_ = "_group_v8prs_7",
  us = {
    layout: g_,
    group_title_container: __,
    group_title: f_,
    group: x_
  },
  y_ = ({
    title: t,
    children: n
  }) => e.jsxs(ae.Fragment, {
    children: [e.jsx("div", {
      className: us.group_title_container,
      children: e.jsx("span", {
        className: us.group_title,
        children: t
      })
    }), e.jsx("div", {
      className: us.group,
      children: n
    })]
  }),
  v_ = "_boost_item_8sbvi_1",
  w_ = "_image_container_8sbvi_10",
  j_ = "_image_8sbvi_10",
  b_ = "_content_container_8sbvi_21",
  N_ = "_content_8sbvi_21",
  I_ = "_item_title_container_8sbvi_33",
  C_ = "_item_reward_container_8sbvi_40",
  P_ = "_price_text_8sbvi_45",
  S_ = "_dot_8sbvi_49",
  T_ = "_level_text_8sbvi_53",
  E_ = "_status_container_8sbvi_58",
  B_ = "_status_8sbvi_58",
  Ce = {
    boost_item: v_,
    image_container: w_,
    image: j_,
    content_container: b_,
    content: N_,
    item_title_container: I_,
    item_reward_container: C_,
    price_text: P_,
    dot: S_,
    level_text: T_,
    status_container: E_,
    status: B_
  },
  Fa = ({
    children: t,
    boost: n,
    price: s,
    isMax: a
  }) => {
    const i = _();
    return e.jsx("div", {
      className: Ce.boost_item,
      onPointerUp: () => {
        a || (i(Up(n)), i(ka(!0)))
      },
      children: t
    })
  },
  Oa = ({
    isMax: t
  }) => t ? null : e.jsx("div", {
    className: Ce.status_container,
    children: e.jsx("div", {
      className: Ce.status,
      children: e.jsx(N, {
        size: 20,
        children: ""
      })
    })
  }),
  Qa = ({
    src: t
  }) => e.jsx("div", {
    className: Ce.image_container,
    children: e.jsx("img", {
      alt: "image",
      className: Ce.image,
      src: t
    })
  }),
  D_ = ({
    price: t,
    isMax: n
  }) => n ? "Max" : e.jsxs(ae.Fragment, {
    children: [e.jsx(H, {}), "  ", e.jsx("span", {
      className: Ce.price_text,
      children: t
    })]
  }),
  za = ({
    reward: t,
    level: n,
    price: s,
    isMax: a
  }) => {
    const {
      t: i
    } = Be();
    return e.jsx("div", {
      className: Ce.content_container,
      children: e.jsxs("div", {
        className: Ce.content,
        children: [e.jsx("div", {
          className: Ce.item_title_container,
          children: t
        }), e.jsxs("div", {
          className: Ce.item_reward_container,
          children: [e.jsx(D_, {
            price: s,
            isMax: a
          }), "  ", e.jsx("span", {
            className: Ce.dot,
            children: "•"
          }), "  ", e.jsxs("span", {
            className: Ce.level_text,
            children: [n, " ", i("mining.boosts.level")]
          })]
        })]
      })
    })
  },
  Ho = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAADNQTFRFJS5B9v+18/Dl7NL//OZH1N6v1MdTura5/7AA1oX4ppdEyI4TwHoSZGNloiHkREJOZACci2GX6wAAAM5JREFUeNrt18EOgyAQRdFBpzKoQP//a8tbdGHGphppIWZuwoaEAwlhAVmWZVm3L6UQegFFNDaOITxLfYCfuJ+Adr6/gM5x6QjXCgQm8p1rB4qgi5wG7X3Y+S40DESAUlJcJ2CMIPcw/6gLzs5NR5/elovRe1LNzBNP9cBFmKiYZy8kZ3A5K3LFtlIRhLjIQugsCRTkjkj1QIgrnYnZOSzxHhzt1hIEJ8L8JvsDwWEARL2BwJjBiWznewGZFadqCUppLRGqCdrn07Is6+a9AG2rFi1gfBMTAAAAAElFTkSuQmCC",
  k_ = () => {
    const {
      t
    } = Be(), n = pe.paintReward, s = c(m => m.main.settings.UpgradeRepaint), a = c(m => m.mining.boosts[n]), {
      repaintReward: i
    } = c(Jt), o = a >= i, r = Math.min(i, a + 1), l = Math.min(i, a), d = s == null ? void 0 : s.levels[r];
    return e.jsxs(Fa, {
      boost: n,
      isMax: o,
      price: d.Price,
      children: [e.jsx(Qa, {
        src: Ho
      }), e.jsx(za, {
        reward: t("mining.boosts.paintReward"),
        price: d.Price,
        level: l,
        isMax: o
      }), e.jsx(Oa, {
        isMax: o
      })]
    })
  },
  Go = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQBAMAAAB8P++eAAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAABJQTFRFJS5B/+2k/8ZA/6cA5HQArUkAuEjH0AAAAGRJREFUeNrt1TENAEEMA8FQCAVTMAVTCH8qL0V6Bltcka2ntuu6rjcbGqZgqIGhXCx0h4VuDQrd7eLgupa3INDqPwbGm7QOgH9ZR0KvA+GsI2GUQuE4xcKkAAhMGTG2d0zX9WYfl2Yb5cnsVocAAAAASUVORK5CYII=",
  R_ = () => {
    const {
      t
    } = Be(), n = pe.reChargeSpeed, s = c(m => m.main.settings.UpgradeChargeRestoration), a = c(m => m.mining.boosts[n]), {
      restorationSpeed: i
    } = c(Jt), o = a >= i, r = Math.min(i, a + 1), l = Math.min(i, a), d = s == null ? void 0 : s.levels[r];
    return e.jsxs(Fa, {
      boost: n,
      isMax: o,
      price: d.Price,
      children: [e.jsx(Qa, {
        src: Go
      }), e.jsx(za, {
        reward: t("mining.boosts.rechargingSpeed"),
        price: d.Price,
        level: l,
        isMax: o
      }), e.jsx(Oa, {
        isMax: o
      })]
    })
  },
  Vo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQBAMAAAB8P++eAAAAAXNSR0IArs4c6QAAACRQTFRFJS1A1uLTscetgNhhcMJTiaeNUqhDYYZsLZkvMXI6BY4bRGNNme8YcAAAAMdJREFUeNrt1bENQyEMRdG/grMBXoEVWIEVvAIreAVvEHmFt1z4jiKlAykuUnAbmlM8ISSu0+mfs4bOaJYFmw3wGB3DWgoUdGAwD6BDMmDFuBHiqBnQKoDOzACqp0DVVu9aVbUU6KruKioingU9oKZCTodOtAnLLlSiVMg040zoRKK6B7Pv8UllCbvF9QjfsGdAIw44HZNlwO5ORA+aLTa6l7ejzY2+2lh24ffGBfxs3Hq4M0mBIQNKuAQYVCO/rk14PvvT6bdeUNkQ6l74HqUAAAAASUVORK5CYII=",
  M_ = () => {
    const {
      t
    } = Be(), n = pe.energyLimit, s = c(m => m.main.settings.UpgradeChargeCount), a = c(m => m.mining.boosts[n]), {
      chargesCount: i
    } = c(Jt), o = a >= i, r = Math.min(i, a + 1), l = Math.min(i, a), d = s == null ? void 0 : s.levels[r];
    return e.jsxs(Fa, {
      boost: n,
      isMax: o,
      price: d.Price,
      children: [e.jsx(Qa, {
        src: Vo
      }), e.jsx(za, {
        reward: t("mining.boosts.energyLimit"),
        price: d.Price,
        level: l,
        isMax: o
      }), e.jsx(Oa, {
        isMax: o
      })]
    })
  },
  U_ = "_container_1e12r_1",
  F_ = "_title_container_1e12r_8",
  O_ = "_description_1_1e12r_19",
  Q_ = "_description_2_1e12r_27",
  z_ = "_description_container_1e12r_35",
  q_ = "_image_container_1e12r_47",
  L_ = "_image_1e12r_47",
  H_ = "_buttons_container_1e12r_59",
  G_ = "_button_1e12r_59",
  V_ = "_cancel_button_1e12r_71",
  J_ = "_loading_1e12r_1",
  re = {
    container: U_,
    title_container: F_,
    description_1: O_,
    description_2: Q_,
    description_container: z_,
    image_container: q_,
    image: L_,
    buttons_container: H_,
    button: G_,
    cancel_button: V_,
    loading: J_
  },
  qa = ({
    children: t,
    boost: n,
    price: s
  }) => {
    const a = _(),
      {
        t: i
      } = Be(),
      o = d => {
        a(ka(d))
      },
      l = c(d => d.mining.checkStatuses[n]) === p.pending;
    return e.jsxs("div", {
      className: re.container,
      children: [t, e.jsxs("div", {
        className: re.buttons_container,
        children: [e.jsx("button", {
          className: re.cancel_button,
          onPointerUp: () => o(!1),
          children: i("mining.boosts.popup.cancelButton")
        }), e.jsx("button", {
          className: re.button,
          disabled: l,
          onPointerUp: async () => {
            l || (await a(Ne.checkBoost({
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
  Y_ = () => {
    const {
      t
    } = Be(), n = pe.paintReward, s = c(d => d.main.settings.UpgradeRepaint), a = c(d => d.mining.boosts[n]), {
      repaintReward: i
    } = c(Jt), o = Math.min(i, a + 1), r = (s == null ? void 0 : s.levels[a]) || {
      Boost: 1
    }, l = s == null ? void 0 : s.levels[o];
    return e.jsxs(qa, {
      price: l.Price,
      boost: n,
      children: [e.jsxs("div", {
        className: re.title_container,
        children: [t("mining.boosts.paintReward"), " ", e.jsxs("span", {
          children: ["• ", o, " ", t("mining.boosts.level")]
        })]
      }), e.jsx("div", {
        className: re.image_container,
        children: e.jsx("img", {
          alt: "image",
          className: re.image,
          src: Ho
        })
      }), e.jsxs("div", {
        className: re.description_container,
        children: [e.jsx("div", {
          className: re.description_1,
          children: t("mining.boosts.popup.paintRewardDescription")
        }), e.jsxs("div", {
          className: re.description_2,
          children: [t("mining.boosts.popup.reward"), ": ", r.Boost, " ⇢", " ", l.Boost, " PX"]
        })]
      })]
    })
  },
  X_ = () => {
    const {
      t
    } = Be(), n = pe.reChargeSpeed, s = c(d => d.main.settings.UpgradeChargeRestoration), a = c(d => d.mining.boosts[n]), {
      restorationSpeed: i
    } = c(Jt), o = Math.min(i, a + 1), r = (s == null ? void 0 : s.levels[a]) || {
      ChargeBoost: 6e5
    }, l = s == null ? void 0 : s.levels[o];
    return l.ChargeBoost - (r == null ? void 0 : r.ChargeBoost), e.jsxs(qa, {
      price: l.Price,
      boost: n,
      children: [e.jsxs("div", {
        className: re.title_container,
        children: [t("mining.boosts.rechargingSpeed"), " ", e.jsxs("span", {
          children: ["• ", o, " ", t("mining.boosts.level")]
        })]
      }), e.jsx("div", {
        className: re.image_container,
        children: e.jsx("img", {
          alt: "image",
          className: re.image,
          src: Go
        })
      }), e.jsxs("div", {
        className: re.description_container,
        children: [e.jsx("div", {
          className: re.description_1,
          children: t("mining.boosts.popup.rechargingSpeedDescription")
        }), e.jsxs("div", {
          className: re.description_2,
          children: [t("mining.boosts.popup.recharging"), ": ", " ", (r == null ? void 0 : r.ChargeBoost) / 1e3, " ⇢", " ", l.ChargeBoost / 1e3, " ", t("shared.sec")]
        })]
      })]
    })
  },
  W_ = () => {
    const {
      t
    } = Be(), n = pe.energyLimit, s = c(d => d.main.settings.UpgradeChargeCount), a = c(d => d.mining.boosts[n]), {
      chargesCount: i
    } = c(Jt), o = Math.min(i, a + 1), r = s == null ? void 0 : s.levels[o], l = c(d => d.mining.maxCharges);
    return e.jsxs(qa, {
      price: r.Price,
      boost: n,
      children: [e.jsxs("div", {
        className: re.title_container,
        children: [t("mining.boosts.energyLimit"), " ", e.jsxs("span", {
          children: ["• ", o, " ", t("mining.boosts.level")]
        })]
      }), e.jsx("div", {
        className: re.image_container,
        children: e.jsx("img", {
          alt: "image",
          className: re.image,
          src: Vo
        })
      }), e.jsxs("div", {
        className: re.description_container,
        children: [e.jsx("div", {
          className: re.description_1,
          children: t("mining.boosts.popup.energyLimitDescription")
        }), e.jsxs("div", {
          className: re.description_2,
          children: [t("mining.boosts.popup.energy"), ":  ", l, " ⇢", " ", l + r.Boost]
        })]
      })]
    })
  },
  K_ = () => {
    const t = _(),
      n = c(i => i.main.showBoostDetailsPopup),
      s = c(i => i.main.activeBoostDetails),
      a = i => {
        t(ka(i))
      };
    return e.jsxs(fn, {
      show: n,
      setShow: a,
      children: [s === pe.paintReward && e.jsx(Y_, {}), s === pe.reChargeSpeed && e.jsx(X_, {}), s === pe.energyLimit && e.jsx(W_, {})]
    })
  },
  Z_ = () => e.jsxs("div", {
    className: us.layout,
    children: [e.jsxs(y_, {
      title: "Boosters",
      children: [e.jsx(k_, {}), e.jsx(R_, {}), e.jsx(M_, {})]
    }), e.jsx(K_, {}), e.jsx("div", {
      style: {
        height: "20px"
      }
    })]
  }),
  $_ = () => {
    const t = c(n => n.mining.activeTab);
    return e.jsxs("div", {
      className: A.info_layout,
      children: [e.jsx($m, {}), t === "tasks" && e.jsx(Zm, {}), t === "pixels" && e.jsx(h_, {}), t === "boosts" && e.jsx(Z_, {})]
    })
  },
  ef = () => {
    const t = _(),
      n = c(s => s.mining.activeTab);
    return e.jsxs(Yt, {
      children: [e.jsx(Te, {
        active: n === "tasks",
        setActive: () => t(Aa("tasks")),
        children: "Tasks"
      }), e.jsx(Te, {
        active: n === "boosts",
        setActive: () => t(Aa("boosts")),
        children: "Boosts"
      })]
    })
  },
  tf = () => e.jsxs(ae.Fragment, {
    children: [e.jsx(ef, {}), e.jsx($_, {})]
  }),
  nf = "_more_details_6gp7h_1",
  sf = {
    more_details: nf
  },
  bn = ({
    children: t,
    ...n
  }) => e.jsx("span", {
    className: sf.more_details,
    ...n,
    children: e.jsx("span", {
      children: t
    })
  }),
  af = "_container_1h1qc_1",
  of = "_divider_1h1qc_19",
  rf = "_row_1h1qc_24",
  cf = "_row_title_1h1qc_36",
  lf = "_row_title_main_1h1qc_40",
  df = "_row_hint_1h1qc_45",
  uf = "_row_value_1h1qc_51",
  mf = "_row_value_main_1h1qc_55",
  Af = "_mining_percent_1h1qc_60",
  pf = "_active_row_1h1qc_70",
  hf = "_button_1h1qc_81",
  ri = {
    container: af,
    divider: of,
    row: rf,
    row_title: cf,
    row_title_main: lf,
    row_hint: df,
    row_value: uf,
    row_value_main: mf,
    mining_percent: Af,
    active_row: pf,
    button: hf
  },
  gf = () => {
    const t = _(),
      {
        t: n
      } = Be("translation", {
        keyPrefix: "mining.popup"
      }),
      s = c(r => r.main.showMiningDetailsPopup),
      a = r => {
        t(yo(r))
      },
      i = c(r => r.mining.info),
      o = c(r => r.main.settings);
    return i ? e.jsx(fn, {
      show: s,
      setShow: a,
      children: e.jsxs("div", {
        className: ri.container,
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
          className: ri.button,
          onPointerUp: () => a(!1),
          children: n("button")
        })]
      })
    }) : null
  },
  _f = () => {
    const t = _(),
      {
        t: n
      } = Be("translation", {
        keyPrefix: "mining"
      });
    return e.jsxs(le, {
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
      }), e.jsx(Xd, {}), e.jsxs("div", {
        className: Cn.general_info_container,
        children: [e.jsxs("h1", {
          className: Cn.pixels_amount,
          children: [e.jsx(Iu, {}), " PX"]
        }), e.jsxs("div", {
          className: Cn.description_container,
          children: [e.jsxs("span", {
            className: Cn.description,
            children: [n("grayInstruction"), " ", e.jsx("br", {}), e.jsx(bn, {
              onPointerUp: s => {
                s.stopPropagation(), t(yo(!0))
              },
              children: n("howItWorks")
            })]
          }), e.jsx(gf, {})]
        })]
      }), e.jsx(Nu, {}), e.jsx(tf, {})]
    })
  },
  ff = "_squads_img_container_zthsq_1",
  xf = "_squads_img_zthsq_1",
  yf = "_title_container_zthsq_11",
  vf = "_description_container_zthsq_18",
  wf = "_description_zthsq_18",
  jf = "_info_layout_zthsq_31",
  bf = "_info_container_zthsq_42",
  Nf = "_base_item_zthsq_49",
  If = "_loading_item_zthsq_60",
  Cf = "_rating_item_zthsq_69",
  Pf = "_info_row_zthsq_82",
  Sf = "_avatar_container_zthsq_87",
  Tf = "_avatar_zthsq_87",
  Ef = "_position_zthsq_99",
  Bf = "_user_squad_position_zthsq_117",
  Df = "_rating_main_info_zthsq_135",
  kf = "_rating_name_zthsq_148",
  Rf = "_rating_value_zthsq_155",
  Mf = "_active_league_text_zthsq_163",
  Uf = "_icon_leagueflag_zthsq_167",
  Ff = "_join_squad_button_zthsq_174",
  Of = "_join_squad_text_zthsq_188",
  Qf = "_user_squad_container_zthsq_206",
  zf = "_squad_avatar_container_zthsq_223",
  qf = "_user_squad_info_zthsq_234",
  Lf = "_user_squad_name_zthsq_242",
  Hf = "_user_squad_your_squad_text_zthsq_246",
  Gf = "_user_squad_users_count_zthsq_251",
  M = {
    squads_img_container: ff,
    squads_img: xf,
    title_container: yf,
    description_container: vf,
    description: wf,
    info_layout: jf,
    info_container: bf,
    base_item: Nf,
    loading_item: If,
    rating_item: Cf,
    info_row: Pf,
    avatar_container: Sf,
    avatar: Tf,
    position: Ef,
    user_squad_position: Bf,
    rating_main_info: Df,
    rating_name: kf,
    rating_value: Rf,
    active_league_text: Mf,
    icon_leagueflag: Uf,
    join_squad_button: Ff,
    join_squad_text: Of,
    user_squad_container: Qf,
    squad_avatar_container: zf,
    user_squad_info: qf,
    user_squad_name: Lf,
    user_squad_your_squad_text: Hf,
    user_squad_users_count: Gf
  },
  Vf = ({
    isPlayers: t
  }) => {
    const n = _(),
      s = c(i => i.ratings.league),
      a = c(Zi);
    return e.jsx(Yt, {
      children: ["bronze", "silver", "gold", "platinum"].map(i => e.jsxs(Te, {
        active: s === i,
        setActive: () => {
          s !== i && n(So(i))
        },
        children: [e.jsxs("span", {
          className: M.active_league_text,
          children: [" ", i, " "]
        }), i === a && t && e.jsx(N, {
          className: `${M.icon_leagueflag}`,
          children: ""
        })]
      }, i))
    })
  },
  Jf = "_panel_bpwn4_1",
  Yf = "_item_bpwn4_9",
  Xf = "_active_bpwn4_20",
  aa = {
    panel: Jf,
    item: Yf,
    active: Xf
  },
  Wf = ({
    selectedSection: t,
    setSelectedSection: n
  }) => e.jsx("div", {
    className: aa.panel,
    children: ["Squads", "Painters"].map(s => e.jsx("div", {
      className: `${aa.item} ${t===s?aa.active:""}`,
      onPointerUp: () => {
        n(s)
      },
      children: e.jsx("h1", {
        children: s
      })
    }, s))
  }),
  Fs = ({
    children: t
  }) => e.jsx("div", {
    className: M.base_item,
    children: t
  }),
  pt = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAIVBMVEUQGSb////09PTk5ebT1NbCw8asr7ODh41jZ29GTFYjKjX3vgf4AAABe0lEQVR42u3X227DMAgGYMzBBt7/gSc17dwlWpNemGrT/121UhRQDMgQAAAAAAAAAAAA/GU5uqpqH0mfkJ3bHfekckPaExnl8bn9wKM8/t6gQs5twyLfP53q2Dz5WQ1WfgA9H/1QXQZbQEu6S9sSoiIp25nva0KSavgtAaUnekvAS3ugHw6FkYBTjdhqIOlbbjUQVES3tt8PBi2eA+KzLSrnwAwovv9b/Akam2e6cbvpVCe0HWhQIZe2I06lXA7xi6W1iS2pnhs/wjt9SHjvHtiQPiKGKT9qgNVGUJ0cyu2AdWRZ8R/UtYNre0l9+UZ8gnsWzV8W7XcqXDKVBz8VXOy7Qnn1pjz49VeOzjODlfEt6BdhCzMIme8+z1Ji1S1M49pdqa+5ijfLi/cEXXMCEtefXLSOnZlr2v9MwOgCW5JAyNUp67ymD2124ZU+tFWDkK2/ZLxqFKa1N2hWbGNTzZ7mUhH/vL7OadRfSCc2x9ICAAAAAAAAAADwli/CSAqaW7oHjgAAAABJRU5ErkJggg==",
  Jo = ({
    position: t,
    userPic: n
  }) => e.jsxs("div", {
    className: M.avatar_container,
    children: [e.jsx("img", {
      alt: "avatar",
      className: M.avatar,
      src: n === "" ? pt : n
    }), e.jsx("div", {
      className: M.position,
      children: t
    }), ";"]
  }),
  Yo = ({
    name: t
  }) => e.jsx("div", {
    className: M.rating_main_info,
    children: e.jsx("span", {
      className: M.rating_name,
      children: t
    })
  }),
  Xo = ({
    value: t
  }) => t ? e.jsx("span", {
    className: M.rating_value,
    children: gn(t)
  }) : null,
  Kf = ({
    item: t,
    index: n
  }) => {
    const s = _(),
      a = [M.rating_item];
    return e.jsx(Fs, {
      children: e.jsxs("div", {
        className: a.join(" "),
        onPointerUp: () => {
          s(xn({
            dataSource: Fe.userFromRating,
            index: n
          }))
        },
        children: [e.jsx(Jo, {
          position: n + 1,
          userPic: t.userPic
        }), e.jsx(Yo, {
          name: t.firstName
        }), e.jsx(Xo, {
          value: t.repaints
        })]
      })
    })
  },
  Zf = () => {
    const t = c(s => s.user.user),
      n = c(s => s.ratings.myPlace);
    return t === null ? null : e.jsx(Fs, {
      children: e.jsxs("div", {
        className: M.rating_item,
        style: {
          border: "2px solid #4db2ff"
        },
        children: [e.jsxs("div", {
          className: M.avatar_container,
          children: [e.jsx("img", {
            alt: "avatar",
            className: M.avatar,
            src: t.userPic === "" ? pt : t.userPic
          }), n !== 0 && n < 1e3 && e.jsx("div", {
            className: M.position,
            children: n
          }), n >= 1e3 && e.jsx("div", {
            className: M.position,
            style: {
              fontSize: "10px"
            },
            children: "999+"
          })]
        }), e.jsxs("div", {
          className: M.user_squad_info,
          children: [e.jsxs("div", {
            children: [e.jsx("span", {
              className: M.user_squad_name,
              children: t.firstName
            }), " "]
          }), e.jsxs("div", {
            className: M.user_squad_your_squad_text,
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
  $f = () => {
    const t = _(),
      n = c(i => i.ratings.list),
      s = c(i => i.ratings.league),
      a = c(i => i.ratings.status);
    return u.useEffect(() => {
      t(Ra.personal({
        league: s
      }))
    }, [s]), u.useEffect(() => () => {
      t(kh())
    }, []), a !== p.fulfilled ? null : e.jsxs(ae.Fragment, {
      children: [e.jsx(Zf, {}), n.map((i, o) => e.jsx(Kf, {
        item: i,
        index: o
      }, o))]
    })
  },
  ex = () => (u.useState("Day"), null),
  tx = ({
    children: t
  }) => e.jsx("div", {
    className: M.info_layout,
    children: e.jsxs("div", {
      className: M.info_container,
      children: [e.jsx(ex, {}), t]
    })
  }),
  nx = () => {
    const t = Z();
    return e.jsx("div", {
      className: M.description_container,
      children: e.jsxs("span", {
        className: M.description,
        children: ["Pixel painting Leaderboard!", e.jsx("br", {}), e.jsx(bn, {
          onPointerUp: () => {
            t.push("/stats")
          },
          children: "Painters stat"
        })]
      })
    })
  },
  sx = () => {
    const t = c(n => n.user.user);
    return !t || !t.squad || t.squad.id !== null ? null : e.jsx("button", {
      className: M.join_squad_button,
      children: e.jsxs("div", {
        className: M.join_squad_text,
        onPointerUp: () => {
          ue(`https://t.me/${bt}`)
        },
        children: ["Join the squad ", e.jsx(N, {
          children: ""
        })]
      })
    })
  },
  Lt = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAJFBMVEUQGSb////w8PHU1de6vMCoq6+NkJd3e4Juc3pXXWU8QkwlLDf3GVopAAABfklEQVR42u3ZwW7CMBCE4WHXazbO+79vL7QjUdxwYG1Vmu/YRP0tOwkOQERERERERERE5APOzIjMgR1Gd7s9mMfAWoffnnhuypMfWOMMu71kcWKB0W5TbaBcOuc8cgAjw/mngWJ3+5lvtjDCOII1/fa03GfjgQV96/ilP47Fin7ihTQeLO7f/zzuZ/X6d0x0Hq/sN0w1TkFd3w5MHcaroKJ/fZUHT6nqW4Imd4KX9a//uXOVCvq8BKcaZ6mif32PdZ708b7xIXR1clT0Pd6Z3fz4APK7P/YMgH3EjiVgH+ilF+F1H2nrb0NnHzhs/YPI2Qfg6x/FjX0Asf7DaDj7QNqej2PyNzckqNLtnS2ZdVQ5fc+mlNL2bMspdr2YcAC7Xs3Y3/dyyv789dzuC/u0uB9he/vA4Xv74BC29PlF5c4+v6q1HX0arr76i/qm+d/T75M+NyCWqORc//UbQA6AfUpjv1Cf9XE29it1946XzvB26KdTEREREREREZF/7Qv4ZQurWN4R2wAAAABJRU5ErkJggg==",
  La = ({
    src: t
  }) => {
    let n = Lt;
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
  ax = () => {
    const t = _(),
      n = c(a => a.ratings.mySquadPlace),
      s = c(a => a.ratings.mySquad);
    return s === null || !s || s.id === null ? null : e.jsxs("div", {
      className: M.user_squad_container,
      onPointerUp: () => {
        t(Ms.getInfo({
          id: s.id
        })), t(xn({
          dataSource: Fe.squadFromData
        }))
      },
      children: [e.jsxs("div", {
        className: M.squad_avatar_container,
        children: [e.jsx(La, {
          src: s.logo
        }), e.jsx("div", {
          className: M.user_squad_position,
          children: n
        })]
      }), e.jsxs("div", {
        className: M.user_squad_info,
        children: [e.jsxs("div", {
          children: [e.jsx("span", {
            className: M.user_squad_name,
            children: s.name
          }), " "]
        }), e.jsx("div", {
          className: M.user_squad_your_squad_text,
          children: "Your squad"
        })]
      }), e.jsx("div", {
        children: e.jsx("span", {
          className: M.user_squad_users_count,
          children: gn(s.scoredRepaints)
        })
      })]
    })
  },
  ix = ({
    item: t,
    index: n
  }) => {
    const s = _();
    return e.jsx(Fs, {
      children: e.jsxs("div", {
        className: M.rating_item,
        onPointerUp: () => {
          s(Ms.getInfo({
            id: t.id
          })), s(xn({
            dataSource: Fe.squadFromData
          }))
        },
        children: [e.jsx(Jo, {
          position: n + 1,
          userPic: t.logo
        }), e.jsx(Yo, {
          name: t.name,
          address: t.slug
        }), e.jsx(Xo, {
          value: t.scoredRepaints
        })]
      })
    })
  },
  ox = () => {
    const t = c(s => s.ratings.list);
    return c(s => s.ratings.status) !== p.fulfilled ? null : t.map((s, a) => e.jsx(ix, {
      item: s,
      index: a
    }, a))
  },
  rx = () => {
    const t = _(),
      n = c(s => s.ratings.league);
    return u.useEffect(() => {
      t(Ra.squad({
        league: n
      }))
    }, [n]), e.jsxs(ae.Fragment, {
      children: [e.jsx(sx, {}), e.jsx(ax, {}), e.jsx(ox, {})]
    })
  },
  cx = () => e.jsx(ae.Fragment, {
    children: Array.from(Array(10)).map((t, n) => e.jsx(Fs, {
      children: e.jsx("div", {
        className: M.loading_item
      })
    }, n))
  }),
  lx = "_container_d5ybi_1",
  dx = {
    container: lx
  },
  ux = () => {
    const t = c(a => a.ratings.league);
    let s = c(wo, Ir)[t];
    return s === 0 ? s = "start" : s += " repaints", e.jsxs("span", {
      children: ["from ", s]
    })
  },
  mx = () => (c(t => t.ratings.league), c(Zi), c(wo), e.jsx("div", {
    className: dx.container,
    children: e.jsx(ux, {})
  })),
  Ax = "_container_d5ybi_1",
  px = {
    container: Ax
  },
  hx = () => {
    const t = c(s => s.ratings.league),
      n = c(Qp);
    return e.jsx("div", {
      className: px.container,
      children: e.jsxs("span", {
        children: ["from ", (n[t] / 1e3).toFixed(0), "k"]
      })
    })
  },
  gx = "/assets/icon_squad-_NF17RUb.gif",
  _x = "/assets/icon_squad_secret-B-fF264Z.gif",
  fx = () => {
    const [t, n] = u.useState(0);
    return e.jsx("div", {
      className: M.squads_img_container,
      children: e.jsx("img", {
        alt: "img",
        className: M.squads_img,
        src: t >= 10 ? _x : gx,
        onPointerUp: () => {
          n(s => s + 1)
        }
      })
    })
  },
  xx = () => {
    const [t, n] = u.useState("Squads"), s = c(a => a.ratings.status);
    return e.jsxs(le, {
      children: [e.jsx(fx, {}), e.jsx(Wf, {
        selectedSection: t,
        setSelectedSection: n
      }), e.jsx(nx, {}), e.jsx(Vf, {
        isPlayers: t === "Painters"
      }), e.jsxs(tx, {
        children: [t === "Painters" && e.jsx(mx, {}), t === "Squads" && e.jsx(hx, {}), t === "Squads" && e.jsx(rx, {}), t === "Painters" && e.jsx($f, {}), s !== p.fulfilled && e.jsx(cx, {})]
      })]
    })
  },
  yx = ({
    open: t,
    setOpen: n,
    active: s,
    setActive: a
  }) => {
    const i = c(o => o.color.active);
    return e.jsx("div", {
      className: oe.active_color,
      style: {
        backgroundColor: i
      },
      onPointerUp: o => {
        o.stopPropagation(), t && s === 1 ? n(!1) : t && s === 2 ? a(1) : (a(1), n(!0))
      }
    })
  },
  vx = ({
    open: t,
    setOpen: n,
    active: s,
    setActive: a
  }) => {
    const i = _(),
      o = [oe.info_button];
    return t && s === 2 && o.push(oe.info_button_active), e.jsx("div", {
      className: o.join(" "),
      onPointerUp: r => {
        r.stopPropagation(), i(xn({
          dataSource: Fe.userFromPixelInfo
        }))
      },
      children: "info"
    })
  },
  wx = () => {
    const [t, n] = u.useState(!0), [s, a] = u.useState(!1), i = c(r => r.canvas.coords), o = u.useRef(null);
    return u.useEffect(() => () => {
      o.current !== null && (clearTimeout(o.current), o.current = null)
    }, []), e.jsxs("div", {
      className: oe.pixel_info_container,
      children: [t && e.jsxs("div", {
        className: oe.pixel_info_text,
        onPointerUp: async r => {
          var d, m;
          r.stopPropagation(), await Gt(`${mt}?startapp=x${i.x}_y${i.y}`) ? (m = (d = window.Telegram.WebApp) == null ? void 0 : d.HapticFeedback) == null || m.notificationOccurred("success") : a(!0), n(!1), o.current = setTimeout(() => {
            a(!1), n(!0), o.current = null
          }, 4e3)
        },
        children: [`${i.x}, ${i.y}`, " ", e.jsx(N, {
          size: 14,
          children: ""
        })]
      }), !t && e.jsx("div", {
        className: oe.pixel_info_text,
        onPointerUp: async r => {
          r.stopPropagation(), a(!1), n(!0)
        },
        children: s ? "Failure" : "Pixel link copied!"
      })]
    })
  },
  jx = "_expandable_panel_layout_1v9vd_1",
  bx = "_expandable_panel_1v9vd_1",
  Nx = "_divider_1v9vd_16",
  Ix = "_divider_spacer_1v9vd_24",
  Cx = "_divider_pointer_1v9vd_28",
  an = {
    expandable_panel_layout: jx,
    expandable_panel: bx,
    divider: Nx,
    divider_spacer: Ix,
    divider_pointer: Cx
  },
  Px = ({
    active: t
  }) => {
    const n = t === 1 ? "38px" : "54px",
      s = t === 1 ? 0 : 1;
    return e.jsxs("div", {
      className: an.divider,
      children: [e.jsx("div", {
        className: an.divider_spacer,
        style: {
          flexGrow: s
        }
      }), e.jsx("div", {
        className: an.divider_pointer,
        style: {
          width: n
        }
      })]
    })
  },
  Sx = t => {
    const n = u.useRef(),
      s = u.useRef();
    return u.useEffect(() => {
      n.current = t
    }), u.useEffect(() => {
      const a = i => {
        s.current && n.current && !s.current.contains(i.target) && n.current(i)
      };
      return window.addEventListener("pointerup", a), () => {
        window.removeEventListener("pointerup", a)
      }
    }, []), s
  },
  Tx = "_container_1vu8i_1",
  Ex = "_owner_1vu8i_10",
  Bx = "_id_1vu8i_14",
  Dx = "_date_1vu8i_19",
  kx = "_avatar_container_1vu8i_24",
  Rx = "_avatar_1vu8i_24",
  Mx = "_squad_avatar_container_1vu8i_36",
  Ux = "_text_container_1vu8i_48",
  Fx = "_dot_1vu8i_54",
  Ox = "_user_name_1vu8i_59",
  Qx = "_squad_name_1vu8i_64",
  de = {
    container: Tx,
    owner: Ex,
    id: Bx,
    date: Dx,
    avatar_container: kx,
    avatar: Rx,
    squad_avatar_container: Mx,
    text_container: Ux,
    dot: Fx,
    user_name: Ox,
    squad_name: Qx
  },
  zx = "_skeleton_k7kmi_1",
  qx = "_loading_k7kmi_1",
  Lx = {
    skeleton: zx,
    loading: qx
  },
  Oe = ({
    children: t,
    show: n
  }) => n ? e.jsx("div", {
    className: Lx.skeleton,
    children: e.jsx("div", {
      style: {
        opacity: 0
      },
      children: t
    })
  }) : null,
  Hx = () => {
    const t = c(o => o.canvas.pixelInfo),
      n = c(o => o.canvas.getPixelInfoFetchStatus),
      s = t !== null && n === p.fulfilled,
      a = () => De(new Date(t.pixel.dateObtained));
    if (!s) return e.jsx(Oe, {
      show: !s,
      children: e.jsx("span", {
        className: de.date,
        children: "29 august at 18:00"
      })
    });
    const i = a();
    return e.jsx("div", {
      children: e.jsx("span", {
        className: de.date,
        children: i
      })
    })
  },
  Nn = ({
    address: t,
    limit: n = 0,
    display: s = null
  }) => {
    const a = c(bo);
    if (!t || t === "") return e.jsx("span", {
      children: "Anon"
    });
    let i = Dl(s === null ? t : s);
    return n > 0 && (i = hn(i, n)), e.jsx("span", {
      className: Yi.link,
      onPointerUp: o => {
        o.stopPropagation(), a ? ue(`https://t.me/${Ya(t)}`) : Ht(`https://t.me/${Ya(t)}`)
      },
      children: i
    })
  },
  Gx = () => {
    const t = c(r => r.canvas.pixelInfo),
      n = c(r => r.canvas.getPixelInfoFetchStatus),
      s = t !== null && n === p.fulfilled;
    if (!s) return e.jsx(Oe, {
      show: !s,
      children: e.jsx("div", {
        className: de.text_container,
        children: e.jsx("span", {
          className: de.user_name,
          children: "No name • @notpixel"
        })
      })
    });
    const i = hn(t.owner.firstName || "No name");
    return (() => {
      const r = t.owner.userName && t.owner.userName !== "";
      return {
        address: r ? t.owner.userName : "Anon",
        hasAddress: r
      }
    })(), e.jsx("div", {
      className: de.text_container,
      children: e.jsx("span", {
        className: de.user_name,
        children: i
      })
    })
  },
  Vx = () => {
    var i, o;
    const t = c(r => r.canvas.pixelInfo),
      n = c(r => r.canvas.getPixelInfoFetchStatus),
      s = t !== null && n === p.fulfilled;
    return s ? ((o = (i = t == null ? void 0 : t.owner) == null ? void 0 : i.squad) == null ? void 0 : o.name) && t.owner.squad.name !== null ? e.jsxs("div", {
      className: de.text_container,
      children: [e.jsx("span", {
        className: de.squad_name,
        children: t.owner.squad.name
      }), e.jsx("span", {
        className: de.dot,
        children: "•"
      }), e.jsx(Nn, {
        address: `${bt}?startapp=${btoa(`id=${t.owner.squad.id}`)}`,
        display: t.owner.squad.slug,
        limit: 18
      })]
    }) : e.jsx("div", {
      className: de.text_container,
      children: e.jsx("span", {
        className: de.squad_name,
        children: "No squad"
      })
    }) : e.jsx(Oe, {
      show: !s,
      children: e.jsx("div", {
        className: de.text_container,
        children: e.jsx("span", {
          className: de.squad_name,
          children: "Loading..."
        })
      })
    })
  },
  Jx = () => {
    var i, o;
    const t = c(r => r.canvas.pixelInfo),
      n = c(r => r.canvas.getPixelInfoFetchStatus),
      s = t !== null && n === p.fulfilled;
    let a = pt;
    return s && t.owner.userPic && t.owner.userPic !== "" && (a = t.owner.userPic), e.jsxs("div", {
      className: de.avatar_container,
      children: [e.jsx("img", {
        alt: "avatar",
        className: de.avatar,
        src: a
      }), e.jsx("div", {
        className: de.squad_avatar_container,
        children: e.jsx(La, {
          src: ((o = (i = t == null ? void 0 : t.owner) == null ? void 0 : i.squad) == null ? void 0 : o.logo) || ""
        })
      })]
    })
  },
  Yx = () => {
    const t = _(),
      n = c(i => i.canvas.pixelInfo),
      s = c(i => i.canvas.getPixelInfoFetchStatus),
      a = n !== null && s === p.fulfilled;
    return e.jsxs("div", {
      children: [a && e.jsxs("span", {
        className: de.owner,
        children: [" ", "Owner "]
      }), a && n.owner.id !== 0 && e.jsxs("span", {
        className: de.id,
        onPointerUp: async i => {
          i.preventDefault(), i.stopPropagation();
          try {
            await Gt(`${n.owner.id}`), await t(z({
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
      }), e.jsx(Oe, {
        show: !a,
        children: e.jsx("span", {
          className: de.owner,
          children: "Owner"
        })
      })]
    })
  },
  Xx = () => e.jsxs("div", {
    className: de.container,
    children: [e.jsx(Yx, {}), e.jsx(Hx, {}), e.jsx(Jx, {}), e.jsx(Gx, {}), e.jsx(Vx, {})]
  }),
  Wx = "_category_text_epppt_1",
  Kx = "_latest_used_container_epppt_8",
  Zx = "_color_line_epppt_15",
  $x = "_color_item_epppt_22",
  ey = "_pipette_container_epppt_30",
  ty = "_child_scale_epppt_48",
  Wo = {
    category_text: Wx,
    latest_used_container: Kx,
    color_line: Zx,
    color_item: $x,
    pipette_container: ey,
    child_scale: ty
  },
  ny = ({
    color: t
  }) => {
    const [n, s] = u.useState(!1), a = u.useRef(null), i = _();
    return e.jsx("div", {
      style: {
        backgroundColor: t,
        transform: n ? "scale(1.2)" : ""
      },
      className: Wo.color_item,
      onPointerUp: () => {
        var o, r;
        s(!0), a.current !== null && clearTimeout(a.current), a.current = setTimeout(() => {
          s(!1)
        }, 200), i(Da(t)), (r = (o = window.Telegram.WebApp) == null ? void 0 : o.HapticFeedback) == null || r.notificationOccurred("success")
      }
    })
  },
  sy = ({
    colors: t
  }) => e.jsx("div", {
    className: Wo.color_line,
    children: t.map((n, s) => e.jsx(ny, {
      color: n
    }, `${n}_${s}`))
  }),
  ay = "_unlock_button_fc8qr_1",
  iy = "_stars_text_fc8qr_13",
  ci = {
    unlock_button: ay,
    stars_text: iy
  },
  oy = () => e.jsxs("div", {
    className: ci.unlock_button,
    children: [e.jsx("span", {
      children: "Unlock all colors for"
    }), e.jsxs("span", {
      className: ci.stars_text,
      children: [e.jsx(pn, {}), e.jsx("span", {
        children: "5000"
      })]
    })]
  }),
  ry = () => {
    c(n => n.color.latest);
    const t = c(n => n.color.basic);
    return e.jsxs(ae.Fragment, {
      children: [e.jsx(sy, {
        colors: t
      }), e.jsx(oy, {})]
    })
  },
  cy = ({
    getData: t
  }) => {
    const n = _(),
      s = c(i => i.canvas.coords),
      a = c(i => i.main.showUserAndSquadPopup);
    return u.useEffect(() => {
      if (s !== null && (t || a)) {
        const i = $e(s);
        n(Bs.getPixelInfo({
          id: i
        }))
      }
    }, [s, t, a, n]), null
  },
  ly = ({
    open: t,
    setOpen: n,
    active: s
  }) => {
    const a = Sx(() => {
        s !== 2 && n(!1)
      }),
      [i, o] = As(() => ({
        from: {
          height: 0,
          opacity: 0
        },
        config: {
          duration: 400,
          easing: ps.easeOutCubic
        }
      })),
      r = u.useRef(null);
    return u.useEffect(() => {
      if (t !== null && r.current !== null) {
        const l = t ? r.current.offsetHeight : 0;
        o.start({
          height: t ? l : 0,
          opacity: t ? 1 : 0
        })
      }
    }, [t, s, r, o]), e.jsxs(hs.div, {
      ref: a,
      className: an.expandable_panel_layout,
      style: {
        ...i
      },
      children: [e.jsx(cy, {
        getData: s === 2 && t
      }), e.jsxs("div", {
        ref: r,
        className: an.expandable_panel,
        children: [e.jsx(Px, {
          active: s
        }), s === 1 && e.jsx(ry, {}), s === 2 && e.jsx(Xx, {})]
      })]
    })
  },
  dy = () => c(ke) ? null : e.jsxs("button", {
    className: oe.button,
    onPointerUp: () => {
      ue("https://t.me/notpixel")
    },
    children: [e.jsx("img", {
      alt: "tg_logo",
      className: oe.tg_logo,
      src: _n
    }), e.jsx("span", {
      className: oe.button_text,
      children: "Go to app for paint"
    })]
  }),
  uy = () => e.jsx(fg, {}),
  my = () => c(ke) ? e.jsx(uy, {}) : e.jsx(dy, {}),
  Ay = () => {
    const t = c(s => s.main.fastMode),
      n = c(s => s.main.currentFastType);
    return e.jsx("div", {
      className: oe.fast_mode_blocker,
      style: {
        pointerEvents: t || n ? "all" : "none",
        opacity: t || n ? .7 : 0
      }
    })
  },
  py = () => {
    const [t, n] = u.useState(!1), [s, a] = u.useState(1), i = c(r => r.main.fastMode), o = c(r => r.main.currentFastType);
    return u.useEffect(() => {
      (i || o) && n(!1)
    }, [i, o]), e.jsx("div", {
      className: oe.order_panel,
      onPointerUp: r => {
        r.stopPropagation()
      },
      children: e.jsxs("div", {
        className: oe.content,
        children: [e.jsx(Ay, {}), e.jsxs("div", {
          className: oe.info,
          children: [e.jsx(yx, {
            open: t,
            setOpen: n,
            active: s,
            setActive: a
          }), e.jsx(wx, {}), e.jsx(vx, {
            open: t,
            setOpen: n,
            active: s,
            setActive: a
          })]
        }), e.jsx(ly, {
          open: t,
          setOpen: n,
          active: s
        }), e.jsx(my, {})]
      })
    })
  },
  hy = () => c(n => n.canvas.coords) === null ? null : e.jsx(ae.Fragment, {
    children: e.jsx(py, {})
  }),
  gy = "_layout_14eqc_1",
  _y = "_container_14eqc_9",
  fy = "_button_14eqc_13",
  ia = {
    layout: gy,
    container: _y,
    button: fy
  },
  xy = () => {
    const t = _();
    return c(s => s.canvas.selectedPrice) !== "my_pixels" ? null : e.jsx("div", {
      className: ia.layout,
      children: e.jsx("div", {
        className: ia.container,
        children: e.jsx("button", {
          className: ia.button,
          onPointerUp: () => {
            t(MA(null)), v.mask.destroy()
          },
          children: "Hide My Pixels"
        })
      })
    })
  },
  yy = () => {
    const t = u.useRef(null),
      n = u.useRef(null);
    u.useEffect(() => () => {
      clearInterval(t.current)
    }, []);
    const s = () => {
      performance.now() - n.current < 200 && v.viewport.zoomIn(), clearInterval(t.current)
    };
    return e.jsx("button", {
      className: C.button,
      onPointerDown: () => {
        n.current = performance.now(), t.current = setInterval(() => {
          v.viewport.zoomIn()
        }, 90)
      },
      onPointerUp: () => {
        performance.now() - n.current < 200 && v.viewport.zoomIn(), clearInterval(t.current)
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
  vy = () => {
    const t = u.useRef(null),
      n = u.useRef(null),
      s = () => {
        performance.now() - n.current < 200 && v.viewport.zoomOut(), clearInterval(t.current)
      };
    return u.useEffect(() => () => {
      clearInterval(t.current)
    }, []), u.useEffect(() => (window.addEventListener("blur", s), () => {
      window.removeEventListener("blur", s)
    }), []), e.jsx("button", {
      className: C.button,
      onPointerDown: () => {
        n.current = performance.now(), t.current = setInterval(() => {
          v.viewport.zoomOut()
        }, 90)
      },
      onPointerUp: () => {
        performance.now() - n.current < 200 && v.viewport.zoomOut(), clearInterval(t.current)
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
  wy = () => e.jsxs("div", {
    className: C.buttons_container,
    children: [e.jsx(yy, {}), e.jsx(vy, {})]
  }),
  jy = () => {
    const t = _(),
      n = [C.button],
      s = c(r => r.shop.limitedGood),
      a = c(r => r.shop.limitedEnd),
      [i, o] = u.useState(null);
    return u.useEffect(() => {
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
      className: `${n.join(" ")} ${C.shop_button}`,
      onPointerUp: () => {
        t(wc())
      },
      children: [e.jsx("img", {
        alt: "img",
        className: C.button_image,
        src: s.image_url
      }), e.jsx("div", {
        className: C.limited_good_timer,
        children: Ul(i)
      })]
    }) : null
  },
  by = () => c(ke) ? e.jsx("div", {
    className: C.buttons_container,
    children: e.jsx(jy, {})
  }) : null,
  Ny = () => e.jsx("div", {
    className: C.layout,
    children: e.jsxs("div", {
      className: C.container,
      children: [e.jsx(wy, {}), e.jsx(by, {})]
    })
  }),
  Iy = () => null,
  Cy = "_layout_dnjz3_1",
  Py = "_container_dnjz3_9",
  li = {
    layout: Cy,
    container: Py
  },
  Sy = () => e.jsx("div", {
    className: li.layout,
    children: e.jsx("div", {
      className: li.container,
      children: "Online 124k"
    })
  }),
  Ty = () => (_(), null),
  Ey = "_layout_15ijk_1",
  By = "_container_15ijk_16",
  Dy = "_item_15ijk_21",
  ky = "_move_15ijk_1",
  wa = {
    layout: Ey,
    container: By,
    item: Dy,
    move: ky
  },
  Ry = ({
    item: t
  }) => {
    const n = _(),
      s = c(Gn);
    return u.useEffect(() => {
      const a = setTimeout(() => {
        n(Mp(t.id))
      }, 1e3);
      return () => {
        clearTimeout(a)
      }
    }, []), e.jsxs("div", {
      className: wa.item,
      style: {
        left: t.flyCoords.x,
        top: t.flyCoords.y,
        fontSize: t.isExtraReward ? 18 : 14
      },
      children: ["+", t.isExtraReward ? rc + s : 0, " ", e.jsx(H, {})]
    })
  },
  My = () => {
    const t = c(n => n.main.flyingRewards);
    return e.jsx("div", {
      className: wa.layout,
      children: e.jsx("div", {
        className: wa.container,
        children: t.map(n => e.jsx(Ry, {
          item: n
        }, n.id))
      })
    })
  },
  Uy = "_panel_1urz2_1",
  Fy = "_content_1urz2_16",
  di = {
    panel: Uy,
    content: Fy
  },
  Oy = () => c(n => n.canvas.coords) !== null ? null : e.jsx("div", {
    className: di.panel,
    children: e.jsx("div", {
      className: di.content,
      children: "A-yo! Zoom, tap, paint"
    })
  }),
  Qy = "_layout_1v16g_1",
  zy = "_container_1v16g_5",
  qy = "_close_button_1v16g_14",
  Ly = "_title_container_1v16g_22",
  Hy = "_image_container_1v16g_28",
  Gy = "_image_1v16g_28",
  Vy = "_first_image_1v16g_45",
  Jy = "_second_image_1v16g_50",
  Yy = "_text_container_1v16g_55",
  Xy = "_button_container_1v16g_60",
  Wy = "_button_1v16g_60",
  Ie = {
    layout: Qy,
    container: zy,
    close_button: qy,
    title_container: Ly,
    image_container: Hy,
    image: Gy,
    first_image: Vy,
    second_image: Jy,
    text_container: Yy,
    button_container: Xy,
    button: Wy
  },
  Ky = "_layout_1df7o_1",
  Zy = "_container_1df7o_14",
  $y = "_move_in_1df7o_1",
  ui = {
    layout: Ky,
    container: Zy,
    move_in: $y
  },
  Qe = ({
    children: t,
    show: n,
    onPointerUp: s = () => {}
  }) => {
    const [a, i] = u.useState(!1), [o, r] = As(() => ({
      from: {
        opacity: 0
      },
      config: {
        duration: 300,
        easing: ps.easeOutCubic
      }
    }));
    return u.useEffect(() => {
      n ? (i(!0), r.start({
        opacity: 1
      })) : n || r.start({
        opacity: 0,
        onResolve: () => i(!1)
      })
    }, [n]), a ? e.jsx(hs.div, {
      className: ui.layout,
      style: {
        ...o
      },
      onPointerUp: s,
      children: e.jsx("div", {
        className: ui.container,
        children: t
      })
    }) : null
  },
  ev = () => {
    const t = _(),
      n = c(o => o.main.referrerSquadId),
      [s, a] = u.useState(null),
      i = c(o => o.user.user);
    return u.useEffect(() => {
      if (n) try {
        (async () => {
          const r = await X.getSquadInfo({
            id: n
          });
          r.data.squad && r.data.squad.id !== null && a(r.data.squad)
        })()
      } catch {}
    }, [n]), e.jsx(Qe, {
      show: n !== null,
      onPointerUp: () => {
        t(ga(null))
      },
      children: e.jsx("div", {
        className: Ie.layout,
        onPointerUp: o => {
          o.stopPropagation()
        },
        children: e.jsxs("div", {
          className: Ie.container,
          children: [e.jsx("div", {
            className: Ie.close_button,
            onPointerUp: () => {
              t(ga(null))
            },
            children: e.jsx(N, {
              size: 26,
              children: ""
            })
          }), e.jsx("div", {
            className: Ie.title_container,
            children: e.jsx("span", {
              children: "Friend's squad invitation"
            })
          }), e.jsxs("div", {
            className: Ie.image_container,
            children: [e.jsx("img", {
              alt: "img",
              className: `${Ie.image} ${Ie.first_image}`,
              src: s === null ? Lt : s.logo
            }), e.jsx("img", {
              alt: "img",
              className: `${Ie.image} ${Ie.second_image}`,
              src: i === null || i.userPic === "" ? pt : i.userPic
            })]
          }), e.jsx("div", {
            className: Ie.text_container,
            children: e.jsxs("span", {
              children: ["Your friend is a part of the", " ", s === null ? "" : `"${s.name}"`, " squad. Ready to team up?"]
            })
          }), e.jsx("div", {
            className: Ie.button_container,
            children: e.jsxs("button", {
              className: Ie.button,
              onPointerUp: () => {
                s !== null && ue(`https://t.me/${bt}?startapp=${btoa(`id=${s.id}`)}`)
              },
              children: [s !== null && `Join ${s.name} squad`, s === null && "Loading squad info..."]
            })
          })]
        })
      })
    })
  },
  tv = "_layout_srn55_1",
  nv = "_container_srn55_12",
  sv = "_buttons_container_srn55_18",
  oa = {
    layout: tv,
    container: nv,
    buttons_container: sv
  },
  av = "_button_xsy81_2",
  iv = "_image_xsy81_19",
  ov = "_enabled_xsy81_25",
  rv = "_gray_xsy81_29",
  Ue = {
    button: av,
    image: iv,
    enabled: ov,
    gray: rv
  },
  cv = () => {
    const t = _(),
      n = c(i => i.template.worldTemplate),
      s = c(i => i.template.active) === ge.world,
      a = [Ue.button];
    return s && a.push(Ue.enabled), n === null ? null : e.jsx("button", {
      className: a.join(" "),
      onPointerUp: () => {
        s ? t(wn()) : (v.viewport.viewport.animate({
          scale: 2,
          time: 400,
          position: {
            x: n.x + n.imageSize / 2,
            y: n.y + n.imageSize / 2
          }
        }), t(Ua(ge.world)))
      },
      children: e.jsx("img", {
        alt: "img",
        className: Ue.image,
        src: n.url
      })
    })
  },
  lv = "_container_srbwq_1",
  dv = {
    container: lv
  },
  uv = ({
    show: t,
    setShow: n
  }) => t ? Xe.createPortal(e.jsx("div", {
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
  mv = 1,
  mi = 0,
  Ai = 100,
  Av = ({
    rtl: t = !0
  }) => {
    const n = _(),
      s = c(o => o.template.opacity),
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
      children: [e.jsx(uv, {
        show: a,
        setShow: i
      }), e.jsx(vt.Range, {
        direction: vt.Direction.Up,
        values: s,
        step: mv,
        min: mi,
        max: Ai,
        onChange: o => {
          n(Hh(o)), v.mainImage.worldTemplate.setOpacity(Number(o[0]))
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
              background: vt.getTrackBackground({
                values: s,
                colors: ["var(--font-secondary-color)", "var(--font-secondary-color)"],
                min: mi,
                max: Ai,
                direction: vt.Direction.Up,
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
  pv = () => c(n => n.template.active) === null ? null : e.jsx("div", {
    className: dv.container,
    children: e.jsx(Av, {})
  }),
  hv = () => {
    const t = _(),
      n = Z(),
      s = c(o => o.template.referredTemplate),
      a = c(o => o.template.active) === ge.referred,
      i = [Ue.button];
    return a && i.push(Ue.enabled), e.jsxs("button", {
      className: i.join(" "),
      onPointerUp: () => {
        if (!s) {
          t(vs("catalog")), n.push("/template");
          return
        }
        a ? t(wn()) : (v.viewport.viewport.animate({
          scale: 4,
          time: 400,
          position: {
            x: s.x + s.imageSize / 2,
            y: s.y + s.imageSize / 2
          }
        }), t(Ua(ge.referred)))
      },
      children: [s === null && e.jsx(N, {
        className: Ue.gray,
        size: 24,
        children: ""
      }), s !== null && e.jsx("img", {
        alt: "img",
        className: Ue.image,
        src: `${s.url}`
      })]
    })
  },
  gv = "_instruction_container_14ts7_1",
  _v = "_img_container_14ts7_9",
  fv = "_image_14ts7_15",
  xv = "_instruction_text_14ts7_21",
  yv = "_preview_container_14ts7_26",
  vv = "_preview_image_container_14ts7_32",
  wv = "_preview_image_14ts7_32",
  jv = "_preview_image_loader_14ts7_45",
  bv = "_template_size_14ts7_60",
  Nv = "_template_title_14ts7_68",
  Iv = "_template_size_container_14ts7_73",
  Cv = "_template_size_item_14ts7_79",
  Pv = "_template_size_item_active_14ts7_87",
  Sv = "_template_coords_14ts7_92",
  Tv = "_template_coordinates_title_14ts7_102",
  Ev = "_template_coords_container_14ts7_107",
  Bv = "_coords_item_14ts7_114",
  Dv = "_coords_input_14ts7_120",
  kv = "_file_button_container_14ts7_129",
  Rv = "_file_button_14ts7_129",
  $ = {
    instruction_container: gv,
    img_container: _v,
    image: fv,
    instruction_text: xv,
    preview_container: yv,
    preview_image_container: vv,
    preview_image: wv,
    preview_image_loader: jv,
    template_size: bv,
    template_title: Nv,
    template_size_container: Iv,
    template_size_item: Cv,
    template_size_item_active: Pv,
    template_coords: Sv,
    template_coordinates_title: Tv,
    template_coords_container: Ev,
    coords_item: Bv,
    coords_input: Dv,
    file_button_container: kv,
    file_button: Rv
  },
  dn = {
    16: 512,
    32: 2048,
    64: 8192,
    128: 2e4
  },
  Mv = ({
    templateSize: t,
    setTemplateSize: n
  }) => {
    const s = _(),
      a = c(be),
      i = a.friends || 64,
      [o] = u.useState([16, 32, 64, 128]);
    return e.jsxs("div", {
      className: $.template_size,
      children: [e.jsx("div", {
        className: $.template_title,
        children: "Select a template size"
      }), e.jsx("div", {
        className: $.template_size_container,
        children: o.map(r => {
          if (r === 128 && !a.isContractor) return null;
          const l = [$.template_size_item];
          return t === r && l.push($.template_size_item_active), e.jsx("div", {
            className: l.join(" "),
            onPointerUp: () => {
              i >= dn[r] || a.isContractor ? n(r) : s(z({
                id: performance.now(),
                text: `To unlock this size, invite ${dn[r]-i} more frens.`
              }))
            },
            children: `${r} X ${r}`
          }, r)
        })
      }), " "]
    })
  },
  Uv = () => {
    const t = _(),
      n = c(r => r.user.user),
      s = Z(),
      a = c(r => r.template.myTemplate),
      i = c(r => r.template.active) === ge.my,
      o = [Ue.button];
    return i && o.push(Ue.enabled), n && n.friends >= dn[16] || n.isContractor ? e.jsxs("button", {
      className: o.join(" "),
      onPointerUp: () => {
        if (!a) {
          t(vs("my")), s.push("/template");
          return
        }
        i ? t(wn()) : (v.viewport.viewport.animate({
          scale: 4,
          time: 400,
          position: {
            x: a.x + a.imageSize / 2,
            y: a.y + a.imageSize / 2
          }
        }), t(Ua(ge.my)))
      },
      children: [a === null && e.jsx(N, {
        className: Ue.gray,
        size: 24,
        children: ""
      }), a !== null && e.jsx("img", {
        alt: "img",
        className: Ue.image,
        src: `${a.url}`
      })]
    }) : null
  },
  Fv = "_button_5u70q_2",
  Ov = "_image_5u70q_22",
  Qv = "_enabled_5u70q_29",
  zv = "_gray_5u70q_33",
  qv = "_indicator_5u70q_37",
  ra = {
    button: Fv,
    image: Ov,
    enabled: Qv,
    gray: zv,
    indicator: qv
  },
  Ko = "/assets/gold_pixel-CRD2C_ap.gif",
  Lv = () => {
    const t = Z(),
      n = [ra.button];
    return e.jsxs("button", {
      className: n.join(" "),
      onPointerUp: () => {
        t.push("/tournament")
      },
      children: [e.jsx("img", {
        alt: "img",
        className: ra.image,
        src: Ko
      }), e.jsx("div", {
        className: ra.indicator
      })]
    })
  },
  Hv = () => e.jsx(ae.Fragment, {
    children: e.jsx("div", {
      className: oa.layout,
      children: e.jsx("div", {
        className: oa.container,
        children: e.jsxs("div", {
          className: oa.buttons_container,
          children: [e.jsx(Lv, {}), e.jsx(cv, {}), e.jsx(hv, {}), e.jsx(Uv, {}), e.jsx(pv, {})]
        })
      })
    })
  }),
  Gv = "_layout_1a5xo_1",
  Vv = "_container_1a5xo_5",
  pi = {
    layout: Gv,
    container: Vv
  },
  Jv = () => {
    const t = _(),
      n = c(i => i.main.fastMode);
    if (!c(i => i.canvas.coords)) return null;
    const a = [C.button, C.fast_type_button, C.shop_button];
    return n && a.push(C.fast_mode_button_enabled), e.jsx("button", {
      className: a.join(" "),
      onPointerUp: () => {
        t(n ? Ds() : fo())
      },
      children: e.jsx("img", {
        alt: "img",
        className: C.button_image,
        src: Oi
      })
    })
  },
  Yv = () => {
    const t = _(),
      n = c(l => l.canvas.coords),
      s = c(l => l.main.fastMode),
      a = c(l => l.main.currentFastType),
      i = c(l => l.shop.available);
    if (!n || !(i[4] > 0)) return null;
    const r = [C.button, C.shop_button, C.fast_type_button];
    return e.jsxs("button", {
      className: r.join(" "),
      onPointerUp: () => {
        if (s || a) return;
        const l = v.mainImage.getPixelColor({
          coords: n
        });
        t(Da(l))
      },
      children: [e.jsx("div", {
        className: C.disabled_button_cover,
        style: {
          opacity: s || a ? .7 : 0
        }
      }), e.jsx("img", {
        alt: "img",
        className: C.button_image,
        src: Fi
      })]
    })
  },
  Xv = () => {
    const t = [C.button, C.shop_button, C.fast_type_button],
      n = [C.button_image];
    return c(a => a.main.pixanosProcessing) && n.push(C.animation), e.jsxs("button", {
      className: t.join(" "),
      style: {
        borderRadius: "0 var(--border-radius) var(--border-radius) 0",
        pointerEvents: "none"
      },
      children: [e.jsx("div", {
        className: C.disabled_button_cover,
        style: {
          opacity: .7,
          borderRadius: "0 var(--border-radius) var(--border-radius) 0"
        }
      }), e.jsx("img", {
        alt: "img",
        className: n.join(" "),
        src: Cs
      })]
    })
  },
  Wv = () => c(n => n.canvas.coords) === null ? null : e.jsx("div", {
    className: pi.layout,
    children: e.jsxs("div", {
      className: pi.container + " " + C.container__bottom,
      children: [e.jsx(Ig, {}), e.jsx(jg, {}), e.jsx(Kg, {}), e.jsx(Th, {}), e.jsx(Jv, {}), e.jsx(Yv, {}), e.jsx(Xv, {})]
    })
  }),
  Kv = "_layout_11ck4_1",
  Zv = {
    layout: Kv
  },
  $v = () => e.jsxs("div", {
    className: Zv.layout,
    children: [e.jsx(Wv, {}), e.jsx(hy, {})]
  }),
  ew = () => e.jsxs(e.Fragment, {
    children: [e.jsx(Sy, {}), e.jsx(xy, {}), e.jsx(Hv, {}), e.jsx(Ny, {}), e.jsx($v, {}), e.jsx(Oy, {}), e.jsx(My, {}), e.jsx(ev, {}), e.jsx(Ty, {}), e.jsx(Iy, {})]
  }),
  tw = "_page_title_13ybj_1",
  nw = "_container_13ybj_9",
  sw = "_item_13ybj_13",
  aw = "_active_13ybj_18",
  iw = "_info_container_13ybj_34",
  ow = "_dot_13ybj_40",
  rw = "_title_text_13ybj_46",
  cw = "_capitalize_13ybj_50",
  lw = "_hint_text_13ybj_54",
  dw = "_date_text_13ybj_61",
  uw = "_value_container_13ybj_66",
  mw = "_value_text_13ybj_74",
  Aw = "_positive_color_13ybj_78",
  pw = "_negative_color_13ybj_85",
  hw = "_last_text_13ybj_92",
  x = {
    page_title: tw,
    container: nw,
    item: sw,
    active: aw,
    info_container: iw,
    dot: ow,
    title_text: rw,
    capitalize: cw,
    hint_text: lw,
    date_text: dw,
    value_container: uw,
    value_text: mw,
    positive_color: Aw,
    negative_color: pw,
    last_text: hw
  },
  gw = ({
    item: t
  }) => {
    const n = Z(),
      s = xs(t.details.pixel),
      a = _();
    return e.jsxs("div", {
      className: `${x.item} ${x.active}`,
      onPointerUp: () => {
        n.push("/"), v.viewport.viewport.animate({
          scale: 25,
          time: 400,
          position: s
        }), v.mainImage.selectedPixel.draw(s), a(It(s)), n.push("/")
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
            children: De(new Date(t.dateTime))
          })
        })]
      }), e.jsx("div", {
        className: x.value_container,
        children: e.jsxs("span", {
          className: `${x.value_text} ${x.positive_color}`,
          children: ["+", new Intl.NumberFormat("fr", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          }).format(Math.abs(t.balanceChange)).replace(",", ".")]
        })
      })]
    })
  },
  _w = ({
    item: t
  }) => {
    const n = Z(),
      s = {
        x: t.details.x,
        y: t.details.y
      },
      a = _();
    return e.jsxs("div", {
      className: `${x.item} ${x.active}`,
      onPointerUp: () => {
        n.push("/"), v.viewport.viewport.animate({
          scale: 25,
          time: 400,
          position: s
        }), v.mainImage.selectedPixel.draw(s), a(It(s)), n.push("/")
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
          }), e.jsx(Nn, {
            address: t.details.buyer
          })]
        }), e.jsx("div", {
          className: x.date_text,
          children: e.jsx("span", {
            children: De(new Date(t.dateTime))
          })
        })]
      }), e.jsx("div", {
        className: x.value_container,
        children: e.jsxs("span", {
          className: `${x.value_text} ${x.positive_color}`,
          children: ["+", new Intl.NumberFormat("fr", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          }).format(t.balanceChange).replace(",", ".")]
        })
      })]
    })
  },
  fw = ({
    item: t
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
          children: De(new Date(t.dateTime))
        })
      })]
    }), e.jsx("div", {
      className: x.value_container,
      children: e.jsxs("span", {
        className: `${x.value_text} ${x.positive_color}`,
        children: ["+", t.balanceChange.toFixed(2)]
      })
    })]
  }),
  xw = ({
    item: t
  }) => e.jsxs("div", {
    className: x.item,
    children: [e.jsxs("div", {
      className: x.info_container,
      children: [e.jsxs("div", {
        children: [e.jsx("span", {
          className: x.title_text,
          children: t.details.type
        }), e.jsx("span", {
          className: x.hint_text,
          children: "Boost"
        })]
      }), e.jsx("div", {
        className: x.date_text,
        children: e.jsx("span", {
          children: De(new Date(t.dateTime))
        })
      })]
    }), e.jsx("div", {
      className: x.value_container,
      children: e.jsx("span", {
        className: `${x.value_text} ${x.negative_color}`,
        children: t.balanceChange
      })
    })]
  }),
  yw = ({
    item: t
  }) => e.jsxs("div", {
    className: x.item,
    children: [e.jsxs("div", {
      className: x.info_container,
      children: [e.jsxs("div", {
        children: [e.jsx("span", {
          className: `${x.title_text} ${x.capitalize}`,
          children: `${t.details.from} > ${t.details.to}`
        }), e.jsx("span", {
          className: x.hint_text,
          children: "League"
        })]
      }), e.jsx("div", {
        className: x.date_text,
        children: e.jsx("span", {
          children: De(new Date(t.dateTime))
        })
      })]
    }), e.jsx("div", {
      className: x.value_container
    })]
  }),
  vw = ({
    item: t
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
        }), e.jsx(Nn, {
          address: t.details.name
        })]
      }), e.jsx("div", {
        className: x.date_text,
        children: e.jsx("span", {
          children: De(new Date(t.dateTime))
        })
      })]
    }), e.jsx("div", {
      className: x.value_container,
      children: e.jsxs("span", {
        className: `${x.value_text} ${x.positive_color}`,
        children: ["+", t.balanceChange]
      })
    })]
  }),
  ww = ({
    item: t
  }) => e.jsxs("div", {
    className: x.item,
    children: [e.jsxs("div", {
      className: x.info_container,
      children: [e.jsxs("div", {
        children: [e.jsx("span", {
          className: x.title_text,
          children: t.details.type
        }), e.jsx("span", {
          className: x.hint_text,
          children: "Special"
        })]
      }), e.jsx("div", {
        className: x.date_text,
        children: e.jsx("span", {
          children: De(new Date(t.dateTime))
        })
      })]
    }), e.jsx("div", {
      className: x.value_container,
      children: e.jsxs("span", {
        className: `${x.value_text} ${x.positive_color}`,
        children: ["+", t.balanceChange]
      })
    })]
  }),
  jw = ({
    item: t
  }) => e.jsxs("div", {
    className: x.item,
    children: [e.jsxs("div", {
      className: x.info_container,
      children: [e.jsxs("div", {
        children: [e.jsx("span", {
          className: `${x.title_text} ${x.capitalize}`,
          children: `${t.details.type}`
        }), e.jsxs("span", {
          className: x.hint_text,
          children: [t.details.quantity, " pc."]
        })]
      }), e.jsx("div", {
        className: x.date_text,
        children: e.jsx("span", {
          children: De(new Date(t.dateTime))
        })
      })]
    }), e.jsxs("div", {
      className: x.value_container,
      children: ["-", t.details.price, " ", e.jsx(pn, {
        fontSize: 14
      })]
    })]
  }),
  bw = ({
    item: t
  }) => e.jsxs("div", {
    className: x.item,
    children: [e.jsxs("div", {
      className: x.info_container,
      children: [e.jsxs("div", {
        children: [e.jsx("span", {
          className: x.title_text,
          children: t.details.type
        }), e.jsx("span", {
          className: x.hint_text,
          children: "Task"
        })]
      }), e.jsx("div", {
        className: x.date_text,
        children: e.jsx("span", {
          children: De(new Date(t.dateTime))
        })
      })]
    }), e.jsx("div", {
      className: x.value_container,
      children: e.jsxs("span", {
        className: `${x.value_text} ${x.positive_color}`,
        children: ["+", t.balanceChange]
      })
    })]
  }),
  Nw = ({
    item: t
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
          children: t.details.type
        })]
      }), e.jsx("div", {
        className: x.date_text,
        children: e.jsx("span", {
          children: De(new Date(t.dateTime))
        })
      })]
    }), e.jsx("div", {
      className: x.value_container,
      children: e.jsxs("span", {
        className: `${x.value_text} ${x.positive_color}`,
        children: ["+", t.balanceChange.toFixed(2)]
      })
    })]
  }),
  Iw = ({
    item: t
  }) => t.action === "buy pixel" ? e.jsx(gw, {
    item: t
  }) : t.action === "sell pixel" ? e.jsx(_w, {
    item: t
  }) : t.action === "claim" ? e.jsx(fw, {
    item: t
  }) : t.action === "get boost" ? e.jsx(xw, {
    item: t
  }) : t.action === "league transfer" ? e.jsx(yw, {
    item: t
  }) : t.action === "referral" ? e.jsx(vw, {
    item: t
  }) : t.action === "special" ? e.jsx(ww, {
    item: t
  }) : t.action === "purchase" ? e.jsx(jw, {
    item: t
  }) : t.action === "complete task" ? e.jsx(bw, {
    item: t
  }) : t.action === "referrer reward" ? e.jsx(Nw, {
    item: t
  }) : (console.log("unknown action: ", t.action), null),
  Cw = () => {
    const t = _(),
      n = c(a => a.history.list),
      s = c(a => a.history.status);
    return u.useEffect(() => {
      t(Ma.get({
        offset: 0,
        limit: 50
      }))
    }, []), e.jsxs("div", {
      className: x.container,
      children: [n.map((a, i) => e.jsx(Iw, {
        item: a
      }, i)), s === p.fulfilled && n.length >= 50 && e.jsx("div", {
        className: x.last_text,
        children: e.jsx("span", {
          children: "Last 50 events"
        })
      })]
    })
  },
  Pw = () => e.jsxs(le, {
    children: [e.jsx("h1", {
      className: x.page_title,
      children: "History"
    }), e.jsx(Cw, {})]
  }),
  Sw = "_text_layout_1xggq_1",
  Tw = "_text_1xggq_1",
  Ew = "_button_layout_1xggq_14",
  Bw = "_button_layout_placeholder_1xggq_26",
  Dw = "_button_1xggq_14",
  Zt = {
    text_layout: Sw,
    text: Tw,
    button_layout: Ew,
    button_layout_placeholder: Bw,
    button: Dw
  },
  kw = () => e.jsxs(le, {
    children: [e.jsx("div", {
      className: Zt.text_layout,
      children: e.jsxs("span", {
        className: Zt.text,
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
      className: Zt.button_layout_placeholder
    }), e.jsx("div", {
      className: Zt.button_layout,
      children: e.jsxs("button", {
        className: Zt.button,
        onPointerUp: () => {
          ue("https://t.me/notpixel_channel")
        },
        children: [e.jsx("img", {
          alt: "tg_logo",
          src: _n
        }), "Telegram Channel"]
      })
    })]
  }),
  Rw = "_text_layout_1h04i_1",
  Mw = "_text_1h04i_1",
  Uw = "_button_layout_1h04i_14",
  Fw = "_button_layout_placeholder_1h04i_26",
  Ow = "_button_1h04i_14",
  $t = {
    text_layout: Rw,
    text: Mw,
    button_layout: Uw,
    button_layout_placeholder: Fw,
    button: Ow
  },
  Qw = () => e.jsxs(le, {
    children: [e.jsx("div", {
      className: $t.text_layout,
      children: e.jsxs("span", {
        className: $t.text,
        children: [e.jsx("h1", {
          children: "Awards"
        }), e.jsx("p", {
          children: "There will be something here, but not now."
        })]
      })
    }), e.jsx("div", {
      className: $t.button_layout_placeholder
    }), e.jsx("div", {
      className: $t.button_layout,
      children: e.jsxs("button", {
        className: $t.button,
        onPointerUp: () => {
          ue(Ti)
        },
        children: [e.jsx("img", {
          alt: "tg_logo",
          src: _n
        }), "Not Pixel 42"]
      })
    })]
  }),
  zw = "_layout_1drph_1",
  qw = "_container_1drph_11",
  Lw = "_bold_1drph_22",
  Hw = "_info_container_1drph_26",
  Gw = "_title_1drph_33",
  Vw = "_description_1drph_38",
  Jw = "_image_container_1drph_43",
  Yw = "_image_1drph_43",
  Xw = "_extra_info_container_1drph_53",
  Ww = "_npx_tokens_1drph_77",
  Kw = "_button_container_1drph_81",
  Zw = "_button_1drph_81",
  we = {
    layout: zw,
    container: qw,
    bold: Lw,
    info_container: Hw,
    title: Gw,
    description: Vw,
    image_container: Jw,
    image: Yw,
    extra_info_container: Xw,
    npx_tokens: Ww,
    button_container: Kw,
    button: Zw
  },
  $w = "/assets/intro-Brtd1phH.webp",
  ej = {
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
  tj = () => {
    const t = Z();
    return Xe.createPortal(e.jsx("div", {
      className: we.layout,
      children: e.jsxs(on.div, {
        className: we.container,
        ...ej,
        children: [e.jsxs("div", {
          className: we.info_container,
          children: [e.jsx("span", {
            className: `${we.title} ${we.bold}`,
            children: "New Pixel Order!"
          }), e.jsx("span", {
            className: we.description,
            children: "Not Pixel is a blank canvas 1000×1000px where Telegram users transform pixels."
          })]
        }), e.jsx("div", {
          className: we.image_container,
          children: e.jsx("img", {
            alt: "image",
            className: we.image,
            src: $w
          })
        }), e.jsxs("div", {
          className: we.extra_info_container,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              className: `${we.bold}`,
              children: "Probably all you need to know:"
            })
          }), e.jsx("div", {
            children: e.jsxs("ol", {
              children: [e.jsx("li", {
                children: "You can put some pixels on it, but you have to wait to continue."
              }), e.jsxs("li", {
                children: ["Get rewarded in", " ", e.jsx(H, {
                  size: 14,
                  style: {
                    transform: "translateY(1.5px)"
                  }
                }), e.jsx("span", {
                  className: `${we.npx_tokens} ${we.bold}`,
                  children: " Not PX "
                }), " ", "tokens for repainting and owning pixels."]
              }), e.jsx("li", {
                children: "Be creative. Enjoy."
              })]
            })
          })]
        }), e.jsx("div", {
          className: we.button_container,
          children: e.jsx("button", {
            className: we.button,
            onPointerUp: () => {
              t.push("/"), Vt.save("skipIntro", "true")
            },
            children: "Let’s Gooooooo!"
          })
        })]
      })
    }), document.body)
  },
  nj = "_text_layout_q4wab_1",
  sj = "_text_q4wab_1",
  aj = "_button_layout_q4wab_15",
  ij = "_button_layout_placeholder_q4wab_27",
  oj = "_button_q4wab_15",
  en = {
    text_layout: nj,
    text: sj,
    button_layout: aj,
    button_layout_placeholder: ij,
    button: oj
  },
  rj = () => e.jsxs(le, {
    children: [e.jsx("div", {
      className: en.text_layout,
      children: e.jsxs("span", {
        className: en.text,
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
      className: en.button_layout_placeholder
    }), e.jsx("div", {
      className: en.button_layout,
      children: e.jsxs("button", {
        className: en.button,
        onPointerUp: () => {
          Ht("https://ton.org/en/open-league")
        },
        children: ["Details on ton.org ", e.jsx(N, {
          size: 16,
          children: ""
        })]
      })
    })]
  }),
  cj = "_text_layout_q4wab_1",
  lj = "_text_q4wab_1",
  dj = "_button_layout_q4wab_15",
  uj = "_button_layout_placeholder_q4wab_27",
  mj = "_button_q4wab_15",
  hi = {
    text_layout: cj,
    text: lj,
    button_layout: dj,
    button_layout_placeholder: uj,
    button: mj
  },
  Aj = () => e.jsx(le, {
    children: e.jsx("div", {
      className: hi.text_layout,
      children: e.jsxs("span", {
        className: hi.text,
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
  pj = "_close_container_1pvsg_1",
  hj = "_title_container_1pvsg_12",
  gj = "_title_1pvsg_12",
  _j = "_frens_count_1pvsg_21",
  fj = "_content_1pvsg_25",
  xj = "_image_container_1pvsg_32",
  yj = "_image_1pvsg_32",
  vj = "_description_container_1pvsg_41",
  wj = "_white_1pvsg_50",
  jj = "_gray_1pvsg_54",
  bj = "_purple_1pvsg_58",
  Nj = "_bold_1pvsg_64",
  Ij = "_center_1pvsg_68",
  Cj = "_info_layout_1pvsg_72",
  Pj = "_benefits_container_1pvsg_84",
  Sj = "_benefits_item_1pvsg_92",
  Tj = "_divider_1pvsg_98",
  Ej = "_buttons_container_1pvsg_105",
  Bj = "_button_copy_1pvsg_112",
  Dj = "_button_1pvsg_105",
  k = {
    close_container: pj,
    title_container: hj,
    title: gj,
    frens_count: _j,
    content: fj,
    image_container: xj,
    image: yj,
    description_container: vj,
    white: wj,
    gray: jj,
    purple: bj,
    bold: Nj,
    center: Ij,
    info_layout: Cj,
    benefits_container: Pj,
    benefits_item: Sj,
    divider: Tj,
    buttons_container: Ej,
    button_copy: Bj,
    button: Dj
  },
  kj = "/assets/sitting_chars_shadow-DfXpFWWw.gif",
  Rj = "_link_a4r15_1",
  Mj = {
    link: Rj
  },
  Tt = ({
    url: t,
    className: n = "",
    text: s = "Copy referral link"
  }) => {
    const [a, i] = u.useState(null), o = u.useRef(null);
    return e.jsxs("div", {
      className: `${Mj.link} ${n}`,
      onPointerUp: async r => {
        var d, m;
        const l = await Gt(t);
        r.stopPropagation(), l ? (i("Copied!"), (m = (d = window.Telegram.WebApp) == null ? void 0 : d.HapticFeedback) == null || m.notificationOccurred("success")) : i("Can't copy :-("), clearTimeout(o.current), o.current = setTimeout(() => {
          i(null)
        }, 3e3)
      },
      children: [a === null ? e.jsx("span", {
        children: s
      }) : a, a === null ? e.jsx(N, {
        size: 20,
        children: ""
      }) : ""]
    })
  },
  Uj = () => {
    const {
      t
    } = Be("translation", {
      keyPrefix: "frens"
    }), n = c(o => o.user.user), s = c(o => o.main.settings);
    let a = `${mt}?startapp=f${(n==null?void 0:n.id)||""}`;
    n && n.squad && n.squad.id !== null && (a += `_s${n.squad.id}`);
    const i = (n == null ? void 0 : n.friends) || 0;
    return e.jsxs(le, {
      children: [e.jsxs("div", {
        className: k.content,
        children: [e.jsx("div", {
          className: k.image_container,
          children: e.jsx("img", {
            alt: "image",
            className: k.image,
            src: kj
          })
        }), e.jsx("div", {
          className: k.title_container,
          children: e.jsx("div", {
            className: k.title,
            children: t("invite")
          })
        }), e.jsxs("div", {
          className: k.description_container,
          children: [e.jsx("div", {
            children: e.jsx("span", {
              children: t("description")
            })
          }), e.jsxs("div", {
            children: [e.jsxs("span", {
              children: [" ", t("your"), " "]
            }), e.jsx("span", {
              className: `${k.frens_count} ${k.bold}`,
              children: i
            })]
          })]
        }), e.jsxs("div", {
          className: k.buttons_container,
          children: [e.jsx(Tt, {
            url: a,
            className: k.button_copy
          }), e.jsx("button", {
            className: k.button,
            onPointerUp: o => {
              o.stopPropagation(), ue(`https://t.me/share/url?url=${a}`)
            },
            children: "Share"
          })]
        })]
      }), e.jsx("div", {
        className: k.info_layout,
        children: e.jsxs("div", {
          className: k.benefits_container,
          children: [e.jsxs("div", {
            className: k.benefits_item,
            children: [e.jsx("div", {
              children: e.jsx("span", {
                className: k.gray,
                children: t("benefits.title1")
              })
            }), e.jsxs("div", {
              children: [e.jsxs("span", {
                className: `${k.bold}`,
                children: [s.InitialCoins, " PX "]
              }), e.jsx("span", {
                className: `${k.gray}`,
                children: t("benefits.text1")
              })]
            })]
          }), e.jsxs("div", {
            className: k.benefits_item,
            children: [e.jsx("div", {
              children: e.jsxs(qs, {
                i18nKey: "frens.benefits.title2",
                children: [e.jsx("span", {
                  className: k.gray
                }), e.jsx("span", {
                  className: `${k.bold} ${k.purple}`
                })]
              })
            }), e.jsxs("div", {
              children: [e.jsxs("span", {
                className: `${k.bold}`,
                children: [s.RefRewardCoinsPremium, " PX", " "]
              }), e.jsx("span", {
                className: `${k.gray}`,
                children: t("benefits.text2")
              })]
            })]
          }), e.jsx("div", {
            className: k.divider
          }), e.jsxs("div", {
            className: k.benefits_item,
            children: [e.jsx("div", {
              children: e.jsx("span", {
                className: k.gray,
                children: t("benefits.title3")
              })
            }), e.jsxs("div", {
              children: [e.jsxs("span", {
                className: k.white,
                children: [s.ReferralClaimReward * 100, "%"]
              }), e.jsxs("span", {
                className: `${k.gray}`,
                children: [" ", t("benefits.text3")]
              })]
            })]
          }), e.jsxs("div", {
            className: k.benefits_item,
            children: [e.jsx("div", {
              children: e.jsx("span", {
                className: k.gray,
                children: t("benefits.title4")
              })
            }), e.jsxs("div", {
              children: [e.jsx("span", {
                className: `${k.bold}`,
                children: "100% "
              }), e.jsxs("span", {
                className: `${k.gray}`,
                children: [" ", t("benefits.text4")]
              })]
            })]
          }), e.jsxs("div", {
            className: k.benefits_item,
            children: [e.jsx("div", {
              style: {
                display: "flex",
                alignItems: "center"
              },
              children: e.jsx("span", {
                className: k.gray,
                children: t("benefits.title5")
              })
            }), e.jsx("div", {
              children: e.jsxs(qs, {
                i18nKey: "frens.benefits.text5",
                children: [e.jsx("span", {
                  className: `${k.bold}`
                }), e.jsx("span", {
                  className: `${k.gray}`
                })]
              })
            })]
          }), e.jsxs("div", {
            className: k.benefits_item,
            children: [e.jsxs("div", {
              style: {
                display: "flex",
                alignItems: "center"
              },
              children: [e.jsx("span", {
                className: k.gray,
                children: t("benefits.title6")
              }), i < 1e4 && e.jsx(N, {
                size: 16,
                style: {
                  marginLeft: 3
                },
                children: ""
              }), i >= 1e4 && e.jsx(N, {
                size: 16,
                style: {
                  marginLeft: 3
                },
                children: ""
              })]
            }), e.jsx("div", {
              children: e.jsxs(qs, {
                i18nKey: "frens.benefits.text6",
                children: [e.jsx("span", {
                  className: `${k.bold}`
                }), e.jsx("span", {
                  className: `${k.gray}`
                })]
              })
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
  Fj = "_container_10f8u_1",
  Oj = "_text_container_10f8u_9",
  Qj = "_text_block_10f8u_16",
  zj = "_gray_10f8u_24",
  qj = "_total_10f8u_28",
  Lj = "_bold_10f8u_33",
  Hj = "_indicator_10f8u_37",
  Gj = "_button_container_10f8u_46",
  Vj = "_button_10f8u_46",
  qe = {
    container: Fj,
    text_container: Oj,
    text_block: Qj,
    gray: zj,
    total: qj,
    bold: Lj,
    indicator: Hj,
    button_container: Gj,
    button: Vj
  },
  Jj = "_layout_1ulm2_1",
  Yj = "_container_1ulm2_11",
  Xj = "_stars_1ulm2_17",
  Wj = "_animStar_1ulm2_1",
  Sn = {
    layout: Jj,
    container: Yj,
    stars: Xj,
    animStar: Wj
  },
  Kj = [{
    count: 50,
    speed: 50
  }, {
    count: 50,
    speed: 30
  }, {
    count: 50,
    speed: 90
  }],
  Zj = t => {
    const n = window.innerWidth,
      s = window.innerHeight * 2;
    return Array.from(Array(t)).reduce(a => {
      const i = U(0, n),
        o = U(0, s);
      return a + `${i}px ${o}px #fff, `
    }, "").replace(/,(\s+)?$/, "")
  },
  $j = u.memo(() => e.jsx("div", {
    className: Sn.layout,
    children: e.jsx("div", {
      className: Sn.container,
      children: Kj.map((t, n) => {
        const s = Zj(t.count);
        return e.jsx("div", {
          className: Sn.stars,
          style: {
            animation: `${Sn.animStar} ${t.speed}s linear infinite`,
            boxShadow: s
          }
        }, n)
      })
    })
  }), () => !1),
  eb = () => {
    const t = Z(),
      [n, s] = u.useState(0),
      [a, i] = u.useState(0),
      [o, r] = u.useState(0);
    return u.useEffect(() => {
      try {
        X.getStats().then(l => {
          const d = l.data;
          console.log(d), s(d.totalBalances), i(d.totalPlayers), r(d.totalRepaints)
        })
      } catch {}
    }, []), e.jsxs(le, {
      children: [e.jsx($j, {}), e.jsx("div", {
        style: {
          height: 50
        }
      }), e.jsxs("div", {
        className: qe.container,
        children: [e.jsxs("div", {
          className: qe.text_container,
          children: [e.jsxs("div", {
            className: qe.text_block,
            children: [e.jsx("span", {
              className: qe.gray,
              children: "Total painters"
            }), e.jsx("span", {
              className: `${qe.bold}`,
              style: {
                fontSize: 22
              },
              children: e.jsx(Ve, {
                num: a
              })
            })]
          }), e.jsxs("div", {
            className: qe.text_block,
            children: [e.jsx("span", {
              className: qe.gray,
              children: "Total repaints"
            }), e.jsx("span", {
              className: `${qe.bold}`,
              children: e.jsx(Ve, {
                num: Math.floor(o)
              })
            })]
          })]
        }), e.jsx("div", {
          className: qe.button_container,
          children: e.jsx("button", {
            className: qe.button,
            onPointerUp: () => {
              t.push("/invite-frens")
            },
            children: "Invite fren"
          })
        })]
      })]
    })
  },
  tb = "_main_info_container_1gqs9_2",
  nb = "_image_container_1gqs9_11",
  sb = "_image_1gqs9_11",
  ab = "_title_1gqs9_21",
  ib = "_variants_container_1gqs9_25",
  ob = "_variant_item_1gqs9_33",
  rb = "_variant_left_container_1gqs9_39",
  cb = "_variant_middle_container_1gqs9_45",
  lb = "_dot_1gqs9_53",
  db = "_variant_right_container_1gqs9_59",
  ub = "_button_container_1gqs9_66",
  mb = "_button_1gqs9_66",
  Ab = "_bold_1gqs9_96",
  pb = "_gray_1gqs9_100",
  hb = "_blue_1gqs9_104",
  gb = "_text_1gqs9_109",
  L = {
    main_info_container: tb,
    image_container: nb,
    image: sb,
    title: ab,
    variants_container: ib,
    variant_item: ob,
    variant_left_container: rb,
    variant_middle_container: cb,
    dot: lb,
    variant_right_container: db,
    button_container: ub,
    button: mb,
    bold: Ab,
    gray: pb,
    blue: hb,
    text: gb
  },
  Zo = "/assets/button_dog_200x200-DtCBiZdv.gif",
  _b = t => {
    const n = t / 1e3,
      s = Math.floor(n / 60),
      a = n % 60;
    return a === 0 ? `${s} min` : `${s} min ${a} sec`
  },
  fb = t => {
    if (t < 0 || !t) return "";
    const n = Math.floor(t / 60),
      s = t % 60;
    return s < 10 ? `${n}:0${s}` : `${n}:${s}`
  },
  xb = () => {
    const t = _(),
      n = Z(),
      s = c(m => m.mining.maxCharges),
      a = c(m => m.mining.charges),
      i = c(m => m.mining.reChargeSpeed),
      o = _b(i),
      r = c(m => m.mining.reChargeTs),
      [l, d] = u.useState("");
    return u.useEffect(() => {
      if (a !== 0) return () => {};
      const m = setInterval(() => {
        const g = Date.now() - r,
          I = i - g,
          b = Math.round(I / 1e3);
        d(fb(b))
      }, 500);
      return () => {
        clearInterval(m)
      }
    }, [r, i, a]), e.jsxs(le, {
      children: [e.jsx("div", {
        style: {
          height: 50
        }
      }), e.jsx("div", {
        className: L.image_container,
        children: e.jsx("img", {
          alt: "image",
          className: L.image,
          src: Zo
        })
      }), e.jsxs("div", {
        className: L.main_info_container,
        children: [e.jsx("div", {
          children: e.jsx("span", {
            className: `${L.title} ${L.bold}`,
            children: "Energy is over"
          })
        }), e.jsxs("div", {
          children: [e.jsx("span", {
            className: `${L.gray}`,
            children: "Energy limit: "
          }), e.jsxs("span", {
            children: [a, "/", s]
          })]
        }), e.jsxs("div", {
          children: [e.jsx("span", {
            className: `${L.gray}`,
            children: "Recovery speed:"
          }), e.jsxs("span", {
            children: [" ", o]
          })]
        })]
      }), e.jsxs("div", {
        className: L.variants_container,
        children: [e.jsxs("div", {
          className: L.variant_item,
          children: [e.jsx("div", {
            className: L.variant_left_container,
            children: e.jsx(N, {
              size: 28,
              children: ""
            })
          }), e.jsxs("div", {
            className: L.variant_middle_container,
            children: [e.jsxs("div", {
              children: [e.jsx("span", {
                className: L.bold,
                children: "Just wait"
              }), a === 0 && l !== "" && e.jsx("span", {
                className: L.dot,
                children: "•"
              }), a === 0 && l !== "" && e.jsx("span", {
                className: L.gray,
                children: l
              })]
            }), e.jsx("div", {
              children: e.jsx("span", {
                className: L.gray,
                children: "Serene i fold my hands and wait."
              })
            })]
          }), e.jsx("div", {
            className: L.variant_right_container
          })]
        }), e.jsxs("div", {
          className: L.variant_item,
          onPointerUp: () => {
            t(Aa("boosts")), n.push("/claiming")
          },
          children: [e.jsx("div", {
            className: L.variant_left_container,
            children: e.jsx(N, {
              size: 28,
              children: ""
            })
          }), e.jsxs("div", {
            className: L.variant_middle_container,
            children: [e.jsx("div", {
              children: e.jsx("span", {
                className: `${L.bold} ${L.blue}`,
                children: "Use boosters"
              })
            }), e.jsx("div", {
              children: e.jsx("span", {
                className: L.gray,
                children: "Upgrade Energy limit and Speed."
              })
            })]
          }), e.jsx("div", {
            className: L.variant_right_container,
            children: e.jsx(N, {
              size: 20,
              children: ""
            })
          })]
        }), e.jsxs("div", {
          className: L.variant_item,
          onPointerUp: () => {
            t(et(1)), t(tt()), n.push("/stars")
          },
          children: [e.jsx("div", {
            className: L.variant_left_container,
            children: e.jsx(N, {
              size: 28,
              children: ""
            })
          }), e.jsxs("div", {
            className: L.variant_middle_container,
            children: [e.jsx("div", {
              children: e.jsx("span", {
                className: `${L.blue} ${L.bold}`,
                children: "Use Stars Shop"
              })
            }), e.jsx("div", {
              children: e.jsx("span", {
                className: L.gray,
                children: "Full energy right now for Stars."
              })
            })]
          }), e.jsx("div", {
            className: L.variant_right_container,
            children: e.jsx(N, {
              size: 20,
              children: ""
            })
          })]
        })]
      }), e.jsx("div", {
        className: L.button_container,
        children: e.jsx("button", {
          className: L.button,
          onPointerUp: () => {
            n.push("/")
          },
          children: "Okay"
        })
      })]
    })
  },
  yb = "_close_container_dwly3_1",
  vb = "_title_container_dwly3_12",
  wb = "_title_dwly3_12",
  jb = "_small_title_container_dwly3_23",
  bb = "_small_title_dwly3_23",
  Nb = "_content_dwly3_32",
  Ib = "_image_container_dwly3_40",
  Cb = "_image_placeholder_dwly3_46",
  Pb = "_image_dwly3_40",
  Sb = "_description_container_dwly3_58",
  Tb = "_white_dwly3_67",
  Eb = "_gray_dwly3_71",
  Bb = "_bold_dwly3_75",
  Db = "_center_dwly3_79",
  kb = "_claim_button_container_dwly3_83",
  Rb = "_claim_button_dwly3_83",
  Mb = "_no_button_dwly3_102",
  Ub = "_info_layout_dwly3_114",
  Fb = "_rewards_layout_dwly3_126",
  Ob = "_rewards_grid_container_dwly3_132",
  Qb = "_reward_item_dwly3_138",
  zb = "_reward_item_completed_dwly3_148",
  qb = "_reward_item_content_container_dwly3_161",
  Lb = "_reward_item_active_dwly3_174",
  Hb = "_reward_item_image_container_dwly3_178",
  Gb = "_reward_item_amount_dwly3_182",
  Vb = "_reward_item_amount_active_dwly3_196",
  Jb = "_reward_item_amount_premium_dwly3_200",
  Yb = "_reward_item_title_dwly3_205",
  Xb = "_reward_item_title_premium_dwly3_211",
  Wb = "_reward_item_image_dwly3_178",
  R = {
    close_container: yb,
    title_container: vb,
    title: wb,
    small_title_container: jb,
    small_title: bb,
    content: Nb,
    image_container: Ib,
    image_placeholder: Cb,
    image: Pb,
    description_container: Sb,
    white: Tb,
    gray: Eb,
    bold: Bb,
    center: Db,
    claim_button_container: kb,
    claim_button: Rb,
    no_button: Mb,
    info_layout: Ub,
    rewards_layout: Fb,
    rewards_grid_container: Ob,
    reward_item: Qb,
    reward_item_completed: zb,
    reward_item_content_container: qb,
    reward_item_active: Lb,
    reward_item_image_container: Hb,
    reward_item_amount: Gb,
    reward_item_amount_active: Vb,
    reward_item_amount_premium: Jb,
    reward_item_title: Yb,
    reward_item_title_premium: Xb,
    reward_item_image: Wb
  },
  Kb = ({
    secondsLeft: t
  }) => {
    const n = _(),
      s = "dailyTransactionInfo",
      a = c(Xh),
      i = c(f => f.daily.getDailyListFetchStatus),
      o = c(f => f.daily.getFirstDailyFetchStatus),
      r = i === p.fulfilled,
      l = Ns(),
      [d, m] = An(),
      [h, g] = u.useState(!1),
      I = c(nt);
    u.useEffect(() => {
      if (!a || !r) return;
      const f = localStorage.getItem(s);
      if (f) {
        const j = JSON.parse(f);
        j.dailyId === a.id && Date.now() - j.ts < 10 * 60 * 1e3 ? g(!0) : g(!1), Date.now() - j.ts >= 10 * 60 * 1e3 && localStorage.removeItem(s)
      }
    }, [a]);
    const b = async () => {
      try {
        const f = a.prices[0],
          j = await X.startShopTransaction({
            buyerWallet: l,
            currencyId: 2,
            daily: !0,
            quantity: f.quantity,
            goodId: a.id
          }),
          G = Le.beginCell().storeUint(0, 32).storeStringTail(j.data.txMemCode).endCell(),
          q = {
            validUntil: Math.floor(Date.now() / 1e3) + 600,
            messages: [{
              address: ua,
              amount: String(Le.toNano(j.data.strAmount)),
              payload: G.toBoc().toString("base64")
            }]
          },
          ze = await d.sendTransaction(q);
        localStorage.setItem(s, JSON.stringify({
          ts: Date.now(),
          dailyId: a.id
        })), n(z({
          id: performance.now(),
          text: "Success! Wait 3-5 min and reload the app.",
          icon: ""
        })), g(!0)
      } catch (f) {
        console.warn(f), n(z({
          id: performance.now(),
          text: "Error! Wait 5 min before starting a new transaction."
        }))
      }
    };
    if (r) {
      const f = a.prices[0];
      let j = `Claim for ${f.price} TON`;
      return t && (j = `Claim in ${Ml(t)}`), h && (j = "Pending transaction..."), e.jsxs("div", {
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
            children: `${a.name} x${f.quantity}`
          })
        }), e.jsxs("div", {
          className: R.claim_button_container,
          children: [I !== ye && e.jsx("button", {
            className: R.no_button,
            children: "Desktop version only"
          }), l !== "" && I === ye && e.jsx("button", {
            disabled: o === p.pending || h,
            className: R.claim_button,
            onPointerUp: async () => {
              t || h || b()
            },
            children: j
          }), l === "" && I === ye && e.jsx("button", {
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
  Zb = (t, n) => {
    const s = t.getTime() - t.getTime() % 864e5,
      a = n.getTime() - n.getTime() % (86400 * 1e3);
    return s === a
  },
  $b = () => {
    const t = _(),
      n = c(co.selectAll),
      s = c(o => o.daily.selected),
      [a, i] = u.useState(null);
    return u.useEffect(() => {
      t(Zh.getList())
    }, []), u.useEffect(() => {
      let o = 0;
      for (let r = 0; r < n.length; r++) {
        const l = n[r];
        if (l.timestamp && new Date(l.timestamp) > o && (o = new Date(l.timestamp)), l.daily) {
          t(Wh(l.id));
          break
        }
      }
      if (o && Zb(new Date, new Date(o))) {
        const r = new Date(o),
          d = new Date(Date.UTC(r.getUTCFullYear(), r.getUTCMonth(), r.getUTCDate() + 1, 0, 0, 0, 0)) - new Date,
          m = Math.floor(d / 1e3);
        i(m)
      }
    }, [n]), e.jsxs(le, {
      children: [e.jsx("div", {
        className: R.title_container,
        children: e.jsx("div", {
          className: R.title,
          children: "Daily streak awards"
        })
      }), e.jsx(Kb, {
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
            children: n.map((o, r) => {
              const l = (r + 1) % 4 === 0,
                d = o.prices[0],
                m = [R.reward_item],
                h = [R.reward_item_amount],
                g = [R.reward_item_title];
              return o.id === s && (m.push(R.reward_item_active), h.push(R.reward_item_amount_active)), l && g.push(R.reward_item_title_premium), l && !o.active && h.push(R.reward_item_amount_premium), e.jsxs("div", {
                className: m.join(" "),
                onPointerUp: () => {
                  t(z({
                    id: performance.now(),
                    text: `${d.quantity} ${o.name} for ${d.price} TON`,
                    icon: ""
                  }))
                },
                children: [e.jsxs("div", {
                  className: R.reward_item_content_container,
                  children: [e.jsxs("div", {
                    className: g.join(" "),
                    children: ["Day ", r + 1]
                  }), e.jsx("div", {
                    className: R.reward_item_image_container,
                    children: e.jsx("img", {
                      alt: "item",
                      className: R.reward_item_image,
                      src: o.image_url
                    })
                  }), e.jsx("div", {
                    className: h.join(" "),
                    children: d.quantity
                  })]
                }), !o.daily && e.jsx("div", {
                  className: R.reward_item_completed,
                  children: e.jsx(N, {
                    size: 36,
                    style: {
                      fontWeight: 600
                    },
                    children: ""
                  })
                })]
              }, r)
            })
          })
        })]
      })]
    })
  },
  e1 = "_general_info_container_fv8d9_1",
  t1 = "_img_container_fv8d9_7",
  n1 = "_image_fv8d9_13",
  s1 = "_title_fv8d9_19",
  a1 = "_description_container_fv8d9_25",
  i1 = "_description_fv8d9_25",
  Ut = {
    general_info_container: e1,
    img_container: t1,
    image: n1,
    title: s1,
    description_container: a1,
    description: i1
  },
  o1 = "_info_layout_1p9dg_1",
  r1 = {
    info_layout: o1
  },
  c1 = "_no_template_container_uihlo_1",
  l1 = "_no_template_button_uihlo_10",
  d1 = "_template_container_uihlo_28",
  u1 = "_template_info_container_uihlo_35",
  m1 = "_template_info_uihlo_35",
  A1 = "_buttons_container_uihlo_44",
  p1 = "_button_copy_uihlo_53",
  h1 = "_button_uihlo_44",
  g1 = "_create_new_template_uihlo_72",
  Ge = {
    no_template_container: c1,
    no_template_button: l1,
    template_container: d1,
    template_info_container: u1,
    template_info: m1,
    buttons_container: A1,
    button_copy: p1,
    button: h1,
    create_new_template: g1
  },
  _1 = () => {
    const t = Z(),
      n = c(i => i.template.myTemplate),
      s = c(i => i.user.user),
      a = s && s.friends >= dn[16] || s.isContractor;
    return n !== null ? null : e.jsxs("div", {
      className: Ge.no_template_container,
      children: [a && e.jsx("span", {
        className: "gray",
        children: "Create a template and share with your friends."
      }), !a && e.jsxs("span", {
        className: "gray",
        children: ["To unlock template creation, ", e.jsx("br", {}), " invite", " ", s && s.friends || 0, "/", dn[16], " friends"]
      }), a && e.jsx("button", {
        className: Ge.no_template_button,
        onPointerUp: () => {
          t.push("/template/create")
        },
        children: "Pixel Templates"
      }), !a && e.jsx("button", {
        className: Ge.no_template_button,
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
  f1 = "_template_item_container_srp11_1",
  x1 = "_template_item_inner_srp11_9",
  y1 = "_template_image_srp11_17",
  v1 = "_template_image_info_layout_srp11_24",
  w1 = "_template_image_info_container_srp11_34",
  tn = {
    template_item_container: f1,
    template_item_inner: x1,
    template_image: y1,
    template_image_info_layout: v1,
    template_image_info_container: w1
  },
  $o = ({
    item: t,
    style: n = {}
  }) => {
    const s = _();
    return e.jsx("div", {
      className: tn.template_item_container,
      style: {
        ...n
      },
      onPointerUp: async () => {
        t.templateId && t.templateId !== 0 && s(fa({
          show: !0,
          id: Number(t.templateId)
        }))
      },
      children: e.jsxs("div", {
        className: tn.template_item_inner,
        children: [e.jsx("img", {
          alt: "image",
          className: tn.template_image,
          src: t.url
        }), e.jsx("div", {
          className: tn.template_image_info_layout,
          children: e.jsxs("div", {
            className: tn.template_image_info_container,
            children: [e.jsx(N, {
              children: ""
            }), e.jsx("span", {
              children: gn(Math.max(0, t.subscribers))
            })]
          })
        })]
      })
    })
  },
  j1 = () => {
    const t = Z();
    return e.jsx("div", {
      className: Ge.create_new_template,
      onPointerUp: () => {
        t.push("/template/create")
      },
      children: "Create a new template"
    })
  },
  b1 = () => {
    const t = c(a => a.user.user);
    let n = `${mt}?startapp=f${(t==null?void 0:t.id)||""}_t`;
    t.squad && t.squad.id !== null && (n += `_s${t.squad.id}`);
    const s = c(a => a.template.myTemplate);
    return s === null ? null : e.jsxs("div", {
      className: Ge.template_container,
      children: [e.jsx($o, {
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
        className: Ge.template_info_container,
        children: e.jsxs("span", {
          className: Ge.template_info,
          children: ["Share this template with your frens, ", e.jsx("br", {}), " get reward for frens repaints."]
        })
      }), e.jsxs("div", {
        className: Ge.buttons_container,
        children: [e.jsx(Tt, {
          url: n,
          className: Ge.button_copy,
          text: "Copy template link"
        }), e.jsx("button", {
          className: Ge.button,
          onPointerUp: a => {
            a.stopPropagation(), window.Telegram.WebApp.openTelegramLink(`https://t.me/share/url?url=${n}`)
          },
          children: "Share"
        })]
      }), e.jsx(j1, {})]
    })
  },
  N1 = () => e.jsxs("div", {
    children: [e.jsx(_1, {}), e.jsx(b1, {})]
  }),
  I1 = "_layout_94gj5_1",
  C1 = "_container_94gj5_5",
  P1 = "_button_container_94gj5_11",
  S1 = "_button_94gj5_11",
  ws = {
    layout: I1,
    container: C1,
    button_container: P1,
    button: S1
  },
  T1 = () => {
    const t = _(),
      n = u.useRef(null),
      s = u.useRef(0),
      a = c(m => m.template.listStatus),
      i = c(m => m.template.listOffset),
      o = c(m => m.template.listLimit),
      r = c(m => m.template.list),
      [l, d] = u.useState(!1);
    return u.useEffect(() => {
      let m = null;
      if (n.current && a === p.fulfilled && !l) {
        const h = {
            rootMargin: "0px",
            threshold: 1
          },
          g = (I, b) => {
            I.forEach(f => {
              f.intersectionRatio >= 1 && (t(Je.getList({
                offset: i,
                limit: o
              })), b.unobserve(n.current))
            })
          };
        m = new IntersectionObserver(g, h), m.observe(n.current)
      }
      return () => {
        m && n.current && m.unobserve(n.current)
      }
    }, [a, i, o, l]), u.useEffect(() => {
      s.current === r.length && r.length !== 0 && d(!0), s.current = r.length
    }, [r]), l ? null : e.jsx("div", {
      className: ws.button_container,
      children: e.jsx("button", {
        ref: n,
        disabled: a === p.pending,
        className: ws.button,
        onPointerUp: () => {
          t(Je.getList({
            offset: i,
            limit: o
          }))
        },
        children: "Load more"
      })
    })
  },
  E1 = () => {
    const t = _(),
      n = c(o => o.template.listOffset),
      s = c(o => o.template.listLimit),
      a = c(o => o.template.list),
      i = c(o => o.template.referredTemplate);
    return u.useEffect(() => (t(Je.getList({
      offset: n,
      limit: s
    })), () => {
      t(Vh())
    }), []), e.jsxs("div", {
      className: ws.layout,
      children: [e.jsx("div", {
        className: ws.container,
        children: a.map(o => {
          if (Number(o.templateId) === 0) return null;
          let r = !1;
          return i !== null && Number(i.id) === Number(o.templateId) && (r = !0), e.jsx($o, {
            item: o,
            current: r
          }, o.templateId)
        })
      }), e.jsx(T1, {})]
    })
  },
  B1 = () => {
    const t = c(n => n.template.activeTab);
    return e.jsxs("div", {
      className: r1.info_layout,
      children: [t === "my" && e.jsx(N1, {}), t === "catalog" && e.jsx(E1, {})]
    })
  },
  D1 = () => {
    const t = _(),
      n = c(s => s.template.activeTab);
    return e.jsxs(Yt, {
      children: [e.jsx(Te, {
        active: n === "my",
        setActive: () => t(vs("my")),
        children: "My template"
      }), e.jsx(Te, {
        active: n === "catalog",
        setActive: () => t(vs("catalog")),
        children: "Catalog"
      })]
    })
  },
  k1 = () => e.jsxs(ae.Fragment, {
    children: [e.jsx(D1, {}), e.jsx(B1, {})]
  }),
  Os = "/assets/paintings_anim2-nk1iBB8J.gif",
  R1 = "_container_1h1qc_1",
  M1 = "_divider_1h1qc_19",
  U1 = "_row_1h1qc_24",
  F1 = "_row_title_1h1qc_36",
  O1 = "_row_title_main_1h1qc_40",
  Q1 = "_row_hint_1h1qc_45",
  z1 = "_row_value_1h1qc_51",
  q1 = "_row_value_main_1h1qc_55",
  L1 = "_mining_percent_1h1qc_60",
  H1 = "_active_row_1h1qc_70",
  G1 = "_button_1h1qc_81",
  gi = {
    container: R1,
    divider: M1,
    row: U1,
    row_title: F1,
    row_title_main: O1,
    row_hint: Q1,
    row_value: z1,
    row_value_main: q1,
    mining_percent: L1,
    active_row: H1,
    button: G1
  },
  V1 = () => {
    const t = _(),
      n = c(a => a.template.showTemplateDetailsPopup),
      s = a => {
        t(Mo(a))
      };
    return e.jsx(fn, {
      show: n,
      setShow: s,
      children: e.jsxs("div", {
        className: gi.container,
        children: [e.jsx("h2", {
          children: "How does Templates work? "
        }), e.jsx("p", {
          children: "Paint the pixels in the correct color – get a PX. "
        }), e.jsx("p", {
          children: "Use global templates, join your frens' templates, or create your own."
        }), e.jsx("p", {
          children: "Create a template and get reward in PX. The reward depends on the number of painters of the template. Btw, the owner doesn't get an award for painting his template."
        }), e.jsx("button", {
          className: gi.button,
          onPointerUp: () => s(!1),
          children: "That's so wise!"
        })]
      })
    })
  },
  J1 = "_layout_2uiqn_1",
  Y1 = "_container_2uiqn_6",
  X1 = "_close_button_2uiqn_18",
  W1 = "_title_container_2uiqn_26",
  K1 = "_title_2uiqn_26",
  Z1 = "_image_container_2uiqn_37",
  $1 = "_image_2uiqn_37",
  e0 = "_image_placeholder_2uiqn_51",
  t0 = "_info_container_2uiqn_58",
  n0 = "_info_row_2uiqn_64",
  s0 = "_info_title_2uiqn_69",
  a0 = "_info_value_blue_2uiqn_73",
  i0 = "_info_value_white_2uiqn_78",
  o0 = "_buttons_container_2uiqn_82",
  r0 = "_button_2uiqn_82",
  c0 = "_not_button_2uiqn_98",
  l0 = "_button_copy_2uiqn_109",
  se = {
    layout: J1,
    container: Y1,
    close_button: X1,
    title_container: W1,
    title: K1,
    image_container: Z1,
    image: $1,
    image_placeholder: e0,
    info_container: t0,
    info_row: n0,
    info_title: s0,
    info_value_blue: a0,
    info_value_white: i0,
    buttons_container: o0,
    button: r0,
    not_button: c0,
    button_copy: l0
  },
  d0 = () => {
    const t = _(),
      n = c(d => d.template.templateInfoPopupId),
      [s, a] = u.useState(!1),
      i = c(d => d.user.user),
      o = c(d => d.template.referredTemplate),
      r = n === i.id,
      l = o !== null && n === o.id;
    return r ? e.jsx("div", {
      className: se.not_button,
      children: "Your template. Cute!"
    }) : l ? e.jsx("div", {
      className: se.not_button,
      children: "Selected template."
    }) : e.jsx("button", {
      disabled: s,
      className: se.button,
      onPointerUp: async () => {
        if (!s) try {
          if (n && n !== 0) {
            if (a(!0), (await t(Je.subscribe({
                id: n
              }))).meta.requestStatus === p.fulfilled) {
              await t(z({
                id: performance.now(),
                text: "Success!"
              }));
              const m = await t(Je.getTemplateById({
                  id: n
                })),
                h = {
                  ...m.payload,
                  url: `${m.payload.url}?time=${Date.now()}`,
                  type: ge.referred
                };
              t(Gh(h)), v.mainImage.worldTemplate.deleteTemplate(o.id), v.mainImage.worldTemplate.add(h), t(wn())
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
  u0 = () => {
    const t = _(),
      [n, s] = u.useState(null),
      a = c(o => o.template.showTemplateInfoPopup),
      i = c(o => o.template.templateInfoPopupId);
    return u.useEffect(() => (i && (async () => {
      try {
        const r = await t(Je.getTemplateById({
          id: i
        }));
        r.payload && s({
          ...r.payload
        })
      } catch {}
    })(), () => {
      s(null)
    }), [i]), Xe.createPortal(e.jsx(Qe, {
      onPointerUp: () => t(fa({
        show: !1
      })),
      show: a,
      children: e.jsx("div", {
        className: se.layout,
        children: e.jsxs("div", {
          className: se.container,
          onPointerUp: o => {
            o.stopPropagation()
          },
          children: [e.jsx("div", {
            className: se.close_button,
            onPointerUp: () => {
              t(fa({
                show: !1
              }))
            },
            children: e.jsx(N, {
              size: 26,
              children: ""
            })
          }), e.jsx("div", {
            className: se.title_container,
            children: e.jsxs("span", {
              className: se.title,
              children: ["Template ", n && `${n.imageSize}x${n.imageSize}`]
            })
          }), e.jsxs("div", {
            className: se.image_container,
            children: [n && e.jsx("img", {
              alt: "image",
              className: se.image,
              src: n.url
            }), !n && e.jsx("div", {
              className: se.image_placeholder
            })]
          }), e.jsxs("div", {
            className: se.buttons_container,
            children: [e.jsx(d0, {}), e.jsx(Tt, {
              url: `${mt}?startapp=f${i}_t`,
              className: se.button_copy,
              text: "Copy template link"
            })]
          }), e.jsxs("div", {
            className: se.info_container,
            children: [e.jsxs("div", {
              className: se.info_row,
              children: [e.jsx("span", {
                className: se.info_title,
                children: "Coordinates"
              }), " ", e.jsx("span", {
                className: se.info_value_blue,
                children: n ? `${n.x}, ${n.y}` : "Loading..."
              })]
            }), e.jsxs("div", {
              className: se.info_row,
              children: [e.jsx("span", {
                className: se.info_title,
                children: "Painters"
              }), " ", e.jsx("span", {
                className: se.info_value_white,
                children: n ? `${n.subscribers}` : "Loading..."
              })]
            }), e.jsxs("div", {
              className: se.info_row,
              children: [e.jsx("span", {
                className: se.info_title,
                children: "Repaints"
              }), " ", e.jsx("span", {
                className: se.info_value_white,
                children: n ? `${n.hits}` : "Loading..."
              })]
            })]
          })]
        })
      })
    }), document.body)
  },
  m0 = () => {
    const t = _();
    return e.jsxs(le, {
      children: [e.jsxs("div", {
        className: Ut.general_info_container,
        children: [e.jsx("div", {
          className: Ut.img_container,
          children: e.jsx("img", {
            alt: "img",
            className: Ut.image,
            src: Os
          })
        }), e.jsx("h1", {
          className: Ut.title,
          children: "Templates"
        }), e.jsxs("div", {
          className: Ut.description_container,
          children: [e.jsxs("span", {
            className: Ut.description,
            children: ["Use templates and get more PX ", e.jsx("br", {}), e.jsx(bn, {
              onPointerUp: n => {
                n.stopPropagation(), t(Mo(!0))
              },
              children: "How it works"
            })]
          }), e.jsx(V1, {})]
        })]
      }), e.jsx(k1, {}), e.jsx(u0, {})]
    })
  },
  A0 = "_container_s1r1v_1",
  p0 = "_page_s1r1v_13",
  h0 = "_id_s1r1v_17",
  g0 = "_title_s1r1v_22",
  _0 = "_avatar_container_s1r1v_28",
  f0 = "_avatar_s1r1v_28",
  x0 = "_squad_avatar_container_s1r1v_40",
  y0 = "_text_container_s1r1v_52",
  v0 = "_dot_s1r1v_58",
  w0 = "_user_name_s1r1v_63",
  j0 = "_squad_name_s1r1v_69",
  b0 = "_divider_s1r1v_75",
  N0 = "_tabs_content_s1r1v_81",
  I0 = "_content_info_s1r1v_85",
  C0 = "_content_info_item_s1r1v_92",
  P0 = "_content_info_item_title_s1r1v_96",
  S0 = "_content_info_item_value_s1r1v_100",
  T0 = "_no_content_s1r1v_106",
  E0 = "_achievements_container_s1r1v_115",
  O = {
    container: A0,
    page: p0,
    id: h0,
    title: g0,
    avatar_container: _0,
    avatar: f0,
    squad_avatar_container: x0,
    text_container: y0,
    dot: v0,
    user_name: w0,
    squad_name: j0,
    divider: b0,
    tabs_content: N0,
    content_info: I0,
    content_info_item: C0,
    content_info_item_title: P0,
    content_info_item_value: S0,
    no_content: T0,
    achievements_container: E0
  },
  B0 = () => {
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
    if (r.dataSource === Fe.userFromPixelInfo) return {
      ready: s === p.fulfilled && t !== null,
      data: t == null ? void 0 : t.owner,
      item: r
    };
    if (r.dataSource === Fe.squadFromData) return {
      ready: i === p.fulfilled && o !== null,
      data: o,
      item: r
    };
    if (r.dataSource === Fe.userFromRating) {
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
  ht = (t = !0) => {
    const [n, s] = u.useState({
      ready: !1,
      data: null
    }), a = B0(), i = c(be);
    return u.useEffect(() => {
      n && s({
        ready: !0,
        data: i
      })
    }, [i]), t ? a : n
  },
  D0 = ({
    isPopupContent: t = !0
  }) => {
    const {
      data: n,
      ready: s
    } = ht(t);
    if (!s) return e.jsx(Oe, {
      show: !s,
      children: e.jsx("div", {
        className: O.text_container,
        children: e.jsx("span", {
          className: O.user_name,
          children: "No name • @notpixel"
        })
      })
    });
    const i = hn(n.firstName || "No name");
    return e.jsx("div", {
      className: O.text_container,
      children: e.jsx("span", {
        className: O.user_name,
        children: i
      })
    })
  },
  k0 = ({
    isPopupContent: t = !0
  }) => {
    var o;
    const n = _(),
      {
        data: s,
        ready: a
      } = ht(t);
    return a ? ((o = s == null ? void 0 : s.squad) == null ? void 0 : o.name) && s.squad.name !== null ? e.jsxs("div", {
      className: O.text_container,
      children: [e.jsx("span", {
        className: O.squad_name,
        children: "Squad"
      }), e.jsx(bn, {
        onPointerUp: () => {
          n(Ms.getInfo({
            id: s.squad.id
          })), n(xn({
            dataSource: Fe.squadFromData
          }))
        },
        children: hn(s.squad.name, 20)
      })]
    }) : e.jsx("div", {
      className: O.text_container,
      children: e.jsx("span", {
        className: O.squad_name,
        children: "No squad"
      })
    }) : e.jsx(Oe, {
      show: !a,
      children: e.jsx("div", {
        className: O.text_container,
        children: e.jsx("span", {
          className: O.squad_name,
          children: "Loading..."
        })
      })
    })
  },
  R0 = ({
    isPopupContent: t = !0
  }) => {
    var i;
    const {
      data: n,
      ready: s
    } = ht(t);
    let a = pt;
    return s && n.userPic && n.userPic !== "" && (a = n.userPic), e.jsxs("div", {
      className: O.avatar_container,
      children: [e.jsx("img", {
        alt: "avatar",
        className: O.avatar,
        src: a
      }), e.jsx("div", {
        className: O.squad_avatar_container,
        children: e.jsx(La, {
          src: ((i = n == null ? void 0 : n.squad) == null ? void 0 : i.logo) || ""
        })
      })]
    })
  },
  M0 = ({
    isPopupContent: t = !0
  }) => {
    const n = _(),
      {
        data: s,
        ready: a
      } = ht(t);
    return e.jsxs("div", {
      children: [a && s.id !== 0 && e.jsx("span", {
        className: O.id,
        onPointerUp: async i => {
          i.preventDefault(), i.stopPropagation();
          try {
            await Gt(`${s.id}`), await n(z({
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
      }), e.jsx(Oe, {
        show: !a,
        children: e.jsx("span", {
          children: "Owner"
        })
      })]
    })
  },
  U0 = ({
    active: t,
    setActive: n
  }) => e.jsxs(Yt, {
    style: {},
    children: [e.jsx(Te, {
      active: t === "info",
      setActive: () => n("info"),
      children: "Info"
    }), e.jsx(Te, {
      active: t === "achievements",
      setActive: () => n("achievements"),
      children: "Achievements"
    }), e.jsx(Te, {
      active: t === "inventory",
      setActive: () => n("inventory"),
      children: "Inventory"
    })]
  }),
  F0 = () => e.jsx("div", {
    className: O.divider
  }),
  O0 = ({
    isPopupContent: t = !0
  }) => {
    const {
      data: n,
      ready: s
    } = ht(t);
    return e.jsxs("div", {
      className: O.content_info,
      children: [e.jsxs("div", {
        className: O.content_info_item,
        children: [e.jsx("div", {
          className: O.content_info_item_title,
          children: "Leaderboard Place"
        }), e.jsx("div", {
          className: O.content_info_item_value,
          children: s ? "Soon" : 0
        })]
      }), e.jsxs("div", {
        className: O.content_info_item,
        children: [e.jsx("div", {
          className: O.content_info_item_title,
          children: "Score"
        }), e.jsx("div", {
          className: O.content_info_item_value,
          children: s ? "Soon" : 0
        })]
      }), e.jsxs("div", {
        className: O.content_info_item,
        children: [e.jsx("div", {
          className: O.content_info_item_title,
          children: "Pixels recolored"
        }), e.jsx("div", {
          className: O.content_info_item_value,
          children: s ? Ve({
            num: n.repaints
          }) : 0
        })]
      }), e.jsxs("div", {
        className: O.content_info_item,
        children: [e.jsx("div", {
          className: O.content_info_item_title,
          children: "PX mined"
        }), e.jsx("div", {
          className: O.content_info_item_value,
          children: s ? Ve({
            num: n.balance
          }) : 0
        })]
      })]
    })
  },
  Q0 = "_container_os5nt_1",
  z0 = "_not_completed_os5nt_6",
  q0 = "_image_container_os5nt_10",
  L0 = "_image_os5nt_10",
  H0 = "_bold_os5nt_20",
  G0 = "_gray_os5nt_24",
  V0 = "_description_container_os5nt_28",
  gt = {
    container: Q0,
    not_completed: z0,
    image_container: q0,
    image: L0,
    bold: H0,
    gray: G0,
    description_container: V0
  },
  J0 = ({
    completed: t,
    item: n
  }) => e.jsxs("div", {
    className: F(gt.container, t ? "" : gt.not_completed),
    children: [e.jsx("div", {
      className: gt.image_container,
      children: e.jsx("img", {
        src: n.src,
        className: gt.image
      })
    }), e.jsxs("div", {
      className: gt.description_container,
      children: [e.jsx("span", {
        className: gt.bold,
        children: n.title
      }), e.jsx("span", {
        className: gt.gray,
        children: n.description
      })]
    })]
  }),
  Y0 = "/assets/0-CBlm-5t2.gif",
  X0 = "/assets/1-C1eaF-Lh.gif",
  W0 = "/assets/2-Dx7l5fvD.gif",
  K0 = "data:image/gif;base64,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",
  Z0 = "/assets/4-B9SjwR-x.gif",
  $0 = "/assets/5-D2MXnTsp.gif",
  eN = "/assets/6-DGYxyagY.gif",
  tN = "/assets/10-BNY74yH-.gif",
  nN = "/assets/12-B0vEyGRB.gif",
  sN = [{
    id: 1,
    src: Y0,
    title: "Beta Pixel",
    description: "Someone who's seen the First Pixel. Show respect. He has nightmares about cubes and flags."
  }, {
    id: 2,
    src: X0,
    title: "Pixel's 16 frens",
    description: "Invite 16 frens. A great company is the key to success!"
  }, {
    id: 3,
    src: W0,
    title: "Pixel Brotherhood",
    description: "Invite 64 frens. Where'd you get that charisma, buddy?"
  }, {
    id: 4,
    src: K0,
    title: "My pixel dudes",
    description: "Invite 128 frens. Admit it, are your relatives in the game too?"
  }, {
    id: 5,
    src: Z0,
    title: "Thunder Pixel",
    description: "Paint 64,000 pixels. Is your finger on fire?"
  }, {
    id: 6,
    src: $0,
    title: "Master over Pixels",
    description: "Paint 128,000 pixels. Have you considered a career as a pixel artist?"
  }, {
    id: 7,
    src: eN,
    title: "Malevich",
    description: "Paint 512,000 pixels. Either the most dedicated artist or the most dedicated auto-clicker."
  }, {
    id: 11,
    src: tN,
    title: "Platinum Pixel",
    description: "Platinum League member. Your mom would be proud of you."
  }, {
    id: 13,
    src: nN,
    title: "Ambassador",
    description: "Invited 10,000 frens. You're either very friendly or a bot. A friendly bot?"
  }],
  aN = ({
    isPopupContent: t
  }) => {
    const {
      ready: n,
      data: s
    } = ht(t);
    return e.jsx("div", {
      className: O.achievements_container,
      children: sN.map(a => e.jsx(J0, {
        item: a,
        completed: n && s.achievements && s.achievements[a.id]
      }, a.id))
    })
  },
  iN = () => e.jsxs("div", {
    className: O.no_content,
    children: ["Something will happen here,", e.jsx("br", {}), " but not now."]
  }),
  oN = ({
    active: t,
    isPopupContent: n = !0
  }) => e.jsxs("div", {
    className: O.tabs_content,
    children: [t === "info" && e.jsx(O0, {
      isPopupContent: n
    }), t === "achievements" && e.jsx(aN, {
      isPopupContent: n
    }), t === "inventory" && e.jsx(iN, {})]
  }),
  rN = ({
    isPopupContent: t = !0
  }) => {
    const [n, s] = u.useState("info");
    return e.jsxs("div", {
      style: {
        width: "100%"
      },
      children: [e.jsx(U0, {
        active: n,
        setActive: s
      }), e.jsx(F0, {}), e.jsx(oN, {
        active: n,
        isPopupContent: t
      })]
    })
  },
  cN = "_layout_c6k10_1",
  lN = "_close_button_c6k10_6",
  er = {
    layout: cN,
    close_button: lN
  },
  tr = () => {
    const t = _();
    return e.jsx("div", {
      className: er.close_button,
      onPointerUp: () => {
        t(vo())
      },
      children: e.jsx(N, {
        size: 26,
        children: ""
      })
    })
  },
  ja = ({
    isPopupContent: t = !0
  }) => {
    const n = t ? "Painter" : "My Profile";
    return e.jsxs("div", {
      className: F(O.container, !t && O.page),
      children: [t && e.jsx(tr, {}), e.jsx("div", {
        children: e.jsx("span", {
          className: O.title,
          children: n
        })
      }), e.jsx(R0, {
        isPopupContent: t
      }), e.jsx(D0, {
        isPopupContent: t
      }), e.jsx(k0, {
        isPopupContent: t
      }), e.jsx(M0, {
        isPopupContent: t
      }), e.jsx(rN, {
        isPopupContent: t
      })]
    })
  },
  dN = () => {
    const t = _(),
      n = c(be);
    return u.useEffect(() => (n && n.id && t(pg.getListByUserId({
      userId: n.id
    })), () => {
      t(ug())
    }), [n]), e.jsx(le, {
      children: e.jsx(ja, {
        isPopupContent: !1
      })
    })
  },
  uN = "_container_1bw7p_1",
  mN = {
    container: uN
  },
  AN = "_container_12mk9_1",
  pN = "_page_12mk9_13",
  hN = "_id_12mk9_17",
  gN = "_title_12mk9_22",
  _N = "_avatar_container_12mk9_28",
  fN = "_avatar_12mk9_28",
  xN = "_text_container_12mk9_39",
  yN = "_dot_12mk9_45",
  vN = "_user_name_12mk9_50",
  wN = "_squad_slug_12mk9_56",
  jN = "_your_squad_button_12mk9_62",
  bN = "_join_squad_button_12mk9_75",
  NN = "_red_12mk9_91",
  IN = "_divider_12mk9_95",
  CN = "_tabs_content_12mk9_101",
  PN = "_content_info_12mk9_105",
  SN = "_content_info_item_12mk9_112",
  TN = "_content_info_item_title_12mk9_116",
  EN = "_content_info_item_value_12mk9_120",
  BN = "_content_top_12mk9_127",
  DN = "_content_top_item_12mk9_140",
  kN = "_content_top_item_image_12mk9_150",
  RN = "_content_top_name_12mk9_156",
  MN = "_content_top_arrow_12mk9_162",
  UN = "_gray_12mk9_166",
  B = {
    container: AN,
    page: pN,
    id: hN,
    title: gN,
    avatar_container: _N,
    avatar: fN,
    text_container: xN,
    dot: yN,
    user_name: vN,
    squad_slug: wN,
    your_squad_button: jN,
    join_squad_button: bN,
    red: NN,
    divider: IN,
    tabs_content: CN,
    content_info: PN,
    content_info_item: SN,
    content_info_item_title: TN,
    content_info_item_value: EN,
    content_top: BN,
    content_top_item: DN,
    content_top_item_image: kN,
    content_top_name: RN,
    content_top_arrow: MN,
    gray: UN
  },
  nr = ({
    data: t,
    ready: n
  }) => {
    let s = pt;
    return n && t.squad.logo && t.squad.logo !== "" && (s = t.squad.logo), e.jsx("div", {
      className: B.avatar_container,
      children: e.jsx("img", {
        alt: "avatar",
        className: B.avatar,
        src: s
      })
    })
  },
  sr = ({
    data: t,
    ready: n
  }) => {
    if (!n) return e.jsx(Oe, {
      show: !n,
      children: e.jsx("div", {
        className: B.text_container,
        children: e.jsx("span", {
          className: B.user_name,
          children: "No name • @notpixel"
        })
      })
    });
    const a = (() => {
      var i;
      return hn(((i = t == null ? void 0 : t.squad) == null ? void 0 : i.name) || "No name")
    })();
    return e.jsx("div", {
      className: B.text_container,
      children: e.jsx("span", {
        className: B.user_name,
        children: a
      })
    })
  },
  ar = ({
    data: t,
    ready: n
  }) => {
    var a;
    return n ? ((a = t == null ? void 0 : t.squad) == null ? void 0 : a.slug) && t.squad.slug !== null ? e.jsx("div", {
      className: B.text_container,
      children: e.jsx(Nn, {
        address: `${bt}?startapp=${btoa(`id=${t.squad.id}`)}`,
        display: t.squad.slug,
        limit: 18
      })
    }) : e.jsx("div", {
      className: B.text_container,
      children: e.jsx("span", {
        className: B.squad_slug,
        children: "No squad slug"
      })
    }) : e.jsx(Oe, {
      show: !n,
      children: e.jsx("div", {
        className: B.text_container,
        children: e.jsx("span", {
          children: "Loading..."
        })
      })
    })
  },
  ir = ({
    data: t,
    ready: n
  }) => {
    const s = c(i => i.user.user);
    return n ? s !== null && s.squad.id !== null && s.squad.id === t.squad.id ? e.jsxs("div", {
      className: B.your_squad_button,
      onPointerUp: () => {
        ue(`https://t.me/${bt}?startapp=${btoa(`id=${t.squad.id}`)}`)
      },
      children: [e.jsx("span", {
        className: B.gray,
        children: "Your Squad."
      }), " ", e.jsx("span", {
        className: B.red,
        children: "Leave? "
      })]
    }) : e.jsx("button", {
      onPointerUp: () => {
        ue(`https://t.me/${bt}?startapp=${btoa(`id=${t.squad.id}`)}`)
      },
      className: B.join_squad_button,
      children: "Join squad"
    }) : null
  },
  FN = ({
    active: t,
    setActive: n
  }) => e.jsx(Yt, {
    style: {},
    children: e.jsx(Te, {
      active: t === "info",
      setActive: () => n("info"),
      children: "Info"
    })
  }),
  ON = () => e.jsx("div", {
    className: B.divider
  }),
  QN = ({
    data: t,
    ready: n
  }) => e.jsxs("div", {
    className: B.content_info,
    children: [e.jsxs("div", {
      className: B.content_info_item,
      children: [e.jsx("div", {
        className: B.content_info_item_title,
        children: "League"
      }), e.jsx("div", {
        className: B.content_info_item_value,
        children: n ? t.league : "-"
      })]
    }), e.jsxs("div", {
      className: B.content_info_item,
      children: [e.jsx("div", {
        className: B.content_info_item_title,
        children: "Place"
      }), e.jsx("div", {
        className: B.content_info_item_value,
        children: n ? Ve({
          num: t.rank
        }) : 0
      })]
    }), e.jsxs("div", {
      className: B.content_info_item,
      children: [e.jsx("div", {
        className: B.content_info_item_title,
        children: "Score"
      }), e.jsx("div", {
        className: B.content_info_item_value,
        children: n ? Ve({
          num: t.squad.scoredRepaints
        }) : 0
      })]
    }), e.jsxs("div", {
      className: B.content_info_item,
      children: [e.jsx("div", {
        className: B.content_info_item_title,
        children: "Members"
      }), e.jsx("div", {
        className: B.content_info_item_value,
        children: n ? Ve({
          num: t.squad.players
        }) : 0
      })]
    }), e.jsxs("div", {
      className: B.content_info_item,
      children: [e.jsx("div", {
        className: B.content_info_item_title,
        children: "Pixels recolored"
      }), e.jsx("div", {
        className: B.content_info_item_value,
        children: n ? Ve({
          num: t.squad.totalRepaints
        }) : 0
      })]
    }), e.jsxs("div", {
      className: B.content_info_item,
      children: [e.jsx("div", {
        className: B.content_info_item_title,
        children: "PX mined"
      }), e.jsx("div", {
        className: B.content_info_item_value,
        children: n ? Ve({
          num: t.squad.totalBalance
        }) : 0
      })]
    })]
  }),
  zN = [{
    name: "123",
    avatar: Lt
  }, {
    name: "123",
    avatar: ""
  }, {
    name: "123",
    avatar: null
  }, {
    name: "123",
    avatar: Lt
  }, {
    name: "123",
    avatar: Lt
  }],
  qN = () => e.jsx("div", {
    className: B.content_top,
    children: zN.map((t, n) => {
      const s = t.avatar && t.avatar !== "" ? t.avatar : pt;
      return e.jsxs("div", {
        className: B.content_top_item,
        children: [e.jsx("img", {
          alt: "img",
          className: B.content_top_item_image,
          src: s
        }), e.jsxs("div", {
          className: B.content_top_name,
          children: [e.jsx("span", {
            className: B.gray,
            children: n + 1
          }), e.jsx("span", {
            className: B.gray,
            children: "•"
          }), e.jsx("span", {
            children: t.name
          })]
        }), e.jsx("div", {
          className: B.content_top_arrow,
          children: e.jsx(N, {
            children: ""
          })
        })]
      }, n)
    })
  }),
  LN = ({
    isPopupContent: t,
    active: n,
    data: s,
    ready: a
  }) => e.jsxs("div", {
    className: B.tabs_content,
    children: [n === "info" && e.jsx(QN, {
      isPopupContent: t,
      data: s,
      ready: a
    }), n === "top" && e.jsx(qN, {})]
  }),
  or = ({
    data: t,
    ready: n
  }) => {
    const [s, a] = u.useState("info");
    return e.jsxs("div", {
      style: {
        width: "100%"
      },
      children: [e.jsx(FN, {
        active: s,
        setActive: a
      }), e.jsx(ON, {}), e.jsx(LN, {
        active: s,
        data: t,
        ready: n
      })]
    })
  },
  HN = () => {
    const t = _(),
      n = c(o => o.user.user),
      a = c(o => o.squad.getInfoFetchStatus) === p.fulfilled,
      i = c(o => o.squad.info);
    return u.useEffect(() => {
      n && n.squad && n.squad.id && t(Ms.getInfo({
        id: n.squad.id
      }))
    }, []), e.jsx(le, {
      children: e.jsxs("div", {
        className: mN.container,
        children: [e.jsx(nr, {
          data: i,
          ready: a
        }), e.jsx(sr, {
          data: i,
          ready: a
        }), e.jsx(ar, {
          data: i,
          ready: a
        }), e.jsx(ir, {
          data: i,
          ready: a
        }), e.jsx(or, {
          data: i,
          ready: a
        })]
      })
    })
  },
  GN = ({
    setFile: t,
    loading: n
  }) => {
    const s = ["image/png", "image/webp", "image/svg+xml", "image/gif", "image/bmp", "image/tiff"];
    return e.jsxs("div", {
      className: $.file_button_container,
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
        className: $.file_button,
        children: "Upload a picture"
      })]
    })
  },
  VN = ({
    dataUrl: t,
    loading: n,
    templateSize: s
  }) => e.jsx("div", {
    className: $.preview_container,
    children: e.jsxs("div", {
      className: $.preview_image_container,
      children: [e.jsx("img", {
        alt: "templateImage",
        id: "templateImage",
        className: $.preview_image,
        src: t
      }), n && e.jsx("div", {
        className: $.preview_image_loader,
        children: "Loading..."
      })]
    })
  }),
  JN = t => {
    const n = new Uint8Array(t.data);
    for (let s = 0; s < n.length; s += 4) {
      const a = n[s],
        i = n[s + 1],
        o = n[s + 2];
      if (n[s + 3] === 0) continue;
      let l = ut[0],
        d = 1 / 0;
      for (const h of ut) {
        const g = qt.deltaE(qt(cn(a, i, o)), qt(h));
        g < d && (d = g, l = h)
      }
      const m = wt(l);
      t.data[s] = m.r, t.data[s + 1] = m.g, t.data[s + 2] = m.b, t.data[s + 3] = 255
    }
  },
  YN = ({
    loading: t,
    imageData: n,
    posX: s,
    posY: a
  }) => {
    const i = _(),
      o = Z(),
      r = c(h => h.template.myTemplate),
      l = c(h => h.user.user),
      [d, m] = u.useState(!1);
    return e.jsx("div", {
      className: $.file_button_container,
      children: e.jsx("button", {
        disabled: t || d,
        className: $.file_button,
        onPointerUp: async () => {
          try {
            m(!0);
            const h = new Blob([n.data], {
              type: "application/octet-stream"
            });
            if ((await Re.uploadTemplate({
                blob: h,
                posX: s,
                posY: a
              })).status === 200) {
              r && v.mainImage.worldTemplate.deleteTemplate(r.id);
              const I = await i(Je.getTemplateById({
                  id: l.id
                })),
                b = {
                  ...I.payload,
                  url: `${I.payload.url}?time=${Date.now()}`,
                  type: ge.my
                };
              i(Ro(b)), i(wn()), await v.mainImage.worldTemplate.add(b), i(z({
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
  XN = ({
    templateSize: t,
    setTemplateSize: n,
    coords: s,
    setCoords: a
  }) => (u.useState([16, 32, 64, 128]), e.jsxs("div", {
    className: $.template_coords,
    children: [e.jsx("div", {
      className: $.template_coordinates_title,
      children: "Input template coordinates:"
    }), e.jsxs("div", {
      className: $.template_coords_container,
      children: [e.jsxs("div", {
        className: $.coords_item,
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
            dt(r) && a(r)
          },
          className: $.coords_input
        })]
      }), e.jsxs("div", {
        className: $.coords_item,
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
            dt(r) && a(r)
          },
          className: $.coords_input
        })]
      })]
    })]
  })),
  WN = () => e.jsxs("div", {
    className: $.instruction_container,
    children: [e.jsx("div", {
      className: $.img_container,
      children: e.jsx("img", {
        alt: "img",
        className: $.image,
        src: Os
      })
    }), e.jsx("div", {
      className: $.instruction_text,
      children: "Upload a picture and create a template"
    })]
  }),
  KN = () => {
    _(), c(be);
    const [t, n] = u.useState(null), [s, a] = u.useState(null), [i, o] = u.useState(null), [r, l] = u.useState(16), [d, m] = u.useState({
      x: "",
      y: ""
    }), [h, g] = u.useState(!1);
    return u.useEffect(() => {}, []), u.useEffect(() => {
      if (t !== null) {
        g(!0);
        const I = async () => {
          const b = document.createElement("canvas"),
            f = b.getContext("2d");
          f.imageSmoothingEnabled = !1;
          const j = t.width / t.height;
          let G, q;
          j > 1 ? (G = r, q = r / j) : (q = r, G = r * j);
          const ze = (r - G) / 2,
            K = (r - q) / 2;
          b.width = r, b.height = r, f.drawImage(t, ze, K, G, q);
          const _e = f.getImageData(0, 0, r, r);
          JN(_e), f.putImageData(_e, 0, 0), a(_e), o(b.toDataURL())
        };
        setTimeout(() => {
          I().then(() => {
            g(!1)
          })
        }, 100)
      }
    }, [t, r]), e.jsxs(le, {
      children: [i === null && e.jsx(WN, {}), i !== null && e.jsx(VN, {
        loading: h,
        dataUrl: i,
        templateSize: r
      }), i !== null && e.jsx(Mv, {
        templateSize: r,
        setTemplateSize: l
      }), i !== null && e.jsx(XN, {
        coords: d,
        setCoords: m,
        templateSize: r,
        setTemplateSize: l
      }), t === null && e.jsx(GN, {
        setFile: n,
        templateSize: r,
        loading: h
      }), t !== null && e.jsx(YN, {
        loading: h,
        imageData: s,
        posX: d.x,
        posY: d.y
      })]
    })
  },
  ZN = "_general_info_container_1u2nd_1",
  $N = "_img_container_1u2nd_7",
  eI = "_image_1u2nd_17",
  tI = "_image_cup_1u2nd_23",
  nI = "_image_glow_container_1u2nd_29",
  sI = "_image_glow_1u2nd_29",
  aI = "_rotate_1u2nd_1",
  iI = "_image_glow_reverse_1u2nd_48",
  oI = "_title_1u2nd_53",
  rI = "_description_container_1u2nd_60",
  cI = "_description_1u2nd_60",
  lI = "_gold_1u2nd_73",
  Me = {
    general_info_container: ZN,
    img_container: $N,
    image: eI,
    image_cup: tI,
    image_glow_container: nI,
    image_glow: sI,
    rotate: aI,
    image_glow_reverse: iI,
    title: oI,
    description_container: rI,
    description: cI,
    gold: lI
  },
  dI = "_info_layout_1p9dg_1",
  uI = {
    info_layout: dI
  },
  mI = t => {
    const n = new Uint8Array(t.data);
    for (let s = 0; s < n.length; s += 4) {
      const a = n[s],
        i = n[s + 1],
        o = n[s + 2];
      if (n[s + 3] === 0) continue;
      let l = ut[0],
        d = 1 / 0;
      for (const h of ut) {
        const g = qt.deltaE(qt(cn(a, i, o)), qt(h));
        g < d && (d = g, l = h)
      }
      const m = wt(l);
      t.data[s] = m.r, t.data[s + 1] = m.g, t.data[s + 2] = m.b, t.data[s + 3] = 255
    }
  },
  AI = "_instruction_container_17lvx_1",
  pI = "_img_container_17lvx_9",
  hI = "_img_inner_container_17lvx_16",
  gI = "_image_17lvx_22",
  _I = "_image_status_17lvx_30",
  fI = "_image_status_rejected_17lvx_45",
  xI = "_image_status_review_17lvx_49",
  yI = "_image_status_approved_17lvx_53",
  vI = "_copy_button_container_17lvx_57",
  wI = "_button_copy_17lvx_65",
  jI = "_gray_17lvx_71",
  bI = "_preview_container_17lvx_75",
  NI = "_preview_image_container_17lvx_81",
  II = "_preview_image_17lvx_81",
  CI = "_preview_image_loader_17lvx_94",
  PI = "_template_size_17lvx_109",
  SI = "_template_title_17lvx_117",
  TI = "_template_size_container_17lvx_122",
  EI = "_template_size_item_17lvx_128",
  BI = "_template_size_item_active_17lvx_136",
  DI = "_template_coords_17lvx_141",
  kI = "_template_coordinates_title_17lvx_151",
  RI = "_template_coords_container_17lvx_156",
  MI = "_coords_item_17lvx_163",
  UI = "_coords_input_17lvx_169",
  FI = "_file_button_container_17lvx_178",
  OI = "_file_button_17lvx_178",
  ce = {
    instruction_container: AI,
    img_container: pI,
    img_inner_container: hI,
    image: gI,
    image_status: _I,
    image_status_rejected: fI,
    image_status_review: xI,
    image_status_approved: yI,
    copy_button_container: vI,
    button_copy: wI,
    gray: jI,
    preview_container: bI,
    preview_image_container: NI,
    preview_image: II,
    preview_image_loader: CI,
    template_size: PI,
    template_title: SI,
    template_size_container: TI,
    template_size_item: EI,
    template_size_item_active: BI,
    template_coords: DI,
    template_coordinates_title: kI,
    template_coords_container: RI,
    coords_item: MI,
    coords_input: UI,
    file_button_container: FI,
    file_button: OI
  },
  Ft = {
    approved: "approved",
    review: "review",
    rejected: "rejected"
  },
  QI = () => {
    const t = _(),
      n = c(a => a.tournament.myTemplate);
    let s = Ft.review;
    return n && n.approved && (s = Ft.approved), n && n.deletedAt && (s = Ft.rejected), e.jsxs("div", {
      className: ce.instruction_container,
      children: [n && e.jsx("div", {
        children: "Current template:"
      }), e.jsx("div", {
        className: ce.img_container,
        children: e.jsxs("div", {
          className: ce.img_inner_container,
          children: [e.jsx("img", {
            alt: "img",
            className: ce.image,
            src: n ? n.url : Os,
            onPointerUp: () => {
              n.id && n.id !== 0 && t(zo(n))
            }
          }), s === Ft.review && e.jsx("div", {
            className: F(ce.image_status, ce.image_status_review),
            children: "On review"
          }), s === Ft.rejected && e.jsx("div", {
            className: F(ce.image_status, ce.image_status_rejected),
            children: "Rejected"
          }), s === Ft.approved && e.jsx("div", {
            className: F(ce.image_status, ce.image_status_approved),
            children: "Approved"
          })]
        })
      }), e.jsx("div", {
        className: ce.copy_button_container,
        children: e.jsx(Tt, {
          url: `${mt}?startapp=f${n.id}_t`,
          className: ce.button_copy,
          text: "Copy template link"
        })
      })]
    })
  },
  zI = ({
    dataUrl: t,
    loading: n,
    templateSize: s
  }) => e.jsx("div", {
    className: ce.preview_container,
    children: e.jsxs("div", {
      className: ce.preview_image_container,
      children: [e.jsx("img", {
        alt: "templateImage",
        id: "templateImage",
        className: ce.preview_image,
        src: t
      }), n && e.jsx("div", {
        className: ce.preview_image_loader,
        children: "Loading..."
      })]
    })
  }),
  qI = ({
    templateSize: t,
    setTemplateSize: n
  }) => {
    const [s] = u.useState([32]);
    return e.jsxs("div", {
      className: ce.template_size,
      children: [e.jsx("div", {
        className: ce.template_title,
        children: "Template Size"
      }), e.jsx("div", {
        className: ce.template_size_container,
        children: s.map(a => {
          const i = [ce.template_size_item];
          return t === a && i.push(ce.template_size_item_active), e.jsx("div", {
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
  LI = ({
    coords: t,
    setCoords: n
  }) => null,
  HI = () => {
    _(), c(be);
    const [t, n] = u.useState(null), [s, a] = u.useState(null), [i, o] = u.useState(null), [r, l] = u.useState(32), [d, m] = u.useState({
      x: 0,
      y: 0
    }), [h, g] = u.useState(!1);
    return u.useEffect(() => {
      if (t !== null) {
        g(!0);
        const I = async () => {
          const b = document.createElement("canvas"),
            f = b.getContext("2d");
          f.imageSmoothingEnabled = !1;
          const j = t.width / t.height;
          let G, q;
          j > 1 ? (G = r, q = r / j) : (q = r, G = r * j);
          const ze = (r - G) / 2,
            K = (r - q) / 2;
          b.width = r, b.height = r, f.drawImage(t, ze, K, G, q);
          const _e = f.getImageData(0, 0, r, r);
          mI(_e), f.putImageData(_e, 0, 0), a(_e), o(b.toDataURL())
        };
        setTimeout(() => {
          I().then(() => {
            g(!1)
          })
        }, 100)
      }
    }, [t, r]), e.jsxs("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 14
      },
      children: [i === null && e.jsx(QI, {}), i !== null && e.jsx(zI, {
        loading: h,
        dataUrl: i,
        templateSize: r
      }), i !== null && e.jsx(qI, {
        templateSize: r,
        setTemplateSize: l
      }), i !== null && e.jsx(LI, {
        coords: d,
        setCoords: m,
        templateSize: r,
        setTemplateSize: l
      })]
    })
  },
  GI = "_layout_1c7e5_1",
  VI = "_container_1c7e5_5",
  JI = "_button_container_1c7e5_11",
  YI = "_button_1c7e5_11",
  XI = "_end_of_list_button_1c7e5_27",
  js = {
    layout: GI,
    container: VI,
    button_container: JI,
    button: YI,
    end_of_list_button: XI
  },
  WI = "_template_item_container_qlah9_1",
  KI = "_template_item_inner_qlah9_12",
  ZI = "_template_item_picked_qlah9_28",
  $I = "_template_item_shadow_qlah9_43",
  eC = "_template_rank_qlah9_55",
  tC = "_template_recolors_qlah9_75",
  nC = "_template_recolors_pixel_qlah9_91",
  sC = "_template_image_qlah9_97",
  it = {
    template_item_container: WI,
    template_item_inner: KI,
    template_item_picked: ZI,
    template_item_shadow: $I,
    template_rank: eC,
    template_recolors: tC,
    template_recolors_pixel: nC,
    template_image: sC
  },
  aC = ({
    item: t,
    rank: n,
    hits: s,
    style: a = {}
  }) => {
    const i = _(),
      o = c(r => r.tournament.selectedTemplate);
    return e.jsxs("div", {
      className: it.template_item_container,
      style: {
        ...a
      },
      onPointerUp: async () => {
        t.id && t.id !== 0 && i(zo(t))
      },
      children: [e.jsx("div", {
        className: it.template_item_inner,
        children: e.jsx("img", {
          alt: "image",
          className: it.template_image,
          src: t.url
        })
      }), o && o.id === t.id && e.jsx("div", {
        className: it.template_item_picked,
        children: "Picked"
      }), n && e.jsx("div", {
        className: it.template_rank,
        children: n
      }), s !== void 0 && s !== 0 && e.jsx("div", {
        className: it.template_item_shadow
      }), s !== void 0 && s !== 0 && e.jsx("div", {
        className: it.template_recolors,
        children: e.jsx("div", {
          className: it.template_recolors_pixel,
          children: gn(s)
        })
      })]
    })
  },
  iC = "_round_info_container_1d52c_1",
  oC = "_title_1d52c_7",
  rC = "_description_1d52c_12",
  cC = "_round_status_container_1d52c_17",
  Tn = {
    round_info_container: iC,
    title: oC,
    description: rC,
    round_status_container: cC
  },
  lC = "_round_indicator_mgwmo_1",
  dC = "_round_indicator_wait_mgwmo_37",
  rr = {
    round_indicator: lC,
    round_indicator_wait: dC
  },
  uC = () => e.jsx("div", {
    className: rr.round_indicator_wait
  }),
  mC = () => {
    const t = _(),
      n = c(s => s.tournament.randomTemplatesListStatus);
    return e.jsx("div", {
      className: js.button_container,
      children: e.jsx("button", {
        disabled: n === p.pending,
        className: js.button,
        onPointerUp: () => {
          t(Us.getRandomList())
        },
        children: "Show another templates"
      })
    })
  },
  AC = () => {
    const t = _(),
      n = c(bA.selectAll);
    return u.useEffect(() => (t(Us.getRandomList()), () => {
      t(ig())
    }), []), e.jsxs("div", {
      className: js.layout,
      children: [e.jsx("div", {
        className: js.container,
        children: n.map((s, a) => e.jsx(aC, {
          item: s,
          hits: s.hits
        }, s.id))
      }), e.jsx(mC, {})]
    })
  },
  pC = () => (c(t => t.tournament.approvedTemplatesListTotal), e.jsxs("div", {
    children: [e.jsxs("div", {
      className: Tn.round_info_container,
      children: [e.jsxs("div", {
        children: [e.jsx("div", {
          className: Tn.title,
          children: "Preparing round 1"
        }), e.jsx("div", {
          className: Tn.description,
          children: "Select one template"
        })]
      }), e.jsxs("div", {
        className: Tn.round_status_container,
        children: [e.jsx(uC, {}), " Soon"]
      })]
    }), e.jsx(AC, {})]
  })),
  hC = "_soon_14n1b_1",
  gC = "_active_round_instruction_14n1b_11",
  _C = "_round_container_14n1b_18",
  fC = "_round_title_14n1b_26",
  xC = "_round_title_text_14n1b_31",
  yC = "_round_indicator_14n1b_36",
  vC = "_round_status_success_14n1b_42",
  wC = "_round_status_fail_14n1b_53",
  jC = "_success_14n1b_64",
  bC = "_fail_14n1b_68",
  NC = "_gray_14n1b_72",
  IC = "_round_main_info_14n1b_76",
  CC = "_round_image_container_14n1b_82",
  PC = "_round_image_14n1b_82",
  SC = "_round_lines_container_14n1b_93",
  TC = "_round_line_14n1b_93",
  EC = "_divider_14n1b_104",
  BC = "_pixels_number_14n1b_111",
  DC = "_pixel_14n1b_111",
  kC = "_past_rounds_14n1b_123",
  RC = "_past_rounds_divider_14n1b_132",
  V = {
    soon: hC,
    active_round_instruction: gC,
    round_container: _C,
    round_title: fC,
    round_title_text: xC,
    round_indicator: yC,
    round_status_success: vC,
    round_status_fail: wC,
    success: jC,
    fail: bC,
    gray: NC,
    round_main_info: IC,
    round_image_container: CC,
    round_image: PC,
    round_lines_container: SC,
    round_line: TC,
    divider: EC,
    pixels_number: BC,
    pixel: DC,
    past_rounds: kC,
    past_rounds_divider: RC
  },
  MC = () => e.jsx("div", {
    className: rr.round_indicator
  }),
  UC = () => !Ye.devServer && !Ye.isDev ? e.jsxs("div", {
    className: V.soon,
    children: ["Something will happen here,", e.jsx("br", {}), " but not now."]
  }) : e.jsxs("div", {
    children: [e.jsx("div", {
      className: V.active_round_instruction,
      children: "Top XXX and their YYY earn rewards in Round 2"
    }), e.jsxs("div", {
      className: V.round_container,
      children: [e.jsxs("div", {
        className: V.round_title,
        children: [e.jsx("div", {
          className: V.round_title_text,
          children: "Round X is live"
        }), e.jsx("div", {
          className: V.round_indicator,
          children: e.jsx(MC, {})
        }), e.jsx("div", {
          className: F(V.round_status_success, V.success),
          children: "Wining"
        }), e.jsx("div", {
          className: F(V.round_status_fail, V.fail),
          children: "😔 Lost"
        })]
      }), e.jsxs("div", {
        className: V.round_main_info,
        children: [e.jsx("div", {
          className: V.round_image_container,
          children: e.jsx("img", {
            alt: "image",
            className: V.round_image
          })
        }), e.jsxs("div", {
          className: V.round_lines_container,
          children: [e.jsxs("div", {
            className: V.round_line,
            children: [e.jsx("div", {
              className: F(V.gray),
              children: "Template rank:"
            }), e.jsx("div", {
              className: F(V.success),
              children: "👑 200"
            })]
          }), e.jsxs("div", {
            className: V.round_line,
            children: [e.jsx("div", {
              className: F(V.gray),
              children: "Pixels to win"
            }), e.jsx("div", {
              children: "In the zone"
            })]
          }), e.jsx("div", {
            className: V.divider
          }), e.jsxs("div", {
            className: V.round_line,
            children: [e.jsx("div", {
              className: F(V.gray),
              children: "Your position:"
            }), e.jsx("div", {
              className: F(V.fail),
              children: "200"
            })]
          }), e.jsxs("div", {
            className: V.round_line,
            children: [e.jsx("div", {
              className: F(V.gray),
              children: "Pixels to win"
            }), e.jsxs("div", {
              className: V.pixels_number,
              children: [e.jsx("div", {
                className: V.pixel
              }), e.jsx("div", {
                children: gn(245e3)
              })]
            })]
          })]
        })]
      })]
    }), e.jsxs("div", {
      className: V.past_rounds,
      children: [e.jsx("div", {
        className: V.past_rounds_divider
      }), e.jsx("div", {
        children: "Past rounds"
      }), e.jsx("div", {
        className: V.past_rounds_divider
      })]
    })]
  }),
  FC = () => {
    const t = c(n => n.tournament.activeTab);
    return e.jsxs("div", {
      className: uI.info_layout,
      children: [t === He.create && e.jsx(HI, {}), t === He.main && e.jsx(pC, {}), t === He.result && e.jsx(UC, {})]
    })
  },
  OC = () => e.jsxs(ae.Fragment, {
    children: [e.jsx(ng, {}), e.jsx(FC, {})]
  }),
  QC = "/assets/bg-BNfFdtGI.png",
  zC = "data:image/png;base64,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",
  cr = "/assets/rays-uhfpLlt6.png",
  lr = "/assets/rays2-Ce7ymw8-.png",
  qC = "_container_1i15p_1",
  LC = "_divider_1i15p_19",
  HC = "_row_1i15p_24",
  GC = "_row_title_1i15p_36",
  VC = "_row_title_main_1i15p_40",
  JC = "_row_hint_1i15p_45",
  YC = "_row_value_1i15p_51",
  XC = "_row_value_main_1i15p_55",
  WC = "_mining_percent_1i15p_60",
  KC = "_active_row_1i15p_70",
  ZC = "_gold_1i15p_80",
  $C = "_button_1i15p_88",
  ca = {
    container: qC,
    divider: LC,
    row: HC,
    row_title: GC,
    row_title_main: VC,
    row_hint: JC,
    row_value: YC,
    row_value_main: XC,
    mining_percent: WC,
    active_row: KC,
    gold: ZC,
    button: $C
  },
  eP = () => {
    const t = _(),
      n = c(a => a.tournament.showTournamentDetailsPopup),
      s = a => {
        t(Qo(a))
      };
    return e.jsx(fn, {
      show: n,
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
  tP = "_layout_2uiqn_1",
  nP = "_container_2uiqn_6",
  sP = "_close_button_2uiqn_18",
  aP = "_title_container_2uiqn_26",
  iP = "_title_2uiqn_26",
  oP = "_image_container_2uiqn_37",
  rP = "_image_2uiqn_37",
  cP = "_image_placeholder_2uiqn_51",
  lP = "_info_container_2uiqn_58",
  dP = "_info_row_2uiqn_64",
  uP = "_info_title_2uiqn_69",
  mP = "_info_value_blue_2uiqn_73",
  AP = "_info_value_white_2uiqn_78",
  pP = "_buttons_container_2uiqn_82",
  hP = "_button_2uiqn_82",
  gP = "_not_button_2uiqn_98",
  _P = "_button_copy_2uiqn_109",
  W = {
    layout: tP,
    container: nP,
    close_button: sP,
    title_container: aP,
    title: iP,
    image_container: oP,
    image: rP,
    image_placeholder: cP,
    info_container: lP,
    info_row: dP,
    info_title: uP,
    info_value_blue: mP,
    info_value_white: AP,
    buttons_container: pP,
    button: hP,
    not_button: gP,
    button_copy: _P
  },
  dr = ({
    template: t,
    style: n = {},
    onPointerUp: s = () => {}
  }) => {
    const a = _(),
      o = c(r => r.tournament.selectTemplateStatus) === p.pending;
    return e.jsx("button", {
      disabled: o,
      className: W.button,
      style: {
        ...n
      },
      onPointerUp: async () => {
        try {
          if (o) return;
          (await a(Us.selectTemplate({
            id: t.id
          }))).meta.requestStatus === p.fulfilled && a(og(t))
        } catch (r) {
          console.log(r, "error when selecting template")
        } finally {
          s()
        }
      },
      children: "Select Template"
    })
  },
  fP = () => {
    const t = c(o => o.tournament.templateDataInfoPopup),
      n = c(o => o.user.user),
      s = c(o => o.tournament.selectedTemplate),
      a = t.id === n.id,
      i = s !== null && t.id === s.id;
    return a ? e.jsx("div", {
      className: W.not_button,
      children: "Your template. Cute!"
    }) : i ? e.jsx("div", {
      className: W.not_button,
      children: "Selected template."
    }) : e.jsx(dr, {
      template: t
    })
  },
  xP = () => {
    const t = _(),
      n = c(a => a.tournament.showTemplateInfoPopup),
      s = c(a => a.tournament.templateDataInfoPopup);
    return !s || !n ? null : Xe.createPortal(e.jsx(Qe, {
      onPointerUp: () => t(ii()),
      show: n,
      children: e.jsx("div", {
        className: W.layout,
        children: e.jsxs("div", {
          className: W.container,
          onPointerUp: a => {
            a.stopPropagation()
          },
          children: [e.jsx("div", {
            className: W.close_button,
            onPointerUp: () => {
              t(ii())
            },
            children: e.jsx(N, {
              size: 26,
              children: ""
            })
          }), e.jsx("div", {
            className: W.title_container,
            children: e.jsxs("span", {
              className: W.title,
              children: ["Template ", s && `${s.size}x${s.size}`]
            })
          }), e.jsx("div", {
            className: W.image_container,
            children: e.jsx("img", {
              alt: "image",
              className: W.image,
              src: s.url
            })
          }), e.jsxs("div", {
            className: W.buttons_container,
            children: [e.jsx(fP, {}), e.jsx(Tt, {
              url: `${mt}?startapp=f${s.id}_t`,
              className: W.button_copy,
              text: "Copy template link"
            })]
          }), e.jsxs("div", {
            className: W.info_container,
            children: [e.jsxs("div", {
              className: W.info_row,
              children: [e.jsx("span", {
                className: W.info_title,
                children: "Coordinates"
              }), " ", e.jsxs("span", {
                className: W.info_value_blue,
                children: [s.x, ", ", s.y]
              })]
            }), e.jsxs("div", {
              className: W.info_row,
              children: [e.jsx("span", {
                className: W.info_title,
                children: "Painters"
              }), " ", e.jsx("span", {
                className: W.info_value_white,
                children: s.subscribers
              })]
            }), e.jsxs("div", {
              className: W.info_row,
              children: [e.jsx("span", {
                className: W.info_title,
                children: "Score"
              }), " ", e.jsx("span", {
                className: W.info_value_white,
                children: s.hits
              })]
            }), e.jsxs("div", {
              className: W.info_row,
              children: [e.jsx("span", {
                className: W.info_title,
                children: "Place"
              }), " ", e.jsx("span", {
                className: W.info_value_white,
                children: s.place
              })]
            }), e.jsxs("div", {
              className: W.info_row,
              children: [e.jsx("span", {
                className: W.info_title,
                children: "Lose round"
              }), " ", e.jsx("span", {
                className: W.info_value_white,
                children: s.loseRound
              })]
            })]
          })]
        })
      })
    }), document.body)
  },
  yP = "_layout_20dlh_1",
  vP = "_container_20dlh_10",
  wP = "_star_20dlh_14",
  jP = "_star_animation_20dlh_21",
  bP = "_move_20dlh_1",
  bs = {
    layout: yP,
    container: vP,
    star: wP,
    star_animation: jP,
    move: bP
  },
  NP = "data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3clinearGradient%20id='grad1'%20x1='0%25'%20y1='0%25'%20x2='0%25'%20y2='100%25'%3e%3cstop%20offset='0%25'%20style='stop-color:%23efce32;stop-opacity:1'%20/%3e%3c!--%20более%20светлый%20желтый%20--%3e%3cstop%20offset='100%25'%20style='stop-color:%23f7752e;stop-opacity:1'%20/%3e%3c!--%20более%20темный%20желтый%20--%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M5%200C2.23858%200%200%202.23858%200%205V27C0%2029.7614%202.23858%2032%205%2032H27C29.7614%2032%2032%2029.7614%2032%2027V5C32%202.23858%2029.7614%200%2027%200H5ZM21.4261%2010.5739H10.5739V21.4261H21.4261V10.5739Z'%20fill='url(%23grad1)'/%3e%3c/svg%3e",
  IP = ({
    size: t,
    style: n = {},
    animation: s = !1
  }) => e.jsx("img", {
    alt: "image",
    src: NP,
    className: s ? bs.star_animation : bs.star,
    style: {
      width: t,
      height: t,
      ...n
    }
  }),
  CP = u.memo(() => {
    const t = Array.from(Array(30));
    return e.jsx("div", {
      className: bs.layout,
      children: e.jsx("div", {
        className: bs.container,
        children: t.map((n, s) => {
          const a = U(2, 6);
          return e.jsx(IP, {
            size: a,
            animation: !0,
            style: {
              animationDelay: `-${s*300}ms`,
              transform: `translate(${U(-80,-170)*(s%2===1?1:-1)}px, ${U(-100,100)}px)`
            }
          }, s)
        })
      })
    })
  }, () => !1),
  PP = () => {
    const t = _();
    return e.jsxs(le, {
      children: [e.jsxs("div", {
        className: Me.general_info_container,
        style: {
          backgroundImage: `url(${QC})`,
          backgroundPosition: "top center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          marginTop: -20
        },
        children: [e.jsxs("div", {
          className: Me.img_container,
          children: [e.jsx("img", {
            alt: "img",
            className: Me.image_cup,
            src: zC
          }), e.jsx("div", {
            className: Me.image_glow_container,
            children: e.jsx("img", {
              alt: "img",
              className: Me.image_glow,
              src: cr
            })
          }), e.jsx("div", {
            className: Me.image_glow_container,
            children: e.jsx("img", {
              alt: "img",
              className: Me.image_glow_reverse,
              src: lr
            })
          }), e.jsx(CP, {})]
        }), e.jsx("h1", {
          className: Me.title,
          children: "Telegram Battle"
        }), e.jsxs("div", {
          className: Me.description_container,
          children: [e.jsxs("span", {
            className: Me.description,
            children: [e.jsx("span", {
              children: " Paint templates to win "
            }), " ", e.jsx("span", {
              className: Me.gold,
              children: "Golden Pixels"
            }), " ", e.jsx("br", {}), e.jsx(bn, {
              onPointerUp: n => {
                n.stopPropagation(), t(Qo(!0))
              },
              children: "How it works"
            })]
          }), e.jsx(eP, {})]
        })]
      }), e.jsx(OC, {}), e.jsx(xP, {})]
    })
  },
  SP = "_container_qn09x_1",
  TP = "_image_container_qn09x_9",
  EP = "_image_qn09x_9",
  BP = "_title_container_qn09x_18",
  DP = "_text_container_qn09x_27",
  kP = "_title_qn09x_18",
  RP = "_gray_qn09x_39",
  MP = "_bold_qn09x_43",
  UP = "_input_qn09x_47",
  FP = "_catalog_container_qn09x_71",
  OP = "_catalog_title_qn09x_76",
  QP = "_catalog_items_container_qn09x_81",
  zP = "_catalog_item_qn09x_81",
  qP = "_catalog_item_image_container_qn09x_100",
  LP = "_catalog_item_image_qn09x_100",
  HP = "_button_container_qn09x_109",
  GP = "_button_qn09x_109",
  VP = "_wrong_helper_text_qn09x_124",
  JP = "_wrong_button_qn09x_129",
  YP = "_wrong_button_text2_qn09x_142",
  S = {
    container: SP,
    image_container: TP,
    image: EP,
    title_container: BP,
    text_container: DP,
    title: kP,
    gray: RP,
    bold: MP,
    input: UP,
    catalog_container: FP,
    catalog_title: OP,
    catalog_items_container: QP,
    catalog_item: zP,
    catalog_item_image_container: qP,
    catalog_item_image: LP,
    button_container: HP,
    button: GP,
    wrong_helper_text: VP,
    wrong_button: JP,
    wrong_button_text2: YP
  },
  XP = "/assets/box_1-CzUKXu07.gif",
  WP = "/assets/box_2-wR9cQS7q.gif",
  KP = "/assets/box_3-g_PL1kKM.gif",
  ZP = "/assets/dogs-D0jtZggB.gif",
  $P = "/assets/secret_word-BTKB1fAO.gif",
  eS = "/assets/cube_youtube_2-BqessN1a.gif",
  tS = "/assets/cube_twitter_3_m_-Bxf2Qx_E.gif",
  En = {
    Ghost: "Ghost",
    Mythical: "Mythical",
    Magical: "Magical",
    Dogs: "Dogs"
  },
  nS = () => {
    const t = _(),
      [n, s] = u.useState(""),
      [a, i] = u.useState(!1),
      [o, r] = u.useState(!1),
      [l, d] = u.useState({
        count: 0,
        limit: 1e4
      }),
      [m, h] = u.useState({
        count: 0,
        limit: 1e4
      }),
      [g, I] = u.useState({
        count: 0,
        limit: 1
      }),
      [b, f] = u.useState({
        count: 0,
        limit: 5e3
      });
    return u.useEffect(() => {
      let j = null;
      return o && (j = setTimeout(() => {
        r(!1)
      }, 5e3)), () => {
        clearTimeout(j)
      }
    }, [o]), u.useEffect(() => {
      (async () => {
        const G = await X.getSecretStats();
        G.status === 200 && G.data && G.data.forEach(q => {
          q.group_name === En.Ghost && d({
            count: q.usage_count,
            limit: q.limit
          }), q.group_name === En.Mythical && h({
            count: q.usage_count,
            limit: q.limit
          }), q.group_name === En.Magical && I({
            count: q.usage_count,
            limit: q.limit
          }), q.group_name === En.Dogs && f({
            count: q.usage_count,
            limit: q.limit
          })
        })
      })()
    }, []), e.jsx(le, {
      children: e.jsxs("div", {
        className: S.container,
        children: [e.jsx("div", {
          className: S.image_container,
          children: e.jsx("img", {
            alt: "image",
            className: S.image,
            src: $P
          })
        }), e.jsxs("div", {
          className: S.title_container,
          children: [e.jsxs("div", {
            className: S.text_container,
            children: [e.jsx("span", {
              className: F(S.bold, S.title),
              children: "Discover the Secrets"
            }), e.jsx("span", {
              className: S.gray,
              children: "Got secret word?"
            })]
          }), e.jsx("input", {
            className: S.input,
            placeholder: "Enter your word here, fren",
            value: n,
            onChange: j => {
              let G = j.target.value;
              s(G)
            }
          })]
        }), e.jsxs("div", {
          className: S.catalog_container,
          children: [e.jsx("div", {
            className: F(S.catalog_title, S.bold),
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
                  src: XP
                })
              }), e.jsx("div", {
                className: F(S.bold),
                children: "Ghost's secret"
              }), e.jsxs("div", {
                className: F(S.gray),
                children: [xt({
                  num: 1e4
                }), "/", xt({
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
                  src: WP
                })
              }), e.jsx("div", {
                className: F(S.bold),
                children: "Mythical secret"
              }), e.jsxs("div", {
                className: F(S.gray),
                children: [xt({
                  num: m.count
                }), "/", xt({
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
                  src: ZP
                })
              }), e.jsx("div", {
                className: F(S.bold),
                children: "Dogs secret"
              }), e.jsxs("div", {
                className: F(S.gray),
                children: [xt({
                  num: b.count
                }), "/", xt({
                  num: b.limit
                })]
              })]
            }), e.jsxs("div", {
              className: S.catalog_item,
              children: [e.jsx("div", {
                className: S.catalog_item_image_container,
                children: e.jsx("img", {
                  alt: "item_image",
                  className: S.catalog_item_image,
                  src: KP
                })
              }), e.jsx("div", {
                className: F(S.bold),
                children: "Magical secret"
              }), e.jsxs("div", {
                className: F(S.gray),
                children: [g.count, "/", g.limit]
              })]
            }), e.jsxs("div", {
              className: S.catalog_item,
              children: [e.jsx("div", {
                className: S.catalog_item_image_container,
                children: e.jsx("img", {
                  alt: "item_image",
                  className: S.catalog_item_image,
                  src: eS
                })
              }), e.jsx("div", {
                className: F(S.bold),
                children: "Y secrets"
              }), e.jsx("div", {
                className: F(S.gray),
                children: "Daily"
              })]
            }), e.jsxs("div", {
              className: S.catalog_item,
              children: [e.jsx("div", {
                className: S.catalog_item_image_container,
                children: e.jsx("img", {
                  alt: "item_image",
                  className: S.catalog_item_image,
                  src: tS
                })
              }), e.jsx("div", {
                className: F(S.bold),
                children: "X secrets"
              }), e.jsx("div", {
                className: F(S.gray),
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
                const j = await X.checkSecret({
                  key: n
                });
                if (j.status === 200) {
                  const G = j.data;
                  if (G.secretWord.success) {
                    let q = "Success!";
                    G.secretWord.reward && (q += ` ${G.secretWord.reward} PX earned`), t(z({
                      id: performance.now(),
                      text: q,
                      icon: ""
                    })), t(Pt(G.secretWord.reward || 0));
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
            className: F(S.gray, S.wrong_helper_text),
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
  rt = {
    ratings: "/ratings",
    stars: "/stars",
    mining: "/claiming",
    template: "/template",
    history: "/history",
    my_squad: "/my-squad",
    my_profile: "/my-profile"
  },
  sS = Object.values(rt),
  aS = () => e.jsx(Ia, {
    children: e.jsxs(kr, {
      children: [e.jsx(ne, {
        path: "/welcome",
        children: e.jsx(tj, {})
      }), e.jsx(ne, {
        path: "/invite-frens",
        children: e.jsx(Uj, {})
      }), e.jsx(ne, {
        path: rt.stars,
        children: e.jsx(fd, {})
      }), e.jsx(ne, {
        path: "/info",
        children: e.jsx(bd, {})
      }), e.jsx(ne, {
        path: rt.my_squad,
        children: e.jsx(HN, {})
      }), e.jsx(ne, {
        path: rt.my_profile,
        children: e.jsx(dN, {})
      }), e.jsx(ne, {
        path: "/rules",
        children: e.jsx(kw, {})
      }), e.jsx(ne, {
        path: "/terms",
        children: e.jsx(Cd, {})
      }), e.jsx(ne, {
        path: "/stats",
        children: e.jsx(eb, {})
      }), e.jsx(ne, {
        path: "/privacy",
        children: e.jsx(Td, {})
      }), e.jsx(ne, {
        path: "/secrets",
        children: e.jsx(nS, {})
      }), e.jsx(ne, {
        path: rt.mining,
        children: e.jsx(_f, {})
      }), e.jsx(ne, {
        path: "/ratings/awards",
        children: e.jsx(Qw, {})
      }), e.jsx(ne, {
        path: rt.ratings,
        children: e.jsx(xx, {})
      }), e.jsx(ne, {
        path: "/daily",
        children: e.jsx($b, {})
      }), e.jsx(ne, {
        path: rt.history,
        children: e.jsx(Pw, {})
      }), e.jsx(ne, {
        path: "/template/create",
        children: e.jsx(KN, {})
      }), e.jsx(ne, {
        path: rt.template,
        children: e.jsx(m0, {})
      }), e.jsx(ne, {
        path: "/tournament",
        children: e.jsx(PP, {})
      }), e.jsx(ne, {
        path: "/energy-over",
        children: e.jsx(xb, {})
      }), e.jsx(ne, {
        path: "/open-league",
        children: e.jsx(rj, {})
      }), e.jsx(ne, {
        path: "/pay-support",
        children: e.jsx(Aj, {})
      }), e.jsx(ne, {
        path: "/",
        children: e.jsx(ew, {})
      })]
    })
  }),
  iS = "_layout_1djp8_1",
  oS = "_loading_container_1djp8_8",
  rS = "_image_container_1djp8_20",
  cS = "_image_1djp8_20",
  lS = "_text_1djp8_29",
  nn = {
    layout: iS,
    loading_container: oS,
    image_container: rS,
    image: cS,
    text: lS
  },
  dS = "_buttons_container_rjvnl_1",
  uS = "_group_rjvnl_8",
  mS = "_left_rjvnl_15",
  AS = "_middle_rjvnl_21",
  pS = "_right_rjvnl_29",
  hS = "_number_rjvnl_36",
  gS = "_button_rjvnl_1",
  _S = "_ratings_button_rjvnl_55",
  fS = "_stars_button_rjvnl_62",
  xS = "_shop_button_rjvnl_70",
  yS = "_burger_button_rjvnl_79",
  vS = "_relative_button_rjvnl_89",
  wS = "_telegram_button_rjvnl_116",
  jS = "_button_img_rjvnl_124",
  bS = "_avatar_img_rjvnl_129",
  NS = "_open_menu_button_rjvnl_134",
  IS = "_open_menu_button_image_rjvnl_144",
  CS = "_my_pixels_amount_rjvnl_149",
  PS = "_header_content_rjvnl_154",
  ve = {
    buttons_container: dS,
    group: uS,
    left: mS,
    middle: AS,
    right: pS,
    number: hS,
    button: gS,
    ratings_button: _S,
    stars_button: fS,
    shop_button: xS,
    burger_button: yS,
    relative_button: vS,
    telegram_button: wS,
    button_img: jS,
    avatar_img: bS,
    open_menu_button: NS,
    open_menu_button_image: IS,
    my_pixels_amount: CS,
    header_content: PS
  },
  SS = () => c(ke) ? null : e.jsxs("button", {
    className: `${ve.button} ${ve.telegram_button}`,
    onPointerUp: () => {
      ue("https://t.me/notpixel")
    },
    children: [e.jsx("img", {
      alt: "tg_logo",
      src: _n
    }), "Go to app for paint"]
  }),
  Qs = t => {
    const n = Is(),
      s = Z();
    return () => {
      n.pathname === t ? s.push("/") : s.push(t)
    }
  },
  TS = () => {
    const t = Qs("/claiming"),
      n = c(a => a.user.pixelCoins);
    return c(ke) ? e.jsxs("button", {
      className: `${ve.button}`,
      onPointerUp: t,
      children: [e.jsx(H, {
        size: 16,
        className: ve.button_img
      }), e.jsx("div", {
        style: {
          transform: "translateY(1px)"
        },
        children: e.jsx(yn, {
          number: Math.max(Number(n.toFixed(0)), 0)
        })
      })]
    }) : null
  },
  ES = "data:image/svg+xml,%3c?xml%20version='1.0'%20?%3e%3csvg%20viewBox='0%200%2032%2032'%20xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:none;}%3c/style%3e%3c/defs%3e%3ctitle/%3e%3cg%20fill='%23e0dd8e'%20data-name='Layer%202'%20id='Layer_2'%3e%3cpath%20d='M24,29H8a3,3,0,0,1-3-3V16a1,1,0,0,1,2,0V26a1,1,0,0,0,1,1H24a1,1,0,0,0,1-1V16a1,1,0,0,1,2,0V26A3,3,0,0,1,24,29Z'/%3e%3cpath%20d='M15,29H10a1,1,0,0,1-1-1V22a3,3,0,0,1,3-3h1a3,3,0,0,1,3,3v6A1,1,0,0,1,15,29Zm-4-2h3V22a1,1,0,0,0-1-1H12a1,1,0,0,0-1,1Z'/%3e%3cpath%20d='M25,17a4,4,0,0,1-4-4,1,1,0,0,1,2,0,2,2,0,0,0,4,0v-.76L24.38,7H7.62L5,12.24V13a2,2,0,0,0,4,0,1,1,0,0,1,2,0,4,4,0,0,1-8,0V12a1,1,0,0,1,.11-.45l3-6A1,1,0,0,1,7,5H25a1,1,0,0,1,.89.55l3,6A1,1,0,0,1,29,12v1A4,4,0,0,1,25,17Z'/%3e%3cpath%20d='M13,17a4,4,0,0,1-4-4,1,1,0,0,1,2,0,2,2,0,0,0,4,0,1,1,0,0,1,2,0A4,4,0,0,1,13,17Z'/%3e%3cpath%20d='M19,17a4,4,0,0,1-4-4,1,1,0,0,1,2,0,2,2,0,0,0,4,0,1,1,0,0,1,2,0A4,4,0,0,1,19,17Z'/%3e%3cpath%20d='M22,22H19a1,1,0,0,1,0-2h3a1,1,0,0,1,0,2Z'/%3e%3c/g%3e%3cg%20id='frame'%3e%3crect%20class='cls-1'%20height='32'%20width='32'/%3e%3c/g%3e%3c/svg%3e",
  BS = () => {
    const t = Qs("/stars");
    return c(ke) ? e.jsx("button", {
      className: `${ve.shop_button}`,
      onPointerUp: t,
      children: e.jsx("img", {
        alt: "icon",
        src: ES,
        style: {
          width: 24,
          height: 24
        }
      })
    }) : null
  },
  DS = () => {
    const t = Qs("/invite-frens");
    return c(ke) ? e.jsx("button", {
      className: `${ve.stars_button}`,
      onPointerUp: t,
      children: e.jsx(N, {
        size: 20,
        children: ""
      })
    }) : null
  },
  kS = () => {
    const t = _(),
      n = c(Io),
      s = () => {
        if (n) {
          t(jt(!1));
          return
        }
        t(jt(!0))
      };
    return e.jsx("button", {
      className: ve.burger_button,
      onPointerUp: s,
      children: e.jsx(N, {
        size: 28,
        children: ""
      })
    })
  },
  RS = () => {
    const t = Qs("/daily");
    return c(ke) ? e.jsx("button", {
      className: `${ve.stars_button}`,
      onPointerUp: t,
      children: e.jsx(N, {
        size: 20,
        children: ""
      })
    }) : null
  },
  _i = ae.memo(() => e.jsxs("div", {
    className: ve.buttons_container,
    children: [e.jsxs("div", {
      className: `${ve.group} ${ve.left}`,
      children: [e.jsx(kS, {}), e.jsx(DS, {})]
    }), e.jsx("div", {
      className: `${ve.group} ${ve.middle}`,
      children: e.jsx(TS, {})
    }), e.jsxs("div", {
      className: `${ve.group} ${ve.right}`,
      children: [e.jsx(RS, {}), e.jsx(SS, {}), e.jsx(BS, {})]
    })]
  })),
  fi = {
    bronze: Pe.bronze,
    silver: Pe.silver,
    gold: Pe.gold,
    platinum: Pe.platinum,
    diamond: Pe.diamond
  },
  xi = () => {
    const t = c(s => s.user.user),
      n = [Pe.league];
    return t !== null && fi.hasOwnProperty(t.league) ? (n.push(fi[t.league]), e.jsx("div", {
      className: n.join(" ")
    })) : null
  },
  MS = () => {
    const t = c(Ct),
      n = Is(),
      s = c(ul),
      a = c(ml);
    c(ll);
    const i = `calc(16px + ${s.top+a.top}px)`;
    return t ? t && n.pathname === "/" ? e.jsx("div", {
      className: Pe.header_bottom_container,
      style: {
        top: i
      },
      children: e.jsx("div", {
        className: Pe.header_bottom,
        children: e.jsxs("div", {
          className: Pe.header_content,
          children: [e.jsx(xi, {}), e.jsx(_i, {})]
        })
      })
    }) : null : e.jsx("div", {
      className: Pe.header,
      children: e.jsxs("div", {
        className: Pe.header_content,
        children: [e.jsx(xi, {}), e.jsx(_i, {})]
      })
    })
  };
let yi = "/";
const US = () => {
    let t = Is(),
      n = Z();
    return u.useEffect(() => {
      const s = () => {
        sS.includes(t.pathname) ? n.push("/") : n.goBack()
      };
      return window.Telegram.WebApp.onEvent("backButtonClicked", s), t.pathname !== yi && (t.pathname === "/" ? window.Telegram.WebApp.BackButton.hide() : window.Telegram.WebApp.BackButton.show(), yi = t.pathname), () => {
        window.Telegram.WebApp.offEvent("backButtonClicked", s)
      }
    }, [t, n]), null
  },
  FS = "_layout_ppin4_1",
  OS = {
    layout: FS
  },
  QS = () => {
    const t = u.useRef(),
      n = c(a => a.progress.command),
      s = c(a => a.progress.counter);
    return u.useEffect(() => {
      let a = null,
        i = 0,
        o = null,
        r = 2e3,
        l = 80,
        d = null,
        m = null;
      const h = g => {
        a === null && (a = g);
        const b = (g - a) / r;
        o !== g && (i = Math.min(b * l, l), t.current && (t.current.style.width = `${i}%`)), o = g, i < l && (d = requestAnimationFrame(h))
      };
      return n === Se.start && (d = requestAnimationFrame(h), t.current && (t.current.style.display = "block")), n === Se.finish && (t.current && (t.current.style.width = "100%"), m = setTimeout(() => {
        t.current && (t.current.style.display = "none", t.current.style.width = "0")
      }, 300)), () => {
        d !== null && cancelAnimationFrame(d), m !== null && clearTimeout(m)
      }
    }, [n, s]), Xe.createPortal(e.jsx("div", {
      ref: t,
      className: OS.layout
    }), document.body)
  },
  zS = "_container_11ui8_1",
  qS = "_header_11ui8_13",
  LS = "_close_container_11ui8_23",
  HS = "_close_11ui8_23",
  GS = "_title_11ui8_48",
  VS = "_frens_count_11ui8_53",
  JS = "_body_11ui8_58",
  YS = "_content_11ui8_68",
  XS = "_image_container_11ui8_75",
  WS = "_image_11ui8_75",
  KS = "_image_container_charges_11ui8_84",
  ZS = "_image_charges_11ui8_89",
  $S = "_description_container_11ui8_94",
  e2 = "_bold_11ui8_102",
  t2 = "_gray_11ui8_107",
  n2 = "_center_11ui8_111",
  s2 = "_benefits_container_11ui8_115",
  a2 = "_benefits_item_11ui8_123",
  i2 = "_benefits_icon_container_11ui8_128",
  o2 = "_icon_invite_11ui8_132",
  r2 = "_footer_11ui8_136",
  c2 = "_button_11ui8_141",
  D = {
    container: zS,
    header: qS,
    close_container: LS,
    close: HS,
    title: GS,
    frens_count: VS,
    body: JS,
    content: YS,
    image_container: XS,
    image: WS,
    image_container_charges: KS,
    image_charges: ZS,
    description_container: $S,
    bold: e2,
    gray: t2,
    center: n2,
    benefits_container: s2,
    benefits_item: a2,
    benefits_icon_container: i2,
    icon_invite: o2,
    footer: r2,
    button: c2
  },
  l2 = "data:image/png;base64,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",
  d2 = () => {
    var o, r;
    const t = _(),
      n = c(l => l.main.showInviteFrensPopup),
      s = c(l => l.user.user),
      a = c(l => l.main.settings),
      i = `${mt}?startapp=f${((r=(o=window.Telegram.WebApp.initDataUnsafe)==null?void 0:o.user)==null?void 0:r.id)||""}`;
    return e.jsx(Qe, {
      show: n,
      onPointerUp: () => t($s()),
      children: e.jsxs("div", {
        className: D.container,
        onPointerUp: l => {
          l.stopPropagation()
        },
        children: [e.jsxs("div", {
          className: D.header,
          children: [e.jsx("div", {
            className: D.title,
            children: "Invite frens "
          }), e.jsx("div", {
            className: D.close_container,
            children: e.jsx("div", {
              className: D.close,
              onPointerUp: () => {
                t($s())
              },
              children: e.jsx(N, {
                size: 20,
                children: ""
              })
            })
          })]
        }), e.jsx("div", {
          className: D.body,
          children: e.jsxs("div", {
            className: D.content,
            children: [e.jsx("div", {
              className: D.image_container,
              children: e.jsx("img", {
                alt: "image",
                className: D.image,
                src: l2
              })
            }), e.jsxs("div", {
              className: D.description_container,
              children: [e.jsxs("span", {
                className: D.bold,
                children: ["Your frens:  ", e.jsx("span", {
                  className: D.frens_count,
                  children: (s == null ? void 0 : s.friends) || 0
                })]
              }), e.jsxs("span", {
                children: ["Invite more! You and your", e.jsx("br", {}), " frens will get bonuses:"]
              })]
            }), e.jsxs("div", {
              className: D.benefits_container,
              children: [e.jsx("div", {}), e.jsxs("div", {
                className: D.benefits_item,
                children: ["No Premium:   ", " ", e.jsx("div", {
                  className: D.benefits_icon_container,
                  children: e.jsx(H, {
                    size: 16,
                    className: D.icon_invite
                  })
                }), a.InitialCoins]
              }), e.jsx("div", {}), " ", e.jsx("div", {}), e.jsxs("div", {
                className: D.benefits_item,
                children: ["Premium:   ", " ", e.jsx("div", {
                  className: D.benefits_icon_container,
                  children: e.jsx(H, {
                    size: 16,
                    className: D.icon_invite
                  })
                }), a.RefRewardCoinsPremium]
              }), e.jsx("div", {})]
            })]
          })
        }), e.jsxs("div", {
          className: D.footer,
          children: [e.jsx(Tt, {
            url: i
          }), e.jsx("button", {
            className: D.button,
            onPointerUp: l => {
              l.stopPropagation(), ue(`https://t.me/share/url?url=${i}`), t($s())
            },
            children: "Share"
          })]
        })]
      })
    })
  },
  u2 = "_container_19qal_1",
  m2 = "_header_19qal_9",
  A2 = "_close_19qal_19",
  p2 = "_title_19qal_31",
  h2 = "_body_19qal_36",
  g2 = "_image_container_19qal_49",
  _2 = "_image_19qal_49",
  f2 = "_content_container_19qal_60",
  x2 = "_description_container_19qal_68",
  y2 = "_description_item_19qal_75",
  v2 = "_amount_selector_container_19qal_82",
  w2 = "_amount_selector_button_19qal_88",
  j2 = "_amount_selector_count_19qal_101",
  b2 = "_button_container_19qal_112",
  N2 = "_crypto_button_container_19qal_118",
  I2 = "_error_19qal_132",
  C2 = "_not_available_19qal_139",
  P2 = "_button_19qal_112",
  S2 = "_star_color_19qal_165",
  T2 = "_tokens_selector_19qal_171",
  E2 = "_tokens_title_19qal_176",
  B2 = "_connect_wallet_text_title_19qal_183",
  D2 = "_tokens_container_19qal_192",
  k2 = "_token_item_19qal_199",
  R2 = "_token_image_container_19qal_210",
  M2 = "_token_image_19qal_210",
  U2 = "_sale_box_19qal_220",
  F2 = "_sale_text_19qal_232",
  Y = {
    container: u2,
    header: m2,
    close: A2,
    title: p2,
    body: h2,
    image_container: g2,
    image: _2,
    content_container: f2,
    description_container: x2,
    description_item: y2,
    amount_selector_container: v2,
    amount_selector_button: w2,
    amount_selector_count: j2,
    button_container: b2,
    crypto_button_container: N2,
    error: I2,
    not_available: C2,
    button: P2,
    star_color: S2,
    tokens_selector: T2,
    tokens_title: E2,
    connect_wallet_text_title: B2,
    tokens_container: D2,
    token_item: k2,
    token_image_container: R2,
    token_image: M2,
    sale_box: U2,
    sale_text: F2
  },
  O2 = () => {
    const t = _(),
      n = c(a => a.shop.activeProductCardId),
      s = c(a => a.shop.products[n]);
    return e.jsxs("div", {
      className: Y.header,
      onPointerUp: a => {
        a.stopPropagation()
      },
      children: [e.jsx("div", {
        className: Y.close,
        onPointerUp: () => {
          t(Pa())
        },
        children: e.jsx(N, {
          size: 30,
          children: ""
        })
      }), e.jsx("div", {
        className: Y.title,
        children: s.name
      })]
    })
  },
  Q2 = () => {
    const t = c(a => a.shop.activeProductCardId),
      n = c(a => a.shop.products[t]),
      s = c(a => a.shop.amount);
    return e.jsx("div", {
      className: Y.image_container,
      children: e.jsx("img", {
        alt: "img",
        className: Y.image,
        src: Li(n.id, s)
      })
    })
  },
  z2 = () => {
    const t = c(s => s.shop.activeProductCardId),
      n = c(s => s.shop.products[t]);
    return e.jsx("div", {
      className: Y.description_container,
      children: e.jsx("span", {
        className: Y.description_item,
        children: n.description
      })
    })
  },
  q2 = () => {
    const t = _(),
      n = c(Ui),
      s = c(i => i.shop.selectedCurrency);
    return c(nt) !== ye ? null : e.jsxs("div", {
      className: Y.tokens_selector,
      children: [e.jsx("div", {
        className: Y.tokens_title,
        children: "Select token"
      }), e.jsx("div", {
        children: e.jsx("div", {
          className: Y.tokens_container,
          children: n.map(i => i.currency_id === 1 ? null : e.jsxs("div", {
            className: Y.token_item,
            style: {
              color: i.currency_id === s ? "#FFFFFF" : void 0
            },
            onPointerUp: () => {
              t(rn(i.currency_id))
            },
            children: [e.jsx("div", {
              children: e.jsx(N, {
                size: 28,
                children: s === i.currency_id ? "" : ""
              })
            }), e.jsx("div", {
              className: Y.token_image_container,
              children: e.jsx("img", {
                alt: "img",
                className: Y.token_image,
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
  L2 = () => {
    const t = c(s => s.shop.selectedCurrency),
      n = c(s => s.shop.crypto).filter(s => s.currency_id === t)[0];
    return t === 1 ? e.jsx("span", {
      className: Y.star_color,
      style: {
        paddingRight: 4,
        marginBottom: -5
      },
      children: e.jsx(pn, {})
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
  H2 = ({
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
      children: ["Buy for ", e.jsx(L2, {}), Math.round(o * (r ? s : 1) * 100) / 100, e.jsx("div", {
        className: Y.sale_box,
        children: e.jsx("span", {
          className: Y.sale_text,
          children: "-30% "
        })
      })]
    })
  },
  G2 = ({
    setError: t,
    setRunParticle: n
  }) => {
    var ze;
    const s = _(),
      a = c(K => K.shop.activeProductCardId),
      i = c(K => K.shop.selectedCurrency),
      o = c(K => K.shop.amount),
      [r, l] = u.useState(p.idle),
      [d, m] = u.useState(!1),
      [h, g] = An(),
      b = (ze = c(K => K.shop.products[a]).prices.filter(K => K.currency_id === i)[0]) == null ? void 0 : ze.price,
      f = Ns();
    if (c(K => K.shop.selectedCurrency) === 1 || f === "") return null;
    const G = async K => {
      const _e = Le.beginCell().storeUint(0, 32).storeStringTail(K.txMemCode).endCell(),
        Ha = {
          validUntil: Math.floor(Date.now() / 1e3) + 600,
          messages: [{
            address: ua,
            amount: String(Le.toNano(K.strAmount)),
            payload: _e.toBoc().toString("base64")
          }]
        };
      await h.sendTransaction(Ha), n(!0), m(!0), l(p.fulfilled)
    }, q = async K => {
      const _e = new Ls.HttpProvider("https://toncenter.com/api/v2/jsonRPC"),
        hr = await new Ls.token.jetton.JettonMinter(_e, {
          address: ft[i]
        }).getJettonWalletAddress(new Ls.utils.Address(f)),
        gr = Le.Address.parse(f),
        _r = Le.Address.parse(ua),
        fr = Le.beginCell().storeUint(0, 32).storeStringTail(K.txMemCode).endCell(),
        xr = Le.beginCell().storeUint(260734629, 32).storeUint(0, 64).storeCoins(Le.toNano(K.strAmount)).storeAddress(_r).storeAddress(gr).storeBit(0).storeCoins(Le.toNano("0.01")).storeBit(1).storeRef(fr).endCell(),
        yr = {
          validUntil: Math.floor(Date.now() / 1e3) + 600,
          messages: [{
            address: hr.toString(!0, !0, !0),
            amount: "101000000",
            payload: xr.toBoc().toString("base64")
          }]
        };
      await h.sendTransaction(yr), n(!0), m(!0), l(p.fulfilled)
    };
    return b ? e.jsx("button", {
      className: Y.button,
      onPointerUp: async K => {
        if (K.stopPropagation(), t(!1), d) {
          s(Pa()), l(p.idle);
          return
        }
        if (r !== p.pending) {
          l(p.pending);
          try {
            const _e = await X.startShopTransaction({
              buyerWallet: f,
              currencyId: i,
              quantity: o,
              goodId: a
            });
            if (i === 2) await G(_e.data);
            else if (i === 3 || i === 5 || i === 6 || i === 7 || i === 8 || i === 9) await q(_e.data);
            else throw new Error("Wrong currency")
          } catch (_e) {
            console.warn(_e), t("Something went wrong"), l(p.rejected)
          }
        }
      },
      children: e.jsx(H2, {
        success: d
      })
    }) : e.jsx("div", {
      className: Y.not_available,
      children: "Not available"
    })
  },
  V2 = () => {
    const [t, n] = An(), s = Ns(), a = c(i => i.shop.selectedCurrency);
    return s !== "" || a === 1 ? null : e.jsx("button", {
      className: Y.button,
      onPointerUp: async i => {
        i.stopPropagation(), i.preventDefault(), setTimeout(() => {
          t.openModal()
        }, 20)
      },
      children: "Connect TON wallet"
    })
  },
  J2 = ({
    success: t
  }) => {
    const n = c(o => o.shop.activeProductCardId),
      s = c(o => o.shop.amount),
      a = c(o => o.shop.products[n]),
      i = !a.isOnePiece;
    return t ? e.jsx(ae.Fragment, {
      children: "You bought it!"
    }) : e.jsxs(ae.Fragment, {
      children: ["Buy for", e.jsx(N, {
        size: 18,
        className: Y.star_color,
        children: ""
      }), a.prices[0].price * (i ? s : 1)]
    })
  },
  Y2 = ({
    setError: t,
    setRunParticle: n
  }) => {
    const s = _(),
      a = c(g => g.shop.activeProductCardId),
      i = c(g => g.shop.products[a]),
      o = c(g => g.shop.amount),
      [r, l] = u.useState(p.idle),
      [d, m] = u.useState(!1);
    return c(g => g.shop.selectedCurrency) !== 1 ? null : e.jsx("div", {
      className: Y.button_container,
      onPointerUp: async g => {
        var b;
        if (g.stopPropagation(), d) {
          s(Pa()), l(p.idle);
          return
        }
        if (r === p.pending) return;
        l(p.pending);
        const I = i.isOnePiece ? 1 : o;
        try {
          const f = await X.buy({
            type: Number(a),
            qty: I
          });
          f.status === 200 && ((b = f == null ? void 0 : f.data) == null ? void 0 : b.ok) === !0 && window.Telegram.WebApp.openInvoice(f.data.result, j => {
            var q, ze;
            const G = Number(a);
            if (j === "paid") {
              if (G >= 9 && G <= 11) {
                const K = {
                  9: 1,
                  10: 2,
                  11: 3
                };
                s(zt({
                  product: 1,
                  amount: K[G]
                })), s(zt({
                  product: 2,
                  amount: K[G]
                })), s(zt({
                  product: 6,
                  amount: K[G]
                }))
              } else s(zt({
                product: a,
                amount: I
              }));
              m(!0), (ze = (q = window.Telegram.WebApp) == null ? void 0 : q.HapticFeedback) == null || ze.notificationOccurred("error"), n(!0)
            } else t("Error, try again.")
          })
        } catch {
          t("Error, try again."), l(p.rejected)
        }
        l(p.fulfilled)
      },
      children: e.jsx("button", {
        className: Y.button,
        children: e.jsx(J2, {
          success: d
        })
      })
    })
  },
  X2 = () => (c(nt) === ye, null),
  W2 = () => {
    const [t, n] = u.useState(null), [s, a] = u.useState(!1);
    return e.jsxs("div", {
      className: Y.crypto_button_container,
      children: [e.jsx(q2, {}), e.jsx(X2, {}), e.jsx(ao, {
        runParticle: s,
        setRunParticle: a
      }), t && e.jsx("div", {
        className: Y.error,
        children: " Failure. Something went wrong."
      }), e.jsx(G2, {
        setError: n,
        setRunParticle: a
      }), e.jsx(Y2, {
        setError: n,
        setRunParticle: a
      }), e.jsx(V2, {
        setError: n
      })]
    })
  },
  K2 = () => {
    _();
    const t = c(i => i.shop.activeProductCardId),
      n = c(i => i.shop.amount);
    return c(i => i.shop.products[t]).isOnePiece ? null : e.jsx("div", {
      className: Y.amount_selector_container,
      children: e.jsxs("div", {
        className: Y.amount_selector_count,
        children: ["× ", n]
      })
    })
  },
  Z2 = "_container_1rmx4_1",
  $2 = "_max_value_1rmx4_9",
  vi = {
    container: Z2,
    max_value: $2
  },
  Bn = t => t < 100 ? {
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

function wi(t, n) {
  return Math.round(t / n) * n
}
const eT = () => {
    const t = _(),
      n = c(f => f.shop.activeProductCardId),
      s = c(f => f.shop.amount),
      i = c(f => f.shop.products[n]).isOnePiece,
      [o, r] = u.useState([s]),
      [l, d] = u.useState(Bn(s).max),
      [m, h] = u.useState(Bn(s).step),
      g = l === 5e3 ? "5000" : `${l}+`,
      I = f => {
        const j = f[0];
        t(Ps(wi(j, m))), r([wi(j, m)])
      },
      b = f => {
        const j = f[0];
        j === l && (d(Bn(j).max), h(Bn(j).step))
      };
    return i ? null : e.jsxs("div", {
      className: vi.container,
      children: [e.jsx(vt.Range, {
        values: o,
        step: m,
        min: m,
        max: l,
        rtl: !1,
        onChange: I,
        onFinalChange: b,
        renderTrack: ({
          props: f,
          children: j
        }) => e.jsx("div", {
          onMouseDown: f.onMouseDown,
          onTouchStart: f.onTouchStart,
          style: {
            ...f.style,
            height: "36px",
            display: "flex",
            width: "100%"
          },
          children: e.jsx("div", {
            ref: f.ref,
            style: {
              height: "4px",
              borderRadius: "2px",
              width: "100%",
              background: vt.getTrackBackground({
                values: o,
                colors: ["var(--btn-primary-bg-color)", "var(--btn-header-bg-color)"],
                min: m,
                max: l,
                rtl: !1
              }),
              alignSelf: "center"
            },
            children: j
          })
        }),
        renderThumb: ({
          props: f,
          isDragged: j
        }) => u.createElement("div", {
          ...f,
          key: f.key,
          style: {
            ...f.style,
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
        className: vi.max_value,
        children: [" ", g]
      })]
    })
  },
  tT = () => e.jsxs("div", {
    className: Y.body,
    onPointerUp: t => {
      t.stopPropagation()
    },
    children: [e.jsx(Q2, {}), e.jsxs("div", {
      className: Y.content_container,
      children: [e.jsx(z2, {}), e.jsx(K2, {}), e.jsx(eT, {})]
    }), e.jsx(W2, {})]
  }),
  nT = () => {
    const t = c(n => n.shop.show);
    return Xe.createPortal(e.jsx(Qe, {
      show: t,
      children: e.jsxs("div", {
        className: Y.container,
        children: [e.jsx(O2, {}), e.jsx(tT, {})]
      })
    }), document.body)
  },
  sT = "_layout_9sf1k_1",
  aT = "_container_9sf1k_13",
  iT = "_header_9sf1k_20",
  oT = "_title_9sf1k_30",
  rT = "_body_9sf1k_35",
  cT = "_image_container_9sf1k_47",
  lT = "_image_9sf1k_47",
  dT = "_shake_9sf1k_1",
  uT = "_description_container_9sf1k_60",
  mT = "_buyer_info_9sf1k_70",
  AT = "_avatar_9sf1k_78",
  pT = "_name_9sf1k_84",
  hT = "_squad_info_9sf1k_88",
  gT = "_squad_avatar_9sf1k_94",
  _T = "_text_container_9sf1k_100",
  fT = "_text_9sf1k_100",
  xT = "_thanos_snap_container_9sf1k_110",
  yT = "_thanos_snap_text_9sf1k_119",
  vT = "_button_container_9sf1k_126",
  wT = "_button_9sf1k_126",
  me = {
    layout: sT,
    container: aT,
    header: iT,
    title: oT,
    body: rT,
    image_container: cT,
    image: lT,
    shake: dT,
    description_container: uT,
    buyer_info: mT,
    avatar: AT,
    name: pT,
    squad_info: hT,
    squad_avatar: gT,
    text_container: _T,
    text: fT,
    thanos_snap_container: xT,
    thanos_snap_text: yT,
    button_container: vT,
    button: wT
  },
  jT = `precision highp float;

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
  bT = `precision mediump float;

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
  ur = 7200,
  NT = 1;
let y = null,
  je = null,
  Dn = -1,
  ms = 0;
async function IT(t) {
  if (y = CT().getContext("webgl"), !y) {
    console.log("Your browser doesn't support WebGL :(");
    return
  }
  await PT(), TT(t)
}

function CT() {
  const t = document.createElement("canvas");
  return t.id = "canvasSnap", t.width = window.innerWidth, t.height = window.innerHeight, t.style.width = `${window.innerWidth}px`, t.style.height = `${window.innerHeight}px`, t.style.position = "fixed", t.style.top = "50%", t.style.left = "50%", t.style.zIndex = "1010", t.style.transform = "translate(-50%, -50%)", t.style.opacity = "0", t.style.transition = "2s ease opacity", document.body.appendChild(t), window.getComputedStyle(t).opacity, t.style.opacity = "1", t
}
async function PT() {
  y.enable(y.BLEND), y.blendFunc(y.SRC_ALPHA, y.ONE_MINUS_SRC_ALPHA), y.clearColor(0, 0, 0, 0), y.viewport(0, 0, y.canvas.width, y.canvas.height), je = await ST(y), y.useProgram(je)
}
async function ST(t, n, s) {
  const a = jT,
    i = bT,
    o = ji(t, a, t.VERTEX_SHADER),
    r = ji(t, i, t.FRAGMENT_SHADER),
    l = t.createProgram();
  return t.attachShader(l, o), t.attachShader(l, r), t.linkProgram(l), t.getProgramParameter(l, t.LINK_STATUS) || console.error("Shader program initialization failure:", t.getProgramInfoLog(l)), l
}

function ji(t, n, s) {
  const a = t.createShader(s);
  return t.shaderSource(a, n), t.compileShader(a), t.getShaderParameter(a, t.COMPILE_STATUS) ? a : (console.error("Shader compilation failure:", t.getShaderInfoLog(a)), t.deleteShader(a), null)
}
async function TT(t) {
  ET(), kT(t), mr(), document.getElementById("canvasHolder").style.opacity = "0", setTimeout(() => {
    const n = document.getElementById("canvasHolder");
    n.style.transition = "6s ease-in opacity", n.style.opacity = "1"
  }, 20), setTimeout(() => {
    document.getElementById("canvasHolder").style.transition = ""
  }, 7e3)
}

function ET(t) {
  const n = BT();
  var s = y.createTexture();
  y.bindTexture(y.TEXTURE_2D, s), y.texParameteri(y.TEXTURE_2D, y.TEXTURE_WRAP_S, y.CLAMP_TO_EDGE), y.texParameteri(y.TEXTURE_2D, y.TEXTURE_WRAP_T, y.CLAMP_TO_EDGE), y.texParameteri(y.TEXTURE_2D, y.TEXTURE_MIN_FILTER, y.NEAREST), y.texParameteri(y.TEXTURE_2D, y.TEXTURE_MAG_FILTER, y.NEAREST), y.texImage2D(y.TEXTURE_2D, 0, y.RGBA, y.RGBA, y.UNSIGNED_BYTE, n);
  const a = y.getUniformLocation(je, "u_Texture");
  y.uniform1i(a, 0)
}

function BT() {
  const t = new ImageData(T.width, T.height);
  return t.data.set(v.mainImage.imageData.slice(0)), t
}

function DT(t) {
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

function kT(t) {
  const {
    viewportWidth: n,
    viewportHeight: s,
    textureWidth: a,
    textureHeight: i,
    textureLeft: o,
    textureTop: r,
    min: l
  } = DT(t);
  ms = l * l, Ke(y, je, "u_AnimationDuration", ur), Ke(y, je, "u_ParticleSize", NT), Ke(y, je, "u_ViewportWidth", n), Ke(y, je, "u_ViewportHeight", s), Ke(y, je, "u_TextureWidth", a), Ke(y, je, "u_TextureHeight", i), Ke(y, je, "u_TextureLeft", o), Ke(y, je, "u_TextureTop", r);
  const d = new Array(ms);
  for (let g = 0; g < ms; g++) d[g] = g;
  const m = y.createBuffer();
  y.bindBuffer(y.ARRAY_BUFFER, m), y.bufferData(y.ARRAY_BUFFER, new Float32Array(d), y.STATIC_DRAW);
  const h = y.getAttribLocation(je, "a_ParticleIndex");
  y.enableVertexAttribArray(h), y.vertexAttribPointer(h, 1, y.FLOAT, !1, 0, 0)
}

function mr() {
  requestAnimationFrame(RT)
}

function RT(t) {
  y.clear(y.COLOR_BUFFER_BIT), Dn == -1 && (Dn = t);
  const s = t - Dn;
  if (s > ur) {
    Dn = -1, document.getElementById("canvasSnap").remove();
    return
  }
  Ke(y, je, "u_ElapsedTime", s), y.drawArrays(y.POINTS, 0, ms), mr()
}

function Ke(t, n, s, a) {
  const i = t.getUniformLocation(n, s);
  t.uniform1f(i, a)
}
const MT = () => {
    const t = Z(),
      n = _(),
      s = c(r => r.main.showPixanosEvent),
      a = c(r => r.main.pixanosEventData),
      i = c(Ct);
    if (!a) return null;
    const o = a.user.squad;
    return e.jsx(Qe, {
      show: s,
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
              src: Cs
            })
          }), e.jsxs("div", {
            className: me.description_container,
            children: [e.jsxs("div", {
              className: me.buyer_info,
              children: [e.jsx("img", {
                alt: "avatar",
                src: a.user.userPic && a.user.userPic !== "" ? a.user.userPic : pt,
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
                  src: o.logo && o.logo !== "" ? o.logo : Lt,
                  className: me.squad_avatar
                }), e.jsx(Nn, {
                  address: `${bt}?startapp=${btoa(`id=${o.squadId}`)}`,
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
          }), e.jsx("div", {
            className: me.button_container,
            children: e.jsx("button", {
              className: me.button,
              onPointerUp: async () => {
                var r, l;
                v.viewport.viewport.fit(), v.viewport.viewport.moveCenter(v.viewport.viewport.worldWidth / 2, v.viewport.viewport.worldHeight / 2), n(ai(!0)), setTimeout(() => {
                  n(ai(!1))
                }, 7e3);
                try {
                  await IT(i ? 0 : ac)
                } catch (d) {
                  document.getElementById("canvasHolder").style.opacity = "1", console.error(d, "cannot run pixanos")
                }
                t.push("/"), n(kp()), v.mainImage.pixanosRepaint(a.info.seed, T.width, a.info.percentage, a.info.color), (l = (r = window.Telegram.WebApp) == null ? void 0 : r.HapticFeedback) == null || l.notificationOccurred("error")
              },
              children: "Whoosh!"
            })
          })]
        })]
      })
    })
  },
  UT = () => {
    var o, r;
    const t = c(l => l.user.user),
      n = _(),
      s = c(l => l.main.showNoChargesPopup),
      a = c(l => l.main.settings);
    let i = `${mt}?startapp=f${((r=(o=window.Telegram.WebApp.initDataUnsafe)==null?void 0:o.user)==null?void 0:r.id)||""}`;
    return t && t.squad && t.squad.id !== null && (i += `_s${t.squad.id}`), e.jsx(Qe, {
      show: s,
      onPointerUp: () => n(ea()),
      children: e.jsxs("div", {
        className: D.container,
        onPointerUp: l => {
          l.stopPropagation()
        },
        children: [e.jsxs("div", {
          className: D.header,
          children: [e.jsx("div", {
            className: D.title,
            children: "Oops!"
          }), e.jsx("div", {
            className: D.close_container,
            onPointerUp: () => {
              n(ea())
            },
            children: e.jsx("div", {
              className: D.close,
              children: e.jsx(N, {
                size: 30,
                children: ""
              })
            })
          })]
        }), e.jsx("div", {
          className: D.body,
          children: e.jsxs("div", {
            className: D.content,
            children: [e.jsx("div", {
              className: D.image_container_charges,
              children: e.jsx("img", {
                alt: "image",
                className: D.image_charges,
                src: Zo
              })
            }), e.jsxs("div", {
              className: D.description_container,
              children: [e.jsx("span", {
                className: D.bold,
                children: "The energy is over!"
              }), e.jsxs("span", {
                className: D.center,
                children: ["Wait for the energy to recover.", e.jsx("br", {}), "Invite frens and get a bonus:"]
              })]
            }), e.jsxs("div", {
              className: D.benefits_container,
              children: [e.jsx("div", {}), e.jsxs("div", {
                className: D.benefits_item,
                children: ["No Premium:   ", " ", e.jsx("div", {
                  className: D.benefits_icon_container,
                  children: e.jsx(H, {
                    size: 16,
                    className: D.icon_invite
                  })
                }), a.InitialCoins]
              }), e.jsx("div", {}), " ", e.jsx("div", {}), e.jsxs("div", {
                className: D.benefits_item,
                children: ["Premium:   ", " ", e.jsx("div", {
                  className: D.benefits_icon_container,
                  children: e.jsx(H, {
                    size: 16,
                    className: D.icon_invite
                  })
                }), " ", a.RefRewardCoinsPremium]
              }), e.jsx("div", {})]
            })]
          })
        }), e.jsxs("div", {
          className: D.footer,
          children: [e.jsx(Tt, {
            url: i
          }), e.jsx("button", {
            className: D.button,
            onPointerUp: l => {
              l.stopPropagation(), window.Telegram.WebApp.openLink(`https://t.me/share/url?url=${i}`), n(ea())
            },
            children: "Share"
          })]
        })]
      })
    })
  },
  FT = () => Is().pathname === "/" ? null : e.jsx("div", {
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
  OT = "_layout_1f2lr_1",
  QT = "_item_1f2lr_19",
  zT = "_image_1f2lr_38",
  Ar = {
    layout: OT,
    item: QT,
    image: zT
  },
  qT = ({
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
    return u.useEffect(() => {
      const i = setTimeout(() => {
        n(Wa(t.id))
      }, 3e3);
      return () => {
        clearTimeout(i)
      }
    }, []), e.jsxs(on.div, {
      variants: s,
      initial: "hidden",
      animate: "enter",
      exit: "exit",
      transition: {
        duration: .3
      },
      className: Ar.item,
      onPointerUp: () => {
        n(Wa(t.id))
      },
      children: [e.jsx(N, {
        size: 20,
        children: a
      }), t.text]
    })
  },
  LT = () => {
    const t = c(n => n.toast.items);
    return Xe.createPortal(e.jsx("div", {
      className: Ar.layout,
      children: e.jsx(Ia, {
        children: t.map(n => e.jsx(qT, {
          item: n
        }, n.id))
      })
    }), document.body)
  },
  HT = "_layout_1nuac_1",
  GT = "_container_1nuac_19",
  VT = "_image_container_1nuac_30",
  JT = "_image_1nuac_30",
  YT = "_text_container_1nuac_42",
  XT = "_title_1nuac_49",
  WT = "_button_container_1nuac_55",
  KT = "_button_1nuac_55",
  ot = {
    layout: HT,
    container: GT,
    image_container: VT,
    image: JT,
    text_container: YT,
    title: XT,
    button_container: WT,
    button: KT
  },
  ZT = () => {
    const t = _();
    return c(s => s.main.showNoFlagsPopup) ? Xe.createPortal(e.jsx("div", {
      className: ot.layout,
      children: e.jsxs("div", {
        className: ot.container,
        children: [e.jsx("div", {
          className: ot.image_container,
          children: e.jsx("img", {
            alt: "img",
            className: ot.image,
            src: Os
          })
        }), e.jsxs("div", {
          className: ot.text_container,
          children: [e.jsx("div", {
            className: ot.title,
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
          className: ot.button_container,
          children: e.jsx("button", {
            className: ot.button,
            onPointerUp: () => {
              t(Fp(!1))
            },
            children: "That’s so wise!"
          })
        })]
      })
    }), document.body) : null
  },
  $T = ({
    isPopupContent: t = !0
  }) => {
    const n = t ? "Squad" : "My Squad",
      s = ht(t);
    return e.jsxs("div", {
      className: F(B.container, !t && B.page),
      children: [t && e.jsx(tr, {}), e.jsx("div", {
        children: e.jsx("span", {
          className: B.title,
          children: n
        })
      }), e.jsx(nr, {
        ...s
      }), e.jsx(sr, {
        ...s
      }), e.jsx(ar, {
        ...s
      }), e.jsx(ir, {
        ...s
      }), e.jsx(or, {
        ...s
      })]
    })
  },
  eE = () => {
    const t = _(),
      {
        item: n
      } = ht(),
      s = !0;
    return e.jsx(Qe, {
      show: n.dataSource !== null,
      onPointerUp: a => {
        a.stopPropagation(), t(vo())
      },
      children: e.jsxs("div", {
        className: er.layout,
        onPointerUp: a => {
          a.stopPropagation()
        },
        children: [n.dataSource === Fe.userFromPixelInfo && e.jsx(ja, {
          isPopupContent: s
        }), n.dataSource === Fe.userFromRating && e.jsx(ja, {
          isPopupContent: s
        }), n.dataSource === Fe.squadFromData && e.jsx($T, {})]
      })
    })
  },
  tE = "_overlay_1vl8z_1",
  nE = "_top_container_1vl8z_10",
  sE = "_bottom_container_1vl8z_15",
  aE = "_side_menu_1vl8z_20",
  iE = "_menu_safe_area_inset_1vl8z_36",
  oE = "_menu_header_1vl8z_40",
  rE = "_close_button_1vl8z_53",
  cE = "_menu_list_1vl8z_58",
  lE = "_icon_1vl8z_79",
  dE = "_icon_not_pixel_1vl8z_87",
  uE = "_gold_pixel_1vl8z_97",
  mE = "_menu_list_li_1vl8z_103",
  AE = "_menu_list_text_1vl8z_109",
  pE = "_menu_list_new_item_1vl8z_113",
  hE = "_button_wrapper_1vl8z_136",
  gE = "_button_content_1vl8z_145",
  _E = "_footer_1vl8z_152",
  fE = "_avatar_1vl8z_158",
  xE = "_ratings_image_container_1vl8z_165",
  yE = "_ratings_image_1vl8z_165",
  J = {
    overlay: tE,
    top_container: nE,
    bottom_container: sE,
    side_menu: aE,
    menu_safe_area_inset: iE,
    menu_header: oE,
    close_button: rE,
    menu_list: cE,
    icon: lE,
    icon_not_pixel: dE,
    gold_pixel: uE,
    menu_list_li: mE,
    menu_list_text: AE,
    menu_list_new_item: pE,
    button_wrapper: hE,
    button_content: gE,
    footer: _E,
    avatar: fE,
    ratings_image_container: xE,
    ratings_image: yE
  },
  bi = [.215, .61, .355, 1],
  vE = {
    hidden: {
      x: "-100%",
      transition: {
        type: "tween",
        duration: .25,
        ease: bi
      }
    },
    visible: {
      x: 0,
      transition: {
        type: "tween",
        duration: .25,
        ease: bi
      }
    }
  },
  wE = "_button_25266_1",
  jE = "_decor_25266_13",
  bE = "_dark_25266_22",
  Ni = {
    button: wE,
    decor: jE,
    dark: bE
  },
  Ii = ({
    children: t,
    variant: n = "dark",
    onPointerUp: s = () => {},
    style: a = {},
    className: i = void 0
  }) => e.jsx("button", {
    onPointerUp: s,
    className: F(Ni.button, Ni[n], i),
    style: a,
    children: t
  }),
  NE = "_layout_4kkfr_1",
  IE = "_line_4kkfr_14",
  CE = "_button_4kkfr_19",
  Ot = {
    layout: NE,
    line: IE,
    button: CE
  },
  PE = ({
    className: t = void 0
  }) => {
    const n = _(),
      s = Z();
    return e.jsx("div", {
      className: F(Ot.layout, t),
      children: e.jsxs("div", {
        className: Ot.line,
        children: [e.jsx("div", {
          className: Ot.button,
          onPointerUp: () => {
            n(jt(!1)), s.push("/rules")
          },
          children: "Rules"
        }), e.jsx("div", {
          className: Ot.button,
          onPointerUp: () => {
            ue(Ti)
          },
          children: "Support"
        }), e.jsx("div", {
          className: Ot.button,
          onPointerUp: () => {
            n(jt(!1)), s.push("/terms")
          },
          children: "Terms"
        }), e.jsx("div", {
          className: Ot.button,
          onPointerUp: () => {
            n(jt(!1)), s.push("/privacy")
          },
          children: "Privacy"
        })]
      })
    })
  },
  SE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAABtQTFRFR3BM////////////////////////////////Fv0dDgAAAAh0Uk5TABU6XISq0+/2d3cmAAABKElEQVR42u3Z24rDMAxFUV1s6fz/Fw+FlA4lpGOj2Ew566kPKWxEQ2NFiIiIiIiIiIiI6L/RFrgQTeVWGvggbikwPwQ+Cj+YVLHAlChKcExzKaCJaak1A9g7gg7M61UBfSDmeS0DGMAABlQFNACI8YAAgPYNAY6H8YCyPyPDg40FvL5WAA9tNKAdg6u6DVLHAjSPjwX8NYKGa+9XuhQ+k41NAMfYSjRMalIkMCWkiiUmpMneAltwJlx5RlTz1hJ/kK25qdxCvQcuRfetB/RQuZ1l1Q+/viBNZGdBmiyiHSe6yjqeeJMua3ngl3BZT70nAOTsrV95ZmDADvbcW8bEUrJ+eRmLE7xgI1e9vExdO4C9I+g40WUdnNoewPdJREREREREREREU34Aqms7WGCxI2EAAAAASUVORK5CYII=",
  TE = "_layout_eiymv_1",
  EE = "_container_eiymv_7",
  Ci = {
    layout: TE,
    container: EE
  },
  BE = () => localStorage.getItem("canvasFps") ? [Number(localStorage.getItem("canvasFps"))] : [60],
  DE = () => {
    const [t, n] = ae.useState(BE());
    return u.useEffect(() => {
      localStorage.setItem("canvasFps", String(t[0])), v.ticker.setFps(t[0])
    }, [t]), e.jsx("div", {
      className: Ci.layout,
      children: e.jsxs("div", {
        className: Ci.container,
        children: [e.jsx(vt.Range, {
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
        }), e.jsxs("div", {
          children: ["Fps: ", t]
        })]
      })
    })
  },
  kE = () => {
    const t = Z(),
      n = _();
    c(be);
    const s = Ns(),
      [a, i] = An();
    c(ld);
    const o = c(Io),
      r = c(Ct),
      l = () => {
        n(jt(!1))
      },
      d = h => {
        n(jt(!1)), t.push(h)
      },
      m = () => {
        const h = `${window.location.origin}/stars?initData=${btoa(window.Telegram.WebApp.initData)}`;
        Ht(h)
      };
    return e.jsx(e.Fragment, {
      children: e.jsx(Ia, {
        children: o && e.jsxs(e.Fragment, {
          children: [e.jsx(on.div, {
            className: J.overlay,
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
          }), e.jsxs(on.nav, {
            className: J.side_menu,
            initial: "hidden",
            animate: "visible",
            exit: "hidden",
            variants: vE,
            children: [e.jsxs("div", {
              className: J.top_container,
              children: [e.jsx("div", {
                className: J.menu_safe_area_inset
              }), e.jsxs("ul", {
                className: J.menu_list,
                children: [!r && e.jsxs("li", {
                  className: J.menu_list_li,
                  onPointerUp: () => d("/"),
                  children: [e.jsx("div", {
                    className: J.icon,
                    children: e.jsx(N, {
                      size: 24,
                      children: ""
                    })
                  }), e.jsx("span", {
                    className: J.menu_list_text,
                    children: "Canvas"
                  })]
                }), e.jsxs("li", {
                  className: J.menu_list_li,
                  onPointerUp: () => d("/tournament"),
                  children: [e.jsx("div", {
                    className: J.icon_not_pixel,
                    children: e.jsx("img", {
                      alt: "image",
                      className: J.gold_pixel,
                      src: Ko
                    })
                  }), e.jsx("span", {
                    className: J.menu_list_text,
                    children: "Telegram Battle"
                  }), e.jsx("span", {
                    className: J.menu_list_new_item,
                    children: "new"
                  })]
                }), e.jsxs("li", {
                  className: J.menu_list_li,
                  onPointerUp: () => d("/ratings"),
                  children: [e.jsx("div", {
                    className: J.ratings_image_container,
                    children: e.jsx("img", {
                      alt: "noavatar",
                      className: J.ratings_image,
                      src: SE
                    })
                  }), e.jsx("span", {
                    className: J.menu_list_text,
                    children: "Ratings"
                  })]
                }), e.jsxs("li", {
                  className: J.menu_list_li,
                  onPointerUp: () => d("/secrets"),
                  children: [e.jsx("div", {
                    className: J.icon,
                    children: e.jsx(N, {
                      size: 24,
                      children: ""
                    })
                  }), e.jsx("span", {
                    className: J.menu_list_text,
                    children: "Secrets"
                  })]
                }), e.jsxs("li", {
                  className: J.menu_list_li,
                  onPointerUp: () => d("/daily"),
                  children: [e.jsx("div", {
                    className: J.icon,
                    children: e.jsx(N, {
                      size: 24,
                      children: ""
                    })
                  }), e.jsx("span", {
                    className: J.menu_list_text,
                    children: "Daily tasks"
                  })]
                }), e.jsxs("li", {
                  className: J.menu_list_li,
                  onPointerUp: () => d("/history"),
                  children: [e.jsx("div", {
                    className: J.icon,
                    children: e.jsx(N, {
                      size: 24,
                      children: ""
                    })
                  }), e.jsx("span", {
                    className: J.menu_list_text,
                    children: "My History"
                  })]
                })]
              })]
            }), e.jsxs("div", {
              className: J.bottom_container,
              children: [e.jsx(DE, {}), e.jsxs("div", {
                className: J.button_wrapper,
                children: [s !== "" && e.jsx(Ii, {
                  onPointerUp: () => {
                    a.disconnect()
                  },
                  variant: "dark",
                  style: {
                    width: "90%"
                  },
                  children: e.jsxs("div", {
                    className: J.button_content,
                    children: [e.jsx("span", {
                      children: "Disconnect TON"
                    }), e.jsx(N, {
                      size: 20,
                      style: {
                        fontWeight: 400
                      },
                      children: ""
                    })]
                  })
                }), e.jsx(Ii, {
                  onPointerUp: m,
                  variant: "dark",
                  style: {
                    width: "90%"
                  },
                  children: e.jsxs("div", {
                    className: J.button_content,
                    children: [e.jsx("span", {
                      children: "Desktop version"
                    }), e.jsx(N, {
                      size: 20,
                      style: {
                        fontWeight: 400
                      },
                      children: ""
                    })]
                  })
                })]
              }), e.jsx(PE, {})]
            })]
          })]
        })
      })
    })
  },
  RE = "_layout_1at34_1",
  ME = "_container_1at34_10",
  UE = "_item_1at34_14",
  la = {
    layout: RE,
    container: ME,
    item: UE
  },
  FE = 8,
  OE = 16,
  QE = 500,
  pr = 800,
  Pi = window.innerWidth,
  Si = 100,
  zE = () => Array.from(Array(100)).map(() => {
    const t = U(FE, OE),
      n = `hsl(${U(0,360)} , 70%, 50%)`,
      s = U(QE, pr),
      a = U(-Pi, Pi),
      i = U(-Si, Si);
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
u.memo(({
  runParticle: t,
  setRunParticle: n
}) => {
  const [s, a] = u.useState(zE()), [i, o] = u.useState(!1);
  return u.useEffect(() => {
    t && setTimeout(() => {
      o(!0), setTimeout(() => {
        n(!1), o(!1)
      }, pr)
    }, 200)
  }, [t]), e.jsx("div", {
    className: la.layout,
    style: {
      visibility: t ? "visible" : "hidden"
    },
    children: e.jsx("div", {
      className: la.container,
      children: s.map((r, l) => e.jsx("div", {
        className: la.item,
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
const qE = "_container_gb8eq_1",
  LE = "_header_gb8eq_11",
  HE = "_title_gb8eq_17",
  GE = "_close_container_gb8eq_23",
  VE = "_close_gb8eq_23",
  JE = "_body_gb8eq_47",
  YE = "_content_gb8eq_59",
  XE = "_time_left_container_gb8eq_65",
  WE = "_timer_gb8eq_69",
  KE = "_image_container_gb8eq_73",
  ZE = "_image_gb8eq_73",
  $E = "_glow_container_gb8eq_91",
  eB = "_glow_gb8eq_91",
  tB = "_rotate_gb8eq_1",
  nB = "_glow_reverse_gb8eq_107",
  sB = "_description_container_gb8eq_113",
  aB = "_bold_gb8eq_123",
  iB = "_gray_gb8eq_128",
  oB = "_center_gb8eq_132",
  rB = "_gold_gb8eq_136",
  cB = "_button_gb8eq_144",
  fe = {
    container: qE,
    header: LE,
    title: HE,
    close_container: GE,
    close: VE,
    body: JE,
    content: YE,
    time_left_container: XE,
    timer: WE,
    image_container: KE,
    image: ZE,
    glow_container: $E,
    glow: eB,
    rotate: tB,
    glow_reverse: nB,
    description_container: sB,
    bold: aB,
    gray: iB,
    center: oB,
    gold: rB,
    button: cB
  },
  lB = "/assets/cup_glad-DGT2PBmm.png",
  dB = () => {
    const t = Z(),
      n = c(be),
      [s, a] = u.useState(!1),
      i = "showCreateTournamentTemplatePopup";
    return u.useEffect(() => (Vi() && (localStorage.getItem(i) || a(!0)), () => {}), [n]), e.jsx(Qe, {
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
                children: e.jsx(N, {
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
                  src: cr
                })
              }), e.jsx("div", {
                className: fe.glow_container,
                children: e.jsx("img", {
                  alt: "image",
                  className: fe.glow_reverse,
                  src: lr
                })
              }), e.jsx("img", {
                alt: "image",
                className: fe.image,
                src: lB
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
  uB = "_layout_xga4i_1",
  mB = "_container_xga4i_14",
  AB = "_header_xga4i_20",
  pB = "_close_xga4i_25",
  hB = "_body_xga4i_38",
  gB = "_image_container_xga4i_42",
  _B = "_image_xga4i_42",
  fB = "_glow_xga4i_55",
  xB = "_forward_xga4i_62",
  yB = "_rotate_xga4i_1",
  vB = "_reverse_xga4i_66",
  wB = "_text_container_xga4i_70",
  jB = "_title_xga4i_78",
  bB = "_description_xga4i_82",
  NB = "_footer_xga4i_86",
  IB = "_button_xga4i_90",
  xe = {
    layout: uB,
    container: mB,
    header: AB,
    close: pB,
    body: hB,
    image_container: gB,
    image: _B,
    glow: fB,
    forward: xB,
    rotate: yB,
    reverse: vB,
    text_container: wB,
    title: jB,
    description: bB,
    footer: NB,
    button: IB
  },
  CB = "_layout_a9x11_1",
  PB = "_container_a9x11_10",
  SB = "_star_a9x11_14",
  TB = "_move_a9x11_1",
  da = {
    layout: CB,
    container: PB,
    star: SB,
    move: TB
  },
  EB = u.memo(() => {
    const t = Array.from(Array(30));
    return e.jsx("div", {
      className: da.layout,
      children: e.jsx("div", {
        className: da.container,
        children: t.map((n, s) => {
          const a = U(4, 14);
          return e.jsx(N, {
            size: a,
            className: da.star,
            style: {
              animationDelay: `-${s*300}ms`,
              transform: `translate(${U(-80,-170)*(s%2===1?1:-1)}px, ${U(-100,100)}px)`
            },
            children: ""
          }, s)
        })
      })
    })
  }, () => !1),
  BB = () => {
    const t = _(),
      [n, s] = u.useState(null),
      a = c(be);
    c(m => m.reward.id);
    const i = c(m => m.reward.rewardUserId),
      o = c(m => m.reward.showPopup),
      [r, l] = u.useState(!1),
      d = async () => {
        if (r && (t(dg()), t(Ag()), n && n.good_id)) {
          const m = await X.claimRewardById({
            rewardId: i,
            userId: a.id
          });
          (m.status === 200 || m.status === 204) && t(zt({
            product: n.good_id,
            amount: 1
          }))
        }
      };
    return u.useEffect(() => {
      const m = setTimeout(() => {
        l(!0)
      }, 1e3);
      return () => {
        clearTimeout(m)
      }
    }, []), u.useEffect(() => (i && (async () => {
      const h = await X.getRewardById({
        rewardId: i
      });
      if (h.status === 200) {
        const g = h.data;
        s(g.reward)
      }
    })(), () => {}), [i]), e.jsx(Qe, {
      show: o,
      onPointerUp: d,
      children: e.jsx("div", {
        className: xe.layout,
        onPointerUp: m => {
          m.stopPropagation()
        },
        children: e.jsxs("div", {
          className: xe.container,
          children: [e.jsx("div", {
            className: xe.header,
            children: e.jsx("div", {
              className: xe.close,
              onPointerUp: d,
              children: e.jsx(N, {
                size: 24,
                children: ""
              })
            })
          }), e.jsxs("div", {
            className: xe.body,
            children: [e.jsxs("div", {
              className: xe.image_container,
              children: [e.jsx(EB, {}), e.jsx("img", {
                alt: "glow",
                src: ya,
                className: F(xe.glow, xe.forward)
              }), e.jsx("img", {
                alt: "glow",
                src: ya,
                className: F(xe.glow, xe.reverse)
              }), e.jsx("img", {
                alt: "img",
                src: n ? n.image_url : "",
                className: xe.image
              })]
            }), e.jsxs("div", {
              className: xe.text_container,
              children: [e.jsx("div", {
                className: xe.title,
                children: n ? n.name : "Loading..."
              }), e.jsx("div", {
                className: xe.description,
                children: n ? n.description : "Loading..."
              })]
            })]
          }), e.jsx("div", {
            className: xe.footer,
            children: e.jsx("button", {
              className: xe.button,
              onPointerUp: m => {
                m.stopPropagation(), d()
              },
              children: "Claim"
            })
          })]
        })
      })
    })
  };
window.Telegram.WebApp.DeviceOrientation;
const DB = "_layout_1tvc9_1",
  kB = "_container_1tvc9_5",
  RB = "_close_button_1tvc9_14",
  MB = "_title_container_1tvc9_22",
  UB = "_image_container_1tvc9_28",
  FB = "_image_1tvc9_28",
  OB = "_text_container_1tvc9_47",
  QB = "_button_container_1tvc9_52",
  We = {
    layout: DB,
    container: kB,
    close_button: RB,
    title_container: MB,
    image_container: UB,
    image: FB,
    text_container: OB,
    button_container: QB
  },
  zB = () => {
    const t = c(i => i.main.startParams),
      [n, s] = u.useState(null),
      a = () => {
        s(null)
      };
    return u.useEffect(() => {
      if (t.showTemplate && t.refId) try {
        (async () => {
          const o = await Re.getTournamentTemplateById({
            id: t.refId
          });
          if (o.status === 200 && o.data && o.data.approved) {
            const r = o.data;
            s(r)
          }
        })()
      } catch {}
    }, [t]), e.jsx(Qe, {
      show: n,
      onPointerUp: a,
      children: e.jsx("div", {
        className: We.layout,
        onPointerUp: i => {
          i.stopPropagation()
        },
        children: e.jsxs("div", {
          className: We.container,
          children: [e.jsx("div", {
            className: We.close_button,
            onPointerUp: a,
            children: e.jsx(N, {
              size: 26,
              children: ""
            })
          }), e.jsx("div", {
            className: We.title_container,
            children: e.jsx("span", {
              children: "Friend's template invitation"
            })
          }), e.jsx("div", {
            className: We.image_container,
            children: e.jsx("img", {
              alt: "img",
              className: `${We.image} ${We.first_image}`,
              src: n ? n.url : ""
            })
          }), e.jsx("div", {
            className: We.text_container,
            children: e.jsx("span", {
              children: "Your friend has a template in tournament. Ready to team up?"
            })
          }), e.jsx("div", {
            className: We.button_container,
            children: e.jsx(dr, {
              template: n,
              style: {
                height: 50
              },
              onPointerUp: a
            })
          })]
        })
      })
    })
  },
  qB = () => e.jsxs("div", {
    className: nn.layout,
    children: [e.jsx(QS, {}), e.jsx(MS, {}), e.jsx(c_, {}), e.jsx(aS, {}), e.jsx(US, {}), e.jsx(FT, {}), e.jsx(ZT, {}), e.jsx(eE, {}), e.jsx(d2, {}), e.jsx(UT, {}), e.jsx(dB, {}), e.jsx(BB, {}), e.jsx(zB, {}), e.jsx(nT, {}), e.jsx(MT, {}), e.jsx(LT, {}), e.jsx(kE, {})]
  }),
  LB = () => {
    const t = _(),
      n = c(a => a.main.startAppTs),
      s = c(be);
    return u.useEffect(() => {
      if (s && (s.id === 555832576 || s.id === 2096307477)) return;
      const a = setInterval(() => {
        Date.now() - n > 30 * 60 * 1e3 && (t(Ep()), clearInterval(a))
      }, 100);
      return () => {
        clearInterval(a)
      }
    }, [n, s]), null
  },
  HB = () => {
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
          isTMA: Ye.isDev,
          authData: Ye.devUserInitData
        }
      },
      a = r => {
        try {
          return JSON.parse(decodeURIComponent(r).split("&")[0].replace("user=", "")).language_code || "en"
        } catch (l) {
          return console.log("cant parse language code", l), "en"
        }
      };
    u.useEffect(() => {
      const {
        isTMA: r,
        authData: l
      } = s();
      if (t(Nh(r)), l) {
        const d = a(l);
        t(sd(d)), t(Ch(l))
      }
    }, [t])
  },
  GB = () => (u.useEffect(() => {
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
  VB = "_layout_ieygs_1",
  JB = "_container_ieygs_8",
  YB = "_logo_container_ieygs_17",
  XB = "_logo_ieygs_17",
  WB = "_animate_ieygs_1",
  KB = "_center_ieygs_37",
  ZB = "_title_ieygs_51",
  $B = "_description_ieygs_58",
  eD = "_button_container_ieygs_63",
  tD = "_button_ieygs_63",
  nD = "_b_ieygs_63",
  _t = {
    layout: VB,
    container: JB,
    logo_container: YB,
    logo: XB,
    animate: WB,
    center: KB,
    title: ZB,
    description: $B,
    button_container: eD,
    button: tD,
    b: nD
  },
  sD = () => {
    const t = c(bo);
    return e.jsx("div", {
      className: _t.layout,
      children: e.jsxs("div", {
        className: _t.container,
        children: [e.jsx("div", {
          className: _t.logo_container,
          children: e.jsx("div", {
            className: _t.logo,
            children: e.jsx("div", {
              className: _t.center
            })
          })
        }), e.jsx("div", {
          className: _t.button_container,
          children: e.jsx("button", {
            className: _t.button,
            onPointerUp: () => {
              t ? ue("https://t.me/notpixel_channel") : Ht("https://t.me/notpixel_channel")
            },
            children: "Not Pixel Channel"
          })
        })]
      })
    })
  },
  aD = "/assets/loading-D8SQALTR.gif",
  iD = () => e.jsxs("div", {
    className: nn.loading_container,
    children: [e.jsx("div", {
      className: nn.image_container,
      children: e.jsx("img", {
        alt: "img",
        src: aD,
        className: nn.image
      })
    }), e.jsx("div", {
      className: nn.text,
      children: "Preparing pixels..."
    })]
  }),
  oD = () => {
    const t = _();
    u.useEffect(() => {
      const n = (s, a) => {
        Vt.get(s, (i, o) => {
          if (i === null && o !== "") try {
            const r = JSON.parse(o);
            a(r)
          } catch (r) {
            console.error(`Ошибка парсинга данных ${s}:`, r)
          } else i !== null && console.error(`Ошибка при получении данных ${s}:`, i)
        })
      };
      n("colors", s => {
        Array.isArray(s) && s.length > 0 ? (t(bp(s)), t(Da(s[0]))) : console.warn("Полученные данные цветов не являются непустым массивом")
      }), n("boosts", s => {
        t(tu(s))
      })
    }, [t])
  },
  rD = () => {
    const t = _(),
      n = c(h => h.main.startParams),
      s = async () => {
        try {
          const g = (await t(Nt.getUser())).payload.data;
          if (g.error) throw new Error(g.error);
          return t(Ih(!0)), g
        } catch (h) {
          return console.error("Ошибка при получении данных пользователя:", h), !1
        }
      }, a = async () => {
        try {
          await t(Ne.info()).unwrap()
        } catch (h) {
          console.error("Ошибка получения информации о майнинге:", h)
        }
      }, i = async h => {
        try {
          const g = await t(Je.getReferredTemplate()).unwrap();
          await v.mainImage.worldTemplate.add({
            ...g,
            url: `${g.url}?time=${Date.now()}`,
            type: ge.referred
          })
        } catch (g) {
          console.error("Ошибка получения подключенного трафарета:", g)
        }
      }, o = async h => {
        try {
          const g = await t(Je.getTemplateById({
            id: h
          }));
          if (g.payload && g.payload.id !== 0) {
            const I = {
              ...g.payload,
              url: `${g.payload.url}?time=${Date.now()}`,
              type: ge.my
            };
            t(Ro(I)), await v.mainImage.worldTemplate.add(I)
          }
        } catch (g) {
          console.error("Ошибка получения подключенного трафарета:", g)
        }
      }, r = async h => {
        if (!Fo(h)) return Promise.resolve();
        try {
          t(Us.getMyTemplate({
            id: h.id
          }))
        } catch (g) {
          console.error("Ошибка получения турнирного трафарета:", g)
        }
      }, l = async () => {
        try {
          await t(Je.getWorldTemplate())
        } catch (h) {
          console.error("Ошибка получения подключенного трафарета:", h)
        }
      }, d = () => {
        n.squadId && t(ga(n.squadId))
      }, m = async () => {
        const [h] = await Promise.all([s()]);
        h && (await Promise.all([a(), i(h.templateId), o(h.id), l(), r(h)]), d())
      };
    u.useEffect(() => {
      m()
    }, [t])
  },
  cD = () => {
    const t = Z();
    u.useEffect(() => {
      Vi() ? localStorage.getItem("skipIntro") || (t.push("/welcome"), localStorage.setItem("skipIntro", "true")) : Vt.get("skipIntro", (n, s) => {
        n === null && s !== "" || (n !== null && console.error("Ошибка при получении skipIntro:", n), t.push("/welcome"))
      })
    }, [t])
  },
  ba = t => {
    let n = "unknown",
      s = "unknown";
    return /android/i.test(t) ? (n = "mobile", s = "android") : /iPad|iPhone|iPod/.test(t) ? (n = "mobile", s = "ios") : /Windows NT/i.test(t) ? (n = "desktop", s = "windows") : /Macintosh/i.test(t) ? (n = "desktop", s = "macos") : (n = "unknown", s = "unknown"), {
      deviceType: n,
      os: s
    }
  },
  lD = t => {
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
          o = ba(i);
        n = o.deviceType, s = o.os;
        break
    }
    return {
      deviceType: n,
      os: s
    }
  },
  dD = () => {
    const t = _(),
      n = c(s => s.auth.authData);
    u.useEffect(() => {
      var o, r;
      let s = "unknown",
        a = "unknown",
        i = "unknown";
      if (n && n !== "")
        if ((r = (o = window == null ? void 0 : window.Telegram) == null ? void 0 : o.WebApp) != null && r.platform) {
          s = window.Telegram.WebApp.platform;
          const l = lD(s);
          a = l.deviceType, i = l.os
        } else {
          const l = navigator.userAgent,
            d = ba(l);
          a = d.deviceType, i = d.os
        }
      else {
        const l = navigator.userAgent,
          d = ba(l);
        a = d.deviceType, i = d.os
      }
      t(rl({
        deviceType: a,
        os: i,
        platform: s
      }))
    }, [t, n])
  },
  uD = () => {
    const t = _(),
      {
        t: n,
        i18n: s
      } = Be(),
      a = c(i => i.user.languageCode);
    u.useEffect(() => {
      s.changeLanguage(a)
    }, [t, a])
  },
  mD = () => {
    const t = _(),
      n = c(a => a.shop.selectedCurrency),
      s = c(nt);
    u.useEffect(() => {
      s === ye && n === 1 && t(rn(2)), s !== ye && t(rn(1))
    }, [s])
  },
  AD = () => {
    const t = _(),
      n = window.Telegram.WebApp,
      s = c(Ct);
    return u.useEffect(() => {
      function a() {
        console.log("is fullscreen: ", this.isFullscreen), t(cl(this.isFullscreen))
      }
      return n.onEvent("fullscreenChanged", a), () => {
        n.offEvent("fullscreenChanged", a)
      }
    }, [t]), u.useEffect(() => {
      if (v) {
        const a = window.innerWidth,
          i = window.innerHeight;
        v.app.renderer.resize(a, i), v.viewport.viewport.resize(a, i)
      }
    }, [s]), null
  },
  pD = ({
    children: t
  }) => {
    AD(), LB(), HB(), dD(), uD(), mD();
    const n = c(l => l.main.timeLimit),
      s = c(l => l.user.getUserFetchStatus),
      a = s === p.rejected && !Ye.app.disableBetaError,
      i = s === p.pending || s === p.idle,
      o = n;
    return window.Telegram && !window.Telegram.WebApp.isVersionAtLeast(cc) && GB(), oD(), rD(), cD(), a || o ? e.jsx(sD, {}) : i ? e.jsx(iD, {}) : e.jsx(e.Fragment, {
      children: t
    })
  };

function hD() {
  return e.jsx(pD, {
    children: e.jsx(qB, {})
  })
}
const gD = {
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
  _D = {
    translation: gD
  },
  fD = {
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
  xD = {
    translation: fD
  };
Ur.use(Rr).init({
  resources: {
    en: _D,
    ru: xD
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
i_(jn);
uc(jn);
Cp(jn);
const yD = jr.createRoot(document.getElementById("root"));
yD.render(e.jsx(ae.StrictMode, {
  children: e.jsx(Cr, {
    store: jn,
    children: e.jsx(Mr, {
      children: e.jsx(Tr, {
        manifestUrl: "https://app.notpx.app/tonconnect-manifest.json",
        actionsConfiguration: {
          returnStrategy: "back",
          twaReturnUrl: "https://t.me/notpixel/app",
          modals: ["before"],
          notifications: ["before", "success", "error"]
        },
        language: "en",
        uiPreferences: {
          theme: Er.DARK
        },
        children: e.jsx(hD, {})
      })
    })
  })
}));