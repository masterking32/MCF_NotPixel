import {
  p as ie
} from "./vite-plugin-node-polyfills-BVIVvkCX.js";
const ue = Symbol.for("yaml.alias"),
  Be = Symbol.for("yaml.document"),
  T = Symbol.for("yaml.map"),
  $e = Symbol.for("yaml.pair"),
  ae = Symbol.for("yaml.scalar"),
  Y = Symbol.for("yaml.seq"),
  M = Symbol.for("yaml.node.type"),
  Q = n => !!n && typeof n == "object" && n[M] === ue,
  ee = n => !!n && typeof n == "object" && n[M] === Be,
  Ee = n => !!n && typeof n == "object" && n[M] === T,
  E = n => !!n && typeof n == "object" && n[M] === $e,
  $ = n => !!n && typeof n == "object" && n[M] === ae,
  de = n => !!n && typeof n == "object" && n[M] === Y;

function k(n) {
  if (n && typeof n == "object") switch (n[M]) {
    case T:
    case Y:
      return !0
  }
  return !1
}

function A(n) {
  if (n && typeof n == "object") switch (n[M]) {
    case ue:
    case T:
    case ae:
    case Y:
      return !0
  }
  return !1
}
const Ie = n => ($(n) || k(n)) && !!n.anchor,
  I = Symbol("break visit"),
  De = Symbol("skip children"),
  V = Symbol("remove node");

function q(n, e) {
  const t = Te(e);
  ee(n) ? J(null, n.contents, t, Object.freeze([n])) === V && (n.contents = null) : J(null, n, t, Object.freeze([]))
}
q.BREAK = I;
q.SKIP = De;
q.REMOVE = V;

function J(n, e, t, s) {
  const r = _e(n, e, t, s);
  if (A(r) || E(r)) return Je(n, s, r), J(n, r, t, s);
  if (typeof r != "symbol") {
    if (k(e)) {
      s = Object.freeze(s.concat(e));
      for (let i = 0; i < e.items.length; ++i) {
        const o = J(i, e.items[i], t, s);
        if (typeof o == "number") i = o - 1;
        else {
          if (o === I) return I;
          o === V && (e.items.splice(i, 1), i -= 1)
        }
      }
    } else if (E(e)) {
      s = Object.freeze(s.concat(e));
      const i = J("key", e.key, t, s);
      if (i === I) return I;
      i === V && (e.key = null);
      const o = J("value", e.value, t, s);
      if (o === I) return I;
      o === V && (e.value = null)
    }
  }
  return r
}

function Te(n) {
  return typeof n == "object" && (n.Collection || n.Node || n.Value) ? Object.assign({
    Alias: n.Node,
    Map: n.Node,
    Scalar: n.Node,
    Seq: n.Node
  }, n.Value && {
    Map: n.Value,
    Scalar: n.Value,
    Seq: n.Value
  }, n.Collection && {
    Map: n.Collection,
    Seq: n.Collection
  }, n) : n
}

function _e(n, e, t, s) {
  var r, i, o, l, f;
  if (typeof t == "function") return t(n, e, s);
  if (Ee(e)) return (r = t.Map) == null ? void 0 : r.call(t, n, e, s);
  if (de(e)) return (i = t.Seq) == null ? void 0 : i.call(t, n, e, s);
  if (E(e)) return (o = t.Pair) == null ? void 0 : o.call(t, n, e, s);
  if ($(e)) return (l = t.Scalar) == null ? void 0 : l.call(t, n, e, s);
  if (Q(e)) return (f = t.Alias) == null ? void 0 : f.call(t, n, e, s)
}

function Je(n, e, t) {
  const s = e[e.length - 1];
  if (k(s)) s.items[n] = t;
  else if (E(s)) n === "key" ? s.key = t : s.value = t;
  else if (ee(s)) s.contents = t;
  else {
    const r = Q(s) ? "alias" : "scalar";
    throw new Error(`Cannot replace node with ${r} parent`)
  }
}

function Ne(n) {
  if (/[\x00-\x19\s,[\]{}]/.test(n)) {
    const t = `Anchor must not contain whitespace or control characters: ${JSON.stringify(n)}`;
    throw new Error(t)
  }
  return !0
}

function R(n, e, t, s) {
  if (s && typeof s == "object")
    if (Array.isArray(s))
      for (let r = 0, i = s.length; r < i; ++r) {
        const o = s[r],
          l = R(n, s, String(r), o);
        l === void 0 ? delete s[r] : l !== o && (s[r] = l)
      } else if (s instanceof Map)
        for (const r of Array.from(s.keys())) {
          const i = s.get(r),
            o = R(n, s, r, i);
          o === void 0 ? s.delete(r) : o !== i && s.set(r, o)
        } else if (s instanceof Set)
          for (const r of Array.from(s)) {
            const i = R(n, s, r, r);
            i === void 0 ? s.delete(r) : i !== r && (s.delete(r), s.add(i))
          } else
            for (const [r, i] of Object.entries(s)) {
              const o = R(n, s, r, i);
              o === void 0 ? delete s[r] : o !== i && (s[r] = o)
            }
  return n.call(e, t, s)
}

