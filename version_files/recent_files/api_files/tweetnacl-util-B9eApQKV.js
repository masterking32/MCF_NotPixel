import {
  B as i
} from "./vite-plugin-node-polyfills-BVIVvkCX.js";
import {
  c as s,
  a as l
} from "./@ledgerhq-BW4RAlPi.js";
var f = {
  exports: {}
};
(function(c) {
  (function(t, o) {
    c.exports ? c.exports = o() : (t.nacl || (t.nacl = {}), t.nacl.util = o())
  })(s, function() {
    var t = {};

    function o(e) {
      if (!/^(?:[A-Za-z0-9+\/]{2}[A-Za-z0-9+\/]{2})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/.test(e)) throw new TypeError("invalid encoding")
    }
    return t.decodeUTF8 = function(e) {
      if (typeof e != "string") throw new TypeError("expected string");
      var n, r = unescape(encodeURIComponent(e)),
        a = new Uint8Array(r.length);
      for (n = 0; n < r.length; n++) a[n] = r.charCodeAt(n);
      return a
    }, t.encodeUTF8 = function(e) {
      var n, r = [];
      for (n = 0; n < e.length; n++) r.push(String.fromCharCode(e[n]));
      return decodeURIComponent(escape(r.join("")))
    }, typeof atob > "u" ? typeof i.from < "u" ? (t.encodeBase64 = function(e) {
      return i.from(e).toString("base64")
    }, t.decodeBase64 = function(e) {
      return o(e), new Uint8Array(Array.prototype.slice.call(i.from(e, "base64"), 0))
    }) : (t.encodeBase64 = function(e) {
      return new i(e).toString("base64")
    }, t.decodeBase64 = function(e) {
      return o(e), new Uint8Array(Array.prototype.slice.call(new i(e, "base64"), 0))
    }) : (t.encodeBase64 = function(e) {
      var n, r = [],
        a = e.length;
      for (n = 0; n < a; n++) r.push(String.fromCharCode(e[n]));
      return btoa(r.join(""))
    }, t.decodeBase64 = function(e) {
      o(e);
      var n, r = atob(e),
        a = new Uint8Array(r.length);
      for (n = 0; n < r.length; n++) a[n] = r.charCodeAt(n);
      return a
    }), t
  })
})(f);
var u = f.exports;
const g = l(u);
export {
  g as n
};