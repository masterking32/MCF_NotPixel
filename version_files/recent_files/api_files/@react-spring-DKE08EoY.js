import {
  r as h
} from "./react-DjWS3H3h.js";
import {
  r as et
} from "./react-dom-DCoj3sTC.js";
var ae = U(),
  l = e => T(e, ae),
  se = U();
l.write = e => T(e, se);
var H = U();
l.onStart = e => T(e, H);
var oe = U();
l.onFrame = e => T(e, oe);
var ue = U();
l.onFinish = e => T(e, ue);
var k = [];
l.setTimeout = (e, t) => {
  const r = l.now() + t,
    n = () => {
      const a = k.findIndex(s => s.cancel == n);
      ~a && k.splice(a, 1), x -= ~a ? 1 : 0
    },
    i = {
      time: r,
      handler: e,
      cancel: n
    };
  return k.splice(Ve(r), 0, i), x += 1, Oe(), i
};
var Ve = e => ~(~k.findIndex(t => t.time > e) || ~k.length);
l.cancel = e => {
  H.delete(e), oe.delete(e), ue.delete(e), ae.delete(e), se.delete(e)
};
l.sync = e => {
  ne = !0, l.batchedUpdates(e), ne = !1
};
l.throttle = e => {
  let t;

  function r() {
    try {
      e(...t)
    } finally {
      t = null
    }
  }

  function n(...i) {
    t = i, l.onStart(r)
  }
  return n.handler = e, n.cancel = () => {
    H.delete(r), t = null
  }, n
};
var le = typeof window < "u" ? window.requestAnimationFrame : () => {};
l.use = e => le = e;
l.now = typeof performance < "u" ? () => performance.now() : Date.now;
l.batchedUpdates = e => e();
l.catch = console.error;
l.frameLoop = "always";
l.advance = () => {
  l.frameLoop !== "demand" ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : Ce()
};
var w = -1,
  x = 0,
  ne = !1;

function T(e, t) {
  ne ? (t.delete(e), e(0)) : (t.add(e), Oe())
}

function Oe() {
  w < 0 && (w = 0, l.frameLoop !== "demand" && le($e))
}

function tt() {
  w = -1
}

function $e() {
  ~w && (le($e), l.batchedUpdates(Ce))
}

function Ce() {
  const e = w;
  w = l.now();
  const t = Ve(w);
  if (t && (Te(k.splice(0, t), r => r.handler()), x -= t), !x) {
    tt();
    return
  }
  H.flush(), ae.flush(e ? Math.min(64, w - e) : 16.667), oe.flush(), se.flush(), ue.flush()
}

function U() {
  let e = new Set,
    t = e;
  return {
    add(r) {
      x += t == e && !e.has(r) ? 1 : 0, e.add(r)
    },
    delete(r) {
      return x -= t == e && e.has(r) ? 1 : 0, e.delete(r)
    },
    flush(r) {
      t.size && (e = new Set, x -= t.size, Te(t, n => n(r) && e.add(n)), x += e.size, t = e)
    }
  }
}

function Te(e, t) {
  e.forEach(r => {
    try {
      t(r)
    } catch (n) {
      l.catch(n)
    }
  })
}
var rt = Object.defineProperty,
  nt = (e, t) => {
    for (var r in t) rt(e, r, {
      get: t[r],
      enumerable: !0
    })
  },
  S = {};
nt(S, {
  assign: () => ot,
  colors: () => _,
  createStringInterpolator: () => ce,
  skipAnimation: () => qe,
  to: () => Ue,
  willAdvance: () => fe
});

function it() {}
var at = (e, t, r) => Object.defineProperty(e, t, {
    value: r,
    writable: !0,
    configurable: !0
  }),
  d = {
    arr: Array.isArray,
    obj: e => !!e && e.constructor.name === "Object",
    fun: e => typeof e == "function",
    str: e => typeof e == "string",
    num: e => typeof e == "number",
    und: e => e === void 0
  };

function st(e, t) {
  if (d.arr(e)) {
    if (!d.arr(t) || e.length !== t.length) return !1;
    for (let r = 0; r < e.length; r++)
      if (e[r] !== t[r]) return !1;
    return !0
  }
  return e === t
}
var m = (e, t) => e.forEach(t);

