import {
  g as $t
} from "./@ledgerhq-BW4RAlPi.js";
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
var $ = function(e, r) {
  return $ = Object.setPrototypeOf || {
    __proto__: []
  }
  instanceof Array && function(t, n) {
    t.__proto__ = n
  } || function(t, n) {
    for (var i in n) n.hasOwnProperty(i) && (t[i] = n[i])
  }, $(e, r)
};

function a(e, r) {
  $(e, r);

  function t() {
    this.constructor = e
  }
  e.prototype = r === null ? Object.create(r) : (t.prototype = r.prototype, new t)
}

function _(e) {
  return typeof e == "function"
}
var rt = !1,
  y = {
    Promise: void 0,
    set useDeprecatedSynchronousErrorHandling(e) {
      if (e) {
        var r = new Error;
        "" + r.stack
      }
      rt = e
    },
    get useDeprecatedSynchronousErrorHandling() {
      return rt
    }
  };

function S(e) {
  setTimeout(function() {
    throw e
  }, 0)
}
var Y = {
    closed: !0,
    next: function(e) {},
    error: function(e) {
      if (y.useDeprecatedSynchronousErrorHandling) throw e;
      S(e)
    },
    complete: function() {}
  },
  m = function() {
    return Array.isArray || function(e) {
      return e && typeof e.length == "number"
    }
  }();

function z(e) {
  return e !== null && typeof e == "object"
}
var Ht = function() {
    function e(r) {
      return Error.call(this), this.message = r ? r.length + ` errors occurred during unsubscription:
` + r.map(function(t, n) {
        return n + 1 + ") " + t.toString()
      }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = r, this
    }
    return e.prototype = Object.create(Error.prototype), e
  }(),
  P = Ht,
  b = function() {
    function e(r) {
      this.closed = !1, this._parentOrParents = null, this._subscriptions = null, r && (this._ctorUnsubscribe = !0, this._unsubscribe = r)
    }
    return e.prototype.unsubscribe = function() {
      var r;
      if (!this.closed) {
        var t = this,
          n = t._parentOrParents,
          i = t._ctorUnsubscribe,
          o = t._unsubscribe,
          u = t._subscriptions;
        if (this.closed = !0, this._parentOrParents = null, this._subscriptions = null, n instanceof e) n.remove(this);
        else if (n !== null)
          for (var s = 0; s < n.length; ++s) {
            var c = n[s];
            c.remove(this)
          }
        if (_(o)) {
          i && (this._unsubscribe = void 0);
          try {
            o.call(this)
          } catch (l) {
            r = l instanceof P ? nt(l.errors) : [l]
          }
        }
        if (m(u))
          for (var s = -1, d = u.length; ++s < d;) {
            var h = u[s];
            if (z(h)) try {
              h.unsubscribe()
            } catch (p) {
              r = r || [], p instanceof P ? r = r.concat(nt(p.errors)) : r.push(p)
            }
          }
        if (r) throw new P(r)
      }
    }, e.prototype.add = function(r) {
      var t = r;
      if (!r) return e.EMPTY;
      switch (typeof r) {
        case "function":
          t = new e(r);
        case "object":
          if (t === this || t.closed || typeof t.unsubscribe != "function") return t;
          if (this.closed) return t.unsubscribe(), t;
          if (!(t instanceof e)) {
            var n = t;
            t = new e, t._subscriptions = [n]
          }
          break;
        default:
          throw new Error("unrecognized teardown " + r + " added to Subscription.")
      }
      var i = t._parentOrParents;
      if (i === null) t._parentOrParents = this;
      else if (i instanceof e) {
        if (i === this) return t;
        t._parentOrParents = [i, this]
      } else if (i.indexOf(this) === -1) i.push(this);
      else return t;
      var o = this._subscriptions;
      return o === null ? this._subscriptions = [t] : o.push(t), t
    }, e.prototype.remove = function(r) {
      var t = this._subscriptions;
      if (t) {
        var n = t.indexOf(r);
        n !== -1 && t.splice(n, 1)
      }
    }, e.EMPTY = function(r) {
      return r.closed = !0, r
    }(new e), e
  }();

function nt(e) {
  return e.reduce(function(r, t) {
    return r.concat(t instanceof P ? t.errors : t)
  }, [])
}
var U = function() {
    return typeof Symbol == "function" ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random()
  }(),
  v = function(e) {
    a(r, e);

    function r(t, n, i) {
      var o = e.call(this) || this;
      switch (o.syncErrorValue = null, o.syncErrorThrown = !1, o.syncErrorThrowable = !1, o.isStopped = !1, arguments.length) {
        case 0:
          o.destination = Y;
          break;
        case 1:
          if (!t) {
            o.destination = Y;
            break
          }
          if (typeof t == "object") {
            t instanceof r ? (o.syncErrorThrowable = t.syncErrorThrowable, o.destination = t, t.add(o)) : (o.syncErrorThrowable = !0, o.destination = new it(o, t));
            break
          }
        default:
          o.syncErrorThrowable = !0, o.destination = new it(o, t, n, i);
          break
      }
      return o
    }
    return r.prototype[U] = function() {
      return this
    }, r.create = function(t, n, i) {
      var o = new r(t, n, i);
      return o.syncErrorThrowable = !1, o
    }, r.prototype.next = function(t) {
      this.isStopped || this._next(t)
    }, r.prototype.error = function(t) {
      this.isStopped || (this.isStopped = !0, this._error(t))
    }, r.prototype.complete = function() {
      this.isStopped || (this.isStopped = !0, this._complete())
    }, r.prototype.unsubscribe = function() {
      this.closed || (this.isStopped = !0, e.prototype.unsubscribe.call(this))
    }, r.prototype._next = function(t) {
      this.destination.next(t)
    }, r.prototype._error = function(t) {
      this.destination.error(t), this.unsubscribe()
    }, r.prototype._complete = function() {
      this.destination.complete(), this.unsubscribe()
    }, r.prototype._unsubscribeAndRecycle = function() {
      var t = this._parentOrParents;
      return this._parentOrParents = null, this.unsubscribe(), this.closed = !1, this.isStopped = !1, this._parentOrParents = t, this
    }, r
  }(b),
  it = function(e) {
    a(r, e);

    function r(t, n, i, o) {
      var u = e.call(this) || this;
      u._parentSubscriber = t;
      var s, c = u;
      return _(n) ? s = n : n && (s = n.next, i = n.error, o = n.complete, n !== Y && (c = Object.create(n), _(c.unsubscribe) && u.add(c.unsubscribe.bind(c)), c.unsubscribe = u.unsubscribe.bind(u))), u._context = c, u._next = s, u._error = i, u._complete = o, u
    }
    return r.prototype.next = function(t) {
      if (!this.isStopped && this._next) {
        var n = this._parentSubscriber;
        !y.useDeprecatedSynchronousErrorHandling || !n.syncErrorThrowable ? this.__tryOrUnsub(this._next, t) : this.__tryOrSetError(n, this._next, t) && this.unsubscribe()
      }
    }, r.prototype.error = function(t) {
      if (!this.isStopped) {
        var n = this._parentSubscriber,
          i = y.useDeprecatedSynchronousErrorHandling;
        if (this._error) !i || !n.syncErrorThrowable ? (this.__tryOrUnsub(this._error, t), this.unsubscribe()) : (this.__tryOrSetError(n, this._error, t), this.unsubscribe());
        else if (n.syncErrorThrowable) i ? (n.syncErrorValue = t, n.syncErrorThrown = !0) : S(t), this.unsubscribe();
        else {
          if (this.unsubscribe(), i) throw t;
          S(t)
        }
      }
    }, r.prototype.complete = function() {
      var t = this;
      if (!this.isStopped) {
        var n = this._parentSubscriber;
        if (this._complete) {
          var i = function() {
            return t._complete.call(t._context)
          };
          !y.useDeprecatedSynchronousErrorHandling || !n.syncErrorThrowable ? (this.__tryOrUnsub(i), this.unsubscribe()) : (this.__tryOrSetError(n, i), this.unsubscribe())
        } else this.unsubscribe()
      }
    }, r.prototype.__tryOrUnsub = function(t, n) {
      try {
        t.call(this._context, n)
      } catch (i) {
        if (this.unsubscribe(), y.useDeprecatedSynchronousErrorHandling) throw i;
        S(i)
      }
    }, r.prototype.__tryOrSetError = function(t, n, i) {
      if (!y.useDeprecatedSynchronousErrorHandling) throw new Error("bad call");
      try {
        n.call(this._context, i)
      } catch (o) {
        return y.useDeprecatedSynchronousErrorHandling ? (t.syncErrorValue = o, t.syncErrorThrown = !0, !0) : (S(o), !0)
      }
      return !1
    }, r.prototype._unsubscribe = function() {
      var t = this._parentSubscriber;
      this._context = null, this._parentSubscriber = null, t.unsubscribe()
    }, r
  }(v);

function J(e) {
  for (; e;) {
    var r = e,
      t = r.closed,
      n = r.destination,
      i = r.isStopped;
    if (t || i) return !1;
    n && n instanceof v ? e = n : e = null
  }
  return !0
}

function Bt(e, r, t) {
  if (e) {
    if (e instanceof v) return e;
    if (e[U]) return e[U]()
  }
  return !e && !r && !t ? new v(Y) : new v(e, r, t)
}
var A = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable"
}();

