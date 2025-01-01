const {
  min: ze,
  max: Ge
} = Math, V = (t, e = 0, n = 1) => ze(Ge(e, t), n), Ot = t => {
  t._clipped = !1, t._unclipped = t.slice(0);
  for (let e = 0; e <= 3; e++) e < 3 ? ((t[e] < 0 || t[e] > 255) && (t._clipped = !0), t[e] = V(t[e], 0, 255)) : e === 3 && (t[e] = V(t[e], 0, 1));
  return t
}, re = {};
for (let t of ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Undefined", "Null"]) re[`[object ${t}]`] = t.toLowerCase();

function x(t) {
  return re[Object.prototype.toString.call(t)] || "object"
}
const M = (t, e = null) => t.length >= 3 ? Array.prototype.slice.call(t) : x(t[0]) == "object" && e ? e.split("").filter(n => t[0][n] !== void 0).map(n => t[0][n]) : t[0].slice(0),
  rt = t => {
    if (t.length < 2) return null;
    const e = t.length - 1;
    return x(t[e]) == "string" ? t[e].toLowerCase() : null
  },
  {
    PI: wt,
    min: oe,
    max: ce
  } = Math,
  S = t => Math.round(t * 100) / 100,
  vt = t => Math.round(t * 100) / 100,
  K = wt * 2,
  _t = wt / 3,
  Be = wt / 180,
  Se = 180 / wt;

function se(t) {
  return [...t.slice(0, 3).reverse(), ...t.slice(3)]
}
const k = {
  format: {},
  autodetect: []
};
class i {
  constructor(...e) {
    const n = this;
    if (x(e[0]) === "object" && e[0].constructor && e[0].constructor === this.constructor) return e[0];
    let r = rt(e),
      o = !1;
    if (!r) {
      o = !0, k.sorted || (k.autodetect = k.autodetect.sort((c, s) => s.p - c.p), k.sorted = !0);
      for (let c of k.autodetect)
        if (r = c.test(...e), r) break
    }
    if (k.format[r]) {
      const c = k.format[r].apply(null, o ? e : e.slice(0, -1));
      n._rgb = Ot(c)
    } else throw new Error("unknown format: " + e);
    n._rgb.length === 3 && n._rgb.push(1)
  }
  toString() {
    return x(this.hex) == "function" ? this.hex() : `[${this._rgb.join(",")}]`
  }
}
const Xe = "3.1.2",
  E = (...t) => new i(...t);
E.version = Xe;
const et = {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    grey: "#808080",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    laserlemon: "#ffff54",
    lavender: "#e6e6fa",
    lavenderblush: "#fff0f5",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrod: "#fafad2",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    maroon2: "#7f0000",
    maroon3: "#b03060",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    purple2: "#7f007f",
    purple3: "#a020f0",
    rebeccapurple: "#663399",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    steelblue: "#4682b4",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    tomato: "#ff6347",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
  },
  qe = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
  Ze = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,
  fe = t => {
    if (t.match(qe)) {
      (t.length === 4 || t.length === 7) && (t = t.substr(1)), t.length === 3 && (t = t.split(""), t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]);
      const e = parseInt(t, 16),
        n = e >> 16,
        r = e >> 8 & 255,
        o = e & 255;
      return [n, r, o, 1]
    }
    if (t.match(Ze)) {
      (t.length === 5 || t.length === 9) && (t = t.substr(1)), t.length === 4 && (t = t.split(""), t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2] + t[3] + t[3]);
      const e = parseInt(t, 16),
        n = e >> 24 & 255,
        r = e >> 16 & 255,
        o = e >> 8 & 255,
        c = Math.round((e & 255) / 255 * 100) / 100;
      return [n, r, o, c]
    }
    throw new Error(`unknown hex color: ${t}`)
  },
  {
    round: ut
  } = Math,
  ae = (...t) => {
    let [e, n, r, o] = M(t, "rgba"), c = rt(t) || "auto";
    o === void 0 && (o = 1), c === "auto" && (c = o < 1 ? "rgba" : "rgb"), e = ut(e), n = ut(n), r = ut(r);
    let f = "000000" + (e << 16 | n << 8 | r).toString(16);
    f = f.substr(f.length - 6);
    let a = "0" + ut(o * 255).toString(16);
    switch (a = a.substr(a.length - 2), c.toLowerCase()) {
      case "rgba":
        return `#${f}${a}`;
      case "argb":
        return `#${a}${f}`;
      default:
        return `#${f}`
    }
  };
i.prototype.name = function() {
  const t = ae(this._rgb, "rgb");
  for (let e of Object.keys(et))
    if (et[e] === t) return e.toLowerCase();
  return t
};
k.format.named = t => {
  if (t = t.toLowerCase(), et[t]) return fe(et[t]);
  throw new Error("unknown color name: " + t)
};
k.autodetect.push({
  p: 5,
  test: (t, ...e) => {
    if (!e.length && x(t) === "string" && et[t.toLowerCase()]) return "named"
  }
});
i.prototype.alpha = function(t, e = !1) {
  return t !== void 0 && x(t) === "number" ? e ? (this._rgb[3] = t, this) : new i([this._rgb[0], this._rgb[1], this._rgb[2], t], "rgb") : this._rgb[3]
};
i.prototype.clipped = function() {
  return this._rgb._clipped || !1
};
const I = {
    Kn: 18,
    labWhitePoint: "d65",
    Xn: .95047,
    Yn: 1,
    Zn: 1.08883,
    t0: .137931034,
    t1: .206896552,
    t2: .12841855,
    t3: .008856452,
    kE: 216 / 24389,
    kKE: 8,
    kK: 24389 / 27,
    RefWhiteRGB: {
      X: .95047,
      Y: 1,
      Z: 1.08883
    },
    MtxRGB2XYZ: {
      m00: .4124564390896922,
      m01: .21267285140562253,
      m02: .0193338955823293,
      m10: .357576077643909,
      m11: .715152155287818,
      m12: .11919202588130297,
      m20: .18043748326639894,
      m21: .07217499330655958,
      m22: .9503040785363679
    },
    MtxXYZ2RGB: {
      m00: 3.2404541621141045,
      m01: -.9692660305051868,
      m02: .055643430959114726,
      m10: -1.5371385127977166,
      m11: 1.8760108454466942,
      m12: -.2040259135167538,
      m20: -.498531409556016,
      m21: .041556017530349834,
      m22: 1.0572251882231791
    },
    As: .9414285350000001,
    Bs: 1.040417467,
    Cs: 1.089532651,
    MtxAdaptMa: {
      m00: .8951,
      m01: -.7502,
      m02: .0389,
      m10: .2664,
      m11: 1.7135,
      m12: -.0685,
      m20: -.1614,
      m21: .0367,
      m22: 1.0296
    },
    MtxAdaptMaI: {
      m00: .9869929054667123,
      m01: .43230526972339456,
      m02: -.008528664575177328,
      m10: -.14705425642099013,
      m11: .5183602715367776,
      m12: .04004282165408487,
      m20: .15996265166373125,
      m21: .0492912282128556,
      m22: .9684866957875502
    }
  },
  Ie = new Map([
    ["a", [1.0985, .35585]],
    ["b", [1.0985, .35585]],
    ["c", [.98074, 1.18232]],
    ["d50", [.96422, .82521]],
    ["d55", [.95682, .92149]],
    ["d65", [.95047, 1.08883]],
    ["e", [1, 1, 1]],
    ["f2", [.99186, .67393]],
    ["f7", [.95041, 1.08747]],
    ["f11", [1.00962, .6435]],
    ["icc", [.96422, .82521]]
  ]);

function W(t) {
  const e = Ie.get(String(t).toLowerCase());
  if (!e) throw new Error("unknown Lab illuminant " + t);
  I.labWhitePoint = t, I.Xn = e[0], I.Zn = e[1]
}

function at() {
  return I.labWhitePoint
}
const Yt = (...t) => {
    t = M(t, "lab");
    const [e, n, r] = t, [o, c, s] = Te(e, n, r), [f, a, l] = le(o, c, s);
    return [f, a, l, t.length > 3 ? t[3] : 1]
  },
  Te = (t, e, n) => {
    const {
      kE: r,
      kK: o,
      kKE: c,
      Xn: s,
      Yn: f,
      Zn: a
    } = I, l = (t + 16) / 116, b = .002 * e + l, d = l - .005 * n, h = b * b * b, p = d * d * d, _ = h > r ? h : (116 * b - 16) / o, N = t > c ? Math.pow((t + 16) / 116, 3) : t / o, w = p > r ? p : (116 * d - 16) / o, g = _ * s, O = N * f, Y = w * a;
    return [g, O, Y]
  },
  Mt = t => {
    const e = Math.sign(t);
    return t = Math.abs(t), (t <= .0031308 ? t * 12.92 : 1.055 * Math.pow(t, 1 / 2.4) - .055) * e
  },
  le = (t, e, n) => {
    const {
      MtxAdaptMa: r,
      MtxAdaptMaI: o,
      MtxXYZ2RGB: c,
      RefWhiteRGB: s,
      Xn: f,
      Yn: a,
      Zn: l
    } = I, b = f * r.m00 + a * r.m10 + l * r.m20, d = f * r.m01 + a * r.m11 + l * r.m21, h = f * r.m02 + a * r.m12 + l * r.m22, p = s.X * r.m00 + s.Y * r.m10 + s.Z * r.m20, _ = s.X * r.m01 + s.Y * r.m11 + s.Z * r.m21, N = s.X * r.m02 + s.Y * r.m12 + s.Z * r.m22, w = (t * r.m00 + e * r.m10 + n * r.m20) * (p / b), g = (t * r.m01 + e * r.m11 + n * r.m21) * (_ / d), O = (t * r.m02 + e * r.m12 + n * r.m22) * (N / h), Y = w * o.m00 + g * o.m10 + O * o.m20, v = w * o.m01 + g * o.m11 + O * o.m21, z = w * o.m02 + g * o.m12 + O * o.m22, A = Mt(Y * c.m00 + v * c.m10 + z * c.m20), u = Mt(Y * c.m01 + v * c.m11 + z * c.m21), m = Mt(Y * c.m02 + v * c.m12 + z * c.m22);
    return [A * 255, u * 255, m * 255]
  },
  zt = (...t) => {
    const [e, n, r, ...o] = M(t, "rgb"), [c, s, f] = ie(e, n, r), [a, l, b] = Ke(c, s, f);
    return [a, l, b, ...o.length > 0 && o[0] < 1 ? [o[0]] : []]
  };

