import {
  r as De,
  R as fl
} from "./react-DjWS3H3h.js";
import {
  p as Nt
} from "./vite-plugin-node-polyfills-BVIVvkCX.js";
import {
  n as un
} from "./tweetnacl-util-B9eApQKV.js";
import {
  a as Ln
} from "./tweetnacl-DeYMGiLl.js";
import {
  U as hl
} from "./ua-parser-js-9NRjnSWS.js";
import {
  d as gl
} from "./deepmerge-D9PnGD7j.js";
import {
  c as Un
} from "./classnames-D-x1NdaJ.js";
var ct;
(function(e) {
  e[e.UNKNOWN_ERROR = 0] = "UNKNOWN_ERROR", e[e.BAD_REQUEST_ERROR = 1] = "BAD_REQUEST_ERROR", e[e.MANIFEST_NOT_FOUND_ERROR = 2] = "MANIFEST_NOT_FOUND_ERROR", e[e.MANIFEST_CONTENT_ERROR = 3] = "MANIFEST_CONTENT_ERROR", e[e.UNKNOWN_APP_ERROR = 100] = "UNKNOWN_APP_ERROR", e[e.USER_REJECTS_ERROR = 300] = "USER_REJECTS_ERROR", e[e.METHOD_NOT_SUPPORTED = 400] = "METHOD_NOT_SUPPORTED"
})(ct || (ct = {}));
var Io;
(function(e) {
  e[e.UNKNOWN_ERROR = 0] = "UNKNOWN_ERROR", e[e.METHOD_NOT_SUPPORTED = 400] = "METHOD_NOT_SUPPORTED"
})(Io || (Io = {}));
var Bt;
(function(e) {
  e[e.UNKNOWN_ERROR = 0] = "UNKNOWN_ERROR", e[e.BAD_REQUEST_ERROR = 1] = "BAD_REQUEST_ERROR", e[e.UNKNOWN_APP_ERROR = 100] = "UNKNOWN_APP_ERROR", e[e.USER_REJECTS_ERROR = 300] = "USER_REJECTS_ERROR", e[e.METHOD_NOT_SUPPORTED = 400] = "METHOD_NOT_SUPPORTED"
})(Bt || (Bt = {}));
var Bo;
(function(e) {
  e[e.UNKNOWN_ERROR = 0] = "UNKNOWN_ERROR", e[e.BAD_REQUEST_ERROR = 1] = "BAD_REQUEST_ERROR", e[e.UNKNOWN_APP_ERROR = 100] = "UNKNOWN_APP_ERROR", e[e.USER_REJECTS_ERROR = 300] = "USER_REJECTS_ERROR", e[e.METHOD_NOT_SUPPORTED = 400] = "METHOD_NOT_SUPPORTED"
})(Bo || (Bo = {}));
var Wo;
(function(e) {
  e[e.UNKNOWN_ERROR = 0] = "UNKNOWN_ERROR", e[e.BAD_REQUEST_ERROR = 1] = "BAD_REQUEST_ERROR", e[e.UNKNOWN_APP_ERROR = 100] = "UNKNOWN_APP_ERROR", e[e.METHOD_NOT_SUPPORTED = 400] = "METHOD_NOT_SUPPORTED"
})(Wo || (Wo = {}));
var dn;
(function(e) {
  e.MAINNET = "-239", e.TESTNET = "-3"
})(dn || (dn = {}));

function ml(e, t) {
  const n = un.encodeBase64(e);
  return t ? encodeURIComponent(n) : n
}

function vl(e, t) {
  return t && (e = decodeURIComponent(e)), un.decodeBase64(e)
}

function wl(e, t = !1) {
  let n;
  return e instanceof Uint8Array ? n = e : (typeof e != "string" && (e = JSON.stringify(e)), n = un.decodeUTF8(e)), ml(n, t)
}

function pl(e, t = !1) {
  const n = vl(e, t);
  return {
    toString() {
      return un.encodeUTF8(n)
    },
    toObject() {
      try {
        return JSON.parse(un.encodeUTF8(n))
      } catch {
        return null
      }
    },
    toUint8Array() {
      return n
    }
  }
}
const Jr = {
  encode: wl,
  decode: pl
};

function yl(e, t) {
  const n = new Uint8Array(e.length + t.length);
  return n.set(e), n.set(t, e.length), n
}

function Cl(e, t) {
  if (t >= e.length) throw new Error("Index is out of buffer");
  const n = e.slice(0, t),
    r = e.slice(t);
  return [n, r]
}

function br(e) {
  let t = "";
  return e.forEach(n => {
    t += ("0" + (n & 255).toString(16)).slice(-2)
  }), t
}

function Hn(e) {
  if (e.length % 2 !== 0) throw new Error(`Cannot convert ${e} to bytesArray`);
  const t = new Uint8Array(e.length / 2);
  for (let n = 0; n < e.length; n += 2) t[n / 2] = parseInt(e.slice(n, n + 2), 16);
  return t
}
class Pr {
  constructor(t) {
    this.nonceLength = 24, this.keyPair = t ? this.createKeypairFromString(t) : this.createKeypair(), this.sessionId = br(this.keyPair.publicKey)
  }
  createKeypair() {
    return Ln.box.keyPair()
  }
  createKeypairFromString(t) {
    return {
      publicKey: Hn(t.publicKey),
      secretKey: Hn(t.secretKey)
    }
  }
  createNonce() {
    return Ln.randomBytes(this.nonceLength)
  }
  encrypt(t, n) {
    const r = new TextEncoder().encode(t),
      o = this.createNonce(),
      i = Ln.box(r, o, n, this.keyPair.secretKey);
    return yl(o, i)
  }
  decrypt(t, n) {
    const [r, o] = Cl(t, this.nonceLength), i = Ln.box.open(o, r, n, this.keyPair.secretKey);
    if (!i) throw new Error(`Decryption error: 
 message: ${t.toString()} 
 sender pubkey: ${n.toString()} 
 keypair pubkey: ${this.keyPair.publicKey.toString()} 
 keypair secretkey: ${this.keyPair.secretKey.toString()}`);
    return new TextDecoder().decode(i)
  }
  stringifyKeypair() {
    return {
      publicKey: br(this.keyPair.publicKey),
      secretKey: br(this.keyPair.secretKey)
    }
  }
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function bl(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n
}

function D(e, t, n, r) {
  function o(i) {
    return i instanceof n ? i : new n(function(s) {
      s(i)
    })
  }
  return new(n || (n = Promise))(function(i, s) {
    function l(d) {
      try {
        u(r.next(d))
      } catch (f) {
        s(f)
      }
    }

    function c(d) {
      try {
        u(r.throw(d))
      } catch (f) {
        s(f)
      }
    }

    function u(d) {
      d.done ? i(d.value) : o(d.value).then(l, c)
    }
    u((r = r.apply(e, [])).next())
  })
}
class j extends Error {
  constructor(t, n) {
    super(t, n), this.message = `${j.prefix} ${this.constructor.name}${this.info?": "+this.info:""}${t?`
`+t:""}`, Object.setPrototypeOf(this, j.prototype)
  }
  get info() {
    return ""
  }
}
j.prefix = "[TON_CONNECT_SDK_ERROR]";
class Xr extends j {
  get info() {
    return "Passed DappMetadata is in incorrect format."
  }
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Xr.prototype)
  }
}
class ir extends j {
  get info() {
    return "Passed `tonconnect-manifest.json` contains errors. Check format of your manifest. See more https://github.com/ton-connect/docs/blob/main/requests-responses.md#app-manifest"
  }
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, ir.prototype)
  }
}
class sr extends j {
  get info() {
    return "Manifest not found. Make sure you added `tonconnect-manifest.json` to the root of your app or passed correct manifestUrl. See more https://github.com/ton-connect/docs/blob/main/requests-responses.md#app-manifest"
  }
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, sr.prototype)
  }
}
class eo extends j {
  get info() {
    return "Wallet connection called but wallet already connected. To avoid the error, disconnect the wallet before doing a new connection."
  }
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, eo.prototype)
  }
}
class Fn extends j {
  get info() {
    return "Send transaction or other protocol methods called while wallet is not connected."
  }
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Fn.prototype)
  }
}

function xl(e) {
  return "jsBridgeKey" in e
}
class lr extends j {
  get info() {
    return "User rejects the action in the wallet."
  }
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, lr.prototype)
  }
}
class ar extends j {
  get info() {
    return "Request to the wallet contains errors."
  }
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, ar.prototype)
  }
}
class cr extends j {
  get info() {
    return "App tries to send rpc request to the injected wallet while not connected."
  }
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, cr.prototype)
  }
}
class to extends j {
  get info() {
    return "There is an attempt to connect to the injected wallet while it is not exists in the webpage."
  }
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, to.prototype)
  }
}
class no extends j {
  get info() {
    return "An error occurred while fetching the wallets list."
  }
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, no.prototype)
  }
}
class Wt extends j {
  get info() {
    return "Passed address is in incorrect format."
  }
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Wt.prototype)
  }
}
class On extends j {
  get info() {
    return "Passed hex is in incorrect format."
  }
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, On.prototype)
  }
}
class gt extends j {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, gt.prototype)
  }
}
const Po = {
  [ct.UNKNOWN_ERROR]: gt,
  [ct.USER_REJECTS_ERROR]: lr,
  [ct.BAD_REQUEST_ERROR]: ar,
  [ct.UNKNOWN_APP_ERROR]: cr,
  [ct.MANIFEST_NOT_FOUND_ERROR]: sr,
  [ct.MANIFEST_CONTENT_ERROR]: ir
};
class Sl {
  parseError(t) {
    let n = gt;
    return t.code in Po && (n = Po[t.code] || gt), new n(t.message)
  }
}
const kl = new Sl;
class _l {
  isError(t) {
    return "error" in t
  }
}
const Uo = {
  [Bt.UNKNOWN_ERROR]: gt,
  [Bt.USER_REJECTS_ERROR]: lr,
  [Bt.BAD_REQUEST_ERROR]: ar,
  [Bt.UNKNOWN_APP_ERROR]: cr
};
class El extends _l {
  convertToRpcRequest(t) {
    return {
      method: "sendTransaction",
      params: [JSON.stringify(t)]
    }
  }
  parseAndThrowError(t) {
    let n = gt;
    throw t.error.code in Uo && (n = Uo[t.error.code] || gt), new n(t.error.message)
  }
  convertFromRpcResponse(t) {
    return {
      boc: t.result
    }
  }
}
const $n = new El;
class Al {
  constructor(t, n) {
    this.storage = t, this.storeKey = "ton-connect-storage_http-bridge-gateway::" + n
  }
  storeLastEventId(t) {
    return D(this, void 0, void 0, function*() {
      return this.storage.setItem(this.storeKey, t)
    })
  }
  removeLastEventId() {
    return D(this, void 0, void 0, function*() {
      return this.storage.removeItem(this.storeKey)
    })
  }
  getLastEventId() {
    return D(this, void 0, void 0, function*() {
      const t = yield this.storage.getItem(this.storeKey);
      return t || null
    })
  }
}

function Ll(e) {
  return e.slice(-1) === "/" ? e.slice(0, -1) : e
}

function Wi(e, t) {
  return Ll(e) + "/" + t
}

function ft(e) {
  if (!e) return !1;
  const t = new URL(e);
  return t.protocol === "tg:" || t.hostname === "t.me"
}

function Pi(e) {
  return e.replaceAll(".", "%2E").replaceAll("-", "%2D").replaceAll("_", "%5F").replaceAll("&", "-").replaceAll("=", "__").replaceAll("%", "--")
}

function Ui(e, t) {
  return D(this, void 0, void 0, function*() {
    return new Promise((n, r) => {
      var o, i;
      if (!((o = void 0) === null || o === void 0) && o.aborted) {
        r(new j("Delay aborted"));
        return
      }
      const s = setTimeout(() => n(), e);
      (i = void 0) === null || i === void 0 || i.addEventListener("abort", () => {
        clearTimeout(s), r(new j("Delay aborted"))
      })
    })
  })
}

function Ue(e) {
  const t = new AbortController;
  return e != null && e.aborted ? t.abort() : e == null || e.addEventListener("abort", () => t.abort(), {
    once: !0
  }), t
}

function tn(e, t) {
  var n, r;
  return D(this, void 0, void 0, function*() {
    const o = (n = t == null ? void 0 : t.attempts) !== null && n !== void 0 ? n : 10,
      i = (r = t == null ? void 0 : t.delayMs) !== null && r !== void 0 ? r : 200,
      s = Ue(t == null ? void 0 : t.signal);
    if (typeof e != "function") throw new j(`Expected a function, got ${typeof e}`);
    let l = 0,
      c;
    for (; l < o;) {
      if (s.signal.aborted) throw new j(`Aborted after attempts ${l}`);
      try {
        return yield e({
          signal: s.signal
        })
      } catch (u) {
        c = u, l++, l < o && (yield Ui(i))
      }
    }
    throw c
  })
}

function ve(...e) {
  try {
    console.debug("[TON_CONNECT_SDK]", ...e)
  } catch {}
}

function nt(...e) {
  try {
    console.error("[TON_CONNECT_SDK]", ...e)
  } catch {}
}

function $l(...e) {
  try {
    console.warn("[TON_CONNECT_SDK]", ...e)
  } catch {}
}

function Tl(e, t) {
  let n = null,
    r = null,
    o = null,
    i = null,
    s = null;
  const l = (f, ...v) => D(this, void 0, void 0, function*() {
    if (i = f ?? null, s == null || s.abort(), s = Ue(f), s.signal.aborted) throw new j("Resource creation was aborted");
    r = v ?? null;
    const L = e(s.signal, ...v);
    o = L;
    const I = yield L;
    if (o !== L && I !== n) throw yield t(I), new j("Resource creation was aborted by a new resource creation");
    return n = I, n
  });
  return {
    create: l,
    current: () => n ?? null,
    dispose: () => D(this, void 0, void 0, function*() {
      try {
        const f = n;
        n = null;
        const v = o;
        o = null;
        try {
          s == null || s.abort()
        } catch {}
        yield Promise.allSettled([f ? t(f) : Promise.resolve(), v ? t(yield v) : Promise.resolve()])
      } catch {}
    }),
    recreate: f => D(this, void 0, void 0, function*() {
      const v = n,
        L = o,
        I = r,
        W = i;
      if (yield Ui(f), v === n && L === o && I === r && W === i) return yield l(i, ...I ?? []);
      throw new j("Resource recreation was aborted by a new resource creation")
    })
  }
}

function Ml(e, t) {
  const n = t == null ? void 0 : t.timeout,
    r = t == null ? void 0 : t.signal,
    o = Ue(r);
  return new Promise((i, s) => D(this, void 0, void 0, function*() {
    if (o.signal.aborted) {
      s(new j("Operation aborted"));
      return
    }
    let l;
    typeof n < "u" && (l = setTimeout(() => {
      o.abort(), s(new j(`Timeout after ${n}ms`))
    }, n)), o.signal.addEventListener("abort", () => {
      clearTimeout(l), s(new j("Operation aborted"))
    }, {
      once: !0
    });
    const c = {
      timeout: n,
      abort: o.signal
    };
    yield e((...u) => {
      clearTimeout(l), i(...u)
    }, () => {
      clearTimeout(l), s()
    }, c)
  }))
}
class xr {
  constructor(t, n, r, o, i) {
    this.bridgeUrl = n, this.sessionId = r, this.listener = o, this.errorsListener = i, this.ssePath = "events", this.postPath = "message", this.heartbeatMessage = "heartbeat", this.defaultTtl = 300, this.defaultReconnectDelay = 2e3, this.defaultResendDelay = 5e3, this.eventSource = Tl((s, l) => D(this, void 0, void 0, function*() {
      const c = {
        bridgeUrl: this.bridgeUrl,
        ssePath: this.ssePath,
        sessionId: this.sessionId,
        bridgeGatewayStorage: this.bridgeGatewayStorage,
        errorHandler: this.errorsHandler.bind(this),
        messageHandler: this.messagesHandler.bind(this),
        signal: s,
        openingDeadlineMS: l
      };
      return yield Rl(c)
    }), s => D(this, void 0, void 0, function*() {
      s.close()
    })), this.bridgeGatewayStorage = new Al(t, n)
  }
  get isReady() {
    const t = this.eventSource.current();
    return (t == null ? void 0 : t.readyState) === EventSource.OPEN
  }
  get isClosed() {
    const t = this.eventSource.current();
    return (t == null ? void 0 : t.readyState) !== EventSource.OPEN
  }
  get isConnecting() {
    const t = this.eventSource.current();
    return (t == null ? void 0 : t.readyState) === EventSource.CONNECTING
  }
  registerSession(t) {
    return D(this, void 0, void 0, function*() {
      yield this.eventSource.create(t == null ? void 0 : t.signal, t == null ? void 0 : t.openingDeadlineMS)
    })
  }
  send(t, n, r, o) {
    var i;
    return D(this, void 0, void 0, function*() {
      const s = {};
      typeof o == "number" ? s.ttl = o : (s.ttl = o == null ? void 0 : o.ttl, s.signal = o == null ? void 0 : o.signal, s.attempts = o == null ? void 0 : o.attempts);
      const l = new URL(Wi(this.bridgeUrl, this.postPath));
      l.searchParams.append("client_id", this.sessionId), l.searchParams.append("to", n), l.searchParams.append("ttl", ((s == null ? void 0 : s.ttl) || this.defaultTtl).toString()), l.searchParams.append("topic", r);
      const c = Jr.encode(t);
      yield tn(u => D(this, void 0, void 0, function*() {
        const d = yield this.post(l, c, u.signal);
        if (!d.ok) throw new j(`Bridge send failed, status ${d.status}`)
      }), {
        attempts: (i = s == null ? void 0 : s.attempts) !== null && i !== void 0 ? i : Number.MAX_SAFE_INTEGER,
        delayMs: this.defaultResendDelay,
        signal: s == null ? void 0 : s.signal
      })
    })
  }
  pause() {
    this.eventSource.dispose().catch(t => nt(`Bridge pause failed, ${t}`))
  }
  unPause() {
    return D(this, void 0, void 0, function*() {
      yield this.eventSource.recreate(0)
    })
  }
  close() {
    return D(this, void 0, void 0, function*() {
      yield this.eventSource.dispose().catch(t => nt(`Bridge close failed, ${t}`))
    })
  }
  setListener(t) {
    this.listener = t
  }
  setErrorsListener(t) {
    this.errorsListener = t
  }
  post(t, n, r) {
    return D(this, void 0, void 0, function*() {
      const o = yield fetch(t, {
        method: "post",
        body: n,
        signal: r
      });
      if (!o.ok) throw new j(`Bridge send failed, status ${o.status}`);
      return o
    })
  }
  errorsHandler(t, n) {
    return D(this, void 0, void 0, function*() {
      if (this.isConnecting) throw t.close(), new j("Bridge error, failed to connect");
      if (this.isReady) {
        try {
          this.errorsListener(n)
        } catch {}
        return
      }
      if (this.isClosed) return t.close(), ve(`Bridge reconnecting, ${this.defaultReconnectDelay}ms delay`), yield this.eventSource.recreate(this.defaultReconnectDelay);
      throw new j("Bridge error, unknown state")
    })
  }
  messagesHandler(t) {
    return D(this, void 0, void 0, function*() {
      if (t.data === this.heartbeatMessage || (yield this.bridgeGatewayStorage.storeLastEventId(t.lastEventId), this.isClosed)) return;
      let n;
      try {
        n = JSON.parse(t.data)
      } catch (r) {
        throw new j(`Bridge message parse failed, message ${r.data}`)
      }
      this.listener(n)
    })
  }
}

function Rl(e) {
  return D(this, void 0, void 0, function*() {
    return yield Ml((t, n, r) => D(this, void 0, void 0, function*() {
      var o;
      const s = Ue(r.signal).signal;
      if (s.aborted) {
        n(new j("Bridge connection aborted"));
        return
      }
      const l = new URL(Wi(e.bridgeUrl, e.ssePath));
      l.searchParams.append("client_id", e.sessionId);
      const c = yield e.bridgeGatewayStorage.getLastEventId();
      if (c && l.searchParams.append("last_event_id", c), s.aborted) {
        n(new j("Bridge connection aborted"));
        return
      }
      const u = new EventSource(l.toString());
      u.onerror = d => D(this, void 0, void 0, function*() {
        if (s.aborted) {
          u.close(), n(new j("Bridge connection aborted"));
          return
        }
        try {
          const f = yield e.errorHandler(u, d);
          f !== u && u.close(), f && f !== u && t(f)
        } catch (f) {
          u.close(), n(f)
        }
      }), u.onopen = () => {
        if (s.aborted) {
          u.close(), n(new j("Bridge connection aborted"));
          return
        }
        t(u)
      }, u.onmessage = d => {
        if (s.aborted) {
          u.close(), n(new j("Bridge connection aborted"));
          return
        }
        e.messageHandler(d)
      }, (o = e.signal) === null || o === void 0 || o.addEventListener("abort", () => {
        u.close(), n(new j("Bridge connection aborted"))
      })
    }), {
      timeout: e.openingDeadlineMS,
      signal: e.signal
    })
  })
}

function nn(e) {
  return !("connectEvent" in e)
}
class fn {
  constructor(t) {
    this.storage = t, this.storeKey = "ton-connect-storage_bridge-connection"
  }
  storeConnection(t) {
    return D(this, void 0, void 0, function*() {
      if (t.type === "injected") return this.storage.setItem(this.storeKey, JSON.stringify(t));
      if (!nn(t)) {
        const r = {
            sessionKeyPair: t.session.sessionCrypto.stringifyKeypair(),
            walletPublicKey: t.session.walletPublicKey,
            bridgeUrl: t.session.bridgeUrl
          },
          o = {
            type: "http",
            connectEvent: t.connectEvent,
            session: r,
            lastWalletEventId: t.lastWalletEventId,
            nextRpcRequestId: t.nextRpcRequestId
          };
        return this.storage.setItem(this.storeKey, JSON.stringify(o))
      }
      const n = {
        type: "http",
        connectionSource: t.connectionSource,
        sessionCrypto: t.sessionCrypto.stringifyKeypair()
      };
      return this.storage.setItem(this.storeKey, JSON.stringify(n))
    })
  }
  removeConnection() {
    return D(this, void 0, void 0, function*() {
      return this.storage.removeItem(this.storeKey)
    })
  }
  getConnection() {
    return D(this, void 0, void 0, function*() {
      const t = yield this.storage.getItem(this.storeKey);
      if (!t) return null;
      const n = JSON.parse(t);
      if (n.type === "injected") return n;
      if ("connectEvent" in n) {
        const r = new Pr(n.session.sessionKeyPair);
        return {
          type: "http",
          connectEvent: n.connectEvent,
          lastWalletEventId: n.lastWalletEventId,
          nextRpcRequestId: n.nextRpcRequestId,
          session: {
            sessionCrypto: r,
            bridgeUrl: n.session.bridgeUrl,
            walletPublicKey: n.session.walletPublicKey
          }
        }
      }
      return {
        type: "http",
        sessionCrypto: new Pr(n.sessionCrypto),
        connectionSource: n.connectionSource
      }
    })
  }
  getHttpConnection() {
    return D(this, void 0, void 0, function*() {
      const t = yield this.getConnection();
      if (!t) throw new j("Trying to read HTTP connection source while nothing is stored");
      if (t.type === "injected") throw new j("Trying to read HTTP connection source while injected connection is stored");
      return t
    })
  }
  getHttpPendingConnection() {
    return D(this, void 0, void 0, function*() {
      const t = yield this.getConnection();
      if (!t) throw new j("Trying to read HTTP connection source while nothing is stored");
      if (t.type === "injected") throw new j("Trying to read HTTP connection source while injected connection is stored");
      if (!nn(t)) throw new j("Trying to read HTTP-pending connection while http connection is stored");
      return t
    })
  }
  getInjectedConnection() {
    return D(this, void 0, void 0, function*() {
      const t = yield this.getConnection();
      if (!t) throw new j("Trying to read Injected bridge connection source while nothing is stored");
      if ((t == null ? void 0 : t.type) === "http") throw new j("Trying to read Injected bridge connection source while HTTP connection is stored");
      return t
    })
  }
  storedConnectionType() {
    return D(this, void 0, void 0, function*() {
      const t = yield this.storage.getItem(this.storeKey);
      return t ? JSON.parse(t).type : null
    })
  }
  storeLastWalletEventId(t) {
    return D(this, void 0, void 0, function*() {
      const n = yield this.getConnection();
      if (n && n.type === "http" && !nn(n)) return n.lastWalletEventId = t, this.storeConnection(n)
    })
  }
  getLastWalletEventId() {
    return D(this, void 0, void 0, function*() {
      const t = yield this.getConnection();
      if (t && "lastWalletEventId" in t) return t.lastWalletEventId
    })
  }
  increaseNextRpcRequestId() {
    return D(this, void 0, void 0, function*() {
      const t = yield this.getConnection();
      if (t && "nextRpcRequestId" in t) {
        const n = t.nextRpcRequestId || 0;
        return t.nextRpcRequestId = n + 1, this.storeConnection(t)
      }
    })
  }
  getNextRpcRequestId() {
    return D(this, void 0, void 0, function*() {
      const t = yield this.getConnection();
      return t && "nextRpcRequestId" in t && t.nextRpcRequestId || 0
    })
  }
}
const Di = 2;
class hn {
  constructor(t, n) {
    this.storage = t, this.walletConnectionSource = n, this.type = "http", this.standardUniversalLink = "tc://", this.pendingRequests = new Map, this.session = null, this.gateway = null, this.pendingGateways = [], this.listeners = [], this.defaultOpeningDeadlineMS = 12e3, this.defaultRetryTimeoutMS = 2e3, this.connectionStorage = new fn(t)
  }
  static fromStorage(t) {
    return D(this, void 0, void 0, function*() {
      const r = yield new fn(t).getHttpConnection();
      return nn(r) ? new hn(t, r.connectionSource) : new hn(t, {
        bridgeUrl: r.session.bridgeUrl
      })
    })
  }
  connect(t, n) {
    var r;
    const o = Ue(n == null ? void 0 : n.signal);
    (r = this.abortController) === null || r === void 0 || r.abort(), this.abortController = o, this.closeGateways();
    const i = new Pr;
    this.session = {
      sessionCrypto: i,
      bridgeUrl: "bridgeUrl" in this.walletConnectionSource ? this.walletConnectionSource.bridgeUrl : ""
    }, this.connectionStorage.storeConnection({
      type: "http",
      connectionSource: this.walletConnectionSource,
      sessionCrypto: i
    }).then(() => D(this, void 0, void 0, function*() {
      o.signal.aborted || (yield tn(l => {
        var c;
        return this.openGateways(i, {
          openingDeadlineMS: (c = n == null ? void 0 : n.openingDeadlineMS) !== null && c !== void 0 ? c : this.defaultOpeningDeadlineMS,
          signal: l == null ? void 0 : l.signal
        })
      }, {
        attempts: Number.MAX_SAFE_INTEGER,
        delayMs: this.defaultRetryTimeoutMS,
        signal: o.signal
      }))
    }));
    const s = "universalLink" in this.walletConnectionSource && this.walletConnectionSource.universalLink ? this.walletConnectionSource.universalLink : this.standardUniversalLink;
    return this.generateUniversalLink(s, t)
  }
  restoreConnection(t) {
    var n, r;
    return D(this, void 0, void 0, function*() {
      const o = Ue(t == null ? void 0 : t.signal);
      if ((n = this.abortController) === null || n === void 0 || n.abort(), this.abortController = o, o.signal.aborted) return;
      this.closeGateways();
      const i = yield this.connectionStorage.getHttpConnection();
      if (!i || o.signal.aborted) return;
      const s = (r = t == null ? void 0 : t.openingDeadlineMS) !== null && r !== void 0 ? r : this.defaultOpeningDeadlineMS;
      if (nn(i)) return this.session = {
        sessionCrypto: i.sessionCrypto,
        bridgeUrl: "bridgeUrl" in this.walletConnectionSource ? this.walletConnectionSource.bridgeUrl : ""
      }, yield this.openGateways(i.sessionCrypto, {
        openingDeadlineMS: s,
        signal: o == null ? void 0 : o.signal
      });
      if (Array.isArray(this.walletConnectionSource)) throw new j("Internal error. Connection source is array while WalletConnectionSourceHTTP was expected.");
      if (this.session = i.session, this.gateway && (ve("Gateway is already opened, closing previous gateway"), yield this.gateway.close()), this.gateway = new xr(this.storage, this.walletConnectionSource.bridgeUrl, i.session.sessionCrypto.sessionId, this.gatewayListener.bind(this), this.gatewayErrorsListener.bind(this)), !o.signal.aborted) {
        this.listeners.forEach(l => l(i.connectEvent));
        try {
          yield tn(l => this.gateway.registerSession({
            openingDeadlineMS: s,
            signal: l.signal
          }), {
            attempts: Number.MAX_SAFE_INTEGER,
            delayMs: this.defaultRetryTimeoutMS,
            signal: o.signal
          })
        } catch {
          yield this.disconnect({
            signal: o.signal
          });
          return
        }
      }
    })
  }
  sendRequest(t, n) {
    const r = {};
    return typeof n == "function" ? r.onRequestSent = n : (r.onRequestSent = n == null ? void 0 : n.onRequestSent, r.signal = n == null ? void 0 : n.signal, r.attempts = n == null ? void 0 : n.attempts), new Promise((o, i) => D(this, void 0, void 0, function*() {
      var s;
      if (!this.gateway || !this.session || !("walletPublicKey" in this.session)) throw new j("Trying to send bridge request without session");
      const l = (yield this.connectionStorage.getNextRpcRequestId()).toString();
      yield this.connectionStorage.increaseNextRpcRequestId(), ve("Send http-bridge request:", Object.assign(Object.assign({}, t), {
        id: l
      }));
      const c = this.session.sessionCrypto.encrypt(JSON.stringify(Object.assign(Object.assign({}, t), {
        id: l
      })), Hn(this.session.walletPublicKey));
      try {
        yield this.gateway.send(c, this.session.walletPublicKey, t.method, {
          attempts: r == null ? void 0 : r.attempts,
          signal: r == null ? void 0 : r.signal
        }), (s = r == null ? void 0 : r.onRequestSent) === null || s === void 0 || s.call(r), this.pendingRequests.set(l.toString(), o)
      } catch (u) {
        i(u)
      }
    }))
  }
  closeConnection() {
    this.closeGateways(), this.listeners = [], this.session = null, this.gateway = null
  }
  disconnect(t) {
    return D(this, void 0, void 0, function*() {
      return new Promise(n => D(this, void 0, void 0, function*() {
        let r = !1,
          o = null;
        const i = () => {
          r || (r = !0, this.removeBridgeAndSession().then(n))
        };
        try {
          this.closeGateways();
          const s = Ue(t == null ? void 0 : t.signal);
          o = setTimeout(() => {
            s.abort()
          }, this.defaultOpeningDeadlineMS), yield this.sendRequest({
            method: "disconnect",
            params: []
          }, {
            onRequestSent: i,
            signal: s.signal,
            attempts: 1
          })
        } catch (s) {
          ve("Disconnect error:", s), r || this.removeBridgeAndSession().then(n)
        } finally {
          o && clearTimeout(o), i()
        }
      }))
    })
  }
  listen(t) {
    return this.listeners.push(t), () => this.listeners = this.listeners.filter(n => n !== t)
  }
  pause() {
    var t;
    (t = this.gateway) === null || t === void 0 || t.pause(), this.pendingGateways.forEach(n => n.pause())
  }
  unPause() {
    return D(this, void 0, void 0, function*() {
      const t = this.pendingGateways.map(n => n.unPause());
      this.gateway && t.push(this.gateway.unPause()), yield Promise.all(t)
    })
  }
  pendingGatewaysListener(t, n, r) {
    return D(this, void 0, void 0, function*() {
      if (!this.pendingGateways.includes(t)) {
        yield t.close();
        return
      }
      return this.closeGateways({
        except: t
      }), this.gateway && (ve("Gateway is already opened, closing previous gateway"), yield this.gateway.close()), this.session.bridgeUrl = n, this.gateway = t, this.gateway.setErrorsListener(this.gatewayErrorsListener.bind(this)), this.gateway.setListener(this.gatewayListener.bind(this)), this.gatewayListener(r)
    })
  }
  gatewayListener(t) {
    return D(this, void 0, void 0, function*() {
      const n = JSON.parse(this.session.sessionCrypto.decrypt(Jr.decode(t.message).toUint8Array(), Hn(t.from)));
      if (ve("Wallet message received:", n), !("event" in n)) {
        const o = n.id.toString(),
          i = this.pendingRequests.get(o);
        if (!i) {
          ve(`Response id ${o} doesn't match any request's id`);
          return
        }
        i(n), this.pendingRequests.delete(o);
        return
      }
      if (n.id !== void 0) {
        const o = yield this.connectionStorage.getLastWalletEventId();
        if (o !== void 0 && n.id <= o) {
          nt(`Received event id (=${n.id}) must be greater than stored last wallet event id (=${o}) `);
          return
        }
        n.event !== "connect" && (yield this.connectionStorage.storeLastWalletEventId(n.id))
      }
      const r = this.listeners;
      n.event === "connect" && (yield this.updateSession(n, t.from)), n.event === "disconnect" && (ve("Removing bridge and session: received disconnect event"), yield this.removeBridgeAndSession()), r.forEach(o => o(n))
    })
  }
  gatewayErrorsListener(t) {
    return D(this, void 0, void 0, function*() {
      throw new j(`Bridge error ${JSON.stringify(t)}`)
    })
  }
  updateSession(t, n) {
    return D(this, void 0, void 0, function*() {
      this.session = Object.assign(Object.assign({}, this.session), {
        walletPublicKey: n
      });
      const r = t.payload.items.find(i => i.name === "ton_addr"),
        o = Object.assign(Object.assign({}, t), {
          payload: Object.assign(Object.assign({}, t.payload), {
            items: [r]
          })
        });
      yield this.connectionStorage.storeConnection({
        type: "http",
        session: this.session,
        lastWalletEventId: t.id,
        connectEvent: o,
        nextRpcRequestId: 0
      })
    })
  }
  removeBridgeAndSession() {
    return D(this, void 0, void 0, function*() {
      this.closeConnection(), yield this.connectionStorage.removeConnection()
    })
  }
  generateUniversalLink(t, n) {
    return ft(t) ? this.generateTGUniversalLink(t, n) : this.generateRegularUniversalLink(t, n)
  }
  generateRegularUniversalLink(t, n) {
    const r = new URL(t);
    return r.searchParams.append("v", Di.toString()), r.searchParams.append("id", this.session.sessionCrypto.sessionId), r.searchParams.append("r", JSON.stringify(n)), r.toString()
  }
  generateTGUniversalLink(t, n) {
    const o = this.generateRegularUniversalLink("about:blank", n).split("?")[1],
      i = "tonconnect-" + Pi(o),
      s = this.convertToDirectLink(t),
      l = new URL(s);
    return l.searchParams.append("startapp", i), l.toString()
  }
  convertToDirectLink(t) {
    const n = new URL(t);
    return n.searchParams.has("attach") && (n.searchParams.delete("attach"), n.pathname += "/start"), n.toString()
  }
  openGateways(t, n) {
    return D(this, void 0, void 0, function*() {
      if (Array.isArray(this.walletConnectionSource)) {
        this.pendingGateways.map(r => r.close().catch()), this.pendingGateways = this.walletConnectionSource.map(r => {
          const o = new xr(this.storage, r.bridgeUrl, t.sessionId, () => {}, () => {});
          return o.setListener(i => this.pendingGatewaysListener(o, r.bridgeUrl, i)), o
        }), yield Promise.allSettled(this.pendingGateways.map(r => tn(o => {
          var i;
          return this.pendingGateways.some(s => s === r) ? r.registerSession({
            openingDeadlineMS: (i = n == null ? void 0 : n.openingDeadlineMS) !== null && i !== void 0 ? i : this.defaultOpeningDeadlineMS,
            signal: o.signal
          }) : r.close()
        }, {
          attempts: Number.MAX_SAFE_INTEGER,
          delayMs: this.defaultRetryTimeoutMS,
          signal: n == null ? void 0 : n.signal
        })));
        return
      } else return this.gateway && (ve("Gateway is already opened, closing previous gateway"), yield this.gateway.close()), this.gateway = new xr(this.storage, this.walletConnectionSource.bridgeUrl, t.sessionId, this.gatewayListener.bind(this), this.gatewayErrorsListener.bind(this)), yield this.gateway.registerSession({
        openingDeadlineMS: n == null ? void 0 : n.openingDeadlineMS,
        signal: n == null ? void 0 : n.signal
      })
    })
  }
  closeGateways(t) {
    var n;
    (n = this.gateway) === null || n === void 0 || n.close(), this.pendingGateways.filter(r => r !== (t == null ? void 0 : t.except)).forEach(r => r.close()), this.pendingGateways = []
  }
}

function Do(e, t) {
  return Ni(e, [t])
}

function Ni(e, t) {
  return !e || typeof e != "object" ? !1 : t.every(n => n in e)
}

function Il(e) {
  try {
    return !Do(e, "tonconnect") || !Do(e.tonconnect, "walletInfo") ? !1 : Ni(e.tonconnect.walletInfo, ["name", "app_name", "image", "about_url", "platforms"])
  } catch {
    return !1
  }
}
let Bl = class zt {
  constructor() {
    this.storage = {}
  }
  static getInstance() {
    return zt.instance || (zt.instance = new zt), zt.instance
  }
  get length() {
    return Object.keys(this.storage).length
  }
  clear() {
    this.storage = {}
  }
  getItem(t) {
    var n;
    return (n = this.storage[t]) !== null && n !== void 0 ? n : null
  }
  key(t) {
    var n;
    const r = Object.keys(this.storage);
    return t < 0 || t >= r.length ? null : (n = r[t]) !== null && n !== void 0 ? n : null
  }
  removeItem(t) {
    delete this.storage[t]
  }
  setItem(t, n) {
    this.storage[t] = n
  }
};

function ur() {
  if (!(typeof window > "u")) return window
}

function Wl() {
  const e = ur();
  if (!e) return [];
  try {
    return Object.keys(e)
  } catch {
    return []
  }
}

function Pl() {
  if (!(typeof document > "u")) return document
}

function Ul() {
  var e;
  const t = (e = ur()) === null || e === void 0 ? void 0 : e.location.origin;
  return t ? t + "/tonconnect-manifest.json" : ""
}

function Dl() {
  if (Nl()) return localStorage;
  if (Hl()) throw new j("`localStorage` is unavailable, but it is required for TonConnect. For more details, see https://github.com/ton-connect/sdk/tree/main/packages/sdk#init-connector");
  return Bl.getInstance()
}

function Nl() {
  try {
    return typeof localStorage < "u"
  } catch {
    return !1
  }
}

function Hl() {
  return typeof Nt < "u" && Nt.versions != null && Nt.versions.node != null
}
class Le {
  constructor(t, n) {
    this.injectedWalletKey = n, this.type = "injected", this.unsubscribeCallback = null, this.listenSubscriptions = !1, this.listeners = [];
    const r = Le.window;
    if (!Le.isWindowContainsWallet(r, n)) throw new to;
    this.connectionStorage = new fn(t), this.injectedWallet = r[n].tonconnect
  }
  static fromStorage(t) {
    return D(this, void 0, void 0, function*() {
      const r = yield new fn(t).getInjectedConnection();
      return new Le(t, r.jsBridgeKey)
    })
  }
  static isWalletInjected(t) {
    return Le.isWindowContainsWallet(this.window, t)
  }
  static isInsideWalletBrowser(t) {
    return Le.isWindowContainsWallet(this.window, t) ? this.window[t].tonconnect.isWalletBrowser : !1
  }
  static getCurrentlyInjectedWallets() {
    return this.window ? Wl().filter(([r, o]) => Il(o)).map(([r, o]) => ({
      name: o.tonconnect.walletInfo.name,
      appName: o.tonconnect.walletInfo.app_name,
      aboutUrl: o.tonconnect.walletInfo.about_url,
      imageUrl: o.tonconnect.walletInfo.image,
      tondns: o.tonconnect.walletInfo.tondns,
      jsBridgeKey: r,
      injected: !0,
      embedded: o.tonconnect.isWalletBrowser,
      platforms: o.tonconnect.walletInfo.platforms
    })) : []
  }
  static isWindowContainsWallet(t, n) {
    return !!t && n in t && typeof t[n] == "object" && "tonconnect" in t[n]
  }
  connect(t) {
    this._connect(Di, t)
  }
  restoreConnection() {
    return D(this, void 0, void 0, function*() {
      try {
        ve("Injected Provider restoring connection...");
        const t = yield this.injectedWallet.restoreConnection();
        ve("Injected Provider restoring connection response", t), t.event === "connect" ? (this.makeSubscriptions(), this.listeners.forEach(n => n(t))) : yield this.connectionStorage.removeConnection()
      } catch (t) {
        yield this.connectionStorage.removeConnection(), console.error(t)
      }
    })
  }
  closeConnection() {
    this.listenSubscriptions && this.injectedWallet.disconnect(), this.closeAllListeners()
  }
  disconnect() {
    return D(this, void 0, void 0, function*() {
      return new Promise(t => {
        const n = () => {
          this.closeAllListeners(), this.connectionStorage.removeConnection().then(t)
        };
        try {
          this.injectedWallet.disconnect(), n()
        } catch (r) {
          ve(r), this.sendRequest({
            method: "disconnect",
            params: []
          }, n)
        }
      })
    })
  }
  closeAllListeners() {
    var t;
    this.listenSubscriptions = !1, this.listeners = [], (t = this.unsubscribeCallback) === null || t === void 0 || t.call(this)
  }
  listen(t) {
    return this.listeners.push(t), () => this.listeners = this.listeners.filter(n => n !== t)
  }
  sendRequest(t, n) {
    var r;
    return D(this, void 0, void 0, function*() {
      const o = {};
      typeof n == "function" ? o.onRequestSent = n : (o.onRequestSent = n == null ? void 0 : n.onRequestSent, o.signal = n == null ? void 0 : n.signal);
      const i = (yield this.connectionStorage.getNextRpcRequestId()).toString();
      yield this.connectionStorage.increaseNextRpcRequestId(), ve("Send injected-bridge request:", Object.assign(Object.assign({}, t), {
        id: i
      }));
      const s = this.injectedWallet.send(Object.assign(Object.assign({}, t), {
        id: i
      }));
      return s.then(l => ve("Wallet message received:", l)), (r = o == null ? void 0 : o.onRequestSent) === null || r === void 0 || r.call(o), s
    })
  }
  _connect(t, n) {
    return D(this, void 0, void 0, function*() {
      try {
        ve(`Injected Provider connect request: protocolVersion: ${t}, message:`, n);
        const r = yield this.injectedWallet.connect(t, n);
        ve("Injected Provider connect response:", r), r.event === "connect" && (yield this.updateSession(), this.makeSubscriptions()), this.listeners.forEach(o => o(r))
      } catch (r) {
        ve("Injected Provider connect error:", r);
        const o = {
          event: "connect_error",
          payload: {
            code: 0,
            message: r == null ? void 0 : r.toString()
          }
        };
        this.listeners.forEach(i => i(o))
      }
    })
  }
  makeSubscriptions() {
    this.listenSubscriptions = !0, this.unsubscribeCallback = this.injectedWallet.listen(t => {
      ve("Wallet message received:", t), this.listenSubscriptions && this.listeners.forEach(n => n(t)), t.event === "disconnect" && this.disconnect()
    })
  }
  updateSession() {
    return this.connectionStorage.storeConnection({
      type: "injected",
      jsBridgeKey: this.injectedWalletKey,
      nextRpcRequestId: 0
    })
  }
}
Le.window = ur();
class Fl {
  constructor() {
    this.localStorage = Dl()
  }
  getItem(t) {
    return D(this, void 0, void 0, function*() {
      return this.localStorage.getItem(t)
    })
  }
  removeItem(t) {
    return D(this, void 0, void 0, function*() {
      this.localStorage.removeItem(t)
    })
  }
  setItem(t, n) {
    return D(this, void 0, void 0, function*() {
      this.localStorage.setItem(t, n)
    })
  }
}

function kt(e) {
  return Ol(e) && e.injected
}

function dr(e) {
  return kt(e) && e.embedded
}

function Ol(e) {
  return "jsBridgeKey" in e
}

function ro(e) {
  return "bridgeUrl" in e
}
const jl = [{
  app_name: "telegram-wallet",
  name: "Wallet",
  image: "https://wallet.tg/images/logo-288.png",
  about_url: "https://wallet.tg/",
  universal_url: "https://t.me/wallet?attach=wallet",
  bridge: [{
    type: "sse",
    url: "https://bridge.ton.space/bridge"
  }],
  platforms: ["ios", "android", "macos", "windows", "linux"]
}, {
  app_name: "tonkeeper",
  name: "Tonkeeper",
  image: "https://tonkeeper.com/assets/tonconnect-icon.png",
  tondns: "tonkeeper.ton",
  about_url: "https://tonkeeper.com",
  universal_url: "https://app.tonkeeper.com/ton-connect",
  deepLink: "tonkeeper-tc://",
  bridge: [{
    type: "sse",
    url: "https://bridge.tonapi.io/bridge"
  }, {
    type: "js",
    key: "tonkeeper"
  }],
  platforms: ["ios", "android", "chrome", "firefox", "macos"]
}, {
  app_name: "mytonwallet",
  name: "MyTonWallet",
  image: "https://static.mytonwallet.io/icon-256.png",
  about_url: "https://mytonwallet.io",
  universal_url: "https://connect.mytonwallet.org",
  bridge: [{
    type: "js",
    key: "mytonwallet"
  }, {
    type: "sse",
    url: "https://tonconnectbridge.mytonwallet.org/bridge/"
  }],
  platforms: ["chrome", "windows", "macos", "linux", "ios", "android", "firefox"]
}, {
  app_name: "openmask",
  name: "OpenMask",
  image: "https://raw.githubusercontent.com/OpenProduct/openmask-extension/main/public/openmask-logo-288.png",
  about_url: "https://www.openmask.app/",
  bridge: [{
    type: "js",
    key: "openmask"
  }],
  platforms: ["chrome"]
}, {
  app_name: "tonhub",
  name: "Tonhub",
  image: "https://tonhub.com/tonconnect_logo.png",
  about_url: "https://tonhub.com",
  universal_url: "https://tonhub.com/ton-connect",
  bridge: [{
    type: "js",
    key: "tonhub"
  }, {
    type: "sse",
    url: "https://connect.tonhubapi.com/tonconnect"
  }],
  platforms: ["ios", "android"]
}, {
  app_name: "dewallet",
  name: "DeWallet",
  image: "https://raw.githubusercontent.com/delab-team/manifests-images/main/WalletAvatar.png",
  about_url: "https://delabwallet.com",
  universal_url: "https://t.me/dewallet?attach=wallet",
  bridge: [{
    type: "sse",
    url: "https://sse-bridge.delab.team/bridge"
  }],
  platforms: ["ios", "android"]
}, {
  app_name: "xtonwallet",
  name: "XTONWallet",
  image: "https://xtonwallet.com/assets/img/icon-256-back.png",
  about_url: "https://xtonwallet.com",
  bridge: [{
    type: "js",
    key: "xtonwallet"
  }],
  platforms: ["chrome", "firefox"]
}, {
  app_name: "tonwallet",
  name: "TON Wallet",
  image: "https://wallet.ton.org/assets/ui/qr-logo.png",
  about_url: "https://chrome.google.com/webstore/detail/ton-wallet/nphplpgoakhhjchkkhmiggakijnkhfnd",
  bridge: [{
    type: "js",
    key: "tonwallet"
  }],
  platforms: ["chrome"]
}, {
  app_name: "bitgetTonWallet",
  name: "Bitget Wallet",
  image: "https://raw.githubusercontent.com/bitkeepwallet/download/main/logo/png/bitget_wallet_logo_0_gas_fee.png",
  about_url: "https://web3.bitget.com",
  deepLink: "bitkeep://",
  bridge: [{
    type: "js",
    key: "bitgetTonWallet"
  }, {
    type: "sse",
    url: "https://bridge.tonapi.io/bridge"
  }],
  platforms: ["ios", "android", "chrome"],
  universal_url: "https://bkcode.vip/ton-connect"
}, {
  app_name: "safepalwallet",
  name: "SafePal",
  image: "https://s.pvcliping.com/web/public_image/SafePal_x288.png",
  tondns: "",
  about_url: "https://www.safepal.com",
  universal_url: "https://link.safepal.io/ton-connect",
  deepLink: "safepal-tc://",
  bridge: [{
    type: "sse",
    url: "https://ton-bridge.safepal.com/tonbridge/v1/bridge"
  }, {
    type: "js",
    key: "safepalwallet"
  }],
  platforms: ["ios", "android", "chrome", "firefox"]
}, {
  app_name: "okxTonWallet",
  name: "OKX Wallet",
  image: "https://static.okx.com/cdn/assets/imgs/247/58E63FEA47A2B7D7.png",
  about_url: "https://www.okx.com/web3",
  universal_url: "https://www.okx.com/download?appendQuery=true&deeplink=okx://web3/wallet/tonconnect",
  bridge: [{
    type: "js",
    key: "okxTonWallet"
  }, {
    type: "sse",
    url: "https://www.okx.com/tonbridge/discover/rpc/bridge"
  }],
  platforms: ["chrome", "safari", "firefox", "ios", "android"]
}, {
  app_name: "okxTonWalletTr",
  name: "OKX TR Wallet",
  image: "https://static.okx.com/cdn/assets/imgs/247/587A8296F0BB640F.png",
  about_url: "https://tr.okx.com/web3",
  universal_url: "https://tr.okx.com/download?appendQuery=true&deeplink=okxtr://web3/wallet/tonconnect",
  bridge: [{
    type: "js",
    key: "okxTonWallet"
  }, {
    type: "sse",
    url: "https://www.okx.com/tonbridge/discover/rpc/bridge"
  }],
  platforms: ["chrome", "safari", "firefox", "ios", "android"]
}];
class Ur {
  constructor(t) {
    this.walletsListCache = null, this.walletsListCacheCreationTimestamp = null, this.walletsListSource = "https://raw.githubusercontent.com/ton-blockchain/wallets-list/main/wallets-v2.json", t != null && t.walletsListSource && (this.walletsListSource = t.walletsListSource), t != null && t.cacheTTLMs && (this.cacheTTLMs = t.cacheTTLMs)
  }
  getWallets() {
    return D(this, void 0, void 0, function*() {
      return this.cacheTTLMs && this.walletsListCacheCreationTimestamp && Date.now() > this.walletsListCacheCreationTimestamp + this.cacheTTLMs && (this.walletsListCache = null), this.walletsListCache || (this.walletsListCache = this.fetchWalletsList(), this.walletsListCache.then(() => {
        this.walletsListCacheCreationTimestamp = Date.now()
      }).catch(() => {
        this.walletsListCache = null, this.walletsListCacheCreationTimestamp = null
      })), this.walletsListCache
    })
  }
  getEmbeddedWallet() {
    return D(this, void 0, void 0, function*() {
      const n = (yield this.getWallets()).filter(dr);
      return n.length !== 1 ? null : n[0]
    })
  }
  fetchWalletsList() {
    return D(this, void 0, void 0, function*() {
      let t = [];
      try {
        if (t = yield(yield fetch(this.walletsListSource)).json(), !Array.isArray(t)) throw new no("Wrong wallets list format, wallets list must be an array.");
        const o = t.filter(i => !this.isCorrectWalletConfigDTO(i));
        o.length && (nt(`Wallet(s) ${o.map(i=>i.name).join(", ")} config format is wrong. They were removed from the wallets list.`), t = t.filter(i => this.isCorrectWalletConfigDTO(i)))
      } catch (r) {
        nt(r), t = jl
      }
      let n = [];
      try {
        n = Le.getCurrentlyInjectedWallets()
      } catch (r) {
        nt(r)
      }
      return this.mergeWalletsLists(this.walletConfigDTOListToWalletConfigList(t), n)
    })
  }
  walletConfigDTOListToWalletConfigList(t) {
    return t.map(n => {
      const o = {
        name: n.name,
        appName: n.app_name,
        imageUrl: n.image,
        aboutUrl: n.about_url,
        tondns: n.tondns,
        platforms: n.platforms
      };
      return n.bridge.forEach(i => {
        if (i.type === "sse" && (o.bridgeUrl = i.url, o.universalLink = n.universal_url, o.deepLink = n.deepLink), i.type === "js") {
          const s = i.key;
          o.jsBridgeKey = s, o.injected = Le.isWalletInjected(s), o.embedded = Le.isInsideWalletBrowser(s)
        }
      }), o
    })
  }
  mergeWalletsLists(t, n) {
    return [...new Set(t.concat(n).map(o => o.name)).values()].map(o => {
      const i = t.find(l => l.name === o),
        s = n.find(l => l.name === o);
      return Object.assign(Object.assign({}, i && Object.assign({}, i)), s && Object.assign({}, s))
    })
  }
  isCorrectWalletConfigDTO(t) {
    if (!t || typeof t != "object") return !1;
    const n = "name" in t,
      r = "app_name" in t,
      o = "image" in t,
      i = "about_url" in t,
      s = "platforms" in t;
    if (!n || !o || !i || !s || !r || !t.platforms || !Array.isArray(t.platforms) || !t.platforms.length || !("bridge" in t) || !Array.isArray(t.bridge) || !t.bridge.length) return !1;
    const l = t.bridge;
    if (l.some(d => !d || typeof d != "object" || !("type" in d))) return !1;
    const c = l.find(d => d.type === "sse");
    if (c && (!("url" in c) || !c.url || !t.universal_url)) return !1;
    const u = l.find(d => d.type === "js");
    return !(u && (!("key" in u) || !u.key))
  }
}
class jn extends j {
  get info() {
    return "Wallet doesn't support requested feature method."
  }
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, jn.prototype)
  }
}

function Kl(e, t) {
  const n = e.includes("SendTransaction"),
    r = e.find(o => o && typeof o == "object" && o.name === "SendTransaction");
  if (!n && !r) throw new jn("Wallet doesn't support SendTransaction feature.");
  if (r && r.maxMessages !== void 0) {
    if (r.maxMessages < t.requiredMessagesNumber) throw new jn(`Wallet is not able to handle such SendTransaction request. Max support messages number is ${r.maxMessages}, but ${t.requiredMessagesNumber} is required.`);
    return
  }
  $l("Connected wallet didn't provide information about max allowed messages in the SendTransaction request. Request may be rejected by the wallet.")
}

function Hi() {
  return {
    type: "request-version"
  }
}

function Fi(e) {
  return {
    type: "response-version",
    version: e
  }
}

function Lt(e) {
  return {
    ton_connect_sdk_lib: e.ton_connect_sdk_lib,
    ton_connect_ui_lib: e.ton_connect_ui_lib
  }
}

function qt(e, t) {
  var n, r, o, i, s, l, c, u;
  const f = ((n = t == null ? void 0 : t.connectItems) === null || n === void 0 ? void 0 : n.tonProof) && "proof" in t.connectItems.tonProof ? "ton_proof" : "ton_addr";
  return {
    wallet_address: (o = (r = t == null ? void 0 : t.account) === null || r === void 0 ? void 0 : r.address) !== null && o !== void 0 ? o : null,
    wallet_type: (i = t == null ? void 0 : t.device.appName) !== null && i !== void 0 ? i : null,
    wallet_version: (s = t == null ? void 0 : t.device.appVersion) !== null && s !== void 0 ? s : null,
    auth_type: f,
    custom_data: Object.assign({
      chain_id: (c = (l = t == null ? void 0 : t.account) === null || l === void 0 ? void 0 : l.chain) !== null && c !== void 0 ? c : null,
      provider: (u = t == null ? void 0 : t.provider) !== null && u !== void 0 ? u : null
    }, Lt(e))
  }
}

function Oi(e) {
  return {
    type: "connection-started",
    custom_data: Lt(e)
  }
}

function ji(e, t) {
  return Object.assign({
    type: "connection-completed",
    is_success: !0
  }, qt(e, t))
}

function Ki(e, t, n) {
  return {
    type: "connection-error",
    is_success: !1,
    error_message: t,
    error_code: n ?? null,
    custom_data: Lt(e)
  }
}

function Vi(e) {
  return {
    type: "connection-restoring-started",
    custom_data: Lt(e)
  }
}

function qi(e, t) {
  return Object.assign({
    type: "connection-restoring-completed",
    is_success: !0
  }, qt(e, t))
}

function Zi(e, t) {
  return {
    type: "connection-restoring-error",
    is_success: !1,
    error_message: t,
    custom_data: Lt(e)
  }
}

function oo(e, t) {
  var n, r, o, i;
  return {
    valid_until: (n = String(t.validUntil)) !== null && n !== void 0 ? n : null,
    from: (i = (r = t.from) !== null && r !== void 0 ? r : (o = e == null ? void 0 : e.account) === null || o === void 0 ? void 0 : o.address) !== null && i !== void 0 ? i : null,
    messages: t.messages.map(s => {
      var l, c;
      return {
        address: (l = s.address) !== null && l !== void 0 ? l : null,
        amount: (c = s.amount) !== null && c !== void 0 ? c : null
      }
    })
  }
}

function Gi(e, t, n) {
  return Object.assign(Object.assign({
    type: "transaction-sent-for-signature"
  }, qt(e, t)), oo(t, n))
}

function Qi(e, t, n, r) {
  return Object.assign(Object.assign({
    type: "transaction-signed",
    is_success: !0,
    signed_transaction: r.boc
  }, qt(e, t)), oo(t, n))
}

function zi(e, t, n, r, o) {
  return Object.assign(Object.assign({
    type: "transaction-signing-failed",
    is_success: !1,
    error_message: r,
    error_code: o ?? null
  }, qt(e, t)), oo(t, n))
}

function Yi(e, t, n) {
  return Object.assign({
    type: "disconnection",
    scope: n
  }, qt(e, t))
}
class Ji {
  constructor() {
    this.window = ur()
  }
  dispatchEvent(t, n) {
    var r;
    return D(this, void 0, void 0, function*() {
      const o = new CustomEvent(t, {
        detail: n
      });
      (r = this.window) === null || r === void 0 || r.dispatchEvent(o)
    })
  }
  addEventListener(t, n, r) {
    var o;
    return D(this, void 0, void 0, function*() {
      return (o = this.window) === null || o === void 0 || o.addEventListener(t, n, r), () => {
        var i;
        return (i = this.window) === null || i === void 0 ? void 0 : i.removeEventListener(t, n)
      }
    })
  }
}
class Vl {
  constructor(t) {
    var n;
    this.eventPrefix = "ton-connect-", this.tonConnectUiVersion = null, this.eventDispatcher = (n = t == null ? void 0 : t.eventDispatcher) !== null && n !== void 0 ? n : new Ji, this.tonConnectSdkVersion = t.tonConnectSdkVersion, this.init().catch()
  }
  get version() {
    return Lt({
      ton_connect_sdk_lib: this.tonConnectSdkVersion,
      ton_connect_ui_lib: this.tonConnectUiVersion
    })
  }
  init() {
    return D(this, void 0, void 0, function*() {
      try {
        yield this.setRequestVersionHandler(), this.tonConnectUiVersion = yield this.requestTonConnectUiVersion()
      } catch {}
    })
  }
  setRequestVersionHandler() {
    return D(this, void 0, void 0, function*() {
      yield this.eventDispatcher.addEventListener("ton-connect-request-version", () => D(this, void 0, void 0, function*() {
        yield this.eventDispatcher.dispatchEvent("ton-connect-response-version", Fi(this.tonConnectSdkVersion))
      }))
    })
  }
  requestTonConnectUiVersion() {
    return D(this, void 0, void 0, function*() {
      return new Promise((t, n) => D(this, void 0, void 0, function*() {
        try {
          yield this.eventDispatcher.addEventListener("ton-connect-ui-response-version", r => {
            t(r.detail.version)
          }, {
            once: !0
          }), yield this.eventDispatcher.dispatchEvent("ton-connect-ui-request-version", Hi())
        } catch (r) {
          n(r)
        }
      }))
    })
  }
  dispatchUserActionEvent(t) {
    try {
      this.eventDispatcher.dispatchEvent(`${this.eventPrefix}${t.type}`, t).catch()
    } catch {}
  }
  trackConnectionStarted(...t) {
    try {
      const n = Oi(this.version, ...t);
      this.dispatchUserActionEvent(n)
    } catch {}
  }
  trackConnectionCompleted(...t) {
    try {
      const n = ji(this.version, ...t);
      this.dispatchUserActionEvent(n)
    } catch {}
  }
  trackConnectionError(...t) {
    try {
      const n = Ki(this.version, ...t);
      this.dispatchUserActionEvent(n)
    } catch {}
  }
  trackConnectionRestoringStarted(...t) {
    try {
      const n = Vi(this.version, ...t);
      this.dispatchUserActionEvent(n)
    } catch {}
  }
  trackConnectionRestoringCompleted(...t) {
    try {
      const n = qi(this.version, ...t);
      this.dispatchUserActionEvent(n)
    } catch {}
  }
  trackConnectionRestoringError(...t) {
    try {
      const n = Zi(this.version, ...t);
      this.dispatchUserActionEvent(n)
    } catch {}
  }
  trackDisconnection(...t) {
    try {
      const n = Yi(this.version, ...t);
      this.dispatchUserActionEvent(n)
    } catch {}
  }
  trackTransactionSentForSignature(...t) {
    try {
      const n = Gi(this.version, ...t);
      this.dispatchUserActionEvent(n)
    } catch {}
  }
  trackTransactionSigned(...t) {
    try {
      const n = Qi(this.version, ...t);
      this.dispatchUserActionEvent(n)
    } catch {}
  }
  trackTransactionSigningFailed(...t) {
    try {
      const n = zi(this.version, ...t);
      this.dispatchUserActionEvent(n)
    } catch {}
  }
}
const ql = "3.0.5";
class At {
  constructor(t) {
    if (this.walletsList = new Ur, this._wallet = null, this.provider = null, this.statusChangeSubscriptions = [], this.statusChangeErrorSubscriptions = [], this.dappSettings = {
        manifestUrl: (t == null ? void 0 : t.manifestUrl) || Ul(),
        storage: (t == null ? void 0 : t.storage) || new Fl
      }, this.walletsList = new Ur({
        walletsListSource: t == null ? void 0 : t.walletsListSource,
        cacheTTLMs: t == null ? void 0 : t.walletsListCacheTTLMs
      }), this.tracker = new Vl({
        eventDispatcher: t == null ? void 0 : t.eventDispatcher,
        tonConnectSdkVersion: ql
      }), !this.dappSettings.manifestUrl) throw new Xr("Dapp tonconnect-manifest.json must be specified if window.location.origin is undefined. See more https://github.com/ton-connect/docs/blob/main/requests-responses.md#app-manifest");
    this.bridgeConnectionStorage = new fn(this.dappSettings.storage), t != null && t.disableAutoPauseConnection || this.addWindowFocusAndBlurSubscriptions()
  }
  static getWallets() {
    return this.walletsList.getWallets()
  }
  get connected() {
    return this._wallet !== null
  }
  get account() {
    var t;
    return ((t = this._wallet) === null || t === void 0 ? void 0 : t.account) || null
  }
  get wallet() {
    return this._wallet
  }
  set wallet(t) {
    this._wallet = t, this.statusChangeSubscriptions.forEach(n => n(this._wallet))
  }
  getWallets() {
    return this.walletsList.getWallets()
  }
  onStatusChange(t, n) {
    return this.statusChangeSubscriptions.push(t), n && this.statusChangeErrorSubscriptions.push(n), () => {
      this.statusChangeSubscriptions = this.statusChangeSubscriptions.filter(r => r !== t), n && (this.statusChangeErrorSubscriptions = this.statusChangeErrorSubscriptions.filter(r => r !== n))
    }
  }
  connect(t, n) {
    var r, o;
    const i = {};
    if (typeof n == "object" && "tonProof" in n && (i.request = n), typeof n == "object" && ("openingDeadlineMS" in n || "signal" in n || "request" in n) && (i.request = n == null ? void 0 : n.request, i.openingDeadlineMS = n == null ? void 0 : n.openingDeadlineMS, i.signal = n == null ? void 0 : n.signal), this.connected) throw new eo;
    const s = Ue(i == null ? void 0 : i.signal);
    if ((r = this.abortController) === null || r === void 0 || r.abort(), this.abortController = s, s.signal.aborted) throw new j("Connection was aborted");
    return (o = this.provider) === null || o === void 0 || o.closeConnection(), this.provider = this.createProvider(t), s.signal.addEventListener("abort", () => {
      var l;
      (l = this.provider) === null || l === void 0 || l.closeConnection(), this.provider = null
    }), this.tracker.trackConnectionStarted(), this.provider.connect(this.createConnectRequest(i == null ? void 0 : i.request), {
      openingDeadlineMS: i == null ? void 0 : i.openingDeadlineMS,
      signal: s.signal
    })
  }
  restoreConnection(t) {
    var n, r;
    return D(this, void 0, void 0, function*() {
      this.tracker.trackConnectionRestoringStarted();
      const o = Ue(t == null ? void 0 : t.signal);
      if ((n = this.abortController) === null || n === void 0 || n.abort(), this.abortController = o, o.signal.aborted) {
        this.tracker.trackConnectionRestoringError("Connection restoring was aborted");
        return
      }
      const [i, s] = yield Promise.all([this.bridgeConnectionStorage.storedConnectionType(), this.walletsList.getEmbeddedWallet()]);
      if (o.signal.aborted) {
        this.tracker.trackConnectionRestoringError("Connection restoring was aborted");
        return
      }
      let l = null;
      try {
        switch (i) {
          case "http":
            l = yield hn.fromStorage(this.dappSettings.storage);
            break;
          case "injected":
            l = yield Le.fromStorage(this.dappSettings.storage);
            break;
          default:
            if (s) l = this.createProvider(s);
            else return
        }
      } catch {
        this.tracker.trackConnectionRestoringError("Provider is not restored"), yield this.bridgeConnectionStorage.removeConnection(), l == null || l.closeConnection(), l = null;
        return
      }
      if (o.signal.aborted) {
        l == null || l.closeConnection(), this.tracker.trackConnectionRestoringError("Connection restoring was aborted");
        return
      }
      if (!l) {
        nt("Provider is not restored"), this.tracker.trackConnectionRestoringError("Provider is not restored");
        return
      }(r = this.provider) === null || r === void 0 || r.closeConnection(), this.provider = l, l.listen(this.walletEventsListener.bind(this));
      const c = () => {
        this.tracker.trackConnectionRestoringError("Connection restoring was aborted"), l == null || l.closeConnection(), l = null
      };
      o.signal.addEventListener("abort", c);
      const u = tn(f => D(this, void 0, void 0, function*() {
          yield l == null ? void 0 : l.restoreConnection({
            openingDeadlineMS: t == null ? void 0 : t.openingDeadlineMS,
            signal: f.signal
          }), o.signal.removeEventListener("abort", c), this.connected ? this.tracker.trackConnectionRestoringCompleted(this.wallet) : this.tracker.trackConnectionRestoringError("Connection restoring failed")
        }), {
          attempts: Number.MAX_SAFE_INTEGER,
          delayMs: 2e3,
          signal: t == null ? void 0 : t.signal
        }),
        d = new Promise(f => setTimeout(() => f(), 12e3));
      return Promise.race([u, d])
    })
  }
  sendTransaction(t, n) {
    return D(this, void 0, void 0, function*() {
      const r = {};
      typeof n == "function" ? r.onRequestSent = n : (r.onRequestSent = n == null ? void 0 : n.onRequestSent, r.signal = n == null ? void 0 : n.signal);
      const o = Ue(r == null ? void 0 : r.signal);
      if (o.signal.aborted) throw new j("Transaction sending was aborted");
      this.checkConnection(), Kl(this.wallet.device.features, {
        requiredMessagesNumber: t.messages.length
      }), this.tracker.trackTransactionSentForSignature(this.wallet, t);
      const {
        validUntil: i
      } = t, s = bl(t, ["validUntil"]), l = t.from || this.account.address, c = t.network || this.account.chain, u = yield this.provider.sendRequest($n.convertToRpcRequest(Object.assign(Object.assign({}, s), {
        valid_until: i,
        from: l,
        network: c
      })), {
        onRequestSent: r.onRequestSent,
        signal: o.signal
      });
      if ($n.isError(u)) return this.tracker.trackTransactionSigningFailed(this.wallet, t, u.error.message, u.error.code), $n.parseAndThrowError(u);
      const d = $n.convertFromRpcResponse(u);
      return this.tracker.trackTransactionSigned(this.wallet, t, d), d
    })
  }
  disconnect(t) {
    var n;
    return D(this, void 0, void 0, function*() {
      if (!this.connected) throw new Fn;
      const r = Ue(t == null ? void 0 : t.signal),
        o = this.abortController;
      if (this.abortController = r, r.signal.aborted) throw new j("Disconnect was aborted");
      this.onWalletDisconnected("dapp"), yield(n = this.provider) === null || n === void 0 ? void 0 : n.disconnect({
        signal: r.signal
      }), o == null || o.abort()
    })
  }
  pauseConnection() {
    var t;
    ((t = this.provider) === null || t === void 0 ? void 0 : t.type) === "http" && this.provider.pause()
  }
  unPauseConnection() {
    var t;
    return ((t = this.provider) === null || t === void 0 ? void 0 : t.type) !== "http" ? Promise.resolve() : this.provider.unPause()
  }
  addWindowFocusAndBlurSubscriptions() {
    const t = Pl();
    if (t) try {
      t.addEventListener("visibilitychange", () => {
        t.hidden ? this.pauseConnection() : this.unPauseConnection().catch()
      })
    } catch (n) {
      nt("Cannot subscribe to the document.visibilitychange: ", n)
    }
  }
  createProvider(t) {
    let n;
    return !Array.isArray(t) && xl(t) ? n = new Le(this.dappSettings.storage, t.jsBridgeKey) : n = new hn(this.dappSettings.storage, t), n.listen(this.walletEventsListener.bind(this)), n
  }
  walletEventsListener(t) {
    switch (t.event) {
      case "connect":
        this.onWalletConnected(t.payload);
        break;
      case "connect_error":
        this.onWalletConnectError(t.payload);
        break;
      case "disconnect":
        this.onWalletDisconnected("wallet")
    }
  }
  onWalletConnected(t) {
    const n = t.items.find(i => i.name === "ton_addr"),
      r = t.items.find(i => i.name === "ton_proof");
    if (!n) throw new j("ton_addr connection item was not found");
    const o = {
      device: t.device,
      provider: this.provider.type,
      account: {
        address: n.address,
        chain: n.network,
        walletStateInit: n.walletStateInit,
        publicKey: n.publicKey
      }
    };
    r && (o.connectItems = {
      tonProof: r
    }), this.wallet = o, this.tracker.trackConnectionCompleted(o)
  }
  onWalletConnectError(t) {
    const n = kl.parseError(t);
    if (this.statusChangeErrorSubscriptions.forEach(r => r(n)), ve(n), this.tracker.trackConnectionError(t.message, t.code), n instanceof sr || n instanceof ir) throw nt(n), n
  }
  onWalletDisconnected(t) {
    this.tracker.trackDisconnection(this.wallet, t), this.wallet = null
  }
  checkConnection() {
    if (!this.connected) throw new Fn
  }
  createConnectRequest(t) {
    const n = [{
      name: "ton_addr"
    }];
    return t != null && t.tonProof && n.push({
      name: "ton_proof",
      payload: t.tonProof
    }), {
      manifestUrl: this.dappSettings.manifestUrl,
      items: n
    }
  }
}
At.walletsList = new Ur;
At.isWalletInjected = e => Le.isWalletInjected(e);
At.isInsideWalletBrowser = e => Le.isInsideWalletBrowser(e);
const Zl = 81,
  Gl = 128;

function io(e, t = !1) {
  const {
    wc: n,
    hex: r
  } = Ql(e);
  let o = Zl;
  t && (o |= Gl);
  const i = new Int8Array(34);
  i[0] = o, i[1] = n, i.set(r, 2);
  const s = new Uint8Array(36);
  return s.set(i), s.set(zl(i), 34), Jr.encode(s).replace(/\+/g, "-").replace(/\//g, "_")
}

function Ql(e) {
  if (!e.includes(":")) throw new Wt(`Wrong address ${e}. Address must include ":".`);
  const t = e.split(":");
  if (t.length !== 2) throw new Wt(`Wrong address ${e}. Address must include ":" only once.`);
  const n = parseInt(t[0]);
  if (n !== 0 && n !== -1) throw new Wt(`Wrong address ${e}. WC must be eq 0 or -1, but ${n} received.`);
  const r = t[1];
  if ((r == null ? void 0 : r.length) !== 64) throw new Wt(`Wrong address ${e}. Hex part must be 64bytes length, but ${r==null?void 0:r.length} received.`);
  return {
    wc: n,
    hex: Yl(r)
  }
}

function zl(e) {
  let n = 0;
  const r = new Uint8Array(e.length + 2);
  r.set(e);
  for (let o of r) {
    let i = 128;
    for (; i > 0;) n <<= 1, o & i && (n += 1), i >>= 1, n > 65535 && (n &= 65535, n ^= 4129)
  }
  return new Uint8Array([Math.floor(n / 256), n % 256])
}
const Dr = {};
for (let e = 0; e <= 255; e++) {
  let t = e.toString(16);
  t.length < 2 && (t = "0" + t), Dr[t] = e
}

function Yl(e) {
  e = e.toLowerCase();
  const t = e.length;
  if (t % 2 !== 0) throw new On("Hex string must have length a multiple of 2: " + e);
  const n = t / 2,
    r = new Uint8Array(n);
  for (let o = 0; o < n; o++) {
    const i = o * 2,
      s = e.substring(i, i + 2);
    if (!Dr.hasOwnProperty(s)) throw new On("Invalid hex character: " + s);
    r[o] = Dr[s]
  }
  return r
}
var Jl = Object.defineProperty,
  Xl = Object.defineProperties,
  ea = Object.getOwnPropertyDescriptors,
  No = Object.getOwnPropertySymbols,
  ta = Object.prototype.hasOwnProperty,
  na = Object.prototype.propertyIsEnumerable,
  Nr = (e, t, n) => t in e ? Jl(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
  }) : e[t] = n,
  re = (e, t) => {
    for (var n in t || (t = {})) ta.call(t, n) && Nr(e, n, t[n]);
    if (No)
      for (var n of No(t)) na.call(t, n) && Nr(e, n, t[n]);
    return e
  },
  Te = (e, t) => Xl(e, ea(t)),
  K = (e, t, n) => (Nr(e, typeof t != "symbol" ? t + "" : t, n), n),
  ne = (e, t, n) => new Promise((r, o) => {
    var i = c => {
        try {
          l(n.next(c))
        } catch (u) {
          o(u)
        }
      },
      s = c => {
        try {
          l(n.throw(c))
        } catch (u) {
          o(u)
        }
      },
      l = c => c.done ? r(c.value) : Promise.resolve(c.value).then(i, s);
    l((n = n.apply(e, t)).next())
  }),
  Ho, Fo, Oo, jo, Ko, Vo, qo, Zo;
const ce = {};

function ra(e) {
  ce.context = e
}
const oa = (e, t) => e === t,
  Ne = Symbol("solid-proxy"),
  Hr = Symbol("solid-track"),
  Kn = {
    equals: oa
  };
let Xi = ss;
const st = 1,
  Vn = 2,
  es = {
    owned: null,
    cleanups: null,
    context: null,
    owner: null
  },
  Sr = {};
var we = null;
let _t = null,
  ue = null,
  _e = null,
  rt = null,
  so = 0;

function rn(e, t) {
  const n = ue,
    r = we,
    o = e.length === 0,
    i = o ? es : {
      owned: null,
      cleanups: null,
      context: null,
      owner: t === void 0 ? r : t
    },
    s = o ? e : () => e(() => Ce(() => mr(i)));
  we = i, ue = null;
  try {
    return mt(s, !0)
  } finally {
    ue = n, we = r
  }
}

function q(e, t) {
  t = t ? Object.assign({}, Kn, t) : Kn;
  const n = {
      value: e,
      observers: null,
      observerSlots: null,
      comparator: t.equals || void 0
    },
    r = o => (typeof o == "function" && (o = o(n.value)), is(n, o));
  return [os.bind(n), r]
}

function qn(e, t, n) {
  const r = gr(e, t, !0, st);
  Zt(r)
}

function Y(e, t, n) {
  const r = gr(e, t, !1, st);
  Zt(r)
}

function pe(e, t, n) {
  Xi = da;
  const r = gr(e, t, !1, st);
  r.user = !0, rt ? rt.push(r) : Zt(r)
}

function P(e, t, n) {
  n = n ? Object.assign({}, Kn, n) : Kn;
  const r = gr(e, t, !0, 0);
  return r.observers = null, r.observerSlots = null, r.comparator = n.equals || void 0, Zt(r), os.bind(r)
}

function ia(e, t, n) {
  let r, o, i;
  arguments.length === 2 && typeof t == "object" || arguments.length === 1 ? (r = !0, o = e, i = {}) : (r = e, o = t, i = {});
  let s = null,
    l = Sr,
    c = null,
    u = !1,
    d = "initialValue" in i,
    f = typeof r == "function" && P(r);
  const v = new Set,
    [L, I] = (i.storage || q)(i.initialValue),
    [W, H] = q(void 0),
    [N, A] = q(void 0, {
      equals: !1
    }),
    [B, F] = q(d ? "ready" : "unresolved");
  if (ce.context) {
    c = `${ce.context.id}${ce.context.count++}`;
    let g;
    i.ssrLoadFrom === "initial" ? l = i.initialValue : ce.load && (g = ce.load(c)) && (l = g[0])
  }

  function b(g, S, m, h) {
    return s === g && (s = null, d = !0, (g === l || S === l) && i.onHydrated && queueMicrotask(() => i.onHydrated(h, {
      value: S
    })), l = Sr, M(S, m)), S
  }

  function M(g, S) {
    mt(() => {
      S === void 0 && I(() => g), F(S !== void 0 ? "errored" : "ready"), H(S);
      for (const m of v.keys()) m.decrement();
      v.clear()
    }, !1)
  }

  function C() {
    const g = aa,
      S = L(),
      m = W();
    if (m !== void 0 && !s) throw m;
    return ue && !ue.user && g && qn(() => {
      N(), s && (g.resolved || v.has(g) || (g.increment(), v.add(g)))
    }), S
  }

  function p(g = !0) {
    if (g !== !1 && u) return;
    u = !1;
    const S = f ? f() : r;
    if (S == null || S === !1) {
      b(s, Ce(L));
      return
    }
    const m = l !== Sr ? l : Ce(() => o(S, {
      value: L(),
      refetching: g
    }));
    return typeof m != "object" || !(m && "then" in m) ? (b(s, m, void 0, S), m) : (s = m, u = !0, queueMicrotask(() => u = !1), mt(() => {
      F(d ? "refreshing" : "pending"), A()
    }, !1), m.then(h => b(m, h, void 0, S), h => b(m, void 0, as(h), S)))
  }
  return Object.defineProperties(C, {
    state: {
      get: () => B()
    },
    error: {
      get: () => W()
    },
    loading: {
      get() {
        const g = B();
        return g === "pending" || g === "refreshing"
      }
    },
    latest: {
      get() {
        if (!d) return C();
        const g = W();
        if (g && !s) throw g;
        return L()
      }
    }
  }), f ? qn(() => p(!1)) : p(!1), [C, {
    refetch: p,
    mutate: I
  }]
}

function ts(e) {
  return mt(e, !1)
}

function Ce(e) {
  if (ue === null) return e();
  const t = ue;
  ue = null;
  try {
    return e()
  } finally {
    ue = t
  }
}

function sa(e, t, n) {
  const r = Array.isArray(e);
  let o;
  return i => {
    let s;
    if (r) {
      s = Array(e.length);
      for (let c = 0; c < e.length; c++) s[c] = e[c]()
    } else s = e();
    const l = Ce(() => t(s, o, i));
    return o = s, l
  }
}

function ns(e) {
  pe(() => Ce(e))
}

function Ee(e) {
  return we === null || (we.cleanups === null ? we.cleanups = [e] : we.cleanups.push(e)), e
}

function rs() {
  return ue
}

function la() {
  return we
}

function fr(e, t) {
  const n = Symbol("context");
  return {
    id: n,
    Provider: fa(n),
    defaultValue: e
  }
}

function Ae(e) {
  let t;
  return (t = us(we, e.id)) !== void 0 ? t : e.defaultValue
}

function hr(e) {
  const t = P(e),
    n = P(() => Fr(t()));
  return n.toArray = () => {
    const r = n();
    return Array.isArray(r) ? r : r != null ? [r] : []
  }, n
}
let aa;

function os() {
  const e = _t;
  if (this.sources && (this.state || e))
    if (this.state === st || e) Zt(this);
    else {
      const t = _e;
      _e = null, mt(() => Gn(this), !1), _e = t
    } if (ue) {
    const t = this.observers ? this.observers.length : 0;
    ue.sources ? (ue.sources.push(this), ue.sourceSlots.push(t)) : (ue.sources = [this], ue.sourceSlots = [t]), this.observers ? (this.observers.push(ue), this.observerSlots.push(ue.sources.length - 1)) : (this.observers = [ue], this.observerSlots = [ue.sources.length - 1])
  }
  return this.value
}

function is(e, t, n) {
  let r = e.value;
  return (!e.comparator || !e.comparator(r, t)) && (e.value = t, e.observers && e.observers.length && mt(() => {
    for (let o = 0; o < e.observers.length; o += 1) {
      const i = e.observers[o],
        s = _t && _t.running;
      s && _t.disposed.has(i), (s && !i.tState || !s && !i.state) && (i.pure ? _e.push(i) : rt.push(i), i.observers && ls(i)), s || (i.state = st)
    }
    if (_e.length > 1e6) throw _e = [], new Error
  }, !1)), t
}

function Zt(e) {
  if (!e.fn) return;
  mr(e);
  const t = we,
    n = ue,
    r = so;
  ue = we = e, ca(e, e.value, r), ue = n, we = t
}

function ca(e, t, n) {
  let r;
  try {
    r = e.fn(t)
  } catch (o) {
    e.pure && (e.state = st, e.owned && e.owned.forEach(mr), e.owned = null), cs(o)
  }(!e.updatedAt || e.updatedAt <= n) && (e.updatedAt != null && "observers" in e ? is(e, r) : e.value = r, e.updatedAt = n)
}

function gr(e, t, n, r = st, o) {
  const i = {
    fn: e,
    state: r,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: t,
    owner: we,
    context: null,
    pure: n
  };
  return we === null || we !== es && (we.owned ? we.owned.push(i) : we.owned = [i]), i
}

function Zn(e) {
  const t = _t;
  if (e.state === 0 || t) return;
  if (e.state === Vn || t) return Gn(e);
  if (e.suspense && Ce(e.suspense.inFallback)) return e.suspense.effects.push(e);
  const n = [e];
  for (;
    (e = e.owner) && (!e.updatedAt || e.updatedAt < so);)(e.state || t) && n.push(e);
  for (let r = n.length - 1; r >= 0; r--)
    if (e = n[r], e.state === st || t) Zt(e);
    else if (e.state === Vn || t) {
    const o = _e;
    _e = null, mt(() => Gn(e, n[0]), !1), _e = o
  }
}

function mt(e, t) {
  if (_e) return e();
  let n = !1;
  t || (_e = []), rt ? n = !0 : rt = [], so++;
  try {
    const r = e();
    return ua(n), r
  } catch (r) {
    n || (rt = null), _e = null, cs(r)
  }
}

function ua(e) {
  if (_e && (ss(_e), _e = null), e) return;
  const t = rt;
  rt = null, t.length && mt(() => Xi(t), !1)
}

function ss(e) {
  for (let t = 0; t < e.length; t++) Zn(e[t])
}

function da(e) {
  let t, n = 0;
  for (t = 0; t < e.length; t++) {
    const r = e[t];
    r.user ? e[n++] = r : Zn(r)
  }
  for (ce.context && ra(), t = 0; t < n; t++) Zn(e[t])
}

function Gn(e, t) {
  const n = _t;
  e.state = 0;
  for (let r = 0; r < e.sources.length; r += 1) {
    const o = e.sources[r];
    o.sources && (o.state === st || n ? o !== t && Zn(o) : (o.state === Vn || n) && Gn(o, t))
  }
}

function ls(e) {
  const t = _t;
  for (let n = 0; n < e.observers.length; n += 1) {
    const r = e.observers[n];
    (!r.state || t) && (r.state = Vn, r.pure ? _e.push(r) : rt.push(r), r.observers && ls(r))
  }
}

function mr(e) {
  let t;
  if (e.sources)
    for (; e.sources.length;) {
      const n = e.sources.pop(),
        r = e.sourceSlots.pop(),
        o = n.observers;
      if (o && o.length) {
        const i = o.pop(),
          s = n.observerSlots.pop();
        r < o.length && (i.sourceSlots[s] = r, o[r] = i, n.observerSlots[r] = s)
      }
    }
  if (e.owned) {
    for (t = 0; t < e.owned.length; t++) mr(e.owned[t]);
    e.owned = null
  }
  if (e.cleanups) {
    for (t = 0; t < e.cleanups.length; t++) e.cleanups[t]();
    e.cleanups = null
  }
  e.state = 0, e.context = null
}

function as(e) {
  return e instanceof Error || typeof e == "string" ? e : new Error("Unknown error")
}

function cs(e) {
  throw e = as(e), e
}

function us(e, t) {
  return e ? e.context && e.context[t] !== void 0 ? e.context[t] : us(e.owner, t) : void 0
}

function Fr(e) {
  if (typeof e == "function" && !e.length) return Fr(e());
  if (Array.isArray(e)) {
    const t = [];
    for (let n = 0; n < e.length; n++) {
      const r = Fr(e[n]);
      Array.isArray(r) ? t.push.apply(t, r) : t.push(r)
    }
    return t
  }
  return e
}

function fa(e, t) {
  return function(r) {
    let o;
    return Y(() => o = Ce(() => (we.context = {
      [e]: r.value
    }, hr(() => r.children))), void 0), o
  }
}
const ha = Symbol("fallback");

function Go(e) {
  for (let t = 0; t < e.length; t++) e[t]()
}

function ga(e, t, n = {}) {
  let r = [],
    o = [],
    i = [],
    s = 0,
    l = t.length > 1 ? [] : null;
  return Ee(() => Go(i)), () => {
    let c = e() || [],
      u, d;
    return c[Hr], Ce(() => {
      let v = c.length,
        L, I, W, H, N, A, B, F, b;
      if (v === 0) s !== 0 && (Go(i), i = [], r = [], o = [], s = 0, l && (l = [])), n.fallback && (r = [ha], o[0] = rn(M => (i[0] = M, n.fallback())), s = 1);
      else if (s === 0) {
        for (o = new Array(v), d = 0; d < v; d++) r[d] = c[d], o[d] = rn(f);
        s = v
      } else {
        for (W = new Array(v), H = new Array(v), l && (N = new Array(v)), A = 0, B = Math.min(s, v); A < B && r[A] === c[A]; A++);
        for (B = s - 1, F = v - 1; B >= A && F >= A && r[B] === c[F]; B--, F--) W[F] = o[B], H[F] = i[B], l && (N[F] = l[B]);
        for (L = new Map, I = new Array(F + 1), d = F; d >= A; d--) b = c[d], u = L.get(b), I[d] = u === void 0 ? -1 : u, L.set(b, d);
        for (u = A; u <= B; u++) b = r[u], d = L.get(b), d !== void 0 && d !== -1 ? (W[d] = o[u], H[d] = i[u], l && (N[d] = l[u]), d = I[d], L.set(b, d)) : i[u]();
        for (d = A; d < v; d++) d in W ? (o[d] = W[d], i[d] = H[d], l && (l[d] = N[d], l[d](d))) : o[d] = rn(f);
        o = o.slice(0, s = v), r = c.slice(0)
      }
      return o
    });

    function f(v) {
      if (i[d] = v, l) {
        const [L, I] = q(d);
        return l[d] = I, t(c[d], L)
      }
      return t(c[d])
    }
  }
}

function a(e, t) {
  return Ce(() => e(t || {}))
}

function Tn() {
  return !0
}
const Or = {
  get(e, t, n) {
    return t === Ne ? n : e.get(t)
  },
  has(e, t) {
    return t === Ne ? !0 : e.has(t)
  },
  set: Tn,
  deleteProperty: Tn,
  getOwnPropertyDescriptor(e, t) {
    return {
      configurable: !0,
      enumerable: !0,
      get() {
        return e.get(t)
      },
      set: Tn,
      deleteProperty: Tn
    }
  },
  ownKeys(e) {
    return e.keys()
  }
};

function kr(e) {
  return (e = typeof e == "function" ? e() : e) ? e : {}
}

function je(...e) {
  let t = !1;
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    t = t || !!o && Ne in o, e[r] = typeof o == "function" ? (t = !0, P(o)) : o
  }
  if (t) return new Proxy({
    get(r) {
      for (let o = e.length - 1; o >= 0; o--) {
        const i = kr(e[o])[r];
        if (i !== void 0) return i
      }
    },
    has(r) {
      for (let o = e.length - 1; o >= 0; o--)
        if (r in kr(e[o])) return !0;
      return !1
    },
    keys() {
      const r = [];
      for (let o = 0; o < e.length; o++) r.push(...Object.keys(kr(e[o])));
      return [...new Set(r)]
    }
  }, Or);
  const n = {};
  for (let r = e.length - 1; r >= 0; r--)
    if (e[r]) {
      const o = Object.getOwnPropertyDescriptors(e[r]);
      for (const i in o) i in n || Object.defineProperty(n, i, {
        enumerable: !0,
        get() {
          for (let s = e.length - 1; s >= 0; s--) {
            const l = (e[s] || {})[i];
            if (l !== void 0) return l
          }
        }
      })
    } return n
}

function lo(e, ...t) {
  const n = new Set(t.flat());
  if (Ne in e) {
    const o = t.map(i => new Proxy({
      get(s) {
        return i.includes(s) ? e[s] : void 0
      },
      has(s) {
        return i.includes(s) && s in e
      },
      keys() {
        return i.filter(s => s in e)
      }
    }, Or));
    return o.push(new Proxy({
      get(i) {
        return n.has(i) ? void 0 : e[i]
      },
      has(i) {
        return n.has(i) ? !1 : i in e
      },
      keys() {
        return Object.keys(e).filter(i => !n.has(i))
      }
    }, Or)), o
  }
  const r = Object.getOwnPropertyDescriptors(e);
  return t.push(Object.keys(r).filter(o => !n.has(o))), t.map(o => {
    const i = {};
    for (let s = 0; s < o.length; s++) {
      const l = o[s];
      l in e && Object.defineProperty(i, l, r[l] ? r[l] : {
        get() {
          return e[l]
        },
        set() {
          return !0
        },
        enumerable: !0
      })
    }
    return i
  })
}

function pn(e) {
  const t = "fallback" in e && {
    fallback: () => e.fallback
  };
  return P(ga(() => e.each, e.children, t || void 0))
}

function G(e) {
  let t = !1;
  const n = e.keyed,
    r = P(() => e.when, void 0, {
      equals: (o, i) => t ? o === i : !o == !i
    });
  return P(() => {
    const o = r();
    if (o) {
      const i = e.children,
        s = typeof i == "function" && i.length > 0;
      return t = n || s, s ? Ce(() => i(o)) : i
    }
    return e.fallback
  }, void 0, void 0)
}

function yn(e) {
  let t = !1,
    n = !1;
  const r = (s, l) => s[0] === l[0] && (t ? s[1] === l[1] : !s[1] == !l[1]) && s[2] === l[2],
    o = hr(() => e.children),
    i = P(() => {
      let s = o();
      Array.isArray(s) || (s = [s]);
      for (let l = 0; l < s.length; l++) {
        const c = s[l].when;
        if (c) return n = !!s[l].keyed, [l, c, s[l]]
      }
      return [-1]
    }, void 0, {
      equals: r
    });
  return P(() => {
    const [s, l, c] = i();
    if (s < 0) return e.fallback;
    const u = c.children,
      d = typeof u == "function" && u.length > 0;
    return t = n || d, d ? Ce(() => u(l)) : u
  }, void 0, void 0)
}

function be(e) {
  return e
}
const ma = ["allowfullscreen", "async", "autofocus", "autoplay", "checked", "controls", "default", "disabled", "formnovalidate", "hidden", "indeterminate", "ismap", "loop", "multiple", "muted", "nomodule", "novalidate", "open", "playsinline", "readonly", "required", "reversed", "seamless", "selected"],
  va = new Set(["className", "value", "readOnly", "formNoValidate", "isMap", "noModule", "playsInline", ...ma]),
  wa = new Set(["innerHTML", "textContent", "innerText", "children"]),
  pa = Object.assign(Object.create(null), {
    className: "class",
    htmlFor: "for"
  }),
  Qo = Object.assign(Object.create(null), {
    class: "className",
    formnovalidate: "formNoValidate",
    ismap: "isMap",
    nomodule: "noModule",
    playsinline: "playsInline",
    readonly: "readOnly"
  }),
  ya = new Set(["beforeinput", "click", "dblclick", "contextmenu", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"]),
  Ca = new Set(["altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "linearGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "set", "stop", "svg", "switch", "symbol", "text", "textPath", "tref", "tspan", "use", "view", "vkern"]),
  ba = {
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace"
  };

function xa(e, t, n) {
  let r = n.length,
    o = t.length,
    i = r,
    s = 0,
    l = 0,
    c = t[o - 1].nextSibling,
    u = null;
  for (; s < o || l < i;) {
    if (t[s] === n[l]) {
      s++, l++;
      continue
    }
    for (; t[o - 1] === n[i - 1];) o--, i--;
    if (o === s) {
      const d = i < r ? l ? n[l - 1].nextSibling : n[i - l] : c;
      for (; l < i;) e.insertBefore(n[l++], d)
    } else if (i === l)
      for (; s < o;)(!u || !u.has(t[s])) && t[s].remove(), s++;
    else if (t[s] === n[i - 1] && n[l] === t[o - 1]) {
      const d = t[--o].nextSibling;
      e.insertBefore(n[l++], t[s++].nextSibling), e.insertBefore(n[--i], d), t[o] = n[i]
    } else {
      if (!u) {
        u = new Map;
        let f = l;
        for (; f < i;) u.set(n[f], f++)
      }
      const d = u.get(t[s]);
      if (d != null)
        if (l < d && d < i) {
          let f = s,
            v = 1,
            L;
          for (; ++f < o && f < i && !((L = u.get(t[f])) == null || L !== d + v);) v++;
          if (v > d - l) {
            const I = t[s];
            for (; l < d;) e.insertBefore(n[l++], I)
          } else e.replaceChild(n[l++], t[s++])
        } else s++;
      else t[s++].remove()
    }
  }
}
const zo = "_$DX_DELEGATE";

function Sa(e, t, n, r = {}) {
  let o;
  return rn(i => {
    o = i, t === document ? e() : xe(t, e(), t.firstChild ? null : void 0, n)
  }, r.owner), () => {
    o(), t.textContent = ""
  }
}

function J(e, t, n) {
  if (typeof window > "u") return null;
  const r = document.createElement("template");
  r.innerHTML = e;
  let o = r.content.firstChild;
  return n && (o = o.firstChild), o
}

function ka(e, t = window.document) {
  const n = t[zo] || (t[zo] = new Set);
  for (let r = 0, o = e.length; r < o; r++) {
    const i = e[r];
    n.has(i) || (n.add(i), t.addEventListener(i, Ra))
  }
}

function O(e, t, n) {
  n == null ? e.removeAttribute(t) : e.setAttribute(t, n)
}

function _a(e, t, n, r) {
  r == null ? e.removeAttributeNS(t, n) : e.setAttributeNS(t, n, r)
}

function ao(e, t) {
  t == null ? e.removeAttribute("class") : e.className = t
}

function Ea(e, t, n, r) {
  if (r) Array.isArray(n) ? (e[`$$${t}`] = n[0], e[`$$${t}Data`] = n[1]) : e[`$$${t}`] = n;
  else if (Array.isArray(n)) {
    const o = n[0];
    e.addEventListener(t, n[0] = i => o.call(e, n[1], i))
  } else e.addEventListener(t, n)
}

function Aa(e, t, n = {}) {
  const r = Object.keys(t || {}),
    o = Object.keys(n);
  let i, s;
  for (i = 0, s = o.length; i < s; i++) {
    const l = o[i];
    !l || l === "undefined" || t[l] || (Yo(e, l, !1), delete n[l])
  }
  for (i = 0, s = r.length; i < s; i++) {
    const l = r[i],
      c = !!t[l];
    !l || l === "undefined" || n[l] === c || !c || (Yo(e, l, !0), n[l] = c)
  }
  return n
}

function La(e, t, n) {
  if (!t) return n ? O(e, "style") : t;
  const r = e.style;
  if (typeof t == "string") return r.cssText = t;
  typeof n == "string" && (r.cssText = n = void 0), n || (n = {}), t || (t = {});
  let o, i;
  for (i in n) t[i] == null && r.removeProperty(i), delete n[i];
  for (i in t) o = t[i], o !== n[i] && (r.setProperty(i, o), n[i] = o);
  return n
}

function ds(e, t = {}, n, r) {
  const o = {};
  return Y(() => o.children = gn(e, t.children, o.children)), Y(() => t.ref && t.ref(e)), Y(() => $a(e, t, n, !0, o, !0)), o
}

function Ht(e, t, n) {
  return Ce(() => e(t, n))
}

function xe(e, t, n, r) {
  if (n !== void 0 && !r && (r = []), typeof t != "function") return gn(e, t, r, n);
  Y(o => gn(e, t(), o, n), r)
}

function $a(e, t, n, r, o = {}, i = !1) {
  t || (t = {});
  for (const s in o)
    if (!(s in t)) {
      if (s === "children") continue;
      o[s] = Jo(e, s, null, o[s], n, i)
    } for (const s in t) {
    if (s === "children") continue;
    const l = t[s];
    o[s] = Jo(e, s, l, o[s], n, i)
  }
}

function Ta(e) {
  let t, n;
  return !ce.context || !(t = ce.registry.get(n = Ia())) ? e.cloneNode(!0) : (ce.completed && ce.completed.add(t), ce.registry.delete(n), t)
}

function Ma(e) {
  return e.toLowerCase().replace(/-([a-z])/g, (t, n) => n.toUpperCase())
}

function Yo(e, t, n) {
  const r = t.trim().split(/\s+/);
  for (let o = 0, i = r.length; o < i; o++) e.classList.toggle(r[o], n)
}

function Jo(e, t, n, r, o, i) {
  let s, l, c;
  if (t === "style") return La(e, n, r);
  if (t === "classList") return Aa(e, n, r);
  if (n === r) return r;
  if (t === "ref") i || n(e);
  else if (t.slice(0, 3) === "on:") {
    const u = t.slice(3);
    r && e.removeEventListener(u, r), n && e.addEventListener(u, n)
  } else if (t.slice(0, 10) === "oncapture:") {
    const u = t.slice(10);
    r && e.removeEventListener(u, r, !0), n && e.addEventListener(u, n, !0)
  } else if (t.slice(0, 2) === "on") {
    const u = t.slice(2).toLowerCase(),
      d = ya.has(u);
    if (!d && r) {
      const f = Array.isArray(r) ? r[0] : r;
      e.removeEventListener(u, f)
    }(d || n) && (Ea(e, u, n, d), d && ka([u]))
  } else if ((c = wa.has(t)) || !o && (Qo[t] || (l = va.has(t))) || (s = e.nodeName.includes("-"))) t === "class" || t === "className" ? ao(e, n) : s && !l && !c ? e[Ma(t)] = n : e[Qo[t] || t] = n;
  else {
    const u = o && t.indexOf(":") > -1 && ba[t.split(":")[0]];
    u ? _a(e, u, t, n) : O(e, pa[t] || t, n)
  }
  return n
}

function Ra(e) {
  const t = `$$${e.type}`;
  let n = e.composedPath && e.composedPath()[0] || e.target;
  for (e.target !== n && Object.defineProperty(e, "target", {
      configurable: !0,
      value: n
    }), Object.defineProperty(e, "currentTarget", {
      configurable: !0,
      get() {
        return n || document
      }
    }), ce.registry && !ce.done && (ce.done = !0, document.querySelectorAll("[id^=pl-]").forEach(r => {
      for (; r && r.nodeType !== 8 && r.nodeValue !== "pl-" + e;) {
        let o = r.nextSibling;
        r.remove(), r = o
      }
      r && r.remove()
    })); n;) {
    const r = n[t];
    if (r && !n.disabled) {
      const o = n[`${t}Data`];
      if (o !== void 0 ? r.call(n, o, e) : r.call(n, e), e.cancelBubble) return
    }
    n = n._$host || n.parentNode || n.host
  }
}

function gn(e, t, n, r, o) {
  for (ce.context && !n && (n = [...e.childNodes]); typeof n == "function";) n = n();
  if (t === n) return n;
  const i = typeof t,
    s = r !== void 0;
  if (e = s && n[0] && n[0].parentNode || e, i === "string" || i === "number") {
    if (ce.context) return n;
    if (i === "number" && (t = t.toString()), s) {
      let l = n[0];
      l && l.nodeType === 3 ? l.data = t : l = document.createTextNode(t), n = It(e, n, r, l)
    } else n !== "" && typeof n == "string" ? n = e.firstChild.data = t : n = e.textContent = t
  } else if (t == null || i === "boolean") {
    if (ce.context) return n;
    n = It(e, n, r)
  } else {
    if (i === "function") return Y(() => {
      let l = t();
      for (; typeof l == "function";) l = l();
      n = gn(e, l, n, r)
    }), () => n;
    if (Array.isArray(t)) {
      const l = [],
        c = n && Array.isArray(n);
      if (jr(l, t, n, o)) return Y(() => n = gn(e, l, n, r, !0)), () => n;
      if (ce.context) {
        if (!l.length) return n;
        for (let u = 0; u < l.length; u++)
          if (l[u].parentNode) return n = l
      }
      if (l.length === 0) {
        if (n = It(e, n, r), s) return n
      } else c ? n.length === 0 ? Xo(e, l, r) : xa(e, n, l) : (n && It(e), Xo(e, l));
      n = l
    } else if (t instanceof Node) {
      if (ce.context && t.parentNode) return n = s ? [t] : t;
      if (Array.isArray(n)) {
        if (s) return n = It(e, n, r, t);
        It(e, n, null, t)
      } else n == null || n === "" || !e.firstChild ? e.appendChild(t) : e.replaceChild(t, e.firstChild);
      n = t
    }
  }
  return n
}

function jr(e, t, n, r) {
  let o = !1;
  for (let i = 0, s = t.length; i < s; i++) {
    let l = t[i],
      c = n && n[i];
    if (l instanceof Node) e.push(l);
    else if (!(l == null || l === !0 || l === !1))
      if (Array.isArray(l)) o = jr(e, l, c) || o;
      else if (typeof l == "function")
      if (r) {
        for (; typeof l == "function";) l = l();
        o = jr(e, Array.isArray(l) ? l : [l], Array.isArray(c) ? c : [c]) || o
      } else e.push(l), o = !0;
    else {
      const u = String(l);
      c && c.nodeType === 3 && c.data === u ? e.push(c) : e.push(document.createTextNode(u))
    }
  }
  return o
}

function Xo(e, t, n = null) {
  for (let r = 0, o = t.length; r < o; r++) e.insertBefore(t[r], n)
}

function It(e, t, n, r) {
  if (n === void 0) return e.textContent = "";
  const o = r || document.createTextNode("");
  if (t.length) {
    let i = !1;
    for (let s = t.length - 1; s >= 0; s--) {
      const l = t[s];
      if (o !== l) {
        const c = l.parentNode === e;
        !i && !s ? c ? e.replaceChild(o, l) : e.insertBefore(o, n) : c && l.remove()
      } else i = !0
    }
  } else e.insertBefore(o, n);
  return [o]
}

function Ia() {
  const e = ce.context;
  return `${e.id}${e.count++}`
}
const Ba = "http://www.w3.org/2000/svg";

function fs(e, t = !1) {
  return t ? document.createElementNS(Ba, e) : document.createElement(e)
}

function hs(e) {
  const {
    useShadow: t
  } = e, n = document.createTextNode(""), r = e.mount || document.body;

  function o() {
    if (ce.context) {
      const [i, s] = q(!1);
      return queueMicrotask(() => s(!0)), () => i() && e.children
    } else return () => e.children
  }
  if (r instanceof HTMLHeadElement) {
    const [i, s] = q(!1), l = () => s(!0);
    rn(c => xe(r, () => i() ? c() : o()(), null)), Ee(() => {
      ce.context ? queueMicrotask(l) : l()
    })
  } else {
    const i = fs(e.isSVG ? "g" : "div", e.isSVG),
      s = t && i.attachShadow ? i.attachShadow({
        mode: "open"
      }) : i;
    Object.defineProperty(i, "_$host", {
      get() {
        return n.parentNode
      },
      configurable: !0
    }), xe(s, o()), r.appendChild(i), e.ref && e.ref(i), Ee(() => r.removeChild(i))
  }
  return n
}

function Ot(e) {
  const [t, n] = lo(e, ["component"]), r = P(() => t.component);
  return P(() => {
    const o = r();
    switch (typeof o) {
      case "function":
        return Ce(() => o(n));
      case "string":
        const i = Ca.has(o),
          s = ce.context ? Ta() : fs(o, i);
        return ds(s, n, i), s
    }
  })
}
var de = (e => (e.DARK = "DARK", e.LIGHT = "LIGHT", e))(de || {});
let Wa = {
    data: ""
  },
  Pa = e => typeof window == "object" ? ((e ? e.querySelector("#_goober") : window._goober) || Object.assign((e || document.head).appendChild(document.createElement("style")), {
    innerHTML: " ",
    id: "_goober"
  })).firstChild : e || Wa,
  Ua = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
  Da = /\/\*[^]*?\*\/|  +/g,
  ei = /\n+/g,
  bt = (e, t) => {
    let n = "",
      r = "",
      o = "";
    for (let i in e) {
      let s = e[i];
      i[0] == "@" ? i[1] == "i" ? n = i + " " + s + ";" : r += i[1] == "f" ? bt(s, i) : i + "{" + bt(s, i[1] == "k" ? "" : t) + "}" : typeof s == "object" ? r += bt(s, t ? t.replace(/([^,])+/g, l => i.replace(/(^:.*)|([^,])+/g, c => /&/.test(c) ? c.replace(/&/g, l) : l ? l + " " + c : c)) : i) : s != null && (i = /^--/.test(i) ? i : i.replace(/[A-Z]/g, "-$&").toLowerCase(), o += bt.p ? bt.p(i, s) : i + ":" + s + ";")
    }
    return n + (t && o ? t + "{" + o + "}" : o) + r
  },
  Xe = {},
  gs = e => {
    if (typeof e == "object") {
      let t = "";
      for (let n in e) t += n + gs(e[n]);
      return t
    }
    return e
  },
  Na = (e, t, n, r, o) => {
    let i = gs(e),
      s = Xe[i] || (Xe[i] = (c => {
        let u = 0,
          d = 11;
        for (; u < c.length;) d = 101 * d + c.charCodeAt(u++) >>> 0;
        return "go" + d
      })(i));
    if (!Xe[s]) {
      let c = i !== e ? e : (u => {
        let d, f, v = [{}];
        for (; d = Ua.exec(u.replace(Da, ""));) d[4] ? v.shift() : d[3] ? (f = d[3].replace(ei, " ").trim(), v.unshift(v[0][f] = v[0][f] || {})) : v[0][d[1]] = d[2].replace(ei, " ").trim();
        return v[0]
      })(e);
      Xe[s] = bt(o ? {
        ["@keyframes " + s]: c
      } : c, n ? "" : "." + s)
    }
    let l = n && Xe.g ? Xe.g : null;
    return n && (Xe.g = Xe[s]), ((c, u, d, f) => {
      f ? u.data = u.data.replace(f, c) : u.data.indexOf(c) === -1 && (u.data = d ? c + u.data : u.data + c)
    })(Xe[s], t, r, l), s
  },
  Ha = (e, t, n) => e.reduce((r, o, i) => {
    let s = t[i];
    if (s && s.call) {
      let l = s(n),
        c = l && l.props && l.props.className || /^go/.test(l) && l;
      s = c ? "." + c : l && typeof l == "object" ? l.props ? "" : bt(l, "") : l === !1 ? "" : l
    }
    return r + o + (s ?? "")
  }, "");

function it(e) {
  let t = this || {},
    n = e.call ? e(t.p) : e;
  return Na(n.unshift ? n.raw ? Ha(n, [].slice.call(arguments, 1), t.p) : n.reduce((r, o) => Object.assign(r, o && o.call ? o(t.p) : o), {}) : n, Pa(t.target), t.g, t.o, t.k)
}
it.bind({
  g: 1
});
let Fa = it.bind({
  k: 1
});
const co = fr();

function Oa(e) {
  return a(co.Provider, {
    value: e.theme,
    get children() {
      return e.children
    }
  })
}

function ie() {
  return Ae(co)
}

function ms(e) {
  let t = this || {};
  return (...n) => {
    const r = o => {
      const i = Ae(co),
        s = je(o, {
          theme: i
        }),
        l = je(s, {
          get class() {
            const L = s.class,
              I = "class" in s && /^go[0-9]+/.test(L);
            let W = it.apply({
              target: t.target,
              o: I,
              p: s,
              g: t.g
            }, n);
            return [L, W].filter(Boolean).join(" ")
          }
        }),
        [c, u] = lo(l, ["as", "theme"]),
        d = u,
        f = c.as || e;
      let v;
      return typeof f == "function" ? v = f(d) : t.g == 1 ? (v = document.createElement(f), ds(v, d)) : v = Ot(je({
        component: f
      }, d)), v
    };
    return r.class = o => Ce(() => it.apply({
      target: t.target,
      p: o,
      g: t.g
    }, n)), r
  }
}
const w = new Proxy(ms, {
  get(e, t) {
    return e(t)
  }
});

function ja() {
  const e = ms.call({
    g: 1
  }, "div").apply(null, arguments);
  return function(n) {
    return e(n), null
  }
}
const et = "tc-root",
  uo = "tc-disable-scroll",
  _r = "tc-using-mouse",
  Ka = () => {
    document.body.addEventListener("mousedown", () => document.body.classList.add(_r)), document.body.addEventListener("keydown", t => {
      t.key === "Tab" && document.body.classList.remove(_r)
    });
    const e = ja`
    ${et} * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
        font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', Arial, Tahoma, Verdana, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;        
        -webkit-tap-highlight-color: transparent;
    }
    
    ${et} img {
      -webkit-user-select: none;
      -webkit-touch-callout: none;
    }   
 
    ${et} *:focus {
        outline: #08f auto 2px;
    }
    
    ${et} li {
        list-style: none;
    }
    
    ${et} button {
        outline: none;
    }
    
    body.${uo} {
        position: fixed; 
        overflow-y: scroll;
        right: 0;
        left: 0;
    }
    
    body.${_r} ${et} *:focus {
        outline: none;
    }
`;
    return a(e, {})
  };

function Va(e) {
  e[0] === "#" && (e = e.slice(1));
  const t = parseInt(e, 16),
    n = t >> 16 & 255,
    r = t >> 8 & 255,
    o = t & 255;
  return [n, r, o].join(",")
}

function Cn(e, t) {
  return e[0] === "#" && (e = Va(e)), `rgba(${e}, ${t})`
}

function Ke(e) {
  return e.toString() + "px"
}
const Yt = class {
  constructor() {
    K(this, "storage", {})
  }
  static getInstance() {
    return Yt.instance || (Yt.instance = new Yt), Yt.instance
  }
  get length() {
    return Object.keys(this.storage).length
  }
  clear() {
    this.storage = {}
  }
  getItem(e) {
    var t;
    return (t = this.storage[e]) != null ? t : null
  }
  key(e) {
    var t;
    const n = Object.keys(this.storage);
    return e < 0 || e >= n.length ? null : (t = n[e]) != null ? t : null
  }
  removeItem(e) {
    delete this.storage[e]
  }
  setItem(e, t) {
    this.storage[e] = t
  }
};
let vs = Yt;
K(vs, "instance");
class fe extends j {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, fe.prototype)
  }
}

function Dn(...e) {
  try {
    console.debug("[TON_CONNECT_UI]", ...e)
  } catch {}
}

function qa(...e) {
  try {
    console.error("[TON_CONNECT_UI]", ...e)
  } catch {}
}

function Za(...e) {
  try {
    console.warn("[TON_CONNECT_UI]", ...e)
  } catch {}
}

function on(e, t = "_self") {
  Dn("openLink", e, t), window.open(e, t, "noopener noreferrer")
}

function le(e) {
  on(e, "_blank")
}

function dt(e, t) {
  const n = () => {
      z("safari") || Pe("android") && z("firefox") || t()
    },
    r = setTimeout(() => n(), 200);
  window.addEventListener("blur", () => clearTimeout(r), {
    once: !0
  }), on(e, "_self")
}

function Ga() {
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? de.LIGHT : de.DARK
}

function Qa(e) {
  const t = n => e(n.matches ? de.DARK : de.LIGHT);
  return window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", t), () => window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", t)
}

function za() {
  document.documentElement.scrollHeight !== document.documentElement.clientHeight && (document.body.style.top = Ke(-document.documentElement.scrollTop), document.body.classList.add(uo))
}

function Ya() {
  document.body.classList.remove(uo), document.documentElement.scrollTo({
    top: -parseFloat(getComputedStyle(document.body).top)
  }), document.body.style.top = "auto"
}

function Ja() {
  document.body.hasAttribute("ontouchstart") || document.body.setAttribute("ontouchstart", "")
}

function Xa() {
  customElements.define(et, class extends HTMLElement {})
}

function ws(e) {
  return ne(this, null, function*() {
    yield new Promise(t => requestAnimationFrame(t)), e()
  })
}

function ec(e) {
  return ne(this, null, function*() {
    return yield new Promise(t => requestAnimationFrame(t)), e()
  })
}

function ps(e) {
  document.readyState !== "complete" ? window.addEventListener("load", () => ws(() => ps(e)), {
    once: !0
  }) : e.forEach(t => {
    const n = new window.Image;
    n.src = t
  })
}

function Ge() {
  if (typeof window < "u") return window
}

function fo() {
  if (tc()) return localStorage;
  if (nc()) throw new fe("`localStorage` is unavailable, but it is required for TonConnect. For more details, see https://github.com/ton-connect/sdk/tree/main/packages/sdk#init-connector");
  return vs.getInstance()
}

function tc() {
  try {
    return typeof localStorage < "u"
  } catch {
    return !1
  }
}

function nc() {
  return typeof Nt < "u" && Nt.versions != null && Nt.versions.node != null
}

function ho() {
  var e, t, n;
  const r = new hl().getResult(),
    o = (e = r.os.name) == null ? void 0 : e.toLowerCase(),
    i = (t = r.device.model) == null ? void 0 : t.toLowerCase();
  let s;
  switch (!0) {
    case i === "ipad":
      s = "ipad";
      break;
    case o === "ios":
      s = "ios";
      break;
    case o === "android":
      s = "android";
      break;
    case o === "mac os":
      s = "macos";
      break;
    case o === "linux":
      s = "linux";
      break;
    case (o == null ? void 0 : o.includes("windows")):
      s = "windows";
      break
  }
  const l = (n = r.browser.name) == null ? void 0 : n.toLowerCase();
  let c;
  switch (!0) {
    case l === "chrome":
      c = "chrome";
      break;
    case l === "firefox":
      c = "firefox";
      break;
    case (l == null ? void 0 : l.includes("safari")):
      c = "safari";
      break;
    case (l == null ? void 0 : l.includes("opera")):
      c = "opera";
      break
  }
  return {
    os: s,
    browser: c
  }
}

function Pe(...e) {
  return e.includes(ho().os)
}

function z(...e) {
  return e.includes(ho().browser)
}

function Mn(e, t) {
  const n = new URL(e);
  return t + n.search
}
class rc {
  constructor() {
    K(this, "localStorage"), K(this, "storageKey", "ton-connect-ui_wallet-info"), this.localStorage = fo()
  }
  setWalletInfo(t) {
    this.localStorage.setItem(this.storageKey, JSON.stringify(t))
  }
  getWalletInfo() {
    const t = this.localStorage.getItem(this.storageKey);
    return t ? JSON.parse(t) : null
  }
  removeWalletInfo() {
    this.localStorage.removeItem(this.storageKey)
  }
}
class oc {
  constructor() {
    K(this, "localStorage"), K(this, "storageKey", "ton-connect-ui_preferred-wallet"), this.localStorage = fo()
  }
  setPreferredWalletAppName(t) {
    this.localStorage.setItem(this.storageKey, t)
  }
  getPreferredWalletAppName() {
    return this.localStorage.getItem(this.storageKey) || void 0
  }
}
class ys {
  constructor() {
    K(this, "localStorage"), K(this, "storageKey", "ton-connect-ui_last-selected-wallet-info"), this.localStorage = fo()
  }
  setLastSelectedWalletInfo(t) {
    this.localStorage.setItem(this.storageKey, JSON.stringify(t))
  }
  getLastSelectedWalletInfo() {
    const t = this.localStorage.getItem(this.storageKey);
    return t ? JSON.parse(t) : null
  }
  removeLastSelectedWalletInfo() {
    this.localStorage.removeItem(this.storageKey)
  }
}
const [Kr, ti] = q({
  status: "closed",
  closeReason: null
}), ni = P(() => Kr().status === "opened"), [Qn, ri] = q({
  status: "closed",
  closeReason: null
}), oi = P(() => Qn().status === "opened"), ic = P(() => {
  const e = Qn();
  return e.status === "opened" ? e.walletInfo : null
});
let Pt = typeof window < "u" ? new ys : void 0;
const [sc, lc] = q((Pt == null ? void 0 : Pt.getLastSelectedWalletInfo()) || null), Se = e => {
  Pt || (Pt = new ys), e ? Pt.setLastSelectedWalletInfo(e) : Pt.removeLastSelectedWalletInfo(), lc(e)
}, [tt, Ut] = q(null), ac = {
  close: "Close",
  openWallet: "Open wallet",
  copyLink: "Copy Link",
  linkCopied: "Link Copied",
  copied: "Copied",
  yourWallet: "Your Wallet",
  retry: "Retry",
  get: "GET",
  mobile: "Mobile",
  browserExtension: "Browser Extension",
  desktop: "Desktop"
}, cc = {
  connectWallet: "Connect Wallet",
  dropdown: {
    copy: "Copy address",
    copied: "Address copied!",
    disconnect: "Disconnect"
  }
}, uc = {
  confirm: {
    header: "Open {{ name }} to confirm the transaction."
  },
  transactionSent: {
    header: "Transaction sent",
    text: "Your transaction will be processed in a few seconds."
  },
  transactionCanceled: {
    header: "Transaction canceled",
    text: "There will be no changes to your account."
  }
}, dc = {
  walletOn: "Wallet On",
  recent: "Recent",
  installed: "Installed",
  popular: "Popular"
}, fc = {
  loading: "Loading wallets",
  wallets: "Wallets",
  mobileUniversalModal: {
    connectYourWallet: "Connect your wallet",
    openWalletOnTelegramOrSelect: "Open Wallet in Telegram or select your wallet to connect",
    openWalletOnTelegram: "Open Wallet in Telegram",
    openLink: "Open Link",
    scan: "Scan with your mobile wallet"
  },
  desktopUniversalModal: {
    connectYourWallet: "Connect your wallet",
    scan: "Scan with your mobile wallet",
    availableWallets: "Available wallets"
  },
  mobileConnectionModal: {
    showQR: "Show QR Code",
    scanQR: "Scan the QR code below with your phone’s or {{ name }}’s camera",
    continueIn: "Continue in {{ name }}…",
    connectionDeclined: "Connection declined"
  },
  desktopConnectionModal: {
    scanQR: "Scan the QR code below with your phone’s or {{ name }}’s camera",
    continueInExtension: "Continue in {{ name }} browser extension…",
    dontHaveExtension: "Seems you don't have installed {{ name }} browser extension",
    getWallet: "Get {{ name }}",
    continueOnDesktop: "Continue in {{ name }} on desktop…",
    openWalletOnTelegram: "Open Wallet in Telegram on desktop",
    connectionDeclined: "Connection declined"
  },
  infoModal: {
    whatIsAWallet: "What is a wallet",
    secureDigitalAssets: "Secure digital assets storage",
    walletProtects: "A wallet protects and manages your digital assets including TON, tokens and collectables.",
    controlIdentity: "Control your Web3 identity",
    manageIdentity: "Manage your digital identity and access decentralized applications with ease. Maintain control over your data and engage securely in the blockchain ecosystem.",
    effortlessCryptoTransactions: "Effortless crypto transactions",
    easilySend: "Easily send, receive, monitor your cryptocurrencies. Streamline your operations with decentralized applications.",
    getAWallet: "Get a Wallet"
  }
}, hc = {
  confirmTransaction: {
    header: "Confirm the transaction in {{ name }}",
    text: "It will only take a moment."
  },
  transactionSent: "$notifications.transactionSent",
  transactionCanceled: "$notifications.transactionCanceled"
}, gc = {
  common: ac,
  button: cc,
  notifications: uc,
  walletItem: dc,
  walletModal: fc,
  actionModal: hc
}, mc = {
  close: "Закрыть",
  openWallet: "Открыть кошелёк",
  copyLink: "Копировать ссылку",
  linkCopied: "Ссылка скопирована",
  copied: "Ссылка скопирована",
  yourWallet: "Ваш кошелёк",
  retry: "Повторить",
  get: "Скачать",
  mobile: "Мобильный",
  browserExtension: "Расширение",
  desktop: "Десктоп"
}, vc = {
  connectWallet: "Подключить кошелёк",
  dropdown: {
    copy: "Скопировать адрес",
    copied: "Адрес скопирован!",
    disconnect: "Отключить кошелёк"
  }
}, wc = {
  confirm: {
    header: "Откройте {{ name }}, чтобы подтвердить транзакцию."
  },
  transactionSent: {
    header: "Транзакция отправлена",
    text: "Ваша транзакция будет обработана через несколько секунд."
  },
  transactionCanceled: {
    header: "Транзакция отменена",
    text: "Состояние вашего счёта не изменится."
  }
}, pc = {
  walletOn: "Wallet в",
  recent: "Недавний",
  installed: "Установлен",
  popular: "Популярен"
}, yc = {
  loading: "Кошельки загружаются",
  wallets: "Кошельки",
  mobileUniversalModal: {
    connectYourWallet: "Подключите кошелёк",
    openWalletOnTelegramOrSelect: "Подключите Wallet в Telegram или выберете кошелёк для подключения",
    openWalletOnTelegram: "Открыть Wallet в Telegram",
    openLink: "Открыть ссылку",
    scan: "Отсканируйте камерой вашего телефона"
  },
  desktopUniversalModal: {
    connectYourWallet: "Подключите кошелёк",
    scan: "Отсканируйте QR-код камерой вашего телефона",
    availableWallets: "Доступные кошельки"
  },
  mobileConnectionModal: {
    showQR: "Показать QR-код",
    scanQR: "Отсканируйте QR-код ниже камерой в приложении {{ name }}, или камерой телефона",
    continueIn: "Продолжите в {{ name }}…",
    connectionDeclined: "Подключение отклонено"
  },
  desktopConnectionModal: {
    scanQR: "Отсканируйте QR-код ниже камерой в приложении {{ name }}, или камерой телефона",
    continueInExtension: "Откройте браузерное расширение {{ name }}",
    dontHaveExtension: "Похоже, у вас не установлено браузерное расширение {{ name }}",
    getWallet: "Скачать {{ name }}",
    continueOnDesktop: "Откройте {{ name }} на компьютере…",
    openWalletOnTelegram: "Открыть Wallet в Telegram",
    connectionDeclined: "Подключение отклонено"
  },
  infoModal: {
    whatIsAWallet: "Что такое кошелёк?",
    secureDigitalAssets: "Надежное хранилище цифровых активов",
    walletProtects: "Кошелёк защищает ваши цифровые активы, включая TON, токены и предметы коллекционирования, и управляет ими.",
    controlIdentity: "Контроль своей личности Web3",
    manageIdentity: "Управляйте своей цифровой идентификацией и с легкостью получайте доступ к децентрализованным приложениям. Сохраняйте контроль над своими данными и безопасно участвуйте в экосистеме блокчейна.",
    effortlessCryptoTransactions: "Простые криптотранзакции",
    easilySend: "Легко отправляйте, получайте и отслеживайте свои криптовалюты. Оптимизируйте свои операции с помощью децентрализованных приложений.",
    getAWallet: "Скачать кошелёк"
  }
}, Cc = {
  confirmTransaction: {
    header: "Подтвердите действие в {{ name }}",
    text: "Это займет пару секунд."
  },
  transactionSent: "$notifications.transactionSent",
  transactionCanceled: "$notifications.transactionCanceled"
}, bc = {
  common: mc,
  button: vc,
  notifications: wc,
  walletItem: pc,
  walletModal: yc,
  actionModal: Cc
}, xc = {
  en: ii(gc),
  ru: ii(bc)
};

function ii(e) {
  const t = "$",
    n = r => {
      Object.entries(r).forEach(([o, i]) => {
        if (typeof i == "object" && i) return n(i);
        if (typeof i == "string") {
          if (i[0] === t) {
            const s = i.slice(1).split(".");
            let l = e;
            s.forEach(c => {
              if (c in l) l = l[c];
              else throw new Error(`Cannot parse translations: there is no property ${c} in translation`)
            }), r[o] = l
          }
          i.slice(0, 2) === `\\${t}` && (r[o] = i.slice(1))
        }
      })
    };
  return n(e), e
}
const Gt = fr(),
  Vr = Symbol("store-raw"),
  mn = Symbol("store-node"),
  Sc = Symbol("store-name");

function Cs(e, t) {
  let n = e[Ne];
  if (!n && (Object.defineProperty(e, Ne, {
      value: n = new Proxy(e, Ec)
    }), !Array.isArray(e))) {
    const r = Object.keys(e),
      o = Object.getOwnPropertyDescriptors(e);
    for (let i = 0, s = r.length; i < s; i++) {
      const l = r[i];
      o[l].get && Object.defineProperty(e, l, {
        enumerable: o[l].enumerable,
        get: o[l].get.bind(n)
      })
    }
  }
  return n
}

function zn(e) {
  let t;
  return e != null && typeof e == "object" && (e[Ne] || !(t = Object.getPrototypeOf(e)) || t === Object.prototype || Array.isArray(e))
}

function jt(e, t = new Set) {
  let n, r, o, i;
  if (n = e != null && e[Vr]) return n;
  if (!zn(e) || t.has(e)) return e;
  if (Array.isArray(e)) {
    Object.isFrozen(e) ? e = e.slice(0) : t.add(e);
    for (let s = 0, l = e.length; s < l; s++) o = e[s], (r = jt(o, t)) !== o && (e[s] = r)
  } else {
    Object.isFrozen(e) ? e = Object.assign({}, e) : t.add(e);
    const s = Object.keys(e),
      l = Object.getOwnPropertyDescriptors(e);
    for (let c = 0, u = s.length; c < u; c++) i = s[c], !l[i].get && (o = e[i], (r = jt(o, t)) !== o && (e[i] = r))
  }
  return e
}

function go(e) {
  let t = e[mn];
  return t || Object.defineProperty(e, mn, {
    value: t = {}
  }), t
}

function qr(e, t, n) {
  return e[t] || (e[t] = xs(n))
}

function kc(e, t) {
  const n = Reflect.getOwnPropertyDescriptor(e, t);
  return !n || n.get || !n.configurable || t === Ne || t === mn || t === Sc || (delete n.value, delete n.writable, n.get = () => e[Ne][t]), n
}

function bs(e) {
  if (rs()) {
    const t = go(e);
    (t._ || (t._ = xs()))()
  }
}

function _c(e) {
  return bs(e), Reflect.ownKeys(e)
}

function xs(e) {
  const [t, n] = q(e, {
    equals: !1,
    internal: !0
  });
  return t.$ = n, t
}
const Ec = {
  get(e, t, n) {
    if (t === Vr) return e;
    if (t === Ne) return n;
    if (t === Hr) return bs(e), n;
    const r = go(e),
      o = r.hasOwnProperty(t);
    let i = o ? r[t]() : e[t];
    if (t === mn || t === "__proto__") return i;
    if (!o) {
      const s = Object.getOwnPropertyDescriptor(e, t);
      rs() && (typeof i != "function" || e.hasOwnProperty(t)) && !(s && s.get) && (i = qr(r, t, i)())
    }
    return zn(i) ? Cs(i) : i
  },
  has(e, t) {
    return t === Vr || t === Ne || t === Hr || t === mn || t === "__proto__" ? !0 : (this.get(e, t, e), t in e)
  },
  set() {
    return !0
  },
  deleteProperty() {
    return !0
  },
  ownKeys: _c,
  getOwnPropertyDescriptor: kc
};

function Yn(e, t, n, r = !1) {
  if (!r && e[t] === n) return;
  const o = e[t],
    i = e.length;
  n === void 0 ? delete e[t] : e[t] = n;
  let s = go(e),
    l;
  (l = qr(s, t, o)) && l.$(() => n), Array.isArray(e) && e.length !== i && (l = qr(s, "length", i)) && l.$(e.length), (l = s._) && l.$()
}

function Ss(e, t) {
  const n = Object.keys(t);
  for (let r = 0; r < n.length; r += 1) {
    const o = n[r];
    Yn(e, o, t[o])
  }
}

function Ac(e, t) {
  if (typeof t == "function" && (t = t(e)), t = jt(t), Array.isArray(t)) {
    if (e === t) return;
    let n = 0,
      r = t.length;
    for (; n < r; n++) {
      const o = t[n];
      e[n] !== o && Yn(e, n, o)
    }
    Yn(e, "length", r)
  } else Ss(e, t)
}

function Jt(e, t, n = []) {
  let r, o = e;
  if (t.length > 1) {
    r = t.shift();
    const s = typeof r,
      l = Array.isArray(e);
    if (Array.isArray(r)) {
      for (let c = 0; c < r.length; c++) Jt(e, [r[c]].concat(t), n);
      return
    } else if (l && s === "function") {
      for (let c = 0; c < e.length; c++) r(e[c], c) && Jt(e, [c].concat(t), n);
      return
    } else if (l && s === "object") {
      const {
        from: c = 0,
        to: u = e.length - 1,
        by: d = 1
      } = r;
      for (let f = c; f <= u; f += d) Jt(e, [f].concat(t), n);
      return
    } else if (t.length > 1) {
      Jt(e[r], t, [r].concat(n));
      return
    }
    o = e[r], n = [r].concat(n)
  }
  let i = t[0];
  typeof i == "function" && (i = i(o, n), i === o) || r === void 0 && i == null || (i = jt(i), r === void 0 || zn(o) && zn(i) && !Array.isArray(i) ? Ss(o, i) : Yn(e, r, i))
}

function mo(...[e, t]) {
  const n = jt(e || {}),
    r = Array.isArray(n),
    o = Cs(n);

  function i(...s) {
    ts(() => {
      r && s.length === 1 ? Ac(n, s[0]) : Jt(n, s)
    })
  }
  return [o, i]
}
const ks = {
    constant: {
      black: "#000000",
      white: "#FFFFFF"
    },
    connectButton: {
      background: "#0098EA",
      foreground: "#FFFFFF"
    },
    accent: "#0098EA",
    telegramButton: "#0098EA",
    icon: {
      primary: "#0F0F0F",
      secondary: "#7A8999",
      tertiary: "#C1CAD2",
      success: "#29CC6A",
      error: "#F5A73B"
    },
    background: {
      primary: "#FFFFFF",
      secondary: "#F1F3F5",
      segment: "#FFFFFF",
      tint: "#F1F3F5",
      qr: "#F1F3F5"
    },
    text: {
      primary: "#0F0F0F",
      secondary: "#6A7785"
    }
  },
  Lc = {
    constant: {
      black: "#000000",
      white: "#FFFFFF"
    },
    connectButton: {
      background: "#0098EA",
      foreground: "#FFFFFF"
    },
    accent: "#E5E5EA",
    telegramButton: "#31A6F5",
    icon: {
      primary: "#E5E5EA",
      secondary: "#909099",
      tertiary: "#434347",
      success: "#29CC6A",
      error: "#F5A73B"
    },
    background: {
      primary: "#121214",
      secondary: "#18181A",
      segment: "#262629",
      tint: "#222224",
      qr: "#FFFFFF"
    },
    text: {
      primary: "#E5E5EA",
      secondary: "#7D7D85"
    }
  };
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
function si(e) {
  return Object.prototype.toString.call(e) === "[object Object]"
}

function $c(e) {
  var t, n;
  return si(e) === !1 ? !1 : (t = e.constructor, t === void 0 ? !0 : (n = t.prototype, !(si(n) === !1 || n.hasOwnProperty("isPrototypeOf") === !1)))
}

function ht(e, t) {
  return e ? gl(t, e, {
    arrayMerge: (r, o, i) => o,
    isMergeableObject: $c
  }) : t
}
const [Tc, vo] = mo({
  theme: de.LIGHT,
  colors: ks,
  borderRadius: "m"
}), _s = {
  [de.LIGHT]: ks,
  [de.DARK]: Lc
}, Fe = {
  [de.LIGHT]: void 0,
  [de.DARK]: void 0
};

function Er(e, t) {
  t && (Fe[de.DARK] = ht(t[de.DARK], Fe[de.DARK]), Fe[de.LIGHT] = ht(t[de.LIGHT], Fe[de.LIGHT])), vo({
    theme: e,
    colors: ht(Fe[e], _s[e])
  })
}

function Mc(e) {
  vo({
    borderRadius: e
  })
}

function Rc(e) {
  Fe[de.DARK] = ht(e[de.DARK], Fe[de.DARK]), Fe[de.LIGHT] = ht(e[de.LIGHT], Fe[de.LIGHT]), vo(t => ({
    colors: ht(Fe[t.theme], _s[t.theme])
  }))
}
const Ic = w.div`
    background-color: ${e=>e.theme.colors.background.secondary};
`,
  $t = e => {
    let t;
    const [n, r] = q(null);
    return pe(() => {
      const o = new window.Image;
      return o.src = e.src, o.alt = e.alt || "", o.setAttribute("draggable", "false"), e.class && o.classList.add(e.class), o.complete ? r(o) : (o.addEventListener("load", () => r(o)), () => o.removeEventListener("load", () => r(o)))
    }), [a(G, {
      get when() {
        return n()
      },
      get children() {
        return n()
      }
    }), a(G, {
      get when() {
        return !n()
      },
      get children() {
        return a(Ic, {
          get class() {
            return e.class
          },
          ref(o) {
            const i = t;
            typeof i == "function" ? i(o) : t = o
          }
        })
      }
    })]
  };
let Et = {};
try {
  let e = location.hash.toString();
  Et = Bc(e)
} catch {}
let Kt = "unknown";
Et != null && Et.tgWebAppPlatform && (Kt = (Ho = Et.tgWebAppPlatform) != null ? Ho : "unknown");
if (Kt === "unknown") {
  const e = Ge();
  Kt = (jo = (Oo = (Fo = e == null ? void 0 : e.Telegram) == null ? void 0 : Fo.WebApp) == null ? void 0 : Oo.platform) != null ? jo : "unknown"
}
let Jn = "6.0";
Et != null && Et.tgWebAppVersion && (Jn = Et.tgWebAppVersion);
if (!Jn) {
  const e = Ge();
  Jn = (qo = (Vo = (Ko = e == null ? void 0 : e.Telegram) == null ? void 0 : Ko.WebApp) == null ? void 0 : Vo.version) != null ? qo : "6.0"
}

function xt(...e) {
  return e.includes(Kt)
}

function Ve() {
  var e;
  return Kt !== "unknown" || !!((e = Ge()) != null && e.TelegramWebviewProxy)
}

function Es() {
  var e;
  const t = !!((e = Ge()) != null && e.TelegramWebview);
  return (Ve() || t) && Kt === "unknown"
}

function wo() {
  Ls("web_app_expand", {})
}

function Zr(e, t) {
  const n = new URL(e);
  if (n.protocol !== "http:" && n.protocol !== "https:") {
    if (t) return t();
    throw new fe(`Url protocol is not supported: ${n}`)
  }
  if (n.hostname !== "t.me") {
    if (t) return t();
    throw new fe(`Url host is not supported: ${n}`)
  }
  const r = n.pathname + n.search;
  As() || Uc("6.1") ? Ls("web_app_open_tg_link", {
    path_full: r
  }) : le("https://t.me" + r)
}

function As() {
  try {
    const e = Ge();
    return e ? e.parent != null && e !== e.parent : !1
  } catch {
    return !1
  }
}

function Ls(e, t) {
  try {
    const n = Ge();
    if (!n) throw new fe("Can't post event to parent window: window is not defined");
    if (n.TelegramWebviewProxy !== void 0) Dn("postEvent", e, t), n.TelegramWebviewProxy.postEvent(e, JSON.stringify(t));
    else if (n.external && "notify" in n.external) Dn("postEvent", e, t), n.external.notify(JSON.stringify({
      eventType: e,
      eventData: t
    }));
    else if (As()) {
      const r = "*",
        o = JSON.stringify({
          eventType: e,
          eventData: t
        });
      Dn("postEvent", e, t), n.parent.postMessage(o, r)
    } else throw new fe("Can't post event to TMA")
  } catch (n) {
    qa(`Can't post event to parent window: ${n}`)
  }
}

function Bc(e) {
  e = e.replace(/^#/, "");
  let t = {};
  if (!e.length) return t;
  if (e.indexOf("=") < 0 && e.indexOf("?") < 0) return t._path = Xn(e), t;
  let n = e.indexOf("?");
  if (n >= 0) {
    let o = e.substr(0, n);
    t._path = Xn(o), e = e.substr(n + 1)
  }
  let r = Wc(e);
  for (let o in r) t[o] = r[o];
  return t
}

function Xn(e) {
  try {
    return e = e.replace(/\+/g, "%20"), decodeURIComponent(e)
  } catch {
    return e
  }
}

function Wc(e) {
  let t = {};
  if (!e.length) return t;
  let n = e.split("&"),
    r, o, i, s;
  for (r = 0; r < n.length; r++) o = n[r].split("="), i = Xn(o[0]), s = o[1] == null ? null : Xn(o[1]), t[i] = s;
  return t
}

function Pc(e, t) {
  typeof e != "string" && (e = "");
  let n = e.replace(/^\s+|\s+$/g, "").split("."),
    r = t.replace(/^\s+|\s+$/g, "").split("."),
    o, i, s, l;
  for (o = Math.max(n.length, r.length), i = 0; i < o; i++)
    if (s = parseInt(n[i]) || 0, l = parseInt(r[i]) || 0, s !== l) return s > l ? 1 : -1;
  return 0
}

function Uc(e) {
  return Pc(Jn, e) >= 0
}
const St = {
  mobile: 440,
  tablet: 1020
};

function Dt(e) {
  const t = Ge();
  if (!t) return e === "desktop";
  if (xt("weba")) return !0;
  const n = t.innerWidth;
  switch (e) {
    case "desktop":
      return n > St.tablet;
    case "tablet":
      return n > St.mobile;
    default:
    case "mobile":
      return n <= St.mobile || Pe("ios", "android", "ipad")
  }
}

function Re(e) {
  switch (e) {
    case "mobile":
      return `@media (max-width: ${St.mobile}px)`;
    case "tablet":
      return `@media (max-width: ${St.tablet}px) (min-width: ${St.mobile}px)`;
    default:
    case "desktop":
      return `@media (min-width: ${St.tablet}px)`
  }
}
const bn = "@media (hover: none)",
  xn = "@media not all and (hover: none)",
  Dc = {
    m: "100vh",
    s: "8px",
    none: "0"
  },
  Ar = {
    s: .02,
    m: .04
  },
  Nc = w.button`
    display: ${e=>e.leftIcon||e.rightIcon?"flex":"inline-block"};
    gap: ${e=>e.leftIcon||e.rightIcon?"6px":"unset"};
    align-items: ${e=>e.leftIcon||e.rightIcon?"center":"unset"};
    justify-content: ${e=>e.leftIcon||e.rightIcon?"space-between":"unset"};
    background-color: ${e=>e.appearance==="flat"?"transparent":e.appearance==="secondary"?e.theme.colors.background.tint:Cn(e.theme.colors.accent,.12)};
    color: ${e=>e.appearance==="secondary"?e.theme.colors.text.primary:e.theme.colors.accent};

    padding: ${e=>e.appearance==="flat"?"0":"9px 16px"};
    padding-left: ${e=>e.leftIcon&&e.appearance!=="flat"?"12px":"16px"};
    padding-right: ${e=>e.rightIcon&&e.appearance!=="flat"?"12px":"16px"};
    border: none;
    border-radius: ${e=>Dc[e.theme.borderRadius]};
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};

    font-size: 14px;
    font-weight: 510;
    line-height: 18px;

    transition: transform 0.125s ease-in-out;

    ${xn} {
        &:hover {
            transform: ${e=>e.disabled?"unset":`scale(${1+Ar[e.scale]})`};
        }
    }

    &:active {
        transform: ${e=>e.disabled?"unset":`scale(${1-Ar[e.scale]})`};
    }

    ${bn} {
        &:active {
            transform: ${e=>e.disabled?"unset":`scale(${1-Ar[e.scale]*2})`};
        }
    }
`;

function Sn(e) {
  const t = Ce(() => Object.keys(e).filter(r => r.startsWith("data-"))),
    [n] = lo(e, t);
  return n
}
const he = e => {
  const t = Sn(e);
  return a(Nc, je({
    get appearance() {
      return e.appearance || "primary"
    },
    get class() {
      return e.class
    },
    onClick: n => {
      var r;
      return (r = e.onClick) == null ? void 0 : r.call(e, n)
    },
    onMouseEnter: n => {
      var r;
      return (r = e.onMouseEnter) == null ? void 0 : r.call(e, n)
    },
    onMouseLeave: n => {
      var r;
      return (r = e.onMouseLeave) == null ? void 0 : r.call(e, n)
    },
    ref(n) {
      const r = e.ref;
      typeof r == "function" ? r(n) : e.ref = n
    },
    get disabled() {
      return e.disabled
    },
    get scale() {
      return e.scale || "m"
    },
    get leftIcon() {
      return !!e.leftIcon
    },
    get rightIcon() {
      return !!e.rightIcon
    },
    "data-tc-button": "true"
  }, t, {
    get children() {
      return [P(() => e.leftIcon), P(() => e.children), P(() => e.rightIcon)]
    }
  }))
};

function er(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e)
  })
}
const po = e => {
  let t, n = !0;
  const [r, o] = q(), [i, s] = q(), l = hr(() => e.children), {
    onBeforeEnter: c,
    onEnter: u,
    onAfterEnter: d,
    onBeforeExit: f,
    onExit: v,
    onAfterExit: L
  } = e, I = P(() => {
    const N = e.name || "s";
    return {
      enterActiveClass: e.enterActiveClass || N + "-enter-active",
      enterClass: e.enterClass || N + "-enter",
      enterToClass: e.enterToClass || N + "-enter-to",
      exitActiveClass: e.exitActiveClass || N + "-exit-active",
      exitClass: e.exitClass || N + "-exit",
      exitToClass: e.exitToClass || N + "-exit-to"
    }
  });

  function W(N, A) {
    if (!n || e.appear) {
      let B = function(C) {
        N && (!C || C.target === N) && (N.removeEventListener("transitionend", B), N.removeEventListener("animationend", B), N.classList.remove(...b), N.classList.remove(...M), ts(() => {
          r() !== N && o(N), i() === N && s(void 0)
        }), d && d(N), e.mode === "inout" && H(N, A))
      };
      const F = I().enterClass.split(" "),
        b = I().enterActiveClass.split(" "),
        M = I().enterToClass.split(" ");
      c && c(N), N.classList.add(...F), N.classList.add(...b), er(() => {
        N.classList.remove(...F), N.classList.add(...M), u && u(N, () => B()), (!u || u.length < 2) && (N.addEventListener("transitionend", B), N.addEventListener("animationend", B))
      })
    }
    A && !e.mode ? s(N) : o(N)
  }

  function H(N, A) {
    const B = I().exitClass.split(" "),
      F = I().exitActiveClass.split(" "),
      b = I().exitToClass.split(" ");
    if (!A.parentNode) return M();
    f && f(A), A.classList.add(...B), A.classList.add(...F), er(() => {
      A.classList.remove(...B), A.classList.add(...b)
    }), v && v(A, () => M()), (!v || v.length < 2) && (A.addEventListener("transitionend", M), A.addEventListener("animationend", M));

    function M(C) {
      (!C || C.target === A) && (A.removeEventListener("transitionend", M), A.removeEventListener("animationend", M), A.classList.remove(...F), A.classList.remove(...b), r() === A && o(void 0), L && L(A), e.mode === "outin" && W(N, A))
    }
  }
  return qn(N => {
    for (t = l(); typeof t == "function";) t = t();
    return Ce(() => (t && t !== N && (e.mode !== "outin" ? W(t, N) : n && o(t)), N && N !== t && e.mode !== "inout" && H(t, N), n = !1, t))
  }), [r, i]
};

function Rn(e) {
  const {
    top: t,
    bottom: n,
    left: r,
    right: o,
    width: i,
    height: s
  } = e.getBoundingClientRect(), l = e.parentNode.getBoundingClientRect();
  return {
    top: t - l.top,
    bottom: n,
    left: r - l.left,
    right: o,
    width: i,
    height: s
  }
}
const Hc = e => {
  const t = hr(() => e.children),
    n = P(() => {
      const L = e.name || "s";
      return {
        enterActiveClass: e.enterActiveClass || L + "-enter-active",
        enterClass: e.enterClass || L + "-enter",
        enterToClass: e.enterToClass || L + "-enter-to",
        exitActiveClass: e.exitActiveClass || L + "-exit-active",
        exitClass: e.exitClass || L + "-exit",
        exitToClass: e.exitToClass || L + "-exit-to",
        moveClass: e.moveClass || L + "-move"
      }
    }),
    {
      onBeforeEnter: r,
      onEnter: o,
      onAfterEnter: i,
      onBeforeExit: s,
      onExit: l,
      onAfterExit: c
    } = e,
    [u, d] = q();
  let f = [],
    v = !0;
  return qn(() => {
    const L = t(),
      I = [...L],
      W = new Set(L),
      H = new Set(f),
      N = n().enterClass.split(" "),
      A = n().enterActiveClass.split(" "),
      B = n().enterToClass.split(" "),
      F = n().exitClass.split(" "),
      b = n().exitActiveClass.split(" "),
      M = n().exitToClass.split(" ");
    for (let C = 0; C < L.length; C++) {
      const p = L[C];
      if (!v && !H.has(p)) {
        let g = function(S) {
          p && (!S || S.target === p) && (p.removeEventListener("transitionend", g), p.removeEventListener("animationend", g), p.classList.remove(...A), p.classList.remove(...B), i && i(p))
        };
        r && r(p), p.classList.add(...N), p.classList.add(...A), er(() => {
          p.classList.remove(...N), p.classList.add(...B), o && o(p, () => g()), (!o || o.length < 2) && (p.addEventListener("transitionend", g), p.addEventListener("animationend", g))
        })
      }
    }
    for (let C = 0; C < f.length; C++) {
      const p = f[C];
      if (!W.has(p) && p.parentNode) {
        let g = function(S) {
          (!S || S.target === p) && (p.removeEventListener("transitionend", g), p.removeEventListener("animationend", g), p.classList.remove(...b), p.classList.remove(...M), c && c(p), f = f.filter(m => m !== p), d(f))
        };
        I.splice(C, 0, p), s && s(p), p.classList.add(...F), p.classList.add(...b), er(() => {
          p.classList.remove(...F), p.classList.add(...M)
        }), l && l(p, () => g()), (!l || l.length < 2) && (p.addEventListener("transitionend", g), p.addEventListener("animationend", g))
      }
    }
    f = I, d(I)
  }), pe(L => {
    const I = u();
    return I.forEach(W => {
      let H;
      (H = L.get(W)) ? H.new && (H.new = !1, H.newPos = Rn(W)): L.set(W, H = {
        pos: Rn(W),
        new: !v
      }), H.new && W.addEventListener("transitionend", () => {
        H.new = !1, W.parentNode && (H.newPos = Rn(W))
      }, {
        once: !0
      }), H.newPos && (H.pos = H.newPos), H.newPos = Rn(W)
    }), v ? (v = !1, L) : (I.forEach(W => {
      const H = L.get(W),
        N = H.pos,
        A = H.newPos,
        B = N.left - A.left,
        F = N.top - A.top;
      if (B || F) {
        H.moved = !0;
        const b = W.style;
        b.transform = `translate(${B}px,${F}px)`, b.transitionDuration = "0s"
      }
    }), document.body.offsetHeight, I.forEach(W => {
      const H = L.get(W);
      if (H.moved) {
        let N = function(F) {
          F && F.target !== W || !W.parentNode || (!F || /transform$/.test(F.propertyName)) && (W.removeEventListener("transitionend", N), W.classList.remove(...B))
        };
        H.moved = !1;
        const A = W.style,
          B = n().moveClass.split(" ");
        W.classList.add(...B), A.transform = A.transitionDuration = "", W.addEventListener("transitionend", N)
      }
    }), L)
  }, new Map), u
};

function Fc(e, t) {
  const n = r => {
    var o;
    return !e.contains(r.target) && ((o = t()) == null ? void 0 : o())
  };
  document.body.addEventListener("click", n), Ee(() => document.body.removeEventListener("click", n))
}

function Oc(e, t) {
  const n = r => {
    var o, i;
    r.key === "Escape" && ((o = document.activeElement) == null || o.blur(), (i = t()) == null || i())
  };
  document.body.addEventListener("keydown", n), Ee(() => document.body.removeEventListener("keydown", n))
}

function jc(e, t) {
  const {
    isEnabled: n,
    onClose: r
  } = t();
  if (!n || !(ho().os === "android")) return;
  window.history.pushState(Kc, "");
  const i = s => {
    s.preventDefault(), r()
  };
  window.addEventListener("popstate", i, {
    once: !0
  }), Ee(() => {
    window.removeEventListener("popstate", i), ws(() => {
      var s;
      ((s = window.history.state) == null ? void 0 : s[$s]) === !0 && window.history.back()
    })
  })
}
const $s = "androidBackHandler",
  Kc = {
    [$s]: !0
  },
  Vc = J('<svg><path fill-rule="evenodd" clip-rule="evenodd" d="M10.2122 14.3407C10.5384 14.0854 10.5959 13.614 10.3406 13.2878L6.20237 8.00003L10.3406 2.71227C10.5959 2.38607 10.5384 1.91469 10.2122 1.6594C9.88604 1.40412 9.41465 1.46161 9.15937 1.7878L4.65937 7.5378C4.44688 7.80932 4.44688 8.19074 4.65937 8.46226L9.15937 14.2123C9.41465 14.5385 9.88604 14.5959 10.2122 14.3407Z"></path></svg>', 4, !0),
  qc = {
    left: 0,
    top: 90,
    right: 180,
    bottom: 270
  },
  Ts = e => {
    const t = ie(),
      n = () => e.fill || t.colors.icon.secondary,
      r = () => e.direction || "left",
      o = w("svg")`
        transform: rotate(${i=>qc[i.svgDirection]}deg);
        transition: transform 0.1s ease-in-out;
    `;
    return a(o, {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "none",
      get svgDirection() {
        return r()
      },
      get children() {
        const i = Vc.cloneNode(!0);
        return Y(() => O(i, "fill", n())), i
      }
    })
  },
  Zc = J('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.71966 2.71968C3.01255 2.42678 3.48743 2.42677 3.78032 2.71966L8.00002 6.93925L12.2197 2.71967C12.5126 2.42677 12.9874 2.42678 13.2803 2.71967C13.5732 3.01257 13.5732 3.48744 13.2803 3.78033L9.06068 7.99991L13.2803 12.2197C13.5732 12.5126 13.5732 12.9874 13.2803 13.2803C12.9874 13.5732 12.5126 13.5732 12.2197 13.2803L8.00002 9.06057L3.78033 13.2803C3.48744 13.5732 3.01257 13.5732 2.71967 13.2803C2.42678 12.9874 2.42677 12.5126 2.71967 12.2197L6.93936 7.99991L2.71968 3.78034C2.42678 3.48745 2.42677 3.01257 2.71966 2.71968Z"></path></svg>'),
  Gc = e => {
    const t = ie(),
      n = () => e.fill || t.colors.icon.secondary;
    return (() => {
      const r = Zc.cloneNode(!0),
        o = r.firstChild;
      return Y(() => O(o, "fill", n())), r
    })()
  },
  Qc = w.button`
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: ${e=>e.theme.colors.background.tint};
    border: none;
    cursor: pointer;

    transition: transform 0.125s ease-in-out;

    ${xn} {
        &:hover {
            transform: scale(1.04);
        }
    }

    &:active {
        transform: scale(0.96);
    }

    ${bn} {
        &:active {
            transform: scale(0.92);
        }
    }
`,
  Tt = e => {
    const t = Sn(e),
      n = () => e.icon || "close";
    return a(Qc, je({
      get class() {
        return e.class
      },
      onClick: () => e.onClick(),
      "data-tc-icon-button": "true"
    }, t, {
      get children() {
        return [a(G, {
          get when() {
            return !!e.children
          },
          get children() {
            return e.children
          }
        }), a(G, {
          get when() {
            return !e.children
          },
          get children() {
            return a(yn, {
              get children() {
                return [a(be, {
                  get when() {
                    return n() === "close"
                  },
                  get children() {
                    return a(Gc, {
                      get fill() {
                        return e.fill
                      }
                    })
                  }
                }), a(be, {
                  get when() {
                    return n() === "arrow"
                  },
                  get children() {
                    return a(Ts, {
                      get fill() {
                        return e.fill
                      }
                    })
                  }
                }), a(be, {
                  get when() {
                    return n() === "question"
                  },
                  get children() {
                    return a(e0, {
                      get fill() {
                        return e.fill
                      }
                    })
                  }
                }), a(be, {
                  get when() {
                    return typeof n() != "string"
                  },
                  get children() {
                    return n()
                  }
                })]
              }
            })
          }
        })]
      }
    }))
  },
  Ft = {
    m: "24px",
    s: "16px",
    none: "0"
  },
  zc = w.div`
    display: flex;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    padding: 20px 0;
    overflow-y: auto;

    ${Re("mobile")} {
        padding-bottom: 0;
    }
`,
  Yc = it`
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08), 0 16px 64px rgba(0, 0, 0, 0.16);
    width: fit-content;
    margin: auto;

    ${Re("mobile")} {
        width: 100%;
        height: fit-content;
        margin: auto 0 0 0;
    }
`,
  Jc = w.div`
    position: relative;
    min-height: 100px;
    width: 416px;
    padding: 44px 56px 24px;

    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.04);

    background-color: ${e=>e.theme.colors.background.primary};
    border-radius: ${e=>Ft[e.theme.borderRadius]};

    ${Re("mobile")} {
        width: 100%;
    }
`,
  Xc = w(Tt)`
    position: absolute;
    right: 16px;
    top: 16px;
`,
  eu = w.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 16px 16px 18px;
    border-radius: 0 0 ${e=>Ft[e.theme.borderRadius]}
        ${e=>Ft[e.theme.borderRadius]};
`,
  tu = w(Tt)`
    background-color: ${e=>Cn(e.theme.colors.icon.secondary,.12)};
`;
class nu {
  constructor() {
    K(this, "currentTime", 0)
  }
}
const Xt = class {
  constructor() {
    K(this, "currentTime", 0), K(this, "playbackRate", 1), K(this, "startTime", null), K(this, "timeline", new nu), K(this, "finished", Promise.resolve(this)), K(this, "effect", null), K(this, "id", ""), K(this, "pending", !1), K(this, "playState", "finished"), K(this, "replaceState", "active"), K(this, "ready", Promise.resolve(this)), K(this, "oncancel", null), K(this, "onfinish", null), K(this, "onremove", null)
  }
  static create() {
    return Xt._instance || (Za("Animation is not supported in this environment: please consider using the `web-animations-js` polyfill to provide a fallback implementation of the Web Animations API."), Xt._instance = new Xt), Xt._instance
  }
  cancel() {}
  finish() {}
  pause() {}
  play() {}
  reverse() {}
  addEventListener(e, t, n) {}
  dispatchEvent(e) {
    return !1
  }
  removeEventListener(e, t, n) {}
  updatePlaybackRate(e) {}
  commitStyles() {}
  persist() {}
};
let Ms = Xt;
K(Ms, "_instance", null);

function Oe(e, t, n) {
  return "animate" in e ? e.animate(t, n) : Ms.create()
}
const ru = J("<div></div>"),
  ou = Fc,
  iu = Oc,
  su = jc,
  Rs = e => {
    const t = ie(),
      n = Sn(e);
    return pe(() => {
      e.opened ? za() : Ya()
    }), a(po, {
      onBeforeEnter: r => {
        const o = Dt("mobile") ? 200 : 100;
        Oe(r, [{
          opacity: 0
        }, {
          opacity: 1
        }], {
          duration: o
        }), Dt("mobile") && Oe(r.firstElementChild, [{
          transform: "translateY(390px)"
        }, {
          transform: "translateY(0)"
        }], {
          duration: o
        })
      },
      onExit: (r, o) => {
        const i = Dt("mobile") ? 200 : 100,
          s = Oe(r, [{
            opacity: 1
          }, {
            opacity: 0
          }], {
            duration: i
          });
        if (Dt("mobile")) {
          const l = Oe(r.firstElementChild, [{
            transform: "translateY(0)"
          }, {
            transform: "translateY(390px)"
          }], {
            duration: i
          });
          Promise.all([s.finished, l.finished]).then(o)
        } else s.finished.then(o)
      },
      get children() {
        return a(G, {
          get when() {
            return e.opened
          },
          get children() {
            return a(zc, je({
              "data-tc-modal": "true"
            }, n, {
              get children() {
                const r = ru.cloneNode(!0);
                return Ht(su, r, () => ({
                  isEnabled: e.enableAndroidBackHandler,
                  onClose: () => e.onClose()
                })), Ht(iu, r, () => () => e.onClose()), Ht(ou, r, () => () => e.onClose()), xe(r, a(Jc, {
                  get class() {
                    return e.class
                  },
                  get children() {
                    return [a(Xc, {
                      icon: "close",
                      onClick: () => e.onClose()
                    }), P(() => e.children)]
                  }
                }), null), xe(r, a(G, {
                  get when() {
                    return e.onClickQuestion
                  },
                  get children() {
                    return a(eu, {
                      get children() {
                        return [a(Ju, {}), a(tu, {
                          get onClick() {
                            return e.onClickQuestion
                          },
                          icon: "question"
                        })]
                      }
                    })
                  }
                }), null), Y(() => ao(r, Un(Yc, it`
                                border-radius: ${Ft[t.borderRadius]};
                                background-color: ${t.colors.background.tint};

                                ${Re("mobile")} {
                                    border-radius: ${Ft[t.borderRadius]}
                                        ${Ft[t.borderRadius]} 0 0;
                                }
                            `))), r
              }
            }))
          }
        })
      }
    })
  },
  lu = {
    m: "22px",
    s: "12px",
    none: "0"
  },
  au = {
    m: "18px",
    s: "8px",
    none: "0"
  },
  cu = w.div`
    display: grid;
    grid-template: 1fr / 1fr 1fr;
    width: fit-content;
    justify-items: center;
    gap: 4px;

    position: relative;
    padding: 4px;
    border-radius: ${e=>lu[e.theme.borderRadius]};

    background-color: ${e=>e.theme.colors.background.secondary};
`,
  uu = w.div`
    position: absolute;
    top: 4px;
    left: 4px;

    height: calc(100% - 8px);
    width: calc(50% - 4px);

    border-radius: ${e=>au[e.theme.borderRadius]};
    background-color: ${e=>e.theme.colors.background.segment};

    transform: ${e=>e.right?"translateX(100%)":"translateX(0)"};

    transition: transform 0.13s ease-in-out;
`,
  li = w.input`
    display: none;
`,
  ai = w.label`
    padding: 9px 12px;
    z-index: 1;

    cursor: ${e=>e.isActive?"default":"pointer"};

    transition: transform 0.13s ease-in-out;

    &:hover {
        transform: ${e=>e.isActive?"none":"scale(1.025)"};
    }

    > * {
        ${e=>e.isActive?"":`color: ${e.theme.colors.text.secondary};`}
    }
`,
  du = e => {
    const t = "tabBar" + Math.floor(Math.random() * 1e4);
    return a(cu, {
      get class() {
        return e.class
      },
      "data-tc-tab-bar": "true",
      get children() {
        return [a(uu, {
          get right() {
            return e.selectedTabIndex === 1
          }
        }), a(ai, {
          get isActive() {
            return e.selectedTabIndex === 0
          },
          get children() {
            return [a(li, {
              type: "radio",
              name: t,
              get checked() {
                return e.selectedTabIndex === 0
              },
              onInput: () => {
                var n;
                return (n = e.onSelectedTabIndexChange) == null ? void 0 : n.call(e, 0)
              }
            }), P(() => e.tab1)]
          }
        }), a(ai, {
          get isActive() {
            return e.selectedTabIndex === 1
          },
          get children() {
            return [a(li, {
              type: "radio",
              get checked() {
                return e.selectedTabIndex === 1
              },
              name: t,
              onInput: () => {
                var n;
                return (n = e.onSelectedTabIndexChange) == null ? void 0 : n.call(e, 1)
              }
            }), P(() => e.tab2)]
          }
        })]
      }
    })
  },
  fu = {
    m: "16px",
    s: "12px",
    none: "0"
  },
  hu = {
    m: "12px",
    s: "8px",
    none: "0"
  },
  Is = 256,
  Gr = 60,
  ci = 48,
  ui = 24,
  Nn = w.div`
    width: 52px;
    height: 52px;
    background: transparent;
    position: absolute;
    right: 0;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.125s ease-in-out;
`,
  gu = w.button`
    display: flex;
    align-items: center;
    position: relative;
    background-color: ${e=>e.theme.colors.background.qr};
    border-radius: ${e=>fu[e.theme.borderRadius]};
    padding: ${Ke(ui)} 0;
    height: ${Ke(Is+ui*2)};
    width: 100%;

    overflow: hidden;
    cursor: pointer;
    border: none;

    ${xn} {
        &:hover {
            ${Nn.class} {
                transform: scale(1.04);
            }
        }
    }

    &:active {
        ${Nn.class} {
            transform: scale(0.96);
        }
    }

    ${bn} {
        &:active {
            ${Nn.class} {
                transform: scale(0.92);
            }
        }
    }
`,
  mu = w.div`
    position: relative;

    width: fit-content;
    margin: 0 auto;

    > div:first-child {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    rect {
        fill: transparent;
    }

    path {
        fill: ${e=>e.theme.colors.constant.black};
    }
`,
  vu = w.div`
    position: absolute;
    width: ${Ke(Gr)};
    height: ${Ke(Gr)};
    background: ${e=>e.theme.colors.background.qr};

    display: flex;
    align-items: center;
    justify-content: center;
`,
  wu = w($t)`
    width: ${e=>Ke(e.size)};
    height: ${e=>Ke(e.size)};
    border-radius: ${e=>hu[e.theme.borderRadius]};
    background-color: ${e=>e.theme.colors.background.qr};
`,
  pu = w.div`
    position: absolute;
    bottom: 14px;
    left: 50%;
    transform: translate(-50%, 0);

    display: flex;
    gap: 6px;
    align-items: center;
    border-radius: 18px;
    min-width: 126px;
    padding: 9px 16px 9px 10px;

    filter: drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.08));
    background-color: ${e=>e.theme.colors.background.segment};
`;
var Bs = {
  exports: {}
};
(function(e, t) {
  var n = function() {
    var r = function(b, M) {
      var C = 236,
        p = 17,
        g = b,
        S = i[M],
        m = null,
        h = 0,
        R = null,
        $ = [],
        T = {},
        X = function(x, k) {
          h = g * 4 + 17, m = function(y) {
            for (var _ = new Array(y), E = 0; E < y; E += 1) {
              _[E] = new Array(y);
              for (var U = 0; U < y; U += 1) _[E][U] = null
            }
            return _
          }(h), ee(0, 0), ee(h - 7, 0), ee(0, h - 7), ke(), ge(), Ye(x, k), g >= 7 && He(x), R == null && (R = ul(g, S, $)), Je(R, k)
        },
        ee = function(x, k) {
          for (var y = -1; y <= 7; y += 1)
            if (!(x + y <= -1 || h <= x + y))
              for (var _ = -1; _ <= 7; _ += 1) k + _ <= -1 || h <= k + _ || (0 <= y && y <= 6 && (_ == 0 || _ == 6) || 0 <= _ && _ <= 6 && (y == 0 || y == 6) || 2 <= y && y <= 4 && 2 <= _ && _ <= 4 ? m[x + y][k + _] = !0 : m[x + y][k + _] = !1)
        },
        se = function() {
          for (var x = 0, k = 0, y = 0; y < 8; y += 1) {
            X(!0, y);
            var _ = l.getLostPoint(T);
            (y == 0 || x > _) && (x = _, k = y)
          }
          return k
        },
        ge = function() {
          for (var x = 8; x < h - 8; x += 1) m[x][6] == null && (m[x][6] = x % 2 == 0);
          for (var k = 8; k < h - 8; k += 1) m[6][k] == null && (m[6][k] = k % 2 == 0)
        },
        ke = function() {
          for (var x = l.getPatternPosition(g), k = 0; k < x.length; k += 1)
            for (var y = 0; y < x.length; y += 1) {
              var _ = x[k],
                E = x[y];
              if (m[_][E] == null)
                for (var U = -2; U <= 2; U += 1)
                  for (var Z = -2; Z <= 2; Z += 1) U == -2 || U == 2 || Z == -2 || Z == 2 || U == 0 && Z == 0 ? m[_ + U][E + Z] = !0 : m[_ + U][E + Z] = !1
            }
        },
        He = function(x) {
          for (var k = l.getBCHTypeNumber(g), y = 0; y < 18; y += 1) {
            var _ = !x && (k >> y & 1) == 1;
            m[Math.floor(y / 3)][y % 3 + h - 8 - 3] = _
          }
          for (var y = 0; y < 18; y += 1) {
            var _ = !x && (k >> y & 1) == 1;
            m[y % 3 + h - 8 - 3][Math.floor(y / 3)] = _
          }
        },
        Ye = function(x, k) {
          for (var y = S << 3 | k, _ = l.getBCHTypeInfo(y), E = 0; E < 15; E += 1) {
            var U = !x && (_ >> E & 1) == 1;
            E < 6 ? m[E][8] = U : E < 8 ? m[E + 1][8] = U : m[h - 15 + E][8] = U
          }
          for (var E = 0; E < 15; E += 1) {
            var U = !x && (_ >> E & 1) == 1;
            E < 8 ? m[8][h - E - 1] = U : E < 9 ? m[8][15 - E - 1 + 1] = U : m[8][15 - E - 1] = U
          }
          m[h - 8][8] = !x
        },
        Je = function(x, k) {
          for (var y = -1, _ = h - 1, E = 7, U = 0, Z = l.getMaskFunction(k), V = h - 1; V > 0; V -= 2)
            for (V == 6 && (V -= 1);;) {
              for (var ae = 0; ae < 2; ae += 1)
                if (m[_][V - ae] == null) {
                  var me = !1;
                  U < x.length && (me = (x[U] >>> E & 1) == 1);
                  var Q = Z(_, V - ae);
                  Q && (me = !me), m[_][V - ae] = me, E -= 1, E == -1 && (U += 1, E = 7)
                } if (_ += y, _ < 0 || h <= _) {
                _ -= y, y = -y;
                break
              }
            }
        },
        Mt = function(x, k) {
          for (var y = 0, _ = 0, E = 0, U = new Array(k.length), Z = new Array(k.length), V = 0; V < k.length; V += 1) {
            var ae = k[V].dataCount,
              me = k[V].totalCount - ae;
            _ = Math.max(_, ae), E = Math.max(E, me), U[V] = new Array(ae);
            for (var Q = 0; Q < U[V].length; Q += 1) U[V][Q] = 255 & x.getBuffer()[Q + y];
            y += ae;
            var Ie = l.getErrorCorrectPolynomial(me),
              Be = u(U[V], Ie.getLength() - 1),
              To = Be.mod(Ie);
            Z[V] = new Array(Ie.getLength() - 1);
            for (var Q = 0; Q < Z[V].length; Q += 1) {
              var Mo = Q + To.getLength() - Z[V].length;
              Z[V][Q] = Mo >= 0 ? To.getAt(Mo) : 0
            }
          }
          for (var Ro = 0, Q = 0; Q < k.length; Q += 1) Ro += k[Q].totalCount;
          for (var Cr = new Array(Ro), An = 0, Q = 0; Q < _; Q += 1)
            for (var V = 0; V < k.length; V += 1) Q < U[V].length && (Cr[An] = U[V][Q], An += 1);
          for (var Q = 0; Q < E; Q += 1)
            for (var V = 0; V < k.length; V += 1) Q < Z[V].length && (Cr[An] = Z[V][Q], An += 1);
          return Cr
        },
        ul = function(x, k, y) {
          for (var _ = d.getRSBlocks(x, k), E = f(), U = 0; U < y.length; U += 1) {
            var Z = y[U];
            E.put(Z.getMode(), 4), E.put(Z.getLength(), l.getLengthInBits(Z.getMode(), x)), Z.write(E)
          }
          for (var V = 0, U = 0; U < _.length; U += 1) V += _[U].dataCount;
          if (E.getLengthInBits() > V * 8) throw "code length overflow. (" + E.getLengthInBits() + ">" + V * 8 + ")";
          for (E.getLengthInBits() + 4 <= V * 8 && E.put(0, 4); E.getLengthInBits() % 8 != 0;) E.putBit(!1);
          for (; !(E.getLengthInBits() >= V * 8 || (E.put(C, 8), E.getLengthInBits() >= V * 8));) E.put(p, 8);
          return Mt(E, _)
        };
      T.addData = function(x, k) {
        k = k || "Byte";
        var y = null;
        switch (k) {
          case "Numeric":
            y = v(x);
            break;
          case "Alphanumeric":
            y = L(x);
            break;
          case "Byte":
            y = I(x);
            break;
          case "Kanji":
            y = W(x);
            break;
          default:
            throw "mode:" + k
        }
        $.push(y), R = null
      }, T.isDark = function(x, k) {
        if (x < 0 || h <= x || k < 0 || h <= k) throw x + "," + k;
        return m[x][k]
      }, T.getModuleCount = function() {
        return h
      }, T.make = function() {
        if (g < 1) {
          for (var x = 1; x < 40; x++) {
            for (var k = d.getRSBlocks(x, S), y = f(), _ = 0; _ < $.length; _++) {
              var E = $[_];
              y.put(E.getMode(), 4), y.put(E.getLength(), l.getLengthInBits(E.getMode(), x)), E.write(y)
            }
            for (var U = 0, _ = 0; _ < k.length; _++) U += k[_].dataCount;
            if (y.getLengthInBits() <= U * 8) break
          }
          g = x
        }
        X(!1, se())
      }, T.createTableTag = function(x, k) {
        x = x || 2, k = typeof k > "u" ? x * 4 : k;
        var y = "";
        y += '<table style="', y += " border-width: 0px; border-style: none;", y += " border-collapse: collapse;", y += " padding: 0px; margin: " + k + "px;", y += '">', y += "<tbody>";
        for (var _ = 0; _ < T.getModuleCount(); _ += 1) {
          y += "<tr>";
          for (var E = 0; E < T.getModuleCount(); E += 1) y += '<td style="', y += " border-width: 0px; border-style: none;", y += " border-collapse: collapse;", y += " padding: 0px; margin: 0px;", y += " width: " + x + "px;", y += " height: " + x + "px;", y += " background-color: ", y += T.isDark(_, E) ? "#000000" : "#ffffff", y += ";", y += '"/>';
          y += "</tr>"
        }
        return y += "</tbody>", y += "</table>", y
      }, T.createSvgTag = function(x, k, y, _) {
        var E = {};
        typeof arguments[0] == "object" && (E = arguments[0], x = E.cellSize, k = E.margin, y = E.alt, _ = E.title), x = x || 2, k = typeof k > "u" ? x * 4 : k, y = typeof y == "string" ? {
          text: y
        } : y || {}, y.text = y.text || null, y.id = y.text ? y.id || "qrcode-description" : null, _ = typeof _ == "string" ? {
          text: _
        } : _ || {}, _.text = _.text || null, _.id = _.text ? _.id || "qrcode-title" : null;
        var U = T.getModuleCount() * x + k * 2,
          Z, V, ae, me, Q = "",
          Ie;
        for (Ie = "l" + x + ",0 0," + x + " -" + x + ",0 0,-" + x + "z ", Q += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"', Q += E.scalable ? "" : ' width="' + U + 'px" height="' + U + 'px"', Q += ' viewBox="0 0 ' + U + " " + U + '" ', Q += ' preserveAspectRatio="xMinYMin meet"', Q += _.text || y.text ? ' role="img" aria-labelledby="' + Rt([_.id, y.id].join(" ").trim()) + '"' : "", Q += ">", Q += _.text ? '<title id="' + Rt(_.id) + '">' + Rt(_.text) + "</title>" : "", Q += y.text ? '<description id="' + Rt(y.id) + '">' + Rt(y.text) + "</description>" : "", Q += '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>', Q += '<path d="', ae = 0; ae < T.getModuleCount(); ae += 1)
          for (me = ae * x + k, Z = 0; Z < T.getModuleCount(); Z += 1) T.isDark(ae, Z) && (V = Z * x + k, Q += "M" + V + "," + me + Ie);
        return Q += '" stroke="transparent" fill="black"/>', Q += "</svg>", Q
      }, T.createDataURL = function(x, k) {
        x = x || 2, k = typeof k > "u" ? x * 4 : k;
        var y = T.getModuleCount() * x + k * 2,
          _ = k,
          E = y - k;
        return F(y, y, function(U, Z) {
          if (_ <= U && U < E && _ <= Z && Z < E) {
            var V = Math.floor((U - _) / x),
              ae = Math.floor((Z - _) / x);
            return T.isDark(ae, V) ? 0 : 1
          } else return 1
        })
      }, T.createImgTag = function(x, k, y) {
        x = x || 2, k = typeof k > "u" ? x * 4 : k;
        var _ = T.getModuleCount() * x + k * 2,
          E = "";
        return E += "<img", E += ' src="', E += T.createDataURL(x, k), E += '"', E += ' width="', E += _, E += '"', E += ' height="', E += _, E += '"', y && (E += ' alt="', E += Rt(y), E += '"'), E += "/>", E
      };
      var Rt = function(x) {
          for (var k = "", y = 0; y < x.length; y += 1) {
            var _ = x.charAt(y);
            switch (_) {
              case "<":
                k += "&lt;";
                break;
              case ">":
                k += "&gt;";
                break;
              case "&":
                k += "&amp;";
                break;
              case '"':
                k += "&quot;";
                break;
              default:
                k += _;
                break
            }
          }
          return k
        },
        dl = function(x) {
          var k = 1;
          x = typeof x > "u" ? k * 2 : x;
          var y = T.getModuleCount() * k + x * 2,
            _ = x,
            E = y - x,
            U, Z, V, ae, me, Q = {
              "██": "█",
              "█ ": "▀",
              " █": "▄",
              "  ": " "
            },
            Ie = {
              "██": "▀",
              "█ ": "▀",
              " █": " ",
              "  ": " "
            },
            Be = "";
          for (U = 0; U < y; U += 2) {
            for (V = Math.floor((U - _) / k), ae = Math.floor((U + 1 - _) / k), Z = 0; Z < y; Z += 1) me = "█", _ <= Z && Z < E && _ <= U && U < E && T.isDark(V, Math.floor((Z - _) / k)) && (me = " "), _ <= Z && Z < E && _ <= U + 1 && U + 1 < E && T.isDark(ae, Math.floor((Z - _) / k)) ? me += " " : me += "█", Be += x < 1 && U + 1 >= E ? Ie[me] : Q[me];
            Be += `
`
          }
          return y % 2 && x > 0 ? Be.substring(0, Be.length - y - 1) + Array(y + 1).join("▀") : Be.substring(0, Be.length - 1)
        };
      return T.createASCII = function(x, k) {
        if (x = x || 1, x < 2) return dl(k);
        x -= 1, k = typeof k > "u" ? x * 2 : k;
        var y = T.getModuleCount() * x + k * 2,
          _ = k,
          E = y - k,
          U, Z, V, ae, me = Array(x + 1).join("██"),
          Q = Array(x + 1).join("  "),
          Ie = "",
          Be = "";
        for (U = 0; U < y; U += 1) {
          for (V = Math.floor((U - _) / x), Be = "", Z = 0; Z < y; Z += 1) ae = 1, _ <= Z && Z < E && _ <= U && U < E && T.isDark(V, Math.floor((Z - _) / x)) && (ae = 0), Be += ae ? me : Q;
          for (V = 0; V < x; V += 1) Ie += Be + `
`
        }
        return Ie.substring(0, Ie.length - 1)
      }, T.renderTo2dContext = function(x, k) {
        k = k || 2;
        for (var y = T.getModuleCount(), _ = 0; _ < y; _++)
          for (var E = 0; E < y; E++) x.fillStyle = T.isDark(_, E) ? "black" : "white", x.fillRect(_ * k, E * k, k, k)
      }, T
    };
    r.stringToBytesFuncs = {
      default: function(b) {
        for (var M = [], C = 0; C < b.length; C += 1) {
          var p = b.charCodeAt(C);
          M.push(p & 255)
        }
        return M
      }
    }, r.stringToBytes = r.stringToBytesFuncs.default, r.createStringToBytes = function(b, M) {
      var C = function() {
          for (var g = A(b), S = function() {
              var ge = g.read();
              if (ge == -1) throw "eof";
              return ge
            }, m = 0, h = {};;) {
            var R = g.read();
            if (R == -1) break;
            var $ = S(),
              T = S(),
              X = S(),
              ee = String.fromCharCode(R << 8 | $),
              se = T << 8 | X;
            h[ee] = se, m += 1
          }
          if (m != M) throw m + " != " + M;
          return h
        }(),
        p = 63;
      return function(g) {
        for (var S = [], m = 0; m < g.length; m += 1) {
          var h = g.charCodeAt(m);
          if (h < 128) S.push(h);
          else {
            var R = C[g.charAt(m)];
            typeof R == "number" ? (R & 255) == R ? S.push(R) : (S.push(R >>> 8), S.push(R & 255)) : S.push(p)
          }
        }
        return S
      }
    };
    var o = {
        MODE_NUMBER: 1,
        MODE_ALPHA_NUM: 2,
        MODE_8BIT_BYTE: 4,
        MODE_KANJI: 8
      },
      i = {
        L: 1,
        M: 0,
        Q: 3,
        H: 2
      },
      s = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7
      },
      l = function() {
        var b = [
            [],
            [6, 18],
            [6, 22],
            [6, 26],
            [6, 30],
            [6, 34],
            [6, 22, 38],
            [6, 24, 42],
            [6, 26, 46],
            [6, 28, 50],
            [6, 30, 54],
            [6, 32, 58],
            [6, 34, 62],
            [6, 26, 46, 66],
            [6, 26, 48, 70],
            [6, 26, 50, 74],
            [6, 30, 54, 78],
            [6, 30, 56, 82],
            [6, 30, 58, 86],
            [6, 34, 62, 90],
            [6, 28, 50, 72, 94],
            [6, 26, 50, 74, 98],
            [6, 30, 54, 78, 102],
            [6, 28, 54, 80, 106],
            [6, 32, 58, 84, 110],
            [6, 30, 58, 86, 114],
            [6, 34, 62, 90, 118],
            [6, 26, 50, 74, 98, 122],
            [6, 30, 54, 78, 102, 126],
            [6, 26, 52, 78, 104, 130],
            [6, 30, 56, 82, 108, 134],
            [6, 34, 60, 86, 112, 138],
            [6, 30, 58, 86, 114, 142],
            [6, 34, 62, 90, 118, 146],
            [6, 30, 54, 78, 102, 126, 150],
            [6, 24, 50, 76, 102, 128, 154],
            [6, 28, 54, 80, 106, 132, 158],
            [6, 32, 58, 84, 110, 136, 162],
            [6, 26, 54, 82, 110, 138, 166],
            [6, 30, 58, 86, 114, 142, 170]
          ],
          M = 1335,
          C = 7973,
          p = 21522,
          g = {},
          S = function(m) {
            for (var h = 0; m != 0;) h += 1, m >>>= 1;
            return h
          };
        return g.getBCHTypeInfo = function(m) {
          for (var h = m << 10; S(h) - S(M) >= 0;) h ^= M << S(h) - S(M);
          return (m << 10 | h) ^ p
        }, g.getBCHTypeNumber = function(m) {
          for (var h = m << 12; S(h) - S(C) >= 0;) h ^= C << S(h) - S(C);
          return m << 12 | h
        }, g.getPatternPosition = function(m) {
          return b[m - 1]
        }, g.getMaskFunction = function(m) {
          switch (m) {
            case s.PATTERN000:
              return function(h, R) {
                return (h + R) % 2 == 0
              };
            case s.PATTERN001:
              return function(h, R) {
                return h % 2 == 0
              };
            case s.PATTERN010:
              return function(h, R) {
                return R % 3 == 0
              };
            case s.PATTERN011:
              return function(h, R) {
                return (h + R) % 3 == 0
              };
            case s.PATTERN100:
              return function(h, R) {
                return (Math.floor(h / 2) + Math.floor(R / 3)) % 2 == 0
              };
            case s.PATTERN101:
              return function(h, R) {
                return h * R % 2 + h * R % 3 == 0
              };
            case s.PATTERN110:
              return function(h, R) {
                return (h * R % 2 + h * R % 3) % 2 == 0
              };
            case s.PATTERN111:
              return function(h, R) {
                return (h * R % 3 + (h + R) % 2) % 2 == 0
              };
            default:
              throw "bad maskPattern:" + m
          }
        }, g.getErrorCorrectPolynomial = function(m) {
          for (var h = u([1], 0), R = 0; R < m; R += 1) h = h.multiply(u([1, c.gexp(R)], 0));
          return h
        }, g.getLengthInBits = function(m, h) {
          if (1 <= h && h < 10) switch (m) {
            case o.MODE_NUMBER:
              return 10;
            case o.MODE_ALPHA_NUM:
              return 9;
            case o.MODE_8BIT_BYTE:
              return 8;
            case o.MODE_KANJI:
              return 8;
            default:
              throw "mode:" + m
          } else if (h < 27) switch (m) {
            case o.MODE_NUMBER:
              return 12;
            case o.MODE_ALPHA_NUM:
              return 11;
            case o.MODE_8BIT_BYTE:
              return 16;
            case o.MODE_KANJI:
              return 10;
            default:
              throw "mode:" + m
          } else if (h < 41) switch (m) {
            case o.MODE_NUMBER:
              return 14;
            case o.MODE_ALPHA_NUM:
              return 13;
            case o.MODE_8BIT_BYTE:
              return 16;
            case o.MODE_KANJI:
              return 12;
            default:
              throw "mode:" + m
          } else throw "type:" + h
        }, g.getLostPoint = function(m) {
          for (var h = m.getModuleCount(), R = 0, $ = 0; $ < h; $ += 1)
            for (var T = 0; T < h; T += 1) {
              for (var X = 0, ee = m.isDark($, T), se = -1; se <= 1; se += 1)
                if (!($ + se < 0 || h <= $ + se))
                  for (var ge = -1; ge <= 1; ge += 1) T + ge < 0 || h <= T + ge || se == 0 && ge == 0 || ee == m.isDark($ + se, T + ge) && (X += 1);
              X > 5 && (R += 3 + X - 5)
            }
          for (var $ = 0; $ < h - 1; $ += 1)
            for (var T = 0; T < h - 1; T += 1) {
              var ke = 0;
              m.isDark($, T) && (ke += 1), m.isDark($ + 1, T) && (ke += 1), m.isDark($, T + 1) && (ke += 1), m.isDark($ + 1, T + 1) && (ke += 1), (ke == 0 || ke == 4) && (R += 3)
            }
          for (var $ = 0; $ < h; $ += 1)
            for (var T = 0; T < h - 6; T += 1) m.isDark($, T) && !m.isDark($, T + 1) && m.isDark($, T + 2) && m.isDark($, T + 3) && m.isDark($, T + 4) && !m.isDark($, T + 5) && m.isDark($, T + 6) && (R += 40);
          for (var T = 0; T < h; T += 1)
            for (var $ = 0; $ < h - 6; $ += 1) m.isDark($, T) && !m.isDark($ + 1, T) && m.isDark($ + 2, T) && m.isDark($ + 3, T) && m.isDark($ + 4, T) && !m.isDark($ + 5, T) && m.isDark($ + 6, T) && (R += 40);
          for (var He = 0, T = 0; T < h; T += 1)
            for (var $ = 0; $ < h; $ += 1) m.isDark($, T) && (He += 1);
          var Ye = Math.abs(100 * He / h / h - 50) / 5;
          return R += Ye * 10, R
        }, g
      }(),
      c = function() {
        for (var b = new Array(256), M = new Array(256), C = 0; C < 8; C += 1) b[C] = 1 << C;
        for (var C = 8; C < 256; C += 1) b[C] = b[C - 4] ^ b[C - 5] ^ b[C - 6] ^ b[C - 8];
        for (var C = 0; C < 255; C += 1) M[b[C]] = C;
        var p = {};
        return p.glog = function(g) {
          if (g < 1) throw "glog(" + g + ")";
          return M[g]
        }, p.gexp = function(g) {
          for (; g < 0;) g += 255;
          for (; g >= 256;) g -= 255;
          return b[g]
        }, p
      }();

    function u(b, M) {
      if (typeof b.length > "u") throw b.length + "/" + M;
      var C = function() {
          for (var g = 0; g < b.length && b[g] == 0;) g += 1;
          for (var S = new Array(b.length - g + M), m = 0; m < b.length - g; m += 1) S[m] = b[m + g];
          return S
        }(),
        p = {};
      return p.getAt = function(g) {
        return C[g]
      }, p.getLength = function() {
        return C.length
      }, p.multiply = function(g) {
        for (var S = new Array(p.getLength() + g.getLength() - 1), m = 0; m < p.getLength(); m += 1)
          for (var h = 0; h < g.getLength(); h += 1) S[m + h] ^= c.gexp(c.glog(p.getAt(m)) + c.glog(g.getAt(h)));
        return u(S, 0)
      }, p.mod = function(g) {
        if (p.getLength() - g.getLength() < 0) return p;
        for (var S = c.glog(p.getAt(0)) - c.glog(g.getAt(0)), m = new Array(p.getLength()), h = 0; h < p.getLength(); h += 1) m[h] = p.getAt(h);
        for (var h = 0; h < g.getLength(); h += 1) m[h] ^= c.gexp(c.glog(g.getAt(h)) + S);
        return u(m, 0).mod(g)
      }, p
    }
    var d = function() {
        var b = [
            [1, 26, 19],
            [1, 26, 16],
            [1, 26, 13],
            [1, 26, 9],
            [1, 44, 34],
            [1, 44, 28],
            [1, 44, 22],
            [1, 44, 16],
            [1, 70, 55],
            [1, 70, 44],
            [2, 35, 17],
            [2, 35, 13],
            [1, 100, 80],
            [2, 50, 32],
            [2, 50, 24],
            [4, 25, 9],
            [1, 134, 108],
            [2, 67, 43],
            [2, 33, 15, 2, 34, 16],
            [2, 33, 11, 2, 34, 12],
            [2, 86, 68],
            [4, 43, 27],
            [4, 43, 19],
            [4, 43, 15],
            [2, 98, 78],
            [4, 49, 31],
            [2, 32, 14, 4, 33, 15],
            [4, 39, 13, 1, 40, 14],
            [2, 121, 97],
            [2, 60, 38, 2, 61, 39],
            [4, 40, 18, 2, 41, 19],
            [4, 40, 14, 2, 41, 15],
            [2, 146, 116],
            [3, 58, 36, 2, 59, 37],
            [4, 36, 16, 4, 37, 17],
            [4, 36, 12, 4, 37, 13],
            [2, 86, 68, 2, 87, 69],
            [4, 69, 43, 1, 70, 44],
            [6, 43, 19, 2, 44, 20],
            [6, 43, 15, 2, 44, 16],
            [4, 101, 81],
            [1, 80, 50, 4, 81, 51],
            [4, 50, 22, 4, 51, 23],
            [3, 36, 12, 8, 37, 13],
            [2, 116, 92, 2, 117, 93],
            [6, 58, 36, 2, 59, 37],
            [4, 46, 20, 6, 47, 21],
            [7, 42, 14, 4, 43, 15],
            [4, 133, 107],
            [8, 59, 37, 1, 60, 38],
            [8, 44, 20, 4, 45, 21],
            [12, 33, 11, 4, 34, 12],
            [3, 145, 115, 1, 146, 116],
            [4, 64, 40, 5, 65, 41],
            [11, 36, 16, 5, 37, 17],
            [11, 36, 12, 5, 37, 13],
            [5, 109, 87, 1, 110, 88],
            [5, 65, 41, 5, 66, 42],
            [5, 54, 24, 7, 55, 25],
            [11, 36, 12, 7, 37, 13],
            [5, 122, 98, 1, 123, 99],
            [7, 73, 45, 3, 74, 46],
            [15, 43, 19, 2, 44, 20],
            [3, 45, 15, 13, 46, 16],
            [1, 135, 107, 5, 136, 108],
            [10, 74, 46, 1, 75, 47],
            [1, 50, 22, 15, 51, 23],
            [2, 42, 14, 17, 43, 15],
            [5, 150, 120, 1, 151, 121],
            [9, 69, 43, 4, 70, 44],
            [17, 50, 22, 1, 51, 23],
            [2, 42, 14, 19, 43, 15],
            [3, 141, 113, 4, 142, 114],
            [3, 70, 44, 11, 71, 45],
            [17, 47, 21, 4, 48, 22],
            [9, 39, 13, 16, 40, 14],
            [3, 135, 107, 5, 136, 108],
            [3, 67, 41, 13, 68, 42],
            [15, 54, 24, 5, 55, 25],
            [15, 43, 15, 10, 44, 16],
            [4, 144, 116, 4, 145, 117],
            [17, 68, 42],
            [17, 50, 22, 6, 51, 23],
            [19, 46, 16, 6, 47, 17],
            [2, 139, 111, 7, 140, 112],
            [17, 74, 46],
            [7, 54, 24, 16, 55, 25],
            [34, 37, 13],
            [4, 151, 121, 5, 152, 122],
            [4, 75, 47, 14, 76, 48],
            [11, 54, 24, 14, 55, 25],
            [16, 45, 15, 14, 46, 16],
            [6, 147, 117, 4, 148, 118],
            [6, 73, 45, 14, 74, 46],
            [11, 54, 24, 16, 55, 25],
            [30, 46, 16, 2, 47, 17],
            [8, 132, 106, 4, 133, 107],
            [8, 75, 47, 13, 76, 48],
            [7, 54, 24, 22, 55, 25],
            [22, 45, 15, 13, 46, 16],
            [10, 142, 114, 2, 143, 115],
            [19, 74, 46, 4, 75, 47],
            [28, 50, 22, 6, 51, 23],
            [33, 46, 16, 4, 47, 17],
            [8, 152, 122, 4, 153, 123],
            [22, 73, 45, 3, 74, 46],
            [8, 53, 23, 26, 54, 24],
            [12, 45, 15, 28, 46, 16],
            [3, 147, 117, 10, 148, 118],
            [3, 73, 45, 23, 74, 46],
            [4, 54, 24, 31, 55, 25],
            [11, 45, 15, 31, 46, 16],
            [7, 146, 116, 7, 147, 117],
            [21, 73, 45, 7, 74, 46],
            [1, 53, 23, 37, 54, 24],
            [19, 45, 15, 26, 46, 16],
            [5, 145, 115, 10, 146, 116],
            [19, 75, 47, 10, 76, 48],
            [15, 54, 24, 25, 55, 25],
            [23, 45, 15, 25, 46, 16],
            [13, 145, 115, 3, 146, 116],
            [2, 74, 46, 29, 75, 47],
            [42, 54, 24, 1, 55, 25],
            [23, 45, 15, 28, 46, 16],
            [17, 145, 115],
            [10, 74, 46, 23, 75, 47],
            [10, 54, 24, 35, 55, 25],
            [19, 45, 15, 35, 46, 16],
            [17, 145, 115, 1, 146, 116],
            [14, 74, 46, 21, 75, 47],
            [29, 54, 24, 19, 55, 25],
            [11, 45, 15, 46, 46, 16],
            [13, 145, 115, 6, 146, 116],
            [14, 74, 46, 23, 75, 47],
            [44, 54, 24, 7, 55, 25],
            [59, 46, 16, 1, 47, 17],
            [12, 151, 121, 7, 152, 122],
            [12, 75, 47, 26, 76, 48],
            [39, 54, 24, 14, 55, 25],
            [22, 45, 15, 41, 46, 16],
            [6, 151, 121, 14, 152, 122],
            [6, 75, 47, 34, 76, 48],
            [46, 54, 24, 10, 55, 25],
            [2, 45, 15, 64, 46, 16],
            [17, 152, 122, 4, 153, 123],
            [29, 74, 46, 14, 75, 47],
            [49, 54, 24, 10, 55, 25],
            [24, 45, 15, 46, 46, 16],
            [4, 152, 122, 18, 153, 123],
            [13, 74, 46, 32, 75, 47],
            [48, 54, 24, 14, 55, 25],
            [42, 45, 15, 32, 46, 16],
            [20, 147, 117, 4, 148, 118],
            [40, 75, 47, 7, 76, 48],
            [43, 54, 24, 22, 55, 25],
            [10, 45, 15, 67, 46, 16],
            [19, 148, 118, 6, 149, 119],
            [18, 75, 47, 31, 76, 48],
            [34, 54, 24, 34, 55, 25],
            [20, 45, 15, 61, 46, 16]
          ],
          M = function(g, S) {
            var m = {};
            return m.totalCount = g, m.dataCount = S, m
          },
          C = {},
          p = function(g, S) {
            switch (S) {
              case i.L:
                return b[(g - 1) * 4 + 0];
              case i.M:
                return b[(g - 1) * 4 + 1];
              case i.Q:
                return b[(g - 1) * 4 + 2];
              case i.H:
                return b[(g - 1) * 4 + 3];
              default:
                return
            }
          };
        return C.getRSBlocks = function(g, S) {
          var m = p(g, S);
          if (typeof m > "u") throw "bad rs block @ typeNumber:" + g + "/errorCorrectionLevel:" + S;
          for (var h = m.length / 3, R = [], $ = 0; $ < h; $ += 1)
            for (var T = m[$ * 3 + 0], X = m[$ * 3 + 1], ee = m[$ * 3 + 2], se = 0; se < T; se += 1) R.push(M(X, ee));
          return R
        }, C
      }(),
      f = function() {
        var b = [],
          M = 0,
          C = {};
        return C.getBuffer = function() {
          return b
        }, C.getAt = function(p) {
          var g = Math.floor(p / 8);
          return (b[g] >>> 7 - p % 8 & 1) == 1
        }, C.put = function(p, g) {
          for (var S = 0; S < g; S += 1) C.putBit((p >>> g - S - 1 & 1) == 1)
        }, C.getLengthInBits = function() {
          return M
        }, C.putBit = function(p) {
          var g = Math.floor(M / 8);
          b.length <= g && b.push(0), p && (b[g] |= 128 >>> M % 8), M += 1
        }, C
      },
      v = function(b) {
        var M = o.MODE_NUMBER,
          C = b,
          p = {};
        p.getMode = function() {
          return M
        }, p.getLength = function(m) {
          return C.length
        }, p.write = function(m) {
          for (var h = C, R = 0; R + 2 < h.length;) m.put(g(h.substring(R, R + 3)), 10), R += 3;
          R < h.length && (h.length - R == 1 ? m.put(g(h.substring(R, R + 1)), 4) : h.length - R == 2 && m.put(g(h.substring(R, R + 2)), 7))
        };
        var g = function(m) {
            for (var h = 0, R = 0; R < m.length; R += 1) h = h * 10 + S(m.charAt(R));
            return h
          },
          S = function(m) {
            if ("0" <= m && m <= "9") return m.charCodeAt(0) - 48;
            throw "illegal char :" + m
          };
        return p
      },
      L = function(b) {
        var M = o.MODE_ALPHA_NUM,
          C = b,
          p = {};
        p.getMode = function() {
          return M
        }, p.getLength = function(S) {
          return C.length
        }, p.write = function(S) {
          for (var m = C, h = 0; h + 1 < m.length;) S.put(g(m.charAt(h)) * 45 + g(m.charAt(h + 1)), 11), h += 2;
          h < m.length && S.put(g(m.charAt(h)), 6)
        };
        var g = function(S) {
          if ("0" <= S && S <= "9") return S.charCodeAt(0) - 48;
          if ("A" <= S && S <= "Z") return S.charCodeAt(0) - 65 + 10;
          switch (S) {
            case " ":
              return 36;
            case "$":
              return 37;
            case "%":
              return 38;
            case "*":
              return 39;
            case "+":
              return 40;
            case "-":
              return 41;
            case ".":
              return 42;
            case "/":
              return 43;
            case ":":
              return 44;
            default:
              throw "illegal char :" + S
          }
        };
        return p
      },
      I = function(b) {
        var M = o.MODE_8BIT_BYTE,
          C = r.stringToBytes(b),
          p = {};
        return p.getMode = function() {
          return M
        }, p.getLength = function(g) {
          return C.length
        }, p.write = function(g) {
          for (var S = 0; S < C.length; S += 1) g.put(C[S], 8)
        }, p
      },
      W = function(b) {
        var M = o.MODE_KANJI,
          C = r.stringToBytesFuncs.SJIS;
        if (!C) throw "sjis not supported.";
        (function(S, m) {
          var h = C(S);
          if (h.length != 2 || (h[0] << 8 | h[1]) != m) throw "sjis not supported."
        })("友", 38726);
        var p = C(b),
          g = {};
        return g.getMode = function() {
          return M
        }, g.getLength = function(S) {
          return ~~(p.length / 2)
        }, g.write = function(S) {
          for (var m = p, h = 0; h + 1 < m.length;) {
            var R = (255 & m[h]) << 8 | 255 & m[h + 1];
            if (33088 <= R && R <= 40956) R -= 33088;
            else if (57408 <= R && R <= 60351) R -= 49472;
            else throw "illegal char at " + (h + 1) + "/" + R;
            R = (R >>> 8 & 255) * 192 + (R & 255), S.put(R, 13), h += 2
          }
          if (h < m.length) throw "illegal char at " + (h + 1)
        }, g
      },
      H = function() {
        var b = [],
          M = {};
        return M.writeByte = function(C) {
          b.push(C & 255)
        }, M.writeShort = function(C) {
          M.writeByte(C), M.writeByte(C >>> 8)
        }, M.writeBytes = function(C, p, g) {
          p = p || 0, g = g || C.length;
          for (var S = 0; S < g; S += 1) M.writeByte(C[S + p])
        }, M.writeString = function(C) {
          for (var p = 0; p < C.length; p += 1) M.writeByte(C.charCodeAt(p))
        }, M.toByteArray = function() {
          return b
        }, M.toString = function() {
          var C = "";
          C += "[";
          for (var p = 0; p < b.length; p += 1) p > 0 && (C += ","), C += b[p];
          return C += "]", C
        }, M
      },
      N = function() {
        var b = 0,
          M = 0,
          C = 0,
          p = "",
          g = {},
          S = function(h) {
            p += String.fromCharCode(m(h & 63))
          },
          m = function(h) {
            if (!(h < 0)) {
              if (h < 26) return 65 + h;
              if (h < 52) return 97 + (h - 26);
              if (h < 62) return 48 + (h - 52);
              if (h == 62) return 43;
              if (h == 63) return 47
            }
            throw "n:" + h
          };
        return g.writeByte = function(h) {
          for (b = b << 8 | h & 255, M += 8, C += 1; M >= 6;) S(b >>> M - 6), M -= 6
        }, g.flush = function() {
          if (M > 0 && (S(b << 6 - M), b = 0, M = 0), C % 3 != 0)
            for (var h = 3 - C % 3, R = 0; R < h; R += 1) p += "="
        }, g.toString = function() {
          return p
        }, g
      },
      A = function(b) {
        var M = b,
          C = 0,
          p = 0,
          g = 0,
          S = {};
        S.read = function() {
          for (; g < 8;) {
            if (C >= M.length) {
              if (g == 0) return -1;
              throw "unexpected end of file./" + g
            }
            var h = M.charAt(C);
            if (C += 1, h == "=") return g = 0, -1;
            if (h.match(/^\s$/)) continue;
            p = p << 6 | m(h.charCodeAt(0)), g += 6
          }
          var R = p >>> g - 8 & 255;
          return g -= 8, R
        };
        var m = function(h) {
          if (65 <= h && h <= 90) return h - 65;
          if (97 <= h && h <= 122) return h - 97 + 26;
          if (48 <= h && h <= 57) return h - 48 + 52;
          if (h == 43) return 62;
          if (h == 47) return 63;
          throw "c:" + h
        };
        return S
      },
      B = function(b, M) {
        var C = b,
          p = M,
          g = new Array(b * M),
          S = {};
        S.setPixel = function($, T, X) {
          g[T * C + $] = X
        }, S.write = function($) {
          $.writeString("GIF87a"), $.writeShort(C), $.writeShort(p), $.writeByte(128), $.writeByte(0), $.writeByte(0), $.writeByte(0), $.writeByte(0), $.writeByte(0), $.writeByte(255), $.writeByte(255), $.writeByte(255), $.writeString(","), $.writeShort(0), $.writeShort(0), $.writeShort(C), $.writeShort(p), $.writeByte(0);
          var T = 2,
            X = h(T);
          $.writeByte(T);
          for (var ee = 0; X.length - ee > 255;) $.writeByte(255), $.writeBytes(X, ee, 255), ee += 255;
          $.writeByte(X.length - ee), $.writeBytes(X, ee, X.length - ee), $.writeByte(0), $.writeString(";")
        };
        var m = function($) {
            var T = $,
              X = 0,
              ee = 0,
              se = {};
            return se.write = function(ge, ke) {
              if (ge >>> ke) throw "length over";
              for (; X + ke >= 8;) T.writeByte(255 & (ge << X | ee)), ke -= 8 - X, ge >>>= 8 - X, ee = 0, X = 0;
              ee = ge << X | ee, X = X + ke
            }, se.flush = function() {
              X > 0 && T.writeByte(ee)
            }, se
          },
          h = function($) {
            for (var T = 1 << $, X = (1 << $) + 1, ee = $ + 1, se = R(), ge = 0; ge < T; ge += 1) se.add(String.fromCharCode(ge));
            se.add(String.fromCharCode(T)), se.add(String.fromCharCode(X));
            var ke = H(),
              He = m(ke);
            He.write(T, ee);
            var Ye = 0,
              Je = String.fromCharCode(g[Ye]);
            for (Ye += 1; Ye < g.length;) {
              var Mt = String.fromCharCode(g[Ye]);
              Ye += 1, se.contains(Je + Mt) ? Je = Je + Mt : (He.write(se.indexOf(Je), ee), se.size() < 4095 && (se.size() == 1 << ee && (ee += 1), se.add(Je + Mt)), Je = Mt)
            }
            return He.write(se.indexOf(Je), ee), He.write(X, ee), He.flush(), ke.toByteArray()
          },
          R = function() {
            var $ = {},
              T = 0,
              X = {};
            return X.add = function(ee) {
              if (X.contains(ee)) throw "dup key:" + ee;
              $[ee] = T, T += 1
            }, X.size = function() {
              return T
            }, X.indexOf = function(ee) {
              return $[ee]
            }, X.contains = function(ee) {
              return typeof $[ee] < "u"
            }, X
          };
        return S
      },
      F = function(b, M, C) {
        for (var p = B(b, M), g = 0; g < M; g += 1)
          for (var S = 0; S < b; S += 1) p.setPixel(S, g, C(S, g));
        var m = H();
        p.write(m);
        for (var h = N(), R = m.toByteArray(), $ = 0; $ < R.length; $ += 1) h.writeByte(R[$]);
        return h.flush(), "data:image/gif;base64," + h
      };
    return r
  }();
  (function() {
    n.stringToBytesFuncs["UTF-8"] = function(r) {
      function o(i) {
        for (var s = [], l = 0; l < i.length; l++) {
          var c = i.charCodeAt(l);
          c < 128 ? s.push(c) : c < 2048 ? s.push(192 | c >> 6, 128 | c & 63) : c < 55296 || c >= 57344 ? s.push(224 | c >> 12, 128 | c >> 6 & 63, 128 | c & 63) : (l++, c = 65536 + ((c & 1023) << 10 | i.charCodeAt(l) & 1023), s.push(240 | c >> 18, 128 | c >> 12 & 63, 128 | c >> 6 & 63, 128 | c & 63))
        }
        return s
      }
      return o(r)
    }
  })(),
  function(r) {
    e.exports = r()
  }(function() {
    return n
  })
})(Bs);
const yu = Bs.exports;

function yo(e) {
  return ne(this, null, function*() {
    try {
      if (!(navigator != null && navigator.clipboard)) throw new fe("Clipboard API not available");
      return yield navigator.clipboard.writeText(e)
    } catch {}
    Cu(e)
  })
}

function Cu(e) {
  const t = document.createElement("textarea");
  t.value = e, t.style.top = "0", t.style.left = "0", t.style.position = "fixed", document.body.appendChild(t), t.focus(), t.select();
  try {
    document.execCommand("copy")
  } finally {
    document.body.removeChild(t)
  }
}
const bu = J("<div></div>"),
  vr = e => {
    let t, n, r;
    const [o, i] = q(!1), [s, l] = q(ci);
    pe(() => {
      const v = yu(0, "L");
      v.addData(e.sourceUrl), v.make(), t.innerHTML = v.createSvgTag(4, 0);
      const L = t.firstElementChild.clientWidth,
        I = Math.round(Is / L * 1e5) / 1e5;
      if (r) {
        const W = Math.ceil(Gr / (I * 4)) * 4,
          H = Ke(Math.ceil((L - W) / (2 * 4)) * 4);
        r.style.top = H, r.style.left = H, r.style.height = Ke(W), r.style.width = Ke(W), l(Math.round(ci / I))
      }
      n.style.transform = `scale(${I})`
    });
    let c = null;
    return a(gu, {
      get class() {
        return e.class
      },
      onClick: () => {
        i(!0), yo(e.sourceUrl), c != null && clearTimeout(c), c = setTimeout(() => i(!1), 1500)
      },
      get children() {
        return [a(mu, {
          ref(d) {
            const f = n;
            typeof f == "function" ? f(d) : n = d
          },
          get children() {
            return [(() => {
              const d = bu.cloneNode(!0),
                f = t;
              return typeof f == "function" ? Ht(f, d) : t = d, d
            })(), a(G, {
              get when() {
                return e.imageUrl
              },
              get children() {
                return a(vu, {
                  ref(d) {
                    const f = r;
                    typeof f == "function" ? f(d) : r = d
                  },
                  get children() {
                    return a(wu, {
                      get src() {
                        return e.imageUrl
                      },
                      alt: "",
                      get size() {
                        return s()
                      }
                    })
                  }
                })
              }
            })]
          }
        }), a(po, {
          onBeforeEnter: d => {
            Oe(d, [{
              opacity: 0,
              transform: "translate(-50%, 44px)"
            }, {
              opacity: 1,
              transform: "translate(-50%, 0)"
            }], {
              duration: 150,
              easing: "ease-out"
            })
          },
          onExit: (d, f) => {
            Oe(d, [{
              opacity: 1,
              transform: "translate(-50%, 0)"
            }, {
              opacity: 0,
              transform: "translate(-50%, 44px)"
            }], {
              duration: 150,
              easing: "ease-out"
            }).finished.then(() => {
              f()
            })
          },
          get children() {
            return a(G, {
              get when() {
                return o() && !e.disableCopy
              },
              get children() {
                return a(pu, {
                  get children() {
                    return [a(bo, {
                      size: "xs"
                    }), a(Me, {
                      translationKey: "common.linkCopied",
                      children: "Link Copied"
                    })]
                  }
                })
              }
            })
          }
        }), a(G, {
          get when() {
            return !e.disableCopy
          },
          get children() {
            return a(Nn, {
              get children() {
                return a(Us, {})
              }
            })
          }
        })]
      }
    })
  };
var Qr = (e, t, n) => {
    const r = t.trim().split(".").reduce((o, i) => o ? o[i] : void 0, e);
    return r !== void 0 ? r : n
  },
  xu = (e, t, n = /{{(.*?)}}/g) => e.replace(n, (r, o) => Qr(t, o, "")),
  Su = (e = {}, t = navigator.language in e ? navigator.language : Object.keys(e)[0]) => {
    const [n, r] = q(t), [o, i] = mo(e);
    return [(c, u, d) => {
      const f = Qr(o[n()], c, d || "");
      return typeof f == "function" ? f(u) : typeof f == "string" ? xu(f, u || {}) : f
    }, {
      add(c, u) {
        i(c, d => Object.assign(d || {}, u))
      },
      locale: c => c ? r(c) : n(),
      dict: c => Qr(o, c)
    }]
  },
  Ws = fr({}),
  Qe = () => Ae(Ws);
const ku = w.div`
    font-style: normal;
    font-weight: ${e=>e.fontWeight};
    font-size: ${e=>e.fontSize};
    line-height: ${e=>e.lineHeight};

    color: ${e=>e.color};
`,
  Me = e => {
    const t = ie(),
      [n] = Qe();
    let r;
    const o = () => e.color || t.colors.text.primary,
      i = je({
        fontSize: "14px",
        fontWeight: "510",
        lineHeight: "130%"
      }, e);
    return pe(() => {
      r && i.cursor !== "unset" && getComputedStyle(r).cursor !== "pointer" && (r.style.cursor = "default")
    }), a(ku, {
      get fontSize() {
        return i.fontSize
      },
      get fontWeight() {
        return i.fontWeight
      },
      get lineHeight() {
        return i.lineHeight
      },
      get color() {
        return o()
      },
      get class() {
        return i.class
      },
      ref(s) {
        const l = r;
        typeof l == "function" ? l(s) : r = s
      },
      "data-tc-text": "true",
      get children() {
        var s;
        return P(() => !!i.translationKey)() ? n(i.translationKey, i.translationValues, (s = i.children) == null ? void 0 : s.toString()) : i.children
      }
    })
  },
  _u = w.div`
    position: relative;

    &::after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border: 0.5px solid rgba(0, 0, 0, 0.08);

        border-radius: inherit;
    }
`,
  Eu = w($t)`
    width: 100%;
    height: 100%;
    border-radius: inherit;
`,
  Ps = e => a(_u, {
    get class() {
      return e.class
    },
    get children() {
      return a(Eu, {
        get src() {
          return e.src
        }
      })
    }
  }),
  Au = {
    m: "16px",
    s: "12px",
    none: "0"
  },
  Lu = {
    m: "6px",
    s: "6px",
    none: "0"
  },
  $u = w.button`
    position: relative;
    cursor: pointer;
    border: none;
    background-color: unset;
    padding: 8px 4px;
    width: 92px;
    display: flex;
    flex-direction: column;
    align-items: center;

    transition: transform 0.125s ease-in-out;

    ${xn} {
        &:hover {
            transform: scale(1.04);
        }
    }

    &:active {
        transform: scale(0.96);
    }

    ${Re("mobile")} {
        padding: 8px 4px;
        width: 82px;
    }

    ${bn} {
        &:active {
            transform: scale(0.92);
        }
    }
`,
  Tu = w(Ps)`
    width: 60px;
    height: 60px;
    border-radius: ${e=>Au[e.theme.borderRadius]};

    margin-bottom: 8px;
`,
  Mu = w($t)`
    position: absolute;
    right: 10px;
    top: 50px;
    width: 24px;
    height: 24px;
    border-radius: ${e=>Lu[e.theme.borderRadius]};
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.08);
`,
  Ru = w(Me)`
    max-width: 90px;
    font-weight: 510;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    ${Re("mobile")} {
        max-width: 80px;
    }
`,
  Iu = w(Me)`
    font-weight: ${e=>e.colorPrimary?"510":"400"};
    max-width: 90px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: ${e=>e.colorPrimary?e.theme.colors.text.primary:e.theme.colors.text.secondary};

    ${Re("mobile")} {
        max-width: 80px;
    }
`,
  Bu = J("<div></div>"),
  tr = e => {
    let t = null;
    const n = () => {
      const r = t == null ? void 0 : t.querySelector("div");
      if (r && r.scrollWidth > r.clientWidth) {
        let o = 0;
        const i = -.4,
          s = .05;
        for (; r.scrollWidth > r.clientWidth && o >= i;) o -= s, r.style.letterSpacing = `${o}px`;
        o !== 0 && (o -= s, r.style.letterSpacing = `${o}px`)
      }
    };
    return ns(() => n()), pe(() => {
      n()
    }), a($u, {
      get class() {
        return e.class
      },
      onClick: () => e.onClick(),
      "data-tc-wallet-item": "true",
      get children() {
        return [P(() => P(() => typeof e.icon == "string")() ? a(Tu, {
          get src() {
            return e.icon
          }
        }) : e.icon), P(() => P(() => !!e.badgeUrl)() && a(Mu, {
          get src() {
            return e.badgeUrl
          }
        })), (() => {
          const r = Bu.cloneNode(!0);
          return Ht(o => t = o, r), xe(r, a(Ru, {
            get children() {
              return e.name
            }
          })), r
        })(), P(() => P(() => !!e.secondLine)() && a(Iu, {
          get colorPrimary() {
            var r;
            return (r = e.secondLineColorPrimary) != null ? r : !0
          },
          get children() {
            return e.secondLine
          }
        }))]
      }
    })
  },
  Wu = w.h1`
    font-style: normal;
    font-weight: 590;
    font-size: 20px;
    line-height: 28px;

    text-align: center;

    color: ${e=>e.theme.colors.text.primary};

    margin-top: 0;
    margin-bottom: 0;

    cursor: default;
`,
  ze = e => {
    const [t] = Qe();
    return a(Wu, {
      get class() {
        return e.class
      },
      "data-tc-h1": "true",
      get children() {
        var n;
        return P(() => !!e.translationKey)() ? t(e.translationKey, e.translationValues, (n = e.children) == null ? void 0 : n.toString()) : e.children
      }
    })
  },
  Pu = w.h2`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;

    text-align: center;

    color: ${e=>e.theme.colors.text.secondary};

    margin-top: 0;
    margin-bottom: 32px;

    cursor: default;
`,
  pt = e => {
    const [t] = Qe();
    return a(Pu, {
      get class() {
        return e.class
      },
      "data-tc-h2": "true",
      get children() {
        var n;
        return P(() => !!e.translationKey)() ? t(e.translationKey, e.translationValues, (n = e.children) == null ? void 0 : n.toString()) : e.children
      }
    })
  },
  Uu = w.h3`
    font-style: normal;
    font-weight: 510;
    font-size: 16px;
    line-height: 20px;

    color: ${e=>e.theme.colors.text.primary};

    margin-top: 0;
    margin-bottom: 0;

    cursor: default;
`,
  Co = e => {
    const [t] = Qe();
    return a(Uu, {
      "data-tc-h3": "true",
      get class() {
        return e.class
      },
      get children() {
        var n;
        return P(() => !!e.translationKey)() ? t(e.translationKey, e.translationValues, (n = e.children) == null ? void 0 : n.toString()) : e.children
      }
    })
  },
  Du = J('<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.75 7.5C9.33579 7.5 9 7.16421 9 6.75C9 6.33579 9.33579 6 9.75 6H21.25C21.6642 6 22 6.33579 22 6.75V18.25C22 18.6642 21.6642 19 21.25 19C20.8358 19 20.5 18.6642 20.5 18.25V8.56066L6.28033 22.7803C5.98744 23.0732 5.51256 23.0732 5.21967 22.7803C4.92678 22.4874 4.92678 22.0126 5.21967 21.7197L19.4393 7.5H9.75Z"></path></svg>'),
  Nu = e => {
    const t = ie(),
      n = () => e.fill || t.colors.icon.secondary;
    return (() => {
      const r = Du.cloneNode(!0),
        o = r.firstChild;
      return Y(i => {
        const s = n(),
          l = n();
        return s !== i._v$ && O(r, "fill", i._v$ = s), l !== i._v$2 && O(o, "fill", i._v$2 = l), i
      }, {
        _v$: void 0,
        _v$2: void 0
      }), r
    })()
  },
  Hu = J('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.1839 17.7069C13.6405 18.6507 13.3688 19.1226 13.0591 19.348C12.4278 19.8074 11.5723 19.8074 10.941 19.348C10.6312 19.1226 10.3595 18.6507 9.81613 17.7069L5.52066 10.2464C4.76864 8.94024 4.39263 8.28717 4.33762 7.75894C4.2255 6.68236 4.81894 5.65591 5.80788 5.21589C6.29309 5 7.04667 5 8.55383 5H15.4462C16.9534 5 17.7069 5 18.1922 5.21589C19.1811 5.65591 19.7745 6.68236 19.6624 7.75894C19.6074 8.28717 19.2314 8.94024 18.4794 10.2464L14.1839 17.7069ZM11.1 16.3412L6.56139 8.48002C6.31995 8.06185 6.19924 7.85276 6.18146 7.68365C6.14523 7.33896 6.33507 7.01015 6.65169 6.86919C6.80703 6.80002 7.04847 6.80002 7.53133 6.80002H7.53134L11.1 6.80002V16.3412ZM12.9 16.3412L17.4387 8.48002C17.6801 8.06185 17.8008 7.85276 17.8186 7.68365C17.8548 7.33896 17.665 7.01015 17.3484 6.86919C17.193 6.80002 16.9516 6.80002 16.4687 6.80002L12.9 6.80002V16.3412Z"></path></svg>'),
  Fu = e => {
    const t = ie(),
      n = () => e.fill || t.colors.icon.primary;
    return (() => {
      const r = Hu.cloneNode(!0),
        o = r.firstChild;
      return Y(() => O(o, "fill", n())), r
    })()
  },
  Ou = J('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><g clip-path="url(#clip0_3783_2045)"><circle cx="8" cy="8.00098" r="8"></circle><path d="M4.75 8.50098L7 10.751L11.75 6.00098" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_3783_2045"><rect width="16" height="16" fill="white" transform="translate(0 0.000976562)"></rect></clipPath></defs></svg>'),
  ju = J('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="11"></circle><path d="M17.1364 9.6364C17.4879 9.28493 17.4879 8.71508 17.1364 8.36361C16.7849 8.01214 16.2151 8.01214 15.8636 8.36361L10 14.2272L8.1364 12.3636C7.78493 12.0121 7.21508 12.0121 6.86361 12.3636C6.51214 12.7151 6.51214 13.2849 6.86361 13.6364L9.36361 16.1364C9.71508 16.4879 10.2849 16.4879 10.6364 16.1364L17.1364 9.6364Z"></path></svg>'),
  Ku = J('<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="36" cy="36" r="33"></circle><path d="M50.9142 28.4142C51.6953 27.6332 51.6953 26.3668 50.9142 25.5858C50.1332 24.8047 48.8668 24.8047 48.0858 25.5858L30 43.6716L23.9142 37.5858C23.1332 36.8047 21.8668 36.8047 21.0858 37.5858C20.3047 38.3668 20.3047 39.6332 21.0858 40.4142L28.5858 47.9142C29.3668 48.6953 30.6332 48.6953 31.4142 47.9142L50.9142 28.4142Z"></path></svg>'),
  bo = e => {
    const t = ie(),
      n = () => e.size || "s",
      r = () => e.fill || t.colors.icon.success;
    return P((() => {
      const o = P(() => n() === "xs");
      return () => o() ? (() => {
        const i = Ou.cloneNode(!0),
          s = i.firstChild,
          l = s.firstChild,
          c = l.nextSibling;
        return Y(u => {
          const d = e.class,
            f = r(),
            v = t.colors.constant.white;
          return d !== u._v$ && O(i, "class", u._v$ = d), f !== u._v$2 && O(l, "fill", u._v$2 = f), v !== u._v$3 && O(c, "stroke", u._v$3 = v), u
        }, {
          _v$: void 0,
          _v$2: void 0,
          _v$3: void 0
        }), i
      })() : (() => {
        const i = P(() => n() === "s");
        return () => i() ? (() => {
          const s = ju.cloneNode(!0),
            l = s.firstChild,
            c = l.nextSibling;
          return Y(u => {
            const d = e.class,
              f = r(),
              v = t.colors.constant.white;
            return d !== u._v$4 && O(s, "class", u._v$4 = d), f !== u._v$5 && O(l, "fill", u._v$5 = f), v !== u._v$6 && O(c, "fill", u._v$6 = v), u
          }, {
            _v$4: void 0,
            _v$5: void 0,
            _v$6: void 0
          }), s
        })() : (() => {
          const s = Ku.cloneNode(!0),
            l = s.firstChild,
            c = l.nextSibling;
          return Y(u => {
            const d = e.class,
              f = r(),
              v = t.colors.constant.white;
            return d !== u._v$7 && O(s, "class", u._v$7 = d), f !== u._v$8 && O(l, "fill", u._v$8 = f), v !== u._v$9 && O(c, "fill", u._v$9 = v), u
          }, {
            _v$7: void 0,
            _v$8: void 0,
            _v$9: void 0
          }), s
        })()
      })()
    })())
  },
  Vu = J('<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="36" cy="36" r="33"></circle><path d="M24.0858 26.9142C23.3047 26.1332 23.3047 24.8668 24.0858 24.0858C24.8668 23.3047 26.1332 23.3047 26.9142 24.0858L36 33.1716L45.0858 24.0858C45.8668 23.3047 47.1332 23.3047 47.9142 24.0858C48.6953 24.8668 48.6953 26.1332 47.9142 26.9142L38.8284 36L47.9142 45.0858C48.6953 45.8668 48.6953 47.1332 47.9142 47.9142C47.1332 48.6953 45.8668 48.6953 45.0858 47.9142L36 38.8284L26.9142 47.9142C26.1332 48.6953 24.8668 48.6953 24.0858 47.9142C23.3047 47.1332 23.3047 45.8668 24.0858 45.0858L33.1716 36L24.0858 26.9142Z"></path></svg>'),
  qu = J('<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24.001" r="22"></circle><path d="M24 24.001L31.5 16.501M24 24.001L16.5 16.501M24 24.001L16.5 31.501M24 24.001L31.5 31.501" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></svg>'),
  Zu = J('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="11"></circle><path d="M7.86361 9.1364C7.51214 8.78493 7.51214 8.21508 7.86361 7.86361C8.21508 7.51214 8.78493 7.51214 9.1364 7.86361L12 10.7272L14.8636 7.86361C15.2151 7.51214 15.7849 7.51214 16.1364 7.86361C16.4879 8.21508 16.4879 8.78493 16.1364 9.1364L13.2728 12L16.1364 14.8636C16.4879 15.2151 16.4879 15.7849 16.1364 16.1364C15.7849 16.4879 15.2151 16.4879 14.8636 16.1364L12 13.2728L9.1364 16.1364C8.78493 16.4879 8.21508 16.4879 7.86361 16.1364C7.51214 15.7849 7.51214 15.2151 7.86361 14.8636L10.7272 12L7.86361 9.1364Z"></path></svg>'),
  wr = e => {
    const t = ie(),
      n = () => e.size || "m",
      r = () => e.fill || t.colors.icon.error;
    return P((() => {
      const o = P(() => n() === "m");
      return () => o() ? (() => {
        const i = Vu.cloneNode(!0),
          s = i.firstChild,
          l = s.nextSibling;
        return Y(c => {
          const u = e.class,
            d = r(),
            f = t.colors.constant.white;
          return u !== c._v$ && O(i, "class", c._v$ = u), d !== c._v$2 && O(s, "fill", c._v$2 = d), f !== c._v$3 && O(l, "fill", c._v$3 = f), c
        }, {
          _v$: void 0,
          _v$2: void 0,
          _v$3: void 0
        }), i
      })() : (() => {
        const i = P(() => n() === "s");
        return () => i() ? (() => {
          const s = qu.cloneNode(!0),
            l = s.firstChild,
            c = l.nextSibling;
          return Y(u => {
            const d = e.class,
              f = r(),
              v = t.colors.constant.white;
            return d !== u._v$4 && O(s, "class", u._v$4 = d), f !== u._v$5 && O(l, "fill", u._v$5 = f), v !== u._v$6 && O(c, "stroke", u._v$6 = v), u
          }, {
            _v$4: void 0,
            _v$5: void 0,
            _v$6: void 0
          }), s
        })() : (() => {
          const s = Zu.cloneNode(!0),
            l = s.firstChild,
            c = l.nextSibling;
          return Y(u => {
            const d = e.class,
              f = r(),
              v = t.colors.constant.white;
            return d !== u._v$7 && O(s, "class", u._v$7 = d), f !== u._v$8 && O(l, "fill", u._v$8 = f), v !== u._v$9 && O(c, "fill", u._v$9 = v), u
          }, {
            _v$7: void 0,
            _v$8: void 0,
            _v$9: void 0
          }), s
        })()
      })()
    })())
  },
  Gu = J('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.55 5.85123C18.9459 7.81184 20.1094 12.1541 18.1488 15.55C16.1882 18.9459 11.8459 20.1094 8.44998 18.1488C8.01952 17.9003 7.46909 18.0478 7.22056 18.4782C6.97203 18.9087 7.11952 19.4591 7.54998 19.7076C11.8068 22.1653 17.2499 20.7068 19.7076 16.45C22.1653 12.1932 20.7068 6.75005 16.45 4.29239C12.1932 1.83472 6.75003 3.29321 4.29236 7.55001C4.04383 7.98047 4.19132 8.53091 4.62178 8.77943C5.05224 9.02796 5.60268 8.88048 5.8512 8.45001C7.81181 5.05413 12.1541 3.89062 15.55 5.85123Z"></path></svg>'),
  Qu = J('<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M22 2.99951C11.5066 2.99951 3 11.5061 3 21.9995C3 32.4929 11.5066 40.9995 22 40.9995C22.8284 40.9995 23.5 41.6711 23.5 42.4995C23.5 43.3279 22.8284 43.9995 22 43.9995C9.84974 43.9995 0 34.1498 0 21.9995C0 9.84925 9.84974 -0.000488281 22 -0.000488281C34.1503 -0.000488281 44 9.84925 44 21.9995C44 22.8279 43.3284 23.4995 42.5 23.4995C41.6716 23.4995 41 22.8279 41 21.9995C41 11.5061 32.4934 2.99951 22 2.99951Z"></path></svg>'),
  zu = J('<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 56.7846C35.479 63.412 50.1572 59.479 56.7846 47.9999C63.412 36.5209 59.479 21.8427 48 15.2153C36.521 8.58791 21.8428 12.5209 15.2154 23.9999" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>'),
  lt = e => {
    const t = ie(),
      n = () => e.size || "xs",
      r = () => e.fill || t.colors.icon.tertiary,
      o = Fa`
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
    `,
      i = it`
        animation: ${o} 1s linear infinite;
    `;
    return P((() => {
      const s = P(() => n() === "xs");
      return () => s() ? (() => {
        const l = Gu.cloneNode(!0),
          c = l.firstChild;
        return Y(u => {
          const d = Un(i, e.class),
            f = r();
          return d !== u._v$ && O(l, "class", u._v$ = d), f !== u._v$2 && O(c, "fill", u._v$2 = f), u
        }, {
          _v$: void 0,
          _v$2: void 0
        }), l
      })() : (() => {
        const l = P(() => n() === "s");
        return () => l() ? (() => {
          const c = Qu.cloneNode(!0),
            u = c.firstChild;
          return Y(d => {
            const f = Un(i, e.class),
              v = r();
            return f !== d._v$3 && O(c, "class", d._v$3 = f), v !== d._v$4 && O(u, "fill", d._v$4 = v), d
          }, {
            _v$3: void 0,
            _v$4: void 0
          }), c
        })() : (() => {
          const c = zu.cloneNode(!0),
            u = c.firstChild;
          return Y(d => {
            const f = Un(i, e.class),
              v = r();
            return f !== d._v$5 && O(c, "class", d._v$5 = f), v !== d._v$6 && O(u, "stroke", d._v$6 = v), d
          }, {
            _v$5: void 0,
            _v$6: void 0
          }), c
        })()
      })()
    })())
  },
  Yu = J('<svg width="158" height="28" viewBox="0 0 158 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M28 14.001C28 21.733 21.732 28.001 14 28.001C6.26801 28.001 0 21.733 0 14.001C0 6.26899 6.26801 0.000976562 14 0.000976562C21.732 0.000976562 28 6.26899 28 14.001ZM9.21931 8.00098H18.7801H18.7813C20.538 8.00098 21.6522 9.89966 20.7691 11.4302L14.8672 21.6576C14.4822 22.3254 13.5172 22.3254 13.1322 21.6576L7.23158 11.4302C6.34721 9.89726 7.4614 8.00098 9.21931 8.00098ZM13.1262 18.5882V9.74806H9.21811C8.78976 9.74806 8.53708 10.2029 8.74163 10.5578L11.8423 16.1035L13.1262 18.5882ZM16.1559 16.1047L19.2554 10.5566C19.4599 10.2017 19.2073 9.74685 18.7789 9.74685H14.8709V18.5906L16.1559 16.1047Z" fill="#0098EA"></path><path d="M18.7802 8.00098H9.21936C7.46145 8.00098 6.34727 9.89726 7.23164 11.4302L13.1322 21.6576C13.5173 22.3254 14.4823 22.3254 14.8673 21.6576L20.7691 11.4302C21.6523 9.89966 20.5381 8.00098 18.7814 8.00098H18.7802ZM13.1274 18.5906L11.8424 16.1035L8.74168 10.5578C8.53714 10.2029 8.78981 9.74806 9.21816 9.74806H13.1262V18.5918L13.1274 18.5906ZM19.2555 10.5566L16.156 16.1047L14.8709 18.5906V9.74685H18.779C19.2073 9.74685 19.46 10.2017 19.2555 10.5566Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M51.7483 22.1967C55.7182 22.1967 58.9609 18.954 58.9609 14.9841C58.9609 11.0142 55.7182 7.77148 51.7483 7.77148C47.7588 7.77148 44.5357 11.0142 44.5357 14.9841C44.5357 18.954 47.7588 22.1967 51.7483 22.1967ZM51.7483 19.1702C49.4686 19.1702 47.6802 17.2442 47.6802 14.9841C47.6802 12.724 49.4686 10.798 51.7483 10.798C54.0084 10.798 55.7968 12.724 55.7968 14.9841C55.7968 17.2442 54.0084 19.1702 51.7483 19.1702ZM37.0698 21.9609H40.2142V10.9946H44.2843V8.00732H33V10.9946H37.0698V21.9609ZM69.9379 8.00732H73.0823V21.9609H70.3899L63.59 13.3333V21.9609H60.4652V8.00732H63.1576L69.9379 16.6153V8.00732ZM79.2259 14.9887C79.2259 10.9202 82.351 7.77539 86.4982 7.77539C89.8592 7.77539 92.5519 9.95709 93.2202 12.6891H90.7437C90.154 11.0971 88.4637 9.9964 86.4982 9.9964C83.5893 9.9964 81.5452 12.1781 81.5452 14.9887C81.5452 17.7994 83.5893 19.9811 86.4982 19.9811C88.4637 19.9811 90.154 18.8804 90.7437 17.2884H93.2202C92.5519 20.0204 89.8592 22.2021 86.4982 22.2021C82.351 22.2021 79.2259 19.0573 79.2259 14.9887ZM104.584 17.0525C104.584 19.9025 102.343 22.1628 99.4342 22.1628C96.5253 22.1628 94.2846 19.9025 94.2846 17.0525C94.2846 14.2025 96.5253 11.9422 99.4342 11.9422C102.343 11.9422 104.584 14.2025 104.584 17.0525ZM96.4663 17.0525C96.4663 18.8018 97.6849 20.158 99.4342 20.158C101.164 20.158 102.382 18.8018 102.382 17.0525C102.382 15.3032 101.164 13.947 99.4342 13.947C97.6849 13.947 96.4663 15.3032 96.4663 17.0525ZM108.626 12.1388H106.463V21.9662H108.626V17.1311C108.626 15.0281 109.726 13.9077 111.161 13.9077C112.419 13.9077 113.205 14.8512 113.205 16.4039V21.9662H115.367V16.0501C115.367 13.5539 113.893 11.9422 111.613 11.9422C110.335 11.9422 109.215 12.4926 108.626 13.4753V12.1388ZM117.839 12.1388H120.001V13.4753C120.59 12.4926 121.711 11.9422 122.988 11.9422C125.268 11.9422 126.742 13.5539 126.742 16.0501V21.9662H124.58V16.4039C124.58 14.8512 123.794 13.9077 122.536 13.9077C121.101 13.9077 120.001 15.0281 120.001 17.1311V21.9662H117.839V12.1388ZM133.558 22.1628C136.054 22.1628 137.823 20.728 138.373 18.8804H136.113C135.661 19.8238 134.717 20.2563 133.636 20.2563C131.887 20.2563 130.747 19.077 130.668 17.5832H138.491C138.688 14.2419 136.585 11.9422 133.577 11.9422C130.551 11.9422 128.526 14.1436 128.526 17.0525C128.526 20.0007 130.629 22.1628 133.558 22.1628ZM130.747 16.0501C131.042 14.5367 132.162 13.7505 133.518 13.7505C134.717 13.7505 135.838 14.4581 136.172 16.0501H130.747ZM149.851 18.3694C149.32 20.5511 147.453 22.1628 144.859 22.1628C141.871 22.1628 139.709 19.8828 139.709 17.0525C139.709 14.2222 141.871 11.9422 144.859 11.9422C147.453 11.9422 149.32 13.5539 149.851 15.7356H147.571C147.178 14.6743 146.215 13.9077 144.859 13.9077C143.109 13.9077 141.91 15.2246 141.91 17.0525C141.91 18.8804 143.109 20.1973 144.859 20.1973C146.215 20.1973 147.178 19.4307 147.571 18.3694H149.851ZM155.75 22.0645C156.418 22.0645 156.929 21.9859 157.362 21.8483V19.9221C157.047 20.0401 156.615 20.1187 156.202 20.1187C155.082 20.1187 154.551 19.6666 154.551 18.448V14.065H157.362V12.1388H154.551V9.40675H152.389V12.1388H150.345V14.065H152.389V18.8018C152.389 21.0228 153.863 22.0645 155.75 22.0645Z"></path></svg>'),
  Ju = () => {
    const e = ie(),
      t = () => e.theme === de.DARK ? e.colors.constant.white : e.colors.constant.black;
    return (() => {
      const n = Yu.cloneNode(!0),
        r = n.firstChild,
        o = r.nextSibling,
        i = o.nextSibling;
      return Y(() => O(i, "fill", t())), n
    })()
  },
  Xu = J('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.56608 4.42584C5.82527 3.32158 6.8176 2.5 8.00001 2.5C9.38072 2.5 10.5 3.61929 10.5 5C10.5 5.63026 10.3391 6.0386 10.1264 6.34455C9.90018 6.66993 9.58561 6.92478 9.18864 7.20877C9.12579 7.25372 9.05873 7.30025 8.9887 7.34883C8.27392 7.84472 7.25001 8.55507 7.25001 10V10.25C7.25001 10.6642 7.5858 11 8.00001 11C8.41422 11 8.75001 10.6642 8.75001 10.25V10C8.75001 9.36502 9.10777 9.1096 9.94554 8.51149L10.0614 8.42873C10.4769 8.13147 10.9748 7.75194 11.358 7.20076C11.7547 6.63015 12 5.91973 12 5C12 2.79086 10.2091 1 8.00001 1C6.10564 1 4.5205 2.31615 4.10577 4.08308C4.01112 4.48634 4.26129 4.88997 4.66454 4.98462C5.0678 5.07927 5.47143 4.8291 5.56608 4.42584ZM8.00001 15C8.60752 15 9.10001 14.5075 9.10001 13.9C9.10001 13.2925 8.60752 12.8 8.00001 12.8C7.39249 12.8 6.90001 13.2925 6.90001 13.9C6.90001 14.5075 7.39249 15 8.00001 15Z"></path></svg>'),
  e0 = e => {
    const t = ie(),
      n = () => e.fill || t.colors.icon.secondary;
    return (() => {
      const r = Xu.cloneNode(!0),
        o = r.firstChild;
      return Y(() => O(o, "fill", n())), r
    })()
  },
  t0 = J('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.98156 8.75C9.84854 11.4328 9.01206 13.5 8 13.5C6.98794 13.5 6.15146 11.4328 6.01844 8.75H9.98156ZM11.4832 8.75C11.4217 10.1155 11.1929 11.3869 10.8239 12.4017C10.7734 12.5405 10.7188 12.6789 10.6595 12.8154C12.1454 11.993 13.2103 10.5029 13.4493 8.75H11.4832ZM13.4493 7.25H11.4832C11.4217 5.88453 11.1929 4.61314 10.8239 3.5983C10.7734 3.4595 10.7188 3.32111 10.6595 3.18459C12.1454 4.00697 13.2103 5.49709 13.4493 7.25ZM9.98156 7.25H6.01844C6.15144 4.56764 6.98769 2.50062 7.99955 2.5H8C9.01206 2.5 9.84854 4.56724 9.98156 7.25ZM4.51678 7.25C4.57826 5.88453 4.80706 4.61314 5.1761 3.5983C5.22657 3.4595 5.28124 3.32111 5.3405 3.18459C3.85463 4.00697 2.78972 5.49709 2.55071 7.25H4.51678ZM2.55071 8.75C2.78972 10.5029 3.85463 11.993 5.3405 12.8154C5.28124 12.6789 5.22657 12.5405 5.1761 12.4017C4.80706 11.3869 4.57826 10.1155 4.51678 8.75H2.55071ZM15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z"></path></svg>'),
  n0 = e => {
    const t = ie(),
      n = () => e.fill || t.colors.icon.primary;
    return (() => {
      const r = t0.cloneNode(!0),
        o = r.firstChild;
      return Y(() => O(o, "fill", n())), r
    })()
  },
  r0 = J('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 4.8C2.5 3.11984 2.5 2.27976 2.82698 1.63803C3.1146 1.07354 3.57354 0.614601 4.13803 0.32698C4.77976 0 5.61984 0 7.3 0H8.7C10.3802 0 11.2202 0 11.862 0.32698C12.4265 0.614601 12.8854 1.07354 13.173 1.63803C13.5 2.27976 13.5 3.11984 13.5 4.8V11.2C13.5 12.8802 13.5 13.7202 13.173 14.362C12.8854 14.9265 12.4265 15.3854 11.862 15.673C11.2202 16 10.3802 16 8.7 16H7.3C5.61984 16 4.77976 16 4.13803 15.673C3.57354 15.3854 3.1146 14.9265 2.82698 14.362C2.5 13.7202 2.5 12.8802 2.5 11.2V4.8ZM4 3.9C4 3.05992 4 2.63988 4.16349 2.31901C4.3073 2.03677 4.53677 1.8073 4.81901 1.66349C5.13988 1.5 5.55992 1.5 6.4 1.5H9.6C10.4401 1.5 10.8601 1.5 11.181 1.66349C11.4632 1.8073 11.6927 2.03677 11.8365 2.31901C12 2.63988 12 3.05992 12 3.9V12.1C12 12.9401 12 13.3601 11.8365 13.681C11.6927 13.9632 11.4632 14.1927 11.181 14.3365C10.8601 14.5 10.4401 14.5 9.6 14.5H6.4C5.55992 14.5 5.13988 14.5 4.81901 14.3365C4.53677 14.1927 4.3073 13.9632 4.16349 13.681C4 13.3601 4 12.9401 4 12.1V3.9ZM7 2.5C6.58579 2.5 6.25 2.83579 6.25 3.25C6.25 3.66421 6.58579 4 7 4H9C9.41421 4 9.75 3.66421 9.75 3.25C9.75 2.83579 9.41421 2.5 9 2.5H7Z"></path></svg>'),
  o0 = e => {
    const t = ie(),
      n = () => e.fill || t.colors.icon.primary;
    return (() => {
      const r = r0.cloneNode(!0),
        o = r.firstChild;
      return Y(() => O(o, "fill", n())), r
    })()
  },
  i0 = J('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 6.8C1.5 5.11984 1.5 4.27976 1.82698 3.63803C2.1146 3.07354 2.57354 2.6146 3.13803 2.32698C3.77976 2 4.61984 2 6.3 2H9.7C11.3802 2 12.2202 2 12.862 2.32698C13.4265 2.6146 13.8854 3.07354 14.173 3.63803C14.5 4.27976 14.5 5.11984 14.5 6.8V11.5H15.25C15.6642 11.5 16 11.8358 16 12.25C16 12.6642 15.6642 13 15.25 13H0.75C0.335786 13 0 12.6642 0 12.25C0 11.8358 0.335786 11.5 0.75 11.5H1.5V6.8ZM3 11.5H13V5.9C13 5.05992 13 4.63988 12.8365 4.31901C12.6927 4.03677 12.4632 3.8073 12.181 3.66349C11.8601 3.5 11.4401 3.5 10.6 3.5H5.4C4.55992 3.5 4.13988 3.5 3.81901 3.66349C3.53677 3.8073 3.3073 4.03677 3.16349 4.31901C3 4.63988 3 5.05992 3 5.9V11.5Z"></path></svg>'),
  s0 = e => {
    const t = ie(),
      n = () => e.fill || t.colors.icon.primary;
    return (() => {
      const r = i0.cloneNode(!0),
        o = r.firstChild;
      return Y(() => O(o, "fill", n())), r
    })()
  },
  l0 = J('<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none"><g clip-path="url(#clip0_3676_1603)"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 1.25049C15.5 0.836275 15.1642 0.500488 14.75 0.500488C14.3358 0.500488 14 0.836275 14 1.25049V3.67012C12.7187 2.04487 10.7318 1.00049 8.5 1.00049C4.63401 1.00049 1.5 4.1345 1.5 8.00049C1.5 11.8665 4.63401 15.0005 8.5 15.0005C11.6844 15.0005 14.3703 12.8748 15.2199 9.96661C15.3361 9.56902 15.1079 9.15254 14.7103 9.03638C14.3127 8.92023 13.8962 9.14838 13.7801 9.54597C13.1123 11.8319 11 13.5005 8.5 13.5005C5.46243 13.5005 3 11.0381 3 8.00049C3 4.96292 5.46243 2.50049 8.5 2.50049C10.321 2.50049 11.9363 3.3855 12.9377 4.75049H10.5C10.0858 4.75049 9.75 5.08627 9.75 5.50049C9.75 5.9147 10.0858 6.25049 10.5 6.25049H14.75C15.1642 6.25049 15.5 5.9147 15.5 5.50049V1.25049Z"></path></g><defs><clipPath id="clip0_3676_1603"><rect width="16" height="16" fill="white" transform="translate(0.5 0.000488281)"></rect></clipPath></defs></svg>'),
  sn = e => {
    const t = ie(),
      n = () => e.fill || t.colors.accent;
    return (() => {
      const r = l0.cloneNode(!0),
        o = r.firstChild,
        i = o.firstChild;
      return Y(() => O(i, "fill", n())), r
    })()
  },
  a0 = J('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 4.06119V6.75053C13 7.16474 13.3358 7.50053 13.75 7.50053C14.1642 7.50053 14.5 7.16474 14.5 6.75053V2.75053L14.5 2.72807C14.5001 2.63191 14.5003 2.49627 14.4842 2.37627C14.4638 2.22503 14.4063 1.99261 14.2071 1.79342C14.0079 1.59423 13.7755 1.5367 13.6243 1.51637C13.5043 1.50023 13.3686 1.50039 13.2725 1.50051L13.25 1.50053H9.25C8.83579 1.50053 8.5 1.83631 8.5 2.25053C8.5 2.66474 8.83579 3.00053 9.25 3.00053H11.9393L7.21967 7.7202C6.92678 8.01309 6.92678 8.48796 7.21967 8.78086C7.51256 9.07375 7.98744 9.07375 8.28033 8.78086L13 4.06119ZM5.85 1.50053H5.81903H5.81899C5.21528 1.50052 4.71702 1.50051 4.31113 1.53367C3.88956 1.56812 3.50203 1.64204 3.13803 1.82751C2.57354 2.11513 2.1146 2.57407 1.82698 3.13856C1.64151 3.50256 1.56759 3.89009 1.53315 4.31166C1.49998 4.71755 1.49999 5.21581 1.5 5.81953V5.81955V5.85053V10.1505V10.1815V10.1815C1.49999 10.7852 1.49998 11.2835 1.53315 11.6894C1.56759 12.111 1.64151 12.4985 1.82698 12.8625C2.1146 13.427 2.57354 13.8859 3.13803 14.1735C3.50203 14.359 3.88956 14.4329 4.31113 14.4674C4.71702 14.5005 5.21527 14.5005 5.81897 14.5005H5.81901H5.85H10.15H10.181H10.181C10.7847 14.5005 11.283 14.5005 11.6889 14.4674C12.1104 14.4329 12.498 14.359 12.862 14.1735C13.4265 13.8859 13.8854 13.427 14.173 12.8625C14.3585 12.4985 14.4324 12.111 14.4669 11.6894C14.5 11.2835 14.5 10.7853 14.5 10.1816V10.1815V10.1505V9.75053C14.5 9.33631 14.1642 9.00053 13.75 9.00053C13.3358 9.00053 13 9.33631 13 9.75053V10.1505C13 10.793 12.9994 11.2297 12.9718 11.5672C12.945 11.8961 12.8963 12.0642 12.8365 12.1815C12.6927 12.4638 12.4632 12.6932 12.181 12.837C12.0637 12.8968 11.8955 12.9455 11.5667 12.9724C11.2292 12.9999 10.7924 13.0005 10.15 13.0005H5.85C5.20757 13.0005 4.77085 12.9999 4.43328 12.9724C4.10447 12.9455 3.93632 12.8968 3.81902 12.837C3.53677 12.6932 3.3073 12.4638 3.16349 12.1815C3.10372 12.0642 3.05503 11.8961 3.02816 11.5672C3.00058 11.2297 3 10.793 3 10.1505V5.85053C3 5.20809 3.00058 4.77137 3.02816 4.43381C3.05503 4.10499 3.10372 3.93684 3.16349 3.81954C3.3073 3.5373 3.53677 3.30783 3.81902 3.16402C3.93632 3.10425 4.10447 3.05556 4.43328 3.02869C4.77085 3.00111 5.20757 3.00053 5.85 3.00053H6.25C6.66422 3.00053 7 2.66474 7 2.25053C7 1.83631 6.66422 1.50053 6.25 1.50053H5.85Z"></path></svg>'),
  di = e => {
    const t = ie(),
      n = () => e.fill || t.colors.accent;
    return (() => {
      const r = a0.cloneNode(!0),
        o = r.firstChild;
      return Y(() => O(o, "fill", n())), r
    })()
  },
  c0 = J('<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none"><g clip-path="url(#clip0_3676_1274)"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.82698 2.63901C1.5 3.28074 1.5 4.12082 1.5 5.80098V8.80098V9.00098V10.201C1.5 11.8811 1.5 12.7212 1.82698 13.3629C2.1146 13.9274 2.57354 14.3864 3.13803 14.674C3.77976 15.001 4.61984 15.001 6.3 15.001H11.7C13.3802 15.001 14.2202 15.001 14.862 14.674C15.4265 14.3864 15.8854 13.9274 16.173 13.3629C16.5 12.7212 16.5 11.8811 16.5 10.201V8.80098C16.5 7.12082 16.5 6.28074 16.173 5.63901C15.8854 5.07452 15.4265 4.61558 14.862 4.32796C14.743 4.26733 14.6172 4.21795 14.4805 4.17772C14.4501 3.49449 14.3722 3.02994 14.173 2.63901C13.8854 2.07452 13.4265 1.61558 12.862 1.32796C12.2202 1.00098 11.3802 1.00098 9.7 1.00098H6.3C4.61984 1.00098 3.77976 1.00098 3.13803 1.32796C2.57354 1.61558 2.1146 2.07452 1.82698 2.63901ZM12.9861 4.00942C12.9684 3.7108 12.9281 3.49982 12.8365 3.31999C12.6927 3.03775 12.4632 2.80828 12.181 2.66447C11.8601 2.50098 11.4401 2.50098 10.6 2.50098H5.4C4.55992 2.50098 4.13988 2.50098 3.81901 2.66447C3.53677 2.80828 3.3073 3.03775 3.16349 3.31999C3.03615 3.56991 3.00799 3.88 3.00177 4.40188C3.04646 4.37612 3.09189 4.35146 3.13803 4.32796C3.77976 4.00098 4.61984 4.00098 6.3 4.00098H11.7C12.1966 4.00098 12.6197 4.00098 12.9861 4.00942ZM3 7.90098V8.10098C3 8.47468 3 8.76527 3.01439 9.00098H3V11.101C3 11.9411 3 12.3611 3.16349 12.682C3.3073 12.9642 3.53677 13.1937 3.81901 13.3375C4.13988 13.501 4.55992 13.501 5.4 13.501H12.6C13.4401 13.501 13.8601 13.501 14.181 13.3375C14.4632 13.1937 14.6927 12.9642 14.8365 12.682C15 12.3611 15 11.9411 15 11.101V7.90098C15 7.0609 15 6.64086 14.8365 6.31999C14.6927 6.03775 14.4632 5.80828 14.181 5.66447C13.8601 5.50098 13.4401 5.50098 12.6 5.50098H5.4C4.55992 5.50098 4.13988 5.50098 3.81901 5.66447C3.53677 5.80828 3.3073 6.03775 3.16349 6.31999C3 6.64086 3 7.0609 3 7.90098ZM10.5 9.75098C10.5 9.33676 10.8358 9.00098 11.25 9.00098H12.75C13.1642 9.00098 13.5 9.33676 13.5 9.75098C13.5 10.1652 13.1642 10.501 12.75 10.501H11.25C10.8358 10.501 10.5 10.1652 10.5 9.75098Z"></path></g><defs><clipPath id="clip0_3676_1274"><rect width="16" height="16" fill="white" transform="translate(0.5 0.000976562)"></rect></clipPath></defs></svg>'),
  u0 = e => {
    const t = ie(),
      n = () => e.fill || t.colors.accent;
    return (() => {
      const r = c0.cloneNode(!0),
        o = r.firstChild,
        i = o.firstChild;
      return Y(() => O(i, "fill", n())), r
    })()
  },
  d0 = J('<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M39.6319 16.8719C38.3212 16.2041 36.7002 16.0478 34 16.0112V11C34 5.47715 29.5228 1 24 1C18.4772 1 14 5.47715 14 11V16.0112C11.2998 16.0478 9.6788 16.2041 8.36808 16.8719C6.86278 17.6389 5.63893 18.8628 4.87195 20.3681C4 22.0794 4 24.3196 4 28.8V32.2C4 36.6804 4 38.9206 4.87195 40.6319C5.63893 42.1372 6.86278 43.3611 8.36808 44.1281C10.0794 45 12.3196 45 16.8 45H31.2C35.6804 45 37.9206 45 39.6319 44.1281C41.1372 43.3611 42.3611 42.1372 43.1281 40.6319C44 38.9206 44 36.6804 44 32.2V28.8C44 24.3196 44 22.0794 43.1281 20.3681C42.3611 18.8628 41.1372 17.6389 39.6319 16.8719ZM31 11V16H17V11C17 7.13401 20.134 4 24 4C27.866 4 31 7.13401 31 11ZM7.54497 21.73C7 22.7996 7 24.1997 7 27V34C7 36.8003 7 38.2004 7.54497 39.27C8.02433 40.2108 8.78924 40.9757 9.73005 41.455C10.7996 42 12.1997 42 15 42H33C35.8003 42 37.2004 42 38.27 41.455C39.2108 40.9757 39.9757 40.2108 40.455 39.27C41 38.2004 41 36.8003 41 34V27C41 24.1997 41 22.7996 40.455 21.73C39.9757 20.7892 39.2108 20.0243 38.27 19.545C37.2004 19 35.8003 19 33 19H15C12.1997 19 10.7996 19 9.73005 19.545C8.78924 20.0243 8.02433 20.7892 7.54497 21.73ZM24 24C23.1716 24 22.5 24.6716 22.5 25.5V29.5C22.5 30.3284 23.1716 31 24 31C24.8284 31 25.5 30.3284 25.5 29.5V25.5C25.5 24.6716 24.8284 24 24 24Z"></path></svg>'),
  f0 = e => {
    const t = ie(),
      n = () => e.fill || t.colors.icon.secondary;
    return (() => {
      const r = d0.cloneNode(!0),
        o = r.firstChild;
      return Y(i => {
        const s = e.class,
          l = n();
        return s !== i._v$ && O(r, "class", i._v$ = s), l !== i._v$2 && O(o, "fill", i._v$2 = l), i
      }, {
        _v$: void 0,
        _v$2: void 0
      }), r
    })()
  },
  h0 = J('<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M37.485 37.3849C40.894 33.9506 43 29.2212 43 24C43 13.5066 34.4934 5 24 5C13.5066 5 5 13.5066 5 24C5 29.2213 7.1061 33.9507 10.5151 37.385C13.3583 32.9438 18.3354 30 24.0001 30C29.6647 30 34.6418 32.9437 37.485 37.3849ZM35.1809 39.3635C32.9143 35.5532 28.7554 33 24.0001 33C19.2448 33 15.0858 35.5533 12.8193 39.3636C15.9564 41.6506 19.8206 43 24 43C28.1795 43 32.0437 41.6505 35.1809 39.3635ZM24 46C36.1503 46 46 36.1503 46 24C46 11.8497 36.1503 2 24 2C11.8497 2 2 11.8497 2 24C2 36.1503 11.8497 46 24 46ZM24 24C26.7614 24 29 21.7614 29 19C29 16.2386 26.7614 14 24 14C21.2386 14 19 16.2386 19 19C19 21.7614 21.2386 24 24 24ZM24 27C28.4183 27 32 23.4183 32 19C32 14.5817 28.4183 11 24 11C19.5817 11 16 14.5817 16 19C16 23.4183 19.5817 27 24 27Z"></path></svg>'),
  g0 = e => {
    const t = ie(),
      n = () => e.fill || t.colors.icon.secondary;
    return (() => {
      const r = h0.cloneNode(!0),
        o = r.firstChild;
      return Y(i => {
        const s = e.class,
          l = n();
        return s !== i._v$ && O(r, "class", i._v$ = s), l !== i._v$2 && O(o, "fill", i._v$2 = l), i
      }, {
        _v$: void 0,
        _v$2: void 0
      }), r
    })()
  },
  m0 = J('<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M34.5607 4.43934C33.9749 3.85355 33.0251 3.85355 32.4393 4.43934C31.8536 5.02513 31.8536 5.97487 32.4393 6.56066L37.8787 12H10.5C9.67157 12 9 12.6716 9 13.5C9 14.3284 9.67157 15 10.5 15H37.8787L32.4393 20.4393C31.8536 21.0251 31.8536 21.9749 32.4393 22.5607C33.0251 23.1464 33.9749 23.1464 34.5607 22.5607L42.5607 14.5607C43.1464 13.9749 43.1464 13.0251 42.5607 12.4393L34.5607 4.43934ZM13.4393 25.4393C14.0251 24.8536 14.9749 24.8536 15.5607 25.4393C16.1464 26.0251 16.1464 26.9749 15.5607 27.5607L10.1213 33H37.5C38.3284 33 39 33.6716 39 34.5C39 35.3284 38.3284 36 37.5 36H10.1213L15.5607 41.4393C16.1464 42.0251 16.1464 42.9749 15.5607 43.5607C14.9749 44.1464 14.0251 44.1464 13.4393 43.5607L5.43934 35.5607C4.85355 34.9749 4.85355 34.0251 5.43934 33.4393L13.4393 25.4393Z"></path></svg>'),
  v0 = e => {
    const t = ie(),
      n = () => e.fill || t.colors.icon.secondary;
    return (() => {
      const r = m0.cloneNode(!0),
        o = r.firstChild;
      return Y(i => {
        const s = e.class,
          l = n();
        return s !== i._v$ && O(r, "class", i._v$ = s), l !== i._v$2 && O(o, "fill", i._v$2 = l), i
      }, {
        _v$: void 0,
        _v$2: void 0
      }), r
    })()
  },
  w0 = J('<svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.75 12.002C1.75 9.20169 1.75 7.80156 2.29497 6.732C2.77433 5.79119 3.53924 5.02629 4.48005 4.54692C5.54961 4.00195 6.94974 4.00195 9.75 4.00195H17.25C20.0503 4.00195 21.4504 4.00195 22.52 4.54692C23.4608 5.02629 24.2257 5.79119 24.705 6.732C24.8256 6.96861 24.9195 7.2214 24.9926 7.50195H21.5C19.6377 7.50195 18.7065 7.50195 17.9609 7.77334C16.711 8.22828 15.7263 9.21291 15.2714 10.4629C15 11.2085 15 12.1396 15 14.002C15 15.8643 15 16.7954 15.2714 17.541C15.7263 18.791 16.711 19.7756 17.9609 20.2306C18.7065 20.502 19.6377 20.502 21.5 20.502H24.9926C24.9195 20.7825 24.8256 21.0353 24.705 21.2719C24.2257 22.2127 23.4608 22.9776 22.52 23.457C21.4504 24.002 20.0503 24.002 17.25 24.002H9.75C6.94974 24.002 5.54961 24.002 4.48005 23.457C3.53924 22.9776 2.77433 22.2127 2.29497 21.2719C1.75 20.2023 1.75 18.8022 1.75 16.002V12.002ZM16.4999 13.802C16.4999 12.1218 16.4999 11.2817 16.8269 10.64C17.1145 10.0755 17.5735 9.61656 18.138 9.32894C18.7797 9.00196 19.6198 9.00196 21.2999 9.00196H23.1999C24.8801 9.00196 25.7202 9.00196 26.3619 9.32894C26.9264 9.61656 27.3853 10.0755 27.673 10.64C27.9999 11.2817 27.9999 12.1218 27.9999 13.802V14.202C27.9999 15.8821 27.9999 16.7222 27.673 17.3639C27.3853 17.9284 26.9264 18.3874 26.3619 18.675C25.7202 19.002 24.8801 19.002 23.1999 19.002H21.2999C19.6198 19.002 18.7797 19.002 18.138 18.675C17.5735 18.3874 17.1145 17.9284 16.8269 17.3639C16.4999 16.7222 16.4999 15.8821 16.4999 14.202V13.802ZM22.4999 14.002C22.4999 14.9685 21.7164 15.752 20.7499 15.752C19.7834 15.752 18.9999 14.9685 18.9999 14.002C18.9999 13.0355 19.7834 12.252 20.7499 12.252C21.7164 12.252 22.4999 13.0355 22.4999 14.002Z"></path></svg>'),
  p0 = e => {
    const t = ie(),
      n = () => e.fill || t.colors.constant.white;
    return (() => {
      const r = w0.cloneNode(!0),
        o = r.firstChild;
      return Y(i => {
        const s = e.class,
          l = n();
        return s !== i._v$ && O(r, "class", i._v$ = s), l !== i._v$2 && O(o, "fill", i._v$2 = l), i
      }, {
        _v$: void 0,
        _v$2: void 0
      }), r
    })()
  },
  y0 = J('<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M24.7803 7.21967C25.0732 7.51256 25.0732 7.98744 24.7803 8.28033L11.5303 21.5303C11.2374 21.8232 10.7626 21.8232 10.4697 21.5303L4.21967 15.2803C3.92678 14.9874 3.92678 14.5126 4.21967 14.2197C4.51256 13.9268 4.98744 13.9268 5.28033 14.2197L11 19.9393L23.7197 7.21967C24.0126 6.92678 24.4874 6.92678 24.7803 7.21967Z"></path></svg>'),
  C0 = e => {
    const t = ie(),
      n = () => e.fill || t.colors.icon.secondary;
    return (() => {
      const r = y0.cloneNode(!0),
        o = r.firstChild;
      return Y(i => {
        const s = e.class,
          l = n();
        return s !== i._v$ && O(r, "class", i._v$ = s), l !== i._v$2 && O(o, "fill", i._v$2 = l), i
      }, {
        _v$: void 0,
        _v$2: void 0
      }), r
    })()
  },
  b0 = J('<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.0001 10.0001C10.0016 8.02333 10.0267 6.98719 10.436 6.18404C10.8195 5.43139 11.4314 4.81947 12.184 4.43597C13.0397 4 14.1598 4 16.4 4H17.6C19.8402 4 20.9603 4 21.816 4.43597C22.5686 4.81947 23.1805 5.43139 23.564 6.18404C24 7.03969 24 8.15979 24 10.4V11.6C24 13.8402 24 14.9603 23.564 15.816C23.1805 16.5686 22.5686 17.1805 21.816 17.564C21.0128 17.9733 19.9767 17.9984 17.9999 17.9999C17.9984 19.9767 17.9733 21.0128 17.564 21.816C17.1805 22.5686 16.5686 23.1805 15.816 23.564C14.9603 24 13.8402 24 11.6 24H10.4C8.15979 24 7.03969 24 6.18404 23.564C5.43139 23.1805 4.81947 22.5686 4.43597 21.816C4 20.9603 4 19.8402 4 17.6V16.4C4 14.1598 4 13.0397 4.43597 12.184C4.81947 11.4314 5.43139 10.8195 6.18404 10.436C6.98719 10.0267 8.02333 10.0016 10.0001 10.0001ZM10 11.5H9.5C8.09987 11.5 7.3998 11.5 6.86502 11.7725C6.39462 12.0122 6.01217 12.3946 5.77248 12.865C5.5 13.3998 5.5 14.0999 5.5 15.5V18.5C5.5 19.9001 5.5 20.6002 5.77248 21.135C6.01217 21.6054 6.39462 21.9878 6.86502 22.2275C7.3998 22.5 8.09987 22.5 9.5 22.5H12.5C13.9001 22.5 14.6002 22.5 15.135 22.2275C15.6054 21.9878 15.9878 21.6054 16.2275 21.135C16.5 20.6002 16.5 19.9001 16.5 18.5V18H16.4C14.1598 18 13.0397 18 12.184 17.564C11.4314 17.1805 10.8195 16.5686 10.436 15.816C10 14.9603 10 13.8402 10 11.6V11.5ZM11.5 9.5C11.5 8.09987 11.5 7.3998 11.7725 6.86502C12.0122 6.39462 12.3946 6.01217 12.865 5.77248C13.3998 5.5 14.0999 5.5 15.5 5.5H18.5C19.9001 5.5 20.6002 5.5 21.135 5.77248C21.6054 6.01217 21.9878 6.39462 22.2275 6.86502C22.5 7.3998 22.5 8.09987 22.5 9.5V12.5C22.5 13.9001 22.5 14.6002 22.2275 15.135C21.9878 15.6054 21.6054 15.9878 21.135 16.2275C20.6002 16.5 19.9001 16.5 18.5 16.5H15.5C14.0999 16.5 13.3998 16.5 12.865 16.2275C12.3946 15.9878 12.0122 15.6054 11.7725 15.135C11.5 14.6002 11.5 13.9001 11.5 12.5V9.5Z"></path></svg>'),
  Us = e => {
    const t = ie(),
      n = () => e.fill || t.colors.icon.secondary;
    return (() => {
      const r = b0.cloneNode(!0),
        o = r.firstChild;
      return Y(i => {
        const s = n(),
          l = n();
        return s !== i._v$ && O(r, "fill", i._v$ = s), l !== i._v$2 && O(o, "fill", i._v$2 = l), i
      }, {
        _v$: void 0,
        _v$2: void 0
      }), r
    })()
  },
  x0 = J('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 4.12695C1 3.07754 1 2.55284 1.19202 2.14684C1.38986 1.72856 1.7266 1.39181 2.14489 1.19397C2.55088 1.00195 3.07559 1.00195 4.125 1.00195C5.17441 1.00195 5.69912 1.00195 6.10511 1.19397C6.5234 1.39181 6.86014 1.72856 7.05798 2.14684C7.25 2.55284 7.25 3.07754 7.25 4.12695C7.25 5.17636 7.25 5.70107 7.05798 6.10706C6.86014 6.52535 6.5234 6.8621 6.10511 7.05993C5.69912 7.25195 5.17441 7.25195 4.125 7.25195C3.07559 7.25195 2.55088 7.25195 2.14489 7.05993C1.7266 6.8621 1.38986 6.52535 1.19202 6.10706C1 5.70107 1 5.17636 1 4.12695ZM2.5 3.30195C2.5 3.02193 2.5 2.88191 2.5545 2.77496C2.60243 2.68088 2.67892 2.60439 2.773 2.55645C2.87996 2.50195 3.01997 2.50195 3.3 2.50195H4.95C5.23003 2.50195 5.37004 2.50195 5.477 2.55645C5.57108 2.60439 5.64757 2.68088 5.6955 2.77496C5.75 2.88191 5.75 3.02193 5.75 3.30195V4.95195C5.75 5.23198 5.75 5.37199 5.6955 5.47895C5.64757 5.57303 5.57108 5.64952 5.477 5.69746C5.37004 5.75195 5.23003 5.75195 4.95 5.75195H3.3C3.01997 5.75195 2.87996 5.75195 2.773 5.69746C2.67892 5.64952 2.60243 5.57303 2.5545 5.47895C2.5 5.37199 2.5 5.23198 2.5 4.95195V3.30195ZM1 11.877C1 10.8275 1 10.3028 1.19202 9.89684C1.38986 9.47856 1.7266 9.14181 2.14489 8.94397C2.55088 8.75195 3.07559 8.75195 4.125 8.75195C5.17441 8.75195 5.69912 8.75195 6.10511 8.94397C6.5234 9.14181 6.86014 9.47856 7.05798 9.89684C7.25 10.3028 7.25 10.8275 7.25 11.877C7.25 12.9264 7.25 13.4511 7.05798 13.8571C6.86014 14.2753 6.5234 14.6121 6.10511 14.8099C5.69912 15.002 5.17441 15.002 4.125 15.002C3.07559 15.002 2.55088 15.002 2.14489 14.8099C1.7266 14.6121 1.38986 14.2753 1.19202 13.8571C1 13.4511 1 12.9264 1 11.877ZM2.5 11.052C2.5 10.7719 2.5 10.6319 2.5545 10.525C2.60243 10.4309 2.67892 10.3544 2.773 10.3064C2.87996 10.252 3.01997 10.252 3.3 10.252H4.95C5.23003 10.252 5.37004 10.252 5.477 10.3064C5.57108 10.3544 5.64757 10.4309 5.6955 10.525C5.75 10.6319 5.75 10.7719 5.75 11.052V12.702C5.75 12.982 5.75 13.122 5.6955 13.2289C5.64757 13.323 5.57108 13.3995 5.477 13.4475C5.37004 13.502 5.23003 13.502 4.95 13.502H3.3C3.01997 13.502 2.87996 13.502 2.773 13.4475C2.67892 13.3995 2.60243 13.323 2.5545 13.2289C2.5 13.122 2.5 12.982 2.5 12.702V11.052ZM8.94202 2.14684C8.75 2.55284 8.75 3.07754 8.75 4.12695C8.75 5.17636 8.75 5.70107 8.94202 6.10706C9.13986 6.52535 9.4766 6.8621 9.89489 7.05993C10.3009 7.25195 10.8256 7.25195 11.875 7.25195C12.9244 7.25195 13.4491 7.25195 13.8551 7.05993C14.2734 6.8621 14.6101 6.52535 14.808 6.10706C15 5.70107 15 5.17636 15 4.12695C15 3.07754 15 2.55284 14.808 2.14684C14.6101 1.72856 14.2734 1.39181 13.8551 1.19397C13.4491 1.00195 12.9244 1.00195 11.875 1.00195C10.8256 1.00195 10.3009 1.00195 9.89489 1.19397C9.4766 1.39181 9.13986 1.72856 8.94202 2.14684ZM10.3045 2.77496C10.25 2.88191 10.25 3.02193 10.25 3.30195V4.95195C10.25 5.23198 10.25 5.37199 10.3045 5.47895C10.3524 5.57303 10.4289 5.64952 10.523 5.69746C10.63 5.75195 10.77 5.75195 11.05 5.75195H12.7C12.98 5.75195 13.12 5.75195 13.227 5.69746C13.3211 5.64952 13.3976 5.57303 13.4455 5.47895C13.5 5.37199 13.5 5.23198 13.5 4.95195V3.30195C13.5 3.02193 13.5 2.88191 13.4455 2.77496C13.3976 2.68088 13.3211 2.60439 13.227 2.55645C13.12 2.50195 12.98 2.50195 12.7 2.50195H11.05C10.77 2.50195 10.63 2.50195 10.523 2.55645C10.4289 2.60439 10.3524 2.68088 10.3045 2.77496ZM8.80727 9.13518C8.75 9.26242 8.75 9.4256 8.75 9.75195C8.75 10.0783 8.75 10.2415 8.80727 10.3687C8.87245 10.5136 8.9884 10.6295 9.13323 10.6947C9.26047 10.752 9.42365 10.752 9.75 10.752C10.0764 10.752 10.2395 10.752 10.3668 10.6947C10.5116 10.6295 10.6276 10.5136 10.6927 10.3687C10.75 10.2415 10.75 10.0783 10.75 9.75195C10.75 9.4256 10.75 9.26242 10.6927 9.13518C10.6276 8.99035 10.5116 8.8744 10.3668 8.80922C10.2395 8.75195 10.0764 8.75195 9.75 8.75195C9.42365 8.75195 9.26047 8.75195 9.13323 8.80922C8.9884 8.8744 8.87245 8.99035 8.80727 9.13518ZM10.87 11.8771C10.87 11.546 10.87 11.3805 10.9289 11.2517C10.9938 11.1098 11.1077 10.9959 11.2497 10.931C11.3784 10.8721 11.5439 10.8721 11.875 10.8721C12.2061 10.8721 12.3716 10.8721 12.5003 10.931C12.6423 10.9959 12.7562 11.1098 12.8211 11.2517C12.88 11.3805 12.88 11.546 12.88 11.8771C12.88 12.2081 12.88 12.3737 12.8211 12.5024C12.7562 12.6444 12.6423 12.7583 12.5003 12.8232C12.3716 12.8821 12.2061 12.8821 11.875 12.8821C11.5439 12.8821 11.3784 12.8821 11.2497 12.8232C11.1077 12.7583 10.9938 12.6444 10.9289 12.5024C10.87 12.3737 10.87 12.2081 10.87 11.8771ZM8.80727 13.3852C8.75 13.5124 8.75 13.6756 8.75 14.002C8.75 14.3283 8.75 14.4915 8.80727 14.6187C8.87245 14.7636 8.9884 14.8795 9.13323 14.9447C9.26047 15.002 9.42365 15.002 9.75 15.002C10.0764 15.002 10.2395 15.002 10.3668 14.9447C10.5116 14.8795 10.6276 14.7636 10.6927 14.6187C10.75 14.4915 10.75 14.3283 10.75 14.002C10.75 13.6756 10.75 13.5124 10.6927 13.3852C10.6276 13.2404 10.5116 13.1244 10.3668 13.0592C10.2395 13.002 10.0764 13.002 9.75 13.002C9.42365 13.002 9.26047 13.002 9.13323 13.0592C8.9884 13.1244 8.87245 13.2404 8.80727 13.3852ZM13 9.75195C13 9.4256 13 9.26242 13.0573 9.13518C13.1224 8.99035 13.2384 8.8744 13.3832 8.80922C13.5105 8.75195 13.6736 8.75195 14 8.75195C14.3264 8.75195 14.4895 8.75195 14.6168 8.80922C14.7616 8.8744 14.8776 8.99035 14.9427 9.13518C15 9.26242 15 9.4256 15 9.75195C15 10.0783 15 10.2415 14.9427 10.3687C14.8776 10.5136 14.7616 10.6295 14.6168 10.6947C14.4895 10.752 14.3264 10.752 14 10.752C13.6736 10.752 13.5105 10.752 13.3832 10.6947C13.2384 10.6295 13.1224 10.5136 13.0573 10.3687C13 10.2415 13 10.0783 13 9.75195ZM13.0573 13.3852C13 13.5124 13 13.6756 13 14.002C13 14.3283 13 14.4915 13.0573 14.6187C13.1224 14.7636 13.2384 14.8795 13.3832 14.9447C13.5105 15.002 13.6736 15.002 14 15.002C14.3264 15.002 14.4895 15.002 14.6168 14.9447C14.7616 14.8795 14.8776 14.7636 14.9427 14.6187C15 14.4915 15 14.3283 15 14.002C15 13.6756 15 13.5124 14.9427 13.3852C14.8776 13.2404 14.7616 13.1244 14.6168 13.0592C14.4895 13.002 14.3264 13.002 14 13.002C13.6736 13.002 13.5105 13.002 13.3832 13.0592C13.2384 13.1244 13.1224 13.2404 13.0573 13.3852Z"></path></svg>'),
  zr = e => {
    const t = ie(),
      n = () => e.fill || t.colors.icon.secondary;
    return (() => {
      const r = x0.cloneNode(!0),
        o = r.firstChild;
      return Y(() => O(o, "fill", n())), r
    })()
  },
  S0 = {
    m: "16px",
    s: "12px",
    none: "0"
  },
  k0 = {
    m: "6px",
    s: "6px",
    none: "0"
  },
  _0 = w.div`
    width: 60px;
    height: 60px;
    padding: 8px;
    margin-bottom: 8px;
    border-radius: ${e=>S0[e.theme.borderRadius]};
    background-color: ${e=>e.theme.colors.background.tint};
    display: grid;
    grid-template: 1fr 1fr / 1fr 1fr;
    gap: 4px;
`,
  E0 = w(Ps)`
    width: 20px;
    height: 20px;
    border-radius: ${e=>k0[e.theme.borderRadius]};
`,
  Ds = e => a(tr, {
    get name() {
      return e.labelLine1
    },
    get secondLine() {
      return e.labelLine2
    },
    get icon() {
      return a(_0, {
        get children() {
          return a(pn, {
            each: [0, 1, 2, 3],
            children: t => a(E0, {
              get src() {
                return e.images[t]
              }
            })
          })
        }
      })
    },
    onClick: () => e.onClick()
  }),
  ot = "telegram-wallet",
  kn = {
    TON: "https://raw.githubusercontent.com/ton-connect/sdk/main/assets/ton-icon-48.png",
    TG: "https://raw.githubusercontent.com/ton-connect/sdk/main/assets/tg.png"
  },
  Ns = e => {
    const [t] = Qe(), n = () => {
      if (e.wallet.appName !== ot) {
        if ("isPreferred" in e.wallet && e.wallet.isPreferred) return t("walletItem.recent", {}, "Recent");
        if (kt(e.wallet)) return t("walletItem.installed", {}, "Installed");
        if (e.wallet.name === "Tonkeeper") return t("walletItem.popular", {}, "Popular")
      }
    };
    return P((() => {
      const r = P(() => e.wallet.appName === ot);
      return () => r() ? a(tr, {
        get icon() {
          return e.wallet.imageUrl
        },
        get name() {
          return t("walletItem.walletOn", {}, "Wallet On")
        },
        secondLine: "Telegram",
        get badgeUrl() {
          return kn.TG
        },
        onClick: () => e.onClick()
      }) : a(tr, {
        get icon() {
          return e.wallet.imageUrl
        },
        get name() {
          return e.wallet.name
        },
        get secondLine() {
          return n()
        },
        secondLineColorPrimary: !1,
        onClick: () => e.onClick()
      })
    })())
  },
  A0 = w.div`
    width: 100%;
    overflow-y: auto;
    max-height: ${e=>e.maxHeight};

    scrollbar-width: none;
    &&::-webkit-scrollbar {
        display: none;
    }

    &&::-webkit-scrollbar-track {
        background: transparent;
    }

    &&::-webkit-scrollbar-thumb {
        display: none;
    }
`,
  L0 = w.div`
    height: 1px;
    margin: 0 -24px;
    width: calc(100% + 48px);
    opacity: 0.08;
    background: ${e=>e.isShown?e.theme.colors.icon.secondary:"transparent"};
    transition: background 0.15s ease-in-out;

    ${Re("mobile")} {
        width: 100%;
        margin: 0;
    }
`,
  [$0, T0] = q(((Zo = Ge()) == null ? void 0 : Zo.innerHeight) || 0);
Ge() && window.addEventListener("resize", () => T0(window.innerHeight));
const [Vt, M0] = q(Dt("mobile")), nr = () => M0(Dt("mobile"));
Ge() && (window.addEventListener("resize", () => nr()), window.addEventListener("load", () => nr(), {
  once: !0
}));
const Hs = e => {
    const [t, n] = q(!1), r = s => {
      n(s.target.scrollTop > 0)
    }, o = () => Vt() ? 150 : 200, i = () => e.maxHeight !== void 0 ? `${e.maxHeight}px` : `${$0()-o()}px`;
    return [a(L0, {
      get isShown() {
        return t()
      }
    }), a(A0, {
      get maxHeight() {
        return i()
      },
      onScroll: r,
      get class() {
        return e.class
      },
      get children() {
        return e.children
      }
    })]
  },
  R0 = w.a`
    display: block;
    text-decoration: unset;
`,
  rr = e => a(R0, je({
    get href() {
      return e.href
    },
    get target() {
      return e.blank ? "_blank" : "_self"
    },
    get class() {
      return e.class
    }
  }, () => e.blank ? {
    rel: "noreferrer noopener"
  } : {}, {
    get children() {
      return e.children
    }
  })),
  yt = fr(),
  I0 = J('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.76228 2.09998H10.2378C11.0458 2.09997 11.7067 2.09996 12.2438 2.14384C12.7997 2.18926 13.3017 2.28614 13.7706 2.52505C14.5045 2.89896 15.1011 3.49558 15.475 4.22941C15.7139 4.6983 15.8108 5.20038 15.8562 5.75629C15.9001 6.29337 15.9001 6.95422 15.9001 7.76227V8.1H16.2377C17.0457 8.09999 17.7066 8.09998 18.2437 8.14386C18.7996 8.18928 19.3017 8.28616 19.7705 8.52507C20.5044 8.89898 21.101 9.4956 21.4749 10.2294C21.7138 10.6983 21.8107 11.2004 21.8561 11.7563C21.9 12.2934 21.9 12.9542 21.9 13.7623V16.2377C21.9 17.0458 21.9 17.7066 21.8561 18.2437C21.8107 18.7996 21.7138 19.3017 21.4749 19.7706C21.101 20.5044 20.5044 21.101 19.7705 21.4749C19.3017 21.7138 18.7996 21.8107 18.2437 21.8561C17.7066 21.9 17.0458 21.9 16.2378 21.9H13.7623C12.9543 21.9 12.2934 21.9 11.7563 21.8561C11.2004 21.8107 10.6983 21.7138 10.2294 21.4749C9.49561 21.101 8.89898 20.5044 8.52508 19.7706C8.28616 19.3017 8.18928 18.7996 8.14386 18.2437C8.09998 17.7066 8.09999 17.0458 8.1 16.2377V15.9H7.76227C6.95426 15.9 6.29335 15.9 5.75629 15.8561C5.20038 15.8107 4.6983 15.7138 4.22941 15.4749C3.49558 15.101 2.89896 14.5044 2.52505 13.7705C2.28614 13.3017 2.18926 12.7996 2.14384 12.2437C2.09996 11.7066 2.09997 11.0458 2.09998 10.2377V7.76228C2.09997 6.95424 2.09996 6.29336 2.14384 5.75629C2.18926 5.20038 2.28614 4.6983 2.52505 4.22941C2.89896 3.49558 3.49558 2.89896 4.22941 2.52505C4.6983 2.28614 5.20038 2.18926 5.75629 2.14384C6.29336 2.09996 6.95425 2.09997 7.76228 2.09998ZM8.1 14.1V13.7623C8.09999 12.9542 8.09998 12.2934 8.14386 11.7563C8.18928 11.2004 8.28616 10.6983 8.52508 10.2294C8.89898 9.4956 9.49561 8.89898 10.2294 8.52507C10.6983 8.28616 11.2004 8.18928 11.7563 8.14386C12.2934 8.09998 12.9542 8.09999 13.7623 8.1H14.1001V7.79998C14.1001 6.94505 14.0994 6.35798 14.0622 5.90287C14.0259 5.45827 13.9593 5.21944 13.8712 5.0466C13.6699 4.65146 13.3486 4.3302 12.9535 4.12886C12.7806 4.04079 12.5418 3.97419 12.0972 3.93786C11.6421 3.90068 11.055 3.89998 10.2001 3.89998H7.79998C6.94505 3.89998 6.35798 3.90068 5.90287 3.93786C5.45827 3.97419 5.21944 4.04079 5.0466 4.12886C4.65146 4.3302 4.3302 4.65146 4.12886 5.0466C4.04079 5.21944 3.97419 5.45827 3.93786 5.90287C3.90068 6.35798 3.89998 6.94505 3.89998 7.79998V10.2C3.89998 11.0549 3.90068 11.642 3.93786 12.0971C3.97419 12.5417 4.04079 12.7805 4.12886 12.9534C4.3302 13.3485 4.65146 13.6698 5.0466 13.8711C5.21944 13.9592 5.45827 14.0258 5.90287 14.0621C6.35798 14.0993 6.94505 14.1 7.79998 14.1H8.1ZM11.0466 10.1289C11.2195 10.0408 11.4583 9.97421 11.9029 9.93788C12.358 9.9007 12.9451 9.9 13.8 9.9H16.2C17.0549 9.9 17.642 9.9007 18.0971 9.93788C18.5417 9.97421 18.7805 10.0408 18.9534 10.1289C19.3485 10.3302 19.6698 10.6515 19.8711 11.0466C19.9592 11.2195 20.0258 11.4583 20.0621 11.9029C20.0993 12.358 20.1 12.9451 20.1 13.8V16.2C20.1 17.0549 20.0993 17.642 20.0621 18.0971C20.0258 18.5417 19.9592 18.7805 19.8711 18.9534C19.6698 19.3485 19.3485 19.6698 18.9534 19.8711C18.7805 19.9592 18.5417 20.0258 18.0971 20.0621C17.642 20.0993 17.0549 20.1 16.2 20.1H13.8C12.9451 20.1 12.358 20.0993 11.9029 20.0621C11.4583 20.0258 11.2195 19.9592 11.0466 19.8711C10.6515 19.6698 10.3302 19.3485 10.1289 18.9534C10.0408 18.7805 9.97421 18.5417 9.93788 18.0971C9.9007 17.642 9.9 17.0549 9.9 16.2V13.8C9.9 12.9451 9.9007 12.358 9.93788 11.9029C9.97421 11.4583 10.0408 11.2195 10.1289 11.0466C10.3302 10.6515 10.6515 10.3302 11.0466 10.1289Z"></path></svg>'),
  B0 = e => {
    const t = ie(),
      n = () => e.fill || t.colors.icon.primary;
    return (() => {
      const r = I0.cloneNode(!0),
        o = r.firstChild;
      return Y(i => {
        const s = e.class,
          l = n();
        return s !== i._v$ && O(r, "class", i._v$ = s), l !== i._v$2 && O(o, "fill", i._v$2 = l), i
      }, {
        _v$: void 0,
        _v$2: void 0
      }), r
    })()
  },
  W0 = J('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.7624 3.10001C7.95435 3.1 7.29349 3.09999 6.75642 3.14387C6.2005 3.18929 5.69842 3.28617 5.22954 3.52508C4.4957 3.89899 3.89908 4.49561 3.52517 5.22944C3.28626 5.69833 3.18938 6.20041 3.14396 6.75632C3.10008 7.2934 3.10009 7.95424 3.1001 8.76229V15.2377C3.10009 16.0458 3.10008 16.7066 3.14396 17.2437C3.18938 17.7996 3.28626 18.3017 3.52517 18.7706C3.89908 19.5044 4.4957 20.101 5.22954 20.4749C5.69842 20.7138 6.2005 20.8107 6.75642 20.8561C7.29349 20.9 7.95434 20.9 8.76239 20.9H12.0001C12.4972 20.9 12.9001 20.4971 12.9001 20C12.9001 19.503 12.4972 19.1 12.0001 19.1H8.8001C7.94517 19.1 7.3581 19.0993 6.90299 19.0621C6.45839 19.0258 6.21956 18.9592 6.04672 18.8711C5.65158 18.6698 5.33032 18.3485 5.12898 17.9534C5.04092 17.7805 4.97431 17.5417 4.93798 17.0971C4.9008 16.642 4.9001 16.0549 4.9001 15.2V8.80001C4.9001 7.94508 4.9008 7.35801 4.93798 6.9029C4.97431 6.4583 5.04092 6.21947 5.12898 6.04663C5.33032 5.65149 5.65158 5.33023 6.04672 5.12889C6.21956 5.04082 6.45839 4.97422 6.90299 4.93789C7.3581 4.90071 7.94517 4.90001 8.8001 4.90001H12.0001C12.4972 4.90001 12.9001 4.49706 12.9001 4.00001C12.9001 3.50295 12.4972 3.10001 12.0001 3.10001H8.7624Z"></path><path d="M17.6364 7.3636C17.2849 7.01212 16.7151 7.01212 16.3636 7.3636C16.0121 7.71507 16.0121 8.28492 16.3636 8.63639L18.8272 11.1H9.00001C8.50295 11.1 8.10001 11.5029 8.10001 12C8.10001 12.497 8.50295 12.9 9.00001 12.9H18.8272L16.3636 15.3636C16.0121 15.7151 16.0121 16.2849 16.3636 16.6364C16.7151 16.9879 17.2849 16.9879 17.6364 16.6364L21.6364 12.6364C21.9879 12.2849 21.9879 11.7151 21.6364 11.3636L17.6364 7.3636Z"></path></svg>'),
  P0 = e => {
    const t = ie(),
      n = () => e.fill || t.colors.icon.primary;
    return (() => {
      const r = W0.cloneNode(!0),
        o = r.firstChild,
        i = o.nextSibling;
      return Y(s => {
        const l = n(),
          c = n();
        return l !== s._v$ && O(o, "fill", s._v$ = l), c !== s._v$2 && O(i, "fill", s._v$2 = c), s
      }, {
        _v$: void 0,
        _v$2: void 0
      }), r
    })()
  },
  U0 = {
    m: "8px",
    s: "4px",
    none: "0"
  },
  D0 = {
    m: "16px",
    s: "8px",
    none: "0"
  },
  N0 = w.div`
    width: 256px;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.16);
    border-radius: ${e=>D0[e.theme.borderRadius]};

    background-color: ${e=>e.theme.colors.background.primary}
           
    color: ${e=>e.theme.colors.text.primary}
`,
  H0 = w.ul`
    background-color: ${e=>e.theme.colors.background.primary};
    padding: 8px;
`,
  fi = w.button`
    display: flex;
    align-items: center;
    gap: 8px;
    height: 40px;
    padding-left: 8px;
    width: 100%;

    background-color: ${e=>e.theme.colors.background.primary};
    border: none;
    border-radius: ${e=>U0[e.theme.borderRadius]};
    cursor: pointer;

    transition: background-color, transform 0.1s ease-in-out;

    &:hover {
        background-color: ${e=>e.theme.colors.background.secondary};
    }

    &:active {
        transform: scale(0.96);
    }
`,
  hi = J("<li></li>"),
  Lr = e => a(Me, {
    get translationKey() {
      return e.translationKey
    },
    fontSize: "15px",
    fontWeight: "590",
    get children() {
      return e.children
    }
  }),
  F0 = e => {
    const t = Ae(yt),
      [n, r] = q(!1),
      o = () => ne(void 0, null, function*() {
        const s = io(t.account.address, t.account.chain === dn.TESTNET);
        yield yo(s), r(!0), setTimeout(() => r(!1), 1e3)
      }),
      i = () => {
        t.disconnect(), e.onClose()
      };
    return a(N0, {
      ref(s) {
        const l = e.ref;
        typeof l == "function" ? l(s) : e.ref = s
      },
      get class() {
        return e.class
      },
      "data-tc-dropdown": "true",
      get children() {
        return a(H0, {
          get children() {
            return [(() => {
              const s = hi.cloneNode(!0);
              return xe(s, a(fi, {
                onClick: () => o(),
                get children() {
                  return [a(B0, {}), a(G, {
                    get when() {
                      return !n()
                    },
                    get children() {
                      return a(Lr, {
                        translationKey: "button.dropdown.copy",
                        children: "Copy address"
                      })
                    }
                  }), a(G, {
                    get when() {
                      return n()
                    },
                    get children() {
                      return a(Lr, {
                        translationKey: "button.dropdown.copied",
                        children: "Address copied!"
                      })
                    }
                  })]
                }
              })), s
            })(), (() => {
              const s = hi.cloneNode(!0);
              return xe(s, a(fi, {
                onClick: () => i(),
                get children() {
                  return [a(P0, {}), a(Lr, {
                    translationKey: "button.dropdown.disconnect",
                    children: "Disconnect"
                  })]
                }
              })), s
            })()]
          }
        })
      }
    })
  },
  O0 = {
    m: "16px",
    s: "8px",
    none: "0"
  },
  j0 = w.div`
    width: 256px;
    padding: 12px 16px;
    display: flex;
    gap: 9px;

    background-color: ${e=>e.theme.colors.background.primary};
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.16);
    border-radius: ${e=>O0[e.theme.borderRadius]};
`,
  K0 = w.div`
    width: 192px;

    > h3 {
        font-size: 15px;
    }
`,
  V0 = w(Me)`
    margin-top: 4px;
    color: ${e=>e.theme.colors.text.secondary};
`,
  xo = e => {
    const t = Sn(e);
    return a(j0, je({
      get class() {
        return e.class
      },
      "data-tc-notification": "true"
    }, t, {
      get children() {
        return [a(K0, {
          get children() {
            return [a(Co, {
              get translationKey() {
                return e.header.translationKey
              },
              get translationValues() {
                return e.header.translationValues
              },
              get children() {
                return e.children
              }
            }), a(G, {
              get when() {
                return e.text
              },
              get children() {
                return a(V0, {
                  get translationKey() {
                    return e.text.translationKey
                  },
                  get translationValues() {
                    return e.text.translationValues
                  }
                })
              }
            })]
          }
        }), P(() => e.icon)]
      }
    }))
  },
  q0 = w(lt)`
    align-self: center;
`,
  Z0 = e => {
    const t = Ae(yt),
      [n] = Qe(),
      r = () => t.wallet && "name" in t.wallet ? t.wallet.name : n("common.yourWallet", {}, "Your wallet");
    return a(xo, {
      get header() {
        return {
          translationKey: "notifications.confirm.header",
          translationValues: {
            name: r()
          }
        }
      },
      get class() {
        return e.class
      },
      get icon() {
        return a(q0, {})
      },
      "data-tc-notification-confirm": "true",
      children: "Confirm operation in your wallet"
    })
  },
  G0 = w(wr)`
    margin-top: 2px;
`,
  Q0 = e => a(xo, {
    header: {
      translationKey: "notifications.transactionCanceled.header"
    },
    text: {
      translationKey: "notifications.transactionCanceled.text"
    },
    get icon() {
      return a(G0, {
        size: "xs"
      })
    },
    get class() {
      return e.class
    },
    "data-tc-notification-tx-cancelled": "true",
    children: "Transaction cancelled"
  }),
  z0 = w(bo)`
    margin-top: 2px;
`,
  Y0 = e => a(xo, {
    header: {
      translationKey: "notifications.transactionSent.header"
    },
    text: {
      translationKey: "notifications.transactionSent.text"
    },
    get icon() {
      return a(z0, {})
    },
    get class() {
      return e.class
    },
    "data-tc-notification-tx-sent": "true",
    children: "Transaction sent"
  }),
  $r = it`
    transform: translateY(-8px);
    margin-bottom: 12px;
`,
  J0 = {
    timeout: 4500
  },
  [gi, X0] = q(null);

function e1(e) {
  const {
    timeout: t
  } = re(re({}, J0), e), [n, r] = q([]), [o, i] = q([]);
  return pe(sa(tt, s => {
    var l;
    if (!s || !s.showNotification || gi() === s || ((l = gi()) == null ? void 0 : l.name) === "confirm-transaction" && s.name === "confirm-transaction") return;
    X0(s), r(d => d.filter(f => f.action !== "confirm-transaction"));
    const c = {
      action: s.name
    };
    r(d => [...d, c]);
    const u = setTimeout(() => {
      r(d => d.filter(f => f !== c)), i(d => d.filter(f => f !== u))
    }, t);
    i(d => [...d, u])
  })), Ee(() => {
    o().forEach(s => clearTimeout(s))
  }), n
}
const t1 = J('<div data-tc-list-notifications="true"></div>'),
  n1 = e => {
    const t = e1();
    return (() => {
      const n = t1.cloneNode(!0);
      return xe(n, a(Hc, {
        onBeforeEnter: r => {
          Oe(r, [{
            opacity: 0,
            transform: "translateY(0)"
          }, {
            opacity: 1,
            transform: "translateY(-8px)"
          }], {
            duration: 200
          })
        },
        onExit: (r, o) => {
          Oe(r, [{
            opacity: 1,
            transform: "translateY(-8px)"
          }, {
            opacity: 0,
            transform: "translateY(-30px)"
          }], {
            duration: 200
          }).finished.then(o)
        },
        get children() {
          return a(pn, {
            get each() {
              return t()
            },
            children: r => a(yn, {
              get children() {
                return [a(be, {
                  get when() {
                    return r.action === "transaction-sent"
                  },
                  get children() {
                    return a(Y0, {
                      class: $r
                    })
                  }
                }), a(be, {
                  get when() {
                    return r.action === "transaction-canceled"
                  },
                  get children() {
                    return a(Q0, {
                      class: $r
                    })
                  }
                }), a(be, {
                  get when() {
                    return r.action === "confirm-transaction"
                  },
                  get children() {
                    return a(Z0, {
                      class: $r
                    })
                  }
                })]
              }
            })
          })
        }
      })), Y(() => ao(n, e.class)), n
    })()
  },
  Fs = w(he)`
    background-color: ${e=>e.theme.colors.connectButton.background};
    color: ${e=>e.theme.colors.connectButton.foreground};
    box-shadow: ${e=>`0 4px 24px ${Cn(e.theme.colors.constant.black,.16)}`};
    padding: 8px 16px 8px 12px;

    display: flex;
    align-items: center;
    gap: 4px;
    height: 40px;
`,
  r1 = w(Fs)`
    padding: 12px 16px;
    min-width: 148px;
    justify-content: center;
    background-color: ${e=>e.theme.colors.background.primary};
`,
  o1 = w(he)`
    min-width: 148px;
    height: 40px;

    background-color: ${e=>e.theme.colors.background.primary};
    color: ${e=>e.theme.colors.connectButton.foreground};
    box-shadow: ${e=>`0 4px 24px ${Cn(e.theme.colors.constant.black,.16)}`};

    display: flex;
    align-items: center;
    justify-content: center;
`,
  i1 = w(lt)`
    height: 18px;
    width: 18px;
`,
  s1 = w.div`
    width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`,
  l1 = w(F0)`
    box-sizing: border-box;
    overflow: hidden;
    margin-top: 12px;
`,
  a1 = w(n1)`
    > div:first-child {
        margin-top: 20px;
    }
`;

function Os(e) {
  return e.split("-")[0]
}

function c1(e) {
  return e.split("-")[1]
}

function u1(e) {
  return ["top", "bottom"].includes(Os(e)) ? "x" : "y"
}

function d1(e) {
  return e === "y" ? "height" : "width"
}

function mi(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = r.x + r.width / 2 - o.width / 2,
    s = r.y + r.height / 2 - o.height / 2,
    l = u1(t),
    c = d1(l),
    u = r[c] / 2 - o[c] / 2,
    d = Os(t),
    f = l === "x";
  let v;
  switch (d) {
    case "top":
      v = {
        x: i,
        y: r.y - o.height
      };
      break;
    case "bottom":
      v = {
        x: i,
        y: r.y + r.height
      };
      break;
    case "right":
      v = {
        x: r.x + r.width,
        y: s
      };
      break;
    case "left":
      v = {
        x: r.x - o.width,
        y: s
      };
      break;
    default:
      v = {
        x: r.x,
        y: r.y
      }
  }
  switch (c1(t)) {
    case "start":
      v[l] -= u * (n && f ? -1 : 1);
      break;
    case "end":
      v[l] += u * (n && f ? -1 : 1);
      break
  }
  return v
}
const f1 = (e, t, n) => ne(void 0, null, function*() {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: s
  } = n, l = i.filter(Boolean), c = yield s.isRTL == null ? void 0 : s.isRTL(t);
  if ({}.NODE_ENV !== "production") {
    if (s == null && console.error(["Floating UI: `platform` property was not passed to config. If you", "want to use Floating UI on the web, install @floating-ui/dom", "instead of the /core package. Otherwise, you can create your own", "`platform`: https://floating-ui.com/docs/platform"].join(" ")), l.filter(W => {
        let {
          name: H
        } = W;
        return H === "autoPlacement" || H === "flip"
      }).length > 1) throw new Error(["Floating UI: duplicate `flip` and/or `autoPlacement` middleware", "detected. This will lead to an infinite loop. Ensure only one of", "either has been passed to the `middleware` array."].join(" "));
    (!e || !t) && console.error(["Floating UI: The reference and/or floating element was not defined", "when `computePosition()` was called. Ensure that both elements have", "been created and can be measured."].join(" "))
  }
  let u = yield s.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: d,
    y: f
  } = mi(u, r, c), v = r, L = {}, I = 0;
  for (let W = 0; W < l.length; W++) {
    const {
      name: H,
      fn: N
    } = l[W], {
      x: A,
      y: B,
      data: F,
      reset: b
    } = yield N({
      x: d,
      y: f,
      initialPlacement: r,
      placement: v,
      strategy: o,
      middlewareData: L,
      rects: u,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    if (d = A ?? d, f = B ?? f, L = Te(re({}, L), {
        [H]: re(re({}, L[H]), F)
      }), {}.NODE_ENV !== "production" && I > 50 && console.warn(["Floating UI: The middleware lifecycle appears to be running in an", "infinite loop. This is usually caused by a `reset` continually", "being returned without a break condition."].join(" ")), b && I <= 50) {
      I++, typeof b == "object" && (b.placement && (v = b.placement), b.rects && (u = b.rects === !0 ? yield s.getElementRects({
        reference: e,
        floating: t,
        strategy: o
      }): b.rects), {
        x: d,
        y: f
      } = mi(u, v, c)), W = -1;
      continue
    }
  }
  return {
    x: d,
    y: f,
    placement: v,
    strategy: o,
    middlewareData: L
  }
});

function vi(e) {
  return Te(re({}, e), {
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  })
}

function at(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}

function qe(e) {
  return at(e).getComputedStyle(e)
}

function vt(e) {
  return Ks(e) ? (e.nodeName || "").toLowerCase() : ""
}
let In;

function js() {
  if (In) return In;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (In = e.brands.map(t => t.brand + "/" + t.version).join(" "), In) : navigator.userAgent
}

function Ze(e) {
  return e instanceof at(e).HTMLElement
}

function We(e) {
  return e instanceof at(e).Element
}

function Ks(e) {
  return e instanceof at(e).Node
}

function wi(e) {
  if (typeof ShadowRoot > "u") return !1;
  const t = at(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot
}

function pr(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = qe(e);
  return /auto|scroll|overlay|hidden/.test(t + r + n) && !["inline", "contents"].includes(o)
}

function h1(e) {
  return ["table", "td", "th"].includes(vt(e))
}

function So(e) {
  const t = /firefox/i.test(js()),
    n = qe(e),
    r = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (r ? r !== "none" : !1) || t && n.willChange === "filter" || t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some(o => n.willChange.includes(o)) || ["paint", "layout", "strict", "content"].some(o => {
    const i = n.contain;
    return i != null ? i.includes(o) : !1
  })
}

function Vs() {
  return !/^((?!chrome|android).)*safari/i.test(js())
}

function ko(e) {
  return ["html", "body", "#document"].includes(vt(e))
}
const pi = Math.min,
  ln = Math.max,
  yi = Math.round,
  Yr = {
    x: 1,
    y: 1
  };

function vn(e) {
  const t = !We(e) && e.contextElement ? e.contextElement : We(e) ? e : null;
  if (!t) return Yr;
  const n = t.getBoundingClientRect(),
    r = qe(t);
  if (r.boxSizing !== "border-box") return Ze(t) ? {
    x: t.offsetWidth > 0 && yi(n.width) / t.offsetWidth || 1,
    y: t.offsetHeight > 0 && yi(n.height) / t.offsetHeight || 1
  } : Yr;
  let o = n.width / parseFloat(r.width),
    i = n.height / parseFloat(r.height);
  return (!o || !Number.isFinite(o)) && (o = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: o,
    y: i
  }
}

function wt(e, t, n, r) {
  var o, i, s, l;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const c = e.getBoundingClientRect();
  let u = Yr;
  t && (r ? We(r) && (u = vn(r)) : u = vn(e));
  const d = We(e) ? at(e) : window,
    f = !Vs() && n,
    v = (c.left + (f && (o = (i = d.visualViewport) == null ? void 0 : i.offsetLeft) != null ? o : 0)) / u.x,
    L = (c.top + (f && (s = (l = d.visualViewport) == null ? void 0 : l.offsetTop) != null ? s : 0)) / u.y,
    I = c.width / u.x,
    W = c.height / u.y;
  return {
    width: I,
    height: W,
    top: L,
    right: v + I,
    bottom: L + W,
    left: v,
    x: v,
    y: L
  }
}

function Ct(e) {
  return ((Ks(e) ? e.ownerDocument : e.document) || window.document).documentElement
}

function yr(e) {
  return We(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  }
}

function qs(e) {
  return wt(Ct(e)).left + yr(e).scrollLeft
}

function g1(e, t, n) {
  const r = Ze(t),
    o = Ct(t),
    i = wt(e, !0, n === "fixed", t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = {
    x: 0,
    y: 0
  };
  if (r || !r && n !== "fixed")
    if ((vt(t) !== "body" || pr(o)) && (s = yr(t)), Ze(t)) {
      const c = wt(t, !0);
      l.x = c.x + t.clientLeft, l.y = c.y + t.clientTop
    } else o && (l.x = qs(o));
  return {
    x: i.left + s.scrollLeft - l.x,
    y: i.top + s.scrollTop - l.y,
    width: i.width,
    height: i.height
  }
}

function wn(e) {
  if (vt(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (wi(e) ? e.host : null) || Ct(e);
  return wi(t) ? t.host : t
}

function Ci(e) {
  return !Ze(e) || qe(e).position === "fixed" ? null : e.offsetParent
}

function m1(e) {
  let t = wn(e);
  for (; Ze(t) && !ko(t);) {
    if (So(t)) return t;
    t = wn(t)
  }
  return null
}

function bi(e) {
  const t = at(e);
  let n = Ci(e);
  for (; n && h1(n) && qe(n).position === "static";) n = Ci(n);
  return n && (vt(n) === "html" || vt(n) === "body" && qe(n).position === "static" && !So(n)) ? t : n || m1(e) || t
}

function v1(e) {
  if (Ze(e)) return {
    width: e.offsetWidth,
    height: e.offsetHeight
  };
  const t = wt(e);
  return {
    width: t.width,
    height: t.height
  }
}

function w1(e) {
  let {
    rect: t,
    offsetParent: n,
    strategy: r
  } = e;
  const o = Ze(n),
    i = Ct(n);
  if (n === i) return t;
  let s = {
      scrollLeft: 0,
      scrollTop: 0
    },
    l = {
      x: 1,
      y: 1
    };
  const c = {
    x: 0,
    y: 0
  };
  if ((o || !o && r !== "fixed") && ((vt(n) !== "body" || pr(i)) && (s = yr(n)), Ze(n))) {
    const u = wt(n);
    l = vn(n), c.x = u.x + n.clientLeft, c.y = u.y + n.clientTop
  }
  return {
    width: t.width * l.x,
    height: t.height * l.y,
    x: t.x * l.x - s.scrollLeft * l.x + c.x,
    y: t.y * l.y - s.scrollTop * l.y + c.y
  }
}

function p1(e, t) {
  const n = at(e),
    r = Ct(e),
    o = n.visualViewport;
  let i = r.clientWidth,
    s = r.clientHeight,
    l = 0,
    c = 0;
  if (o) {
    i = o.width, s = o.height;
    const u = Vs();
    (u || !u && t === "fixed") && (l = o.offsetLeft, c = o.offsetTop)
  }
  return {
    width: i,
    height: s,
    x: l,
    y: c
  }
}

function y1(e) {
  var t;
  const n = Ct(e),
    r = yr(e),
    o = (t = e.ownerDocument) == null ? void 0 : t.body,
    i = ln(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0),
    s = ln(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0);
  let l = -r.scrollLeft + qs(e);
  const c = -r.scrollTop;
  return qe(o || n).direction === "rtl" && (l += ln(n.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: s,
    x: l,
    y: c
  }
}

function Zs(e) {
  const t = wn(e);
  return ko(t) ? e.ownerDocument.body : Ze(t) && pr(t) ? t : Zs(t)
}

function an(e, t) {
  var n;
  t === void 0 && (t = []);
  const r = Zs(e),
    o = r === ((n = e.ownerDocument) == null ? void 0 : n.body),
    i = at(r);
  return o ? t.concat(i, i.visualViewport || [], pr(r) ? r : []) : t.concat(r, an(r))
}

function C1(e, t) {
  const n = wt(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    o = n.left + e.clientLeft,
    i = Ze(e) ? vn(e) : {
      x: 1,
      y: 1
    },
    s = e.clientWidth * i.x,
    l = e.clientHeight * i.y,
    c = o * i.x,
    u = r * i.y;
  return {
    top: u,
    left: c,
    right: c + s,
    bottom: u + l,
    x: c,
    y: u,
    width: s,
    height: l
  }
}

function xi(e, t, n) {
  return t === "viewport" ? vi(p1(e, n)) : We(t) ? C1(t, n) : vi(y1(Ct(e)))
}

function b1(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = an(e).filter(l => We(l) && vt(l) !== "body"),
    o = null;
  const i = qe(e).position === "fixed";
  let s = i ? wn(e) : e;
  for (; We(s) && !ko(s);) {
    const l = qe(s),
      c = So(s);
    (i ? !c && !o : !c && l.position === "static" && !!o && ["absolute", "fixed"].includes(o.position)) ? r = r.filter(d => d !== s): o = l, s = wn(s)
  }
  return t.set(e, r), r
}

function x1(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? b1(t, this._c) : [].concat(n), r],
    l = s[0],
    c = s.reduce((u, d) => {
      const f = xi(t, d, o);
      return u.top = ln(f.top, u.top), u.right = pi(f.right, u.right), u.bottom = pi(f.bottom, u.bottom), u.left = ln(f.left, u.left), u
    }, xi(t, l, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  }
}
const S1 = {
  getClippingRect: x1,
  convertOffsetParentRelativeRectToViewportRelativeRect: w1,
  isElement: We,
  getDimensions: v1,
  getOffsetParent: bi,
  getDocumentElement: Ct,
  getScale: vn,
  getElementRects(e) {
    return ne(this, null, function*() {
      let {
        reference: t,
        floating: n,
        strategy: r
      } = e;
      const o = this.getOffsetParent || bi,
        i = this.getDimensions;
      return {
        reference: g1(t, yield o(n), r),
        floating: re({
          x: 0,
          y: 0
        }, yield i(n))
      }
    })
  },
  getClientRects: e => Array.from(e.getClientRects()),
  isRTL: e => qe(e).direction === "rtl"
};

function k1(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: s = !0,
    animationFrame: l = !1
  } = r, c = o && !l, u = c || i ? [...We(e) ? an(e) : e.contextElement ? an(e.contextElement) : [], ...an(t)] : [];
  u.forEach(I => {
    c && I.addEventListener("scroll", n, {
      passive: !0
    }), i && I.addEventListener("resize", n)
  });
  let d = null;
  if (s) {
    let I = !0;
    d = new ResizeObserver(() => {
      I || n(), I = !1
    }), We(e) && !l && d.observe(e), !We(e) && e.contextElement && !l && d.observe(e.contextElement), d.observe(t)
  }
  let f, v = l ? wt(e) : null;
  l && L();

  function L() {
    const I = wt(e);
    v && (I.x !== v.x || I.y !== v.y || I.width !== v.width || I.height !== v.height) && n(), v = I, f = requestAnimationFrame(L)
  }
  return n(), () => {
    var I;
    u.forEach(W => {
      c && W.removeEventListener("scroll", n), i && W.removeEventListener("resize", n)
    }), (I = d) == null || I.disconnect(), d = null, l && cancelAnimationFrame(f)
  }
}
const _1 = (e, t, n) => {
  const r = new Map,
    o = re({
      platform: S1
    }, n),
    i = Te(re({}, o.platform), {
      _c: r
    });
  return f1(e, t, Te(re({}, o), {
    platform: i
  }))
};

function E1(e, t, n) {
  let r = () => {
      var f;
      return (f = n == null ? void 0 : n.placement) != null ? f : "bottom"
    },
    o = () => {
      var f;
      return (f = n == null ? void 0 : n.strategy) != null ? f : "absolute"
    },
    [i, s] = q({
      x: null,
      y: null,
      placement: r(),
      strategy: o(),
      middlewareData: {}
    }),
    [l, c] = q();
  pe(() => {
    let f = l();
    if (f) throw f.value
  });
  let u = P(() => (e(), t(), {}));

  function d() {
    let f = e(),
      v = t();
    if (f && v) {
      let L = u();
      _1(f, v, {
        middleware: n == null ? void 0 : n.middleware,
        placement: r(),
        strategy: o()
      }).then(I => {
        L === u() && s(I)
      }, I => {
        c(I)
      })
    }
  }
  return pe(() => {
    let f = e(),
      v = t();
    if (n == null || n.middleware, r(), o(), f && v)
      if (n != null && n.whileElementsMounted) {
        let L = n.whileElementsMounted(f, v, d);
        L && Ee(L)
      } else d()
  }), {
    get x() {
      return i().x
    },
    get y() {
      return i().y
    },
    get placement() {
      return i().placement
    },
    get strategy() {
      return i().strategy
    },
    get middlewareData() {
      return i().middlewareData
    },
    update: d
  }
}
const A1 = J('<tc-root data-tc-dropdown-container="true"></tc-root>'),
  L1 = () => {
    const e = ie(),
      t = Ae(Gt),
      n = Ae(yt),
      [r, o] = q(!1),
      [i, s] = q(t.account),
      [l, c] = q(!t.account);
    let u;
    const [d, f] = q(), [v, L] = q(), I = E1(v, d, {
      whileElementsMounted: k1,
      placement: "bottom-end"
    }), W = () => {
      const A = i();
      if (A) {
        const B = io(A.address, A.chain === dn.TESTNET);
        return B.slice(0, 4) + "…" + B.slice(-4)
      }
      return ""
    };
    n.connectionRestored.then(() => c(!1));
    const H = t.onStatusChange(A => {
        if (!A) {
          o(!1), s(null), c(!1);
          return
        }
        s(A.account), c(!1)
      }),
      N = A => {
        if (!i() || !r()) return;
        const B = v().contains(A.target),
          F = u.contains(A.target);
        !B && !F && o(!1)
      };
    return ns(() => {
      document.body.addEventListener("click", N)
    }), Ee(() => {
      document.body.removeEventListener("click", N), H()
    }), a(Ot, {
      component: et,
      get children() {
        return [a(G, {
          get when() {
            return l()
          },
          get children() {
            return a(o1, {
              disabled: !0,
              "data-tc-connect-button-loading": "true",
              get children() {
                return a(i1, {})
              }
            })
          }
        }), a(G, {
          get when() {
            return !l()
          },
          get children() {
            return [a(G, {
              get when() {
                return !i()
              },
              get children() {
                return a(Fs, {
                  onClick: () => n.openModal(),
                  "data-tc-connect-button": "true",
                  scale: "s",
                  get children() {
                    return [a(Fu, {
                      get fill() {
                        return e.colors.connectButton.foreground
                      }
                    }), a(Me, {
                      translationKey: "button.connectWallet",
                      fontSize: "15px",
                      lineHeight: "18px",
                      fontWeight: "590",
                      get color() {
                        return e.colors.connectButton.foreground
                      },
                      children: "Connect wallet"
                    })]
                  }
                })
              }
            }), a(G, {
              get when() {
                return i()
              },
              get children() {
                return a(s1, {
                  get children() {
                    return [a(r1, {
                      onClick: () => o(A => !A),
                      ref: L,
                      "data-tc-dropdown-button": "true",
                      scale: "s",
                      get children() {
                        return [a(Me, {
                          fontSize: "15px",
                          fontWeight: "590",
                          lineHeight: "18px",
                          get children() {
                            return W()
                          }
                        }), a(Ts, {
                          direction: "bottom"
                        })]
                      }
                    }), a(hs, {
                      get children() {
                        const A = Ce(() => document.importNode(A1, !0));
                        return Ht(f, A), A.style.setProperty("z-index", "999"), A._$owner = la(), xe(A, a(po, {
                          onBeforeEnter: B => {
                            Oe(B, [{
                              opacity: 0,
                              transform: "translateY(-8px)"
                            }, {
                              opacity: 1,
                              transform: "translateY(0)"
                            }], {
                              duration: 150
                            })
                          },
                          onExit: (B, F) => {
                            Oe(B, [{
                              opacity: 1,
                              transform: "translateY(0)"
                            }, {
                              opacity: 0,
                              transform: "translateY(-8px)"
                            }], {
                              duration: 150
                            }).finished.then(F)
                          },
                          get children() {
                            return a(G, {
                              get when() {
                                return r()
                              },
                              get children() {
                                return a(l1, {
                                  get hidden() {
                                    return !r()
                                  },
                                  onClose: () => o(!1),
                                  ref(B) {
                                    const F = u;
                                    typeof F == "function" ? F(B) : u = B
                                  }
                                })
                              }
                            })
                          }
                        }), null), xe(A, a(a1, {}), null), Y(B => {
                          var F, b;
                          const M = I.strategy,
                            C = `${(F=I.y)!=null?F:0}px`,
                            p = `${(b=I.x)!=null?b:0}px`;
                          return M !== B._v$ && A.style.setProperty("position", B._v$ = M), C !== B._v$2 && A.style.setProperty("top", B._v$2 = C), p !== B._v$3 && A.style.setProperty("left", B._v$3 = p), B
                        }, {
                          _v$: void 0,
                          _v$2: void 0,
                          _v$3: void 0
                        }), A
                      }
                    })]
                  }
                })
              }
            })]
          }
        })]
      }
    })
  },
  Gs = w(Rs)`
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 18px;
    padding-bottom: 0;

    ${Re("mobile")} {
        padding-left: 0;
        padding-right: 0;

        min-height: 364px;
    }
`,
  Qs = w(ze)`
    margin-top: 12px;

    ${Re("mobile")} {
        padding: 0 10px;
    }
`,
  zs = w.div`
    margin: 30px 0;
    width: 100%;
    display: flex;
    justify-content: center;

    ${Re("mobile")} {
        height: 160px;
        align-items: center;
    }
`;
w(Me)`
    min-width: 84px;
    text-align: center;
    font-weight: 590;
`;
w(du)`
    margin: 0 auto 22px;
`;
const [te, Bn] = mo({
  buttonRootId: null,
  language: "en",
  returnStrategy: "back",
  twaReturnUrl: void 0,
  walletsListConfiguration: {},
  enableAndroidBackHandler: !0
});

function $1(e) {
  return [...new Set(e)]
}

function T1(e, t, n) {
  return t.map(r => {
    const o = n.find(i => i[e] === r[e]);
    return n = n.filter(i => i[e] !== r[e]), o === void 0 ? r : o
  }).concat(n)
}

function M1(e) {
  return "jsBridgeKey" in e ? Te(re({}, e), {
    injected: At.isWalletInjected(e.jsBridgeKey),
    embedded: At.isInsideWalletBrowser(e.jsBridgeKey)
  }) : e
}

function _o(e, t) {
  var n;
  return t && (n = t.includeWallets) != null && n.length && (e = T1("name", e, t.includeWallets.map(M1))), e
}

function Si(e) {
  return e.platforms.some(t => ["macos", "linux", "windows"].includes(t))
}

function cn(e) {
  return e.platforms.some(t => ["ios", "android"].includes(t))
}

function ki(e) {
  return e.platforms.some(t => ["chrome", "firefox", "safari"].includes(t))
}

function ut(e, t) {
  return t ? e.name.toLowerCase() === t.toLowerCase() || e.appName.toLowerCase() === t.toLowerCase() : !1
}
const R1 = w.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`,
  I1 = w(ze)`
    margin-bottom: 18px;
`;
w.div`
    height: 1px;
    margin: 0 -24px;
    width: calc(100% + 48px);
    opacity: 0.12;
    background: ${e=>e.isShown?e.theme.colors.icon.secondary:"transparent"};
    transition: background 0.15s ease-in-out;

    ${Re("mobile")} {
        width: 100%;
    }
`;
const B1 = w.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, 92px);
    grid-template-rows: auto;
    align-content: flex-start;
    justify-content: center;
    row-gap: 8px;
    width: 100%;
    padding: 0 0 16px;
    align-self: flex-start;
    max-width: 400px;
    margin: 0 auto;

    > li {
        display: block;
        height: fit-content;
    }

    ${Re("mobile")} {
        grid-template-columns: repeat(auto-fit, 82px);
    }
`;
w(he)`
    display: block;
    margin: 0 auto 1px;
    font-size: 15px;
`;
const W1 = w(Tt)`
    position: absolute;
    top: 16px;
    left: 16px;
`,
  P1 = w(Ns)`
    height: 100%;
`,
  U1 = J("<li></li>"),
  D1 = e => {
    const t = () => Vt() ? void 0 : 510,
      n = () => Vt() ? e.walletsList.filter(cn) : e.walletsList;
    return a(R1, {
      "data-tc-wallets-modal-list": "true",
      get children() {
        return [a(W1, {
          icon: "arrow",
          onClick: () => e.onBack()
        }), a(I1, {
          translationKey: "walletModal.wallets",
          children: "Wallets"
        }), a(Hs, {
          get maxHeight() {
            return t()
          },
          get children() {
            return a(B1, {
              get children() {
                return a(pn, {
                  get each() {
                    return n()
                  },
                  children: r => (() => {
                    const o = U1.cloneNode(!0);
                    return xe(o, a(P1, {
                      wallet: r,
                      onClick: () => e.onSelect(r)
                    })), o
                  })()
                })
              }
            })
          }
        })]
      }
    })
  },
  N1 = {
    m: "16px",
    s: "12px",
    none: "0"
  },
  H1 = {
    m: "6px",
    s: "6px",
    none: "0"
  },
  F1 = w.div`
    display: flex;
    flex-direction: column;
`,
  O1 = w.div`
    flex: 1;
    margin-top: ${e=>e.qr?"0":"18px"};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 232px;
`,
  j1 = w(vr)`
    margin-bottom: 24px;
`,
  K1 = w(ze)`
    max-width: 288px;
    margin: 0 auto 2px;
`,
  V1 = w(pt)`
    max-width: 288px;
    text-align: center;
    margin: 0 auto 20px;
`,
  q1 = w(Tt)`
    position: absolute;
    top: 16px;
    left: 16px;
`,
  en = w.div`
    display: flex;
    justify-content: center;
    gap: 8px;
    padding-bottom: 16px;
`,
  Z1 = w(en)`
    padding-bottom: 0;
`,
  Tr = w(he)`
    margin-bottom: 24px;
`,
  G1 = w(lt)`
    margin-bottom: 18px;
    margin-top: 2px;
`,
  Q1 = w(wr)`
    margin-bottom: 16px;
`,
  Wn = w(pt)`
    color: ${e=>e.theme.colors.text.secondary};
    text-align: center;
    margin-bottom: 20px;
`,
  z1 = w(he)`
    margin-top: -8px;
    margin-bottom: 24px;
    width: 100%;
    padding: 12px 12px 12px 20px;
    border-radius: ${e=>N1[e.theme.borderRadius]};
    font-size: 16px;
    line-height: 20px;
`,
  Y1 = w($t)`
    width: 32px;
    height: 32px;
    border-radius: ${e=>H1[e.theme.borderRadius]};
`,
  ye = e => {
    const [t] = Qe();
    return P(() => {
      var n;
      return t(e.translationKey, e.translationValues, (n = e.children) == null ? void 0 : n.toString())
    })
  };

function oe(e, t) {
  let n;
  typeof t == "string" ? n = t : n = Ve() ? t.twaReturnUrl || t.returnStrategy : "none";
  const r = J1(e, "ret", n);
  if (!ft(e)) return r;
  const o = r.slice(r.lastIndexOf("&") + 1);
  return r.slice(0, r.lastIndexOf("&")) + "-" + Pi(o)
}

function _n(e, t) {
  t = re({}, t);
  const n = X1(e),
    r = new URL(n);
  if (r.searchParams.has("startapp") || r.searchParams.append("startapp", "tonconnect"), Es()) {
    t.returnStrategy = "back";
    const o = oe(r.toString(), t.returnStrategy);
    le(o)
  } else if (Ve())
    if (xt("ios", "android", "macos", "tdesktop", "web")) {
      t.returnStrategy = "back";
      const o = oe(r.toString(), t.returnStrategy);
      Zr(o)
    } else xt("weba") ? Zr(oe(r.toString(), t)) : le(oe(r.toString(), t));
  else if (Pe("ios")) {
    t.returnStrategy === "back" && (z("safari") ? t.returnStrategy = "back" : z("chrome") ? t.returnStrategy = "googlechrome://" : z("firefox") ? t.returnStrategy = "firefox://" : z("opera") ? t.returnStrategy = "opera-http://" : t.returnStrategy = location.href);
    const o = z("chrome"),
      i = z("firefox");
    if ((o || i) && !t.forceRedirect) {
      const l = oe(r.toString(), t.returnStrategy),
        c = Pn(l);
      dt(c, () => le(l))
    } else {
      const l = oe(r.toString(), t.returnStrategy);
      le(l)
    }
  } else if (Pe("android")) {
    t.returnStrategy = "back";
    const o = z("chrome"),
      i = z("firefox");
    if ((o || i) && !t.forceRedirect) {
      const l = oe(r.toString(), t.returnStrategy),
        c = Pn(l);
      dt(c, () => le(l))
    } else {
      const l = oe(r.toString(), t.returnStrategy);
      le(l)
    }
  } else if (Pe("ipad")) {
    t.returnStrategy === "back" && (z("safari") ? t.returnStrategy = "back" : z("chrome") ? t.returnStrategy = "googlechrome://" : z("firefox") ? t.returnStrategy = "firefox://" : z("opera") ? t.returnStrategy = "opera-http://" : t.returnStrategy = location.href);
    const o = z("chrome"),
      i = z("firefox"),
      s = (o || i) && !t.forceRedirect,
      l = oe(r.toString(), t.returnStrategy);
    if (s) {
      const c = Pn(l);
      dt(c, () => le(l))
    } else le(l)
  } else if (Pe("macos", "windows", "linux")) {
    t.returnStrategy = "back", t.twaReturnUrl = void 0;
    const o = oe(r.toString(), t.returnStrategy);
    if (t.forceRedirect) le(o);
    else {
      const i = Pn(o);
      dt(i, () => le(o))
    }
  } else le(oe(r.toString(), t))
}

function En(e, t, n, r) {
  if (n = re({}, n), Es())
    if (Pe("ios", "android")) n.returnStrategy === "back" && (n.returnStrategy = "tg://resolve"), r("universal-link"), on(oe(e, n.returnStrategy), "_self");
    else {
      r("universal-link");
      const o = oe(e, n.returnStrategy);
      le(o)
    }
  else if (Ve())
    if (xt("ios", "android")) {
      n.returnStrategy === "back" && (n.returnStrategy = "tg://resolve"), r("universal-link");
      const o = oe(e, n.returnStrategy);
      Zr(o, () => {
        r("universal-link"), le(o)
      })
    } else if (xt("macos", "tdesktop")) {
    n.returnStrategy === "back" && (n.returnStrategy = "tg://resolve");
    const o = oe(e, n.returnStrategy);
    !!t && !n.forceRedirect ? (r("custom-deeplink"), dt(Mn(o, t), () => {
      r("universal-link"), le(o)
    })) : (r("universal-link"), le(o))
  } else if (xt("weba")) {
    n.returnStrategy === "back" && (z("safari") ? n.returnStrategy = location.href : z("chrome") ? n.returnStrategy = "googlechrome://" : z("firefox") ? n.returnStrategy = "firefox://" : z("opera") ? n.returnStrategy = "opera-http://" : n.returnStrategy = location.href);
    const o = oe(e, n.returnStrategy);
    !!t && !n.forceRedirect ? (r("custom-deeplink"), dt(Mn(o, t), () => {
      r("universal-link"), le(o)
    })) : (r("universal-link"), le(o))
  } else if (xt("web")) {
    n.returnStrategy === "back" && (z("safari") ? n.returnStrategy = location.href : z("chrome") ? n.returnStrategy = "googlechrome://" : z("firefox") ? n.returnStrategy = "firefox://" : z("opera") ? n.returnStrategy = "opera-http://" : n.returnStrategy = location.href);
    const o = oe(e, n.returnStrategy);
    !!t && !n.forceRedirect ? (r("custom-deeplink"), dt(Mn(o, t), () => {
      r("universal-link"), le(o)
    })) : (r("universal-link"), le(o))
  } else {
    r("universal-link");
    const o = oe(e, n.returnStrategy);
    le(o)
  } else if (Pe("ios")) n.returnStrategy === "back" && (z("safari") ? n.returnStrategy = "none" : z("chrome") ? n.returnStrategy = "googlechrome://" : z("firefox") ? n.returnStrategy = "firefox://" : z("opera") ? n.returnStrategy = "opera-http://" : n.returnStrategy = location.href), z("chrome") ? (r("universal-link"), on(oe(e, n.returnStrategy), "_self")) : (r("universal-link"), le(oe(e, n.returnStrategy)));
  else if (Pe("android")) n.returnStrategy === "back" && (z("chrome") ? n.returnStrategy = "googlechrome://" : z("firefox") ? n.returnStrategy = "firefox://" : z("opera") ? n.returnStrategy = "opera-http://" : n.returnStrategy = location.href), r("universal-link"), le(oe(e, n.returnStrategy));
  else if (Pe("ipad")) n.returnStrategy === "back" && (z("safari") ? n.returnStrategy = "none" : z("chrome") ? n.returnStrategy = "googlechrome://" : z("firefox") ? n.returnStrategy = "firefox://" : z("opera") ? n.returnStrategy = "opera-http://" : n.returnStrategy = location.href), z("chrome") ? (r("universal-link"), on(oe(e, n.returnStrategy), "_self")) : (r("universal-link"), le(oe(e, n.returnStrategy)));
  else if (Pe("macos", "windows", "linux")) {
    n.returnStrategy === "back" && (z("safari") ? n.returnStrategy = "none" : z("chrome") ? n.returnStrategy = "googlechrome://" : z("firefox") ? n.returnStrategy = "firefox://" : z("opera") ? n.returnStrategy = "opera-http://" : n.returnStrategy = "none");
    const o = oe(e, n.returnStrategy);
    !!t && !n.forceRedirect ? (r("custom-deeplink"), dt(Mn(o, t), () => {
      r("universal-link"), le(o)
    })) : (r("universal-link"), le(o))
  } else r("universal-link"), le(oe(e, n.returnStrategy))
}

function J1(e, t, n) {
  const r = new URL(e);
  return r.searchParams.append(t, n), r.toString()
}

function X1(e) {
  const t = new URL(e);
  return t.searchParams.has("attach") && (t.searchParams.delete("attach"), t.pathname += "/start"), t.toString()
}

function Pn(e) {
  const t = new URL(e),
    [, n, r] = t.pathname.split("/"),
    o = t.searchParams.get("startapp");
  return `tg://resolve?domain=${n}&appname=${r}&startapp=${o}`
}
const Ys = e => {
    const [t, n] = q("mobile"), [r, o] = q(!1), [i, s] = q(), [l, c] = q(!0), u = Ae(Gt), d = u.onStatusChange(() => {}, () => {
      e.wallet.appName !== ot && o(!0)
    });
    Ee(d);
    const f = () => {
      try {
        const H = u.connect({
          universalLink: e.wallet.universalLink,
          bridgeUrl: e.wallet.bridgeUrl
        }, e.additionalRequest);
        s(H)
      } catch {}
    };
    pe(() => {
      Ce(t) !== "extension" && (cn(e.wallet) || Si(e.wallet)) && f()
    });
    const v = () => {
        o(!1), t() === "extension" && f(), n("mobile"), Se(Te(re({}, e.wallet), {
          openMethod: "qrcode"
        }))
      },
      L = () => {
        if (o(!1), t() === "extension" && f(), n("desktop"), ft(i())) I();
        else {
          const H = !l();
          c(!1), En(i(), e.wallet.deepLink, {
            returnStrategy: te.returnStrategy,
            forceRedirect: H
          }, N => {
            Se(Te(re({}, e.wallet), {
              openMethod: N
            }))
          })
        }
      },
      I = () => {
        const H = !l();
        c(!1), Se(Te(re({}, e.wallet), {
          openMethod: "universal-link"
        })), _n(i(), {
          returnStrategy: te.returnStrategy,
          twaReturnUrl: te.twaReturnUrl,
          forceRedirect: H
        })
      },
      W = () => {
        o(!1), n("extension"), kt(e.wallet) && (Se(e.wallet), u.connect({
          jsBridgeKey: e.wallet.jsBridgeKey
        }, e.additionalRequest))
      };
    return cn(e.wallet) ? v() : ki(e.wallet) ? W() : L(), a(F1, {
      "data-tc-wallets-modal-connection-desktop": "true",
      get children() {
        return [a(G, {
          get when() {
            return !e.backDisabled
          },
          get children() {
            return a(q1, {
              icon: "arrow",
              onClick: () => e.onBackClick()
            })
          }
        }), a(K1, {
          get children() {
            return e.wallet.name
          }
        }), a(G, {
          get when() {
            return t() === "mobile"
          },
          get children() {
            return a(V1, {
              translationKey: "walletModal.desktopConnectionModal.scanQR",
              get translationValues() {
                return {
                  name: e.wallet.name
                }
              },
              get children() {
                return ["Scan the QR code below with your phone’s or ", P(() => e.wallet.name), "’s camera"]
              }
            })
          }
        }), a(O1, {
          get qr() {
            return t() === "mobile"
          },
          get children() {
            return a(yn, {
              get children() {
                return [a(be, {
                  get when() {
                    return t() === "mobile"
                  },
                  get children() {
                    return a(j1, {
                      disableCopy: !1,
                      get sourceUrl() {
                        return oe(i(), "none")
                      },
                      get imageUrl() {
                        return e.wallet.imageUrl
                      }
                    })
                  }
                }), a(be, {
                  get when() {
                    return r()
                  },
                  get children() {
                    return [a(Q1, {
                      size: "s"
                    }), a(Wn, {
                      translationKey: "walletModal.desktopConnectionModal.connectionDeclined",
                      children: "Connection declined"
                    }), a(en, {
                      get children() {
                        return a(he, {
                          get leftIcon() {
                            return a(sn, {})
                          },
                          get onClick() {
                            return t() === "extension" ? W : L
                          },
                          get children() {
                            return a(ye, {
                              translationKey: "common.retry",
                              children: "Retry"
                            })
                          }
                        })
                      }
                    })]
                  }
                }), a(be, {
                  get when() {
                    return t() === "extension"
                  },
                  get children() {
                    return [a(G, {
                      get when() {
                        return kt(e.wallet)
                      },
                      get children() {
                        return [a(G1, {
                          size: "s"
                        }), a(Wn, {
                          translationKey: "walletModal.desktopConnectionModal.continueInExtension",
                          get translationValues() {
                            return {
                              name: e.wallet.name
                            }
                          },
                          get children() {
                            return ["Continue in ", P(() => e.wallet.name), " browser extension…"]
                          }
                        }), a(en, {
                          get children() {
                            return a(he, {
                              get leftIcon() {
                                return a(sn, {})
                              },
                              onClick: W,
                              get children() {
                                return a(ye, {
                                  translationKey: "common.retry",
                                  children: "Retry"
                                })
                              }
                            })
                          }
                        })]
                      }
                    }), a(G, {
                      get when() {
                        return !kt(e.wallet)
                      },
                      get children() {
                        return [a(Wn, {
                          translationKey: "walletModal.desktopConnectionModal.dontHaveExtension",
                          get translationValues() {
                            return {
                              name: e.wallet.name
                            }
                          },
                          get children() {
                            return ["Seems you don't have installed ", P(() => e.wallet.name), " browser extension"]
                          }
                        }), a(en, {
                          get children() {
                            return a(rr, {
                              get href() {
                                return e.wallet.aboutUrl
                              },
                              blank: !0,
                              get children() {
                                return a(he, {
                                  get rightIcon() {
                                    return a(di, {})
                                  },
                                  onClick: W,
                                  get children() {
                                    return a(ye, {
                                      translationKey: "walletModal.desktopConnectionModal.getWallet",
                                      get translationValues() {
                                        return {
                                          name: e.wallet.name
                                        }
                                      },
                                      get children() {
                                        return ["Get ", P(() => e.wallet.name)]
                                      }
                                    })
                                  }
                                })
                              }
                            })
                          }
                        })]
                      }
                    })]
                  }
                }), a(be, {
                  get when() {
                    return t() === "desktop"
                  },
                  get children() {
                    return [a(lt, {
                      size: "m"
                    }), a(Wn, {
                      translationKey: "walletModal.desktopConnectionModal.continueOnDesktop",
                      get translationValues() {
                        return {
                          name: e.wallet.name
                        }
                      },
                      get children() {
                        return ["Continue in ", P(() => e.wallet.name), " on desktop…"]
                      }
                    }), a(en, {
                      get children() {
                        return [a(he, {
                          get leftIcon() {
                            return a(sn, {})
                          },
                          onClick: L,
                          get children() {
                            return a(ye, {
                              translationKey: "common.retry",
                              children: "Retry"
                            })
                          }
                        }), a(rr, {
                          get href() {
                            return e.wallet.aboutUrl
                          },
                          blank: !0,
                          get children() {
                            return a(he, {
                              get rightIcon() {
                                return a(di, {})
                              },
                              get children() {
                                return a(ye, {
                                  translationKey: "walletModal.desktopConnectionModal.getWallet",
                                  get translationValues() {
                                    return {
                                      name: e.wallet.name
                                    }
                                  },
                                  get children() {
                                    return ["Get ", P(() => e.wallet.name)]
                                  }
                                })
                              }
                            })
                          }
                        })]
                      }
                    })]
                  }
                })]
              }
            })
          }
        }), a(G, {
          get when() {
            return e.wallet.appName === ot
          },
          get children() {
            return a(z1, {
              get rightIcon() {
                return a(Y1, {
                  get src() {
                    return kn.TG
                  }
                })
              },
              scale: "s",
              onClick: I,
              get children() {
                return a(ye, {
                  translationKey: "walletModal.desktopConnectionModal.openWalletOnTelegram",
                  children: "Open Wallet in Telegram on desktop"
                })
              }
            })
          }
        }), a(G, {
          get when() {
            return e.wallet.appName !== ot
          },
          get children() {
            return a(Z1, {
              get children() {
                return [a(G, {
                  get when() {
                    return P(() => t() !== "mobile")() && cn(e.wallet)
                  },
                  get children() {
                    return a(Tr, {
                      appearance: "secondary",
                      get leftIcon() {
                        return a(o0, {})
                      },
                      onClick: v,
                      get children() {
                        return a(ye, {
                          translationKey: "common.mobile",
                          children: "Mobile"
                        })
                      }
                    })
                  }
                }), a(G, {
                  get when() {
                    return P(() => t() !== "extension")() && ki(e.wallet)
                  },
                  get children() {
                    return a(Tr, {
                      appearance: "secondary",
                      get leftIcon() {
                        return a(n0, {})
                      },
                      onClick: W,
                      get children() {
                        return a(ye, {
                          translationKey: "common.browserExtension",
                          children: "Browser Extension"
                        })
                      }
                    })
                  }
                }), a(G, {
                  get when() {
                    return P(() => t() !== "desktop")() && Si(e.wallet)
                  },
                  get children() {
                    return a(Tr, {
                      appearance: "secondary",
                      get leftIcon() {
                        return a(s0, {})
                      },
                      onClick: L,
                      get children() {
                        return a(ye, {
                          translationKey: "common.desktop",
                          children: "Desktop"
                        })
                      }
                    })
                  }
                })]
              }
            })
          }
        })]
      }
    })
  },
  ed = w.div``,
  td = w(Tt)`
    position: absolute;
    top: 16px;
    left: 16px;
`,
  nd = w(ze)`
    margin-bottom: 18px;
`,
  Mr = w.div`
    padding: 16px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`,
  Rr = it`
    margin-bottom: 12px;
`,
  Ir = w(Co)`
    text-align: center;
    margin-bottom: 4px;
`,
  Br = w(Me)`
    text-align: center;
    max-width: 352px;
    color: ${e=>e.theme.colors.text.secondary};
`,
  rd = w.div`
    padding: 16px 24px 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
`,
  od = {
    GET_A_WALLET: "https://ton.org/wallets?filters[wallet_features][slug][$in]=dapp-auth&pagination[limit]=-1"
  },
  Js = e => a(ed, {
    "data-tc-wallets-modal-info": "true",
    get children() {
      return [a(td, {
        icon: "arrow",
        onClick: () => e.onBackClick()
      }), a(nd, {
        translationKey: "walletModal.infoModal.whatIsAWallet",
        children: "What is a wallet"
      }), a(Hs, {
        get children() {
          return [a(Mr, {
            get children() {
              return [a(f0, {
                class: Rr
              }), a(Ir, {
                translationKey: "walletModal.infoModal.secureDigitalAssets",
                children: "Secure digital assets storage"
              }), a(Br, {
                translationKey: "walletModal.infoModal.walletProtects",
                children: "A wallet protects and manages your digital assets including TON, tokens and collectables."
              })]
            }
          }), a(Mr, {
            get children() {
              return [a(g0, {
                class: Rr
              }), a(Ir, {
                translationKey: "walletModal.infoModal.controlIdentity",
                children: "Control your Web3 identity"
              }), a(Br, {
                translationKey: "walletModal.infoModal.manageIdentity",
                children: "Manage your digital identity and access decentralized applications with ease. Maintain control over your data and engage securely in the blockchain ecosystem."
              })]
            }
          }), a(Mr, {
            get children() {
              return [a(v0, {
                class: Rr
              }), a(Ir, {
                translationKey: "walletModal.infoModal.effortlessCryptoTransactions",
                children: "Effortless crypto transactions"
              }), a(Br, {
                translationKey: "walletModal.infoModal.easilySend",
                children: "Easily send, receive, monitor your cryptocurrencies. Streamline your operations with decentralized applications."
              })]
            }
          }), a(rd, {
            get children() {
              return a(rr, {
                get href() {
                  return od.GET_A_WALLET
                },
                blank: !0,
                get children() {
                  return a(he, {
                    get rightIcon() {
                      return a(u0, {})
                    },
                    get children() {
                      return a(ye, {
                        translationKey: "walletModal.infoModal.getAWallet",
                        children: "Get a Wallet"
                      })
                    }
                  })
                }
              })
            }
          })]
        }
      })]
    }
  }),
  id = w.div``,
  sd = w.div`
    flex: 1;
    margin-top: 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 232px;
`,
  ld = w(ze)`
    max-width: 262px;
    margin: 0 auto 8px;
`,
  ad = w(Tt)`
    position: absolute;
    top: 16px;
    left: 16px;
`,
  cd = w.div`
    padding: 16px;
    display: flex;
    align-items: center;
    gap: 12px;
    border-top: 0.5px solid ${e=>Cn(e.theme.colors.icon.secondary,.2)};
`,
  ud = w($t)`
    width: 36px;
    height: 36px;
    border-radius: 10px;
`,
  dd = w(rr)`
    margin-left: auto;
`,
  fd = w(lt)`
    margin-bottom: 18px;
    margin-top: 2px;
`,
  hd = w(wr)`
    margin-bottom: 16px;
`,
  _i = w(pt)`
    color: ${e=>e.theme.colors.text.secondary};
    text-align: center;
    margin-bottom: 20px;
`,
  Ei = w.div`
    display: flex;
    justify-content: center;
    gap: 8px;
    padding-bottom: 16px;
`,
  gd = w(ze)`
    margin-bottom: 2px;
    padding: 0 64px;
`,
  md = w(pt)`
    margin-bottom: 20px;
    padding: 0 64px;
    min-height: 44px;
`,
  vd = w.div`
    padding: 0 24px 24px;
`,
  wd = e => [a(gd, {
    get children() {
      return e.walletInfo.name
    }
  }), a(md, {
    translationKey: "walletModal.mobileConnectionModal.scanQR",
    get translationValues() {
      return {
        name: e.walletInfo.name
      }
    },
    get children() {
      return ["Scan the QR code below with your phone’s or ", P(() => e.walletInfo.name), "’s camera"]
    }
  }), a(vd, {
    get children() {
      return a(vr, {
        get imageUrl() {
          return e.walletInfo.imageUrl
        },
        get sourceUrl() {
          return oe(e.universalLink, "none")
        },
        disableCopy: !0
      })
    }
  })],
  Xs = e => {
    const t = ie(),
      [n, r] = q(!0),
      [o, i] = q(!1),
      [s, l] = q(!1),
      c = Ae(Gt),
      u = c.onStatusChange(() => {}, () => {
        l(!0)
      }),
      d = P(() => c.connect({
        universalLink: e.wallet.universalLink,
        bridgeUrl: e.wallet.bridgeUrl
      }, e.additionalRequest)),
      f = () => {
        Se(Te(re({}, e.wallet), {
          openMethod: "universal-link"
        })), _n(d(), {
          returnStrategy: te.returnStrategy,
          twaReturnUrl: te.twaReturnUrl,
          forceRedirect: !0
        })
      },
      v = () => {
        const H = d();
        if (ft(H)) return f();
        l(!1);
        const N = !n();
        r(!1), En(d(), e.wallet.deepLink, {
          returnStrategy: te.returnStrategy,
          forceRedirect: N
        }, A => {
          Se(Te(re({}, e.wallet), {
            openMethod: A
          }))
        })
      },
      L = () => {
        l(!1), i(!0), Se(Te(re({}, e.wallet), {
          openMethod: "qrcode"
        }))
      },
      I = () => {
        i(!1), Se(Te(re({}, e.wallet), {
          openMethod: "universal-link"
        }))
      },
      W = () => {
        o() ? I() : e.onBackClick()
      };
    return Ee(u), v(), a(id, {
      "data-tc-wallets-modal-connection-mobile": "true",
      get children() {
        return [a(G, {
          get when() {
            return !e.backDisabled || o()
          },
          get children() {
            return a(ad, {
              icon: "arrow",
              onClick: W
            })
          }
        }), a(G, {
          get when() {
            return o()
          },
          get children() {
            return a(wd, {
              get universalLink() {
                return d()
              },
              get walletInfo() {
                return e.wallet
              }
            })
          }
        }), a(G, {
          get when() {
            return !o()
          },
          get children() {
            return [a(ld, {
              get children() {
                return e.wallet.name
              }
            }), a(sd, {
              get children() {
                return [a(G, {
                  get when() {
                    return s()
                  },
                  get children() {
                    return [a(hd, {
                      size: "s"
                    }), a(_i, {
                      translationKey: "walletModal.mobileConnectionModal.connectionDeclined",
                      children: "Connection declined"
                    }), a(Ei, {
                      get children() {
                        return [a(he, {
                          get leftIcon() {
                            return a(sn, {})
                          },
                          onClick: v,
                          get children() {
                            return a(ye, {
                              translationKey: "common.retry",
                              children: "Retry"
                            })
                          }
                        }), a(he, {
                          get leftIcon() {
                            return a(zr, {
                              get fill() {
                                return t.colors.accent
                              }
                            })
                          },
                          onClick: L,
                          get children() {
                            return a(ye, {
                              translationKey: "walletModal.mobileConnectionModal.showQR",
                              children: "Show QR Code"
                            })
                          }
                        })]
                      }
                    })]
                  }
                }), a(G, {
                  get when() {
                    return !s()
                  },
                  get children() {
                    return [a(fd, {
                      size: "s"
                    }), a(_i, {
                      translationKey: "walletModal.mobileConnectionModal.continueIn",
                      get translationValues() {
                        return {
                          name: e.wallet.name
                        }
                      },
                      get children() {
                        return ["Continue in ", P(() => e.wallet.name), "…"]
                      }
                    }), a(Ei, {
                      get children() {
                        return [a(he, {
                          get leftIcon() {
                            return a(sn, {})
                          },
                          onClick: v,
                          get children() {
                            return a(ye, {
                              translationKey: "common.retry",
                              children: "Retry"
                            })
                          }
                        }), a(he, {
                          get leftIcon() {
                            return a(zr, {
                              get fill() {
                                return t.colors.accent
                              }
                            })
                          },
                          onClick: L,
                          get children() {
                            return a(ye, {
                              translationKey: "walletModal.mobileConnectionModal.showQR",
                              children: "Show QR Code"
                            })
                          }
                        })]
                      }
                    })]
                  }
                })]
              }
            }), a(cd, {
              get children() {
                return [a(ud, {
                  get src() {
                    return e.wallet.imageUrl
                  }
                }), a(Co, {
                  get children() {
                    return e.wallet.name
                  }
                }), a(dd, {
                  get href() {
                    return e.wallet.aboutUrl
                  },
                  blank: !0,
                  get children() {
                    return a(he, {
                      get children() {
                        return a(ye, {
                          translationKey: "common.get",
                          children: "GET"
                        })
                      }
                    })
                  }
                })]
              }
            })]
          }
        })]
      }
    })
  },
  el = {
    m: "16px",
    s: "12px",
    none: "0"
  },
  pd = {
    m: "6px",
    s: "6px",
    none: "0"
  },
  yd = w.ul`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: fit-content;
    max-width: 100%;
    min-width: 100%;
    height: fit-content;
    overflow-x: auto;
    overflow-y: hidden;
    padding: 0 13px 24px;

    &&::-webkit-scrollbar {
        display: none;
    }

    -ms-overflow-style: none;
    scrollbar-width: none;

    > li {
        height: fit-content;
    }
`,
  Ai = w.li`
    width: 82px;
    min-width: 82px;
    height: 124px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px 4px;

    text-align: center;
    cursor: pointer;

    transition: transform 0.1s ease-in-out;

    ${xn} {
        &:hover {
            transform: scale(1.04);
        }
    }

    &:active {
        transform: scale(0.96);
    }

    ${bn} {
        &:active {
            transform: scale(0.92);
        }
    }
`,
  Cd = w.div`
    width: 1px;
    margin: 0 10px;
    height: 24px;
    position: relative;
    top: 26px;

    background-color: ${e=>e.theme.colors.icon.secondary};
    opacity: 0.2;
`,
  Li = w.div`
    width: 60px;
    height: 60px;
    border-radius: ${e=>el[e.theme.borderRadius]};
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${e=>e.theme.colors.background.tint};
    margin-bottom: 8px;
`,
  bd = w(ze)`
    margin-top: 38px;
    margin-bottom: 4px;
    padding: 0 24px;
`,
  xd = w(pt)`
    margin-bottom: 24px;
    padding: 0 24px;
    min-height: 44px;
    max-width: ${e=>e.maxWidth}px;
    margin-left: ${e=>e.maxWidth?"auto":"0px"};
    margin-right: ${e=>e.maxWidth?"auto":"0px"};
`;
w(he)`
    display: block;
    margin: 0 auto;
`;
const Sd = w(he)`
    margin: 0 24px 24px;
    width: calc(100% - 48px);
    border-radius: ${e=>el[e.theme.borderRadius]};
    padding: 14px 16px 14px 14px;
    background-color: ${e=>e.theme.colors.telegramButton};

    color: ${e=>e.theme.colors.constant.white};
    font-weight: 510;
    font-size: 16px;
    line-height: 20px;
`,
  kd = w($t)`
    background-color: transparent;
    border-radius: ${e=>pd[e.theme.borderRadius]};
    width: 24px;
    height: 24px;
`,
  $i = w(Tt)`
    position: absolute;
    top: 16px;
    left: 16px;
`,
  _d = w(ze)`
    margin-bottom: 2px;
    padding: 0 64px;
`,
  Ed = w(pt)`
    margin-bottom: 20px;
    padding: 0 64px;
`,
  Ad = w.div`
    padding: 0 24px 24px;
`,
  Ld = e => [a(_d, {
    translationKey: "walletModal.mobileUniversalModal.connectYourWallet",
    children: "Connect your wallet"
  }), a(Ed, {
    translationKey: "walletModal.mobileUniversalModal.scan",
    children: "Scan with your mobile wallet"
  }), a(Ad, {
    get children() {
      return a(vr, {
        get imageUrl() {
          return kn.TON
        },
        get sourceUrl() {
          return oe(e.universalLink, "none")
        },
        disableCopy: !0
      })
    }
  })];

function tl(e) {
  const t = new Set(e.filter(ro).map(n => n.bridgeUrl));
  return Array.from(t).map(n => ({
    bridgeUrl: n
  }))
}

function nl(e, t) {
  const n = new Set(e == null ? void 0 : e.map(o => o.bridgeUrl)),
    r = new Set(t == null ? void 0 : t.map(o => o.bridgeUrl));
  return n.size === r.size && [...n].every(o => r.has(o))
}
const Ti = J("<li></li>"),
  $d = J('<div data-tc-wallets-modal-universal-mobile="true"></div>'),
  Td = e => {
    const [t, n] = q(!1), [r, o] = q(!0), [i, s] = q(null), l = te.connector, c = () => e.walletsList.filter(B => cn(B) && B.appName !== ot), u = () => c().length > 7, d = P(() => tl(e.walletsList), null, {
      equals: nl
    }), f = () => (i() || s(l.connect(d(), e.additionalRequest)), i());
    Se({
      openMethod: "universal-link"
    });
    const [v, L] = q(void 0), I = () => ne(void 0, null, function*() {
      v() !== void 0 && clearTimeout(v()), yield yo(f());
      const B = setTimeout(() => L(void 0), 1500);
      L(B)
    }), W = () => {
      const B = !r();
      o(!1), En(f(), void 0, {
        returnStrategy: te.returnStrategy,
        forceRedirect: B
      }, F => {
        Se({
          openMethod: F
        })
      })
    }, H = () => {
      s(null);
      const B = e.walletsList.find(M => M.appName === ot);
      if (!B || !ro(B)) throw new fe("@wallet bot not found in the wallets list");
      const F = l.connect({
          bridgeUrl: B.bridgeUrl,
          universalLink: B.universalLink
        }, e.additionalRequest),
        b = !r();
      o(!1), _n(F, {
        returnStrategy: te.returnStrategy,
        twaReturnUrl: te.twaReturnUrl,
        forceRedirect: b
      })
    }, N = () => {
      n(!0), Se({
        openMethod: "qrcode"
      })
    }, A = () => {
      n(!1), Se({
        openMethod: "universal-link"
      })
    };
    return (() => {
      const B = $d.cloneNode(!0);
      return xe(B, a(G, {
        get when() {
          return t()
        },
        get children() {
          return [a($i, {
            icon: "arrow",
            onClick: A
          }), a(Ld, {
            get universalLink() {
              return f()
            }
          })]
        }
      }), null), xe(B, a(G, {
        get when() {
          return !t()
        },
        get children() {
          return [a($i, {
            get icon() {
              return a(zr, {})
            },
            onClick: N
          }), a(bd, {
            translationKey: "walletModal.mobileUniversalModal.connectYourWallet",
            children: "Connect your wallet"
          }), a(xd, {
            translationKey: "walletModal.mobileUniversalModal.openWalletOnTelegramOrSelect",
            maxWidth: 342,
            children: "Open Wallet in Telegram or select your wallet to connect"
          }), a(Sd, {
            get leftIcon() {
              return a(p0, {})
            },
            get rightIcon() {
              return a(kd, {
                get src() {
                  return kn.TG
                }
              })
            },
            onClick: H,
            scale: "s",
            get children() {
              return a(ye, {
                translationKey: "walletModal.mobileUniversalModal.openWalletOnTelegram",
                children: "Open Wallet in Telegram"
              })
            }
          }), a(yd, {
            get children() {
              return [a(pn, {
                get each() {
                  return P(() => !!u())() ? c().slice(0, 4) : c()
                },
                children: F => (() => {
                  const b = Ti.cloneNode(!0);
                  return xe(b, a(tr, {
                    get icon() {
                      return F.imageUrl
                    },
                    get name() {
                      return F.name
                    },
                    onClick: () => e.onSelect(F)
                  })), b
                })()
              }), a(G, {
                get when() {
                  return u()
                },
                get children() {
                  const F = Ti.cloneNode(!0);
                  return xe(F, a(Ds, {
                    labelLine1: "View all",
                    labelLine2: "wallets",
                    get images() {
                      return c().slice(3, 7).map(b => b.imageUrl)
                    },
                    onClick: () => e.onSelectAllWallets()
                  })), F
                }
              }), a(Cd, {
                children: " "
              }), a(Ai, {
                onClick: W,
                get children() {
                  return [a(Li, {
                    get children() {
                      return a(Nu, {})
                    }
                  }), a(Me, {
                    fontWeight: 590,
                    translationKey: "walletModal.mobileUniversalModal.openLink",
                    children: "Open Link"
                  })]
                }
              }), a(Ai, {
                onClick: I,
                get children() {
                  return [a(Li, {
                    get children() {
                      return P(() => v() !== void 0)() ? a(C0, {}) : a(Us, {})
                    }
                  }), a(Me, {
                    fontWeight: 590,
                    get translationKey() {
                      return v() !== void 0 ? "common.copied" : "common.copyLink"
                    },
                    get children() {
                      return v() !== void 0 ? "Copied" : "Copy Link"
                    }
                  })]
                }
              })]
            }
          })]
        }
      }), null), B
    })()
  },
  rl = {
    m: "16px",
    s: "8px",
    none: "0"
  },
  Md = {
    m: "8px",
    s: "4px",
    none: "0"
  },
  Rd = w.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 16px;
`,
  Id = w(pt)`
    max-width: 320px;
    margin-top: 2px;
    margin-bottom: 20px;
`,
  Bd = w(pt)`
    margin-bottom: 16px;
`,
  Wd = w(vr)`
    margin-bottom: 24px;
`,
  Pd = w.ul`
    display: flex;
`;
w.div`
    display: flex;
    gap: 16px;
    width: 100%;
`;
w(he)`
    position: relative;
    font-size: 16px;
    line-height: 20px;
    width: 100%;
    padding: 0 16px;
    height: 56px;
    border-radius: ${e=>rl[e.theme.borderRadius]};

    &:hover {
        ${e=>e.disableEventsAnimation?"transform: unset;":""}
    }

    &:active {
        ${e=>e.disableEventsAnimation?"transform: unset;":""}
    }
`;
w.ul`
    position: absolute;
    bottom: 100%;
    left: 0;
    margin: 0;
    padding: 8px;
    width: 188px;
    transform: translateY(-16px);

    background-color: ${e=>e.theme.colors.background.primary};
    border-radius: ${e=>rl[e.theme.borderRadius]};
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.16);
`;
w.li`
    padding: 8px;

    display: flex;
    align-items: center;
    gap: 8px;

    cursor: pointer;
    border-radius: ${e=>Md[e.theme.borderRadius]};

    transition: background-color, transform 0.1s ease-in-out;

    &:hover {
        background-color: ${e=>e.theme.colors.background.secondary};
    }

    &:active {
        transform: scale(0.96);
    }
`;
w($t)`
    width: 24px;
    height: 24px;

    border-radius: 6px;
`;
w.div`
    margin-top: 23px;
    margin-bottom: 1px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
w(Me)`
    color: ${e=>e.theme.colors.text.secondary};
    font-size: 16px;
`;
const Ud = J("<li></li>"),
  Dd = e => {
    const [t, n] = q(!1), r = te.connector, o = P(() => tl(e.walletsList), null, {
      equals: nl
    });
    Se({
      openMethod: "qrcode"
    });
    const i = P(() => r.connect(o(), e.additionalRequest));
    return a(Rd, {
      onClick: () => n(!1),
      "data-tc-wallets-modal-universal-desktop": "true",
      get children() {
        return [a(ze, {
          translationKey: "walletModal.desktopUniversalModal.connectYourWallet",
          children: "Connect your wallet"
        }), a(Id, {
          translationKey: "walletModal.desktopUniversalModal.scan",
          children: "Scan with your mobile wallet"
        }), a(Wd, {
          get sourceUrl() {
            return oe(i(), "none")
          },
          get disableCopy() {
            return t()
          },
          get imageUrl() {
            return kn.TON
          }
        }), a(Bd, {
          translationKey: "walletModal.desktopUniversalModal.availableWallets",
          children: "Available wallets"
        }), a(Pd, {
          get children() {
            return [a(pn, {
              get each() {
                return e.walletsList.slice(0, 3)
              },
              children: s => (() => {
                const l = Ud.cloneNode(!0);
                return xe(l, a(Ns, {
                  wallet: s,
                  onClick: () => e.onSelect(s)
                })), l
              })()
            }), a(Ds, {
              labelLine1: "View all",
              labelLine2: "wallets",
              get images() {
                return e.walletsList.slice(3, 7).map(s => s.imageUrl)
              },
              onClick: () => e.onSelectAllWallets()
            })]
          }
        })]
      }
    })
  },
  Nd = () => {
    const {
      locale: e
    } = Qe()[1];
    pe(() => e(te.language)), pe(() => {
      ni() ? nr() : (i(null), l("universal"), u(!1))
    });
    const t = Ae(Gt),
      n = Ae(yt),
      [r] = ia(() => n.getWallets()),
      [o, i] = q(null),
      [s, l] = q("universal"),
      [c, u] = q(!1),
      d = P(() => {
        if (r.state !== "ready") return null;
        let A = _o(r(), te.walletsListConfiguration);
        const B = A.filter(kt),
          F = A.filter(g => !kt(g));
        A = (B || []).concat(F);
        const b = te.preferredWalletAppName,
          M = A.find(g => ut(g, b)),
          C = A.filter(g => ut(g, b)).length >= 2;
        b && M && !C && (A = [Te(re({}, M), {
          isPreferred: !0
        })].concat(A.filter(g => !ut(g, b))));
        const p = A.find(g => ut(g, ot));
        return p && (A = [p].concat(A.filter(g => !ut(g, ot)))), A
      }),
      f = () => {
        var A;
        return ((A = te.connectRequestParameters) == null ? void 0 : A.state) === "loading"
      },
      v = P(() => {
        var A;
        if (!f()) return (A = te.connectRequestParameters) == null ? void 0 : A.value
      }),
      L = A => {
        n.closeModal(A)
      },
      I = t.onStatusChange(A => {
        A && L("wallet-selected")
      }),
      W = () => {
        l("all-wallets")
      },
      H = () => {
        l("universal")
      },
      N = () => {
        i(null)
      };
    return Ee(() => {
      i(null), u(!1)
    }), Ee(I), a(Gs, {
      get opened() {
        return ni()
      },
      get enableAndroidBackHandler() {
        return te.enableAndroidBackHandler
      },
      onClose: () => L("action-cancelled"),
      onClickQuestion: () => u(A => !A),
      "data-tc-wallets-modal-container": "true",
      get children() {
        return [a(G, {
          get when() {
            return c()
          },
          get children() {
            return a(Js, {
              onBackClick: () => u(!1)
            })
          }
        }), a(G, {
          get when() {
            return !c()
          },
          get children() {
            return [a(G, {
              get when() {
                return f() || !d()
              },
              get children() {
                return [a(Qs, {
                  translationKey: "walletModal.loading",
                  children: "Wallets list is loading"
                }), a(zs, {
                  get children() {
                    return a(lt, {
                      size: "m"
                    })
                  }
                })]
              }
            }), a(G, {
              get when() {
                return P(() => !f())() && d()
              },
              get children() {
                return a(yn, {
                  get children() {
                    return [a(be, {
                      get when() {
                        return o()
                      },
                      get children() {
                        return a(Ot, {
                          get component() {
                            return Vt() ? Xs : Ys
                          },
                          get wallet() {
                            return o()
                          },
                          get additionalRequest() {
                            return v()
                          },
                          onBackClick: N
                        })
                      }
                    }), a(be, {
                      get when() {
                        return s() === "universal"
                      },
                      get children() {
                        return a(Ot, {
                          get component() {
                            return Vt() ? Td : Dd
                          },
                          onSelect: i,
                          get walletsList() {
                            return d()
                          },
                          get additionalRequest() {
                            return v()
                          },
                          onSelectAllWallets: W
                        })
                      }
                    }), a(be, {
                      get when() {
                        return s() === "all-wallets"
                      },
                      get children() {
                        return a(D1, {
                          get walletsList() {
                            return d()
                          },
                          onBack: H,
                          onSelect: i
                        })
                      }
                    })]
                  }
                })
              }
            })]
          }
        })]
      }
    })
  },
  Hd = w.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 8px;
`,
  Fd = w(ze)`
    margin-top: 16px;
`,
  Od = w(Me)`
    font-weight: 510;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    max-width: 250px;

    color: ${e=>e.theme.colors.text.secondary};
`,
  jd = w(he)`
    min-width: 112px;
    margin-top: 32px;
`,
  Kd = w(lt)`
    height: 16px;
    width: 16px;
`,
  Mi = w(he)`
    margin-top: 32px;
`,
  Eo = e => {
    const t = Sn(e),
      n = Ae(yt),
      [r, o] = q(!0),
      [i, s] = q(!1);
    pe(() => {
      const d = tt();
      s(!!d && "sent" in d && d.sent)
    });
    let l;
    n != null && n.wallet && "universalLink" in n.wallet && (n.wallet.openMethod === "universal-link" || ft(n.wallet.universalLink) && Ve()) && (l = n.wallet.universalLink);
    let c;
    n != null && n.wallet && "deepLink" in n.wallet && (n.wallet.openMethod === "custom-deeplink" || ft(n.wallet.deepLink) && Ve()) && (c = n.wallet.deepLink);
    const u = () => {
      const d = tt(),
        f = "returnStrategy" in d ? d.returnStrategy : te.returnStrategy,
        v = !r();
      o(!1), ft(l) ? _n(l, {
        returnStrategy: f,
        twaReturnUrl: "twaReturnUrl" in d ? d.twaReturnUrl : te.twaReturnUrl,
        forceRedirect: v
      }) : En(l, c, {
        returnStrategy: f,
        forceRedirect: v
      }, () => {})
    };
    return a(Hd, je(t, {
      get children() {
        return [P(() => e.icon), a(Fd, {
          get translationKey() {
            return e.headerTranslationKey
          },
          get translationValues() {
            return e.headerTranslationValues
          }
        }), a(Od, {
          get translationKey() {
            return e.textTranslationKey
          },
          get translationValues() {
            return e.textTranslationValues
          }
        }), a(G, {
          get when() {
            return !i() && (e.showButton === "open-wallet" && l || e.showButton !== "open-wallet")
          },
          get children() {
            return a(jd, {
              disabled: !0,
              "data-tc-connect-button-loading": "true",
              get children() {
                return a(Kd, {})
              }
            })
          }
        }), a(G, {
          get when() {
            return i()
          },
          get children() {
            return [a(G, {
              get when() {
                return e.showButton !== "open-wallet"
              },
              get children() {
                return a(Mi, {
                  onClick: () => e.onClose(),
                  get children() {
                    return a(ye, {
                      translationKey: "common.close",
                      children: "Close"
                    })
                  }
                })
              }
            }), a(G, {
              get when() {
                return e.showButton === "open-wallet" && l
              },
              get children() {
                return a(Mi, {
                  onClick: u,
                  get children() {
                    return a(ye, {
                      translationKey: "common.openWallet",
                      children: "Open wallet"
                    })
                  }
                })
              }
            })]
          }
        })]
      }
    }))
  },
  Vd = e => {
    const t = Ae(yt),
      [n] = Qe(),
      r = () => t.wallet && "name" in t.wallet ? t.wallet.name : n("common.yourWallet", {}, "Your wallet");
    return a(Eo, {
      headerTranslationKey: "actionModal.confirmTransaction.header",
      get headerTranslationValues() {
        return {
          name: r()
        }
      },
      textTranslationKey: "actionModal.confirmTransaction.text",
      get icon() {
        return a(lt, {
          size: "m"
        })
      },
      onClose: () => e.onClose(),
      showButton: "open-wallet",
      "data-tc-confirm-modal": "true"
    })
  },
  qd = e => a(Eo, {
    headerTranslationKey: "actionModal.transactionCanceled.header",
    textTranslationKey: "actionModal.transactionCanceled.text",
    get icon() {
      return a(wr, {
        size: "m"
      })
    },
    onClose: () => e.onClose(),
    "data-tc-transaction-canceled-modal": "true"
  }),
  Zd = e => a(Eo, {
    headerTranslationKey: "actionModal.transactionSent.header",
    textTranslationKey: "actionModal.transactionSent.text",
    get icon() {
      return a(bo, {
        size: "m"
      })
    },
    onClose: () => e.onClose(),
    "data-tc-transaction-sent-modal": "true"
  }),
  Gd = () => a(Rs, {
    get opened() {
      var e;
      return P(() => tt() !== null)() && ((e = tt()) == null ? void 0 : e.openModal) === !0
    },
    get enableAndroidBackHandler() {
      return te.enableAndroidBackHandler
    },
    onClose: () => Ut(null),
    "data-tc-actions-modal-container": "true",
    get children() {
      return a(yn, {
        get children() {
          return [a(be, {
            get when() {
              return tt().name === "transaction-sent"
            },
            get children() {
              return a(Zd, {
                onClose: () => Ut(null)
              })
            }
          }), a(be, {
            get when() {
              return tt().name === "transaction-canceled"
            },
            get children() {
              return a(qd, {
                onClose: () => Ut(null)
              })
            }
          }), a(be, {
            get when() {
              return tt().name === "confirm-transaction"
            },
            get children() {
              return a(Vd, {
                onClose: () => Ut(null)
              })
            }
          })]
        }
      })
    }
  }),
  Qd = () => {
    const {
      locale: e
    } = Qe()[1];
    pe(() => e(te.language)), pe(() => {
      oi() && nr()
    });
    const t = Ae(Gt),
      n = Ae(yt),
      [r, o] = q(!1),
      i = () => {
        var u;
        return ((u = te.connectRequestParameters) == null ? void 0 : u.state) === "loading"
      },
      s = P(() => {
        var u;
        if (!i()) return (u = te.connectRequestParameters) == null ? void 0 : u.value
      }),
      l = u => {
        n.closeSingleWalletModal(u)
      },
      c = t.onStatusChange(u => {
        u && l("wallet-selected")
      });
    return Ee(c), Ee(() => {
      o(!1)
    }), a(Gs, {
      get opened() {
        return oi()
      },
      get enableAndroidBackHandler() {
        return te.enableAndroidBackHandler
      },
      onClose: () => l("action-cancelled"),
      onClickQuestion: () => o(u => !u),
      "data-tc-wallets-modal-container": "true",
      get children() {
        return [a(G, {
          get when() {
            return r()
          },
          get children() {
            return a(Js, {
              onBackClick: () => o(!1)
            })
          }
        }), a(G, {
          get when() {
            return !r()
          },
          get children() {
            return [a(G, {
              get when() {
                return i()
              },
              get children() {
                return [a(Qs, {
                  translationKey: "walletModal.loading",
                  children: "Wallets list is loading"
                }), a(zs, {
                  get children() {
                    return a(lt, {
                      size: "m"
                    })
                  }
                })]
              }
            }), a(G, {
              get when() {
                return !i()
              },
              get children() {
                return a(Ot, {
                  get component() {
                    return Vt() ? Xs : Ys
                  },
                  get wallet() {
                    return ic()
                  },
                  get additionalRequest() {
                    return s()
                  },
                  onBackClick: () => {},
                  backDisabled: !0
                })
              }
            })]
          }
        })]
      }
    })
  },
  zd = e => {
    const t = Su(xc, te.language);
    return Xa(), Ja(), a(Ws.Provider, {
      value: t,
      get children() {
        return a(yt.Provider, {
          get value() {
            return e.tonConnectUI
          },
          get children() {
            return a(Gt.Provider, {
              get value() {
                return te.connector
              },
              get children() {
                return [a(Ka, {}), a(Oa, {
                  theme: Tc,
                  get children() {
                    return [a(G, {
                      get when() {
                        return te.buttonRootId
                      },
                      get children() {
                        return a(hs, {
                          get mount() {
                            return document.getElementById(te.buttonRootId)
                          },
                          get children() {
                            return a(L1, {})
                          }
                        })
                      }
                    }), a(Ot, {
                      component: et,
                      get children() {
                        return [a(Nd, {}), a(Qd, {}), a(Gd, {})]
                      }
                    })]
                  }
                })]
              }
            })
          }
        })
      }
    })
  },
  $e = {
    openWalletsModal: () => void setTimeout(() => ti({
      status: "opened",
      closeReason: null
    })),
    closeWalletsModal: e => void setTimeout(() => ti({
      status: "closed",
      closeReason: e
    })),
    openSingleWalletModal: e => {
      setTimeout(() => ri({
        status: "opened",
        closeReason: null,
        walletInfo: e
      }))
    },
    closeSingleWalletModal: e => void setTimeout(() => ri({
      status: "closed",
      closeReason: e
    })),
    setAction: e => void setTimeout(() => Ut(e)),
    clearAction: () => void setTimeout(() => Ut(null)),
    getSelectedWalletInfo: () => sc(),
    removeSelectedWalletInfo: () => Se(null),
    renderApp: (e, t) => Sa(() => a(zd, {
      tonConnectUI: t
    }), document.getElementById(e))
  };
class Yd {
  constructor(t) {
    K(this, "connector"), K(this, "setConnectRequestParametersCallback"), K(this, "consumers", []), K(this, "tracker"), K(this, "state", Kr()), this.connector = t.connector, this.tracker = t.tracker, this.setConnectRequestParametersCallback = t.setConnectRequestParametersCallback, pe(() => {
      const n = Kr();
      this.state = n, this.consumers.forEach(r => r(n))
    })
  }
  open() {
    return ne(this, null, function*() {
      this.tracker.trackConnectionStarted();
      const n = (yield this.connector.getWallets()).find(dr);
      return n ? this.connectEmbeddedWallet(n) : this.openWalletsModal()
    })
  }
  close(t = "action-cancelled") {
    t === "action-cancelled" && this.tracker.trackConnectionError("Connection was cancelled"), $e.closeWalletsModal(t)
  }
  onStateChange(t) {
    return this.consumers.push(t), () => {
      this.consumers = this.consumers.filter(n => n !== t)
    }
  }
  connectEmbeddedWallet(t) {
    const n = o => {
        Se(t), this.connector.connect({
          jsBridgeKey: t.jsBridgeKey
        }, o)
      },
      r = te.connectRequestParameters;
    (r == null ? void 0 : r.state) === "loading" ? this.setConnectRequestParametersCallback(n): n(r == null ? void 0 : r.value)
  }
  openWalletsModal() {
    return ne(this, null, function*() {
      return Ve() && wo(), $e.openWalletsModal(), new Promise(t => {
        const n = this.onStateChange(r => {
          const {
            status: o
          } = r;
          o === "opened" && (n(), t())
        })
      })
    })
  }
}
class Jd {
  constructor(t) {
    K(this, "connector"), K(this, "consumers", []), this.connector = t.connector, pe(() => {
      const n = tt();
      this.consumers.forEach(r => r(n))
    })
  }
  onStateChange(t) {
    return this.consumers.push(t), () => {
      this.consumers = this.consumers.filter(n => n !== t)
    }
  }
}
class Xd {
  constructor(t) {
    K(this, "connector"), K(this, "setConnectRequestParametersCallback"), K(this, "consumers", []), K(this, "tracker"), K(this, "state", Qn()), this.connector = t.connector, this.tracker = t.tracker, this.setConnectRequestParametersCallback = t.setConnectRequestParametersCallback, pe(() => {
      const n = Qn();
      this.state = n, this.consumers.forEach(r => r(n))
    })
  }
  open(t) {
    return ne(this, null, function*() {
      this.tracker.trackConnectionStarted();
      const n = yield this.connector.getWallets(), r = _o(n, te.walletsListConfiguration), o = r.find(dr);
      if (!!o) return this.connectEmbeddedWallet(o);
      const l = r.filter(ro).find(d => ut(d, t));
      if (!!l) return this.openSingleWalletModal(l);
      const u = `Trying to open modal window with unknown wallet "${t}".`;
      throw this.tracker.trackConnectionError(u), new fe(u)
    })
  }
  close(t = "action-cancelled") {
    t === "action-cancelled" && this.tracker.trackConnectionError("Connection was cancelled"), $e.closeSingleWalletModal("action-cancelled")
  }
  onStateChange(t) {
    return this.consumers.push(t), () => {
      this.consumers = this.consumers.filter(n => n !== t)
    }
  }
  connectEmbeddedWallet(t) {
    const n = o => {
        Se(t), this.connector.connect({
          jsBridgeKey: t.jsBridgeKey
        }, o)
      },
      r = te.connectRequestParameters;
    (r == null ? void 0 : r.state) === "loading" ? this.setConnectRequestParametersCallback(n): n(r == null ? void 0 : r.value)
  }
  openSingleWalletModal(t) {
    return ne(this, null, function*() {
      return Ve() && wo(), $e.openSingleWalletModal(t), new Promise(n => {
        const r = this.onStateChange(o => {
          const {
            status: i
          } = o;
          i === "opened" && (r(), n())
        })
      })
    })
  }
}
class e4 {
  constructor(t) {
    K(this, "eventPrefix", "ton-connect-ui-"), K(this, "tonConnectUiVersion"), K(this, "tonConnectSdkVersion", null), K(this, "eventDispatcher");
    var n;
    this.eventDispatcher = (n = t == null ? void 0 : t.eventDispatcher) != null ? n : new Ji, this.tonConnectUiVersion = t.tonConnectUiVersion, this.init().catch()
  }
  get version() {
    return Lt({
      ton_connect_sdk_lib: this.tonConnectSdkVersion,
      ton_connect_ui_lib: this.tonConnectUiVersion
    })
  }
  init() {
    return ne(this, null, function*() {
      try {
        yield this.setRequestVersionHandler(), this.tonConnectSdkVersion = yield this.requestTonConnectSdkVersion()
      } catch {}
    })
  }
  setRequestVersionHandler() {
    return ne(this, null, function*() {
      yield this.eventDispatcher.addEventListener("ton-connect-ui-request-version", () => ne(this, null, function*() {
        yield this.eventDispatcher.dispatchEvent("ton-connect-ui-response-version", Fi(this.tonConnectUiVersion))
      }))
    })
  }
  requestTonConnectSdkVersion() {
    return ne(this, null, function*() {
      return new Promise((t, n) => ne(this, null, function*() {
        try {
          yield this.eventDispatcher.addEventListener("ton-connect-response-version", r => {
            t(r.detail.version)
          }, {
            once: !0
          }), yield this.eventDispatcher.dispatchEvent("ton-connect-request-version", Hi())
        } catch (r) {
          n(r)
        }
      }))
    })
  }
  dispatchUserActionEvent(t) {
    var n;
    try {
      (n = this.eventDispatcher) == null || n.dispatchEvent(`${this.eventPrefix}${t.type}`, t).catch()
    } catch {}
  }
  trackConnectionStarted(...t) {
    try {
      const n = Oi(this.version, ...t);
      this.dispatchUserActionEvent(n)
    } catch {}
  }
  trackConnectionCompleted(...t) {
    try {
      const n = ji(this.version, ...t);
      this.dispatchUserActionEvent(n)
    } catch {}
  }
  trackConnectionError(...t) {
    try {
      const n = Ki(this.version, ...t);
      this.dispatchUserActionEvent(n)
    } catch {}
  }
  trackConnectionRestoringStarted(...t) {
    try {
      const n = Vi(this.version, ...t);
      this.dispatchUserActionEvent(n)
    } catch {}
  }
  trackConnectionRestoringCompleted(...t) {
    try {
      const n = qi(this.version, ...t);
      this.dispatchUserActionEvent(n)
    } catch {}
  }
  trackConnectionRestoringError(...t) {
    try {
      const n = Zi(this.version, ...t);
      this.dispatchUserActionEvent(n)
    } catch {}
  }
  trackDisconnection(...t) {
    try {
      const n = Yi(this.version, ...t);
      this.dispatchUserActionEvent(n)
    } catch {}
  }
  trackTransactionSentForSignature(...t) {
    try {
      const n = Gi(this.version, ...t);
      this.dispatchUserActionEvent(n)
    } catch {}
  }
  trackTransactionSigned(...t) {
    try {
      const n = Qi(this.version, ...t);
      this.dispatchUserActionEvent(n)
    } catch {}
  }
  trackTransactionSigningFailed(...t) {
    try {
      const n = zi(this.version, ...t);
      this.dispatchUserActionEvent(n)
    } catch {}
  }
}
const t4 = "2.0.9";
class n4 {
  constructor(t) {
    if (K(this, "walletInfoStorage", new rc), K(this, "preferredWalletStorage", new oc), K(this, "tracker"), K(this, "walletInfo", null), K(this, "systemThemeChangeUnsubscribe", null), K(this, "actionsConfiguration"), K(this, "walletsList"), K(this, "connectRequestParametersCallback"), K(this, "connector"), K(this, "modal"), K(this, "singleWalletModal"), K(this, "transactionModal"), K(this, "connectionRestored", Promise.resolve(!1)), t && "connector" in t && t.connector) this.connector = t.connector;
    else if (t && "manifestUrl" in t && t.manifestUrl) this.connector = new At({
      manifestUrl: t.manifestUrl,
      eventDispatcher: t == null ? void 0 : t.eventDispatcher
    });
    else throw new fe("You have to specify a `manifestUrl` or a `connector` in the options.");
    this.tracker = new e4({
      eventDispatcher: t == null ? void 0 : t.eventDispatcher,
      tonConnectUiVersion: t4
    }), this.modal = new Yd({
      connector: this.connector,
      tracker: this.tracker,
      setConnectRequestParametersCallback: o => {
        this.connectRequestParametersCallback = o
      }
    }), this.singleWalletModal = new Xd({
      connector: this.connector,
      tracker: this.tracker,
      setConnectRequestParametersCallback: o => {
        this.connectRequestParametersCallback = o
      }
    }), this.transactionModal = new Jd({
      connector: this.connector
    }), this.walletsList = this.getWallets(), this.walletsList.then(o => ps($1(o.map(i => i.imageUrl))));
    const n = this.normalizeWidgetRoot(t == null ? void 0 : t.widgetRootId);
    this.subscribeToWalletChange(), (t == null ? void 0 : t.restoreConnection) !== !1 && (this.connectionRestored = ec(() => ne(this, null, function*() {
      return this.tracker.trackConnectionRestoringStarted(), yield this.connector.restoreConnection(), this.connector.connected ? this.tracker.trackConnectionRestoringCompleted(this.wallet) : (this.tracker.trackConnectionRestoringError("Connection was not restored"), this.walletInfoStorage.removeWalletInfo()), this.connector.connected
    }))), this.uiOptions = ht(t, {
      uiPreferences: {
        theme: "SYSTEM"
      }
    });
    const r = this.preferredWalletStorage.getPreferredWalletAppName();
    Bn({
      connector: this.connector,
      preferredWalletAppName: r
    }), $e.renderApp(n, this)
  }
  static getWallets() {
    return At.getWallets()
  }
  get connected() {
    return this.connector.connected
  }
  get account() {
    return this.connector.account
  }
  get wallet() {
    return this.connector.wallet ? re(re({}, this.connector.wallet), this.walletInfo) : null
  }
  set uiOptions(t) {
    var n, r, o, i, s;
    this.checkButtonRootExist(t.buttonRootId), this.actionsConfiguration = t.actionsConfiguration, (n = t.uiPreferences) != null && n.theme ? ((r = t.uiPreferences) == null ? void 0 : r.theme) !== "SYSTEM" ? ((o = this.systemThemeChangeUnsubscribe) == null || o.call(this), Er(t.uiPreferences.theme, t.uiPreferences.colorsSet)) : (Er(Ga(), t.uiPreferences.colorsSet), this.systemThemeChangeUnsubscribe || (this.systemThemeChangeUnsubscribe = Qa(Er))) : (i = t.uiPreferences) != null && i.colorsSet && Rc(t.uiPreferences.colorsSet), (s = t.uiPreferences) != null && s.borderRadius && Mc(t.uiPreferences.borderRadius), Bn(l => {
      var c, u;
      const d = ht(re(re(re(re({}, t.language && {
        language: t.language
      }), !!((c = t.actionsConfiguration) != null && c.returnStrategy) && {
        returnStrategy: t.actionsConfiguration.returnStrategy
      }), !!((u = t.actionsConfiguration) != null && u.twaReturnUrl) && {
        twaReturnUrl: t.actionsConfiguration.twaReturnUrl
      }), !!t.walletsListConfiguration && {
        walletsListConfiguration: t.walletsListConfiguration
      }), jt(l));
      return t.buttonRootId !== void 0 && (d.buttonRootId = t.buttonRootId), t.enableAndroidBackHandler !== void 0 && (d.enableAndroidBackHandler = t.enableAndroidBackHandler), d
    })
  }
  setConnectRequestParameters(t) {
    var n;
    Bn({
      connectRequestParameters: t
    }), ((t == null ? void 0 : t.state) === "ready" || !t) && ((n = this.connectRequestParametersCallback) == null || n.call(this, t == null ? void 0 : t.value))
  }
  getWallets() {
    return ne(this, null, function*() {
      return this.connector.getWallets()
    })
  }
  onStatusChange(t, n) {
    return this.connector.onStatusChange(r => ne(this, null, function*() {
      if (r) {
        const o = yield this.getSelectedWalletInfo(r);
        t(re(re({}, r), o || this.walletInfoStorage.getWalletInfo()))
      } else t(r)
    }), n)
  }
  openModal() {
    return ne(this, null, function*() {
      return this.modal.open()
    })
  }
  closeModal(t) {
    this.modal.close(t)
  }
  onModalStateChange(t) {
    return this.modal.onStateChange(t)
  }
  get modalState() {
    return this.modal.state
  }
  openSingleWalletModal(t) {
    return ne(this, null, function*() {
      return this.singleWalletModal.open(t)
    })
  }
  closeSingleWalletModal(t) {
    this.singleWalletModal.close(t)
  }
  onSingleWalletModalStateChange(t) {
    return this.singleWalletModal.onStateChange(t)
  }
  get singleWalletModalState() {
    return this.singleWalletModal.state
  }
  connectWallet() {
    return ne(this, null, function*() {
      const n = (yield this.getWallets()).find(dr);
      return n ? yield this.connectEmbeddedWallet(n): yield this.connectExternalWallet()
    })
  }
  disconnect() {
    return this.tracker.trackDisconnection(this.wallet, "dapp"), $e.clearAction(), $e.removeSelectedWalletInfo(), this.walletInfoStorage.removeWalletInfo(), this.connector.disconnect()
  }
  sendTransaction(t, n) {
    return ne(this, null, function*() {
      if (this.tracker.trackTransactionSentForSignature(this.wallet, t), !this.connected) throw this.tracker.trackTransactionSigningFailed(this.wallet, t, "Wallet was not connected"), new fe("Connect wallet to send a transaction.");
      Ve() && wo();
      const {
        notifications: r,
        modals: o,
        returnStrategy: i,
        twaReturnUrl: s,
        skipRedirectToWallet: l
      } = this.getModalsAndNotificationsConfiguration(n);
      $e.setAction({
        name: "confirm-transaction",
        showNotification: r.includes("before"),
        openModal: o.includes("before"),
        sent: !1
      });
      const c = () => {
          u.signal.aborted || ($e.setAction({
            name: "confirm-transaction",
            showNotification: r.includes("before"),
            openModal: o.includes("before"),
            sent: !0
          }), this.walletInfo && "universalLink" in this.walletInfo && (this.walletInfo.openMethod === "universal-link" || this.walletInfo.openMethod === "custom-deeplink") && (ft(this.walletInfo.universalLink) ? _n(this.walletInfo.universalLink, {
            returnStrategy: i,
            twaReturnUrl: s || te.twaReturnUrl,
            forceRedirect: !1
          }) : En(this.walletInfo.universalLink, this.walletInfo.deepLink, {
            returnStrategy: i,
            forceRedirect: !1
          }, () => {})))
        },
        u = new AbortController,
        d = this.onTransactionModalStateChange(f => {
          f != null && f.openModal || (d(), f || u.abort())
        });
      try {
        const f = yield this.waitForSendTransaction({
          transaction: t,
          signal: u.signal
        }, c);
        return this.tracker.trackTransactionSigned(this.wallet, t, f), $e.setAction({
          name: "transaction-sent",
          showNotification: r.includes("success"),
          openModal: o.includes("success")
        }), f
      } catch (f) {
        throw $e.setAction({
          name: "transaction-canceled",
          showNotification: r.includes("error"),
          openModal: o.includes("error")
        }), f instanceof j ? f : (console.error(f), new fe("Unhandled error:" + f))
      } finally {
        d()
      }
    })
  }
  connectEmbeddedWallet(t) {
    return ne(this, null, function*() {
      const n = o => {
          Se(t), this.connector.connect({
            jsBridgeKey: t.jsBridgeKey
          }, o)
        },
        r = te.connectRequestParameters;
      return (r == null ? void 0 : r.state) === "loading" ? this.connectRequestParametersCallback = n : n(r == null ? void 0 : r.value), yield this.waitForWalletConnection({
        ignoreErrors: !1
      })
    })
  }
  connectExternalWallet() {
    return ne(this, null, function*() {
      const t = new AbortController;
      $e.openWalletsModal();
      const n = this.onModalStateChange(r => {
        const {
          status: o,
          closeReason: i
        } = r;
        o !== "opened" && (n(), i === "action-cancelled" && t.abort())
      });
      return yield this.waitForWalletConnection({
        ignoreErrors: !0,
        signal: t.signal
      })
    })
  }
  waitForWalletConnection(t) {
    return ne(this, null, function*() {
      return new Promise((n, r) => {
        this.tracker.trackConnectionStarted();
        const {
          ignoreErrors: o = !1,
          signal: i = null
        } = t;
        if (i && i.aborted) return this.tracker.trackConnectionError("Connection was cancelled"), r(new fe("Wallet was not connected"));
        const s = u => ne(this, null, function*() {
            if (u) this.tracker.trackConnectionCompleted(u), c(), n(u);
            else {
              if (this.tracker.trackConnectionError("Connection was cancelled"), o) return;
              c(), r(new fe("Wallet was not connected"))
            }
          }),
          l = u => {
            this.tracker.trackConnectionError(u.message), !o && (c(), r(u))
          },
          c = this.onStatusChange(u => s(u), u => l(u));
        i && i.addEventListener("abort", () => {
          c(), r(new fe("Wallet was not connected"))
        }, {
          once: !0
        })
      })
    })
  }
  waitForSendTransaction(t, n) {
    return ne(this, null, function*() {
      return new Promise((r, o) => {
        const {
          transaction: i,
          signal: s
        } = t;
        if (s.aborted) return this.tracker.trackTransactionSigningFailed(this.wallet, i, "Transaction was cancelled"), o(new fe("Transaction was not sent"));
        const l = d => ne(this, null, function*() {
            r(d)
          }),
          c = d => {
            o(d)
          },
          u = () => {
            this.tracker.trackTransactionSigningFailed(this.wallet, i, "Transaction was cancelled"), o(new fe("Transaction was not sent"))
          };
        s.addEventListener("abort", u, {
          once: !0
        }), this.connector.sendTransaction(i, {
          onRequestSent: n,
          signal: s
        }).then(d => (s.removeEventListener("abort", u), l(d))).catch(d => (s.removeEventListener("abort", u), c(d)))
      })
    })
  }
  onTransactionModalStateChange(t) {
    return this.transactionModal.onStateChange(t)
  }
  subscribeToWalletChange() {
    this.connector.onStatusChange(t => ne(this, null, function*() {
      var n;
      t ? (yield this.updateWalletInfo(t), this.setPreferredWalletAppName(((n = this.walletInfo) == null ? void 0 : n.appName) || t.device.appName)) : this.walletInfoStorage.removeWalletInfo()
    }))
  }
  setPreferredWalletAppName(t) {
    this.preferredWalletStorage.setPreferredWalletAppName(t), Bn({
      preferredWalletAppName: t
    })
  }
  getSelectedWalletInfo(t) {
    return ne(this, null, function*() {
      let n = $e.getSelectedWalletInfo();
      if (!n) return null;
      let r;
      if ("name" in n) r = n;
      else {
        const i = _o(yield this.walletsList, te.walletsListConfiguration).find(s => ut(s, t.device.appName));
        if (!i) throw new fe(`Cannot find WalletInfo for the '${t.device.appName}' wallet`);
        r = re(re({}, i), n)
      }
      return r
    })
  }
  updateWalletInfo(t) {
    return ne(this, null, function*() {
      const n = yield this.getSelectedWalletInfo(t);
      if (n) {
        this.walletInfo = n, this.walletInfoStorage.setWalletInfo(n);
        return
      }
      const r = this.walletInfoStorage.getWalletInfo();
      if (r) {
        this.walletInfo = r;
        return
      }
      this.walletInfo = (yield this.walletsList).find(o => ut(o, t.device.appName)) || null
    })
  }
  normalizeWidgetRoot(t) {
    if (!t || !document.getElementById(t)) {
      t = "tc-widget-root";
      const n = document.createElement("div");
      n.id = t, document.body.appendChild(n)
    }
    return t
  }
  checkButtonRootExist(t) {
    if (t != null && !document.getElementById(t)) throw new fe(`${t} element not found in the document.`)
  }
  getModalsAndNotificationsConfiguration(t) {
    var n, r, o, i, s, l;
    const c = ["before", "success", "error"];
    let u = c;
    (n = this.actionsConfiguration) != null && n.notifications && ((r = this.actionsConfiguration) == null ? void 0 : r.notifications) !== "all" && (u = this.actionsConfiguration.notifications), t != null && t.notifications && (t.notifications === "all" ? u = c : u = t.notifications);
    let d = ["before"];
    (o = this.actionsConfiguration) != null && o.modals && (this.actionsConfiguration.modals === "all" ? d = c : d = this.actionsConfiguration.modals), t != null && t.modals && (t.modals === "all" ? d = c : d = t.modals);
    const f = (t == null ? void 0 : t.returnStrategy) || ((i = this.actionsConfiguration) == null ? void 0 : i.returnStrategy) || "back",
      v = (t == null ? void 0 : t.twaReturnUrl) || ((s = this.actionsConfiguration) == null ? void 0 : s.twaReturnUrl);
    let L = (t == null ? void 0 : t.skipRedirectToWallet) || ((l = this.actionsConfiguration) == null ? void 0 : l.skipRedirectToWallet) || "ios";
    return Ve() && (L = "never"), {
      notifications: u,
      modals: d,
      returnStrategy: f,
      twaReturnUrl: v,
      skipRedirectToWallet: L
    }
  }
}
var r4 = Object.defineProperty,
  or = Object.getOwnPropertySymbols,
  ol = Object.prototype.hasOwnProperty,
  il = Object.prototype.propertyIsEnumerable,
  Ri = (e, t, n) => t in e ? r4(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
  }) : e[t] = n,
  o4 = (e, t) => {
    for (var n in t || (t = {})) ol.call(t, n) && Ri(e, n, t[n]);
    if (or)
      for (var n of or(t)) il.call(t, n) && Ri(e, n, t[n]);
    return e
  },
  i4 = (e, t) => {
    var n = {};
    for (var r in e) ol.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && or)
      for (var r of or(e)) t.indexOf(r) < 0 && il.call(e, r) && (n[r] = e[r]);
    return n
  },
  sl = {
    exports: {}
  },
  Qt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ii;

function s4() {
  if (Ii) return Qt;
  Ii = 1;
  var e = fl,
    t = Symbol.for("react.element"),
    n = Symbol.for("react.fragment"),
    r = Object.prototype.hasOwnProperty,
    o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    i = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    };

  function s(l, c, u) {
    var d, f = {},
      v = null,
      L = null;
    u !== void 0 && (v = "" + u), c.key !== void 0 && (v = "" + c.key), c.ref !== void 0 && (L = c.ref);
    for (d in c) r.call(c, d) && !i.hasOwnProperty(d) && (f[d] = c[d]);
    if (l && l.defaultProps)
      for (d in c = l.defaultProps, c) f[d] === void 0 && (f[d] = c[d]);
    return {
      $$typeof: t,
      type: l,
      key: v,
      ref: L,
      props: f,
      _owner: o.current
    }
  }
  return Qt.Fragment = n, Qt.jsx = s, Qt.jsxs = s, Qt
}(function(e) {
  e.exports = s4()
})(sl);
const ll = sl.exports.jsx;

function al() {
  return typeof window < "u"
}

function l4() {
  return !al()
}
const cl = De.createContext(null);
let Wr = null;
const a4 = e => {
    var t = e,
      {
        children: n
      } = t,
      r = i4(t, ["children"]);
    return al() && !Wr && (Wr = new n4(r)), ll(cl.Provider, {
      value: Wr,
      children: n
    })
  },
  C4 = De.memo(a4);
class Ao extends fe {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Ao.prototype)
  }
}
class Lo extends Ao {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Lo.prototype)
  }
}

function c4(e) {
  if (!e) throw new Lo("You should add <TonConnectUIProvider> on the top of the app to use TonConnect");
  return !0
}

function $o() {
  const e = De.useContext(cl),
    t = De.useCallback(n => {
      e && (e.uiOptions = n)
    }, [e]);
  return l4() ? [null, () => {}] : (c4(e), [e, t])
}
const Bi = "ton-connect-button",
  u4 = ({
    className: e,
    style: t
  }) => {
    const [n, r] = $o();
    return De.useEffect(() => (r({
      buttonRootId: Bi
    }), () => r({
      buttonRootId: null
    })), [r]), ll("div", {
      id: Bi,
      className: e,
      style: o4({
        width: "fit-content"
      }, t)
    })
  };
De.memo(u4);

function d4() {
  const [e] = $o(), [t, n] = De.useState((e == null ? void 0 : e.wallet) || null);
  return De.useEffect(() => {
    if (e) return n(e.wallet), e.onStatusChange(r => {
      n(r)
    })
  }, [e]), t
}

function b4(e = !0) {
  const t = d4();
  return De.useMemo(() => t ? e ? io(t.account.address, t.account.chain === dn.TESTNET) : t.account.address : "", [t, e, t == null ? void 0 : t.account.address, t == null ? void 0 : t.account.chain])
}

function x4() {
  const [e, t] = De.useState(!1), [n] = $o();
  return De.useEffect(() => {
    n && n.connectionRestored.then(() => t(!0))
  }, [n]), e
}
export {
  C4 as T, d4 as a, b4 as b, $o as c, de as d, x4 as u
};