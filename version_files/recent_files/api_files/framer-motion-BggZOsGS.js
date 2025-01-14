import {
  r as T,
  j as K
} from "./react-DjWS3H3h.js";
const Me = T.createContext({
    transformPagePoint: t => t,
    isStatic: !1,
    reducedMotion: "never"
  }),
  $t = T.createContext({}),
  Gt = T.createContext(null),
  Re = typeof window < "u",
  Ps = Re ? T.useLayoutEffect : T.useEffect,
  Ss = T.createContext({
    strict: !1
  }),
  zt = t => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  Xi = "framerAppearId",
  As = "data-" + zt(Xi),
  Yi = {
    skipAnimations: !1,
    useManualTiming: !1
  };

function qi(t) {
  let e = new Set,
    n = new Set,
    s = !1,
    i = !1;
  const r = new WeakSet;
  let o = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };

  function a(u) {
    r.has(u) && (l.schedule(u), t()), u(o)
  }
  const l = {
    schedule: (u, h = !1, c = !1) => {
      const d = c && s ? e : n;
      return h && r.add(u), d.has(u) || d.add(u), u
    },
    cancel: u => {
      n.delete(u), r.delete(u)
    },
    process: u => {
      if (o = u, s) {
        i = !0;
        return
      }
      s = !0, [e, n] = [n, e], n.clear(), e.forEach(a), s = !1, i && (i = !1, l.process(u))
    }
  };
  return l
}
const Et = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"],
  Zi = 40;

function bs(t, e) {
  let n = !1,
    s = !0;
  const i = {
      delta: 0,
      timestamp: 0,
      isProcessing: !1
    },
    r = () => n = !0,
    o = Et.reduce((g, y) => (g[y] = qi(r), g), {}),
    {
      read: a,
      resolveKeyframes: l,
      update: u,
      preRender: h,
      render: c,
      postRender: f
    } = o,
    d = () => {
      const g = performance.now();
      n = !1, i.delta = s ? 1e3 / 60 : Math.max(Math.min(g - i.timestamp, Zi), 1), i.timestamp = g, i.isProcessing = !0, a.process(i), l.process(i), u.process(i), h.process(i), c.process(i), f.process(i), i.isProcessing = !1, n && e && (s = !1, t(d))
    },
    p = () => {
      n = !0, s = !0, i.isProcessing || t(d)
    };
  return {
    schedule: Et.reduce((g, y) => {
      const m = o[y];
      return g[y] = (S, A = !1, C = !1) => (n || p(), m.schedule(S, A, C)), g
    }, {}),
    cancel: g => {
      for (let y = 0; y < Et.length; y++) o[Et[y]].cancel(g)
    },
    state: i,
    steps: o
  }
}
const {
  schedule: Ee,
  cancel: Tu
} = bs(queueMicrotask, !1);

function at(t) {
  return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current")
}
const Vs = T.createContext({});
let rn = !1;

function Ji(t, e, n, s, i) {
  var r;
  const {
    visualElement: o
  } = T.useContext($t), a = T.useContext(Ss), l = T.useContext(Gt), u = T.useContext(Me).reducedMotion, h = T.useRef();
  s = s || a.renderer, !h.current && s && (h.current = s(t, {
    visualState: e,
    parent: o,
    props: n,
    presenceContext: l,
    blockInitialAnimation: l ? l.initial === !1 : !1,
    reducedMotionConfig: u
  }));
  const c = h.current,
    f = T.useContext(Vs);
  c && !c.projection && i && (c.type === "html" || c.type === "svg") && to(h.current, n, i, f), T.useInsertionEffect(() => {
    c && c.update(n, l)
  });
  const d = n[As],
    p = T.useRef(!!d && !window.MotionHandoffIsComplete && ((r = window.MotionHasOptimisedAnimation) === null || r === void 0 ? void 0 : r.call(window, d)));
  return Ps(() => {
    c && (c.updateFeatures(), Ee.render(c.render), p.current && c.animationState && c.animationState.animateChanges())
  }), T.useEffect(() => {
    c && (!p.current && c.animationState && c.animationState.animateChanges(), p.current = !1, rn || (rn = !0, queueMicrotask(Qi)))
  }), c
}

function Qi() {
  window.MotionHandoffIsComplete = !0
}

function to(t, e, n, s) {
  const {
    layoutId: i,
    layout: r,
    drag: o,
    dragConstraints: a,
    layoutScroll: l,
    layoutRoot: u
  } = e;
  t.projection = new n(t.latestValues, e["data-framer-portal-id"] ? void 0 : ws(t.parent)), t.projection.setOptions({
    layoutId: i,
    layout: r,
    alwaysMeasureLayout: !!o || a && at(a),
    visualElement: t,
    animationType: typeof r == "string" ? r : "both",
    initialPromotionConfig: s,
    layoutScroll: l,
    layoutRoot: u
  })
}

function ws(t) {
  if (t) return t.options.allowProjection !== !1 ? t.projection : ws(t.parent)
}

function eo(t, e, n) {
  return T.useCallback(s => {
    s && t.mount && t.mount(s), e && (s ? e.mount(s) : e.unmount()), n && (typeof n == "function" ? n(s) : at(n) && (n.current = s))
  }, [e])
}

function St(t) {
  return typeof t == "string" || Array.isArray(t)
}

function At(t) {
  return t !== null && typeof t == "object" && typeof t.start == "function"
}
const Le = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
  Fe = ["initial", ...Le];

function Ht(t) {
  return At(t.animate) || Fe.some(e => St(t[e]))
}

function Cs(t) {
  return !!(Ht(t) || t.variants)
}

function no(t, e) {
  if (Ht(t)) {
    const {
      initial: n,
      animate: s
    } = t;
    return {
      initial: n === !1 || St(n) ? n : void 0,
      animate: St(s) ? s : void 0
    }
  }
  return t.inherit !== !1 ? e : {}
}

function so(t) {
  const {
    initial: e,
    animate: n
  } = no(t, T.useContext($t));
  return T.useMemo(() => ({
    initial: e,
    animate: n
  }), [an(e), an(n)])
}

function an(t) {
  return Array.isArray(t) ? t.join(" ") : t
}
const ln = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
  },
  ft = {};
for (const t in ln) ft[t] = {
  isEnabled: e => ln[t].some(n => !!e[n])
};

function io(t) {
  for (const e in t) ft[e] = {
    ...ft[e],
    ...t[e]
  }
}
const Be = T.createContext({}),
  oo = Symbol.for("motionComponentSymbol"),
  L = t => t;
let pe = L;

function ro({
  preloadedFeatures: t,
  createVisualElement: e,
  useRender: n,
  useVisualState: s,
  Component: i
}) {
  t && io(t);

  function r(a, l) {
    let u;
    const h = {
        ...T.useContext(Me),
        ...a,
        layoutId: ao(a)
      },
      {
        isStatic: c
      } = h,
      f = so(a),
      d = s(a, c);
    if (!c && Re) {
      lo();
      const p = uo(h);
      u = p.MeasureLayout, f.visualElement = Ji(i, d, h, e, p.ProjectionNode)
    }
    return K.jsxs($t.Provider, {
      value: f,
      children: [u && f.visualElement ? K.jsx(u, {
        visualElement: f.visualElement,
        ...h
      }) : null, n(i, a, eo(d, f.visualElement, l), d, c, f.visualElement)]
    })
  }
  const o = T.forwardRef(r);
  return o[oo] = i, o
}

function ao({
  layoutId: t
}) {
  const e = T.useContext(Be).id;
  return e && t !== void 0 ? e + "-" + t : t
}

function lo(t, e) {
  T.useContext(Ss).strict
}

function uo(t) {
  const {
    drag: e,
    layout: n
  } = ft;
  if (!e && !n) return {};
  const s = {
    ...e,
    ...n
  };
  return {
    MeasureLayout: e != null && e.isEnabled(t) || n != null && n.isEnabled(t) ? s.MeasureLayout : void 0,
    ProjectionNode: s.ProjectionNode
  }
}

function co(t) {
  function e(s, i = {}) {
    return ro(t(s, i))
  }
  if (typeof Proxy > "u") return e;
  const n = new Map;
  return new Proxy(e, {
    get: (s, i) => (n.has(i) || n.set(i, e(i)), n.get(i))
  })
}
const ho = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

function ke(t) {
  return typeof t != "string" || t.includes("-") ? !1 : !!(ho.indexOf(t) > -1 || /[A-Z]/u.test(t))
}
const It = {};

function fo(t) {
  Object.assign(It, t)
}
const Ct = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
  Q = new Set(Ct);

function Ds(t, {
  layout: e,
  layoutId: n
}) {
  return Q.has(t) || t.startsWith("origin") || (e || n !== void 0) && (!!It[t] || t === "opacity")
}
const E = t => !!(t && t.getVelocity),
  Ms = (t, e) => e && typeof t == "number" ? e.transform(t) : t,
  Z = (t, e, n) => n > e ? e : n < t ? t : n,
  pt = {
    test: t => typeof t == "number",
    parse: parseFloat,
    transform: t => t
  },
  vt = {
    ...pt,
    transform: t => Z(0, 1, t)
  },
  Lt = {
    ...pt,
    default: 1
  },
  xt = t => Math.round(t * 1e5) / 1e5,
  je = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
  po = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
  mo = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;

function Dt(t) {
  return typeof t == "string"
}

function go(t) {
  return t == null
}
const Mt = t => ({
    test: e => Dt(e) && e.endsWith(t) && e.split(" ").length === 1,
    parse: parseFloat,
    transform: e => `${e}${t}`
  }),
  q = Mt("deg"),
  U = Mt("%"),
  P = Mt("px"),
  yo = Mt("vh"),
  vo = Mt("vw"),
  un = {
    ...U,
    parse: t => U.parse(t) / 100,
    transform: t => U.transform(t * 100)
  },
  cn = {
    ...pt,
    transform: Math.round
  },
  Oe = {
    borderWidth: P,
    borderTopWidth: P,
    borderRightWidth: P,
    borderBottomWidth: P,
    borderLeftWidth: P,
    borderRadius: P,
    radius: P,
    borderTopLeftRadius: P,
    borderTopRightRadius: P,
    borderBottomRightRadius: P,
    borderBottomLeftRadius: P,
    width: P,
    maxWidth: P,
    height: P,
    maxHeight: P,
    size: P,
    top: P,
    right: P,
    bottom: P,
    left: P,
    padding: P,
    paddingTop: P,
    paddingRight: P,
    paddingBottom: P,
    paddingLeft: P,
    margin: P,
    marginTop: P,
    marginRight: P,
    marginBottom: P,
    marginLeft: P,
    rotate: q,
    rotateX: q,
    rotateY: q,
    rotateZ: q,
    scale: Lt,
    scaleX: Lt,
    scaleY: Lt,
    scaleZ: Lt,
    skew: q,
    skewX: q,
    skewY: q,
    distance: P,
    translateX: P,
    translateY: P,
    translateZ: P,
    x: P,
    y: P,
    z: P,
    perspective: P,
    transformPerspective: P,
    opacity: vt,
    originX: un,
    originY: un,
    originZ: P,
    zIndex: cn,
    backgroundPositionX: P,
    backgroundPositionY: P,
    fillOpacity: vt,
    strokeOpacity: vt,
    numOctaves: cn
  },
  xo = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
  },
  To = Ct.length;

function Po(t, e, n) {
  let s = "",
    i = !0;
  for (let r = 0; r < To; r++) {
    const o = Ct[r],
      a = t[o];
    if (a === void 0) continue;
    let l = !0;
    if (typeof a == "number" ? l = a === (o.startsWith("scale") ? 1 : 0) : l = parseFloat(a) === 0, !l || n) {
      const u = Ms(a, Oe[o]);
      if (!l) {
        i = !1;
        const h = xo[o] || o;
        s += `${h}(${u}) `
      }
      n && (e[o] = u)
    }
  }
  return s = s.trim(), n ? s = n(e, i ? "" : s) : i && (s = "none"), s
}
const Rs = t => e => typeof e == "string" && e.startsWith(t),
  Es = Rs("--"),
  So = Rs("var(--"),
  Ie = t => So(t) ? Ao.test(t.split("/*")[0].trim()) : !1,
  Ao = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;

function Ne(t, e, n) {
  const {
    style: s,
    vars: i,
    transformOrigin: r
  } = t;
  let o = !1,
    a = !1;
  for (const l in e) {
    const u = e[l];
    if (Q.has(l)) {
      o = !0;
      continue
    } else if (Es(l)) {
      i[l] = u;
      continue
    } else {
      const h = Ms(u, Oe[l]);
      l.startsWith("origin") ? (a = !0, r[l] = h) : s[l] = h
    }
  }
  if (e.transform || (o || n ? s.transform = Po(e, t.transform, n) : s.transform && (s.transform = "none")), a) {
    const {
      originX: l = "50%",
      originY: u = "50%",
      originZ: h = 0
    } = r;
    s.transformOrigin = `${l} ${u} ${h}`
  }
}
const Ue = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});

function Ls(t, e, n) {
  for (const s in e) !E(e[s]) && !Ds(s, n) && (t[s] = e[s])
}

function bo({
  transformTemplate: t
}, e) {
  return T.useMemo(() => {
    const n = Ue();
    return Ne(n, e, t), Object.assign({}, n.vars, n.style)
  }, [e])
}

function Vo(t, e) {
  const n = t.style || {},
    s = {};
  return Ls(s, n, t), Object.assign(s, bo(t, e)), s
}

function wo(t, e) {
  const n = {},
    s = Vo(t, e);
  return t.drag && t.dragListener !== !1 && (n.draggable = !1, s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none", s.touchAction = t.drag === !0 ? "none" : `pan-${t.drag==="x"?"y":"x"}`), t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (n.tabIndex = 0), n.style = s, n
}
const Co = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

function Nt(t) {
  return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || Co.has(t)
}
let Fs = t => !Nt(t);

function Do(t) {
  t && (Fs = e => e.startsWith("on") ? !Nt(e) : t(e))
}
try {
  Do(require("@emotion/is-prop-valid").default)
} catch {}

function Mo(t, e, n) {
  const s = {};
  for (const i in t) i === "values" && typeof t.values == "object" || (Fs(i) || n === !0 && Nt(i) || !e && !Nt(i) || t.draggable && i.startsWith("onDrag")) && (s[i] = t[i]);
  return s
}

function hn(t, e, n) {
  return typeof t == "string" ? t : P.transform(e + n * t)
}

function Ro(t, e, n) {
  const s = hn(e, t.x, t.width),
    i = hn(n, t.y, t.height);
  return `${s} ${i}`
}
const Eo = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
  },
  Lo = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
  };

function Fo(t, e, n = 1, s = 0, i = !0) {
  t.pathLength = 1;
  const r = i ? Eo : Lo;
  t[r.offset] = P.transform(-s);
  const o = P.transform(e),
    a = P.transform(n);
  t[r.array] = `${o} ${a}`
}

function We(t, {
  attrX: e,
  attrY: n,
  attrScale: s,
  originX: i,
  originY: r,
  pathLength: o,
  pathSpacing: a = 1,
  pathOffset: l = 0,
  ...u
}, h, c) {
  if (Ne(t, u, c), h) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
    return
  }
  t.attrs = t.style, t.style = {};
  const {
    attrs: f,
    style: d,
    dimensions: p
  } = t;
  f.transform && (p && (d.transform = f.transform), delete f.transform), p && (i !== void 0 || r !== void 0 || d.transform) && (d.transformOrigin = Ro(p, i !== void 0 ? i : .5, r !== void 0 ? r : .5)), e !== void 0 && (f.x = e), n !== void 0 && (f.y = n), s !== void 0 && (f.scale = s), o !== void 0 && Fo(f, o, a, l, !1)
}
const Bs = () => ({
    ...Ue(),
    attrs: {}
  }),
  _e = t => typeof t == "string" && t.toLowerCase() === "svg";

function Bo(t, e, n, s) {
  const i = T.useMemo(() => {
    const r = Bs();
    return We(r, e, _e(s), t.transformTemplate), {
      ...r.attrs,
      style: {
        ...r.style
      }
    }
  }, [e]);
  if (t.style) {
    const r = {};
    Ls(r, t.style, t), i.style = {
      ...r,
      ...i.style
    }
  }
  return i
}

function ko(t = !1) {
  return (n, s, i, {
    latestValues: r
  }, o) => {
    const l = (ke(n) ? Bo : wo)(s, r, o, n),
      u = Mo(s, typeof n == "string", t),
      h = n !== T.Fragment ? {
        ...u,
        ...l,
        ref: i
      } : {},
      {
        children: c
      } = s,
      f = T.useMemo(() => E(c) ? c.get() : c, [c]);
    return T.createElement(n, {
      ...h,
      children: f
    })
  }
}

function ks(t, {
  style: e,
  vars: n
}, s, i) {
  Object.assign(t.style, e, i && i.getProjectionStyles(s));
  for (const r in n) t.style.setProperty(r, n[r])
}
const js = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

function Os(t, e, n, s) {
  ks(t, e, void 0, s);
  for (const i in e.attrs) t.setAttribute(js.has(i) ? i : zt(i), e.attrs[i])
}

function Ke(t, e, n) {
  var s;
  const {
    style: i
  } = t, r = {};
  for (const o in i)(E(i[o]) || e.style && E(e.style[o]) || Ds(o, t) || ((s = n == null ? void 0 : n.getValue(o)) === null || s === void 0 ? void 0 : s.liveStyle) !== void 0) && (r[o] = i[o]);
  return n && i && typeof i.willChange == "string" && (n.applyWillChange = !1), r
}

function Is(t, e, n) {
  const s = Ke(t, e, n);
  for (const i in t)
    if (E(t[i]) || E(e[i])) {
      const r = Ct.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
      s[r] = t[i]
    } return s
}

function fn(t) {
  const e = [{}, {}];
  return t == null || t.values.forEach((n, s) => {
    e[0][s] = n.get(), e[1][s] = n.getVelocity()
  }), e
}

function $e(t, e, n, s) {
  if (typeof e == "function") {
    const [i, r] = fn(s);
    e = e(n !== void 0 ? n : t.custom, i, r)
  }
  if (typeof e == "string" && (e = t.variants && t.variants[e]), typeof e == "function") {
    const [i, r] = fn(s);
    e = e(n !== void 0 ? n : t.custom, i, r)
  }
  return e
}

function Ge(t) {
  const e = T.useRef(null);
  return e.current === null && (e.current = t()), e.current
}
const me = t => Array.isArray(t),
  jo = t => !!(t && typeof t == "object" && t.mix && t.toValue),
  Oo = t => me(t) ? t[t.length - 1] || 0 : t;

function kt(t) {
  const e = E(t) ? t.get() : t;
  return jo(e) ? e.toValue() : e
}
const Ns = new Set(["opacity", "clipPath", "filter", "transform"]);