function I(e) {
  return e
}

function Wt() {
  for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
  return ht(e)
}

function ht(e) {
  return e.length === 0 ? I : e.length === 1 ? e[0] : function(t) {
    return e.reduce(function(n, i) {
      return i(n)
    }, t)
  }
}
var f = function() {
  function e(r) {
    this._isScalar = !1, r && (this._subscribe = r)
  }
  return e.prototype.lift = function(r) {
    var t = new e;
    return t.source = this, t.operator = r, t
  }, e.prototype.subscribe = function(r, t, n) {
    var i = this.operator,
      o = Bt(r, t, n);
    if (i ? o.add(i.call(o, this.source)) : o.add(this.source || y.useDeprecatedSynchronousErrorHandling && !o.syncErrorThrowable ? this._subscribe(o) : this._trySubscribe(o)), y.useDeprecatedSynchronousErrorHandling && o.syncErrorThrowable && (o.syncErrorThrowable = !1, o.syncErrorThrown)) throw o.syncErrorValue;
    return o
  }, e.prototype._trySubscribe = function(r) {
    try {
      return this._subscribe(r)
    } catch (t) {
      y.useDeprecatedSynchronousErrorHandling && (r.syncErrorThrown = !0, r.syncErrorValue = t), J(r) ? r.error(t) : console.warn(t)
    }
  }, e.prototype.forEach = function(r, t) {
    var n = this;
    return t = ot(t), new t(function(i, o) {
      var u;
      u = n.subscribe(function(s) {
        try {
          r(s)
        } catch (c) {
          o(c), u && u.unsubscribe()
        }
      }, o, i)
    })
  }, e.prototype._subscribe = function(r) {
    var t = this.source;
    return t && t.subscribe(r)
  }, e.prototype[A] = function() {
    return this
  }, e.prototype.pipe = function() {
    for (var r = [], t = 0; t < arguments.length; t++) r[t] = arguments[t];
    return r.length === 0 ? this : ht(r)(this)
  }, e.prototype.toPromise = function(r) {
    var t = this;
    return r = ot(r), new r(function(n, i) {
      var o;
      t.subscribe(function(u) {
        return o = u
      }, function(u) {
        return i(u)
      }, function() {
        return n(o)
      })
    })
  }, e.create = function(r) {
    return new e(r)
  }, e
}();

function ot(e) {
  if (e || (e = y.Promise || Promise), !e) throw new Error("no Promise impl found");
  return e
}
var Zt = function() {
    function e() {
      return Error.call(this), this.message = "object unsubscribed", this.name = "ObjectUnsubscribedError", this
    }
    return e.prototype = Object.create(Error.prototype), e
  }(),
  w = Zt,
  lt = function(e) {
    a(r, e);

    function r(t, n) {
      var i = e.call(this) || this;
      return i.subject = t, i.subscriber = n, i.closed = !1, i
    }
    return r.prototype.unsubscribe = function() {
      if (!this.closed) {
        this.closed = !0;
        var t = this.subject,
          n = t.observers;
        if (this.subject = null, !(!n || n.length === 0 || t.isStopped || t.closed)) {
          var i = n.indexOf(this.subscriber);
          i !== -1 && n.splice(i, 1)
        }
      }
    }, r
  }(b),
  pt = function(e) {
    a(r, e);

    function r(t) {
      var n = e.call(this, t) || this;
      return n.destination = t, n
    }
    return r
  }(v),
  C = function(e) {
    a(r, e);

    function r() {
      var t = e.call(this) || this;
      return t.observers = [], t.closed = !1, t.isStopped = !1, t.hasError = !1, t.thrownError = null, t
    }
    return r.prototype[U] = function() {
      return new pt(this)
    }, r.prototype.lift = function(t) {
      var n = new ut(this, this);
      return n.operator = t, n
    }, r.prototype.next = function(t) {
      if (this.closed) throw new w;
      if (!this.isStopped)
        for (var n = this.observers, i = n.length, o = n.slice(), u = 0; u < i; u++) o[u].next(t)
    }, r.prototype.error = function(t) {
      if (this.closed) throw new w;
      this.hasError = !0, this.thrownError = t, this.isStopped = !0;
      for (var n = this.observers, i = n.length, o = n.slice(), u = 0; u < i; u++) o[u].error(t);
      this.observers.length = 0
    }, r.prototype.complete = function() {
      if (this.closed) throw new w;
      this.isStopped = !0;
      for (var t = this.observers, n = t.length, i = t.slice(), o = 0; o < n; o++) i[o].complete();
      this.observers.length = 0
    }, r.prototype.unsubscribe = function() {
      this.isStopped = !0, this.closed = !0, this.observers = null
    }, r.prototype._trySubscribe = function(t) {
      if (this.closed) throw new w;
      return e.prototype._trySubscribe.call(this, t)
    }, r.prototype._subscribe = function(t) {
      if (this.closed) throw new w;
      return this.hasError ? (t.error(this.thrownError), b.EMPTY) : this.isStopped ? (t.complete(), b.EMPTY) : (this.observers.push(t), new lt(this, t))
    }, r.prototype.asObservable = function() {
      var t = new f;
      return t.source = this, t
    }, r.create = function(t, n) {
      return new ut(t, n)
    }, r
  }(f),
  ut = function(e) {
    a(r, e);

    function r(t, n) {
      var i = e.call(this) || this;
      return i.destination = t, i.source = n, i
    }
    return r.prototype.next = function(t) {
      var n = this.destination;
      n && n.next && n.next(t)
    }, r.prototype.error = function(t) {
      var n = this.destination;
      n && n.error && this.destination.error(t)
    }, r.prototype.complete = function() {
      var t = this.destination;
      t && t.complete && this.destination.complete()
    }, r.prototype._subscribe = function(t) {
      var n = this.source;
      return n ? this.source.subscribe(t) : b.EMPTY
    }, r
  }(C);