function Ke(t, e, n) {
  const {
    Xn: r,
    Yn: o,
    Zn: c,
    kE: s,
    kK: f
  } = I, a = t / r, l = e / o, b = n / c, d = a > s ? Math.pow(a, 1 / 3) : (f * a + 16) / 116, h = l > s ? Math.pow(l, 1 / 3) : (f * l + 16) / 116, p = b > s ? Math.pow(b, 1 / 3) : (f * b + 16) / 116;
  return [116 * h - 16, 500 * (d - h), 200 * (h - p)]
}

function $t(t) {
  const e = Math.sign(t);
  return t = Math.abs(t), (t <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)) * e
}
const ie = (t, e, n) => {
  t = $t(t / 255), e = $t(e / 255), n = $t(n / 255);
  const {
    MtxRGB2XYZ: r,
    MtxAdaptMa: o,
    MtxAdaptMaI: c,
    Xn: s,
    Yn: f,
    Zn: a,
    As: l,
    Bs: b,
    Cs: d
  } = I;
  let h = t * r.m00 + e * r.m10 + n * r.m20,
    p = t * r.m01 + e * r.m11 + n * r.m21,
    _ = t * r.m02 + e * r.m12 + n * r.m22;
  const N = s * o.m00 + f * o.m10 + a * o.m20,
    w = s * o.m01 + f * o.m11 + a * o.m21,
    g = s * o.m02 + f * o.m12 + a * o.m22;
  let O = h * o.m00 + p * o.m10 + _ * o.m20,
    Y = h * o.m01 + p * o.m11 + _ * o.m21,
    v = h * o.m02 + p * o.m12 + _ * o.m22;
  return O *= N / l, Y *= w / b, v *= g / d, h = O * c.m00 + Y * c.m10 + v * c.m20, p = O * c.m01 + Y * c.m11 + v * c.m21, _ = O * c.m02 + Y * c.m12 + v * c.m22, [h, p, _]
};
i.prototype.lab = function() {
  return zt(this._rgb)
};
const We = (...t) => new i(...t, "lab");
Object.assign(E, {
  lab: We,
  getLabWhitePoint: at,
  setLabWhitePoint: W
});
k.format.lab = Yt;
k.autodetect.push({
  p: 2,
  test: (...t) => {
    if (t = M(t, "lab"), x(t) === "array" && t.length === 3) return "lab"
  }
});
i.prototype.darken = function(t = 1) {
  const e = this,
    n = e.lab();
  return n[0] -= I.Kn * t, new i(n, "lab").alpha(e.alpha(), !0)
};
i.prototype.brighten = function(t = 1) {
  return this.darken(-t)
};
i.prototype.darker = i.prototype.darken;
i.prototype.brighter = i.prototype.brighten;
i.prototype.get = function(t) {
  const [e, n] = t.split("."), r = this[e]();
  if (n) {
    const o = e.indexOf(n) - (e.substr(0, 2) === "ok" ? 2 : 0);
    if (o > -1) return r[o];
    throw new Error(`unknown channel ${n} in mode ${e}`)
  } else return r
};
const {
  pow: He
} = Math, De = 1e-7, Fe = 20;
i.prototype.luminance = function(t, e = "rgb") {
  if (t !== void 0 && x(t) === "number") {
    if (t === 0) return new i([0, 0, 0, this._rgb[3]], "rgb");
    if (t === 1) return new i([255, 255, 255, this._rgb[3]], "rgb");
    let n = this.luminance(),
      r = Fe;
    const o = (s, f) => {
        const a = s.interpolate(f, .5, e),
          l = a.luminance();
        return Math.abs(t - l) < De || !r-- ? a : l > t ? o(s, a) : o(a, f)
      },
      c = (n > t ? o(new i([0, 0, 0]), this) : o(this, new i([255, 255, 255]))).rgb();
    return new i([...c, this._rgb[3]])
  }
  return Ue(...this._rgb.slice(0, 3))
};
const Ue = (t, e, n) => (t = xt(t), e = xt(e), n = xt(n), .2126 * t + .7152 * e + .0722 * n),
  xt = t => (t /= 255, t <= .03928 ? t / 12.92 : He((t + .055) / 1.055, 2.4)),
  G = {},
  nt = (t, e, n = .5, ...r) => {
    let o = r[0] || "lrgb";
    if (!G[o] && !r.length && (o = Object.keys(G)[0]), !G[o]) throw new Error(`interpolation mode ${o} is not defined`);
    return x(t) !== "object" && (t = new i(t)), x(e) !== "object" && (e = new i(e)), G[o](t, e, n).alpha(t.alpha() + n * (e.alpha() - t.alpha()))
  };
i.prototype.mix = i.prototype.interpolate = function(t, e = .5, ...n) {
  return nt(this, t, e, ...n)
};
i.prototype.premultiply = function(t = !1) {
  const e = this._rgb,
    n = e[3];
  return t ? (this._rgb = [e[0] * n, e[1] * n, e[2] * n, n], this) : new i([e[0] * n, e[1] * n, e[2] * n, n], "rgb")
};
const {
  sin: Ve,
  cos: Je
} = Math, ue = (...t) => {
  let [e, n, r] = M(t, "lch");
  return isNaN(r) && (r = 0), r = r * Be, [e, Je(r) * n, Ve(r) * n]
}, Gt = (...t) => {
  t = M(t, "lch");
  const [e, n, r] = t, [o, c, s] = ue(e, n, r), [f, a, l] = Yt(o, c, s);
  return [f, a, l, t.length > 3 ? t[3] : 1]
}, Qe = (...t) => {
  const e = se(M(t, "hcl"));
  return Gt(...e)
}, {
  sqrt: tn,
  atan2: en,
  round: nn
} = Math, be = (...t) => {
  const [e, n, r] = M(t, "lab"), o = tn(n * n + r * r);
  let c = (en(r, n) * Se + 360) % 360;
  return nn(o * 1e4) === 0 && (c = Number.NaN), [e, o, c]
}, Bt = (...t) => {
  const [e, n, r, ...o] = M(t, "rgb"), [c, s, f] = zt(e, n, r), [a, l, b] = be(c, s, f);
  return [a, l, b, ...o.length > 0 && o[0] < 1 ? [o[0]] : []]
};
i.prototype.lch = function() {
  return Bt(this._rgb)
};
i.prototype.hcl = function() {
  return se(Bt(this._rgb))
};
const rn = (...t) => new i(...t, "lch"),
  on = (...t) => new i(...t, "hcl");
