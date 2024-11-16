< !DOCTYPE html >
  <
  html lang = "en" >
  <
  head >
  <
  meta charset = "utf-8" / >
  <
  meta name = "viewport"
content = "user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi" / >
  <
  meta name = "theme-color"
content = "#1e2732" >
  <
  meta name = "msapplication-TileColor"
content = "#161e27" >
  <
  meta name = "apple-mobile-web-app-title"
content = "Not Pixel" >
  <
  meta name = "application-name"
content = "Not Pixel" >
  <
  meta property = "og:site_name"
content = "Not Pixel" >
  <
  meta property = "og:title"
content = "Paint pixels and get Not Pixels!" >
  <
  meta property = "og:description"
content = "Pixel Battle based on Telegram and TON blockchain." >
  <
  meta property = "og:url"
content = "https://app.notpx.app/" / >
  <
  meta property = "og:image"
content = "https://app.notpx.app/notpixel.png" >
  <
  link rel = "icon"
href = "https://app.notpx.app/favicon.ico" / >
  <
  link rel = "apple-touch-icon"
sizes = "180x180"
href = "https://app.notpx.app/apple-touch-icon.png" >
  <
  link rel = "icon"
type = "image/png"
sizes = "32x32"
href = "https://app.notpx.app/favicon-32x32.png" >
  <
  link rel = "icon"
type = "image/png"
sizes = "16x16"
href = "https://app.notpx.app/favicon-16x16.png" >
  <
  link rel = "manifest"
href = "https://app.notpx.app/site.webmanifest" >
  <
  link rel = "mask-icon"
href = "https://app.notpx.app/safari-pinned-tab.svg"
color = "#161e27" >
  <
  title > Not Pixel < /title> <
  script src = "https://telegram.org/js/telegram-web-app.js" > < /script> <
  script src = "https://tganalytics.xyz/index.js"
type = "text/javascript" > < /script> <
  script >
  window.Telegram.WebApp.expand();
window.Telegram.WebApp.headerColor = "#171f2a";
if (window.Telegram.WebApp.isVersionAtLeast("7.7")) {
  window.Telegram.WebApp.disableVerticalSwipes();
} <
/script> <
script src = "./pixi.min.js" > < /script> <
  script src = "./viewport.min.js" > < /script> <
  script defer data - domain = "notpx.app"
src = "https://plausible.joincommunity.xyz/js/script.js" > < /script> <
  !-- < script src = "https://sad.adsgram.ai/js/sad.min.js" > < /script>--> <
  script type = "module"
crossorigin src = "/assets/index-D2JmPGMg.js" > < /script> <
  link rel = "modulepreload"
crossorigin href = "/assets/vite-plugin-node-polyfills-BVIVvkCX.js" >
  <
  link rel = "modulepreload"
crossorigin href = "/assets/events-bk97flgb.js" >
  <
  link rel = "modulepreload"
crossorigin href = "/assets/yallist-Ce8uAuvz.js" >
  <
  link rel = "modulepreload"
crossorigin href = "/assets/lru-cache-3TXFCret.js" >
  <
  link rel = "modulepreload"
crossorigin href = "/assets/semver-Og4YvWUh.js" >
  <
  link rel = "modulepreload"
crossorigin href = "/assets/rxjs-D-QMI6lw.js" >
  <
  link rel = "modulepreload"
crossorigin href = "/assets/@ledgerhq-BW4RAlPi.js" >
  <
  link rel = "modulepreload"
crossorigin href = "/assets/react-DjWS3H3h.js" >
  <
  link rel = "modulepreload"
crossorigin href = "/assets/scheduler-CzFDRTuY.js" >
  <
  link rel = "modulepreload"
crossorigin href = "/assets/react-dom-DCoj3sTC.js" >
  <
  link rel = "modulepreload"
crossorigin href = "/assets/redux-DITMfSWq.js" >
  <
  link rel = "modulepreload"
crossorigin href = "/assets/immer-AZmEbvJU.js" >
  <
  link rel = "modulepreload"
crossorigin href = "/assets/reselect-BeKUwQU7.js" >
  <
  link rel = "modulepreload"
crossorigin href = "/assets/redux-thunk-ClJT1hhx.js" >
  <
  link rel = "modulepreload"
crossorigin href = "/assets/@reduxjs-WPf4Nv7j.js" >
  <
  link rel = "modulepreload"
crossorigin href = "/assets/axios-BdInfei4.js" >
  <
  link rel = "modulepreload"
crossorigin href = "/assets/use-sync-external-store-BIcyVYYg.js" >
  <
  link rel = "modulepreload"
crossorigin href = "/assets/react-redux-BljSBgeC.js" >
  <
  link rel = "modulepreload"
