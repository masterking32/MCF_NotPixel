function i(r) {
  return r.charAt(0) === "/"
}

function h(r, n) {
  for (var s = n, e = s + 1, t = r.length; e < t; s += 1, e += 1) r[s] = r[e];
  r.pop()
}

function o(r, n) {
  n === void 0 && (n = "");
  var s = r && r.split("/") || [],
    e = n && n.split("/") || [],
    t = r && i(r),
    g = n && i(n),
    p = t || g;
  if (r && i(r) ? e = s : s.length && (e.pop(), e = e.concat(s)), !e.length) return "/";
  var l;
  if (e.length) {
    var u = e[e.length - 1];
    l = u === "." || u === ".." || u === ""
  } else l = !1;
  for (var f = 0, a = e.length; a >= 0; a--) {
    var c = e[a];
    c === "." ? h(e, a) : c === ".." ? (h(e, a), f++) : f && (h(e, a), f--)
  }
  if (!p)
    for (; f--; f) e.unshift("..");
  p && e[0] !== "" && (!e[0] || !i(e[0])) && e.unshift("");
  var v = e.join("/");
  return l && v.substr(-1) !== "/" && (v += "/"), v
}
export {
  o as r
};