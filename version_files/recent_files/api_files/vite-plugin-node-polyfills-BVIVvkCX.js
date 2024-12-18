import {
  g as Hr
} from "./@ledgerhq-BW4RAlPi.js";
const At = globalThis || void 0 || self;

function Vr(h) {
  return h && h.__esModule && Object.prototype.hasOwnProperty.call(h, "default") ? h.default : h
}
var Er = {
    exports: {}
  },
  m = Er.exports = {},
  _, L;

function nr() {
  throw new Error("setTimeout has not been defined")
}

function ir() {
  throw new Error("clearTimeout has not been defined")
}(function() {
  try {
    typeof setTimeout == "function" ? _ = setTimeout : _ = nr
  } catch {
    _ = nr
  }
  try {
    typeof clearTimeout == "function" ? L = clearTimeout : L = ir
  } catch {
    L = ir
  }
})();

function gr(h) {
  if (_ === setTimeout) return setTimeout(h, 0);
  if ((_ === nr || !_) && setTimeout) return _ = setTimeout, setTimeout(h, 0);
  try {
    return _(h, 0)
  } catch {
    try {
      return _.call(null, h, 0)
    } catch {
      return _.call(this, h, 0)
    }
  }
}

function zr(h) {
  if (L === clearTimeout) return clearTimeout(h);
  if ((L === ir || !L) && clearTimeout) return L = clearTimeout, clearTimeout(h);
  try {
    return L(h)
  } catch {
    try {
      return L.call(null, h)
    } catch {
      return L.call(this, h)
    }
  }
}
var k = [],
  W = !1,
  G, V = -1;

function Jr() {
  !W || !G || (W = !1, G.length ? k = G.concat(k) : V = -1, k.length && mr())
}

function mr() {
  if (!W) {
    var h = gr(Jr);
    W = !0;
    for (var f = k.length; f;) {
      for (G = k, k = []; ++V < f;) G && G[V].run();
      V = -1, f = k.length
    }
    G = null, W = !1, zr(h)
  }
}
m.nextTick = function(h) {
  var f = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var p = 1; p < arguments.length; p++) f[p - 1] = arguments[p];
  k.push(new Ir(h, f)), k.length === 1 && !W && gr(mr)
};

function Ir(h, f) {
  this.fun = h, this.array = f
}
Ir.prototype.run = function() {
  this.fun.apply(null, this.array)
};
m.title = "browser";
m.browser = !0;
m.env = {};
m.argv = [];
m.version = "";
m.versions = {};

function D() {}
m.on = D;
m.addListener = D;
m.once = D;
m.off = D;
m.removeListener = D;
m.removeAllListeners = D;
m.emit = D;
m.prependListener = D;
m.prependOnceListener = D;
m.listeners = function(h) {
  return []
};
m.binding = function(h) {
  throw new Error("process.binding is not supported")
};
m.cwd = function() {
  return "/"
};
m.chdir = function(h) {
  throw new Error("process.chdir is not supported")
};
m.umask = function() {
  return 0
};
var Qr = Er.exports;
const Ut = Vr(Qr);
var F = {},
  z = {};
z.byteLength = vr;
z.toByteArray = tt;
z.fromByteArray = it;
var M = [],
  b = [],
  Kr = typeof Uint8Array < "u" ? Uint8Array : Array,
  er = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var q = 0, Zr = er.length; q < Zr; ++q) M[q] = er[q], b[er.charCodeAt(q)] = q;
b[45] = 62;
b[95] = 63;