function dt() {
  return function(r) {
    return r.lift(new Gt(r))
  }
}
var Gt = function() {
    function e(r) {
      this.connectable = r
    }
    return e.prototype.call = function(r, t) {
      var n = this.connectable;
      n._refCount++;
      var i = new Qt(r, n),
        o = t.subscribe(i);
      return i.closed || (i.connection = n.connect()), o
    }, e
  }(),
  Qt = function(e) {
    a(r, e);

    function r(t, n) {
      var i = e.call(this, t) || this;
      return i.connectable = n, i
    }
    return r.prototype._unsubscribe = function() {
      var t = this.connectable;
      if (!t) {
        this.connection = null;
        return
      }
      this.connectable = null;
      var n = t._refCount;
      if (n <= 0) {
        this.connection = null;
        return
      }
      if (t._refCount = n - 1, n > 1) {
        this.connection = null;
        return
      }
      var i = this.connection,
        o = t._connection;
      this.connection = null, o && (!i || o === i) && o.unsubscribe()
    }, r
  }(v),
  vt = function(e) {
    a(r, e);

    function r(t, n) {
      var i = e.call(this) || this;
      return i.source = t, i.subjectFactory = n, i._refCount = 0, i._isComplete = !1, i
    }
    return r.prototype._subscribe = function(t) {
      return this.getSubject().subscribe(t)
    }, r.prototype.getSubject = function() {
      var t = this._subject;
      return (!t || t.isStopped) && (this._subject = this.subjectFactory()), this._subject
    }, r.prototype.connect = function() {
      var t = this._connection;
      return t || (this._isComplete = !1, t = this._connection = new b, t.add(this.source.subscribe(new Jt(this.getSubject(), this))), t.closed && (this._connection = null, t = b.EMPTY)), t
    }, r.prototype.refCount = function() {
      return dt()(this)
    }, r
  }(f),
  zt = function() {
    var e = vt.prototype;
    return {
      operator: {
        value: null
      },
      _refCount: {
        value: 0,
        writable: !0
      },
      _subject: {
        value: null,
        writable: !0
      },
      _connection: {
        value: null,
        writable: !0
      },
      _subscribe: {
        value: e._subscribe
      },
      _isComplete: {
        value: e._isComplete,
        writable: !0
      },
      getSubject: {
        value: e.getSubject
      },
      connect: {
        value: e.connect
      },
      refCount: {
        value: e.refCount
      }
    }
  }(),
  Jt = function(e) {
    a(r, e);

    function r(t, n) {
      var i = e.call(this, t) || this;
      return i.connectable = n, i
    }
    return r.prototype._error = function(t) {
      this._unsubscribe(), e.prototype._error.call(this, t)
    }, r.prototype._complete = function() {
      this.connectable._isComplete = !0, this._unsubscribe(), e.prototype._complete.call(this)
    }, r.prototype._unsubscribe = function() {
      var t = this.connectable;
      if (t) {
        this.connectable = null;
        var n = t._connection;
        t._refCount = 0, t._subject = null, t._connection = null, n && n.unsubscribe()
      }
    }, r
  }(pt),
  Xt = function(e) {
    a(r, e);

    function r(t, n, i) {
      var o = e.call(this) || this;
      return o.key = t, o.groupSubject = n, o.refCountSubscription = i, o
    }
    return r.prototype._subscribe = function(t) {
      var n = new b,
        i = this,
        o = i.refCountSubscription,
        u = i.groupSubject;
      return o && !o.closed && n.add(new Kt(o)), n.add(u.subscribe(t)), n
    }, r
  }(f),
  Kt = function(e) {
    a(r, e);

    function r(t) {
      var n = e.call(this) || this;
      return n.parent = t, t.count++, n
    }
    return r.prototype.unsubscribe = function() {
      var t = this.parent;
      !t.closed && !this.closed && (e.prototype.unsubscribe.call(this), t.count -= 1, t.count === 0 && t.attemptedToUnsubscribe && t.unsubscribe())
    }, r
  }(b),
  te = function(e) {
    a(r, e);

    function r(t) {
      var n = e.call(this) || this;
      return n._value = t, n
    }
    return Object.defineProperty(r.prototype, "value", {
      get: function() {
        return this.getValue()
      },
      enumerable: !0,
      configurable: !0
    }), r.prototype._subscribe = function(t) {
      var n = e.prototype._subscribe.call(this, t);
      return n && !n.closed && t.next(this._value), n
    }, r.prototype.getValue = function() {
      if (this.hasError) throw this.thrownError;
      if (this.closed) throw new w;
      return this._value
    }, r.prototype.next = function(t) {
      e.prototype.next.call(this, this._value = t)
    }, r
  }(C),
  ee = function(e) {
    a(r, e);

    function r(t, n) {
      return e.call(this) || this
    }
    return r.prototype.schedule = function(t, n) {
      return this
    }, r
  }(b),
  V = function(e) {
    a(r, e);

    function r(t, n) {
      var i = e.call(this, t, n) || this;
      return i.scheduler = t, i.work = n, i.pending = !1, i
    }
    return r.prototype.schedule = function(t, n) {
      if (n === void 0 && (n = 0), this.closed) return this;
      this.state = t;
      var i = this.id,
        o = this.scheduler;
      return i != null && (this.id = this.recycleAsyncId(o, i, n)), this.pending = !0, this.delay = n, this.id = this.id || this.requestAsyncId(o, this.id, n), this
    }, r.prototype.requestAsyncId = function(t, n, i) {
      return i === void 0 && (i = 0), setInterval(t.flush.bind(t, this), i)
    }, r.prototype.recycleAsyncId = function(t, n, i) {
      if (i === void 0 && (i = 0), i !== null && this.delay === i && this.pending === !1) return n;
      clearInterval(n)
    }, r.prototype.execute = function(t, n) {
      if (this.closed) return new Error("executing a cancelled action");
      this.pending = !1;
      var i = this._execute(t, n);
      if (i) return i;
      this.pending === !1 && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null))
    }, r.prototype._execute = function(t, n) {
      var i = !1,
        o = void 0;
      try {
        this.work(t)
      } catch (u) {
        i = !0, o = !!u && u || new Error(u)
      }
      if (i) return this.unsubscribe(), o
    }, r.prototype._unsubscribe = function() {
      var t = this.id,
        n = this.scheduler,
        i = n.actions,
        o = i.indexOf(this);
      this.work = null, this.state = null, this.pending = !1, this.scheduler = null, o !== -1 && i.splice(o, 1), t != null && (this.id = this.recycleAsyncId(n, t, null)), this.delay = null
    }, r
  }(ee),
  re = function(e) {
    a(r, e);

    function r(t, n) {
      var i = e.call(this, t, n) || this;
      return i.scheduler = t, i.work = n, i
    }
    return r.prototype.schedule = function(t, n) {
      return n === void 0 && (n = 0), n > 0 ? e.prototype.schedule.call(this, t, n) : (this.delay = n, this.state = t, this.scheduler.flush(this), this)
    }, r.prototype.execute = function(t, n) {
      return n > 0 || this.closed ? e.prototype.execute.call(this, t, n) : this._execute(t, n)
    }, r.prototype.requestAsyncId = function(t, n, i) {
      return i === void 0 && (i = 0), i !== null && i > 0 || i === null && this.delay > 0 ? e.prototype.requestAsyncId.call(this, t, n, i) : t.flush(this)
    }, r
  }(V),
  H = function() {
    function e(r, t) {
      t === void 0 && (t = e.now), this.SchedulerAction = r, this.now = t
    }
    return e.prototype.schedule = function(r, t, n) {
      return t === void 0 && (t = 0), new this.SchedulerAction(this, r).schedule(n, t)
    }, e.now = function() {
      return Date.now()
    }, e
  }(),
  F = function(e) {
    a(r, e);

    function r(t, n) {
      n === void 0 && (n = H.now);
      var i = e.call(this, t, function() {
        return r.delegate && r.delegate !== i ? r.delegate.now() : n()
      }) || this;
      return i.actions = [], i.active = !1, i.scheduled = void 0, i
    }
    return r.prototype.schedule = function(t, n, i) {
      return n === void 0 && (n = 0), r.delegate && r.delegate !== this ? r.delegate.schedule(t, n, i) : e.prototype.schedule.call(this, t, n, i)
    }, r.prototype.flush = function(t) {
      var n = this.actions;
      if (this.active) {
        n.push(t);
        return
      }
      var i;
      this.active = !0;
      do
        if (i = t.execute(t.state, t.delay)) break; while (t = n.shift());
      if (this.active = !1, i) {
        for (; t = n.shift();) t.unsubscribe();
        throw i
      }
    }, r
  }(H),
  ne = function(e) {
    a(r, e);

    function r() {
      return e !== null && e.apply(this, arguments) || this
    }
    return r
  }(F),
  bt = new ne(re),
  yt = bt,
  T = new f(function(e) {
    return e.complete()
  });

function X(e) {
  return e ? ie(e) : T
}

function ie(e) {
  return new f(function(r) {
    return e.schedule(function() {
      return r.complete()
    })
  })
}

function E(e) {
  return e && typeof e.schedule == "function"
}
var mt = function(e) {
  return function(r) {
    for (var t = 0, n = e.length; t < n && !r.closed; t++) r.next(e[t]);
    r.complete()
  }
};

function K(e, r) {
  return new f(function(t) {
    var n = new b,
      i = 0;
    return n.add(r.schedule(function() {
      if (i === e.length) {
        t.complete();
        return
      }
      t.next(e[i++]), t.closed || n.add(this.schedule())
    })), n
  })
}

function k(e, r) {
  return r ? K(e, r) : new f(mt(e))
}

function tt() {
  for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
  var t = e[e.length - 1];
  return E(t) ? (e.pop(), K(e, t)) : k(e)
}

function gt(e, r) {
  return r ? new f(function(t) {
    return r.schedule(oe, 0, {
      error: e,
      subscriber: t
    })
  }) : new f(function(t) {
    return t.error(e)
  })
}

