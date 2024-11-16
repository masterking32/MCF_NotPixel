import {
  p as We
} from "./vite-plugin-node-polyfills-BVIVvkCX.js";
import {
  a as ze
} from "./@ledgerhq-BW4RAlPi.js";
import {
  l as Ze
} from "./lru-cache-3TXFCret.js";
var te = {
  exports: {}
};
const Ke = "2.0.0",
  _e = 256,
  Je = Number.MAX_SAFE_INTEGER || 9007199254740991,
  Qe = 16,
  er = _e - 6,
  rr = ["major", "premajor", "minor", "preminor", "patch", "prepatch", "prerelease"];
var Y = {
    MAX_LENGTH: _e,
    MAX_SAFE_COMPONENT_LENGTH: Qe,
    MAX_SAFE_BUILD_LENGTH: er,
    MAX_SAFE_INTEGER: Je,
    RELEASE_TYPES: rr,
    SEMVER_SPEC_VERSION: Ke,
    FLAG_INCLUDE_PRERELEASE: 1,
    FLAG_LOOSE: 2
  },
  Z = {};
const tr = typeof We == "object" && Z && Z.NODE_DEBUG && /\bsemver\b/i.test(Z.NODE_DEBUG) ? (...t) => console.error("SEMVER", ...t) : () => {};
var B = tr;
(function(t, r) {
  const {
    MAX_SAFE_COMPONENT_LENGTH: e,
    MAX_SAFE_BUILD_LENGTH: s,
    MAX_LENGTH: o
  } = Y, i = B;
  r = t.exports = {};
  const I = r.re = [],
    h = r.safeRe = [],
    n = r.src = [],
    a = r.t = {};
  let c = 0;
  const u = "[a-zA-Z0-9-]",
    v = [
      ["\\s", 1],
      ["\\d", o],
      [u, s]
    ],
    $ = G => {
      for (const [P, y] of v) G = G.split(`${P}*`).join(`${P}{0,${y}}`).split(`${P}+`).join(`${P}{1,${y}}`);
      return G
    },
    p = (G, P, y) => {
      const d = $(P),
        j = c++;
      i(G, j, P), a[G] = j, n[j] = P, I[j] = new RegExp(P, y ? "g" : void 0), h[j] = new RegExp(d, y ? "g" : void 0)
    };
  p("NUMERICIDENTIFIER", "0|[1-9]\\d*"), p("NUMERICIDENTIFIERLOOSE", "\\d+"), p("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${u}*`), p("MAINVERSION", `(${n[a.NUMERICIDENTIFIER]})\\.(${n[a.NUMERICIDENTIFIER]})\\.(${n[a.NUMERICIDENTIFIER]})`), p("MAINVERSIONLOOSE", `(${n[a.NUMERICIDENTIFIERLOOSE]})\\.(${n[a.NUMERICIDENTIFIERLOOSE]})\\.(${n[a.NUMERICIDENTIFIERLOOSE]})`), p("PRERELEASEIDENTIFIER", `(?:${n[a.NUMERICIDENTIFIER]}|${n[a.NONNUMERICIDENTIFIER]})`), p("PRERELEASEIDENTIFIERLOOSE", `(?:${n[a.NUMERICIDENTIFIERLOOSE]}|${n[a.NONNUMERICIDENTIFIER]})`), p("PRERELEASE", `(?:-(${n[a.PRERELEASEIDENTIFIER]}(?:\\.${n[a.PRERELEASEIDENTIFIER]})*))`), p("PRERELEASELOOSE", `(?:-?(${n[a.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${n[a.PRERELEASEIDENTIFIERLOOSE]})*))`), p("BUILDIDENTIFIER", `${u}+`), p("BUILD", `(?:\\+(${n[a.BUILDIDENTIFIER]}(?:\\.${n[a.BUILDIDENTIFIER]})*))`), p("FULLPLAIN", `v?${n[a.MAINVERSION]}${n[a.PRERELEASE]}?${n[a.BUILD]}?`), p("FULL", `^${n[a.FULLPLAIN]}$`), p("LOOSEPLAIN", `[v=\\s]*${n[a.MAINVERSIONLOOSE]}${n[a.PRERELEASELOOSE]}?${n[a.BUILD]}?`), p("LOOSE", `^${n[a.LOOSEPLAIN]}$`), p("GTLT", "((?:<|>)?=?)"), p("XRANGEIDENTIFIERLOOSE", `${n[a.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), p("XRANGEIDENTIFIER", `${n[a.NUMERICIDENTIFIER]}|x|X|\\*`), p("XRANGEPLAIN", `[v=\\s]*(${n[a.XRANGEIDENTIFIER]})(?:\\.(${n[a.XRANGEIDENTIFIER]})(?:\\.(${n[a.XRANGEIDENTIFIER]})(?:${n[a.PRERELEASE]})?${n[a.BUILD]}?)?)?`), p("XRANGEPLAINLOOSE", `[v=\\s]*(${n[a.XRANGEIDENTIFIERLOOSE]})(?:\\.(${n[a.XRANGEIDENTIFIERLOOSE]})(?:\\.(${n[a.XRANGEIDENTIFIERLOOSE]})(?:${n[a.PRERELEASELOOSE]})?${n[a.BUILD]}?)?)?`), p("XRANGE", `^${n[a.GTLT]}\\s*${n[a.XRANGEPLAIN]}$`), p("XRANGELOOSE", `^${n[a.GTLT]}\\s*${n[a.XRANGEPLAINLOOSE]}$`), p("COERCEPLAIN", `(^|[^\\d])(\\d{1,${e}})(?:\\.(\\d{1,${e}}))?(?:\\.(\\d{1,${e}}))?`), p("COERCE", `${n[a.COERCEPLAIN]}(?:$|[^\\d])`), p("COERCEFULL", n[a.COERCEPLAIN] + `(?:${n[a.PRERELEASE]})?(?:${n[a.BUILD]})?(?:$|[^\\d])`), p("COERCERTL", n[a.COERCE], !0), p("COERCERTLFULL", n[a.COERCEFULL], !0), p("LONETILDE", "(?:~>?)"), p("TILDETRIM", `(\\s*)${n[a.LONETILDE]}\\s+`, !0), r.tildeTrimReplace = "$1~", p("TILDE", `^${n[a.LONETILDE]}${n[a.XRANGEPLAIN]}$`), p("TILDELOOSE", `^${n[a.LONETILDE]}${n[a.XRANGEPLAINLOOSE]}$`), p("LONECARET", "(?:\\^)"), p("CARETTRIM", `(\\s*)${n[a.LONECARET]}\\s+`, !0), r.caretTrimReplace = "$1^", p("CARET", `^${n[a.LONECARET]}${n[a.XRANGEPLAIN]}$`), p("CARETLOOSE", `^${n[a.LONECARET]}${n[a.XRANGEPLAINLOOSE]}$`), p("COMPARATORLOOSE", `^${n[a.GTLT]}\\s*(${n[a.LOOSEPLAIN]})$|^$`), p("COMPARATOR", `^${n[a.GTLT]}\\s*(${n[a.FULLPLAIN]})$|^$`), p("COMPARATORTRIM", `(\\s*)${n[a.GTLT]}\\s*(${n[a.LOOSEPLAIN]}|${n[a.XRANGEPLAIN]})`, !0), r.comparatorTrimReplace = "$1$2$3", p("HYPHENRANGE", `^\\s*(${n[a.XRANGEPLAIN]})\\s+-\\s+(${n[a.XRANGEPLAIN]})\\s*$`), p("HYPHENRANGELOOSE", `^\\s*(${n[a.XRANGEPLAINLOOSE]})\\s+-\\s+(${n[a.XRANGEPLAINLOOSE]})\\s*$`), p("STAR", "(<|>)?=?\\s*\\*"), p("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), p("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$")
})(te, te.exports);
var x = te.exports;
const sr = Object.freeze({
    loose: !0
  }),
  nr = Object.freeze({}),
  ir = t => t ? typeof t != "object" ? sr : t : nr;
