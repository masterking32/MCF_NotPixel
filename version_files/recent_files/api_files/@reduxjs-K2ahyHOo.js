var Ae = Object.defineProperty;
var Se = (e, t, n) => t in e ? Ae(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n;
var _ = (e, t, n) => Se(e, typeof t != "symbol" ? t + "" : t, n);
import {
  p as Te
} from "./vite-plugin-node-polyfills-BVIVvkCX.js";
import {
  i as Oe,
  c as ke,
  a as je,
  b as Re,
  d as G,
  e as U
} from "./redux-DITMfSWq.js";
import {
  i as W,
  c as se,
  p as J,
  a as ce
} from "./immer-AZmEbvJU.js";
import {
  c as De,
  w as Pe
} from "./reselect-BeKUwQU7.js";
import {
  t as Le,
  w as Ie
} from "./redux-thunk-ClJT1hhx.js";
var _e = (...e) => {
    const t = De(...e),
      n = Object.assign((...r) => {
        const i = t(...r),
          a = (c, ...m) => i(W(c) ? se(c) : c, ...m);
        return Object.assign(a, i), a
      }, {
        withTypes: () => n
      });
    return n
  },
  xe = _e(Pe),
  Be = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
    if (arguments.length !== 0) return typeof arguments[0] == "object" ? G : G.apply(null, arguments)
  },
  $e = e => e && typeof e.match == "function";

function k(e, t) {
  function n(...r) {
    if (t) {
      let i = t(...r);
      if (!i) throw new Error(T(0));
      return {
        type: e,
        payload: i.payload,
        ..."meta" in i && {
          meta: i.meta
        },
        ..."error" in i && {
          error: i.error
        }
      }
    }
    return {
      type: e,
      payload: r[0]
    }
  }
  return n.toString = () => `${e}`, n.type = e, n.match = r => U(r) && r.type === e, n
}

function Fe(e) {
  return U(e) && Object.keys(e).every(Ne)
}

function Ne(e) {
  return ["type", "payload", "error", "meta"].indexOf(e) > -1
}

function ee(e, t) {
  for (const n of e)
    if (t(n)) return n
}
var oe = class x extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, x.prototype)
  }
  static get[Symbol.species]() {
    return x
  }
  concat(...t) {
    return super.concat.apply(this, t)
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0]) ? new x(...t[0].concat(this)) : new x(...t.concat(this))
  }
};

function te(e) {
  return ce(e) ? J(e, () => {}) : e
}

function re(e, t, n) {
  if (e.has(t)) {
    let i = e.get(t);
    return n.update && (i = n.update(i, t, e), e.set(t, i)), i
  }
  if (!n.insert) throw new Error(T(10));
  const r = n.insert(t, e);
  return e.set(t, r), r
}

function qe(e) {
  return typeof e == "boolean"
}
var We = () => function(t) {
    const {
      thunk: n = !0,
      immutableCheck: r = !0,
      serializableCheck: i = !0,
      actionCreatorCheck: a = !0
    } = t ?? {};
    let c = new oe;
    return n && (qe(n) ? c.push(Le) : c.push(Ie(n.extraArgument))), c
  },
  Ve = "RTK_autoBatch",
  ue = e => t => {
    setTimeout(t, e)
  },
  ze = typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : ue(10),
  Ke = (e = {
    type: "raf"
  }) => t => (...n) => {
    const r = t(...n);
    let i = !0,
      a = !1,
      c = !1;
    const m = new Set,
      y = e.type === "tick" ? queueMicrotask : e.type === "raf" ? ze : e.type === "callback" ? e.queueNotification : ue(e.timeout),
      w = () => {
        c = !1, a && (a = !1, m.forEach(s => s()))
      };
    return Object.assign({}, r, {
      subscribe(s) {
        const l = () => i && s(),
          h = r.subscribe(l);
        return m.add(s), () => {
          h(), m.delete(s)
        }
      },
      dispatch(s) {
        var l;
        try {
          return i = !((l = s == null ? void 0 : s.meta) != null && l[Ve]), a = !i, a && (c || (c = !0, y(w))), r.dispatch(s)
        } finally {
          i = !0
        }
      }
    })
  },
  Ge = e => function(n) {
    const {
      autoBatch: r = !0
    } = n ?? {};
    let i = new oe(e);
    return r && i.push(Ke(typeof r == "object" ? r : void 0)), i
  };