function L(e, t, r) {
  if (d.arr(e)) {
    for (let n = 0; n < e.length; n++) t.call(r, e[n], `${n}`);
    return
  }
  for (const n in e) e.hasOwnProperty(n) && t.call(r, e[n], n)
}
var P = e => d.und(e) ? [] : d.arr(e) ? e : [e],
  de = () => typeof window > "u" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
  ce, Ue, _ = null,
  qe = !1,
  fe = it,
  ot = e => {
    e.to && (Ue = e.to), e.now && (l.now = e.now), e.colors !== void 0 && (_ = e.colors), e.skipAnimation != null && (qe = e.skipAnimation), e.createStringInterpolator && (ce = e.createStringInterpolator), e.requestAnimationFrame && l.use(e.requestAnimationFrame), e.batchedUpdates && (l.batchedUpdates = e.batchedUpdates), e.willAdvance && (fe = e.willAdvance), e.frameLoop && (l.frameLoop = e.frameLoop)
  },
  I = new Set,
  y = [],
  X = [],
  j = 0,
  he = {
    get idle() {
      return !I.size && !y.length
    },
    start(e) {
      j > e.priority ? (I.add(e), l.onStart(ut)) : (Ne(e), l(ie))
    },
    advance: ie,
    sort(e) {
      if (j) l.onFrame(() => he.sort(e));
      else {
        const t = y.indexOf(e);
        ~t && (y.splice(t, 1), ze(e))
      }
    },
    clear() {
      y = [], I.clear()
    }
  };

function ut() {
  I.forEach(Ne), I.clear(), l(ie)
}

function Ne(e) {
  y.includes(e) || ze(e)
}

function ze(e) {
  y.splice(lt(y, t => t.priority > e.priority), 0, e)
}

function ie(e) {
  const t = X;
  for (let r = 0; r < y.length; r++) {
    const n = y[r];
    j = n.priority, n.idle || (fe(n), n.advance(e), n.idle || t.push(n))
  }
  return j = 0, X = y, X.length = 0, y = t, y.length > 0
}