function oe(e) {
  var r = e.error,
    t = e.subscriber;
  t.error(r)
}
var B;
B || (B = {});
var D = function() {
    function e(r, t, n) {
      this.kind = r, this.value = t, this.error = n, this.hasValue = r === "N"
    }
    return e.prototype.observe = function(r) {
      switch (this.kind) {
        case "N":
          return r.next && r.next(this.value);
        case "E":
          return r.error && r.error(this.error);
        case "C":
          return r.complete && r.complete()
      }
    }, e.prototype.do = function(r, t, n) {
      var i = this.kind;
      switch (i) {
        case "N":
          return r && r(this.value);
        case "E":
          return t && t(this.error);
        case "C":
          return n && n()
      }
    }, e.prototype.accept = function(r, t, n) {
      return r && typeof r.next == "function" ? this.observe(r) : this.do(r, t, n)
    }, e.prototype.toObservable = function() {
      var r = this.kind;
      switch (r) {
        case "N":
          return tt(this.value);
        case "E":
          return gt(this.error);
        case "C":
          return X()
      }
      throw new Error("unexpected notification kind value")
    }, e.createNext = function(r) {
      return typeof r < "u" ? new e("N", r) : e.undefinedValueNotification
    }, e.createError = function(r) {
      return new e("E", void 0, r)
    }, e.createComplete = function() {
      return e.completeNotification
    }, e.completeNotification = new e("C"), e.undefinedValueNotification = new e("N", void 0), e
  }(),
  ue = function(e) {
    a(r, e);

    function r(t, n, i) {
      i === void 0 && (i = 0);
      var o = e.call(this, t) || this;
      return o.scheduler = n, o.delay = i, o
    }
    return r.dispatch = function(t) {
      var n = t.notification,
        i = t.destination;
      n.observe(i), this.unsubscribe()
    }, r.prototype.scheduleMessage = function(t) {
      var n = this.destination;
      n.add(this.scheduler.schedule(r.dispatch, this.delay, new se(t, this.destination)))
    }, r.prototype._next = function(t) {
      this.scheduleMessage(D.createNext(t))
    }, r.prototype._error = function(t) {
      this.scheduleMessage(D.createError(t)), this.unsubscribe()
    }, r.prototype._complete = function() {
      this.scheduleMessage(D.createComplete()), this.unsubscribe()
    }, r
  }(v),
  se = function() {
    function e(r, t) {
      this.notification = r, this.destination = t
    }
    return e
  }(),
  ce = function(e) {
    a(r, e);

    function r(t, n, i) {
      t === void 0 && (t = Number.POSITIVE_INFINITY), n === void 0 && (n = Number.POSITIVE_INFINITY);
      var o = e.call(this) || this;
      return o.scheduler = i, o._events = [], o._infiniteTimeWindow = !1, o._bufferSize = t < 1 ? 1 : t, o._windowTime = n < 1 ? 1 : n, n === Number.POSITIVE_INFINITY ? (o._infiniteTimeWindow = !0, o.next = o.nextInfiniteTimeWindow) : o.next = o.nextTimeWindow, o
    }
    return r.prototype.nextInfiniteTimeWindow = function(t) {
      if (!this.isStopped) {
        var n = this._events;
        n.push(t), n.length > this._bufferSize && n.shift()
      }
      e.prototype.next.call(this, t)
    }, r.prototype.nextTimeWindow = function(t) {
      this.isStopped || (this._events.push(new ae(this._getNow(), t)), this._trimBufferThenGetEvents()), e.prototype.next.call(this, t)
    }, r.prototype._subscribe = function(t) {
      var n = this._infiniteTimeWindow,
        i = n ? this._events : this._trimBufferThenGetEvents(),
        o = this.scheduler,
        u = i.length,
        s;
      if (this.closed) throw new w;
      if (this.isStopped || this.hasError ? s = b.EMPTY : (this.observers.push(t), s = new lt(this, t)), o && t.add(t = new ue(t, o)), n)
        for (var c = 0; c < u && !t.closed; c++) t.next(i[c]);
      else
        for (var c = 0; c < u && !t.closed; c++) t.next(i[c].value);
      return this.hasError ? t.error(this.thrownError) : this.isStopped && t.complete(), s
    }, r.prototype._getNow = function() {
      return (this.scheduler || yt).now()
    }, r.prototype._trimBufferThenGetEvents = function() {
      for (var t = this._getNow(), n = this._bufferSize, i = this._windowTime, o = this._events, u = o.length, s = 0; s < u && !(t - o[s].time < i);) s++;
      return u > n && (s = Math.max(s, u - n)), s > 0 && o.splice(0, s), o
    }, r
  }(C),
  ae = function() {
    function e(r, t) {
      this.time = r, this.value = t
    }
    return e
  }(),
  R = function(e) {
    a(r, e);

    function r() {
      var t = e !== null && e.apply(this, arguments) || this;
      return t.value = null, t.hasNext = !1, t.hasCompleted = !1, t
    }
    return r.prototype._subscribe = function(t) {
      return this.hasError ? (t.error(this.thrownError), b.EMPTY) : this.hasCompleted && this.hasNext ? (t.next(this.value), t.complete(), b.EMPTY) : e.prototype._subscribe.call(this, t)
    }, r.prototype.next = function(t) {
      this.hasCompleted || (this.value = t, this.hasNext = !0)
    }, r.prototype.error = function(t) {
      this.hasCompleted || e.prototype.error.call(this, t)
    }, r.prototype.complete = function() {
      this.hasCompleted = !0, this.hasNext && e.prototype.next.call(this, this.value), e.prototype.complete.call(this)
    }, r
  }(C),
  fe = 1,
  he = function() {
    return Promise.resolve()
  }(),
  W = {};

function st(e) {
  return e in W ? (delete W[e], !0) : !1
}
var ct = {
    setImmediate: function(e) {
      var r = fe++;
      return W[r] = !0, he.then(function() {
        return st(r) && e()
      }), r
    },
    clearImmediate: function(e) {
      st(e)
    }
  },
  le = function(e) {
    a(r, e);

    function r(t, n) {
      var i = e.call(this, t, n) || this;
      return i.scheduler = t, i.work = n, i
    }
    return r.prototype.requestAsyncId = function(t, n, i) {
      return i === void 0 && (i = 0), i !== null && i > 0 ? e.prototype.requestAsyncId.call(this, t, n, i) : (t.actions.push(this), t.scheduled || (t.scheduled = ct.setImmediate(t.flush.bind(t, null))))
    }, r.prototype.recycleAsyncId = function(t, n, i) {
      if (i === void 0 && (i = 0), i !== null && i > 0 || i === null && this.delay > 0) return e.prototype.recycleAsyncId.call(this, t, n, i);
      t.actions.length === 0 && (ct.clearImmediate(n), t.scheduled = void 0)
    }, r
  }(V),
  pe = function(e) {
    a(r, e);

    function r() {
      return e !== null && e.apply(this, arguments) || this
    }
    return r.prototype.flush = function(t) {
      this.active = !0, this.scheduled = void 0;
      var n = this.actions,
        i, o = -1,
        u = n.length;
      t = t || n.shift();
      do
        if (i = t.execute(t.state, t.delay)) break; while (++o < u && (t = n.shift()));
      if (this.active = !1, i) {
        for (; ++o < u && (t = n.shift());) t.unsubscribe();
        throw i
      }
    }, r
  }(F),
  wt = new pe(le),
  de = wt,
  Et = new F(V),
  L = Et,
  ve = function(e) {
    a(r, e);

    function r(t, n) {
      var i = e.call(this, t, n) || this;
      return i.scheduler = t, i.work = n, i
    }
    return r.prototype.requestAsyncId = function(t, n, i) {
      return i === void 0 && (i = 0), i !== null && i > 0 ? e.prototype.requestAsyncId.call(this, t, n, i) : (t.actions.push(this), t.scheduled || (t.scheduled = requestAnimationFrame(function() {
        return t.flush(null)
      })))
    }, r.prototype.recycleAsyncId = function(t, n, i) {
      if (i === void 0 && (i = 0), i !== null && i > 0 || i === null && this.delay > 0) return e.prototype.recycleAsyncId.call(this, t, n, i);
      t.actions.length === 0 && (cancelAnimationFrame(n), t.scheduled = void 0)
    }, r
  }(V),
  be = function(e) {
    a(r, e);

    function r() {
      return e !== null && e.apply(this, arguments) || this
    }
    return r.prototype.flush = function(t) {
      this.active = !0, this.scheduled = void 0;
      var n = this.actions,
        i, o = -1,
        u = n.length;
      t = t || n.shift();
      do
        if (i = t.execute(t.state, t.delay)) break; while (++o < u && (t = n.shift()));
      if (this.active = !1, i) {
        for (; ++o < u && (t = n.shift());) t.unsubscribe();
        throw i
      }
    }, r
  }(F),
  xt = new be(ve),
  ye = xt,
  me = function(e) {
    a(r, e);

    function r(t, n) {
      t === void 0 && (t = St), n === void 0 && (n = Number.POSITIVE_INFINITY);
      var i = e.call(this, t, function() {
        return i.frame
      }) || this;
      return i.maxFrames = n, i.frame = 0, i.index = -1, i
    }
    return r.prototype.flush = function() {
      for (var t = this, n = t.actions, i = t.maxFrames, o, u;
        (u = n[0]) && u.delay <= i && (n.shift(), this.frame = u.delay, !(o = u.execute(u.state, u.delay))););
      if (o) {
        for (; u = n.shift();) u.unsubscribe();
        throw o
      }
    }, r.frameTimeFactor = 10, r
  }(F),
  St = function(e) {
    a(r, e);

    function r(t, n, i) {
      i === void 0 && (i = t.index += 1);
      var o = e.call(this, t, n) || this;
      return o.scheduler = t, o.work = n, o.index = i, o.active = !0, o.index = t.index = i, o
    }
    return r.prototype.schedule = function(t, n) {
      if (n === void 0 && (n = 0), !this.id) return e.prototype.schedule.call(this, t, n);
      this.active = !1;
      var i = new r(this.scheduler, this.work);
      return this.add(i), i.schedule(t, n)
    }, r.prototype.requestAsyncId = function(t, n, i) {
      i === void 0 && (i = 0), this.delay = t.frame + i;
      var o = t.actions;
      return o.push(this), o.sort(r.sortActions), !0
    }, r.prototype.recycleAsyncId = function(t, n, i) {}, r.prototype._execute = function(t, n) {
      if (this.active === !0) return e.prototype._execute.call(this, t, n)
    }, r.sortActions = function(t, n) {
      return t.delay === n.delay ? t.index === n.index ? 0 : t.index > n.index ? 1 : -1 : t.delay > n.delay ? 1 : -1
    }, r
  }(V);

function g() {}

function ge(e) {
  return !!e && (e instanceof f || typeof e.lift == "function" && typeof e.subscribe == "function")
}
var we = function() {
    function e() {
      return Error.call(this), this.message = "argument out of range", this.name = "ArgumentOutOfRangeError", this
    }
    return e.prototype = Object.create(Error.prototype), e
  }(),
  _t = we,
  Ee = function() {
    function e() {
      return Error.call(this), this.message = "no elements in sequence", this.name = "EmptyError", this
    }
    return e.prototype = Object.create(Error.prototype), e
  }(),
  et = Ee,
  xe = function() {
    function e() {
      return Error.call(this), this.message = "Timeout has occurred", this.name = "TimeoutError", this
    }
    return e.prototype = Object.create(Error.prototype), e
  }(),
  Se = xe;

