import {
  g as global
} from "./vite-plugin-node-polyfills-BVIVvkCX.js";

function __awaiter(n, e, t, r) {
  function s(o) {
    return o instanceof t ? o : new t(function(i) {
      i(o)
    })
  }
  return new(t || (t = Promise))(function(o, i) {
    function u(f) {
      try {
        a(r.next(f))
      } catch (l) {
        i(l)
      }
    }

    function c(f) {
      try {
        a(r.throw(f))
      } catch (l) {
        i(l)
      }
    }

    function a(f) {
      f.done ? o(f.value) : s(f.value).then(u, c)
    }
    a((r = r.apply(n, [])).next())
  })
}
typeof SuppressedError == "function" && SuppressedError;
var commonjsGlobal = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function getDefaultExportFromCjs(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n
}
var events = {
    exports: {}
  },
  R = typeof Reflect == "object" ? Reflect : null,
  ReflectApply = R && typeof R.apply == "function" ? R.apply : function(e, t, r) {
    return Function.prototype.apply.call(e, t, r)
  },
  ReflectOwnKeys;
R && typeof R.ownKeys == "function" ? ReflectOwnKeys = R.ownKeys : Object.getOwnPropertySymbols ? ReflectOwnKeys = function(e) {
  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
} : ReflectOwnKeys = function(e) {
  return Object.getOwnPropertyNames(e)
};

function ProcessEmitWarning(n) {
  console && console.warn && console.warn(n)
}
var NumberIsNaN = Number.isNaN || function(e) {
  return e !== e
};

function EventEmitter$1() {
  EventEmitter$1.init.call(this)
}
events.exports = EventEmitter$1;
events.exports.once = once;
EventEmitter$1.EventEmitter = EventEmitter$1;
EventEmitter$1.prototype._events = void 0;
EventEmitter$1.prototype._eventsCount = 0;
EventEmitter$1.prototype._maxListeners = void 0;
var defaultMaxListeners = 10;

function checkListener(n) {
  if (typeof n != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof n)
}
Object.defineProperty(EventEmitter$1, "defaultMaxListeners", {
  enumerable: !0,
  get: function() {
    return defaultMaxListeners
  },
  set: function(n) {
    if (typeof n != "number" || n < 0 || NumberIsNaN(n)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + n + ".");
    defaultMaxListeners = n
  }
});
EventEmitter$1.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
};
EventEmitter$1.prototype.setMaxListeners = function(e) {
  if (typeof e != "number" || e < 0 || NumberIsNaN(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
  return this._maxListeners = e, this
};

function _getMaxListeners(n) {
  return n._maxListeners === void 0 ? EventEmitter$1.defaultMaxListeners : n._maxListeners
}
EventEmitter$1.prototype.getMaxListeners = function() {
  return _getMaxListeners(this)
};
EventEmitter$1.prototype.emit = function(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t.push(arguments[r]);
  var s = e === "error",
    o = this._events;
  if (o !== void 0) s = s && o.error === void 0;
  else if (!s) return !1;
  if (s) {
    var i;
    if (t.length > 0 && (i = t[0]), i instanceof Error) throw i;
    var u = new Error("Unhandled error." + (i ? " (" + i.message + ")" : ""));
    throw u.context = i, u
  }
  var c = o[e];
  if (c === void 0) return !1;
  if (typeof c == "function") ReflectApply(c, this, t);
  else
    for (var a = c.length, f = arrayClone(c, a), r = 0; r < a; ++r) ReflectApply(f[r], this, t);
  return !0
};

function _addListener(n, e, t, r) {
  var s, o, i;
  if (checkListener(t), o = n._events, o === void 0 ? (o = n._events = Object.create(null), n._eventsCount = 0) : (o.newListener !== void 0 && (n.emit("newListener", e, t.listener ? t.listener : t), o = n._events), i = o[e]), i === void 0) i = o[e] = t, ++n._eventsCount;
  else if (typeof i == "function" ? i = o[e] = r ? [t, i] : [i, t] : r ? i.unshift(t) : i.push(t), s = _getMaxListeners(n), s > 0 && i.length > s && !i.warned) {
    i.warned = !0;
    var u = new Error("Possible EventEmitter memory leak detected. " + i.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    u.name = "MaxListenersExceededWarning", u.emitter = n, u.type = e, u.count = i.length, ProcessEmitWarning(u)
  }
  return n
}
EventEmitter$1.prototype.addListener = function(e, t) {
  return _addListener(this, e, t, !1)
};
EventEmitter$1.prototype.on = EventEmitter$1.prototype.addListener;
EventEmitter$1.prototype.prependListener = function(e, t) {
  return _addListener(this, e, t, !0)
};

function onceWrapper() {
  if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
}

function _onceWrap(n, e, t) {
  var r = {
      fired: !1,
      wrapFn: void 0,
      target: n,
      type: e,
      listener: t
    },
    s = onceWrapper.bind(r);
  return s.listener = t, r.wrapFn = s, s
}
EventEmitter$1.prototype.once = function(e, t) {
  return checkListener(t), this.on(e, _onceWrap(this, e, t)), this
};
EventEmitter$1.prototype.prependOnceListener = function(e, t) {
  return checkListener(t), this.prependListener(e, _onceWrap(this, e, t)), this
};
EventEmitter$1.prototype.removeListener = function(e, t) {
  var r, s, o, i, u;
  if (checkListener(t), s = this._events, s === void 0) return this;
  if (r = s[e], r === void 0) return this;
  if (r === t || r.listener === t) --this._eventsCount === 0 ? this._events = Object.create(null) : (delete s[e], s.removeListener && this.emit("removeListener", e, r.listener || t));
  else if (typeof r != "function") {
    for (o = -1, i = r.length - 1; i >= 0; i--)
      if (r[i] === t || r[i].listener === t) {
        u = r[i].listener, o = i;
        break
      } if (o < 0) return this;
    o === 0 ? r.shift() : spliceOne(r, o), r.length === 1 && (s[e] = r[0]), s.removeListener !== void 0 && this.emit("removeListener", e, u || t)
  }
  return this
};
EventEmitter$1.prototype.off = EventEmitter$1.prototype.removeListener;
EventEmitter$1.prototype.removeAllListeners = function(e) {
  var t, r, s;
  if (r = this._events, r === void 0) return this;
  if (r.removeListener === void 0) return arguments.length === 0 ? (this._events = Object.create(null), this._eventsCount = 0) : r[e] !== void 0 && (--this._eventsCount === 0 ? this._events = Object.create(null) : delete r[e]), this;
  if (arguments.length === 0) {
    var o = Object.keys(r),
      i;
    for (s = 0; s < o.length; ++s) i = o[s], i !== "removeListener" && this.removeAllListeners(i);
    return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
  }
  if (t = r[e], typeof t == "function") this.removeListener(e, t);
  else if (t !== void 0)
    for (s = t.length - 1; s >= 0; s--) this.removeListener(e, t[s]);
  return this
};

function _listeners(n, e, t) {
  var r = n._events;
  if (r === void 0) return [];
  var s = r[e];
  return s === void 0 ? [] : typeof s == "function" ? t ? [s.listener || s] : [s] : t ? unwrapListeners(s) : arrayClone(s, s.length)
}
EventEmitter$1.prototype.listeners = function(e) {
  return _listeners(this, e, !0)
};
EventEmitter$1.prototype.rawListeners = function(e) {
  return _listeners(this, e, !1)
};
EventEmitter$1.listenerCount = function(n, e) {
  return typeof n.listenerCount == "function" ? n.listenerCount(e) : listenerCount.call(n, e)
};
EventEmitter$1.prototype.listenerCount = listenerCount;

function listenerCount(n) {
  var e = this._events;
  if (e !== void 0) {
    var t = e[n];
    if (typeof t == "function") return 1;
    if (t !== void 0) return t.length
  }
  return 0
}
EventEmitter$1.prototype.eventNames = function() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : []
};

function arrayClone(n, e) {
  for (var t = new Array(e), r = 0; r < e; ++r) t[r] = n[r];
  return t
}

function spliceOne(n, e) {
  for (; e + 1 < n.length; e++) n[e] = n[e + 1];
  n.pop()
}

function unwrapListeners(n) {
  for (var e = new Array(n.length), t = 0; t < e.length; ++t) e[t] = n[t].listener || n[t];
  return e
}

function once(n, e) {
  return new Promise(function(t, r) {
    function s(i) {
      n.removeListener(e, o), r(i)
    }

    function o() {
      typeof n.removeListener == "function" && n.removeListener("error", s), t([].slice.call(arguments))
    }
    eventTargetAgnosticAddListener(n, e, o, {
      once: !0
    }), e !== "error" && addErrorHandlerIfEventEmitter(n, s, {
      once: !0
    })
  })
}

function addErrorHandlerIfEventEmitter(n, e, t) {
  typeof n.on == "function" && eventTargetAgnosticAddListener(n, "error", e, t)
}

function eventTargetAgnosticAddListener(n, e, t, r) {
  if (typeof n.on == "function") r.once ? n.once(e, t) : n.on(e, t);
  else if (typeof n.addEventListener == "function") n.addEventListener(e, function s(o) {
    r.once && n.removeEventListener(e, s), t(o)
  });
  else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof n)
}
var eventsExports = events.exports,
  EventEmitter$2 = getDefaultExportFromCjs(eventsExports),
  errorCodes;
(function(n) {
  n[n.timeout = 1] = "timeout", n[n.transportClosed = 2] = "transportClosed", n[n.clientDisconnected = 3] = "clientDisconnected", n[n.clientClosed = 4] = "clientClosed", n[n.clientConnectToken = 5] = "clientConnectToken", n[n.clientRefreshToken = 6] = "clientRefreshToken", n[n.subscriptionUnsubscribed = 7] = "subscriptionUnsubscribed", n[n.subscriptionSubscribeToken = 8] = "subscriptionSubscribeToken", n[n.subscriptionRefreshToken = 9] = "subscriptionRefreshToken", n[n.transportWriteError = 10] = "transportWriteError", n[n.connectionClosed = 11] = "connectionClosed", n[n.badConfiguration = 12] = "badConfiguration"
})(errorCodes || (errorCodes = {}));
var connectingCodes;
(function(n) {
  n[n.connectCalled = 0] = "connectCalled", n[n.transportClosed = 1] = "transportClosed", n[n.noPing = 2] = "noPing", n[n.subscribeTimeout = 3] = "subscribeTimeout", n[n.unsubscribeError = 4] = "unsubscribeError"
})(connectingCodes || (connectingCodes = {}));
var disconnectedCodes;
(function(n) {
  n[n.disconnectCalled = 0] = "disconnectCalled", n[n.unauthorized = 1] = "unauthorized", n[n.badProtocol = 2] = "badProtocol", n[n.messageSizeLimit = 3] = "messageSizeLimit"
})(disconnectedCodes || (disconnectedCodes = {}));
var subscribingCodes;
(function(n) {
  n[n.subscribeCalled = 0] = "subscribeCalled", n[n.transportClosed = 1] = "transportClosed"
})(subscribingCodes || (subscribingCodes = {}));
var unsubscribedCodes;
(function(n) {
  n[n.unsubscribeCalled = 0] = "unsubscribeCalled", n[n.unauthorized = 1] = "unauthorized", n[n.clientClosed = 2] = "clientClosed"
})(unsubscribedCodes || (unsubscribedCodes = {}));
var State$1;
(function(n) {
  n.Disconnected = "disconnected", n.Connecting = "connecting", n.Connected = "connected"
})(State$1 || (State$1 = {}));
var SubscriptionState;
(function(n) {
  n.Unsubscribed = "unsubscribed", n.Subscribing = "subscribing", n.Subscribed = "subscribed"
})(SubscriptionState || (SubscriptionState = {}));

function startsWith(n, e) {
  return n.lastIndexOf(e, 0) === 0
}

function isFunction(n) {
  return n == null ? !1 : typeof n == "function"
}

function log(n, e) {
  if (globalThis.console) {
    const t = globalThis.console[n];
    isFunction(t) && t.apply(globalThis.console, e)
  }
}

function randomInt(n, e) {
  return Math.floor(Math.random() * (e - n + 1) + n)
}

function backoff(n, e, t) {
  n > 31 && (n = 31);
  const r = randomInt(0, Math.min(t, e * Math.pow(2, n)));
  return Math.min(t, e + r)
}

function errorExists(n) {
  return "error" in n && n.error !== null
}

function ttlMilliseconds(n) {
  return Math.min(n * 1e3, 2147483647)
}
class Subscription extends EventEmitter$2 {
  constructor(e, t, r) {
    super(), this._resubscribeTimeout = null, this._refreshTimeout = null, this.channel = t, this.state = SubscriptionState.Unsubscribed, this._centrifuge = e, this._token = "", this._getToken = null, this._data = null, this._getData = null, this._recover = !1, this._offset = null, this._epoch = null, this._recoverable = !1, this._positioned = !1, this._joinLeave = !1, this._minResubscribeDelay = 500, this._maxResubscribeDelay = 2e4, this._resubscribeTimeout = null, this._resubscribeAttempts = 0, this._promises = {}, this._promiseId = 0, this._inflight = !1, this._refreshTimeout = null, this._delta = "", this._delta_negotiated = !1, this._prevValue = null, this._unsubPromise = Promise.resolve(), this._setOptions(r), this._centrifuge._debugEnabled ? (this.on("state", s => {
      this._centrifuge._debug("subscription state", t, s.oldState, "->", s.newState)
    }), this.on("error", s => {
      this._centrifuge._debug("subscription error", t, s)
    })) : this.on("error", function() {
      Function.prototype()
    })
  }
  ready(e) {
    return this.state === SubscriptionState.Unsubscribed ? Promise.reject({
      code: errorCodes.subscriptionUnsubscribed,
      message: this.state
    }) : this.state === SubscriptionState.Subscribed ? Promise.resolve() : new Promise((t, r) => {
      const s = {
        resolve: t,
        reject: r
      };
      e && (s.timeout = setTimeout(function() {
        r({
          code: errorCodes.timeout,
          message: "timeout"
        })
      }, e)), this._promises[this._nextPromiseId()] = s
    })
  }
  subscribe() {
    this._isSubscribed() || (this._resubscribeAttempts = 0, this._setSubscribing(subscribingCodes.subscribeCalled, "subscribe called"))
  }
  unsubscribe() {
    this._unsubPromise = this._setUnsubscribed(unsubscribedCodes.unsubscribeCalled, "unsubscribe called", !0)
  }
  publish(e) {
    const t = this;
    return this._methodCall().then(function() {
      return t._centrifuge.publish(t.channel, e)
    })
  }
  presence() {
    const e = this;
    return this._methodCall().then(function() {
      return e._centrifuge.presence(e.channel)
    })
  }
  presenceStats() {
    const e = this;
    return this._methodCall().then(function() {
      return e._centrifuge.presenceStats(e.channel)
    })
  }
  history(e) {
    const t = this;
    return this._methodCall().then(function() {
      return t._centrifuge.history(t.channel, e)
    })
  }
  _methodCall() {
    return this._isSubscribed() ? Promise.resolve() : this._isUnsubscribed() ? Promise.reject({
      code: errorCodes.subscriptionUnsubscribed,
      message: this.state
    }) : new Promise((e, t) => {
      const r = setTimeout(function() {
        t({
          code: errorCodes.timeout,
          message: "timeout"
        })
      }, this._centrifuge._config.timeout);
      this._promises[this._nextPromiseId()] = {
        timeout: r,
        resolve: e,
        reject: t
      }
    })
  }
  _nextPromiseId() {
    return ++this._promiseId
  }
  _needRecover() {
    return this._recover === !0
  }
  _isUnsubscribed() {
    return this.state === SubscriptionState.Unsubscribed
  }
  _isSubscribing() {
    return this.state === SubscriptionState.Subscribing
  }
  _isSubscribed() {
    return this.state === SubscriptionState.Subscribed
  }
  _setState(e) {
    if (this.state !== e) {
      const t = this.state;
      return this.state = e, this.emit("state", {
        newState: e,
        oldState: t,
        channel: this.channel
      }), !0
    }
    return !1
  }
  _usesToken() {
    return this._token !== "" || this._getToken !== null
  }
  _clearSubscribingState() {
    this._resubscribeAttempts = 0, this._clearResubscribeTimeout()
  }
  _clearSubscribedState() {
    this._clearRefreshTimeout()
  }
  _setSubscribed(e) {
    if (!this._isSubscribing()) return;
    this._clearSubscribingState(), e.recoverable && (this._recover = !0, this._offset = e.offset || 0, this._epoch = e.epoch || ""), e.delta ? this._delta_negotiated = !0 : this._delta_negotiated = !1, this._setState(SubscriptionState.Subscribed);
    const t = this._centrifuge._getSubscribeContext(this.channel, e);
    this.emit("subscribed", t), this._resolvePromises();
    const r = e.publications;
    if (r && r.length > 0)
      for (const s in r) r.hasOwnProperty(s) && this._handlePublication(r[s]);
    e.expires === !0 && (this._refreshTimeout = setTimeout(() => this._refresh(), ttlMilliseconds(e.ttl)))
  }
  _setSubscribing(e, t) {
    return __awaiter(this, void 0, void 0, function*() {
      this._isSubscribing() || (this._isSubscribed() && this._clearSubscribedState(), this._setState(SubscriptionState.Subscribing) && this.emit("subscribing", {
        channel: this.channel,
        code: e,
        reason: t
      }), this._centrifuge._transport && this._centrifuge._transport.emulation() && (yield this._unsubPromise), this._isSubscribing() && this._subscribe())
    })
  }
  _subscribe() {
    if (this._centrifuge._debug("subscribing on", this.channel), !this._centrifuge._transportIsOpen) return this._centrifuge._debug("delay subscribe on", this.channel, "till connected"), null;
    const e = this,
      t = {
        channel: e.channel
      };
    return !this._usesToken() || this._token ? e._getData ? (e._getData(t).then(function(r) {
      e._isSubscribing() && (e._data = r, e._sendSubscribe(e._token))
    }), null) : e._sendSubscribe(e._token) : (this._getSubscriptionToken().then(function(r) {
      if (e._isSubscribing()) {
        if (!r) {
          e._failUnauthorized();
          return
        }
        e._token = r, e._getData ? e._getData(t).then(function(s) {
          e._isSubscribing() && (e._data = s, e._sendSubscribe(r))
        }) : e._sendSubscribe(r)
      }
    }).catch(function(r) {
      if (e._isSubscribing()) {
        if (r instanceof UnauthorizedError) {
          e._failUnauthorized();
          return
        }
        e.emit("error", {
          type: "subscribeToken",
          channel: e.channel,
          error: {
            code: errorCodes.subscriptionSubscribeToken,
            message: r !== void 0 ? r.toString() : ""
          }
        }), e._scheduleResubscribe()
      }
    }), null)
  }
  _sendSubscribe(e) {
    if (!this._centrifuge._transportIsOpen) return null;
    const r = {
      channel: this.channel
    };
    if (e && (r.token = e), this._data && (r.data = this._data), this._positioned && (r.positioned = !0), this._recoverable && (r.recoverable = !0), this._joinLeave && (r.join_leave = !0), this._needRecover()) {
      r.recover = !0;
      const o = this._getOffset();
      o && (r.offset = o);
      const i = this._getEpoch();
      i && (r.epoch = i)
    }
    this._delta && (r.delta = this._delta);
    const s = {
      subscribe: r
    };
    return this._inflight = !0, this._centrifuge._call(s).then(o => {
      this._inflight = !1;
      const i = o.reply.subscribe;
      this._handleSubscribeResponse(i), o.next && o.next()
    }, o => {
      this._inflight = !1, this._handleSubscribeError(o.error), o.next && o.next()
    }), s
  }
  _handleSubscribeError(e) {
    if (this._isSubscribing()) {
      if (e.code === errorCodes.timeout) {
        this._centrifuge._disconnect(connectingCodes.subscribeTimeout, "subscribe timeout", !0);
        return
      }
      this._subscribeError(e)
    }
  }
  _handleSubscribeResponse(e) {
    this._isSubscribing() && this._setSubscribed(e)
  }
  _setUnsubscribed(e, t, r) {
    if (this._isUnsubscribed()) return Promise.resolve();
    let s = Promise.resolve();
    return this._isSubscribed() ? (r && (s = this._centrifuge._unsubscribe(this)), this._clearSubscribedState()) : this._isSubscribing() && (this._inflight && r && (s = this._centrifuge._unsubscribe(this)), this._clearSubscribingState()), this._setState(SubscriptionState.Unsubscribed) && this.emit("unsubscribed", {
      channel: this.channel,
      code: e,
      reason: t
    }), this._rejectPromises({
      code: errorCodes.subscriptionUnsubscribed,
      message: this.state
    }), s
  }
  _handlePublication(e) {
    if (this._delta && this._delta_negotiated) {
      const {
        newData: r,
        newPrevValue: s
      } = this._centrifuge._codec.applyDeltaIfNeeded(e, this._prevValue);
      e.data = r, this._prevValue = s
    }
    const t = this._centrifuge._getPublicationContext(this.channel, e);
    this.emit("publication", t), e.offset && (this._offset = e.offset)
  }
  _handleJoin(e) {
    const t = this._centrifuge._getJoinLeaveContext(e.info);
    this.emit("join", {
      channel: this.channel,
      info: t
    })
  }
  _handleLeave(e) {
    const t = this._centrifuge._getJoinLeaveContext(e.info);
    this.emit("leave", {
      channel: this.channel,
      info: t
    })
  }
  _resolvePromises() {
    for (const e in this._promises) this._promises.hasOwnProperty(e) && (this._promises[e].timeout && clearTimeout(this._promises[e].timeout), this._promises[e].resolve(), delete this._promises[e])
  }
  _rejectPromises(e) {
    for (const t in this._promises) this._promises.hasOwnProperty(t) && (this._promises[t].timeout && clearTimeout(this._promises[t].timeout), this._promises[t].reject(e), delete this._promises[t])
  }
  _scheduleResubscribe() {
    const e = this,
      t = this._getResubscribeDelay();
    this._resubscribeTimeout = setTimeout(function() {
      e._isSubscribing() && e._subscribe()
    }, t)
  }
  _subscribeError(e) {
    if (this._isSubscribing())
      if (e.code < 100 || e.code === 109 || e.temporary === !0) {
        e.code === 109 && (this._token = "");
        const t = {
          channel: this.channel,
          type: "subscribe",
          error: e
        };
        this._centrifuge.state === State$1.Connected && this.emit("error", t), this._scheduleResubscribe()
      } else this._setUnsubscribed(e.code, e.message, !1)
  }
  _getResubscribeDelay() {
    const e = backoff(this._resubscribeAttempts, this._minResubscribeDelay, this._maxResubscribeDelay);
    return this._resubscribeAttempts++, e
  }
  _setOptions(e) {
    if (e && (e.since && (this._offset = e.since.offset, this._epoch = e.since.epoch, this._recover = !0), e.data && (this._data = e.data), e.getData && (this._getData = e.getData), e.minResubscribeDelay !== void 0 && (this._minResubscribeDelay = e.minResubscribeDelay), e.maxResubscribeDelay !== void 0 && (this._maxResubscribeDelay = e.maxResubscribeDelay), e.token && (this._token = e.token), e.getToken && (this._getToken = e.getToken), e.positioned === !0 && (this._positioned = !0), e.recoverable === !0 && (this._recoverable = !0), e.joinLeave === !0 && (this._joinLeave = !0), e.delta)) {
      if (e.delta !== "fossil") throw new Error("unsupported delta format");
      this._delta = e.delta
    }
  }
  _getOffset() {
    const e = this._offset;
    return e !== null ? e : 0
  }
  _getEpoch() {
    const e = this._epoch;
    return e !== null ? e : ""
  }
  _clearRefreshTimeout() {
    this._refreshTimeout !== null && (clearTimeout(this._refreshTimeout), this._refreshTimeout = null)
  }
  _clearResubscribeTimeout() {
    this._resubscribeTimeout !== null && (clearTimeout(this._resubscribeTimeout), this._resubscribeTimeout = null)
  }
  _getSubscriptionToken() {
    this._centrifuge._debug("get subscription token for channel", this.channel);
    const e = {
        channel: this.channel
      },
      t = this._getToken;
    if (t === null) throw this.emit("error", {
      type: "configuration",
      channel: this.channel,
      error: {
        code: errorCodes.badConfiguration,
        message: "provide a function to get channel subscription token"
      }
    }), new UnauthorizedError("");
    return t(e)
  }
  _refresh() {
    this._clearRefreshTimeout();
    const e = this;
    this._getSubscriptionToken().then(function(t) {
      if (!e._isSubscribed()) return;
      if (!t) {
        e._failUnauthorized();
        return
      }
      e._token = t;
      const s = {
        sub_refresh: {
          channel: e.channel,
          token: t
        }
      };
      e._centrifuge._call(s).then(o => {
        const i = o.reply.sub_refresh;
        e._refreshResponse(i), o.next && o.next()
      }, o => {
        e._refreshError(o.error), o.next && o.next()
      })
    }).catch(function(t) {
      if (t instanceof UnauthorizedError) {
        e._failUnauthorized();
        return
      }
      e.emit("error", {
        type: "refreshToken",
        channel: e.channel,
        error: {
          code: errorCodes.subscriptionRefreshToken,
          message: t !== void 0 ? t.toString() : ""
        }
      }), e._refreshTimeout = setTimeout(() => e._refresh(), e._getRefreshRetryDelay())
    })
  }
  _refreshResponse(e) {
    this._isSubscribed() && (this._centrifuge._debug("subscription token refreshed, channel", this.channel), this._clearRefreshTimeout(), e.expires === !0 && (this._refreshTimeout = setTimeout(() => this._refresh(), ttlMilliseconds(e.ttl))))
  }
  _refreshError(e) {
    this._isSubscribed() && (e.code < 100 || e.temporary === !0 ? (this.emit("error", {
      type: "refresh",
      channel: this.channel,
      error: e
    }), this._refreshTimeout = setTimeout(() => this._refresh(), this._getRefreshRetryDelay())) : this._setUnsubscribed(e.code, e.message, !0))
  }
  _getRefreshRetryDelay() {
    return backoff(0, 1e4, 2e4)
  }
  _failUnauthorized() {
    this._setUnsubscribed(unsubscribedCodes.unauthorized, "unauthorized", !0)
  }
}
class SockjsTransport {
  constructor(e, t) {
    this.endpoint = e, this.options = t, this._transport = null
  }
  name() {
    return "sockjs"
  }
  subName() {
    return "sockjs-" + this._transport.transport
  }
  emulation() {
    return !1
  }
  supported() {
    return this.options.sockjs !== null
  }
  initialize(e, t) {
    this._transport = new this.options.sockjs(this.endpoint, null, this.options.sockjsOptions), this._transport.onopen = () => {
      t.onOpen()
    }, this._transport.onerror = r => {
      t.onError(r)
    }, this._transport.onclose = r => {
      t.onClose(r)
    }, this._transport.onmessage = r => {
      t.onMessage(r.data)
    }
  }
  close() {
    this._transport.close()
  }
  send(e) {
    this._transport.send(e)
  }
}
class WebsocketTransport {
  constructor(e, t) {
    this.endpoint = e, this.options = t, this._transport = null
  }
  name() {
    return "websocket"
  }
  subName() {
    return "websocket"
  }
  emulation() {
    return !1
  }
  supported() {
    return this.options.websocket !== void 0 && this.options.websocket !== null
  }
  initialize(e, t) {
    let r = "";
    e === "protobuf" && (r = "centrifuge-protobuf"), r !== "" ? this._transport = new this.options.websocket(this.endpoint, r) : this._transport = new this.options.websocket(this.endpoint), e === "protobuf" && (this._transport.binaryType = "arraybuffer"), this._transport.onopen = () => {
      t.onOpen()
    }, this._transport.onerror = s => {
      t.onError(s)
    }, this._transport.onclose = s => {
      t.onClose(s)
    }, this._transport.onmessage = s => {
      t.onMessage(s.data)
    }
  }
  close() {
    this._transport.close()
  }
  send(e) {
    this._transport.send(e)
  }
}
class HttpStreamTransport {
  constructor(e, t) {
    this.endpoint = e, this.options = t, this._abortController = null, this._utf8decoder = new TextDecoder, this._protocol = "json"
  }
  name() {
    return "http_stream"
  }
  subName() {
    return "http_stream"
  }
  emulation() {
    return !0
  }
  _handleErrors(e) {
    if (!e.ok) throw new Error(e.status);
    return e
  }
  _fetchEventTarget(e, t, r) {
    const s = new EventTarget,
      o = e.options.fetch;
    return o(t, r).then(e._handleErrors).then(i => {
      s.dispatchEvent(new Event("open"));
      let u = "",
        c = 0,
        a = new Uint8Array;
      const f = i.body.getReader();
      return new e.options.readableStream({
        start(l) {
          function d() {
            return f.read().then(({
              done: h,
              value: p
            }) => {
              if (h) {
                s.dispatchEvent(new Event("close")), l.close();
                return
              }
              try {
                if (e._protocol === "json")
                  for (u += e._utf8decoder.decode(p); c < u.length;)
                    if (u[c] === `
`) {
                      const m = u.substring(0, c);
                      s.dispatchEvent(new MessageEvent("message", {
                        data: m
                      })), u = u.substring(c + 1), c = 0
                    } else ++c;
                else {
                  const m = new Uint8Array(a.length + p.length);
                  for (m.set(a), m.set(p, a.length), a = m;;) {
                    const b = e.options.decoder.decodeReply(a);
                    if (b.ok) {
                      const g = a.slice(0, b.pos);
                      s.dispatchEvent(new MessageEvent("message", {
                        data: g
                      })), a = a.slice(b.pos);
                      continue
                    }
                    break
                  }
                }
              } catch (m) {
                s.dispatchEvent(new Event("error", {
                  detail: m
                })), s.dispatchEvent(new Event("close")), l.close();
                return
              }
              d()
            }).catch(function(h) {
              s.dispatchEvent(new Event("error", {
                detail: h
              })), s.dispatchEvent(new Event("close")), l.close()
            })
          }
          return d()
        }
      })
    }).catch(i => {
      s.dispatchEvent(new Event("error", {
        detail: i
      })), s.dispatchEvent(new Event("close"))
    }), s
  }
  supported() {
    return this.options.fetch !== null && this.options.readableStream !== null && typeof TextDecoder < "u" && typeof AbortController < "u" && typeof EventTarget < "u" && typeof Event < "u" && typeof MessageEvent < "u" && typeof Error < "u"
  }
  initialize(e, t, r) {
    this._protocol = e, this._abortController = new AbortController;
    let s, o;
    e === "json" ? (s = {
      Accept: "application/json",
      "Content-Type": "application/json"
    }, o = r) : (s = {
      Accept: "application/octet-stream",
      "Content-Type": "application/octet-stream"
    }, o = r);
    const i = {
        method: "POST",
        headers: s,
        body: o,
        mode: "cors",
        credentials: "same-origin",
        cache: "no-cache",
        signal: this._abortController.signal
      },
      u = this._fetchEventTarget(this, this.endpoint, i);
    u.addEventListener("open", () => {
      t.onOpen()
    }), u.addEventListener("error", c => {
      this._abortController.abort(), t.onError(c)
    }), u.addEventListener("close", () => {
      this._abortController.abort(), t.onClose({
        code: 4,
        reason: "connection closed"
      })
    }), u.addEventListener("message", c => {
      t.onMessage(c.data)
    })
  }
  close() {
    this._abortController.abort()
  }
  send(e, t, r) {
    let s, o;
    const i = {
      session: t,
      node: r,
      data: e
    };
    this._protocol === "json" ? (s = {
      "Content-Type": "application/json"
    }, o = JSON.stringify(i)) : (s = {
      "Content-Type": "application/octet-stream"
    }, o = this.options.encoder.encodeEmulationRequest(i));
    const u = this.options.fetch,
      c = {
        method: "POST",
        headers: s,
        body: o,
        mode: "cors",
        credentials: "same-origin",
        cache: "no-cache"
      };
    u(this.options.emulationEndpoint, c)
  }
}
class SseTransport {
  constructor(e, t) {
    this.endpoint = e, this.options = t, this._protocol = "json", this._transport = null, this._onClose = null
  }
  name() {
    return "sse"
  }
  subName() {
    return "sse"
  }
  emulation() {
    return !0
  }
  supported() {
    return this.options.eventsource !== null && this.options.fetch !== null
  }
  initialize(e, t, r) {
    let s;
    globalThis && globalThis.document && globalThis.document.baseURI ? s = new URL(this.endpoint, globalThis.document.baseURI) : s = new URL(this.endpoint), s.searchParams.append("cf_connect", r);
    const o = {},
      i = new this.options.eventsource(s.toString(), o);
    this._transport = i;
    const u = this;
    i.onopen = function() {
      t.onOpen()
    }, i.onerror = function(c) {
      i.close(), t.onError(c), t.onClose({
        code: 4,
        reason: "connection closed"
      })
    }, i.onmessage = function(c) {
      t.onMessage(c.data)
    }, u._onClose = function() {
      t.onClose({
        code: 4,
        reason: "connection closed"
      })
    }
  }
  close() {
    this._transport.close(), this._onClose !== null && this._onClose()
  }
  send(e, t, r) {
    const s = {
        session: t,
        node: r,
        data: e
      },
      o = {
        "Content-Type": "application/json"
      },
      i = JSON.stringify(s),
      u = this.options.fetch,
      c = {
        method: "POST",
        headers: o,
        body: i,
        mode: "cors",
        credentials: "same-origin",
        cache: "no-cache"
      };
    u(this.options.emulationEndpoint, c)
  }
}
class WebtransportTransport {
  constructor(e, t) {
    this.endpoint = e, this.options = t, this._transport = null, this._stream = null, this._writer = null, this._utf8decoder = new TextDecoder, this._protocol = "json"
  }
  name() {
    return "webtransport"
  }
  subName() {
    return "webtransport"
  }
  emulation() {
    return !1
  }
  supported() {
    return this.options.webtransport !== void 0 && this.options.webtransport !== null
  }
  initialize(e, t) {
    return __awaiter(this, void 0, void 0, function*() {
      let r;
      globalThis && globalThis.document && globalThis.document.baseURI ? r = new URL(this.endpoint, globalThis.document.baseURI) : r = new URL(this.endpoint), e === "protobuf" && r.searchParams.append("cf_protocol", "protobuf"), this._protocol = e;
      const s = new EventTarget;
      this._transport = new this.options.webtransport(r.toString()), this._transport.closed.then(() => {
        t.onClose({
          code: 4,
          reason: "connection closed"
        })
      }).catch(() => {
        t.onClose({
          code: 4,
          reason: "connection closed"
        })
      });
      try {
        yield this._transport.ready
      } catch {
        this.close();
        return
      }
      let o;
      try {
        o = yield this._transport.createBidirectionalStream()
      } catch {
        this.close();
        return
      }
      this._stream = o, this._writer = this._stream.writable.getWriter(), s.addEventListener("close", () => {
        t.onClose({
          code: 4,
          reason: "connection closed"
        })
      }), s.addEventListener("message", i => {
        t.onMessage(i.data)
      }), this._startReading(s), t.onOpen()
    })
  }
  _startReading(e) {
    return __awaiter(this, void 0, void 0, function*() {
      const t = this._stream.readable.getReader();
      let r = "",
        s = 0,
        o = new Uint8Array;
      try {
        for (;;) {
          const {
            done: i,
            value: u
          } = yield t.read();
          if (u.length > 0)
            if (this._protocol === "json")
              for (r += this._utf8decoder.decode(u); s < r.length;)
                if (r[s] === `
`) {
                  const c = r.substring(0, s);
                  e.dispatchEvent(new MessageEvent("message", {
                    data: c
                  })), r = r.substring(s + 1), s = 0
                } else ++s;
          else {
            const c = new Uint8Array(o.length + u.length);
            for (c.set(o), c.set(u, o.length), o = c;;) {
              const a = this.options.decoder.decodeReply(o);
              if (a.ok) {
                const f = o.slice(0, a.pos);
                e.dispatchEvent(new MessageEvent("message", {
                  data: f
                })), o = o.slice(a.pos);
                continue
              }
              break
            }
          }
          if (i) break
        }
      } catch {
        e.dispatchEvent(new Event("close"))
      }
    })
  }
  close() {
    return __awaiter(this, void 0, void 0, function*() {
      try {
        this._writer && (yield this._writer.close()), this._transport.close()
      } catch {}
    })
  }
  send(e) {
    return __awaiter(this, void 0, void 0, function*() {
      let t;
      this._protocol === "json" ? t = new TextEncoder().encode(e + `
`) : t = e;
      try {
        yield this._writer.write(t)
      } catch {
        this.close()
      }
    })
  }
}
const zValue = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, -1, -1, -1, -1, -1, -1, -1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, -1, -1, -1, -1, 36, -1, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, -1, -1, -1, 63, -1];
let Reader$2 = class {
    constructor(e) {
      this.a = e, this.pos = 0
    }
    haveBytes() {
      return this.pos < this.a.length
    }
    getByte() {
      const e = this.a[this.pos];
      if (this.pos++, this.pos > this.a.length) throw new RangeError("out of bounds");
      return e
    }
    getChar() {
      return String.fromCharCode(this.getByte())
    }
    getInt() {
      let e = 0,
        t;
      for (; this.haveBytes() && (t = zValue[127 & this.getByte()]) >= 0;) e = (e << 6) + t;
      return this.pos--, e >>> 0
    }
  },
  Writer$2 = class {
    constructor() {
      this.a = []
    }
    toByteArray(e) {
      return Array.isArray(e) ? this.a : new Uint8Array(this.a)
    }
    putArray(e, t, r) {
      for (let s = t; s < r; s++) this.a.push(e[s])
    }
  };