function lt(e, t) {
  const r = e.findIndex(t);
  return r < 0 ? e.length : r
}
var dt = {
    transparent: 0,
    aliceblue: 4042850303,
    antiquewhite: 4209760255,
    aqua: 16777215,
    aquamarine: 2147472639,
    azure: 4043309055,
    beige: 4126530815,
    bisque: 4293182719,
    black: 255,
    blanchedalmond: 4293643775,
    blue: 65535,
    blueviolet: 2318131967,
    brown: 2771004159,
    burlywood: 3736635391,
    burntsienna: 3934150143,
    cadetblue: 1604231423,
    chartreuse: 2147418367,
    chocolate: 3530104575,
    coral: 4286533887,
    cornflowerblue: 1687547391,
    cornsilk: 4294499583,
    crimson: 3692313855,
    cyan: 16777215,
    darkblue: 35839,
    darkcyan: 9145343,
    darkgoldenrod: 3095792639,
    darkgray: 2846468607,
    darkgreen: 6553855,
    darkgrey: 2846468607,
    darkkhaki: 3182914559,
    darkmagenta: 2332068863,
    darkolivegreen: 1433087999,
    darkorange: 4287365375,
    darkorchid: 2570243327,
    darkred: 2332033279,
    darksalmon: 3918953215,
    darkseagreen: 2411499519,
    darkslateblue: 1211993087,
    darkslategray: 793726975,
    darkslategrey: 793726975,
    darkturquoise: 13554175,
    darkviolet: 2483082239,
    deeppink: 4279538687,
    deepskyblue: 12582911,
    dimgray: 1768516095,
    dimgrey: 1768516095,
    dodgerblue: 512819199,
    firebrick: 2988581631,
    floralwhite: 4294635775,
    forestgreen: 579543807,
    fuchsia: 4278255615,
    gainsboro: 3705462015,
    ghostwhite: 4177068031,
    gold: 4292280575,
    goldenrod: 3668254975,
    gray: 2155905279,
    green: 8388863,
    greenyellow: 2919182335,
    grey: 2155905279,
    honeydew: 4043305215,
    hotpink: 4285117695,
    indianred: 3445382399,
    indigo: 1258324735,
    ivory: 4294963455,
    khaki: 4041641215,
    lavender: 3873897215,
    lavenderblush: 4293981695,
    lawngreen: 2096890111,
    lemonchiffon: 4294626815,
    lightblue: 2916673279,
    lightcoral: 4034953471,
    lightcyan: 3774873599,
    lightgoldenrodyellow: 4210742015,
    lightgray: 3553874943,
    lightgreen: 2431553791,
    lightgrey: 3553874943,
    lightpink: 4290167295,
    lightsalmon: 4288707327,
    lightseagreen: 548580095,
    lightskyblue: 2278488831,
    lightslategray: 2005441023,
    lightslategrey: 2005441023,
    lightsteelblue: 2965692159,
    lightyellow: 4294959359,
    lime: 16711935,
    limegreen: 852308735,
    linen: 4210091775,
    magenta: 4278255615,
    maroon: 2147483903,
    mediumaquamarine: 1724754687,
    mediumblue: 52735,
    mediumorchid: 3126187007,
    mediumpurple: 2473647103,
    mediumseagreen: 1018393087,
    mediumslateblue: 2070474495,
    mediumspringgreen: 16423679,
    mediumturquoise: 1221709055,
    mediumvioletred: 3340076543,
    midnightblue: 421097727,
    mintcream: 4127193855,
    mistyrose: 4293190143,
    moccasin: 4293178879,
    navajowhite: 4292783615,
    navy: 33023,
    oldlace: 4260751103,
    olive: 2155872511,
    olivedrab: 1804477439,
    orange: 4289003775,
    orangered: 4282712319,
    orchid: 3664828159,
    palegoldenrod: 4008225535,
    palegreen: 2566625535,
    paleturquoise: 2951671551,
    palevioletred: 3681588223,
    papayawhip: 4293907967,
    peachpuff: 4292524543,
    peru: 3448061951,
    pink: 4290825215,
    plum: 3718307327,
    powderblue: 2967529215,
    purple: 2147516671,
    rebeccapurple: 1714657791,
    red: 4278190335,
    rosybrown: 3163525119,
    royalblue: 1097458175,
    saddlebrown: 2336560127,
    salmon: 4202722047,
    sandybrown: 4104413439,
    seagreen: 780883967,
    seashell: 4294307583,
    sienna: 2689740287,
    silver: 3233857791,
    skyblue: 2278484991,
    slateblue: 1784335871,
    slategray: 1887473919,
    slategrey: 1887473919,
    snow: 4294638335,
    springgreen: 16744447,
    steelblue: 1182971135,
    tan: 3535047935,
    teal: 8421631,
    thistle: 3636451583,
    tomato: 4284696575,
    turquoise: 1088475391,
    violet: 4001558271,
    wheat: 4125012991,
    white: 4294967295,
    whitesmoke: 4126537215,
    yellow: 4294902015,
    yellowgreen: 2597139199
  },
  b = "[-+]?\\d*\\.?\\d+",
  Q = b + "%";

function Z(...e) {
  return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)"
}
var ct = new RegExp("rgb" + Z(b, b, b)),
  ft = new RegExp("rgba" + Z(b, b, b, b)),
  ht = new RegExp("hsl" + Z(b, Q, Q)),
  pt = new RegExp("hsla" + Z(b, Q, Q, b)),
  mt = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  gt = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  vt = /^#([0-9a-fA-F]{6})$/,
  yt = /^#([0-9a-fA-F]{8})$/;

function bt(e) {
  let t;
  return typeof e == "number" ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = vt.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : _ && _[e] !== void 0 ? _[e] : (t = ct.exec(e)) ? (A(t[1]) << 24 | A(t[2]) << 16 | A(t[3]) << 8 | 255) >>> 0 : (t = ft.exec(e)) ? (A(t[1]) << 24 | A(t[2]) << 16 | A(t[3]) << 8 | _e(t[4])) >>> 0 : (t = mt.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = yt.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = gt.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = ht.exec(e)) ? (we(xe(t[1]), q(t[2]), q(t[3])) | 255) >>> 0 : (t = pt.exec(e)) ? (we(xe(t[1]), q(t[2]), q(t[3])) | _e(t[4])) >>> 0 : null
}

