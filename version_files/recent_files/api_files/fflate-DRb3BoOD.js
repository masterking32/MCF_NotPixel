var cr = {},
  Ir = function(r, n, e, a, i) {
    var l = new Worker(cr[n] || (cr[n] = URL.createObjectURL(new Blob([r + ';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'], {
      type: "text/javascript"
    }))));
    return l.onmessage = function(u) {
      var o = u.data,
        c = o.$e$;
      if (c) {
        var w = new Error(c[0]);
        w.code = c[1], w.stack = c[2], i(w, null)
      } else i(null, o)
    }, l.postMessage(e, a), l
  },
  y = Uint8Array,
  m = Uint16Array,
  hr = Int32Array,
  X = new y([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
  Y = new y([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
  sr = new y([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
  zr = function(r, n) {
    for (var e = new m(31), a = 0; a < 31; ++a) e[a] = n += 1 << r[a - 1];
    for (var i = new hr(e[30]), a = 1; a < 30; ++a)
      for (var l = e[a]; l < e[a + 1]; ++l) i[l] = l - e[a] << 5 | a;
    return {
      b: e,
      r: i
    }
  },
  xr = zr(X, 2),
  Z = xr.b,
  Rr = xr.r;
Z[28] = 258, Rr[258] = 28;
var Wr = zr(Y, 0),
  kr = Wr.b,
  R = new m(32768);
for (var v = 0; v < 32768; ++v) {
  var p = (v & 43690) >> 1 | (v & 21845) << 1;
  p = (p & 52428) >> 2 | (p & 13107) << 2, p = (p & 61680) >> 4 | (p & 3855) << 4, R[v] = ((p & 65280) >> 8 | (p & 255) << 8) >> 1
}
var M = function(r, n, e) {
    for (var a = r.length, i = 0, l = new m(n); i < a; ++i) r[i] && ++l[r[i] - 1];
    var u = new m(n);
    for (i = 1; i < n; ++i) u[i] = u[i - 1] + l[i - 1] << 1;
    var o;
    if (e) {
      o = new m(1 << n);
      var c = 15 - n;
      for (i = 0; i < a; ++i)
        if (r[i])
          for (var w = i << 4 | r[i], z = n - r[i], f = u[r[i] - 1]++ << z, t = f | (1 << z) - 1; f <= t; ++f) o[R[f] >> c] = w
    } else
      for (o = new m(a), i = 0; i < a; ++i) r[i] && (o[i] = R[u[r[i] - 1]++] >> 15 - r[i]);
    return o
  },
  C = new y(288);
for (var v = 0; v < 144; ++v) C[v] = 8;
for (var v = 144; v < 256; ++v) C[v] = 9;
for (var v = 256; v < 280; ++v) C[v] = 7;
for (var v = 280; v < 288; ++v) C[v] = 8;
var pr = new y(32);
for (var v = 0; v < 32; ++v) pr[v] = 5;
var br = M(C, 9, 1),
  mr = M(pr, 5, 1),
  D = function(r) {
    for (var n = r[0], e = 1; e < r.length; ++e) r[e] > n && (n = r[e]);
    return n
  },
  s = function(r, n, e) {
    var a = n / 8 | 0;
    return (r[a] | r[a + 1] << 8) >> (n & 7) & e
  },
  I = function(r, n) {
    var e = n / 8 | 0;
    return (r[e] | r[e + 1] << 8 | r[e + 2] << 16) >> (n & 7)
  },
  Fr = function(r) {
    return (r + 7) / 8 | 0
  },
  Ar = function(r, n, e) {
    return (n == null || n < 0) && (n = 0), (e == null || e > r.length) && (e = r.length), new y(r.subarray(n, e))
  },
  Mr = ["unexpected EOF", "invalid block type", "invalid length/literal", "invalid distance", "stream finished", "no stream handler", , "no callback", "invalid UTF-8 data", "extra field too long", "date not in range 1980-2099", "filename too long", "stream finishing", "invalid zip data"],
  g = function(r, n, e) {
    var a = new Error(n || Mr[r]);
    if (a.code = r, Error.captureStackTrace && Error.captureStackTrace(a, g), !e) throw a;
    return a
  },
  W = function(r, n, e, a) {
    var i = r.length,
      l = a ? a.length : 0;
    if (!i || n.f && !n.l) return e || new y(0);
    var u = !e,
      o = u || n.i != 2,
      c = n.i;
    u && (e = new y(i * 3));
    var w = function(tr) {
        var ur = e.length;
        if (tr > ur) {
          var lr = new y(Math.max(ur * 2, tr));
          lr.set(e), e = lr
        }
      },
      z = n.f || 0,
      f = n.p || 0,
      t = n.b || 0,
      b = n.l,
      $ = n.d,
      O = n.m,
      E = n.n,
      G = i * 8;
    do {
      if (!b) {
        z = s(r, f, 1);
        var H = s(r, f + 1, 3);
        if (f += 3, H)
          if (H == 1) b = br, $ = mr, O = 9, E = 5;
          else if (H == 2) {
          var L = s(r, f, 31) + 257,
            rr = s(r, f + 10, 15) + 4,
            nr = L + s(r, f + 5, 31) + 1;
          f += 14;
          for (var T = new y(nr), N = new y(19), h = 0; h < rr; ++h) N[sr[h]] = s(r, f + h * 3, 7);
          f += rr * 3;
          for (var er = D(N), Cr = (1 << er) - 1, $r = M(N, er, 1), h = 0; h < nr;) {
            var ar = $r[s(r, f, Cr)];
            f += ar & 15;
            var x = ar >> 4;
            if (x < 16) T[h++] = x;
            else {
              var F = 0,
                S = 0;
              for (x == 16 ? (S = 3 + s(r, f, 3), f += 2, F = T[h - 1]) : x == 17 ? (S = 3 + s(r, f, 7), f += 3) : x == 18 && (S = 11 + s(r, f, 127), f += 7); S--;) T[h++] = F
            }
          }
          var ir = T.subarray(0, L),
            k = T.subarray(L);
          O = D(ir), E = D(k), b = M(ir, O, 1), $ = M(k, E, 1)
        } else g(1);
        else {
          var x = Fr(f) + 4,
            J = r[x - 4] | r[x - 3] << 8,
            K = x + J;
          if (K > i) {
            c && g(0);
            break
          }
          o && w(t + J), e.set(r.subarray(x, K), t), n.b = t += J, n.p = f = K * 8, n.f = z;
          continue
        }
        if (f > G) {
          c && g(0);
          break
        }
      }
      o && w(t + 131072);
      for (var Sr = (1 << O) - 1, Br = (1 << E) - 1, P = f;; P = f) {
        var F = b[I(r, f) & Sr],
          A = F >> 4;
        if (f += F & 15, f > G) {
          c && g(0);
          break
        }
        if (F || g(2), A < 256) e[t++] = A;
        else if (A == 256) {
          P = f, b = null;
          break
        } else {
          var fr = A - 254;
          if (A > 264) {
            var h = A - 257,
              U = X[h];
            fr = s(r, f, (1 << U) - 1) + Z[h], f += U
          }
          var Q = $[I(r, f) & Br],
            V = Q >> 4;
          Q || g(3), f += Q & 15;
          var k = kr[V];
          if (V > 3) {
            var U = Y[V];
            k += I(r, f) & (1 << U) - 1, f += U
          }
          if (f > G) {
            c && g(0);
            break
          }
          o && w(t + 131072);
          var or = t + fr;
          if (t < k) {
            var vr = l - k,
              Dr = Math.min(k, or);
            for (vr + t < 0 && g(3); t < Dr; ++t) e[t] = a[vr + t]
          }
          for (; t < or; ++t) e[t] = e[t - k]
        }
      }
      n.l = b, n.p = P, n.b = t, n.f = z, b && (z = 1, n.m = O, n.d = $, n.n = E)
    } while (!z);
    return t != e.length && u ? Ar(e, 0, t) : e.subarray(0, t)
  },
  qr = new y(0),
  Gr = function(r, n) {
    var e = {};
    for (var a in r) e[a] = r[a];
    for (var a in n) e[a] = n[a];
    return e
  },
  gr = function(r, n, e) {
    for (var a = r(), i = r.toString(), l = i.slice(i.indexOf("[") + 1, i.lastIndexOf("]")).replace(/\s+/g, "").split(","), u = 0; u < a.length; ++u) {
      var o = a[u],
        c = l[u];
      if (typeof o == "function") {
        n += ";" + c + "=";
        var w = o.toString();
        if (o.prototype)
          if (w.indexOf("[native code]") != -1) {
            var z = w.indexOf(" ", 8) + 1;
            n += w.slice(z, w.indexOf("(", z))
          } else {
            n += w;
            for (var f in o.prototype) n += ";" + c + ".prototype." + f + "=" + o.prototype[f].toString()
          }
        else n += w
      } else e[c] = o
    }
    return n
  },
  B = [],
  Hr = function(r) {
    var n = [];
    for (var e in r) r[e].buffer && n.push((r[e] = new r[e].constructor(r[e])).buffer);
    return n
  },
  Jr = function(r, n, e, a) {
    if (!B[e]) {
      for (var i = "", l = {}, u = r.length - 1, o = 0; o < u; ++o) i = gr(r[o], i, l);
      B[e] = {
        c: gr(r[u], i, l),
        e: l
      }
    }
    var c = Gr({}, B[e].e);
    return Ir(B[e].c + ";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage=" + n.toString() + "}", e, c, Hr(c), a)
  },
  j = function() {
    return [y, m, hr, X, Y, sr, Z, kr, br, mr, R, Mr, M, D, s, I, Fr, Ar, g, W, Ur, q, _]
  },
  Kr = function() {
    return [Or, Er]
  },
  Lr = function() {
    return [Tr]
  },
  q = function(r) {
    return postMessage(r, [r.buffer])
  },
  _ = function(r) {
    return r && {
      out: r.size && new y(r.size),
      dictionary: r.dictionary
    }
  },
  d = function(r, n, e, a, i, l) {
    var u = Jr(e, a, i, function(o, c) {
      u.terminate(), l(o, c)
    });
    return u.postMessage([r, n], n.consume ? [r.buffer] : []),
      function() {
        u.terminate()
      }
  },
  Or = function(r) {
    (r[0] != 31 || r[1] != 139 || r[2] != 8) && g(6, "invalid gzip data");
    var n = r[3],
      e = 10;
    n & 4 && (e += (r[10] | r[11] << 8) + 2);
    for (var a = (n >> 3 & 1) + (n >> 4 & 1); a > 0; a -= !r[e++]);
    return e + (n & 2)
  },
  Er = function(r) {
    var n = r.length;
    return (r[n - 4] | r[n - 3] << 8 | r[n - 2] << 16 | r[n - 1] << 24) >>> 0
  },
  Tr = function(r, n) {
    return ((r[0] & 15) != 8 || r[0] >> 4 > 7 || (r[0] << 8 | r[1]) % 31) && g(6, "invalid zlib data"), (r[1] >> 5 & 1) == +!n && g(6, "invalid zlib data: " + (r[1] & 32 ? "need" : "unexpected") + " dictionary"), (r[1] >> 3 & 4) + 2
  };

function Nr(r, n, e) {
  return e || (e = n, n = {}), typeof e != "function" && g(7), d(r, n, [j], function(a) {
    return q(Ur(a.data[0], _(a.data[1])))
  }, 1, e)
}

function Ur(r, n) {
  return W(r, {
    i: 2
  }, n && n.out, n && n.dictionary)
}

function Pr(r, n, e) {
  return e || (e = n, n = {}), typeof e != "function" && g(7), d(r, n, [j, Kr, function() {
    return [wr]
  }], function(a) {
    return q(wr(a.data[0], a.data[1]))
  }, 3, e)
}

function wr(r, n) {
  var e = Or(r);
  return e + 8 > r.length && g(6, "invalid gzip data"), W(r.subarray(e, -8), {
    i: 2
  }, n && n.out || new y(Er(r)), n && n.dictionary)
}

function Qr(r, n, e) {
  return e || (e = n, n = {}), typeof e != "function" && g(7), d(r, n, [j, Lr, function() {
    return [yr]
  }], function(a) {
    return q(yr(a.data[0], _(a.data[1])))
  }, 5, e)
}

function yr(r, n) {
  return W(r.subarray(Tr(r, n && n.dictionary), -4), {
    i: 2
  }, n && n.out, n && n.dictionary)
}

function Yr(r, n, e) {
  return e || (e = n, n = {}), typeof e != "function" && g(7), r[0] == 31 && r[1] == 139 && r[2] == 8 ? Pr(r, n, e) : (r[0] & 15) != 8 || r[0] >> 4 > 7 || (r[0] << 8 | r[1]) % 31 ? Nr(r, n, e) : Qr(r, n, e)
}
var Vr = typeof TextDecoder < "u" && new TextDecoder,
  Xr = 0;
try {
  Vr.decode(qr, {
    stream: !0
  }), Xr = 1
} catch {}
export {
  Yr as d
};