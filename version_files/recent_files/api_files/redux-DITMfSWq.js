function n(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `
}
var P = typeof Symbol == "function" && Symbol.observable || "@@observable",
  N = P,
  O = () => Math.random().toString(36).substring(7).split("").join("."),
  S = {
    INIT: `@@redux/INIT${O()}`,
    REPLACE: `@@redux/REPLACE${O()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${O()}`
  },
  g = S;

function m(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null;) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null
}

function R(e, t, r) {
  if (typeof e != "function") throw new Error(n(2));
  if (typeof t == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function") throw new Error(n(0));
  if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
    if (typeof r != "function") throw new Error(n(1));
    return r(R)(e, t)
  }
  let u = e,
    c = t,
    o = new Map,
    i = o,
    y = 0,
    f = !1;

  function p() {
    i === o && (i = new Map, o.forEach((s, l) => {
      i.set(l, s)
    }))
  }

  function w() {
    if (f) throw new Error(n(3));
    return c
  }

  function b(s) {
    if (typeof s != "function") throw new Error(n(4));
    if (f) throw new Error(n(5));
    let l = !0;
    p();
    const a = y++;
    return i.set(a, s),
      function() {
        if (l) {
          if (f) throw new Error(n(6));
          l = !1, p(), i.delete(a), o = null
        }
      }
  }

  function h(s) {
    if (!m(s)) throw new Error(n(7));
    if (typeof s.type > "u") throw new Error(n(8));
    if (typeof s.type != "string") throw new Error(n(17));
    if (f) throw new Error(n(9));
    try {
      f = !0, c = u(c, s)
    } finally {
      f = !1
    }
    return (o = i).forEach(a => {
      a()
    }), s
  }

  function E(s) {
    if (typeof s != "function") throw new Error(n(10));
    u = s, h({
      type: g.REPLACE
    })
  }

  function d() {
    const s = b;
    return {
      subscribe(l) {
        if (typeof l != "object" || l === null) throw new Error(n(11));

        function a() {
          const v = l;
          v.next && v.next(w())
        }
        return a(), {
          unsubscribe: s(a)
        }
      },
      [N]() {
        return this
      }
    }
  }
  return h({
    type: g.INIT
  }), {
    dispatch: h,
    subscribe: b,
    getState: w,
    replaceReducer: E,
    [N]: d
  }
}

function x(e) {
  Object.keys(e).forEach(t => {
    const r = e[t];
    if (typeof r(void 0, {
        type: g.INIT
      }) > "u") throw new Error(n(12));
    if (typeof r(void 0, {
        type: g.PROBE_UNKNOWN_ACTION()
      }) > "u") throw new Error(n(13))
  })
}

function C(e) {
  const t = Object.keys(e),
    r = {};
  for (let o = 0; o < t.length; o++) {
    const i = t[o];
    typeof e[i] == "function" && (r[i] = e[i])
  }
  const u = Object.keys(r);
  let c;
  try {
    x(r)
  } catch (o) {
    c = o
  }
  return function(i = {}, y) {
    if (c) throw c;
    let f = !1;
    const p = {};
    for (let w = 0; w < u.length; w++) {
      const b = u[w],
        h = r[b],
        E = i[b],
        d = h(E, y);
      if (typeof d > "u") throw y && y.type, new Error(n(14));
      p[b] = d, f = f || d !== E
    }
    return f = f || u.length !== Object.keys(i).length, f ? p : i
  }
}

function A(...e) {
  return e.length === 0 ? t => t : e.length === 1 ? e[0] : e.reduce((t, r) => (...u) => t(r(...u)))
}

function T(...e) {
  return t => (r, u) => {
    const c = t(r, u);
    let o = () => {
      throw new Error(n(15))
    };
    const i = {
        getState: c.getState,
        dispatch: (f, ...p) => o(f, ...p)
      },
      y = e.map(f => f(i));
    return o = A(...y)(c.dispatch), {
      ...c,
      dispatch: o
    }
  }
}

function _(e) {
  return m(e) && "type" in e && typeof e.type == "string"
}
export {
  T as a, R as b, C as c, A as d, _ as e, m as i
};