function Y(e, t, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * 6 * r : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
}

function we(e, t, r) {
  const n = r < .5 ? r * (1 + t) : r + t - r * t,
    i = 2 * r - n,
    a = Y(i, n, e + 1 / 3),
    s = Y(i, n, e),
    u = Y(i, n, e - 1 / 3);
  return Math.round(a * 255) << 24 | Math.round(s * 255) << 16 | Math.round(u * 255) << 8
}

function A(e) {
  const t = parseInt(e, 10);
  return t < 0 ? 0 : t > 255 ? 255 : t
}

function xe(e) {
  return (parseFloat(e) % 360 + 360) % 360 / 360
}

function _e(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 1 ? 255 : Math.round(t * 255)
}

function q(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 100 ? 1 : t / 100
}

function Ae(e) {
  let t = bt(e);
  if (t === null) return e;
  t = t || 0;
  const r = (t & 4278190080) >>> 24,
    n = (t & 16711680) >>> 16,
    i = (t & 65280) >>> 8,
    a = (t & 255) / 255;
  return `rgba(${r}, ${n}, ${i}, ${a})`
}
var V = (e, t, r) => {
  if (d.fun(e)) return e;
  if (d.arr(e)) return V({
    range: e,
    output: t,
    extrapolate: r
  });
  if (d.str(e.output[0])) return ce(e);
  const n = e,
    i = n.output,
    a = n.range || [0, 1],
    s = n.extrapolateLeft || n.extrapolate || "extend",
    u = n.extrapolateRight || n.extrapolate || "extend",
    c = n.easing || (o => o);
  return o => {
    const g = xt(o, a);
    return wt(o, a[g], a[g + 1], i[g], i[g + 1], c, s, u, n.map)
  }
};

function wt(e, t, r, n, i, a, s, u, c) {
  let o = c ? c(e) : e;
  if (o < t) {
    if (s === "identity") return o;
    s === "clamp" && (o = t)
  }
  if (o > r) {
    if (u === "identity") return o;
    u === "clamp" && (o = r)
  }
  return n === i ? n : t === r ? e <= t ? n : i : (t === -1 / 0 ? o = -o : r === 1 / 0 ? o = o - t : o = (o - t) / (r - t), o = a(o), n === -1 / 0 ? o = -o : i === 1 / 0 ? o = o + n : o = o * (i - n) + n, o)
}

function xt(e, t) {
  for (var r = 1; r < t.length - 1 && !(t[r] >= e); ++r);
  return r - 1
}
var O = Symbol.for("FluidValue.get"),
  $ = Symbol.for("FluidValue.observers"),
  F = e => !!(e && e[O]),
  R = e => e && e[O] ? e[O]() : e;

function _t(e, t) {
  e.eventObserved ? e.eventObserved(t) : e(t)
}

function D(e, t) {
  const r = e[$];
  r && r.forEach(n => {
    _t(n, t)
  })
}
var Le = class {
    constructor(e) {
      if (!e && !(e = this.get)) throw Error("Unknown getter");
      At(this, e)
    }
  },
  At = (e, t) => je(e, O, t);

function pe(e, t) {
  if (e[O]) {
    let r = e[$];
    r || je(e, $, r = new Set), r.has(t) || (r.add(t), e.observerAdded && e.observerAdded(r.size, t))
  }
  return t
}