function checksum(n) {
  let e = 0,
    t = 0,
    r = 0,
    s = 0,
    o = 0,
    i = n.length;
  for (; i >= 16;) e = e + n[o + 0] | 0, t = t + n[o + 1] | 0, r = r + n[o + 2] | 0, s = s + n[o + 3] | 0, e = e + n[o + 4] | 0, t = t + n[o + 5] | 0, r = r + n[o + 6] | 0, s = s + n[o + 7] | 0, e = e + n[o + 8] | 0, t = t + n[o + 9] | 0, r = r + n[o + 10] | 0, s = s + n[o + 11] | 0, e = e + n[o + 12] | 0, t = t + n[o + 13] | 0, r = r + n[o + 14] | 0, s = s + n[o + 15] | 0, o += 16, i -= 16;
  for (; i >= 4;) e = e + n[o + 0] | 0, t = t + n[o + 1] | 0, r = r + n[o + 2] | 0, s = s + n[o + 3] | 0, o += 4, i -= 4;
  switch (s = ((s + (r << 8) | 0) + (t << 16) | 0) + (e << 24) | 0, i) {
    case 3:
      s = s + (n[o + 2] << 8) | 0;
    case 2:
      s = s + (n[o + 1] << 16) | 0;
    case 1:
      s = s + (n[o + 0] << 24) | 0
  }
  return s >>> 0
}