crossorigin href = "/assets/@babel-OEIDM1DX.js" >
  <
  link rel = "modulepreload"
crossorigin href = "/assets/prop-types-DK12qZJk.js" >
  <
  link rel = "modulepreload"
crossorigin href = "/assets/resolve-pathname-D6XOvX2q.js" >
  <
  link rel = "modulepreload"
crossorigin href = "/assets/tiny-invariant-BaFNuDhB.js" >
  <
  link rel = "modulepreload"
crossorigin href = "/assets/history-COziRoqA.js" >
  <
  link rel = "modulepreload"
crossorigin href = "/assets/isarray-Dmh8zLWU.js" >
  <
  link rel = "modulepreload"
crossorigin href = "/assets/path-to-regexp-Bpkj8jjG.js" >
  <
  link rel = "modulepreload"
crossorigin href = "/assets/hoist-non-react-statics-DQogQWOa.js" >
  <
  link rel = "modulepreload"
crossorigin href = "/assets/react-router-BhXvGmnQ.js" >
  <
  link rel = "modulepreload"
crossorigin href = "/assets/framer-motion-BggZOsGS.js" >
  <
  link rel = "modulepreload"
crossorigin href = "/assets/yaml-Dy-SgT9h.js" >
  <
  link rel = "modulepreload"
crossorigin href = "/assets/classnames-D-x1NdaJ.js" >
  <
  link rel = "modulepreload"
crossorigin href = "/assets/tweetnacl-util-B9eApQKV.js" >
  <
  link rel = "modulepreload"
crossorigin href = "/assets/is-hex-prefixed-Chswt-_p.js" >
  <
  link rel = "modulepreload"
crossorigin href = "/assets/strip-hex-prefix-DJeEoz3i.js" >
  <
  link rel = "modulepreload"
crossorigin href = "/assets/number-to-bn-VwIxN61R.js" >
  <
  link rel = "modulepreload"
crossorigin href = "/assets/ethjs-unit-bvdJTi0B.js" >
  <
  link rel = "modulepreload"
crossorigin href = "/assets/isomorphic-webcrypto-Cp7ugTe2.js" >
  <
  link rel = "modulepreload"
crossorigin href = "/assets/tonweb-BaiZR3hJ.js" >
  <
  link rel = "modulepreload"
crossorigin href = "/assets/tweetnacl-DeYMGiLl.js" >
  <
  link rel = "modulepreload"
crossorigin href = "/assets/ua-parser-js-9NRjnSWS.js" >
  <
  link rel = "modulepreload"
crossorigin href = "/assets/deepmerge-D9PnGD7j.js" >
  <
  link rel = "modulepreload"
crossorigin href = "/assets/@tonconnect-CKEjIK8E.js" >
  <
  link rel = "modulepreload"
crossorigin href = "/assets/symbol.inspect-CD8uWkLQ.js" >
  <
  link rel = "modulepreload"
crossorigin href = "/assets/jssha-Dj0pk0Xq.js" >
  <
  link rel = "modulepreload"
crossorigin href = "/assets/dataloader-7UOpijhF.js" >
  <
  link rel = "modulepreload"
crossorigin href = "/assets/zod-Dbq4cBMj.js" >
  <
  link rel = "modulepreload"
crossorigin href = "/assets/@ton-CABtnvlX.js" >
  <
  link rel = "modulepreload"
crossorigin href = "/assets/@react-spring-BiYD2lL6.js" >
  <
  link rel = "modulepreload"
crossorigin href = "/assets/centrifuge-B3TpHLNx.js" >
  <
  link rel = "modulepreload"
crossorigin href = "/assets/fflate-DRb3BoOD.js" >
  <
  link rel = "modulepreload"
crossorigin href = "/assets/void-elements-CbcVFbPk.js" >
  <
  link rel = "modulepreload"
crossorigin href = "/assets/html-parse-stringify-Cy9TkeAK.js" >
  <
  link rel = "modulepreload"
crossorigin href = "/assets/react-i18next-DUbAQzaN.js" >
  <
  link rel = "modulepreload"
crossorigin href = "/assets/react-range-COVt_hlT.js" >
  <
  link rel = "modulepreload"
crossorigin href = "/assets/chroma-js-CHvE9HB5.js" >
  <
  link rel = "modulepreload"
crossorigin href = "/assets/react-router-dom-CKnOmWyG.js" >
  <
  link rel = "modulepreload"
crossorigin href = "/assets/i18next-vSwsns86.js" >
  <
  link rel = "stylesheet"
crossorigin href = "/assets/index-vh7dyUcZ.css" >
  <
  /head> <
  body >
  <
  noscript > You need to enable JavaScript to run this app < /noscript> <
  div id = "root" > < /div> <
  /body> <
  /html>