function G(e, t) {
  const r = e[$];
  if (r && r.has(t)) {
    const n = r.size - 1;
    n ? r.delete(t) : e[$] = null, e.observerRemoved && e.observerRemoved(n, t)
  }
}
var je = (e, t, r) => Object.defineProperty(e, t, {
    value: r,
    writable: !0,
    configurable: !0
  }),
  N = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
  kt = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
  ke = new RegExp(`(${N.source})(%|[a-z]+)`, "i"),
  St = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
  K = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
  Qe = e => {
    const [t, r] = Ft(e);
    if (!t || de()) return e;
    const n = window.getComputedStyle(document.documentElement).getPropertyValue(t);
    if (n) return n.trim();
    if (r && r.startsWith("--")) {
      const i = window.getComputedStyle(document.documentElement).getPropertyValue(r);
      return i || e
    } else {
      if (r && K.test(r)) return Qe(r);
      if (r) return r
    }
    return e
  },
  Ft = e => {
    const t = K.exec(e);
    if (!t) return [, ];
    const [, r, n] = t;
    return [r, n]
  },
  ee, Rt = (e, t, r, n, i) => `rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${i})`,
  De = e => {
    ee || (ee = _ ? new RegExp(`(${Object.keys(_).join("|")})(?!\\w)`, "g") : /^\b$/);
    const t = e.output.map(a => R(a).replace(K, Qe).replace(kt, Ae).replace(ee, Ae)),
      r = t.map(a => a.match(N).map(Number)),
      i = r[0].map((a, s) => r.map(u => {
        if (!(s in u)) throw Error('The arity of each "output" value must be equal');
        return u[s]
      })).map(a => V({
        ...e,
        output: a
      }));
    return a => {
      var c;
      const s = !ke.test(t[0]) && ((c = t.find(o => ke.test(o))) == null ? void 0 : c.replace(N, ""));
      let u = 0;
      return t[0].replace(N, () => `${i[u++](a)}${s||""}`).replace(St, Rt)
    }
  },
  Ge = "react-spring: ",
  Be = e => {
    const t = e;
    let r = !1;
    if (typeof t != "function") throw new TypeError(`${Ge}once requires a function parameter`);
    return (...n) => {
      r || (t(...n), r = !0)
    }
  },
  Pt = Be(console.warn);

function It() {
  Pt(`${Ge}The "interpolate" function is deprecated in v9 (use "to" instead)`)
}
Be(console.warn);

function We(e) {
  return d.str(e) && (e[0] == "#" || /\d/.test(e) || !de() && K.test(e) || e in (_ || {}))
}
var He = de() ? h.useEffect : h.useLayoutEffect,
  Et = () => {
    const e = h.useRef(!1);
    return He(() => (e.current = !0, () => {
      e.current = !1
    }), []), e
  };

function Vt() {
  const e = h.useState()[1],
    t = Et();
  return () => {
    t.current && e(Math.random())
  }
}

function Ot(e, t) {
  const [r] = h.useState(() => ({
    inputs: t,
    result: e()
  })), n = h.useRef(), i = n.current;
  let a = i;
  return a ? t && a.inputs && $t(t, a.inputs) || (a = {
    inputs: t,
    result: e()
  }) : a = r, h.useEffect(() => {
    n.current = a, i == r && (r.inputs = r.result = void 0)
  }, [a]), a.result
}