function applyDelta(n, e) {
  let t = 0;
  const r = new Reader$2(e),
    s = n.length,
    o = e.length,
    i = r.getInt();
  if (r.getChar() !== `
`) throw new Error("size integer not terminated by '\\n'");
  const u = new Writer$2;
  for (; r.haveBytes();) {
    const c = r.getInt();
    let a;
    switch (r.getChar()) {
      case "@":
        if (a = r.getInt(), r.haveBytes() && r.getChar() !== ",") throw new Error("copy command not terminated by ','");
        if (t += c, t > i) throw new Error("copy exceeds output file size");
        if (a + c > s) throw new Error("copy extends past end of input");
        u.putArray(n, a, a + c);
        break;
      case ":":
        if (t += c, t > i) throw new Error("insert command gives an output larger than predicted");
        if (c > o) throw new Error("insert count exceeds size of delta");
        u.putArray(r.a, r.pos, r.pos + c), r.pos += c;
        break;
      case ";": {
        const f = u.toByteArray(n);
        if (c !== checksum(f)) throw new Error("bad checksum");
        if (t !== i) throw new Error("generated size does not match predicted size");
        return f
      }
      default:
        throw new Error("unknown delta operator")
    }
  }
  throw new Error("unterminated delta")
}
class JsonCodec {
  name() {
    return "json"
  }
  encodeCommands(e) {
    return e.map(t => JSON.stringify(t)).join(`
`)
  }
  decodeReplies(e) {
    return e.trim().split(`
`).map(t => JSON.parse(t))
  }
  applyDeltaIfNeeded(e, t) {
    let r, s;
    if (e.delta) {
      const o = applyDelta(t, new TextEncoder().encode(e.data));
      r = JSON.parse(new TextDecoder().decode(o)), s = o
    } else r = JSON.parse(e.data), s = new TextEncoder().encode(e.data);
    return {
      newData: r,
      newPrevValue: s
    }
  }
}
const defaults = {
  token: "",
  getToken: null,
  data: null,
  getData: null,
  debug: !1,
  name: "js",
  version: "",
  fetch: null,
  readableStream: null,
  websocket: null,
  eventsource: null,
  sockjs: null,
  sockjsOptions: {},
  emulationEndpoint: "/emulation",
  minReconnectDelay: 500,
  maxReconnectDelay: 2e4,
  timeout: 5e3,
  maxServerPingDelay: 1e4,
  networkEventTarget: null
};
class UnauthorizedError extends Error {
  constructor(e) {
    super(e), this.name = this.constructor.name
  }
}
class Centrifuge extends EventEmitter$2 {
  constructor(e, t) {
    super(), this._reconnectTimeout = null, this._refreshTimeout = null, this._serverPingTimeout = null, this.state = State$1.Disconnected, this._transportIsOpen = !1, this._endpoint = e, this._emulation = !1, this._transports = [], this._currentTransportIndex = 0, this._triedAllTransports = !1, this._transportWasOpen = !1, this._transport = null, this._transportId = 0, this._deviceWentOffline = !1, this._transportClosed = !0, this._codec = new JsonCodec, this._reconnecting = !1, this._reconnectTimeout = null, this._reconnectAttempts = 0, this._client = null, this._session = "", this._node = "", this._subs = {}, this._serverSubs = {}, this._commandId = 0, this._commands = [], this._batching = !1, this._refreshRequired = !1, this._refreshTimeout = null, this._callbacks = {}, this._token = "", this._data = null, this._dispatchPromise = Promise.resolve(), this._serverPing = 0, this._serverPingTimeout = null, this._sendPong = !1, this._promises = {}, this._promiseId = 0, this._debugEnabled = !1, this._networkEventsSet = !1, this._config = Object.assign(Object.assign({}, defaults), t), this._configure(), this._debugEnabled ? (this.on("state", r => {
      this._debug("client state", r.oldState, "->", r.newState)
    }), this.on("error", r => {
      this._debug("client error", r)
    })) : this.on("error", function() {
      Function.prototype()
    })
  }
  newSubscription(e, t) {
    if (this.getSubscription(e) !== null) throw new Error("Subscription to the channel " + e + " already exists");
    const r = new Subscription(this, e, t);
    return this._subs[e] = r, r
  }
  getSubscription(e) {
    return this._getSub(e)
  }
  removeSubscription(e) {
    e && (e.state !== SubscriptionState.Unsubscribed && e.unsubscribe(), this._removeSubscription(e))
  }
  subscriptions() {
    return this._subs
  }
  ready(e) {
    return this.state === State$1.Disconnected ? Promise.reject({
      code: errorCodes.clientDisconnected,
      message: "client disconnected"
    }) : this.state === State$1.Connected ? Promise.resolve() : new Promise((t, r) => {
      const s = {
        resolve: t,
        reject: r
      };
      e && (s.timeout = setTimeout(function() {
        r({
          code: errorCodes.timeout,
          message: "timeout"
        })
      }, e)), this._promises[this._nextPromiseId()] = s
    })
  }
  connect() {
    if (this._isConnected()) {
      this._debug("connect called when already connected");
      return
    }
    if (this._isConnecting()) {
      this._debug("connect called when already connecting");
      return
    }
    this._debug("connect called"), this._reconnectAttempts = 0, this._startConnecting()
  }
  disconnect() {
    this._disconnect(disconnectedCodes.disconnectCalled, "disconnect called", !1)
  }
  setToken(e) {
    this._token = e
  }
  send(e) {
    const t = {
        send: {
          data: e
        }
      },
      r = this;
    return this._methodCall().then(function() {
      return r._transportSendCommands([t]) ? Promise.resolve() : Promise.reject(r._createErrorObject(errorCodes.transportWriteError, "transport write error"))
    })
  }
  rpc(e, t) {
    const r = {
        rpc: {
          method: e,
          data: t
        }
      },
      s = this;
    return this._methodCall().then(function() {
      return s._callPromise(r, function(o) {
        return {
          data: o.rpc.data
        }
      })
    })
  }
  publish(e, t) {
    const r = {
        publish: {
          channel: e,
          data: t
        }
      },
      s = this;
    return this._methodCall().then(function() {
      return s._callPromise(r, function() {
        return {}
      })
    })
  }
  history(e, t) {
    const r = {
        history: this._getHistoryRequest(e, t)
      },
      s = this;
    return this._methodCall().then(function() {
      return s._callPromise(r, function(o) {
        const i = o.history,
          u = [];
        if (i.publications)
          for (let c = 0; c < i.publications.length; c++) u.push(s._getPublicationContext(e, i.publications[c]));
        return {
          publications: u,
          epoch: i.epoch || "",
          offset: i.offset || 0
        }
      })
    })
  }
  presence(e) {
    const t = {
        presence: {
          channel: e
        }
      },
      r = this;
    return this._methodCall().then(function() {
      return r._callPromise(t, function(s) {
        const o = s.presence.presence;
        for (const i in o)
          if (o.hasOwnProperty(i)) {
            const u = o[i].conn_info,
              c = o[i].chan_info;
            u && (o[i].connInfo = u), c && (o[i].chanInfo = c)
          } return {
          clients: o
        }
      })
    })
  }
  presenceStats(e) {
    const t = {
        presence_stats: {
          channel: e
        }
      },
      r = this;
    return this._methodCall().then(function() {
      return r._callPromise(t, function(s) {
        const o = s.presence_stats;
        return {
          numUsers: o.num_users,
          numClients: o.num_clients
        }
      })
    })
  }
  startBatching() {
    this._batching = !0
  }
  stopBatching() {
    const e = this;
    Promise.resolve().then(function() {
      Promise.resolve().then(function() {
        e._batching = !1, e._flush()
      })
    })
  }
  _debug(...e) {
    this._debugEnabled && log("debug", e)
  }
  _formatOverride() {}
  _configure() {
    if (!("Promise" in globalThis)) throw new Error("Promise polyfill required");
    if (!this._endpoint) throw new Error("endpoint configuration required");
    if (this._config.token !== null && (this._token = this._config.token), this._config.data !== null && (this._data = this._config.data), this._codec = new JsonCodec, this._formatOverride(), (this._config.debug === !0 || typeof localStorage < "u" && localStorage.getItem("centrifuge.debug")) && (this._debugEnabled = !0), this._debug("config", this._config), typeof this._endpoint != "string")
      if (typeof this._endpoint == "object" && this._endpoint instanceof Array) {
        this._transports = this._endpoint, this._emulation = !0;
        for (const e in this._transports)
          if (this._transports.hasOwnProperty(e)) {
            const t = this._transports[e];
            if (!t.endpoint || !t.transport) throw new Error("malformed transport configuration");
            const r = t.transport;
            if (["websocket", "http_stream", "sse", "sockjs", "webtransport"].indexOf(r) < 0) throw new Error("unsupported transport name: " + r)
          }
      } else throw new Error("unsupported url configuration type: only string or array of objects are supported")
  }
  _setState(e) {
    if (this.state !== e) {
      this._reconnecting = !1;
      const t = this.state;
      return this.state = e, this.emit("state", {
        newState: e,
        oldState: t
      }), !0
    }
    return !1
  }
  _isDisconnected() {
    return this.state === State$1.Disconnected
  }
  _isConnecting() {
    return this.state === State$1.Connecting
  }
  _isConnected() {
    return this.state === State$1.Connected
  }
  _nextCommandId() {
    return ++this._commandId
  }
  _setNetworkEvents() {
    if (this._networkEventsSet) return;
    let e = null;
    this._config.networkEventTarget !== null ? e = this._config.networkEventTarget : typeof globalThis.addEventListener < "u" && (e = globalThis), e && (e.addEventListener("offline", () => {
      this._debug("offline event triggered"), (this.state === State$1.Connected || this.state === State$1.Connecting) && (this._disconnect(connectingCodes.transportClosed, "transport closed", !0), this._deviceWentOffline = !0)
    }), e.addEventListener("online", () => {
      this._debug("online event triggered"), this.state === State$1.Connecting && (this._deviceWentOffline && !this._transportClosed && (this._deviceWentOffline = !1, this._transportClosed = !0), this._clearReconnectTimeout(), this._startReconnecting())
    }), this._networkEventsSet = !0)
  }
  _getReconnectDelay() {
    const e = backoff(this._reconnectAttempts, this._config.minReconnectDelay, this._config.maxReconnectDelay);
    return this._reconnectAttempts += 1, e
  }
  _clearOutgoingRequests() {
    for (const e in this._callbacks)
      if (this._callbacks.hasOwnProperty(e)) {
        const t = this._callbacks[e];
        clearTimeout(t.timeout);
        const r = t.errback;
        if (!r) continue;
        r({
          error: this._createErrorObject(errorCodes.connectionClosed, "connection closed")
        })
      } this._callbacks = {}
  }
  _clearConnectedState() {
    this._client = null, this._clearServerPingTimeout(), this._clearRefreshTimeout();
    for (const e in this._subs) {
      if (!this._subs.hasOwnProperty(e)) continue;
      const t = this._subs[e];
      t.state === SubscriptionState.Subscribed && t._setSubscribing(subscribingCodes.transportClosed, "transport closed")
    }
    for (const e in this._serverSubs) this._serverSubs.hasOwnProperty(e) && this.emit("subscribing", {
      channel: e
    })
  }
  _handleWriteError(e) {
    for (const t of e) {
      const r = t.id;
      if (!(r in this._callbacks)) continue;
      const s = this._callbacks[r];
      clearTimeout(this._callbacks[r].timeout), delete this._callbacks[r];
      const o = s.errback;
      o({
        error: this._createErrorObject(errorCodes.transportWriteError, "transport write error")
      })
    }
  }
  _transportSendCommands(e) {
    if (!e.length) return !0;
    if (!this._transport) return !1;
    try {
      this._transport.send(this._codec.encodeCommands(e), this._session, this._node)
    } catch (t) {
      return this._debug("error writing commands", t), this._handleWriteError(e), !1
    }
    return !0
  }
  _initializeTransport() {
    let e;
    this._config.websocket !== null ? e = this._config.websocket : typeof globalThis.WebSocket != "function" && typeof globalThis.WebSocket != "object" || (e = globalThis.WebSocket);
    let t = null;
    this._config.sockjs !== null ? t = this._config.sockjs : typeof globalThis.SockJS < "u" && (t = globalThis.SockJS);
    let r = null;
    this._config.eventsource !== null ? r = this._config.eventsource : typeof globalThis.EventSource < "u" && (r = globalThis.EventSource);
    let s = null;
    this._config.fetch !== null ? s = this._config.fetch : typeof globalThis.fetch < "u" && (s = globalThis.fetch);
    let o = null;
    if (this._config.readableStream !== null ? o = this._config.readableStream : typeof globalThis.ReadableStream < "u" && (o = globalThis.ReadableStream), this._emulation) {
      this._currentTransportIndex >= this._transports.length && (this._triedAllTransports = !0, this._currentTransportIndex = 0);
      let h = 0;
      for (;;) {
        if (h >= this._transports.length) throw new Error("no supported transport found");
        const p = this._transports[this._currentTransportIndex],
          m = p.transport,
          b = p.endpoint;
        if (m === "websocket") {
          if (this._debug("trying websocket transport"), this._transport = new WebsocketTransport(b, {
              websocket: e
            }), !this._transport.supported()) {
            this._debug("websocket transport not available"), this._currentTransportIndex++, h++;
            continue
          }
        } else if (m === "webtransport") {
          if (this._debug("trying webtransport transport"), this._transport = new WebtransportTransport(b, {
              webtransport: globalThis.WebTransport,
              decoder: this._codec,
              encoder: this._codec
            }), !this._transport.supported()) {
            this._debug("webtransport transport not available"), this._currentTransportIndex++, h++;
            continue
          }
        } else if (m === "http_stream") {
          if (this._debug("trying http_stream transport"), this._transport = new HttpStreamTransport(b, {
              fetch: s,
              readableStream: o,
              emulationEndpoint: this._config.emulationEndpoint,
              decoder: this._codec,
              encoder: this._codec
            }), !this._transport.supported()) {
            this._debug("http_stream transport not available"), this._currentTransportIndex++, h++;
            continue
          }
        } else if (m === "sse") {
          if (this._debug("trying sse transport"), this._transport = new SseTransport(b, {
              eventsource: r,
              fetch: s,
              emulationEndpoint: this._config.emulationEndpoint
            }), !this._transport.supported()) {
            this._debug("sse transport not available"), this._currentTransportIndex++, h++;
            continue
          }
        } else if (m === "sockjs") {
          if (this._debug("trying sockjs"), this._transport = new SockjsTransport(b, {
              sockjs: t,
              sockjsOptions: this._config.sockjsOptions
            }), !this._transport.supported()) {
            this._debug("sockjs transport not available"), this._currentTransportIndex++, h++;
            continue
          }
        } else throw new Error("unknown transport " + m);
        break
      }
    } else {
      if (startsWith(this._endpoint, "http")) throw new Error("Provide explicit transport endpoints configuration in case of using HTTP (i.e. using array of TransportEndpoint instead of a single string), or use ws(s):// scheme in an endpoint if you aimed using WebSocket transport");
      if (this._debug("client will use websocket"), this._transport = new WebsocketTransport(this._endpoint, {
          websocket: e
        }), !this._transport.supported()) throw new Error("WebSocket not available")
    }
    const i = this,
      u = this._transport,
      c = this._nextTransportId();
    i._debug("id of transport", c);
    let a = !1;
    const f = [];
    if (this._transport.emulation()) {
      const h = i._sendConnect(!0);
      f.push(h)
    }
    this._setNetworkEvents();
    const l = this._codec.encodeCommands(f);
    this._transportClosed = !1;
    let d;
    d = setTimeout(function() {
      u.close()
    }, this._config.timeout), this._transport.initialize(this._codec.name(), {
      onOpen: function() {
        if (d && (clearTimeout(d), d = null), i._transportId != c) {
          i._debug("open callback from non-actual transport"), u.close();
          return
        }
        a = !0, i._debug(u.subName(), "transport open"), !u.emulation() && (i._transportIsOpen = !0, i._transportWasOpen = !0, i.startBatching(), i._sendConnect(!1), i._sendSubscribeCommands(), i.stopBatching(), i.emit("__centrifuge_debug:connect_frame_sent", {}))
      },
      onError: function(h) {
        if (i._transportId != c) {
          i._debug("error callback from non-actual transport");
          return
        }
        i._debug("transport level error", h)
      },
      onClose: function(h) {
        if (d && (clearTimeout(d), d = null), i._transportId != c) {
          i._debug("close callback from non-actual transport");
          return
        }
        i._debug(u.subName(), "transport closed"), i._transportClosed = !0, i._transportIsOpen = !1;
        let p = "connection closed",
          m = !0,
          b = 0;
        if (h && "code" in h && h.code && (b = h.code), h && h.reason) try {
          const g = JSON.parse(h.reason);
          p = g.reason, m = g.reconnect
        } catch {
          p = h.reason, (b >= 3500 && b < 4e3 || b >= 4500 && b < 5e3) && (m = !1)
        }
        b < 3e3 ? (b === 1009 ? (b = disconnectedCodes.messageSizeLimit, p = "message size limit exceeded", m = !1) : (b = connectingCodes.transportClosed, p = "transport closed"), i._emulation && !i._transportWasOpen && (i._currentTransportIndex++, i._currentTransportIndex >= i._transports.length && (i._triedAllTransports = !0, i._currentTransportIndex = 0))) : i._transportWasOpen = !0, i._isConnecting() && !a && i.emit("error", {
          type: "transport",
          error: {
            code: errorCodes.transportClosed,
            message: "transport closed"
          },
          transport: u.name()
        }), i._reconnecting = !1, i._disconnect(b, p, m)
      },
      onMessage: function(h) {
        i._dataReceived(h)
      }
    }, l), i.emit("__centrifuge_debug:transport_initialized", {})
  }
  _sendConnect(e) {
    const t = this._constructConnectCommand(),
      r = this;
    return this._call(t, e).then(s => {
      const o = s.reply.connect;
      r._connectResponse(o), s.next && s.next()
    }, s => {
      r._connectError(s.error), s.next && s.next()
    }), t
  }
  _startReconnecting() {
    if (this._debug("start reconnecting"), !this._isConnecting()) {
      this._debug("stop reconnecting: client not in connecting state");
      return
    }
    if (this._reconnecting) {
      this._debug("reconnect already in progress, return from reconnect routine");
      return
    }
    if (this._transportClosed === !1) {
      this._debug("waiting for transport close");
      return
    }
    this._reconnecting = !0;
    const e = this,
      t = this._token === "";
    if (!(this._refreshRequired || t && this._config.getToken !== null)) {
      this._config.getData ? this._config.getData().then(function(s) {
        e._isConnecting() && (e._data = s, e._initializeTransport())
      }) : this._initializeTransport();
      return
    }
    this._getToken().then(function(s) {
      if (e._isConnecting()) {
        if (s == null || s == null) {
          e._failUnauthorized();
          return
        }
        e._token = s, e._debug("connection token refreshed"), e._config.getData ? e._config.getData().then(function(o) {
          e._isConnecting() && (e._data = o, e._initializeTransport())
        }) : e._initializeTransport()
      }
    }).catch(function(s) {
      if (!e._isConnecting()) return;
      if (s instanceof UnauthorizedError) {
        e._failUnauthorized();
        return
      }
      e.emit("error", {
        type: "connectToken",
        error: {
          code: errorCodes.clientConnectToken,
          message: s !== void 0 ? s.toString() : ""
        }
      });
      const o = e._getReconnectDelay();
      e._debug("error on connection token refresh, reconnect after " + o + " milliseconds", s), e._reconnecting = !1, e._reconnectTimeout = setTimeout(() => {
        e._startReconnecting()
      }, o)
    })
  }
  _connectError(e) {
    this.state === State$1.Connecting && (e.code === 109 && (this._refreshRequired = !0), e.code < 100 || e.temporary === !0 || e.code === 109 ? (this.emit("error", {
      type: "connect",
      error: e
    }), this._debug("closing transport due to connect error"), this._disconnect(e.code, e.message, !0)) : this._disconnect(e.code, e.message, !1))
  }
  _scheduleReconnect() {
    if (!this._isConnecting()) return;
    let e = !1;
    this._emulation && !this._transportWasOpen && !this._triedAllTransports && (e = !0);
    let t = this._getReconnectDelay();
    e && (t = 0), this._debug("reconnect after " + t + " milliseconds"), this._clearReconnectTimeout(), this._reconnectTimeout = setTimeout(() => {
      this._startReconnecting()
    }, t)
  }
  _constructConnectCommand() {
    const e = {};
    this._token && (e.token = this._token), this._data && (e.data = this._data), this._config.name && (e.name = this._config.name), this._config.version && (e.version = this._config.version);
    const t = {};
    let r = !1;
    for (const s in this._serverSubs)
      if (this._serverSubs.hasOwnProperty(s) && this._serverSubs[s].recoverable) {
        r = !0;
        const o = {
          recover: !0
        };
        this._serverSubs[s].offset && (o.offset = this._serverSubs[s].offset), this._serverSubs[s].epoch && (o.epoch = this._serverSubs[s].epoch), t[s] = o
      } return r && (e.subs = t), {
      connect: e
    }
  }
  _getHistoryRequest(e, t) {
    const r = {
      channel: e
    };
    return t !== void 0 && (t.since && (r.since = {
      offset: t.since.offset
    }, t.since.epoch && (r.since.epoch = t.since.epoch)), t.limit !== void 0 && (r.limit = t.limit), t.reverse === !0 && (r.reverse = !0)), r
  }
  _methodCall() {
    return this._isConnected() ? Promise.resolve() : new Promise((e, t) => {
      const r = setTimeout(function() {
        t({
          code: errorCodes.timeout,
          message: "timeout"
        })
      }, this._config.timeout);
      this._promises[this._nextPromiseId()] = {
        timeout: r,
        resolve: e,
        reject: t
      }
    })
  }
  _callPromise(e, t) {
    return new Promise((r, s) => {
      this._call(e, !1).then(o => {
        r(t(o.reply)), o.next && o.next()
      }, o => {
        s(o.error), o.next && o.next()
      })
    })
  }
  _dataReceived(e) {
    this._serverPing > 0 && this._waitServerPing();
    const t = this._codec.decodeReplies(e);
    this._dispatchPromise = this._dispatchPromise.then(() => {
      let r;
      this._dispatchPromise = new Promise(s => {
        r = s
      }), this._dispatchSynchronized(t, r)
    })
  }
  _dispatchSynchronized(e, t) {
    let r = Promise.resolve();
    for (const s in e) e.hasOwnProperty(s) && (r = r.then(() => this._dispatchReply(e[s])));
    r = r.then(() => {
      t()
    })
  }
  _dispatchReply(e) {
    let t;
    const r = new Promise(o => {
      t = o
    });
    if (e == null) return this._debug("dispatch: got undefined or null reply"), t(), r;
    const s = e.id;
    return s && s > 0 ? this._handleReply(e, t) : e.push ? this._handlePush(e.push, t) : this._handleServerPing(t), r
  }
  _call(e, t) {
    return new Promise((r, s) => {
      e.id = this._nextCommandId(), this._registerCall(e.id, r, s), t || this._addCommand(e)
    })
  }
  _startConnecting() {
    this._debug("start connecting"), this._setState(State$1.Connecting) && this.emit("connecting", {
      code: connectingCodes.connectCalled,
      reason: "connect called"
    }), this._client = null, this._startReconnecting()
  }
  _disconnect(e, t, r) {
    if (this._isDisconnected()) return;
    this._transportIsOpen = !1;
    const s = this.state;
    this._reconnecting = !1;
    const o = {
      code: e,
      reason: t
    };
    let i = !1;
    if (r ? i = this._setState(State$1.Connecting) : (i = this._setState(State$1.Disconnected), this._rejectPromises({
        code: errorCodes.clientDisconnected,
        message: "disconnected"
      })), this._clearOutgoingRequests(), s === State$1.Connecting && this._clearReconnectTimeout(), s === State$1.Connected && this._clearConnectedState(), i && (this._isConnecting() ? this.emit("connecting", o) : this.emit("disconnected", o)), this._transport) {
      this._debug("closing existing transport");
      const u = this._transport;
      this._transport = null, u.close(), this._transportClosed = !0, this._nextTransportId()
    } else this._debug("no transport to close");
    this._scheduleReconnect()
  }
  _failUnauthorized() {
    this._disconnect(disconnectedCodes.unauthorized, "unauthorized", !1)
  }
  _getToken() {
    if (this._debug("get connection token"), !this._config.getToken) throw this.emit("error", {
      type: "configuration",
      error: {
        code: errorCodes.badConfiguration,
        message: "token expired but no getToken function set in the configuration"
      }
    }), new UnauthorizedError("");
    return this._config.getToken({})
  }
  _refresh() {
    const e = this._client,
      t = this;
    this._getToken().then(function(r) {
      if (e !== t._client) return;
      if (!r) {
        t._failUnauthorized();
        return
      }
      if (t._token = r, t._debug("connection token refreshed"), !t._isConnected()) return;
      const s = {
        refresh: {
          token: t._token
        }
      };
      t._call(s, !1).then(o => {
        const i = o.reply.refresh;
        t._refreshResponse(i), o.next && o.next()
      }, o => {
        t._refreshError(o.error), o.next && o.next()
      })
    }).catch(function(r) {
      if (t._isConnected()) {
        if (r instanceof UnauthorizedError) {
          t._failUnauthorized();
          return
        }
        t.emit("error", {
          type: "refreshToken",
          error: {
            code: errorCodes.clientRefreshToken,
            message: r !== void 0 ? r.toString() : ""
          }
        }), t._refreshTimeout = setTimeout(() => t._refresh(), t._getRefreshRetryDelay())
      }
    })
  }
  _refreshError(e) {
    e.code < 100 || e.temporary === !0 ? (this.emit("error", {
      type: "refresh",
      error: e
    }), this._refreshTimeout = setTimeout(() => this._refresh(), this._getRefreshRetryDelay())) : this._disconnect(e.code, e.message, !1)
  }
  _getRefreshRetryDelay() {
    return backoff(0, 5e3, 1e4)
  }
  _refreshResponse(e) {
    this._refreshTimeout && (clearTimeout(this._refreshTimeout), this._refreshTimeout = null), e.expires && (this._client = e.client, this._refreshTimeout = setTimeout(() => this._refresh(), ttlMilliseconds(e.ttl)))
  }
  _removeSubscription(e) {
    e !== null && delete this._subs[e.channel]
  }
  _unsubscribe(e) {
    if (!this._transportIsOpen) return Promise.resolve();
    const r = {
        unsubscribe: {
          channel: e.channel
        }
      },
      s = this;
    return new Promise((i, u) => {
      this._call(r, !1).then(c => {
        i(), c.next && c.next()
      }, c => {
        i(), c.next && c.next(), s._disconnect(connectingCodes.unsubscribeError, "unsubscribe error", !0)
      })
    })
  }
  _getSub(e) {
    const t = this._subs[e];
    return t || null
  }
  _isServerSub(e) {
    return this._serverSubs[e] !== void 0
  }
  _sendSubscribeCommands() {
    const e = [];
    for (const t in this._subs) {
      if (!this._subs.hasOwnProperty(t)) continue;
      const r = this._subs[t];
      if (r._inflight !== !0 && r.state === SubscriptionState.Subscribing) {
        const s = r._subscribe();
        s && e.push(s)
      }
    }
    return e
  }
  _connectResponse(e) {
    if (this._transportIsOpen = !0, this._transportWasOpen = !0, this._reconnectAttempts = 0, this._refreshRequired = !1, this._isConnected()) return;
    this._client = e.client, this._setState(State$1.Connected), this._refreshTimeout && clearTimeout(this._refreshTimeout), e.expires && (this._refreshTimeout = setTimeout(() => this._refresh(), ttlMilliseconds(e.ttl))), this._session = e.session, this._node = e.node, this.startBatching(), this._sendSubscribeCommands(), this.stopBatching();
    const t = {
      client: e.client,
      transport: this._transport.subName()
    };
    e.data && (t.data = e.data), this.emit("connected", t), this._resolvePromises(), this._processServerSubs(e.subs || {}), e.ping && e.ping > 0 ? (this._serverPing = e.ping * 1e3, this._sendPong = e.pong === !0, this._waitServerPing()) : this._serverPing = 0
  }
  _processServerSubs(e) {
    for (const t in e) {
      if (!e.hasOwnProperty(t)) continue;
      const r = e[t];
      this._serverSubs[t] = {
        offset: r.offset,
        epoch: r.epoch,
        recoverable: r.recoverable || !1
      };
      const s = this._getSubscribeContext(t, r);
      this.emit("subscribed", s)
    }
    for (const t in e) {
      if (!e.hasOwnProperty(t)) continue;
      const r = e[t];
      if (r.recovered) {
        const s = r.publications;
        if (s && s.length > 0)
          for (const o in s) s.hasOwnProperty(o) && this._handlePublication(t, s[o])
      }
    }
    for (const t in this._serverSubs) this._serverSubs.hasOwnProperty(t) && (e[t] || (this.emit("unsubscribed", {
      channel: t
    }), delete this._serverSubs[t]))
  }
  _clearRefreshTimeout() {
    this._refreshTimeout !== null && (clearTimeout(this._refreshTimeout), this._refreshTimeout = null)
  }
  _clearReconnectTimeout() {
    this._reconnectTimeout !== null && (clearTimeout(this._reconnectTimeout), this._reconnectTimeout = null)
  }
  _clearServerPingTimeout() {
    this._serverPingTimeout !== null && (clearTimeout(this._serverPingTimeout), this._serverPingTimeout = null)
  }
  _waitServerPing() {
    this._config.maxServerPingDelay !== 0 && this._isConnected() && (this._clearServerPingTimeout(), this._serverPingTimeout = setTimeout(() => {
      this._isConnected() && this._disconnect(connectingCodes.noPing, "no ping", !0)
    }, this._serverPing + this._config.maxServerPingDelay))
  }
  _getSubscribeContext(e, t) {
    const r = {
      channel: e,
      positioned: !1,
      recoverable: !1,
      wasRecovering: !1,
      recovered: !1
    };
    t.recovered && (r.recovered = !0), t.positioned && (r.positioned = !0), t.recoverable && (r.recoverable = !0), t.was_recovering && (r.wasRecovering = !0);
    let s = "";
    "epoch" in t && (s = t.epoch);
    let o = 0;
    return "offset" in t && (o = t.offset), (r.positioned || r.recoverable) && (r.streamPosition = {
      offset: o,
      epoch: s
    }), t.data && (r.data = t.data), r
  }
  _handleReply(e, t) {
    const r = e.id;
    if (!(r in this._callbacks)) {
      t();
      return
    }
    const s = this._callbacks[r];
    if (clearTimeout(this._callbacks[r].timeout), delete this._callbacks[r], errorExists(e)) {
      const o = s.errback;
      if (!o) {
        t();
        return
      }
      const i = e.error;
      o({
        error: i,
        next: t
      })
    } else {
      const o = s.callback;
      if (!o) return;
      o({
        reply: e,
        next: t
      })
    }
  }
  _handleJoin(e, t) {
    const r = this._getSub(e);
    if (!r) {
      if (this._isServerSub(e)) {
        const s = {
          channel: e,
          info: this._getJoinLeaveContext(t.info)
        };
        this.emit("join", s)
      }
      return
    }
    r._handleJoin(t)
  }
  _handleLeave(e, t) {
    const r = this._getSub(e);
    if (!r) {
      if (this._isServerSub(e)) {
        const s = {
          channel: e,
          info: this._getJoinLeaveContext(t.info)
        };
        this.emit("leave", s)
      }
      return
    }
    r._handleLeave(t)
  }
  _handleUnsubscribe(e, t) {
    const r = this._getSub(e);
    if (!r) {
      this._isServerSub(e) && (delete this._serverSubs[e], this.emit("unsubscribed", {
        channel: e
      }));
      return
    }
    t.code < 2500 ? r._setUnsubscribed(t.code, t.reason, !1) : r._setSubscribing(t.code, t.reason)
  }
  _handleSubscribe(e, t) {
    this._serverSubs[e] = {
      offset: t.offset,
      epoch: t.epoch,
      recoverable: t.recoverable || !1
    }, this.emit("subscribed", this._getSubscribeContext(e, t))
  }
  _handleDisconnect(e) {
    const t = e.code;
    let r = !0;
    (t >= 3500 && t < 4e3 || t >= 4500 && t < 5e3) && (r = !1), this._disconnect(t, e.reason, r)
  }
  _getPublicationContext(e, t) {
    const r = {
      channel: e,
      data: t.data
    };
    return t.offset && (r.offset = t.offset), t.info && (r.info = this._getJoinLeaveContext(t.info)), t.tags && (r.tags = t.tags), r
  }
  _getJoinLeaveContext(e) {
    const t = {
      client: e.client,
      user: e.user
    };
    return e.conn_info && (t.connInfo = e.conn_info), e.chan_info && (t.chanInfo = e.chan_info), t
  }
  _handlePublication(e, t) {
    const r = this._getSub(e);
    if (!r) {
      if (this._isServerSub(e)) {
        const s = this._getPublicationContext(e, t);
        this.emit("publication", s), t.offset !== void 0 && (this._serverSubs[e].offset = t.offset)
      }
      return
    }
    r._handlePublication(t)
  }
  _handleMessage(e) {
    this.emit("message", {
      data: e.data
    })
  }
  _handleServerPing(e) {
    if (this._sendPong) {
      const t = {};
      this._transportSendCommands([t])
    }
    e()
  }
  _handlePush(e, t) {
    const r = e.channel;
    e.pub ? this._handlePublication(r, e.pub) : e.message ? this._handleMessage(e.message) : e.join ? this._handleJoin(r, e.join) : e.leave ? this._handleLeave(r, e.leave) : e.unsubscribe ? this._handleUnsubscribe(r, e.unsubscribe) : e.subscribe ? this._handleSubscribe(r, e.subscribe) : e.disconnect && this._handleDisconnect(e.disconnect), t()
  }
  _flush() {
    const e = this._commands.slice(0);
    this._commands = [], this._transportSendCommands(e)
  }
  _createErrorObject(e, t, r) {
    const s = {
      code: e,
      message: t
    };
    return r && (s.temporary = !0), s
  }
  _registerCall(e, t, r) {
    this._callbacks[e] = {
      callback: t,
      errback: r,
      timeout: null
    }, this._callbacks[e].timeout = setTimeout(() => {
      delete this._callbacks[e], isFunction(r) && r({
        error: this._createErrorObject(errorCodes.timeout, "timeout")
      })
    }, this._config.timeout)
  }
  _addCommand(e) {
    this._batching ? this._commands.push(e) : this._transportSendCommands([e])
  }
  _nextPromiseId() {
    return ++this._promiseId
  }
  _nextTransportId() {
    return ++this._transportId
  }
  _resolvePromises() {
    for (const e in this._promises) this._promises.hasOwnProperty(e) && (this._promises[e].timeout && clearTimeout(this._promises[e].timeout), this._promises[e].resolve(), delete this._promises[e])
  }
  _rejectPromises(e) {
    for (const t in this._promises) this._promises.hasOwnProperty(t) && (this._promises[t].timeout && clearTimeout(this._promises[t].timeout), this._promises[t].reject(e), delete this._promises[t])
  }
}
Centrifuge.SubscriptionState = SubscriptionState;
Centrifuge.State = State$1;
Centrifuge.UnauthorizedError = UnauthorizedError;
var indexLight = {
    exports: {}
  },
  indexMinimal = {},
  minimal = {},
  aspromise = asPromise$1;