function j(n, e, t) {
  if (Array.isArray(n)) return n.map((s, r) => j(s, String(r), t));
  if (n && typeof n.toJSON == "function") {
    if (!t || !Ie(n)) return n.toJSON(e, t);
    const s = {
      aliasCount: 0,
      count: 1,
      res: void 0
    };
    t.anchors.set(n, s), t.onCreate = i => {
      s.res = i, delete t.onCreate
    };
    const r = n.toJSON(e, t);
    return t.onCreate && t.onCreate(r), r
  }
  return typeof n == "bigint" && !(t != null && t.keep) ? Number(n) : n
}
class he {
  constructor(e) {
    Object.defineProperty(this, M, {
      value: e
    })
  }
  clone() {
    const e = Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this));
    return this.range && (e.range = this.range.slice()), e
  }
  toJS(e, {
    mapAsMap: t,
    maxAliasCount: s,
    onAnchor: r,
    reviver: i
  } = {}) {
    if (!ee(e)) throw new TypeError("A document argument is required");
    const o = {
        anchors: new Map,
        doc: e,
        keep: !0,
        mapAsMap: t === !0,
        mapKeyWarned: !1,
        maxAliasCount: typeof s == "number" ? s : 100
      },
      l = j(this, "", o);
    if (typeof r == "function")
      for (const {
          count: f,
          res: c
        }
        of o.anchors.values()) r(c, f);
    return typeof i == "function" ? R(i, {
      "": l
    }, "", l) : l
  }
}
class Fe extends he {
  constructor(e) {
    super(ue), this.source = e, Object.defineProperty(this, "tag", {
      set() {
        throw new Error("Alias nodes cannot have tags")
      }
    })
  }
  resolve(e) {
    let t;
    return q(e, {
      Node: (s, r) => {
        if (r === this) return q.BREAK;
        r.anchor === this.source && (t = r)
      }
    }), t
  }
  toJSON(e, t) {
    if (!t) return {
      source: this.source
    };
    const {
      anchors: s,
      doc: r,
      maxAliasCount: i
    } = t, o = this.resolve(r);
    if (!o) {
      const f = `Unresolved alias (the anchor must be set before the alias): ${this.source}`;
      throw new ReferenceError(f)
    }
    let l = s.get(o);
    if (l || (j(o, null, t), l = s.get(o)), !l || l.res === void 0) {
      const f = "This should not happen: Alias anchor was not resolved?";
      throw new ReferenceError(f)
    }
    if (i >= 0 && (l.count += 1, l.aliasCount === 0 && (l.aliasCount = G(r, o, s)), l.count * l.aliasCount > i)) {
      const f = "Excessive alias count indicates a resource exhaustion attack";
      throw new ReferenceError(f)
    }
    return l.res
  }
  toString(e, t, s) {
    const r = `*${this.source}`;
    if (e) {
      if (Ne(this.source), e.options.verifyAliasOrder && !e.anchors.has(this.source)) {
        const i = `Unresolved alias (the anchor must be set before the alias): ${this.source}`;
        throw new Error(i)
      }
      if (e.implicitKey) return `${r} `
    }
    return r
  }
}

function G(n, e, t) {
  if (Q(e)) {
    const s = e.resolve(n),
      r = t && s && t.get(s);
    return r ? r.count * r.aliasCount : 0
  } else if (k(e)) {
    let s = 0;
    for (const r of e.items) {
      const i = G(n, r, t);
      i > s && (s = i)
    }
    return s
  } else if (E(e)) {
    const s = G(n, e.key, t),
      r = G(n, e.value, t);
    return Math.max(s, r)
  }
  return 1
}
const Ae = n => !n || typeof n != "function" && typeof n != "object";
class O extends he {
  constructor(e) {
    super(ae), this.value = e
  }
  toJSON(e, t) {
    return t != null && t.keep ? this.value : j(this.value, e, t)
  }
  toString() {
    return String(this.value)
  }
}
O.BLOCK_FOLDED = "BLOCK_FOLDED";
O.BLOCK_LITERAL = "BLOCK_LITERAL";
O.PLAIN = "PLAIN";
O.QUOTE_DOUBLE = "QUOTE_DOUBLE";
O.QUOTE_SINGLE = "QUOTE_SINGLE";

function Ke(n, e, t) {
  return t.find(s => {
    var r;
    return ((r = s.identify) == null ? void 0 : r.call(s, n)) && !s.format
  })
}

function Z(n, e, t) {
  var h, g, d;
  if (ee(n) && (n = n.contents), A(n)) return n;
  if (E(n)) {
    const p = (g = (h = t.schema[T]).createNode) == null ? void 0 : g.call(h, t.schema, null, t);
    return p.items.push(n), p
  }(n instanceof String || n instanceof Number || n instanceof Boolean || typeof BigInt < "u" && n instanceof BigInt) && (n = n.valueOf());
  const {
    aliasDuplicateObjects: s,
    onAnchor: r,
    onTagObj: i,
    schema: o,
    sourceObjects: l
  } = t;
  let f;
  if (s && n && typeof n == "object") {
    if (f = l.get(n), f) return f.anchor || (f.anchor = r(n)), new Fe(f.anchor);
    f = {
      anchor: null,
      node: null
    }, l.set(n, f)
  }
  let c = Ke(n, e, o.tags);
  if (!c) {
    if (n && typeof n.toJSON == "function" && (n = n.toJSON()), !n || typeof n != "object") {
      const p = new O(n);
      return f && (f.node = p), p
    }
    c = n instanceof Map ? o[T] : Symbol.iterator in Object(n) ? o[Y] : o[T]
  }
  i && (i(c), delete t.onTagObj);
  const y = c != null && c.createNode ? c.createNode(t.schema, n, t) : typeof((d = c == null ? void 0 : c.nodeClass) == null ? void 0 : d.from) == "function" ? c.nodeClass.from(t.schema, n, t) : new O(n);
  return c.default || (y.tag = c.tag), f && (f.node = y), y
}

