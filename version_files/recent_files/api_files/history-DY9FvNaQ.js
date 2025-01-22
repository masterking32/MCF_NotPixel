import {
  _ as J
} from "./@babel-OEIDM1DX.js";
import {
  r as dn
} from "./resolve-pathname-D6XOvX2q.js";
import {
  i as on
} from "./tiny-invariant-BaFNuDhB.js";

function z(n) {
  return n.charAt(0) === "/" ? n : "/" + n
}

function Z(n) {
  return n.charAt(0) === "/" ? n.substr(1) : n
}

function ln(n, e) {
  return n.toLowerCase().indexOf(e.toLowerCase()) === 0 && "/?#".indexOf(n.charAt(e.length)) !== -1
}

function sn(n, e) {
  return ln(n, e) ? n.substr(e.length) : n
}

function fn(n) {
  return n.charAt(n.length - 1) === "/" ? n.slice(0, -1) : n
}

function vn(n) {
  var e = n || "/",
    c = "",
    f = "",
    a = e.indexOf("#");
  a !== -1 && (f = e.substr(a), e = e.substr(0, a));
  var p = e.indexOf("?");
  return p !== -1 && (c = e.substr(p), e = e.substr(0, p)), {
    pathname: e,
    search: c === "?" ? "" : c,
    hash: f === "#" ? "" : f
  }
}

function M(n) {
  var e = n.pathname,
    c = n.search,
    f = n.hash,
    a = e || "/";
  return c && c !== "?" && (a += c.charAt(0) === "?" ? c : "?" + c), f && f !== "#" && (a += f.charAt(0) === "#" ? f : "#" + f), a
}

function $(n, e, c, f) {
  var a;
  typeof n == "string" ? (a = vn(n), a.state = e) : (a = J({}, n), a.pathname === void 0 && (a.pathname = ""), a.search ? a.search.charAt(0) !== "?" && (a.search = "?" + a.search) : a.search = "", a.hash ? a.hash.charAt(0) !== "#" && (a.hash = "#" + a.hash) : a.hash = "", e !== void 0 && a.state === void 0 && (a.state = e));
  try {
    a.pathname = decodeURI(a.pathname)
  } catch (p) {
    throw p instanceof URIError ? new URIError('Pathname "' + a.pathname + '" could not be decoded. This is likely caused by an invalid percent-encoding.') : p
  }
  return c && (a.key = c), f ? a.pathname ? a.pathname.charAt(0) !== "/" && (a.pathname = dn(a.pathname, f.pathname)) : a.pathname = f.pathname : a.pathname || (a.pathname = "/"), a
}

function X() {
  var n = null;

  function e(m) {
    return n = m,
      function() {
        n === m && (n = null)
      }
  }

  function c(m, l, v, h) {
    if (n != null) {
      var k = typeof n == "function" ? n(m, l) : n;
      typeof k == "string" ? typeof v == "function" ? v(k, h) : h(!0) : h(k !== !1)
    } else h(!0)
  }
  var f = [];

  function a(m) {
    var l = !0;

    function v() {
      l && m.apply(void 0, arguments)
    }
    return f.push(v),
      function() {
        l = !1, f = f.filter(function(h) {
          return h !== v
        })
      }
  }

  function p() {
    for (var m = arguments.length, l = new Array(m), v = 0; v < m; v++) l[v] = arguments[v];
    f.forEach(function(h) {
      return h.apply(void 0, l)
    })
  }
  return {
    setPrompt: e,
    confirmTransitionTo: c,
    appendListener: a,
    notifyListeners: p
  }
}
var cn = !!(typeof window < "u" && window.document && window.document.createElement);

function hn(n, e) {
  e(window.confirm(n))
}

function gn() {
  var n = window.navigator.userAgent;
  return (n.indexOf("Android 2.") !== -1 || n.indexOf("Android 4.0") !== -1) && n.indexOf("Mobile Safari") !== -1 && n.indexOf("Chrome") === -1 && n.indexOf("Windows Phone") === -1 ? !1 : window.history && "pushState" in window.history
}

function pn() {
  return window.navigator.userAgent.indexOf("Trident") === -1
}

function mn() {
  return window.navigator.userAgent.indexOf("Firefox") === -1
}

function wn(n) {
  return n.state === void 0 && navigator.userAgent.indexOf("CriOS") === -1
}
var nn = "popstate",
  en = "hashchange";

function tn() {
  try {
    return window.history.state || {}
  } catch {
    return {}
  }
}

