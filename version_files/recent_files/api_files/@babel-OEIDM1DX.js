function n(t, e) {
  return n = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, r) {
    return o.__proto__ = r, o
  }, n(t, e)
}

function i(t, e) {
  t.prototype = Object.create(e.prototype), t.prototype.constructor = t, n(t, e)
}

function s() {
  return s = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var o = arguments[e];
      for (var r in o)({}).hasOwnProperty.call(o, r) && (t[r] = o[r])
    }
    return t
  }, s.apply(null, arguments)
}

function u(t, e) {
  if (t == null) return {};
  var o = {};
  for (var r in t)
    if ({}.hasOwnProperty.call(t, r)) {
      if (e.includes(r)) continue;
      o[r] = t[r]
    } return o
}
export {
  s as _, i as a, u as b
};