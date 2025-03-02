import {
  y as p
} from "./yallist-Ce8uAuvz.js";
const T = p,
  u = Symbol("max"),
  o = Symbol("length"),
  g = Symbol("lengthCalculator"),
  v = Symbol("allowStale"),
  c = Symbol("maxAge"),
  l = Symbol("dispose"),
  S = Symbol("noDisposeOnSet"),
  i = Symbol("lruList"),
  h = Symbol("cache"),
  d = Symbol("updateAgeOnGet"),
  A = () => 1;
class L {
  constructor(t) {
    if (typeof t == "number" && (t = {
        max: t
      }), t || (t = {}), t.max && (typeof t.max != "number" || t.max < 0)) throw new TypeError("max must be a non-negative number");
    this[u] = t.max || 1 / 0;
    const e = t.length || A;
    if (this[g] = typeof e != "function" ? A : e, this[v] = t.stale || !1, t.maxAge && typeof t.maxAge != "number") throw new TypeError("maxAge must be a number");
    this[c] = t.maxAge || 0, this[l] = t.dispose, this[S] = t.noDisposeOnSet || !1, this[d] = t.updateAgeOnGet || !1, this.reset()
  }
  set max(t) {
    if (typeof t != "number" || t < 0) throw new TypeError("max must be a non-negative number");
    this[u] = t || 1 / 0, w(this)
  }
  get max() {
    return this[u]
  }
  set allowStale(t) {
    this[v] = !!t
  }
  get allowStale() {
    return this[v]
  }
  set maxAge(t) {
    if (typeof t != "number") throw new TypeError("maxAge must be a non-negative number");
    this[c] = t, w(this)
  }
  get maxAge() {
    return this[c]
  }
  set lengthCalculator(t) {
    typeof t != "function" && (t = A), t !== this[g] && (this[g] = t, this[o] = 0, this[i].forEach(e => {
      e.length = this[g](e.value, e.key), this[o] += e.length
    })), w(this)
  }
  get lengthCalculator() {
    return this[g]
  }
  get length() {
    return this[o]
  }
  get itemCount() {
    return this[i].length
  }
  rforEach(t, e) {
    e = e || this;
    for (let s = this[i].tail; s !== null;) {
      const r = s.prev;
      E(this, t, s, e), s = r
    }
  }
  forEach(t, e) {
    e = e || this;
    for (let s = this[i].head; s !== null;) {
      const r = s.next;
      E(this, t, s, e), s = r
    }
  }
  keys() {
    return this[i].toArray().map(t => t.key)
  }
  values() {
    return this[i].toArray().map(t => t.value)
  }
  reset() {
    this[l] && this[i] && this[i].length && this[i].forEach(t => this[l](t.key, t.value)), this[h] = new Map, this[i] = new T, this[o] = 0
  }
  dump() {
    return this[i].map(t => b(this, t) ? !1 : {
      k: t.key,
      v: t.value,
      e: t.now + (t.maxAge || 0)
    }).toArray().filter(t => t)
  }
  dumpLru() {
    return this[i]
  }
  set(t, e, s) {
    if (s = s || this[c], s && typeof s != "number") throw new TypeError("maxAge must be a number");
    const r = s ? Date.now() : 0,
      a = this[g](e, t);
    if (this[h].has(t)) {
      if (a > this[u]) return y(this, this[h].get(t)), !1;
      const f = this[h].get(t).value;
      return this[l] && (this[S] || this[l](t, f.value)), f.now = r, f.maxAge = s, f.value = e, this[o] += a - f.length, f.length = a, this.get(t), w(this), !0
    }
    const m = new O(t, e, a, r, s);
    return m.length > this[u] ? (this[l] && this[l](t, e), !1) : (this[o] += m.length, this[i].unshift(m), this[h].set(t, this[i].head), w(this), !0)
  }
  has(t) {
    if (!this[h].has(t)) return !1;
    const e = this[h].get(t).value;
    return !b(this, e)
  }
  get(t) {
    return x(this, t, !0)
  }
  peek(t) {
    return x(this, t, !1)
  }
  pop() {
    const t = this[i].tail;
    return t ? (y(this, t), t.value) : null
  }
  del(t) {
    y(this, this[h].get(t))
  }
  load(t) {
    this.reset();
    const e = Date.now();
    for (let s = t.length - 1; s >= 0; s--) {
      const r = t[s],
        a = r.e || 0;
      if (a === 0) this.set(r.k, r.v);
      else {
        const m = a - e;
        m > 0 && this.set(r.k, r.v, m)
      }
    }
  }
  prune() {
    this[h].forEach((t, e) => x(this, e, !1))
  }
}
const x = (n, t, e) => {
    const s = n[h].get(t);
    if (s) {
      const r = s.value;
      if (b(n, r)) {
        if (y(n, s), !n[v]) return
      } else e && (n[d] && (s.value.now = Date.now()), n[i].unshiftNode(s));
      return r.value
    }
  },
  b = (n, t) => {
    if (!t || !t.maxAge && !n[c]) return !1;
    const e = Date.now() - t.now;
    return t.maxAge ? e > t.maxAge : n[c] && e > n[c]
  },
  w = n => {
    if (n[o] > n[u])
      for (let t = n[i].tail; n[o] > n[u] && t !== null;) {
        const e = t.prev;
        y(n, t), t = e
      }
  },
  y = (n, t) => {
    if (t) {
      const e = t.value;
      n[l] && n[l](e.key, e.value), n[o] -= e.length, n[h].delete(e.key), n[i].removeNode(t)
    }
  };
class O {
  constructor(t, e, s, r, a) {
    this.key = t, this.value = e, this.length = s, this.now = r, this.maxAge = a || 0
  }
}
const E = (n, t, e, s) => {
  let r = e.value;
  b(n, r) && (y(n, e), n[v] || (r = void 0)), r && t.call(s, r.value, r.key, n)
};
var k = L;
export {
  k as l
};