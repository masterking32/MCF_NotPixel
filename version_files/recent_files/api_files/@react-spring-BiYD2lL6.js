import {
  r as A
} from "./react-DjWS3H3h.js";
import {
  r as bn
} from "./react-dom-DCoj3sTC.js";
var tt = ye(),
  m = e => ve(e, tt),
  nt = ye();
m.write = e => ve(e, nt);
var Ve = ye();
m.onStart = e => ve(e, Ve);
var it = ye();
m.onFrame = e => ve(e, it);
var st = ye();
m.onFinish = e => ve(e, st);
var K = [];
m.setTimeout = (e, t) => {
  const n = m.now() + t,
    i = () => {
      const r = K.findIndex(a => a.cancel == i);
      ~r && K.splice(r, 1), z -= ~r ? 1 : 0
    },
    s = {
      time: n,
      handler: e,
      cancel: i
    };
  return K.splice(Qt(n), 0, s), z += 1, Nt(), s
};
var Qt = e => ~(~K.findIndex(t => t.time > e) || ~K.length);
m.cancel = e => {
  Ve.delete(e), it.delete(e), st.delete(e), tt.delete(e), nt.delete(e)
};
m.sync = e => {
  Le = !0, m.batchedUpdates(e), Le = !1
};
m.throttle = e => {
  let t;

  function n() {
    try {
      e(...t)
    } finally {
      t = null
    }
  }

  function i(...s) {
    t = s, m.onStart(n)
  }
  return i.handler = e, i.cancel = () => {
    Ve.delete(n), t = null
  }, i
};
var rt = typeof window < "u" ? window.requestAnimationFrame : () => {};
m.use = e => rt = e;
m.now = typeof performance < "u" ? () => performance.now() : Date.now;
m.batchedUpdates = e => e();
m.catch = console.error;
m.frameLoop = "always";
m.advance = () => {
  m.frameLoop !== "demand" ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : xt()
};
var N = -1,
  z = 0,
  Le = !1;

function ve(e, t) {
  Le ? (t.delete(e), e(0)) : (t.add(e), Nt())
}

function Nt() {
  N < 0 && (N = 0, m.frameLoop !== "demand" && rt(zt))
}

function _n() {
  N = -1
}

function zt() {
  ~N && (rt(zt), m.batchedUpdates(xt))
}

function xt() {
  const e = N;
  N = m.now();
  const t = Qt(N);
  if (t && (Dt(K.splice(0, t), n => n.handler()), z -= t), !z) {
    _n();
    return
  }
  Ve.flush(), tt.flush(e ? Math.min(64, N - e) : 16.667), it.flush(), nt.flush(), st.flush()
}

function ye() {
  let e = new Set,
    t = e;
  return {
    add(n) {
      z += t == e && !e.has(n) ? 1 : 0, e.add(n)
    },
    delete(n) {
      return z -= t == e && e.has(n) ? 1 : 0, e.delete(n)
    },
    flush(n) {
      t.size && (e = new Set, z -= t.size, Dt(t, i => i(n) && e.add(i)), z += e.size, t = e)
    }
  }
}

function Dt(e, t) {
  e.forEach(n => {
    try {
      t(n)
    } catch (i) {
      m.catch(i)
    }
  })
}
var wn = Object.defineProperty,
  Sn = (e, t) => {
    for (var n in t) wn(e, n, {
      get: t[n],
      enumerable: !0
    })
  },
  q = {};
Sn(q, {
  assign: () => An,
  colors: () => x,
  createStringInterpolator: () => ot,
  skipAnimation: () => Lt,
  to: () => Bt,
  willAdvance: () => ut
});

function Ge() {}
var Pn = (e, t, n) => Object.defineProperty(e, t, {
    value: n,
    writable: !0,
    configurable: !0
  }),
  o = {
    arr: Array.isArray,
    obj: e => !!e && e.constructor.name === "Object",
    fun: e => typeof e == "function",
    str: e => typeof e == "string",
    num: e => typeof e == "number",
    und: e => e === void 0
  };

function j(e, t) {
  if (o.arr(e)) {
    if (!o.arr(t) || e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++)
      if (e[n] !== t[n]) return !1;
    return !0
  }
  return e === t
}
var S = (e, t) => e.forEach(t);

function $(e, t, n) {
  if (o.arr(e)) {
    for (let i = 0; i < e.length; i++) t.call(n, e[i], `${i}`);
    return
  }
  for (const i in e) e.hasOwnProperty(i) && t.call(n, e[i], i)
}
var k = e => o.und(e) ? [] : o.arr(e) ? e : [e];

function se(e, t) {
  if (e.size) {
    const n = Array.from(e);
    e.clear(), S(n, t)
  }
}
var ie = (e, ...t) => se(e, n => n(...t)),
  at = () => typeof window > "u" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
  ot, Bt, x = null,
  Lt = !1,
  ut = Ge,
  An = e => {
    e.to && (Bt = e.to), e.now && (m.now = e.now), e.colors !== void 0 && (x = e.colors), e.skipAnimation != null && (Lt = e.skipAnimation), e.createStringInterpolator && (ot = e.createStringInterpolator), e.requestAnimationFrame && m.use(e.requestAnimationFrame), e.batchedUpdates && (m.batchedUpdates = e.batchedUpdates), e.willAdvance && (ut = e.willAdvance), e.frameLoop && (m.frameLoop = e.frameLoop)
  },
  re = new Set,
  V = [],
  Qe = [],
  Re = 0,
  Ee = {
    get idle() {
      return !re.size && !V.length
    },
    start(e) {
      Re > e.priority ? (re.add(e), m.onStart(In)) : (Gt(e), m(He))
    },
    advance: He,
    sort(e) {
      if (Re) m.onFrame(() => Ee.sort(e));
      else {
        const t = V.indexOf(e);
        ~t && (V.splice(t, 1), Ht(e))
      }
    },
    clear() {
      V = [], re.clear()
    }
  };

function In() {
  re.forEach(Gt), re.clear(), m(He)
}

function Gt(e) {
  V.includes(e) || Ht(e)
}

function Ht(e) {
  V.splice(Rn(V, t => t.priority > e.priority), 0, e)
}

function He(e) {
  const t = Qe;
  for (let n = 0; n < V.length; n++) {
    const i = V[n];
    Re = i.priority, i.idle || (ut(i), i.advance(e), i.idle || t.push(i))
  }
  return Re = 0, Qe = V, Qe.length = 0, V = t, V.length > 0
}

function Rn(e, t) {
  const n = e.findIndex(t);
  return n < 0 ? e.length : n
}
var kn = (e, t, n) => Math.min(Math.max(n, e), t),
  On = {
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
  T = "[-+]?\\d*\\.?\\d+",
  ke = T + "%";

function Fe(...e) {
  return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)"
}
var Cn = new RegExp("rgb" + Fe(T, T, T)),
  Mn = new RegExp("rgba" + Fe(T, T, T, T)),
  Vn = new RegExp("hsl" + Fe(T, ke, ke)),
  En = new RegExp("hsla" + Fe(T, ke, ke, T)),
  Fn = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  Tn = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  qn = /^#([0-9a-fA-F]{6})$/,
  Un = /^#([0-9a-fA-F]{8})$/;

function $n(e) {
  let t;
  return typeof e == "number" ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = qn.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : x && x[e] !== void 0 ? x[e] : (t = Cn.exec(e)) ? (W(t[1]) << 24 | W(t[2]) << 16 | W(t[3]) << 8 | 255) >>> 0 : (t = Mn.exec(e)) ? (W(t[1]) << 24 | W(t[2]) << 16 | W(t[3]) << 8 | vt(t[4])) >>> 0 : (t = Fn.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = Un.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = Tn.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = Vn.exec(e)) ? (pt(gt(t[1]), we(t[2]), we(t[3])) | 255) >>> 0 : (t = En.exec(e)) ? (pt(gt(t[1]), we(t[2]), we(t[3])) | vt(t[4])) >>> 0 : null
}