var se = ir;
const fe = /^[0-9]+$/,
  Ge = (t, r) => {
    const e = fe.test(t),
      s = fe.test(r);
    return e && s && (t = +t, r = +r), t === r ? 0 : e && !s ? -1 : s && !e ? 1 : t < r ? -1 : 1
  },
  ar = (t, r) => Ge(r, t);
var ye = {
  compareIdentifiers: Ge,
  rcompareIdentifiers: ar
};
const b = B,
  {
    MAX_LENGTH: ue,
    MAX_SAFE_INTEGER: H
  } = Y,
  {
    safeRe: $e,
    t: he
  } = x,
  or = se,
  {
    compareIdentifiers: F
  } = ye;
let lr = class _ {
  constructor(r, e) {
    if (e = or(e), r instanceof _) {
      if (r.loose === !!e.loose && r.includePrerelease === !!e.includePrerelease) return r;
      r = r.version
    } else if (typeof r != "string") throw new TypeError(`Invalid version. Must be a string. Got type "${typeof r}".`);
    if (r.length > ue) throw new TypeError(`version is longer than ${ue} characters`);
    b("SemVer", r, e), this.options = e, this.loose = !!e.loose, this.includePrerelease = !!e.includePrerelease;
    const s = r.trim().match(e.loose ? $e[he.LOOSE] : $e[he.FULL]);
    if (!s) throw new TypeError(`Invalid Version: ${r}`);
    if (this.raw = r, this.major = +s[1], this.minor = +s[2], this.patch = +s[3], this.major > H || this.major < 0) throw new TypeError("Invalid major version");
    if (this.minor > H || this.minor < 0) throw new TypeError("Invalid minor version");
    if (this.patch > H || this.patch < 0) throw new TypeError("Invalid patch version");
    s[4] ? this.prerelease = s[4].split(".").map(o => {
      if (/^[0-9]+$/.test(o)) {
        const i = +o;
        if (i >= 0 && i < H) return i
      }
      return o
    }) : this.prerelease = [], this.build = s[5] ? s[5].split(".") : [], this.format()
  }
  format() {
    return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version
  }
  toString() {
    return this.version
  }
  compare(r) {
    if (b("SemVer.compare", this.version, this.options, r), !(r instanceof _)) {
      if (typeof r == "string" && r === this.version) return 0;
      r = new _(r, this.options)
    }
    return r.version === this.version ? 0 : this.compareMain(r) || this.comparePre(r)
  }
  compareMain(r) {
    return r instanceof _ || (r = new _(r, this.options)), F(this.major, r.major) || F(this.minor, r.minor) || F(this.patch, r.patch)
  }
  comparePre(r) {
    if (r instanceof _ || (r = new _(r, this.options)), this.prerelease.length && !r.prerelease.length) return -1;
    if (!this.prerelease.length && r.prerelease.length) return 1;
    if (!this.prerelease.length && !r.prerelease.length) return 0;
    let e = 0;
    do {
      const s = this.prerelease[e],
        o = r.prerelease[e];
      if (b("prerelease compare", e, s, o), s === void 0 && o === void 0) return 0;
      if (o === void 0) return 1;
      if (s === void 0) return -1;
      if (s === o) continue;
      return F(s, o)
    } while (++e)
  }
  compareBuild(r) {
    r instanceof _ || (r = new _(r, this.options));
    let e = 0;
    do {
      const s = this.build[e],
        o = r.build[e];
      if (b("prerelease compare", e, s, o), s === void 0 && o === void 0) return 0;
      if (o === void 0) return 1;
      if (s === void 0) return -1;
      if (s === o) continue;
      return F(s, o)
    } while (++e)
  }
  inc(r, e, s) {
    switch (r) {
      case "premajor":
        this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", e, s);
        break;
      case "preminor":
        this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", e, s);
        break;
      case "prepatch":
        this.prerelease.length = 0, this.inc("patch", e, s), this.inc("pre", e, s);
        break;
      case "prerelease":
        this.prerelease.length === 0 && this.inc("patch", e, s), this.inc("pre", e, s);
        break;
      case "major":
        (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) && this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
        break;
      case "minor":
        (this.patch !== 0 || this.prerelease.length === 0) && this.minor++, this.patch = 0, this.prerelease = [];
        break;
      case "patch":
        this.prerelease.length === 0 && this.patch++, this.prerelease = [];
        break;
      case "pre": {
        const o = Number(s) ? 1 : 0;
        if (!e && s === !1) throw new Error("invalid increment argument: identifier is empty");
        if (this.prerelease.length === 0) this.prerelease = [o];
        else {
          let i = this.prerelease.length;
          for (; --i >= 0;) typeof this.prerelease[i] == "number" && (this.prerelease[i]++, i = -2);
          if (i === -1) {
            if (e === this.prerelease.join(".") && s === !1) throw new Error("invalid increment argument: identifier already exists");
            this.prerelease.push(o)
          }
        }
        if (e) {
          let i = [e, o];
          s === !1 && (i = [e]), F(this.prerelease[0], e) === 0 ? isNaN(this.prerelease[1]) && (this.prerelease = i) : this.prerelease = i
        }
        break
      }
      default:
        throw new Error(`invalid increment argument: ${r}`)
    }
    return this.raw = this.format(), this.build.length && (this.raw += `+${this.build.join(".")}`), this
  }
};
var w = lr;
const pe = w,
  cr = (t, r, e = !1) => {
    if (t instanceof pe) return t;
    try {
      return new pe(t, r)
    } catch (s) {
      if (!e) return null;
      throw s
    }
  };