Object.assign(E, {
  lch: rn,
  hcl: on
});
k.format.lch = Gt;
k.format.hcl = Qe;
["lch", "hcl"].forEach(t => k.autodetect.push({
  p: 2,
  test: (...e) => {
    if (e = M(e, t), x(e) === "array" && e.length === 3) return t
  }
}));
i.prototype.saturate = function(t = 1) {
  const e = this,
    n = e.lch();
  return n[1] += I.Kn * t, n[1] < 0 && (n[1] = 0), new i(n, "lch").alpha(e.alpha(), !0)
};
i.prototype.desaturate = function(t = 1) {
  return this.saturate(-t)
};
i.prototype.set = function(t, e, n = !1) {
  const [r, o] = t.split("."), c = this[r]();
  if (o) {
    const s = r.indexOf(o) - (r.substr(0, 2) === "ok" ? 2 : 0);
    if (s > -1) {
      if (x(e) == "string") switch (e.charAt(0)) {
          case "+":
            c[s] += +e;
            break;
          case "-":
            c[s] += +e;
            break;
          case "*":
            c[s] *= +e.substr(1);
            break;
          case "/":
            c[s] /= +e.substr(1);
            break;
          default:
            c[s] = +e
        } else if (x(e) === "number") c[s] = e;
        else throw new Error("unsupported value for Color.set");
      const f = new i(c, r);
      return n ? (this._rgb = f._rgb, this) : f
    }
    throw new Error(`unknown channel ${o} in mode ${r}`)
  } else return c
};
i.prototype.tint = function(t = .5, ...e) {
  return nt(this, "white", t, ...e)
};
i.prototype.shade = function(t = .5, ...e) {
  return nt(this, "black", t, ...e)
};
const cn = (t, e, n) => {
  const r = t._rgb,
    o = e._rgb;
  return new i(r[0] + n * (o[0] - r[0]), r[1] + n * (o[1] - r[1]), r[2] + n * (o[2] - r[2]), "rgb")
};
G.rgb = cn;
const {
  sqrt: At,
  pow: J
} = Math, sn = (t, e, n) => {
  const [r, o, c] = t._rgb, [s, f, a] = e._rgb;
  return new i(At(J(r, 2) * (1 - n) + J(s, 2) * n), At(J(o, 2) * (1 - n) + J(f, 2) * n), At(J(c, 2) * (1 - n) + J(a, 2) * n), "rgb")
};
G.lrgb = sn;
const fn = (t, e, n) => {
  const r = t.lab(),
    o = e.lab();
  return new i(r[0] + n * (o[0] - r[0]), r[1] + n * (o[1] - r[1]), r[2] + n * (o[2] - r[2]), "lab")
};
G.lab = fn;
const ot = (t, e, n, r) => {
    let o, c;
    r === "hsl" ? (o = t.hsl(), c = e.hsl()) : r === "hsv" ? (o = t.hsv(), c = e.hsv()) : r === "hcg" ? (o = t.hcg(), c = e.hcg()) : r === "hsi" ? (o = t.hsi(), c = e.hsi()) : r === "lch" || r === "hcl" ? (r = "hcl", o = t.hcl(), c = e.hcl()) : r === "oklch" && (o = t.oklch().reverse(), c = e.oklch().reverse());
    let s, f, a, l, b, d;
    (r.substr(0, 1) === "h" || r === "oklch") && ([s, a, b] = o, [f, l, d] = c);
    let h, p, _, N;
    return !isNaN(s) && !isNaN(f) ? (f > s && f - s > 180 ? N = f - (s + 360) : f < s && s - f > 180 ? N = f + 360 - s : N = f - s, p = s + n * N) : isNaN(s) ? isNaN(f) ? p = Number.NaN : (p = f, (b == 1 || b == 0) && r != "hsv" && (h = l)) : (p = s, (d == 1 || d == 0) && r != "hsv" && (h = a)), h === void 0 && (h = a + n * (l - a)), _ = b + n * (d - b), r === "oklch" ? new i([_, h, p], r) : new i([p, h, _], r)
  },
  he = (t, e, n) => ot(t, e, n, "lch");
G.lch = he;
G.hcl = he;
const an = t => {
    if (x(t) == "number" && t >= 0 && t <= 16777215) {
      const e = t >> 16,
        n = t >> 8 & 255,
        r = t & 255;
      return [e, n, r, 1]
    }
    throw new Error("unknown num color: " + t)
  },
  ln = (...t) => {
    const [e, n, r] = M(t, "rgb");
    return (e << 16) + (n << 8) + r
  };
i.prototype.num = function() {
  return ln(this._rgb)
};
const un = (...t) => new i(...t, "num");
Object.assign(E, {
  num: un
});
k.format.num = an;
k.autodetect.push({
  p: 5,
  test: (...t) => {
    if (t.length === 1 && x(t[0]) === "number" && t[0] >= 0 && t[0] <= 16777215) return "num"
  }
});
const bn = (t, e, n) => {
  const r = t.num(),
    o = e.num();
  return new i(r + n * (o - r), "num")
};
G.num = bn;
const {
  floor: hn
} = Math, dn = (...t) => {
  t = M(t, "hcg");
  let [e, n, r] = t, o, c, s;
  r = r * 255;
  const f = n * 255;
  if (n === 0) o = c = s = r;
  else {
    e === 360 && (e = 0), e > 360 && (e -= 360), e < 0 && (e += 360), e /= 60;
    const a = hn(e),
      l = e - a,
      b = r * (1 - n),
      d = b + f * (1 - l),
      h = b + f * l,
      p = b + f;
    switch (a) {
      case 0:
        [o, c, s] = [p, h, b];
        break;
      case 1:
        [o, c, s] = [d, p, b];
        break;
      case 2:
        [o, c, s] = [b, p, h];
        break;
      case 3:
        [o, c, s] = [b, d, p];
        break;
      case 4:
        [o, c, s] = [h, b, p];
        break;
      case 5:
        [o, c, s] = [p, b, d];
        break
    }
  }
  return [o, c, s, t.length > 3 ? t[3] : 1]
}, pn = (...t) => {
  const [e, n, r] = M(t, "rgb"), o = oe(e, n, r), c = ce(e, n, r), s = c - o, f = s * 100 / 255, a = o / (255 - s) * 100;
  let l;
  return s === 0 ? l = Number.NaN : (e === c && (l = (n - r) / s), n === c && (l = 2 + (r - e) / s), r === c && (l = 4 + (e - n) / s), l *= 60, l < 0 && (l += 360)), [l, f, a]
};
i.prototype.hcg = function() {
  return pn(this._rgb)
};
const mn = (...t) => new i(...t, "hcg");
E.hcg = mn;
k.format.hcg = dn;
k.autodetect.push({
  p: 1,
  test: (...t) => {
    if (t = M(t, "hcg"), x(t) === "array" && t.length === 3) return "hcg"
  }
});
const gn = (t, e, n) => ot(t, e, n, "hcg");
G.hcg = gn;
const {
  cos: Q
} = Math, wn = (...t) => {
  t = M(t, "hsi");
  let [e, n, r] = t, o, c, s;
  return isNaN(e) && (e = 0), isNaN(n) && (n = 0), e > 360 && (e -= 360), e < 0 && (e += 360), e /= 360, e < 1 / 3 ? (s = (1 - n) / 3, o = (1 + n * Q(K * e) / Q(_t - K * e)) / 3, c = 1 - (s + o)) : e < 2 / 3 ? (e -= 1 / 3, o = (1 - n) / 3, c = (1 + n * Q(K * e) / Q(_t - K * e)) / 3, s = 1 - (o + c)) : (e -= 2 / 3, c = (1 - n) / 3, s = (1 + n * Q(K * e) / Q(_t - K * e)) / 3, o = 1 - (c + s)), o = V(r * o * 3), c = V(r * c * 3), s = V(r * s * 3), [o * 255, c * 255, s * 255, t.length > 3 ? t[3] : 1]
}, {
  min: yn,
  sqrt: kn,
  acos: _n
} = Math, Mn = (...t) => {
  let [e, n, r] = M(t, "rgb");
  e /= 255, n /= 255, r /= 255;
  let o;
  const c = yn(e, n, r),
    s = (e + n + r) / 3,
    f = s > 0 ? 1 - c / s : 0;
  return f === 0 ? o = NaN : (o = (e - n + (e - r)) / 2, o /= kn((e - n) * (e - n) + (e - r) * (n - r)), o = _n(o), r > n && (o = K - o), o /= K), [o * 360, f, s]
};
i.prototype.hsi = function() {
  return Mn(this._rgb)
};
const $n = (...t) => new i(...t, "hsi");
E.hsi = $n;
k.format.hsi = wn;
k.autodetect.push({
  p: 2,
  test: (...t) => {
    if (t = M(t, "hsi"), x(t) === "array" && t.length === 3) return "hsi"
  }
});
const xn = (t, e, n) => ot(t, e, n, "hsi");
G.hsi = xn;
const Ct = (...t) => {
    t = M(t, "hsl");
    const [e, n, r] = t;
    let o, c, s;
    if (n === 0) o = c = s = r * 255;
    else {
      const f = [0, 0, 0],
        a = [0, 0, 0],
        l = r < .5 ? r * (1 + n) : r + n - r * n,
        b = 2 * r - l,
        d = e / 360;
      f[0] = d + 1 / 3, f[1] = d, f[2] = d - 1 / 3;
      for (let h = 0; h < 3; h++) f[h] < 0 && (f[h] += 1), f[h] > 1 && (f[h] -= 1), 6 * f[h] < 1 ? a[h] = b + (l - b) * 6 * f[h] : 2 * f[h] < 1 ? a[h] = l : 3 * f[h] < 2 ? a[h] = b + (l - b) * (2 / 3 - f[h]) * 6 : a[h] = b;
      [o, c, s] = [a[0] * 255, a[1] * 255, a[2] * 255]
    }
    return t.length > 3 ? [o, c, s, t[3]] : [o, c, s, 1]
  },
  de = (...t) => {
    t = M(t, "rgba");
    let [e, n, r] = t;
    e /= 255, n /= 255, r /= 255;
    const o = oe(e, n, r),
      c = ce(e, n, r),
      s = (c + o) / 2;
    let f, a;
    return c === o ? (f = 0, a = Number.NaN) : f = s < .5 ? (c - o) / (c + o) : (c - o) / (2 - c - o), e == c ? a = (n - r) / (c - o) : n == c ? a = 2 + (r - e) / (c - o) : r == c && (a = 4 + (e - n) / (c - o)), a *= 60, a < 0 && (a += 360), t.length > 3 && t[3] !== void 0 ? [a, f, s, t[3]] : [a, f, s]
  };