function $t(e, t) {
  if (e.length !== t.length) return !1;
  for (let r = 0; r < e.length; r++)
    if (e[r] !== t[r]) return !1;
  return !0
}
var Ct = e => h.useEffect(e, Tt),
  Tt = [],
  C = Symbol.for("Animated:node"),
  Ut = e => !!e && e[C] === e,
  me = e => e && e[C],
  Ze = (e, t) => at(e, C, t),
  ge = e => e && e[C] && e[C].getPayload(),
  Ke = class {
    constructor() {
      Ze(this, this)
    }
    getPayload() {
      return this.payload || []
    }
  },
  J = class extends Ke {
    constructor(e) {
      super(), this._value = e, this.done = !0, this.durationProgress = 0, d.num(this._value) && (this.lastPosition = this._value)
    }
    static create(e) {
      return new J(e)
    }
    getPayload() {
      return [this]
    }
    getValue() {
      return this._value
    }
    setValue(e, t) {
      return d.num(e) && (this.lastPosition = e, t && (e = Math.round(e / t) * t, this.done && (this.lastPosition = e))), this._value === e ? !1 : (this._value = e, !0)
    }
    reset() {
      const {
        done: e
      } = this;
      this.done = !1, d.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null)
    }
  },
  ve = class extends J {
    constructor(e) {
      super(0), this._string = null, this._toString = V({
        output: [e, e]
      })
    }
    static create(e) {
      return new ve(e)
    }
    getValue() {
      const e = this._string;
      return e ?? (this._string = this._toString(this._value))
    }
    setValue(e) {
      if (d.str(e)) {
        if (e == this._string) return !1;
        this._string = e, this._value = 1
      } else if (super.setValue(e)) this._string = null;
      else return !1;
      return !0
    }
    reset(e) {
      e && (this._toString = V({
        output: [this.getValue(), e]
      })), this._value = 0, super.reset()
    }
  },
  B = {
    dependencies: null
  },
  M = class extends Ke {
    constructor(e) {
      super(), this.source = e, this.setValue(e)
    }
    getValue(e) {
      const t = {};
      return L(this.source, (r, n) => {
        Ut(r) ? t[n] = r.getValue(e) : F(r) ? t[n] = R(r) : e || (t[n] = r)
      }), t
    }
    setValue(e) {
      this.source = e, this.payload = this._makePayload(e)
    }
    reset() {
      this.payload && m(this.payload, e => e.reset())
    }
    _makePayload(e) {
      if (e) {
        const t = new Set;
        return L(e, this._addToPayload, t), Array.from(t)
      }
    }
    _addToPayload(e) {
      B.dependencies && F(e) && B.dependencies.add(e);
      const t = ge(e);
      t && m(t, r => this.add(r))
    }
  },
  Je = class extends M {
    constructor(e) {
      super(e)
    }
    static create(e) {
      return new Je(e)
    }
    getValue() {
      return this.source.map(e => e.getValue())
    }
    setValue(e) {
      const t = this.getPayload();
      return e.length == t.length ? t.map((r, n) => r.setValue(e[n])).some(Boolean) : (super.setValue(e.map(qt)), !0)
    }
  };

function qt(e) {
  return (We(e) ? ve : J).create(e)
}

function Nt(e) {
  const t = me(e);
  return t ? t.constructor : d.arr(e) ? Je : We(e) ? ve : J
}
var Se = (e, t) => {
    const r = !d.fun(e) || e.prototype && e.prototype.isReactComponent;
    return h.forwardRef((n, i) => {
      const a = h.useRef(null),
        s = r && h.useCallback(v => {
          a.current = jt(i, v)
        }, [i]),
        [u, c] = Lt(n, t),
        o = Vt(),
        g = () => {
          const v = a.current;
          if (r && !v) return;
          (v ? t.applyAnimatedValues(v, u.getValue(!0)) : !1) === !1 && o()
        },
        f = new zt(g, c),
        p = h.useRef();
      He(() => (p.current = f, m(c, v => pe(v, f)), () => {
        p.current && (m(p.current.deps, v => G(v, p.current)), l.cancel(p.current.update))
      })), h.useEffect(g, []), Ct(() => () => {
        const v = p.current;
        m(v.deps, be => G(be, v))
      });
      const Ye = t.getComponentProps(u.getValue());
      return h.createElement(e, {
        ...Ye,
        ref: s
      })
    })
  },
  zt = class {
    constructor(e, t) {
      this.update = e, this.deps = t
    }
    eventObserved(e) {
      e.type == "change" && l.write(this.update)
    }
  };

function Lt(e, t) {
  const r = new Set;
  return B.dependencies = r, e.style && (e = {
    ...e,
    style: t.createAnimatedStyle(e.style)
  }), e = new M(e), B.dependencies = null, [e, r]
}