function Tn(n) {
  n === void 0 && (n = {}), cn || on();
  var e = window.history,
    c = gn(),
    f = !pn(),
    a = n,
    p = a.forceRefresh,
    m = p === void 0 ? !1 : p,
    l = a.getUserConfirmation,
    v = l === void 0 ? hn : l,
    h = a.keyLength,
    k = h === void 0 ? 6 : h,
    I = n.basename ? fn(z(n.basename)) : "";

  function x(i) {
    var t = i || {},
      o = t.key,
      r = t.state,
      d = window.location,
      w = d.pathname,
      H = d.search,
      U = d.hash,
      A = w + H + U;
    return I && (A = sn(A, I)), $(A, r, o)
  }

  function C() {
    return Math.random().toString(36).substr(2, k)
  }
  var L = X();

  function S(i) {
    J(E, i), E.length = e.length, L.notifyListeners(E.location, E.action)
  }

  function G(i) {
    wn(i) || K(x(i.state))
  }

  function _() {
    K(x(tn()))
  }
  var B = !1;

  function K(i) {
    if (B) B = !1, S();
    else {
      var t = "POP";
      L.confirmTransitionTo(i, t, v, function(o) {
        o ? S({
          action: t,
          location: i
        }) : N(i)
      })
    }
  }

  function N(i) {
    var t = E.location,
      o = b.indexOf(t.key);
    o === -1 && (o = 0);
    var r = b.indexOf(i.key);
    r === -1 && (r = 0);
    var d = o - r;
    d && (B = !0, P(d))
  }
  var D = x(tn()),
    b = [D.key];

  function s(i) {
    return I + M(i)
  }

  function u(i, t) {
    var o = "PUSH",
      r = $(i, t, C(), E.location);
    L.confirmTransitionTo(r, o, v, function(d) {
      if (d) {
        var w = s(r),
          H = r.key,
          U = r.state;
        if (c)
          if (e.pushState({
              key: H,
              state: U
            }, null, w), m) window.location.href = w;
          else {
            var A = b.indexOf(E.location.key),
              q = b.slice(0, A + 1);
            q.push(r.key), b = q, S({
              action: o,
              location: r
            })
          }
        else window.location.href = w
      }
    })
  }

  function O(i, t) {
    var o = "REPLACE",
      r = $(i, t, C(), E.location);
    L.confirmTransitionTo(r, o, v, function(d) {
      if (d) {
        var w = s(r),
          H = r.key,
          U = r.state;
        if (c)
          if (e.replaceState({
              key: H,
              state: U
            }, null, w), m) window.location.replace(w);
          else {
            var A = b.indexOf(E.location.key);
            A !== -1 && (b[A] = r.key), S({
              action: o,
              location: r
            })
          }
        else window.location.replace(w)
      }
    })
  }

  function P(i) {
    e.go(i)
  }

  function g() {
    P(-1)
  }

  function R() {
    P(1)
  }
  var F = 0;

  function T(i) {
    F += i, F === 1 && i === 1 ? (window.addEventListener(nn, G), f && window.addEventListener(en, _)) : F === 0 && (window.removeEventListener(nn, G), f && window.removeEventListener(en, _))
  }
  var y = !1;

  function W(i) {
    i === void 0 && (i = !1);
    var t = L.setPrompt(i);
    return y || (T(1), y = !0),
      function() {
        return y && (y = !1, T(-1)), t()
      }
  }

  function Q(i) {
    var t = L.appendListener(i);
    return T(1),
      function() {
        T(-1), t()
      }
  }
  var E = {
    length: e.length,
    action: "POP",
    location: D,
    createHref: s,
    push: u,
    replace: O,
    go: P,
    goBack: g,
    goForward: R,
    block: W,
    listen: Q
  };
  return E
}
var an = "hashchange",
  Pn = {
    hashbang: {
      encodePath: function(e) {
        return e.charAt(0) === "!" ? e : "!/" + Z(e)
      },
      decodePath: function(e) {
        return e.charAt(0) === "!" ? e.substr(1) : e
      }
    },
    noslash: {
      encodePath: Z,
      decodePath: z
    },
    slash: {
      encodePath: z,
      decodePath: z
    }
  };

function un(n) {
  var e = n.indexOf("#");
  return e === -1 ? n : n.slice(0, e)
}

function j() {
  var n = window.location.href,
    e = n.indexOf("#");
  return e === -1 ? "" : n.substring(e + 1)
}

function yn(n) {
  window.location.hash = n
}

function V(n) {
  window.location.replace(un(window.location.href) + "#" + n)
}