var X = cr;
const Er = X,
  fr = (t, r) => {
    const e = Er(t, r);
    return e ? e.version : null
  };
var ur = fr;
const $r = X,
  hr = (t, r) => {
    const e = $r(t.trim().replace(/^[=v]+/, ""), r);
    return e ? e.version : null
  };
var pr = hr;
const me = w,
  mr = (t, r, e, s, o) => {
    typeof e == "string" && (o = s, s = e, e = void 0);
    try {
      return new me(t instanceof me ? t.version : t, e).inc(r, s, o).version
    } catch {
      return null
    }
  };
var Rr = mr;
const Re = X,
  Ir = (t, r) => {
    const e = Re(t, null, !0),
      s = Re(r, null, !0),
      o = e.compare(s);
    if (o === 0) return null;
    const i = o > 0,
      I = i ? e : s,
      h = i ? s : e,
      n = !!I.prerelease.length;
    if (!!h.prerelease.length && !n) return !h.patch && !h.minor ? "major" : I.patch ? "patch" : I.minor ? "minor" : "major";
    const c = n ? "pre" : "";
    return e.major !== s.major ? c + "major" : e.minor !== s.minor ? c + "minor" : e.patch !== s.patch ? c + "patch" : "prerelease"
  };
var Lr = Ir;
const Nr = w,
  Or = (t, r) => new Nr(t, r).major;
var Sr = Or;
const vr = w,
  Ar = (t, r) => new vr(t, r).minor;
var Tr = Ar;
const dr = w,
  wr = (t, r) => new dr(t, r).patch;
