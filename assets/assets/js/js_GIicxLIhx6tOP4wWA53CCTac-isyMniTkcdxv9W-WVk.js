/*!
 * Vue.js v2.6.11
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
! function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).Vue = t()
}(this, function() {
  "use strict";
  var e = Object.freeze({});

  function t(e) {
      return null == e
  }

  function n(e) {
      return null != e
  }

  function r(e) {
      return !0 === e
  }

  function i(e) {
      return "string" == typeof e || "number" == typeof e || "symbol" == typeof e || "boolean" == typeof e
  }

  function o(e) {
      return null !== e && "object" == typeof e
  }
  var a = Object.prototype.toString;

  function s(e) {
      return "[object Object]" === a.call(e)
  }

  function c(e) {
      var t = parseFloat(String(e));
      return t >= 0 && Math.floor(t) === t && isFinite(e)
  }

  function u(e) {
      return n(e) && "function" == typeof e.then && "function" == typeof e.catch
  }

  function l(e) {
      return null == e ? "" : Array.isArray(e) || s(e) && e.toString === a ? JSON.stringify(e, null, 2) : String(e)
  }

  function f(e) {
      var t = parseFloat(e);
      return isNaN(t) ? e : t
  }

  function p(e, t) {
      for (var n = Object.create(null), r = e.split(","), i = 0; i < r.length; i++) n[r[i]] = !0;
      return t ? function(e) {
          return n[e.toLowerCase()]
      } : function(e) {
          return n[e]
      }
  }
  var d = p("slot,component", !0),
      v = p("key,ref,slot,slot-scope,is");

  function h(e, t) {
      if (e.length) {
          var n = e.indexOf(t);
          if (n > -1) return e.splice(n, 1)
      }
  }
  var m = Object.prototype.hasOwnProperty;

  function y(e, t) {
      return m.call(e, t)
  }

  function g(e) {
      var t = Object.create(null);
      return function(n) {
          return t[n] || (t[n] = e(n))
      }
  }
  var _ = /-(\w)/g,
      b = g(function(e) {
          return e.replace(_, function(e, t) {
              return t ? t.toUpperCase() : ""
          })
      }),
      $ = g(function(e) {
          return e.charAt(0).toUpperCase() + e.slice(1)
      }),
      w = /\B([A-Z])/g,
      C = g(function(e) {
          return e.replace(w, "-$1").toLowerCase()
      });
  var x = Function.prototype.bind ? function(e, t) {
      return e.bind(t)
  } : function(e, t) {
      function n(n) {
          var r = arguments.length;
          return r ? r > 1 ? e.apply(t, arguments) : e.call(t, n) : e.call(t)
      }
      return n._length = e.length, n
  };

  function k(e, t) {
      t = t || 0;
      for (var n = e.length - t, r = new Array(n); n--;) r[n] = e[n + t];
      return r
  }

  function A(e, t) {
      for (var n in t) e[n] = t[n];
      return e
  }

  function O(e) {
      for (var t = {}, n = 0; n < e.length; n++) e[n] && A(t, e[n]);
      return t
  }

  function S(e, t, n) {}
  var T = function(e, t, n) {
          return !1
      },
      E = function(e) {
          return e
      };

  function N(e, t) {
      if (e === t) return !0;
      var n = o(e),
          r = o(t);
      if (!n || !r) return !n && !r && String(e) === String(t);
      try {
          var i = Array.isArray(e),
              a = Array.isArray(t);
          if (i && a) return e.length === t.length && e.every(function(e, n) {
              return N(e, t[n])
          });
          if (e instanceof Date && t instanceof Date) return e.getTime() === t.getTime();
          if (i || a) return !1;
          var s = Object.keys(e),
              c = Object.keys(t);
          return s.length === c.length && s.every(function(n) {
              return N(e[n], t[n])
          })
      } catch (e) {
          return !1
      }
  }

  function j(e, t) {
      for (var n = 0; n < e.length; n++)
          if (N(e[n], t)) return n;
      return -1
  }

  function D(e) {
      var t = !1;
      return function() {
          t || (t = !0, e.apply(this, arguments))
      }
  }
  var L = "data-server-rendered",
      M = ["component", "directive", "filter"],
      I = ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured", "serverPrefetch"],
      F = {
          optionMergeStrategies: Object.create(null),
          silent: !1,
          productionTip: !1,
          devtools: !1,
          performance: !1,
          errorHandler: null,
          warnHandler: null,
          ignoredElements: [],
          keyCodes: Object.create(null),
          isReservedTag: T,
          isReservedAttr: T,
          isUnknownElement: T,
          getTagNamespace: S,
          parsePlatformTagName: E,
          mustUseProp: T,
          async: !0,
          _lifecycleHooks: I
      },
      P = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

  function R(e, t, n, r) {
      Object.defineProperty(e, t, {
          value: n,
          enumerable: !!r,
          writable: !0,
          configurable: !0
      })
  }
  var H = new RegExp("[^" + P.source + ".$_\\d]");
  var B, U = "__proto__" in {},
      z = "undefined" != typeof window,
      V = "undefined" != typeof WXEnvironment && !!WXEnvironment.platform,
      K = V && WXEnvironment.platform.toLowerCase(),
      J = z && window.navigator.userAgent.toLowerCase(),
      q = J && /msie|trident/.test(J),
      W = J && J.indexOf("msie 9.0") > 0,
      Z = J && J.indexOf("edge/") > 0,
      G = (J && J.indexOf("android"), J && /iphone|ipad|ipod|ios/.test(J) || "ios" === K),
      X = (J && /chrome\/\d+/.test(J), J && /phantomjs/.test(J), J && J.match(/firefox\/(\d+)/)),
      Y = {}.watch,
      Q = !1;
  if (z) try {
      var ee = {};
      Object.defineProperty(ee, "passive", {
          get: function() {
              Q = !0
          }
      }), window.addEventListener("test-passive", null, ee)
  } catch (e) {}
  var te = function() {
          return void 0 === B && (B = !z && !V && "undefined" != typeof global && (global.process && "server" === global.process.env.VUE_ENV)), B
      },
      ne = z && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

  function re(e) {
      return "function" == typeof e && /native code/.test(e.toString())
  }
  var ie, oe = "undefined" != typeof Symbol && re(Symbol) && "undefined" != typeof Reflect && re(Reflect.ownKeys);
  ie = "undefined" != typeof Set && re(Set) ? Set : function() {
      function e() {
          this.set = Object.create(null)
      }
      return e.prototype.has = function(e) {
          return !0 === this.set[e]
      }, e.prototype.add = function(e) {
          this.set[e] = !0
      }, e.prototype.clear = function() {
          this.set = Object.create(null)
      }, e
  }();
  var ae = S,
      se = 0,
      ce = function() {
          this.id = se++, this.subs = []
      };
  ce.prototype.addSub = function(e) {
      this.subs.push(e)
  }, ce.prototype.removeSub = function(e) {
      h(this.subs, e)
  }, ce.prototype.depend = function() {
      ce.target && ce.target.addDep(this)
  }, ce.prototype.notify = function() {
      for (var e = this.subs.slice(), t = 0, n = e.length; t < n; t++) e[t].update()
  }, ce.target = null;
  var ue = [];

  function le(e) {
      ue.push(e), ce.target = e
  }

  function fe() {
      ue.pop(), ce.target = ue[ue.length - 1]
  }
  var pe = function(e, t, n, r, i, o, a, s) {
          this.tag = e, this.data = t, this.children = n, this.text = r, this.elm = i, this.ns = void 0, this.context = o, this.fnContext = void 0, this.fnOptions = void 0, this.fnScopeId = void 0, this.key = t && t.key, this.componentOptions = a, this.componentInstance = void 0, this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, this.isComment = !1, this.isCloned = !1, this.isOnce = !1, this.asyncFactory = s, this.asyncMeta = void 0, this.isAsyncPlaceholder = !1
      },
      de = {
          child: {
              configurable: !0
          }
      };
  de.child.get = function() {
      return this.componentInstance
  }, Object.defineProperties(pe.prototype, de);
  var ve = function(e) {
      void 0 === e && (e = "");
      var t = new pe;
      return t.text = e, t.isComment = !0, t
  };

  function he(e) {
      return new pe(void 0, void 0, void 0, String(e))
  }

  function me(e) {
      var t = new pe(e.tag, e.data, e.children && e.children.slice(), e.text, e.elm, e.context, e.componentOptions, e.asyncFactory);
      return t.ns = e.ns, t.isStatic = e.isStatic, t.key = e.key, t.isComment = e.isComment, t.fnContext = e.fnContext, t.fnOptions = e.fnOptions, t.fnScopeId = e.fnScopeId, t.asyncMeta = e.asyncMeta, t.isCloned = !0, t
  }
  var ye = Array.prototype,
      ge = Object.create(ye);
  ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function(e) {
      var t = ye[e];
      R(ge, e, function() {
          for (var n = [], r = arguments.length; r--;) n[r] = arguments[r];
          var i, o = t.apply(this, n),
              a = this.__ob__;
          switch (e) {
              case "push":
              case "unshift":
                  i = n;
                  break;
              case "splice":
                  i = n.slice(2)
          }
          return i && a.observeArray(i), a.dep.notify(), o
      })
  });
  var _e = Object.getOwnPropertyNames(ge),
      be = !0;

  function $e(e) {
      be = e
  }
  var we = function(e) {
      var t;
      this.value = e, this.dep = new ce, this.vmCount = 0, R(e, "__ob__", this), Array.isArray(e) ? (U ? (t = ge, e.__proto__ = t) : function(e, t, n) {
          for (var r = 0, i = n.length; r < i; r++) {
              var o = n[r];
              R(e, o, t[o])
          }
      }(e, ge, _e), this.observeArray(e)) : this.walk(e)
  };

  function Ce(e, t) {
      var n;
      if (o(e) && !(e instanceof pe)) return y(e, "__ob__") && e.__ob__ instanceof we ? n = e.__ob__ : be && !te() && (Array.isArray(e) || s(e)) && Object.isExtensible(e) && !e._isVue && (n = new we(e)), t && n && n.vmCount++, n
  }

  function xe(e, t, n, r, i) {
      var o = new ce,
          a = Object.getOwnPropertyDescriptor(e, t);
      if (!a || !1 !== a.configurable) {
          var s = a && a.get,
              c = a && a.set;
          s && !c || 2 !== arguments.length || (n = e[t]);
          var u = !i && Ce(n);
          Object.defineProperty(e, t, {
              enumerable: !0,
              configurable: !0,
              get: function() {
                  var t = s ? s.call(e) : n;
                  return ce.target && (o.depend(), u && (u.dep.depend(), Array.isArray(t) && function e(t) {
                      for (var n = void 0, r = 0, i = t.length; r < i; r++)(n = t[r]) && n.__ob__ && n.__ob__.dep.depend(), Array.isArray(n) && e(n)
                  }(t))), t
              },
              set: function(t) {
                  var r = s ? s.call(e) : n;
                  t === r || t != t && r != r || s && !c || (c ? c.call(e, t) : n = t, u = !i && Ce(t), o.notify())
              }
          })
      }
  }

  function ke(e, t, n) {
      if (Array.isArray(e) && c(t)) return e.length = Math.max(e.length, t), e.splice(t, 1, n), n;
      if (t in e && !(t in Object.prototype)) return e[t] = n, n;
      var r = e.__ob__;
      return e._isVue || r && r.vmCount ? n : r ? (xe(r.value, t, n), r.dep.notify(), n) : (e[t] = n, n)
  }

  function Ae(e, t) {
      if (Array.isArray(e) && c(t)) e.splice(t, 1);
      else {
          var n = e.__ob__;
          e._isVue || n && n.vmCount || y(e, t) && (delete e[t], n && n.dep.notify())
      }
  }
  we.prototype.walk = function(e) {
      for (var t = Object.keys(e), n = 0; n < t.length; n++) xe(e, t[n])
  }, we.prototype.observeArray = function(e) {
      for (var t = 0, n = e.length; t < n; t++) Ce(e[t])
  };
  var Oe = F.optionMergeStrategies;

  function Se(e, t) {
      if (!t) return e;
      for (var n, r, i, o = oe ? Reflect.ownKeys(t) : Object.keys(t), a = 0; a < o.length; a++) "__ob__" !== (n = o[a]) && (r = e[n], i = t[n], y(e, n) ? r !== i && s(r) && s(i) && Se(r, i) : ke(e, n, i));
      return e
  }

  function Te(e, t, n) {
      return n ? function() {
          var r = "function" == typeof t ? t.call(n, n) : t,
              i = "function" == typeof e ? e.call(n, n) : e;
          return r ? Se(r, i) : i
      } : t ? e ? function() {
          return Se("function" == typeof t ? t.call(this, this) : t, "function" == typeof e ? e.call(this, this) : e)
      } : t : e
  }

  function Ee(e, t) {
      var n = t ? e ? e.concat(t) : Array.isArray(t) ? t : [t] : e;
      return n ? function(e) {
          for (var t = [], n = 0; n < e.length; n++) - 1 === t.indexOf(e[n]) && t.push(e[n]);
          return t
      }(n) : n
  }

  function Ne(e, t, n, r) {
      var i = Object.create(e || null);
      return t ? A(i, t) : i
  }
  Oe.data = function(e, t, n) {
      return n ? Te(e, t, n) : t && "function" != typeof t ? e : Te(e, t)
  }, I.forEach(function(e) {
      Oe[e] = Ee
  }), M.forEach(function(e) {
      Oe[e + "s"] = Ne
  }), Oe.watch = function(e, t, n, r) {
      if (e === Y && (e = void 0), t === Y && (t = void 0), !t) return Object.create(e || null);
      if (!e) return t;
      var i = {};
      for (var o in A(i, e), t) {
          var a = i[o],
              s = t[o];
          a && !Array.isArray(a) && (a = [a]), i[o] = a ? a.concat(s) : Array.isArray(s) ? s : [s]
      }
      return i
  }, Oe.props = Oe.methods = Oe.inject = Oe.computed = function(e, t, n, r) {
      if (!e) return t;
      var i = Object.create(null);
      return A(i, e), t && A(i, t), i
  }, Oe.provide = Te;
  var je = function(e, t) {
      return void 0 === t ? e : t
  };

  function De(e, t, n) {
      if ("function" == typeof t && (t = t.options), function(e, t) {
              var n = e.props;
              if (n) {
                  var r, i, o = {};
                  if (Array.isArray(n))
                      for (r = n.length; r--;) "string" == typeof(i = n[r]) && (o[b(i)] = {
                          type: null
                      });
                  else if (s(n))
                      for (var a in n) i = n[a], o[b(a)] = s(i) ? i : {
                          type: i
                      };
                  e.props = o
              }
          }(t), function(e, t) {
              var n = e.inject;
              if (n) {
                  var r = e.inject = {};
                  if (Array.isArray(n))
                      for (var i = 0; i < n.length; i++) r[n[i]] = {
                          from: n[i]
                      };
                  else if (s(n))
                      for (var o in n) {
                          var a = n[o];
                          r[o] = s(a) ? A({
                              from: o
                          }, a) : {
                              from: a
                          }
                      }
              }
          }(t), function(e) {
              var t = e.directives;
              if (t)
                  for (var n in t) {
                      var r = t[n];
                      "function" == typeof r && (t[n] = {
                          bind: r,
                          update: r
                      })
                  }
          }(t), !t._base && (t.extends && (e = De(e, t.extends, n)), t.mixins))
          for (var r = 0, i = t.mixins.length; r < i; r++) e = De(e, t.mixins[r], n);
      var o, a = {};
      for (o in e) c(o);
      for (o in t) y(e, o) || c(o);

      function c(r) {
          var i = Oe[r] || je;
          a[r] = i(e[r], t[r], n, r)
      }
      return a
  }

  function Le(e, t, n, r) {
      if ("string" == typeof n) {
          var i = e[t];
          if (y(i, n)) return i[n];
          var o = b(n);
          if (y(i, o)) return i[o];
          var a = $(o);
          return y(i, a) ? i[a] : i[n] || i[o] || i[a]
      }
  }

  function Me(e, t, n, r) {
      var i = t[e],
          o = !y(n, e),
          a = n[e],
          s = Pe(Boolean, i.type);
      if (s > -1)
          if (o && !y(i, "default")) a = !1;
          else if ("" === a || a === C(e)) {
          var c = Pe(String, i.type);
          (c < 0 || s < c) && (a = !0)
      }
      if (void 0 === a) {
          a = function(e, t, n) {
              if (!y(t, "default")) return;
              var r = t.default;
              if (e && e.$options.propsData && void 0 === e.$options.propsData[n] && void 0 !== e._props[n]) return e._props[n];
              return "function" == typeof r && "Function" !== Ie(t.type) ? r.call(e) : r
          }(r, i, e);
          var u = be;
          $e(!0), Ce(a), $e(u)
      }
      return a
  }

  function Ie(e) {
      var t = e && e.toString().match(/^\s*function (\w+)/);
      return t ? t[1] : ""
  }

  function Fe(e, t) {
      return Ie(e) === Ie(t)
  }

  function Pe(e, t) {
      if (!Array.isArray(t)) return Fe(t, e) ? 0 : -1;
      for (var n = 0, r = t.length; n < r; n++)
          if (Fe(t[n], e)) return n;
      return -1
  }

  function Re(e, t, n) {
      le();
      try {
          if (t)
              for (var r = t; r = r.$parent;) {
                  var i = r.$options.errorCaptured;
                  if (i)
                      for (var o = 0; o < i.length; o++) try {
                          if (!1 === i[o].call(r, e, t, n)) return
                      } catch (e) {
                          Be(e, r, "errorCaptured hook")
                      }
              }
          Be(e, t, n)
      } finally {
          fe()
      }
  }

  function He(e, t, n, r, i) {
      var o;
      try {
          (o = n ? e.apply(t, n) : e.call(t)) && !o._isVue && u(o) && !o._handled && (o.catch(function(e) {
              return Re(e, r, i + " (Promise/async)")
          }), o._handled = !0)
      } catch (e) {
          Re(e, r, i)
      }
      return o
  }

  function Be(e, t, n) {
      if (F.errorHandler) try {
          return F.errorHandler.call(null, e, t, n)
      } catch (t) {
          t !== e && Ue(t, null, "config.errorHandler")
      }
      Ue(e, t, n)
  }

  function Ue(e, t, n) {
      if (!z && !V || "undefined" == typeof console) throw e;
      console.error(e)
  }
  var ze, Ve = !1,
      Ke = [],
      Je = !1;

  function qe() {
      Je = !1;
      var e = Ke.slice(0);
      Ke.length = 0;
      for (var t = 0; t < e.length; t++) e[t]()
  }
  if ("undefined" != typeof Promise && re(Promise)) {
      var We = Promise.resolve();
      ze = function() {
          We.then(qe), G && setTimeout(S)
      }, Ve = !0
  } else if (q || "undefined" == typeof MutationObserver || !re(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString()) ze = "undefined" != typeof setImmediate && re(setImmediate) ? function() {
      setImmediate(qe)
  } : function() {
      setTimeout(qe, 0)
  };
  else {
      var Ze = 1,
          Ge = new MutationObserver(qe),
          Xe = document.createTextNode(String(Ze));
      Ge.observe(Xe, {
          characterData: !0
      }), ze = function() {
          Ze = (Ze + 1) % 2, Xe.data = String(Ze)
      }, Ve = !0
  }

  function Ye(e, t) {
      var n;
      if (Ke.push(function() {
              if (e) try {
                  e.call(t)
              } catch (e) {
                  Re(e, t, "nextTick")
              } else n && n(t)
          }), Je || (Je = !0, ze()), !e && "undefined" != typeof Promise) return new Promise(function(e) {
          n = e
      })
  }
  var Qe = new ie;

  function et(e) {
      ! function e(t, n) {
          var r, i;
          var a = Array.isArray(t);
          if (!a && !o(t) || Object.isFrozen(t) || t instanceof pe) return;
          if (t.__ob__) {
              var s = t.__ob__.dep.id;
              if (n.has(s)) return;
              n.add(s)
          }
          if (a)
              for (r = t.length; r--;) e(t[r], n);
          else
              for (i = Object.keys(t), r = i.length; r--;) e(t[i[r]], n)
      }(e, Qe), Qe.clear()
  }
  var tt = g(function(e) {
      var t = "&" === e.charAt(0),
          n = "~" === (e = t ? e.slice(1) : e).charAt(0),
          r = "!" === (e = n ? e.slice(1) : e).charAt(0);
      return {
          name: e = r ? e.slice(1) : e,
          once: n,
          capture: r,
          passive: t
      }
  });

  function nt(e, t) {
      function n() {
          var e = arguments,
              r = n.fns;
          if (!Array.isArray(r)) return He(r, null, arguments, t, "v-on handler");
          for (var i = r.slice(), o = 0; o < i.length; o++) He(i[o], null, e, t, "v-on handler")
      }
      return n.fns = e, n
  }

  function rt(e, n, i, o, a, s) {
      var c, u, l, f;
      for (c in e) u = e[c], l = n[c], f = tt(c), t(u) || (t(l) ? (t(u.fns) && (u = e[c] = nt(u, s)), r(f.once) && (u = e[c] = a(f.name, u, f.capture)), i(f.name, u, f.capture, f.passive, f.params)) : u !== l && (l.fns = u, e[c] = l));
      for (c in n) t(e[c]) && o((f = tt(c)).name, n[c], f.capture)
  }

  function it(e, i, o) {
      var a;
      e instanceof pe && (e = e.data.hook || (e.data.hook = {}));
      var s = e[i];

      function c() {
          o.apply(this, arguments), h(a.fns, c)
      }
      t(s) ? a = nt([c]) : n(s.fns) && r(s.merged) ? (a = s).fns.push(c) : a = nt([s, c]), a.merged = !0, e[i] = a
  }

  function ot(e, t, r, i, o) {
      if (n(t)) {
          if (y(t, r)) return e[r] = t[r], o || delete t[r], !0;
          if (y(t, i)) return e[r] = t[i], o || delete t[i], !0
      }
      return !1
  }

  function at(e) {
      return i(e) ? [he(e)] : Array.isArray(e) ? function e(o, a) {
          var s = [];
          var c, u, l, f;
          for (c = 0; c < o.length; c++) t(u = o[c]) || "boolean" == typeof u || (l = s.length - 1, f = s[l], Array.isArray(u) ? u.length > 0 && (st((u = e(u, (a || "") + "_" + c))[0]) && st(f) && (s[l] = he(f.text + u[0].text), u.shift()), s.push.apply(s, u)) : i(u) ? st(f) ? s[l] = he(f.text + u) : "" !== u && s.push(he(u)) : st(u) && st(f) ? s[l] = he(f.text + u.text) : (r(o._isVList) && n(u.tag) && t(u.key) && n(a) && (u.key = "__vlist" + a + "_" + c + "__"), s.push(u)));
          return s
      }(e) : void 0
  }

  function st(e) {
      return n(e) && n(e.text) && !1 === e.isComment
  }

  function ct(e, t) {
      if (e) {
          for (var n = Object.create(null), r = oe ? Reflect.ownKeys(e) : Object.keys(e), i = 0; i < r.length; i++) {
              var o = r[i];
              if ("__ob__" !== o) {
                  for (var a = e[o].from, s = t; s;) {
                      if (s._provided && y(s._provided, a)) {
                          n[o] = s._provided[a];
                          break
                      }
                      s = s.$parent
                  }
                  if (!s && "default" in e[o]) {
                      var c = e[o].default;
                      n[o] = "function" == typeof c ? c.call(t) : c
                  }
              }
          }
          return n
      }
  }

  function ut(e, t) {
      if (!e || !e.length) return {};
      for (var n = {}, r = 0, i = e.length; r < i; r++) {
          var o = e[r],
              a = o.data;
          if (a && a.attrs && a.attrs.slot && delete a.attrs.slot, o.context !== t && o.fnContext !== t || !a || null == a.slot)(n.default || (n.default = [])).push(o);
          else {
              var s = a.slot,
                  c = n[s] || (n[s] = []);
              "template" === o.tag ? c.push.apply(c, o.children || []) : c.push(o)
          }
      }
      for (var u in n) n[u].every(lt) && delete n[u];
      return n
  }

  function lt(e) {
      return e.isComment && !e.asyncFactory || " " === e.text
  }

  function ft(t, n, r) {
      var i, o = Object.keys(n).length > 0,
          a = t ? !!t.$stable : !o,
          s = t && t.$key;
      if (t) {
          if (t._normalized) return t._normalized;
          if (a && r && r !== e && s === r.$key && !o && !r.$hasNormal) return r;
          for (var c in i = {}, t) t[c] && "$" !== c[0] && (i[c] = pt(n, c, t[c]))
      } else i = {};
      for (var u in n) u in i || (i[u] = dt(n, u));
      return t && Object.isExtensible(t) && (t._normalized = i), R(i, "$stable", a), R(i, "$key", s), R(i, "$hasNormal", o), i
  }

  function pt(e, t, n) {
      var r = function() {
          var e = arguments.length ? n.apply(null, arguments) : n({});
          return (e = e && "object" == typeof e && !Array.isArray(e) ? [e] : at(e)) && (0 === e.length || 1 === e.length && e[0].isComment) ? void 0 : e
      };
      return n.proxy && Object.defineProperty(e, t, {
          get: r,
          enumerable: !0,
          configurable: !0
      }), r
  }

  function dt(e, t) {
      return function() {
          return e[t]
      }
  }

  function vt(e, t) {
      var r, i, a, s, c;
      if (Array.isArray(e) || "string" == typeof e)
          for (r = new Array(e.length), i = 0, a = e.length; i < a; i++) r[i] = t(e[i], i);
      else if ("number" == typeof e)
          for (r = new Array(e), i = 0; i < e; i++) r[i] = t(i + 1, i);
      else if (o(e))
          if (oe && e[Symbol.iterator]) {
              r = [];
              for (var u = e[Symbol.iterator](), l = u.next(); !l.done;) r.push(t(l.value, r.length)), l = u.next()
          } else
              for (s = Object.keys(e), r = new Array(s.length), i = 0, a = s.length; i < a; i++) c = s[i], r[i] = t(e[c], c, i);
      return n(r) || (r = []), r._isVList = !0, r
  }

  function ht(e, t, n, r) {
      var i, o = this.$scopedSlots[e];
      o ? (n = n || {}, r && (n = A(A({}, r), n)), i = o(n) || t) : i = this.$slots[e] || t;
      var a = n && n.slot;
      return a ? this.$createElement("template", {
          slot: a
      }, i) : i
  }

  function mt(e) {
      return Le(this.$options, "filters", e) || E
  }

  function yt(e, t) {
      return Array.isArray(e) ? -1 === e.indexOf(t) : e !== t
  }

  function gt(e, t, n, r, i) {
      var o = F.keyCodes[t] || n;
      return i && r && !F.keyCodes[t] ? yt(i, r) : o ? yt(o, e) : r ? C(r) !== t : void 0
  }

  function _t(e, t, n, r, i) {
      if (n)
          if (o(n)) {
              var a;
              Array.isArray(n) && (n = O(n));
              var s = function(o) {
                  if ("class" === o || "style" === o || v(o)) a = e;
                  else {
                      var s = e.attrs && e.attrs.type;
                      a = r || F.mustUseProp(t, s, o) ? e.domProps || (e.domProps = {}) : e.attrs || (e.attrs = {})
                  }
                  var c = b(o),
                      u = C(o);
                  c in a || u in a || (a[o] = n[o], i && ((e.on || (e.on = {}))["update:" + o] = function(e) {
                      n[o] = e
                  }))
              };
              for (var c in n) s(c)
          } else;
      return e
  }

  function bt(e, t) {
      var n = this._staticTrees || (this._staticTrees = []),
          r = n[e];
      return r && !t ? r : (wt(r = n[e] = this.$options.staticRenderFns[e].call(this._renderProxy, null, this), "__static__" + e, !1), r)
  }

  function $t(e, t, n) {
      return wt(e, "__once__" + t + (n ? "_" + n : ""), !0), e
  }

  function wt(e, t, n) {
      if (Array.isArray(e))
          for (var r = 0; r < e.length; r++) e[r] && "string" != typeof e[r] && Ct(e[r], t + "_" + r, n);
      else Ct(e, t, n)
  }

  function Ct(e, t, n) {
      e.isStatic = !0, e.key = t, e.isOnce = n
  }

  function xt(e, t) {
      if (t)
          if (s(t)) {
              var n = e.on = e.on ? A({}, e.on) : {};
              for (var r in t) {
                  var i = n[r],
                      o = t[r];
                  n[r] = i ? [].concat(i, o) : o
              }
          } else;
      return e
  }

  function kt(e, t, n, r) {
      t = t || {
          $stable: !n
      };
      for (var i = 0; i < e.length; i++) {
          var o = e[i];
          Array.isArray(o) ? kt(o, t, n) : o && (o.proxy && (o.fn.proxy = !0), t[o.key] = o.fn)
      }
      return r && (t.$key = r), t
  }

  function At(e, t) {
      for (var n = 0; n < t.length; n += 2) {
          var r = t[n];
          "string" == typeof r && r && (e[t[n]] = t[n + 1])
      }
      return e
  }

  function Ot(e, t) {
      return "string" == typeof e ? t + e : e
  }

  function St(e) {
      e._o = $t, e._n = f, e._s = l, e._l = vt, e._t = ht, e._q = N, e._i = j, e._m = bt, e._f = mt, e._k = gt, e._b = _t, e._v = he, e._e = ve, e._u = kt, e._g = xt, e._d = At, e._p = Ot
  }

  function Tt(t, n, i, o, a) {
      var s, c = this,
          u = a.options;
      y(o, "_uid") ? (s = Object.create(o))._original = o : (s = o, o = o._original);
      var l = r(u._compiled),
          f = !l;
      this.data = t, this.props = n, this.children = i, this.parent = o, this.listeners = t.on || e, this.injections = ct(u.inject, o), this.slots = function() {
          return c.$slots || ft(t.scopedSlots, c.$slots = ut(i, o)), c.$slots
      }, Object.defineProperty(this, "scopedSlots", {
          enumerable: !0,
          get: function() {
              return ft(t.scopedSlots, this.slots())
          }
      }), l && (this.$options = u, this.$slots = this.slots(), this.$scopedSlots = ft(t.scopedSlots, this.$slots)), u._scopeId ? this._c = function(e, t, n, r) {
          var i = Pt(s, e, t, n, r, f);
          return i && !Array.isArray(i) && (i.fnScopeId = u._scopeId, i.fnContext = o), i
      } : this._c = function(e, t, n, r) {
          return Pt(s, e, t, n, r, f)
      }
  }

  function Et(e, t, n, r, i) {
      var o = me(e);
      return o.fnContext = n, o.fnOptions = r, t.slot && ((o.data || (o.data = {})).slot = t.slot), o
  }

  function Nt(e, t) {
      for (var n in t) e[b(n)] = t[n]
  }
  St(Tt.prototype);
  var jt = {
          init: function(e, t) {
              if (e.componentInstance && !e.componentInstance._isDestroyed && e.data.keepAlive) {
                  var r = e;
                  jt.prepatch(r, r)
              } else {
                  (e.componentInstance = function(e, t) {
                      var r = {
                              _isComponent: !0,
                              _parentVnode: e,
                              parent: t
                          },
                          i = e.data.inlineTemplate;
                      n(i) && (r.render = i.render, r.staticRenderFns = i.staticRenderFns);
                      return new e.componentOptions.Ctor(r)
                  }(e, Wt)).$mount(t ? e.elm : void 0, t)
              }
          },
          prepatch: function(t, n) {
              var r = n.componentOptions;
              ! function(t, n, r, i, o) {
                  var a = i.data.scopedSlots,
                      s = t.$scopedSlots,
                      c = !!(a && !a.$stable || s !== e && !s.$stable || a && t.$scopedSlots.$key !== a.$key),
                      u = !!(o || t.$options._renderChildren || c);
                  t.$options._parentVnode = i, t.$vnode = i, t._vnode && (t._vnode.parent = i);
                  if (t.$options._renderChildren = o, t.$attrs = i.data.attrs || e, t.$listeners = r || e, n && t.$options.props) {
                      $e(!1);
                      for (var l = t._props, f = t.$options._propKeys || [], p = 0; p < f.length; p++) {
                          var d = f[p],
                              v = t.$options.props;
                          l[d] = Me(d, v, n, t)
                      }
                      $e(!0), t.$options.propsData = n
                  }
                  r = r || e;
                  var h = t.$options._parentListeners;
                  t.$options._parentListeners = r, qt(t, r, h), u && (t.$slots = ut(o, i.context), t.$forceUpdate())
              }(n.componentInstance = t.componentInstance, r.propsData, r.listeners, n, r.children)
          },
          insert: function(e) {
              var t, n = e.context,
                  r = e.componentInstance;
              r._isMounted || (r._isMounted = !0, Yt(r, "mounted")), e.data.keepAlive && (n._isMounted ? ((t = r)._inactive = !1, en.push(t)) : Xt(r, !0))
          },
          destroy: function(e) {
              var t = e.componentInstance;
              t._isDestroyed || (e.data.keepAlive ? function e(t, n) {
                  if (n && (t._directInactive = !0, Gt(t))) return;
                  if (!t._inactive) {
                      t._inactive = !0;
                      for (var r = 0; r < t.$children.length; r++) e(t.$children[r]);
                      Yt(t, "deactivated")
                  }
              }(t, !0) : t.$destroy())
          }
      },
      Dt = Object.keys(jt);

  function Lt(i, a, s, c, l) {
      if (!t(i)) {
          var f = s.$options._base;
          if (o(i) && (i = f.extend(i)), "function" == typeof i) {
              var p;
              if (t(i.cid) && void 0 === (i = function(e, i) {
                      if (r(e.error) && n(e.errorComp)) return e.errorComp;
                      if (n(e.resolved)) return e.resolved;
                      var a = Ht;
                      a && n(e.owners) && -1 === e.owners.indexOf(a) && e.owners.push(a);
                      if (r(e.loading) && n(e.loadingComp)) return e.loadingComp;
                      if (a && !n(e.owners)) {
                          var s = e.owners = [a],
                              c = !0,
                              l = null,
                              f = null;
                          a.$on("hook:destroyed", function() {
                              return h(s, a)
                          });
                          var p = function(e) {
                                  for (var t = 0, n = s.length; t < n; t++) s[t].$forceUpdate();
                                  e && (s.length = 0, null !== l && (clearTimeout(l), l = null), null !== f && (clearTimeout(f), f = null))
                              },
                              d = D(function(t) {
                                  e.resolved = Bt(t, i), c ? s.length = 0 : p(!0)
                              }),
                              v = D(function(t) {
                                  n(e.errorComp) && (e.error = !0, p(!0))
                              }),
                              m = e(d, v);
                          return o(m) && (u(m) ? t(e.resolved) && m.then(d, v) : u(m.component) && (m.component.then(d, v), n(m.error) && (e.errorComp = Bt(m.error, i)), n(m.loading) && (e.loadingComp = Bt(m.loading, i), 0 === m.delay ? e.loading = !0 : l = setTimeout(function() {
                              l = null, t(e.resolved) && t(e.error) && (e.loading = !0, p(!1))
                          }, m.delay || 200)), n(m.timeout) && (f = setTimeout(function() {
                              f = null, t(e.resolved) && v(null)
                          }, m.timeout)))), c = !1, e.loading ? e.loadingComp : e.resolved
                      }
                  }(p = i, f))) return function(e, t, n, r, i) {
                  var o = ve();
                  return o.asyncFactory = e, o.asyncMeta = {
                      data: t,
                      context: n,
                      children: r,
                      tag: i
                  }, o
              }(p, a, s, c, l);
              a = a || {}, $n(i), n(a.model) && function(e, t) {
                  var r = e.model && e.model.prop || "value",
                      i = e.model && e.model.event || "input";
                  (t.attrs || (t.attrs = {}))[r] = t.model.value;
                  var o = t.on || (t.on = {}),
                      a = o[i],
                      s = t.model.callback;
                  n(a) ? (Array.isArray(a) ? -1 === a.indexOf(s) : a !== s) && (o[i] = [s].concat(a)) : o[i] = s
              }(i.options, a);
              var d = function(e, r, i) {
                  var o = r.options.props;
                  if (!t(o)) {
                      var a = {},
                          s = e.attrs,
                          c = e.props;
                      if (n(s) || n(c))
                          for (var u in o) {
                              var l = C(u);
                              ot(a, c, u, l, !0) || ot(a, s, u, l, !1)
                          }
                      return a
                  }
              }(a, i);
              if (r(i.options.functional)) return function(t, r, i, o, a) {
                  var s = t.options,
                      c = {},
                      u = s.props;
                  if (n(u))
                      for (var l in u) c[l] = Me(l, u, r || e);
                  else n(i.attrs) && Nt(c, i.attrs), n(i.props) && Nt(c, i.props);
                  var f = new Tt(i, c, a, o, t),
                      p = s.render.call(null, f._c, f);
                  if (p instanceof pe) return Et(p, i, f.parent, s);
                  if (Array.isArray(p)) {
                      for (var d = at(p) || [], v = new Array(d.length), h = 0; h < d.length; h++) v[h] = Et(d[h], i, f.parent, s);
                      return v
                  }
              }(i, d, a, s, c);
              var v = a.on;
              if (a.on = a.nativeOn, r(i.options.abstract)) {
                  var m = a.slot;
                  a = {}, m && (a.slot = m)
              }! function(e) {
                  for (var t = e.hook || (e.hook = {}), n = 0; n < Dt.length; n++) {
                      var r = Dt[n],
                          i = t[r],
                          o = jt[r];
                      i === o || i && i._merged || (t[r] = i ? Mt(o, i) : o)
                  }
              }(a);
              var y = i.options.name || l;
              return new pe("vue-component-" + i.cid + (y ? "-" + y : ""), a, void 0, void 0, void 0, s, {
                  Ctor: i,
                  propsData: d,
                  listeners: v,
                  tag: l,
                  children: c
              }, p)
          }
      }
  }

  function Mt(e, t) {
      var n = function(n, r) {
          e(n, r), t(n, r)
      };
      return n._merged = !0, n
  }
  var It = 1,
      Ft = 2;

  function Pt(e, a, s, c, u, l) {
      return (Array.isArray(s) || i(s)) && (u = c, c = s, s = void 0), r(l) && (u = Ft),
          function(e, i, a, s, c) {
              if (n(a) && n(a.__ob__)) return ve();
              n(a) && n(a.is) && (i = a.is);
              if (!i) return ve();
              Array.isArray(s) && "function" == typeof s[0] && ((a = a || {}).scopedSlots = {
                  default: s[0]
              }, s.length = 0);
              c === Ft ? s = at(s) : c === It && (s = function(e) {
                  for (var t = 0; t < e.length; t++)
                      if (Array.isArray(e[t])) return Array.prototype.concat.apply([], e);
                  return e
              }(s));
              var u, l;
              if ("string" == typeof i) {
                  var f;
                  l = e.$vnode && e.$vnode.ns || F.getTagNamespace(i), u = F.isReservedTag(i) ? new pe(F.parsePlatformTagName(i), a, s, void 0, void 0, e) : a && a.pre || !n(f = Le(e.$options, "components", i)) ? new pe(i, a, s, void 0, void 0, e) : Lt(f, a, e, s, i)
              } else u = Lt(i, a, e, s);
              return Array.isArray(u) ? u : n(u) ? (n(l) && function e(i, o, a) {
                  i.ns = o;
                  "foreignObject" === i.tag && (o = void 0, a = !0);
                  if (n(i.children))
                      for (var s = 0, c = i.children.length; s < c; s++) {
                          var u = i.children[s];
                          n(u.tag) && (t(u.ns) || r(a) && "svg" !== u.tag) && e(u, o, a)
                      }
              }(u, l), n(a) && function(e) {
                  o(e.style) && et(e.style);
                  o(e.class) && et(e.class)
              }(a), u) : ve()
          }(e, a, s, c, u)
  }
  var Rt, Ht = null;

  function Bt(e, t) {
      return (e.__esModule || oe && "Module" === e[Symbol.toStringTag]) && (e = e.default), o(e) ? t.extend(e) : e
  }

  function Ut(e) {
      return e.isComment && e.asyncFactory
  }

  function zt(e) {
      if (Array.isArray(e))
          for (var t = 0; t < e.length; t++) {
              var r = e[t];
              if (n(r) && (n(r.componentOptions) || Ut(r))) return r
          }
  }

  function Vt(e, t) {
      Rt.$on(e, t)
  }

  function Kt(e, t) {
      Rt.$off(e, t)
  }

  function Jt(e, t) {
      var n = Rt;
      return function r() {
          null !== t.apply(null, arguments) && n.$off(e, r)
      }
  }

  function qt(e, t, n) {
      Rt = e, rt(t, n || {}, Vt, Kt, Jt, e), Rt = void 0
  }
  var Wt = null;

  function Zt(e) {
      var t = Wt;
      return Wt = e,
          function() {
              Wt = t
          }
  }

  function Gt(e) {
      for (; e && (e = e.$parent);)
          if (e._inactive) return !0;
      return !1
  }

  function Xt(e, t) {
      if (t) {
          if (e._directInactive = !1, Gt(e)) return
      } else if (e._directInactive) return;
      if (e._inactive || null === e._inactive) {
          e._inactive = !1;
          for (var n = 0; n < e.$children.length; n++) Xt(e.$children[n]);
          Yt(e, "activated")
      }
  }

  function Yt(e, t) {
      le();
      var n = e.$options[t],
          r = t + " hook";
      if (n)
          for (var i = 0, o = n.length; i < o; i++) He(n[i], e, null, e, r);
      e._hasHookEvent && e.$emit("hook:" + t), fe()
  }
  var Qt = [],
      en = [],
      tn = {},
      nn = !1,
      rn = !1,
      on = 0;
  var an = 0,
      sn = Date.now;
  if (z && !q) {
      var cn = window.performance;
      cn && "function" == typeof cn.now && sn() > document.createEvent("Event").timeStamp && (sn = function() {
          return cn.now()
      })
  }

  function un() {
      var e, t;
      for (an = sn(), rn = !0, Qt.sort(function(e, t) {
              return e.id - t.id
          }), on = 0; on < Qt.length; on++)(e = Qt[on]).before && e.before(), t = e.id, tn[t] = null, e.run();
      var n = en.slice(),
          r = Qt.slice();
      on = Qt.length = en.length = 0, tn = {}, nn = rn = !1,
          function(e) {
              for (var t = 0; t < e.length; t++) e[t]._inactive = !0, Xt(e[t], !0)
          }(n),
          function(e) {
              var t = e.length;
              for (; t--;) {
                  var n = e[t],
                      r = n.vm;
                  r._watcher === n && r._isMounted && !r._isDestroyed && Yt(r, "updated")
              }
          }(r), ne && F.devtools && ne.emit("flush")
  }
  var ln = 0,
      fn = function(e, t, n, r, i) {
          this.vm = e, i && (e._watcher = this), e._watchers.push(this), r ? (this.deep = !!r.deep, this.user = !!r.user, this.lazy = !!r.lazy, this.sync = !!r.sync, this.before = r.before) : this.deep = this.user = this.lazy = this.sync = !1, this.cb = n, this.id = ++ln, this.active = !0, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new ie, this.newDepIds = new ie, this.expression = "", "function" == typeof t ? this.getter = t : (this.getter = function(e) {
              if (!H.test(e)) {
                  var t = e.split(".");
                  return function(e) {
                      for (var n = 0; n < t.length; n++) {
                          if (!e) return;
                          e = e[t[n]]
                      }
                      return e
                  }
              }
          }(t), this.getter || (this.getter = S)), this.value = this.lazy ? void 0 : this.get()
      };
  fn.prototype.get = function() {
      var e;
      le(this);
      var t = this.vm;
      try {
          e = this.getter.call(t, t)
      } catch (e) {
          if (!this.user) throw e;
          Re(e, t, 'getter for watcher "' + this.expression + '"')
      } finally {
          this.deep && et(e), fe(), this.cleanupDeps()
      }
      return e
  }, fn.prototype.addDep = function(e) {
      var t = e.id;
      this.newDepIds.has(t) || (this.newDepIds.add(t), this.newDeps.push(e), this.depIds.has(t) || e.addSub(this))
  }, fn.prototype.cleanupDeps = function() {
      for (var e = this.deps.length; e--;) {
          var t = this.deps[e];
          this.newDepIds.has(t.id) || t.removeSub(this)
      }
      var n = this.depIds;
      this.depIds = this.newDepIds, this.newDepIds = n, this.newDepIds.clear(), n = this.deps, this.deps = this.newDeps, this.newDeps = n, this.newDeps.length = 0
  }, fn.prototype.update = function() {
      this.lazy ? this.dirty = !0 : this.sync ? this.run() : function(e) {
          var t = e.id;
          if (null == tn[t]) {
              if (tn[t] = !0, rn) {
                  for (var n = Qt.length - 1; n > on && Qt[n].id > e.id;) n--;
                  Qt.splice(n + 1, 0, e)
              } else Qt.push(e);
              nn || (nn = !0, Ye(un))
          }
      }(this)
  }, fn.prototype.run = function() {
      if (this.active) {
          var e = this.get();
          if (e !== this.value || o(e) || this.deep) {
              var t = this.value;
              if (this.value = e, this.user) try {
                  this.cb.call(this.vm, e, t)
              } catch (e) {
                  Re(e, this.vm, 'callback for watcher "' + this.expression + '"')
              } else this.cb.call(this.vm, e, t)
          }
      }
  }, fn.prototype.evaluate = function() {
      this.value = this.get(), this.dirty = !1
  }, fn.prototype.depend = function() {
      for (var e = this.deps.length; e--;) this.deps[e].depend()
  }, fn.prototype.teardown = function() {
      if (this.active) {
          this.vm._isBeingDestroyed || h(this.vm._watchers, this);
          for (var e = this.deps.length; e--;) this.deps[e].removeSub(this);
          this.active = !1
      }
  };
  var pn = {
      enumerable: !0,
      configurable: !0,
      get: S,
      set: S
  };

  function dn(e, t, n) {
      pn.get = function() {
          return this[t][n]
      }, pn.set = function(e) {
          this[t][n] = e
      }, Object.defineProperty(e, n, pn)
  }

  function vn(e) {
      e._watchers = [];
      var t = e.$options;
      t.props && function(e, t) {
          var n = e.$options.propsData || {},
              r = e._props = {},
              i = e.$options._propKeys = [];
          e.$parent && $e(!1);
          var o = function(o) {
              i.push(o);
              var a = Me(o, t, n, e);
              xe(r, o, a), o in e || dn(e, "_props", o)
          };
          for (var a in t) o(a);
          $e(!0)
      }(e, t.props), t.methods && function(e, t) {
          e.$options.props;
          for (var n in t) e[n] = "function" != typeof t[n] ? S : x(t[n], e)
      }(e, t.methods), t.data ? function(e) {
          var t = e.$options.data;
          s(t = e._data = "function" == typeof t ? function(e, t) {
              le();
              try {
                  return e.call(t, t)
              } catch (e) {
                  return Re(e, t, "data()"), {}
              } finally {
                  fe()
              }
          }(t, e) : t || {}) || (t = {});
          var n = Object.keys(t),
              r = e.$options.props,
              i = (e.$options.methods, n.length);
          for (; i--;) {
              var o = n[i];
              r && y(r, o) || (a = void 0, 36 !== (a = (o + "").charCodeAt(0)) && 95 !== a && dn(e, "_data", o))
          }
          var a;
          Ce(t, !0)
      }(e) : Ce(e._data = {}, !0), t.computed && function(e, t) {
          var n = e._computedWatchers = Object.create(null),
              r = te();
          for (var i in t) {
              var o = t[i],
                  a = "function" == typeof o ? o : o.get;
              r || (n[i] = new fn(e, a || S, S, hn)), i in e || mn(e, i, o)
          }
      }(e, t.computed), t.watch && t.watch !== Y && function(e, t) {
          for (var n in t) {
              var r = t[n];
              if (Array.isArray(r))
                  for (var i = 0; i < r.length; i++) _n(e, n, r[i]);
              else _n(e, n, r)
          }
      }(e, t.watch)
  }
  var hn = {
      lazy: !0
  };

  function mn(e, t, n) {
      var r = !te();
      "function" == typeof n ? (pn.get = r ? yn(t) : gn(n), pn.set = S) : (pn.get = n.get ? r && !1 !== n.cache ? yn(t) : gn(n.get) : S, pn.set = n.set || S), Object.defineProperty(e, t, pn)
  }

  function yn(e) {
      return function() {
          var t = this._computedWatchers && this._computedWatchers[e];
          if (t) return t.dirty && t.evaluate(), ce.target && t.depend(), t.value
      }
  }

  function gn(e) {
      return function() {
          return e.call(this, this)
      }
  }

  function _n(e, t, n, r) {
      return s(n) && (r = n, n = n.handler), "string" == typeof n && (n = e[n]), e.$watch(t, n, r)
  }
  var bn = 0;

  function $n(e) {
      var t = e.options;
      if (e.super) {
          var n = $n(e.super);
          if (n !== e.superOptions) {
              e.superOptions = n;
              var r = function(e) {
                  var t, n = e.options,
                      r = e.sealedOptions;
                  for (var i in n) n[i] !== r[i] && (t || (t = {}), t[i] = n[i]);
                  return t
              }(e);
              r && A(e.extendOptions, r), (t = e.options = De(n, e.extendOptions)).name && (t.components[t.name] = e)
          }
      }
      return t
  }

  function wn(e) {
      this._init(e)
  }

  function Cn(e) {
      e.cid = 0;
      var t = 1;
      e.extend = function(e) {
          e = e || {};
          var n = this,
              r = n.cid,
              i = e._Ctor || (e._Ctor = {});
          if (i[r]) return i[r];
          var o = e.name || n.options.name,
              a = function(e) {
                  this._init(e)
              };
          return (a.prototype = Object.create(n.prototype)).constructor = a, a.cid = t++, a.options = De(n.options, e), a.super = n, a.options.props && function(e) {
              var t = e.options.props;
              for (var n in t) dn(e.prototype, "_props", n)
          }(a), a.options.computed && function(e) {
              var t = e.options.computed;
              for (var n in t) mn(e.prototype, n, t[n])
          }(a), a.extend = n.extend, a.mixin = n.mixin, a.use = n.use, M.forEach(function(e) {
              a[e] = n[e]
          }), o && (a.options.components[o] = a), a.superOptions = n.options, a.extendOptions = e, a.sealedOptions = A({}, a.options), i[r] = a, a
      }
  }

  function xn(e) {
      return e && (e.Ctor.options.name || e.tag)
  }

  function kn(e, t) {
      return Array.isArray(e) ? e.indexOf(t) > -1 : "string" == typeof e ? e.split(",").indexOf(t) > -1 : (n = e, "[object RegExp]" === a.call(n) && e.test(t));
      var n
  }

  function An(e, t) {
      var n = e.cache,
          r = e.keys,
          i = e._vnode;
      for (var o in n) {
          var a = n[o];
          if (a) {
              var s = xn(a.componentOptions);
              s && !t(s) && On(n, o, r, i)
          }
      }
  }

  function On(e, t, n, r) {
      var i = e[t];
      !i || r && i.tag === r.tag || i.componentInstance.$destroy(), e[t] = null, h(n, t)
  }! function(t) {
      t.prototype._init = function(t) {
          var n = this;
          n._uid = bn++, n._isVue = !0, t && t._isComponent ? function(e, t) {
                  var n = e.$options = Object.create(e.constructor.options),
                      r = t._parentVnode;
                  n.parent = t.parent, n._parentVnode = r;
                  var i = r.componentOptions;
                  n.propsData = i.propsData, n._parentListeners = i.listeners, n._renderChildren = i.children, n._componentTag = i.tag, t.render && (n.render = t.render, n.staticRenderFns = t.staticRenderFns)
              }(n, t) : n.$options = De($n(n.constructor), t || {}, n), n._renderProxy = n, n._self = n,
              function(e) {
                  var t = e.$options,
                      n = t.parent;
                  if (n && !t.abstract) {
                      for (; n.$options.abstract && n.$parent;) n = n.$parent;
                      n.$children.push(e)
                  }
                  e.$parent = n, e.$root = n ? n.$root : e, e.$children = [], e.$refs = {}, e._watcher = null, e._inactive = null, e._directInactive = !1, e._isMounted = !1, e._isDestroyed = !1, e._isBeingDestroyed = !1
              }(n),
              function(e) {
                  e._events = Object.create(null), e._hasHookEvent = !1;
                  var t = e.$options._parentListeners;
                  t && qt(e, t)
              }(n),
              function(t) {
                  t._vnode = null, t._staticTrees = null;
                  var n = t.$options,
                      r = t.$vnode = n._parentVnode,
                      i = r && r.context;
                  t.$slots = ut(n._renderChildren, i), t.$scopedSlots = e, t._c = function(e, n, r, i) {
                      return Pt(t, e, n, r, i, !1)
                  }, t.$createElement = function(e, n, r, i) {
                      return Pt(t, e, n, r, i, !0)
                  };
                  var o = r && r.data;
                  xe(t, "$attrs", o && o.attrs || e, null, !0), xe(t, "$listeners", n._parentListeners || e, null, !0)
              }(n), Yt(n, "beforeCreate"),
              function(e) {
                  var t = ct(e.$options.inject, e);
                  t && ($e(!1), Object.keys(t).forEach(function(n) {
                      xe(e, n, t[n])
                  }), $e(!0))
              }(n), vn(n),
              function(e) {
                  var t = e.$options.provide;
                  t && (e._provided = "function" == typeof t ? t.call(e) : t)
              }(n), Yt(n, "created"), n.$options.el && n.$mount(n.$options.el)
      }
  }(wn),
  function(e) {
      var t = {
              get: function() {
                  return this._data
              }
          },
          n = {
              get: function() {
                  return this._props
              }
          };
      Object.defineProperty(e.prototype, "$data", t), Object.defineProperty(e.prototype, "$props", n), e.prototype.$set = ke, e.prototype.$delete = Ae, e.prototype.$watch = function(e, t, n) {
          if (s(t)) return _n(this, e, t, n);
          (n = n || {}).user = !0;
          var r = new fn(this, e, t, n);
          if (n.immediate) try {
              t.call(this, r.value)
          } catch (e) {
              Re(e, this, 'callback for immediate watcher "' + r.expression + '"')
          }
          return function() {
              r.teardown()
          }
      }
  }(wn),
  function(e) {
      var t = /^hook:/;
      e.prototype.$on = function(e, n) {
          var r = this;
          if (Array.isArray(e))
              for (var i = 0, o = e.length; i < o; i++) r.$on(e[i], n);
          else(r._events[e] || (r._events[e] = [])).push(n), t.test(e) && (r._hasHookEvent = !0);
          return r
      }, e.prototype.$once = function(e, t) {
          var n = this;

          function r() {
              n.$off(e, r), t.apply(n, arguments)
          }
          return r.fn = t, n.$on(e, r), n
      }, e.prototype.$off = function(e, t) {
          var n = this;
          if (!arguments.length) return n._events = Object.create(null), n;
          if (Array.isArray(e)) {
              for (var r = 0, i = e.length; r < i; r++) n.$off(e[r], t);
              return n
          }
          var o, a = n._events[e];
          if (!a) return n;
          if (!t) return n._events[e] = null, n;
          for (var s = a.length; s--;)
              if ((o = a[s]) === t || o.fn === t) {
                  a.splice(s, 1);
                  break
              }
          return n
      }, e.prototype.$emit = function(e) {
          var t = this._events[e];
          if (t) {
              t = t.length > 1 ? k(t) : t;
              for (var n = k(arguments, 1), r = 'event handler for "' + e + '"', i = 0, o = t.length; i < o; i++) He(t[i], this, n, this, r)
          }
          return this
      }
  }(wn),
  function(e) {
      e.prototype._update = function(e, t) {
          var n = this,
              r = n.$el,
              i = n._vnode,
              o = Zt(n);
          n._vnode = e, n.$el = i ? n.__patch__(i, e) : n.__patch__(n.$el, e, t, !1), o(), r && (r.__vue__ = null), n.$el && (n.$el.__vue__ = n), n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el)
      }, e.prototype.$forceUpdate = function() {
          this._watcher && this._watcher.update()
      }, e.prototype.$destroy = function() {
          var e = this;
          if (!e._isBeingDestroyed) {
              Yt(e, "beforeDestroy"), e._isBeingDestroyed = !0;
              var t = e.$parent;
              !t || t._isBeingDestroyed || e.$options.abstract || h(t.$children, e), e._watcher && e._watcher.teardown();
              for (var n = e._watchers.length; n--;) e._watchers[n].teardown();
              e._data.__ob__ && e._data.__ob__.vmCount--, e._isDestroyed = !0, e.__patch__(e._vnode, null), Yt(e, "destroyed"), e.$off(), e.$el && (e.$el.__vue__ = null), e.$vnode && (e.$vnode.parent = null)
          }
      }
  }(wn),
  function(e) {
      St(e.prototype), e.prototype.$nextTick = function(e) {
          return Ye(e, this)
      }, e.prototype._render = function() {
          var e, t = this,
              n = t.$options,
              r = n.render,
              i = n._parentVnode;
          i && (t.$scopedSlots = ft(i.data.scopedSlots, t.$slots, t.$scopedSlots)), t.$vnode = i;
          try {
              Ht = t, e = r.call(t._renderProxy, t.$createElement)
          } catch (n) {
              Re(n, t, "render"), e = t._vnode
          } finally {
              Ht = null
          }
          return Array.isArray(e) && 1 === e.length && (e = e[0]), e instanceof pe || (e = ve()), e.parent = i, e
      }
  }(wn);
  var Sn = [String, RegExp, Array],
      Tn = {
          KeepAlive: {
              name: "keep-alive",
              abstract: !0,
              props: {
                  include: Sn,
                  exclude: Sn,
                  max: [String, Number]
              },
              created: function() {
                  this.cache = Object.create(null), this.keys = []
              },
              destroyed: function() {
                  for (var e in this.cache) On(this.cache, e, this.keys)
              },
              mounted: function() {
                  var e = this;
                  this.$watch("include", function(t) {
                      An(e, function(e) {
                          return kn(t, e)
                      })
                  }), this.$watch("exclude", function(t) {
                      An(e, function(e) {
                          return !kn(t, e)
                      })
                  })
              },
              render: function() {
                  var e = this.$slots.default,
                      t = zt(e),
                      n = t && t.componentOptions;
                  if (n) {
                      var r = xn(n),
                          i = this.include,
                          o = this.exclude;
                      if (i && (!r || !kn(i, r)) || o && r && kn(o, r)) return t;
                      var a = this.cache,
                          s = this.keys,
                          c = null == t.key ? n.Ctor.cid + (n.tag ? "::" + n.tag : "") : t.key;
                      a[c] ? (t.componentInstance = a[c].componentInstance, h(s, c), s.push(c)) : (a[c] = t, s.push(c), this.max && s.length > parseInt(this.max) && On(a, s[0], s, this._vnode)), t.data.keepAlive = !0
                  }
                  return t || e && e[0]
              }
          }
      };
  ! function(e) {
      var t = {
          get: function() {
              return F
          }
      };
      Object.defineProperty(e, "config", t), e.util = {
              warn: ae,
              extend: A,
              mergeOptions: De,
              defineReactive: xe
          }, e.set = ke, e.delete = Ae, e.nextTick = Ye, e.observable = function(e) {
              return Ce(e), e
          }, e.options = Object.create(null), M.forEach(function(t) {
              e.options[t + "s"] = Object.create(null)
          }), e.options._base = e, A(e.options.components, Tn),
          function(e) {
              e.use = function(e) {
                  var t = this._installedPlugins || (this._installedPlugins = []);
                  if (t.indexOf(e) > -1) return this;
                  var n = k(arguments, 1);
                  return n.unshift(this), "function" == typeof e.install ? e.install.apply(e, n) : "function" == typeof e && e.apply(null, n), t.push(e), this
              }
          }(e),
          function(e) {
              e.mixin = function(e) {
                  return this.options = De(this.options, e), this
              }
          }(e), Cn(e),
          function(e) {
              M.forEach(function(t) {
                  e[t] = function(e, n) {
                      return n ? ("component" === t && s(n) && (n.name = n.name || e, n = this.options._base.extend(n)), "directive" === t && "function" == typeof n && (n = {
                          bind: n,
                          update: n
                      }), this.options[t + "s"][e] = n, n) : this.options[t + "s"][e]
                  }
              })
          }(e)
  }(wn), Object.defineProperty(wn.prototype, "$isServer", {
      get: te
  }), Object.defineProperty(wn.prototype, "$ssrContext", {
      get: function() {
          return this.$vnode && this.$vnode.ssrContext
      }
  }), Object.defineProperty(wn, "FunctionalRenderContext", {
      value: Tt
  }), wn.version = "2.6.11";
  var En = p("style,class"),
      Nn = p("input,textarea,option,select,progress"),
      jn = function(e, t, n) {
          return "value" === n && Nn(e) && "button" !== t || "selected" === n && "option" === e || "checked" === n && "input" === e || "muted" === n && "video" === e
      },
      Dn = p("contenteditable,draggable,spellcheck"),
      Ln = p("events,caret,typing,plaintext-only"),
      Mn = function(e, t) {
          return Hn(t) || "false" === t ? "false" : "contenteditable" === e && Ln(t) ? t : "true"
      },
      In = p("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),
      Fn = "http://www.w3.org/1999/xlink",
      Pn = function(e) {
          return ":" === e.charAt(5) && "xlink" === e.slice(0, 5)
      },
      Rn = function(e) {
          return Pn(e) ? e.slice(6, e.length) : ""
      },
      Hn = function(e) {
          return null == e || !1 === e
      };

  function Bn(e) {
      for (var t = e.data, r = e, i = e; n(i.componentInstance);)(i = i.componentInstance._vnode) && i.data && (t = Un(i.data, t));
      for (; n(r = r.parent);) r && r.data && (t = Un(t, r.data));
      return function(e, t) {
          if (n(e) || n(t)) return zn(e, Vn(t));
          return ""
      }(t.staticClass, t.class)
  }

  function Un(e, t) {
      return {
          staticClass: zn(e.staticClass, t.staticClass),
          class: n(e.class) ? [e.class, t.class] : t.class
      }
  }

  function zn(e, t) {
      return e ? t ? e + " " + t : e : t || ""
  }

  function Vn(e) {
      return Array.isArray(e) ? function(e) {
          for (var t, r = "", i = 0, o = e.length; i < o; i++) n(t = Vn(e[i])) && "" !== t && (r && (r += " "), r += t);
          return r
      }(e) : o(e) ? function(e) {
          var t = "";
          for (var n in e) e[n] && (t && (t += " "), t += n);
          return t
      }(e) : "string" == typeof e ? e : ""
  }
  var Kn = {
          svg: "http://www.w3.org/2000/svg",
          math: "http://www.w3.org/1998/Math/MathML"
      },
      Jn = p("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),
      qn = p("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0),
      Wn = function(e) {
          return Jn(e) || qn(e)
      };

  function Zn(e) {
      return qn(e) ? "svg" : "math" === e ? "math" : void 0
  }
  var Gn = Object.create(null);
  var Xn = p("text,number,password,search,email,tel,url");

  function Yn(e) {
      if ("string" == typeof e) {
          var t = document.querySelector(e);
          return t || document.createElement("div")
      }
      return e
  }
  var Qn = Object.freeze({
          createElement: function(e, t) {
              var n = document.createElement(e);
              return "select" !== e ? n : (t.data && t.data.attrs && void 0 !== t.data.attrs.multiple && n.setAttribute("multiple", "multiple"), n)
          },
          createElementNS: function(e, t) {
              return document.createElementNS(Kn[e], t)
          },
          createTextNode: function(e) {
              return document.createTextNode(e)
          },
          createComment: function(e) {
              return document.createComment(e)
          },
          insertBefore: function(e, t, n) {
              e.insertBefore(t, n)
          },
          removeChild: function(e, t) {
              e.removeChild(t)
          },
          appendChild: function(e, t) {
              e.appendChild(t)
          },
          parentNode: function(e) {
              return e.parentNode
          },
          nextSibling: function(e) {
              return e.nextSibling
          },
          tagName: function(e) {
              return e.tagName
          },
          setTextContent: function(e, t) {
              e.textContent = t
          },
          setStyleScope: function(e, t) {
              e.setAttribute(t, "")
          }
      }),
      er = {
          create: function(e, t) {
              tr(t)
          },
          update: function(e, t) {
              e.data.ref !== t.data.ref && (tr(e, !0), tr(t))
          },
          destroy: function(e) {
              tr(e, !0)
          }
      };

  function tr(e, t) {
      var r = e.data.ref;
      if (n(r)) {
          var i = e.context,
              o = e.componentInstance || e.elm,
              a = i.$refs;
          t ? Array.isArray(a[r]) ? h(a[r], o) : a[r] === o && (a[r] = void 0) : e.data.refInFor ? Array.isArray(a[r]) ? a[r].indexOf(o) < 0 && a[r].push(o) : a[r] = [o] : a[r] = o
      }
  }
  var nr = new pe("", {}, []),
      rr = ["create", "activate", "update", "remove", "destroy"];

  function ir(e, i) {
      return e.key === i.key && (e.tag === i.tag && e.isComment === i.isComment && n(e.data) === n(i.data) && function(e, t) {
          if ("input" !== e.tag) return !0;
          var r, i = n(r = e.data) && n(r = r.attrs) && r.type,
              o = n(r = t.data) && n(r = r.attrs) && r.type;
          return i === o || Xn(i) && Xn(o)
      }(e, i) || r(e.isAsyncPlaceholder) && e.asyncFactory === i.asyncFactory && t(i.asyncFactory.error))
  }

  function or(e, t, r) {
      var i, o, a = {};
      for (i = t; i <= r; ++i) n(o = e[i].key) && (a[o] = i);
      return a
  }
  var ar = {
      create: sr,
      update: sr,
      destroy: function(e) {
          sr(e, nr)
      }
  };

  function sr(e, t) {
      (e.data.directives || t.data.directives) && function(e, t) {
          var n, r, i, o = e === nr,
              a = t === nr,
              s = ur(e.data.directives, e.context),
              c = ur(t.data.directives, t.context),
              u = [],
              l = [];
          for (n in c) r = s[n], i = c[n], r ? (i.oldValue = r.value, i.oldArg = r.arg, fr(i, "update", t, e), i.def && i.def.componentUpdated && l.push(i)) : (fr(i, "bind", t, e), i.def && i.def.inserted && u.push(i));
          if (u.length) {
              var f = function() {
                  for (var n = 0; n < u.length; n++) fr(u[n], "inserted", t, e)
              };
              o ? it(t, "insert", f) : f()
          }
          l.length && it(t, "postpatch", function() {
              for (var n = 0; n < l.length; n++) fr(l[n], "componentUpdated", t, e)
          });
          if (!o)
              for (n in s) c[n] || fr(s[n], "unbind", e, e, a)
      }(e, t)
  }
  var cr = Object.create(null);

  function ur(e, t) {
      var n, r, i = Object.create(null);
      if (!e) return i;
      for (n = 0; n < e.length; n++)(r = e[n]).modifiers || (r.modifiers = cr), i[lr(r)] = r, r.def = Le(t.$options, "directives", r.name);
      return i
  }

  function lr(e) {
      return e.rawName || e.name + "." + Object.keys(e.modifiers || {}).join(".")
  }

  function fr(e, t, n, r, i) {
      var o = e.def && e.def[t];
      if (o) try {
          o(n.elm, e, n, r, i)
      } catch (r) {
          Re(r, n.context, "directive " + e.name + " " + t + " hook")
      }
  }
  var pr = [er, ar];

  function dr(e, r) {
      var i = r.componentOptions;
      if (!(n(i) && !1 === i.Ctor.options.inheritAttrs || t(e.data.attrs) && t(r.data.attrs))) {
          var o, a, s = r.elm,
              c = e.data.attrs || {},
              u = r.data.attrs || {};
          for (o in n(u.__ob__) && (u = r.data.attrs = A({}, u)), u) a = u[o], c[o] !== a && vr(s, o, a);
          for (o in (q || Z) && u.value !== c.value && vr(s, "value", u.value), c) t(u[o]) && (Pn(o) ? s.removeAttributeNS(Fn, Rn(o)) : Dn(o) || s.removeAttribute(o))
      }
  }

  function vr(e, t, n) {
      e.tagName.indexOf("-") > -1 ? hr(e, t, n) : In(t) ? Hn(n) ? e.removeAttribute(t) : (n = "allowfullscreen" === t && "EMBED" === e.tagName ? "true" : t, e.setAttribute(t, n)) : Dn(t) ? e.setAttribute(t, Mn(t, n)) : Pn(t) ? Hn(n) ? e.removeAttributeNS(Fn, Rn(t)) : e.setAttributeNS(Fn, t, n) : hr(e, t, n)
  }

  function hr(e, t, n) {
      if (Hn(n)) e.removeAttribute(t);
      else {
          if (q && !W && "TEXTAREA" === e.tagName && "placeholder" === t && "" !== n && !e.__ieph) {
              var r = function(t) {
                  t.stopImmediatePropagation(), e.removeEventListener("input", r)
              };
              e.addEventListener("input", r), e.__ieph = !0
          }
          e.setAttribute(t, n)
      }
  }
  var mr = {
      create: dr,
      update: dr
  };

  function yr(e, r) {
      var i = r.elm,
          o = r.data,
          a = e.data;
      if (!(t(o.staticClass) && t(o.class) && (t(a) || t(a.staticClass) && t(a.class)))) {
          var s = Bn(r),
              c = i._transitionClasses;
          n(c) && (s = zn(s, Vn(c))), s !== i._prevClass && (i.setAttribute("class", s), i._prevClass = s)
      }
  }
  var gr, _r, br, $r, wr, Cr, xr = {
          create: yr,
          update: yr
      },
      kr = /[\w).+\-_$\]]/;

  function Ar(e) {
      var t, n, r, i, o, a = !1,
          s = !1,
          c = !1,
          u = !1,
          l = 0,
          f = 0,
          p = 0,
          d = 0;
      for (r = 0; r < e.length; r++)
          if (n = t, t = e.charCodeAt(r), a) 39 === t && 92 !== n && (a = !1);
          else if (s) 34 === t && 92 !== n && (s = !1);
      else if (c) 96 === t && 92 !== n && (c = !1);
      else if (u) 47 === t && 92 !== n && (u = !1);
      else if (124 !== t || 124 === e.charCodeAt(r + 1) || 124 === e.charCodeAt(r - 1) || l || f || p) {
          switch (t) {
              case 34:
                  s = !0;
                  break;
              case 39:
                  a = !0;
                  break;
              case 96:
                  c = !0;
                  break;
              case 40:
                  p++;
                  break;
              case 41:
                  p--;
                  break;
              case 91:
                  f++;
                  break;
              case 93:
                  f--;
                  break;
              case 123:
                  l++;
                  break;
              case 125:
                  l--
          }
          if (47 === t) {
              for (var v = r - 1, h = void 0; v >= 0 && " " === (h = e.charAt(v)); v--);
              h && kr.test(h) || (u = !0)
          }
      } else void 0 === i ? (d = r + 1, i = e.slice(0, r).trim()) : m();

      function m() {
          (o || (o = [])).push(e.slice(d, r).trim()), d = r + 1
      }
      if (void 0 === i ? i = e.slice(0, r).trim() : 0 !== d && m(), o)
          for (r = 0; r < o.length; r++) i = Or(i, o[r]);
      return i
  }

  function Or(e, t) {
      var n = t.indexOf("(");
      if (n < 0) return '_f("' + t + '")(' + e + ")";
      var r = t.slice(0, n),
          i = t.slice(n + 1);
      return '_f("' + r + '")(' + e + (")" !== i ? "," + i : i)
  }

  function Sr(e, t) {
      console.error("[Vue compiler]: " + e)
  }

  function Tr(e, t) {
      return e ? e.map(function(e) {
          return e[t]
      }).filter(function(e) {
          return e
      }) : []
  }

  function Er(e, t, n, r, i) {
      (e.props || (e.props = [])).push(Rr({
          name: t,
          value: n,
          dynamic: i
      }, r)), e.plain = !1
  }

  function Nr(e, t, n, r, i) {
      (i ? e.dynamicAttrs || (e.dynamicAttrs = []) : e.attrs || (e.attrs = [])).push(Rr({
          name: t,
          value: n,
          dynamic: i
      }, r)), e.plain = !1
  }

  function jr(e, t, n, r) {
      e.attrsMap[t] = n, e.attrsList.push(Rr({
          name: t,
          value: n
      }, r))
  }

  function Dr(e, t, n, r, i, o, a, s) {
      (e.directives || (e.directives = [])).push(Rr({
          name: t,
          rawName: n,
          value: r,
          arg: i,
          isDynamicArg: o,
          modifiers: a
      }, s)), e.plain = !1
  }

  function Lr(e, t, n) {
      return n ? "_p(" + t + ',"' + e + '")' : e + t
  }

  function Mr(t, n, r, i, o, a, s, c) {
      var u;
      (i = i || e).right ? c ? n = "(" + n + ")==='click'?'contextmenu':(" + n + ")" : "click" === n && (n = "contextmenu", delete i.right) : i.middle && (c ? n = "(" + n + ")==='click'?'mouseup':(" + n + ")" : "click" === n && (n = "mouseup")), i.capture && (delete i.capture, n = Lr("!", n, c)), i.once && (delete i.once, n = Lr("~", n, c)), i.passive && (delete i.passive, n = Lr("&", n, c)), i.native ? (delete i.native, u = t.nativeEvents || (t.nativeEvents = {})) : u = t.events || (t.events = {});
      var l = Rr({
          value: r.trim(),
          dynamic: c
      }, s);
      i !== e && (l.modifiers = i);
      var f = u[n];
      Array.isArray(f) ? o ? f.unshift(l) : f.push(l) : u[n] = f ? o ? [l, f] : [f, l] : l, t.plain = !1
  }

  function Ir(e, t, n) {
      var r = Fr(e, ":" + t) || Fr(e, "v-bind:" + t);
      if (null != r) return Ar(r);
      if (!1 !== n) {
          var i = Fr(e, t);
          if (null != i) return JSON.stringify(i)
      }
  }

  function Fr(e, t, n) {
      var r;
      if (null != (r = e.attrsMap[t]))
          for (var i = e.attrsList, o = 0, a = i.length; o < a; o++)
              if (i[o].name === t) {
                  i.splice(o, 1);
                  break
              }
      return n && delete e.attrsMap[t], r
  }

  function Pr(e, t) {
      for (var n = e.attrsList, r = 0, i = n.length; r < i; r++) {
          var o = n[r];
          if (t.test(o.name)) return n.splice(r, 1), o
      }
  }

  function Rr(e, t) {
      return t && (null != t.start && (e.start = t.start), null != t.end && (e.end = t.end)), e
  }

  function Hr(e, t, n) {
      var r = n || {},
          i = r.number,
          o = "$$v";
      r.trim && (o = "(typeof $$v === 'string'? $$v.trim(): $$v)"), i && (o = "_n(" + o + ")");
      var a = Br(t, o);
      e.model = {
          value: "(" + t + ")",
          expression: JSON.stringify(t),
          callback: "function ($$v) {" + a + "}"
      }
  }

  function Br(e, t) {
      var n = function(e) {
          if (e = e.trim(), gr = e.length, e.indexOf("[") < 0 || e.lastIndexOf("]") < gr - 1) return ($r = e.lastIndexOf(".")) > -1 ? {
              exp: e.slice(0, $r),
              key: '"' + e.slice($r + 1) + '"'
          } : {
              exp: e,
              key: null
          };
          _r = e, $r = wr = Cr = 0;
          for (; !zr();) Vr(br = Ur()) ? Jr(br) : 91 === br && Kr(br);
          return {
              exp: e.slice(0, wr),
              key: e.slice(wr + 1, Cr)
          }
      }(e);
      return null === n.key ? e + "=" + t : "$set(" + n.exp + ", " + n.key + ", " + t + ")"
  }

  function Ur() {
      return _r.charCodeAt(++$r)
  }

  function zr() {
      return $r >= gr
  }

  function Vr(e) {
      return 34 === e || 39 === e
  }

  function Kr(e) {
      var t = 1;
      for (wr = $r; !zr();)
          if (Vr(e = Ur())) Jr(e);
          else if (91 === e && t++, 93 === e && t--, 0 === t) {
          Cr = $r;
          break
      }
  }

  function Jr(e) {
      for (var t = e; !zr() && (e = Ur()) !== t;);
  }
  var qr, Wr = "__r",
      Zr = "__c";

  function Gr(e, t, n) {
      var r = qr;
      return function i() {
          null !== t.apply(null, arguments) && Qr(e, i, n, r)
      }
  }
  var Xr = Ve && !(X && Number(X[1]) <= 53);

  function Yr(e, t, n, r) {
      if (Xr) {
          var i = an,
              o = t;
          t = o._wrapper = function(e) {
              if (e.target === e.currentTarget || e.timeStamp >= i || e.timeStamp <= 0 || e.target.ownerDocument !== document) return o.apply(this, arguments)
          }
      }
      qr.addEventListener(e, t, Q ? {
          capture: n,
          passive: r
      } : n)
  }

  function Qr(e, t, n, r) {
      (r || qr).removeEventListener(e, t._wrapper || t, n)
  }

  function ei(e, r) {
      if (!t(e.data.on) || !t(r.data.on)) {
          var i = r.data.on || {},
              o = e.data.on || {};
          qr = r.elm,
              function(e) {
                  if (n(e[Wr])) {
                      var t = q ? "change" : "input";
                      e[t] = [].concat(e[Wr], e[t] || []), delete e[Wr]
                  }
                  n(e[Zr]) && (e.change = [].concat(e[Zr], e.change || []), delete e[Zr])
              }(i), rt(i, o, Yr, Qr, Gr, r.context), qr = void 0
      }
  }
  var ti, ni = {
      create: ei,
      update: ei
  };

  function ri(e, r) {
      if (!t(e.data.domProps) || !t(r.data.domProps)) {
          var i, o, a = r.elm,
              s = e.data.domProps || {},
              c = r.data.domProps || {};
          for (i in n(c.__ob__) && (c = r.data.domProps = A({}, c)), s) i in c || (a[i] = "");
          for (i in c) {
              if (o = c[i], "textContent" === i || "innerHTML" === i) {
                  if (r.children && (r.children.length = 0), o === s[i]) continue;
                  1 === a.childNodes.length && a.removeChild(a.childNodes[0])
              }
              if ("value" === i && "PROGRESS" !== a.tagName) {
                  a._value = o;
                  var u = t(o) ? "" : String(o);
                  ii(a, u) && (a.value = u)
              } else if ("innerHTML" === i && qn(a.tagName) && t(a.innerHTML)) {
                  (ti = ti || document.createElement("div")).innerHTML = "<svg>" + o + "</svg>";
                  for (var l = ti.firstChild; a.firstChild;) a.removeChild(a.firstChild);
                  for (; l.firstChild;) a.appendChild(l.firstChild)
              } else if (o !== s[i]) try {
                  a[i] = o
              } catch (e) {}
          }
      }
  }

  function ii(e, t) {
      return !e.composing && ("OPTION" === e.tagName || function(e, t) {
          var n = !0;
          try {
              n = document.activeElement !== e
          } catch (e) {}
          return n && e.value !== t
      }(e, t) || function(e, t) {
          var r = e.value,
              i = e._vModifiers;
          if (n(i)) {
              if (i.number) return f(r) !== f(t);
              if (i.trim) return r.trim() !== t.trim()
          }
          return r !== t
      }(e, t))
  }
  var oi = {
          create: ri,
          update: ri
      },
      ai = g(function(e) {
          var t = {},
              n = /:(.+)/;
          return e.split(/;(?![^(]*\))/g).forEach(function(e) {
              if (e) {
                  var r = e.split(n);
                  r.length > 1 && (t[r[0].trim()] = r[1].trim())
              }
          }), t
      });

  function si(e) {
      var t = ci(e.style);
      return e.staticStyle ? A(e.staticStyle, t) : t
  }

  function ci(e) {
      return Array.isArray(e) ? O(e) : "string" == typeof e ? ai(e) : e
  }
  var ui, li = /^--/,
      fi = /\s*!important$/,
      pi = function(e, t, n) {
          if (li.test(t)) e.style.setProperty(t, n);
          else if (fi.test(n)) e.style.setProperty(C(t), n.replace(fi, ""), "important");
          else {
              var r = vi(t);
              if (Array.isArray(n))
                  for (var i = 0, o = n.length; i < o; i++) e.style[r] = n[i];
              else e.style[r] = n
          }
      },
      di = ["Webkit", "Moz", "ms"],
      vi = g(function(e) {
          if (ui = ui || document.createElement("div").style, "filter" !== (e = b(e)) && e in ui) return e;
          for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < di.length; n++) {
              var r = di[n] + t;
              if (r in ui) return r
          }
      });

  function hi(e, r) {
      var i = r.data,
          o = e.data;
      if (!(t(i.staticStyle) && t(i.style) && t(o.staticStyle) && t(o.style))) {
          var a, s, c = r.elm,
              u = o.staticStyle,
              l = o.normalizedStyle || o.style || {},
              f = u || l,
              p = ci(r.data.style) || {};
          r.data.normalizedStyle = n(p.__ob__) ? A({}, p) : p;
          var d = function(e, t) {
              var n, r = {};
              if (t)
                  for (var i = e; i.componentInstance;)(i = i.componentInstance._vnode) && i.data && (n = si(i.data)) && A(r, n);
              (n = si(e.data)) && A(r, n);
              for (var o = e; o = o.parent;) o.data && (n = si(o.data)) && A(r, n);
              return r
          }(r, !0);
          for (s in f) t(d[s]) && pi(c, s, "");
          for (s in d)(a = d[s]) !== f[s] && pi(c, s, null == a ? "" : a)
      }
  }
  var mi = {
          create: hi,
          update: hi
      },
      yi = /\s+/;

  function gi(e, t) {
      if (t && (t = t.trim()))
          if (e.classList) t.indexOf(" ") > -1 ? t.split(yi).forEach(function(t) {
              return e.classList.add(t)
          }) : e.classList.add(t);
          else {
              var n = " " + (e.getAttribute("class") || "") + " ";
              n.indexOf(" " + t + " ") < 0 && e.setAttribute("class", (n + t).trim())
          }
  }

  function _i(e, t) {
      if (t && (t = t.trim()))
          if (e.classList) t.indexOf(" ") > -1 ? t.split(yi).forEach(function(t) {
              return e.classList.remove(t)
          }) : e.classList.remove(t), e.classList.length || e.removeAttribute("class");
          else {
              for (var n = " " + (e.getAttribute("class") || "") + " ", r = " " + t + " "; n.indexOf(r) >= 0;) n = n.replace(r, " ");
              (n = n.trim()) ? e.setAttribute("class", n): e.removeAttribute("class")
          }
  }

  function bi(e) {
      if (e) {
          if ("object" == typeof e) {
              var t = {};
              return !1 !== e.css && A(t, $i(e.name || "v")), A(t, e), t
          }
          return "string" == typeof e ? $i(e) : void 0
      }
  }
  var $i = g(function(e) {
          return {
              enterClass: e + "-enter",
              enterToClass: e + "-enter-to",
              enterActiveClass: e + "-enter-active",
              leaveClass: e + "-leave",
              leaveToClass: e + "-leave-to",
              leaveActiveClass: e + "-leave-active"
          }
      }),
      wi = z && !W,
      Ci = "transition",
      xi = "animation",
      ki = "transition",
      Ai = "transitionend",
      Oi = "animation",
      Si = "animationend";
  wi && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (ki = "WebkitTransition", Ai = "webkitTransitionEnd"), void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (Oi = "WebkitAnimation", Si = "webkitAnimationEnd"));
  var Ti = z ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : function(e) {
      return e()
  };

  function Ei(e) {
      Ti(function() {
          Ti(e)
      })
  }

  function Ni(e, t) {
      var n = e._transitionClasses || (e._transitionClasses = []);
      n.indexOf(t) < 0 && (n.push(t), gi(e, t))
  }

  function ji(e, t) {
      e._transitionClasses && h(e._transitionClasses, t), _i(e, t)
  }

  function Di(e, t, n) {
      var r = Mi(e, t),
          i = r.type,
          o = r.timeout,
          a = r.propCount;
      if (!i) return n();
      var s = i === Ci ? Ai : Si,
          c = 0,
          u = function() {
              e.removeEventListener(s, l), n()
          },
          l = function(t) {
              t.target === e && ++c >= a && u()
          };
      setTimeout(function() {
          c < a && u()
      }, o + 1), e.addEventListener(s, l)
  }
  var Li = /\b(transform|all)(,|$)/;

  function Mi(e, t) {
      var n, r = window.getComputedStyle(e),
          i = (r[ki + "Delay"] || "").split(", "),
          o = (r[ki + "Duration"] || "").split(", "),
          a = Ii(i, o),
          s = (r[Oi + "Delay"] || "").split(", "),
          c = (r[Oi + "Duration"] || "").split(", "),
          u = Ii(s, c),
          l = 0,
          f = 0;
      return t === Ci ? a > 0 && (n = Ci, l = a, f = o.length) : t === xi ? u > 0 && (n = xi, l = u, f = c.length) : f = (n = (l = Math.max(a, u)) > 0 ? a > u ? Ci : xi : null) ? n === Ci ? o.length : c.length : 0, {
          type: n,
          timeout: l,
          propCount: f,
          hasTransform: n === Ci && Li.test(r[ki + "Property"])
      }
  }

  function Ii(e, t) {
      for (; e.length < t.length;) e = e.concat(e);
      return Math.max.apply(null, t.map(function(t, n) {
          return Fi(t) + Fi(e[n])
      }))
  }

  function Fi(e) {
      return 1e3 * Number(e.slice(0, -1).replace(",", "."))
  }

  function Pi(e, r) {
      var i = e.elm;
      n(i._leaveCb) && (i._leaveCb.cancelled = !0, i._leaveCb());
      var a = bi(e.data.transition);
      if (!t(a) && !n(i._enterCb) && 1 === i.nodeType) {
          for (var s = a.css, c = a.type, u = a.enterClass, l = a.enterToClass, p = a.enterActiveClass, d = a.appearClass, v = a.appearToClass, h = a.appearActiveClass, m = a.beforeEnter, y = a.enter, g = a.afterEnter, _ = a.enterCancelled, b = a.beforeAppear, $ = a.appear, w = a.afterAppear, C = a.appearCancelled, x = a.duration, k = Wt, A = Wt.$vnode; A && A.parent;) k = A.context, A = A.parent;
          var O = !k._isMounted || !e.isRootInsert;
          if (!O || $ || "" === $) {
              var S = O && d ? d : u,
                  T = O && h ? h : p,
                  E = O && v ? v : l,
                  N = O && b || m,
                  j = O && "function" == typeof $ ? $ : y,
                  L = O && w || g,
                  M = O && C || _,
                  I = f(o(x) ? x.enter : x),
                  F = !1 !== s && !W,
                  P = Bi(j),
                  R = i._enterCb = D(function() {
                      F && (ji(i, E), ji(i, T)), R.cancelled ? (F && ji(i, S), M && M(i)) : L && L(i), i._enterCb = null
                  });
              e.data.show || it(e, "insert", function() {
                  var t = i.parentNode,
                      n = t && t._pending && t._pending[e.key];
                  n && n.tag === e.tag && n.elm._leaveCb && n.elm._leaveCb(), j && j(i, R)
              }), N && N(i), F && (Ni(i, S), Ni(i, T), Ei(function() {
                  ji(i, S), R.cancelled || (Ni(i, E), P || (Hi(I) ? setTimeout(R, I) : Di(i, c, R)))
              })), e.data.show && (r && r(), j && j(i, R)), F || P || R()
          }
      }
  }

  function Ri(e, r) {
      var i = e.elm;
      n(i._enterCb) && (i._enterCb.cancelled = !0, i._enterCb());
      var a = bi(e.data.transition);
      if (t(a) || 1 !== i.nodeType) return r();
      if (!n(i._leaveCb)) {
          var s = a.css,
              c = a.type,
              u = a.leaveClass,
              l = a.leaveToClass,
              p = a.leaveActiveClass,
              d = a.beforeLeave,
              v = a.leave,
              h = a.afterLeave,
              m = a.leaveCancelled,
              y = a.delayLeave,
              g = a.duration,
              _ = !1 !== s && !W,
              b = Bi(v),
              $ = f(o(g) ? g.leave : g),
              w = i._leaveCb = D(function() {
                  i.parentNode && i.parentNode._pending && (i.parentNode._pending[e.key] = null), _ && (ji(i, l), ji(i, p)), w.cancelled ? (_ && ji(i, u), m && m(i)) : (r(), h && h(i)), i._leaveCb = null
              });
          y ? y(C) : C()
      }

      function C() {
          w.cancelled || (!e.data.show && i.parentNode && ((i.parentNode._pending || (i.parentNode._pending = {}))[e.key] = e), d && d(i), _ && (Ni(i, u), Ni(i, p), Ei(function() {
              ji(i, u), w.cancelled || (Ni(i, l), b || (Hi($) ? setTimeout(w, $) : Di(i, c, w)))
          })), v && v(i, w), _ || b || w())
      }
  }

  function Hi(e) {
      return "number" == typeof e && !isNaN(e)
  }

  function Bi(e) {
      if (t(e)) return !1;
      var r = e.fns;
      return n(r) ? Bi(Array.isArray(r) ? r[0] : r) : (e._length || e.length) > 1
  }

  function Ui(e, t) {
      !0 !== t.data.show && Pi(t)
  }
  var zi = function(e) {
      var o, a, s = {},
          c = e.modules,
          u = e.nodeOps;
      for (o = 0; o < rr.length; ++o)
          for (s[rr[o]] = [], a = 0; a < c.length; ++a) n(c[a][rr[o]]) && s[rr[o]].push(c[a][rr[o]]);

      function l(e) {
          var t = u.parentNode(e);
          n(t) && u.removeChild(t, e)
      }

      function f(e, t, i, o, a, c, l) {
          if (n(e.elm) && n(c) && (e = c[l] = me(e)), e.isRootInsert = !a, ! function(e, t, i, o) {
                  var a = e.data;
                  if (n(a)) {
                      var c = n(e.componentInstance) && a.keepAlive;
                      if (n(a = a.hook) && n(a = a.init) && a(e, !1), n(e.componentInstance)) return d(e, t), v(i, e.elm, o), r(c) && function(e, t, r, i) {
                          for (var o, a = e; a.componentInstance;)
                              if (a = a.componentInstance._vnode, n(o = a.data) && n(o = o.transition)) {
                                  for (o = 0; o < s.activate.length; ++o) s.activate[o](nr, a);
                                  t.push(a);
                                  break
                              }
                          v(r, e.elm, i)
                      }(e, t, i, o), !0
                  }
              }(e, t, i, o)) {
              var f = e.data,
                  p = e.children,
                  m = e.tag;
              n(m) ? (e.elm = e.ns ? u.createElementNS(e.ns, m) : u.createElement(m, e), g(e), h(e, p, t), n(f) && y(e, t), v(i, e.elm, o)) : r(e.isComment) ? (e.elm = u.createComment(e.text), v(i, e.elm, o)) : (e.elm = u.createTextNode(e.text), v(i, e.elm, o))
          }
      }

      function d(e, t) {
          n(e.data.pendingInsert) && (t.push.apply(t, e.data.pendingInsert), e.data.pendingInsert = null), e.elm = e.componentInstance.$el, m(e) ? (y(e, t), g(e)) : (tr(e), t.push(e))
      }

      function v(e, t, r) {
          n(e) && (n(r) ? u.parentNode(r) === e && u.insertBefore(e, t, r) : u.appendChild(e, t))
      }

      function h(e, t, n) {
          if (Array.isArray(t))
              for (var r = 0; r < t.length; ++r) f(t[r], n, e.elm, null, !0, t, r);
          else i(e.text) && u.appendChild(e.elm, u.createTextNode(String(e.text)))
      }

      function m(e) {
          for (; e.componentInstance;) e = e.componentInstance._vnode;
          return n(e.tag)
      }

      function y(e, t) {
          for (var r = 0; r < s.create.length; ++r) s.create[r](nr, e);
          n(o = e.data.hook) && (n(o.create) && o.create(nr, e), n(o.insert) && t.push(e))
      }

      function g(e) {
          var t;
          if (n(t = e.fnScopeId)) u.setStyleScope(e.elm, t);
          else
              for (var r = e; r;) n(t = r.context) && n(t = t.$options._scopeId) && u.setStyleScope(e.elm, t), r = r.parent;
          n(t = Wt) && t !== e.context && t !== e.fnContext && n(t = t.$options._scopeId) && u.setStyleScope(e.elm, t)
      }

      function _(e, t, n, r, i, o) {
          for (; r <= i; ++r) f(n[r], o, e, t, !1, n, r)
      }

      function b(e) {
          var t, r, i = e.data;
          if (n(i))
              for (n(t = i.hook) && n(t = t.destroy) && t(e), t = 0; t < s.destroy.length; ++t) s.destroy[t](e);
          if (n(t = e.children))
              for (r = 0; r < e.children.length; ++r) b(e.children[r])
      }

      function $(e, t, r) {
          for (; t <= r; ++t) {
              var i = e[t];
              n(i) && (n(i.tag) ? (w(i), b(i)) : l(i.elm))
          }
      }

      function w(e, t) {
          if (n(t) || n(e.data)) {
              var r, i = s.remove.length + 1;
              for (n(t) ? t.listeners += i : t = function(e, t) {
                      function n() {
                          0 == --n.listeners && l(e)
                      }
                      return n.listeners = t, n
                  }(e.elm, i), n(r = e.componentInstance) && n(r = r._vnode) && n(r.data) && w(r, t), r = 0; r < s.remove.length; ++r) s.remove[r](e, t);
              n(r = e.data.hook) && n(r = r.remove) ? r(e, t) : t()
          } else l(e.elm)
      }

      function C(e, t, r, i) {
          for (var o = r; o < i; o++) {
              var a = t[o];
              if (n(a) && ir(e, a)) return o
          }
      }

      function x(e, i, o, a, c, l) {
          if (e !== i) {
              n(i.elm) && n(a) && (i = a[c] = me(i));
              var p = i.elm = e.elm;
              if (r(e.isAsyncPlaceholder)) n(i.asyncFactory.resolved) ? O(e.elm, i, o) : i.isAsyncPlaceholder = !0;
              else if (r(i.isStatic) && r(e.isStatic) && i.key === e.key && (r(i.isCloned) || r(i.isOnce))) i.componentInstance = e.componentInstance;
              else {
                  var d, v = i.data;
                  n(v) && n(d = v.hook) && n(d = d.prepatch) && d(e, i);
                  var h = e.children,
                      y = i.children;
                  if (n(v) && m(i)) {
                      for (d = 0; d < s.update.length; ++d) s.update[d](e, i);
                      n(d = v.hook) && n(d = d.update) && d(e, i)
                  }
                  t(i.text) ? n(h) && n(y) ? h !== y && function(e, r, i, o, a) {
                      for (var s, c, l, p = 0, d = 0, v = r.length - 1, h = r[0], m = r[v], y = i.length - 1, g = i[0], b = i[y], w = !a; p <= v && d <= y;) t(h) ? h = r[++p] : t(m) ? m = r[--v] : ir(h, g) ? (x(h, g, o, i, d), h = r[++p], g = i[++d]) : ir(m, b) ? (x(m, b, o, i, y), m = r[--v], b = i[--y]) : ir(h, b) ? (x(h, b, o, i, y), w && u.insertBefore(e, h.elm, u.nextSibling(m.elm)), h = r[++p], b = i[--y]) : ir(m, g) ? (x(m, g, o, i, d), w && u.insertBefore(e, m.elm, h.elm), m = r[--v], g = i[++d]) : (t(s) && (s = or(r, p, v)), t(c = n(g.key) ? s[g.key] : C(g, r, p, v)) ? f(g, o, e, h.elm, !1, i, d) : ir(l = r[c], g) ? (x(l, g, o, i, d), r[c] = void 0, w && u.insertBefore(e, l.elm, h.elm)) : f(g, o, e, h.elm, !1, i, d), g = i[++d]);
                      p > v ? _(e, t(i[y + 1]) ? null : i[y + 1].elm, i, d, y, o) : d > y && $(r, p, v)
                  }(p, h, y, o, l) : n(y) ? (n(e.text) && u.setTextContent(p, ""), _(p, null, y, 0, y.length - 1, o)) : n(h) ? $(h, 0, h.length - 1) : n(e.text) && u.setTextContent(p, "") : e.text !== i.text && u.setTextContent(p, i.text), n(v) && n(d = v.hook) && n(d = d.postpatch) && d(e, i)
              }
          }
      }

      function k(e, t, i) {
          if (r(i) && n(e.parent)) e.parent.data.pendingInsert = t;
          else
              for (var o = 0; o < t.length; ++o) t[o].data.hook.insert(t[o])
      }
      var A = p("attrs,class,staticClass,staticStyle,key");

      function O(e, t, i, o) {
          var a, s = t.tag,
              c = t.data,
              u = t.children;
          if (o = o || c && c.pre, t.elm = e, r(t.isComment) && n(t.asyncFactory)) return t.isAsyncPlaceholder = !0, !0;
          if (n(c) && (n(a = c.hook) && n(a = a.init) && a(t, !0), n(a = t.componentInstance))) return d(t, i), !0;
          if (n(s)) {
              if (n(u))
                  if (e.hasChildNodes())
                      if (n(a = c) && n(a = a.domProps) && n(a = a.innerHTML)) {
                          if (a !== e.innerHTML) return !1
                      } else {
                          for (var l = !0, f = e.firstChild, p = 0; p < u.length; p++) {
                              if (!f || !O(f, u[p], i, o)) {
                                  l = !1;
                                  break
                              }
                              f = f.nextSibling
                          }
                          if (!l || f) return !1
                      } else h(t, u, i);
              if (n(c)) {
                  var v = !1;
                  for (var m in c)
                      if (!A(m)) {
                          v = !0, y(t, i);
                          break
                      }!v && c.class && et(c.class)
              }
          } else e.data !== t.text && (e.data = t.text);
          return !0
      }
      return function(e, i, o, a) {
          if (!t(i)) {
              var c, l = !1,
                  p = [];
              if (t(e)) l = !0, f(i, p);
              else {
                  var d = n(e.nodeType);
                  if (!d && ir(e, i)) x(e, i, p, null, null, a);
                  else {
                      if (d) {
                          if (1 === e.nodeType && e.hasAttribute(L) && (e.removeAttribute(L), o = !0), r(o) && O(e, i, p)) return k(i, p, !0), e;
                          c = e, e = new pe(u.tagName(c).toLowerCase(), {}, [], void 0, c)
                      }
                      var v = e.elm,
                          h = u.parentNode(v);
                      if (f(i, p, v._leaveCb ? null : h, u.nextSibling(v)), n(i.parent))
                          for (var y = i.parent, g = m(i); y;) {
                              for (var _ = 0; _ < s.destroy.length; ++_) s.destroy[_](y);
                              if (y.elm = i.elm, g) {
                                  for (var w = 0; w < s.create.length; ++w) s.create[w](nr, y);
                                  var C = y.data.hook.insert;
                                  if (C.merged)
                                      for (var A = 1; A < C.fns.length; A++) C.fns[A]()
                              } else tr(y);
                              y = y.parent
                          }
                      n(h) ? $([e], 0, 0) : n(e.tag) && b(e)
                  }
              }
              return k(i, p, l), i.elm
          }
          n(e) && b(e)
      }
  }({
      nodeOps: Qn,
      modules: [mr, xr, ni, oi, mi, z ? {
          create: Ui,
          activate: Ui,
          remove: function(e, t) {
              !0 !== e.data.show ? Ri(e, t) : t()
          }
      } : {}].concat(pr)
  });
  W && document.addEventListener("selectionchange", function() {
      var e = document.activeElement;
      e && e.vmodel && Xi(e, "input")
  });
  var Vi = {
      inserted: function(e, t, n, r) {
          "select" === n.tag ? (r.elm && !r.elm._vOptions ? it(n, "postpatch", function() {
              Vi.componentUpdated(e, t, n)
          }) : Ki(e, t, n.context), e._vOptions = [].map.call(e.options, Wi)) : ("textarea" === n.tag || Xn(e.type)) && (e._vModifiers = t.modifiers, t.modifiers.lazy || (e.addEventListener("compositionstart", Zi), e.addEventListener("compositionend", Gi), e.addEventListener("change", Gi), W && (e.vmodel = !0)))
      },
      componentUpdated: function(e, t, n) {
          if ("select" === n.tag) {
              Ki(e, t, n.context);
              var r = e._vOptions,
                  i = e._vOptions = [].map.call(e.options, Wi);
              if (i.some(function(e, t) {
                      return !N(e, r[t])
                  }))(e.multiple ? t.value.some(function(e) {
                  return qi(e, i)
              }) : t.value !== t.oldValue && qi(t.value, i)) && Xi(e, "change")
          }
      }
  };

  function Ki(e, t, n) {
      Ji(e, t, n), (q || Z) && setTimeout(function() {
          Ji(e, t, n)
      }, 0)
  }

  function Ji(e, t, n) {
      var r = t.value,
          i = e.multiple;
      if (!i || Array.isArray(r)) {
          for (var o, a, s = 0, c = e.options.length; s < c; s++)
              if (a = e.options[s], i) o = j(r, Wi(a)) > -1, a.selected !== o && (a.selected = o);
              else if (N(Wi(a), r)) return void(e.selectedIndex !== s && (e.selectedIndex = s));
          i || (e.selectedIndex = -1)
      }
  }

  function qi(e, t) {
      return t.every(function(t) {
          return !N(t, e)
      })
  }

  function Wi(e) {
      return "_value" in e ? e._value : e.value
  }

  function Zi(e) {
      e.target.composing = !0
  }

  function Gi(e) {
      e.target.composing && (e.target.composing = !1, Xi(e.target, "input"))
  }

  function Xi(e, t) {
      var n = document.createEvent("HTMLEvents");
      n.initEvent(t, !0, !0), e.dispatchEvent(n)
  }

  function Yi(e) {
      return !e.componentInstance || e.data && e.data.transition ? e : Yi(e.componentInstance._vnode)
  }
  var Qi = {
          model: Vi,
          show: {
              bind: function(e, t, n) {
                  var r = t.value,
                      i = (n = Yi(n)).data && n.data.transition,
                      o = e.__vOriginalDisplay = "none" === e.style.display ? "" : e.style.display;
                  r && i ? (n.data.show = !0, Pi(n, function() {
                      e.style.display = o
                  })) : e.style.display = r ? o : "none"
              },
              update: function(e, t, n) {
                  var r = t.value;
                  !r != !t.oldValue && ((n = Yi(n)).data && n.data.transition ? (n.data.show = !0, r ? Pi(n, function() {
                      e.style.display = e.__vOriginalDisplay
                  }) : Ri(n, function() {
                      e.style.display = "none"
                  })) : e.style.display = r ? e.__vOriginalDisplay : "none")
              },
              unbind: function(e, t, n, r, i) {
                  i || (e.style.display = e.__vOriginalDisplay)
              }
          }
      },
      eo = {
          name: String,
          appear: Boolean,
          css: Boolean,
          mode: String,
          type: String,
          enterClass: String,
          leaveClass: String,
          enterToClass: String,
          leaveToClass: String,
          enterActiveClass: String,
          leaveActiveClass: String,
          appearClass: String,
          appearActiveClass: String,
          appearToClass: String,
          duration: [Number, String, Object]
      };

  function to(e) {
      var t = e && e.componentOptions;
      return t && t.Ctor.options.abstract ? to(zt(t.children)) : e
  }

  function no(e) {
      var t = {},
          n = e.$options;
      for (var r in n.propsData) t[r] = e[r];
      var i = n._parentListeners;
      for (var o in i) t[b(o)] = i[o];
      return t
  }

  function ro(e, t) {
      if (/\d-keep-alive$/.test(t.tag)) return e("keep-alive", {
          props: t.componentOptions.propsData
      })
  }
  var io = function(e) {
          return e.tag || Ut(e)
      },
      oo = function(e) {
          return "show" === e.name
      },
      ao = {
          name: "transition",
          props: eo,
          abstract: !0,
          render: function(e) {
              var t = this,
                  n = this.$slots.default;
              if (n && (n = n.filter(io)).length) {
                  var r = this.mode,
                      o = n[0];
                  if (function(e) {
                          for (; e = e.parent;)
                              if (e.data.transition) return !0
                      }(this.$vnode)) return o;
                  var a = to(o);
                  if (!a) return o;
                  if (this._leaving) return ro(e, o);
                  var s = "__transition-" + this._uid + "-";
                  a.key = null == a.key ? a.isComment ? s + "comment" : s + a.tag : i(a.key) ? 0 === String(a.key).indexOf(s) ? a.key : s + a.key : a.key;
                  var c = (a.data || (a.data = {})).transition = no(this),
                      u = this._vnode,
                      l = to(u);
                  if (a.data.directives && a.data.directives.some(oo) && (a.data.show = !0), l && l.data && ! function(e, t) {
                          return t.key === e.key && t.tag === e.tag
                      }(a, l) && !Ut(l) && (!l.componentInstance || !l.componentInstance._vnode.isComment)) {
                      var f = l.data.transition = A({}, c);
                      if ("out-in" === r) return this._leaving = !0, it(f, "afterLeave", function() {
                          t._leaving = !1, t.$forceUpdate()
                      }), ro(e, o);
                      if ("in-out" === r) {
                          if (Ut(a)) return u;
                          var p, d = function() {
                              p()
                          };
                          it(c, "afterEnter", d), it(c, "enterCancelled", d), it(f, "delayLeave", function(e) {
                              p = e
                          })
                      }
                  }
                  return o
              }
          }
      },
      so = A({
          tag: String,
          moveClass: String
      }, eo);

  function co(e) {
      e.elm._moveCb && e.elm._moveCb(), e.elm._enterCb && e.elm._enterCb()
  }

  function uo(e) {
      e.data.newPos = e.elm.getBoundingClientRect()
  }

  function lo(e) {
      var t = e.data.pos,
          n = e.data.newPos,
          r = t.left - n.left,
          i = t.top - n.top;
      if (r || i) {
          e.data.moved = !0;
          var o = e.elm.style;
          o.transform = o.WebkitTransform = "translate(" + r + "px," + i + "px)", o.transitionDuration = "0s"
      }
  }
  delete so.mode;
  var fo = {
      Transition: ao,
      TransitionGroup: {
          props: so,
          beforeMount: function() {
              var e = this,
                  t = this._update;
              this._update = function(n, r) {
                  var i = Zt(e);
                  e.__patch__(e._vnode, e.kept, !1, !0), e._vnode = e.kept, i(), t.call(e, n, r)
              }
          },
          render: function(e) {
              for (var t = this.tag || this.$vnode.data.tag || "span", n = Object.create(null), r = this.prevChildren = this.children, i = this.$slots.default || [], o = this.children = [], a = no(this), s = 0; s < i.length; s++) {
                  var c = i[s];
                  c.tag && null != c.key && 0 !== String(c.key).indexOf("__vlist") && (o.push(c), n[c.key] = c, (c.data || (c.data = {})).transition = a)
              }
              if (r) {
                  for (var u = [], l = [], f = 0; f < r.length; f++) {
                      var p = r[f];
                      p.data.transition = a, p.data.pos = p.elm.getBoundingClientRect(), n[p.key] ? u.push(p) : l.push(p)
                  }
                  this.kept = e(t, null, u), this.removed = l
              }
              return e(t, null, o)
          },
          updated: function() {
              var e = this.prevChildren,
                  t = this.moveClass || (this.name || "v") + "-move";
              e.length && this.hasMove(e[0].elm, t) && (e.forEach(co), e.forEach(uo), e.forEach(lo), this._reflow = document.body.offsetHeight, e.forEach(function(e) {
                  if (e.data.moved) {
                      var n = e.elm,
                          r = n.style;
                      Ni(n, t), r.transform = r.WebkitTransform = r.transitionDuration = "", n.addEventListener(Ai, n._moveCb = function e(r) {
                          r && r.target !== n || r && !/transform$/.test(r.propertyName) || (n.removeEventListener(Ai, e), n._moveCb = null, ji(n, t))
                      })
                  }
              }))
          },
          methods: {
              hasMove: function(e, t) {
                  if (!wi) return !1;
                  if (this._hasMove) return this._hasMove;
                  var n = e.cloneNode();
                  e._transitionClasses && e._transitionClasses.forEach(function(e) {
                      _i(n, e)
                  }), gi(n, t), n.style.display = "none", this.$el.appendChild(n);
                  var r = Mi(n);
                  return this.$el.removeChild(n), this._hasMove = r.hasTransform
              }
          }
      }
  };
  wn.config.mustUseProp = jn, wn.config.isReservedTag = Wn, wn.config.isReservedAttr = En, wn.config.getTagNamespace = Zn, wn.config.isUnknownElement = function(e) {
      if (!z) return !0;
      if (Wn(e)) return !1;
      if (e = e.toLowerCase(), null != Gn[e]) return Gn[e];
      var t = document.createElement(e);
      return e.indexOf("-") > -1 ? Gn[e] = t.constructor === window.HTMLUnknownElement || t.constructor === window.HTMLElement : Gn[e] = /HTMLUnknownElement/.test(t.toString())
  }, A(wn.options.directives, Qi), A(wn.options.components, fo), wn.prototype.__patch__ = z ? zi : S, wn.prototype.$mount = function(e, t) {
      return function(e, t, n) {
          var r;
          return e.$el = t, e.$options.render || (e.$options.render = ve), Yt(e, "beforeMount"), r = function() {
              e._update(e._render(), n)
          }, new fn(e, r, S, {
              before: function() {
                  e._isMounted && !e._isDestroyed && Yt(e, "beforeUpdate")
              }
          }, !0), n = !1, null == e.$vnode && (e._isMounted = !0, Yt(e, "mounted")), e
      }(this, e = e && z ? Yn(e) : void 0, t)
  }, z && setTimeout(function() {
      F.devtools && ne && ne.emit("init", wn)
  }, 0);
  var po = /\{\{((?:.|\r?\n)+?)\}\}/g,
      vo = /[-.*+?^${}()|[\]\/\\]/g,
      ho = g(function(e) {
          var t = e[0].replace(vo, "\\$&"),
              n = e[1].replace(vo, "\\$&");
          return new RegExp(t + "((?:.|\\n)+?)" + n, "g")
      });
  var mo = {
      staticKeys: ["staticClass"],
      transformNode: function(e, t) {
          t.warn;
          var n = Fr(e, "class");
          n && (e.staticClass = JSON.stringify(n));
          var r = Ir(e, "class", !1);
          r && (e.classBinding = r)
      },
      genData: function(e) {
          var t = "";
          return e.staticClass && (t += "staticClass:" + e.staticClass + ","), e.classBinding && (t += "class:" + e.classBinding + ","), t
      }
  };
  var yo, go = {
          staticKeys: ["staticStyle"],
          transformNode: function(e, t) {
              t.warn;
              var n = Fr(e, "style");
              n && (e.staticStyle = JSON.stringify(ai(n)));
              var r = Ir(e, "style", !1);
              r && (e.styleBinding = r)
          },
          genData: function(e) {
              var t = "";
              return e.staticStyle && (t += "staticStyle:" + e.staticStyle + ","), e.styleBinding && (t += "style:(" + e.styleBinding + "),"), t
          }
      },
      _o = function(e) {
          return (yo = yo || document.createElement("div")).innerHTML = e, yo.textContent
      },
      bo = p("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),
      $o = p("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),
      wo = p("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),
      Co = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,
      xo = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,
      ko = "[a-zA-Z_][\\-\\.0-9_a-zA-Z" + P.source + "]*",
      Ao = "((?:" + ko + "\\:)?" + ko + ")",
      Oo = new RegExp("^<" + Ao),
      So = /^\s*(\/?)>/,
      To = new RegExp("^<\\/" + Ao + "[^>]*>"),
      Eo = /^<!DOCTYPE [^>]+>/i,
      No = /^<!\--/,
      jo = /^<!\[/,
      Do = p("script,style,textarea", !0),
      Lo = {},
      Mo = {
          "&lt;": "<",
          "&gt;": ">",
          "&quot;": '"',
          "&amp;": "&",
          "&#10;": "\n",
          "&#9;": "\t",
          "&#39;": "'"
      },
      Io = /&(?:lt|gt|quot|amp|#39);/g,
      Fo = /&(?:lt|gt|quot|amp|#39|#10|#9);/g,
      Po = p("pre,textarea", !0),
      Ro = function(e, t) {
          return e && Po(e) && "\n" === t[0]
      };

  function Ho(e, t) {
      var n = t ? Fo : Io;
      return e.replace(n, function(e) {
          return Mo[e]
      })
  }
  var Bo, Uo, zo, Vo, Ko, Jo, qo, Wo, Zo = /^@|^v-on:/,
      Go = /^v-|^@|^:|^#/,
      Xo = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,
      Yo = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
      Qo = /^\(|\)$/g,
      ea = /^\[.*\]$/,
      ta = /:(.*)$/,
      na = /^:|^\.|^v-bind:/,
      ra = /\.[^.\]]+(?=[^\]]*$)/g,
      ia = /^v-slot(:|$)|^#/,
      oa = /[\r\n]/,
      aa = /\s+/g,
      sa = g(_o),
      ca = "_empty_";

  function ua(e, t, n) {
      return {
          type: 1,
          tag: e,
          attrsList: t,
          attrsMap: ma(t),
          rawAttrsMap: {},
          parent: n,
          children: []
      }
  }

  function la(e, t) {
      Bo = t.warn || Sr, Jo = t.isPreTag || T, qo = t.mustUseProp || T, Wo = t.getTagNamespace || T;
      t.isReservedTag;
      zo = Tr(t.modules, "transformNode"), Vo = Tr(t.modules, "preTransformNode"), Ko = Tr(t.modules, "postTransformNode"), Uo = t.delimiters;
      var n, r, i = [],
          o = !1 !== t.preserveWhitespace,
          a = t.whitespace,
          s = !1,
          c = !1;

      function u(e) {
          if (l(e), s || e.processed || (e = fa(e, t)), i.length || e === n || n.if && (e.elseif || e.else) && da(n, {
                  exp: e.elseif,
                  block: e
              }), r && !e.forbidden)
              if (e.elseif || e.else) a = e, (u = function(e) {
                  var t = e.length;
                  for (; t--;) {
                      if (1 === e[t].type) return e[t];
                      e.pop()
                  }
              }(r.children)) && u.if && da(u, {
                  exp: a.elseif,
                  block: a
              });
              else {
                  if (e.slotScope) {
                      var o = e.slotTarget || '"default"';
                      (r.scopedSlots || (r.scopedSlots = {}))[o] = e
                  }
                  r.children.push(e), e.parent = r
              }
          var a, u;
          e.children = e.children.filter(function(e) {
              return !e.slotScope
          }), l(e), e.pre && (s = !1), Jo(e.tag) && (c = !1);
          for (var f = 0; f < Ko.length; f++) Ko[f](e, t)
      }

      function l(e) {
          if (!c)
              for (var t;
                  (t = e.children[e.children.length - 1]) && 3 === t.type && " " === t.text;) e.children.pop()
      }
      return function(e, t) {
          for (var n, r, i = [], o = t.expectHTML, a = t.isUnaryTag || T, s = t.canBeLeftOpenTag || T, c = 0; e;) {
              if (n = e, r && Do(r)) {
                  var u = 0,
                      l = r.toLowerCase(),
                      f = Lo[l] || (Lo[l] = new RegExp("([\\s\\S]*?)(</" + l + "[^>]*>)", "i")),
                      p = e.replace(f, function(e, n, r) {
                          return u = r.length, Do(l) || "noscript" === l || (n = n.replace(/<!\--([\s\S]*?)-->/g, "$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g, "$1")), Ro(l, n) && (n = n.slice(1)), t.chars && t.chars(n), ""
                      });
                  c += e.length - p.length, e = p, A(l, c - u, c)
              } else {
                  var d = e.indexOf("<");
                  if (0 === d) {
                      if (No.test(e)) {
                          var v = e.indexOf("--\x3e");
                          if (v >= 0) {
                              t.shouldKeepComment && t.comment(e.substring(4, v), c, c + v + 3), C(v + 3);
                              continue
                          }
                      }
                      if (jo.test(e)) {
                          var h = e.indexOf("]>");
                          if (h >= 0) {
                              C(h + 2);
                              continue
                          }
                      }
                      var m = e.match(Eo);
                      if (m) {
                          C(m[0].length);
                          continue
                      }
                      var y = e.match(To);
                      if (y) {
                          var g = c;
                          C(y[0].length), A(y[1], g, c);
                          continue
                      }
                      var _ = x();
                      if (_) {
                          k(_), Ro(_.tagName, e) && C(1);
                          continue
                      }
                  }
                  var b = void 0,
                      $ = void 0,
                      w = void 0;
                  if (d >= 0) {
                      for ($ = e.slice(d); !(To.test($) || Oo.test($) || No.test($) || jo.test($) || (w = $.indexOf("<", 1)) < 0);) d += w, $ = e.slice(d);
                      b = e.substring(0, d)
                  }
                  d < 0 && (b = e), b && C(b.length), t.chars && b && t.chars(b, c - b.length, c)
              }
              if (e === n) {
                  t.chars && t.chars(e);
                  break
              }
          }

          function C(t) {
              c += t, e = e.substring(t)
          }

          function x() {
              var t = e.match(Oo);
              if (t) {
                  var n, r, i = {
                      tagName: t[1],
                      attrs: [],
                      start: c
                  };
                  for (C(t[0].length); !(n = e.match(So)) && (r = e.match(xo) || e.match(Co));) r.start = c, C(r[0].length), r.end = c, i.attrs.push(r);
                  if (n) return i.unarySlash = n[1], C(n[0].length), i.end = c, i
              }
          }

          function k(e) {
              var n = e.tagName,
                  c = e.unarySlash;
              o && ("p" === r && wo(n) && A(r), s(n) && r === n && A(n));
              for (var u = a(n) || !!c, l = e.attrs.length, f = new Array(l), p = 0; p < l; p++) {
                  var d = e.attrs[p],
                      v = d[3] || d[4] || d[5] || "",
                      h = "a" === n && "href" === d[1] ? t.shouldDecodeNewlinesForHref : t.shouldDecodeNewlines;
                  f[p] = {
                      name: d[1],
                      value: Ho(v, h)
                  }
              }
              u || (i.push({
                  tag: n,
                  lowerCasedTag: n.toLowerCase(),
                  attrs: f,
                  start: e.start,
                  end: e.end
              }), r = n), t.start && t.start(n, f, u, e.start, e.end)
          }

          function A(e, n, o) {
              var a, s;
              if (null == n && (n = c), null == o && (o = c), e)
                  for (s = e.toLowerCase(), a = i.length - 1; a >= 0 && i[a].lowerCasedTag !== s; a--);
              else a = 0;
              if (a >= 0) {
                  for (var u = i.length - 1; u >= a; u--) t.end && t.end(i[u].tag, n, o);
                  i.length = a, r = a && i[a - 1].tag
              } else "br" === s ? t.start && t.start(e, [], !0, n, o) : "p" === s && (t.start && t.start(e, [], !1, n, o), t.end && t.end(e, n, o))
          }
          A()
      }(e, {
          warn: Bo,
          expectHTML: t.expectHTML,
          isUnaryTag: t.isUnaryTag,
          canBeLeftOpenTag: t.canBeLeftOpenTag,
          shouldDecodeNewlines: t.shouldDecodeNewlines,
          shouldDecodeNewlinesForHref: t.shouldDecodeNewlinesForHref,
          shouldKeepComment: t.comments,
          outputSourceRange: t.outputSourceRange,
          start: function(e, o, a, l, f) {
              var p = r && r.ns || Wo(e);
              q && "svg" === p && (o = function(e) {
                  for (var t = [], n = 0; n < e.length; n++) {
                      var r = e[n];
                      ya.test(r.name) || (r.name = r.name.replace(ga, ""), t.push(r))
                  }
                  return t
              }(o));
              var d, v = ua(e, o, r);
              p && (v.ns = p), "style" !== (d = v).tag && ("script" !== d.tag || d.attrsMap.type && "text/javascript" !== d.attrsMap.type) || te() || (v.forbidden = !0);
              for (var h = 0; h < Vo.length; h++) v = Vo[h](v, t) || v;
              s || (! function(e) {
                  null != Fr(e, "v-pre") && (e.pre = !0)
              }(v), v.pre && (s = !0)), Jo(v.tag) && (c = !0), s ? function(e) {
                  var t = e.attrsList,
                      n = t.length;
                  if (n)
                      for (var r = e.attrs = new Array(n), i = 0; i < n; i++) r[i] = {
                          name: t[i].name,
                          value: JSON.stringify(t[i].value)
                      }, null != t[i].start && (r[i].start = t[i].start, r[i].end = t[i].end);
                  else e.pre || (e.plain = !0)
              }(v) : v.processed || (pa(v), function(e) {
                  var t = Fr(e, "v-if");
                  if (t) e.if = t, da(e, {
                      exp: t,
                      block: e
                  });
                  else {
                      null != Fr(e, "v-else") && (e.else = !0);
                      var n = Fr(e, "v-else-if");
                      n && (e.elseif = n)
                  }
              }(v), function(e) {
                  null != Fr(e, "v-once") && (e.once = !0)
              }(v)), n || (n = v), a ? u(v) : (r = v, i.push(v))
          },
          end: function(e, t, n) {
              var o = i[i.length - 1];
              i.length -= 1, r = i[i.length - 1], u(o)
          },
          chars: function(e, t, n) {
              if (r && (!q || "textarea" !== r.tag || r.attrsMap.placeholder !== e)) {
                  var i, u, l, f = r.children;
                  if (e = c || e.trim() ? "script" === (i = r).tag || "style" === i.tag ? e : sa(e) : f.length ? a ? "condense" === a && oa.test(e) ? "" : " " : o ? " " : "" : "") c || "condense" !== a || (e = e.replace(aa, " ")), !s && " " !== e && (u = function(e, t) {
                      var n = t ? ho(t) : po;
                      if (n.test(e)) {
                          for (var r, i, o, a = [], s = [], c = n.lastIndex = 0; r = n.exec(e);) {
                              (i = r.index) > c && (s.push(o = e.slice(c, i)), a.push(JSON.stringify(o)));
                              var u = Ar(r[1].trim());
                              a.push("_s(" + u + ")"), s.push({
                                  "@binding": u
                              }), c = i + r[0].length
                          }
                          return c < e.length && (s.push(o = e.slice(c)), a.push(JSON.stringify(o))), {
                              expression: a.join("+"),
                              tokens: s
                          }
                      }
                  }(e, Uo)) ? l = {
                      type: 2,
                      expression: u.expression,
                      tokens: u.tokens,
                      text: e
                  } : " " === e && f.length && " " === f[f.length - 1].text || (l = {
                      type: 3,
                      text: e
                  }), l && f.push(l)
              }
          },
          comment: function(e, t, n) {
              if (r) {
                  var i = {
                      type: 3,
                      text: e,
                      isComment: !0
                  };
                  r.children.push(i)
              }
          }
      }), n
  }

  function fa(e, t) {
      var n, r;
      (r = Ir(n = e, "key")) && (n.key = r), e.plain = !e.key && !e.scopedSlots && !e.attrsList.length,
          function(e) {
              var t = Ir(e, "ref");
              t && (e.ref = t, e.refInFor = function(e) {
                  var t = e;
                  for (; t;) {
                      if (void 0 !== t.for) return !0;
                      t = t.parent
                  }
                  return !1
              }(e))
          }(e),
          function(e) {
              var t;
              "template" === e.tag ? (t = Fr(e, "scope"), e.slotScope = t || Fr(e, "slot-scope")) : (t = Fr(e, "slot-scope")) && (e.slotScope = t);
              var n = Ir(e, "slot");
              n && (e.slotTarget = '""' === n ? '"default"' : n, e.slotTargetDynamic = !(!e.attrsMap[":slot"] && !e.attrsMap["v-bind:slot"]), "template" === e.tag || e.slotScope || Nr(e, "slot", n, function(e, t) {
                  return e.rawAttrsMap[":" + t] || e.rawAttrsMap["v-bind:" + t] || e.rawAttrsMap[t]
              }(e, "slot")));
              if ("template" === e.tag) {
                  var r = Pr(e, ia);
                  if (r) {
                      var i = va(r),
                          o = i.name,
                          a = i.dynamic;
                      e.slotTarget = o, e.slotTargetDynamic = a, e.slotScope = r.value || ca
                  }
              } else {
                  var s = Pr(e, ia);
                  if (s) {
                      var c = e.scopedSlots || (e.scopedSlots = {}),
                          u = va(s),
                          l = u.name,
                          f = u.dynamic,
                          p = c[l] = ua("template", [], e);
                      p.slotTarget = l, p.slotTargetDynamic = f, p.children = e.children.filter(function(e) {
                          if (!e.slotScope) return e.parent = p, !0
                      }), p.slotScope = s.value || ca, e.children = [], e.plain = !1
                  }
              }
          }(e),
          function(e) {
              "slot" === e.tag && (e.slotName = Ir(e, "name"))
          }(e),
          function(e) {
              var t;
              (t = Ir(e, "is")) && (e.component = t);
              null != Fr(e, "inline-template") && (e.inlineTemplate = !0)
          }(e);
      for (var i = 0; i < zo.length; i++) e = zo[i](e, t) || e;
      return function(e) {
          var t, n, r, i, o, a, s, c, u = e.attrsList;
          for (t = 0, n = u.length; t < n; t++)
              if (r = i = u[t].name, o = u[t].value, Go.test(r))
                  if (e.hasBindings = !0, (a = ha(r.replace(Go, ""))) && (r = r.replace(ra, "")), na.test(r)) r = r.replace(na, ""), o = Ar(o), (c = ea.test(r)) && (r = r.slice(1, -1)), a && (a.prop && !c && "innerHtml" === (r = b(r)) && (r = "innerHTML"), a.camel && !c && (r = b(r)), a.sync && (s = Br(o, "$event"), c ? Mr(e, '"update:"+(' + r + ")", s, null, !1, 0, u[t], !0) : (Mr(e, "update:" + b(r), s, null, !1, 0, u[t]), C(r) !== b(r) && Mr(e, "update:" + C(r), s, null, !1, 0, u[t])))), a && a.prop || !e.component && qo(e.tag, e.attrsMap.type, r) ? Er(e, r, o, u[t], c) : Nr(e, r, o, u[t], c);
                  else if (Zo.test(r)) r = r.replace(Zo, ""), (c = ea.test(r)) && (r = r.slice(1, -1)), Mr(e, r, o, a, !1, 0, u[t], c);
          else {
              var l = (r = r.replace(Go, "")).match(ta),
                  f = l && l[1];
              c = !1, f && (r = r.slice(0, -(f.length + 1)), ea.test(f) && (f = f.slice(1, -1), c = !0)), Dr(e, r, i, o, f, c, a, u[t])
          } else Nr(e, r, JSON.stringify(o), u[t]), !e.component && "muted" === r && qo(e.tag, e.attrsMap.type, r) && Er(e, r, "true", u[t])
      }(e), e
  }

  function pa(e) {
      var t;
      if (t = Fr(e, "v-for")) {
          var n = function(e) {
              var t = e.match(Xo);
              if (!t) return;
              var n = {};
              n.for = t[2].trim();
              var r = t[1].trim().replace(Qo, ""),
                  i = r.match(Yo);
              i ? (n.alias = r.replace(Yo, "").trim(), n.iterator1 = i[1].trim(), i[2] && (n.iterator2 = i[2].trim())) : n.alias = r;
              return n
          }(t);
          n && A(e, n)
      }
  }

  function da(e, t) {
      e.ifConditions || (e.ifConditions = []), e.ifConditions.push(t)
  }

  function va(e) {
      var t = e.name.replace(ia, "");
      return t || "#" !== e.name[0] && (t = "default"), ea.test(t) ? {
          name: t.slice(1, -1),
          dynamic: !0
      } : {
          name: '"' + t + '"',
          dynamic: !1
      }
  }

  function ha(e) {
      var t = e.match(ra);
      if (t) {
          var n = {};
          return t.forEach(function(e) {
              n[e.slice(1)] = !0
          }), n
      }
  }

  function ma(e) {
      for (var t = {}, n = 0, r = e.length; n < r; n++) t[e[n].name] = e[n].value;
      return t
  }
  var ya = /^xmlns:NS\d+/,
      ga = /^NS\d+:/;

  function _a(e) {
      return ua(e.tag, e.attrsList.slice(), e.parent)
  }
  var ba = [mo, go, {
      preTransformNode: function(e, t) {
          if ("input" === e.tag) {
              var n, r = e.attrsMap;
              if (!r["v-model"]) return;
              if ((r[":type"] || r["v-bind:type"]) && (n = Ir(e, "type")), r.type || n || !r["v-bind"] || (n = "(" + r["v-bind"] + ").type"), n) {
                  var i = Fr(e, "v-if", !0),
                      o = i ? "&&(" + i + ")" : "",
                      a = null != Fr(e, "v-else", !0),
                      s = Fr(e, "v-else-if", !0),
                      c = _a(e);
                  pa(c), jr(c, "type", "checkbox"), fa(c, t), c.processed = !0, c.if = "(" + n + ")==='checkbox'" + o, da(c, {
                      exp: c.if,
                      block: c
                  });
                  var u = _a(e);
                  Fr(u, "v-for", !0), jr(u, "type", "radio"), fa(u, t), da(c, {
                      exp: "(" + n + ")==='radio'" + o,
                      block: u
                  });
                  var l = _a(e);
                  return Fr(l, "v-for", !0), jr(l, ":type", n), fa(l, t), da(c, {
                      exp: i,
                      block: l
                  }), a ? c.else = !0 : s && (c.elseif = s), c
              }
          }
      }
  }];
  var $a, wa, Ca = {
          expectHTML: !0,
          modules: ba,
          directives: {
              model: function(e, t, n) {
                  var r = t.value,
                      i = t.modifiers,
                      o = e.tag,
                      a = e.attrsMap.type;
                  if (e.component) return Hr(e, r, i), !1;
                  if ("select" === o) ! function(e, t, n) {
                      var r = 'var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return ' + (n && n.number ? "_n(val)" : "val") + "});";
                      r = r + " " + Br(t, "$event.target.multiple ? $$selectedVal : $$selectedVal[0]"), Mr(e, "change", r, null, !0)
                  }(e, r, i);
                  else if ("input" === o && "checkbox" === a) ! function(e, t, n) {
                      var r = n && n.number,
                          i = Ir(e, "value") || "null",
                          o = Ir(e, "true-value") || "true",
                          a = Ir(e, "false-value") || "false";
                      Er(e, "checked", "Array.isArray(" + t + ")?_i(" + t + "," + i + ")>-1" + ("true" === o ? ":(" + t + ")" : ":_q(" + t + "," + o + ")")), Mr(e, "change", "var $$a=" + t + ",$$el=$event.target,$$c=$$el.checked?(" + o + "):(" + a + ");if(Array.isArray($$a)){var $$v=" + (r ? "_n(" + i + ")" : i) + ",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&(" + Br(t, "$$a.concat([$$v])") + ")}else{$$i>-1&&(" + Br(t, "$$a.slice(0,$$i).concat($$a.slice($$i+1))") + ")}}else{" + Br(t, "$$c") + "}", null, !0)
                  }(e, r, i);
                  else if ("input" === o && "radio" === a) ! function(e, t, n) {
                      var r = n && n.number,
                          i = Ir(e, "value") || "null";
                      Er(e, "checked", "_q(" + t + "," + (i = r ? "_n(" + i + ")" : i) + ")"), Mr(e, "change", Br(t, i), null, !0)
                  }(e, r, i);
                  else if ("input" === o || "textarea" === o) ! function(e, t, n) {
                      var r = e.attrsMap.type,
                          i = n || {},
                          o = i.lazy,
                          a = i.number,
                          s = i.trim,
                          c = !o && "range" !== r,
                          u = o ? "change" : "range" === r ? Wr : "input",
                          l = "$event.target.value";
                      s && (l = "$event.target.value.trim()"), a && (l = "_n(" + l + ")");
                      var f = Br(t, l);
                      c && (f = "if($event.target.composing)return;" + f), Er(e, "value", "(" + t + ")"), Mr(e, u, f, null, !0), (s || a) && Mr(e, "blur", "$forceUpdate()")
                  }(e, r, i);
                  else if (!F.isReservedTag(o)) return Hr(e, r, i), !1;
                  return !0
              },
              text: function(e, t) {
                  t.value && Er(e, "textContent", "_s(" + t.value + ")", t)
              },
              html: function(e, t) {
                  t.value && Er(e, "innerHTML", "_s(" + t.value + ")", t)
              }
          },
          isPreTag: function(e) {
              return "pre" === e
          },
          isUnaryTag: bo,
          mustUseProp: jn,
          canBeLeftOpenTag: $o,
          isReservedTag: Wn,
          getTagNamespace: Zn,
          staticKeys: function(e) {
              return e.reduce(function(e, t) {
                  return e.concat(t.staticKeys || [])
              }, []).join(",")
          }(ba)
      },
      xa = g(function(e) {
          return p("type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap" + (e ? "," + e : ""))
      });

  function ka(e, t) {
      e && ($a = xa(t.staticKeys || ""), wa = t.isReservedTag || T, function e(t) {
          t.static = function(e) {
              if (2 === e.type) return !1;
              if (3 === e.type) return !0;
              return !(!e.pre && (e.hasBindings || e.if || e.for || d(e.tag) || !wa(e.tag) || function(e) {
                  for (; e.parent;) {
                      if ("template" !== (e = e.parent).tag) return !1;
                      if (e.for) return !0
                  }
                  return !1
              }(e) || !Object.keys(e).every($a)))
          }(t);
          if (1 === t.type) {
              if (!wa(t.tag) && "slot" !== t.tag && null == t.attrsMap["inline-template"]) return;
              for (var n = 0, r = t.children.length; n < r; n++) {
                  var i = t.children[n];
                  e(i), i.static || (t.static = !1)
              }
              if (t.ifConditions)
                  for (var o = 1, a = t.ifConditions.length; o < a; o++) {
                      var s = t.ifConditions[o].block;
                      e(s), s.static || (t.static = !1)
                  }
          }
      }(e), function e(t, n) {
          if (1 === t.type) {
              if ((t.static || t.once) && (t.staticInFor = n), t.static && t.children.length && (1 !== t.children.length || 3 !== t.children[0].type)) return void(t.staticRoot = !0);
              if (t.staticRoot = !1, t.children)
                  for (var r = 0, i = t.children.length; r < i; r++) e(t.children[r], n || !!t.for);
              if (t.ifConditions)
                  for (var o = 1, a = t.ifConditions.length; o < a; o++) e(t.ifConditions[o].block, n)
          }
      }(e, !1))
  }
  var Aa = /^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/,
      Oa = /\([^)]*?\);*$/,
      Sa = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/,
      Ta = {
          esc: 27,
          tab: 9,
          enter: 13,
          space: 32,
          up: 38,
          left: 37,
          right: 39,
          down: 40,
          delete: [8, 46]
      },
      Ea = {
          esc: ["Esc", "Escape"],
          tab: "Tab",
          enter: "Enter",
          space: [" ", "Spacebar"],
          up: ["Up", "ArrowUp"],
          left: ["Left", "ArrowLeft"],
          right: ["Right", "ArrowRight"],
          down: ["Down", "ArrowDown"],
          delete: ["Backspace", "Delete", "Del"]
      },
      Na = function(e) {
          return "if(" + e + ")return null;"
      },
      ja = {
          stop: "$event.stopPropagation();",
          prevent: "$event.preventDefault();",
          self: Na("$event.target !== $event.currentTarget"),
          ctrl: Na("!$event.ctrlKey"),
          shift: Na("!$event.shiftKey"),
          alt: Na("!$event.altKey"),
          meta: Na("!$event.metaKey"),
          left: Na("'button' in $event && $event.button !== 0"),
          middle: Na("'button' in $event && $event.button !== 1"),
          right: Na("'button' in $event && $event.button !== 2")
      };

  function Da(e, t) {
      var n = t ? "nativeOn:" : "on:",
          r = "",
          i = "";
      for (var o in e) {
          var a = La(e[o]);
          e[o] && e[o].dynamic ? i += o + "," + a + "," : r += '"' + o + '":' + a + ","
      }
      return r = "{" + r.slice(0, -1) + "}", i ? n + "_d(" + r + ",[" + i.slice(0, -1) + "])" : n + r
  }

  function La(e) {
      if (!e) return "function(){}";
      if (Array.isArray(e)) return "[" + e.map(function(e) {
          return La(e)
      }).join(",") + "]";
      var t = Sa.test(e.value),
          n = Aa.test(e.value),
          r = Sa.test(e.value.replace(Oa, ""));
      if (e.modifiers) {
          var i = "",
              o = "",
              a = [];
          for (var s in e.modifiers)
              if (ja[s]) o += ja[s], Ta[s] && a.push(s);
              else if ("exact" === s) {
              var c = e.modifiers;
              o += Na(["ctrl", "shift", "alt", "meta"].filter(function(e) {
                  return !c[e]
              }).map(function(e) {
                  return "$event." + e + "Key"
              }).join("||"))
          } else a.push(s);
          return a.length && (i += function(e) {
              return "if(!$event.type.indexOf('key')&&" + e.map(Ma).join("&&") + ")return null;"
          }(a)), o && (i += o), "function($event){" + i + (t ? "return " + e.value + "($event)" : n ? "return (" + e.value + ")($event)" : r ? "return " + e.value : e.value) + "}"
      }
      return t || n ? e.value : "function($event){" + (r ? "return " + e.value : e.value) + "}"
  }

  function Ma(e) {
      var t = parseInt(e, 10);
      if (t) return "$event.keyCode!==" + t;
      var n = Ta[e],
          r = Ea[e];
      return "_k($event.keyCode," + JSON.stringify(e) + "," + JSON.stringify(n) + ",$event.key," + JSON.stringify(r) + ")"
  }
  var Ia = {
          on: function(e, t) {
              e.wrapListeners = function(e) {
                  return "_g(" + e + "," + t.value + ")"
              }
          },
          bind: function(e, t) {
              e.wrapData = function(n) {
                  return "_b(" + n + ",'" + e.tag + "'," + t.value + "," + (t.modifiers && t.modifiers.prop ? "true" : "false") + (t.modifiers && t.modifiers.sync ? ",true" : "") + ")"
              }
          },
          cloak: S
      },
      Fa = function(e) {
          this.options = e, this.warn = e.warn || Sr, this.transforms = Tr(e.modules, "transformCode"), this.dataGenFns = Tr(e.modules, "genData"), this.directives = A(A({}, Ia), e.directives);
          var t = e.isReservedTag || T;
          this.maybeComponent = function(e) {
              return !!e.component || !t(e.tag)
          }, this.onceId = 0, this.staticRenderFns = [], this.pre = !1
      };

  function Pa(e, t) {
      var n = new Fa(t);
      return {
          render: "with(this){return " + (e ? Ra(e, n) : '_c("div")') + "}",
          staticRenderFns: n.staticRenderFns
      }
  }

  function Ra(e, t) {
      if (e.parent && (e.pre = e.pre || e.parent.pre), e.staticRoot && !e.staticProcessed) return Ha(e, t);
      if (e.once && !e.onceProcessed) return Ba(e, t);
      if (e.for && !e.forProcessed) return za(e, t);
      if (e.if && !e.ifProcessed) return Ua(e, t);
      if ("template" !== e.tag || e.slotTarget || t.pre) {
          if ("slot" === e.tag) return function(e, t) {
              var n = e.slotName || '"default"',
                  r = qa(e, t),
                  i = "_t(" + n + (r ? "," + r : ""),
                  o = e.attrs || e.dynamicAttrs ? Ga((e.attrs || []).concat(e.dynamicAttrs || []).map(function(e) {
                      return {
                          name: b(e.name),
                          value: e.value,
                          dynamic: e.dynamic
                      }
                  })) : null,
                  a = e.attrsMap["v-bind"];
              !o && !a || r || (i += ",null");
              o && (i += "," + o);
              a && (i += (o ? "" : ",null") + "," + a);
              return i + ")"
          }(e, t);
          var n;
          if (e.component) n = function(e, t, n) {
              var r = t.inlineTemplate ? null : qa(t, n, !0);
              return "_c(" + e + "," + Va(t, n) + (r ? "," + r : "") + ")"
          }(e.component, e, t);
          else {
              var r;
              (!e.plain || e.pre && t.maybeComponent(e)) && (r = Va(e, t));
              var i = e.inlineTemplate ? null : qa(e, t, !0);
              n = "_c('" + e.tag + "'" + (r ? "," + r : "") + (i ? "," + i : "") + ")"
          }
          for (var o = 0; o < t.transforms.length; o++) n = t.transforms[o](e, n);
          return n
      }
      return qa(e, t) || "void 0"
  }

  function Ha(e, t) {
      e.staticProcessed = !0;
      var n = t.pre;
      return e.pre && (t.pre = e.pre), t.staticRenderFns.push("with(this){return " + Ra(e, t) + "}"), t.pre = n, "_m(" + (t.staticRenderFns.length - 1) + (e.staticInFor ? ",true" : "") + ")"
  }

  function Ba(e, t) {
      if (e.onceProcessed = !0, e.if && !e.ifProcessed) return Ua(e, t);
      if (e.staticInFor) {
          for (var n = "", r = e.parent; r;) {
              if (r.for) {
                  n = r.key;
                  break
              }
              r = r.parent
          }
          return n ? "_o(" + Ra(e, t) + "," + t.onceId++ + "," + n + ")" : Ra(e, t)
      }
      return Ha(e, t)
  }

  function Ua(e, t, n, r) {
      return e.ifProcessed = !0,
          function e(t, n, r, i) {
              if (!t.length) return i || "_e()";
              var o = t.shift();
              return o.exp ? "(" + o.exp + ")?" + a(o.block) + ":" + e(t, n, r, i) : "" + a(o.block);

              function a(e) {
                  return r ? r(e, n) : e.once ? Ba(e, n) : Ra(e, n)
              }
          }(e.ifConditions.slice(), t, n, r)
  }

  function za(e, t, n, r) {
      var i = e.for,
          o = e.alias,
          a = e.iterator1 ? "," + e.iterator1 : "",
          s = e.iterator2 ? "," + e.iterator2 : "";
      return e.forProcessed = !0, (r || "_l") + "((" + i + "),function(" + o + a + s + "){return " + (n || Ra)(e, t) + "})"
  }

  function Va(e, t) {
      var n = "{",
          r = function(e, t) {
              var n = e.directives;
              if (!n) return;
              var r, i, o, a, s = "directives:[",
                  c = !1;
              for (r = 0, i = n.length; r < i; r++) {
                  o = n[r], a = !0;
                  var u = t.directives[o.name];
                  u && (a = !!u(e, o, t.warn)), a && (c = !0, s += '{name:"' + o.name + '",rawName:"' + o.rawName + '"' + (o.value ? ",value:(" + o.value + "),expression:" + JSON.stringify(o.value) : "") + (o.arg ? ",arg:" + (o.isDynamicArg ? o.arg : '"' + o.arg + '"') : "") + (o.modifiers ? ",modifiers:" + JSON.stringify(o.modifiers) : "") + "},")
              }
              if (c) return s.slice(0, -1) + "]"
          }(e, t);
      r && (n += r + ","), e.key && (n += "key:" + e.key + ","), e.ref && (n += "ref:" + e.ref + ","), e.refInFor && (n += "refInFor:true,"), e.pre && (n += "pre:true,"), e.component && (n += 'tag:"' + e.tag + '",');
      for (var i = 0; i < t.dataGenFns.length; i++) n += t.dataGenFns[i](e);
      if (e.attrs && (n += "attrs:" + Ga(e.attrs) + ","), e.props && (n += "domProps:" + Ga(e.props) + ","), e.events && (n += Da(e.events, !1) + ","), e.nativeEvents && (n += Da(e.nativeEvents, !0) + ","), e.slotTarget && !e.slotScope && (n += "slot:" + e.slotTarget + ","), e.scopedSlots && (n += function(e, t, n) {
              var r = e.for || Object.keys(t).some(function(e) {
                      var n = t[e];
                      return n.slotTargetDynamic || n.if || n.for || Ka(n)
                  }),
                  i = !!e.if;
              if (!r)
                  for (var o = e.parent; o;) {
                      if (o.slotScope && o.slotScope !== ca || o.for) {
                          r = !0;
                          break
                      }
                      o.if && (i = !0), o = o.parent
                  }
              var a = Object.keys(t).map(function(e) {
                  return Ja(t[e], n)
              }).join(",");
              return "scopedSlots:_u([" + a + "]" + (r ? ",null,true" : "") + (!r && i ? ",null,false," + function(e) {
                  var t = 5381,
                      n = e.length;
                  for (; n;) t = 33 * t ^ e.charCodeAt(--n);
                  return t >>> 0
              }(a) : "") + ")"
          }(e, e.scopedSlots, t) + ","), e.model && (n += "model:{value:" + e.model.value + ",callback:" + e.model.callback + ",expression:" + e.model.expression + "},"), e.inlineTemplate) {
          var o = function(e, t) {
              var n = e.children[0];
              if (n && 1 === n.type) {
                  var r = Pa(n, t.options);
                  return "inlineTemplate:{render:function(){" + r.render + "},staticRenderFns:[" + r.staticRenderFns.map(function(e) {
                      return "function(){" + e + "}"
                  }).join(",") + "]}"
              }
          }(e, t);
          o && (n += o + ",")
      }
      return n = n.replace(/,$/, "") + "}", e.dynamicAttrs && (n = "_b(" + n + ',"' + e.tag + '",' + Ga(e.dynamicAttrs) + ")"), e.wrapData && (n = e.wrapData(n)), e.wrapListeners && (n = e.wrapListeners(n)), n
  }

  function Ka(e) {
      return 1 === e.type && ("slot" === e.tag || e.children.some(Ka))
  }

  function Ja(e, t) {
      var n = e.attrsMap["slot-scope"];
      if (e.if && !e.ifProcessed && !n) return Ua(e, t, Ja, "null");
      if (e.for && !e.forProcessed) return za(e, t, Ja);
      var r = e.slotScope === ca ? "" : String(e.slotScope),
          i = "function(" + r + "){return " + ("template" === e.tag ? e.if && n ? "(" + e.if+")?" + (qa(e, t) || "undefined") + ":undefined" : qa(e, t) || "undefined" : Ra(e, t)) + "}",
          o = r ? "" : ",proxy:true";
      return "{key:" + (e.slotTarget || '"default"') + ",fn:" + i + o + "}"
  }

  function qa(e, t, n, r, i) {
      var o = e.children;
      if (o.length) {
          var a = o[0];
          if (1 === o.length && a.for && "template" !== a.tag && "slot" !== a.tag) {
              var s = n ? t.maybeComponent(a) ? ",1" : ",0" : "";
              return "" + (r || Ra)(a, t) + s
          }
          var c = n ? function(e, t) {
                  for (var n = 0, r = 0; r < e.length; r++) {
                      var i = e[r];
                      if (1 === i.type) {
                          if (Wa(i) || i.ifConditions && i.ifConditions.some(function(e) {
                                  return Wa(e.block)
                              })) {
                              n = 2;
                              break
                          }(t(i) || i.ifConditions && i.ifConditions.some(function(e) {
                              return t(e.block)
                          })) && (n = 1)
                      }
                  }
                  return n
              }(o, t.maybeComponent) : 0,
              u = i || Za;
          return "[" + o.map(function(e) {
              return u(e, t)
          }).join(",") + "]" + (c ? "," + c : "")
      }
  }

  function Wa(e) {
      return void 0 !== e.for || "template" === e.tag || "slot" === e.tag
  }

  function Za(e, t) {
      return 1 === e.type ? Ra(e, t) : 3 === e.type && e.isComment ? (r = e, "_e(" + JSON.stringify(r.text) + ")") : "_v(" + (2 === (n = e).type ? n.expression : Xa(JSON.stringify(n.text))) + ")";
      var n, r
  }

  function Ga(e) {
      for (var t = "", n = "", r = 0; r < e.length; r++) {
          var i = e[r],
              o = Xa(i.value);
          i.dynamic ? n += i.name + "," + o + "," : t += '"' + i.name + '":' + o + ","
      }
      return t = "{" + t.slice(0, -1) + "}", n ? "_d(" + t + ",[" + n.slice(0, -1) + "])" : t
  }

  function Xa(e) {
      return e.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029")
  }
  new RegExp("\\b" + "do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b") + "\\b");

  function Ya(e, t) {
      try {
          return new Function(e)
      } catch (n) {
          return t.push({
              err: n,
              code: e
          }), S
      }
  }

  function Qa(e) {
      var t = Object.create(null);
      return function(n, r, i) {
          (r = A({}, r)).warn;
          delete r.warn;
          var o = r.delimiters ? String(r.delimiters) + n : n;
          if (t[o]) return t[o];
          var a = e(n, r),
              s = {},
              c = [];
          return s.render = Ya(a.render, c), s.staticRenderFns = a.staticRenderFns.map(function(e) {
              return Ya(e, c)
          }), t[o] = s
      }
  }
  var es, ts, ns = (es = function(e, t) {
          var n = la(e.trim(), t);
          !1 !== t.optimize && ka(n, t);
          var r = Pa(n, t);
          return {
              ast: n,
              render: r.render,
              staticRenderFns: r.staticRenderFns
          }
      }, function(e) {
          function t(t, n) {
              var r = Object.create(e),
                  i = [],
                  o = [];
              if (n)
                  for (var a in n.modules && (r.modules = (e.modules || []).concat(n.modules)), n.directives && (r.directives = A(Object.create(e.directives || null), n.directives)), n) "modules" !== a && "directives" !== a && (r[a] = n[a]);
              r.warn = function(e, t, n) {
                  (n ? o : i).push(e)
              };
              var s = es(t.trim(), r);
              return s.errors = i, s.tips = o, s
          }
          return {
              compile: t,
              compileToFunctions: Qa(t)
          }
      })(Ca),
      rs = (ns.compile, ns.compileToFunctions);

  function is(e) {
      return (ts = ts || document.createElement("div")).innerHTML = e ? '<a href="\n"/>' : '<div a="\n"/>', ts.innerHTML.indexOf("&#10;") > 0
  }
  var os = !!z && is(!1),
      as = !!z && is(!0),
      ss = g(function(e) {
          var t = Yn(e);
          return t && t.innerHTML
      }),
      cs = wn.prototype.$mount;
  return wn.prototype.$mount = function(e, t) {
      if ((e = e && Yn(e)) === document.body || e === document.documentElement) return this;
      var n = this.$options;
      if (!n.render) {
          var r = n.template;
          if (r)
              if ("string" == typeof r) "#" === r.charAt(0) && (r = ss(r));
              else {
                  if (!r.nodeType) return this;
                  r = r.innerHTML
              } else e && (r = function(e) {
              if (e.outerHTML) return e.outerHTML;
              var t = document.createElement("div");
              return t.appendChild(e.cloneNode(!0)), t.innerHTML
          }(e));
          if (r) {
              var i = rs(r, {
                      outputSourceRange: !1,
                      shouldDecodeNewlines: os,
                      shouldDecodeNewlinesForHref: as,
                      delimiters: n.delimiters,
                      comments: n.comments
                  }, this),
                  o = i.render,
                  a = i.staticRenderFns;
              n.render = o, n.staticRenderFns = a
          }
      }
      return cs.call(this, e, t)
  }, wn.compile = rs, wn
});;
/* CodeMirror - Minified & Bundled
 Generated on 26.05.2016 with http://codemirror.net/doc/compress.html
 Version: HEAD

 CodeMirror Library:
 - codemirror.js
 Modes:
 - htmlmixed.js
 Add-ons:
 - active-line.js
 - colorize.js
*/
! function(a) {
  if ("object" == typeof exports && "object" == typeof module) module.exports = a();
  else {
      if ("function" == typeof define && define.amd) return define([], a);
      (this || window).CodeMirror = a()
  }
}(function() {
  "use strict";

  function y(a, b) {
      if (!(this instanceof y)) return new y(a, b);
      this.options = b = b ? ng(b) : {}, ng(Ed, b, !1), L(b);
      var c = b.value;
      "string" == typeof c && (c = new ef(c, b.mode, null, b.lineSeparator)), this.doc = c;
      var d = new y.inputStyles[b.inputStyle](this),
          e = this.display = new z(a, c, d);
      e.wrapper.CodeMirror = this, H(this), F(this), b.lineWrapping && (this.display.wrapper.className += " CodeMirror-wrap"), b.autofocus && !p && e.input.focus(), P(this), this.state = {
          keyMaps: [],
          overlays: [],
          modeGen: 0,
          overwrite: !1,
          delayingBlurEvent: !1,
          focused: !1,
          suppressEdits: !1,
          pasteIncoming: !1,
          cutIncoming: !1,
          selectingText: !1,
          draggingText: !1,
          highlight: new cg,
          keySeq: null,
          specialChars: null
      };
      var i = this;
      f && 11 > g && setTimeout(function() {
          i.display.input.reset(!0)
      }, 20), tc(this), Hg(), Zb(this), this.curOp.forceUpdate = !0, jf(this, c), b.autofocus && !p || i.hasFocus() ? setTimeout(og(bd, this), 20) : cd(this);
      for (var j in Fd) Fd.hasOwnProperty(j) && Fd[j](this, b[j], Hd);
      U(this), b.finishInit && b.finishInit(this);
      for (var k = 0; k < Ld.length; ++k) Ld[k](this);
      _b(this), h && b.lineWrapping && "optimizelegibility" == getComputedStyle(e.lineDiv).textRendering && (e.lineDiv.style.textRendering = "auto")
  }

  function z(a, b, d) {
      var e = this;
      this.input = d, e.scrollbarFiller = vg("div", null, "CodeMirror-scrollbar-filler"), e.scrollbarFiller.setAttribute("cm-not-content", "true"), e.gutterFiller = vg("div", null, "CodeMirror-gutter-filler"), e.gutterFiller.setAttribute("cm-not-content", "true"), e.lineDiv = vg("div", null, "CodeMirror-code"), e.selectionDiv = vg("div", null, null, "position: relative; z-index: 1"), e.cursorDiv = vg("div", null, "CodeMirror-cursors"), e.measure = vg("div", null, "CodeMirror-measure"), e.lineMeasure = vg("div", null, "CodeMirror-measure"), e.lineSpace = vg("div", [e.measure, e.lineMeasure, e.selectionDiv, e.cursorDiv, e.lineDiv], null, "position: relative; outline: none"), e.mover = vg("div", [vg("div", [e.lineSpace], "CodeMirror-lines")], null, "position: relative"), e.sizer = vg("div", [e.mover], "CodeMirror-sizer"), e.sizerWidth = null, e.heightForcer = vg("div", null, null, "position: absolute; height: " + Zf + "px; width: 1px;"), e.gutters = vg("div", null, "CodeMirror-gutters"), e.lineGutter = null, e.scroller = vg("div", [e.sizer, e.heightForcer, e.gutters], "CodeMirror-scroll"), e.scroller.setAttribute("tabIndex", "-1"), e.wrapper = vg("div", [e.scrollbarFiller, e.gutterFiller, e.scroller], "CodeMirror"), f && 8 > g && (e.gutters.style.zIndex = -1, e.scroller.style.paddingRight = 0), h || c && p || (e.scroller.draggable = !0), a && (a.appendChild ? a.appendChild(e.wrapper) : a(e.wrapper)), e.viewFrom = e.viewTo = b.first, e.reportedViewFrom = e.reportedViewTo = b.first, e.view = [], e.renderedView = null, e.externalMeasured = null, e.viewOffset = 0, e.lastWrapHeight = e.lastWrapWidth = 0, e.updateLineNumbers = null, e.nativeBarWidth = e.barHeight = e.barWidth = 0, e.scrollbarsClipped = !1, e.lineNumWidth = e.lineNumInnerWidth = e.lineNumChars = null, e.alignWidgets = !1, e.cachedCharWidth = e.cachedTextHeight = e.cachedPaddingH = null, e.maxLine = null, e.maxLineLength = 0, e.maxLineChanged = !1, e.wheelDX = e.wheelDY = e.wheelStartX = e.wheelStartY = null, e.shift = !1, e.selForContextMenu = null, e.activeTouch = null, d.init(e)
  }

  function A(a) {
      a.doc.mode = y.getMode(a.options, a.doc.modeOption), B(a)
  }

  function B(a) {
      a.doc.iter(function(a) {
          a.stateAfter && (a.stateAfter = null), a.styles && (a.styles = null)
      }), a.doc.frontier = a.doc.first, mb(a, 100), a.state.modeGen++, a.curOp && mc(a)
  }

  function C(a) {
      a.options.lineWrapping ? (Dg(a.display.wrapper, "CodeMirror-wrap"), a.display.sizer.style.minWidth = "", a.display.sizerWidth = null) : (Cg(a.display.wrapper, "CodeMirror-wrap"), K(a)), E(a), mc(a), Jb(a), setTimeout(function() {
          Q(a)
      }, 100)
  }

  function D(a) {
      var b = Vb(a.display),
          c = a.options.lineWrapping,
          d = c && Math.max(5, a.display.scroller.clientWidth / Wb(a.display) - 3);
      return function(e) {
          if (Ae(a.doc, e)) return 0;
          var f = 0;
          if (e.widgets)
              for (var g = 0; g < e.widgets.length; g++) e.widgets[g].height && (f += e.widgets[g].height);
          return c ? f + (Math.ceil(e.text.length / d) || 1) * b : f + b
      }
  }

  function E(a) {
      var b = a.doc,
          c = D(a);
      b.iter(function(a) {
          var b = c(a);
          b != a.height && nf(a, b)
      })
  }

  function F(a) {
      a.display.wrapper.className = a.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") + a.options.theme.replace(/(^|\s)\s*/g, " cm-s-"), Jb(a)
  }

  function G(a) {
      H(a), mc(a), setTimeout(function() {
          T(a)
      }, 20)
  }

  function H(a) {
      var b = a.display.gutters,
          c = a.options.gutters;
      xg(b);
      for (var d = 0; d < c.length; ++d) {
          var e = c[d],
              f = b.appendChild(vg("div", null, "CodeMirror-gutter " + e));
          "CodeMirror-linenumbers" == e && (a.display.lineGutter = f, f.style.width = (a.display.lineNumWidth || 1) + "px")
      }
      b.style.display = d ? "" : "none", I(a)
  }

  function I(a) {
      var b = a.display.gutters.offsetWidth;
      a.display.sizer.style.marginLeft = b + "px"
  }

  function J(a) {
      if (0 == a.height) return 0;
      for (var c, b = a.text.length, d = a; c = te(d);) {
          var e = c.find(0, !0);
          d = e.from.line, b += e.from.ch - e.to.ch
      }
      for (d = a; c = ue(d);) {
          var e = c.find(0, !0);
          b -= d.text.length - e.from.ch, d = e.to.line, b += d.text.length - e.to.ch
      }
      return b
  }

  function K(a) {
      var b = a.display,
          c = a.doc;
      b.maxLine = kf(c, c.first), b.maxLineLength = J(b.maxLine), b.maxLineChanged = !0, c.iter(function(a) {
          var c = J(a);
          c > b.maxLineLength && (b.maxLineLength = c, b.maxLine = a)
      })
  }

  function L(a) {
      var b = jg(a.gutters, "CodeMirror-linenumbers"); - 1 == b && a.lineNumbers ? a.gutters = a.gutters.concat(["CodeMirror-linenumbers"]) : b > -1 && !a.lineNumbers && (a.gutters = a.gutters.slice(0), a.gutters.splice(b, 1))
  }

  function M(a) {
      var b = a.display,
          c = b.gutters.offsetWidth,
          d = Math.round(a.doc.height + rb(a.display));
      return {
          clientHeight: b.scroller.clientHeight,
          viewHeight: b.wrapper.clientHeight,
          scrollWidth: b.scroller.scrollWidth,
          clientWidth: b.scroller.clientWidth,
          viewWidth: b.wrapper.clientWidth,
          barLeft: a.options.fixedGutter ? c : 0,
          docHeight: d,
          scrollHeight: d + tb(a) + b.barHeight,
          nativeBarWidth: b.nativeBarWidth,
          gutterWidth: c
      }
  }

  function N(a, b, c) {
      this.cm = c;
      var d = this.vert = vg("div", [vg("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar"),
          e = this.horiz = vg("div", [vg("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");
      a(d), a(e), Nf(d, "scroll", function() {
          d.clientHeight && b(d.scrollTop, "vertical")
      }), Nf(e, "scroll", function() {
          e.clientWidth && b(e.scrollLeft, "horizontal")
      }), this.checkedZeroWidth = !1, f && 8 > g && (this.horiz.style.minHeight = this.vert.style.minWidth = "18px")
  }

  function O() {}

  function P(a) {
      a.display.scrollbars && (a.display.scrollbars.clear(), a.display.scrollbars.addClass && Cg(a.display.wrapper, a.display.scrollbars.addClass)), a.display.scrollbars = new y.scrollbarModel[a.options.scrollbarStyle](function(b) {
          a.display.wrapper.insertBefore(b, a.display.scrollbarFiller), Nf(b, "mousedown", function() {
              a.state.focused && setTimeout(function() {
                  a.display.input.focus()
              }, 0)
          }), b.setAttribute("cm-not-content", "true")
      }, function(b, c) {
          "horizontal" == c ? Mc(a, b) : Lc(a, b)
      }, a), a.display.scrollbars.addClass && Dg(a.display.wrapper, a.display.scrollbars.addClass)
  }

  function Q(a, b) {
      b || (b = M(a));
      var c = a.display.barWidth,
          d = a.display.barHeight;
      R(a, b);
      for (var e = 0; 4 > e && c != a.display.barWidth || d != a.display.barHeight; e++) c != a.display.barWidth && a.options.lineWrapping && ba(a), R(a, M(a)), c = a.display.barWidth, d = a.display.barHeight
  }

  function R(a, b) {
      var c = a.display,
          d = c.scrollbars.update(b);
      c.sizer.style.paddingRight = (c.barWidth = d.right) + "px", c.sizer.style.paddingBottom = (c.barHeight = d.bottom) + "px", c.heightForcer.style.borderBottom = d.bottom + "px solid transparent", d.right && d.bottom ? (c.scrollbarFiller.style.display = "block", c.scrollbarFiller.style.height = d.bottom + "px", c.scrollbarFiller.style.width = d.right + "px") : c.scrollbarFiller.style.display = "", d.bottom && a.options.coverGutterNextToScrollbar && a.options.fixedGutter ? (c.gutterFiller.style.display = "block", c.gutterFiller.style.height = d.bottom + "px", c.gutterFiller.style.width = b.gutterWidth + "px") : c.gutterFiller.style.display = ""
  }

  function S(a, b, c) {
      var d = c && null != c.top ? Math.max(0, c.top) : a.scroller.scrollTop;
      d = Math.floor(d - qb(a));
      var e = c && null != c.bottom ? c.bottom : d + a.wrapper.clientHeight,
          f = pf(b, d),
          g = pf(b, e);
      if (c && c.ensure) {
          var h = c.ensure.from.line,
              i = c.ensure.to.line;
          f > h ? (f = h, g = pf(b, qf(kf(b, h)) + a.wrapper.clientHeight)) : Math.min(i, b.lastLine()) >= g && (f = pf(b, qf(kf(b, i)) - a.wrapper.clientHeight), g = i)
      }
      return {
          from: f,
          to: Math.max(g, f + 1)
      }
  }

  function T(a) {
      var b = a.display,
          c = b.view;
      if (b.alignWidgets || b.gutters.firstChild && a.options.fixedGutter) {
          for (var d = W(b) - b.scroller.scrollLeft + a.doc.scrollLeft, e = b.gutters.offsetWidth, f = d + "px", g = 0; g < c.length; g++)
              if (!c[g].hidden) {
                  a.options.fixedGutter && c[g].gutter && (c[g].gutter.style.left = f);
                  var h = c[g].alignable;
                  if (h)
                      for (var i = 0; i < h.length; i++) h[i].style.left = f
              }
          a.options.fixedGutter && (b.gutters.style.left = d + e + "px")
      }
  }

  function U(a) {
      if (!a.options.lineNumbers) return !1;
      var b = a.doc,
          c = V(a.options, b.first + b.size - 1),
          d = a.display;
      if (c.length != d.lineNumChars) {
          var e = d.measure.appendChild(vg("div", [vg("div", c)], "CodeMirror-linenumber CodeMirror-gutter-elt")),
              f = e.firstChild.offsetWidth,
              g = e.offsetWidth - f;
          return d.lineGutter.style.width = "", d.lineNumInnerWidth = Math.max(f, d.lineGutter.offsetWidth - g) + 1, d.lineNumWidth = d.lineNumInnerWidth + g, d.lineNumChars = d.lineNumInnerWidth ? c.length : -1, d.lineGutter.style.width = d.lineNumWidth + "px", I(a), !0
      }
      return !1
  }

  function V(a, b) {
      return String(a.lineNumberFormatter(b + a.firstLineNumber))
  }

  function W(a) {
      return a.scroller.getBoundingClientRect().left - a.sizer.getBoundingClientRect().left
  }

  function X(a, b, c) {
      var d = a.display;
      this.viewport = b, this.visible = S(d, a.doc, b), this.editorIsHidden = !d.wrapper.offsetWidth, this.wrapperHeight = d.wrapper.clientHeight, this.wrapperWidth = d.wrapper.clientWidth, this.oldDisplayWidth = ub(a), this.force = c, this.dims = da(a), this.events = []
  }

  function Y(a) {
      var b = a.display;
      !b.scrollbarsClipped && b.scroller.offsetWidth && (b.nativeBarWidth = b.scroller.offsetWidth - b.scroller.clientWidth, b.heightForcer.style.height = tb(a) + "px", b.sizer.style.marginBottom = -b.nativeBarWidth + "px", b.sizer.style.borderRightWidth = tb(a) + "px", b.scrollbarsClipped = !0)
  }

  function Z(a, b) {
      var c = a.display,
          d = a.doc;
      if (b.editorIsHidden) return oc(a), !1;
      if (!b.force && b.visible.from >= c.viewFrom && b.visible.to <= c.viewTo && (null == c.updateLineNumbers || c.updateLineNumbers >= c.viewTo) && c.renderedView == c.view && 0 == sc(a)) return !1;
      U(a) && (oc(a), b.dims = da(a));
      var e = d.first + d.size,
          f = Math.max(b.visible.from - a.options.viewportMargin, d.first),
          g = Math.min(e, b.visible.to + a.options.viewportMargin);
      c.viewFrom < f && f - c.viewFrom < 20 && (f = Math.max(d.first, c.viewFrom)), c.viewTo > g && c.viewTo - g < 20 && (g = Math.min(e, c.viewTo)), x && (f = ye(a.doc, f), g = ze(a.doc, g));
      var h = f != c.viewFrom || g != c.viewTo || c.lastWrapHeight != b.wrapperHeight || c.lastWrapWidth != b.wrapperWidth;
      rc(a, f, g), c.viewOffset = qf(kf(a.doc, c.viewFrom)), a.display.mover.style.top = c.viewOffset + "px";
      var i = sc(a);
      if (!h && 0 == i && !b.force && c.renderedView == c.view && (null == c.updateLineNumbers || c.updateLineNumbers >= c.viewTo)) return !1;
      var j = Ag();
      return i > 4 && (c.lineDiv.style.display = "none"), ea(a, c.updateLineNumbers, b.dims), i > 4 && (c.lineDiv.style.display = ""), c.renderedView = c.view, j && Ag() != j && j.offsetHeight && j.focus(), xg(c.cursorDiv), xg(c.selectionDiv), c.gutters.style.height = c.sizer.style.minHeight = 0, h && (c.lastWrapHeight = b.wrapperHeight, c.lastWrapWidth = b.wrapperWidth, mb(a, 400)), c.updateLineNumbers = null, !0
  }

  function $(a, b) {
      for (var c = b.viewport, d = !0;
          (d && a.options.lineWrapping && b.oldDisplayWidth != ub(a) || (c && null != c.top && (c = {
              top: Math.min(a.doc.height + rb(a.display) - vb(a), c.top)
          }), b.visible = S(a.display, a.doc, c), !(b.visible.from >= a.display.viewFrom && b.visible.to <= a.display.viewTo))) && Z(a, b); d = !1) {
          ba(a);
          var e = M(a);
          hb(a), Q(a, e), aa(a, e)
      }
      b.signal(a, "update", a), (a.display.viewFrom != a.display.reportedViewFrom || a.display.viewTo != a.display.reportedViewTo) && (b.signal(a, "viewportChange", a, a.display.viewFrom, a.display.viewTo), a.display.reportedViewFrom = a.display.viewFrom, a.display.reportedViewTo = a.display.viewTo)
  }

  function _(a, b) {
      var c = new X(a, b);
      if (Z(a, c)) {
          ba(a), $(a, c);
          var d = M(a);
          hb(a), Q(a, d), aa(a, d), c.finish()
      }
  }

  function aa(a, b) {
      a.display.sizer.style.minHeight = b.docHeight + "px", a.display.heightForcer.style.top = b.docHeight + "px", a.display.gutters.style.height = b.docHeight + a.display.barHeight + tb(a) + "px"
  }

  function ba(a) {
      for (var b = a.display, c = b.lineDiv.offsetTop, d = 0; d < b.view.length; d++) {
          var h, e = b.view[d];
          if (!e.hidden) {
              if (f && 8 > g) {
                  var i = e.node.offsetTop + e.node.offsetHeight;
                  h = i - c, c = i
              } else {
                  var j = e.node.getBoundingClientRect();
                  h = j.bottom - j.top
              }
              var k = e.line.height - h;
              if (2 > h && (h = Vb(b)), (k > .001 || -.001 > k) && (nf(e.line, h), ca(e.line), e.rest))
                  for (var l = 0; l < e.rest.length; l++) ca(e.rest[l])
          }
      }
  }

  function ca(a) {
      if (a.widgets)
          for (var b = 0; b < a.widgets.length; ++b) a.widgets[b].height = a.widgets[b].node.parentNode.offsetHeight
  }

  function da(a) {
      for (var b = a.display, c = {}, d = {}, e = b.gutters.clientLeft, f = b.gutters.firstChild, g = 0; f; f = f.nextSibling, ++g) c[a.options.gutters[g]] = f.offsetLeft + f.clientLeft + e, d[a.options.gutters[g]] = f.clientWidth;
      return {
          fixedPos: W(b),
          gutterTotalWidth: b.gutters.offsetWidth,
          gutterLeft: c,
          gutterWidth: d,
          wrapperWidth: b.wrapper.clientWidth
      }
  }

  function ea(a, b, c) {
      function i(b) {
          var c = b.nextSibling;
          return h && q && a.display.currentWheelTarget == b ? b.style.display = "none" : b.parentNode.removeChild(b), c
      }
      for (var d = a.display, e = a.options.lineNumbers, f = d.lineDiv, g = f.firstChild, j = d.view, k = d.viewFrom, l = 0; l < j.length; l++) {
          var m = j[l];
          if (m.hidden);
          else if (m.node && m.node.parentNode == f) {
              for (; g != m.node;) g = i(g);
              var o = e && null != b && k >= b && m.lineNumber;
              m.changes && (jg(m.changes, "gutter") > -1 && (o = !1), fa(a, m, k, c)), o && (xg(m.lineNumber), m.lineNumber.appendChild(document.createTextNode(V(a.options, k)))), g = m.node.nextSibling
          } else {
              var n = na(a, m, k, c);
              f.insertBefore(n, g)
          }
          k += m.size
      }
      for (; g;) g = i(g)
  }

  function fa(a, b, c, d) {
      for (var e = 0; e < b.changes.length; e++) {
          var f = b.changes[e];
          "text" == f ? ja(a, b) : "gutter" == f ? la(a, b, c, d) : "class" == f ? ka(b) : "widget" == f && ma(a, b, d)
      }
      b.changes = null
  }

  function ga(a) {
      return a.node == a.text && (a.node = vg("div", null, null, "position: relative"), a.text.parentNode && a.text.parentNode.replaceChild(a.node, a.text), a.node.appendChild(a.text), f && 8 > g && (a.node.style.zIndex = 2)), a.node
  }

  function ha(a) {
      var b = a.bgClass ? a.bgClass + " " + (a.line.bgClass || "") : a.line.bgClass;
      if (b && (b += " CodeMirror-linebackground"), a.background) b ? a.background.className = b : (a.background.parentNode.removeChild(a.background), a.background = null);
      else if (b) {
          var c = ga(a);
          a.background = c.insertBefore(vg("div", null, b), c.firstChild)
      }
  }

  function ia(a, b) {
      var c = a.display.externalMeasured;
      return c && c.line == b.line ? (a.display.externalMeasured = null, b.measure = c.measure, c.built) : Ue(a, b)
  }

  function ja(a, b) {
      var c = b.text.className,
          d = ia(a, b);
      b.text == b.node && (b.node = d.pre), b.text.parentNode.replaceChild(d.pre, b.text), b.text = d.pre, d.bgClass != b.bgClass || d.textClass != b.textClass ? (b.bgClass = d.bgClass, b.textClass = d.textClass, ka(b)) : c && (b.text.className = c)
  }

  function ka(a) {
      ha(a), a.line.wrapClass ? ga(a).className = a.line.wrapClass : a.node != a.text && (a.node.className = "");
      var b = a.textClass ? a.textClass + " " + (a.line.textClass || "") : a.line.textClass;
      a.text.className = b || ""
  }

  function la(a, b, c, d) {
      if (b.gutter && (b.node.removeChild(b.gutter), b.gutter = null), b.gutterBackground && (b.node.removeChild(b.gutterBackground), b.gutterBackground = null), b.line.gutterClass) {
          var e = ga(b);
          b.gutterBackground = vg("div", null, "CodeMirror-gutter-background " + b.line.gutterClass, "left: " + (a.options.fixedGutter ? d.fixedPos : -d.gutterTotalWidth) + "px; width: " + d.gutterTotalWidth + "px"), e.insertBefore(b.gutterBackground, b.text)
      }
      var f = b.line.gutterMarkers;
      if (a.options.lineNumbers || f) {
          var e = ga(b),
              g = b.gutter = vg("div", null, "CodeMirror-gutter-wrapper", "left: " + (a.options.fixedGutter ? d.fixedPos : -d.gutterTotalWidth) + "px");
          if (a.display.input.setUneditable(g), e.insertBefore(g, b.text), b.line.gutterClass && (g.className += " " + b.line.gutterClass), !a.options.lineNumbers || f && f["CodeMirror-linenumbers"] || (b.lineNumber = g.appendChild(vg("div", V(a.options, c), "CodeMirror-linenumber CodeMirror-gutter-elt", "left: " + d.gutterLeft["CodeMirror-linenumbers"] + "px; width: " + a.display.lineNumInnerWidth + "px"))), f)
              for (var h = 0; h < a.options.gutters.length; ++h) {
                  var i = a.options.gutters[h],
                      j = f.hasOwnProperty(i) && f[i];
                  j && g.appendChild(vg("div", [j], "CodeMirror-gutter-elt", "left: " + d.gutterLeft[i] + "px; width: " + d.gutterWidth[i] + "px"))
              }
      }
  }

  function ma(a, b, c) {
      b.alignable && (b.alignable = null);
      for (var e, d = b.node.firstChild; d; d = e) {
          var e = d.nextSibling;
          "CodeMirror-linewidget" == d.className && b.node.removeChild(d)
      }
      oa(a, b, c)
  }

  function na(a, b, c, d) {
      var e = ia(a, b);
      return b.text = b.node = e.pre, e.bgClass && (b.bgClass = e.bgClass), e.textClass && (b.textClass = e.textClass), ka(b), la(a, b, c, d), oa(a, b, d), b.node
  }

  function oa(a, b, c) {
      if (pa(a, b.line, b, c, !0), b.rest)
          for (var d = 0; d < b.rest.length; d++) pa(a, b.rest[d], b, c, !1)
  }

  function pa(a, b, c, d, e) {
      if (b.widgets)
          for (var f = ga(c), g = 0, h = b.widgets; g < h.length; ++g) {
              var i = h[g],
                  j = vg("div", [i.node], "CodeMirror-linewidget");
              i.handleMouseEvents || j.setAttribute("cm-ignore-events", "true"), qa(i, j, c, d), a.display.input.setUneditable(j), e && i.above ? f.insertBefore(j, c.gutter || c.text) : f.appendChild(j), Tf(i, "redraw")
          }
  }

  function qa(a, b, c, d) {
      if (a.noHScroll) {
          (c.alignable || (c.alignable = [])).push(b);
          var e = d.wrapperWidth;
          b.style.left = d.fixedPos + "px", a.coverGutter || (e -= d.gutterTotalWidth, b.style.paddingLeft = d.gutterTotalWidth + "px"), b.style.width = e + "px"
      }
      a.coverGutter && (b.style.zIndex = 5, b.style.position = "relative", a.noHScroll || (b.style.marginLeft = -d.gutterTotalWidth + "px"))
  }

  function ta(a) {
      return ra(a.line, a.ch)
  }

  function ua(a, b) {
      return sa(a, b) < 0 ? b : a
  }

  function va(a, b) {
      return sa(a, b) < 0 ? a : b
  }

  function wa(a) {
      a.state.focused || (a.display.input.focus(), bd(a))
  }

  function ya(a, b, c, d, e) {
      var f = a.doc;
      a.display.shift = !1, d || (d = f.sel);
      var g = a.state.pasteIncoming || "paste" == e,
          h = f.splitLines(b),
          i = null;
      if (g && d.ranges.length > 1)
          if (xa && xa.text.join("\n") == b) {
              if (d.ranges.length % xa.text.length == 0) {
                  i = [];
                  for (var j = 0; j < xa.text.length; j++) i.push(f.splitLines(xa.text[j]))
              }
          } else h.length == d.ranges.length && (i = kg(h, function(a) {
              return [a]
          }));
      for (var j = d.ranges.length - 1; j >= 0; j--) {
          var k = d.ranges[j],
              l = k.from(),
              m = k.to();
          k.empty() && (c && c > 0 ? l = ra(l.line, l.ch - c) : a.state.overwrite && !g ? m = ra(m.line, Math.min(kf(f, m.line).text.length, m.ch + hg(h).length)) : xa && xa.lineWise && xa.text.join("\n") == b && (l = m = ra(l.line, 0)));
          var n = a.curOp.updateInput,
              o = {
                  from: l,
                  to: m,
                  text: i ? i[j % i.length] : h,
                  origin: e || (g ? "paste" : a.state.cutIncoming ? "cut" : "+input")
              };
          ld(a.doc, o), Tf(a, "inputRead", a, o)
      }
      b && !g && Aa(a, b), xd(a), a.curOp.updateInput = n, a.curOp.typing = !0, a.state.pasteIncoming = a.state.cutIncoming = !1
  }

  function za(a, b) {
      var c = a.clipboardData && a.clipboardData.getData("text/plain");
      return c ? (a.preventDefault(), b.isReadOnly() || b.options.disableInput || gc(b, function() {
          ya(b, c, 0, null, "paste")
      }), !0) : void 0
  }

  function Aa(a, b) {
      if (a.options.electricChars && a.options.smartIndent)
          for (var c = a.doc.sel, d = c.ranges.length - 1; d >= 0; d--) {
              var e = c.ranges[d];
              if (!(e.head.ch > 100 || d && c.ranges[d - 1].head.line == e.head.line)) {
                  var f = a.getModeAt(e.head),
                      g = !1;
                  if (f.electricChars) {
                      for (var h = 0; h < f.electricChars.length; h++)
                          if (b.indexOf(f.electricChars.charAt(h)) > -1) {
                              g = zd(a, e.head.line, "smart");
                              break
                          }
                  } else f.electricInput && f.electricInput.test(kf(a.doc, e.head.line).text.slice(0, e.head.ch)) && (g = zd(a, e.head.line, "smart"));
                  g && Tf(a, "electricInput", a, e.head.line)
              }
          }
  }

  function Ba(a) {
      for (var b = [], c = [], d = 0; d < a.doc.sel.ranges.length; d++) {
          var e = a.doc.sel.ranges[d].head.line,
              f = {
                  anchor: ra(e, 0),
                  head: ra(e + 1, 0)
              };
          c.push(f), b.push(a.getRange(f.anchor, f.head))
      }
      return {
          text: b,
          ranges: c
      }
  }

  function Ca(a) {
      a.setAttribute("autocorrect", "off"), a.setAttribute("autocapitalize", "off"), a.setAttribute("spellcheck", "false")
  }

  function Da(a) {
      this.cm = a, this.prevInput = "", this.pollingFast = !1, this.polling = new cg, this.inaccurateSelection = !1, this.hasSelection = !1, this.composing = null
  }

  function Ea() {
      var a = vg("textarea", null, null, "position: absolute; padding: 0; width: 1px; height: 1em; outline: none"),
          b = vg("div", [a], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
      return h ? a.style.width = "1000px" : a.setAttribute("wrap", "off"), o && (a.style.border = "1px solid black"), Ca(a), b
  }

  function Fa(a) {
      this.cm = a, this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null, this.polling = new cg, this.gracePeriod = !1
  }

  function Ga(a, b) {
      var c = Ab(a, b.line);
      if (!c || c.hidden) return null;
      var d = kf(a.doc, b.line),
          e = xb(c, d, b.line),
          f = rf(d),
          g = "left";
      if (f) {
          var h = ch(f, b.ch);
          g = h % 2 ? "right" : "left"
      }
      var i = Eb(e.map, b.ch, g);
      return i.offset = "right" == i.collapse ? i.end : i.start, i
  }

  function Ha(a, b) {
      return b && (a.bad = !0), a
  }

  function Ia(a, b, c) {
      var d;
      if (b == a.display.lineDiv) {
          if (d = a.display.lineDiv.childNodes[c], !d) return Ha(a.clipPos(ra(a.display.viewTo - 1)), !0);
          b = null, c = 0
      } else
          for (d = b;; d = d.parentNode) {
              if (!d || d == a.display.lineDiv) return null;
              if (d.parentNode && d.parentNode == a.display.lineDiv) break
          }
      for (var e = 0; e < a.display.view.length; e++) {
          var f = a.display.view[e];
          if (f.node == d) return Ja(f, b, c)
      }
  }

  function Ja(a, b, c) {
      function k(b, c, d) {
          for (var e = -1; e < (j ? j.length : 0); e++)
              for (var f = 0 > e ? i.map : j[e], g = 0; g < f.length; g += 3) {
                  var h = f[g + 2];
                  if (h == b || h == c) {
                      var k = of(0 > e ? a.line : a.rest[e]),
                          l = f[g] + d;
                      return (0 > d || h != b) && (l = f[g + (d ? 1 : 0)]), ra(k, l)
                  }
              }
      }
      var d = a.text.firstChild,
          e = !1;
      if (!b || !zg(d, b)) return Ha(ra(of(a.line), 0), !0);
      if (b == d && (e = !0, b = d.childNodes[c], c = 0, !b)) {
          var f = a.rest ? hg(a.rest) : a.line;
          return Ha(ra(of(f), f.text.length), e)
      }
      var g = 3 == b.nodeType ? b : null,
          h = b;
      for (g || 1 != b.childNodes.length || 3 != b.firstChild.nodeType || (g = b.firstChild, c && (c = g.nodeValue.length)); h.parentNode != d;) h = h.parentNode;
      var i = a.measure,
          j = i.maps,
          l = k(g, h, c);
      if (l) return Ha(l, e);
      for (var m = h.nextSibling, n = g ? g.nodeValue.length - c : 0; m; m = m.nextSibling) {
          if (l = k(m, m.firstChild, 0)) return Ha(ra(l.line, l.ch - n), e);
          n += m.textContent.length
      }
      for (var o = h.previousSibling, n = c; o; o = o.previousSibling) {
          if (l = k(o, o.firstChild, -1)) return Ha(ra(l.line, l.ch + n), e);
          n += m.textContent.length
      }
  }

  function Ka(a, b, c, d, e) {
      function i(a) {
          return function(b) {
              return b.id == a
          }
      }

      function j(b) {
          if (1 == b.nodeType) {
              var c = b.getAttribute("cm-text");
              if (null != c) return "" == c && (c = b.textContent.replace(/\u200b/g, "")), void(f += c);
              var l, k = b.getAttribute("cm-marker");
              if (k) {
                  var m = a.findMarks(ra(d, 0), ra(e + 1, 0), i(+k));
                  return void(m.length && (l = m[0].find()) && (f += lf(a.doc, l.from, l.to).join(h)))
              }
              if ("false" == b.getAttribute("contenteditable")) return;
              for (var n = 0; n < b.childNodes.length; n++) j(b.childNodes[n]);
              /^(pre|div|p)$/i.test(b.nodeName) && (g = !0)
          } else if (3 == b.nodeType) {
              var o = b.nodeValue;
              if (!o) return;
              g && (f += h, g = !1), f += o
          }
      }
      for (var f = "", g = !1, h = a.doc.lineSeparator(); j(b), b != c;) b = b.nextSibling;
      return f
  }

  function La(a, b) {
      this.ranges = a, this.primIndex = b
  }

  function Ma(a, b) {
      this.anchor = a, this.head = b
  }

  function Na(a, b) {
      var c = a[b];
      a.sort(function(a, b) {
          return sa(a.from(), b.from())
      }), b = jg(a, c);
      for (var d = 1; d < a.length; d++) {
          var e = a[d],
              f = a[d - 1];
          if (sa(f.to(), e.from()) >= 0) {
              var g = va(f.from(), e.from()),
                  h = ua(f.to(), e.to()),
                  i = f.empty() ? e.from() == e.head : f.from() == f.head;
              b >= d && --b, a.splice(--d, 2, new Ma(i ? h : g, i ? g : h))
          }
      }
      return new La(a, b)
  }

  function Oa(a, b) {
      return new La([new Ma(a, b || a)], 0)
  }

  function Pa(a, b) {
      return Math.max(a.first, Math.min(b, a.first + a.size - 1))
  }

  function Qa(a, b) {
      if (b.line < a.first) return ra(a.first, 0);
      var c = a.first + a.size - 1;
      return b.line > c ? ra(c, kf(a, c).text.length) : Ra(b, kf(a, b.line).text.length)
  }

  function Ra(a, b) {
      var c = a.ch;
      return null == c || c > b ? ra(a.line, b) : 0 > c ? ra(a.line, 0) : a
  }

  function Sa(a, b) {
      return b >= a.first && b < a.first + a.size
  }

  function Ta(a, b) {
      for (var c = [], d = 0; d < b.length; d++) c[d] = Qa(a, b[d]);
      return c
  }

  function Ua(a, b, c, d) {
      if (a.cm && a.cm.display.shift || a.extend) {
          var e = b.anchor;
          if (d) {
              var f = sa(c, e) < 0;
              f != sa(d, e) < 0 ? (e = c, c = d) : f != sa(c, d) < 0 && (c = d)
          }
          return new Ma(e, c)
      }
      return new Ma(d || c, c)
  }

  function Va(a, b, c, d) {
      _a(a, new La([Ua(a, a.sel.primary(), b, c)], 0), d)
  }

  function Wa(a, b, c) {
      for (var d = [], e = 0; e < a.sel.ranges.length; e++) d[e] = Ua(a, a.sel.ranges[e], b[e], null);
      var f = Na(d, a.sel.primIndex);
      _a(a, f, c)
  }

  function Xa(a, b, c, d) {
      var e = a.sel.ranges.slice(0);
      e[b] = c, _a(a, Na(e, a.sel.primIndex), d)
  }

  function Ya(a, b, c, d) {
      _a(a, Oa(b, c), d)
  }

  function Za(a, b, c) {
      var d = {
          ranges: b.ranges,
          update: function(b) {
              this.ranges = [];
              for (var c = 0; c < b.length; c++) this.ranges[c] = new Ma(Qa(a, b[c].anchor), Qa(a, b[c].head))
          },
          origin: c && c.origin
      };
      return Rf(a, "beforeSelectionChange", a, d), a.cm && Rf(a.cm, "beforeSelectionChange", a.cm, d), d.ranges != b.ranges ? Na(d.ranges, d.ranges.length - 1) : b
  }

  function $a(a, b, c) {
      var d = a.history.done,
          e = hg(d);
      e && e.ranges ? (d[d.length - 1] = b, ab(a, b, c)) : _a(a, b, c)
  }

  function _a(a, b, c) {
      ab(a, b, c), yf(a, a.sel, a.cm ? a.cm.curOp.id : NaN, c)
  }

  function ab(a, b, c) {
      (Xf(a, "beforeSelectionChange") || a.cm && Xf(a.cm, "beforeSelectionChange")) && (b = Za(a, b, c));
      var d = c && c.bias || (sa(b.primary().head, a.sel.primary().head) < 0 ? -1 : 1);
      bb(a, db(a, b, d, !0)), c && c.scroll === !1 || !a.cm || xd(a.cm)
  }

  function bb(a, b) {
      b.equals(a.sel) || (a.sel = b, a.cm && (a.cm.curOp.updateInput = a.cm.curOp.selectionChanged = !0, Wf(a.cm)), Tf(a, "cursorActivity", a))
  }

  function cb(a) {
      bb(a, db(a, a.sel, null, !1), _f)
  }

  function db(a, b, c, d) {
      for (var e, f = 0; f < b.ranges.length; f++) {
          var g = b.ranges[f],
              h = b.ranges.length == a.sel.ranges.length && a.sel.ranges[f],
              i = fb(a, g.anchor, h && h.anchor, c, d),
              j = fb(a, g.head, h && h.head, c, d);
          (e || i != g.anchor || j != g.head) && (e || (e = b.ranges.slice(0, f)), e[f] = new Ma(i, j))
      }
      return e ? Na(e, b.primIndex) : b
  }

  function eb(a, b, c, d, e) {
      var f = kf(a, b.line);
      if (f.markedSpans)
          for (var g = 0; g < f.markedSpans.length; ++g) {
              var h = f.markedSpans[g],
                  i = h.marker;
              if ((null == h.from || (i.inclusiveLeft ? h.from <= b.ch : h.from < b.ch)) && (null == h.to || (i.inclusiveRight ? h.to >= b.ch : h.to > b.ch))) {
                  if (e && (Rf(i, "beforeCursorEnter"), i.explicitlyCleared)) {
                      if (f.markedSpans) {
                          --g;
                          continue
                      }
                      break
                  }
                  if (!i.atomic) continue;
                  if (c) {
                      var k, j = i.find(0 > d ? 1 : -1);
                      if ((0 > d ? i.inclusiveRight : i.inclusiveLeft) && (j = gb(a, j, -d, j && j.line == b.line ? f : null)), j && j.line == b.line && (k = sa(j, c)) && (0 > d ? 0 > k : k > 0)) return eb(a, j, b, d, e)
                  }
                  var l = i.find(0 > d ? -1 : 1);
                  return (0 > d ? i.inclusiveLeft : i.inclusiveRight) && (l = gb(a, l, d, l.line == b.line ? f : null)), l ? eb(a, l, b, d, e) : null
              }
          }
      return b
  }

  function fb(a, b, c, d, e) {
      var f = d || 1,
          g = eb(a, b, c, f, e) || !e && eb(a, b, c, f, !0) || eb(a, b, c, -f, e) || !e && eb(a, b, c, -f, !0);
      return g ? g : (a.cantEdit = !0, ra(a.first, 0))
  }

  function gb(a, b, c, d) {
      return 0 > c && 0 == b.ch ? b.line > a.first ? Qa(a, ra(b.line - 1)) : null : c > 0 && b.ch == (d || kf(a, b.line)).text.length ? b.line < a.first + a.size - 1 ? ra(b.line + 1, 0) : null : new ra(b.line, b.ch + c)
  }

  function hb(a) {
      a.display.input.showSelection(a.display.input.prepareSelection())
  }

  function ib(a, b) {
      for (var c = a.doc, d = {}, e = d.cursors = document.createDocumentFragment(), f = d.selection = document.createDocumentFragment(), g = 0; g < c.sel.ranges.length; g++)
          if (b !== !1 || g != c.sel.primIndex) {
              var h = c.sel.ranges[g];
              if (!(h.from().line >= a.display.viewTo || h.to().line < a.display.viewFrom)) {
                  var i = h.empty();
                  (i || a.options.showCursorWhenSelecting) && jb(a, h.head, e), i || kb(a, h, f)
              }
          }
      return d
  }

  function jb(a, b, c) {
      var d = Pb(a, b, "div", null, null, !a.options.singleCursorHeightPerLine),
          e = c.appendChild(vg("div", "\xa0", "CodeMirror-cursor"));
      if (e.style.left = d.left + "px", e.style.top = d.top + "px", e.style.height = Math.max(0, d.bottom - d.top) * a.options.cursorHeight + "px", d.other) {
          var f = c.appendChild(vg("div", "\xa0", "CodeMirror-cursor CodeMirror-secondarycursor"));
          f.style.display = "", f.style.left = d.other.left + "px", f.style.top = d.other.top + "px", f.style.height = .85 * (d.other.bottom - d.other.top) + "px"
      }
  }

  function kb(a, b, c) {
      function j(a, b, c, d) {
          0 > b && (b = 0), b = Math.round(b), d = Math.round(d), f.appendChild(vg("div", null, "CodeMirror-selected", "position: absolute; left: " + a + "px; top: " + b + "px; width: " + (null == c ? i - a : c) + "px; height: " + (d - b) + "px"))
      }

      function k(b, c, d) {
          function m(c, d) {
              return Ob(a, ra(b, c), "div", f, d)
          }
          var k, l, f = kf(e, b),
              g = f.text.length;
          return Ug(rf(f), c || 0, null == d ? g : d, function(a, b, e) {
              var n, o, p, f = m(a, "left");
              if (a == b) n = f, o = p = f.left;
              else {
                  if (n = m(b - 1, "right"), "rtl" == e) {
                      var q = f;
                      f = n, n = q
                  }
                  o = f.left, p = n.right
              }
              null == c && 0 == a && (o = h), n.top - f.top > 3 && (j(o, f.top, null, f.bottom), o = h, f.bottom < n.top && j(o, f.bottom, null, n.top)), null == d && b == g && (p = i), (!k || f.top < k.top || f.top == k.top && f.left < k.left) && (k = f), (!l || n.bottom > l.bottom || n.bottom == l.bottom && n.right > l.right) && (l = n), h + 1 > o && (o = h), j(o, n.top, p - o, n.bottom)
          }), {
              start: k,
              end: l
          }
      }
      var d = a.display,
          e = a.doc,
          f = document.createDocumentFragment(),
          g = sb(a.display),
          h = g.left,
          i = Math.max(d.sizerWidth, ub(a) - d.sizer.offsetLeft) - g.right,
          l = b.from(),
          m = b.to();
      if (l.line == m.line) k(l.line, l.ch, m.ch);
      else {
          var n = kf(e, l.line),
              o = kf(e, m.line),
              p = we(n) == we(o),
              q = k(l.line, l.ch, p ? n.text.length + 1 : null).end,
              r = k(m.line, p ? 0 : null, m.ch).start;
          p && (q.top < r.top - 2 ? (j(q.right, q.top, null, q.bottom), j(h, r.top, r.left, r.bottom)) : j(q.right, q.top, r.left - q.right, q.bottom)), q.bottom < r.top && j(h, q.bottom, null, r.top)
      }
      c.appendChild(f)
  }

  function lb(a) {
      if (a.state.focused) {
          var b = a.display;
          clearInterval(b.blinker);
          var c = !0;
          b.cursorDiv.style.visibility = "", a.options.cursorBlinkRate > 0 ? b.blinker = setInterval(function() {
              b.cursorDiv.style.visibility = (c = !c) ? "" : "hidden"
          }, a.options.cursorBlinkRate) : a.options.cursorBlinkRate < 0 && (b.cursorDiv.style.visibility = "hidden")
      }
  }

  function mb(a, b) {
      a.doc.mode.startState && a.doc.frontier < a.display.viewTo && a.state.highlight.set(b, og(nb, a))
  }

  function nb(a) {
      var b = a.doc;
      if (b.frontier < b.first && (b.frontier = b.first), !(b.frontier >= a.display.viewTo)) {
          var c = +new Date + a.options.workTime,
              d = Nd(b.mode, pb(a, b.frontier)),
              e = [];
          b.iter(b.frontier, Math.min(b.first + b.size, a.display.viewTo + 500), function(f) {
              if (b.frontier >= a.display.viewFrom) {
                  var g = f.styles,
                      h = f.text.length > a.options.maxHighlightLength,
                      i = Oe(a, f, h ? Nd(b.mode, d) : d, !0);
                  f.styles = i.styles;
                  var j = f.styleClasses,
                      k = i.classes;
                  k ? f.styleClasses = k : j && (f.styleClasses = null);
                  for (var l = !g || g.length != f.styles.length || j != k && (!j || !k || j.bgClass != k.bgClass || j.textClass != k.textClass), m = 0; !l && m < g.length; ++m) l = g[m] != f.styles[m];
                  l && e.push(b.frontier), f.stateAfter = h ? d : Nd(b.mode, d)
              } else f.text.length <= a.options.maxHighlightLength && Qe(a, f.text, d), f.stateAfter = b.frontier % 5 == 0 ? Nd(b.mode, d) : null;
              return ++b.frontier, +new Date > c ? (mb(a, a.options.workDelay), !0) : void 0
          }), e.length && gc(a, function() {
              for (var b = 0; b < e.length; b++) nc(a, e[b], "text")
          })
      }
  }

  function ob(a, b, c) {
      for (var d, e, f = a.doc, g = c ? -1 : b - (a.doc.mode.innerMode ? 1e3 : 100), h = b; h > g; --h) {
          if (h <= f.first) return f.first;
          var i = kf(f, h - 1);
          if (i.stateAfter && (!c || h <= f.frontier)) return h;
          var j = dg(i.text, null, a.options.tabSize);
          (null == e || d > j) && (e = h - 1, d = j)
      }
      return e
  }

  function pb(a, b, c) {
      var d = a.doc,
          e = a.display;
      if (!d.mode.startState) return !0;
      var f = ob(a, b, c),
          g = f > d.first && kf(d, f - 1).stateAfter;
      return g = g ? Nd(d.mode, g) : Od(d.mode), d.iter(f, b, function(c) {
          Qe(a, c.text, g);
          var h = f == b - 1 || f % 5 == 0 || f >= e.viewFrom && f < e.viewTo;
          c.stateAfter = h ? Nd(d.mode, g) : null, ++f
      }), c && (d.frontier = f), g
  }

  function qb(a) {
      return a.lineSpace.offsetTop
  }

  function rb(a) {
      return a.mover.offsetHeight - a.lineSpace.offsetHeight
  }

  function sb(a) {
      if (a.cachedPaddingH) return a.cachedPaddingH;
      var b = yg(a.measure, vg("pre", "x")),
          c = window.getComputedStyle ? window.getComputedStyle(b) : b.currentStyle,
          d = {
              left: parseInt(c.paddingLeft),
              right: parseInt(c.paddingRight)
          };
      return isNaN(d.left) || isNaN(d.right) || (a.cachedPaddingH = d), d
  }

  function tb(a) {
      return Zf - a.display.nativeBarWidth
  }

  function ub(a) {
      return a.display.scroller.clientWidth - tb(a) - a.display.barWidth
  }

  function vb(a) {
      return a.display.scroller.clientHeight - tb(a) - a.display.barHeight
  }

  function wb(a, b, c) {
      var d = a.options.lineWrapping,
          e = d && ub(a);
      if (!b.measure.heights || d && b.measure.width != e) {
          var f = b.measure.heights = [];
          if (d) {
              b.measure.width = e;
              for (var g = b.text.firstChild.getClientRects(), h = 0; h < g.length - 1; h++) {
                  var i = g[h],
                      j = g[h + 1];
                  Math.abs(i.bottom - j.bottom) > 2 && f.push((i.bottom + j.top) / 2 - c.top)
              }
          }
          f.push(c.bottom - c.top)
      }
  }

  function xb(a, b, c) {
      if (a.line == b) return {
          map: a.measure.map,
          cache: a.measure.cache
      };
      for (var d = 0; d < a.rest.length; d++)
          if (a.rest[d] == b) return {
              map: a.measure.maps[d],
              cache: a.measure.caches[d]
          };
      for (var d = 0; d < a.rest.length; d++)
          if (of(a.rest[d]) > c) return {
              map: a.measure.maps[d],
              cache: a.measure.caches[d],
              before: !0
          }
  }

  function yb(a, b) {
      b = we(b);
      var c = of(b),
          d = a.display.externalMeasured = new kc(a.doc, b, c);
      d.lineN = c;
      var e = d.built = Ue(a, d);
      return d.text = e.pre, yg(a.display.lineMeasure, e.pre), d
  }

  function zb(a, b, c, d) {
      return Cb(a, Bb(a, b), c, d)
  }

  function Ab(a, b) {
      if (b >= a.display.viewFrom && b < a.display.viewTo) return a.display.view[pc(a, b)];
      var c = a.display.externalMeasured;
      return c && b >= c.lineN && b < c.lineN + c.size ? c : void 0
  }

  function Bb(a, b) {
      var c = of(b),
          d = Ab(a, c);
      d && !d.text ? d = null : d && d.changes && (fa(a, d, c, da(a)), a.curOp.forceUpdate = !0), d || (d = yb(a, b));
      var e = xb(d, b, c);
      return {
          line: b,
          view: d,
          rect: null,
          map: e.map,
          cache: e.cache,
          before: e.before,
          hasHeights: !1
      }
  }

  function Cb(a, b, c, d, e) {
      b.before && (c = -1);
      var g, f = c + (d || "");
      return b.cache.hasOwnProperty(f) ? g = b.cache[f] : (b.rect || (b.rect = b.view.text.getBoundingClientRect()), b.hasHeights || (wb(a, b.view, b.rect), b.hasHeights = !0), g = Fb(a, b, c, d), g.bogus || (b.cache[f] = g)), {
          left: g.left,
          right: g.right,
          top: e ? g.rtop : g.top,
          bottom: e ? g.rbottom : g.bottom
      }
  }

  function Eb(a, b, c) {
      for (var d, e, f, g, h = 0; h < a.length; h += 3) {
          var i = a[h],
              j = a[h + 1];
          if (i > b ? (e = 0, f = 1, g = "left") : j > b ? (e = b - i, f = e + 1) : (h == a.length - 3 || b == j && a[h + 3] > b) && (f = j - i, e = f - 1, b >= j && (g = "right")), null != e) {
              if (d = a[h + 2], i == j && c == (d.insertLeft ? "left" : "right") && (g = c), "left" == c && 0 == e)
                  for (; h && a[h - 2] == a[h - 3] && a[h - 1].insertLeft;) d = a[(h -= 3) + 2], g = "left";
              if ("right" == c && e == j - i)
                  for (; h < a.length - 3 && a[h + 3] == a[h + 4] && !a[h + 5].insertLeft;) d = a[(h += 3) + 2], g = "right";
              break
          }
      }
      return {
          node: d,
          start: e,
          end: f,
          collapse: g,
          coverStart: i,
          coverEnd: j
      }
  }

  function Fb(a, b, c, d) {
      var l, e = Eb(b.map, c, d),
          h = e.node,
          i = e.start,
          j = e.end,
          k = e.collapse;
      if (3 == h.nodeType) {
          for (var m = 0; 4 > m; m++) {
              for (; i && ug(b.line.text.charAt(e.coverStart + i));) --i;
              for (; e.coverStart + j < e.coverEnd && ug(b.line.text.charAt(e.coverStart + j));) ++j;
              if (f && 9 > g && 0 == i && j == e.coverEnd - e.coverStart) l = h.parentNode.getBoundingClientRect();
              else if (f && a.options.lineWrapping) {
                  var n = wg(h, i, j).getClientRects();
                  l = n.length ? n["right" == d ? n.length - 1 : 0] : Db
              } else l = wg(h, i, j).getBoundingClientRect() || Db;
              if (l.left || l.right || 0 == i) break;
              j = i, i -= 1, k = "right"
          }
          f && 11 > g && (l = Gb(a.display.measure, l))
      } else {
          i > 0 && (k = d = "right");
          var n;
          l = a.options.lineWrapping && (n = h.getClientRects()).length > 1 ? n["right" == d ? n.length - 1 : 0] : h.getBoundingClientRect()
      }
      if (f && 9 > g && !i && (!l || !l.left && !l.right)) {
          var o = h.parentNode.getClientRects()[0];
          l = o ? {
              left: o.left,
              right: o.left + Wb(a.display),
              top: o.top,
              bottom: o.bottom
          } : Db
      }
      for (var p = l.top - b.rect.top, q = l.bottom - b.rect.top, r = (p + q) / 2, s = b.view.measure.heights, m = 0; m < s.length - 1 && !(r < s[m]); m++);
      var t = m ? s[m - 1] : 0,
          u = s[m],
          v = {
              left: ("right" == k ? l.right : l.left) - b.rect.left,
              right: ("left" == k ? l.left : l.right) - b.rect.left,
              top: t,
              bottom: u
          };
      return l.left || l.right || (v.bogus = !0), a.options.singleCursorHeightPerLine || (v.rtop = p, v.rbottom = q), v
  }

  function Gb(a, b) {
      if (!window.screen || null == screen.logicalXDPI || screen.logicalXDPI == screen.deviceXDPI || !Sg(a)) return b;
      var c = screen.logicalXDPI / screen.deviceXDPI,
          d = screen.logicalYDPI / screen.deviceYDPI;
      return {
          left: b.left * c,
          right: b.right * c,
          top: b.top * d,
          bottom: b.bottom * d
      }
  }

  function Hb(a) {
      if (a.measure && (a.measure.cache = {}, a.measure.heights = null, a.rest))
          for (var b = 0; b < a.rest.length; b++) a.measure.caches[b] = {}
  }

  function Ib(a) {
      a.display.externalMeasure = null, xg(a.display.lineMeasure);
      for (var b = 0; b < a.display.view.length; b++) Hb(a.display.view[b])
  }

  function Jb(a) {
      Ib(a), a.display.cachedCharWidth = a.display.cachedTextHeight = a.display.cachedPaddingH = null, a.options.lineWrapping || (a.display.maxLineChanged = !0), a.display.lineNumChars = null
  }

  function Kb() {
      return window.pageXOffset || (document.documentElement || document.body).scrollLeft
  }

  function Lb() {
      return window.pageYOffset || (document.documentElement || document.body).scrollTop
  }

  function Mb(a, b, c, d) {
      if (b.widgets)
          for (var e = 0; e < b.widgets.length; ++e)
              if (b.widgets[e].above) {
                  var f = Ee(b.widgets[e]);
                  c.top += f, c.bottom += f
              }
      if ("line" == d) return c;
      d || (d = "local");
      var g = qf(b);
      if ("local" == d ? g += qb(a.display) : g -= a.display.viewOffset, "page" == d || "window" == d) {
          var h = a.display.lineSpace.getBoundingClientRect();
          g += h.top + ("window" == d ? 0 : Lb());
          var i = h.left + ("window" == d ? 0 : Kb());
          c.left += i, c.right += i
      }
      return c.top += g, c.bottom += g, c
  }

  function Nb(a, b, c) {
      if ("div" == c) return b;
      var d = b.left,
          e = b.top;
      if ("page" == c) d -= Kb(), e -= Lb();
      else if ("local" == c || !c) {
          var f = a.display.sizer.getBoundingClientRect();
          d += f.left, e += f.top
      }
      var g = a.display.lineSpace.getBoundingClientRect();
      return {
          left: d - g.left,
          top: e - g.top
      }
  }

  function Ob(a, b, c, d, e) {
      return d || (d = kf(a.doc, b.line)), Mb(a, d, zb(a, d, b.ch, e), c)
  }

  function Pb(a, b, c, d, e, f) {
      function g(b, g) {
          var h = Cb(a, e, b, g ? "right" : "left", f);
          return g ? h.left = h.right : h.right = h.left, Mb(a, d, h, c)
      }

      function h(a, b) {
          var c = i[b],
              d = c.level % 2;
          return a == Vg(c) && b && c.level < i[b - 1].level ? (c = i[--b], a = Wg(c) - (c.level % 2 ? 0 : 1), d = !0) : a == Wg(c) && b < i.length - 1 && c.level < i[b + 1].level && (c = i[++b], a = Vg(c) - c.level % 2, d = !1), d && a == c.to && a > c.from ? g(a - 1) : g(a, d)
      }
      d = d || kf(a.doc, b.line), e || (e = Bb(a, d));
      var i = rf(d),
          j = b.ch;
      if (!i) return g(j);
      var k = ch(i, j),
          l = h(j, k);
      return null != bh && (l.other = h(j, bh)), l
  }

  function Qb(a, b) {
      var c = 0,
          b = Qa(a.doc, b);
      a.options.lineWrapping || (c = Wb(a.display) * b.ch);
      var d = kf(a.doc, b.line),
          e = qf(d) + qb(a.display);
      return {
          left: c,
          right: c,
          top: e,
          bottom: e + d.height
      }
  }

  function Rb(a, b, c, d) {
      var e = ra(a, b);
      return e.xRel = d, c && (e.outside = !0), e
  }

  function Sb(a, b, c) {
      var d = a.doc;
      if (c += a.display.viewOffset, 0 > c) return Rb(d.first, 0, !0, -1);
      var e = pf(d, c),
          f = d.first + d.size - 1;
      if (e > f) return Rb(d.first + d.size - 1, kf(d, f).text.length, !0, 1);
      0 > b && (b = 0);
      for (var g = kf(d, e);;) {
          var h = Tb(a, g, e, b, c),
              i = ue(g),
              j = i && i.find(0, !0);
          if (!i || !(h.ch > j.from.ch || h.ch == j.from.ch && h.xRel > 0)) return h;
          e = of(g = j.to.line)
      }
  }

  function Tb(a, b, c, d, e) {
      function j(d) {
          var e = Pb(a, ra(c, d), "line", b, i);
          return g = !0, f > e.bottom ? e.left - h : f < e.top ? e.left + h : (g = !1, e.left)
      }
      var f = e - qf(b),
          g = !1,
          h = 2 * a.display.wrapper.clientWidth,
          i = Bb(a, b),
          k = rf(b),
          l = b.text.length,
          m = Xg(b),
          n = Yg(b),
          o = j(m),
          p = g,
          q = j(n),
          r = g;
      if (d > q) return Rb(c, n, r, 1);
      for (;;) {
          if (k ? n == m || n == eh(b, m, 1) : 1 >= n - m) {
              for (var s = o > d || q - d >= d - o ? m : n, t = d - (s == m ? o : q); ug(b.text.charAt(s));) ++s;
              var u = Rb(c, s, s == m ? p : r, -1 > t ? -1 : t > 1 ? 1 : 0);
              return u
          }
          var v = Math.ceil(l / 2),
              w = m + v;
          if (k) {
              w = m;
              for (var x = 0; v > x; ++x) w = eh(b, w, 1)
          }
          var y = j(w);
          y > d ? (n = w, q = y, (r = g) && (q += 1e3), l = v) : (m = w, o = y, p = g, l -= v)
      }
  }

  function Vb(a) {
      if (null != a.cachedTextHeight) return a.cachedTextHeight;
      if (null == Ub) {
          Ub = vg("pre");
          for (var b = 0; 49 > b; ++b) Ub.appendChild(document.createTextNode("x")), Ub.appendChild(vg("br"));
          Ub.appendChild(document.createTextNode("x"))
      }
      yg(a.measure, Ub);
      var c = Ub.offsetHeight / 50;
      return c > 3 && (a.cachedTextHeight = c), xg(a.measure), c || 1
  }

  function Wb(a) {
      if (null != a.cachedCharWidth) return a.cachedCharWidth;
      var b = vg("span", "xxxxxxxxxx"),
          c = vg("pre", [b]);
      yg(a.measure, c);
      var d = b.getBoundingClientRect(),
          e = (d.right - d.left) / 10;
      return e > 2 && (a.cachedCharWidth = e), e || 10
  }

  function Zb(a) {
      a.curOp = {
          cm: a,
          viewChanged: !1,
          startHeight: a.doc.height,
          forceUpdate: !1,
          updateInput: null,
          typing: !1,
          changeObjs: null,
          cursorActivityHandlers: null,
          cursorActivityCalled: 0,
          selectionChanged: !1,
          updateMaxLine: !1,
          scrollLeft: null,
          scrollTop: null,
          scrollToPos: null,
          focus: !1,
          id: ++Yb
      }, Xb ? Xb.ops.push(a.curOp) : a.curOp.ownsGroup = Xb = {
          ops: [a.curOp],
          delayedCallbacks: []
      }
  }

  function $b(a) {
      var b = a.delayedCallbacks,
          c = 0;
      do {
          for (; c < b.length; c++) b[c].call(null);
          for (var d = 0; d < a.ops.length; d++) {
              var e = a.ops[d];
              if (e.cursorActivityHandlers)
                  for (; e.cursorActivityCalled < e.cursorActivityHandlers.length;) e.cursorActivityHandlers[e.cursorActivityCalled++].call(null, e.cm)
          }
      } while (c < b.length)
  }

  function _b(a) {
      var b = a.curOp,
          c = b.ownsGroup;
      if (c) try {
          $b(c)
      } finally {
          Xb = null;
          for (var d = 0; d < c.ops.length; d++) c.ops[d].cm.curOp = null;
          ac(c)
      }
  }

  function ac(a) {
      for (var b = a.ops, c = 0; c < b.length; c++) bc(b[c]);
      for (var c = 0; c < b.length; c++) cc(b[c]);
      for (var c = 0; c < b.length; c++) dc(b[c]);
      for (var c = 0; c < b.length; c++) ec(b[c]);
      for (var c = 0; c < b.length; c++) fc(b[c])
  }

  function bc(a) {
      var b = a.cm,
          c = b.display;
      Y(b), a.updateMaxLine && K(b), a.mustUpdate = a.viewChanged || a.forceUpdate || null != a.scrollTop || a.scrollToPos && (a.scrollToPos.from.line < c.viewFrom || a.scrollToPos.to.line >= c.viewTo) || c.maxLineChanged && b.options.lineWrapping, a.update = a.mustUpdate && new X(b, a.mustUpdate && {
          top: a.scrollTop,
          ensure: a.scrollToPos
      }, a.forceUpdate)
  }

  function cc(a) {
      a.updatedDisplay = a.mustUpdate && Z(a.cm, a.update)
  }

  function dc(a) {
      var b = a.cm,
          c = b.display;
      a.updatedDisplay && ba(b), a.barMeasure = M(b), c.maxLineChanged && !b.options.lineWrapping && (a.adjustWidthTo = zb(b, c.maxLine, c.maxLine.text.length).left + 3, b.display.sizerWidth = a.adjustWidthTo, a.barMeasure.scrollWidth = Math.max(c.scroller.clientWidth, c.sizer.offsetLeft + a.adjustWidthTo + tb(b) + b.display.barWidth), a.maxScrollLeft = Math.max(0, c.sizer.offsetLeft + a.adjustWidthTo - ub(b))), (a.updatedDisplay || a.selectionChanged) && (a.preparedSelection = c.input.prepareSelection(a.focus))
  }

  function ec(a) {
      var b = a.cm;
      null != a.adjustWidthTo && (b.display.sizer.style.minWidth = a.adjustWidthTo + "px", a.maxScrollLeft < b.doc.scrollLeft && Mc(b, Math.min(b.display.scroller.scrollLeft, a.maxScrollLeft), !0), b.display.maxLineChanged = !1);
      var c = a.focus && a.focus == Ag() && (!document.hasFocus || document.hasFocus());
      a.preparedSelection && b.display.input.showSelection(a.preparedSelection, c), (a.updatedDisplay || a.startHeight != b.doc.height) && Q(b, a.barMeasure), a.updatedDisplay && aa(b, a.barMeasure), a.selectionChanged && lb(b), b.state.focused && a.updateInput && b.display.input.reset(a.typing), c && wa(a.cm)
  }

  function fc(a) {
      var b = a.cm,
          c = b.display,
          d = b.doc;
      if (a.updatedDisplay && $(b, a.update), null == c.wheelStartX || null == a.scrollTop && null == a.scrollLeft && !a.scrollToPos || (c.wheelStartX = c.wheelStartY = null), null == a.scrollTop || c.scroller.scrollTop == a.scrollTop && !a.forceScroll || (d.scrollTop = Math.max(0, Math.min(c.scroller.scrollHeight - c.scroller.clientHeight, a.scrollTop)), c.scrollbars.setScrollTop(d.scrollTop), c.scroller.scrollTop = d.scrollTop), null == a.scrollLeft || c.scroller.scrollLeft == a.scrollLeft && !a.forceScroll || (d.scrollLeft = Math.max(0, Math.min(c.scroller.scrollWidth - c.scroller.clientWidth, a.scrollLeft)), c.scrollbars.setScrollLeft(d.scrollLeft), c.scroller.scrollLeft = d.scrollLeft, T(b)), a.scrollToPos) {
          var e = td(b, Qa(d, a.scrollToPos.from), Qa(d, a.scrollToPos.to), a.scrollToPos.margin);
          a.scrollToPos.isCursor && b.state.focused && sd(b, e)
      }
      var f = a.maybeHiddenMarkers,
          g = a.maybeUnhiddenMarkers;
      if (f)
          for (var h = 0; h < f.length; ++h) f[h].lines.length || Rf(f[h], "hide");
      if (g)
          for (var h = 0; h < g.length; ++h) g[h].lines.length && Rf(g[h], "unhide");
      c.wrapper.offsetHeight && (d.scrollTop = b.display.scroller.scrollTop), a.changeObjs && Rf(b, "changes", b, a.changeObjs), a.update && a.update.finish()
  }

  function gc(a, b) {
      if (a.curOp) return b();
      Zb(a);
      try {
          return b()
      } finally {
          _b(a)
      }
  }

  function hc(a, b) {
      return function() {
          if (a.curOp) return b.apply(a, arguments);
          Zb(a);
          try {
              return b.apply(a, arguments)
          } finally {
              _b(a)
          }
      }
  }

  function ic(a) {
      return function() {
          if (this.curOp) return a.apply(this, arguments);
          Zb(this);
          try {
              return a.apply(this, arguments)
          } finally {
              _b(this)
          }
      }
  }

  function jc(a) {
      return function() {
          var b = this.cm;
          if (!b || b.curOp) return a.apply(this, arguments);
          Zb(b);
          try {
              return a.apply(this, arguments)
          } finally {
              _b(b)
          }
      }
  }

  function kc(a, b, c) {
      this.line = b, this.rest = xe(b), this.size = this.rest ? of(hg(this.rest)) - c + 1 : 1, this.node = this.text = null, this.hidden = Ae(a, b)
  }

  function lc(a, b, c) {
      for (var e, d = [], f = b; c > f; f = e) {
          var g = new kc(a.doc, kf(a.doc, f), f);
          e = f + g.size, d.push(g)
      }
      return d
  }

  function mc(a, b, c, d) {
      null == b && (b = a.doc.first), null == c && (c = a.doc.first + a.doc.size), d || (d = 0);
      var e = a.display;
      if (d && c < e.viewTo && (null == e.updateLineNumbers || e.updateLineNumbers > b) && (e.updateLineNumbers = b), a.curOp.viewChanged = !0, b >= e.viewTo) x && ye(a.doc, b) < e.viewTo && oc(a);
      else if (c <= e.viewFrom) x && ze(a.doc, c + d) > e.viewFrom ? oc(a) : (e.viewFrom += d, e.viewTo += d);
      else if (b <= e.viewFrom && c >= e.viewTo) oc(a);
      else if (b <= e.viewFrom) {
          var f = qc(a, c, c + d, 1);
          f ? (e.view = e.view.slice(f.index), e.viewFrom = f.lineN, e.viewTo += d) : oc(a)
      } else if (c >= e.viewTo) {
          var f = qc(a, b, b, -1);
          f ? (e.view = e.view.slice(0, f.index), e.viewTo = f.lineN) : oc(a)
      } else {
          var g = qc(a, b, b, -1),
              h = qc(a, c, c + d, 1);
          g && h ? (e.view = e.view.slice(0, g.index).concat(lc(a, g.lineN, h.lineN)).concat(e.view.slice(h.index)), e.viewTo += d) : oc(a)
      }
      var i = e.externalMeasured;
      i && (c < i.lineN ? i.lineN += d : b < i.lineN + i.size && (e.externalMeasured = null))
  }

  function nc(a, b, c) {
      a.curOp.viewChanged = !0;
      var d = a.display,
          e = a.display.externalMeasured;
      if (e && b >= e.lineN && b < e.lineN + e.size && (d.externalMeasured = null), !(b < d.viewFrom || b >= d.viewTo)) {
          var f = d.view[pc(a, b)];
          if (null != f.node) {
              var g = f.changes || (f.changes = []); - 1 == jg(g, c) && g.push(c)
          }
      }
  }

  function oc(a) {
      a.display.viewFrom = a.display.viewTo = a.doc.first, a.display.view = [], a.display.viewOffset = 0
  }

  function pc(a, b) {
      if (b >= a.display.viewTo) return null;
      if (b -= a.display.viewFrom, 0 > b) return null;
      for (var c = a.display.view, d = 0; d < c.length; d++)
          if (b -= c[d].size, 0 > b) return d
  }

  function qc(a, b, c, d) {
      var f, e = pc(a, b),
          g = a.display.view;
      if (!x || c == a.doc.first + a.doc.size) return {
          index: e,
          lineN: c
      };
      for (var h = 0, i = a.display.viewFrom; e > h; h++) i += g[h].size;
      if (i != b) {
          if (d > 0) {
              if (e == g.length - 1) return null;
              f = i + g[e].size - b, e++
          } else f = i - b;
          b += f, c += f
      }
      for (; ye(a.doc, c) != c;) {
          if (e == (0 > d ? 0 : g.length - 1)) return null;
          c += d * g[e - (0 > d ? 1 : 0)].size, e += d
      }
      return {
          index: e,
          lineN: c
      }
  }

  function rc(a, b, c) {
      var d = a.display,
          e = d.view;
      0 == e.length || b >= d.viewTo || c <= d.viewFrom ? (d.view = lc(a, b, c), d.viewFrom = b) : (d.viewFrom > b ? d.view = lc(a, b, d.viewFrom).concat(d.view) : d.viewFrom < b && (d.view = d.view.slice(pc(a, b))), d.viewFrom = b, d.viewTo < c ? d.view = d.view.concat(lc(a, d.viewTo, c)) : d.viewTo > c && (d.view = d.view.slice(0, pc(a, c)))), d.viewTo = c
  }

  function sc(a) {
      for (var b = a.display.view, c = 0, d = 0; d < b.length; d++) {
          var e = b[d];
          e.hidden || e.node && !e.changes || ++c
      }
      return c
  }

  function tc(a) {
      function e() {
          b.activeTouch && (c = setTimeout(function() {
              b.activeTouch = null
          }, 1e3), d = b.activeTouch, d.end = +new Date)
      }

      function h(a) {
          if (1 != a.touches.length) return !1;
          var b = a.touches[0];
          return b.radiusX <= 1 && b.radiusY <= 1
      }

      function i(a, b) {
          if (null == b.left) return !0;
          var c = b.left - a.left,
              d = b.top - a.top;
          return c * c + d * d > 400
      }
      var b = a.display;
      Nf(b.scroller, "mousedown", hc(a, yc)), f && 11 > g ? Nf(b.scroller, "dblclick", hc(a, function(b) {
          if (!Vf(a, b)) {
              var c = xc(a, b);
              if (c && !Fc(a, b) && !wc(a.display, b)) {
                  Hf(b);
                  var d = a.findWordAt(c);
                  Va(a.doc, d.anchor, d.head)
              }
          }
      })) : Nf(b.scroller, "dblclick", function(b) {
          Vf(a, b) || Hf(b)
      }), v || Nf(b.scroller, "contextmenu", function(b) {
          dd(a, b)
      });
      var c, d = {
          end: 0
      };
      Nf(b.scroller, "touchstart", function(e) {
          if (!Vf(a, e) && !h(e)) {
              clearTimeout(c);
              var f = +new Date;
              b.activeTouch = {
                  start: f,
                  moved: !1,
                  prev: f - d.end <= 300 ? d : null
              }, 1 == e.touches.length && (b.activeTouch.left = e.touches[0].pageX, b.activeTouch.top = e.touches[0].pageY)
          }
      }), Nf(b.scroller, "touchmove", function() {
          b.activeTouch && (b.activeTouch.moved = !0)
      }), Nf(b.scroller, "touchend", function(c) {
          var d = b.activeTouch;
          if (d && !wc(b, c) && null != d.left && !d.moved && new Date - d.start < 300) {
              var g, f = a.coordsChar(b.activeTouch, "page");
              g = !d.prev || i(d, d.prev) ? new Ma(f, f) : !d.prev.prev || i(d, d.prev.prev) ? a.findWordAt(f) : new Ma(ra(f.line, 0), Qa(a.doc, ra(f.line + 1, 0))), a.setSelection(g.anchor, g.head), a.focus(), Hf(c)
          }
          e()
      }), Nf(b.scroller, "touchcancel", e), Nf(b.scroller, "scroll", function() {
          b.scroller.clientHeight && (Lc(a, b.scroller.scrollTop), Mc(a, b.scroller.scrollLeft, !0), Rf(a, "scroll", a))
      }), Nf(b.scroller, "mousewheel", function(b) {
          Qc(a, b)
      }), Nf(b.scroller, "DOMMouseScroll", function(b) {
          Qc(a, b)
      }), Nf(b.wrapper, "scroll", function() {
          b.wrapper.scrollTop = b.wrapper.scrollLeft = 0
      }), b.dragFunctions = {
          enter: function(b) {
              Vf(a, b) || Kf(b)
          },
          over: function(b) {
              Vf(a, b) || (Jc(a, b), Kf(b))
          },
          start: function(b) {
              Ic(a, b)
          },
          drop: hc(a, Hc),
          leave: function(b) {
              Vf(a, b) || Kc(a)
          }
      };
      var j = b.input.getField();
      Nf(j, "keyup", function(b) {
          $c.call(a, b)
      }), Nf(j, "keydown", hc(a, Yc)), Nf(j, "keypress", hc(a, _c)), Nf(j, "focus", og(bd, a)), Nf(j, "blur", og(cd, a))
  }

  function uc(a, b, c) {
      var d = c && c != y.Init;
      if (!b != !d) {
          var e = a.display.dragFunctions,
              f = b ? Nf : Qf;
          f(a.display.scroller, "dragstart", e.start), f(a.display.scroller, "dragenter", e.enter), f(a.display.scroller, "dragover", e.over), f(a.display.scroller, "dragleave", e.leave), f(a.display.scroller, "drop", e.drop)
      }
  }

  function vc(a) {
      var b = a.display;
      (b.lastWrapHeight != b.wrapper.clientHeight || b.lastWrapWidth != b.wrapper.clientWidth) && (b.cachedCharWidth = b.cachedTextHeight = b.cachedPaddingH = null, b.scrollbarsClipped = !1, a.setSize())
  }

  function wc(a, b) {
      for (var c = Lf(b); c != a.wrapper; c = c.parentNode)
          if (!c || 1 == c.nodeType && "true" == c.getAttribute("cm-ignore-events") || c.parentNode == a.sizer && c != a.mover) return !0
  }

  function xc(a, b, c, d) {
      var e = a.display;
      if (!c && "true" == Lf(b).getAttribute("cm-not-content")) return null;
      var f, g, h = e.lineSpace.getBoundingClientRect();
      try {
          f = b.clientX - h.left, g = b.clientY - h.top
      } catch (b) {
          return null
      }
      var j, i = Sb(a, f, g);
      if (d && 1 == i.xRel && (j = kf(a.doc, i.line).text).length == i.ch) {
          var k = dg(j, j.length, a.options.tabSize) - j.length;
          i = ra(i.line, Math.max(0, Math.round((f - sb(a.display).left) / Wb(a.display)) - k))
      }
      return i
  }

  function yc(a) {
      var b = this,
          c = b.display;
      if (!(Vf(b, a) || c.activeTouch && c.input.supportsTouch())) {
          if (c.shift = a.shiftKey, wc(c, a)) return void(h || (c.scroller.draggable = !1, setTimeout(function() {
              c.scroller.draggable = !0
          }, 100)));
          if (!Fc(b, a)) {
              var d = xc(b, a);
              switch (window.focus(), Mf(a)) {
                  case 1:
                      b.state.selectingText ? b.state.selectingText(a) : d ? Bc(b, a, d) : Lf(a) == c.scroller && Hf(a);
                      break;
                  case 2:
                      h && (b.state.lastMiddleDown = +new Date), d && Va(b.doc, d), setTimeout(function() {
                          c.input.focus()
                      }, 20), Hf(a);
                      break;
                  case 3:
                      v ? dd(b, a) : ad(b)
              }
          }
      }
  }

  function Bc(a, b, c) {
      f ? setTimeout(og(wa, a), 0) : a.curOp.focus = Ag();
      var e, d = +new Date;
      Ac && Ac.time > d - 400 && 0 == sa(Ac.pos, c) ? e = "triple" : zc && zc.time > d - 400 && 0 == sa(zc.pos, c) ? (e = "double", Ac = {
          time: d,
          pos: c
      }) : (e = "single", zc = {
          time: d,
          pos: c
      });
      var i, g = a.doc.sel,
          h = q ? b.metaKey : b.ctrlKey;
      a.options.dragDrop && Jg && !a.isReadOnly() && "single" == e && (i = g.contains(c)) > -1 && (sa((i = g.ranges[i]).from(), c) < 0 || c.xRel > 0) && (sa(i.to(), c) > 0 || c.xRel < 0) ? Cc(a, b, c, h) : Dc(a, b, c, e, h)
  }

  function Cc(a, b, c, d) {
      var e = a.display,
          i = +new Date,
          j = hc(a, function(k) {
              h && (e.scroller.draggable = !1), a.state.draggingText = !1, Qf(document, "mouseup", j), Qf(e.scroller, "drop", j), Math.abs(b.clientX - k.clientX) + Math.abs(b.clientY - k.clientY) < 10 && (Hf(k), !d && +new Date - 200 < i && Va(a.doc, c), h || f && 9 == g ? setTimeout(function() {
                  document.body.focus(), e.input.focus()
              }, 20) : e.input.focus())
          });
      h && (e.scroller.draggable = !0), a.state.draggingText = j, e.scroller.dragDrop && e.scroller.dragDrop(), Nf(document, "mouseup", j), Nf(e.scroller, "drop", j)
  }

  function Dc(a, b, c, d, e) {
      function o(b) {
          if (0 != sa(n, b))
              if (n = b, "rect" == d) {
                  for (var e = [], f = a.options.tabSize, k = dg(kf(g, c.line).text, c.ch, f), l = dg(kf(g, b.line).text, b.ch, f), m = Math.min(k, l), o = Math.max(k, l), p = Math.min(c.line, b.line), q = Math.min(a.lastLine(), Math.max(c.line, b.line)); q >= p; p++) {
                      var r = kf(g, p).text,
                          s = eg(r, m, f);
                      m == o ? e.push(new Ma(ra(p, s), ra(p, s))) : r.length > s && e.push(new Ma(ra(p, s), ra(p, eg(r, o, f))))
                  }
                  e.length || e.push(new Ma(c, c)), _a(g, Na(j.ranges.slice(0, i).concat(e), i), {
                      origin: "*mouse",
                      scroll: !1
                  }), a.scrollIntoView(b)
              } else {
                  var t = h,
                      u = t.anchor,
                      v = b;
                  if ("single" != d) {
                      if ("double" == d) var w = a.findWordAt(b);
                      else var w = new Ma(ra(b.line, 0), Qa(g, ra(b.line + 1, 0)));
                      sa(w.anchor, u) > 0 ? (v = w.head, u = va(t.from(), w.anchor)) : (v = w.anchor, u = ua(t.to(), w.head))
                  }
                  var e = j.ranges.slice(0);
                  e[i] = new Ma(Qa(g, u), v), _a(g, Na(e, i), ag)
              }
      }

      function s(b) {
          var c = ++q,
              e = xc(a, b, !0, "rect" == d);
          if (e)
              if (0 != sa(e, n)) {
                  a.curOp.focus = Ag(), o(e);
                  var h = S(f, g);
                  (e.line >= h.to || e.line < h.from) && setTimeout(hc(a, function() {
                      q == c && s(b)
                  }), 150)
              } else {
                  var i = b.clientY < p.top ? -20 : b.clientY > p.bottom ? 20 : 0;
                  i && setTimeout(hc(a, function() {
                      q == c && (f.scroller.scrollTop += i, s(b))
                  }), 50)
              }
      }

      function t(b) {
          a.state.selectingText = !1, q = 1 / 0, Hf(b), f.input.focus(), Qf(document, "mousemove", u), Qf(document, "mouseup", v), g.history.lastSelOrigin = null
      }
      var f = a.display,
          g = a.doc;
      Hf(b);
      var h, i, j = g.sel,
          k = j.ranges;
      if (e && !b.shiftKey ? (i = g.sel.contains(c), h = i > -1 ? k[i] : new Ma(c, c)) : (h = g.sel.primary(), i = g.sel.primIndex), r ? b.shiftKey && b.metaKey : b.altKey) d = "rect", e || (h = new Ma(c, c)), c = xc(a, b, !0, !0), i = -1;
      else if ("double" == d) {
          var l = a.findWordAt(c);
          h = a.display.shift || g.extend ? Ua(g, h, l.anchor, l.head) : l
      } else if ("triple" == d) {
          var m = new Ma(ra(c.line, 0), Qa(g, ra(c.line + 1, 0)));
          h = a.display.shift || g.extend ? Ua(g, h, m.anchor, m.head) : m
      } else h = Ua(g, h, c);
      e ? -1 == i ? (i = k.length, _a(g, Na(k.concat([h]), i), {
          scroll: !1,
          origin: "*mouse"
      })) : k.length > 1 && k[i].empty() && "single" == d && !b.shiftKey ? (_a(g, Na(k.slice(0, i).concat(k.slice(i + 1)), 0), {
          scroll: !1,
          origin: "*mouse"
      }), j = g.sel) : Xa(g, i, h, ag) : (i = 0, _a(g, new La([h], 0), ag), j = g.sel);
      var n = c,
          p = f.wrapper.getBoundingClientRect(),
          q = 0,
          u = hc(a, function(a) {
              Mf(a) ? s(a) : t(a)
          }),
          v = hc(a, t);
      a.state.selectingText = v, Nf(document, "mousemove", u), Nf(document, "mouseup", v)
  }

  function Ec(a, b, c, d) {
      try {
          var e = b.clientX,
              f = b.clientY
      } catch (b) {
          return !1
      }
      if (e >= Math.floor(a.display.gutters.getBoundingClientRect().right)) return !1;
      d && Hf(b);
      var g = a.display,
          h = g.lineDiv.getBoundingClientRect();
      if (f > h.bottom || !Xf(a, c)) return Jf(b);
      f -= h.top - g.viewOffset;
      for (var i = 0; i < a.options.gutters.length; ++i) {
          var j = g.gutters.childNodes[i];
          if (j && j.getBoundingClientRect().right >= e) {
              var k = pf(a.doc, f),
                  l = a.options.gutters[i];
              return Rf(a, c, a, k, l, b), Jf(b)
          }
      }
  }

  function Fc(a, b) {
      return Ec(a, b, "gutterClick", !0)
  }

  function Hc(a) {
      var b = this;
      if (Kc(b), !Vf(b, a) && !wc(b.display, a)) {
          Hf(a), f && (Gc = +new Date);
          var c = xc(b, a, !0),
              d = a.dataTransfer.files;
          if (c && !b.isReadOnly())
              if (d && d.length && window.FileReader && window.File)
                  for (var e = d.length, g = Array(e), h = 0, i = function(a, d) {
                          if (!b.options.allowDropFileTypes || -1 != jg(b.options.allowDropFileTypes, a.type)) {
                              var f = new FileReader;
                              f.onload = hc(b, function() {
                                  var a = f.result;
                                  if (/[\x00-\x08\x0e-\x1f]{2}/.test(a) && (a = ""), g[d] = a, ++h == e) {
                                      c = Qa(b.doc, c);
                                      var i = {
                                          from: c,
                                          to: c,
                                          text: b.doc.splitLines(g.join(b.doc.lineSeparator())),
                                          origin: "paste"
                                      };
                                      ld(b.doc, i), $a(b.doc, Oa(c, fd(i)))
                                  }
                              }), f.readAsText(a)
                          }
                      }, j = 0; e > j; ++j) i(d[j], j);
              else {
                  if (b.state.draggingText && b.doc.sel.contains(c) > -1) return b.state.draggingText(a), void setTimeout(function() {
                      b.display.input.focus()
                  }, 20);
                  try {
                      var g = a.dataTransfer.getData("Text");
                      if (g) {
                          if (b.state.draggingText && !(q ? a.altKey : a.ctrlKey)) var k = b.listSelections();
                          if (ab(b.doc, Oa(c, c)), k)
                              for (var j = 0; j < k.length; ++j) rd(b.doc, "", k[j].anchor, k[j].head, "drag");
                          b.replaceSelection(g, "around", "paste"), b.display.input.focus()
                      }
                  } catch (a) {}
              }
      }
  }

  function Ic(a, b) {
      if (f && (!a.state.draggingText || +new Date - Gc < 100)) return void Kf(b);
      if (!Vf(a, b) && !wc(a.display, b) && (b.dataTransfer.setData("Text", a.getSelection()), b.dataTransfer.effectAllowed = "copyMove", b.dataTransfer.setDragImage && !l)) {
          var c = vg("img", null, null, "position: fixed; left: 0; top: 0;");
          c.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", k && (c.width = c.height = 1, a.display.wrapper.appendChild(c), c._top = c.offsetTop), b.dataTransfer.setDragImage(c, 0, 0), k && c.parentNode.removeChild(c)
      }
  }

  function Jc(a, b) {
      var c = xc(a, b);
      if (c) {
          var d = document.createDocumentFragment();
          jb(a, c, d), a.display.dragCursor || (a.display.dragCursor = vg("div", null, "CodeMirror-cursors CodeMirror-dragcursors"), a.display.lineSpace.insertBefore(a.display.dragCursor, a.display.cursorDiv)), yg(a.display.dragCursor, d)
      }
  }

  function Kc(a) {
      a.display.dragCursor && (a.display.lineSpace.removeChild(a.display.dragCursor), a.display.dragCursor = null)
  }

  function Lc(a, b) {
      Math.abs(a.doc.scrollTop - b) < 2 || (a.doc.scrollTop = b, c || _(a, {
          top: b
      }), a.display.scroller.scrollTop != b && (a.display.scroller.scrollTop = b), a.display.scrollbars.setScrollTop(b), c && _(a), mb(a, 100))
  }

  function Mc(a, b, c) {
      (c ? b == a.doc.scrollLeft : Math.abs(a.doc.scrollLeft - b) < 2) || (b = Math.min(b, a.display.scroller.scrollWidth - a.display.scroller.clientWidth), a.doc.scrollLeft = b, T(a), a.display.scroller.scrollLeft != b && (a.display.scroller.scrollLeft = b), a.display.scrollbars.setScrollLeft(b))
  }

  function Qc(a, b) {
      var d = Pc(b),
          e = d.x,
          f = d.y,
          g = a.display,
          i = g.scroller,
          j = i.scrollWidth > i.clientWidth,
          l = i.scrollHeight > i.clientHeight;
      if (e && j || f && l) {
          if (f && q && h) a: for (var m = b.target, n = g.view; m != i; m = m.parentNode)
              for (var o = 0; o < n.length; o++)
                  if (n[o].node == m) {
                      a.display.currentWheelTarget = m;
                      break a
                  }
          if (e && !c && !k && null != Oc) return f && l && Lc(a, Math.max(0, Math.min(i.scrollTop + f * Oc, i.scrollHeight - i.clientHeight))), Mc(a, Math.max(0, Math.min(i.scrollLeft + e * Oc, i.scrollWidth - i.clientWidth))), (!f || f && l) && Hf(b), void(g.wheelStartX = null);
          if (f && null != Oc) {
              var p = f * Oc,
                  r = a.doc.scrollTop,
                  s = r + g.wrapper.clientHeight;
              0 > p ? r = Math.max(0, r + p - 50) : s = Math.min(a.doc.height, s + p + 50), _(a, {
                  top: r,
                  bottom: s
              })
          }
          20 > Nc && (null == g.wheelStartX ? (g.wheelStartX = i.scrollLeft, g.wheelStartY = i.scrollTop, g.wheelDX = e, g.wheelDY = f, setTimeout(function() {
              if (null != g.wheelStartX) {
                  var a = i.scrollLeft - g.wheelStartX,
                      b = i.scrollTop - g.wheelStartY,
                      c = b && g.wheelDY && b / g.wheelDY || a && g.wheelDX && a / g.wheelDX;
                  g.wheelStartX = g.wheelStartY = null, c && (Oc = (Oc * Nc + c) / (Nc + 1), ++Nc)
              }
          }, 200)) : (g.wheelDX += e, g.wheelDY += f))
      }
  }

  function Rc(a, b, c) {
      if ("string" == typeof b && (b = Pd[b], !b)) return !1;
      a.display.input.ensurePolled();
      var d = a.display.shift,
          e = !1;
      try {
          a.isReadOnly() && (a.state.suppressEdits = !0), c && (a.display.shift = !1), e = b(a) != $f
      } finally {
          a.display.shift = d, a.state.suppressEdits = !1
      }
      return e
  }

  function Sc(a, b, c) {
      for (var d = 0; d < a.state.keyMaps.length; d++) {
          var e = Sd(b, a.state.keyMaps[d], c, a);
          if (e) return e
      }
      return a.options.extraKeys && Sd(b, a.options.extraKeys, c, a) || Sd(b, a.options.keyMap, c, a)
  }

  function Uc(a, b, c, d) {
      var e = a.state.keySeq;
      if (e) {
          if (Td(b)) return "handled";
          Tc.set(50, function() {
              a.state.keySeq == e && (a.state.keySeq = null, a.display.input.reset())
          }), b = e + " " + b
      }
      var f = Sc(a, b, d);
      return "multi" == f && (a.state.keySeq = b), "handled" == f && Tf(a, "keyHandled", a, b, c), ("handled" == f || "multi" == f) && (Hf(c), lb(a)), e && !f && /\'$/.test(b) ? (Hf(c), !0) : !!f
  }

  function Vc(a, b) {
      var c = Ud(b, !0);
      return c ? b.shiftKey && !a.state.keySeq ? Uc(a, "Shift-" + c, b, function(b) {
          return Rc(a, b, !0)
      }) || Uc(a, c, b, function(b) {
          return ("string" == typeof b ? /^go[A-Z]/.test(b) : b.motion) ? Rc(a, b) : void 0
      }) : Uc(a, c, b, function(b) {
          return Rc(a, b)
      }) : !1
  }

  function Wc(a, b, c) {
      return Uc(a, "'" + c + "'", b, function(b) {
          return Rc(a, b, !0)
      })
  }

  function Yc(a) {
      var b = this;
      if (b.curOp.focus = Ag(), !Vf(b, a)) {
          f && 11 > g && 27 == a.keyCode && (a.returnValue = !1);
          var c = a.keyCode;
          b.display.shift = 16 == c || a.shiftKey;
          var d = Vc(b, a);
          k && (Xc = d ? c : null, !d && 88 == c && !Qg && (q ? a.metaKey : a.ctrlKey) && b.replaceSelection("", null, "cut")), 18 != c || /\bCodeMirror-crosshair\b/.test(b.display.lineDiv.className) || Zc(b)
      }
  }

  function Zc(a) {
      function c(a) {
          18 != a.keyCode && a.altKey || (Cg(b, "CodeMirror-crosshair"), Qf(document, "keyup", c), Qf(document, "mouseover", c))
      }
      var b = a.display.lineDiv;
      Dg(b, "CodeMirror-crosshair"), Nf(document, "keyup", c), Nf(document, "mouseover", c)
  }

  function $c(a) {
      16 == a.keyCode && (this.doc.sel.shift = !1), Vf(this, a)
  }

  function _c(a) {
      var b = this;
      if (!(wc(b.display, a) || Vf(b, a) || a.ctrlKey && !a.altKey || q && a.metaKey)) {
          var c = a.keyCode,
              d = a.charCode;
          if (k && c == Xc) return Xc = null, void Hf(a);
          if (!k || a.which && !(a.which < 10) || !Vc(b, a)) {
              var e = String.fromCharCode(null == d ? c : d);
              Wc(b, a, e) || b.display.input.onKeyPress(a)
          }
      }
  }

  function ad(a) {
      a.state.delayingBlurEvent = !0, setTimeout(function() {
          a.state.delayingBlurEvent && (a.state.delayingBlurEvent = !1, cd(a))
      }, 100)
  }

  function bd(a) {
      a.state.delayingBlurEvent && (a.state.delayingBlurEvent = !1), "nocursor" != a.options.readOnly && (a.state.focused || (Rf(a, "focus", a), a.state.focused = !0, Dg(a.display.wrapper, "CodeMirror-focused"), a.curOp || a.display.selForContextMenu == a.doc.sel || (a.display.input.reset(), h && setTimeout(function() {
          a.display.input.reset(!0)
      }, 20)), a.display.input.receivedFocus()), lb(a))
  }

  function cd(a) {
      a.state.delayingBlurEvent || (a.state.focused && (Rf(a, "blur", a), a.state.focused = !1, Cg(a.display.wrapper, "CodeMirror-focused")), clearInterval(a.display.blinker), setTimeout(function() {
          a.state.focused || (a.display.shift = !1)
      }, 150))
  }

  function dd(a, b) {
      wc(a.display, b) || ed(a, b) || Vf(a, b, "contextmenu") || a.display.input.onContextMenu(b)
  }

  function ed(a, b) {
      return Xf(a, "gutterContextMenu") ? Ec(a, b, "gutterContextMenu", !1) : !1
  }

  function gd(a, b) {
      if (sa(a, b.from) < 0) return a;
      if (sa(a, b.to) <= 0) return fd(b);
      var c = a.line + b.text.length - (b.to.line - b.from.line) - 1,
          d = a.ch;
      return a.line == b.to.line && (d += fd(b).ch - b.to.ch), ra(c, d)
  }

  function hd(a, b) {
      for (var c = [], d = 0; d < a.sel.ranges.length; d++) {
          var e = a.sel.ranges[d];
          c.push(new Ma(gd(e.anchor, b), gd(e.head, b)))
      }
      return Na(c, a.sel.primIndex)
  }

  function id(a, b, c) {
      return a.line == b.line ? ra(c.line, a.ch - b.ch + c.ch) : ra(c.line + (a.line - b.line), a.ch)
  }

  function jd(a, b, c) {
      for (var d = [], e = ra(a.first, 0), f = e, g = 0; g < b.length; g++) {
          var h = b[g],
              i = id(h.from, e, f),
              j = id(fd(h), e, f);
          if (e = h.to, f = j, "around" == c) {
              var k = a.sel.ranges[g],
                  l = sa(k.head, k.anchor) < 0;
              d[g] = new Ma(l ? j : i, l ? i : j)
          } else d[g] = new Ma(i, i)
      }
      return new La(d, a.sel.primIndex)
  }

  function kd(a, b, c) {
      var d = {
          canceled: !1,
          from: b.from,
          to: b.to,
          text: b.text,
          origin: b.origin,
          cancel: function() {
              this.canceled = !0
          }
      };
      return c && (d.update = function(b, c, d, e) {
          b && (this.from = Qa(a, b)), c && (this.to = Qa(a, c)), d && (this.text = d), void 0 !== e && (this.origin = e)
      }), Rf(a, "beforeChange", a, d), a.cm && Rf(a.cm, "beforeChange", a.cm, d), d.canceled ? null : {
          from: d.from,
          to: d.to,
          text: d.text,
          origin: d.origin
      }
  }

  function ld(a, b, c) {
      if (a.cm) {
          if (!a.cm.curOp) return hc(a.cm, ld)(a, b, c);
          if (a.cm.state.suppressEdits) return
      }
      if (!(Xf(a, "beforeChange") || a.cm && Xf(a.cm, "beforeChange")) || (b = kd(a, b, !0))) {
          var d = w && !c && me(a, b.from, b.to);
          if (d)
              for (var e = d.length - 1; e >= 0; --e) md(a, {
                  from: d[e].from,
                  to: d[e].to,
                  text: e ? [""] : b.text
              });
          else md(a, b)
      }
  }

  function md(a, b) {
      if (1 != b.text.length || "" != b.text[0] || 0 != sa(b.from, b.to)) {
          var c = hd(a, b);
          wf(a, b, c, a.cm ? a.cm.curOp.id : NaN), pd(a, b, c, je(a, b));
          var d = [];
          hf(a, function(a, c) {
              c || -1 != jg(d, a.history) || (Gf(a.history, b), d.push(a.history)), pd(a, b, null, je(a, b))
          })
      }
  }

  function nd(a, b, c) {
      if (!a.cm || !a.cm.state.suppressEdits) {
          for (var e, d = a.history, f = a.sel, g = "undo" == b ? d.done : d.undone, h = "undo" == b ? d.undone : d.done, i = 0; i < g.length && (e = g[i], c ? !e.ranges || e.equals(a.sel) : e.ranges); i++);
          if (i != g.length) {
              for (d.lastOrigin = d.lastSelOrigin = null; e = g.pop(), e.ranges;) {
                  if (zf(e, h), c && !e.equals(a.sel)) return void _a(a, e, {
                      clearRedo: !1
                  });
                  f = e
              }
              var j = [];
              zf(f, h), h.push({
                  changes: j,
                  generation: d.generation
              }), d.generation = e.generation || ++d.maxGeneration;
              for (var k = Xf(a, "beforeChange") || a.cm && Xf(a.cm, "beforeChange"), i = e.changes.length - 1; i >= 0; --i) {
                  var l = e.changes[i];
                  if (l.origin = b, k && !kd(a, l, !1)) return void(g.length = 0);
                  j.push(tf(a, l));
                  var m = i ? hd(a, l) : hg(g);
                  pd(a, l, m, le(a, l)), !i && a.cm && a.cm.scrollIntoView({
                      from: l.from,
                      to: fd(l)
                  });
                  var n = [];
                  hf(a, function(a, b) {
                      b || -1 != jg(n, a.history) || (Gf(a.history, l), n.push(a.history)), pd(a, l, null, le(a, l))
                  })
              }
          }
      }
  }

  function od(a, b) {
      if (0 != b && (a.first += b, a.sel = new La(kg(a.sel.ranges, function(a) {
              return new Ma(ra(a.anchor.line + b, a.anchor.ch), ra(a.head.line + b, a.head.ch))
          }), a.sel.primIndex), a.cm)) {
          mc(a.cm, a.first, a.first - b, b);
          for (var c = a.cm.display, d = c.viewFrom; d < c.viewTo; d++) nc(a.cm, d, "gutter")
      }
  }

  function pd(a, b, c, d) {
      if (a.cm && !a.cm.curOp) return hc(a.cm, pd)(a, b, c, d);
      if (b.to.line < a.first) return void od(a, b.text.length - 1 - (b.to.line - b.from.line));
      if (!(b.from.line > a.lastLine())) {
          if (b.from.line < a.first) {
              var e = b.text.length - 1 - (a.first - b.from.line);
              od(a, e), b = {
                  from: ra(a.first, 0),
                  to: ra(b.to.line + e, b.to.ch),
                  text: [hg(b.text)],
                  origin: b.origin
              }
          }
          var f = a.lastLine();
          b.to.line > f && (b = {
              from: b.from,
              to: ra(f, kf(a, f).text.length),
              text: [b.text[0]],
              origin: b.origin
          }), b.removed = lf(a, b.from, b.to), c || (c = hd(a, b)), a.cm ? qd(a.cm, b, d) : af(a, b, d), ab(a, c, _f)
      }
  }

  function qd(a, b, c) {
      var d = a.doc,
          e = a.display,
          f = b.from,
          g = b.to,
          h = !1,
          i = f.line;
      a.options.lineWrapping || (i = of(we(kf(d, f.line))), d.iter(i, g.line + 1, function(a) {
          return a == e.maxLine ? (h = !0, !0) : void 0
      })), d.sel.contains(b.from, b.to) > -1 && Wf(a), af(d, b, c, D(a)), a.options.lineWrapping || (d.iter(i, f.line + b.text.length, function(a) {
          var b = J(a);
          b > e.maxLineLength && (e.maxLine = a, e.maxLineLength = b, e.maxLineChanged = !0, h = !1)
      }), h && (a.curOp.updateMaxLine = !0)), d.frontier = Math.min(d.frontier, f.line), mb(a, 400);
      var j = b.text.length - (g.line - f.line) - 1;
      b.full ? mc(a) : f.line != g.line || 1 != b.text.length || _e(a.doc, b) ? mc(a, f.line, g.line + 1, j) : nc(a, f.line, "text");
      var k = Xf(a, "changes"),
          l = Xf(a, "change");
      if (l || k) {
          var m = {
              from: f,
              to: g,
              text: b.text,
              removed: b.removed,
              origin: b.origin
          };
          l && Tf(a, "change", a, m), k && (a.curOp.changeObjs || (a.curOp.changeObjs = [])).push(m)
      }
      a.display.selForContextMenu = null
  }

  function rd(a, b, c, d, e) {
      if (d || (d = c), sa(d, c) < 0) {
          var f = d;
          d = c, c = f
      }
      "string" == typeof b && (b = a.splitLines(b)), ld(a, {
          from: c,
          to: d,
          text: b,
          origin: e
      })
  }

  function sd(a, b) {
      if (!Vf(a, "scrollCursorIntoView")) {
          var c = a.display,
              d = c.sizer.getBoundingClientRect(),
              e = null;
          if (b.top + d.top < 0 ? e = !0 : b.bottom + d.top > (window.innerHeight || document.documentElement.clientHeight) && (e = !1), null != e && !n) {
              var f = vg("div", "\u200b", null, "position: absolute; top: " + (b.top - c.viewOffset - qb(a.display)) + "px; height: " + (b.bottom - b.top + tb(a) + c.barHeight) + "px; left: " + b.left + "px; width: 2px;");
              a.display.lineSpace.appendChild(f), f.scrollIntoView(e), a.display.lineSpace.removeChild(f)
          }
      }
  }

  function td(a, b, c, d) {
      null == d && (d = 0);
      for (var e = 0; 5 > e; e++) {
          var f = !1,
              g = Pb(a, b),
              h = c && c != b ? Pb(a, c) : g,
              i = vd(a, Math.min(g.left, h.left), Math.min(g.top, h.top) - d, Math.max(g.left, h.left), Math.max(g.bottom, h.bottom) + d),
              j = a.doc.scrollTop,
              k = a.doc.scrollLeft;
          if (null != i.scrollTop && (Lc(a, i.scrollTop), Math.abs(a.doc.scrollTop - j) > 1 && (f = !0)), null != i.scrollLeft && (Mc(a, i.scrollLeft), Math.abs(a.doc.scrollLeft - k) > 1 && (f = !0)), !f) break
      }
      return g
  }

  function ud(a, b, c, d, e) {
      var f = vd(a, b, c, d, e);
      null != f.scrollTop && Lc(a, f.scrollTop), null != f.scrollLeft && Mc(a, f.scrollLeft)
  }

  function vd(a, b, c, d, e) {
      var f = a.display,
          g = Vb(a.display);
      0 > c && (c = 0);
      var h = a.curOp && null != a.curOp.scrollTop ? a.curOp.scrollTop : f.scroller.scrollTop,
          i = vb(a),
          j = {};
      e - c > i && (e = c + i);
      var k = a.doc.height + rb(f),
          l = g > c,
          m = e > k - g;
      if (h > c) j.scrollTop = l ? 0 : c;
      else if (e > h + i) {
          var n = Math.min(c, (m ? k : e) - i);
          n != h && (j.scrollTop = n)
      }
      var o = a.curOp && null != a.curOp.scrollLeft ? a.curOp.scrollLeft : f.scroller.scrollLeft,
          p = ub(a) - (a.options.fixedGutter ? f.gutters.offsetWidth : 0),
          q = d - b > p;
      return q && (d = b + p), 10 > b ? j.scrollLeft = 0 : o > b ? j.scrollLeft = Math.max(0, b - (q ? 0 : 10)) : d > p + o - 3 && (j.scrollLeft = d + (q ? 0 : 10) - p), j
  }

  function wd(a, b, c) {
      (null != b || null != c) && yd(a), null != b && (a.curOp.scrollLeft = (null == a.curOp.scrollLeft ? a.doc.scrollLeft : a.curOp.scrollLeft) + b), null != c && (a.curOp.scrollTop = (null == a.curOp.scrollTop ? a.doc.scrollTop : a.curOp.scrollTop) + c);
  }

  function xd(a) {
      yd(a);
      var b = a.getCursor(),
          c = b,
          d = b;
      a.options.lineWrapping || (c = b.ch ? ra(b.line, b.ch - 1) : b, d = ra(b.line, b.ch + 1)), a.curOp.scrollToPos = {
          from: c,
          to: d,
          margin: a.options.cursorScrollMargin,
          isCursor: !0
      }
  }

  function yd(a) {
      var b = a.curOp.scrollToPos;
      if (b) {
          a.curOp.scrollToPos = null;
          var c = Qb(a, b.from),
              d = Qb(a, b.to),
              e = vd(a, Math.min(c.left, d.left), Math.min(c.top, d.top) - b.margin, Math.max(c.right, d.right), Math.max(c.bottom, d.bottom) + b.margin);
          a.scrollTo(e.scrollLeft, e.scrollTop)
      }
  }

  function zd(a, b, c, d) {
      var f, e = a.doc;
      null == c && (c = "add"), "smart" == c && (e.mode.indent ? f = pb(a, b) : c = "prev");
      var g = a.options.tabSize,
          h = kf(e, b),
          i = dg(h.text, null, g);
      h.stateAfter && (h.stateAfter = null);
      var k, j = h.text.match(/^\s*/)[0];
      if (d || /\S/.test(h.text)) {
          if ("smart" == c && (k = e.mode.indent(f, h.text.slice(j.length), h.text), k == $f || k > 150)) {
              if (!d) return;
              c = "prev"
          }
      } else k = 0, c = "not";
      "prev" == c ? k = b > e.first ? dg(kf(e, b - 1).text, null, g) : 0 : "add" == c ? k = i + a.options.indentUnit : "subtract" == c ? k = i - a.options.indentUnit : "number" == typeof c && (k = i + c), k = Math.max(0, k);
      var l = "",
          m = 0;
      if (a.options.indentWithTabs)
          for (var n = Math.floor(k / g); n; --n) m += g, l += "	";
      if (k > m && (l += gg(k - m)), l != j) return rd(e, l, ra(b, 0), ra(b, j.length), "+input"), h.stateAfter = null, !0;
      for (var n = 0; n < e.sel.ranges.length; n++) {
          var o = e.sel.ranges[n];
          if (o.head.line == b && o.head.ch < j.length) {
              var m = ra(b, j.length);
              Xa(e, n, new Ma(m, m));
              break
          }
      }
  }

  function Ad(a, b, c, d) {
      var e = b,
          f = b;
      return "number" == typeof b ? f = kf(a, Pa(a, b)) : e = of(b), null == e ? null : (d(f, e) && a.cm && nc(a.cm, e, c), f)
  }

  function Bd(a, b) {
      for (var c = a.doc.sel.ranges, d = [], e = 0; e < c.length; e++) {
          for (var f = b(c[e]); d.length && sa(f.from, hg(d).to) <= 0;) {
              var g = d.pop();
              if (sa(g.from, f.from) < 0) {
                  f.from = g.from;
                  break
              }
          }
          d.push(f)
      }
      gc(a, function() {
          for (var b = d.length - 1; b >= 0; b--) rd(a.doc, "", d[b].from, d[b].to, "+delete");
          xd(a)
      })
  }

  function Cd(a, b, c, d, e) {
      function j() {
          var b = f + c;
          return b < a.first || b >= a.first + a.size ? !1 : (f = b, i = kf(a, b))
      }

      function k(a) {
          var b = (e ? eh : fh)(i, g, c, !0);
          if (null == b) {
              if (a || !j()) return !1;
              g = e ? (0 > c ? Yg : Xg)(i) : 0 > c ? i.text.length : 0
          } else g = b;
          return !0
      }
      var f = b.line,
          g = b.ch,
          h = c,
          i = kf(a, f);
      if ("char" == d) k();
      else if ("column" == d) k(!0);
      else if ("word" == d || "group" == d)
          for (var l = null, m = "group" == d, n = a.cm && a.cm.getHelper(b, "wordChars"), o = !0; !(0 > c) || k(!o); o = !1) {
              var p = i.text.charAt(g) || "\n",
                  q = rg(p, n) ? "w" : m && "\n" == p ? "n" : !m || /\s/.test(p) ? null : "p";
              if (!m || o || q || (q = "s"), l && l != q) {
                  0 > c && (c = 1, k());
                  break
              }
              if (q && (l = q), c > 0 && !k(!o)) break
          }
      var r = fb(a, ra(f, g), b, h, !0);
      return sa(b, r) || (r.hitSide = !0), r
  }

  function Dd(a, b, c, d) {
      var g, e = a.doc,
          f = b.left;
      if ("page" == d) {
          var h = Math.min(a.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight);
          g = b.top + c * (h - (0 > c ? 1.5 : .5) * Vb(a.display))
      } else "line" == d && (g = c > 0 ? b.bottom + 3 : b.top - 3);
      for (;;) {
          var i = Sb(a, f, g);
          if (!i.outside) break;
          if (0 > c ? 0 >= g : g >= e.height) {
              i.hitSide = !0;
              break
          }
          g += 5 * c
      }
      return i
  }

  function Gd(a, b, c, d) {
      y.defaults[a] = b, c && (Fd[a] = d ? function(a, b, d) {
          d != Hd && c(a, b, d)
      } : c)
  }

  function Rd(a) {
      for (var c, d, e, f, b = a.split(/-(?!$)/), a = b[b.length - 1], g = 0; g < b.length - 1; g++) {
          var h = b[g];
          if (/^(cmd|meta|m)$/i.test(h)) f = !0;
          else if (/^a(lt)?$/i.test(h)) c = !0;
          else if (/^(c|ctrl|control)$/i.test(h)) d = !0;
          else {
              if (!/^s(hift)$/i.test(h)) throw new Error("Unrecognized modifier name: " + h);
              e = !0
          }
      }
      return c && (a = "Alt-" + a), d && (a = "Ctrl-" + a), f && (a = "Cmd-" + a), e && (a = "Shift-" + a), a
  }

  function Vd(a) {
      return "string" == typeof a ? Qd[a] : a
  }

  function Zd(a, b, c, d, e) {
      if (d && d.shared) return _d(a, b, c, d, e);
      if (a.cm && !a.cm.curOp) return hc(a.cm, Zd)(a, b, c, d, e);
      var f = new Yd(a, e),
          g = sa(b, c);
      if (d && ng(d, f, !1), g > 0 || 0 == g && f.clearWhenEmpty !== !1) return f;
      if (f.replacedWith && (f.collapsed = !0, f.widgetNode = vg("span", [f.replacedWith], "CodeMirror-widget"), d.handleMouseEvents || f.widgetNode.setAttribute("cm-ignore-events", "true"), d.insertLeft && (f.widgetNode.insertLeft = !0)), f.collapsed) {
          if (ve(a, b.line, b, c, f) || b.line != c.line && ve(a, c.line, b, c, f)) throw new Error("Inserting collapsed marker partially overlapping an existing one");
          x = !0
      }
      f.addToHistory && wf(a, {
          from: b,
          to: c,
          origin: "markText"
      }, a.sel, NaN);
      var j, h = b.line,
          i = a.cm;
      if (a.iter(h, c.line + 1, function(a) {
              i && f.collapsed && !i.options.lineWrapping && we(a) == i.display.maxLine && (j = !0), f.collapsed && h != b.line && nf(a, 0), ge(a, new de(f, h == b.line ? b.ch : null, h == c.line ? c.ch : null)), ++h
          }), f.collapsed && a.iter(b.line, c.line + 1, function(b) {
              Ae(a, b) && nf(b, 0)
          }), f.clearOnEnter && Nf(f, "beforeCursorEnter", function() {
              f.clear()
          }), f.readOnly && (w = !0, (a.history.done.length || a.history.undone.length) && a.clearHistory()), f.collapsed && (f.id = ++Xd, f.atomic = !0), i) {
          if (j && (i.curOp.updateMaxLine = !0), f.collapsed) mc(i, b.line, c.line + 1);
          else if (f.className || f.title || f.startStyle || f.endStyle || f.css)
              for (var k = b.line; k <= c.line; k++) nc(i, k, "text");
          f.atomic && cb(i.doc), Tf(i, "markerAdded", i, f)
      }
      return f
  }

  function _d(a, b, c, d, e) {
      d = ng(d), d.shared = !1;
      var f = [Zd(a, b, c, d, e)],
          g = f[0],
          h = d.widgetNode;
      return hf(a, function(a) {
          h && (d.widgetNode = h.cloneNode(!0)), f.push(Zd(a, Qa(a, b), Qa(a, c), d, e));
          for (var i = 0; i < a.linked.length; ++i)
              if (a.linked[i].isParent) return;
          g = hg(f)
      }), new $d(f, g)
  }

  function ae(a) {
      return a.findMarks(ra(a.first, 0), a.clipPos(ra(a.lastLine())), function(a) {
          return a.parent
      })
  }

  function be(a, b) {
      for (var c = 0; c < b.length; c++) {
          var d = b[c],
              e = d.find(),
              f = a.clipPos(e.from),
              g = a.clipPos(e.to);
          if (sa(f, g)) {
              var h = Zd(a, f, g, d.primary, d.primary.type);
              d.markers.push(h), h.parent = d
          }
      }
  }

  function ce(a) {
      for (var b = 0; b < a.length; b++) {
          var c = a[b],
              d = [c.primary.doc];
          hf(c.primary.doc, function(a) {
              d.push(a)
          });
          for (var e = 0; e < c.markers.length; e++) {
              var f = c.markers[e]; - 1 == jg(d, f.doc) && (f.parent = null, c.markers.splice(e--, 1))
          }
      }
  }

  function de(a, b, c) {
      this.marker = a, this.from = b, this.to = c
  }

  function ee(a, b) {
      if (a)
          for (var c = 0; c < a.length; ++c) {
              var d = a[c];
              if (d.marker == b) return d
          }
  }

  function fe(a, b) {
      for (var c, d = 0; d < a.length; ++d) a[d] != b && (c || (c = [])).push(a[d]);
      return c
  }

  function ge(a, b) {
      a.markedSpans = a.markedSpans ? a.markedSpans.concat([b]) : [b], b.marker.attachLine(a)
  }

  function he(a, b, c) {
      if (a)
          for (var e, d = 0; d < a.length; ++d) {
              var f = a[d],
                  g = f.marker,
                  h = null == f.from || (g.inclusiveLeft ? f.from <= b : f.from < b);
              if (h || f.from == b && "bookmark" == g.type && (!c || !f.marker.insertLeft)) {
                  var i = null == f.to || (g.inclusiveRight ? f.to >= b : f.to > b);
                  (e || (e = [])).push(new de(g, f.from, i ? null : f.to))
              }
          }
      return e
  }

  function ie(a, b, c) {
      if (a)
          for (var e, d = 0; d < a.length; ++d) {
              var f = a[d],
                  g = f.marker,
                  h = null == f.to || (g.inclusiveRight ? f.to >= b : f.to > b);
              if (h || f.from == b && "bookmark" == g.type && (!c || f.marker.insertLeft)) {
                  var i = null == f.from || (g.inclusiveLeft ? f.from <= b : f.from < b);
                  (e || (e = [])).push(new de(g, i ? null : f.from - b, null == f.to ? null : f.to - b))
              }
          }
      return e
  }

  function je(a, b) {
      if (b.full) return null;
      var c = Sa(a, b.from.line) && kf(a, b.from.line).markedSpans,
          d = Sa(a, b.to.line) && kf(a, b.to.line).markedSpans;
      if (!c && !d) return null;
      var e = b.from.ch,
          f = b.to.ch,
          g = 0 == sa(b.from, b.to),
          h = he(c, e, g),
          i = ie(d, f, g),
          j = 1 == b.text.length,
          k = hg(b.text).length + (j ? e : 0);
      if (h)
          for (var l = 0; l < h.length; ++l) {
              var m = h[l];
              if (null == m.to) {
                  var n = ee(i, m.marker);
                  n ? j && (m.to = null == n.to ? null : n.to + k) : m.to = e
              }
          }
      if (i)
          for (var l = 0; l < i.length; ++l) {
              var m = i[l];
              if (null != m.to && (m.to += k), null == m.from) {
                  var n = ee(h, m.marker);
                  n || (m.from = k, j && (h || (h = [])).push(m))
              } else m.from += k, j && (h || (h = [])).push(m)
          }
      h && (h = ke(h)), i && i != h && (i = ke(i));
      var o = [h];
      if (!j) {
          var q, p = b.text.length - 2;
          if (p > 0 && h)
              for (var l = 0; l < h.length; ++l) null == h[l].to && (q || (q = [])).push(new de(h[l].marker, null, null));
          for (var l = 0; p > l; ++l) o.push(q);
          o.push(i)
      }
      return o
  }

  function ke(a) {
      for (var b = 0; b < a.length; ++b) {
          var c = a[b];
          null != c.from && c.from == c.to && c.marker.clearWhenEmpty !== !1 && a.splice(b--, 1)
      }
      return a.length ? a : null
  }

  function le(a, b) {
      var c = Cf(a, b),
          d = je(a, b);
      if (!c) return d;
      if (!d) return c;
      for (var e = 0; e < c.length; ++e) {
          var f = c[e],
              g = d[e];
          if (f && g) a: for (var h = 0; h < g.length; ++h) {
              for (var i = g[h], j = 0; j < f.length; ++j)
                  if (f[j].marker == i.marker) continue a;
              f.push(i)
          } else g && (c[e] = g)
      }
      return c
  }

  function me(a, b, c) {
      var d = null;
      if (a.iter(b.line, c.line + 1, function(a) {
              if (a.markedSpans)
                  for (var b = 0; b < a.markedSpans.length; ++b) {
                      var c = a.markedSpans[b].marker;
                      !c.readOnly || d && -1 != jg(d, c) || (d || (d = [])).push(c)
                  }
          }), !d) return null;
      for (var e = [{
              from: b,
              to: c
          }], f = 0; f < d.length; ++f)
          for (var g = d[f], h = g.find(0), i = 0; i < e.length; ++i) {
              var j = e[i];
              if (!(sa(j.to, h.from) < 0 || sa(j.from, h.to) > 0)) {
                  var k = [i, 1],
                      l = sa(j.from, h.from),
                      m = sa(j.to, h.to);
                  (0 > l || !g.inclusiveLeft && !l) && k.push({
                      from: j.from,
                      to: h.from
                  }), (m > 0 || !g.inclusiveRight && !m) && k.push({
                      from: h.to,
                      to: j.to
                  }), e.splice.apply(e, k), i += k.length - 1
              }
          }
      return e
  }

  function ne(a) {
      var b = a.markedSpans;
      if (b) {
          for (var c = 0; c < b.length; ++c) b[c].marker.detachLine(a);
          a.markedSpans = null
      }
  }

  function oe(a, b) {
      if (b) {
          for (var c = 0; c < b.length; ++c) b[c].marker.attachLine(a);
          a.markedSpans = b
      }
  }

  function pe(a) {
      return a.inclusiveLeft ? -1 : 0
  }

  function qe(a) {
      return a.inclusiveRight ? 1 : 0
  }

  function re(a, b) {
      var c = a.lines.length - b.lines.length;
      if (0 != c) return c;
      var d = a.find(),
          e = b.find(),
          f = sa(d.from, e.from) || pe(a) - pe(b);
      if (f) return -f;
      var g = sa(d.to, e.to) || qe(a) - qe(b);
      return g ? g : b.id - a.id
  }

  function se(a, b) {
      var d, c = x && a.markedSpans;
      if (c)
          for (var e, f = 0; f < c.length; ++f) e = c[f], e.marker.collapsed && null == (b ? e.from : e.to) && (!d || re(d, e.marker) < 0) && (d = e.marker);
      return d
  }

  function te(a) {
      return se(a, !0)
  }

  function ue(a) {
      return se(a, !1)
  }

  function ve(a, b, c, d, e) {
      var f = kf(a, b),
          g = x && f.markedSpans;
      if (g)
          for (var h = 0; h < g.length; ++h) {
              var i = g[h];
              if (i.marker.collapsed) {
                  var j = i.marker.find(0),
                      k = sa(j.from, c) || pe(i.marker) - pe(e),
                      l = sa(j.to, d) || qe(i.marker) - qe(e);
                  if (!(k >= 0 && 0 >= l || 0 >= k && l >= 0) && (0 >= k && (i.marker.inclusiveRight && e.inclusiveLeft ? sa(j.to, c) >= 0 : sa(j.to, c) > 0) || k >= 0 && (i.marker.inclusiveRight && e.inclusiveLeft ? sa(j.from, d) <= 0 : sa(j.from, d) < 0))) return !0
              }
          }
  }

  function we(a) {
      for (var b; b = te(a);) a = b.find(-1, !0).line;
      return a
  }

  function xe(a) {
      for (var b, c; b = ue(a);) a = b.find(1, !0).line, (c || (c = [])).push(a);
      return c
  }

  function ye(a, b) {
      var c = kf(a, b),
          d = we(c);
      return c == d ? b : of(d)
  }

  function ze(a, b) {
      if (b > a.lastLine()) return b;
      var d, c = kf(a, b);
      if (!Ae(a, c)) return b;
      for (; d = ue(c);) c = d.find(1, !0).line;
      return of(c) + 1
  }

  function Ae(a, b) {
      var c = x && b.markedSpans;
      if (c)
          for (var d, e = 0; e < c.length; ++e)
              if (d = c[e], d.marker.collapsed) {
                  if (null == d.from) return !0;
                  if (!d.marker.widgetNode && 0 == d.from && d.marker.inclusiveLeft && Be(a, b, d)) return !0
              }
  }

  function Be(a, b, c) {
      if (null == c.to) {
          var d = c.marker.find(1, !0);
          return Be(a, d.line, ee(d.line.markedSpans, c.marker))
      }
      if (c.marker.inclusiveRight && c.to == b.text.length) return !0;
      for (var e, f = 0; f < b.markedSpans.length; ++f)
          if (e = b.markedSpans[f], e.marker.collapsed && !e.marker.widgetNode && e.from == c.to && (null == e.to || e.to != c.from) && (e.marker.inclusiveLeft || c.marker.inclusiveRight) && Be(a, b, e)) return !0
  }

  function De(a, b, c) {
      qf(b) < (a.curOp && a.curOp.scrollTop || a.doc.scrollTop) && wd(a, null, c)
  }

  function Ee(a) {
      if (null != a.height) return a.height;
      var b = a.doc.cm;
      if (!b) return 0;
      if (!zg(document.body, a.node)) {
          var c = "position: relative;";
          a.coverGutter && (c += "margin-left: -" + b.display.gutters.offsetWidth + "px;"), a.noHScroll && (c += "width: " + b.display.wrapper.clientWidth + "px;"), yg(b.display.measure, vg("div", [a.node], null, c))
      }
      return a.height = a.node.parentNode.offsetHeight
  }

  function Fe(a, b, c, d) {
      var e = new Ce(a, c, d),
          f = a.cm;
      return f && e.noHScroll && (f.display.alignWidgets = !0), Ad(a, b, "widget", function(b) {
          var c = b.widgets || (b.widgets = []);
          if (null == e.insertAt ? c.push(e) : c.splice(Math.min(c.length - 1, Math.max(0, e.insertAt)), 0, e), e.line = b, f && !Ae(a, b)) {
              var d = qf(b) < a.scrollTop;
              nf(b, b.height + Ee(e)), d && wd(f, null, e.height), f.curOp.forceUpdate = !0
          }
          return !0
      }), e
  }

  function He(a, b, c, d) {
      a.text = b, a.stateAfter && (a.stateAfter = null), a.styles && (a.styles = null), null != a.order && (a.order = null), ne(a), oe(a, c);
      var e = d ? d(a) : 1;
      e != a.height && nf(a, e)
  }

  function Ie(a) {
      a.parent = null, ne(a)
  }

  function Je(a, b) {
      if (a)
          for (;;) {
              var c = a.match(/(?:^|\s+)line-(background-)?(\S+)/);
              if (!c) break;
              a = a.slice(0, c.index) + a.slice(c.index + c[0].length);
              var d = c[1] ? "bgClass" : "textClass";
              null == b[d] ? b[d] = c[2] : new RegExp("(?:^|s)" + c[2] + "(?:$|s)").test(b[d]) || (b[d] += " " + c[2])
          }
      return a
  }

  function Ke(a, b) {
      if (a.blankLine) return a.blankLine(b);
      if (a.innerMode) {
          var c = y.innerMode(a, b);
          return c.mode.blankLine ? c.mode.blankLine(c.state) : void 0
      }
  }

  function Le(a, b, c, d) {
      for (var e = 0; 10 > e; e++) {
          d && (d[0] = y.innerMode(a, c).mode);
          var f = a.token(b, c);
          if (b.pos > b.start) return f
      }
      throw new Error("Mode " + a.name + " failed to advance stream.")
  }

  function Me(a, b, c, d) {
      function e(a) {
          return {
              start: k.start,
              end: k.pos,
              string: k.current(),
              type: h || null,
              state: a ? Nd(f.mode, j) : j
          }
      }
      var h, f = a.doc,
          g = f.mode;
      b = Qa(f, b);
      var l, i = kf(f, b.line),
          j = pb(a, b.line, c),
          k = new Wd(i.text, a.options.tabSize);
      for (d && (l = []);
          (d || k.pos < b.ch) && !k.eol();) k.start = k.pos, h = Le(g, k, j), d && l.push(e(!0));
      return d ? l : e()
  }

  function Ne(a, b, c, d, e, f, g) {
      var h = c.flattenSpans;
      null == h && (h = a.options.flattenSpans);
      var l, i = 0,
          j = null,
          k = new Wd(b, a.options.tabSize),
          m = a.options.addModeClass && [null];
      for ("" == b && Je(Ke(c, d), f); !k.eol();) {
          if (k.pos > a.options.maxHighlightLength ? (h = !1, g && Qe(a, b, d, k.pos), k.pos = b.length, l = null) : l = Je(Le(c, k, d, m), f), m) {
              var n = m[0].name;
              n && (l = "m-" + (l ? n + " " + l : n))
          }
          if (!h || j != l) {
              for (; i < k.start;) i = Math.min(k.start, i + 5e4), e(i, j);
              j = l
          }
          k.start = k.pos
      }
      for (; i < k.pos;) {
          var o = Math.min(k.pos, i + 5e4);
          e(o, j), i = o
      }
  }

  function Oe(a, b, c, d) {
      var e = [a.state.modeGen],
          f = {};
      Ne(a, b.text, a.doc.mode, c, function(a, b) {
          e.push(a, b)
      }, f, d);
      for (var g = 0; g < a.state.overlays.length; ++g) {
          var h = a.state.overlays[g],
              i = 1,
              j = 0;
          Ne(a, b.text, h.mode, !0, function(a, b) {
              for (var c = i; a > j;) {
                  var d = e[i];
                  d > a && e.splice(i, 1, a, e[i + 1], d), i += 2, j = Math.min(a, d)
              }
              if (b)
                  if (h.opaque) e.splice(c, i - c, a, "cm-overlay " + b), i = c + 2;
                  else
                      for (; i > c; c += 2) {
                          var f = e[c + 1];
                          e[c + 1] = (f ? f + " " : "") + "cm-overlay " + b
                      }
          }, f)
      }
      return {
          styles: e,
          classes: f.bgClass || f.textClass ? f : null
      }
  }

  function Pe(a, b, c) {
      if (!b.styles || b.styles[0] != a.state.modeGen) {
          var d = pb(a, of(b)),
              e = Oe(a, b, b.text.length > a.options.maxHighlightLength ? Nd(a.doc.mode, d) : d);
          b.stateAfter = d, b.styles = e.styles, e.classes ? b.styleClasses = e.classes : b.styleClasses && (b.styleClasses = null), c === a.doc.frontier && a.doc.frontier++
      }
      return b.styles
  }

  function Qe(a, b, c, d) {
      var e = a.doc.mode,
          f = new Wd(b, a.options.tabSize);
      for (f.start = f.pos = d || 0, "" == b && Ke(e, c); !f.eol();) Le(e, f, c), f.start = f.pos
  }

  function Te(a, b) {
      if (!a || /^\s*$/.test(a)) return null;
      var c = b.addModeClass ? Se : Re;
      return c[a] || (c[a] = a.replace(/\S+/g, "cm-$&"))
  }

  function Ue(a, b) {
      var c = vg("span", null, null, h ? "padding-right: .1px" : null),
          d = {
              pre: vg("pre", [c], "CodeMirror-line"),
              content: c,
              col: 0,
              pos: 0,
              cm: a,
              splitSpaces: (f || h) && a.getOption("lineWrapping")
          };
      b.measure = {};
      for (var e = 0; e <= (b.rest ? b.rest.length : 0); e++) {
          var i, g = e ? b.rest[e - 1] : b.line;
          d.pos = 0, d.addToken = We, Ng(a.display.measure) && (i = rf(g)) && (d.addToken = Ye(d.addToken, i)), d.map = [];
          var j = b != a.display.externalMeasured && of(g);
          $e(g, d, Pe(a, g, j)), g.styleClasses && (g.styleClasses.bgClass && (d.bgClass = Eg(g.styleClasses.bgClass, d.bgClass || "")), g.styleClasses.textClass && (d.textClass = Eg(g.styleClasses.textClass, d.textClass || ""))), 0 == d.map.length && d.map.push(0, 0, d.content.appendChild(Lg(a.display.measure))), 0 == e ? (b.measure.map = d.map, b.measure.cache = {}) : ((b.measure.maps || (b.measure.maps = [])).push(d.map), (b.measure.caches || (b.measure.caches = [])).push({}))
      }
      if (h) {
          var k = d.content.lastChild;
          (/\bcm-tab\b/.test(k.className) || k.querySelector && k.querySelector(".cm-tab")) && (d.content.className = "cm-tab-wrap-hack")
      }
      return Rf(a, "renderLine", a, b.line, d.pre), d.pre.className && (d.textClass = Eg(d.pre.className, d.textClass || "")), d
  }

  function Ve(a) {
      var b = vg("span", "\u2022", "cm-invalidchar");
      return b.title = "\\u" + a.charCodeAt(0).toString(16), b.setAttribute("aria-label", b.title), b
  }

  function We(a, b, c, d, e, h, i) {
      if (b) {
          var j = a.splitSpaces ? b.replace(/ {3,}/g, Xe) : b,
              k = a.cm.state.specialChars,
              l = !1;
          if (k.test(b))
              for (var m = document.createDocumentFragment(), n = 0;;) {
                  k.lastIndex = n;
                  var o = k.exec(b),
                      p = o ? o.index - n : b.length - n;
                  if (p) {
                      var q = document.createTextNode(j.slice(n, n + p));
                      f && 9 > g ? m.appendChild(vg("span", [q])) : m.appendChild(q), a.map.push(a.pos, a.pos + p, q), a.col += p, a.pos += p
                  }
                  if (!o) break;
                  if (n += p + 1, "	" == o[0]) {
                      var r = a.cm.options.tabSize,
                          s = r - a.col % r,
                          q = m.appendChild(vg("span", gg(s), "cm-tab"));
                      q.setAttribute("role", "presentation"), q.setAttribute("cm-text", "	"), a.col += s
                  } else if ("\r" == o[0] || "\n" == o[0]) {
                      var q = m.appendChild(vg("span", "\r" == o[0] ? "\u240d" : "\u2424", "cm-invalidchar"));
                      q.setAttribute("cm-text", o[0]), a.col += 1
                  } else {
                      var q = a.cm.options.specialCharPlaceholder(o[0]);
                      q.setAttribute("cm-text", o[0]), f && 9 > g ? m.appendChild(vg("span", [q])) : m.appendChild(q), a.col += 1
                  }
                  a.map.push(a.pos, a.pos + 1, q), a.pos++
              } else {
                  a.col += b.length;
                  var m = document.createTextNode(j);
                  a.map.push(a.pos, a.pos + b.length, m), f && 9 > g && (l = !0), a.pos += b.length
              }
          if (c || d || e || l || i) {
              var t = c || "";
              d && (t += d), e && (t += e);
              var u = vg("span", [m], t, i);
              return h && (u.title = h), a.content.appendChild(u)
          }
          a.content.appendChild(m)
      }
  }

  function Xe(a) {
      for (var b = " ", c = 0; c < a.length - 2; ++c) b += c % 2 ? " " : "\xa0";
      return b += " "
  }

  function Ye(a, b) {
      return function(c, d, e, f, g, h, i) {
          e = e ? e + " cm-force-border" : "cm-force-border";
          for (var j = c.pos, k = j + d.length;;) {
              for (var l = 0; l < b.length; l++) {
                  var m = b[l];
                  if (m.to > j && m.from <= j) break
              }
              if (m.to >= k) return a(c, d, e, f, g, h, i);
              a(c, d.slice(0, m.to - j), e, f, null, h, i), f = null, d = d.slice(m.to - j), j = m.to
          }
      }
  }

  function Ze(a, b, c, d) {
      var e = !d && c.widgetNode;
      e && a.map.push(a.pos, a.pos + b, e), !d && a.cm.display.input.needsContentAttribute && (e || (e = a.content.appendChild(document.createElement("span"))), e.setAttribute("cm-marker", c.id)), e && (a.cm.display.input.setUneditable(e), a.content.appendChild(e)), a.pos += b
  }

  function $e(a, b, c) {
      var d = a.markedSpans,
          e = a.text,
          f = 0;
      if (d)
          for (var k, l, n, o, p, q, r, h = e.length, i = 0, g = 1, j = "", m = 0;;) {
              if (m == i) {
                  n = o = p = q = l = "", r = null, m = 1 / 0;
                  for (var t, s = [], u = 0; u < d.length; ++u) {
                      var v = d[u],
                          w = v.marker;
                      "bookmark" == w.type && v.from == i && w.widgetNode ? s.push(w) : v.from <= i && (null == v.to || v.to > i || w.collapsed && v.to == i && v.from == i) ? (null != v.to && v.to != i && m > v.to && (m = v.to, o = ""), w.className && (n += " " + w.className), w.css && (l = (l ? l + ";" : "") + w.css), w.startStyle && v.from == i && (p += " " + w.startStyle), w.endStyle && v.to == m && (t || (t = [])).push(w.endStyle, v.to), w.title && !q && (q = w.title), w.collapsed && (!r || re(r.marker, w) < 0) && (r = v)) : v.from > i && m > v.from && (m = v.from)
                  }
                  if (t)
                      for (var u = 0; u < t.length; u += 2) t[u + 1] == m && (o += " " + t[u]);
                  if (!r || r.from == i)
                      for (var u = 0; u < s.length; ++u) Ze(b, 0, s[u]);
                  if (r && (r.from || 0) == i) {
                      if (Ze(b, (null == r.to ? h + 1 : r.to) - i, r.marker, null == r.from), null == r.to) return;
                      r.to == i && (r = !1)
                  }
              }
              if (i >= h) break;
              for (var x = Math.min(h, m);;) {
                  if (j) {
                      var y = i + j.length;
                      if (!r) {
                          var z = y > x ? j.slice(0, x - i) : j;
                          b.addToken(b, z, k ? k + n : n, p, i + z.length == m ? o : "", q, l)
                      }
                      if (y >= x) {
                          j = j.slice(x - i), i = x;
                          break
                      }
                      i = y, p = ""
                  }
                  j = e.slice(f, f = c[g++]), k = Te(c[g++], b.cm.options)
              }
          } else
              for (var g = 1; g < c.length; g += 2) b.addToken(b, e.slice(f, f = c[g]), Te(c[g + 1], b.cm.options))
  }

  function _e(a, b) {
      return 0 == b.from.ch && 0 == b.to.ch && "" == hg(b.text) && (!a.cm || a.cm.options.wholeLineUpdateBefore)
  }

  function af(a, b, c, d) {
      function e(a) {
          return c ? c[a] : null
      }

      function f(a, c, e) {
          He(a, c, e, d), Tf(a, "change", a, b)
      }

      function g(a, b) {
          for (var c = a, f = []; b > c; ++c) f.push(new Ge(j[c], e(c), d));
          return f
      }
      var h = b.from,
          i = b.to,
          j = b.text,
          k = kf(a, h.line),
          l = kf(a, i.line),
          m = hg(j),
          n = e(j.length - 1),
          o = i.line - h.line;
      if (b.full) a.insert(0, g(0, j.length)), a.remove(j.length, a.size - j.length);
      else if (_e(a, b)) {
          var p = g(0, j.length - 1);
          f(l, l.text, n), o && a.remove(h.line, o), p.length && a.insert(h.line, p)
      } else if (k == l)
          if (1 == j.length) f(k, k.text.slice(0, h.ch) + m + k.text.slice(i.ch), n);
          else {
              var p = g(1, j.length - 1);
              p.push(new Ge(m + k.text.slice(i.ch), n, d)), f(k, k.text.slice(0, h.ch) + j[0], e(0)), a.insert(h.line + 1, p)
          } else if (1 == j.length) f(k, k.text.slice(0, h.ch) + j[0] + l.text.slice(i.ch), e(0)), a.remove(h.line + 1, o);
      else {
          f(k, k.text.slice(0, h.ch) + j[0], e(0)), f(l, m + l.text.slice(i.ch), n);
          var p = g(1, j.length - 1);
          o > 1 && a.remove(h.line + 1, o - 1), a.insert(h.line + 1, p)
      }
      Tf(a, "change", a, b)
  }

  function bf(a) {
      this.lines = a, this.parent = null;
      for (var b = 0, c = 0; b < a.length; ++b) a[b].parent = this, c += a[b].height;
      this.height = c
  }

  function cf(a) {
      this.children = a;
      for (var b = 0, c = 0, d = 0; d < a.length; ++d) {
          var e = a[d];
          b += e.chunkSize(), c += e.height, e.parent = this
      }
      this.size = b, this.height = c, this.parent = null
  }

  function hf(a, b, c) {
      function d(a, e, f) {
          if (a.linked)
              for (var g = 0; g < a.linked.length; ++g) {
                  var h = a.linked[g];
                  if (h.doc != e) {
                      var i = f && h.sharedHist;
                      (!c || i) && (b(h.doc, i), d(h.doc, a, i))
                  }
              }
      }
      d(a, null, !0)
  }

  function jf(a, b) {
      if (b.cm) throw new Error("This document is already in use.");
      a.doc = b, b.cm = a, E(a), A(a), a.options.lineWrapping || K(a), a.options.mode = b.modeOption, mc(a)
  }

  function kf(a, b) {
      if (b -= a.first, 0 > b || b >= a.size) throw new Error("There is no line " + (b + a.first) + " in the document.");
      for (var c = a; !c.lines;)
          for (var d = 0;; ++d) {
              var e = c.children[d],
                  f = e.chunkSize();
              if (f > b) {
                  c = e;
                  break
              }
              b -= f
          }
      return c.lines[b]
  }

  function lf(a, b, c) {
      var d = [],
          e = b.line;
      return a.iter(b.line, c.line + 1, function(a) {
          var f = a.text;
          e == c.line && (f = f.slice(0, c.ch)), e == b.line && (f = f.slice(b.ch)), d.push(f), ++e
      }), d
  }

  function mf(a, b, c) {
      var d = [];
      return a.iter(b, c, function(a) {
          d.push(a.text)
      }), d
  }

  function nf(a, b) {
      var c = b - a.height;
      if (c)
          for (var d = a; d; d = d.parent) d.height += c
  }

  function of(a) {
      if (null == a.parent) return null;
      for (var b = a.parent, c = jg(b.lines, a), d = b.parent; d; b = d, d = d.parent)
          for (var e = 0; d.children[e] != b; ++e) c += d.children[e].chunkSize();
      return c + b.first
  }

  function pf(a, b) {
      var c = a.first;
      a: do {
          for (var d = 0; d < a.children.length; ++d) {
              var e = a.children[d],
                  f = e.height;
              if (f > b) {
                  a = e;
                  continue a
              }
              b -= f, c += e.chunkSize()
          }
          return c
      } while (!a.lines);
      for (var d = 0; d < a.lines.length; ++d) {
          var g = a.lines[d],
              h = g.height;
          if (h > b) break;
          b -= h
      }
      return c + d
  }

  function qf(a) {
      a = we(a);
      for (var b = 0, c = a.parent, d = 0; d < c.lines.length; ++d) {
          var e = c.lines[d];
          if (e == a) break;
          b += e.height
      }
      for (var f = c.parent; f; c = f, f = c.parent)
          for (var d = 0; d < f.children.length; ++d) {
              var g = f.children[d];
              if (g == c) break;
              b += g.height
          }
      return b
  }

  function rf(a) {
      var b = a.order;
      return null == b && (b = a.order = gh(a.text)), b
  }

  function sf(a) {
      this.done = [], this.undone = [], this.undoDepth = 1 / 0, this.lastModTime = this.lastSelTime = 0, this.lastOp = this.lastSelOp = null, this.lastOrigin = this.lastSelOrigin = null, this.generation = this.maxGeneration = a || 1
  }

  function tf(a, b) {
      var c = {
          from: ta(b.from),
          to: fd(b),
          text: lf(a, b.from, b.to)
      };
      return Af(a, c, b.from.line, b.to.line + 1), hf(a, function(a) {
          Af(a, c, b.from.line, b.to.line + 1)
      }, !0), c
  }

  function uf(a) {
      for (; a.length;) {
          var b = hg(a);
          if (!b.ranges) break;
          a.pop()
      }
  }

  function vf(a, b) {
      return b ? (uf(a.done), hg(a.done)) : a.done.length && !hg(a.done).ranges ? hg(a.done) : a.done.length > 1 && !a.done[a.done.length - 2].ranges ? (a.done.pop(), hg(a.done)) : void 0
  }

  function wf(a, b, c, d) {
      var e = a.history;
      e.undone.length = 0;
      var g, f = +new Date;
      if ((e.lastOp == d || e.lastOrigin == b.origin && b.origin && ("+" == b.origin.charAt(0) && a.cm && e.lastModTime > f - a.cm.options.historyEventDelay || "*" == b.origin.charAt(0))) && (g = vf(e, e.lastOp == d))) {
          var h = hg(g.changes);
          0 == sa(b.from, b.to) && 0 == sa(b.from, h.to) ? h.to = fd(b) : g.changes.push(tf(a, b))
      } else {
          var i = hg(e.done);
          for (i && i.ranges || zf(a.sel, e.done), g = {
                  changes: [tf(a, b)],
                  generation: e.generation
              }, e.done.push(g); e.done.length > e.undoDepth;) e.done.shift(), e.done[0].ranges || e.done.shift()
      }
      e.done.push(c), e.generation = ++e.maxGeneration, e.lastModTime = e.lastSelTime = f, e.lastOp = e.lastSelOp = d, e.lastOrigin = e.lastSelOrigin = b.origin, h || Rf(a, "historyAdded")
  }

  function xf(a, b, c, d) {
      var e = b.charAt(0);
      return "*" == e || "+" == e && c.ranges.length == d.ranges.length && c.somethingSelected() == d.somethingSelected() && new Date - a.history.lastSelTime <= (a.cm ? a.cm.options.historyEventDelay : 500)
  }

  function yf(a, b, c, d) {
      var e = a.history,
          f = d && d.origin;
      c == e.lastSelOp || f && e.lastSelOrigin == f && (e.lastModTime == e.lastSelTime && e.lastOrigin == f || xf(a, f, hg(e.done), b)) ? e.done[e.done.length - 1] = b : zf(b, e.done), e.lastSelTime = +new Date, e.lastSelOrigin = f, e.lastSelOp = c, d && d.clearRedo !== !1 && uf(e.undone)
  }

  function zf(a, b) {
      var c = hg(b);
      c && c.ranges && c.equals(a) || b.push(a)
  }

  function Af(a, b, c, d) {
      var e = b["spans_" + a.id],
          f = 0;
      a.iter(Math.max(a.first, c), Math.min(a.first + a.size, d), function(c) {
          c.markedSpans && ((e || (e = b["spans_" + a.id] = {}))[f] = c.markedSpans), ++f
      })
  }

  function Bf(a) {
      if (!a) return null;
      for (var c, b = 0; b < a.length; ++b) a[b].marker.explicitlyCleared ? c || (c = a.slice(0, b)) : c && c.push(a[b]);
      return c ? c.length ? c : null : a
  }

  function Cf(a, b) {
      var c = b["spans_" + a.id];
      if (!c) return null;
      for (var d = 0, e = []; d < b.text.length; ++d) e.push(Bf(c[d]));
      return e
  }

  function Df(a, b, c) {
      for (var d = 0, e = []; d < a.length; ++d) {
          var f = a[d];
          if (f.ranges) e.push(c ? La.prototype.deepCopy.call(f) : f);
          else {
              var g = f.changes,
                  h = [];
              e.push({
                  changes: h
              });
              for (var i = 0; i < g.length; ++i) {
                  var k, j = g[i];
                  if (h.push({
                          from: j.from,
                          to: j.to,
                          text: j.text
                      }), b)
                      for (var l in j)(k = l.match(/^spans_(\d+)$/)) && jg(b, Number(k[1])) > -1 && (hg(h)[l] = j[l], delete j[l])
              }
          }
      }
      return e
  }

  function Ef(a, b, c, d) {
      c < a.line ? a.line += d : b < a.line && (a.line = b, a.ch = 0)
  }

  function Ff(a, b, c, d) {
      for (var e = 0; e < a.length; ++e) {
          var f = a[e],
              g = !0;
          if (f.ranges) {
              f.copied || (f = a[e] = f.deepCopy(), f.copied = !0);
              for (var h = 0; h < f.ranges.length; h++) Ef(f.ranges[h].anchor, b, c, d), Ef(f.ranges[h].head, b, c, d)
          } else {
              for (var h = 0; h < f.changes.length; ++h) {
                  var i = f.changes[h];
                  if (c < i.from.line) i.from = ra(i.from.line + d, i.from.ch), i.to = ra(i.to.line + d, i.to.ch);
                  else if (b <= i.to.line) {
                      g = !1;
                      break
                  }
              }
              g || (a.splice(0, e + 1), e = 0)
          }
      }
  }

  function Gf(a, b) {
      var c = b.from.line,
          d = b.to.line,
          e = b.text.length - (d - c) - 1;
      Ff(a.done, c, d, e), Ff(a.undone, c, d, e)
  }

  function Jf(a) {
      return null != a.defaultPrevented ? a.defaultPrevented : 0 == a.returnValue
  }

  function Lf(a) {
      return a.target || a.srcElement
  }

  function Mf(a) {
      var b = a.which;
      return null == b && (1 & a.button ? b = 1 : 2 & a.button ? b = 3 : 4 & a.button && (b = 2)), q && a.ctrlKey && 1 == b && (b = 3), b
  }

  function Pf(a, b, c) {
      var d = a._handlers && a._handlers[b];
      return c ? d && d.length > 0 ? d.slice() : Of : d || Of
  }

  function Tf(a, b) {
      function f(a) {
          return function() {
              a.apply(null, d)
          }
      }
      var c = Pf(a, b, !1);
      if (c.length) {
          var e, d = Array.prototype.slice.call(arguments, 2);
          Xb ? e = Xb.delayedCallbacks : Sf ? e = Sf : (e = Sf = [], setTimeout(Uf, 0));
          for (var g = 0; g < c.length; ++g) e.push(f(c[g]))
      }
  }

  function Uf() {
      var a = Sf;
      Sf = null;
      for (var b = 0; b < a.length; ++b) a[b]()
  }

  function Vf(a, b, c) {
      return "string" == typeof b && (b = {
          type: b,
          preventDefault: function() {
              this.defaultPrevented = !0
          }
      }), Rf(a, c || b.type, a, b), Jf(b) || b.codemirrorIgnore
  }

  function Wf(a) {
      var b = a._handlers && a._handlers.cursorActivity;
      if (b)
          for (var c = a.curOp.cursorActivityHandlers || (a.curOp.cursorActivityHandlers = []), d = 0; d < b.length; ++d) - 1 == jg(c, b[d]) && c.push(b[d])
  }

  function Xf(a, b) {
      return Pf(a, b).length > 0
  }

  function Yf(a) {
      a.prototype.on = function(a, b) {
          Nf(this, a, b)
      }, a.prototype.off = function(a, b) {
          Qf(this, a, b)
      }
  }

  function cg() {
      this.id = null
  }

  function gg(a) {
      for (; fg.length <= a;) fg.push(hg(fg) + " ");
      return fg[a]
  }

  function hg(a) {
      return a[a.length - 1]
  }

  function jg(a, b) {
      for (var c = 0; c < a.length; ++c)
          if (a[c] == b) return c;
      return -1
  }

  function kg(a, b) {
      for (var c = [], d = 0; d < a.length; d++) c[d] = b(a[d], d);
      return c
  }

  function lg() {}

  function mg(a, b) {
      var c;
      return Object.create ? c = Object.create(a) : (lg.prototype = a, c = new lg), b && ng(b, c), c
  }

  function ng(a, b, c) {
      b || (b = {});
      for (var d in a) !a.hasOwnProperty(d) || c === !1 && b.hasOwnProperty(d) || (b[d] = a[d]);
      return b
  }

  function og(a) {
      var b = Array.prototype.slice.call(arguments, 1);
      return function() {
          return a.apply(null, b)
      }
  }

  function rg(a, b) {
      return b ? b.source.indexOf("\\w") > -1 && qg(a) ? !0 : b.test(a) : qg(a)
  }

  function sg(a) {
      for (var b in a)
          if (a.hasOwnProperty(b) && a[b]) return !1;
      return !0
  }

  function ug(a) {
      return a.charCodeAt(0) >= 768 && tg.test(a)
  }

  function vg(a, b, c, d) {
      var e = document.createElement(a);
      if (c && (e.className = c), d && (e.style.cssText = d), "string" == typeof b) e.appendChild(document.createTextNode(b));
      else if (b)
          for (var f = 0; f < b.length; ++f) e.appendChild(b[f]);
      return e
  }

  function xg(a) {
      for (var b = a.childNodes.length; b > 0; --b) a.removeChild(a.firstChild);
      return a
  }

  function yg(a, b) {
      return xg(a).appendChild(b)
  }

  function Ag() {
      for (var a = document.activeElement; a && a.root && a.root.activeElement;) a = a.root.activeElement;
      return a
  }

  function Bg(a) {
      return new RegExp("(^|\\s)" + a + "(?:$|\\s)\\s*")
  }

  function Eg(a, b) {
      for (var c = a.split(" "), d = 0; d < c.length; d++) c[d] && !Bg(c[d]).test(b) && (b += " " + c[d]);
      return b
  }

  function Fg(a) {
      if (document.body.getElementsByClassName)
          for (var b = document.body.getElementsByClassName("CodeMirror"), c = 0; c < b.length; c++) {
              var d = b[c].CodeMirror;
              d && a(d)
          }
  }

  function Hg() {
      Gg || (Ig(), Gg = !0)
  }

  function Ig() {
      var a;
      Nf(window, "resize", function() {
          null == a && (a = setTimeout(function() {
              a = null, Fg(vc)
          }, 100))
      }), Nf(window, "blur", function() {
          Fg(cd)
      })
  }

  function Lg(a) {
      if (null == Kg) {
          var b = vg("span", "\u200b");
          yg(a, vg("span", [b, document.createTextNode("x")])), 0 != a.firstChild.offsetHeight && (Kg = b.offsetWidth <= 1 && b.offsetHeight > 2 && !(f && 8 > g))
      }
      var c = Kg ? vg("span", "\u200b") : vg("span", "\xa0", null, "display: inline-block; width: 1px; margin-right: -1px");
      return c.setAttribute("cm-text", ""), c
  }

  function Ng(a) {
      if (null != Mg) return Mg;
      var b = yg(a, document.createTextNode("A\u062eA")),
          c = wg(b, 0, 1).getBoundingClientRect();
      if (!c || c.left == c.right) return !1;
      var d = wg(b, 1, 2).getBoundingClientRect();
      return Mg = d.right - c.right < 3
  }

  function Sg(a) {
      if (null != Rg) return Rg;
      var b = yg(a, vg("span", "x")),
          c = b.getBoundingClientRect(),
          d = wg(b, 0, 1).getBoundingClientRect();
      return Rg = Math.abs(c.left - d.left) > 1
  }

  function Ug(a, b, c, d) {
      if (!a) return d(b, c, "ltr");
      for (var e = !1, f = 0; f < a.length; ++f) {
          var g = a[f];
          (g.from < c && g.to > b || b == c && g.to == b) && (d(Math.max(g.from, b), Math.min(g.to, c), 1 == g.level ? "rtl" : "ltr"), e = !0)
      }
      e || d(b, c, "ltr")
  }

  function Vg(a) {
      return a.level % 2 ? a.to : a.from
  }

  function Wg(a) {
      return a.level % 2 ? a.from : a.to
  }

  function Xg(a) {
      var b = rf(a);
      return b ? Vg(b[0]) : 0
  }

  function Yg(a) {
      var b = rf(a);
      return b ? Wg(hg(b)) : a.text.length
  }

  function Zg(a, b) {
      var c = kf(a.doc, b),
          d = we(c);
      d != c && (b = of(d));
      var e = rf(d),
          f = e ? e[0].level % 2 ? Yg(d) : Xg(d) : 0;
      return ra(b, f)
  }

  function $g(a, b) {
      for (var c, d = kf(a.doc, b); c = ue(d);) d = c.find(1, !0).line, b = null;
      var e = rf(d),
          f = e ? e[0].level % 2 ? Xg(d) : Yg(d) : d.text.length;
      return ra(null == b ? of(d) : b, f)
  }

  function _g(a, b) {
      var c = Zg(a, b.line),
          d = kf(a.doc, c.line),
          e = rf(d);
      if (!e || 0 == e[0].level) {
          var f = Math.max(0, d.text.search(/\S/)),
              g = b.line == c.line && b.ch <= f && b.ch;
          return ra(c.line, g ? 0 : f)
      }
      return c
  }

  function ah(a, b, c) {
      var d = a[0].level;
      return b == d ? !0 : c == d ? !1 : c > b
  }

  function ch(a, b) {
      bh = null;
      for (var d, c = 0; c < a.length; ++c) {
          var e = a[c];
          if (e.from < b && e.to > b) return c;
          if (e.from == b || e.to == b) {
              if (null != d) return ah(a, e.level, a[d].level) ? (e.from != e.to && (bh = d), c) : (e.from != e.to && (bh = c), d);
              d = c
          }
      }
      return d
  }

  function dh(a, b, c, d) {
      if (!d) return b + c;
      do b += c; while (b > 0 && ug(a.text.charAt(b)));
      return b
  }

  function eh(a, b, c, d) {
      var e = rf(a);
      if (!e) return fh(a, b, c, d);
      for (var f = ch(e, b), g = e[f], h = dh(a, b, g.level % 2 ? -c : c, d);;) {
          if (h > g.from && h < g.to) return h;
          if (h == g.from || h == g.to) return ch(e, h) == f ? h : (g = e[f += c], c > 0 == g.level % 2 ? g.to : g.from);
          if (g = e[f += c], !g) return null;
          h = c > 0 == g.level % 2 ? dh(a, g.to, -1, d) : dh(a, g.from, 1, d)
      }
  }

  function fh(a, b, c, d) {
      var e = b + c;
      if (d)
          for (; e > 0 && ug(a.text.charAt(e));) e += c;
      return 0 > e || e > a.text.length ? null : e
  }
  var a = navigator.userAgent,
      b = navigator.platform,
      c = /gecko\/\d/i.test(a),
      d = /MSIE \d/.test(a),
      e = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(a),
      f = d || e,
      g = f && (d ? document.documentMode || 6 : e[1]),
      h = /WebKit\//.test(a),
      i = h && /Qt\/\d+\.\d+/.test(a),
      j = /Chrome\//.test(a),
      k = /Opera\//.test(a),
      l = /Apple Computer/.test(navigator.vendor),
      m = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(a),
      n = /PhantomJS/.test(a),
      o = /AppleWebKit/.test(a) && /Mobile\/\w+/.test(a),
      p = o || /Android|webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(a),
      q = o || /Mac/.test(b),
      r = /\bCrOS\b/.test(a),
      s = /win/i.test(b),
      t = k && a.match(/Version\/(\d*\.\d*)/);
  t && (t = Number(t[1])), t && t >= 15 && (k = !1, h = !0);
  var u = q && (i || k && (null == t || 12.11 > t)),
      v = c || f && g >= 9,
      w = !1,
      x = !1;
  N.prototype = ng({
      update: function(a) {
          var b = a.scrollWidth > a.clientWidth + 1,
              c = a.scrollHeight > a.clientHeight + 1,
              d = a.nativeBarWidth;
          if (c) {
              this.vert.style.display = "block", this.vert.style.bottom = b ? d + "px" : "0";
              var e = a.viewHeight - (b ? d : 0);
              this.vert.firstChild.style.height = Math.max(0, a.scrollHeight - a.clientHeight + e) + "px"
          } else this.vert.style.display = "", this.vert.firstChild.style.height = "0";
          if (b) {
              this.horiz.style.display = "block", this.horiz.style.right = c ? d + "px" : "0", this.horiz.style.left = a.barLeft + "px";
              var f = a.viewWidth - a.barLeft - (c ? d : 0);
              this.horiz.firstChild.style.width = a.scrollWidth - a.clientWidth + f + "px"
          } else this.horiz.style.display = "", this.horiz.firstChild.style.width = "0";
          return !this.checkedZeroWidth && a.clientHeight > 0 && (0 == d && this.zeroWidthHack(), this.checkedZeroWidth = !0), {
              right: c ? d : 0,
              bottom: b ? d : 0
          }
      },
      setScrollLeft: function(a) {
          this.horiz.scrollLeft != a && (this.horiz.scrollLeft = a), this.disableHoriz && this.enableZeroWidthBar(this.horiz, this.disableHoriz)
      },
      setScrollTop: function(a) {
          this.vert.scrollTop != a && (this.vert.scrollTop = a), this.disableVert && this.enableZeroWidthBar(this.vert, this.disableVert)
      },
      zeroWidthHack: function() {
          var a = q && !m ? "12px" : "18px";
          this.horiz.style.height = this.vert.style.width = a, this.horiz.style.pointerEvents = this.vert.style.pointerEvents = "none", this.disableHoriz = new cg, this.disableVert = new cg
      },
      enableZeroWidthBar: function(a, b) {
          function c() {
              var d = a.getBoundingClientRect(),
                  e = document.elementFromPoint(d.left + 1, d.bottom - 1);
              e != a ? a.style.pointerEvents = "none" : b.set(1e3, c)
          }
          a.style.pointerEvents = "auto", b.set(1e3, c)
      },
      clear: function() {
          var a = this.horiz.parentNode;
          a.removeChild(this.horiz), a.removeChild(this.vert)
      }
  }, N.prototype), O.prototype = ng({
      update: function() {
          return {
              bottom: 0,
              right: 0
          }
      },
      setScrollLeft: function() {},
      setScrollTop: function() {},
      clear: function() {}
  }, O.prototype), y.scrollbarModel = {
      "native": N,
      "null": O
  }, X.prototype.signal = function(a, b) {
      Xf(a, b) && this.events.push(arguments)
  }, X.prototype.finish = function() {
      for (var a = 0; a < this.events.length; a++) Rf.apply(null, this.events[a])
  };
  var ra = y.Pos = function(a, b) {
          return this instanceof ra ? (this.line = a, void(this.ch = b)) : new ra(a, b)
      },
      sa = y.cmpPos = function(a, b) {
          return a.line - b.line || a.ch - b.ch
      },
      xa = null;
  Da.prototype = ng({
      init: function(a) {
          function h(a) {
              if (!Vf(c, a)) {
                  if (c.somethingSelected()) xa = {
                      lineWise: !1,
                      text: c.getSelections()
                  }, b.inaccurateSelection && (b.prevInput = "", b.inaccurateSelection = !1, e.value = xa.text.join("\n"), ig(e));
                  else {
                      if (!c.options.lineWiseCopyCut) return;
                      var d = Ba(c);
                      xa = {
                          lineWise: !0,
                          text: d.text
                      }, "cut" == a.type ? c.setSelections(d.ranges, null, _f) : (b.prevInput = "", e.value = d.text.join("\n"), ig(e))
                  }
                  "cut" == a.type && (c.state.cutIncoming = !0)
              }
          }
          var b = this,
              c = this.cm,
              d = this.wrapper = Ea(),
              e = this.textarea = d.firstChild;
          a.wrapper.insertBefore(d, a.wrapper.firstChild), o && (e.style.width = "0px"), Nf(e, "input", function() {
              f && g >= 9 && b.hasSelection && (b.hasSelection = null), b.poll()
          }), Nf(e, "paste", function(a) {
              Vf(c, a) || za(a, c) || (c.state.pasteIncoming = !0, b.fastPoll())
          }), Nf(e, "cut", h), Nf(e, "copy", h), Nf(a.scroller, "paste", function(d) {
              wc(a, d) || Vf(c, d) || (c.state.pasteIncoming = !0, b.focus())
          }), Nf(a.lineSpace, "selectstart", function(b) {
              wc(a, b) || Hf(b)
          }), Nf(e, "compositionstart", function() {
              var a = c.getCursor("from");
              b.composing && b.composing.range.clear(), b.composing = {
                  start: a,
                  range: c.markText(a, c.getCursor("to"), {
                      className: "CodeMirror-composing"
                  })
              }
          }), Nf(e, "compositionend", function() {
              b.composing && (b.poll(), b.composing.range.clear(), b.composing = null)
          })
      },
      prepareSelection: function() {
          var a = this.cm,
              b = a.display,
              c = a.doc,
              d = ib(a);
          if (a.options.moveInputWithCursor) {
              var e = Pb(a, c.sel.primary().head, "div"),
                  f = b.wrapper.getBoundingClientRect(),
                  g = b.lineDiv.getBoundingClientRect();
              d.teTop = Math.max(0, Math.min(b.wrapper.clientHeight - 10, e.top + g.top - f.top)), d.teLeft = Math.max(0, Math.min(b.wrapper.clientWidth - 10, e.left + g.left - f.left))
          }
          return d
      },
      showSelection: function(a) {
          var b = this.cm,
              c = b.display;
          yg(c.cursorDiv, a.cursors), yg(c.selectionDiv, a.selection), null != a.teTop && (this.wrapper.style.top = a.teTop + "px", this.wrapper.style.left = a.teLeft + "px")
      },
      reset: function(a) {
          if (!this.contextMenuPending) {
              var b, c, d = this.cm,
                  e = d.doc;
              if (d.somethingSelected()) {
                  this.prevInput = "";
                  var h = e.sel.primary();
                  b = Qg && (h.to().line - h.from().line > 100 || (c = d.getSelection()).length > 1e3);
                  var i = b ? "-" : c || d.getSelection();
                  this.textarea.value = i, d.state.focused && ig(this.textarea), f && g >= 9 && (this.hasSelection = i)
              } else a || (this.prevInput = this.textarea.value = "", f && g >= 9 && (this.hasSelection = null));
              this.inaccurateSelection = b
          }
      },
      getField: function() {
          return this.textarea
      },
      supportsTouch: function() {
          return !1
      },
      focus: function() {
          if ("nocursor" != this.cm.options.readOnly && (!p || Ag() != this.textarea)) try {
              this.textarea.focus()
          } catch (a) {}
      },
      blur: function() {
          this.textarea.blur()
      },
      resetPosition: function() {
          this.wrapper.style.top = this.wrapper.style.left = 0
      },
      receivedFocus: function() {
          this.slowPoll()
      },
      slowPoll: function() {
          var a = this;
          a.pollingFast || a.polling.set(this.cm.options.pollInterval, function() {
              a.poll(), a.cm.state.focused && a.slowPoll()
          })
      },
      fastPoll: function() {
          function c() {
              var d = b.poll();
              d || a ? (b.pollingFast = !1, b.slowPoll()) : (a = !0, b.polling.set(60, c))
          }
          var a = !1,
              b = this;
          b.pollingFast = !0, b.polling.set(20, c)
      },
      poll: function() {
          var a = this.cm,
              b = this.textarea,
              c = this.prevInput;
          if (this.contextMenuPending || !a.state.focused || Pg(b) && !c && !this.composing || a.isReadOnly() || a.options.disableInput || a.state.keySeq) return !1;
          var d = b.value;
          if (d == c && !a.somethingSelected()) return !1;
          if (f && g >= 9 && this.hasSelection === d || q && /[\uf700-\uf7ff]/.test(d)) return a.display.input.reset(), !1;
          if (a.doc.sel == a.display.selForContextMenu) {
              var e = d.charCodeAt(0);
              if (8203 != e || c || (c = "\u200b"), 8666 == e) return this.reset(), this.cm.execCommand("undo")
          }
          for (var h = 0, i = Math.min(c.length, d.length); i > h && c.charCodeAt(h) == d.charCodeAt(h);) ++h;
          var j = this;
          return gc(a, function() {
              ya(a, d.slice(h), c.length - h, null, j.composing ? "*compose" : null), d.length > 1e3 || d.indexOf("\n") > -1 ? b.value = j.prevInput = "" : j.prevInput = d, j.composing && (j.composing.range.clear(), j.composing.range = a.markText(j.composing.start, a.getCursor("to"), {
                  className: "CodeMirror-composing"
              }))
          }), !0
      },
      ensurePolled: function() {
          this.pollingFast && this.poll() && (this.pollingFast = !1)
      },
      onKeyPress: function() {
          f && g >= 9 && (this.hasSelection = null), this.fastPoll()
      },
      onContextMenu: function(a) {
          function q() {
              if (null != e.selectionStart) {
                  var a = c.somethingSelected(),
                      f = "\u200b" + (a ? e.value : "");
                  e.value = "\u21da", e.value = f, b.prevInput = a ? "" : "\u200b", e.selectionStart = 1, e.selectionEnd = f.length, d.selForContextMenu = c.doc.sel
              }
          }

          function r() {
              if (b.contextMenuPending = !1, b.wrapper.style.cssText = n, e.style.cssText = m, f && 9 > g && d.scrollbars.setScrollTop(d.scroller.scrollTop = j), null != e.selectionStart) {
                  (!f || f && 9 > g) && q();
                  var a = 0,
                      h = function() {
                          d.selForContextMenu == c.doc.sel && 0 == e.selectionStart && e.selectionEnd > 0 && "\u200b" == b.prevInput ? hc(c, Pd.selectAll)(c) : a++ < 10 ? d.detectingSelectAll = setTimeout(h, 500) : d.input.reset()
                      };
                  d.detectingSelectAll = setTimeout(h, 200)
              }
          }
          var b = this,
              c = b.cm,
              d = c.display,
              e = b.textarea,
              i = xc(c, a),
              j = d.scroller.scrollTop;
          if (i && !k) {
              var l = c.options.resetSelectionOnContextMenu;
              l && -1 == c.doc.sel.contains(i) && hc(c, _a)(c.doc, Oa(i), _f);
              var m = e.style.cssText,
                  n = b.wrapper.style.cssText;
              b.wrapper.style.cssText = "position: absolute";
              var o = b.wrapper.getBoundingClientRect();
              if (e.style.cssText = "position: absolute; width: 30px; height: 30px; top: " + (a.clientY - o.top - 5) + "px; left: " + (a.clientX - o.left - 5) + "px; z-index: 1000; background: " + (f ? "rgba(255, 255, 255, .05)" : "transparent") + "; outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);", h) var p = window.scrollY;
              if (d.input.focus(), h && window.scrollTo(null, p), d.input.reset(), c.somethingSelected() || (e.value = b.prevInput = " "), b.contextMenuPending = !0, d.selForContextMenu = c.doc.sel, clearTimeout(d.detectingSelectAll), f && g >= 9 && q(), v) {
                  Kf(a);
                  var s = function() {
                      Qf(window, "mouseup", s), setTimeout(r, 20)
                  };
                  Nf(window, "mouseup", s)
              } else setTimeout(r, 50)
          }
      },
      readOnlyChanged: function(a) {
          a || this.reset()
      },
      setUneditable: lg,
      needsContentAttribute: !1
  }, Da.prototype), Fa.prototype = ng({
      init: function(a) {
          function e(a) {
              if (!Vf(c, a)) {
                  if (c.somethingSelected()) xa = {
                      lineWise: !1,
                      text: c.getSelections()
                  }, "cut" == a.type && c.replaceSelection("", null, "cut");
                  else {
                      if (!c.options.lineWiseCopyCut) return;
                      var b = Ba(c);
                      xa = {
                          lineWise: !0,
                          text: b.text
                      }, "cut" == a.type && c.operation(function() {
                          c.setSelections(b.ranges, 0, _f), c.replaceSelection("", null, "cut")
                      })
                  }
                  if (a.clipboardData && !o) a.preventDefault(), a.clipboardData.clearData(), a.clipboardData.setData("text/plain", xa.text.join("\n"));
                  else {
                      var d = Ea(),
                          e = d.firstChild;
                      c.display.lineSpace.insertBefore(d, c.display.lineSpace.firstChild), e.value = xa.text.join("\n");
                      var f = document.activeElement;
                      ig(e), setTimeout(function() {
                          c.display.lineSpace.removeChild(d), f.focus()
                      }, 50)
                  }
              }
          }
          var b = this,
              c = b.cm,
              d = b.div = a.lineDiv;
          Ca(d), Nf(d, "paste", function(a) {
              Vf(c, a) || za(a, c)
          }), Nf(d, "compositionstart", function(a) {
              var d = a.data;
              if (b.composing = {
                      sel: c.doc.sel,
                      data: d,
                      startData: d
                  }, d) {
                  var e = c.doc.sel.primary(),
                      f = c.getLine(e.head.line),
                      g = f.indexOf(d, Math.max(0, e.head.ch - d.length));
                  g > -1 && g <= e.head.ch && (b.composing.sel = Oa(ra(e.head.line, g), ra(e.head.line, g + d.length)))
              }
          }), Nf(d, "compositionupdate", function(a) {
              b.composing.data = a.data
          }), Nf(d, "compositionend", function(a) {
              var c = b.composing;
              c && (a.data == c.startData || /\u200b/.test(a.data) || (c.data = a.data), setTimeout(function() {
                  c.handled || b.applyComposition(c), b.composing == c && (b.composing = null)
              }, 50))
          }), Nf(d, "touchstart", function() {
              b.forceCompositionEnd()
          }), Nf(d, "input", function() {
              b.composing || (c.isReadOnly() || !b.pollContent()) && gc(b.cm, function() {
                  mc(c)
              })
          }), Nf(d, "copy", e), Nf(d, "cut", e)
      },
      prepareSelection: function() {
          var a = ib(this.cm, !1);
          return a.focus = this.cm.state.focused, a
      },
      showSelection: function(a, b) {
          a && this.cm.display.view.length && ((a.focus || b) && this.showPrimarySelection(), this.showMultipleSelections(a))
      },
      showPrimarySelection: function() {
          var a = window.getSelection(),
              b = this.cm.doc.sel.primary(),
              d = Ia(this.cm, a.anchorNode, a.anchorOffset),
              e = Ia(this.cm, a.focusNode, a.focusOffset);
          if (!d || d.bad || !e || e.bad || 0 != sa(va(d, e), b.from()) || 0 != sa(ua(d, e), b.to())) {
              var f = Ga(this.cm, b.from()),
                  g = Ga(this.cm, b.to());
              if (f || g) {
                  var h = this.cm.display.view,
                      i = a.rangeCount && a.getRangeAt(0);
                  if (f) {
                      if (!g) {
                          var j = h[h.length - 1].measure,
                              k = j.maps ? j.maps[j.maps.length - 1] : j.map;
                          g = {
                              node: k[k.length - 1],
                              offset: k[k.length - 2] - k[k.length - 3]
                          }
                      }
                  } else f = {
                      node: h[0].measure.map[2],
                      offset: 0
                  };
                  try {
                      var l = wg(f.node, f.offset, g.offset, g.node)
                  } catch (m) {}
                  l && (!c && this.cm.state.focused ? (a.collapse(f.node, f.offset), l.collapsed || a.addRange(l)) : (a.removeAllRanges(), a.addRange(l)), i && null == a.anchorNode ? a.addRange(i) : c && this.startGracePeriod()), this.rememberSelection()
              }
          }
      },
      startGracePeriod: function() {
          var a = this;
          clearTimeout(this.gracePeriod), this.gracePeriod = setTimeout(function() {
              a.gracePeriod = !1, a.selectionChanged() && a.cm.operation(function() {
                  a.cm.curOp.selectionChanged = !0
              })
          }, 20)
      },
      showMultipleSelections: function(a) {
          yg(this.cm.display.cursorDiv, a.cursors), yg(this.cm.display.selectionDiv, a.selection)
      },
      rememberSelection: function() {
          var a = window.getSelection();
          this.lastAnchorNode = a.anchorNode, this.lastAnchorOffset = a.anchorOffset, this.lastFocusNode = a.focusNode, this.lastFocusOffset = a.focusOffset
      },
      selectionInEditor: function() {
          var a = window.getSelection();
          if (!a.rangeCount) return !1;
          var b = a.getRangeAt(0).commonAncestorContainer;
          return zg(this.div, b)
      },
      focus: function() {
          "nocursor" != this.cm.options.readOnly && this.div.focus()
      },
      blur: function() {
          this.div.blur()
      },
      getField: function() {
          return this.div
      },
      supportsTouch: function() {
          return !0
      },
      receivedFocus: function() {
          function b() {
              a.cm.state.focused && (a.pollSelection(), a.polling.set(a.cm.options.pollInterval, b))
          }
          var a = this;
          this.selectionInEditor() ? this.pollSelection() : gc(this.cm, function() {
              a.cm.curOp.selectionChanged = !0
          }), this.polling.set(this.cm.options.pollInterval, b)
      },
      selectionChanged: function() {
          var a = window.getSelection();
          return a.anchorNode != this.lastAnchorNode || a.anchorOffset != this.lastAnchorOffset || a.focusNode != this.lastFocusNode || a.focusOffset != this.lastFocusOffset
      },
      pollSelection: function() {
          if (!this.composing && !this.gracePeriod && this.selectionChanged()) {
              var a = window.getSelection(),
                  b = this.cm;
              this.rememberSelection();
              var c = Ia(b, a.anchorNode, a.anchorOffset),
                  d = Ia(b, a.focusNode, a.focusOffset);
              c && d && gc(b, function() {
                  _a(b.doc, Oa(c, d), _f), (c.bad || d.bad) && (b.curOp.selectionChanged = !0)
              })
          }
      },
      pollContent: function() {
          var a = this.cm,
              b = a.display,
              c = a.doc.sel.primary(),
              d = c.from(),
              e = c.to();
          if (d.line < b.viewFrom || e.line > b.viewTo - 1) return !1;
          var f;
          if (d.line == b.viewFrom || 0 == (f = pc(a, d.line))) var g = of(b.view[0].line),
              h = b.view[0].node;
          else var g = of(b.view[f].line),
              h = b.view[f - 1].node.nextSibling;
          var i = pc(a, e.line);
          if (i == b.view.length - 1) var j = b.viewTo - 1,
              k = b.lineDiv.lastChild;
          else var j = of(b.view[i + 1].line) - 1,
              k = b.view[i + 1].node.previousSibling;
          for (var l = a.doc.splitLines(Ka(a, h, k, g, j)), m = lf(a.doc, ra(g, 0), ra(j, kf(a.doc, j).text.length)); l.length > 1 && m.length > 1;)
              if (hg(l) == hg(m)) l.pop(), m.pop(), j--;
              else {
                  if (l[0] != m[0]) break;
                  l.shift(), m.shift(), g++
              }
          for (var n = 0, o = 0, p = l[0], q = m[0], r = Math.min(p.length, q.length); r > n && p.charCodeAt(n) == q.charCodeAt(n);) ++n;
          for (var s = hg(l), t = hg(m), u = Math.min(s.length - (1 == l.length ? n : 0), t.length - (1 == m.length ? n : 0)); u > o && s.charCodeAt(s.length - o - 1) == t.charCodeAt(t.length - o - 1);) ++o;
          l[l.length - 1] = s.slice(0, s.length - o), l[0] = l[0].slice(n);
          var v = ra(g, n),
              w = ra(j, m.length ? hg(m).length - o : 0);
          return l.length > 1 || l[0] || sa(v, w) ? (rd(a.doc, l, v, w, "+input"), !0) : void 0
      },
      ensurePolled: function() {
          this.forceCompositionEnd()
      },
      reset: function() {
          this.forceCompositionEnd()
      },
      forceCompositionEnd: function() {
          this.composing && !this.composing.handled && (this.applyComposition(this.composing), this.composing.handled = !0, this.div.blur(), this.div.focus())
      },
      applyComposition: function(a) {
          this.cm.isReadOnly() ? hc(this.cm, mc)(this.cm) : a.data && a.data != a.startData && hc(this.cm, ya)(this.cm, a.data, 0, a.sel)
      },
      setUneditable: function(a) {
          a.contentEditable = "false"
      },
      onKeyPress: function(a) {
          a.preventDefault(), this.cm.isReadOnly() || hc(this.cm, ya)(this.cm, String.fromCharCode(null == a.charCode ? a.keyCode : a.charCode), 0)
      },
      readOnlyChanged: function(a) {
          this.div.contentEditable = String("nocursor" != a)
      },
      onContextMenu: lg,
      resetPosition: lg,
      needsContentAttribute: !0
  }, Fa.prototype), y.inputStyles = {
      textarea: Da,
      contenteditable: Fa
  }, La.prototype = {
      primary: function() {
          return this.ranges[this.primIndex]
      },
      equals: function(a) {
          if (a == this) return !0;
          if (a.primIndex != this.primIndex || a.ranges.length != this.ranges.length) return !1;
          for (var b = 0; b < this.ranges.length; b++) {
              var c = this.ranges[b],
                  d = a.ranges[b];
              if (0 != sa(c.anchor, d.anchor) || 0 != sa(c.head, d.head)) return !1
          }
          return !0
      },
      deepCopy: function() {
          for (var a = [], b = 0; b < this.ranges.length; b++) a[b] = new Ma(ta(this.ranges[b].anchor), ta(this.ranges[b].head));
          return new La(a, this.primIndex)
      },
      somethingSelected: function() {
          for (var a = 0; a < this.ranges.length; a++)
              if (!this.ranges[a].empty()) return !0;
          return !1
      },
      contains: function(a, b) {
          b || (b = a);
          for (var c = 0; c < this.ranges.length; c++) {
              var d = this.ranges[c];
              if (sa(b, d.from()) >= 0 && sa(a, d.to()) <= 0) return c
          }
          return -1
      }
  }, Ma.prototype = {
      from: function() {
          return va(this.anchor, this.head)
      },
      to: function() {
          return ua(this.anchor, this.head)
      },
      empty: function() {
          return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch
      }
  };
  var Ub, zc, Ac, Db = {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
      },
      Xb = null,
      Yb = 0,
      Gc = 0,
      Nc = 0,
      Oc = null;
  f ? Oc = -.53 : c ? Oc = 15 : j ? Oc = -.7 : l && (Oc = -1 / 3);
  var Pc = function(a) {
      var b = a.wheelDeltaX,
          c = a.wheelDeltaY;
      return null == b && a.detail && a.axis == a.HORIZONTAL_AXIS && (b = a.detail), null == c && a.detail && a.axis == a.VERTICAL_AXIS ? c = a.detail : null == c && (c = a.wheelDelta), {
          x: b,
          y: c
      }
  };
  y.wheelEventPixels = function(a) {
      var b = Pc(a);
      return b.x *= Oc, b.y *= Oc, b
  };
  var Tc = new cg,
      Xc = null,
      fd = y.changeEnd = function(a) {
          return a.text ? ra(a.from.line + a.text.length - 1, hg(a.text).length + (1 == a.text.length ? a.from.ch : 0)) : a.to
      };
  y.prototype = {
      constructor: y,
      focus: function() {
          window.focus(), this.display.input.focus()
      },
      setOption: function(a, b) {
          var c = this.options,
              d = c[a];
          (c[a] != b || "mode" == a) && (c[a] = b, Fd.hasOwnProperty(a) && hc(this, Fd[a])(this, b, d))
      },
      getOption: function(a) {
          return this.options[a]
      },
      getDoc: function() {
          return this.doc
      },
      addKeyMap: function(a, b) {
          this.state.keyMaps[b ? "push" : "unshift"](Vd(a))
      },
      removeKeyMap: function(a) {
          for (var b = this.state.keyMaps, c = 0; c < b.length; ++c)
              if (b[c] == a || b[c].name == a) return b.splice(c, 1), !0
      },
      addOverlay: ic(function(a, b) {
          var c = a.token ? a : y.getMode(this.options, a);
          if (c.startState) throw new Error("Overlays may not be stateful.");
          this.state.overlays.push({
              mode: c,
              modeSpec: a,
              opaque: b && b.opaque
          }), this.state.modeGen++, mc(this)
      }),
      removeOverlay: ic(function(a) {
          for (var b = this.state.overlays, c = 0; c < b.length; ++c) {
              var d = b[c].modeSpec;
              if (d == a || "string" == typeof a && d.name == a) return b.splice(c, 1), this.state.modeGen++, void mc(this)
          }
      }),
      indentLine: ic(function(a, b, c) {
          "string" != typeof b && "number" != typeof b && (b = null == b ? this.options.smartIndent ? "smart" : "prev" : b ? "add" : "subtract"), Sa(this.doc, a) && zd(this, a, b, c)
      }),
      indentSelection: ic(function(a) {
          for (var b = this.doc.sel.ranges, c = -1, d = 0; d < b.length; d++) {
              var e = b[d];
              if (e.empty()) e.head.line > c && (zd(this, e.head.line, a, !0), c = e.head.line, d == this.doc.sel.primIndex && xd(this));
              else {
                  var f = e.from(),
                      g = e.to(),
                      h = Math.max(c, f.line);
                  c = Math.min(this.lastLine(), g.line - (g.ch ? 0 : 1)) + 1;
                  for (var i = h; c > i; ++i) zd(this, i, a);
                  var j = this.doc.sel.ranges;
                  0 == f.ch && b.length == j.length && j[d].from().ch > 0 && Xa(this.doc, d, new Ma(f, j[d].to()), _f)
              }
          }
      }),
      getTokenAt: function(a, b) {
          return Me(this, a, b)
      },
      getLineTokens: function(a, b) {
          return Me(this, ra(a), b, !0)
      },
      getTokenTypeAt: function(a) {
          a = Qa(this.doc, a);
          var f, b = Pe(this, kf(this.doc, a.line)),
              c = 0,
              d = (b.length - 1) / 2,
              e = a.ch;
          if (0 == e) f = b[2];
          else
              for (;;) {
                  var g = c + d >> 1;
                  if ((g ? b[2 * g - 1] : 0) >= e) d = g;
                  else {
                      if (!(b[2 * g + 1] < e)) {
                          f = b[2 * g + 2];
                          break
                      }
                      c = g + 1
                  }
              }
          var h = f ? f.indexOf("cm-overlay ") : -1;
          return 0 > h ? f : 0 == h ? null : f.slice(0, h - 1)
      },
      getModeAt: function(a) {
          var b = this.doc.mode;
          return b.innerMode ? y.innerMode(b, this.getTokenAt(a).state).mode : b
      },
      getHelper: function(a, b) {
          return this.getHelpers(a, b)[0]
      },
      getHelpers: function(a, b) {
          var c = [];
          if (!Md.hasOwnProperty(b)) return c;
          var d = Md[b],
              e = this.getModeAt(a);
          if ("string" == typeof e[b]) d[e[b]] && c.push(d[e[b]]);
          else if (e[b])
              for (var f = 0; f < e[b].length; f++) {
                  var g = d[e[b][f]];
                  g && c.push(g)
              } else e.helperType && d[e.helperType] ? c.push(d[e.helperType]) : d[e.name] && c.push(d[e.name]);
          for (var f = 0; f < d._global.length; f++) {
              var h = d._global[f];
              h.pred(e, this) && -1 == jg(c, h.val) && c.push(h.val)
          }
          return c
      },
      getStateAfter: function(a, b) {
          var c = this.doc;
          return a = Pa(c, null == a ? c.first + c.size - 1 : a), pb(this, a + 1, b)
      },
      cursorCoords: function(a, b) {
          var c, d = this.doc.sel.primary();
          return c = null == a ? d.head : "object" == typeof a ? Qa(this.doc, a) : a ? d.from() : d.to(), Pb(this, c, b || "page")
      },
      charCoords: function(a, b) {
          return Ob(this, Qa(this.doc, a), b || "page")
      },
      coordsChar: function(a, b) {
          return a = Nb(this, a, b || "page"), Sb(this, a.left, a.top)
      },
      lineAtHeight: function(a, b) {
          return a = Nb(this, {
              top: a,
              left: 0
          }, b || "page").top, pf(this.doc, a + this.display.viewOffset)
      },
      heightAtLine: function(a, b) {
          var d, c = !1;
          if ("number" == typeof a) {
              var e = this.doc.first + this.doc.size - 1;
              a < this.doc.first ? a = this.doc.first : a > e && (a = e, c = !0), d = kf(this.doc, a)
          } else d = a;
          return Mb(this, d, {
              top: 0,
              left: 0
          }, b || "page").top + (c ? this.doc.height - qf(d) : 0)
      },
      defaultTextHeight: function() {
          return Vb(this.display)
      },
      defaultCharWidth: function() {
          return Wb(this.display)
      },
      setGutterMarker: ic(function(a, b, c) {
          return Ad(this.doc, a, "gutter", function(a) {
              var d = a.gutterMarkers || (a.gutterMarkers = {});
              return d[b] = c, !c && sg(d) && (a.gutterMarkers = null), !0
          })
      }),
      clearGutter: ic(function(a) {
          var b = this,
              c = b.doc,
              d = c.first;
          c.iter(function(c) {
              c.gutterMarkers && c.gutterMarkers[a] && (c.gutterMarkers[a] = null, nc(b, d, "gutter"), sg(c.gutterMarkers) && (c.gutterMarkers = null)), ++d
          })
      }),
      lineInfo: function(a) {
          if ("number" == typeof a) {
              if (!Sa(this.doc, a)) return null;
              var b = a;
              if (a = kf(this.doc, a), !a) return null
          } else {
              var b = of(a);
              if (null == b) return null
          }
          return {
              line: b,
              handle: a,
              text: a.text,
              gutterMarkers: a.gutterMarkers,
              textClass: a.textClass,
              bgClass: a.bgClass,
              wrapClass: a.wrapClass,
              widgets: a.widgets
          }
      },
      getViewport: function() {
          return {
              from: this.display.viewFrom,
              to: this.display.viewTo
          }
      },
      addWidget: function(a, b, c, d, e) {
          var f = this.display;
          a = Pb(this, Qa(this.doc, a));
          var g = a.bottom,
              h = a.left;
          if (b.style.position = "absolute", b.setAttribute("cm-ignore-events", "true"), this.display.input.setUneditable(b), f.sizer.appendChild(b), "over" == d) g = a.top;
          else if ("above" == d || "near" == d) {
              var i = Math.max(f.wrapper.clientHeight, this.doc.height),
                  j = Math.max(f.sizer.clientWidth, f.lineSpace.clientWidth);
              ("above" == d || a.bottom + b.offsetHeight > i) && a.top > b.offsetHeight ? g = a.top - b.offsetHeight : a.bottom + b.offsetHeight <= i && (g = a.bottom), h + b.offsetWidth > j && (h = j - b.offsetWidth)
          }
          b.style.top = g + "px", b.style.left = b.style.right = "", "right" == e ? (h = f.sizer.clientWidth - b.offsetWidth, b.style.right = "0px") : ("left" == e ? h = 0 : "middle" == e && (h = (f.sizer.clientWidth - b.offsetWidth) / 2), b.style.left = h + "px"), c && ud(this, h, g, h + b.offsetWidth, g + b.offsetHeight)
      },
      triggerOnKeyDown: ic(Yc),
      triggerOnKeyPress: ic(_c),
      triggerOnKeyUp: $c,
      execCommand: function(a) {
          return Pd.hasOwnProperty(a) ? Pd[a].call(null, this) : void 0
      },
      triggerElectric: ic(function(a) {
          Aa(this, a)
      }),
      findPosH: function(a, b, c, d) {
          var e = 1;
          0 > b && (e = -1, b = -b);
          for (var f = 0, g = Qa(this.doc, a); b > f && (g = Cd(this.doc, g, e, c, d), !g.hitSide); ++f);
          return g
      },
      moveH: ic(function(a, b) {
          var c = this;
          c.extendSelectionsBy(function(d) {
              return c.display.shift || c.doc.extend || d.empty() ? Cd(c.doc, d.head, a, b, c.options.rtlMoveVisually) : 0 > a ? d.from() : d.to()
          }, bg)
      }),
      deleteH: ic(function(a, b) {
          var c = this.doc.sel,
              d = this.doc;
          c.somethingSelected() ? d.replaceSelection("", null, "+delete") : Bd(this, function(c) {
              var e = Cd(d, c.head, a, b, !1);
              return 0 > a ? {
                  from: e,
                  to: c.head
              } : {
                  from: c.head,
                  to: e
              }
          })
      }),
      findPosV: function(a, b, c, d) {
          var e = 1,
              f = d;
          0 > b && (e = -1, b = -b);
          for (var g = 0, h = Qa(this.doc, a); b > g; ++g) {
              var i = Pb(this, h, "div");
              if (null == f ? f = i.left : i.left = f, h = Dd(this, i, e, c), h.hitSide) break
          }
          return h
      },
      moveV: ic(function(a, b) {
          var c = this,
              d = this.doc,
              e = [],
              f = !c.display.shift && !d.extend && d.sel.somethingSelected();
          if (d.extendSelectionsBy(function(g) {
                  if (f) return 0 > a ? g.from() : g.to();
                  var h = Pb(c, g.head, "div");
                  null != g.goalColumn && (h.left = g.goalColumn), e.push(h.left);
                  var i = Dd(c, h, a, b);
                  return "page" == b && g == d.sel.primary() && wd(c, null, Ob(c, i, "div").top - h.top), i
              }, bg), e.length)
              for (var g = 0; g < d.sel.ranges.length; g++) d.sel.ranges[g].goalColumn = e[g]
      }),
      findWordAt: function(a) {
          var b = this.doc,
              c = kf(b, a.line).text,
              d = a.ch,
              e = a.ch;
          if (c) {
              var f = this.getHelper(a, "wordChars");
              (a.xRel < 0 || e == c.length) && d ? --d : ++e;
              for (var g = c.charAt(d), h = rg(g, f) ? function(a) {
                      return rg(a, f)
                  } : /\s/.test(g) ? function(a) {
                      return /\s/.test(a)
                  } : function(a) {
                      return !/\s/.test(a) && !rg(a)
                  }; d > 0 && h(c.charAt(d - 1));) --d;
              for (; e < c.length && h(c.charAt(e));) ++e
          }
          return new Ma(ra(a.line, d), ra(a.line, e))
      },
      toggleOverwrite: function(a) {
          (null == a || a != this.state.overwrite) && ((this.state.overwrite = !this.state.overwrite) ? Dg(this.display.cursorDiv, "CodeMirror-overwrite") : Cg(this.display.cursorDiv, "CodeMirror-overwrite"), Rf(this, "overwriteToggle", this, this.state.overwrite))
      },
      hasFocus: function() {
          return this.display.input.getField() == Ag()
      },
      isReadOnly: function() {
          return !(!this.options.readOnly && !this.doc.cantEdit)
      },
      scrollTo: ic(function(a, b) {
          (null != a || null != b) && yd(this), null != a && (this.curOp.scrollLeft = a), null != b && (this.curOp.scrollTop = b)
      }),
      getScrollInfo: function() {
          var a = this.display.scroller;
          return {
              left: a.scrollLeft,
              top: a.scrollTop,
              height: a.scrollHeight - tb(this) - this.display.barHeight,
              width: a.scrollWidth - tb(this) - this.display.barWidth,
              clientHeight: vb(this),
              clientWidth: ub(this)
          }
      },
      scrollIntoView: ic(function(a, b) {
          if (null == a ? (a = {
                  from: this.doc.sel.primary().head,
                  to: null
              }, null == b && (b = this.options.cursorScrollMargin)) : "number" == typeof a ? a = {
                  from: ra(a, 0),
                  to: null
              } : null == a.from && (a = {
                  from: a,
                  to: null
              }), a.to || (a.to = a.from), a.margin = b || 0, null != a.from.line) yd(this), this.curOp.scrollToPos = a;
          else {
              var c = vd(this, Math.min(a.from.left, a.to.left), Math.min(a.from.top, a.to.top) - a.margin, Math.max(a.from.right, a.to.right), Math.max(a.from.bottom, a.to.bottom) + a.margin);
              this.scrollTo(c.scrollLeft, c.scrollTop)
          }
      }),
      setSize: ic(function(a, b) {
          function d(a) {
              return "number" == typeof a || /^\d+$/.test(String(a)) ? a + "px" : a
          }
          var c = this;
          null != a && (c.display.wrapper.style.width = d(a)), null != b && (c.display.wrapper.style.height = d(b)), c.options.lineWrapping && Ib(this);
          var e = c.display.viewFrom;
          c.doc.iter(e, c.display.viewTo, function(a) {
              if (a.widgets)
                  for (var b = 0; b < a.widgets.length; b++)
                      if (a.widgets[b].noHScroll) {
                          nc(c, e, "widget");
                          break
                      }++e
          }), c.curOp.forceUpdate = !0, Rf(c, "refresh", this)
      }),
      operation: function(a) {
          return gc(this, a)
      },
      refresh: ic(function() {
          var a = this.display.cachedTextHeight;
          mc(this), this.curOp.forceUpdate = !0, Jb(this), this.scrollTo(this.doc.scrollLeft, this.doc.scrollTop), I(this), (null == a || Math.abs(a - Vb(this.display)) > .5) && E(this), Rf(this, "refresh", this)
      }),
      swapDoc: ic(function(a) {
          var b = this.doc;
          return b.cm = null, jf(this, a), Jb(this), this.display.input.reset(), this.scrollTo(a.scrollLeft, a.scrollTop), this.curOp.forceScroll = !0, Tf(this, "swapDoc", this, b), b
      }),
      getInputField: function() {
          return this.display.input.getField()
      },
      getWrapperElement: function() {
          return this.display.wrapper
      },
      getScrollerElement: function() {
          return this.display.scroller
      },
      getGutterElement: function() {
          return this.display.gutters
      }
  }, Yf(y);
  var Ed = y.defaults = {},
      Fd = y.optionHandlers = {},
      Hd = y.Init = {
          toString: function() {
              return "CodeMirror.Init"
          }
      };
  Gd("value", "", function(a, b) {
      a.setValue(b)
  }, !0), Gd("mode", null, function(a, b) {
      a.doc.modeOption = b, A(a)
  }, !0), Gd("indentUnit", 2, A, !0), Gd("indentWithTabs", !1), Gd("smartIndent", !0), Gd("tabSize", 4, function(a) {
      B(a), Jb(a), mc(a)
  }, !0), Gd("lineSeparator", null, function(a, b) {
      if (a.doc.lineSep = b, b) {
          var c = [],
              d = a.doc.first;
          a.doc.iter(function(a) {
              for (var e = 0;;) {
                  var f = a.text.indexOf(b, e);
                  if (-1 == f) break;
                  e = f + b.length, c.push(ra(d, f))
              }
              d++
          });
          for (var e = c.length - 1; e >= 0; e--) rd(a.doc, b, c[e], ra(c[e].line, c[e].ch + b.length))
      }
  }), Gd("specialChars", /[\u0000-\u001f\u007f\u00ad\u200b-\u200f\u2028\u2029\ufeff]/g, function(a, b, c) {
      a.state.specialChars = new RegExp(b.source + (b.test("	") ? "" : "|	"), "g"), c != y.Init && a.refresh()
  }), Gd("specialCharPlaceholder", Ve, function(a) {
      a.refresh()
  }, !0), Gd("electricChars", !0), Gd("inputStyle", p ? "contenteditable" : "textarea", function() {
      throw new Error("inputStyle can not (yet) be changed in a running editor")
  }, !0), Gd("rtlMoveVisually", !s), Gd("wholeLineUpdateBefore", !0), Gd("theme", "default", function(a) {
      F(a), G(a)
  }, !0), Gd("keyMap", "default", function(a, b, c) {
      var d = Vd(b),
          e = c != y.Init && Vd(c);
      e && e.detach && e.detach(a, d), d.attach && d.attach(a, e || null)
  }), Gd("extraKeys", null), Gd("lineWrapping", !1, C, !0), Gd("gutters", [], function(a) {
      L(a.options), G(a)
  }, !0), Gd("fixedGutter", !0, function(a, b) {
      a.display.gutters.style.left = b ? W(a.display) + "px" : "0", a.refresh()
  }, !0), Gd("coverGutterNextToScrollbar", !1, function(a) {
      Q(a)
  }, !0), Gd("scrollbarStyle", "native", function(a) {
      P(a), Q(a), a.display.scrollbars.setScrollTop(a.doc.scrollTop), a.display.scrollbars.setScrollLeft(a.doc.scrollLeft)
  }, !0), Gd("lineNumbers", !1, function(a) {
      L(a.options), G(a)
  }, !0), Gd("firstLineNumber", 1, G, !0), Gd("lineNumberFormatter", function(a) {
      return a
  }, G, !0), Gd("showCursorWhenSelecting", !1, hb, !0), Gd("resetSelectionOnContextMenu", !0), Gd("lineWiseCopyCut", !0), Gd("readOnly", !1, function(a, b) {
      "nocursor" == b ? (cd(a), a.display.input.blur(), a.display.disabled = !0) : a.display.disabled = !1, a.display.input.readOnlyChanged(b)
  }), Gd("disableInput", !1, function(a, b) {
      b || a.display.input.reset()
  }, !0), Gd("dragDrop", !0, uc), Gd("allowDropFileTypes", null), Gd("cursorBlinkRate", 530), Gd("cursorScrollMargin", 0), Gd("cursorHeight", 1, hb, !0), Gd("singleCursorHeightPerLine", !0, hb, !0), Gd("workTime", 100), Gd("workDelay", 100), Gd("flattenSpans", !0, B, !0), Gd("addModeClass", !1, B, !0), Gd("pollInterval", 100), Gd("undoDepth", 200, function(a, b) {
      a.doc.history.undoDepth = b
  }), Gd("historyEventDelay", 1250), Gd("viewportMargin", 10, function(a) {
      a.refresh()
  }, !0), Gd("maxHighlightLength", 1e4, B, !0), Gd("moveInputWithCursor", !0, function(a, b) {
      b || a.display.input.resetPosition()
  }), Gd("tabindex", null, function(a, b) {
      a.display.input.getField().tabIndex = b || ""
  }), Gd("autofocus", null);
  var Id = y.modes = {},
      Jd = y.mimeModes = {};
  y.defineMode = function(a, b) {
      y.defaults.mode || "null" == a || (y.defaults.mode = a), arguments.length > 2 && (b.dependencies = Array.prototype.slice.call(arguments, 2)), Id[a] = b
  }, y.defineMIME = function(a, b) {
      Jd[a] = b
  }, y.resolveMode = function(a) {
      if ("string" == typeof a && Jd.hasOwnProperty(a)) a = Jd[a];
      else if (a && "string" == typeof a.name && Jd.hasOwnProperty(a.name)) {
          var b = Jd[a.name];
          "string" == typeof b && (b = {
              name: b
          }), a = mg(b, a), a.name = b.name
      } else if ("string" == typeof a && /^[\w\-]+\/[\w\-]+\+xml$/.test(a)) return y.resolveMode("application/xml");
      return "string" == typeof a ? {
          name: a
      } : a || {
          name: "null"
      }
  }, y.getMode = function(a, b) {
      var b = y.resolveMode(b),
          c = Id[b.name];
      if (!c) return y.getMode(a, "text/plain");
      var d = c(a, b);
      if (Kd.hasOwnProperty(b.name)) {
          var e = Kd[b.name];
          for (var f in e) e.hasOwnProperty(f) && (d.hasOwnProperty(f) && (d["_" + f] = d[f]), d[f] = e[f])
      }
      if (d.name = b.name, b.helperType && (d.helperType = b.helperType), b.modeProps)
          for (var f in b.modeProps) d[f] = b.modeProps[f];
      return d
  }, y.defineMode("null", function() {
      return {
          token: function(a) {
              a.skipToEnd()
          }
      }
  }), y.defineMIME("text/plain", "null");
  var Kd = y.modeExtensions = {};
  y.extendMode = function(a, b) {
      var c = Kd.hasOwnProperty(a) ? Kd[a] : Kd[a] = {};
      ng(b, c)
  }, y.defineExtension = function(a, b) {
      y.prototype[a] = b
  }, y.defineDocExtension = function(a, b) {
      ef.prototype[a] = b
  }, y.defineOption = Gd;
  var Ld = [];
  y.defineInitHook = function(a) {
      Ld.push(a)
  };
  var Md = y.helpers = {};
  y.registerHelper = function(a, b, c) {
      Md.hasOwnProperty(a) || (Md[a] = y[a] = {
          _global: []
      }), Md[a][b] = c
  }, y.registerGlobalHelper = function(a, b, c, d) {
      y.registerHelper(a, b, d), Md[a]._global.push({
          pred: c,
          val: d
      })
  };
  var Nd = y.copyState = function(a, b) {
          if (b === !0) return b;
          if (a.copyState) return a.copyState(b);
          var c = {};
          for (var d in b) {
              var e = b[d];
              e instanceof Array && (e = e.concat([])), c[d] = e
          }
          return c
      },
      Od = y.startState = function(a, b, c) {
          return a.startState ? a.startState(b, c) : !0
      };
  y.innerMode = function(a, b) {
      for (; a.innerMode;) {
          var c = a.innerMode(b);
          if (!c || c.mode == a) break;
          b = c.state, a = c.mode
      }
      return c || {
          mode: a,
          state: b
      }
  };
  var Pd = y.commands = {
          selectAll: function(a) {
              a.setSelection(ra(a.firstLine(), 0), ra(a.lastLine()), _f)
          },
          singleSelection: function(a) {
              a.setSelection(a.getCursor("anchor"), a.getCursor("head"), _f)
          },
          killLine: function(a) {
              Bd(a, function(b) {
                  if (b.empty()) {
                      var c = kf(a.doc, b.head.line).text.length;
                      return b.head.ch == c && b.head.line < a.lastLine() ? {
                          from: b.head,
                          to: ra(b.head.line + 1, 0)
                      } : {
                          from: b.head,
                          to: ra(b.head.line, c)
                      }
                  }
                  return {
                      from: b.from(),
                      to: b.to()
                  }
              })
          },
          deleteLine: function(a) {
              Bd(a, function(b) {
                  return {
                      from: ra(b.from().line, 0),
                      to: Qa(a.doc, ra(b.to().line + 1, 0))
                  }
              })
          },
          delLineLeft: function(a) {
              Bd(a, function(a) {
                  return {
                      from: ra(a.from().line, 0),
                      to: a.from()
                  }
              })
          },
          delWrappedLineLeft: function(a) {
              Bd(a, function(b) {
                  var c = a.charCoords(b.head, "div").top + 5,
                      d = a.coordsChar({
                          left: 0,
                          top: c
                      }, "div");
                  return {
                      from: d,
                      to: b.from()
                  }
              })
          },
          delWrappedLineRight: function(a) {
              Bd(a, function(b) {
                  var c = a.charCoords(b.head, "div").top + 5,
                      d = a.coordsChar({
                          left: a.display.lineDiv.offsetWidth + 100,
                          top: c
                      }, "div");
                  return {
                      from: b.from(),
                      to: d
                  }
              })
          },
          undo: function(a) {
              a.undo()
          },
          redo: function(a) {
              a.redo()
          },
          undoSelection: function(a) {
              a.undoSelection()
          },
          redoSelection: function(a) {
              a.redoSelection()
          },
          goDocStart: function(a) {
              a.extendSelection(ra(a.firstLine(), 0))
          },
          goDocEnd: function(a) {
              a.extendSelection(ra(a.lastLine()))
          },
          goLineStart: function(a) {
              a.extendSelectionsBy(function(b) {
                  return Zg(a, b.head.line)
              }, {
                  origin: "+move",
                  bias: 1
              })
          },
          goLineStartSmart: function(a) {
              a.extendSelectionsBy(function(b) {
                  return _g(a, b.head)
              }, {
                  origin: "+move",
                  bias: 1
              })
          },
          goLineEnd: function(a) {
              a.extendSelectionsBy(function(b) {
                  return $g(a, b.head.line)
              }, {
                  origin: "+move",
                  bias: -1
              })
          },
          goLineRight: function(a) {
              a.extendSelectionsBy(function(b) {
                  var c = a.charCoords(b.head, "div").top + 5;
                  return a.coordsChar({
                      left: a.display.lineDiv.offsetWidth + 100,
                      top: c
                  }, "div")
              }, bg)
          },
          goLineLeft: function(a) {
              a.extendSelectionsBy(function(b) {
                  var c = a.charCoords(b.head, "div").top + 5;
                  return a.coordsChar({
                      left: 0,
                      top: c
                  }, "div")
              }, bg)
          },
          goLineLeftSmart: function(a) {
              a.extendSelectionsBy(function(b) {
                  var c = a.charCoords(b.head, "div").top + 5,
                      d = a.coordsChar({
                          left: 0,
                          top: c
                      }, "div");
                  return d.ch < a.getLine(d.line).search(/\S/) ? _g(a, b.head) : d
              }, bg)
          },
          goLineUp: function(a) {
              a.moveV(-1, "line")
          },
          goLineDown: function(a) {
              a.moveV(1, "line")
          },
          goPageUp: function(a) {
              a.moveV(-1, "page")
          },
          goPageDown: function(a) {
              a.moveV(1, "page")
          },
          goCharLeft: function(a) {
              a.moveH(-1, "char")
          },
          goCharRight: function(a) {
              a.moveH(1, "char")
          },
          goColumnLeft: function(a) {
              a.moveH(-1, "column")
          },
          goColumnRight: function(a) {
              a.moveH(1, "column")
          },
          goWordLeft: function(a) {
              a.moveH(-1, "word")
          },
          goGroupRight: function(a) {
              a.moveH(1, "group")
          },
          goGroupLeft: function(a) {
              a.moveH(-1, "group")
          },
          goWordRight: function(a) {
              a.moveH(1, "word")
          },
          delCharBefore: function(a) {
              a.deleteH(-1, "char")
          },
          delCharAfter: function(a) {
              a.deleteH(1, "char")
          },
          delWordBefore: function(a) {
              a.deleteH(-1, "word")
          },
          delWordAfter: function(a) {
              a.deleteH(1, "word")
          },
          delGroupBefore: function(a) {
              a.deleteH(-1, "group")
          },
          delGroupAfter: function(a) {
              a.deleteH(1, "group")
          },
          indentAuto: function(a) {
              a.indentSelection("smart")
          },
          indentMore: function(a) {
              a.indentSelection("add")
          },
          indentLess: function(a) {
              a.indentSelection("subtract")
          },
          insertTab: function(a) {
              a.replaceSelection("	")
          },
          insertSoftTab: function(a) {
              for (var b = [], c = a.listSelections(), d = a.options.tabSize, e = 0; e < c.length; e++) {
                  var f = c[e].from(),
                      g = dg(a.getLine(f.line), f.ch, d);
                  b.push(gg(d - g % d))
              }
              a.replaceSelections(b)
          },
          defaultTab: function(a) {
              a.somethingSelected() ? a.indentSelection("add") : a.execCommand("insertTab")
          },
          transposeChars: function(a) {
              gc(a, function() {
                  for (var b = a.listSelections(), c = [], d = 0; d < b.length; d++) {
                      var e = b[d].head,
                          f = kf(a.doc, e.line).text;
                      if (f)
                          if (e.ch == f.length && (e = new ra(e.line, e.ch - 1)), e.ch > 0) e = new ra(e.line, e.ch + 1), a.replaceRange(f.charAt(e.ch - 1) + f.charAt(e.ch - 2), ra(e.line, e.ch - 2), e, "+transpose");
                          else if (e.line > a.doc.first) {
                          var g = kf(a.doc, e.line - 1).text;
                          g && a.replaceRange(f.charAt(0) + a.doc.lineSeparator() + g.charAt(g.length - 1), ra(e.line - 1, g.length - 1), ra(e.line, 1), "+transpose")
                      }
                      c.push(new Ma(e, e))
                  }
                  a.setSelections(c)
              })
          },
          newlineAndIndent: function(a) {
              gc(a, function() {
                  for (var b = a.listSelections().length, c = 0; b > c; c++) {
                      var d = a.listSelections()[c];
                      a.replaceRange(a.doc.lineSeparator(), d.anchor, d.head, "+input"), a.indentLine(d.from().line + 1, null, !0)
                  }
                  xd(a)
              })
          },
          openLine: function(a) {
              a.replaceSelection("\n", "start")
          },
          toggleOverwrite: function(a) {
              a.toggleOverwrite()
          }
      },
      Qd = y.keyMap = {};
  Qd.basic = {
      Left: "goCharLeft",
      Right: "goCharRight",
      Up: "goLineUp",
      Down: "goLineDown",
      End: "goLineEnd",
      Home: "goLineStartSmart",
      PageUp: "goPageUp",
      PageDown: "goPageDown",
      Delete: "delCharAfter",
      Backspace: "delCharBefore",
      "Shift-Backspace": "delCharBefore",
      Tab: "defaultTab",
      "Shift-Tab": "indentAuto",
      Enter: "newlineAndIndent",
      Insert: "toggleOverwrite",
      Esc: "singleSelection"
  }, Qd.pcDefault = {
      "Ctrl-A": "selectAll",
      "Ctrl-D": "deleteLine",
      "Ctrl-Z": "undo",
      "Shift-Ctrl-Z": "redo",
      "Ctrl-Y": "redo",
      "Ctrl-Home": "goDocStart",
      "Ctrl-End": "goDocEnd",
      "Ctrl-Up": "goLineUp",
      "Ctrl-Down": "goLineDown",
      "Ctrl-Left": "goGroupLeft",
      "Ctrl-Right": "goGroupRight",
      "Alt-Left": "goLineStart",
      "Alt-Right": "goLineEnd",
      "Ctrl-Backspace": "delGroupBefore",
      "Ctrl-Delete": "delGroupAfter",
      "Ctrl-S": "save",
      "Ctrl-F": "find",
      "Ctrl-G": "findNext",
      "Shift-Ctrl-G": "findPrev",
      "Shift-Ctrl-F": "replace",
      "Shift-Ctrl-R": "replaceAll",
      "Ctrl-[": "indentLess",
      "Ctrl-]": "indentMore",
      "Ctrl-U": "undoSelection",
      "Shift-Ctrl-U": "redoSelection",
      "Alt-U": "redoSelection",
      fallthrough: "basic"
  }, Qd.emacsy = {
      "Ctrl-F": "goCharRight",
      "Ctrl-B": "goCharLeft",
      "Ctrl-P": "goLineUp",
      "Ctrl-N": "goLineDown",
      "Alt-F": "goWordRight",
      "Alt-B": "goWordLeft",
      "Ctrl-A": "goLineStart",
      "Ctrl-E": "goLineEnd",
      "Ctrl-V": "goPageDown",
      "Shift-Ctrl-V": "goPageUp",
      "Ctrl-D": "delCharAfter",
      "Ctrl-H": "delCharBefore",
      "Alt-D": "delWordAfter",
      "Alt-Backspace": "delWordBefore",
      "Ctrl-K": "killLine",
      "Ctrl-T": "transposeChars",
      "Ctrl-O": "openLine"
  }, Qd.macDefault = {
      "Cmd-A": "selectAll",
      "Cmd-D": "deleteLine",
      "Cmd-Z": "undo",
      "Shift-Cmd-Z": "redo",
      "Cmd-Y": "redo",
      "Cmd-Home": "goDocStart",
      "Cmd-Up": "goDocStart",
      "Cmd-End": "goDocEnd",
      "Cmd-Down": "goDocEnd",
      "Alt-Left": "goGroupLeft",
      "Alt-Right": "goGroupRight",
      "Cmd-Left": "goLineLeft",
      "Cmd-Right": "goLineRight",
      "Alt-Backspace": "delGroupBefore",
      "Ctrl-Alt-Backspace": "delGroupAfter",
      "Alt-Delete": "delGroupAfter",
      "Cmd-S": "save",
      "Cmd-F": "find",
      "Cmd-G": "findNext",
      "Shift-Cmd-G": "findPrev",
      "Cmd-Alt-F": "replace",
      "Shift-Cmd-Alt-F": "replaceAll",
      "Cmd-[": "indentLess",
      "Cmd-]": "indentMore",
      "Cmd-Backspace": "delWrappedLineLeft",
      "Cmd-Delete": "delWrappedLineRight",
      "Cmd-U": "undoSelection",
      "Shift-Cmd-U": "redoSelection",
      "Ctrl-Up": "goDocStart",
      "Ctrl-Down": "goDocEnd",
      fallthrough: ["basic", "emacsy"]
  }, Qd["default"] = q ? Qd.macDefault : Qd.pcDefault, y.normalizeKeyMap = function(a) {
      var b = {};
      for (var c in a)
          if (a.hasOwnProperty(c)) {
              var d = a[c];
              if (/^(name|fallthrough|(de|at)tach)$/.test(c)) continue;
              if ("..." == d) {
                  delete a[c];
                  continue
              }
              for (var e = kg(c.split(" "), Rd), f = 0; f < e.length; f++) {
                  var g, h;
                  f == e.length - 1 ? (h = e.join(" "), g = d) : (h = e.slice(0, f + 1).join(" "), g = "...");
                  var i = b[h];
                  if (i) {
                      if (i != g) throw new Error("Inconsistent bindings for " + h)
                  } else b[h] = g
              }
              delete a[c]
          }
      for (var j in b) a[j] = b[j];
      return a
  };
  var Sd = y.lookupKey = function(a, b, c, d) {
          b = Vd(b);
          var e = b.call ? b.call(a, d) : b[a];
          if (e === !1) return "nothing";
          if ("..." === e) return "multi";
          if (null != e && c(e)) return "handled";
          if (b.fallthrough) {
              if ("[object Array]" != Object.prototype.toString.call(b.fallthrough)) return Sd(a, b.fallthrough, c, d);
              for (var f = 0; f < b.fallthrough.length; f++) {
                  var g = Sd(a, b.fallthrough[f], c, d);
                  if (g) return g
              }
          }
      },
      Td = y.isModifierKey = function(a) {
          var b = "string" == typeof a ? a : Tg[a.keyCode];
          return "Ctrl" == b || "Alt" == b || "Shift" == b || "Mod" == b
      },
      Ud = y.keyName = function(a, b) {
          if (k && 34 == a.keyCode && a["char"]) return !1;
          var c = Tg[a.keyCode],
              d = c;
          return null == d || a.altGraphKey ? !1 : (a.altKey && "Alt" != c && (d = "Alt-" + d), (u ? a.metaKey : a.ctrlKey) && "Ctrl" != c && (d = "Ctrl-" + d), (u ? a.ctrlKey : a.metaKey) && "Cmd" != c && (d = "Cmd-" + d), !b && a.shiftKey && "Shift" != c && (d = "Shift-" + d), d)
      };
  y.fromTextArea = function(a, b) {
      function d() {
          a.value = i.getValue()
      }
      if (b = b ? ng(b) : {}, b.value = a.value, !b.tabindex && a.tabIndex && (b.tabindex = a.tabIndex), !b.placeholder && a.placeholder && (b.placeholder = a.placeholder), null == b.autofocus) {
          var c = Ag();
          b.autofocus = c == a || null != a.getAttribute("autofocus") && c == document.body
      }
      if (a.form && (Nf(a.form, "submit", d), !b.leaveSubmitMethodAlone)) {
          var e = a.form,
              f = e.submit;
          try {
              var g = e.submit = function() {
                  d(), e.submit = f, e.submit(), e.submit = g
              }
          } catch (h) {}
      }
      b.finishInit = function(b) {
          b.save = d, b.getTextArea = function() {
              return a
          }, b.toTextArea = function() {
              b.toTextArea = isNaN, d(), a.parentNode.removeChild(b.getWrapperElement()), a.style.display = "", a.form && (Qf(a.form, "submit", d), "function" == typeof a.form.submit && (a.form.submit = f))
          }
      }, a.style.display = "none";
      var i = y(function(b) {
          a.parentNode.insertBefore(b, a.nextSibling)
      }, b);
      return i
  };
  var Wd = y.StringStream = function(a, b) {
      this.pos = this.start = 0, this.string = a, this.tabSize = b || 8, this.lastColumnPos = this.lastColumnValue = 0, this.lineStart = 0
  };
  Wd.prototype = {
      eol: function() {
          return this.pos >= this.string.length
      },
      sol: function() {
          return this.pos == this.lineStart
      },
      peek: function() {
          return this.string.charAt(this.pos) || void 0
      },
      next: function() {
          return this.pos < this.string.length ? this.string.charAt(this.pos++) : void 0
      },
      eat: function(a) {
          var b = this.string.charAt(this.pos);
          if ("string" == typeof a) var c = b == a;
          else var c = b && (a.test ? a.test(b) : a(b));
          return c ? (++this.pos, b) : void 0
      },
      eatWhile: function(a) {
          for (var b = this.pos; this.eat(a););
          return this.pos > b
      },
      eatSpace: function() {
          for (var a = this.pos;
              /[\s\u00a0]/.test(this.string.charAt(this.pos));) ++this.pos;
          return this.pos > a
      },
      skipToEnd: function() {
          this.pos = this.string.length
      },
      skipTo: function(a) {
          var b = this.string.indexOf(a, this.pos);
          return b > -1 ? (this.pos = b, !0) : void 0
      },
      backUp: function(a) {
          this.pos -= a
      },
      column: function() {
          return this.lastColumnPos < this.start && (this.lastColumnValue = dg(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue), this.lastColumnPos = this.start), this.lastColumnValue - (this.lineStart ? dg(this.string, this.lineStart, this.tabSize) : 0)
      },
      indentation: function() {
          return dg(this.string, null, this.tabSize) - (this.lineStart ? dg(this.string, this.lineStart, this.tabSize) : 0)
      },
      match: function(a, b, c) {
          if ("string" != typeof a) {
              var f = this.string.slice(this.pos).match(a);
              return f && f.index > 0 ? null : (f && b !== !1 && (this.pos += f[0].length), f)
          }
          var d = function(a) {
                  return c ? a.toLowerCase() : a
              },
              e = this.string.substr(this.pos, a.length);
          return d(e) == d(a) ? (b !== !1 && (this.pos += a.length), !0) : void 0
      },
      current: function() {
          return this.string.slice(this.start, this.pos)
      },
      hideFirstChars: function(a, b) {
          this.lineStart += a;
          try {
              return b()
          } finally {
              this.lineStart -= a
          }
      }
  };
  var Xd = 0,
      Yd = y.TextMarker = function(a, b) {
          this.lines = [], this.type = b, this.doc = a, this.id = ++Xd
      };
  Yf(Yd), Yd.prototype.clear = function() {
      if (!this.explicitlyCleared) {
          var a = this.doc.cm,
              b = a && !a.curOp;
          if (b && Zb(a), Xf(this, "clear")) {
              var c = this.find();
              c && Tf(this, "clear", c.from, c.to)
          }
          for (var d = null, e = null, f = 0; f < this.lines.length; ++f) {
              var g = this.lines[f],
                  h = ee(g.markedSpans, this);
              a && !this.collapsed ? nc(a, of(g), "text") : a && (null != h.to && (e = of(g)), null != h.from && (d = of(g))), g.markedSpans = fe(g.markedSpans, h), null == h.from && this.collapsed && !Ae(this.doc, g) && a && nf(g, Vb(a.display))
          }
          if (a && this.collapsed && !a.options.lineWrapping)
              for (var f = 0; f < this.lines.length; ++f) {
                  var i = we(this.lines[f]),
                      j = J(i);
                  j > a.display.maxLineLength && (a.display.maxLine = i, a.display.maxLineLength = j, a.display.maxLineChanged = !0)
              }
          null != d && a && this.collapsed && mc(a, d, e + 1), this.lines.length = 0, this.explicitlyCleared = !0, this.atomic && this.doc.cantEdit && (this.doc.cantEdit = !1, a && cb(a.doc)), a && Tf(a, "markerCleared", a, this), b && _b(a), this.parent && this.parent.clear()
      }
  }, Yd.prototype.find = function(a, b) {
      null == a && "bookmark" == this.type && (a = 1);
      for (var c, d, e = 0; e < this.lines.length; ++e) {
          var f = this.lines[e],
              g = ee(f.markedSpans, this);
          if (null != g.from && (c = ra(b ? f : of(f), g.from), -1 == a)) return c;
          if (null != g.to && (d = ra(b ? f : of(f), g.to), 1 == a)) return d
      }
      return c && {
          from: c,
          to: d
      }
  }, Yd.prototype.changed = function() {
      var a = this.find(-1, !0),
          b = this,
          c = this.doc.cm;
      a && c && gc(c, function() {
          var d = a.line,
              e = of(a.line),
              f = Ab(c, e);
          if (f && (Hb(f), c.curOp.selectionChanged = c.curOp.forceUpdate = !0), c.curOp.updateMaxLine = !0, !Ae(b.doc, d) && null != b.height) {
              var g = b.height;
              b.height = null;
              var h = Ee(b) - g;
              h && nf(d, d.height + h)
          }
      })
  }, Yd.prototype.attachLine = function(a) {
      if (!this.lines.length && this.doc.cm) {
          var b = this.doc.cm.curOp;
          b.maybeHiddenMarkers && -1 != jg(b.maybeHiddenMarkers, this) || (b.maybeUnhiddenMarkers || (b.maybeUnhiddenMarkers = [])).push(this)
      }
      this.lines.push(a)
  }, Yd.prototype.detachLine = function(a) {
      if (this.lines.splice(jg(this.lines, a), 1), !this.lines.length && this.doc.cm) {
          var b = this.doc.cm.curOp;
          (b.maybeHiddenMarkers || (b.maybeHiddenMarkers = [])).push(this)
      }
  };
  var Xd = 0,
      $d = y.SharedTextMarker = function(a, b) {
          this.markers = a, this.primary = b;
          for (var c = 0; c < a.length; ++c) a[c].parent = this
      };
  Yf($d), $d.prototype.clear = function() {
      if (!this.explicitlyCleared) {
          this.explicitlyCleared = !0;
          for (var a = 0; a < this.markers.length; ++a) this.markers[a].clear();
          Tf(this, "clear")
      }
  }, $d.prototype.find = function(a, b) {
      return this.primary.find(a, b)
  };
  var Ce = y.LineWidget = function(a, b, c) {
      if (c)
          for (var d in c) c.hasOwnProperty(d) && (this[d] = c[d]);
      this.doc = a, this.node = b
  };
  Yf(Ce), Ce.prototype.clear = function() {
      var a = this.doc.cm,
          b = this.line.widgets,
          c = this.line,
          d = of(c);
      if (null != d && b) {
          for (var e = 0; e < b.length; ++e) b[e] == this && b.splice(e--, 1);
          b.length || (c.widgets = null);
          var f = Ee(this);
          nf(c, Math.max(0, c.height - f)), a && gc(a, function() {
              De(a, c, -f), nc(a, d, "widget")
          })
      }
  }, Ce.prototype.changed = function() {
      var a = this.height,
          b = this.doc.cm,
          c = this.line;
      this.height = null;
      var d = Ee(this) - a;
      d && (nf(c, c.height + d), b && gc(b, function() {
          b.curOp.forceUpdate = !0, De(b, c, d)
      }))
  };
  var Ge = y.Line = function(a, b, c) {
      this.text = a, oe(this, b), this.height = c ? c(this) : 1
  };
  Yf(Ge), Ge.prototype.lineNo = function() {
      return of(this)
  };
  var Re = {},
      Se = {};
  bf.prototype = {
      chunkSize: function() {
          return this.lines.length
      },
      removeInner: function(a, b) {
          for (var c = a, d = a + b; d > c; ++c) {
              var e = this.lines[c];
              this.height -= e.height, Ie(e), Tf(e, "delete")
          }
          this.lines.splice(a, b)
      },
      collapse: function(a) {
          a.push.apply(a, this.lines)
      },
      insertInner: function(a, b, c) {
          this.height += c, this.lines = this.lines.slice(0, a).concat(b).concat(this.lines.slice(a));
          for (var d = 0; d < b.length; ++d) b[d].parent = this
      },
      iterN: function(a, b, c) {
          for (var d = a + b; d > a; ++a)
              if (c(this.lines[a])) return !0
      }
  }, cf.prototype = {
      chunkSize: function() {
          return this.size
      },
      removeInner: function(a, b) {
          this.size -= b;
          for (var c = 0; c < this.children.length; ++c) {
              var d = this.children[c],
                  e = d.chunkSize();
              if (e > a) {
                  var f = Math.min(b, e - a),
                      g = d.height;
                  if (d.removeInner(a, f), this.height -= g - d.height, e == f && (this.children.splice(c--, 1), d.parent = null), 0 == (b -= f)) break;
                  a = 0
              } else a -= e
          }
          if (this.size - b < 25 && (this.children.length > 1 || !(this.children[0] instanceof bf))) {
              var h = [];
              this.collapse(h), this.children = [new bf(h)], this.children[0].parent = this
          }
      },
      collapse: function(a) {
          for (var b = 0; b < this.children.length; ++b) this.children[b].collapse(a)
      },
      insertInner: function(a, b, c) {
          this.size += b.length, this.height += c;
          for (var d = 0; d < this.children.length; ++d) {
              var e = this.children[d],
                  f = e.chunkSize();
              if (f >= a) {
                  if (e.insertInner(a, b, c), e.lines && e.lines.length > 50) {
                      for (var g = e.lines.length % 25 + 25, h = g; h < e.lines.length;) {
                          var i = new bf(e.lines.slice(h, h += 25));
                          e.height -= i.height, this.children.splice(++d, 0, i), i.parent = this
                      }
                      e.lines = e.lines.slice(0, g), this.maybeSpill()
                  }
                  break
              }
              a -= f
          }
      },
      maybeSpill: function() {
          if (!(this.children.length <= 10)) {
              var a = this;
              do {
                  var b = a.children.splice(a.children.length - 5, 5),
                      c = new cf(b);
                  if (a.parent) {
                      a.size -= c.size, a.height -= c.height;
                      var e = jg(a.parent.children, a);
                      a.parent.children.splice(e + 1, 0, c)
                  } else {
                      var d = new cf(a.children);
                      d.parent = a, a.children = [d, c], a = d
                  }
                  c.parent = a.parent
              } while (a.children.length > 10);
              a.parent.maybeSpill()
          }
      },
      iterN: function(a, b, c) {
          for (var d = 0; d < this.children.length; ++d) {
              var e = this.children[d],
                  f = e.chunkSize();
              if (f > a) {
                  var g = Math.min(b, f - a);
                  if (e.iterN(a, g, c)) return !0;
                  if (0 == (b -= g)) break;
                  a = 0
              } else a -= f
          }
      }
  };
  var df = 0,
      ef = y.Doc = function(a, b, c, d) {
          if (!(this instanceof ef)) return new ef(a, b, c, d);
          null == c && (c = 0), cf.call(this, [new bf([new Ge("", null)])]), this.first = c, this.scrollTop = this.scrollLeft = 0, this.cantEdit = !1, this.cleanGeneration = 1, this.frontier = c;
          var e = ra(c, 0);
          this.sel = Oa(e), this.history = new sf(null), this.id = ++df, this.modeOption = b, this.lineSep = d, this.extend = !1, "string" == typeof a && (a = this.splitLines(a)), af(this, {
              from: e,
              to: e,
              text: a
          }), _a(this, Oa(e), _f)
      };
  ef.prototype = mg(cf.prototype, {
      constructor: ef,
      iter: function(a, b, c) {
          c ? this.iterN(a - this.first, b - a, c) : this.iterN(this.first, this.first + this.size, a)
      },
      insert: function(a, b) {
          for (var c = 0, d = 0; d < b.length; ++d) c += b[d].height;
          this.insertInner(a - this.first, b, c)
      },
      remove: function(a, b) {
          this.removeInner(a - this.first, b)
      },
      getValue: function(a) {
          var b = mf(this, this.first, this.first + this.size);
          return a === !1 ? b : b.join(a || this.lineSeparator())
      },
      setValue: jc(function(a) {
          var b = ra(this.first, 0),
              c = this.first + this.size - 1;
          ld(this, {
              from: b,
              to: ra(c, kf(this, c).text.length),
              text: this.splitLines(a),
              origin: "setValue",
              full: !0
          }, !0), _a(this, Oa(b))
      }),
      replaceRange: function(a, b, c, d) {
          b = Qa(this, b), c = c ? Qa(this, c) : b, rd(this, a, b, c, d)
      },
      getRange: function(a, b, c) {
          var d = lf(this, Qa(this, a), Qa(this, b));
          return c === !1 ? d : d.join(c || this.lineSeparator())
      },
      getLine: function(a) {
          var b = this.getLineHandle(a);
          return b && b.text
      },
      getLineHandle: function(a) {
          return Sa(this, a) ? kf(this, a) : void 0
      },
      getLineNumber: function(a) {
          return of(a)
      },
      getLineHandleVisualStart: function(a) {
          return "number" == typeof a && (a = kf(this, a)), we(a)
      },
      lineCount: function() {
          return this.size
      },
      firstLine: function() {
          return this.first
      },
      lastLine: function() {
          return this.first + this.size - 1
      },
      clipPos: function(a) {
          return Qa(this, a)
      },
      getCursor: function(a) {
          var c, b = this.sel.primary();
          return c = null == a || "head" == a ? b.head : "anchor" == a ? b.anchor : "end" == a || "to" == a || a === !1 ? b.to() : b.from()
      },
      listSelections: function() {
          return this.sel.ranges
      },
      somethingSelected: function() {
          return this.sel.somethingSelected()
      },
      setCursor: jc(function(a, b, c) {
          Ya(this, Qa(this, "number" == typeof a ? ra(a, b || 0) : a), null, c)
      }),
      setSelection: jc(function(a, b, c) {
          Ya(this, Qa(this, a), Qa(this, b || a), c)
      }),
      extendSelection: jc(function(a, b, c) {
          Va(this, Qa(this, a), b && Qa(this, b), c)
      }),
      extendSelections: jc(function(a, b) {
          Wa(this, Ta(this, a), b)
      }),
      extendSelectionsBy: jc(function(a, b) {
          var c = kg(this.sel.ranges, a);
          Wa(this, Ta(this, c), b)
      }),
      setSelections: jc(function(a, b, c) {
          if (a.length) {
              for (var d = 0, e = []; d < a.length; d++) e[d] = new Ma(Qa(this, a[d].anchor), Qa(this, a[d].head));
              null == b && (b = Math.min(a.length - 1, this.sel.primIndex)), _a(this, Na(e, b), c)
          }
      }),
      addSelection: jc(function(a, b, c) {
          var d = this.sel.ranges.slice(0);
          d.push(new Ma(Qa(this, a), Qa(this, b || a))), _a(this, Na(d, d.length - 1), c)
      }),
      getSelection: function(a) {
          for (var c, b = this.sel.ranges, d = 0; d < b.length; d++) {
              var e = lf(this, b[d].from(), b[d].to());
              c = c ? c.concat(e) : e
          }
          return a === !1 ? c : c.join(a || this.lineSeparator())
      },
      getSelections: function(a) {
          for (var b = [], c = this.sel.ranges, d = 0; d < c.length; d++) {
              var e = lf(this, c[d].from(), c[d].to());
              a !== !1 && (e = e.join(a || this.lineSeparator())), b[d] = e
          }
          return b
      },
      replaceSelection: function(a, b, c) {
          for (var d = [], e = 0; e < this.sel.ranges.length; e++) d[e] = a;
          this.replaceSelections(d, b, c || "+input")
      },
      replaceSelections: jc(function(a, b, c) {
          for (var d = [], e = this.sel, f = 0; f < e.ranges.length; f++) {
              var g = e.ranges[f];
              d[f] = {
                  from: g.from(),
                  to: g.to(),
                  text: this.splitLines(a[f]),
                  origin: c
              }
          }
          for (var h = b && "end" != b && jd(this, d, b), f = d.length - 1; f >= 0; f--) ld(this, d[f]);
          h ? $a(this, h) : this.cm && xd(this.cm)
      }),
      undo: jc(function() {
          nd(this, "undo")
      }),
      redo: jc(function() {
          nd(this, "redo")
      }),
      undoSelection: jc(function() {
          nd(this, "undo", !0)
      }),
      redoSelection: jc(function() {
          nd(this, "redo", !0)
      }),
      setExtending: function(a) {
          this.extend = a
      },
      getExtending: function() {
          return this.extend
      },
      historySize: function() {
          for (var a = this.history, b = 0, c = 0, d = 0; d < a.done.length; d++) a.done[d].ranges || ++b;
          for (var d = 0; d < a.undone.length; d++) a.undone[d].ranges || ++c;
          return {
              undo: b,
              redo: c
          }
      },
      clearHistory: function() {
          this.history = new sf(this.history.maxGeneration)
      },
      markClean: function() {
          this.cleanGeneration = this.changeGeneration(!0)
      },
      changeGeneration: function(a) {
          return a && (this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null), this.history.generation
      },
      isClean: function(a) {
          return this.history.generation == (a || this.cleanGeneration)
      },
      getHistory: function() {
          return {
              done: Df(this.history.done),
              undone: Df(this.history.undone)
          }
      },
      setHistory: function(a) {
          var b = this.history = new sf(this.history.maxGeneration);
          b.done = Df(a.done.slice(0), null, !0), b.undone = Df(a.undone.slice(0), null, !0)
      },
      addLineClass: jc(function(a, b, c) {
          return Ad(this, a, "gutter" == b ? "gutter" : "class", function(a) {
              var d = "text" == b ? "textClass" : "background" == b ? "bgClass" : "gutter" == b ? "gutterClass" : "wrapClass";
              if (a[d]) {
                  if (Bg(c).test(a[d])) return !1;
                  a[d] += " " + c
              } else a[d] = c;
              return !0
          })
      }),
      removeLineClass: jc(function(a, b, c) {
          return Ad(this, a, "gutter" == b ? "gutter" : "class", function(a) {
              var d = "text" == b ? "textClass" : "background" == b ? "bgClass" : "gutter" == b ? "gutterClass" : "wrapClass",
                  e = a[d];
              if (!e) return !1;
              if (null == c) a[d] = null;
              else {
                  var f = e.match(Bg(c));
                  if (!f) return !1;
                  var g = f.index + f[0].length;
                  a[d] = e.slice(0, f.index) + (f.index && g != e.length ? " " : "") + e.slice(g) || null
              }
              return !0
          })
      }),
      addLineWidget: jc(function(a, b, c) {
          return Fe(this, a, b, c)
      }),
      removeLineWidget: function(a) {
          a.clear()
      },
      markText: function(a, b, c) {
          return Zd(this, Qa(this, a), Qa(this, b), c, c && c.type || "range")
      },
      setBookmark: function(a, b) {
          var c = {
              replacedWith: b && (null == b.nodeType ? b.widget : b),
              insertLeft: b && b.insertLeft,
              clearWhenEmpty: !1,
              shared: b && b.shared,
              handleMouseEvents: b && b.handleMouseEvents
          };
          return a = Qa(this, a), Zd(this, a, a, c, "bookmark")
      },
      findMarksAt: function(a) {
          a = Qa(this, a);
          var b = [],
              c = kf(this, a.line).markedSpans;
          if (c)
              for (var d = 0; d < c.length; ++d) {
                  var e = c[d];
                  (null == e.from || e.from <= a.ch) && (null == e.to || e.to >= a.ch) && b.push(e.marker.parent || e.marker)
              }
          return b
      },
      findMarks: function(a, b, c) {
          a = Qa(this, a), b = Qa(this, b);
          var d = [],
              e = a.line;
          return this.iter(a.line, b.line + 1, function(f) {
              var g = f.markedSpans;
              if (g)
                  for (var h = 0; h < g.length; h++) {
                      var i = g[h];
                      null != i.to && e == a.line && a.ch >= i.to || null == i.from && e != a.line || null != i.from && e == b.line && i.from >= b.ch || c && !c(i.marker) || d.push(i.marker.parent || i.marker)
                  }++e
          }), d
      },
      getAllMarks: function() {
          var a = [];
          return this.iter(function(b) {
              var c = b.markedSpans;
              if (c)
                  for (var d = 0; d < c.length; ++d) null != c[d].from && a.push(c[d].marker)
          }), a
      },
      posFromIndex: function(a) {
          var b, c = this.first,
              d = this.lineSeparator().length;
          return this.iter(function(e) {
              var f = e.text.length + d;
              return f > a ? (b = a, !0) : (a -= f, void++c)
          }), Qa(this, ra(c, b))
      },
      indexFromPos: function(a) {
          a = Qa(this, a);
          var b = a.ch;
          if (a.line < this.first || a.ch < 0) return 0;
          var c = this.lineSeparator().length;
          return this.iter(this.first, a.line, function(a) {
              b += a.text.length + c
          }), b
      },
      copy: function(a) {
          var b = new ef(mf(this, this.first, this.first + this.size), this.modeOption, this.first, this.lineSep);
          return b.scrollTop = this.scrollTop, b.scrollLeft = this.scrollLeft, b.sel = this.sel, b.extend = !1, a && (b.history.undoDepth = this.history.undoDepth, b.setHistory(this.getHistory())), b
      },
      linkedDoc: function(a) {
          a || (a = {});
          var b = this.first,
              c = this.first + this.size;
          null != a.from && a.from > b && (b = a.from), null != a.to && a.to < c && (c = a.to);
          var d = new ef(mf(this, b, c), a.mode || this.modeOption, b, this.lineSep);
          return a.sharedHist && (d.history = this.history), (this.linked || (this.linked = [])).push({
              doc: d,
              sharedHist: a.sharedHist
          }), d.linked = [{
              doc: this,
              isParent: !0,
              sharedHist: a.sharedHist
          }], be(d, ae(this)), d
      },
      unlinkDoc: function(a) {
          if (a instanceof y && (a = a.doc), this.linked)
              for (var b = 0; b < this.linked.length; ++b) {
                  var c = this.linked[b];
                  if (c.doc == a) {
                      this.linked.splice(b, 1), a.unlinkDoc(this), ce(ae(this));
                      break
                  }
              }
          if (a.history == this.history) {
              var d = [a.id];
              hf(a, function(a) {
                  d.push(a.id)
              }, !0), a.history = new sf(null), a.history.done = Df(this.history.done, d), a.history.undone = Df(this.history.undone, d)
          }
      },
      iterLinkedDocs: function(a) {
          hf(this, a)
      },
      getMode: function() {
          return this.mode
      },
      getEditor: function() {
          return this.cm
      },
      splitLines: function(a) {
          return this.lineSep ? a.split(this.lineSep) : Og(a)
      },
      lineSeparator: function() {
          return this.lineSep || "\n"
      }
  }), ef.prototype.eachLine = ef.prototype.iter;
  var ff = "iter insert remove copy getEditor constructor".split(" ");
  for (var gf in ef.prototype) ef.prototype.hasOwnProperty(gf) && jg(ff, gf) < 0 && (y.prototype[gf] = function(a) {
      return function() {
          return a.apply(this.doc, arguments)
      }
  }(ef.prototype[gf]));
  Yf(ef);
  var Hf = y.e_preventDefault = function(a) {
          a.preventDefault ? a.preventDefault() : a.returnValue = !1
      },
      If = y.e_stopPropagation = function(a) {
          a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0
      },
      Kf = y.e_stop = function(a) {
          Hf(a), If(a)
      },
      Nf = y.on = function(a, b, c) {
          if (a.addEventListener) a.addEventListener(b, c, !1);
          else if (a.attachEvent) a.attachEvent("on" + b, c);
          else {
              var d = a._handlers || (a._handlers = {}),
                  e = d[b] || (d[b] = []);
              e.push(c)
          }
      },
      Of = [],
      Qf = y.off = function(a, b, c) {
          if (a.removeEventListener) a.removeEventListener(b, c, !1);
          else if (a.detachEvent) a.detachEvent("on" + b, c);
          else
              for (var d = Pf(a, b, !1), e = 0; e < d.length; ++e)
                  if (d[e] == c) {
                      d.splice(e, 1);
                      break
                  }
      },
      Rf = y.signal = function(a, b) {
          var c = Pf(a, b, !0);
          if (c.length)
              for (var d = Array.prototype.slice.call(arguments, 2), e = 0; e < c.length; ++e) c[e].apply(null, d)
      },
      Sf = null,
      Zf = 30,
      $f = y.Pass = {
          toString: function() {
              return "CodeMirror.Pass"
          }
      },
      _f = {
          scroll: !1
      },
      ag = {
          origin: "*mouse"
      },
      bg = {
          origin: "+move"
      };
  cg.prototype.set = function(a, b) {
      clearTimeout(this.id), this.id = setTimeout(b, a)
  };
  var dg = y.countColumn = function(a, b, c, d, e) {
          null == b && (b = a.search(/[^\s\u00a0]/), -1 == b && (b = a.length));
          for (var f = d || 0, g = e || 0;;) {
              var h = a.indexOf("	", f);
              if (0 > h || h >= b) return g + (b - f);
              g += h - f, g += c - g % c, f = h + 1
          }
      },
      eg = y.findColumn = function(a, b, c) {
          for (var d = 0, e = 0;;) {
              var f = a.indexOf("	", d); - 1 == f && (f = a.length);
              var g = f - d;
              if (f == a.length || e + g >= b) return d + Math.min(g, b - e);
              if (e += f - d, e += c - e % c, d = f + 1, e >= b) return d
          }
      },
      fg = [""],
      ig = function(a) {
          a.select()
      };
  o ? ig = function(a) {
      a.selectionStart = 0, a.selectionEnd = a.value.length
  } : f && (ig = function(a) {
      try {
          a.select()
      } catch (b) {}
  });
  var wg, pg = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/,
      qg = y.isWordChar = function(a) {
          return /\w/.test(a) || a > "\x80" && (a.toUpperCase() != a.toLowerCase() || pg.test(a))
      },
      tg = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
  wg = document.createRange ? function(a, b, c, d) {
      var e = document.createRange();
      return e.setEnd(d || a, c), e.setStart(a, b), e
  } : function(a, b, c) {
      var d = document.body.createTextRange();
      try {
          d.moveToElementText(a.parentNode)
      } catch (e) {
          return d
      }
      return d.collapse(!0), d.moveEnd("character", c), d.moveStart("character", b), d
  };
  var zg = y.contains = function(a, b) {
      if (3 == b.nodeType && (b = b.parentNode), a.contains) return a.contains(b);
      do
          if (11 == b.nodeType && (b = b.host), b == a) return !0;
      while (b = b.parentNode)
  };
  f && 11 > g && (Ag = function() {
      try {
          return document.activeElement
      } catch (a) {
          return document.body
      }
  });
  var Kg, Mg, Cg = y.rmClass = function(a, b) {
          var c = a.className,
              d = Bg(b).exec(c);
          if (d) {
              var e = c.slice(d.index + d[0].length);
              a.className = c.slice(0, d.index) + (e ? d[1] + e : "")
          }
      },
      Dg = y.addClass = function(a, b) {
          var c = a.className;
          Bg(b).test(c) || (a.className += (c ? " " : "") + b)
      },
      Gg = !1,
      Jg = function() {
          if (f && 9 > g) return !1;
          var a = vg("div");
          return "draggable" in a || "dragDrop" in a
      }(),
      Og = y.splitLines = 3 != "\n\nb".split(/\n/).length ? function(a) {
          for (var b = 0, c = [], d = a.length; d >= b;) {
              var e = a.indexOf("\n", b); - 1 == e && (e = a.length);
              var f = a.slice(b, "\r" == a.charAt(e - 1) ? e - 1 : e),
                  g = f.indexOf("\r"); - 1 != g ? (c.push(f.slice(0, g)), b += g + 1) : (c.push(f), b = e + 1)
          }
          return c
      } : function(a) {
          return a.split(/\r\n?|\n/)
      },
      Pg = window.getSelection ? function(a) {
          try {
              return a.selectionStart != a.selectionEnd
          } catch (b) {
              return !1
          }
      } : function(a) {
          try {
              var b = a.ownerDocument.selection.createRange()
          } catch (c) {}
          return b && b.parentElement() == a ? 0 != b.compareEndPoints("StartToEnd", b) : !1
      },
      Qg = function() {
          var a = vg("div");
          return "oncopy" in a ? !0 : (a.setAttribute("oncopy", "return;"), "function" == typeof a.oncopy)
      }(),
      Rg = null,
      Tg = y.keyNames = {
          3: "Enter",
          8: "Backspace",
          9: "Tab",
          13: "Enter",
          16: "Shift",
          17: "Ctrl",
          18: "Alt",
          19: "Pause",
          20: "CapsLock",
          27: "Esc",
          32: "Space",
          33: "PageUp",
          34: "PageDown",
          35: "End",
          36: "Home",
          37: "Left",
          38: "Up",
          39: "Right",
          40: "Down",
          44: "PrintScrn",
          45: "Insert",
          46: "Delete",
          59: ";",
          61: "=",
          91: "Mod",
          92: "Mod",
          93: "Mod",
          106: "*",
          107: "=",
          109: "-",
          110: ".",
          111: "/",
          127: "Delete",
          173: "-",
          186: ";",
          187: "=",
          188: ",",
          189: "-",
          190: ".",
          191: "/",
          192: "`",
          219: "[",
          220: "\\",
          221: "]",
          222: "'",
          63232: "Up",
          63233: "Down",
          63234: "Left",
          63235: "Right",
          63272: "Delete",
          63273: "Home",
          63275: "End",
          63276: "PageUp",
          63277: "PageDown",
          63302: "Insert"
      };
  ! function() {
      for (var a = 0; 10 > a; a++) Tg[a + 48] = Tg[a + 96] = String(a);
      for (var a = 65; 90 >= a; a++) Tg[a] = String.fromCharCode(a);
      for (var a = 1; 12 >= a; a++) Tg[a + 111] = Tg[a + 63235] = "F" + a
  }();
  var bh, gh = function() {
      function c(c) {
          return 247 >= c ? a.charAt(c) : c >= 1424 && 1524 >= c ? "R" : c >= 1536 && 1773 >= c ? b.charAt(c - 1536) : c >= 1774 && 2220 >= c ? "r" : c >= 8192 && 8203 >= c ? "w" : 8204 == c ? "b" : "L"
      }

      function j(a, b, c) {
          this.level = a, this.from = b, this.to = c
      }
      var a = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN",
          b = "rrrrrrrrrrrr,rNNmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmrrrrrrrnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmNmmmm",
          d = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,
          e = /[stwN]/,
          f = /[LRr]/,
          g = /[Lb1n]/,
          h = /[1n]/,
          i = "L";
      return function(a) {
          if (!d.test(a)) return !1;
          for (var m, b = a.length, k = [], l = 0; b > l; ++l) k.push(m = c(a.charCodeAt(l)));
          for (var l = 0, n = i; b > l; ++l) {
              var m = k[l];
              "m" == m ? k[l] = n : n = m
          }
          for (var l = 0, o = i; b > l; ++l) {
              var m = k[l];
              "1" == m && "r" == o ? k[l] = "n" : f.test(m) && (o = m, "r" == m && (k[l] = "R"))
          }
          for (var l = 1, n = k[0]; b - 1 > l; ++l) {
              var m = k[l];
              "+" == m && "1" == n && "1" == k[l + 1] ? k[l] = "1" : "," != m || n != k[l + 1] || "1" != n && "n" != n || (k[l] = n), n = m
          }
          for (var l = 0; b > l; ++l) {
              var m = k[l];
              if ("," == m) k[l] = "N";
              else if ("%" == m) {
                  for (var p = l + 1; b > p && "%" == k[p]; ++p);
                  for (var q = l && "!" == k[l - 1] || b > p && "1" == k[p] ? "1" : "N", r = l; p > r; ++r) k[r] = q;
                  l = p - 1
              }
          }
          for (var l = 0, o = i; b > l; ++l) {
              var m = k[l];
              "L" == o && "1" == m ? k[l] = "L" : f.test(m) && (o = m)
          }
          for (var l = 0; b > l; ++l)
              if (e.test(k[l])) {
                  for (var p = l + 1; b > p && e.test(k[p]); ++p);
                  for (var s = "L" == (l ? k[l - 1] : i), t = "L" == (b > p ? k[p] : i), q = s || t ? "L" : "R", r = l; p > r; ++r) k[r] = q;
                  l = p - 1
              }
          for (var v, u = [], l = 0; b > l;)
              if (g.test(k[l])) {
                  var w = l;
                  for (++l; b > l && g.test(k[l]); ++l);
                  u.push(new j(0, w, l))
              } else {
                  var x = l,
                      y = u.length;
                  for (++l; b > l && "L" != k[l]; ++l);
                  for (var r = x; l > r;)
                      if (h.test(k[r])) {
                          r > x && u.splice(y, 0, new j(1, x, r));
                          var z = r;
                          for (++r; l > r && h.test(k[r]); ++r);
                          u.splice(y, 0, new j(2, z, r)), x = r
                      } else ++r;
                  l > x && u.splice(y, 0, new j(1, x, l))
              }
          return 1 == u[0].level && (v = a.match(/^\s+/)) && (u[0].from = v[0].length, u.unshift(new j(0, 0, v[0].length))), 1 == hg(u).level && (v = a.match(/\s+$/)) && (hg(u).to -= v[0].length, u.push(new j(0, b - v[0].length, b))), 2 == u[0].level && u.unshift(new j(1, u[0].to, u[0].to)), u[0].level != hg(u).level && u.push(new j(u[0].level, b, b)), u
      }
  }();
  return y.version = "5.15.3", y
}),
function(a) {
  "object" == typeof exports && "object" == typeof module ? a(require("../../lib/codemirror"), require("../xml/xml"), require("../javascript/javascript"), require("../css/css")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror", "../xml/xml", "../javascript/javascript", "../css/css"], a) : a(CodeMirror)
}(function(a) {
  "use strict";

  function c(a, b, c) {
      var d = a.current(),
          e = d.search(b);
      return e > -1 ? a.backUp(d.length - e) : d.match(/<\/?$/) && (a.backUp(d.length), a.match(b, !1) || a.match(d)), c
  }

  function e(a) {
      var b = d[a];
      return b ? b : d[a] = new RegExp("\\s+" + a + "\\s*=\\s*('|\")?([^'\"]+)('|\")?\\s*")
  }

  function f(a, b) {
      var c = a.match(e(b));
      return c ? c[2] : ""
  }

  function g(a, b) {
      return new RegExp((b ? "^" : "") + "</s*" + a + "s*>", "i")
  }

  function h(a, b) {
      for (var c in a)
          for (var d = b[c] || (b[c] = []), e = a[c], f = e.length - 1; f >= 0; f--) d.unshift(e[f])
  }

  function i(a, b) {
      for (var c = 0; c < a.length; c++) {
          var d = a[c];
          if (!d[0] || d[1].test(f(b, d[0]))) return d[2]
      }
  }
  var b = {
          script: [
              ["lang", /(javascript|babel)/i, "javascript"],
              ["type", /^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^$/i, "javascript"],
              ["type", /./, "text/plain"],
              [null, null, "javascript"]
          ],
          style: [
              ["lang", /^css$/i, "css"],
              ["type", /^(text\/)?(x-)?(stylesheet|css)$/i, "css"],
              ["type", /./, "text/plain"],
              [null, null, "css"]
          ]
      },
      d = {};
  a.defineMode("htmlmixed", function(d, e) {
      function n(b, e) {
          var l, h = f.token(b, e.htmlState),
              k = /\btag\b/.test(h);
          if (k && !/[<>\s\/]/.test(b.current()) && (l = e.htmlState.tagName && e.htmlState.tagName.toLowerCase()) && j.hasOwnProperty(l)) e.inTag = l + " ";
          else if (e.inTag && k && />$/.test(b.current())) {
              var m = /^([\S]+) (.*)/.exec(e.inTag);
              e.inTag = null;
              var o = ">" == b.current() && i(j[m[1]], m[2]),
                  p = a.getMode(d, o),
                  q = g(m[1], !0),
                  r = g(m[1], !1);
              e.token = function(a, b) {
                  return a.match(q, !1) ? (b.token = n, b.localState = b.localMode = null, null) : c(a, r, b.localMode.token(a, b.localState))
              }, e.localMode = p, e.localState = a.startState(p, f.indent(e.htmlState, ""))
          } else e.inTag && (e.inTag += b.current(), b.eol() && (e.inTag += " "));
          return h
      }
      var f = a.getMode(d, {
              name: "xml",
              htmlMode: !0,
              multilineTagIndentFactor: e.multilineTagIndentFactor,
              multilineTagIndentPastTag: e.multilineTagIndentPastTag
          }),
          j = {},
          k = e && e.tags,
          l = e && e.scriptTypes;
      if (h(b, j), k && h(k, j), l)
          for (var m = l.length - 1; m >= 0; m--) j.script.unshift(["type", l[m].matches, l[m].mode]);
      return {
          startState: function() {
              var b = a.startState(f);
              return {
                  token: n,
                  inTag: null,
                  localMode: null,
                  localState: null,
                  htmlState: b
              }
          },
          copyState: function(b) {
              var c;
              return b.localState && (c = a.copyState(b.localMode, b.localState)), {
                  token: b.token,
                  inTag: b.inTag,
                  localMode: b.localMode,
                  localState: c,
                  htmlState: a.copyState(f, b.htmlState)
              }
          },
          token: function(a, b) {
              return b.token(a, b)
          },
          indent: function(b, c) {
              return !b.localMode || /^\s*<\//.test(c) ? f.indent(b.htmlState, c) : b.localMode.indent ? b.localMode.indent(b.localState, c) : a.Pass
          },
          innerMode: function(a) {
              return {
                  state: a.localState || a.htmlState,
                  mode: a.localMode || f
              }
          }
      }
  }, "xml", "javascript", "css"), a.defineMIME("text/html", "htmlmixed")
}),
function(a) {
  "object" == typeof exports && "object" == typeof module ? a(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], a) : a(CodeMirror)
}(function(a) {
  "use strict";

  function e(a) {
      for (var e = 0; e < a.state.activeLines.length; e++) a.removeLineClass(a.state.activeLines[e], "wrap", b), a.removeLineClass(a.state.activeLines[e], "background", c), a.removeLineClass(a.state.activeLines[e], "gutter", d)
  }

  function f(a, b) {
      if (a.length != b.length) return !1;
      for (var c = 0; c < a.length; c++)
          if (a[c] != b[c]) return !1;
      return !0
  }

  function g(a, g) {
      for (var h = [], i = 0; i < g.length; i++) {
          var j = g[i];
          if (j.empty()) {
              var k = a.getLineHandleVisualStart(j.head.line);
              h[h.length - 1] != k && h.push(k)
          }
      }
      f(a.state.activeLines, h) || a.operation(function() {
          e(a);
          for (var f = 0; f < h.length; f++) a.addLineClass(h[f], "wrap", b), a.addLineClass(h[f], "background", c), a.addLineClass(h[f], "gutter", d);
          a.state.activeLines = h
      })
  }

  function h(a, b) {
      g(a, b.ranges)
  }
  var b = "CodeMirror-activeline",
      c = "CodeMirror-activeline-background",
      d = "CodeMirror-activeline-gutter";
  a.defineOption("styleActiveLine", !1, function(b, c, d) {
      var f = d && d != a.Init;
      c && !f ? (b.state.activeLines = [], g(b, b.listSelections()), b.on("beforeSelectionChange", h)) : !c && f && (b.off("beforeSelectionChange", h), e(b), delete b.state.activeLines)
  })
}),
function(a) {
  "object" == typeof exports && "object" == typeof module ? a(require("../../lib/codemirror"), require("./runmode")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror", "./runmode"], a) : a(CodeMirror);
}(function(a) {
  "use strict";

  function c(a, d) {
      if (3 == a.nodeType) return d.push(a.nodeValue);
      for (var e = a.firstChild; e; e = e.nextSibling) c(e, d), b.test(a.nodeType) && d.push("\n")
  }
  var b = /^(p|li|div|h\\d|pre|blockquote|td)$/;
  a.colorize = function(b, d) {
      b || (b = document.body.getElementsByTagName("pre"));
      for (var e = 0; e < b.length; ++e) {
          var f = b[e],
              g = f.getAttribute("data-lang") || d;
          if (g) {
              var h = [];
              c(f, h), f.innerHTML = "", a.runMode(h.join(""), g, f), f.className += " cm-s-default"
          }
      }
  }
});;
! function(e) {
  "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], e) : e(CodeMirror)
}(function(e) {
  "use strict";

  function t(e) {
      for (var t = {}, r = 0; r < e.length; ++r) t[e[r]] = !0;
      return t
  }
  e.defineMode("css", function(t, r) {
      var o = r.inline;
      r.propertyKeywords || (r = e.resolveMode("text/css"));
      var a, i, n = t.indentUnit,
          l = r.tokenHooks,
          s = r.documentTypes || {},
          c = r.mediaTypes || {},
          d = r.mediaFeatures || {},
          p = r.mediaValueKeywords || {},
          u = r.propertyKeywords || {},
          m = r.nonStandardPropertyKeywords || {},
          h = r.fontProperties || {},
          g = r.counterDescriptors || {},
          b = r.colorKeywords || {},
          f = r.valueKeywords || {},
          y = r.allowNested,
          w = !0 === r.supportsAtComponent;

      function k(e, t) {
          return a = t, e
      }

      function v(e) {
          return function(t, r) {
              for (var o, a = !1; null != (o = t.next());) {
                  if (o == e && !a) {
                      ")" == e && t.backUp(1);
                      break
                  }
                  a = !a && "\\" == o
              }
              return (o == e || !a && ")" != e) && (r.tokenize = null), k("string", "string")
          }
      }

      function x(e, t) {
          return e.next(), e.match(/\s*[\"\')]/, !1) ? t.tokenize = null : t.tokenize = v(")"), k(null, "(")
      }

      function z(e, t, r) {
          this.type = e, this.indent = t, this.prev = r
      }

      function q(e, t, r, o) {
          return e.context = new z(r, t.indentation() + (!1 === o ? 0 : n), e.context), r
      }

      function P(e) {
          return e.context.prev && (e.context = e.context.prev), e.context.type
      }

      function j(e, t, r) {
          return T[r.context.type](e, t, r)
      }

      function K(e, t, r, o) {
          for (var a = o || 1; a > 0; a--) r.context = r.context.prev;
          return j(e, t, r)
      }

      function B(e) {
          var t = e.current().toLowerCase();
          i = f.hasOwnProperty(t) ? "atom" : b.hasOwnProperty(t) ? "keyword" : "variable"
      }
      var T = {
          top: function(e, t, r) {
              if ("{" == e) return q(r, t, "block");
              if ("}" == e && r.context.prev) return P(r);
              if (w && /@component/.test(e)) return q(r, t, "atComponentBlock");
              if (/^@(-moz-)?document$/.test(e)) return q(r, t, "documentTypes");
              if (/^@(media|supports|(-moz-)?document|import)$/.test(e)) return q(r, t, "atBlock");
              if (/^@(font-face|counter-style)/.test(e)) return r.stateArg = e, "restricted_atBlock_before";
              if (/^@(-(moz|ms|o|webkit)-)?keyframes$/.test(e)) return "keyframes";
              if (e && "@" == e.charAt(0)) return q(r, t, "at");
              if ("hash" == e) i = "builtin";
              else if ("word" == e) i = "tag";
              else {
                  if ("variable-definition" == e) return "maybeprop";
                  if ("interpolation" == e) return q(r, t, "interpolation");
                  if (":" == e) return "pseudo";
                  if (y && "(" == e) return q(r, t, "parens")
              }
              return r.context.type
          },
          block: function(e, t, r) {
              if ("word" == e) {
                  var o = t.current().toLowerCase();
                  return u.hasOwnProperty(o) ? (i = "property", "maybeprop") : m.hasOwnProperty(o) ? (i = "string-2", "maybeprop") : y ? (i = t.match(/^\s*:(?:\s|$)/, !1) ? "property" : "tag", "block") : (i += " error", "maybeprop")
              }
              return "meta" == e ? "block" : y || "hash" != e && "qualifier" != e ? T.top(e, t, r) : (i = "error", "block")
          },
          maybeprop: function(e, t, r) {
              return ":" == e ? q(r, t, "prop") : j(e, t, r)
          },
          prop: function(e, t, r) {
              if (";" == e) return P(r);
              if ("{" == e && y) return q(r, t, "propBlock");
              if ("}" == e || "{" == e) return K(e, t, r);
              if ("(" == e) return q(r, t, "parens");
              if ("hash" != e || /^#([0-9a-fA-f]{3,4}|[0-9a-fA-f]{6}|[0-9a-fA-f]{8})$/.test(t.current())) {
                  if ("word" == e) B(t);
                  else if ("interpolation" == e) return q(r, t, "interpolation")
              } else i += " error";
              return "prop"
          },
          propBlock: function(e, t, r) {
              return "}" == e ? P(r) : "word" == e ? (i = "property", "maybeprop") : r.context.type
          },
          parens: function(e, t, r) {
              return "{" == e || "}" == e ? K(e, t, r) : ")" == e ? P(r) : "(" == e ? q(r, t, "parens") : "interpolation" == e ? q(r, t, "interpolation") : ("word" == e && B(t), "parens")
          },
          pseudo: function(e, t, r) {
              return "word" == e ? (i = "variable-3", r.context.type) : j(e, t, r)
          },
          documentTypes: function(e, t, r) {
              return "word" == e && s.hasOwnProperty(t.current()) ? (i = "tag", r.context.type) : T.atBlock(e, t, r)
          },
          atBlock: function(e, t, r) {
              if ("(" == e) return q(r, t, "atBlock_parens");
              if ("}" == e || ";" == e) return K(e, t, r);
              if ("{" == e) return P(r) && q(r, t, y ? "block" : "top");
              if ("interpolation" == e) return q(r, t, "interpolation");
              if ("word" == e) {
                  var o = t.current().toLowerCase();
                  i = "only" == o || "not" == o || "and" == o || "or" == o ? "keyword" : c.hasOwnProperty(o) ? "attribute" : d.hasOwnProperty(o) ? "property" : p.hasOwnProperty(o) ? "keyword" : u.hasOwnProperty(o) ? "property" : m.hasOwnProperty(o) ? "string-2" : f.hasOwnProperty(o) ? "atom" : b.hasOwnProperty(o) ? "keyword" : "error"
              }
              return r.context.type
          },
          atComponentBlock: function(e, t, r) {
              return "}" == e ? K(e, t, r) : "{" == e ? P(r) && q(r, t, y ? "block" : "top", !1) : ("word" == e && (i = "error"), r.context.type)
          },
          atBlock_parens: function(e, t, r) {
              return ")" == e ? P(r) : "{" == e || "}" == e ? K(e, t, r, 2) : T.atBlock(e, t, r)
          },
          restricted_atBlock_before: function(e, t, r) {
              return "{" == e ? q(r, t, "restricted_atBlock") : "word" == e && "@counter-style" == r.stateArg ? (i = "variable", "restricted_atBlock_before") : j(e, t, r)
          },
          restricted_atBlock: function(e, t, r) {
              return "}" == e ? (r.stateArg = null, P(r)) : "word" == e ? (i = "@font-face" == r.stateArg && !h.hasOwnProperty(t.current().toLowerCase()) || "@counter-style" == r.stateArg && !g.hasOwnProperty(t.current().toLowerCase()) ? "error" : "property", "maybeprop") : "restricted_atBlock"
          },
          keyframes: function(e, t, r) {
              return "word" == e ? (i = "variable", "keyframes") : "{" == e ? q(r, t, "top") : j(e, t, r)
          },
          at: function(e, t, r) {
              return ";" == e ? P(r) : "{" == e || "}" == e ? K(e, t, r) : ("word" == e ? i = "tag" : "hash" == e && (i = "builtin"), "at")
          },
          interpolation: function(e, t, r) {
              return "}" == e ? P(r) : "{" == e || ";" == e ? K(e, t, r) : ("word" == e ? i = "variable" : "variable" != e && "(" != e && ")" != e && (i = "error"), "interpolation")
          }
      };
      return {
          startState: function(e) {
              return {
                  tokenize: null,
                  state: o ? "block" : "top",
                  stateArg: null,
                  context: new z(o ? "block" : "top", e || 0, null)
              }
          },
          token: function(e, t) {
              if (!t.tokenize && e.eatSpace()) return null;
              var r = (t.tokenize || function(e, t) {
                  var r = e.next();
                  if (l[r]) {
                      var o = l[r](e, t);
                      if (!1 !== o) return o
                  }
                  return "@" == r ? (e.eatWhile(/[\w\\\-]/), k("def", e.current())) : "=" == r || ("~" == r || "|" == r) && e.eat("=") ? k(null, "compare") : '"' == r || "'" == r ? (t.tokenize = v(r), t.tokenize(e, t)) : "#" == r ? (e.eatWhile(/[\w\\\-]/), k("atom", "hash")) : "!" == r ? (e.match(/^\s*\w*/), k("keyword", "important")) : /\d/.test(r) || "." == r && e.eat(/\d/) ? (e.eatWhile(/[\w.%]/), k("number", "unit")) : "-" !== r ? /[,+>*\/]/.test(r) ? k(null, "select-op") : "." == r && e.match(/^-?[_a-z][_a-z0-9-]*/i) ? k("qualifier", "qualifier") : /[:;{}\[\]\(\)]/.test(r) ? k(null, r) : "u" == r && e.match(/rl(-prefix)?\(/) || "d" == r && e.match("omain(") || "r" == r && e.match("egexp(") ? (e.backUp(1), t.tokenize = x, k("property", "word")) : /[\w\\\-]/.test(r) ? (e.eatWhile(/[\w\\\-]/), k("property", "word")) : k(null, null) : /[\d.]/.test(e.peek()) ? (e.eatWhile(/[\w.%]/), k("number", "unit")) : e.match(/^-[\w\\\-]+/) ? (e.eatWhile(/[\w\\\-]/), e.match(/^\s*:/, !1) ? k("variable-2", "variable-definition") : k("variable-2", "variable")) : e.match(/^\w+-/) ? k("meta", "meta") : void 0
              })(e, t);
              return r && "object" == typeof r && (a = r[1], r = r[0]), i = r, t.state = T[t.state](a, e, t), i
          },
          indent: function(e, t) {
              var r = e.context,
                  o = t && t.charAt(0),
                  a = r.indent;
              return "prop" != r.type || "}" != o && ")" != o || (r = r.prev), r.prev && ("}" != o || "block" != r.type && "top" != r.type && "interpolation" != r.type && "restricted_atBlock" != r.type ? (")" != o || "parens" != r.type && "atBlock_parens" != r.type) && ("{" != o || "at" != r.type && "atBlock" != r.type) || (a = Math.max(0, r.indent - n), r = r.prev) : a = (r = r.prev).indent), a
          },
          electricChars: "}",
          blockCommentStart: "/*",
          blockCommentEnd: "*/",
          fold: "brace"
      }
  });
  var r = ["domain", "regexp", "url", "url-prefix"],
      o = t(r),
      a = ["all", "aural", "braille", "handheld", "print", "projection", "screen", "tty", "tv", "embossed"],
      i = t(a),
      n = ["width", "min-width", "max-width", "height", "min-height", "max-height", "device-width", "min-device-width", "max-device-width", "device-height", "min-device-height", "max-device-height", "aspect-ratio", "min-aspect-ratio", "max-aspect-ratio", "device-aspect-ratio", "min-device-aspect-ratio", "max-device-aspect-ratio", "color", "min-color", "max-color", "color-index", "min-color-index", "max-color-index", "monochrome", "min-monochrome", "max-monochrome", "resolution", "min-resolution", "max-resolution", "scan", "grid", "orientation", "device-pixel-ratio", "min-device-pixel-ratio", "max-device-pixel-ratio", "pointer", "any-pointer", "hover", "any-hover"],
      l = t(n),
      s = ["landscape", "portrait", "none", "coarse", "fine", "on-demand", "hover", "interlace", "progressive"],
      c = t(s),
      d = ["align-content", "align-items", "align-self", "alignment-adjust", "alignment-baseline", "anchor-point", "animation", "animation-delay", "animation-direction", "animation-duration", "animation-fill-mode", "animation-iteration-count", "animation-name", "animation-play-state", "animation-timing-function", "appearance", "azimuth", "backface-visibility", "background", "background-attachment", "background-blend-mode", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-repeat", "background-size", "baseline-shift", "binding", "bleed", "bookmark-label", "bookmark-level", "bookmark-state", "bookmark-target", "border", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-style", "border-bottom-width", "border-collapse", "border-color", "border-image", "border-image-outset", "border-image-repeat", "border-image-slice", "border-image-source", "border-image-width", "border-left", "border-left-color", "border-left-style", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-style", "border-right-width", "border-spacing", "border-style", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-style", "border-top-width", "border-width", "bottom", "box-decoration-break", "box-shadow", "box-sizing", "break-after", "break-before", "break-inside", "caption-side", "clear", "clip", "color", "color-profile", "column-count", "column-fill", "column-gap", "column-rule", "column-rule-color", "column-rule-style", "column-rule-width", "column-span", "column-width", "columns", "content", "counter-increment", "counter-reset", "crop", "cue", "cue-after", "cue-before", "cursor", "direction", "display", "dominant-baseline", "drop-initial-after-adjust", "drop-initial-after-align", "drop-initial-before-adjust", "drop-initial-before-align", "drop-initial-size", "drop-initial-value", "elevation", "empty-cells", "fit", "fit-position", "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "float", "float-offset", "flow-from", "flow-into", "font", "font-feature-settings", "font-family", "font-kerning", "font-language-override", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-synthesis", "font-variant", "font-variant-alternates", "font-variant-caps", "font-variant-east-asian", "font-variant-ligatures", "font-variant-numeric", "font-variant-position", "font-weight", "grid", "grid-area", "grid-auto-columns", "grid-auto-flow", "grid-auto-rows", "grid-column", "grid-column-end", "grid-column-gap", "grid-column-start", "grid-gap", "grid-row", "grid-row-end", "grid-row-gap", "grid-row-start", "grid-template", "grid-template-areas", "grid-template-columns", "grid-template-rows", "hanging-punctuation", "height", "hyphens", "icon", "image-orientation", "image-rendering", "image-resolution", "inline-box-align", "justify-content", "left", "letter-spacing", "line-break", "line-height", "line-stacking", "line-stacking-ruby", "line-stacking-shift", "line-stacking-strategy", "list-style", "list-style-image", "list-style-position", "list-style-type", "margin", "margin-bottom", "margin-left", "margin-right", "margin-top", "marker-offset", "marks", "marquee-direction", "marquee-loop", "marquee-play-count", "marquee-speed", "marquee-style", "max-height", "max-width", "min-height", "min-width", "move-to", "nav-down", "nav-index", "nav-left", "nav-right", "nav-up", "object-fit", "object-position", "opacity", "order", "orphans", "outline", "outline-color", "outline-offset", "outline-style", "outline-width", "overflow", "overflow-style", "overflow-wrap", "overflow-x", "overflow-y", "padding", "padding-bottom", "padding-left", "padding-right", "padding-top", "page", "page-break-after", "page-break-before", "page-break-inside", "page-policy", "pause", "pause-after", "pause-before", "perspective", "perspective-origin", "pitch", "pitch-range", "play-during", "position", "presentation-level", "punctuation-trim", "quotes", "region-break-after", "region-break-before", "region-break-inside", "region-fragment", "rendering-intent", "resize", "rest", "rest-after", "rest-before", "richness", "right", "rotation", "rotation-point", "ruby-align", "ruby-overhang", "ruby-position", "ruby-span", "shape-image-threshold", "shape-inside", "shape-margin", "shape-outside", "size", "speak", "speak-as", "speak-header", "speak-numeral", "speak-punctuation", "speech-rate", "stress", "string-set", "tab-size", "table-layout", "target", "target-name", "target-new", "target-position", "text-align", "text-align-last", "text-decoration", "text-decoration-color", "text-decoration-line", "text-decoration-skip", "text-decoration-style", "text-emphasis", "text-emphasis-color", "text-emphasis-position", "text-emphasis-style", "text-height", "text-indent", "text-justify", "text-outline", "text-overflow", "text-shadow", "text-size-adjust", "text-space-collapse", "text-transform", "text-underline-position", "text-wrap", "top", "transform", "transform-origin", "transform-style", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "unicode-bidi", "vertical-align", "visibility", "voice-balance", "voice-duration", "voice-family", "voice-pitch", "voice-range", "voice-rate", "voice-stress", "voice-volume", "volume", "white-space", "widows", "width", "word-break", "word-spacing", "word-wrap", "z-index", "clip-path", "clip-rule", "mask", "enable-background", "filter", "flood-color", "flood-opacity", "lighting-color", "stop-color", "stop-opacity", "pointer-events", "color-interpolation", "color-interpolation-filters", "color-rendering", "fill", "fill-opacity", "fill-rule", "image-rendering", "marker", "marker-end", "marker-mid", "marker-start", "shape-rendering", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "text-rendering", "baseline-shift", "dominant-baseline", "glyph-orientation-horizontal", "glyph-orientation-vertical", "text-anchor", "writing-mode"],
      p = t(d),
      u = ["scrollbar-arrow-color", "scrollbar-base-color", "scrollbar-dark-shadow-color", "scrollbar-face-color", "scrollbar-highlight-color", "scrollbar-shadow-color", "scrollbar-3d-light-color", "scrollbar-track-color", "shape-inside", "searchfield-cancel-button", "searchfield-decoration", "searchfield-results-button", "searchfield-results-decoration", "zoom"],
      m = t(u),
      h = t(["font-family", "src", "unicode-range", "font-variant", "font-feature-settings", "font-stretch", "font-weight", "font-style"]),
      g = t(["additive-symbols", "fallback", "negative", "pad", "prefix", "range", "speak-as", "suffix", "symbols", "system"]),
      b = ["aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "grey", "green", "greenyellow", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "rebeccapurple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen"],
      f = t(b),
      y = ["above", "absolute", "activeborder", "additive", "activecaption", "afar", "after-white-space", "ahead", "alias", "all", "all-scroll", "alphabetic", "alternate", "always", "amharic", "amharic-abegede", "antialiased", "appworkspace", "arabic-indic", "armenian", "asterisks", "attr", "auto", "avoid", "avoid-column", "avoid-page", "avoid-region", "background", "backwards", "baseline", "below", "bidi-override", "binary", "bengali", "blink", "block", "block-axis", "bold", "bolder", "border", "border-box", "both", "bottom", "break", "break-all", "break-word", "bullets", "button", "button-bevel", "buttonface", "buttonhighlight", "buttonshadow", "buttontext", "calc", "cambodian", "capitalize", "caps-lock-indicator", "caption", "captiontext", "caret", "cell", "center", "checkbox", "circle", "cjk-decimal", "cjk-earthly-branch", "cjk-heavenly-stem", "cjk-ideographic", "clear", "clip", "close-quote", "col-resize", "collapse", "color", "color-burn", "color-dodge", "column", "column-reverse", "compact", "condensed", "contain", "content", "content-box", "context-menu", "continuous", "copy", "counter", "counters", "cover", "crop", "cross", "crosshair", "currentcolor", "cursive", "cyclic", "darken", "dashed", "decimal", "decimal-leading-zero", "default", "default-button", "dense", "destination-atop", "destination-in", "destination-out", "destination-over", "devanagari", "difference", "disc", "discard", "disclosure-closed", "disclosure-open", "document", "dot-dash", "dot-dot-dash", "dotted", "double", "down", "e-resize", "ease", "ease-in", "ease-in-out", "ease-out", "element", "ellipse", "ellipsis", "embed", "end", "ethiopic", "ethiopic-abegede", "ethiopic-abegede-am-et", "ethiopic-abegede-gez", "ethiopic-abegede-ti-er", "ethiopic-abegede-ti-et", "ethiopic-halehame-aa-er", "ethiopic-halehame-aa-et", "ethiopic-halehame-am-et", "ethiopic-halehame-gez", "ethiopic-halehame-om-et", "ethiopic-halehame-sid-et", "ethiopic-halehame-so-et", "ethiopic-halehame-ti-er", "ethiopic-halehame-ti-et", "ethiopic-halehame-tig", "ethiopic-numeric", "ew-resize", "exclusion", "expanded", "extends", "extra-condensed", "extra-expanded", "fantasy", "fast", "fill", "fixed", "flat", "flex", "flex-end", "flex-start", "footnotes", "forwards", "from", "geometricPrecision", "georgian", "graytext", "grid", "groove", "gujarati", "gurmukhi", "hand", "hangul", "hangul-consonant", "hard-light", "hebrew", "help", "hidden", "hide", "higher", "highlight", "highlighttext", "hiragana", "hiragana-iroha", "horizontal", "hsl", "hsla", "hue", "icon", "ignore", "inactiveborder", "inactivecaption", "inactivecaptiontext", "infinite", "infobackground", "infotext", "inherit", "initial", "inline", "inline-axis", "inline-block", "inline-flex", "inline-grid", "inline-table", "inset", "inside", "intrinsic", "invert", "italic", "japanese-formal", "japanese-informal", "justify", "kannada", "katakana", "katakana-iroha", "keep-all", "khmer", "korean-hangul-formal", "korean-hanja-formal", "korean-hanja-informal", "landscape", "lao", "large", "larger", "left", "level", "lighter", "lighten", "line-through", "linear", "linear-gradient", "lines", "list-item", "listbox", "listitem", "local", "logical", "loud", "lower", "lower-alpha", "lower-armenian", "lower-greek", "lower-hexadecimal", "lower-latin", "lower-norwegian", "lower-roman", "lowercase", "ltr", "luminosity", "malayalam", "match", "matrix", "matrix3d", "media-controls-background", "media-current-time-display", "media-fullscreen-button", "media-mute-button", "media-play-button", "media-return-to-realtime-button", "media-rewind-button", "media-seek-back-button", "media-seek-forward-button", "media-slider", "media-sliderthumb", "media-time-remaining-display", "media-volume-slider", "media-volume-slider-container", "media-volume-sliderthumb", "medium", "menu", "menulist", "menulist-button", "menulist-text", "menulist-textfield", "menutext", "message-box", "middle", "min-intrinsic", "mix", "mongolian", "monospace", "move", "multiple", "multiply", "myanmar", "n-resize", "narrower", "ne-resize", "nesw-resize", "no-close-quote", "no-drop", "no-open-quote", "no-repeat", "none", "normal", "not-allowed", "nowrap", "ns-resize", "numbers", "numeric", "nw-resize", "nwse-resize", "oblique", "octal", "open-quote", "optimizeLegibility", "optimizeSpeed", "oriya", "oromo", "outset", "outside", "outside-shape", "overlay", "overline", "padding", "padding-box", "painted", "page", "paused", "persian", "perspective", "plus-darker", "plus-lighter", "pointer", "polygon", "portrait", "pre", "pre-line", "pre-wrap", "preserve-3d", "progress", "push-button", "radial-gradient", "radio", "read-only", "read-write", "read-write-plaintext-only", "rectangle", "region", "relative", "repeat", "repeating-linear-gradient", "repeating-radial-gradient", "repeat-x", "repeat-y", "reset", "reverse", "rgb", "rgba", "ridge", "right", "rotate", "rotate3d", "rotateX", "rotateY", "rotateZ", "round", "row", "row-resize", "row-reverse", "rtl", "run-in", "running", "s-resize", "sans-serif", "saturation", "scale", "scale3d", "scaleX", "scaleY", "scaleZ", "screen", "scroll", "scrollbar", "se-resize", "searchfield", "searchfield-cancel-button", "searchfield-decoration", "searchfield-results-button", "searchfield-results-decoration", "semi-condensed", "semi-expanded", "separate", "serif", "show", "sidama", "simp-chinese-formal", "simp-chinese-informal", "single", "skew", "skewX", "skewY", "skip-white-space", "slide", "slider-horizontal", "slider-vertical", "sliderthumb-horizontal", "sliderthumb-vertical", "slow", "small", "small-caps", "small-caption", "smaller", "soft-light", "solid", "somali", "source-atop", "source-in", "source-out", "source-over", "space", "space-around", "space-between", "spell-out", "square", "square-button", "start", "static", "status-bar", "stretch", "stroke", "sub", "subpixel-antialiased", "super", "sw-resize", "symbolic", "symbols", "table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row", "table-row-group", "tamil", "telugu", "text", "text-bottom", "text-top", "textarea", "textfield", "thai", "thick", "thin", "threeddarkshadow", "threedface", "threedhighlight", "threedlightshadow", "threedshadow", "tibetan", "tigre", "tigrinya-er", "tigrinya-er-abegede", "tigrinya-et", "tigrinya-et-abegede", "to", "top", "trad-chinese-formal", "trad-chinese-informal", "translate", "translate3d", "translateX", "translateY", "translateZ", "transparent", "ultra-condensed", "ultra-expanded", "underline", "up", "upper-alpha", "upper-armenian", "upper-greek", "upper-hexadecimal", "upper-latin", "upper-norwegian", "upper-roman", "uppercase", "urdu", "url", "var", "vertical", "vertical-text", "visible", "visibleFill", "visiblePainted", "visibleStroke", "visual", "w-resize", "wait", "wave", "wider", "window", "windowframe", "windowtext", "words", "wrap", "wrap-reverse", "x-large", "x-small", "xor", "xx-large", "xx-small"],
      w = t(y),
      k = r.concat(a).concat(n).concat(s).concat(d).concat(u).concat(b).concat(y);

  function v(e, t) {
      for (var r, o = !1; null != (r = e.next());) {
          if (o && "/" == r) {
              t.tokenize = null;
              break
          }
          o = "*" == r
      }
      return ["comment", "comment"]
  }
  e.registerHelper("hintWords", "css", k), e.defineMIME("text/css", {
      documentTypes: o,
      mediaTypes: i,
      mediaFeatures: l,
      mediaValueKeywords: c,
      propertyKeywords: p,
      nonStandardPropertyKeywords: m,
      fontProperties: h,
      counterDescriptors: g,
      colorKeywords: f,
      valueKeywords: w,
      tokenHooks: {
          "/": function(e, t) {
              return !!e.eat("*") && (t.tokenize = v, v(e, t))
          }
      },
      name: "css"
  }), e.defineMIME("text/x-scss", {
      mediaTypes: i,
      mediaFeatures: l,
      mediaValueKeywords: c,
      propertyKeywords: p,
      nonStandardPropertyKeywords: m,
      colorKeywords: f,
      valueKeywords: w,
      fontProperties: h,
      allowNested: !0,
      tokenHooks: {
          "/": function(e, t) {
              return e.eat("/") ? (e.skipToEnd(), ["comment", "comment"]) : e.eat("*") ? (t.tokenize = v, v(e, t)) : ["operator", "operator"]
          },
          ":": function(e) {
              return !!e.match(/\s*\{/) && [null, "{"]
          },
          $: function(e) {
              return e.match(/^[\w-]+/), e.match(/^\s*:/, !1) ? ["variable-2", "variable-definition"] : ["variable-2", "variable"]
          },
          "#": function(e) {
              return !!e.eat("{") && [null, "interpolation"]
          }
      },
      name: "css",
      helperType: "scss"
  }), e.defineMIME("text/x-less", {
      mediaTypes: i,
      mediaFeatures: l,
      mediaValueKeywords: c,
      propertyKeywords: p,
      nonStandardPropertyKeywords: m,
      colorKeywords: f,
      valueKeywords: w,
      fontProperties: h,
      allowNested: !0,
      tokenHooks: {
          "/": function(e, t) {
              return e.eat("/") ? (e.skipToEnd(), ["comment", "comment"]) : e.eat("*") ? (t.tokenize = v, v(e, t)) : ["operator", "operator"]
          },
          "@": function(e) {
              return e.eat("{") ? [null, "interpolation"] : !e.match(/^(charset|document|font-face|import|(-(moz|ms|o|webkit)-)?keyframes|media|namespace|page|supports)\b/, !1) && (e.eatWhile(/[\w\\\-]/), e.match(/^\s*:/, !1) ? ["variable-2", "variable-definition"] : ["variable-2", "variable"])
          },
          "&": function() {
              return ["atom", "atom"]
          }
      },
      name: "css",
      helperType: "less"
  }), e.defineMIME("text/x-gss", {
      documentTypes: o,
      mediaTypes: i,
      mediaFeatures: l,
      propertyKeywords: p,
      nonStandardPropertyKeywords: m,
      fontProperties: h,
      counterDescriptors: g,
      colorKeywords: f,
      valueKeywords: w,
      supportsAtComponent: !0,
      tokenHooks: {
          "/": function(e, t) {
              return !!e.eat("*") && (t.tokenize = v, v(e, t))
          }
      },
      name: "css",
      helperType: "gss"
  })
});;
(function(mod) {
  if (typeof exports == "object" && typeof module == "object") mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd) define(["../../lib/codemirror"], mod);
  else mod(CodeMirror)
})(function(CodeMirror) {
  "use strict";
  var htmlConfig = {
      autoSelfClosers: {
          'area': !0,
          'base': !0,
          'br': !0,
          'col': !0,
          'command': !0,
          'embed': !0,
          'frame': !0,
          'hr': !0,
          'img': !0,
          'input': !0,
          'keygen': !0,
          'link': !0,
          'meta': !0,
          'param': !0,
          'source': !0,
          'track': !0,
          'wbr': !0,
          'menuitem': !0
      },
      implicitlyClosed: {
          'dd': !0,
          'li': !0,
          'optgroup': !0,
          'option': !0,
          'p': !0,
          'rp': !0,
          'rt': !0,
          'tbody': !0,
          'td': !0,
          'tfoot': !0,
          'th': !0,
          'tr': !0
      },
      contextGrabbers: {
          'dd': {
              'dd': !0,
              'dt': !0
          },
          'dt': {
              'dd': !0,
              'dt': !0
          },
          'li': {
              'li': !0
          },
          'option': {
              'option': !0,
              'optgroup': !0
          },
          'optgroup': {
              'optgroup': !0
          },
          'p': {
              'address': !0,
              'article': !0,
              'aside': !0,
              'blockquote': !0,
              'dir': !0,
              'div': !0,
              'dl': !0,
              'fieldset': !0,
              'footer': !0,
              'form': !0,
              'h1': !0,
              'h2': !0,
              'h3': !0,
              'h4': !0,
              'h5': !0,
              'h6': !0,
              'header': !0,
              'hgroup': !0,
              'hr': !0,
              'menu': !0,
              'nav': !0,
              'ol': !0,
              'p': !0,
              'pre': !0,
              'section': !0,
              'table': !0,
              'ul': !0
          },
          'rp': {
              'rp': !0,
              'rt': !0
          },
          'rt': {
              'rp': !0,
              'rt': !0
          },
          'tbody': {
              'tbody': !0,
              'tfoot': !0
          },
          'td': {
              'td': !0,
              'th': !0
          },
          'tfoot': {
              'tbody': !0
          },
          'th': {
              'td': !0,
              'th': !0
          },
          'thead': {
              'tbody': !0,
              'tfoot': !0
          },
          'tr': {
              'tr': !0
          }
      },
      doNotIndent: {
          "pre": !0
      },
      allowUnquoted: !0,
      allowMissing: !0,
      caseFold: !0
  }
  var xmlConfig = {
      autoSelfClosers: {},
      implicitlyClosed: {},
      contextGrabbers: {},
      doNotIndent: {},
      allowUnquoted: !1,
      allowMissing: !1,
      caseFold: !1
  }
  CodeMirror.defineMode("xml", function(editorConf, config_) {
      var indentUnit = editorConf.indentUnit
      var config = {}
      var defaults = config_.htmlMode ? htmlConfig : xmlConfig
      for (var prop in defaults) config[prop] = defaults[prop]
      for (var prop in config_) config[prop] = config_[prop]
      var type, setStyle;

      function inText(stream, state) {
          function chain(parser) {
              state.tokenize = parser;
              return parser(stream, state)
          }
          var ch = stream.next();
          if (ch == "<") {
              if (stream.eat("!")) {
                  if (stream.eat("[")) {
                      if (stream.match("CDATA[")) return chain(inBlock("atom", "]]>"));
                      else return null
                  } else if (stream.match("--")) {
                      return chain(inBlock("comment", "-->"))
                  } else if (stream.match("DOCTYPE", !0, !0)) {
                      stream.eatWhile(/[\w\._\-]/);
                      return chain(doctype(1))
                  } else {
                      return null
                  }
              } else if (stream.eat("?")) {
                  stream.eatWhile(/[\w\._\-]/);
                  state.tokenize = inBlock("meta", "?>");
                  return "meta"
              } else {
                  type = stream.eat("/") ? "closeTag" : "openTag";
                  state.tokenize = inTag;
                  return "tag bracket"
              }
          } else if (ch == "&") {
              var ok;
              if (stream.eat("#")) {
                  if (stream.eat("x")) {
                      ok = stream.eatWhile(/[a-fA-F\d]/) && stream.eat(";")
                  } else {
                      ok = stream.eatWhile(/[\d]/) && stream.eat(";")
                  }
              } else {
                  ok = stream.eatWhile(/[\w\.\-:]/) && stream.eat(";")
              }
              return ok ? "atom" : "error"
          } else {
              stream.eatWhile(/[^&<]/);
              return null
          }
      }
      inText.isInText = !0;

      function inTag(stream, state) {
          var ch = stream.next();
          if (ch == ">" || (ch == "/" && stream.eat(">"))) {
              state.tokenize = inText;
              type = ch == ">" ? "endTag" : "selfcloseTag";
              return "tag bracket"
          } else if (ch == "=") {
              type = "equals";
              return null
          } else if (ch == "<") {
              state.tokenize = inText;
              state.state = baseState;
              state.tagName = state.tagStart = null;
              var next = state.tokenize(stream, state);
              return next ? next + " tag error" : "tag error"
          } else if (/[\'\"]/.test(ch)) {
              state.tokenize = inAttribute(ch);
              state.stringStartCol = stream.column();
              return state.tokenize(stream, state)
          } else {
              stream.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/);
              return "word"
          }
      }

      function inAttribute(quote) {
          var closure = function(stream, state) {
              while (!stream.eol()) {
                  if (stream.next() == quote) {
                      state.tokenize = inTag;
                      break
                  }
              }
              return "string"
          };
          closure.isInAttribute = !0;
          return closure
      }

      function inBlock(style, terminator) {
          return function(stream, state) {
              while (!stream.eol()) {
                  if (stream.match(terminator)) {
                      state.tokenize = inText;
                      break
                  }
                  stream.next()
              }
              return style
          }
      }

      function doctype(depth) {
          return function(stream, state) {
              var ch;
              while ((ch = stream.next()) != null) {
                  if (ch == "<") {
                      state.tokenize = doctype(depth + 1);
                      return state.tokenize(stream, state)
                  } else if (ch == ">") {
                      if (depth == 1) {
                          state.tokenize = inText;
                          break
                      } else {
                          state.tokenize = doctype(depth - 1);
                          return state.tokenize(stream, state)
                      }
                  }
              }
              return "meta"
          }
      }

      function Context(state, tagName, startOfLine) {
          this.prev = state.context;
          this.tagName = tagName;
          this.indent = state.indented;
          this.startOfLine = startOfLine;
          if (config.doNotIndent.hasOwnProperty(tagName) || (state.context && state.context.noIndent)) this.noIndent = !0
      }

      function popContext(state) {
          if (state.context) state.context = state.context.prev
      }

      function maybePopContext(state, nextTagName) {
          var parentTagName;
          while (!0) {
              if (!state.context) {
                  return
              }
              parentTagName = state.context.tagName;
              if (!config.contextGrabbers.hasOwnProperty(parentTagName) || !config.contextGrabbers[parentTagName].hasOwnProperty(nextTagName)) {
                  return
              }
              popContext(state)
          }
      }

      function baseState(type, stream, state) {
          if (type == "openTag") {
              state.tagStart = stream.column();
              return tagNameState
          } else if (type == "closeTag") {
              return closeTagNameState
          } else {
              return baseState
          }
      }

      function tagNameState(type, stream, state) {
          if (type == "word") {
              state.tagName = stream.current();
              setStyle = "tag";
              return attrState
          } else {
              setStyle = "error";
              return tagNameState
          }
      }

      function closeTagNameState(type, stream, state) {
          if (type == "word") {
              var tagName = stream.current();
              if (state.context && state.context.tagName != tagName && config.implicitlyClosed.hasOwnProperty(state.context.tagName)) popContext(state);
              if ((state.context && state.context.tagName == tagName) || config.matchClosing === !1) {
                  setStyle = "tag";
                  return closeState
              } else {
                  setStyle = "tag error";
                  return closeStateErr
              }
          } else {
              setStyle = "error";
              return closeStateErr
          }
      }

      function closeState(type, _stream, state) {
          if (type != "endTag") {
              setStyle = "error";
              return closeState
          }
          popContext(state);
          return baseState
      }

      function closeStateErr(type, stream, state) {
          setStyle = "error";
          return closeState(type, stream, state)
      }

      function attrState(type, _stream, state) {
          if (type == "word") {
              setStyle = "attribute";
              return attrEqState
          } else if (type == "endTag" || type == "selfcloseTag") {
              var tagName = state.tagName,
                  tagStart = state.tagStart;
              state.tagName = state.tagStart = null;
              if (type == "selfcloseTag" || config.autoSelfClosers.hasOwnProperty(tagName)) {
                  maybePopContext(state, tagName)
              } else {
                  maybePopContext(state, tagName);
                  state.context = new Context(state, tagName, tagStart == state.indented)
              }
              return baseState
          }
          setStyle = "error";
          return attrState
      }

      function attrEqState(type, stream, state) {
          if (type == "equals") return attrValueState;
          if (!config.allowMissing) setStyle = "error";
          return attrState(type, stream, state)
      }

      function attrValueState(type, stream, state) {
          if (type == "string") return attrContinuedState;
          if (type == "word" && config.allowUnquoted) {
              setStyle = "string";
              return attrState
          }
          setStyle = "error";
          return attrState(type, stream, state)
      }

      function attrContinuedState(type, stream, state) {
          if (type == "string") return attrContinuedState;
          return attrState(type, stream, state)
      }
      return {
          startState: function(baseIndent) {
              var state = {
                  tokenize: inText,
                  state: baseState,
                  indented: baseIndent || 0,
                  tagName: null,
                  tagStart: null,
                  context: null
              }
              if (baseIndent != null) state.baseIndent = baseIndent
              return state
          },
          token: function(stream, state) {
              if (!state.tagName && stream.sol()) state.indented = stream.indentation();
              if (stream.eatSpace()) return null;
              type = null;
              var style = state.tokenize(stream, state);
              if ((style || type) && style != "comment") {
                  setStyle = null;
                  state.state = state.state(type || style, stream, state);
                  if (setStyle) style = setStyle == "error" ? style + " error" : setStyle
              }
              return style
          },
          indent: function(state, textAfter, fullLine) {
              var context = state.context;
              if (state.tokenize.isInAttribute) {
                  if (state.tagStart == state.indented) return state.stringStartCol + 1;
                  else return state.indented + indentUnit
              }
              if (context && context.noIndent) return CodeMirror.Pass;
              if (state.tokenize != inTag && state.tokenize != inText) return fullLine ? fullLine.match(/^(\s*)/)[0].length : 0;
              if (state.tagName) {
                  if (config.multilineTagIndentPastTag !== !1) return state.tagStart + state.tagName.length + 2;
                  else return state.tagStart + indentUnit * (config.multilineTagIndentFactor || 1)
              }
              if (config.alignCDATA && /<!\[CDATA\[/.test(textAfter)) return 0;
              var tagAfter = textAfter && /^<(\/)?([\w_:\.-]*)/.exec(textAfter);
              if (tagAfter && tagAfter[1]) {
                  while (context) {
                      if (context.tagName == tagAfter[2]) {
                          context = context.prev;
                          break
                      } else if (config.implicitlyClosed.hasOwnProperty(context.tagName)) {
                          context = context.prev
                      } else {
                          break
                      }
                  }
              } else if (tagAfter) {
                  while (context) {
                      var grabbers = config.contextGrabbers[context.tagName];
                      if (grabbers && grabbers.hasOwnProperty(tagAfter[2])) context = context.prev;
                      else break
                  }
              }
              while (context && context.prev && !context.startOfLine) context = context.prev;
              if (context) return context.indent + indentUnit;
              else return state.baseIndent || 0
          },
          electricInput: /<\/[\s\w:]+>$/,
          blockCommentStart: "<!--",
          blockCommentEnd: "-->",
          configuration: config.htmlMode ? "html" : "xml",
          helperType: config.htmlMode ? "html" : "xml",
          skipAttribute: function(state) {
              if (state.state == attrValueState) state.state = attrState
          }
      }
  });
  CodeMirror.defineMIME("text/xml", "xml");
  CodeMirror.defineMIME("application/xml", "xml");
  if (!CodeMirror.mimeModes.hasOwnProperty("text/html")) CodeMirror.defineMIME("text/html", {
      name: "xml",
      htmlMode: !0
  })
});
/* https://sweetalert.js.org/ */
! function(t, e) {
  "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.swal = e() : t.swal = e()
}(this, function() {
  return function(t) {
      function e(o) {
          if (n[o]) return n[o].exports;
          var r = n[o] = {
              i: o,
              l: !1,
              exports: {}
          };
          return t[o].call(r.exports, r, r.exports, e), r.l = !0, r.exports
      }
      var n = {};
      return e.m = t, e.c = n, e.d = function(t, n, o) {
          e.o(t, n) || Object.defineProperty(t, n, {
              configurable: !1,
              enumerable: !0,
              get: o
          })
      }, e.n = function(t) {
          var n = t && t.__esModule ? function() {
              return t.default
          } : function() {
              return t
          };
          return e.d(n, "a", n), n
      }, e.o = function(t, e) {
          return Object.prototype.hasOwnProperty.call(t, e)
      }, e.p = "", e(e.s = 8)
  }([function(t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
          value: !0
      });
      var o = "swal-button";
      e.CLASS_NAMES = {
          MODAL: "swal-modal",
          OVERLAY: "swal-overlay",
          SHOW_MODAL: "swal-overlay--show-modal",
          MODAL_TITLE: "swal-title",
          MODAL_TEXT: "swal-text",
          ICON: "swal-icon",
          ICON_CUSTOM: "swal-icon--custom",
          CONTENT: "swal-content",
          FOOTER: "swal-footer",
          BUTTON_CONTAINER: "swal-button-container",
          BUTTON: o,
          CONFIRM_BUTTON: o + "--confirm",
          CANCEL_BUTTON: o + "--cancel",
          DANGER_BUTTON: o + "--danger",
          BUTTON_LOADING: o + "--loading",
          BUTTON_LOADER: o + "__loader"
      }, e.default = e.CLASS_NAMES
  }, function(t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
          value: !0
      }), e.getNode = function(t) {
          var e = "." + t;
          return document.querySelector(e)
      }, e.stringToNode = function(t) {
          var e = document.createElement("div");
          return e.innerHTML = t.trim(), e.firstChild
      }, e.insertAfter = function(t, e) {
          var n = e.nextSibling;
          e.parentNode.insertBefore(t, n)
      }, e.removeNode = function(t) {
          t.parentElement.removeChild(t)
      }, e.throwErr = function(t) {
          throw t = t.replace(/ +(?= )/g, ""), "SweetAlert: " + (t = t.trim())
      }, e.isPlainObject = function(t) {
          if ("[object Object]" !== Object.prototype.toString.call(t)) return !1;
          var e = Object.getPrototypeOf(t);
          return null === e || e === Object.prototype
      }, e.ordinalSuffixOf = function(t) {
          var e = t % 10,
              n = t % 100;
          return 1 === e && 11 !== n ? t + "st" : 2 === e && 12 !== n ? t + "nd" : 3 === e && 13 !== n ? t + "rd" : t + "th"
      }
  }, function(t, e, n) {
      "use strict";

      function o(t) {
          for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n])
      }
      Object.defineProperty(e, "__esModule", {
          value: !0
      }), o(n(25));
      var r = n(26);
      e.overlayMarkup = r.default, o(n(27)), o(n(28)), o(n(29));
      var i = n(0),
          a = i.default.MODAL_TITLE,
          s = i.default.MODAL_TEXT,
          c = i.default.ICON,
          l = i.default.FOOTER;
      e.iconMarkup = '\n  <div class="' + c + '"></div>', e.titleMarkup = '\n  <div class="' + a + '"></div>\n', e.textMarkup = '\n  <div class="' + s + '"></div>', e.footerMarkup = '\n  <div class="' + l + '"></div>\n'
  }, function(t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
          value: !0
      });
      var o = n(1);
      e.CONFIRM_KEY = "confirm", e.CANCEL_KEY = "cancel";
      var r = {
              visible: !0,
              text: null,
              value: null,
              className: "",
              closeModal: !0
          },
          i = Object.assign({}, r, {
              visible: !1,
              text: "Cancel",
              value: null
          }),
          a = Object.assign({}, r, {
              text: "OK",
              value: !0
          });
      e.defaultButtonList = {
          cancel: i,
          confirm: a
      };
      var s = function(t) {
              switch (t) {
                  case e.CONFIRM_KEY:
                      return a;
                  case e.CANCEL_KEY:
                      return i;
                  default:
                      var n = t.charAt(0).toUpperCase() + t.slice(1);
                      return Object.assign({}, r, {
                          text: n,
                          value: t
                      })
              }
          },
          c = function(t, e) {
              var n = s(t);
              return !0 === e ? Object.assign({}, n, {
                  visible: !0
              }) : "string" == typeof e ? Object.assign({}, n, {
                  visible: !0,
                  text: e
              }) : o.isPlainObject(e) ? Object.assign({
                  visible: !0
              }, n, e) : Object.assign({}, n, {
                  visible: !1
              })
          },
          l = function(t) {
              for (var e = {}, n = 0, o = Object.keys(t); n < o.length; n++) {
                  var r = o[n],
                      a = t[r],
                      s = c(r, a);
                  e[r] = s
              }
              return e.cancel || (e.cancel = i), e
          },
          u = function(t) {
              var n = {};
              switch (t.length) {
                  case 1:
                      n[e.CANCEL_KEY] = Object.assign({}, i, {
                          visible: !1
                      });
                      break;
                  case 2:
                      n[e.CANCEL_KEY] = c(e.CANCEL_KEY, t[0]), n[e.CONFIRM_KEY] = c(e.CONFIRM_KEY, t[1]);
                      break;
                  default:
                      o.throwErr("Invalid number of 'buttons' in array (" + t.length + ").\n      If you want more than 2 buttons, you need to use an object!")
              }
              return n
          };
      e.getButtonListOpts = function(t) {
          var n = e.defaultButtonList;
          return "string" == typeof t ? n[e.CONFIRM_KEY] = c(e.CONFIRM_KEY, t) : Array.isArray(t) ? n = u(t) : o.isPlainObject(t) ? n = l(t) : !0 === t ? n = u([!0, !0]) : !1 === t ? n = u([!1, !1]) : void 0 === t && (n = e.defaultButtonList), n
      }
  }, function(t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
          value: !0
      });
      var o = n(1),
          r = n(2),
          i = n(0),
          a = i.default.MODAL,
          s = i.default.OVERLAY,
          c = n(30),
          l = n(31),
          u = n(32),
          f = n(33);
      e.injectElIntoModal = function(t) {
          var e = o.getNode(a),
              n = o.stringToNode(t);
          return e.appendChild(n), n
      };
      var d = function(t) {
              t.className = a, t.textContent = ""
          },
          p = function(t, e) {
              d(t);
              var n = e.className;
              n && t.classList.add(n)
          };
      e.initModalContent = function(t) {
          var e = o.getNode(a);
          p(e, t), c.default(t.icon), l.initTitle(t.title), l.initText(t.text), f.default(t.content), u.default(t.buttons, t.dangerMode)
      };
      var m = function() {
          var t = o.getNode(s),
              e = o.stringToNode(r.modalMarkup);
          t.appendChild(e)
      };
      e.default = m
  }, function(t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
          value: !0
      });
      var o = n(3),
          r = {
              isOpen: !1,
              promise: null,
              actions: {},
              timer: null
          },
          i = Object.assign({}, r);
      e.resetState = function() {
          i = Object.assign({}, r)
      }, e.setActionValue = function(t) {
          if ("string" == typeof t) return a(o.CONFIRM_KEY, t);
          for (var e in t) a(e, t[e])
      };
      var a = function(t, e) {
          i.actions[t] || (i.actions[t] = {}), Object.assign(i.actions[t], {
              value: e
          })
      };
      e.setActionOptionsFor = function(t, e) {
          var n = (void 0 === e ? {} : e).closeModal,
              o = void 0 === n || n;
          Object.assign(i.actions[t], {
              closeModal: o
          })
      }, e.default = i
  }, function(t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
          value: !0
      });
      var o = n(1),
          r = n(3),
          i = n(0),
          a = i.default.OVERLAY,
          s = i.default.SHOW_MODAL,
          c = i.default.BUTTON,
          l = i.default.BUTTON_LOADING,
          u = n(5);
      e.openModal = function() {
          o.getNode(a).classList.add(s), u.default.isOpen = !0
      };
      var f = function() {
          o.getNode(a).classList.remove(s), u.default.isOpen = !1
      };
      e.onAction = function(t) {
          void 0 === t && (t = r.CANCEL_KEY);
          var e = u.default.actions[t],
              n = e.value;
          if (!1 === e.closeModal) {
              var i = c + "--" + t;
              o.getNode(i).classList.add(l)
          } else f();
          u.default.promise.resolve(n)
      }, e.getState = function() {
          var t = Object.assign({}, u.default);
          return delete t.promise, delete t.timer, t
      }, e.stopLoading = function() {
          for (var t = document.querySelectorAll("." + c), e = 0; e < t.length; e++) {
              t[e].classList.remove(l)
          }
      }
  }, function(t, e) {
      var n;
      n = function() {
          return this
      }();
      try {
          n = n || Function("return this")() || (0, eval)("this")
      } catch (t) {
          "object" == typeof window && (n = window)
      }
      t.exports = n
  }, function(t, e, n) {
      (function(e) {
          t.exports = e.sweetAlert = n(9)
      }).call(e, n(7))
  }, function(t, e, n) {
      (function(e) {
          t.exports = e.swal = n(10)
      }).call(e, n(7))
  }, function(t, e, n) {
      "undefined" != typeof window && n(11), n(16);
      var o = n(23).default;
      t.exports = o
  }, function(t, e, n) {
      var o = n(12);
      "string" == typeof o && (o = [
          [t.i, o, ""]
      ]);
      var r = {
          insertAt: "top"
      };
      r.transform = void 0;
      n(14)(o, r);
      o.locals && (t.exports = o.locals)
  }, function(t, e, n) {
      e = t.exports = n(13)(void 0), e.push([t.i, '.swal-icon--error{border-color:#f27474;animation:animateErrorIcon .5s}.swal-icon--error__x-mark{position:relative;display:block;animation:animateXMark .5s}.swal-icon--error__line{position:absolute;height:5px;width:47px;background-color:#f27474;display:block;top:37px;border-radius:2px}.swal-icon--error__line--left{transform:rotate(45deg);left:17px}.swal-icon--error__line--right{transform:rotate(-45deg);right:16px}@keyframes animateErrorIcon{0%{transform:rotateX(100deg);opacity:0}to{transform:rotateX(0deg);opacity:1}}@keyframes animateXMark{0%{transform:scale(.4);margin-top:26px;opacity:0}50%{transform:scale(.4);margin-top:26px;opacity:0}80%{transform:scale(1.15);margin-top:-6px}to{transform:scale(1);margin-top:0;opacity:1}}.swal-icon--warning{border-color:#f8bb86;animation:pulseWarning .75s infinite alternate}.swal-icon--warning__body{width:5px;height:47px;top:10px;border-radius:2px;margin-left:-2px}.swal-icon--warning__body,.swal-icon--warning__dot{position:absolute;left:50%;background-color:#f8bb86}.swal-icon--warning__dot{width:7px;height:7px;border-radius:50%;margin-left:-4px;bottom:-11px}@keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}.swal-icon--success{border-color:#a5dc86}.swal-icon--success:after,.swal-icon--success:before{content:"";border-radius:50%;position:absolute;width:60px;height:120px;background:#fff;transform:rotate(45deg)}.swal-icon--success:before{border-radius:120px 0 0 120px;top:-7px;left:-33px;transform:rotate(-45deg);transform-origin:60px 60px}.swal-icon--success:after{border-radius:0 120px 120px 0;top:-11px;left:30px;transform:rotate(-45deg);transform-origin:0 60px;animation:rotatePlaceholder 4.25s ease-in}.swal-icon--success__ring{width:80px;height:80px;border:4px solid hsla(98,55%,69%,.2);border-radius:50%;box-sizing:content-box;position:absolute;left:-4px;top:-4px;z-index:2}.swal-icon--success__hide-corners{width:5px;height:90px;background-color:#fff;padding:1px;position:absolute;left:28px;top:8px;z-index:1;transform:rotate(-45deg)}.swal-icon--success__line{height:5px;background-color:#a5dc86;display:block;border-radius:2px;position:absolute;z-index:2}.swal-icon--success__line--tip{width:25px;left:14px;top:46px;transform:rotate(45deg);animation:animateSuccessTip .75s}.swal-icon--success__line--long{width:47px;right:8px;top:38px;transform:rotate(-45deg);animation:animateSuccessLong .75s}@keyframes rotatePlaceholder{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}to{transform:rotate(-405deg)}}@keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}.swal-icon--info{border-color:#c9dae1}.swal-icon--info:before{width:5px;height:29px;bottom:17px;border-radius:2px;margin-left:-2px}.swal-icon--info:after,.swal-icon--info:before{content:"";position:absolute;left:50%;background-color:#c9dae1}.swal-icon--info:after{width:7px;height:7px;border-radius:50%;margin-left:-3px;top:19px}.swal-icon{width:80px;height:80px;border-width:4px;border-style:solid;border-radius:50%;padding:0;position:relative;box-sizing:content-box;margin:20px auto}.swal-icon:first-child{margin-top:32px}.swal-icon--custom{width:auto;height:auto;max-width:100%;border:none;border-radius:0}.swal-icon img{max-width:100%;max-height:100%}.swal-title{color:rgba(0,0,0,.65);font-weight:600;text-transform:none;position:relative;display:block;padding:13px 16px;font-size:27px;line-height:normal;text-align:center;margin-bottom:0}.swal-title:first-child{margin-top:26px}.swal-title:not(:first-child){padding-bottom:0}.swal-title:not(:last-child){margin-bottom:13px}.swal-text{font-size:16px;position:relative;float:none;line-height:normal;vertical-align:top;text-align:left;display:inline-block;margin:0;padding:0 10px;font-weight:400;color:rgba(0,0,0,.64);max-width:calc(100% - 20px);overflow-wrap:break-word;box-sizing:border-box}.swal-text:first-child{margin-top:45px}.swal-text:last-child{margin-bottom:45px}.swal-footer{text-align:right;padding-top:13px;margin-top:13px;padding:13px 16px;border-radius:inherit;border-top-left-radius:0;border-top-right-radius:0}.swal-button-container{margin:5px;display:inline-block;position:relative}.swal-button{background-color:#1779ba;color:#fefefe;border:none;box-shadow:none;font-weight:600;font-size:14px;padding:10px 24px;margin:0;cursor:pointer}.swal-button[disabled]{opacity:.5;cursor:default}.swal-button::-moz-focus-inner{border:0}.swal-button--cancel{color:#555;background-color:#efefef}.swal-button--cancel:not([disabled]):hover{background-color:#e8e8e8}.swal-button--cancel:active{background-color:#d7d7d7}.swal-button--cancel:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(116,136,150,.29)}.swal-button--danger{background-color:#e64942}.swal-button--danger:not([disabled]):hover{background-color:#df4740}.swal-button--danger:active{background-color:#cf423b}.swal-button--danger:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(165,43,43,.29)}.swal-content{padding:0 20px;margin-top:20px;font-size:medium}.swal-content:last-child{margin-bottom:20px}.swal-content__input,.swal-content__textarea{background-color:#fff;border:none;font-size:14px;display:block;box-sizing:border-box;width:100%;border:1px solid rgba(0,0,0,.14);padding:10px 13px;border-radius:2px;transition:border-color .2s}.swal-content__input:focus,.swal-content__textarea:focus{outline:none;border-color:#6db8ff}.swal-content__textarea{resize:vertical}.swal-button--loading{color:transparent}.swal-button--loading~.swal-button__loader{opacity:1}.swal-button__loader{position:absolute;height:auto;width:43px;z-index:2;left:50%;top:50%;transform:translateX(-50%) translateY(-50%);text-align:center;pointer-events:none;opacity:0}.swal-button__loader div{display:inline-block;float:none;vertical-align:baseline;width:9px;height:9px;padding:0;border:none;margin:2px;opacity:.4;border-radius:7px;background-color:hsla(0,0%,100%,.9);transition:background .2s;animation:swal-loading-anim 1s infinite}.swal-button__loader div:nth-child(3n+2){animation-delay:.15s}.swal-button__loader div:nth-child(3n+3){animation-delay:.3s}@keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}.swal-overlay{position:fixed;top:0;bottom:0;left:0;right:0;text-align:center;font-size:0;overflow-y:auto;background-color:rgba(0,0,0,.4);z-index:10000;pointer-events:none;opacity:0;transition:opacity .3s}.swal-overlay:before{content:" ";display:inline-block;vertical-align:middle;height:100%}.swal-overlay--show-modal{opacity:1;pointer-events:auto}.swal-overlay--show-modal .swal-modal{opacity:1;pointer-events:auto;box-sizing:border-box;animation:showSweetAlert .3s;will-change:transform}.swal-modal{width:478px;opacity:0;pointer-events:none;background-color:#fff;text-align:center;border-radius:5px;position:static;margin:20px auto;display:inline-block;vertical-align:middle;transform:scale(1);transform-origin:50% 50%;z-index:10001;transition:opacity .2s;transition:transform .3s,opacity .2s;transition:transform .3s,opacity .2s}@media (max-width:500px){.swal-modal{width:calc(100% - 20px)}}@keyframes showSweetAlert{0%{transform:scale(1)}1%{transform:scale(.5)}45%{transform:scale(1.05)}80%{transform:scale(.95)}to{transform:scale(1)}}', ""])
  }, function(t, e) {
      function n(t, e) {
          var n = t[1] || "",
              r = t[3];
          if (!r) return n;
          if (e && "function" == typeof btoa) {
              var i = o(r);
              return [n].concat(r.sources.map(function(t) {
                  return "/*# sourceURL=" + r.sourceRoot + t + " */"
              })).concat([i]).join("\n")
          }
          return [n].join("\n")
      }

      function o(t) {
          return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(t)))) + " */"
      }
      t.exports = function(t) {
          var e = [];
          return e.toString = function() {
              return this.map(function(e) {
                  var o = n(e, t);
                  return e[2] ? "@media " + e[2] + "{" + o + "}" : o
              }).join("")
          }, e.i = function(t, n) {
              "string" == typeof t && (t = [
                  [null, t, ""]
              ]);
              for (var o = {}, r = 0; r < this.length; r++) {
                  var i = this[r][0];
                  "number" == typeof i && (o[i] = !0)
              }
              for (r = 0; r < t.length; r++) {
                  var a = t[r];
                  "number" == typeof a[0] && o[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), e.push(a))
              }
          }, e
      }
  }, function(t, e, n) {
      function o(t, e) {
          for (var n = 0; n < t.length; n++) {
              var o = t[n],
                  r = m[o.id];
              if (r) {
                  r.refs++;
                  for (var i = 0; i < r.parts.length; i++) r.parts[i](o.parts[i]);
                  for (; i < o.parts.length; i++) r.parts.push(u(o.parts[i], e))
              } else {
                  for (var a = [], i = 0; i < o.parts.length; i++) a.push(u(o.parts[i], e));
                  m[o.id] = {
                      id: o.id,
                      refs: 1,
                      parts: a
                  }
              }
          }
      }

      function r(t, e) {
          for (var n = [], o = {}, r = 0; r < t.length; r++) {
              var i = t[r],
                  a = e.base ? i[0] + e.base : i[0],
                  s = i[1],
                  c = i[2],
                  l = i[3],
                  u = {
                      css: s,
                      media: c,
                      sourceMap: l
                  };
              o[a] ? o[a].parts.push(u) : n.push(o[a] = {
                  id: a,
                  parts: [u]
              })
          }
          return n
      }

      function i(t, e) {
          var n = v(t.insertInto);
          if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
          var o = w[w.length - 1];
          if ("top" === t.insertAt) o ? o.nextSibling ? n.insertBefore(e, o.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild), w.push(e);
          else {
              if ("bottom" !== t.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
              n.appendChild(e)
          }
      }

      function a(t) {
          if (null === t.parentNode) return !1;
          t.parentNode.removeChild(t);
          var e = w.indexOf(t);
          e >= 0 && w.splice(e, 1)
      }

      function s(t) {
          var e = document.createElement("style");
          return t.attrs.type = "text/css", l(e, t.attrs), i(t, e), e
      }

      function c(t) {
          var e = document.createElement("link");
          return t.attrs.type = "text/css", t.attrs.rel = "stylesheet", l(e, t.attrs), i(t, e), e
      }

      function l(t, e) {
          Object.keys(e).forEach(function(n) {
              t.setAttribute(n, e[n])
          })
      }

      function u(t, e) {
          var n, o, r, i;
          if (e.transform && t.css) {
              if (!(i = e.transform(t.css))) return function() {};
              t.css = i
          }
          if (e.singleton) {
              var l = h++;
              n = g || (g = s(e)), o = f.bind(null, n, l, !1), r = f.bind(null, n, l, !0)
          } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = c(e), o = p.bind(null, n, e), r = function() {
              a(n), n.href && URL.revokeObjectURL(n.href)
          }) : (n = s(e), o = d.bind(null, n), r = function() {
              a(n)
          });
          return o(t),
              function(e) {
                  if (e) {
                      if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                      o(t = e)
                  } else r()
              }
      }

      function f(t, e, n, o) {
          var r = n ? "" : o.css;
          if (t.styleSheet) t.styleSheet.cssText = x(e, r);
          else {
              var i = document.createTextNode(r),
                  a = t.childNodes;
              a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(i, a[e]) : t.appendChild(i)
          }
      }

      function d(t, e) {
          var n = e.css,
              o = e.media;
          if (o && t.setAttribute("media", o), t.styleSheet) t.styleSheet.cssText = n;
          else {
              for (; t.firstChild;) t.removeChild(t.firstChild);
              t.appendChild(document.createTextNode(n))
          }
      }

      function p(t, e, n) {
          var o = n.css,
              r = n.sourceMap,
              i = void 0 === e.convertToAbsoluteUrls && r;
          (e.convertToAbsoluteUrls || i) && (o = y(o)), r && (o += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */");
          var a = new Blob([o], {
                  type: "text/css"
              }),
              s = t.href;
          t.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s)
      }
      var m = {},
          b = function(t) {
              var e;
              return function() {
                  return void 0 === e && (e = t.apply(this, arguments)), e
              }
          }(function() {
              return window && document && document.all && !window.atob
          }),
          v = function(t) {
              var e = {};
              return function(n) {
                  return void 0 === e[n] && (e[n] = t.call(this, n)), e[n]
              }
          }(function(t) {
              return document.querySelector(t)
          }),
          g = null,
          h = 0,
          w = [],
          y = n(15);
      t.exports = function(t, e) {
          if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
          e = e || {}, e.attrs = "object" == typeof e.attrs ? e.attrs : {}, e.singleton || (e.singleton = b()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");
          var n = r(t, e);
          return o(n, e),
              function(t) {
                  for (var i = [], a = 0; a < n.length; a++) {
                      var s = n[a],
                          c = m[s.id];
                      c.refs--, i.push(c)
                  }
                  if (t) {
                      o(r(t, e), e)
                  }
                  for (var a = 0; a < i.length; a++) {
                      var c = i[a];
                      if (0 === c.refs) {
                          for (var l = 0; l < c.parts.length; l++) c.parts[l]();
                          delete m[c.id]
                      }
                  }
              }
      };
      var x = function() {
          var t = [];
          return function(e, n) {
              return t[e] = n, t.filter(Boolean).join("\n")
          }
      }()
  }, function(t, e) {
      t.exports = function(t) {
          var e = "undefined" != typeof window && window.location;
          if (!e) throw new Error("fixUrls requires window.location");
          if (!t || "string" != typeof t) return t;
          var n = e.protocol + "//" + e.host,
              o = n + e.pathname.replace(/\/[^\/]*$/, "/");
          return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(t, e) {
              var r = e.trim().replace(/^"(.*)"$/, function(t, e) {
                  return e
              }).replace(/^'(.*)'$/, function(t, e) {
                  return e
              });
              if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(r)) return t;
              var i;
              return i = 0 === r.indexOf("//") ? r : 0 === r.indexOf("/") ? n + r : o + r.replace(/^\.\//, ""), "url(" + JSON.stringify(i) + ")"
          })
      }
  }, function(t, e, n) {
      var o = n(17);
      "undefined" == typeof window || window.Promise || (window.Promise = o), n(21), String.prototype.includes || (String.prototype.includes = function(t, e) {
          "use strict";
          return "number" != typeof e && (e = 0), !(e + t.length > this.length) && -1 !== this.indexOf(t, e)
      }), Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
          value: function(t, e) {
              if (null == this) throw new TypeError('"this" is null or not defined');
              var n = Object(this),
                  o = n.length >>> 0;
              if (0 === o) return !1;
              for (var r = 0 | e, i = Math.max(r >= 0 ? r : o - Math.abs(r), 0); i < o;) {
                  if (function(t, e) {
                          return t === e || "number" == typeof t && "number" == typeof e && isNaN(t) && isNaN(e)
                      }(n[i], t)) return !0;
                  i++
              }
              return !1
          }
      }), "undefined" != typeof window && function(t) {
          t.forEach(function(t) {
              t.hasOwnProperty("remove") || Object.defineProperty(t, "remove", {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  value: function() {
                      this.parentNode.removeChild(this)
                  }
              })
          })
      }([Element.prototype, CharacterData.prototype, DocumentType.prototype])
  }, function(t, e, n) {
      (function(e) {
          ! function(n) {
              function o() {}

              function r(t, e) {
                  return function() {
                      t.apply(e, arguments)
                  }
              }

              function i(t) {
                  if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
                  if ("function" != typeof t) throw new TypeError("not a function");
                  this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], f(t, this)
              }

              function a(t, e) {
                  for (; 3 === t._state;) t = t._value;
                  if (0 === t._state) return void t._deferreds.push(e);
                  t._handled = !0, i._immediateFn(function() {
                      var n = 1 === t._state ? e.onFulfilled : e.onRejected;
                      if (null === n) return void(1 === t._state ? s : c)(e.promise, t._value);
                      var o;
                      try {
                          o = n(t._value)
                      } catch (t) {
                          return void c(e.promise, t)
                      }
                      s(e.promise, o)
                  })
              }

              function s(t, e) {
                  try {
                      if (e === t) throw new TypeError("A promise cannot be resolved with itself.");
                      if (e && ("object" == typeof e || "function" == typeof e)) {
                          var n = e.then;
                          if (e instanceof i) return t._state = 3, t._value = e, void l(t);
                          if ("function" == typeof n) return void f(r(n, e), t)
                      }
                      t._state = 1, t._value = e, l(t)
                  } catch (e) {
                      c(t, e)
                  }
              }

              function c(t, e) {
                  t._state = 2, t._value = e, l(t)
              }

              function l(t) {
                  2 === t._state && 0 === t._deferreds.length && i._immediateFn(function() {
                      t._handled || i._unhandledRejectionFn(t._value)
                  });
                  for (var e = 0, n = t._deferreds.length; e < n; e++) a(t, t._deferreds[e]);
                  t._deferreds = null
              }

              function u(t, e, n) {
                  this.onFulfilled = "function" == typeof t ? t : null, this.onRejected = "function" == typeof e ? e : null, this.promise = n
              }

              function f(t, e) {
                  var n = !1;
                  try {
                      t(function(t) {
                          n || (n = !0, s(e, t))
                      }, function(t) {
                          n || (n = !0, c(e, t))
                      })
                  } catch (t) {
                      if (n) return;
                      n = !0, c(e, t)
                  }
              }
              var d = setTimeout;
              i.prototype.catch = function(t) {
                  return this.then(null, t)
              }, i.prototype.then = function(t, e) {
                  var n = new this.constructor(o);
                  return a(this, new u(t, e, n)), n
              }, i.all = function(t) {
                  var e = Array.prototype.slice.call(t);
                  return new i(function(t, n) {
                      function o(i, a) {
                          try {
                              if (a && ("object" == typeof a || "function" == typeof a)) {
                                  var s = a.then;
                                  if ("function" == typeof s) return void s.call(a, function(t) {
                                      o(i, t)
                                  }, n)
                              }
                              e[i] = a, 0 == --r && t(e)
                          } catch (t) {
                              n(t)
                          }
                      }
                      if (0 === e.length) return t([]);
                      for (var r = e.length, i = 0; i < e.length; i++) o(i, e[i])
                  })
              }, i.resolve = function(t) {
                  return t && "object" == typeof t && t.constructor === i ? t : new i(function(e) {
                      e(t)
                  })
              }, i.reject = function(t) {
                  return new i(function(e, n) {
                      n(t)
                  })
              }, i.race = function(t) {
                  return new i(function(e, n) {
                      for (var o = 0, r = t.length; o < r; o++) t[o].then(e, n)
                  })
              }, i._immediateFn = "function" == typeof e && function(t) {
                  e(t)
              } || function(t) {
                  d(t, 0)
              }, i._unhandledRejectionFn = function(t) {
                  "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t)
              }, i._setImmediateFn = function(t) {
                  i._immediateFn = t
              }, i._setUnhandledRejectionFn = function(t) {
                  i._unhandledRejectionFn = t
              }, void 0 !== t && t.exports ? t.exports = i : n.Promise || (n.Promise = i)
          }(this)
      }).call(e, n(18).setImmediate)
  }, function(t, e, n) {
      function o(t, e) {
          this._id = t, this._clearFn = e
      }
      var r = Function.prototype.apply;
      e.setTimeout = function() {
          return new o(r.call(setTimeout, window, arguments), clearTimeout)
      }, e.setInterval = function() {
          return new o(r.call(setInterval, window, arguments), clearInterval)
      }, e.clearTimeout = e.clearInterval = function(t) {
          t && t.close()
      }, o.prototype.unref = o.prototype.ref = function() {}, o.prototype.close = function() {
          this._clearFn.call(window, this._id)
      }, e.enroll = function(t, e) {
          clearTimeout(t._idleTimeoutId), t._idleTimeout = e
      }, e.unenroll = function(t) {
          clearTimeout(t._idleTimeoutId), t._idleTimeout = -1
      }, e._unrefActive = e.active = function(t) {
          clearTimeout(t._idleTimeoutId);
          var e = t._idleTimeout;
          e >= 0 && (t._idleTimeoutId = setTimeout(function() {
              t._onTimeout && t._onTimeout()
          }, e))
      }, n(19), e.setImmediate = setImmediate, e.clearImmediate = clearImmediate
  }, function(t, e, n) {
      (function(t, e) {
          ! function(t, n) {
              "use strict";

              function o(t) {
                  "function" != typeof t && (t = new Function("" + t));
                  for (var e = new Array(arguments.length - 1), n = 0; n < e.length; n++) e[n] = arguments[n + 1];
                  var o = {
                      callback: t,
                      args: e
                  };
                  return l[c] = o, s(c), c++
              }

              function r(t) {
                  delete l[t]
              }

              function i(t) {
                  var e = t.callback,
                      o = t.args;
                  switch (o.length) {
                      case 0:
                          e();
                          break;
                      case 1:
                          e(o[0]);
                          break;
                      case 2:
                          e(o[0], o[1]);
                          break;
                      case 3:
                          e(o[0], o[1], o[2]);
                          break;
                      default:
                          e.apply(n, o)
                  }
              }

              function a(t) {
                  if (u) setTimeout(a, 0, t);
                  else {
                      var e = l[t];
                      if (e) {
                          u = !0;
                          try {
                              i(e)
                          } finally {
                              r(t), u = !1
                          }
                      }
                  }
              }
              if (!t.setImmediate) {
                  var s, c = 1,
                      l = {},
                      u = !1,
                      f = t.document,
                      d = Object.getPrototypeOf && Object.getPrototypeOf(t);
                  d = d && d.setTimeout ? d : t, "[object process]" === {}.toString.call(t.process) ? function() {
                      s = function(t) {
                          e.nextTick(function() {
                              a(t)
                          })
                      }
                  }() : function() {
                      if (t.postMessage && !t.importScripts) {
                          var e = !0,
                              n = t.onmessage;
                          return t.onmessage = function() {
                              e = !1
                          }, t.postMessage("", "*"), t.onmessage = n, e
                      }
                  }() ? function() {
                      var e = "setImmediate$" + Math.random() + "$",
                          n = function(n) {
                              n.source === t && "string" == typeof n.data && 0 === n.data.indexOf(e) && a(+n.data.slice(e.length))
                          };
                      t.addEventListener ? t.addEventListener("message", n, !1) : t.attachEvent("onmessage", n), s = function(n) {
                          t.postMessage(e + n, "*")
                      }
                  }() : t.MessageChannel ? function() {
                      var t = new MessageChannel;
                      t.port1.onmessage = function(t) {
                          a(t.data)
                      }, s = function(e) {
                          t.port2.postMessage(e)
                      }
                  }() : f && "onreadystatechange" in f.createElement("script") ? function() {
                      var t = f.documentElement;
                      s = function(e) {
                          var n = f.createElement("script");
                          n.onreadystatechange = function() {
                              a(e), n.onreadystatechange = null, t.removeChild(n), n = null
                          }, t.appendChild(n)
                      }
                  }() : function() {
                      s = function(t) {
                          setTimeout(a, 0, t)
                      }
                  }(), d.setImmediate = o, d.clearImmediate = r
              }
          }("undefined" == typeof self ? void 0 === t ? this : t : self)
      }).call(e, n(7), n(20))
  }, function(t, e) {
      function n() {
          throw new Error("setTimeout has not been defined")
      }

      function o() {
          throw new Error("clearTimeout has not been defined")
      }

      function r(t) {
          if (u === setTimeout) return setTimeout(t, 0);
          if ((u === n || !u) && setTimeout) return u = setTimeout, setTimeout(t, 0);
          try {
              return u(t, 0)
          } catch (e) {
              try {
                  return u.call(null, t, 0)
              } catch (e) {
                  return u.call(this, t, 0)
              }
          }
      }

      function i(t) {
          if (f === clearTimeout) return clearTimeout(t);
          if ((f === o || !f) && clearTimeout) return f = clearTimeout, clearTimeout(t);
          try {
              return f(t)
          } catch (e) {
              try {
                  return f.call(null, t)
              } catch (e) {
                  return f.call(this, t)
              }
          }
      }

      function a() {
          b && p && (b = !1, p.length ? m = p.concat(m) : v = -1, m.length && s())
      }

      function s() {
          if (!b) {
              var t = r(a);
              b = !0;
              for (var e = m.length; e;) {
                  for (p = m, m = []; ++v < e;) p && p[v].run();
                  v = -1, e = m.length
              }
              p = null, b = !1, i(t)
          }
      }

      function c(t, e) {
          this.fun = t, this.array = e
      }

      function l() {}
      var u, f, d = t.exports = {};
      ! function() {
          try {
              u = "function" == typeof setTimeout ? setTimeout : n
          } catch (t) {
              u = n
          }
          try {
              f = "function" == typeof clearTimeout ? clearTimeout : o
          } catch (t) {
              f = o
          }
      }();
      var p, m = [],
          b = !1,
          v = -1;
      d.nextTick = function(t) {
          var e = new Array(arguments.length - 1);
          if (arguments.length > 1)
              for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
          m.push(new c(t, e)), 1 !== m.length || b || r(s)
      }, c.prototype.run = function() {
          this.fun.apply(null, this.array)
      }, d.title = "browser", d.browser = !0, d.env = {}, d.argv = [], d.version = "", d.versions = {}, d.on = l, d.addListener = l, d.once = l, d.off = l, d.removeListener = l, d.removeAllListeners = l, d.emit = l, d.prependListener = l, d.prependOnceListener = l, d.listeners = function(t) {
          return []
      }, d.binding = function(t) {
          throw new Error("process.binding is not supported")
      }, d.cwd = function() {
          return "/"
      }, d.chdir = function(t) {
          throw new Error("process.chdir is not supported")
      }, d.umask = function() {
          return 0
      }
  }, function(t, e, n) {
      "use strict";
      n(22).polyfill()
  }, function(t, e, n) {
      "use strict";

      function o(t, e) {
          if (void 0 === t || null === t) throw new TypeError("Cannot convert first argument to object");
          for (var n = Object(t), o = 1; o < arguments.length; o++) {
              var r = arguments[o];
              if (void 0 !== r && null !== r)
                  for (var i = Object.keys(Object(r)), a = 0, s = i.length; a < s; a++) {
                      var c = i[a],
                          l = Object.getOwnPropertyDescriptor(r, c);
                      void 0 !== l && l.enumerable && (n[c] = r[c])
                  }
          }
          return n
      }

      function r() {
          Object.assign || Object.defineProperty(Object, "assign", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: o
          })
      }
      t.exports = {
          assign: o,
          polyfill: r
      }
  }, function(t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
          value: !0
      });
      var o = n(24),
          r = n(6),
          i = n(5),
          a = n(36),
          s = function() {
              for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
              if ("undefined" != typeof window) {
                  var n = a.getOpts.apply(void 0, t);
                  return new Promise(function(t, e) {
                      i.default.promise = {
                          resolve: t,
                          reject: e
                      }, o.default(n), setTimeout(function() {
                          r.openModal()
                      })
                  })
              }
          };
      s.close = r.onAction, s.getState = r.getState, s.setActionValue = i.setActionValue, s.stopLoading = r.stopLoading, s.setDefaults = a.setDefaults, e.default = s
  }, function(t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
          value: !0
      });
      var o = n(1),
          r = n(0),
          i = r.default.MODAL,
          a = n(4),
          s = n(34),
          c = n(35),
          l = n(1);
      e.init = function(t) {
          o.getNode(i) || (document.body || l.throwErr("You can only use SweetAlert AFTER the DOM has loaded!"), s.default(), a.default()), a.initModalContent(t), c.default(t)
      }, e.default = e.init
  }, function(t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
          value: !0
      });
      var o = n(0),
          r = o.default.MODAL;
      e.modalMarkup = '\n  <div class="' + r + '" role="dialog" aria-modal="true"></div>', e.default = e.modalMarkup
  }, function(t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
          value: !0
      });
      var o = n(0),
          r = o.default.OVERLAY,
          i = '<div \n    class="' + r + '"\n    tabIndex="-1">\n  </div>';
      e.default = i
  }, function(t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
          value: !0
      });
      var o = n(0),
          r = o.default.ICON;
      e.errorIconMarkup = function() {
          var t = r + "--error",
              e = t + "__line";
          return '\n    <div class="' + t + '__x-mark">\n      <span class="' + e + " " + e + '--left"></span>\n      <span class="' + e + " " + e + '--right"></span>\n    </div>\n  '
      }, e.warningIconMarkup = function() {
          var t = r + "--warning";
          return '\n    <span class="' + t + '__body">\n      <span class="' + t + '__dot"></span>\n    </span>\n  '
      }, e.successIconMarkup = function() {
          var t = r + "--success";
          return '\n    <span class="' + t + "__line " + t + '__line--long"></span>\n    <span class="' + t + "__line " + t + '__line--tip"></span>\n\n    <div class="' + t + '__ring"></div>\n    <div class="' + t + '__hide-corners"></div>\n  '
      }
  }, function(t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
          value: !0
      });
      var o = n(0),
          r = o.default.CONTENT;
      e.contentMarkup = '\n  <div class="' + r + '">\n\n  </div>\n'
  }, function(t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
          value: !0
      });
      var o = n(0),
          r = o.default.BUTTON_CONTAINER,
          i = o.default.BUTTON,
          a = o.default.BUTTON_LOADER;
      e.buttonMarkup = '\n  <div class="' + r + '">\n\n    <button\n      class="' + i + '"\n    ></button>\n\n    <div class="' + a + '">\n      <div></div>\n      <div></div>\n      <div></div>\n    </div>\n\n  </div>\n'
  }, function(t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
          value: !0
      });
      var o = n(4),
          r = n(2),
          i = n(0),
          a = i.default.ICON,
          s = i.default.ICON_CUSTOM,
          c = ["error", "warning", "success", "info"],
          l = {
              error: r.errorIconMarkup(),
              warning: r.warningIconMarkup(),
              success: r.successIconMarkup()
          },
          u = function(t, e) {
              var n = a + "--" + t;
              e.classList.add(n);
              var o = l[t];
              o && (e.innerHTML = o)
          },
          f = function(t, e) {
              e.classList.add(s);
              var n = document.createElement("img");
              n.src = t, e.appendChild(n)
          },
          d = function(t) {
              if (t) {
                  var e = o.injectElIntoModal(r.iconMarkup);
                  c.includes(t) ? u(t, e) : f(t, e)
              }
          };
      e.default = d
  }, function(t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
          value: !0
      });
      var o = n(2),
          r = n(4),
          i = function(t) {
              navigator.userAgent.includes("AppleWebKit") && (t.style.display = "none", t.offsetHeight, t.style.display = "")
          };
      e.initTitle = function(t) {
          if (t) {
              var e = r.injectElIntoModal(o.titleMarkup);
              e.textContent = t, i(e)
          }
      }, e.initText = function(t) {
          if (t) {
              var e = document.createDocumentFragment();
              t.split("\n").forEach(function(t, n, o) {
                  e.appendChild(document.createTextNode(t)), n < o.length - 1 && e.appendChild(document.createElement("br"))
              });
              var n = r.injectElIntoModal(o.textMarkup);
              n.appendChild(e), i(n)
          }
      }
  }, function(t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
          value: !0
      });
      var o = n(1),
          r = n(4),
          i = n(0),
          a = i.default.BUTTON,
          s = i.default.DANGER_BUTTON,
          c = n(3),
          l = n(2),
          u = n(6),
          f = n(5),
          d = function(t, e, n) {
              var r = e.text,
                  i = e.value,
                  d = e.className,
                  p = e.closeModal,
                  m = o.stringToNode(l.buttonMarkup),
                  b = m.querySelector("." + a),
                  v = a + "--" + t;
              if (b.classList.add(v), d) {
                  (Array.isArray(d) ? d : d.split(" ")).filter(function(t) {
                      return t.length > 0
                  }).forEach(function(t) {
                      b.classList.add(t)
                  })
              }
              n && t === c.CONFIRM_KEY && b.classList.add(s), b.textContent = r;
              var g = {};
              return g[t] = i, f.setActionValue(g), f.setActionOptionsFor(t, {
                  closeModal: p
              }), b.addEventListener("click", function() {
                  return u.onAction(t)
              }), m
          },
          p = function(t, e) {
              var n = r.injectElIntoModal(l.footerMarkup);
              for (var o in t) {
                  var i = t[o],
                      a = d(o, i, e);
                  i.visible && n.appendChild(a)
              }
              0 === n.children.length && n.remove()
          };
      e.default = p
  }, function(t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
          value: !0
      });
      var o = n(3),
          r = n(4),
          i = n(2),
          a = n(5),
          s = n(6),
          c = n(0),
          l = c.default.CONTENT,
          u = function(t) {
              t.addEventListener("input", function(t) {
                  var e = t.target,
                      n = e.value;
                  a.setActionValue(n)
              }), t.addEventListener("keyup", function(t) {
                  if ("Enter" === t.key) return s.onAction(o.CONFIRM_KEY)
              }), setTimeout(function() {
                  t.focus(), a.setActionValue("")
              }, 0)
          },
          f = function(t, e, n) {
              var o = document.createElement(e),
                  r = l + "__" + e;
              o.classList.add(r);
              for (var i in n) {
                  var a = n[i];
                  o[i] = a
              }
              "input" === e && u(o), t.appendChild(o)
          },
          d = function(t) {
              if (t) {
                  var e = r.injectElIntoModal(i.contentMarkup),
                      n = t.element,
                      o = t.attributes;
                  "string" == typeof n ? f(e, n, o) : e.appendChild(n)
              }
          };
      e.default = d
  }, function(t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
          value: !0
      });
      var o = n(1),
          r = n(2),
          i = function() {
              var t = o.stringToNode(r.overlayMarkup);
              document.body.appendChild(t)
          };
      e.default = i
  }, function(t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
          value: !0
      });
      var o = n(5),
          r = n(6),
          i = n(1),
          a = n(3),
          s = n(0),
          c = s.default.MODAL,
          l = s.default.BUTTON,
          u = s.default.OVERLAY,
          f = function(t) {
              t.preventDefault(), v()
          },
          d = function(t) {
              t.preventDefault(), g()
          },
          p = function(t) {
              if (o.default.isOpen) switch (t.key) {
                  case "Escape":
                      return r.onAction(a.CANCEL_KEY)
              }
          },
          m = function(t) {
              if (o.default.isOpen) switch (t.key) {
                  case "Tab":
                      return f(t)
              }
          },
          b = function(t) {
              if (o.default.isOpen) return "Tab" === t.key && t.shiftKey ? d(t) : void 0
          },
          v = function() {
              var t = i.getNode(l);
              t && (t.tabIndex = 0, t.focus())
          },
          g = function() {
              var t = i.getNode(c),
                  e = t.querySelectorAll("." + l),
                  n = e.length - 1,
                  o = e[n];
              o && o.focus()
          },
          h = function(t) {
              t[t.length - 1].addEventListener("keydown", m)
          },
          w = function(t) {
              t[0].addEventListener("keydown", b)
          },
          y = function() {
              var t = i.getNode(c),
                  e = t.querySelectorAll("." + l);
              e.length && (h(e), w(e))
          },
          x = function(t) {
              if (i.getNode(u) === t.target) return r.onAction(a.CANCEL_KEY)
          },
          _ = function(t) {
              var e = i.getNode(u);
              e.removeEventListener("click", x), t && e.addEventListener("click", x)
          },
          k = function(t) {
              o.default.timer && clearTimeout(o.default.timer), t && (o.default.timer = window.setTimeout(function() {
                  return r.onAction(a.CANCEL_KEY)
              }, t))
          },
          O = function(t) {
              t.closeOnEsc ? document.addEventListener("keyup", p) : document.removeEventListener("keyup", p), t.dangerMode ? v() : g(), y(), _(t.closeOnClickOutside), k(t.timer)
          };
      e.default = O
  }, function(t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
          value: !0
      });
      var o = n(1),
          r = n(3),
          i = n(37),
          a = n(38),
          s = {
              title: null,
              text: null,
              icon: null,
              buttons: r.defaultButtonList,
              content: null,
              className: null,
              closeOnClickOutside: !0,
              closeOnEsc: !0,
              dangerMode: !1,
              timer: null
          },
          c = Object.assign({}, s);
      e.setDefaults = function(t) {
          c = Object.assign({}, s, t)
      };
      var l = function(t) {
              var e = t && t.button,
                  n = t && t.buttons;
              return void 0 !== e && void 0 !== n && o.throwErr("Cannot set both 'button' and 'buttons' options!"), void 0 !== e ? {
                  confirm: e
              } : n
          },
          u = function(t) {
              return o.ordinalSuffixOf(t + 1)
          },
          f = function(t, e) {
              o.throwErr(u(e) + " argument ('" + t + "') is invalid")
          },
          d = function(t, e) {
              var n = t + 1,
                  r = e[n];
              o.isPlainObject(r) || void 0 === r || o.throwErr("Expected " + u(n) + " argument ('" + r + "') to be a plain object")
          },
          p = function(t, e) {
              var n = t + 1,
                  r = e[n];
              void 0 !== r && o.throwErr("Unexpected " + u(n) + " argument (" + r + ")")
          },
          m = function(t, e, n, r) {
              var i = typeof e,
                  a = "string" === i,
                  s = e instanceof Element;
              if (a) {
                  if (0 === n) return {
                      text: e
                  };
                  if (1 === n) return {
                      text: e,
                      title: r[0]
                  };
                  if (2 === n) return d(n, r), {
                      icon: e
                  };
                  f(e, n)
              } else {
                  if (s && 0 === n) return d(n, r), {
                      content: e
                  };
                  if (o.isPlainObject(e)) return p(n, r), e;
                  f(e, n)
              }
          };
      e.getOpts = function() {
          for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
          var n = {};
          t.forEach(function(e, o) {
              var r = m(0, e, o, t);
              Object.assign(n, r)
          });
          var o = l(n);
          n.buttons = r.getButtonListOpts(o), delete n.button, n.content = i.getContentOpts(n.content);
          var u = Object.assign({}, s, c, n);
          return Object.keys(u).forEach(function(t) {
              a.DEPRECATED_OPTS[t] && a.logDeprecation(t)
          }), u
      }
  }, function(t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
          value: !0
      });
      var o = n(1),
          r = {
              element: "input",
              attributes: {
                  placeholder: ""
              }
          };
      e.getContentOpts = function(t) {
          var e = {};
          return o.isPlainObject(t) ? Object.assign(e, t) : t instanceof Element ? {
              element: t
          } : "input" === t ? r : null
      }
  }, function(t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
          value: !0
      }), e.logDeprecation = function(t) {
          var n = e.DEPRECATED_OPTS[t],
              o = n.onlyRename,
              r = n.replacement,
              i = n.subOption,
              a = n.link,
              s = o ? "renamed" : "deprecated",
              c = 'SweetAlert warning: "' + t + '" option has been ' + s + ".";
          if (r) {
              c += " Please use" + (i ? ' "' + i + '" in ' : " ") + '"' + r + '" instead.'
          }
          var l = "https://sweetalert.js.org";
          c += a ? " More details: " + l + a : " More details: " + l + "/guides/#upgrading-from-1x", console.warn(c)
      }, e.DEPRECATED_OPTS = {
          type: {
              replacement: "icon",
              link: "/docs/#icon"
          },
          imageUrl: {
              replacement: "icon",
              link: "/docs/#icon"
          },
          customClass: {
              replacement: "className",
              onlyRename: !0,
              link: "/docs/#classname"
          },
          imageSize: {},
          showCancelButton: {
              replacement: "buttons",
              link: "/docs/#buttons"
          },
          showConfirmButton: {
              replacement: "button",
              link: "/docs/#button"
          },
          confirmButtonText: {
              replacement: "button",
              link: "/docs/#button"
          },
          confirmButtonColor: {},
          cancelButtonText: {
              replacement: "buttons",
              link: "/docs/#buttons"
          },
          closeOnConfirm: {
              replacement: "button",
              subOption: "closeModal",
              link: "/docs/#button"
          },
          closeOnCancel: {
              replacement: "buttons",
              subOption: "closeModal",
              link: "/docs/#buttons"
          },
          showLoaderOnConfirm: {
              replacement: "buttons"
          },
          animation: {},
          inputType: {
              replacement: "content",
              link: "/docs/#content"
          },
          inputValue: {
              replacement: "content",
              link: "/docs/#content"
          },
          inputPlaceholder: {
              replacement: "content",
              link: "/docs/#content"
          },
          html: {
              replacement: "content",
              link: "/docs/#content"
          },
          allowEscapeKey: {
              replacement: "closeOnEsc",
              onlyRename: !0,
              link: "/docs/#closeonesc"
          },
          allowClickOutside: {
              replacement: "closeOnClickOutside",
              onlyRename: !0,
              link: "/docs/#closeonclickoutside"
          }
      }
  }])
});;
'use strict';
var editorHTML, editorCSS, userCSS, userHTML, mAssert = [],
  mTypeTask = [],
  numTask = task['task'].length;
var disabled = task['disabled'] || "";
var id_html = document.getElementById('practice_html');
if (id_html != null) {
  let readOnlyHTML = (disabled == "html") ? "nocursor" : false;
  editorHTML = CodeMirror.fromTextArea(id_html, {
      mode: 'text/html',
      lineNumbers: true,
      readOnly: readOnlyHTML
  });
}
var id_css = document.getElementById('practice_css');
if (id_css != null) {
  let readOnlyCSS = (disabled == "css") ? "nocursor" : false;
  editorCSS = CodeMirror.fromTextArea(id_css, {
      mode: 'text/css',
      lineNumbers: true,
      readOnly: readOnlyCSS
  });
}
for (var i = 0; i < numTask; i++) {
  mAssert[i] = task['task'][i]['assert'];
  mTypeTask[i] = task['task'][i]['type'] || "html";
}

function practiceResult() {
  if (editorCSS) userCSS = editorCSS.getValue();
  else userCSS = "";
  if (editorHTML) userHTML = editorHTML.getValue();
  else userHTML = "";
  var iframe = document.getElementById('practice_browser');
  var codeFull = checkDoctype(userCSS, userHTML);
  var iframeContent = (iframe.contentWindow) ? iframe.contentWindow : (iframe.contentDocument.document) ? iframe.contentDocument.document : iframe.contentDocument;
  iframeContent.document.open();
  iframeContent.document.write(codeFull);
  iframeContent.document.close();
}

function checkDoctype(css, html) {
  var code;
  var doctype = html.toLowerCase().indexOf('<!doctype');
  if (doctype === -1) {
      code = '<!DOCTYPE html><html><head><meta charset="utf-8"><title>webref.ru</title><style>' + css + '</style><base target="_blank" href="/example/"></head><body>' + html + '</body></html>';
  } else code = html;
  return code;
}

function validateTask() {
  var correctAll = true;
  for (i = 0; i < numTask; i++) {
      if (!practice.correct[i]) correctAll = false;
  }
  if (correctAll) {
      practice.showSuccess();
  }
}
var practice = new Vue({
  el: '#v-practice',
  data: {
      task,
      correct: [],
      animated: [],
      nextId: nextId
  },
  methods: {
      run: function() {
          practiceResult();
      },
      check: function() {
          practiceResult();
          for (i = 0; i < numTask; i++) {
              if (mTypeTask[i] == "html") Vue.set(this.correct, i, this.testCode(userHTML, mAssert[i]));
              else if (mTypeTask[i] == "css") Vue.set(this.correct, i, this.testCode(userCSS, mAssert[i]));
              Vue.set(this.animated, i, !this.correct[i]);
          }
          validateTask();
      },
      testCode: function(testString, patternString) {
          patternString = patternString.replace(/(\s+)/gm, "");
          testString = testString.replace(/(\r\n|\n|\r|\s+)/gm, "");
          var re = new RegExp(patternString, 'i');
          return re.test(testString);
      },
      removeShake: function(index) {
          Vue.set(this.animated, index, false);
      },
      showSuccess() {
          var b = (nextId > 0) ? {
              cancel: "Закрыть",
              next: {
                  text: "Следующая задача",
                  value: "next"
              }
          } : {
              cancel: "Закрыть"
          };
          swal({
              icon: "success",
              title: "Поздравляем!",
              text: "Вы правильно выполнили задачу.",
              buttons: b,
          }).then((value) => {
              if (value == "next") {
                  document.location = "/practice/" + nextId;
              }
          });
      }
  }
});
Vue.config.devtools = false;
practice.run();;
! function(e, n) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : (e = e || self)["vue-scrollto"] = n()
}(this, function() {
  "use strict";

  function e(n) {
      return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
      } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(n)
  }

  function n() {
      return (n = Object.assign || function(e) {
          for (var n = 1; n < arguments.length; n++) {
              var t = arguments[n];
              for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
          }
          return e
      }).apply(this, arguments)
  }
  var t = 4,
      o = .001,
      r = 1e-7,
      i = 10,
      u = 11,
      f = 1 / (u - 1),
      a = "function" == typeof Float32Array;

  function c(e, n) {
      return 1 - 3 * n + 3 * e
  }

  function l(e, n) {
      return 3 * n - 6 * e
  }

  function s(e) {
      return 3 * e
  }

  function d(e, n, t) {
      return ((c(n, t) * e + l(n, t)) * e + s(n)) * e
  }

  function v(e, n, t) {
      return 3 * c(n, t) * e * e + 2 * l(n, t) * e + s(n)
  }

  function y(e) {
      return e
  }
  var p = function(e, n, c, l) {
          if (!(0 <= e && e <= 1 && 0 <= c && c <= 1)) throw new Error("bezier x values must be in [0, 1] range");
          if (e === n && c === l) return y;
          for (var s = a ? new Float32Array(u) : new Array(u), p = 0; p < u; ++p) s[p] = d(p * f, e, c);

          function m(n) {
              for (var a = 0, l = 1, y = u - 1; l !== y && s[l] <= n; ++l) a += f;
              var p = a + (n - s[--l]) / (s[l + 1] - s[l]) * f,
                  m = v(p, e, c);
              return m >= o ? function(e, n, o, r) {
                  for (var i = 0; i < t; ++i) {
                      var u = v(n, o, r);
                      if (0 === u) return n;
                      n -= (d(n, o, r) - e) / u
                  }
                  return n
              }(n, p, e, c) : 0 === m ? p : function(e, n, t, o, u) {
                  var f, a, c = 0;
                  do {
                      (f = d(a = n + (t - n) / 2, o, u) - e) > 0 ? t = a : n = a
                  } while (Math.abs(f) > r && ++c < i);
                  return a
              }(n, a, a + f, e, c)
          }
          return function(e) {
              return 0 === e ? 0 : 1 === e ? 1 : d(m(e), n, l)
          }
      },
      m = {
          ease: [.25, .1, .25, 1],
          linear: [0, 0, 1, 1],
          "ease-in": [.42, 0, 1, 1],
          "ease-out": [0, 0, .58, 1],
          "ease-in-out": [.42, 0, .58, 1]
      },
      w = !1;
  try {
      var b = Object.defineProperty({}, "passive", {
          get: function() {
              w = !0
          }
      });
      window.addEventListener("test", null, b)
  } catch (e) {}
  var g = {
          $: function(e) {
              return "string" != typeof e ? e : document.querySelector(e)
          },
          on: function(e, n, t) {
              var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                  passive: !1
              };
              n instanceof Array || (n = [n]);
              for (var r = 0; r < n.length; r++) e.addEventListener(n[r], t, !!w && o)
          },
          off: function(e, n, t) {
              n instanceof Array || (n = [n]);
              for (var o = 0; o < n.length; o++) e.removeEventListener(n[o], t)
          },
          cumulativeOffset: function(e) {
              var n = 0,
                  t = 0;
              do {
                  n += e.offsetTop || 0, t += e.offsetLeft || 0, e = e.offsetParent
              } while (e);
              return {
                  top: n,
                  left: t
              }
          }
      },
      h = ["mousedown", "wheel", "DOMMouseScroll", "mousewheel", "keyup", "touchmove"],
      L = {
          container: "body",
          duration: 500,
          easing: "ease",
          offset: 0,
          force: !0,
          cancelable: !0,
          onStart: !1,
          onDone: !1,
          onCancel: !1,
          x: !1,
          y: !0
      };

  function S(e) {
      L = n({}, L, e)
  }
  var T = function() {
          var n, t, o, r, i, u, f, a, c, l, s, d, v, y, w, b, S, T, O, E, x, A, C, D, j = function(e) {
              f && (E = e, O = !0)
          };

          function P(e) {
              if (O) return F();
              A || (A = e), C = e - A, D = Math.min(C / o, 1), D = x(D), H(t, w + T * D, v + S * D), C < o ? window.requestAnimationFrame(P) : F()
          }

          function F() {
              O || H(t, b, y), A = !1, g.off(t, h, j), O && l && l(E, n), !O && c && c(n)
          }

          function H(e, n, t) {
              d && (e.scrollTop = n), s && (e.scrollLeft = t), "body" === e.tagName.toLowerCase() && (d && (document.documentElement.scrollTop = n), s && (document.documentElement.scrollLeft = t))
          }
          return function(A, C) {
              var D = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
              if ("object" === e(C) ? D = C : "number" == typeof C && (D.duration = C), !(n = g.$(A))) return console.warn("[vue-scrollto warn]: Trying to scroll to an element that is not on the page: " + A);
              t = g.$(D.container || L.container), o = D.duration || L.duration, r = D.easing || L.easing, i = D.offset || L.offset, u = D.hasOwnProperty("force") ? !1 !== D.force : L.force, f = D.hasOwnProperty("cancelable") ? !1 !== D.cancelable : L.cancelable, a = D.onStart || L.onStart, c = D.onDone || L.onDone, l = D.onCancel || L.onCancel, s = void 0 === D.x ? L.x : D.x, d = void 0 === D.y ? L.y : D.y;
              var F = g.cumulativeOffset(t),
                  H = g.cumulativeOffset(n);
              if ("function" == typeof i && (i = i(n, t)), w = function(e) {
                      var n = e.scrollTop;
                      return "body" === e.tagName.toLowerCase() && (n = n || document.documentElement.scrollTop), n
                  }(t), b = H.top - F.top + i, v = function(e) {
                      var n = e.scrollLeft;
                      return "body" === e.tagName.toLowerCase() && (n = n || document.documentElement.scrollLeft), n
                  }(t), y = H.left - F.left + i, O = !1, T = b - w, S = y - v, !u) {
                  var M = "body" === t.tagName.toLowerCase() ? document.documentElement.clientHeight || window.innerHeight : t.offsetHeight,
                      N = w,
                      V = N + M,
                      $ = b - i,
                      k = $ + n.offsetHeight;
                  if ($ >= N && k <= V) return void(c && c(n))
              }
              if (a && a(n), T || S) return "string" == typeof r && (r = m[r] || m.ease), x = p.apply(p, r), g.on(t, h, j, {
                      passive: !0
                  }), window.requestAnimationFrame(P),
                  function() {
                      E = null, O = !0
                  };
              c && c(n)
          }
      }(),
      O = [];

  function E(e) {
      var n = function(e) {
          for (var n = 0; n < O.length; ++n)
              if (O[n].el === e) return O[n]
      }(e);
      return n || (O.push(n = {
          el: e,
          binding: {}
      }), n)
  }

  function x(e) {
      e.preventDefault();
      var n = E(this).binding;
      if ("string" == typeof n.value) return T(n.value);
      T(n.value.el || n.value.element, n.value)
  }
  var A = {
          bind: function(e, n) {
              E(e).binding = n, g.on(e, "click", x)
          },
          unbind: function(e) {
              ! function(e) {
                  for (var n = 0; n < O.length; ++n)
                      if (O[n].el === e) return O.splice(n, 1), !0
              }(e), g.off(e, "click", x)
          },
          update: function(e, n) {
              E(e).binding = n
          },
          scrollTo: T,
          bindings: O
      },
      C = function(e, n) {
          n && S(n), e.directive("scroll-to", A), e.prototype.$scrollTo = A.scrollTo
      };
  return "undefined" != typeof window && window.Vue && (window.VueScrollTo = A, window.VueScrollTo.setDefaults = S, window.Vue.use(C)), A.install = C, A
});
var elements = [{
  e: '<!doctype>',
  t: 'html'
}, {
  e: '<a>',
  t: 'html'
}, {
  e: '<abbr>',
  t: 'html'
}, {
  e: '<acronym>',
  t: 'html'
}, {
  e: '<address>',
  t: 'html'
}, {
  e: '<applet>',
  t: 'html'
}, {
  e: '<area>',
  t: 'html'
}, {
  e: '<article>',
  t: 'html'
}, {
  e: '<aside>',
  t: 'html'
}, {
  e: '<audio>',
  t: 'html'
}, {
  e: '<b>',
  t: 'html'
}, {
  e: '<base>',
  t: 'html'
}, {
  e: '<basefont>',
  t: 'html'
}, {
  e: '<bdi>',
  t: 'html'
}, {
  e: '<bdo>',
  t: 'html'
}, {
  e: '<bgsound>',
  t: 'html'
}, {
  e: '<big>',
  t: 'html'
}, {
  e: '<blink>',
  t: 'html'
}, {
  e: '<blockquote>',
  t: 'html'
}, {
  e: '<body>',
  t: 'html'
}, {
  e: '<br>',
  t: 'html'
}, {
  e: '<button>',
  t: 'html'
}, {
  e: '<canvas>',
  t: 'html'
}, {
  e: '<caption>',
  t: 'html'
}, {
  e: '<center>',
  t: 'html'
}, {
  e: '<cite>',
  t: 'html'
}, {
  e: '<code>',
  t: 'html'
}, {
  e: '<col>',
  t: 'html'
}, {
  e: '<colgroup>',
  t: 'html'
}, {
  e: '<command>',
  t: 'html'
}, {
  e: '<comment>',
  t: 'html'
}, {
  e: '<data>',
  t: 'html'
}, {
  e: '<datalist>',
  t: 'html'
}, {
  e: '<dd>',
  t: 'html'
}, {
  e: '<del>',
  t: 'html'
}, {
  e: '<details>',
  t: 'html'
}, {
  e: '<dfn>',
  t: 'html'
}, {
  e: '<dialog>',
  t: 'html'
}, {
  e: '<dir>',
  t: 'html'
}, {
  e: '<div>',
  t: 'html'
}, {
  e: '<dl>',
  t: 'html'
}, {
  e: '<dt>',
  t: 'html'
}, {
  e: '<em>',
  t: 'html'
}, {
  e: '<embed>',
  t: 'html'
}, {
  e: '<fieldset>',
  t: 'html'
}, {
  e: '<figcaption>',
  t: 'html'
}, {
  e: '<figure>',
  t: 'html'
}, {
  e: '<font>',
  t: 'html'
}, {
  e: '<footer>',
  t: 'html'
}, {
  e: '<form>',
  t: 'html'
}, {
  e: '<frame>',
  t: 'html'
}, {
  e: '<frameset>',
  t: 'html'
}, {
  e: '<h1>',
  t: 'html'
}, {
  e: '<h2>',
  t: 'html'
}, {
  e: '<h3>',
  t: 'html'
}, {
  e: '<h4>',
  t: 'html'
}, {
  e: '<h5>',
  t: 'html'
}, {
  e: '<h6>',
  t: 'html'
}, {
  e: '<head>',
  t: 'html'
}, {
  e: '<header>',
  t: 'html'
}, {
  e: '<hgroup>',
  t: 'html'
}, {
  e: '<hr>',
  t: 'html'
}, {
  e: '<html>',
  t: 'html'
}, {
  e: '<i>',
  t: 'html'
}, {
  e: '<iframe>',
  t: 'html'
}, {
  e: '<img>',
  t: 'html'
}, {
  e: '<input>',
  t: 'html'
}, {
  e: '<ins>',
  t: 'html'
}, {
  e: '<isindex>',
  t: 'html'
}, {
  e: '<kbd>',
  t: 'html'
}, {
  e: '<keygen>',
  t: 'html'
}, {
  e: '<label>',
  t: 'html'
}, {
  e: '<legend>',
  t: 'html'
}, {
  e: '<li>',
  t: 'html'
}, {
  e: '<link>',
  t: 'html'
}, {
  e: '<listing>',
  t: 'html'
}, {
  e: '<main>',
  t: 'html'
}, {
  e: '<map>',
  t: 'html'
}, {
  e: '<mark>',
  t: 'html'
}, {
  e: '<marquee>',
  t: 'html'
}, {
  e: '<menu>',
  t: 'html'
}, {
  e: '<menuitem>',
  t: 'html'
}, {
  e: '<meta>',
  t: 'html'
}, {
  e: '<meter>',
  t: 'html'
}, {
  e: '<multicol>',
  t: 'html'
}, {
  e: '<nav>',
  t: 'html'
}, {
  e: '<nobr>',
  t: 'html'
}, {
  e: '<noembed>',
  t: 'html'
}, {
  e: '<noframes>',
  t: 'html'
}, {
  e: '<noindex>',
  t: 'html'
}, {
  e: '<noscript>',
  t: 'html'
}, {
  e: '<object>',
  t: 'html'
}, {
  e: '<ol>',
  t: 'html'
}, {
  e: '<optgroup>',
  t: 'html'
}, {
  e: '<option>',
  t: 'html'
}, {
  e: '<output>',
  t: 'html'
}, {
  e: '<p>',
  t: 'html'
}, {
  e: '<param>',
  t: 'html'
}, {
  e: '<picture>',
  t: 'html'
}, {
  e: '<plaintext>',
  t: 'html'
}, {
  e: '<pre>',
  t: 'html'
}, {
  e: '<progress>',
  t: 'html'
}, {
  e: '<q>',
  t: 'html'
}, {
  e: '<rp>',
  t: 'html'
}, {
  e: '<rt>',
  t: 'html'
}, {
  e: '<rtc>',
  t: 'html'
}, {
  e: '<ruby>',
  t: 'html'
}, {
  e: '<s>',
  t: 'html'
}, {
  e: '<samp>',
  t: 'html'
}, {
  e: '<script>',
  t: 'html'
}, {
  e: '<section>',
  t: 'html'
}, {
  e: '<select>',
  t: 'html'
}, {
  e: '<small>',
  t: 'html'
}, {
  e: '<span>',
  t: 'html'
}, {
  e: '<spacer>',
  t: 'html'
}, {
  e: '<source>',
  t: 'html'
}, {
  e: '<strike>',
  t: 'html'
}, {
  e: '<strong>',
  t: 'html'
}, {
  e: '<style>',
  t: 'html'
}, {
  e: '<sub>',
  t: 'html'
}, {
  e: '<summary>',
  t: 'html'
}, {
  e: '<sup>',
  t: 'html'
}, {
  e: '<table>',
  t: 'html'
}, {
  e: '<tbody>',
  t: 'html'
}, {
  e: '<td>',
  t: 'html'
}, {
  e: '<template>',
  t: 'html'
}, {
  e: '<textarea>',
  t: 'html'
}, {
  e: '<tfoot>',
  t: 'html'
}, {
  e: '<th>',
  t: 'html'
}, {
  e: '<thead>',
  t: 'html'
}, {
  e: '<time>',
  t: 'html'
}, {
  e: '<title>',
  t: 'html'
}, {
  e: '<tr>',
  t: 'html'
}, {
  e: '<track>',
  t: 'html'
}, {
  e: '<tt>',
  t: 'html'
}, {
  e: '<u>',
  t: 'html'
}, {
  e: '<ul>',
  t: 'html'
}, {
  e: '<var>',
  t: 'html'
}, {
  e: '<wbr>',
  t: 'html'
}, {
  e: '<video>',
  t: 'html'
}, {
  e: '<xmp>',
  t: 'html'
}, {
  e: 'align-content',
  t: 'css'
}, {
  e: 'align-items',
  t: 'css'
}, {
  e: 'align-self',
  t: 'css'
}, {
  e: 'all',
  t: 'css'
}, {
  e: 'animation',
  t: 'css'
}, {
  e: 'animation-delay',
  t: 'css'
}, {
  e: 'animation-direction',
  t: 'css'
}, {
  e: 'animation-duration',
  t: 'css'
}, {
  e: 'animation-iteration-count',
  t: 'css'
}, {
  e: 'animation-fill-mode',
  t: 'css'
}, {
  e: 'animation-name',
  t: 'css'
}, {
  e: 'animation-play-state',
  t: 'css'
}, {
  e: 'animation-timing-function',
  t: 'css'
}, {
  e: 'backdrop-filter',
  t: 'css'
}, {
  e: 'backface-visibility',
  t: 'css'
}, {
  e: 'background',
  t: 'css'
}, {
  e: 'background-attachment',
  t: 'css'
}, {
  e: 'background-blend-mode',
  t: 'css'
}, {
  e: 'background-clip',
  t: 'css'
}, {
  e: 'background-color',
  t: 'css'
}, {
  e: 'background-image',
  t: 'css'
}, {
  e: 'background-origin',
  t: 'css'
}, {
  e: 'background-position',
  t: 'css'
}, {
  e: 'background-position-x',
  t: 'css'
}, {
  e: 'background-position-y',
  t: 'css'
}, {
  e: 'background-repeat',
  t: 'css'
}, {
  e: 'background-size',
  t: 'css'
}, {
  e: 'block-size',
  t: 'css'
}, {
  e: 'border',
  t: 'css'
}, {
  e: 'border-bottom',
  t: 'css'
}, {
  e: 'border-bottom-color',
  t: 'css'
}, {
  e: 'border-bottom-left-radius',
  t: 'css'
}, {
  e: 'border-bottom-right-radius',
  t: 'css'
}, {
  e: 'border-bottom-style',
  t: 'css'
}, {
  e: 'border-bottom-width',
  t: 'css'
}, {
  e: 'border-collapse',
  t: 'css'
}, {
  e: 'border-color',
  t: 'css'
}, {
  e: 'border-image',
  t: 'css'
}, {
  e: 'border-left',
  t: 'css'
}, {
  e: 'border-left-color',
  t: 'css'
}, {
  e: 'border-left-style',
  t: 'css'
}, {
  e: 'border-left-width',
  t: 'css'
}, {
  e: 'border-radius',
  t: 'css'
}, {
  e: 'border-right',
  t: 'css'
}, {
  e: 'border-right-color',
  t: 'css'
}, {
  e: 'border-right-style',
  t: 'css'
}, {
  e: 'border-right-width',
  t: 'css'
}, {
  e: 'border-spacing',
  t: 'css'
}, {
  e: 'border-style',
  t: 'css'
}, {
  e: 'border-top',
  t: 'css'
}, {
  e: 'border-top-color',
  t: 'css'
}, {
  e: 'border-top-left-radius',
  t: 'css'
}, {
  e: 'border-top-right-radius',
  t: 'css'
}, {
  e: 'border-top-style',
  t: 'css'
}, {
  e: 'border-top-width',
  t: 'css'
}, {
  e: 'border-width',
  t: 'css'
}, {
  e: 'bottom',
  t: 'css'
}, {
  e: 'box-decoration-break',
  t: 'css'
}, {
  e: 'box-shadow',
  t: 'css'
}, {
  e: 'box-sizing',
  t: 'css'
}, {
  e: 'caption-side',
  t: 'css'
}, {
  e: 'caret-color',
  t: 'css'
}, {
  e: 'clear',
  t: 'css'
}, {
  e: 'clip',
  t: 'css'
}, {
  e: 'color',
  t: 'css'
}, {
  e: 'column-count',
  t: 'css'
}, {
  e: 'column-fill',
  t: 'css'
}, {
  e: 'column-gap',
  t: 'css'
}, {
  e: 'column-rule',
  t: 'css'
}, {
  e: 'column-rule-color',
  t: 'css'
}, {
  e: 'column-rule-style',
  t: 'css'
}, {
  e: 'column-rule-width',
  t: 'css'
}, {
  e: 'column-span',
  t: 'css'
}, {
  e: 'column-width',
  t: 'css'
}, {
  e: 'columns',
  t: 'css'
}, {
  e: 'content',
  t: 'css'
}, {
  e: 'counter-increment',
  t: 'css'
}, {
  e: 'counter-reset',
  t: 'css'
}, {
  e: 'cursor',
  t: 'css'
}, {
  e: 'direction',
  t: 'css'
}, {
  e: 'display',
  t: 'css'
}, {
  e: 'empty-cells',
  t: 'css'
}, {
  e: 'filter',
  t: 'css'
}, {
  e: 'flex',
  t: 'css'
}, {
  e: 'flex-basis',
  t: 'css'
}, {
  e: 'flex-direction',
  t: 'css'
}, {
  e: 'flex-flow',
  t: 'css'
}, {
  e: 'flex-grow',
  t: 'css'
}, {
  e: 'flex-shrink',
  t: 'css'
}, {
  e: 'flex-wrap',
  t: 'css'
}, {
  e: 'float',
  t: 'css'
}, {
  e: 'font',
  t: 'css'
}, {
  e: 'font-family',
  t: 'css'
}, {
  e: 'font-kerning',
  t: 'css'
}, {
  e: 'font-size',
  t: 'css'
}, {
  e: 'font-stretch',
  t: 'css'
}, {
  e: 'font-style',
  t: 'css'
}, {
  e: 'font-variant',
  t: 'css'
}, {
  e: 'font-weight',
  t: 'css'
}, {
  e: 'height',
  t: 'css'
}, {
  e: 'hyphens',
  t: 'css'
}, {
  e: 'image-rendering',
  t: 'css'
}, {
  e: 'justify-content',
  t: 'css'
}, {
  e: 'left',
  t: 'css'
}, {
  e: 'letter-spacing',
  t: 'css'
}, {
  e: 'line-clamp',
  t: 'css'
}, {
  e: 'line-height',
  t: 'css'
}, {
  e: 'list-style',
  t: 'css'
}, {
  e: 'list-style-image',
  t: 'css'
}, {
  e: 'list-style-position',
  t: 'css'
}, {
  e: 'list-style-type',
  t: 'css'
}, {
  e: 'margin',
  t: 'css'
}, {
  e: 'margin-bottom',
  t: 'css'
}, {
  e: 'margin-left',
  t: 'css'
}, {
  e: 'margin-right',
  t: 'css'
}, {
  e: 'margin-top',
  t: 'css'
}, {
  e: 'max-height',
  t: 'css'
}, {
  e: 'max-width',
  t: 'css'
}, {
  e: 'min-height',
  t: 'css'
}, {
  e: 'min-width',
  t: 'css'
}, {
  e: 'mix-blend-mode',
  t: 'css'
}, {
  e: 'object-fit',
  t: 'css'
}, {
  e: 'opacity',
  t: 'css'
}, {
  e: 'order',
  t: 'css'
}, {
  e: 'orphans',
  t: 'css'
}, {
  e: 'outline',
  t: 'css'
}, {
  e: 'outline-color',
  t: 'css'
}, {
  e: 'outline-offset',
  t: 'css'
}, {
  e: 'outline-style',
  t: 'css'
}, {
  e: 'outline-width',
  t: 'css'
}, {
  e: 'overflow',
  t: 'css'
}, {
  e: 'overflow-x',
  t: 'css'
}, {
  e: 'overflow-y',
  t: 'css'
}, {
  e: 'padding',
  t: 'css'
}, {
  e: 'padding-block',
  t: 'css'
}, {
  e: 'padding-block-end',
  t: 'css'
}, {
  e: 'padding-block-start',
  t: 'css'
}, {
  e: 'padding-bottom',
  t: 'css'
}, {
  e: 'padding-inline',
  t: 'css'
}, {
  e: 'padding-inline-end',
  t: 'css'
}, {
  e: 'padding-inline-start',
  t: 'css'
}, {
  e: 'padding-left',
  t: 'css'
}, {
  e: 'padding-right',
  t: 'css'
}, {
  e: 'padding-top',
  t: 'css'
}, {
  e: 'page-break-after',
  t: 'css'
}, {
  e: 'page-break-before',
  t: 'css'
}, {
  e: 'page-break-inside',
  t: 'css'
}, {
  e: 'perspective',
  t: 'css'
}, {
  e: 'perspective-origin',
  t: 'css'
}, {
  e: 'place-content',
  t: 'css'
}, {
  e: 'pointer-events',
  t: 'css'
}, {
  e: 'position',
  t: 'css'
}, {
  e: 'quotes',
  t: 'css'
}, {
  e: 'resize',
  t: 'css'
}, {
  e: 'right',
  t: 'css'
}, {
  e: 'scroll-behavior',
  t: 'css'
}, {
  e: 'tab-size',
  t: 'css'
}, {
  e: 'table-layout',
  t: 'css'
}, {
  e: 'text-align',
  t: 'css'
}, {
  e: 'text-align-last',
  t: 'css'
}, {
  e: 'text-decoration',
  t: 'css'
}, {
  e: 'text-decoration-color',
  t: 'css'
}, {
  e: 'text-decoration-line',
  t: 'css'
}, {
  e: 'text-decoration-style',
  t: 'css'
}, {
  e: 'text-decoration-skip-ink',
  t: 'css'
}, {
  e: 'text-emphasis',
  t: 'css'
}, {
  e: 'text-emphasis-color',
  t: 'css'
}, {
  e: 'text-emphasis-position',
  t: 'css'
}, {
  e: 'text-emphasis-style',
  t: 'css'
}, {
  e: 'text-indent',
  t: 'css'
}, {
  e: 'text-orientation',
  t: 'css'
}, {
  e: 'text-overflow',
  t: 'css'
}, {
  e: 'text-shadow',
  t: 'css'
}, {
  e: 'text-transform',
  t: 'css'
}, {
  e: 'top',
  t: 'css'
}, {
  e: 'transform',
  t: 'css'
}, {
  e: 'transform-origin',
  t: 'css'
}, {
  e: 'transform-style',
  t: 'css'
}, {
  e: 'transition',
  t: 'css'
}, {
  e: 'transition-delay',
  t: 'css'
}, {
  e: 'transition-duration',
  t: 'css'
}, {
  e: 'transition-property',
  t: 'css'
}, {
  e: 'transition-timing-function',
  t: 'css'
}, {
  e: 'unicode-bidi',
  t: 'css'
}, {
  e: 'user-select',
  t: 'css'
}, {
  e: 'vertical-align',
  t: 'css'
}, {
  e: 'visibility',
  t: 'css'
}, {
  e: 'white-space',
  t: 'css'
}, {
  e: 'widows',
  t: 'css'
}, {
  e: 'width',
  t: 'css'
}, {
  e: 'word-break',
  t: 'css'
}, {
  e: 'word-spacing',
  t: 'css'
}, {
  e: 'word-wrap',
  t: 'css'
}, {
  e: 'writing-mode',
  t: 'css'
}, {
  e: 'z-index',
  t: 'css'
}, {
  e: 'zoom',
  t: 'css'
}];
Vue.component('w-autocomplete', {
  props: {
      value: {
          type: String,
          required: true
      },
      suggestions: {
          type: Array,
          required: true
      },
      limit: {
          type: Number,
          default: 10
      }
  },
  data: function() {
      return {
          open: false,
          current: 0
      }
  },
  computed: {
      matches() {
          return this.suggestions.filter((obj) => {
              return obj.e.indexOf(this.value.toLowerCase()) >= 0
          })
      },
      openSuggestion() {
          return this.value !== '' && this.matches.length !== 0;
      }
  },
  methods: {
      updateValue(value) {
          if (this.open === false) {
              this.open = true;
              this.current = 0;
          }
          this.$emit('input', value);
      },
      enter() {
          this.$emit('input', this.matches[this.current].e)
          this.open = false;
          this.openLink(this.current);
      },
      up() {
          if (this.current > 0) {
              this.current--;
          }
      },
      down() {
          if (this.current < this.matches.length - 1) {
              this.current++;
          }
      },
      isActive(index) {
          return index === this.current
      },
      suggestionClick(index) {
          this.$emit('input', this.matches[index].e);
          this.open = false;
          this.openLink(index);
      },
      getType(index) {
          return this.matches[index].t;
      },
      openLink(index) {
          let link;
          if (this.matches[index].t == 'css') link = '/css/' + this.matches[index].e;
          else if (this.matches[index].t == 'html') {
              let html = this.matches[index].e.replace(/[<>]/g, '');
              link = '/html/' + html;
          }
          document.location.href = link;
      }
  },
  template: '<div class="w-autocomplete" :class="{open:openSuggestion}">\
      <input type="search" class="autocomplete-input input" placeholder="Введите HTML или CSS" :value="value" @input="updateValue($event.target.value)" @keydown.enter="enter" @keydown.down="down" @keydown.up="up">\
      <ul class="autocomplete-result">\
          <li v-for="(item, index) in matches" v-if="index <= limit-1" :class="[{active: isActive(index)}, getType(index)]" @click="suggestionClick(index)">\
            <span>{{ item.e }}</span>\
          </li>\
      </ul>\
  </div>'
});
var webrefSidebar = new Vue({
  el: "#webref-sidebar",
  data: {
      suggestions: elements,
      value: ''
  },
  mounted: function() {
      this.$nextTick(function() {
          let attr = document.querySelector('#menu-menu-attr li.active-trail');
          if (attr) VueScrollTo.scrollTo('li.active-trail', 500, {
              container: '#menu-menu-attr'
          });
          let html = document.querySelector('#menu-menu-html li.active-trail');
          if (html) VueScrollTo.scrollTo('li.active-trail', 500, {
              container: '#menu-menu-html'
          });
          let fun = document.querySelector('#menu-menu-css-fun li.active-trail');
          if (fun) VueScrollTo.scrollTo('li.active-trail', 500, {
              container: '#menu-menu-css-fun'
          });
          let css = document.querySelector('#menu-menu-css li.active-trail');
          if (css) VueScrollTo.scrollTo('li.active-trail', 500, {
              container: '#menu-menu-css'
          });
          let menu = document.querySelector('#book-navigation li.active-trail');
          if (menu) VueScrollTo.scrollTo('li.active-trail', 500, {
              container: '#book-navigation'
          });
      })
  }
});
Vue.config.devtools = false;;