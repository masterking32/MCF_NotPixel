import {
  g as z
} from "./vite-plugin-node-polyfills-BVIVvkCX.js";
import {
  a as g,
  _ as C,
  b as at
} from "./@babel-OEIDM1DX.js";
import {
  R as m
} from "./react-DjWS3H3h.js";
import {
  P as O
} from "./prop-types-DK12qZJk.js";
import {
  c as ct,
  a as G,
  b as ut
} from "./history-COziRoqA.js";
import {
  i as j
} from "./tiny-invariant-BaFNuDhB.js";
import {
  p as pt
} from "./path-to-regexp-Bpkj8jjG.js";
import "./hoist-non-react-statics-DQogQWOa.js";
var c = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var d = typeof Symbol == "function" && Symbol.for,
  H = d ? Symbol.for("react.element") : 60103,
  I = d ? Symbol.for("react.portal") : 60106,
  S = d ? Symbol.for("react.fragment") : 60107,
  $ = d ? Symbol.for("react.strict_mode") : 60108,
  M = d ? Symbol.for("react.profiler") : 60114,
  P = d ? Symbol.for("react.provider") : 60109,
  E = d ? Symbol.for("react.context") : 60110,
  N = d ? Symbol.for("react.async_mode") : 60111,
  L = d ? Symbol.for("react.concurrent_mode") : 60111,
  U = d ? Symbol.for("react.forward_ref") : 60112,
  w = d ? Symbol.for("react.suspense") : 60113,
  lt = d ? Symbol.for("react.suspense_list") : 60120,
  A = d ? Symbol.for("react.memo") : 60115,
  R = d ? Symbol.for("react.lazy") : 60116,
  ft = d ? Symbol.for("react.block") : 60121,
  ht = d ? Symbol.for("react.fundamental") : 60117,
  mt = d ? Symbol.for("react.responder") : 60118,
  dt = d ? Symbol.for("react.scope") : 60119;

function y(t) {
  if (typeof t == "object" && t !== null) {
    var e = t.$$typeof;
    switch (e) {
      case H:
        switch (t = t.type, t) {
          case N:
          case L:
          case S:
          case M:
          case $:
          case w:
            return t;
          default:
            switch (t = t && t.$$typeof, t) {
              case E:
              case U:
              case R:
              case A:
              case P:
                return t;
              default:
                return e
            }
        }
      case I:
        return e
    }
  }
}

function Z(t) {
  return y(t) === L
}
c.AsyncMode = N;
c.ConcurrentMode = L;
c.ContextConsumer = E;
c.ContextProvider = P;
c.Element = H;
c.ForwardRef = U;
c.Fragment = S;
c.Lazy = R;
c.Memo = A;
c.Portal = I;
c.Profiler = M;
c.StrictMode = $;
c.Suspense = w;
c.isAsyncMode = function(t) {
  return Z(t) || y(t) === N
};
c.isConcurrentMode = Z;
c.isContextConsumer = function(t) {
  return y(t) === E
};
c.isContextProvider = function(t) {
  return y(t) === P
};
c.isElement = function(t) {
  return typeof t == "object" && t !== null && t.$$typeof === H
};
c.isForwardRef = function(t) {
  return y(t) === U
};
c.isFragment = function(t) {
  return y(t) === S
};
c.isLazy = function(t) {
  return y(t) === R
};
c.isMemo = function(t) {
  return y(t) === A
};
c.isPortal = function(t) {
  return y(t) === I
};
c.isProfiler = function(t) {
  return y(t) === M
};
c.isStrictMode = function(t) {
  return y(t) === $
};
c.isSuspense = function(t) {
  return y(t) === w
};
c.isValidElementType = function(t) {
  return typeof t == "string" || typeof t == "function" || t === S || t === L || t === M || t === $ || t === w || t === lt || typeof t == "object" && t !== null && (t.$$typeof === R || t.$$typeof === A || t.$$typeof === P || t.$$typeof === E || t.$$typeof === U || t.$$typeof === ht || t.$$typeof === mt || t.$$typeof === dt || t.$$typeof === ft)
};
c.typeOf = y;
var B = 1073741823,
  K = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof z < "u" ? z : {};

function vt() {
  var t = "__global_unique_id__";
  return K[t] = (K[t] || 0) + 1
}

function yt(t, e) {
  return t === e ? t !== 0 || 1 / t === 1 / e : t !== t && e !== e
}

function bt(t) {
  var e = [];
  return {
    on: function(r) {
      e.push(r)
    },
    off: function(r) {
      e = e.filter(function(n) {
        return n !== r
      })
    },
    get: function() {
      return t
    },
    set: function(r, n) {
      t = r, e.forEach(function(s) {
        return s(t, n)
      })
    }
  }
}

function gt(t) {
  return Array.isArray(t) ? t[0] : t
}