function _t(e) {
  const t = We(),
    {
      reducer: n = void 0,
      middleware: r,
      devTools: i = !0,
      preloadedState: a = void 0,
      enhancers: c = void 0
    } = e || {};
  let m;
  if (typeof n == "function") m = n;
  else if (Oe(n)) m = ke(n);
  else throw new Error(T(1));
  let y;
  typeof r == "function" ? y = r(t) : y = t();
  let w = G;
  i && (w = Be({
    trace: !1,
    ...typeof i == "object" && i
  }));
  const s = je(...y),
    l = Ge(s);
  let h = typeof c == "function" ? c(l) : l();
  const M = w(...h);
  return Re(m, a, M)
}

function le(e) {
  const t = {},
    n = [];
  let r;
  const i = {
    addCase(a, c) {
      const m = typeof a == "string" ? a : a.type;
      if (!m) throw new Error(T(28));
      if (m in t) throw new Error(T(29));
      return t[m] = c, i
    },
    addMatcher(a, c) {
      return n.push({
        matcher: a,
        reducer: c
      }), i
    },
    addDefaultCase(a) {
      return r = a, i
    }
  };
  return e(i), [t, n, r]
}

function He(e) {
  return typeof e == "function"
}

function Xe(e, t) {
  let [n, r, i] = le(t), a;
  if (He(e)) a = () => te(e());
  else {
    const m = te(e);
    a = () => m
  }

  function c(m = a(), y) {
    let w = [n[y.type], ...r.filter(({
      matcher: s
    }) => s(y)).map(({
      reducer: s
    }) => s)];
    return w.filter(s => !!s).length === 0 && (w = [i]), w.reduce((s, l) => {
      if (l)
        if (W(s)) {
          const M = l(s, y);
          return M === void 0 ? s : M
        } else {
          if (ce(s)) return J(s, h => l(h, y));
          {
            const h = l(s, y);
            if (h === void 0) {
              if (s === null) return s;
              throw new Error(T(9))
            }
            return h
          }
        } return s
    }, m)
  }
  return c.getInitialState = a, c
}
var Ue = (e, t) => $e(e) ? e.match(t) : e(t);

function Je(...e) {
  return t => e.some(n => Ue(n, t))
}
var Qe = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",
  fe = (e = 21) => {
    let t = "",
      n = e;
    for (; n--;) t += Qe[Math.random() * 64 | 0];
    return t
  },
  Ye = ["name", "message", "stack", "code"],
  K = class {
    constructor(e, t) {
      _(this, "_type");
      this.payload = e, this.meta = t
    }
  },
  ne = class {
    constructor(e, t) {
      _(this, "_type");
      this.payload = e, this.meta = t
    }
  },
  Ze = e => {
    if (typeof e == "object" && e !== null) {
      const t = {};
      for (const n of Ye) typeof e[n] == "string" && (t[n] = e[n]);
      return t
    }
    return {
      message: String(e)
    }
  },
  xt = (() => {
    function e(t, n, r) {
      const i = k(t + "/fulfilled", (y, w, s, l) => ({
          payload: y,
          meta: {
            ...l || {},
            arg: s,
            requestId: w,
            requestStatus: "fulfilled"
          }
        })),
        a = k(t + "/pending", (y, w, s) => ({
          payload: void 0,
          meta: {
            ...s || {},
            arg: w,
            requestId: y,
            requestStatus: "pending"
          }
        })),
        c = k(t + "/rejected", (y, w, s, l, h) => ({
          payload: l,
          error: (r && r.serializeError || Ze)(y || "Rejected"),
          meta: {
            ...h || {},
            arg: s,
            requestId: w,
            rejectedWithValue: !!l,
            requestStatus: "rejected",
            aborted: (y == null ? void 0 : y.name) === "AbortError",
            condition: (y == null ? void 0 : y.name) === "ConditionError"
          }
        }));

      function m(y) {
        return (w, s, l) => {
          const h = r != null && r.idGenerator ? r.idGenerator(y) : fe(),
            M = new AbortController;
          let o, d;

          function u(g) {
            d = g, M.abort()
          }
          const f = async function() {
            var b, E;
            let g;
            try {
              let C = (b = r == null ? void 0 : r.condition) == null ? void 0 : b.call(r, y, {
                getState: s,
                extra: l
              });
              if (tt(C) && (C = await C), C === !1 || M.signal.aborted) throw {
                name: "ConditionError",
                message: "Aborted due to condition callback returning false."
              };
              const S = new Promise((v, O) => {
                o = () => {
                  O({
                    name: "AbortError",
                    message: d || "Aborted"
                  })
                }, M.signal.addEventListener("abort", o)
              });
              w(a(h, y, (E = r == null ? void 0 : r.getPendingMeta) == null ? void 0 : E.call(r, {
                requestId: h,
                arg: y
              }, {
                getState: s,
                extra: l
              }))), g = await Promise.race([S, Promise.resolve(n(y, {
                dispatch: w,
                getState: s,
                extra: l,
                requestId: h,
                signal: M.signal,
                abort: u,
                rejectWithValue: (v, O) => new K(v, O),
                fulfillWithValue: (v, O) => new ne(v, O)
              })).then(v => {
                if (v instanceof K) throw v;
                return v instanceof ne ? i(v.payload, h, y, v.meta) : i(v, h, y)
              })])
            } catch (C) {
              g = C instanceof K ? c(null, h, y, C.payload, C.meta) : c(C, h, y)
            } finally {
              o && M.signal.removeEventListener("abort", o)
            }
            return r && !r.dispatchConditionRejection && c.match(g) && g.meta.condition || w(g), g
          }();
          return Object.assign(f, {
            abort: u,
            requestId: h,
            arg: y,
            unwrap() {
              return f.then(et)
            }
          })
        }
      }
      return Object.assign(m, {
        pending: a,
        rejected: c,
        fulfilled: i,
        settled: Je(c, i),
        typePrefix: t
      })
    }
    return e.withTypes = () => e, e
  })();

