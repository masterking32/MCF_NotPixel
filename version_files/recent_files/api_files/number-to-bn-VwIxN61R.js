import {
  s as ur
} from "./strip-hex-prefix-DJeEoz3i.js";
import {
  c as vr
} from "./@ledgerhq-BW4RAlPi.js";
import {
  c as dr
} from "./ethjs-unit-bvdJTi0B.js";
var Lt = {
  exports: {}
};
Lt.exports;
(function(It) {
  (function(it, ot) {
    function v(o, t) {
      if (!o) throw new Error(t || "Assertion failed")
    }

    function ft(o, t) {
      o.super_ = t;
      var i = function() {};
      i.prototype = t.prototype, o.prototype = new i, o.prototype.constructor = o
    }

    function l(o, t, i) {
      if (l.isBN(o)) return o;
      this.negative = 0, this.words = null, this.length = 0, this.red = null, o !== null && ((t === "le" || t === "be") && (i = t, t = 10), this._init(o || 0, t || 10, i || "be"))
    }
    typeof it == "object" ? it.exports = l : ot.BN = l, l.BN = l, l.wordSize = 26;
    var ut;
    try {
      ut = dr("buffer").Buffer
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
      var s, a, u = 0;
      if (e === "be")
        for (h = t.length - 1, s = 0; h >= 0; h -= 3) a = t[h] | t[h - 1] << 8 | t[h - 2] << 16, this.words[s] |= a << u & 67108863, this.words[s + 1] = a >>> 26 - u & 67108863, u += 24, u >= 26 && (u -= 26, s++);
      else if (e === "le")
        for (h = 0, s = 0; h < t.length; h += 3) a = t[h] | t[h + 1] << 8 | t[h + 2] << 16, this.words[s] |= a << u & 67108863, this.words[s + 1] = a >>> 26 - u & 67108863, u += 24, u >= 26 && (u -= 26, s++);
      return this.strip()
    };

    function zt(o, t, i) {
      for (var e = 0, h = Math.min(o.length, i), s = t; s < h; s++) {
        var a = o.charCodeAt(s) - 48;
        e <<= 4, a >= 49 && a <= 54 ? e |= a - 49 + 10 : a >= 17 && a <= 22 ? e |= a - 17 + 10 : e |= a & 15
      }
      return e
    }
    l.prototype._parseHex = function(t, i) {
      this.length = Math.ceil((t.length - i) / 6), this.words = new Array(this.length);
      for (var e = 0; e < this.length; e++) this.words[e] = 0;
      var h, s, a = 0;
      for (e = t.length - 6, h = 0; e >= i; e -= 6) s = zt(t, e, e + 6), this.words[h] |= s << a & 67108863, this.words[h + 1] |= s >>> 26 - a & 4194303, a += 24, a >= 26 && (a -= 26, h++);
      e + 6 !== i && (s = zt(t, i, e + 6), this.words[h] |= s << a & 67108863, this.words[h + 1] |= s >>> 26 - a & 4194303), this.strip()
    };

    function Et(o, t, i, e) {
      for (var h = 0, s = Math.min(o.length, i), a = t; a < s; a++) {
        var u = o.charCodeAt(a) - 48;
        h *= e, u >= 49 ? h += u - 49 + 10 : u >= 17 ? h += u - 17 + 10 : h += u
      }
      return h
    }
    l.prototype._parseBase = function(t, i, e) {
      this.words = [0], this.length = 1;
      for (var h = 0, s = 1; s <= 67108863; s *= i) h++;
      h--, s = s / i | 0;
      for (var a = t.length - e, u = a % h, f = Math.min(a, a - u) + e, r = 0, n = e; n < f; n += h) r = Et(t, n, n + h, i), this.imuln(s), this.words[0] + r < 67108864 ? this.words[0] += r : this._iaddn(r);
      if (u !== 0) {
        var d = 1;
        for (r = Et(t, n, t.length, i), n = 0; n < u; n++) d *= i;
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
    var Ot = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
      sr = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
      or = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
    l.prototype.toString = function(t, i) {
      t = t || 10, i = i | 0 || 1;
      var e;
      if (t === 16 || t === "hex") {
        e = "";
        for (var h = 0, s = 0, a = 0; a < this.length; a++) {
          var u = this.words[a],
            f = ((u << h | s) & 16777215).toString(16);
          s = u >>> 24 - h & 16777215, s !== 0 || a !== this.length - 1 ? e = Ot[6 - f.length] + f + e : e = f + e, h += 2, h >= 26 && (h -= 26, a--)
        }
        for (s !== 0 && (e = s.toString(16) + e); e.length % i !== 0;) e = "0" + e;
        return this.negative !== 0 && (e = "-" + e), e
      }
      if (t === (t | 0) && t >= 2 && t <= 36) {
        var r = sr[t],
          n = or[t];
        e = "";
        var d = this.clone();
        for (d.negative = 0; !d.isZero();) {
          var m = d.modn(n).toString(t);
          d = d.idivn(n), d.isZero() ? e = m + e : e = Ot[r - m.length] + m + e
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
        s = e || Math.max(1, h);
      v(h <= s, "byte array longer than desired length"), v(s > 0, "Requested array length <= 0"), this.strip();
      var a = i === "le",
        u = new t(s),
        f, r, n = this.clone();
      if (a) {
        for (r = 0; !n.isZero(); r++) f = n.andln(255), n.iushrn(8), u[r] = f;
        for (; r < s; r++) u[r] = 0
      } else {
        for (r = 0; r < s - h; r++) u[r] = 0;
        for (r = 0; !n.isZero(); r++) f = n.andln(255), n.iushrn(8), u[s - r - 1] = f
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

    function ar(o) {
      for (var t = new Array(o.bitLength()), i = 0; i < t.length; i++) {
        var e = i / 26 | 0,
          h = i % 26;
        t[i] = (o.words[e] & 1 << h) >>> h
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
      for (var s = 0, a = 0; a < h.length; a++) i = (e.words[a] | 0) + (h.words[a] | 0) + s, this.words[a] = i & 67108863, s = i >>> 26;
      for (; s !== 0 && a < e.length; a++) i = (e.words[a] | 0) + s, this.words[a] = i & 67108863, s = i >>> 26;
      if (this.length = e.length, s !== 0) this.words[this.length] = s, this.length++;
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
      var h, s;
      e > 0 ? (h = this, s = t) : (h = t, s = this);
      for (var a = 0, u = 0; u < s.length; u++) i = (h.words[u] | 0) - (s.words[u] | 0) + a, a = i >> 26, this.words[u] = i & 67108863;
      for (; a !== 0 && u < h.length; u++) i = (h.words[u] | 0) + a, a = i >> 26, this.words[u] = i & 67108863;
      if (a === 0 && u < h.length && h !== this)
        for (; u < h.length; u++) this.words[u] = h.words[u];
      return this.length = Math.max(this.length, u), h !== this && (this.negative = 1), this.strip()
    }, l.prototype.sub = function(t) {
      return this.clone().isub(t)
    };

    function Ft(o, t, i) {
      i.negative = t.negative ^ o.negative;
      var e = o.length + t.length | 0;
      i.length = e, e = e - 1 | 0;
      var h = o.words[0] | 0,
        s = t.words[0] | 0,
        a = h * s,
        u = a & 67108863,
        f = a / 67108864 | 0;
      i.words[0] = u;
      for (var r = 1; r < e; r++) {
        for (var n = f >>> 26, d = f & 67108863, m = Math.min(r, t.length - 1), p = Math.max(0, r - o.length + 1); p <= m; p++) {
          var M = r - p | 0;
          h = o.words[M] | 0, s = t.words[p] | 0, a = h * s + d, n += a / 67108864 | 0, d = a & 67108863
        }
        i.words[r] = d | 0, f = n | 0
      }
      return f !== 0 ? i.words[r] = f | 0 : i.length--, i.strip()
    }
    var Kt = function(t, i, e) {
      var h = t.words,
        s = i.words,
        a = e.words,
        u = 0,
        f, r, n, d = h[0] | 0,
        m = d & 8191,
        p = d >>> 13,
        M = h[1] | 0,
        c = M & 8191,
        g = M >>> 13,
        nt = h[2] | 0,
        w = nt & 8191,
        y = nt >>> 13,
        Ht = h[3] | 0,
        b = Ht & 8191,
        _ = Ht >>> 13,
        Ct = h[4] | 0,
        S = Ct & 8191,
        B = Ct >>> 13,
        Jt = h[5] | 0,
        k = Jt & 8191,
        A = Jt >>> 13,
        Gt = h[6] | 0,
        q = Gt & 8191,
        R = Gt >>> 13,
        Ut = h[7] | 0,
        Z = Ut & 8191,
        T = Ut >>> 13,
        Vt = h[8] | 0,
        N = Vt & 8191,
        L = Vt >>> 13,
        Wt = h[9] | 0,
        I = Wt & 8191,
        z = Wt >>> 13,
        Qt = s[0] | 0,
        E = Qt & 8191,
        O = Qt >>> 13,
        Xt = s[1] | 0,
        F = Xt & 8191,
        K = Xt >>> 13,
        Yt = s[2] | 0,
        $ = Yt & 8191,
        P = Yt >>> 13,
        jt = s[3] | 0,
        D = jt & 8191,
        H = jt >>> 13,
        tr = s[4] | 0,
        C = tr & 8191,
        J = tr >>> 13,
        rr = s[5] | 0,
        G = rr & 8191,
        U = rr >>> 13,
        ir = s[6] | 0,
        V = ir & 8191,
        W = ir >>> 13,
        er = s[7] | 0,
        Q = er & 8191,
        X = er >>> 13,
        hr = s[8] | 0,
        Y = hr & 8191,
        j = hr >>> 13,
        fr = s[9] | 0,
        tt = fr & 8191,
        rt = fr >>> 13;
      e.negative = t.negative ^ i.negative, e.length = 19, f = Math.imul(m, E), r = Math.imul(m, O), r = r + Math.imul(p, E) | 0, n = Math.imul(p, O);
      var mt = (u + f | 0) + ((r & 8191) << 13) | 0;
      u = (n + (r >>> 13) | 0) + (mt >>> 26) | 0, mt &= 67108863, f = Math.imul(c, E), r = Math.imul(c, O), r = r + Math.imul(g, E) | 0, n = Math.imul(g, O), f = f + Math.imul(m, F) | 0, r = r + Math.imul(m, K) | 0, r = r + Math.imul(p, F) | 0, n = n + Math.imul(p, K) | 0;
      var pt = (u + f | 0) + ((r & 8191) << 13) | 0;
      u = (n + (r >>> 13) | 0) + (pt >>> 26) | 0, pt &= 67108863, f = Math.imul(w, E), r = Math.imul(w, O), r = r + Math.imul(y, E) | 0, n = Math.imul(y, O), f = f + Math.imul(c, F) | 0, r = r + Math.imul(c, K) | 0, r = r + Math.imul(g, F) | 0, n = n + Math.imul(g, K) | 0, f = f + Math.imul(m, $) | 0, r = r + Math.imul(m, P) | 0, r = r + Math.imul(p, $) | 0, n = n + Math.imul(p, P) | 0;
      var Mt = (u + f | 0) + ((r & 8191) << 13) | 0;
      u = (n + (r >>> 13) | 0) + (Mt >>> 26) | 0, Mt &= 67108863, f = Math.imul(b, E), r = Math.imul(b, O), r = r + Math.imul(_, E) | 0, n = Math.imul(_, O), f = f + Math.imul(w, F) | 0, r = r + Math.imul(w, K) | 0, r = r + Math.imul(y, F) | 0, n = n + Math.imul(y, K) | 0, f = f + Math.imul(c, $) | 0, r = r + Math.imul(c, P) | 0, r = r + Math.imul(g, $) | 0, n = n + Math.imul(g, P) | 0, f = f + Math.imul(m, D) | 0, r = r + Math.imul(m, H) | 0, r = r + Math.imul(p, D) | 0, n = n + Math.imul(p, H) | 0;
      var ct = (u + f | 0) + ((r & 8191) << 13) | 0;
      u = (n + (r >>> 13) | 0) + (ct >>> 26) | 0, ct &= 67108863, f = Math.imul(S, E), r = Math.imul(S, O), r = r + Math.imul(B, E) | 0, n = Math.imul(B, O), f = f + Math.imul(b, F) | 0, r = r + Math.imul(b, K) | 0, r = r + Math.imul(_, F) | 0, n = n + Math.imul(_, K) | 0, f = f + Math.imul(w, $) | 0, r = r + Math.imul(w, P) | 0, r = r + Math.imul(y, $) | 0, n = n + Math.imul(y, P) | 0, f = f + Math.imul(c, D) | 0, r = r + Math.imul(c, H) | 0, r = r + Math.imul(g, D) | 0, n = n + Math.imul(g, H) | 0, f = f + Math.imul(m, C) | 0, r = r + Math.imul(m, J) | 0, r = r + Math.imul(p, C) | 0, n = n + Math.imul(p, J) | 0;
      var gt = (u + f | 0) + ((r & 8191) << 13) | 0;
      u = (n + (r >>> 13) | 0) + (gt >>> 26) | 0, gt &= 67108863, f = Math.imul(k, E), r = Math.imul(k, O), r = r + Math.imul(A, E) | 0, n = Math.imul(A, O), f = f + Math.imul(S, F) | 0, r = r + Math.imul(S, K) | 0, r = r + Math.imul(B, F) | 0, n = n + Math.imul(B, K) | 0, f = f + Math.imul(b, $) | 0, r = r + Math.imul(b, P) | 0, r = r + Math.imul(_, $) | 0, n = n + Math.imul(_, P) | 0, f = f + Math.imul(w, D) | 0, r = r + Math.imul(w, H) | 0, r = r + Math.imul(y, D) | 0, n = n + Math.imul(y, H) | 0, f = f + Math.imul(c, C) | 0, r = r + Math.imul(c, J) | 0, r = r + Math.imul(g, C) | 0, n = n + Math.imul(g, J) | 0, f = f + Math.imul(m, G) | 0, r = r + Math.imul(m, U) | 0, r = r + Math.imul(p, G) | 0, n = n + Math.imul(p, U) | 0;
      var wt = (u + f | 0) + ((r & 8191) << 13) | 0;
      u = (n + (r >>> 13) | 0) + (wt >>> 26) | 0, wt &= 67108863, f = Math.imul(q, E), r = Math.imul(q, O), r = r + Math.imul(R, E) | 0, n = Math.imul(R, O), f = f + Math.imul(k, F) | 0, r = r + Math.imul(k, K) | 0, r = r + Math.imul(A, F) | 0, n = n + Math.imul(A, K) | 0, f = f + Math.imul(S, $) | 0, r = r + Math.imul(S, P) | 0, r = r + Math.imul(B, $) | 0, n = n + Math.imul(B, P) | 0, f = f + Math.imul(b, D) | 0, r = r + Math.imul(b, H) | 0, r = r + Math.imul(_, D) | 0, n = n + Math.imul(_, H) | 0, f = f + Math.imul(w, C) | 0, r = r + Math.imul(w, J) | 0, r = r + Math.imul(y, C) | 0, n = n + Math.imul(y, J) | 0, f = f + Math.imul(c, G) | 0, r = r + Math.imul(c, U) | 0, r = r + Math.imul(g, G) | 0, n = n + Math.imul(g, U) | 0, f = f + Math.imul(m, V) | 0, r = r + Math.imul(m, W) | 0, r = r + Math.imul(p, V) | 0, n = n + Math.imul(p, W) | 0;
      var yt = (u + f | 0) + ((r & 8191) << 13) | 0;
      u = (n + (r >>> 13) | 0) + (yt >>> 26) | 0, yt &= 67108863, f = Math.imul(Z, E), r = Math.imul(Z, O), r = r + Math.imul(T, E) | 0, n = Math.imul(T, O), f = f + Math.imul(q, F) | 0, r = r + Math.imul(q, K) | 0, r = r + Math.imul(R, F) | 0, n = n + Math.imul(R, K) | 0, f = f + Math.imul(k, $) | 0, r = r + Math.imul(k, P) | 0, r = r + Math.imul(A, $) | 0, n = n + Math.imul(A, P) | 0, f = f + Math.imul(S, D) | 0, r = r + Math.imul(S, H) | 0, r = r + Math.imul(B, D) | 0, n = n + Math.imul(B, H) | 0, f = f + Math.imul(b, C) | 0, r = r + Math.imul(b, J) | 0, r = r + Math.imul(_, C) | 0, n = n + Math.imul(_, J) | 0, f = f + Math.imul(w, G) | 0, r = r + Math.imul(w, U) | 0, r = r + Math.imul(y, G) | 0, n = n + Math.imul(y, U) | 0, f = f + Math.imul(c, V) | 0, r = r + Math.imul(c, W) | 0, r = r + Math.imul(g, V) | 0, n = n + Math.imul(g, W) | 0, f = f + Math.imul(m, Q) | 0, r = r + Math.imul(m, X) | 0, r = r + Math.imul(p, Q) | 0, n = n + Math.imul(p, X) | 0;
      var xt = (u + f | 0) + ((r & 8191) << 13) | 0;
      u = (n + (r >>> 13) | 0) + (xt >>> 26) | 0, xt &= 67108863, f = Math.imul(N, E), r = Math.imul(N, O), r = r + Math.imul(L, E) | 0, n = Math.imul(L, O), f = f + Math.imul(Z, F) | 0, r = r + Math.imul(Z, K) | 0, r = r + Math.imul(T, F) | 0, n = n + Math.imul(T, K) | 0, f = f + Math.imul(q, $) | 0, r = r + Math.imul(q, P) | 0, r = r + Math.imul(R, $) | 0, n = n + Math.imul(R, P) | 0, f = f + Math.imul(k, D) | 0, r = r + Math.imul(k, H) | 0, r = r + Math.imul(A, D) | 0, n = n + Math.imul(A, H) | 0, f = f + Math.imul(S, C) | 0, r = r + Math.imul(S, J) | 0, r = r + Math.imul(B, C) | 0, n = n + Math.imul(B, J) | 0, f = f + Math.imul(b, G) | 0, r = r + Math.imul(b, U) | 0, r = r + Math.imul(_, G) | 0, n = n + Math.imul(_, U) | 0, f = f + Math.imul(w, V) | 0, r = r + Math.imul(w, W) | 0, r = r + Math.imul(y, V) | 0, n = n + Math.imul(y, W) | 0, f = f + Math.imul(c, Q) | 0, r = r + Math.imul(c, X) | 0, r = r + Math.imul(g, Q) | 0, n = n + Math.imul(g, X) | 0, f = f + Math.imul(m, Y) | 0, r = r + Math.imul(m, j) | 0, r = r + Math.imul(p, Y) | 0, n = n + Math.imul(p, j) | 0;
      var bt = (u + f | 0) + ((r & 8191) << 13) | 0;
      u = (n + (r >>> 13) | 0) + (bt >>> 26) | 0, bt &= 67108863, f = Math.imul(I, E), r = Math.imul(I, O), r = r + Math.imul(z, E) | 0, n = Math.imul(z, O), f = f + Math.imul(N, F) | 0, r = r + Math.imul(N, K) | 0, r = r + Math.imul(L, F) | 0, n = n + Math.imul(L, K) | 0, f = f + Math.imul(Z, $) | 0, r = r + Math.imul(Z, P) | 0, r = r + Math.imul(T, $) | 0, n = n + Math.imul(T, P) | 0, f = f + Math.imul(q, D) | 0, r = r + Math.imul(q, H) | 0, r = r + Math.imul(R, D) | 0, n = n + Math.imul(R, H) | 0, f = f + Math.imul(k, C) | 0, r = r + Math.imul(k, J) | 0, r = r + Math.imul(A, C) | 0, n = n + Math.imul(A, J) | 0, f = f + Math.imul(S, G) | 0, r = r + Math.imul(S, U) | 0, r = r + Math.imul(B, G) | 0, n = n + Math.imul(B, U) | 0, f = f + Math.imul(b, V) | 0, r = r + Math.imul(b, W) | 0, r = r + Math.imul(_, V) | 0, n = n + Math.imul(_, W) | 0, f = f + Math.imul(w, Q) | 0, r = r + Math.imul(w, X) | 0, r = r + Math.imul(y, Q) | 0, n = n + Math.imul(y, X) | 0, f = f + Math.imul(c, Y) | 0, r = r + Math.imul(c, j) | 0, r = r + Math.imul(g, Y) | 0, n = n + Math.imul(g, j) | 0, f = f + Math.imul(m, tt) | 0, r = r + Math.imul(m, rt) | 0, r = r + Math.imul(p, tt) | 0, n = n + Math.imul(p, rt) | 0;
      var _t = (u + f | 0) + ((r & 8191) << 13) | 0;
      u = (n + (r >>> 13) | 0) + (_t >>> 26) | 0, _t &= 67108863, f = Math.imul(I, F), r = Math.imul(I, K), r = r + Math.imul(z, F) | 0, n = Math.imul(z, K), f = f + Math.imul(N, $) | 0, r = r + Math.imul(N, P) | 0, r = r + Math.imul(L, $) | 0, n = n + Math.imul(L, P) | 0, f = f + Math.imul(Z, D) | 0, r = r + Math.imul(Z, H) | 0, r = r + Math.imul(T, D) | 0, n = n + Math.imul(T, H) | 0, f = f + Math.imul(q, C) | 0, r = r + Math.imul(q, J) | 0, r = r + Math.imul(R, C) | 0, n = n + Math.imul(R, J) | 0, f = f + Math.imul(k, G) | 0, r = r + Math.imul(k, U) | 0, r = r + Math.imul(A, G) | 0, n = n + Math.imul(A, U) | 0, f = f + Math.imul(S, V) | 0, r = r + Math.imul(S, W) | 0, r = r + Math.imul(B, V) | 0, n = n + Math.imul(B, W) | 0, f = f + Math.imul(b, Q) | 0, r = r + Math.imul(b, X) | 0, r = r + Math.imul(_, Q) | 0, n = n + Math.imul(_, X) | 0, f = f + Math.imul(w, Y) | 0, r = r + Math.imul(w, j) | 0, r = r + Math.imul(y, Y) | 0, n = n + Math.imul(y, j) | 0, f = f + Math.imul(c, tt) | 0, r = r + Math.imul(c, rt) | 0, r = r + Math.imul(g, tt) | 0, n = n + Math.imul(g, rt) | 0;
      var St = (u + f | 0) + ((r & 8191) << 13) | 0;
      u = (n + (r >>> 13) | 0) + (St >>> 26) | 0, St &= 67108863, f = Math.imul(I, $), r = Math.imul(I, P), r = r + Math.imul(z, $) | 0, n = Math.imul(z, P), f = f + Math.imul(N, D) | 0, r = r + Math.imul(N, H) | 0, r = r + Math.imul(L, D) | 0, n = n + Math.imul(L, H) | 0, f = f + Math.imul(Z, C) | 0, r = r + Math.imul(Z, J) | 0, r = r + Math.imul(T, C) | 0, n = n + Math.imul(T, J) | 0, f = f + Math.imul(q, G) | 0, r = r + Math.imul(q, U) | 0, r = r + Math.imul(R, G) | 0, n = n + Math.imul(R, U) | 0, f = f + Math.imul(k, V) | 0, r = r + Math.imul(k, W) | 0, r = r + Math.imul(A, V) | 0, n = n + Math.imul(A, W) | 0, f = f + Math.imul(S, Q) | 0, r = r + Math.imul(S, X) | 0, r = r + Math.imul(B, Q) | 0, n = n + Math.imul(B, X) | 0, f = f + Math.imul(b, Y) | 0, r = r + Math.imul(b, j) | 0, r = r + Math.imul(_, Y) | 0, n = n + Math.imul(_, j) | 0, f = f + Math.imul(w, tt) | 0, r = r + Math.imul(w, rt) | 0, r = r + Math.imul(y, tt) | 0, n = n + Math.imul(y, rt) | 0;
      var Bt = (u + f | 0) + ((r & 8191) << 13) | 0;
      u = (n + (r >>> 13) | 0) + (Bt >>> 26) | 0, Bt &= 67108863, f = Math.imul(I, D), r = Math.imul(I, H), r = r + Math.imul(z, D) | 0, n = Math.imul(z, H), f = f + Math.imul(N, C) | 0, r = r + Math.imul(N, J) | 0, r = r + Math.imul(L, C) | 0, n = n + Math.imul(L, J) | 0, f = f + Math.imul(Z, G) | 0, r = r + Math.imul(Z, U) | 0, r = r + Math.imul(T, G) | 0, n = n + Math.imul(T, U) | 0, f = f + Math.imul(q, V) | 0, r = r + Math.imul(q, W) | 0, r = r + Math.imul(R, V) | 0, n = n + Math.imul(R, W) | 0, f = f + Math.imul(k, Q) | 0, r = r + Math.imul(k, X) | 0, r = r + Math.imul(A, Q) | 0, n = n + Math.imul(A, X) | 0, f = f + Math.imul(S, Y) | 0, r = r + Math.imul(S, j) | 0, r = r + Math.imul(B, Y) | 0, n = n + Math.imul(B, j) | 0, f = f + Math.imul(b, tt) | 0, r = r + Math.imul(b, rt) | 0, r = r + Math.imul(_, tt) | 0, n = n + Math.imul(_, rt) | 0;
      var kt = (u + f | 0) + ((r & 8191) << 13) | 0;
      u = (n + (r >>> 13) | 0) + (kt >>> 26) | 0, kt &= 67108863, f = Math.imul(I, C), r = Math.imul(I, J), r = r + Math.imul(z, C) | 0, n = Math.imul(z, J), f = f + Math.imul(N, G) | 0, r = r + Math.imul(N, U) | 0, r = r + Math.imul(L, G) | 0, n = n + Math.imul(L, U) | 0, f = f + Math.imul(Z, V) | 0, r = r + Math.imul(Z, W) | 0, r = r + Math.imul(T, V) | 0, n = n + Math.imul(T, W) | 0, f = f + Math.imul(q, Q) | 0, r = r + Math.imul(q, X) | 0, r = r + Math.imul(R, Q) | 0, n = n + Math.imul(R, X) | 0, f = f + Math.imul(k, Y) | 0, r = r + Math.imul(k, j) | 0, r = r + Math.imul(A, Y) | 0, n = n + Math.imul(A, j) | 0, f = f + Math.imul(S, tt) | 0, r = r + Math.imul(S, rt) | 0, r = r + Math.imul(B, tt) | 0, n = n + Math.imul(B, rt) | 0;
      var At = (u + f | 0) + ((r & 8191) << 13) | 0;
      u = (n + (r >>> 13) | 0) + (At >>> 26) | 0, At &= 67108863, f = Math.imul(I, G), r = Math.imul(I, U), r = r + Math.imul(z, G) | 0, n = Math.imul(z, U), f = f + Math.imul(N, V) | 0, r = r + Math.imul(N, W) | 0, r = r + Math.imul(L, V) | 0, n = n + Math.imul(L, W) | 0, f = f + Math.imul(Z, Q) | 0, r = r + Math.imul(Z, X) | 0, r = r + Math.imul(T, Q) | 0, n = n + Math.imul(T, X) | 0, f = f + Math.imul(q, Y) | 0, r = r + Math.imul(q, j) | 0, r = r + Math.imul(R, Y) | 0, n = n + Math.imul(R, j) | 0, f = f + Math.imul(k, tt) | 0, r = r + Math.imul(k, rt) | 0, r = r + Math.imul(A, tt) | 0, n = n + Math.imul(A, rt) | 0;
      var qt = (u + f | 0) + ((r & 8191) << 13) | 0;
      u = (n + (r >>> 13) | 0) + (qt >>> 26) | 0, qt &= 67108863, f = Math.imul(I, V), r = Math.imul(I, W), r = r + Math.imul(z, V) | 0, n = Math.imul(z, W), f = f + Math.imul(N, Q) | 0, r = r + Math.imul(N, X) | 0, r = r + Math.imul(L, Q) | 0, n = n + Math.imul(L, X) | 0, f = f + Math.imul(Z, Y) | 0, r = r + Math.imul(Z, j) | 0, r = r + Math.imul(T, Y) | 0, n = n + Math.imul(T, j) | 0, f = f + Math.imul(q, tt) | 0, r = r + Math.imul(q, rt) | 0, r = r + Math.imul(R, tt) | 0, n = n + Math.imul(R, rt) | 0;
      var Rt = (u + f | 0) + ((r & 8191) << 13) | 0;
      u = (n + (r >>> 13) | 0) + (Rt >>> 26) | 0, Rt &= 67108863, f = Math.imul(I, Q), r = Math.imul(I, X), r = r + Math.imul(z, Q) | 0, n = Math.imul(z, X), f = f + Math.imul(N, Y) | 0, r = r + Math.imul(N, j) | 0, r = r + Math.imul(L, Y) | 0, n = n + Math.imul(L, j) | 0, f = f + Math.imul(Z, tt) | 0, r = r + Math.imul(Z, rt) | 0, r = r + Math.imul(T, tt) | 0, n = n + Math.imul(T, rt) | 0;
      var Zt = (u + f | 0) + ((r & 8191) << 13) | 0;
      u = (n + (r >>> 13) | 0) + (Zt >>> 26) | 0, Zt &= 67108863, f = Math.imul(I, Y), r = Math.imul(I, j), r = r + Math.imul(z, Y) | 0, n = Math.imul(z, j), f = f + Math.imul(N, tt) | 0, r = r + Math.imul(N, rt) | 0, r = r + Math.imul(L, tt) | 0, n = n + Math.imul(L, rt) | 0;
      var Tt = (u + f | 0) + ((r & 8191) << 13) | 0;
      u = (n + (r >>> 13) | 0) + (Tt >>> 26) | 0, Tt &= 67108863, f = Math.imul(I, tt), r = Math.imul(I, rt), r = r + Math.imul(z, tt) | 0, n = Math.imul(z, rt);
      var Nt = (u + f | 0) + ((r & 8191) << 13) | 0;
      return u = (n + (r >>> 13) | 0) + (Nt >>> 26) | 0, Nt &= 67108863, a[0] = mt, a[1] = pt, a[2] = Mt, a[3] = ct, a[4] = gt, a[5] = wt, a[6] = yt, a[7] = xt, a[8] = bt, a[9] = _t, a[10] = St, a[11] = Bt, a[12] = kt, a[13] = At, a[14] = qt, a[15] = Rt, a[16] = Zt, a[17] = Tt, a[18] = Nt, u !== 0 && (a[19] = u, e.length++), e
    };
    Math.imul || (Kt = Ft);

    function lr(o, t, i) {
      i.negative = t.negative ^ o.negative, i.length = o.length + t.length;
      for (var e = 0, h = 0, s = 0; s < i.length - 1; s++) {
        var a = h;
        h = 0;
        for (var u = e & 67108863, f = Math.min(s, t.length - 1), r = Math.max(0, s - o.length + 1); r <= f; r++) {
          var n = s - r,
            d = o.words[n] | 0,
            m = t.words[r] | 0,
            p = d * m,
            M = p & 67108863;
          a = a + (p / 67108864 | 0) | 0, M = M + u | 0, u = M & 67108863, a = a + (M >>> 26) | 0, h += a >>> 26, a &= 67108863
        }
        i.words[s] = u, e = a, a = h
      }
      return e !== 0 ? i.words[s] = e : i.length--, i.strip()
    }

    function $t(o, t, i) {
      var e = new ht;
      return e.mulp(o, t, i)
    }
    l.prototype.mulTo = function(t, i) {
      var e, h = this.length + t.length;
      return this.length === 10 && t.length === 10 ? e = Kt(this, t, i) : h < 63 ? e = Ft(this, t, i) : h < 1024 ? e = lr(this, t, i) : e = $t(this, t, i), e
    };

    function ht(o, t) {
      this.x = o, this.y = t
    }
    ht.prototype.makeRBT = function(t) {
      for (var i = new Array(t), e = l.prototype._countBits(t) - 1, h = 0; h < t; h++) i[h] = this.revBin(h, e, t);
      return i
    }, ht.prototype.revBin = function(t, i, e) {
      if (t === 0 || t === e - 1) return t;
      for (var h = 0, s = 0; s < i; s++) h |= (t & 1) << i - s - 1, t >>= 1;
      return h
    }, ht.prototype.permute = function(t, i, e, h, s, a) {
      for (var u = 0; u < a; u++) h[u] = i[t[u]], s[u] = e[t[u]]
    }, ht.prototype.transform = function(t, i, e, h, s, a) {
      this.permute(a, t, i, e, h, s);
      for (var u = 1; u < s; u <<= 1)
        for (var f = u << 1, r = Math.cos(2 * Math.PI / f), n = Math.sin(2 * Math.PI / f), d = 0; d < s; d += f)
          for (var m = r, p = n, M = 0; M < u; M++) {
            var c = e[d + M],
              g = h[d + M],
              nt = e[d + M + u],
              w = h[d + M + u],
              y = m * nt - p * w;
            w = m * w + p * nt, nt = y, e[d + M] = c + nt, h[d + M] = g + w, e[d + M + u] = c - nt, h[d + M + u] = g - w, M !== f && (y = r * m - n * p, p = r * p + n * m, m = y)
          }
    }, ht.prototype.guessLen13b = function(t, i) {
      var e = Math.max(i, t) | 1,
        h = e & 1,
        s = 0;
      for (e = e / 2 | 0; e; e = e >>> 1) s++;
      return 1 << s + 1 + h
    }, ht.prototype.conjugate = function(t, i, e) {
      if (!(e <= 1))
        for (var h = 0; h < e / 2; h++) {
          var s = t[h];
          t[h] = t[e - h - 1], t[e - h - 1] = s, s = i[h], i[h] = -i[e - h - 1], i[e - h - 1] = -s
        }
    }, ht.prototype.normalize13b = function(t, i) {
      for (var e = 0, h = 0; h < i / 2; h++) {
        var s = Math.round(t[2 * h + 1] / i) * 8192 + Math.round(t[2 * h] / i) + e;
        t[h] = s & 67108863, s < 67108864 ? e = 0 : e = s / 67108864 | 0
      }
      return t
    }, ht.prototype.convert13b = function(t, i, e, h) {
      for (var s = 0, a = 0; a < i; a++) s = s + (t[a] | 0), e[2 * a] = s & 8191, s = s >>> 13, e[2 * a + 1] = s & 8191, s = s >>> 13;
      for (a = 2 * i; a < h; ++a) e[a] = 0;
      v(s === 0), v((s & -8192) === 0)
    }, ht.prototype.stub = function(t) {
      for (var i = new Array(t), e = 0; e < t; e++) i[e] = 0;
      return i
    }, ht.prototype.mulp = function(t, i, e) {
      var h = 2 * this.guessLen13b(t.length, i.length),
        s = this.makeRBT(h),
        a = this.stub(h),
        u = new Array(h),
        f = new Array(h),
        r = new Array(h),
        n = new Array(h),
        d = new Array(h),
        m = new Array(h),
        p = e.words;
      p.length = h, this.convert13b(t.words, t.length, u, h), this.convert13b(i.words, i.length, n, h), this.transform(u, a, f, r, h, s), this.transform(n, a, d, m, h, s);
      for (var M = 0; M < h; M++) {
        var c = f[M] * d[M] - r[M] * m[M];
        r[M] = f[M] * m[M] + r[M] * d[M], f[M] = c
      }
      return this.conjugate(f, r, h), this.transform(f, r, p, a, h, s), this.conjugate(p, a, h), this.normalize13b(p, h), e.negative = t.negative ^ i.negative, e.length = t.length + i.length, e.strip()
    }, l.prototype.mul = function(t) {
      var i = new l(null);
      return i.words = new Array(this.length + t.length), this.mulTo(t, i)
    }, l.prototype.mulf = function(t) {
      var i = new l(null);
      return i.words = new Array(this.length + t.length), $t(this, t, i)
    }, l.prototype.imul = function(t) {
      return this.clone().mulTo(t, this)
    }, l.prototype.imuln = function(t) {
      v(typeof t == "number"), v(t < 67108864);
      for (var i = 0, e = 0; e < this.length; e++) {
        var h = (this.words[e] | 0) * t,
          s = (h & 67108863) + (i & 67108863);
        i >>= 26, i += h / 67108864 | 0, i += s >>> 26, this.words[e] = s & 67108863
      }
      return i !== 0 && (this.words[e] = i, this.length++), this
    }, l.prototype.muln = function(t) {
      return this.clone().imuln(t)
    }, l.prototype.sqr = function() {
      return this.mul(this)
    }, l.prototype.isqr = function() {
      return this.imul(this.clone())
    }, l.prototype.pow = function(t) {
      var i = ar(t);
      if (i.length === 0) return new l(1);
      for (var e = this, h = 0; h < i.length && i[h] === 0; h++, e = e.sqr());
      if (++h < i.length)
        for (var s = e.sqr(); h < i.length; h++, s = s.sqr()) i[h] !== 0 && (e = e.mul(s));
      return e
    }, l.prototype.iushln = function(t) {
      v(typeof t == "number" && t >= 0);
      var i = t % 26,
        e = (t - i) / 26,
        h = 67108863 >>> 26 - i << 26 - i,
        s;
      if (i !== 0) {
        var a = 0;
        for (s = 0; s < this.length; s++) {
          var u = this.words[s] & h,
            f = (this.words[s] | 0) - u << i;
          this.words[s] = f | a, a = u >>> 26 - i
        }
        a && (this.words[s] = a, this.length++)
      }
      if (e !== 0) {
        for (s = this.length - 1; s >= 0; s--) this.words[s + e] = this.words[s];
        for (s = 0; s < e; s++) this.words[s] = 0;
        this.length += e
      }
      return this.strip()
    }, l.prototype.ishln = function(t) {
      return v(this.negative === 0), this.iushln(t)
    }, l.prototype.iushrn = function(t, i, e) {
      v(typeof t == "number" && t >= 0);
      var h;
      i ? h = (i - i % 26) / 26 : h = 0;
      var s = t % 26,
        a = Math.min((t - s) / 26, this.length),
        u = 67108863 ^ 67108863 >>> s << s,
        f = e;
      if (h -= a, h = Math.max(0, h), f) {
        for (var r = 0; r < a; r++) f.words[r] = this.words[r];
        f.length = a
      }
      if (a !== 0)
        if (this.length > a)
          for (this.length -= a, r = 0; r < this.length; r++) this.words[r] = this.words[r + a];
        else this.words[0] = 0, this.length = 1;
      var n = 0;
      for (r = this.length - 1; r >= 0 && (n !== 0 || r >= h); r--) {
        var d = this.words[r] | 0;
        this.words[r] = n << 26 - s | d >>> s, n = d & u
      }
      return f && n !== 0 && (f.words[f.length++] = n), this.length === 0 && (this.words[0] = 0, this.length = 1), this.strip()
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
      var s = this.words[e];
      return !!(s & h)
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
        s;
      this._expand(h);
      var a, u = 0;
      for (s = 0; s < t.length; s++) {
        a = (this.words[s + e] | 0) + u;
        var f = (t.words[s] | 0) * i;
        a -= f & 67108863, u = (a >> 26) - (f / 67108864 | 0), this.words[s + e] = a & 67108863
      }
      for (; s < this.length - e; s++) a = (this.words[s + e] | 0) + u, u = a >> 26, this.words[s + e] = a & 67108863;
      if (u === 0) return this.strip();
      for (v(u === -1), u = 0, s = 0; s < this.length; s++) a = -(this.words[s] | 0) + u, u = a >> 26, this.words[s] = a & 67108863;
      return this.negative = 1, this.strip()
    }, l.prototype._wordDiv = function(t, i) {
      var e = this.length - t.length,
        h = this.clone(),
        s = t,
        a = s.words[s.length - 1] | 0,
        u = this._countBits(a);
      e = 26 - u, e !== 0 && (s = s.ushln(e), h.iushln(e), a = s.words[s.length - 1] | 0);
      var f = h.length - s.length,
        r;
      if (i !== "mod") {
        r = new l(null), r.length = f + 1, r.words = new Array(r.length);
        for (var n = 0; n < r.length; n++) r.words[n] = 0
      }
      var d = h.clone()._ishlnsubmul(s, 1, f);
      d.negative === 0 && (h = d, r && (r.words[f] = 1));
      for (var m = f - 1; m >= 0; m--) {
        var p = (h.words[s.length + m] | 0) * 67108864 + (h.words[s.length + m - 1] | 0);
        for (p = Math.min(p / a | 0, 67108863), h._ishlnsubmul(s, p, m); h.negative !== 0;) p--, h.negative = 0, h._ishlnsubmul(s, 1, m), h.isZero() || (h.negative ^= 1);
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
      var h, s, a;
      return this.negative !== 0 && t.negative === 0 ? (a = this.neg().divmod(t, i), i !== "mod" && (h = a.div.neg()), i !== "div" && (s = a.mod.neg(), e && s.negative !== 0 && s.iadd(t)), {
        div: h,
        mod: s
      }) : this.negative === 0 && t.negative !== 0 ? (a = this.divmod(t.neg(), i), i !== "mod" && (h = a.div.neg()), {
        div: h,
        mod: a.mod
      }) : this.negative & t.negative ? (a = this.neg().divmod(t.neg(), i), i !== "div" && (s = a.mod.neg(), e && s.negative !== 0 && s.isub(t)), {
        div: a.div,
        mod: s
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
        s = t.andln(1),
        a = e.cmp(h);
      return a < 0 || s === 1 && a === 0 ? i.div : i.div.negative !== 0 ? i.div.isubn(1) : i.div.iaddn(1)
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
      for (var h = new l(1), s = new l(0), a = new l(0), u = new l(1), f = 0; i.isEven() && e.isEven();) i.iushrn(1), e.iushrn(1), ++f;
      for (var r = e.clone(), n = i.clone(); !i.isZero();) {
        for (var d = 0, m = 1; !(i.words[0] & m) && d < 26; ++d, m <<= 1);
        if (d > 0)
          for (i.iushrn(d); d-- > 0;)(h.isOdd() || s.isOdd()) && (h.iadd(r), s.isub(n)), h.iushrn(1), s.iushrn(1);
        for (var p = 0, M = 1; !(e.words[0] & M) && p < 26; ++p, M <<= 1);
        if (p > 0)
          for (e.iushrn(p); p-- > 0;)(a.isOdd() || u.isOdd()) && (a.iadd(r), u.isub(n)), a.iushrn(1), u.iushrn(1);
        i.cmp(e) >= 0 ? (i.isub(e), h.isub(a), s.isub(u)) : (e.isub(i), a.isub(h), u.isub(s))
      }
      return {
        a,
        b: u,
        gcd: e.iushln(f)
      }
    }, l.prototype._invmp = function(t) {
      v(t.negative === 0), v(!t.isZero());
      var i = this,
        e = t.clone();
      i.negative !== 0 ? i = i.umod(t) : i = i.clone();
      for (var h = new l(1), s = new l(0), a = e.clone(); i.cmpn(1) > 0 && e.cmpn(1) > 0;) {
        for (var u = 0, f = 1; !(i.words[0] & f) && u < 26; ++u, f <<= 1);
        if (u > 0)
          for (i.iushrn(u); u-- > 0;) h.isOdd() && h.iadd(a), h.iushrn(1);
        for (var r = 0, n = 1; !(e.words[0] & n) && r < 26; ++r, n <<= 1);
        if (r > 0)
          for (e.iushrn(r); r-- > 0;) s.isOdd() && s.iadd(a), s.iushrn(1);
        i.cmp(e) >= 0 ? (i.isub(e), h.isub(s)) : (e.isub(i), s.isub(h))
      }
      var d;
      return i.cmpn(1) === 0 ? d = h : d = s, d.cmpn(0) < 0 && d.iadd(t), d
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
        var s = i.cmp(e);
        if (s < 0) {
          var a = i;
          i = e, e = a
        } else if (s === 0 || e.cmpn(1) === 0) break;
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
      for (var s = h, a = e; s !== 0 && a < this.length; a++) {
        var u = this.words[a] | 0;
        u += s, s = u >>> 26, u &= 67108863, this.words[a] = u
      }
      return s !== 0 && (this.words[a] = s, this.length++), this
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
          s = t.words[e] | 0;
        if (h !== s) {
          h < s ? i = -1 : h > s && (i = 1);
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
      return new x(t)
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
    var vt = {
      k256: null,
      p224: null,
      p192: null,
      p25519: null
    };

    function et(o, t) {
      this.name = o, this.p = new l(t, 16), this.n = this.p.bitLength(), this.k = new l(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
    }
    et.prototype._tmp = function() {
      var t = new l(null);
      return t.words = new Array(Math.ceil(this.n / 13)), t
    }, et.prototype.ireduce = function(t) {
      var i = t,
        e;
      do this.split(i, this.tmp), i = this.imulK(i), i = i.iadd(this.tmp), e = i.bitLength(); while (e > this.n);
      var h = e < this.n ? -1 : i.ucmp(this.p);
      return h === 0 ? (i.words[0] = 0, i.length = 1) : h > 0 ? i.isub(this.p) : i.strip(), i
    }, et.prototype.split = function(t, i) {
      t.iushrn(this.n, 0, i)
    }, et.prototype.imulK = function(t) {
      return t.imul(this.k)
    };

    function lt() {
      et.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
    }
    ft(lt, et), lt.prototype.split = function(t, i) {
      for (var e = 4194303, h = Math.min(t.length, 9), s = 0; s < h; s++) i.words[s] = t.words[s];
      if (i.length = h, t.length <= 9) {
        t.words[0] = 0, t.length = 1;
        return
      }
      var a = t.words[9];
      for (i.words[i.length++] = a & e, s = 10; s < t.length; s++) {
        var u = t.words[s] | 0;
        t.words[s - 10] = (u & e) << 4 | a >>> 22, a = u
      }
      a >>>= 22, t.words[s - 10] = a, a === 0 && t.length > 10 ? t.length -= 10 : t.length -= 9
    }, lt.prototype.imulK = function(t) {
      t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;
      for (var i = 0, e = 0; e < t.length; e++) {
        var h = t.words[e] | 0;
        i += h * 977, t.words[e] = i & 67108863, i = h * 64 + (i / 67108864 | 0)
      }
      return t.words[t.length - 1] === 0 && (t.length--, t.words[t.length - 1] === 0 && t.length--), t
    };

    function Pt() {
      et.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
    }
    ft(Pt, et);

    function Dt() {
      et.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
    }
    ft(Dt, et);

    function dt() {
      et.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
    }
    ft(dt, et), dt.prototype.imulK = function(t) {
      for (var i = 0, e = 0; e < t.length; e++) {
        var h = (t.words[e] | 0) * 19 + i,
          s = h & 67108863;
        h >>>= 26, t.words[e] = s, i = h
      }
      return i !== 0 && (t.words[t.length++] = i), t
    }, l._prime = function(t) {
      if (vt[t]) return vt[t];
      var i;
      if (t === "k256") i = new lt;
      else if (t === "p224") i = new Pt;
      else if (t === "p192") i = new Dt;
      else if (t === "p25519") i = new dt;
      else throw new Error("Unknown prime " + t);
      return vt[t] = i, i
    };

    function x(o) {
      if (typeof o == "string") {
        var t = l._prime(o);
        this.m = t.p, this.prime = t
      } else v(o.gtn(1), "modulus must be greater than 1"), this.m = o, this.prime = null
    }
    x.prototype._verify1 = function(t) {
      v(t.negative === 0, "red works only with positives"), v(t.red, "red works only with red numbers")
    }, x.prototype._verify2 = function(t, i) {
      v((t.negative | i.negative) === 0, "red works only with positives"), v(t.red && t.red === i.red, "red works only with red numbers")
    }, x.prototype.imod = function(t) {
      return this.prime ? this.prime.ireduce(t)._forceRed(this) : t.umod(this.m)._forceRed(this)
    }, x.prototype.neg = function(t) {
      return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this)
    }, x.prototype.add = function(t, i) {
      this._verify2(t, i);
      var e = t.add(i);
      return e.cmp(this.m) >= 0 && e.isub(this.m), e._forceRed(this)
    }, x.prototype.iadd = function(t, i) {
      this._verify2(t, i);
      var e = t.iadd(i);
      return e.cmp(this.m) >= 0 && e.isub(this.m), e
    }, x.prototype.sub = function(t, i) {
      this._verify2(t, i);
      var e = t.sub(i);
      return e.cmpn(0) < 0 && e.iadd(this.m), e._forceRed(this)
    }, x.prototype.isub = function(t, i) {
      this._verify2(t, i);
      var e = t.isub(i);
      return e.cmpn(0) < 0 && e.iadd(this.m), e
    }, x.prototype.shl = function(t, i) {
      return this._verify1(t), this.imod(t.ushln(i))
    }, x.prototype.imul = function(t, i) {
      return this._verify2(t, i), this.imod(t.imul(i))
    }, x.prototype.mul = function(t, i) {
      return this._verify2(t, i), this.imod(t.mul(i))
    }, x.prototype.isqr = function(t) {
      return this.imul(t, t.clone())
    }, x.prototype.sqr = function(t) {
      return this.mul(t, t)
    }, x.prototype.sqrt = function(t) {
      if (t.isZero()) return t.clone();
      var i = this.m.andln(3);
      if (v(i % 2 === 1), i === 3) {
        var e = this.m.add(new l(1)).iushrn(2);
        return this.pow(t, e)
      }
      for (var h = this.m.subn(1), s = 0; !h.isZero() && h.andln(1) === 0;) s++, h.iushrn(1);
      v(!h.isZero());
      var a = new l(1).toRed(this),
        u = a.redNeg(),
        f = this.m.subn(1).iushrn(1),
        r = this.m.bitLength();
      for (r = new l(2 * r * r).toRed(this); this.pow(r, f).cmp(u) !== 0;) r.redIAdd(u);
      for (var n = this.pow(r, h), d = this.pow(t, h.addn(1).iushrn(1)), m = this.pow(t, h), p = s; m.cmp(a) !== 0;) {
        for (var M = m, c = 0; M.cmp(a) !== 0; c++) M = M.redSqr();
        v(c < p);
        var g = this.pow(n, new l(1).iushln(p - c - 1));
        d = d.redMul(g), n = g.redSqr(), m = m.redMul(n), p = c
      }
      return d
    }, x.prototype.invm = function(t) {
      var i = t._invmp(this.m);
      return i.negative !== 0 ? (i.negative = 0, this.imod(i).redNeg()) : this.imod(i)
    }, x.prototype.pow = function(t, i) {
      if (i.isZero()) return new l(1);
      if (i.cmpn(1) === 0) return t.clone();
      var e = 4,
        h = new Array(1 << e);
      h[0] = new l(1).toRed(this), h[1] = t;
      for (var s = 2; s < h.length; s++) h[s] = this.mul(h[s - 1], t);
      var a = h[0],
        u = 0,
        f = 0,
        r = i.bitLength() % 26;
      for (r === 0 && (r = 26), s = i.length - 1; s >= 0; s--) {
        for (var n = i.words[s], d = r - 1; d >= 0; d--) {
          var m = n >> d & 1;
          if (a !== h[0] && (a = this.sqr(a)), m === 0 && u === 0) {
            f = 0;
            continue
          }
          u <<= 1, u |= m, f++, !(f !== e && (s !== 0 || d !== 0)) && (a = this.mul(a, h[u]), f = 0, u = 0)
        }
        r = 26
      }
      return a
    }, x.prototype.convertTo = function(t) {
      var i = t.umod(this.m);
      return i === t ? i.clone() : i
    }, x.prototype.convertFrom = function(t) {
      var i = t.clone();
      return i.red = null, i
    }, l.mont = function(t) {
      return new st(t)
    };

    function st(o) {
      x.call(this, o), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new l(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
    }
    ft(st, x), st.prototype.convertTo = function(t) {
      return this.imod(t.ushln(this.shift))
    }, st.prototype.convertFrom = function(t) {
      var i = this.imod(t.mul(this.rinv));
      return i.red = null, i
    }, st.prototype.imul = function(t, i) {
      if (t.isZero() || i.isZero()) return t.words[0] = 0, t.length = 1, t;
      var e = t.imul(i),
        h = e.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
        s = e.isub(h).iushrn(this.shift),
        a = s;
      return s.cmp(this.m) >= 0 ? a = s.isub(this.m) : s.cmpn(0) < 0 && (a = s.iadd(this.m)), a._forceRed(this)
    }, st.prototype.mul = function(t, i) {
      if (t.isZero() || i.isZero()) return new l(0)._forceRed(this);
      var e = t.mul(i),
        h = e.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
        s = e.isub(h).iushrn(this.shift),
        a = s;
      return s.cmp(this.m) >= 0 ? a = s.isub(this.m) : s.cmpn(0) < 0 && (a = s.iadd(this.m)), a._forceRed(this)
    }, st.prototype.invm = function(t) {
      var i = this.imod(t._invmp(this.m).mul(this.r2));
      return i._forceRed(this)
    }
  })(It, vr)
})(Lt);
var mr = Lt.exports,
  at = mr,
  nr = ur,
  gr = function(it) {
    if (typeof it == "string" || typeof it == "number") {
      var ot = new at(1),
        v = String(it).toLowerCase().trim(),
        ft = v.substr(0, 2) === "0x" || v.substr(0, 3) === "-0x",
        l = nr(v);
      if (l.substr(0, 1) === "-" && (l = nr(l.slice(1)), ot = new at(-1, 10)), l = l === "" ? "0" : l, !l.match(/^-?[0-9]+$/) && l.match(/^[0-9A-Fa-f]+$/) || l.match(/^[a-fA-F]+$/) || ft === !0 && l.match(/^[0-9A-Fa-f]+$/)) return new at(l, 16).mul(ot);
      if ((l.match(/^-?[0-9]+$/) || l === "") && ft === !1) return new at(l, 10).mul(ot)
    } else if (typeof it == "object" && it.toString && !it.pop && !it.push && it.toString(10).match(/^-?[0-9]+$/) && (it.mul || it.dividedToIntegerBy)) return new at(it.toString(10), 10);
    throw new Error("[number-to-bn] while converting number " + JSON.stringify(it) + " to BN.js instance, error: invalid number value. Value must be an integer, hex string, BN or BigNumber instance. Note, decimals are not supported.")
  };
export {
  gr as s
};