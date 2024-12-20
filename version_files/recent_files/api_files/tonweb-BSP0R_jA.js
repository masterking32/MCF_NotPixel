var f0 = Object.defineProperty;
var u0 = (a, t, e) => t in a ? f0(a, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: e
}) : a[t] = e;
var Vt = (a, t, e) => u0(a, typeof t != "symbol" ? t + "" : t, e);
import {
  r as C0,
  B as Ut
} from "./vite-plugin-node-polyfills-BVIVvkCX.js";
import {
  g as w0,
  c as g0,
  r as B0,
  b as F0,
  d as A0
} from "./@ledgerhq-BW4RAlPi.js";
import {
  n as y0
} from "./tweetnacl-BwY_NA6f.js";
import {
  l as p0
} from "./ethjs-unit-bvdJTi0B.js";
import {
  r as m0
} from "./isomorphic-webcrypto-Cp7ugTe2.js";
const b0 = {},
  E0 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: b0
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  v0 = w0(E0);
var fr = {
  exports: {}
};
fr.exports;
(function(a) {
  (function(t, e) {
    function s(C, r) {
      if (!C) throw new Error(r || "Assertion failed")
    }

    function l(C, r) {
      C.super_ = r;
      var o = function() {};
      o.prototype = r.prototype, C.prototype = new o, C.prototype.constructor = C
    }

    function n(C, r, o) {
      if (n.isBN(C)) return C;
      this.negative = 0, this.words = null, this.length = 0, this.red = null, C !== null && ((r === "le" || r === "be") && (o = r, r = 10), this._init(C || 0, r || 10, o || "be"))
    }
    typeof t == "object" ? t.exports = n : e.BN = n, n.BN = n, n.wordSize = 26;
    var g;
    try {
      g = C0.Buffer
    } catch {}
    n.isBN = function(r) {
      return r instanceof n ? !0 : r !== null && typeof r == "object" && r.constructor.wordSize === n.wordSize && Array.isArray(r.words)
    }, n.max = function(r, o) {
      return r.cmp(o) > 0 ? r : o
    }, n.min = function(r, o) {
      return r.cmp(o) < 0 ? r : o
    }, n.prototype._init = function(r, o, c) {
      if (typeof r == "number") return this._initNumber(r, o, c);
      if (typeof r == "object") return this._initArray(r, o, c);
      o === "hex" && (o = 16), s(o === (o | 0) && o >= 2 && o <= 36), r = r.toString().replace(/\s+/g, "");
      var d = 0;
      r[0] === "-" && d++, o === 16 ? this._parseHex(r, d) : this._parseBase(r, o, d), r[0] === "-" && (this.negative = 1), this._strip(), c === "le" && this._initArray(this.toArray(), o, c)
    }, n.prototype._initNumber = function(r, o, c) {
      r < 0 && (this.negative = 1, r = -r), r < 67108864 ? (this.words = [r & 67108863], this.length = 1) : r < 4503599627370496 ? (this.words = [r & 67108863, r / 67108864 & 67108863], this.length = 2) : (s(r < 9007199254740992), this.words = [r & 67108863, r / 67108864 & 67108863, 1], this.length = 3), c === "le" && this._initArray(this.toArray(), o, c)
    }, n.prototype._initArray = function(r, o, c) {
      if (s(typeof r.length == "number"), r.length <= 0) return this.words = [0], this.length = 1, this;
      this.length = Math.ceil(r.length / 3), this.words = new Array(this.length);
      for (var d = 0; d < this.length; d++) this.words[d] = 0;
      var u, w, B = 0;
      if (c === "be")
        for (d = r.length - 1, u = 0; d >= 0; d -= 3) w = r[d] | r[d - 1] << 8 | r[d - 2] << 16, this.words[u] |= w << B & 67108863, this.words[u + 1] = w >>> 26 - B & 67108863, B += 24, B >= 26 && (B -= 26, u++);
      else if (c === "le")
        for (d = 0, u = 0; d < r.length; d += 3) w = r[d] | r[d + 1] << 8 | r[d + 2] << 16, this.words[u] |= w << B & 67108863, this.words[u + 1] = w >>> 26 - B & 67108863, B += 24, B >= 26 && (B -= 26, u++);
      return this._strip()
    };

    function F(C, r, o) {
      for (var c = 0, d = Math.min(C.length, o), u = 0, w = r; w < d; w++) {
        var B = C.charCodeAt(w) - 48;
        c <<= 4;
        var h;
        B >= 49 && B <= 54 ? h = B - 49 + 10 : B >= 17 && B <= 22 ? h = B - 17 + 10 : h = B, c |= h, u |= h
      }
      return s(!(u & 240), "Invalid character in " + C), c
    }
    n.prototype._parseHex = function(r, o) {
      this.length = Math.ceil((r.length - o) / 6), this.words = new Array(this.length);
      for (var c = 0; c < this.length; c++) this.words[c] = 0;
      var d, u, w = 0;
      for (c = r.length - 6, d = 0; c >= o; c -= 6) u = F(r, c, c + 6), this.words[d] |= u << w & 67108863, this.words[d + 1] |= u >>> 26 - w & 4194303, w += 24, w >= 26 && (w -= 26, d++);
      c + 6 !== o && (u = F(r, o, c + 6), this.words[d] |= u << w & 67108863, this.words[d + 1] |= u >>> 26 - w & 4194303), this._strip()
    };

    function A(C, r, o, c) {
      for (var d = 0, u = 0, w = Math.min(C.length, o), B = r; B < w; B++) {
        var h = C.charCodeAt(B) - 48;
        d *= c, h >= 49 ? u = h - 49 + 10 : h >= 17 ? u = h - 17 + 10 : u = h, s(h >= 0 && u < c, "Invalid character"), d += u
      }
      return d
    }
    n.prototype._parseBase = function(r, o, c) {
      this.words = [0], this.length = 1;
      for (var d = 0, u = 1; u <= 67108863; u *= o) d++;
      d--, u = u / o | 0;
      for (var w = r.length - c, B = w % d, h = Math.min(w, w - B) + c, i = 0, f = c; f < h; f += d) i = A(r, f, f + d, o), this.imuln(u), this.words[0] + i < 67108864 ? this.words[0] += i : this._iaddn(i);
      if (B !== 0) {
        var b = 1;
        for (i = A(r, f, r.length, o), f = 0; f < B; f++) b *= o;
        this.imuln(b), this.words[0] + i < 67108864 ? this.words[0] += i : this._iaddn(i)
      }
    }, n.prototype.copy = function(r) {
      r.words = new Array(this.length);
      for (var o = 0; o < this.length; o++) r.words[o] = this.words[o];
      r.length = this.length, r.negative = this.negative, r.red = this.red
    };

    function y(C, r) {
      C.words = r.words, C.length = r.length, C.negative = r.negative, C.red = r.red
    }
    n.prototype._move = function(r) {
      y(r, this)
    }, n.prototype.clone = function() {
      var r = new n(null);
      return this.copy(r), r
    }, n.prototype._expand = function(r) {
      for (; this.length < r;) this.words[this.length++] = 0;
      return this
    }, n.prototype._strip = function() {
      for (; this.length > 1 && this.words[this.length - 1] === 0;) this.length--;
      return this._normSign()
    }, n.prototype._normSign = function() {
      return this.length === 1 && this.words[0] === 0 && (this.negative = 0), this
    }, typeof Symbol < "u" && typeof Symbol.for == "function" ? n.prototype[Symbol.for("nodejs.util.inspect.custom")] = p : n.prototype.inspect = p;

    function p() {
      return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
    }
    var M = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
      v = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
      T = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
    n.prototype.toString = function(r, o) {
      r = r || 10, o = o | 0 || 1;
      var c;
      if (r === 16 || r === "hex") {
        c = "";
        for (var d = 0, u = 0, w = 0; w < this.length; w++) {
          var B = this.words[w],
            h = ((B << d | u) & 16777215).toString(16);
          u = B >>> 24 - d & 16777215, u !== 0 || w !== this.length - 1 ? c = M[6 - h.length] + h + c : c = h + c, d += 2, d >= 26 && (d -= 26, w--)
        }
        for (u !== 0 && (c = u.toString(16) + c); c.length % o !== 0;) c = "0" + c;
        return this.negative !== 0 && (c = "-" + c), c
      }
      if (r === (r | 0) && r >= 2 && r <= 36) {
        var i = v[r],
          f = T[r];
        c = "";
        var b = this.clone();
        for (b.negative = 0; !b.isZero();) {
          var m = b.modrn(f).toString(r);
          b = b.idivn(f), b.isZero() ? c = m + c : c = M[i - m.length] + m + c
        }
        for (this.isZero() && (c = "0" + c); c.length % o !== 0;) c = "0" + c;
        return this.negative !== 0 && (c = "-" + c), c
      }
      s(!1, "Base should be between 2 and 36")
    }, n.prototype.toNumber = function() {
      var r = this.words[0];
      return this.length === 2 ? r += this.words[1] * 67108864 : this.length === 3 && this.words[2] === 1 ? r += 4503599627370496 + this.words[1] * 67108864 : this.length > 2 && s(!1, "Number can only safely store up to 53 bits"), this.negative !== 0 ? -r : r
    }, n.prototype.toJSON = function() {
      return this.toString(16, 2)
    }, g && (n.prototype.toBuffer = function(r, o) {
      return this.toArrayLike(g, r, o)
    }), n.prototype.toArray = function(r, o) {
      return this.toArrayLike(Array, r, o)
    };
    var N = function(r, o) {
      return r.allocUnsafe ? r.allocUnsafe(o) : new r(o)
    };
    n.prototype.toArrayLike = function(r, o, c) {
      this._strip();
      var d = this.byteLength(),
        u = c || Math.max(1, d);
      s(d <= u, "byte array longer than desired length"), s(u > 0, "Requested array length <= 0");
      var w = N(r, u),
        B = o === "le" ? "LE" : "BE";
      return this["_toArrayLike" + B](w, d), w
    }, n.prototype._toArrayLikeLE = function(r, o) {
      for (var c = 0, d = 0, u = 0, w = 0; u < this.length; u++) {
        var B = this.words[u] << w | d;
        r[c++] = B & 255, c < r.length && (r[c++] = B >> 8 & 255), c < r.length && (r[c++] = B >> 16 & 255), w === 6 ? (c < r.length && (r[c++] = B >> 24 & 255), d = 0, w = 0) : (d = B >>> 24, w += 2)
      }
      if (c < r.length)
        for (r[c++] = d; c < r.length;) r[c++] = 0
    }, n.prototype._toArrayLikeBE = function(r, o) {
      for (var c = r.length - 1, d = 0, u = 0, w = 0; u < this.length; u++) {
        var B = this.words[u] << w | d;
        r[c--] = B & 255, c >= 0 && (r[c--] = B >> 8 & 255), c >= 0 && (r[c--] = B >> 16 & 255), w === 6 ? (c >= 0 && (r[c--] = B >> 24 & 255), d = 0, w = 0) : (d = B >>> 24, w += 2)
      }
      if (c >= 0)
        for (r[c--] = d; c >= 0;) r[c--] = 0
    }, Math.clz32 ? n.prototype._countBits = function(r) {
      return 32 - Math.clz32(r)
    } : n.prototype._countBits = function(r) {
      var o = r,
        c = 0;
      return o >= 4096 && (c += 13, o >>>= 13), o >= 64 && (c += 7, o >>>= 7), o >= 8 && (c += 4, o >>>= 4), o >= 2 && (c += 2, o >>>= 2), c + o
    }, n.prototype._zeroBits = function(r) {
      if (r === 0) return 26;
      var o = r,
        c = 0;
      return o & 8191 || (c += 13, o >>>= 13), o & 127 || (c += 7, o >>>= 7), o & 15 || (c += 4, o >>>= 4), o & 3 || (c += 2, o >>>= 2), o & 1 || c++, c
    }, n.prototype.bitLength = function() {
      var r = this.words[this.length - 1],
        o = this._countBits(r);
      return (this.length - 1) * 26 + o
    };

    function Ft(C) {
      for (var r = new Array(C.bitLength()), o = 0; o < r.length; o++) {
        var c = o / 26 | 0,
          d = o % 26;
        r[o] = C.words[c] >>> d & 1
      }
      return r
    }
    n.prototype.zeroBits = function() {
      if (this.isZero()) return 0;
      for (var r = 0, o = 0; o < this.length; o++) {
        var c = this._zeroBits(this.words[o]);
        if (r += c, c !== 26) break
      }
      return r
    }, n.prototype.byteLength = function() {
      return Math.ceil(this.bitLength() / 8)
    }, n.prototype.toTwos = function(r) {
      return this.negative !== 0 ? this.abs().inotn(r).iaddn(1) : this.clone()
    }, n.prototype.fromTwos = function(r) {
      return this.testn(r - 1) ? this.notn(r).iaddn(1).ineg() : this.clone()
    }, n.prototype.isNeg = function() {
      return this.negative !== 0
    }, n.prototype.neg = function() {
      return this.clone().ineg()
    }, n.prototype.ineg = function() {
      return this.isZero() || (this.negative ^= 1), this
    }, n.prototype.iuor = function(r) {
      for (; this.length < r.length;) this.words[this.length++] = 0;
      for (var o = 0; o < r.length; o++) this.words[o] = this.words[o] | r.words[o];
      return this._strip()
    }, n.prototype.ior = function(r) {
      return s((this.negative | r.negative) === 0), this.iuor(r)
    }, n.prototype.or = function(r) {
      return this.length > r.length ? this.clone().ior(r) : r.clone().ior(this)
    }, n.prototype.uor = function(r) {
      return this.length > r.length ? this.clone().iuor(r) : r.clone().iuor(this)
    }, n.prototype.iuand = function(r) {
      var o;
      this.length > r.length ? o = r : o = this;
      for (var c = 0; c < o.length; c++) this.words[c] = this.words[c] & r.words[c];
      return this.length = o.length, this._strip()
    }, n.prototype.iand = function(r) {
      return s((this.negative | r.negative) === 0), this.iuand(r)
    }, n.prototype.and = function(r) {
      return this.length > r.length ? this.clone().iand(r) : r.clone().iand(this)
    }, n.prototype.uand = function(r) {
      return this.length > r.length ? this.clone().iuand(r) : r.clone().iuand(this)
    }, n.prototype.iuxor = function(r) {
      var o, c;
      this.length > r.length ? (o = this, c = r) : (o = r, c = this);
      for (var d = 0; d < c.length; d++) this.words[d] = o.words[d] ^ c.words[d];
      if (this !== o)
        for (; d < o.length; d++) this.words[d] = o.words[d];
      return this.length = o.length, this._strip()
    }, n.prototype.ixor = function(r) {
      return s((this.negative | r.negative) === 0), this.iuxor(r)
    }, n.prototype.xor = function(r) {
      return this.length > r.length ? this.clone().ixor(r) : r.clone().ixor(this)
    }, n.prototype.uxor = function(r) {
      return this.length > r.length ? this.clone().iuxor(r) : r.clone().iuxor(this)
    }, n.prototype.inotn = function(r) {
      s(typeof r == "number" && r >= 0);
      var o = Math.ceil(r / 26) | 0,
        c = r % 26;
      this._expand(o), c > 0 && o--;
      for (var d = 0; d < o; d++) this.words[d] = ~this.words[d] & 67108863;
      return c > 0 && (this.words[d] = ~this.words[d] & 67108863 >> 26 - c), this._strip()
    }, n.prototype.notn = function(r) {
      return this.clone().inotn(r)
    }, n.prototype.setn = function(r, o) {
      s(typeof r == "number" && r >= 0);
      var c = r / 26 | 0,
        d = r % 26;
      return this._expand(c + 1), o ? this.words[c] = this.words[c] | 1 << d : this.words[c] = this.words[c] & ~(1 << d), this._strip()
    }, n.prototype.iadd = function(r) {
      var o;
      if (this.negative !== 0 && r.negative === 0) return this.negative = 0, o = this.isub(r), this.negative ^= 1, this._normSign();
      if (this.negative === 0 && r.negative !== 0) return r.negative = 0, o = this.isub(r), r.negative = 1, o._normSign();
      var c, d;
      this.length > r.length ? (c = this, d = r) : (c = r, d = this);
      for (var u = 0, w = 0; w < d.length; w++) o = (c.words[w] | 0) + (d.words[w] | 0) + u, this.words[w] = o & 67108863, u = o >>> 26;
      for (; u !== 0 && w < c.length; w++) o = (c.words[w] | 0) + u, this.words[w] = o & 67108863, u = o >>> 26;
      if (this.length = c.length, u !== 0) this.words[this.length] = u, this.length++;
      else if (c !== this)
        for (; w < c.length; w++) this.words[w] = c.words[w];
      return this
    }, n.prototype.add = function(r) {
      var o;
      return r.negative !== 0 && this.negative === 0 ? (r.negative = 0, o = this.sub(r), r.negative ^= 1, o) : r.negative === 0 && this.negative !== 0 ? (this.negative = 0, o = r.sub(this), this.negative = 1, o) : this.length > r.length ? this.clone().iadd(r) : r.clone().iadd(this)
    }, n.prototype.isub = function(r) {
      if (r.negative !== 0) {
        r.negative = 0;
        var o = this.iadd(r);
        return r.negative = 1, o._normSign()
      } else if (this.negative !== 0) return this.negative = 0, this.iadd(r), this.negative = 1, this._normSign();
      var c = this.cmp(r);
      if (c === 0) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
      var d, u;
      c > 0 ? (d = this, u = r) : (d = r, u = this);
      for (var w = 0, B = 0; B < u.length; B++) o = (d.words[B] | 0) - (u.words[B] | 0) + w, w = o >> 26, this.words[B] = o & 67108863;
      for (; w !== 0 && B < d.length; B++) o = (d.words[B] | 0) + w, w = o >> 26, this.words[B] = o & 67108863;
      if (w === 0 && B < d.length && d !== this)
        for (; B < d.length; B++) this.words[B] = d.words[B];
      return this.length = Math.max(this.length, B), d !== this && (this.negative = 1), this._strip()
    }, n.prototype.sub = function(r) {
      return this.clone().isub(r)
    };

    function D(C, r, o) {
      o.negative = r.negative ^ C.negative;
      var c = C.length + r.length | 0;
      o.length = c, c = c - 1 | 0;
      var d = C.words[0] | 0,
        u = r.words[0] | 0,
        w = d * u,
        B = w & 67108863,
        h = w / 67108864 | 0;
      o.words[0] = B;
      for (var i = 1; i < c; i++) {
        for (var f = h >>> 26, b = h & 67108863, m = Math.min(i, r.length - 1), E = Math.max(0, i - C.length + 1); E <= m; E++) {
          var At = i - E | 0;
          d = C.words[At] | 0, u = r.words[E] | 0, w = d * u + b, f += w / 67108864 | 0, b = w & 67108863
        }
        o.words[i] = b | 0, h = f | 0
      }
      return h !== 0 ? o.words[i] = h | 0 : o.length--, o._strip()
    }
    var vt = function(r, o, c) {
      var d = r.words,
        u = o.words,
        w = c.words,
        B = 0,
        h, i, f, b = d[0] | 0,
        m = b & 8191,
        E = b >>> 13,
        At = d[1] | 0,
        S = At & 8191,
        I = At >>> 13,
        xr = d[2] | 0,
        $ = xr & 8191,
        R = xr >>> 13,
        Ir = d[3] | 0,
        k = Ir & 8191,
        P = Ir >>> 13,
        Ur = d[4] | 0,
        W = Ur & 8191,
        L = Ur >>> 13,
        Tr = d[5] | 0,
        O = Tr & 8191,
        H = Tr >>> 13,
        Nr = d[6] | 0,
        K = Nr & 8191,
        q = Nr >>> 13,
        $r = d[7] | 0,
        V = $r & 8191,
        G = $r >>> 13,
        Rr = d[8] | 0,
        Q = Rr & 8191,
        Z = Rr >>> 13,
        kr = d[9] | 0,
        Y = kr & 8191,
        X = kr >>> 13,
        Pr = u[0] | 0,
        J = Pr & 8191,
        j = Pr >>> 13,
        Wr = u[1] | 0,
        z = Wr & 8191,
        tt = Wr >>> 13,
        Lr = u[2] | 0,
        et = Lr & 8191,
        rt = Lr >>> 13,
        Or = u[3] | 0,
        st = Or & 8191,
        it = Or >>> 13,
        Hr = u[4] | 0,
        nt = Hr & 8191,
        ot = Hr >>> 13,
        Kr = u[5] | 0,
        at = Kr & 8191,
        lt = Kr >>> 13,
        qr = u[6] | 0,
        ct = qr & 8191,
        ht = qr >>> 13,
        Vr = u[7] | 0,
        dt = Vr & 8191,
        ft = Vr >>> 13,
        Gr = u[8] | 0,
        ut = Gr & 8191,
        Ct = Gr >>> 13,
        Qr = u[9] | 0,
        wt = Qr & 8191,
        gt = Qr >>> 13;
      c.negative = r.negative ^ o.negative, c.length = 19, h = Math.imul(m, J), i = Math.imul(m, j), i = i + Math.imul(E, J) | 0, f = Math.imul(E, j);
      var ve = (B + h | 0) + ((i & 8191) << 13) | 0;
      B = (f + (i >>> 13) | 0) + (ve >>> 26) | 0, ve &= 67108863, h = Math.imul(S, J), i = Math.imul(S, j), i = i + Math.imul(I, J) | 0, f = Math.imul(I, j), h = h + Math.imul(m, z) | 0, i = i + Math.imul(m, tt) | 0, i = i + Math.imul(E, z) | 0, f = f + Math.imul(E, tt) | 0;
      var De = (B + h | 0) + ((i & 8191) << 13) | 0;
      B = (f + (i >>> 13) | 0) + (De >>> 26) | 0, De &= 67108863, h = Math.imul($, J), i = Math.imul($, j), i = i + Math.imul(R, J) | 0, f = Math.imul(R, j), h = h + Math.imul(S, z) | 0, i = i + Math.imul(S, tt) | 0, i = i + Math.imul(I, z) | 0, f = f + Math.imul(I, tt) | 0, h = h + Math.imul(m, et) | 0, i = i + Math.imul(m, rt) | 0, i = i + Math.imul(E, et) | 0, f = f + Math.imul(E, rt) | 0;
      var Me = (B + h | 0) + ((i & 8191) << 13) | 0;
      B = (f + (i >>> 13) | 0) + (Me >>> 26) | 0, Me &= 67108863, h = Math.imul(k, J), i = Math.imul(k, j), i = i + Math.imul(P, J) | 0, f = Math.imul(P, j), h = h + Math.imul($, z) | 0, i = i + Math.imul($, tt) | 0, i = i + Math.imul(R, z) | 0, f = f + Math.imul(R, tt) | 0, h = h + Math.imul(S, et) | 0, i = i + Math.imul(S, rt) | 0, i = i + Math.imul(I, et) | 0, f = f + Math.imul(I, rt) | 0, h = h + Math.imul(m, st) | 0, i = i + Math.imul(m, it) | 0, i = i + Math.imul(E, st) | 0, f = f + Math.imul(E, it) | 0;
      var _e = (B + h | 0) + ((i & 8191) << 13) | 0;
      B = (f + (i >>> 13) | 0) + (_e >>> 26) | 0, _e &= 67108863, h = Math.imul(W, J), i = Math.imul(W, j), i = i + Math.imul(L, J) | 0, f = Math.imul(L, j), h = h + Math.imul(k, z) | 0, i = i + Math.imul(k, tt) | 0, i = i + Math.imul(P, z) | 0, f = f + Math.imul(P, tt) | 0, h = h + Math.imul($, et) | 0, i = i + Math.imul($, rt) | 0, i = i + Math.imul(R, et) | 0, f = f + Math.imul(R, rt) | 0, h = h + Math.imul(S, st) | 0, i = i + Math.imul(S, it) | 0, i = i + Math.imul(I, st) | 0, f = f + Math.imul(I, it) | 0, h = h + Math.imul(m, nt) | 0, i = i + Math.imul(m, ot) | 0, i = i + Math.imul(E, nt) | 0, f = f + Math.imul(E, ot) | 0;
      var Se = (B + h | 0) + ((i & 8191) << 13) | 0;
      B = (f + (i >>> 13) | 0) + (Se >>> 26) | 0, Se &= 67108863, h = Math.imul(O, J), i = Math.imul(O, j), i = i + Math.imul(H, J) | 0, f = Math.imul(H, j), h = h + Math.imul(W, z) | 0, i = i + Math.imul(W, tt) | 0, i = i + Math.imul(L, z) | 0, f = f + Math.imul(L, tt) | 0, h = h + Math.imul(k, et) | 0, i = i + Math.imul(k, rt) | 0, i = i + Math.imul(P, et) | 0, f = f + Math.imul(P, rt) | 0, h = h + Math.imul($, st) | 0, i = i + Math.imul($, it) | 0, i = i + Math.imul(R, st) | 0, f = f + Math.imul(R, it) | 0, h = h + Math.imul(S, nt) | 0, i = i + Math.imul(S, ot) | 0, i = i + Math.imul(I, nt) | 0, f = f + Math.imul(I, ot) | 0, h = h + Math.imul(m, at) | 0, i = i + Math.imul(m, lt) | 0, i = i + Math.imul(E, at) | 0, f = f + Math.imul(E, lt) | 0;
      var xe = (B + h | 0) + ((i & 8191) << 13) | 0;
      B = (f + (i >>> 13) | 0) + (xe >>> 26) | 0, xe &= 67108863, h = Math.imul(K, J), i = Math.imul(K, j), i = i + Math.imul(q, J) | 0, f = Math.imul(q, j), h = h + Math.imul(O, z) | 0, i = i + Math.imul(O, tt) | 0, i = i + Math.imul(H, z) | 0, f = f + Math.imul(H, tt) | 0, h = h + Math.imul(W, et) | 0, i = i + Math.imul(W, rt) | 0, i = i + Math.imul(L, et) | 0, f = f + Math.imul(L, rt) | 0, h = h + Math.imul(k, st) | 0, i = i + Math.imul(k, it) | 0, i = i + Math.imul(P, st) | 0, f = f + Math.imul(P, it) | 0, h = h + Math.imul($, nt) | 0, i = i + Math.imul($, ot) | 0, i = i + Math.imul(R, nt) | 0, f = f + Math.imul(R, ot) | 0, h = h + Math.imul(S, at) | 0, i = i + Math.imul(S, lt) | 0, i = i + Math.imul(I, at) | 0, f = f + Math.imul(I, lt) | 0, h = h + Math.imul(m, ct) | 0, i = i + Math.imul(m, ht) | 0, i = i + Math.imul(E, ct) | 0, f = f + Math.imul(E, ht) | 0;
      var Ie = (B + h | 0) + ((i & 8191) << 13) | 0;
      B = (f + (i >>> 13) | 0) + (Ie >>> 26) | 0, Ie &= 67108863, h = Math.imul(V, J), i = Math.imul(V, j), i = i + Math.imul(G, J) | 0, f = Math.imul(G, j), h = h + Math.imul(K, z) | 0, i = i + Math.imul(K, tt) | 0, i = i + Math.imul(q, z) | 0, f = f + Math.imul(q, tt) | 0, h = h + Math.imul(O, et) | 0, i = i + Math.imul(O, rt) | 0, i = i + Math.imul(H, et) | 0, f = f + Math.imul(H, rt) | 0, h = h + Math.imul(W, st) | 0, i = i + Math.imul(W, it) | 0, i = i + Math.imul(L, st) | 0, f = f + Math.imul(L, it) | 0, h = h + Math.imul(k, nt) | 0, i = i + Math.imul(k, ot) | 0, i = i + Math.imul(P, nt) | 0, f = f + Math.imul(P, ot) | 0, h = h + Math.imul($, at) | 0, i = i + Math.imul($, lt) | 0, i = i + Math.imul(R, at) | 0, f = f + Math.imul(R, lt) | 0, h = h + Math.imul(S, ct) | 0, i = i + Math.imul(S, ht) | 0, i = i + Math.imul(I, ct) | 0, f = f + Math.imul(I, ht) | 0, h = h + Math.imul(m, dt) | 0, i = i + Math.imul(m, ft) | 0, i = i + Math.imul(E, dt) | 0, f = f + Math.imul(E, ft) | 0;
      var Ue = (B + h | 0) + ((i & 8191) << 13) | 0;
      B = (f + (i >>> 13) | 0) + (Ue >>> 26) | 0, Ue &= 67108863, h = Math.imul(Q, J), i = Math.imul(Q, j), i = i + Math.imul(Z, J) | 0, f = Math.imul(Z, j), h = h + Math.imul(V, z) | 0, i = i + Math.imul(V, tt) | 0, i = i + Math.imul(G, z) | 0, f = f + Math.imul(G, tt) | 0, h = h + Math.imul(K, et) | 0, i = i + Math.imul(K, rt) | 0, i = i + Math.imul(q, et) | 0, f = f + Math.imul(q, rt) | 0, h = h + Math.imul(O, st) | 0, i = i + Math.imul(O, it) | 0, i = i + Math.imul(H, st) | 0, f = f + Math.imul(H, it) | 0, h = h + Math.imul(W, nt) | 0, i = i + Math.imul(W, ot) | 0, i = i + Math.imul(L, nt) | 0, f = f + Math.imul(L, ot) | 0, h = h + Math.imul(k, at) | 0, i = i + Math.imul(k, lt) | 0, i = i + Math.imul(P, at) | 0, f = f + Math.imul(P, lt) | 0, h = h + Math.imul($, ct) | 0, i = i + Math.imul($, ht) | 0, i = i + Math.imul(R, ct) | 0, f = f + Math.imul(R, ht) | 0, h = h + Math.imul(S, dt) | 0, i = i + Math.imul(S, ft) | 0, i = i + Math.imul(I, dt) | 0, f = f + Math.imul(I, ft) | 0, h = h + Math.imul(m, ut) | 0, i = i + Math.imul(m, Ct) | 0, i = i + Math.imul(E, ut) | 0, f = f + Math.imul(E, Ct) | 0;
      var Te = (B + h | 0) + ((i & 8191) << 13) | 0;
      B = (f + (i >>> 13) | 0) + (Te >>> 26) | 0, Te &= 67108863, h = Math.imul(Y, J), i = Math.imul(Y, j), i = i + Math.imul(X, J) | 0, f = Math.imul(X, j), h = h + Math.imul(Q, z) | 0, i = i + Math.imul(Q, tt) | 0, i = i + Math.imul(Z, z) | 0, f = f + Math.imul(Z, tt) | 0, h = h + Math.imul(V, et) | 0, i = i + Math.imul(V, rt) | 0, i = i + Math.imul(G, et) | 0, f = f + Math.imul(G, rt) | 0, h = h + Math.imul(K, st) | 0, i = i + Math.imul(K, it) | 0, i = i + Math.imul(q, st) | 0, f = f + Math.imul(q, it) | 0, h = h + Math.imul(O, nt) | 0, i = i + Math.imul(O, ot) | 0, i = i + Math.imul(H, nt) | 0, f = f + Math.imul(H, ot) | 0, h = h + Math.imul(W, at) | 0, i = i + Math.imul(W, lt) | 0, i = i + Math.imul(L, at) | 0, f = f + Math.imul(L, lt) | 0, h = h + Math.imul(k, ct) | 0, i = i + Math.imul(k, ht) | 0, i = i + Math.imul(P, ct) | 0, f = f + Math.imul(P, ht) | 0, h = h + Math.imul($, dt) | 0, i = i + Math.imul($, ft) | 0, i = i + Math.imul(R, dt) | 0, f = f + Math.imul(R, ft) | 0, h = h + Math.imul(S, ut) | 0, i = i + Math.imul(S, Ct) | 0, i = i + Math.imul(I, ut) | 0, f = f + Math.imul(I, Ct) | 0, h = h + Math.imul(m, wt) | 0, i = i + Math.imul(m, gt) | 0, i = i + Math.imul(E, wt) | 0, f = f + Math.imul(E, gt) | 0;
      var Ne = (B + h | 0) + ((i & 8191) << 13) | 0;
      B = (f + (i >>> 13) | 0) + (Ne >>> 26) | 0, Ne &= 67108863, h = Math.imul(Y, z), i = Math.imul(Y, tt), i = i + Math.imul(X, z) | 0, f = Math.imul(X, tt), h = h + Math.imul(Q, et) | 0, i = i + Math.imul(Q, rt) | 0, i = i + Math.imul(Z, et) | 0, f = f + Math.imul(Z, rt) | 0, h = h + Math.imul(V, st) | 0, i = i + Math.imul(V, it) | 0, i = i + Math.imul(G, st) | 0, f = f + Math.imul(G, it) | 0, h = h + Math.imul(K, nt) | 0, i = i + Math.imul(K, ot) | 0, i = i + Math.imul(q, nt) | 0, f = f + Math.imul(q, ot) | 0, h = h + Math.imul(O, at) | 0, i = i + Math.imul(O, lt) | 0, i = i + Math.imul(H, at) | 0, f = f + Math.imul(H, lt) | 0, h = h + Math.imul(W, ct) | 0, i = i + Math.imul(W, ht) | 0, i = i + Math.imul(L, ct) | 0, f = f + Math.imul(L, ht) | 0, h = h + Math.imul(k, dt) | 0, i = i + Math.imul(k, ft) | 0, i = i + Math.imul(P, dt) | 0, f = f + Math.imul(P, ft) | 0, h = h + Math.imul($, ut) | 0, i = i + Math.imul($, Ct) | 0, i = i + Math.imul(R, ut) | 0, f = f + Math.imul(R, Ct) | 0, h = h + Math.imul(S, wt) | 0, i = i + Math.imul(S, gt) | 0, i = i + Math.imul(I, wt) | 0, f = f + Math.imul(I, gt) | 0;
      var $e = (B + h | 0) + ((i & 8191) << 13) | 0;
      B = (f + (i >>> 13) | 0) + ($e >>> 26) | 0, $e &= 67108863, h = Math.imul(Y, et), i = Math.imul(Y, rt), i = i + Math.imul(X, et) | 0, f = Math.imul(X, rt), h = h + Math.imul(Q, st) | 0, i = i + Math.imul(Q, it) | 0, i = i + Math.imul(Z, st) | 0, f = f + Math.imul(Z, it) | 0, h = h + Math.imul(V, nt) | 0, i = i + Math.imul(V, ot) | 0, i = i + Math.imul(G, nt) | 0, f = f + Math.imul(G, ot) | 0, h = h + Math.imul(K, at) | 0, i = i + Math.imul(K, lt) | 0, i = i + Math.imul(q, at) | 0, f = f + Math.imul(q, lt) | 0, h = h + Math.imul(O, ct) | 0, i = i + Math.imul(O, ht) | 0, i = i + Math.imul(H, ct) | 0, f = f + Math.imul(H, ht) | 0, h = h + Math.imul(W, dt) | 0, i = i + Math.imul(W, ft) | 0, i = i + Math.imul(L, dt) | 0, f = f + Math.imul(L, ft) | 0, h = h + Math.imul(k, ut) | 0, i = i + Math.imul(k, Ct) | 0, i = i + Math.imul(P, ut) | 0, f = f + Math.imul(P, Ct) | 0, h = h + Math.imul($, wt) | 0, i = i + Math.imul($, gt) | 0, i = i + Math.imul(R, wt) | 0, f = f + Math.imul(R, gt) | 0;
      var Re = (B + h | 0) + ((i & 8191) << 13) | 0;
      B = (f + (i >>> 13) | 0) + (Re >>> 26) | 0, Re &= 67108863, h = Math.imul(Y, st), i = Math.imul(Y, it), i = i + Math.imul(X, st) | 0, f = Math.imul(X, it), h = h + Math.imul(Q, nt) | 0, i = i + Math.imul(Q, ot) | 0, i = i + Math.imul(Z, nt) | 0, f = f + Math.imul(Z, ot) | 0, h = h + Math.imul(V, at) | 0, i = i + Math.imul(V, lt) | 0, i = i + Math.imul(G, at) | 0, f = f + Math.imul(G, lt) | 0, h = h + Math.imul(K, ct) | 0, i = i + Math.imul(K, ht) | 0, i = i + Math.imul(q, ct) | 0, f = f + Math.imul(q, ht) | 0, h = h + Math.imul(O, dt) | 0, i = i + Math.imul(O, ft) | 0, i = i + Math.imul(H, dt) | 0, f = f + Math.imul(H, ft) | 0, h = h + Math.imul(W, ut) | 0, i = i + Math.imul(W, Ct) | 0, i = i + Math.imul(L, ut) | 0, f = f + Math.imul(L, Ct) | 0, h = h + Math.imul(k, wt) | 0, i = i + Math.imul(k, gt) | 0, i = i + Math.imul(P, wt) | 0, f = f + Math.imul(P, gt) | 0;
      var ke = (B + h | 0) + ((i & 8191) << 13) | 0;
      B = (f + (i >>> 13) | 0) + (ke >>> 26) | 0, ke &= 67108863, h = Math.imul(Y, nt), i = Math.imul(Y, ot), i = i + Math.imul(X, nt) | 0, f = Math.imul(X, ot), h = h + Math.imul(Q, at) | 0, i = i + Math.imul(Q, lt) | 0, i = i + Math.imul(Z, at) | 0, f = f + Math.imul(Z, lt) | 0, h = h + Math.imul(V, ct) | 0, i = i + Math.imul(V, ht) | 0, i = i + Math.imul(G, ct) | 0, f = f + Math.imul(G, ht) | 0, h = h + Math.imul(K, dt) | 0, i = i + Math.imul(K, ft) | 0, i = i + Math.imul(q, dt) | 0, f = f + Math.imul(q, ft) | 0, h = h + Math.imul(O, ut) | 0, i = i + Math.imul(O, Ct) | 0, i = i + Math.imul(H, ut) | 0, f = f + Math.imul(H, Ct) | 0, h = h + Math.imul(W, wt) | 0, i = i + Math.imul(W, gt) | 0, i = i + Math.imul(L, wt) | 0, f = f + Math.imul(L, gt) | 0;
      var Pe = (B + h | 0) + ((i & 8191) << 13) | 0;
      B = (f + (i >>> 13) | 0) + (Pe >>> 26) | 0, Pe &= 67108863, h = Math.imul(Y, at), i = Math.imul(Y, lt), i = i + Math.imul(X, at) | 0, f = Math.imul(X, lt), h = h + Math.imul(Q, ct) | 0, i = i + Math.imul(Q, ht) | 0, i = i + Math.imul(Z, ct) | 0, f = f + Math.imul(Z, ht) | 0, h = h + Math.imul(V, dt) | 0, i = i + Math.imul(V, ft) | 0, i = i + Math.imul(G, dt) | 0, f = f + Math.imul(G, ft) | 0, h = h + Math.imul(K, ut) | 0, i = i + Math.imul(K, Ct) | 0, i = i + Math.imul(q, ut) | 0, f = f + Math.imul(q, Ct) | 0, h = h + Math.imul(O, wt) | 0, i = i + Math.imul(O, gt) | 0, i = i + Math.imul(H, wt) | 0, f = f + Math.imul(H, gt) | 0;
      var We = (B + h | 0) + ((i & 8191) << 13) | 0;
      B = (f + (i >>> 13) | 0) + (We >>> 26) | 0, We &= 67108863, h = Math.imul(Y, ct), i = Math.imul(Y, ht), i = i + Math.imul(X, ct) | 0, f = Math.imul(X, ht), h = h + Math.imul(Q, dt) | 0, i = i + Math.imul(Q, ft) | 0, i = i + Math.imul(Z, dt) | 0, f = f + Math.imul(Z, ft) | 0, h = h + Math.imul(V, ut) | 0, i = i + Math.imul(V, Ct) | 0, i = i + Math.imul(G, ut) | 0, f = f + Math.imul(G, Ct) | 0, h = h + Math.imul(K, wt) | 0, i = i + Math.imul(K, gt) | 0, i = i + Math.imul(q, wt) | 0, f = f + Math.imul(q, gt) | 0;
      var Le = (B + h | 0) + ((i & 8191) << 13) | 0;
      B = (f + (i >>> 13) | 0) + (Le >>> 26) | 0, Le &= 67108863, h = Math.imul(Y, dt), i = Math.imul(Y, ft), i = i + Math.imul(X, dt) | 0, f = Math.imul(X, ft), h = h + Math.imul(Q, ut) | 0, i = i + Math.imul(Q, Ct) | 0, i = i + Math.imul(Z, ut) | 0, f = f + Math.imul(Z, Ct) | 0, h = h + Math.imul(V, wt) | 0, i = i + Math.imul(V, gt) | 0, i = i + Math.imul(G, wt) | 0, f = f + Math.imul(G, gt) | 0;
      var Oe = (B + h | 0) + ((i & 8191) << 13) | 0;
      B = (f + (i >>> 13) | 0) + (Oe >>> 26) | 0, Oe &= 67108863, h = Math.imul(Y, ut), i = Math.imul(Y, Ct), i = i + Math.imul(X, ut) | 0, f = Math.imul(X, Ct), h = h + Math.imul(Q, wt) | 0, i = i + Math.imul(Q, gt) | 0, i = i + Math.imul(Z, wt) | 0, f = f + Math.imul(Z, gt) | 0;
      var He = (B + h | 0) + ((i & 8191) << 13) | 0;
      B = (f + (i >>> 13) | 0) + (He >>> 26) | 0, He &= 67108863, h = Math.imul(Y, wt), i = Math.imul(Y, gt), i = i + Math.imul(X, wt) | 0, f = Math.imul(X, gt);
      var Ke = (B + h | 0) + ((i & 8191) << 13) | 0;
      return B = (f + (i >>> 13) | 0) + (Ke >>> 26) | 0, Ke &= 67108863, w[0] = ve, w[1] = De, w[2] = Me, w[3] = _e, w[4] = Se, w[5] = xe, w[6] = Ie, w[7] = Ue, w[8] = Te, w[9] = Ne, w[10] = $e, w[11] = Re, w[12] = ke, w[13] = Pe, w[14] = We, w[15] = Le, w[16] = Oe, w[17] = He, w[18] = Ke, B !== 0 && (w[19] = B, c.length++), c
    };
    Math.imul || (vt = D);

    function Dt(C, r, o) {
      o.negative = r.negative ^ C.negative, o.length = C.length + r.length;
      for (var c = 0, d = 0, u = 0; u < o.length - 1; u++) {
        var w = d;
        d = 0;
        for (var B = c & 67108863, h = Math.min(u, r.length - 1), i = Math.max(0, u - C.length + 1); i <= h; i++) {
          var f = u - i,
            b = C.words[f] | 0,
            m = r.words[i] | 0,
            E = b * m,
            At = E & 67108863;
          w = w + (E / 67108864 | 0) | 0, At = At + B | 0, B = At & 67108863, w = w + (At >>> 26) | 0, d += w >>> 26, w &= 67108863
        }
        o.words[u] = B, c = w, w = d
      }
      return c !== 0 ? o.words[u] = c : o.length--, o._strip()
    }

    function _t(C, r, o) {
      return Dt(C, r, o)
    }
    n.prototype.mulTo = function(r, o) {
      var c, d = this.length + r.length;
      return this.length === 10 && r.length === 10 ? c = vt(this, r, o) : d < 63 ? c = D(this, r, o) : d < 1024 ? c = Dt(this, r, o) : c = _t(this, r, o), c
    }, n.prototype.mul = function(r) {
      var o = new n(null);
      return o.words = new Array(this.length + r.length), this.mulTo(r, o)
    }, n.prototype.mulf = function(r) {
      var o = new n(null);
      return o.words = new Array(this.length + r.length), _t(this, r, o)
    }, n.prototype.imul = function(r) {
      return this.clone().mulTo(r, this)
    }, n.prototype.imuln = function(r) {
      var o = r < 0;
      o && (r = -r), s(typeof r == "number"), s(r < 67108864);
      for (var c = 0, d = 0; d < this.length; d++) {
        var u = (this.words[d] | 0) * r,
          w = (u & 67108863) + (c & 67108863);
        c >>= 26, c += u / 67108864 | 0, c += w >>> 26, this.words[d] = w & 67108863
      }
      return c !== 0 && (this.words[d] = c, this.length++), o ? this.ineg() : this
    }, n.prototype.muln = function(r) {
      return this.clone().imuln(r)
    }, n.prototype.sqr = function() {
      return this.mul(this)
    }, n.prototype.isqr = function() {
      return this.imul(this.clone())
    }, n.prototype.pow = function(r) {
      var o = Ft(r);
      if (o.length === 0) return new n(1);
      for (var c = this, d = 0; d < o.length && o[d] === 0; d++, c = c.sqr());
      if (++d < o.length)
        for (var u = c.sqr(); d < o.length; d++, u = u.sqr()) o[d] !== 0 && (c = c.mul(u));
      return c
    }, n.prototype.iushln = function(r) {
      s(typeof r == "number" && r >= 0);
      var o = r % 26,
        c = (r - o) / 26,
        d = 67108863 >>> 26 - o << 26 - o,
        u;
      if (o !== 0) {
        var w = 0;
        for (u = 0; u < this.length; u++) {
          var B = this.words[u] & d,
            h = (this.words[u] | 0) - B << o;
          this.words[u] = h | w, w = B >>> 26 - o
        }
        w && (this.words[u] = w, this.length++)
      }
      if (c !== 0) {
        for (u = this.length - 1; u >= 0; u--) this.words[u + c] = this.words[u];
        for (u = 0; u < c; u++) this.words[u] = 0;
        this.length += c
      }
      return this._strip()
    }, n.prototype.ishln = function(r) {
      return s(this.negative === 0), this.iushln(r)
    }, n.prototype.iushrn = function(r, o, c) {
      s(typeof r == "number" && r >= 0);
      var d;
      o ? d = (o - o % 26) / 26 : d = 0;
      var u = r % 26,
        w = Math.min((r - u) / 26, this.length),
        B = 67108863 ^ 67108863 >>> u << u,
        h = c;
      if (d -= w, d = Math.max(0, d), h) {
        for (var i = 0; i < w; i++) h.words[i] = this.words[i];
        h.length = w
      }
      if (w !== 0)
        if (this.length > w)
          for (this.length -= w, i = 0; i < this.length; i++) this.words[i] = this.words[i + w];
        else this.words[0] = 0, this.length = 1;
      var f = 0;
      for (i = this.length - 1; i >= 0 && (f !== 0 || i >= d); i--) {
        var b = this.words[i] | 0;
        this.words[i] = f << 26 - u | b >>> u, f = b & B
      }
      return h && f !== 0 && (h.words[h.length++] = f), this.length === 0 && (this.words[0] = 0, this.length = 1), this._strip()
    }, n.prototype.ishrn = function(r, o, c) {
      return s(this.negative === 0), this.iushrn(r, o, c)
    }, n.prototype.shln = function(r) {
      return this.clone().ishln(r)
    }, n.prototype.ushln = function(r) {
      return this.clone().iushln(r)
    }, n.prototype.shrn = function(r) {
      return this.clone().ishrn(r)
    }, n.prototype.ushrn = function(r) {
      return this.clone().iushrn(r)
    }, n.prototype.testn = function(r) {
      s(typeof r == "number" && r >= 0);
      var o = r % 26,
        c = (r - o) / 26,
        d = 1 << o;
      if (this.length <= c) return !1;
      var u = this.words[c];
      return !!(u & d)
    }, n.prototype.imaskn = function(r) {
      s(typeof r == "number" && r >= 0);
      var o = r % 26,
        c = (r - o) / 26;
      if (s(this.negative === 0, "imaskn works only with positive numbers"), this.length <= c) return this;
      if (o !== 0 && c++, this.length = Math.min(c, this.length), o !== 0) {
        var d = 67108863 ^ 67108863 >>> o << o;
        this.words[this.length - 1] &= d
      }
      return this._strip()
    }, n.prototype.maskn = function(r) {
      return this.clone().imaskn(r)
    }, n.prototype.iaddn = function(r) {
      return s(typeof r == "number"), s(r < 67108864), r < 0 ? this.isubn(-r) : this.negative !== 0 ? this.length === 1 && (this.words[0] | 0) <= r ? (this.words[0] = r - (this.words[0] | 0), this.negative = 0, this) : (this.negative = 0, this.isubn(r), this.negative = 1, this) : this._iaddn(r)
    }, n.prototype._iaddn = function(r) {
      this.words[0] += r;
      for (var o = 0; o < this.length && this.words[o] >= 67108864; o++) this.words[o] -= 67108864, o === this.length - 1 ? this.words[o + 1] = 1 : this.words[o + 1]++;
      return this.length = Math.max(this.length, o + 1), this
    }, n.prototype.isubn = function(r) {
      if (s(typeof r == "number"), s(r < 67108864), r < 0) return this.iaddn(-r);
      if (this.negative !== 0) return this.negative = 0, this.iaddn(r), this.negative = 1, this;
      if (this.words[0] -= r, this.length === 1 && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
      else
        for (var o = 0; o < this.length && this.words[o] < 0; o++) this.words[o] += 67108864, this.words[o + 1] -= 1;
      return this._strip()
    }, n.prototype.addn = function(r) {
      return this.clone().iaddn(r)
    }, n.prototype.subn = function(r) {
      return this.clone().isubn(r)
    }, n.prototype.iabs = function() {
      return this.negative = 0, this
    }, n.prototype.abs = function() {
      return this.clone().iabs()
    }, n.prototype._ishlnsubmul = function(r, o, c) {
      var d = r.length + c,
        u;
      this._expand(d);
      var w, B = 0;
      for (u = 0; u < r.length; u++) {
        w = (this.words[u + c] | 0) + B;
        var h = (r.words[u] | 0) * o;
        w -= h & 67108863, B = (w >> 26) - (h / 67108864 | 0), this.words[u + c] = w & 67108863
      }
      for (; u < this.length - c; u++) w = (this.words[u + c] | 0) + B, B = w >> 26, this.words[u + c] = w & 67108863;
      if (B === 0) return this._strip();
      for (s(B === -1), B = 0, u = 0; u < this.length; u++) w = -(this.words[u] | 0) + B, B = w >> 26, this.words[u] = w & 67108863;
      return this.negative = 1, this._strip()
    }, n.prototype._wordDiv = function(r, o) {
      var c = this.length - r.length,
        d = this.clone(),
        u = r,
        w = u.words[u.length - 1] | 0,
        B = this._countBits(w);
      c = 26 - B, c !== 0 && (u = u.ushln(c), d.iushln(c), w = u.words[u.length - 1] | 0);
      var h = d.length - u.length,
        i;
      if (o !== "mod") {
        i = new n(null), i.length = h + 1, i.words = new Array(i.length);
        for (var f = 0; f < i.length; f++) i.words[f] = 0
      }
      var b = d.clone()._ishlnsubmul(u, 1, h);
      b.negative === 0 && (d = b, i && (i.words[h] = 1));
      for (var m = h - 1; m >= 0; m--) {
        var E = (d.words[u.length + m] | 0) * 67108864 + (d.words[u.length + m - 1] | 0);
        for (E = Math.min(E / w | 0, 67108863), d._ishlnsubmul(u, E, m); d.negative !== 0;) E--, d.negative = 0, d._ishlnsubmul(u, 1, m), d.isZero() || (d.negative ^= 1);
        i && (i.words[m] = E)
      }
      return i && i._strip(), d._strip(), o !== "div" && c !== 0 && d.iushrn(c), {
        div: i || null,
        mod: d
      }
    }, n.prototype.divmod = function(r, o, c) {
      if (s(!r.isZero()), this.isZero()) return {
        div: new n(0),
        mod: new n(0)
      };
      var d, u, w;
      return this.negative !== 0 && r.negative === 0 ? (w = this.neg().divmod(r, o), o !== "mod" && (d = w.div.neg()), o !== "div" && (u = w.mod.neg(), c && u.negative !== 0 && u.iadd(r)), {
        div: d,
        mod: u
      }) : this.negative === 0 && r.negative !== 0 ? (w = this.divmod(r.neg(), o), o !== "mod" && (d = w.div.neg()), {
        div: d,
        mod: w.mod
      }) : this.negative & r.negative ? (w = this.neg().divmod(r.neg(), o), o !== "div" && (u = w.mod.neg(), c && u.negative !== 0 && u.isub(r)), {
        div: w.div,
        mod: u
      }) : r.length > this.length || this.cmp(r) < 0 ? {
        div: new n(0),
        mod: this
      } : r.length === 1 ? o === "div" ? {
        div: this.divn(r.words[0]),
        mod: null
      } : o === "mod" ? {
        div: null,
        mod: new n(this.modrn(r.words[0]))
      } : {
        div: this.divn(r.words[0]),
        mod: new n(this.modrn(r.words[0]))
      } : this._wordDiv(r, o)
    }, n.prototype.div = function(r) {
      return this.divmod(r, "div", !1).div
    }, n.prototype.mod = function(r) {
      return this.divmod(r, "mod", !1).mod
    }, n.prototype.umod = function(r) {
      return this.divmod(r, "mod", !0).mod
    }, n.prototype.divRound = function(r) {
      var o = this.divmod(r);
      if (o.mod.isZero()) return o.div;
      var c = o.div.negative !== 0 ? o.mod.isub(r) : o.mod,
        d = r.ushrn(1),
        u = r.andln(1),
        w = c.cmp(d);
      return w < 0 || u === 1 && w === 0 ? o.div : o.div.negative !== 0 ? o.div.isubn(1) : o.div.iaddn(1)
    }, n.prototype.modrn = function(r) {
      var o = r < 0;
      o && (r = -r), s(r <= 67108863);
      for (var c = (1 << 26) % r, d = 0, u = this.length - 1; u >= 0; u--) d = (c * d + (this.words[u] | 0)) % r;
      return o ? -d : d
    }, n.prototype.modn = function(r) {
      return this.modrn(r)
    }, n.prototype.idivn = function(r) {
      var o = r < 0;
      o && (r = -r), s(r <= 67108863);
      for (var c = 0, d = this.length - 1; d >= 0; d--) {
        var u = (this.words[d] | 0) + c * 67108864;
        this.words[d] = u / r | 0, c = u % r
      }
      return this._strip(), o ? this.ineg() : this
    }, n.prototype.divn = function(r) {
      return this.clone().idivn(r)
    }, n.prototype.egcd = function(r) {
      s(r.negative === 0), s(!r.isZero());
      var o = this,
        c = r.clone();
      o.negative !== 0 ? o = o.umod(r) : o = o.clone();
      for (var d = new n(1), u = new n(0), w = new n(0), B = new n(1), h = 0; o.isEven() && c.isEven();) o.iushrn(1), c.iushrn(1), ++h;
      for (var i = c.clone(), f = o.clone(); !o.isZero();) {
        for (var b = 0, m = 1; !(o.words[0] & m) && b < 26; ++b, m <<= 1);
        if (b > 0)
          for (o.iushrn(b); b-- > 0;)(d.isOdd() || u.isOdd()) && (d.iadd(i), u.isub(f)), d.iushrn(1), u.iushrn(1);
        for (var E = 0, At = 1; !(c.words[0] & At) && E < 26; ++E, At <<= 1);
        if (E > 0)
          for (c.iushrn(E); E-- > 0;)(w.isOdd() || B.isOdd()) && (w.iadd(i), B.isub(f)), w.iushrn(1), B.iushrn(1);
        o.cmp(c) >= 0 ? (o.isub(c), d.isub(w), u.isub(B)) : (c.isub(o), w.isub(d), B.isub(u))
      }
      return {
        a: w,
        b: B,
        gcd: c.iushln(h)
      }
    }, n.prototype._invmp = function(r) {
      s(r.negative === 0), s(!r.isZero());
      var o = this,
        c = r.clone();
      o.negative !== 0 ? o = o.umod(r) : o = o.clone();
      for (var d = new n(1), u = new n(0), w = c.clone(); o.cmpn(1) > 0 && c.cmpn(1) > 0;) {
        for (var B = 0, h = 1; !(o.words[0] & h) && B < 26; ++B, h <<= 1);
        if (B > 0)
          for (o.iushrn(B); B-- > 0;) d.isOdd() && d.iadd(w), d.iushrn(1);
        for (var i = 0, f = 1; !(c.words[0] & f) && i < 26; ++i, f <<= 1);
        if (i > 0)
          for (c.iushrn(i); i-- > 0;) u.isOdd() && u.iadd(w), u.iushrn(1);
        o.cmp(c) >= 0 ? (o.isub(c), d.isub(u)) : (c.isub(o), u.isub(d))
      }
      var b;
      return o.cmpn(1) === 0 ? b = d : b = u, b.cmpn(0) < 0 && b.iadd(r), b
    }, n.prototype.gcd = function(r) {
      if (this.isZero()) return r.abs();
      if (r.isZero()) return this.abs();
      var o = this.clone(),
        c = r.clone();
      o.negative = 0, c.negative = 0;
      for (var d = 0; o.isEven() && c.isEven(); d++) o.iushrn(1), c.iushrn(1);
      do {
        for (; o.isEven();) o.iushrn(1);
        for (; c.isEven();) c.iushrn(1);
        var u = o.cmp(c);
        if (u < 0) {
          var w = o;
          o = c, c = w
        } else if (u === 0 || c.cmpn(1) === 0) break;
        o.isub(c)
      } while (!0);
      return c.iushln(d)
    }, n.prototype.invm = function(r) {
      return this.egcd(r).a.umod(r)
    }, n.prototype.isEven = function() {
      return (this.words[0] & 1) === 0
    }, n.prototype.isOdd = function() {
      return (this.words[0] & 1) === 1
    }, n.prototype.andln = function(r) {
      return this.words[0] & r
    }, n.prototype.bincn = function(r) {
      s(typeof r == "number");
      var o = r % 26,
        c = (r - o) / 26,
        d = 1 << o;
      if (this.length <= c) return this._expand(c + 1), this.words[c] |= d, this;
      for (var u = d, w = c; u !== 0 && w < this.length; w++) {
        var B = this.words[w] | 0;
        B += u, u = B >>> 26, B &= 67108863, this.words[w] = B
      }
      return u !== 0 && (this.words[w] = u, this.length++), this
    }, n.prototype.isZero = function() {
      return this.length === 1 && this.words[0] === 0
    }, n.prototype.cmpn = function(r) {
      var o = r < 0;
      if (this.negative !== 0 && !o) return -1;
      if (this.negative === 0 && o) return 1;
      this._strip();
      var c;
      if (this.length > 1) c = 1;
      else {
        o && (r = -r), s(r <= 67108863, "Number is too big");
        var d = this.words[0] | 0;
        c = d === r ? 0 : d < r ? -1 : 1
      }
      return this.negative !== 0 ? -c | 0 : c
    }, n.prototype.cmp = function(r) {
      if (this.negative !== 0 && r.negative === 0) return -1;
      if (this.negative === 0 && r.negative !== 0) return 1;
      var o = this.ucmp(r);
      return this.negative !== 0 ? -o | 0 : o
    }, n.prototype.ucmp = function(r) {
      if (this.length > r.length) return 1;
      if (this.length < r.length) return -1;
      for (var o = 0, c = this.length - 1; c >= 0; c--) {
        var d = this.words[c] | 0,
          u = r.words[c] | 0;
        if (d !== u) {
          d < u ? o = -1 : d > u && (o = 1);
          break
        }
      }
      return o
    }, n.prototype.gtn = function(r) {
      return this.cmpn(r) === 1
    }, n.prototype.gt = function(r) {
      return this.cmp(r) === 1
    }, n.prototype.gten = function(r) {
      return this.cmpn(r) >= 0
    }, n.prototype.gte = function(r) {
      return this.cmp(r) >= 0
    }, n.prototype.ltn = function(r) {
      return this.cmpn(r) === -1
    }, n.prototype.lt = function(r) {
      return this.cmp(r) === -1
    }, n.prototype.lten = function(r) {
      return this.cmpn(r) <= 0
    }, n.prototype.lte = function(r) {
      return this.cmp(r) <= 0
    }, n.prototype.eqn = function(r) {
      return this.cmpn(r) === 0
    }, n.prototype.eq = function(r) {
      return this.cmp(r) === 0
    }, n.red = function(r) {
      return new U(r)
    }, n.prototype.toRed = function(r) {
      return s(!this.red, "Already a number in reduction context"), s(this.negative === 0, "red works only with positives"), r.convertTo(this)._forceRed(r)
    }, n.prototype.fromRed = function() {
      return s(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
    }, n.prototype._forceRed = function(r) {
      return this.red = r, this
    }, n.prototype.forceRed = function(r) {
      return s(!this.red, "Already a number in reduction context"), this._forceRed(r)
    }, n.prototype.redAdd = function(r) {
      return s(this.red, "redAdd works only with red numbers"), this.red.add(this, r)
    }, n.prototype.redIAdd = function(r) {
      return s(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, r)
    }, n.prototype.redSub = function(r) {
      return s(this.red, "redSub works only with red numbers"), this.red.sub(this, r)
    }, n.prototype.redISub = function(r) {
      return s(this.red, "redISub works only with red numbers"), this.red.isub(this, r)
    }, n.prototype.redShl = function(r) {
      return s(this.red, "redShl works only with red numbers"), this.red.shl(this, r)
    }, n.prototype.redMul = function(r) {
      return s(this.red, "redMul works only with red numbers"), this.red._verify2(this, r), this.red.mul(this, r)
    }, n.prototype.redIMul = function(r) {
      return s(this.red, "redMul works only with red numbers"), this.red._verify2(this, r), this.red.imul(this, r)
    }, n.prototype.redSqr = function() {
      return s(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
    }, n.prototype.redISqr = function() {
      return s(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
    }, n.prototype.redSqrt = function() {
      return s(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
    }, n.prototype.redInvm = function() {
      return s(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
    }, n.prototype.redNeg = function() {
      return s(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
    }, n.prototype.redPow = function(r) {
      return s(this.red && !r.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, r)
    };
    var St = {
      k256: null,
      p224: null,
      p192: null,
      p25519: null
    };

    function bt(C, r) {
      this.name = C, this.p = new n(r, 16), this.n = this.p.bitLength(), this.k = new n(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
    }
    bt.prototype._tmp = function() {
      var r = new n(null);
      return r.words = new Array(Math.ceil(this.n / 13)), r
    }, bt.prototype.ireduce = function(r) {
      var o = r,
        c;
      do this.split(o, this.tmp), o = this.imulK(o), o = o.iadd(this.tmp), c = o.bitLength(); while (c > this.n);
      var d = c < this.n ? -1 : o.ucmp(this.p);
      return d === 0 ? (o.words[0] = 0, o.length = 1) : d > 0 ? o.isub(this.p) : o._strip(), o
    }, bt.prototype.split = function(r, o) {
      r.iushrn(this.n, 0, o)
    }, bt.prototype.imulK = function(r) {
      return r.imul(this.k)
    };

    function qt() {
      bt.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
    }
    l(qt, bt), qt.prototype.split = function(r, o) {
      for (var c = 4194303, d = Math.min(r.length, 9), u = 0; u < d; u++) o.words[u] = r.words[u];
      if (o.length = d, r.length <= 9) {
        r.words[0] = 0, r.length = 1;
        return
      }
      var w = r.words[9];
      for (o.words[o.length++] = w & c, u = 10; u < r.length; u++) {
        var B = r.words[u] | 0;
        r.words[u - 10] = (B & c) << 4 | w >>> 22, w = B
      }
      w >>>= 22, r.words[u - 10] = w, w === 0 && r.length > 10 ? r.length -= 10 : r.length -= 9
    }, qt.prototype.imulK = function(r) {
      r.words[r.length] = 0, r.words[r.length + 1] = 0, r.length += 2;
      for (var o = 0, c = 0; c < r.length; c++) {
        var d = r.words[c] | 0;
        o += d * 977, r.words[c] = o & 67108863, o = d * 64 + (o / 67108864 | 0)
      }
      return r.words[r.length - 1] === 0 && (r.length--, r.words[r.length - 1] === 0 && r.length--), r
    };

    function Nt() {
      bt.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
    }
    l(Nt, bt);

    function Sr() {
      bt.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
    }
    l(Sr, bt);

    function Ee() {
      bt.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
    }
    l(Ee, bt), Ee.prototype.imulK = function(r) {
      for (var o = 0, c = 0; c < r.length; c++) {
        var d = (r.words[c] | 0) * 19 + o,
          u = d & 67108863;
        d >>>= 26, r.words[c] = u, o = d
      }
      return o !== 0 && (r.words[r.length++] = o), r
    }, n._prime = function(r) {
      if (St[r]) return St[r];
      var o;
      if (r === "k256") o = new qt;
      else if (r === "p224") o = new Nt;
      else if (r === "p192") o = new Sr;
      else if (r === "p25519") o = new Ee;
      else throw new Error("Unknown prime " + r);
      return St[r] = o, o
    };

    function U(C) {
      if (typeof C == "string") {
        var r = n._prime(C);
        this.m = r.p, this.prime = r
      } else s(C.gtn(1), "modulus must be greater than 1"), this.m = C, this.prime = null
    }
    U.prototype._verify1 = function(r) {
      s(r.negative === 0, "red works only with positives"), s(r.red, "red works only with red numbers")
    }, U.prototype._verify2 = function(r, o) {
      s((r.negative | o.negative) === 0, "red works only with positives"), s(r.red && r.red === o.red, "red works only with red numbers")
    }, U.prototype.imod = function(r) {
      return this.prime ? this.prime.ireduce(r)._forceRed(this) : (y(r, r.umod(this.m)._forceRed(this)), r)
    }, U.prototype.neg = function(r) {
      return r.isZero() ? r.clone() : this.m.sub(r)._forceRed(this)
    }, U.prototype.add = function(r, o) {
      this._verify2(r, o);
      var c = r.add(o);
      return c.cmp(this.m) >= 0 && c.isub(this.m), c._forceRed(this)
    }, U.prototype.iadd = function(r, o) {
      this._verify2(r, o);
      var c = r.iadd(o);
      return c.cmp(this.m) >= 0 && c.isub(this.m), c
    }, U.prototype.sub = function(r, o) {
      this._verify2(r, o);
      var c = r.sub(o);
      return c.cmpn(0) < 0 && c.iadd(this.m), c._forceRed(this)
    }, U.prototype.isub = function(r, o) {
      this._verify2(r, o);
      var c = r.isub(o);
      return c.cmpn(0) < 0 && c.iadd(this.m), c
    }, U.prototype.shl = function(r, o) {
      return this._verify1(r), this.imod(r.ushln(o))
    }, U.prototype.imul = function(r, o) {
      return this._verify2(r, o), this.imod(r.imul(o))
    }, U.prototype.mul = function(r, o) {
      return this._verify2(r, o), this.imod(r.mul(o))
    }, U.prototype.isqr = function(r) {
      return this.imul(r, r.clone())
    }, U.prototype.sqr = function(r) {
      return this.mul(r, r)
    }, U.prototype.sqrt = function(r) {
      if (r.isZero()) return r.clone();
      var o = this.m.andln(3);
      if (s(o % 2 === 1), o === 3) {
        var c = this.m.add(new n(1)).iushrn(2);
        return this.pow(r, c)
      }
      for (var d = this.m.subn(1), u = 0; !d.isZero() && d.andln(1) === 0;) u++, d.iushrn(1);
      s(!d.isZero());
      var w = new n(1).toRed(this),
        B = w.redNeg(),
        h = this.m.subn(1).iushrn(1),
        i = this.m.bitLength();
      for (i = new n(2 * i * i).toRed(this); this.pow(i, h).cmp(B) !== 0;) i.redIAdd(B);
      for (var f = this.pow(i, d), b = this.pow(r, d.addn(1).iushrn(1)), m = this.pow(r, d), E = u; m.cmp(w) !== 0;) {
        for (var At = m, S = 0; At.cmp(w) !== 0; S++) At = At.redSqr();
        s(S < E);
        var I = this.pow(f, new n(1).iushln(E - S - 1));
        b = b.redMul(I), f = I.redSqr(), m = m.redMul(f), E = S
      }
      return b
    }, U.prototype.invm = function(r) {
      var o = r._invmp(this.m);
      return o.negative !== 0 ? (o.negative = 0, this.imod(o).redNeg()) : this.imod(o)
    }, U.prototype.pow = function(r, o) {
      if (o.isZero()) return new n(1).toRed(this);
      if (o.cmpn(1) === 0) return r.clone();
      var c = 4,
        d = new Array(1 << c);
      d[0] = new n(1).toRed(this), d[1] = r;
      for (var u = 2; u < d.length; u++) d[u] = this.mul(d[u - 1], r);
      var w = d[0],
        B = 0,
        h = 0,
        i = o.bitLength() % 26;
      for (i === 0 && (i = 26), u = o.length - 1; u >= 0; u--) {
        for (var f = o.words[u], b = i - 1; b >= 0; b--) {
          var m = f >> b & 1;
          if (w !== d[0] && (w = this.sqr(w)), m === 0 && B === 0) {
            h = 0;
            continue
          }
          B <<= 1, B |= m, h++, !(h !== c && (u !== 0 || b !== 0)) && (w = this.mul(w, d[B]), h = 0, B = 0)
        }
        i = 26
      }
      return w
    }, U.prototype.convertTo = function(r) {
      var o = r.umod(this.m);
      return o === r ? o.clone() : o
    }, U.prototype.convertFrom = function(r) {
      var o = r.clone();
      return o.red = null, o
    }, n.mont = function(r) {
      return new kt(r)
    };

    function kt(C) {
      U.call(this, C), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new n(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
    }
    l(kt, U), kt.prototype.convertTo = function(r) {
      return this.imod(r.ushln(this.shift))
    }, kt.prototype.convertFrom = function(r) {
      var o = this.imod(r.mul(this.rinv));
      return o.red = null, o
    }, kt.prototype.imul = function(r, o) {
      if (r.isZero() || o.isZero()) return r.words[0] = 0, r.length = 1, r;
      var c = r.imul(o),
        d = c.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
        u = c.isub(d).iushrn(this.shift),
        w = u;
      return u.cmp(this.m) >= 0 ? w = u.isub(this.m) : u.cmpn(0) < 0 && (w = u.iadd(this.m)), w._forceRed(this)
    }, kt.prototype.mul = function(r, o) {
      if (r.isZero() || o.isZero()) return new n(0)._forceRed(this);
      var c = r.mul(o),
        d = c.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
        u = c.isub(d).iushrn(this.shift),
        w = u;
      return u.cmp(this.m) >= 0 ? w = u.isub(this.m) : u.cmpn(0) < 0 && (w = u.iadd(this.m)), w._forceRed(this)
    }, kt.prototype.invm = function(r) {
      var o = this.imod(r._invmp(this.m).mul(this.r2));
      return o._forceRed(this)
    }
  })(a, g0)
})(fr);
var D0 = fr.exports;
const ur = D0,
  pe = y0,
  ps = p0,
  ms = typeof self < "u" && self.crypto && self.crypto.subtle;
let bs = null;
ms || (bs = m0);

function M0(a) {
  return ms ? crypto.subtle.digest("SHA-256", a) : bs.subtle.digest({
    name: "SHA-256"
  }, a)
}

function _0(a) {
  if (!ur.isBN(a) && typeof a != "string") throw new Error("Please pass numbers as strings or BN objects to avoid precision errors.");
  return ps.toWei(a, "gwei")
}

function S0(a) {
  if (!ur.isBN(a) && typeof a != "string") throw new Error("Please pass numbers as strings or BN objects to avoid precision errors.");
  return ps.fromWei(a, "gwei")
}
const Es = [],
  er = {};
for (let a = 0; a <= 255; a++) {
  let t = a.toString(16);
  t.length < 2 && (t = "0" + t), Es.push(t), er[t] = a
}

function x0(a) {
  const t = [];
  for (let e = 0; e < a.byteLength; e++) t.push(Es[a[e]]);
  return t.join("")
}

function I0(a) {
  a = a.toLowerCase();
  const t = a.length;
  if (t % 2 !== 0) throw "hex string must have length a multiple of 2";
  const e = t / 2,
    s = new Uint8Array(e);
  for (let l = 0; l < e; l++) {
    const n = l * 2,
      g = a.substring(n, n + 2);
    if (!er.hasOwnProperty(g)) throw new Error("invalid hex character " + g);
    s[l] = er[g]
  }
  return s
}

function U0(a, t = 1) {
  let e, s;
  t === 1 && (e = new ArrayBuffer(a.length), s = new Uint8Array(e)), t === 2 && (e = new ArrayBuffer(a.length * 2), s = new Uint16Array(e)), t === 4 && (e = new ArrayBuffer(a.length * 4), s = new Uint32Array(e));
  for (let l = 0, n = a.length; l < n; l++) s[l] = a.charCodeAt(l);
  return new Uint8Array(s.buffer)
}

function T0(a, t) {
  a ^= 4294967295;
  for (let s = 0; s < t.length; s++) a ^= t[s], a = a & 1 ? a >>> 1 ^ 2197175160 : a >>> 1, a = a & 1 ? a >>> 1 ^ 2197175160 : a >>> 1, a = a & 1 ? a >>> 1 ^ 2197175160 : a >>> 1, a = a & 1 ? a >>> 1 ^ 2197175160 : a >>> 1, a = a & 1 ? a >>> 1 ^ 2197175160 : a >>> 1, a = a & 1 ? a >>> 1 ^ 2197175160 : a >>> 1, a = a & 1 ? a >>> 1 ^ 2197175160 : a >>> 1, a = a & 1 ? a >>> 1 ^ 2197175160 : a >>> 1;
  return a ^ 4294967295
}

function N0(a) {
  const t = T0(0, a),
    e = new ArrayBuffer(4);
  return new DataView(e).setUint32(0, t, !1), new Uint8Array(e).reverse()
}

function $0(a) {
  let e = 0;
  const s = new Uint8Array(a.length + 2);
  s.set(a);
  for (let l of s) {
    let n = 128;
    for (; n > 0;) e <<= 1, l & n && (e += 1), n >>= 1, e > 65535 && (e &= 65535, e ^= 4129)
  }
  return new Uint8Array([Math.floor(e / 256), e % 256])
}

function R0(a, t) {
  const e = new Uint8Array(a.length + t.length);
  return e.set(a), e.set(t, a.length), e
}

function k0(a, t) {
  return a.toString() === t.toString()
}
const Tt = (() => {
  const a = [];
  for (let l = 0; l < 26; ++l) a.push(String.fromCharCode(65 + l));
  for (let l = 0; l < 26; ++l) a.push(String.fromCharCode(97 + l));
  for (let l = 0; l < 10; ++l) a.push(String.fromCharCode(48 + l));
  return a.push("+"), a.push("/"), a
})();

function P0(a) {
  let t = "",
    e;
  const s = a.length;
  for (e = 2; e < s; e += 3) t += Tt[a[e - 2] >> 2], t += Tt[(a[e - 2] & 3) << 4 | a[e - 1] >> 4], t += Tt[(a[e - 1] & 15) << 2 | a[e] >> 6], t += Tt[a[e] & 63];
  return e === s + 1 && (t += Tt[a[e - 2] >> 2], t += Tt[(a[e - 2] & 3) << 4], t += "=="), e === s && (t += Tt[a[e - 2] >> 2], t += Tt[(a[e - 2] & 3) << 4 | a[e - 1] >> 4], t += Tt[(a[e - 1] & 15) << 2], t += "="), t
}

function vs(a) {
  return typeof self > "u" ? Ut.from(a, "base64").toString("binary") : atob(a)
}

function W0(a) {
  return typeof self > "u" ? Ut.from(a, "binary").toString("base64") : btoa(a)
}

function L0(a) {
  const t = vs(a),
    e = t.length,
    s = new Uint8Array(e);
  for (let l = 0; l < e; l++) s[l] = t.charCodeAt(l);
  return s
}

function O0(a, t) {
  let e = 0;
  for (let s = 0; s < a; s++) e *= 256, e += t[s];
  return e
}

function H0(a) {
  return pe.sign.keyPair.fromSeed(a)
}

function K0() {
  return pe.sign.keyPair()
}

function q0() {
  return pe.sign.keyPair().secretKey.slice(0, 32)
}
var me = {
    BN: ur,
    nacl: pe,
    sha256: M0,
    fromNano: S0,
    toNano: _0,
    bytesToHex: x0,
    hexToBytes: I0,
    stringToBytes: U0,
    crc32c: N0,
    crc16: $0,
    concatBytes: R0,
    bytesToBase64: P0,
    base64ToBytes: L0,
    base64toString: vs,
    stringToBase64: W0,
    compareBytes: k0,
    readNBytesUIntFromArray: O0,
    keyPairFromSeed: H0,
    newKeyPair: K0,
    newSeed: q0
  },
  Ds = {};
const {
  crc16: Ms,
  hexToBytes: V0,
  bytesToHex: G0,
  stringToBytes: Q0,
  base64toString: Z0,
  stringToBase64: Y0
} = me, rr = 17, _s = 81, sr = 128;

function X0(a) {
  if (a.length !== 48) throw new Error("User-friendly address should contain strictly 48 characters");
  const t = Q0(Z0(a));
  if (t.length !== 36) throw "Unknown address type: byte length is not equal to 36";
  const e = t.slice(0, 34),
    s = t.slice(34, 36),
    l = Ms(e);
  if (!(l[0] === s[0] && l[1] === s[1])) throw "Wrong crc16 hashsum";
  let n = e[0],
    g = !1,
    F = !1;
  if (n & sr && (g = !0, n = n ^ sr), n !== rr && n !== _s) throw "Unknown address tag";
  F = n === rr;
  let A = null;
  if (e[1] === 255 ? A = -1 : A = e[1], A !== 0 && A !== -1) throw new Error("Invalid address wc " + A);
  const y = e.slice(2, 34);
  return {
    isTestOnly: g,
    isBounceable: F,
    workchain: A,
    hashPart: y
  }
}
let J0 = class ir {
  static isValid(t) {
    try {
      return new ir(t), !0
    } catch {
      return !1
    }
  }
  constructor(t) {
    if (t == null) throw "Invalid address";
    if (t instanceof ir) {
      this.wc = t.wc, this.hashPart = t.hashPart, this.isTestOnly = t.isTestOnly, this.isUserFriendly = t.isUserFriendly, this.isBounceable = t.isBounceable, this.isUrlSafe = t.isUrlSafe;
      return
    }
    if (this.isUrlSafe = !0, t.search(/\-/) > 0 || t.search(/_/) > 0 ? t = t.replace(/\-/g, "+").replace(/_/g, "/") : this.isUrlSafe = !1, t.indexOf(":") > -1) {
      const e = t.split(":");
      if (e.length !== 2) throw new Error("Invalid address " + t);
      const s = parseInt(e[0]);
      if (s !== 0 && s !== -1) throw new Error("Invalid address wc " + t);
      const l = e[1];
      if (l.length !== 64) throw new Error("Invalid address hex " + t);
      this.isUserFriendly = !1, this.wc = s, this.hashPart = V0(l), this.isTestOnly = !1, this.isBounceable = !1
    } else {
      this.isUserFriendly = !0;
      const e = X0(t);
      this.wc = e.workchain, this.hashPart = e.hashPart, this.isTestOnly = e.isTestOnly, this.isBounceable = e.isBounceable
    }
  }
  toString(t, e, s, l) {
    if (t === void 0 && (t = this.isUserFriendly), e === void 0 && (e = this.isUrlSafe), s === void 0 && (s = this.isBounceable), l === void 0 && (l = this.isTestOnly), t) {
      let n = s ? rr : _s;
      l && (n |= sr);
      const g = new Int8Array(34);
      g[0] = n, g[1] = this.wc, g.set(this.hashPart, 2);
      const F = new Uint8Array(36);
      F.set(g), F.set(Ms(g), 34);
      let A = Y0(String.fromCharCode.apply(null, new Uint8Array(F)));
      return e && (A = A.replace(/\+/g, "-").replace(/\//g, "_")), A
    } else return this.wc + ":" + G0(this.hashPart)
  }
};
Ds.default = J0;
var Ss = {};
const {
  hexToBytes: j0,
  bytesToHex: z0
} = me;
let tn = class nr {
  static isValid(t) {
    try {
      return new nr(t), !0
    } catch {
      return !1
    }
  }
  constructor(t) {
    if (t == null) throw "Invalid address";
    if (t instanceof nr) this.bytes = t.bytes;
    else if (t instanceof Uint8Array) {
      if (t.length !== 32) throw new Error("invalid adnl bytes length");
      this.bytes = t
    } else if (typeof t == "string") {
      if (t.length !== 64) throw new Error("invalid adnl hex length");
      this.bytes = j0(t)
    } else throw new Error("unsupported type")
  }
  toHex() {
    let t = z0(this.bytes);
    for (; t.length < 64;) t = "0" + t;
    return t
  }
};
Ss.default = tn;
var xs = {};
const {
  hexToBytes: en,
  bytesToHex: rn
} = me;
let sn = class or {
  static isValid(t) {
    try {
      return new or(t), !0
    } catch {
      return !1
    }
  }
  constructor(t) {
    if (t == null) throw "Invalid address";
    if (t instanceof or) this.bytes = t.bytes;
    else if (t instanceof Uint8Array) {
      if (t.length !== 32) throw new Error("invalid bag id bytes length");
      this.bytes = t
    } else if (typeof t == "string") {
      if (t.length !== 64) throw new Error("invalid bag id hex length");
      this.bytes = en(t)
    } else throw new Error("unsupported type")
  }
  toHex() {
    let t = rn(this.bytes);
    for (; t.length < 64;) t = "0" + t;
    return t
  }
};
xs.default = sn;
const {
  BN: Is,
  nacl: nn,
  sha256: on,
  fromNano: an,
  toNano: ln,
  bytesToHex: cn,
  hexToBytes: hn,
  stringToBytes: dn,
  crc32c: fn,
  crc16: un,
  concatBytes: Cn,
  bytesToBase64: wn,
  base64ToBytes: gn,
  base64toString: Bn,
  stringToBase64: Fn,
  compareBytes: An,
  readNBytesUIntFromArray: yn,
  keyPairFromSeed: pn,
  newKeyPair: mn,
  newSeed: bn
} = me, Us = Ds.default, En = Ss.default, vn = xs.default;

function Dn(a) {
  const t = "ton://transfer/";
  if (!a.startsWith(t)) throw new Error("must starts with " + t);
  const e = a.substring(t.length).split("?");
  if (e.length > 2) throw new Error('multiple "?"');
  const s = e[0];
  if (!Us.isValid(s)) throw new Error("invalid address format " + s);
  const l = {
      address: s
    },
    n = e[1];
  if (n && n.length) {
    const g = n.split("&").map(F => F.split("="));
    for (const F of g) {
      if (F.length !== 2) throw new Error("invalid url pair");
      const A = F[0],
        y = F[1];
      if (A === "amount") {
        if (l.amount) throw new Error("amount already set");
        if (new Is(y).isNeg()) throw new Error("negative amount");
        l.amount = y
      } else if (A === "text") {
        if (l.text) throw new Error("text already set");
        l.text = decodeURIComponent(y)
      } else throw new Error("unknown url var " + A)
    }
  }
  return l
}

function Mn(a, t, e) {
  let s = "ton://transfer/" + a;
  const l = [];
  return t && l.push("amount=" + t), e && l.push("text=" + encodeURIComponent(e)), l.length === 0 ? s : s + "?" + l.join("&")
}
var x = {
  Address: Us,
  AdnlAddress: En,
  StorageBagId: vn,
  BN: Is,
  nacl: nn,
  sha256: on,
  fromNano: an,
  toNano: ln,
  bytesToHex: cn,
  hexToBytes: hn,
  stringToBytes: dn,
  crc32c: fn,
  crc16: un,
  concatBytes: Cn,
  bytesToBase64: wn,
  base64ToBytes: gn,
  base64toString: Bn,
  stringToBase64: Fn,
  compareBytes: An,
  readNBytesUIntFromArray: yn,
  parseTransferUrl: Dn,
  formatTransferUrl: Mn,
  keyPairFromSeed: pn,
  newKeyPair: mn,
  newSeed: bn
};
const {
  BN: Yt,
  bytesToHex: _n
} = x;
let Sn = class Ts {
  constructor(t) {
    this.array = Uint8Array.from({
      length: Math.ceil(t / 8)
    }, () => 0), this.cursor = 0, this.length = t
  }
  getFreeBits() {
    return this.length - this.cursor
  }
  getUsedBits() {
    return this.cursor
  }
  getUsedBytes() {
    return Math.ceil(this.cursor / 8)
  }
  get(t) {
    return (this.array[t / 8 | 0] & 1 << 7 - t % 8) > 0
  }
  checkRange(t) {
    if (t > this.length) throw Error("BitString overflow")
  }
  on(t) {
    this.checkRange(t), this.array[t / 8 | 0] |= 1 << 7 - t % 8
  }
  off(t) {
    this.checkRange(t), this.array[t / 8 | 0] &= ~(1 << 7 - t % 8)
  }
  toggle(t) {
    this.checkRange(t), this.array[t / 8 | 0] ^= 1 << 7 - t % 8
  }
  forEach(t) {
    const e = this.cursor;
    for (let s = 0; s < e; s++) t(this.get(s))
  }
  writeBit(t) {
    t && t > 0 ? this.on(this.cursor) : this.off(this.cursor), this.cursor = this.cursor + 1
  }
  writeBitArray(t) {
    for (let e = 0; e < t.length; e++) this.writeBit(t[e])
  }
  writeUint(t, e) {
    if (isNaN(t)) throw new Error("writeUint: value is NaN");
    if (t === null) throw new Error("writeUint: value is null");
    if (t === void 0) throw new Error("writeUint: value is undefined");
    if (!e) throw new Error("writeUint: no bitLength");
    if (t = new Yt(t), e == 0 || t.toString(2).length > e) {
      if (t == 0) return;
      throw Error("bitLength is too small for number, got number=" + t + ",bitLength=" + e)
    }
    const s = t.toString(2, e);
    for (let l = 0; l < e; l++) this.writeBit(s[l] == 1)
  }
  writeInt(t, e) {
    if (isNaN(t)) throw new Error("writeInt: value is NaN");
    if (t === null) throw new Error("writeInt: value is null");
    if (t === void 0) throw new Error("writeInt: value is undefined");
    if (!e) throw new Error("writeInt: no bitLength");
    if (t = new Yt(t), e == 1) {
      if (t == -1) {
        this.writeBit(!0);
        return
      }
      if (t == 0) {
        this.writeBit(!1);
        return
      }
      throw Error("Bitlength is too small for number")
    } else if (t.isNeg()) {
      this.writeBit(!0);
      const l = new Yt(2).pow(new Yt(e - 1));
      this.writeUint(l.add(t), e - 1)
    } else this.writeBit(!1), this.writeUint(t, e - 1)
  }
  writeUint8(t) {
    this.writeUint(t, 8)
  }
  writeBytes(t) {
    for (let e = 0; e < t.length; e++) this.writeUint8(t[e])
  }
  writeString(t) {
    this.writeBytes(new TextEncoder().encode(t))
  }
  writeGrams(t) {
    if (t == 0) this.writeUint(0, 4);
    else {
      t = new Yt(t);
      const e = Math.ceil(t.toString(16).length / 2);
      this.writeUint(e, 4), this.writeUint(t, e * 8)
    }
  }
  writeCoins(t) {
    this.writeGrams(t)
  }
  writeAddress(t) {
    t == null ? this.writeUint(0, 2) : (this.writeUint(2, 2), this.writeUint(0, 1), this.writeInt(t.wc, 8), this.writeBytes(t.hashPart))
  }
  writeBitString(t) {
    t.forEach(e => {
      this.writeBit(e)
    })
  }
  clone() {
    const t = new Ts(0);
    return t.array = this.array.slice(0), t.length = this.length, t.cursor = this.cursor, t
  }
  toString() {
    return this.toHex()
  }
  getTopUppedArray() {
    const t = this.clone();
    let e = Math.ceil(t.cursor / 8) * 8 - t.cursor;
    if (e > 0)
      for (e = e - 1, t.writeBit(!0); e > 0;) e = e - 1, t.writeBit(!1);
    return t.array = t.array.slice(0, Math.ceil(t.cursor / 8)), t.array
  }
  toHex() {
    if (this.cursor % 4 === 0) {
      const t = _n(this.array.slice(0, Math.ceil(this.cursor / 8))).toUpperCase();
      return this.cursor % 8 === 0 ? t : t.substr(0, t.length - 1)
    } else {
      const t = this.clone();
      for (t.writeBit(1); t.cursor % 4 !== 0;) t.writeBit(0);
      return t.toHex().toUpperCase() + "_"
    }
  }
  setTopUppedArray(t, e = !0) {
    if (this.length = t.length * 8, this.array = t, this.cursor = this.length, !(e || !this.length)) {
      let s = !1;
      for (let l = 0; l < 7; l++)
        if (this.cursor -= 1, this.get(this.cursor)) {
          s = !0, this.off(this.cursor);
          break
        } if (!s) throw console.log(t, e), new Error("Incorrect TopUppedArray")
    }
  }
};
var Cr = {
  BitString: Sn
};
const {
  BN: Pt,
  Address: xn,
  bytesToHex: In
} = x, {
  BitString: Un
} = Cr;
let Tn = class {
  constructor(t, e, s) {
    this.array = t, this.length = e, this.readCursor = 0, this.refs = s, this.refCursor = 0
  }
  getFreeBits() {
    return this.length - this.readCursor
  }
  checkRange(t) {
    if (t > this.length) throw Error("BitString overflow")
  }
  get(t) {
    return this.checkRange(t), (this.array[t / 8 | 0] & 1 << 7 - t % 8) > 0
  }
  loadBit() {
    const t = this.get(this.readCursor);
    return this.readCursor++, t
  }
  loadBits(t) {
    const e = new Un(t);
    for (let s = 0; s < t; s++) e.writeBit(this.loadBit());
    return e.array
  }
  loadUint(t) {
    if (t < 1) throw "Incorrect bitLength";
    let e = "";
    for (let s = 0; s < t; s++) e += this.loadBit() ? "1" : "0";
    return new Pt(e, 2)
  }
  loadInt(t) {
    if (t < 1) throw "Incorrect bitLength";
    const e = this.loadBit();
    if (t === 1) return e ? new Pt(-1) : new Pt(0);
    let s = this.loadUint(t - 1);
    if (e) {
      const n = new Pt(2).pow(new Pt(t - 1));
      s = s.sub(n)
    }
    return s
  }
  loadVarUint(t) {
    const e = this.loadUint(new Pt(t).toString(2).length - 1);
    return e.toNumber() === 0 ? new Pt(0) : this.loadUint(e * 8)
  }
  loadCoins() {
    return this.loadVarUint(16)
  }
  loadAddress() {
    const t = this.loadUint(2);
    if (t.toNumber() === 0) return null;
    if (t.toNumber() !== 2) throw new Error("unsupported address type");
    if (this.loadBit()) throw new Error("unsupported address type");
    const e = this.loadInt(8).toNumber(),
      s = this.loadBits(256);
    return new xn(e + ":" + In(s))
  }
  loadRef() {
    if (this.refCursor >= 4) throw new Error("refs overflow");
    const t = this.refs[this.refCursor];
    return this.refCursor++, t
  }
};
var Ns = {
  Slice: Tn
};
const {
  BitString: Zr
} = Cr, {
  bytesToBase64: bc,
  compareBytes: ie,
  concatBytes: Xt,
  crc32c: $s,
  hexToBytes: re,
  readNBytesUIntFromArray: Ot,
  sha256: Nn,
  bytesToHex: Ec
} = x, {
  Slice: $n
} = Ns, Rs = re("B5EE9C72"), Rn = re("68ff65f3"), kn = re("acc3a728");
let ks = class {
  constructor() {
    this.bits = new Zr(1023), this.refs = [], this.isExotic = !1
  }
  static fromBoc(t) {
    return Yr(t)
  }
  static oneFromBoc(t) {
    const e = Yr(t);
    if (e.length !== 1) throw new Error("expected 1 root cell but have " + e.length);
    return e[0]
  }
  writeCell(t) {
    this.bits.writeBitString(t.bits), this.refs = this.refs.concat(t.refs)
  }
  getMaxLevel() {
    let t = 0;
    for (let e in this.refs) {
      const s = this.refs[e];
      s.getMaxLevel() > t && (t = s.getMaxLevel())
    }
    return t
  }
  isExplicitlyStoredHashes() {
    return 0
  }
  getMaxDepth() {
    let t = 0;
    if (this.refs.length > 0) {
      for (let e = 0; e < this.refs.length; e++) {
        let l = this.refs[e].getMaxDepth();
        l > t && (t = l)
      }
      t = t + 1
    }
    return t
  }
  getMaxDepthAsArray() {
    const t = this.getMaxDepth(),
      e = Uint8Array.from({
        length: 2
      }, () => 0);
    return e[1] = t % 256, e[0] = Math.floor(t / 256), e
  }
  getRefsDescriptor() {
    const t = Uint8Array.from({
      length: 1
    }, () => 0);
    return t[0] = this.refs.length + this.isExotic * 8 + this.getMaxLevel() * 32, t
  }
  getBitsDescriptor() {
    const t = Uint8Array.from({
      length: 1
    }, () => 0);
    return t[0] = Math.ceil(this.bits.cursor / 8) + Math.floor(this.bits.cursor / 8), t
  }
  getDataWithDescriptors() {
    const t = this.getRefsDescriptor(),
      e = this.getBitsDescriptor(),
      s = this.bits.getTopUppedArray();
    return Xt(Xt(t, e), s)
  }
  async getRepr() {
    const t = [];
    t.push(this.getDataWithDescriptors());
    for (let s in this.refs) {
      const l = this.refs[s];
      t.push(l.getMaxDepthAsArray())
    }
    for (let s in this.refs) {
      const l = this.refs[s];
      t.push(await l.hash())
    }
    let e = new Uint8Array;
    for (let s in t) {
      const l = t[s];
      e = Xt(e, l)
    }
    return e
  }
  async hash() {
    return new Uint8Array(await Nn(await this.getRepr()))
  }
  beginParse() {
    const t = this.refs.map(e => e.beginParse());
    return new $n(this.bits.array.slice(), this.bits.length, t)
  }
  print(t) {
    t = t || "";
    let e = t + "x{" + this.bits.toHex() + `}
`;
    for (let s in this.refs) {
      const l = this.refs[s];
      e += l.print(t + " ")
    }
    return e
  }
  async toBoc(t = !0, e = !0, s = !1, l = 0) {
    const g = await this.treeWalk(),
      F = g[0],
      A = g[1],
      y = F.length,
      p = y.toString(2).length,
      M = Math.min(Math.ceil(p / 8), 1);
    let v = 0,
      T = [];
    for (let Dt of F) T.push(v), v = v + await Dt[1].bocSerializationSize(A, M);
    const N = v.toString(2).length,
      Ft = Math.max(Math.ceil(N / 8), 1),
      D = new Zr((1023 + 32 * 4 + 32 * 3) * F.length);
    D.writeBytes(Rs), D.writeBitArray([t, e, s]), D.writeUint(l, 2), D.writeUint(M, 3), D.writeUint8(Ft), D.writeUint(y, M * 8), D.writeUint(1, M * 8), D.writeUint(0, M * 8), D.writeUint(v, Ft * 8), D.writeUint(0, M * 8), t && F.forEach((Dt, _t) => D.writeUint(T[_t], Ft * 8));
    for (let Dt of F) {
      const _t = await Dt[1].serializeForBoc(A, M);
      D.writeBytes(_t)
    }
    let vt = D.getTopUppedArray();
    return e && (vt = Xt(vt, $s(vt))), vt
  }
  async serializeForBoc(t, e) {
    const s = [];
    if (s.push(this.getDataWithDescriptors()), this.isExplicitlyStoredHashes()) throw new Error("Cell hashes explicit storing is not implemented");
    for (let n in this.refs) {
      const F = await this.refs[n].hash();
      let y = t[F].toString(16);
      y.length % 2 && (y = "0" + y);
      const p = re(y);
      s.push(p)
    }
    let l = new Uint8Array;
    for (let n in s) {
      const g = s[n];
      l = Xt(l, g)
    }
    return l
  }
  async bocSerializationSize(t, e) {
    return (await this.serializeForBoc(t, e)).length
  }
  async treeWalk() {
    return Ws(this, [], {})
  }
};
async function Ps(a, t, e) {
  const s = a[e];
  for (let n in a) a[n] > s && (a[n] = a[n] - 1);
  a[e] = t.length - 1;
  const l = t.splice(s, 1)[0];
  t.push(l);
  for (let n of l[1].refs) await Ps(a, t, await n.hash())
}
async function Ws(a, t, e, s = null) {
  const l = await a.hash();
  if (l in e) return s && e[s] > e[l] && await Ps(e, t, l), [t, e];
  e[l] = t.length, t.push([l, a]);
  for (let n of a.refs) {
    const g = await Ws(n, t, e, l);
    t = g[0], e = g[1]
  }
  return [t, e]
}

function Pn(a) {
  if (a.length < 5) throw "Not enough bytes for magic prefix";
  const t = a,
    e = a.slice(0, 4);
  a = a.slice(4);
  let s, l, n, g, F;
  if (ie(e, Rs)) {
    const D = a[0];
    s = D & 128, l = D & 64, n = D & 32, g = (D & 16) * 2 + (D & 8), F = D % 8
  }
  if (ie(e, Rn) && (s = 1, l = 0, n = 0, g = 0, F = a[0]), ie(e, kn) && (s = 1, l = 1, n = 0, g = 0, F = a[0]), a = a.slice(1), a.length < 1 + 5 * F) throw "Not enough bytes for encoding cells counters";
  const A = a[0];
  a = a.slice(1);
  const y = Ot(F, a);
  a = a.slice(F);
  const p = Ot(F, a);
  a = a.slice(F);
  const M = Ot(F, a);
  a = a.slice(F);
  const v = Ot(A, a);
  if (a = a.slice(A), a.length < p * F) throw "Not enough bytes for encoding root cells hashes";
  let T = [];
  for (let D = 0; D < p; D++) T.push(Ot(F, a)), a = a.slice(F);
  let N = !1;
  if (s) {
    if (N = [], a.length < A * y) throw "Not enough bytes for index encoding";
    for (let D = 0; D < y; D++) N.push(Ot(A, a)), a = a.slice(A)
  }
  if (a.length < v) throw "Not enough bytes for cells data";
  const Ft = a.slice(0, v);
  if (a = a.slice(v), l) {
    if (a.length < 4) throw "Not enough bytes for crc32c hashsum";
    const D = t.length;
    if (!ie($s(t.slice(0, D - 4)), a.slice(0, 4))) throw "Crc32c hashsum mismatch";
    a = a.slice(4)
  }
  if (a.length) throw "Too much bytes in BoC serialization";
  return {
    has_idx: s,
    hash_crc32: l,
    has_cache_bits: n,
    flags: g,
    size_bytes: F,
    off_bytes: A,
    cells_num: y,
    roots_num: p,
    absent_num: M,
    tot_cells_size: v,
    root_list: T,
    index: N,
    cells_data: Ft
  }
}

function Wn(a, t) {
  if (a.length < 2) throw "Not enough bytes to encode cell descriptors";
  const e = a[0],
    s = a[1];
  a = a.slice(2);
  const l = e & 8,
    n = e % 8,
    g = Math.ceil(s / 2),
    F = !(s % 2);
  let A = new ks;
  if (A.isExotic = l, a.length < g + t * n) throw "Not enough bytes to encode cell data";
  A.bits.setTopUppedArray(a.slice(0, g), F), a = a.slice(g);
  for (let y = 0; y < n; y++) A.refs.push(Ot(t, a)), a = a.slice(t);
  return {
    cell: A,
    residue: a
  }
}

function Yr(a) {
  typeof a == "string" && (a = re(a));
  const t = Pn(a);
  let e = t.cells_data,
    s = [];
  for (let n = 0; n < t.cells_num; n++) {
    let g = Wn(e, t.size_bytes);
    e = g.residue, s.push(g.cell)
  }
  for (let n = t.cells_num - 1; n >= 0; n--) {
    let g = s[n];
    for (let F = 0; F < g.refs.length; F++) {
      const A = g.refs[F];
      if (A < n) throw "Topological order is broken";
      g.refs[F] = s[A]
    }
  }
  let l = [];
  for (let n of t.root_list) l.push(s[n]);
  return l
}
var Ln = {
  Cell: ks
};
const {
  BitString: On
} = Cr, {
  Cell: Hn
} = Ln, {
  Slice: Kn
} = Ns;
var _ = {
  BitString: On,
  Cell: Hn,
  Slice: Kn
};
const {
  Cell: Gt
} = _, {
  Address: $t,
  bytesToBase64: Jt,
  bytesToHex: qn,
  BN: Vn
} = x;
let Gn = class Be {
  constructor(t, e) {
    this.provider = t, this.options = e, this.address = e.address ? new $t(e.address) : null, e.wc || (e.wc = this.address ? this.address.wc : 0), this.methods = {}
  }
  async getAddress() {
    return this.address || (this.address = (await this.createStateInit()).address), this.address
  }
  createCodeCell() {
    if (!this.options.code) throw new Error("Contract: options.code is not defined");
    return this.options.code
  }
  createDataCell() {
    return new Gt
  }
  async createStateInit() {
    const t = this.createCodeCell(),
      e = this.createDataCell(),
      s = Be.createStateInit(t, e),
      l = await s.hash(),
      n = new $t(this.options.wc + ":" + qn(l));
    return {
      stateInit: s,
      address: n,
      code: t,
      data: e
    }
  }
  static createStateInit(t, e, s = null, l = null, n = null) {
    if (s) throw "Library in state init is not implemented";
    if (l) throw "Split depth in state init is not implemented";
    if (n) throw "Ticktock in state init is not implemented";
    const g = new Gt;
    return g.bits.writeBitArray([!!l, !!n, !!t, !!e, !!s]), t && g.refs.push(t), e && g.refs.push(e), s && g.refs.push(s), g
  }
  static createInternalMessageHeader(t, e = 0, s = !0, l = null, n = !1, g = null, F = null, A = 0, y = 0, p = 0, M = 0) {
    const v = new Gt;
    if (v.bits.writeBit(!1), v.bits.writeBit(s), l !== null ? v.bits.writeBit(l) : v.bits.writeBit(new $t(t).isBounceable), v.bits.writeBit(n), v.bits.writeAddress(g ? new $t(g) : null), v.bits.writeAddress(new $t(t)), v.bits.writeGrams(e), F) throw "Currency collections are not implemented yet";
    return v.bits.writeBit(!!F), v.bits.writeGrams(A), v.bits.writeGrams(y), v.bits.writeUint(p, 64), v.bits.writeUint(M, 32), v
  }
  static createExternalMessageHeader(t, e = null, s = 0) {
    const l = new Gt;
    return l.bits.writeUint(2, 2), l.bits.writeAddress(e ? new $t(e) : null), l.bits.writeAddress(new $t(t)), l.bits.writeGrams(s), l
  }
  static createOutMsg(t, e, s, l = null) {
    let n = new Gt;
    s && (s.refs ? n = s : typeof s == "string" ? s.length > 0 && (n.bits.writeUint(0, 32), n.bits.writeString(s)) : n.bits.writeBytes(s));
    const g = Be.createInternalMessageHeader(new $t(t), new Vn(e));
    return Be.createCommonMsgInfo(g, l, n)
  }
  static createCommonMsgInfo(t, e = null, s = null) {
    const l = new Gt;
    return l.writeCell(t), e ? (l.bits.writeBit(!0), l.bits.writeBit(!0), l.refs.push(e)) : l.bits.writeBit(!1), s ? l.bits.getFreeBits() >= s.bits.getUsedBits() && l.refs.length + s.refs.length <= 4 ? (l.bits.writeBit(!1), l.writeCell(s)) : (l.bits.writeBit(!0), l.refs.push(s)) : l.bits.writeBit(!1), l
  }
  static createMethod(t, e) {
    return {
      getBody: async () => (await e).body,
      getQuery: async () => (await e).message,
      send: async () => {
        const s = await e,
          l = Jt(await s.message.toBoc(!1));
        return t.sendBoc(l)
      },
      estimateFee: async () => {
        const s = await e,
          l = s.code ? {
            address: s.address.toString(!0, !0, !1),
            body: Jt(await s.body.toBoc(!1)),
            init_code: Jt(await s.code.toBoc(!1)),
            init_data: Jt(await s.data.toBoc(!1))
          } : {
            address: s.address.toString(!0, !0, !0),
            body: Jt(await s.body.toBoc(!1))
          };
        return t.getEstimateFee(l)
      }
    }
  }
};
var yt = {
  Contract: Gn
};
const {
  Cell: Qn
} = _, {
  Address: Zn,
  BN: Dc,
  bytesToHex: Yn
} = x, {
  Contract: qe
} = yt;
let Xn = class {
  constructor(t, e) {
    this.transport = t, this.ton = e, this.ADDRESS_FORMAT_HEX = 0, this.ADDRESS_FORMAT_USER_FRIENDLY = 1, this.ADDRESS_FORMAT_URL_SAFE = 2, this.ADDRESS_FORMAT_BOUNCEABLE = 4, this.ADDRESS_FORMAT_TEST_ONLY = 8
  }
  async getAppConfiguration() {
    const t = await this.transport.send(224, 1, 0, 0);
    return {
      version: "" + t[0] + "." + t[1] + "." + t[2]
    }
  }
  async getPublicKey(t, e) {
    const s = Ut.alloc(4);
    s.writeInt32BE(t);
    const l = await this.transport.send(224, 2, e ? 1 : 0, 0, s),
      n = l[0];
    return {
      publicKey: new Uint8Array(l.slice(1, 1 + n))
    }
  }
  async getAddress(t, e, s) {
    const l = Ut.alloc(4);
    l.writeInt32BE(t);
    const n = await this.transport.send(224, 5, e ? 1 : 0, s, l),
      g = n[0],
      F = new Uint8Array(n.slice(1, 1 + g));
    return {
      address: new Zn("0:" + Yn(F))
    }
  }
  async sign(t, e) {
    const s = Ut.alloc(4);
    s.writeInt32BE(t);
    const l = Ut.concat([s, Ut.from(e)]),
      n = await this.transport.send(224, 3, 0, 0, l),
      g = n[0];
    return {
      signature: n.slice(1, 1 + g)
    }
  }
  async transfer(t, e, s, l, n, g) {
    const A = await e.createTransferMessage(null, s, l, n, null, 3, !0),
      y = Ut.alloc(4);
    y.writeInt32BE(t);
    const p = Ut.concat([y, Ut.from(await A.signingMessage.toBoc())]),
      M = await this.transport.send(224, 4, g, 0, p),
      v = M[0],
      T = M.slice(1, 1 + v),
      N = new Uint8Array(T),
      Ft = new Qn;
    Ft.bits.writeBytes(N), Ft.writeCell(A.signingMessage);
    let D = null,
      vt = null,
      Dt = null;
    if (n === 0) {
      const Nt = await e.createStateInit();
      D = Nt.stateInit, vt = Nt.code, Dt = Nt.data
    }
    const _t = await e.getAddress(),
      St = qe.createExternalMessageHeader(_t),
      bt = qe.createCommonMsgInfo(St, D, Ft),
      qt = new Promise(Nt => {
        Nt({
          address: _t,
          message: bt,
          body: Ft,
          signature: N,
          signingMessage: A.signingMessage,
          stateInit: D,
          code: vt,
          data: Dt
        })
      });
    return qe.createMethod(this.ton.provider, qt)
  }
};
var Jn = Xn,
  Ls = {},
  Os = {};
const {
  BN: Ve,
  base64ToBytes: Xr
} = x, {
  Cell: Jr
} = _;
let jn = class Ht {
  static parseObject(t) {
    const e = t["@type"];
    switch (e) {
      case "tvm.list":
      case "tvm.tuple":
        return t.elements.map(Ht.parseObject);
      case "tvm.cell":
        return Jr.oneFromBoc(Xr(t.bytes));
      case "tvm.stackEntryCell":
        return Ht.parseObject(t.cell);
      case "tvm.stackEntryTuple":
        return Ht.parseObject(t.tuple);
      case "tvm.stackEntryNumber":
        return Ht.parseObject(t.number);
      case "tvm.numberDecimal":
        return new Ve(t.number, 10);
      default:
        throw new Error("unknown type " + e)
    }
  }
  static parseResponseStack(t) {
    const e = t[0],
      s = t[1];
    switch (e) {
      case "num":
        return new Ve(s.replace(/0x/, ""), 16);
      case "list":
      case "tuple":
        return Ht.parseObject(s);
      case "cell":
        const l = Xr(s.bytes);
        return Jr.oneFromBoc(l);
      default:
        throw new Error("unknown type " + e)
    }
  }
  static parseResponse(t) {
    if (t.exit_code !== 0) {
      const s = new Error("http provider parse response error");
      throw s.result = t, s
    }
    const e = t.stack.map(Ht.parseResponseStack);
    return e.length === 1 ? e[0] : e
  }
  static makeArg(t) {
    if (t instanceof Ve || t instanceof Number) return ["num", t];
    throw new Error("unknown arg type " + t)
  }
  static makeArgs(t) {
    return t.map(this.makeArg)
  }
};
Os.default = jn;
const {
  Cell: zn
} = _, {
  base64ToBytes: to
} = x, eo = Os.default;
typeof fetch > "u" && (fetch = v0);
const ar = "-9223372036854775808";
let Hs = class {
  constructor(t, e) {
    this.host = t || "https://toncenter.com/api/v2/jsonRPC", this.options = e || {}
  }
  sendImpl(t, e) {
    const s = {
      "Content-Type": "application/json"
    };
    return this.options.apiKey && (s["X-API-Key"] = this.options.apiKey), fetch(t, {
      method: "POST",
      headers: s,
      body: JSON.stringify(e)
    }).then(l => l.json()).then(({
      result: l,
      error: n
    }) => l || Promise.reject(n))
  }
  send(t, e) {
    return this.sendImpl(this.host, {
      id: 1,
      jsonrpc: "2.0",
      method: t,
      params: e
    })
  }
  async getAddressInfo(t) {
    return this.send("getAddressInformation", {
      address: t
    })
  }
  async getExtendedAddressInfo(t) {
    return this.send("getExtendedAddressInformation", {
      address: t
    })
  }
  async getWalletInfo(t) {
    return this.send("getWalletInformation", {
      address: t
    })
  }
  async getTransactions(t, e = 20, s = void 0, l = void 0, n = void 0, g = void 0) {
    return this.send("getTransactions", {
      address: t,
      limit: e,
      lt: s,
      hash: l,
      to_lt: n,
      archival: g
    })
  }
  async getBalance(t) {
    return this.send("getAddressBalance", {
      address: t
    })
  }
  async sendBoc(t) {
    return this.send("sendBoc", {
      boc: t
    })
  }
  async sendQuery(t) {
    return this.send("sendQuerySimple", t)
  }
  async getEstimateFee(t) {
    return this.send("estimateFee", t)
  }
  async call(t, e, s = []) {
    return this.send("runGetMethod", {
      address: t,
      method: e,
      stack: s
    })
  }
  async call2(t, e, s = []) {
    const l = await this.send("runGetMethod", {
      address: t,
      method: e,
      stack: s
    });
    return eo.parseResponse(l)
  }
  async getConfigParam(t) {
    const e = await this.send("getConfigParam", {
      config_id: t
    });
    if (e["@type"] !== "configInfo") throw new Error("getConfigParam expected type configInfo");
    if (!e.config) throw new Error("getConfigParam expected config");
    if (e.config["@type"] !== "tvm.cell") throw new Error("getConfigParam expected type tvm.cell");
    if (!e.config.bytes) throw new Error("getConfigParam expected bytes");
    return zn.oneFromBoc(to(e.config.bytes))
  }
  async getMasterchainInfo() {
    return this.send("getMasterchainInfo", {})
  }
  async getBlockShards(t) {
    return this.send("shards", {
      seqno: t
    })
  }
  async getBlockTransactions(t, e, s, l, n, g) {
    return this.send("getBlockTransactions", {
      workchain: t,
      shard: e,
      seqno: s,
      count: l,
      after_lt: n,
      after_hash: g
    })
  }
  async getMasterchainBlockTransactions(t, e, s, l) {
    return this.getBlockTransactions(-1, ar, t, e, s, l)
  }
  async getBlockHeader(t, e, s) {
    return this.send("getBlockHeader", {
      workchain: t,
      shard: e,
      seqno: s
    })
  }
  async getMasterchainBlockHeader(t) {
    return this.getBlockHeader(-1, ar, t)
  }
};
Hs.SHARD_ID_ALL = ar;
Ls.default = Hs;
var Ks = {};
const {
  Contract: xt
} = yt, {
  Cell: ne
} = _, {
  nacl: oe,
  stringToBytes: Sc,
  Address: xc,
  BN: Ic
} = x;
let ro = class extends xt {
  constructor(t, e) {
    if (!e.publicKey && !e.address) throw new Error("WalletContract required publicKey or address in options");
    super(t, e), this.methods = {
      transfer: s => xt.createMethod(t, this.createTransferMessage(s.secretKey, s.toAddress, s.amount, s.seqno, s.payload, s.sendMode, !s.secretKey, s.stateInit, s.expireAt)),
      transfers: s => xt.createMethod(t, this.createTransferMessages(s.secretKey, s.seqno, s.messages, !s.secretKey, s.expireAt)),
      seqno: () => ({
        call: async () => {
          const s = await this.getAddress();
          let l = null;
          try {
            l = (await t.call2(s.toString(), "seqno")).toNumber()
          } catch {}
          return l
        }
      })
    }, this.deploy = s => xt.createMethod(t, this.createInitExternalMessage(s))
  }
  getName() {
    throw new Error("override me")
  }
  createDataCell() {
    const t = new ne;
    return t.bits.writeUint(0, 32), t.bits.writeBytes(this.options.publicKey), t
  }
  createSigningMessage(t) {
    t = t || 0;
    const e = new ne;
    return e.bits.writeUint(t, 32), e
  }
  async createInitExternalMessage(t) {
    if (!this.options.publicKey) {
      const M = oe.sign.keyPair.fromSecretKey(t);
      this.options.publicKey = M.publicKey
    }
    const {
      stateInit: e,
      address: s,
      code: l,
      data: n
    } = await this.createStateInit(), g = this.createSigningMessage(), F = oe.sign.detached(await g.hash(), t), A = new ne;
    A.bits.writeBytes(F), A.writeCell(g);
    const y = xt.createExternalMessageHeader(s),
      p = xt.createCommonMsgInfo(y, e, A);
    return {
      address: s,
      message: p,
      body: A,
      signingMessage: g,
      stateInit: e,
      code: l,
      data: n
    }
  }
  async createExternalMessage(t, e, s, l = !1) {
    const n = l ? new Uint8Array(64) : oe.sign.detached(await t.hash(), e),
      g = new ne;
    g.bits.writeBytes(n), g.writeCell(t);
    let F = null,
      A = null,
      y = null;
    if (s === 0) {
      if (!this.options.publicKey) {
        const N = oe.sign.keyPair.fromSecretKey(e);
        this.options.publicKey = N.publicKey
      }
      const T = await this.createStateInit();
      F = T.stateInit, A = T.code, y = T.data
    }
    const p = await this.getAddress(),
      M = xt.createExternalMessageHeader(p),
      v = xt.createCommonMsgInfo(M, F, g);
    return {
      address: p,
      message: v,
      body: g,
      signature: n,
      signingMessage: t,
      stateInit: F,
      code: A,
      data: y
    }
  }
  async createTransferMessage(t, e, s, l, n = "", g = 3, F = !1, A = null, y = void 0) {
    if (l == null || l < 0) throw new Error("seqno must be number >= 0");
    const p = this.createSigningMessage(l, y);
    return g == null && (g = 3), p.bits.writeUint8(g), p.refs.push(xt.createOutMsg(e, s, n, A)), this.createExternalMessage(p, t, l, F)
  }
  async createTransferMessages(t, e, s, l = !1, n = void 0) {
    if (e == null || e < 0) throw new Error("seqno must be number >= 0");
    const g = this.createSigningMessage(e, n);
    if (s.length < 1 || s.length > 4) throw new Error("put 1-4 messages");
    for (const F of s) {
      let A = F.sendMode;
      A == null && (A = 3), g.bits.writeUint8(A), g.refs.push(xt.createOutMsg(F.toAddress, F.amount, F.payload, F.stateInit))
    }
    return this.createExternalMessage(g, t, e, l)
  }
};
var Kt = {
  WalletContract: ro
};
const {
  Cell: wr
} = _, {
  WalletContract: gr
} = Kt;
let so = class extends gr {
    constructor(t, e) {
      e.code = wr.oneFromBoc("B5EE9C72410101010044000084FF0020DDA4F260810200D71820D70B1FED44D0D31FD3FFD15112BAF2A122F901541044F910F2A2F80001D31F3120D74A96D307D402FB00DED1A4C8CB1FCBFFC9ED5441FDF089"), super(t, e)
    }
    getName() {
      return "simpleR1"
    }
  },
  io = class extends gr {
    constructor(t, e) {
      e.code = wr.oneFromBoc("B5EE9C724101010100530000A2FF0020DD2082014C97BA9730ED44D0D70B1FE0A4F260810200D71820D70B1FED44D0D31FD3FFD15112BAF2A122F901541044F910F2A2F80001D31F3120D74A96D307D402FB00DED1A4C8CB1FCBFFC9ED54D0E2786F"), super(t, e)
    }
    getName() {
      return "simpleR2"
    }
  },
  no = class extends gr {
    constructor(t, e) {
      e.code = wr.oneFromBoc("B5EE9C7241010101005F0000BAFF0020DD2082014C97BA218201339CBAB19C71B0ED44D0D31FD70BFFE304E0A4F260810200D71820D70B1FED44D0D31FD3FFD15112BAF2A122F901541044F910F2A2F80001D31F3120D74A96D307D402FB00DED1A4C8CB1FCBFFC9ED54B5B86E42"), super(t, e)
    }
    getName() {
      return "simpleR3"
    }
  };
var oo = {
  SimpleWalletContractR1: so,
  SimpleWalletContractR2: io,
  SimpleWalletContractR3: no
};
const {
  Cell: Br
} = _, {
  WalletContract: ao
} = Kt;
class qs extends ao {
  createSigningMessage(t, e) {
    t = t || 0, e = e || Math.floor(Date.now() / 1e3) + 60;
    const s = new Br;
    if (s.bits.writeUint(t, 32), t === 0)
      for (let l = 0; l < 32; l++) s.bits.writeBit(1);
    else s.bits.writeUint(e, 32);
    return s
  }
}
let lo = class extends qs {
    constructor(t, e) {
      e.code = Br.oneFromBoc("B5EE9C724101010100570000AAFF0020DD2082014C97BA9730ED44D0D70B1FE0A4F2608308D71820D31FD31F01F823BBF263ED44D0D31FD3FFD15131BAF2A103F901541042F910F2A2F800029320D74A96D307D402FB00E8D1A4C8CB1FCBFFC9ED54A1370BB6"), super(t, e)
    }
    getName() {
      return "v2R1"
    }
  },
  co = class extends qs {
    constructor(t, e) {
      e.code = Br.oneFromBoc("B5EE9C724101010100630000C2FF0020DD2082014C97BA218201339CBAB19C71B0ED44D0D31FD70BFFE304E0A4F2608308D71820D31FD31F01F823BBF263ED44D0D31FD3FFD15131BAF2A103F901541042F910F2A2F800029320D74A96D307D402FB00E8D1A4C8CB1FCBFFC9ED54044CD7A1"), super(t, e)
    }
    getName() {
      return "v2R2"
    }
  };
var ho = {
  WalletV2ContractR1: lo,
  WalletV2ContractR2: co
};
const {
  BN: Zt
} = x;

function Vs(a) {
  if (a.loadBits(512), a.loadUint(32).toNumber() !== 698983191) throw new Error("invalid walletId");
  const e = a.loadUint(32).toNumber(),
    s = a.loadUint(32).toNumber();
  if (a.loadUint(8).toNumber() !== 3) throw new Error("invalid sendMode");
  let n = a.loadRef();
  if (n.loadBit()) throw Error("invalid internal header");
  if (!n.loadBit()) throw Error("invalid ihrDisabled");
  const g = n.loadBit();
  if (n.loadBit()) throw Error("invalid bounced");
  if (n.loadAddress() !== null) throw Error("invalid externalSourceAddress");
  const A = n.loadAddress(),
    y = n.loadCoins();
  if (n.loadBit()) throw Error("invalid currencyCollection");
  if (!n.loadCoins().eq(new Zt(0))) throw new Error("invalid ihrFees");
  if (!n.loadCoins().eq(new Zt(0))) throw new Error("invalid fwdFees");
  if (!n.loadUint(64).eq(new Zt(0))) throw new Error("invalid createdLt");
  if (!n.loadUint(32).eq(new Zt(0))) throw new Error("invalid createdAt");
  n.loadBit() && n.loadRef();
  let N = null;
  if (n.getFreeBits() > 0 && (n.loadBit() && (n = n.loadRef()), n.getFreeBits() > 32)) {
    const Ft = n.loadUint(32),
      D = n.loadBits(n.getFreeBits());
    N = Ft.eq(new Zt(0)) ? new TextDecoder().decode(D) : ""
  }
  return {
    toAddress: A,
    value: y,
    bounce: g,
    seqno: s,
    expireAt: e,
    payload: N
  }
}

function fo(a) {
  const t = a.beginParse();
  if (t.loadUint(2).toNumber() !== 2) throw Error("invalid header");
  if (t.loadAddress() !== null) throw Error("invalid externalSourceAddress");
  const s = t.loadAddress();
  if (!t.loadCoins().eq(new Zt(0))) throw new Error("invalid externalImportFee");
  t.loadBit() && t.loadBit() && t.loadRef();
  const n = t.loadBit() ? t.loadRef() : t;
  return {
    fromAddress: s,
    ...Vs(n)
  }
}
var Fr = {
  parseWalletV3TransferQuery: fo,
  parseWalletV3TransferBody: Vs
};
const {
  Cell: Ae
} = _, {
  WalletContract: uo
} = Kt, {
  parseWalletV3TransferQuery: Gs,
  parseWalletV3TransferBody: Qs
} = Fr;
class Zs extends uo {
  createSigningMessage(t, e) {
    t = t || 0, e = e || Math.floor(Date.now() / 1e3) + 60;
    const s = new Ae;
    if (s.bits.writeUint(this.options.walletId, 32), t === 0)
      for (let l = 0; l < 32; l++) s.bits.writeBit(1);
    else s.bits.writeUint(e, 32);
    return s.bits.writeUint(t, 32), s
  }
  createDataCell() {
    const t = new Ae;
    return t.bits.writeUint(0, 32), t.bits.writeUint(this.options.walletId, 32), t.bits.writeBytes(this.options.publicKey), t
  }
}
let Ar = class extends Zs {
  constructor(t, e) {
    e.code = Ae.oneFromBoc("B5EE9C724101010100620000C0FF0020DD2082014C97BA9730ED44D0D70B1FE0A4F2608308D71820D31FD31FD31FF82313BBF263ED44D0D31FD31FD3FFD15132BAF2A15144BAF2A204F901541055F910F2A3F8009320D74A96D307D402FB00E8D101A4C8CB1FCB1FCBFFC9ED543FBE6EE0"), super(t, e), this.options.walletId || (this.options.walletId = 698983191 + this.options.wc)
  }
  getName() {
    return "v3R1"
  }
};
Ar.parseTransferQuery = Gs;
Ar.parseTransferBody = Qs;
let yr = class extends Zs {
  constructor(t, e) {
    e.code = Ae.oneFromBoc("B5EE9C724101010100710000DEFF0020DD2082014C97BA218201339CBAB19F71B0ED44D0D31FD31F31D70BFFE304E0A4F2608308D71820D31FD31FD31FF82313BBF263ED44D0D31FD31FD3FFD15132BAF2A15144BAF2A204F901541055F910F2A3F8009320D74A96D307D402FB00E8D101A4C8CB1FCB1FCBFFC9ED5410BD6DAD"), super(t, e), this.options.walletId || (this.options.walletId = 698983191 + this.options.wc)
  }
  getName() {
    return "v3R2"
  }
};
yr.parseTransferQuery = Gs;
yr.parseTransferBody = Qs;
var Co = {
  WalletV3ContractR1: Ar,
  WalletV3ContractR2: yr
};
const {
  Cell: Ge
} = _, {
  WalletContract: wo
} = Kt, {
  parseWalletV3TransferQuery: go,
  parseWalletV3TransferBody: Bo
} = Fr;
let pr = class extends wo {
  constructor(t, e) {
    e.code = Ge.oneFromBoc("B5EE9C72410215010002F5000114FF00F4A413F4BCF2C80B010201200203020148040504F8F28308D71820D31FD31FD31F02F823BBF263ED44D0D31FD31FD3FFF404D15143BAF2A15151BAF2A205F901541064F910F2A3F80024A4C8CB1F5240CB1F5230CBFF5210F400C9ED54F80F01D30721C0009F6C519320D74A96D307D402FB00E830E021C001E30021C002E30001C0039130E30D03A4C8CB1F12CB1FCBFF1112131403EED001D0D3030171B0915BE021D749C120915BE001D31F218210706C7567BD228210626C6E63BDB022821064737472BDB0925F03E002FA403020FA4401C8CA07CBFFC9D0ED44D0810140D721F404305C810108F40A6FA131B3925F05E004D33FC8258210706C7567BA9131E30D248210626C6E63BAE30004060708020120090A005001FA00F404308210706C7567831EB17080185005CB0527CF165003FA02F40012CB69CB1F5210CB3F0052F8276F228210626C6E63831EB17080185005CB0527CF1624FA0214CB6A13CB1F5230CB3F01FA02F4000092821064737472BA8E3504810108F45930ED44D0810140D720C801CF16F400C9ED54821064737472831EB17080185004CB0558CF1622FA0212CB6ACB1FCB3F9410345F04E2C98040FB000201200B0C0059BD242B6F6A2684080A06B90FA0218470D4080847A4937D29910CE6903E9FF9837812801B7810148987159F31840201580D0E0011B8C97ED44D0D70B1F8003DB29DFB513420405035C87D010C00B23281F2FFF274006040423D029BE84C600201200F100019ADCE76A26840206B90EB85FFC00019AF1DF6A26840106B90EB858FC0006ED207FA00D4D422F90005C8CA0715CBFFC9D077748018C8CB05CB0222CF165005FA0214CB6B12CCCCC971FB00C84014810108F451F2A702006C810108D718C8542025810108F451F2A782106E6F746570748018C8CB05CB025004CF16821005F5E100FA0213CB6A12CB1FC971FB00020072810108D718305202810108F459F2A7F82582106473747270748018C8CB05CB025005CF16821005F5E100FA0214CB6A13CB1F12CB3FC973FB00000AF400C9ED5446A9F34F"), super(t, e), this.options.walletId || (this.options.walletId = 698983191 + this.options.wc), this.methods.getPublicKey = this.getPublicKey.bind(this)
  }
  getName() {
    return "v4R1"
  }
  createSigningMessage(t, e, s) {
    t = t || 0, e = e || Math.floor(Date.now() / 1e3) + 60;
    const l = new Ge;
    if (l.bits.writeUint(this.options.walletId, 32), t === 0)
      for (let n = 0; n < 32; n++) l.bits.writeBit(1);
    else l.bits.writeUint(e, 32);
    return l.bits.writeUint(t, 32), s || l.bits.writeUint(0, 8), l
  }
  createDataCell() {
    const t = new Ge;
    return t.bits.writeUint(0, 32), t.bits.writeUint(this.options.walletId, 32), t.bits.writeBytes(this.options.publicKey), t.bits.writeUint(0, 1), t
  }
  async getPublicKey() {
    const t = await this.getAddress();
    return this.provider.call2(t.toString(), "get_public_key")
  }
};
pr.parseTransferQuery = go;
pr.parseTransferBody = Bo;
var Fo = {
  WalletV4ContractR1: pr
};
const {
  Cell: Qe
} = _, {
  Contract: Ze
} = yt, {
  Address: jr,
  bytesToHex: Ao,
  BN: Oc,
  toNano: yo
} = x, {
  WalletContract: po
} = Kt, {
  parseWalletV3TransferQuery: mo,
  parseWalletV3TransferBody: bo
} = Fr;
let mr = class extends po {
  constructor(t, e) {
    e.code = Qe.oneFromBoc("B5EE9C72410214010002D4000114FF00F4A413F4BCF2C80B010201200203020148040504F8F28308D71820D31FD31FD31F02F823BBF264ED44D0D31FD31FD3FFF404D15143BAF2A15151BAF2A205F901541064F910F2A3F80024A4C8CB1F5240CB1F5230CBFF5210F400C9ED54F80F01D30721C0009F6C519320D74A96D307D402FB00E830E021C001E30021C002E30001C0039130E30D03A4C8CB1F12CB1FCBFF1011121302E6D001D0D3032171B0925F04E022D749C120925F04E002D31F218210706C7567BD22821064737472BDB0925F05E003FA403020FA4401C8CA07CBFFC9D0ED44D0810140D721F404305C810108F40A6FA131B3925F07E005D33FC8258210706C7567BA923830E30D03821064737472BA925F06E30D06070201200809007801FA00F40430F8276F2230500AA121BEF2E0508210706C7567831EB17080185004CB0526CF1658FA0219F400CB6917CB1F5260CB3F20C98040FB0006008A5004810108F45930ED44D0810140D720C801CF16F400C9ED540172B08E23821064737472831EB17080185005CB055003CF1623FA0213CB6ACB1FCB3FC98040FB00925F03E20201200A0B0059BD242B6F6A2684080A06B90FA0218470D4080847A4937D29910CE6903E9FF9837812801B7810148987159F31840201580C0D0011B8C97ED44D0D70B1F8003DB29DFB513420405035C87D010C00B23281F2FFF274006040423D029BE84C600201200E0F0019ADCE76A26840206B90EB85FFC00019AF1DF6A26840106B90EB858FC0006ED207FA00D4D422F90005C8CA0715CBFFC9D077748018C8CB05CB0222CF165005FA0214CB6B12CCCCC973FB00C84014810108F451F2A7020070810108D718FA00D33FC8542047810108F451F2A782106E6F746570748018C8CB05CB025006CF165004FA0214CB6A12CB1FCB3FC973FB0002006C810108D718FA00D33F305224810108F459F2A782106473747270748018C8CB05CB025005CF165003FA0213CB6ACB1F12CB3FC973FB00000AF400C9ED54696225E5"), super(t, e), this.options.walletId || (this.options.walletId = 698983191 + this.options.wc), this.methods.deployAndInstallPlugin = s => Ze.createMethod(t, this.deployAndInstallPlugin(s)), this.methods.installPlugin = s => Ze.createMethod(t, this.installPlugin(s)), this.methods.removePlugin = s => Ze.createMethod(t, this.removePlugin(s)), this.methods.getPublicKey = this.getPublicKey.bind(this), this.methods.getWalletId = this.getWalletId.bind(this), this.methods.isPluginInstalled = this.isPluginInstalled.bind(this), this.methods.getPluginsList = this.getPluginsList.bind(this)
  }
  getName() {
    return "v4R2"
  }
  createSigningMessage(t, e, s) {
    t = t || 0, e = e || Math.floor(Date.now() / 1e3) + 60;
    const l = new Qe;
    if (l.bits.writeUint(this.options.walletId, 32), t === 0)
      for (let n = 0; n < 32; n++) l.bits.writeBit(1);
    else l.bits.writeUint(e, 32);
    return l.bits.writeUint(t, 32), s || l.bits.writeUint(0, 8), l
  }
  createDataCell() {
    const t = new Qe;
    return t.bits.writeUint(0, 32), t.bits.writeUint(this.options.walletId, 32), t.bits.writeBytes(this.options.publicKey), t.bits.writeUint(0, 1), t
  }
  async deployAndInstallPlugin(t) {
    const {
      secretKey: e,
      seqno: s,
      pluginWc: l,
      amount: n,
      stateInit: g,
      body: F,
      expireAt: A
    } = t, y = this.createSigningMessage(s, A, !0);
    return y.bits.writeUint(1, 8), y.bits.writeInt(l, 8), y.bits.writeGrams(n), y.refs.push(g), y.refs.push(F), this.createExternalMessage(y, e, s, !1)
  }
  async _setPlugin(t, e) {
    const {
      secretKey: s,
      seqno: l,
      amount: n,
      queryId: g,
      expireAt: F
    } = t, A = new jr(t.pluginAddress), y = this.createSigningMessage(l, F, !0);
    return y.bits.writeUint(e ? 2 : 3, 8), y.bits.writeInt(A.wc, 8), y.bits.writeBytes(A.hashPart), y.bits.writeGrams(n || yo("0.1")), y.bits.writeUint(g || 0, 64), this.createExternalMessage(y, s, l, !1)
  }
  async installPlugin(t) {
    return this._setPlugin(t, !0)
  }
  async removePlugin(t) {
    return this._setPlugin(t, !1)
  }
  async getWalletId() {
    const t = await this.getAddress();
    return (await this.provider.call2(t.toString(), "get_subwallet_id")).toNumber()
  }
  async getPublicKey() {
    const t = await this.getAddress();
    return this.provider.call2(t.toString(), "get_public_key")
  }
  async isPluginInstalled(t) {
    t = new jr(t);
    const e = "0x" + Ao(t.hashPart),
      s = await this.getAddress();
    return !(await this.provider.call2(s.toString(), "is_plugin_installed", [
      ["num", t.wc],
      ["num", e]
    ])).isZero()
  }
  async getPluginsList() {
    const t = l => l[0].toNumber() + ":" + l[1].toString(16),
      e = await this.getAddress();
    return (await this.provider.call2(e.toString(), "get_plugin_list")).map(t)
  }
};
mr.parseTransferQuery = mo;
mr.parseTransferBody = bo;
var Eo = {
  WalletV4ContractR2: mr
};
const {
  SimpleWalletContractR1: Ys,
  SimpleWalletContractR2: Xs,
  SimpleWalletContractR3: Js
} = oo, {
  WalletV2ContractR1: js,
  WalletV2ContractR2: zs
} = ho, {
  WalletV3ContractR1: ti,
  WalletV3ContractR2: ei
} = Co, {
  WalletV4ContractR1: ri
} = Fo, {
  WalletV4ContractR2: si
} = Eo, ii = {
  simpleR1: Ys,
  simpleR2: Xs,
  simpleR3: Js,
  v2R1: js,
  v2R2: zs,
  v3R1: ti,
  v3R2: ei,
  v4R1: ri,
  v4R2: si
}, ni = [Ys, Xs, Js, js, zs, ti, ei, ri, si];
let br = class {
  constructor(t) {
    this.provider = t, this.all = ii, this.list = ni, this.defaultVersion = "v3R1", this.default = this.all[this.defaultVersion]
  }
  create(t) {
    return new this.default(this.provider, t)
  }
};
br.all = ii;
br.list = ni;
Ks.default = br;
var oi = {};
const {
  Cell: ae
} = _, {
  Address: qc,
  BN: Vc,
  base64ToBytes: zr
} = x, {
  WalletContract: vo
} = Kt, ai = 698983191;
let li = class extends vo {
  constructor(t, e) {
    e.code = ae.oneFromBoc("B5EE9C7241021E01000261000114FF00F4A413F4BCF2C80B010201200203020148040501F2F28308D71820D31FD31FD31F802403F823BB13F2F2F003802251A9BA1AF2F4802351B7BA1BF2F4801F0BF9015410C5F9101AF2F4F8005057F823F0065098F823F0062071289320D74A8E8BD30731D4511BDB3C12B001E8309229A0DF72FB02069320D74A96D307D402FB00E8D103A4476814154330F004ED541D0202CD0607020120131402012008090201200F100201200A0B002D5ED44D0D31FD31FD3FFD3FFF404FA00F404FA00F404D1803F7007434C0C05C6C2497C0F83E900C0871C02497C0F80074C7C87040A497C1383C00D46D3C00608420BABE7114AC2F6C2497C338200A208420BABE7106EE86BCBD20084AE0840EE6B2802FBCBD01E0C235C62008087E4055040DBE4404BCBD34C7E00A60840DCEAA7D04EE84BCBD34C034C7CC0078C3C412040DD78CA00C0D0E00130875D27D2A1BE95B0C60000C1039480AF00500161037410AF0050810575056001010244300F004ED540201201112004548E1E228020F4966FA520933023BB9131E2209835FA00D113A14013926C21E2B3E6308003502323287C5F287C572FFC4F2FFFD00007E80BD00007E80BD00326000431448A814C4E0083D039BE865BE803444E800A44C38B21400FE809004E0083D10C06002012015160015BDE9F780188242F847800C02012017180201481B1C002DB5187E006D88868A82609E00C6207E00C63F04EDE20B30020158191A0017ADCE76A268699F98EB85FFC00017AC78F6A268698F98EB858FC00011B325FB513435C2C7E00017B1D1BE08E0804230FB50F620002801D0D3030178B0925B7FE0FA4031FA403001F001A80EDAA4"), super(t, e), this.options.walletId || (this.options.walletId = ai + this.options.wc), this.methods.getPublicKey = this.getPublicKey.bind(this), this.methods.getWalletId = this.getWalletId.bind(this), this.methods.getLiquidBalance = this.getLiquidBalance.bind(this), this.methods.getNominalRestrictedBalance = this.getNominalRestrictedBalance.bind(this), this.methods.getNominalLockedBalance = this.getNominalLockedBalance.bind(this)
  }
  getName() {
    return "lockup-0.1"
  }
  createSigningMessage(t, e, s) {
    t = t || 0, e = e || Math.floor(Date.now() / 1e3) + 60;
    const l = new ae;
    if (l.bits.writeUint(this.options.walletId, 32), t === 0)
      for (let n = 0; n < 32; n++) l.bits.writeBit(1);
    else l.bits.writeUint(e, 32);
    return l.bits.writeUint(t, 32), l
  }
  createDataCell() {
    const t = new ae;
    return t.bits.writeUint(0, 32), t.bits.writeUint(this.options.walletId, 32), t.bits.writeBytes(this.options.publicKey), t.bits.writeBytes(zr(this.options.config.config_public_key)), this.options.config.allowed_destinations ? (t.bits.writeUint(1, 1), t.refs.push(ae.oneFromBoc(zr(this.options.config.allowed_destinations)))) : t.bits.writeUint(0, 1), t.bits.writeGrams(0), t.bits.writeUint(0, 1), t.bits.writeGrams(0), t.bits.writeUint(0, 1), t
  }
  async getWalletId() {
    const t = await this.getAddress();
    return (await this.provider.call2(t.toString(), "get_subwallet_id")).toNumber()
  }
  async getPublicKey() {
    const t = await this.getAddress();
    return this.provider.call2(t.toString(), "get_public_key")
  }
  async getLiquidBalance() {
    const t = await this.getBalances();
    return t[0] - t[1] - t[2]
  }
  async getNominalRestrictedBalance() {
    return await this.getBalances()[1]
  }
  async getNominalLockedBalance() {
    return await this.getBalances()[2]
  }
  async getBalances() {
    const t = await this.getAddress();
    return this.provider.call2(t.toString(), "get_balances")
  }
};
li.WALLET_ID_BASE = ai;
var Do = {
  LockupWalletV1: li
};
const {
  Address: Mo
} = x, {
  Cell: _o
} = _, So = 0, xo = 1, Io = 0, Er = 1, ci = a => new TextEncoder().encode(encodeURI(a)), hi = a => new TextDecoder().decode(a), Uo = a => {
  const t = new _o;
  return t.bits.writeUint(Er, 8), t.bits.writeBytes(ci(a)), t
}, To = a => {
  if (a.bits.array[0] !== Er) throw new Error("no OFFCHAIN_CONTENT_PREFIX");
  let t = 0,
    e = a;
  for (; e;) t += e.bits.array.length, e = e.refs[0];
  const s = new Uint8Array(t);
  for (t = 0, e = a; e;) s.set(e.bits.array, t), t += e.bits.array.length, e = e.refs[0];
  return hi(s.slice(1))
}, ts = (a, t, e) => {
  let s = BigInt(0);
  for (let l = 0; l < e; l++) s *= BigInt(2), s += BigInt(a.get(t + l));
  return s
}, di = a => {
  let t = ts(a.bits, 3, 8);
  t > BigInt(127) && (t = t - BigInt(256));
  const e = ts(a.bits, 11, 256);
  if (t.toString(10) + ":" + e.toString(16) == "0:0") return null;
  const s = t.toString(10) + ":" + e.toString(16).padStart(64, "0");
  return new Mo(s)
}, No = async (a, t) => {
  const e = await a.call2(t, "royalty_params"),
    s = e[0].toNumber(),
    l = e[1].toNumber(),
    n = s / l,
    g = di(e[2]);
  return {
    royalty: n,
    royaltyBase: l,
    royaltyFactor: s,
    royaltyAddress: g
  }
};
var Et = {
  SNAKE_DATA_PREFIX: So,
  CHUNK_DATA_PREFIX: xo,
  ONCHAIN_CONTENT_PREFIX: Io,
  OFFCHAIN_CONTENT_PREFIX: Er,
  parseAddress: di,
  serializeUri: ci,
  parseUri: hi,
  createOffchainUriCell: Uo,
  parseOffchainUriCell: To,
  getRoyaltyParams: No
};
const {
  Cell: Wt
} = _, {
  Address: jt,
  BN: It,
  bytesToHex: $o
} = x, {
  WalletContract: Ro
} = Kt, {
  parseAddress: es
} = Et, {
  Contract: ko
} = yt, fi = 268, ui = "b5ee9c7241021c010003fb000114ff00f4a413f4bcf2c80b01020120030203b8f28308d71820d31fd31fd31f02f823bbf264ed44d0d31fd31fd3ff305abaf2a15033baf2a202f9014033f910f2a3f800db3c20d74ac0018e99ed44ed45ed47915bed67ed65ed648e82db3ced41edf101f2ff9130e2f841a4f861db3c1b1413020148110402012008050201200706020db9846db3cdb3c81b1a0129ba462db3cf845f846f847f848f849f84af84bf84481b0201200e090201620d0a02016a0c0b012fa2c76cf3e9100723281f2fff2743e112040423d029be84c61b000fa25fb513435c2c7e014bad346d9e36fc22470d4080847a4937d29910ce6903e9ff9837812801b7810148987159f318401b02016e100f0019af1df6a26840106b90eb858fc00019adce76a26840206b90eb85ffc003acd06c2220d749c160915be001d0d3030171b0915be0fa4030db3c01d31fd33ff84b5240c705238210a7733acdbab08ea46c12db3c8210f7733acd01708018c8cb055004cf1623fa0213cb6acb1fcb3fc98040fb00e30e1b141201cef84a5240c7050382107258a69bba13b08ed18e2c01fa407fc8ca0002fa4401c8ca07cbffc9d0f8441023810108f441f86420d74ac200209501d430d001deb312e68210f258a69b32708018c8cb055004cf1623fa0213cb6acb1fcb3fc98040fb00db3c925f03e2130066f848f847f846f845c8cb3fcb1fcb1fcb1ff849fa02f84acf16f84bcf16c9f844f843f842f841c8cb1fcb1fcbfff400ccc9ed54025cd307d4d1f823db3c20c2008e9b22c003f2e06421d0d303fa4031fa40f84a5220c705b3925f04e30d9130e201fb001a1503fa21fa4401c8ca07cbffc9d0f844810108f40a6fa1318f5f330172b0c002f2e06501fa003171d721fa0031fa0031d33f31d31f31d30001c000f2e066d3000193d430d0de2171db3c8e2a31d31f302082104e73744bba21821047657424bab121821056744370bab1018210566f7465bab1f2e067e30e70925f03e220c200191716000e9372fb029130e202ea0170db3c8e6d20d749c2008e63d31f21c00022830bbab122811001bab122821047d54391bab1228210595f07bcbab122821069fb306cbab1228210566f7465bab122821056744370bab1f2e06701c00021d749c200b08e15d3073020c06421c077b121c044b101c057b1f2e0689130e29130e2e30d1918001ad31f308210566f7465baf2e067004401fa4401c3ff925b70e001f833206e925b70e0d020d7498307b9925b70e0d70bffba0060f845f846a05210bc923070e0f845f848a05210b99330f849e0f849f849f84513a1f847a904f846f847a9041023a984a1007eed44d0d31f01f861d31f01f862d3ff01f863f40401f864d401d0d33f01f865d31f01f866d31f01f867d31f01f868fa0001f869fa4001f86afa4001f86bd1d10a20c6a7";
let vr = class extends Ro {
  constructor(t, e) {
    e.code = Wt.oneFromBoc(ui), super(t, e), this.options.walletId || (this.options.walletId = fi + this.options.wc), this.methods.getPublicKey = this.getPublicKey.bind(this), this.methods.getWalletId = this.getWalletId.bind(this), this.methods.getLockedAmount = this.getLockedAmount.bind(this), this.methods.getVestingData = this.getVestingData.bind(this), this.methods.getWhitelist = this.getWhitelist.bind(this)
  }
  getName() {
    return "vesting-1"
  }
  createSigningMessage(t, e, s) {
    t = t || 0, e = e || Math.floor(Date.now() / 1e3) + 60;
    const l = new Wt;
    if (l.bits.writeUint(this.options.walletId, 32), t === 0)
      for (let n = 0; n < 32; n++) l.bits.writeBit(1);
    else l.bits.writeUint(e, 32);
    return l.bits.writeUint(t, 32), l
  }
  createDataCell() {
    if (this.options.walletId !== 0 && !this.options.walletId) throw new Error("no walletId");
    if (!this.options.publicKey) throw new Error("no publicKey");
    if (!(this.options.publicKey instanceof Uint8Array)) throw new Error("publicKey not Uint8Array");
    if (this.options.vestingStartTime !== 0 && !this.options.vestingStartTime) throw new Error("no vestingStartTime");
    if (this.options.vestingTotalDuration <= 0) throw new Error("vestingTotalDuration cant be zero or negative");
    if (!this.options.vestingTotalDuration) throw new Error("no vestingTotalDuration");
    if (this.options.vestingTotalDuration > 2 ** 32 - 1) throw new Error("vestingTotalDuration > 2^32 - 1");
    if (this.options.unlockPeriod <= 0) throw new Error("unlockPeriod cant be zero or negative");
    if (!this.options.unlockPeriod) throw new Error("no unlockPeriod");
    if (this.options.unlockPeriod > this.options.vestingTotalDuration) throw new Error("unlockPeriod > vestingTotalDuration");
    if (this.options.cliffDuration !== 0 && !this.options.cliffDuration) throw new Error("no cliffDuration");
    if (this.options.cliffDuration < 0) throw new Error("cliffDuration cant be negative");
    if (this.options.cliffDuration >= this.options.vestingTotalDuration) throw new Error("cliffDuration >= vestingTotalDuration");
    if (!new It(this.options.vestingTotalDuration).div(new It(this.options.unlockPeriod)).mul(new It(this.options.unlockPeriod)).eq(new It(this.options.vestingTotalDuration))) throw new Error("vestingTotalDuration mod unlockPeriod != 0");
    if (!new It(this.options.cliffDuration).div(new It(this.options.unlockPeriod)).mul(new It(this.options.unlockPeriod)).eq(new It(this.options.cliffDuration))) throw new Error("cliffDuration mod unlockPeriod != 0");
    if (!this.options.vestingTotalAmount) throw new Error("no vestingTotalAmount");
    if (!this.options.vestingTotalAmount.gt(new It(0))) throw new Error("vestingTotalAmount cant be zero");
    if (!this.options.vestingSenderAddress) throw new Error("no vestingSenderAddress");
    if (!(this.options.vestingSenderAddress instanceof jt)) throw new Error("vestingSenderAddress not Address");
    if (!this.options.ownerAddress) throw new Error("no ownerAddress");
    if (!(this.options.ownerAddress instanceof jt)) throw new Error("ownerAddress not Address");
    const s = new Wt;
    s.bits.writeUint(0, 32), s.bits.writeUint(this.options.walletId, 32), s.bits.writeUint(new It($o(this.options.publicKey), 16), 256), s.bits.writeBit(!1);
    const l = new Wt;
    return l.bits.writeUint(this.options.vestingStartTime, 64), l.bits.writeUint(this.options.vestingTotalDuration, 32), l.bits.writeUint(this.options.unlockPeriod, 32), l.bits.writeUint(this.options.cliffDuration, 32), l.bits.writeCoins(this.options.vestingTotalAmount), l.bits.writeAddress(new jt(this.options.vestingSenderAddress)), l.bits.writeAddress(new jt(this.options.ownerAddress)), s.refs[0] = l, s
  }
  createAddWhitelistBody(t) {
    const {
      addresses: e,
      queryId: s
    } = t, l = new Wt;
    l.bits.writeUint(1918412443, 32), l.bits.writeUint(s || 0, 64), l.bits.writeAddress(e[0]);
    let n = null;
    for (let g = e.length - 1; g >= 1; g--) {
      const F = new Wt;
      F.bits.writeAddress(e[g]), n && (F.refs[0] = n), n = F
    }
    return n && (l.refs[0] = n), l
  }
  createInternalTransfer(t) {
    const e = new Wt;
    return e.bits.writeUint(2809346765, 32), e.bits.writeUint(t.queryId || 0, 64), e.bits.writeUint8(t.sendMode || 3), e.refs.push(ko.createOutMsg(t.address, t.amount, t.payload)), e
  }
  async getPublicKey() {
    const t = await this.getAddress();
    return this.provider.call2(t.toString(), "get_public_key")
  }
  async getWalletId() {
    const t = await this.getAddress();
    return this.provider.call2(t.toString(), "get_subwallet_id")
  }
  async getLockedAmount(t) {
    const e = await this.getAddress();
    return this.provider.call2(e.toString(), "get_locked_amount", [
      ["num", t]
    ])
  }
  async getVestingData() {
    const t = await this.getAddress(),
      e = await this.provider.call2(t.toString(), "get_vesting_data"),
      s = e[0].toNumber(),
      l = e[1].toNumber(),
      n = e[2].toNumber(),
      g = e[3].toNumber(),
      F = e[4],
      A = es(e[5]),
      y = es(e[6]),
      p = e[7];
    return {
      vestingStartTime: s,
      vestingTotalDuration: l,
      unlockPeriod: n,
      cliffDuration: g,
      vestingTotalAmount: F,
      vestingSenderAddress: A,
      ownerAddress: y,
      whitelistCell: p
    }
  }
  async getWhitelist() {
    const t = await this.getAddress(),
      e = await this.provider.call2(t.toString(), "get_whitelist"),
      s = [];
    for (const l of e) {
      if (l.length !== 2) throw new Error("invalid whitelist result");
      const n = l[0],
        g = l[1],
        F = new jt(n.toString(10) + ":" + g.toString(16).padStart(64, "0"));
      s.push(F)
    }
    return s
  }
};
vr.WALLET_ID_BASE = fi;
vr.codeHex = ui;
var Po = {
  VestingWalletV1: vr
};
const {
  LockupWalletV1: Ye
} = Do, {
  VestingWalletV1: Xe
} = Po;
oi.default = {
  LockupWalletV1: Ye,
  VestingWalletV1: Xe,
  all: {
    "lockup-0.1": Ye,
    "vesting-1": Xe
  },
  list: [Ye, Xe]
};
var Ci = {};
const {
  Cell: le
} = _, {
  Contract: zt
} = yt, {
  Address: Zc,
  BN: Yc,
  nacl: rs
} = x, wi = "b5ee9c7241021001000228000114ff00f4a413f4bcf2c80b01020120020d02014803040078d020d74bc00101c060b0915be101d0d3030171b0915be0fa4030f828c705b39130e0d31f018210ae42e5a4ba9d8040d721d74cf82a01ed55fb04e030020120050a02027306070011adce76a2686b85ffc00201200809001aabb6ed44d0810122d721d70b3f0018aa3bed44d08307d721d70b1f0201200b0c001bb9a6eed44d0810162d721d70b15800e5b8bf2eda2edfb21ab09028409b0ed44d0810120d721f404f404d33fd315d1058e1bf82325a15210b99f326df82305aa0015a112b992306dde923033e2923033e25230800df40f6fa19ed021d721d70a00955f037fdb31e09130e259800df40f6fa19cd001d721d70a00937fdb31e0915be270801f6f2d48308d718d121f900ed44d0d3ffd31ff404f404d33fd315d1f82321a15220b98e12336df82324aa00a112b9926d32de58f82301de541675f910f2a106d0d31fd4d307d30cd309d33fd315d15168baf2a2515abaf2a6f8232aa15250bcf2a304f823bbf2a35304800df40f6fa199d024d721d70a00f2649130e20e01fe5309800df40f6fa18e13d05004d718d20001f264c858cf16cf8301cf168e1030c824cf40cf8384095005a1a514cf40e2f800c94039800df41704c8cbff13cb1ff40012f40012cb3f12cb15c9ed54f80f21d0d30001f265d3020171b0925f03e0fa4001d70b01c000f2a5fa4031fa0031f401fa0031fa00318060d721d300010f0020f265d2000193d431d19130e272b1fb00b585bf03", gi = 4269, Je = a => {
  if (!a) throw new Error("invalid timeout");
  if (a < 60 * 10) throw new Error("minimum timeout 10 minute");
  if (a > 60 * 60 * 24 * 30) throw new Error("maximum timeout 30 days")
};
let Dr = class extends zt {
  constructor(t, e) {
    if (e.wc) throw new Error("only basechain (wc = 0) supported");
    if (e.wc = 0, !e.address) {
      if (!e.publicKey) throw new Error("no publicKey");
      if (!(e.publicKey instanceof Uint8Array)) throw new Error("publicKey not Uint8Array");
      Je(e.timeout)
    }
    e.code = le.oneFromBoc(wi), super(t, e), this.options.walletId || (this.options.walletId = gi), this.methods = {
      transfer: s => zt.createMethod(t, this.createTransferMessage(s.secretKey, s.toAddress, s.amount, s.queryId, s.payload, s.sendMode, s.createdAt, s.needDeploy))
    }, this.methods.getPublicKey = this.getPublicKey.bind(this), this.methods.getWalletId = this.getWalletId.bind(this), this.methods.getLastCleanTime = this.getLastCleanTime.bind(this), this.methods.getTimeout = this.getTimeout.bind(this), this.methods.isProcessed = this.isProcessed.bind(this)
  }
  getName() {
    return "highload-3"
  }
  createDataCell() {
    if (this.options.walletId !== 0 && !this.options.walletId) throw new Error("no walletId");
    if (!this.options.publicKey) throw new Error("no publicKey");
    if (!(this.options.publicKey instanceof Uint8Array)) throw new Error("publicKey not Uint8Array");
    Je(this.options.timeout);
    const t = new le;
    return t.bits.writeBytes(this.options.publicKey), t.bits.writeUint(this.options.walletId, 32), t.bits.writeUint(0, 1), t.bits.writeUint(0, 1), t.bits.writeUint(0, 64), t.bits.writeUint(this.options.timeout, 22), t
  }
  createSigningMessage(t, e, s, l) {
    if (isNaN(s) || s === void 0 || s === null) throw new Error("invalid sendMode");
    if (isNaN(e) || e === void 0 || e === null) throw new Error("invalid createdAt");
    Je(this.options.timeout);
    const n = new le;
    return n.bits.writeUint(this.options.walletId, 32), n.refs.push(l), n.bits.writeUint(s, 8), n.bits.writeUint(Number(t.getShift()), 13), n.bits.writeUint(Number(t.getBitNumber()), 10), n.bits.writeUint(e, 64), n.bits.writeUint(this.options.timeout, 22), n
  }
  async createTransferMessage(t, e, s, l, n = "", g = 3, F, A = !1) {
    if (l == null) throw new Error("queryId must be number >= 0");
    if (F == null || F < 0) throw new Error("createAt must be number >= 0");
    g == null && (g = 3);
    const y = zt.createOutMsg(e, s, n),
      p = this.createSigningMessage(l, F, g, y);
    return this.createExternalMessage(p, t, A)
  }
  async createExternalMessage(t, e, s) {
    const l = rs.sign.detached(await t.hash(), e),
      n = new le;
    n.bits.writeBytes(l), n.refs.push(t);
    let g = null,
      F = null,
      A = null;
    if (s) {
      if (!this.options.publicKey) {
        const T = rs.sign.keyPair.fromSecretKey(e);
        this.options.publicKey = T.publicKey
      }
      const v = await this.createStateInit();
      g = v.stateInit, F = v.code, A = v.data
    }
    const y = await this.getAddress(),
      p = zt.createExternalMessageHeader(y),
      M = zt.createCommonMsgInfo(p, g, n);
    return {
      address: y,
      message: M,
      body: n,
      signature: l,
      signingMessage: t,
      stateInit: g,
      code: F,
      data: A
    }
  }
  async getWalletId() {
    const t = await this.getAddress();
    return (await this.provider.call2(t.toString(), "get_subwallet_id")).toNumber()
  }
  async getPublicKey() {
    const t = await this.getAddress();
    return this.provider.call2(t.toString(), "get_public_key")
  }
  async getLastCleanTime() {
    const t = await this.getAddress();
    return (await this.provider.call2(t.toString(), "get_last_clean_time")).toNumber()
  }
  async getTimeout() {
    const t = await this.getAddress();
    return (await this.provider.call2(t.toString(), "get_timeout")).toNumber()
  }
  async isProcessed(t, e) {
    const s = await this.getAddress();
    return !(await this.provider.call2(s.toString(), "processed?", [
      ["num", t.getQueryId().toString()],
      ["num", e ? "-1" : "0"]
    ])).isZero()
  }
};
Dr.WALLET_ID_BASE = gi;
Dr.codeHex = wi;
var Wo = {
  HighloadWalletContractV3: Dr
};
const ss = 10n,
  ce = 1022n,
  he = 8191n;
let Lo = class lr {
  constructor() {
    this.shift = 0n, this.bitnumber = 0n
  }
  static fromShiftAndBitNumber(t, e) {
    const s = new lr;
    if (s.shift = t, s.shift < 0) throw new Error("invalid shift");
    if (s.shift > he) throw new Error("invalid shift");
    if (s.bitnumber = e, s.bitnumber < 0) throw new Error("invalid bitnumber");
    if (s.bitnumber > ce) throw new Error("invalid bitnumber");
    return s
  }
  getNext() {
    let t = this.bitnumber + 1n,
      e = this.shift;
    if (e === he && t > ce - 1n) throw new Error("Overload");
    if (t > ce && (t = 0n, e += 1n, e > he)) throw new Error("Overload");
    return lr.fromShiftAndBitNumber(e, t)
  }
  hasNext() {
    return !(this.bitnumber >= ce - 1n && this.shift === he)
  }
  getShift() {
    return this.shift
  }
  getBitNumber() {
    return this.bitnumber
  }
  getQueryId() {
    return (this.shift << ss) + this.bitnumber
  }
  static fromQueryId(t) {
    const e = t >> ss,
      s = t & 1023n;
    return this.fromShiftAndBitNumber(e, s)
  }
  static fromSeqno(t) {
    const e = t / 1023n,
      s = t % 1023n;
    return this.fromShiftAndBitNumber(e, s)
  }
  toSeqno() {
    return this.bitnumber + this.shift * 1023n
  }
};
var Oo = {
  HighloadQueryId: Lo
};
const {
  HighloadWalletContractV3: je
} = Wo, {
  HighloadQueryId: Ho
} = Oo;
Ci.default = {
  HighloadQueryId: Ho,
  HighloadWalletContractV3: je,
  all: {
    "highload-3": je
  },
  list: [je]
};
var Bi = {};
const {
  Contract: Ko
} = yt, {
  Cell: Mt
} = _, {
  Address: Jc,
  bytesToBase64: qo,
  BN: Vo
} = x, {
  parseAddress: is
} = Et, {
  createOffchainUriCell: Go,
  serializeUri: ns,
  parseOffchainUriCell: os,
  getRoyaltyParams: Qo
} = Et;
let Zo = class extends Ko {
  constructor(t, e) {
    if (e.wc = 0, e.code = e.code || Mt.oneFromBoc("B5EE9C724102140100021F000114FF00F4A413F4BCF2C80B0102016202030202CD04050201200E0F04E7D10638048ADF000E8698180B8D848ADF07D201800E98FE99FF6A2687D20699FEA6A6A184108349E9CA829405D47141BAF8280E8410854658056B84008646582A802E78B127D010A65B509E58FE59F80E78B64C0207D80701B28B9E382F970C892E000F18112E001718112E001F181181981E0024060708090201200A0B00603502D33F5313BBF2E1925313BA01FA00D43028103459F0068E1201A44343C85005CF1613CB3FCCCCCCC9ED54925F05E200A6357003D4308E378040F4966FA5208E2906A4208100FABE93F2C18FDE81019321A05325BBF2F402FA00D43022544B30F00623BA9302A402DE04926C21E2B3E6303250444313C85005CF1613CB3FCCCCCCC9ED54002C323401FA40304144C85005CF1613CB3FCCCCCCC9ED54003C8E15D4D43010344130C85005CF1613CB3FCCCCCCC9ED54E05F04840FF2F00201200C0D003D45AF0047021F005778018C8CB0558CF165004FA0213CB6B12CCCCC971FB008002D007232CFFE0A33C5B25C083232C044FD003D0032C03260001B3E401D3232C084B281F2FFF2742002012010110025BC82DF6A2687D20699FEA6A6A182DE86A182C40043B8B5D31ED44D0FA40D33FD4D4D43010245F04D0D431D430D071C8CB0701CF16CCC980201201213002FB5DAFDA89A1F481A67FA9A9A860D883A1A61FA61FF480610002DB4F47DA89A1F481A67FA9A9A86028BE09E008E003E00B01A500C6E"), e.royalty > 1) throw new Error("royalty > 1");
    e.royaltyBase = 1e3, e.royaltyFactor = Math.floor(e.royalty * e.royaltyBase), super(t, e), this.methods.getCollectionData = this.getCollectionData.bind(this), this.methods.getNftItemAddressByIndex = this.getNftItemAddressByIndex.bind(this), this.methods.getNftItemContent = this.getNftItemContent.bind(this), this.methods.getRoyaltyParams = this.getRoyaltyParams.bind(this)
  }
  createContentCell(t) {
    const e = Go(t.collectionContentUri),
      s = new Mt;
    s.bits.writeBytes(ns(t.nftItemContentBaseUri));
    const l = new Mt;
    return l.refs[0] = e, l.refs[1] = s, l
  }
  createRoyaltyCell(t) {
    const e = new Mt;
    return e.bits.writeUint(t.royaltyFactor, 16), e.bits.writeUint(t.royaltyBase, 16), e.bits.writeAddress(t.royaltyAddress), e
  }
  createDataCell() {
    const t = new Mt;
    return t.bits.writeAddress(this.options.ownerAddress), t.bits.writeUint(0, 64), t.refs[0] = this.createContentCell(this.options), t.refs[1] = Mt.oneFromBoc(this.options.nftItemCodeHex), t.refs[2] = this.createRoyaltyCell(this.options), t
  }
  createMintBody(t) {
    const e = new Mt;
    e.bits.writeUint(1, 32), e.bits.writeUint(t.queryId || 0, 64), e.bits.writeUint(t.itemIndex, 64), e.bits.writeCoins(t.amount);
    const s = new Mt;
    s.bits.writeAddress(t.itemOwnerAddress);
    const l = new Mt;
    return l.bits.writeBytes(ns(t.itemContentUri)), s.refs[0] = l, e.refs[0] = s, e
  }
  createGetRoyaltyParamsBody(t) {
    const e = new Mt;
    return e.bits.writeUint(1765620048, 32), e.bits.writeUint(t.queryId || 0, 64), e
  }
  createChangeOwnerBody(t) {
    if (t.newOwnerAddress === void 0) throw new Error("Specify newOwnerAddress");
    const e = new Mt;
    return e.bits.writeUint(3, 32), e.bits.writeUint(t.queryId || 0, 64), e.bits.writeAddress(t.newOwnerAddress), e
  }
  createEditContentBody(t) {
    if (t.royalty > 1) throw new Error("royalty > 1");
    t.royaltyBase = 1e3, t.royaltyFactor = Math.floor(t.royalty * t.royaltyBase);
    const e = new Mt;
    return e.bits.writeUint(4, 32), e.bits.writeUint(t.queryId || 0, 64), e.refs[0] = this.createContentCell(t), e.refs[1] = this.createRoyaltyCell(t), e
  }
  async getCollectionData() {
    const t = await this.getAddress(),
      e = await this.provider.call2(t.toString(), "get_collection_data"),
      s = e[0];
    let l = NaN;
    try {
      l = s.toNumber()
    } catch {}
    const n = e[1];
    let g = null;
    try {
      g = os(n)
    } catch {}
    const F = is(e[2]);
    return {
      nextItemIndex: l,
      itemsCount: s,
      ownerAddress: F,
      collectionContentCell: n,
      collectionContentUri: g
    }
  }
  async getNftItemContent(t) {
    const e = await this.getAddress(),
      s = await t.getData();
    if (s.isInitialized) {
      const l = await this.provider.call2(e.toString(), "get_nft_content", [
        ["num", s.itemIndex.toString(10)],
        ["tvm.Cell", qo(await s.contentCell.toBoc(!1))]
      ]);
      s.contentUri = null;
      try {
        s.contentUri = os(l)
      } catch {}
    }
    return s
  }
  async getNftItemAddressByIndex(t) {
    t = new Vo(t);
    const e = await this.getAddress(),
      s = await this.provider.call2(e.toString(), "get_nft_address_by_index", [
        ["num", t.toString(10)]
      ]);
    return is(s)
  }
  async getRoyaltyParams() {
    const t = await this.getAddress();
    return Qo(this.provider, t.toString())
  }
};
var Yo = {
  NftCollection: Zo
};
const {
  Contract: Xo
} = yt, {
  Cell: de
} = _, {
  Address: zc,
  BN: Jo
} = x, {
  parseAddress: as,
  getRoyaltyParams: jo
} = Et, {
  parseOffchainUriCell: zo
} = Et, Fi = "B5EE9C7241020D010001D0000114FF00F4A413F4BCF2C80B0102016202030202CE04050009A11F9FE00502012006070201200B0C02D70C8871C02497C0F83434C0C05C6C2497C0F83E903E900C7E800C5C75C87E800C7E800C3C00812CE3850C1B088D148CB1C17CB865407E90350C0408FC00F801B4C7F4CFE08417F30F45148C2EA3A1CC840DD78C9004F80C0D0D0D4D60840BF2C9A884AEB8C097C12103FCBC20080900113E910C1C2EBCB8536001F65135C705F2E191FA4021F001FA40D20031FA00820AFAF0801BA121945315A0A1DE22D70B01C300209206A19136E220C2FFF2E192218E3E821005138D91C85009CF16500BCF16712449145446A0708010C8CB055007CF165005FA0215CB6A12CB1FCB3F226EB39458CF17019132E201C901FB00104794102A375BE20A00727082108B77173505C8CBFF5004CF1610248040708010C8CB055007CF165005FA0215CB6A12CB1FCB3F226EB39458CF17019132E201C901FB000082028E3526F0018210D53276DB103744006D71708010C8CB055007CF165005FA0215CB6A12CB1FCB3F226EB39458CF17019132E201C901FB0093303234E25502F003003B3B513434CFFE900835D27080269FC07E90350C04090408F80C1C165B5B60001D00F232CFD633C58073C5B3327B5520BF75041B";
let Ai = class extends Xo {
  constructor(t, e) {
    e.wc = 0, e.code = e.code || de.oneFromBoc(Fi), super(t, e), this.methods.getData = this.getData.bind(this)
  }
  createDataCell() {
    const t = new de;
    return t.bits.writeUint(this.options.index, 64), t.bits.writeAddress(this.options.collectionAddress), t
  }
  async getData() {
    const t = await this.getAddress(),
      e = await this.provider.call2(t.toString(), "get_nft_data"),
      s = e[0].toNumber() === -1,
      l = e[1];
    let n = NaN;
    try {
      n = l.toNumber()
    } catch {}
    const g = as(e[2]),
      F = s ? as(e[3]) : null,
      A = e[4];
    let y = null;
    try {
      y = s && g === null ? zo(A) : null
    } catch {}
    return {
      isInitialized: s,
      index: n,
      itemIndex: l,
      collectionAddress: g,
      ownerAddress: F,
      contentCell: A,
      contentUri: y
    }
  }
  async createTransferBody(t) {
    const e = new de;
    return e.bits.writeUint(1607220500, 32), e.bits.writeUint(t.queryId || 0, 64), e.bits.writeAddress(t.newOwnerAddress), e.bits.writeAddress(t.responseAddress), e.bits.writeBit(!1), e.bits.writeCoins(t.forwardAmount || new Jo(0)), t.forwardPayload ? t.forwardPayload.refs ? (e.bits.writeBit(!0), e.refs.push(t.forwardPayload)) : (e.bits.writeBit(!1), e.bits.writeBytes(t.forwardPayload)) : e.bits.writeBit(!1), e
  }
  createGetStaticDataBody(t) {
    const e = new de;
    return e.bits.writeUint(801842850, 32), e.bits.writeUint(t.queryId || 0, 64), e
  }
  async getRoyaltyParams() {
    const t = await this.getAddress();
    return jo(this.provider, t.toString())
  }
};
Ai.codeHex = Fi;
var ta = {
  NftItem: Ai
};
const {
  Contract: ea
} = yt, {
  Cell: ls
} = _;
let ra = class extends ea {
  constructor(t, e) {
    e.wc = 0, e.code = e.code || ls.oneFromBoc("B5EE9C7241010401006D000114FF00F4A413F4BCF2C80B01020120020300AAD23221C700915BE0D0D3030171B0915BE0FA40ED44D0FA403012C705F2E19101D31F01C0018E2BFA003001D4D43021F90070C8CA07CBFFC9D077748018C8CB05CB0258CF165004FA0213CB6BCCCCC971FB00915BE20004F2308EF7CCE7"), super(t, e)
  }
  createDataCell() {
    const t = new ls;
    return t.bits.writeAddress(this.options.ownerAddress), t
  }
};
var sa = {
  NftMarketplace: ra
};
const {
  Contract: ia
} = yt, {
  Cell: fe
} = _, {
  parseAddress: ue
} = Et, yi = "B5EE9C7241020A010001B4000114FF00F4A413F4BCF2C80B01020120020302014804050004F2300202CD0607002FA03859DA89A1F481F481F481F401A861A1F401F481F4006101F7D00E8698180B8D8492F82707D201876A2687D207D207D207D006A18116BA4E10159C71D991B1B2990E382C92F837028916382F970FA01698FC1080289C6C8895D7970FAE99F98FD2018201A642802E78B2801E78B00E78B00FD016664F6AA701363804C9B081B2299823878027003698FE99F9810E000C92F857010C0801F5D41081DCD650029285029185F7970E101E87D007D207D0018384008646582A804E78B28B9D090D0A85AD08A500AFD010AE5B564B8FD80384008646582AC678B2803FD010B65B564B8FD80384008646582A802E78B00FD0109E5B564B8FD80381041082FE61E8A10C00C646582A802E78B117D010A65B509E58F8A40900C8C0029A3110471036454012F004E032363704C0038E4782103B9ACA0015BEF2E1C95312C70559C705B1F2E1CA702082105FCC3D14218010C8CB055006CF1622FA0215CB6A14CB1F14CB3F21CF1601CF16CA0021FA02CA00C98100A0FB00E05F06840FF2F0002ACB3F22CF1658CF16CA0021FA02CA00C98100A0FB00AECABAD1";
let pi = class extends ia {
  constructor(t, e) {
    e.wc = 0, e.code = e.code || fe.oneFromBoc(yi), super(t, e), this.methods.getData = this.getData.bind(this)
  }
  createDataCell() {
    const t = new fe;
    t.bits.writeAddress(this.options.marketplaceAddress), t.bits.writeAddress(this.options.nftAddress), t.bits.writeAddress(null), t.bits.writeCoins(this.options.fullPrice);
    const e = new fe;
    return e.bits.writeCoins(this.options.marketplaceFee), e.bits.writeAddress(this.options.royaltyAddress), e.bits.writeCoins(this.options.royaltyAmount), t.refs[0] = e, t
  }
  async getData() {
    const t = await this.getAddress(),
      e = await this.provider.call2(t.toString(), "get_sale_data"),
      s = ue(e[0]),
      l = ue(e[1]),
      n = ue(e[2]),
      g = e[3],
      F = e[4],
      A = ue(e[5]),
      y = e[6];
    return {
      marketplaceAddress: s,
      nftAddress: l,
      nftOwnerAddress: n,
      fullPrice: g,
      marketplaceFee: F,
      royaltyAddress: A,
      royaltyAmount: y
    }
  }
  async createCancelBody(t) {
    const e = new fe;
    return e.bits.writeUint(3, 32), e.bits.writeUint(t.queryId || 0, 64), e
  }
};
pi.codeHex = yi;
var na = {
  NftSale: pi
};
const {
  NftCollection: oa
} = Yo, {
  NftItem: aa
} = ta, {
  NftMarketplace: la
} = sa, {
  NftSale: ca
} = na;
Bi.default = {
  NftCollection: oa,
  NftItem: aa,
  NftMarketplace: la,
  NftSale: ca
};
var mi = {};
const {
  Contract: ha
} = yt, {
  Cell: Rt
} = _, {
  createOffchainUriCell: cs,
  parseOffchainUriCell: da,
  parseAddress: hs
} = Et, {
  Address: sh,
  BN: fa,
  bytesToBase64: ua
} = x;
let Ca = class extends ha {
  constructor(t, e) {
    e.wc = 0, e.code = e.code || Rt.oneFromBoc("B5EE9C7241020B010001ED000114FF00F4A413F4BCF2C80B0102016202030202CC040502037A60090A03EFD9910E38048ADF068698180B8D848ADF07D201800E98FE99FF6A2687D007D206A6A18400AA9385D47181A9AA8AAE382F9702480FD207D006A18106840306B90FD001812881A28217804502A906428027D012C678B666664F6AA7041083DEECBEF29385D71811A92E001F1811802600271812F82C207F97840607080093DFC142201B82A1009AA0A01E428027D012C678B00E78B666491646580897A007A00658064907C80383A6465816503E5FFE4E83BC00C646582AC678B28027D0109E5B589666664B8FD80400FE3603FA00FA40F82854120870542013541403C85004FA0258CF1601CF16CCC922C8CB0112F400F400CB00C9F9007074C8CB02CA07CBFFC9D05008C705F2E04A12A1035024C85004FA0258CF16CCCCC9ED5401FA403020D70B01C3008E1F8210D53276DB708010C8CB055003CF1622FA0212CB6ACB1FCB3FC98042FB00915BE200303515C705F2E049FA403059C85004FA0258CF16CCCCC9ED54002E5143C705F2E049D43001C85004FA0258CF16CCCCC9ED54007DADBCF6A2687D007D206A6A183618FC1400B82A1009AA0A01E428027D012C678B00E78B666491646580897A007A00658064FC80383A6465816503E5FFE4E840001FAF16F6A2687D007D206A6A183FAA904051007F09"), super(t, e)
  }
  createDataCell() {
    const t = new Rt;
    return t.bits.writeCoins(0), t.bits.writeAddress(this.options.adminAddress), t.refs[0] = cs(this.options.jettonContentUri), t.refs[1] = Rt.oneFromBoc(this.options.jettonWalletCodeHex), t
  }
  createMintBody(t) {
    const e = new Rt;
    e.bits.writeUint(21, 32), e.bits.writeUint(t.queryId || 0, 64), e.bits.writeAddress(t.destination), e.bits.writeCoins(t.amount);
    const s = new Rt;
    return s.bits.writeUint(395134233, 32), s.bits.writeUint(t.queryId || 0, 64), s.bits.writeCoins(t.jettonAmount), s.bits.writeAddress(null), s.bits.writeAddress(null), s.bits.writeCoins(new fa(0)), s.bits.writeBit(!1), e.refs[0] = s, e
  }
  createChangeAdminBody(t) {
    if (t.newAdminAddress === void 0) throw new Error("Specify newAdminAddress");
    const e = new Rt;
    return e.bits.writeUint(3, 32), e.bits.writeUint(t.queryId || 0, 64), e.bits.writeAddress(t.newAdminAddress), e
  }
  createEditContentBody(t) {
    const e = new Rt;
    return e.bits.writeUint(4, 32), e.bits.writeUint(t.queryId || 0, 64), e.refs[0] = cs(t.jettonContentUri), e
  }
  async getJettonData() {
    const t = await this.getAddress(),
      e = await this.provider.call2(t.toString(), "get_jetton_data"),
      s = e[0],
      l = e[1].toNumber() === -1,
      n = hs(e[2]),
      g = e[3];
    let F = null;
    try {
      F = da(g)
    } catch {}
    const A = e[4];
    return {
      totalSupply: s,
      isMutable: l,
      adminAddress: n,
      jettonContentCell: g,
      jettonContentUri: F,
      jettonWalletCode: A
    }
  }
  async getJettonWalletAddress(t) {
    const e = await this.getAddress(),
      s = new Rt;
    s.bits.writeAddress(t);
    const l = await this.provider.call2(e.toString(), "get_wallet_address", [
      ["tvm.Slice", ua(await s.toBoc(!1))]
    ]);
    return hs(l)
  }
};
var wa = {
  JettonMinter: Ca
};
const {
  Contract: ga
} = yt, {
  Cell: ze
} = _, {
  parseAddress: ds
} = Et, {
  BN: Ba
} = x, bi = "B5EE9C7241021201000328000114FF00F4A413F4BCF2C80B0102016202030202CC0405001BA0F605DA89A1F401F481F481A8610201D40607020148080900BB0831C02497C138007434C0C05C6C2544D7C0FC02F83E903E900C7E800C5C75C87E800C7E800C00B4C7E08403E29FA954882EA54C4D167C0238208405E3514654882EA58C511100FC02780D60841657C1EF2EA4D67C02B817C12103FCBC2000113E910C1C2EBCB853600201200A0B020120101101F500F4CFFE803E90087C007B51343E803E903E90350C144DA8548AB1C17CB8B04A30BFFCB8B0950D109C150804D50500F214013E809633C58073C5B33248B232C044BD003D0032C032483E401C1D3232C0B281F2FFF274013E903D010C7E801DE0063232C1540233C59C3E8085F2DAC4F3208405E351467232C7C6600C03F73B51343E803E903E90350C0234CFFE80145468017E903E9014D6F1C1551CDB5C150804D50500F214013E809633C58073C5B33248B232C044BD003D0032C0327E401C1D3232C0B281F2FFF274140371C1472C7CB8B0C2BE80146A2860822625A020822625A004AD822860822625A028062849F8C3C975C2C070C008E00D0E0F009ACB3F5007FA0222CF165006CF1625FA025003CF16C95005CC2391729171E25008A813A08208989680AA008208989680A0A014BCF2E2C504C98040FB001023C85004FA0258CF1601CF16CCC9ED5400705279A018A182107362D09CC8CB1F5230CB3F58FA025007CF165007CF16C9718018C8CB0524CF165006FA0215CB6A14CCC971FB0010241023000E10491038375F040076C200B08E218210D53276DB708010C8CB055008CF165004FA0216CB6A12CB1F12CB3FC972FB0093356C21E203C85004FA0258CF1601CF16CCC9ED5400DB3B51343E803E903E90350C01F4CFFE803E900C145468549271C17CB8B049F0BFFCB8B0A0822625A02A8005A805AF3CB8B0E0841EF765F7B232C7C572CFD400FE8088B3C58073C5B25C60063232C14933C59C3E80B2DAB33260103EC01004F214013E809633C58073C5B3327B55200083200835C87B51343E803E903E90350C0134C7E08405E3514654882EA0841EF765F784EE84AC7CB8B174CFCC7E800C04E81408F214013E809633C58073C5B3327B55205ECCF23D";
let Ei = class extends ga {
  constructor(t, e) {
    e.wc = 0, e.code = e.code || ze.oneFromBoc(bi), super(t, e)
  }
  async createTransferBody(t) {
    const e = new ze;
    return e.bits.writeUint(260734629, 32), e.bits.writeUint(t.queryId || 0, 64), e.bits.writeCoins(t.jettonAmount), e.bits.writeAddress(t.toAddress), e.bits.writeAddress(t.responseAddress), e.bits.writeBit(!1), e.bits.writeCoins(t.forwardAmount || new Ba(0)), t.forwardPayload ? t.forwardPayload.refs ? (e.bits.writeBit(!0), e.refs.push(t.forwardPayload)) : (e.bits.writeBit(!1), e.bits.writeBytes(t.forwardPayload)) : e.bits.writeBit(!1), e
  }
  async createBurnBody(t) {
    const e = new ze;
    return e.bits.writeUint(1499400124, 32), e.bits.writeUint(t.queryId || 0, 64), e.bits.writeCoins(t.jettonAmount), e.bits.writeAddress(t.responseAddress), e
  }
  async getData() {
    const t = await this.getAddress(),
      e = await this.provider.call2(t.toString(), "get_wallet_data"),
      s = e[0],
      l = ds(e[1]),
      n = ds(e[2]),
      g = e[3];
    return {
      balance: s,
      ownerAddress: l,
      jettonMinterAddress: n,
      jettonWalletCode: g
    }
  }
};
Ei.codeHex = bi;
var Fa = {
  JettonWallet: Ei
};
const {
  JettonMinter: Aa
} = wa, {
  JettonWallet: ya
} = Fa;
mi.default = {
  JettonMinter: Aa,
  JettonWallet: ya
};
const pa = 10 * 1e3,
  ma = 1 * 1e3,
  fs = a => ({
    workchain: a.workchain,
    shardId: a.shard,
    shardBlockNumber: a.seqno
  });
let ba = class {
  constructor(t, e, s, l) {
    this.provider = t, this.storage = e, this.onBlock = s, this.startMcBlockNumber = l ? l.startMcBlockNumber : void 0, this.mcInterval = (l ? l.mcInterval : void 0) || pa, this.shardsInterval = (l ? l.shardsInterval : void 0) || ma
  }
  async start() {
    if (this.stop(), !this.startMcBlockNumber && (this.startMcBlockNumber = (await this.provider.getMasterchainInfo()).last.seqno, !this.startMcBlockNumber)) throw new Error("Cannot get start mc block number from provider");
    const t = await this.provider.getMasterchainBlockHeader(this.startMcBlockNumber);
    if (this.startLT = t.end_lt, !this.startLT) throw new Error("Cannot get startLT from provider");
    let e = !1;
    const s = async () => {
      if (!e) {
        e = !0;
        try {
          const g = await this.storage.getLastMasterchainBlockNumber() || this.startMcBlockNumber;
          if (!g) throw new Error("no init masterchain block in storage");
          const F = (await this.provider.getMasterchainInfo()).last.seqno;
          if (!F) throw new Error("invalid last masterchain block from provider");
          for (let A = g + 1; A < F; A++) {
            const y = await this.provider.getBlockShards(A),
              p = await this.provider.getMasterchainBlockHeader(A);
            await this.onBlock(p, y), await this.storage.insertBlocks(A, y.shards.map(fs))
          }
        } catch (g) {
          console.error(g)
        }
        e = !1
      }
    };
    this.mcIntervalId = setInterval(() => s(), this.mcInterval), s();
    let l = !1;
    const n = async () => {
      if (!l) {
        l = !0;
        try {
          const g = await this.storage.getUnprocessedShardBlock();
          if (g) {
            const {
              workchain: F,
              shardId: A,
              shardBlockNumber: y
            } = g, p = await this.provider.getBlockHeader(F, A, y);
            if (p.end_lt < this.startLT) await this.storage.setBlockProcessed(F, A, y, []);
            else {
              await this.onBlock(p);
              const M = p.prev_blocks.map(fs);
              await this.storage.setBlockProcessed(F, A, y, M)
            }
          }
        } catch (g) {
          console.log(g)
        }
        l = !1
      }
    };
    this.shardsIntervalId = setInterval(() => n(), this.shardsInterval)
  }
  stop() {
    clearInterval(this.mcIntervalId), clearInterval(this.shardsIntervalId)
  }
};
var Ea = {
  BlockSubscription: ba
};
let va = class {
  constructor(t) {
    this.masterchainBlocks = {}, this.shardchainBlocks = {}, this.logFunction = t
  }
  async insertShardBlocks(t) {
    for (const {
        workchain: e,
        shardId: s,
        shardBlockNumber: l
      }
      of t) this.shardchainBlocks[e + "_" + s + "_" + l] === void 0 && (this.logFunction && this.logFunction("insert shard " + e + " " + s + " " + l), this.shardchainBlocks[e + "_" + s + "_" + l] = !1)
  }
  async insertBlocks(t, e) {
    if (this.logFunction && this.logFunction("mc processed " + t), this.masterchainBlocks[t] !== void 0) throw new Error("mc already exists " + t);
    this.masterchainBlocks[t] = !0, await this.insertShardBlocks(e)
  }
  async getLastMasterchainBlockNumber() {
    return Object.keys(this.masterchainBlocks).map(e => Number(e)).sort((e, s) => s - e)[0]
  }
  async setBlockProcessed(t, e, s, l) {
    if (this.logFunction && this.logFunction("shard processed " + t + " " + e + " " + s), this.shardchainBlocks[t + "_" + e + "_" + s] === void 0) throw new Error("shard not exists " + t + "_" + e + "_" + s);
    this.shardchainBlocks[t + "_" + e + "_" + s] = !0, await this.insertShardBlocks(l)
  }
  async getUnprocessedShardBlock() {
    for (let t in this.shardchainBlocks)
      if (this.shardchainBlocks[t] === !1) {
        const e = t.split("_");
        return {
          workchain: Number(e[0]),
          shardId: e[1],
          shardBlockNumber: Number(e[2])
        }
      }
  }
};
var Da = {
  InMemoryBlockStorage: va
};
const {
  BlockSubscription: Ma
} = Ea, {
  InMemoryBlockStorage: _a
} = Da;
var Sa = {
  BlockSubscription: Ma,
  InMemoryBlockStorage: _a
};
const {
  Contract: Ce
} = yt, {
  Cell: te
} = _, {
  hexToBytes: lh,
  BN: us,
  nacl: ch,
  bytesToBase64: hh
} = x;
let xa = class extends Ce {
  constructor(t, e) {
    e.code = te.oneFromBoc("B5EE9C7241020F01000262000114FF00F4A413F4BCF2C80B0102012002030201480405036AF230DB3C5335A127A904F82327A128A90401BC5135A0F823B913B0F29EF800725210BE945387F0078E855386DB3CA4E2F82302DB3C0B0C0D0202CD06070121A0D0C9B67813F488DE0411F488DE0410130B048FD6D9E05E8698198FD201829846382C74E2F841999E98F9841083239BA395D497803F018B841083AB735BBED9E702984E382D9C74688462F863841083AB735BBED9E70156BA4E09040B0A0A080269F10FD22184093886D9E7C12C1083239BA39384008646582A803678B2801FD010A65B5658F89659FE4B9FD803FC1083239BA396D9E40E0A04F08E8D108C5F0C708210756E6B77DB3CE00AD31F308210706C7567831EB15210BA8F48305324A126A904F82326A127A904BEF27109FA4430A619F833D078D721D70B3F5260A11BBE8E923036F82370708210737562732759DB3C5077DE106910581047103645135042DB3CE0395F076C2232821064737472BA0A0A0D09011A8E897F821064737472DB3CE0300A006821B39982100400000072FB02DE70F8276F118010C8CB055005CF1621FA0214F40013CB6912CB1F830602948100A032DEC901FB000030ED44D0FA40FA40FA00D31FD31FD31FD31FD31FD307D31F30018021FA443020813A98DB3C01A619F833D078D721D70B3FA070F8258210706C7567228018C8CB055007CF165004FA0215CB6A12CB1F13CB3F01FA02CB00C973FB000E0040C8500ACF165008CF165006FA0214CB1F12CB1FCB1FCB1FCB1FCB07CB1FC9ED54005801A615F833D020D70B078100D1BA95810088D721DED307218100DDBA028100DEBA12B1F2E047D33F30A8AB0FE5855AB4"), super(t, e), this.methods.pay = () => Ce.createMethod(t, this.createPayExternalMessage()), this.methods.getSubscriptionData = this.getSubscriptionData.bind(this)
  }
  createDataCell() {
    const t = new te;
    return t.bits.writeAddress(this.options.wallet), t.bits.writeAddress(this.options.beneficiary), t.bits.writeGrams(this.options.amount), t.bits.writeUint(this.options.period, 32), t.bits.writeUint(this.options.startAt, 32), t.bits.writeUint(this.options.timeout, 32), t.bits.writeUint(0, 32), t.bits.writeUint(0, 32), t.bits.writeUint(0, 8), t.bits.writeUint(this.options.subscriptionId, 32), t
  }
  createBody() {
    const t = new te;
    return t.bits.writeUint(new us(1886156135).add(new us(2147483648)), 32), t
  }
  createSelfDestructBody() {
    const t = new te;
    return t.bits.writeUint(1685288050, 32), t
  }
  async getSubscriptionData() {
    const t = N => N[0].toNumber() + ":" + N[1].toString(16),
      e = await this.getAddress(),
      s = await this.provider.call2(e.toString(), "get_subscription_data"),
      l = t(s[0]),
      n = t(s[1]),
      g = s[2],
      F = s[3].toNumber(),
      A = s[4].toNumber(),
      y = s[5].toNumber(),
      p = s[6].toNumber(),
      M = s[7].toNumber(),
      v = s[8].toNumber(),
      T = s[9].toNumber();
    return {
      wallet: l,
      beneficiary: n,
      amount: g,
      period: F,
      startAt: A,
      timeout: y,
      lastPayment: p,
      lastRequest: M,
      failedAttempts: v,
      subscriptionId: T
    }
  }
  async createPayExternalMessage() {
    const t = await this.getAddress(),
      e = Ce.createExternalMessageHeader(t),
      s = Ce.createCommonMsgInfo(e, null, null),
      l = new te;
    return l.bits.writeUint(Math.floor(Date.now() / 1e3), 64), {
      address: t,
      message: s,
      body: l
    }
  }
};
var Ia = {
  SubscriptionContract: xa
};
const {
  Cell: pt
} = _, Ua = (a, t) => {
  if (t.length !== 256 / 8) throw new Error("invalid publicKey length");
  a.bits.writeBytes(t)
}, be = (a, t) => {
  if (t.length !== 512 / 8) throw new Error("invalid signature length");
  a.bits.writeBytes(t)
}, cr = a => {
  const t = new pt;
  return be(t, a), t
}, vi = (a, t) => {
  if (t) {
    if (a.bits.writeBit(1), a.refs.length >= 4) throw new Error("refs overflow");
    a.refs.push(t)
  } else a.bits.writeBit(0)
}, Di = vi, Mi = 1768843636, _i = 1131179891, Si = 1128492404, xi = 1433289580, Ii = 1130915665, Ui = 1131168622, Ti = 1130910580, Ni = 1741148801, Ta = 235282626, Na = 1433884798, $a = 2040604399, Ra = 521476815, ka = 143567410, Pa = 1727459433, $i = 625158801, Wa = -572749638, La = a => {
  const t = new pt;
  return t.bits.writeUint(Ni, 32), t.bits.writeCoins(a.coinsA), t.bits.writeCoins(a.coinsB), t
}, Oa = a => {
  const t = new pt;
  return t.bits.writeUint(Mi, 32), t.bits.writeUint(a.channelId, 128), t.bits.writeCoins(a.balanceA), t.bits.writeCoins(a.balanceB), t
}, Ha = a => {
  const t = new pt;
  return t.bits.writeUint(_i, 32), t.bits.writeUint(a.channelId, 128), t.bits.writeCoins(a.balanceA), t.bits.writeCoins(a.balanceB), t.bits.writeUint(a.seqnoA, 64), t.bits.writeUint(a.seqnoB, 64), t
}, Ka = a => {
  const t = new pt;
  return t.bits.writeUint(Si, 32), t.bits.writeUint(a.channelId, 128), t.bits.writeUint(a.seqnoA, 64), t.bits.writeUint(a.seqnoB, 64), t
}, qa = a => {
  const t = new pt;
  return t.bits.writeCoins(a.amount), t.writeCell(a.condition), t
}, Va = a => {
  const t = new pt;
  return t.bits.writeUint(a.seqno, 64), t.bits.writeCoins(a.sentCoins), Di(t, a.conditionals), t
}, Ga = a => {
  const t = new pt;
  return t.bits.writeUint(Ti, 32), t.bits.writeUint(a.channelId, 128), t.writeCell(a.semiChannelBody), vi(t, a.counterpartySemiChannelBody), t
}, Qa = a => {
  const t = new pt;
  return be(t, a.signature), t.writeCell(a.state), t
}, Za = a => {
  const t = new pt;
  return t.bits.writeUint(xi, 32), t.bits.writeUint(a.channelId, 128), t.refs[0] = a.signedSemiChannelStateA, t.refs[1] = a.signedSemiChannelStateB, t
}, Ya = a => {
  const t = new pt;
  return t.bits.writeUint(Ii, 32), t.bits.writeUint(a.channelId, 128), t.refs[0] = a.signedSemiChannelStateA, t.refs[1] = a.signedSemiChannelStateB, t
}, Xa = a => {
  const t = new pt;
  return t.bits.writeUint(Ui, 32), t.bits.writeUint(a.channelId, 128), Di(t, a.conditionalsToSettle), t
}, Ja = () => {
  const a = new pt;
  return a.bits.writeUint($i, 32), a
}, ja = a => {
  const t = new pt;
  return t.bits.writeUint(a.op, 32), t.bits.writeBit(a.isA), be(t, a.signature), t.writeCell(a.cell), t
}, za = a => {
  const t = new pt;
  return t.bits.writeUint(a.op, 32), t.refs[0] = cr(a.signatureA), t.refs[1] = cr(a.signatureB), t.writeCell(a.cell), t
};
var tl = {
  writePublicKey: Ua,
  writeSignature: be,
  createSignatureCell: cr,
  tag_init: Mi,
  tag_cooperative_close: _i,
  tag_cooperative_commit: Si,
  tag_start_uncooperative_close: xi,
  tag_challenge_state: Ii,
  tag_settle_conditionals: Ui,
  tag_state: Ti,
  op_top_up_balance: Ni,
  op_init_channel: Ta,
  op_cooperative_close: Na,
  op_cooperative_commit: $a,
  op_start_uncooperative_close: Ra,
  op_challenge_quarantined_state: ka,
  op_settle_conditionals: Pa,
  op_finish_uncooperative_close: $i,
  op_channel_closed: Wa,
  createTopUpBalance: La,
  createInitChannelBody: Oa,
  createCooperativeCloseChannelBody: Ha,
  createCooperativeCommitBody: Ka,
  createConditionalPayment: qa,
  createSemiChannelBody: Va,
  createSemiChannelState: Ga,
  createSignedSemiChannelState: Qa,
  createStartUncooperativeCloseBody: Za,
  createChallengeQuarantinedStateBody: Ya,
  createSettleConditionalsBody: Xa,
  createFinishUncooperativeClose: Ja,
  createOneSignature: ja,
  createTwoSignature: za
};
const {
  Contract: el
} = yt, {
  Cell: we
} = _, {
  nacl: ee,
  hexToBytes: rl,
  BN: Qt
} = x, {
  parseAddress: Cs
} = Et, {
  writePublicKey: ws,
  writeSignature: fh,
  createSignatureCell: uh,
  tag_init: Ch,
  tag_cooperative_close: wh,
  tag_cooperative_commit: gh,
  tag_start_uncooperative_close: Bh,
  tag_challenge_state: Fh,
  tag_settle_conditionals: Ah,
  tag_state: yh,
  op_top_up_balance: ph,
  op_init_channel: sl,
  op_cooperative_close: il,
  op_cooperative_commit: nl,
  op_start_uncooperative_close: ol,
  op_challenge_quarantined_state: al,
  op_settle_conditionals: ll,
  op_finish_uncooperative_close: mh,
  op_channel_closed: bh,
  createTopUpBalance: cl,
  createInitChannelBody: hl,
  createCooperativeCloseChannelBody: gs,
  createCooperativeCommitBody: dl,
  createConditionalPayment: Eh,
  createSemiChannelBody: ge,
  createSemiChannelState: Bs,
  createSignedSemiChannelState: fl,
  createStartUncooperativeCloseBody: ul,
  createChallengeQuarantinedStateBody: Cl,
  createSettleConditionalsBody: wl,
  createFinishUncooperativeClose: gl,
  createOneSignature: Bl,
  createTwoSignature: Fl
} = tl, Ri = "B5EE9C72410230010007FB000114FF00F4A413F4BCF2C80B0102012002030201480405000AF26C21F0190202CB06070201202E2F020120080902012016170201200A0B0201200C0D0009D3610F80CC001D6B5007434C7FE8034C7CC1BC0FE19E0201580E0F0201201011002D3E11DBC4BE11DBC43232C7FE11DBC47E80B2C7F2407320008B083E1B7B51343480007E187E80007E18BE80007E18F4FFC07E1934FFC07E1974DFC07E19BC01887080A7F4C7C07E1A34C7C07E1A7D01007E1AB7807080E535007E1AF7BE1B2002012012130201201415008D3E13723E11BE117E113E10540132803E10BE80BE10FE8084F2FFC4B2FFF2DFFC02887080A7FE12BE127E121400F2C7C4B2C7FD0037807080E53E12C073253E1333C5B8B27B5520004D1C3C02FE106CFCB8193E803E800C3E1096283E18BE10C0683E18FE10BE10E8006EFCB819BC032000CF1D3C02FE106CFCB819348020C235C6083E4040E4BE1124BE117890CC3E443CB81974C7C060841A5B9A5D2EBCB81A3E118074DFD66EBCB81CBE803E800C3E1094882FBE10D4882FAC3CB819807E18BE18FE12F43E800C3E10BE10E80068006E7CB8199FFE187C0320004120843777222E9C20043232C15401B3C594013E808532DA84B2C7F2DFF2407EC02002012018190201D42B2C0201201A1B0201201E1F0201201C1D00E5473F00BD401D001D401D021F90102D31F01821043436D74BAF2E068F84601D37F59BAF2E072F844544355F910F8454330F910B0F2E065D33FD33F30F84822B9F84922B9B0F2E06C21F86820F869F84A6E915B8E19F84AD0D33FFA003171D721D33F305033BC02BCB1936DF86ADEE2F800F00C8006F3E12F43E800C7E903E900C3E09DBC41CBE10D62F24CC20C1B7BE10FE11963C03FE10BE11A04020BC03DC3E185C3E189C3E18DB7E1ABC032000B51D3C02F5007400750074087E4040B4C7C0608410DB1BDCEEBCB81A3E118074DFD66EBCB81CBE111510D57E443E1150CC3E442C3CB8197E80007E18BE80007E18F4CFF4CFCC3E1208AE7E1248AE6C3CB81B007E1A3E1A7E003C042001C1573F00BF84A6EF2E06AD2008308D71820F9012392F84492F845E24130F910F2E065D31F018210556E436CBAF2E068F84601D37F59BAF2E072D401D08308D71820F901F8444130F910F2E06501D430D08308D71820F901F8454130F910F2E06501820020120222301FED31F01821043685374BAF2E068F84601D37F59BAF2E072D33FFA00F404552003D200019AD401D0D33FFA00F40430937F206DE2303205D31F01821043685374BAF2E068F84601D37F59BAF2E072D33FFA00F404552003D200019AD401D0D33FFA00F40430937F206DE23032F8485280BEF8495250BEB0524BBE1AB0527ABE19210064B05215BE14B05248BE17B0F2E06970F82305C8CB3F5004FA0215F40015CB3F5004FA0212F400CB1F12CA00CA00C9F86AF00C01C31CFC02FE129BACFCB81AF48020C235C6083E4048E4BE1124BE1178904C3E443CB81974C7C0608410DA19D46EBCB81A3E118074DFD66EBCB81CB5007420C235C6083E407E11104C3E443CB81940750C3420C235C6083E407E11504C3E443CB81940602403F71CFC02FE129BACFCB81AF48020C235C6083E4048E4BE1124BE1178904C3E443CB81974C7C0608410DB10DBAEBCB81A3E118074DFD66EBCB81CBD010C3E12B434CFFE803D0134CFFE803D0134C7FE11DBC4148828083E08EE7CB81BBE11DBC4A83E08EF3CB81C34800C151D5A64D6D4C8F7A2B98E82A49B08B8C3816028292A01FCD31F01821043685374BAF2E068F84601D37F59BAF2E072D33FFA00F404552003D200019AD401D0D33FFA00F40430937F206DE2303205D31F01821043685374BAF2E068F84601D37F59BAF2E072D33FFA00F404552003D200019AD401D0D33FFA00F40430937F206DE230325339BE5381BEB0F8495250BEB0F8485290BEB02502FE5237BE16B05262BEB0F2E06927C20097F84918BEF2E0699137E222C20097F84813BEF2E0699132E2F84AD0D33FFA00F404D33FFA00F404D31FF8476F105220A0F823BCF2E06FD200D20030B3F2E073209C3537373A5274BC5263BC12B18E11323939395250BC5299BC18B14650134440E25319BAB3F2E06D9130E30D7F05C82627002496F8476F1114A098F8476F1117A00603E203003ECB3F5004FA0215F40012CB3F5004FA0213F400CB1F12CA00CA00C9F86AF00C00620A8020F4966FA5208E213050038020F4666FA1208E1001FA00ED1E15DA119450C3A00B9133E2923430E202926C21E2B31B000C3535075063140038C8CB3F5004FA0212F400CB3F5003FA0213F400CB1FCA00C9F86AF00C00D51D3C02FE129BACFCB81AFE12B434CFFE803D010C74CFFE803D010C74C7CC3E11DBC4283E11DBC4A83E08EE7CB81C7E003E10886808E87E18BE10D400E816287E18FE10F04026BE10BE10E83E189C3E18F7BE10B04026BE10FE10A83E18DC3E18F780693E1A293E1A7C042001F53B7EF4C7C8608419F1F4A06EA4CC7C037808608403818830AEA54C7C03B6CC780C882084155DD61FAEA54C3C0476CC780820841E6849BBEEA54C3C04B6CC7808208407C546B3EEA54C3C0576CC780820840223AA8CAEA54C3C05B6CC7808208419BDBC1A6EA54C3C05F6CC780C60840950CAA46EA53C0636CC78202D0008840FF2F00075BC7FE3A7805FC25E87D007D207D20184100D0CAF6A1EC7C217C21B7817C227C22B7817C237C23FC247C24B7817C2524C3B7818823881B22A021984008DBD0CABA7805FC20C8B870FC253748B8F07C256840206B90FD0018C020EB90FD0018B8EB90E98F987C23B7882908507C11DE491839707C23B788507C23B789507C11DE48B9F03A4331C4966";
var Lt;
let ki = (Lt = class extends el {
  constructor(t, e) {
    e.publicKeyA = e.isA ? e.myKeyPair.publicKey : e.hisPublicKey, e.publicKeyB = e.isA ? e.hisPublicKey : e.myKeyPair.publicKey, e.wc = e.wc || 0, e.code = e.code || we.oneFromBoc(Ri), super(t, e)
  }
  createDataCell() {
    var l, n, g;
    const t = new we;
    t.bits.writeBit(0), t.bits.writeCoins(0), t.bits.writeCoins(0), ws(t, this.options.publicKeyA), ws(t, this.options.publicKeyB), t.bits.writeUint(this.options.channelId, 128);
    const e = new we;
    e.bits.writeUint(((l = this.options.closingConfig) == null ? void 0 : l.quarantineDuration) || 0, 32), e.bits.writeCoins(((n = this.options.closingConfig) == null ? void 0 : n.misbehaviorFine) || new Qt(0)), e.bits.writeUint(((g = this.options.closingConfig) == null ? void 0 : g.conditionalCloseDuration) || 0, 32), t.refs[0] = e, t.bits.writeUint(0, 32), t.bits.writeUint(0, 32), t.bits.writeBit(!1);
    const s = new we;
    return s.bits.writeCoins(this.options.excessFee || new Qt(0)), s.bits.writeAddress(this.options.addressA), s.bits.writeAddress(this.options.addressB), t.refs[1] = s, t
  }
  async createOneSignature(t, e) {
    const s = ee.sign.detached(await e.hash(), this.options.myKeyPair.secretKey);
    return {
      cell: Bl({
        op: t,
        isA: this.options.isA,
        signature: s,
        cell: e
      }),
      signature: s
    }
  }
  async createTwoSignature(t, e, s) {
    const l = ee.sign.detached(await s.hash(), this.options.myKeyPair.secretKey),
      n = this.options.isA ? l : e,
      g = this.options.isA ? e : l;
    return {
      cell: Fl({
        op: t,
        signatureA: n,
        signatureB: g,
        cell: s
      }),
      signature: l
    }
  }
  async createTopUpBalance(t) {
    return cl(t)
  }
  async createInitChannel(t) {
    return this.createOneSignature(sl, hl({
      ...t,
      channelId: this.options.channelId
    }))
  }
  async createCooperativeCloseChannel(t) {
    return t.hisSignature || (t.hisSignature = new Uint8Array(512 / 8)), this.createTwoSignature(il, t.hisSignature, gs({
      ...t,
      channelId: this.options.channelId
    }))
  }
  async createCooperativeCommit(t) {
    return t.hisSignature || (t.hisSignature = new Uint8Array(512 / 8)), this.createTwoSignature(nl, t.hisSignature, dl({
      ...t,
      channelId: this.options.channelId
    }))
  }
  async createSignedSemiChannelState(t) {
    const e = Bs({
        channelId: this.options.channelId,
        semiChannelBody: ge({
          seqno: t.mySeqno,
          sentCoins: t.mySentCoins,
          conditionals: null
        }),
        counterpartySemiChannelBody: t.hisSeqno === void 0 ? null : ge({
          seqno: t.hisSeqno,
          sentCoins: t.hisSentCoins,
          conditionals: null
        })
      }),
      s = ee.sign.detached(await e.hash(), this.options.myKeyPair.secretKey);
    return {
      cell: fl({
        signature: s,
        state: e
      }),
      signature: s
    }
  }
  async signState(t) {
    const e = this.options.isA ? t.seqnoA : t.seqnoB,
      s = this.options.isA ? t.seqnoB : t.seqnoA,
      l = this.options.initBalanceA.gt(t.balanceA) ? this.options.initBalanceA.sub(t.balanceA) : new Qt(0),
      n = this.options.initBalanceB.gt(t.balanceB) ? this.options.initBalanceB.sub(t.balanceB) : new Qt(0),
      g = this.options.isA ? l : n,
      F = this.options.isA ? n : l,
      {
        cell: A,
        signature: y
      } = await this.createSignedSemiChannelState({
        mySeqno: e,
        mySentCoins: g,
        hisSeqno: s,
        hisSentCoins: F
      });
    return y
  }
  async verifyState(t, e) {
    const s = this.options.isA ? t.seqnoB : t.seqnoA,
      l = this.options.isA ? t.seqnoA : t.seqnoB,
      n = this.options.initBalanceA.gt(t.balanceA) ? this.options.initBalanceA.sub(t.balanceA) : new Qt(0),
      g = this.options.initBalanceB.gt(t.balanceB) ? this.options.initBalanceB.sub(t.balanceB) : new Qt(0),
      F = this.options.isA ? g : n,
      A = this.options.isA ? n : g,
      p = await Bs({
        channelId: this.options.channelId,
        semiChannelBody: ge({
          seqno: s,
          sentCoins: F,
          conditionals: null
        }),
        counterpartySemiChannelBody: l === void 0 ? null : ge({
          seqno: l,
          sentCoins: A,
          conditionals: null
        })
      }).hash();
    return ee.sign.detached.verify(p, e, this.options.isA ? this.options.publicKeyB : this.options.publicKeyA)
  }
  async signClose(t) {
    const {
      cell: e,
      signature: s
    } = await this.createCooperativeCloseChannel(t);
    return s
  }
  async verifyClose(t, e) {
    const l = await (await gs({
      ...t,
      channelId: this.options.channelId
    })).hash();
    return ee.sign.detached.verify(l, e, this.options.isA ? this.options.publicKeyB : this.options.publicKeyA)
  }
  async createStartUncooperativeClose(t) {
    return this.createOneSignature(ol, ul({
      ...t,
      channelId: this.options.channelId
    }))
  }
  async createChallengeQuarantinedState(t) {
    return this.createOneSignature(al, Cl({
      ...t,
      channelId: this.options.channelId
    }))
  }
  async createSettleConditionals(t) {
    return this.createOneSignature(ll, wl({
      ...t,
      channelId: this.options.channelId
    }))
  }
  async createFinishUncooperativeClose() {
    return gl()
  }
  async getChannelState() {
    const t = await this.getAddress();
    return (await this.provider.call2(t.toString(), "get_channel_state", [])).toNumber()
  }
  async getData() {
    const t = _t => {
        let St = _t.toString(16);
        return St.length % 2 !== 0 && (St = "0" + St), rl(St)
      },
      e = await this.getAddress(),
      s = await this.provider.call2(e.toString(), "get_channel_data", []),
      l = s[0].toNumber(),
      n = s[1][0],
      g = s[1][1],
      F = t(s[2][0]),
      A = t(s[2][1]),
      y = s[3],
      p = s[4][0].toNumber(),
      M = s[4][1],
      v = s[4][2].toNumber(),
      T = s[5][0],
      N = s[5][1],
      Ft = s[6],
      D = s[7][0],
      vt = Cs(s[7][1]),
      Dt = Cs(s[7][2]);
    return {
      state: l,
      balanceA: n,
      balanceB: g,
      publicKeyA: F,
      publicKeyB: A,
      channelId: y,
      quarantineDuration: p,
      misbehaviorFine: M,
      conditionalCloseDuration: v,
      seqnoA: T,
      seqnoB: N,
      quarantine: Ft,
      excessFee: D,
      addressA: vt,
      addressB: Dt
    }
  }
  fromWallet(t) {
    const {
      wallet: e,
      secretKey: s
    } = t, l = (n, g) => {
      const F = async A => {
        const y = g ? (await this.createStateInit()).stateInit : null,
          p = await this.getAddress(),
          M = await e.methods.seqno().call() || 0,
          v = await n;
        return e.methods.transfer({
          secretKey: s,
          toAddress: p.toString(!0, !0, !0),
          amount: A,
          seqno: M,
          payload: v,
          stateInit: y,
          sendMode: 3
        })
      };
      return {
        send: A => F(A).then(y => y.send()),
        estimateFee: A => F(A).then(y => y.estimateFee())
      }
    };
    return {
      deploy: () => l(null, !0),
      init: n => l(this.createInitChannel(n).then(g => g.cell)),
      topUp: n => l(this.createTopUpBalance(n)),
      close: n => l(this.createCooperativeCloseChannel(n).then(g => g.cell)),
      commit: n => l(this.createCooperativeCommit(n).then(g => g.cell)),
      startUncooperativeClose: n => l(this.createStartUncooperativeClose(n).then(g => g.cell)),
      challengeQuarantinedState: n => l(this.createChallengeQuarantinedState(n).then(g => g.cell)),
      settleConditionals: n => l(this.createSettleConditionals(n).then(g => g.cell)),
      finishUncooperativeClose: () => l(this.createFinishUncooperativeClose())
    }
  }
}, Vt(Lt, "STATE_UNINITED", 0), Vt(Lt, "STATE_OPEN", 1), Vt(Lt, "STATE_CLOSURE_STARTED", 2), Vt(Lt, "STATE_SETTLING_CONDITIONALS", 3), Vt(Lt, "STATE_AWAITING_FINALIZATION", 4), Lt);
ki.codeHex = Ri;
var Al = {
  PaymentChannel: ki
};
const {
  PaymentChannel: Pi
} = Al;
let yl = class {
  constructor(t) {
    this.provider = t
  }
  createChannel(t) {
    return new Pi(this.provider, t)
  }
};
var pl = {
    Payments: yl,
    PaymentChannel: Pi
  },
  Wi = {},
  Li = {};
const {
  parseAddress: ml
} = Et, {
  AdnlAddress: bl,
  StorageBagId: El,
  BN: Fs,
  sha256: vl,
  bytesToHex: Dl,
  bytesToBase64: Ml
} = x, {
  Cell: se
} = _, hr = "dns_next_resolver", Oi = "wallet", Hi = "site", Ki = "storage", qi = async a => {
  if (!a) return new Fs(0);
  const t = new TextEncoder().encode(a),
    e = new Uint8Array(await vl(t));
  return new Fs(Dl(e), 16)
}, _l = a => {
  const t = new se;
  return t.bits.writeUint(40915, 16), t.bits.writeAddress(a), t.bits.writeUint(0, 8), t
}, Sl = a => {
  const t = new se;
  return t.bits.writeUint(44289, 16), t.bits.writeBytes(a.bytes), t.bits.writeUint(0, 8), t
}, xl = a => {
  const t = new se;
  return t.bits.writeUint(29811, 16), t.bits.writeBytes(a.bytes), t
}, Il = a => {
  const t = new se;
  return t.bits.writeUint(47763, 16), t.bits.writeAddress(a), t
}, Vi = (a, t, e) => {
  if (a.bits.array[0] !== t || a.bits.array[1] !== e) throw new Error("Invalid dns record value prefix");
  return a.bits.array = a.bits.array.slice(2), ml(a)
}, Gi = a => Vi(a, 159, 211), dr = a => Vi(a, 186, 147), Qi = a => {
  if (a.bits.array[0] !== 173 || a.bits.array[1] !== 1) throw new Error("Invalid dns record value prefix");
  const t = a.bits.array.slice(2, 34);
  return new bl(t)
}, Mr = a => {
  if (a.bits.array[0] !== 116 || a.bits.array[1] !== 115) throw new Error("Invalid dns record value prefix");
  const t = a.bits.array.slice(2, 34);
  return new El(t)
}, Zi = a => a ? a.bits.array[0] === 173 || a.bits.array[1] === 1 ? Qi(a) : Mr(a) : null, Yi = async (a, t, e, s, l) => {
  const n = e.length * 8,
    g = new se;
  g.bits.writeBytes(e);
  const F = await qi(s),
    A = await a.call2(t, "dnsresolve", [
      ["tvm.Slice", Ml(await g.toBoc(!1))],
      ["num", F.toString()]
    ]);
  if (A.length !== 2) throw new Error("Invalid dnsresolve response");
  const y = A[0].toNumber();
  let p = A[1];
  if (p instanceof Array && p.length === 0 && (p = null), p && !p.bits) throw new Error("Invalid dnsresolve response");
  if (y === 0) return null;
  if (y % 8 !== 0) throw new Error("domain split not at a component boundary");
  if (y > n) throw new Error("invalid response " + y + "/" + n);
  if (y === n) return s === hr ? p ? dr(p) : null : s === Oi ? p ? Gi(p) : null : s === Hi ? p ? Zi(p) : null : s === Ki ? p ? Mr(p) : null : p;
  if (p) {
    const M = dr(p);
    return l ? s === hr ? M : null : await Yi(a, M.toString(), e.slice(y / 8), s, !1)
  } else return null
}, Xi = a => {
  if (!a || !a.length) throw new Error("empty domain");
  if (a === ".") return new Uint8Array([0]);
  a = a.toLowerCase();
  for (let s = 0; s < a.length; s++)
    if (a.charCodeAt(s) <= 32) throw new Error("bytes in range 0..32 are not allowed in domain names");
  for (let s = 0; s < a.length; s++) {
    const l = a.substring(s, s + 1);
    for (let n = 127; n <= 159; n++)
      if (l === String.fromCharCode(n)) throw new Error("bytes in range 127..159 are not allowed in domain names")
  }
  const t = a.split(".");
  t.forEach(s => {
    if (!s.length) throw new Error("domain name cannot have an empty component")
  });
  let e = t.reverse().join("\0") + "\0";
  return e.length < 126 && (e = "\0" + e), new TextEncoder().encode(e)
}, Ul = async (a, t, e, s, l) => {
  const n = Xi(e);
  return Yi(a, t, n, s, l)
};
var _r = {
  DNS_CATEGORY_NEXT_RESOLVER: hr,
  DNS_CATEGORY_SITE: Hi,
  DNS_CATEGORY_WALLET: Oi,
  DNS_CATEGORY_STORAGE: Ki,
  categoryToBN: qi,
  domainToBytes: Xi,
  createSmartContractAddressRecord: _l,
  createAdnlAddressRecord: Sl,
  createNextResolverRecord: Il,
  parseSmartContractAddressRecord: Gi,
  parseAdnlAddressRecord: Qi,
  parseStorageBagIdRecord: Mr,
  parseSiteRecord: Zi,
  parseNextResolverRecord: dr,
  createStorageBagIdRecord: xl,
  dnsResolve: Ul
};
const {
  Address: Tl,
  bytesToHex: Nl
} = x, {
  DNS_CATEGORY_NEXT_RESOLVER: $l,
  DNS_CATEGORY_SITE: Ji,
  DNS_CATEGORY_WALLET: ji,
  DNS_CATEGORY_STORAGE: Rl,
  createSmartContractAddressRecord: kl,
  createAdnlAddressRecord: Pl,
  createStorageBagIdRecord: Wl,
  createNextResolverRecord: Ll,
  parseSmartContractAddressRecord: Ol,
  parseAdnlAddressRecord: Hl,
  parseStorageBagIdRecord: Kl,
  parseSiteRecord: ql,
  parseNextResolverRecord: Vl,
  dnsResolve: zi
} = _r;
let mt = class {
  constructor(t) {
    this.provider = t
  }
  async getRootDnsAddress() {
    const e = (await this.provider.getConfigParam(4)).bits.array;
    if (e.length !== 256 / 8) throw new Error("Invalid ConfigParam 4 length " + e.length);
    const s = Nl(e);
    return new Tl("-1:" + s)
  }
  async resolve(t, e, s) {
    const l = await this.getRootDnsAddress();
    return zi(this.provider, l.toString(), t, e, s)
  }
  getWalletAddress(t) {
    return this.resolve(t, ji)
  }
  getSiteAddress(t) {
    return this.resolve(t, Ji)
  }
};
mt.resolve = zi;
mt.createSmartContractAddressRecord = kl;
mt.createAdnlAddressRecord = Pl;
mt.createStorageBagIdRecord = Wl;
mt.createNextResolverRecord = Ll;
mt.parseNextResolverRecord = Vl;
mt.parseAdnlAddressRecord = Hl;
mt.parseStorageBagIdRecord = Kl;
mt.parseSiteRecord = ql;
mt.parseSmartContractAddressRecord = Ol;
mt.DNS_CATEGORY_NEXT_RESOLVER = $l;
mt.DNS_CATEGORY_WALLET = ji;
mt.DNS_CATEGORY_SITE = Ji;
mt.DNS_CATEGORY_STORAGE = Rl;
Li.default = mt;
const {
  Contract: Gl
} = yt, {
  Cell: As
} = _, {
  parseAddress: Ql
} = Et, {
  dnsResolve: Zl
} = _r, {
  parseOffchainUriCell: Yl
} = Et;
let Xl = class extends Gl {
  constructor(t, e) {
    if (e.wc = 0, e.code = e.code, super(t, e), !e.collectionContent && !e.address) throw new Error("required collectionContent cell");
    this.methods.getCollectionData = this.getCollectionData.bind(this), this.methods.getNftItemAddressByIndex = this.getNftItemAddressByIndex.bind(this), this.methods.getNftItemContent = this.getNftItemContent.bind(this), this.methods.resolve = this.resolve.bind(this)
  }
  createDataCell() {
    const t = new As;
    return t.refs[0] = this.options.collectionContent, t.refs[1] = As.oneFromBoc(this.options.dnsItemCodeHex), t
  }
  async getCollectionData() {
    const t = await this.getAddress(),
      e = await this.provider.call2(t.toString(), "get_collection_data"),
      s = e[0].toNumber(),
      l = e[1];
    return {
      collectionContentUri: Yl(l),
      collectionContent: l,
      ownerAddress: null,
      nextItemIndex: s
    }
  }
  async getNftItemContent(t) {
    return await t.getData()
  }
  async getNftItemAddressByIndex(t) {
    const e = await this.getAddress(),
      s = await this.provider.call2(e.toString(), "get_nft_address_by_index", [
        ["num", t.toString()]
      ]);
    return Ql(s)
  }
  async resolve(t, e, s) {
    const l = await this.getAddress();
    return Zl(this.provider, l.toString(), t, e, s)
  }
};
var Jl = {
  DnsCollection: Xl
};
const {
  Contract: jl
} = yt, {
  Cell: Fe
} = _, {
  Address: Sh,
  BN: zl
} = x, {
  parseAddress: tr
} = Et, {
  dnsResolve: tc,
  categoryToBN: ec
} = _r;
let t0 = class extends jl {
  constructor(t, e) {
    e.wc = 0, e.code = e.code, super(t, e), this.methods.getData = this.getData.bind(this), this.methods.getDomain = this.getDomain.bind(this), this.methods.getAuctionInfo = this.getAuctionInfo.bind(this), this.methods.getLastFillUpTime = this.getLastFillUpTime.bind(this), this.methods.resolve = this.resolve.bind(this)
  }
  createDataCell() {
    const t = new Fe;
    return t.bits.writeUint(this.options.index, 256), t.bits.writeAddress(this.options.collectionAddress), t
  }
  async getData() {
    const t = await this.getAddress(),
      e = await this.provider.call2(t.toString(), "get_nft_data"),
      s = e[0].toNumber() === -1,
      l = e[1],
      n = tr(e[2]),
      g = s ? tr(e[3]) : null,
      F = e[4];
    return {
      isInitialized: s,
      index: l,
      collectionAddress: n,
      ownerAddress: g,
      contentCell: F
    }
  }
  async createTransferBody(t) {
    const e = new Fe;
    return e.bits.writeUint(1607220500, 32), e.bits.writeUint(t.queryId || 0, 64), e.bits.writeAddress(t.newOwnerAddress), e.bits.writeAddress(t.responseAddress), e.bits.writeBit(!1), e.bits.writeCoins(t.forwardAmount || new zl(0)), e.bits.writeBit(!1), t.forwardPayload && e.bits.writeBytes(t.forwardPayload), e
  }
  createGetStaticDataBody(t) {
    const e = new Fe;
    return e.bits.writeUint(801842850, 32), e.bits.writeUint(t.queryId || 0, 64), e
  }
  async getDomain() {
    const t = await this.getAddress(),
      e = await this.provider.call2(t.toString(), "get_domain");
    return new TextDecoder().decode(e.bits.array.buffer)
  }
  async getAuctionInfo() {
    const t = await this.getAddress(),
      e = await this.provider.call2(t.toString(), "get_auction_info"),
      s = tr(e[0]),
      l = e[1],
      n = e[2].toNumber();
    return {
      maxBidAddress: s,
      maxBidAmount: l,
      auctionEndTime: n
    }
  }
  async getLastFillUpTime() {
    const t = await this.getAddress();
    return (await this.provider.call2(t.toString(), "get_last_fill_up_time")).toNumber()
  }
  async resolve(t, e, s) {
    const l = await this.getAddress();
    return tc(this.provider, l.toString(), t, e, s)
  }
};
t0.createChangeContentEntryBody = async a => {
  const t = new Fe;
  return t.bits.writeUint(1320284409, 32), t.bits.writeUint(a.queryId || 0, 64), t.bits.writeUint(await ec(a.category), 256), a.value && (t.refs[0] = a.value), t
};
var rc = {
  DnsItem: t0
};
const sc = Li.default,
  {
    DnsCollection: ic
  } = Jl,
  {
    DnsItem: nc
  } = rc;
Wi.default = {
  Dns: sc,
  DnsCollection: ic,
  DnsItem: nc
};
const ye = x,
  e0 = ye.Address,
  r0 = _,
  oc = Jn,
  s0 = Ls.default,
  {
    Contract: i0
  } = yt,
  n0 = Ks.default,
  o0 = oi.default,
  ac = Ci.default,
  lc = Bi.default,
  ys = mi.default,
  {
    BlockSubscription: a0,
    InMemoryBlockStorage: l0
  } = Sa,
  {
    SubscriptionContract: cc
  } = Ia,
  {
    Payments: c0,
    PaymentChannel: hc
  } = pl,
  dc = B0.default,
  fc = F0.default,
  uc = A0.default,
  {
    Dns: h0,
    DnsCollection: Cc,
    DnsItem: wc
  } = Wi.default,
  d0 = "0.0.66";
class Bt {
  constructor(t) {
    this.version = d0, this.utils = ye, this.Address = e0, this.boc = r0, this.Contract = i0, this.BlockSubscription = a0, this.InMemoryBlockStorage = l0, this.provider = t || new s0, this.dns = new h0(this.provider), this.wallet = new n0(this.provider), this.payments = new c0(this.provider), this.lockupWallet = o0
  }
  async getTransactions(t, e = 20, s = void 0, l = void 0, n = void 0) {
    return this.provider.getTransactions(t.toString(), e, s, l, n)
  }
  async getBalance(t) {
    return this.provider.getBalance(t.toString())
  }
  async sendBoc(t) {
    return this.provider.sendBoc(ye.bytesToBase64(t))
  }
  async call(t, e, s = []) {
    return this.provider.call(t.toString(), e, s)
  }
}
Bt.version = d0;
Bt.utils = ye;
Bt.Address = e0;
Bt.boc = r0;
Bt.HttpProvider = s0;
Bt.Contract = i0;
Bt.Wallets = n0;
Bt.LockupWallets = o0;
Bt.SubscriptionContract = cc;
Bt.BlockSubscription = a0;
Bt.InMemoryBlockStorage = l0;
Bt.ledger = {
  TransportWebUSB: dc,
  TransportWebHID: fc,
  BluetoothTransport: uc,
  AppTon: oc
};
Bt.token = {
  nft: lc,
  ft: ys,
  jetton: ys
};
Bt.HighloadWallets = ac;
Bt.dns = h0;
Bt.dns.DnsCollection = Cc;
Bt.dns.DnsItem = wc;
Bt.payments = c0;
Bt.payments.PaymentChannel = hc;
export {
  v0 as r
};