function j(e, r) {
  return function(n) {
    if (typeof e != "function") throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
    return n.lift(new _e(e, r))
  }
}
var _e = function() {
    function e(r, t) {
      this.project = r, this.thisArg = t
    }
    return e.prototype.call = function(r, t) {
      return t.subscribe(new Ie(r, this.project, this.thisArg))
    }, e
  }(),
  Ie = function(e) {
    a(r, e);

    function r(t, n, i) {
      var o = e.call(this, t) || this;
      return o.project = n, o.count = 0, o.thisArg = i || o, o
    }
    return r.prototype._next = function(t) {
      var n;
      try {
        n = this.project.call(this.thisArg, t, this.count++)
      } catch (i) {
        this.destination.error(i);
        return
      }
      this.destination.next(n)
    }, r
  }(v);

function It(e, r, t) {
  if (r)
    if (E(r)) t = r;
    else return function() {
      for (var n = [], i = 0; i < arguments.length; i++) n[i] = arguments[i];
      return It(e, t).apply(void 0, n).pipe(j(function(o) {
        return m(o) ? r.apply(void 0, o) : r(o)
      }))
    };
  return function() {
    for (var n = [], i = 0; i < arguments.length; i++) n[i] = arguments[i];
    var o = this,
      u, s = {
        context: o,
        subject: u,
        callbackFunc: e,
        scheduler: t
      };
    return new f(function(c) {
      if (t) {
        var h = {
          args: n,
          subscriber: c,
          params: s
        };
        return t.schedule(Te, 0, h)
      } else {
        if (!u) {
          u = new R;
          var d = function() {
            for (var l = [], p = 0; p < arguments.length; p++) l[p] = arguments[p];
            u.next(l.length <= 1 ? l[0] : l), u.complete()
          };
          try {
            e.apply(o, n.concat([d]))
          } catch (l) {
            J(u) ? u.error(l) : console.warn(l)
          }
        }
        return u.subscribe(c)
      }
    })
  }
}

function Te(e) {
  var r = this,
    t = e.args,
    n = e.subscriber,
    i = e.params,
    o = i.callbackFunc,
    u = i.context,
    s = i.scheduler,
    c = i.subject;
  if (!c) {
    c = i.subject = new R;
    var d = function() {
      for (var h = [], l = 0; l < arguments.length; l++) h[l] = arguments[l];
      var p = h.length <= 1 ? h[0] : h;
      r.add(s.schedule(Ae, 0, {
        value: p,
        subject: c
      }))
    };
    try {
      o.apply(u, t.concat([d]))
    } catch (h) {
      c.error(h)
    }
  }
  this.add(c.subscribe(n))
}

function Ae(e) {
  var r = e.value,
    t = e.subject;
  t.next(r), t.complete()
}

function Tt(e, r, t) {
  if (r)
    if (E(r)) t = r;
    else return function() {
      for (var n = [], i = 0; i < arguments.length; i++) n[i] = arguments[i];
      return Tt(e, t).apply(void 0, n).pipe(j(function(o) {
        return m(o) ? r.apply(void 0, o) : r(o)
      }))
    };
  return function() {
    for (var n = [], i = 0; i < arguments.length; i++) n[i] = arguments[i];
    var o = {
      subject: void 0,
      args: n,
      callbackFunc: e,
      scheduler: t,
      context: this
    };
    return new f(function(u) {
      var s = o.context,
        c = o.subject;
      if (t) return t.schedule(Ce, 0, {
        params: o,
        subscriber: u,
        context: s
      });
      if (!c) {
        c = o.subject = new R;
        var d = function() {
          for (var h = [], l = 0; l < arguments.length; l++) h[l] = arguments[l];
          var p = h.shift();
          if (p) {
            c.error(p);
            return
          }
          c.next(h.length <= 1 ? h[0] : h), c.complete()
        };
        try {
          e.apply(s, n.concat([d]))
        } catch (h) {
          J(c) ? c.error(h) : console.warn(h)
        }
      }
      return c.subscribe(u)
    })
  }
}

function Ce(e) {
  var r = this,
    t = e.params,
    n = e.subscriber,
    i = e.context,
    o = t.callbackFunc,
    u = t.args,
    s = t.scheduler,
    c = t.subject;
  if (!c) {
    c = t.subject = new R;
    var d = function() {
      for (var h = [], l = 0; l < arguments.length; l++) h[l] = arguments[l];
      var p = h.shift();
      if (p) r.add(s.schedule(at, 0, {
        err: p,
        subject: c
      }));
      else {
        var q = h.length <= 1 ? h[0] : h;
        r.add(s.schedule(je, 0, {
          value: q,
          subject: c
        }))
      }
    };
    try {
      o.apply(i, u.concat([d]))
    } catch (h) {
      this.add(s.schedule(at, 0, {
        err: h,
        subject: c
      }))
    }
  }
  this.add(c.subscribe(n))
}

function je(e) {
  var r = e.value,
    t = e.subject;
  t.next(r), t.complete()
}

function at(e) {
  var r = e.err,
    t = e.subject;
  t.error(r)
}
var At = function(e) {
    a(r, e);

    function r() {
      return e !== null && e.apply(this, arguments) || this
    }
    return r.prototype.notifyNext = function(t, n, i, o, u) {
      this.destination.next(n)
    }, r.prototype.notifyError = function(t, n) {
      this.destination.error(t)
    }, r.prototype.notifyComplete = function(t) {
      this.destination.complete()
    }, r
  }(v),
  Oe = function(e) {
    a(r, e);

    function r(t, n, i) {
      var o = e.call(this) || this;
      return o.parent = t, o.outerValue = n, o.outerIndex = i, o.index = 0, o
    }
    return r.prototype._next = function(t) {
      this.parent.notifyNext(this.outerValue, t, this.outerIndex, this.index++, this)
    }, r.prototype._error = function(t) {
      this.parent.notifyError(t, this), this.unsubscribe()
    }, r.prototype._complete = function() {
      this.parent.notifyComplete(this), this.unsubscribe()
    }, r
  }(v),
  Pe = function(e) {
    return function(r) {
      return e.then(function(t) {
        r.closed || (r.next(t), r.complete())
      }, function(t) {
        return r.error(t)
      }).then(null, S), r
    }
  };

function Ne() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator
}
var x = Ne(),
  Ve = function(e) {
    return function(r) {
      var t = e[x]();
      do {
        var n = void 0;
        try {
          n = t.next()
        } catch (i) {
          return r.error(i), r
        }
        if (n.done) {
          r.complete();
          break
        }
        if (r.next(n.value), r.closed) break
      } while (!0);
      return typeof t.return == "function" && r.add(function() {
        t.return && t.return()
      }), r
    }
  },
  Fe = function(e) {
    return function(r) {
      var t = e[A]();
      if (typeof t.subscribe != "function") throw new TypeError("Provided object does not correctly implement Symbol.observable");
      return t.subscribe(r)
    }
  },
  Ct = function(e) {
    return e && typeof e.length == "number" && typeof e != "function"
  };

function jt(e) {
  return !!e && typeof e.subscribe != "function" && typeof e.then == "function"
}
var N = function(e) {
  if (e && typeof e[A] == "function") return Fe(e);
  if (Ct(e)) return mt(e);
  if (jt(e)) return Pe(e);
  if (e && typeof e[x] == "function") return Ve(e);
  var r = z(e) ? "an invalid object" : "'" + e + "'",
    t = "You provided " + r + " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.";
  throw new TypeError(t)
};

function Ot(e, r, t, n, i) {
  if (i === void 0 && (i = new Oe(e, t, n)), !i.closed) return r instanceof f ? r.subscribe(i) : N(r)(i)
}
var ft = {};

function ke() {
  for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
  var t = void 0,
    n = void 0;
  return E(e[e.length - 1]) && (n = e.pop()), typeof e[e.length - 1] == "function" && (t = e.pop()), e.length === 1 && m(e[0]) && (e = e[0]), k(e, n).lift(new Re(t))
}
var Re = function() {
    function e(r) {
      this.resultSelector = r
    }
    return e.prototype.call = function(r, t) {
      return t.subscribe(new Me(r, this.resultSelector))
    }, e
  }(),
  Me = function(e) {
    a(r, e);

    function r(t, n) {
      var i = e.call(this, t) || this;
      return i.resultSelector = n, i.active = 0, i.values = [], i.observables = [], i
    }
    return r.prototype._next = function(t) {
      this.values.push(ft), this.observables.push(t)
    }, r.prototype._complete = function() {
      var t = this.observables,
        n = t.length;
      if (n === 0) this.destination.complete();
      else {
        this.active = n, this.toRespond = n;
        for (var i = 0; i < n; i++) {
          var o = t[i];
          this.add(Ot(this, o, void 0, i))
        }
      }
    }, r.prototype.notifyComplete = function(t) {
      (this.active -= 1) === 0 && this.destination.complete()
    }, r.prototype.notifyNext = function(t, n, i) {
      var o = this.values,
        u = o[i],
        s = this.toRespond ? u === ft ? --this.toRespond : this.toRespond : 0;
      o[i] = n, s === 0 && (this.resultSelector ? this._tryResultSelector(o) : this.destination.next(o.slice()))
    }, r.prototype._tryResultSelector = function(t) {
      var n;
      try {
        n = this.resultSelector.apply(this, t)
      } catch (i) {
        this.destination.error(i);
        return
      }
      this.destination.next(n)
    }, r
  }(At);