function asPromise$1(n, e) {
  for (var t = new Array(arguments.length - 1), r = 0, s = 2, o = !0; s < arguments.length;) t[r++] = arguments[s++];
  return new Promise(function(u, c) {
    t[r] = function(f) {
      if (o)
        if (o = !1, f) c(f);
        else {
          for (var l = new Array(arguments.length - 1), d = 0; d < l.length;) l[d++] = arguments[d];
          u.apply(null, l)
        }
    };
    try {
      n.apply(e || null, t)
    } catch (a) {
      o && (o = !1, c(a))
    }
  })
}
var base64$1 = {};
(function(n) {
  var e = n;
  e.length = function(u) {
    var c = u.length;
    if (!c) return 0;
    for (var a = 0; --c % 4 > 1 && u.charAt(c) === "=";) ++a;
    return Math.ceil(u.length * 3) / 4 - a
  };
  for (var t = new Array(64), r = new Array(123), s = 0; s < 64;) r[t[s] = s < 26 ? s + 65 : s < 52 ? s + 71 : s < 62 ? s - 4 : s - 59 | 43] = s++;
  e.encode = function(u, c, a) {
    for (var f = null, l = [], d = 0, h = 0, p; c < a;) {
      var m = u[c++];
      switch (h) {
        case 0:
          l[d++] = t[m >> 2], p = (m & 3) << 4, h = 1;
          break;
        case 1:
          l[d++] = t[p | m >> 4], p = (m & 15) << 2, h = 2;
          break;
        case 2:
          l[d++] = t[p | m >> 6], l[d++] = t[m & 63], h = 0;
          break
      }
      d > 8191 && ((f || (f = [])).push(String.fromCharCode.apply(String, l)), d = 0)
    }
    return h && (l[d++] = t[p], l[d++] = 61, h === 1 && (l[d++] = 61)), f ? (d && f.push(String.fromCharCode.apply(String, l.slice(0, d))), f.join("")) : String.fromCharCode.apply(String, l.slice(0, d))
  };
  var o = "invalid encoding";
  e.decode = function(u, c, a) {
    for (var f = a, l = 0, d, h = 0; h < u.length;) {
      var p = u.charCodeAt(h++);
      if (p === 61 && l > 1) break;
      if ((p = r[p]) === void 0) throw Error(o);
      switch (l) {
        case 0:
          d = p, l = 1;
          break;
        case 1:
          c[a++] = d << 2 | (p & 48) >> 4, d = p, l = 2;
          break;
        case 2:
          c[a++] = (d & 15) << 4 | (p & 60) >> 2, d = p, l = 3;
          break;
        case 3:
          c[a++] = (d & 3) << 6 | p, l = 0;
          break
      }
    }
    if (l === 1) throw Error(o);
    return a - f
  }, e.test = function(u) {
    return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(u)
  }
})(base64$1);
var eventemitter = EventEmitter;

function EventEmitter() {
  this._listeners = {}
}
EventEmitter.prototype.on = function(e, t, r) {
  return (this._listeners[e] || (this._listeners[e] = [])).push({
    fn: t,
    ctx: r || this
  }), this
};
EventEmitter.prototype.off = function(e, t) {
  if (e === void 0) this._listeners = {};
  else if (t === void 0) this._listeners[e] = [];
  else
    for (var r = this._listeners[e], s = 0; s < r.length;) r[s].fn === t ? r.splice(s, 1) : ++s;
  return this
};
EventEmitter.prototype.emit = function(e) {
  var t = this._listeners[e];
  if (t) {
    for (var r = [], s = 1; s < arguments.length;) r.push(arguments[s++]);
    for (s = 0; s < t.length;) t[s].fn.apply(t[s++].ctx, r)
  }
  return this
};
var float = factory(factory);

function factory(n) {
  return typeof Float32Array < "u" ? function() {
    var e = new Float32Array([-0]),
      t = new Uint8Array(e.buffer),
      r = t[3] === 128;

    function s(c, a, f) {
      e[0] = c, a[f] = t[0], a[f + 1] = t[1], a[f + 2] = t[2], a[f + 3] = t[3]
    }

    function o(c, a, f) {
      e[0] = c, a[f] = t[3], a[f + 1] = t[2], a[f + 2] = t[1], a[f + 3] = t[0]
    }
    n.writeFloatLE = r ? s : o, n.writeFloatBE = r ? o : s;

    function i(c, a) {
      return t[0] = c[a], t[1] = c[a + 1], t[2] = c[a + 2], t[3] = c[a + 3], e[0]
    }

    function u(c, a) {
      return t[3] = c[a], t[2] = c[a + 1], t[1] = c[a + 2], t[0] = c[a + 3], e[0]
    }
    n.readFloatLE = r ? i : u, n.readFloatBE = r ? u : i
  }() : function() {
    function e(r, s, o, i) {
      var u = s < 0 ? 1 : 0;
      if (u && (s = -s), s === 0) r(1 / s > 0 ? 0 : 2147483648, o, i);
      else if (isNaN(s)) r(2143289344, o, i);
      else if (s > 34028234663852886e22) r((u << 31 | 2139095040) >>> 0, o, i);
      else if (s < 11754943508222875e-54) r((u << 31 | Math.round(s / 1401298464324817e-60)) >>> 0, o, i);
      else {
        var c = Math.floor(Math.log(s) / Math.LN2),
          a = Math.round(s * Math.pow(2, -c) * 8388608) & 8388607;
        r((u << 31 | c + 127 << 23 | a) >>> 0, o, i)
      }
    }
    n.writeFloatLE = e.bind(null, writeUintLE), n.writeFloatBE = e.bind(null, writeUintBE);

    function t(r, s, o) {
      var i = r(s, o),
        u = (i >> 31) * 2 + 1,
        c = i >>> 23 & 255,
        a = i & 8388607;
      return c === 255 ? a ? NaN : u * (1 / 0) : c === 0 ? u * 1401298464324817e-60 * a : u * Math.pow(2, c - 150) * (a + 8388608)
    }
    n.readFloatLE = t.bind(null, readUintLE), n.readFloatBE = t.bind(null, readUintBE)
  }(), typeof Float64Array < "u" ? function() {
    var e = new Float64Array([-0]),
      t = new Uint8Array(e.buffer),
      r = t[7] === 128;

    function s(c, a, f) {
      e[0] = c, a[f] = t[0], a[f + 1] = t[1], a[f + 2] = t[2], a[f + 3] = t[3], a[f + 4] = t[4], a[f + 5] = t[5], a[f + 6] = t[6], a[f + 7] = t[7]
    }

    function o(c, a, f) {
      e[0] = c, a[f] = t[7], a[f + 1] = t[6], a[f + 2] = t[5], a[f + 3] = t[4], a[f + 4] = t[3], a[f + 5] = t[2], a[f + 6] = t[1], a[f + 7] = t[0]
    }
    n.writeDoubleLE = r ? s : o, n.writeDoubleBE = r ? o : s;

    function i(c, a) {
      return t[0] = c[a], t[1] = c[a + 1], t[2] = c[a + 2], t[3] = c[a + 3], t[4] = c[a + 4], t[5] = c[a + 5], t[6] = c[a + 6], t[7] = c[a + 7], e[0]
    }

    function u(c, a) {
      return t[7] = c[a], t[6] = c[a + 1], t[5] = c[a + 2], t[4] = c[a + 3], t[3] = c[a + 4], t[2] = c[a + 5], t[1] = c[a + 6], t[0] = c[a + 7], e[0]
    }
    n.readDoubleLE = r ? i : u, n.readDoubleBE = r ? u : i
  }() : function() {
    function e(r, s, o, i, u, c) {
      var a = i < 0 ? 1 : 0;
      if (a && (i = -i), i === 0) r(0, u, c + s), r(1 / i > 0 ? 0 : 2147483648, u, c + o);
      else if (isNaN(i)) r(0, u, c + s), r(2146959360, u, c + o);
      else if (i > 17976931348623157e292) r(0, u, c + s), r((a << 31 | 2146435072) >>> 0, u, c + o);
      else {
        var f;
        if (i < 22250738585072014e-324) f = i / 5e-324, r(f >>> 0, u, c + s), r((a << 31 | f / 4294967296) >>> 0, u, c + o);
        else {
          var l = Math.floor(Math.log(i) / Math.LN2);
          l === 1024 && (l = 1023), f = i * Math.pow(2, -l), r(f * 4503599627370496 >>> 0, u, c + s), r((a << 31 | l + 1023 << 20 | f * 1048576 & 1048575) >>> 0, u, c + o)
        }
      }
    }
    n.writeDoubleLE = e.bind(null, writeUintLE, 0, 4), n.writeDoubleBE = e.bind(null, writeUintBE, 4, 0);

    function t(r, s, o, i, u) {
      var c = r(i, u + s),
        a = r(i, u + o),
        f = (a >> 31) * 2 + 1,
        l = a >>> 20 & 2047,
        d = 4294967296 * (a & 1048575) + c;
      return l === 2047 ? d ? NaN : f * (1 / 0) : l === 0 ? f * 5e-324 * d : f * Math.pow(2, l - 1075) * (d + 4503599627370496)
    }
    n.readDoubleLE = t.bind(null, readUintLE, 0, 4), n.readDoubleBE = t.bind(null, readUintBE, 4, 0)
  }(), n
}

function writeUintLE(n, e, t) {
  e[t] = n & 255, e[t + 1] = n >>> 8 & 255, e[t + 2] = n >>> 16 & 255, e[t + 3] = n >>> 24
}

function writeUintBE(n, e, t) {
  e[t] = n >>> 24, e[t + 1] = n >>> 16 & 255, e[t + 2] = n >>> 8 & 255, e[t + 3] = n & 255
}

function readUintLE(n, e) {
  return (n[e] | n[e + 1] << 8 | n[e + 2] << 16 | n[e + 3] << 24) >>> 0
}

function readUintBE(n, e) {
  return (n[e] << 24 | n[e + 1] << 16 | n[e + 2] << 8 | n[e + 3]) >>> 0
}
var inquire_1 = inquire$1;

function inquire$1(moduleName) {
  try {
    var mod = eval("quire".replace(/^/, "re"))(moduleName);
    if (mod && (mod.length || Object.keys(mod).length)) return mod
  } catch (n) {}
  return null
}
var utf8$2 = {};
(function(n) {
  var e = n;
  e.length = function(r) {
    for (var s = 0, o = 0, i = 0; i < r.length; ++i) o = r.charCodeAt(i), o < 128 ? s += 1 : o < 2048 ? s += 2 : (o & 64512) === 55296 && (r.charCodeAt(i + 1) & 64512) === 56320 ? (++i, s += 4) : s += 3;
    return s
  }, e.read = function(r, s, o) {
    var i = o - s;
    if (i < 1) return "";
    for (var u = null, c = [], a = 0, f; s < o;) f = r[s++], f < 128 ? c[a++] = f : f > 191 && f < 224 ? c[a++] = (f & 31) << 6 | r[s++] & 63 : f > 239 && f < 365 ? (f = ((f & 7) << 18 | (r[s++] & 63) << 12 | (r[s++] & 63) << 6 | r[s++] & 63) - 65536, c[a++] = 55296 + (f >> 10), c[a++] = 56320 + (f & 1023)) : c[a++] = (f & 15) << 12 | (r[s++] & 63) << 6 | r[s++] & 63, a > 8191 && ((u || (u = [])).push(String.fromCharCode.apply(String, c)), a = 0);
    return u ? (a && u.push(String.fromCharCode.apply(String, c.slice(0, a))), u.join("")) : String.fromCharCode.apply(String, c.slice(0, a))
  }, e.write = function(r, s, o) {
    for (var i = o, u, c, a = 0; a < r.length; ++a) u = r.charCodeAt(a), u < 128 ? s[o++] = u : u < 2048 ? (s[o++] = u >> 6 | 192, s[o++] = u & 63 | 128) : (u & 64512) === 55296 && ((c = r.charCodeAt(a + 1)) & 64512) === 56320 ? (u = 65536 + ((u & 1023) << 10) + (c & 1023), ++a, s[o++] = u >> 18 | 240, s[o++] = u >> 12 & 63 | 128, s[o++] = u >> 6 & 63 | 128, s[o++] = u & 63 | 128) : (s[o++] = u >> 12 | 224, s[o++] = u >> 6 & 63 | 128, s[o++] = u & 63 | 128);
    return o - i
  }
})(utf8$2);
var pool_1 = pool;

function pool(n, e, t) {
  var r = t || 8192,
    s = r >>> 1,
    o = null,
    i = r;
  return function(c) {
    if (c < 1 || c > s) return n(c);
    i + c > r && (o = n(r), i = 0);
    var a = e.call(o, i, i += c);
    return i & 7 && (i = (i | 7) + 1), a
  }
}
var longbits, hasRequiredLongbits;

function requireLongbits() {
  if (hasRequiredLongbits) return longbits;
  hasRequiredLongbits = 1, longbits = e;
  var n = requireMinimal();

  function e(o, i) {
    this.lo = o >>> 0, this.hi = i >>> 0
  }
  var t = e.zero = new e(0, 0);
  t.toNumber = function() {
    return 0
  }, t.zzEncode = t.zzDecode = function() {
    return this
  }, t.length = function() {
    return 1
  };
  var r = e.zeroHash = "\0\0\0\0\0\0\0\0";
  e.fromNumber = function(i) {
    if (i === 0) return t;
    var u = i < 0;
    u && (i = -i);
    var c = i >>> 0,
      a = (i - c) / 4294967296 >>> 0;
    return u && (a = ~a >>> 0, c = ~c >>> 0, ++c > 4294967295 && (c = 0, ++a > 4294967295 && (a = 0))), new e(c, a)
  }, e.from = function(i) {
    if (typeof i == "number") return e.fromNumber(i);
    if (n.isString(i))
      if (n.Long) i = n.Long.fromString(i);
      else return e.fromNumber(parseInt(i, 10));
    return i.low || i.high ? new e(i.low >>> 0, i.high >>> 0) : t
  }, e.prototype.toNumber = function(i) {
    if (!i && this.hi >>> 31) {
      var u = ~this.lo + 1 >>> 0,
        c = ~this.hi >>> 0;
      return u || (c = c + 1 >>> 0), -(u + c * 4294967296)
    }
    return this.lo + this.hi * 4294967296
  }, e.prototype.toLong = function(i) {
    return n.Long ? new n.Long(this.lo | 0, this.hi | 0, !!i) : {
      low: this.lo | 0,
      high: this.hi | 0,
      unsigned: !!i
    }
  };
  var s = String.prototype.charCodeAt;
  return e.fromHash = function(i) {
    return i === r ? t : new e((s.call(i, 0) | s.call(i, 1) << 8 | s.call(i, 2) << 16 | s.call(i, 3) << 24) >>> 0, (s.call(i, 4) | s.call(i, 5) << 8 | s.call(i, 6) << 16 | s.call(i, 7) << 24) >>> 0)
  }, e.prototype.toHash = function() {
    return String.fromCharCode(this.lo & 255, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, this.hi & 255, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24)
  }, e.prototype.zzEncode = function() {
    var i = this.hi >> 31;
    return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ i) >>> 0, this.lo = (this.lo << 1 ^ i) >>> 0, this
  }, e.prototype.zzDecode = function() {
    var i = -(this.lo & 1);
    return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ i) >>> 0, this.hi = (this.hi >>> 1 ^ i) >>> 0, this
  }, e.prototype.length = function() {
    var i = this.lo,
      u = (this.lo >>> 28 | this.hi << 4) >>> 0,
      c = this.hi >>> 24;
    return c === 0 ? u === 0 ? i < 16384 ? i < 128 ? 1 : 2 : i < 2097152 ? 3 : 4 : u < 16384 ? u < 128 ? 5 : 6 : u < 2097152 ? 7 : 8 : c < 128 ? 9 : 10
  }, longbits
}
var hasRequiredMinimal;

function requireMinimal() {
  return hasRequiredMinimal || (hasRequiredMinimal = 1, function(n) {
    var e = n;
    e.asPromise = aspromise, e.base64 = base64$1, e.EventEmitter = eventemitter, e.float = float, e.inquire = inquire_1, e.utf8 = utf8$2, e.pool = pool_1, e.LongBits = requireLongbits(), e.isNode = !!(typeof commonjsGlobal < "u" && commonjsGlobal && commonjsGlobal.process && commonjsGlobal.process.versions && commonjsGlobal.process.versions.node), e.global = e.isNode && commonjsGlobal || typeof window < "u" && window || typeof self < "u" && self || commonjsGlobal, e.emptyArray = Object.freeze ? Object.freeze([]) : [], e.emptyObject = Object.freeze ? Object.freeze({}) : {}, e.isInteger = Number.isInteger || function(o) {
      return typeof o == "number" && isFinite(o) && Math.floor(o) === o
    }, e.isString = function(o) {
      return typeof o == "string" || o instanceof String
    }, e.isObject = function(o) {
      return o && typeof o == "object"
    }, e.isset = e.isSet = function(o, i) {
      var u = o[i];
      return u != null && o.hasOwnProperty(i) ? typeof u != "object" || (Array.isArray(u) ? u.length : Object.keys(u).length) > 0 : !1
    }, e.Buffer = function() {
      try {
        var s = e.inquire("buffer").Buffer;
        return s.prototype.utf8Write ? s : null
      } catch {
        return null
      }
    }(), e._Buffer_from = null, e._Buffer_allocUnsafe = null, e.newBuffer = function(o) {
      return typeof o == "number" ? e.Buffer ? e._Buffer_allocUnsafe(o) : new e.Array(o) : e.Buffer ? e._Buffer_from(o) : typeof Uint8Array > "u" ? o : new Uint8Array(o)
    }, e.Array = typeof Uint8Array < "u" ? Uint8Array : Array, e.Long = e.global.dcodeIO && e.global.dcodeIO.Long || e.global.Long || e.inquire("long"), e.key2Re = /^true|false|0|1$/, e.key32Re = /^-?(?:0|[1-9][0-9]*)$/, e.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/, e.longToHash = function(o) {
      return o ? e.LongBits.from(o).toHash() : e.LongBits.zeroHash
    }, e.longFromHash = function(o, i) {
      var u = e.LongBits.fromHash(o);
      return e.Long ? e.Long.fromBits(u.lo, u.hi, i) : u.toNumber(!!i)
    };

    function t(s, o, i) {
      for (var u = Object.keys(o), c = 0; c < u.length; ++c)(s[u[c]] === void 0 || !i) && (s[u[c]] = o[u[c]]);
      return s
    }
    e.merge = t, e.lcFirst = function(o) {
      return o.charAt(0).toLowerCase() + o.substring(1)
    };

    function r(s) {
      function o(i, u) {
        if (!(this instanceof o)) return new o(i, u);
        Object.defineProperty(this, "message", {
          get: function() {
            return i
          }
        }), Error.captureStackTrace ? Error.captureStackTrace(this, o) : Object.defineProperty(this, "stack", {
          value: new Error().stack || ""
        }), u && t(this, u)
      }
      return o.prototype = Object.create(Error.prototype, {
        constructor: {
          value: o,
          writable: !0,
          enumerable: !1,
          configurable: !0
        },
        name: {
          get: function() {
            return s
          },
          set: void 0,
          enumerable: !1,
          configurable: !0
        },
        toString: {
          value: function() {
            return this.name + ": " + this.message
          },
          writable: !0,
          enumerable: !1,
          configurable: !0
        }
      }), o
    }
    e.newError = r, e.ProtocolError = r("ProtocolError"), e.oneOfGetter = function(o) {
      for (var i = {}, u = 0; u < o.length; ++u) i[o[u]] = 1;
      return function() {
        for (var c = Object.keys(this), a = c.length - 1; a > -1; --a)
          if (i[c[a]] === 1 && this[c[a]] !== void 0 && this[c[a]] !== null) return c[a]
      }
    }, e.oneOfSetter = function(o) {
      return function(i) {
        for (var u = 0; u < o.length; ++u) o[u] !== i && delete this[o[u]]
      }
    }, e.toJSONOptions = {
      longs: String,
      enums: String,
      bytes: String,
      json: !0
    }, e._configure = function() {
      var s = e.Buffer;
      if (!s) {
        e._Buffer_from = e._Buffer_allocUnsafe = null;
        return
      }
      e._Buffer_from = s.from !== Uint8Array.from && s.from || function(i, u) {
        return new s(i, u)
      }, e._Buffer_allocUnsafe = s.allocUnsafe || function(i) {
        return new s(i)
      }
    }
  }(minimal)), minimal
}
var writer = Writer$1,
  util$6 = requireMinimal(),
  BufferWriter$1, LongBits$1 = util$6.LongBits,
  base64 = util$6.base64,
  utf8$1 = util$6.utf8;