i.prototype.hsl = function() {
  return de(this._rgb)
};
const An = (...t) => new i(...t, "hsl");
E.hsl = An;
k.format.hsl = Ct;
k.autodetect.push({
  p: 2,
  test: (...t) => {
    if (t = M(t, "hsl"), x(t) === "array" && t.length === 3) return "hsl"
  }
});
const Ln = (t, e, n) => ot(t, e, n, "hsl");
G.hsl = Ln;
const {
  floor: En
} = Math, Rn = (...t) => {
  t = M(t, "hsv");
  let [e, n, r] = t, o, c, s;
  if (r *= 255, n === 0) o = c = s = r;
  else {
    e === 360 && (e = 0), e > 360 && (e -= 360), e < 0 && (e += 360), e /= 60;
    const f = En(e),
      a = e - f,
      l = r * (1 - n),
      b = r * (1 - n * a),
      d = r * (1 - n * (1 - a));
    switch (f) {
      case 0:
        [o, c, s] = [r, d, l];
        break;
      case 1:
        [o, c, s] = [b, r, l];
        break;
      case 2:
        [o, c, s] = [l, r, d];
        break;
      case 3:
        [o, c, s] = [l, b, r];
        break;
      case 4:
        [o, c, s] = [d, l, r];
        break;
      case 5:
        [o, c, s] = [r, l, b];
        break
    }
  }
  return [o, c, s, t.length > 3 ? t[3] : 1]
}, {
  min: Nn,
  max: jn
} = Math, vn = (...t) => {
  t = M(t, "rgb");
  let [e, n, r] = t;
  const o = Nn(e, n, r),
    c = jn(e, n, r),
    s = c - o;
  let f, a, l;
  return l = c / 255, c === 0 ? (f = Number.NaN, a = 0) : (a = s / c, e === c && (f = (n - r) / s), n === c && (f = 2 + (r - e) / s), r === c && (f = 4 + (e - n) / s), f *= 60, f < 0 && (f += 360)), [f, a, l]
};
i.prototype.hsv = function() {
  return vn(this._rgb)
};
const Cn = (...t) => new i(...t, "hsv");
E.hsv = Cn;
k.format.hsv = Rn;
k.autodetect.push({
  p: 2,
  test: (...t) => {
    if (t = M(t, "hsv"), x(t) === "array" && t.length === 3) return "hsv"
  }
});
const Pn = (t, e, n) => ot(t, e, n, "hsv");
G.hsv = Pn;

function pt(t, e) {
  let n = t.length;
  Array.isArray(t[0]) || (t = [t]), Array.isArray(e[0]) || (e = e.map(s => [s]));
  let r = e[0].length,
    o = e[0].map((s, f) => e.map(a => a[f])),
    c = t.map(s => o.map(f => Array.isArray(s) ? s.reduce((a, l, b) => a + l * (f[b] || 0), 0) : f.reduce((a, l) => a + l * s, 0)));
  return n === 1 && (c = c[0]), r === 1 ? c.map(s => s[0]) : c
}
const St = (...t) => {
  t = M(t, "lab");
  const [e, n, r, ...o] = t, [c, s, f] = On([e, n, r]), [a, l, b] = le(c, s, f);
  return [a, l, b, ...o.length > 0 && o[0] < 1 ? [o[0]] : []]
};

function On(t) {
  var e = [
      [1.2268798758459243, -.5578149944602171, .2813910456659647],
      [-.0405757452148008, 1.112286803280317, -.0717110580655164],
      [-.0763729366746601, -.4214933324022432, 1.5869240198367816]
    ],
    n = [
      [1, .3963377773761749, .2158037573099136],
      [1, -.1055613458156586, -.0638541728258133],
      [1, -.0894841775298119, -1.2914855480194092]
    ],
    r = pt(n, t);
  return pt(e, r.map(o => o ** 3))
}
const Xt = (...t) => {
  const [e, n, r, ...o] = M(t, "rgb"), c = ie(e, n, r);
  return [...Yn(c), ...o.length > 0 && o[0] < 1 ? [o[0]] : []]
};

function Yn(t) {
  const e = [
      [.819022437996703, .3619062600528904, -.1288737815209879],
      [.0329836539323885, .9292868615863434, .0361446663506424],
      [.0481771893596242, .2642395317527308, .6335478284694309]
    ],
    n = [
      [.210454268309314, .7936177747023054, -.0040720430116193],
      [1.9779985324311684, -2.42859224204858, .450593709617411],
      [.0259040424655478, .7827717124575296, -.8086757549230774]
    ],
    r = pt(e, t);
  return pt(n, r.map(o => Math.cbrt(o)))
}
i.prototype.oklab = function() {
  return Xt(this._rgb)
};
const zn = (...t) => new i(...t, "oklab");
Object.assign(E, {
  oklab: zn
});
k.format.oklab = St;
k.autodetect.push({
  p: 2,
  test: (...t) => {
    if (t = M(t, "oklab"), x(t) === "array" && t.length === 3) return "oklab"
  }
});
const Gn = (t, e, n) => {
  const r = t.oklab(),
    o = e.oklab();
  return new i(r[0] + n * (o[0] - r[0]), r[1] + n * (o[1] - r[1]), r[2] + n * (o[2] - r[2]), "oklab")
};
G.oklab = Gn;
const Bn = (t, e, n) => ot(t, e, n, "oklch");
G.oklch = Bn;
const {
  pow: Lt,
  sqrt: Et,
  PI: Rt,
  cos: Tt,
  sin: Kt,
  atan2: Sn
} = Math, Xn = (t, e = "lrgb", n = null) => {
  const r = t.length;
  n || (n = Array.from(new Array(r)).map(() => 1));
  const o = r / n.reduce(function(d, h) {
    return d + h
  });
  if (n.forEach((d, h) => {
      n[h] *= o
    }), t = t.map(d => new i(d)), e === "lrgb") return qn(t, n);
  const c = t.shift(),
    s = c.get(e),
    f = [];
  let a = 0,
    l = 0;
  for (let d = 0; d < s.length; d++)
    if (s[d] = (s[d] || 0) * n[0], f.push(isNaN(s[d]) ? 0 : n[0]), e.charAt(d) === "h" && !isNaN(s[d])) {
      const h = s[d] / 180 * Rt;
      a += Tt(h) * n[0], l += Kt(h) * n[0]
    } let b = c.alpha() * n[0];
  t.forEach((d, h) => {
    const p = d.get(e);
    b += d.alpha() * n[h + 1];
    for (let _ = 0; _ < s.length; _++)
      if (!isNaN(p[_]))
        if (f[_] += n[h + 1], e.charAt(_) === "h") {
          const N = p[_] / 180 * Rt;
          a += Tt(N) * n[h + 1], l += Kt(N) * n[h + 1]
        } else s[_] += p[_] * n[h + 1]
  });
  for (let d = 0; d < s.length; d++)
    if (e.charAt(d) === "h") {
      let h = Sn(l / f[d], a / f[d]) / Rt * 180;
      for (; h < 0;) h += 360;
      for (; h >= 360;) h -= 360;
      s[d] = h
    } else s[d] = s[d] / f[d];
  return b /= r, new i(s, e).alpha(b > .99999 ? 1 : b, !0)
}, qn = (t, e) => {
  const n = t.length,
    r = [0, 0, 0, 0];
  for (let o = 0; o < t.length; o++) {
    const c = t[o],
      s = e[o] / n,
      f = c._rgb;
    r[0] += Lt(f[0], 2) * s, r[1] += Lt(f[1], 2) * s, r[2] += Lt(f[2], 2) * s, r[3] += f[3] * s
  }
  return r[0] = Et(r[0]), r[1] = Et(r[1]), r[2] = Et(r[2]), r[3] > .9999999 && (r[3] = 1), new i(Ot(r))
}, {
  pow: Zn
} = Math;