function et(e) {
  if (e.meta && e.meta.rejectedWithValue) throw e.payload;
  if (e.error) throw e.error;
  return e.payload
}

function tt(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function"
}
var rt = Symbol.for("rtk-slice-createasyncthunk");

function nt(e, t) {
  return `${e}/${t}`
}

function it({
  creators: e
} = {}) {
  var n;
  const t = (n = e == null ? void 0 : e.asyncThunk) == null ? void 0 : n[rt];
  return function(i) {
    const {
      name: a,
      reducerPath: c = a
    } = i;
    if (!a) throw new Error(T(11));
    typeof Te < "u";
    const m = (typeof i.reducers == "function" ? i.reducers(st()) : i.reducers) || {},
      y = Object.keys(m),
      w = {
        sliceCaseReducersByName: {},
        sliceCaseReducersByType: {},
        actionCreators: {},
        sliceMatchers: []
      },
      s = {
        addCase(p, b) {
          const E = typeof p == "string" ? p : p.type;
          if (!E) throw new Error(T(12));
          if (E in w.sliceCaseReducersByType) throw new Error(T(13));
          return w.sliceCaseReducersByType[E] = b, s
        },
        addMatcher(p, b) {
          return w.sliceMatchers.push({
            matcher: p,
            reducer: b
          }), s
        },
        exposeAction(p, b) {
          return w.actionCreators[p] = b, s
        },
        exposeCaseReducer(p, b) {
          return w.sliceCaseReducersByName[p] = b, s
        }
      };
    y.forEach(p => {
      const b = m[p],
        E = {
          reducerName: p,
          type: nt(a, p),
          createNotation: typeof i.reducers == "function"
        };
      ot(b) ? lt(E, b, s, t) : ct(E, b, s)
    });

    function l() {
      const [p = {}, b = [], E = void 0] = typeof i.extraReducers == "function" ? le(i.extraReducers) : [i.extraReducers], C = {
        ...p,
        ...w.sliceCaseReducersByType
      };
      return Xe(i.initialState, S => {
        for (let v in C) S.addCase(v, C[v]);
        for (let v of w.sliceMatchers) S.addMatcher(v.matcher, v.reducer);
        for (let v of b) S.addMatcher(v.matcher, v.reducer);
        E && S.addDefaultCase(E)
      })
    }
    const h = p => p,
      M = new Map;
    let o;

    function d(p, b) {
      return o || (o = l()), o(p, b)
    }

    function u() {
      return o || (o = l()), o.getInitialState()
    }

    function f(p, b = !1) {
      function E(S) {
        let v = S[p];
        return typeof v > "u" && b && (v = u()), v
      }

      function C(S = h) {
        const v = re(M, b, {
          insert: () => new WeakMap
        });
        return re(v, S, {
          insert: () => {
            const O = {};
            for (const [B, j] of Object.entries(i.selectors ?? {})) O[B] = at(j, S, u, b);
            return O
          }
        })
      }
      return {
        reducerPath: p,
        getSelectors: C,
        get selectors() {
          return C(E)
        },
        selectSlice: E
      }
    }
    const g = {
      name: a,
      reducer: d,
      actions: w.actionCreators,
      caseReducers: w.sliceCaseReducersByName,
      getInitialState: u,
      ...f(c),
      injectInto(p, {
        reducerPath: b,
        ...E
      } = {}) {
        const C = b ?? c;
        return p.inject({
          reducerPath: C,
          reducer: d
        }, E), {
          ...g,
          ...f(C, !0)
        }
      }
    };
    return g
  }
}

