import {
  g as N
} from "./@ledgerhq-BW4RAlPi.js";
/**
 * @file Web Cryptography API shim
 * @author Artem S Vybornov <vybornov@gmail.com>
 * @license MIT
 */
(function(c, l) {
  typeof define == "function" && define.amd ? define([], function() {
    return l(c)
  }) : typeof module == "object" && module.exports ? module.exports = l(c) : l(c)
})(typeof self < "u" ? self : void 0, function(c) {
  if (typeof Promise != "function") throw "Promise support required";
  var l = c.crypto || c.msCrypto;
  if (!l) return;
  var p = l.subtle || l.webkitSubtle;
  if (!p) return;
  var M = c.Crypto || l.constructor || Object,
    O = c.SubtleCrypto || p.constructor || Object;
  c.CryptoKey || c.Key;
  var B = c.navigator.userAgent.indexOf("Edge/") > -1,
    h = !!c.msCrypto && !B,
    A = !l.subtle && !!l.webkitSubtle;
  if (!h && !A) return;

  function H(e) {
    return btoa(e).replace(/\=+$/, "").replace(/\+/g, "-").replace(/\//g, "_")
  }

  function U(e) {
    return e += "===", e = e.slice(0, -e.length % 4), atob(e.replace(/-/g, "+").replace(/_/g, "/"))
  }

  function d(e) {
    for (var r = new Uint8Array(e.length), i = 0; i < e.length; i++) r[i] = e.charCodeAt(i);
    return r
  }

  function E(e) {
    return e instanceof ArrayBuffer && (e = new Uint8Array(e)), String.fromCharCode.apply(String, e)
  }

  function w(e) {
    var r = {
      name: (e.name || e || "").toUpperCase().replace("V", "v")
    };
    switch (r.name) {
      case "SHA-1":
      case "SHA-256":
      case "SHA-384":
      case "SHA-512":
        break;
      case "AES-CBC":
      case "AES-GCM":
      case "AES-KW":
        e.length && (r.length = e.length);
        break;
      case "HMAC":
        e.hash && (r.hash = w(e.hash)), e.length && (r.length = e.length);
        break;
      case "RSAES-PKCS1-v1_5":
        e.publicExponent && (r.publicExponent = new Uint8Array(e.publicExponent)), e.modulusLength && (r.modulusLength = e.modulusLength);
        break;
      case "RSASSA-PKCS1-v1_5":
      case "RSA-OAEP":
        e.hash && (r.hash = w(e.hash)), e.publicExponent && (r.publicExponent = new Uint8Array(e.publicExponent)), e.modulusLength && (r.modulusLength = e.modulusLength);
        break;
      default:
        throw new SyntaxError("Bad algorithm name")
    }
    return r
  }

  function K(e) {
    return {
      HMAC: {
        "SHA-1": "HS1",
        "SHA-256": "HS256",
        "SHA-384": "HS384",
        "SHA-512": "HS512"
      },
      "RSASSA-PKCS1-v1_5": {
        "SHA-1": "RS1",
        "SHA-256": "RS256",
        "SHA-384": "RS384",
        "SHA-512": "RS512"
      },
      "RSAES-PKCS1-v1_5": {
        "": "RSA1_5"
      },
      "RSA-OAEP": {
        "SHA-1": "RSA-OAEP",
        "SHA-256": "RSA-OAEP-256"
      },
      "AES-KW": {
        128: "A128KW",
        192: "A192KW",
        256: "A256KW"
      },
      "AES-GCM": {
        128: "A128GCM",
        192: "A192GCM",
        256: "A256GCM"
      },
      "AES-CBC": {
        128: "A128CBC",
        192: "A192CBC",
        256: "A256CBC"
      }
    } [e.name][(e.hash || {}).name || e.length || ""]
  }

  function m(e) {
    (e instanceof ArrayBuffer || e instanceof Uint8Array) && (e = JSON.parse(decodeURIComponent(escape(E(e)))));
    var r = {
      kty: e.kty,
      alg: e.alg,
      ext: e.ext || e.extractable
    };
    switch (r.kty) {
      case "oct":
        r.k = e.k;
      case "RSA":
        ["n", "e", "d", "p", "q", "dp", "dq", "qi", "oth"].forEach(function(i) {
          i in e && (r[i] = e[i])
        });
        break;
      default:
        throw new TypeError("Unsupported key type")
    }
    return r
  }

  function q(e) {
    var r = m(e);
    return h && (r.extractable = r.ext, delete r.ext), d(unescape(encodeURIComponent(JSON.stringify(r)))).buffer
  }

  function G(e) {
    var r = _(e),
      i = !1;
    r.length > 2 && (i = !0, r.shift());
    var t = {
      ext: !0
    };
    switch (r[0][0]) {
      case "1.2.840.113549.1.1.1":
        var s = ["n", "e", "d", "p", "q", "dp", "dq", "qi"],
          n = _(r[1]);
        i && n.shift();
        for (var o = 0; o < n.length; o++) n[o][0] || (n[o] = n[o].subarray(1)), t[s[o]] = H(E(n[o]));
        t.kty = "RSA";
        break;
      default:
        throw new TypeError("Unsupported key type")
    }
    return t
  }

  function I(e) {
    var r, i = [
        ["", null]
      ],
      t = !1;
    switch (e.kty) {
      case "RSA":
        for (var s = ["n", "e", "d", "p", "q", "dp", "dq", "qi"], n = [], o = 0; o < s.length && s[o] in e; o++) {
          var a = n[o] = d(U(e[s[o]]));
          a[0] & 128 && (n[o] = new Uint8Array(a.length + 1), n[o].set(a, 1))
        }
        n.length > 2 && (t = !0, n.unshift(new Uint8Array([0]))), i[0][0] = "1.2.840.113549.1.1.1", r = n;
        break;
      default:
        throw new TypeError("Unsupported key type")
    }
    return i.push(new Uint8Array(b(r)).buffer), t ? i.unshift(new Uint8Array([0])) : i[1] = {
      tag: 3,
      value: i[1]
    }, new Uint8Array(b(i)).buffer
  }
  var x = {
      KoZIhvcNAQEB: "1.2.840.113549.1.1.1"
    },
    P = {
      "1.2.840.113549.1.1.1": "KoZIhvcNAQEB"
    };

  function _(e, r) {
    if (e instanceof ArrayBuffer && (e = new Uint8Array(e)), r || (r = {
        pos: 0,
        end: e.length
      }), r.end - r.pos < 2 || r.end > e.length) throw new RangeError("Malformed DER");
    var i = e[r.pos++],
      t = e[r.pos++];
    if (t >= 128) {
      if (t &= 127, r.end - r.pos < t) throw new RangeError("Malformed DER");
      for (var s = 0; t--;) s <<= 8, s |= e[r.pos++];
      t = s
    }
    if (r.end - r.pos < t) throw new RangeError("Malformed DER");
    var n;
    switch (i) {
      case 2:
        n = e.subarray(r.pos, r.pos += t);
        break;
      case 3:
        if (e[r.pos++]) throw new Error("Unsupported bit string");
        t--;
      case 4:
        n = new Uint8Array(e.subarray(r.pos, r.pos += t)).buffer;
        break;
      case 5:
        n = null;
        break;
      case 6:
        var o = btoa(E(e.subarray(r.pos, r.pos += t)));
        if (!(o in x)) throw new Error("Unsupported OBJECT ID " + o);
        n = x[o];
        break;
      case 48:
        n = [];
        for (var a = r.pos + t; r.pos < a;) n.push(_(e, r));
        break;
      default:
        throw new Error("Unsupported DER tag 0x" + i.toString(16))
    }
    return n
  }

  function b(e, r) {
    r || (r = []);
    var i = 0,
      t = 0,
      s = r.length + 2;
    if (r.push(0, 0), e instanceof Uint8Array) {
      i = 2, t = e.length;
      for (var n = 0; n < t; n++) r.push(e[n])
    } else if (e instanceof ArrayBuffer) {
      i = 4, t = e.byteLength, e = new Uint8Array(e);
      for (var n = 0; n < t; n++) r.push(e[n])
    } else if (e === null) i = 5, t = 0;
    else if (typeof e == "string" && e in P) {
      var o = d(atob(P[e]));
      i = 6, t = o.length;
      for (var n = 0; n < t; n++) r.push(o[n])
    } else if (e instanceof Array) {
      for (var n = 0; n < e.length; n++) b(e[n], r);
      i = 48, t = r.length - s
    } else if (typeof e == "object" && e.tag === 3 && e.value instanceof ArrayBuffer) {
      e = new Uint8Array(e.value), i = 3, t = e.byteLength, r.push(0);
      for (var n = 0; n < t; n++) r.push(e[n]);
      t++
    } else throw new Error("Unsupported DER value " + e);
    if (t >= 128) {
      var a = t,
        t = 4;
      for (r.splice(s, 0, a >> 24 & 255, a >> 16 & 255, a >> 8 & 255, a & 255); t > 1 && !(a >> 24);) a <<= 8, t--;
      t < 4 && r.splice(s, 4 - t), t |= 128
    }
    return r.splice(s - 2, 2, i, t), r
  }

  function S(e, r, i, t) {
    Object.defineProperties(this, {
      _key: {
        value: e
      },
      type: {
        value: e.type,
        enumerable: !0
      },
      extractable: {
        value: i === void 0 ? e.extractable : i,
        enumerable: !0
      },
      algorithm: {
        value: r === void 0 ? e.algorithm : r,
        enumerable: !0
      },
      usages: {
        value: t === void 0 ? e.usages : t,
        enumerable: !0
      }
    })
  }

  function C(e) {
    return e === "verify" || e === "encrypt" || e === "wrapKey"
  }

  function k(e) {
    return e === "sign" || e === "decrypt" || e === "unwrapKey"
  }
  if (["generateKey", "importKey", "unwrapKey"].forEach(function(e) {
      var r = p[e];
      p[e] = function(i, t, s) {
        var n = [].slice.call(arguments),
          o, a, y;
        switch (e) {
          case "generateKey":
            o = w(i), a = t, y = s;
            break;
          case "importKey":
            o = w(s), a = n[3], y = n[4], i === "jwk" && (t = m(t), t.alg || (t.alg = K(o)), t.key_ops || (t.key_ops = t.kty !== "oct" ? "d" in t ? y.filter(k) : y.filter(C) : y.slice()), n[1] = q(t));
            break;
          case "unwrapKey":
            o = n[4], a = n[5], y = n[6], n[2] = s._key;
            break
        }
        if (e === "generateKey" && o.name === "HMAC" && o.hash) return o.length = o.length || {
          "SHA-1": 512,
          "SHA-256": 512,
          "SHA-384": 1024,
          "SHA-512": 1024
        } [o.hash.name], p.importKey("raw", l.getRandomValues(new Uint8Array(o.length + 7 >> 3)), o, a, y);
        if (A && e === "generateKey" && o.name === "RSASSA-PKCS1-v1_5" && (!o.modulusLength || o.modulusLength >= 2048)) return i = w(i), i.name = "RSAES-PKCS1-v1_5", delete i.hash, p.generateKey(i, !0, ["encrypt", "decrypt"]).then(function(u) {
          return Promise.all([p.exportKey("jwk", u.publicKey), p.exportKey("jwk", u.privateKey)])
        }).then(function(u) {
          return u[0].alg = u[1].alg = K(o), u[0].key_ops = y.filter(C), u[1].key_ops = y.filter(k), Promise.all([p.importKey("jwk", u[0], o, !0, u[0].key_ops), p.importKey("jwk", u[1], o, a, u[1].key_ops)])
        }).then(function(u) {
          return {
            publicKey: u[0],
            privateKey: u[1]
          }
        });
        if ((A || h && (o.hash || {}).name === "SHA-1") && e === "importKey" && i === "jwk" && o.name === "HMAC" && t.kty === "oct") return p.importKey("raw", d(U(t.k)), s, n[3], n[4]);
        if (A && e === "importKey" && (i === "spki" || i === "pkcs8")) return p.importKey("jwk", G(t), s, n[3], n[4]);
        if (h && e === "unwrapKey") return p.decrypt(n[3], s, t).then(function(u) {
          return p.importKey(i, u, n[4], n[5], n[6])
        });
        var f;
        try {
          f = r.apply(p, n)
        } catch (u) {
          return Promise.reject(u)
        }
        return h && (f = new Promise(function(u, R) {
          f.onabort = f.onerror = function(v) {
            R(v)
          }, f.oncomplete = function(v) {
            u(v.target.result)
          }
        })), f = f.then(function(u) {
          return o.name === "HMAC" && (o.length || (o.length = 8 * u.algorithm.length)), o.name.search("RSA") == 0 && (o.modulusLength || (o.modulusLength = (u.publicKey || u).algorithm.modulusLength), o.publicExponent || (o.publicExponent = (u.publicKey || u).algorithm.publicExponent)), u.publicKey && u.privateKey ? u = {
            publicKey: new S(u.publicKey, o, a, y.filter(C)),
            privateKey: new S(u.privateKey, o, a, y.filter(k))
          } : u = new S(u, o, a, y), u
        }), f
      }
    }), ["exportKey", "wrapKey"].forEach(function(e) {
      var r = p[e];
      p[e] = function(i, t, s) {
        var n = [].slice.call(arguments);
        switch (e) {
          case "exportKey":
            n[1] = t._key;
            break;
          case "wrapKey":
            n[1] = t._key, n[2] = s._key;
            break
        }
        if ((A || h && (t.algorithm.hash || {}).name === "SHA-1") && e === "exportKey" && i === "jwk" && t.algorithm.name === "HMAC" && (n[0] = "raw"), A && e === "exportKey" && (i === "spki" || i === "pkcs8") && (n[0] = "jwk"), h && e === "wrapKey") return p.exportKey(i, t).then(function(a) {
          return i === "jwk" && (a = d(unescape(encodeURIComponent(JSON.stringify(m(a)))))), p.encrypt(n[3], s, a)
        });
        var o;
        try {
          o = r.apply(p, n)
        } catch (a) {
          return Promise.reject(a)
        }
        return h && (o = new Promise(function(a, y) {
          o.onabort = o.onerror = function(f) {
            y(f)
          }, o.oncomplete = function(f) {
            a(f.target.result)
          }
        })), e === "exportKey" && i === "jwk" && (o = o.then(function(a) {
          return (A || h && (t.algorithm.hash || {}).name === "SHA-1") && t.algorithm.name === "HMAC" ? {
            kty: "oct",
            alg: K(t.algorithm),
            key_ops: t.usages.slice(),
            ext: !0,
            k: H(E(a))
          } : (a = m(a), a.alg || (a.alg = K(t.algorithm)), a.key_ops || (a.key_ops = t.type === "public" ? t.usages.filter(C) : t.type === "private" ? t.usages.filter(k) : t.usages.slice()), a)
        })), A && e === "exportKey" && (i === "spki" || i === "pkcs8") && (o = o.then(function(a) {
          return a = I(m(a)), a
        })), o
      }
    }), ["encrypt", "decrypt", "sign", "verify"].forEach(function(e) {
      var r = p[e];
      p[e] = function(i, t, s, n) {
        if (h && (!s.byteLength || n && !n.byteLength)) throw new Error("Empy input is not allowed");
        var o = [].slice.call(arguments),
          a = w(i);
        if (h && e === "decrypt" && a.name === "AES-GCM") {
          var y = i.tagLength >> 3;
          o[2] = (s.buffer || s).slice(0, s.byteLength - y), i.tag = (s.buffer || s).slice(s.byteLength - y)
        }
        o[1] = t._key;
        var f;
        try {
          f = r.apply(p, o)
        } catch (u) {
          return Promise.reject(u)
        }
        return h && (f = new Promise(function(u, R) {
          f.onabort = f.onerror = function(v) {
            R(v)
          }, f.oncomplete = function(g) {
            var g = g.target.result;
            if (e === "encrypt" && g instanceof AesGcmEncryptResult) {
              var j = g.ciphertext,
                L = g.tag;
              g = new Uint8Array(j.byteLength + L.byteLength), g.set(new Uint8Array(j), 0), g.set(new Uint8Array(L), j.byteLength), g = g.buffer
            }
            u(g)
          }
        })), f
      }
    }), h) {
    var D = p.digest;
    p.digest = function(e, r) {
      if (!r.byteLength) throw new Error("Empy input is not allowed");
      var i;
      try {
        i = D.call(p, e, r)
      } catch (t) {
        return Promise.reject(t)
      }
      return i = new Promise(function(t, s) {
        i.onabort = i.onerror = function(n) {
          s(n)
        }, i.oncomplete = function(n) {
          t(n.target.result)
        }
      }), i
    }, c.crypto = Object.create(l, {
      getRandomValues: {
        value: function(e) {
          return l.getRandomValues(e)
        }
      },
      subtle: {
        value: p
      }
    }), c.CryptoKey = S
  }
  A && (l.subtle = p, c.Crypto = M, c.SubtleCrypto = O, c.CryptoKey = S)
});
const W = window.crypto,
  T = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: W
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  V = N(T);
export {
  V as r
};