function Ne(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}

function pt(e, t, n) {
  const i = n < .5 ? n * (1 + t) : n + t - n * t,
    s = 2 * n - i,
    r = Ne(s, i, e + 1 / 3),
    a = Ne(s, i, e),
    u = Ne(s, i, e - 1 / 3);
  return Math.round(r * 255) << 24 | Math.round(a * 255) << 16 | Math.round(u * 255) << 8
}

function W(e) {
  const t = parseInt(e, 10);
  return t < 0 ? 0 : t > 255 ? 255 : t
}

function gt(e) {
  return (parseFloat(e) % 360 + 360) % 360 / 360
}

function vt(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 1 ? 255 : Math.round(t * 255)
}

function we(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 100 ? 1 : t / 100
}

function yt(e) {
  let t = $n(e);
  if (t === null) return e;
  t = t || 0;
  const n = (t & 4278190080) >>> 24,
    i = (t & 16711680) >>> 16,
    s = (t & 65280) >>> 8,
    r = (t & 255) / 255;
  return `rgba(${n}, ${i}, ${s}, ${r})`
}
var ue = (e, t, n) => {
  if (o.fun(e)) return e;
  if (o.arr(e)) return ue({
    range: e,
    output: t,
    extrapolate: n
  });
  if (o.str(e.output[0])) return ot(e);
  const i = e,
    s = i.output,
    r = i.range || [0, 1],
    a = i.extrapolateLeft || i.extrapolate || "extend",
    u = i.extrapolateRight || i.extrapolate || "extend",
    d = i.easing || (c => c);
  return c => {
    const h = Qn(c, r);
    return jn(c, r[h], r[h + 1], s[h], s[h + 1], d, a, u, i.map)
  }
};

function jn(e, t, n, i, s, r, a, u, d) {
  let c = d ? d(e) : e;
  if (c < t) {
    if (a === "identity") return c;
    a === "clamp" && (c = t)
  }
  if (c > n) {
    if (u === "identity") return c;
    u === "clamp" && (c = n)
  }
  return i === s ? i : t === n ? e <= t ? i : s : (t === -1 / 0 ? c = -c : n === 1 / 0 ? c = c - t : c = (c - t) / (n - t), c = r(c), i === -1 / 0 ? c = -c : s === 1 / 0 ? c = c + i : c = c * (s - i) + i, c)
}

function Qn(e, t) {
  for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n);
  return n - 1
}
var Nn = (e, t = "end") => n => {
    n = t === "end" ? Math.min(n, .999) : Math.max(n, .001);
    const i = n * e,
      s = t === "end" ? Math.floor(i) : Math.ceil(i);
    return kn(0, 1, s / e)
  },
  Oe = 1.70158,
  Se = Oe * 1.525,
  bt = Oe + 1,
  _t = 2 * Math.PI / 3,
  wt = 2 * Math.PI / 4.5,
  Pe = e => e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375,
  zn = {
    linear: e => e,
    easeInQuad: e => e * e,
    easeOutQuad: e => 1 - (1 - e) * (1 - e),
    easeInOutQuad: e => e < .5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2,
    easeInCubic: e => e * e * e,
    easeOutCubic: e => 1 - Math.pow(1 - e, 3),
    easeInOutCubic: e => e < .5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2,
    easeInQuart: e => e * e * e * e,
    easeOutQuart: e => 1 - Math.pow(1 - e, 4),
    easeInOutQuart: e => e < .5 ? 8 * e * e * e * e : 1 - Math.pow(-2 * e + 2, 4) / 2,
    easeInQuint: e => e * e * e * e * e,
    easeOutQuint: e => 1 - Math.pow(1 - e, 5),
    easeInOutQuint: e => e < .5 ? 16 * e * e * e * e * e : 1 - Math.pow(-2 * e + 2, 5) / 2,
    easeInSine: e => 1 - Math.cos(e * Math.PI / 2),
    easeOutSine: e => Math.sin(e * Math.PI / 2),
    easeInOutSine: e => -(Math.cos(Math.PI * e) - 1) / 2,
    easeInExpo: e => e === 0 ? 0 : Math.pow(2, 10 * e - 10),
    easeOutExpo: e => e === 1 ? 1 : 1 - Math.pow(2, -10 * e),
    easeInOutExpo: e => e === 0 ? 0 : e === 1 ? 1 : e < .5 ? Math.pow(2, 20 * e - 10) / 2 : (2 - Math.pow(2, -20 * e + 10)) / 2,
    easeInCirc: e => 1 - Math.sqrt(1 - Math.pow(e, 2)),
    easeOutCirc: e => Math.sqrt(1 - Math.pow(e - 1, 2)),
    easeInOutCirc: e => e < .5 ? (1 - Math.sqrt(1 - Math.pow(2 * e, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * e + 2, 2)) + 1) / 2,
    easeInBack: e => bt * e * e * e - Oe * e * e,
    easeOutBack: e => 1 + bt * Math.pow(e - 1, 3) + Oe * Math.pow(e - 1, 2),
    easeInOutBack: e => e < .5 ? Math.pow(2 * e, 2) * ((Se + 1) * 2 * e - Se) / 2 : (Math.pow(2 * e - 2, 2) * ((Se + 1) * (e * 2 - 2) + Se) + 2) / 2,
    easeInElastic: e => e === 0 ? 0 : e === 1 ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((e * 10 - 10.75) * _t),
    easeOutElastic: e => e === 0 ? 0 : e === 1 ? 1 : Math.pow(2, -10 * e) * Math.sin((e * 10 - .75) * _t) + 1,
    easeInOutElastic: e => e === 0 ? 0 : e === 1 ? 1 : e < .5 ? -(Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * wt)) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * wt) / 2 + 1,
    easeInBounce: e => 1 - Pe(1 - e),
    easeOutBounce: Pe,
    easeInOutBounce: e => e < .5 ? (1 - Pe(1 - 2 * e)) / 2 : (1 + Pe(2 * e - 1)) / 2,
    steps: Nn
  },
  ce = Symbol.for("FluidValue.get"),
  J = Symbol.for("FluidValue.observers"),
  M = e => !!(e && e[ce]),
  R = e => e && e[ce] ? e[ce]() : e,
  St = e => e[J] || null;

function xn(e, t) {
  e.eventObserved ? e.eventObserved(t) : e(t)
}

function le(e, t) {
  const n = e[J];
  n && n.forEach(i => {
    xn(i, t)
  })
}
var Wt = class {
    constructor(e) {
      if (!e && !(e = this.get)) throw Error("Unknown getter");
      Dn(this, e)
    }
  },
  Dn = (e, t) => Kt(e, ce, t);

function X(e, t) {
  if (e[ce]) {
    let n = e[J];
    n || Kt(e, J, n = new Set), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t))
  }
  return t
}