function at(e, t, n, r) {
  function i(a, ...c) {
    let m = t(a);
    return typeof m > "u" && r && (m = n()), e(m, ...c)
  }
  return i.unwrapped = e, i
}
var Bt = it();

function st() {
  function e(t, n) {
    return {
      _reducerDefinitionType: "asyncThunk",
      payloadCreator: t,
      ...n
    }
  }
  return e.withTypes = () => e, {
    reducer(t) {
      return Object.assign({
        [t.name](...n) {
          return t(...n)
        }
      } [t.name], {
        _reducerDefinitionType: "reducer"
      })
    },
    preparedReducer(t, n) {
      return {
        _reducerDefinitionType: "reducerWithPrepare",
        prepare: t,
        reducer: n
      }
    },
    asyncThunk: e
  }
}

function ct({
  type: e,
  reducerName: t,
  createNotation: n
}, r, i) {
  let a, c;
  if ("reducer" in r) {
    if (n && !ut(r)) throw new Error(T(17));
    a = r.reducer, c = r.prepare
  } else a = r;
  i.addCase(e, a).exposeCaseReducer(t, a).exposeAction(t, c ? k(e, c) : k(e))
}

function ot(e) {
  return e._reducerDefinitionType === "asyncThunk"
}

function ut(e) {
  return e._reducerDefinitionType === "reducerWithPrepare"
}

function lt({
  type: e,
  reducerName: t
}, n, r, i) {
  if (!i) throw new Error(T(18));
  const {
    payloadCreator: a,
    fulfilled: c,
    pending: m,
    rejected: y,
    settled: w,
    options: s
  } = n, l = i(e, a, s);
  r.exposeAction(t, l), c && r.addCase(l.fulfilled, c), m && r.addCase(l.pending, m), y && r.addCase(l.rejected, y), w && r.addMatcher(l.settled, w), r.exposeCaseReducer(t, {
    fulfilled: c || $,
    pending: m || $,
    rejected: y || $,
    settled: w || $
  })
}

function $() {}

function ft() {
  return {
    ids: [],
    entities: {}
  }
}

function dt(e) {
  function t(n = {}, r) {
    const i = Object.assign(ft(), n);
    return r ? e.setAll(i, r) : i
  }
  return {
    getInitialState: t
  }
}

function yt() {
  function e(t, n = {}) {
    const {
      createSelector: r = xe
    } = n, i = l => l.ids, a = l => l.entities, c = r(i, a, (l, h) => l.map(M => h[M])), m = (l, h) => h, y = (l, h) => l[h], w = r(i, l => l.length);
    if (!t) return {
      selectIds: i,
      selectEntities: a,
      selectAll: c,
      selectTotal: w,
      selectById: r(a, m, y)
    };
    const s = r(t, a);
    return {
      selectIds: r(t, i),
      selectEntities: s,
      selectAll: r(t, c),
      selectTotal: r(t, w),
      selectById: r(s, m, y)
    }
  }
  return {
    getSelectors: e
  }
}
var ht = W;

function pt(e) {
  const t = A((n, r) => e(r));
  return function(r) {
    return t(r, void 0)
  }
}

function A(e) {
  return function(n, r) {
    function i(c) {
      return Fe(c)
    }
    const a = c => {
      i(r) ? e(r.payload, c) : e(r, c)
    };
    return ht(n) ? (a(n), n) : J(n, a)
  }
}

function L(e, t) {
  return t(e)
}

function R(e) {
  return Array.isArray(e) || (e = Object.values(e)), e
}

function F(e) {
  return W(e) ? se(e) : e
}

