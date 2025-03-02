import {
  r as l
} from "./react-DjWS3H3h.js";
const U = (...e) => {
    console != null && console.warn && (g(e[0]) && (e[0] = `react-i18next:: ${e[0]}`), console.warn(...e))
  },
  j = {},
  w = (...e) => {
    g(e[0]) && j[e[0]] || (g(e[0]) && (j[e[0]] = new Date), U(...e))
  },
  M = (e, n) => () => {
    if (e.isInitialized) n();
    else {
      const s = () => {
        setTimeout(() => {
          e.off("initialized", s)
        }, 0), n()
      };
      e.on("initialized", s)
    }
  },
  k = (e, n, s) => {
    e.loadNamespaces(n, M(e, s))
  },
  H = (e, n, s, i) => {
    g(s) && (s = [s]), s.forEach(p => {
      e.options.ns.indexOf(p) < 0 && e.options.ns.push(p)
    }), e.loadLanguages(n, M(e, i))
  },
  $ = (e, n, s = {}) => !n.languages || !n.languages.length ? (w("i18n.languages were undefined or empty", n.languages), !0) : n.hasLoadedNamespace(e, {
    lng: s.lng,
    precheck: (i, p) => {
      var t;
      if (((t = s.bindI18n) == null ? void 0 : t.indexOf("languageChanging")) > -1 && i.services.backendConnector.backend && i.isLanguageChangingTo && !p(i.isLanguageChangingTo, e)) return !1
    }
  }),
  g = e => typeof e == "string",
  q = e => typeof e == "object" && e !== null,
  A = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
  B = {
    "&amp;": "&",
    "&#38;": "&",
    "&lt;": "<",
    "&#60;": "<",
    "&gt;": ">",
    "&#62;": ">",
    "&apos;": "'",
    "&#39;": "'",
    "&quot;": '"',
    "&#34;": '"',
    "&nbsp;": " ",
    "&#160;": " ",
    "&copy;": "©",
    "&#169;": "©",
    "&reg;": "®",
    "&#174;": "®",
    "&hellip;": "…",
    "&#8230;": "…",
    "&#x2F;": "/",
    "&#47;": "/"
  },
  W = e => B[e],
  G = e => e.replace(A, W);
let S = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: G
};
const J = (e = {}) => {
    S = {
      ...S,
      ...e
    }
  },
  K = () => S;
let O;
const Y = e => {
    O = e
  },
  Q = () => O,
  ee = {
    type: "3rdParty",
    init(e) {
      J(e.options.react), Y(e)
    }
  },
  X = l.createContext();
class Z {
  constructor() {
    this.usedNamespaces = {}
  }
  addUsedNamespaces(n) {
    n.forEach(s => {
      this.usedNamespaces[s] || (this.usedNamespaces[s] = !0)
    })
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces)
  }
}
const _ = (e, n) => {
    const s = l.useRef();
    return l.useEffect(() => {
      s.current = e
    }, [e, n]), s.current
  },
  P = (e, n, s, i) => e.getFixedT(n, s, i),
  D = (e, n, s, i) => l.useCallback(P(e, n, s, i), [e, n, s, i]),
  te = (e, n = {}) => {
    var R, z, F, L;
    const {
      i18n: s
    } = n, {
      i18n: i,
      defaultNS: p
    } = l.useContext(X) || {}, t = s || i || Q();
    if (t && !t.reportNamespaces && (t.reportNamespaces = new Z), !t) {
      w("You will need to pass in an i18next instance by using initReactI18next");
      const o = (c, u) => g(u) ? u : q(u) && g(u.defaultValue) ? u.defaultValue : Array.isArray(c) ? c[c.length - 1] : c,
        r = [o, {}, !1];
      return r.t = o, r.i18n = {}, r.ready = !1, r
    }(R = t.options.react) != null && R.wait && w("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
    const m = {
        ...K(),
        ...t.options.react,
        ...n
      },
      {
        useSuspense: T,
        keyPrefix: b
      } = m;
    let a = e || p || ((z = t.options) == null ? void 0 : z.defaultNS);
    a = g(a) ? [a] : a || ["translation"], (L = (F = t.reportNamespaces).addUsedNamespaces) == null || L.call(F, a);
    const d = (t.isInitialized || t.initializedStoreOnce) && a.every(o => $(o, t, m)),
      v = D(t, n.lng || null, m.nsMode === "fallback" ? a : a[0], b),
      C = () => v,
      x = () => P(t, n.lng || null, m.nsMode === "fallback" ? a : a[0], b),
      [E, N] = l.useState(C);
    let h = a.join();
    n.lng && (h = `${n.lng}${h}`);
    const I = _(h),
      f = l.useRef(!0);
    l.useEffect(() => {
      const {
        bindI18n: o,
        bindI18nStore: r
      } = m;
      f.current = !0, !d && !T && (n.lng ? H(t, n.lng, a, () => {
        f.current && N(x)
      }) : k(t, a, () => {
        f.current && N(x)
      })), d && I && I !== h && f.current && N(x);
      const c = () => {
        f.current && N(x)
      };
      return o && (t == null || t.on(o, c)), r && (t == null || t.store.on(r, c)), () => {
        f.current = !1, t && (o == null || o.split(" ").forEach(u => t.off(u, c))), r && t && r.split(" ").forEach(u => t.store.off(u, c))
      }
    }, [t, h]), l.useEffect(() => {
      f.current && d && N(C)
    }, [t, b, d]);
    const y = [E, t, d];
    if (y.t = E, y.i18n = t, y.ready = d, d || !d && !T) return y;
    throw new Promise(o => {
      n.lng ? H(t, n.lng, a, () => o()) : k(t, a, () => o())
    })
  };
export {
  ee as i, te as u
};