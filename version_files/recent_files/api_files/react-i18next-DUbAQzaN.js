import {
  r as u
} from "./react-DjWS3H3h.js";
import {
  c as te
} from "./html-parse-stringify-Cy9TkeAK.js";
const B = (...e) => {
    console != null && console.warn && (A(e[0]) && (e[0] = `react-i18next:: ${e[0]}`), console.warn(...e))
  },
  q = {},
  M = (...e) => {
    A(e[0]) && q[e[0]] || (A(e[0]) && (q[e[0]] = new Date), B(...e))
  },
  Y = (e, t) => () => {
    if (e.isInitialized) t();
    else {
      const n = () => {
        setTimeout(() => {
          e.off("initialized", n)
        }, 0), t()
      };
      e.on("initialized", n)
    }
  },
  J = (e, t, n) => {
    e.loadNamespaces(t, Y(e, n))
  },
  U = (e, t, n, i) => {
    A(n) && (n = [n]), n.forEach(w => {
      e.options.ns.indexOf(w) < 0 && e.options.ns.push(w)
    }), e.loadLanguages(t, Y(e, i))
  },
  ne = (e, t, n = {}) => !t.languages || !t.languages.length ? (M("i18n.languages were undefined or empty", t.languages), !0) : t.hasLoadedNamespace(e, {
    lng: n.lng,
    precheck: (i, w) => {
      var s;
      if (((s = n.bindI18n) == null ? void 0 : s.indexOf("languageChanging")) > -1 && i.services.backendConnector.backend && i.isLanguageChangingTo && !w(i.isLanguageChangingTo, e)) return !1
    }
  }),
  A = e => typeof e == "string",
  L = e => typeof e == "object" && e !== null,
  se = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
  ae = {
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
  re = e => ae[e],
  oe = e => e.replace(se, re);
let W = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: oe
};
const ie = (e = {}) => {
    W = {
      ...W,
      ...e
    }
  },
  G = () => W;
