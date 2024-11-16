import {
  e as E
} from "./void-elements-CbcVFbPk.js";
var O = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;

function v(e) {
  var t = {
      type: "tag",
      name: "",
      voidElement: !1,
      attrs: {},
      children: []
    },
    n = e.match(/<\/?([^\s]+?)[/\s>]/);
  if (n && (t.name = n[1], (E[n[1]] || e.charAt(e.length - 2) === "/") && (t.voidElement = !0), t.name.startsWith("!--"))) {
    var i = e.indexOf("-->");
    return {
      type: "comment",
      comment: i !== -1 ? e.slice(4, i) : ""
    }
  }
  for (var s = new RegExp(O), r = null;
    (r = s.exec(e)) !== null;)
    if (r[0].trim())
      if (r[1]) {
        var a = r[1].trim(),
          o = [a, ""];
        a.indexOf("=") > -1 && (o = a.split("=")), t.attrs[o[0]] = o[1], s.lastIndex--
      } else r[2] && (t.attrs[r[2]] = r[3].trim().substring(1, r[3].length - 1));
  return t
}
var A = /<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,
  b = /^\s*$/,
  j = Object.create(null);

function x(e, t) {
  switch (t.type) {
    case "text":
      return e + t.content;
    case "tag":
      return e += "<" + t.name + (t.attrs ? function(n) {
        var i = [];
        for (var s in n) i.push(s + '="' + n[s] + '"');
        return i.length ? " " + i.join(" ") : ""
      }(t.attrs) : "") + (t.voidElement ? "/>" : ">"), t.voidElement ? e : e + t.children.reduce(x, "") + "</" + t.name + ">";
    case "comment":
      return e + "<!--" + t.comment + "-->"
  }
}
var W = {
  parse: function(e, t) {
    t || (t = {}), t.components || (t.components = j);
    var n, i = [],
      s = [],
      r = -1,
      a = !1;
    if (e.indexOf("<") !== 0) {
      var o = e.indexOf("<");
      i.push({
        type: "text",
        content: o === -1 ? e : e.substring(0, o)
      })
    }
    return e.replace(A, function(c, g) {
      if (a) {
        if (c !== "</" + n.name + ">") return;
        a = !1
      }
      var m, f = c.charAt(1) !== "/",
        y = c.startsWith("<!--"),
        u = g + c.length,
        l = e.charAt(u);
      if (y) {
        var d = v(c);
        return r < 0 ? (i.push(d), i) : ((m = s[r]).children.push(d), i)
      }
      if (f && (r++, (n = v(c)).type === "tag" && t.components[n.name] && (n.type = "component", a = !0), n.voidElement || a || !l || l === "<" || n.children.push({
          type: "text",
          content: e.slice(u, e.indexOf("<", u))
        }), r === 0 && i.push(n), (m = s[r - 1]) && m.children.push(n), s[r] = n), (!f || n.voidElement) && (r > -1 && (n.voidElement || n.name === c.slice(2, -1)) && (r--, n = r === -1 ? i : s[r]), !a && l !== "<" && l)) {
        m = r === -1 ? i : s[r].children;
        var p = e.indexOf("<", u),
          h = e.slice(u, p === -1 ? void 0 : p);
        b.test(h) && (h = " "), (p > -1 && r + m.length >= 0 || h !== " ") && m.push({
          type: "text",
          content: h
        })
      }
    }), i
  },
  stringify: function(e) {
    return e.reduce(function(t, n) {
      return t + x("", n)
    }, "")
  }
};
export {
  W as c
};