function jt(e, t) {
  return e && (d.fun(e) ? e(t) : e.current = t), t
}
var Fe = Symbol.for("AnimatedComponent"),
  Qt = (e, {
    applyAnimatedValues: t = () => !1,
    createAnimatedStyle: r = i => new M(i),
    getComponentProps: n = i => i
  } = {}) => {
    const i = {
        applyAnimatedValues: t,
        createAnimatedStyle: r,
        getComponentProps: n
      },
      a = s => {
        const u = Re(s) || "Anonymous";
        return d.str(s) ? s = a[s] || (a[s] = Se(s, i)) : s = s[Fe] || (s[Fe] = Se(s, i)), s.displayName = `Animated(${u})`, s
      };
    return L(e, (s, u) => {
      d.arr(e) && (u = Re(s)), a[u] = a(s)
    }), {
      animated: a
    }
  },
  Re = e => d.str(e) ? e : e && d.str(e.displayName) ? e.displayName : d.fun(e) && e.name || null,
  Pe = e => e instanceof Me,
  Dt = 1,
  Me = class extends Le {
    constructor() {
      super(...arguments), this.id = Dt++, this._priority = 0
    }
    get priority() {
      return this._priority
    }
    set priority(e) {
      this._priority != e && (this._priority = e, this._onPriorityChange(e))
    }
    get() {
      const e = me(this);
      return e && e.getValue()
    }
    to(...e) {
      return S.to(this, e)
    }
    interpolate(...e) {
      return It(), S.to(this, e)
    }
    toJSON() {
      return this.get()
    }
    observerAdded(e) {
      e == 1 && this._attach()
    }
    observerRemoved(e) {
      e == 0 && this._detach()
    }
    _attach() {}
    _detach() {}
    _onChange(e, t = !1) {
      D(this, {
        type: "change",
        parent: this,
        value: e,
        idle: t
      })
    }
    _onPriorityChange(e) {
      this.idle || he.sort(this), D(this, {
        type: "priority",
        parent: this,
        priority: e
      })
    }
  },
  ye = ({
    children: e,
    ...t
  }) => {
    const r = h.useContext(W),
      n = t.pause || !!r.pause,
      i = t.immediate || !!r.immediate;
    t = Ot(() => ({
      pause: n,
      immediate: i
    }), [n, i]);
    const {
      Provider: a
    } = W;
    return h.createElement(a, {
      value: t
    }, e)
  },
  W = Gt(ye, {});
ye.Provider = W.Provider;
ye.Consumer = W.Consumer;

function Gt(e, t) {
  return Object.assign(e, h.createContext(t)), e.Provider._context = e, e.Consumer._context = e, e
}
var Bt = class extends Me {
  constructor(e, t) {
    super(), this.source = e, this.idle = !0, this._active = new Set, this.calc = V(...t);
    const r = this._get(),
      n = Nt(r);
    Ze(this, n.create(r))
  }
  advance(e) {
    const t = this._get(),
      r = this.get();
    st(t, r) || (me(this).setValue(t), this._onChange(t, this.idle)), !this.idle && Ie(this._active) && te(this)
  }
  _get() {
    const e = d.arr(this.source) ? this.source.map(R) : P(R(this.source));
    return this.calc(...e)
  }
  _start() {
    this.idle && !Ie(this._active) && (this.idle = !1, m(ge(this), e => {
      e.done = !1
    }), S.skipAnimation ? (l.batchedUpdates(() => this.advance()), te(this)) : he.start(this))
  }
  _attach() {
    let e = 1;
    m(P(this.source), t => {
      F(t) && pe(t, this), Pe(t) && (t.idle || this._active.add(t), e = Math.max(e, t.priority + 1))
    }), this.priority = e, this._start()
  }
  _detach() {
    m(P(this.source), e => {
      F(e) && G(e, this)
    }), this._active.clear(), te(this)
  }
  eventObserved(e) {
    e.type == "change" ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : e.type == "idle" ? this._active.delete(e.parent) : e.type == "priority" && (this.priority = P(this.source).reduce((t, r) => Math.max(t, (Pe(r) ? r.priority : 0) + 1), 0))
  }
};

function Wt(e) {
  return e.idle !== !1
}

function Ie(e) {
  return !e.size || Array.from(e).every(Wt)
}

function te(e) {
  e.idle || (e.idle = !0, m(ge(e), t => {
    t.done = !0
  }), D(e, {
    type: "idle",
    parent: e
  }))
}
S.assign({
  createStringInterpolator: De,
  to: (e, t) => new Bt(e, t)
});
var Xe = /^--/;

function Ht(e, t) {
  return t == null || typeof t == "boolean" || t === "" ? "" : typeof t == "number" && t !== 0 && !Xe.test(e) && !(E.hasOwnProperty(e) && E[e]) ? t + "px" : ("" + t).trim()
}
var Ee = {};