function Us(t) {
  if (Q.has(t)) return "transform";
  if (Ns.has(t)) return zt(t)
}

function Xt(t, e) {
  t.indexOf(e) === -1 && t.push(e)
}

function Yt(t, e) {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1)
}

function Io({
  applyWillChange: t = !1,
  scrapeMotionValuesFromProps: e,
  createRenderState: n,
  onMount: s
}, i, r, o, a) {
  const l = {
    latestValues: Uo(i, r, o, a ? !1 : t, e),
    renderState: n()
  };
  return s && (l.mount = u => s(i, u, l)), l
}
const Ws = t => (e, n) => {
  const s = T.useContext($t),
    i = T.useContext(Gt),
    r = () => Io(t, e, s, i, n);
  return n ? r() : Ge(r)
};

function No(t, e) {
  const n = Us(e);
  n && Xt(t, n)
}

function dn(t, e, n) {
  const s = Array.isArray(e) ? e : [e];
  for (let i = 0; i < s.length; i++) {
    const r = $e(t, s[i]);
    if (r) {
      const {
        transitionEnd: o,
        transition: a,
        ...l
      } = r;
      n(l, o)
    }
  }
}

function Uo(t, e, n, s, i) {
  var r;
  const o = {},
    a = [],
    l = s && ((r = t.style) === null || r === void 0 ? void 0 : r.willChange) === void 0,
    u = i(t, {});
  for (const x in u) o[x] = kt(u[x]);
  let {
    initial: h,
    animate: c
  } = t;
  const f = Ht(t),
    d = Cs(t);
  e && d && !f && t.inherit !== !1 && (h === void 0 && (h = e.initial), c === void 0 && (c = e.animate));
  let p = n ? n.initial === !1 : !1;
  p = p || h === !1;
  const v = p ? c : h;
  return v && typeof v != "boolean" && !At(v) && dn(t, v, (x, g) => {
    for (const y in x) {
      let m = x[y];
      if (Array.isArray(m)) {
        const S = p ? m.length - 1 : 0;
        m = m[S]
      }
      m !== null && (o[y] = m)
    }
    for (const y in g) o[y] = g[y]
  }), l && (c && h !== !1 && !At(c) && dn(t, c, x => {
    for (const g in x) No(a, g)
  }), a.length && (o.willChange = a.join(","))), o
}
const {
  schedule: V,
  cancel: Y,
  state: M,
  steps: ee
} = bs(typeof requestAnimationFrame < "u" ? requestAnimationFrame : L, !0), Wo = {
  useVisualState: Ws({
    scrapeMotionValuesFromProps: Is,
    createRenderState: Bs,
    onMount: (t, e, {
      renderState: n,
      latestValues: s
    }) => {
      V.read(() => {
        try {
          n.dimensions = typeof e.getBBox == "function" ? e.getBBox() : e.getBoundingClientRect()
        } catch {
          n.dimensions = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
          }
        }
      }), V.render(() => {
        We(n, s, _e(e.tagName), t.transformTemplate), Os(e, n)
      })
    }
  })
}, _o = {
  useVisualState: Ws({
    applyWillChange: !0,
    scrapeMotionValuesFromProps: Ke,
    createRenderState: Ue
  })
};

function Ko(t, {
  forwardMotionProps: e = !1
}, n, s) {
  return {
    ...ke(t) ? Wo : _o,
    preloadedFeatures: n,
    useRender: ko(e),
    createVisualElement: s,
    Component: t
  }
}

function _(t, e, n, s = {
  passive: !0
}) {
  return t.addEventListener(e, n, s), () => t.removeEventListener(e, n)
}
const _s = t => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== !1;

function qt(t, e = "page") {
  return {
    point: {
      x: t[`${e}X`],
      y: t[`${e}Y`]
    }
  }
}
const $o = t => e => _s(e) && t(e, qt(e));

function $(t, e, n, s) {
  return _(t, e, $o(n), s)
}
const Go = (t, e) => n => e(t(n)),
  G = (...t) => t.reduce(Go);

function Ks(t) {
  let e = null;
  return () => {
    const n = () => {
      e = null
    };
    return e === null ? (e = t, n) : !1
  }
}
const pn = Ks("dragHorizontal"),
  mn = Ks("dragVertical");

function $s(t) {
  let e = !1;
  if (t === "y") e = mn();
  else if (t === "x") e = pn();
  else {
    const n = pn(),
      s = mn();
    n && s ? e = () => {
      n(), s()
    } : (n && n(), s && s())
  }
  return e
}

function Gs() {
  const t = $s(!0);
  return t ? (t(), !1) : !0
}
class tt {
  constructor(e) {
    this.isMounted = !1, this.node = e
  }
  update() {}
}

function gn(t, e) {
  const n = e ? "pointerenter" : "pointerleave",
    s = e ? "onHoverStart" : "onHoverEnd",
    i = (r, o) => {
      if (r.pointerType === "touch" || Gs()) return;
      const a = t.getProps();
      t.animationState && a.whileHover && t.animationState.setActive("whileHover", e);
      const l = a[s];
      l && V.postRender(() => l(r, o))
    };
  return $(t.current, n, i, {
    passive: !t.getProps()[s]
  })
}
class zo extends tt {
  mount() {
    this.unmount = G(gn(this.node, !0), gn(this.node, !1))
  }
  unmount() {}
}
class Ho extends tt {
  constructor() {
    super(...arguments), this.isActive = !1
  }
  onFocus() {
    let e = !1;
    try {
      e = this.node.current.matches(":focus-visible")
    } catch {
      e = !0
    }!e || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
  }
  mount() {
    this.unmount = G(_(this.node.current, "focus", () => this.onFocus()), _(this.node.current, "blur", () => this.onBlur()))
  }
  unmount() {}
}
const zs = (t, e) => e ? t === e ? !0 : zs(t, e.parentElement) : !1;

function ne(t, e) {
  if (!e) return;
  const n = new PointerEvent("pointer" + t);
  e(n, qt(n))
}
class Xo extends tt {
  constructor() {
    super(...arguments), this.removeStartListeners = L, this.removeEndListeners = L, this.removeAccessibleListeners = L, this.startPointerPress = (e, n) => {
      if (this.isPressing) return;
      this.removeEndListeners();
      const s = this.node.getProps(),
        r = $(window, "pointerup", (a, l) => {
          if (!this.checkPressEnd()) return;
          const {
            onTap: u,
            onTapCancel: h,
            globalTapTarget: c
          } = this.node.getProps(), f = !c && !zs(this.node.current, a.target) ? h : u;
          f && V.update(() => f(a, l))
        }, {
          passive: !(s.onTap || s.onPointerUp)
        }),
        o = $(window, "pointercancel", (a, l) => this.cancelPress(a, l), {
          passive: !(s.onTapCancel || s.onPointerCancel)
        });
      this.removeEndListeners = G(r, o), this.startPress(e, n)
    }, this.startAccessiblePress = () => {
      const e = r => {
          if (r.key !== "Enter" || this.isPressing) return;
          const o = a => {
            a.key !== "Enter" || !this.checkPressEnd() || ne("up", (l, u) => {
              const {
                onTap: h
              } = this.node.getProps();
              h && V.postRender(() => h(l, u))
            })
          };
          this.removeEndListeners(), this.removeEndListeners = _(this.node.current, "keyup", o), ne("down", (a, l) => {
            this.startPress(a, l)
          })
        },
        n = _(this.node.current, "keydown", e),
        s = () => {
          this.isPressing && ne("cancel", (r, o) => this.cancelPress(r, o))
        },
        i = _(this.node.current, "blur", s);
      this.removeAccessibleListeners = G(n, i)
    }
  }
  startPress(e, n) {
    this.isPressing = !0;
    const {
      onTapStart: s,
      whileTap: i
    } = this.node.getProps();
    i && this.node.animationState && this.node.animationState.setActive("whileTap", !0), s && V.postRender(() => s(e, n))
  }
  checkPressEnd() {
    return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !Gs()
  }
  cancelPress(e, n) {
    if (!this.checkPressEnd()) return;
    const {
      onTapCancel: s
    } = this.node.getProps();
    s && V.postRender(() => s(e, n))
  }
  mount() {
    const e = this.node.getProps(),
      n = $(e.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
        passive: !(e.onTapStart || e.onPointerStart)
      }),
      s = _(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = G(n, s)
  }
  unmount() {
    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners()
  }
}
const ge = new WeakMap,
  se = new WeakMap,
  Yo = t => {
    const e = ge.get(t.target);
    e && e(t)
  },
  qo = t => {
    t.forEach(Yo)
  };

function Zo({
  root: t,
  ...e
}) {
  const n = t || document;
  se.has(n) || se.set(n, {});
  const s = se.get(n),
    i = JSON.stringify(e);
  return s[i] || (s[i] = new IntersectionObserver(qo, {
    root: t,
    ...e
  })), s[i]
}

function Jo(t, e, n) {
  const s = Zo(e);
  return ge.set(t, n), s.observe(t), () => {
    ge.delete(t), s.unobserve(t)
  }
}
const Qo = {
  some: 0,
  all: 1
};
class tr extends tt {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1
  }
  startObserver() {
    this.unmount();
    const {
      viewport: e = {}
    } = this.node.getProps(), {
      root: n,
      margin: s,
      amount: i = "some",
      once: r
    } = e, o = {
      root: n ? n.current : void 0,
      rootMargin: s,
      threshold: typeof i == "number" ? i : Qo[i]
    }, a = l => {
      const {
        isIntersecting: u
      } = l;
      if (this.isInView === u || (this.isInView = u, r && !u && this.hasEnteredView)) return;
      u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
      const {
        onViewportEnter: h,
        onViewportLeave: c
      } = this.node.getProps(), f = u ? h : c;
      f && f(l)
    };
    return Jo(this.node.current, o, a)
  }
  mount() {
    this.startObserver()
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const {
      props: e,
      prevProps: n
    } = this.node;
    ["amount", "margin", "root"].some(er(e, n)) && this.startObserver()
  }
  unmount() {}
}

function er({
  viewport: t = {}
}, {
  viewport: e = {}
} = {}) {
  return n => t[n] !== e[n]
}
const nr = {
  inView: {
    Feature: tr
  },
  tap: {
    Feature: Xo
  },
  focus: {
    Feature: Ho
  },
  hover: {
    Feature: zo
  }
};

function Hs(t, e) {
  if (!Array.isArray(e)) return !1;
  const n = e.length;
  if (n !== t.length) return !1;
  for (let s = 0; s < n; s++)
    if (e[s] !== t[s]) return !1;
  return !0
}

function Zt(t, e, n) {
  const s = t.getProps();
  return $e(s, e, n !== void 0 ? n : s.custom, t)
}
const z = t => t * 1e3,
  H = t => t / 1e3,
  sr = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
  },
  ir = t => ({
    type: "spring",
    stiffness: 550,
    damping: t === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
  }),
  or = {
    type: "keyframes",
    duration: .8
  },
  rr = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
  },
  ar = (t, {
    keyframes: e
  }) => e.length > 2 ? or : Q.has(t) ? t.startsWith("scale") ? ir(e[1]) : sr : rr;

function lr({
  when: t,
  delay: e,
  delayChildren: n,
  staggerChildren: s,
  staggerDirection: i,
  repeat: r,
  repeatType: o,
  repeatDelay: a,
  from: l,
  elapsed: u,
  ...h
}) {
  return !!Object.keys(h).length
}

function ze(t, e) {
  return t[e] || t.default || t
}
const ur = t => t !== null;

function Jt(t, {
  repeat: e,
  repeatType: n = "loop"
}, s) {
  const i = t.filter(ur),
    r = e && n !== "loop" && e % 2 === 1 ? 0 : i.length - 1;
  return !r || s === void 0 ? i[r] : s
}
const Xs = t => /^0[^.\s]+$/u.test(t);

function cr(t) {
  return typeof t == "number" ? t === 0 : t !== null ? t === "none" || t === "0" || Xs(t) : !0
}
const Ys = t => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),
  hr = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;

function fr(t) {
  const e = hr.exec(t);
  if (!e) return [, ];
  const [, n, s, i] = e;
  return [`--${n??s}`, i]
}

function qs(t, e, n = 1) {
  const [s, i] = fr(t);
  if (!s) return;
  const r = window.getComputedStyle(e).getPropertyValue(s);
  if (r) {
    const o = r.trim();
    return Ys(o) ? parseFloat(o) : o
  }
  return Ie(i) ? qs(i, e, n + 1) : i
}
const dr = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"]),
  yn = t => t === pt || t === P,
  vn = (t, e) => parseFloat(t.split(", ")[e]),
  xn = (t, e) => (n, {
    transform: s
  }) => {
    if (s === "none" || !s) return 0;
    const i = s.match(/^matrix3d\((.+)\)$/u);
    if (i) return vn(i[1], e);
    {
      const r = s.match(/^matrix\((.+)\)$/u);
      return r ? vn(r[1], t) : 0
    }
  },
  pr = new Set(["x", "y", "z"]),
  mr = Ct.filter(t => !pr.has(t));

function gr(t) {
  const e = [];
  return mr.forEach(n => {
    const s = t.getValue(n);
    s !== void 0 && (e.push([n, s.get()]), s.set(n.startsWith("scale") ? 1 : 0))
  }), e
}
const dt = {
  width: ({
    x: t
  }, {
    paddingLeft: e = "0",
    paddingRight: n = "0"
  }) => t.max - t.min - parseFloat(e) - parseFloat(n),
  height: ({
    y: t
  }, {
    paddingTop: e = "0",
    paddingBottom: n = "0"
  }) => t.max - t.min - parseFloat(e) - parseFloat(n),
  top: (t, {
    top: e
  }) => parseFloat(e),
  left: (t, {
    left: e
  }) => parseFloat(e),
  bottom: ({
    y: t
  }, {
    top: e
  }) => parseFloat(e) + (t.max - t.min),
  right: ({
    x: t
  }, {
    left: e
  }) => parseFloat(e) + (t.max - t.min),
  x: xn(4, 13),
  y: xn(5, 14)
};
dt.translateX = dt.x;
dt.translateY = dt.y;
const Zs = t => e => e.test(t),
  yr = {
    test: t => t === "auto",
    parse: t => t
  },
  Js = [pt, P, U, q, vo, yo, yr],
  Tn = t => Js.find(Zs(t)),
  ot = new Set;
let ye = !1,
  ve = !1;

function Qs() {
  if (ve) {
    const t = Array.from(ot).filter(s => s.needsMeasurement),
      e = new Set(t.map(s => s.element)),
      n = new Map;
    e.forEach(s => {
      const i = gr(s);
      i.length && (n.set(s, i), s.render())
    }), t.forEach(s => s.measureInitialState()), e.forEach(s => {
      s.render();
      const i = n.get(s);
      i && i.forEach(([r, o]) => {
        var a;
        (a = s.getValue(r)) === null || a === void 0 || a.set(o)
      })
    }), t.forEach(s => s.measureEndState()), t.forEach(s => {
      s.suspendedScrollY !== void 0 && window.scrollTo(0, s.suspendedScrollY)
    })
  }
  ve = !1, ye = !1, ot.forEach(t => t.complete()), ot.clear()
}

function ti() {
  ot.forEach(t => {
    t.readKeyframes(), t.needsMeasurement && (ve = !0)
  })
}

function vr() {
  ti(), Qs()
}
class He {
  constructor(e, n, s, i, r, o = !1) {
    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...e], this.onComplete = n, this.name = s, this.motionValue = i, this.element = r, this.isAsync = o
  }
  scheduleResolve() {
    this.isScheduled = !0, this.isAsync ? (ot.add(this), ye || (ye = !0, V.read(ti), V.resolveKeyframes(Qs))) : (this.readKeyframes(), this.complete())
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: e,
      name: n,
      element: s,
      motionValue: i
    } = this;
    for (let r = 0; r < e.length; r++)
      if (e[r] === null)
        if (r === 0) {
          const o = i == null ? void 0 : i.get(),
            a = e[e.length - 1];
          if (o !== void 0) e[0] = o;
          else if (s && n) {
            const l = s.readValue(n, a);
            l != null && (e[0] = l)
          }
          e[0] === void 0 && (e[0] = a), i && o === void 0 && i.set(e[0])
        } else e[r] = e[r - 1]
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), ot.delete(this)
  }
  cancel() {
    this.isComplete || (this.isScheduled = !1, ot.delete(this))
  }
  resume() {
    this.isComplete || this.scheduleResolve()
  }
}
const Xe = (t, e) => n => !!(Dt(n) && mo.test(n) && n.startsWith(t) || e && !go(n) && Object.prototype.hasOwnProperty.call(n, e)),
  ei = (t, e, n) => s => {
    if (!Dt(s)) return s;
    const [i, r, o, a] = s.match(je);
    return {
      [t]: parseFloat(i),
      [e]: parseFloat(r),
      [n]: parseFloat(o),
      alpha: a !== void 0 ? parseFloat(a) : 1
    }
  },
  xr = t => Z(0, 255, t),
  ie = {
    ...pt,
    transform: t => Math.round(xr(t))
  },
  it = {
    test: Xe("rgb", "red"),
    parse: ei("red", "green", "blue"),
    transform: ({
      red: t,
      green: e,
      blue: n,
      alpha: s = 1
    }) => "rgba(" + ie.transform(t) + ", " + ie.transform(e) + ", " + ie.transform(n) + ", " + xt(vt.transform(s)) + ")"
  };

function Tr(t) {
  let e = "",
    n = "",
    s = "",
    i = "";
  return t.length > 5 ? (e = t.substring(1, 3), n = t.substring(3, 5), s = t.substring(5, 7), i = t.substring(7, 9)) : (e = t.substring(1, 2), n = t.substring(2, 3), s = t.substring(3, 4), i = t.substring(4, 5), e += e, n += n, s += s, i += i), {
    red: parseInt(e, 16),
    green: parseInt(n, 16),
    blue: parseInt(s, 16),
    alpha: i ? parseInt(i, 16) / 255 : 1
  }
}
const xe = {
    test: Xe("#"),
    parse: Tr,
    transform: it.transform
  },
  lt = {
    test: Xe("hsl", "hue"),
    parse: ei("hue", "saturation", "lightness"),
    transform: ({
      hue: t,
      saturation: e,
      lightness: n,
      alpha: s = 1
    }) => "hsla(" + Math.round(t) + ", " + U.transform(xt(e)) + ", " + U.transform(xt(n)) + ", " + xt(vt.transform(s)) + ")"
  },
  R = {
    test: t => it.test(t) || xe.test(t) || lt.test(t),
    parse: t => it.test(t) ? it.parse(t) : lt.test(t) ? lt.parse(t) : xe.parse(t),
    transform: t => Dt(t) ? t : t.hasOwnProperty("red") ? it.transform(t) : lt.transform(t)
  };