function de(e, t) {
  const n = e[J];
  if (n && n.has(t)) {
    const i = n.size - 1;
    i ? n.delete(t) : e[J] = null, e.observerRemoved && e.observerRemoved(i, t)
  }
}
var Kt = (e, t, n) => Object.defineProperty(e, t, {
    value: n,
    writable: !0,
    configurable: !0
  }),
  Ae = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
  Bn = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
  Pt = new RegExp(`(${Ae.source})(%|[a-z]+)`, "i"),
  Ln = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
  Te = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
  Zt = e => {
    const [t, n] = Gn(e);
    if (!t || at()) return e;
    const i = window.getComputedStyle(document.documentElement).getPropertyValue(t);
    if (i) return i.trim();
    if (n && n.startsWith("--")) {
      const s = window.getComputedStyle(document.documentElement).getPropertyValue(n);
      return s || e
    } else {
      if (n && Te.test(n)) return Zt(n);
      if (n) return n
    }
    return e
  },
  Gn = e => {
    const t = Te.exec(e);
    if (!t) return [, ];
    const [, n, i] = t;
    return [n, i]
  },
  ze, Hn = (e, t, n, i, s) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(i)}, ${s})`,
  Jt = e => {
    ze || (ze = x ? new RegExp(`(${Object.keys(x).join("|")})(?!\\w)`, "g") : /^\b$/);
    const t = e.output.map(r => R(r).replace(Te, Zt).replace(Bn, yt).replace(ze, yt)),
      n = t.map(r => r.match(Ae).map(Number)),
      s = n[0].map((r, a) => n.map(u => {
        if (!(a in u)) throw Error('The arity of each "output" value must be equal');
        return u[a]
      })).map(r => ue({
        ...e,
        output: r
      }));
    return r => {
      var d;
      const a = !Pt.test(t[0]) && ((d = t.find(c => Pt.test(c))) == null ? void 0 : d.replace(Ae, ""));
      let u = 0;
      return t[0].replace(Ae, () => `${s[u++](r)}${a||""}`).replace(Ln, Hn)
    }
  },
  ct = "react-spring: ",
  Xt = e => {
    const t = e;
    let n = !1;
    if (typeof t != "function") throw new TypeError(`${ct}once requires a function parameter`);
    return (...i) => {
      n || (t(...i), n = !0)
    }
  },
  Wn = Xt(console.warn);

function Kn() {
  Wn(`${ct}The "interpolate" function is deprecated in v9 (use "to" instead)`)
}
var Zn = Xt(console.warn);

function Jn() {
  Zn(`${ct}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`)
}

function qe(e) {
  return o.str(e) && (e[0] == "#" || /\d/.test(e) || !at() && Te.test(e) || e in (x || {}))
}
var lt = at() ? A.useEffect : A.useLayoutEffect,
  Xn = () => {
    const e = A.useRef(!1);
    return lt(() => (e.current = !0, () => {
      e.current = !1
    }), []), e
  };

function Yt() {
  const e = A.useState()[1],
    t = Xn();
  return () => {
    t.current && e(Math.random())
  }
}

function Yn(e, t) {
  const [n] = A.useState(() => ({
    inputs: t,
    result: e()
  })), i = A.useRef(), s = i.current;
  let r = s;
  return r ? t && r.inputs && ei(t, r.inputs) || (r = {
    inputs: t,
    result: e()
  }) : r = n, A.useEffect(() => {
    i.current = r, s == n && (n.inputs = n.result = void 0)
  }, [r]), r.result
}

function ei(e, t) {
  if (e.length !== t.length) return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t[n]) return !1;
  return !0
}
var en = e => A.useEffect(e, ti),
  ti = [];

function At(e) {
  const t = A.useRef();
  return A.useEffect(() => {
    t.current = e
  }), t.current
}
var fe = Symbol.for("Animated:node"),
  ni = e => !!e && e[fe] === e,
  U = e => e && e[fe],
  dt = (e, t) => Pn(e, fe, t),
  Ue = e => e && e[fe] && e[fe].getPayload(),
  tn = class {
    constructor() {
      dt(this, this)
    }
    getPayload() {
      return this.payload || []
    }
  },
  be = class extends tn {
    constructor(e) {
      super(), this._value = e, this.done = !0, this.durationProgress = 0, o.num(this._value) && (this.lastPosition = this._value)
    }
    static create(e) {
      return new be(e)
    }
    getPayload() {
      return [this]
    }
    getValue() {
      return this._value
    }
    setValue(e, t) {
      return o.num(e) && (this.lastPosition = e, t && (e = Math.round(e / t) * t, this.done && (this.lastPosition = e))), this._value === e ? !1 : (this._value = e, !0)
    }
    reset() {
      const {
        done: e
      } = this;
      this.done = !1, o.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null)
    }
  },
  he = class extends be {
    constructor(e) {
      super(0), this._string = null, this._toString = ue({
        output: [e, e]
      })
    }
    static create(e) {
      return new he(e)
    }
    getValue() {
      const e = this._string;
      return e ?? (this._string = this._toString(this._value))
    }
    setValue(e) {
      if (o.str(e)) {
        if (e == this._string) return !1;
        this._string = e, this._value = 1
      } else if (super.setValue(e)) this._string = null;
      else return !1;
      return !0
    }
    reset(e) {
      e && (this._toString = ue({
        output: [this.getValue(), e]
      })), this._value = 0, super.reset()
    }
  },
  Ce = {
    dependencies: null
  },
  $e = class extends tn {
    constructor(e) {
      super(), this.source = e, this.setValue(e)
    }
    getValue(e) {
      const t = {};
      return $(this.source, (n, i) => {
        ni(n) ? t[i] = n.getValue(e) : M(n) ? t[i] = R(n) : e || (t[i] = n)
      }), t
    }
    setValue(e) {
      this.source = e, this.payload = this._makePayload(e)
    }
    reset() {
      this.payload && S(this.payload, e => e.reset())
    }
    _makePayload(e) {
      if (e) {
        const t = new Set;
        return $(e, this._addToPayload, t), Array.from(t)
      }
    }
    _addToPayload(e) {
      Ce.dependencies && M(e) && Ce.dependencies.add(e);
      const t = Ue(e);
      t && S(t, n => this.add(n))
    }
  },
  nn = class extends $e {
    constructor(e) {
      super(e)
    }
    static create(e) {
      return new nn(e)
    }
    getValue() {
      return this.source.map(e => e.getValue())
    }
    setValue(e) {
      const t = this.getPayload();
      return e.length == t.length ? t.map((n, i) => n.setValue(e[i])).some(Boolean) : (super.setValue(e.map(ii)), !0)
    }
  };

function ii(e) {
  return (qe(e) ? he : be).create(e)
}

function We(e) {
  const t = U(e);
  return t ? t.constructor : o.arr(e) ? nn : qe(e) ? he : be
}
var It = (e, t) => {
    const n = !o.fun(e) || e.prototype && e.prototype.isReactComponent;
    return A.forwardRef((i, s) => {
      const r = A.useRef(null),
        a = n && A.useCallback(y => {
          r.current = ai(s, y)
        }, [s]),
        [u, d] = ri(i, t),
        c = Yt(),
        h = () => {
          const y = r.current;
          if (n && !y) return;
          (y ? t.applyAnimatedValues(y, u.getValue(!0)) : !1) === !1 && c()
        },
        l = new si(h, d),
        v = A.useRef();
      lt(() => (v.current = l, S(d, y => X(y, l)), () => {
        v.current && (S(v.current.deps, y => de(y, v.current)), m.cancel(v.current.update))
      })), A.useEffect(h, []), en(() => () => {
        const y = v.current;
        S(y.deps, p => de(p, y))
      });
      const _ = t.getComponentProps(u.getValue());
      return A.createElement(e, {
        ..._,
        ref: a
      })
    })
  },
  si = class {
    constructor(e, t) {
      this.update = e, this.deps = t
    }
    eventObserved(e) {
      e.type == "change" && m.write(this.update)
    }
  };

function ri(e, t) {
  const n = new Set;
  return Ce.dependencies = n, e.style && (e = {
    ...e,
    style: t.createAnimatedStyle(e.style)
  }), e = new $e(e), Ce.dependencies = null, [e, n]
}

function ai(e, t) {
  return e && (o.fun(e) ? e(t) : e.current = t), t
}
var Rt = Symbol.for("AnimatedComponent"),
  oi = (e, {
    applyAnimatedValues: t = () => !1,
    createAnimatedStyle: n = s => new $e(s),
    getComponentProps: i = s => s
  } = {}) => {
    const s = {
        applyAnimatedValues: t,
        createAnimatedStyle: n,
        getComponentProps: i
      },
      r = a => {
        const u = kt(a) || "Anonymous";
        return o.str(a) ? a = r[a] || (r[a] = It(a, s)) : a = a[Rt] || (a[Rt] = It(a, s)), a.displayName = `Animated(${u})`, a
      };
    return $(e, (a, u) => {
      o.arr(e) && (u = kt(a)), r[u] = r(a)
    }), {
      animated: r
    }
  },
  kt = e => o.str(e) ? e : e && o.str(e.displayName) ? e.displayName : o.fun(e) && e.name || null;

function B(e, ...t) {
  return o.fun(e) ? e(...t) : e
}
var ae = (e, t) => e === !0 || !!(t && e && (o.fun(e) ? e(t) : k(e).includes(t))),
  sn = (e, t) => o.obj(e) ? t && e[t] : e,
  rn = (e, t) => e.default === !0 ? e[t] : e.default ? e.default[t] : void 0,
  ui = e => e,
  ft = (e, t = ui) => {
    let n = ci;
    e.default && e.default !== !0 && (e = e.default, n = Object.keys(e));
    const i = {};
    for (const s of n) {
      const r = t(e[s], s);
      o.und(r) || (i[s] = r)
    }
    return i
  },
  ci = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"],
  li = {
    config: 1,
    from: 1,
    to: 1,
    ref: 1,
    loop: 1,
    reset: 1,
    pause: 1,
    cancel: 1,
    reverse: 1,
    immediate: 1,
    default: 1,
    delay: 1,
    onProps: 1,
    onStart: 1,
    onChange: 1,
    onPause: 1,
    onResume: 1,
    onRest: 1,
    onResolve: 1,
    items: 1,
    trail: 1,
    sort: 1,
    expires: 1,
    initial: 1,
    enter: 1,
    update: 1,
    leave: 1,
    children: 1,
    onDestroyed: 1,
    keys: 1,
    callId: 1,
    parentId: 1
  };

function di(e) {
  const t = {};
  let n = 0;
  if ($(e, (i, s) => {
      li[s] || (t[s] = i, n++)
    }), n) return t
}

function an(e) {
  const t = di(e);
  if (t) {
    const n = {
      to: t
    };
    return $(e, (i, s) => s in t || (n[s] = i)), n
  }
  return {
    ...e
  }
}

function me(e) {
  return e = R(e), o.arr(e) ? e.map(me) : qe(e) ? q.createStringInterpolator({
    range: [0, 1],
    output: [e, e]
  })(1) : e
}

function fi(e) {
  for (const t in e) return !0;
  return !1
}

function Ke(e) {
  return o.fun(e) || o.arr(e) && o.obj(e[0])
}

function hi(e, t) {
  var n;
  (n = e.ref) == null || n.delete(e), t == null || t.delete(e)
}

function mi(e, t) {
  var n;
  t && e.ref !== t && ((n = e.ref) == null || n.delete(e), t.add(e), e.ref = t)
}
var pi = {
    default: {
      tension: 170,
      friction: 26
    },
    gentle: {
      tension: 120,
      friction: 14
    },
    wobbly: {
      tension: 180,
      friction: 12
    },
    stiff: {
      tension: 210,
      friction: 20
    },
    slow: {
      tension: 280,
      friction: 60
    },
    molasses: {
      tension: 280,
      friction: 120
    }
  },
  Ze = {
    ...pi.default,
    mass: 1,
    damping: 1,
    easing: zn.linear,
    clamp: !1
  },
  gi = class {
    constructor() {
      this.velocity = 0, Object.assign(this, Ze)
    }
  };

function vi(e, t, n) {
  n && (n = {
    ...n
  }, Ot(n, t), t = {
    ...n,
    ...t
  }), Ot(e, t), Object.assign(e, t);
  for (const a in Ze) e[a] == null && (e[a] = Ze[a]);
  let {
    frequency: i,
    damping: s
  } = e;
  const {
    mass: r
  } = e;
  return o.und(i) || (i < .01 && (i = .01), s < 0 && (s = 0), e.tension = Math.pow(2 * Math.PI / i, 2) * r, e.friction = 4 * Math.PI * s * r / i), e
}

function Ot(e, t) {
  if (!o.und(t.decay)) e.duration = void 0;
  else {
    const n = !o.und(t.tension) || !o.und(t.friction);
    (n || !o.und(t.frequency) || !o.und(t.damping) || !o.und(t.mass)) && (e.duration = void 0, e.decay = void 0), n && (e.frequency = void 0)
  }
}
var Ct = [],
  yi = class {
    constructor() {
      this.changed = !1, this.values = Ct, this.toValues = null, this.fromValues = Ct, this.config = new gi, this.immediate = !1
    }
  };

function on(e, {
  key: t,
  props: n,
  defaultProps: i,
  state: s,
  actions: r
}) {
  return new Promise((a, u) => {
    let d, c, h = ae(n.cancel ?? (i == null ? void 0 : i.cancel), t);
    if (h) _();
    else {
      o.und(n.pause) || (s.paused = ae(n.pause, t));
      let y = i == null ? void 0 : i.pause;
      y !== !0 && (y = s.paused || ae(y, t)), d = B(n.delay || 0, t), y ? (s.resumeQueue.add(v), r.pause()) : (r.resume(), v())
    }

    function l() {
      s.resumeQueue.add(v), s.timeouts.delete(c), c.cancel(), d = c.time - m.now()
    }

    function v() {
      d > 0 && !q.skipAnimation ? (s.delayed = !0, c = m.setTimeout(_, d), s.pauseQueue.add(l), s.timeouts.add(c)) : _()
    }

    function _() {
      s.delayed && (s.delayed = !1), s.pauseQueue.delete(l), s.timeouts.delete(c), e <= (s.cancelId || 0) && (h = !0);
      try {
        r.start({
          ...n,
          callId: e,
          cancel: h
        }, a)
      } catch (y) {
        u(y)
      }
    }
  })
}
var ht = (e, t) => t.length == 1 ? t[0] : t.some(n => n.cancelled) ? Z(e.get()) : t.every(n => n.noop) ? un(e.get()) : F(e.get(), t.every(n => n.finished)),
  un = e => ({
    value: e,
    noop: !0,
    finished: !0,
    cancelled: !1
  }),
  F = (e, t, n = !1) => ({
    value: e,
    finished: t,
    cancelled: n
  }),
  Z = e => ({
    value: e,
    cancelled: !0,
    finished: !1
  });

function cn(e, t, n, i) {
  const {
    callId: s,
    parentId: r,
    onRest: a
  } = t, {
    asyncTo: u,
    promise: d
  } = n;
  return !r && e === u && !t.reset ? d : n.promise = (async () => {
    n.asyncId = s, n.asyncTo = e;
    const c = ft(t, (b, f) => f === "onRest" ? void 0 : b);
    let h, l;
    const v = new Promise((b, f) => (h = b, l = f)),
      _ = b => {
        const f = s <= (n.cancelId || 0) && Z(i) || s !== n.asyncId && F(i, !1);
        if (f) throw b.result = f, l(b), b
      },
      y = (b, f) => {
        const w = new Mt,
          g = new Vt;
        return (async () => {
          if (q.skipAnimation) throw pe(n), g.result = F(i, !1), l(g), g;
          _(w);
          const P = o.obj(b) ? {
            ...b
          } : {
            ...f,
            to: b
          };
          P.parentId = s, $(c, (D, O) => {
            o.und(P[O]) && (P[O] = D)
          });
          const I = await i.start(P);
          return _(w), n.paused && await new Promise(D => {
            n.resumeQueue.add(D)
          }), I
        })()
      };
    let p;
    if (q.skipAnimation) return pe(n), F(i, !1);
    try {
      let b;
      o.arr(e) ? b = (async f => {
        for (const w of f) await y(w)
      })(e) : b = Promise.resolve(e(y, i.stop.bind(i))), await Promise.all([b.then(h), v]), p = F(i.get(), !0, !1)
    } catch (b) {
      if (b instanceof Mt) p = b.result;
      else if (b instanceof Vt) p = b.result;
      else throw b
    } finally {
      s == n.asyncId && (n.asyncId = r, n.asyncTo = r ? u : void 0, n.promise = r ? d : void 0)
    }
    return o.fun(a) && m.batchedUpdates(() => {
      a(p, i, i.item)
    }), p
  })()
}

function pe(e, t) {
  se(e.timeouts, n => n.cancel()), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t)
}
var Mt = class extends Error {
    constructor() {
      super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")
    }
  },
  Vt = class extends Error {
    constructor() {
      super("SkipAnimationSignal")
    }
  },
  Je = e => e instanceof mt,
  bi = 1,
  mt = class extends Wt {
    constructor() {
      super(...arguments), this.id = bi++, this._priority = 0
    }
    get priority() {
      return this._priority
    }
    set priority(e) {
      this._priority != e && (this._priority = e, this._onPriorityChange(e))
    }
    get() {
      const e = U(this);
      return e && e.getValue()
    }
    to(...e) {
      return q.to(this, e)
    }
    interpolate(...e) {
      return Kn(), q.to(this, e)
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
      le(this, {
        type: "change",
        parent: this,
        value: e,
        idle: t
      })
    }
    _onPriorityChange(e) {
      this.idle || Ee.sort(this), le(this, {
        type: "priority",
        parent: this,
        priority: e
      })
    }
  },
  L = Symbol.for("SpringPhase"),
  ln = 1,
  Xe = 2,
  Ye = 4,
  xe = e => (e[L] & ln) > 0,
  Q = e => (e[L] & Xe) > 0,
  ee = e => (e[L] & Ye) > 0,
  Et = (e, t) => t ? e[L] |= Xe | ln : e[L] &= ~Xe,
  Ft = (e, t) => t ? e[L] |= Ye : e[L] &= ~Ye,
  _i = class extends mt {
    constructor(e, t) {
      if (super(), this.animation = new yi, this.defaultProps = {}, this._state = {
          paused: !1,
          delayed: !1,
          pauseQueue: new Set,
          resumeQueue: new Set,
          timeouts: new Set
        }, this._pendingCalls = new Set, this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !o.und(e) || !o.und(t)) {
        const n = o.obj(e) ? {
          ...e
        } : {
          ...t,
          from: e
        };
        o.und(n.default) && (n.default = !0), this.start(n)
      }
    }
    get idle() {
      return !(Q(this) || this._state.asyncTo) || ee(this)
    }
    get goal() {
      return R(this.animation.to)
    }
    get velocity() {
      const e = U(this);
      return e instanceof be ? e.lastVelocity || 0 : e.getPayload().map(t => t.lastVelocity || 0)
    }
    get hasAnimated() {
      return xe(this)
    }
    get isAnimating() {
      return Q(this)
    }
    get isPaused() {
      return ee(this)
    }
    get isDelayed() {
      return this._state.delayed
    }
    advance(e) {
      let t = !0,
        n = !1;
      const i = this.animation;
      let {
        toValues: s
      } = i;
      const {
        config: r
      } = i, a = Ue(i.to);
      !a && M(i.to) && (s = k(R(i.to))), i.values.forEach((c, h) => {
        if (c.done) return;
        const l = c.constructor == he ? 1 : a ? a[h].lastPosition : s[h];
        let v = i.immediate,
          _ = l;
        if (!v) {
          if (_ = c.lastPosition, r.tension <= 0) {
            c.done = !0;
            return
          }
          let y = c.elapsedTime += e;
          const p = i.fromValues[h],
            b = c.v0 != null ? c.v0 : c.v0 = o.arr(r.velocity) ? r.velocity[h] : r.velocity;
          let f;
          const w = r.precision || (p == l ? .005 : Math.min(1, Math.abs(l - p) * .001));
          if (o.und(r.duration))
            if (r.decay) {
              const g = r.decay === !0 ? .998 : r.decay,
                P = Math.exp(-(1 - g) * y);
              _ = p + b / (1 - g) * (1 - P), v = Math.abs(c.lastPosition - _) <= w, f = b * P
            } else {
              f = c.lastVelocity == null ? b : c.lastVelocity;
              const g = r.restVelocity || w / 10,
                P = r.clamp ? 0 : r.bounce,
                I = !o.und(P),
                D = p == l ? c.v0 > 0 : p < l;
              let O, _e = !1;
              const C = 1,
                Y = Math.ceil(e / C);
              for (let E = 0; E < Y && (O = Math.abs(f) > g, !(!O && (v = Math.abs(l - _) <= w, v))); ++E) {
                I && (_e = _ == l || _ > l == D, _e && (f = -f * P, _ = l));
                const G = -r.tension * 1e-6 * (_ - l),
                  H = -r.friction * .001 * f,
                  yn = (G + H) / r.mass;
                f = f + yn * C, _ = _ + f * C
              }
            }
          else {
            let g = 1;
            r.duration > 0 && (this._memoizedDuration !== r.duration && (this._memoizedDuration = r.duration, c.durationProgress > 0 && (c.elapsedTime = r.duration * c.durationProgress, y = c.elapsedTime += e)), g = (r.progress || 0) + y / this._memoizedDuration, g = g > 1 ? 1 : g < 0 ? 0 : g, c.durationProgress = g), _ = p + r.easing(g) * (l - p), f = (_ - c.lastPosition) / e, v = g == 1
          }
          c.lastVelocity = f, Number.isNaN(_) && (console.warn("Got NaN while animating:", this), v = !0)
        }
        a && !a[h].done && (v = !1), v ? c.done = !0 : t = !1, c.setValue(_, r.round) && (n = !0)
      });
      const u = U(this),
        d = u.getValue();
      if (t) {
        const c = R(i.to);
        (d !== c || n) && !r.decay ? (u.setValue(c), this._onChange(c)) : n && r.decay && this._onChange(d), this._stop()
      } else n && this._onChange(d)
    }
    set(e) {
      return m.batchedUpdates(() => {
        this._stop(), this._focus(e), this._set(e)
      }), this
    }
    pause() {
      this._update({
        pause: !0
      })
    }
    resume() {
      this._update({
        pause: !1
      })
    }
    finish() {
      if (Q(this)) {
        const {
          to: e,
          config: t
        } = this.animation;
        m.batchedUpdates(() => {
          this._onStart(), t.decay || this._set(e, !1), this._stop()
        })
      }
      return this
    }
    update(e) {
      return (this.queue || (this.queue = [])).push(e), this
    }
    start(e, t) {
      let n;
      return o.und(e) ? (n = this.queue || [], this.queue = []) : n = [o.obj(e) ? e : {
        ...t,
        to: e
      }], Promise.all(n.map(i => this._update(i))).then(i => ht(this, i))
    }
    stop(e) {
      const {
        to: t
      } = this.animation;
      return this._focus(this.get()), pe(this._state, e && this._lastCallId), m.batchedUpdates(() => this._stop(t, e)), this
    }
    reset() {
      this._update({
        reset: !0
      })
    }
    eventObserved(e) {
      e.type == "change" ? this._start() : e.type == "priority" && (this.priority = e.priority + 1)
    }
    _prepareNode(e) {
      const t = this.key || "";
      let {
        to: n,
        from: i
      } = e;
      n = o.obj(n) ? n[t] : n, (n == null || Ke(n)) && (n = void 0), i = o.obj(i) ? i[t] : i, i == null && (i = void 0);
      const s = {
        to: n,
        from: i
      };
      return xe(this) || (e.reverse && ([n, i] = [i, n]), i = R(i), o.und(i) ? U(this) || this._set(n) : this._set(i)), s
    }
    _update({
      ...e
    }, t) {
      const {
        key: n,
        defaultProps: i
      } = this;
      e.default && Object.assign(i, ft(e, (a, u) => /^on/.test(u) ? sn(a, n) : a)), qt(this, e, "onProps"), ne(this, "onProps", e, this);
      const s = this._prepareNode(e);
      if (Object.isFrozen(this)) throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
      const r = this._state;
      return on(++this._lastCallId, {
        key: n,
        props: e,
        defaultProps: i,
        state: r,
        actions: {
          pause: () => {
            ee(this) || (Ft(this, !0), ie(r.pauseQueue), ne(this, "onPause", F(this, te(this, this.animation.to)), this))
          },
          resume: () => {
            ee(this) && (Ft(this, !1), Q(this) && this._resume(), ie(r.resumeQueue), ne(this, "onResume", F(this, te(this, this.animation.to)), this))
          },
          start: this._merge.bind(this, s)
        }
      }).then(a => {
        if (e.loop && a.finished && !(t && a.noop)) {
          const u = dn(e);
          if (u) return this._update(u, !0)
        }
        return a
      })
    }
    _merge(e, t, n) {
      if (t.cancel) return this.stop(!0), n(Z(this));
      const i = !o.und(e.to),
        s = !o.und(e.from);
      if (i || s)
        if (t.callId > this._lastToId) this._lastToId = t.callId;
        else return n(Z(this));
      const {
        key: r,
        defaultProps: a,
        animation: u
      } = this, {
        to: d,
        from: c
      } = u;
      let {
        to: h = d,
        from: l = c
      } = e;
      s && !i && (!t.default || o.und(h)) && (h = l), t.reverse && ([h, l] = [l, h]);
      const v = !j(l, c);
      v && (u.from = l), l = R(l);
      const _ = !j(h, d);
      _ && this._focus(h);
      const y = Ke(t.to),
        {
          config: p
        } = u,
        {
          decay: b,
          velocity: f
        } = p;
      (i || s) && (p.velocity = 0), t.config && !y && vi(p, B(t.config, r), t.config !== a.config ? B(a.config, r) : void 0);
      let w = U(this);
      if (!w || o.und(h)) return n(F(this, !0));
      const g = o.und(t.reset) ? s && !t.default : !o.und(l) && ae(t.reset, r),
        P = g ? l : this.get(),
        I = me(h),
        D = o.num(I) || o.arr(I) || qe(I),
        O = !y && (!D || ae(a.immediate || t.immediate, r));
      if (_) {
        const E = We(h);
        if (E !== w.constructor)
          if (O) w = this._set(I);
          else throw Error(`Cannot animate between ${w.constructor.name} and ${E.name}, as the "to" prop suggests`)
      }
      const _e = w.constructor;
      let C = M(h),
        Y = !1;
      if (!C) {
        const E = g || !xe(this) && v;
        (_ || E) && (Y = j(me(P), I), C = !Y), (!j(u.immediate, O) && !O || !j(p.decay, b) || !j(p.velocity, f)) && (C = !0)
      }
      if (Y && Q(this) && (u.changed && !g ? C = !0 : C || this._stop(d)), !y && ((C || M(d)) && (u.values = w.getPayload(), u.toValues = M(h) ? null : _e == he ? [1] : k(I)), u.immediate != O && (u.immediate = O, !O && !g && this._set(d)), C)) {
        const {
          onRest: E
        } = u;
        S(Si, H => qt(this, t, H));
        const G = F(this, te(this, d));
        ie(this._pendingCalls, G), this._pendingCalls.add(n), u.changed && m.batchedUpdates(() => {
          var H;
          u.changed = !g, E == null || E(G, this), g ? B(a.onRest, G) : (H = u.onStart) == null || H.call(u, G, this)
        })
      }
      g && this._set(P), y ? n(cn(t.to, t, this._state, this)) : C ? this._start() : Q(this) && !_ ? this._pendingCalls.add(n) : n(un(P))
    }
    _focus(e) {
      const t = this.animation;
      e !== t.to && (St(this) && this._detach(), t.to = e, St(this) && this._attach())
    }
    _attach() {
      let e = 0;
      const {
        to: t
      } = this.animation;
      M(t) && (X(t, this), Je(t) && (e = t.priority + 1)), this.priority = e
    }
    _detach() {
      const {
        to: e
      } = this.animation;
      M(e) && de(e, this)
    }
    _set(e, t = !0) {
      const n = R(e);
      if (!o.und(n)) {
        const i = U(this);
        if (!i || !j(n, i.getValue())) {
          const s = We(n);
          !i || i.constructor != s ? dt(this, s.create(n)) : i.setValue(n), i && m.batchedUpdates(() => {
            this._onChange(n, t)
          })
        }
      }
      return U(this)
    }
    _onStart() {
      const e = this.animation;
      e.changed || (e.changed = !0, ne(this, "onStart", F(this, te(this, e.to)), this))
    }
    _onChange(e, t) {
      t || (this._onStart(), B(this.animation.onChange, e, this)), B(this.defaultProps.onChange, e, this), super._onChange(e, t)
    }
    _start() {
      const e = this.animation;
      U(this).reset(R(e.to)), e.immediate || (e.fromValues = e.values.map(t => t.lastPosition)), Q(this) || (Et(this, !0), ee(this) || this._resume())
    }
    _resume() {
      q.skipAnimation ? this.finish() : Ee.start(this)
    }
    _stop(e, t) {
      if (Q(this)) {
        Et(this, !1);
        const n = this.animation;
        S(n.values, s => {
          s.done = !0
        }), n.toValues && (n.onChange = n.onPause = n.onResume = void 0), le(this, {
          type: "idle",
          parent: this
        });
        const i = t ? Z(this.get()) : F(this.get(), te(this, e ?? n.to));
        ie(this._pendingCalls, i), n.changed && (n.changed = !1, ne(this, "onRest", i, this))
      }
    }
  };

function te(e, t) {
  const n = me(t),
    i = me(e.get());
  return j(i, n)
}

function dn(e, t = e.loop, n = e.to) {
  const i = B(t);
  if (i) {
    const s = i !== !0 && an(i),
      r = (s || e).reverse,
      a = !s || s.reset;
    return ge({
      ...e,
      loop: t,
      default: !1,
      pause: void 0,
      to: !r || Ke(n) ? n : void 0,
      from: a ? e.from : void 0,
      reset: a,
      ...s
    })
  }
}

function ge(e) {
  const {
    to: t,
    from: n
  } = e = an(e), i = new Set;
  return o.obj(t) && Tt(t, i), o.obj(n) && Tt(n, i), e.keys = i.size ? Array.from(i) : null, e
}

function wi(e) {
  const t = ge(e);
  return o.und(t.default) && (t.default = ft(t)), t
}

function Tt(e, t) {
  $(e, (n, i) => n != null && t.add(i))
}
var Si = ["onStart", "onRest", "onChange", "onPause", "onResume"];

function qt(e, t, n) {
  e.animation[n] = t[n] !== rn(t, n) ? sn(t[n], e.key) : void 0
}

function ne(e, t, ...n) {
  var i, s, r, a;
  (s = (i = e.animation)[t]) == null || s.call(i, ...n), (a = (r = e.defaultProps)[t]) == null || a.call(r, ...n)
}
var Pi = ["onStart", "onChange", "onRest"],
  Ai = 1,
  Ii = class {
    constructor(e, t) {
      this.id = Ai++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = new Set, this._changed = new Set, this._started = !1, this._state = {
        paused: !1,
        pauseQueue: new Set,
        resumeQueue: new Set,
        timeouts: new Set
      }, this._events = {
        onStart: new Map,
        onChange: new Map,
        onRest: new Map
      }, this._onFrame = this._onFrame.bind(this), t && (this._flush = t), e && this.start({
        default: !0,
        ...e
      })
    }
    get idle() {
      return !this._state.asyncTo && Object.values(this.springs).every(e => e.idle && !e.isDelayed && !e.isPaused)
    }
    get item() {
      return this._item
    }
    set item(e) {
      this._item = e
    }
    get() {
      const e = {};
      return this.each((t, n) => e[n] = t.get()), e
    }
    set(e) {
      for (const t in e) {
        const n = e[t];
        o.und(n) || this.springs[t].set(n)
      }
    }
    update(e) {
      return e && this.queue.push(ge(e)), this
    }
    start(e) {
      let {
        queue: t
      } = this;
      return e ? t = k(e).map(ge) : this.queue = [], this._flush ? this._flush(this, t) : (gn(this, t), et(this, t))
    }
    stop(e, t) {
      if (e !== !!e && (t = e), t) {
        const n = this.springs;
        S(k(t), i => n[i].stop(!!e))
      } else pe(this._state, this._lastAsyncId), this.each(n => n.stop(!!e));
      return this
    }
    pause(e) {
      if (o.und(e)) this.start({
        pause: !0
      });
      else {
        const t = this.springs;
        S(k(e), n => t[n].pause())
      }
      return this
    }
    resume(e) {
      if (o.und(e)) this.start({
        pause: !1
      });
      else {
        const t = this.springs;
        S(k(e), n => t[n].resume())
      }
      return this
    }
    each(e) {
      $(this.springs, e)
    }
    _onFrame() {
      const {
        onStart: e,
        onChange: t,
        onRest: n
      } = this._events, i = this._active.size > 0, s = this._changed.size > 0;
      (i && !this._started || s && !this._started) && (this._started = !0, se(e, ([u, d]) => {
        d.value = this.get(), u(d, this, this._item)
      }));
      const r = !i && this._started,
        a = s || r && n.size ? this.get() : null;
      s && t.size && se(t, ([u, d]) => {
        d.value = a, u(d, this, this._item)
      }), r && (this._started = !1, se(n, ([u, d]) => {
        d.value = a, u(d, this, this._item)
      }))
    }
    eventObserved(e) {
      if (e.type == "change") this._changed.add(e.parent), e.idle || this._active.add(e.parent);
      else if (e.type == "idle") this._active.delete(e.parent);
      else return;
      m.onFrame(this._onFrame)
    }
  };

function et(e, t) {
  return Promise.all(t.map(n => fn(e, n))).then(n => ht(e, n))
}
async function fn(e, t, n) {
  const {
    keys: i,
    to: s,
    from: r,
    loop: a,
    onRest: u,
    onResolve: d
  } = t, c = o.obj(t.default) && t.default;
  a && (t.loop = !1), s === !1 && (t.to = null), r === !1 && (t.from = null);
  const h = o.arr(s) || o.fun(s) ? s : void 0;
  h ? (t.to = void 0, t.onRest = void 0, c && (c.onRest = void 0)) : S(Pi, p => {
    const b = t[p];
    if (o.fun(b)) {
      const f = e._events[p];
      t[p] = ({
        finished: w,
        cancelled: g
      }) => {
        const P = f.get(b);
        P ? (w || (P.finished = !1), g && (P.cancelled = !0)) : f.set(b, {
          value: null,
          finished: w || !1,
          cancelled: g || !1
        })
      }, c && (c[p] = t[p])
    }
  });
  const l = e._state;
  t.pause === !l.paused ? (l.paused = t.pause, ie(t.pause ? l.pauseQueue : l.resumeQueue)) : l.paused && (t.pause = !0);
  const v = (i || Object.keys(e.springs)).map(p => e.springs[p].start(t)),
    _ = t.cancel === !0 || rn(t, "cancel") === !0;
  (h || _ && l.asyncId) && v.push(on(++e._lastAsyncId, {
    props: t,
    state: l,
    actions: {
      pause: Ge,
      resume: Ge,
      start(p, b) {
        _ ? (pe(l, e._lastAsyncId), b(Z(e))) : (p.onRest = u, b(cn(h, p, l, e)))
      }
    }
  })), l.paused && await new Promise(p => {
    l.resumeQueue.add(p)
  });
  const y = ht(e, await Promise.all(v));
  if (a && y.finished && !(n && y.noop)) {
    const p = dn(t, a, s);
    if (p) return gn(e, [p]), fn(e, p, !0)
  }
  return d && m.batchedUpdates(() => d(y, e, e.item)), y
}

function Ut(e, t) {
  const n = {
    ...e.springs
  };
  return t && S(k(t), i => {
    o.und(i.keys) && (i = ge(i)), o.obj(i.to) || (i = {
      ...i,
      to: void 0
    }), pn(n, i, s => mn(s))
  }), hn(e, n), n
}

function hn(e, t) {
  $(t, (n, i) => {
    e.springs[i] || (e.springs[i] = n, X(n, e))
  })
}

function mn(e, t) {
  const n = new _i;
  return n.key = e, t && X(n, t), n
}

function pn(e, t, n) {
  t.keys && S(t.keys, i => {
    (e[i] || (e[i] = n(i)))._prepareNode(t)
  })
}

function gn(e, t) {
  S(t, n => {
    pn(e.springs, n, i => mn(i, e))
  })
}
var je = ({
    children: e,
    ...t
  }) => {
    const n = A.useContext(Me),
      i = t.pause || !!n.pause,
      s = t.immediate || !!n.immediate;
    t = Yn(() => ({
      pause: i,
      immediate: s
    }), [i, s]);
    const {
      Provider: r
    } = Me;
    return A.createElement(r, {
      value: t
    }, e)
  },
  Me = Ri(je, {});
je.Provider = Me.Provider;
je.Consumer = Me.Consumer;

function Ri(e, t) {
  return Object.assign(e, A.createContext(t)), e.Provider._context = e, e.Consumer._context = e, e
}
var ki = () => {
  const e = [],
    t = function(i) {
      Jn();
      const s = [];
      return S(e, (r, a) => {
        if (o.und(i)) s.push(r.start());
        else {
          const u = n(i, r, a);
          u && s.push(r.start(u))
        }
      }), s
    };
  t.current = e, t.add = function(i) {
    e.includes(i) || e.push(i)
  }, t.delete = function(i) {
    const s = e.indexOf(i);
    ~s && e.splice(s, 1)
  }, t.pause = function() {
    return S(e, i => i.pause(...arguments)), this
  }, t.resume = function() {
    return S(e, i => i.resume(...arguments)), this
  }, t.set = function(i) {
    S(e, (s, r) => {
      const a = o.fun(i) ? i(r, s) : i;
      a && s.set(a)
    })
  }, t.start = function(i) {
    const s = [];
    return S(e, (r, a) => {
      if (o.und(i)) s.push(r.start());
      else {
        const u = this._getProps(i, r, a);
        u && s.push(r.start(u))
      }
    }), s
  }, t.stop = function() {
    return S(e, i => i.stop(...arguments)), this
  }, t.update = function(i) {
    return S(e, (s, r) => s.update(this._getProps(i, s, r))), this
  };
  const n = function(i, s, r) {
    return o.fun(i) ? i(r, s) : i
  };
  return t._getProps = n, t
};

function Oi(e, t, n) {
  const i = o.fun(t) && t;
  i && !n && (n = []);
  const s = A.useMemo(() => i || arguments.length == 3 ? ki() : void 0, []),
    r = A.useRef(0),
    a = Yt(),
    u = A.useMemo(() => ({
      ctrls: [],
      queue: [],
      flush(f, w) {
        const g = Ut(f, w);
        return r.current > 0 && !u.queue.length && !Object.keys(g).some(I => !f.springs[I]) ? et(f, w) : new Promise(I => {
          hn(f, g), u.queue.push(() => {
            I(et(f, w))
          }), a()
        })
      }
    }), []),
    d = A.useRef([...u.ctrls]),
    c = [],
    h = At(e) || 0;
  A.useMemo(() => {
    S(d.current.slice(e, h), f => {
      hi(f, s), f.stop(!0)
    }), d.current.length = e, l(h, e)
  }, [e]), A.useMemo(() => {
    l(0, Math.min(h, e))
  }, n);

  function l(f, w) {
    for (let g = f; g < w; g++) {
      const P = d.current[g] || (d.current[g] = new Ii(null, u.flush)),
        I = i ? i(g, P) : t[g];
      I && (c[g] = wi(I))
    }
  }
  const v = d.current.map((f, w) => Ut(f, c[w])),
    _ = A.useContext(je),
    y = At(_),
    p = _ !== y && fi(_);
  lt(() => {
    r.current++, u.ctrls = d.current;
    const {
      queue: f
    } = u;
    f.length && (u.queue = [], S(f, w => w())), S(d.current, (w, g) => {
      s == null || s.add(w), p && w.start({
        default: _
      });
      const P = c[g];
      P && (mi(w, P.ref), w.ref ? w.queue.push(P) : w.start(P))
    })
  }), en(() => () => {
    S(u.ctrls, f => f.stop(!0))
  });
  const b = v.map(f => ({
    ...f
  }));
  return s ? [b, s] : b
}

function Bi(e, t) {
  const n = o.fun(e),
    [
      [i], s
    ] = Oi(1, n ? e : [e], n ? [] : t);
  return n || arguments.length == 2 ? [i, s] : i
}
var Ci = class extends mt {
  constructor(e, t) {
    super(), this.source = e, this.idle = !0, this._active = new Set, this.calc = ue(...t);
    const n = this._get(),
      i = We(n);
    dt(this, i.create(n))
  }
  advance(e) {
    const t = this._get(),
      n = this.get();
    j(t, n) || (U(this).setValue(t), this._onChange(t, this.idle)), !this.idle && $t(this._active) && De(this)
  }
  _get() {
    const e = o.arr(this.source) ? this.source.map(R) : k(R(this.source));
    return this.calc(...e)
  }
  _start() {
    this.idle && !$t(this._active) && (this.idle = !1, S(Ue(this), e => {
      e.done = !1
    }), q.skipAnimation ? (m.batchedUpdates(() => this.advance()), De(this)) : Ee.start(this))
  }
  _attach() {
    let e = 1;
    S(k(this.source), t => {
      M(t) && X(t, this), Je(t) && (t.idle || this._active.add(t), e = Math.max(e, t.priority + 1))
    }), this.priority = e, this._start()
  }
  _detach() {
    S(k(this.source), e => {
      M(e) && de(e, this)
    }), this._active.clear(), De(this)
  }
  eventObserved(e) {
    e.type == "change" ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : e.type == "idle" ? this._active.delete(e.parent) : e.type == "priority" && (this.priority = k(this.source).reduce((t, n) => Math.max(t, (Je(n) ? n.priority : 0) + 1), 0))
  }
};

function Mi(e) {
  return e.idle !== !1
}

function $t(e) {
  return !e.size || Array.from(e).every(Mi)
}

function De(e) {
  e.idle || (e.idle = !0, S(Ue(e), t => {
    t.done = !0
  }), le(e, {
    type: "idle",
    parent: e
  }))
}
q.assign({
  createStringInterpolator: Jt,
  to: (e, t) => new Ci(e, t)
});
var vn = /^--/;

function Vi(e, t) {
  return t == null || typeof t == "boolean" || t === "" ? "" : typeof t == "number" && t !== 0 && !vn.test(e) && !(oe.hasOwnProperty(e) && oe[e]) ? t + "px" : ("" + t).trim()
}
var jt = {};

function Ei(e, t) {
  if (!e.nodeType || !e.setAttribute) return !1;
  const n = e.nodeName === "filter" || e.parentNode && e.parentNode.nodeName === "filter",
    {
      style: i,
      children: s,
      scrollTop: r,
      scrollLeft: a,
      viewBox: u,
      ...d
    } = t,
    c = Object.values(d),
    h = Object.keys(d).map(l => n || e.hasAttribute(l) ? l : jt[l] || (jt[l] = l.replace(/([A-Z])/g, v => "-" + v.toLowerCase())));
  s !== void 0 && (e.textContent = s);
  for (const l in i)
    if (i.hasOwnProperty(l)) {
      const v = Vi(l, i[l]);
      vn.test(l) ? e.style.setProperty(l, v) : e.style[l] = v
    } h.forEach((l, v) => {
    e.setAttribute(l, c[v])
  }), r !== void 0 && (e.scrollTop = r), a !== void 0 && (e.scrollLeft = a), u !== void 0 && e.setAttribute("viewBox", u)
}
var oe = {
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
  Fi = (e, t) => e + t.charAt(0).toUpperCase() + t.substring(1),
  Ti = ["Webkit", "Ms", "Moz", "O"];
oe = Object.keys(oe).reduce((e, t) => (Ti.forEach(n => e[Fi(n, t)] = e[t]), e), oe);
var qi = /^(matrix|translate|scale|rotate|skew)/,
  Ui = /^(translate)/,
  $i = /^(rotate|skew)/,
  Be = (e, t) => o.num(e) && e !== 0 ? e + t : e,
  Ie = (e, t) => o.arr(e) ? e.every(n => Ie(n, t)) : o.num(e) ? e === t : parseFloat(e) === t,
  ji = class extends $e {
    constructor({
      x: e,
      y: t,
      z: n,
      ...i
    }) {
      const s = [],
        r = [];
      (e || t || n) && (s.push([e || 0, t || 0, n || 0]), r.push(a => [`translate3d(${a.map(u=>Be(u,"px")).join(",")})`, Ie(a, 0)])), $(i, (a, u) => {
        if (u === "transform") s.push([a || ""]), r.push(d => [d, d === ""]);
        else if (qi.test(u)) {
          if (delete i[u], o.und(a)) return;
          const d = Ui.test(u) ? "px" : $i.test(u) ? "deg" : "";
          s.push(k(a)), r.push(u === "rotate3d" ? ([c, h, l, v]) => [`rotate3d(${c},${h},${l},${Be(v,d)})`, Ie(v, 0)] : c => [`${u}(${c.map(h=>Be(h,d)).join(",")})`, Ie(c, u.startsWith("scale") ? 1 : 0)])
        }
      }), s.length && (i.transform = new Qi(s, r)), super(i)
    }
  },
  Qi = class extends Wt {
    constructor(e, t) {
      super(), this.inputs = e, this.transforms = t, this._value = null
    }
    get() {
      return this._value || (this._value = this._get())
    }
    _get() {
      let e = "",
        t = !0;
      return S(this.inputs, (n, i) => {
        const s = R(n[0]),
          [r, a] = this.transforms[i](o.arr(s) ? s : n.map(R));
        e += " " + r, t = t && a
      }), t ? "none" : e
    }
    observerAdded(e) {
      e == 1 && S(this.inputs, t => S(t, n => M(n) && X(n, this)))
    }
    observerRemoved(e) {
      e == 0 && S(this.inputs, t => S(t, n => M(n) && de(n, this)))
    }
    eventObserved(e) {
      e.type == "change" && (this._value = null), le(this, e)
    }
  },
  Ni = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"];
q.assign({
  batchedUpdates: bn.unstable_batchedUpdates,
  createStringInterpolator: Jt,
  colors: On
});
var zi = oi(Ni, {
    applyAnimatedValues: Ei,
    createAnimatedStyle: e => new ji(e),
    getComponentProps: ({
      scrollTop: e,
      scrollLeft: t,
      ...n
    }) => n
  }),
  Li = zi.animated;
export {
  Li as a, zn as e, Bi as u
};