function De(e, r) {
  return new f(function(t) {
    var n = new b;
    return n.add(r.schedule(function() {
      var i = e[A]();
      n.add(i.subscribe({
        next: function(o) {
          n.add(r.schedule(function() {
            return t.next(o)
          }))
        },
        error: function(o) {
          n.add(r.schedule(function() {
            return t.error(o)
          }))
        },
        complete: function() {
          n.add(r.schedule(function() {
            return t.complete()
          }))
        }
      }))
    })), n
  })
}

function Ye(e, r) {
  return new f(function(t) {
    var n = new b;
    return n.add(r.schedule(function() {
      return e.then(function(i) {
        n.add(r.schedule(function() {
          t.next(i), n.add(r.schedule(function() {
            return t.complete()
          }))
        }))
      }, function(i) {
        n.add(r.schedule(function() {
          return t.error(i)
        }))
      })
    })), n
  })
}

function Ue(e, r) {
  if (!e) throw new Error("Iterable cannot be null");
  return new f(function(t) {
    var n = new b,
      i;
    return n.add(function() {
      i && typeof i.return == "function" && i.return()
    }), n.add(r.schedule(function() {
      i = e[x](), n.add(r.schedule(function() {
        if (!t.closed) {
          var o, u;
          try {
            var s = i.next();
            o = s.value, u = s.done
          } catch (c) {
            t.error(c);
            return
          }
          u ? t.complete() : (t.next(o), this.schedule())
        }
      }))
    })), n
  })
}

function Le(e) {
  return e && typeof e[A] == "function"
}

function qe(e) {
  return e && typeof e[x] == "function"
}

function Pt(e, r) {
  if (e != null) {
    if (Le(e)) return De(e, r);
    if (jt(e)) return Ye(e, r);
    if (Ct(e)) return K(e, r);
    if (qe(e) || typeof e == "string") return Ue(e, r)
  }
  throw new TypeError((e !== null && typeof e || e) + " is not observable")
}

function O(e, r) {
  return r ? Pt(e, r) : e instanceof f ? e : new f(N(e))
}
var Nt = function(e) {
    a(r, e);

    function r(t) {
      var n = e.call(this) || this;
      return n.parent = t, n
    }
    return r.prototype._next = function(t) {
      this.parent.notifyNext(t)
    }, r.prototype._error = function(t) {
      this.parent.notifyError(t), this.unsubscribe()
    }, r.prototype._complete = function() {
      this.parent.notifyComplete(), this.unsubscribe()
    }, r
  }(v),
  Vt = function(e) {
    a(r, e);

    function r() {
      return e !== null && e.apply(this, arguments) || this
    }
    return r.prototype.notifyNext = function(t) {
      this.destination.next(t)
    }, r.prototype.notifyError = function(t) {
      this.destination.error(t)
    }, r.prototype.notifyComplete = function() {
      this.destination.complete()
    }, r
  }(v);

function Ft(e, r) {
  if (!r.closed) {
    if (e instanceof f) return e.subscribe(r);
    var t;
    try {
      t = N(e)(r)
    } catch (n) {
      r.error(n)
    }
    return t
  }
}

function kt(e, r, t) {
  return t === void 0 && (t = Number.POSITIVE_INFINITY), typeof r == "function" ? function(n) {
    return n.pipe(kt(function(i, o) {
      return O(e(i, o)).pipe(j(function(u, s) {
        return r(i, u, o, s)
      }))
    }, t))
  } : (typeof r == "number" && (t = r), function(n) {
    return n.lift(new $e(e, t))
  })
}
var $e = function() {
    function e(r, t) {
      t === void 0 && (t = Number.POSITIVE_INFINITY), this.project = r, this.concurrent = t
    }
    return e.prototype.call = function(r, t) {
      return t.subscribe(new He(r, this.project, this.concurrent))
    }, e
  }(),
  He = function(e) {
    a(r, e);

    function r(t, n, i) {
      i === void 0 && (i = Number.POSITIVE_INFINITY);
      var o = e.call(this, t) || this;
      return o.project = n, o.concurrent = i, o.hasCompleted = !1, o.buffer = [], o.active = 0, o.index = 0, o
    }
    return r.prototype._next = function(t) {
      this.active < this.concurrent ? this._tryNext(t) : this.buffer.push(t)
    }, r.prototype._tryNext = function(t) {
      var n, i = this.index++;
      try {
        n = this.project(t, i)
      } catch (o) {
        this.destination.error(o);
        return
      }
      this.active++, this._innerSub(n)
    }, r.prototype._innerSub = function(t) {
      var n = new Nt(this),
        i = this.destination;
      i.add(n);
      var o = Ft(t, n);
      o !== n && i.add(o)
    }, r.prototype._complete = function() {
      this.hasCompleted = !0, this.active === 0 && this.buffer.length === 0 && this.destination.complete(), this.unsubscribe()
    }, r.prototype.notifyNext = function(t) {
      this.destination.next(t)
    }, r.prototype.notifyComplete = function() {
      var t = this.buffer;
      this.active--, t.length > 0 ? this._next(t.shift()) : this.active === 0 && this.hasCompleted && this.destination.complete()
    }, r
  }(Vt);

function Rt(e) {
  return e === void 0 && (e = Number.POSITIVE_INFINITY), kt(I, e)
}

function Be() {
  return Rt(1)
}

function We() {
  for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
  return Be()(tt.apply(void 0, e))
}

function Mt(e) {
  return new f(function(r) {
    var t;
    try {
      t = e()
    } catch (i) {
      r.error(i);
      return
    }
    var n = t ? O(t) : X();
    return n.subscribe(r)
  })
}

function Ze() {
  for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
  if (e.length === 1) {
    var t = e[0];
    if (m(t)) return M(t, null);
    if (z(t) && Object.getPrototypeOf(t) === Object.prototype) {
      var n = Object.keys(t);
      return M(n.map(function(o) {
        return t[o]
      }), n)
    }
  }
  if (typeof e[e.length - 1] == "function") {
    var i = e.pop();
    return e = e.length === 1 && m(e[0]) ? e[0] : e, M(e, null).pipe(j(function(o) {
      return i.apply(void 0, o)
    }))
  }
  return M(e, null)
}

function M(e, r) {
  return new f(function(t) {
    var n = e.length;
    if (n === 0) {
      t.complete();
      return
    }
    for (var i = new Array(n), o = 0, u = 0, s = function(d) {
        var h = O(e[d]),
          l = !1;
        t.add(h.subscribe({
          next: function(p) {
            l || (l = !0, u++), i[d] = p
          },
          error: function(p) {
            return t.error(p)
          },
          complete: function() {
            o++, (o === n || !l) && (u === n && t.next(r ? r.reduce(function(p, q, qt) {
              return p[q] = i[qt], p
            }, {}) : i), t.complete())
          }
        }))
      }, c = 0; c < n; c++) s(c)
  })
}

function Dt(e, r, t, n) {
  return _(t) && (n = t, t = void 0), n ? Dt(e, r, t).pipe(j(function(i) {
    return m(i) ? n.apply(void 0, i) : n(i)
  })) : new f(function(i) {
    function o(u) {
      arguments.length > 1 ? i.next(Array.prototype.slice.call(arguments)) : i.next(u)
    }
    Yt(e, r, o, i, t)
  })
}

function Yt(e, r, t, n, i) {
  var o;
  if (ze(e)) {
    var u = e;
    e.addEventListener(r, t, i), o = function() {
      return u.removeEventListener(r, t, i)
    }
  } else if (Qe(e)) {
    var s = e;
    e.on(r, t), o = function() {
      return s.off(r, t)
    }
  } else if (Ge(e)) {
    var c = e;
    e.addListener(r, t), o = function() {
      return c.removeListener(r, t)
    }
  } else if (e && e.length)
    for (var d = 0, h = e.length; d < h; d++) Yt(e[d], r, t, n, i);
  else throw new TypeError("Invalid event target");
  n.add(o)
}

function Ge(e) {
  return e && typeof e.addListener == "function" && typeof e.removeListener == "function"
}

function Qe(e) {
  return e && typeof e.on == "function" && typeof e.off == "function"
}

function ze(e) {
  return e && typeof e.addEventListener == "function" && typeof e.removeEventListener == "function"
}

function Ut(e, r, t) {
  return t ? Ut(e, r).pipe(j(function(n) {
    return m(n) ? t.apply(void 0, n) : t(n)
  })) : new f(function(n) {
    var i = function() {
        for (var u = [], s = 0; s < arguments.length; s++) u[s] = arguments[s];
        return n.next(u.length === 1 ? u[0] : u)
      },
      o;
    try {
      o = e(i)
    } catch (u) {
      n.error(u);
      return
    }
    if (_(r)) return function() {
      return r(i, o)
    }
  })
}

function Je(e, r, t, n, i) {
  var o, u;
  if (arguments.length == 1) {
    var s = e;
    u = s.initialState, r = s.condition, t = s.iterate, o = s.resultSelector || I, i = s.scheduler
  } else n === void 0 || E(n) ? (u = e, o = I, i = n) : (u = e, o = n);
  return new f(function(c) {
    var d = u;
    if (i) return i.schedule(Xe, 0, {
      subscriber: c,
      iterate: t,
      condition: r,
      resultSelector: o,
      state: d
    });
    do {
      if (r) {
        var h = void 0;
        try {
          h = r(d)
        } catch (p) {
          c.error(p);
          return
        }
        if (!h) {
          c.complete();
          break
        }
      }
      var l = void 0;
      try {
        l = o(d)
      } catch (p) {
        c.error(p);
        return
      }
      if (c.next(l), c.closed) break;
      try {
        d = t(d)
      } catch (p) {
        c.error(p);
        return
      }
    } while (!0)
  })
}

