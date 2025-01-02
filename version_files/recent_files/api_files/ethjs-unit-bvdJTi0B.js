import {
  c as mr
} from "./@ledgerhq-BW4RAlPi.js";
import {
  s as pr
} from "./number-to-bn-VwIxN61R.js";

function Mr(g) {
  throw new Error('Could not dynamically require "' + g + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
}
var Pt = {
  exports: {}
};
Pt.exports;
(function(g) {
  (function(at, ht) {
    function v(s, t) {
      if (!s) throw new Error(t || "Assertion failed")
    }

    function ft(s, t) {
      s.super_ = t;
      var i = function() {};
      i.prototype = t.prototype, s.prototype = new i, s.prototype.constructor = s
    }

    function l(s, t, i) {
      if (l.isBN(s)) return s;
      this.negative = 0, this.words = null, this.length = 0, this.red = null, s !== null && ((t === "le" || t === "be") && (i = t, t = 10), this._init(s || 0, t || 10, i || "be"))
    }
    typeof at == "object" ? at.exports = l : ht.BN = l, l.BN = l, l.wordSize = 26;
    var ut;
    try {
      ut = Mr("buffer").Buffer
    } catch {}
    l.isBN = function(t) {
      return t instanceof l ? !0 : t !== null && typeof t == "object" && t.constructor.wordSize === l.wordSize && Array.isArray(t.words)
    }, l.max = function(t, i) {
      return t.cmp(i) > 0 ? t : i
    }, l.min = function(t, i) {
      return t.cmp(i) < 0 ? t : i
    }, l.prototype._init = function(t, i, e) {
      if (typeof t == "number") return this._initNumber(t, i, e);
      if (typeof t == "object") return this._initArray(t, i, e);
      i === "hex" && (i = 16), v(i === (i | 0) && i >= 2 && i <= 36), t = t.toString().replace(/\s+/g, "");
      var h = 0;
      t[0] === "-" && h++, i === 16 ? this._parseHex(t, h) : this._parseBase(t, i, h), t[0] === "-" && (this.negative = 1), this.strip(), e === "le" && this._initArray(this.toArray(), i, e)
    }, l.prototype._initNumber = function(t, i, e) {
      t < 0 && (this.negative = 1, t = -t), t < 67108864 ? (this.words = [t & 67108863], this.length = 1) : t < 4503599627370496 ? (this.words = [t & 67108863, t / 67108864 & 67108863], this.length = 2) : (v(t < 9007199254740992), this.words = [t & 67108863, t / 67108864 & 67108863, 1], this.length = 3), e === "le" && this._initArray(this.toArray(), i, e)
    }, l.prototype._initArray = function(t, i, e) {
      if (v(typeof t.length == "number"), t.length <= 0) return this.words = [0], this.length = 1, this;
      this.length = Math.ceil(t.length / 3), this.words = new Array(this.length);
      for (var h = 0; h < this.length; h++) this.words[h] = 0;
      var o, a, u = 0;
      if (e === "be")
        for (h = t.length - 1, o = 0; h >= 0; h -= 3) a = t[h] | t[h - 1] << 8 | t[h - 2] << 16, this.words[o] |= a << u & 67108863, this.words[o + 1] = a >>> 26 - u & 67108863, u += 24, u >= 26 && (u -= 26, o++);
      else if (e === "le")
        for (h = 0, o = 0; h < t.length; h += 3) a = t[h] | t[h + 1] << 8 | t[h + 2] << 16, this.words[o] |= a << u & 67108863, this.words[o + 1] = a >>> 26 - u & 67108863, u += 24, u >= 26 && (u -= 26, o++);
      return this.strip()
    };

    function ot(s, t, i) {
      for (var e = 0, h = Math.min(s.length, i), o = t; o < h; o++) {
        var a = s.charCodeAt(o) - 48;
        e <<= 4, a >= 49 && a <= 54 ? e |= a - 49 + 10 : a >= 17 && a <= 22 ? e |= a - 17 + 10 : e |= a & 15
      }
      return e
    }
    l.prototype._parseHex = function(t, i) {
      this.length = Math.ceil((t.length - i) / 6), this.words = new Array(this.length);
      for (var e = 0; e < this.length; e++) this.words[e] = 0;
      var h, o, a = 0;
      for (e = t.length - 6, h = 0; e >= i; e -= 6) o = ot(t, e, e + 6), this.words[h] |= o << a & 67108863, this.words[h + 1] |= o >>> 26 - a & 4194303, a += 24, a >= 26 && (a -= 26, h++);
      e + 6 !== i && (o = ot(t, i, e + 6), this.words[h] |= o << a & 67108863, this.words[h + 1] |= o >>> 26 - a & 4194303), this.strip()
    };

    function et(s, t, i, e) {
      for (var h = 0, o = Math.min(s.length, i), a = t; a < o; a++) {
        var u = s.charCodeAt(a) - 48;
        h *= e, u >= 49 ? h += u - 49 + 10 : u >= 17 ? h += u - 17 + 10 : h += u
      }
      return h
    }
    l.prototype._parseBase = function(t, i, e) {
      this.words = [0], this.length = 1;
      for (var h = 0, o = 1; o <= 67108863; o *= i) h++;
      h--, o = o / i | 0;
      for (var a = t.length - e, u = a % h, n = Math.min(a, a - u) + e, r = 0, f = e; f < n; f += h) r = et(t, f, f + h, i), this.imuln(o), this.words[0] + r < 67108864 ? this.words[0] += r : this._iaddn(r);
      if (u !== 0) {
        var d = 1;
        for (r = et(t, f, t.length, i), f = 0; f < u; f++) d *= i;
        this.imuln(d), this.words[0] + r < 67108864 ? this.words[0] += r : this._iaddn(r)
      }
    }, l.prototype.copy = function(t) {
      t.words = new Array(this.length);
      for (var i = 0; i < this.length; i++) t.words[i] = this.words[i];
      t.length = this.length, t.negative = this.negative, t.red = this.red
    }, l.prototype.clone = function() {
      var t = new l(null);
      return this.copy(t), t
    }, l.prototype._expand = function(t) {
      for (; this.length < t;) this.words[this.length++] = 0;
      return this
    }, l.prototype.strip = function() {
      for (; this.length > 1 && this.words[this.length - 1] === 0;) this.length--;
      return this._normSign()
    }, l.prototype._normSign = function() {
      return this.length === 1 && this.words[0] === 0 && (this.negative = 0), this
    }, l.prototype.inspect = function() {
      return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
    };
    var lt = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
      pt = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
      ur = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
    l.prototype.toString = function(t, i) {
      t = t || 10, i = i | 0 || 1;
      var e;
      if (t === 16 || t === "hex") {
        e = "";
        for (var h = 0, o = 0, a = 0; a < this.length; a++) {
          var u = this.words[a],
            n = ((u << h | o) & 16777215).toString(16);
          o = u >>> 24 - h & 16777215, o !== 0 || a !== this.length - 1 ? e = lt[6 - n.length] + n + e : e = n + e, h += 2, h >= 26 && (h -= 26, a--)
        }
        for (o !== 0 && (e = o.toString(16) + e); e.length % i !== 0;) e = "0" + e;
        return this.negative !== 0 && (e = "-" + e), e
      }
      if (t === (t | 0) && t >= 2 && t <= 36) {
        var r = pt[t],
          f = ur[t];
        e = "";
        var d = this.clone();
        for (d.negative = 0; !d.isZero();) {
          var m = d.modn(f).toString(t);
          d = d.idivn(f), d.isZero() ? e = m + e : e = lt[r - m.length] + m + e
        }
        for (this.isZero() && (e = "0" + e); e.length % i !== 0;) e = "0" + e;
        return this.negative !== 0 && (e = "-" + e), e
      }
      v(!1, "Base should be between 2 and 36")
    }, l.prototype.toNumber = function() {
      var t = this.words[0];
      return this.length === 2 ? t += this.words[1] * 67108864 : this.length === 3 && this.words[2] === 1 ? t += 4503599627370496 + this.words[1] * 67108864 : this.length > 2 && v(!1, "Number can only safely store up to 53 bits"), this.negative !== 0 ? -t : t
    }, l.prototype.toJSON = function() {
      return this.toString(16)
    }, l.prototype.toBuffer = function(t, i) {
      return v(typeof ut < "u"), this.toArrayLike(ut, t, i)
    }, l.prototype.toArray = function(t, i) {
      return this.toArrayLike(Array, t, i)
    }, l.prototype.toArrayLike = function(t, i, e) {
      var h = this.byteLength(),
        o = e || Math.max(1, h);
      v(h <= o, "byte array longer than desired length"), v(o > 0, "Requested array length <= 0"), this.strip();
      var a = i === "le",
        u = new t(o),
        n, r, f = this.clone();
      if (a) {
        for (r = 0; !f.isZero(); r++) n = f.andln(255), f.iushrn(8), u[r] = n;
        for (; r < o; r++) u[r] = 0
      } else {
        for (r = 0; r < o - h; r++) u[r] = 0;
        for (r = 0; !f.isZero(); r++) n = f.andln(255), f.iushrn(8), u[o - r - 1] = n
      }
      return u
    }, Math.clz32 ? l.prototype._countBits = function(t) {
      return 32 - Math.clz32(t)
    } : l.prototype._countBits = function(t) {
      var i = t,
        e = 0;
      return i >= 4096 && (e += 13, i >>>= 13), i >= 64 && (e += 7, i >>>= 7), i >= 8 && (e += 4, i >>>= 4), i >= 2 && (e += 2, i >>>= 2), e + i
    }, l.prototype._zeroBits = function(t) {
      if (t === 0) return 26;
      var i = t,
        e = 0;
      return i & 8191 || (e += 13, i >>>= 13), i & 127 || (e += 7, i >>>= 7), i & 15 || (e += 4, i >>>= 4), i & 3 || (e += 2, i >>>= 2), i & 1 || e++, e
    }, l.prototype.bitLength = function() {
      var t = this.words[this.length - 1],
        i = this._countBits(t);
      return (this.length - 1) * 26 + i
    };

    function vr(s) {
      for (var t = new Array(s.bitLength()), i = 0; i < t.length; i++) {
        var e = i / 26 | 0,
          h = i % 26;
        t[i] = (s.words[e] & 1 << h) >>> h
      }
      return t
    }
    l.prototype.zeroBits = function() {
      if (this.isZero()) return 0;
      for (var t = 0, i = 0; i < this.length; i++) {
        var e = this._zeroBits(this.words[i]);
        if (t += e, e !== 26) break
      }
      return t
    }, l.prototype.byteLength = function() {
      return Math.ceil(this.bitLength() / 8)
    }, l.prototype.toTwos = function(t) {
      return this.negative !== 0 ? this.abs().inotn(t).iaddn(1) : this.clone()
    }, l.prototype.fromTwos = function(t) {
      return this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone()
    }, l.prototype.isNeg = function() {
      return this.negative !== 0
    }, l.prototype.neg = function() {
      return this.clone().ineg()
    }, l.prototype.ineg = function() {
      return this.isZero() || (this.negative ^= 1), this
    }, l.prototype.iuor = function(t) {
      for (; this.length < t.length;) this.words[this.length++] = 0;
      for (var i = 0; i < t.length; i++) this.words[i] = this.words[i] | t.words[i];
      return this.strip()
    }, l.prototype.ior = function(t) {
      return v((this.negative | t.negative) === 0), this.iuor(t)
    }, l.prototype.or = function(t) {
      return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this)
    }, l.prototype.uor = function(t) {
      return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this)
    }, l.prototype.iuand = function(t) {
      var i;
      this.length > t.length ? i = t : i = this;
      for (var e = 0; e < i.length; e++) this.words[e] = this.words[e] & t.words[e];
      return this.length = i.length, this.strip()
    }, l.prototype.iand = function(t) {
      return v((this.negative | t.negative) === 0), this.iuand(t)
    }, l.prototype.and = function(t) {
      return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this)
    }, l.prototype.uand = function(t) {
      return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this)
    }, l.prototype.iuxor = function(t) {
      var i, e;
      this.length > t.length ? (i = this, e = t) : (i = t, e = this);
      for (var h = 0; h < e.length; h++) this.words[h] = i.words[h] ^ e.words[h];
      if (this !== i)
        for (; h < i.length; h++) this.words[h] = i.words[h];
      return this.length = i.length, this.strip()
    }, l.prototype.ixor = function(t) {
      return v((this.negative | t.negative) === 0), this.iuxor(t)
    }, l.prototype.xor = function(t) {
      return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this)
    }, l.prototype.uxor = function(t) {
      return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this)
    }, l.prototype.inotn = function(t) {
      v(typeof t == "number" && t >= 0);
      var i = Math.ceil(t / 26) | 0,
        e = t % 26;
      this._expand(i), e > 0 && i--;
      for (var h = 0; h < i; h++) this.words[h] = ~this.words[h] & 67108863;
      return e > 0 && (this.words[h] = ~this.words[h] & 67108863 >> 26 - e), this.strip()
    }, l.prototype.notn = function(t) {
      return this.clone().inotn(t)
    }, l.prototype.setn = function(t, i) {
      v(typeof t == "number" && t >= 0);
      var e = t / 26 | 0,
        h = t % 26;
      return this._expand(e + 1), i ? this.words[e] = this.words[e] | 1 << h : this.words[e] = this.words[e] & ~(1 << h), this.strip()
    }, l.prototype.iadd = function(t) {
      var i;
      if (this.negative !== 0 && t.negative === 0) return this.negative = 0, i = this.isub(t), this.negative ^= 1, this._normSign();
      if (this.negative === 0 && t.negative !== 0) return t.negative = 0, i = this.isub(t), t.negative = 1, i._normSign();
      var e, h;
      this.length > t.length ? (e = this, h = t) : (e = t, h = this);
      for (var o = 0, a = 0; a < h.length; a++) i = (e.words[a] | 0) + (h.words[a] | 0) + o, this.words[a] = i & 67108863, o = i >>> 26;
      for (; o !== 0 && a < e.length; a++) i = (e.words[a] | 0) + o, this.words[a] = i & 67108863, o = i >>> 26;
      if (this.length = e.length, o !== 0) this.words[this.length] = o, this.length++;
      else if (e !== this)
        for (; a < e.length; a++) this.words[a] = e.words[a];
      return this
    }, l.prototype.add = function(t) {
      var i;
      return t.negative !== 0 && this.negative === 0 ? (t.negative = 0, i = this.sub(t), t.negative ^= 1, i) : t.negative === 0 && this.negative !== 0 ? (this.negative = 0, i = t.sub(this), this.negative = 1, i) : this.length > t.length ? this.clone().iadd(t) : t.clone().iadd(this)
    }, l.prototype.isub = function(t) {
      if (t.negative !== 0) {
        t.negative = 0;
        var i = this.iadd(t);
        return t.negative = 1, i._normSign()
      } else if (this.negative !== 0) return this.negative = 0, this.iadd(t), this.negative = 1, this._normSign();
      var e = this.cmp(t);
      if (e === 0) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
      var h, o;
      e > 0 ? (h = this, o = t) : (h = t, o = this);
      for (var a = 0, u = 0; u < o.length; u++) i = (h.words[u] | 0) - (o.words[u] | 0) + a, a = i >> 26, this.words[u] = i & 67108863;
      for (; a !== 0 && u < h.length; u++) i = (h.words[u] | 0) + a, a = i >> 26, this.words[u] = i & 67108863;
      if (a === 0 && u < h.length && h !== this)
        for (; u < h.length; u++) this.words[u] = h.words[u];
      return this.length = Math.max(this.length, u), h !== this && (this.negative = 1), this.strip()
    }, l.prototype.sub = function(t) {
      return this.clone().isub(t)
    };

    function Dt(s, t, i) {
      i.negative = t.negative ^ s.negative;
      var e = s.length + t.length | 0;
      i.length = e, e = e - 1 | 0;
      var h = s.words[0] | 0,
        o = t.words[0] | 0,
        a = h * o,
        u = a & 67108863,
        n = a / 67108864 | 0;
      i.words[0] = u;
      for (var r = 1; r < e; r++) {
        for (var f = n >>> 26, d = n & 67108863, m = Math.min(r, t.length - 1), p = Math.max(0, r - s.length + 1); p <= m; p++) {
          var M = r - p | 0;
          h = s.words[M] | 0, o = t.words[p] | 0, a = h * o + d, f += a / 67108864 | 0, d = a & 67108863
        }
        i.words[r] = d | 0, n = f | 0
      }
      return n !== 0 ? i.words[r] = n | 0 : i.length--, i.strip()
    }
    var Wt = function(t, i, e) {
      var h = t.words,
        o = i.words,
        a = e.words,
        u = 0,
        n, r, f, d = h[0] | 0,
        m = d & 8191,
        p = d >>> 13,
        M = h[1] | 0,
        c = M & 8191,
        w = M >>> 13,
        vt = h[2] | 0,
        y = vt & 8191,
        x = vt >>> 13,
        Ut = h[3] | 0,
        _ = Ut & 8191,
        S = Ut >>> 13,
        Vt = h[4] | 0,
        A = Vt & 8191,
        B = Vt >>> 13,
        Gt = h[5] | 0,
        k = Gt & 8191,
        q = Gt >>> 13,
        $t = h[6] | 0,
        R = $t & 8191,
        T = $t >>> 13,
        Qt = h[7] | 0,
        Z = Qt & 8191,
        L = Qt >>> 13,
        Xt = h[8] | 0,
        z = Xt & 8191,
        E = Xt >>> 13,
        Yt = h[9] | 0,
        N = Yt & 8191,
        O = Yt >>> 13,
        jt = o[0] | 0,
        I = jt & 8191,
        K = jt >>> 13,
        tr = o[1] | 0,
        P = tr & 8191,
        F = tr >>> 13,
        rr = o[2] | 0,
        D = rr & 8191,
        W = rr >>> 13,
        ir = o[3] | 0,
        C = ir & 8191,
        H = ir >>> 13,
        er = o[4] | 0,
        J = er & 8191,
        U = er >>> 13,
        hr = o[5] | 0,
        V = hr & 8191,
        G = hr >>> 13,
        nr = o[6] | 0,
        $ = nr & 8191,
        Q = nr >>> 13,
        fr = o[7] | 0,
        X = fr & 8191,
        Y = fr >>> 13,
        or = o[8] | 0,
        j = or & 8191,
        tt = or >>> 13,
        sr = o[9] | 0,
        rt = sr & 8191,
        it = sr >>> 13;
      e.negative = t.negative ^ i.negative, e.length = 19, n = Math.imul(m, I), r = Math.imul(m, K), r = r + Math.imul(p, I) | 0, f = Math.imul(p, K);
      var yt = (u + n | 0) + ((r & 8191) << 13) | 0;
      u = (f + (r >>> 13) | 0) + (yt >>> 26) | 0, yt &= 67108863, n = Math.imul(c, I), r = Math.imul(c, K), r = r + Math.imul(w, I) | 0, f = Math.imul(w, K), n = n + Math.imul(m, P) | 0, r = r + Math.imul(m, F) | 0, r = r + Math.imul(p, P) | 0, f = f + Math.imul(p, F) | 0;
      var xt = (u + n | 0) + ((r & 8191) << 13) | 0;
      u = (f + (r >>> 13) | 0) + (xt >>> 26) | 0, xt &= 67108863, n = Math.imul(y, I), r = Math.imul(y, K), r = r + Math.imul(x, I) | 0, f = Math.imul(x, K), n = n + Math.imul(c, P) | 0, r = r + Math.imul(c, F) | 0, r = r + Math.imul(w, P) | 0, f = f + Math.imul(w, F) | 0, n = n + Math.imul(m, D) | 0, r = r + Math.imul(m, W) | 0, r = r + Math.imul(p, D) | 0, f = f + Math.imul(p, W) | 0;
      var bt = (u + n | 0) + ((r & 8191) << 13) | 0;
      u = (f + (r >>> 13) | 0) + (bt >>> 26) | 0, bt &= 67108863, n = Math.imul(_, I), r = Math.imul(_, K), r = r + Math.imul(S, I) | 0, f = Math.imul(S, K), n = n + Math.imul(y, P) | 0, r = r + Math.imul(y, F) | 0, r = r + Math.imul(x, P) | 0, f = f + Math.imul(x, F) | 0, n = n + Math.imul(c, D) | 0, r = r + Math.imul(c, W) | 0, r = r + Math.imul(w, D) | 0, f = f + Math.imul(w, W) | 0, n = n + Math.imul(m, C) | 0, r = r + Math.imul(m, H) | 0, r = r + Math.imul(p, C) | 0, f = f + Math.imul(p, H) | 0;
      var _t = (u + n | 0) + ((r & 8191) << 13) | 0;
      u = (f + (r >>> 13) | 0) + (_t >>> 26) | 0, _t &= 67108863, n = Math.imul(A, I), r = Math.imul(A, K), r = r + Math.imul(B, I) | 0, f = Math.imul(B, K), n = n + Math.imul(_, P) | 0, r = r + Math.imul(_, F) | 0, r = r + Math.imul(S, P) | 0, f = f + Math.imul(S, F) | 0, n = n + Math.imul(y, D) | 0, r = r + Math.imul(y, W) | 0, r = r + Math.imul(x, D) | 0, f = f + Math.imul(x, W) | 0, n = n + Math.imul(c, C) | 0, r = r + Math.imul(c, H) | 0, r = r + Math.imul(w, C) | 0, f = f + Math.imul(w, H) | 0, n = n + Math.imul(m, J) | 0, r = r + Math.imul(m, U) | 0, r = r + Math.imul(p, J) | 0, f = f + Math.imul(p, U) | 0;
      var St = (u + n | 0) + ((r & 8191) << 13) | 0;
      u = (f + (r >>> 13) | 0) + (St >>> 26) | 0, St &= 67108863, n = Math.imul(k, I), r = Math.imul(k, K), r = r + Math.imul(q, I) | 0, f = Math.imul(q, K), n = n + Math.imul(A, P) | 0, r = r + Math.imul(A, F) | 0, r = r + Math.imul(B, P) | 0, f = f + Math.imul(B, F) | 0, n = n + Math.imul(_, D) | 0, r = r + Math.imul(_, W) | 0, r = r + Math.imul(S, D) | 0, f = f + Math.imul(S, W) | 0, n = n + Math.imul(y, C) | 0, r = r + Math.imul(y, H) | 0, r = r + Math.imul(x, C) | 0, f = f + Math.imul(x, H) | 0, n = n + Math.imul(c, J) | 0, r = r + Math.imul(c, U) | 0, r = r + Math.imul(w, J) | 0, f = f + Math.imul(w, U) | 0, n = n + Math.imul(m, V) | 0, r = r + Math.imul(m, G) | 0, r = r + Math.imul(p, V) | 0, f = f + Math.imul(p, G) | 0;
      var At = (u + n | 0) + ((r & 8191) << 13) | 0;
      u = (f + (r >>> 13) | 0) + (At >>> 26) | 0, At &= 67108863, n = Math.imul(R, I), r = Math.imul(R, K), r = r + Math.imul(T, I) | 0, f = Math.imul(T, K), n = n + Math.imul(k, P) | 0, r = r + Math.imul(k, F) | 0, r = r + Math.imul(q, P) | 0, f = f + Math.imul(q, F) | 0, n = n + Math.imul(A, D) | 0, r = r + Math.imul(A, W) | 0, r = r + Math.imul(B, D) | 0, f = f + Math.imul(B, W) | 0, n = n + Math.imul(_, C) | 0, r = r + Math.imul(_, H) | 0, r = r + Math.imul(S, C) | 0, f = f + Math.imul(S, H) | 0, n = n + Math.imul(y, J) | 0, r = r + Math.imul(y, U) | 0, r = r + Math.imul(x, J) | 0, f = f + Math.imul(x, U) | 0, n = n + Math.imul(c, V) | 0, r = r + Math.imul(c, G) | 0, r = r + Math.imul(w, V) | 0, f = f + Math.imul(w, G) | 0, n = n + Math.imul(m, $) | 0, r = r + Math.imul(m, Q) | 0, r = r + Math.imul(p, $) | 0, f = f + Math.imul(p, Q) | 0;
      var Bt = (u + n | 0) + ((r & 8191) << 13) | 0;
      u = (f + (r >>> 13) | 0) + (Bt >>> 26) | 0, Bt &= 67108863, n = Math.imul(Z, I), r = Math.imul(Z, K), r = r + Math.imul(L, I) | 0, f = Math.imul(L, K), n = n + Math.imul(R, P) | 0, r = r + Math.imul(R, F) | 0, r = r + Math.imul(T, P) | 0, f = f + Math.imul(T, F) | 0, n = n + Math.imul(k, D) | 0, r = r + Math.imul(k, W) | 0, r = r + Math.imul(q, D) | 0, f = f + Math.imul(q, W) | 0, n = n + Math.imul(A, C) | 0, r = r + Math.imul(A, H) | 0, r = r + Math.imul(B, C) | 0, f = f + Math.imul(B, H) | 0, n = n + Math.imul(_, J) | 0, r = r + Math.imul(_, U) | 0, r = r + Math.imul(S, J) | 0, f = f + Math.imul(S, U) | 0, n = n + Math.imul(y, V) | 0, r = r + Math.imul(y, G) | 0, r = r + Math.imul(x, V) | 0, f = f + Math.imul(x, G) | 0, n = n + Math.imul(c, $) | 0, r = r + Math.imul(c, Q) | 0, r = r + Math.imul(w, $) | 0, f = f + Math.imul(w, Q) | 0, n = n + Math.imul(m, X) | 0, r = r + Math.imul(m, Y) | 0, r = r + Math.imul(p, X) | 0, f = f + Math.imul(p, Y) | 0;
      var kt = (u + n | 0) + ((r & 8191) << 13) | 0;
      u = (f + (r >>> 13) | 0) + (kt >>> 26) | 0, kt &= 67108863, n = Math.imul(z, I), r = Math.imul(z, K), r = r + Math.imul(E, I) | 0, f = Math.imul(E, K), n = n + Math.imul(Z, P) | 0, r = r + Math.imul(Z, F) | 0, r = r + Math.imul(L, P) | 0, f = f + Math.imul(L, F) | 0, n = n + Math.imul(R, D) | 0, r = r + Math.imul(R, W) | 0, r = r + Math.imul(T, D) | 0, f = f + Math.imul(T, W) | 0, n = n + Math.imul(k, C) | 0, r = r + Math.imul(k, H) | 0, r = r + Math.imul(q, C) | 0, f = f + Math.imul(q, H) | 0, n = n + Math.imul(A, J) | 0, r = r + Math.imul(A, U) | 0, r = r + Math.imul(B, J) | 0, f = f + Math.imul(B, U) | 0, n = n + Math.imul(_, V) | 0, r = r + Math.imul(_, G) | 0, r = r + Math.imul(S, V) | 0, f = f + Math.imul(S, G) | 0, n = n + Math.imul(y, $) | 0, r = r + Math.imul(y, Q) | 0, r = r + Math.imul(x, $) | 0, f = f + Math.imul(x, Q) | 0, n = n + Math.imul(c, X) | 0, r = r + Math.imul(c, Y) | 0, r = r + Math.imul(w, X) | 0, f = f + Math.imul(w, Y) | 0, n = n + Math.imul(m, j) | 0, r = r + Math.imul(m, tt) | 0, r = r + Math.imul(p, j) | 0, f = f + Math.imul(p, tt) | 0;
      var qt = (u + n | 0) + ((r & 8191) << 13) | 0;
      u = (f + (r >>> 13) | 0) + (qt >>> 26) | 0, qt &= 67108863, n = Math.imul(N, I), r = Math.imul(N, K), r = r + Math.imul(O, I) | 0, f = Math.imul(O, K), n = n + Math.imul(z, P) | 0, r = r + Math.imul(z, F) | 0, r = r + Math.imul(E, P) | 0, f = f + Math.imul(E, F) | 0, n = n + Math.imul(Z, D) | 0, r = r + Math.imul(Z, W) | 0, r = r + Math.imul(L, D) | 0, f = f + Math.imul(L, W) | 0, n = n + Math.imul(R, C) | 0, r = r + Math.imul(R, H) | 0, r = r + Math.imul(T, C) | 0, f = f + Math.imul(T, H) | 0, n = n + Math.imul(k, J) | 0, r = r + Math.imul(k, U) | 0, r = r + Math.imul(q, J) | 0, f = f + Math.imul(q, U) | 0, n = n + Math.imul(A, V) | 0, r = r + Math.imul(A, G) | 0, r = r + Math.imul(B, V) | 0, f = f + Math.imul(B, G) | 0, n = n + Math.imul(_, $) | 0, r = r + Math.imul(_, Q) | 0, r = r + Math.imul(S, $) | 0, f = f + Math.imul(S, Q) | 0, n = n + Math.imul(y, X) | 0, r = r + Math.imul(y, Y) | 0, r = r + Math.imul(x, X) | 0, f = f + Math.imul(x, Y) | 0, n = n + Math.imul(c, j) | 0, r = r + Math.imul(c, tt) | 0, r = r + Math.imul(w, j) | 0, f = f + Math.imul(w, tt) | 0, n = n + Math.imul(m, rt) | 0, r = r + Math.imul(m, it) | 0, r = r + Math.imul(p, rt) | 0, f = f + Math.imul(p, it) | 0;
      var Rt = (u + n | 0) + ((r & 8191) << 13) | 0;
      u = (f + (r >>> 13) | 0) + (Rt >>> 26) | 0, Rt &= 67108863, n = Math.imul(N, P), r = Math.imul(N, F), r = r + Math.imul(O, P) | 0, f = Math.imul(O, F), n = n + Math.imul(z, D) | 0, r = r + Math.imul(z, W) | 0, r = r + Math.imul(E, D) | 0, f = f + Math.imul(E, W) | 0, n = n + Math.imul(Z, C) | 0, r = r + Math.imul(Z, H) | 0, r = r + Math.imul(L, C) | 0, f = f + Math.imul(L, H) | 0, n = n + Math.imul(R, J) | 0, r = r + Math.imul(R, U) | 0, r = r + Math.imul(T, J) | 0, f = f + Math.imul(T, U) | 0, n = n + Math.imul(k, V) | 0, r = r + Math.imul(k, G) | 0, r = r + Math.imul(q, V) | 0, f = f + Math.imul(q, G) | 0, n = n + Math.imul(A, $) | 0, r = r + Math.imul(A, Q) | 0, r = r + Math.imul(B, $) | 0, f = f + Math.imul(B, Q) | 0, n = n + Math.imul(_, X) | 0, r = r + Math.imul(_, Y) | 0, r = r + Math.imul(S, X) | 0, f = f + Math.imul(S, Y) | 0, n = n + Math.imul(y, j) | 0, r = r + Math.imul(y, tt) | 0, r = r + Math.imul(x, j) | 0, f = f + Math.imul(x, tt) | 0, n = n + Math.imul(c, rt) | 0, r = r + Math.imul(c, it) | 0, r = r + Math.imul(w, rt) | 0, f = f + Math.imul(w, it) | 0;
      var Tt = (u + n | 0) + ((r & 8191) << 13) | 0;
      u = (f + (r >>> 13) | 0) + (Tt >>> 26) | 0, Tt &= 67108863, n = Math.imul(N, D), r = Math.imul(N, W), r = r + Math.imul(O, D) | 0, f = Math.imul(O, W), n = n + Math.imul(z, C) | 0, r = r + Math.imul(z, H) | 0, r = r + Math.imul(E, C) | 0, f = f + Math.imul(E, H) | 0, n = n + Math.imul(Z, J) | 0, r = r + Math.imul(Z, U) | 0, r = r + Math.imul(L, J) | 0, f = f + Math.imul(L, U) | 0, n = n + Math.imul(R, V) | 0, r = r + Math.imul(R, G) | 0, r = r + Math.imul(T, V) | 0, f = f + Math.imul(T, G) | 0, n = n + Math.imul(k, $) | 0, r = r + Math.imul(k, Q) | 0, r = r + Math.imul(q, $) | 0, f = f + Math.imul(q, Q) | 0, n = n + Math.imul(A, X) | 0, r = r + Math.imul(A, Y) | 0, r = r + Math.imul(B, X) | 0, f = f + Math.imul(B, Y) | 0, n = n + Math.imul(_, j) | 0, r = r + Math.imul(_, tt) | 0, r = r + Math.imul(S, j) | 0, f = f + Math.imul(S, tt) | 0, n = n + Math.imul(y, rt) | 0, r = r + Math.imul(y, it) | 0, r = r + Math.imul(x, rt) | 0, f = f + Math.imul(x, it) | 0;
      var Zt = (u + n | 0) + ((r & 8191) << 13) | 0;
      u = (f + (r >>> 13) | 0) + (Zt >>> 26) | 0, Zt &= 67108863, n = Math.imul(N, C), r = Math.imul(N, H), r = r + Math.imul(O, C) | 0, f = Math.imul(O, H), n = n + Math.imul(z, J) | 0, r = r + Math.imul(z, U) | 0, r = r + Math.imul(E, J) | 0, f = f + Math.imul(E, U) | 0, n = n + Math.imul(Z, V) | 0, r = r + Math.imul(Z, G) | 0, r = r + Math.imul(L, V) | 0, f = f + Math.imul(L, G) | 0, n = n + Math.imul(R, $) | 0, r = r + Math.imul(R, Q) | 0, r = r + Math.imul(T, $) | 0, f = f + Math.imul(T, Q) | 0, n = n + Math.imul(k, X) | 0, r = r + Math.imul(k, Y) | 0, r = r + Math.imul(q, X) | 0, f = f + Math.imul(q, Y) | 0, n = n + Math.imul(A, j) | 0, r = r + Math.imul(A, tt) | 0, r = r + Math.imul(B, j) | 0, f = f + Math.imul(B, tt) | 0, n = n + Math.imul(_, rt) | 0, r = r + Math.imul(_, it) | 0, r = r + Math.imul(S, rt) | 0, f = f + Math.imul(S, it) | 0;
      var Lt = (u + n | 0) + ((r & 8191) << 13) | 0;
      u = (f + (r >>> 13) | 0) + (Lt >>> 26) | 0, Lt &= 67108863, n = Math.imul(N, J), r = Math.imul(N, U), r = r + Math.imul(O, J) | 0, f = Math.imul(O, U), n = n + Math.imul(z, V) | 0, r = r + Math.imul(z, G) | 0, r = r + Math.imul(E, V) | 0, f = f + Math.imul(E, G) | 0, n = n + Math.imul(Z, $) | 0, r = r + Math.imul(Z, Q) | 0, r = r + Math.imul(L, $) | 0, f = f + Math.imul(L, Q) | 0, n = n + Math.imul(R, X) | 0, r = r + Math.imul(R, Y) | 0, r = r + Math.imul(T, X) | 0, f = f + Math.imul(T, Y) | 0, n = n + Math.imul(k, j) | 0, r = r + Math.imul(k, tt) | 0, r = r + Math.imul(q, j) | 0, f = f + Math.imul(q, tt) | 0, n = n + Math.imul(A, rt) | 0, r = r + Math.imul(A, it) | 0, r = r + Math.imul(B, rt) | 0, f = f + Math.imul(B, it) | 0;
      var zt = (u + n | 0) + ((r & 8191) << 13) | 0;
      u = (f + (r >>> 13) | 0) + (zt >>> 26) | 0, zt &= 67108863, n = Math.imul(N, V), r = Math.imul(N, G), r = r + Math.imul(O, V) | 0, f = Math.imul(O, G), n = n + Math.imul(z, $) | 0, r = r + Math.imul(z, Q) | 0, r = r + Math.imul(E, $) | 0, f = f + Math.imul(E, Q) | 0, n = n + Math.imul(Z, X) | 0, r = r + Math.imul(Z, Y) | 0, r = r + Math.imul(L, X) | 0, f = f + Math.imul(L, Y) | 0, n = n + Math.imul(R, j) | 0, r = r + Math.imul(R, tt) | 0, r = r + Math.imul(T, j) | 0, f = f + Math.imul(T, tt) | 0, n = n + Math.imul(k, rt) | 0, r = r + Math.imul(k, it) | 0, r = r + Math.imul(q, rt) | 0, f = f + Math.imul(q, it) | 0;
      var Et = (u + n | 0) + ((r & 8191) << 13) | 0;
      u = (f + (r >>> 13) | 0) + (Et >>> 26) | 0, Et &= 67108863, n = Math.imul(N, $), r = Math.imul(N, Q), r = r + Math.imul(O, $) | 0, f = Math.imul(O, Q), n = n + Math.imul(z, X) | 0, r = r + Math.imul(z, Y) | 0, r = r + Math.imul(E, X) | 0, f = f + Math.imul(E, Y) | 0, n = n + Math.imul(Z, j) | 0, r = r + Math.imul(Z, tt) | 0, r = r + Math.imul(L, j) | 0, f = f + Math.imul(L, tt) | 0, n = n + Math.imul(R, rt) | 0, r = r + Math.imul(R, it) | 0, r = r + Math.imul(T, rt) | 0, f = f + Math.imul(T, it) | 0;
      var Nt = (u + n | 0) + ((r & 8191) << 13) | 0;
      u = (f + (r >>> 13) | 0) + (Nt >>> 26) | 0, Nt &= 67108863, n = Math.imul(N, X), r = Math.imul(N, Y), r = r + Math.imul(O, X) | 0, f = Math.imul(O, Y), n = n + Math.imul(z, j) | 0, r = r + Math.imul(z, tt) | 0, r = r + Math.imul(E, j) | 0, f = f + Math.imul(E, tt) | 0, n = n + Math.imul(Z, rt) | 0, r = r + Math.imul(Z, it) | 0, r = r + Math.imul(L, rt) | 0, f = f + Math.imul(L, it) | 0;
      var Ot = (u + n | 0) + ((r & 8191) << 13) | 0;
      u = (f + (r >>> 13) | 0) + (Ot >>> 26) | 0, Ot &= 67108863, n = Math.imul(N, j), r = Math.imul(N, tt), r = r + Math.imul(O, j) | 0, f = Math.imul(O, tt), n = n + Math.imul(z, rt) | 0, r = r + Math.imul(z, it) | 0, r = r + Math.imul(E, rt) | 0, f = f + Math.imul(E, it) | 0;
      var It = (u + n | 0) + ((r & 8191) << 13) | 0;
      u = (f + (r >>> 13) | 0) + (It >>> 26) | 0, It &= 67108863, n = Math.imul(N, rt), r = Math.imul(N, it), r = r + Math.imul(O, rt) | 0, f = Math.imul(O, it);
      var Kt = (u + n | 0) + ((r & 8191) << 13) | 0;
      return u = (f + (r >>> 13) | 0) + (Kt >>> 26) | 0, Kt &= 67108863, a[0] = yt, a[1] = xt, a[2] = bt, a[3] = _t, a[4] = St, a[5] = At, a[6] = Bt, a[7] = kt, a[8] = qt, a[9] = Rt, a[10] = Tt, a[11] = Zt, a[12] = Lt, a[13] = zt, a[14] = Et, a[15] = Nt, a[16] = Ot, a[17] = It, a[18] = Kt, u !== 0 && (a[19] = u, e.length++), e
    };
    Math.imul || (Wt = Dt);

    function dr(s, t, i) {
      i.negative = t.negative ^ s.negative, i.length = s.length + t.length;
      for (var e = 0, h = 0, o = 0; o < i.length - 1; o++) {
        var a = h;
        h = 0;
        for (var u = e & 67108863, n = Math.min(o, t.length - 1), r = Math.max(0, o - s.length + 1); r <= n; r++) {
          var f = o - r,
            d = s.words[f] | 0,
            m = t.words[r] | 0,
            p = d * m,
            M = p & 67108863;
          a = a + (p / 67108864 | 0) | 0, M = M + u | 0, u = M & 67108863, a = a + (M >>> 26) | 0, h += a >>> 26, a &= 67108863
        }
        i.words[o] = u, e = a, a = h
      }
      return e !== 0 ? i.words[o] = e : i.length--, i.strip()
    }

    function Ct(s, t, i) {
      var e = new st;
      return e.mulp(s, t, i)
    }
    l.prototype.mulTo = function(t, i) {
      var e, h = this.length + t.length;
      return this.length === 10 && t.length === 10 ? e = Wt(this, t, i) : h < 63 ? e = Dt(this, t, i) : h < 1024 ? e = dr(this, t, i) : e = Ct(this, t, i), e
    };

    function st(s, t) {
      this.x = s, this.y = t
    }
    st.prototype.makeRBT = function(t) {
      for (var i = new Array(t), e = l.prototype._countBits(t) - 1, h = 0; h < t; h++) i[h] = this.revBin(h, e, t);
      return i
    }, st.prototype.revBin = function(t, i, e) {
      if (t === 0 || t === e - 1) return t;
      for (var h = 0, o = 0; o < i; o++) h |= (t & 1) << i - o - 1, t >>= 1;
      return h
    }, st.prototype.permute = function(t, i, e, h, o, a) {
      for (var u = 0; u < a; u++) h[u] = i[t[u]], o[u] = e[t[u]]
    }, st.prototype.transform = function(t, i, e, h, o, a) {
      this.permute(a, t, i, e, h, o);
      for (var u = 1; u < o; u <<= 1)
        for (var n = u << 1, r = Math.cos(2 * Math.PI / n), f = Math.sin(2 * Math.PI / n), d = 0; d < o; d += n)
          for (var m = r, p = f, M = 0; M < u; M++) {
            var c = e[d + M],
              w = h[d + M],
              vt = e[d + M + u],
              y = h[d + M + u],
              x = m * vt - p * y;
            y = m * y + p * vt, vt = x, e[d + M] = c + vt, h[d + M] = w + y, e[d + M + u] = c - vt, h[d + M + u] = w - y, M !== n && (x = r * m - f * p, p = r * p + f * m, m = x)
          }
    }, st.prototype.guessLen13b = function(t, i) {
      var e = Math.max(i, t) | 1,
        h = e & 1,
        o = 0;
      for (e = e / 2 | 0; e; e = e >>> 1) o++;
      return 1 << o + 1 + h
    }, st.prototype.conjugate = function(t, i, e) {
      if (!(e <= 1))
        for (var h = 0; h < e / 2; h++) {
          var o = t[h];
          t[h] = t[e - h - 1], t[e - h - 1] = o, o = i[h], i[h] = -i[e - h - 1], i[e - h - 1] = -o
        }
    }, st.prototype.normalize13b = function(t, i) {
      for (var e = 0, h = 0; h < i / 2; h++) {
        var o = Math.round(t[2 * h + 1] / i) * 8192 + Math.round(t[2 * h] / i) + e;
        t[h] = o & 67108863, o < 67108864 ? e = 0 : e = o / 67108864 | 0
      }
      return t
    }, st.prototype.convert13b = function(t, i, e, h) {
      for (var o = 0, a = 0; a < i; a++) o = o + (t[a] | 0), e[2 * a] = o & 8191, o = o >>> 13, e[2 * a + 1] = o & 8191, o = o >>> 13;
      for (a = 2 * i; a < h; ++a) e[a] = 0;
      v(o === 0), v((o & -8192) === 0)
    }, st.prototype.stub = function(t) {
      for (var i = new Array(t), e = 0; e < t; e++) i[e] = 0;
      return i
    }, st.prototype.mulp = function(t, i, e) {
      var h = 2 * this.guessLen13b(t.length, i.length),
        o = this.makeRBT(h),
        a = this.stub(h),
        u = new Array(h),
        n = new Array(h),
        r = new Array(h),
        f = new Array(h),
        d = new Array(h),
        m = new Array(h),
        p = e.words;
      p.length = h, this.convert13b(t.words, t.length, u, h), this.convert13b(i.words, i.length, f, h), this.transform(u, a, n, r, h, o), this.transform(f, a, d, m, h, o);
      for (var M = 0; M < h; M++) {
        var c = n[M] * d[M] - r[M] * m[M];
        r[M] = n[M] * m[M] + r[M] * d[M], n[M] = c
      }
      return this.conjugate(n, r, h), this.transform(n, r, p, a, h, o), this.conjugate(p, a, h), this.normalize13b(p, h), e.negative = t.negative ^ i.negative, e.length = t.length + i.length, e.strip()
    }, l.prototype.mul = function(t) {
      var i = new l(null);
      return i.words = new Array(this.length + t.length), this.mulTo(t, i)
    }, l.prototype.mulf = function(t) {
      var i = new l(null);
      return i.words = new Array(this.length + t.length), Ct(this, t, i)
    }, l.prototype.imul = function(t) {
      return this.clone().mulTo(t, this)
    }, l.prototype.imuln = function(t) {
      v(typeof t == "number"), v(t < 67108864);
      for (var i = 0, e = 0; e < this.length; e++) {
        var h = (this.words[e] | 0) * t,
          o = (h & 67108863) + (i & 67108863);
        i >>= 26, i += h / 67108864 | 0, i += o >>> 26, this.words[e] = o & 67108863
      }
      return i !== 0 && (this.words[e] = i, this.length++), this
    }, l.prototype.muln = function(t) {
      return this.clone().imuln(t)
    }, l.prototype.sqr = function() {
      return this.mul(this)
    }, l.prototype.isqr = function() {
      return this.imul(this.clone())
    }, l.prototype.pow = function(t) {
      var i = vr(t);
      if (i.length === 0) return new l(1);
      for (var e = this, h = 0; h < i.length && i[h] === 0; h++, e = e.sqr());
      if (++h < i.length)
        for (var o = e.sqr(); h < i.length; h++, o = o.sqr()) i[h] !== 0 && (e = e.mul(o));
      return e
    }, l.prototype.iushln = function(t) {
      v(typeof t == "number" && t >= 0);
      var i = t % 26,
        e = (t - i) / 26,
        h = 67108863 >>> 26 - i << 26 - i,
        o;
      if (i !== 0) {
        var a = 0;
        for (o = 0; o < this.length; o++) {
          var u = this.words[o] & h,
            n = (this.words[o] | 0) - u << i;
          this.words[o] = n | a, a = u >>> 26 - i
        }
        a && (this.words[o] = a, this.length++)
      }
      if (e !== 0) {
        for (o = this.length - 1; o >= 0; o--) this.words[o + e] = this.words[o];
        for (o = 0; o < e; o++) this.words[o] = 0;
        this.length += e
      }
      return this.strip()
    }, l.prototype.ishln = function(t) {
      return v(this.negative === 0), this.iushln(t)
    }, l.prototype.iushrn = function(t, i, e) {
      v(typeof t == "number" && t >= 0);
      var h;
      i ? h = (i - i % 26) / 26 : h = 0;
      var o = t % 26,
        a = Math.min((t - o) / 26, this.length),
        u = 67108863 ^ 67108863 >>> o << o,
        n = e;
      if (h -= a, h = Math.max(0, h), n) {
        for (var r = 0; r < a; r++) n.words[r] = this.words[r];
        n.length = a
      }
      if (a !== 0)
        if (this.length > a)
          for (this.length -= a, r = 0; r < this.length; r++) this.words[r] = this.words[r + a];
        else this.words[0] = 0, this.length = 1;
      var f = 0;
      for (r = this.length - 1; r >= 0 && (f !== 0 || r >= h); r--) {
        var d = this.words[r] | 0;
        this.words[r] = f << 26 - o | d >>> o, f = d & u
      }
      return n && f !== 0 && (n.words[n.length++] = f), this.length === 0 && (this.words[0] = 0, this.length = 1), this.strip()
    }, l.prototype.ishrn = function(t, i, e) {
      return v(this.negative === 0), this.iushrn(t, i, e)
    }, l.prototype.shln = function(t) {
      return this.clone().ishln(t)
    }, l.prototype.ushln = function(t) {
      return this.clone().iushln(t)
    }, l.prototype.shrn = function(t) {
      return this.clone().ishrn(t)
    }, l.prototype.ushrn = function(t) {
      return this.clone().iushrn(t)
    }, l.prototype.testn = function(t) {
      v(typeof t == "number" && t >= 0);
      var i = t % 26,
        e = (t - i) / 26,
        h = 1 << i;
      if (this.length <= e) return !1;
      var o = this.words[e];
      return !!(o & h)
    }, l.prototype.imaskn = function(t) {
      v(typeof t == "number" && t >= 0);
      var i = t % 26,
        e = (t - i) / 26;
      if (v(this.negative === 0, "imaskn works only with positive numbers"), this.length <= e) return this;
      if (i !== 0 && e++, this.length = Math.min(e, this.length), i !== 0) {
        var h = 67108863 ^ 67108863 >>> i << i;
        this.words[this.length - 1] &= h
      }
      return this.strip()
    }, l.prototype.maskn = function(t) {
      return this.clone().imaskn(t)
    }, l.prototype.iaddn = function(t) {
      return v(typeof t == "number"), v(t < 67108864), t < 0 ? this.isubn(-t) : this.negative !== 0 ? this.length === 1 && (this.words[0] | 0) < t ? (this.words[0] = t - (this.words[0] | 0), this.negative = 0, this) : (this.negative = 0, this.isubn(t), this.negative = 1, this) : this._iaddn(t)
    }, l.prototype._iaddn = function(t) {
      this.words[0] += t;
      for (var i = 0; i < this.length && this.words[i] >= 67108864; i++) this.words[i] -= 67108864, i === this.length - 1 ? this.words[i + 1] = 1 : this.words[i + 1]++;
      return this.length = Math.max(this.length, i + 1), this
    }, l.prototype.isubn = function(t) {
      if (v(typeof t == "number"), v(t < 67108864), t < 0) return this.iaddn(-t);
      if (this.negative !== 0) return this.negative = 0, this.iaddn(t), this.negative = 1, this;
      if (this.words[0] -= t, this.length === 1 && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
      else
        for (var i = 0; i < this.length && this.words[i] < 0; i++) this.words[i] += 67108864, this.words[i + 1] -= 1;
      return this.strip()
    }, l.prototype.addn = function(t) {
      return this.clone().iaddn(t)
    }, l.prototype.subn = function(t) {
      return this.clone().isubn(t)
    }, l.prototype.iabs = function() {
      return this.negative = 0, this
    }, l.prototype.abs = function() {
      return this.clone().iabs()
    }, l.prototype._ishlnsubmul = function(t, i, e) {
      var h = t.length + e,
        o;
      this._expand(h);
      var a, u = 0;
      for (o = 0; o < t.length; o++) {
        a = (this.words[o + e] | 0) + u;
        var n = (t.words[o] | 0) * i;
        a -= n & 67108863, u = (a >> 26) - (n / 67108864 | 0), this.words[o + e] = a & 67108863
      }
      for (; o < this.length - e; o++) a = (this.words[o + e] | 0) + u, u = a >> 26, this.words[o + e] = a & 67108863;
      if (u === 0) return this.strip();
      for (v(u === -1), u = 0, o = 0; o < this.length; o++) a = -(this.words[o] | 0) + u, u = a >> 26, this.words[o] = a & 67108863;
      return this.negative = 1, this.strip()
    }, l.prototype._wordDiv = function(t, i) {
      var e = this.length - t.length,
        h = this.clone(),
        o = t,
        a = o.words[o.length - 1] | 0,
        u = this._countBits(a);
      e = 26 - u, e !== 0 && (o = o.ushln(e), h.iushln(e), a = o.words[o.length - 1] | 0);
      var n = h.length - o.length,
        r;
      if (i !== "mod") {
        r = new l(null), r.length = n + 1, r.words = new Array(r.length);
        for (var f = 0; f < r.length; f++) r.words[f] = 0
      }
      var d = h.clone()._ishlnsubmul(o, 1, n);
      d.negative === 0 && (h = d, r && (r.words[n] = 1));
      for (var m = n - 1; m >= 0; m--) {
        var p = (h.words[o.length + m] | 0) * 67108864 + (h.words[o.length + m - 1] | 0);
        for (p = Math.min(p / a | 0, 67108863), h._ishlnsubmul(o, p, m); h.negative !== 0;) p--, h.negative = 0, h._ishlnsubmul(o, 1, m), h.isZero() || (h.negative ^= 1);
        r && (r.words[m] = p)
      }
      return r && r.strip(), h.strip(), i !== "div" && e !== 0 && h.iushrn(e), {
        div: r || null,
        mod: h
      }
    }, l.prototype.divmod = function(t, i, e) {
      if (v(!t.isZero()), this.isZero()) return {
        div: new l(0),
        mod: new l(0)
      };
      var h, o, a;
      return this.negative !== 0 && t.negative === 0 ? (a = this.neg().divmod(t, i), i !== "mod" && (h = a.div.neg()), i !== "div" && (o = a.mod.neg(), e && o.negative !== 0 && o.iadd(t)), {
        div: h,
        mod: o
      }) : this.negative === 0 && t.negative !== 0 ? (a = this.divmod(t.neg(), i), i !== "mod" && (h = a.div.neg()), {
        div: h,
        mod: a.mod
      }) : this.negative & t.negative ? (a = this.neg().divmod(t.neg(), i), i !== "div" && (o = a.mod.neg(), e && o.negative !== 0 && o.isub(t)), {
        div: a.div,
        mod: o
      }) : t.length > this.length || this.cmp(t) < 0 ? {
        div: new l(0),
        mod: this
      } : t.length === 1 ? i === "div" ? {
        div: this.divn(t.words[0]),
        mod: null
      } : i === "mod" ? {
        div: null,
        mod: new l(this.modn(t.words[0]))
      } : {
        div: this.divn(t.words[0]),
        mod: new l(this.modn(t.words[0]))
      } : this._wordDiv(t, i)
    }, l.prototype.div = function(t) {
      return this.divmod(t, "div", !1).div
    }, l.prototype.mod = function(t) {
      return this.divmod(t, "mod", !1).mod
    }, l.prototype.umod = function(t) {
      return this.divmod(t, "mod", !0).mod
    }, l.prototype.divRound = function(t) {
      var i = this.divmod(t);
      if (i.mod.isZero()) return i.div;
      var e = i.div.negative !== 0 ? i.mod.isub(t) : i.mod,
        h = t.ushrn(1),
        o = t.andln(1),
        a = e.cmp(h);
      return a < 0 || o === 1 && a === 0 ? i.div : i.div.negative !== 0 ? i.div.isubn(1) : i.div.iaddn(1)
    }, l.prototype.modn = function(t) {
      v(t <= 67108863);
      for (var i = (1 << 26) % t, e = 0, h = this.length - 1; h >= 0; h--) e = (i * e + (this.words[h] | 0)) % t;
      return e
    }, l.prototype.idivn = function(t) {
      v(t <= 67108863);
      for (var i = 0, e = this.length - 1; e >= 0; e--) {
        var h = (this.words[e] | 0) + i * 67108864;
        this.words[e] = h / t | 0, i = h % t
      }
      return this.strip()
    }, l.prototype.divn = function(t) {
      return this.clone().idivn(t)
    }, l.prototype.egcd = function(t) {
      v(t.negative === 0), v(!t.isZero());
      var i = this,
        e = t.clone();
      i.negative !== 0 ? i = i.umod(t) : i = i.clone();
      for (var h = new l(1), o = new l(0), a = new l(0), u = new l(1), n = 0; i.isEven() && e.isEven();) i.iushrn(1), e.iushrn(1), ++n;
      for (var r = e.clone(), f = i.clone(); !i.isZero();) {
        for (var d = 0, m = 1; !(i.words[0] & m) && d < 26; ++d, m <<= 1);
        if (d > 0)
          for (i.iushrn(d); d-- > 0;)(h.isOdd() || o.isOdd()) && (h.iadd(r), o.isub(f)), h.iushrn(1), o.iushrn(1);
        for (var p = 0, M = 1; !(e.words[0] & M) && p < 26; ++p, M <<= 1);
        if (p > 0)
          for (e.iushrn(p); p-- > 0;)(a.isOdd() || u.isOdd()) && (a.iadd(r), u.isub(f)), a.iushrn(1), u.iushrn(1);
        i.cmp(e) >= 0 ? (i.isub(e), h.isub(a), o.isub(u)) : (e.isub(i), a.isub(h), u.isub(o))
      }
      return {
        a,
        b: u,
        gcd: e.iushln(n)
      }
    }, l.prototype._invmp = function(t) {
      v(t.negative === 0), v(!t.isZero());
      var i = this,
        e = t.clone();
      i.negative !== 0 ? i = i.umod(t) : i = i.clone();
      for (var h = new l(1), o = new l(0), a = e.clone(); i.cmpn(1) > 0 && e.cmpn(1) > 0;) {
        for (var u = 0, n = 1; !(i.words[0] & n) && u < 26; ++u, n <<= 1);
        if (u > 0)
          for (i.iushrn(u); u-- > 0;) h.isOdd() && h.iadd(a), h.iushrn(1);
        for (var r = 0, f = 1; !(e.words[0] & f) && r < 26; ++r, f <<= 1);
        if (r > 0)
          for (e.iushrn(r); r-- > 0;) o.isOdd() && o.iadd(a), o.iushrn(1);
        i.cmp(e) >= 0 ? (i.isub(e), h.isub(o)) : (e.isub(i), o.isub(h))
      }
      var d;
      return i.cmpn(1) === 0 ? d = h : d = o, d.cmpn(0) < 0 && d.iadd(t), d
    }, l.prototype.gcd = function(t) {
      if (this.isZero()) return t.abs();
      if (t.isZero()) return this.abs();
      var i = this.clone(),
        e = t.clone();
      i.negative = 0, e.negative = 0;
      for (var h = 0; i.isEven() && e.isEven(); h++) i.iushrn(1), e.iushrn(1);
      do {
        for (; i.isEven();) i.iushrn(1);
        for (; e.isEven();) e.iushrn(1);
        var o = i.cmp(e);
        if (o < 0) {
          var a = i;
          i = e, e = a
        } else if (o === 0 || e.cmpn(1) === 0) break;
        i.isub(e)
      } while (!0);
      return e.iushln(h)
    }, l.prototype.invm = function(t) {
      return this.egcd(t).a.umod(t)
    }, l.prototype.isEven = function() {
      return (this.words[0] & 1) === 0
    }, l.prototype.isOdd = function() {
      return (this.words[0] & 1) === 1
    }, l.prototype.andln = function(t) {
      return this.words[0] & t
    }, l.prototype.bincn = function(t) {
      v(typeof t == "number");
      var i = t % 26,
        e = (t - i) / 26,
        h = 1 << i;
      if (this.length <= e) return this._expand(e + 1), this.words[e] |= h, this;
      for (var o = h, a = e; o !== 0 && a < this.length; a++) {
        var u = this.words[a] | 0;
        u += o, o = u >>> 26, u &= 67108863, this.words[a] = u
      }
      return o !== 0 && (this.words[a] = o, this.length++), this
    }, l.prototype.isZero = function() {
      return this.length === 1 && this.words[0] === 0
    }, l.prototype.cmpn = function(t) {
      var i = t < 0;
      if (this.negative !== 0 && !i) return -1;
      if (this.negative === 0 && i) return 1;
      this.strip();
      var e;
      if (this.length > 1) e = 1;
      else {
        i && (t = -t), v(t <= 67108863, "Number is too big");
        var h = this.words[0] | 0;
        e = h === t ? 0 : h < t ? -1 : 1
      }
      return this.negative !== 0 ? -e | 0 : e
    }, l.prototype.cmp = function(t) {
      if (this.negative !== 0 && t.negative === 0) return -1;
      if (this.negative === 0 && t.negative !== 0) return 1;
      var i = this.ucmp(t);
      return this.negative !== 0 ? -i | 0 : i
    }, l.prototype.ucmp = function(t) {
      if (this.length > t.length) return 1;
      if (this.length < t.length) return -1;
      for (var i = 0, e = this.length - 1; e >= 0; e--) {
        var h = this.words[e] | 0,
          o = t.words[e] | 0;
        if (h !== o) {
          h < o ? i = -1 : h > o && (i = 1);
          break
        }
      }
      return i
    }, l.prototype.gtn = function(t) {
      return this.cmpn(t) === 1
    }, l.prototype.gt = function(t) {
      return this.cmp(t) === 1
    }, l.prototype.gten = function(t) {
      return this.cmpn(t) >= 0
    }, l.prototype.gte = function(t) {
      return this.cmp(t) >= 0
    }, l.prototype.ltn = function(t) {
      return this.cmpn(t) === -1
    }, l.prototype.lt = function(t) {
      return this.cmp(t) === -1
    }, l.prototype.lten = function(t) {
      return this.cmpn(t) <= 0
    }, l.prototype.lte = function(t) {
      return this.cmp(t) <= 0
    }, l.prototype.eqn = function(t) {
      return this.cmpn(t) === 0
    }, l.prototype.eq = function(t) {
      return this.cmp(t) === 0
    }, l.red = function(t) {
      return new b(t)
    }, l.prototype.toRed = function(t) {
      return v(!this.red, "Already a number in reduction context"), v(this.negative === 0, "red works only with positives"), t.convertTo(this)._forceRed(t)
    }, l.prototype.fromRed = function() {
      return v(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
    }, l.prototype._forceRed = function(t) {
      return this.red = t, this
    }, l.prototype.forceRed = function(t) {
      return v(!this.red, "Already a number in reduction context"), this._forceRed(t)
    }, l.prototype.redAdd = function(t) {
      return v(this.red, "redAdd works only with red numbers"), this.red.add(this, t)
    }, l.prototype.redIAdd = function(t) {
      return v(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, t)
    }, l.prototype.redSub = function(t) {
      return v(this.red, "redSub works only with red numbers"), this.red.sub(this, t)
    }, l.prototype.redISub = function(t) {
      return v(this.red, "redISub works only with red numbers"), this.red.isub(this, t)
    }, l.prototype.redShl = function(t) {
      return v(this.red, "redShl works only with red numbers"), this.red.shl(this, t)
    }, l.prototype.redMul = function(t) {
      return v(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.mul(this, t)
    }, l.prototype.redIMul = function(t) {
      return v(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.imul(this, t)
    }, l.prototype.redSqr = function() {
      return v(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
    }, l.prototype.redISqr = function() {
      return v(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
    }, l.prototype.redSqrt = function() {
      return v(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
    }, l.prototype.redInvm = function() {
      return v(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
    }, l.prototype.redNeg = function() {
      return v(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
    }, l.prototype.redPow = function(t) {
      return v(this.red && !t.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, t)
    };
    var ct = {
      k256: null,
      p224: null,
      p192: null,
      p25519: null
    };

    function nt(s, t) {
      this.name = s, this.p = new l(t, 16), this.n = this.p.bitLength(), this.k = new l(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
    }
    nt.prototype._tmp = function() {
      var t = new l(null);
      return t.words = new Array(Math.ceil(this.n / 13)), t
    }, nt.prototype.ireduce = function(t) {
      var i = t,
        e;
      do this.split(i, this.tmp), i = this.imulK(i), i = i.iadd(this.tmp), e = i.bitLength(); while (e > this.n);
      var h = e < this.n ? -1 : i.ucmp(this.p);
      return h === 0 ? (i.words[0] = 0, i.length = 1) : h > 0 ? i.isub(this.p) : i.strip(), i
    }, nt.prototype.split = function(t, i) {
      t.iushrn(this.n, 0, i)
    }, nt.prototype.imulK = function(t) {
      return t.imul(this.k)
    };

    function gt() {
      nt.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
    }
    ft(gt, nt), gt.prototype.split = function(t, i) {
      for (var e = 4194303, h = Math.min(t.length, 9), o = 0; o < h; o++) i.words[o] = t.words[o];
      if (i.length = h, t.length <= 9) {
        t.words[0] = 0, t.length = 1;
        return
      }
      var a = t.words[9];
      for (i.words[i.length++] = a & e, o = 10; o < t.length; o++) {
        var u = t.words[o] | 0;
        t.words[o - 10] = (u & e) << 4 | a >>> 22, a = u
      }
      a >>>= 22, t.words[o - 10] = a, a === 0 && t.length > 10 ? t.length -= 10 : t.length -= 9
    }, gt.prototype.imulK = function(t) {
      t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;
      for (var i = 0, e = 0; e < t.length; e++) {
        var h = t.words[e] | 0;
        i += h * 977, t.words[e] = i & 67108863, i = h * 64 + (i / 67108864 | 0)
      }
      return t.words[t.length - 1] === 0 && (t.length--, t.words[t.length - 1] === 0 && t.length--), t
    };

    function Ht() {
      nt.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
    }
    ft(Ht, nt);

    function Jt() {
      nt.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
    }
    ft(Jt, nt);

    function wt() {
      nt.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
    }
    ft(wt, nt), wt.prototype.imulK = function(t) {
      for (var i = 0, e = 0; e < t.length; e++) {
        var h = (t.words[e] | 0) * 19 + i,
          o = h & 67108863;
        h >>>= 26, t.words[e] = o, i = h
      }
      return i !== 0 && (t.words[t.length++] = i), t
    }, l._prime = function(t) {
      if (ct[t]) return ct[t];
      var i;
      if (t === "k256") i = new gt;
      else if (t === "p224") i = new Ht;
      else if (t === "p192") i = new Jt;
      else if (t === "p25519") i = new wt;
      else throw new Error("Unknown prime " + t);
      return ct[t] = i, i
    };

    function b(s) {
      if (typeof s == "string") {
        var t = l._prime(s);
        this.m = t.p, this.prime = t
      } else v(s.gtn(1), "modulus must be greater than 1"), this.m = s, this.prime = null
    }
    b.prototype._verify1 = function(t) {
      v(t.negative === 0, "red works only with positives"), v(t.red, "red works only with red numbers")
    }, b.prototype._verify2 = function(t, i) {
      v((t.negative | i.negative) === 0, "red works only with positives"), v(t.red && t.red === i.red, "red works only with red numbers")
    }, b.prototype.imod = function(t) {
      return this.prime ? this.prime.ireduce(t)._forceRed(this) : t.umod(this.m)._forceRed(this)
    }, b.prototype.neg = function(t) {
      return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this)
    }, b.prototype.add = function(t, i) {
      this._verify2(t, i);
      var e = t.add(i);
      return e.cmp(this.m) >= 0 && e.isub(this.m), e._forceRed(this)
    }, b.prototype.iadd = function(t, i) {
      this._verify2(t, i);
      var e = t.iadd(i);
      return e.cmp(this.m) >= 0 && e.isub(this.m), e
    }, b.prototype.sub = function(t, i) {
      this._verify2(t, i);
      var e = t.sub(i);
      return e.cmpn(0) < 0 && e.iadd(this.m), e._forceRed(this)
    }, b.prototype.isub = function(t, i) {
      this._verify2(t, i);
      var e = t.isub(i);
      return e.cmpn(0) < 0 && e.iadd(this.m), e
    }, b.prototype.shl = function(t, i) {
      return this._verify1(t), this.imod(t.ushln(i))
    }, b.prototype.imul = function(t, i) {
      return this._verify2(t, i), this.imod(t.imul(i))
    }, b.prototype.mul = function(t, i) {
      return this._verify2(t, i), this.imod(t.mul(i))
    }, b.prototype.isqr = function(t) {
      return this.imul(t, t.clone())
    }, b.prototype.sqr = function(t) {
      return this.mul(t, t)
    }, b.prototype.sqrt = function(t) {
      if (t.isZero()) return t.clone();
      var i = this.m.andln(3);
      if (v(i % 2 === 1), i === 3) {
        var e = this.m.add(new l(1)).iushrn(2);
        return this.pow(t, e)
      }
      for (var h = this.m.subn(1), o = 0; !h.isZero() && h.andln(1) === 0;) o++, h.iushrn(1);
      v(!h.isZero());
      var a = new l(1).toRed(this),
        u = a.redNeg(),
        n = this.m.subn(1).iushrn(1),
        r = this.m.bitLength();
      for (r = new l(2 * r * r).toRed(this); this.pow(r, n).cmp(u) !== 0;) r.redIAdd(u);
      for (var f = this.pow(r, h), d = this.pow(t, h.addn(1).iushrn(1)), m = this.pow(t, h), p = o; m.cmp(a) !== 0;) {
        for (var M = m, c = 0; M.cmp(a) !== 0; c++) M = M.redSqr();
        v(c < p);
        var w = this.pow(f, new l(1).iushln(p - c - 1));
        d = d.redMul(w), f = w.redSqr(), m = m.redMul(f), p = c
      }
      return d
    }, b.prototype.invm = function(t) {
      var i = t._invmp(this.m);
      return i.negative !== 0 ? (i.negative = 0, this.imod(i).redNeg()) : this.imod(i)
    }, b.prototype.pow = function(t, i) {
      if (i.isZero()) return new l(1);
      if (i.cmpn(1) === 0) return t.clone();
      var e = 4,
        h = new Array(1 << e);
      h[0] = new l(1).toRed(this), h[1] = t;
      for (var o = 2; o < h.length; o++) h[o] = this.mul(h[o - 1], t);
      var a = h[0],
        u = 0,
        n = 0,
        r = i.bitLength() % 26;
      for (r === 0 && (r = 26), o = i.length - 1; o >= 0; o--) {
        for (var f = i.words[o], d = r - 1; d >= 0; d--) {
          var m = f >> d & 1;
          if (a !== h[0] && (a = this.sqr(a)), m === 0 && u === 0) {
            n = 0;
            continue
          }
          u <<= 1, u |= m, n++, !(n !== e && (o !== 0 || d !== 0)) && (a = this.mul(a, h[u]), n = 0, u = 0)
        }
        r = 26
      }
      return a
    }, b.prototype.convertTo = function(t) {
      var i = t.umod(this.m);
      return i === t ? i.clone() : i
    }, b.prototype.convertFrom = function(t) {
      var i = t.clone();
      return i.red = null, i
    }, l.mont = function(t) {
      return new dt(t)
    };

    function dt(s) {
      b.call(this, s), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new l(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
    }
    ft(dt, b), dt.prototype.convertTo = function(t) {
      return this.imod(t.ushln(this.shift))
    }, dt.prototype.convertFrom = function(t) {
      var i = this.imod(t.mul(this.rinv));
      return i.red = null, i
    }, dt.prototype.imul = function(t, i) {
      if (t.isZero() || i.isZero()) return t.words[0] = 0, t.length = 1, t;
      var e = t.imul(i),
        h = e.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
        o = e.isub(h).iushrn(this.shift),
        a = o;
      return o.cmp(this.m) >= 0 ? a = o.isub(this.m) : o.cmpn(0) < 0 && (a = o.iadd(this.m)), a._forceRed(this)
    }, dt.prototype.mul = function(t, i) {
      if (t.isZero() || i.isZero()) return new l(0)._forceRed(this);
      var e = t.mul(i),
        h = e.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
        o = e.isub(h).iushrn(this.shift),
        a = o;
      return o.cmp(this.m) >= 0 ? a = o.isub(this.m) : o.cmpn(0) < 0 && (a = o.iadd(this.m)), a._forceRed(this)
    }, dt.prototype.invm = function(t) {
      var i = this.imod(t._invmp(this.m).mul(this.r2));
      return i._forceRed(this)
    }
  })(g, mr)
})(Pt);
var gr = Pt.exports,
  mt = gr,
  cr = pr,
  wr = new mt(0),
  ar = new mt(-1),
  Mt = {
    noether: "0",
    wei: "1",
    kwei: "1000",
    Kwei: "1000",
    babbage: "1000",
    femtoether: "1000",
    mwei: "1000000",
    Mwei: "1000000",
    lovelace: "1000000",
    picoether: "1000000",
    gwei: "1000000000",
    Gwei: "1000000000",
    shannon: "1000000000",
    nanoether: "1000000000",
    nano: "1000000000",
    szabo: "1000000000000",
    microether: "1000000000000",
    micro: "1000000000000",
    finney: "1000000000000000",
    milliether: "1000000000000000",
    milli: "1000000000000000",
    ether: "1000000000000000000",
    kether: "1000000000000000000000",
    grand: "1000000000000000000000",
    mether: "1000000000000000000000000",
    gether: "1000000000000000000000000000",
    tether: "1000000000000000000000000000000"
  };

function Ft(g) {
  var at = g ? g.toLowerCase() : "ether",
    ht = Mt[at];
  if (typeof ht != "string") throw new Error("[ethjs-unit] the unit provided " + g + " doesn't exists, please use the one of the following units " + JSON.stringify(Mt, null, 2));
  return new mt(ht, 10)
}

function lr(g) {
  if (typeof g == "string") {
    if (!g.match(/^-?[0-9.]+$/)) throw new Error("while converting number to string, invalid number value '" + g + "', should be a number matching (^-?[0-9.]+).");
    return g
  } else {
    if (typeof g == "number") return String(g);
    if (typeof g == "object" && g.toString && (g.toTwos || g.dividedToIntegerBy)) return g.toPrecision ? String(g.toPrecision()) : g.toString(10)
  }
  throw new Error("while converting number to string, invalid number value '" + g + "' type " + typeof g + ".")
}

function yr(g, at, ht) {
  var v = cr(g),
    ft = v.lt(wr),
    l = Ft(at),
    ut = Mt[at].length - 1 || 1,
    ot = ht || {};
  ft && (v = v.mul(ar));
  for (var et = v.mod(l).toString(10); et.length < ut;) et = "0" + et;
  ot.pad || (et = et.match(/^([0-9]*[1-9]|0)(0*)/)[1]);
  var lt = v.div(l).toString(10);
  ot.commify && (lt = lt.replace(/\B(?=(\d{3})+(?!\d))/g, ","));
  var pt = "" + lt + (et == "0" ? "" : "." + et);
  return ft && (pt = "-" + pt), pt
}

function xr(g, at) {
  var ht = lr(g),
    v = Ft(at),
    ft = Mt[at].length - 1 || 1,
    l = ht.substring(0, 1) === "-";
  if (l && (ht = ht.substring(1)), ht === ".") throw new Error("[ethjs-unit] while converting number " + g + " to wei, invalid value");
  var ut = ht.split(".");
  if (ut.length > 2) throw new Error("[ethjs-unit] while converting number " + g + " to wei,  too many decimal points");
  var ot = ut[0],
    et = ut[1];
  if (ot || (ot = "0"), et || (et = "0"), et.length > ft) throw new Error("[ethjs-unit] while converting number " + g + " to wei, too many decimal places");
  for (; et.length < ft;) et += "0";
  ot = new mt(ot), et = new mt(et);
  var lt = ot.mul(v).add(et);
  return l && (lt = lt.mul(ar)), new mt(lt.toString(10), 10)
}
var Sr = {
  unitMap: Mt,
  numberToString: lr,
  getValueOfUnit: Ft,
  fromWei: yr,
  toWei: xr
};
export {
  Mr as c, Sr as l
};