function we(n, e, t) {
  let s = t;
  for (let r = e.length - 1; r >= 0; --r) {
    const i = e[r];
    if (typeof i == "number" && Number.isInteger(i) && i >= 0) {
      const o = [];
      o[i] = s, s = o
    } else s = new Map([
      [i, s]
    ])
  }
  return Z(s, void 0, {
    aliasDuplicateObjects: !1,
    keepUndefined: !1,
    onAnchor: () => {
      throw new Error("This should not happen, please report a bug.")
    },
    schema: n,
    sourceObjects: new Map
  })
}
const Qe = n => n == null || typeof n == "object" && !!n[Symbol.iterator]().next().done;
class Le extends he {
  constructor(e, t) {
    super(e), Object.defineProperty(this, "schema", {
      value: t,
      configurable: !0,
      enumerable: !1,
      writable: !0
    })
  }
  clone(e) {
    const t = Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this));
    return e && (t.schema = e), t.items = t.items.map(s => A(s) || E(s) ? s.clone(e) : s), this.range && (t.range = this.range.slice()), t
  }
  addIn(e, t) {
    if (Qe(e)) this.add(t);
    else {
      const [s, ...r] = e, i = this.get(s, !0);
      if (k(i)) i.addIn(r, t);
      else if (i === void 0 && this.schema) this.set(s, we(this.schema, r, t));
      else throw new Error(`Expected YAML collection at ${s}. Remaining path: ${r}`)
    }
  }
  deleteIn(e) {
    const [t, ...s] = e;
    if (s.length === 0) return this.delete(t);
    const r = this.get(t, !0);
    if (k(r)) return r.deleteIn(s);
    throw new Error(`Expected YAML collection at ${t}. Remaining path: ${s}`)
  }
  getIn(e, t) {
    const [s, ...r] = e, i = this.get(s, !0);
    return r.length === 0 ? !t && $(i) ? i.value : i : k(i) ? i.getIn(r, t) : void 0
  }
  hasAllNullValues(e) {
    return this.items.every(t => {
      if (!E(t)) return !1;
      const s = t.value;
      return s == null || e && $(s) && s.value == null && !s.commentBefore && !s.comment && !s.tag
    })
  }
  hasIn(e) {
    const [t, ...s] = e;
    if (s.length === 0) return this.has(t);
    const r = this.get(t, !0);
    return k(r) ? r.hasIn(s) : !1
  }
  setIn(e, t) {
    const [s, ...r] = e;
    if (r.length === 0) this.set(s, t);
    else {
      const i = this.get(s, !0);
      if (k(i)) i.setIn(r, t);
      else if (i === void 0 && this.schema) this.set(s, we(this.schema, r, t));
      else throw new Error(`Expected YAML collection at ${s}. Remaining path: ${r}`)
    }
  }
}
const Re = n => n.replace(/^(?!$)(?: $)?/gm, "#");

function W(n, e) {
  return /^\n+$/.test(n) ? n.substring(1) : e ? n.replace(/^(?! *$)/gm, e) : n
}
const F = (n, e, t) => n.endsWith(`
`) ? W(t, e) : t.includes(`
`) ? `
` + W(t, e) : (n.endsWith(" ") ? "" : " ") + t,
  ke = "flow",
  fe = "block",
  H = "quoted";

function te(n, e, t = "flow", {
  indentAtStart: s,
  lineWidth: r = 80,
  minContentWidth: i = 20,
  onFold: o,
  onOverflow: l
} = {}) {
  if (!r || r < 0) return n;
  r < i && (i = 0);
  const f = Math.max(1 + i, 1 + r - e.length);
  if (n.length <= f) return n;
  const c = [],
    y = {};
  let h = r - e.length;
  typeof s == "number" && (s > r - Math.max(2, i) ? c.push(0) : h = r - s);
  let g, d, p = !1,
    u = -1,
    a = -1,
    S = -1;
  t === fe && (u = Se(n, u, e.length), u !== -1 && (h = u + f));
  for (let b; b = n[u += 1];) {
    if (t === H && b === "\\") {
      switch (a = u, n[u + 1]) {
        case "x":
          u += 3;
          break;
        case "u":
          u += 5;
          break;
        case "U":
          u += 9;
          break;
        default:
          u += 1
      }
      S = u
    }
    if (b === `
`) t === fe && (u = Se(n, u, e.length)), h = u + e.length + f, g = void 0;
    else {
      if (b === " " && d && d !== " " && d !== `
` && d !== "	") {
        const w = n[u + 1];
        w && w !== " " && w !== `
` && w !== "	" && (g = u)
      }
      if (u >= h)
        if (g) c.push(g), h = g + f, g = void 0;
        else if (t === H) {
        for (; d === " " || d === "	";) d = b, b = n[u += 1], p = !0;
        const w = u > S + 1 ? u - 2 : a - 1;
        if (y[w]) return n;
        c.push(w), y[w] = !0, h = w + f, g = void 0
      } else p = !0
    }
    d = b
  }
  if (p && l && l(), c.length === 0) return n;
  o && o();
  let m = n.slice(0, c[0]);
  for (let b = 0; b < c.length; ++b) {
    const w = c[b],
      L = c[b + 1] || n.length;
    w === 0 ? m = `
${e}${n.slice(0,L)}` : (t === H && y[w] && (m += `${n[w]}\\`), m += `
${e}${n.slice(w+1,L)}`)
  }
  return m
}

function Se(n, e, t) {
  let s = e,
    r = e + 1,
    i = n[r];
  for (; i === " " || i === "	";)
    if (e < r + t) i = n[++e];
    else {
      do i = n[++e]; while (i && i !== `
`);
      s = e, r = e + 1, i = n[r]
    } return s
}
const ne = (n, e) => ({
    indentAtStart: e ? n.indent.length : n.indentAtStart,
    lineWidth: n.options.lineWidth,
    minContentWidth: n.options.minContentWidth
  }),
  se = n => /^(%|---|\.\.\.)/m.test(n);

