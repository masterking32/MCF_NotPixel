import {
  R as z,
  c as x,
  m as F
} from "./react-router-skDq-tWz.js";
import {
  a as M,
  b as H,
  _ as g
} from "./@babel-OEIDM1DX.js";
import {
  R as c
} from "./react-DjWS3H3h.js";
import {
  b as $,
  d as G,
  e as I,
  a as J
} from "./history-COziRoqA.js";
import {
  i as W
} from "./tiny-invariant-BaFNuDhB.js";
var rr = function(r) {
  M(t, r);

  function t() {
    for (var a, i = arguments.length, o = new Array(i), n = 0; n < i; n++) o[n] = arguments[n];
    return a = r.call.apply(r, [this].concat(o)) || this, a.history = G(a.props), a
  }
  var e = t.prototype;
  return e.render = function() {
    return c.createElement(z, {
      history: this.history,
      children: this.props.children
    })
  }, t
}(c.Component);
c.Component;
var E = function(t, e) {
    return typeof t == "function" ? t(e) : t
  },
  S = function(t, e) {
    return typeof t == "string" ? J(t, null, null, e) : t
  },
  b = function(t) {
    return t
  },
  v = c.forwardRef;
typeof v > "u" && (v = b);

function O(r) {
  return !!(r.metaKey || r.altKey || r.ctrlKey || r.shiftKey)
}
var Q = v(function(r, t) {
    var e = r.innerRef,
      a = r.navigate,
      i = r.onClick,
      o = H(r, ["innerRef", "navigate", "onClick"]),
      n = o.target,
      l = g({}, o, {
        onClick: function(s) {
          try {
            i && i(s)
          } catch (f) {
            throw s.preventDefault(), f
          }!s.defaultPrevented && s.button === 0 && (!n || n === "_self") && !O(s) && (s.preventDefault(), a())
        }
      });
    return b !== v ? l.ref = t || e : l.ref = e, c.createElement("a", l)
  }),
  U = v(function(r, t) {
    var e = r.component,
      a = e === void 0 ? Q : e,
      i = r.replace,
      o = r.to,
      n = r.innerRef,
      l = H(r, ["component", "replace", "to", "innerRef"]);
    return c.createElement(x.Consumer, null, function(u) {
      u || W();
      var s = u.history,
        f = S(E(o, u.location), u.location),
        C = f ? s.createHref(f) : "",
        p = g({}, l, {
          href: C,
          navigate: function() {
            var m = E(o, u.location),
              d = $(u.location) === $(S(m)),
              L = i || d ? s.replace : s.push;
            L(m)
          }
        });
      return b !== v ? p.ref = t || n : p.innerRef = n, c.createElement(a, p)
    })
  }),
  q = function(t) {
    return t
  },
  w = c.forwardRef;
typeof w > "u" && (w = q);

function V() {
  for (var r = arguments.length, t = new Array(r), e = 0; e < r; e++) t[e] = arguments[e];
  return t.filter(function(a) {
    return a
  }).join(" ")
}
w(function(r, t) {
  var e = r["aria-current"],
    a = e === void 0 ? "page" : e,
    i = r.activeClassName,
    o = i === void 0 ? "active" : i,
    n = r.activeStyle,
    l = r.className,
    u = r.exact,
    s = r.isActive,
    f = r.location,
    C = r.sensitive,
    p = r.strict,
    h = r.style,
    m = r.to,
    d = r.innerRef,
    L = H(r, ["aria-current", "activeClassName", "activeStyle", "className", "exact", "isActive", "location", "sensitive", "strict", "style", "to", "innerRef"]);
  return c.createElement(x.Consumer, null, function(B) {
    B || W();
    var y = f || B.location,
      K = S(E(m, y), y),
      T = K.pathname,
      j = T && T.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"),
      D = j ? F(y.pathname, {
        path: j,
        exact: u,
        sensitive: C,
        strict: p
      }) : null,
      R = !!(s ? s(D, y) : D),
      N = typeof l == "function" ? l(R) : l,
      P = typeof h == "function" ? h(R) : h;
    R && (N = V(N, o), P = g({}, P, n));
    var A = g({
      "aria-current": R && a || null,
      className: N,
      style: P,
      to: K
    }, L);
    return q !== w ? A.ref = t || d : A.innerRef = d, c.createElement(U, A)
  })
});
export {
  rr as B
};