function Pr(t) {
  var e, n;
  return isNaN(t) && Dt(t) && (((e = t.match(je)) === null || e === void 0 ? void 0 : e.length) || 0) + (((n = t.match(po)) === null || n === void 0 ? void 0 : n.length) || 0) > 0
}
const ni = "number",
  si = "color",
  Sr = "var",
  Ar = "var(",
  Pn = "${}",
  br = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

function bt(t) {
  const e = t.toString(),
    n = [],
    s = {
      color: [],
      number: [],
      var: []
    },
    i = [];
  let r = 0;
  const a = e.replace(br, l => (R.test(l) ? (s.color.push(r), i.push(si), n.push(R.parse(l))) : l.startsWith(Ar) ? (s.var.push(r), i.push(Sr), n.push(l)) : (s.number.push(r), i.push(ni), n.push(parseFloat(l))), ++r, Pn)).split(Pn);
  return {
    values: n,
    split: a,
    indexes: s,
    types: i
  }
}

function ii(t) {
  return bt(t).values
}

function oi(t) {
  const {
    split: e,
    types: n
  } = bt(t), s = e.length;
  return i => {
    let r = "";
    for (let o = 0; o < s; o++)
      if (r += e[o], i[o] !== void 0) {
        const a = n[o];
        a === ni ? r += xt(i[o]) : a === si ? r += R.transform(i[o]) : r += i[o]
      } return r
  }
}
const Vr = t => typeof t == "number" ? 0 : t;

function wr(t) {
  const e = ii(t);
  return oi(t)(e.map(Vr))
}
const J = {
    test: Pr,
    parse: ii,
    createTransformer: oi,
    getAnimatableNone: wr
  },
  Cr = new Set(["brightness", "contrast", "saturate", "opacity"]);

function Dr(t) {
  const [e, n] = t.slice(0, -1).split("(");
  if (e === "drop-shadow") return t;
  const [s] = n.match(je) || [];
  if (!s) return t;
  const i = n.replace(s, "");
  let r = Cr.has(e) ? 1 : 0;
  return s !== n && (r *= 100), e + "(" + r + i + ")"
}
const Mr = /\b([a-z-]*)\(.*?\)/gu,
  Te = {
    ...J,
    getAnimatableNone: t => {
      const e = t.match(Mr);
      return e ? e.map(Dr).join(" ") : t
    }
  },
  Rr = {
    ...Oe,
    color: R,
    backgroundColor: R,
    outlineColor: R,
    fill: R,
    stroke: R,
    borderColor: R,
    borderTopColor: R,
    borderRightColor: R,
    borderBottomColor: R,
    borderLeftColor: R,
    filter: Te,
    WebkitFilter: Te
  },
  Ye = t => Rr[t];

function ri(t, e) {
  let n = Ye(t);
  return n !== Te && (n = J), n.getAnimatableNone ? n.getAnimatableNone(e) : void 0
}
const Er = new Set(["auto", "none", "0"]);

function Lr(t, e, n) {
  let s = 0,
    i;
  for (; s < t.length && !i;) {
    const r = t[s];
    typeof r == "string" && !Er.has(r) && bt(r).values.length && (i = t[s]), s++
  }
  if (i && n)
    for (const r of e) t[r] = ri(n, i)
}
class ai extends He {
  constructor(e, n, s, i, r) {
    super(e, n, s, i, r, !0)
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: e,
      element: n,
      name: s
    } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let l = 0; l < e.length; l++) {
      let u = e[l];
      if (typeof u == "string" && (u = u.trim(), Ie(u))) {
        const h = qs(u, n.current);
        h !== void 0 && (e[l] = h), l === e.length - 1 && (this.finalKeyframe = u)
      }
    }
    if (this.resolveNoneKeyframes(), !dr.has(s) || e.length !== 2) return;
    const [i, r] = e, o = Tn(i), a = Tn(r);
    if (o !== a)
      if (yn(o) && yn(a))
        for (let l = 0; l < e.length; l++) {
          const u = e[l];
          typeof u == "string" && (e[l] = parseFloat(u))
        } else this.needsMeasurement = !0
  }
  resolveNoneKeyframes() {
    const {
      unresolvedKeyframes: e,
      name: n
    } = this, s = [];
    for (let i = 0; i < e.length; i++) cr(e[i]) && s.push(i);
    s.length && Lr(e, s, n)
  }
  measureInitialState() {
    const {
      element: e,
      unresolvedKeyframes: n,
      name: s
    } = this;
    if (!e || !e.current) return;
    s === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = dt[s](e.measureViewportBox(), window.getComputedStyle(e.current)), n[0] = this.measuredOrigin;
    const i = n[n.length - 1];
    i !== void 0 && e.getValue(s, i).jump(i, !1)
  }
  measureEndState() {
    var e;
    const {
      element: n,
      name: s,
      unresolvedKeyframes: i
    } = this;
    if (!n || !n.current) return;
    const r = n.getValue(s);
    r && r.jump(this.measuredOrigin, !1);
    const o = i.length - 1,
      a = i[o];
    i[o] = dt[s](n.measureViewportBox(), window.getComputedStyle(n.current)), a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a), !((e = this.removedTransforms) === null || e === void 0) && e.length && this.removedTransforms.forEach(([l, u]) => {
      n.getValue(l).set(u)
    }), this.resolveNoneKeyframes()
  }
}

function li(t) {
  let e;
  return () => (e === void 0 && (e = t()), e)
}
let jt;

function Fr() {
  jt = void 0
}
const X = {
    now: () => (jt === void 0 && X.set(M.isProcessing || Yi.useManualTiming ? M.timestamp : performance.now()), jt),
    set: t => {
      jt = t, queueMicrotask(Fr)
    }
  },
  Sn = (t, e) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && (J.test(t) || t === "0") && !t.startsWith("url("));

function Br(t) {
  const e = t[0];
  if (t.length === 1) return !0;
  for (let n = 0; n < t.length; n++)
    if (t[n] !== e) return !0
}

function kr(t, e, n, s) {
  const i = t[0];
  if (i === null) return !1;
  if (e === "display" || e === "visibility") return !0;
  const r = t[t.length - 1],
    o = Sn(i, e),
    a = Sn(r, e);
  return !o || !a ? !1 : Br(t) || n === "spring" && s
}
const jr = 40;
class ui {
  constructor({
    autoplay: e = !0,
    delay: n = 0,
    type: s = "keyframes",
    repeat: i = 0,
    repeatDelay: r = 0,
    repeatType: o = "loop",
    ...a
  }) {
    this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = X.now(), this.options = {
      autoplay: e,
      delay: n,
      type: s,
      repeat: i,
      repeatDelay: r,
      repeatType: o,
      ...a
    }, this.updateFinishedPromise()
  }
  calcStartTime() {
    return this.resolvedAt ? this.resolvedAt - this.createdAt > jr ? this.resolvedAt : this.createdAt : this.createdAt
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && vr(), this._resolved
  }
  onKeyframesResolved(e, n) {
    this.resolvedAt = X.now(), this.hasAttemptedResolve = !0;
    const {
      name: s,
      type: i,
      velocity: r,
      delay: o,
      onComplete: a,
      onUpdate: l,
      isGenerator: u
    } = this.options;
    if (!u && !kr(e, s, i, r))
      if (o) this.options.duration = 0;
      else {
        l == null || l(Jt(e, this.options, n)), a == null || a(), this.resolveFinishedPromise();
        return
      } const h = this.initPlayback(e, n);
    h !== !1 && (this._resolved = {
      keyframes: e,
      finalKeyframe: n,
      ...h
    }, this.onPostResolved())
  }
  onPostResolved() {}
  then(e, n) {
    return this.currentFinishedPromise.then(e, n)
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise(e => {
      this.resolveFinishedPromise = e
    })
  }
}

function ci(t, e) {
  return e ? t * (1e3 / e) : 0
}
const Or = 5;

function hi(t, e, n) {
  const s = Math.max(e - Or, 0);
  return ci(n - t(s), e - s)
}
const oe = .001,
  Ir = .01,
  Nr = 10,
  Ur = .05,
  Wr = 1;

function _r({
  duration: t = 800,
  bounce: e = .25,
  velocity: n = 0,
  mass: s = 1
}) {
  let i, r, o = 1 - e;
  o = Z(Ur, Wr, o), t = Z(Ir, Nr, H(t)), o < 1 ? (i = u => {
    const h = u * o,
      c = h * t,
      f = h - n,
      d = Pe(u, o),
      p = Math.exp(-c);
    return oe - f / d * p
  }, r = u => {
    const c = u * o * t,
      f = c * n + n,
      d = Math.pow(o, 2) * Math.pow(u, 2) * t,
      p = Math.exp(-c),
      v = Pe(Math.pow(u, 2), o);
    return (-i(u) + oe > 0 ? -1 : 1) * ((f - d) * p) / v
  }) : (i = u => {
    const h = Math.exp(-u * t),
      c = (u - n) * t + 1;
    return -oe + h * c
  }, r = u => {
    const h = Math.exp(-u * t),
      c = (n - u) * (t * t);
    return h * c
  });
  const a = 5 / t,
    l = $r(i, r, a);
  if (t = z(t), isNaN(l)) return {
    stiffness: 100,
    damping: 10,
    duration: t
  };
  {
    const u = Math.pow(l, 2) * s;
    return {
      stiffness: u,
      damping: o * 2 * Math.sqrt(s * u),
      duration: t
    }
  }
}
const Kr = 12;

function $r(t, e, n) {
  let s = n;
  for (let i = 1; i < Kr; i++) s = s - t(s) / e(s);
  return s
}

function Pe(t, e) {
  return t * Math.sqrt(1 - e * e)
}
const Gr = ["duration", "bounce"],
  zr = ["stiffness", "damping", "mass"];

function An(t, e) {
  return e.some(n => t[n] !== void 0)
}

function Hr(t) {
  let e = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...t
  };
  if (!An(t, zr) && An(t, Gr)) {
    const n = _r(t);
    e = {
      ...e,
      ...n,
      mass: 1
    }, e.isResolvedFromDuration = !0
  }
  return e
}

function fi({
  keyframes: t,
  restDelta: e,
  restSpeed: n,
  ...s
}) {
  const i = t[0],
    r = t[t.length - 1],
    o = {
      done: !1,
      value: i
    },
    {
      stiffness: a,
      damping: l,
      mass: u,
      duration: h,
      velocity: c,
      isResolvedFromDuration: f
    } = Hr({
      ...s,
      velocity: -H(s.velocity || 0)
    }),
    d = c || 0,
    p = l / (2 * Math.sqrt(a * u)),
    v = r - i,
    x = H(Math.sqrt(a / u)),
    g = Math.abs(v) < 5;
  n || (n = g ? .01 : 2), e || (e = g ? .005 : .5);
  let y;
  if (p < 1) {
    const m = Pe(x, p);
    y = S => {
      const A = Math.exp(-p * x * S);
      return r - A * ((d + p * x * v) / m * Math.sin(m * S) + v * Math.cos(m * S))
    }
  } else if (p === 1) y = m => r - Math.exp(-x * m) * (v + (d + x * v) * m);
  else {
    const m = x * Math.sqrt(p * p - 1);
    y = S => {
      const A = Math.exp(-p * x * S),
        C = Math.min(m * S, 300);
      return r - A * ((d + p * x * v) * Math.sinh(C) + m * v * Math.cosh(C)) / m
    }
  }
  return {
    calculatedDuration: f && h || null,
    next: m => {
      const S = y(m);
      if (f) o.done = m >= h;
      else {
        let A = 0;
        p < 1 && (A = m === 0 ? z(d) : hi(y, m, S));
        const C = Math.abs(A) <= n,
          N = Math.abs(r - S) <= e;
        o.done = C && N
      }
      return o.value = o.done ? r : S, o
    }
  }
}

function bn({
  keyframes: t,
  velocity: e = 0,
  power: n = .8,
  timeConstant: s = 325,
  bounceDamping: i = 10,
  bounceStiffness: r = 500,
  modifyTarget: o,
  min: a,
  max: l,
  restDelta: u = .5,
  restSpeed: h
}) {
  const c = t[0],
    f = {
      done: !1,
      value: c
    },
    d = b => a !== void 0 && b < a || l !== void 0 && b > l,
    p = b => a === void 0 ? l : l === void 0 || Math.abs(a - b) < Math.abs(l - b) ? a : l;
  let v = n * e;
  const x = c + v,
    g = o === void 0 ? x : o(x);
  g !== x && (v = g - c);
  const y = b => -v * Math.exp(-b / s),
    m = b => g + y(b),
    S = b => {
      const k = y(b),
        j = m(b);
      f.done = Math.abs(k) <= u, f.value = f.done ? g : j
    };
  let A, C;
  const N = b => {
    d(f.value) && (A = b, C = fi({
      keyframes: [f.value, p(f.value)],
      velocity: hi(m, b, f.value),
      damping: i,
      stiffness: r,
      restDelta: u,
      restSpeed: h
    }))
  };
  return N(0), {
    calculatedDuration: null,
    next: b => {
      let k = !1;
      return !C && A === void 0 && (k = !0, S(b), N(b)), A !== void 0 && b >= A ? C.next(b - A) : (!k && S(b), f)
    }
  }
}
const di = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t,
  Xr = 1e-7,
  Yr = 12;

function qr(t, e, n, s, i) {
  let r, o, a = 0;
  do o = e + (n - e) / 2, r = di(o, s, i) - t, r > 0 ? n = o : e = o; while (Math.abs(r) > Xr && ++a < Yr);
  return o
}

function Rt(t, e, n, s) {
  if (t === e && n === s) return L;
  const i = r => qr(r, 0, 1, t, n);
  return r => r === 0 || r === 1 ? r : di(i(r), e, s)
}
const Zr = Rt(.42, 0, 1, 1),
  Jr = Rt(0, 0, .58, 1),
  pi = Rt(.42, 0, .58, 1),
  Qr = t => Array.isArray(t) && typeof t[0] != "number",
  mi = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
  gi = t => e => 1 - t(1 - e),
  qe = t => 1 - Math.sin(Math.acos(t)),
  yi = gi(qe),
  ta = mi(qe),
  vi = Rt(.33, 1.53, .69, .99),
  Ze = gi(vi),
  ea = mi(Ze),
  na = t => (t *= 2) < 1 ? .5 * Ze(t) : .5 * (2 - Math.pow(2, -10 * (t - 1))),
  Vn = {
    linear: L,
    easeIn: Zr,
    easeInOut: pi,
    easeOut: Jr,
    circIn: qe,
    circInOut: ta,
    circOut: yi,
    backIn: Ze,
    backInOut: ea,
    backOut: vi,
    anticipate: na
  },
  wn = t => {
    if (Array.isArray(t)) {
      pe(t.length === 4);
      const [e, n, s, i] = t;
      return Rt(e, n, s, i)
    } else if (typeof t == "string") return pe(Vn[t] !== void 0), Vn[t];
    return t
  },
  Vt = (t, e, n) => {
    const s = e - t;
    return s === 0 ? 1 : (n - t) / s
  },
  w = (t, e, n) => t + (e - t) * n;

function re(t, e, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
}

function sa({
  hue: t,
  saturation: e,
  lightness: n,
  alpha: s
}) {
  t /= 360, e /= 100, n /= 100;
  let i = 0,
    r = 0,
    o = 0;
  if (!e) i = r = o = n;
  else {
    const a = n < .5 ? n * (1 + e) : n + e - n * e,
      l = 2 * n - a;
    i = re(l, a, t + 1 / 3), r = re(l, a, t), o = re(l, a, t - 1 / 3)
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(r * 255),
    blue: Math.round(o * 255),
    alpha: s
  }
}

function Ut(t, e) {
  return n => n > 0 ? e : t
}
const ae = (t, e, n) => {
    const s = t * t,
      i = n * (e * e - s) + s;
    return i < 0 ? 0 : Math.sqrt(i)
  },
  ia = [xe, it, lt],
  oa = t => ia.find(e => e.test(t));

function Cn(t) {
  const e = oa(t);
  if (!e) return !1;
  let n = e.parse(t);
  return e === lt && (n = sa(n)), n
}
const Dn = (t, e) => {
    const n = Cn(t),
      s = Cn(e);
    if (!n || !s) return Ut(t, e);
    const i = {
      ...n
    };
    return r => (i.red = ae(n.red, s.red, r), i.green = ae(n.green, s.green, r), i.blue = ae(n.blue, s.blue, r), i.alpha = w(n.alpha, s.alpha, r), it.transform(i))
  },
  Se = new Set(["none", "hidden"]);

function ra(t, e) {
  return Se.has(t) ? n => n <= 0 ? t : e : n => n >= 1 ? e : t
}

function aa(t, e) {
  return n => w(t, e, n)
}

function Je(t) {
  return typeof t == "number" ? aa : typeof t == "string" ? Ie(t) ? Ut : R.test(t) ? Dn : ca : Array.isArray(t) ? xi : typeof t == "object" ? R.test(t) ? Dn : la : Ut
}

function xi(t, e) {
  const n = [...t],
    s = n.length,
    i = t.map((r, o) => Je(r)(r, e[o]));
  return r => {
    for (let o = 0; o < s; o++) n[o] = i[o](r);
    return n
  }
}

function la(t, e) {
  const n = {
      ...t,
      ...e
    },
    s = {};
  for (const i in n) t[i] !== void 0 && e[i] !== void 0 && (s[i] = Je(t[i])(t[i], e[i]));
  return i => {
    for (const r in s) n[r] = s[r](i);
    return n
  }
}

function ua(t, e) {
  var n;
  const s = [],
    i = {
      color: 0,
      var: 0,
      number: 0
    };
  for (let r = 0; r < e.values.length; r++) {
    const o = e.types[r],
      a = t.indexes[o][i[o]],
      l = (n = t.values[a]) !== null && n !== void 0 ? n : 0;
    s[r] = l, i[o]++
  }
  return s
}
const ca = (t, e) => {
  const n = J.createTransformer(e),
    s = bt(t),
    i = bt(e);
  return s.indexes.var.length === i.indexes.var.length && s.indexes.color.length === i.indexes.color.length && s.indexes.number.length >= i.indexes.number.length ? Se.has(t) && !i.values.length || Se.has(e) && !s.values.length ? ra(t, e) : G(xi(ua(s, i), i.values), n) : Ut(t, e)
};

function Ti(t, e, n) {
  return typeof t == "number" && typeof e == "number" && typeof n == "number" ? w(t, e, n) : Je(t)(t, e)
}