function mt(t) {
  let e = "rgb",
    n = E("#ccc"),
    r = 0,
    o = [0, 1],
    c = [],
    s = [0, 0],
    f = !1,
    a = [],
    l = !1,
    b = 0,
    d = 1,
    h = !1,
    p = {},
    _ = !0,
    N = 1;
  const w = function(u) {
      if (u = u || ["#fff", "#000"], u && x(u) === "string" && E.brewer && E.brewer[u.toLowerCase()] && (u = E.brewer[u.toLowerCase()]), x(u) === "array") {
        u.length === 1 && (u = [u[0], u[0]]), u = u.slice(0);
        for (let m = 0; m < u.length; m++) u[m] = E(u[m]);
        c.length = 0;
        for (let m = 0; m < u.length; m++) c.push(m / (u.length - 1))
      }
      return z(), a = u
    },
    g = function(u) {
      if (f != null) {
        const m = f.length - 1;
        let $ = 0;
        for (; $ < m && u >= f[$];) $++;
        return $ - 1
      }
      return 0
    };
  let O = u => u,
    Y = u => u;
  const v = function(u, m) {
    let $, y;
    if (m == null && (m = !1), isNaN(u) || u === null) return n;
    m ? y = u : f && f.length > 2 ? y = g(u) / (f.length - 2) : d !== b ? y = (u - b) / (d - b) : y = 1, y = Y(y), m || (y = O(y)), N !== 1 && (y = Zn(y, N)), y = s[0] + y * (1 - s[0] - s[1]), y = V(y, 0, 1);
    const R = Math.floor(y * 1e4);
    if (_ && p[R]) $ = p[R];
    else {
      if (x(a) === "array")
        for (let L = 0; L < c.length; L++) {
          const j = c[L];
          if (y <= j) {
            $ = a[L];
            break
          }
          if (y >= j && L === c.length - 1) {
            $ = a[L];
            break
          }
          if (y > j && y < c[L + 1]) {
            y = (y - j) / (c[L + 1] - j), $ = E.interpolate(a[L], a[L + 1], y, e);
            break
          }
        } else x(a) === "function" && ($ = a(y));
      _ && (p[R] = $)
    }
    return $
  };
  var z = () => p = {};
  w(t);
  const A = function(u) {
    const m = E(v(u));
    return l && m[l] ? m[l]() : m
  };
  return A.classes = function(u) {
    if (u != null) {
      if (x(u) === "array") f = u, o = [u[0], u[u.length - 1]];
      else {
        const m = E.analyze(o);
        u === 0 ? f = [m.min, m.max] : f = E.limits(m, "e", u)
      }
      return A
    }
    return f
  }, A.domain = function(u) {
    if (!arguments.length) return o;
    b = u[0], d = u[u.length - 1], c = [];
    const m = a.length;
    if (u.length === m && b !== d)
      for (let $ of Array.from(u)) c.push(($ - b) / (d - b));
    else {
      for (let $ = 0; $ < m; $++) c.push($ / (m - 1));
      if (u.length > 2) {
        const $ = u.map((R, L) => L / (u.length - 1)),
          y = u.map(R => (R - b) / (d - b));
        y.every((R, L) => $[L] === R) || (Y = R => {
          if (R <= 0 || R >= 1) return R;
          let L = 0;
          for (; R >= y[L + 1];) L++;
          const j = (R - y[L]) / (y[L + 1] - y[L]);
          return $[L] + j * ($[L + 1] - $[L])
        })
      }
    }
    return o = [b, d], A
  }, A.mode = function(u) {
    return arguments.length ? (e = u, z(), A) : e
  }, A.range = function(u, m) {
    return w(u), A
  }, A.out = function(u) {
    return l = u, A
  }, A.spread = function(u) {
    return arguments.length ? (r = u, A) : r
  }, A.correctLightness = function(u) {
    return u == null && (u = !0), h = u, z(), h ? O = function(m) {
      const $ = v(0, !0).lab()[0],
        y = v(1, !0).lab()[0],
        R = $ > y;
      let L = v(m, !0).lab()[0];
      const j = $ + (y - $) * m;
      let U = L - j,
        ft = 0,
        lt = 1,
        it = 20;
      for (; Math.abs(U) > .01 && it-- > 0;)(function() {
        return R && (U *= -1), U < 0 ? (ft = m, m += (lt - m) * .5) : (lt = m, m += (ft - m) * .5), L = v(m, !0).lab()[0], U = L - j
      })();
      return m
    } : O = m => m, A
  }, A.padding = function(u) {
    return u != null ? (x(u) === "number" && (u = [u, u]), s = u, A) : s
  }, A.colors = function(u, m) {
    arguments.length < 2 && (m = "hex");
    let $ = [];
    if (arguments.length === 0) $ = a.slice(0);
    else if (u === 1) $ = [A(.5)];
    else if (u > 1) {
      const y = o[0],
        R = o[1] - y;
      $ = In(0, u).map(L => A(y + L / (u - 1) * R))
    } else {
      t = [];
      let y = [];
      if (f && f.length > 2)
        for (let R = 1, L = f.length, j = 1 <= L; j ? R < L : R > L; j ? R++ : R--) y.push((f[R - 1] + f[R]) * .5);
      else y = o;
      $ = y.map(R => A(R))
    }
    return E[m] && ($ = $.map(y => y[m]())), $
  }, A.cache = function(u) {
    return u != null ? (_ = u, A) : _
  }, A.gamma = function(u) {
    return u != null ? (N = u, A) : N
  }, A.nodata = function(u) {
    return u != null ? (n = E(u), A) : n
  }, A
}

function In(t, e, n) {
  let r = [],
    o = t < e,
    c = e;
  for (let s = t; o ? s < c : s > c; o ? s++ : s--) r.push(s);
  return r
}
const Tn = function(t) {
    let e = [1, 1];
    for (let n = 1; n < t; n++) {
      let r = [1];
      for (let o = 1; o <= e.length; o++) r[o] = (e[o] || 0) + e[o - 1];
      e = r
    }
    return e
  },
  Kn = function(t) {
    let e, n, r, o;
    if (t = t.map(c => new i(c)), t.length === 2)[n, r] = t.map(c => c.lab()), e = function(c) {
      const s = [0, 1, 2].map(f => n[f] + c * (r[f] - n[f]));
      return new i(s, "lab")
    };
    else if (t.length === 3)[n, r, o] = t.map(c => c.lab()), e = function(c) {
      const s = [0, 1, 2].map(f => (1 - c) * (1 - c) * n[f] + 2 * (1 - c) * c * r[f] + c * c * o[f]);
      return new i(s, "lab")
    };
    else if (t.length === 4) {
      let c;
      [n, r, o, c] = t.map(s => s.lab()), e = function(s) {
        const f = [0, 1, 2].map(a => (1 - s) * (1 - s) * (1 - s) * n[a] + 3 * (1 - s) * (1 - s) * s * r[a] + 3 * (1 - s) * s * s * o[a] + s * s * s * c[a]);
        return new i(f, "lab")
      }
    } else if (t.length >= 5) {
      let c, s, f;
      c = t.map(a => a.lab()), f = t.length - 1, s = Tn(f), e = function(a) {
        const l = 1 - a,
          b = [0, 1, 2].map(d => c.reduce((h, p, _) => h + s[_] * l ** (f - _) * a ** _ * p[d], 0));
        return new i(b, "lab")
      }
    } else throw new RangeError("No point in running bezier with only one color.");
    return e
  },
  Wn = t => {
    const e = Kn(t);
    return e.scale = () => mt(e), e
  },
  {
    round: pe
  } = Math;
i.prototype.rgb = function(t = !0) {
  return t === !1 ? this._rgb.slice(0, 3) : this._rgb.slice(0, 3).map(pe)
};
i.prototype.rgba = function(t = !0) {
  return this._rgb.slice(0, 4).map((e, n) => n < 3 ? t === !1 ? e : pe(e) : e)
};
const Hn = (...t) => new i(...t, "rgb");
Object.assign(E, {
  rgb: Hn
});
k.format.rgb = (...t) => {
  const e = M(t, "rgba");
  return e[3] === void 0 && (e[3] = 1), e
};
k.autodetect.push({
  p: 3,
  test: (...t) => {
    if (t = M(t, "rgba"), x(t) === "array" && (t.length === 3 || t.length === 4 && x(t[3]) == "number" && t[3] >= 0 && t[3] <= 1)) return "rgb"
  }
});
const Z = (t, e, n) => {
    if (!Z[n]) throw new Error("unknown blend mode " + n);
    return Z[n](t, e)
  },
  D = t => (e, n) => {
    const r = E(n).rgb(),
      o = E(e).rgb();
    return E.rgb(t(r, o))
  },
  F = t => (e, n) => {
    const r = [];
    return r[0] = t(e[0], n[0]), r[1] = t(e[1], n[1]), r[2] = t(e[2], n[2]), r
  },
  Dn = t => t,
  Fn = (t, e) => t * e / 255,
  Un = (t, e) => t > e ? e : t,
  Vn = (t, e) => t > e ? t : e,
  Jn = (t, e) => 255 * (1 - (1 - t / 255) * (1 - e / 255)),
  Qn = (t, e) => e < 128 ? 2 * t * e / 255 : 255 * (1 - 2 * (1 - t / 255) * (1 - e / 255)),
  t0 = (t, e) => 255 * (1 - (1 - e / 255) / (t / 255)),
  e0 = (t, e) => t === 255 ? 255 : (t = 255 * (e / 255) / (1 - t / 255), t > 255 ? 255 : t);
Z.normal = D(F(Dn));
Z.multiply = D(F(Fn));
Z.screen = D(F(Jn));
Z.overlay = D(F(Qn));
Z.darken = D(F(Un));
Z.lighten = D(F(Vn));
Z.dodge = D(F(e0));
Z.burn = D(F(t0));
const {
  pow: n0,
  sin: r0,
  cos: o0
} = Math;

function c0(t = 300, e = -1.5, n = 1, r = 1, o = [0, 1]) {
  let c = 0,
    s;
  x(o) === "array" ? s = o[1] - o[0] : (s = 0, o = [o, o]);
  const f = function(a) {
    const l = K * ((t + 120) / 360 + e * a),
      b = n0(o[0] + s * a, r),
      h = (c !== 0 ? n[0] + a * c : n) * b * (1 - b) / 2,
      p = o0(l),
      _ = r0(l),
      N = b + h * (-.14861 * p + 1.78277 * _),
      w = b + h * (-.29227 * p - .90649 * _),
      g = b + h * (1.97294 * p);
    return E(Ot([N * 255, w * 255, g * 255, 1]))
  };
  return f.start = function(a) {
    return a == null ? t : (t = a, f)
  }, f.rotations = function(a) {
    return a == null ? e : (e = a, f)
  }, f.gamma = function(a) {
    return a == null ? r : (r = a, f)
  }, f.hue = function(a) {
    return a == null ? n : (n = a, x(n) === "array" ? (c = n[1] - n[0], c === 0 && (n = n[1])) : c = 0, f)
  }, f.lightness = function(a) {
    return a == null ? o : (x(a) === "array" ? (o = a, s = a[1] - a[0]) : (o = [a, a], s = 0), f)
  }, f.scale = () => E.scale(f), f.hue(n), f
}
const s0 = "0123456789abcdef",
  {
    floor: f0,
    random: a0
  } = Math,
  l0 = () => {
    let t = "#";
    for (let e = 0; e < 6; e++) t += s0.charAt(f0(a0() * 16));
    return new i(t, "hex")
  },
  {
    log: Wt,
    pow: i0,
    floor: u0,
    abs: b0
  } = Math;