function Op(n, e, t) {
  this.fn = n, this.len = e, this.next = void 0, this.val = t
}

function noop() {}

function State(n) {
  this.head = n.head, this.tail = n.tail, this.len = n.len, this.next = n.states
}

function Writer$1() {
  this.len = 0, this.head = new Op(noop, 0, 0), this.tail = this.head, this.states = null
}
var create$1 = function n() {
  return util$6.Buffer ? function() {
    return (Writer$1.create = function() {
      return new BufferWriter$1
    })()
  } : function() {
    return new Writer$1
  }
};
Writer$1.create = create$1();
Writer$1.alloc = function n(e) {
  return new util$6.Array(e)
};
util$6.Array !== Array && (Writer$1.alloc = util$6.pool(Writer$1.alloc, util$6.Array.prototype.subarray));
Writer$1.prototype._push = function n(e, t, r) {
  return this.tail = this.tail.next = new Op(e, t, r), this.len += t, this
};

function writeByte(n, e, t) {
  e[t] = n & 255
}

function writeVarint32(n, e, t) {
  for (; n > 127;) e[t++] = n & 127 | 128, n >>>= 7;
  e[t] = n
}

function VarintOp(n, e) {
  this.len = n, this.next = void 0, this.val = e
}
VarintOp.prototype = Object.create(Op.prototype);
VarintOp.prototype.fn = writeVarint32;
Writer$1.prototype.uint32 = function n(e) {
  return this.len += (this.tail = this.tail.next = new VarintOp((e = e >>> 0) < 128 ? 1 : e < 16384 ? 2 : e < 2097152 ? 3 : e < 268435456 ? 4 : 5, e)).len, this
};
Writer$1.prototype.int32 = function n(e) {
  return e < 0 ? this._push(writeVarint64, 10, LongBits$1.fromNumber(e)) : this.uint32(e)
};
Writer$1.prototype.sint32 = function n(e) {
  return this.uint32((e << 1 ^ e >> 31) >>> 0)
};

function writeVarint64(n, e, t) {
  for (; n.hi;) e[t++] = n.lo & 127 | 128, n.lo = (n.lo >>> 7 | n.hi << 25) >>> 0, n.hi >>>= 7;
  for (; n.lo > 127;) e[t++] = n.lo & 127 | 128, n.lo = n.lo >>> 7;
  e[t++] = n.lo
}
Writer$1.prototype.uint64 = function n(e) {
  var t = LongBits$1.from(e);
  return this._push(writeVarint64, t.length(), t)
};
Writer$1.prototype.int64 = Writer$1.prototype.uint64;
Writer$1.prototype.sint64 = function n(e) {
  var t = LongBits$1.from(e).zzEncode();
  return this._push(writeVarint64, t.length(), t)
};
Writer$1.prototype.bool = function n(e) {
  return this._push(writeByte, 1, e ? 1 : 0)
};

function writeFixed32(n, e, t) {
  e[t] = n & 255, e[t + 1] = n >>> 8 & 255, e[t + 2] = n >>> 16 & 255, e[t + 3] = n >>> 24
}
Writer$1.prototype.fixed32 = function n(e) {
  return this._push(writeFixed32, 4, e >>> 0)
};
Writer$1.prototype.sfixed32 = Writer$1.prototype.fixed32;
Writer$1.prototype.fixed64 = function n(e) {
  var t = LongBits$1.from(e);
  return this._push(writeFixed32, 4, t.lo)._push(writeFixed32, 4, t.hi)
};
Writer$1.prototype.sfixed64 = Writer$1.prototype.fixed64;
Writer$1.prototype.float = function n(e) {
  return this._push(util$6.float.writeFloatLE, 4, e)
};
Writer$1.prototype.double = function n(e) {
  return this._push(util$6.float.writeDoubleLE, 8, e)
};
var writeBytes = util$6.Array.prototype.set ? function n(e, t, r) {
  t.set(e, r)
} : function n(e, t, r) {
  for (var s = 0; s < e.length; ++s) t[r + s] = e[s]
};
Writer$1.prototype.bytes = function n(e) {
  var t = e.length >>> 0;
  if (!t) return this._push(writeByte, 1, 0);
  if (util$6.isString(e)) {
    var r = Writer$1.alloc(t = base64.length(e));
    base64.decode(e, r, 0), e = r
  }
  return this.uint32(t)._push(writeBytes, t, e)
};
Writer$1.prototype.string = function n(e) {
  var t = utf8$1.length(e);
  return t ? this.uint32(t)._push(utf8$1.write, t, e) : this._push(writeByte, 1, 0)
};
Writer$1.prototype.fork = function n() {
  return this.states = new State(this), this.head = this.tail = new Op(noop, 0, 0), this.len = 0, this
};
Writer$1.prototype.reset = function n() {
  return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new Op(noop, 0, 0), this.len = 0), this
};
Writer$1.prototype.ldelim = function n() {
  var e = this.head,
    t = this.tail,
    r = this.len;
  return this.reset().uint32(r), r && (this.tail.next = e.next, this.tail = t, this.len += r), this
};
Writer$1.prototype.finish = function n() {
  for (var e = this.head.next, t = this.constructor.alloc(this.len), r = 0; e;) e.fn(e.val, t, r), r += e.len, e = e.next;
  return t
};
Writer$1._configure = function(n) {
  BufferWriter$1 = n, Writer$1.create = create$1(), BufferWriter$1._configure()
};
var writer_buffer = BufferWriter,
  Writer = writer;
(BufferWriter.prototype = Object.create(Writer.prototype)).constructor = BufferWriter;
var util$5 = requireMinimal();

function BufferWriter() {
  Writer.call(this)
}
BufferWriter._configure = function() {
  BufferWriter.alloc = util$5._Buffer_allocUnsafe, BufferWriter.writeBytesBuffer = util$5.Buffer && util$5.Buffer.prototype instanceof Uint8Array && util$5.Buffer.prototype.set.name === "set" ? function(e, t, r) {
    t.set(e, r)
  } : function(e, t, r) {
    if (e.copy) e.copy(t, r, 0, e.length);
    else
      for (var s = 0; s < e.length;) t[r++] = e[s++]
  }
};
BufferWriter.prototype.bytes = function n(e) {
  util$5.isString(e) && (e = util$5._Buffer_from(e, "base64"));
  var t = e.length >>> 0;
  return this.uint32(t), t && this._push(BufferWriter.writeBytesBuffer, t, e), this
};

function writeStringBuffer(n, e, t) {
  n.length < 40 ? util$5.utf8.write(n, e, t) : e.utf8Write ? e.utf8Write(n, t) : e.write(n, t)
}
BufferWriter.prototype.string = function n(e) {
  var t = util$5.Buffer.byteLength(e);
  return this.uint32(t), t && this._push(writeStringBuffer, t, e), this
};
BufferWriter._configure();
var reader = Reader$1,
  util$4 = requireMinimal(),
  BufferReader$1, LongBits = util$4.LongBits,
  utf8 = util$4.utf8;

function indexOutOfRange(n, e) {
  return RangeError("index out of range: " + n.pos + " + " + (e || 1) + " > " + n.len)
}

function Reader$1(n) {
  this.buf = n, this.pos = 0, this.len = n.length
}
var create_array = typeof Uint8Array < "u" ? function n(e) {
    if (e instanceof Uint8Array || Array.isArray(e)) return new Reader$1(e);
    throw Error("illegal buffer")
  } : function n(e) {
    if (Array.isArray(e)) return new Reader$1(e);
    throw Error("illegal buffer")
  },
  create = function n() {
    return util$4.Buffer ? function(t) {
      return (Reader$1.create = function(s) {
        return util$4.Buffer.isBuffer(s) ? new BufferReader$1(s) : create_array(s)
      })(t)
    } : create_array
  };
Reader$1.create = create();
Reader$1.prototype._slice = util$4.Array.prototype.subarray || util$4.Array.prototype.slice;
Reader$1.prototype.uint32 = function n() {
  var e = 4294967295;
  return function() {
    if (e = (this.buf[this.pos] & 127) >>> 0, this.buf[this.pos++] < 128 || (e = (e | (this.buf[this.pos] & 127) << 7) >>> 0, this.buf[this.pos++] < 128) || (e = (e | (this.buf[this.pos] & 127) << 14) >>> 0, this.buf[this.pos++] < 128) || (e = (e | (this.buf[this.pos] & 127) << 21) >>> 0, this.buf[this.pos++] < 128) || (e = (e | (this.buf[this.pos] & 15) << 28) >>> 0, this.buf[this.pos++] < 128)) return e;
    if ((this.pos += 5) > this.len) throw this.pos = this.len, indexOutOfRange(this, 10);
    return e
  }
}();
Reader$1.prototype.int32 = function n() {
  return this.uint32() | 0
};
Reader$1.prototype.sint32 = function n() {
  var e = this.uint32();
  return e >>> 1 ^ -(e & 1) | 0
};

function readLongVarint() {
  var n = new LongBits(0, 0),
    e = 0;
  if (this.len - this.pos > 4) {
    for (; e < 4; ++e)
      if (n.lo = (n.lo | (this.buf[this.pos] & 127) << e * 7) >>> 0, this.buf[this.pos++] < 128) return n;
    if (n.lo = (n.lo | (this.buf[this.pos] & 127) << 28) >>> 0, n.hi = (n.hi | (this.buf[this.pos] & 127) >> 4) >>> 0, this.buf[this.pos++] < 128) return n;
    e = 0
  } else {
    for (; e < 3; ++e) {
      if (this.pos >= this.len) throw indexOutOfRange(this);
      if (n.lo = (n.lo | (this.buf[this.pos] & 127) << e * 7) >>> 0, this.buf[this.pos++] < 128) return n
    }
    return n.lo = (n.lo | (this.buf[this.pos++] & 127) << e * 7) >>> 0, n
  }
  if (this.len - this.pos > 4) {
    for (; e < 5; ++e)
      if (n.hi = (n.hi | (this.buf[this.pos] & 127) << e * 7 + 3) >>> 0, this.buf[this.pos++] < 128) return n
  } else
    for (; e < 5; ++e) {
      if (this.pos >= this.len) throw indexOutOfRange(this);
      if (n.hi = (n.hi | (this.buf[this.pos] & 127) << e * 7 + 3) >>> 0, this.buf[this.pos++] < 128) return n
    }
  throw Error("invalid varint encoding")
}
Reader$1.prototype.bool = function n() {
  return this.uint32() !== 0
};

function readFixed32_end(n, e) {
  return (n[e - 4] | n[e - 3] << 8 | n[e - 2] << 16 | n[e - 1] << 24) >>> 0
}
Reader$1.prototype.fixed32 = function n() {
  if (this.pos + 4 > this.len) throw indexOutOfRange(this, 4);
  return readFixed32_end(this.buf, this.pos += 4)
};
Reader$1.prototype.sfixed32 = function n() {
  if (this.pos + 4 > this.len) throw indexOutOfRange(this, 4);
  return readFixed32_end(this.buf, this.pos += 4) | 0
};

function readFixed64() {
  if (this.pos + 8 > this.len) throw indexOutOfRange(this, 8);
  return new LongBits(readFixed32_end(this.buf, this.pos += 4), readFixed32_end(this.buf, this.pos += 4))
}
Reader$1.prototype.float = function n() {
  if (this.pos + 4 > this.len) throw indexOutOfRange(this, 4);
  var e = util$4.float.readFloatLE(this.buf, this.pos);
  return this.pos += 4, e
};
Reader$1.prototype.double = function n() {
  if (this.pos + 8 > this.len) throw indexOutOfRange(this, 4);
  var e = util$4.float.readDoubleLE(this.buf, this.pos);
  return this.pos += 8, e
};
Reader$1.prototype.bytes = function n() {
  var e = this.uint32(),
    t = this.pos,
    r = this.pos + e;
  if (r > this.len) throw indexOutOfRange(this, e);
  if (this.pos += e, Array.isArray(this.buf)) return this.buf.slice(t, r);
  if (t === r) {
    var s = util$4.Buffer;
    return s ? s.alloc(0) : new this.buf.constructor(0)
  }
  return this._slice.call(this.buf, t, r)
};
Reader$1.prototype.string = function n() {
  var e = this.bytes();
  return utf8.read(e, 0, e.length)
};
Reader$1.prototype.skip = function n(e) {
  if (typeof e == "number") {
    if (this.pos + e > this.len) throw indexOutOfRange(this, e);
    this.pos += e
  } else
    do
      if (this.pos >= this.len) throw indexOutOfRange(this); while (this.buf[this.pos++] & 128);
  return this
};
Reader$1.prototype.skipType = function(n) {
  switch (n) {
    case 0:
      this.skip();
      break;
    case 1:
      this.skip(8);
      break;
    case 2:
      this.skip(this.uint32());
      break;
    case 3:
      for (;
        (n = this.uint32() & 7) !== 4;) this.skipType(n);
      break;
    case 5:
      this.skip(4);
      break;
    default:
      throw Error("invalid wire type " + n + " at offset " + this.pos)
  }
  return this
};
Reader$1._configure = function(n) {
  BufferReader$1 = n, Reader$1.create = create(), BufferReader$1._configure();
  var e = util$4.Long ? "toLong" : "toNumber";
  util$4.merge(Reader$1.prototype, {
    int64: function() {
      return readLongVarint.call(this)[e](!1)
    },
    uint64: function() {
      return readLongVarint.call(this)[e](!0)
    },
    sint64: function() {
      return readLongVarint.call(this).zzDecode()[e](!1)
    },
    fixed64: function() {
      return readFixed64.call(this)[e](!0)
    },
    sfixed64: function() {
      return readFixed64.call(this)[e](!1)
    }
  })
};
var reader_buffer = BufferReader,
  Reader = reader;
(BufferReader.prototype = Object.create(Reader.prototype)).constructor = BufferReader;
var util$3 = requireMinimal();

function BufferReader(n) {
  Reader.call(this, n)
}
BufferReader._configure = function() {
  util$3.Buffer && (BufferReader.prototype._slice = util$3.Buffer.prototype.slice)
};
BufferReader.prototype.string = function n() {
  var e = this.uint32();
  return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + e, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + e, this.len))
};
BufferReader._configure();
var rpc = {},
  service$1 = Service,
  util$2 = requireMinimal();
(Service.prototype = Object.create(util$2.EventEmitter.prototype)).constructor = Service;