function ha(t, e, n) {
  const s = [],
    i = n || Ti,
    r = t.length - 1;
  for (let o = 0; o < r; o++) {
    let a = i(t[o], t[o + 1]);
    if (e) {
      const l = Array.isArray(e) ? e[o] || L : e;
      a = G(l, a)
    }
    s.push(a)
  }
  return s
}

function fa(t, e, {
  clamp: n = !0,
  ease: s,
  mixer: i
} = {}) {
  const r = t.length;
  if (pe(r === e.length), r === 1) return () => e[0];
  if (r === 2 && t[0] === t[1]) return () => e[1];
  t[0] > t[r - 1] && (t = [...t].reverse(), e = [...e].reverse());
  const o = ha(e, s, i),
    a = o.length,
    l = u => {
      let h = 0;
      if (a > 1)
        for (; h < t.length - 2 && !(u < t[h + 1]); h++);
      const c = Vt(t[h], t[h + 1], u);
      return o[h](c)
    };
  return n ? u => l(Z(t[0], t[r - 1], u)) : l
}

function da(t, e) {
  const n = t[t.length - 1];
  for (let s = 1; s <= e; s++) {
    const i = Vt(0, e, s);
    t.push(w(n, 1, i))
  }
}

function pa(t) {
  const e = [0];
  return da(e, t.length - 1), e
}

function ma(t, e) {
  return t.map(n => n * e)
}

function ga(t, e) {
  return t.map(() => e || pi).splice(0, t.length - 1)
}

function Wt({
  duration: t = 300,
  keyframes: e,
  times: n,
  ease: s = "easeInOut"
}) {
  const i = Qr(s) ? s.map(wn) : wn(s),
    r = {
      done: !1,
      value: e[0]
    },
    o = ma(n && n.length === e.length ? n : pa(e), t),
    a = fa(o, e, {
      ease: Array.isArray(i) ? i : ga(e, i)
    });
  return {
    calculatedDuration: t,
    next: l => (r.value = a(l), r.done = l >= t, r)
  }
}
const Mn = 2e4;

function ya(t) {
  let e = 0;
  const n = 50;
  let s = t.next(e);
  for (; !s.done && e < Mn;) e += n, s = t.next(e);
  return e >= Mn ? 1 / 0 : e
}
const va = t => {
    const e = ({
      timestamp: n
    }) => t(n);
    return {
      start: () => V.update(e, !0),
      stop: () => Y(e),
      now: () => M.isProcessing ? M.timestamp : X.now()
    }
  },
  xa = {
    decay: bn,
    inertia: bn,
    tween: Wt,
    keyframes: Wt,
    spring: fi
  },
  Ta = t => t / 100;
class Qe extends ui {
  constructor(e) {
    super(e), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
      if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle") return;
      this.teardown();
      const {
        onStop: l
      } = this.options;
      l && l()
    };
    const {
      name: n,
      motionValue: s,
      element: i,
      keyframes: r
    } = this.options, o = (i == null ? void 0 : i.KeyframeResolver) || He, a = (l, u) => this.onKeyframesResolved(l, u);
    this.resolver = new o(r, a, n, s, i), this.resolver.scheduleResolve()
  }
  initPlayback(e) {
    const {
      type: n = "keyframes",
      repeat: s = 0,
      repeatDelay: i = 0,
      repeatType: r,
      velocity: o = 0
    } = this.options, a = xa[n] || Wt;
    let l, u;
    a !== Wt && typeof e[0] != "number" && (l = G(Ta, Ti(e[0], e[1])), e = [0, 100]);
    const h = a({
      ...this.options,
      keyframes: e
    });
    r === "mirror" && (u = a({
      ...this.options,
      keyframes: [...e].reverse(),
      velocity: -o
    })), h.calculatedDuration === null && (h.calculatedDuration = ya(h));
    const {
      calculatedDuration: c
    } = h, f = c + i, d = f * (s + 1) - i;
    return {
      generator: h,
      mirroredGenerator: u,
      mapPercentToKeyframes: l,
      calculatedDuration: c,
      resolvedDuration: f,
      totalDuration: d
    }
  }
  onPostResolved() {
    const {
      autoplay: e = !0
    } = this.options;
    this.play(), this.pendingPlayState === "paused" || !e ? this.pause() : this.state = this.pendingPlayState
  }
  tick(e, n = !1) {
    const {
      resolved: s
    } = this;
    if (!s) {
      const {
        keyframes: b
      } = this.options;
      return {
        done: !0,
        value: b[b.length - 1]
      }
    }
    const {
      finalKeyframe: i,
      generator: r,
      mirroredGenerator: o,
      mapPercentToKeyframes: a,
      keyframes: l,
      calculatedDuration: u,
      totalDuration: h,
      resolvedDuration: c
    } = s;
    if (this.startTime === null) return r.next(0);
    const {
      delay: f,
      repeat: d,
      repeatType: p,
      repeatDelay: v,
      onUpdate: x
    } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - h / this.speed, this.startTime)), n ? this.currentTime = e : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(e - this.startTime) * this.speed;
    const g = this.currentTime - f * (this.speed >= 0 ? 1 : -1),
      y = this.speed >= 0 ? g < 0 : g > h;
    this.currentTime = Math.max(g, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = h);
    let m = this.currentTime,
      S = r;
    if (d) {
      const b = Math.min(this.currentTime, h) / c;
      let k = Math.floor(b),
        j = b % 1;
      !j && b >= 1 && (j = 1), j === 1 && k--, k = Math.min(k, d + 1), !!(k % 2) && (p === "reverse" ? (j = 1 - j, v && (j -= v / c)) : p === "mirror" && (S = o)), m = Z(0, 1, j) * c
    }
    const A = y ? {
      done: !1,
      value: l[0]
    } : S.next(m);
    a && (A.value = a(A.value));
    let {
      done: C
    } = A;
    !y && u !== null && (C = this.speed >= 0 ? this.currentTime >= h : this.currentTime <= 0);
    const N = this.holdTime === null && (this.state === "finished" || this.state === "running" && C);
    return N && i !== void 0 && (A.value = Jt(l, this.options, i)), x && x(A.value), N && this.finish(), A
  }
  get duration() {
    const {
      resolved: e
    } = this;
    return e ? H(e.calculatedDuration) : 0
  }
  get time() {
    return H(this.currentTime)
  }
  set time(e) {
    e = z(e), this.currentTime = e, this.holdTime !== null || this.speed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.speed)
  }
  get speed() {
    return this.playbackSpeed
  }
  set speed(e) {
    const n = this.playbackSpeed !== e;
    this.playbackSpeed = e, n && (this.time = H(this.currentTime))
  }
  play() {
    if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
      this.pendingPlayState = "running";
      return
    }
    if (this.isStopped) return;
    const {
      driver: e = va,
      onPlay: n,
      startTime: s
    } = this.options;
    this.driver || (this.driver = e(r => this.tick(r))), n && n();
    const i = this.driver.now();
    this.holdTime !== null ? this.startTime = i - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = i) : this.startTime = s ?? this.calcStartTime(), this.state === "finished" && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start()
  }
  pause() {
    var e;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return
    }
    this.state = "paused", this.holdTime = (e = this.currentTime) !== null && e !== void 0 ? e : 0
  }
  complete() {
    this.state !== "running" && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null
  }
  finish() {
    this.teardown(), this.state = "finished";
    const {
      onComplete: e
    } = this.options;
    e && e()
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise()
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel()
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0)
  }
  sample(e) {
    return this.startTime = 0, this.tick(e, !0)
  }
}
const Pi = t => Array.isArray(t) && typeof t[0] == "number";

function Si(t) {
  return !!(!t || typeof t == "string" && t in tn || Pi(t) || Array.isArray(t) && t.every(Si))
}
const gt = ([t, e, n, s]) => `cubic-bezier(${t}, ${e}, ${n}, ${s})`,
  tn = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: gt([0, .65, .55, 1]),
    circOut: gt([.55, 0, 1, .45]),
    backIn: gt([.31, .01, .66, -.59]),
    backOut: gt([.33, 1.53, .69, .99])
  };

function Pa(t) {
  return Ai(t) || tn.easeOut
}

function Ai(t) {
  if (t) return Pi(t) ? gt(t) : Array.isArray(t) ? t.map(Pa) : tn[t]
}

function Sa(t, e, n, {
  delay: s = 0,
  duration: i = 300,
  repeat: r = 0,
  repeatType: o = "loop",
  ease: a,
  times: l
} = {}) {
  const u = {
    [e]: n
  };
  l && (u.offset = l);
  const h = Ai(a);
  return Array.isArray(h) && (u.easing = h), t.animate(u, {
    delay: s,
    duration: i,
    easing: Array.isArray(h) ? "linear" : h,
    fill: "both",
    iterations: r + 1,
    direction: o === "reverse" ? "alternate" : "normal"
  })
}
const Aa = li(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  _t = 10,
  ba = 2e4;

function Va(t) {
  return t.type === "spring" || !Si(t.ease)
}

function wa(t, e) {
  const n = new Qe({
    ...e,
    keyframes: t,
    repeat: 0,
    delay: 0,
    isGenerator: !0
  });
  let s = {
    done: !1,
    value: t[0]
  };
  const i = [];
  let r = 0;
  for (; !s.done && r < ba;) s = n.sample(r), i.push(s.value), r += _t;
  return {
    times: void 0,
    keyframes: i,
    duration: r - _t,
    ease: "linear"
  }
}
class Rn extends ui {
  constructor(e) {
    super(e);
    const {
      name: n,
      motionValue: s,
      element: i,
      keyframes: r
    } = this.options;
    this.resolver = new ai(r, (o, a) => this.onKeyframesResolved(o, a), n, s, i), this.resolver.scheduleResolve()
  }
  initPlayback(e, n) {
    var s;
    let {
      duration: i = 300,
      times: r,
      ease: o,
      type: a,
      motionValue: l,
      name: u,
      startTime: h
    } = this.options;
    if (!(!((s = l.owner) === null || s === void 0) && s.current)) return !1;
    if (Va(this.options)) {
      const {
        onComplete: f,
        onUpdate: d,
        motionValue: p,
        element: v,
        ...x
      } = this.options, g = wa(e, x);
      e = g.keyframes, e.length === 1 && (e[1] = e[0]), i = g.duration, r = g.times, o = g.ease, a = "keyframes"
    }
    const c = Sa(l.owner.current, u, e, {
      ...this.options,
      duration: i,
      times: r,
      ease: o
    });
    return c.startTime = h ?? this.calcStartTime(), this.pendingTimeline ? (c.timeline = this.pendingTimeline, this.pendingTimeline = void 0) : c.onfinish = () => {
      const {
        onComplete: f
      } = this.options;
      l.set(Jt(e, this.options, n)), f && f(), this.cancel(), this.resolveFinishedPromise()
    }, {
      animation: c,
      duration: i,
      times: r,
      type: a,
      ease: o,
      keyframes: e
    }
  }
  get duration() {
    const {
      resolved: e
    } = this;
    if (!e) return 0;
    const {
      duration: n
    } = e;
    return H(n)
  }
  get time() {
    const {
      resolved: e
    } = this;
    if (!e) return 0;
    const {
      animation: n
    } = e;
    return H(n.currentTime || 0)
  }
  set time(e) {
    const {
      resolved: n
    } = this;
    if (!n) return;
    const {
      animation: s
    } = n;
    s.currentTime = z(e)
  }
  get speed() {
    const {
      resolved: e
    } = this;
    if (!e) return 1;
    const {
      animation: n
    } = e;
    return n.playbackRate
  }
  set speed(e) {
    const {
      resolved: n
    } = this;
    if (!n) return;
    const {
      animation: s
    } = n;
    s.playbackRate = e
  }
  get state() {
    const {
      resolved: e
    } = this;
    if (!e) return "idle";
    const {
      animation: n
    } = e;
    return n.playState
  }
  get startTime() {
    const {
      resolved: e
    } = this;
    if (!e) return null;
    const {
      animation: n
    } = e;
    return n.startTime
  }
  attachTimeline(e) {
    if (!this._resolved) this.pendingTimeline = e;
    else {
      const {
        resolved: n
      } = this;
      if (!n) return L;
      const {
        animation: s
      } = n;
      s.timeline = e, s.onfinish = null
    }
    return L
  }
  play() {
    if (this.isStopped) return;
    const {
      resolved: e
    } = this;
    if (!e) return;
    const {
      animation: n
    } = e;
    n.playState === "finished" && this.updateFinishedPromise(), n.play()
  }
  pause() {
    const {
      resolved: e
    } = this;
    if (!e) return;
    const {
      animation: n
    } = e;
    n.pause()
  }
  stop() {
    if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle") return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const {
      resolved: e
    } = this;
    if (!e) return;
    const {
      animation: n,
      keyframes: s,
      duration: i,
      type: r,
      ease: o,
      times: a
    } = e;
    if (n.playState === "idle" || n.playState === "finished") return;
    if (this.time) {
      const {
        motionValue: u,
        onUpdate: h,
        onComplete: c,
        element: f,
        ...d
      } = this.options, p = new Qe({
        ...d,
        keyframes: s,
        duration: i,
        type: r,
        ease: o,
        times: a,
        isGenerator: !0
      }), v = z(this.time);
      u.setWithVelocity(p.sample(v - _t).value, p.sample(v).value, _t)
    }
    const {
      onStop: l
    } = this.options;
    l && l(), this.cancel()
  }
  complete() {
    const {
      resolved: e
    } = this;
    e && e.animation.finish()
  }
  cancel() {
    const {
      resolved: e
    } = this;
    e && e.animation.cancel()
  }
  static supports(e) {
    const {
      motionValue: n,
      name: s,
      repeatDelay: i,
      repeatType: r,
      damping: o,
      type: a
    } = e;
    return Aa() && s && Ns.has(s) && n && n.owner && n.owner.current instanceof HTMLElement && !n.owner.getProps().onUpdate && !i && r !== "mirror" && o !== 0 && a !== "inertia"
  }
}

function Ca(t, e) {
  let n;
  const s = () => {
    const {
      currentTime: i
    } = e, o = (i === null ? 0 : i.value) / 100;
    n !== o && t(o), n = o
  };
  return V.update(s, !0), () => Y(s)
}
const Da = li(() => window.ScrollTimeline !== void 0);
class Ma {
  constructor(e) {
    this.stop = () => this.runAll("stop"), this.animations = e.filter(Boolean)
  }
  then(e, n) {
    return Promise.all(this.animations).then(e).catch(n)
  }
  getAll(e) {
    return this.animations[0][e]
  }
  setAll(e, n) {
    for (let s = 0; s < this.animations.length; s++) this.animations[s][e] = n
  }
  attachTimeline(e) {
    const n = this.animations.map(s => {
      if (Da() && s.attachTimeline) s.attachTimeline(e);
      else return s.pause(), Ca(i => {
        s.time = s.duration * i
      }, e)
    });
    return () => {
      n.forEach((s, i) => {
        s && s(), this.animations[i].stop()
      })
    }
  }
  get time() {
    return this.getAll("time")
  }
  set time(e) {
    this.setAll("time", e)
  }
  get speed() {
    return this.getAll("speed")
  }
  set speed(e) {
    this.setAll("speed", e)
  }
  get startTime() {
    return this.getAll("startTime")
  }
  get duration() {
    let e = 0;
    for (let n = 0; n < this.animations.length; n++) e = Math.max(e, this.animations[n].duration);
    return e
  }
  runAll(e) {
    this.animations.forEach(n => n[e]())
  }
  play() {
    this.runAll("play")
  }
  pause() {
    this.runAll("pause")
  }
  cancel() {
    this.runAll("cancel")
  }
  complete() {
    this.runAll("complete")
  }
}
const en = (t, e, n, s = {}, i, r, o) => a => {
  const l = ze(s, t) || {},
    u = l.delay || s.delay || 0;
  let {
    elapsed: h = 0
  } = s;
  h = h - z(u);
  let c = {
    keyframes: Array.isArray(n) ? n : [null, n],
    ease: "easeOut",
    velocity: e.getVelocity(),
    ...l,
    delay: -h,
    onUpdate: d => {
      e.set(d), l.onUpdate && l.onUpdate(d)
    },
    onComplete: () => {
      a(), l.onComplete && l.onComplete(), o && o()
    },
    onStop: o,
    name: t,
    motionValue: e,
    element: r ? void 0 : i
  };
  lr(l) || (c = {
    ...c,
    ...ar(t, c)
  }), c.duration && (c.duration = z(c.duration)), c.repeatDelay && (c.repeatDelay = z(c.repeatDelay)), c.from !== void 0 && (c.keyframes[0] = c.from);
  let f = !1;
  if ((c.type === !1 || c.duration === 0 && !c.repeatDelay) && (c.duration = 0, c.delay === 0 && (f = !0)), f && !r && e.get() !== void 0) {
    const d = Jt(c.keyframes, l);
    if (d !== void 0) return V.update(() => {
      c.onUpdate(d), c.onComplete()
    }), new Ma([])
  }
  return !r && Rn.supports(c) ? new Rn(c) : new Qe(c)
};
class nn {
  constructor() {
    this.subscriptions = []
  }
  add(e) {
    return Xt(this.subscriptions, e), () => Yt(this.subscriptions, e)
  }
  notify(e, n, s) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](e, n, s);
      else
        for (let r = 0; r < i; r++) {
          const o = this.subscriptions[r];
          o && o(e, n, s)
        }
  }
  getSize() {
    return this.subscriptions.length
  }
  clear() {
    this.subscriptions.length = 0
  }
}
const En = 30,
  Ra = t => !isNaN(parseFloat(t));
class bi {
  constructor(e, n = {}) {
    this.version = "11.3.30", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (s, i = !0) => {
      const r = X.now();
      this.updatedAt !== r && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(s), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), i && this.events.renderRequest && this.events.renderRequest.notify(this.current)
    }, this.hasAnimated = !1, this.setCurrent(e), this.owner = n.owner
  }
  setCurrent(e) {
    this.current = e, this.updatedAt = X.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = Ra(this.current))
  }
  setPrevFrameValue(e = this.current) {
    this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt
  }
  onChange(e) {
    return this.on("change", e)
  }
  on(e, n) {
    this.events[e] || (this.events[e] = new nn);
    const s = this.events[e].add(n);
    return e === "change" ? () => {
      s(), V.read(() => {
        this.events.change.getSize() || this.stop()
      })
    } : s
  }
  clearListeners() {
    for (const e in this.events) this.events[e].clear()
  }
  attach(e, n) {
    this.passiveEffect = e, this.stopPassiveEffect = n
  }
  set(e, n = !0) {
    !n || !this.passiveEffect ? this.updateAndNotify(e, n) : this.passiveEffect(e, this.updateAndNotify)
  }
  setWithVelocity(e, n, s) {
    this.set(n), this.prev = void 0, this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt - s
  }
  jump(e, n = !0) {
    this.updateAndNotify(e), this.prev = e, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
  }
  get() {
    return this.current
  }
  getPrevious() {
    return this.prev
  }
  getVelocity() {
    const e = X.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > En) return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, En);
    return ci(parseFloat(this.current) - parseFloat(this.prevFrameValue), n)
  }
  start(e) {
    return this.stop(), new Promise(n => {
      this.hasAnimated = !0, this.animation = e(n), this.events.animationStart && this.events.animationStart.notify()
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
    })
  }
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
  }
  isAnimating() {
    return !!this.animation
  }
  clearAnimation() {
    delete this.animation
  }
  destroy() {
    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
  }
}