let X;
const le = e => {
    X = e
  },
  D = () => X,
  K = (e, t) => {
    var i;
    if (!e) return !1;
    const n = ((i = e.props) == null ? void 0 : i.children) ?? e.children;
    return t ? n.length > 0 : !!n
  },
  R = e => {
    var n, i;
    if (!e) return [];
    const t = ((n = e.props) == null ? void 0 : n.children) ?? e.children;
    return (i = e.props) != null && i.i18nIsDynamicList ? H(t) : t
  },
  ce = e => Array.isArray(e) && e.every(u.isValidElement),
  H = e => Array.isArray(e) ? e : [e],
  ue = (e, t) => {
    const n = {
      ...t
    };
    return n.props = Object.assign(e.props, t.props), n
  },
  Q = (e, t) => {
    if (!e) return "";
    let n = "";
    const i = H(e),
      w = t != null && t.transSupportBasicHtmlNodes ? t.transKeepBasicHtmlNodesFor ?? [] : [];
    return i.forEach((s, f) => {
      if (A(s)) n += `${s}`;
      else if (u.isValidElement(s)) {
        const {
          props: $,
          type: m
        } = s, l = Object.keys($).length, N = w.indexOf(m) > -1, x = $.children;
        if (!x && N && !l) n += `<${m}/>`;
        else if (!x && (!N || l) || $.i18nIsDynamicList) n += `<${f}></${f}>`;
        else if (N && l === 1 && A(x)) n += `<${m}>${x}</${m}>`;
        else {
          const I = Q(x, t);
          n += `<${f}>${I}</${f}>`
        }
      } else if (s === null) B("Trans: the passed in value is invalid - seems you passed in a null child.");
      else if (L(s)) {
        const {
          format: $,
          ...m
        } = s, l = Object.keys(m);
        if (l.length === 1) {
          const N = $ ? `${l[0]}, ${$}` : l[0];
          n += `{{${N}}}`
        } else B("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.", s)
      } else B("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.", s)
    }), n
  },
  fe = (e, t, n, i, w, s) => {
    if (t === "") return [];
    const f = i.transKeepBasicHtmlNodesFor || [],
      $ = t && new RegExp(f.map(r => `<${r}`).join("|")).test(t);
    if (!e && !$ && !s) return [t];
    const m = {},
      l = r => {
        H(r).forEach(o => {
          A(o) || (K(o) ? l(R(o)) : L(o) && !u.isValidElement(o) && Object.assign(m, o))
        })
      };
    l(e);
    const N = te.parse(`<0>${t}</0>`),
      x = {
        ...m,
        ...w
      },
      I = (r, y, o) => {
        var c;
        const p = R(r),
          j = g(p, y.children, o);
        return ce(p) && j.length === 0 || (c = r.props) != null && c.i18nIsDynamicList ? p : j
      },
      k = (r, y, o, p, j) => {
        r.dummy ? (r.children = y, o.push(u.cloneElement(r, {
          key: p
        }, j ? void 0 : y))) : o.push(...u.Children.map([r], c => {
          const a = {
            ...c.props
          };
          return delete a.i18nIsDynamicList, u.createElement(c.type, {
            ...a,
            key: p,
            ref: c.ref
          }, j ? null : y)
        }))
      },
      g = (r, y, o) => {
        const p = H(r);
        return H(y).reduce((c, a, S) => {
          var T, C;
          const h = ((C = (T = a.children) == null ? void 0 : T[0]) == null ? void 0 : C.content) && n.services.interpolator.interpolate(a.children[0].content, x, n.language);
          if (a.type === "tag") {
            let d = p[parseInt(a.name, 10)];
            o.length === 1 && !d && (d = o[0][a.name]), d || (d = {});
            const E = Object.keys(a.attrs).length !== 0 ? ue({
                props: a.attrs
              }, d) : d,
              F = u.isValidElement(E),
              V = F && K(a, !0) && !a.voidElement,
              z = $ && L(E) && E.dummy && !F,
              O = L(e) && Object.hasOwnProperty.call(e, a.name);
            if (A(E)) {
              const b = n.services.interpolator.interpolate(E, x, n.language);
              c.push(b)
            } else if (K(E) || V) {
              const b = I(E, a, o);
              k(E, b, c, S)
            } else if (z) {
              const b = g(p, a.children, o);
              k(E, b, c, S)
            } else if (Number.isNaN(parseFloat(a.name)))
              if (O) {
                const b = I(E, a, o);
                k(E, b, c, S, a.voidElement)
              } else if (i.transSupportBasicHtmlNodes && f.indexOf(a.name) > -1)
              if (a.voidElement) c.push(u.createElement(a.name, {
                key: `${a.name}-${S}`
              }));
              else {
                const b = g(p, a.children, o);
                c.push(u.createElement(a.name, {
                  key: `${a.name}-${S}`
                }, b))
              }
            else if (a.voidElement) c.push(`<${a.name} />`);
            else {
              const b = g(p, a.children, o);
              c.push(`<${a.name}>${b}</${a.name}>`)
            } else if (L(E) && !F) {
              const b = a.children[0] ? h : null;
              b && c.push(b)
            } else k(E, h, c, S, a.children.length !== 1 || !h)
          } else if (a.type === "text") {
            const d = i.transWrapTextNodes,
              E = s ? i.unescape(n.services.interpolator.interpolate(a.content, x, n.language)) : n.services.interpolator.interpolate(a.content, x, n.language);
            d ? c.push(u.createElement(d, {
              key: `${a.name}-${S}`
            }, E)) : c.push(E)
          }
          return c
        }, [])
      },
      v = g([{
        dummy: !0,
        children: e || []
      }], N, H(e || []));
    return R(v[0])
  };

function pe({
  children: e,
  count: t,
  parent: n,
  i18nKey: i,
  context: w,
  tOptions: s = {},
  values: f,
  defaults: $,
  components: m,
  ns: l,
  i18n: N,
  t: x,
  shouldUnescape: I,
  ...k
}) {
  var d, E, F, V, z, O;
  const g = N || D();
  if (!g) return M("You will need to pass in an i18next instance by using i18nextReactModule"), e;
  const v = x || g.t.bind(g) || (b => b),
    r = {
      ...G(),
      ...(d = g.options) == null ? void 0 : d.react
    };
  let y = l || v.ns || ((E = g.options) == null ? void 0 : E.defaultNS);
  y = A(y) ? [y] : y || ["translation"];
  const o = Q(e, r),
    p = $ || o || r.transEmptyNodeValue || i,
    {
      hashTransKey: j
    } = r,
    c = i || (j ? j(o || p) : o || p);
  (V = (F = g.options) == null ? void 0 : F.interpolation) != null && V.defaultVariables && (f = f && Object.keys(f).length > 0 ? {
    ...f,
    ...g.options.interpolation.defaultVariables
  } : {
    ...g.options.interpolation.defaultVariables
  });
  const a = f || t !== void 0 && !((O = (z = g.options) == null ? void 0 : z.interpolation) != null && O.alwaysFormat) || !e ? s.interpolation : {
      interpolation: {
        ...s.interpolation,
        prefix: "#$?",
        suffix: "?$#"
      }
    },
    S = {
      ...s,
      context: w || s.context,
      count: t,
      ...f,
      ...a,
      defaultValue: p,
      ns: y
    },
    h = c ? v(c, S) : p;
  m && Object.keys(m).forEach(b => {
    const P = m[b];
    if (typeof P.type == "function" || !P.props || !P.props.children || h.indexOf(`${b}/>`) < 0 && h.indexOf(`${b} />`) < 0) return;

    function ee() {
      return u.createElement(u.Fragment, null, P)
    }
    m[b] = u.createElement(ee)
  });
  const T = fe(m || e, h, g, r, S, I),
    C = n ?? r.defaultTransParent;
  return C ? u.createElement(C, k, T) : T
}
const be = {
    type: "3rdParty",
    init(e) {
      ie(e.options.react), le(e)
    }
  },
  Z = u.createContext();