var gr = wr;
const Pr = X,
  Cr = (t, r) => {
    const e = Pr(t, r);
    return e && e.prerelease.length ? e.prerelease : null
  };
var Dr = Cr;
const Ie = w,
  _r = (t, r, e) => new Ie(t, e).compare(new Ie(r, e));
var C = _r;
const Gr = C,
  yr = (t, r, e) => Gr(r, t, e);
var jr = yr;
const Fr = C,
  Xr = (t, r) => Fr(t, r, !0);
var Ur = Xr;
const Le = w,
  Vr = (t, r, e) => {
    const s = new Le(t, e),
      o = new Le(r, e);
    return s.compare(o) || s.compareBuild(o)
  };
var ne = Vr;
const xr = ne,
  br = (t, r) => t.sort((e, s) => xr(e, s, r));
var Hr = br;
const kr = ne,
  qr = (t, r) => t.sort((e, s) => kr(s, e, r));
var Yr = qr;
const Br = C,
  Mr = (t, r, e) => Br(t, r, e) > 0;
var M = Mr;
const Wr = C,
  zr = (t, r, e) => Wr(t, r, e) < 0;
var ie = zr;
const Zr = C,
  Kr = (t, r, e) => Zr(t, r, e) === 0;
var je = Kr;
const Jr = C,
  Qr = (t, r, e) => Jr(t, r, e) !== 0;
var Fe = Qr;
const et = C,
  rt = (t, r, e) => et(t, r, e) >= 0;
var ae = rt;
const tt = C,
  st = (t, r, e) => tt(t, r, e) <= 0;
var oe = st;
const nt = je,
  it = Fe,
  at = M,
  ot = ae,
  lt = ie,
  ct = oe,
  Et = (t, r, e, s) => {
    switch (r) {
      case "===":
        return typeof t == "object" && (t = t.version), typeof e == "object" && (e = e.version), t === e;
      case "!==":
        return typeof t == "object" && (t = t.version), typeof e == "object" && (e = e.version), t !== e;
      case "":
      case "=":
      case "==":
        return nt(t, e, s);
      case "!=":
        return it(t, e, s);
      case ">":
        return at(t, e, s);
      case ">=":
        return ot(t, e, s);
      case "<":
        return lt(t, e, s);
      case "<=":
        return ct(t, e, s);
      default:
        throw new TypeError(`Invalid operator: ${r}`)
    }
  };
var Xe = Et;
const ft = w,
  ut = X,
  {
    safeRe: k,
    t: q
  } = x,
  $t = (t, r) => {
    if (t instanceof ft) return t;
    if (typeof t == "number" && (t = String(t)), typeof t != "string") return null;
    r = r || {};
    let e = null;
    if (!r.rtl) e = t.match(r.includePrerelease ? k[q.COERCEFULL] : k[q.COERCE]);
    else {
      const n = r.includePrerelease ? k[q.COERCERTLFULL] : k[q.COERCERTL];
      let a;
      for (;
        (a = n.exec(t)) && (!e || e.index + e[0].length !== t.length);)(!e || a.index + a[0].length !== e.index + e[0].length) && (e = a), n.lastIndex = a.index + a[1].length + a[2].length;
      n.lastIndex = -1
    }
    if (e === null) return null;
    const s = e[2],
      o = e[3] || "0",
      i = e[4] || "0",
      I = r.includePrerelease && e[5] ? `-${e[5]}` : "",
      h = r.includePrerelease && e[6] ? `+${e[6]}` : "";
    return ut(`${s}.${o}.${i}${I}${h}`, r)
  };
var ht = $t,
  K, Ne;