function wt(t, e) {
  return new bi(t, e)
}

function Ea(t, e, n) {
  t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, wt(n))
}

function La(t, e) {
  const n = Zt(t, e);
  let {
    transitionEnd: s = {},
    transition: i = {},
    ...r
  } = n || {};
  r = {
    ...r,
    ...s
  };
  for (const o in r) {
    const a = Oo(r[o]);
    Ea(t, o, a)
  }
}

function Vi(t) {
  return t.getProps()[As]
}
class Fa extends bi {
  constructor() {
    super(...arguments), this.output = [], this.counts = new Map
  }
  add(e) {
    const n = Us(e);
    if (!n) return;
    const s = this.counts.get(n) || 0;
    this.counts.set(n, s + 1), s === 0 && (this.output.push(n), this.update());
    let i = !1;
    return () => {
      if (i) return;
      i = !0;
      const r = this.counts.get(n) - 1;
      this.counts.set(n, r), r === 0 && (Yt(this.output, n), this.update())
    }
  }
  update() {
    this.set(this.output.length ? this.output.join(", ") : "auto")
  }
}

function Ba(t) {
  return !!(E(t) && t.add)
}

function Ae(t, e) {
  var n;
  if (!t.applyWillChange) return;
  let s = t.getValue("willChange");
  if (!s && !(!((n = t.props.style) === null || n === void 0) && n.willChange) && (s = new Fa("auto"), t.addValue("willChange", s)), Ba(s)) return s.add(e)
}

function ka({
  protectedKeys: t,
  needsAnimating: e
}, n) {
  const s = t.hasOwnProperty(n) && e[n] !== !0;
  return e[n] = !1, s
}

function wi(t, e, {
  delay: n = 0,
  transitionOverride: s,
  type: i
} = {}) {
  var r;
  let {
    transition: o = t.getDefaultTransition(),
    transitionEnd: a,
    ...l
  } = e;
  s && (o = s);
  const u = [],
    h = i && t.animationState && t.animationState.getState()[i];
  for (const c in l) {
    const f = t.getValue(c, (r = t.latestValues[c]) !== null && r !== void 0 ? r : null),
      d = l[c];
    if (d === void 0 || h && ka(h, c)) continue;
    const p = {
      delay: n,
      ...ze(o || {}, c)
    };
    let v = !1;
    if (window.MotionHandoffAnimation) {
      const g = Vi(t);
      if (g) {
        const y = window.MotionHandoffAnimation(g, c, V);
        y !== null && (p.startTime = y, v = !0)
      }
    }
    f.start(en(c, f, d, t.shouldReduceMotion && Q.has(c) ? {
      type: !1
    } : p, t, v, Ae(t, c)));
    const x = f.animation;
    x && u.push(x)
  }
  return a && Promise.all(u).then(() => {
    V.update(() => {
      a && La(t, a)
    })
  }), u
}

function be(t, e, n = {}) {
  var s;
  const i = Zt(t, e, n.type === "exit" ? (s = t.presenceContext) === null || s === void 0 ? void 0 : s.custom : void 0);
  let {
    transition: r = t.getDefaultTransition() || {}
  } = i || {};
  n.transitionOverride && (r = n.transitionOverride);
  const o = i ? () => Promise.all(wi(t, i, n)) : () => Promise.resolve(),
    a = t.variantChildren && t.variantChildren.size ? (u = 0) => {
      const {
        delayChildren: h = 0,
        staggerChildren: c,
        staggerDirection: f
      } = r;
      return ja(t, e, h + u, c, f, n)
    } : () => Promise.resolve(),
    {
      when: l
    } = r;
  if (l) {
    const [u, h] = l === "beforeChildren" ? [o, a] : [a, o];
    return u().then(() => h())
  } else return Promise.all([o(), a(n.delay)])
}

function ja(t, e, n = 0, s = 0, i = 1, r) {
  const o = [],
    a = (t.variantChildren.size - 1) * s,
    l = i === 1 ? (u = 0) => u * s : (u = 0) => a - u * s;
  return Array.from(t.variantChildren).sort(Oa).forEach((u, h) => {
    u.notify("AnimationStart", e), o.push(be(u, e, {
      ...r,
      delay: n + l(h)
    }).then(() => u.notify("AnimationComplete", e)))
  }), Promise.all(o)
}

function Oa(t, e) {
  return t.sortNodePosition(e)
}

function Ia(t, e, n = {}) {
  t.notify("AnimationStart", e);
  let s;
  if (Array.isArray(e)) {
    const i = e.map(r => be(t, r, n));
    s = Promise.all(i)
  } else if (typeof e == "string") s = be(t, e, n);
  else {
    const i = typeof e == "function" ? Zt(t, e, n.custom) : e;
    s = Promise.all(wi(t, i, n))
  }
  return s.then(() => {
    t.notify("AnimationComplete", e)
  })
}
const Na = [...Le].reverse(),
  Ua = Le.length;

function Wa(t) {
  return e => Promise.all(e.map(({
    animation: n,
    options: s
  }) => Ia(t, n, s)))
}

function _a(t) {
  let e = Wa(t),
    n = Ln(),
    s = !0;
  const i = l => (u, h) => {
    var c;
    const f = Zt(t, h, l === "exit" ? (c = t.presenceContext) === null || c === void 0 ? void 0 : c.custom : void 0);
    if (f) {
      const {
        transition: d,
        transitionEnd: p,
        ...v
      } = f;
      u = {
        ...u,
        ...v,
        ...p
      }
    }
    return u
  };

  function r(l) {
    e = l(t)
  }

  function o(l) {
    const u = t.getProps(),
      h = t.getVariantContext(!0) || {},
      c = [],
      f = new Set;
    let d = {},
      p = 1 / 0;
    for (let x = 0; x < Ua; x++) {
      const g = Na[x],
        y = n[g],
        m = u[g] !== void 0 ? u[g] : h[g],
        S = St(m),
        A = g === l ? y.isActive : null;
      A === !1 && (p = x);
      let C = m === h[g] && m !== u[g] && S;
      if (C && s && t.manuallyAnimateOnMount && (C = !1), y.protectedKeys = {
          ...d
        }, !y.isActive && A === null || !m && !y.prevProp || At(m) || typeof m == "boolean") continue;
      let b = Ka(y.prevProp, m) || g === l && y.isActive && !C && S || x > p && S,
        k = !1;
      const j = Array.isArray(m) ? m : [m];
      let rt = j.reduce(i(g), {});
      A === !1 && (rt = {});
      const {
        prevResolvedValues: sn = {}
      } = y, Hi = {
        ...sn,
        ...rt
      }, on = F => {
        b = !0, f.has(F) && (k = !0, f.delete(F)), y.needsAnimating[F] = !0;
        const W = t.getValue(F);
        W && (W.liveStyle = !1)
      };
      for (const F in Hi) {
        const W = rt[F],
          Qt = sn[F];
        if (d.hasOwnProperty(F)) continue;
        let te = !1;
        me(W) && me(Qt) ? te = !Hs(W, Qt) : te = W !== Qt, te ? W != null ? on(F) : f.add(F) : W !== void 0 && f.has(F) ? on(F) : y.protectedKeys[F] = !0
      }
      y.prevProp = m, y.prevResolvedValues = rt, y.isActive && (d = {
        ...d,
        ...rt
      }), s && t.blockInitialAnimation && (b = !1), b && (!C || k) && c.push(...j.map(F => ({
        animation: F,
        options: {
          type: g
        }
      })))
    }
    if (f.size) {
      const x = {};
      f.forEach(g => {
        const y = t.getBaseTarget(g),
          m = t.getValue(g);
        m && (m.liveStyle = !0), x[g] = y ?? null
      }), c.push({
        animation: x
      })
    }
    let v = !!c.length;
    return s && (u.initial === !1 || u.initial === u.animate) && !t.manuallyAnimateOnMount && (v = !1), s = !1, v ? e(c) : Promise.resolve()
  }

  function a(l, u) {
    var h;
    if (n[l].isActive === u) return Promise.resolve();
    (h = t.variantChildren) === null || h === void 0 || h.forEach(f => {
      var d;
      return (d = f.animationState) === null || d === void 0 ? void 0 : d.setActive(l, u)
    }), n[l].isActive = u;
    const c = o(l);
    for (const f in n) n[f].protectedKeys = {};
    return c
  }
  return {
    animateChanges: o,
    setActive: a,
    setAnimateFunction: r,
    getState: () => n,
    reset: () => {
      n = Ln(), s = !0
    }
  }
}

function Ka(t, e) {
  return typeof e == "string" ? e !== t : Array.isArray(e) ? !Hs(e, t) : !1
}

function et(t = !1) {
  return {
    isActive: t,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  }
}

function Ln() {
  return {
    animate: et(!0),
    whileInView: et(),
    whileHover: et(),
    whileTap: et(),
    whileDrag: et(),
    whileFocus: et(),
    exit: et()
  }
}
class $a extends tt {
  constructor(e) {
    super(e), e.animationState || (e.animationState = _a(e))
  }
  updateAnimationControlsSubscription() {
    const {
      animate: e
    } = this.node.getProps();
    At(e) && (this.unmountControls = e.subscribe(this.node))
  }
  mount() {
    this.updateAnimationControlsSubscription()
  }
  update() {
    const {
      animate: e
    } = this.node.getProps(), {
      animate: n
    } = this.node.prevProps || {};
    e !== n && this.updateAnimationControlsSubscription()
  }
  unmount() {
    var e;
    this.node.animationState.reset(), (e = this.unmountControls) === null || e === void 0 || e.call(this)
  }
}
let Ga = 0;
class za extends tt {
  constructor() {
    super(...arguments), this.id = Ga++
  }
  update() {
    if (!this.node.presenceContext) return;
    const {
      isPresent: e,
      onExitComplete: n
    } = this.node.presenceContext, {
      isPresent: s
    } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || e === s) return;
    const i = this.node.animationState.setActive("exit", !e);
    n && !e && i.then(() => n(this.id))
  }
  mount() {
    const {
      register: e
    } = this.node.presenceContext || {};
    e && (this.unmount = e(this.id))
  }
  unmount() {}
}
const Ha = {
    animation: {
      Feature: $a
    },
    exit: {
      Feature: za
    }
  },
  Fn = (t, e) => Math.abs(t - e);

function Xa(t, e) {
  const n = Fn(t.x, e.x),
    s = Fn(t.y, e.y);
  return Math.sqrt(n ** 2 + s ** 2)
}
class Ci {
  constructor(e, n, {
    transformPagePoint: s,
    contextWindow: i,
    dragSnapToOrigin: r = !1
  } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const c = ue(this.lastMoveEventInfo, this.history),
          f = this.startEvent !== null,
          d = Xa(c.offset, {
            x: 0,
            y: 0
          }) >= 3;
        if (!f && !d) return;
        const {
          point: p
        } = c, {
          timestamp: v
        } = M;
        this.history.push({
          ...p,
          timestamp: v
        });
        const {
          onStart: x,
          onMove: g
        } = this.handlers;
        f || (x && x(this.lastMoveEvent, c), this.startEvent = this.lastMoveEvent), g && g(this.lastMoveEvent, c)
      }, this.handlePointerMove = (c, f) => {
        this.lastMoveEvent = c, this.lastMoveEventInfo = le(f, this.transformPagePoint), V.update(this.updatePoint, !0)
      }, this.handlePointerUp = (c, f) => {
        this.end();
        const {
          onEnd: d,
          onSessionEnd: p,
          resumeAnimation: v
        } = this.handlers;
        if (this.dragSnapToOrigin && v && v(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const x = ue(c.type === "pointercancel" ? this.lastMoveEventInfo : le(f, this.transformPagePoint), this.history);
        this.startEvent && d && d(c, x), p && p(c, x)
      }, !_s(e)) return;
    this.dragSnapToOrigin = r, this.handlers = n, this.transformPagePoint = s, this.contextWindow = i || window;
    const o = qt(e),
      a = le(o, this.transformPagePoint),
      {
        point: l
      } = a,
      {
        timestamp: u
      } = M;
    this.history = [{
      ...l,
      timestamp: u
    }];
    const {
      onSessionStart: h
    } = n;
    h && h(e, ue(a, this.history)), this.removeListeners = G($(this.contextWindow, "pointermove", this.handlePointerMove), $(this.contextWindow, "pointerup", this.handlePointerUp), $(this.contextWindow, "pointercancel", this.handlePointerUp))
  }
  updateHandlers(e) {
    this.handlers = e
  }
  end() {
    this.removeListeners && this.removeListeners(), Y(this.updatePoint)
  }
}

function le(t, e) {
  return e ? {
    point: e(t.point)
  } : t
}

function Bn(t, e) {
  return {
    x: t.x - e.x,
    y: t.y - e.y
  }
}

function ue({
  point: t
}, e) {
  return {
    point: t,
    delta: Bn(t, Di(e)),
    offset: Bn(t, Ya(e)),
    velocity: qa(e, .1)
  }
}

function Ya(t) {
  return t[0]
}

function Di(t) {
  return t[t.length - 1]
}

function qa(t, e) {
  if (t.length < 2) return {
    x: 0,
    y: 0
  };
  let n = t.length - 1,
    s = null;
  const i = Di(t);
  for (; n >= 0 && (s = t[n], !(i.timestamp - s.timestamp > z(e)));) n--;
  if (!s) return {
    x: 0,
    y: 0
  };
  const r = H(i.timestamp - s.timestamp);
  if (r === 0) return {
    x: 0,
    y: 0
  };
  const o = {
    x: (i.x - s.x) / r,
    y: (i.y - s.y) / r
  };
  return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o
}
const Mi = 1e-4,
  Za = 1 - Mi,
  Ja = 1 + Mi,
  Ri = .01,
  Qa = 0 - Ri,
  tl = 0 + Ri;

function B(t) {
  return t.max - t.min
}

function el(t, e, n) {
  return Math.abs(t - e) <= n
}

function kn(t, e, n, s = .5) {
  t.origin = s, t.originPoint = w(e.min, e.max, t.origin), t.scale = B(n) / B(e), t.translate = w(n.min, n.max, t.origin) - t.originPoint, (t.scale >= Za && t.scale <= Ja || isNaN(t.scale)) && (t.scale = 1), (t.translate >= Qa && t.translate <= tl || isNaN(t.translate)) && (t.translate = 0)
}

function Tt(t, e, n, s) {
  kn(t.x, e.x, n.x, s ? s.originX : void 0), kn(t.y, e.y, n.y, s ? s.originY : void 0)
}

function jn(t, e, n) {
  t.min = n.min + e.min, t.max = t.min + B(e)
}

function nl(t, e, n) {
  jn(t.x, e.x, n.x), jn(t.y, e.y, n.y)
}

function On(t, e, n) {
  t.min = e.min - n.min, t.max = t.min + B(e)
}

function Pt(t, e, n) {
  On(t.x, e.x, n.x), On(t.y, e.y, n.y)
}

function sl(t, {
  min: e,
  max: n
}, s) {
  return e !== void 0 && t < e ? t = s ? w(e, t, s.min) : Math.max(t, e) : n !== void 0 && t > n && (t = s ? w(n, t, s.max) : Math.min(t, n)), t
}

function In(t, e, n) {
  return {
    min: e !== void 0 ? t.min + e : void 0,
    max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0
  }
}

function il(t, {
  top: e,
  left: n,
  bottom: s,
  right: i
}) {
  return {
    x: In(t.x, n, i),
    y: In(t.y, e, s)
  }
}

function Nn(t, e) {
  let n = e.min - t.min,
    s = e.max - t.max;
  return e.max - e.min < t.max - t.min && ([n, s] = [s, n]), {
    min: n,
    max: s
  }
}

function ol(t, e) {
  return {
    x: Nn(t.x, e.x),
    y: Nn(t.y, e.y)
  }
}

function rl(t, e) {
  let n = .5;
  const s = B(t),
    i = B(e);
  return i > s ? n = Vt(e.min, e.max - s, t.min) : s > i && (n = Vt(t.min, t.max - i, e.min)), Z(0, 1, n)
}

function al(t, e) {
  const n = {};
  return e.min !== void 0 && (n.min = e.min - t.min), e.max !== void 0 && (n.max = e.max - t.min), n
}
const Ve = .35;

function ll(t = Ve) {
  return t === !1 ? t = 0 : t === !0 && (t = Ve), {
    x: Un(t, "left", "right"),
    y: Un(t, "top", "bottom")
  }
}

function Un(t, e, n) {
  return {
    min: Wn(t, e),
    max: Wn(t, n)
  }
}

function Wn(t, e) {
  return typeof t == "number" ? t : t[e] || 0
}
const _n = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
  }),
  ut = () => ({
    x: _n(),
    y: _n()
  }),
  Kn = () => ({
    min: 0,
    max: 0
  }),
  D = () => ({
    x: Kn(),
    y: Kn()
  });

function I(t) {
  return [t("x"), t("y")]
}

function Ei({
  top: t,
  left: e,
  right: n,
  bottom: s
}) {
  return {
    x: {
      min: e,
      max: n
    },
    y: {
      min: t,
      max: s
    }
  }
}

function ul({
  x: t,
  y: e
}) {
  return {
    top: e.min,
    right: t.max,
    bottom: e.max,
    left: t.min
  }
}

function cl(t, e) {
  if (!e) return t;
  const n = e({
      x: t.left,
      y: t.top
    }),
    s = e({
      x: t.right,
      y: t.bottom
    });
  return {
    top: n.y,
    left: n.x,
    bottom: s.y,
    right: s.x
  }
}

function ce(t) {
  return t === void 0 || t === 1
}

function we({
  scale: t,
  scaleX: e,
  scaleY: n
}) {
  return !ce(t) || !ce(e) || !ce(n)
}

