var s, a;

function v() {
  return a || (a = 1, s = function(t) {
    t.prototype[Symbol.iterator] = function*() {
      for (let i = this.head; i; i = i.next) yield i.value
    }
  }), s
}
var c = r;
r.Node = u;
r.create = r;

function r(t) {
  var i = this;
  if (i instanceof r || (i = new r), i.tail = null, i.head = null, i.length = 0, t && typeof t.forEach == "function") t.forEach(function(n) {
    i.push(n)
  });
  else if (arguments.length > 0)
    for (var e = 0, h = arguments.length; e < h; e++) i.push(arguments[e]);
  return i
}
r.prototype.removeNode = function(t) {
  if (t.list !== this) throw new Error("removing node which does not belong to this list");
  var i = t.next,
    e = t.prev;
  return i && (i.prev = e), e && (e.next = i), t === this.head && (this.head = i), t === this.tail && (this.tail = e), t.list.length--, t.next = null, t.prev = null, t.list = null, i
};
r.prototype.unshiftNode = function(t) {
  if (t !== this.head) {
    t.list && t.list.removeNode(t);
    var i = this.head;
    t.list = this, t.next = i, i && (i.prev = t), this.head = t, this.tail || (this.tail = t), this.length++
  }
};
r.prototype.pushNode = function(t) {
  if (t !== this.tail) {
    t.list && t.list.removeNode(t);
    var i = this.tail;
    t.list = this, t.prev = i, i && (i.next = t), this.tail = t, this.head || (this.head = t), this.length++
  }
};
r.prototype.push = function() {
  for (var t = 0, i = arguments.length; t < i; t++) o(this, arguments[t]);
  return this.length
};
r.prototype.unshift = function() {
  for (var t = 0, i = arguments.length; t < i; t++) p(this, arguments[t]);
  return this.length
};
r.prototype.pop = function() {
  if (this.tail) {
    var t = this.tail.value;
    return this.tail = this.tail.prev, this.tail ? this.tail.next = null : this.head = null, this.length--, t
  }
};
r.prototype.shift = function() {
  if (this.head) {
    var t = this.head.value;
    return this.head = this.head.next, this.head ? this.head.prev = null : this.tail = null, this.length--, t
  }
};
r.prototype.forEach = function(t, i) {
  i = i || this;
  for (var e = this.head, h = 0; e !== null; h++) t.call(i, e.value, h, this), e = e.next
};
r.prototype.forEachReverse = function(t, i) {
  i = i || this;
  for (var e = this.tail, h = this.length - 1; e !== null; h--) t.call(i, e.value, h, this), e = e.prev
};
r.prototype.get = function(t) {
  for (var i = 0, e = this.head; e !== null && i < t; i++) e = e.next;
  if (i === t && e !== null) return e.value
};
r.prototype.getReverse = function(t) {
  for (var i = 0, e = this.tail; e !== null && i < t; i++) e = e.prev;
  if (i === t && e !== null) return e.value
};
r.prototype.map = function(t, i) {
  i = i || this;
  for (var e = new r, h = this.head; h !== null;) e.push(t.call(i, h.value, this)), h = h.next;
  return e
};
r.prototype.mapReverse = function(t, i) {
  i = i || this;
  for (var e = new r, h = this.tail; h !== null;) e.push(t.call(i, h.value, this)), h = h.prev;
  return e
};
r.prototype.reduce = function(t, i) {
  var e, h = this.head;
  if (arguments.length > 1) e = i;
  else if (this.head) h = this.head.next, e = this.head.value;
  else throw new TypeError("Reduce of empty list with no initial value");
  for (var n = 0; h !== null; n++) e = t(e, h.value, n), h = h.next;
  return e
};
r.prototype.reduceReverse = function(t, i) {
  var e, h = this.tail;
  if (arguments.length > 1) e = i;
  else if (this.tail) h = this.tail.prev, e = this.tail.value;
  else throw new TypeError("Reduce of empty list with no initial value");
  for (var n = this.length - 1; h !== null; n--) e = t(e, h.value, n), h = h.prev;
  return e
};
r.prototype.toArray = function() {
  for (var t = new Array(this.length), i = 0, e = this.head; e !== null; i++) t[i] = e.value, e = e.next;
  return t
};
r.prototype.toArrayReverse = function() {
  for (var t = new Array(this.length), i = 0, e = this.tail; e !== null; i++) t[i] = e.value, e = e.prev;
  return t
};
r.prototype.slice = function(t, i) {
  i = i || this.length, i < 0 && (i += this.length), t = t || 0, t < 0 && (t += this.length);
  var e = new r;
  if (i < t || i < 0) return e;
  t < 0 && (t = 0), i > this.length && (i = this.length);
  for (var h = 0, n = this.head; n !== null && h < t; h++) n = n.next;
  for (; n !== null && h < i; h++, n = n.next) e.push(n.value);
  return e
};
r.prototype.sliceReverse = function(t, i) {
  i = i || this.length, i < 0 && (i += this.length), t = t || 0, t < 0 && (t += this.length);
  var e = new r;
  if (i < t || i < 0) return e;
  t < 0 && (t = 0), i > this.length && (i = this.length);
  for (var h = this.length, n = this.tail; n !== null && h > i; h--) n = n.prev;
  for (; n !== null && h > t; h--, n = n.prev) e.push(n.value);
  return e
};
r.prototype.splice = function(t, i, ...e) {
  t > this.length && (t = this.length - 1), t < 0 && (t = this.length + t);
  for (var h = 0, n = this.head; n !== null && h < t; h++) n = n.next;
  for (var l = [], h = 0; n && h < i; h++) l.push(n.value), n = this.removeNode(n);
  n === null && (n = this.tail), n !== this.head && n !== this.tail && (n = n.prev);
  for (var h = 0; h < e.length; h++) n = f(this, n, e[h]);
  return l
};
r.prototype.reverse = function() {
  for (var t = this.head, i = this.tail, e = t; e !== null; e = e.prev) {
    var h = e.prev;
    e.prev = e.next, e.next = h
  }
  return this.head = i, this.tail = t, this
};

function f(t, i, e) {
  var h = i === t.head ? new u(e, null, i, t) : new u(e, i, i.next, t);
  return h.next === null && (t.tail = h), h.prev === null && (t.head = h), t.length++, h
}

function o(t, i) {
  t.tail = new u(i, t.tail, null, t), t.head || (t.head = t.tail), t.length++
}

function p(t, i) {
  t.head = new u(i, null, t.head, t), t.tail || (t.tail = t.head), t.length++
}

function u(t, i, e, h) {
  if (!(this instanceof u)) return new u(t, i, e, h);
  this.list = h, this.value = t, i ? (i.next = this, this.prev = i) : this.prev = null, e ? (e.prev = this, this.next = e) : this.next = null
}
try {
  v()(r)
} catch {}
export {
  c as y
};