function Service(n, e, t) {
  if (typeof n != "function") throw TypeError("rpcImpl must be a function");
  util$2.EventEmitter.call(this), this.rpcImpl = n, this.requestDelimited = !!e, this.responseDelimited = !!t
}
Service.prototype.rpcCall = function n(e, t, r, s, o) {
  if (!s) throw TypeError("request must be specified");
  var i = this;
  if (!o) return util$2.asPromise(n, i, e, t, r, s);
  if (!i.rpcImpl) {
    setTimeout(function() {
      o(Error("already ended"))
    }, 0);
    return
  }
  try {
    return i.rpcImpl(e, t[i.requestDelimited ? "encodeDelimited" : "encode"](s).finish(), function(c, a) {
      if (c) return i.emit("error", c, e), o(c);
      if (a === null) {
        i.end(!0);
        return
      }
      if (!(a instanceof r)) try {
        a = r[i.responseDelimited ? "decodeDelimited" : "decode"](a)
      } catch (f) {
        return i.emit("error", f, e), o(f)
      }
      return i.emit("data", a, e), o(null, a)
    })
  } catch (u) {
    i.emit("error", u, e), setTimeout(function() {
      o(u)
    }, 0);
    return
  }
};
Service.prototype.end = function n(e) {
  return this.rpcImpl && (e || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this
};
(function(n) {
  var e = n;
  e.Service = service$1
})(rpc);
var roots = {};
(function(n) {
  var e = n;
  e.build = "minimal", e.Writer = writer, e.BufferWriter = writer_buffer, e.Reader = reader, e.BufferReader = reader_buffer, e.util = requireMinimal(), e.rpc = rpc, e.roots = roots, e.configure = t;

  function t() {
    e.util._configure(), e.Writer._configure(e.BufferWriter), e.Reader._configure(e.BufferReader)
  }
  t()
})(indexMinimal);
var util$1 = {
    exports: {}
  },
  codegen_1 = codegen;

function codegen(n, e) {
  typeof n == "string" && (e = n, n = void 0);
  var t = [];

  function r(o) {
    if (typeof o != "string") {
      var i = s();
      if (codegen.verbose && console.log("codegen: " + i), i = "return " + i, o) {
        for (var u = Object.keys(o), c = new Array(u.length + 1), a = new Array(u.length), f = 0; f < u.length;) c[f] = u[f], a[f] = o[u[f++]];
        return c[f] = i, Function.apply(null, c).apply(null, a)
      }
      return Function(i)()
    }
    for (var l = new Array(arguments.length - 1), d = 0; d < l.length;) l[d] = arguments[++d];
    if (d = 0, o = o.replace(/%([%dfijs])/g, function(p, m) {
        var b = l[d++];
        switch (m) {
          case "d":
          case "f":
            return String(Number(b));
          case "i":
            return String(Math.floor(b));
          case "j":
            return JSON.stringify(b);
          case "s":
            return String(b)
        }
        return "%"
      }), d !== l.length) throw Error("parameter count mismatch");
    return t.push(o), r
  }

  function s(o) {
    return "function " + (o || e || "") + "(" + (n && n.join(",") || "") + `){
  ` + t.join(`
  `) + `
}`
  }
  return r.toString = s, r
}
codegen.verbose = !1;
var fetch_1 = fetch,
  asPromise = aspromise,
  inquire = inquire_1,
  fs = inquire("fs");

function fetch(n, e, t) {
  return typeof e == "function" ? (t = e, e = {}) : e || (e = {}), t ? !e.xhr && fs && fs.readFile ? fs.readFile(n, function(s, o) {
    return s && typeof XMLHttpRequest < "u" ? fetch.xhr(n, e, t) : s ? t(s) : t(null, e.binary ? o : o.toString("utf8"))
  }) : fetch.xhr(n, e, t) : asPromise(fetch, this, n, e)
}
fetch.xhr = function n(e, t, r) {
  var s = new XMLHttpRequest;
  s.onreadystatechange = function() {
    if (s.readyState === 4) {
      if (s.status !== 0 && s.status !== 200) return r(Error("status " + s.status));
      if (t.binary) {
        var i = s.response;
        if (!i) {
          i = [];
          for (var u = 0; u < s.responseText.length; ++u) i.push(s.responseText.charCodeAt(u) & 255)
        }
        return r(null, typeof Uint8Array < "u" ? new Uint8Array(i) : i)
      }
      return r(null, s.responseText)
    }
  }, t.binary && ("overrideMimeType" in s && s.overrideMimeType("text/plain; charset=x-user-defined"), s.responseType = "arraybuffer"), s.open("GET", e), s.send()
};
var path = {};
(function(n) {
  var e = n,
    t = e.isAbsolute = function(o) {
      return /^(?:\/|\w+:)/.test(o)
    },
    r = e.normalize = function(o) {
      o = o.replace(/\\/g, "/").replace(/\/{2,}/g, "/");
      var i = o.split("/"),
        u = t(o),
        c = "";
      u && (c = i.shift() + "/");
      for (var a = 0; a < i.length;) i[a] === ".." ? a > 0 && i[a - 1] !== ".." ? i.splice(--a, 2) : u ? i.splice(a, 1) : ++a : i[a] === "." ? i.splice(a, 1) : ++a;
      return c + i.join("/")
    };
  e.resolve = function(o, i, u) {
    return u || (i = r(i)), t(i) ? i : (u || (o = r(o)), (o = o.replace(/(?:\/|^)[^/]+$/, "")).length ? r(o + "/" + i) : i)
  }
})(path);
var types = {},
  hasRequiredTypes;

function requireTypes() {
  return hasRequiredTypes || (hasRequiredTypes = 1, function(n) {
    var e = n,
      t = requireUtil(),
      r = ["double", "float", "int32", "uint32", "sint32", "fixed32", "sfixed32", "int64", "uint64", "sint64", "fixed64", "sfixed64", "bool", "string", "bytes"];

    function s(o, i) {
      var u = 0,
        c = {};
      for (i |= 0; u < o.length;) c[r[u + i]] = o[u++];
      return c
    }
    e.basic = s([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2, 2]), e.defaults = s([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, !1, "", t.emptyArray, null]), e.long = s([0, 0, 0, 1, 1], 7), e.mapKey = s([0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2], 2), e.packed = s([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0])
  }(types)), types
}
var field, hasRequiredField;

function requireField() {
  if (hasRequiredField) return field;
  hasRequiredField = 1, field = i;
  var n = requireObject();
  ((i.prototype = Object.create(n.prototype)).constructor = i).className = "Field";
  var e = require_enum(),
    t = requireTypes(),
    r = requireUtil(),
    s, o = /^required|optional|repeated$/;
  i.fromJSON = function(c, a) {
    return new i(c, a.id, a.type, a.rule, a.extend, a.options, a.comment)
  };

  function i(u, c, a, f, l, d, h) {
    if (r.isObject(f) ? (h = l, d = f, f = l = void 0) : r.isObject(l) && (h = d, d = l, l = void 0), n.call(this, u, d), !r.isInteger(c) || c < 0) throw TypeError("id must be a non-negative integer");
    if (!r.isString(a)) throw TypeError("type must be a string");
    if (f !== void 0 && !o.test(f = f.toString().toLowerCase())) throw TypeError("rule must be a string rule");
    if (l !== void 0 && !r.isString(l)) throw TypeError("extend must be a string");
    f === "proto3_optional" && (f = "optional"), this.rule = f && f !== "optional" ? f : void 0, this.type = a, this.id = c, this.extend = l || void 0, this.required = f === "required", this.optional = !this.required, this.repeated = f === "repeated", this.map = !1, this.message = null, this.partOf = null, this.typeDefault = null, this.defaultValue = null, this.long = r.Long ? t.long[a] !== void 0 : !1, this.bytes = a === "bytes", this.resolvedType = null, this.extensionField = null, this.declaringField = null, this._packed = null, this.comment = h
  }
  return Object.defineProperty(i.prototype, "packed", {
    get: function() {
      return this._packed === null && (this._packed = this.getOption("packed") !== !1), this._packed
    }
  }), i.prototype.setOption = function(c, a, f) {
    return c === "packed" && (this._packed = null), n.prototype.setOption.call(this, c, a, f)
  }, i.prototype.toJSON = function(c) {
    var a = c ? !!c.keepComments : !1;
    return r.toObject(["rule", this.rule !== "optional" && this.rule || void 0, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", a ? this.comment : void 0])
  }, i.prototype.resolve = function() {
    if (this.resolved) return this;
    if ((this.typeDefault = t.defaults[this.type]) === void 0 ? (this.resolvedType = (this.declaringField ? this.declaringField.parent : this.parent).lookupTypeOrEnum(this.type), this.resolvedType instanceof s ? this.typeDefault = null : this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0]]) : this.options && this.options.proto3_optional && (this.typeDefault = null), this.options && this.options.default != null && (this.typeDefault = this.options.default, this.resolvedType instanceof e && typeof this.typeDefault == "string" && (this.typeDefault = this.resolvedType.values[this.typeDefault])), this.options && ((this.options.packed === !0 || this.options.packed !== void 0 && this.resolvedType && !(this.resolvedType instanceof e)) && delete this.options.packed, Object.keys(this.options).length || (this.options = void 0)), this.long) this.typeDefault = r.Long.fromNumber(this.typeDefault, this.type.charAt(0) === "u"), Object.freeze && Object.freeze(this.typeDefault);
    else if (this.bytes && typeof this.typeDefault == "string") {
      var c;
      r.base64.test(this.typeDefault) ? r.base64.decode(this.typeDefault, c = r.newBuffer(r.base64.length(this.typeDefault)), 0) : r.utf8.write(this.typeDefault, c = r.newBuffer(r.utf8.length(this.typeDefault)), 0), this.typeDefault = c
    }
    return this.map ? this.defaultValue = r.emptyObject : this.repeated ? this.defaultValue = r.emptyArray : this.defaultValue = this.typeDefault, this.parent instanceof s && (this.parent.ctor.prototype[this.name] = this.defaultValue), n.prototype.resolve.call(this)
  }, i.d = function(c, a, f, l) {
    return typeof a == "function" ? a = r.decorateType(a).name : a && typeof a == "object" && (a = r.decorateEnum(a).name),
      function(h, p) {
        r.decorateType(h.constructor).add(new i(p, c, a, f, {
          default: l
        }))
      }
  }, i._configure = function(c) {
    s = c
  }, field
}
var oneof, hasRequiredOneof;

function requireOneof() {
  if (hasRequiredOneof) return oneof;
  hasRequiredOneof = 1, oneof = r;
  var n = requireObject();
  ((r.prototype = Object.create(n.prototype)).constructor = r).className = "OneOf";
  var e = requireField(),
    t = requireUtil();

  function r(o, i, u, c) {
    if (Array.isArray(i) || (u = i, i = void 0), n.call(this, o, u), !(i === void 0 || Array.isArray(i))) throw TypeError("fieldNames must be an Array");
    this.oneof = i || [], this.fieldsArray = [], this.comment = c
  }
  r.fromJSON = function(i, u) {
    return new r(i, u.oneof, u.options, u.comment)
  }, r.prototype.toJSON = function(i) {
    var u = i ? !!i.keepComments : !1;
    return t.toObject(["options", this.options, "oneof", this.oneof, "comment", u ? this.comment : void 0])
  };

  function s(o) {
    if (o.parent)
      for (var i = 0; i < o.fieldsArray.length; ++i) o.fieldsArray[i].parent || o.parent.add(o.fieldsArray[i])
  }
  return r.prototype.add = function(i) {
    if (!(i instanceof e)) throw TypeError("field must be a Field");
    return i.parent && i.parent !== this.parent && i.parent.remove(i), this.oneof.push(i.name), this.fieldsArray.push(i), i.partOf = this, s(this), this
  }, r.prototype.remove = function(i) {
    if (!(i instanceof e)) throw TypeError("field must be a Field");
    var u = this.fieldsArray.indexOf(i);
    if (u < 0) throw Error(i + " is not a member of " + this);
    return this.fieldsArray.splice(u, 1), u = this.oneof.indexOf(i.name), u > -1 && this.oneof.splice(u, 1), i.partOf = null, this
  }, r.prototype.onAdd = function(i) {
    n.prototype.onAdd.call(this, i);
    for (var u = this, c = 0; c < this.oneof.length; ++c) {
      var a = i.get(this.oneof[c]);
      a && !a.partOf && (a.partOf = u, u.fieldsArray.push(a))
    }
    s(this)
  }, r.prototype.onRemove = function(i) {
    for (var u = 0, c; u < this.fieldsArray.length; ++u)(c = this.fieldsArray[u]).parent && c.parent.remove(c);
    n.prototype.onRemove.call(this, i)
  }, r.d = function() {
    for (var i = new Array(arguments.length), u = 0; u < arguments.length;) i[u] = arguments[u++];
    return function(a, f) {
      t.decorateType(a.constructor).add(new r(f, i)), Object.defineProperty(a, f, {
        get: t.oneOfGetter(i),
        set: t.oneOfSetter(i)
      })
    }
  }, oneof
}
var namespace, hasRequiredNamespace;

function requireNamespace() {
  if (hasRequiredNamespace) return namespace;
  hasRequiredNamespace = 1, namespace = c;
  var n = requireObject();
  ((c.prototype = Object.create(n.prototype)).constructor = c).className = "Namespace";
  var e = requireField(),
    t = requireUtil(),
    r = requireOneof(),
    s, o, i;
  c.fromJSON = function(l, d) {
    return new c(l, d.options).addJSON(d.nested)
  };

  function u(f, l) {
    if (f && f.length) {
      for (var d = {}, h = 0; h < f.length; ++h) d[f[h].name] = f[h].toJSON(l);
      return d
    }
  }
  c.arrayToJSON = u, c.isReservedId = function(l, d) {
    if (l) {
      for (var h = 0; h < l.length; ++h)
        if (typeof l[h] != "string" && l[h][0] <= d && l[h][1] > d) return !0
    }
    return !1
  }, c.isReservedName = function(l, d) {
    if (l) {
      for (var h = 0; h < l.length; ++h)
        if (l[h] === d) return !0
    }
    return !1
  };

  function c(f, l) {
    n.call(this, f, l), this.nested = void 0, this._nestedArray = null
  }

  function a(f) {
    return f._nestedArray = null, f
  }
  return Object.defineProperty(c.prototype, "nestedArray", {
    get: function() {
      return this._nestedArray || (this._nestedArray = t.toArray(this.nested))
    }
  }), c.prototype.toJSON = function(l) {
    return t.toObject(["options", this.options, "nested", u(this.nestedArray, l)])
  }, c.prototype.addJSON = function(l) {
    var d = this;
    if (l)
      for (var h = Object.keys(l), p = 0, m; p < h.length; ++p) m = l[h[p]], d.add((m.fields !== void 0 ? s.fromJSON : m.values !== void 0 ? i.fromJSON : m.methods !== void 0 ? o.fromJSON : m.id !== void 0 ? e.fromJSON : c.fromJSON)(h[p], m));
    return this
  }, c.prototype.get = function(l) {
    return this.nested && this.nested[l] || null
  }, c.prototype.getEnum = function(l) {
    if (this.nested && this.nested[l] instanceof i) return this.nested[l].values;
    throw Error("no such enum: " + l)
  }, c.prototype.add = function(l) {
    if (!(l instanceof e && l.extend !== void 0 || l instanceof s || l instanceof r || l instanceof i || l instanceof o || l instanceof c)) throw TypeError("object must be a valid nested object");
    if (!this.nested) this.nested = {};
    else {
      var d = this.get(l.name);
      if (d)
        if (d instanceof c && l instanceof c && !(d instanceof s || d instanceof o)) {
          for (var h = d.nestedArray, p = 0; p < h.length; ++p) l.add(h[p]);
          this.remove(d), this.nested || (this.nested = {}), l.setOptions(d.options, !0)
        } else throw Error("duplicate name '" + l.name + "' in " + this)
    }
    return this.nested[l.name] = l, l.onAdd(this), a(this)
  }, c.prototype.remove = function(l) {
    if (!(l instanceof n)) throw TypeError("object must be a ReflectionObject");
    if (l.parent !== this) throw Error(l + " is not a member of " + this);
    return delete this.nested[l.name], Object.keys(this.nested).length || (this.nested = void 0), l.onRemove(this), a(this)
  }, c.prototype.define = function(l, d) {
    if (t.isString(l)) l = l.split(".");
    else if (!Array.isArray(l)) throw TypeError("illegal path");
    if (l && l.length && l[0] === "") throw Error("path must be relative");
    for (var h = this; l.length > 0;) {
      var p = l.shift();
      if (h.nested && h.nested[p]) {
        if (h = h.nested[p], !(h instanceof c)) throw Error("path conflicts with non-namespace objects")
      } else h.add(h = new c(p))
    }
    return d && h.addJSON(d), h
  }, c.prototype.resolveAll = function() {
    for (var l = this.nestedArray, d = 0; d < l.length;) l[d] instanceof c ? l[d++].resolveAll() : l[d++].resolve();
    return this.resolve()
  }, c.prototype.lookup = function(l, d, h) {
    if (typeof d == "boolean" ? (h = d, d = void 0) : d && !Array.isArray(d) && (d = [d]), t.isString(l) && l.length) {
      if (l === ".") return this.root;
      l = l.split(".")
    } else if (!l.length) return this;
    if (l[0] === "") return this.root.lookup(l.slice(1), d);
    var p = this.get(l[0]);
    if (p) {
      if (l.length === 1) {
        if (!d || d.indexOf(p.constructor) > -1) return p
      } else if (p instanceof c && (p = p.lookup(l.slice(1), d, !0))) return p
    } else
      for (var m = 0; m < this.nestedArray.length; ++m)
        if (this._nestedArray[m] instanceof c && (p = this._nestedArray[m].lookup(l, d, !0))) return p;
    return this.parent === null || h ? null : this.parent.lookup(l, d)
  }, c.prototype.lookupType = function(l) {
    var d = this.lookup(l, [s]);
    if (!d) throw Error("no such type: " + l);
    return d
  }, c.prototype.lookupEnum = function(l) {
    var d = this.lookup(l, [i]);
    if (!d) throw Error("no such Enum '" + l + "' in " + this);
    return d
  }, c.prototype.lookupTypeOrEnum = function(l) {
    var d = this.lookup(l, [s, i]);
    if (!d) throw Error("no such Type or Enum '" + l + "' in " + this);
    return d
  }, c.prototype.lookupService = function(l) {
    var d = this.lookup(l, [o]);
    if (!d) throw Error("no such Service '" + l + "' in " + this);
    return d
  }, c._configure = function(f, l, d) {
    s = f, o = l, i = d
  }, namespace
}
var mapfield, hasRequiredMapfield;

function requireMapfield() {
  if (hasRequiredMapfield) return mapfield;
  hasRequiredMapfield = 1, mapfield = r;
  var n = requireField();
  ((r.prototype = Object.create(n.prototype)).constructor = r).className = "MapField";
  var e = requireTypes(),
    t = requireUtil();

  function r(s, o, i, u, c, a) {
    if (n.call(this, s, o, u, void 0, void 0, c, a), !t.isString(i)) throw TypeError("keyType must be a string");
    this.keyType = i, this.resolvedKeyType = null, this.map = !0
  }
  return r.fromJSON = function(o, i) {
    return new r(o, i.id, i.keyType, i.type, i.options, i.comment)
  }, r.prototype.toJSON = function(o) {
    var i = o ? !!o.keepComments : !1;
    return t.toObject(["keyType", this.keyType, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", i ? this.comment : void 0])
  }, r.prototype.resolve = function() {
    if (this.resolved) return this;
    if (e.mapKey[this.keyType] === void 0) throw Error("invalid key type: " + this.keyType);
    return n.prototype.resolve.call(this)
  }, r.d = function(o, i, u) {
    return typeof u == "function" ? u = t.decorateType(u).name : u && typeof u == "object" && (u = t.decorateEnum(u).name),
      function(a, f) {
        t.decorateType(a.constructor).add(new r(f, o, i, u))
      }
  }, mapfield
}
var method, hasRequiredMethod;

function requireMethod() {
  if (hasRequiredMethod) return method;
  hasRequiredMethod = 1, method = t;
  var n = requireObject();
  ((t.prototype = Object.create(n.prototype)).constructor = t).className = "Method";
  var e = requireUtil();

  function t(r, s, o, i, u, c, a, f, l) {
    if (e.isObject(u) ? (a = u, u = c = void 0) : e.isObject(c) && (a = c, c = void 0), !(s === void 0 || e.isString(s))) throw TypeError("type must be a string");
    if (!e.isString(o)) throw TypeError("requestType must be a string");
    if (!e.isString(i)) throw TypeError("responseType must be a string");
    n.call(this, r, a), this.type = s || "rpc", this.requestType = o, this.requestStream = u ? !0 : void 0, this.responseType = i, this.responseStream = c ? !0 : void 0, this.resolvedRequestType = null, this.resolvedResponseType = null, this.comment = f, this.parsedOptions = l
  }
  return t.fromJSON = function(s, o) {
    return new t(s, o.type, o.requestType, o.responseType, o.requestStream, o.responseStream, o.options, o.comment, o.parsedOptions)
  }, t.prototype.toJSON = function(s) {
    var o = s ? !!s.keepComments : !1;
    return e.toObject(["type", this.type !== "rpc" && this.type || void 0, "requestType", this.requestType, "requestStream", this.requestStream, "responseType", this.responseType, "responseStream", this.responseStream, "options", this.options, "comment", o ? this.comment : void 0, "parsedOptions", this.parsedOptions])
  }, t.prototype.resolve = function() {
    return this.resolved ? this : (this.resolvedRequestType = this.parent.lookupType(this.requestType), this.resolvedResponseType = this.parent.lookupType(this.responseType), n.prototype.resolve.call(this))
  }, method
}
var service, hasRequiredService;

function requireService() {
  if (hasRequiredService) return service;
  hasRequiredService = 1, service = s;
  var n = requireNamespace();
  ((s.prototype = Object.create(n.prototype)).constructor = s).className = "Service";
  var e = requireMethod(),
    t = requireUtil(),
    r = rpc;

  function s(i, u) {
    n.call(this, i, u), this.methods = {}, this._methodsArray = null
  }
  s.fromJSON = function(u, c) {
    var a = new s(u, c.options);
    if (c.methods)
      for (var f = Object.keys(c.methods), l = 0; l < f.length; ++l) a.add(e.fromJSON(f[l], c.methods[f[l]]));
    return c.nested && a.addJSON(c.nested), a.comment = c.comment, a
  }, s.prototype.toJSON = function(u) {
    var c = n.prototype.toJSON.call(this, u),
      a = u ? !!u.keepComments : !1;
    return t.toObject(["options", c && c.options || void 0, "methods", n.arrayToJSON(this.methodsArray, u) || {}, "nested", c && c.nested || void 0, "comment", a ? this.comment : void 0])
  }, Object.defineProperty(s.prototype, "methodsArray", {
    get: function() {
      return this._methodsArray || (this._methodsArray = t.toArray(this.methods))
    }
  });

  function o(i) {
    return i._methodsArray = null, i
  }
  return s.prototype.get = function(u) {
    return this.methods[u] || n.prototype.get.call(this, u)
  }, s.prototype.resolveAll = function() {
    for (var u = this.methodsArray, c = 0; c < u.length; ++c) u[c].resolve();
    return n.prototype.resolve.call(this)
  }, s.prototype.add = function(u) {
    if (this.get(u.name)) throw Error("duplicate name '" + u.name + "' in " + this);
    return u instanceof e ? (this.methods[u.name] = u, u.parent = this, o(this)) : n.prototype.add.call(this, u)
  }, s.prototype.remove = function(u) {
    if (u instanceof e) {
      if (this.methods[u.name] !== u) throw Error(u + " is not a member of " + this);
      return delete this.methods[u.name], u.parent = null, o(this)
    }
    return n.prototype.remove.call(this, u)
  }, s.prototype.create = function(u, c, a) {
    for (var f = new r.Service(u, c, a), l = 0, d; l < this.methodsArray.length; ++l) {
      var h = t.lcFirst((d = this._methodsArray[l]).resolve().name).replace(/[^$\w_]/g, "");
      f[h] = t.codegen(["r", "c"], t.isReserved(h) ? h + "_" : h)("return this.rpcCall(m,q,s,r,c)")({
        m: d,
        q: d.resolvedRequestType.ctor,
        s: d.resolvedResponseType.ctor
      })
    }
    return f
  }, service
}
var message = Message,
  util = requireMinimal();

function Message(n) {
  if (n)
    for (var e = Object.keys(n), t = 0; t < e.length; ++t) this[e[t]] = n[e[t]]
}
Message.create = function n(e) {
  return this.$type.create(e)
};
Message.encode = function n(e, t) {
  return this.$type.encode(e, t)
};
Message.encodeDelimited = function n(e, t) {
  return this.$type.encodeDelimited(e, t)
};
Message.decode = function n(e) {
  return this.$type.decode(e)
};
Message.decodeDelimited = function n(e) {
  return this.$type.decodeDelimited(e)
};
Message.verify = function n(e) {
  return this.$type.verify(e)
};
Message.fromObject = function n(e) {
  return this.$type.fromObject(e)
};
Message.toObject = function n(e, t) {
  return this.$type.toObject(e, t)
};
Message.prototype.toJSON = function n() {
  return this.$type.toObject(this, util.toJSONOptions)
};
var decoder_1, hasRequiredDecoder;

function requireDecoder() {
  if (hasRequiredDecoder) return decoder_1;
  hasRequiredDecoder = 1, decoder_1 = s;
  var n = require_enum(),
    e = requireTypes(),
    t = requireUtil();

  function r(o) {
    return "missing required '" + o.name + "'"
  }

  function s(o) {
    var i = t.codegen(["r", "l"], o.name + "$decode")("if(!(r instanceof Reader))")("r=Reader.create(r)")("var c=l===undefined?r.len:r.pos+l,m=new this.ctor" + (o.fieldsArray.filter(function(d) {
      return d.map
    }).length ? ",k,value" : ""))("while(r.pos<c){")("var t=r.uint32()");
    o.group && i("if((t&7)===4)")("break"), i("switch(t>>>3){");
    for (var u = 0; u < o.fieldsArray.length; ++u) {
      var c = o._fieldsArray[u].resolve(),
        a = c.resolvedType instanceof n ? "int32" : c.type,
        f = "m" + t.safeProp(c.name);
      i("case %i: {", c.id), c.map ? (i("if(%s===util.emptyObject)", f)("%s={}", f)("var c2 = r.uint32()+r.pos"), e.defaults[c.keyType] !== void 0 ? i("k=%j", e.defaults[c.keyType]) : i("k=null"), e.defaults[a] !== void 0 ? i("value=%j", e.defaults[a]) : i("value=null"), i("while(r.pos<c2){")("var tag2=r.uint32()")("switch(tag2>>>3){")("case 1: k=r.%s(); break", c.keyType)("case 2:"), e.basic[a] === void 0 ? i("value=types[%i].decode(r,r.uint32())", u) : i("value=r.%s()", a), i("break")("default:")("r.skipType(tag2&7)")("break")("}")("}"), e.long[c.keyType] !== void 0 ? i('%s[typeof k==="object"?util.longToHash(k):k]=value', f) : i("%s[k]=value", f)) : c.repeated ? (i("if(!(%s&&%s.length))", f, f)("%s=[]", f), e.packed[a] !== void 0 && i("if((t&7)===2){")("var c2=r.uint32()+r.pos")("while(r.pos<c2)")("%s.push(r.%s())", f, a)("}else"), e.basic[a] === void 0 ? i(c.resolvedType.group ? "%s.push(types[%i].decode(r))" : "%s.push(types[%i].decode(r,r.uint32()))", f, u) : i("%s.push(r.%s())", f, a)) : e.basic[a] === void 0 ? i(c.resolvedType.group ? "%s=types[%i].decode(r)" : "%s=types[%i].decode(r,r.uint32())", f, u) : i("%s=r.%s()", f, a), i("break")("}")
    }
    for (i("default:")("r.skipType(t&7)")("break")("}")("}"), u = 0; u < o._fieldsArray.length; ++u) {
      var l = o._fieldsArray[u];
      l.required && i("if(!m.hasOwnProperty(%j))", l.name)("throw util.ProtocolError(%j,{instance:m})", r(l))
    }
    return i("return m")
  }
  return decoder_1
}
var verifier_1, hasRequiredVerifier;

function requireVerifier() {
  if (hasRequiredVerifier) return verifier_1;
  hasRequiredVerifier = 1, verifier_1 = o;
  var n = require_enum(),
    e = requireUtil();

  function t(i, u) {
    return i.name + ": " + u + (i.repeated && u !== "array" ? "[]" : i.map && u !== "object" ? "{k:" + i.keyType + "}" : "") + " expected"
  }

  function r(i, u, c, a) {
    if (u.resolvedType)
      if (u.resolvedType instanceof n) {
        i("switch(%s){", a)("default:")("return%j", t(u, "enum value"));
        for (var f = Object.keys(u.resolvedType.values), l = 0; l < f.length; ++l) i("case %i:", u.resolvedType.values[f[l]]);
        i("break")("}")
      } else i("{")("var e=types[%i].verify(%s);", c, a)("if(e)")("return%j+e", u.name + ".")("}");
    else switch (u.type) {
      case "int32":
      case "uint32":
      case "sint32":
      case "fixed32":
      case "sfixed32":
        i("if(!util.isInteger(%s))", a)("return%j", t(u, "integer"));
        break;
      case "int64":
      case "uint64":
      case "sint64":
      case "fixed64":
      case "sfixed64":
        i("if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))", a, a, a, a)("return%j", t(u, "integer|Long"));
        break;
      case "float":
      case "double":
        i('if(typeof %s!=="number")', a)("return%j", t(u, "number"));
        break;
      case "bool":
        i('if(typeof %s!=="boolean")', a)("return%j", t(u, "boolean"));
        break;
      case "string":
        i("if(!util.isString(%s))", a)("return%j", t(u, "string"));
        break;
      case "bytes":
        i('if(!(%s&&typeof %s.length==="number"||util.isString(%s)))', a, a, a)("return%j", t(u, "buffer"));
        break
    }
    return i
  }

  function s(i, u, c) {
    switch (u.keyType) {
      case "int32":
      case "uint32":
      case "sint32":
      case "fixed32":
      case "sfixed32":
        i("if(!util.key32Re.test(%s))", c)("return%j", t(u, "integer key"));
        break;
      case "int64":
      case "uint64":
      case "sint64":
      case "fixed64":
      case "sfixed64":
        i("if(!util.key64Re.test(%s))", c)("return%j", t(u, "integer|Long key"));
        break;
      case "bool":
        i("if(!util.key2Re.test(%s))", c)("return%j", t(u, "boolean key"));
        break
    }
    return i
  }

  function o(i) {
    var u = e.codegen(["m"], i.name + "$verify")('if(typeof m!=="object"||m===null)')("return%j", "object expected"),
      c = i.oneofsArray,
      a = {};
    c.length && u("var p={}");
    for (var f = 0; f < i.fieldsArray.length; ++f) {
      var l = i._fieldsArray[f].resolve(),
        d = "m" + e.safeProp(l.name);
      if (l.optional && u("if(%s!=null&&m.hasOwnProperty(%j)){", d, l.name), l.map) u("if(!util.isObject(%s))", d)("return%j", t(l, "object"))("var k=Object.keys(%s)", d)("for(var i=0;i<k.length;++i){"), s(u, l, "k[i]"), r(u, l, f, d + "[k[i]]")("}");
      else if (l.repeated) u("if(!Array.isArray(%s))", d)("return%j", t(l, "array"))("for(var i=0;i<%s.length;++i){", d), r(u, l, f, d + "[i]")("}");
      else {
        if (l.partOf) {
          var h = e.safeProp(l.partOf.name);
          a[l.partOf.name] === 1 && u("if(p%s===1)", h)("return%j", l.partOf.name + ": multiple values"), a[l.partOf.name] = 1, u("p%s=1", h)
        }
        r(u, l, f, d)
      }
      l.optional && u("}")
    }
    return u("return null")
  }
  return verifier_1
}
var converter = {},
  hasRequiredConverter;

function requireConverter() {
  return hasRequiredConverter || (hasRequiredConverter = 1, function(n) {
    var e = n,
      t = require_enum(),
      r = requireUtil();

    function s(i, u, c, a) {
      var f = !1;
      if (u.resolvedType)
        if (u.resolvedType instanceof t) {
          i("switch(d%s){", a);
          for (var l = u.resolvedType.values, d = Object.keys(l), h = 0; h < d.length; ++h) l[d[h]] === u.typeDefault && !f && (i("default:")('if(typeof(d%s)==="number"){m%s=d%s;break}', a, a, a), u.repeated || i("break"), f = !0), i("case%j:", d[h])("case %i:", l[d[h]])("m%s=%j", a, l[d[h]])("break");
          i("}")
        } else i('if(typeof d%s!=="object")', a)("throw TypeError(%j)", u.fullName + ": object expected")("m%s=types[%i].fromObject(d%s)", a, c, a);
      else {
        var p = !1;
        switch (u.type) {
          case "double":
          case "float":
            i("m%s=Number(d%s)", a, a);
            break;
          case "uint32":
          case "fixed32":
            i("m%s=d%s>>>0", a, a);
            break;
          case "int32":
          case "sint32":
          case "sfixed32":
            i("m%s=d%s|0", a, a);
            break;
          case "uint64":
            p = !0;
          case "int64":
          case "sint64":
          case "fixed64":
          case "sfixed64":
            i("if(util.Long)")("(m%s=util.Long.fromValue(d%s)).unsigned=%j", a, a, p)('else if(typeof d%s==="string")', a)("m%s=parseInt(d%s,10)", a, a)('else if(typeof d%s==="number")', a)("m%s=d%s", a, a)('else if(typeof d%s==="object")', a)("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)", a, a, a, p ? "true" : "");
            break;
          case "bytes":
            i('if(typeof d%s==="string")', a)("util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)", a, a, a)("else if(d%s.length >= 0)", a)("m%s=d%s", a, a);
            break;
          case "string":
            i("m%s=String(d%s)", a, a);
            break;
          case "bool":
            i("m%s=Boolean(d%s)", a, a);
            break
        }
      }
      return i
    }
    e.fromObject = function(u) {
      var c = u.fieldsArray,
        a = r.codegen(["d"], u.name + "$fromObject")("if(d instanceof this.ctor)")("return d");
      if (!c.length) return a("return new this.ctor");
      a("var m=new this.ctor");
      for (var f = 0; f < c.length; ++f) {
        var l = c[f].resolve(),
          d = r.safeProp(l.name);
        l.map ? (a("if(d%s){", d)('if(typeof d%s!=="object")', d)("throw TypeError(%j)", l.fullName + ": object expected")("m%s={}", d)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){", d), s(a, l, f, d + "[ks[i]]")("}")("}")) : l.repeated ? (a("if(d%s){", d)("if(!Array.isArray(d%s))", d)("throw TypeError(%j)", l.fullName + ": array expected")("m%s=[]", d)("for(var i=0;i<d%s.length;++i){", d), s(a, l, f, d + "[i]")("}")("}")) : (l.resolvedType instanceof t || a("if(d%s!=null){", d), s(a, l, f, d), l.resolvedType instanceof t || a("}"))
      }
      return a("return m")
    };

    function o(i, u, c, a) {
      if (u.resolvedType) u.resolvedType instanceof t ? i("d%s=o.enums===String?(types[%i].values[m%s]===undefined?m%s:types[%i].values[m%s]):m%s", a, c, a, a, c, a, a) : i("d%s=types[%i].toObject(m%s,o)", a, c, a);
      else {
        var f = !1;
        switch (u.type) {
          case "double":
          case "float":
            i("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s", a, a, a, a);
            break;
          case "uint64":
            f = !0;
          case "int64":
          case "sint64":
          case "fixed64":
          case "sfixed64":
            i('if(typeof m%s==="number")', a)("d%s=o.longs===String?String(m%s):m%s", a, a, a)("else")("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s", a, a, a, a, f ? "true" : "", a);
            break;
          case "bytes":
            i("d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s", a, a, a, a, a);
            break;
          default:
            i("d%s=m%s", a, a);
            break
        }
      }
      return i
    }
    e.toObject = function(u) {
      var c = u.fieldsArray.slice().sort(r.compareFieldsById);
      if (!c.length) return r.codegen()("return {}");
      for (var a = r.codegen(["m", "o"], u.name + "$toObject")("if(!o)")("o={}")("var d={}"), f = [], l = [], d = [], h = 0; h < c.length; ++h) c[h].partOf || (c[h].resolve().repeated ? f : c[h].map ? l : d).push(c[h]);
      if (f.length) {
        for (a("if(o.arrays||o.defaults){"), h = 0; h < f.length; ++h) a("d%s=[]", r.safeProp(f[h].name));
        a("}")
      }
      if (l.length) {
        for (a("if(o.objects||o.defaults){"), h = 0; h < l.length; ++h) a("d%s={}", r.safeProp(l[h].name));
        a("}")
      }
      if (d.length) {
        for (a("if(o.defaults){"), h = 0; h < d.length; ++h) {
          var p = d[h],
            m = r.safeProp(p.name);
          if (p.resolvedType instanceof t) a("d%s=o.enums===String?%j:%j", m, p.resolvedType.valuesById[p.typeDefault], p.typeDefault);
          else if (p.long) a("if(util.Long){")("var n=new util.Long(%i,%i,%j)", p.typeDefault.low, p.typeDefault.high, p.typeDefault.unsigned)("d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n", m)("}else")("d%s=o.longs===String?%j:%i", m, p.typeDefault.toString(), p.typeDefault.toNumber());
          else if (p.bytes) {
            var b = "[" + Array.prototype.slice.call(p.typeDefault).join(",") + "]";
            a("if(o.bytes===String)d%s=%j", m, String.fromCharCode.apply(String, p.typeDefault))("else{")("d%s=%s", m, b)("if(o.bytes!==Array)d%s=util.newBuffer(d%s)", m, m)("}")
          } else a("d%s=%j", m, p.typeDefault)
        }
        a("}")
      }
      var g = !1;
      for (h = 0; h < c.length; ++h) {
        var p = c[h],
          _ = u._fieldsArray.indexOf(p),
          m = r.safeProp(p.name);
        p.map ? (g || (g = !0, a("var ks2")), a("if(m%s&&(ks2=Object.keys(m%s)).length){", m, m)("d%s={}", m)("for(var j=0;j<ks2.length;++j){"), o(a, p, _, m + "[ks2[j]]")("}")) : p.repeated ? (a("if(m%s&&m%s.length){", m, m)("d%s=[]", m)("for(var j=0;j<m%s.length;++j){", m), o(a, p, _, m + "[j]")("}")) : (a("if(m%s!=null&&m.hasOwnProperty(%j)){", m, p.name), o(a, p, _, m), p.partOf && a("if(o.oneofs)")("d%s=%j", r.safeProp(p.partOf.name), p.name)), a("}")
      }
      return a("return d")
    }
  }(converter)), converter
}
var wrappers = {};
(function(n) {
  var e = n,
    t = message;
  e[".google.protobuf.Any"] = {
    fromObject: function(r) {
      if (r && r["@type"]) {
        var s = r["@type"].substring(r["@type"].lastIndexOf("/") + 1),
          o = this.lookup(s);
        if (o) {
          var i = r["@type"].charAt(0) === "." ? r["@type"].slice(1) : r["@type"];
          return i.indexOf("/") === -1 && (i = "/" + i), this.create({
            type_url: i,
            value: o.encode(o.fromObject(r)).finish()
          })
        }
      }
      return this.fromObject(r)
    },
    toObject: function(r, s) {
      var o = "type.googleapis.com/",
        i = "",
        u = "";
      if (s && s.json && r.type_url && r.value) {
        u = r.type_url.substring(r.type_url.lastIndexOf("/") + 1), i = r.type_url.substring(0, r.type_url.lastIndexOf("/") + 1);
        var c = this.lookup(u);
        c && (r = c.decode(r.value))
      }
      if (!(r instanceof this.ctor) && r instanceof t) {
        var a = r.$type.toObject(r, s),
          f = r.$type.fullName[0] === "." ? r.$type.fullName.slice(1) : r.$type.fullName;
        return i === "" && (i = o), u = i + f, a["@type"] = u, a
      }
      return this.toObject(r, s)
    }
  }
})(wrappers);
var type, hasRequiredType;

function requireType() {
  if (hasRequiredType) return type;
  hasRequiredType = 1, type = m;
  var n = requireNamespace();
  ((m.prototype = Object.create(n.prototype)).constructor = m).className = "Type";
  var e = require_enum(),
    t = requireOneof(),
    r = requireField(),
    s = requireMapfield(),
    o = requireService(),
    i = message,
    u = reader,
    c = writer,
    a = requireUtil(),
    f = requireEncoder(),
    l = requireDecoder(),
    d = requireVerifier(),
    h = requireConverter(),
    p = wrappers;

  function m(g, _) {
    n.call(this, g, _), this.fields = {}, this.oneofs = void 0, this.extensions = void 0, this.reserved = void 0, this.group = void 0, this._fieldsById = null, this._fieldsArray = null, this._oneofsArray = null, this._ctor = null
  }
  Object.defineProperties(m.prototype, {
    fieldsById: {
      get: function() {
        if (this._fieldsById) return this._fieldsById;
        this._fieldsById = {};
        for (var g = Object.keys(this.fields), _ = 0; _ < g.length; ++_) {
          var y = this.fields[g[_]],
            v = y.id;
          if (this._fieldsById[v]) throw Error("duplicate id " + v + " in " + this);
          this._fieldsById[v] = y
        }
        return this._fieldsById
      }
    },
    fieldsArray: {
      get: function() {
        return this._fieldsArray || (this._fieldsArray = a.toArray(this.fields))
      }
    },
    oneofsArray: {
      get: function() {
        return this._oneofsArray || (this._oneofsArray = a.toArray(this.oneofs))
      }
    },
    ctor: {
      get: function() {
        return this._ctor || (this.ctor = m.generateConstructor(this)())
      },
      set: function(g) {
        var _ = g.prototype;
        _ instanceof i || ((g.prototype = new i).constructor = g, a.merge(g.prototype, _)), g.$type = g.prototype.$type = this, a.merge(g, i, !0), this._ctor = g;
        for (var y = 0; y < this.fieldsArray.length; ++y) this._fieldsArray[y].resolve();
        var v = {};
        for (y = 0; y < this.oneofsArray.length; ++y) v[this._oneofsArray[y].resolve().name] = {
          get: a.oneOfGetter(this._oneofsArray[y].oneof),
          set: a.oneOfSetter(this._oneofsArray[y].oneof)
        };
        y && Object.defineProperties(g.prototype, v)
      }
    }
  }), m.generateConstructor = function(_) {
    for (var y = a.codegen(["p"], _.name), v = 0, S; v < _.fieldsArray.length; ++v)(S = _._fieldsArray[v]).map ? y("this%s={}", a.safeProp(S.name)) : S.repeated && y("this%s=[]", a.safeProp(S.name));
    return y("if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)")("this[ks[i]]=p[ks[i]]")
  };

  function b(g) {
    return g._fieldsById = g._fieldsArray = g._oneofsArray = null, delete g.encode, delete g.decode, delete g.verify, g
  }
  return m.fromJSON = function(_, y) {
    var v = new m(_, y.options);
    v.extensions = y.extensions, v.reserved = y.reserved;
    for (var S = Object.keys(y.fields), w = 0; w < S.length; ++w) v.add((typeof y.fields[S[w]].keyType < "u" ? s.fromJSON : r.fromJSON)(S[w], y.fields[S[w]]));
    if (y.oneofs)
      for (S = Object.keys(y.oneofs), w = 0; w < S.length; ++w) v.add(t.fromJSON(S[w], y.oneofs[S[w]]));
    if (y.nested)
      for (S = Object.keys(y.nested), w = 0; w < S.length; ++w) {
        var C = y.nested[S[w]];
        v.add((C.id !== void 0 ? r.fromJSON : C.fields !== void 0 ? m.fromJSON : C.values !== void 0 ? e.fromJSON : C.methods !== void 0 ? o.fromJSON : n.fromJSON)(S[w], C))
      }
    return y.extensions && y.extensions.length && (v.extensions = y.extensions), y.reserved && y.reserved.length && (v.reserved = y.reserved), y.group && (v.group = !0), y.comment && (v.comment = y.comment), v
  }, m.prototype.toJSON = function(_) {
    var y = n.prototype.toJSON.call(this, _),
      v = _ ? !!_.keepComments : !1;
    return a.toObject(["options", y && y.options || void 0, "oneofs", n.arrayToJSON(this.oneofsArray, _), "fields", n.arrayToJSON(this.fieldsArray.filter(function(S) {
      return !S.declaringField
    }), _) || {}, "extensions", this.extensions && this.extensions.length ? this.extensions : void 0, "reserved", this.reserved && this.reserved.length ? this.reserved : void 0, "group", this.group || void 0, "nested", y && y.nested || void 0, "comment", v ? this.comment : void 0])
  }, m.prototype.resolveAll = function() {
    for (var _ = this.fieldsArray, y = 0; y < _.length;) _[y++].resolve();
    var v = this.oneofsArray;
    for (y = 0; y < v.length;) v[y++].resolve();
    return n.prototype.resolveAll.call(this)
  }, m.prototype.get = function(_) {
    return this.fields[_] || this.oneofs && this.oneofs[_] || this.nested && this.nested[_] || null
  }, m.prototype.add = function(_) {
    if (this.get(_.name)) throw Error("duplicate name '" + _.name + "' in " + this);
    if (_ instanceof r && _.extend === void 0) {
      if (this._fieldsById ? this._fieldsById[_.id] : this.fieldsById[_.id]) throw Error("duplicate id " + _.id + " in " + this);
      if (this.isReservedId(_.id)) throw Error("id " + _.id + " is reserved in " + this);
      if (this.isReservedName(_.name)) throw Error("name '" + _.name + "' is reserved in " + this);
      return _.parent && _.parent.remove(_), this.fields[_.name] = _, _.message = this, _.onAdd(this), b(this)
    }
    return _ instanceof t ? (this.oneofs || (this.oneofs = {}), this.oneofs[_.name] = _, _.onAdd(this), b(this)) : n.prototype.add.call(this, _)
  }, m.prototype.remove = function(_) {
    if (_ instanceof r && _.extend === void 0) {
      if (!this.fields || this.fields[_.name] !== _) throw Error(_ + " is not a member of " + this);
      return delete this.fields[_.name], _.parent = null, _.onRemove(this), b(this)
    }
    if (_ instanceof t) {
      if (!this.oneofs || this.oneofs[_.name] !== _) throw Error(_ + " is not a member of " + this);
      return delete this.oneofs[_.name], _.parent = null, _.onRemove(this), b(this)
    }
    return n.prototype.remove.call(this, _)
  }, m.prototype.isReservedId = function(_) {
    return n.isReservedId(this.reserved, _)
  }, m.prototype.isReservedName = function(_) {
    return n.isReservedName(this.reserved, _)
  }, m.prototype.create = function(_) {
    return new this.ctor(_)
  }, m.prototype.setup = function() {
    for (var _ = this.fullName, y = [], v = 0; v < this.fieldsArray.length; ++v) y.push(this._fieldsArray[v].resolve().resolvedType);
    this.encode = f(this)({
      Writer: c,
      types: y,
      util: a
    }), this.decode = l(this)({
      Reader: u,
      types: y,
      util: a
    }), this.verify = d(this)({
      types: y,
      util: a
    }), this.fromObject = h.fromObject(this)({
      types: y,
      util: a
    }), this.toObject = h.toObject(this)({
      types: y,
      util: a
    });
    var S = p[_];
    if (S) {
      var w = Object.create(this);
      w.fromObject = this.fromObject, this.fromObject = S.fromObject.bind(w), w.toObject = this.toObject, this.toObject = S.toObject.bind(w)
    }
    return this
  }, m.prototype.encode = function(_, y) {
    return this.setup().encode(_, y)
  }, m.prototype.encodeDelimited = function(_, y) {
    return this.encode(_, y && y.len ? y.fork() : y).ldelim()
  }, m.prototype.decode = function(_, y) {
    return this.setup().decode(_, y)
  }, m.prototype.decodeDelimited = function(_) {
    return _ instanceof u || (_ = u.create(_)), this.decode(_, _.uint32())
  }, m.prototype.verify = function(_) {
    return this.setup().verify(_)
  }, m.prototype.fromObject = function(_) {
    return this.setup().fromObject(_)
  }, m.prototype.toObject = function(_, y) {
    return this.setup().toObject(_, y)
  }, m.d = function(_) {
    return function(v) {
      a.decorateType(v, _)
    }
  }, type
}
var root, hasRequiredRoot;

function requireRoot() {
  if (hasRequiredRoot) return root;
  hasRequiredRoot = 1, root = c;
  var n = requireNamespace();
  ((c.prototype = Object.create(n.prototype)).constructor = c).className = "Root";
  var e = requireField(),
    t = require_enum(),
    r = requireOneof(),
    s = requireUtil(),
    o, i, u;

  function c(d) {
    n.call(this, "", d), this.deferred = [], this.files = []
  }
  c.fromJSON = function(h, p) {
    return p || (p = new c), h.options && p.setOptions(h.options), p.addJSON(h.nested)
  }, c.prototype.resolvePath = s.path.resolve, c.prototype.fetch = s.fetch;

  function a() {}
  c.prototype.load = function d(h, p, m) {
    typeof p == "function" && (m = p, p = void 0);
    var b = this;
    if (!m) return s.asPromise(d, b, h, p);
    var g = m === a;

    function _(O, E) {
      if (m) {
        var T = m;
        if (m = null, g) throw O;
        T(O, E)
      }
    }

    function y(O) {
      var E = O.lastIndexOf("google/protobuf/");
      if (E > -1) {
        var T = O.substring(E);
        if (T in u) return T
      }
      return null
    }

    function v(O, E) {
      try {
        if (s.isString(E) && E.charAt(0) === "{" && (E = JSON.parse(E)), !s.isString(E)) b.setOptions(E.options).addJSON(E.nested);
        else {
          i.filename = O;
          var T = i(E, b, p),
            x, k = 0;
          if (T.imports)
            for (; k < T.imports.length; ++k)(x = y(T.imports[k]) || b.resolvePath(O, T.imports[k])) && S(x);
          if (T.weakImports)
            for (k = 0; k < T.weakImports.length; ++k)(x = y(T.weakImports[k]) || b.resolvePath(O, T.weakImports[k])) && S(x, !0)
        }
      } catch ($) {
        _($)
      }!g && !w && _(null, b)
    }

    function S(O, E) {
      if (O = y(O) || O, !(b.files.indexOf(O) > -1)) {
        if (b.files.push(O), O in u) {
          g ? v(O, u[O]) : (++w, setTimeout(function() {
            --w, v(O, u[O])
          }));
          return
        }
        if (g) {
          var T;
          try {
            T = s.fs.readFileSync(O).toString("utf8")
          } catch (x) {
            E || _(x);
            return
          }
          v(O, T)
        } else ++w, b.fetch(O, function(x, k) {
          if (--w, !!m) {
            if (x) {
              E ? w || _(null, b) : _(x);
              return
            }
            v(O, k)
          }
        })
      }
    }
    var w = 0;
    s.isString(h) && (h = [h]);
    for (var C = 0, A; C < h.length; ++C)(A = b.resolvePath("", h[C])) && S(A);
    if (g) return b;
    w || _(null, b)
  }, c.prototype.loadSync = function(h, p) {
    if (!s.isNode) throw Error("not supported");
    return this.load(h, p, a)
  }, c.prototype.resolveAll = function() {
    if (this.deferred.length) throw Error("unresolvable extensions: " + this.deferred.map(function(h) {
      return "'extend " + h.extend + "' in " + h.parent.fullName
    }).join(", "));
    return n.prototype.resolveAll.call(this)
  };
  var f = /^[A-Z]/;

  function l(d, h) {
    var p = h.parent.lookup(h.extend);
    if (p) {
      var m = new e(h.fullName, h.id, h.type, h.rule, void 0, h.options);
      return p.get(m.name) || (m.declaringField = h, h.extensionField = m, p.add(m)), !0
    }
    return !1
  }
  return c.prototype._handleAdd = function(h) {
    if (h instanceof e) h.extend !== void 0 && !h.extensionField && (l(this, h) || this.deferred.push(h));
    else if (h instanceof t) f.test(h.name) && (h.parent[h.name] = h.values);
    else if (!(h instanceof r)) {
      if (h instanceof o)
        for (var p = 0; p < this.deferred.length;) l(this, this.deferred[p]) ? this.deferred.splice(p, 1) : ++p;
      for (var m = 0; m < h.nestedArray.length; ++m) this._handleAdd(h._nestedArray[m]);
      f.test(h.name) && (h.parent[h.name] = h)
    }
  }, c.prototype._handleRemove = function(h) {
    if (h instanceof e) {
      if (h.extend !== void 0)
        if (h.extensionField) h.extensionField.parent.remove(h.extensionField), h.extensionField = null;
        else {
          var p = this.deferred.indexOf(h);
          p > -1 && this.deferred.splice(p, 1)
        }
    } else if (h instanceof t) f.test(h.name) && delete h.parent[h.name];
    else if (h instanceof n) {
      for (var m = 0; m < h.nestedArray.length; ++m) this._handleRemove(h._nestedArray[m]);
      f.test(h.name) && delete h.parent[h.name]
    }
  }, c._configure = function(d, h, p) {
    o = d, i = h, u = p
  }, root
}
var hasRequiredUtil;

function requireUtil() {
  if (hasRequiredUtil) return util$1.exports;
  hasRequiredUtil = 1;
  var n = util$1.exports = requireMinimal(),
    e = roots,
    t, r;
  n.codegen = codegen_1, n.fetch = fetch_1, n.path = path, n.fs = n.inquire("fs"), n.toArray = function(a) {
    if (a) {
      for (var f = Object.keys(a), l = new Array(f.length), d = 0; d < f.length;) l[d] = a[f[d++]];
      return l
    }
    return []
  }, n.toObject = function(a) {
    for (var f = {}, l = 0; l < a.length;) {
      var d = a[l++],
        h = a[l++];
      h !== void 0 && (f[d] = h)
    }
    return f
  };
  var s = /\\/g,
    o = /"/g;
  n.isReserved = function(a) {
    return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(a)
  }, n.safeProp = function(a) {
    return !/^[$\w_]+$/.test(a) || n.isReserved(a) ? '["' + a.replace(s, "\\\\").replace(o, '\\"') + '"]' : "." + a
  }, n.ucFirst = function(a) {
    return a.charAt(0).toUpperCase() + a.substring(1)
  };
  var i = /_([a-z])/g;
  n.camelCase = function(a) {
    return a.substring(0, 1) + a.substring(1).replace(i, function(f, l) {
      return l.toUpperCase()
    })
  }, n.compareFieldsById = function(a, f) {
    return a.id - f.id
  }, n.decorateType = function(a, f) {
    if (a.$type) return f && a.$type.name !== f && (n.decorateRoot.remove(a.$type), a.$type.name = f, n.decorateRoot.add(a.$type)), a.$type;
    t || (t = requireType());
    var l = new t(f || a.name);
    return n.decorateRoot.add(l), l.ctor = a, Object.defineProperty(a, "$type", {
      value: l,
      enumerable: !1
    }), Object.defineProperty(a.prototype, "$type", {
      value: l,
      enumerable: !1
    }), l
  };
  var u = 0;
  return n.decorateEnum = function(a) {
    if (a.$type) return a.$type;
    r || (r = require_enum());
    var f = new r("Enum" + u++, a);
    return n.decorateRoot.add(f), Object.defineProperty(a, "$type", {
      value: f,
      enumerable: !1
    }), f
  }, n.setProperty = function(a, f, l) {
    function d(h, p, m) {
      var b = p.shift();
      if (b === "__proto__" || b === "prototype") return h;
      if (p.length > 0) h[b] = d(h[b] || {}, p, m);
      else {
        var g = h[b];
        g && (m = [].concat(g).concat(m)), h[b] = m
      }
      return h
    }
    if (typeof a != "object") throw TypeError("dst must be an object");
    if (!f) throw TypeError("path must be specified");
    return f = f.split("."), d(a, f, l)
  }, Object.defineProperty(n, "decorateRoot", {
    get: function() {
      return e.decorated || (e.decorated = new(requireRoot()))
    }
  }), util$1.exports
}
var object, hasRequiredObject;

function requireObject() {
  if (hasRequiredObject) return object;
  hasRequiredObject = 1, object = t, t.className = "ReflectionObject";
  var n = requireUtil(),
    e;

  function t(r, s) {
    if (!n.isString(r)) throw TypeError("name must be a string");
    if (s && !n.isObject(s)) throw TypeError("options must be an object");
    this.options = s, this.parsedOptions = null, this.name = r, this.parent = null, this.resolved = !1, this.comment = null, this.filename = null
  }
  return Object.defineProperties(t.prototype, {
    root: {
      get: function() {
        for (var r = this; r.parent !== null;) r = r.parent;
        return r
      }
    },
    fullName: {
      get: function() {
        for (var r = [this.name], s = this.parent; s;) r.unshift(s.name), s = s.parent;
        return r.join(".")
      }
    }
  }), t.prototype.toJSON = function() {
    throw Error()
  }, t.prototype.onAdd = function(s) {
    this.parent && this.parent !== s && this.parent.remove(this), this.parent = s, this.resolved = !1;
    var o = s.root;
    o instanceof e && o._handleAdd(this)
  }, t.prototype.onRemove = function(s) {
    var o = s.root;
    o instanceof e && o._handleRemove(this), this.parent = null, this.resolved = !1
  }, t.prototype.resolve = function() {
    return this.resolved ? this : (this.root instanceof e && (this.resolved = !0), this)
  }, t.prototype.getOption = function(s) {
    if (this.options) return this.options[s]
  }, t.prototype.setOption = function(s, o, i) {
    return (!i || !this.options || this.options[s] === void 0) && ((this.options || (this.options = {}))[s] = o), this
  }, t.prototype.setParsedOption = function(s, o, i) {
    this.parsedOptions || (this.parsedOptions = []);
    var u = this.parsedOptions;
    if (i) {
      var c = u.find(function(l) {
        return Object.prototype.hasOwnProperty.call(l, s)
      });
      if (c) {
        var a = c[s];
        n.setProperty(a, i, o)
      } else c = {}, c[s] = n.setProperty({}, i, o), u.push(c)
    } else {
      var f = {};
      f[s] = o, u.push(f)
    }
    return this
  }, t.prototype.setOptions = function(s, o) {
    if (s)
      for (var i = Object.keys(s), u = 0; u < i.length; ++u) this.setOption(i[u], s[i[u]], o);
    return this
  }, t.prototype.toString = function() {
    var s = this.constructor.className,
      o = this.fullName;
    return o.length ? s + " " + o : s
  }, t._configure = function(r) {
    e = r
  }, object
}
var _enum, hasRequired_enum;

function require_enum() {
  if (hasRequired_enum) return _enum;
  hasRequired_enum = 1, _enum = r;
  var n = requireObject();
  ((r.prototype = Object.create(n.prototype)).constructor = r).className = "Enum";
  var e = requireNamespace(),
    t = requireUtil();

  function r(s, o, i, u, c, a) {
    if (n.call(this, s, i), o && typeof o != "object") throw TypeError("values must be an object");
    if (this.valuesById = {}, this.values = Object.create(this.valuesById), this.comment = u, this.comments = c || {}, this.valuesOptions = a, this.reserved = void 0, o)
      for (var f = Object.keys(o), l = 0; l < f.length; ++l) typeof o[f[l]] == "number" && (this.valuesById[this.values[f[l]] = o[f[l]]] = f[l])
  }
  return r.fromJSON = function(o, i) {
    var u = new r(o, i.values, i.options, i.comment, i.comments);
    return u.reserved = i.reserved, u
  }, r.prototype.toJSON = function(o) {
    var i = o ? !!o.keepComments : !1;
    return t.toObject(["options", this.options, "valuesOptions", this.valuesOptions, "values", this.values, "reserved", this.reserved && this.reserved.length ? this.reserved : void 0, "comment", i ? this.comment : void 0, "comments", i ? this.comments : void 0])
  }, r.prototype.add = function(o, i, u, c) {
    if (!t.isString(o)) throw TypeError("name must be a string");
    if (!t.isInteger(i)) throw TypeError("id must be an integer");
    if (this.values[o] !== void 0) throw Error("duplicate name '" + o + "' in " + this);
    if (this.isReservedId(i)) throw Error("id " + i + " is reserved in " + this);
    if (this.isReservedName(o)) throw Error("name '" + o + "' is reserved in " + this);
    if (this.valuesById[i] !== void 0) {
      if (!(this.options && this.options.allow_alias)) throw Error("duplicate id " + i + " in " + this);
      this.values[o] = i
    } else this.valuesById[this.values[o] = i] = o;
    return c && (this.valuesOptions === void 0 && (this.valuesOptions = {}), this.valuesOptions[o] = c || null), this.comments[o] = u || null, this
  }, r.prototype.remove = function(o) {
    if (!t.isString(o)) throw TypeError("name must be a string");
    var i = this.values[o];
    if (i == null) throw Error("name '" + o + "' does not exist in " + this);
    return delete this.valuesById[i], delete this.values[o], delete this.comments[o], this.valuesOptions && delete this.valuesOptions[o], this
  }, r.prototype.isReservedId = function(o) {
    return e.isReservedId(this.reserved, o)
  }, r.prototype.isReservedName = function(o) {
    return e.isReservedName(this.reserved, o)
  }, _enum
}
var encoder_1, hasRequiredEncoder;

function requireEncoder() {
  if (hasRequiredEncoder) return encoder_1;
  hasRequiredEncoder = 1, encoder_1 = s;
  var n = require_enum(),
    e = requireTypes(),
    t = requireUtil();

  function r(o, i, u, c) {
    return i.resolvedType.group ? o("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", u, c, (i.id << 3 | 3) >>> 0, (i.id << 3 | 4) >>> 0) : o("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", u, c, (i.id << 3 | 2) >>> 0)
  }

  function s(o) {
    for (var i = t.codegen(["m", "w"], o.name + "$encode")("if(!w)")("w=Writer.create()"), u, c, a = o.fieldsArray.slice().sort(t.compareFieldsById), u = 0; u < a.length; ++u) {
      var f = a[u].resolve(),
        l = o._fieldsArray.indexOf(f),
        d = f.resolvedType instanceof n ? "int32" : f.type,
        h = e.basic[d];
      c = "m" + t.safeProp(f.name), f.map ? (i("if(%s!=null&&Object.hasOwnProperty.call(m,%j)){", c, f.name)("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", c)("w.uint32(%i).fork().uint32(%i).%s(ks[i])", (f.id << 3 | 2) >>> 0, 8 | e.mapKey[f.keyType], f.keyType), h === void 0 ? i("types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()", l, c) : i(".uint32(%i).%s(%s[ks[i]]).ldelim()", 16 | h, d, c), i("}")("}")) : f.repeated ? (i("if(%s!=null&&%s.length){", c, c), f.packed && e.packed[d] !== void 0 ? i("w.uint32(%i).fork()", (f.id << 3 | 2) >>> 0)("for(var i=0;i<%s.length;++i)", c)("w.%s(%s[i])", d, c)("w.ldelim()") : (i("for(var i=0;i<%s.length;++i)", c), h === void 0 ? r(i, f, l, c + "[i]") : i("w.uint32(%i).%s(%s[i])", (f.id << 3 | h) >>> 0, d, c)), i("}")) : (f.optional && i("if(%s!=null&&Object.hasOwnProperty.call(m,%j))", c, f.name), h === void 0 ? r(i, f, l, c) : i("w.uint32(%i).%s(%s)", (f.id << 3 | h) >>> 0, d, c))
    }
    return i("return w")
  }
  return encoder_1
}
var protobuf = indexLight.exports = indexMinimal;
protobuf.build = "light";

function load(n, e, t) {
  return typeof e == "function" ? (t = e, e = new protobuf.Root) : e || (e = new protobuf.Root), e.load(n, t)
}
protobuf.load = load;

function loadSync(n, e) {
  return e || (e = new protobuf.Root), e.loadSync(n)
}
protobuf.loadSync = loadSync;
protobuf.encoder = requireEncoder();
protobuf.decoder = requireDecoder();
protobuf.verifier = requireVerifier();
protobuf.converter = requireConverter();
protobuf.ReflectionObject = requireObject();
protobuf.Namespace = requireNamespace();
protobuf.Root = requireRoot();
protobuf.Enum = require_enum();
protobuf.Type = requireType();
protobuf.Field = requireField();
protobuf.OneOf = requireOneof();
protobuf.MapField = requireMapfield();
protobuf.Service = requireService();
protobuf.Method = requireMethod();
protobuf.Message = message;
protobuf.wrappers = wrappers;
protobuf.types = requireTypes();
protobuf.util = requireUtil();
protobuf.ReflectionObject._configure(protobuf.Root);
protobuf.Namespace._configure(protobuf.Type, protobuf.Service, protobuf.Enum);
protobuf.Root._configure(protobuf.Type);
protobuf.Field._configure(protobuf.Type);
var indexLightExports = indexLight.exports,
  light = indexLightExports,
  nested = {
    centrifugal: {
      nested: {
        centrifuge: {
          nested: {
            protocol: {
              options: {
                go_package: "./;protocol"
              },
              nested: {
                Error: {
                  fields: {
                    code: {
                      type: "uint32",
                      id: 1
                    },
                    message: {
                      type: "string",
                      id: 2
                    },
                    temporary: {
                      type: "bool",
                      id: 3
                    }
                  }
                },
                EmulationRequest: {
                  fields: {
                    node: {
                      type: "string",
                      id: 1
                    },
                    session: {
                      type: "string",
                      id: 2
                    },
                    data: {
                      type: "bytes",
                      id: 3
                    }
                  }
                },
                Command: {
                  fields: {
                    id: {
                      type: "uint32",
                      id: 1
                    },
                    connect: {
                      type: "ConnectRequest",
                      id: 4
                    },
                    subscribe: {
                      type: "SubscribeRequest",
                      id: 5
                    },
                    unsubscribe: {
                      type: "UnsubscribeRequest",
                      id: 6
                    },
                    publish: {
                      type: "PublishRequest",
                      id: 7
                    },
                    presence: {
                      type: "PresenceRequest",
                      id: 8
                    },
                    presence_stats: {
                      type: "PresenceStatsRequest",
                      id: 9
                    },
                    history: {
                      type: "HistoryRequest",
                      id: 10
                    },
                    ping: {
                      type: "PingRequest",
                      id: 11
                    },
                    send: {
                      type: "SendRequest",
                      id: 12
                    },
                    rpc: {
                      type: "RPCRequest",
                      id: 13
                    },
                    refresh: {
                      type: "RefreshRequest",
                      id: 14
                    },
                    sub_refresh: {
                      type: "SubRefreshRequest",
                      id: 15
                    }
                  },
                  reserved: [
                    [2, 2],
                    [3, 3]
                  ]
                },
                Reply: {
                  fields: {
                    id: {
                      type: "uint32",
                      id: 1
                    },
                    error: {
                      type: "Error",
                      id: 2
                    },
                    push: {
                      type: "Push",
                      id: 4
                    },
                    connect: {
                      type: "ConnectResult",
                      id: 5
                    },
                    subscribe: {
                      type: "SubscribeResult",
                      id: 6
                    },
                    unsubscribe: {
                      type: "UnsubscribeResult",
                      id: 7
                    },
                    publish: {
                      type: "PublishResult",
                      id: 8
                    },
                    presence: {
                      type: "PresenceResult",
                      id: 9
                    },
                    presence_stats: {
                      type: "PresenceStatsResult",
                      id: 10
                    },
                    history: {
                      type: "HistoryResult",
                      id: 11
                    },
                    ping: {
                      type: "PingResult",
                      id: 12
                    },
                    rpc: {
                      type: "RPCResult",
                      id: 13
                    },
                    refresh: {
                      type: "RefreshResult",
                      id: 14
                    },
                    sub_refresh: {
                      type: "SubRefreshResult",
                      id: 15
                    }
                  },
                  reserved: [
                    [3, 3]
                  ]
                },
                Push: {
                  fields: {
                    channel: {
                      type: "string",
                      id: 2
                    },
                    pub: {
                      type: "Publication",
                      id: 4
                    },
                    join: {
                      type: "Join",
                      id: 5
                    },
                    leave: {
                      type: "Leave",
                      id: 6
                    },
                    unsubscribe: {
                      type: "Unsubscribe",
                      id: 7
                    },
                    message: {
                      type: "Message",
                      id: 8
                    },
                    subscribe: {
                      type: "Subscribe",
                      id: 9
                    },
                    connect: {
                      type: "Connect",
                      id: 10
                    },
                    disconnect: {
                      type: "Disconnect",
                      id: 11
                    },
                    refresh: {
                      type: "Refresh",
                      id: 12
                    }
                  },
                  reserved: [
                    [1, 1],
                    [3, 3]
                  ]
                },
                ClientInfo: {
                  fields: {
                    user: {
                      type: "string",
                      id: 1
                    },
                    client: {
                      type: "string",
                      id: 2
                    },
                    conn_info: {
                      type: "bytes",
                      id: 3
                    },
                    chan_info: {
                      type: "bytes",
                      id: 4
                    }
                  }
                },
                Publication: {
                  fields: {
                    data: {
                      type: "bytes",
                      id: 4
                    },
                    info: {
                      type: "ClientInfo",
                      id: 5
                    },
                    offset: {
                      type: "uint64",
                      id: 6
                    },
                    tags: {
                      keyType: "string",
                      type: "string",
                      id: 7
                    },
                    delta: {
                      type: "bool",
                      id: 8
                    },
                    time: {
                      type: "int64",
                      id: 9
                    }
                  },
                  reserved: [
                    [1, 1],
                    [2, 2],
                    [3, 3]
                  ]
                },
                Join: {
                  fields: {
                    info: {
                      type: "ClientInfo",
                      id: 1
                    }
                  }
                },
                Leave: {
                  fields: {
                    info: {
                      type: "ClientInfo",
                      id: 1
                    }
                  }
                },
                Unsubscribe: {
                  fields: {
                    code: {
                      type: "uint32",
                      id: 2
                    },
                    reason: {
                      type: "string",
                      id: 3
                    }
                  },
                  reserved: [
                    [1, 1]
                  ]
                },
                Subscribe: {
                  fields: {
                    recoverable: {
                      type: "bool",
                      id: 1
                    },
                    epoch: {
                      type: "string",
                      id: 4
                    },
                    offset: {
                      type: "uint64",
                      id: 5
                    },
                    positioned: {
                      type: "bool",
                      id: 6
                    },
                    data: {
                      type: "bytes",
                      id: 7
                    }
                  },
                  reserved: [
                    [2, 2],
                    [3, 3]
                  ]
                },
                Message: {
                  fields: {
                    data: {
                      type: "bytes",
                      id: 1
                    }
                  }
                },
                Connect: {
                  fields: {
                    client: {
                      type: "string",
                      id: 1
                    },
                    version: {
                      type: "string",
                      id: 2
                    },
                    data: {
                      type: "bytes",
                      id: 3
                    },
                    subs: {
                      keyType: "string",
                      type: "SubscribeResult",
                      id: 4
                    },
                    expires: {
                      type: "bool",
                      id: 5
                    },
                    ttl: {
                      type: "uint32",
                      id: 6
                    },
                    ping: {
                      type: "uint32",
                      id: 7
                    },
                    pong: {
                      type: "bool",
                      id: 8
                    },
                    session: {
                      type: "string",
                      id: 9
                    },
                    node: {
                      type: "string",
                      id: 10
                    },
                    time: {
                      type: "int64",
                      id: 11
                    }
                  }
                },
                Disconnect: {
                  fields: {
                    code: {
                      type: "uint32",
                      id: 1
                    },
                    reason: {
                      type: "string",
                      id: 2
                    },
                    reconnect: {
                      type: "bool",
                      id: 3
                    }
                  }
                },
                Refresh: {
                  fields: {
                    expires: {
                      type: "bool",
                      id: 1
                    },
                    ttl: {
                      type: "uint32",
                      id: 2
                    }
                  }
                },
                ConnectRequest: {
                  fields: {
                    token: {
                      type: "string",
                      id: 1
                    },
                    data: {
                      type: "bytes",
                      id: 2
                    },
                    subs: {
                      keyType: "string",
                      type: "SubscribeRequest",
                      id: 3
                    },
                    name: {
                      type: "string",
                      id: 4
                    },
                    version: {
                      type: "string",
                      id: 5
                    }
                  }
                },
                ConnectResult: {
                  fields: {
                    client: {
                      type: "string",
                      id: 1
                    },
                    version: {
                      type: "string",
                      id: 2
                    },
                    expires: {
                      type: "bool",
                      id: 3
                    },
                    ttl: {
                      type: "uint32",
                      id: 4
                    },
                    data: {
                      type: "bytes",
                      id: 5
                    },
                    subs: {
                      keyType: "string",
                      type: "SubscribeResult",
                      id: 6
                    },
                    ping: {
                      type: "uint32",
                      id: 7
                    },
                    pong: {
                      type: "bool",
                      id: 8
                    },
                    session: {
                      type: "string",
                      id: 9
                    },
                    node: {
                      type: "string",
                      id: 10
                    },
                    time: {
                      type: "int64",
                      id: 11
                    }
                  }
                },
                RefreshRequest: {
                  fields: {
                    token: {
                      type: "string",
                      id: 1
                    }
                  }
                },
                RefreshResult: {
                  fields: {
                    client: {
                      type: "string",
                      id: 1
                    },
                    version: {
                      type: "string",
                      id: 2
                    },
                    expires: {
                      type: "bool",
                      id: 3
                    },
                    ttl: {
                      type: "uint32",
                      id: 4
                    }
                  }
                },
                SubscribeRequest: {
                  fields: {
                    channel: {
                      type: "string",
                      id: 1
                    },
                    token: {
                      type: "string",
                      id: 2
                    },
                    recover: {
                      type: "bool",
                      id: 3
                    },
                    epoch: {
                      type: "string",
                      id: 6
                    },
                    offset: {
                      type: "uint64",
                      id: 7
                    },
                    data: {
                      type: "bytes",
                      id: 8
                    },
                    positioned: {
                      type: "bool",
                      id: 9
                    },
                    recoverable: {
                      type: "bool",
                      id: 10
                    },
                    join_leave: {
                      type: "bool",
                      id: 11
                    },
                    delta: {
                      type: "string",
                      id: 12
                    }
                  },
                  reserved: [
                    [4, 4],
                    [5, 5]
                  ]
                },
                SubscribeResult: {
                  fields: {
                    expires: {
                      type: "bool",
                      id: 1
                    },
                    ttl: {
                      type: "uint32",
                      id: 2
                    },
                    recoverable: {
                      type: "bool",
                      id: 3
                    },
                    epoch: {
                      type: "string",
                      id: 6
                    },
                    publications: {
                      rule: "repeated",
                      type: "Publication",
                      id: 7
                    },
                    recovered: {
                      type: "bool",
                      id: 8
                    },
                    offset: {
                      type: "uint64",
                      id: 9
                    },
                    positioned: {
                      type: "bool",
                      id: 10
                    },
                    data: {
                      type: "bytes",
                      id: 11
                    },
                    was_recovering: {
                      type: "bool",
                      id: 12
                    },
                    delta: {
                      type: "bool",
                      id: 13
                    }
                  },
                  reserved: [
                    [4, 4],
                    [5, 5]
                  ]
                },
                SubRefreshRequest: {
                  fields: {
                    channel: {
                      type: "string",
                      id: 1
                    },
                    token: {
                      type: "string",
                      id: 2
                    }
                  }
                },
                SubRefreshResult: {
                  fields: {
                    expires: {
                      type: "bool",
                      id: 1
                    },
                    ttl: {
                      type: "uint32",
                      id: 2
                    }
                  }
                },
                UnsubscribeRequest: {
                  fields: {
                    channel: {
                      type: "string",
                      id: 1
                    }
                  }
                },
                UnsubscribeResult: {
                  fields: {}
                },
                PublishRequest: {
                  fields: {
                    channel: {
                      type: "string",
                      id: 1
                    },
                    data: {
                      type: "bytes",
                      id: 2
                    }
                  }
                },
                PublishResult: {
                  fields: {}
                },
                PresenceRequest: {
                  fields: {
                    channel: {
                      type: "string",
                      id: 1
                    }
                  }
                },
                PresenceResult: {
                  fields: {
                    presence: {
                      keyType: "string",
                      type: "ClientInfo",
                      id: 1
                    }
                  }
                },
                PresenceStatsRequest: {
                  fields: {
                    channel: {
                      type: "string",
                      id: 1
                    }
                  }
                },
                PresenceStatsResult: {
                  fields: {
                    num_clients: {
                      type: "uint32",
                      id: 1
                    },
                    num_users: {
                      type: "uint32",
                      id: 2
                    }
                  }
                },
                StreamPosition: {
                  fields: {
                    offset: {
                      type: "uint64",
                      id: 1
                    },
                    epoch: {
                      type: "string",
                      id: 2
                    }
                  }
                },
                HistoryRequest: {
                  fields: {
                    channel: {
                      type: "string",
                      id: 1
                    },
                    limit: {
                      type: "int32",
                      id: 7
                    },
                    since: {
                      type: "StreamPosition",
                      id: 8
                    },
                    reverse: {
                      type: "bool",
                      id: 9
                    }
                  },
                  reserved: [
                    [2, 2],
                    [3, 3],
                    [4, 4],
                    [5, 5],
                    [6, 6]
                  ]
                },
                HistoryResult: {
                  fields: {
                    publications: {
                      rule: "repeated",
                      type: "Publication",
                      id: 1
                    },
                    epoch: {
                      type: "string",
                      id: 2
                    },
                    offset: {
                      type: "uint64",
                      id: 3
                    }
                  }
                },
                PingRequest: {
                  fields: {}
                },
                PingResult: {
                  fields: {}
                },
                RPCRequest: {
                  fields: {
                    data: {
                      type: "bytes",
                      id: 1
                    },
                    method: {
                      type: "string",
                      id: 2
                    }
                  }
                },
                RPCResult: {
                  fields: {
                    data: {
                      type: "bytes",
                      id: 1
                    }
                  }
                },
                SendRequest: {
                  fields: {
                    data: {
                      type: "bytes",
                      id: 1
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  client_proto = {
    nested
  },
  protoJSON = Object.freeze({
    __proto__: null,
    default: client_proto,
    nested
  });
const proto = light.Root.fromJSON(protoJSON),
  Command = proto.lookupType("protocol.Command"),
  Reply = proto.lookupType("protocol.Reply"),
  EmulationRequest = proto.lookupType("protocol.EmulationRequest");
class ProtobufCodec {
  name() {
    return "protobuf"
  }
  encodeEmulationRequest(e) {
    const t = light.Writer.create();
    return EmulationRequest.encode(e, t), t.finish()
  }
  encodeCommands(e) {
    const t = light.Writer.create();
    for (const r in e)
      if (e.hasOwnProperty(r)) {
        const s = Object.assign({}, e[r]);
        Command.encodeDelimited(s, t)
      } return t.finish()
  }
  decodeReplies(e) {
    const t = [],
      r = light.Reader.create(new Uint8Array(e));
    for (; r.pos < r.len;) {
      const s = Reply.decodeDelimited(r);
      t.push(s)
    }
    return t
  }
  decodeReply(e) {
    const t = light.Reader.create(new Uint8Array(e));
    for (; t.pos < t.len;) return Reply.decodeDelimited(t), {
      ok: !0,
      pos: t.pos
    };
    return {
      ok: !1
    }
  }
  applyDeltaIfNeeded(e, t) {
    let r, s;
    if (e.delta) {
      const o = applyDelta(t, e.data);
      r = new Uint8Array(o), s = o
    } else r = e.data, s = e.data;
    return {
      newData: r,
      newPrevValue: s
    }
  }
}
class CentrifugeProtobuf extends Centrifuge {
  _formatOverride() {
    this._codec = new ProtobufCodec
  }
}
export {
  CentrifugeProtobuf as C
};