function D() {
  if (Ne) return K;
  Ne = 1;
  class t {
    constructor(l, L) {
      if (L = s(L), l instanceof t) return l.loose === !!L.loose && l.includePrerelease === !!L.includePrerelease ? l : new t(l.raw, L);
      if (l instanceof o) return this.raw = l.value, this.set = [
        [l]
      ], this.format(), this;
      if (this.options = L, this.loose = !!L.loose, this.includePrerelease = !!L.includePrerelease, this.raw = l.trim().split(/\s+/).join(" "), this.set = this.raw.split("||").map(m => this.parseRange(m.trim())).filter(m => m.length), !this.set.length) throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
      if (this.set.length > 1) {
        const m = this.set[0];
        if (this.set = this.set.filter(R => !p(R[0])), this.set.length === 0) this.set = [m];
        else if (this.set.length > 1) {
          for (const R of this.set)
            if (R.length === 1 && G(R[0])) {
              this.set = [R];
              break
            }
        }
      }
      this.format()
    }
    format() {
      return this.range = this.set.map(l => l.join(" ").trim()).join("||").trim(), this.range
    }
    toString() {
      return this.range
    }
    parseRange(l) {
      const m = ((this.options.includePrerelease && v) | (this.options.loose && $)) + ":" + l,
        R = e.get(m);
      if (R) return R;
      const f = this.options.loose,
        N = f ? h[n.HYPHENRANGELOOSE] : h[n.HYPHENRANGE];
      l = l.replace(N, Be(this.options.includePrerelease)), i("hyphen replace", l), l = l.replace(h[n.COMPARATORTRIM], a), i("comparator trim", l), l = l.replace(h[n.TILDETRIM], c), i("tilde trim", l), l = l.replace(h[n.CARETTRIM], u), i("caret trim", l);
      let S = l.split(" ").map(T => y(T, this.options)).join(" ").split(/\s+/).map(T => Ye(T, this.options));
      f && (S = S.filter(T => (i("loose invalid filter", T, this.options), !!T.match(h[n.COMPARATORLOOSE])))), i("range list", S);
      const O = new Map,
        A = S.map(T => new o(T, this.options));
      for (const T of A) {
        if (p(T)) return [T];
        O.set(T.value, T)
      }
      O.size > 1 && O.has("") && O.delete("");
      const g = [...O.values()];
      return e.set(m, g), g
    }
    intersects(l, L) {
      if (!(l instanceof t)) throw new TypeError("a Range is required");
      return this.set.some(m => P(m, L) && l.set.some(R => P(R, L) && m.every(f => R.every(N => f.intersects(N, L)))))
    }
    test(l) {
      if (!l) return !1;
      if (typeof l == "string") try {
        l = new I(l, this.options)
      } catch {
        return !1
      }
      for (let L = 0; L < this.set.length; L++)
        if (Me(this.set[L], l, this.options)) return !0;
      return !1
    }
  }
  K = t;
  const r = Ze,
    e = new r({
      max: 1e3
    }),
    s = se,
    o = W(),
    i = B,
    I = w,
    {
      safeRe: h,
      t: n,
      comparatorTrimReplace: a,
      tildeTrimReplace: c,
      caretTrimReplace: u
    } = x,
    {
      FLAG_INCLUDE_PRERELEASE: v,
      FLAG_LOOSE: $
    } = Y,
    p = E => E.value === "<0.0.0-0",
    G = E => E.value === "",
    P = (E, l) => {
      let L = !0;
      const m = E.slice();
      let R = m.pop();
      for (; L && m.length;) L = m.every(f => R.intersects(f, l)), R = m.pop();
      return L
    },
    y = (E, l) => (i("comp", E, l), E = xe(E, l), i("caret", E), E = j(E, l), i("tildes", E), E = He(E, l), i("xrange", E), E = qe(E, l), i("stars", E), E),
    d = E => !E || E.toLowerCase() === "x" || E === "*",
    j = (E, l) => E.trim().split(/\s+/).map(L => Ve(L, l)).join(" "),
    Ve = (E, l) => {
      const L = l.loose ? h[n.TILDELOOSE] : h[n.TILDE];
      return E.replace(L, (m, R, f, N, S) => {
        i("tilde", E, m, R, f, N, S);
        let O;
        return d(R) ? O = "" : d(f) ? O = `>=${R}.0.0 <${+R+1}.0.0-0` : d(N) ? O = `>=${R}.${f}.0 <${R}.${+f+1}.0-0` : S ? (i("replaceTilde pr", S), O = `>=${R}.${f}.${N}-${S} <${R}.${+f+1}.0-0`) : O = `>=${R}.${f}.${N} <${R}.${+f+1}.0-0`, i("tilde return", O), O
      })
    },
    xe = (E, l) => E.trim().split(/\s+/).map(L => be(L, l)).join(" "),
    be = (E, l) => {
      i("caret", E, l);
      const L = l.loose ? h[n.CARETLOOSE] : h[n.CARET],
        m = l.includePrerelease ? "-0" : "";
      return E.replace(L, (R, f, N, S, O) => {
        i("caret", E, R, f, N, S, O);
        let A;
        return d(f) ? A = "" : d(N) ? A = `>=${f}.0.0${m} <${+f+1}.0.0-0` : d(S) ? f === "0" ? A = `>=${f}.${N}.0${m} <${f}.${+N+1}.0-0` : A = `>=${f}.${N}.0${m} <${+f+1}.0.0-0` : O ? (i("replaceCaret pr", O), f === "0" ? N === "0" ? A = `>=${f}.${N}.${S}-${O} <${f}.${N}.${+S+1}-0` : A = `>=${f}.${N}.${S}-${O} <${f}.${+N+1}.0-0` : A = `>=${f}.${N}.${S}-${O} <${+f+1}.0.0-0`) : (i("no pr"), f === "0" ? N === "0" ? A = `>=${f}.${N}.${S}${m} <${f}.${N}.${+S+1}-0` : A = `>=${f}.${N}.${S}${m} <${f}.${+N+1}.0-0` : A = `>=${f}.${N}.${S} <${+f+1}.0.0-0`), i("caret return", A), A
      })
    },
    He = (E, l) => (i("replaceXRanges", E, l), E.split(/\s+/).map(L => ke(L, l)).join(" ")),
    ke = (E, l) => {
      E = E.trim();
      const L = l.loose ? h[n.XRANGELOOSE] : h[n.XRANGE];
      return E.replace(L, (m, R, f, N, S, O) => {
        i("xRange", E, m, R, f, N, S, O);
        const A = d(f),
          g = A || d(N),
          T = g || d(S),
          U = T;
        return R === "=" && U && (R = ""), O = l.includePrerelease ? "-0" : "", A ? R === ">" || R === "<" ? m = "<0.0.0-0" : m = "*" : R && U ? (g && (N = 0), S = 0, R === ">" ? (R = ">=", g ? (f = +f + 1, N = 0, S = 0) : (N = +N + 1, S = 0)) : R === "<=" && (R = "<", g ? f = +f + 1 : N = +N + 1), R === "<" && (O = "-0"), m = `${R+f}.${N}.${S}${O}`) : g ? m = `>=${f}.0.0${O} <${+f+1}.0.0-0` : T && (m = `>=${f}.${N}.0${O} <${f}.${+N+1}.0-0`), i("xRange return", m), m
      })
    },
    qe = (E, l) => (i("replaceStars", E, l), E.trim().replace(h[n.STAR], "")),
    Ye = (E, l) => (i("replaceGTE0", E, l), E.trim().replace(h[l.includePrerelease ? n.GTE0PRE : n.GTE0], "")),
    Be = E => (l, L, m, R, f, N, S, O, A, g, T, U, bs) => (d(m) ? L = "" : d(R) ? L = `>=${m}.0.0${E?"-0":""}` : d(f) ? L = `>=${m}.${R}.0${E?"-0":""}` : N ? L = `>=${L}` : L = `>=${L}${E?"-0":""}`, d(A) ? O = "" : d(g) ? O = `<${+A+1}.0.0-0` : d(T) ? O = `<${A}.${+g+1}.0-0` : U ? O = `<=${A}.${g}.${T}-${U}` : E ? O = `<${A}.${g}.${+T+1}-0` : O = `<=${O}`, `${L} ${O}`.trim()),
    Me = (E, l, L) => {
      for (let m = 0; m < E.length; m++)
        if (!E[m].test(l)) return !1;
      if (l.prerelease.length && !L.includePrerelease) {
        for (let m = 0; m < E.length; m++)
          if (i(E[m].semver), E[m].semver !== o.ANY && E[m].semver.prerelease.length > 0) {
            const R = E[m].semver;
            if (R.major === l.major && R.minor === l.minor && R.patch === l.patch) return !0
          } return !1
      }
      return !0
    };
  return K
}
var J, Oe;