function Fr(h) {
  var f = h.length;
  if (f % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
  var p = h.indexOf("=");
  p === -1 && (p = f);
  var x = p === f ? 0 : 4 - p % 4;
  return [p, x]
}

function vr(h) {
  var f = Fr(h),
    p = f[0],
    x = f[1];
  return (p + x) * 3 / 4 - x
}

function rt(h, f, p) {
  return (f + p) * 3 / 4 - p
}

function tt(h) {
  var f, p = Fr(h),
    x = p[0],
    w = p[1],
    s = new Kr(rt(h, x, w)),
    l = 0,
    I = w > 0 ? x - 4 : x,
    B;
  for (B = 0; B < I; B += 4) f = b[h.charCodeAt(B)] << 18 | b[h.charCodeAt(B + 1)] << 12 | b[h.charCodeAt(B + 2)] << 6 | b[h.charCodeAt(B + 3)], s[l++] = f >> 16 & 255, s[l++] = f >> 8 & 255, s[l++] = f & 255;
  return w === 2 && (f = b[h.charCodeAt(B)] << 2 | b[h.charCodeAt(B + 1)] >> 4, s[l++] = f & 255), w === 1 && (f = b[h.charCodeAt(B)] << 10 | b[h.charCodeAt(B + 1)] << 4 | b[h.charCodeAt(B + 2)] >> 2, s[l++] = f >> 8 & 255, s[l++] = f & 255), s
}

function et(h) {
  return M[h >> 18 & 63] + M[h >> 12 & 63] + M[h >> 6 & 63] + M[h & 63]
}

function nt(h, f, p) {
  for (var x, w = [], s = f; s < p; s += 3) x = (h[s] << 16 & 16711680) + (h[s + 1] << 8 & 65280) + (h[s + 2] & 255), w.push(et(x));
  return w.join("")
}

function it(h) {
  for (var f, p = h.length, x = p % 3, w = [], s = 16383, l = 0, I = p - x; l < I; l += s) w.push(nt(h, l, l + s > I ? I : l + s));
  return x === 1 ? (f = h[p - 1], w.push(M[f >> 2] + M[f << 4 & 63] + "==")) : x === 2 && (f = (h[p - 2] << 8) + h[p - 1], w.push(M[f >> 10] + M[f >> 4 & 63] + M[f << 2 & 63] + "=")), w.join("")
}
var or = {}; /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
or.read = function(h, f, p, x, w) {
  var s, l, I = w * 8 - x - 1,
    B = (1 << I) - 1,
    A = B >> 1,
    o = -7,
    U = p ? w - 1 : 0,
    N = p ? -1 : 1,
    C = h[f + U];
  for (U += N, s = C & (1 << -o) - 1, C >>= -o, o += I; o > 0; s = s * 256 + h[f + U], U += N, o -= 8);
  for (l = s & (1 << -o) - 1, s >>= -o, o += x; o > 0; l = l * 256 + h[f + U], U += N, o -= 8);
  if (s === 0) s = 1 - A;
  else {
    if (s === B) return l ? NaN : (C ? -1 : 1) * (1 / 0);
    l = l + Math.pow(2, x), s = s - A
  }
  return (C ? -1 : 1) * l * Math.pow(2, s - x)
};
or.write = function(h, f, p, x, w, s) {
  var l, I, B, A = s * 8 - w - 1,
    o = (1 << A) - 1,
    U = o >> 1,
    N = w === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
    C = x ? 0 : s - 1,
    $ = x ? 1 : -1,
    J = f < 0 || f === 0 && 1 / f < 0 ? 1 : 0;
  for (f = Math.abs(f), isNaN(f) || f === 1 / 0 ? (I = isNaN(f) ? 1 : 0, l = o) : (l = Math.floor(Math.log(f) / Math.LN2), f * (B = Math.pow(2, -l)) < 1 && (l--, B *= 2), l + U >= 1 ? f += N / B : f += N * Math.pow(2, 1 - U), f * B >= 2 && (l++, B /= 2), l + U >= o ? (I = 0, l = o) : l + U >= 1 ? (I = (f * B - 1) * Math.pow(2, w), l = l + U) : (I = f * Math.pow(2, U - 1) * Math.pow(2, w), l = 0)); w >= 8; h[p + C] = I & 255, C += $, I /= 256, w -= 8);
  for (l = l << w | I, A += w; A > 0; h[p + C] = l & 255, C += $, l /= 256, A -= 8);
  h[p + C - $] |= J * 128
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(h) {
  const f = z,
    p = or,
    x = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  h.Buffer = o, h.SlowBuffer = Ur, h.INSPECT_MAX_BYTES = 50;
  const w = 2147483647;
  h.kMaxLength = w;
  const {
    Uint8Array: s,
    ArrayBuffer: l,
    SharedArrayBuffer: I
  } = globalThis;
  o.TYPED_ARRAY_SUPPORT = B(), !o.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");

  function B() {
    try {
      const e = new s(1),
        r = {
          foo: function() {
            return 42
          }
        };
      return Object.setPrototypeOf(r, s.prototype), Object.setPrototypeOf(e, r), e.foo() === 42
    } catch {
      return !1
    }
  }
  Object.defineProperty(o.prototype, "parent", {
    enumerable: !0,
    get: function() {
      if (o.isBuffer(this)) return this.buffer
    }
  }), Object.defineProperty(o.prototype, "offset", {
    enumerable: !0,
    get: function() {
      if (o.isBuffer(this)) return this.byteOffset
    }
  });

  function A(e) {
    if (e > w) throw new RangeError('The value "' + e + '" is invalid for option "size"');
    const r = new s(e);
    return Object.setPrototypeOf(r, o.prototype), r
  }

  function o(e, r, t) {
    if (typeof e == "number") {
      if (typeof r == "string") throw new TypeError('The "string" argument must be of type string. Received type number');
      return $(e)
    }
    return U(e, r, t)
  }
  o.poolSize = 8192;

  function U(e, r, t) {
    if (typeof e == "string") return J(e, r);
    if (l.isView(e)) return Tr(e);
    if (e == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
    if (S(e, l) || e && S(e.buffer, l) || typeof I < "u" && (S(e, I) || e && S(e.buffer, I))) return K(e, r, t);
    if (typeof e == "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
    const n = e.valueOf && e.valueOf();
    if (n != null && n !== e) return o.from(n, r, t);
    const i = Ar(e);
    if (i) return i;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof e[Symbol.toPrimitive] == "function") return o.from(e[Symbol.toPrimitive]("string"), r, t);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e)
  }
  o.from = function(e, r, t) {
    return U(e, r, t)
  }, Object.setPrototypeOf(o.prototype, s.prototype), Object.setPrototypeOf(o, s);

  function N(e) {
    if (typeof e != "number") throw new TypeError('"size" argument must be of type number');
    if (e < 0) throw new RangeError('The value "' + e + '" is invalid for option "size"')
  }

  function C(e, r, t) {
    return N(e), e <= 0 ? A(e) : r !== void 0 ? typeof t == "string" ? A(e).fill(r, t) : A(e).fill(r) : A(e)
  }
  o.alloc = function(e, r, t) {
    return C(e, r, t)
  };

  function $(e) {
    return N(e), A(e < 0 ? 0 : Z(e) | 0)
  }
  o.allocUnsafe = function(e) {
    return $(e)
  }, o.allocUnsafeSlow = function(e) {
    return $(e)
  };

  function J(e, r) {
    if ((typeof r != "string" || r === "") && (r = "utf8"), !o.isEncoding(r)) throw new TypeError("Unknown encoding: " + r);
    const t = ur(e, r) | 0;
    let n = A(t);
    const i = n.write(e, r);
    return i !== t && (n = n.slice(0, i)), n
  }

  function Q(e) {
    const r = e.length < 0 ? 0 : Z(e.length) | 0,
      t = A(r);
    for (let n = 0; n < r; n += 1) t[n] = e[n] & 255;
    return t
  }

  function Tr(e) {
    if (S(e, s)) {
      const r = new s(e);
      return K(r.buffer, r.byteOffset, r.byteLength)
    }
    return Q(e)
  }

  function K(e, r, t) {
    if (r < 0 || e.byteLength < r) throw new RangeError('"offset" is outside of buffer bounds');
    if (e.byteLength < r + (t || 0)) throw new RangeError('"length" is outside of buffer bounds');
    let n;
    return r === void 0 && t === void 0 ? n = new s(e) : t === void 0 ? n = new s(e, r) : n = new s(e, r, t), Object.setPrototypeOf(n, o.prototype), n
  }

  function Ar(e) {
    if (o.isBuffer(e)) {
      const r = Z(e.length) | 0,
        t = A(r);
      return t.length === 0 || e.copy(t, 0, 0, r), t
    }
    if (e.length !== void 0) return typeof e.length != "number" || tr(e.length) ? A(0) : Q(e);
    if (e.type === "Buffer" && Array.isArray(e.data)) return Q(e.data)
  }

  function Z(e) {
    if (e >= w) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + w.toString(16) + " bytes");
    return e | 0
  }

  function Ur(e) {
    return +e != e && (e = 0), o.alloc(+e)
  }
  o.isBuffer = function(r) {
    return r != null && r._isBuffer === !0 && r !== o.prototype
  }, o.compare = function(r, t) {
    if (S(r, s) && (r = o.from(r, r.offset, r.byteLength)), S(t, s) && (t = o.from(t, t.offset, t.byteLength)), !o.isBuffer(r) || !o.isBuffer(t)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (r === t) return 0;
    let n = r.length,
      i = t.length;
    for (let u = 0, c = Math.min(n, i); u < c; ++u)
      if (r[u] !== t[u]) {
        n = r[u], i = t[u];
        break
      } return n < i ? -1 : i < n ? 1 : 0
  }, o.isEncoding = function(r) {
    switch (String(r).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;
      default:
        return !1
    }
  }, o.concat = function(r, t) {
    if (!Array.isArray(r)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (r.length === 0) return o.alloc(0);
    let n;
    if (t === void 0)
      for (t = 0, n = 0; n < r.length; ++n) t += r[n].length;
    const i = o.allocUnsafe(t);
    let u = 0;
    for (n = 0; n < r.length; ++n) {
      let c = r[n];
      if (S(c, s)) u + c.length > i.length ? (o.isBuffer(c) || (c = o.from(c)), c.copy(i, u)) : s.prototype.set.call(i, c, u);
      else if (o.isBuffer(c)) c.copy(i, u);
      else throw new TypeError('"list" argument must be an Array of Buffers');
      u += c.length
    }
    return i
  };

  function ur(e, r) {
    if (o.isBuffer(e)) return e.length;
    if (l.isView(e) || S(e, l)) return e.byteLength;
    if (typeof e != "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
    const t = e.length,
      n = arguments.length > 2 && arguments[2] === !0;
    if (!n && t === 0) return 0;
    let i = !1;
    for (;;) switch (r) {
      case "ascii":
      case "latin1":
      case "binary":
        return t;
      case "utf8":
      case "utf-8":
        return rr(e).length;
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return t * 2;
      case "hex":
        return t >>> 1;
      case "base64":
        return dr(e).length;
      default:
        if (i) return n ? -1 : rr(e).length;
        r = ("" + r).toLowerCase(), i = !0
    }
  }
  o.byteLength = ur;

  function Rr(e, r, t) {
    let n = !1;
    if ((r === void 0 || r < 0) && (r = 0), r > this.length || ((t === void 0 || t > this.length) && (t = this.length), t <= 0) || (t >>>= 0, r >>>= 0, t <= r)) return "";
    for (e || (e = "utf8");;) switch (e) {
      case "hex":
        return Pr(this, r, t);
      case "utf8":
      case "utf-8":
        return fr(this, r, t);
      case "ascii":
        return kr(this, r, t);
      case "latin1":
      case "binary":
        return Dr(this, r, t);
      case "base64":
        return Mr(this, r, t);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return $r(this, r, t);
      default:
        if (n) throw new TypeError("Unknown encoding: " + e);
        e = (e + "").toLowerCase(), n = !0
    }
  }
  o.prototype._isBuffer = !0;

  function O(e, r, t) {
    const n = e[r];
    e[r] = e[t], e[t] = n
  }
  o.prototype.swap16 = function() {
    const r = this.length;
    if (r % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let t = 0; t < r; t += 2) O(this, t, t + 1);
    return this
  }, o.prototype.swap32 = function() {
    const r = this.length;
    if (r % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let t = 0; t < r; t += 4) O(this, t, t + 3), O(this, t + 1, t + 2);
    return this
  }, o.prototype.swap64 = function() {
    const r = this.length;
    if (r % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let t = 0; t < r; t += 8) O(this, t, t + 7), O(this, t + 1, t + 6), O(this, t + 2, t + 5), O(this, t + 3, t + 4);
    return this
  }, o.prototype.toString = function() {
    const r = this.length;
    return r === 0 ? "" : arguments.length === 0 ? fr(this, 0, r) : Rr.apply(this, arguments)
  }, o.prototype.toLocaleString = o.prototype.toString, o.prototype.equals = function(r) {
    if (!o.isBuffer(r)) throw new TypeError("Argument must be a Buffer");
    return this === r ? !0 : o.compare(this, r) === 0
  }, o.prototype.inspect = function() {
    let r = "";
    const t = h.INSPECT_MAX_BYTES;
    return r = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim(), this.length > t && (r += " ... "), "<Buffer " + r + ">"
  }, x && (o.prototype[x] = o.prototype.inspect), o.prototype.compare = function(r, t, n, i, u) {
    if (S(r, s) && (r = o.from(r, r.offset, r.byteLength)), !o.isBuffer(r)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof r);
    if (t === void 0 && (t = 0), n === void 0 && (n = r ? r.length : 0), i === void 0 && (i = 0), u === void 0 && (u = this.length), t < 0 || n > r.length || i < 0 || u > this.length) throw new RangeError("out of range index");
    if (i >= u && t >= n) return 0;
    if (i >= u) return -1;
    if (t >= n) return 1;
    if (t >>>= 0, n >>>= 0, i >>>= 0, u >>>= 0, this === r) return 0;
    let c = u - i,
      a = n - t;
    const E = Math.min(c, a),
      d = this.slice(i, u),
      g = r.slice(t, n);
    for (let y = 0; y < E; ++y)
      if (d[y] !== g[y]) {
        c = d[y], a = g[y];
        break
      } return c < a ? -1 : a < c ? 1 : 0
  };

  function cr(e, r, t, n, i) {
    if (e.length === 0) return -1;
    if (typeof t == "string" ? (n = t, t = 0) : t > 2147483647 ? t = 2147483647 : t < -2147483648 && (t = -2147483648), t = +t, tr(t) && (t = i ? 0 : e.length - 1), t < 0 && (t = e.length + t), t >= e.length) {
      if (i) return -1;
      t = e.length - 1
    } else if (t < 0)
      if (i) t = 0;
      else return -1;
    if (typeof r == "string" && (r = o.from(r, n)), o.isBuffer(r)) return r.length === 0 ? -1 : hr(e, r, t, n, i);
    if (typeof r == "number") return r = r & 255, typeof s.prototype.indexOf == "function" ? i ? s.prototype.indexOf.call(e, r, t) : s.prototype.lastIndexOf.call(e, r, t) : hr(e, [r], t, n, i);
    throw new TypeError("val must be string, number or Buffer")
  }

  function hr(e, r, t, n, i) {
    let u = 1,
      c = e.length,
      a = r.length;
    if (n !== void 0 && (n = String(n).toLowerCase(), n === "ucs2" || n === "ucs-2" || n === "utf16le" || n === "utf-16le")) {
      if (e.length < 2 || r.length < 2) return -1;
      u = 2, c /= 2, a /= 2, t /= 2
    }

    function E(g, y) {
      return u === 1 ? g[y] : g.readUInt16BE(y * u)
    }
    let d;
    if (i) {
      let g = -1;
      for (d = t; d < c; d++)
        if (E(e, d) === E(r, g === -1 ? 0 : d - g)) {
          if (g === -1 && (g = d), d - g + 1 === a) return g * u
        } else g !== -1 && (d -= d - g), g = -1
    } else
      for (t + a > c && (t = c - a), d = t; d >= 0; d--) {
        let g = !0;
        for (let y = 0; y < a; y++)
          if (E(e, d + y) !== E(r, y)) {
            g = !1;
            break
          } if (g) return d
      }
    return -1
  }
  o.prototype.includes = function(r, t, n) {
    return this.indexOf(r, t, n) !== -1
  }, o.prototype.indexOf = function(r, t, n) {
    return cr(this, r, t, n, !0)
  }, o.prototype.lastIndexOf = function(r, t, n) {
    return cr(this, r, t, n, !1)
  };

  function Cr(e, r, t, n) {
    t = Number(t) || 0;
    const i = e.length - t;
    n ? (n = Number(n), n > i && (n = i)) : n = i;
    const u = r.length;
    n > u / 2 && (n = u / 2);
    let c;
    for (c = 0; c < n; ++c) {
      const a = parseInt(r.substr(c * 2, 2), 16);
      if (tr(a)) return c;
      e[t + c] = a
    }
    return c
  }

  function br(e, r, t, n) {
    return H(rr(r, e.length - t), e, t, n)
  }

  function Sr(e, r, t, n) {
    return H(Yr(r), e, t, n)
  }

  function _r(e, r, t, n) {
    return H(dr(r), e, t, n)
  }

  function Lr(e, r, t, n) {
    return H(qr(r, e.length - t), e, t, n)
  }
  o.prototype.write = function(r, t, n, i) {
    if (t === void 0) i = "utf8", n = this.length, t = 0;
    else if (n === void 0 && typeof t == "string") i = t, n = this.length, t = 0;
    else if (isFinite(t)) t = t >>> 0, isFinite(n) ? (n = n >>> 0, i === void 0 && (i = "utf8")) : (i = n, n = void 0);
    else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    const u = this.length - t;
    if ((n === void 0 || n > u) && (n = u), r.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
    i || (i = "utf8");
    let c = !1;
    for (;;) switch (i) {
      case "hex":
        return Cr(this, r, t, n);
      case "utf8":
      case "utf-8":
        return br(this, r, t, n);
      case "ascii":
      case "latin1":
      case "binary":
        return Sr(this, r, t, n);
      case "base64":
        return _r(this, r, t, n);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return Lr(this, r, t, n);
      default:
        if (c) throw new TypeError("Unknown encoding: " + i);
        i = ("" + i).toLowerCase(), c = !0
    }
  }, o.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    }
  };

  function Mr(e, r, t) {
    return r === 0 && t === e.length ? f.fromByteArray(e) : f.fromByteArray(e.slice(r, t))
  }

  function fr(e, r, t) {
    t = Math.min(e.length, t);
    const n = [];
    let i = r;
    for (; i < t;) {
      const u = e[i];
      let c = null,
        a = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
      if (i + a <= t) {
        let E, d, g, y;
        switch (a) {
          case 1:
            u < 128 && (c = u);
            break;
          case 2:
            E = e[i + 1], (E & 192) === 128 && (y = (u & 31) << 6 | E & 63, y > 127 && (c = y));
            break;
          case 3:
            E = e[i + 1], d = e[i + 2], (E & 192) === 128 && (d & 192) === 128 && (y = (u & 15) << 12 | (E & 63) << 6 | d & 63, y > 2047 && (y < 55296 || y > 57343) && (c = y));
            break;
          case 4:
            E = e[i + 1], d = e[i + 2], g = e[i + 3], (E & 192) === 128 && (d & 192) === 128 && (g & 192) === 128 && (y = (u & 15) << 18 | (E & 63) << 12 | (d & 63) << 6 | g & 63, y > 65535 && y < 1114112 && (c = y))
        }
      }
      c === null ? (c = 65533, a = 1) : c > 65535 && (c -= 65536, n.push(c >>> 10 & 1023 | 55296), c = 56320 | c & 1023), n.push(c), i += a
    }
    return Nr(n)
  }
  const sr = 4096;

  function Nr(e) {
    const r = e.length;
    if (r <= sr) return String.fromCharCode.apply(String, e);
    let t = "",
      n = 0;
    for (; n < r;) t += String.fromCharCode.apply(String, e.slice(n, n += sr));
    return t
  }

  function kr(e, r, t) {
    let n = "";
    t = Math.min(e.length, t);
    for (let i = r; i < t; ++i) n += String.fromCharCode(e[i] & 127);
    return n
  }

  function Dr(e, r, t) {
    let n = "";
    t = Math.min(e.length, t);
    for (let i = r; i < t; ++i) n += String.fromCharCode(e[i]);
    return n
  }

  function Pr(e, r, t) {
    const n = e.length;
    (!r || r < 0) && (r = 0), (!t || t < 0 || t > n) && (t = n);
    let i = "";
    for (let u = r; u < t; ++u) i += Wr[e[u]];
    return i
  }

  function $r(e, r, t) {
    const n = e.slice(r, t);
    let i = "";
    for (let u = 0; u < n.length - 1; u += 2) i += String.fromCharCode(n[u] + n[u + 1] * 256);
    return i
  }
  o.prototype.slice = function(r, t) {
    const n = this.length;
    r = ~~r, t = t === void 0 ? n : ~~t, r < 0 ? (r += n, r < 0 && (r = 0)) : r > n && (r = n), t < 0 ? (t += n, t < 0 && (t = 0)) : t > n && (t = n), t < r && (t = r);
    const i = this.subarray(r, t);
    return Object.setPrototypeOf(i, o.prototype), i
  };

  function T(e, r, t) {
    if (e % 1 !== 0 || e < 0) throw new RangeError("offset is not uint");
    if (e + r > t) throw new RangeError("Trying to access beyond buffer length")
  }
  o.prototype.readUintLE = o.prototype.readUIntLE = function(r, t, n) {
    r = r >>> 0, t = t >>> 0, n || T(r, t, this.length);
    let i = this[r],
      u = 1,
      c = 0;
    for (; ++c < t && (u *= 256);) i += this[r + c] * u;
    return i
  }, o.prototype.readUintBE = o.prototype.readUIntBE = function(r, t, n) {
    r = r >>> 0, t = t >>> 0, n || T(r, t, this.length);
    let i = this[r + --t],
      u = 1;
    for (; t > 0 && (u *= 256);) i += this[r + --t] * u;
    return i
  }, o.prototype.readUint8 = o.prototype.readUInt8 = function(r, t) {
    return r = r >>> 0, t || T(r, 1, this.length), this[r]
  }, o.prototype.readUint16LE = o.prototype.readUInt16LE = function(r, t) {
    return r = r >>> 0, t || T(r, 2, this.length), this[r] | this[r + 1] << 8
  }, o.prototype.readUint16BE = o.prototype.readUInt16BE = function(r, t) {
    return r = r >>> 0, t || T(r, 2, this.length), this[r] << 8 | this[r + 1]
  }, o.prototype.readUint32LE = o.prototype.readUInt32LE = function(r, t) {
    return r = r >>> 0, t || T(r, 4, this.length), (this[r] | this[r + 1] << 8 | this[r + 2] << 16) + this[r + 3] * 16777216
  }, o.prototype.readUint32BE = o.prototype.readUInt32BE = function(r, t) {
    return r = r >>> 0, t || T(r, 4, this.length), this[r] * 16777216 + (this[r + 1] << 16 | this[r + 2] << 8 | this[r + 3])
  }, o.prototype.readBigUInt64LE = P(function(r) {
    r = r >>> 0, Y(r, "offset");
    const t = this[r],
      n = this[r + 7];
    (t === void 0 || n === void 0) && X(r, this.length - 8);
    const i = t + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + this[++r] * 2 ** 24,
      u = this[++r] + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + n * 2 ** 24;
    return BigInt(i) + (BigInt(u) << BigInt(32))
  }), o.prototype.readBigUInt64BE = P(function(r) {
    r = r >>> 0, Y(r, "offset");
    const t = this[r],
      n = this[r + 7];
    (t === void 0 || n === void 0) && X(r, this.length - 8);
    const i = t * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + this[++r],
      u = this[++r] * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + n;
    return (BigInt(i) << BigInt(32)) + BigInt(u)
  }), o.prototype.readIntLE = function(r, t, n) {
    r = r >>> 0, t = t >>> 0, n || T(r, t, this.length);
    let i = this[r],
      u = 1,
      c = 0;
    for (; ++c < t && (u *= 256);) i += this[r + c] * u;
    return u *= 128, i >= u && (i -= Math.pow(2, 8 * t)), i
  }, o.prototype.readIntBE = function(r, t, n) {
    r = r >>> 0, t = t >>> 0, n || T(r, t, this.length);
    let i = t,
      u = 1,
      c = this[r + --i];
    for (; i > 0 && (u *= 256);) c += this[r + --i] * u;
    return u *= 128, c >= u && (c -= Math.pow(2, 8 * t)), c
  }, o.prototype.readInt8 = function(r, t) {
    return r = r >>> 0, t || T(r, 1, this.length), this[r] & 128 ? (255 - this[r] + 1) * -1 : this[r]
  }, o.prototype.readInt16LE = function(r, t) {
    r = r >>> 0, t || T(r, 2, this.length);
    const n = this[r] | this[r + 1] << 8;
    return n & 32768 ? n | 4294901760 : n
  }, o.prototype.readInt16BE = function(r, t) {
    r = r >>> 0, t || T(r, 2, this.length);
    const n = this[r + 1] | this[r] << 8;
    return n & 32768 ? n | 4294901760 : n
  }, o.prototype.readInt32LE = function(r, t) {
    return r = r >>> 0, t || T(r, 4, this.length), this[r] | this[r + 1] << 8 | this[r + 2] << 16 | this[r + 3] << 24
  }, o.prototype.readInt32BE = function(r, t) {
    return r = r >>> 0, t || T(r, 4, this.length), this[r] << 24 | this[r + 1] << 16 | this[r + 2] << 8 | this[r + 3]
  }, o.prototype.readBigInt64LE = P(function(r) {
    r = r >>> 0, Y(r, "offset");
    const t = this[r],
      n = this[r + 7];
    (t === void 0 || n === void 0) && X(r, this.length - 8);
    const i = this[r + 4] + this[r + 5] * 2 ** 8 + this[r + 6] * 2 ** 16 + (n << 24);
    return (BigInt(i) << BigInt(32)) + BigInt(t + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + this[++r] * 2 ** 24)
  }), o.prototype.readBigInt64BE = P(function(r) {
    r = r >>> 0, Y(r, "offset");
    const t = this[r],
      n = this[r + 7];
    (t === void 0 || n === void 0) && X(r, this.length - 8);
    const i = (t << 24) + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + this[++r];
    return (BigInt(i) << BigInt(32)) + BigInt(this[++r] * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + n)
  }), o.prototype.readFloatLE = function(r, t) {
    return r = r >>> 0, t || T(r, 4, this.length), p.read(this, r, !0, 23, 4)
  }, o.prototype.readFloatBE = function(r, t) {
    return r = r >>> 0, t || T(r, 4, this.length), p.read(this, r, !1, 23, 4)
  }, o.prototype.readDoubleLE = function(r, t) {
    return r = r >>> 0, t || T(r, 8, this.length), p.read(this, r, !0, 52, 8)
  }, o.prototype.readDoubleBE = function(r, t) {
    return r = r >>> 0, t || T(r, 8, this.length), p.read(this, r, !1, 52, 8)
  };

  function R(e, r, t, n, i, u) {
    if (!o.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (r > i || r < u) throw new RangeError('"value" argument is out of bounds');
    if (t + n > e.length) throw new RangeError("Index out of range")
  }
  o.prototype.writeUintLE = o.prototype.writeUIntLE = function(r, t, n, i) {
    if (r = +r, t = t >>> 0, n = n >>> 0, !i) {
      const a = Math.pow(2, 8 * n) - 1;
      R(this, r, t, n, a, 0)
    }
    let u = 1,
      c = 0;
    for (this[t] = r & 255; ++c < n && (u *= 256);) this[t + c] = r / u & 255;
    return t + n
  }, o.prototype.writeUintBE = o.prototype.writeUIntBE = function(r, t, n, i) {
    if (r = +r, t = t >>> 0, n = n >>> 0, !i) {
      const a = Math.pow(2, 8 * n) - 1;
      R(this, r, t, n, a, 0)
    }
    let u = n - 1,
      c = 1;
    for (this[t + u] = r & 255; --u >= 0 && (c *= 256);) this[t + u] = r / c & 255;
    return t + n
  }, o.prototype.writeUint8 = o.prototype.writeUInt8 = function(r, t, n) {
    return r = +r, t = t >>> 0, n || R(this, r, t, 1, 255, 0), this[t] = r & 255, t + 1
  }, o.prototype.writeUint16LE = o.prototype.writeUInt16LE = function(r, t, n) {
    return r = +r, t = t >>> 0, n || R(this, r, t, 2, 65535, 0), this[t] = r & 255, this[t + 1] = r >>> 8, t + 2
  }, o.prototype.writeUint16BE = o.prototype.writeUInt16BE = function(r, t, n) {
    return r = +r, t = t >>> 0, n || R(this, r, t, 2, 65535, 0), this[t] = r >>> 8, this[t + 1] = r & 255, t + 2
  }, o.prototype.writeUint32LE = o.prototype.writeUInt32LE = function(r, t, n) {
    return r = +r, t = t >>> 0, n || R(this, r, t, 4, 4294967295, 0), this[t + 3] = r >>> 24, this[t + 2] = r >>> 16, this[t + 1] = r >>> 8, this[t] = r & 255, t + 4
  }, o.prototype.writeUint32BE = o.prototype.writeUInt32BE = function(r, t, n) {
    return r = +r, t = t >>> 0, n || R(this, r, t, 4, 4294967295, 0), this[t] = r >>> 24, this[t + 1] = r >>> 16, this[t + 2] = r >>> 8, this[t + 3] = r & 255, t + 4
  };

  function lr(e, r, t, n, i) {
    Br(r, n, i, e, t, 7);
    let u = Number(r & BigInt(4294967295));
    e[t++] = u, u = u >> 8, e[t++] = u, u = u >> 8, e[t++] = u, u = u >> 8, e[t++] = u;
    let c = Number(r >> BigInt(32) & BigInt(4294967295));
    return e[t++] = c, c = c >> 8, e[t++] = c, c = c >> 8, e[t++] = c, c = c >> 8, e[t++] = c, t
  }

  function pr(e, r, t, n, i) {
    Br(r, n, i, e, t, 7);
    let u = Number(r & BigInt(4294967295));
    e[t + 7] = u, u = u >> 8, e[t + 6] = u, u = u >> 8, e[t + 5] = u, u = u >> 8, e[t + 4] = u;
    let c = Number(r >> BigInt(32) & BigInt(4294967295));
    return e[t + 3] = c, c = c >> 8, e[t + 2] = c, c = c >> 8, e[t + 1] = c, c = c >> 8, e[t] = c, t + 8
  }
  o.prototype.writeBigUInt64LE = P(function(r, t = 0) {
    return lr(this, r, t, BigInt(0), BigInt("0xffffffffffffffff"))
  }), o.prototype.writeBigUInt64BE = P(function(r, t = 0) {
    return pr(this, r, t, BigInt(0), BigInt("0xffffffffffffffff"))
  }), o.prototype.writeIntLE = function(r, t, n, i) {
    if (r = +r, t = t >>> 0, !i) {
      const E = Math.pow(2, 8 * n - 1);
      R(this, r, t, n, E - 1, -E)
    }
    let u = 0,
      c = 1,
      a = 0;
    for (this[t] = r & 255; ++u < n && (c *= 256);) r < 0 && a === 0 && this[t + u - 1] !== 0 && (a = 1), this[t + u] = (r / c >> 0) - a & 255;
    return t + n
  }, o.prototype.writeIntBE = function(r, t, n, i) {
    if (r = +r, t = t >>> 0, !i) {
      const E = Math.pow(2, 8 * n - 1);
      R(this, r, t, n, E - 1, -E)
    }
    let u = n - 1,
      c = 1,
      a = 0;
    for (this[t + u] = r & 255; --u >= 0 && (c *= 256);) r < 0 && a === 0 && this[t + u + 1] !== 0 && (a = 1), this[t + u] = (r / c >> 0) - a & 255;
    return t + n
  }, o.prototype.writeInt8 = function(r, t, n) {
    return r = +r, t = t >>> 0, n || R(this, r, t, 1, 127, -128), r < 0 && (r = 255 + r + 1), this[t] = r & 255, t + 1
  }, o.prototype.writeInt16LE = function(r, t, n) {
    return r = +r, t = t >>> 0, n || R(this, r, t, 2, 32767, -32768), this[t] = r & 255, this[t + 1] = r >>> 8, t + 2
  }, o.prototype.writeInt16BE = function(r, t, n) {
    return r = +r, t = t >>> 0, n || R(this, r, t, 2, 32767, -32768), this[t] = r >>> 8, this[t + 1] = r & 255, t + 2
  }, o.prototype.writeInt32LE = function(r, t, n) {
    return r = +r, t = t >>> 0, n || R(this, r, t, 4, 2147483647, -2147483648), this[t] = r & 255, this[t + 1] = r >>> 8, this[t + 2] = r >>> 16, this[t + 3] = r >>> 24, t + 4
  }, o.prototype.writeInt32BE = function(r, t, n) {
    return r = +r, t = t >>> 0, n || R(this, r, t, 4, 2147483647, -2147483648), r < 0 && (r = 4294967295 + r + 1), this[t] = r >>> 24, this[t + 1] = r >>> 16, this[t + 2] = r >>> 8, this[t + 3] = r & 255, t + 4
  }, o.prototype.writeBigInt64LE = P(function(r, t = 0) {
    return lr(this, r, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
  }), o.prototype.writeBigInt64BE = P(function(r, t = 0) {
    return pr(this, r, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
  });

  function ar(e, r, t, n, i, u) {
    if (t + n > e.length) throw new RangeError("Index out of range");
    if (t < 0) throw new RangeError("Index out of range")
  }

  function wr(e, r, t, n, i) {
    return r = +r, t = t >>> 0, i || ar(e, r, t, 4), p.write(e, r, t, n, 23, 4), t + 4
  }
  o.prototype.writeFloatLE = function(r, t, n) {
    return wr(this, r, t, !0, n)
  }, o.prototype.writeFloatBE = function(r, t, n) {
    return wr(this, r, t, !1, n)
  };

  function yr(e, r, t, n, i) {
    return r = +r, t = t >>> 0, i || ar(e, r, t, 8), p.write(e, r, t, n, 52, 8), t + 8
  }
  o.prototype.writeDoubleLE = function(r, t, n) {
    return yr(this, r, t, !0, n)
  }, o.prototype.writeDoubleBE = function(r, t, n) {
    return yr(this, r, t, !1, n)
  }, o.prototype.copy = function(r, t, n, i) {
    if (!o.isBuffer(r)) throw new TypeError("argument should be a Buffer");
    if (n || (n = 0), !i && i !== 0 && (i = this.length), t >= r.length && (t = r.length), t || (t = 0), i > 0 && i < n && (i = n), i === n || r.length === 0 || this.length === 0) return 0;
    if (t < 0) throw new RangeError("targetStart out of bounds");
    if (n < 0 || n >= this.length) throw new RangeError("Index out of range");
    if (i < 0) throw new RangeError("sourceEnd out of bounds");
    i > this.length && (i = this.length), r.length - t < i - n && (i = r.length - t + n);
    const u = i - n;
    return this === r && typeof s.prototype.copyWithin == "function" ? this.copyWithin(t, n, i) : s.prototype.set.call(r, this.subarray(n, i), t), u
  }, o.prototype.fill = function(r, t, n, i) {
    if (typeof r == "string") {
      if (typeof t == "string" ? (i = t, t = 0, n = this.length) : typeof n == "string" && (i = n, n = this.length), i !== void 0 && typeof i != "string") throw new TypeError("encoding must be a string");
      if (typeof i == "string" && !o.isEncoding(i)) throw new TypeError("Unknown encoding: " + i);
      if (r.length === 1) {
        const c = r.charCodeAt(0);
        (i === "utf8" && c < 128 || i === "latin1") && (r = c)
      }
    } else typeof r == "number" ? r = r & 255 : typeof r == "boolean" && (r = Number(r));
    if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
    if (n <= t) return this;
    t = t >>> 0, n = n === void 0 ? this.length : n >>> 0, r || (r = 0);
    let u;
    if (typeof r == "number")
      for (u = t; u < n; ++u) this[u] = r;
    else {
      const c = o.isBuffer(r) ? r : o.from(r, i),
        a = c.length;
      if (a === 0) throw new TypeError('The value "' + r + '" is invalid for argument "value"');
      for (u = 0; u < n - t; ++u) this[u + t] = c[u % a]
    }
    return this
  };
  const j = {};

  function v(e, r, t) {
    j[e] = class extends t {
      constructor() {
        super(), Object.defineProperty(this, "message", {
          value: r.apply(this, arguments),
          writable: !0,
          configurable: !0
        }), this.name = `${this.name} [${e}]`, this.stack, delete this.name
      }
      get code() {
        return e
      }
      set code(i) {
        Object.defineProperty(this, "code", {
          configurable: !0,
          enumerable: !0,
          value: i,
          writable: !0
        })
      }
      toString() {
        return `${this.name} [${e}]: ${this.message}`
      }
    }
  }
  v("ERR_BUFFER_OUT_OF_BOUNDS", function(e) {
    return e ? `${e} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds"
  }, RangeError), v("ERR_INVALID_ARG_TYPE", function(e, r) {
    return `The "${e}" argument must be of type number. Received type ${typeof r}`
  }, TypeError), v("ERR_OUT_OF_RANGE", function(e, r, t) {
    let n = `The value of "${e}" is out of range.`,
      i = t;
    return Number.isInteger(t) && Math.abs(t) > 2 ** 32 ? i = xr(String(t)) : typeof t == "bigint" && (i = String(t), (t > BigInt(2) ** BigInt(32) || t < -(BigInt(2) ** BigInt(32))) && (i = xr(i)), i += "n"), n += ` It must be ${r}. Received ${i}`, n
  }, RangeError);

  function xr(e) {
    let r = "",
      t = e.length;
    const n = e[0] === "-" ? 1 : 0;
    for (; t >= n + 4; t -= 3) r = `_${e.slice(t-3,t)}${r}`;
    return `${e.slice(0,t)}${r}`
  }

  function Or(e, r, t) {
    Y(r, "offset"), (e[r] === void 0 || e[r + t] === void 0) && X(r, e.length - (t + 1))
  }

  function Br(e, r, t, n, i, u) {
    if (e > t || e < r) {
      const c = typeof r == "bigint" ? "n" : "";
      let a;
      throw r === 0 || r === BigInt(0) ? a = `>= 0${c} and < 2${c} ** ${(u+1)*8}${c}` : a = `>= -(2${c} ** ${(u+1)*8-1}${c}) and < 2 ** ${(u+1)*8-1}${c}`, new j.ERR_OUT_OF_RANGE("value", a, e)
    }
    Or(n, i, u)
  }

  function Y(e, r) {
    if (typeof e != "number") throw new j.ERR_INVALID_ARG_TYPE(r, "number", e)
  }

  function X(e, r, t) {
    throw Math.floor(e) !== e ? (Y(e, t), new j.ERR_OUT_OF_RANGE("offset", "an integer", e)) : r < 0 ? new j.ERR_BUFFER_OUT_OF_BOUNDS : new j.ERR_OUT_OF_RANGE("offset", `>= 0 and <= ${r}`, e)
  }
  const Gr = /[^+/0-9A-Za-z-_]/g;

  function jr(e) {
    if (e = e.split("=")[0], e = e.trim().replace(Gr, ""), e.length < 2) return "";
    for (; e.length % 4 !== 0;) e = e + "=";
    return e
  }

  function rr(e, r) {
    r = r || 1 / 0;
    let t;
    const n = e.length;
    let i = null;
    const u = [];
    for (let c = 0; c < n; ++c) {
      if (t = e.charCodeAt(c), t > 55295 && t < 57344) {
        if (!i) {
          if (t > 56319) {
            (r -= 3) > -1 && u.push(239, 191, 189);
            continue
          } else if (c + 1 === n) {
            (r -= 3) > -1 && u.push(239, 191, 189);
            continue
          }
          i = t;
          continue
        }
        if (t < 56320) {
          (r -= 3) > -1 && u.push(239, 191, 189), i = t;
          continue
        }
        t = (i - 55296 << 10 | t - 56320) + 65536
      } else i && (r -= 3) > -1 && u.push(239, 191, 189);
      if (i = null, t < 128) {
        if ((r -= 1) < 0) break;
        u.push(t)
      } else if (t < 2048) {
        if ((r -= 2) < 0) break;
        u.push(t >> 6 | 192, t & 63 | 128)
      } else if (t < 65536) {
        if ((r -= 3) < 0) break;
        u.push(t >> 12 | 224, t >> 6 & 63 | 128, t & 63 | 128)
      } else if (t < 1114112) {
        if ((r -= 4) < 0) break;
        u.push(t >> 18 | 240, t >> 12 & 63 | 128, t >> 6 & 63 | 128, t & 63 | 128)
      } else throw new Error("Invalid code point")
    }
    return u
  }

  function Yr(e) {
    const r = [];
    for (let t = 0; t < e.length; ++t) r.push(e.charCodeAt(t) & 255);
    return r
  }

  function qr(e, r) {
    let t, n, i;
    const u = [];
    for (let c = 0; c < e.length && !((r -= 2) < 0); ++c) t = e.charCodeAt(c), n = t >> 8, i = t % 256, u.push(i), u.push(n);
    return u
  }

  function dr(e) {
    return f.toByteArray(jr(e))
  }

  function H(e, r, t, n) {
    let i;
    for (i = 0; i < n && !(i + t >= r.length || i >= e.length); ++i) r[i + t] = e[i];
    return i
  }

  function S(e, r) {
    return e instanceof r || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === r.name
  }

  function tr(e) {
    return e !== e
  }
  const Wr = function() {
    const e = "0123456789abcdef",
      r = new Array(256);
    for (let t = 0; t < 16; ++t) {
      const n = t * 16;
      for (let i = 0; i < 16; ++i) r[n + i] = e[t] + e[i]
    }
    return r
  }();

  function P(e) {
    return typeof BigInt > "u" ? Xr : e
  }

  function Xr() {
    throw new Error("BigInt not supported")
  }
})(F);
const ot = F.Buffer,
  ut = F.Blob,
  ct = F.BlobOptions,
  ht = F.Buffer,
  ft = F.File,
  st = F.FileOptions,
  lt = F.INSPECT_MAX_BYTES,
  pt = F.SlowBuffer,
  at = F.TranscodeEncoding,
  wt = F.atob,
  yt = F.btoa,
  xt = F.constants,
  Bt = F.isAscii,
  dt = F.isUtf8,
  Et = F.kMaxLength,
  gt = F.kStringMaxLength,
  mt = F.resolveObjectURL,
  It = F.transcode,
  Ft = Object.freeze(Object.defineProperty({
    __proto__: null,
    Blob: ut,
    BlobOptions: ct,
    Buffer: ht,
    File: ft,
    FileOptions: st,
    INSPECT_MAX_BYTES: lt,
    SlowBuffer: pt,
    TranscodeEncoding: at,
    atob: wt,
    btoa: yt,
    constants: xt,
    default: ot,
    isAscii: Bt,
    isUtf8: dt,
    kMaxLength: Et,
    kStringMaxLength: gt,
    resolveObjectURL: mt,
    transcode: It
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  Ct = Hr(Ft);
export {
  ot as B, At as g, Ut as p, Ct as r
};