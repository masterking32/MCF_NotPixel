import {
  c as P
} from "./@ledgerhq-BW4RAlPi.js";
import {
  r as se
} from "./react-DjWS3H3h.js";
var le = {},
  H = {},
  J = {},
  Z = {};
Object.defineProperty(Z, "__esModule", {
  value: !0
});
Z.Direction = void 0;
var ie;
(function(r) {
  r.Right = "to right", r.Left = "to left", r.Down = "to bottom", r.Up = "to top"
})(ie || (Z.Direction = ie = {}));
(function(r) {
  var u = P && P.__spreadArray || function(n, a, s) {
    if (s || arguments.length === 2)
      for (var p = 0, m = a.length, l; p < m; p++)(l || !(p in a)) && (l || (l = Array.prototype.slice.call(a, 0, p)), l[p] = a[p]);
    return n.concat(l || Array.prototype.slice.call(a))
  };
  Object.defineProperty(r, "__esModule", {
    value: !0
  }), r.isIOS = r.useThumbOverlap = r.assertUnreachable = r.voidFn = r.getTrackBackground = r.replaceAt = r.schd = r.translate = r.getClosestThumbIndex = r.translateThumbs = r.getPaddingAndBorder = r.getMargin = r.checkInitialOverlap = r.checkValuesAgainstBoundaries = r.checkBoundaries = r.isVertical = r.relativeValue = r.normalizeValue = r.isStepDivisible = r.isTouchEvent = r.getStepDecimals = void 0;
  var o = se,
    e = Z,
    t = function(n) {
      var a = n.toString().split(".")[1];
      return a ? a.length : 0
    };
  r.getStepDecimals = t;

  function i(n) {
    return n.touches && n.touches.length || n.changedTouches && n.changedTouches.length
  }
  r.isTouchEvent = i;

  function c(n, a, s) {
    var p = (a - n) / s,
      m = 8,
      l = Number(p.toFixed(m));
    return parseInt(l.toString(), 10) === l
  }
  r.isStepDivisible = c;

  function d(n, a, s, p, m, l, O) {
    var M = 1e11;
    if (n = Math.round(n * M) / M, !l) {
      var S = O[a - 1],
        T = O[a + 1];
      if (S && S > n) return S;
      if (T && T < n) return T
    }
    if (n > p) return p;
    if (n < s) return s;
    var z = Math.floor(n * M - s * M) % Math.floor(m * M),
      C = Math.floor(n * M - Math.abs(z)),
      U = z === 0 ? n : C / M,
      _ = Math.abs(z / M) < m / 2 ? U : U + m,
      j = (0, r.getStepDecimals)(m);
    return parseFloat(_.toFixed(j))
  }
  r.normalizeValue = d;

  function h(n, a, s) {
    return (n - a) / (s - a)
  }
  r.relativeValue = h;

  function y(n) {
    return n === e.Direction.Up || n === e.Direction.Down
  }
  r.isVertical = y;

  function f(n, a, s) {
    if (a >= s) throw new RangeError("min (".concat(a, ") is equal/bigger than max (").concat(s, ")"));
    if (n < a) throw new RangeError("value (".concat(n, ") is smaller than min (").concat(a, ")"));
    if (n > s) throw new RangeError("value (".concat(n, ") is bigger than max (").concat(s, ")"))
  }
  r.checkBoundaries = f;

  function v(n, a, s) {
    return n < a ? a : n > s ? s : n
  }
  r.checkValuesAgainstBoundaries = v;

  function k(n) {
    if (!(n.length < 2) && !n.slice(1).every(function(a, s) {
        return n[s] <= a
      })) throw new RangeError("values={[".concat(n, "]} needs to be sorted when allowOverlap={false}"))
  }
  r.checkInitialOverlap = k;

  function D(n) {
    var a = window.getComputedStyle(n);
    return {
      top: parseInt(a["margin-top"], 10),
      bottom: parseInt(a["margin-bottom"], 10),
      left: parseInt(a["margin-left"], 10),
      right: parseInt(a["margin-right"], 10)
    }
  }
  r.getMargin = D;

  function g(n) {
    var a = window.getComputedStyle(n);
    return {
      top: parseInt(a["padding-top"], 10) + parseInt(a["border-top-width"], 10),
      bottom: parseInt(a["padding-bottom"], 10) + parseInt(a["border-bottom-width"], 10),
      left: parseInt(a["padding-left"], 10) + parseInt(a["border-left-width"], 10),
      right: parseInt(a["padding-right"], 10) + parseInt(a["border-right-width"], 10)
    }
  }
  r.getPaddingAndBorder = g;

  function E(n, a, s) {
    var p = s ? -1 : 1;
    n.forEach(function(m, l) {
      return x(m, p * a[l].x, a[l].y)
    })
  }
  r.translateThumbs = E;

  function L(n, a, s, p) {
    for (var m = 0, l = F(n[0], a, s, p), O = 1; O < n.length; O++) {
      var M = F(n[O], a, s, p);
      M < l && (l = M, m = O)
    }
    return m
  }
  r.getClosestThumbIndex = L;

  function x(n, a, s) {
    n.style.transform = "translate(".concat(a, "px, ").concat(s, "px)")
  }
  r.translate = x;
  var V = function(n) {
    var a = [],
      s = null,
      p = function() {
        for (var m = [], l = 0; l < arguments.length; l++) m[l] = arguments[l];
        a = m, !s && (s = requestAnimationFrame(function() {
          s = null, n.apply(void 0, a)
        }))
      };
    return p
  };
  r.schd = V;

  function R(n, a, s) {
    var p = n.slice(0);
    return p[a] = s, p
  }
  r.replaceAt = R;

  function A(n) {
    var a = n.values,
      s = n.colors,
      p = n.min,
      m = n.max,
      l = n.direction,
      O = l === void 0 ? e.Direction.Right : l,
      M = n.rtl,
      S = M === void 0 ? !1 : M;
    S && O === e.Direction.Right ? O = e.Direction.Left : S && e.Direction.Left && (O = e.Direction.Right);
    var T = a.slice(0).sort(function(C, U) {
        return C - U
      }).map(function(C) {
        return (C - p) / (m - p) * 100
      }),
      z = T.reduce(function(C, U, _) {
        return "".concat(C, ", ").concat(s[_], " ").concat(U, "%, ").concat(s[_ + 1], " ").concat(U, "%")
      }, "");
    return "linear-gradient(".concat(O, ", ").concat(s[0], " 0%").concat(z, ", ").concat(s[s.length - 1], " 100%)")
  }
  r.getTrackBackground = A;

  function K() {}
  r.voidFn = K;

  function B(n) {
    throw new Error("Didn't expect to get here")
  }
  r.assertUnreachable = B;
  var I = function(n, a, s, p, m) {
      m === void 0 && (m = function(O) {
        return O
      });
      var l = Math.ceil(u([n], Array.from(n.children), !0).reduce(function(O, M) {
        var S = Math.ceil(M.getBoundingClientRect().width);
        if (M.innerText && M.innerText.includes(s) && M.childElementCount === 0) {
          var T = M.cloneNode(!0);
          T.innerHTML = m(a.toFixed(p)), T.style.visibility = "hidden", document.body.appendChild(T), S = Math.ceil(T.getBoundingClientRect().width), document.body.removeChild(T)
        }
        return S > O ? S : O
      }, n.getBoundingClientRect().width));
      return l
    },
    W = function(n, a, s, p, m, l, O) {
      O === void 0 && (O = function(T) {
        return T
      });
      var M = [],
        S = function(T) {
          var z = I(s[T], p[T], m, l, O),
            C = a[T].x;
          a.forEach(function(U, _) {
            var j = U.x,
              Y = I(s[_], p[_], m, l, O);
            T !== _ && (C >= j && C <= j + Y || C + z >= j && C + z <= j + Y) && (M.includes(_) || (M.push(T), M.push(_), M = u(u([], M, !0), [T, _], !1), S(_)))
          })
        };
      return S(n), Array.from(new Set(M.sort()))
    },
    X = function(n, a, s, p, m, l) {
      p === void 0 && (p = .1), m === void 0 && (m = " - "), l === void 0 && (l = function(_) {
        return _
      });
      var O = (0, r.getStepDecimals)(p),
        M = (0, o.useState)({}),
        S = M[0],
        T = M[1],
        z = (0, o.useState)(l(a[s].toFixed(O))),
        C = z[0],
        U = z[1];
      return (0, o.useEffect)(function() {
        if (n) {
          var _ = n.getThumbs();
          if (_.length < 1) return;
          var j = {},
            Y = n.getOffsets(),
            q = W(s, Y, _, a, m, O, l),
            Q = l(a[s].toFixed(O));
          if (q.length) {
            var G = q.reduce(function(N, re, ne, ae) {
              return N.length ? u(u([], N, !0), [Y[ae[ne]].x], !1) : [Y[ae[ne]].x]
            }, []);
            if (Math.min.apply(Math, G) === Y[s].x) {
              var ee = [];
              q.forEach(function(N) {
                ee.push(a[N].toFixed(O))
              }), Q = Array.from(new Set(ee.sort(function(N, re) {
                return parseFloat(N) - parseFloat(re)
              }))).map(l).join(m);
              var ue = Math.min.apply(Math, G),
                te = Math.max.apply(Math, G),
                de = _[q[G.indexOf(te)]].getBoundingClientRect().width;
              j.left = "".concat(Math.abs(ue - (te + de)) / 2, "px"), j.transform = "translate(-50%, 0)"
            } else j.visibility = "hidden"
          }
          U(Q), T(j)
        }
      }, [n, a]), [C, S]
    };
  r.useThumbOverlap = X;

  function F(n, a, s, p) {
    var m = n.getBoundingClientRect(),
      l = m.left,
      O = m.top,
      M = m.width,
      S = m.height;
    return y(p) ? Math.abs(s - (O + S / 2)) : Math.abs(a - (l + M / 2))
  }
  var ce = function() {
    var n, a = ((n = navigator.userAgentData) === null || n === void 0 ? void 0 : n.platform) || navigator.platform;
    return ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(a) || navigator.userAgent.includes("Mac") && "ontouchend" in document
  };
  r.isIOS = ce
})(J);
var he = P && P.__extends || function() {
    var r = function(u, o) {
      return r = Object.setPrototypeOf || {
        __proto__: []
      }
      instanceof Array && function(e, t) {
        e.__proto__ = t
      } || function(e, t) {
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
      }, r(u, o)
    };
    return function(u, o) {
      if (typeof o != "function" && o !== null) throw new TypeError("Class extends value " + String(o) + " is not a constructor or null");
      r(u, o);

      function e() {
        this.constructor = u
      }
      u.prototype = o === null ? Object.create(o) : (e.prototype = o.prototype, new e)
    }
  }(),
  fe = P && P.__createBinding || (Object.create ? function(r, u, o, e) {
    e === void 0 && (e = o);
    var t = Object.getOwnPropertyDescriptor(u, o);
    (!t || ("get" in t ? !u.__esModule : t.writable || t.configurable)) && (t = {
      enumerable: !0,
      get: function() {
        return u[o]
      }
    }), Object.defineProperty(r, e, t)
  } : function(r, u, o, e) {
    e === void 0 && (e = o), r[e] = u[o]
  }),
  ve = P && P.__setModuleDefault || (Object.create ? function(r, u) {
    Object.defineProperty(r, "default", {
      enumerable: !0,
      value: u
    })
  } : function(r, u) {
    r.default = u
  }),
  ge = P && P.__importStar || function(r) {
    if (r && r.__esModule) return r;
    var u = {};
    if (r != null)
      for (var o in r) o !== "default" && Object.prototype.hasOwnProperty.call(r, o) && fe(u, r, o);
    return ve(u, r), u
  },
  oe = P && P.__spreadArray || function(r, u, o) {
    if (o || arguments.length === 2)
      for (var e = 0, t = u.length, i; e < t; e++)(i || !(e in u)) && (i || (i = Array.prototype.slice.call(u, 0, e)), i[e] = u[e]);
    return r.concat(i || Array.prototype.slice.call(u))
  };
