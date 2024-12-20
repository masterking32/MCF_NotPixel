var b = {
    exports: {}
  },
  r = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var t = typeof Symbol == "function" && Symbol.for,
  S = t ? Symbol.for("react.element") : 60103,
  $ = t ? Symbol.for("react.portal") : 60106,
  n = t ? Symbol.for("react.fragment") : 60107,
  c = t ? Symbol.for("react.strict_mode") : 60108,
  f = t ? Symbol.for("react.profiler") : 60114,
  s = t ? Symbol.for("react.provider") : 60109,
  u = t ? Symbol.for("react.context") : 60110,
  d = t ? Symbol.for("react.async_mode") : 60111,
  y = t ? Symbol.for("react.concurrent_mode") : 60111,
  i = t ? Symbol.for("react.forward_ref") : 60112,
  p = t ? Symbol.for("react.suspense") : 60113,
  _ = t ? Symbol.for("react.suspense_list") : 60120,
  l = t ? Symbol.for("react.memo") : 60115,
  m = t ? Symbol.for("react.lazy") : 60116,
  x = t ? Symbol.for("react.block") : 60121,
  T = t ? Symbol.for("react.fundamental") : 60117,
  P = t ? Symbol.for("react.responder") : 60118,
  w = t ? Symbol.for("react.scope") : 60119;

function o(e) {
  if (typeof e == "object" && e !== null) {
    var a = e.$$typeof;
    switch (a) {
      case S:
        switch (e = e.type, e) {
          case d:
          case y:
          case n:
          case f:
          case c:
          case p:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case u:
              case i:
              case m:
              case l:
              case s:
                return e;
              default:
                return a
            }
        }
      case $:
        return a
    }
  }
}

function v(e) {
  return o(e) === y
}
r.AsyncMode = d;
r.ConcurrentMode = y;
r.ContextConsumer = u;
r.ContextProvider = s;
r.Element = S;
r.ForwardRef = i;
r.Fragment = n;
r.Lazy = m;
r.Memo = l;
r.Portal = $;
r.Profiler = f;
r.StrictMode = c;
r.Suspense = p;
r.isAsyncMode = function(e) {
  return v(e) || o(e) === d
};
r.isConcurrentMode = v;
r.isContextConsumer = function(e) {
  return o(e) === u
};
r.isContextProvider = function(e) {
  return o(e) === s
};
r.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === S
};
r.isForwardRef = function(e) {
  return o(e) === i
};
r.isFragment = function(e) {
  return o(e) === n
};
r.isLazy = function(e) {
  return o(e) === m
};
r.isMemo = function(e) {
  return o(e) === l
};
r.isPortal = function(e) {
  return o(e) === $
};
r.isProfiler = function(e) {
  return o(e) === f
};
r.isStrictMode = function(e) {
  return o(e) === c
};
r.isSuspense = function(e) {
  return o(e) === p
};
r.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === n || e === y || e === f || e === c || e === p || e === _ || typeof e == "object" && e !== null && (e.$$typeof === m || e.$$typeof === l || e.$$typeof === s || e.$$typeof === u || e.$$typeof === i || e.$$typeof === T || e.$$typeof === P || e.$$typeof === w || e.$$typeof === x)
};
r.typeOf = o;
b.exports = r;
var A = b.exports,
  C = A,
  E = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
  },
  F = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
  },
  M = {};
M[C.ForwardRef] = E;
M[C.Memo] = F;