function W() {
  if (Oe) return J;
  Oe = 1;
  const t = Symbol("SemVer ANY");
  class r {
    static get ANY() {
      return t
    }
    constructor(c, u) {
      if (u = e(u), c instanceof r) {
        if (c.loose === !!u.loose) return c;
        c = c.value
      }
      c = c.trim().split(/\s+/).join(" "), I("comparator", c, u), this.options = u, this.loose = !!u.loose, this.parse(c), this.semver === t ? this.value = "" : this.value = this.operator + this.semver.version, I("comp", this)
    }
    parse(c) {
      const u = this.options.loose ? s[o.COMPARATORLOOSE] : s[o.COMPARATOR],
        v = c.match(u);
      if (!v) throw new TypeError(`Invalid comparator: ${c}`);
      this.operator = v[1] !== void 0 ? v[1] : "", this.operator === "=" && (this.operator = ""), v[2] ? this.semver = new h(v[2], this.options.loose) : this.semver = t
    }
    toString() {
      return this.value
    }
    test(c) {
      if (I("Comparator.test", c, this.options.loose), this.semver === t || c === t) return !0;
      if (typeof c == "string") try {
        c = new h(c, this.options)
      } catch {
        return !1
      }
      return i(c, this.operator, this.semver, this.options)
    }
    intersects(c, u) {
      if (!(c instanceof r)) throw new TypeError("a Comparator is required");
      return this.operator === "" ? this.value === "" ? !0 : new n(c.value, u).test(this.value) : c.operator === "" ? c.value === "" ? !0 : new n(this.value, u).test(c.semver) : (u = e(u), u.includePrerelease && (this.value === "<0.0.0-0" || c.value === "<0.0.0-0") || !u.includePrerelease && (this.value.startsWith("<0.0.0") || c.value.startsWith("<0.0.0")) ? !1 : !!(this.operator.startsWith(">") && c.operator.startsWith(">") || this.operator.startsWith("<") && c.operator.startsWith("<") || this.semver.version === c.semver.version && this.operator.includes("=") && c.operator.includes("=") || i(this.semver, "<", c.semver, u) && this.operator.startsWith(">") && c.operator.startsWith("<") || i(this.semver, ">", c.semver, u) && this.operator.startsWith("<") && c.operator.startsWith(">")))
    }
  }
  J = r;
  const e = se,
    {
      safeRe: s,
      t: o
    } = x,
    i = Xe,
    I = B,
    h = w,
    n = D();
  return J
}
const pt = D(),
  mt = (t, r, e) => {
    try {
      r = new pt(r, e)
    } catch {
      return !1
    }
    return r.test(t)
  };