function Zt(e, t) {
  if (!e.nodeType || !e.setAttribute) return !1;
  const r = e.nodeName === "filter" || e.parentNode && e.parentNode.nodeName === "filter",
    {
      style: n,
      children: i,
      scrollTop: a,
      scrollLeft: s,
      viewBox: u,
      ...c
    } = t,
    o = Object.values(c),
    g = Object.keys(c).map(f => r || e.hasAttribute(f) ? f : Ee[f] || (Ee[f] = f.replace(/([A-Z])/g, p => "-" + p.toLowerCase())));
  i !== void 0 && (e.textContent = i);
  for (const f in n)
    if (n.hasOwnProperty(f)) {
      const p = Ht(f, n[f]);
      Xe.test(f) ? e.style.setProperty(f, p) : e.style[f] = p
    } g.forEach((f, p) => {
    e.setAttribute(f, o[p])
  }), a !== void 0 && (e.scrollTop = a), s !== void 0 && (e.scrollLeft = s), u !== void 0 && e.setAttribute("viewBox", u)
}
var E = {
    animationIterationCount: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  },
  Kt = (e, t) => e + t.charAt(0).toUpperCase() + t.substring(1),
  Jt = ["Webkit", "Ms", "Moz", "O"];
E = Object.keys(E).reduce((e, t) => (Jt.forEach(r => e[Kt(r, t)] = e[t]), e), E);
var Mt = /^(matrix|translate|scale|rotate|skew)/,
  Xt = /^(translate)/,
  Yt = /^(rotate|skew)/,
  re = (e, t) => d.num(e) && e !== 0 ? e + t : e,
  z = (e, t) => d.arr(e) ? e.every(r => z(r, t)) : d.num(e) ? e === t : parseFloat(e) === t,
  er = class extends M {
    constructor({
      x: e,
      y: t,
      z: r,
      ...n
    }) {
      const i = [],
        a = [];
      (e || t || r) && (i.push([e || 0, t || 0, r || 0]), a.push(s => [`translate3d(${s.map(u=>re(u,"px")).join(",")})`, z(s, 0)])), L(n, (s, u) => {
        if (u === "transform") i.push([s || ""]), a.push(c => [c, c === ""]);
        else if (Mt.test(u)) {
          if (delete n[u], d.und(s)) return;
          const c = Xt.test(u) ? "px" : Yt.test(u) ? "deg" : "";
          i.push(P(s)), a.push(u === "rotate3d" ? ([o, g, f, p]) => [`rotate3d(${o},${g},${f},${re(p,c)})`, z(p, 0)] : o => [`${u}(${o.map(g=>re(g,c)).join(",")})`, z(o, u.startsWith("scale") ? 1 : 0)])
        }
      }), i.length && (n.transform = new tr(i, a)), super(n)
    }
  },
  tr = class extends Le {
    constructor(e, t) {
      super(), this.inputs = e, this.transforms = t, this._value = null
    }
    get() {
      return this._value || (this._value = this._get())
    }
    _get() {
      let e = "",
        t = !0;
      return m(this.inputs, (r, n) => {
        const i = R(r[0]),
          [a, s] = this.transforms[n](d.arr(i) ? i : r.map(R));
        e += " " + a, t = t && s
      }), t ? "none" : e
    }
    observerAdded(e) {
      e == 1 && m(this.inputs, t => m(t, r => F(r) && pe(r, this)))
    }
    observerRemoved(e) {
      e == 0 && m(this.inputs, t => m(t, r => F(r) && G(r, this)))
    }
    eventObserved(e) {
      e.type == "change" && (this._value = null), D(this, e)
    }
  },
  rr = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"];
S.assign({
  batchedUpdates: et.unstable_batchedUpdates,
  createStringInterpolator: De,
  colors: dt
});
Qt(rr, {
  applyAnimatedValues: Zt,
  createAnimatedStyle: e => new er(e),
  getComponentProps: ({
    scrollTop: e,
    scrollLeft: t,
    ...r
  }) => r
});