class de {
  constructor() {
    this.usedNamespaces = {}
  }
  addUsedNamespaces(t) {
    t.forEach(n => {
      this.usedNamespaces[n] || (this.usedNamespaces[n] = !0)
    })
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces)
  }
}

function Ne({
  children: e,
  count: t,
  parent: n,
  i18nKey: i,
  context: w,
  tOptions: s = {},
  values: f,
  defaults: $,
  components: m,
  ns: l,
  i18n: N,
  t: x,
  shouldUnescape: I,
  ...k
}) {
  var o;
  const {
    i18n: g,
    defaultNS: v
  } = u.useContext(Z) || {}, r = N || g || D(), y = x || (r == null ? void 0 : r.t.bind(r));
  return pe({
    children: e,
    count: t,
    parent: n,
    i18nKey: i,
    context: w,
    tOptions: s,
    values: f,
    defaults: $,
    components: m,
    ns: l || (y == null ? void 0 : y.ns) || v || ((o = r == null ? void 0 : r.options) == null ? void 0 : o.defaultNS),
    i18n: r,
    t: x,
    shouldUnescape: I,
    ...k
  })
}
const me = (e, t) => {
    const n = u.useRef();
    return u.useEffect(() => {
      n.current = e
    }, [e, t]), n.current
  },
  _ = (e, t, n, i) => e.getFixedT(t, n, i),
  ge = (e, t, n, i) => u.useCallback(_(e, t, n, i), [e, t, n, i]),
  Ee = (e, t = {}) => {
    var j, c, a, S;
    const {
      i18n: n
    } = t, {
      i18n: i,
      defaultNS: w
    } = u.useContext(Z) || {}, s = n || i || D();
    if (s && !s.reportNamespaces && (s.reportNamespaces = new de), !s) {
      M("You will need to pass in an i18next instance by using initReactI18next");
      const h = (C, d) => A(d) ? d : L(d) && A(d.defaultValue) ? d.defaultValue : Array.isArray(C) ? C[C.length - 1] : C,
        T = [h, {}, !1];
      return T.t = h, T.i18n = {}, T.ready = !1, T
    }(j = s.options.react) != null && j.wait && M("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
    const f = {
        ...G(),
        ...s.options.react,
        ...t
      },
      {
        useSuspense: $,
        keyPrefix: m
      } = f;
    let l = e || w || ((c = s.options) == null ? void 0 : c.defaultNS);
    l = A(l) ? [l] : l || ["translation"], (S = (a = s.reportNamespaces).addUsedNamespaces) == null || S.call(a, l);
    const N = (s.isInitialized || s.initializedStoreOnce) && l.every(h => ne(h, s, f)),
      x = ge(s, t.lng || null, f.nsMode === "fallback" ? l : l[0], m),
      I = () => x,
      k = () => _(s, t.lng || null, f.nsMode === "fallback" ? l : l[0], m),
      [g, v] = u.useState(I);
    let r = l.join();
    t.lng && (r = `${t.lng}${r}`);
    const y = me(r),
      o = u.useRef(!0);
    u.useEffect(() => {
      const {
        bindI18n: h,
        bindI18nStore: T
      } = f;
      o.current = !0, !N && !$ && (t.lng ? U(s, t.lng, l, () => {
        o.current && v(k)
      }) : J(s, l, () => {
        o.current && v(k)
      })), N && y && y !== r && o.current && v(k);
      const C = () => {
        o.current && v(k)
      };
      return h && (s == null || s.on(h, C)), T && (s == null || s.store.on(T, C)), () => {
        o.current = !1, s && (h == null || h.split(" ").forEach(d => s.off(d, C))), T && s && T.split(" ").forEach(d => s.store.off(d, C))
      }
    }, [s, r]), u.useEffect(() => {
      o.current && N && v(I)
    }, [s, m, N]);
    const p = [g, s, N];
    if (p.t = g, p.i18n = s, p.ready = N, N || !N && !$) return p;
    throw new Promise(h => {
      t.lng ? U(s, t.lng, l, () => h()) : J(s, l, () => h())
    })
  };
export {
  Ne as T, be as i, Ee as u
};