function Ve(n, e, t) {
  if (!e || e < 0) return !1;
  const s = e - t,
    r = n.length;
  if (r <= s) return !1;
  for (let i = 0, o = 0; i < r; ++i)
    if (n[i] === `
`) {
      if (i - o > s) return !0;
      if (o = i + 1, r - o <= s) return !1
    } return !0
}

function U(n, e) {
  const t = JSON.stringify(n);
  if (e.options.doubleQuotedAsJSON) return t;
  const {
    implicitKey: s
  } = e, r = e.options.doubleQuotedMinMultiLineLength, i = e.indent || (se(n) ? "  " : "");
  let o = "",
    l = 0;
  for (let f = 0, c = t[f]; c; c = t[++f])
    if (c === " " && t[f + 1] === "\\" && t[f + 2] === "n" && (o += t.slice(l, f) + "\\ ", f += 1, l = f, c = "\\"), c === "\\") switch (t[f + 1]) {
      case "u": {
        o += t.slice(l, f);
        const y = t.substr(f + 2, 4);
        switch (y) {
          case "0000":
            o += "\\0";
            break;
          case "0007":
            o += "\\a";
            break;
          case "000b":
            o += "\\v";
            break;
          case "001b":
            o += "\\e";
            break;
          case "0085":
            o += "\\N";
            break;
          case "00a0":
            o += "\\_";
            break;
          case "2028":
            o += "\\L";
            break;
          case "2029":
            o += "\\P";
            break;
          default:
            y.substr(0, 2) === "00" ? o += "\\x" + y.substr(2) : o += t.substr(f, 6)
        }
        f += 5, l = f + 1
      }
      break;
      case "n":
        if (s || t[f + 2] === '"' || t.length < r) f += 1;
        else {
          for (o += t.slice(l, f) + `

`; t[f + 2] === "\\" && t[f + 3] === "n" && t[f + 4] !== '"';) o += `
`, f += 2;
          o += i, t[f + 2] === " " && (o += "\\"), f += 1, l = f + 1
        }
        break;
      default:
        f += 1
    }
  return o = l ? o + t.slice(l) : t, s ? o : te(o, i, H, ne(e, !1))
}