function Hn(n) {
  n === void 0 && (n = {}), cn || on();
  var e = window.history;
  mn();
  var c = n,
    f = c.getUserConfirmation,
    a = f === void 0 ? hn : f,
    p = c.hashType,
    m = p === void 0 ? "slash" : p,
    l = n.basename ? fn(z(n.basename)) : "",
    v = Pn[m],
    h = v.encodePath,
    k = v.decodePath;

  function I() {
    var t = k(j());
    return l && (t = sn(t, l)), $(t)
  }
  var x = X();

  function C(t) {
    J(i, t), i.length = e.length, x.notifyListeners(i.location, i.action)
  }
  var L = !1,
    S = null;

  function G(t, o) {
    return t.pathname === o.pathname && t.search === o.search && t.hash === o.hash
  }

  function _() {
    var t = j(),
      o = h(t);
    if (t !== o) V(o);
    else {
      var r = I(),
        d = i.location;
      if (!L && G(d, r) || S === M(r)) return;
      S = null, B(r)
    }
  }

  function B(t) {
    if (L) L = !1, C();
    else {
      var o = "POP";
      x.confirmTransitionTo(t, o, a, function(r) {
        r ? C({
          action: o,
          location: t
        }) : K(t)
      })
    }
  }

  function K(t) {
    var o = i.location,
      r = s.lastIndexOf(M(o));
    r === -1 && (r = 0);
    var d = s.lastIndexOf(M(t));
    d === -1 && (d = 0);
    var w = r - d;
    w && (L = !0, g(w))
  }
  var N = j(),
    D = h(N);
  N !== D && V(D);
  var b = I(),
    s = [M(b)];

  function u(t) {
    var o = document.querySelector("base"),
      r = "";
    return o && o.getAttribute("href") && (r = un(window.location.href)), r + "#" + h(l + M(t))
  }

  function O(t, o) {
    var r = "PUSH",
      d = $(t, void 0, void 0, i.location);
    x.confirmTransitionTo(d, r, a, function(w) {
      if (w) {
        var H = M(d),
          U = h(l + H),
          A = j() !== U;
        if (A) {
          S = H, yn(U);
          var q = s.lastIndexOf(M(i.location)),
            Y = s.slice(0, q + 1);
          Y.push(H), s = Y, C({
            action: r,
            location: d
          })
        } else C()
      }
    })
  }

  function P(t, o) {
    var r = "REPLACE",
      d = $(t, void 0, void 0, i.location);
    x.confirmTransitionTo(d, r, a, function(w) {
      if (w) {
        var H = M(d),
          U = h(l + H),
          A = j() !== U;
        A && (S = H, V(U));
        var q = s.indexOf(M(i.location));
        q !== -1 && (s[q] = H), C({
          action: r,
          location: d
        })
      }
    })
  }

  function g(t) {
    e.go(t)
  }

  function R() {
    g(-1)
  }

  function F() {
    g(1)
  }
  var T = 0;

  function y(t) {
    T += t, T === 1 && t === 1 ? window.addEventListener(an, _) : T === 0 && window.removeEventListener(an, _)
  }
  var W = !1;

  function Q(t) {
    t === void 0 && (t = !1);
    var o = x.setPrompt(t);
    return W || (y(1), W = !0),
      function() {
        return W && (W = !1, y(-1)), o()
      }
  }

  function E(t) {
    var o = x.appendListener(t);
    return y(1),
      function() {
        y(-1), o()
      }
  }
  var i = {
    length: e.length,
    action: "POP",
    location: b,
    createHref: u,
    push: O,
    replace: P,
    go: g,
    goBack: R,
    goForward: F,
    block: Q,
    listen: E
  };
  return i
}

function rn(n, e, c) {
  return Math.min(Math.max(n, e), c)
}

function kn(n) {
  n === void 0 && (n = {});
  var e = n,
    c = e.getUserConfirmation,
    f = e.initialEntries,
    a = f === void 0 ? ["/"] : f,
    p = e.initialIndex,
    m = p === void 0 ? 0 : p,
    l = e.keyLength,
    v = l === void 0 ? 6 : l,
    h = X();

  function k(u) {
    J(s, u), s.length = s.entries.length, h.notifyListeners(s.location, s.action)
  }

  function I() {
    return Math.random().toString(36).substr(2, v)
  }
  var x = rn(m, 0, a.length - 1),
    C = a.map(function(u) {
      return typeof u == "string" ? $(u, void 0, I()) : $(u, void 0, u.key || I())
    }),
    L = M;

  function S(u, O) {
    var P = "PUSH",
      g = $(u, O, I(), s.location);
    h.confirmTransitionTo(g, P, c, function(R) {
      if (R) {
        var F = s.index,
          T = F + 1,
          y = s.entries.slice(0);
        y.length > T ? y.splice(T, y.length - T, g) : y.push(g), k({
          action: P,
          location: g,
          index: T,
          entries: y
        })
      }
    })
  }

  function G(u, O) {
    var P = "REPLACE",
      g = $(u, O, I(), s.location);
    h.confirmTransitionTo(g, P, c, function(R) {
      R && (s.entries[s.index] = g, k({
        action: P,
        location: g
      }))
    })
  }

  function _(u) {
    var O = rn(s.index + u, 0, s.entries.length - 1),
      P = "POP",
      g = s.entries[O];
    h.confirmTransitionTo(g, P, c, function(R) {
      R ? k({
        action: P,
        location: g,
        index: O
      }) : k()
    })
  }

  function B() {
    _(-1)
  }

  function K() {
    _(1)
  }

  function N(u) {
    var O = s.index + u;
    return O >= 0 && O < s.entries.length
  }

  function D(u) {
    return u === void 0 && (u = !1), h.setPrompt(u)
  }

  function b(u) {
    return h.appendListener(u)
  }
  var s = {
    length: C.length,
    action: "POP",
    location: C[x],
    index: x,
    entries: C,
    createHref: L,
    push: S,
    replace: G,
    go: _,
    goBack: B,
    goForward: K,
    canGo: N,
    block: D,
    listen: b
  };
  return s
}
export {
  kn as a, M as b, $ as c, Tn as d, Hn as e
};