var z = mt;
const Rt = D(),
  It = (t, r) => new Rt(t, r).set.map(e => e.map(s => s.value).join(" ").trim().split(" "));
var Lt = It;
const Nt = w,
  Ot = D(),
  St = (t, r, e) => {
    let s = null,
      o = null,
      i = null;
    try {
      i = new Ot(r, e)
    } catch {
      return null
    }
    return t.forEach(I => {
      i.test(I) && (!s || o.compare(I) === -1) && (s = I, o = new Nt(s, e))
    }), s
  };
var vt = St;
const At = w,
  Tt = D(),
  dt = (t, r, e) => {
    let s = null,
      o = null,
      i = null;
    try {
      i = new Tt(r, e)
    } catch {
      return null
    }
    return t.forEach(I => {
      i.test(I) && (!s || o.compare(I) === 1) && (s = I, o = new At(s, e))
    }), s
  };
var wt = dt;
const Q = w,
  gt = D(),
  Se = M,
  Pt = (t, r) => {
    t = new gt(t, r);
    let e = new Q("0.0.0");
    if (t.test(e) || (e = new Q("0.0.0-0"), t.test(e))) return e;
    e = null;
    for (let s = 0; s < t.set.length; ++s) {
      const o = t.set[s];
      let i = null;
      o.forEach(I => {
        const h = new Q(I.semver.version);
        switch (I.operator) {
          case ">":
            h.prerelease.length === 0 ? h.patch++ : h.prerelease.push(0), h.raw = h.format();
          case "":
          case ">=":
            (!i || Se(h, i)) && (i = h);
            break;
          case "<":
          case "<=":
            break;
          default:
            throw new Error(`Unexpected operation: ${I.operator}`)
        }
      }), i && (!e || Se(e, i)) && (e = i)
    }
    return e && t.test(e) ? e : null
  };
var Ct = Pt;
const Dt = D(),
  _t = (t, r) => {
    try {
      return new Dt(t, r).range || "*"
    } catch {
      return null
    }
  };
var Gt = _t;
const yt = w,
  Ue = W(),
  {
    ANY: jt
  } = Ue,
  Ft = D(),
  Xt = z,
  ve = M,
  Ae = ie,
  Ut = oe,
  Vt = ae,
  xt = (t, r, e, s) => {
    t = new yt(t, s), r = new Ft(r, s);
    let o, i, I, h, n;
    switch (e) {
      case ">":
        o = ve, i = Ut, I = Ae, h = ">", n = ">=";
        break;
      case "<":
        o = Ae, i = Vt, I = ve, h = "<", n = "<=";
        break;
      default:
        throw new TypeError('Must provide a hilo val of "<" or ">"')
    }
    if (Xt(t, r, s)) return !1;
    for (let a = 0; a < r.set.length; ++a) {
      const c = r.set[a];
      let u = null,
        v = null;
      if (c.forEach($ => {
          $.semver === jt && ($ = new Ue(">=0.0.0")), u = u || $, v = v || $, o($.semver, u.semver, s) ? u = $ : I($.semver, v.semver, s) && (v = $)
        }), u.operator === h || u.operator === n || (!v.operator || v.operator === h) && i(t, v.semver)) return !1;
      if (v.operator === n && I(t, v.semver)) return !1
    }
    return !0
  };
var le = xt;
const bt = le,
  Ht = (t, r, e) => bt(t, r, ">", e);
var kt = Ht;
const qt = le,
  Yt = (t, r, e) => qt(t, r, "<", e);
var Bt = Yt;
const Te = D(),
  Mt = (t, r, e) => (t = new Te(t, e), r = new Te(r, e), t.intersects(r, e));
var Wt = Mt;
const zt = z,
  Zt = C;
