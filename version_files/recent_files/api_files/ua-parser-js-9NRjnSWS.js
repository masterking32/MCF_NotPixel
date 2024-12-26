import {
  c as gi,
  a as ki
} from "./@ledgerhq-BW4RAlPi.js";
var J = {
  exports: {}
};
(function(Q, $) {
  (function(x, u) {
    var mi = "1.0.38",
      N = "",
      ii = "?",
      L = "function",
      R = "undefined",
      j = "object",
      M = "string",
      ei = "major",
      e = "model",
      a = "name",
      i = "type",
      o = "vendor",
      r = "version",
      p = "architecture",
      _ = "console",
      b = "mobile",
      n = "tablet",
      m = "smarttv",
      y = "wearable",
      V = "embedded",
      G = 500,
      P = "Amazon",
      O = "Apple",
      oi = "ASUS",
      ai = "BlackBerry",
      k = "Browser",
      U = "Chrome",
      pi = "Edge",
      z = "Firefox",
      C = "Google",
      ri = "Huawei",
      F = "LG",
      H = "Microsoft",
      ti = "Motorola",
      A = "Opera",
      q = "Samsung",
      si = "Sharp",
      B = "Sony",
      Y = "Xiaomi",
      W = "Zebra",
      ni = "Facebook",
      bi = "Chromium OS",
      wi = "Mac OS",
      hi = function(w, c) {
        var s = {};
        for (var d in w) c[d] && c[d].length % 2 === 0 ? s[d] = c[d].concat(w[d]) : s[d] = w[d];
        return s
      },
      I = function(w) {
        for (var c = {}, s = 0; s < w.length; s++) c[w[s].toUpperCase()] = w[s];
        return c
      },
      li = function(w, c) {
        return typeof w === M ? S(c).indexOf(S(w)) !== -1 : !1
      },
      S = function(w) {
        return w.toLowerCase()
      },
      vi = function(w) {
        return typeof w === M ? w.replace(/[^\d\.]/g, N).split(".")[0] : u
      },
      X = function(w, c) {
        if (typeof w === M) return w = w.replace(/^\s\s*/, N), typeof c === R ? w : w.substring(0, G)
      },
      T = function(w, c) {
        for (var s = 0, d, g, v, l, t, f; s < c.length && !t;) {
          var K = c[s],
            ui = c[s + 1];
          for (d = g = 0; d < K.length && !t && K[d];)
            if (t = K[d++].exec(w), t)
              for (v = 0; v < ui.length; v++) f = t[++g], l = ui[v], typeof l === j && l.length > 0 ? l.length === 2 ? typeof l[1] == L ? this[l[0]] = l[1].call(this, f) : this[l[0]] = l[1] : l.length === 3 ? typeof l[1] === L && !(l[1].exec && l[1].test) ? this[l[0]] = f ? l[1].call(this, f, l[2]) : u : this[l[0]] = f ? f.replace(l[1], l[2]) : u : l.length === 4 && (this[l[0]] = f ? l[3].call(this, f.replace(l[1], l[2])) : u) : this[l] = f || u;
          s += 2
        }
      },
      Z = function(w, c) {
        for (var s in c)
          if (typeof c[s] === j && c[s].length > 0) {
            for (var d = 0; d < c[s].length; d++)
              if (li(c[s][d], w)) return s === ii ? u : s
          } else if (li(c[s], w)) return s === ii ? u : s;
        return w
      },
      fi = {
        "1.0": "/8",
        "1.2": "/1",
        "1.3": "/3",
        "2.0": "/412",
        "2.0.2": "/416",
        "2.0.3": "/417",
        "2.0.4": "/419",
        "?": "/"
      },
      ci = {
        ME: "4.90",
        "NT 3.11": "NT3.51",
        "NT 4.0": "NT4.0",
        2e3: "NT 5.0",
        XP: ["NT 5.1", "NT 5.2"],
        Vista: "NT 6.0",
        7: "NT 6.1",
        8: "NT 6.2",
        "8.1": "NT 6.3",
        10: ["NT 6.4", "NT 10.0"],
        RT: "ARM"
      },
      di = {
        browser: [
          [/\b(?:crmo|crios)\/([\w\.]+)/i],
          [r, [a, "Chrome"]],
          [/edg(?:e|ios|a)?\/([\w\.]+)/i],
          [r, [a, "Edge"]],
          [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
          [a, r],
          [/opios[\/ ]+([\w\.]+)/i],
          [r, [a, A + " Mini"]],
          [/\bop(?:rg)?x\/([\w\.]+)/i],
          [r, [a, A + " GX"]],
          [/\bopr\/([\w\.]+)/i],
          [r, [a, A]],
          [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
          [r, [a, "Baidu"]],
          [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(heytap|ovi)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
          [a, r],
          [/\bddg\/([\w\.]+)/i],
          [r, [a, "DuckDuckGo"]],
          [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
          [r, [a, "UC" + k]],
          [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
          [r, [a, "WeChat"]],
          [/konqueror\/([\w\.]+)/i],
          [r, [a, "Konqueror"]],
          [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
          [r, [a, "IE"]],
          [/ya(?:search)?browser\/([\w\.]+)/i],
          [r, [a, "Yandex"]],
          [/slbrowser\/([\w\.]+)/i],
          [r, [a, "Smart Lenovo " + k]],
          [/(avast|avg)\/([\w\.]+)/i],
          [
            [a, /(.+)/, "$1 Secure " + k], r
          ],
          [/\bfocus\/([\w\.]+)/i],
          [r, [a, z + " Focus"]],
          [/\bopt\/([\w\.]+)/i],
          [r, [a, A + " Touch"]],
          [/coc_coc\w+\/([\w\.]+)/i],
          [r, [a, "Coc Coc"]],
          [/dolfin\/([\w\.]+)/i],
          [r, [a, "Dolphin"]],
          [/coast\/([\w\.]+)/i],
          [r, [a, A + " Coast"]],
          [/miuibrowser\/([\w\.]+)/i],
          [r, [a, "MIUI " + k]],
          [/fxios\/([-\w\.]+)/i],
          [r, [a, z]],
          [/\bqihu|(qi?ho?o?|360)browser/i],
          [
            [a, "360 " + k]
          ],
          [/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i],
          [
            [a, /(.+)/, "$1 " + k], r
          ],
          [/samsungbrowser\/([\w\.]+)/i],
          [r, [a, q + " Internet"]],
          [/(comodo_dragon)\/([\w\.]+)/i],
          [
            [a, /_/g, " "], r
          ],
          [/metasr[\/ ]?([\d\.]+)/i],
          [r, [a, "Sogou Explorer"]],
          [/(sogou)mo\w+\/([\d\.]+)/i],
          [
            [a, "Sogou Mobile"], r
          ],
          [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i],
          [a, r],
          [/(lbbrowser)/i, /\[(linkedin)app\]/i],
          [a],
          [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
          [
            [a, ni], r
          ],
          [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
          [a, r],
          [/\bgsa\/([\w\.]+) .*safari\//i],
          [r, [a, "GSA"]],
          [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
          [r, [a, "TikTok"]],
          [/headlesschrome(?:\/([\w\.]+)| )/i],
          [r, [a, U + " Headless"]],
          [/ wv\).+(chrome)\/([\w\.]+)/i],
          [
            [a, U + " WebView"], r
          ],
          [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
          [r, [a, "Android " + k]],
          [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
          [a, r],
          [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
          [r, [a, "Mobile Safari"]],
          [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
          [r, a],
          [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
          [a, [r, Z, fi]],
          [/(webkit|khtml)\/([\w\.]+)/i],
          [a, r],
          [/(navigator|netscape\d?)\/([-\w\.]+)/i],
          [
            [a, "Netscape"], r
          ],
          [/mobile vr; rv:([\w\.]+)\).+firefox/i],
          [r, [a, z + " Reality"]],
          [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i, /panasonic;(viera)/i],
          [a, r],
          [/(cobalt)\/([\w\.]+)/i],
          [a, [r, /master.|lts./, ""]]
        ],
        cpu: [
          [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
          [
            [p, "amd64"]
          ],
          [/(ia32(?=;))/i],
          [
            [p, S]
          ],
          [/((?:i[346]|x)86)[;\)]/i],
          [
            [p, "ia32"]
          ],
          [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
          [
            [p, "arm64"]
          ],
          [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
          [
            [p, "armhf"]
          ],
          [/windows (ce|mobile); ppc;/i],
          [
            [p, "arm"]
          ],
          [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
          [
            [p, /ower/, N, S]
          ],
          [/(sun4\w)[;\)]/i],
          [
            [p, "sparc"]
          ],
          [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
          [
            [p, S]
          ]
        ],
        device: [
          [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
          [e, [o, q],
            [i, n]
          ],
          [/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i],
          [e, [o, q],
            [i, b]
          ],
          [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
          [e, [o, O],
            [i, b]
          ],
          [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
          [e, [o, O],
            [i, n]
          ],
          [/(macintosh);/i],
          [e, [o, O]],
          [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
          [e, [o, si],
            [i, b]
          ],
          [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
          [e, [o, ri],
            [i, n]
          ],
          [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
          [e, [o, ri],
            [i, b]
          ],
          [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],
          [
            [e, /_/g, " "],
            [o, Y],
            [i, b]
          ],
          [/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i, /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
          [
            [e, /_/g, " "],
            [o, Y],
            [i, n]
          ],
          [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
          [e, [o, "OPPO"],
            [i, b]
          ],
          [/\b(opd2\d{3}a?) bui/i],
          [e, [o, "OPPO"],
            [i, n]
          ],
          [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
          [e, [o, "Vivo"],
            [i, b]
          ],
          [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
          [e, [o, "Realme"],
            [i, b]
          ],
          [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
          [e, [o, ti],
            [i, b]
          ],
          [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
          [e, [o, ti],
            [i, n]
          ],
          [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
          [e, [o, F],
            [i, n]
          ],
          [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i],
          [e, [o, F],
            [i, b]
          ],
          [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
          [e, [o, "Lenovo"],
            [i, n]
          ],
          [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
          [
            [e, /_/g, " "],
            [o, "Nokia"],
            [i, b]
          ],
          [/(pixel c)\b/i],
          [e, [o, C],
            [i, n]
          ],
          [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
          [e, [o, C],
            [i, b]
          ],
          [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
          [e, [o, B],
            [i, b]
          ],
          [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
          [
            [e, "Xperia Tablet"],
            [o, B],
            [i, n]
          ],
          [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
          [e, [o, "OnePlus"],
            [i, b]
          ],
          [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
          [e, [o, P],
            [i, n]
          ],
          [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
          [
            [e, /(.+)/g, "Fire Phone $1"],
            [o, P],
            [i, b]
          ],
          [/(playbook);[-\w\),; ]+(rim)/i],
          [e, o, [i, n]],
          [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
          [e, [o, ai],
            [i, b]
          ],
          [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
          [e, [o, oi],
            [i, n]
          ],
          [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
          [e, [o, oi],
            [i, b]
          ],
          [/(nexus 9)/i],
          [e, [o, "HTC"],
            [i, n]
          ],
          [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
          [o, [e, /_/g, " "],
            [i, b]
          ],
          [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
          [e, [o, "Acer"],
            [i, n]
          ],
          [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
          [e, [o, "Meizu"],
            [i, b]
          ],
          [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
          [e, [o, "Ulefone"],
            [i, b]
          ],
          [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i],
          [o, e, [i, b]],
          [/(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
          [o, e, [i, n]],
          [/(surface duo)/i],
          [e, [o, H],
            [i, n]
          ],
          [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
          [e, [o, "Fairphone"],
            [i, b]
          ],
          [/(u304aa)/i],
          [e, [o, "AT&T"],
            [i, b]
          ],
          [/\bsie-(\w*)/i],
          [e, [o, "Siemens"],
            [i, b]
          ],
          [/\b(rct\w+) b/i],
          [e, [o, "RCA"],
            [i, n]
          ],
          [/\b(venue[\d ]{2,7}) b/i],
          [e, [o, "Dell"],
            [i, n]
          ],
          [/\b(q(?:mv|ta)\w+) b/i],
          [e, [o, "Verizon"],
            [i, n]
          ],
          [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
          [e, [o, "Barnes & Noble"],
            [i, n]
          ],
          [/\b(tm\d{3}\w+) b/i],
          [e, [o, "NuVision"],
            [i, n]
          ],
          [/\b(k88) b/i],
          [e, [o, "ZTE"],
            [i, n]
          ],
          [/\b(nx\d{3}j) b/i],
          [e, [o, "ZTE"],
            [i, b]
          ],
          [/\b(gen\d{3}) b.+49h/i],
          [e, [o, "Swiss"],
            [i, b]
          ],
          [/\b(zur\d{3}) b/i],
          [e, [o, "Swiss"],
            [i, n]
          ],
          [/\b((zeki)?tb.*\b) b/i],
          [e, [o, "Zeki"],
            [i, n]
          ],
          [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
          [
            [o, "Dragon Touch"], e, [i, n]
          ],
          [/\b(ns-?\w{0,9}) b/i],
          [e, [o, "Insignia"],
            [i, n]
          ],
          [/\b((nxa|next)-?\w{0,9}) b/i],
          [e, [o, "NextBook"],
            [i, n]
          ],
          [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
          [
            [o, "Voice"], e, [i, b]
          ],
          [/\b(lvtel\-)?(v1[12]) b/i],
          [
            [o, "LvTel"], e, [i, b]
          ],
          [/\b(ph-1) /i],
          [e, [o, "Essential"],
            [i, b]
          ],
          [/\b(v(100md|700na|7011|917g).*\b) b/i],
          [e, [o, "Envizen"],
            [i, n]
          ],
          [/\b(trio[-\w\. ]+) b/i],
          [e, [o, "MachSpeed"],
            [i, n]
          ],
          [/\btu_(1491) b/i],
          [e, [o, "Rotor"],
            [i, n]
          ],
          [/(shield[\w ]+) b/i],
          [e, [o, "Nvidia"],
            [i, n]
          ],
          [/(sprint) (\w+)/i],
          [o, e, [i, b]],
          [/(kin\.[onetw]{3})/i],
          [
            [e, /\./g, " "],
            [o, H],
            [i, b]
          ],
          [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
          [e, [o, W],
            [i, n]
          ],
          [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
          [e, [o, W],
            [i, b]
          ],
          [/smart-tv.+(samsung)/i],
          [o, [i, m]],
          [/hbbtv.+maple;(\d+)/i],
          [
            [e, /^/, "SmartTV"],
            [o, q],
            [i, m]
          ],
          [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
          [
            [o, F],
            [i, m]
          ],
          [/(apple) ?tv/i],
          [o, [e, O + " TV"],
            [i, m]
          ],
          [/crkey/i],
          [
            [e, U + "cast"],
            [o, C],
            [i, m]
          ],
          [/droid.+aft(\w+)( bui|\))/i],
          [e, [o, P],
            [i, m]
          ],
          [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
          [e, [o, si],
            [i, m]
          ],
          [/(bravia[\w ]+)( bui|\))/i],
          [e, [o, B],
            [i, m]
          ],
          [/(mitv-\w{5}) bui/i],
          [e, [o, Y],
            [i, m]
          ],
          [/Hbbtv.*(technisat) (.*);/i],
          [o, e, [i, m]],
          [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
          [
            [o, X],
            [e, X],
            [i, m]
          ],
          [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
          [
            [i, m]
          ],
          [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
          [o, e, [i, _]],
          [/droid.+; (shield) bui/i],
          [e, [o, "Nvidia"],
            [i, _]
          ],
          [/(playstation [345portablevi]+)/i],
          [e, [o, B],
            [i, _]
          ],
          [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
          [e, [o, H],
            [i, _]
          ],
          [/((pebble))app/i],
          [o, e, [i, y]],
          [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
          [e, [o, O],
            [i, y]
          ],
          [/droid.+; (glass) \d/i],
          [e, [o, C],
            [i, y]
          ],
          [/droid.+; (wt63?0{2,3})\)/i],
          [e, [o, W],
            [i, y]
          ],
          [/(quest( \d| pro)?)/i],
          [e, [o, ni],
            [i, y]
          ],
          [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
          [o, [i, V]],
          [/(aeobc)\b/i],
          [e, [o, P],
            [i, V]
          ],
          [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
          [e, [i, b]],
          [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
          [e, [i, n]],
          [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
          [
            [i, n]
          ],
          [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
          [
            [i, b]
          ],
          [/(android[-\w\. ]{0,9});.+buil/i],
          [e, [o, "Generic"]]
        ],
        engine: [
          [/windows.+ edge\/([\w\.]+)/i],
          [r, [a, pi + "HTML"]],
          [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
          [r, [a, "Blink"]],
          [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
          [a, r],
          [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
          [r, a]
        ],
        os: [
          [/microsoft (windows) (vista|xp)/i],
          [a, r],
          [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],
          [a, [r, Z, ci]],
          [/windows nt 6\.2; (arm)/i, /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
          [
            [r, Z, ci],
            [a, "Windows"]
          ],
          [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
          [
            [r, /_/g, "."],
            [a, "iOS"]
          ],
          [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
          [
            [a, wi],
            [r, /_/g, "."]
          ],
          [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
          [r, a],
          [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i],
          [a, r],
          [/\(bb(10);/i],
          [r, [a, ai]],
          [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
          [r, [a, "Symbian"]],
          [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
          [r, [a, z + " OS"]],
          [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
          [r, [a, "webOS"]],
          [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
          [r, [a, "watchOS"]],
          [/crkey\/([\d\.]+)/i],
          [r, [a, U + "cast"]],
          [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
          [
            [a, bi], r
          ],
          [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
          [a, r],
          [/(sunos) ?([\w\.\d]*)/i],
          [
            [a, "Solaris"], r
          ],
          [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
          [a, r]
        ]
      },
      h = function(w, c) {
        if (typeof w === j && (c = w, w = u), !(this instanceof h)) return new h(w, c).getResult();
        var s = typeof x !== R && x.navigator ? x.navigator : u,
          d = w || (s && s.userAgent ? s.userAgent : N),
          g = s && s.userAgentData ? s.userAgentData : u,
          v = c ? hi(di, c) : di,
          l = s && s.userAgent == d;
        return this.getBrowser = function() {
          var t = {};
          return t[a] = u, t[r] = u, T.call(t, d, v.browser), t[ei] = vi(t[r]), l && s && s.brave && typeof s.brave.isBrave == L && (t[a] = "Brave"), t
        }, this.getCPU = function() {
          var t = {};
          return t[p] = u, T.call(t, d, v.cpu), t
        }, this.getDevice = function() {
          var t = {};
          return t[o] = u, t[e] = u, t[i] = u, T.call(t, d, v.device), l && !t[i] && g && g.mobile && (t[i] = b), l && t[e] == "Macintosh" && s && typeof s.standalone !== R && s.maxTouchPoints && s.maxTouchPoints > 2 && (t[e] = "iPad", t[i] = n), t
        }, this.getEngine = function() {
          var t = {};
          return t[a] = u, t[r] = u, T.call(t, d, v.engine), t
        }, this.getOS = function() {
          var t = {};
          return t[a] = u, t[r] = u, T.call(t, d, v.os), l && !t[a] && g && g.platform && g.platform != "Unknown" && (t[a] = g.platform.replace(/chrome os/i, bi).replace(/macos/i, wi)), t
        }, this.getResult = function() {
          return {
            ua: this.getUA(),
            browser: this.getBrowser(),
            engine: this.getEngine(),
            os: this.getOS(),
            device: this.getDevice(),
            cpu: this.getCPU()
          }
        }, this.getUA = function() {
          return d
        }, this.setUA = function(t) {
          return d = typeof t === M && t.length > G ? X(t, G) : t, this
        }, this.setUA(d), this
      };
    h.VERSION = mi, h.BROWSER = I([a, r, ei]), h.CPU = I([p]), h.DEVICE = I([e, o, i, _, b, m, n, y, V]), h.ENGINE = h.OS = I([a, r]), Q.exports && ($ = Q.exports = h), $.UAParser = h;
    var E = typeof x !== R && (x.jQuery || x.Zepto);
    if (E && !E.ua) {
      var D = new h;
      E.ua = D.getResult(), E.ua.get = function() {
        return D.getUA()
      }, E.ua.set = function(w) {
        D.setUA(w);
        var c = D.getResult();
        for (var s in c) E.ua[s] = c[s]
      }
    }
  })(typeof window == "object" ? window : gi)
})(J, J.exports);
var xi = J.exports;
const Ei = ki(xi);
export {
  Ei as U
};