function me(t, e = null) {
  const n = {
    min: Number.MAX_VALUE,
    max: Number.MAX_VALUE * -1,
    sum: 0,
    values: [],
    count: 0
  };
  return x(t) === "object" && (t = Object.values(t)), t.forEach(r => {
    e && x(r) === "object" && (r = r[e]), r != null && !isNaN(r) && (n.values.push(r), n.sum += r, r < n.min && (n.min = r), r > n.max && (n.max = r), n.count += 1)
  }), n.domain = [n.min, n.max], n.limits = (r, o) => ge(n, r, o), n
}

function ge(t, e = "equal", n = 7) {
  x(t) == "array" && (t = me(t));
  const {
    min: r,
    max: o
  } = t, c = t.values.sort((f, a) => f - a);
  if (n === 1) return [r, o];
  const s = [];
  if (e.substr(0, 1) === "c" && (s.push(r), s.push(o)), e.substr(0, 1) === "e") {
    s.push(r);
    for (let f = 1; f < n; f++) s.push(r + f / n * (o - r));
    s.push(o)
  } else if (e.substr(0, 1) === "l") {
    if (r <= 0) throw new Error("Logarithmic scales are only possible for values > 0");
    const f = Math.LOG10E * Wt(r),
      a = Math.LOG10E * Wt(o);
    s.push(r);
    for (let l = 1; l < n; l++) s.push(i0(10, f + l / n * (a - f)));
    s.push(o)
  } else if (e.substr(0, 1) === "q") {
    s.push(r);
    for (let f = 1; f < n; f++) {
      const a = (c.length - 1) * f / n,
        l = u0(a);
      if (l === a) s.push(c[l]);
      else {
        const b = a - l;
        s.push(c[l] * (1 - b) + c[l + 1] * b)
      }
    }
    s.push(o)
  } else if (e.substr(0, 1) === "k") {
    let f;
    const a = c.length,
      l = new Array(a),
      b = new Array(n);
    let d = !0,
      h = 0,
      p = null;
    p = [], p.push(r);
    for (let w = 1; w < n; w++) p.push(r + w / n * (o - r));
    for (p.push(o); d;) {
      for (let g = 0; g < n; g++) b[g] = 0;
      for (let g = 0; g < a; g++) {
        const O = c[g];
        let Y = Number.MAX_VALUE,
          v;
        for (let z = 0; z < n; z++) {
          const A = b0(p[z] - O);
          A < Y && (Y = A, v = z), b[v]++, l[g] = v
        }
      }
      const w = new Array(n);
      for (let g = 0; g < n; g++) w[g] = null;
      for (let g = 0; g < a; g++) f = l[g], w[f] === null ? w[f] = c[g] : w[f] += c[g];
      for (let g = 0; g < n; g++) w[g] *= 1 / b[g];
      d = !1;
      for (let g = 0; g < n; g++)
        if (w[g] !== p[g]) {
          d = !0;
          break
        } p = w, h++, h > 200 && (d = !1)
    }
    const _ = {};
    for (let w = 0; w < n; w++) _[w] = [];
    for (let w = 0; w < a; w++) f = l[w], _[f].push(c[w]);
    let N = [];
    for (let w = 0; w < n; w++) N.push(_[w][0]), N.push(_[w][_[w].length - 1]);
    N = N.sort((w, g) => w - g), s.push(N[0]);
    for (let w = 1; w < N.length; w += 2) {
      const g = N[w];
      !isNaN(g) && s.indexOf(g) === -1 && s.push(g)
    }
  }
  return s
}
const h0 = (t, e) => {
  t = new i(t), e = new i(e);
  const n = t.luminance(),
    r = e.luminance();
  return n > r ? (n + .05) / (r + .05) : (r + .05) / (n + .05)
};
/**
 * @license
 *
 * The APCA contrast prediction algorithm is based of the formulas published
 * in the APCA-1.0.98G specification by Myndex. The specification is available at:
 * https://raw.githubusercontent.com/Myndex/apca-w3/master/images/APCAw3_0.1.17_APCA0.0.98G.svg
 *
 * Note that the APCA implementation is still beta, so please update to
 * future versions of chroma.js when they become available.
 *
 * You can read more about the APCA Readability Criterion at
 * https://readtech.org/ARC/
 */
const Ht = .027,
  d0 = 5e-4,
  p0 = .1,
  Dt = 1.14,
  bt = .022,
  Ft = 1.414,
  m0 = (t, e) => {
    t = new i(t), e = new i(e), t.alpha() < 1 && (t = nt(e, t, t.alpha(), "rgb"));
    const n = Ut(...t.rgb()),
      r = Ut(...e.rgb()),
      o = n >= bt ? n : n + Math.pow(bt - n, Ft),
      c = r >= bt ? r : r + Math.pow(bt - r, Ft),
      s = Math.pow(c, .56) - Math.pow(o, .57),
      f = Math.pow(c, .65) - Math.pow(o, .62),
      a = Math.abs(c - o) < d0 ? 0 : o < c ? s * Dt : f * Dt;
    return (Math.abs(a) < p0 ? 0 : a > 0 ? a - Ht : a + Ht) * 100
  };

function Ut(t, e, n) {
  return .2126729 * Math.pow(t / 255, 2.4) + .7151522 * Math.pow(e / 255, 2.4) + .072175 * Math.pow(n / 255, 2.4)
}
const {
  sqrt: T,
  pow: C,
  min: g0,
  max: w0,
  atan2: Vt,
  abs: Jt,
  cos: ht,
  sin: Qt,
  exp: y0,
  PI: te
} = Math;

function k0(t, e, n = 1, r = 1, o = 1) {
  var c = function(kt) {
      return 360 * kt / (2 * te)
    },
    s = function(kt) {
      return 2 * te * kt / 360
    };
  t = new i(t), e = new i(e);
  const [f, a, l] = Array.from(t.lab()), [b, d, h] = Array.from(e.lab()), p = (f + b) / 2, _ = T(C(a, 2) + C(l, 2)), N = T(C(d, 2) + C(h, 2)), w = (_ + N) / 2, g = .5 * (1 - T(C(w, 7) / (C(w, 7) + C(25, 7)))), O = a * (1 + g), Y = d * (1 + g), v = T(C(O, 2) + C(l, 2)), z = T(C(Y, 2) + C(h, 2)), A = (v + z) / 2, u = c(Vt(l, O)), m = c(Vt(h, Y)), $ = u >= 0 ? u : u + 360, y = m >= 0 ? m : m + 360, R = Jt($ - y) > 180 ? ($ + y + 360) / 2 : ($ + y) / 2, L = 1 - .17 * ht(s(R - 30)) + .24 * ht(s(2 * R)) + .32 * ht(s(3 * R + 6)) - .2 * ht(s(4 * R - 63));
  let j = y - $;
  j = Jt(j) <= 180 ? j : y <= $ ? j + 360 : j - 360, j = 2 * T(v * z) * Qt(s(j) / 2);
  const U = b - f,
    ft = z - v,
    lt = 1 + .015 * C(p - 50, 2) / T(20 + C(p - 50, 2)),
    it = 1 + .045 * A,
    It = 1 + .015 * A * L,
    Pe = 30 * y0(-C((R - 275) / 25, 2)),
    Oe = -(2 * T(C(A, 7) / (C(A, 7) + C(25, 7)))) * Qt(2 * s(Pe)),
    Ye = T(C(U / (n * lt), 2) + C(ft / (r * it), 2) + C(j / (o * It), 2) + Oe * (ft / (r * it)) * (j / (o * It)));
  return w0(0, g0(100, Ye))
}