function le(n, e) {
  if (e.options.singleQuote === !1 || e.implicitKey && n.includes(`
`) || /[ \t]\n|\n[ \t]/.test(n)) return U(n, e);
  const t = e.indent || (se(n) ? "  " : ""),
    s = "'" + n.replace(/'/g, "''").replace(/\n+/g, `$&
${t}`) + "'";
  return e.implicitKey ? s : te(s, t, ke, ne(e, !1))
}

function K(n, e) {
  const {
    singleQuote: t
  } = e.options;
  let s;
  if (t === !1) s = U;
  else {
    const r = n.includes('"'),
      i = n.includes("'");
    r && !i ? s = le : i && !r ? s = U : s = t ? le : U
  }
  return s(n, e)
}
let ce;
try {
  ce = new RegExp(`(^|(?<!
))
+(?!
|$)`, "g")
} catch {
  ce = /\n+(?!\n|$)/g
}

function X({
  comment: n,
  type: e,
  value: t
}, s, r, i) {
  const {
    blockQuote: o,
    commentString: l,
    lineWidth: f
  } = s.options;
  if (!o || /\n[\t ]+$/.test(t) || /^\s*$/.test(t)) return K(t, s);
  const c = s.indent || (s.forceBlockIndent || se(t) ? "  " : ""),
    y = o === "literal" ? !0 : o === "folded" || e === O.BLOCK_FOLDED ? !1 : e === O.BLOCK_LITERAL ? !0 : !Ve(t, f, c.length);
  if (!t) return y ? `|
` : `>
`;
  let h, g;
  for (g = t.length; g > 0; --g) {
    const N = t[g - 1];
    if (N !== `
` && N !== "	" && N !== " ") break
  }
  let d = t.substring(g);
  const p = d.indexOf(`
`);
  p === -1 ? h = "-" : t === d || p !== d.length - 1 ? (h = "+", i && i()) : h = "", d && (t = t.slice(0, -d.length), d[d.length - 1] === `
` && (d = d.slice(0, -1)), d = d.replace(ce, `$&${c}`));
  let u = !1,
    a, S = -1;
  for (a = 0; a < t.length; ++a) {
    const N = t[a];
    if (N === " ") u = !0;
    else if (N === `
`) S = a;
    else break
  }
  let m = t.substring(0, S < a ? S + 1 : a);
  m && (t = t.substring(m.length), m = m.replace(/\n+/g, `$&${c}`));
  let w = (y ? "|" : ">") + (u ? c ? "2" : "1" : "") + h;
  if (n && (w += " " + l(n.replace(/ ?[\r\n]+/g, " ")), r && r()), y) return t = t.replace(/\n+/g, `$&${c}`), `${w}
${c}${m}${t}${d}`;
  t = t.replace(/\n+/g, `
$&`).replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g, "$1$2").replace(/\n+/g, `$&${c}`);
  const L = te(`${m}${t}${d}`, c, fe, ne(s, !0));
  return `${w}
${c}${L}`
}

function Ue(n, e, t, s) {
  const {
    type: r,
    value: i
  } = n, {
    actualString: o,
    implicitKey: l,
    indent: f,
    indentStep: c,
    inFlow: y
  } = e;
  if (l && i.includes(`
`) || y && /[[\]{},]/.test(i)) return K(i, e);
  if (!i || /^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(i)) return l || y || !i.includes(`
`) ? K(i, e) : X(n, e, t, s);
  if (!l && !y && r !== O.PLAIN && i.includes(`
`)) return X(n, e, t, s);
  if (se(i)) {
    if (f === "") return e.forceBlockIndent = !0, X(n, e, t, s);
    if (l && f === c) return K(i, e)
  }
  const h = i.replace(/\n+/g, `$&
${f}`);
  if (o) {
    const g = u => {
        var a;
        return u.default && u.tag !== "tag:yaml.org,2002:str" && ((a = u.test) == null ? void 0 : a.test(h))
      },
      {
        compat: d,
        tags: p
      } = e.doc.schema;
    if (p.some(g) || d != null && d.some(g)) return K(i, e)
  }
  return l ? h : te(h, f, ke, ne(e, !1))
}

function qe(n, e, t, s) {
  const {
    implicitKey: r,
    inFlow: i
  } = e, o = typeof n.value == "string" ? n : Object.assign({}, n, {
    value: String(n.value)
  });
  let {
    type: l
  } = n;
  l !== O.QUOTE_DOUBLE && /[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(o.value) && (l = O.QUOTE_DOUBLE);
  const f = y => {
    switch (y) {
      case O.BLOCK_FOLDED:
      case O.BLOCK_LITERAL:
        return r || i ? K(o.value, e) : X(o, e, t, s);
      case O.QUOTE_DOUBLE:
        return U(o.value, e);
      case O.QUOTE_SINGLE:
        return le(o.value, e);
      case O.PLAIN:
        return Ue(o, e, t, s);
      default:
        return null
    }
  };
  let c = f(l);
  if (c === null) {
    const {
      defaultKeyType: y,
      defaultStringType: h
    } = e.options, g = r && y || h;
    if (c = f(g), c === null) throw new Error(`Unsupported default string type ${g}`)
  }
  return c
}

function We(n, e) {
  const t = Object.assign({
    blockQuote: !0,
    commentString: Re,
    defaultKeyType: null,
    defaultStringType: "PLAIN",
    directives: null,
    doubleQuotedAsJSON: !1,
    doubleQuotedMinMultiLineLength: 40,
    falseStr: "false",
    flowCollectionPadding: !0,
    indentSeq: !0,
    lineWidth: 80,
    minContentWidth: 20,
    nullStr: "null",
    simpleKeys: !1,
    singleQuote: null,
    trueStr: "true",
    verifyAliasOrder: !0
  }, n.schema.toStringOptions, e);
  let s;
  switch (t.collectionStyle) {
    case "block":
      s = !1;
      break;
    case "flow":
      s = !0;
      break;
    default:
      s = null
  }
  return {
    anchors: new Set,
    doc: n,
    flowCollectionPadding: t.flowCollectionPadding ? " " : "",
    indent: "",
    indentStep: typeof t.indent == "number" ? " ".repeat(t.indent) : "  ",
    inFlow: s,
    options: t
  }
}

function Ye(n, e) {
  var r;
  if (e.tag) {
    const i = n.filter(o => o.tag === e.tag);
    if (i.length > 0) return i.find(o => o.format === e.format) ?? i[0]
  }
  let t, s;
  if ($(e)) {
    s = e.value;
    const i = n.filter(o => {
      var l;
      return (l = o.identify) == null ? void 0 : l.call(o, s)
    });
    t = i.find(o => o.format === e.format) ?? i.find(o => !o.format)
  } else s = e, t = n.find(i => i.nodeClass && s instanceof i.nodeClass);
  if (!t) {
    const i = ((r = s == null ? void 0 : s.constructor) == null ? void 0 : r.name) ?? typeof s;
    throw new Error(`Tag not resolved for ${i} value`)
  }
  return t
}

function ze(n, e, {
  anchors: t,
  doc: s
}) {
  if (!s.directives) return "";
  const r = [],
    i = ($(n) || k(n)) && n.anchor;
  i && Ne(i) && (t.add(i), r.push(`&${i}`));
  const o = n.tag ? n.tag : e.default ? null : e.tag;
  return o && r.push(s.directives.tagString(o)), r.join(" ")
}

function v(n, e, t, s) {
  var f;
  if (E(n)) return n.toString(e, t, s);
  if (Q(n)) {
    if (e.doc.directives) return n.toString(e);
    if ((f = e.resolvedAliases) != null && f.has(n)) throw new TypeError("Cannot stringify circular structure without alias nodes");
    e.resolvedAliases ? e.resolvedAliases.add(n) : e.resolvedAliases = new Set([n]), n = n.resolve(e.doc)
  }
  let r;
  const i = A(n) ? n : e.doc.createNode(n, {
    onTagObj: c => r = c
  });
  r || (r = Ye(e.doc.schema.tags, i));
  const o = ze(i, r, e);
  o.length > 0 && (e.indentAtStart = (e.indentAtStart ?? 0) + o.length + 1);
  const l = typeof r.stringify == "function" ? r.stringify(i, e, t, s) : $(i) ? qe(i, e, t, s) : i.toString(e, t, s);
  return o ? $(i) || l[0] === "{" || l[0] === "[" ? `${o} ${l}` : `${o}
${e.indent}${l}` : l
}

function Ge({
  key: n,
  value: e
}, t, s, r) {
  const {
    allNullValues: i,
    doc: o,
    indent: l,
    indentStep: f,
    options: {
      commentString: c,
      indentSeq: y,
      simpleKeys: h
    }
  } = t;
  let g = A(n) && n.comment || null;
  if (h) {
    if (g) throw new Error("With simple keys, key nodes cannot have comments");
    if (k(n) || !A(n) && typeof n == "object") {
      const P = "With simple keys, collection cannot be used as a key value";
      throw new Error(P)
    }
  }
  let d = !h && (!n || g && e == null && !t.inFlow || k(n) || ($(n) ? n.type === O.BLOCK_FOLDED || n.type === O.BLOCK_LITERAL : typeof n == "object"));
  t = Object.assign({}, t, {
    allNullValues: !1,
    implicitKey: !d && (h || !i),
    indent: l + f
  });
  let p = !1,
    u = !1,
    a = v(n, t, () => p = !0, () => u = !0);
  if (!d && !t.inFlow && a.length > 1024) {
    if (h) throw new Error("With simple keys, single line scalar must not span more than 1024 characters");
    d = !0
  }
  if (t.inFlow) {
    if (i || e == null) return p && s && s(), a === "" ? "?" : d ? `? ${a}` : a
  } else if (i && !h || e == null && d) return a = `? ${a}`, g && !p ? a += F(a, t.indent, c(g)) : u && r && r(), a;
  p && (g = null), d ? (g && (a += F(a, t.indent, c(g))), a = `? ${a}
${l}:`) : (a = `${a}:`, g && (a += F(a, t.indent, c(g))));
  let S, m, b;
  A(e) ? (S = !!e.spaceBefore, m = e.commentBefore, b = e.comment) : (S = !1, m = null, b = null, e && typeof e == "object" && (e = o.createNode(e))), t.implicitKey = !1, !d && !g && $(e) && (t.indentAtStart = a.length + 1), u = !1, !y && f.length >= 2 && !t.inFlow && !d && de(e) && !e.flow && !e.tag && !e.anchor && (t.indent = t.indent.substring(2));
  let w = !1;
  const L = v(e, t, () => w = !0, () => u = !0);
  let N = " ";
  if (g || S || m) {
    if (N = S ? `
` : "", m) {
      const P = c(m);
      N += `
${W(P,t.indent)}`
    }
    L === "" && !t.inFlow ? N === `
` && (N = `

`) : N += `
${t.indent}`
  } else if (!d && k(e)) {
    const P = L[0],
      re = L.indexOf(`
`),
      me = re !== -1,
      Pe = t.inFlow ?? e.flow ?? e.items.length === 0;
    if (me || !Pe) {
      let be = !1;
      if (me && (P === "&" || P === "!")) {
        let B = L.indexOf(" ");
        P === "&" && B !== -1 && B < re && L[B + 1] === "!" && (B = L.indexOf(" ", B + 1)), (B === -1 || re < B) && (be = !0)
      }
      be || (N = `
${t.indent}`)
    }
  } else(L === "" || L[0] === `
`) && (N = "");
  return a += N + L, t.inFlow ? w && s && s() : b && !w ? a += F(a, t.indent, c(b)) : u && r && r(), a
}

function He(n, e) {
  (n === "debug" || n === "warn") && (typeof ie < "u" && ie.emitWarning ? ie.emitWarning(e) : console.warn(e))
}
const Oe = "<<";

function je(n, e, {
  key: t,
  value: s
}) {
  if (n != null && n.doc.schema.merge && Xe(t))
    if (s = Q(s) ? s.resolve(n.doc) : s, de(s))
      for (const r of s.items) oe(n, e, r);
    else if (Array.isArray(s))
    for (const r of s) oe(n, e, r);
  else oe(n, e, s);
  else {
    const r = j(t, "", n);
    if (e instanceof Map) e.set(r, j(s, r, n));
    else if (e instanceof Set) e.add(r);
    else {
      const i = Ze(t, r, n),
        o = j(s, i, n);
      i in e ? Object.defineProperty(e, i, {
        value: o,
        writable: !0,
        enumerable: !0,
        configurable: !0
      }) : e[i] = o
    }
  }
  return e
}
const Xe = n => n === Oe || $(n) && n.value === Oe && (!n.type || n.type === O.PLAIN);

function oe(n, e, t) {
  const s = n && Q(t) ? t.resolve(n.doc) : t;
  if (!Ee(s)) throw new Error("Merge sources must be maps or map aliases");
  const r = s.toJSON(null, n, Map);
  for (const [i, o] of r) e instanceof Map ? e.has(i) || e.set(i, o) : e instanceof Set ? e.add(i) : Object.prototype.hasOwnProperty.call(e, i) || Object.defineProperty(e, i, {
    value: o,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
  return e
}

function Ze(n, e, t) {
  if (e === null) return "";
  if (typeof e != "object") return String(e);
  if (A(n) && (t != null && t.doc)) {
    const s = We(t.doc, {});
    s.anchors = new Set;
    for (const i of t.anchors.keys()) s.anchors.add(i.anchor);
    s.inFlow = !0, s.inStringifyKey = !0;
    const r = n.toString(s);
    if (!t.mapKeyWarned) {
      let i = JSON.stringify(r);
      i.length > 40 && (i = i.substring(0, 36) + '..."'), He(t.doc.options.logLevel, `Keys with collection values will be stringified due to JS Object restrictions: ${i}. Set mapAsMap: true to use object keys.`), t.mapKeyWarned = !0
    }
    return r
  }
  return JSON.stringify(e)
}

function ge(n, e, t) {
  const s = Z(n, void 0, t),
    r = Z(e, void 0, t);
  return new C(s, r)
}
class C {
  constructor(e, t = null) {
    Object.defineProperty(this, M, {
      value: $e
    }), this.key = e, this.value = t
  }
  clone(e) {
    let {
      key: t,
      value: s
    } = this;
    return A(t) && (t = t.clone(e)), A(s) && (s = s.clone(e)), new C(t, s)
  }
  toJSON(e, t) {
    const s = t != null && t.mapAsMap ? new Map : {};
    return je(t, s, this)
  }
  toString(e, t, s) {
    return e != null && e.doc ? Ge(this, e, t, s) : JSON.stringify(this)
  }
}

function Me(n, e, t) {
  return (e.inFlow ?? n.flow ? xe : ve)(n, e, t)
}

function ve({
  comment: n,
  items: e
}, t, {
  blockItemPrefix: s,
  flowChars: r,
  itemIndent: i,
  onChompKeep: o,
  onComment: l
}) {
  const {
    indent: f,
    options: {
      commentString: c
    }
  } = t, y = Object.assign({}, t, {
    indent: i,
    type: null
  });
  let h = !1;
  const g = [];
  for (let p = 0; p < e.length; ++p) {
    const u = e[p];
    let a = null;
    if (A(u)) !h && u.spaceBefore && g.push(""), x(t, g, u.commentBefore, h), u.comment && (a = u.comment);
    else if (E(u)) {
      const m = A(u.key) ? u.key : null;
      m && (!h && m.spaceBefore && g.push(""), x(t, g, m.commentBefore, h))
    }
    h = !1;
    let S = v(u, y, () => a = null, () => h = !0);
    a && (S += F(S, i, c(a))), h && a && (h = !1), g.push(s + S)
  }
  let d;
  if (g.length === 0) d = r.start + r.end;
  else {
    d = g[0];
    for (let p = 1; p < g.length; ++p) {
      const u = g[p];
      d += u ? `
${f}${u}` : `
`
    }
  }
  return n ? (d += `
` + W(c(n), f), l && l()) : h && o && o(), d
}

function xe({
  items: n
}, e, {
  flowChars: t,
  itemIndent: s
}) {
  const {
    indent: r,
    indentStep: i,
    flowCollectionPadding: o,
    options: {
      commentString: l
    }
  } = e;
  s += i;
  const f = Object.assign({}, e, {
    indent: s,
    inFlow: !0,
    type: null
  });
  let c = !1,
    y = 0;
  const h = [];
  for (let p = 0; p < n.length; ++p) {
    const u = n[p];
    let a = null;
    if (A(u)) u.spaceBefore && h.push(""), x(e, h, u.commentBefore, !1), u.comment && (a = u.comment);
    else if (E(u)) {
      const m = A(u.key) ? u.key : null;
      m && (m.spaceBefore && h.push(""), x(e, h, m.commentBefore, !1), m.comment && (c = !0));
      const b = A(u.value) ? u.value : null;
      b ? (b.comment && (a = b.comment), b.commentBefore && (c = !0)) : u.value == null && (m != null && m.comment) && (a = m.comment)
    }
    a && (c = !0);
    let S = v(u, f, () => a = null);
    p < n.length - 1 && (S += ","), a && (S += F(S, s, l(a))), !c && (h.length > y || S.includes(`
`)) && (c = !0), h.push(S), y = h.length
  }
  const {
    start: g,
    end: d
  } = t;
  if (h.length === 0) return g + d;
  if (!c) {
    const p = h.reduce((u, a) => u + a.length + 2, 2);
    c = e.options.lineWidth > 0 && p > e.options.lineWidth
  }
  if (c) {
    let p = g;
    for (const u of h) p += u ? `
${i}${r}${u}` : `
`;
    return `${p}
${r}${d}`
  } else return `${g}${o}${h.join(" ")}${o}${d}`
}

function x({
  indent: n,
  options: {
    commentString: e
  }
}, t, s, r) {
  if (s && r && (s = s.replace(/^\n+/, "")), s) {
    const i = W(e(s), n);
    t.push(i.trimStart())
  }
}

function D(n, e) {
  const t = $(e) ? e.value : e;
  for (const s of n)
    if (E(s) && (s.key === e || s.key === t || $(s.key) && s.key.value === t)) return s
}
class _ extends Le {
  static get tagName() {
    return "tag:yaml.org,2002:map"
  }
  constructor(e) {
    super(T, e), this.items = []
  }
  static from(e, t, s) {
    const {
      keepUndefined: r,
      replacer: i
    } = s, o = new this(e), l = (f, c) => {
      if (typeof i == "function") c = i.call(t, f, c);
      else if (Array.isArray(i) && !i.includes(f)) return;
      (c !== void 0 || r) && o.items.push(ge(f, c, s))
    };
    if (t instanceof Map)
      for (const [f, c] of t) l(f, c);
    else if (t && typeof t == "object")
      for (const f of Object.keys(t)) l(f, t[f]);
    return typeof e.sortMapEntries == "function" && o.items.sort(e.sortMapEntries), o
  }
  add(e, t) {
    var o;
    let s;
    E(e) ? s = e : !e || typeof e != "object" || !("key" in e) ? s = new C(e, e == null ? void 0 : e.value) : s = new C(e.key, e.value);
    const r = D(this.items, s.key),
      i = (o = this.schema) == null ? void 0 : o.sortMapEntries;
    if (r) {
      if (!t) throw new Error(`Key ${s.key} already set`);
      $(r.value) && Ae(s.value) ? r.value.value = s.value : r.value = s.value
    } else if (i) {
      const l = this.items.findIndex(f => i(s, f) < 0);
      l === -1 ? this.items.push(s) : this.items.splice(l, 0, s)
    } else this.items.push(s)
  }
  delete(e) {
    const t = D(this.items, e);
    return t ? this.items.splice(this.items.indexOf(t), 1).length > 0 : !1
  }
  get(e, t) {
    const s = D(this.items, e),
      r = s == null ? void 0 : s.value;
    return (!t && $(r) ? r.value : r) ?? void 0
  }
  has(e) {
    return !!D(this.items, e)
  }
  set(e, t) {
    this.add(new C(e, t), !0)
  }
  toJSON(e, t, s) {
    const r = s ? new s : t != null && t.mapAsMap ? new Map : {};
    t != null && t.onCreate && t.onCreate(r);
    for (const i of this.items) je(t, r, i);
    return r
  }
  toString(e, t, s) {
    if (!e) return JSON.stringify(this);
    for (const r of this.items)
      if (!E(r)) throw new Error(`Map items must all be pairs; found ${JSON.stringify(r)} instead`);
    return !e.allNullValues && this.hasAllNullValues(!1) && (e = Object.assign({}, e, {
      allNullValues: !0
    })), Me(this, e, {
      blockItemPrefix: "",
      flowChars: {
        start: "{",
        end: "}"
      },
      itemIndent: e.indent || "",
      onChompKeep: s,
      onComment: t
    })
  }
}
class Ce extends Le {
  static get tagName() {
    return "tag:yaml.org,2002:seq"
  }
  constructor(e) {
    super(Y, e), this.items = []
  }
  add(e) {
    this.items.push(e)
  }
  delete(e) {
    const t = z(e);
    return typeof t != "number" ? !1 : this.items.splice(t, 1).length > 0
  }
  get(e, t) {
    const s = z(e);
    if (typeof s != "number") return;
    const r = this.items[s];
    return !t && $(r) ? r.value : r
  }
  has(e) {
    const t = z(e);
    return typeof t == "number" && t < this.items.length
  }
  set(e, t) {
    const s = z(e);
    if (typeof s != "number") throw new Error(`Expected a valid index, not ${e}.`);
    const r = this.items[s];
    $(r) && Ae(t) ? r.value = t : this.items[s] = t
  }
  toJSON(e, t) {
    const s = [];
    t != null && t.onCreate && t.onCreate(s);
    let r = 0;
    for (const i of this.items) s.push(j(i, String(r++), t));
    return s
  }
  toString(e, t, s) {
    return e ? Me(this, e, {
      blockItemPrefix: "- ",
      flowChars: {
        start: "[",
        end: "]"
      },
      itemIndent: (e.indent || "") + "  ",
      onChompKeep: s,
      onComment: t
    }) : JSON.stringify(this)
  }
  static from(e, t, s) {
    const {
      replacer: r
    } = s, i = new this(e);
    if (t && Symbol.iterator in Object(t)) {
      let o = 0;
      for (let l of t) {
        if (typeof r == "function") {
          const f = t instanceof Set ? l : String(o++);
          l = r.call(t, f, l)
        }
        i.items.push(Z(l, void 0, s))
      }
    }
    return i
  }
}

function z(n) {
  let e = $(n) ? n.value : n;
  return e && typeof e == "string" && (e = Number(e)), typeof e == "number" && Number.isInteger(e) && e >= 0 ? e : null
}

function et(n, e, t) {
  const {
    replacer: s
  } = t, r = new Ce(n);
  r.tag = "tag:yaml.org,2002:pairs";
  let i = 0;
  if (e && Symbol.iterator in Object(e))
    for (let o of e) {
      typeof s == "function" && (o = s.call(e, String(i++), o));
      let l, f;
      if (Array.isArray(o))
        if (o.length === 2) l = o[0], f = o[1];
        else throw new TypeError(`Expected [key, value] tuple: ${o}`);
      else if (o && o instanceof Object) {
        const c = Object.keys(o);
        if (c.length === 1) l = c[0], f = o[l];
        else throw new TypeError(`Expected tuple with one key, not ${c.length} keys`)
      } else l = o;
      r.items.push(ge(l, f, t))
    }
  return r
}
class pe extends Ce {
  constructor() {
    super(), this.add = _.prototype.add.bind(this), this.delete = _.prototype.delete.bind(this), this.get = _.prototype.get.bind(this), this.has = _.prototype.has.bind(this), this.set = _.prototype.set.bind(this), this.tag = pe.tag
  }
  toJSON(e, t) {
    if (!t) return super.toJSON(e);
    const s = new Map;
    t != null && t.onCreate && t.onCreate(s);
    for (const r of this.items) {
      let i, o;
      if (E(r) ? (i = j(r.key, "", t), o = j(r.value, i, t)) : i = j(r, "", t), s.has(i)) throw new Error("Ordered maps must not include duplicate keys");
      s.set(i, o)
    }
    return s
  }
  static from(e, t, s) {
    const r = et(e, t, s),
      i = new this;
    return i.items = r.items, i
  }
}
pe.tag = "tag:yaml.org,2002:omap";
class ye extends _ {
  constructor(e) {
    super(e), this.tag = ye.tag
  }
  add(e) {
    let t;
    E(e) ? t = e : e && typeof e == "object" && "key" in e && "value" in e && e.value === null ? t = new C(e.key, null) : t = new C(e, null), D(this.items, t.key) || this.items.push(t)
  }
  get(e, t) {
    const s = D(this.items, e);
    return !t && E(s) ? $(s.key) ? s.key.value : s.key : s
  }
  set(e, t) {
    if (typeof t != "boolean") throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof t}`);
    const s = D(this.items, e);
    s && !t ? this.items.splice(this.items.indexOf(s), 1) : !s && t && this.items.push(new C(e))
  }
  toJSON(e, t) {
    return super.toJSON(e, t, Set)
  }
  toString(e, t, s) {
    if (!e) return JSON.stringify(this);
    if (this.hasAllNullValues(!0)) return super.toString(Object.assign({}, e, {
      allNullValues: !0
    }), t, s);
    throw new Error("Set items must all have null values")
  }
  static from(e, t, s) {
    const {
      replacer: r
    } = s, i = new this(e);
    if (t && Symbol.iterator in Object(t))
      for (let o of t) typeof r == "function" && (o = r.call(t, o, o)), i.items.push(ge(o, null, s));
    return i
  }
}
ye.tag = "tag:yaml.org,2002:set";
new Set("0123456789ABCDEFabcdef");
new Set("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()");
new Set(",[]{}");
new Set(` ,[]{}
\r	`);