Object.defineProperty(H, "__esModule", {
  value: !0
});
var $ = ge(se),
  b = J,
  w = Z,
  pe = ["ArrowRight", "ArrowUp", "k", "PageUp"],
  me = ["ArrowLeft", "ArrowDown", "j", "PageDown"],
  be = function(r) {
    he(u, r);

    function u(o) {
      var e = r.call(this, o) || this;
      if (e.trackRef = $.createRef(), e.thumbRefs = [], e.state = {
          draggedTrackPos: [-1, -1],
          draggedThumbIndex: -1,
          thumbZIndexes: new Array(e.props.values.length).fill(0).map(function(t, i) {
            return i
          }),
          isChanged: !1,
          markOffsets: []
        }, e.getOffsets = function() {
          var t = e.props,
            i = t.direction,
            c = t.values,
            d = t.min,
            h = t.max,
            y = e.trackRef.current;
          if (!y) return console.warn("No track element found."), [];
          var f = y.getBoundingClientRect(),
            v = (0, b.getPaddingAndBorder)(y);
          return e.getThumbs().map(function(k, D) {
            var g = {
                x: 0,
                y: 0
              },
              E = k.getBoundingClientRect(),
              L = (0, b.getMargin)(k);
            switch (i) {
              case w.Direction.Right:
                return g.x = (L.left + v.left) * -1, g.y = ((E.height - f.height) / 2 + v.top) * -1, g.x += f.width * (0, b.relativeValue)(c[D], d, h) - E.width / 2, g;
              case w.Direction.Left:
                return g.x = (L.right + v.right) * -1, g.y = ((E.height - f.height) / 2 + v.top) * -1, g.x += f.width - f.width * (0, b.relativeValue)(c[D], d, h) - E.width / 2, g;
              case w.Direction.Up:
                return g.x = ((E.width - f.width) / 2 + L.left + v.left) * -1, g.y = -v.left, g.y += f.height - f.height * (0, b.relativeValue)(c[D], d, h) - E.height / 2, g;
              case w.Direction.Down:
                return g.x = ((E.width - f.width) / 2 + L.left + v.left) * -1, g.y = -v.left, g.y += f.height * (0, b.relativeValue)(c[D], d, h) - E.height / 2, g;
              default:
                return (0, b.assertUnreachable)(i)
            }
          })
        }, e.getThumbs = function() {
          return e.trackRef && e.trackRef.current ? Array.from(e.trackRef.current.children).filter(function(t) {
            return t.hasAttribute("aria-valuenow")
          }) : (console.warn("No thumbs found in the track container. Did you forget to pass & spread the `props` param in renderTrack?"), [])
        }, e.getTargetIndex = function(t) {
          return e.getThumbs().findIndex(function(i) {
            return i === t.target || i.contains(t.target)
          })
        }, e.addTouchEvents = function(t) {
          document.addEventListener("touchmove", e.schdOnTouchMove, {
            passive: !1
          }), document.addEventListener("touchend", e.schdOnEnd, {
            passive: !1
          }), document.addEventListener("touchcancel", e.schdOnEnd, {
            passive: !1
          })
        }, e.addMouseEvents = function(t) {
          document.addEventListener("mousemove", e.schdOnMouseMove), document.addEventListener("mouseup", e.schdOnEnd)
        }, e.onMouseDownTrack = function(t) {
          var i;
          if (!(t.button !== 0 || (0, b.isIOS)()))
            if (t.persist(), t.preventDefault(), e.addMouseEvents(t.nativeEvent), e.props.values.length > 1 && e.props.draggableTrack) {
              if (e.thumbRefs.some(function(d) {
                  var h;
                  return (h = d.current) === null || h === void 0 ? void 0 : h.contains(t.target)
                })) return;
              e.setState({
                draggedTrackPos: [t.clientX, t.clientY]
              }, function() {
                return e.onMove(t.clientX, t.clientY)
              })
            } else {
              var c = (0, b.getClosestThumbIndex)(e.thumbRefs.map(function(d) {
                return d.current
              }), t.clientX, t.clientY, e.props.direction);
              (i = e.thumbRefs[c].current) === null || i === void 0 || i.focus(), e.setState({
                draggedThumbIndex: c
              }, function() {
                return e.onMove(t.clientX, t.clientY)
              })
            }
        }, e.onResize = function() {
          (0, b.translateThumbs)(e.getThumbs(), e.getOffsets(), e.props.rtl), e.calculateMarkOffsets()
        }, e.onTouchStartTrack = function(t) {
          var i;
          if (t.persist(), e.addTouchEvents(t.nativeEvent), e.props.values.length > 1 && e.props.draggableTrack) {
            if (e.thumbRefs.some(function(d) {
                var h;
                return (h = d.current) === null || h === void 0 ? void 0 : h.contains(t.target)
              })) return;
            e.setState({
              draggedTrackPos: [t.touches[0].clientX, t.touches[0].clientY]
            }, function() {
              return e.onMove(t.touches[0].clientX, t.touches[0].clientY)
            })
          } else {
            var c = (0, b.getClosestThumbIndex)(e.thumbRefs.map(function(d) {
              return d.current
            }), t.touches[0].clientX, t.touches[0].clientY, e.props.direction);
            (i = e.thumbRefs[c].current) === null || i === void 0 || i.focus(), e.setState({
              draggedThumbIndex: c
            }, function() {
              return e.onMove(t.touches[0].clientX, t.touches[0].clientY)
            })
          }
        }, e.onMouseOrTouchStart = function(t) {
          if (!e.props.disabled) {
            var i = (0, b.isTouchEvent)(t);
            if (!(!i && t.button !== 0)) {
              var c = e.getTargetIndex(t);
              c !== -1 && (i ? e.addTouchEvents(t) : e.addMouseEvents(t), e.setState({
                draggedThumbIndex: c,
                thumbZIndexes: e.state.thumbZIndexes.map(function(d, h) {
                  return h === c ? Math.max.apply(Math, e.state.thumbZIndexes) : d <= e.state.thumbZIndexes[c] ? d : d - 1
                })
              }))
            }
          }
        }, e.onMouseMove = function(t) {
          t.preventDefault(), e.onMove(t.clientX, t.clientY)
        }, e.onTouchMove = function(t) {
          t.preventDefault(), e.onMove(t.touches[0].clientX, t.touches[0].clientY)
        }, e.onKeyDown = function(t) {
          var i = e.props,
            c = i.values,
            d = i.onChange,
            h = i.step,
            y = i.rtl,
            f = i.direction,
            v = e.state.isChanged,
            k = e.getTargetIndex(t.nativeEvent),
            D = y || f === w.Direction.Left || f === w.Direction.Down ? -1 : 1;
          k !== -1 && (pe.includes(t.key) ? (t.preventDefault(), e.setState({
            draggedThumbIndex: k,
            isChanged: !0
          }), d((0, b.replaceAt)(c, k, e.normalizeValue(c[k] + D * (t.key === "PageUp" ? h * 10 : h), k)))) : me.includes(t.key) ? (t.preventDefault(), e.setState({
            draggedThumbIndex: k,
            isChanged: !0
          }), d((0, b.replaceAt)(c, k, e.normalizeValue(c[k] - D * (t.key === "PageDown" ? h * 10 : h), k)))) : t.key === "Tab" ? e.setState({
            draggedThumbIndex: -1
          }, function() {
            v && e.fireOnFinalChange()
          }) : v && e.fireOnFinalChange())
        }, e.onKeyUp = function(t) {
          var i = e.state.isChanged;
          e.setState({
            draggedThumbIndex: -1
          }, function() {
            i && e.fireOnFinalChange()
          })
        }, e.onMove = function(t, i) {
          var c = e.state,
            d = c.draggedThumbIndex,
            h = c.draggedTrackPos,
            y = e.props,
            f = y.direction,
            v = y.min,
            k = y.max,
            D = y.onChange,
            g = y.values,
            E = y.step,
            L = y.rtl;
          if (d === -1 && h[0] === -1 && h[1] === -1) return null;
          var x = e.trackRef.current;
          if (!x) return null;
          var V = x.getBoundingClientRect(),
            R = (0, b.isVertical)(f) ? V.height : V.width;
          if (h[0] !== -1 && h[1] !== -1) {
            var A = t - h[0],
              K = i - h[1],
              B = 0;
            switch (f) {
              case w.Direction.Right:
              case w.Direction.Left:
                B = A / R * (k - v);
                break;
              case w.Direction.Down:
              case w.Direction.Up:
                B = K / R * (k - v);
                break;
              default:
                (0, b.assertUnreachable)(f)
            }
            if (L && (B *= -1), Math.abs(B) >= E / 2) {
              for (var I = 0; I < e.thumbRefs.length; I++) {
                if (g[I] === k && Math.sign(B) === 1 || g[I] === v && Math.sign(B) === -1) return;
                var W = g[I] + B;
                W > k ? B = k - g[I] : W < v && (B = v - g[I])
              }
              for (var X = g.slice(0), I = 0; I < e.thumbRefs.length; I++) X = (0, b.replaceAt)(X, I, e.normalizeValue(g[I] + B, I));
              e.setState({
                draggedTrackPos: [t, i]
              }), D(X)
            }
          } else {
            var F = 0;
            switch (f) {
              case w.Direction.Right:
                F = (t - V.left) / R * (k - v) + v;
                break;
              case w.Direction.Left:
                F = (R - (t - V.left)) / R * (k - v) + v;
                break;
              case w.Direction.Down:
                F = (i - V.top) / R * (k - v) + v;
                break;
              case w.Direction.Up:
                F = (R - (i - V.top)) / R * (k - v) + v;
                break;
              default:
                (0, b.assertUnreachable)(f)
            }
            L && (F = k + v - F), Math.abs(g[d] - F) >= E / 2 && D((0, b.replaceAt)(g, d, e.normalizeValue(F, d)))
          }
        }, e.normalizeValue = function(t, i) {
          var c = e.props,
            d = c.min,
            h = c.max,
            y = c.step,
            f = c.allowOverlap,
            v = c.values;
          return (0, b.normalizeValue)(t, i, d, h, y, f, v)
        }, e.onEnd = function(t) {
          if (t.preventDefault(), document.removeEventListener("mousemove", e.schdOnMouseMove), document.removeEventListener("touchmove", e.schdOnTouchMove), document.removeEventListener("mouseup", e.schdOnEnd), document.removeEventListener("touchend", e.schdOnEnd), document.removeEventListener("touchcancel", e.schdOnEnd), e.state.draggedThumbIndex === -1 && e.state.draggedTrackPos[0] === -1 && e.state.draggedTrackPos[1] === -1) return null;
          e.setState({
            draggedThumbIndex: -1,
            draggedTrackPos: [-1, -1]
          }, function() {
            e.fireOnFinalChange()
          })
        }, e.fireOnFinalChange = function() {
          e.setState({
            isChanged: !1
          });
          var t = e.props,
            i = t.onFinalChange,
            c = t.values;
          i && i(c)
        }, e.updateMarkRefs = function(t) {
          if (!t.renderMark) {
            e.numOfMarks = void 0, e.markRefs = void 0;
            return
          }
          e.numOfMarks = (t.max - t.min) / e.props.step, e.markRefs = [];
          for (var i = 0; i < e.numOfMarks + 1; i++) e.markRefs[i] = $.createRef()
        }, e.calculateMarkOffsets = function() {
          if (!(!e.props.renderMark || !e.trackRef || !e.numOfMarks || !e.markRefs || e.trackRef.current === null)) {
            for (var t = window.getComputedStyle(e.trackRef.current), i = parseInt(t.width, 10), c = parseInt(t.height, 10), d = parseInt(t.paddingLeft, 10), h = parseInt(t.paddingTop, 10), y = [], f = 0; f < e.numOfMarks + 1; f++) {
              var v = 9999,
                k = 9999;
              if (e.markRefs[f].current) {
                var D = e.markRefs[f].current.getBoundingClientRect();
                v = D.height, k = D.width
              }
              e.props.direction === w.Direction.Left || e.props.direction === w.Direction.Right ? y.push([Math.round(i / e.numOfMarks * f + d - k / 2), -Math.round((v - c) / 2)]) : y.push([Math.round(c / e.numOfMarks * f + h - v / 2), -Math.round((k - i) / 2)])
            }
            e.setState({
              markOffsets: y
            })
          }
        }, o.step === 0) throw new Error('"step" property should be a positive number');
      return e.schdOnMouseMove = (0, b.schd)(e.onMouseMove), e.schdOnTouchMove = (0, b.schd)(e.onTouchMove), e.schdOnEnd = (0, b.schd)(e.onEnd), e.thumbRefs = o.values.map(function() {
        return $.createRef()
      }), e.updateMarkRefs(o), e
    }
    return u.prototype.componentDidMount = function() {
      var o = this,
        e = this.props,
        t = e.values,
        i = e.min,
        c = e.step;
      this.resizeObserver = window.ResizeObserver ? new window.ResizeObserver(this.onResize) : {
        observe: function() {
          return window.addEventListener("resize", o.onResize)
        },
        unobserve: function() {
          return window.removeEventListener("resize", o.onResize)
        }
      }, document.addEventListener("touchstart", this.onMouseOrTouchStart, {
        passive: !1
      }), document.addEventListener("mousedown", this.onMouseOrTouchStart, {
        passive: !1
      }), !this.props.allowOverlap && (0, b.checkInitialOverlap)(this.props.values), this.props.values.forEach(function(d) {
        return (0, b.checkBoundaries)(d, o.props.min, o.props.max)
      }), this.resizeObserver.observe(this.trackRef.current), (0, b.translateThumbs)(this.getThumbs(), this.getOffsets(), this.props.rtl), this.calculateMarkOffsets(), t.forEach(function(d) {
        (0, b.isStepDivisible)(i, d, c) || console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")
      })
    }, u.prototype.componentDidUpdate = function(o, e) {
      var t = this.props,
        i = t.max,
        c = t.min,
        d = t.step,
        h = t.values,
        y = t.rtl;
      (o.max !== i || o.min !== c || o.step !== d) && this.updateMarkRefs(this.props), (0, b.translateThumbs)(this.getThumbs(), this.getOffsets(), y), (o.max !== i || o.min !== c || o.step !== d || e.markOffsets.length !== this.state.markOffsets.length) && (this.calculateMarkOffsets(), h.forEach(function(f) {
        (0, b.isStepDivisible)(c, f, d) || console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")
      }))
    }, u.prototype.componentWillUnmount = function() {
      var o = {
        passive: !1
      };
      document.removeEventListener("mousedown", this.onMouseOrTouchStart, o), document.removeEventListener("mousemove", this.schdOnMouseMove), document.removeEventListener("touchmove", this.schdOnTouchMove), document.removeEventListener("touchstart", this.onMouseOrTouchStart), document.removeEventListener("mouseup", this.schdOnEnd), document.removeEventListener("touchend", this.schdOnEnd), this.resizeObserver.unobserve(this.trackRef.current)
    }, u.prototype.render = function() {
      var o = this,
        e = this.props,
        t = e.label,
        i = e.labelledBy,
        c = e.renderTrack,
        d = e.renderThumb,
        h = e.renderMark,
        y = h === void 0 ? function() {
          return null
        } : h,
        f = e.values,
        v = e.min,
        k = e.max,
        D = e.allowOverlap,
        g = e.disabled,
        E = this.state,
        L = E.draggedThumbIndex,
        x = E.thumbZIndexes,
        V = E.markOffsets;
      return c({
        props: {
          style: {
            transform: "scale(1)",
            cursor: L > -1 ? "grabbing" : this.props.draggableTrack ? (0, b.isVertical)(this.props.direction) ? "ns-resize" : "ew-resize" : f.length === 1 && !g ? "pointer" : "inherit"
          },
          onMouseDown: g ? b.voidFn : this.onMouseDownTrack,
          onTouchStart: g ? b.voidFn : this.onTouchStartTrack,
          ref: this.trackRef
        },
        isDragged: this.state.draggedThumbIndex > -1,
        disabled: g,
        children: oe(oe([], V.map(function(R, A, K) {
          return y({
            props: {
              style: o.props.direction === w.Direction.Left || o.props.direction === w.Direction.Right ? {
                position: "absolute",
                left: "".concat(R[0], "px"),
                marginTop: "".concat(R[1], "px")
              } : {
                position: "absolute",
                top: "".concat(R[0], "px"),
                marginLeft: "".concat(R[1], "px")
              },
              key: "mark".concat(A),
              ref: o.markRefs[A]
            },
            index: A
          })
        }), !0), f.map(function(R, A) {
          var K = o.state.draggedThumbIndex === A;
          return d({
            index: A,
            value: R,
            isDragged: K,
            props: {
              style: {
                position: "absolute",
                zIndex: x[A],
                cursor: g ? "inherit" : K ? "grabbing" : "grab",
                userSelect: "none",
                touchAction: "none",
                WebkitUserSelect: "none",
                MozUserSelect: "none",
                msUserSelect: "none"
              },
              key: A,
              tabIndex: g ? void 0 : 0,
              "aria-valuemax": D ? k : f[A + 1] || k,
              "aria-valuemin": D ? v : f[A - 1] || v,
              "aria-valuenow": R,
              draggable: !1,
              ref: o.thumbRefs[A],
              "aria-label": t,
              "aria-labelledby": i,
              role: "slider",
              onKeyDown: g ? b.voidFn : o.onKeyDown,
              onKeyUp: g ? b.voidFn : o.onKeyUp
            }
          })
        }), !0)
      })
    }, u.defaultProps = {
      label: "Accessibility label",
      labelledBy: null,
      step: 1,
      direction: w.Direction.Right,
      rtl: !1,
      disabled: !1,
      allowOverlap: !1,
      draggableTrack: !1,
      min: 0,
      max: 100
    }, u
  }($.Component);
H.default = be;
(function(r) {
  var u = P && P.__importDefault || function(i) {
    return i && i.__esModule ? i : {
      default: i
    }
  };
  Object.defineProperty(r, "__esModule", {
    value: !0
  }), r.checkValuesAgainstBoundaries = r.relativeValue = r.useThumbOverlap = r.Direction = r.getTrackBackground = r.Range = void 0;
  var o = u(H);
  r.Range = o.default;
  var e = J;
  Object.defineProperty(r, "getTrackBackground", {
    enumerable: !0,
    get: function() {
      return e.getTrackBackground
    }
  }), Object.defineProperty(r, "useThumbOverlap", {
    enumerable: !0,
    get: function() {
      return e.useThumbOverlap
    }
  }), Object.defineProperty(r, "relativeValue", {
    enumerable: !0,
    get: function() {
      return e.relativeValue
    }
  }), Object.defineProperty(r, "checkValuesAgainstBoundaries", {
    enumerable: !0,
    get: function() {
      return e.checkValuesAgainstBoundaries
    }
  });
  var t = Z;
  Object.defineProperty(r, "Direction", {
    enumerable: !0,
    get: function() {
      return t.Direction
    }
  })
})(le);
export {
  le as l
};