function xt(t, e) {
  var i, r, n = "__create-react-context-" + vt() + "__",
    s = function(f) {
      g(l, f);

      function l() {
        for (var o, p = arguments.length, h = new Array(p), v = 0; v < p; v++) h[v] = arguments[v];
        return o = f.call.apply(f, [this].concat(h)) || this, o.emitter = bt(o.props.value), o
      }
      var u = l.prototype;
      return u.getChildContext = function() {
        var p;
        return p = {}, p[n] = this.emitter, p
      }, u.componentWillReceiveProps = function(p) {
        if (this.props.value !== p.value) {
          var h = this.props.value,
            v = p.value,
            b;
          yt(h, v) ? b = 0 : (b = typeof e == "function" ? e(h, v) : B, b |= 0, b !== 0 && this.emitter.set(p.value, b))
        }
      }, u.render = function() {
        return this.props.children
      }, l
    }(m.Component);
  s.childContextTypes = (i = {}, i[n] = O.object.isRequired, i);
  var a = function(f) {
    g(l, f);

    function l() {
      for (var o, p = arguments.length, h = new Array(p), v = 0; v < p; v++) h[v] = arguments[v];
      return o = f.call.apply(f, [this].concat(h)) || this, o.observedBits = void 0, o.state = {
        value: o.getValue()
      }, o.onUpdate = function(b, T) {
        var x = o.observedBits | 0;
        x & T && o.setState({
          value: o.getValue()
        })
      }, o
    }
    var u = l.prototype;
    return u.componentWillReceiveProps = function(p) {
      var h = p.observedBits;
      this.observedBits = h ?? B
    }, u.componentDidMount = function() {
      this.context[n] && this.context[n].on(this.onUpdate);
      var p = this.props.observedBits;
      this.observedBits = p ?? B
    }, u.componentWillUnmount = function() {
      this.context[n] && this.context[n].off(this.onUpdate)
    }, u.getValue = function() {
      return this.context[n] ? this.context[n].get() : t
    }, u.render = function() {
      return gt(this.props.children)(this.state.value)
    }, l
  }(m.Component);
  return a.contextTypes = (r = {}, r[n] = O.object, r), {
    Provider: s,
    Consumer: a
  }
}
var _t = m.createContext || xt,
  k = function(e) {
    var i = _t();
    return i.displayName = e, i
  },
  tt = k("Router-History"),
  _ = k("Router"),
  et = function(t) {
    g(e, t), e.computeRootMatch = function(n) {
      return {
        path: "/",
        url: "/",
        params: {},
        isExact: n === "/"
      }
    };

    function e(r) {
      var n;
      return n = t.call(this, r) || this, n.state = {
        location: r.history.location
      }, n._isMounted = !1, n._pendingLocation = null, r.staticContext || (n.unlisten = r.history.listen(function(s) {
        n._pendingLocation = s
      })), n
    }
    var i = e.prototype;
    return i.componentDidMount = function() {
      var n = this;
      this._isMounted = !0, this.unlisten && this.unlisten(), this.props.staticContext || (this.unlisten = this.props.history.listen(function(s) {
        n._isMounted && n.setState({
          location: s
        })
      })), this._pendingLocation && this.setState({
        location: this._pendingLocation
      })
    }, i.componentWillUnmount = function() {
      this.unlisten && (this.unlisten(), this._isMounted = !1, this._pendingLocation = null)
    }, i.render = function() {
      return m.createElement(_.Provider, {
        value: {
          history: this.props.history,
          location: this.state.location,
          match: e.computeRootMatch(this.state.location.pathname),
          staticContext: this.props.staticContext
        }
      }, m.createElement(tt.Provider, {
        children: this.props.children || null,
        value: this.props.history
      }))
    }, e
  }(m.Component);
m.Component;
m.Component;
var X = {},
  Ct = 1e4,
  J = 0;

function St(t, e) {
  var i = "" + e.end + e.strict + e.sensitive,
    r = X[i] || (X[i] = {});
  if (r[t]) return r[t];
  var n = [],
    s = pt(t, n, e),
    a = {
      regexp: s,
      keys: n
    };
  return J < Ct && (r[t] = a, J++), a
}

function nt(t, e) {
  e === void 0 && (e = {}), (typeof e == "string" || Array.isArray(e)) && (e = {
    path: e
  });
  var i = e,
    r = i.path,
    n = i.exact,
    s = n === void 0 ? !1 : n,
    a = i.strict,
    f = a === void 0 ? !1 : a,
    l = i.sensitive,
    u = l === void 0 ? !1 : l,
    o = [].concat(r);
  return o.reduce(function(p, h) {
    if (!h && h !== "") return null;
    if (p) return p;
    var v = St(h, {
        end: s,
        strict: f,
        sensitive: u
      }),
      b = v.regexp,
      T = v.keys,
      x = b.exec(t);
    if (!x) return null;
    var W = x[0],
      ot = x.slice(1),
      V = t === W;
    return s && !V ? null : {
      path: h,
      url: h === "/" && W === "" ? "/" : W,
      isExact: V,
      params: T.reduce(function(q, it, st) {
        return q[it.name] = ot[st], q
      }, {})
    }
  }, null)
}

function $t(t) {
  return m.Children.count(t) === 0
}
m.Component;

function F(t) {
  return t.charAt(0) === "/" ? t : "/" + t
}

function Mt(t, e) {
  return t ? C({}, e, {
    pathname: F(t) + e.pathname
  }) : e
}

function Pt(t, e) {
  if (!t) return e;
  var i = F(t);
  return e.pathname.indexOf(i) !== 0 ? e : C({}, e, {
    pathname: e.pathname.substr(i.length)
  })
}

function Q(t) {
  return typeof t == "string" ? t : ut(t)
}

function D(t) {
  return function() {
    j()
  }
}

function Y() {}
m.Component;
m.Component;
var rt = m.useContext;

function Bt() {
  return rt(tt)
}

function Dt() {
  return rt(_).location
}
export {
  et as R, Bt as a, _ as c, nt as m, Dt as u
};