function nt(t) {
  return we(t) || Li(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY
}

function Li(t) {
  return $n(t.x) || $n(t.y)
}

function $n(t) {
  return t && t !== "0%"
}

function Kt(t, e, n) {
  const s = t - n,
    i = e * s;
  return n + i
}

function Gn(t, e, n, s, i) {
  return i !== void 0 && (t = Kt(t, i, s)), Kt(t, n, s) + e
}

function Ce(t, e = 0, n = 1, s, i) {
  t.min = Gn(t.min, e, n, s, i), t.max = Gn(t.max, e, n, s, i)
}

function Fi(t, {
  x: e,
  y: n
}) {
  Ce(t.x, e.translate, e.scale, e.originPoint), Ce(t.y, n.translate, n.scale, n.originPoint)
}
const zn = .999999999999,
  Hn = 1.0000000000001;

function hl(t, e, n, s = !1) {
  const i = n.length;
  if (!i) return;
  e.x = e.y = 1;
  let r, o;
  for (let a = 0; a < i; a++) {
    r = n[a], o = r.projectionDelta;
    const {
      visualElement: l
    } = r.options;
    l && l.props.style && l.props.style.display === "contents" || (s && r.options.layoutScroll && r.scroll && r !== r.root && ht(t, {
      x: -r.scroll.offset.x,
      y: -r.scroll.offset.y
    }), o && (e.x *= o.x.scale, e.y *= o.y.scale, Fi(t, o)), s && nt(r.latestValues) && ht(t, r.latestValues))
  }
  e.x < Hn && e.x > zn && (e.x = 1), e.y < Hn && e.y > zn && (e.y = 1)
}

function ct(t, e) {
  t.min = t.min + e, t.max = t.max + e
}

function Xn(t, e, n, s, i = .5) {
  const r = w(t.min, t.max, i);
  Ce(t, e, n, r, s)
}

function ht(t, e) {
  Xn(t.x, e.x, e.scaleX, e.scale, e.originX), Xn(t.y, e.y, e.scaleY, e.scale, e.originY)
}

function Bi(t, e) {
  return Ei(cl(t.getBoundingClientRect(), e))
}

function fl(t, e, n) {
  const s = Bi(t, n),
    {
      scroll: i
    } = e;
  return i && (ct(s.x, i.offset.x), ct(s.y, i.offset.y)), s
}
const ki = ({
    current: t
  }) => t ? t.ownerDocument.defaultView : null,
  dl = new WeakMap;
class pl {
  constructor(e) {
    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
      x: 0,
      y: 0
    }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = D(), this.visualElement = e
  }
  start(e, {
    snapToCursor: n = !1
  } = {}) {
    const {
      presenceContext: s
    } = this.visualElement;
    if (s && s.isPresent === !1) return;
    const i = h => {
        const {
          dragSnapToOrigin: c
        } = this.getProps();
        c ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(qt(h, "page").point)
      },
      r = (h, c) => {
        var f;
        const {
          drag: d,
          dragPropagation: p,
          onDragStart: v
        } = this.getProps();
        if (d && !p && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = $s(d), !this.openGlobalLock)) return;
        this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), I(g => {
          let y = this.getAxisMotionValue(g).get() || 0;
          if (U.test(y)) {
            const {
              projection: m
            } = this.visualElement;
            if (m && m.layout) {
              const S = m.layout.layoutBox[g];
              S && (y = B(S) * (parseFloat(y) / 100))
            }
          }
          this.originPoint[g] = y
        }), v && V.postRender(() => v(h, c)), (f = this.removeWillChange) === null || f === void 0 || f.call(this), this.removeWillChange = Ae(this.visualElement, "transform");
        const {
          animationState: x
        } = this.visualElement;
        x && x.setActive("whileDrag", !0)
      },
      o = (h, c) => {
        const {
          dragPropagation: f,
          dragDirectionLock: d,
          onDirectionLock: p,
          onDrag: v
        } = this.getProps();
        if (!f && !this.openGlobalLock) return;
        const {
          offset: x
        } = c;
        if (d && this.currentDirection === null) {
          this.currentDirection = ml(x), this.currentDirection !== null && p && p(this.currentDirection);
          return
        }
        this.updateAxis("x", c.point, x), this.updateAxis("y", c.point, x), this.visualElement.render(), v && v(h, c)
      },
      a = (h, c) => this.stop(h, c),
      l = () => I(h => {
        var c;
        return this.getAnimationState(h) === "paused" && ((c = this.getAxisMotionValue(h).animation) === null || c === void 0 ? void 0 : c.play())
      }),
      {
        dragSnapToOrigin: u
      } = this.getProps();
    this.panSession = new Ci(e, {
      onSessionStart: i,
      onStart: r,
      onMove: o,
      onSessionEnd: a,
      resumeAnimation: l
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: u,
      contextWindow: ki(this.visualElement)
    })
  }
  stop(e, n) {
    var s;
    (s = this.removeWillChange) === null || s === void 0 || s.call(this);
    const i = this.isDragging;
    if (this.cancel(), !i) return;
    const {
      velocity: r
    } = n;
    this.startAnimation(r);
    const {
      onDragEnd: o
    } = this.getProps();
    o && V.postRender(() => o(e, n))
  }
  cancel() {
    this.isDragging = !1;
    const {
      projection: e,
      animationState: n
    } = this.visualElement;
    e && (e.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const {
      dragPropagation: s
    } = this.getProps();
    !s && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), n && n.setActive("whileDrag", !1)
  }
  updateAxis(e, n, s) {
    const {
      drag: i
    } = this.getProps();
    if (!s || !Ft(e, i, this.currentDirection)) return;
    const r = this.getAxisMotionValue(e);
    let o = this.originPoint[e] + s[e];
    this.constraints && this.constraints[e] && (o = sl(o, this.constraints[e], this.elastic[e])), r.set(o)
  }
  resolveConstraints() {
    var e;
    const {
      dragConstraints: n,
      dragElastic: s
    } = this.getProps(), i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (e = this.visualElement.projection) === null || e === void 0 ? void 0 : e.layout, r = this.constraints;
    n && at(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && i ? this.constraints = il(i.layoutBox, n) : this.constraints = !1, this.elastic = ll(s), r !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && I(o => {
      this.constraints !== !1 && this.getAxisMotionValue(o) && (this.constraints[o] = al(i.layoutBox[o], this.constraints[o]))
    })
  }
  resolveRefConstraints() {
    const {
      dragConstraints: e,
      onMeasureDragConstraints: n
    } = this.getProps();
    if (!e || !at(e)) return !1;
    const s = e.current,
      {
        projection: i
      } = this.visualElement;
    if (!i || !i.layout) return !1;
    const r = fl(s, i.root, this.visualElement.getTransformPagePoint());
    let o = ol(i.layout.layoutBox, r);
    if (n) {
      const a = n(ul(o));
      this.hasMutatedConstraints = !!a, a && (o = Ei(a))
    }
    return o
  }
  startAnimation(e) {
    const {
      drag: n,
      dragMomentum: s,
      dragElastic: i,
      dragTransition: r,
      dragSnapToOrigin: o,
      onDragTransitionEnd: a
    } = this.getProps(), l = this.constraints || {}, u = I(h => {
      if (!Ft(h, n, this.currentDirection)) return;
      let c = l && l[h] || {};
      o && (c = {
        min: 0,
        max: 0
      });
      const f = i ? 200 : 1e6,
        d = i ? 40 : 1e7,
        p = {
          type: "inertia",
          velocity: s ? e[h] : 0,
          bounceStiffness: f,
          bounceDamping: d,
          timeConstant: 750,
          restDelta: 1,
          restSpeed: 10,
          ...r,
          ...c
        };
      return this.startAxisValueAnimation(h, p)
    });
    return Promise.all(u).then(a)
  }
  startAxisValueAnimation(e, n) {
    const s = this.getAxisMotionValue(e);
    return s.start(en(e, s, 0, n, this.visualElement, !1, Ae(this.visualElement, e)))
  }
  stopAnimation() {
    I(e => this.getAxisMotionValue(e).stop())
  }
  pauseAnimation() {
    I(e => {
      var n;
      return (n = this.getAxisMotionValue(e).animation) === null || n === void 0 ? void 0 : n.pause()
    })
  }
  getAnimationState(e) {
    var n;
    return (n = this.getAxisMotionValue(e).animation) === null || n === void 0 ? void 0 : n.state
  }
  getAxisMotionValue(e) {
    const n = `_drag${e.toUpperCase()}`,
      s = this.visualElement.getProps(),
      i = s[n];
    return i || this.visualElement.getValue(e, (s.initial ? s.initial[e] : void 0) || 0)
  }
  snapToCursor(e) {
    I(n => {
      const {
        drag: s
      } = this.getProps();
      if (!Ft(n, s, this.currentDirection)) return;
      const {
        projection: i
      } = this.visualElement, r = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const {
          min: o,
          max: a
        } = i.layout.layoutBox[n];
        r.set(e[n] - w(o, a, .5))
      }
    })
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const {
      drag: e,
      dragConstraints: n
    } = this.getProps(), {
      projection: s
    } = this.visualElement;
    if (!at(n) || !s || !this.constraints) return;
    this.stopAnimation();
    const i = {
      x: 0,
      y: 0
    };
    I(o => {
      const a = this.getAxisMotionValue(o);
      if (a && this.constraints !== !1) {
        const l = a.get();
        i[o] = rl({
          min: l,
          max: l
        }, this.constraints[o])
      }
    });
    const {
      transformTemplate: r
    } = this.visualElement.getProps();
    this.visualElement.current.style.transform = r ? r({}, "") : "none", s.root && s.root.updateScroll(), s.updateLayout(), this.resolveConstraints(), I(o => {
      if (!Ft(o, e, null)) return;
      const a = this.getAxisMotionValue(o),
        {
          min: l,
          max: u
        } = this.constraints[o];
      a.set(w(l, u, i[o]))
    })
  }
  addListeners() {
    if (!this.visualElement.current) return;
    dl.set(this.visualElement, this);
    const e = this.visualElement.current,
      n = $(e, "pointerdown", l => {
        const {
          drag: u,
          dragListener: h = !0
        } = this.getProps();
        u && h && this.start(l)
      }),
      s = () => {
        const {
          dragConstraints: l
        } = this.getProps();
        at(l) && l.current && (this.constraints = this.resolveRefConstraints())
      },
      {
        projection: i
      } = this.visualElement,
      r = i.addEventListener("measure", s);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), V.read(s);
    const o = _(window, "resize", () => this.scalePositionWithinConstraints()),
      a = i.addEventListener("didUpdate", ({
        delta: l,
        hasLayoutChanged: u
      }) => {
        this.isDragging && u && (I(h => {
          const c = this.getAxisMotionValue(h);
          c && (this.originPoint[h] += l[h].translate, c.set(c.get() + l[h].translate))
        }), this.visualElement.render())
      });
    return () => {
      o(), n(), r(), a && a()
    }
  }
  getProps() {
    const e = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: s = !1,
        dragPropagation: i = !1,
        dragConstraints: r = !1,
        dragElastic: o = Ve,
        dragMomentum: a = !0
      } = e;
    return {
      ...e,
      drag: n,
      dragDirectionLock: s,
      dragPropagation: i,
      dragConstraints: r,
      dragElastic: o,
      dragMomentum: a
    }
  }
}

function Ft(t, e, n) {
  return (e === !0 || e === t) && (n === null || n === t)
}

function ml(t, e = 10) {
  let n = null;
  return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"), n
}
class gl extends tt {
  constructor(e) {
    super(e), this.removeGroupControls = L, this.removeListeners = L, this.controls = new pl(e)
  }
  mount() {
    const {
      dragControls: e
    } = this.node.getProps();
    e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || L
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners()
  }
}
const Yn = t => (e, n) => {
  t && V.postRender(() => t(e, n))
};
class yl extends tt {
  constructor() {
    super(...arguments), this.removePointerDownListener = L
  }
  onPointerDown(e) {
    this.session = new Ci(e, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: ki(this.node)
    })
  }
  createPanHandlers() {
    const {
      onPanSessionStart: e,
      onPanStart: n,
      onPan: s,
      onPanEnd: i
    } = this.node.getProps();
    return {
      onSessionStart: Yn(e),
      onStart: Yn(n),
      onMove: s,
      onEnd: (r, o) => {
        delete this.session, i && V.postRender(() => i(r, o))
      }
    }
  }
  mount() {
    this.removePointerDownListener = $(this.node.current, "pointerdown", e => this.onPointerDown(e))
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers())
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end()
  }
}

function vl() {
  const t = T.useContext(Gt);
  if (t === null) return [!0, null];
  const {
    isPresent: e,
    onExitComplete: n,
    register: s
  } = t, i = T.useId();
  T.useEffect(() => s(i), []);
  const r = T.useCallback(() => n && n(i), [i, n]);
  return !e && n ? [!1, r] : [!0]
}
const Ot = {
  hasAnimatedSinceResize: !0,
  hasEverUpdated: !1
};

function qn(t, e) {
  return e.max === e.min ? 0 : t / (e.max - e.min) * 100
}
const mt = {
    correct: (t, e) => {
      if (!e.target) return t;
      if (typeof t == "string")
        if (P.test(t)) t = parseFloat(t);
        else return t;
      const n = qn(t, e.target.x),
        s = qn(t, e.target.y);
      return `${n}% ${s}%`
    }
  },
  xl = {
    correct: (t, {
      treeScale: e,
      projectionDelta: n
    }) => {
      const s = t,
        i = J.parse(t);
      if (i.length > 5) return s;
      const r = J.createTransformer(t),
        o = typeof i[0] != "number" ? 1 : 0,
        a = n.x.scale * e.x,
        l = n.y.scale * e.y;
      i[0 + o] /= a, i[1 + o] /= l;
      const u = w(a, l, .5);
      return typeof i[2 + o] == "number" && (i[2 + o] /= u), typeof i[3 + o] == "number" && (i[3 + o] /= u), r(i)
    }
  };
class Tl extends T.Component {
  componentDidMount() {
    const {
      visualElement: e,
      layoutGroup: n,
      switchLayoutGroup: s,
      layoutId: i
    } = this.props, {
      projection: r
    } = e;
    fo(Pl), r && (n.group && n.group.add(r), s && s.register && i && s.register(r), r.root.didUpdate(), r.addEventListener("animationComplete", () => {
      this.safeToRemove()
    }), r.setOptions({
      ...r.options,
      onExitComplete: () => this.safeToRemove()
    })), Ot.hasEverUpdated = !0
  }
  getSnapshotBeforeUpdate(e) {
    const {
      layoutDependency: n,
      visualElement: s,
      drag: i,
      isPresent: r
    } = this.props, o = s.projection;
    return o && (o.isPresent = r, i || e.layoutDependency !== n || n === void 0 ? o.willUpdate() : this.safeToRemove(), e.isPresent !== r && (r ? o.promote() : o.relegate() || V.postRender(() => {
      const a = o.getStack();
      (!a || !a.members.length) && this.safeToRemove()
    }))), null
  }
  componentDidUpdate() {
    const {
      projection: e
    } = this.props.visualElement;
    e && (e.root.didUpdate(), Ee.postRender(() => {
      !e.currentAnimation && e.isLead() && this.safeToRemove()
    }))
  }
  componentWillUnmount() {
    const {
      visualElement: e,
      layoutGroup: n,
      switchLayoutGroup: s
    } = this.props, {
      projection: i
    } = e;
    i && (i.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(i), s && s.deregister && s.deregister(i))
  }
  safeToRemove() {
    const {
      safeToRemove: e
    } = this.props;
    e && e()
  }
  render() {
    return null
  }
}

function ji(t) {
  const [e, n] = vl(), s = T.useContext(Be);
  return K.jsx(Tl, {
    ...t,
    layoutGroup: s,
    switchLayoutGroup: T.useContext(Vs),
    isPresent: e,
    safeToRemove: n
  })
}
const Pl = {
    borderRadius: {
      ...mt,
      applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: mt,
    borderTopRightRadius: mt,
    borderBottomLeftRadius: mt,
    borderBottomRightRadius: mt,
    boxShadow: xl
  },
  Oi = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  Sl = Oi.length,
  Zn = t => typeof t == "string" ? parseFloat(t) : t,
  Jn = t => typeof t == "number" || P.test(t);

function Al(t, e, n, s, i, r) {
  i ? (t.opacity = w(0, n.opacity !== void 0 ? n.opacity : 1, bl(s)), t.opacityExit = w(e.opacity !== void 0 ? e.opacity : 1, 0, Vl(s))) : r && (t.opacity = w(e.opacity !== void 0 ? e.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, s));
  for (let o = 0; o < Sl; o++) {
    const a = `border${Oi[o]}Radius`;
    let l = Qn(e, a),
      u = Qn(n, a);
    if (l === void 0 && u === void 0) continue;
    l || (l = 0), u || (u = 0), l === 0 || u === 0 || Jn(l) === Jn(u) ? (t[a] = Math.max(w(Zn(l), Zn(u), s), 0), (U.test(u) || U.test(l)) && (t[a] += "%")) : t[a] = u
  }(e.rotate || n.rotate) && (t.rotate = w(e.rotate || 0, n.rotate || 0, s))
}

function Qn(t, e) {
  return t[e] !== void 0 ? t[e] : t.borderRadius
}
const bl = Ii(0, .5, yi),
  Vl = Ii(.5, .95, L);

function Ii(t, e, n) {
  return s => s < t ? 0 : s > e ? 1 : n(Vt(t, e, s))
}

function ts(t, e) {
  t.min = e.min, t.max = e.max
}

function O(t, e) {
  ts(t.x, e.x), ts(t.y, e.y)
}

function es(t, e) {
  t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin
}

function ns(t, e, n, s, i) {
  return t -= e, t = Kt(t, 1 / n, s), i !== void 0 && (t = Kt(t, 1 / i, s)), t
}

function wl(t, e = 0, n = 1, s = .5, i, r = t, o = t) {
  if (U.test(e) && (e = parseFloat(e), e = w(o.min, o.max, e / 100) - o.min), typeof e != "number") return;
  let a = w(r.min, r.max, s);
  t === r && (a -= e), t.min = ns(t.min, e, n, a, i), t.max = ns(t.max, e, n, a, i)
}

function ss(t, e, [n, s, i], r, o) {
  wl(t, e[n], e[s], e[i], e.scale, r, o)
}
const Cl = ["x", "scaleX", "originX"],
  Dl = ["y", "scaleY", "originY"];

function is(t, e, n, s) {
  ss(t.x, e, Cl, n ? n.x : void 0, s ? s.x : void 0), ss(t.y, e, Dl, n ? n.y : void 0, s ? s.y : void 0)
}

function os(t) {
  return t.translate === 0 && t.scale === 1
}

function Ni(t) {
  return os(t.x) && os(t.y)
}

function rs(t, e) {
  return t.min === e.min && t.max === e.max
}

function Ml(t, e) {
  return rs(t.x, e.x) && rs(t.y, e.y)
}

function as(t, e) {
  return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max)
}

function Ui(t, e) {
  return as(t.x, e.x) && as(t.y, e.y)
}

function ls(t) {
  return B(t.x) / B(t.y)
}