function Xe(e) {
  var r = e.subscriber,
    t = e.condition;
  if (!r.closed) {
    if (e.needIterate) try {
      e.state = e.iterate(e.state)
    } catch (o) {
      r.error(o);
      return
    } else e.needIterate = !0;
    if (t) {
      var n = void 0;
      try {
        n = t(e.state)
      } catch (o) {
        r.error(o);
        return
      }
      if (!n) {
        r.complete();
        return
      }
      if (r.closed) return
    }
    var i;
    try {
      i = e.resultSelector(e.state)
    } catch (o) {
      r.error(o);
      return
    }
    if (!r.closed && (r.next(i), !r.closed)) return this.schedule(e)
  }
}

function Ke(e, r, t) {
  return r === void 0 && (r = T), t === void 0 && (t = T), Mt(function() {
    return e() ? r : t
  })
}

function Z(e) {
  return !m(e) && e - parseFloat(e) + 1 >= 0
}

function tr(e, r) {
  return e === void 0 && (e = 0), r === void 0 && (r = L), (!Z(e) || e < 0) && (e = 0), (!r || typeof r.schedule != "function") && (r = L), new f(function(t) {
    return t.add(r.schedule(er, e, {
      subscriber: t,
      counter: 0,
      period: e
    })), t
  })
}

function er(e) {
  var r = e.subscriber,
    t = e.counter,
    n = e.period;
  r.next(t), this.schedule({
    subscriber: r,
    counter: t + 1,
    period: n
  }, n)
}

function rr() {
  for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
  var t = Number.POSITIVE_INFINITY,
    n = null,
    i = e[e.length - 1];
  return E(i) ? (n = e.pop(), e.length > 1 && typeof e[e.length - 1] == "number" && (t = e.pop())) : typeof i == "number" && (t = e.pop()), n === null && e.length === 1 && e[0] instanceof f ? e[0] : Rt(t)(k(e, n))
}
var Lt = new f(g);

function nr() {
  return Lt
}

function G() {
  for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
  if (e.length === 0) return T;
  var t = e[0],
    n = e.slice(1);
  return e.length === 1 && m(t) ? G.apply(void 0, t) : new f(function(i) {
    var o = function() {
      return i.add(G.apply(void 0, n).subscribe(i))
    };
    return O(t).subscribe({
      next: function(u) {
        i.next(u)
      },
      error: o,
      complete: o
    })
  })
}

function ir(e, r) {
  return r ? new f(function(t) {
    var n = Object.keys(e),
      i = new b;
    return i.add(r.schedule(or, 0, {
      keys: n,
      index: 0,
      subscriber: t,
      subscription: i,
      obj: e
    })), i
  }) : new f(function(t) {
    for (var n = Object.keys(e), i = 0; i < n.length && !t.closed; i++) {
      var o = n[i];
      e.hasOwnProperty(o) && t.next([o, e[o]])
    }
    t.complete()
  })
}

function or(e) {
  var r = e.keys,
    t = e.index,
    n = e.subscriber,
    i = e.subscription,
    o = e.obj;
  if (!n.closed)
    if (t < r.length) {
      var u = r[t];
      n.next([u, o[u]]), i.add(this.schedule({
        keys: r,
        index: t + 1,
        subscriber: n,
        subscription: i,
        obj: o
      }))
    } else n.complete()
}

function ur(e, r) {
  function t() {
    return !t.pred.apply(t.thisArg, arguments)
  }
  return t.pred = e, t.thisArg = r, t
}

function Q(e, r) {
  return function(n) {
    return n.lift(new sr(e, r))
  }
}
var sr = function() {
    function e(r, t) {
      this.predicate = r, this.thisArg = t
    }
    return e.prototype.call = function(r, t) {
      return t.subscribe(new cr(r, this.predicate, this.thisArg))
    }, e
  }(),
  cr = function(e) {
    a(r, e);

    function r(t, n, i) {
      var o = e.call(this, t) || this;
      return o.predicate = n, o.thisArg = i, o.count = 0, o
    }
    return r.prototype._next = function(t) {
      var n;
      try {
        n = this.predicate.call(this.thisArg, t, this.count++)
      } catch (i) {
        this.destination.error(i);
        return
      }
      n && this.destination.next(t)
    }, r
  }(v);

function ar(e, r, t) {
  return [Q(r, t)(new f(N(e))), Q(ur(r, t))(new f(N(e)))]
}

function fr() {
  for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
  if (e.length === 1)
    if (m(e[0])) e = e[0];
    else return e[0];
  return k(e, void 0).lift(new hr)
}
var hr = function() {
    function e() {}
    return e.prototype.call = function(r, t) {
      return t.subscribe(new lr(r))
    }, e
  }(),
  lr = function(e) {
    a(r, e);

    function r(t) {
      var n = e.call(this, t) || this;
      return n.hasFirst = !1, n.observables = [], n.subscriptions = [], n
    }
    return r.prototype._next = function(t) {
      this.observables.push(t)
    }, r.prototype._complete = function() {
      var t = this.observables,
        n = t.length;
      if (n === 0) this.destination.complete();
      else {
        for (var i = 0; i < n && !this.hasFirst; i++) {
          var o = t[i],
            u = Ot(this, o, void 0, i);
          this.subscriptions && this.subscriptions.push(u), this.add(u)
        }
        this.observables = null
      }
    }, r.prototype.notifyNext = function(t, n, i) {
      if (!this.hasFirst) {
        this.hasFirst = !0;
        for (var o = 0; o < this.subscriptions.length; o++)
          if (o !== i) {
            var u = this.subscriptions[o];
            u.unsubscribe(), this.remove(u)
          } this.subscriptions = null
      }
      this.destination.next(n)
    }, r
  }(At);

function pr(e, r, t) {
  return e === void 0 && (e = 0), new f(function(n) {
    r === void 0 && (r = e, e = 0);
    var i = 0,
      o = e;
    if (t) return t.schedule(dr, 0, {
      index: i,
      count: r,
      start: e,
      subscriber: n
    });
    do {
      if (i++ >= r) {
        n.complete();
        break
      }
      if (n.next(o++), n.closed) break
    } while (!0)
  })
}

function dr(e) {
  var r = e.start,
    t = e.index,
    n = e.count,
    i = e.subscriber;
  if (t >= n) {
    i.complete();
    return
  }
  i.next(r), !i.closed && (e.index = t + 1, e.start = r + 1, this.schedule(e))
}

function vr(e, r, t) {
  e === void 0 && (e = 0);
  var n = -1;
  return Z(r) ? n = Number(r) < 1 && 1 || Number(r) : E(r) && (t = r), E(t) || (t = L), new f(function(i) {
    var o = Z(e) ? e : +e - t.now();
    return t.schedule(br, o, {
      index: 0,
      period: n,
      subscriber: i
    })
  })
}

function br(e) {
  var r = e.index,
    t = e.period,
    n = e.subscriber;
  if (n.next(r), !n.closed) {
    if (t === -1) return n.complete();
    e.index = r + 1, this.schedule(e, t)
  }
}

function yr(e, r) {
  return new f(function(t) {
    var n;
    try {
      n = e()
    } catch (s) {
      t.error(s);
      return
    }
    var i;
    try {
      i = r(n)
    } catch (s) {
      t.error(s);
      return
    }
    var o = i ? O(i) : T,
      u = o.subscribe(t);
    return function() {
      u.unsubscribe(), n && n.unsubscribe()
    }
  })
}