function de(e, t, n) {
  e = R(e);
  const r = F(n.ids),
    i = new Set(r),
    a = [],
    c = [];
  for (const m of e) {
    const y = L(m, t);
    i.has(y) ? c.push({
      id: y,
      changes: m
    }) : a.push(m)
  }
  return [a, c, r]
}

function ye(e) {
  function t(o, d) {
    const u = L(o, e);
    u in d.entities || (d.ids.push(u), d.entities[u] = o)
  }

  function n(o, d) {
    o = R(o);
    for (const u of o) t(u, d)
  }

  function r(o, d) {
    const u = L(o, e);
    u in d.entities || d.ids.push(u), d.entities[u] = o
  }

  function i(o, d) {
    o = R(o);
    for (const u of o) r(u, d)
  }

  function a(o, d) {
    o = R(o), d.ids = [], d.entities = {}, n(o, d)
  }

  function c(o, d) {
    return m([o], d)
  }

  function m(o, d) {
    let u = !1;
    o.forEach(f => {
      f in d.entities && (delete d.entities[f], u = !0)
    }), u && (d.ids = d.ids.filter(f => f in d.entities))
  }

  function y(o) {
    Object.assign(o, {
      ids: [],
      entities: {}
    })
  }

  function w(o, d, u) {
    const f = u.entities[d.id];
    if (f === void 0) return !1;
    const g = Object.assign({}, f, d.changes),
      p = L(g, e),
      b = p !== d.id;
    return b && (o[d.id] = p, delete u.entities[d.id]), u.entities[p] = g, b
  }

  function s(o, d) {
    return l([o], d)
  }

  function l(o, d) {
    const u = {},
      f = {};
    o.forEach(p => {
      var b;
      p.id in d.entities && (f[p.id] = {
        id: p.id,
        changes: {
          ...(b = f[p.id]) == null ? void 0 : b.changes,
          ...p.changes
        }
      })
    }), o = Object.values(f), o.length > 0 && o.filter(b => w(u, b, d)).length > 0 && (d.ids = Object.values(d.entities).map(b => L(b, e)))
  }

  function h(o, d) {
    return M([o], d)
  }

  function M(o, d) {
    const [u, f] = de(o, e, d);
    l(f, d), n(u, d)
  }
  return {
    removeAll: pt(y),
    addOne: A(t),
    addMany: A(n),
    setOne: A(r),
    setMany: A(i),
    setAll: A(a),
    updateOne: A(s),
    updateMany: A(l),
    upsertOne: A(h),
    upsertMany: A(M),
    removeOne: A(c),
    removeMany: A(m)
  }
}

function mt(e, t, n) {
  let r = 0,
    i = e.length;
  for (; r < i;) {
    let a = r + i >>> 1;
    const c = e[a];
    n(t, c) >= 0 ? r = a + 1 : i = a
  }
  return r
}

function bt(e, t, n) {
  const r = mt(e, t, n);
  return e.splice(r, 0, t), e
}

function wt(e, t) {
  const {
    removeOne: n,
    removeMany: r,
    removeAll: i
  } = ye(e);

  function a(u, f) {
    return c([u], f)
  }

  function c(u, f, g) {
    u = R(u);
    const p = new Set(g ?? F(f.ids)),
      b = u.filter(E => !p.has(L(E, e)));
    b.length !== 0 && d(f, b)
  }

  function m(u, f) {
    return y([u], f)
  }

  function y(u, f) {
    if (u = R(u), u.length !== 0) {
      for (const g of u) delete f.entities[e(g)];
      d(f, u)
    }
  }

  function w(u, f) {
    u = R(u), f.entities = {}, f.ids = [], c(u, f, [])
  }

  function s(u, f) {
    return l([u], f)
  }

  function l(u, f) {
    let g = !1,
      p = !1;
    for (let b of u) {
      const E = f.entities[b.id];
      if (!E) continue;
      g = !0, Object.assign(E, b.changes);
      const C = e(E);
      if (b.id !== C) {
        p = !0, delete f.entities[b.id];
        const S = f.ids.indexOf(b.id);
        f.ids[S] = C, f.entities[C] = E
      }
    }
    g && d(f, [], g, p)
  }

  function h(u, f) {
    return M([u], f)
  }

  function M(u, f) {
    const [g, p, b] = de(u, e, f);
    p.length && l(p, f), g.length && c(g, f, b)
  }

  function o(u, f) {
    if (u.length !== f.length) return !1;
    for (let g = 0; g < u.length; g++)
      if (u[g] !== f[g]) return !1;
    return !0
  }
  const d = (u, f, g, p) => {
    const b = F(u.entities),
      E = F(u.ids),
      C = u.entities;
    let S = E;
    p && (S = new Set(E));
    let v = [];
    for (const j of S) {
      const Z = b[j];
      Z && v.push(Z)
    }
    const O = v.length === 0;
    for (const j of f) C[e(j)] = j, O || bt(v, j, t);
    O ? v = f.slice().sort(t) : g && v.sort(t);
    const B = v.map(e);
    o(E, B) || (u.ids = B)
  };
  return {
    removeOne: n,
    removeMany: r,
    removeAll: i,
    addOne: A(a),
    updateOne: A(s),
    upsertOne: A(h),
    setOne: A(m),
    setMany: A(y),
    setAll: A(w),
    addMany: A(c),
    updateMany: A(l),
    upsertMany: A(M)
  }
}