function us(t, e) {
  return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint
}
class Rl {
  constructor() {
    this.members = []
  }
  add(e) {
    Xt(this.members, e), e.scheduleRender()
  }
  remove(e) {
    if (Yt(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n)
    }
  }
  relegate(e) {
    const n = this.members.findIndex(i => e === i);
    if (n === 0) return !1;
    let s;
    for (let i = n; i >= 0; i--) {
      const r = this.members[i];
      if (r.isPresent !== !1) {
        s = r;
        break
      }
    }
    return s ? (this.promote(s), !0) : !1
  }
  promote(e, n) {
    const s = this.lead;
    if (e !== s && (this.prevLead = s, this.lead = e, e.show(), s)) {
      s.instance && s.scheduleRender(), e.scheduleRender(), e.resumeFrom = s, n && (e.resumeFrom.preserveOpacity = !0), s.snapshot && (e.snapshot = s.snapshot, e.snapshot.latestValues = s.animationValues || s.latestValues), e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
      const {
        crossfade: i
      } = e.options;
      i === !1 && s.hide()
    }
  }
  exitAnimationComplete() {
    this.members.forEach(e => {
      const {
        options: n,
        resumingFrom: s
      } = e;
      n.onExitComplete && n.onExitComplete(), s && s.options.onExitComplete && s.options.onExitComplete()
    })
  }
  scheduleRender() {
    this.members.forEach(e => {
      e.instance && e.scheduleRender(!1)
    })
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
  }
}

function El(t, e, n) {
  let s = "";
  const i = t.x.translate / e.x,
    r = t.y.translate / e.y,
    o = (n == null ? void 0 : n.z) || 0;
  if ((i || r || o) && (s = `translate3d(${i}px, ${r}px, ${o}px) `), (e.x !== 1 || e.y !== 1) && (s += `scale(${1/e.x}, ${1/e.y}) `), n) {
    const {
      transformPerspective: u,
      rotate: h,
      rotateX: c,
      rotateY: f,
      skewX: d,
      skewY: p
    } = n;
    u && (s = `perspective(${u}px) ${s}`), h && (s += `rotate(${h}deg) `), c && (s += `rotateX(${c}deg) `), f && (s += `rotateY(${f}deg) `), d && (s += `skewX(${d}deg) `), p && (s += `skewY(${p}deg) `)
  }
  const a = t.x.scale * e.x,
    l = t.y.scale * e.y;
  return (a !== 1 || l !== 1) && (s += `scale(${a}, ${l})`), s || "none"
}
const Ll = (t, e) => t.depth - e.depth;
class Fl {
  constructor() {
    this.children = [], this.isDirty = !1
  }
  add(e) {
    Xt(this.children, e), this.isDirty = !0
  }
  remove(e) {
    Yt(this.children, e), this.isDirty = !0
  }
  forEach(e) {
    this.isDirty && this.children.sort(Ll), this.isDirty = !1, this.children.forEach(e)
  }
}

function Bl(t, e) {
  const n = X.now(),
    s = ({
      timestamp: i
    }) => {
      const r = i - n;
      r >= e && (Y(s), t(r - e))
    };
  return V.read(s, !0), () => Y(s)
}

function kl(t) {
  return t instanceof SVGElement && t.tagName !== "svg"
}

function jl(t, e, n) {
  const s = E(t) ? t : wt(t);
  return s.start(en("", s, e, n)), s.animation
}
const st = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0
  },
  yt = typeof window < "u" && window.MotionDebug !== void 0,
  he = ["", "X", "Y", "Z"],
  Ol = {
    visibility: "hidden"
  },
  cs = 1e3;
let Il = 0;

function fe(t, e, n, s) {
  const {
    latestValues: i
  } = e;
  i[t] && (n[t] = i[t], e.setStaticValue(t, 0), s && (s[t] = 0))
}

function Wi(t) {
  if (t.hasCheckedOptimisedAppear = !0, t.root === t) return;
  const {
    visualElement: e
  } = t.options;
  if (!e) return;
  const n = Vi(e);
  window.MotionHasOptimisedTransformAnimation(n) && window.MotionCancelOptimisedTransform(n);
  const {
    parent: s
  } = t;
  s && !s.hasCheckedOptimisedAppear && Wi(s)
}