function _0(t, e, n = "lab") {
  t = new i(t), e = new i(e);
  const r = t.get(n),
    o = e.get(n);
  let c = 0;
  for (let s in r) {
    const f = (r[s] || 0) - (o[s] || 0);
    c += f * f
  }
  return Math.sqrt(c)
}
const M0 = (...t) => {
    try {
      return new i(...t), !0
    } catch {
      return !1
    }
  },
  $0 = {
    cool() {
      return mt([E.hsl(180, 1, .9), E.hsl(250, .7, .4)])
    },
    hot() {
      return mt(["#000", "#f00", "#ff0", "#fff"]).mode("rgb")
    }
  },
  Pt = {
    OrRd: ["#fff7ec", "#fee8c8", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#b30000", "#7f0000"],
    PuBu: ["#fff7fb", "#ece7f2", "#d0d1e6", "#a6bddb", "#74a9cf", "#3690c0", "#0570b0", "#045a8d", "#023858"],
    BuPu: ["#f7fcfd", "#e0ecf4", "#bfd3e6", "#9ebcda", "#8c96c6", "#8c6bb1", "#88419d", "#810f7c", "#4d004b"],
    Oranges: ["#fff5eb", "#fee6ce", "#fdd0a2", "#fdae6b", "#fd8d3c", "#f16913", "#d94801", "#a63603", "#7f2704"],
    BuGn: ["#f7fcfd", "#e5f5f9", "#ccece6", "#99d8c9", "#66c2a4", "#41ae76", "#238b45", "#006d2c", "#00441b"],
    YlOrBr: ["#ffffe5", "#fff7bc", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02", "#993404", "#662506"],
    YlGn: ["#ffffe5", "#f7fcb9", "#d9f0a3", "#addd8e", "#78c679", "#41ab5d", "#238443", "#006837", "#004529"],
    Reds: ["#fff5f0", "#fee0d2", "#fcbba1", "#fc9272", "#fb6a4a", "#ef3b2c", "#cb181d", "#a50f15", "#67000d"],
    RdPu: ["#fff7f3", "#fde0dd", "#fcc5c0", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177", "#49006a"],
    Greens: ["#f7fcf5", "#e5f5e0", "#c7e9c0", "#a1d99b", "#74c476", "#41ab5d", "#238b45", "#006d2c", "#00441b"],
    YlGnBu: ["#ffffd9", "#edf8b1", "#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#253494", "#081d58"],
    Purples: ["#fcfbfd", "#efedf5", "#dadaeb", "#bcbddc", "#9e9ac8", "#807dba", "#6a51a3", "#54278f", "#3f007d"],
    GnBu: ["#f7fcf0", "#e0f3db", "#ccebc5", "#a8ddb5", "#7bccc4", "#4eb3d3", "#2b8cbe", "#0868ac", "#084081"],
    Greys: ["#ffffff", "#f0f0f0", "#d9d9d9", "#bdbdbd", "#969696", "#737373", "#525252", "#252525", "#000000"],
    YlOrRd: ["#ffffcc", "#ffeda0", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#e31a1c", "#bd0026", "#800026"],
    PuRd: ["#f7f4f9", "#e7e1ef", "#d4b9da", "#c994c7", "#df65b0", "#e7298a", "#ce1256", "#980043", "#67001f"],
    Blues: ["#f7fbff", "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", "#08306b"],
    PuBuGn: ["#fff7fb", "#ece2f0", "#d0d1e6", "#a6bddb", "#67a9cf", "#3690c0", "#02818a", "#016c59", "#014636"],
    Viridis: ["#440154", "#482777", "#3f4a8a", "#31678e", "#26838f", "#1f9d8a", "#6cce5a", "#b6de2b", "#fee825"],
    Spectral: ["#9e0142", "#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#e6f598", "#abdda4", "#66c2a5", "#3288bd", "#5e4fa2"],
    RdYlGn: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#d9ef8b", "#a6d96a", "#66bd63", "#1a9850", "#006837"],
    RdBu: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#f7f7f7", "#d1e5f0", "#92c5de", "#4393c3", "#2166ac", "#053061"],
    PiYG: ["#8e0152", "#c51b7d", "#de77ae", "#f1b6da", "#fde0ef", "#f7f7f7", "#e6f5d0", "#b8e186", "#7fbc41", "#4d9221", "#276419"],
    PRGn: ["#40004b", "#762a83", "#9970ab", "#c2a5cf", "#e7d4e8", "#f7f7f7", "#d9f0d3", "#a6dba0", "#5aae61", "#1b7837", "#00441b"],
    RdYlBu: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee090", "#ffffbf", "#e0f3f8", "#abd9e9", "#74add1", "#4575b4", "#313695"],
    BrBG: ["#543005", "#8c510a", "#bf812d", "#dfc27d", "#f6e8c3", "#f5f5f5", "#c7eae5", "#80cdc1", "#35978f", "#01665e", "#003c30"],
    RdGy: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#ffffff", "#e0e0e0", "#bababa", "#878787", "#4d4d4d", "#1a1a1a"],
    PuOr: ["#7f3b08", "#b35806", "#e08214", "#fdb863", "#fee0b6", "#f7f7f7", "#d8daeb", "#b2abd2", "#8073ac", "#542788", "#2d004b"],
    Set2: ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f", "#e5c494", "#b3b3b3"],
    Accent: ["#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0", "#f0027f", "#bf5b17", "#666666"],
    Set1: ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33", "#a65628", "#f781bf", "#999999"],
    Set3: ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69", "#fccde5", "#d9d9d9", "#bc80bd", "#ccebc5", "#ffed6f"],
    Dark2: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666666"],
    Paired: ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00", "#cab2d6", "#6a3d9a", "#ffff99", "#b15928"],
    Pastel2: ["#b3e2cd", "#fdcdac", "#cbd5e8", "#f4cae4", "#e6f5c9", "#fff2ae", "#f1e2cc", "#cccccc"],
    Pastel1: ["#fbb4ae", "#b3cde3", "#ccebc5", "#decbe4", "#fed9a6", "#ffffcc", "#e5d8bd", "#fddaec", "#f2f2f2"]
  },
  we = Object.keys(Pt),
  ee = new Map(we.map(t => [t.toLowerCase(), t])),
  x0 = typeof Proxy == "function" ? new Proxy(Pt, {
    get(t, e) {
      const n = e.toLowerCase();
      if (ee.has(n)) return t[ee.get(n)]
    },
    getOwnPropertyNames() {
      return Object.getOwnPropertyNames(we)
    }
  }) : Pt,
  A0 = (...t) => {
    t = M(t, "cmyk");
    const [e, n, r, o] = t, c = t.length > 4 ? t[4] : 1;
    return o === 1 ? [0, 0, 0, c] : [e >= 1 ? 0 : 255 * (1 - e) * (1 - o), n >= 1 ? 0 : 255 * (1 - n) * (1 - o), r >= 1 ? 0 : 255 * (1 - r) * (1 - o), c]
  },
  {
    max: ne
  } = Math,
  L0 = (...t) => {
    let [e, n, r] = M(t, "rgb");
    e = e / 255, n = n / 255, r = r / 255;
    const o = 1 - ne(e, ne(n, r)),
      c = o < 1 ? 1 / (1 - o) : 0,
      s = (1 - e - o) * c,
      f = (1 - n - o) * c,
      a = (1 - r - o) * c;
    return [s, f, a, o]
  };
i.prototype.cmyk = function() {
  return L0(this._rgb)
};
const E0 = (...t) => new i(...t, "cmyk");
Object.assign(E, {
  cmyk: E0
});
k.format.cmyk = A0;
k.autodetect.push({
  p: 2,
  test: (...t) => {
    if (t = M(t, "cmyk"), x(t) === "array" && t.length === 4) return "cmyk"
  }
});
const R0 = (...t) => {
    const e = M(t, "hsla");
    let n = rt(t) || "lsa";
    return e[0] = S(e[0] || 0) + "deg", e[1] = S(e[1] * 100) + "%", e[2] = S(e[2] * 100) + "%", n === "hsla" || e.length > 3 && e[3] < 1 ? (e[3] = "/ " + (e.length > 3 ? e[3] : 1), n = "hsla") : e.length = 3, `${n.substr(0,3)}(${e.join(" ")})`
  },
  N0 = (...t) => {
    const e = M(t, "lab");
    let n = rt(t) || "lab";
    return e[0] = S(e[0]) + "%", e[1] = S(e[1]), e[2] = S(e[2]), n === "laba" || e.length > 3 && e[3] < 1 ? e[3] = "/ " + (e.length > 3 ? e[3] : 1) : e.length = 3, `lab(${e.join(" ")})`
  },
  j0 = (...t) => {
    const e = M(t, "lch");
    let n = rt(t) || "lab";
    return e[0] = S(e[0]) + "%", e[1] = S(e[1]), e[2] = isNaN(e[2]) ? "none" : S(e[2]) + "deg", n === "lcha" || e.length > 3 && e[3] < 1 ? e[3] = "/ " + (e.length > 3 ? e[3] : 1) : e.length = 3, `lch(${e.join(" ")})`
  },
  v0 = (...t) => {
    const e = M(t, "lab");
    return e[0] = S(e[0] * 100) + "%", e[1] = vt(e[1]), e[2] = vt(e[2]), e.length > 3 && e[3] < 1 ? e[3] = "/ " + (e.length > 3 ? e[3] : 1) : e.length = 3, `oklab(${e.join(" ")})`
  },
  ye = (...t) => {
    const [e, n, r, ...o] = M(t, "rgb"), [c, s, f] = Xt(e, n, r), [a, l, b] = be(c, s, f);
    return [a, l, b, ...o.length > 0 && o[0] < 1 ? [o[0]] : []]
  },
  C0 = (...t) => {
    const e = M(t, "lch");
    return e[0] = S(e[0] * 100) + "%", e[1] = vt(e[1]), e[2] = isNaN(e[2]) ? "none" : S(e[2]) + "deg", e.length > 3 && e[3] < 1 ? e[3] = "/ " + (e.length > 3 ? e[3] : 1) : e.length = 3, `oklch(${e.join(" ")})`
  },
  {
    round: Nt
  } = Math,
  P0 = (...t) => {
    const e = M(t, "rgba");
    let n = rt(t) || "rgb";
    if (n.substr(0, 3) === "hsl") return R0(de(e), n);
    if (n.substr(0, 3) === "lab") {
      const r = at();
      W("d50");
      const o = N0(zt(e), n);
      return W(r), o
    }
    if (n.substr(0, 3) === "lch") {
      const r = at();
      W("d50");
      const o = j0(Bt(e), n);
      return W(r), o
    }
    return n.substr(0, 5) === "oklab" ? v0(Xt(e)) : n.substr(0, 5) === "oklch" ? C0(ye(e)) : (e[0] = Nt(e[0]), e[1] = Nt(e[1]), e[2] = Nt(e[2]), (n === "rgba" || e.length > 3 && e[3] < 1) && (e[3] = "/ " + (e.length > 3 ? e[3] : 1), n = "rgba"), `${n.substr(0,3)}(${e.slice(0,n==="rgb"?3:4).join(" ")})`)
  },
  ke = (...t) => {
    t = M(t, "lch");
    const [e, n, r, ...o] = t, [c, s, f] = ue(e, n, r), [a, l, b] = St(c, s, f);
    return [a, l, b, ...o.length > 0 && o[0] < 1 ? [o[0]] : []]
  },
  H = /((?:-?\d+)|(?:-?\d+(?:\.\d+)?)%|none)/.source,
  q = /((?:-?(?:\d+(?:\.\d*)?|\.\d+)%?)|none)/.source,
  gt = /((?:-?(?:\d+(?:\.\d*)?|\.\d+)%)|none)/.source,
  X = /\s*/.source,
  ct = /\s+/.source,
  qt = /\s*,\s*/.source,
  yt = /((?:-?(?:\d+(?:\.\d*)?|\.\d+)(?:deg)?)|none)/.source,
  st = /\s*(?:\/\s*((?:[01]|[01]?\.\d+)|\d+(?:\.\d+)?%))?/.source,
  _e = new RegExp("^rgba?\\(" + X + [H, H, H].join(ct) + st + "\\)$"),
  Me = new RegExp("^rgb\\(" + X + [H, H, H].join(qt) + X + "\\)$"),
  $e = new RegExp("^rgba\\(" + X + [H, H, H, q].join(qt) + X + "\\)$"),
  xe = new RegExp("^hsla?\\(" + X + [yt, gt, gt].join(ct) + st + "\\)$"),
  Ae = new RegExp("^hsl?\\(" + X + [yt, gt, gt].join(qt) + X + "\\)$"),
  Le = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
  Ee = new RegExp("^lab\\(" + X + [q, q, q].join(ct) + st + "\\)$"),
  Re = new RegExp("^lch\\(" + X + [q, q, yt].join(ct) + st + "\\)$"),
  Ne = new RegExp("^oklab\\(" + X + [q, q, q].join(ct) + st + "\\)$"),
  je = new RegExp("^oklch\\(" + X + [q, q, yt].join(ct) + st + "\\)$"),
  {
    round: ve
  } = Math,
  tt = t => t.map((e, n) => n <= 2 ? V(ve(e), 0, 255) : e),
  P = (t, e = 0, n = 100, r = !1) => (typeof t == "string" && t.endsWith("%") && (t = parseFloat(t.substring(0, t.length - 1)) / 100, r ? t = e + (t + 1) * .5 * (n - e) : t = e + t * (n - e)), +t),
  B = (t, e) => t === "none" ? e : t,
  Zt = t => {
    if (t = t.toLowerCase().trim(), t === "transparent") return [0, 0, 0, 0];
    let e;
    if (k.format.named) try {
      return k.format.named(t)
    } catch {}
    if ((e = t.match(_e)) || (e = t.match(Me))) {
      let n = e.slice(1, 4);
      for (let o = 0; o < 3; o++) n[o] = +P(B(n[o], 0), 0, 255);
      n = tt(n);
      const r = e[4] !== void 0 ? +P(e[4], 0, 1) : 1;
      return n[3] = r, n
    }
    if (e = t.match($e)) {
      const n = e.slice(1, 5);
      for (let r = 0; r < 4; r++) n[r] = +P(n[r], 0, 255);
      return n
    }
    if ((e = t.match(xe)) || (e = t.match(Ae))) {
      const n = e.slice(1, 4);
      n[0] = +B(n[0].replace("deg", ""), 0), n[1] = +P(B(n[1], 0), 0, 100) * .01, n[2] = +P(B(n[2], 0), 0, 100) * .01;
      const r = tt(Ct(n)),
        o = e[4] !== void 0 ? +P(e[4], 0, 1) : 1;
      return r[3] = o, r
    }
    if (e = t.match(Le)) {
      const n = e.slice(1, 4);
      n[1] *= .01, n[2] *= .01;
      const r = Ct(n);
      for (let o = 0; o < 3; o++) r[o] = ve(r[o]);
      return r[3] = +e[4], r
    }
    if (e = t.match(Ee)) {
      const n = e.slice(1, 4);
      n[0] = P(B(n[0], 0), 0, 100), n[1] = P(B(n[1], 0), -125, 125, !0), n[2] = P(B(n[2], 0), -125, 125, !0);
      const r = at();
      W("d50");
      const o = tt(Yt(n));
      W(r);
      const c = e[4] !== void 0 ? +P(e[4], 0, 1) : 1;
      return o[3] = c, o
    }
    if (e = t.match(Re)) {
      const n = e.slice(1, 4);
      n[0] = P(n[0], 0, 100), n[1] = P(B(n[1], 0), 0, 150, !1), n[2] = +B(n[2].replace("deg", ""), 0);
      const r = at();
      W("d50");
      const o = tt(Gt(n));
      W(r);
      const c = e[4] !== void 0 ? +P(e[4], 0, 1) : 1;
      return o[3] = c, o
    }
    if (e = t.match(Ne)) {
      const n = e.slice(1, 4);
      n[0] = P(B(n[0], 0), 0, 1), n[1] = P(B(n[1], 0), -.4, .4, !0), n[2] = P(B(n[2], 0), -.4, .4, !0);
      const r = tt(St(n)),
        o = e[4] !== void 0 ? +P(e[4], 0, 1) : 1;
      return r[3] = o, r
    }
    if (e = t.match(je)) {
      const n = e.slice(1, 4);
      n[0] = P(B(n[0], 0), 0, 1), n[1] = P(B(n[1], 0), 0, .4, !1), n[2] = +B(n[2].replace("deg", ""), 0);
      const r = tt(ke(n)),
        o = e[4] !== void 0 ? +P(e[4], 0, 1) : 1;
      return r[3] = o, r
    }
  };
Zt.test = t => _e.test(t) || xe.test(t) || Ee.test(t) || Re.test(t) || Ne.test(t) || je.test(t) || Me.test(t) || $e.test(t) || Ae.test(t) || Le.test(t) || t === "transparent";
i.prototype.css = function(t) {
  return P0(this._rgb, t)
};
const O0 = (...t) => new i(...t, "css");
E.css = O0;
k.format.css = Zt;
k.autodetect.push({
  p: 5,
  test: (t, ...e) => {
    if (!e.length && x(t) === "string" && Zt.test(t)) return "css"
  }
});
k.format.gl = (...t) => {
  const e = M(t, "rgba");
  return e[0] *= 255, e[1] *= 255, e[2] *= 255, e
};
const Y0 = (...t) => new i(...t, "gl");
E.gl = Y0;
i.prototype.gl = function() {
  const t = this._rgb;
  return [t[0] / 255, t[1] / 255, t[2] / 255, t[3]]
};
i.prototype.hex = function(t) {
  return ae(this._rgb, t)
};
const z0 = (...t) => new i(...t, "hex");
E.hex = z0;
k.format.hex = fe;
k.autodetect.push({
  p: 4,
  test: (t, ...e) => {
    if (!e.length && x(t) === "string" && [3, 4, 5, 6, 7, 8, 9].indexOf(t.length) >= 0) return "hex"
  }
});
const {
  log: dt
} = Math, Ce = t => {
  const e = t / 100;
  let n, r, o;
  return e < 66 ? (n = 255, r = e < 6 ? 0 : -155.25485562709179 - .44596950469579133 * (r = e - 2) + 104.49216199393888 * dt(r), o = e < 20 ? 0 : -254.76935184120902 + .8274096064007395 * (o = e - 10) + 115.67994401066147 * dt(o)) : (n = 351.97690566805693 + .114206453784165 * (n = e - 55) - 40.25366309332127 * dt(n), r = 325.4494125711974 + .07943456536662342 * (r = e - 50) - 28.0852963507957 * dt(r), o = 255), [n, r, o, 1]
}, {
  round: G0
} = Math, B0 = (...t) => {
  const e = M(t, "rgb"),
    n = e[0],
    r = e[2];
  let o = 1e3,
    c = 4e4;
  const s = .4;
  let f;
  for (; c - o > s;) {
    f = (c + o) * .5;
    const a = Ce(f);
    a[2] / a[0] >= r / n ? c = f : o = f
  }
  return G0(f)
};
i.prototype.temp = i.prototype.kelvin = i.prototype.temperature = function() {
  return B0(this._rgb)
};
const jt = (...t) => new i(...t, "temp");
Object.assign(E, {
  temp: jt,
  kelvin: jt,
  temperature: jt
});
k.format.temp = k.format.kelvin = k.format.temperature = Ce;
i.prototype.oklch = function() {
  return ye(this._rgb)
};
const S0 = (...t) => new i(...t, "oklch");
Object.assign(E, {
  oklch: S0
});
k.format.oklch = ke;
k.autodetect.push({
  p: 2,
  test: (...t) => {
    if (t = M(t, "oklch"), x(t) === "array" && t.length === 3) return "oklch"
  }
});
Object.assign(E, {
  analyze: me,
  average: Xn,
  bezier: Wn,
  blend: Z,
  brewer: x0,
  Color: i,
  colors: et,
  contrast: h0,
  contrastAPCA: m0,
  cubehelix: c0,
  deltaE: k0,
  distance: _0,
  input: k,
  interpolate: nt,
  limits: ge,
  mix: nt,
  random: l0,
  scale: mt,
  scales: $0,
  valid: M0
});
export {
  E as c
};