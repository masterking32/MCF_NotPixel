function T(e, n = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function") throw new TypeError(n)
}

function z(e, n = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object") throw new TypeError(n)
}

function N(e, n = "expected all items to be functions, instead received the following types: ") {
  if (!e.every(r => typeof r == "function")) {
    const r = e.map(s => typeof s == "function" ? `function ${s.name||"unnamed"}()` : typeof s).join(", ");
    throw new TypeError(`${n}[${r}]`)
  }
}
var w = e => Array.isArray(e) ? e : [e];

function E(e) {
  const n = Array.isArray(e[0]) ? e[0] : e;
  return N(n, "createSelector expects all input-selectors to be functions, but received the following types: "), n
}

function x(e, n) {
  const r = [],
    {
      length: s
    } = e;
  for (let o = 0; o < s; o++) r.push(e[o].apply(null, n));
  return r
}
var I = class {
    constructor(e) {
      this.value = e
    }
    deref() {
      return this.value
    }
  },
  O = typeof WeakRef < "u" ? WeakRef : I,
  $ = 0,
  b = 1;

function h() {
  return {
    s: $,
    v: void 0,
    o: null,
    p: null
  }
}

function C(e, n = {}) {
  let r = h();
  const {
    resultEqualityCheck: s
  } = n;
  let o, c = 0;

  function i() {
    var m;
    let t = r;
    const {
      length: y
    } = arguments;
    for (let p = 0, v = y; p < v; p++) {
      const f = arguments[p];
      if (typeof f == "function" || typeof f == "object" && f !== null) {
        let l = t.o;
        l === null && (t.o = l = new WeakMap);
        const d = l.get(f);
        d === void 0 ? (t = h(), l.set(f, t)) : t = d
      } else {
        let l = t.p;
        l === null && (t.p = l = new Map);
        const d = l.get(f);
        d === void 0 ? (t = h(), l.set(f, t)) : t = d
      }
    }
    const a = t;
    let u;
    if (t.s === b ? u = t.v : (u = e.apply(null, arguments), c++), a.s = b, s) {
      const p = ((m = o == null ? void 0 : o.deref) == null ? void 0 : m.call(o)) ?? o;
      p != null && s(p, u) && (u = p, c !== 0 && c--), o = typeof u == "object" && u !== null || typeof u == "function" ? new O(u) : u
    }
    return a.v = u, u
  }
  return i.clearCache = () => {
    r = h(), i.resetResultsCount()
  }, i.resultsCount = () => c, i.resetResultsCount = () => {
    c = 0
  }, i
}

function W(e, ...n) {
  const r = typeof e == "function" ? {
      memoize: e,
      memoizeOptions: n
    } : e,
    s = (...o) => {
      let c = 0,
        i = 0,
        t, y = {},
        a = o.pop();
      typeof a == "object" && (y = a, a = o.pop()), T(a, `createSelector expects an output function after the inputs, but received: [${typeof a}]`);
      const u = {
          ...r,
          ...y
        },
        {
          memoize: m,
          memoizeOptions: p = [],
          argsMemoize: v = C,
          argsMemoizeOptions: f = [],
          devModeChecks: l = {}
        } = u,
        d = w(p),
        M = w(f),
        R = E(o),
        g = m(function() {
          return c++, a.apply(null, arguments)
        }, ...d),
        j = v(function() {
          i++;
          const S = x(R, arguments);
          return t = g.apply(null, S), t
        }, ...M);
      return Object.assign(j, {
        resultFunc: a,
        memoizedResultFunc: g,
        dependencies: R,
        dependencyRecomputations: () => i,
        resetDependencyRecomputations: () => {
          i = 0
        },
        lastResult: () => t,
        recomputations: () => c,
        resetRecomputations: () => {
          c = 0
        },
        memoize: m,
        argsMemoize: v
      })
    };
  return Object.assign(s, {
    withTypes: () => s
  }), s
}
var A = W(C),
  D = Object.assign((e, n = A) => {
    z(e, `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`);
    const r = Object.keys(e),
      s = r.map(c => e[c]);
    return n(s, (...c) => c.reduce((i, t, y) => (i[r[y]] = t, i), {}))
  }, {
    withTypes: () => D
  });
export {
  W as c, C as w
};