function _i({
  attachResizeListener: t,
  defaultParent: e,
  measureScroll: n,
  checkIsScrollRoot: s,
  resetTransform: i
}) {
  return class {
    constructor(o = {}, a = e == null ? void 0 : e()) {
      this.id = Il++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
        x: 1,
        y: 1
      }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, yt && (st.totalNodes = st.resolvedTargetDeltas = st.recalculatedProjection = 0), this.nodes.forEach(Wl), this.nodes.forEach(zl), this.nodes.forEach(Hl), this.nodes.forEach(_l), yt && window.MotionDebug.record(st)
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = o, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++) this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Fl)
    }
    addEventListener(o, a) {
      return this.eventHandlers.has(o) || this.eventHandlers.set(o, new nn), this.eventHandlers.get(o).add(a)
    }
    notifyListeners(o, ...a) {
      const l = this.eventHandlers.get(o);
      l && l.notify(...a)
    }
    hasListeners(o) {
      return this.eventHandlers.has(o)
    }
    mount(o, a = this.root.hasTreeAnimated) {
      if (this.instance) return;
      this.isSVG = kl(o), this.instance = o;
      const {
        layoutId: l,
        layout: u,
        visualElement: h
      } = this.options;
      if (h && !h.current && h.mount(o), this.root.nodes.add(this), this.parent && this.parent.children.add(this), a && (u || l) && (this.isLayoutDirty = !0), t) {
        let c;
        const f = () => this.root.updateBlockedByResize = !1;
        t(o, () => {
          this.root.updateBlockedByResize = !0, c && c(), c = Bl(f, 250), Ot.hasAnimatedSinceResize && (Ot.hasAnimatedSinceResize = !1, this.nodes.forEach(fs))
        })
      }
      l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && h && (l || u) && this.addEventListener("didUpdate", ({
        delta: c,
        hasLayoutChanged: f,
        hasRelativeTargetChanged: d,
        layout: p
      }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return
        }
        const v = this.options.transition || h.getDefaultTransition() || Jl,
          {
            onLayoutAnimationStart: x,
            onLayoutAnimationComplete: g
          } = h.getProps(),
          y = !this.targetLayout || !Ui(this.targetLayout, p) || d,
          m = !f && d;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || m || f && (y || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(c, m);
          const S = {
            ...ze(v, "layout"),
            onPlay: x,
            onComplete: g
          };
          (h.shouldReduceMotion || this.options.layoutRoot) && (S.delay = 0, S.type = !1), this.startAnimation(S)
        } else f || fs(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = p
      })
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const o = this.getStack();
      o && o.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, Y(this.updateProjection)
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
    }
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(Xl), this.animationId++)
    }
    getTransformTemplate() {
      const {
        visualElement: o
      } = this.options;
      return o && o.getProps().transformTemplate
    }
    willUpdate(o = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return
      }
      if (window.MotionCancelOptimisedTransform && !this.hasCheckedOptimisedAppear && Wi(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
      this.isLayoutDirty = !0;
      for (let h = 0; h < this.path.length; h++) {
        const c = this.path[h];
        c.shouldResetTransform = !0, c.updateScroll("snapshot"), c.options.layoutRoot && c.willUpdate(!1)
      }
      const {
        layoutId: a,
        layout: l
      } = this.options;
      if (a === void 0 && !l) return;
      const u = this.getTransformTemplate();
      this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0, this.updateSnapshot(), o && this.notifyListeners("willUpdate")
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(hs);
        return
      }
      this.isUpdating || this.nodes.forEach($l), this.isUpdating = !1, this.nodes.forEach(Gl), this.nodes.forEach(Nl), this.nodes.forEach(Ul), this.clearAllSnapshots();
      const a = X.now();
      M.delta = Z(0, 1e3 / 60, a - M.timestamp), M.timestamp = a, M.isProcessing = !0, ee.update.process(M), ee.preRender.process(M), ee.render.process(M), M.isProcessing = !1
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, Ee.read(this.scheduleUpdate))
    }
    clearAllSnapshots() {
      this.nodes.forEach(Kl), this.sharedNodes.forEach(Yl)
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, V.preRender(this.updateProjection, !1, !0))
    }
    scheduleCheckAfterUnmount() {
      V.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
      })
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure())
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const o = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = D(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const {
        visualElement: a
      } = this.options;
      a && a.notify("LayoutMeasure", this.layout.layoutBox, o ? o.layoutBox : void 0)
    }
    updateScroll(o = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === o && (a = !1), a) {
        const l = s(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: o,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l
        }
      }
    }
    resetTransform() {
      if (!i) return;
      const o = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
        a = this.projectionDelta && !Ni(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, "") : void 0,
        h = u !== this.prevTransformTemplateValue;
      o && (a || nt(this.latestValues) || h) && (i(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender())
    }
    measure(o = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return o && (l = this.removeTransform(l)), Ql(l), {
        animationId: this.root.animationId,
        measuredBox: a,
        layoutBox: l,
        latestValues: {},
        source: this.id
      }
    }
    measurePageBox() {
      var o;
      const {
        visualElement: a
      } = this.options;
      if (!a) return D();
      const l = a.measureViewportBox();
      if (!(((o = this.scroll) === null || o === void 0 ? void 0 : o.wasRoot) || this.path.some(tu))) {
        const {
          scroll: h
        } = this.root;
        h && (ct(l.x, h.offset.x), ct(l.y, h.offset.y))
      }
      return l
    }
    removeElementScroll(o) {
      var a;
      const l = D();
      if (O(l, o), !((a = this.scroll) === null || a === void 0) && a.wasRoot) return l;
      for (let u = 0; u < this.path.length; u++) {
        const h = this.path[u],
          {
            scroll: c,
            options: f
          } = h;
        h !== this.root && c && f.layoutScroll && (c.wasRoot && O(l, o), ct(l.x, c.offset.x), ct(l.y, c.offset.y))
      }
      return l
    }
    applyTransform(o, a = !1) {
      const l = D();
      O(l, o);
      for (let u = 0; u < this.path.length; u++) {
        const h = this.path[u];
        !a && h.options.layoutScroll && h.scroll && h !== h.root && ht(l, {
          x: -h.scroll.offset.x,
          y: -h.scroll.offset.y
        }), nt(h.latestValues) && ht(l, h.latestValues)
      }
      return nt(this.latestValues) && ht(l, this.latestValues), l
    }
    removeTransform(o) {
      const a = D();
      O(a, o);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !nt(u.latestValues)) continue;
        we(u.latestValues) && u.updateSnapshot();
        const h = D(),
          c = u.measurePageBox();
        O(h, c), is(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, h)
      }
      return nt(this.latestValues) && is(a, this.latestValues), a
    }
    setTargetDelta(o) {
      this.targetDelta = o, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
    }
    setOptions(o) {
      this.options = {
        ...this.options,
        ...o,
        crossfade: o.crossfade !== void 0 ? o.crossfade : !0
      }
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== M.timestamp && this.relativeParent.resolveTargetDelta(!0)
    }
    resolveTargetDelta(o = !1) {
      var a;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== l;
      if (!(o || u && this.isSharedProjectionDirty || this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
      const {
        layout: c,
        layoutId: f
      } = this.options;
      if (!(!this.layout || !(c || f))) {
        if (this.resolvedRelativeTargetAt = M.timestamp, !this.targetDelta && !this.relativeTarget) {
          const d = this.getClosestProjectingParent();
          d && d.layout && this.animationProgress !== 1 ? (this.relativeParent = d, this.forceRelativeParentToResolveTarget(), this.relativeTarget = D(), this.relativeTargetOrigin = D(), Pt(this.relativeTargetOrigin, this.layout.layoutBox, d.layout.layoutBox), O(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = D(), this.targetWithTransforms = D()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), nl(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : O(this.target, this.layout.layoutBox), Fi(this.target, this.targetDelta)) : O(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const d = this.getClosestProjectingParent();
            d && !!d.resumingFrom == !!this.resumingFrom && !d.options.layoutScroll && d.target && this.animationProgress !== 1 ? (this.relativeParent = d, this.forceRelativeParentToResolveTarget(), this.relativeTarget = D(), this.relativeTargetOrigin = D(), Pt(this.relativeTargetOrigin, this.target, d.target), O(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
          }
          yt && st.resolvedTargetDeltas++
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || we(this.parent.latestValues) || Li(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
    }
    calcProjection() {
      var o;
      const a = this.getLead(),
        l = !!this.resumingFrom || this !== a;
      let u = !0;
      if ((this.isProjectionDirty || !((o = this.parent) === null || o === void 0) && o.isProjectionDirty) && (u = !1), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1), this.resolvedRelativeTargetAt === M.timestamp && (u = !1), u) return;
      const {
        layout: h,
        layoutId: c
      } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(h || c)) return;
      O(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x,
        d = this.treeScale.y;
      hl(this.layoutCorrected, this.treeScale, this.path, l), a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox, a.targetWithTransforms = D());
      const {
        target: p
      } = a;
      if (!p) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return
      }!this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (es(this.prevProjectionDelta.x, this.projectionDelta.x), es(this.prevProjectionDelta.y, this.projectionDelta.y)), Tt(this.projectionDelta, this.layoutCorrected, p, this.latestValues), (this.treeScale.x !== f || this.treeScale.y !== d || !us(this.projectionDelta.x, this.prevProjectionDelta.x) || !us(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", p)), yt && st.recalculatedProjection++
    }
    hide() {
      this.isVisible = !1
    }
    show() {
      this.isVisible = !0
    }
    scheduleRender(o = !0) {
      var a;
      if ((a = this.options.visualElement) === null || a === void 0 || a.scheduleRender(), o) {
        const l = this.getStack();
        l && l.scheduleRender()
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = ut(), this.projectionDelta = ut(), this.projectionDeltaWithTransform = ut()
    }
    setAnimationOrigin(o, a = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        h = {
          ...this.latestValues
        },
        c = ut();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
      const f = D(),
        d = l ? l.source : void 0,
        p = this.layout ? this.layout.source : void 0,
        v = d !== p,
        x = this.getStack(),
        g = !x || x.members.length <= 1,
        y = !!(v && !g && this.options.crossfade === !0 && !this.path.some(Zl));
      this.animationProgress = 0;
      let m;
      this.mixTargetDelta = S => {
        const A = S / 1e3;
        ds(c.x, o.x, A), ds(c.y, o.y, A), this.setTargetDelta(c), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Pt(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox), ql(this.relativeTarget, this.relativeTargetOrigin, f, A), m && Ml(this.relativeTarget, m) && (this.isProjectionDirty = !1), m || (m = D()), O(m, this.relativeTarget)), v && (this.animationValues = h, Al(h, u, this.latestValues, A, y, g)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = A
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
    }
    startAnimation(o) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (Y(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = V.update(() => {
        Ot.hasAnimatedSinceResize = !0, this.currentAnimation = jl(0, cs, {
          ...o,
          onUpdate: a => {
            this.mixTargetDelta(a), o.onUpdate && o.onUpdate(a)
          },
          onComplete: () => {
            o.onComplete && o.onComplete(), this.completeAnimation()
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
      })
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const o = this.getStack();
      o && o.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(cs), this.currentAnimation.stop()), this.completeAnimation()
    }
    applyTransformsToTarget() {
      const o = this.getLead();
      let {
        targetWithTransforms: a,
        target: l,
        layout: u,
        latestValues: h
      } = o;
      if (!(!a || !l || !u)) {
        if (this !== o && this.layout && u && Ki(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          l = this.target || D();
          const c = B(this.layout.layoutBox.x);
          l.x.min = o.target.x.min, l.x.max = l.x.min + c;
          const f = B(this.layout.layoutBox.y);
          l.y.min = o.target.y.min, l.y.max = l.y.min + f
        }
        O(a, l), ht(a, h), Tt(this.projectionDeltaWithTransform, this.layoutCorrected, a, h)
      }
    }
    registerSharedNode(o, a) {
      this.sharedNodes.has(o) || this.sharedNodes.set(o, new Rl), this.sharedNodes.get(o).add(a);
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(a) : void 0
      })
    }
    isLead() {
      const o = this.getStack();
      return o ? o.lead === this : !0
    }
    getLead() {
      var o;
      const {
        layoutId: a
      } = this.options;
      return a ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.lead) || this : this
    }
    getPrevLead() {
      var o;
      const {
        layoutId: a
      } = this.options;
      return a ? (o = this.getStack()) === null || o === void 0 ? void 0 : o.prevLead : void 0
    }
    getStack() {
      const {
        layoutId: o
      } = this.options;
      if (o) return this.root.sharedNodes.get(o)
    }
    promote({
      needsReset: o,
      transition: a,
      preserveFollowOpacity: l
    } = {}) {
      const u = this.getStack();
      u && u.promote(this, l), o && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({
        transition: a
      })
    }
    relegate() {
      const o = this.getStack();
      return o ? o.relegate(this) : !1
    }
    resetSkewAndRotation() {
      const {
        visualElement: o
      } = this.options;
      if (!o) return;
      let a = !1;
      const {
        latestValues: l
      } = o;
      if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0), !a) return;
      const u = {};
      l.z && fe("z", o, u, this.animationValues);
      for (let h = 0; h < he.length; h++) fe(`rotate${he[h]}`, o, u, this.animationValues), fe(`skew${he[h]}`, o, u, this.animationValues);
      o.render();
      for (const h in u) o.setStaticValue(h, u[h]), this.animationValues && (this.animationValues[h] = u[h]);
      o.scheduleRender()
    }
    getProjectionStyles(o) {
      var a, l;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return Ol;
      const u = {
          visibility: ""
        },
        h = this.getTransformTemplate();
      if (this.needsReset) return this.needsReset = !1, u.opacity = "", u.pointerEvents = kt(o == null ? void 0 : o.pointerEvents) || "", u.transform = h ? h(this.latestValues, "") : "none", u;
      const c = this.getLead();
      if (!this.projectionDelta || !this.layout || !c.target) {
        const v = {};
        return this.options.layoutId && (v.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, v.pointerEvents = kt(o == null ? void 0 : o.pointerEvents) || ""), this.hasProjected && !nt(this.latestValues) && (v.transform = h ? h({}, "") : "none", this.hasProjected = !1), v
      }
      const f = c.animationValues || c.latestValues;
      this.applyTransformsToTarget(), u.transform = El(this.projectionDeltaWithTransform, this.treeScale, f), h && (u.transform = h(f, u.transform));
      const {
        x: d,
        y: p
      } = this.projectionDelta;
      u.transformOrigin = `${d.origin*100}% ${p.origin*100}% 0`, c.animationValues ? u.opacity = c === this ? (l = (a = f.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : f.opacityExit : u.opacity = c === this ? f.opacity !== void 0 ? f.opacity : "" : f.opacityExit !== void 0 ? f.opacityExit : 0;
      for (const v in It) {
        if (f[v] === void 0) continue;
        const {
          correct: x,
          applyTo: g
        } = It[v], y = u.transform === "none" ? f[v] : x(f[v], c);
        if (g) {
          const m = g.length;
          for (let S = 0; S < m; S++) u[g[S]] = y
        } else u[v] = y
      }
      return this.options.layoutId && (u.pointerEvents = c === this ? kt(o == null ? void 0 : o.pointerEvents) || "" : "none"), u
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0
    }
    resetTree() {
      this.root.nodes.forEach(o => {
        var a;
        return (a = o.currentAnimation) === null || a === void 0 ? void 0 : a.stop()
      }), this.root.nodes.forEach(hs), this.root.sharedNodes.clear()
    }
  }
}

function Nl(t) {
  t.updateLayout()
}

function Ul(t) {
  var e;
  const n = ((e = t.resumeFrom) === null || e === void 0 ? void 0 : e.snapshot) || t.snapshot;
  if (t.isLead() && t.layout && n && t.hasListeners("didUpdate")) {
    const {
      layoutBox: s,
      measuredBox: i
    } = t.layout, {
      animationType: r
    } = t.options, o = n.source !== t.layout.source;
    r === "size" ? I(c => {
      const f = o ? n.measuredBox[c] : n.layoutBox[c],
        d = B(f);
      f.min = s[c].min, f.max = f.min + d
    }) : Ki(r, n.layoutBox, s) && I(c => {
      const f = o ? n.measuredBox[c] : n.layoutBox[c],
        d = B(s[c]);
      f.max = f.min + d, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[c].max = t.relativeTarget[c].min + d)
    });
    const a = ut();
    Tt(a, s, n.layoutBox);
    const l = ut();
    o ? Tt(l, t.applyTransform(i, !0), n.measuredBox) : Tt(l, s, n.layoutBox);
    const u = !Ni(a);
    let h = !1;
    if (!t.resumeFrom) {
      const c = t.getClosestProjectingParent();
      if (c && !c.resumeFrom) {
        const {
          snapshot: f,
          layout: d
        } = c;
        if (f && d) {
          const p = D();
          Pt(p, n.layoutBox, f.layoutBox);
          const v = D();
          Pt(v, s, d.layoutBox), Ui(p, v) || (h = !0), c.options.layoutRoot && (t.relativeTarget = v, t.relativeTargetOrigin = p, t.relativeParent = c)
        }
      }
    }
    t.notifyListeners("didUpdate", {
      layout: s,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: h
    })
  } else if (t.isLead()) {
    const {
      onExitComplete: s
    } = t.options;
    s && s()
  }
  t.options.transition = void 0
}

function Wl(t) {
  yt && st.totalNodes++, t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
}

function _l(t) {
  t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
}

function Kl(t) {
  t.clearSnapshot()
}

function hs(t) {
  t.clearMeasurements()
}

function $l(t) {
  t.isLayoutDirty = !1
}

function Gl(t) {
  const {
    visualElement: e
  } = t.options;
  e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform()
}

function fs(t) {
  t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0
}

function zl(t) {
  t.resolveTargetDelta()
}

function Hl(t) {
  t.calcProjection()
}

function Xl(t) {
  t.resetSkewAndRotation()
}

function Yl(t) {
  t.removeLeadSnapshot()
}

function ds(t, e, n) {
  t.translate = w(e.translate, 0, n), t.scale = w(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint
}

function ps(t, e, n, s) {
  t.min = w(e.min, n.min, s), t.max = w(e.max, n.max, s)
}

function ql(t, e, n, s) {
  ps(t.x, e.x, n.x, s), ps(t.y, e.y, n.y, s)
}

function Zl(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0
}
const Jl = {
    duration: .45,
    ease: [.4, 0, .1, 1]
  },
  ms = t => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t),
  gs = ms("applewebkit/") && !ms("chrome/") ? Math.round : L;

function ys(t) {
  t.min = gs(t.min), t.max = gs(t.max)
}

function Ql(t) {
  ys(t.x), ys(t.y)
}

function Ki(t, e, n) {
  return t === "position" || t === "preserve-aspect" && !el(ls(e), ls(n), .2)
}

function tu(t) {
  var e;
  return t !== t.root && ((e = t.scroll) === null || e === void 0 ? void 0 : e.wasRoot)
}
const eu = _i({
    attachResizeListener: (t, e) => _(t, "resize", e),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => !0
  }),
  de = {
    current: void 0
  },
  $i = _i({
    measureScroll: t => ({
      x: t.scrollLeft,
      y: t.scrollTop
    }),
    defaultParent: () => {
      if (!de.current) {
        const t = new eu({});
        t.mount(window), t.setOptions({
          layoutScroll: !0
        }), de.current = t
      }
      return de.current
    },
    resetTransform: (t, e) => {
      t.style.transform = e !== void 0 ? e : "none"
    },
    checkIsScrollRoot: t => window.getComputedStyle(t).position === "fixed"
  }),
  nu = {
    pan: {
      Feature: yl
    },
    drag: {
      Feature: gl,
      ProjectionNode: $i,
      MeasureLayout: ji
    }
  },
  De = {
    current: null
  },
  Gi = {
    current: !1
  };

function su() {
  if (Gi.current = !0, !!Re)
    if (window.matchMedia) {
      const t = window.matchMedia("(prefers-reduced-motion)"),
        e = () => De.current = t.matches;
      t.addListener(e), e()
    } else De.current = !1
}

function iu(t, e, n) {
  for (const s in e) {
    const i = e[s],
      r = n[s];
    if (E(i)) t.addValue(s, i);
    else if (E(r)) t.addValue(s, wt(i, {
      owner: t
    }));
    else if (r !== i)
      if (t.hasValue(s)) {
        const o = t.getValue(s);
        o.liveStyle === !0 ? o.jump(i) : o.hasAnimated || o.set(i)
      } else {
        const o = t.getStaticValue(s);
        t.addValue(s, wt(o !== void 0 ? o : i, {
          owner: t
        }))
      }
  }
  for (const s in n) e[s] === void 0 && t.removeValue(s);
  return e
}
const vs = new WeakMap,
  ou = [...Js, R, J],
  ru = t => ou.find(Zs(t)),
  xs = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"],
  au = Fe.length;
class lu {
  scrapeMotionValuesFromProps(e, n, s) {
    return {}
  }
  constructor({
    parent: e,
    props: n,
    presenceContext: s,
    reducedMotionConfig: i,
    blockInitialAnimation: r,
    visualState: o
  }, a = {}) {
    this.applyWillChange = !1, this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.KeyframeResolver = He, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.isRenderScheduled = !1, this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
    }, this.isRenderScheduled = !1, this.scheduleRender = () => {
      this.isRenderScheduled || (this.isRenderScheduled = !0, V.render(this.render, !1, !0))
    };
    const {
      latestValues: l,
      renderState: u
    } = o;
    this.latestValues = l, this.baseTarget = {
      ...l
    }, this.initialValues = n.initial ? {
      ...l
    } : {}, this.renderState = u, this.parent = e, this.props = n, this.presenceContext = s, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = i, this.options = a, this.blockInitialAnimation = !!r, this.isControllingVariants = Ht(n), this.isVariantNode = Cs(n), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(e && e.current);
    const {
      willChange: h,
      ...c
    } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const f in c) {
      const d = c[f];
      l[f] !== void 0 && E(d) && d.set(l[f], !1)
    }
  }
  mount(e) {
    this.current = e, vs.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, s) => this.bindToMotionValue(s, n)), Gi.current || su(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : De.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
  }
  unmount() {
    vs.delete(this.current), this.projection && this.projection.unmount(), Y(this.notifyUpdate), Y(this.render), this.valueSubscriptions.forEach(e => e()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const e in this.events) this.events[e].clear();
    for (const e in this.features) {
      const n = this.features[e];
      n && (n.unmount(), n.isMounted = !1)
    }
    this.current = null
  }
  bindToMotionValue(e, n) {
    this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
    const s = Q.has(e),
      i = n.on("change", o => {
        this.latestValues[e] = o, this.props.onUpdate && V.preRender(this.notifyUpdate), s && this.projection && (this.projection.isTransformDirty = !0)
      }),
      r = n.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(e, () => {
      i(), r(), n.owner && n.stop()
    })
  }
  sortNodePosition(e) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current)
  }
  updateFeatures() {
    let e = "animation";
    for (e in ft) {
      const n = ft[e];
      if (!n) continue;
      const {
        isEnabled: s,
        Feature: i
      } = n;
      if (!this.features[e] && i && s(this.props) && (this.features[e] = new i(this)), this.features[e]) {
        const r = this.features[e];
        r.isMounted ? r.update() : (r.mount(), r.isMounted = !0)
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props)
  }
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : D()
  }
  getStaticValue(e) {
    return this.latestValues[e]
  }
  setStaticValue(e, n) {
    this.latestValues[e] = n
  }
  update(e, n) {
    (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
    for (let s = 0; s < xs.length; s++) {
      const i = xs[s];
      this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
      const r = "on" + i,
        o = e[r];
      o && (this.propEventSubscriptions[i] = this.on(i, o))
    }
    this.prevMotionValues = iu(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
  }
  getProps() {
    return this.props
  }
  getVariant(e) {
    return this.props.variants ? this.props.variants[e] : void 0
  }
  getDefaultTransition() {
    return this.props.transition
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
  }
  getVariantContext(e = !1) {
    if (e) return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const s = this.parent ? this.parent.getVariantContext() || {} : {};
      return this.props.initial !== void 0 && (s.initial = this.props.initial), s
    }
    const n = {};
    for (let s = 0; s < au; s++) {
      const i = Fe[s],
        r = this.props[i];
      (St(r) || r === !1) && (n[i] = r)
    }
    return n
  }
  addVariantChild(e) {
    const n = this.getClosestVariantNode();
    if (n) return n.variantChildren && n.variantChildren.add(e), () => n.variantChildren.delete(e)
  }
  addValue(e, n) {
    const s = this.values.get(e);
    n !== s && (s && this.removeValue(e), this.bindToMotionValue(e, n), this.values.set(e, n), this.latestValues[e] = n.get())
  }
  removeValue(e) {
    this.values.delete(e);
    const n = this.valueSubscriptions.get(e);
    n && (n(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState)
  }
  hasValue(e) {
    return this.values.has(e)
  }
  getValue(e, n) {
    if (this.props.values && this.props.values[e]) return this.props.values[e];
    let s = this.values.get(e);
    return s === void 0 && n !== void 0 && (s = wt(n === null ? void 0 : n, {
      owner: this
    }), this.addValue(e, s)), s
  }
  readValue(e, n) {
    var s;
    let i = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : (s = this.getBaseTargetFromProps(this.props, e)) !== null && s !== void 0 ? s : this.readValueFromInstance(this.current, e, this.options);
    return i != null && (typeof i == "string" && (Ys(i) || Xs(i)) ? i = parseFloat(i) : !ru(i) && J.test(n) && (i = ri(e, n)), this.setBaseTarget(e, E(i) ? i.get() : i)), E(i) ? i.get() : i
  }
  setBaseTarget(e, n) {
    this.baseTarget[e] = n
  }
  getBaseTarget(e) {
    var n;
    const {
      initial: s
    } = this.props;
    let i;
    if (typeof s == "string" || typeof s == "object") {
      const o = $e(this.props, s, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
      o && (i = o[e])
    }
    if (s && i !== void 0) return i;
    const r = this.getBaseTargetFromProps(this.props, e);
    return r !== void 0 && !E(r) ? r : this.initialValues[e] !== void 0 && i === void 0 ? void 0 : this.baseTarget[e]
  }
  on(e, n) {
    return this.events[e] || (this.events[e] = new nn), this.events[e].add(n)
  }
  notify(e, ...n) {
    this.events[e] && this.events[e].notify(...n)
  }
}
class zi extends lu {
  constructor() {
    super(...arguments), this.KeyframeResolver = ai
  }
  sortInstanceNodePosition(e, n) {
    return e.compareDocumentPosition(n) & 2 ? 1 : -1
  }
  getBaseTargetFromProps(e, n) {
    return e.style ? e.style[n] : void 0
  }
  removeValueFromRenderState(e, {
    vars: n,
    style: s
  }) {
    delete n[e], delete s[e]
  }
}

function uu(t) {
  return window.getComputedStyle(t)
}
class cu extends zi {
  constructor() {
    super(...arguments), this.type = "html", this.applyWillChange = !0, this.renderInstance = ks
  }
  readValueFromInstance(e, n) {
    if (Q.has(n)) {
      const s = Ye(n);
      return s && s.default || 0
    } else {
      const s = uu(e),
        i = (Es(n) ? s.getPropertyValue(n) : s[n]) || 0;
      return typeof i == "string" ? i.trim() : i
    }
  }
  measureInstanceViewportBox(e, {
    transformPagePoint: n
  }) {
    return Bi(e, n)
  }
  build(e, n, s) {
    Ne(e, n, s.transformTemplate)
  }
  scrapeMotionValuesFromProps(e, n, s) {
    return Ke(e, n, s)
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const {
      children: e
    } = this.props;
    E(e) && (this.childSubscription = e.on("change", n => {
      this.current && (this.current.textContent = `${n}`)
    }))
  }
}
class hu extends zi {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = D
  }
  getBaseTargetFromProps(e, n) {
    return e[n]
  }
  readValueFromInstance(e, n) {
    if (Q.has(n)) {
      const s = Ye(n);
      return s && s.default || 0
    }
    return n = js.has(n) ? n : zt(n), e.getAttribute(n)
  }
  scrapeMotionValuesFromProps(e, n, s) {
    return Is(e, n, s)
  }
  build(e, n, s) {
    We(e, n, this.isSVGTag, s.transformTemplate)
  }
  renderInstance(e, n, s, i) {
    Os(e, n, s, i)
  }
  mount(e) {
    this.isSVGTag = _e(e.tagName), super.mount(e)
  }
}
const fu = (t, e) => ke(t) ? new hu(e) : new cu(e, {
    allowProjection: t !== T.Fragment
  }),
  du = {
    layout: {
      ProjectionNode: $i,
      MeasureLayout: ji
    }
  },
  pu = {
    ...Ha,
    ...nr,
    ...nu,
    ...du
  },
  Su = co((t, e) => Ko(t, e, pu, fu));
class mu extends T.Component {
  getSnapshotBeforeUpdate(e) {
    const n = this.props.childRef.current;
    if (n && e.isPresent && !this.props.isPresent) {
      const s = this.props.sizeRef.current;
      s.height = n.offsetHeight || 0, s.width = n.offsetWidth || 0, s.top = n.offsetTop, s.left = n.offsetLeft
    }
    return null
  }
  componentDidUpdate() {}
  render() {
    return this.props.children
  }
}

function gu({
  children: t,
  isPresent: e
}) {
  const n = T.useId(),
    s = T.useRef(null),
    i = T.useRef({
      width: 0,
      height: 0,
      top: 0,
      left: 0
    }),
    {
      nonce: r
    } = T.useContext(Me);
  return T.useInsertionEffect(() => {
    const {
      width: o,
      height: a,
      top: l,
      left: u
    } = i.current;
    if (e || !s.current || !o || !a) return;
    s.current.dataset.motionPopId = n;
    const h = document.createElement("style");
    return r && (h.nonce = r), document.head.appendChild(h), h.sheet && h.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${u}px !important;
          }
        `), () => {
      document.head.removeChild(h)
    }
  }, [e]), K.jsx(mu, {
    isPresent: e,
    childRef: s,
    sizeRef: i,
    children: T.cloneElement(t, {
      ref: s
    })
  })
}
const yu = ({
  children: t,
  initial: e,
  isPresent: n,
  onExitComplete: s,
  custom: i,
  presenceAffectsLayout: r,
  mode: o
}) => {
  const a = Ge(vu),
    l = T.useId(),
    u = T.useMemo(() => ({
      id: l,
      initial: e,
      isPresent: n,
      custom: i,
      onExitComplete: h => {
        a.set(h, !0);
        for (const c of a.values())
          if (!c) return;
        s && s()
      },
      register: h => (a.set(h, !1), () => a.delete(h))
    }), r ? [Math.random()] : [n]);
  return T.useMemo(() => {
    a.forEach((h, c) => a.set(c, !1))
  }, [n]), T.useEffect(() => {
    !n && !a.size && s && s()
  }, [n]), o === "popLayout" && (t = K.jsx(gu, {
    isPresent: n,
    children: t
  })), K.jsx(Gt.Provider, {
    value: u,
    children: t
  })
};

function vu() {
  return new Map
}
const Bt = t => t.key || "";

function Ts(t) {
  const e = [];
  return T.Children.forEach(t, n => {
    T.isValidElement(n) && e.push(n)
  }), e
}
const Au = ({
  children: t,
  exitBeforeEnter: e,
  custom: n,
  initial: s = !0,
  onExitComplete: i,
  presenceAffectsLayout: r = !0,
  mode: o = "sync"
}) => {
  const a = T.useMemo(() => Ts(t), [t]),
    l = a.map(Bt),
    u = T.useRef(!0),
    h = T.useRef(a),
    c = Ge(() => new Map),
    [f, d] = T.useState(a),
    [p, v] = T.useState(a);
  Ps(() => {
    u.current = !1, h.current = a;
    for (let y = 0; y < p.length; y++) {
      const m = Bt(p[y]);
      l.includes(m) ? c.delete(m) : c.get(m) !== !0 && c.set(m, !1)
    }
  }, [p, l.length, l.join("-")]);
  const x = [];
  if (a !== f) {
    let y = [...a];
    for (let m = 0; m < p.length; m++) {
      const S = p[m],
        A = Bt(S);
      l.includes(A) || (y.splice(m, 0, S), x.push(S))
    }
    o === "wait" && x.length && (y = x), v(Ts(y)), d(a);
    return
  }
  const {
    forceRender: g
  } = T.useContext(Be);
  return K.jsx(K.Fragment, {
    children: p.map(y => {
      const m = Bt(y),
        S = a === p || l.includes(m),
        A = () => {
          if (c.has(m)) c.set(m, !0);
          else return;
          let C = !0;
          c.forEach(N => {
            N || (C = !1)
          }), C && (g == null || g(), v(h.current), i && i())
        };
      return K.jsx(yu, {
        isPresent: S,
        initial: !u.current || s ? void 0 : !1,
        custom: S ? void 0 : n,
        presenceAffectsLayout: r,
        mode: o,
        onExitComplete: S ? void 0 : A,
        children: y
      }, m)
    })
  })
};
export {
  Au as A, Su as m
};