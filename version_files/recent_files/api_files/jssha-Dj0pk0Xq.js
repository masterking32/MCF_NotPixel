import {
  c as kt
} from "./@ledgerhq-BW4RAlPi.js";
var ft = {
  exports: {}
};
(function(ct, Bt) {
  (function(_, M) {
    ct.exports = M()
  })(kt, function() {
    var _ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

    function M(u, t, e, r) {
      var o, n, s, a = t || [0],
        h = (e = e || 0) >>> 3,
        w = r === -1 ? 3 : 0;
      for (o = 0; o < u.length; o += 1) n = (s = o + h) >>> 2, a.length <= n && a.push(0), a[n] |= u[o] << 8 * (w + r * (s % 4));
      return {
        value: a,
        binLen: 8 * u.length + e
      }
    }

    function K(u, t, e) {
      switch (t) {
        case "UTF8":
        case "UTF16BE":
        case "UTF16LE":
          break;
        default:
          throw new Error("encoding must be UTF8, UTF16BE, or UTF16LE")
      }
      switch (u) {
        case "HEX":
          return function(r, o, n) {
            return function(s, a, h, w) {
              var p, c, l, A;
              if (s.length % 2 != 0) throw new Error("String of HEX type must be in byte increments");
              var f = a || [0],
                I = (h = h || 0) >>> 3,
                N = w === -1 ? 3 : 0;
              for (p = 0; p < s.length; p += 2) {
                if (c = parseInt(s.substr(p, 2), 16), isNaN(c)) throw new Error("String of HEX type contains invalid characters");
                for (l = (A = (p >>> 1) + I) >>> 2; f.length <= l;) f.push(0);
                f[l] |= c << 8 * (N + w * (A % 4))
              }
              return {
                value: f,
                binLen: 4 * s.length + h
              }
            }(r, o, n, e)
          };
        case "TEXT":
          return function(r, o, n) {
            return function(s, a, h, w, p) {
              var c, l, A, f, I, N, m, g, R = 0,
                E = h || [0],
                y = (w = w || 0) >>> 3;
              if (a === "UTF8")
                for (m = p === -1 ? 3 : 0, A = 0; A < s.length; A += 1)
                  for (l = [], 128 > (c = s.charCodeAt(A)) ? l.push(c) : 2048 > c ? (l.push(192 | c >>> 6), l.push(128 | 63 & c)) : 55296 > c || 57344 <= c ? l.push(224 | c >>> 12, 128 | c >>> 6 & 63, 128 | 63 & c) : (A += 1, c = 65536 + ((1023 & c) << 10 | 1023 & s.charCodeAt(A)), l.push(240 | c >>> 18, 128 | c >>> 12 & 63, 128 | c >>> 6 & 63, 128 | 63 & c)), f = 0; f < l.length; f += 1) {
                    for (I = (N = R + y) >>> 2; E.length <= I;) E.push(0);
                    E[I] |= l[f] << 8 * (m + p * (N % 4)), R += 1
                  } else
                    for (m = p === -1 ? 2 : 0, g = a === "UTF16LE" && p !== 1 || a !== "UTF16LE" && p === 1, A = 0; A < s.length; A += 1) {
                      for (c = s.charCodeAt(A), g === !0 && (c = (f = 255 & c) << 8 | c >>> 8), I = (N = R + y) >>> 2; E.length <= I;) E.push(0);
                      E[I] |= c << 8 * (m + p * (N % 4)), R += 2
                    }
              return {
                value: E,
                binLen: 8 * R + w
              }
            }(r, t, o, n, e)
          };
        case "B64":
          return function(r, o, n) {
            return function(s, a, h, w) {
              var p, c, l, A, f, I, N = 0,
                m = a || [0],
                g = (h = h || 0) >>> 3,
                R = w === -1 ? 3 : 0,
                E = s.indexOf("=");
              if (s.search(/^[a-zA-Z0-9=+/]+$/) === -1) throw new Error("Invalid character in base-64 string");
              if (s = s.replace(/=/g, ""), E !== -1 && E < s.length) throw new Error("Invalid '=' found in base-64 string");
              for (p = 0; p < s.length; p += 4) {
                for (A = s.substr(p, 4), l = 0, c = 0; c < A.length; c += 1) l |= _.indexOf(A.charAt(c)) << 18 - 6 * c;
                for (c = 0; c < A.length - 1; c += 1) {
                  for (f = (I = N + g) >>> 2; m.length <= f;) m.push(0);
                  m[f] |= (l >>> 16 - 8 * c & 255) << 8 * (R + w * (I % 4)), N += 1
                }
              }
              return {
                value: m,
                binLen: 8 * N + h
              }
            }(r, o, n, e)
          };
        case "BYTES":
          return function(r, o, n) {
            return function(s, a, h, w) {
              var p, c, l, A, f = a || [0],
                I = (h = h || 0) >>> 3,
                N = w === -1 ? 3 : 0;
              for (c = 0; c < s.length; c += 1) p = s.charCodeAt(c), l = (A = c + I) >>> 2, f.length <= l && f.push(0), f[l] |= p << 8 * (N + w * (A % 4));
              return {
                value: f,
                binLen: 8 * s.length + h
              }
            }(r, o, n, e)
          };
        case "ARRAYBUFFER":
          try {
            new ArrayBuffer(0)
          } catch {
            throw new Error("ARRAYBUFFER not supported by this environment")
          }
          return function(r, o, n) {
            return function(s, a, h, w) {
              return M(new Uint8Array(s), a, h, w)
            }(r, o, n, e)
          };
        case "UINT8ARRAY":
          try {
            new Uint8Array(0)
          } catch {
            throw new Error("UINT8ARRAY not supported by this environment")
          }
          return function(r, o, n) {
            return M(r, o, n, e)
          };
        default:
          throw new Error("format must be HEX, TEXT, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY")
      }
    }

    function q(u, t, e, r) {
      switch (u) {
        case "HEX":
          return function(o) {
            return function(n, s, a, h) {
              var w, p, c = "",
                l = s / 8,
                A = a === -1 ? 3 : 0;
              for (w = 0; w < l; w += 1) p = n[w >>> 2] >>> 8 * (A + a * (w % 4)), c += "0123456789abcdef".charAt(p >>> 4 & 15) + "0123456789abcdef".charAt(15 & p);
              return h.outputUpper ? c.toUpperCase() : c
            }(o, t, e, r)
          };
        case "B64":
          return function(o) {
            return function(n, s, a, h) {
              var w, p, c, l, A, f = "",
                I = s / 8,
                N = a === -1 ? 3 : 0;
              for (w = 0; w < I; w += 3)
                for (l = w + 1 < I ? n[w + 1 >>> 2] : 0, A = w + 2 < I ? n[w + 2 >>> 2] : 0, c = (n[w >>> 2] >>> 8 * (N + a * (w % 4)) & 255) << 16 | (l >>> 8 * (N + a * ((w + 1) % 4)) & 255) << 8 | A >>> 8 * (N + a * ((w + 2) % 4)) & 255, p = 0; p < 4; p += 1) f += 8 * w + 6 * p <= s ? _.charAt(c >>> 6 * (3 - p) & 63) : h.b64Pad;
              return f
            }(o, t, e, r)
          };
        case "BYTES":
          return function(o) {
            return function(n, s, a) {
              var h, w, p = "",
                c = s / 8,
                l = a === -1 ? 3 : 0;
              for (h = 0; h < c; h += 1) w = n[h >>> 2] >>> 8 * (l + a * (h % 4)) & 255, p += String.fromCharCode(w);
              return p
            }(o, t, e)
          };
        case "ARRAYBUFFER":
          try {
            new ArrayBuffer(0)
          } catch {
            throw new Error("ARRAYBUFFER not supported by this environment")
          }
          return function(o) {
            return function(n, s, a) {
              var h, w = s / 8,
                p = new ArrayBuffer(w),
                c = new Uint8Array(p),
                l = a === -1 ? 3 : 0;
              for (h = 0; h < w; h += 1) c[h] = n[h >>> 2] >>> 8 * (l + a * (h % 4)) & 255;
              return p
            }(o, t, e)
          };
        case "UINT8ARRAY":
          try {
            new Uint8Array(0)
          } catch {
            throw new Error("UINT8ARRAY not supported by this environment")
          }
          return function(o) {
            return function(n, s, a) {
              var h, w = s / 8,
                p = a === -1 ? 3 : 0,
                c = new Uint8Array(w);
              for (h = 0; h < w; h += 1) c[h] = n[h >>> 2] >>> 8 * (p + a * (h % 4)) & 255;
              return c
            }(o, t, e)
          };
        default:
          throw new Error("format must be HEX, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY")
      }
    }
    var v = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
      U = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428],
      C = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225],
      T = "Chosen SHA variant is not supported";

    function O(u, t) {
      var e, r, o = u.binLen >>> 3,
        n = t.binLen >>> 3,
        s = o << 3,
        a = 4 - o << 3;
      if (o % 4 != 0) {
        for (e = 0; e < n; e += 4) r = o + e >>> 2, u.value[r] |= t.value[e >>> 2] << s, u.value.push(0), u.value[r + 1] |= t.value[e >>> 2] >>> a;
        return (u.value.length << 2) - 4 >= n + o && u.value.pop(), {
          value: u.value,
          binLen: u.binLen + t.binLen
        }
      }
      return {
        value: u.value.concat(t.value),
        binLen: u.binLen + t.binLen
      }
    }

    function D(u) {
      var t = {
          outputUpper: !1,
          b64Pad: "=",
          outputLen: -1
        },
        e = u || {},
        r = "Output length must be a multiple of 8";
      if (t.outputUpper = e.outputUpper || !1, e.b64Pad && (t.b64Pad = e.b64Pad), e.outputLen) {
        if (e.outputLen % 8 != 0) throw new Error(r);
        t.outputLen = e.outputLen
      } else if (e.shakeLen) {
        if (e.shakeLen % 8 != 0) throw new Error(r);
        t.outputLen = e.shakeLen
      }
      if (typeof t.outputUpper != "boolean") throw new Error("Invalid outputUpper formatting option");
      if (typeof t.b64Pad != "string") throw new Error("Invalid b64Pad formatting option");
      return t
    }

    function L(u, t, e, r) {
      var o = u + " must include a value and format";
      if (!t) {
        if (!r) throw new Error(o);
        return r
      }
      if (t.value === void 0 || !t.format) throw new Error(o);
      return K(t.format, t.encoding || "UTF8", e)(t.value)
    }
    var j = function() {
        function u(t, e, r) {
          var o = r || {};
          if (this.t = e, this.i = o.encoding || "UTF8", this.numRounds = o.numRounds || 1, isNaN(this.numRounds) || this.numRounds !== parseInt(this.numRounds, 10) || 1 > this.numRounds) throw new Error("numRounds must a integer >= 1");
          this.o = t, this.u = [], this.s = 0, this.h = !1, this.v = 0, this.A = !1, this.l = [], this.H = []
        }
        return u.prototype.update = function(t) {
          var e, r = 0,
            o = this.S >>> 5,
            n = this.p(t, this.u, this.s),
            s = n.binLen,
            a = n.value,
            h = s >>> 5;
          for (e = 0; e < h; e += o) r + this.S <= s && (this.m = this.R(a.slice(e, e + o), this.m), r += this.S);
          this.v += r, this.u = a.slice(r >>> 5), this.s = s % this.S, this.h = !0
        }, u.prototype.getHash = function(t, e) {
          var r, o, n = this.U,
            s = D(e);
          if (this.T) {
            if (s.outputLen === -1) throw new Error("Output length must be specified in options");
            n = s.outputLen
          }
          var a = q(t, n, this.C, s);
          if (this.A && this.F) return a(this.F(s));
          for (o = this.K(this.u.slice(), this.s, this.v, this.B(this.m), n), r = 1; r < this.numRounds; r += 1) this.T && n % 32 != 0 && (o[o.length - 1] &= 16777215 >>> 24 - n % 32), o = this.K(o, n, 0, this.L(this.o), n);
          return a(o)
        }, u.prototype.setHMACKey = function(t, e, r) {
          if (!this.g) throw new Error("Variant does not support HMAC");
          if (this.h) throw new Error("Cannot set MAC key after calling update");
          var o = K(e, (r || {}).encoding || "UTF8", this.C);
          this.k(o(t))
        }, u.prototype.k = function(t) {
          var e, r = this.S >>> 3,
            o = r / 4 - 1;
          if (this.numRounds !== 1) throw new Error("Cannot set numRounds with MAC");
          if (this.A) throw new Error("MAC key already set");
          for (r < t.binLen / 8 && (t.value = this.K(t.value, t.binLen, 0, this.L(this.o), this.U)); t.value.length <= o;) t.value.push(0);
          for (e = 0; e <= o; e += 1) this.l[e] = 909522486 ^ t.value[e], this.H[e] = 1549556828 ^ t.value[e];
          this.m = this.R(this.l, this.m), this.v = this.S, this.A = !0
        }, u.prototype.getHMAC = function(t, e) {
          var r = D(e);
          return q(t, this.U, this.C, r)(this.Y())
        }, u.prototype.Y = function() {
          var t;
          if (!this.A) throw new Error("Cannot call getHMAC without first setting MAC key");
          var e = this.K(this.u.slice(), this.s, this.v, this.B(this.m), this.U);
          return t = this.R(this.H, this.L(this.o)), t = this.K(e, this.U, this.S, t, this.U)
        }, u
      }(),
      J = function(u, t) {
        return (J = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(e, r) {
            e.__proto__ = r
          } || function(e, r) {
            for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
          })(u, t)
      };

    function X(u, t) {
      function e() {
        this.constructor = u
      }
      J(u, t), u.prototype = t === null ? Object.create(t) : (e.prototype = t.prototype, new e)
    }

    function F(u, t) {
      return u << t | u >>> 32 - t
    }

    function d(u, t) {
      return u >>> t | u << 32 - t
    }

    function Q(u, t) {
      return u >>> t
    }

    function W(u, t, e) {
      return u ^ t ^ e
    }

    function $(u, t, e) {
      return u & t ^ ~u & e
    }

    function tt(u, t, e) {
      return u & t ^ u & e ^ t & e
    }

    function wt(u) {
      return d(u, 2) ^ d(u, 13) ^ d(u, 22)
    }

    function S(u, t) {
      var e = (65535 & u) + (65535 & t);
      return (65535 & (u >>> 16) + (t >>> 16) + (e >>> 16)) << 16 | 65535 & e
    }

    function lt(u, t, e, r) {
      var o = (65535 & u) + (65535 & t) + (65535 & e) + (65535 & r);
      return (65535 & (u >>> 16) + (t >>> 16) + (e >>> 16) + (r >>> 16) + (o >>> 16)) << 16 | 65535 & o
    }

    function k(u, t, e, r, o) {
      var n = (65535 & u) + (65535 & t) + (65535 & e) + (65535 & r) + (65535 & o);
      return (65535 & (u >>> 16) + (t >>> 16) + (e >>> 16) + (r >>> 16) + (o >>> 16) + (n >>> 16)) << 16 | 65535 & n
    }

    function vt(u) {
      return d(u, 7) ^ d(u, 18) ^ Q(u, 3)
    }

    function pt(u) {
      return d(u, 6) ^ d(u, 11) ^ d(u, 25)
    }

    function At(u) {
      return [1732584193, 4023233417, 2562383102, 271733878, 3285377520]
    }

    function nt(u, t) {
      var e, r, o, n, s, a, h, w = [];
      for (e = t[0], r = t[1], o = t[2], n = t[3], s = t[4], h = 0; h < 80; h += 1) w[h] = h < 16 ? u[h] : F(w[h - 3] ^ w[h - 8] ^ w[h - 14] ^ w[h - 16], 1), a = h < 20 ? k(F(e, 5), $(r, o, n), s, 1518500249, w[h]) : h < 40 ? k(F(e, 5), W(r, o, n), s, 1859775393, w[h]) : h < 60 ? k(F(e, 5), tt(r, o, n), s, 2400959708, w[h]) : k(F(e, 5), W(r, o, n), s, 3395469782, w[h]), s = n, n = o, o = F(r, 30), r = e, e = a;
      return t[0] = S(e, t[0]), t[1] = S(r, t[1]), t[2] = S(o, t[2]), t[3] = S(n, t[3]), t[4] = S(s, t[4]), t
    }

    function Nt(u, t, e, r) {
      for (var o, n = 15 + (t + 65 >>> 9 << 4), s = t + e; u.length <= n;) u.push(0);
      for (u[t >>> 5] |= 128 << 24 - t % 32, u[n] = 4294967295 & s, u[n - 1] = s / 4294967296 | 0, o = 0; o < u.length; o += 16) r = nt(u.slice(o, o + 16), r);
      return r
    }
    var It = function(u) {
      function t(e, r, o) {
        var n = this;
        if (e !== "SHA-1") throw new Error(T);
        var s = o || {};
        return (n = u.call(this, e, r, o) || this).g = !0, n.F = n.Y, n.C = -1, n.p = K(n.t, n.i, n.C), n.R = nt, n.B = function(a) {
          return a.slice()
        }, n.L = At, n.K = Nt, n.m = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], n.S = 512, n.U = 160, n.T = !1, s.hmacKey && n.k(L("hmacKey", s.hmacKey, n.C)), n
      }
      return X(t, u), t
    }(j);

    function et(u) {
      return u == "SHA-224" ? U.slice() : C.slice()
    }

    function rt(u, t) {
      var e, r, o, n, s, a, h, w, p, c, l, A, f = [];
      for (e = t[0], r = t[1], o = t[2], n = t[3], s = t[4], a = t[5], h = t[6], w = t[7], l = 0; l < 64; l += 1) f[l] = l < 16 ? u[l] : lt(d(A = f[l - 2], 17) ^ d(A, 19) ^ Q(A, 10), f[l - 7], vt(f[l - 15]), f[l - 16]), p = k(w, pt(s), $(s, a, h), v[l], f[l]), c = S(wt(e), tt(e, r, o)), w = h, h = a, a = s, s = S(n, p), n = o, o = r, r = e, e = S(p, c);
      return t[0] = S(e, t[0]), t[1] = S(r, t[1]), t[2] = S(o, t[2]), t[3] = S(n, t[3]), t[4] = S(s, t[4]), t[5] = S(a, t[5]), t[6] = S(h, t[6]), t[7] = S(w, t[7]), t
    }
    var mt = function(u) {
        function t(e, r, o) {
          var n = this;
          if (e !== "SHA-224" && e !== "SHA-256") throw new Error(T);
          var s = o || {};
          return (n = u.call(this, e, r, o) || this).F = n.Y, n.g = !0, n.C = -1, n.p = K(n.t, n.i, n.C), n.R = rt, n.B = function(a) {
            return a.slice()
          }, n.L = et, n.K = function(a, h, w, p) {
            return function(c, l, A, f, I) {
              for (var N, m = 15 + (l + 65 >>> 9 << 4), g = l + A; c.length <= m;) c.push(0);
              for (c[l >>> 5] |= 128 << 24 - l % 32, c[m] = 4294967295 & g, c[m - 1] = g / 4294967296 | 0, N = 0; N < c.length; N += 16) f = rt(c.slice(N, N + 16), f);
              return I === "SHA-224" ? [f[0], f[1], f[2], f[3], f[4], f[5], f[6]] : f
            }(a, h, w, p, e)
          }, n.m = et(e), n.S = 512, n.U = e === "SHA-224" ? 224 : 256, n.T = !1, s.hmacKey && n.k(L("hmacKey", s.hmacKey, n.C)), n
        }
        return X(t, u), t
      }(j),
      i = function(u, t) {
        this.N = u, this.I = t
      };

    function ut(u, t) {
      var e;
      return t > 32 ? (e = 64 - t, new i(u.I << t | u.N >>> e, u.N << t | u.I >>> e)) : t !== 0 ? (e = 32 - t, new i(u.N << t | u.I >>> e, u.I << t | u.N >>> e)) : u
    }

    function H(u, t) {
      var e;
      return t < 32 ? (e = 32 - t, new i(u.N >>> t | u.I << e, u.I >>> t | u.N << e)) : (e = 64 - t, new i(u.I >>> t | u.N << e, u.N >>> t | u.I << e))
    }

    function ot(u, t) {
      return new i(u.N >>> t, u.I >>> t | u.N << 32 - t)
    }

    function gt(u, t, e) {
      return new i(u.N & t.N ^ ~u.N & e.N, u.I & t.I ^ ~u.I & e.I)
    }

    function St(u, t, e) {
      return new i(u.N & t.N ^ u.N & e.N ^ t.N & e.N, u.I & t.I ^ u.I & e.I ^ t.I & e.I)
    }

    function Et(u) {
      var t = H(u, 28),
        e = H(u, 34),
        r = H(u, 39);
      return new i(t.N ^ e.N ^ r.N, t.I ^ e.I ^ r.I)
    }

    function b(u, t) {
      var e, r;
      e = (65535 & u.I) + (65535 & t.I);
      var o = (65535 & (r = (u.I >>> 16) + (t.I >>> 16) + (e >>> 16))) << 16 | 65535 & e;
      return e = (65535 & u.N) + (65535 & t.N) + (r >>> 16), r = (u.N >>> 16) + (t.N >>> 16) + (e >>> 16), new i((65535 & r) << 16 | 65535 & e, o)
    }

    function bt(u, t, e, r) {
      var o, n;
      o = (65535 & u.I) + (65535 & t.I) + (65535 & e.I) + (65535 & r.I);
      var s = (65535 & (n = (u.I >>> 16) + (t.I >>> 16) + (e.I >>> 16) + (r.I >>> 16) + (o >>> 16))) << 16 | 65535 & o;
      return o = (65535 & u.N) + (65535 & t.N) + (65535 & e.N) + (65535 & r.N) + (n >>> 16), n = (u.N >>> 16) + (t.N >>> 16) + (e.N >>> 16) + (r.N >>> 16) + (o >>> 16), new i((65535 & n) << 16 | 65535 & o, s)
    }

    function yt(u, t, e, r, o) {
      var n, s;
      n = (65535 & u.I) + (65535 & t.I) + (65535 & e.I) + (65535 & r.I) + (65535 & o.I);
      var a = (65535 & (s = (u.I >>> 16) + (t.I >>> 16) + (e.I >>> 16) + (r.I >>> 16) + (o.I >>> 16) + (n >>> 16))) << 16 | 65535 & n;
      return n = (65535 & u.N) + (65535 & t.N) + (65535 & e.N) + (65535 & r.N) + (65535 & o.N) + (s >>> 16), s = (u.N >>> 16) + (t.N >>> 16) + (e.N >>> 16) + (r.N >>> 16) + (o.N >>> 16) + (n >>> 16), new i((65535 & s) << 16 | 65535 & n, a)
    }

    function B(u, t) {
      return new i(u.N ^ t.N, u.I ^ t.I)
    }

    function dt(u) {
      var t = H(u, 1),
        e = H(u, 8),
        r = ot(u, 7);
      return new i(t.N ^ e.N ^ r.N, t.I ^ e.I ^ r.I)
    }

    function Ht(u) {
      var t = H(u, 14),
        e = H(u, 18),
        r = H(u, 41);
      return new i(t.N ^ e.N ^ r.N, t.I ^ e.I ^ r.I)
    }
    var Ut = [new i(v[0], 3609767458), new i(v[1], 602891725), new i(v[2], 3964484399), new i(v[3], 2173295548), new i(v[4], 4081628472), new i(v[5], 3053834265), new i(v[6], 2937671579), new i(v[7], 3664609560), new i(v[8], 2734883394), new i(v[9], 1164996542), new i(v[10], 1323610764), new i(v[11], 3590304994), new i(v[12], 4068182383), new i(v[13], 991336113), new i(v[14], 633803317), new i(v[15], 3479774868), new i(v[16], 2666613458), new i(v[17], 944711139), new i(v[18], 2341262773), new i(v[19], 2007800933), new i(v[20], 1495990901), new i(v[21], 1856431235), new i(v[22], 3175218132), new i(v[23], 2198950837), new i(v[24], 3999719339), new i(v[25], 766784016), new i(v[26], 2566594879), new i(v[27], 3203337956), new i(v[28], 1034457026), new i(v[29], 2466948901), new i(v[30], 3758326383), new i(v[31], 168717936), new i(v[32], 1188179964), new i(v[33], 1546045734), new i(v[34], 1522805485), new i(v[35], 2643833823), new i(v[36], 2343527390), new i(v[37], 1014477480), new i(v[38], 1206759142), new i(v[39], 344077627), new i(v[40], 1290863460), new i(v[41], 3158454273), new i(v[42], 3505952657), new i(v[43], 106217008), new i(v[44], 3606008344), new i(v[45], 1432725776), new i(v[46], 1467031594), new i(v[47], 851169720), new i(v[48], 3100823752), new i(v[49], 1363258195), new i(v[50], 3750685593), new i(v[51], 3785050280), new i(v[52], 3318307427), new i(v[53], 3812723403), new i(v[54], 2003034995), new i(v[55], 3602036899), new i(v[56], 1575990012), new i(v[57], 1125592928), new i(v[58], 2716904306), new i(v[59], 442776044), new i(v[60], 593698344), new i(v[61], 3733110249), new i(v[62], 2999351573), new i(v[63], 3815920427), new i(3391569614, 3928383900), new i(3515267271, 566280711), new i(3940187606, 3454069534), new i(4118630271, 4000239992), new i(116418474, 1914138554), new i(174292421, 2731055270), new i(289380356, 3203993006), new i(460393269, 320620315), new i(685471733, 587496836), new i(852142971, 1086792851), new i(1017036298, 365543100), new i(1126000580, 2618297676), new i(1288033470, 3409855158), new i(1501505948, 4234509866), new i(1607167915, 987167468), new i(1816402316, 1246189591)];

    function it(u) {
      return u === "SHA-384" ? [new i(3418070365, U[0]), new i(1654270250, U[1]), new i(2438529370, U[2]), new i(355462360, U[3]), new i(1731405415, U[4]), new i(41048885895, U[5]), new i(3675008525, U[6]), new i(1203062813, U[7])] : [new i(C[0], 4089235720), new i(C[1], 2227873595), new i(C[2], 4271175723), new i(C[3], 1595750129), new i(C[4], 2917565137), new i(C[5], 725511199), new i(C[6], 4215389547), new i(C[7], 327033209)]
    }

    function st(u, t) {
      var e, r, o, n, s, a, h, w, p, c, l, A, f, I, N, m, g = [];
      for (e = t[0], r = t[1], o = t[2], n = t[3], s = t[4], a = t[5], h = t[6], w = t[7], l = 0; l < 80; l += 1) l < 16 ? (A = 2 * l, g[l] = new i(u[A], u[A + 1])) : g[l] = bt((f = g[l - 2], I = void 0, N = void 0, m = void 0, I = H(f, 19), N = H(f, 61), m = ot(f, 6), new i(I.N ^ N.N ^ m.N, I.I ^ N.I ^ m.I)), g[l - 7], dt(g[l - 15]), g[l - 16]), p = yt(w, Ht(s), gt(s, a, h), Ut[l], g[l]), c = b(Et(e), St(e, r, o)), w = h, h = a, a = s, s = b(n, p), n = o, o = r, r = e, e = b(p, c);
      return t[0] = b(e, t[0]), t[1] = b(r, t[1]), t[2] = b(o, t[2]), t[3] = b(n, t[3]), t[4] = b(s, t[4]), t[5] = b(a, t[5]), t[6] = b(h, t[6]), t[7] = b(w, t[7]), t
    }
    var Ct = function(u) {
        function t(e, r, o) {
          var n = this;
          if (e !== "SHA-384" && e !== "SHA-512") throw new Error(T);
          var s = o || {};
          return (n = u.call(this, e, r, o) || this).F = n.Y, n.g = !0, n.C = -1, n.p = K(n.t, n.i, n.C), n.R = st, n.B = function(a) {
            return a.slice()
          }, n.L = it, n.K = function(a, h, w, p) {
            return function(c, l, A, f, I) {
              for (var N, m = 31 + (l + 129 >>> 10 << 5), g = l + A; c.length <= m;) c.push(0);
              for (c[l >>> 5] |= 128 << 24 - l % 32, c[m] = 4294967295 & g, c[m - 1] = g / 4294967296 | 0, N = 0; N < c.length; N += 32) f = st(c.slice(N, N + 32), f);
              return I === "SHA-384" ? [(f = f)[0].N, f[0].I, f[1].N, f[1].I, f[2].N, f[2].I, f[3].N, f[3].I, f[4].N, f[4].I, f[5].N, f[5].I] : [f[0].N, f[0].I, f[1].N, f[1].I, f[2].N, f[2].I, f[3].N, f[3].I, f[4].N, f[4].I, f[5].N, f[5].I, f[6].N, f[6].I, f[7].N, f[7].I]
            }(a, h, w, p, e)
          }, n.m = it(e), n.S = 1024, n.U = e === "SHA-384" ? 384 : 512, n.T = !1, s.hmacKey && n.k(L("hmacKey", s.hmacKey, n.C)), n
        }
        return X(t, u), t
      }(j),
      Rt = [new i(0, 1), new i(0, 32898), new i(2147483648, 32906), new i(2147483648, 2147516416), new i(0, 32907), new i(0, 2147483649), new i(2147483648, 2147516545), new i(2147483648, 32777), new i(0, 138), new i(0, 136), new i(0, 2147516425), new i(0, 2147483658), new i(0, 2147516555), new i(2147483648, 139), new i(2147483648, 32905), new i(2147483648, 32771), new i(2147483648, 32770), new i(2147483648, 128), new i(0, 32778), new i(2147483648, 2147483658), new i(2147483648, 2147516545), new i(2147483648, 32896), new i(0, 2147483649), new i(2147483648, 2147516424)],
      Lt = [
        [0, 36, 3, 41, 18],
        [1, 44, 10, 45, 2],
        [62, 6, 43, 15, 61],
        [28, 55, 25, 21, 56],
        [27, 20, 39, 8, 14]
      ];

    function G(u) {
      var t, e = [];
      for (t = 0; t < 5; t += 1) e[t] = [new i(0, 0), new i(0, 0), new i(0, 0), new i(0, 0), new i(0, 0)];
      return e
    }

    function Kt(u) {
      var t, e = [];
      for (t = 0; t < 5; t += 1) e[t] = u[t].slice();
      return e
    }

    function z(u, t) {
      var e, r, o, n, s, a, h, w, p, c = [],
        l = [];
      if (u !== null)
        for (r = 0; r < u.length; r += 2) t[(r >>> 1) % 5][(r >>> 1) / 5 | 0] = B(t[(r >>> 1) % 5][(r >>> 1) / 5 | 0], new i(u[r + 1], u[r]));
      for (e = 0; e < 24; e += 1) {
        for (n = G(), r = 0; r < 5; r += 1) c[r] = (s = t[r][0], a = t[r][1], h = t[r][2], w = t[r][3], p = t[r][4], new i(s.N ^ a.N ^ h.N ^ w.N ^ p.N, s.I ^ a.I ^ h.I ^ w.I ^ p.I));
        for (r = 0; r < 5; r += 1) l[r] = B(c[(r + 4) % 5], ut(c[(r + 1) % 5], 1));
        for (r = 0; r < 5; r += 1)
          for (o = 0; o < 5; o += 1) t[r][o] = B(t[r][o], l[r]);
        for (r = 0; r < 5; r += 1)
          for (o = 0; o < 5; o += 1) n[o][(2 * r + 3 * o) % 5] = ut(t[r][o], Lt[r][o]);
        for (r = 0; r < 5; r += 1)
          for (o = 0; o < 5; o += 1) t[r][o] = B(n[r][o], new i(~n[(r + 1) % 5][o].N & n[(r + 2) % 5][o].N, ~n[(r + 1) % 5][o].I & n[(r + 2) % 5][o].I));
        t[0][0] = B(t[0][0], Rt[e])
      }
      return t
    }

    function at(u) {
      var t, e, r = 0,
        o = [0, 0],
        n = [4294967295 & u, u / 4294967296 & 2097151];
      for (t = 6; t >= 0; t--)(e = n[t >> 2] >>> 8 * t & 255) === 0 && r === 0 || (o[r + 1 >> 2] |= e << 8 * (r + 1), r += 1);
      return r = r !== 0 ? r : 1, o[0] |= r, {
        value: r + 1 > 4 ? o : [o[0]],
        binLen: 8 + 8 * r
      }
    }

    function V(u) {
      return O(at(u.binLen), u)
    }

    function ht(u, t) {
      var e, r = at(t),
        o = t >>> 2,
        n = (o - (r = O(r, u)).value.length % o) % o;
      for (e = 0; e < n; e++) r.value.push(0);
      return r.value
    }
    var Ft = function(u) {
      function t(e, r, o) {
        var n = this,
          s = 6,
          a = 0,
          h = o || {};
        if ((n = u.call(this, e, r, o) || this).numRounds !== 1) {
          if (h.kmacKey || h.hmacKey) throw new Error("Cannot set numRounds with MAC");
          if (n.o === "CSHAKE128" || n.o === "CSHAKE256") throw new Error("Cannot set numRounds for CSHAKE variants")
        }
        switch (n.C = 1, n.p = K(n.t, n.i, n.C), n.R = z, n.B = Kt, n.L = G, n.m = G(), n.T = !1, e) {
          case "SHA3-224":
            n.S = a = 1152, n.U = 224, n.g = !0, n.F = n.Y;
            break;
          case "SHA3-256":
            n.S = a = 1088, n.U = 256, n.g = !0, n.F = n.Y;
            break;
          case "SHA3-384":
            n.S = a = 832, n.U = 384, n.g = !0, n.F = n.Y;
            break;
          case "SHA3-512":
            n.S = a = 576, n.U = 512, n.g = !0, n.F = n.Y;
            break;
          case "SHAKE128":
            s = 31, n.S = a = 1344, n.U = -1, n.T = !0, n.g = !1, n.F = null;
            break;
          case "SHAKE256":
            s = 31, n.S = a = 1088, n.U = -1, n.T = !0, n.g = !1, n.F = null;
            break;
          case "KMAC128":
            s = 4, n.S = a = 1344, n.M(o), n.U = -1, n.T = !0, n.g = !1, n.F = n.X;
            break;
          case "KMAC256":
            s = 4, n.S = a = 1088, n.M(o), n.U = -1, n.T = !0, n.g = !1, n.F = n.X;
            break;
          case "CSHAKE128":
            n.S = a = 1344, s = n.O(o), n.U = -1, n.T = !0, n.g = !1, n.F = null;
            break;
          case "CSHAKE256":
            n.S = a = 1088, s = n.O(o), n.U = -1, n.T = !0, n.g = !1, n.F = null;
            break;
          default:
            throw new Error(T)
        }
        return n.K = function(w, p, c, l, A) {
          return function(f, I, N, m, g, R, E) {
            var y, Z, P = 0,
              Y = [],
              x = g >>> 5,
              Tt = I >>> 5;
            for (y = 0; y < Tt && I >= g; y += x) m = z(f.slice(y, y + x), m), I -= g;
            for (f = f.slice(y), I %= g; f.length < x;) f.push(0);
            for (f[(y = I >>> 3) >> 2] ^= R << y % 4 * 8, f[x - 1] ^= 2147483648, m = z(f, m); 32 * Y.length < E && (Z = m[P % 5][P / 5 | 0], Y.push(Z.I), !(32 * Y.length >= E));) Y.push(Z.N), 64 * (P += 1) % g == 0 && (z(null, m), P = 0);
            return Y
          }(w, p, 0, l, a, s, A)
        }, h.hmacKey && n.k(L("hmacKey", h.hmacKey, n.C)), n
      }
      return X(t, u), t.prototype.O = function(e, r) {
        var o = function(h) {
          var w = h || {};
          return {
            funcName: L("funcName", w.funcName, 1, {
              value: [],
              binLen: 0
            }),
            customization: L("Customization", w.customization, 1, {
              value: [],
              binLen: 0
            })
          }
        }(e || {});
        r && (o.funcName = r);
        var n = O(V(o.funcName), V(o.customization));
        if (o.customization.binLen !== 0 || o.funcName.binLen !== 0) {
          for (var s = ht(n, this.S >>> 3), a = 0; a < s.length; a += this.S >>> 5) this.m = this.R(s.slice(a, a + (this.S >>> 5)), this.m), this.v += this.S;
          return 4
        }
        return 31
      }, t.prototype.M = function(e) {
        var r = function(s) {
          var a = s || {};
          return {
            kmacKey: L("kmacKey", a.kmacKey, 1),
            funcName: {
              value: [1128353099],
              binLen: 32
            },
            customization: L("Customization", a.customization, 1, {
              value: [],
              binLen: 0
            })
          }
        }(e || {});
        this.O(e, r.funcName);
        for (var o = ht(V(r.kmacKey), this.S >>> 3), n = 0; n < o.length; n += this.S >>> 5) this.m = this.R(o.slice(n, n + (this.S >>> 5)), this.m), this.v += this.S;
        this.A = !0
      }, t.prototype.X = function(e) {
        var r = O({
          value: this.u.slice(),
          binLen: this.s
        }, function(o) {
          var n, s, a = 0,
            h = [0, 0],
            w = [4294967295 & o, o / 4294967296 & 2097151];
          for (n = 6; n >= 0; n--)(s = w[n >> 2] >>> 8 * n & 255) == 0 && a === 0 || (h[a >> 2] |= s << 8 * a, a += 1);
          return h[(a = a !== 0 ? a : 1) >> 2] |= a << 8 * a, {
            value: a + 1 > 4 ? h : [h[0]],
            binLen: 8 + 8 * a
          }
        }(e.outputLen));
        return this.K(r.value, r.binLen, this.v, this.B(this.m), e.outputLen)
      }, t
    }(j);
    return function() {
      function u(t, e, r) {
        if (t == "SHA-1") this.j = new It(t, e, r);
        else if (t == "SHA-224" || t == "SHA-256") this.j = new mt(t, e, r);
        else if (t == "SHA-384" || t == "SHA-512") this.j = new Ct(t, e, r);
        else {
          if (t != "SHA3-224" && t != "SHA3-256" && t != "SHA3-384" && t != "SHA3-512" && t != "SHAKE128" && t != "SHAKE256" && t != "CSHAKE128" && t != "CSHAKE256" && t != "KMAC128" && t != "KMAC256") throw new Error(T);
          this.j = new Ft(t, e, r)
        }
      }
      return u.prototype.update = function(t) {
        this.j.update(t)
      }, u.prototype.getHash = function(t, e) {
        return this.j.getHash(t, e)
      }, u.prototype.setHMACKey = function(t, e, r) {
        this.j.setHMACKey(t, e, r)
      }, u.prototype.getHMAC = function(t, e) {
        return this.j.getHMAC(t, e)
      }, u
    }()
  })
})(ft);
var Mt = ft.exports;
export {
  Mt as s
};