function mr() {
  for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
  var t = e[e.length - 1];
  return typeof t == "function" && e.pop(), k(e, void 0).lift(new gr(t))
}
var gr = function() {
    function e(r) {
      this.resultSelector = r
    }
    return e.prototype.call = function(r, t) {
      return t.subscribe(new wr(r, this.resultSelector))
    }, e
  }(),
  wr = function(e) {
    a(r, e);

    function r(t, n, i) {
      var o = e.call(this, t) || this;
      return o.resultSelector = n, o.iterators = [], o.active = 0, o.resultSelector = typeof n == "function" ? n : void 0, o
    }
    return r.prototype._next = function(t) {
      var n = this.iterators;
      m(t) ? n.push(new xr(t)) : typeof t[x] == "function" ? n.push(new Er(t[x]())) : n.push(new Sr(this.destination, this, t))
    }, r.prototype._complete = function() {
      var t = this.iterators,
        n = t.length;
      if (this.unsubscribe(), n === 0) {
        this.destination.complete();
        return
      }
      this.active = n;
      for (var i = 0; i < n; i++) {
        var o = t[i];
        if (o.stillUnsubscribed) {
          var u = this.destination;
          u.add(o.subscribe())
        } else this.active--
      }
    }, r.prototype.notifyInactive = function() {
      this.active--, this.active === 0 && this.destination.complete()
    }, r.prototype.checkIterators = function() {
      for (var t = this.iterators, n = t.length, i = this.destination, o = 0; o < n; o++) {
        var u = t[o];
        if (typeof u.hasValue == "function" && !u.hasValue()) return
      }
      for (var s = !1, c = [], o = 0; o < n; o++) {
        var u = t[o],
          d = u.next();
        if (u.hasCompleted() && (s = !0), d.done) {
          i.complete();
          return
        }
        c.push(d.value)
      }
      this.resultSelector ? this._tryresultSelector(c) : i.next(c), s && i.complete()
    }, r.prototype._tryresultSelector = function(t) {
      var n;
      try {
        n = this.resultSelector.apply(this, t)
      } catch (i) {
        this.destination.error(i);
        return
      }
      this.destination.next(n)
    }, r
  }(v),
  Er = function() {
    function e(r) {
      this.iterator = r, this.nextResult = r.next()
    }
    return e.prototype.hasValue = function() {
      return !0
    }, e.prototype.next = function() {
      var r = this.nextResult;
      return this.nextResult = this.iterator.next(), r
    }, e.prototype.hasCompleted = function() {
      var r = this.nextResult;
      return !!(r && r.done)
    }, e
  }(),
  xr = function() {
    function e(r) {
      this.array = r, this.index = 0, this.length = 0, this.length = r.length
    }
    return e.prototype[x] = function() {
      return this
    }, e.prototype.next = function(r) {
      var t = this.index++,
        n = this.array;
      return t < this.length ? {
        value: n[t],
        done: !1
      } : {
        value: null,
        done: !0
      }
    }, e.prototype.hasValue = function() {
      return this.array.length > this.index
    }, e.prototype.hasCompleted = function() {
      return this.array.length === this.index
    }, e
  }(),
  Sr = function(e) {
    a(r, e);

    function r(t, n, i) {
      var o = e.call(this, t) || this;
      return o.parent = n, o.observable = i, o.stillUnsubscribed = !0, o.buffer = [], o.isComplete = !1, o
    }
    return r.prototype[x] = function() {
      return this
    }, r.prototype.next = function() {
      var t = this.buffer;
      return t.length === 0 && this.isComplete ? {
        value: null,
        done: !0
      } : {
        value: t.shift(),
        done: !1
      }
    }, r.prototype.hasValue = function() {
      return this.buffer.length > 0
    }, r.prototype.hasCompleted = function() {
      return this.buffer.length === 0 && this.isComplete
    }, r.prototype.notifyComplete = function() {
      this.buffer.length > 0 ? (this.isComplete = !0, this.parent.notifyInactive()) : this.destination.complete()
    }, r.prototype.notifyNext = function(t) {
      this.buffer.push(t), this.parent.checkIterators()
    }, r.prototype.subscribe = function() {
      return Ft(this.observable, new Nt(this))
    }, r
  }(Vt);
const _r = Object.freeze(Object.defineProperty({
    __proto__: null,
    ArgumentOutOfRangeError: _t,
    AsyncSubject: R,
    BehaviorSubject: te,
    ConnectableObservable: vt,
    EMPTY: T,
    EmptyError: et,
    GroupedObservable: Xt,
    NEVER: Lt,
    Notification: D,
    get NotificationKind() {
      return B
    },
    ObjectUnsubscribedError: w,
    Observable: f,
    ReplaySubject: ce,
    Scheduler: H,
    Subject: C,
    Subscriber: v,
    Subscription: b,
    TimeoutError: Se,
    UnsubscriptionError: P,
    VirtualAction: St,
    VirtualTimeScheduler: me,
    animationFrame: ye,
    animationFrameScheduler: xt,
    asap: de,
    asapScheduler: wt,
    async: L,
    asyncScheduler: Et,
    bindCallback: It,
    bindNodeCallback: Tt,
    combineLatest: ke,
    concat: We,
    config: y,
    defer: Mt,
    empty: X,
    forkJoin: Ze,
    from: O,
    fromEvent: Dt,
    fromEventPattern: Ut,
    generate: Je,
    identity: I,
    iif: Ke,
    interval: tr,
    isObservable: ge,
    merge: rr,
    never: nr,
    noop: g,
    observable: A,
    of: tt,
    onErrorResumeNext: G,
    pairs: ir,
    partition: ar,
    pipe: Wt,
    queue: yt,
    queueScheduler: bt,
    race: fr,
    range: pr,
    scheduled: Pt,
    throwError: gt,
    timer: vr,
    using: yr,
    zip: mr
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  qr = $t(_r);

function Ir(e) {
  return e === void 0 && (e = null),
    function(r) {
      return r.lift(new Tr(e))
    }
}
var Tr = function() {
    function e(r) {
      this.defaultValue = r
    }
    return e.prototype.call = function(r, t) {
      return t.subscribe(new Ar(r, this.defaultValue))
    }, e
  }(),
  Ar = function(e) {
    a(r, e);

    function r(t, n) {
      var i = e.call(this, t) || this;
      return i.defaultValue = n, i.isEmpty = !0, i
    }
    return r.prototype._next = function(t) {
      this.isEmpty = !1, this.destination.next(t)
    }, r.prototype._complete = function() {
      this.isEmpty && this.destination.next(this.defaultValue), this.destination.complete()
    }, r
  }(v);

function Cr(e) {
  return e === void 0 && (e = Pr),
    function(r) {
      return r.lift(new jr(e))
    }
}
var jr = function() {
    function e(r) {
      this.errorFactory = r
    }
    return e.prototype.call = function(r, t) {
      return t.subscribe(new Or(r, this.errorFactory))
    }, e
  }(),
  Or = function(e) {
    a(r, e);

    function r(t, n) {
      var i = e.call(this, t) || this;
      return i.errorFactory = n, i.hasValue = !1, i
    }
    return r.prototype._next = function(t) {
      this.hasValue = !0, this.destination.next(t)
    }, r.prototype._complete = function() {
      if (this.hasValue) return this.destination.complete();
      var t = void 0;
      try {
        t = this.errorFactory()
      } catch (n) {
        t = n
      }
      this.destination.error(t)
    }, r
  }(v);

function Pr() {
  return new et
}

function Nr(e) {
  return function(r) {
    return r.lift(new Vr(e))
  }
}
var Vr = function() {
    function e(r) {
      if (this.total = r, this.total < 0) throw new _t
    }
    return e.prototype.call = function(r, t) {
      return t.subscribe(new Fr(r, this.total))
    }, e
  }(),
  Fr = function(e) {
    a(r, e);

    function r(t, n) {
      var i = e.call(this, t) || this;
      return i.total = n, i.count = 0, i
    }
    return r.prototype._next = function(t) {
      var n = this.total,
        i = ++this.count;
      i <= n && (this.destination.next(t), i === n && (this.destination.complete(), this.unsubscribe()))
    }, r
  }(v);

function $r(e, r) {
  var t = arguments.length >= 2;
  return function(n) {
    return n.pipe(e ? Q(function(i, o) {
      return e(i, o, n)
    }) : I, Nr(1), t ? Ir(r) : Cr(function() {
      return new et
    }))
  }
}

function Hr() {
  return function(r) {
    return r.lift(new kr)
  }
}
var kr = function() {
    function e() {}
    return e.prototype.call = function(r, t) {
      return t.subscribe(new Rr(r))
    }, e
  }(),
  Rr = function(e) {
    a(r, e);

    function r() {
      return e !== null && e.apply(this, arguments) || this
    }
    return r.prototype._next = function(t) {}, r
  }(v);

function Mr(e, r) {
  return function(n) {
    var i;
    typeof e == "function" ? i = e : i = function() {
      return e
    };
    var o = Object.create(n, zt);
    return o.source = n, o.subjectFactory = i, o
  }
}

function Dr() {
  return new C
}

function Br() {
  return function(e) {
    return dt()(Mr(Dr)(e))
  }
}

function Wr(e, r, t) {
  return function(i) {
    return i.lift(new Yr(e, r, t))
  }
}
var Yr = function() {
    function e(r, t, n) {
      this.nextOrObserver = r, this.error = t, this.complete = n
    }
    return e.prototype.call = function(r, t) {
      return t.subscribe(new Ur(r, this.nextOrObserver, this.error, this.complete))
    }, e
  }(),
  Ur = function(e) {
    a(r, e);

    function r(t, n, i, o) {
      var u = e.call(this, t) || this;
      return u._tapNext = g, u._tapError = g, u._tapComplete = g, u._tapError = i || g, u._tapComplete = o || g, _(n) ? (u._context = u, u._tapNext = n) : n && (u._context = n, u._tapNext = n.next || g, u._tapError = n.error || g, u._tapComplete = n.complete || g), u
    }
    return r.prototype._next = function(t) {
      try {
        this._tapNext.call(this._context, t)
      } catch (n) {
        this.destination.error(n);
        return
      }
      this.destination.next(t)
    }, r.prototype._error = function(t) {
      try {
        this._tapError.call(this._context, t)
      } catch (n) {
        this.destination.error(n);
        return
      }
      this.destination.error(t)
    }, r.prototype._complete = function() {
      try {
        this._tapComplete.call(this._context)
      } catch (t) {
        this.destination.error(t);
        return
      }
      return this.destination.complete()
    }, r
  }(v);
export {
  f as O, j as a, O as b, Mt as d, $r as f, Hr as i, rr as m, qr as r, Br as s, Wr as t
};