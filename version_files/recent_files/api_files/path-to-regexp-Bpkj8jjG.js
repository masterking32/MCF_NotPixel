import {
  a as F
} from "./@ledgerhq-BW4RAlPi.js";
import {
  i as P
} from "./isarray-Dmh8zLWU.js";
var h = {
    exports: {}
  },
  E = P;
h.exports = U;
h.exports.parse = m;
h.exports.compile = J;
h.exports.tokensToFunction = b;
h.exports.tokensToRegExp = C;
var G = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"), "g");

function m(r, e) {
  for (var a = [], p = 0, c = 0, n = "", u = e && e.delimiter || "/", i;
    (i = G.exec(r)) != null;) {
    var g = i[0],
      f = i[1],
      l = i.index;
    if (n += r.slice(c, l), c = l + g.length, f) {
      n += f[1];
      continue
    }
    var t = r[c],
      o = i[2],
      v = i[3],
      x = i[4],
      A = i[5],
      s = i[6],
      T = i[7];
    n && (a.push(n), n = "");
    var S = o != null && t != null && t !== o,
      I = s === "+" || s === "*",
      D = s === "?" || s === "*",
      $ = i[2] || u,
      y = x || A;
    a.push({
      name: v || p++,
      prefix: o || "",
      delimiter: $,
      optional: D,
      repeat: I,
      partial: S,
      asterisk: !!T,
      pattern: y ? j(y) : T ? ".*" : "[^" + d($) + "]+?"
    })
  }
  return c < r.length && (n += r.substr(c)), n && a.push(n), a
}

function J(r, e) {
  return b(m(r, e), e)
}

function N(r) {
  return encodeURI(r).replace(/[\/?#]/g, function(e) {
    return "%" + e.charCodeAt(0).toString(16).toUpperCase()
  })
}

function O(r) {
  return encodeURI(r).replace(/[?#]/g, function(e) {
    return "%" + e.charCodeAt(0).toString(16).toUpperCase()
  })
}

function b(r, e) {
  for (var a = new Array(r.length), p = 0; p < r.length; p++) typeof r[p] == "object" && (a[p] = new RegExp("^(?:" + r[p].pattern + ")$", w(e)));
  return function(c, n) {
    for (var u = "", i = c || {}, g = n || {}, f = g.pretty ? N : encodeURIComponent, l = 0; l < r.length; l++) {
      var t = r[l];
      if (typeof t == "string") {
        u += t;
        continue
      }
      var o = i[t.name],
        v;
      if (o == null)
        if (t.optional) {
          t.partial && (u += t.prefix);
          continue
        } else throw new TypeError('Expected "' + t.name + '" to be defined');
      if (E(o)) {
        if (!t.repeat) throw new TypeError('Expected "' + t.name + '" to not repeat, but received `' + JSON.stringify(o) + "`");
        if (o.length === 0) {
          if (t.optional) continue;
          throw new TypeError('Expected "' + t.name + '" to not be empty')
        }
        for (var x = 0; x < o.length; x++) {
          if (v = f(o[x]), !a[l].test(v)) throw new TypeError('Expected all "' + t.name + '" to match "' + t.pattern + '", but received `' + JSON.stringify(v) + "`");
          u += (x === 0 ? t.prefix : t.delimiter) + v
        }
        continue
      }
      if (v = t.asterisk ? O(o) : f(o), !a[l].test(v)) throw new TypeError('Expected "' + t.name + '" to match "' + t.pattern + '", but received "' + v + '"');
      u += t.prefix + v
    }
    return u
  }
}

function d(r) {
  return r.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1")
}

function j(r) {
  return r.replace(/([=!:$\/()])/g, "\\$1")
}

function R(r, e) {
  return r.keys = e, r
}

function w(r) {
  return r && r.sensitive ? "" : "i"
}

function H(r, e) {
  var a = r.source.match(/\((?!\?)/g);
  if (a)
    for (var p = 0; p < a.length; p++) e.push({
      name: p,
      prefix: null,
      delimiter: null,
      optional: !1,
      repeat: !1,
      partial: !1,
      asterisk: !1,
      pattern: null
    });
  return R(r, e)
}

function K(r, e, a) {
  for (var p = [], c = 0; c < r.length; c++) p.push(U(r[c], e, a).source);
  var n = new RegExp("(?:" + p.join("|") + ")", w(a));
  return R(n, e)
}

function W(r, e, a) {
  return C(m(r, a), e, a)
}

function C(r, e, a) {
  E(e) || (a = e || a, e = []), a = a || {};
  for (var p = a.strict, c = a.end !== !1, n = "", u = 0; u < r.length; u++) {
    var i = r[u];
    if (typeof i == "string") n += d(i);
    else {
      var g = d(i.prefix),
        f = "(?:" + i.pattern + ")";
      e.push(i), i.repeat && (f += "(?:" + g + f + ")*"), i.optional ? i.partial ? f = g + "(" + f + ")?" : f = "(?:" + g + "(" + f + "))?" : f = g + "(" + f + ")", n += f
    }
  }
  var l = d(a.delimiter || "/"),
    t = n.slice(-l.length) === l;
  return p || (n = (t ? n.slice(0, -l.length) : n) + "(?:" + l + "(?=$))?"), c ? n += "$" : n += p && t ? "" : "(?=" + l + "|$)", R(new RegExp("^" + n, w(a)), e)
}

function U(r, e, a) {
  return E(e) || (a = e || a, e = []), a = a || {}, r instanceof RegExp ? H(r, e) : E(r) ? K(r, e, a) : W(r, e, a)
}
var X = h.exports;
const z = F(X);
export {
  z as p
};