var Kt = (t, r, e) => {
  const s = [];
  let o = null,
    i = null;
  const I = t.sort((c, u) => Zt(c, u, e));
  for (const c of I) zt(c, r, e) ? (i = c, o || (o = c)) : (i && s.push([o, i]), i = null, o = null);
  o && s.push([o, null]);
  const h = [];
  for (const [c, u] of s) c === u ? h.push(c) : !u && c === I[0] ? h.push("*") : u ? c === I[0] ? h.push(`<=${u}`) : h.push(`${c} - ${u}`) : h.push(`>=${c}`);
  const n = h.join(" || "),
    a = typeof r.raw == "string" ? r.raw : String(r);
  return n.length < a.length ? n : r
};
const de = D(),
  ce = W(),
  {
    ANY: ee
  } = ce,
  V = z,
  Ee = C,
  Jt = (t, r, e = {}) => {
    if (t === r) return !0;
    t = new de(t, e), r = new de(r, e);
    let s = !1;
    e: for (const o of t.set) {
      for (const i of r.set) {
        const I = es(o, i, e);
        if (s = s || I !== null, I) continue e
      }
      if (s) return !1
    }
    return !0
  },
  Qt = [new ce(">=0.0.0-0")],
  we = [new ce(">=0.0.0")],
  es = (t, r, e) => {
    if (t === r) return !0;
    if (t.length === 1 && t[0].semver === ee) {
      if (r.length === 1 && r[0].semver === ee) return !0;
      e.includePrerelease ? t = Qt : t = we
    }
    if (r.length === 1 && r[0].semver === ee) {
      if (e.includePrerelease) return !0;
      r = we
    }
    const s = new Set;
    let o, i;
    for (const $ of t) $.operator === ">" || $.operator === ">=" ? o = ge(o, $, e) : $.operator === "<" || $.operator === "<=" ? i = Pe(i, $, e) : s.add($.semver);
    if (s.size > 1) return null;
    let I;
    if (o && i) {
      if (I = Ee(o.semver, i.semver, e), I > 0) return null;
      if (I === 0 && (o.operator !== ">=" || i.operator !== "<=")) return null
    }
    for (const $ of s) {
      if (o && !V($, String(o), e) || i && !V($, String(i), e)) return null;
      for (const p of r)
        if (!V($, String(p), e)) return !1;
      return !0
    }
    let h, n, a, c, u = i && !e.includePrerelease && i.semver.prerelease.length ? i.semver : !1,
      v = o && !e.includePrerelease && o.semver.prerelease.length ? o.semver : !1;
    u && u.prerelease.length === 1 && i.operator === "<" && u.prerelease[0] === 0 && (u = !1);
    for (const $ of r) {
      if (c = c || $.operator === ">" || $.operator === ">=", a = a || $.operator === "<" || $.operator === "<=", o) {
        if (v && $.semver.prerelease && $.semver.prerelease.length && $.semver.major === v.major && $.semver.minor === v.minor && $.semver.patch === v.patch && (v = !1), $.operator === ">" || $.operator === ">=") {
          if (h = ge(o, $, e), h === $ && h !== o) return !1
        } else if (o.operator === ">=" && !V(o.semver, String($), e)) return !1
      }
      if (i) {
        if (u && $.semver.prerelease && $.semver.prerelease.length && $.semver.major === u.major && $.semver.minor === u.minor && $.semver.patch === u.patch && (u = !1), $.operator === "<" || $.operator === "<=") {
          if (n = Pe(i, $, e), n === $ && n !== i) return !1
        } else if (i.operator === "<=" && !V(i.semver, String($), e)) return !1
      }
      if (!$.operator && (i || o) && I !== 0) return !1
    }
    return !(o && a && !i && I !== 0 || i && c && !o && I !== 0 || v || u)
  },
  ge = (t, r, e) => {
    if (!t) return r;
    const s = Ee(t.semver, r.semver, e);
    return s > 0 ? t : s < 0 || r.operator === ">" && t.operator === ">=" ? r : t
  },
  Pe = (t, r, e) => {
    if (!t) return r;
    const s = Ee(t.semver, r.semver, e);
    return s < 0 ? t : s > 0 || r.operator === "<" && t.operator === "<=" ? r : t
  };
var rs = Jt;
const re = x,
  Ce = Y,
  ts = w,
  De = ye,
  ss = X,
  ns = ur,
  is = pr,
  as = Rr,
  os = Lr,
  ls = Sr,
  cs = Tr,
  Es = gr,
  fs = Dr,
  us = C,
  $s = jr,
  hs = Ur,
  ps = ne,
  ms = Hr,
  Rs = Yr,
  Is = M,
  Ls = ie,
  Ns = je,
  Os = Fe,
  Ss = ae,
  vs = oe,
  As = Xe,
  Ts = ht,
  ds = W(),
  ws = D(),
  gs = z,
  Ps = Lt,
  Cs = vt,
  Ds = wt,
  _s = Ct,
  Gs = Gt,
  ys = le,
  js = kt,
  Fs = Bt,
  Xs = Wt,
  Us = Kt,
  Vs = rs;
var xs = {
  parse: ss,
  valid: ns,
  clean: is,
  inc: as,
  diff: os,
  major: ls,
  minor: cs,
  patch: Es,
  prerelease: fs,
  compare: us,
  rcompare: $s,
  compareLoose: hs,
  compareBuild: ps,
  sort: ms,
  rsort: Rs,
  gt: Is,
  lt: Ls,
  eq: Ns,
  neq: Os,
  gte: Ss,
  lte: vs,
  cmp: As,
  coerce: Ts,
  Comparator: ds,
  Range: ws,
  satisfies: gs,
  toComparators: Ps,
  maxSatisfying: Cs,
  minSatisfying: Ds,
  minVersion: _s,
  validRange: Gs,
  outside: ys,
  gtr: js,
  ltr: Fs,
  intersects: Xs,
  simplifyRange: Us,
  subset: Vs,
  SemVer: ts,
  re: re.re,
  src: re.src,
  tokens: re.t,
  SEMVER_SPEC_VERSION: Ce.SEMVER_SPEC_VERSION,
  RELEASE_TYPES: Ce.RELEASE_TYPES,
  compareIdentifiers: De.compareIdentifiers,
  rcompareIdentifiers: De.rcompareIdentifiers
};
const Ys = ze(xs);
export {
  Ys as s
};