function $t(e = {}) {
  const {
    selectId: t,
    sortComparer: n
  } = {
    sortComparer: !1,
    selectId: c => c.id,
    ...e
  }, r = n ? wt(t, n) : ye(t), i = dt(r), a = yt();
  return {
    selectId: t,
    sortComparer: n,
    ...i,
    ...a,
    ...r
  }
}
var gt = "task",
  he = "listener",
  pe = "completed",
  Q = "cancelled",
  vt = `task-${Q}`,
  Mt = `task-${pe}`,
  H = `${he}-${Q}`,
  Et = `${he}-${pe}`,
  V = class {
    constructor(e) {
      _(this, "name", "TaskAbortError");
      _(this, "message");
      this.code = e, this.message = `${gt} ${Q} (reason: ${e})`
    }
  },
  Y = (e, t) => {
    if (typeof e != "function") throw new Error(T(32))
  },
  N = () => {},
  me = (e, t = N) => (e.catch(t), e),
  be = (e, t) => (e.addEventListener("abort", t, {
    once: !0
  }), () => e.removeEventListener("abort", t)),
  D = (e, t) => {
    const n = e.signal;
    n.aborted || ("reason" in n || Object.defineProperty(n, "reason", {
      enumerable: !0,
      value: t,
      configurable: !0,
      writable: !0
    }), e.abort(t))
  },
  P = e => {
    if (e.aborted) {
      const {
        reason: t
      } = e;
      throw new V(t)
    }
  };

function we(e, t) {
  let n = N;
  return new Promise((r, i) => {
    const a = () => i(new V(e.reason));
    if (e.aborted) {
      a();
      return
    }
    n = be(e, a), t.finally(() => n()).then(r, i)
  }).finally(() => {
    n = N
  })
}
var Ct = async (e, t) => {
  try {
    return await Promise.resolve(), {
      status: "ok",
      value: await e()
    }
  } catch (n) {
    return {
      status: n instanceof V ? "cancelled" : "rejected",
      error: n
    }
  } finally {
    t == null || t()
  }
}, q = e => t => me(we(e, t).then(n => (P(e), n))), ge = e => {
  const t = q(e);
  return n => t(new Promise(r => setTimeout(r, n)))
}, {
  assign: I
} = Object, ie = {}, z = "listenerMiddleware", At = (e, t) => {
  const n = r => be(e, () => D(r, e.reason));
  return (r, i) => {
    Y(r);
    const a = new AbortController;
    n(a);
    const c = Ct(async () => {
      P(e), P(a.signal);
      const m = await r({
        pause: q(a.signal),
        delay: ge(a.signal),
        signal: a.signal
      });
      return P(a.signal), m
    }, () => D(a, Mt));
    return i != null && i.autoJoin && t.push(c.catch(N)), {
      result: q(e)(c),
      cancel() {
        D(a, vt)
      }
    }
  }
}, St = (e, t) => {
  const n = async (r, i) => {
    P(t);
    let a = () => {};
    const m = [new Promise((y, w) => {
      let s = e({
        predicate: r,
        effect: (l, h) => {
          h.unsubscribe(), y([l, h.getState(), h.getOriginalState()])
        }
      });
      a = () => {
        s(), w()
      }
    })];
    i != null && m.push(new Promise(y => setTimeout(y, i, null)));
    try {
      const y = await we(t, Promise.race(m));
      return P(t), y
    } finally {
      a()
    }
  };
  return (r, i) => me(n(r, i))
}, ve = e => {
  let {
    type: t,
    actionCreator: n,
    matcher: r,
    predicate: i,
    effect: a
  } = e;
  if (t) i = k(t).match;
  else if (n) t = n.type, i = n.match;
  else if (r) i = r;
  else if (!i) throw new Error(T(21));
  return Y(a), {
    predicate: i,
    type: t,
    effect: a
  }
}, Me = I(e => {
  const {
    type: t,
    predicate: n,
    effect: r
  } = ve(e);
  return {
    id: fe(),
    effect: r,
    type: t,
    predicate: n,
    pending: new Set,
    unsubscribe: () => {
      throw new Error(T(22))
    }
  }
}, {
  withTypes: () => Me
}), X = e => {
  e.pending.forEach(t => {
    D(t, H)
  })
}, Tt = e => () => {
  e.forEach(X), e.clear()
}, ae = (e, t, n) => {
  try {
    e(t, n)
  } catch (r) {
    setTimeout(() => {
      throw r
    }, 0)
  }
}, Ee = I(k(`${z}/add`), {
  withTypes: () => Ee
}), Ot = k(`${z}/removeAll`), Ce = I(k(`${z}/remove`), {
  withTypes: () => Ce
}), kt = (...e) => {
  console.error(`${z}/error`, ...e)
}, Ft = (e = {}) => {
  const t = new Map,
    {
      extra: n,
      onError: r = kt
    } = e;
  Y(r);
  const i = s => (s.unsubscribe = () => t.delete(s.id), t.set(s.id, s), l => {
      s.unsubscribe(), l != null && l.cancelActive && X(s)
    }),
    a = s => {
      let l = ee(Array.from(t.values()), h => h.effect === s.effect);
      return l || (l = Me(s)), i(l)
    };
  I(a, {
    withTypes: () => a
  });
  const c = s => {
    const {
      type: l,
      effect: h,
      predicate: M
    } = ve(s), o = ee(Array.from(t.values()), d => (typeof l == "string" ? d.type === l : d.predicate === M) && d.effect === h);
    return o && (o.unsubscribe(), s.cancelActive && X(o)), !!o
  };
  I(c, {
    withTypes: () => c
  });
  const m = async (s, l, h, M) => {
    const o = new AbortController,
      d = St(a, o.signal),
      u = [];
    try {
      s.pending.add(o), await Promise.resolve(s.effect(l, I({}, h, {
        getOriginalState: M,
        condition: (f, g) => d(f, g).then(Boolean),
        take: d,
        delay: ge(o.signal),
        pause: q(o.signal),
        extra: n,
        signal: o.signal,
        fork: At(o.signal, u),
        unsubscribe: s.unsubscribe,
        subscribe: () => {
          t.set(s.id, s)
        },
        cancelActiveListeners: () => {
          s.pending.forEach((f, g, p) => {
            f !== o && (D(f, H), p.delete(f))
          })
        },
        cancel: () => {
          D(o, H), s.pending.delete(o)
        },
        throwIfCancelled: () => {
          P(o.signal)
        }
      })))
    } catch (f) {
      f instanceof V || ae(r, f, {
        raisedBy: "effect"
      })
    } finally {
      await Promise.all(u), D(o, Et), s.pending.delete(o)
    }
  }, y = Tt(t);
  return {
    middleware: s => l => h => {
      if (!U(h)) return l(h);
      if (Ee.match(h)) return a(h.payload);
      if (Ot.match(h)) {
        y();
        return
      }
      if (Ce.match(h)) return c(h.payload);
      let M = s.getState();
      const o = () => {
        if (M === ie) throw new Error(T(23));
        return M
      };
      let d;
      try {
        if (d = l(h), t.size > 0) {
          const u = s.getState(),
            f = Array.from(t.values());
          for (const g of f) {
            let p = !1;
            try {
              p = g.predicate(h, u, M)
            } catch (b) {
              p = !1, ae(r, b, {
                raisedBy: "predicate"
              })
            }
            p && m(g, h, s, o)
          }
        }
      } finally {
        M = ie
      }
      return d
    },
    startListening: a,
    stopListening: c,
    clearListeners: y
  }
};

function T(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `
}
export {
  xt as a, $t as b, Bt as c, xe as d, Ft as e, _t as f, Je as i
};